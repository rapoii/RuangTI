# 2069 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat dan Daur Ulang Remanufaktur Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (EV) telah menciptakan paradoks industri yang mendesak: sementara elektrifikasi transportasi menurunkan emisi operasional, ia同时也 menghadapi tantangan akhir-hidup (*end-of-life*/EoL) yang masif pada baterai lithium-ion (LiB). Berdasarkan proyeksi industri yang dikontekstualisasikan oleh JIANG & TANG (2025) dalam naskah ICLSE 2024 [DOI: 10.52202/078960-0068], volume baterai pensiun diprediksi akan melampaui 100 GWh secara kumulatif pada dekade mendatang di pasar Cina saja, sementara pasar global berpotensi mencapai jutaan ton selongsong baterai dengan kandungan logam kritis seperti litium, kobalt, nikel, dan mangan. Baterai pensiun ini umumnya masih memiliki State of Health (SoH) sebesar 70–80%, sehingga tidak memenuhi standar otomotif tetapi sangat layak untuk aplikasi sekunder — sebuah fenomena yang disebut *echelon utilization* atau pemanfaatan bertingkat.

Urgensi ekonominya bersifat multidimensional. Pertama, nilai intrinsik material daur ulang baterai pensiun (Li, Co, Ni) sangat fluktuatif dan memiliki strategic value tinggi untuk keamanan rantai pasok mineral. Kedua, kebijakan regulasi seperti EU Battery Regulation 2023/1542, China's *Measures for the Administration of the Recycling and Utilization of New Energy Vehicle Power Batteries*, dan Extended Producer Responsibility (EPR) memaksa Original Equipment Manufacturers (OEM) untuk membangun sistem闭环 (*closed-loop*) yang terstruktur. Ketiga, biaya produksi baterai baru terus meningkat seiring kelangkaan bijih primer grade baterai, menjadikan *echelon utilization* dan *recycling remanufacturing* sebagai strategi profitabilitas yang valid secara finansial.

Konteks operasional yang diangkat JIANG & TANG (2025) memperkenalkan kerangka pemodelan rantai pasok tertutup yang tidak hanya mengalokasikan baterai pensiun ke fasilitas daur ulang, tetapi secara eksplisit mempertimbangkan keputusan stratejik antara tiga alternatif处置: (1) *echelon utilization* untuk aplikasi *second-life* seperti penyimpanan energi stasioner (*stationary energy storage*/SES), telekomunikasi, atau lampu jalan pintar; (2) *remanufacturing* untuk memulihkan sel menjadi modul baterai baru; dan (3) *recycling* untuk ekstraksi material. Ketiga处置 ini memiliki margin, kapasitas, dan ambang SoH yang berbeda, sehingga keputusan alokasi menjadi masalah optimasi jaringan yang kompleks.

Studi pelengkap oleh Shin, Kim & Jeong (2024) [DOI: 10.2139/ssrn.4934197] menambahkan dimensi ketidakpastian (*uncertainty*) yang krusial: tingkat pengembalian baterai dari konsumen tidak deterministik karena dipengaruhi perilaku konsumen, tingkat degradasi aktual, yield rate fasilitas, dan gangguan rantai pasok. Paper ini mengusulkan formulasi robust optimization yang melindungi keputusan jaringan terhadap worst-case realization dari parameter ketidakpastian, sehingga keputusan investasi fasilitas menjadi resilient dalam konteks ekonomi sirkular. Sinergi antara kedua naskah ini memberikan landasan bagi desain rantai pasok baterai pensiun yang secara simultan optimal secara ekonomi, robust terhadap ketidakpastian, dan sesuai dengan kerangka regulasi multi-yurisdiksi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan Rantai Pasok Tertutup

Model JIANG & TANG (2025) mendefinisikan jaringan multi-echelon dengan himpunan node berikut:

- $I = \{1, 2, \ldots, m\}$ — himpunan titik koleksi baterai pensiun (collection centers)
- $J = \{1, 2, \ldots, n\}$ — himpunan pusat pemanfaatan bertingkat (echelon utilization centers)
- $K = \{1, 2, \ldots, p\}$ — himpunan fasilitas remanufaktur
- $L = \{1, 2, \ldots, q\}$ — himpunan pabrik daur ulang material

### 2.2 Variabel Keputusan

$$x_{ij} \geq 0 \quad \text{(aliran baterai pensiun dari koleksi } i \text{ ke echelon center } j\text{)}$$

$$y_{jk} \geq 0 \quad \text{(aliran baterai dari echelon center } j \text{ ke remanufaktur } k\text{)}$$

$$z_{kl} \geq 0 \quad \text{(aliran baterai dari remanufaktur } k \text{ ke daur ulang } l\text{)}$$

$$w_{il} \geq 0 \quad \text{(aliran langsung baterai pensiun dari koleksi } i \text{ ke daur ulang } l\text{)}$$

