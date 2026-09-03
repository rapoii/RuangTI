# 2800 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dan Rantai Pasok Balik dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir. Berdasarkan Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management*, rantai pasok susu segar характериз dicirikan oleh tiga sifat intrinsik yang membedakan dari rantai pasok barang manufaktur konvensional: **(i) tingkat kerusakan (perishability) yang sangat tinggi** dengan rata-rata umur simpan produk hanya 5–21 hari pada suhu refrigerasi 2–4°C; **(ii) ketidakpastian permintaan** yang diakibatkan oleh fluktuasi musiman produksi sapi perah dan perubahan pola konsumsi; serta **(iii) fragmentasi jaringan** yang melibatkan ribuan peternakan skala kecil, unit pengumpulan (chilling centers), pabrik pengolahan (processing plants), distributor, dan retailer dengan kapasitas yang sangat heterogen. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509).

Urgensi operasional permasalahan ini bersifat multidimensional. Pertama, dari perspektif ekonomi, menurut Food and Agriculture Organization (FAO), sekitar 20–25% produk susu di negara berkembang rusak sebelum mencapai konsumen akhir, menimbulkan kerugian finansial lebih dari USD 30 miliar per tahun secara global. Kedua, dari perspektif lingkungan, emisi CO₂ dari rantai pasok susu—yang didominasi oleh aktivitas refrigerasi, transportasi cold-chain, dan pembuangan produk kadaluwarsa—menyumbang sekitar 3–4% dari total emisi gas rumah kaca sektor pangan. Ketiga, dari perspektif sosial, distribusi profit margin yang tidak merata menyebabkan 60–70% peternak skala kecil hanya menerima 30–40% dari harga jual eceran.

Penelitian Lead Researchers (2023) mengusulkan kerangka kerja multi-objektif yang secara simultan mengoptimalkan tiga fungsi tujuan: **minimisasi total biaya rantai pasok** (termasuk biaya produksi, transportasi refrigerasi, inventory holding, dan waste disposal), **minimisasi dampak lingkungan** (footprint karbon), dan **maksimisasi tingkat kesegaran produk** (freshness level). Karena struktur masalah menghasilkan Mixed-Integer Linear Programming (MILP) berskala besar dengan ribuan variabel biner dan kontinu, paper tersebut menerapkan **Benders Decomposition (BD)** sebagai teknik dekomposisi yang memisahkan variabel keputusan desain jaringan (lokasi fasilitas) dari variabel keputusan operasional (aliran produk). Pendekatan ini secara signifikan mengurangi waktu komputasi dan memungkinkan penyelesaian instances yang sebelumnya intractable.

