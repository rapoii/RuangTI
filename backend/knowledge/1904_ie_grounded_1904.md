# 1904 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu Menggunakan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, Vol. 6, No. 5. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. SSRN. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor agro-manufaktur paling kompleks di dunia karena menghadapi tantangan struktural yang unik: **perishability** (daya simpan pendek), **cold-chain dependency** (rantai dingin bersuhu 2–4°C), **demand volatility** (fluktuasi musiman permintaan), dan **quality degradation kinetics** (laju degradasi mutu yang sensitif terhadap waktu-suhu). Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), perancangan jaringan rantai pasok susu tidak dapat lagi didekati sebagai masalah optimasi single-objective klasik (misalnya minimasi biaya total), melainkan harus memodelkan **trade-off simultan** antara dimensi biaya, kualitas organoleptik, jejak karbon, dan tingkat layanan.

Urgensi masalah ini diperkuat oleh tiga fenomena empiris. Pertama, *Food and Agriculture Organization* (FAO) melaporkan bahwa sekitar 14–20% produk susu global terbuang sebelum sampai ke konsumen karena kerusakan cold-chain. Kedua, biaya energi refrigerasi menyumbang 25–40% dari total biaya operasional distribusi, sehingga keputusan lokasi fasilitas *processing plant* dan *distribution center* (DC) memiliki dampak energi yang sangat signifikan. Ketiga, meningkatnya tekanan regulasi emisi (misalnya EU Green Deal, ISO 14064) memaksa perusahaan susu untuk memasukkan **carbon footprint** sebagai fungsi objektif kedua setelah biaya.

Zhang, Li, dan Ren (2024) dalam *SSRN Working Paper* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan bahwa dalam konteks *reverse supply chain* dengan keputusan kualitas, formulasi *mixed-integer programming* (MIP) berskala nyata menjadi secara komputasional *intractable* untuk diselesaikan langsung oleh solver branch-and-bound, sehingga **Benders Decomposition (BD)** menjadi pendekatan yang tidak terhindarkan. Kontribusi Lead Researchers (2023) adalah mengintegrasikan BD ke dalam kerangka multi-objektif untuk jaringan produk susu, menghasilkan algoritma yang mampu menangani jaringan multi-echelon (peternakan → pabrik pengolahan → DC → ritel) dengan ratusan node dalam waktu komputasi yang acceptable.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan, Parameter, dan Variabel Keputusan

Misalkan jaringan rantai pasok susu dimodelkan dengan himpunan-himpunan berikut:

- $I = \{1, 2, \dots, m\}$ : himpunan peternakan (supplier nodes)
- $J = \{1, 2, \dots, n\}$ : himpunan pabrik pengolahan (plants)
- $K = \{1, 2, \dots, p\}$ : himpunan distribution center (DC)
- $L = \{1, 2, \dots, q\}$ : himpunan titik permintaan/ritel
- $T = \{1, 2, \dots, \tau\}$ : horizon perencanaan diskret (periode)
- $P = \{1, 2\}$ : himpunan produk (misal $P_1$ = UHT, $P_2$ = pasteurisasi)

Parameter utama:
- $c^{open}_j$ : biaya tetap pembukaan plant $j$
- $c^{open}_k$ : biaya tetap pembukaan DC $k$
- $c^{tr}_{ij}$ : biaya transportasi per unit dari $i$ ke $j$
- $c^{tr}_{jk}$, $c^{tr}_{kl}$ : serupa untuk tahap berikutnya
- $d_{l,t}$ : permintaan ritel $l$ pada periode $t$
- $\alpha$ : laju degradasi kualitas harian (Arrhenius-type)
- $\theta$ : suhu operasional cold chain
- $CO_2^{tr}$, $CO_2^{op}$ : faktor emisi (kg CO₂e/km dan kg CO₂e/kWh)

Variabel keputusan:
- $y_j, y_k \in \{0,1\}$ : keputusan biner pembukaan fasilitas
- $x_{ij}$ : alur susu mentah (raw milk) dari peternakan $i$ ke plant $j$
- $x_{jk}$ : alur produk jadi dari plant $j$ ke DC $k$
- $x_{kl}$ : alur dari DC $k$ ke ritel $l$
- $f_{l,t}$ : tingkat kesegaran (freshness index) produk yang sampai di ritel $l$ pada periode $t$

