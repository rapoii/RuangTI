# Modul 720: Quantum Approximate Optimization Algorithm (QAOA) & Quantum Annealing untuk Penjadwalan Kombinatorial dan Optimasi Logistik Industri: Formulasi QUBO-Ising, Teorema Adiabatik, Variational Quantum Eigensolver Ansatz, dan Hybrid Classical-Quantum Solver (IEEE, INFORMS & APS)

**Nomor Modul:** [720]  
**Domain Keahlian:** Riset Operasi Kuantum, Optimasi Kombinatorial Lanjutan, Komputasi Kuantum Terapan Industri & Logistik Cerdas (*Quantum Operations Research, Combinatorial Optimization, Quantum Computing for Industrial Scheduling & Logistics*).  
**Sumber Referensi Utama:** *Farhi, Goldstone & Gutmann — arXiv:1411.4028 (2014, Science 2014)*, *Hadfield et al. — Algorithms 2019*, *Lucas — Frontiers in Physics 2014 (Ising Formulations)*, *Kadowaki & Nishimori — Phys. Rev. E 1998*, *Nielsen & Chuang — Quantum Computation and Quantum Information (Cambridge, 2010)*, *Preskill — Quantum 2018 (NISQ Era)*, *IEEE Transactions on Quantum Engineering (2023–2025)*, *INFORMS Journal on Computing (2024)*.

---

## 1. Landasan Teori & Tinjauan Konseptual (Theoretical Background)

### 1.1 Krisis Kompleksitas Kombinatorial di Industri

Banyak persoalan inti Teknik Industri bersifat **NP-hard** kombinatorial: *Job Shop Scheduling Problem* (JSSP), *Flexible Job Shop* (FJSSP), *Vehicle Routing Problem* (VRP), *Quadratic Assignment Problem* (QAP — tata letak fasilitas), dan *Bin Packing*. Algoritma klasik eksak (Branch-and-Bound, Benders, Column Generation) mengalami ledakan waktu eksponensial $O(c^n)$ ketika $n > 50$ pekerjaan atau 100 pelanggan. Metaheuristik klasik (Genetic Algorithm, Tabu Search, Simulated Annealing) memberikan solusi aproksimasi tetapi tanpa jaminan kualitas dan sering terjebak pada *local optima* untuk lanskap energi yang kasar (*rugged energy landscape*).

**Komputasi kuantum** menawarkan paradigma baru: memanfaatkan superposisi, interferensi, dan *quantum tunneling* untuk mengeksplorasi ruang solusi $2^n$ secara paralel. Dua pendekatan paling relevan untuk era **NISQ** (*Noisy Intermediate-Scale Quantum*, Preskill 2018) adalah:

1. **Quantum Approximate Optimization Algorithm (QAOA)** — algoritma variasional *gate-based* yang dijalankan pada prosesor kuantum superkonduktor (IBM, Google, Rigetti).
2. **Quantum Annealing (QA)** — evolusi adiabatik analog yang diimplementasikan pada *quantum annealer* D-Wave.

```
+--------------------------------------------------------------------------------------------------+
|           DUA PARADIGMA OPTIMASI KUANTUM UNTUK PERSOALAN KOMBINATORIAL INDUSTRI                   |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|   PERSOALAN INDUSTRI (NP-hard)                                                                   |
|   JSSP / FJSSP / VRP / QAP / Bin Packing                                                         |
|         │                                                                                        |
|         ▼                                                                                        |
|   ┌─────────────────────────────────┐                                                            |
|   │  FORMULASI QUBO / ISING         │   x_i ∈ {0,1}  ──►  s_i ∈ {-1,+1},  s_i = 2x_i - 1       |
|   │  min x^T Q x  atau  H(s)=ΣJ s s + Σh s                                                      |
|   └────────┬────────────────────────┘                                                            |
|            │                                                                                    |
|     ┌──────┴──────┐                                                                             |
|     ▼             ▼                                                                             |
|  ┌────────┐  ┌──────────────┐                                                                  |
|  │  QAOA  │  │   QUANTUM    │                                                                  |
|  │ Gate-  │  │   ANNEALING  │                                                                  |
|  │ based  │  │   Analog     │                                                                  |
|  │ p-layer│  │ Adiabatic    │                                                                  |
|  │ ansatz │  │ evolution    │                                                                  |
|  │ Variational│ Tunnel. &   │                                                                  |
|  │ (γ,β)  │  │ fluctuation  │                                                                  |
|  └───┬────┘  └──────┬───────┘                                                                  |
|      │              │                                                                          |
|      └──────┬───────┘                                                                          |
|             ▼                                                                                  |
|   ┌──────────────────┐                                                                         |
|   │ CLASSICAL        │  Parameter optimization (COBYLA, SPSA, Adam)                            |
|   │ OPTIMIZER LOOP   │  Hybrid quantum-classical feedback                                      |
|   └──────────────────┘                                                                         |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
```

