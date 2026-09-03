# Modul 457: Functional Resonance Analysis Method (FRAM), Arsitektur STAMP/STPA, dan Rekayasa Resiliensi Keselamatan Industri (Safety-II)

## 1. Paradigma Keselamatan Industri: Evolusi dari Safety-I ke Safety-II

Dalam sejarah rekayasa keselamatan dan ergonomi sistem industri (*industrial safety engineering and system ergonomics*), pendekatan analisis keselamatan telah mengalami pergeseran paradigma fundamental (*paradigm shift*).

```
+---------------------------------------------------------------------------------------------------+
|               EVOLUSI PARADIGMA KESELAMATAN & REKAYASA KESELAMATAN INDUSTRI                       |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    PARADIGMA SAFETY-I (Reaktif / Linier)               PARADIGMA SAFETY-II (Proaktif / Kompleks)  |
|    ------------------------------------               -----------------------------------------   |
|    - Definisi: Keselamatan = Jumlah kegagalan         - Definisi: Keselamatan = Kemampuan sistem  |
|      atau insiden seminimal mungkin (Zero Accident).    sukses beroperasi dalam variabilitas.     |
|    - Fokus: Apa yang salah (Things go wrong)?         - Fokus: Mengapa sebagian besar operasi     |
|    - Model Kausal: Rantai sebab-akibat linier           sukses berjalan (Things go right)?        |
|      (Domino Theory Heinrich, Swiss Cheese Reason,    - Model Kausal: Resonansi non-linier,       |
|      Fault Tree Analysis, FMEA klasik).                 dinamika kontrol sosioteknis (FRAM, STAMP)|
|    - Peran Manusia: Sumber kesalahan / bahaya         - Peran Manusia: Fleksibilitas kognitif &   |
|      (Human Error) yang harus dibatasi SOP ketat.       penyedia resiliensi sistem (Resource).    |
|    - Konsep Kerja: Work-As-Imagined (WAI) identik     - Konsep Kerja: Mengakui diskrepansi antara |
|      dengan kenyataan lapangan.                         Work-As-Imagined (WAI) vs As-Done (WAD).  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

Dalam sistem sosioteknis industri modern (seperti kilang petrokimia, manufaktur semikonduktor, pembangkit energi nuklir, dan sistem logistik otomatis terdistribusi), interaksi antar-komponen tidak lagi bersifat linier deterministik (*bimodal component failure*). Kegagalan katastrofik sering kali muncul (*emerge*) bukan karena satu komponen rusak atau satu operator lalai, melainkan akibat akumulasi variabilitas performa harian normal yang saling beresonansi (*non-linear functional resonance*).

---

## 2. Kerangka Kerja STAMP dan Metodologi STPA (Nancy Leveson)

**STAMP (*Systems-Theoretic Accident Model and Processes*)** dikembangkan oleh Prof. Nancy Leveson (MIT) berbasiskan Teori Sistem Umum (*General Systems Theory*). STAMP memandang keselamatan bukan sebagai masalah keandalan komponen (*component reliability problem*), melainkan sebagai **masalah kontrol (*control problem*)**. Kecelakaan terjadi ketika kendala keselamatan (*safety constraints*) gagal ditegakkan oleh struktur kontrol hierarkis.

```
+---------------------------------------------------------------------------------------------------+
|               STRUKTUR KONTROL KESELAMATAN HIERARKIS (STAMP CONTROL STRUCTURE)                     |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    +-----------------------------------------------------------------------------------------+    |
|    |                                MANAJEMEN OPERASIONAL / REGULATOR                         |    |
|    | - Menetapkan target produksi, anggaran maintenance, dan batasan batas keselamatan (SOP) |    |
|    +-----------------------------------------------------------------------------------------+    |
|               |                                                       ^                           |
|               | Tindakan Kontrol (Kebijakan, Alokasi Sumber Daya)     | Umpan Balik (Laporan KPI) |
|               v                                                       |                           |
|    +-----------------------------------------------------------------------------------------+    |
|    |                                SUPERVISOR & OPERATOR KONTROL                             |    |
|    | - Menjalankan intervensi manual, mengawasi HMI, merespons alarm SCADA                   |    |
|    +-----------------------------------------------------------------------------------------+    |
|               |                                                       ^                           |
|               | Sinyal Kontrol Manual / Modifikasi Setpoint           | Sensor HMI / Visual       |
|               v                                                       |                           |
|    +-----------------------------------------------------------------------------------------+    |
|    |                                KONTROLER OTOMASI (PLC / DCS)                            |    |
|    | - Menjalankan algoritma kontrol PID, safety interlock logika SIS (IEC 61508)            |    |
|    +-----------------------------------------------------------------------------------------+    |
|               |                                                       ^                           |
|               | Perintah Aktuator (Open/Close Valve, Motor Speed)     | Pengukuran Sensor (P, T)  |
|               v                                                       |                           |
|    +-----------------------------------------------------------------------------------------+    |
|    |                                PROSES FISIK KONTINU (PLANT)                             |    |
|    | - Reaktor kimia eksotermik, pompa fluida bertekanan tinggi, konveyor transfer material   |    |
|    +-----------------------------------------------------------------------------------------+    |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 2.1 Empat Kategori Unsafe Control Actions (UCA)

