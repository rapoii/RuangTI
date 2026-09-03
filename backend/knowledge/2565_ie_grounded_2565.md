# 2565 — Strategi Rantai Pasok Closed-Loop untuk Pemanfaatan Eselon dan Daur Ulang Remanufaktur Baterai Daya Pensiun (Retired Power Battery)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. SSRN. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global—yang diproyeksikan menembus 45 juta unit pada 2030 (IEA, *Global EV Outlook 2024*)—menghadirkan paradoks lingkungan yang krusial: baterai lithium-ion (LIB) pensiun dengan kapasitas residu 70–80% State of Health (SOH) memasuki fase end-of-life (EOL) dalam volume masif. JIANG Lin dan TANG Lidan (2025) dalam makalahnya yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering* (ICLSE 2024) menyoroti urgensi perancangan *closed-loop supply chain* (CLSC) yang mengintegrasikan pemanfaatan eselon (echelon utilization) dan remanufaktur daur ulang untuk baterai pensiun kendaraan listrik, guna menjawab tantangan skenario "battery tsunami" yang diprediksi terjadi antara 2025–2040 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)). Pendekatan eselon memungkinkan baterai dengan degradasi ringan–sedang (biasanya SOH ≥ 70%) dialihfungsikan ke aplikasi stasioner seperti *Battery Energy Storage System* (BESS), telekomunikasi, atau *microgrid* sebelum akhirnya didaur ulang menjadi material katoda/anoda (black mass recovery) ketika kapasitas turun di bawah ambang ekonomis.

Konteks industri di Tiongkok sebagai produsen baterai terbesar dunia (≈75% kapasitas manufaktur global) menjadi latar utama penelitian JIANG & TANG. Regulasi *Interim Measures for the Administration of the Recycling and Utilization of New Energy Vehicle Power Batteries* (MIIT, 2018) serta *Carbon Peaking and Carbon Neutrality Goals* menciptakan tekanan fiskal dan lingkungan yang memaksa Original Equipment Manufacturer (OEM), *echelon operator*, *recycling-remanufacturing third party* (3PR), dan pemerintah untuk berkolaborasi dalam ekosistem CLSC. Shin, Kim, dan Jeong (2024) melengkapi perspektif ini dengan mengusulkan model *robust closed-loop supply chain* yang mengakomodasi ketidakpastian tingkat pengembalian (*return rate*) di bawah kerangka *circular economy* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). Kedua penelitian ini secara kolektif menunjukkan bahwa perancangan CLSC baterai bukan sekadar persoalan logistik balik, melainkan keputusan strategis bernilai miliaran dolar yang memerlukan optimalisasi multi-stakeholder, multi-tier, dan multi-horizon.

Secara operasional, kompleksitas meningkat ketika mempertimbangkan *heterogenitas kondisi baterai pensiun*: kapasitas residu, internal resistance, *self-discharge rate*, dan *thermal runaway risk* bervariasi antarsel, sehingga menciptakan pasar informasi asimetris antara pemilik baterai bekas (konsumen/operator armada), *echelon operator*, dan *recycler*. Ketidakpastian permintaan pasar BESS sekunder, fluktuasi harga kobalt/nikel/litium, serta dinamika subsidi pemerintah turut membentuk lanskap keputusan manajerial yang kompleks dan menjadi justifikasi utama mengapa diperlukan formulasi matematis tingkat lanjut.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Baterai

JIANG & TANG (2025) mengusulkan jaringan CLSC empat-tingkat yang terdiri dari: (i) **produsen baterai baru (Manufacturer/M)**, (ii) **distributor/retailer (R)**, (iii) **echelon operator (E)** yang melakukan repurposing, dan (iv) **recycler-remanufacturer (REC)** yang mengekstrak material bernilai. Aliran maju (*forward flow*) membawa baterai baru dari M ke R ke konsumen akhir; aliran balik (*reverse flow*) membawa baterai pensiun dari konsumen ke E untuk eselon, kemudian ke REC untuk daur ulang material.

### 2.2 Model Permintaan dan Fungsi Profit

Permintaan pasar primer dimodelkan sebagai fungsi linear terhadap harga eceran $p_r$:

$$D_f = a - b \cdot p_r, \quad a > 0, \; b > 0 \tag{1}$$

Permintaan pasar sekunder (BESS eselon) terhadap baterai remanufaktur:

$$D_e = \alpha - \beta \cdot p_e + \gamma \cdot s \tag{2}$$

di mana $p_e$ adalah harga jual baterai eselon, dan $s$ adalah subsidi pemerintah per unit (variabel keputusan pemerintah dalam mekanisme *Stackelberg*).

Tingkat pengembalian baterai pensiun dari konsumen (capture rate) dimodelkan oleh Shin et al. (2024) sebagai:

$$\tau = \tau_0 + \theta \cdot (p_b - p_{\text{buyback}}), \quad 0 \leq \tau \leq 1 \tag{3}$$

dengan $p_b$ adalah insentif buyback dan $\theta$ sensitivitas pengembalian.

### 2.3 Formulasi Stackelberg Multi-Pemimpin

Permainan hierarkis didefinisikan sebagai berikut: **Pemerintah** sebagai *leader tier-1* menentukan subsidi $s$; **Manufacturer** sebagai *leader tier-2* menentukan harga grosir $w$ dan harga daur ulang $p_m$; **Echelon Operator** dan **Recycler** bertindak sebagai *followers*. Fungsi tujuan setiap pemain dimaksimalkan secara *sequential*.