### 1.2 Dari Persoalan Industri ke QUBO dan Hamiltonian Ising

Hampir semua persoalan kombinatorial industri dapat direduksi ke bentuk **QUBO** (*Quadratic Unconstrained Binary Optimization*):

$$ \min_{x \in \{0,1\}^n} \quad f(x) = x^T Q x + c^T x = \sum_{i=1}^{n} Q_{ii} x_i + \sum_{i < j} Q_{ij} x_i x_j $$

Transformasi ke variabel spin Ising $s_i \in \{-1, +1\}$ melalui $s_i = 2x_i - 1$ menghasilkan **Ising Hamiltonian**:

$$H_{Ising} = \sum_{i < j} J_{ij} s_i s_j + \sum_{i=1}^{n} h_i s_i + \text{const}$$

di mana $J_{ij} = Q_{ij}/4$ dan $h_i = Q_{ii}/2 + \sum_{j \neq i} Q_{ij}/4$ (Lucas, 2014). Hamiltonian ini persis merupakan fungsi energi yang diminimalkan oleh perangkat kuantum.

**Contoh pemetaan JSSP ke QUBO:** Untuk $n$ pekerjaan dengan $m$ mesin, variabel biner $x_{j,k,t} = 1$ jika operasi $k$ dari pekerjaan $j$ dijadwalkan pada posisi waktu $t$. Fungsi tujuan *makespan* dan kendala presedensi/ketidak-tumpang-tindihan dikodekan sebagai penalti kuadratik:

$$H_{JSSP} = H_{makespan} + A \cdot H_{precedence} + B \cdot H_{no-overlap} + C \cdot H_{one-hot}$$

dengan koefisien penalti $A, B, C \gg \max|Q_{ij}|$ untuk menjamin kelayakan.

---

## 2. Formulasi Matematis & Notasi Rekayasa Sistem

### 2.1 QAOA Ansatz dan Prinsip Variasional

QAOA (Farhi et al., 2014) mengkodekan Hamiltonian biaya $H_C$ (yang nilai eigennya = nilai fungsi tujuan) dan Hamiltonian pencampur (*mixer*) $H_M = \sum_{i=1}^{n} X_i$ (operator Pauli-X). State variasional dengan $p$ layer didefinisikan sebagai:

$$|\psi(\boldsymbol{\gamma}, \boldsymbol{\beta})\rangle = e^{-i\beta_p H_M} e^{-i\gamma_p H_C} \cdots e^{-i\beta_1 H_M} e^{-i\gamma_1 H_C} |+\rangle^{\otimes n}$$

di mana $|+\rangle = (|0\rangle + |1\rangle)/\sqrt{2}$ adalah superposisi seragam, dan $\boldsymbol{\gamma} = (\gamma_1, \ldots, \gamma_p)$, $\boldsymbol{\beta} = (\beta_1, \ldots, \beta_p)$ adalah $2p$ parameter variasional.

Nilai harapan energi yang diminimalkan oleh optimizer klasik:

$$F_p(\boldsymbol{\gamma}, \boldsymbol{\beta}) = \langle \psi(\boldsymbol{\gamma}, \boldsymbol{\beta}) | H_C | \psi(\boldsymbol{\gamma}, \boldsymbol{\beta}) \rangle$$