Metodologi **STPA (*System-Theoretic Process Analysis*)** mengidentifikasi potensi bahaya sistemik melalui 4 taksonomi tindakan kontrol tidak aman (*Unsafe Control Actions*):

1. **Not Providing Causes Hazard**: Kontroler tidak memberikan perintah kontrol ketika perintah tersebut sangat dibutuhkan untuk mencegah bahaya (misal: emergency cooling valve tidak dibuka saat temperatur reaktor melonjak).
2. **Providing Causes Hazard**: Kontroler memberikan perintah kontrol yang memicu kondisi berbahaya (misal: perintah membuka valve drainase limbah beracun saat tangki netralisasi belum selesai bereaksi).
3. **Providing Too Early / Too Late / Out of Order**: Perintah kontrol diberikan terlalu cepat, terlambat, atau tidak berurutan (misal: pemanasan dinyalakan sebelum agitator pengaduk fluida berputar).
4. **Stopped Too Soon / Applied Too Long**: Tindakan kontrol dihentikan sebelum waktunya atau dijalankan terlalu lama (misal: proses venting gas bertekanan ditutup sebelum tekanan reaktor turun ke level aman).

### 2.2 Model Mental dan Causal Scenarios STPA

Setiap kontroler (manusia maupun algoritma perangkat lunak) memiliki **Process Model** internal mengenai kondisi sistem. Ketidaksesuaian (*flawed process model*) antara kondisi proses aktual dengan estimasi kontroler adalah pemicu utama UCA:

$$\text{Process Model Error} = f\left(\text{Sensor Delay}, \text{Inaccurate Feedback}, \text{Cognitive Overload}, \text{Mode Confusion}\right)$$

---

## 3. Functional Resonance Analysis Method (FRAM) - Erik Hollnagel

**FRAM (*Functional Resonance Analysis Method*)** adalah metodologi pemodelan keselamatan sosioteknis berbasis fungsi dinamis. FRAM mendeskripsikan sistem melalui modul fungsi heksagonal yang saling terhubung.

```
                    Aspect 1: INPUT (I)
                             \
      Aspect 6: CONTROL (C)   \   Aspect 2: TIME (T)
                 \             \  /
                  +-------------+
                  |             |
                  |  FUNCTION   | ---> Aspect 3: OUTPUT (O)
                  |    NAME     |
                  +-------------+
                 /             /  \
     Aspect 5: PRECONDITION (P) \   Aspect 4: RESOURCE (R)
```

### 3.1 Enam Aspek Heksagonal FRAM

