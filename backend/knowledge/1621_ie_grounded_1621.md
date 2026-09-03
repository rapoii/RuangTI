# 1621 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global yang diproyeksikan mencapai lebih dari 245 juta unit pada 2030 (IEA, 2024) menimbulkan tantangan siklus hidup (life-cycle) yang krusial pada komponen baterai lithium-ion (LIB). Ketika kapasitas baterai turun di bawah ambang 70–80% dari kapasitas awal (state-of-health, SOH), baterai diklasifikasikan sebagai *retired power battery* (baterai pensiun) dan tidak lagi layak untuk aplikasi traksi otomotif, namun masih memiliki potensi residual capacity 60–70% yang signifikan untuk aplikasi stasioner berdaya lebih rendah. Tanpa strategi rantai pasok tertutup (closed-loop supply chain/CLSC) yang terstruktur, baterai pensiun ini akan menjadi *waste stream* raksasa yang memenuhi Tempat Pembuangan Akhir (TPA) dengan risiko pencemaran logam berat (Li, Co, Ni) dan kehilangan material kritis bernilai miliaran dolar. JIANG Lin dan TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) secara eksplisit memposisikan penelitian mereka sebagai respons terhadap *dual challenge*: bagaimana merancang strategi CLSC yang secara simultan mengintegrasikan *echelon utilization* (pemanfaatan bertingkat, misalnya baterai EV dialihfungsikan menjadi *stationary energy storage system*/SESS untuk smart grid) dan *recycling remanufacturing* (daur ulang material melalui hidrometalurgi dan pirometalurgi untuk memenuhi kembali loop produksi sel baru).

Urgensi ekonominya sangat nyata. Menurut estimasi BloombergNEF (2024), nilai material baterai pensiun global akan melampaui USD 95 miliar per tahun pada 2040, sementara biaya produksi LIB baru didominasi 50–70% oleh bahan katoda (Ni, Co, Mn). Jika baterai pensiun dapat di-*echelon*-kan, biaya kapasitas penyimpanan energi skala utilitas dapat ditekan hingga 30–40% dibanding baterai baru, membuka pasar *second-life battery* yang sangat atraktif. Namun, JIANG & TANG (2025) menekankan bahwa keputusan optimal antara *echelon utilization* (cascade) versus *direct recycling* (loop langsung ke material recovery) sangat bergantung pada SOH, jarak geografis, harga pasar logam, dan tingkat permintaan second-life. Pendekatan deterministik tunggal akan *underestimate* ketidakpastian (*return quantity*, *recycling yield*, harga kobalt dan litium yang volatil). Inilah celah yang diisi oleh paper ini: membangun model optimisasi CLSC dua-lingkaran dengan keputusan *echelon vs. recycling* di bawah ketidakpastian.

Secara bersamaan, Shin, Kim, dan Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi wacana ini dengan memperkenalkan *Robust Closed-Loop Supply Chain Model with Return Management System* untuk konteks *circular economy*. Mereka menyoroti bahwa *return management system* (RMS) adalah enabler struktural yang menentukan kualitas, kuantitas, dan timing aliran balik baterai pensiun, sehingga menjadi prasyarat bagi model CLSC JIANG & TANG agar implementatif. Kombinasi kedua literatur ini memberikan kerangka holistik: RMS yang kuat sebagai front-end, dan model optimisasi CLSC echelon-recycling sebagai back-end keputusan. Konteks industri Indonesia juga relevan: melalui Peraturan Presiden No. 55 Tahun 2019 dan roadmap industri baterai nasional, Indonesia menargetkan produksi baterai 140 GWh pada 2030, yang akan menghasilkan *reverse flow* masif pada 2035–2040 sehingga kebutuhan akan model CLSC seperti ini menjadi sangat strategis.

## 2. Landasan Teori & Formulasi Matematis

Model JIANG & TANG (2025) membangun CLSC dengan *node* keputusan berikut: (i) Original Equipment Manufacturer (OEM)/produsen sel baterai, (ii) Collection Center (CC) sebagai titik kumpul baterai pensiun, (iii) Echelon Utilization Center (EUC) untuk pengujian SOH dan repurposing ke aplikasi second-life, (iv) Recycling-Remanufacturing Plant (RRP) untuk material recovery dan reassembly, dan (v) pasar second-life (smart grid, telekomunikasi, UPS) serta pasar material daur ulang. Fungsi tujuan meminimalkan total *total cost* (TC) yang mencakup biaya produksi, koleksi, transportasi, echelon processing, daur ulang, dan biaya lingkungan (carbon emission penalty).