### 2.3 Fungsi Tujuan: Maksimisasi Profit Total

Fungsi tujuan memaksimumkan pendapatan dari penjualan baterai *second-life*, modul remanufaktur, dan material daur ulang, dikurangi biaya transportasi, biaya operasional fasilitas, dan biaya tetap pembukaan fasilitas:

$$\max Z = \underbrace{\sum_{j \in J} \pi_j^{E} \sum_{i \in I} x_{ij}}_{\text{pendapatan echelon}} + \underbrace{\sum_{k \in K} \pi_k^{R} \sum_{j \in J} y_{jk}}_{\text{pendapatan remanufaktur}} + \underbrace{\sum_{l \in L} \pi_l^{C} \left(\sum_{k \in K} z_{kl} + \sum_{i \in I} w_{il}\right)}_{\text{pendapatan daur ulang}}$$

$$- \underbrace{\sum_{i \in I} \sum_{j \in J} c_{ij}^{IE} x_{ij} - \sum_{j \in J} \sum_{k \in K} c_{jk}^{ER} y_{jk} - \sum_{k \in K} \sum_{l \in L} c_{kl}^{RC} z_{kl} - \sum_{i \in I} \sum_{l \in L} c_{il}^{IC} w_{il}}_{\text{biaya transportasi}}$$

$$- \underbrace{\sum_{j \in J} f_j^{E} u_j + \sum_{k \in K} f_k^{R} v_k + \sum_{l \in L} f_l^{C} s_l}_{\text{biaya tetap fasilitas}}$$

di mana:
- $\pi_j^{E}, \pi_k^{R}, \pi_l^{C}$ = harga jual per unit baterai untuk echelon/remanufaktur/daur ulang
- $c_{ij}^{IE}, c_{jk}^{ER}, c_{kl}^{RC}, c_{il}^{IC}$ = biaya transportasi antar-node
- $u_j, v_k, s_l \in \{0,1\}$ = variabel biner pembukaan fasilitas
- $f_j^{E}, f_k^{R}, f_l^{C}$ = biaya tetap pembukaan fasilitas

### 2.4 Kendala-Kendala Utama

**Kendala keseimbangan aliran di setiap node:**

$$\sum_{j \in J} x_{ij} + \sum_{l \in L} w_{il} = Q_i \quad \forall i \in I$$

$$\sum_{i \in I} x_{ij} = \sum_{k \in K} y_{jk} \quad \forall j \in J$$

$$\sum_{j \in J} y_{jk} = \sum_{l \in L} z_{kl} \quad \forall k \in K$$

**Kendala ambang State of Health (SoH):**

$$SoH_i \cdot \sum_{j \in J} x_{ij} \geq SoH^{min,E} \sum_{j \in J} x_{ij} \quad \text{(untuk alokasi echelon)}$$

di mana $SoH^{min,E}$ adalah SoH minimum (umumnya 0,60–0,70) untuk aplikasi *second-life*.

**Kendala kapasitas:**

$$\sum_{i \in I} x_{ij} \leq Cap_j^{E} \cdot u_j \quad \forall j \in J$$

$$\sum_{j \in J} y_{jk} \leq Cap_k^{R} \cdot v_k \quad \forall k \in K$$

**Kendala ketidakpastian (Robust Counterpart, mengikuti Shin et al. 2024):**

Untuk menangani ketidakpastian tingkat pengembalian $\tilde{Q}_i$ yang berada dalam *budget uncertainty set* $\mathcal{U}$:

$$\mathcal{U} = \left\{ \tilde{Q}_i : Q_i^0 - \hat{Q}_i \leq \tilde{Q}_i \leq Q_i^0 + \hat{Q}_i, \; \sum_{i \in I} \frac{|\tilde{Q}_i - Q_i^0|}{\hat{Q}_i} \leq \Gamma \right\}$$

dengan $\Gamma \in [0, |I|]$ sebagai parameter konservatisme. Robust counterpart dari kendala keseimbangan adalah:

$$\sum_{j \in J} x_{ij} + \sum_{l \in L} w_{il} \geq Q_i^0 + \hat{Q}_i \cdot \theta_i \quad \forall i \in I, \; \theta_i \in \{0,1\}$$

dengan auxiliary variabel $\theta_i$ yang dipilih untuk skenario worst-case.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti prosedur operasional terstruktur yang diadaptasi dari metodologi JIANG & TANG (2025) dan best-practice Shin et al. (2024):

**Tahap 1 — Karakterisasi & Klasifikasi Baterai Pensiun (T+0):**
Setiap baterai pensiun yang masuk ke collection center menjalani pengujian non-destruktif: pengukuran kapasitas, impedansi, dan State of Health menggunakan *Battery Management System* (BMS) reader. Baterai diklasifikasikan ke Grade A ($SoH \geq 0{,}80$, layak