# 2208 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Kerangka Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik biofisik produknya yang mudah rusak (*perishable*) dengan umur simpan pendek (7–21 hari untuk susu pasteurisasi), membutuhkan rantai dingin (*cold chain*) dengan rentang suhu 2–6°C, serta pola permintaan yang sangat elastis terhadap musim dan harga (Lead Researchers, 2023). Kompleksitas ini memicu biaya logistik yang dapat mencapai 25–35% dari total biaya produk, sekaligus menciptakan tekanan ganda antara minimalisasi biaya operasional dan pemaksimalan kualitas produk yang sampai ke konsumen. Seperti ditegaskan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, permasalahan desain jaringan rantai pasok susu tidak dapat diselesaikan dengan pendekatan biaya-tunggal (*single-objective*) konvensional karena konflik inheren antara tujuan ekonomis, kualitas, dan keberlanjutan lingkungan.

Urgensi operasional makin tinggi ketika dimasukkan variabel emisi karbon dari transportasi refrigerasi, pemborosan produk karena kadaluwarsa (*spoilage*), serta ketidakpastian permintaan harian. Zhang, Li, dan Ren (2024) menunjukkan bahwa keputusan kualitas dalam rantai pasok balik (*reverse supply chain*) secara signifikan mempengaruhi desain jaringan hulu-muka (*forward network*), sehingga mengintegrasikan keputusan kualitas ke dalam model optimisasi menjadi kebutuhan metodologis. Studi kasus di negara-negara penghasil susu utama seperti Selandia Baru, Belanda, dan India menunjukkan bahwa penerapan kerangka multi-objektif dengan dekomposisi Benders mampu mereduksi waktu komputasi hingga 60–80% untuk jaringan berskala industri, sekaligus memungkinkan eksplorasi *trade-off* yang lebih kaya antara biaya, kesegaran produk, dan jejak karbon.

Tujuan modul ini adalah membedah secara sistematis kerangka matematis multi-objektif untuk desain jaringan rantai pasok susu, formulasi dekomposisi Benders yang memisahkan keputusan investasi fasilitas (variabel *complicating*) dari keputusan operasional aliran dan persediaan, serta aplikasi prosedural untuk konteks industri riil.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Model

**Himpunan (Sets):**
- $I = \{1, 2, \ldots, m\}$: himpunan pabrik pengolahan susu (*processing plants*)
- $J = \{1, 2, \ldots, n\}$: himpunan pusat distribusi (*distribution centers / DCs*)
- $K = \{1, 2, \ldots, p\}$: himpunan zona pelanggan
- $T = \{1, 2, \ldots, \tau\}$: himpunan periode perencanaan (misal harian, $\tau = 7$)

**Parameter:**
- $f_i$: biaya tetap pembukaan pabrik $i$
- $g_j$: biaya tetap pembukaan DC $j$
- $c_{ij}$: biaya transportasi per unit dari $i$ ke $j$
- $c_{jk}$: biaya transportasi per unit dari $j$ ke $k$
- $h_j$: biaya penyimpanan per unit per periode di DC $j$ (termasuk energi refrigerasi)
- $\text{Cap}_i$: kapasitas produksi harian pabrik $i$
- $\text{Cap}_j$: kapasitas DC $j$
- $d_{kt}$: permintaan pelanggan $k$ pada periode $t$
- $L$: umur simpan maksimum (dalam periode)
- $\rho$: faktor emisi CO₂ per unit jarak (kg CO₂e/ton·km)
- $\alpha$: bobot kepentingan relatif antar-objektif

**Variabel Keputusan:**
- $y_i \in \{0,1\}$: 1 jika pabrik $i$ dibuka
- $z_j \in \{0,1\}$: 1 jika DC $j$ dibuka
- $x_{ijt} \geq 0$: aliran dari pabrik $i$ ke DC $j$ pada periode $t$
- $w_{jkt} \geq 0$: aliran dari DC $j$ ke pelanggan $k$ pada periode $t$
- $s_{jt} \geq 0$: tingkat persediaan di DC $j$ akhir periode $t$

### 2.2 Fungsi Multi-Objektif

$$\min \; Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{t \in T} \left( \sum_{i,j} c_{ij} x_{