Studi komplementer oleh Zhang, Li, dan Ren (2024) yang dipublikasikan dengan DOI [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma Benders Decomposition ke konteks **reverse supply chain** dengan menginkorporasikan keputusan kualitas produk回收 (recovered/remanufactured). Integrasi antara forward dan reverse chain ini merepresentasikan evolusi menuju *closed-loop supply chain* yang menjadi standar masa depan dalam rekayasa rantai pasok berkelanjutan. Sinergi kedua literatur ini membentuk basis teoritis yang kuat untuk modul 2800, yang membahas bagaimana teknik optimisasi advanced dapat diterapkan untuk menyelesaikan persoalan nyata dengan multiple, conflicting objectives.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Model

Model mengikuti formulasi pada Lead Researchers (2023). Definisikan himpunan dan indeks sebagai berikut:

- $i \in I$: indeks fasilitas produksi/suplai (peternakan & chilling center)
- $j \in J$: indeks pabrik pengolahan (processing plant)
- $k \in K$: indeks pusat distribusi (distribution center)
- $l \in L$: indeks pelanggan/retailer
- $p \in P$: indeks jenis produk susu (UHT, pasteurized, yogurt, keju, dll)
- $t \in T$: indeks periode waktu (mingguan/bulanan)

### 2.2 Parameter

$$\begin{aligned}
c_{ij}^{tp} &= \text{biaya transportasi dari } i \text{ ke } j \text{ untuk produk } p \text{ pada periode } t \\
c_{jk}^{tp} &= \text{biaya transportasi dari } j \text{ ke } k \text{ untuk produk } p \text{ pada periode } t \\
c_{kl}^{tp} &= \text{biaya transportasi dari } k \text{ ke } l \text{ untuk produk } p \text{ pada periode } t \\
f_j, f_k &= \text{biaya tetap pembukaan fasilitas } j \text{ dan } k \\
h_k^{tp} &= \text{biaya inventory holding produk } p \text{ di } k \text{ pada periode } t \\
w_{ij}^{tp} &= \text{biaya waste disposal jika produk } p \text{ rusak dalam perjalanan } i \to j \\
Cap_j, Cap_k &= \text{kapasitas pengolahan pabrik } j \text{ dan distribusi } k \\
dem_l^{tp} &= \text{demand pelanggan } l \text{ untuk produk } p \text{ pada periode } t \\
sup_i^{tp} &= \text{supply dari } i \text{ untuk produk } p \text{ pada periode } t \\
\alpha^p &= \text{freshness coefficient produk } p \\
CO2_{mode} &= \text{faktor emisi per unit jarak per moda transportasi}
\end{aligned}$$

### 2.3 Variabel Keputusan

$$\begin{aligned}
X_j &\in \{0,1\} \quad \text{(1 jika pabrik } j \text{ dibuka)} \\
Y_k &\in \{0,1\} \quad \text{(1 jika DC } k \text{ dibuka)} \\
q_{ij}^{tp} &\geq 0 \quad \text{(kuantitas aliran } i \to j \text{ produk } p \text{ periode } t) \\
q_{jk}^{tp} &\geq 0 \quad \text{(kuantitas aliran } j \to k) \\
q_{kl}^{tp} &\geq 0 \quad \text{(kuantitas aliran } k \to l) \\
s_k^{tp} &\geq 0 \quad \text{(inventory level di } k \text{ akhir periode } t) \\
u_l^{tp} &\geq 0 \quad \text{(unsatisfied demand di } l)
\end{aligned}$$

### 2.4 Fungsi Tujuan Multi-Objektif

Mengikuti pendekatan $\epsilon$-constraint atau weighted sum sesuai Lead Researchers (2023):

$$\min Z_1 = \sum_{j} f_j X_j + \sum_{k} f_k Y_k + \sum_{t,p} \left( \sum_{i,j} c_{ij}^{tp} q_{ij}^{tp} + \sum_{j,k} c_{jk}^{tp} q_{jk}^{tp} + \sum_{k,l} c_{kl}^{tp} q_{kl}^{tp} + \sum_{i,j} w_{ij}^{tp} \cdot q_{ij}^{tp} \cdot (1 - \alpha^p) + \sum_{k} h_k^{tp} s_k^{tp} + \sum_l p_l^{penalty} u_l^{tp} \right)$$

$$\min Z_2 = \sum_{t,p} \left( \sum_{i,j} CO2_{truck} \cdot dist_{ij} \cdot q_{ij}^{tp} / cap_{truck} + \sum_{j,k} CO2_{truck} \cdot dist_{jk} \cdot q_{jk}^{tp} / cap_{truck} + \sum_{k,l} CO2_{truck} \cdot dist_{kl} \cdot q_{kl}^{tp} / cap_{truck} \right)$$

$$\max Z_3 = \sum_{t,p,l} \alpha^p \cdot (dem_l^{tp} - u_l^{tp})$$

### 2.5 Kendala

**(a) Supply constraint di titik suplai:**
$$\sum_{j} q_{ij}^{tp} \leq sup_i^{tp} \quad \forall i,t,p$$

**(b) Flow balance di pabrik:**
$$\sum_{i} q_{ij}^{tp} = \sum_{k} q_{jk}^{tp} \quad \forall j,t,p$$

**(c) Kapasitas pabrik:**
$$\sum_{i,p} q_{ij}^{tp} \leq Cap_j \cdot X_j \quad \forall j,t$$

**(d) Flow balance & inventory di DC:**
$$s_{k}^{t-1,p} + \sum_{j} q_{jk}^{tp} = \sum_{l} q_{kl}^{tp} + s_k^{tp} \quad \forall k,t,p$$

**(e) Kapasitas DC:**
$$\sum_{j,p} q_{jk}^{tp} \leq Cap_k \cdot Y_k \quad \forall k,t$$

**(f) Demand satisfaction:**
$$\sum_{k} q_{kl}^{tp} + u_l^{tp} \geq dem_l^{tp} \quad \forall l,t,p$$

**(g) Freshness deterioration (Lead Researchers, 2023):**
$$u_l^{tp} \leq \sum_{k} q_{kl}^{tp} \cdot (1 - \beta \cdot t_{kl}^{travel}) \quad \forall l,t,p$$

di mana $\beta$ adalah laju deteriorasi per satuan waktu perjalanan.

### 2.6 Formulasi Benders Decomposition

Mengikuti Lead Researchers (2023), masalah dipartisi menjadi:

**Master Problem (MP)** — keputusan investasi:
$$\min \sum_{j} f_j X_j + \sum_{k} f_k Y_k + \theta$$
$$\text{subject to: } (c), (e) \text{ dan cuts dari subproblem}$$

**Subproblem (SP)** — keputusan operasional given $(X,Y)$:
$$\min \sum_{t,p} \left( \sum_{i,j} c_{ij}^{tp} q_{ij}^{tp} + \sum_{j,k} c_{jk}^{tp} q_{jk}^{tp} + \sum_{k,l} c_{kl}^{tp} q_{kl}^{tp} + \sum_k h_k^{tp} s_k^{tp} + \sum_l p_l^{penalty} u_l^{tp} \right)$$
$$\text{subject to: } (a), (b), (d), (f), (g)$$

Dual SP menghasilkan **Benders optimality cut**:
$$\theta \geq \pi^T b + \sum_{(X,Y)} \text{(dual info)} \cdot (X,Y)$$

dan **feasibility cut** jika SP infeasible.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

### 3.1 Arsitektur Prosedural

Implementasi Benders Decomposition dalam konteks rantai pasok susu mengikuti SOP 6-tahap berikut:

**Tahap 1 — Akuisisi Data & Validasi:** Pengumpulan data historis 12–24 bulan mencakup pola musiman produksi, demand forecasting, data geospasial fasilitas existing, biaya operasional aktual, dan parameter cold-chain (suhu, Shelf Life). Data divalidasi menggunakan teknik outlier detection (IQR method, $\pm 1.5 \times IQR$).

**Tahap 2 — Estimasi Parameter & Kalibrasi:** Parameter $\alpha^p$, $\beta$ dikalibrasi menggunakan regresi pada data eksperimen deteriorasi produk. Untuk susu pasteurisasi: $\alpha^{pasteur} = 0.92$, $\beta = 0.04$/hari. Untuk yogurt: $\alpha^{yogurt} = 0.95$, $\beta = 0.015$/hari.

**Tahap 3 — Formulasi Model:** Penyusunan formulasi MILP sesuai persamaan (2.4)–(2.5), dilakukan dengan bantuan algebraic modeling language (AMPL/GAMS/Pyomo).

**Tahap 4 — Partisi Benders:** Identifikasi *complicating variables* ($X_j, Y_k$) sebagai MP; variabel kontinu operasional ($q, s, u$) sebagai SP.

**Tahap 5 — Iterasi Benders:** Solusi iteratif:
1. Selesaikan MP dengan cuts awal, peroleh $(X^*, Y^*, \theta^*)$
2. Selesaikan SP dengan $(X^*, Y^*)$ fixed, peroleh $\theta^{SP}$ dan dual values $\pi$
3. Jika $|\theta^{SP} - \theta^*| < \epsilon$ (gap < 0.1%), STOP
4. Else, tambah optimality cut ke MP dan ulang

**Tahap 6 — Post-Optimization Analysis:** Pareto front generation untuk multi-objektif, sensitivity analysis, dan validasi dengan simulasi discrete-event.

### 3.2 Diagram Alir Proses

```
┌─────────────────────────┐
│   START: Data Input     │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Validasi & Estimasi     │
│ Parameter (α, β, cap)   │
└──────────┬────────────