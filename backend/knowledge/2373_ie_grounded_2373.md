# 2373 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Daur Ulang Remanufaktur Baterai Power Bekas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi *Closed-Loop Supply Chain* (CLSC) baterai daya bekas dengan pemanfaatan berjenjang (*echelon utilization*) dan remanufaktur daur ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. **14th International Conference on Logistics and Systems Engineering (ICLSE 2024)**. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (*Electric Vehicle*/EV) global telah menciptakan paradoks lingkungan yang krusial di awal dekade ketiga abad ke-21. Ketika populasi EV mencapai ambang ratusan juta unit secara kumulatif, persoalan *end-of-life* (EoL) baterai daya litium-ion (LIB) — yang memiliki kapasitas 20–100 kWh per unit dengan kandungan kobalt, nikel, dan litium bernilai strategis — menjadi tantangan rantai pasok yang harus dijawab secara simultan oleh komunitas rekayasa industri. JIANG Lin dan TANG Lidan (2025, [DOI:10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menegaskan bahwa baterai EV dengan *State of Health* (SOH) 70–80% masih menyimpan 60–70% kapasitas energi aslinya sehingga layak untuk diarahkan ke aplikasi sekunder (*second-life applications*), sementara baterai dengan SOH di bawah ambang tersebut wajib memasuki jalur daur ulang material untuk mencegah *urban mining loss*. Ketidakpastian tingkat pengembalian (*return rate*), fluktuasi harga logam kritis, serta disparitas biaya logistik reverse menjadi justifikasi utama bagi pengembangan model CLSC yang robust, sebagaimana dikonfirmasi oleh Shin, Kim, dan Jeong (2024, [DOI:10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) yang menekankan pentingnya *Return Management System* (RMS) sebagai sub-sistem pengendali ketidakpastian dalam ekonomi sirkular.

Urgensi operasionalnya bersifat multi-dimensi. Dari perspektif ekonomi, biaya produksi baterai baru terus menurun (sekitar 8–12% per tahun) sehingga *learn rate* ini memicu margin profitabilitas CLSC yang semakin tipis dan menuntut optimasi ketat. Dari perspektif regulasi, kebijakan *Extended Producer Responsibility* (EPR) di Uni Eropa, Tiongkok, dan Indonesia melalui PP No. 27 Tahun 2020 serta Permen LHK No. 75 Tahun 2019 memaksa Original Equipment Manufacturer (OEM) untuk menjamin tingkat pengembalian minimum. Dari perspektif teknis, kapasitas pengosongan baterai bekas (*residual capacity*) bersifat *stochastic* karena dipengaruhi siklus pengisian, suhu operasional, dan *depth of discharge* (DoD) yang sangat bervariasi antar pengguna. Keseluruhan faktor ini menjadikan formulasi CLSC bukan sekadar persoalan biaya minimum klasik, melainkan masalah *stochastic-robust mixed-integer programming* dengan multi-tier echelon dan multi-product recovery (JIANG & TANG, 2025). Dokumen modul ini akan menguraikan arsitektur keputusan, formulasi matematis, dan SOP implementasi yang derivatif dari kedua literatur tersebut untuk aplikasi di industri manufaktur, utilitas energi, dan integrator baterai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Tiga-Echelon

JIANG Lin dan TANG Lidan (2025) memodelkan jaringan CLSC baterai power bekas ke dalam tiga *echelon* utama yang saling terhubung secara *forward* dan *reverse*:

- **Echelon 1 — OEM & First-Use:** Manufaktur baterai baru dan distribusi ke pasar EV.
- **Echelon 2 — Collection & Inspection Center (CIC):** Pusat pengumpulan baterai EoL dengan fasilitas *diagnostic testing* SOH.
- **Echelon 3 — Recovery Network:** Terdiri dari (a) fasilitas *echelon utilization* (mis. *Battery Energy Storage System*/BESS), (b) fasilitas *recycling* untuk ekstraksi material (hidrometalurgi/prometalurgi), dan (c) fasilitas *remanufacturing* untuk pemulihan modul dan pack baterai.

Tujuan optimalisasi adalah meminimalkan total biaya sistem $\mathcal{C}_{total}$ sambil memaksimumkan tingkat pemulihan material dan kepatuhan regulasi. Fungsi tujuan generik mengikuti formulasi:

$$
\min \mathcal{C}_{total} = \mathcal{C}_{log}^{fwd} + \mathcal{C}_{log}^{rev} + \mathcal{C}_{proc} + \mathcal{C}_{inv} + \mathcal{C}_{pen}
$$

