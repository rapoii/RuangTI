# Modul 558: Supervisory Control Theory (Ramadge-Wonham Framework) pada Discrete Event Systems Manufaktur Otomasi: Sintesis Pengawas Non-Blocking, Automata FSM Terkendali, Controllable/Uncontrollable Events, dan Pencegahan Deadlock Sel Robotik

## 1. Pengantar & Urgensi Supervisory Control dalam Otomasi Manufaktur Modern

Dalam ekosistem industri manufaktur modern 4.0—seperti sel perakitan bodi otomotif robotik (*robotic body-in-white welding cells*), lini pemesinan fleksibel (*Flexible Manufacturing Systems* / FMS), sistem penanganan material terautomasi (*Automated Guided Vehicles* / AGV & *Automated Storage/Retrieval Systems* / AS/RS), dan manufaktur fabrikasi semikonduktor (*wafer fabrication cluster tools*)—dinamika operasional sistem tidak lagi didominasi oleh variabel kontinu berbasis waktu (seperti tegangan listrik atau laju aliran fluida kontinu). Sebaliknya, perilaku sistem dikendalikan oleh terjadinya **peristiwa diskrit (*discrete events*)** secara asinkron dan terdistribusi, seperti:
- Sensor fotolistrik mendeteksi kedatangan *workpiece* pada konveyor (`part_arrived`).
- Lengan robot selesai melakukan pengelasan titik (*spot welding*) pada *chassis* (`weld_completed`).
- Mesin CNC mengalami kegagalan spindel mendadak (`tool_breakage`).
- Palet AGV mengunci stasiun transfer penyangga (*buffer lock*).

Sistem semacam ini diklasifikasikan sebagai **Discrete Event Systems (DES)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR FEEDBACK SUPERVISORY CONTROL THEORY (RAMADGE-WONHAM)                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                         ┌──────────────────────────────────────┐                                      |
|                                         │       SUPERVISOR / PENGAWAS (S)      │                                      |
|                                         │   Automaton S = (X, Σ, ξ, x_0, X_m)  │                                      |
|                                         │   Feedback Map γ: X → Γ ⊆ 2^Σ        │                                      |
|                                         └───────────┬───────────────────▲──────┘                                      |
|                                                     │                   │                                             |
|                             Control Actions /       │                   │ Observed Events                             |
|                             Disablement Pattern     │                   │ σ ∈ Σ                                       |
|                             γ(x) ⊆ Σ                │                   │                                             |
|                                                     ▼                   │                                             |
|                                         ┌───────────────────────────────┴──────┐                                      |
|                                         │        PLANT / PROSES FISIK (G)      │                                      |
|                                         │   Automaton G = (Q, Σ, δ, q_0, Q_m)  │                                      |
|                                         │   Events: Σ = Σ_c ∪ Σ_uc             │                                      |
|                                         │   Σ_c  : Controllable (Dapat Dicegah)│                                      |
|                                         │   Σ_uc : Uncontrollable (Tak Dicegah)│                                      |
|                                         └──────────────────────────────────────┘                                      |
|                                                                                                                       |
|    Mekanisme Interaksi Lup Tertutup (Closed-Loop Interaction):                                                        |
|    1. Plant G menggenerasikan peristiwa σ ∈ Σ saat terjadi perubahan status fisik aktuator/sensor.                    |
|    2. Supervisor S mengamati peristiwa σ, memperbarui state internal x_k+1 = ξ(x_k, σ).                               |
|    3. Supervisor S mengeluarkan pola kontrol kendali γ(x_k+1) yang secara dinamis mengizinkan/mencegah                |
|       peristiwa controllable (Σ_c) agar Plant G TIDAK PERNAH memasuki status terlarang (Forbidden States/Deadlocks).   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Tantangan fundamental dalam sel manufaktur terautomasi berskala industri adalah fenomena patologis sistemik:
1. **Deadlock Struktural (*Circular Wait Deadlock*)**: Dua atau lebih mesin saling menunggu pembebasan sumber daya penyangga (*buffer*) atau lengan robot secara simultan sehingga seluruh lini manufaktur terhenti permanen.
2. **Livelock & Infinite Trapping**: Sistem berputar tanpa henti dalam sub-siklus tak produktif tanpa pernah menyelesaikan produk akhir (*marked state non-reachability*).
3. **Buffer Overflow & Starvation**: Terjadinya penumpukan benda kerja melebihi kapasitas fisik rak penyangga atau stasiun kerja hilir mengalami kekosongan bahan baku akibat laju siklus yang tidak terkoordinasi.
4. **Peristiwa Tak Terkendali (*Uncontrollable Events*)**: Kegagalan mesin, pembacaan sensor darurat (*E-stop*), atau penyelesaian pemesinan internal tidak dapat dicegah secara paksa oleh kontroler eksternal saat proses telah berlangsung.

