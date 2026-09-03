# 2837 — Strategi *Closed-Loop Supply Chain* (CLSC) untuk Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Logistik Terbalik & Ekonomi Sirkular
**Topik Spesialis:** Strategi *Closed-Loop Supply Chain* Baterai *Power* Bekas dengan Mempertimbangkan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. **14th International Conference on Logistics and Systems Engineering (ICLSE 2024)**. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (*Electric Vehicle*/EV) global yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024) menimbulkan konsekuensi struktural berupa limpahan *retired power battery* — baterai litium-ion berkapasitas 30–100 kWh yang telah menurun *State of Health* (SOH)-nya di bawah ambang 70–80%. JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti bahwa tanpa strategi *Closed-Loop Supply Chain* (CLSC) yang terkoordinasi secara ekonomis dan teknis, nilai material kritis (Li, Ni, Co, Mn) senilai USD 100+ miliar akan terdisipasi sebagai limbah B3 (*hazardous waste*), sekaligus membengkakkan *deferred carbon liability* industri otomotif. Dua strategi komplementer ditawarkan dalam literatur: (1) *echelon utilization* — repurposing baterai bekas menjadi *stationary energy storage system* (SESS), *backup power*, atau *low-speed e-mobility* dengan siklus degradasi lanjutan 5–10 tahun; (2) *recycling-remanufacturing* — ekstraksi material aktif melalui pirometalurgi/hidrometalurgi untuk *closed-loop material recovery* (CLMR) ke lini *cell manufacturing* OEM.

Urgensi operasional makin diperkuat oleh regulasi ketat. *EU Battery Regulation 2023/1542* mensyaratkan tingkat daur ulang 65% Li, 90% Ni/Co, 50% Pb pada 2025, serta *minimum recycled content* 6% Co, 6% Ni, 3,8% Li per 2031. Di Indonesia, PP No. 27/2020 dan Permen LHK No. 75/2019 tentang pengelolaan limbah B3 baterai mulai memberi tekanan pada pelaku industri (*Original Equipment Manufacturer*/OEM) untuk membangun kapasitas reverse-logistics domestik. Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menambahkan bahwa ketidakpastian volume *return flow*, kualitas baterai masuk (*grading uncertainty*), dan permintaan produk sekunder menjadikan pendekatan *robust optimization* lebih relevan dibanding optimisasi deterministik konvensional.

Dari perspektif *Industrial Engineering*, persoalan ini merupakan masalah keputusan multi-pelaku (*multi-echelon multi-stakeholder decision-making*) yang melibat tiga entitas dominan: (a) OEM/Integrator baterai sebagai *Stackelberg leader* pengambil keputusan harga jual baru ($p_n$), harga beli kembali ($b$), dan insentif pengembalian; (b) *Third-Party Echelon Operator* (TPEO) atau *repurposer* yang menilai SOH, menentukan lot *second-life*, dan menjual kembali sebagai produk SESS; (c) *Recycler-Remanufacturer* (RR) yang menangani baterai yang gagal lolos *echelon screening*, mengekstrak material, dan memasok *remanufactured cathode active material* (r-CAM) ke lini OEM. Koordinasi ketiga entitas melalui kontrak koordinat (*revenue-sharing*, *cost-sharing*, *two-part tariff*) menjadi kunci meminimalisir *double marginalization* sekaligus menjamin keberlanjutan ekonomi sirkular. Dokumen KB ini akan membedah formulasi matematis, SOP operasional, studi kasus kuantitatif, dan agenda riset lanjutan dari kedua literatur acuan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model CLSC Tiga-Eselon

JIANG & TANG (2025) mengusulkan model keputusan simultan yang mengintegrasikan **forward chain** (manufaktur OEM), **reverse chain** (koleksi, sortasi SOH), **echelon layer** (repurposing ke SESS), dan **recycling-remanufacturing layer** (ekstraksi material & CLMR). Struktur *decision sequence* mengikuti pola *Stackelberg game* di mana OEM bertindak sebagai pemimpin, TPEO dan RR sebagai pengikut simultan (*Nash followers*).

### 2.2 Notasi Parameter dan Variabel Keputusan

Misalkan indeks $i \in \{n, e, r\}$ masing-masing merepresentasikan produk baterai baru, produk *echelon* (SESS), dan produk *remanufactured* (r-CAM/battery). Parameter kunci:

- $c_n, c_e, c_r$: biaya produksi/unit untuk masing-masing produk
- $s$: *salvage value* baterai bekas ke RR (USD/kWh)
- $b$: insentif beli kembali (*buy-back price*) OEM per kWh
- $\tau$: biaya sortasi, pengujian SOH, dan *repackaging* per unit
- $D_n, D_e, D_r$: fungsi permintaan produk baru, echelon, dan remanufaktur
- $w$: harga jual *transfer* TPEO ke OEM untuk baterai gagal-sortir
- $u$: ketidakpastian volume return mengikuti *Box uncertainty set*