di mana $\mathcal{C}_{log}^{fwd}$ adalah biaya logistik maju, $\mathcal{C}_{log}^{rev}$ biaya logistik balik, $\mathcal{C}_{proc}$ biaya proses pemulihan, $\mathcal{C}_{inv}$ biaya persediaan baterai bekas (buffer stok), dan $\mathcal{C}_{pen}$ adalah *penalty cost* akibat ketidakpatuhan regulasi (JIANG & TANG, 2025).

### 2.2 Model Keputusan Diskret dan Pemilihan Jalur Pemulihan

Setiap baterai $i$ yang tiba di CIC dievaluasi dengan parameter kunci SOH $\sigma_i \in [0,1]$. Keputusan diskret mengikuti logika *threshold switching*:

$$
x_i = \begin{cases}
1, & \sigma_i \geq \sigma^{EU} \quad \text{(jalur echelon utilization)} \\
2, & \sigma^{RC} \leq \sigma_i < \sigma^{EU} \quad \text{(jalur remanufacturing)} \\
3, & \sigma_i < \sigma^{RC} \quad \text{(jalur daur ulang material)}
\end{cases}
$$

dengan $\sigma^{EU}$ dan $\sigma^{RC}$ berturut-turut adalah ambang SOH untuk *echelon utilization* dan *remanufacturing* (umumnya $\sigma^{EU} = 0{,}70$ dan $\sigma^{RC} = 0{,}30$). Keputusan ini diformalisasikan melalui variabel biner $y_{ijk}$ yang bernilai 1 jika baterai $i$ dialokasikan dari CIC $j$ ke fasilitas $k$ melalui jalur $r \in \{EU,RM,RC\}$:

$$
y_{ijk} \in \{0,1\}, \quad \sum_{k \in \mathcal{K}} \sum_{r \in \mathcal{R}} y_{ijk}^{r} = 1 \;\; \forall i \in \mathcal{I}, j \in \mathcal{J}
$$

### 2.3 Model Robust Counterpart dengan Box Uncertainty Set

Shin, Kim, dan Jeong (2024) menyempurnakan formulasi JIANG & TANG dengan menambahkan *robust counterpart* terhadap ketidakpastian permintaan dan laju pengembalian. Misalkan $\tilde{\xi} = (\tilde{\lambda}, \tilde{p})$ adalah vektor parameter tidak pasti, maka *box uncertainty set* didefinisikan sebagai:

$$
\mathcal{U} = \left\{ \tilde{\xi} : \tilde{\lambda} \in [\bar{\lambda} - \hat{\lambda}, \bar{\lambda} + \hat{\lambda}], \; \tilde{p} \in [\bar{p} - \hat{p}, \bar{p} + \hat{p}] \right\}
$$

di mana $\bar{\lambda}$ adalah *forecasted return rate* dan $\hat{\lambda}$ adalah *maximum deviation*. Fungsi tujuan robust menjadi:

$$
\min_{(x,y) \in \mathcal{F}} \max_{\tilde{\xi} \in \mathcal{U}} \; \mathbf{c}^{\top} \mathbf{x} + \tilde{\lambda}^{\top} \mathbf{b}^{\top} \mathbf{y} + \tilde{p}^{\top} \mathbf{q}^{\top} \mathbf{y}
$$

Yang ekuivalen dengan formulasi *robust counterpart* linear:

$$
\min \; \mathbf{c}^{\top} \mathbf{x} + \bar{\lambda}^{\top} \mathbf{b}^{\top} \mathbf{y} + \Gamma \cdot z + \sum_{l \in \mathcal{L}} \hat{\xi}_l \cdot v_l
$$

$$
\text{subject to:} \quad z + v_l \geq \mathbf{b}_l^{\top} \mathbf{y}, \; z \geq 0, \; v_l \geq 0
$$

di mana $\Gamma \in [0, |\mathcal{L}|]$ adalah *budget of uncertainty* yang mengendalikan konservatisme solusi (Shin et al., 2024). Semakin tinggi $\Gamma$, semakin robust solusi, namun biaya yang dihasilkan juga lebih tinggi — suatu trade-off klasik *robust optimization*.

### 2.4 Fungsi Profitabilitas Echelon Utilization

Pendapatan dari pemanfaatan berjenjang baterai bekas diformulasikan sebagai fungsi SOH dan harga jual per kWh pada pasar sekunder:

$$
\pi_i^{EU} = \kappa \cdot \sigma_i \cdot E_i \cdot p_{BESS} - \mathcal{C}_{repack,i}
$$

