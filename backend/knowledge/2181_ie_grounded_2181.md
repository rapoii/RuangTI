# 2181 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) Baterai Lithium Bekas dengan Optimasi Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain untuk Baterai Power Bekas dengan Integrasi Echelon Utilization dan Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. SSRN Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan rekayasa yang belum pernah terjadi sebelumnya dalam pengelolaan *end-of-life* (EOL) baterai lithium-ion (LIB). Proyeksi International Energy Agency (IEA) menunjukkan bahwa lebih dari 14 juta ton baterai lithium akan mencapai masa pensiun antara tahun 2020–2040, dan sekitar 40% di antaranya membutuhkan keputusan rekayasa antara *echelon utilization* (pemanfaatan bertingkat/kaskade) atau *direct recycling/remanufacturing* (JIANG & TANG, 2025). Fenomena ini menjadikan desain *closed-loop supply chain* (CLSC) bukan sekadar pilihan strategis, melainkan kebutuhan operasional yang mengintegrasikan dimensi lingkungan, ekonomi, dan sosial.

Konsep *echelon utilization* merujuk pada penggunaan baterai EV bekas pada aplikasi sekunder dengan tingkat degradasi tertentu — misalnya penyimpanan energi stasioner (*stationary energy storage system*/SESS), baterai telekomunikasi, atau *low-speed electric vehicle* — sebelum akhirnya memasuki proses daur ulang material. Pendekatan ini secara signifikan meningkatkan nilai sisa (*residual value*) karena baterai dengan *state-of-health* (SOH) 70–80% masih memiliki kapasitas fungsional yang substansial (JIANG & TANG, 2025). Di sisi lain, *remanufacturing* bertujuan mengembalikan modul baterai ke spesifikasi *original equipment manufacturer* (OEM) melalui proses pembongkaran selektif, penggantian sel rusak, dan rekondisi *battery management system* (BMS).

Urgensi strategis CLSC baterai terletak pada empat pilar operasional: (i) pengurangan ketergantungan terhadap sumber lithium primer yang secara geopolitik terkonsentrasi di "Lithium Triangle" Amerika Selatan; (ii) mitigasi *carbon footprint* melalui pengurangan emisi siklus hidup baterai hingga 39% (berdasarkan studi Life Cycle Assessment); (iii) pemulihan logam kritis seperti kobalt dan nikel yang memiliki *supply risk index* tinggi; serta (iv) kepatuhan terhadap regulasi Extended Producer Responsibility (EPR) yang berlaku di Uni Eropa, Tiongkok, dan Indonesia. Peran sinergis antara *echelon utilization* dan *remanufacturing* menciptakan jaringan aliran material yang kompleks — baterai bekas dari konsumen EV (first life) → pusat pengumpulan (*collection hub*) → fasilitas inspeksi SOH → keputusan bifurkasi (echelon vs. recycling) → fasilitas remanufaktur atau daur ulang material.

Studi oleh Shin, Kim & Jeong (2024) memperkuat kerangka ini dengan memperkenalkan dimensi robust optimization terhadap ketidakpastian *return flow*, harga logam, dan permintaan pasar sekunder. Mereka menunjukkan bahwa model CLSC yang tidak robust menghasilkan kerugian rata-rata 12–18% saat parameter aktual menyimpang dari asumsi nominal. Oleh karena itu, integrasi ketiga elemen — *echelon utilization*, *remanufacturing*, dan *robust optimization* — menjadi domain riset frontier dalam *industrial systems engineering* kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Closed-Loop Supply Chain Multi-Eselon

Model yang dikembangkan JIANG & TANG (2025) menyusun CLSC baterai dalam bentuk jaringan *mixed-integer linear programming* (MILP) dengan node keputusan sebagai berikut:

1. **Manufacturer (M):** Produsen baterai OEM yang memproduksi modul baru.
2. **Collection Center (C):** Pusat pengumpulan baterai EOL dari konsumen.
3. **Testing & Sorting Facility (T):** Fasilitas inspeksi SOH menggunakan *electrochemical impedance spectroscopy* (EIS) dan *cycle counting*.
4. **Echelon Utilization Hub (E):** Fasitori repurposing untuk aplikasi sekunder.
5. **Recycling/Remanufacturing Plant (R):** Fasilitas daur ulang material atau rekondisi sel.
6. **Secondary Market (S):** Distributor baterai echelon ke pengguna sekunder.

Notasi parameter yang digunakan:

- $i \in I$: indeks fasilitas manufaktur
- $j \in J$: indeks collection center
- $k \in K$: indeks testing facility
- $l \in L$: indeks echelon hub
- $m \in M$: indeks recycling/remanufacturing plant
- $n \in N$: indeks secondary market
- $q \in Q$: indeks grade baterai bekas (grade A: SOH ≥ 80%; grade B: 70% ≤ SOH < 80%; grade C: SOH < 70%)

### 2.2 Fungsi Tujuan Multi-Objektif

Fungsi tujuan utama meminimalkan total biaya rantai pasok tertutup:

$$\min Z = \sum_{i,j} c_{ij}^{mc} x_{ij} + \sum_{j,k} c_{jk}^{ct} y_{jk} + \sum_{k,l} c_{kl}^{te} z_{kl} + \sum_{k,m} c_{km}^{tr} w_{km} + \sum_{l,n} c_{ln}^{es} v_{ln} + \sum_{m,i} c_{mi}^{rm} u_{mi}$$

di mana $c_{ij}^{mc}$ adalah biaya transportasi unit dari manufacturer $i$ ke collection center $j$; $x_{ij}$ adalah jumlah baterai yang dikirim; $c_{jk}^{ct}$, $c_{kl}^{te}$, $c_{km}^{tr}$, $c_{ln}^{es}$, $c_{mi}^{rm}$ berturut-turut adalah biaya transportasi antar-node berikutnya; dan $y_{jk}, z_{kl}, w_{km}, v_{ln}, u_{mi}$ adalah variabel aliran kuantitas baterai.

### 2.3 Fungsi Biaya Pengujian dan Sortasi

Biaya pengujian SOH dimodelkan secara non-linear terhadap volume:

$$C_{test}(q) = \alpha_0 + \alpha_1 \cdot \text{SO}_k + \alpha_2 \cdot (\text{SO}_k)^2$$

di mana $\text{SO}_k$ adalah jumlah baterai yang diuji di facility $k$, dan $\alpha_0, \alpha_1, \alpha_2$ adalah koefisien biaya pengujian.

### 2.4 Model Degradasi Baterai untuk Keputusan Echelon

Keputusan bifurkasi baterai didasarkan pada model degradasi Arrhenius yang telah dikalibrasi:

$$\text{SOH}(t) = 100\% \cdot e^{-\beta \cdot \sqrt{N_{cycle}}} \cdot e^{-\gamma \cdot \Delta T}$$

dengan $\beta$ adalah koefisien degradasi siklik (typical value: $0.018$–$0.025$), $N_{cycle}$ adalah jumlah siklus charge-discharge, $\gamma$ adalah koefisien degradasi termal, dan $\Delta T$ adalah kenaikan suhu operasi rata-rata.

### 2.5 Model Robust untuk Ketidakpastian Return (Shin, Kim & Jeong, 2024)

Untuk mengakomodasi ketidakpastian return rate $\tilde{r}$, model robust menggunakan *budget of uncertainty* $\Gamma$:

$$\min_{x,y} \max_{\tilde{r} \in \mathcal{U}} \sum_i c_i x_i - \sum_j p_j y_j(\tilde{r})$$

subject to:

$$\mathcal{U} = \left\{ \tilde{r} : \tilde{r} = \bar{r} + \Delta r \cdot z, \quad \sum_{j} |z_j| \leq \Gamma, \quad |z_j| \leq 1 \right\}$$

di mana $\bar{r}$ adalah nilai nominal return rate, $\Delta r$ adalah deviasi maksimum, $z_j$ adalah variabel biner yang mengaktifkan skenario worst-case, dan $\Gamma$ adalah parameter konservatisme (umumnya $\Gamma \in [0, |J|]$).

### 2.6 Kendala Kapasitas dan Konservasi Aliran

Konservasi aliran baterai di setiap node:

$$\sum_{j} x_{ij} = Q_i^{production}$$

$$\sum_{k} y_{jk} = \sum_i x_{ij}$$

$$\sum_{l} z_{kl} + \sum_{m} w_{km} = \sum_j y_{jk}$$

$$\sum_{n} v_{ln} + \sum_{m} u_{lm}^{rem} = \sum_k z_{kl}$$

Kendala kapasitas:

$$0 \leq \sum_{j} x_{ij} \leq \text{CAP}_i, \quad \forall i$$

