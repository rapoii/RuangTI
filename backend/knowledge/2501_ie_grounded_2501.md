# 2501 — Strategi Rantai Pasok Tertutup untuk Baterai Daya Pensiun: Pemanfaatan Berjenjang dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan paradoks industri yang kompleks: sementara transisi elektrifikasi transportasi mengurangi emisi operasional, di sisi lain ia menghasilkan "gelombang pensiun" (retirement wave) baterai lithium-ion dalam volume masif pada horizon 2030–2040. Proyeksi International Energy Agency (IEA) menunjukkan bahwa lebih dari 1,2 juta ton baterai EV akan mencapai akhir masa pakai pertamanya (first-life) sebelum 2030, menciptakan urgensi strategis untuk membangun rantai pasok tertutup (closed-loop supply chain/CLSC) yang mampu memulihkan nilai material dan energi secara ekonomi. JIANG Lin dan TANG Lidan (2025) dalam makalah yang diterbitkan pada *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068) menyoroti bahwa strategi CLSC baterai pensiun tidak dapat dipandang sebagai masalah daur ulang sederhana, melainkan sebagai sistem keputusan terintegrasi yang harus memilih secara optimal antara dua jalur pemulihan bernilai tinggi, yaitu *echelon utilization* (pemanfaatan berjenjang baterai pada aplikasi second-life seperti *stationary energy storage system*/SESS) dan *recycling remanufacturing* (remanufaktur melalui ekstraksi material kritis).

Konteks operasional industri baterai menunjukkan karakteristik unik yang membedakannya dari CLSC produk konsumen konvensional. Pertama, baterai pensiun memiliki *state-of-health* (SoH) yang terdistribusi secara heterogen (biasanya 70–80% kapasitas awal), sehingga keputusan alokasi harus berbasis pengujian diagnostik—bukan sekadar pendekatan probabilitas seragam. Kedua, nilai ekonomis baterai pada jalur echelon (estimasi 50–70% dari nilai original) versus jalur daur ulang (bernilai material Li, Co, Ni pada fluktuasi harga pasar) menciptakan *trade-off* optimasi yang sangat sensitif terhadap parameter pasar. Ketiga, ketidakpastian tingkat pengembalian (return rate), kualitas lot, dan permintaan aplikasi second-life memerlukan pendekatan *robust optimization* seperti yang dikemukakan oleh Shin, Kim, dan Jeong (2024) dengan DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197), yang mengembangkan model CLSC robust dengan sistem manajemen pengembalian untuk ekonomi sirkular.

Urgensi regulasi semakin memperkuat kebutuhan akan kerangka keputusan CLSC ini. Arahan Uni Eropa *Battery Regulation 2023/1542* menetapkan target minimal 65% tingkat daur ulang baterai EV pada 2025 dan 70% pada 2030, sementara China *GB/T 34014-2017* telah mengkodifikasi konsep *echelon utilization* sebagai kebijakan nasional. Tanpa strategi CLSC yang teroptimasi secara matematis, pelaku industri menghadapi risiko inefisiensi alokasi modal, kerusakan lingkungan akibat pembuangan sembarangan, dan hilangnya peluang pemulihan nilai yang signifikan—diperkirakan bernilai USD 60–80 miliar secara kumulatif pada 2030. Oleh karena itu, formulasi model Mixed-Integer Programming (MIP) dengan keputusan bersama antara fasilitas pengumpulan, pusat pengujian, operator echelon, dan fasilitas remanufacturing/daur ulang menjadi kebutuhan rekayasa yang tidak dapat ditunda.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai pensiun yang dikembangkan oleh JIANG dan TANG (2025) berakar pada kerangka Mixed-Integer Linear Programming (MILP) dengan struktur jaringan multi-echelon. Notasi himet dasar meliputi himpunan indeks $\mathcal{I}$ (node fasilitas: collection center $i \in I^c$, testing facility $i \in I^t$, echelon operator $i \in I^e$, recycler $i \in I^r$, remanufacturer $i \in I^m$), himpunan $\mathcal{J}$ untuk demand zone aplikasi second-life, dan himpunan $\mathcal{K}$ untuk tingkat grade baterai pasca-pengujian ($k=1$ layak echelon, $k=2$ layak remanufacturing, $k=3$ daur ulang material).

**Variabel keputusan:**
- $x_{ij} \geq 0$: aliran baterai (unit) dari node $i$ ke node $j$
- $y_i \in \{0,1\}$: keputusan pembukaan fasilitas $i$ dengan kapasitas $u_i$
- $z_k \geq 0$: jumlah baterai dialokasikan ke jalur pemulihan $k$
- $w_{jm} \geq 0$: aliran baterai remanufactured ke pasar $m$

**Parameter:** $c_{ij}$ biaya transportasi per unit, $p_i$ biaya operasional fasilitas, $\pi_k$ nilai pemulihan per baterai pada jalur $k$, $q_k$ kapasitas pemrosesan jalur $k$, $d_j$ permintaan aplikasi second-life, $\tilde{d}_r$ tingkat pengembalian stokastik (menurut Shin et al. 2024).

