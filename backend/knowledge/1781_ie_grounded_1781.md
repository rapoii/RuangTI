# 1781 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat dan Daur Ulang Manufaktur Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Logistik Sistem Produksi dan Ekonomi Sirkular
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) dengan Pemanfaatan Bertingkat (Echelon Utilization), Daur Ulang, dan Remanufaktur Baterai Daya Pensiun (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global — yang diproyeksikan menembus lebih dari 245 juta unit pada 2030 menurut IEA Global EV Outlook — telah menciptakan tantangan logistik terbalik (*reverse logistics*) berskala industri yang belum pernah terjadi sebelumnya. Baterai Lithium-ion (LiB) sebagai komponen dominan EV memiliki umur pakai siklus terbatas (umumnya 1.500–2.000 siklus pengisian atau 5–8 tahun operasional), sehingga menimbulkan volume *end-of-life* (EoL) baterai yang masif. JIANG Lin & TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menekankan bahwa baterai pensiun tidak boleh langsung diproses sebagai *scrap*, melainkan harus melalui dua jalur pemulihan nilai tambah secara hierarkis: (i) **pemanfaatan bertingkat (*echelon utilization*)** — di mana baterai dengan *state-of-health* (SOH) 70–80% diremajakan untuk aplikasi stasioner seperti penyimpanan energi terbarukan (*Battery Energy Storage System, BESS*), *backup power* telekomunikasi, dan *microgrid*; serta (ii) **daur ulang-manufaktur (*recycling-remanufacturing*)** — di mana material kritis seperti Litium, Kobalt, Nikel direkoveri melalui proses hidrometalurgi/pirometalurgi.

Urgensi strategis dari penelitian ini bersifat multi-dimensi. Dari perspektif **ekonomi sirkular**, Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) mengemukakan bahwa tanpa sistem *Return Management* yang robust, biaya logistik pengembalian baterai pensiun dapat melebihi 18–25% dari total biaya daur ulang, sehingga menggerus margin ekonomi sirkular. Dari perspektif **lingkungan**, satu ton baterai LiB yang dibuang secara *landfill* berpotensi melepaskan 1,8–3,0 kg lithium equivalent, kontaminan elektrolit, dan PFAS. Dari perspektif **strategi rantai pasok**, paper JIANG & TANG (2025) mengintegrasikan keputusan ketiga aktor — *battery manufacturer* (BM), *echelon utilization integrator* (EUI), dan *recycler-remanufacturer* (RR) — ke dalam permainan keputusan bertingkat. Permasalahan riset utama yang diidentifikasi penulis adalah: bagaimana menentukan *price*, *quantity*, dan *allocation* baterai pensiun ke kedua kanal pemulihan sedemikian rupa sehingga **Total Cost of CLSC** minimal di bawah ketidakpastian permintaan BESS dan kapasitas daur ulang, sembari memenuhi regulasi *Extended Producer Responsibility* (EPR) yang berlaku di Uni Eropa (Direktif 2006/66/EC) dan Tiongkok (GB/T 34014-2017).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Tiga Eselon

JIANG & TANG (2025) memodelkan CLSC sebagai jaringan dengan struktur *echelon* berikut:

- **Esekon 1 (Hulu):** Produsen baterai baru (BM) memproduksi LiB baru.
- **Esekon 2 (Purna Jual):** Kolektor/pengumpul baterai pensiun dari pasar konsumen.
- **Esekon 3 (Pemulihan):** Unit Pemanfaatan Bertingkat (EUI) dan Unit Daur Ulang-Remanufaktur (RR) yang bersaing memperoleh pasokan baterai pensiun.

### 2.2 Notasi Himpunan, Parameter, dan Variabel Keputusan

**Himpunan:**
- $i \in I$ : indeks pusat koleksi baterai pensiun, $i = 1, 2, \ldots, m$
- $j \in J$ : indeks fasilitas EUI, $j = 1, 2, \ldots, n$
- $k \in K$ : indeks fasilitas RR, $k = 1, 2, \ldots, p$

