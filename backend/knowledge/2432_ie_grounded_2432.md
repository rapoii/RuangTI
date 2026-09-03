# 2432 — Rancang Bangun Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir, terutama terkait dengan karakteristik intrinsik produk yang mudah rusak (*perishability*), persyaratan rantai dingin (*cold-chain*) yang ketat, volatilitas permintaan musiman, dan fragmentasi titik produksi di tingkat peternakan. Produk susu seperti *pasteurized milk*, yogurt, keju, dan *cream* memiliki *shelf-life* yang pendek (umumnya 5–21 hari tergantung jenis produk), sehingga keputusan lokasi fasilitas, kapasitas produksi, dan distribusi harus memperhatikan dimensi waktu yang jauh lebih ketat dibanding rantai pasok barang tahan lama. Lead Researchers (2023) dalam kerangka multi-objektif yang dipublikasikan di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menyoroti bahwa jaringan rantai pasok susu modern tidak hanya mengejar minimalisasi biaya total, tetapi juga harus secara eksplisit mempertimbangkan kualitas produk di titik konsumsi, jejak karbon, dan resiliensi jaringan terhadap disrupsi.

Urgensi operasional dari permasalahan ini diperkuat oleh fakta bahwa biaya logistik dapat mencapai 25–40% dari total biaya produk susu di banyak negara berkembang, sementara tingkat kerugian pascapanen (*post-harvest losses*) pada produk susu segar dilaporkan melebihi 15% di berbagai rantai pasok Asia dan Afrika. Kerugian ini bersumber dari tiga faktor utama: (i) mismatch antara kapasitas produksi dan permintaan musiman, (ii) alokasi fasilitas yang tidak mempertimbangkan usia simpan produk, dan (iii) kegagalan integrasi keputusan desain jaringan dengan keputusan operasional harian. Pendekatan single-objective yang hanya meminimalkan biaya terbukti menghasilkan solusi yang rentan terhadap ketidakpastian permintaan dan kegagalan memenuhi Service Level Agreement (SLA) pelanggan.

Studi Lead Researchers (2023) tersebut mengusulkan formulasi multi-objektif yang secara simultan mengoptimalkan tiga dimensi: minimisasi total biaya jaringan, minimisasi total emisi karbon dari kegiatan transportasi dan pendinginan, serta maksimisasi tingkat kesegaran produk (*freshness level*) pada saat diterima retailer. Untuk menyelesaikan model Mixed-Integer Linear Programming (MILP) berskala besar yang muncul dari jaringan dengan ratusan peternakan, puluhan processing plants, dan ribuan retailer, penulis menerapkan teknik **Benders Decomposition** yang mempartisi masalah menjadi sub-masalah master (*facility location* dan *flow assignment*) serta sub-masalah slave (*operational decisions* dan *feasibility cuts*).

Kontribusi kedua, dari Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437), menyediakan ekstensi metodologis penting melalui studi *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. Paper ini menunjukkan bahwa keputusan kualitas (*quality-based pricing*, inspeksi, sortasi, dan rework) pada aliran balik (*reverse logistics*) memiliki interdependensi kuat dengan keputusan desain jaringan maju (*forward network*). Integrasi keputusan kualitas ini ke dalam kerangka Benders menghasilkan struktur *cutting planes* yang lebih kaya dan ukuran gap optimalitas yang lebih kecil. Kedua literatur ini secara sinergis membentuk basis keilmuan untuk modul ini, di mana jaringan produk susu dimodelkan sebagai sistem multi-objektif dengan kendala kualitas produk pada fase produksi, distribusi maju, dan potensi pemulihan melalui reverse logistics.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Mixed-Integer Programming (MIP) Gabungan

Model jaringan rantai pasok susu multi-objektif didefinisikan pada himpunan indeks berikut:
- $I$ : himpunan peternakan (*farms*) sebagai titik suplai susu mentah, $|I| = n_I$
- $J$ : himpunan pabrik pengolahan (*processing plants*), $|J| = n_J$
- $K$ : himpunan pusat distribusi (*distribution centers*), $|K| = n_K$
- $L$ : himpunan retailer/area permintaan, $|L| = n_L$
- $P$ : himpunan jenis produk susu (whole milk, skim, yogurt, keju), $|P| = n_P$
- $T$ : himpunan periode diskret (hari atau minggu), $|T| = n_T$

