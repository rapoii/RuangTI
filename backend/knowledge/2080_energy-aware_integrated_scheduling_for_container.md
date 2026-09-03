# 2080 — Penjadwalan Terintegrasi Sadar Energi pada Terminal Kontainer dengan AGV Bebas Konflik dan Optimasi Robust untuk Rantai Pasok Pertambangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Energy-aware Integrated Scheduling for Container Terminals with Conflict-free AGVs
**Jurnal & Sitasi Utama:** Zhaolin Zhong, Yiyun Guo, Jihui Zhang (2023). *Journal of Systems Science and Systems Engineering*. DOI: [https://doi.org/10.1007/s11518-023-5563-y](https://doi.org/10.1007/s11518-023-5563-y)
**Sitasi Pendukung:** Dhananjay Thiruvady, Su Nguyen, Yuan Sun (2024). *International Journal of Production Research*. DOI: [https://doi.org/10.1080/00207543.2024.2311183](https://doi.org/10.1080/00207543.2024.2311183)

---

## 1. Pendahuluan dan Konteks Industri

Terminal kontainer merupakan simpul kritis dalam jaringan logistik global, di mana lebih dari 80% perdagangan dunia dalam volume berpindah melalui fasilitas pelabuhan (Zhong, Guo, & Zhang, 2023). Dalam operasional terminal modern, Automated Guided Vehicles (AGV) telah menggantikan truk konvensional untuk mengangkut kontainer antara quay crane (QC), yard crane (YC), dan yard storage, karena mampu beroperasi 24/7 dengan presisi tinggi serta mengurangi kecelakaan kerja. Namun, permasalahan mendasar yang muncul adalah *deadlock* dan *node/edge conflict* ketika beberapa AGV berbagi jalur yang sama, ditambah dengan konsumsi energi yang signifikan akibat akselerasi, deselerasi, dan idle running. Studi Zhong dkk. (2023) menekankan bahwa *energy-aware integrated scheduling* bukan sekadar agenda lingkungan, melainkan telah menjadi imperatif ekonomi: biaya energi dapat mencapai 30–40% dari total biaya operasional terminal, dan inefisiensi routing AGV menyebabkan utilisasi QC menurun hingga 15%. Oleh karena itu, integrasi keputusan *task assignment*, *conflict-free routing*, dan *charging scheduling* dalam satu model optimasi menjadi kebutuhan strategis.

Di sisi lain, paralel dengan kompleksitas terminal, industri pertambangan menghadapi tantangan serupa dalam bentuk *Resource Constrained Job Scheduling* (RCJS) dengan ketidakpastian (Thiruvady, Nguyen, & Sun, 2024). Penambangan bijih dari pit ke stockpile dan pelabuhan memerlukan alokasi armada truk, loader, dan infrastruktur pendukung dengan ketidakpastian cuaca, ketersediaan sumber daya manusia, dan kegagalan alat. Thiruvady dkk. (2024) mencatat bahwa pendekatan deterministik gagal menangkap fluktuasi realita operasional, sehingga diperlukan algoritma *adaptive population-based simulated annealing* (APBSA) yang mampu mengeksplorasi ruang solusi secara robust. Kedua domain ini—meski berbeda secara fisik—memiliki kesamaan struktural: keterbatasan kapasitas, keputusan simultan lintas-fungsi, ketidakpastian lingkungan, dan tujuan ganda (biaya, energi, makespan). Konteks ini menjadikan modul 2080 relevan bagi insinyur industri yang bekerja pada antarmuka *logistics–manufacturing–energy*, dan memberi landasan untuk berpikir sistem (*systems thinking*) lintas-sektor.

Urgensi ekonominya juga tecermin dari tekanan regulasi IMO 2023 untuk dekarbonisasi pelabuhan, serta volatilitas harga energi yang membuat operator tidak bisa mengandalkan pendekatan ad-hoc. Dengan memformulasi masalah sebagai Mixed Integer Programming (MIP) dan menyelesaikannya melalui metaheuristik, makalah Zhong dkk. (2023) menawarkan kerangka yang dapat ditranslasikan ke berbagai fasilitas dengan *automated material handling system*, termasuk warehouse otomatis dan *cross-docking* pada manufaktur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Penjadwalan AGV Sadar Energi (Zhong et al., 2023)

Formulasi matematis mengikuti arsitektur *integrated scheduling* dengan tiga sub-masalah: (i) penugasan tugas ke AGV, (ii) penentuan rute bebas konflik, dan (iii) penjadwalan pengisian baterai. Notasi parameter dan variabel keputusan disusun sebagai berikut.

**Himpunan dan Parameter:**

- $K = \{1, 2, \ldots, |K|\}$: himpunan AGV
- $N$: himpunan node pada peta jalur terminal
- $E$: himpunan edge/segmen jalur
- $T = \{1, \ldots, |T|\}$: himpunan tugas transport
- $\mathcal{B} = \{1, \ldots, B\}$: himpunan stasiun pengisian baterai
- $c^e$: konsumsi energi per satuan waktu AGV saat bergerak ($kWh/s$)
- $c^{idle}$: konsumsi energi idle ($kWh/s$)
- $E_k^{cap}$: kapasitas baterai AGV $k$ ($kWh$)
- $d_{ij}$: jarak antar node $i$ dan $j$ ($m$)
- $v_k$: kecepatan rata-rata AGV $k$ ($m/s$)
- $\tau_i^{QC}, \tau_i^{YC}$: time window QC dan YC untuk tugas $i$
- $\alpha, \beta, \gamma$: bobot relatif pada fungsi tujuan

**Variabel Keputusan:**

$$
x_{ijk} = \begin{cases} 1, & \text{jika AGV } k \text{ melewati edge } (i,j) \\ 0, & \text{lainnya} \end{cases}
$$

$$
y_{ik} = \begin{cases} 1, & \text{jika tugas } i \text{ ditugaskan ke AGV } k \\ 0, & \text{lainnya} \end{cases}
$$

$$
t_i^{start}, t_i^{end}: \text{waktu mulai dan selesai tugas } i
$$

$$
s_{kb} \in \{0,1\}: \text{AGV } k \text{ mengisi di stasiun } b
$$

**Fungsi Tujuan (Multi-Objective Weighted Sum):**

$$
\min Z = \alpha \cdot C_{energy} + \beta \cdot C_{makespan} + \gamma \cdot C_{delay}
$$

dengan komponen energi:

$$
C_{energy} = \sum_{k \in K} \sum_{(i,j) \in E} \left( c^e \cdot \frac{d_{ij}}{v_k} \cdot x_{ijk} + c^{idle} \cdot (t_k^{total} - \sum_{(i,j) \in E} \frac{d_{ij}}{v_k} x_{ijk}) \right)
$$

**Kendala Utama:**

1. *Flow conservation*: $\sum_{j} x_{ijk} - \sum_{j} x_{jik} = y_{ik} \cdot (b_i - a_i)$ untuk setiap node transit
2. *Conflict-free node constraint*: Untuk sembarang edge $(i,j)$, paling banyak satu AGV melintasinya pada waktu $t$, diformulasikan sebagai:

$$
t_i^{end} + \frac{d_{ij}}{v_k} x_{ijk} \leq t_j^{start} \quad \forall k \in K, \forall (i,j) \in E
$$

3. *Battery feasibility*: $\sum_{(i,j)} c^e \frac{d_{ij}}{v_k} x_{ijk} + c^{idle} \cdot t_k^{idle} \leq E_k^{cap} \cdot (1 - s_{kb}) + E_k^{cap} \cdot s_{kb}$ dengan tambahan *recharging time* $t_{kb}^{ch}$ jika $s_{kb}=1$.

4. *Time window QC/YC*: $\tau_i^{QC,lower} \leq t_i^{start} \leq \tau_i^{QC,upper}$ dan analog untuk YC.

### 2.2 Formulasi RCJS dengan Ketidakpastian (Thiruvady et al., 2024)

Untuk konteks penunjang, RCJS dimodelkan sebagai:

$$
\min \sum_{j \in J} w_j C_j
$$

dengan kendala sumber daya:

$$
\sum_{j: t \in [s_j, C_j)} r_{jt}^{\rho} \leq R_t^{\rho} \quad \forall t \in \mathcal{T}, \forall \rho \in \mathcal{P}
$$

di mana $r_{jt}^{\rho}$ adalah kebutuhan sumber daya jenis $\rho$ oleh job $j$ pada waktu $t$, dan $R_t^{\rho}$ adalah kapasitas tersedia. Ketidakpastian dimodelkan melalui *scenario-based stochastic programming* dengan himpunan skenario $\Omega$:

$$
\min \mathbb{E}_\omega \left[ \sum_{j} w_j C_j(\omega) \right] + \lambda \cdot \text{VaR}_\alpha
$$

selama kendala stokastik terpenuhi pada setiap skenario dengan probabilitas $\geq 1-\epsilon$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem penjadwalan terintegrasi ini mengikuti kerangka *Plan-Do-Check-Act* yang dipadukan dengan disiplin *Model-Integration-Optimization-Execution* ala Zhong dkk. (2023). Prosedur operasional standar dapat disusun dalam diagram alir berikut:

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: AKUISISI DATA (Real-time & Historical)             │
│  • POS AGV, status baterai (IoT)                            │
│  • Job order dari TOS (Terminal Operating System)           │
│  • Time window QC/YC dari Vessel Planning                   │
└─────────────────────┬───────────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: PRE-PROCESSING & KONSTRUKSI GRAFI JALUR             │
│  • Identifikasi node konflik-prone                          │
│  • Estimasi travel time (dij/vk)                            │
│  • Estimasi energi per edge (konsumsi akselerasi)           │
└─────────────────────┬───────────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: OPTIMASI TERINTEGRASI (Mixed Integer Programming)    │
│  • Branch-and-bound + heuristic decomposition               │
│  • Validasi conflict-free routing via time-indexed variables │
│  • Penjadwalan pengisian baterai adaptif                    │
└─────────────────────┬───────────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: EKSEKUSI & DISPATCH                                 │
│  • Transmisi指令 ke fleet management system                 │
│  • Real-time monitoring + exception handling               │
│  • Re-optimisasi triggered by disruption                    │
└─────────────────────┬───────────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 5: EVALUASI KINERJA (KPI Dashboard)                    │
│  • Energy per TEU (kWh/TEU)                                 │
│  • AGV utilization (%)                                      │
│  • QC/YC waiting time                                       │
│  • Schedule stability index                                 │
└─────────────────────────────────────────────────────────────┘
```

Arsitektur teknologi berlapis (*layered architecture*):

1. **Data Layer**: Sensor IoT, RFID, computer vision, integration dengan TOS seperti Navis N4 atau CATOS.
2. **Optimization Layer**: MIP solver (Gurobi/CPLEX) untuk instance kecil-menengah; Large Neighborhood Search (LNS) untuk real-time.
3. **Execution Layer**: Fleet Management System (FMS) yang mengirim *waypoint command* ke AGV controller.
4. **Monitoring Layer**: Dashboard Power BI/Grafana dengan KPI energi dan konflik.

Untuk lintas-aplikasi, prosedur adaptif dari Thiruvady dkk. (2024) menunjukkan bahwa ketika ketidakpastian sumber daya muncul (misalnya, satu AGV gagal), algoritma APBSA melakukan *re-heating* pada temperature schedule dan re-inject solusi terbaik sebagai *seed population*, sehingga robustness meningkat tanpa mengorbankan intensifikasi pencarian.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Mini-Terminal 4 AGV, 12 Tugas

Pertimbangkan terminal kontainer skala sedang dengan konfigurasi:

| Parameter | Nilai |
|-----------|-------|
| Jumlah AGV ($|K|$) | 4 |
| Kecepatan rata-rata ($v_k$) | 5 m/s |
| Kapasitas baterai ($E_k^{cap}$) | 80 kWh |
| Konsumsi energi gerak ($c^e$) | 0,05 kWh/s |
| Konsumsi idle ($c^{idle}$) | 0,005 kWh/s |
| Peta jalur | 8 node, 12 edge |
| Bobot tujuan | $\alpha = 0{,}5; \beta = 0{,}3; \gamma = 0{,}2$ |

Empat tugas kontainer akan dijadwalkan:

| Tugas | Origin (QC) | Destination (YC) | Jarak (m) | TW mulai (s) | TW akhir (s) |
|------|------------|------------------|-----------|--------------|--------------|
| T1 | QC1 | YC3 | 420 | 0 | 600 |
| T2 | QC2 | YC1 | 380 | 60 | 540 |
| T3 | QC1 | YC2 | 460 | 120 | 720 |
| T4 | QC2 | YC3 | 510 | 180 | 660 |

### 4.2 Perhitungan Manual Conflict-Free Assignment

**Langkah 1 — Cek kapasitas energi per tugas:**

Energi per tugas (tanpa idle):
$$
E_{T1} = 0{,}05 \times \frac{420}{5} = 0{,}05 \times 84 = 4{,}20 \text{ kWh}
$$
$$
E_{T2} = 0{,
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