$$0 \leq \sum_{l} z_{kl} \leq \text{CAP}_k^{test}, \quad \forall k$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas mengikuti kerangka SOP 6-tahap berikut, yang diadaptasi dari JIANG & TANG (2025) dan diperkuat dengan elemen robust optimization dari Shin et al. (2024):

### Tahap 1: Akuisisi dan Koleksi Baterai EOL

1. Reverse logistics network design: penentuan lokasi collection center dengan radius optimal 50–80 km dari konsentrasi populasi EV.
2. Implementasi deposit-refund scheme: insentif €150–€300 per baterai untuk mendorong *return rate* ≥ 75%.
3. Penggunaan *digital battery passport* (berdasarkan EU Battery Regulation 2023/1542) untuk traceability.

### Tahap 2: Transportasi Aman (ADR Class 9)

1. Klasifikasi baterai sebagai Dangerous Goods UN3480/UN3481.
2. Suhu transportasi dijaga pada 15–25°C dengan SOC 30–50%.
3. Packaging sesuai standar UN 38.3.

### Tahap 3: Pengujian dan Sortasi Grade

```
┌─────────────────────────────────────┐
│  Baterai Masuk (Incoming)            │
│           ↓                          │
│  Visual Inspection & History Check  │
│           ↓                          │
│  EIS Measurement (1 kHz–10 kHz)    │
│           ↓                          │
│  Capacity Test (C/3 discharge)      │
│           ↓                          │
│  SOH Calculation                    │
│  ┌──────┬──────┬──────┐            │
│  │ ≥80% │70-80%│ <70% │            │
│  │Grade │Grade │Grade │            │
│  │  A   │  B   │  C   │            │
│  └──┬───┴──┬───┴──┬───┘            │
│     ↓      ↓      ↓                │
│   Reman.  Echelon Recycle          │
└─────────────────────────────────────┘
```

### Tahap 4: Keputusan Bifurkasi dengan Model Optimasi

1. Input parameter: kapasitas fasilitas, biaya transportasi, harga pasar sekunder, return rate.
2. Solusi MILP menggunakan solver CPLEX/Gurobi dengan toleransi optimalitas 0.5%.
3. Validasi robust dengan skenario worst-case ($\Gamma = |J|/2$).

### Tahap 5: Eksekusi Echelon Utilization atau Remanufacturing

- **Echelon:** Reconfiguration modul dengan SOH 70–80% menjadi *stationary storage* (kapasitas tipikal 50–500 kWh per sistem).
- **Remanufacturing:** Penggantian sel degradasi, rekondisi BMS, pengujian UL 1974.

### Tahap 6: Distribusi ke Pasar Sekunder dan Daur Ulang Material

1. Pengiriman baterai echelon ke operator SESS.
2. Pengiriman material daur ulang (black mass) ke *hydrometallurgical plant* dengan recovery rate Li 95%, Co 98%, Ni 98%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Studi Kasus

Berdasarkan skenario tipikal industri baterai Asia (JIANG & TANG, 2025), asumsikan parameter berikut untuk jaringan CLSC dengan 1 manufaktur, 3 collection center, 2 testing facility, 2 echelon hub, 1 recycling plant:

| Parameter | Nilai |
|-----------|-------|
| Produksi tahunan ($Q^{production}$) | 50.000 baterai |
| Return rate tahun ke-1 | 30% |
| Return rate tahun ke-3 | 65% |
| Proporsi Grade A (remanufacturing) | 35% |
| Proporsi Grade B (echelon) | 40% |
| Proporsi Grade C (recycle) | 25% |
| Biaya manufaktur per baterai | €8.500 |
| Biaya transport M→C | €45/unit |
| Biaya transport C→T | €30/unit |
| Biaya testing per unit | €25 |
| Biaya remanufacturing per unit | €1.200 |
| Biaya echelon repurposing | €450/unit |
| Biaya recycling per unit | €180/unit |
| Harga jual baterai remanufactured | €2.800/unit |
| Harga jual baterai echelon | €1.500/unit |
| Harga jual black mass | €12/kg (≈€60/unit) |

### 4.2 Perhitungan Volume per Grade (Tahun ke-3)

Return tahun ke-3:
$$R_3 = 0{,}65 \times 50.000 = 32.500 \text{ baterai}$$

Distribusi grade:
$$R_A = 0{,}35 \times 32.500 = 11.375 \text{ unit (remanufacturing)}$$
$$R_B = 0{,}40 \times
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