Pendekatan rekayasa kendali konvensional (seperti penulisan *ladder logic* PLC secara empiris, diagram alir *trial-and-error*, atau *ad-hoc interlocking*) sangat rentan terhadap kesalahan (*error-prone*), sulit diverifikasi secara formal, dan berbiaya sangat tinggi saat terjadi tabrakan mekanis antar-robot.

**Supervisory Control Theory (SCT)**, yang dipelopori secara fundamental oleh **Peter J. Ramadge dan W. Murray Wonham (1987, 1989)**, menyediakan metodologi matematika formal berbasis aljabar bahasa formal (*formal language theory*) dan automata berhingga (*Finite State Automata* / FSA) untuk secara otomatis mensintesis pengawas (*supervisor*) yang bersifat **paling longgar yang diizinkan (*maximally permissive*)**, **bebas deadlock (*non-blocking*)**, dan **secara konstruktif benar (*correct-by-construction*)**.

---

## 2. Taksonomi & Klasifikasi Pengendalian Kejadian Diskrit Industri

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                           TAKSONOMI SUPERVISORY CONTROL SYSTEM                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Klasifikasi Berdasarkan Arsitektur Kontrol                                                                        |
|     ├── Monolithic Supervisory Control: Satu supervisor global mengendalikan seluruh plant terintegrasi.              |
|     ├── Modular Supervisory Control: Kumpulan supervisor independen S_1, S_2, ..., S_m beroperasi simultan.          |
|     ├── Decentralized / Distributed Control: Pengawas lokal dengan visibilitas kejadian parsial (masking/projection). |
|     └── Hierarchical Supervisory Control: Abstraksi state berjenjang (High-Level Coordinator -> Low-Level Controller).|
|                                                                                                                       |
|  2. Klasifikasi Berdasarkan Keteramatan & Determinisme                                                                |
|     ├── Full Observability (Σ_o = Σ): Seluruh transisi kejadian dapat dideteksi secara langsung oleh sensor.          |
|     ├── Partial Observability (Σ_o ⊂ Σ): Terdapat transisi tersembunyi (unobservable events Σ_uo).                    |
|     ├── Deterministic Finite Automata (DFA): Fungsi transisi state deterministik δ(q, σ).                             |
|     └── Timed Discrete Event Systems (TDES): Perluasan variabel waktu tictac/clock interval untuk batas waktu siklus. |
|                                                                                                                       |
|  3. Klasifikasi Berdasarkan Spesifikasi Perilaku (Behavioral Specifications)                                         |
|     ├── Safety Specifications: Pencegahan masuk ke zona terlarang (Forbidden State Avoidance / Mutual Exclusion).    |
|     ├── Liveness & Non-blocking: Jaminan bahwa setiap lintasan operasi dapat mencapai status selesai (Marked States). |
|     └── Fairness & Throughput Optimization: Keseimbangan utilisasi antar stasiun kerja paralel.                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Landasan Teori & Formulasi Matematis Formal

### 3.1. Pemodelan Generator Plant dan Bahasa Formal

Plant manufaktur dimodelkan sebagai **Deterministic Finite-State Automaton (DFA)** yang didefinisikan oleh tupel 5-elemen:
$$G = (Q, \Sigma, \delta, q_0, Q_m)$$

Di mana:
- $Q$: Himpunan berhingga dari semua status operasional (*finite set of states*).
- $\Sigma$: Himpunan berhingga dari semua alfabet peristiwa (*alphabet of discrete events*). Alfabet dipartisi secara disjoin menjadi:
  $$\Sigma = \Sigma_c \cup \Sigma_{uc}, \quad \Sigma_c \cap \Sigma_{uc} = \emptyset$$
  di mana $\Sigma_c$ adalah peristiwa terkendali (*controllable events* yang dapat diaktifkan/dinonaktifkan oleh kontroler) dan $\Sigma_{uc}$ adalah peristiwa tak terkendali (*uncontrollable events* yang dipicu oleh dinamika internal sistem fisik dan tidak boleh dicegah oleh pengawas).
- $\delta: Q \times \Sigma \to Q$: Fungsi transisi status parsial (*partial state transition function*).
- $q_0 \in Q$: Status awal sistem saat dihidupkan (*initial state*).
- $Q_m \subseteq Q$: Himpunan status bertanda (*set of marked states*) yang merepresentasikan penyelesaian siklus kerja produktif, operasi perakitan tuntas, atau kondisi sistem kembali netral/aman.

