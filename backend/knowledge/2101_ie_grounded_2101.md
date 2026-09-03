# 2101 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon) dan Remanufaktur Daur Ulang Baterai Bekas serta Manajemen Pengembalian Produk untuk Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) Strategi Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Tenaga Bekas Purna Pakai (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG, L., & TANG, L. (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. **14th International Conference on Logistics and Systems Engineering (ICLSE 2024)**. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** SHIN, Y., KIM, G., & JEONG, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. **Peer-Reviewed Journal (SSRN)**. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (*Electric Vehicle*/EV) global telah menciptakan tantangan operasional dan lingkungan yang belum pernah terjadi sebelumnya dalam manajemen rantai pasok baterai ion litium. Berdasarkan proyeksi International Energy Agency (IEA) yang dikutip dalam konteks penelitian JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), volume baterai purna pakai (*retired power battery*/RPB) diproyeksi mencapai lebih dari 1,4 juta ton pada tahun 2030, dengan tingkat daur ulang konvensional (*direct recycling*) yang hanya mampu memulihkan tidak lebih dari 35–50% material kritis seperti litium, kobalt, dan nikel. Paradigma konvensional perlakuan baterai bekas sebagai limbah padat B3 (Bahan Berbahaya dan Beracun) telah bergeser secara fundamental menuju perspektif *Urban Mining* dan *Second-Life Battery* (SLB), yang memandang baterai bekas sebagai *resource reservoir* bernilai tinggi.

Permasalahan mendasar yang diidentifikasi oleh JIANG & TANG (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) adalah bahwa baterai EV, setelah *State of Health* (SOH) turun di bawah ambang batas 70–80%, masih memiliki kapasitas residu yang substansial untuk aplikasi stasioner berdaya lebih rendah seperti *Base Transceiver Station* (BTS) telekomunikasi, penyimpanan energi terbarukan (*renewable energy storage*/RES), dan *backup power* industri. Fenomena ini dikenal sebagai **Echelon Utilization** atau *cascading utilization* — sebuah strategi yang memperpanjang siklus hidup baterai melalui aplikasi bertingkat sebelum akhirnya memasuki tahap remanufaktur dan daur ulang material (*closed-loop recycling*).

