# 2832 — Kerangka Kerja Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu (Dairy Supply Chain Network) dengan Dekomposisi Benders
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri susu global menghadapi tantangan struktural yang unik karena karakteristik produknya yang sangat *time-sensitive* dan *temperature-sensitive*. Susu segar sebagai produk utama memiliki umur simpan yang pendek (umumnya 5–14 hari pada suhu 4°C) dan tingkat degradasi kualitas yang bersifat eksponensial terhadap waktu, sehingga keputusan jaringan distribusi memiliki konsekuensi ekonomi dan lingkungan yang signifikan. Lead Researchers (2023) dalam publikasinya di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menyoroti bahwa desain jaringan rantai pasok susu tradisional yang hanya meminimalkan biaya total tidak lagi memadai; diperlukan kerangka multi-objektif yang secara simultan mempertimbangkan biaya operasional, tingkat kerusakan (spoilage rate), emisi karbon dari rantai dingin, dan tingkat layanan pelanggan. Pendekatan ini menjadi semakin relevan karena permintaan produk olahan susu di pasar domestik Indonesia tumbuh rata-rata 5–7% per tahun, sementara biaya logistik dingin (*cold chain logistics*) menyerap 18–25% dari total biaya produk susu jadi.

Urgensi metodologis dari karya Lead Researchers (2023) muncul dari kenyataan bahwa model Mixed-Integer Linear Programming (MILP) standar untuk jaringan rantai pasok susu bersifat *NP-hard* ketika memasukkan dimensi waktu, multi-produk, dan degradasi kualitas. Untuk konteks ini, Dekomposisi Benders (Benders, 1962) muncul sebagai teknik optimasi yang mempartisi masalah menjadi *master problem* (keputusan stratejik: lokasi fasilitas, kapasitas instalasi) dan *subproblem* (keputusan operasional: alokasi aliran, inventori, tingkat kualitas). Zhang, Li, dan Ren (2024) dalam *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan bahwa perluasan dekomposisi Benders ke ranah reverse logistics dengan keputusan berbasis kualitas menghasilkan *optimality gap* di bawah 1,5% terhadap solusi eksak pada instance industri besar, memvalidasi efektivitas pendekatan ini untuk masalah multi-objektif pada jaringan yang kompleks.

Konteks industri nyata yang melatarbelakangi kedua karya ini dapat dicontohkan melalui struktur rantai pasok susu di Indonesia: peternakan skala kecil dan menengah di Jawa Timur dan Jawa Tengah sebagai titik produksi, pabrik pengolahan (UHT, pasteurisasi) di kota-kota besar, pusat distribusi regional, dan akhirnya pasar ritel di seluruh nusantara. Kerugian akibat *cold chain break* dan produk susu yang kadaluarsa di Indonesia mencapai ratusan miliar rupiah per tahun menurut estimasi industri. Oleh karena itu, kerangka optimasi yang menggabungkan keputusan stratejik dan operasional seperti yang ditawarkan Lead Researchers (2023) dan diperluas oleh Zhang et al. (2024) menjadi sangat relevan untuk pengambilan keputusan berbasis bukti di industri susu, manufaktur makanan, dan sektor agribisnis lainnya.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka multi-objektif yang diusulkan Lead Researchers (2023) memformulasikan masalah desain jaringan sebagai model Mixed-Integer Programming (MIP) dengan dua fungsi tujuan yang saling berkonflik. Formulasi ini selanjutnya diselesaikan secara efisien menggunakan Dekomposisi Benders dengan pendekatan *ε-constraint* untuk menghasilkan frontier Pareto.

### 2.1 Notasi Himpunan dan Parameter

Misalkan:
- $I$ = himpunan peternakan (supplier), $i \in I$
- $J$ = himpunan pabrik pengolahan (processing plants), $j \in J$
- $K$ = himpunan pusat distribusi (distribution centers), $k \in K$
- $L$ = himpunan zona pelanggan (customer zones), $l \in L$
- $T$ = himpunan periode waktu (misal minggu), $t \in T$
- $P$ = himpunan produk susu, $p \in P$

Parameter kunci:
- $a_{ip}$: kapasitas suplai produk $p$ di peternakan $i$ (liter/hari)
- $b_{j}$: kapasitas pengolahan di pabrik $j$ (liter/hari)
- $d_{pl}$: permintaan produk $p$ di zona $l$ (liter)
- $c_{ij}^{tr}$: biaya transportasi dari $i$ ke $j$ (Rp/liter·km)
- $f_{j}$: biaya tetap pembukaan pabrik $j$ (Rp)
- $\theta_{p}$: ambang batas kualitas minimum produk $p$
- $\alpha_{p}$: laju degradasi kualitas produk $p$ (per hari)
- $e_{ij}^{CO_2}$: emisi CO₂ per liter·km dari $i$ ke $j$