Variabel keputusan: $p_i$ (harga jual ritel), $q_i$ (kuantitas), $b$ (buy-back), $x$ (proporsi baterai yang dialihkan ke TPEO vs RR).

### 2.3 Fungsi Permintaan Deterministik

Mengikuti spesifikasi JIANG & TANG (2025), permintaan tiga lini produk dimodelkan sebagai fungsi *linear downward-sloping* yang saling tergantung (*cross-price elasticity*):

$$D_n(p_n, p_e, p_r) = a_n - \alpha_n p_n + \beta_{ne} p_e + \beta_{nr} p_r \quad (1)$$

$$D_e(p_n, p_e, p_r) = a_e + \beta_{en} p_n - \alpha_e p_e + \beta_{er} p_r \quad (2)$$

$$D_r(p_n, p_e, p_r) = a_r + \beta_{rn} p_n + \beta_{re} p_e - \alpha_r p_r \quad (3)$$

dengan koefisien $\alpha_i > 0$ (efek harga sendiri, *self-price elasticity*) dan $\beta_{ij} \geq 0$ (efek silang, *substitutability/complementarity*). Tanda koefisien silang menentukan apakah produk bersifat *substitute* (tanda positif) atau *complement* (tanda negatif) sesuai struktur pasar.

### 2.4 Fungsi Profit Aktor

**OEM (Stackelberg leader):**

$$\pi_{OEM} = (p_n - c_n) D_n - b \cdot R + (c_r^{in} - w) q_r^{in} - F_{OEM} \quad (4)$$

di mana $R$ adalah total volume baterai bekas yang dikembalikan (*return flow*), $c_r^{in}$ adalah biaya internalisasi r-CAM, dan $F_{OEM}$ adalah *fixed cost* (R&D, fasilitas lini CLMR).

**TPEO (echelon operator):**

$$\pi_{TPEO} = (p_e - c_e) D_e - \tau \cdot x R + b \cdot x R - 0 \quad (5)$$

**Recycler-Remanufacturer:**

$$\pi_{RR} = (p_r - c_r) D_r + (w - s) \cdot (1-x) R - \tau \cdot (1-x) R \quad (6)$$

### 2.5 Formulasi Robust Counterpart (Shin, Kim & Jeong, 2024)

Untuk mengatasi ketidakpastian volume return dan kualitas SOH, Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) mengembangkan *robust counterpart* dengan *budgeted uncertainty set*:

$$\mathcal{U} = \left\{ \tilde{R} : \tilde{R} = \bar{R} + \sum_{k=1}^{K} z_k \hat{R}_k, \; \sum_{k} |z_k| \leq \Gamma, \; z_k \in [-1, 1] \right\} \quad (7)$$

dengan $\Gamma$ adalah *budget of uncertainty* yang membatasi deviasi simultan paling banyak $\Gamma$ skenario dari nilai nominal $\bar{R}$. *Robust counterpart* dari maksimisasi profit OEM menjadi:

$$\max_{p_n, x} \min_{\tilde{R} \in \mathcal{U}} \pi_{OEM}(p_n, x, \tilde{R}) \quad (8)$$

Solusi optimal *worst-case* diberikan oleh:

$$R^{wc} = \bar{R} + \Gamma \cdot \max_{k} \hat{R}_k \quad (9)$$

dan *Stackelberg-Nash equilibrium* $(p_n^*, x^*, p_e^*, p_r^*)$ diperoleh melalui *backward induction* dengan kondisi KKT (Karush-Kuhn-Tucker) orde pertama:

$$\frac{\partial \pi_{OEM}}{\partial p_n} = 0, \quad \frac{\partial \pi_{TPEO}}{\partial p_e} = 0, \quad \frac{\partial \pi_{RR}}{\partial p_r} = 0, \quad \frac{\partial \pi_{OEM}}{\partial x} = 0 \quad (10)$$

### 2.6 Kontrak Koordinasi *Revenue-Sharing*

Untuk menghilangkan inefisiensi *double marginalization*, JIANG & TANG (2025) mengusulkan kontrak koordinat:

$$p_r^{CLSC} = \theta \cdot p_r, \quad c_n^{CLSC} = c_n - (1-\theta)(p_r - c_r) \quad (11)$$

dengan $\theta \in [0,1]$ sebagai parameter *revenue-sharing rate* untuk r-CAM. Koordinasi tercapai ketika $\theta = c_r / p_r$ (alokasi Pareto-optimal).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) dan Shin, Kim & Jeong (2024) secara konsisten menyusun SOP CLSC baterai bekas ke dalam **sembilan tahap rekayasa** yang terimplementasi secara industri:

**Tahap 1 — Inisiasi *End-of-Life* (EOL) Collection.** OEM mengeluarkan *battery passport* (formatasi ISO/IEC 21434 dan *EU Battery Passport*) yang mencakup riwayat siklis, SOH, DOD rata-rata, dan provenance material. Threshold pengembalian: SOH ≤ 80% atau kapasitas terukur < kapasitas nominal 80%.

**Tahap 2 — Logistik Terbalik (*