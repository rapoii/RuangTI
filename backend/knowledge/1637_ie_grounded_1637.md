# 1637 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain dengan Mempertimbangkan Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Baterai Pensiun
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global yang diproyeksikan mencapai lebih dari 145 juta unit pada 2030 (IEA, *Global EV Outlook 2024*) menciptakan tantangan logistik inversi yang belum pernah terjadi sebelumnya: **pembuangan baterai lithium-ion (LIB) pensiun dalam volume masif**. JIANG Lin & TANG Lidan (2025) dalam makalah yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering* (DOI: 10.52202/078960-0068) menekankan bahwa baterai EV dengan kapasitas retensi (*state of health*, SOH) di bawah 80% umumnya tidak lagi layak untuk aplikasi otomotif, namun masih memiliki nilai guna residual yang signifikan untuk aplikasi *second-life* seperti *stationary energy storage system* (ESS), lampu jalan tenaga surya, hingga catu daya telekomunikasi *off-grid*.

Permasalahan fundamental yang diangkat adalah **desain jaringan closed-loop supply chain (CLSC) baterai pensiun** yang mengintegrasikan tiga aliran simultan: (1) aliran maju (*forward*) baterai baru dari manufaktur ke OEM dan konsumen, (2) aliran balik (*reverse*) baterai pensiun dari konsumen ke pusat koleksi, dan (3) aliran pemanfaatan bertingkat yang memisahkan baterai berdasarkan tingkat degradasi untuk dialokasikan ke *echelon* yang paling sesuai. Studi JIANG & TANG (2025) menunjukkan bahwa tanpa strategi pemisahan yang rigor, perusahaan menghadapi risiko *misallocation* yang menurunkan profitabilitas CLSC hingga 18–24% berdasarkan simulasi numerik mereka.

Di sisi lain, Shin, Kim, & Jeong (2024) (DOI: 10.2139/ssrn.4934197) melengkapi kerangka tersebut dengan menyoroti bahwa **ketidakpastian permintaan回收 (*return quantity*), tingkat degradasi baterai, serta harga logam kritis (litium, kobalt, nikel)** merupakan sumber utama risiko operasional. Mereka mengusulkan formulasi *robust optimization* yang melindungi keputusan jaringan terhadap *worst-case scenario* dalam interval ketidakpastian Box-ellipsoidal.

Urgensi ekonomi: baterai EV menyumbang 30–40% dari total biaya kendaraan, sehingga keputusan lokasi *echelon utilization center* (EUC) dan *recycling remanufacturing center* (RRC) memiliki dampak langsung pada *levelized cost of storage* (LCOS) aplikasi *second-life*. Dari perspektif regulasi, *EU Battery Regulation 2023/1542* dan *China's New Energy Vehicle Power Battery Recycling Policy* (MIIT, 2018) menetapkan target daur ulang ≥70% untuk baterai Li-ion pada 2030, menjadikan CLSC bukan sekadar keputusan profit tetapi kewajiban kepatuhan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Multi-Echelon

Model JIANG & TANG (2025) membangun jaringan CLSC baterai pensiun yang terdiri atas:

- **Node sumber:** $i \in I$ = pusat koleksi baterai pensiun
- **Node EUC:** $j \in J$ = pusat pemanfaatan bertingkat
- **Node RRC:** $k \in K$ = pusat daur ulang & remanufaktur
- **Node pasar sekunder:** $l \in L$ = permintaan aplikasi *second-life* (ESS, telekomunikasi, dll.)
- **Node pasar daur ulang:** $m \in M$ = permintaan material hasil daur ulang

### 2.2 Fungsi Objektif: Maksimisasi Profit Total CLSC

Fungsi tujuan adalah memaksimalkan laba bersih total CLSC selama horizon perencanaan $T$:

$$\max \Pi = \sum_{t=1}^{T} \left[ \sum_{l \in L} p_l^{(2nd)} \cdot q_{j,l,t}^{(2nd)} + \sum_{m \in M} p_m^{(re)} \cdot q_{k,m,t}^{(re)} - \sum_{i \in I} c_i^{col} \cdot Q_{i,t} - \sum_{j \in J} c_j^{eu} \cdot y_{j,t} - \sum_{k \in K} c_k^{rr} \cdot y_{k,t} \right] - \sum_{j \in J} F_j^{eu} \cdot z_j - \sum_{k \in K} F_k^{rr} \cdot z_k$$

di mana:
- $p_l^{(2nd)}$ = harga jual baterai *second-life* ke pasar $l$ (USD/kWh)
- $p_m^{(re)}$ = harga jual material daur ulang (litium, kobalt, nikel) ke pasar $m$
- $q_{j,l,t}^{(2nd)}$ = alokasi baterai dari EUC $j$ ke pasar *second-life* $l$ pada periode $t$
- $q_{k,m,t}^{(re)}$ = alokasi material dari RRC $k$ ke pasar $m$ pada periode $t$
- $c_i^{col}, c_j^{eu}, c_k^{rr}$ = biaya variabel operasional koleksi, EUC, dan RRC
- $F_j^{eu}, F_k^{rr}$ = biaya investasi tetap (fixed cost) pembukaan fasilitas
- $z_j, z_k \in \{0,1\}$ = variabel keputusan biner fasilitas
- $Q_{i,t}$ = volume baterai pensiun yang dikumpulkan di node $i$

### 2.3 Batasan Klasifikasi Baterai Berdasarkan SOH

JIANG & TANG (2025) memperkenalkan ambang batas degradasi yang menjadi inti strategi *echelon utilization*:

$$\theta_{i,t}^{EU} + \theta_{i,t}^{RR} + \theta_{i,t}^{disp} = 1, \quad \forall i,t$$

di mana $\theta^{EU}, \theta^{RR}, \theta^{disp}$ adalah proporsi baterai yang dialokasikan ke pemanfaatan bertingkat, remanufaktur, atau disposal. Klasifikasi mengikuti aturan:

$$\theta_{i,t}^{EU} = \begin{cases} 1, & \text{jika } SOH_{i,t} \in [0.6, 0.8) \\ 0, & \text{lainnya} \end{cases}$$

$$\theta_{i,t}^{RR} = \begin{cases} 1, & \text{jika } SOH_{i,t} \in [0.4, 0.6) \\ 0, & \text{lainnya} \end{cases}$$

### 2.4 Batasan Kapasitas dan Aliran

**Kapasitas EUC:**
$$\sum_{i \in I} x_{i,j,t} \leq Cap_j^{eu} \cdot z_j, \quad \forall j,t$$

**Kapasitas RRC:**
$$\sum_{i \in I} \sum_{j \in J} w_{i,j,k,t} \leq Cap_k^{rr} \cdot z_k, \quad \forall k,t$$

**Konservasi aliran di EUC:**
$$\sum_{l \in L} q_{j,l,t}^{(2nd)} \cdot (1 - \rho^{loss}) = \sum_{i \in I} x_{i,j,t}, \quad \forall j,t$$

di mana $\rho^{loss}$ adalah *round-trip efficiency loss* pada proses *refurbishment* baterai *second-life* (tipikal 5–8%).

### 2.5 Formulasi Robust Optimization (Shin, Kim, Jeong, 2024)

Melengkapi model JIANG & TANG, Shin et al. (2024) memperkenalkan *budget of uncertainty* $\Gamma$ untuk melindungi terhadap fluktuasi permintaan回收 dan harga:

$$\min_{x,y} \max_{u \in \mathcal{U}} \mathbf{c}^\top \mathbf{x} + \mathbf{b}^\top \mathbf{y}$$

dengan himpunan ketidakpastian:

$$\mathcal{U} = \left\{ \mathbf{u} : u_l = \bar{u}_l + \hat{u}_l \cdot \zeta_l, \; \zeta_l \in [-1,1], \; \sum_{l} |\zeta_l| \leq \Gamma \right\}$$

Reformulasi dualnya menjadi *Mixed-Integer Linear Program* (MILP) melalui引入 variabel $\eta_l$ dan $\lambda$:

$$\min \mathbf{c}^\top \mathbf{x} + \sum_{l} \eta_l + \Gamma \cdot \lambda$$

$$\text{s.t.: } \eta_l + \lambda \geq -\hat{u}_l \cdot \mathbf{A}_l^\top \mathbf{x}, \quad \forall l$$

Pendekatan ini menjamin **feasibility** keputusan jaringan bahkan pada skenario *worst-case* fluktuasi pasar回收.

### 2.6 Formulasi Stokastik Permintaan

Permintaan回收 baterai pensiun dimodelkan sebagai proses Wiener:

$$Q_{i,t} = Q_{i,t-1} + \mu_i + \sigma_i \cdot \epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0,1)$$

dengan estimasi parameter menggunakan data historis dari *China Automotive Battery Innovation Alliance* (CABIA, 2023).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) serta Shin et al. (2024) secara konsisten mengusulkan metodologi implementasi CLSC baterai pensiun dalam **lima fase rekayasa**:

### Fase 1: Klasifikasi & Diagnostik Baterai
1. **Pengumpulan data telematri OEM** — setiap baterai EV membawa *battery passport* (sesuai EU Reg. 2023/1542) yang mencatat siklus pengisian, suhu operasi, dan *depth of discharge* (DoD).
2. **Pengujian SOH** di pusat koleksi menggunakan *capacity testing protocol* (CTP) dengan laju C/3 sesuai standar IEC 62660-1.
3. **Sortiran otomatis** menggunakan *computer vision* + *machine learning classifier* (akurasi ≥96% menurut dataset JIANG & TANG, 2025).

### Fase 2: Desain Jaringan CLSC
1. Identifikasi kandidat lokasi EUC dan RRC menggunakan analisis *center-of-gravity* berbobot volume baterai pensiun.
2. Solusi MILP/robust MILP menggunakan *solver* CPLEX 22.1 atau Gurobi 11.0 pada perangkat *high-performance computing* (HPC).
3. Validasi solusi melalui *Monte Carlo simulation* (10.000 iterasi) untuk menguji *robustness* terhadap skenario ekstrem.

### Fase 3: Operasional Pemanfaatan Bertingkat
1. **Refurbishment baterai *second-life***: *cell-balancing*, penggantian *BMS* (battery management system), dan *repackaging* ke modul ESS.
2. **Quality Assurance**: pengujian kapasitas minimal 50 siklus pada C/2 charge-discharge.
3. **Sertifikasi**: standar UL 1974 (Second Life Batteries) dan GB/T 34014-2017 (China).

### Fase 4: Daur Ulang & Remanufaktur
1. **Disassembly otomatis** di RRC menggunakan *robotic arm* (presisi ±0,2 mm).
2. **Pyrometallurgical / hydrometallurgical process**: ekstraksi litium, kobalt, nikel dengan recovery rate ≥95% (target teknologi terbaru).
3. **Closed-loop material**: logam hasil daur ulang dijual kembali ke *cell manufacturer* (CATL, LG Energy Solution, BYD).

### Fase 5: Monitoring & Reverse Logistics Intelligence
- **IoT sensor** pada kontainer baterai pensiun untuk *real-time tracking* suhu, getaran, dan lokasi.
- **Digital twin** jaringan CLSC untuk simulasi *what-if scenario* dan *predictive maintenance*.
- **Blockchain ledger** untuk traceability baterai (sesuai *Battery Passport* EU).

**Diagram alir proses CLSC baterai pensiun (disintesis dari kedua paper):**

```
[EV退役] → [Collection Point i] → [SOH Diagnostic]
                                       ↓
            ┌──────────────┬──────────┴───────────┬──────────────┐
            ↓              ↓                      ↓              ↓
     [Disposal]    [EUC j: 0.6≤SOH<0.8]    [RRC k: 0.4≤SOH<0.6]  [Disposal]
                        ↓                      ↓
              [2nd-life market l]    [Material market m]
                        ↓                      ↓
              [Stationary ESS]      [Cell manufacturer]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Sintesis Berbasis