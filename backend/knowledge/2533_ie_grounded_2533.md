# 2533 — Strategi Rantai Pasok Tertutup untuk Pemanfaatan Easingan (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas: Integrasi Model Manajemen Pengembalian untuk Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (Electric Vehicle/EV) global yang diproyeksikan menembus 245 juta unit pada 2030 (IEA, 2024) menimbulkan konsekuensi struktural berupa ledakan volume *retired power battery* (baterai daya pensiun) yang harus dikelola dalam horizon 5–15 tahun ke depan. Karakteristik baterai lithium-ion (LIB) yang menurun kapasitasnya hingga 70–80% dari *State of Health* (SOH) awal setelah 1.000–2.000 siklus pengosongan-pengisian menuntut strategi *end-of-life* (EoL) yang tidak dapat lagi mengandalkan satu pendekatan tunggal. JIANG Lin & TANG Lidan (2025) dalam proceeding ICLSE 2024 ([DOI: 10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) mengidentifikasi bahwa瓶颈 utama (bottleneck) rantai pasok baterai bekas bukan pada aspek daur ulang material (recycling) semata, melainkan pada **koordinasi keputusan stratejik** antara pemanfaatan easingan (*echelon utilization*/EU) untuk aplikasi sekunder—seperti *stationary energy storage system* (SESS), lampu jalan pintar, dan telekomunikasi—dengan jalur remanufaktur yang memulihkan sel-sel layak pakai ke standar OEM (*Original Equipment Manufacturer*). Koordinasi ini krusial karena kedua jalur saling bersaing untuk mendapatkan inventaris baterai pensiun dengan profil SOH yang berbeda, dan keputusan yang tidak terkoordinasi akan menimbulkan *opportunity cost* signifikan.

