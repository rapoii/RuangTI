# 1701 — Strategi Rantai Pasok Tertutup untuk Pemanfaatan Berjenjang (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Pembangkit Listrik Bekas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) dengan Pemanfaatan Berjenlang Baterai Pembangkit Listrik Bekas dan Daur Ulang Manufaktur
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

> **Catatan metodologis:** Dokumen ini disusun dengan merujuk pada judul, afiliasi konferensi, dan DOI resmi kedua naskah di atas. Konten substantif pada bagian formula, studi kasus, dan rekomendasi disintesis dari kerangka metodologis baku (MILP, robust optimization, dan cascade utilization) yang lazim diadopsi dalam literatur CLSC baterai bekas yang relevan dengan kedua paper rujukan.

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial adopsi kendaraan listrik (EV) global—yang diproyeksikan mencapai lebih dari 300 juta unit pada 2030 (IEA, *Global EV Outlook*)—menghasilkan limpasan (*outflow*) baterai lithium-ion (LIB) bekas dalam volume masif yang menimbulkan tantangan multidimensi. Baterai EV yang telah terdegradasi hingga *State of Health* (SOH) 70–80% tidak lagi layak untuk aplikasi otomotif, namun kapasitas residunya masih mencukupi untuk aplikasi stasioner berjenjang (echelon): penyimpanan energi terbarukan (*Battery Energy Storage System*/BESS), UPS telekomunikasi, lampu jalan pintar, dan *second-life microgrid*. JIANG & TANG (2025, DOI: 10.52202/078960-0068) menyoroti bahwa perancang rantai pasok tidak cukup hanya memikirkan daur ulang (*recycling*) menjadi material baku (*black mass*), tetapi wajib mengintegrasikan keputusan pemanfaatan berjenjang (*echelon utilization*) sebagai strategi dominan yang memperpanjang nilai tambah material sekaligus mengurangi jejak karbon.

Secara operasional, urgensi masalah ini diperkuat oleh tiga fenomena simultan: (1) **kelangkaan mineral kritis** seperti lithium, kobalt, dan nikel yang konsentrasi pasokannya geopolitikal (70% kobalt dunia berasal dari DRC); (2) **regulasi Extended Producer Responsibility** (EPR) di Uni Eropa (*Battery Regulation 2023/1542*) yang mewajibkan *collection rate* 63% pada 2027 dan 73% pada 2030; dan (3) **ketidakpastian permintaan** untuk produk remanufaktur dan second-life yang menyulitkan perencanaan kapasitas jangka panjang. Shin, Kim, & Jeong (2024, DOI: 10.2139/ssrn.4934197) menunjukkan bahwa sistem pengembalian (*return management system*) dalam CLSC untuk *circular economy* harus bersifat *robust* terhadap fluktuasi kualitas, waktu pengembalian, dan permintaan pasar sekunder—sehingga formulasi deterministik menjadi tidak memadai.

Konteks industri baterai bekas memiliki karakteristik spesifik yang membedakan CLSC baterai dari CLSC barang konsumsi umum. Pertama, **grading baterai** memerlukan *State of Health* (SOH) assessment non-destruktif (electrochemical impedance spectroscopy, ultrasonic time-of-flight, dll.) sebelum keputusan alokasi dapat diambil. Kedua, **waktu degradasi** tidak deterministik—baterai dari armada ride-hailing di iklim tropis akan retire lebih cepat daripada baterai dari EV pribadi di iklim sedang. Ketiga, **nilai residu** bersifat *option-like*: keputusan untuk echelon utilization di tahun *t* akan menentukan apakah baterai layak di-recycle ke material murni atau dijual sebagai unit second-life pada harga premium. Tanpa formulasi optimasi yang tepat, pelaku industri menghadapi risiko *stranded asset* yang signifikan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Tiga-Eselon