Parameter input meliputi:
- $a_i$ : kapasitas suplai harian farm $i$ (liter)
- $b_j$ : kapasitas produksi plant $j$ (liter/hari)
- $c_k$ : kapasitas distribusi DC $k$ (liter/hari)
- $d_{l,p,t}$ : permintaan retailer $l$ untuk produk $p$ pada periode $t$
- $f_j, g_k$ : biaya tetap buka plant $j$ dan DC $k$
- $u_{ij}, v_{jk}, w_{kl}$ : biaya transportasi per liter
- $e_{ij}, e_{jk}, e_{kl}$ : emisi CO₂ per liter
- $\rho_p$ : laju penurunan kualitas produk $p$ per satuan waktu (skala 0–1)
- $\theta_p^{\min}$ : batas minimum kualitas saat sampai di retailer

Variabel keputusan:
- $X_j \in \{0,1\}$ : 1 jika plant $j$ dibuka
- $Y_k \in \{0,1\}$ : 1 jika DC $k$ dibuka
- $Q_{ij}^t$ : volume susu dari farm $i$ ke plant $j$ pada periode $t$
- $S_{jk,p}^t$ : volume produk $p$ dari plant $j$ ke DC $k$ pada periode $t$
- $R_{kl,p}^t$ : volume produk $p$ dari DC $k$ ke retailer $l$ pada periode $t$

### 2.2 Fungsi Objektif Multi-Objektif

Model Lead Researchers (2023) merumuskan tiga fungsi objektif yang akan diintegrasikan menggunakan *weighted sum* dengan bobot $w_1, w_2, w_3$:

$$Z_1 = \sum_j f_j X_j + \sum_k g_k Y_k + \sum_{i,j,t} u_{ij} Q_{ij}^t + \sum_{j,k,p,t} v_{jk} S_{jk,p}^t + \sum_{k,l,p,t} w_{kl} R_{kl,p}^t \quad \text{(Biaya Total)}$$

$$Z_2 = \sum_{i,j,t} e_{ij} Q_{ij}^t + \sum_{j,k,p,t} e_{jk} S_{jk,p}^t + \sum_{k,l,p,t} e_{kl} R_{kl,p}^t \quad \text{(Emisi Total)}$$

$$Z_3 = \sum_{k,l,p,t} (1 - \rho_p \cdot \tau_{kl}^t) R_{kl,p}^t \quad \text{(Tingkat Kesegaran)}$$

di mana $\tau_{kl}^t$ adalah waktu transit dari DC $k$ ke retailer $l$ pada periode $t$.

### 2.3 Kendala Utama

**Kendala kapasitas plant:**
$$\sum_i Q_{ij}^t \leq b_j X_j \quad \forall j, t$$

**Kendala keseimbangan massa di plant:**
$$\sum_i Q_{ij}^t = \sum_{k,p} S_{jk,p}^t \quad \forall j, t$$

**Kendala pemenuhan permintaan:**
$$\sum_k R_{kl,p}^t = d_{l,p,t} \quad \forall l, p, t$$

**Kendala kualitas minimum (dari Zhang et al., 2024):**
$$\rho_p \cdot (\tau_{ij}^t + \tau_{jk}^t + \tau_{kl}^t) \leq 1 - \theta_p^{\min} \quad \forall i,j,k,l,p,t$$

### 2.4 Dekomposisi Benders

Inti pendekatan Lead Researchers (2023) adalah dekomposisi variabel. Variabel integer $X_j, Y_k$ dialokasikan pada **Master Problem (MP)**, sedangkan variabel kontinyu $Q, S, R$ menjadi ranah **Sub-Problem (SP)**:

**Master Problem (MP):**
$$\min_{X,Y} \sum_j f_j X_j + \sum_k g_k Y_k + \eta$$

$$\text{s.t.} \quad \eta \geq \theta(\bar{X}, \bar{Y}) \quad \text{(optimality cuts)}$$

$$\eta \geq 0, \quad X_j, Y_k \in \{0,1\}$$