Urgensi operasional makin terasa ketika dimasukkan dimensi regulasi. Arahan Uni Eropa *Battery Regulation (EU) 2023/1542* yang efektif 2027 mensyaratkan *recycled content* minimal 16% kobalt, 6% litium, dan 6% nikel pada baterai baru, ditambah target *collection rate* 100% baterai portabel pada 2030. Regulasi paralel di Tiongkok (*GB/T 34014-2017*) dan Indonesia (*Permen ESDM No. 2/2023*) menetapkan *extended producer responsibility* (EPR) yang menempatkan manufaktur sebagai penanggung jawab finansial seluruh siklus hidup baterai. Dalam konteks inilah JIANG & TANG (2025) memformulasikan arsitektur *closed-loop supply chain* (CLSC) tiga-arah (*forward*, *reverse*, dan *remanufacturing loop*) yang meniru sekaligus menggeneralisasi model robust yang dikembangkan oleh Shin, Kim & Jeong (2024) untuk konteks return management sistem di ekonomi sirkular ([DOI: 10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). Kontribusi orisinal paper ICLSE 2024 adalah memasukkan **ambang batas kapasitas pemrosesan** (*processing capacity threshold*) pada fasilitas echelon dan *recycling hub*, yang selama ini diabaikan pada model CLSC baterai konvensional. Paper ini juga mengusulkan fungsi tujuan hierarkis yang memprioritaskan *echelon utilization* (berbiaya rendah dan emisi rendah) sebelum mengarahkan residu ke *pyrometallurgical*/*hydrometallurgical* recycling. Implikasinya terhadap industri manufaktur baterai Indonesia—terutama proyek baterai PT Industri Baterai Indonesia (IBC) di Karawang dengan kapasitas 50 GWh/tahun—adalah perlunya master plan CLSC yang tidak terpisah dari desain lini produksi OEM, melainkan terintegerasi sejak *capex* planning.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Tiga-Lapis

Model JIANG & TANG (2025) mempertimbangkan jaringan dengan himpunan node $i \in I$ (pusat OEM/manufaktur), $j \in J$ (pusat distribusi regional), $k \in K$ (fasilitas echelon utilization), $l \in L$ (pabrik remanufaktur), dan $m \in M$ (daur ulang material). Arus maju (*forward flow*) mengirim baterai baru dari OEM ke pelanggan akhir, sedangkan arus balik (*reverse flow*) mengembalikan baterai pensiun ke fasilitas pengumpulan. Kapasitas baterai pensiun yang dikembalikan pada periode $t$ mengikuti proses stokastik $\tilde{R}_t$ dengan rata-rata $\mu_R$ dan simpangan baku $\sigma_R$, yang selanjutnya harus dialokasikan ke EU atau remanufaktur berdasarkan ambang SOH $\theta^{EU}$ (umumnya 0,6–0,7).

### 2.2 Fungsi Tujuan Multi-Obyektif

JIANG & TANG (2025) merumuskan fungsi biaya total CLSC yang diminimkan:

$$
\min \; Z = \underbrace{C^{\text{fwd}}}_{\text{biaya arus maju}} + \underbrace{C^{\text{rev}}}_{\text{biaya logistik balik}} + \underbrace{C^{\text{eu}}}_{\text{biaya echelon}} + \underbrace{C^{\text{reman}}}_{\text{biaya remanufaktur}} + \underbrace{C^{\text{recycle}}}_{\text{biaya daur ulang}} + \underbrace{C^{\text{pen}}}_{\text{penalti lingkungan}}
$$

Setiap komponen biaya diuraikan menjadi:

$$
C^{\text{fwd}} = \sum_{i \in I}\sum_{j \in J} c^{\text{fwd}}_{ij}\, x^{\text{fwd}}_{ij}
$$

$$
C^{\text{rev}} = \sum_{j \in J}\sum_{k \in K \cup L \cup M} c^{\text{rev}}_{jk}\, y_{jk}
$$

$$
C^{\text{eu}} = \sum_{k \in K} \left( f_k \, z_k + \sum_{k \in K} c^{\text{eu}}_k \, u_k \right)
$$

dengan $x^{\text{fwd}}_{ij}$ adalah volume baterai baru yang dikirim OEM $i$ ke distribusi $j$, $y_{jk}$ volume baterai pensiun yang dialihkan ke fasilitas tujuan, $u_k$ jumlah unit yang masuk fasilitas echelon $k$, dan $z_k \in \{0,1\}$ keputusan bineri pembukaan fasilitas. Biaya tetap pembukaan $f_k$ merepresentasikan *depreciation* investasi fasilitas EU.

### 2.3 Model Robust untuk Ketidakpastian Pengembalian

Membangun perluasan kerangka robust Shin, Kim & Jeong (2024) untuk *return management system* CLSC, JIANG & TANG (2025) memperkenalkan *budgeted uncertainty set*:

$$
\mathcal{U} = \left\{ \tilde{R}_t : \sum_{t \in T} \frac{|\tilde{R}_t - \mu_t|}{\sigma_t} \leq \Gamma \right\}
$$

di mana parameter $\Gamma \in [0, |T|]$ merepresentasikan *degree of conservatism* manajer rantai pasok. Semakin tinggi $\Gamma$, semakin defensif (robust) solusi terhadap fluktuasi permintaan/pengembalian. Formulasi robust counterpart dari masalah minimisasi biaya menghasilkan *Mixed Integer Linear Programming* (MILP):

$$
\min_{x,y,z} \; c^{\top} x + \max_{\tilde{R} \in \mathcal{U}} \; b^{\top}(\tilde{R})\, y
$$

dengan $\max_{\tilde{R} \in \mathcal{U}} b^{\top}(\tilde{R}) y = \mu^{\top} y + \Gamma \, \left\| \sigma^{\top} y \right\|_*$, dan $\| \cdot \|_*$ adalah norm dual. Solusi robust mengurangi biaya ekspektasian tetapi menaikkan *worst-case cost*—trade-off klasik robust optimization yang harus disetimbangkan oleh manajer.

### 2.4 Kendala Kapasitas & Keseimbangan Aliran

Kendala utama model:

$$
\sum_{k \in K} u_k + \sum_{l \in L} v_l + \sum_{m \in M} w_m = \tilde{R}_t \quad \forall t
$$

$$
u_k \leq Q^{\text{eu}}_k \, z_k \quad \forall k \in K
$$

$$
v_l \leq Q^{\text{reman}}_l \quad \forall l \in L
$$

$$
w_m \leq Q^{\text{recycle}}_m \quad \forall m \in M
$$

$$
0 \leq u_k, v_l, w_m, y_{jk}
$$

dengan $v_l$ volume input remanufaktur, $w_m$ volume residu ke daur ulang, dan $Q^{\bullet}_{\bullet}$ kapasitas terpasang masing-masing fasilitas. Kendala tambahan berupa *minimum recovery target*:

$$
\sum_{k \in K} u_k + \sum_{l \in L} v_l \geq \rho \, \tilde{R}_t
$$

di mana $\rho$ adalah *recovery rate* minimum yang disyaratkan regulator (misal 70% sesuai EU Battery Regulation).

## 3. Metodologi Rekayasa & SOP Implementasi

JIANG & TANG (2025) menyusun *Standard Operating Procedure* (SOP) 7-tahap untuk implementasi CLSC baterai pensiun yang telah tervalidasi pada studi kasus manufaktur EV di *Yangtze River Delta*:

**Tahap 1 – Pemetaan Inventaris Baterai Pensiun.** Sistem *battery passport* berbasis blockchain (sesuai GB/T 34014 dan EU Battery Passport) mencatat SOH, riwayat siklus, dan provenance sel. Data ini menjadi input untuk pengklasifikasian otomatis baterai masuk ke dalam tiga *bins*: (a) SOH ≥ 0,7 → *direct remanufacturing*; (b) 0,4 ≤ SOH < 0,7 → *echelon utilization*; (c) SOH < 0,4 → *recycling*.

**Tahap 2 – Desain Jaringan Fasilitas.** Menggunakan solver MILP (CPLEX/Gurobi) dengan *time horizon* 5–10 tahun, dilakukan optimasi lokasi fasilitas EU, remanufaktur, dan daur ulang dengan mempertimbangkan jarak ke *collection hubs*, biaya logistik, dan tarif listrik regional. Variabel bineri $z_k, z_l, z_m$ dioptimasi untuk meminimalkan *total landed cost*.

**Tahap 3 – Kalibrasi Parameter Robust ($\Gamma$).** Dilakukan *back-testing* dengan data historis untuk menentukan $\Gamma$ optimal yang menyeimbangkan biaya ekspektasian dan *worst-case cost*. Umumnya $\Gamma \in [3, 5]$ untuk horizon 5 tahun menghasilkan rasio *price of robustness* (PoR) yang dapat diterima.

**Tahap 4 – Reverse Logistics Scheduling.** Penjadwalan truk pengumpulan baterai pensiun dengan *vehicle routing problem* (VRP) berkendala kapasitas dan *time window*, terintegrasi dengan *depot* pengumpulan yang dilengkapi *fire suppression* khusus baterai lithium.

**Tahap 5 – Proses Echelon Utilization.** Pengujian kapasitas (*capacity grading test*), refurbishment ringan (penggantian BMS, *rebalancing* sel), dan sertifikasi ulang untuk aplikasi sekunder seperti *peak shaving* pada industri atau *behind-the-meter storage*.

**Tahap 6 – Remanufaktur atau Daur Ulang.** Sel-sel yang lolos grading di-*disassemble*, sel-sel sehat direkondisi ke standar OEM dan masuk kembali ke lini produksi baru (*closed-loop*), sedangkan residu sel di-*shredding* dan masuk proses *hydrometallurgical* recovery untuk Ni/Co/Li.

**Tahap 7