**Parameter:**
- $D$ : permintaan pasar untuk baterai remanufaktur (unit/tahun)
- $c_m$ : biaya produksi baterai baru oleh BM (CNY/unit)
- $c_e$ : biaya operasi EUI untuk remanufaktur baterai bekas (CNY/unit)
- $c_r$ : biaya operasi RR untuk daur ulang material (CNY/unit)
- $\lambda$ : rasio kualitas baterai pensiun (fraction, $0 < \lambda \leq 1$)
- $\alpha$ : *salvage value* material daur ulang (CNY/unit)
- $\beta$ : koefisien diskon nilai guna-tingkat baterai pada aplikasi BESS
- $t_{ij}$ : biaya transportasi dari koleksi $i$ ke EUI $j$ (CNY/unit)
- $s_{ik}$ : biaya transportasi dari koleksi $i$ ke RR $k$ (CNY/unit)
- $Q_i$ : kapasitas suplai baterai pensiun di pusat koleksi $i$ (unit/tahun)
- $E_j$ : kapasitas pemrosesan EUI $j$ (unit/tahun)
- $R_k$ : kapasitas daur ulang RR $k$ (unit/tahun)
- $\tilde{D}$ : variabel acak permintaan baterai remanufaktur (memodelkan ketidakpastian)

**Variabel Keputusan:**
- $x_j$ : jumlah baterai pensiun dialokasikan ke EUI $j$ (unit)
- $y_k$ : jumlah baterai pensiun dialokasikan ke RR $k$ (unit)
- $w$ : harga beli baterai pensiun dari koleksi (CNY/unit, keputusan BM)
- $p_e$ : harga jual baterai remanufaktur dari EUI (CNY/unit)
- $z$ : variabel biner aktivasi fasilitas ($z \in \{0,1\}$)

### 2.3 Fungsi Objektif — Model Stackelberg Two-Leader One-Follower

Paper JIANG & TANG (2025) mengadopsi permainan Stackelberg di mana BM bertindak sebagai *leader* dan (EUI, RR) bertindak sebagai *followers* yang bersaing (*Cournot-Bertrand hybrid*). Fungsi objektif **Total CLSC Cost** diminimalkan:

$$
\min_{w, x_j, y_k, p_e} \; \Pi_{CLSC} = \underbrace{\Pi_{BM}}_{\text{Produsen}} + \underbrace{\Pi_{EUI}}_{\text{Echelon}} + \underbrace{\Pi_{RR}}_{\text{Recycler}} - \underbrace{\lambda \beta}_{\text{Nilai Guna-Tingkat}}
$$

dengan komponen:

$$
\Pi_{BM} = c_m D + w \sum_{j} x_j - p_e \sum_{j} x_j - p_m D
$$

$$
\Pi_{EUI} = \sum_{j}\left[\sum_{i} t_{ij} x_{ij} + c_e x_j - p_e x_j + z_j F_j\right]
$$

$$
\Pi_{RR} = \sum_{k}\left[\sum_{i} s_{ik} y_{ik} + c_r y_k - \alpha y_k + z_k F_k\right]
$$

### 2.4 Kendala (Constraints)

**Kendala Kapasitas:**
$$
\sum_{i} x_{ij} \leq E_j, \quad \forall j \in J
$$
$$
\sum_{i} y_{ik} \leq R_k, \quad \forall k \in K
$$

**Kendala Keseimbangan Aliran Material (Material Balance):**
$$
\sum_{j} x_j + \sum_{k} y_k = \sum_{i} Q_i, \quad \text{(total baterai pensiun terserap seluruhnya)}
$$

**Kendala *Echelon Allocation Threshold*:**
$$
x_j \leq \lambda \cdot E_j, \quad \forall j \quad \text{(hanya SOH} \geq 70\%\text{ layak ke EUI)}
$$

**Kendala Non-negativitas:**
$$
x_j, y_k, w, p_e \geq 0
$$

### 2.5 Formulasi Robust untuk Mengatasi Ketidakpastian

Mengikuti pendekatan Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)), ketidakpastian permintaan $\tilde{D}$ dimodelkan dengan *uncertainty set* box-Bertsimas:

$$
\mathcal{U}_D = \left\{ D \; : \; \bar{D} - \hat{D} \leq D \leq \bar{D} + \hat{D}, \; |D - \bar{D}| \leq \Gamma \hat{D} \right\}
$$

