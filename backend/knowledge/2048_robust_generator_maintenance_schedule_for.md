# 2048 — Penjadwalan Pemeliharaan Generator yang Robust untuk Sistem Tenaga dengan Keamanan Frekuensi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Robust Generator Maintenance Schedule for Frequency-Secure Power Systems
**Jurnal & Sitasi Utama:** Yang Yang, Qiuzhuang Sun, Jimmy Chih‐Hsien Peng (2025). *Manufacturing & Service Operations Management*. DOI: [https://doi.org/10.1287/msom.2023.0664](https://doi.org/10.1287/msom.2023.0664)
**Sitasi Pendukung:** Changkun Guan, El Mehdi Er Raqabi, Mathieu Tanneau (2026). *arXiv (Cornell University)*. DOI: [https://openalex.org/W7164090049](https://openalex.org/W7164090049)

---

## 1. Pendahuluan dan Konteks Industri

Sistem tenaga listrik modern beroperasi pada frekuensi nominal yang presisi—misalnya 50 Hz di Eropa, Asia, dan sebagian besar Indonesia, atau 60 Hz di Amerika Utara. Setiap deviasi signifikan dari nilai nominal ini mencerminkan ketidakseimbangan antara pembangkitan dan beban, dan jika tidak ditangani dapat memicu pelepasan generator secara beruntun (cascading trips) yang berakhir pada pemadaman total (blackout). Insiden kelistrikan Texas pada Februari 2021 menjadi peringatan keras bagi komunitas operasi sistem tenaga: lebih dari 4,5 juta pelanggan kehilangan listrik selama lebih dari 70 jam, dengan kerugian ekonomi langsung diestimasi mencapai USD 80–130 miliar (国会, 2021). Investigasi penyebab utama menunjukkan bahwa kombinasi antara pemeliharaan preventif generator yang tidak sinkron dengan profil risiko cuaca ekstrem, serta defisiensi cadangan inersia dan cadangan regulasi frekuensi, menjadi kontributor determinan.

Dalam operasional harian, setiap generator yang menjalani *planned outage* untuk pemeliharaan akan kehilangan kontribusinya terhadap inersia sistem dan cadangan regulasi primer. Fenomena ini menciptakan nexus natural antara keputusan penjadwalan pemeliharaan—yang selama ini menjadi domain klasik riset *operations research*—dengan keamanan frekuensi sistem tenaga—yang selama ini menjadi domain riset *power system dynamics*. Literatur konvensional, sebagaimana dicatat oleh Yang, Sun, dan Peng (2025, DOI: 10.1287/msom.2023.0664), secara dominan memperlakukan penjadwalan pemeliharaan sebagai masalah optimasi biaya dengan kendala ketersediaan unit, mengabaikan dinamika frekuensi transien. Padahal, sebuah sistem dengan margin kapasitas pembangkitan yang melimpah namun inersia sistem yang rendah tetap rentan terhadap pelepasan beban darurat berbasis frekuensi (Under-Frequency Load Shedding/UFLS).

Konteks industri yang melatarbelakangi riset ini memiliki urgensi yang semakin meningkat karena tiga tren simultan. Pertama, penetrasi energi terbarukan (PLTS, PLTB) yang inverter-based menurunkan inersia sistem alamiah. Kedua, digitalisasi dan deregulasi pasar tenaga listrik memperpendek horizon perencanaan dari tahunan menjadi mingguan bahkan harian. Ketiga, meningkatnya kejadian cuaca ekstrem (*polar vortex*, heat dome, wildfire) menambah ketidakpastian pada profil beban dan ketersediaan unit pembangkitan. Oleh karena itu, kebutuhan akan model optimasi robust yang mengintegrasikan kendala keamanan frekuensi ke dalam penjadwalan pemeliharaan generator menjadi sangat mendesak bagi operator sistem transmisi (ISO/TSO), perusahaan pembangkitan (gencos), maupun regulator sektor energi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Dinamika Frekuensi Sistem dan Inersia

Model dasar yang digunakan adalah persamaan ayunan (*swing equation*) sistem tunggal ekuivalen:

$$ \frac{2H_{sys}}{f_0} \cdot \frac{df}{dt} = P_m(t) - P_e(t) $$

di mana $H_{sys}$ adalah konstanta inersia agregat sistem (detik), $f_0$ frekuensi nominal, $P_m$ total pembangkitan mekanis, dan $P_e$ total beban listrik (MW). Saat terjadi gangguan kehilangan pembangkitan $\Delta P$ secara instan, laju perubahan frekuensi awal (*Rate of Change of Frequency*, RoCoF) diberikan oleh:

$$ \text{RoCoF}_0 = \frac{\Delta P \cdot f_0}{2 H_{sys}} $$

Untuk mencegah tripping proteksi berbasis RoCoF, sistem mensyaratkan:

$$ |\text{RoCoF}_0| \leq \text{RoCoF}^{\max} $$

Nadir frekuensi (*frequency nadir*) adalah titik minimum setelah gangguan, yang secara aproksimatif dapat dihitung dengan formula swing-plus-droop:

$$ f_{nadir} \approx f_0 - \frac{\Delta P}{D + K_m} \left[ 1 + e^{-\xi \omega_n t_{nadir}} \right] $$

di mana $D$ adalah koefisien damping beban, $K_m$ gain kontroler droop primer, $\xi$ dan $\omega_n$ parameter dinamis sistem. Kendala keamanan frekuensi utama:

$$ f_{nadir} \geq f_{threshold} $$

### 2.2 Formulasi Optimasi Penjadwalan Pemeliharaan

Model penjadwalan pemeliharaan generator untuk sistem yang aman secara frekuensi dapat diformulasikan sebagai mixed-integer linear program (MILP) dengan horizon $T$ periode (mingguan/bulanan). Parameter dan variabel keputusan utama:

- $I = \{1, 2, \dots, G\}$: himpunan generator
- $x_{i,t} \in \{0,1\}$: status online/offline generator $i$ pada periode $t$
- $y_{i,t} \in \{0,1\}$: status pemeliharaan (1 jika sedang pemeliharaan)
- $p_{i,t} \geq 0$: dispatch level (MW)
- $u_{i,t} \geq 0$: spin reserve yang dicadangkan

Fungsi objektif meminimalkan total biaya operasional ditambah biaya pemeliharaan terjadwal:

$$ \min \sum_{t=1}^{T} \sum_{i=1}^{G} \left[ C_i^{gen} \cdot p_{i,t} + C_i^{maint} \cdot y_{i,t} + C^{VOLL} \cdot ENS_t \right] $$

dengan $ENS_t$ adalah *energy not served* dan $C^{VOLL}$ adalah *value of lost load*. Kendala utama mencakup:

**Kendala keseimbangan daya:** $\sum_i p_{i,t} + w_t^{import} = D_t - w_t^{curtail}$ untuk setiap $t$.

**Kendala kapasitas unit:** $p_{i,t}^{\min} x_{i,t} \leq p_{i,t} \leq p_{i,t}^{\max} x_{i,t}$.

**Kendala kontinuitas pemeliharaan:** jika $y_{i,t}=1$ maka harus ada minimal $L_i$ dan maksimal $U_i$ periode berturut-turut dengan $y_{i,t}=1$:

$$ L_i \cdot z_{i,t} \leq \sum_{s=t-L_i+1}^{t} y_{i,s} \leq U_i \cdot z_{i,t} $$

**Kendala inersia sistem (persamaan kunci dari Yang et al. 2025):**

$$ \sum_{i \in \mathcal{G}_{sync}} H_i \cdot S_i^{\max} \cdot x_{i,t} \geq H_t^{min} \cdot D_t, \quad \forall t $$

di mana $\mathcal{G}_{sync}$ adalah himpunan generator sinkron (memiliki inersia intrinsik), $H_i$ konstanta inersia (s), $S_i^{\max}$ kapasitas (MVA), dan $H_t^{min}$ adalah koefisien inersia minimum yang diperlukan untuk menjaga RoCoF agar tidak melebihi ambang kritis $\text{RoCoF}^{\max}$:

$$ H_t^{min} = \frac{\Delta P^{max} \cdot f_0}{2 \cdot \text{RoCoF}^{\max} \cdot D_t} $$

**Kendala cadangan regulasi primer:**

$$ \sum_{i \in \mathcal{G}_{sync}} r_i^{\max} x_{i,t} \geq R_t^{min}, \quad \forall t $$

dengan $r_i^{\max}$ kapasitas cadangan primer generator $i$ dan $R_t^{min}$ kebutuhan regulasi sistem (umumnya 5–10% beban puncak).

### 2.3 Dekomposisi Benders dan Proxy-BD

Masalah MILP berskala besar ini memiliki struktur yang amenable untuk *Benders decomposition*: variabel keputusan pemeliharaan $y$ dan status $x$ adalah variabel "complicating", sementara setelah $x, y$ difiksasi, subproblem verifikasi dinamika frekuensi menjadi masalah yang lebih tractable. Benders klasik menghasilkan *cut* dari subproblem:

$$ \eta \geq \pi^T (b - F(x,y)) $$

Namun, sebagaimana diidentifikasi oleh Guan, Er Raqabi, dan Tanneau (2026, DOI: openalex.org/W7164090049), Benders klasik menderita *zigzagging* karena subproblem yang sangat mirip diulang setiap iterasi. Solusi Proxy-BD memperkenalkan *certified optimization proxy* yang menggantikan solver eksak dengan mekanisme *predict-project-and-complete*:

1. **Predict:** model pembelajaran mesin memprediksi nilai optimum subproblem dari parameter $(x,y)$.
2. **Project:** memproyeksikan prediksi ke daerah layak dual.
3. **Complete:** jika prediksi tidak tersertifikasi feasible secara dual, lakukan solve eksak parsial untuk menghasilkan *Benders cut* yang valid.

Secara formal, proxy $\hat{v}(x,y)$ memenuhi:

$$ \hat{v}(x,y) \in [\underline{v}(x,y), \bar{v}(x,y)] $$

dengan $\underline{v}$ adalah *lower bound* (dari Lagrangian relaxation) dan $\bar{v}$ adalah *upper bound* (dari heuristic). Cut yang dihasilkan tetap valid karena $\hat{v}$ bersertifikat *dual-feasible*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi operasional penjadwalan pemeliharaan robust berbasis keamanan frekuensi mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Akuisisi Data Sistem.** Kumpulkan data generator (kapasitas $S_i^{\max}$, inersia $H_i$, ramp rate $RR_i$, biaya $C_i^{gen}$, status historis), profil beban forecast $D_t$, parameter dinamis (RoCoF$^max$ threshold, $f_{threshold}$ UFLS), dan daftar pemeliharaan mandatory. Standar referensi: IEEE Std 1110 untuk model stabilitas, NERC BAL-003 untuk standar regulasi frekuensi, dan IEC 60034 untuk karakteristik generator sinkron.

**Tahap 2 — Formulasi Model MILP Robust.** Bangun model sesuai Bagian 2.2, dengan memperhatikan ketidakpastian beban dan kontingensi pembangkitan. Pendekatan robust optimization menggunakan uncertainty set:

$$ \mathcal{U} = \left\{ D_t : D_t = \bar{D}_t + \hat{D}_t \cdot \zeta_t, \quad \sum_t |\zeta_t| \leq \Gamma \right\} $$

dengan $\Gamma$ adalah *budget of uncertainty*. Solusi harus feasible untuk seluruh $D_t \in \mathcal{U}$.

**Tahap 3 — Konstruksi Master Problem.** Variabel keputusan $x_{i,t}, y_{i,t}, z_{i,t}$ dengan kendala linking ke cadangan regulatorik dan inersia. Iterasi dimulai dengan *relaxasi* tanpa kendala frekuensi.

**Tahap 4 — Eksekusi Proxy-BD.** Subproblem verifikasi frekuensi dipecahkan melalui Proxy-BD (Guan et al. 2026). Pipeline data engineering: subproblem parameter $\to$ feature engineering $\to$ trained neural proxy $\to$ dual projection $\to$ cut generation $\to$ feedback ke master problem.

**Tahap 5 — Validasi dan Stress Test.** Solusi akhir divalidasi dengan simulasi dinamis time-domain (misalnya menggunakan PSSE, DIgSILENT PowerFactory) terhadap skenario N-1 dan N-2 contingencies, dengan horizon simulasi minimal 30 detik pasca gangguan.

**Tahap 6 — Diseminasi Operasional.** Jadwal pemeliharaan di-deliver ke unit commitment day-ahead dan real-time market clearing, dengan *feedback loop* untuk memperbarui model jika terjadi deviasi signifikan.

Diagram alir keputusan:

```
┌──────────────────────────────────────────┐
│  INPUT: Data generator, profil beban,    │
│         standar NERC/IEC/IEEE            │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│  FORMULASI MILP robust                   │
│  (Master Problem + Subproblem Dinamika) │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│  PROXY-BD ITERATION LOOP                 │
│  (Predict → Project → Complete)         │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│  CONVERGENCE CHECK (gap < ε)            │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│  VALIDASI TIME-DOMAIN SIMULATION        │
└──────────────────┬───────────────────────┘
                   ▼
┌────────────────────────────────────────