# 2192 — Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** *Industrial Engineering and Innovation Management* (2023). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy) merupakan salah satu sektor agribisnis dengan karakteristik operasional paling kompleks dalam rekayasa rantai pasok. Berbeda dengan produk FMCG non-persishable, susu pasteurisasi memiliki *shelf life* yang pendek (umumnya 5–18 hari pada suhu 2–4 °C), memerlukan infrastruktur *cold chain* yang terjaga, dan mengalami degradasi kualitas yang tidak dapat dipulihkan (*quality decay*). Kerangka multi-objektif yang diajukan oleh tim peneliti pada *Industrial Engineering and Innovation Management* (2023, DOI: 10.23977/ieim.2023.060509) muncul sebagai respons langsung terhadap tiga tantangan struktural utama: pertama, **biaya total** yang didominasi oleh investasi fasilitas *chilled warehouse*, transportasi berpendingin (*reefer trucks*), dan energi refrigerasi; kedua, **kesegaran produk** yang harus dioptimasi karena berkorelasi langsung dengan *consumer willingness-to-pay* dan *shrinkage loss*; ketiga, **jejak karbon** dari emisi refrigerant dan transportasi dingin yang menjadi tekanan regulasi pasar Eropa dan Asia.

Urgensi ekonominya bersifat global. FAO (2022) melaporkan konsumsi produk susu dunia tumbuh 1,6 % CAGR selama dekade terakhir, dengan nilai pasar USD 893 miliar, sementara *food waste* pada rantai pasok susu menyentuh angka 20–25 % di negara berkembang — sebuah *inefficiency* yang secara langsung dapat diminimasi melalui desain jaringan multi-objektif. Kompleksitas bertambah ketika jaringan harus memutuskan lokasi fasilitas *processing plant*, kapasitas lini UHT/pasteurisasi, alokasi *raw milk collection* dari koperasi peternak, hingga rute distribusi ke retailer dalam horizon perencanaan mingguan/bulanan. Karena variabel keputusan bersifat *binary* (buka/tutup fasilitas) dan *continuous* (aliran dan produksi), modelnya merupakan **Mixed-Integer Linear Programming (MILP)** yang *NP-hard* — sehingga memerlukan teknik dekomposisi.

Di sinilah **Benders Decomposition (BD)** berperan strategis. Pendekatan ini, yang diperkenalkan Jacques F. Benders (1962) dan telah diaplikasikan secara luas dalam *supply chain network design* (lihat Zhang, Li & Ren, 2024, DOI: 10.2139/ssrn.5063437 untuk aplikasi pada *reverse supply chain*), memisahkan masalah menjadi *master problem* (keputusan lokasi investasi) dan *subproblem* (keputusan operasional aliran dan produksi), sehingga *computational tractability* meningkat signifikan pada instans besar. Kombinasi kerangka multi-objektif dengan BD menjadi kontribusi utama paper IEIM (2023) dan akan diuraikan secara formal pada bagian selanjutnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Model mengadopsi struktur jaringan empat-tingkat (*farms → processing plants → distribution centers → customer zones*) dengan indeks dan parameter sebagai berikut:

- **Himpunan:** $i \in I$ (peternak/koperasi), $j \in J$ (pabrik pengolahan), $k \in K$ (pusat distribusi), $l \in L$ (zona pelanggan), $p \in P$ (jenis produk), $t \in T$ (periode perencanaan).
- **Parameter:** $d_{lpt}$ = permintaan; $f_j$ = biaya investasi tetap membuka pabrik $j$; $c^p_{jpt}$ = biaya produksi; $c^t_{ij}, c^t_{jk}, c^t_{kl}$ = biaya transportasi per unit; $Cap_j$ = kapasitas produksi; $Q_p$ = umur simpan produk; $\alpha_p$ = laju degradasi kualitas; $\tau^t_{ij}, \tau^t_{jk}, \tau^t_{kl}$ = waktu transit; $E^t_{ij}, E^t_{jk}$ = emisi CO₂ per unit.

### 2.2 Variabel Keputusan

$$
x_j \in \{0,1\}, \quad y_{ijpt} \geq 0, \quad z_{jkpt} \geq 0, \quad w_{klpt} \geq 0, \quad v_{jpt} \geq 0
$$

di mana $x_j = 1$ bila pabrik $j$ dibuka, $y_{ijpt}$ adalah aliran susu mentah, $z_{jkpt}$ aliran produk jadi ke DC, $w_{klpt}$ aliran ke pelanggan, dan $v_{jpt}$ adalah volume produksi.

### 2.3 Formulasi Multi-Objektif

Tiga fungsi tujuan digunakan (kerangka ini konsisten dengan paper IEIM 2023 dan perluasan reverse-logistics pada Zhang dkk., 2024):

$$
\min Z_1 = \sum_{j \in J} f_j \, x_j + \sum_{i,j,p,t} c^t_{ij} \, y_{ijpt} + \sum_{j,k,p,t} \left(c^t_{jk} + c^p_{jpt}\right) z_{jkpt} + \sum_{k,l,p,t} c^t_{kl} \, w_{klpt}
$$

$$
\min Z_2 = \sum_{j,k,l,p,t} \alpha_p \, (\tau^t_{jk} + \tau^t_{kl}) \, z_{jkpt}
$$

$$
\min Z_3 = \sum_{i,j,t} E^t_{ij} \, y_{ijpt} + \sum_{j,k,t} E^t_{jk} \, z_{jkpt}
$$

### 2.4 Kendala

*Balance of flow* di setiap node:

$$
\sum_{i \in I} y_{ijpt} = v_{jpt}, \quad \forall j,p,t
$$

$$
\sum_{j \in J} z_{jkpt} = \sum_{l \in L} w_{klpt}, \quad \forall k,p,t
$$

$$
\sum_{k \in K} w_{klpt} \geq d_{lpt}, \quad \forall l,p,t
$$

*Kapasitas*:

$$
\sum_{p,t} v_{jpt} \leq Cap_j \, x_j, \quad \forall j
$$

*Batas umur simpan* (kendala kesegaran):

$$
(\tau^t_{ij} + \tau^t_{jk} + \tau^t_{kl}) \cdot \mathbb{1}[y_{ijpt}, z_{jkpt}, w_{klpt} > 0] \leq Q_p, \quad \forall i,j,k,l,p,t
$$

### 2.5 Metode Multi-Objektif: ε-Constraint

Untuk menghasilkan *Pareto front*, paper IEIM (2023) menggunakan metode **ε-constraint**, di mana satu objektif diminimasi sementara yang lain dijadikan kendala:

$$
\min Z_1(x,y,z,w,v)
$$

$$
\text{s.t
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
