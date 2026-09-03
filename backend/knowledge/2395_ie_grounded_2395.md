# 2395 — EDA Solution untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Multi-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami perubahan paradigma fundamental yang ditandai oleh transisi dari pendekatan *monolithic System-on-Chip* (SoC) menuju arsitektur *disaggregated chiplet* dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan. Pertama, perlambatan efektivitas *Moore's Law* yang dicirikan oleh naiknya biaya fabrikasi node先进技术 di bawah 5 nm melampaui ambang USD 300 juta per *wafer*-set (Roze & Gerber, 2026). Kedua, diversifikasi beban kerja komputasi — dari AI generatif, *edge inference*, hingga otomotif otonom — yang menuntut heterogenitas material (CMOS logika, HBM memori, fotonik silikon, GaN daya) dalam satu kemasan. Ketiga, kebutuhan akan *time-to-market* yang agresif, di mana penggunaan *chiplet* yang telah terverifikasi memungkinkan perusahaan menyingkat siklus desain dari 24–36 bulan menjadi 12–18 bulan (Lau, 2023).

Roze dan Gerber (2026) dalam paparannya di *ICEP-HBS Symposium* menekankan bahwa kunci keberhasilan arsitektur chiplet bukan semata pada proses fabrikasi, melainkan pada kematangan rantai alat *Electronic Design Automation* (EDA). Tanpa *toolchain* EDA yang mampu menangani partisi die, verifikasi lintas-domain, dan optimasi termal-elektrik secara koheren, manfaat *yield* dan fleksibilitas heterogen tidak dapat direalisasikan. Sejalan dengan itu, Lau (2023) mendokumentasikan bahwa teknologi *Cu-Cu hybrid bonding* dengan pitch interkoneksi yang telah turun ke skala 3–10 µm — bahkan mendekati 1 µm pada generasi terkini — memungkinkan densitas I/O per milimeter persegi melampaui 10.000, sebuah lompatan yang tidak mungkin dicapai dengan solder bump konvensional.