Profit Manufacturer:

$$\pi_M = (w - c_m) D_f + p_m R_{\text{recycle}} - c_{\text{prod}} Q_p \tag{4}$$

Profit Echelon Operator:

$$\pi_E = (p_e - c_e - p_m) \tau D_f - c_{\text{repur}} Q_e \tag{5}$$

Profit Recycler:

$$\pi_{REC} = (v_m - c_{\text{rec}}) (1-\tau) D_f + s \tau D_f \tag{6}$$

di mana $c_m, c_e, c_{\text{rec}}$ adalah biaya marjinal masing-masing环节, $v_m$ adalah nilai material pulih, dan $R_{\text{recycle}} = (1-\tau) D_f$ adalah volume baterai menuju daur ulang material.

### 2.4 Formulasi Optimisasi Robust (Shin et al., 2024)

Untuk mengatasi ketidakpastian parameter permintaan ($\tilde{a} = a + \xi_a$, $|\xi_a| \leq \hat{a}$) dan tingkat pengembalian ($\tilde{\tau} = \tau + \xi_\tau$, $|\xi_\tau| \leq \hat{\tau}$), Shin et al. menggunakan formulasi *min-max regret*:

$$\min_{x \in \mathcal{X}} \max_{\xi \in \mathcal{U}} \left[ f(x, \xi) - f^*(x, \xi) \right] \tag{7}$$

atau *Bertsimas-Sim robust counterpart* dengan budget ketidakpastian $\Gamma$:

$$\min_{x} \; c^T x \; \text{s.t.} \; \mathbf{A}x \leq \mathbf{b} + \mathbf{q}(\Gamma, \mathbf{u}) \tag{8}$$

dengan $\mathbf{q}(\Gamma, \mathbf{u})_i = u_i (\Gamma + |\mathcal{J}_i|)$ untuk himpunan indeks aktif $\mathcal{J}_i$ pada kendala $i$.

### 2.5 Keterbatasan Kapasitas dan Constraint Eselon

Konsistensi aliran mengharuskan:

$$Q_e + Q_{\text{recycle}} = \tau D_f \tag{9}$$

$$Q_{\text{recycle}} \leq K_{\text{REC}} \tag{10}$$

$$Q_e \leq K_E \tag{11}$$

dengan $K_{\text{REC}}$ dan $K_E$ masing-masing kapasitas tahunan fasilitas daur ulang dan eselon (dalam GWh/tahun).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) menyusun SOP industri 7-tahap untuk implementasi CLSC baterai pensiun yang selaras dengan standar **GB/T 34014-2017** (Coding and Specification for Automotive Power Battery Recycling) dan **IEC 62933-4-1** (Safety requirements for grid-integrated BESS):

**Tahap 1 — Pengumpulan dan Reverse Logistics:** Penjadwalan rute pengumpulan baterai pensiun dengan VRPTW (Vehicle Routing Problem with Time Windows) guna meminimalkan total biaya transport $C_T = \sum_{i \in I}\sum_{j \in J} c_{ij} x_{ij}$ dengan kendala kapasitas kendaraan dan *state-of-charge safety* selama transit (risiko *thermal runaway* membatasi jumlah sel per kontainer menjadi ≤ 80% SoC).

**Tahap 2 — Inspeksi dan Sortasi:** Pengujian SOH menggunakan *hybrid pulse power characterization* (HPPC) dan electrochemical impedance spectroscopy (EIS). Sel diklasifikasikan menjadi Grade A (SOH ≥ 80%, langsung eselon BESS), Grade B (70% ≤ SOH < 80%, eselon dengan refurbishment), dan Grade C (SOH < 70%, langsung daur ulang material).

**Tahap 3 — Disassembly dan Cell-Level Testing:** Pembongkaran modul pack pada tegangan aman < 60 V DC; identifikasi sel anomali melalui *differential voltage analysis* (DVA).

**Tahap 4 — Repurposing (Echelon Utilization):** Re-packaging sel Grade A/B menjadi modul BESS standar 48V/100Ah atau rak kontainer 1 MWh dengan sistem Battery Management System (BMS) baru, memenuhi standar UL 1973 dan UN 38.3 untuk transport.

**Tahap 5 — Recycling/Remanufacturing:** Untuk sel Grade C, proses *hydrometallurgical leaching* dengan asam sulfat-H₂O₂ menghasilkan larutan $\text{NiSO}_4$, $\text{CoSO}_4$, $\text{Li}_2\text{CO}_3$ yang dimurnikan melalui *solvent extraction* dan *selective precipitation*.

**Tahap 6 — Reverse Material Flow:** Logistik material pulih (black mass, lithium carbonate, cobalt sulfate) ke fasilitas *precursor synthesis* (NCM811 precursor: $\text{Ni}_{0.8}\text{Co}_{0.1}\text{Mn}_{0.1}(\text{OH})_2$) untuk menutup loop produksi baterai baru.

**Tahap 7 — Monitoring dan Sertifikasi:** Penempelan *digital passport* baterai berbasis blockchain (sesuai EU Battery Regulation 2023/1542) yang mencatat provenance material, karbon footprint, dan histori siklus hidup.

Diagram alir keputusan mengikuti logika *if-then-else* pada metrik SOH, internal resistance (