# 2032 — Rancang Bangun Jaringan Rantai Pasok Berkelanjutan Sirkular: Kerangka Konseptual Optimisasi Multi-Objektif Berbasis Analitik Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** From linear to circular sustainable supply chain network optimisation: towards a conceptual framework
**Jurnal & Sitasi Utama:** Khadija Echefaj, Abdelkabir Charkaoui, Anass Cherrafi (2024). *Production Planning & Control*. DOI: [https://doi.org/10.1080/09537287.2024.2302479](https://doi.org/10.1080/09537287.2024.2302479)
**Sitasi Pendukung:** Shah Rukh, Omorinsola Bibire Seyi-Lande, Stanley Tochukwu Oziri (2024). *International Journal of Scientific Research in Humanities and Social Sciences*. DOI: [https://doi.org/10.32628/ijsrssh243671](https://doi.org/10.32628/ijsrssh243671)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma dari ekonomi linear (*take-make-dispose*) menuju ekonomi sirkular (*reduce-reuse-recycle*) merupakan respons strategis terhadap degradasi lingkungan, kelangkaan sumber daya, dan volatilitas rantai pasok global yang semakin kompleks pasca-pandemi. Echefaj, Charkaoui, dan Cherrafi (2024) dalam *Production Planning & Control* menegaskan bahwa direktif regulasi seperti *European Green Deal*, kebijakan *Extended Producer Responsibility* (EPR), serta tekanan dari pemangku kepentingan (*stakeholders*) memaksa organisasi untuk merancang ulang jaringan rantai pasok global dengan menyatukan tujuan keberlanjutan dan sirkularitas secara simultan. Akan tetapi, hingga artikel tersebut dipublikasikan, masih terdapat *gap* konseptual yang signifikan: belum ada kerangka terpadu yang mengintegrasikan dimensi keberlanjutan (ekonomi, lingkungan, sosial) ke dalam formulasi optimisasi jaringan rantai pasok sirkular (Echefaj dkk., 2024).

Secara empiris, sektor industri manufaktur menyumbang sekitar 21% dari emisi gas rumah kaca global dan mengonsumsi hampir 54% energi dunia menurut data International Energy Agency (IEA, 2023). Tekanan biaya akibat ketidakpastian harga bahan baku—misalnya fluktuasi 30–45% pada logam tanah jarang dan polimer daur ulang—menjadikan optimisasi jaringan rantai pasok bukan sekadar agenda lingkungan, melainkan imperatif ekonomi. Lebih lanjut, Rukh, Seyi-Lande, dan Oziri (2024) dalam *International Journal of Scientific Research in Humanities and Social Sciences* menunjukkan bahwa integrasi Kecerdasan Buatan (*Artificial Intelligence*/AI) dan analitik prediktif memungkinkan visibilitas end-to-end terhadap *heterogeneous data streams* seperti ERP, WMS, TMS, dan sensor IoT, sehingga mendukung pengambilan keputusan proaktif dalam perancangan ulang jaringan rantai pasok yang resilient dan berkelanjutan (Rukh dkk., 2024).

Urgensi operasional dari integrasi ini tecermin pada tiga pain points industri: (1) suboptimalisasi fasilitas *recovery* (remanufaktur, daur ulang) yang menghasilkan reverse logistics cost overruns hingga 18–25%; (2) inkonsistensi metrik ESG (*Environmental, Social, Governance*) akibat fragmentasi data antar-*stakeholder*; serta (3) lemahnya prediksi permintaan produk remanufaktur yang menyebabkan *bullwhip effect* pada closed-loop. Modul 2032 ini menjawab kebutuhan tersebut dengan menyajikan kerangka konseptual optimisasi multi-tujuan yang memadukan formulasi Mixed Integer Linear Programming (MILP), Multi-Objective Programming, serta modul analitik prediktif berbasis *time-series* hybrid dan *machine learning*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Optimisasi Jaringan Rantai Pasok Sirkular

Echefaj dkk. (2024) mengusulkan kerangka multi-objektif yang meminimalkan dampak lingkungan, memaksimalkan pemulihan material, dan meminimalkan biaya total secara simultan. Formulasi matematis umumnya mengikuti struktur Mixed Integer Linear Programming (MILP) sebagai berikut:

**Fungsi tujuan (Multi-Objective):**

$$\min Z = w_1 \cdot Z_{eco} - w_2 \cdot Z_{env} - w_3 \cdot Z_{soc}$$

dengan bobot $w_1 + w_2 + w_3 = 1$, $w_1, w_2, w_3 \geq 0$.

**Komponen biaya total:**

$$Z_{eco} = \sum_{i \in I}\sum_{j \in J} c^{p}_{ij} x^{p}_{ij} + \sum_{j \in J}\sum_{k \in K} c^{m}_{jk} y_{jk} + \sum_{k \in K}\sum_{l \in L} c^{d}_{kl} z_{kl} + \sum_{m \in M} c^{r}_{m} u_{m}$$

di mana $x^{p}_{ij}$, $y_{jk}$, $z_{kl}$ berturut-turut adalah alokasi aliran produk dari supplier $i$ ke pabrik $j$, dari pabrik $j$ ke pusat distribusi $k$, dan dari $k$ ke pelanggan $l$; sedangkan $u_{m}$ adalah volume produk yang dipulihkan di fasilitas remanufaktur $m$.

**Komponen dampak lingkungan (carbon footprint):**

$$Z_{env} = \sum_{i,j} e^{p}_{ij} d_{ij} x^{p}_{ij} + \sum_{j,k} e^{m}_{jk} d_{jk} y_{jk} + \sum_{k,l} e^{d}_{kl} d_{kl} z_{kl} - \rho \sum_{m} u^{r}_m$$

dengan $e^{p}_{ij}$ adalah emisi per ton-km, $d_{ij}$ jarak, dan $\rho$ adalah faktor *emission offset* akibat aktivitas remanufaktur (umumnya bernilai 0.7–1.2 ton CO₂e per ton produk yang dipulihkan, merujuk pada studi benchmark Bataineh dkk., 2022).

**Komponen sosial (pekerjaan dan inklusi):**

$$Z_{soc} = \sum_{j \in J} \alpha_j N^{emp}_j + \sum_{m \in M} \beta_m N^{rec}_{m}$$

dengan $\alpha_j$ dan $\beta_m$ masing-masing adalah koefisien penciptaan lapangan kerja di fasilitas produksi baru dan fasilitas *circular recovery*.

### 2.2 Kendala (Constraints)

**Kendala kapasitas:**

$$\sum_{i} x^{p}_{ij} \leq Cap^{p}_{j} \cdot \lambda_j, \quad \forall j \in J$$

$$\sum_{m} u^{r}_m \leq Cap^{r}_{m}, \quad \forall m \in M$$

**Kendala keseimbangan aliran (flow balance) pada closed-loop:**

$$\sum_{i} x^{p}_{ij} + \sum_{l \in L^{ret}} r_{lj} = \sum_{k} y_{jk}, \quad \forall j \in J$$

$$\sum_{m} u^{r}_m \cdot \gamma = \sum_{j} x^{p,re}_{ij}, \quad \forall i \in I^{re}$$

dengan $\gamma$ adalah rasio konversi material recovered menjadi input produksi ulang.

**Kendala binary untuk fasilitas:**

$$y_j, z_k, u_m \in \{0,1\}, \quad x^{p}_{ij}, y_{jk}, z_{kl}, u^{r}_m \geq 0$$

### 2.3 Formulasi Analitik Prediktif (Rukh dkk., 2024)

Komponen AI-prediktif mendukung peramalan permintaan dan optimisasi inventori pada jaringan. Model hybrid yang disarankan Rukh dkk. (2024) menggabungkan ARIMA dan *gradient boosting*:

$$\hat{D}_{t+h} = \phi_{ARIMA} \cdot \hat{D}^{ARIMA}_{t+h} + \phi_{ML} \cdot \hat{D}^{XGB}_{t+h}$$

dengan $\phi_{ARIMA} + \phi_{ML} = 1$. Model inventori dapat mengikuti EOQ yang dimodifikasi untuk konteks sirkular:

$$Q^{*} = \sqrt{\frac{2D(C_{o} + C_{r})}{C_{h} \cdot (1 - R)}}$$

di mana $R$ adalah *recovery rate* material (0 ≤ R ≤ 1), $C_o$ biaya pemesanan, $C_h$ biaya penyimpanan, dan $C_r$ adalah biaya *recovery* (Rukh dkk., 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka hibrida ini mengikuti SOP delapan tahap yang konsisten dengan metodologi Echefaj dkk. (2024) dan Rukh dkk. (2024):

**Tahap 1 – Karakterisasi Jaringan Eksisting.** Lakukan pemetaan *value stream* dari supplier hingga *end-of-life*, identifikasi titik inefisiensi dengan *material flow analysis* (MFA) dan *life cycle assessment* (LCA) berbasis ISO 14040/44.

**Tahap 2 – Pengumpulan & Standardisasi Data.** Integrasikan *heterogeneous data* (ERP, WMS, TMS, IoT) ke dalam *knowledge graph* dengan *feature store* dan *model registry* sesuai arsitektur Rukh dkk. (2024).

**Tahap 3 – Estimasi Parameter.** Tentukan parameter lingkungan ($e_{ij}, \rho$), biaya ($c_{ij}$), kapasitas ($Cap_j$), dan bobot tujuan ($w_1, w_2, w_3$) melalui benchmarking dan expert elicitation.

**Tahap 4 – Peramalan Permintaan.** Bangun modul *demand sensing* dengan hybrid ARIMA-XGBoost; validasi dengan MAPE < 12% sesuai standar industri FMCG.

**Tahap 5 – Formulasi & Solusi MILP.** Selesaikan model multi-objektif dengan $\epsilon$-constraint method atau NSGA-II untuk mendapatkan *Pareto frontier* solusi.

**Tahap 6 – Analisis Sensitivitas.** Uji parameter kunci (harga bahan baku, tarif karbon, recovery rate) untuk menilai robustisitas solusi.

**Tahap 7 – Implementasi & Pilot Run.** Terapkan pada satu fasilitas *pilot* selama 3–6 bulan dengan KPI: pengurangan emisi ≥ 15%, pengurangan biaya logistik ≥ 8%, dan recovery rate ≥ 25%.

**Tahap 8 – Audit & Iterasi.** Lakukan audit ESG sesuai GRI 305 (emisi) dan ISO 14064, kemudian lakukan *continuous improvement* berbasis data real-time.

Diagram alir proses logika dapat diringkas sebagai berikut:

```
┌─────────────────────┐
│ Data Acquisition    │ → ERP, WMS, TMS, IoT
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Feature Engineering │ → Knowledge Graph
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Predictive Layer    │ → Hybrid ARIMA + XGBoost
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ MILP Optimization   │ → Multi-Objective (cost/env/social)
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Decision Dashboard  │ → Pareto Front + Scenario Analysis
└─────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah perusahaan manufaktur komponen otomotif Tier-1 di Eropa Timur ingin mendesain ulang jaringan rantai pasoknya untuk mengintegrasikan fasilitas remanufaktur. Data operasional sebagai berikut:

| Parameter | Nilai |
|---|---|
| Permintaan tahunan ($D$) | 120.000 unit |
| Biaya produksi baru ($C_p$) | €45/unit |
| Biaya remanufaktur ($C_r$) | €28/unit |
| Biaya logistik supplier-pabrik ($c^p_{ij}$) | €3,2/unit |
| Biaya distribusi ($c^d_{kl}$) | €2,1/unit |
| Biaya tetap fasilitas ($f_j$) | €850.000 |
| Recovery rate target ($\gamma$) | 35% |
| Emisi produksi baru ($e_p$) | 0,85 ton CO₂e/unit |
| Emisi remanufaktur ($e_r$) | 0,25 ton CO₂e/unit |
| Emission offset ($\rho$) | 1,0 ton CO₂e/unit.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
