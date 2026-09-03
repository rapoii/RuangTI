# 1685 — Strategi Closed-Loop Supply Chain untuk Baterai Power Bekas: Pemanfaatan Eselon dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain (CLSC) untuk Baterai Power Bekas dengan Pemanfaatan Eselon (*Echelon Utilization*) dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global, yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024), telah melahirkan tantangan rekayasa yang sangat kompleks di hilir siklus hidup baterai lithium-ion (LIB). Baterai power EV yang pensiun (*retired power battery*, RPB) — umumnya didefinisikan sebagai baterai yang State of Health (SoH) turun di bawah 70–80% kapasitas nominalnya — tidak serta-merta menjadi limbah berbahaya. JIANG & TANG (2025) dalam makalah ICLSE 2024 menegaskan bahwa RPB menyimpan *residual value* yang sangat signifikan, dan keputusan strategis untuk memilih antara *echelon utilization* (penggunaan eselon, misal: baterai EV → penyimpanan stasioner atau *second-life* untuk lampu jalan, *backup* telekomunikasi, dan *microgrid*) serta *recycling remanufacturing* (remanufaktur melalui daur ulang material katoda) menentukan profitabilitas dan jejak ekologis rantai pasok. Tanpa strategi *closed-loop supply chain* (CLSC) yang teroptimasi, nilai intrinsik ini hilang sebagai *scrap* dan menghasilkan pencemaran logam berat.

Urgensi operasional semakin diperparah oleh regulasi ketat, antara lain *EU Battery Regulation 2023/1542* yang mensyaratkan tingkat daur ulang 65% untuk baterai lithium pada 2025 dan *carbon footprint declaration* wajib (JIANG & TANG, 2025). Di China — konteks empiris utama makalah ICLSE 2024 — kebijakan *NEV (New Energy Vehicle)* mendorong kapasitas baterai EV terpasang melebihi 800 GWh, yang akan menghasilkan lebih dari 200.000 ton RPB pada 2030. Kompleksitas meningkat karena ketidakpastian (*uncertainty*) tingkat pengembalian (*return rate*), kualitas baterai yang dikembalikan (heterogenitas SoH), serta permintaan pasar *second-life* yang fluktuatif. Shin, Kim & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* menekankan bahwa ketidakpastian ini tidak dapat ditangani dengan optimasi deterministik; diperlukan formulasi *robust optimization* (RO) untuk melindungi keputusan jaringan dari skenario *worst-case* permintaan回收 dan yield回收.

Secara ekonomis, manfaat penerapan CLSC baterai bekas bersifat multi-dimensi: (i) pengurangan biaya bahan baku melalui *urban mining* (Co, Ni, Li); (ii) penciptaan margin baru pada *refurbished battery* yang dijual 40–60% lebih murah dari baterai baru; (iii) mitigasi risiko geopolitik rantai pasok nikel/kobalt; dan (iv) kepatuhan terhadap Extended Producer Responsibility (EPR). Dalam kerangka Industrial Engineering, masalah CLSC baterai bekas diposisikan sebagai masalah optimasi jaringan *multi-echelon* dengan keputusan simultan atas lokasi fasilitas, aliran material, harga, dan kapasitas daur ulang. Bagian selanjutnya menguraikan formulasi matematis yang dikembangkan oleh JIANG & TANG (2025) serta ekstensi *robust* dari Shin et al. (2024).

---

## 2. Landasan Teori & Formulasi Matematis

JIANG & TANG (2025) memodelkan CLSC baterai bekas sebagai sistem empat-eschelon: **Manufacturer → Consumer (EV OEM) → Collection Center → Echelon-Use Center / Recycling-Remanufacturing Center → Secondary Market / Material Market**. Struktur ini merupakan perluasan dari kerangka Guide & Van Wassenhove (2009) dengan tambahan keputusan eselon. Model matematis menggunakan pemrograman campuran bilangan bulat (MILP) dengan parameter dan variabel keputusan sebagai berikut.

### 2.1 Notasi Parameter

- $i \in I$: indeks lokasi manufaktur; $j \in J$: indeks *collection center* (CC); $k \in K$: indeks *echelon utilization center* (EUC); $r \in R$: indeks *recycling-remanufacturing center* (RRC); $s \in S$: indeks pasar sekunder/material.
- $Q_j^j$: jumlah baterai pensiun yang dikumpulkan di CC $j$ (unit/tahun).
- $c^{col}_j$, $c^{dis}_j$, $c^{ech}_k$, $c^{rec}_r$: biaya koleksi, *disassembly*, eselon, dan daur ulang per unit (RMB/unit).
- $p^{ech}_s$, $p^{rec}_s$: harga jual baterai *second-life* dan material daur ulang (RMB/unit).
- $\alpha$: fraksi baterai yang layak eselon (SoH ≥ 70%); $\beta = 1-\alpha$: fraksi ke daur ulang.
- $\eta_{k}$: kapasitas EUC $k$ (unit/tahun); $\mu_r$: kapasitas RRC $r$.

### 2.2 Variabel Keputusan

- $x_{j,k}$: jumlah baterai yang dikirim dari CC $j$ ke EUC $k$.
- $y_{j,r}$: jumlah baterai yang dikirim dari CC $j$ ke RRC $r$.
- $z_{k,s}$: jumlah baterai *refurbished* dari EUC $k$ ke pasar sekunder $s$.
- $w_{r,s}$: jumlah material daur ulang dari RRC $r$ ke pasar material $s$.
- $u_j \in \{0,1\}$: keputusan pembukaan CC $j$.