**Sub-Problem (SP):** untuk setiap $(X^*, Y^*)$ dari MP:
$$\eta = \min \sum u_{ij} Q + \sum v_{jk} S + \sum w_{kl} R$$

Dual SP menghasilkan multiplier $\pi, \lambda, \mu$ yang digunakan untuk membentuk *cutting planes*:

$$\eta \geq \pi_0 + \sum_j \pi_j (b_j X_j - \sum_i Q_{ij}) + \sum_{k} \lambda_k (\ldots)$$

Zhang, Li, dan Ren (2024) memperluas struktur ini dengan menambahkan *feasibility cuts* dari kendala kualitas, sehingga SP yang semula feasible dapat menjadi infeasible jika kombinasi $(X^*, Y^*)$ menghasilkan rute dengan waktu transit melebihi batas kesegaran produk.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka multi-objektif Benders pada jaringan susu mengikuti *Standard Operating Procedure* enam tahap:

**Tahap 1 — Akuisisi Data Rantai Pasok.** Pengumpulan data kapasitas farm, plant existing, demand historis 24–36 bulan, biaya transportasi aktual dari *fleet management system*, dan jejak karbon dari *life-cycle inventory database* (misalnya Ecoinvent atau IPCC Emission Factor Database).

**Tahap 2 — Estimasi Parameter Kualitas.** Penentuan laju degradasi $\rho_p$ melalui accelerated shelf-life testing (ASLT) pada suhu 4°C, 10°C, dan 25°C menggunakan model Arrhenius untuk ekstrapolasi pada suhu operasional aktual.

**Tahap 3 — Konstruksi Model MIP.** Formulasi lengkap dengan tiga objektif dan kendala integrasi reverse logistics mengikuti struktur dari [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437), khususnya untuk produk susu yang memiliki *yield loss* pada proses standardisasi dan *rework* pada produk mendekati kadaluarsa.

**Tahap 4 — Solusi via Benders Decomposition.** Iterasi sebagai berikut:
1. Inisialisasi MP dengan variabel integer saja, $\eta = 0$, *upper bound* $UB = \infty$, *lower bound* $LB = -\infty$.
2. Solve MP → dapat $(X^*, Y^*, \eta^*)$, update $LB = \eta^*$.
3. Solve SP dengan fixed $(X^*, Y^*)$ → solusi optimal SP $= \theta_{SP}$.
4. Jika SP feasible: tambah *optimality cut* ke MP, update $UB = \min(UB, f(X^*,Y^*) + \theta_{SP})$.
5. Jika SP infeasible: tambah *feasibility cut* ke MP (mengikuti ekstensi Zhang et al., 2024).
6. Konvergen jika $|(UB - LB)/LB| \leq \epsilon$ (umumnya $\epsilon = 10^{-3}$).

**Tahap 5 — Validasi dan Sensitivity Analysis.** Uji robustness dengan variasi ±20% pada permintaan, ±15% pada biaya energi refrigerasi, dan skenario disrupsi (penutupan satu plant, keterlambatan suplai 30%).

**Tahap 6 — Implementasi dan Monitoring.** Deploy hasil pada *decision support system* (DSS) dengan rolling horizon mingguan, di mana sub-problem di-resolve setiap awal minggu berdasarkan data demand aktual.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Studi kasus pada jaringan susu di wilayah Jawa Tengah dengan parameter berikut:
- $n_I = 8$ peternakan, kapasitas $a_i = \{1200, 1500, 900, 1100, 800, 1400, 1000, 1300\}$ liter/hari
- $n_J = 4$ kandidat plant, kapasitas $b_j = \{3500, 4000, 3000, 3500\}$ liter/hari
- $n_K = 3$ kandidat DC, kapasitas $c_k = \{5000, 4500, 5500\}$ liter/hari
- $n_L = 12$ retailer dengan demand harian bervariasi 800–2200 liter untuk dua produk $P=\{P_1, P_2\}$
- $\rho_{P_1} = 0.02$ (susu pasteurisasi), $\rho_{P_2} = 0.005$ (UHT) per jam
- $\theta^{\min} = 0.7$ untuk $P_1$

### 4.2 Iterasi Benders Pertama

**MP awal:** $\min \sum f_j X_j + \sum g_k