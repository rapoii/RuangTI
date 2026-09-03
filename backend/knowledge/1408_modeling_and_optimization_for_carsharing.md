# 1408 — Pemodelan dan Optimasi Sistem Layanan Carsharing: Tinjauan Literatur Terpadu dengan Perspektif Metaheuristik Lintas Domain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Modeling and optimization for carsharing services: A literature review
**Jurnal & Sitasi Utama:** Ting Wu, Min Xu (2022). *Multimodal Transportation*. DOI: [https://doi.org/10.1016/j.multra.2022.100028](https://doi.org/10.1016/j.multra.2022.100028)
**Sitasi Pendukung:** Laura Calvet, Sergio Benito, Ángel A. Juan (2022). *International Transactions in Operational Research*. DOI: [https://doi.org/10.1111/itor.13164](https://doi.org/10.1111/itor.13164)

---

## 1. Pendahuluan dan Konteks Industri

Krisis mobilitas perkotaan contemporary telah menghasilkan permintaan eksponensial terhadap solusi berbagi kendaraan (*carsharing*) sebagai alternatif terhadap kepemilikan kendaraan pribadi. Ting Wu dan Min Xu (2022) dalam tinjauan literatur komprehensifnya yang dipublikasikan di *Multimodal Transportation* (DOI: [10.1016/j.multra.2022.100028](https://doi.org/10.1016/j.multra.2022.100028)) menegaskan bahwa layanan carsharing tidak lagi dipandang sebagai layanan pelengkap, melainkan telah bertransformasi menjadi komponen struktural ekosistem transportasi multimoda di kota-kota besar dunia. Studi mereka mengklasifikasikan permasalahan optimasi dalam tiga kategori hierarkis berdasarkan horizon keputusan: *strategic* (lokasi stasiun dan ukuran armada), *tactical* (relokasi kendaraan dinamis, penentuan tarif, dan penjadwalan), serta *operational* (penugasan kendaraan, pencocokan permintaan real-time, dan penyeimbangan inventaris). Setiap tingkatan keputusan memiliki karakteristik kompleksitas yang berbeda sehingga memerlukan pendekatan pemodelan yang khas.

Urgensi ekonomi dan operasional dari layanan carsharing terletak pada tiga fenomena simultan yang dihadapi operator. Pertama, ketidakseimbangan spasial-temporal antara permintaan pelanggan dan ketersediaan kendaraan (*spatial-temporal imbalance*) yang menurunkan tingkat pelayanan hingga 30–40% pada jam puncak (Wu & Xu, 2022). Kedua, biaya operasional yang didominasi oleh relokasi armada secara manual (*staff-based relocation*) maupun dengan insentif pelanggan (*user-based relocation*), yang dapat mencapai 15–25% dari total biaya operasional (Wu & Xu, 2022). Ketiga, ketidakpastian permintaan yang bersifat stokastik sehingga model deterministik menjadi tidak memadai untuk perencanaan kapasitas jangka panjang.

Dalam konteks teknis, Calvet, Benito, dan Juan (2022) pada *International Transactions in Operational Research* (DOI: [10.1111/itor.13164](https://doi.org/10.1111/itor.13164)) menyoroti bahwa permasalahan optimasi skala besar dengan ruang pencarian kombinatorial yang demikian kompleks—seperti yang dijumpai pada layanan carsharing—tidak dapat diselesaikan secara efisien menggunakan metode eksak *branch-and-bound* atau pemrograman linear integer murni. Mereka mengusulkan adopsi algoritma metaheuristik sebagai pendekatan dominan yang mampu menghasilkan solusi *near-optimal* dalam waktu komputasional yang dapat diterima untuk aplikasi operasional real-time. Kedua literatur ini membentuk fondasi sinergis bagi pengembangan kerangka keputusan berlapis untuk industri carsharing modern dan sistem otonom di masa depan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Lokasi Stasiun dan Ukuran Armada (Strategic Level)

Permasalahan tingkat strategis dapat diformulasikan sebagai *Maximum Coverage Location Problem* (MCLP) yang diperluas dengan batasan kapasitas armada. Misalkan $\mathcal{I} = \{1, 2, \dots, n\}$ adalah himpunan node permintaan (pelanggan potensial) dan $\mathcal{J} = \{1, 2, \dots, m\}$ adalah himpunan kandidat lokasi stasiun. Parameter-parameternya adalah:

- $a_{ij} \in \{0,1\}$: indikasi bahwa permintaan dari node $i$ dapat dipenuhi oleh stasiun $j$
- $d_i$: tingkat permintaan rata-rata dari node $i$ (permintaan/hari)
- $c_j$: biaya investasi tetap untuk membuka stasiun $j$
- $B$: anggaran investasi total
- $K$: jumlah maksimum armada total
- $v_j$: kapasitas parkir maksimum stasiun $j$

Variabel keputusan:
- $x_j \in \{0,1\}$: 1 jika stasiun $j$ dibuka, 0 sebaliknya
- $y_{ij} \in \{0,1\}$: 1 jika permintaan $i$ dipenuhi oleh stasiun $j$

Formulasi optimasinya adalah:

$$\max Z = \sum_{i \in \mathcal{I}} \sum_{j \in \mathcal{J}} a_{ij} \, d_i \, y_{ij}$$

*dengan kendala:*

$$\sum_{j \in \mathcal{J}} y_{ij} \leq 1 \quad \forall i \in \mathcal{I}$$

$$\sum_{j \in \mathcal{J}} v_j \, x_j \geq \sum_{j \in \mathcal{J}} \sum_{i \in \mathcal{I}} a_{ij} \, y_{ij}$$

$$\sum_{j \in \mathcal{J}} c_j \, x_j \leq B, \quad \sum_{j \in \mathcal{J}} x_j \leq K$$

$$y_{ij} \leq x_j \quad \forall i \in \mathcal{I}, \, j \in \mathcal{J}$$

(Wu & Xu, 2022)

### 2.2 Formulasi Relokasi Kendaraan (Tactical Level)

Permasalahan relokasi dinamis (*dynamic vehicle relocation problem*) dimodelkan sebagai berikut. Misalkan $t \in \mathcal{T} = \{1, 2, \dots, T\}$ merepresentasikan periode waktu diskrit. Parameter stokastiknya adalah $\lambda_{jt}$ yaitu laju kedatangan pelanggan di stasiun $j$ pada periode $t$ yang mengikuti distribusi Poisson:

$$P(X_{jt} = k) = \frac{(\lambda_{jt})^k e^{-\lambda_{jt}}}{k!}$$

Tujuan relokasi adalah meminimalkan ekspektasi biaya ketidaktersediaan:

$$\min \mathbb{E}\left[\sum_{t \in \mathcal{T}} \sum_{j \in \mathcal{J}} \left( \alpha \cdot u_{jt}^{+} + \beta \cdot u_{jt}^{-} \right)\right]$$

di mana $u_{jt}^{+}$ adalah unit permintaan yang tidak terlayani (*lost demand*) di stasiun $j$ pada waktu $t$, dan $u_{jt}^{-}$ adalah unit kelebihan kendaraan (*surplus inventory*), dengan $\alpha$ dan $\beta$ berturut-turut sebagai bobot penalti biaya.

### 2.3 Kerangka Algoritma Metaheuristik

Calvet et al. (2022) menjelaskan bahwa algoritma metaheuristik—seperti *Simulated Annealing* (SA), *Tabu Search* (TS), dan *Genetic Algorithm* (GA)—mengikuti skema umum *iterative improvement* yang dapat diekspresikan sebagai:

$$s_{k+1} = \mathcal{N}(s_k, \mathcal{T}_k)$$

di mana $s_k$ adalah solusi kandidat pada iterasi ke-$k$, $\mathcal{N}(\cdot)$ adalah operator neighborhood, dan $\mathcal{T}_k$ adalah parameter kontrol (temperatur pada SA, intensifikasi/diversifikasi pada TS, atau tingkat mutasi pada GA). Untuk permasalahan carsharing, pendekatan *Biased-Randomized* metaheuristik yang dipopulerkan oleh Juan et al. (sebagaimana dikutip Calvet et al., 2022) menggabungkan贪efficiency *greedy construction* dengan komponen stokastik terkontrol untuk membangun solusi awal berkualitas tinggi dalam milidetik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis optimasi layanan carsharing mengikuti protokol berlapis yang distandarisasi oleh Wu & Xu (2022) dalam *Multimodal Transportation*. Prosedur operasional ini dapat diabstraksikan menjadi diagram alir keputusan empat tahap:

```
[Tahap 1: Strategic Planning (T-12 bulan)]
        ↓
   [Pengumpulan Data Permintaan Historis & Proyeksi]
        ↓
   [Formulasi MCLP → Solusi Awal]
        ↓
   [Validasi dengan Monte Carlo Simulation]
        ↓
[Tahap 2: Tactical Planning (T-3 bulan)]
        ↓
   [Estimasi Demand Pattern per Zona]
        ↓
   [Optimasi Jadwal Relokasi]
        ↓
   [Kalibrasi Harga Dinamis]
        ↓
[Tahap 3: Operational Execution (Real-time)]
        ↓
   [Pencocokan Permintaan-Armada via Algoritma Matching]
        ↓
   [Trigger Relokasi Otomatis jika Imbalance > Threshold]
        ↓
[Tahap 4: Performance Monitoring]
        ↓
   [KPIs: Utilization Rate, Service Level, Cost per Trip]
        ↓
   [Feedback Loop ke Tahap 1 & 2]
```

Arsitektur teknologi pendukung secara tipikal mengintegrasikan tiga lapisan: (i) **Data Acquisition Layer** menggunakan telematik GPS, sensor IoT pada kendaraan, dan API pelanggan; (ii) **Optimization Engine Layer** yang menjalankan algoritma metaheuristik pada platform *cloud computing* dengan paralelisasi *island-model* GA; serta (iii) **Decision Support Dashboard** bagi operator dengan visualisasi *heat-map* permintaan dan armada (Wu & Xu, 2022). Calvet et al. (2022) menambahkan bahwa keberhasilan implementasi bergantung pada prosedur *warm-start initialization* yang menyuntikkan solusi hari sebelumnya sebagai *seed* untuk optimasi harian, sehingga konvergensi tercapai 40–60% lebih cepat dibanding inisialisasi acak murni.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Perhitungan: Optimasi Lokasi 10 Stasiun Carsharing di Zona Metropolitan

**Input Parameter Industri:**
- $n = 50$ node permintaan (kawasan residensial, komersial, transit hub)
- $m = 15$ kandidat lokasi (parkiran publik, mal, simpang transportasi)
- Setiap $d_i$ dalam rentang [10, 80] permintaan/hari (berdasarkan data historis)
- $v_j = 25$ slot parkir per stasiun
- $B = $ Rp 7,5 miliar; biaya $c_j$ = Rp 750 juta per stasiun
- $K = 10$ (target armada total = 250 unit, 25 per stasiun)

**Langkah Kalkulasi Step-by-Step:**

**Langkah 1:** Estimasi total permintaan yang harus dipenuhi:
$$D_{total} = \sum_{i=1}^{50} d_i = 1.875 \text{ permintaan/hari}$$

**Langkah 2:** Tentukan coverage requirement. Misalkan target cakupan adalah 80% permintaan:
$$D_{target} = 0{,}80 \times 1.875 = 1.500 \text{ permintaan/hari}$$

**Langkah 3:** Seleksi kandidat lokasi berdasarkan rasio $a_{ij} \cdot d_i / c_j$ (*benefit-to-cost ratio*) tertinggi. Sebagai ilustrasi untuk 5 kandidat teratas setelah penyortiran:

| Stasiun $j$ | $\sum_i a_{ij} d_i$ | $c_j$ (juta Rp) | Rasio |
|:-:|:-:|:-:|:-:|
| 1 | 285 | 750 | 0,380 |
| 2 | 312 | 750 | 0,416 |
| 3 | 268 | 750 | 0,357 |
| 7 | 295 | 750 | 0,393 |
| 12 | 240 | 750 | 0,320 |

**Langkah 4:** Iterasi pemilihan dengan kendala kapasitas. Akumulasi permintaan terlayani dari 5 stasiun optimal:
$$\sum_{j \in S^*} \sum_i a_{ij} d_i = 285 + 312 + 268 + 295 + 240 = 1.400$$

Karena $1.400 < 1.500$, diperlukan 1–2 stasiun tambahan. Tambahkan Stasiun 5 (jangkauan 165 permintaan):
$$\sum_{j \in S^*} \sum_i a_{ij} d_i = 1.400 + 165 = 1.565 \geq 1.500 \quad \checkmark$$

**Langkah 5:** Verifikasi kendala anggaran:
$$\sum_{j \in S^*} c_j = 6 \times 750 = 4.500 \text{ juta} \leq 7.500 \text{ juta} \quad \checkmark$$

**Langkah 6:** Verifikasi kendala armada:
$$\sum_{j \in S^*} v_j = 6 \times 25 = 150 \text{ slot} \quad \text{(cukup untuk } 6 \times 25 = 150 \text{ unit)}$$

**Interpretasi Manajerial:** Konfigurasi 6 stasiun ini mencakup 83,5% permintaan harian dengan efisiensi biaya 60%.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