### 2.2 Variabel Keputusan

- $y_{j} \in \{0,1\}$: 1 jika pabrik $j$ dibuka, 0 sebaliknya
- $x_{ijlt}$ ≥ 0: volume produk yang dikirim dari $i$ melalui $j$ ke $l$ pada periode $t$
- $q_{pt}$ ∈ [0,1]: indeks kualitas produk $p$ pada periode $t$
- $z_{jlt}$ ∈ {0,1}: 1 jika pelanggan $l$ dilayani oleh pabrik $j$ pada periode $t$

### 2.3 Fungsi Tujuan Multi-Objektif

**Objektif 1 — Minimasi Total Biaya:**

$$\min Z_{1} = \sum_{j \in J} f_{j} y_{j} + \sum_{i \in I} \sum_{j \in J} \sum_{l \in L} \sum_{t \in T} c_{ij}^{tr} x_{ijlt} + \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} h_{j}^{hold} \cdot w_{jkt} + \sum_{j \in J} \sum_{t \in T} p_{j}^{pen} \cdot s_{jt}$$

di mana $w_{jkt}$ adalah inventori, $s_{jt}$ adalah volume terbuang, dan $h_j^{hold}$, $p_j^{pen}$ adalah biaya penyimpanan dan penalti pembuangan.

**Objektif 2 — Minimasi Kerusakan Kualitas dan Dampak Lingkungan:**

$$\min Z_{2} = \sum_{p \in P} \sum_{t \in T} \left( 1 - q_{pt} \right) \cdot \sum_{l \in L} d_{pl} + \beta \sum_{i,j,l,t} e_{ij}^{CO_2} \cdot \text{dist}_{ij} \cdot x_{ijlt}$$

dengan $\beta$ adalah bobot normalisasi untuk dampak lingkungan. Degradasi kualitas dimodelkan sebagai:

$$q_{pt+1} = q_{pt} \cdot e^{-\alpha_{p} \cdot \Delta t}$$

### 2.4 Kendala (Constraints)

Kendala kapasitas pengolahan:

$$\sum_{i \in I} \sum_{l \in L} x_{ijlt} \leq b_{j} \cdot y_{j}, \quad \forall j \in J, \, t \in T$$

Kendala keseimbangan aliran di pusat distribusi:

$$\sum_{i \in I} x_{ijlt} = \sum_{k \in K} w_{jkt} + \sum_{l \in L} s_{jlt}, \quad \forall j, l, t$$

Kendala kualitas minimum:

$$q_{pt} \geq \theta_{p}, \quad \forall p \in P, \, t \in T$$

Kendala permintaan:

$$\sum_{j \in J} z_{jlt} = 1, \quad \sum_{j \in J} x_{ijlt} \geq d_{pl} \cdot z_{jlt}, \quad \forall l \in L, t \in T$$

### 2.5 Formulasi Dekomposisi Benders

Sesuai Lead Researchers (2023), masalah dipartisi menjadi:

**Master Problem (keputusan stratejik):**

$$\min_{y, z} \sum_{j} f_{j} y_{j} + \eta$$

$$\text{subject to: } \eta \geq \sum_{(u,v,\pi) \in \mathcal{C}} \pi^{(n)} \left( b - B y^{(n)} \right), \quad \forall \text{ cut } n$$

**Subproblem (keputusan operasional) untuk setiap $y^{(n)}$ yang diberikan:**

$$\min_{x, w, s, q} Z_{sub} = \sum c^{tr} x + \sum h^{hold} w + \sum p^{pen} s$$

dengan dual subproblem menghasilkan *optimality cuts* ($\pi$) yang ditambahkan ke master problem pada setiap iterasi. Konvergen tercapai ketika $\eta \geq Z_{sub}^{best} - \epsilon$, dengan $\epsilon$ = toleransi optimalitas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka multi-objektif dengan Dekomposisi Benders dalam konteks industri susu mengikuti Standar Prosedur Operasional yang dikembangkan berdasarkan Lead Researchers (2023) dan diperluas oleh Zhang et al. (2024) untuk dimensi reverse logistics.

### 3.1 Diagram Alir Proses Rekayasa

```
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 1: Karakterisasi Data Industri                      │
│  - Pengumpulan data kapasitas, demand, biaya transportasi   │
│  - Estimasi parameter kualitas (α, θ)                       │
│  - Pemetaan jarak dan emisi karbon                         │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 2: Formulasi Model MIP Multi-Objektif                │
│  - Penentuan set, parameter, variabel                       │
│  - Konstruksi kendala kapasitas, kualitas, permintaan       │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 3: Inisialisasi Master Problem                       │
│  - Set y=0 (tidak ada fasilitas dibuka)                    │
│  - Tambahkan trivial lower bound untuk η                   │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 4: Iterasi Benders                                  │
│  ┌──────────────────────────────────────────────┐           │
│  │
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