Untuk setiap fungsi sistem $F_k$ ($k = 1, \dots, K$):
1. **Input ($I_k$)**: Entitas (material, energi, data sinyal) yang diproses atau ditransformasikan oleh fungsi menjadi Output.
2. **Output ($O_k$)**: Hasil luaran langsung dari pelaksanaan fungsi (menjadi input, kontrol, waktu, atau syarat bagi fungsi lain).
3. **Precondition ($P_k$)**: Kondisi sistemik yang wajib terpenuhi sebelum fungsi dapat dieksekusi.
4. **Resource ($R_k$)**: Sumber daya (tenaga kerja bersertifikat, daya listrik cadangan, memori komputasi, perangkat perkakas) yang dikonsumsi atau disyaratkan selama eksekusi.
5. **Time ($T_k$)**: Batasan temporal (durasi eksekusi, jendela waktu kritis, sinkronisasi jadwal).
6. **Control ($C_k$)**: Aturan, prosedur SOP, batas ambang alarm, atau sinyal interlock yang mengatur eksekusi fungsi.

---

## 4. Teori Matematis Kopling Resonansi dan Analisis Variabilitas Stokastik

Dalam sistem industri dengan $N$ fungsi heksagonal FRAM $\{F_1, F_2, \dots, F_N\}$, performa output setiap fungsi $O_i$ tidak selalu konstan, melainkan memiliki variabilitas performa internal (*phenotype variability*).

### 4.1 Vektor Variabilitas Kinerja (Phenotype Variability Vector)

Variabilitas output dari fungsi $F_i$ dapat dimodelkan sebagai vektor stokastik $\mathbf{v}_i = [v_{i}^{\text{time}}, v_{i}^{\text{prec}}]^T$, di mana:
- $v_i^{\text{time}} \in \mathbb{R}$: Variabilitas waktu output (keterlambatan/terlalu cepat), dinormalisasi dengan nilai nominal $\mu_{\text{time}} = 0$.
- $v_i^{\text{prec}} \in [0, 1]$: Presisi/kualitas output ($1 = \text{sempurna}$, $0 = \text{cacat total}$).

Distribusi temporal eksekusi fungsi mengikuti distribusi log-normal atau Weibull:

$$f(t; \lambda_i, k_i) = \frac{k_i}{\lambda_i} \left(\frac{t}{\lambda_i}\right)^{k_i - 1} \exp\left(-\left(\frac{t}{\lambda_i}\right)^{k_i}\right), \quad t \ge 0$$

### 4.2 Matriks Kopling Fungsional (Functional Coupling Adjacency Matrix)

Interkoneksi antar-fungsi didefinisikan dalam matriks kopling terarah $\mathbf{A} \in \mathbb{R}^{N \times N}$, di mana elemen $A_{ij}$ menyatakan koefisien transfer atau amplifikasi variabilitas dari output fungsi $F_i$ ke aspek input/kontrol/waktu/prasyarat fungsi $F_j$:

$$A_{ij} = \begin{cases} 
w_{ij} \cdot \gamma_{ij}, & \text{jika } O_i \to \{I_j, P_j, R_j, T_j, C_j\} \\
0, & \text{jika tidak ada keterkaitan fungsional}
\end{cases}$$

di mana:
- $w_{ij} \in [0, 1]$ adalah bobot kepentingan struktural (*coupling strength*).
- $\gamma_{ij} \ge 1$ adalah faktor amplifikasi lingkungan/kondisi stres (*stress amplification factor*), misalnya beban kerja tinggi atau cuaca buruk.

### 4.3 Propagasi Resonansi Non-Linier dan Kondisi Spektral Stabilitas

Tingkat variabilitas tereksitasi total pada fungsi $F_j$ ($V_j$) pada iterasi/waktu $t+1$ merupakan kombinasi variabilitas internal fungsi ($\xi_j$) dan akumulasi variabilitas upstream yang terkopel secara non-linier:

$$V_j^{(t+1)} = \xi_j + \sum_{i=1}^N A_{ij} \cdot \Phi(V_i^{(t)}) + \sum_{i=1}^N \sum_{m > i}^N \Gamma_{im, j} \cdot V_i^{(t)} V_m^{(t)}$$