Formulasi dasar biaya total:

$$TC = \sum_{i \in \mathcal{I}} \left( c_i^{prod} \cdot Q_i + c_i^{coll} \cdot R_i \right) + \sum_{j \in \mathcal{J}} \left( c_j^{ech} \cdot E_j + c_j^{rec} \cdot M_j \right) + \sum_{(i,j)} c_{ij}^{trans} \cdot X_{ij} + \pi \cdot \mathcal{E}^{CO_2}$$

di mana $Q_i$ adalah kuantitas produksi baru, $R_i$ jumlah baterai pensiun yang dikoleksi, $E_j$ jumlah baterai yang dialokasikan ke echelon, $M_j$ jumlah baterai yang dialih-route ke recycling, $X_{ij}$ adalah aliran transportasi antar node, dan $\pi$ adalah *carbon price* per emisi.

Keputusan kunci adalah variabel biner:

$$y_{j}^{ech} + y_{j}^{rec} \leq 1, \quad \forall j \in \mathcal{J}$$

yang memastikan setiap baterai pensiun hanya masuk ke satu jalur (echelon ATAU recycling). Kapasitas node dibatasi oleh:

$$\sum_{i} X_{ij} \leq K_j^{ech} \quad \text{(echelon center capacity)}$$
$$\sum_{i} X_{ij} \leq K_j^{rec} \quad \text{(recycling plant capacity)}$$

Konservasi aliran di setiap *collection center*:

$$R_j = \sum_{i} X_{ij}, \quad R_j = E_j + M_j$$

JIANG & TANG (2025) memperkenalkan ketidakpastian pada tiga parameter utama dan memformalkannya sebagai *robust optimization* (RO) sesuai tren yang juga diadopsi Shin et al. (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). Untuk RO dengan box uncertainty:

$$\tilde{c}_i \in [\bar{c}_i - \hat{c}_i, \bar{c}_i + \hat{c}_i]$$

maka *worst-case* biaya dihitung menggunakan dualisasi Bertsimas-Sim:

$$\max_{\tilde{c}_i \in \mathcal{U}} \sum_i \tilde{c}_i y_i = \sum_i \bar{c}_i y_i + \Gamma \cdot \max\{\hat{c}_i | y_i|\}$$

di mana $\Gamma$ adalah *budget of uncertainty* yang mengendalikan konservatisme solusi. Untuk $0 \leq \Gamma \leq |\mathcal{I}|$, semakin tinggi $\Gamma$ semakin robust namun semakin mahal (*price of robustness*).

Untuk keputusan echelon, JIANG & TANG (2025) menggunakan fungsi utilitas berbasis SOH $\theta$ dan waktu tunggu degradasi:

$$U^{ech}(\theta) = \alpha_1 \cdot SOH(\theta) - \alpha_2 \cdot C_{repurposing}(\theta) - \alpha_3 \cdot \tau_{market}$$

Baterai dengan $SOH \in [0.6, 0.8]$ masuk kandidat echelon; baterai dengan $SOH < 0.6$ langsung di-*recycle*. Model diselesaikan menggunakan *mixed-integer linear programming* (MILP) dengan solver CPLEX/Gurobi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai pensiun mengikuti SOP berlapis berikut, selaras dengan temuan JIANG & TANG (2025) dan kerangka RMS dari Shin et al. (2024):

**Tahap 1 — Akuisisi & Pengumpulan (Reverse Logistics Front-End).** OEM dan *third-party logistic* (3PL) membangun *collection network* di dealer resmi, *battery swap station*, dan *end-of-life vehicle* (ELV) processing center. Standar acuan: UN 38.3 (transportation testing), IEC 62660-2 (reliability), dan GB/T 34014-2017 (coding & traceability). Setiap baterai diberi *battery passport* digital (Blockchain atau IoT-tagged) yang mencatat riwayat siklus, suhu operasional, dan C-rate.

**Tahap 2 — Diagnostik & Sorting.** Di Collection Center, dilakukan *non-destructive testing* (NDT): electrochemical impedance spectroscopy (EIS), capacity test, dan incremental capacity analysis (ICA) untuk menentukan SOH aktual. Klasifikasi keputusan:
- **Grade A** (SOH ≥ 80%): reuse langsung sebagai baterai EV (remanufacturing).
- **Grade B** (SOH 60–80%): kandidat echelon utilization → SESS, telecom backup.
- **Grade C** (SOH < 60%): direct recycling ke material recovery.