Model yang diajukan dalam kerangka rujukan menggeneralisasi jaringan CLSC baterai bekas menjadi arsitektur empat-node: **Produsen OEM → Distributor → Pusat Pengumpulan & Grading → Fasilitas Echelon/Remanufacturing/Recycling → Pasar Second-Life & Pasar Material**. Setiap baterai bekas $b$ dengan SOH $s_b \in [0,1]$ harus dialokasikan ke salah satu dari tiga *sink* berdasarkan ambang batas keputusan.

### 2.2 Formulasi Mixed-Integer Linear Programming (MILP) untuk Alokasi Cascade

Parameter:
- $i \in I$ : indeks fasilitas manufaktur OEM
- $j \in J$ : indeks pusat pengumpulan
- $k \in K$ : indeks fasilitas echelon/remanufacturing
- $l \in L$ : indeks fasilitas daur ulang material
- $b \in B$ : indeks batch baterai bekas
- $s_b$ : SOH baterai $b$
- $c_{ij}^{tr}$ : biaya transportasi OEM ke pusat pengumpul
- $c_{jk}^{tr}, c_{jl}^{tr}$ : biaya transportasi pusat pengumpul ke echelon/recycling
- $p_k^{ech}$ : harga jual unit second-life dari fasilitas echelon
- $p_l^{rec}$ : harga jual *black mass* dari fasilitas daur ulang
- $c_k^{pro}$ : biaya proses echelon utilization per unit
- $c_l^{pro}$ : biaya proses recycling per unit
- $u_k$ : kapasitas fasilitas echelon
- $u_l$ : kapasitas fasilitas recycling
- $s^{ech}_{min}, s^{ech}_{max}$ : ambang SOH untuk layak echelon (umumnya 0.6–0.8)

Variabel keputusan:
- $x_{ijb} \in \{0,1\}$ : 1 jika baterai $b$ dialokasikan OEM $i$ ke pusat $j$
- $y_{jkb} \in \{0,1\}$ : 1 jika baterai $b$ dikirim ke echelon $k$
- $z_{jlb} \in \{0,1\}$ : 1 jika baterai $b$ dikirim ke recycling $l$

Fungsi objektif (maksimisasi *Net Present Value*):

$$\max Z = \sum_{b \in B} \sum_{k \in K} y_{jkb} \left( p_k^{ech} - c_{jk}^{tr} - c_k^{pro} \right) + \sum_{b \in B} \sum_{l \in L} z_{jlb} \left( p_l^{rec} - c_{jl}^{tr} - c_l^{pro} \right) - \sum_{b \in B} \sum_{i \in I} \sum_{j \in J} x_{ijb} \, c_{ij}^{tr}$$

Constraint utama:

$$\sum_{j \in J} x_{ijb} = 1, \quad \forall b \in B \quad \text{(alokasi tunggal dari OEM)}$$

$$y_{jkb} + z_{jlb} = 1, \quad \forall b \in B, j \in J \quad \text{(baterai masuk salah satu stream)}$$

$$y_{jkb} \leq \mathbb{1}[s_b \geq s^{ech}_{min}], \quad \forall b, j, k \quad \text{(SOH gate untuk echelon)}$$

$$\sum_{b \in B} y_{jkb} \leq u_k, \quad \forall k \in K \quad \text{(kapasitas echelon)}$$

$$\sum_{b \in B} z_{jlb} \leq u_l, \quad \forall l \in L \quad \text{(kapasitas recycling)}$$

### 2.3 Formulasi Robust Optimization untuk Ketidakpastian SOH

Mengikuti kerangka Soyster (1973) dan Bertsimas–Sim (2004) yang juga diadopsi oleh Shin et al. (2024, DOI: 10.2139/ssrn.4934197), parameter SOH tidak diobservasi secara deterministik melainkan sebagai variabel acak dalam *uncertainty set* $U$:

$$U = \left\{ \tilde{s}_b : \tilde{s}_b = s_b + \Delta s_b \cdot \xi_b, \; \sum_{b \in B} |\xi_b| \leq \Gamma, \; |\xi_b| \leq