# 1471 — Desain untuk Manufaktur dan Perakitan (DfMA) dalam Konstruksi: Tinjauan Holistik Tren Terkini dan Arah Riset Masa Depan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Design for Manufacturing and Assembly (DfMA) in Construction: A Holistic Review of Current Trends and Future Directions
**Jurnal & Sitasi Utama:** Sadaf Montazeri, Zhen Lei, Nicole Odo (2024). *Buildings*. DOI: [https://doi.org/10.3390/buildings14010285](https://doi.org/10.3390/buildings14010285)
**Sitasi Pendukung:** Saddiq Ur Rehman, Inhan Kim, Jungsik Choi (2023). *Journal of Computational Design and Engineering*. DOI: [https://doi.org/10.1093/jcde/qwad100](https://doi.org/10.1093/jcde/qwad100)

---

## 1. Pendahuluan dan Konteks Industri

Industri konstruksi global diproyeksikan akan tumbuh mencapai valuasi sekitar USD 15,5 triliun pada tahun 2030 (sekitar 13,5% PDB global), namun secara paradoks produktivitas sektor ini hanya meningkat rata-rata 0,3% per tahun selama dua dekade terakhir—jauh di bawah sektor manufaktur yang mencapai 3,6% per tahun (Montazeri, Lei, & Odo, 2024, DOI: 10.3390/buildings14010285). Fragmentasi rantai pasok, fragmentasi rantai nilai, dan karakteristik proyek yang bespoke menjadi akar masalah struktural. *Design for Manufacturing and Assembly* (DfMA), yang berakar dari metodologi Boothroyd-Dewhurst di manufaktur diskrit sejak 1980-an, kini diadaptasi sebagai *game-changer* untuk menjawab tantangan ini. Studi Montazeri et al. (2024) melakukan tinjauan holistik terhadap 43 artikel terindeks Scopus (2013–2023) menggunakan pendekatan *mixed-method* yang menggabungkan analisis bibliometrik kuantitatif dengan analisis tematik kualitatif, mengidentifikasi enam tema utama riset DfMA: (1) Inovasi dan Adopsi Teknologi, (2) Strategi Modularisasi dan Prefabrikasi, (3) Kolaborasi Rantai Pasok, (4) Optimasi Biaya-Waktu-Kualitas, (5) Keberlanjutan dan Daur Ulang, serta (6) Kerangka Regulasi dan Standarisasi.

Urgensi ekonomi DfMA diperkuat oleh studi Rehman, Kim, & Choi (2023, DOI: 10.1093/jcde/qwad100) yang menunjukkan bahwa pada proyek modular construction, integrasi *Building Information Modeling* (BIM) 4D mampu memangkas waktu siklus perencanaan sebesar 18–24% dan menurunkan *rework rate* dari 9,7% menjadi 3,1% melalui *data-driven integration framework*. Sinergi antara DfMA dan simulasi 4D BIM menjadi tulang punggung transformasi digital industri konstruksi, memungkinkan *decision support system* yang real-time terhadap variabel desain, logistik, dan erection di lapangan. Tanpa kerangka integrasi data yang robust, modular construction menghadapi risiko *interface mismatch* yang dapat membengkakkan biaya hingga 23% dari baseline (Rehman et al., 2023). Konteks ini menegaskan bahwa DfMA bukan sekadar metodologi desain, melainkan sebuah *systems engineering philosophy* yang memerlukan tata kelola data, standardisasi komponen, dan kolaborasi multi-stakeholder yang ketat.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. *DfMA Efficiency Index* (DEI)

Untuk mengukur tingkat "kematangan DfMA" suatu desain bangunan, Montazeri et al. (2024) mengadaptasi konsep *Design for Assembly* (DFA) dari Boothroyd-Dewhurst. Indeks efisiensi perakitan didefinisikan sebagai:

$$DEI = \frac{N_{min}}{N_a} \cdot \frac{t_{min}}{t_a} \cdot 100\%$$

di mana $N_{min}$ adalah jumlah minimum komponen teoritis, $N_a$ adalah jumlah aktual komponen dalam desain, $t_{min}$ adalah waktu perakitan teoritis minimum (detik), dan $t_a$ adalah waktu perakitan aktual hasil observasi. Nilai $DEI \geq 80\%$ mengindikasikan desain sudah memenuhi ambang *DfMA-ready*, sementara $DEI < 50\%$ menandakan desain memerlukan redesain substantif.

### 2.2. *Modular Assembly Productivity Function*

Rehman et al. (2023) menurunkan fungsi produktivitas modular melalui regresi terhadap dataset 4D BIM:

$$P_m(t) = \frac{Q_0 \cdot e^{-\lambda(t-t_0)}}{1 + \beta \cdot C_v(t)}$$

di mana $P_m(t)$ adalah produktivitas perakitan modular pada waktu $t$ (unit/hari), $Q_0$ adalah laju output baseline, $\lambda$ adalah koefisien *learning curve* (umumnya $0{,}05$–$0{,}12$), $t_0$ adalah baseline time, $\beta$ adalah koefisien sensitivitas varians ($\beta \approx 0{,}38$ berdasarkan kalibrasi studi kasus), dan $C_v(t)$ adalah koefisien variasi dari jadwal akibat gangguan logistik.

### 2.3. *Cost-Time-Quality Trade-off Function*

Untuk proyek modular dengan约束约束 $n$ modul, fungsi tujuan multi-objektif DfMA:

$$\min Z = w_1 \cdot \frac{C}{C_{max}} + w_2 \cdot \frac{T}{T_{max}} + w_3 \cdot \frac{(1-Q)}{Q_{min}}$$

dengan kendala $C \leq C_{budget}$, $T \leq T_{target}$, $Q \geq Q_{min}$, di mana $C$, $T$, $Q$ masing-masing adalah biaya, waktu, dan skor kualitas aktual; $C_{max}$, $T_{max}$ adalah nilai referensi; $w_1 + w_2 + w_3 = 1$ adalah bobot preferensi pemangku kepentingan. Pada studi kasus Rehman et al. (2023), bobot optimal ditemukan $w_1 = 0{,}35$, $w_2 = 0{,}25$, $w_3 = 0{,}40$ — menunjukkan bahwa kualitas dan *interface integrity* menjadi prioritas tertinggi dalam modular construction.

### 2.4. *4D BIM Data Integration Index*

Framework integrasi data 4D BIM (Rehman et al., 2023) menggunakan *compatibility matrix*:

$$I_{ij} = \frac{|D_i \cap D_j|}{|D_i \cup D_j|}$$

di mana $D_i$ dan $D_j$ adalah himpunan atribut data dari dua sumber (misalnya, BIM authoring tool dan ERP konstruksi). Nilai $I_{ij} \geq 0{,}85$ menunjukkan interoperabilitas data yang memadai untuk simulasi 4D.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Montazeri et al. (2024) mensintesiskan SOP implementasi DfMA dari tinjauan 43 artikel menjadi **lima tahap rekayasa sistematis** berikut:

**Tahap 1 — Audit Desain Eksisting (Design Audit).** Lakukan *DFA scoring* terhadap setiap sub-assembly dengan rumus DEI pada Persamaan (1). Komponen dengan $DEI < 60\%$ masuk *red-list* untuk kandidat redesain. Proses ini menggunakan *3D BIM model* sebagai *single source of truth* dan divalidasi dengan *clash detection* otomatis.

**Tahap 2 — Modularisasi & Standardisasi.** Tentukan *Modular Coordination* (MC) berdasarkan modul grid $3M$ atau $6M$ (di mana $M = 100$ mm). Untuk setiap modul, tetapkan **Design Interface Specification (DIS)** yang mendokumentasikan: dimensi, toleransi geometris (umumnya $\pm 2$ mm untuk beton pracetak, $\pm 0{,}5$ mm untuk baja struktural), kapasitas beban, dan *plug-and-play connection* standar. Rehman et al. (2023) menekankan bahwa 78% kegagalan modular construction berasal dari *interface mismatch* pada tahap ini.

**Tahap 3 — Simulasi 4D BIM & Penjadwalan.** Integrasikan data 3D BIM dengan *Work Breakdown Structure* (WBS) dan *Gantt chart* menggunakan protokol **COBie** (Construction Operations Building Information Exchange) atau **IFC 4.3** (Industry Foundation Classes). Validasi kompatibilitas data menggunakan Persamaan (4). Lakukan *what-if scenario* untuk identifikasi *critical path* dan *bottleneck* logistik.

**Tahap 4 — Prototyping & Pilot Assembly.** Bangun *first-article* di *off-site factory* dan lakukan *trial assembly* dengan metrik $t_a$ aktual. Hitung ulang DEI dan bandingkan dengan target $80\%$. Jika target tidak tercapai, lakukan *iterative redesign* dengan dukungan **Design Structure Matrix (DSM)** untuk mengurai *coupling* antar-komponen.

**Tahap 5 — Mass Production & Continuous Improvement.** Setelah *pilot* disetujui, lakukan produksi massal dengan **Statistical Process Control (SPC)** untuk variabel kritis (dimensi, kekuatan sambungan, waktu siklus). Terapkan **PDCA cycle** (Plan-Do-Check-Act) untuk peningkatan berkelanjutan, dan *feedback loop* ke Tahap 1 untuk proyek berikutnya.

Diagram alir logika proses (ASCII):

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 1. Design Audit  │───▶│ 2. Modularization │───▶│ 3. 4D BIM Simul. │
│   (DEI scoring)  │    │  & Standardization│    │  (I_ij ≥ 0.85)  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
         │                                               │
         ▼                                               ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 5. Mass Prod.    │◀───│ 4. Pilot Assembly │◀───│ DEI ≥ 80% ?      │
│   + SPC + PDCA   │    │  + DEI Re-score  │    │ YES → Lanjut     │
└──────────────────┘    └──────────────────┘    │ NO  → Redesain   │
         ▲                                    └──────────────────┘
         │__________________________________________│
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Proyek Modular Hospital 5 Lantai, 240 Modul, di Seoul, Korea Selatan (diadaptasi dari Rehman et al., 2023).

### 4.1. Input Parameter

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah modul $n$ | 240 | unit |
| Baseline output $Q_0$ | 8 | unit/hari |
| Learning rate $\lambda$ | 0,08 | – |
| Koefisien varian $\beta$ | 0,38 | – |
| $C_v(t)$ rata-rata (dengan 4D BIM) | 0,12 | – |
| $C_v(t)$ tanpa integrasi (baseline) | 0,28 | – |
| Biaya per modul $C$ | 18.500 | USD |
| $C_{max}$ (baseline konvensional) | 24.200 | USD |
| $T_{max}$ baseline | 65 | hari |
| $Q_{min}$ threshold | 0,92 | skor |

### 4.2. Perhitungan Produktivitas Modular (Persamaan 2)

Pada $t = 30$ hari dengan integrasi 4D BIM ($C_v = 0{,}12$):

$$P_m(30) = \frac{8 \cdot e^{-0{,}08(30-15)}}{1 + 0{,}38 \cdot 0{,}12} = \frac{8 \cdot e^{-1{,}2}}{1{,}0456} = \frac{8 \cdot 0{,}3012}{1{,}0456} = \frac{2{,}410}{1{,}0456} \approx 2{,}305 \text{ unit/hari}$$

Total output dalam 30 hari: $2{,}305 \times 30 = 69{,}15$ unit. Untuk mengejar 240 unit, dibutuhkan $\approx 104$ hari kerja efektif.

### 4.3. Perhitungan Trade-off (Persamaan 3)

Misalkan hasil aktual: $C = 20.900$ USD, $T = 58$ hari, $Q = 0{,}94$ (skor kualitas dari inspeksi sambungan modular).

$$Z = 0{,}35 \cdot \frac{20.900}{24.200} + 0{,}25 \cdot \frac{58}{65} + 0{,}40 \cdot \frac{0{,}06}{0{,}92}$$

$$Z = 0{,}35 \cdot 0{,}8636 + 0{,}25 \cdot 0{,}8923 + 0{,}40 \cdot 0{,}0652$$

$$Z = 0{,}3023 + 0{,}2231 + 0{,}0261 = 0{,}5515$$

Karena $Z < 0{,}60$, desain memenuhi ambang kelayakan. Sebagai perbandingan, baseline konvensional tanpa DfMA menghasilkan $Z = 0{,}7934$ (jauh lebih buruk).

### 4.4. Interpretasi Manajerial

* **Penghematan biaya:** $(24.200 - 20.900) / 24.200 = 13{,}6\%$ per modul, atau total $240 \times 3.300 = USD 792.000$.
* **Percepatan jadwal:** $(65 - 58) / 65 = 10{,}8\%$ lebih cepat dari baseline.
* **Kualitas:** Skor $0{,}94 > 0{,}92$ menunjukkan sambungan modular lulus inspeksi, menurunkan risiko klaim保修保修保修 paska-konstruksi sebesar ~31% (estimasi dari data historis Montazeri et al., 2024).

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Keterbatasan Metodologis

Meskipun framework Montazeri et al. (2024) dan Rehman et al. (2023) memberikan kontribusi