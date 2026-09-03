# 3029 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Remanufaktur Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Krisis lingkungan yang dipicu oleh emisi karbon dari sektor transportasi dan elektrifikasi industri telah mendorong akselerasi masif adopsi kendaraan listrik (EV) global, yang secara langsung menciptakan *end-of-life (EoL) tsunami* baterai lithium-ion dalam dekade 2025–2035. Menurut proyeksi industri yang dilaporkan oleh JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), volume baterai pensiun (*retired power battery* — RPB) di pasar Tiongkok diproyeksikan menembus skala gigawatt-hour (GWh) tahunan hanya dalam hitungan tahun, sehingga menjadikan perancangan *Closed-Loop Supply Chain* (CLSC) bukan sekadar pilihan strategis melainkan keniscayaan operasional.

Permasalahan mendasar yang diangkat oleh JIANG & TANG (2025) adalah bahwa baterai lithium-ion tidak memiliki karakteristik报废 (*waste*) homogen. Setelah masa pakai otomotifnya berakhir (umumnya State of Health/SoH di bawah 80%), baterai masih memiliki kapasitas residu 60–80% yang sangat layak untuk *echelon utilization* (pemanfaatan bertingkat) — misalnya sebagai *Battery Energy Storage System* (BESS) pada jaringan mikrogrid, telekomunikasi, atau pencahayaan darurat. Hanya setelah degradasi lanjutan barulah baterai memasuki fase *recycling remanufacturing* yang mengekstraksi material katoda (Li, Ni, Co, Mn) melalui proses pirometalurgi atau hidrometalurgi. Dua jalur reverse-logistik ini memiliki struktur biaya, *lead-time*, dan footprint lingkungan yang sangat berbeda, sehingga membutuhkan model optimasi CLSC yang sophisticated.

Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi kerangka ini dengan menyoroti bahwa dalam konteks ekonomi sirkular (*circular economy*), sistem CLSC untuk baterai menghadapi ketidakpastian ganda (*dual uncertainty*): variabilitas kualitas dan kuantitas arus balik (*return flow*), serta fluktuasi harga material kritis di pasar sekunder. Tanpa model yang *robust*, keputusan investasi pada fasilitas echelon versus fasilitas daur ulang akan menghasilkan suboptimalitas profit dan risiko stranded-asset yang tinggi. Kedua paper ini secara sinergi membangun pondasi bahwa strategi CLSC untuk RPB harus memodelkan tiga entitas keputusan secara simultan: (i) lokasi dan kapasitas fasilitas echelon, (ii) alokasi baterai pensiun antara jalur echelon dan jalur remanufaktur, serta (iii) kebijakan harga/kualitas pada aliran回收 (*recycling*) dan distribusi ulang.

Dari sudut pandang rekayasa industri, urgensi topik ini juga terletak pada dual-mandate regulator: di satu sisi memenuhi target *carbon neutrality* (misalnya NZE 2060 di Indonesia, *dual-carbon* 2030/2060 di Tiongkok), di sisi lain memenuhi target *minimum recycled content* yang ditetapkan oleh EU Battery Regulation 2023/1542 dan direplikasi oleh berbagai yurisdiksi. Tanpa strategi CLSC yang teroptimasi secara matematis, pencapaian target ini akan terkendala oleh biaya logistik回收 yang tidak ekonomis. Inilah konteks industri nyata yang melatarbelakangi pengembangan model pada literatur primer JIANG & TANG (2025).

## 2. Landasan Teori & Formulasi Matematis

JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) membangun model CLSC berbasis Mixed-Integer Linear Programming (MILP) untuk menentukan keputusan optimal terhadap tiga *decision-maker* yang saling berinteraksi: **produsen baterai baru (M)**, **operator fasilitas echelon utilization (E)**, dan **operator fasilitas daur ulang/remanufaktur (R)**. Model ini memperluas arsitektur CLSC klasik Guide & Van Wassenhove (2009) dengan memasukkan *reverse logistics tier-2* berupa jaringan echelon.

### 2.1 Notasi dan Himpunan

Misalkan himpunan indeks:

- $i \in I$ : lokasi fasilitas manufaktur baterai baru
- $j \in J$ : lokasi fasilitas echelon utilization
- $k \in K$ : lokasi fasilitas daur ulang/remanufaktur
- $l \in L$ : zona permintaan baterai baru (pasar OEM)
- $m \in M$ : zona permintaan baterai second-life (pasar BESS)

