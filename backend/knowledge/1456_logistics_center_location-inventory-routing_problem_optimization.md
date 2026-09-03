# 1456 — Optimasi LIRP (Location-Inventory-Routing Problem) dan Dekomposisi Dantzig-Wolfe untuk Sistem Logistik Multi-Eselon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Logistics Center Location-Inventory-Routing Problem Optimization: A Systematic Review Using PRISMA Method
**Jurnal & Sitasi Utama:** Lihua Liu, Lai Soon Lee, Hsin‐Vonn Seow (2022). *Sustainability*. DOI: [https://doi.org/10.3390/su142315853](https://doi.org/10.3390/su142315853)
**Sitasi Pendukung:** Turganzhan Velyamov, A. Kim, Olga Manankova (2024). *International Journal of Advanced Computer Science and Applications*. DOI: [https://doi.org/10.14569/ijacsa.2024.01507113](https://doi.org/10.14569/ijacsa.2024.01507113)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan logistik di era industri 4.0 tidak lagi dapat dipisahkan menjadi subsistem yang berdiri sendiri. Liu, Lee, dan Seow (2022) dalam *Sustainability* menjelaskan bahwa model keputusan logistik tradisional cenderung mempelajari tiga keputusan secara terpisah: penentuan lokasi pusat distribusi (*facility location problem*), manajemen persepsi barang (*inventory management*), dan penjadwalan rute kendaraan (*vehicle routing problem*). Ketiga subsistem ini saling berinteraksi melalui variabel keputusan bersama, seperti tingkat layanan pelanggan (*service level*), kapasitas gudang, biaya tetap (*fixed cost*) pembukaan fasilitas, biaya transportasi per kilometer, dan biaya simpan per unit per periode. Oleh karena itu, integrasi ketiganya dalam satu kerangka keputusan—yang selanjutnya disebut sebagai *Logistics Location-Inventory-Routing Problem* (LIRP)—menjadi kebutuhan strategis bagi perusahaan manufaktur, distribusi *fast-moving consumer goods* (FMCG), dan operator *e-commerce* berskala besar. Studi PRISMA yang dilakukan oleh Liu dkk. (2022) meninjau 112 artikel ilmiah terindeks pada sepuluh basis data sitasi internasional (Scopus, Web of Science, IEEE Xplore, dan lain-lain) sepanjang periode 2010–2021, dan menemukan bahwa 68% artikel menyoroti masalah multi-periode multi-produk sebagai kasus paling representatif dalam rantai pasok modern.

Urgensi ekonominya dapat dihitung. McKinsey Global Institute memperkirakan bahwa biaya logistik menyumbang sekitar 8–10% dari PDB di negara berkembang, sementara di negara maju seperti Amerika Serikat angkanya mencapai 8% atau setara dengan USD 1,6 triliun (Bowersox, Closs, & Cooper, 2020). Kesalahan optimasi lokasi gudang saja dapat menimbulkan inefisiensi 5–15% dari total biaya distribusi. Ketika keputusan lokasi dieksekusi tanpa koordinasi dengan kebijakan inventaris dan rute, *bullwhip effect* dan *stockout* akan menggerus *service level* di bawah ambang 95% yang menjadi standar SLAs (*Service Level Agreements*) pada industri farmasi dan *cold chain*. Konteks ini menegaskan bahwa LIRP bukan sekadar persoalan akademis melainkan alat keputusan manajerial yang memiliki dampak langsung pada profit margin, keberlanjutan lingkungan (melalui pengurangan emisi CO₂ dari rute yang lebih pendek), dan ketahanan rantai pasok. Dekomposisi Dantzig-Wolfe, yang dimodifikasi oleh Velyamov, Kim, dan Manankova (2024) dalam *International Journal of Advanced Computer Science and Applications*, berperan sebagai algoritma pemecah (*solver*) untuk formulasi LIRP berskala besar karena mampu memecah masalah *mixed integer linear programming* (MILP) menjadi *master problem* dan *subproblem* yang lebih tractable. Dengan demikian, kombinasi keduanya—pemodelan LIRP dan dekomposisi Dantzig-Wolfe termodifikasi—merupakan tumpuan (*backbone*) kompetensi spesialis Teknik Industri masa kini.

## 2. Landasan Teori & Formulasi Matematis

Formulasi LIRP menggabungkan tiga sub-permasalahan ke dalam satu model MILP. Notasi parameter yang digunakan mengikuti konvensi Liu dkk. (2022) dan diperkaya dengan modifikasi Velyamov dkk. (2024) untuk keperluan dekomposisi:

### 2.1. Himpunan, Parameter, dan Variabel Keputusan

Misalkan:
- $I = \{1, 2, \dots, m\}$ adalah himpunan kandidat lokasi gudang,
- $J = \{1, 2, \dots, n\}$ adalah himpunan pelanggan,
- $K = \{1, 2, \dots, v\}$ adalah himpunan kendaraan,
- $T = \{1, 2, \dots, \tau\}$ adalah himpunan periode perencanaan.

Parameter:
- $f_i$ = biaya tetap pembukaan gudang $i$,
- $h_i$ = biaya simpan per unit per periode di gudang $i$,
- $c_{ij}$ = biaya transportasi dari gudang $i$ ke pelanggan $j$,
- $d_{jt}$ = permintaan pelanggan $j$ pada periode $t$,
- $Q_i$ = kapasitas gudang $i$,
- $C_k$ = kapasitas kendaraan $k$.

Variabel keputusan:
- $y_i \in \{0, 1\}$ = 1 jika gudang $i$ dibuka, 0 sebaliknya,
- $x_{ijkt} \in \{0, 1\}$ = 1 jika kendaraan $k$ dari gudang $i$ melayani pelanggan $j$ pada periode $t$,
- $q_{ijkt} \geq 0$ = kuantitas yang dikirim dari $i$ ke $j$ oleh kendaraan $k$ di periode $t$,
- $I_{it} \geq 0$ = tingkat inventaris di gudang $i$ pada akhir periode $t$.

### 2.2. Formulasi MILP Terintegrasi

$$
\min Z = \sum_{i \in I} f_i y_i + \sum_{t \in T} \sum_{i \in I} h_i I_{it} + \sum_{t \in T} \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} c_{ij} q_{ijkt}
$$

dengan kendala:

$$
\sum_{i \in I} \sum_{k \in K} q_{ijkt} = d_{jt}, \quad \forall j \in J, \; t \in T \tag{1}
$$

$$
I_{it} = I_{i,t-1} + \sum_{j \in J} \sum_{k \in K} q_{ijkt} - \sum_{j \in J} \sum_{k \in K} q_{ijkt}^{\text{out}}, \quad \forall i \in I, t \in T \tag{2}
$$

$$
\sum_{j \in J} q_{ijkt} \leq C_k x_{ijkt}, \quad \forall i \in I, k \in K, t \in T \tag{3}
$$

$$
I_{it} \leq Q_i y_i, \quad \forall i \in I, t \in T \tag{4}
$$

$$
\sum_{i \in I} y_i \leq p \quad (\text{cardinality constraint}) \tag{5}
$$

$$
x_{ijkt}, y_i \in \{0, 1\}, \quad q_{ijkt}, I_{it} \geq 0 \tag{6}
$$

Persamaan (1) menjamin pemenuhan permintaan, (2) menjamin keseimbangan inventaris, (3) menjamin kapasitas kendaraan, dan (4)–(5) menjamin keterbatasan kapasitas gudang serta batasan jumlah gudang yang dibuka. Formulasi ini berskala besar karena kombinasi variabel biner dan kontinu, sehingga Liu dkk. (2022) melaporkan bahwa lebih dari 73% artikel yang ditinjau menggunakan metode *exact* (Branch-and-Cut, Benders Decomposition) atau *metaheuristic* (Genetic Algorithm, Simulated Annealing, Tabu Search, ALNS) sebagai pendekatan solusi.

### 2.3. Prinsip Dekomposisi Dantzig-Wolfe Termodifikasi

Velyamov, Kim, dan Manankova (2024) menjelaskan bahwa untuk struktur masalah dengan kendala *linking* (penghubung antar-subproblem), formulasi dapat ditulis ulang sebagai:

$$
\min \left\{ \sum_{s \in S} c_s^\top x_s \;\middle|\; Ax_s \leq b_s, \; x_s \in \mathcal{X}_s \right\}
$$

di mana $x_s$ adalah vektor keputusan subproblem $s$, $\mathcal{X}_s$ adalah himpunan layak, dan kendala $Ax_s \leq b$ adalah kendala *linking*. Reformulasi Dantzig-Wolfe menggantikan $x_s$ dengan kombinasi konveks dari *extreme points* $\bar{x}_s^r$:

$$
x_s = \sum_{r \in R_s} \lambda_{sr} \bar{x}_s^r, \quad \sum_{r \in R_s} \lambda_{sr} = 1, \quad \lambda_{sr} \geq 0
$$

*Master problem* (MP) menjadi:

$$
\min \sum_{s \in S} \sum_{r \in R_s} (c_s^\top \bar{x}_s^r) \lambda_{sr}
$$

$$
\text{s.t.} \quad \sum_{s \in S} \sum_{r \in R_s} (A \bar{x}_s^r) \lambda_{sr} \leq b, \quad \sum_{r \in R_s} \lambda_{sr} = 1, \quad \lambda_{sr} \geq 0
$$

Modifikasi Velyamov dkk. (2024) mengurangi jumlah baris (*rows*) pada *coordination problem* dengan mengeliminasi kendala yang *redundan* melalui analisis *dual pricing*, sehingga jumlah iterasi berkurang hingga 35–50% pada studi kasus benchmark. Hal ini krusial ketika LIRP memiliki $\tau \times |I| \times |J| \times |K|$ variabel yang mudah melampaui 10⁶ untuk kasus industri nyata.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka PRISMA yang diadaptasi Liu dkk. (2022) ke dalam SOP rekayasa, prosedur implementasi LIRP-Dantzig-Wolfe untuk pengambilan keputusan rantai pasok terdiri atas delapan tahap:

1. **Karakterisasi masalah dan identifikasi keputusan** — pemetaan horizon perencanaan ($\tau$), varian produk, struktur *echelon* (single-link atau multi-link), tipe permintaan (deterministik/stokastik/fuzzy).
2. **Pengumpulan data spasial dan permintaan** — koordinat GPS pelanggan, kapasitas armada, biaya tetap dan variabel fasilitas, demand forecasting menggunakan ARIMA atau LSTM.
3. **Formulasi MILP terintegrasi** sesuai Persamaan (1)–(6) dengan validasi dimensi dan unit.
4. **Transformasi ke bentuk matriks *block-angular*** — pengelompokan kendala berdasarkan gudang untuk memungkinkan dekomposisi.
5. **Eksekusi Dantzig-Wolfe termodifikasi** — solusi *subproblem* (per gudang) menggunakan simpleks standar, sedangkan *master problem* diselesaikan dengan metode simpleks primal.
6. **Penyisipan kolom (*column generation*)** — iteratif hingga harga dual (*reduced cost*) non-negatif untuk semua kolom.
7. **Konversi *master problem* menjadi MILP** dengan menambahkan *branching rules* (misalnya aturan branching berdasarkan $y_i$).
8. **Verifikasi, *sensitivity analysis*, dan implementasi**.

Alur ini dapat divisualisasikan sebagai proses *feedback loop* antara modul forecasting, modul MILP solver, dan modul keputusan manajerial yang menghasilkan rekomendasi pembukaan gudang, lot size, dan rute armada. Standar industri yang relevan antara lain ISO 28000 (*Supply Chain Security Management*), ISO 9001:2015 untuk dokumentasi proses, serta GRI 308 (kriteria keberlanjutan terkait emisi transportasi).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Studi Kasus

Pertimbangkan jaringan distribusi sebuah perusahaan FMCG di Pulau Jawa dengan tiga kandidat *regional distribution center* (RDC) dan dua puluh pelanggan (retailer). Data parameter sebagai berikut:

| Parameter | Nilai |
|---|---|
| Kandidat gudang | $I = \{A, B, C\}$ dengan $f_A = 180$ juta, $f_B = 210$ juta, $f_C = 150$ juta (IDR) |
| Kapasitas gudang | $Q_A = 600$, $Q_B = 500$, $Q_C = 700$ unit |
| Kapasitas kendaraan | $C_k = 100$ unit untuk $k = 1, \dots, 5$ |
| Permintaan agregat | $\sum_j d_j = 450$ unit (periode tunggal) |
| Biaya transportasi per unit | $c_{Aj} = 1{,}200$, $c_{Bj} = 1{,}000$, $c_{Cj} = 1{,}400$ (IDR/unit, jarak rata-rata 80–120 km) |
| Biaya simpan | $h_i = 250$ IDR/unit |
| Kardinalitas | maksimum $p = 2$ gudang dibuka |

### 4.2. Perhitungan Langkah demi Langkah

**Langkah 1 — Penyaringan opsi:** Kombinasikan tiga gudang dengan $p = 2$, menghasilkan $\binom{3}{2} = 3$ alternatif lokasi: $\{A,B\}, \{A,C\}, \{B,C\}$.

**Langkah 2 — Hitung biaya tetap total:**

$$
F_{AB} = 180 + 210 = 390, \quad F_{AC} = 180 + 150 = 330