Secara ekonomi, pasar chiplet global diproyeksikan tumbuh pada CAGR lebih dari 40% sepanjang dekade ini, didorong oleh adopsi *Universal Chiplet Interconnect Express* (UCIe) sebagai standar terbuka. Dari perspektif *Industrial Engineering*, fenomena ini memunculkan tantangan optimasi multi-dimensi: alokasi fungsi ke chiplet optimal, penjadwalan kapasitas *wafer*, minimisasi biaya per *known good die* (KGD), dan perancangan SOP verifikasi yang dapat menekan *escape rate* di bawah 10 ppm. Urgensi ini menjadi justifikasi utama mengapa modul 2395 diangkat sebagai kompetensi spesialis dalam RuangTI.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Partisi dan Prediksi Interkoneksi (Rent's Rule)

Landasan kuantitatif pertama adalah generalisasi *Rent's Rule* untuk arsitektur chiplet. Untuk sebuah paket yang terdiri dari $N_c$ chiplet, jumlah pin inter-chiplet $T$ dapat diprediksi oleh:

$$T = K \cdot \left(\sum_{i=1}^{N_c} A_i\right)^{p}$$

dengan $A_i$ luas gerbang efektif chiplet ke-$i$, $K$ konstanta empiris (umumnya 1,0–4,0 untuk blok logika), dan eksponen $p \in [0,5; 0,75]$ untuk arsitektur well-partitioned. Roze dan Gerber (2026) menunjukkan bahwa ketika pitch *hybrid bonding* turun dari $40\ \mu m$ ke $3\ \mu m$, kapasitas $T$ efektif naik hampir dua ordo magnitudo, mengubah total panjang kawat global dan profil parasitik RC secara fundamental.

### 2.2 Resistansi Termal Through-Silicon Via (TSV)

Untuk TSV silikon dengan diameter $d_{tsv}$, tinggi $h_{tsv}$, dan konduktivitas termal efektif $\lambda_{tsv}$, resistansi termal radial terhadap *heat spreader* dimodelkan sebagai:

$$R_{th,tsv} = \frac{\ln\!\left(\dfrac{h_{tsv}}{d_{tsv}/2}\right)}{2\pi \lambda_{tsv} h_{tsv}}$$

Untuk nilai tipikal $d_{tsv} = 10\ \mu m$, $h_{tsv} = 100\ \mu m$, dan $\lambda_{tsv} = 120\ \text{W/m·K}$ (tembaga tersinterisasi), diperoleh $R_{th,tsv} \approx 6{,}2\ \text{K/W per TSV}$. Jika sebuah chiplet menggunakan $n_{tsv} = 5.000$ TSV paralel, resistansi paralel termal efektif menjadi $R_{th,eff} \approx 1{,}24 \times 10^{-3}\ \text{K/W}$ — turun dua orde magnitudo dibanding satu TSV tunggal dan menunjukkan mengapa kekarifan densitas TSV adalah *enabler* utama 3D-IC (Lau, 2023).

### 2.3 Model Hasil (Yield) Multi-Chiplet

Karena setiap chiplet harus lulus uji *Known Good Die* sebelum integrasi, yield paket keseluruhan $Y_p$ dapat dimodelkan sebagai perkalian hasil-hasil diskrit:

$$Y_p = \prod_{i=1}^{N_c} Y_{KGD,i} \cdot Y_{assembly}$$

Untuk paket 4-chiplet dengan $Y_{KGD,i} = 0{,}92$ dan $Y_{assembly} = 0{,}97$:

$$Y_p = (0{,}92)^4 \times 0{,}97 \approx 0{,}689 \quad (\text{atau } 68{,}9\%)$$

Jika dibandingkan dengan *monolithic die* setara berukuran $4 \times A_{chiplet}$ dengan yield $Y_{mono} = e^{-A \cdot D_0}$ dan *defect density* $D_0 = 0{,}005\ \text{cm}^{-2}$, untuk luas total $4 \times 1{,}5\ \text{cm}^2 = 6\ \text{cm}^2$:

$$Y_{mono} = e^{-6 \times 0{,}005} = e^{-0{,}03} \approx 0{,}970$$

Namun, setelah koreksi untuk *defect clustering* dengan distribusi *negative binomial* dan faktor partisi, yield riil monolitik turun ke 60–72%. Dalam banyak skenario praktis, *yield penalty* arsitektur chiplet diimbangi atau dilewati oleh kombinasi: (a) penggunaan *node* proses yang lebih murah per chiplet, (b) kemampuan membaurkan *redundancy*, dan (c) toleransi terhadap kekarifan cacat antar *layer*.

### 2.4 Optimasi Multi-Obyektif Co-Design

Formulasi umum yang digunakan Roze dan Gerber (2026) untuk optimasi EDA co-design chiplet adalah:

$$\min_{\mathbf{x}} \left\{ f_1(\mathbf{x}) = P_{diss}(\mathbf{x}), \ f_2(\mathbf{x}) = C_{BOB}(\mathbf{x}), \ f_3(\mathbf{x}) = T_{j,max}(\mathbf{x}) \right\}$$

$$\text{subject to} \quad \mathbf{g}(\mathbf{x}) \leq 0,\ \mathbf{h}(\mathbf{x}) = 0$$

dengan $\mathbf{x}$ vektor keputusan (partisi, *floorplan*, *bonding pitch*, jumlah TSV), $P_{diss}$ disipasi daya, $C_{BOB}$ biaya *Bill-of-Bounds*, dan $T_{j,max}$ suhu *junction* maksimum yang dibatasi pada 85°C untuk grade komersial.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menyusun SOP desain chiplet dalam tujuh tahap yang menjadi kerangka acuan industri:

1. **Spesifikasi Sistem & Analisis Rent's Rule.** Definisikan throughput target, *bandwidth* memori, dan protokol interkoneksi (UCIe, BoW, OpenHBI). Estimasi kebutuhan I/O per chiplet menggunakan model $T = K \cdot A^p$ untuk mencegah *bottleneck* interkoneksi.

2. **Partisi Logika-Fisik.** Gunakan algoritma *min-cut hypergraph* dan *simulated annealing* untuk mempartisi RTL menjadi sub-modul yang akan menjadi chiplet individual. Kriteria partisi: keseimbangan termal, *yield* per chiplet, dan IP reuse.

3. **Floorplanning 2.5D/3D & Penempatan TSV.** Lakukan *co-floorplanning* antara chiplet aktif dan *interposer* atau *bridge die*. Optimasi lokasi TSV meminimalkan gradient termal:

$$\min \sum_{k=1}^{N_{tsv}} \alpha_k \left| T_k - T_{target} \right|^2$$

4. **Place & Route Lintas-Domain.** Lakukan *global routing* dengan dukungan *bump assignment* otomatis pada pitch sub-10 µm sesuai aturan *hybrid bonding*.

5. **Verifikasi Hierarkis.** Validasi tiga lapisan: (i) *intra-chiplet* DRC/LVS, (ii) *inter-chiplet* protocol compliance (UCIe compliance), (iii) *package-level* multi-fisika (termal, EMI, *signal integrity*).

6. **Analisis Termal & Termo-Mekanik.** Jalankan solver coupled CFD-FEA dengan *boundary condition* $T_{ambient