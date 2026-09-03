# 1525 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain/CLSC) untuk Utilisasi Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain (CLSC) dengan Integrasi Echelon Utilization dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global menuju elektrifikasi armada kendaraan bermotor telah menciptakan paradoks operasional yang krusial dalam sistem industri modern: di satu sisi, adopsi masif *Electric Vehicle* (EV) didorong untuk mengurangi emisi karbon, namun di sisi lain, berakhirnya siklus hidup *power battery* (baterai lithium-ion traksi) dalam 8–10 tahun pertama pemakaian otomotif akan menghasilkan tsunami limbah B3 (Bahan Berbahaya dan Beracun) bernilai ekonomi tinggi yang memerlukan penanganan sistematis. JIANG Lin dan TANG Lidan (2025) dalam proceeding ICLSE 2024 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti bahwa strategi *closed-loop supply chain* (CLSC) konvensional yang hanya mengandalkan satu jalur — baik *echelon utilization* (pemanfaatan bertingkat, misalnya baterai EV *retired* dialihfungsikan menjadi *stationary energy storage system*/BESS) maupun *recycling remanufacturing* (daur ulang menjadi *black mass* dan material katoda) — secara suboptimal gagal menangkap total nilai ekonomi dan lingkungan yang tersedia. Urgensi riset ini diperkuat oleh fakta bahwa kapasitas baterai EV global yang pensiun diproyeksikan mencapai 1,4 TWh pada 2030 (McKinsey, 2023), sehingga memerlukan arsitektur keputusan multi-eselon yang simultan.

Konteks operasional masalah ini dapat diuraikan menjadi empat entitas keputusan yang saling berinteraksi dalam ekosistem *Industrial Ecology*: (1) **OEM baterai** sebagai *Stackelberg leader* yang menentukan harga jual dan subsidi pengembalian, (2) **Collection aggregator** yang mengekstraksi baterai bekas dari konsumen akhir, (3) **Echelon operator** yang menilai *State of Health* (SoH) baterai dan memutuskan alokasi antara pemanfaatan bertingkat atau daur ulang, dan (4) **Recycling remanufacturer** yang melakukan *hydrometallurgical processing* untuk mengekstraksi litium, kobalt, dan nikel. Kompleksitas diperparah oleh ketidakpastian permintaan baterai baru, fluktuasi harga material kritis (*Li, Co, Ni*), serta regulasi Extended Producer Responsibility (EPR) yang bervariasi antar-yurisdiksi.

Shin, Kim, dan Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi kerangka ini dengan mengajukan formulasi *robust optimization* untuk CLSC berorientasi *circular economy* yang secara eksplisit menangani ketidakpastian laju pengembalian (return rate) dan permintaan pasar sekunder. Sinergi kedua paper ini menghasilkan pilar strategis: keputusan alokasi baterai bekas antara *echelon utilization* dan *recycling* tidak hanya merupakan masalah optimasi deterministik, melainkan masalah keputusan di bawah ketidakpastian (*decision-making under uncertainty*) dengan hierarki permainan *multi-leader-multi-follower*. Secara ekonomis, JIANG dan TANG (2025) menunjukkan bahwa keputusan suboptimal dalam tahap *tier allocation* dapat menurunkan profit keseluruhan CLSC hingga 18–22%, sementara pendekatan robust Shin et al. (2024) menjamin *feasibility* keputusan meskipun terjadi deviasi parameter hingga 30% dari skenario *nominal*.

---

## 2. Landasan Teori & Formulasi Matematis

Model keputusan dalam JIANG dan TANG (2025) dibangun di atas fondasi **game theory hierarkis** (Stackelberg-Nash hybrid) yang memodelkan interaksi strategis antar-aktor CLSC. Misalkan $\pi_M$, $\pi_R$, dan $\pi_E$ masing-masing merepresentasikan fungsi profit OEM, *recycler*, dan *echelon operator*. Struktur profit untuk **echelon operator** diberikan oleh:

$$\pi_E = \alpha \cdot p_s \cdot Q - c_s \cdot Q - c_t \cdot d(Q, F)$$

di mana $\alpha \in [0,1]$ adalah *echelon allocation ratio* (fraksi baterai bekas dialokasikan untuk pemanfaatan bertingkat), $p_s$ adalah harga jual listrik/jasa *energy storage* per kWh, $Q$ adalah volume baterai bekas yang tersedia (variabel keputusan tidak langsung melalui $\alpha$), $c_s$ adalah biaya operasional *second-life battery*, $c_t$ adalah biaya transportasi, dan $d(Q, F)$ adalah fungsi jarak dengan $F$ sebagai fasilitas echelon.

Fungsi profit **recycler** dimodelkan sebagai:

$$\pi_R = (1-\alpha) \cdot \left[ \sum_{m \in \{Li, Co, Ni\}} (p_m \cdot r_m \cdot \beta_m) - c_r \right] \cdot Q - \theta \cdot Q$$

di mana $p_m$ adalah harga jual material $m$ hasil ekstraksi, $r_m$ adalah *recovery rate* teknologi *hydrometallurgy* (umumnya 90–95% untuk Co/Ni dan 70–80% untuk Li), $\beta_m$ adalah kadar material dalam baterai bekas, $c_r$ adalah biaya proses daur ulang per unit, dan $\theta$ adalah insentif/subsidi pemerintah.

Untuk OEM yang bertindak sebagai **Stackelberg leader**, profit mencakup margin penjualan baterai baru yang dipengaruhi oleh efisiensi daur ulang (*closed-loop effect*):

$$\pi_M = (p_n - c_n) \cdot D - w \cdot Q + \gamma \cdot \pi_R$$

dengan $p_n, c_n$ berturut-turut adalah harga dan biaya produksi baterai baru, $D$ adalah permintaan pasar, $w$ adalah *buy-back price* yang dibayarkan OEM kepada konsumen/aggregator untuk baterai retired, dan $\gamma \in [0,1]$ adalah koefisien manfaat material daur ulang (*closed-loop material credit*).