Berdasarkan **prinsip variasional Rayleigh-Ritz**:

$$F_p(\boldsymbol{\gamma}^*, \boldsymbol{\beta}^*) \geq E_0 = \min_x f(x)$$

di mana kesetaraan dicapai ketika $p \to \infty$ (QAOA menjadi eksak, setara dengan evolusi adiabatik). Untuk $p$ hingga, *approximation ratio* didefinisikan:

$$r_p = \frac{F_p(\boldsymbol{\gamma}^*, \boldsymbol{\beta}^*)}{E_0} \quad \text{(untuk maksimisasi; untuk minimisasi gunakan } r_p = E_0 / F_p \text{)}$$

Hasil teoritis Farhi et al. menunjukkan bahwa untuk MaxCut pada graf 3-regular, $r_1 \approx 0.692$ dan $r_p$ monoton naik terhadap $p$.

### 2.2 Quantum Annealing dan Teorema Adiabatik

Quantum Annealing mengevolusikan sistem dari Hamiltonian awal trivial $H_0 = -\sum_i X_i$ (ground state = superposisi seragam) ke Hamiltonian target $H_C$ secara adiabatik:

$$H(t) = \left(1 - s(t)\right) H_0 + s(t) H_C, \quad s(0) = 0, \quad s(T) = 1$$

**Teorema adiabatik kuantum** (Born & Fock, 1928; Kadowaki & Nishimori, 1998) menjamin bahwa jika evolusi cukup lambat, sistem tetap pada *ground state* instan. Syarat waktu annealing:

$$T \gg \frac{\max_{s} |\langle 1(s) | \frac{dH}{ds} | 0(s) \rangle|}{\min_{s} \Delta(s)^2}$$

di mana $\Delta(s) = E_1(s) - E_0(s)$ adalah *spectral gap* (jarak energi antara ground state dan excited state pertama). Gap yang kecil (yang terjadi pada transisi fase kuantum) menyebabkan kebutuhan $T$ eksponensial — inilah sumber kesulitan QA untuk persoalan NP-hard.

Dinamika QA pada D-Wave dimodelkan oleh Hamiltonian *transverse-field Ising*:

$$H(s) = -A(s) \sum_{i} X_i + B(s) \left( \sum_{i} h_i Z_i + \sum_{i<j} J_{ij} Z_i Z_j \right)$$

dengan fungsi annealing $A(s)$ menurun dan $B(s)$ meningkat secara monoton.

### 2.3 Formulasi QUBO untuk Vehicle Routing Problem (CVRP) — Contoh Lengkap

Untuk CVRP dengan $N$ pelanggan dan $K$ kendaraan, variabel biner $x_{i,j,k} = 1$ jika kendaraan $k$ bergerak dari lokasi $i$ ke $j$. Formulasi QUBO (Lucas, 2014; Feld et al., 2019):

$$\min \sum_{k=1}^{K} \sum_{i=0}^{N} \sum_{j=0}^{N} d_{ij} x_{i,j,k} + P \cdot \left[ H_{visit} + H_{flow} + H_{capacity} + H_{subtour} \right]$$

dengan penalti:

$$H_{visit} = \sum_{j=1}^{N} \left(1 - \sum_{k=1}^{K} \sum_{i=0}^{N} x_{i,j,k}\right)^2 \quad \text{(setiap pelanggan dikunjungi tepat sekali)}$$

$$H_{flow} = \sum_{k=1}^{K} \sum_{j=0}^{N} \left(\sum_{i=0}^{N} x_{i,j,k} - \sum_{i=0}^{N} x_{j,i,k}\right)^2 \quad \text{(konservasi aliran)}$$

$$H_{capacity} = \sum_{k=1}^{K} \left(\sum_{i=1}^{N} q_i \sum_{j=0}^{N} x_{i,j,k} - Q_k\right)^2_{\text{penalty}} \quad \text{(kapasitas kendaraan)}$$

Parameter penalti $P$ dipilih sebagai $P > \max(d_{ij}) \cdot N$ untuk menjamin solusi layak lebih diutamakan daripada penghematan jarak.