di mana:
- $\Phi(x) = \frac{1}{1 + e^{-\alpha (x - \theta)}}$ adalah fungsi aktivasi non-linier saturasi respons.
- $\Gamma_{im, j}$ adalah tensor kopling orde-dua yang memodelkan **resonansi emergent** ketika dua variabilitas upstream terjadi secara simultan (*simultaneous multi-functional resonance*).

Kondisi kestabilan sistem sosioteknis ditentukan oleh jari-jari spektral (*spectral radius*) dari matriks kopling linear tereduksi $\mathbf{A}$:

$$\rho(\mathbf{A}) = \max \{|\lambda| : \lambda \in \text{eig}(\mathbf{A})\}$$

- Jika $\rho(\mathbf{A}) < 1.0$: Sistem stabil; variabilitas teredam secara alami (*resilient dampening*).
- Jika $\rho(\mathbf{A}) \ge 1.0$: Sistem rentan terhadap resonansi fungsional tanpa batas (*runaway resonance*), memicu kecelakaan sistemik tanpa adanya kegagalan komponen tunggal (*accident without component failure*).

---

## 5. Algoritma & Python Solver: STPA Hazard Classifier & FRAM Resonance Simulator

Berikut adalah modul Python solver mandiri (*standalone*) berbasis Poisson-Weibull Monte Carlo dan analisis graf spektral untuk memodelkan struktur kontrol STPA dan resonansi fungsional FRAM pada sistem industri.

