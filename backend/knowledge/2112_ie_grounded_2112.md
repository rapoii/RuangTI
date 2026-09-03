# 2112 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy) merupakan salah satu subsektor agribisnis paling kompleks dan bernilai strategis tinggi dalam ekonomi pangan global. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), karakteristik intrinsik produk susu — yaitu perishability tinggi, jendela simpan (shelf life) yang pendek (3–21 hari tergantung jenis produk), serta kebutuhan rantai dingin (cold chain) dengan rentang suhu 2–6°C — menjadikan perancangan jaringan rantai pasoknya sebagai masalah optimasi berskala besar yang bersifat *mixed-integer non-linear* (MINLP). Produk susu seperti *pasteurized milk*, *yogurt*, *cheese*, dan *butter* memiliki laju degradasi mutu yang berbeda, sehingga membutuhkan strategi *inventory positioning* dan *lane assignment* yang berbeda pula.

Urgensi operasional topik ini diperkuat oleh tiga tekanan simultan yang dihadapi industri susu modern. Pertama, tekanan biaya: biaya logistik dingin (*cold-chain logistics*) mencapai 30–40% dari total biaya distribusi produk susu, dengan *fuel consumption* yang lebih tinggi akibat penggunaan refrigerated trucks (Lead Researchers, 2023). Kedua, tekanan lingkungan: emisi CO₂ dari sektor dairy menyumbang sekitar 3–4% dari total emisi gas rumah kaca global, sehingga perancang jaringan harus menyeimbangkan fungsi biaya dengan fungsi *carbon footprint*. Ketiga, tekanan kualitas dan keamanan pangan: standar SNI 01-3951 untuk susu pasteurisasi, Codex Alimentarius, serta ISO 22000 menuntut traceability yang kuat di sepanjang jaringan, sehingga keputusan lokasi fasilitas, moda transportasi, dan frekuensi distribusi menjadi determinan mutu produk akhir.

Kontribusi orisinal paper Lead Researchers (2023) adalah mengusulkan kerangka multi-objektif yang secara eksplisit mengoptimasi tiga fungsi tujuan secara simultan: minimasi total biaya jaringan, minimasi emisi karbon, dan maksimasi tingkat kesegaran produk (*freshness level*) pada titik konsumsi. Kompleksitas komputasional yang muncul karena struktur MINLP diatasi dengan teknik *Benders Decomposition* — sebuah metode dekomposisi yang memisahkan masalah menjadi *master problem* (keputusan stratejik lokasi & kapasitas) dan *subproblem* (keputusan operasional alokasi aliran). Pendekatan serupa juga diterapkan oleh Zhang, Li, & Ren (2024) pada konteks *reverse supply chain* dengan mempertimbangkan keputusan kualitas (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)), yang memberikan validasi metodologis lintas-sektor mengenai efektivitas dekomposisi Benders untuk masalah optimasi jaringan berskala industri.

Dalam konteks Indonesia sebagai negara dengan konsumsi susu per kapita yang terus meningkat (sekitar 16,9 kg/kapita/tahun menurut Badan Pusat Statistik), penerapan kerangka ini memiliki relevansi langsung bagi perusahaan seperti PT Frisian Flag Indonesia, PT Ultrajaya Milk Industry, dan PT Indofood CBP Sukses Makmur (termasuk divisi dairy). Industri kecil-menengah (IKM) susu di Jawa Timur dan Jawa Tengah juga memerlukan formulasi yang scalable untuk merancang klaster koperasi susu yang efisien.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan dan Notasi

Model jaringan rantai pasok produk susu Lead Researchers (2023) mempertimbangkan empat lapisan (*echelons*): 

- **Himpunan supplier** (peternakan sapi perah / koperasi susu): $i \in I$
- **Himpunan processing plant** (pabrik pengolahan): $j \in J$
- **Himpunan distribution center** (gudang dingin): $k \in K$
- **Himpunan customer zone** (zona permintaan零售商): $l \in L$
- **Himpunan produk**: $p \in P$ (misal $p_1$ = UHT milk, $p_2$ = pasteurized milk, $p_3$ = yogurt, $p_4$ = keju)

Parameter-parameter kunci:

$$a_i^{cap} = \text{kapasitas pasok susu segar dari supplier } i \text{ (liter/hari)}$$

$$b_j^{cap} = \text{kapasitas olah processing plant } j \text{ (liter/hari)}$$

$$d_{k,l,p} = \text{demand produk } p \text{ dari DC } k \text{ ke customer zone } l \text{ (liter/hari)}$$

$$c_{i,j,p}^{tr} = \text{biaya transportasi dari } i \text{ ke } j \text{ untuk produk } p \text{ (Rp/liter)}$$

$$f_j = \text{fixed cost pembangunan processing plant } j \text{ (Rp)}$$

$$s_j = \text{emisi CO}_2 \text{ per liter diolah di plant } j \text{ (kg CO}_2\text{e/liter)}$$

### 2.2 Fungsi Tujuan Multi-Objektif

Mengikuti kerangka Lead Researchers (2023) dan paralel dengan formulasi Zhang et al. (2024) untuk reverse supply chain, digunakan metode *$\varepsilon$-constraint* untuk mengkonversi masalah multi-objektif menjadi seri masalah *single-objective* berparameter:

**Fungsi Tujuan 1 — Minimasi Total Biaya Jaringan ($Z_1$):**