Formulasi *robust counterpart* yang diadopsi dari Shin et al. (2024) untuk menangani ketidakpastian parameter digunakan dengan memperkenalkan *uncertainty set* (Soyster's box uncertainty atau Bertsimas-Sim budget uncertainty). Untuk return rate $\rho$ yang berfluktuasi, didefinisikan *uncertainty set*:

$$\mathcal{U}_\rho = \left\{ \rho : \rho = \bar{\rho} + \sum_{j=1}^{J} z_j \hat{\rho}_j, \; |z_j| \leq 1, \; \sum_{j=1}^{J} |z_j| \leq \Gamma \right\}$$

dengan $\bar{\rho}$ adalah nilai nominal, $\hat{\rho}_j$ adalah deviasi maksimum, $z_j$ adalah variabel auxiliar, dan $\Gamma$ adalah *budget of uncertainty* (parameter proteksi). Robust counterpart dari masalah maksimasi profit OEM menjadi:

$$\max_{x, \alpha} \min_{\rho \in \mathcal{U}_\rho} \pi_M(x, \alpha, \rho)$$

yang diselesaikan melalui transformasi dualitas menjadi program linier/mixed-integer tractable. Pendekatan ini menjamin keputusan optimal berlaku untuk seluruh skenario dalam $\mathcal{U}_\rho$, sehingga immun terhadap *worst-case realization*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri CLSC baterai bekas memerlukan **SOP terstruktur 7-tahap** yang mengintegrasikan kedua paper di atas:

**Tahap 1 — Collection Network Design.** Aggregator mengumpulkan baterai retired dari *end-of-life vehicle* (ELV) processing center, *aftermarket service*, dan *battery swap station*. Pemisahan wajib mengikuti klasifikasi UN 3480/UN 3481 (lithium battery transport regulation) dan IATA DGR untuk Shipment Class 9.

**Tahap 2 — State of Health (SoH) Screening.** Setiap baterai menjalani pengujian electrochemical impedance spectroscopy (EIS) dan capacity testing. Klasifikasi mengikuti *traffic-light protocol*:
- Hijau (SoH $\geq$ 80%): *direct reuse* atau *remanufacturing* untuk aplikasi EV sekunder
- Kuning (60% $\leq$ SoH < 80%): *echelon utilization* pada aplikasi BESS, *telecom backup*, atau *forklift*
- Merah (SoH < 60%): *recycling* melalui jalur pirometalurgi/hidrometalurgi

**Tahap 3 — Tier Allocation Optimization.** Jalankan model Stackelberg untuk menentukan $\alpha^*$ (rasio echelon) dan $\beta^*$ (rasio recycling) yang memenuhi $\partial \pi_{CLSC}/\partial \alpha = 0$ dengan $\pi_{CLSC} = \pi_M + \pi_R + \pi_E$.

**Tahap 4 — Reverse Logistics Routing.** Gunakan *Vehicle Routing Problem with Pickups and Deliveries* (VRPPD) dengan *time windows* karena degradasi baterai selama penyimpanan (self-discharge pada SOC tinggi).

**Tahap 5 — Disassembly & Testing Standar.** Implementasi mengikuti IEC 62933-2-1 dan GB/T 34014-2017 untuk second-life batteries. Proses melibatkan *cell-level sorting* dengan impedansi matching.

**Tahap 6 — Recycling Process Control.** Recovery rate target sesuai EU Battery Regulation 2023/1542: 90% untuk Co/Ni/Cu dan 50% untuk Li pada 2027. Pyrometalurgi pada 1400–1500°C menghasilkan *black mass*, lalu leaching dengan H₂SO₄ + H₂O₂ untuk ekstraksi selektif.

**Tahap 7 — Robust Decision Audit.** Terapkan *robust optimization audit* setiap kuartal untuk memvalidasi bahwa parameter aktual (return rate, material price, demand) masih dalam *budget uncertainty* $\Gamma$ yang diasumsikan; jika tidak, *recalibrate*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah OEM baterai di China mengelola CLSC dengan parameter berikut (diadaptasi dari JIANG & TANG 2025 dan data industri 2024):

- Volume baterai retired tersedia: $Q = 50{,}000$ unit/tahun (≈ 60 MWh total)
- *Echelon allocation price*: $p_s = $ ¥0,45/kWh/jam × 8 jam × 365 hari × efisiensi 85% × utilization rate 70% ≈ ¥780/unit/tahun
- *Recovery rate Co*: $r_{Co} = 0,93$, *kadar*: $\beta_{Co} = 0,08$ kg/unit, harga: $p_{Co} = $ ¥280/kg
- *Recovery rate Ni*: $r_{Ni} = 0,92$, $\beta_{Ni} = 0,06$ kg/unit, $p_{Ni} = $ ¥195/kg
- *Recovery rate Li*: $r_{Li} = 0,75$, $\beta_{Li} = 0,005$ kg/unit, $p_{Li} = $ ¥900/kg (setara Li₂CO₃)
- Biaya recycling $c_r = $ ¥120/unit, biaya echelon $c_s = $ ¥45/unit, transport $c_t = $ ¥25/unit
- Subsidi pemerintah $\theta = $ ¥60/unit, closed-loop credit $\gamma = 0,15$
- *Buy-back price*: $w = $ ¥800/unit
- Harga jual baterai baru: $p_n = $ ¥6,500/unit, biaya produksi $c_n = $ ¥4,200/unit
- Permintaan $D = 200{,}000$ unit/tahun

**Perhitungan Profit Echelon Operator** (untuk $\alpha = 0,4$ sebagai uji coba awal):
$$\pi_E = 0{,}4 \times 780 \times 50{,}000 - 45 \times 50{,}000 - 25 \times 50{,}000$$
$$\pi_E = 15{,}600{,}000 - 2{,}250{,}000 - 1{,}250{,}000 =