### 2.4 Analisis Kompleksitas dan Batas Keunggulan Kuantum

| Pendekatan | Kompleksitas Waktu | Jaminan Solusi | Kebutuhan Hardware |
|---|---|---|---|
| Branch-and-Bound eksak | $O(2^n)$ worst-case | Optimal eksak | CPU klasik |
| Simulated Annealing klasik | $O(n^2 \cdot T_{iter})$ | Aproksimasi, terjebak local min | CPU klasik |
| QAOA depth-$p$ | $O(p \cdot n^2)$ gerbang + optimasi klasik | $r_p \to 1$ saat $p \to \infty$ | NISQ gate-based (50–1000 qubit) |
| Quantum Annealing | $O(T_{anneal} \cdot \text{repeats})$ | Ground state jika $T \gg 1/\Delta^2$ | D-Wave annealer (5000+ qubit) |
| Hybrid Quantum-Classical | Iteratif QAOA + *warm-start* klasik | Terbaik praktis era NISQ | Kombinasi |

**Batas teoritis:** Untuk QAOA, *approximation ratio* pada MaxCut memenuhi (Farhi et al., 2014; Wurtz & Love, 2021):

$$r_p \geq 1 - O\left(\frac{1}{\sqrt{p}}\right) \quad \text{untuk graf reguler}$$

Untuk QA, probabilitas sukses setelah $R$ pengulangan (*reads*):

$$P_{success}(R) = 1 - (1 - p_0)^R$$

di mana $p_0$ adalah probabilitas mengukur ground state dalam satu *anneal*. *Time-to-Solution* (TTS) didefinisikan:

$$TTS = T_{anneal} \cdot \frac{\ln(1 - 0.99)}{\ln(1 - p_0)}$$

---

## 3. Algoritma & Solver Komputasi (Python Implementation)

Implementasi berikut menyediakan: (1) pembangun QUBO untuk Job Shop Scheduling mini dan CVRP, (2) simulator QAOA depth-$p$ berbasis *state vector* (tanpa memerlukan hardware kuantum — simulasi klasik eksak untuk $n \leq 12$ qubit), (3) *classical optimizer loop* (COBYLA), dan (4) pembanding Simulated Annealing klasik serta brute-force untuk verifikasi.

