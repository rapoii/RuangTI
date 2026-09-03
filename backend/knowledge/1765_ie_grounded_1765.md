# 1765 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain/CLSC) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Listrik Pensiun (Retired Power Battery)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (Electric Vehicle/EV) global telah menciptakan tantangan logistik terbalik (reverse logistics) yang belum pernah terjadi sebelumnya dalam sejarah industri manufaktur. Berdasarkan proyeksi International Energy Agency (IEA), stok baterai EV global akan melampaui 200 juta unit pada tahun 2030, dengan volume baterai pensiun (End-of-Life/EoL) yang mencapai 1,2–1,8 juta ton per tahun di Cina saja. Konteks ini menjadi latar belakang utama paper JIANG Lin dan TANG Lidan (2025) yang dipublikasikan dalam *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068). Penulis menekankan bahwa baterai lithium-ion (LiB) yang pensiun dari aplikasi otomotif masih memiliki kapasitas residu antara 60%–80% dari kapasitas awalnya, sehingga sangat layak untuk dimanfaatkan kembali dalam aplikasi sekunder sebelum akhirnya didaur ulang secara material (material recycling). Paradigma ini dikenal sebagai *echelon utilization* atau *cascade utilization*, yang merupakan pilar penting ekonomi sirkular.

Urgensi operasional dari penelitian ini semakin nyata ketika kita mempertimbangkan tiga dimensi persoalan secara simultan. Pertama, dimensi ekologis: baterai LiB mengandung logam kritis seperti litium, kobalt, dan nikel yang penambangannya menimbulkan jejak karbon signifikan (rata-rata 15–20 kg CO₂eq/kWh untuk sel NMC). Kedua, dimensi regulasi: pemerintah Cina melalui *GB/T 34014-2017* (Coding and labeling for automotive batteries) dan Uni Eropa melalui *Battery Regulation 2023/1542* mewajibkan Produsen Memperpanjang Tanggung Jawab Produsen (Extended Producer Responsibility/EPR). Ketiga, dimensi ekonomis: pasar baterai pensiun diproyeksi mencapai USD 95,9 miliar pada 2032 (Grand View Research), menjadikannya salah satu *urban mining* paling menguntungkan.

Paper kedua oleh Shin, Kim, dan Jeong (2024) dengan DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) melengkapi kerangka tersebut dengan memperkenalkan model CLSC yang *robust* terhadap ketidakpastian tingkat pengembalian (return rate) dan permintaan pasar sekunder. Kedua paper ini secara bersama-sama menunjukkan bahwa strategi CLSC untuk baterai pensiun bukan sekadar persoalan daur ulang, melainkan masalah optimasi keputusan multi-pihak (produsen EV, operator echelon, recycler, retailer) di bawah ketidakpastian yang tinggi. JIANG dan TANG (2025) menyoroti bahwa keputusan untuk mengalokasikan baterai pensiun ke *echelon utilization* (misalnya sebagai *Battery Energy Storage System*/BESS pada microgrid atau基站 telekomunikasi) versus *recycling remanufacturing* harus mempertimbangkan kapasitas residu (State of Health/SoH), jarak logistik, dan struktur biaya yang sangat berbeda antar jalur. Tanpa pemodelan kuantitatif yang tepat, keputusan alokasi ini akan menghasilkan suboptimalitas sistemik yang merugikan semua *stakeholder*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Baterai dan Penentuan Ambang SoH

JIANG dan TANG (2025) mengadopsi model degradasi baterai berbasis hukum *power-law* Arrhenius untuk memprediksi *State of Health* (SoH) baterai pada waktu pensiun $t$. SoH didefinisikan sebagai:

$$SoH(t) = \frac{C_{actual}(t)}{C_{nominal}} \times 100\%$$

dengan $C_{actual}(t)$ adalah kapasitas aktual pada siklus ke-$t$ dan $C_{nominal}$ adalah kapasitas nominal awal. Model degradasi siklik mengikuti:

$$C_{actual}(t) = C_{nominal} \cdot e^{-\alpha \cdot N_{cycle}^{\beta}}$$