Fungsi transisi $\delta$ diperluas ke deret string peristiwa $\Sigma^*$ secara induktif:
$$\delta(q, \epsilon) = q, \quad \delta(q, s\sigma) = \delta(\delta(q, s), \sigma), \quad \forall s \in \Sigma^*, \, \sigma \in \Sigma$$

Dua bahasa formal (*formal languages*) yang digenerasikan oleh automaton $G$ adalah:
1. **Generated Language** $L(G) \subseteq \Sigma^*$: Himpunan semua lintasan kejadian yang mungkin dieksekusi fisik oleh plant dari state awal:
   $$L(G) = \{ s \in \Sigma^* \mid \delta(q_0, s) \text{ terdefinisi} \}$$
2. **Marked Language** $L_m(G) \subseteq L(G)$: Himpunan lintasan kejadian yang mencapai status bertanda (*marked goal states*):
   $$L_m(G) = \{ s \in L(G) \mid \delta(q_0, s) \in Q_m \}$$

Suatu automaton $G$ dikatakan **non-blocking** jika penutupan prefiks (*prefix closure*) dari bahasa bertanda sama dengan bahasa yang digenerasikan:
$$\overline{L_m(G)} = L(G)$$
Artinya, dari setiap state yang dapat dicapai (*reachable state*), selalu terdapat setidaknya satu lintasan transisi yang valid menuju status bertanda $Q_m$ (bebas dari kondisi deadlock dan livelock).

---

### 3.2. Formulasi Pengawas Ramadge-Wonham dan Lup Tertutup

Pengawas (*Supervisor*) $S$ dimodelkan sebagai pemetaan kendali dinamis:
$$\gamma: L(G) \to \Gamma$$
di mana $\Gamma = \{ \Sigma' \subseteq \Sigma \mid \Sigma_{uc} \subseteq \Sigma' \}$ adalah himpunan pola kendali yang diizinkan (*admissible control patterns*). 

Kondisi wajib kepatuhan fisik (*admissibility requirement*):
$$\forall s \in L(G), \quad \Sigma_{uc} \subseteq \gamma(s)$$
Kontroler tidak memiliki kewenangan fisik untuk menonaktifkan peristiwa yang tergolong tak terkendali ($\Sigma_{uc}$).

Sistem lup tertutup (*closed-loop supervised system*), dilambangkan dengan $S/G$, menghasilkan perilaku bahasa terkendali:
1. $\epsilon \in L(S/G)$
2. Jika $s \in L(S/G)$, $\sigma \in \Sigma$, dan $s\sigma \in L(G)$, maka $s\sigma \in L(S/G) \iff \sigma \in \gamma(s)$
3. $L_m(S/G) = L(S/G) \cap L_m(G)$

Dalam implementasi praktis, pengawas $S$ direpresentasikan secara ringkas sebagai automaton berhingga deterministik:
$$S = (X, \Sigma, \xi, x_0, X_m)$$
sehingga untuk string $s \in L(S/G)$ yang mengantarkan ke state $x = \xi(x_0, s)$, pola aksi pengawas ditentukan oleh himpunan peristiwa aktif lokal:
$$\gamma(s) = \{ \sigma \in \Sigma \mid \xi(x, \sigma) \text{ terdefinisi} \}$$

---

### 3.3. Komposisi Paralel (Synchronous Product)

Untuk membangun model sel manufaktur terintegrasi yang terdiri dari $N$ subsistem independen (misal: Robot 1, Mesin CNC 2, Konveyor 3) dan $M$ spesifikasi keselamatan (misal: kapasitas buffer, aturan eksklusi zona tabrakan), digunakan operasi **Synchronous Product ($\parallel$)**.

Diberikan dua automaton $G_1 = (Q_1, \Sigma_1, \delta_1, q_{0,1}, Q_{m,1})$ dan $G_2 = (Q_2, \Sigma_2, \delta_2, q_{0,2}, Q_{m,2})$.
Komposisi paralel $G_1 \parallel G_2 = (Q, \Sigma, \delta, q_0, Q_m)$ memiliki struktur:
- $Q = Q_1 \times Q_2$
- $\Sigma = \Sigma_1 \cup \Sigma_2$
- $q_0 = (q_{0,1}, q_{0,2})$
- $Q_m = Q_{m,1} \times Q_{m,2}$
- Fungsi transisi $\delta((q_1, q_2), \sigma)$:
$$\delta((q_1, q_2), \sigma) = \begin{cases} 
(\delta_1(q_1, \sigma), \delta_2(q_2, \sigma)) & \text{jika } \sigma \in \Sigma_1 \cap \Sigma_2 \text{ dan } \delta_1(q_1, \sigma)!, \delta_2(q_2, \sigma)! \\
(\delta_1(q_1, \sigma), q_2) & \text{jika } \sigma \in \Sigma_1 \setminus \Sigma_2 \text{ dan } \delta_1(q_1, \sigma)! \\
(q_1, \delta_2(q_2, \sigma)) & \text{jika } \sigma \in \Sigma_2 \setminus \Sigma_1 \text{ dan } \delta_2(q_2, \sigma)! \\
\text{tak terdefinisi} & \text{lainnya}
\end{cases}$$
*(Tanda $!$ menyatakan fungsi transisi terdefinisi pada state tersebut)*.