```python
"""
RuangTI - Industrial Safety Engineering: FRAM & STAMP/STPA Solver
Implementasi Analisis Kopling Resonansi Fungsional & Kestabilan Sistem Sosioteknis
"""

import numpy as np
from typing import Dict, List, Tuple, Any

class FRAMNetworkSimulator:
    def __init__(self, num_functions: int, function_names: List[str]):
        self.num_functions = num_functions
        self.function_names = function_names
        self.coupling_matrix = np.zeros((num_functions, num_functions), dtype=float)
        self.aspect_types: Dict[Tuple[int, int], str] = {}
        self.internal_variability_params: Dict[int, Tuple[float, float]] = {} # (mean, std)
        
    def add_coupling(self, from_func: int, to_func: int, aspect: str, weight: float, amplification: float = 1.0):
        """
        Menambahkan relasi ketergantungan heksagonal FRAM.
        aspect in ['Input', 'Precondition', 'Resource', 'Time', 'Control']
        """
        self.coupling_matrix[from_func, to_func] = weight * amplification
        self.aspect_types[(from_func, to_func)] = aspect
        
    def set_internal_variability(self, func_idx: int, base_mean: float, base_std: float):
        self.internal_variability_params[func_idx] = (base_mean, base_std)
        
    def calculate_spectral_radius(self) -> float:
        eigenvalues = np.linalg.eigvals(self.coupling_matrix)
        return float(np.max(np.abs(eigenvalues)))
    
    def simulate_monte_carlo_resonance(self, num_trials: int = 5000, time_horizon: int = 10, non_linear_alpha: float = 1.8) -> Dict[str, Any]:
        """
        Simulasi Monte Carlo non-linear functional resonance
        """
        n = self.num_functions
        threshold_exceedance_counts = np.zeros(n, dtype=int)
        max_variability_records = np.zeros((num_trials, n), dtype=float)
        critical_threshold = 2.5  # Batas resonansi kritis (pemicu bahaya / trip)
        
        for trial in range(num_trials):
            # Inisialisasi variabilitas internal
            v = np.zeros(n, dtype=float)
            for i in range(n):
                mean, std = self.internal_variability_params.get(i, (0.0, 0.2))
                v[i] = np.random.normal(mean, std)
                
            history = [v.copy()]
            
            for t in range(time_horizon):
                # Variabilitas generasi baru dari lingkungan/manusia
                xi = np.array([np.random.normal(*self.internal_variability_params.get(i, (0.0, 0.2))) for i in range(n)])
                
                # Transformasi non-linier saturasi
                phi_v = np.tanh(non_linear_alpha * v)
                
                # Resonansi interdependen linier + kuadratik
                linear_coupling = self.coupling_matrix.T @ phi_v
                quadratic_coupling = np.zeros(n)
                
                for j in range(n):
                    # Pasangan upstream yang beresonansi simultan ke fungsi j
                    upstream = np.where(self.coupling_matrix[:, j] > 0)[0]
                    if len(upstream) >= 2:
                        for u1 in range(len(upstream)):
                            for u2 in range(u1 + 1, len(upstream)):
                                idx1, idx2 = upstream[u1], upstream[u2]
                                quadratic_coupling[j] += 0.5 * (self.coupling_matrix[idx1, j] * self.coupling_matrix[idx2, j]) * (v[idx1] * v[idx2])
                
                # State update variabilitas
                v = xi + linear_coupling + quadratic_coupling
                history.append(v.copy())
                
            max_v = np.max(np.array(history), axis=0)
            max_variability_records[trial, :] = max_v
            
            for i in range(n):
                if max_v[i] >= critical_threshold:
                    threshold_exceedance_counts[i] += 1
                    
        resonance_probabilities = threshold_exceedance_counts / num_trials
        mean_peak_variabilities = np.mean(max_variability_records, axis=0)
        p95_peak_variabilities = np.percentile(max_variability_records, 95, axis=0)
        
        return {
            "spectral_radius": self.calculate_spectral_radius(),
            "resonance_probabilities": {self.function_names[i]: float(resonance_probabilities[i]) for i in range(n)},
            "mean_peak_variability": {self.function_names[i]: float(mean_peak_variabilities[i]) for i in range(n)},
            "p95_peak_variability": {self.function_names[i]: float(p95_peak_variabilities[i]) for i in range(n)},
            "most_critical_function": self.function_names[int(np.argmax(resonance_probabilities))]
        }

# --- Eksekusi Verifikasi Solusi ---
if __name__ == "__main__":
    funcs = [
        "F1: Monitoring Suhu & Tekanan Reaktor (Sensor/DCS)",
        "F2: Evaluasi Keputusan Operator Lapangan (Human)",
        "F3: Pengaturan Valve Pendingin Reaktor (Aktuator/PID)",
        "F4: Pengumpanan Katalis Reaksi Eksotermik (Dosing Pump)",
        "F5: Prosedur Emergency Blowdown Venting (Safety System)"
    ]
    
    sim = FRAMNetworkSimulator(num_functions=len(funcs), function_names=funcs)
    
    # Menentukan variabilitas internal dasar (mean, std)
    sim.set_internal_variability(0, base_mean=0.1, base_std=0.3)  # Sensor drift / noise
    sim.set_internal_variability(1, base_mean=0.3, base_std=0.6)  # Human cognitive workload
    sim.set_internal_variability(2, base_mean=0.0, base_std=0.2)  # Mechanical valve wear
    sim.set_internal_variability(3, base_mean=0.2, base_std=0.4)  # Catalyst pump flow variation
    sim.set_internal_variability(4, base_mean=0.0, base_std=0.1)  # High-reliability SIS
    
    # Membangun jaringan keterkaitan heksagonal
    sim.add_coupling(from_func=0, to_func=1, aspect="Input", weight=0.85, amplification=1.2)
    sim.add_coupling(from_func=1, to_func=2, aspect="Control", weight=0.75, amplification=1.1)
    sim.add_coupling(from_func=3, to_func=0, aspect="Input", weight=0.90, amplification=1.3)
    sim.add_coupling(from_func=2, to_func=0, aspect="Control", weight=0.80, amplification=1.0)
    sim.add_coupling(from_func=0, to_func=4, aspect="Precondition", weight=0.95, amplification=1.0)
    sim.add_coupling(from_func=1, to_func=4, aspect="Time", weight=0.65, amplification=1.4)
    
    results = sim.simulate_monte_carlo_resonance(num_trials=10000, time_horizon=8)
    
    print("=== HASIL ANALISIS RESONANSI FUNGSIONAL (FRAM & STPA) ===")
    print(f"Jari-Jari Spektral Jaringan (Spectral Radius): {results['spectral_radius']:.4f}")
    print(f"Status Kestabilan Sistem: {'TIDAK STABIL (Rawan Resonansi Akut)' if results['spectral_radius'] >= 1.0 else 'STABIL (Variabilitas Teredam)'}")
    print("\nProbabilitas Terjadinya Resonansi Fungsional Kritis (P(V >= 2.5)):")
    for fname, prob in results['resonance_probabilities'].items():
        print(f" - {fname}: {prob * 100:.2f}% (P95 Peak: {results['p95_peak_variability'][fname]:.3f})")
    print(f"\nFungsi Paling Rawan Memicu Kegagalan Sistemik: {results['most_critical_function']}")
```