dengan $\alpha$ dan $\beta$ adalah koefisien fitting empiris (umumnya $\alpha \approx 0{,}0015$, $\beta \approx 0{,}82$ untuk sel NMC), serta $N_{cycle}$ adalah jumlah siklus charge-discharge kumulatif. Baterai dengan $SoH \in [70\%, 80\%]$ diklasifikasikan sebagai kandidat *echelon utilization*, sedangkan $SoH < 70\%$ masuk jalur *direct recycling*.

### 2.2 Formulasi Stackelberg Game untuk CLSC Multi-Eselon

JIANG dan TANG (2025) merumuskan permainan *Stackelberg* tiga tingkat dengan pemain sebagai berikut: (1) Produsen baterai (M) sebagai *leader*, (2) Operator echelon (E) sebagai *follower* tingkat pertama, dan (3) Operator daur ulang (R) sebagai *follower* tingkat kedua. Fungsi laba masing-masing pihak diformulasikan sebagai:

$$\pi_M = (w_M - c_M) \cdot q_M + (p_e - w_E) \cdot q_E + (p_r - w_R) \cdot q_R - C_{logistics}^{M}$$

$$\pi_E = (w_E - c_E) \cdot q_E - \lambda_E \cdot (SoH_{avg} - 0{,}75)^2 \cdot q_E$$

$$\pi_R = (w_R - c_R) \cdot q_R + \sum_{k \in \{Li, Co, Ni\}} \rho_k \cdot m_k(q_R)$$

dengan $w_M, w_E, w_R$ adalah harga jual internal antar eselon; $c_M, c_E, c_R$ adalah biaya produksi masing-masing; $p_e, p_r$ adalah harga jual ke pasar sekunder; $q_M, q_E, q_R$ adalah kuantitas baterai/aliran material; $\lambda_E$ adalah penalti kualitas untuk aplikasi echelon; serta $\rho_k$ dan $m_k$ adalah harga pasar dan massa recovery logam $k$.

### 2.3 Formulasi Robust Optimization (Shin, Kim, Jeong, 2024)

Shin, Kim, dan Jeong (2024) memperkenalkan *robust counterpart* untuk mengatasi ketidakpastian *return rate* $\tilde{\tau}$ dan *demand* $\tilde{d}$. Model robust-nya meminimalkan biaya total worst-case:

$$\min_{x, y} \max_{\tilde{\tau} \in \mathcal{U}_{\tau}, \tilde{d} \in \mathcal{U}_{d}} \left[ C_{prod}(x) + C_{rec}(y, \tilde{\tau}) + C_{pen}(y, \tilde{d}) \right]$$

dengan $\mathcal{U}_{\tau}$ dan $\mathcal{U}_{d}$ adalah *uncertainty sets* polihedral. Constraint keseimbangan aliran CLSC:

$$\sum_{i \in \mathcal{N}} x_{ij} + \tilde{\tau}_j = \sum_{k \in \mathcal{N}} x_{jk} + y_j, \quad \forall j \in \mathcal{N}$$

dengan $x_{ij}$ adalah aliran material dari node $i$ ke $j$, dan $y_j$ adalah aliran ke pusat daur ulang. Parameter $\Gamma$ (parameter konservativeness Budiansky-Kalsi) mengatur ukuran *uncertainty set*: $\mathcal{U}_{\tau} = \{\tilde{\tau} : \tilde{\tau}_j = \bar{\tau}_j + \hat{\tau}_j z_j, \; \sum_j |z_j| \leq \Gamma\}$, dengan $z_j \in [-1, 1]$.

### 2.4 Fungsi Utilitas dan Keputusan Alokasi Eselon

Kepastian alokasi baterai pensiun ke jalur echelon atau daur ulang dimodelkan sebagai masalah optimasi biner-campuran (Mixed-Integer Programming/MILP):

$$\max_{z \in \{0,1\}^n} \sum_{i=1}^{n} \left[ V_E \cdot z_i \cdot \mathbb{1}_{SoH_i \geq 0{,}70} + V_R \cdot (1-z_i) \cdot \mathbb{1}_{SoH_i < 0{,}70} \right]$$