$$\min Z_1 = \sum_{j \in J} f_j \, y_j + \sum_{i \in I} \sum_{j \in J} \sum_{p \in P} c_{i,j,p}^{tr} \, x_{i,j,p} + \sum_{j \in J} \sum_{k \in K} \sum_{p \in P} c_{j,k,p}^{tr} \, z_{j,k,p} + \sum_{k \in K} \sum_{l \in L} \sum_{p \in P} c_{k,l,p}^{tr} \, w_{k,l,p}$$

dengan $y_j \in \{0,1\}$ adalah variabel biner pembukaan plant, sedangkan $x_{i,j,p}$, $z_{j,k,p}$, $w_{k,l,p}$ adalah variabel kontinu aliran (liter/hari).

**Fungsi Tujuan 2 — Minimasi Emisi Karbon ($Z_2$):**

$$\min Z_2 = \sum_{j \in J} \sum_{k \in K} \sum_{p \in P} e_{j,k,p}^{tr} \, z_{j,k,p} + \sum_{k \in K} \sum_{l \in L} \sum_{p \in P} e_{k,l,p}^{tr} \, w_{k,l,p} + \sum_{j \in J} s_j \, Q_j$$

dimana $e^{tr}$ adalah faktor emisi per liter-kilometer untuk refrigerated transport (rata-rata 0,062 kg CO₂e/(liter·km) untuk truk refrigerated 4–6 ton).

**Fungsi Tujuan 3 — Maksimasi Freshness Index ($Z_3$):**

$$\max Z_3 = \sum_{k \in K} \sum_{l \in L} \sum_{p \in P} \left(1 - \frac{T_{k,l,p}^{transit} + T_{k,l,p}^{hold}}{\text{SL}_p}\right) w_{k,l,p}$$

dimana $T^{transit}$ adalah waktu transit (hari), $T^{hold}$ adalah waktu simpan di DC, dan $\text{SL}_p$ adalah shelf life produk $p$ (misal $\text{SL}_{\text{UHT}} = 180$ hari, $\text{SL}_{\text{pasteurized}} = 7$ hari).

### 2.3 Kendala (Constraints)

**Kendala kapasitas supplier:**

$$\sum_{j \in J} \sum_{p \in P} x_{i,j,p} \leq a_i^{cap} \quad \forall i \in I$$

**Kendala kapasitas processing plant (Big-M relaxation):**

$$\sum_{i \in I} \sum_{p \in P} x_{i,j,p} \leq b_j^{cap} \, y_j \quad \forall j \in J$$

**Kendala keseimbangan aliran (flow balance) di processing plant:**

$$\sum_{i \in I} x_{i,j,p} = \sum_{k \in K} z_{j,k,p} \quad \forall j \in J, \, \forall p \in P$$

**Kendala keseimbangan aliran di distribution center:**

$$\sum_{j \in J} z_{j,k,p} = \sum_{l \in L} w_{k,l,p} \quad \forall k \in K, \, \forall p \in P$$

**Kendala pemenuhan demand:**

$$\sum_{k \in K} w_{k,l,p} = d_{l,p} \quad \forall l \in L, \, \forall p \in P$$

**Kendala cold chain integrity (suhu):**

$$\theta_{k,l,p}^{transit} \leq 6°C \quad \forall k, l, p \text{ untuk produk refrigerated}$$

**Kendala non-negativitas dan biner:**

$$x_{i,j,p}, z_{j,k,p}, w_{k,l,p} \geq 0; \quad y_j \in \{0,1\}$$

### 2.4 Formulasi Benders Decomposition

Benders Decomposition (Benders, 1962; diperluas oleh Geoffrion, 1972) mempartisi masalah MINLP menjadi:

**Master Problem (MP) — keputusan stratejik:**

$$\min \sum_{j \in J} f_j \, y_j + \eta$$

dengan $\eta$ adalah variabel yang merepresentasikan nilai optimum dari subproblem, subject to:

$$\eta \geq \sum_{(i,j,p) \in \Omega} \pi_{i,j,p}^{\nu} \left( a_i^{cap} y_j - \sum_{j'} x_{i,j',p} \right) + \text{constant}$$

untuk setiap cut $\nu$ yang dihasilkan dari subproblem (fungsi dual).

**Subproblem (SP) — keputusan operasional:**

Diberikan vektor $y$ dari MP, SP meminimalkan biaya operasional:

$$\min \sum c^{tr} \cdot \text{flow} \quad \text{s.t. kendala operasional}$$

Dual SP menghasilkan *optimality cut* atau *feasibility cut* yang ditambahkan ke MP pada iterasi berikutnya. Konvergensi tercapai ketika *upper bound* (solusi layak dari SP) dan *lower bound* (relaxasi MP) selisihnya kurang dari toleransi $\varepsilon = 10^{-4}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Lead Researchers (2023) di industri mengikuti SOP 7-tahap berikut:

**Tahap 1 — Karakterisasi Jaringan Eksisting (2–4 minggu).** Pemetaan geografis supplier, plant, DC, dan customer zone menggunakan GPS dan WMS (*warehouse management system*). Pengumpulan data primer: kapasitas, demand historis 12 bulan, biaya operasional, dan jejak karbon dari *bill of lading* dan *fuel record*.

**Tahap 2 — Estimasi Parameter & Kalibrasi (1–2 minggu).** Estimasi shelf life efektif, transit time, dan emission factor sesuai standar GHG Protocol Scope 3 untuk dairy.

**Tahap 3 — Konstruksi Model Matematis (1 minggu).** Formulasi MINLP sesuai Section 2, dengan validasi menggunakan teknik *dimensional analysis* dan *extreme condition test* (misal: jika demand = 0, solusi harus trivial).

**Tahap 4 — Implementasi Benders Decomposition (2–3 minggu).** Pemrograman dalam *Python + Pyomo*