Parameter kunci:
- $c^{M}_{ij}$ : biaya transport baterai baru dari $i$ ke $j$ (CNY/unit)
- $c^{E}_{jl}$ : biaya transport produk echelon dari $j$ ke pasar second-life $l$
- $c^{R}_{ki}$ : biaya transport material daur ulang dari $k$ kembali ke $i$
- $p_l$ : harga jual baterai baru di pasar OEM $l$
- $q_m$ : harga jual baterai echelon di pasar second-life $m$
- $\theta$ : *recovery yield* material daur ulang, $0 < \theta < 1$
- $CAP_j, CAP_k$ : kapasitas proses fasilitas echelon dan daur ulang
- $\alpha$ : proporsi baterai pensiun yang dialokasikan ke jalur echelon; $(1-\alpha)$ ke jalur daur ulang

### 2.2 Variabel Keputusan

$$
x_{ij} \geq 0 \quad \text{(aliran baterai baru dari } i \text{ ke } j\text{)}
$$
$$
y_{jl} \geq 0 \quad \text{(aliran baterai echelon dari } j \text{ ke } l\text{)}
$$
$$
z_{ki} \geq 0 \quad \text{(aliran material daur ulang dari } k \text{ ke } i\text{)}
$$
$$
w_j \in \{0,1\} \quad \text{(aktivasi fasilitas echelon di lokasi } j\text{)}
$$
$$
v_k \in \{0,1\} \quad \text{(aktivasi fasilitas daur ulang di lokasi } k\text{)}
$$
$$
\alpha \in [0,1] \quad \text{(fraksi alokasi baterai pensiun ke jalur echelon)}
$$

### 2.3 Fungsi Objektif

Fungsi objektif memaksimumkan *Total System Profit* (TSP) dari seluruh rantai pasok tertutup:

$$
\max \; Z = \underbrace{\sum_{j \in J}\sum_{l \in L} p_l \cdot y_{jl}}_{\text{Pendapatan baterai baru}} + \underbrace{\sum_{j \in J}\sum_{m \in M} q_m \cdot \alpha \cdot y_{jm}}_{\text{Pendapatan second-life}} + \underbrace{\theta \cdot \sum_{k \in K}\sum_{i \in I} r_i \cdot z_{ki}}_{\text{Pendapatan material daur ulang}}
$$

$$
- \underbrace{\sum_{i \in I}\sum_{j \in J} c^{M}_{ij} \cdot x_{ij}}_{\text{Biaya transport forward}} - \underbrace{\sum_{j \in J}\sum_{l \in L} c^{E}_{jl} \cdot y_{jl}}_{\text{Biaya transport second-life}} - \underbrace{\sum_{k \in K}\sum_{i \in I} c^{R}_{ki} \cdot z_{ki}}_{\text{Biaya transport reverse}}
$$

$$
- \underbrace{\sum_{j \in J} F_j \cdot w_j}_{\text{Investasi fasilitas echelon}} - \underbrace{\sum_{k \in K} G_k \cdot v_k}_{\text{Investasi fasilitas daur ulang}}
$$

dengan $F_j$ dan $G_k$ masing-masing adalah *fixed cost* aktivasi fasilitas.

### 2.4 Kendala (Constraints)

**Kendala keseimbangan massa di fasilitas manufaktur:**

$$
\sum_{j \in J} x_{ij} = P_i \quad \forall i \in I
$$

**Kendala kapasitas fasilitas echelon:**

$$
\sum_{l \in L} y_{jl} \leq CAP_j \cdot w_j \quad \forall j \in J
$$

**Kendala kapasitas fasilitas daur ulang:**

$$
\sum_{i \in I} z_{ki} \leq CAP_k \cdot v_k \quad \forall k \in K
$$

**Kendala keseimbangan reverse flow:**

$$
\alpha \cdot \sum_{j \in J} y_{jl} + (1-\alpha) \cdot \sum_{k \in K} z_{ki} = \sum_{i \in I} x_{ij} \cdot \beta \quad \forall i,j
$$

dengan $\beta$ adalah *return rate* baterai pensiun terhadap baterai baru yang terjual.

**Kendala non-negativitas dan binaritas:**

$$
x_{ij}, y_{jl}, z_{ki} \geq 0; \quad w_j, v_k \in \{0,1\}; \quad 0 \leq \alpha \leq 1
$$

Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperluas model ini ke ranah *robust optimization* dengan memperkenalkan *uncertainty set* untuk parameter return rate:

$$
\beta \in [\beta^{\min}, \beta^{\max}], \quad \beta^{\min} = \bar{\beta} - \hat{\beta}, \; \beta^{\max} = \bar{\beta} + \hat{\beta}
$$

Formulasi *worst-case* robust counterpart menghasilkan *conservative solution* yang menjamin profit minimum bahkan pada skenario return rate terburuk, sehingga model tidak hanya optimal secara ekspektasian tetapi juga *risk-averse*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Translasi model matematis di atas menjadi implementasi industri memerlukan *Standard Operating Procedure* (SOP) berlapis yang mengintegrasikan tiga fase operasi CLSC baterai pensiun. Prosedur ini mengadopsi kerangka Plan-Do-Check-Act (PDCA) yang disesuaikan dengan karakteristik reverse-logistik baterai lithium-ion.

### 3.1 Fase Plan — Penentuan Site & Kapasitas Fasilitas

Langkah pertama adalah menjalankan model MILP dengan data historis penjualan baterai OEM 5–7 tahun ke belakang untuk memproyeksikan volume RPB. Solver yang direkomendasikan adalah Gurobi 11.0 atau CPLEX 22.1 dengan *branch-and-cut* tolerance $10^{-6}$ dan *time limit* 3600 detik. Hasil solver menghasilkan rekomendasi lokasi fasilitas echelon dan daur ulang dengan metrik *facility utilization rate*:

$$
\rho_j = \frac{\sum_{l} y^*_{jl}}{CAP_j \cdot w^*_j} \in [0.65, 0.85]
$$

Batas bawah 0.65 memastikan *economies of scale*, batas atas 0.85 memberikan buffer ekspansi.

### 3.2 Fase Do — Operasi Reverse-Logistik

Setelah fasilitas aktif, diterapkan SOP berikut untuk setiap baterai pensiun yang masuk:

1. **Step 1 — Collection & Sorting**: baterai dikumpulkan dari dealer OEM, diklasifikasikan berdasarkan SoH menggunakan *Battery Health Analyzer* (misalnya Midtronics EXP-1000) dengan ambang $\text{SoH} \geq 70\%$ → jalur echelon; $\text{SoH} < 70\%$ → jalur daur ulang.
2. **Step 2 — Diagnostic & Grading**: pengujian kapasitas, impedansi internal (AC @ 1 kHz), dan self-discharge rate. Baterai dikategorikan Grade A (≥80%), B (70–80%), C (<70%).
3. **Step 3 — Repackaging/Refurbishing** untuk Grade A/B: penggantian BMS, rekondisi modul, kemudian dialokasikan ke aplikasi BESS sesuai rekomendasi model $y^*_{jm}$.
5. **Step 4 — Disassembly & Material Recovery** untuk Grade C: proses pyrometalurgi (≥1400°C) atau hidrometalurgi (leaching H₂SO₄ + solvent extraction) untuk mengekstraksi Li, Ni, Co.
6. **Step 5 — Forward Re-injection**: material daur ulang atau baterai second-life diangkut ke pasar OEM/BESS sesuai alokasi optimal $y^*_{jl}$ dan $z^*_{ki}$.

### 3.3 Fase Check — Monitoring KPI Reverse-Chain

Key Performance Indicator (KPI) yang harus dimonitor kontinu:

$$
\text{Reverse Recovery Rate} = \frac{\text{Unit baterai yang di-recover}}{\text{Unit baterai pensiun}} \geq 0.92
$$

$$
\text{Echelon Yield} = \frac{\sum y^*_{jl}}{\sum x^*_{ij}} \cdot \alpha \geq 0.75
$$

$$
\text{Carbon Footprint Reduction} = \frac{\text{CO}_2 \text{ baseline} - \text{CO}_2 \text{ CLSC}}{\text{CO}_2 \text{ baseline}} \geq 0.35
$$

### 3.4 Fase Act — Robust Adjustment

Jika terjadi deviasi KPI > 10% dari target, dilakukan *re-solve* terhadap model robust Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) dengan parameter $\hat{\beta}$ yang di-*update* berdasarkan data aktual 3 bulan terakhir.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi implementasi, diambil skenario industri baterai EV di regional Delta Sungai Yangtze (Tiongkok), yang menjadi basis studi JIANG & TANG (2025