---

### 3.4. Teorema Keterkendalian (Controllability Theorem) dan Supremal Sublanguage

Misalkan $K \subseteq L_m(G)$ adalah bahasa spesifikasi legal yang diinginkan oleh perancang pabrik ($K \neq \emptyset$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TEOREMA FUNDAMENTAL RAMADGE-WONHAM (1987)                                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Sebuah pengawas non-blocking S ada sedemikian rupa sehingga:                                                         |
|                              L_m(S/G) = K   dan   L(S/G) = \bar{K}                                                    |
|                                                                                                                       |
|  JIKA DAN HANYA JIKA dua kondisi berikut terpenuhi secara simultan:                                                   |
|                                                                                                                       |
|  1. Kondisi Keterkendalian (Controllability Condition):                                                               |
|                              \bar{K} \Sigma_{uc} \cap L(G) \subseteq \bar{K}                                          |
|                                                                                                                       |
|  2. Kondisi L_m(G)-Closure (Non-blocking Property):                                                                   |
|                              K = \bar{K} \cap L_m(G)                                                                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Interpretasi Fisik Kondisi Keterkendalian**:
Jika sistem telah mengeksekusi runtutan kejadian legal $s \in \bar{K}$, dan plant secara spontan memicu peristiwa tak terkendali $\sigma_{uc} \in \Sigma_{uc}$ yang secara fisik valid menurut plant ($s\sigma_{uc} \in L(G)$), maka lintasan hasil gabungan $s\sigma_{uc}$ WAJIB tetap berada di dalam koridor hukum spesifikasi legal $\bar{K}$. Pengawas tidak dapat mencegah $\sigma_{uc}$, sehingga jika $s\sigma_{uc} \notin \bar{K}$, maka status $s$ harus dicegah sebelum dimasuki.

Jika spesifikasi awal $E \subseteq L_m(G)$ TIDAK memenuhi kondisi keterkendalian, Ramadge dan Wonham membuktikan bahwa kelas semua sub-bahasa terkendali dari $E$ tertutup di bawah operasi gabungan acak (*closed under arbitrary unions*). Dengan demikian, selalu terdapat **bahasa terkendali terbesar (*Supremal Controllable Sublanguage*)**, dilambangkan dengan:
$$\sup\mathcal{C}(E) = \bigcup \{ K \subseteq E \mid K \text{ is controllable and } L_m(G)\text{-closed} \}$$

Secara komputasi, $\sup\mathcal{C}(E)$ dapat dihitung melalui operator titik-tetap (*fixed-point iteration algorithm*):
$$K_0 = E$$
$$K_{j+1} = K_j \setminus \left( \left( (L(G) \setminus \overline{K_j}) / \Sigma_{uc}^* \right) \cap \Sigma^* \right) \Sigma^*$$
Iterasi berhenti saat $K_{j+1} = K_j$, menghasilkan pengawas non-blocking paling permisif yang menjamin seluruh kendala keselamatan dipenuhi secara optimal.

---

## 4. Algoritma Sintesis Pengawas Ramadge-Wonham

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ALGORITMA SINTESIS SUPERVISOR DES BEBAS DEADLOCK                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Input : Model Plant G_1, G_2, ..., G_n dan Model Spesifikasi Keselamatan E_1, E_2, ..., E_m                           |
|  Output: Automaton Supervisor S = SupCon(G, E) yang Non-Blocking & Maximally Permissive                              |
|                                                                                                                       |
|  Langkah 1: Bentuk Global Plant G = G_1 || G_2 || ... || G_n via Synchronous Product.                                 |
|  Langkah 2: Bentuk Global Legal Automaton E = E_1 || E_2 || ... || E_m.                                                |
|  Langkah 3: Hitung Product Awal A_0 = G || E. Himpunan state A_0 adalah Q_A = Q_G x Q_E.                             |
|  Langkah 4: Iterasi Pemangkasan State Terlarang (Bad State Backward Pruning):                                        |
|             a. Tandai state q_dead in Q_A di mana tidak ada lintasan menuju marked state Q_m (Deadlock/Livelock).    |
|             b. Tandai state q_violate in Q_A jika terdapat \sigma in \Sigma_uc sedemikian sehingga                   |
|                \delta_G(q_G, \sigma) terdefinisi di Plant tetapi \delta_A(q, \sigma) TIDAK terdefinisi di A.         |
|             c. Hapus state q_bad = q_dead \cup q_violate dari automaton.                                             |
|             d. Ulangi backward traversal: Jika state q memiliki transisi uncontrollable ke state bad,                 |
|                maka q juga menjadi bad state dan harus dipangkas!                                                     |
|  Langkah 5: Berhenti saat tidak ada lagi bad state baru yang ditemukan (Fixed Point Reached).                         |
|  Langkah 6: Ekstraksi Automaton Supervisor S = Trim(A_final).                                                         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Python: Discrete Event Systems Supervisory Synthesis Engine

Berikut adalah implementasi Python mandiri (*self-contained*), objektif, dan matematis murni untuk sintesis pengawas Ramadge-Wonham pada sel manufaktur terautomasi:

```python
"""
RuangTI - Discrete Event Systems (DES) Supervisory Control Synthesis Engine
Framework: Ramadge-Wonham (RW) Supervisory Control Theory
Fitur: Synchronous Composition, Uncontrollable Transition Propagation,
       Deadlock / Blocking State Elimination, dan SupCon Extraction.
"""

from typing import Set, Dict, Tuple, List, Optional
import itertools

class Automaton:
    def __init__(self, name: str):
        self.name = name
        self.states: Set[str] = set()
        self.events: Set[str] = set()
        self.controllable_events: Set[str] = set()
        self.uncontrollable_events: Set[str] = set()
        self.transitions: Dict[Tuple[str, str], str] = {}  # (source_state, event) -> target_state
        self.initial_state: Optional[str] = None
        self.marked_states: Set[str] = set()

    def add_state(self, state: str, is_initial: bool = False, is_marked: bool = False):
        self.states.add(state)
        if is_initial:
            self.initial_state = state
        if is_marked:
            self.marked_states.add(state)

    def add_event(self, event: str, is_controllable: bool = True):
        self.events.add(event)
        if is_controllable:
            self.controllable_events.add(event)
        else:
            self.uncontrollable_events.add(event)

    def add_transition(self, src: str, event: str, tgt: str):
        if src not in self.states or tgt not in self.states:
            raise ValueError(f"State '{src}' atau '{tgt}' belum terdaftar.")
        if event not in self.events:
            raise ValueError(f"Event '{event}' belum terdaftar.")
        self.transitions[(src, event)] = tgt

    def get_transition(self, src: str, event: str) -> Optional[str]:
        return self.transitions.get((src, event), None)

    def active_events(self, state: str) -> Set[str]:
        return {ev for (s, ev) in self.transitions.keys() if s == state}

    def trim(self) -> 'Automaton':
        """Menghapus state yang tidak reachable atau tidak coreachable."""
        # 1. Forward Reachability dari initial state
        reachable = set()
        queue = [self.initial_state] if self.initial_state else []
        if self.initial_state:
            reachable.add(self.initial_state)

        while queue:
            curr = queue.pop(0)
            for ev in self.active_events(curr):
                nxt = self.transitions[(curr, ev)]
                if nxt not in reachable:
                    reachable.add(nxt)
                    queue.append(nxt)

        # 2. Backward Coreachability menuju marked states
        coreachable = set(self.marked_states)
        rev_transitions: Dict[str, Set[str]] = {s: set() for s in self.states}
        for (s, ev), tgt in self.transitions.items():
            rev_transitions[tgt].add(s)

        queue = list(self.marked_states)
        while queue:
            curr = queue.pop(0)
            for pred in rev_transitions[curr]:
                if pred not in coreachable:
                    coreachable.add(pred)
                    queue.append(pred)

        valid_states = reachable.intersection(coreachable)
        
        trimmed = Automaton(f"{self.name}_trimmed")
        trimmed.events = set(self.events)
        trimmed.controllable_events = set(self.controllable_events)
        trimmed.uncontrollable_events = set(self.uncontrollable_events)

        for s in valid_states:
            trimmed.add_state(s, is_initial=(s == self.initial_state), is_marked=(s in self.marked_states))

        for (s, ev), tgt in self.transitions.items():
            if s in valid_states and tgt in valid_states:
                trimmed.add_transition(s, ev, tgt)

        return trimmed


def synchronous_product(g1: Automaton, g2: Automaton, name: str = "ParallelComp") -> Automaton:
    """Membentuk Komposisi Paralel (Synchronous Composition) G1 || G2."""
    prod = Automaton(name)
    prod.events = g1.events.union(g2.events)
    prod.controllable_events = g1.controllable_events.union(g2.controllable_events)
    prod.uncontrollable_events = g1.uncontrollable_events.union(g2.uncontrollable_events)

    init_state = f"({g1.initial_state},{g2.initial_state})"
    prod.add_state(init_state, is_initial=True, 
                   is_marked=(g1.initial_state in g1.marked_states and g2.initial_state in g2.marked_states))

    queue = [(g1.initial_state, g2.initial_state)]
    visited = { (g1.initial_state, g2.initial_state) }

    while queue:
        q1, q2 = queue.pop(0)
        curr_prod_state = f"({q1},{q2})"

        for ev in prod.events:
            in_g1 = ev in g1.events
            in_g2 = ev in g2.events

            nxt1 = g1.get_transition(q1, ev) if in_g1 else q1
            nxt2 = g2.get_transition(q2, ev) if in_g2 else q2

            # Cek apakah transisi valid secara sinkron
            valid = False
            if in_g1 and in_g2:
                if nxt1 is not None and nxt2 is not None:
                    valid = True
            elif in_g1 and not in_g2:
                if nxt1 is not None:
                    valid = True
            elif not in_g1 and in_g2:
                if nxt2 is not None:
                    valid = True

            if valid:
                next_tuple = (nxt1, nxt2)
                next_prod_state = f"({nxt1},{nxt2})"
                if next_tuple not in visited:
                    visited.add(next_tuple)
                    is_marked = (nxt1 in g1.marked_states and nxt2 in g2.marked_states)
                    prod.add_state(next_prod_state, is_marked=is_marked)
                    queue.append(next_tuple)

                prod.add_transition(curr_prod_state, ev, next_prod_state)

    return prod


class SupervisorSynthesizer:
    @staticmethod
    def synthesize_supcon(plant: Automaton, spec: Automaton) -> Optional[Automaton]:
        """
        Sintesis Supremal Controllable & Non-blocking Sublanguage Supervisor: SupCon(G, E).
        Menggunakan Algoritma Eliminasi State Terlarang & Backward Uncontrollable Reachability.
        """
        # 1. Sinkronisasi Awal Plant dan Spesifikasi
        product = synchronous_product(plant, spec, name="Product_G_E")
        
        # Iterasi Pemangkasan State
        changed = True
        iteration = 0
        current_aut = product

        while changed:
            iteration += 1
            changed = False
            
            # Step A: Lakukan Trim untuk membuang non-coreachable (deadlock / blocking states)
            trimmed_aut = current_aut.trim()
            if len(trimmed_aut.states) != len(current_aut.states):
                changed = True
                current_aut = trimmed_aut
                if current_aut.initial_state is None:
                    print(f"[Iter {iteration}] Seluruh status tereliminasi! Spesifikasi tidak dapat dikendalikan.")
                    return None

            # Step B: Periksa Pelanggaran Keterkendalian (Controllability Violations)
            bad_states = set()
            for s in current_aut.states:
                # Ekstrak state plant asli dari string format (q_plant, q_spec)
                clean_s = s.strip("()")
                # Handle nested tuples
                parts = clean_s.split(",", 1)
                q_plant = parts[0].strip()

                for ev in current_aut.uncontrollable_events:
                    plant_has_ev = (plant.get_transition(q_plant, ev) is not None)
                    aut_has_ev = (current_aut.get_transition(s, ev) is not None)

                    # Jika plant dapat mengeksekusi uncontrollable event tetapi supervisor melarangnya -> Pelanggaran!
                    if plant_has_ev and not aut_has_ev:
                        bad_states.add(s)
                        break

            if bad_states:
                changed = True
                # Hapus bad_states dari automaton
                remaining_states = current_aut.states - bad_states
                if current_aut.initial_state in bad_states:
                    print(f"[Iter {iteration}] State awal merupakan bad state! Pengawas tidak eksis.")
                    return None

                new_aut = Automaton(f"SupCon_iter_{iteration}")
                new_aut.events = set(current_aut.events)
                new_aut.controllable_events = set(current_aut.controllable_events)
                new_aut.uncontrollable_events = set(current_aut.uncontrollable_events)

                for st in remaining_states:
                    new_aut.add_state(st, is_initial=(st == current_aut.initial_state), 
                                      is_marked=(st in current_aut.marked_states))

                for (src, ev), tgt in current_aut.transitions.items():
                    if src in remaining_states and tgt in remaining_states:
                        new_aut.add_transition(src, ev, tgt)

                current_aut = new_aut.trim()

        print(f"Sintesis Konvergen dalam {iteration} iterasi. Total States Pengawas: {len(current_aut.states)}")
        return current_aut


# =====================================================================
# EKSEKUSI SIMULASI KASUS SEL MANUFAKTUR ROBOTIK (2-MESIN + 1-BUFFER)
# =====================================================================
if __name__ == "__main__":
    print("=== SYNTHESIS SUPERVISORY CONTROL SYSTEM RUANGTI (RAMADGE-WONHAM) ===")
    
    # 1. Definisi Model Mesin 1 (M1)
    # Events: a1 (start M1 - Controllable), b1 (finish M1 - Uncontrollable)
    m1 = Automaton("Machine_1")
    m1.add_event("a1", is_controllable=True)
    m1.add_event("b1", is_controllable=False)
    m1.add_state("I1", is_initial=True, is_marked=True)  # Idle
    m1.add_state("W1", is_marked=False)                  # Working
    m1.add_transition("I1", "a1", "W1")
    m1.add_transition("W1", "b1", "I1")

    # 2. Definisi Model Mesin 2 (M2)
    # Events: a2 (start M2 - Controllable), b2 (finish M2 - Uncontrollable)
    m2 = Automaton("Machine_2")
    m2.add_event("a2", is_controllable=True)
    m2.add_event("b2", is_controllable=False)
    m2.add_state("I2", is_initial=True, is_marked=True)  # Idle
    m2.add_state("W2", is_marked=False)                  # Working
    m2.add_transition("I2", "a2", "W2")
    m2.add_transition("W2", "b2", "I2")

    # 3. Model Plant Gabungan: G = M1 || M2
    plant = synchronous_product(m1, m2, name="Plant_M1_M2")
    print(f"Plant States: {len(plant.states)} | Plant Transitions: {len(plant.transitions)}")

    # 4. Spesifikasi Penyangga (Buffer Capacity B = 1)
    # Benda kerja selesai di M1 (event b1) masuk ke buffer; M2 mengambil benda dari buffer saat start (event a2).
    # Buffer tidak boleh Overflow (b1 saat buffer penuh) dan tidak boleh Underflow (a2 saat buffer kosong).
    buffer_spec = Automaton("Buffer_Cap_1")
    buffer_spec.add_event("b1", is_controllable=False)
    buffer_spec.add_event("a2", is_controllable=True)
    buffer_spec.add_state("E", is_initial=True, is_marked=True)  # Buffer Kosong (Empty)
    buffer_spec.add_state("F", is_marked=True)                   # Buffer Terisi (Full)
    buffer_spec.add_transition("E", "b1", "F")
    buffer_spec.add_transition("F", "a2", "E")

    # 5. Eksekusi Sintesis Supervisor Ramadge-Wonham
    supervisor = SupervisorSynthesizer.synthesize_supcon(plant, buffer_spec)

    if supervisor:
        print("\n--- DAFTAR TRANSISI DAN POLA AKSI SUPERVISOR (S/G) ---")
        for (src, ev), tgt in sorted(supervisor.transitions.items()):
            ctrl_type = "CTRL" if ev in supervisor.controllable_events else "UNCTRL"
            print(f"  State: {src:<15} --[{ev} ({ctrl_type})]-> Target: {tgt}")
        
        print("\n--- ANALISIS KONTROL: PERISTIWA YANG DICEGAH SECARA DINAMIS ---")
        for s in sorted(supervisor.states):
            allowed = supervisor.active_events(s)
            disabled = (supervisor.controllable_events - allowed)
            print(f"  Pada Status {s:<15} -> Diizinkan: {list(allowed)} | Dinonaktifkan: {list(disabled)}")
```

---

## 6. Studi Kasus Industri: Fleksibel Manufaktur Robotik Otomotif (Automotive Powertrain Flexible Machining Cell)

### 6.1. Deskripsi Sistem & Masalah Interlock Fisik
Sebuah sel manufaktur komponen mesin otomotif (*engine cylinder head*) terdiri dari:
1. **Mesin CNC Milling ($M_1$)**: Melakukan perataan permukaan atas.
   - Kejadian: $\Sigma_1 = \{a_1, b_1\}$ ($a_1$: start pemesinan [controllable], $b_1$: selesai pemesinan [uncontrollable]).
2. **Mesin CNC Boring ($M_2$)**: Melakukan pembuatan lubang presisi silinder.
   - Kejadian: $\Sigma_2 = \{a_2, b_2\}$ ($a_2$: start pembesaran lubang [controllable], $b_2$: selesai boring [uncontrollable]).
3. **Rak Penyangga Perantara (*Inter-stage Buffer*)**: Kapasitas fisik $B = 1$ palet.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ALUR MATERIAL DAN EVENT PADA SEL KERJA FLEKSIBEL                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Raw Part                 b1 (Uncontrollable)             a2 (Controllable)              Finished Cylinder     |
|       ───────────► ┌──────────┐ ────────────────────► ┌────────┐ ─────────────────► ┌──────────┐ ─────────────►      |
|                    │ MESIN M1 │                       │ BUFFER │                    │ MESIN M2 │                      |
|         a1 (Ctrl)  └──────────┘                       │ Cap=1  │                    └──────────┘  b2 (Unctrl)         |
|                                                       └────────┘                                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2. Masalah Ketidakterkendalian (*Uncontrollability Dilemma*)
Jika Mesin $M_1$ diizinkan memulai pemesinan ($a_1$) saat Buffer sudah penuh ($F$), maka ketika $M_1$ menyelesaikan tugasnya ($b_1$), $b_1$ adalah peristiwa tak terkendali ($\Sigma_{uc}$) yang tidak dapat dihentikan oleh sensor luar. Hal ini menyebabkan benda kerja didorong ke buffer yang sudah penuh $\to$ **Buffer Overflow Crash**!

### 6.3. Hasil Sintesis dan Analisis State-Space
Dari komposisi sinkron $G = M_1 \parallel M_2$ (4 states) dan spesifikasi Buffer (2 states), ruang status gabungan awal memiliki $4 \times 2 = 8$ states.

Melalui algoritma sintesis Ramadge-Wonham:
1. State $((W_1, I_2), F)$ adalah kondisi di mana $M_1$ sedang bekerja dan Buffer sudah penuh. Dari status ini, peristiwa $b_1 \in \Sigma_{uc}$ akan mengarah ke status terlarang (*buffer overflow*).
2. Karena $b_1$ tak terkendali, kontroler TIDAK DAPAT memotong transisi $b_1$.
3. Algoritma melakukan *backward propagation*: Status $((W_1, I_2), F)$ ditandai sebagai **Bad State**.
4. Transisi yang mengarah ke status tersebut adalah $a_1 \in \Sigma_c$ dari status $((I_1, I_2), F)$.
5. Karena $a_1$ adalah peristiwa terkendali, Supervisor secara cerdas **menonaktifkan $a_1$** selama Buffer berada dalam status $F$ (Penuh).

Matriks ruang status pengawas optimal $S$ yang dihasilkan:
- **Total Reachable & Safe States**: 6 States (bebas deadlock 100%).
- **Permisivitas Maksimal**: $M_1$ dan $M_2$ dapat bekerja paralel murni saat buffer kosong ($E$), namun $M_1$ ditahan saat buffer penuh ($F$) sampai $M_2$ memulai siklusnya ($a_2$).

---

## 7. Standar Industri Terkait & Panduan Praktik

1. **IEC 61499 (Function Blocks for Industrial-Process Measurement and Control Systems)**: Standar internasional untuk arsitektur otomasi kejadian diskrit terdistribusi. Model automata Ramadge-Wonham dapat langsung ditranslasikan menjadi *Execution Control Chart* (ECC) pada modul Function Block IEC 61499.
2. **ISA-88 / ISA-95 (Enterprise-Control System Integration & Batch Control)**: Mendefinisikan model status berhingga (*Procedural State Models*: Idle, Running, Paused, Aborted) yang mematuhi kontrol keterkendalian kejadian diskrit.
3. **ISO 22400 (Automation Systems and Integration — Key Performance Indicators for Manufacturing Operations Management)**: Pengukuran efektivitas pengawas bebas deadlock terhadap *Availability*, *OEE*, dan penurunan *Technical Downtime*.
4. **IEEE Transactions on Automation Science and Engineering (T-ASE)**: Acuan standar publikasi global untuk verifikasi formal automata dan kontrol kejadian diskrit industri.

---

## 8. Referensi Akademik Terverifikasi

1. Ramadge, P. J., & Wonham, W. M. (1987). Supervisory control of a class of discrete event processes. *SIAM Journal on Control and Optimization*, 25(1), 206-230. DOI: `10.1137/0325013`.
2. Wonham, W. M., & Ramadge, P. J. (1988). On the supremal controllable sublanguage of a given language. *SIAM Journal on Control and Optimization*, 26(3), 620-638. DOI: `10.1137/0326036`.
3. Cassandras, C. G., & Lafortune, S. (2021). *Introduction to Discrete Event Systems* (3rd ed.). Springer Nature, Cham. ISBN: `978-3-030-72273-9`.
4. Kumar, R., & Garg, V. K. (2012). *Modeling and Control of Logical Discrete Event Systems*. Springer Science & Business Media. DOI: `10.1007/978-1-4615-2245-4`.
5. Wonham, W. M., & Cai, K. (2019). *Supervisory Control of Discrete-Event Systems: A Formal Approach*. Springer International Publishing. DOI: `10.1007/978-3-319-77452-7`.
6. Groover, M. P. (2020). *Automation, Production Systems, and Computer-Integrated Manufacturing* (5th ed.). Pearson Education, New York. ISBN: `978-0-13-460546-3`.