### 2.2 Formulasi Multi-Objektif (MOP)

$$\min \; Z_1 = \sum_{j} c^{open}_j y_j + \sum_{k} c^{open}_k y_k + \sum_{(i,j)} c^{tr}_{ij} x_{ij} + \sum_{(j,k)} c^{tr}_{jk} x_{jk} + \sum_{(k,l)} c^{tr}_{kl} x_{kl} \quad \text{(biaya total)}$$

$$\min \; Z_2 = \sum_{(k,l)} CO_2^{tr} \cdot dist_{kl} \cdot x_{kl} + \sum_{j,k} CO_2^{op} \cdot E_{jk}(y_j, y_k) \quad \text{(emisi karbon)}$$

$$\max \; Z_3 = \sum_{l,t} w_{l,t} \cdot f_{l,t} \quad \text{(indeks kesegaran rata-rata tertimbang)}$$

dengan kendala utama:

$$\sum_{j} x_{ij} \leq S_i \quad \forall i \in I \quad \text{(kapasitas supply)}$$

$$\sum_{i} x_{ij} = \sum_{k} x_{jk} \quad \forall j \in J \quad \text{(keseimbangan flow di plant)}$$

$$\sum_{j} x_{jk} = \sum_{l} x_{kl} \quad \forall k \in K \quad \text{(keseimbangan di DC)}$$

$$\sum_{k} x_{kl} \geq d_{l,t} \quad \forall l \in L, t \in T \quad \text{(pemenuhan permintaan)}$$

$$f_{l,t} = f_0 \cdot e^{-\alpha(\theta - \theta_{ref}) \cdot TT_{kl}} \quad \text{(model degradasi mutu)}$$

dengan $TT_{kl}$ adalah total travel time dari $k$ ke $l$.

### 2.3 Benders Decomposition (BD)

Karena variabel biner $y_j, y_k$ menyulitkan (complicating variables), BD memisahkan masalah menjadi:

**Master Problem (MP)** — hanya memuat variabel biner dan *surrogate* variabel $\theta$ untuk biaya operasional:

$$\min \; \sum_{j} c^{open}_j y_j + \sum_{k} c^{open}_k y_k + \theta$$

subject to: Benders cuts yang dibangkitkan iteratif, kendala biner $y \in \{0,1\}$, dan kendala upper-bound $\theta \geq 0$.

**Subproblem (SP)** — untuk fixed $\bar{y}$ dari MP, selesaikan masalah continuous (transportasi & flow):

$$\min \; \theta(\bar{y}) = \min \left\{ \sum c^{tr}_{ij} x_{ij} + \sum c^{tr}_{jk} x_{jk} + \sum c^{tr}_{kl} x_{kl} \;|\; Ax = b, x \geq 0 \right\}$$

Dual SP diekspresikan sebagai:

$$\max \; \pi^T (b - B\bar{y}) \quad \text{s.t. } \pi^T A \leq c^{tr}$$

dengan $\pi$ adalah vektor dual. **Benders optimality cut** yang ditambahkan ke MP:

$$\theta \geq \pi^{*T} (b - B y) \quad \forall y$$

Iterasi berlanjut sampai gap $|\theta^{MP} - \theta^{SP}| < \epsilon$ (konvergensi).

Untuk multi-objektif, Lead Researchers (2023) menggunakan **ε-constraint method**: optimalkan $Z_1$ sebagai primary, dan konversi $Z_2, Z_3$ menjadi kendala $\varepsilon$-bounded, sehingga setiap iterasi menghasilkan satu titik Pareto.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Implementasi algoritma BD-MOP di industri dilakukan melalui SOP berikut (gabungan Lead Researchers, 2023 dan Zhang et al., 2024):

**Tahap 1 — Preprocessing Data (Hari 1–3)**
Kumpulkan data jarak, permintaan historis, kapasitas supplier, dan parameter cold-chain. Lakukan validasi konsistensi data demand (uji stasioneritas ADF).

**Tahap 2 — Formulasi MIP Dasar (Hari 4–5)**
Bangun model MOP dalam *algebraic modeling language* (AMPL/Gurobi/Pyomo). Pilih primary objective (umumnya biaya) dan secondary objectives (emisi, freshness).

**Tahap 3 — Inisialisasi Algoritma BD (Hari.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
