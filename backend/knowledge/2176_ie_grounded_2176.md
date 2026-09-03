# 2176 — Rancang Bangun Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy products) merupakan salah satu subsektor manufaktur pangan dengan karakteristik operasional paling kompleks dalam rantai pasok global. Karakteristik tersebut muncul dari sifat intrinsik produk: *highly perishable* (daya simpan pendek pada suhu ruang), variasi mutu bahan baku yang fluktuatif menurut musim, serta ketidakpastian permintaan konsumen yang sensitif terhadap fluktuasi harga dan preferensi gaya hidup sehat. Berdasarkan kerangka kerja yang dipublikasikan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), permasalahan desain jaringan rantai pasok susu tidak cukup dimodelkan sebagai masalah optimasi tunggal (single-objective), melainkan harus memuat minimal tiga dimensi keputusan yang saling berkonflik: minimasi total biaya logistik (transportasi, inventori, dan operasional fasilitas), minimasi emisi karbon (carbon footprint) yang menjadi tuntutan regulatori Uni Eropa maupun pasar ekspor, serta maksimasi tingkat layanan (service level) yang sering dimanifestasikan sebagai minimasi *product lost-sales* akibat kadaluwarsa (*spoilage*).

Urgensi operasional dari topik ini dapat ditelusuri dari beberapa data empiris. Pertama, FAO (2023) melaporkan bahwa sekitar 13–15% susu segar global terbuang pada tahap distribusi karena kegagalan cold chain. Kedua, keputusan lokasi fasilitas (pabrik pengolahan, gudang berpendingin, distribution center) bersifat *capital-intensive* dengan payback period lebih dari tujuh tahun, sehingga kesalahan perancangan jaringan akan menimbulkan *sunk cost* yang signifikan. Ketiga, dengan semakin ketatnya standar ESG (Environmental, Social, Governance), korporasi multinasional seperti Nestlé, Danone, dan FrieslandCampina telah mengadopsi keputusan multi-objektif sebagai kerangka standar dalam *supply chain network design* (SCND). Zhang, Li, dan Ren (2024) dalam artikel komplementer mereka yang dimuat di jurnal peer-review (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperkuat posisi ini dengan menunjukkan bahwa dekomposisi Benders sangat cocok untuk menyelesaikan masalah SCND reverse supply chain yang menggabungkan keputusan kualitas produk, karena subproblem transport bersifat *continuous* sedangkan subproblem investasi fasilitas bersifat *binary* sehingga pemisahan struktur matematis menghasilkan konvergensi yang jauh lebih cepat.

Konteks industri Indonesia menambah dimensi spesifik: dengan lebih dari 200 titik produksi susu segar yang tersebar di Jawa Timur, Jawa Barat, dan Sumatera Utara, serta pola distribusi yang masih menghadapi *first-mile cooling gap*, masalah optimasi jaringan multi-objektif bukan sekadar persoalan akademis melainkan kebutuhan strategis jangka panjang. Oleh karena itu, modul ini menyusun landasan integratif yang menggabungkan kerangka multi-objective mixed-integer linear programming (MO-MILP) Lead Researchers (2023) dengan mekanisme *quality-aware* reverse logistics dari Zhang et al. (2024), agar seorang sarjana teknik industri memiliki perangkat konseptual dan prosedural yang utuh untuk merancang jaringan susu secara optimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Multi-Objektif

Mengikuti notasi Lead Researchers (2023), masalah jaringan rantai pasok susu dimodelkan sebagai berikut. Misalkan:

- $I$ = himpunan pusat pengumpulan susu (raw milk collection centers)
- $J$ = himpunan pabrik pengolahan (processing plants)
- $K$ = himpunan gudang berpendingin (cold storage warehouses)
- $L$ = himpunan zona permintaan (customer zones)
- $T$ = himpunan periode waktu diskret (misal $t = 1,\dots,12$ bulan)

Parameter deterministik yang digunakan:

- $d_{lt}$ = permintaan produk susu di zona $l$ pada periode $t$ (liter)
- $c_{ij}^{raw}$ = biaya transportasi susu mentah dari $i$ ke $j$ (Rp/liter)
- $c_{jkt}^{proc}$ = biaya distribusi produk jadi dari $j$ ke $k$ (Rp/liter)
- $c_{kl}^{dist}$ = biaya last-mile delivery dari $k$ ke $l$ (Rp/liter)
- $h_{kt}$ = biaya holding cost di gudang $k$ (Rp/liter)
- $f_j$ = fixed cost membuka pabrik $j$ (Rp)
- $g_k$ = fixed cost membuka gudang $k$ (Rp)
- $CO_{ij}$ = emisi CO₂ per liter dari segmen $i\to j$ (kgCO₂e/liter)
- $\alpha$ = tingkat kadaluwarsa produk jadi (%/hari)
- $sh_{lt}$ = penalty cost untuk lost-sales (Rp/liter)

Variabel keputusan:

- $x_{ijt} \geq 0$ = volume susu mentah mengalir $i\to j$ di periode $t$
- $y_{jkt} \geq 0$ = volume produk jadi mengalir $j\to k$ di periode $t$
- $z_{klt} \geq 0$ = volume produk mengalir $k\to l$ di periode $t$
- $u_j \in \{0,1\}$ = 1 jika pabrik $j$ dibuka
- $v_k \in \{0,1\}$ = 1 jika gudang $k$ dibuka

### 2.2 Formulasi MO-MILP

Fungsi objektif pertama — Total Biaya Logistik:

$$\min Z_1 = \sum_{t \in T} \left[\sum_{i \in I}\sum_{j \in J} c_{ij}^{raw}\,x_{ijt} + \sum_{j \in J}\sum_{k \in K} c_{jkt}^{proc}\,y_{jkt} + \sum_{k \in K}\sum_{l \in L} c_{kl}^{dist}\,z_{klt} \right]$$
$$+ \sum_{t \in T}\sum_{k \in K} h_{kt}\,I_{kt} + \sum_{j \in J} f_j\,u_j + \sum_{k \in K} g_k\,v_k$$

dengan $I_{kt}$ sebagai tingkat inventori di gudang $k$ pada akhir periode $t$.

Fungsi objektif kedua — Emisi Karbon:

$$\min Z_2 = \sum_{t \in T} \left[\sum_{i,j} CO_{ij}\,x_{ijt} + \sum_{j,k} CO_{jk}\,y_{jkt} + \sum_{k,l} CO_{kl}\,z_{klt} \right]$$

Fungsi objektif ketiga — Service Level (penalty lost-sales):

$$\min Z_3 = \sum_{t \in T}\sum_{l \in L} sh_{lt}\,(d_{lt} - s_{lt})$$

dengan $s_{lt} = \sum_{k \in K} z_{klt}$ adalah penjualan terealisasi.

### 2.3 Kendala (Constraints)

**Keseimbangan aliran susu mentah:**

$$\sum_{i \in I} x_{ijt} = Cap_j^{proc}\,u_j \quad \forall j \in J, t \in T$$

**Konservasi massa di pabrik:**

$$\sum_{i \in I} x_{ijt}\,\eta^{proc} = \sum_{k \in K} y_{jkt} \quad \forall j, t$$

dengan $\eta^{proc}$ adalah rendemen konversi (liter susu jadi per liter susu mentah, tipikal $0{,}85$–$0{,}92$).

**Keseimbangan inventori cold storage:**

$$I_{k,t} = I_{k,t-1} + \sum_{j} y_{jkt} - \sum_{l} z_{klt} - w_{kt} \quad \forall k, t$$

dengan $w_{kt} \geq 0$ adalah volume susu kadaluwarsa.

**Kepuasan permintaan:**

$$s_{lt} \leq d_{lt}, \quad s_{lt} = \sum_{k} z_{klt} \quad \forall l, t$$

**Kapasitas fasilitas:**

$$\sum_{i} x_{ijt} \leq Cap_j^{proc}\,u_j, \quad \sum_{j} y_{jkt} \leq Cap_k^{cs}\,v_k$$

### 2.4 Benders Decomposition

Struktur MILP di atas memiliki *block-angular structure*: keputusan investasi $u_j, v_k$ adalah *binary* (variabel komplikasi/*complicating variables*), sementara keputusan aliran $x, y, z, w, I, s$ adalah *continuous*. Benders (1962) merekomendasikan pemisahan sebagai berikut:

**Master Problem (MP):**

$$\min_{u,v} \; \sum_j f_j u_j + \sum_k g_k v_k + \theta$$

dengan $\theta$ adalah variabel yang merepresentasikan lower bound dari subproblem optimal value, dibatasi oleh *Benders cuts*:

$$\theta \geq \pi^{(r)}_0 + \sum_j \pi^{(r)}_j (Cap_j^{proc} - \sum_j u_j) + \sum_k \pi^{(r)}_k (Cap_k^{cs} - \sum_k v_k) \quad \forall r \in \mathcal{R}$$

dengan $\pi^{(r)}$ adalah dual multipliers dari subproblem iterasi ke-$r$, dan $\mathcal{R}$ adalah himpunan cuts yang dihasilkan.

**Subproblem (SP) untuk fixed $(u^*, v^*)$:**

$$\min Z_{sp} = \sum_t \sum_{i,j} c^{raw}_{ij} x_{ijt} + \dots$$

subjek kepada kendala aliran dan inventori dengan kapasitas difiksasi oleh $(u^*, v^*)$. Jika SP infeasible, *feasibility cut* ditambahkan ke MP; jika finite, *optimality cut* ditambahkan dengan nilai dualnya.

Zhang et al. (2024) memperluas arsitektur ini dengan memperkenalkan **variabel kualitas** $q_{jt} \in [0,1]$ (skor mutu produk yang dipengaruhi waktu tunggu sejak panen). Subproblem mereka menambahkan kendala:

$$q_{j,t} \leq q_{j,t-1} - \delta\,(t - t^{harv}_i) + M\,(1 - x_{ijt}/X_{ijt})$$

sehingga degradasi mutu linear terhadap waktu dan dependent pada volume pengiriman.

### 2.5 Penyelesaian Multi-Objektif

Karena terdapat tiga fungsi objektif yang saling konflik, Lead Researchers (2023) menggunakan pendekatan $\varepsilon$-constraint: optimalkan $Z_1$ sebagai primary, kemudian optimalkan $Z_2$ dan $Z_3$ sebagai kendala upper bound, dan enumerasikan kumpulan Pareto front melalui grid-search terhadap parameter $(\varepsilon_2, \varepsilon_3)$. Pendekatan ini dijustifikasi oleh sifat linear program subproblem sehingga extreme points efisien dihitung secara sistematis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka Benders multi-objektif untuk jaringan susu mengikuti delapan tahap yang menjadi standar operasional (*Standard Operating Procedure*) di konsultan *supply chain design*:

### 3.1 Tahap 1 — Karakterisasi Jaringan Eksisting

*Activity:* Pemetaan geospasial seluruh entitas $(I,J,K,L)$ menggunakan data GPS armada, ERP, dan WMS. *Deliverable:* Peta jaringan dalam format shapefile beserta matriks jarak $d(i,j)$ yang akan dipakai menghitung $c^{raw}_{ij}, c^{proc}_{jkt}, c^{dist}_{kl}$.

### 3.2 Tahap 2 — Estimasi Parameter Permintaan

Permintaan $d_{lt}$ diproyeksikan menggunakan model SARIMA atau Prophet (Meta) untuk menangani musiman (Idul Fitri, Natal, tahun ajaran baru). Untuk mengatasi ketidakpastian, Lead Researchers (2023) menyarankan *scenario-based* dengan $S$ skenario, $s = 1,\dots,S$, masing-masing dengan probabilitas $p_s$.

### 3.3 Tahap 3 — Penentuan Set Pareto Awal

Menggunakan grid 5×5 pada $(\varepsilon_2, \varepsilon_3)$, jalankan 25 kali MO-MILP untuk memperoleh Pareto front $Z_1^{opt}, Z_2^{opt}, Z_3^{opt}$. Algoritma Benders menjamin gap optimalitas < 1% setelah 50 iterasi.

### 3.4 Tahap 4 — Diskusi dengan Pemangku Kepentingan

*Decision-maker* memilih solusi Pareto-optimal berdasarkan bobot preferensi: biasanya $w_1 = 0{,}5$ (biaya), $w_2 = 0{,}3$ (emisi), $w_3 = 0{,}2$ (service). Pemilihan diformalisasi dengan teknik TOPSIS atau AHP.

### 3.5 Tahap 5 — Validasi Robustness

Lakukan Monte Carlo simulation dengan 1000 realisasi permintaan stokastik terhadap solusi terpilih. Ukur *expected regret* dan *worst-case service level*. Solusi yang lolos tahap ini menjadi kandidat final.

### 3.6 Tahap 6 — Perancangan Implementasi Bertahap

Mengingat *lead-time* pembangunan fasilitas 12–18 bulan, jaringan diimplementasikan dalam dua fase: (Fase 1) optimalisasi rute dan utilisasi fasilitas eksisting; (Fase 2) pembukaan fasilitas baru sesuai keputusan $u_j^*, v_k^*$.

### 3.7 Tahap 7 — Integrasi Cold Chain IoT

Setiap tangki susu mentah dan ruang pendingin dilengkapi sensor suhu (DS18B20) dan GPS yang mengirim data real-time ke cloud platform (AWS IoT Core atau Azure IoT Hub). Data ini menjadi umpan balik dinamis untuk re-optimasi periodik.

### 3.8 Tahap 8 — Audit dan Continuous Improvement

Audit internal mengikuti standar ISO 22000 (food safety) dan ISO 14064 (carbon accounting) setiap 6 bulan. Hasil audit menjadi parameter baru pada re-run Benders, sehingga jaringan bersifat *continuously optimized*.

Diagram alir proses secara