**Tahap 3 — Echelon Utilization (jika Grade B).** Modul baterai di-*repack* dan dilengkapi Battery Management System (BMS) baru, lalu diuji pada aplikasi stasioner (uji siklus 0.5C charge/discharge, ambient 25°C) selama minimal 50 siklus untuk verifikasi *second-life performance*. SOP mengikuti UL 1974 (evaluasi baterai pensiun) dan IEC 62933-5-2 (sistem energi stasioner).

**Tahap 4 — Recycling-Remanufacturing (Grade C atau end-of-second-life).** Proses hidrometalurgi dengan *leaching* H₂SO₄ + H₂O₂, dilanjutkan *solvent extraction* untuk memisahkan Co, Ni, Mn, dan *precipitation* untuk Li₂CO₃. Yield target: ≥ 95% Co recovery, ≥ 90% Li recovery. Material recovered diumpankan kembali ke *cathode precursor synthesis* (NMC precursor plant) untuk menutup loop produksi.

**Tahap 5 — Monitoring & Continuous Optimization.** Data performance diintegrasikan ke *digital twin* CLSC untuk re-optimisasi periodik parameter model JIANG & TANG. Arsitektur teknologi:

```
[OEM] → [Collection Network (IoT-tagged)] 
     ↓
[Diagnostic Center (EIS + ICA)] → AI-based SOH Classifier
     ↓
[Echelon Center (UL 1974)] ← Decision y^ech
     ↓                              ↓
[Second-life Market]      [Recycling Plant (Hydrometallurgy)]
     ↓                              ↓
[Grid/Telecom Storage]    [Cathode Precursor (Closed-loop)]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Ambil skenario industri hipotetis berdasarkan parameter umum industri baterai Asia Timur (Chen et al., 2023; disitasi oleh JIANG & TANG 2025): sebuah OEM memproduksi $Q = 50{,}000$ unit baterai per tahun dengan kapasitas 60 kWh. Setelah 8 tahun服役 (servis), diproyeksikan terdapat $R = 35{,}000$ baterai pensiun dengan profil SOH terdistribusi: 30% Grade A (reuse), 50% Grade B (echelon), 20% Grade C (recycle).

**Parameter biaya (USD/unit):**
- Produksi sel baru: $c^{prod} = 8{,}500$
- Koleksi & transport: $c^{coll} = 150$
- Echelon processing (testing + repack): $c^{ech} = 1{,}200$
- Recycling + hydrometallurgy: $c^{rec} = 950$
- Carbon penalty: $\pi = 80$/ton CO₂

**Pendapatan (revenue) second-life:** baterai Grade B dijual ke operator SESS seharga $p^{ech} = 2{,}800$/unit, sedangkan material recovered dari Grade C bernilai $p^{rec} = 1{,}100$/unit (Ni+Co+Li scrap).

**Langkah 1 — Alokasi optimal:**
$$E^* = 0.50 \times 35{,}000 = 17{,}500 \text{ unit (Grade B → echelon)}$$
$$M^* = 0.20 \times 35{,}000 = 7{,}000 \text{ unit (Grade C → recycle)}$$

**Langkah 2 — Biaya echelon processing:**
$$C^{ech} = 17{,}500 \times 1{,}200 = \$21{,}000{,}000$$

**Langkah 3 — Biaya recycling:**
$$C^{rec} = 7{,}000 \times 950 = \$6{,}650{,}000$$

**Langkah 4 — Revenue streams:**
$$R^{ech} = 17{,}500 \times 2{,}800 = \$49{,}000{,}000$$
$$R^{rec} = 7{,}000 \times 1{,}100 = \$7{,}700{,}000$$

**Langkah 5 — Total biaya koleksi:**
$$C^{coll} = 35{,}000 \times 150 = \$5{,}250{,}000$$

**Langkah 6 — Penghematan vs. baseline linear (semua didaur ulang tanpa echelon):**
Baseline: $35{,}000 \times 950 = \$33{,}250{,}000$ biaya, tanpa revenue echelon.
Net benefit strategi CLSC = $(49{,}000{,}000 + 7{,}700{,}000) - (21{,}000{,}000 + 6{,}650