dengan $\kappa$ adalah koefisien diskon kapasitas pasar sekunder ($\approx 0{,}60$), $E_i$ kapasitas energi baterai (kWh), $p_{BESS}$ harga jual listrik *behind-the-meter* (USD/kWh), dan $\mathcal{C}_{repack,i}$ biaya integrasi ulang ke sistem BESS.

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Prosedur Operasional Standar (SOP) Pengumpulan dan Diagnosis

JIANG Lin dan TANG Lidan (2025) menyusun SOP 8-langkah untuk implementasi CLSC baterai bekas:

1. **Reverse Logistics Initiation** — Pengecekan data registrasi OEM dan penjadwalan pickup baterai EoL dari *dealer* atau *scrapyard*.
2. **Safe Discharge & Transport** — Pengosongan baterai hingga SoC ≤ 30% sebelum pengangkutan sesuai standar UN 38.3.
3. **Visual & Mechanical Inspection** — Pemeriksaan fisik (deformasi, kebocoran elektrolit, swelling).
4. **Electrochemical Diagnosis** — Pengukuran SOH melalui capacity test (*charge-discharge cycle* pada C/3 rate) dan *Electrochemical Impedance Spectroscopy* (EIS).
5. **Sorting Decision** — Penentuan jalur EU/RM/RC berdasarkan SOH (mengikuti persamaan di §2.2).
6. **Echelon Reconfiguration** — Untuk jalur EU: pembongkaran pack, penggantian modul rusak (failure rate <5%), dan perakitan ulang ke kabinet BESS standar.
7. **Recycling & Material Recovery** — Untuk jalur RC: *crushing*, *shredding*, dan proses hidrometalurgi dengan leaching H₂SO₄ + H₂O₂ untuk ekstraksi Co, Ni, Li.
8. **Remanufacturing** — Untuk jalur RM: regenerasi elektroda, *formation cycling*, dan *re-qualification testing* sebelum dikembalikan ke OEM atau pasar sekunder.

### 3.2 Arsitektur Return Management System (RMS)

Shin, Kim, dan Jeong (2024) mengusulkan arsitektur RMS berlapis yang mengintegrasikan RFID/GPS tracking, *predictive analytics*, dan *dynamic routing*:

- **Lapisan 1 — Data Acquisition:** Sensor BMS mengirim data real-time (SoH, suhu, internal resistance) via telematics.
- **Lapisan 2 — Predictive Engine:** Model *gradient boosting* memprediksi *time-to-retirement* setiap baterai.
- **Lapisan 3 — Decision Support System (DSS):** Optimizer robust (§2.3) menentukan *pickup route*, *disassembly depth*, dan *allocation* baterai ke fasilitas recovery.
- **Lapisan 4 — Feedback Loop:** Data pasca-pemrosesan digunakan untuk memperbarui model prognostik (continuous learning).

### 3.3 Diagram Alir Logika Keputusan

```
[Battery EoL Arrival] → [SoC Reduction] → [Visual Inspection]
        ↓                                       ↓
   [FAIL: Hazardous Disposal]          [PASS → Capacity Test]
                                                  ↓
                              [SOH ≥ 0.70]──→ [Echelon Utilization]
                              [0.30 ≤ SOH < 0.70]──→ [Remanufacturing]
                              [SOH < 0.30]──→ [Material Recycling]
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Set Parameter Industri

Berdasarkan skenario industri EV di pasar Asia Tenggara dengan skala menengah, ditetapkan parameter berikut (konsisten dengan JIANG & TANG, 2025 dan Shin et al., 2024):

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah baterai EoL ($N$) | 10.000 | unit/tahun |
| Kapasitas rata-rata ($E$) | 60 | kWh |
| Harga jual BESS sekunder ($p_{BESS}$) | 0,18 | USD/kWh |
| Biaya transport reverse ($c_t$) | 35 | USD/unit |
| Biaya diagnosis CIC ($c_d$) | 12 | USD/unit |
| Biaya daur ulang material ($c_{RC}$) | 8 | USD/kWh |
| Biaya remanufacturing ($c_{RM}$) | 45 | USD/unit |
| Biaya integrasi BESS ($c_{repack}$) | 80 | USD/unit |
| Return rate aktual ($\bar{\lambda}$) | 0,85 | – |
| Maximum deviation ($\hat{\lambda}$) | 0,15 | – |
| Budget uncertainty ($\Gamma$) | 1,5 | – |