---

## 6. Studi Kasus Industri: Reaktor Polimerisasi Eksotermik Petrokimia Terpadu

### 6.1 Deskripsi Kasus & Skenario Lapangan

Pada unit reaktor polimerisasi bertekanan tinggi di pabrik petrokimia Cilegon, terjadi insiden peningkatan temperatur tak terkendali (*thermal runaway*) yang berujung pada pecahnya *rupture disc* darurat. Investigasi awal berbasis **Safety-I (FMEA konvensional)** menyimpulkan "kegagalan katup kontrol dan human error operator". Namun, audit sistemik mendalam menggunakan **Safety-II & FRAM-STPA** mengungkap adanya resonansi non-linier antara fluktuasi laju alir pendingin, keterlambatan informasi SCADA, dan adaptasi kerja operator (*Work-As-Done*).

```
+---------------------------------------------------------------------------------------------------+
|               TABEL ANALISIS UNSAFE CONTROL ACTIONS (STPA) - REAKTOR POLIMERISASI                  |
+---------------------------------------------------------------------------------------------------+
| Control Action  | Not Providing        | Providing Causes     | Providing Too Early / | Stopped Too Soon/ |
|                 | Causes Hazard        | Hazard               | Too Late / Out Order  | Applied Too Long  |
+-----------------+----------------------+----------------------+-----------------------+-------------------+
| CA-1: Buka Katup| Katup tidak dibuka   | Katup dibuka saat    | Katup pendingin dibuka| Katup dibuka penuh|
| Pendingin       | saat laju polimeri-  | regenerasi katalis   | terlambat >45 detik   | menyebabkan thermal|
| (Cooling Valve) | sasi naik tajam.     | (thermal shock).     | setelah alarm high-T. | shock pada dinding|
|                 | [Hazard: Overheat]   | [Hazard: Retak Bejana]| [Hazard: Runaway]    | reaktor.          |
+-----------------+----------------------+----------------------+-----------------------+-------------------+
| CA-2: Injeksi   | Katalis terminator   | Katalis diinjeksikan | Dosing diinjeksikan   | Injeksi dihentikan|
| Terminator Kimia| tidak diinjeksikan   | saat reaksi stabil   | sebelum agitator      | sebelum massa fluida|
| (Kill Agent)    | pada fase eksoterm.  | (mematikan batch).   | mencapai RPM 350.     | terdeaktivasi.    |
|                 | [Hazard: Ledakan]    | [Hazard: Loss $120k] | [Hazard: Cold Spot]   | [Hazard: Re-trip] |
+-----------------+----------------------+----------------------+-----------------------+-------------------+
```

### 6.2 Matriks Heksagonal Aspek FRAM Unit Reaktor