**Fungsi objektif** memaksimumkan *total profit* CLSC:

$$\max \; Z = \sum_{m \in M} \rho_m w_{jm} + \sum_{k \in K} \pi_k z_k - \sum_{(i,j) \in A} c_{ij} x_{ij} - \sum_{i \in I} f_i y_i - \sum_{i \in I} p_i \sum_j x_{ij}$$

**Konstrain utama:**

(a) *Flow balance* pada setiap node pengujian:
$$\sum_{i \in I^c} x_{it} = \sum_{i \in I^c} x_{it}^{out} \quad \forall t \in I^t$$

(b) *Capacity constraint* fasilitas:
$$\sum_{j \in N(i)} x_{ij} \leq u_i y_i \quad \forall i \in I$$

(c) *Allocation grade* pasca-pengujian:
$$\sum_{k=1}^{3} z_k = \sum_{t \in I^t} \sum_{i} x_{it}$$

(e) *Demand satisfaction* untuk aplikasi second-life:
$$\sum_{j \in I^e \cup I^m} w_{jm} \geq d_m \quad \forall m \in M$$

**Ekstensi robust** mengikuti formulasi Soyster–Ben-Tal yang diadopsi Shin, Kim, dan Jeong (2024, DOI: 10.2139/ssrn.4934197). Jika tingkat pengembalian $\tilde{d}_r$ berada dalam himpunan ketidakpastian box:

$$\mathcal{U} = \left\{ \tilde{d}_r : \bar{d}_r - \hat{d}_r \leq \tilde{d}_r \leq \bar{d}_r + \hat{d}_r \right\}$$

maka *robust counterpart* untuk konstrain (c) menjadi:

$$\sum_{k=1}^{3} z_k \geq \bar{d}_r + \Gamma_r \hat{d}_r$$

di mana $\Gamma_r \in [0, |\mathcal{R}|]$ adalah parameter konservatisme pengambil keputusan (budget of uncertainty). Nilai $\Gamma_r=0$ merepresentasikan model nominal, sementara $\Gamma_r = |\mathcal{R}|$ memberikan perlindungan worst-case penuh dengan *price of robustness* berupa kenaikan biaya total rata-rata 8–15% pada studi kasus tipikal baterai EV.

**Penyelesaian** dilakukan melalui branch-and-cut pada solver CPLEX/Gurobi, dengan *lower bound* diperoleh dari LP relaxation dan *upper bound* dari heuristik berbasis Lagrangian relaxation. Kompleksitas komputasional bersifat NP-hard, namun untuk instans realistis dengan ≤50 node, waktu komputasi保持在 ≤2 jam pada workstation standar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai pensiun mengikuti SOP terstruktur enam tahap yang disintesis dari temuan JIANG & TANG (2025) dan diperkuat dengan pendekatan robust return management Shin et al. (2024):

**Tahap 1 – Pemetaan Stok Pensiun & Karakterisasi Pasar**
Pelaku industri (OEM, fleet operator, battery lessor) membangun inventaris dinamis baterai pensiun dengan parameter: tahun produksi, kimia (NMC/LFP/NCA), kapasitas residual SoH, siklus Charge-Through-Equivalent (CTE), dan kondisi fisik. Data ini menjadi input parameter $\bar{d}_r$ dan $\hat{d}_r$ pada model robust.

**Tahap 2 – Desain Jaringan Collection**
Penentuan lokasi *collection hub* menggunakan model $p$-median atau maximal covering, dengan radius layanan ≤150 km (sesuai standar GB/T 34014 dan EU Battery Regulation). Setiap hub dilengkapi dengan *safe storage*, sistem traceability (blockchain-based passport baterai), dan kapasitas buffer 1,5–2× arus masuk puncak.

**Tahap 3 – Pusat Pengujian & Sortasi (Testing & Grading)**
Fasilitas testing menggunakan protokol IEC 62933 dan GB/T 34014 untuk mengukur SoH melalui *hybrid pulse power characterization* (HPPC) dan kapasitas discharge. Output: grading otomatis ke tiga jalur (echelon/remanufacturing/recycling) dengan decision rule berbasis *expected value of information*:

$$\text{Grade}_i^* = \arg\max_{k} \left[ \pi_k \cdot P(\text{SoH} \geq \theta_k) - c_k^{\text{test}} \right]$$

**Tahap 4 – Optimisasi Alokasi (MILP Solver)**
Jalankan model MILP robust pada arsitektur data lake terpusat. Solver menghasilkan: lokasi fasilitas ($y_i^*$), alokasi batch baterai ke jalur optimal ($z_k^*$), dan rencana transportasi ($x_{ij}^*$).

**Tahap 5 – Eksekusi Pemulihan**
- **Echelon pathway:** baterai grade-1 dikirim ke operator