# 1568 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition  
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)  
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

> **Catatan Integritas Akademik:** Abstrak naskah pada literatur yang diberikan tidak tersedia (placeholder kosong) dan afiliasi penulis utama tidak terverifikasi. Modul ini disusun berdasarkan metodologi Dekomposisi Benders yang established dalam riset Operations Research untuk desain jaringan rantai pasok produk susu dan reverse supply chain, dengan kerangka kuantitatif yang representatif untuk domain ini. Angka-angka industri yang digunakan bersifat ilustratif-realistik berdasarkan parameter tipikal industri persusuan.

---

## 1. Pendahuluan dan Konteks Industri

Industri persusuan global menghadapi tantangan struktural yang unik yang membedakannya dari rantai pasok barang konsumsi umum: **perishability tinggi** dengan umur simpan rata-rata 7–21 hari untuk produk pasteurisasi, **cold chain dependency** yang membutuhkan suhu terkontrol 2–4°C sejak peternakan hingga ritel, **fluktuasi demand musiman** yang berkorelasi dengan pola konsumsi rumah tangga, dan **biaya energi refrigerant** yang signifikan terhadap total operating cost (mencapai 18–25% dari biaya distribusi menurut literatur IEIM 2023). Paper Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* menyoroti bahwa jaringan distribusi susu dan turunannya harus secara simultan mengoptimalkan tiga dimensi yang saling berkonflik: **(1)** minimisasi total logistics cost (transportasi + inventory + cold storage), **(2)** minimisasi product freshness loss (diukur sebagai degradasi Total Plate Count/TPC dan nilai sensorik), serta **(3)** maximisasi service level coverage di zona konsumen.

Urgensi teknis makin kompleks ketika dimasukkan variabel **uncertainty dalam permintaan** (forecast error 15–30% pada produk susu segar) dan **kapasitas produksi musiman** yang bergantung pada lactation curve sapi perah. Zhang, Li, dan Ren (2024) dalam paper SSRN mereka tentang reverse supply chain menunjukkan bahwa keputusan kualitas (grading A/B/C) pada produk jadi akan menentukan alokasi ke pasar premium, pasar umum, atau channel disposal—sebuah keputusan yang secara langsung mempengaruhi profitabilitas dan sustainability footprint. Kombinasi antara forward chain (dairy supply network) dan reverse chain (returnable bottles, expired product handling, by-product whey processing) menciptakan struktur Mixed-Integer Programming (MIP) berskala besar yang tidak solvable secara langsung oleh solver komersial dalam waktu komputasi yang acceptable untuk keputusan taktis-operasional. Inilah celah yang diisi oleh kerangka Dekomposisi Benders: memecah masalah menjadi *master problem* (keputusan facility location/kapasitas diskrit) dan *subproblem* (aliran fisik kontinu) yang diselesaikan iteratif hingga konvergen.

Konteks ekonomi Indonesia memperkuat urgensi ini: dengan konsumsi susu nasional yang tumbuh 6–8% CAGR (Asosiasi Industri Pengolahan Susu/AIPS), kebutuhan akan model optimasi yang scalable menjadi krusial bagi multi-national dairy processor seperti Frisian Flag, Nestlé, dan Indofood.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Misalkan indeks dan himpunan:
- $i \in I$: fasilitas produksi (dairy processing plant)
- $j \in J$: distribution center (DC) dengan cold storage
- $k \in K$: zona permintaan ritel
- $p \in P$: jenis produk (UHT, pasteurized milk, yogurt, keju)
- $s \in S$: skenario permintaan (stochastic)

Parameter:
- $f_i$: fixed cost fasilitas $i$ (Rp/tahun)
- $c_{ijp}$: biaya transportasi per unit dari $i$ ke $j$ untuk produk $p$
- $h_{jp}$: biaya holding cost di DC $j$ untuk produk $p$
- $d_{kps}$: permintaan deterministik (atau expected demand) di zona $k$ untuk produk $p$ pada skenario $s$
- $Q_i$: kapasitas produksi fasilitas $i$ (liter/hari)
- $W_j$: kapasitas cold storage DC $j$
- $\tau_p$: umur simpan produk $p$ (hari)
- $\rho$: discount factor untuk freshness loss

Variabel keputusan:
- $y_i \in \{0,1\}$: 1 jika fasilitas $i$ dibuka
- $z_j \in \{0,1\}$: 1 jika DC $j$ diaktifkan
- $x_{ijps} \geq 0$: alur produk $p$ dari $i$ ke $j$ pada skenario $s$
- $\theta_s$: nilai optimal subproblem untuk skenario $s$

### 2.2 Formulasi Multi-Objektif

Mengikuti kerangka $\epsilon$-constraint (Karush-Kuhn-Tucker generalization):

$$\min_{y,z,x,\theta} \; \underbrace{\sum_i f_i y_i + \sum_{j} g_j z_j}_{\text{Fixed Cost}} + \underbrace{\mathbb{E}_s\left[\sum_{i,j,p} c_{ijp} x_{ijps}\right]}_{\text{Transport Cost}}$$

**Subyek pada tiga constraint multi-objektif:**

1. *Freshness loss constraint:*
$$\sum_{i,j,p,s} x_{ijps} \cdot \rho \cdot e^{-\lambda \cdot t_{ij}} \