dengan $V_E$ dan $V_R$ masing-masing adalah nilai ekonomis jangka panjang dari aplikasi echelon dan recycling, dan $z_i$ adalah variabel keputusan biner (1 = echelon, 0 = recycle).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG dan TANG (2025) mengusulkan SOP lima-tahap yang mengintegrasikan prinsip-prinsip *Design for Environment* (DfE), *Total Quality Management* (TQM), dan *Lean Reverse Logistics*:

**Tahap 1 — Akuisisi dan Identifikasi Baterai Pensiun.**
Baterai dari dealer, fleet operator, atau second-life market dikumpulkan ke *consolidation center*. Dilakukan pembacaan *Battery Management System* (BMS) identifier, riwayat SoH, serta klasifikasi kimiawi (LFP, NMC, NCA) menggunakan X-Ray Fluorescence (XRF) portabel sesuai standar *GB/T 36276-2018* dan *IEC 61960*.

**Tahap 2 — Penilaian Kapasitas Residu (Residual Capacity Assessment).**
Pengujian kapasitas dengan protokol *Hybrid Pulse Power Characterization* (HPPC) pada C-rate 1C discharge pada suhu 25±2°C. Hasil SoH dibandingkan dengan ambang keputusan berbasis model degradasi pada Bagian 2.

**Tahap 3 — Disassembly Bertingkat dan Sorting Modul.**
Proses disassembling mengikuti SOP *UN R100* dan *GB/T 34014-2017* dengan prioritas safety: full discharge ke tegangan sel minimum (umumnya 2,5V untuk LFP), pelepasan Module Management Unit (MMU), dan injeksi nitrogen inert untuk mencegah thermal runaway.

**Tahap 4 — Keputusan Alokasi Multi-Kriteria (MCDA).**
Penerapan *Analytic Hierarchy Process* (AHP) untuk menentukan bobot kriteria: biaya logistik (35%), nilai pasar sekunder (30%), SoH (20%), dan dampak lingkungan (15%). Hasil AHP menentukan apakah baterai dialokasikan ke jalur echelon atau direct recycling.

**Tahap 5 — Redistribusi dan Sertifikasi Pasar Sekunder.**
Baterai yang lolos jalur echelon diberikan *Second Life Certificate* sesuai *IEC 62933-2-1* dan dipasang pada aplikasi BESS, *telecom backup*, atau *low-speed EV* seperti *e-bike* dan *forklift*. Modul yang rusak atau di bawah ambang SoH dikirim ke *hydrometallurgical recycling plant* sesuai standar *EU Battery Regulation 2023/1542*.

Diagram alur lengkap SOP ini divisualisasikan sebagai berikut:

```
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│ Koleksi Baterai  │──▶│ Identifikasi BMS │──▶│ Uji Kapasitas    │
│ Pensiun (EoL)    │   │ & Kimiawi (XRF)  │   │ (HPPC/Sekuensial)│
└──────────────────┘   └──────────────────┘   └──────────────────┘
                                                      │
                                                      ▼
                                          ┌──────────────────────┐
                                          │ Hitung SoH & Model  │
                                          │ Degradasi (Bagian 2)│
                                          └──────────────────────┘
                                                      │
                              ┌───────────────────────┼───────────────────────┐
                              ▼                       ▼                       ▼
                  ┌──────────────────┐   ┌─────────────────────┐  ┌──────────────────┐
                  │ SoH ≥ 70%        │   │ 60% ≤ SoH < 70%     │  │ SoH < 60%        │
                  │ Jalur Echelon    │   │ Insentif Remanufak  │  │ Direct Recycling │
                  └──────────────────┘   └─────────────────────┘  └──────────────────┘
                              │                       │                       │
                              ▼                       ▼                       ▼
                  ┌──────────────────┐   ┌─────────────────────┐  ┌──────────────────┐
                  │ BESS / Telco /  │   │ Re-assembly & Test  │  │ Hydrometallurgy  │
                  │ Low-speed EV    │   │ (