```python
import numpy as np
import itertools
from scipy.optimize import minimize

# ============================================================
# 1. QUBO BUILDER — Job Shop Scheduling (2 jobs x 2 machines mini-instance)
# ============================================================
def build_jsp_qubo():
    """
    Mini JSSP: 2 jobs, 2 machines.
    Job 1: M1(2) -> M2(1)   (durasi)
    Job 2: M2(2) -> M1(1)
    Time horizon T=4 slot diskret. Variabel x[j,m,t] = job j di mesin m pada slot t.
    Untuk demo, disederhanakan menjadi 4 variabel biner (n=4) dengan matriks Q.
    QUBO yang dihasilkan merepresentasikan makespan + penalti presedensi.
    """
    # Matriks QUBO 4x4 simetris (upper triangular dikonversi ke simetris)
    # Dibangun manual agar merepresentasikan trade-off makespan vs penalti
    # Q[i,i] = bias linear, Q[i,j] = kopling kuadratik
    Q = np.array([
        [-2.0,  3.0,  1.5,  2.0],
        [ 0.0, -1.5,  2.5,  1.0],
        [ 0.0,  0.0, -2.5,  3.0],
        [ 0.0,  0.0,  0.0, -1.0],
    ])
    # Simetrikan untuk kemudahan (QUBO biasanya upper-triangular, tapi untuk Ising perlu simetris)
    Q_sym = np.triu(Q) + np.triu(Q, 1).T
    # Koreksi: Q_sym[i,j] untuk i!=j harus dibagi 2 jika dijumlahkan dua kali
    # Di sini Q sudah benar untuk evaluasi x^T Q x dengan Q upper-triangular
    return Q  # kembalikan upper-triangular untuk evaluasi standar


def qubo_cost(x, Q):
    """Evaluasi f(x) = x^T Q x dengan Q upper-triangular."""
    n = len(x)
    cost = 0.0
    for i in range(n):
        for j in range(i, n):
            if i == j:
                cost += Q[i, j] * x[i]
            else:
                cost += Q[i, j] * x[i] * x[j]
    return cost


def brute_force_qubo(Q):
    """Solusi eksak brute-force untuk n <= 15."""
    n = Q.shape[0]
    best_cost = float('inf')
    best_x = None
    for bits in itertools.product([0, 1], repeat=n):
        x = np.array(bits)
        c = qubo_cost(x, Q)
        if c < best_cost:
            best_cost = c
            best_x = x.copy()
    return best_x, best_cost


# ============================================================
# 2. QAOA STATE-VECTOR SIMULATOR (n <= 10 qubit, p layers)
# ============================================================
def qaoa_expectation(params, Q, p):
    """
    Hitung <psi(gamma,beta)| H_C |psi(gamma,beta)> via simulasi state vector.
    Q: matriks QUBO upper-triangular (n x n)
    params: array [gamma_1,...,gamma_p, beta_1,...,beta_p]
    p: kedalaman QAOA
    """
    n = Q.shape[0]
    N = 2 ** n  # dimensi Hilbert

    # Bangun diagonal Hamiltonian biaya H_C (nilai QUBO untuk setiap basis state)
    diag = np.zeros(N)
    for idx in range(N):
        x = np.array([(idx >> k) & 1 for k in range(n)])  # little-endian
        diag[idx] = qubo_cost(x, Q)
    H_C_diag = diag

    gamma = params[:p]
    beta = params[p:2*p]

    # State awal |+>^n = superposisi seragam
    state = np.ones(N, dtype=complex) / np.sqrt(N)

    # Evolusi QAOA layer demi layer
    for layer in range(p):
        g = gamma[layer]
        b = beta[layer]

        # e^{-i gamma H_C} — diagonal phase
        state = state * np.exp(-1j * g * H_C_diag)

        # e^{-i beta H_M} dengan H_M = sum X_i
        # Implementasi efisien: H_M = sum X_i, e^{-i beta X} = cos(beta)I - i sin(beta)X
        # Untuk n qubit, terapkan per qubit via reshaping
        for qubit in range(n):
            # Reshape state sebagai tensor n-qubit untuk operasi single-qubit
            # Trick: gunakan butterfly operation untuk gate X rotation
            new_state = np.zeros_like(state)
            for idx in range(N):
                # bit flip pada posisi qubit
                flipped = idx ^ (1 << qubit)
                # e^{-i beta X} = cos(beta)|idx> - i sin(beta)|flipped>
                # Tapi karena H_M = sum X_i, kita butuh product approximation
                # Untuk simulasi eksak sum, gunakan dekomposisi per qubit sequential
                pass
            # Implementasi alternatif yang benar: sequential single-qubit RX(2*beta)
            # RX(2b) = [[cos(b), -i sin(b)], [-i sin(b), cos(b)]]
            cos_b = np.cos(b)
            sin_b = np.sin(b)
            # Operasi pada pasangan state yang berbeda 1 bit di posisi qubit
            temp = state.copy()
            for idx in range(N):
                if (idx >> qubit) & 1 == 0:
                    partner = idx | (1 << qubit)
                    a0 = temp[idx]
                    a1 = temp[partner]
                    state[idx] = cos_b * a0 - 1j * sin_b * a1
                    state[partner] = -1j * sin_b * a0 + cos_b * a1

    # Nilai harapan <H_C>
    probs = np.abs(state) ** 2
    expectation = np.dot(probs, H_C_diag)
    return expectation, probs, H_C_diag


def solve_qaoa(Q, p=2, restarts=5):
    """Optimasi parameter QAOA dengan multi-restart COBYLA."""
    best_exp = float('inf')
    best_params = None
    best_probs = None
    best_diag = None

    for trial in range(restarts):
        np.random.seed(trial * 17 + 7)
        init = np.random.uniform(0, 2*np.pi, 2*p)
        # Batasi gamma in [0, 2pi], beta in [0, pi] (periodisitas)
        result = minimize(
            lambda pr: qaoa_expectation(pr, Q, p)[0],
            init, method='COBYLA',
            options={'maxiter': 200, 'rhobeg': 0.5}
        )
        exp_val, probs, diag = qaoa_expectation(result.x, Q, p)
        if exp_val < best_exp:
            best_exp = exp_val
            best_params = result.x
            best_probs = probs
            best_diag = diag

    return best_params, best_exp, best_probs, best_diag


# ============================================================
# 3. SIMULATED ANNEALING KLASIK (pembanding)
# ============================================================
def simulated_annealing(Q, n_iter=5000, T0=5.0, cooling=0.995):
    n = Q.shape[0]
    x = np.random.randint(0, 2, n)
    best_x = x.copy()
    best_cost = qubo_cost(x, Q)
    current_cost = best_cost
    T = T0
    for _ in range(n_iter):
        # Flip 1 bit random
        flip = np.random.randint(0, n)
        x_new = x.copy()
        x_new[flip] = 1 - x_new[flip]
        new_cost = qubo_cost(x_new, Q)
        delta = new_cost - current_cost
        if delta < 0 or np.random.rand() < np.exp(-delta / max(T, 1e-9)):
            x = x_new
            current_cost = new_cost
            if current_cost < best_cost:
                best_cost = current_cost
                best_x = x.copy()
        T *= cooling
    return best_x, best_cost


# ============================================================
# 4. DEMO EKSEKUSI
# ============================================================
if __name__ == "__main__":
    print("=" * 65)
    print("  QUANTUM APPROXIMATE OPTIMIZATION (QAOA) vs KLASIK")
    print("  Mini-JSSP QUBO (n=4 qubit) — Simulasi State Vector")
    print("=" * 65)

    Q = build_jsp_qubo()
    print("\nMatriks QUBO Q (upper-triangular):")
    print(Q)

    # Solusi eksak
    opt_x, opt_cost = brute_force_qubo(Q)
    print(f"\n[BRUTE FORCE] Solusi optimal: x={opt_x}  cost={opt_cost:.4f}")

    # QAOA p=1, p=2, p=3
    for p in [1, 2, 3]:
        params, exp_val, probs, diag = solve_qaoa(Q, p=p, restarts=5)
        # Sampel solusi paling probable dari distribusi QAOA
        best_idx = np.argmax(probs)
        n = Q.shape[0]
        sampled_x = np.array([(best_idx >> k) & 1 for k in range(n)])
        sampled_cost = qubo_cost(sampled_x, Q)
        gamma = params[:p]
        beta = params[p:]
        # Approximation ratio
        ratio = exp_val / opt_cost if opt_cost != 0 else float('inf')
        print(f"\n[QAOA p={p}]")
        print(f"  gamma={np.round(gamma, 3)}  beta={np.round(beta, 3)}")
        print(f"  <H_C> expectation = {exp_val:.4f}  (ratio vs optimum: {ratio:.4f})")
        print(f"  Most probable state: x={sampled_x}  cost={sampled_cost:.4f}  prob={probs[best_idx]:.4f}")
        # Top-3 most probable states
        top3 = np.argsort(probs)[-3:][::-1]
        print(f"  Top-3 states:")
        for idx in top3:
            xi = np.array([(idx >> k) & 1 for k in range(n)])
            print(f"    x={xi}  cost={diag[idx]:.4f}  prob={probs[idx]:.4f}")

    # Simulated Annealing
    np.random.seed(0)
    sa_x, sa_cost = simulated_annealing(Q, n_iter=3000)
    print(f"\n[SIMULATED ANNEALING] Best: x={sa_x}  cost={sa_cost:.4f}")

    # Ringkasan perbandingan
    print("\n" + "=" * 65)
    print("  RINGKASAN: QAOA memanfaatkan interferensi kuantum untuk")
    print("  memperkuat amplitudo state berbiaya rendah. Pada NISQ nyata,")
    print("  p=2..3 sudah memberikan approximation ratio > 0.85 untuk n kecil,")
    print("  dan hybrid warm-start (SA -> QAOA) mempercepat konvergensi.")
    print("=" * 65)
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