Dari perspektif Teknik Industri, keputusan untuk melakukan *echelon utilization* versus *direct recycling* bukan sekadar persoalan teknis kimia-material, melainkan keputusan multi-kriteria yang melibatkan optimasi rantai nilai (*value chain optimization*), teori permainan (*game theory*) antar pelaku, dan pengelolaan ketidakpastian (*uncertainty management*) terhadap kualitas baterai yang dikembalikan. SHIN, KIM, & JEONG (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi kerangka ini dengan mengusulkan model *Robust Closed-Loop Supply Chain* yang secara eksplisit menangani ketidakpastian permintaan, kualitas produk yang dikembalikan (*recovered product quality*), dan biaya operasional dalam kerangka ekonomi sirkular. Ketidakpastian ini krusial karena SOH baterai yang dikembalikan bersifat stokastik dengan variabilitas tinggi (±15–25%), sehingga pendekatan deterministik konvensional akan menghasilkan keputusan sub-optimal yang rentan terhadap kerugian operasional.

Urgensi strategis dari riset ini diperkuat oleh tiga tren industri simultan: (1) **regulasi Extended Producer Responsibility (EPR)** di Uni Eropa, Tiongkok, dan Korea Selatan yang mewajibkan manufaktur OEM bertanggung jawab atas *end-of-life* (EoL) baterai; (2) **fluktuasi harga material kritis** litium yang pernah menyentuh USD 80.000/ton pada 2022 dan turun ke USD 15.000/ton pada 2024, menciptakan kebutuhan akan strategi hedging rantai pasok; serta (3) **target net-zero emission** korporasi yang mendorong integrasi energi terbarukan dengan sistem penyimpanan baterai bekas sebagai *business model innovation*. Dengan demikian, pengembangan model CLSC yang robust dan mempertimbangkan opsi *echelon utilization* merupakan kontribusi riset yang memiliki relevansi industri langsung dan dampak ekonomi sirkular yang terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Closed-Loop Supply Chain Tiga-Eselon

Mengikuti kerangka JIANG & TANG (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), model CLSC baterai bekas dibangun dengan tiga entitas keputusan utama: **Produsen baterai baru** ($M$), **Operator aplikasi bertingkat/stasioner** ($E$ untuk *Echelon User*), dan **Pusat daur ulang/remanufaktur** ($R$). Aliran material digambarkan sebagai berikut: baterai baru dijual ke pasar EV → baterai mencapai EoL → sortasi berbasis SOH → jika SOH ∈ [60%, 80%] maka dialihkan ke operator $E$ untuk aplikasi second-life → jika SOH < 60% atau setelah masa second-life berakhir, dikirim ke $R$ untuk *remanufacturing* atau *material recovery*.

### 2.2 Formulasi Fungsi Profit dan Struktur Biaya

Fungsi profit untuk masing-masing pelaku didefinisikan sebagai berikut:

**Produsen ($M$):**
$$\pi_M = (p_n - c_n) \cdot q_n + (p_r - c_r) \cdot q_r - c_i \cdot I_M - F_M$$

di mana $p_n$ adalah harga jual baterai baru, $c_n$ biaya produksi, $q_n$ volume produksi baterai baru, $p_r$ harga jual produk remanufaktur, $c_r$ biaya remanufaktur per unit, $q_r$ volume remanufaktur, $c_i$ biaya persediaan per unit, $I_M$ level inventori, dan $F_M$ fixed cost operasional.

**Operator Echelon ($E$):**
$$\pi_E = (p_e - c_e - c_a) \cdot q_e - \lambda \cdot c_s \cdot q_e$$

dengan $p_e$ harga jual energi/jasa penyimpanan, $c_e$ biaya akuisisi baterai second-life dari $M$, $c_a$ biaya aplikasi/inspeksi teknis, $\lambda$ tingkat degradasi selama second-life, $c_s$ biaya tambahan degradasi, dan $q_e$ kapasitas second-life yang digunakan.

**Pusat Daur Ulang ($R$):**
$$\pi_R = (p_m - c_m) \cdot \sum_{j \in \{Li,Co,Ni\}} y_j - c_t \cdot q_{ret} - c_{env}$$

di mana $p_m$ dan $c_m$ adalah harga jual dan biaya ekstraksi material $j$, $y_j$ yield material kritis, $c_t$ biaya transportasi baterai ke $R$, $q_{ret}$ volume baterai yang diterima, dan $c_{env}$ biaya kepatuhan lingkungan.

### 2.3 Model Robust Optimization (Mengikuti SHIN, KIM, & JEONG, 2024)

SHIN, KIM, & JEONG (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) mengusulkan formulasi robust dengan *budget uncertainty set* untuk mengatasi fluktuasi parameter permintaan dan kualitas baterai kembali:

$$\max_{\mathbf{x}} \min_{\boldsymbol{\xi} \in \mathcal{U}} \mathbf{c}^\top \mathbf{x} - \boldsymbol{\xi}^\top \mathbf{x}$$

dengan *uncertainty set* box:
$$\mathcal{U} = \left\{ \boldsymbol{\xi} : \xi_i \in [\hat{\xi}_i - \hat{\sigma}_i \cdot \Gamma_i, \hat{\xi}_i + \hat{\sigma}_i \cdot \Gamma_i], \; \forall i \right\}$$

di mana $\hat{\xi}_i$ adalah nilai nominal parameter, $\hat{\sigma}_i$ standar deviasi, dan $\Gamma_i \in [0,1]$ parameter konservatisme pengambil keputusan.

### 2.4 Game Theory Stackelberg untuk Koordinasi CLSC

JIANG & TANG (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) memodelkan interaksi strategis sebagai **Stackelberg game** di mana produsen $M$ bertindak sebagai *leader* yang menentukan harga jual baterai second-life ($c_e$) dan *buy-back price* ($b$), sementara $E$ dan $R$ sebagai *followers* yang merespons dengan keputusan volume. Kondisi keseimbangan Nash-Stackelberg diperoleh melalui backward induction:

$$\frac{\partial \pi_E}{\partial q_e} = 0 \implies q_e^* = \frac{p_e - c_e - c_a - \lambda c_s}{2\beta_E}$$

$$\frac{\partial \pi_R}{\partial q_{ret}} = 0 \implies q_{ret}^* = \frac{\sum_j (p_{m,j} - c_{m,j}) y_j - c_t}{2\beta_R}$$

Substitusi ke fungsi profit $M$ menghasilkan *best response function* $M$ yang kemudian diselesaikan secara analitik atau melalui *Karush-Kuhn-Tucker (KKT)* conditions.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi CLSC Baterai Bekas

Berdasarkan sintesis prosedur yang diuraikan JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) dan pendekatan robust dari SHIN, KIM, & JEONG (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)), SOP industri untuk CLSC baterai bekas mengikuti delapan tahap kritis:

**Tahap 1 — Identifikasi & Pengumpulan (Collection Hub):** Pembentukan *battery collection network* berbasis reverse logistics dengan radius pelayanan optimal 50–80 km, mengikuti standar **UN 38.3** (transportasi baterai litium) dan regulasi **IEC 62660** (performance testing untuk EV battery).

**Tahap 2 — Sortasi Berbasis State of Health (SOH):** Setiap baterai yang masuk diukur kapasitas aktualnya melalui *Hybrid Pulse Power Characterization* (HPPC) test sesuai standar **IEC 61960**. Baterai diklasifikasikan menjadi Grade A (SOH ≥ 80%), Grade B (60% ≤ SOH < 80% → kandidat echelon), dan Grade C (SOH < 60% → direct recycling).

**Tahap 3 — Pengujian Keamanan & Sertifikasi:** Pengujian *thermal runaway*, *internal resistance*, dan *self-discharge rate* sesuai **GB/T 34014-2017** (standar kodifikasi baterai EV di Tiongkok) sebelum baterai Grade B dialihkan ke pasar second-life.

**Tahap 4 — Reconfiguration & Repackaging untuk Aplikasi Echelon:** Baterai di-*repack* ke dalam modul stasioner dengan **Battery Management System (BMS)** baru yang disesuaikan dengan aplikasi second-life (RES, BTS, dll.). Proses ini mengikuti panduan **IEEE 1679.1** untuk *second-life battery applications*.

**Tahap 5 — Deployment Aplikasi Second-Life:** Instalasi di lokasi aplikasi dengan monitoring *real-time* melalui *IoT sensor* (tegangan, suhu, SOC) dan integrasi dengan *Energy Management System* (EMS).

**Tahap 6 — Pengembalian Pascamasa Second-Life:** Setelah Second-Life *End-of-Life* (biasanya 5–8 tahun atau SOH < 50%), baterai dikembalikan ke $R$ untuk tahap *remanufacturing* atau *material recovery*.

**Tahap 7 — Remanufaktur vs. Direct Recycling Decision:** Keputusan antara *remanufacturing* (memulihkan modul ke fungsi baterai) dan *direct recycling* (ekstraksi material) diambil berdasarkan analisis techno-economic: jika nilai pasar remanufaktur $p_r \cdot \eta_r > \sum_j (p_{m,j} - c_{m,j}) y_j$ maka remanufaktur dipilih, dan sebaliknya.

**Tahap 8 — Closed-Loop Feedback & Data Analytics:** Data operasional dari seluruh loop diintegrasikan ke *digital twin* untuk pembelajaran berkelanjutan dan peningkatan akurasi prediksi SOH pada batch baterai berikutnya.

### 3.2 Diagram Alir Logika Keputusan

```
[Pengumpulan Baterai Bekas]
          ↓
[Pengukuran SOH via HPPC Test]
          ↓
   ┌──────┼──────┐
   ↓      ↓      ↓
[Grade A] [Grade B] [Grade C]
   ↓      ↓      ↓
[Recycle] [Echelon] [Direct
ke Mfr.   Market    Recycling]
   ↓      ↓      ↓
   └──────┴──────┘
          ↓
[Material ke Cathode Producer → ke M (Closed-Loop)]
```

---

##