dengan $\Gamma \in [0, |\mathcal{U}|]$ adalah *budget of uncertainty*. Problem *robust counterpart* menjadi:

$$
\min_{w,x,y} \max_{D \in \mathcal{U}_D} \Pi_{CLSC}(w,x,y,D)
$$

yang diselesaikan melalui dualisasi *worst-case*:

$$
\max_{D \in \mathcal{U}_D} \Pi = \hat{D} \cdot \Gamma \cdot \| \mathbf{c} \|_* + \bar{D} \cdot \mathbf{c}^\top \mathbf{y}
$$

dengan $\|\cdot\|_*$ adalah *dual norm*.

### 2.6 Kondisi KKT untuk Equilibrium

Kondisi KKT dari *followers' problem* menghasilkan:

$$
\frac{\partial \mathcal{L}_{EUI}}{\partial x_j} = \sum_i t_{ij} + c_e - p_e - \mu_j + \nu_i = 0
$$
$$
\frac{\partial \mathcal{L}_{RR}}{\partial y_k} = \sum_i s_{ik} + c_r - \alpha - \pi_k + \nu_i = 0
$$
$$
\mu_j (E_j - x_j) = 0, \quad \pi_k (R_k - y_k) = 0 \quad \text{(complementary slackness)}
$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) mengusulkan metodologi 5-tahap untuk implementasi CLSC baterai pensiun yang layak industri:

### Tahap 1 — Diagnosis & Karakterisasi Aset Baterai Pensiun
1. Pengumpulan data SOH menggunakan *Battery Management System* (BMS) logging.
2. Pengujian kapasitas残 (*capacity fade*) melalui siklus charge-discharge standar (IEC 62660-1).
3. Klasifikasi mutu baterai ke Grade A (SOH ≥ 80%), Grade B (70–80%), Grade C (<70% → scrap).

### Tahap 2 — Desain Jaringan Pengumpulan (*Collection Network*)
- Identifikasi titik konsolidasi (dealer EV, *service center*, *swap station*).
- Penentuan rute *reverse logistics* menggunakan *Vehicle Routing Problem with Pickups* (VRPPD).

### Tahap 3 — Optimasi Stackelberg Dua-Pemimpin
- Penentuan harga beli optimal $w^*$ oleh BM.
- Penentuan alokasi $x_j^*, y_k^*$ oleh EUI dan RR.

### Tahap 4 — Implementasi *Robust Return Management*
Berdasarkan Shin et al. (2024), SOP pengembalian baterai pensiun mengikuti:

```
┌─────────────────────────────────────────────────────────────┐
│  SOP RETURN MANAGEMENT BATERAI PENSIUN (SOP-RMB-001)       │
├─────────────────────────────────────────────────────────────┤
│  1. Aktivasi Insentif Deposit (Refundable Core Charge)      │
│  2. Penjadwalan Pick-Up via IoT Telemetry (SOH < 75%)      │
│  3. Transportasi UN-Class 9 (ADR 2025 compliant)           │
│  4. QC Incoming: SOH test, leakage check, thermal scan    │
│  5. Triase: A/B → EUI, C → RR                              │
│  6. Dokumentasi Chain-of-Custody (blockchain ledger)        │
└─────────────────────────────────────────────────────────────┘
```

### Tahap 5 — Pemantauan KPI & *Continuous Improvement*
KPI yang dipantau: *recovery rate* (%), *cost per kWh recovered*, *carbon footprint avoided*, *circular material utilization rate* (CMUR).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Parameter Industri (Studi Kasus: Regional CLSC Cina Selatan)

Mengacu pada skenario numerik JIANG & TANG (2025), diambil asumsi:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $c_m$ | 850 | CNY/unit |
| $c_e$ | 420 | CNY/unit |
| $c_r$ | 180 | CNY/unit |
| $\alpha$ | 95 | CNY/unit |
| $\beta$ | 0.65 | – |
| $\lambda$ | 0.72 | – |
| $\bar{D}$ | 12.000 | unit/tahun |
| $\hat{D}$ | 1.800 | unit (fluktuasi) |
| $\Gamma$ | 3 | – |
| $E_j$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