```
+---------------------------------------------------------------------------------------------------+
|                  MATRIKS ASPEK FUNGSIONAL FRAM PADA REAKTOR POLIMERISASI                          |
+---------------------------------------------------------------------------------------------------+
| Fungsi (Function)   | Aspect Type    | Deskripsi Aspek                                | Interkoneksi Ke  |
+---------------------+----------------+------------------------------------------------+-------------------+
| F1: Regulasi Suhu   | Output (O)     | Suhu aktual terukur & sinyal deviasi setpoint  | -> F2 (Input)     |
| Reaktor (DCS)       | Control (C)    | Parameter tuning PID ($K_p=2.4, T_i=45s$)       | Dari Safety Eng   |
+---------------------+----------------+------------------------------------------------+-------------------+
| F2: Verifikasi HMI  | Input (I)      | Data telemetri laju reaksi & level gas         | Dari F1 (Output)  |
| oleh Operator       | Output (O)     | Keputusan intervensi manual bypass             | -> F3 (Control)   |
|                     | Resource (R)   | Kapasitas atensi visual operator (Workload)    | Beban Shift Malam |
+---------------------+----------------+------------------------------------------------+-------------------+
| F3: Eksekusi Valve  | Control (C)    | Sinyal analog mA dari operator atau DCS        | Dari F2 (Output)  |
| Pendingin Reaktor   | Output (O)     | Laju aliran air dingin ($m^3/\text{jam}$)      | -> F1 (Input)     |
|                     | Precondition(P)| Tekanan suplai air chiller $\ge 4.5\text{ bar}$| Dari Utilitas Air |
+---------------------+----------------+------------------------------------------------+-------------------+
```

---

## 7. Rekomendasi Peningkatan Resiliensi Sosioteknis (Resilience Engineering Interventions)

Berdasarkan analisis STPA dan simulasi spektral FRAM:
1. **Reduksi Kekuatan Kopling Resonansi ($\rho(\mathbf{A}) < 1.0$)**: Memisahkan kanal interlock instrumentasi trip darurat (*Safety Instrumented Function - SIF SIL-3*) dari jaringan bus komunikasi SCADA umum untuk mengeliminasi ketergantungan kuadratik.
2. **Harmonisasi WAI vs WAD (*Work-As-Imagined vs Work-As-Done*)**: Mendesain antarmuka *Ecological Interface Design (EID)* yang menampilkan margin keselamatan termal (*thermal safety envelope*) secara langsung daripada angka mentah parameter sensor.
3. **Penyediaan Peredam Variabilitas (*Dampening Buffers*)**: Menambahkan tangki akumulator pendingin bertekanan mandiri yang mampu menyerap fluktuasi suplai chiller tanpa membutuhkan respon manual instan dari operator.

---

## 8. Referensi Terverifikasi & Literatur Standar

1. Hollnagel, E. (2012). *FRAM: The Functional Resonance Analysis Method - Modelling Complex Socio-technical Systems*. Ashgate Publishing, Farnham, UK.
2. Leveson, N. G., & Thomas, J. P. (2018). *STPA Handbook*. MIT Partnership for Systems Approaches to Safety and Security (PSASS), Cambridge, MA.
3. Hollnagel, E., Wears, R. L., & Braithwaite, J. (2015). *From Safety-I to Safety-II: A White Paper*. The Resilient Health Care Net: Published simultaneously by the University of Southern Denmark, University of Florida, USA, and Macquarie University, Australia.
4. Patriarca, R., Di Gravio, G., Woltjer, R., Costantino, F., Falegnami, A., et al. (2020). "Framing the Functional Resonance Analysis Method: A Systematic Review of Twelve Years of Application in Safety Science". *Reliability Engineering & System Safety*, Vol. 200, 106979. DOI: 10.1016/j.ress.2020.106979.
5. Leveson, N. (2004). "A New Accident Model for Engineering Safer Systems". *Safety Science*, 42(4), pp. 237-270. DOI: 10.1016/S0925-7535(03)00047-8.
6. International Electrotechnical Commission. (2010). *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*. Geneva: IEC.
7. International Organization for Standardization. (2018). *ISO 45001:2018 - Occupational Health and Safety Management Systems - Requirements with Guidance for Use*. Geneva: ISO.$.