### 2.3 Fungsi Tujuan

Maximasi total profit CLSC:

$$\max Z = \underbrace{\sum_{k \in K}\sum_{s \in S} p^{ech}_s z_{k,s}}_{\text{Pendapatan eselon}} + \underbrace{\sum_{r \in R}\sum_{s \in S} p^{rec}_s w_{r,s}}_{\text{Pendapatan daur ulang}} - \underbrace{\sum_{j \in J} f_j u_j}_{\text{Biaya tetap CC}} - \underbrace{\sum_{j \in J}\sum_{k \in K} (c^{col}_j+c^{ech}_k)\, x_{j,k}}_{\text{Biaya koleksi+eselon}} - \underbrace{\sum_{j \in J}\sum_{r \in R} (c^{col}_j+c^{rec}_r)\, y_{j,r}}_{\text{Biaya koleksi+daur ulang}}$$

### 2.4 Kendala Utama

**(a) Konservasi aliran di CC $j$:**

$$\sum_{k \in K} x_{j,k} + \sum_{r \in R} y_{j,r} = Q_j, \quad \forall j \in J$$

**(b) Kapasitas EUC $k$:**

$$\sum_{j \in J} x_{j,k} \le \eta_k, \quad \forall k \in K$$

**(c) Kapasitas RRC $r$:**

$$\sum_{j \in J} y_{j,r} \le \mu_r, \quad \forall r \in R$$

**(d) Rasio eselon (keputusan sortir):**

$$\sum_{k \in K} x_{j,k} = \alpha\, Q_j, \quad \sum_{r \in R} y_{j,r} = \beta\, Q_j, \quad \forall j \in J$$

JIANG & TANG (2025) melaporkan bahwa batasan (d) menentukan sensitivitas profit terhadap perubahan teknologi *screening* baterai. Ketika $\alpha$ ditingkatkan dari 30% menjadi 45% melalui perbaikan *diagnostic equipment*, profit CLSC meningkat rata-rata 18,7%.

### 2.5 Ekstensi Robust Optimization (Shin, Kim & Jeong, 2024)

Shin et al. (2024) memperkenalkan *uncertainty set* (polihedral) untuk permintaan *second-life* dan *return rate*:

$$\mathcal{U} = \left\{ \tilde{d}_s = d_s + \delta_s \hat{d}_s : \sum_{s \in S} |\delta_s| \le \Gamma,\; |\delta_s| \le 1 \right\}$$

dengan $\hat{d}_s$ sebagai deviasi maksimum dan $\Gamma$ sebagai *budget of uncertainty*. *Robust counterpart* dari kendala permintaan menjadi:

$$\sum_{k \in K} z_{k,s} \ge d_s + \max_{\boldsymbol{\delta} \in \mathcal{U}} \sum_{s' \in S} \delta_{s'} \hat{d}_{s'}$$

Formulasi ini linier dan dapat diselesaikan melalui dekomposisi Benders atau pemotong *Gomory mixed-integer*.

---

## 3. Metodologi Rekayasa & SOP Industri

Implementasi industri CLSC baterai bekas mengikuti *Standard Operating Procedure* (SOP) berikut, yang disintesis dari JIANG & TANG (2025) dan best practices *Battery Second Life* (BSL) Eropa:

**Tahap 1 — Akuisisi & Pengumpulan.** OEM EV atau *third-party logistic* (3PL) membentuk jaringan CC di area metropolitan. Setiap baterai dilengkapi *Battery Passport* (digital twin) yang mencatat siklus, SoH, dan sejarah termal. SOP: pengangkutan menggunakan kontainer UN 3480 (lithium), inspeksi visual kebocoran, dan penyimpanan pada suhu 15–25°C dengan SoC 30–50%.

**Tahap 2 — Triage & Klasifikasi.** Di CC, baterai menjalani *State of Health* (SoH) test menggunakan *Electrochemical Impedance Spectroscopy* (EIS) dan *Incremental Capacity Analysis* (ICA). SOP sortir:
- SoH ≥ 80% → *echelon utilization* (direct second-life).
- 60% ≤ SoH < 80% → *refurbishment* (cell balancing, modul replacement).
- SoH < 60% → *recycling* ke *black mass*.

**Tahap 3 — Disassembly.** Proses *safe-discharge* (discharge ke <5% SoC) diikuti pembongkaran modular. Lintasan kritis diidentifikasi menggunakan *Design for Disassembly* (DfD) score.

**Tahap 4 — Eselon atau Daur Ulang.** EUC melakukan *refurbishment* (maksimal 3 siklus). RRC melakukan *pyrometallurgy* atau *hydrometallurgy* untuk mengekstraksi Li, Co, Ni.

**Tahap 5 — Distribusi Terbalik ke Pasar Sekunder.** Produk didistribusikan ke *stationary storage operator*, *telecom BTS*, atau *material refiner*.

Diagram alir keputusan (high-level):

```
[Battery Retirement] 
        ↓
[Collection Center] → [SoH Test]
        ↓
   ┌────┴────┐
   ↓         ↓
[SoH≥80%] [SoH<80%]
   ↓         ↓
[Refurbish] [Recycle]
   ↓         ↓
[2