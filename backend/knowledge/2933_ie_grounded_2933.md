# 2933 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Utilisasi Bertingkat dan Daur Ulang Remanufaktur Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*, dalam Proceedings of the 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan struktural baru bagi sistem industri modern, yaitu bagaimana mengelola secara efisien *end-of-life* (EoL) baterai lithium-ion (LiB) dalam skala industri yang masif. Menurut proyeksi International Energy Agency (IEA) yang dirujuk oleh JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), volume baterai power bekas pakai (retired power battery) akan mencapai 1,3 juta ton pada tahun 2030 dan melonjak menjadi 16 juta ton pada 2040. Fenomena ini menandakan *window of opportunity* sekaligus ancaman lingkungan apabila tidak ditangani melalui kerangka rantai pasok tertutup (CLSC) yang terstruktur dan terukur secara matematis.

Secara operasional, baterai EV dianggap *retired* ketika kapasitasnya turun di bawah 70-80% State of Health (SoH), yaitu ambang batas dimana baterai tidak lagi memenuhi standar performa untuk aplikasi otomotif. JIANG & TANG (2025) menekankan bahwa baterai pada rentang kapasitas 60-80% masih sangat layak untuk aplikasi *echelon utilization*—yakni pemanfaatan bertingkat pada aplikasi sekunder yang требования dayanya lebih rendah, seperti *stationary energy storage system* (SESS), *telecom backup*, *forklift*, dan *microgrid* pendukung energi terbarukan. Sementara baterai di bawah 60% SoH harus dialihkan ke jalur *recycling-remanufacturing* untuk ekstraksi material kritis seperti litium, kobalt, nikel, dan mangan.

Urgensi strategis pengembangan CLSC baterai bekas juga didorong oleh tiga faktor simultan. Pertama, aspek geopolitik dan keamanan rantai pasok mineral kritis, di mana lebih dari 60% kobalt dunia ditambang di Republik Demokratik Kongo dan 70% litium di-refine di China, menciptakan *single-point-of-failure* dalam rantai pasok hulu. Kedua, regulasi强制 Extended Producer Responsibility (EPR) yang diterapkan Uni Eropa, China, dan Korea Selatan mewajibkan produsen baterai untuk回収 hingga 90% material kritis pada 2030. Ketiga, opportunity cost ekonomi yang sangat besar—JIANG & TANG (2025) memperkirakan bahwa nilai pasar global baterai bekas yang berhasil dimonetisasi melalui *echelon utilization* akan melampaui USD 30 miliar pada 2030, jauh melampaui skenario *recycling-only*.

Dalam konteks ini, kontribusi paper JIANG & TANG (2025) di ICLSE 2024 menjadi sangat relevan karena mengajukan model keputusan terpadu yang mengintegrasikan dua sub-sistem CLSC secara simultan—yakni *echelon utilization subsystem* dan *recycling-remanufacturing subsystem*—di bawah kendala kapasitas, regulasi, dan preferensi konsumen. Paper ini memperluas kerangka dasar CLSC konvensional (Shin, Kim & Jeong, 2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) dengan menambahkan dimensi ketidakpastian *echelon efficiency* dan koordinasi multi-stakeholder. Pendekatan ini sejalan dengan tren *Industrial Symbiosis* dan prinsip *Circular Economy* yang menjadi pilar utama *Sustainable Development Goals* (SDGs) ke-12.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Sistem CLSC Baterai Power

JIANG & TANG (2025) memodelkan CLSC baterai bekas sebagai sistem terintegrasi yang melibatkan empat entitas keputusan: **(1) Produsen baterai baru (OEM)**, **(2) Operator echelon utilization (EU)**, **(3) Pusat daur ulang-remanufaktur (RR)**, dan **(4) Konsumen akhir (EV users)**. OEM berperan sebagai *Stackelberg leader* yang menentukan harga jual baterai baru dan tingkat回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回収回收回収回收回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回收回收回收.

### 2.2 Formulasi Fungsi Permintaan dan Utilisasi

Permintaan terhadap baterai baru dimodelkan sebagai fungsi linier dari harga jual OEM ($p_n$) dan nilai tukar tambah baterai bekas ($b$):

$$D_n = \alpha - \beta p_n + \gamma b, \quad \alpha, \beta, \gamma > 0$$

di mana $\alpha$ adalah permintaan dasar pasar, $\beta$ adalah elastisitas harga, dan $\gamma$ adalah elastisitas tukar tambah. JIANG & TANG (2025) menetapkan $\gamma < \beta$ untuk merepresentasikan bahwa konsumen lebih sensitif terhadap harga beli dibanding nilai tukar tambah.

Permintaan terhadap baterai echelon (untuk aplikasi sekunder) mengikuti fungsi berbeda yang bergantung pada kapasitas utilisasi $\eta$:

$$D_e = \delta - \varepsilon p_e + \zeta \eta, \quad \delta, \varepsilon, \zeta > 0$$

di mana $p_e$ adalah harga jual baterai echelon, $\eta$ adalah tingkat keberhasilan reutilisasi (0 ≤ η ≤ 1), dan $\zeta$ menangkap efek persepsi kualitas konsumen terhadap baterai bekas yang telah di-grading.

### 2.3 Model Stokastik Hasil Koleksi

Tidak semua baterai yang mencapai EoL dapat dikumpulkan. JIANG & TANG (2025) memodelkan tingkat pengumpulan回收 ($\lambda$) sebagai variabel acak Bernoulli dengan probabilitas回收回收回收回收回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回収回收回收回收回收.

$$Q_c = \lambda \cdot D_n^{\text{EoL}} = \lambda \cdot \kappa D_n, \quad 0 \leq \lambda \leq 1, \; 0 < \kappa < 1$$

di mana $\kappa$ adalah proporsi baterai yang mencapai EoL dalam satu horizon perencanaan. Setelah dikoleksi, baterai bekas di-sortir ke dalam dua kategori berdasarkan SoH threshold $\eta^*$:

- **Kategori Echelon (EC):** $\eta^* \leq \text{SoH} \leq \eta_{\max}$ → masuk ke jalur EU
- **Kategori Recycling (RC):** $\text{SoH} < \eta^*$ → masuk ke jalur RR

Proporsi dialokasikan mengikuti *piecewise linear distribution function*:

$$\rho_e = \frac{\text{SoH} - \eta_{\min}}{\eta^* - \eta_{\min}}, \quad \rho_r = 1 - \rho_e$$

### 2.4 Fungsi Objektif dan Stackelberg Game

JIANG & TANG (2025) merumuskan masalah optimisasi sebagai *two-stage Stackelberg game* dengan OEM sebagai leader. Fungsi profit OEM:

$$\pi_n^{OEM} = (p_n - c_n) D_n - c_{\text{buy}}^b Q_c + s_{\text{subsidy}} Q_c$$

di mana $c_n$ adalah biaya produksi, $c_{\text{buy}}^b$ adalah biaya akuisisi baterai bekas, dan $s_{\text{subsidy}}$ adalah subsidi pemerintah per unit回收回收回收回収回收回收回収回収回收回收回収回収回収回収回収回収回収回収回収回収回収回収回収回收回収回収回収回収回收回收.

Fungsi profit operator echelon:

$$\pi_e = (p_e - c_e - c_{\text{regrade}}) Q_e^{\text{sold}} - c_{\text{cap}} K_e$$

di mana $c_e$ adalah biaya refurbishment, $c_{\text{regrade}}$ adalah biaya pengujian kapasitas dan sorting, dan $c_{\text{cap}} K_e$ adalah biaya kapasitas utilisasi.

Fungsi profit pusat recycling-remanufacturing:

$$\pi_r = \sum_{m \in \mathcal{M}} (r_m - c_m^{r}) Q_m^{\text{recovered}} - c_{\text{dis}} Q_r - c_{\text{env}} E_r$$

di mana $r_m$ adalah harga jual material $m$ (litium, kobalt, nikel, mangan), $c_m^r$ adalah biaya回收 recovery, $c_{\text{dis}}$ adalah biaya disposal residu, dan $c_{\text{env}} E_r$ adalah biaya carbon abatement.

Total profit CLSC:

$$\Pi_{\text{CLSC}} = \pi_n^{OEM} + \pi_e + \pi_r - \theta \cdot \mathbb{E}[\text{Risk}(\xi)]$$

di mana $\theta$ adalah koefisien aversion terhadap ketidakpastian parameter $\xi$ (demand shock, harga material, recovery rate), dan $\mathbb{E}[\text{Risk}]$ adalah ekspektasi risiko yang dimodelkan dengan *Conditional Value at Risk* (CVaR) sesuai pendekatan robust Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

### 2.5 Kendala (Constraints)

Sistem optimisasi tersebut tunduk pada:

$$p_n^{\min} \leq p_n \leq p_n^{\max}, \quad p_e^{\min} \leq p_e \leq p_e^{\max}$$
$$0 \leq Q_e \leq Q_c \rho_e^{\max}, \quad 0 \leq Q_r \leq Q_c (1 - \rho_e^{\min})$$
$$\sum_{m \in \mathcal{M}} Q_m^{\text{recovered}} \leq Q_r \cdot y_m, \quad \forall m$$
$$E_r \leq E_{\text{regulatory}}^{\max}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) mengusulkan *Decision Support Framework* tujuh tahap untuk implementasi industri:

### Tahap 1: Karakterisasi Baterai Bekas (EoL Testing)
- Pengujian kapasitas残存 menggunakan *capacity tester* (Arbin LBT-21084 atau setara)
- Pengukuran *internal resistance* dengan metode AC impedance spectroscopy
- Grading berdasarkan standar GB/T 34014-2017 (China) dan IEC 62933-3-1

### Tahap 2: Optimisasi Distribusi Aliran
Implementasi *Mixed Integer Linear Programming* (MILP) dengan solver CPLEX 22.1 atau Gurobi 11.0 pada server komputasi untuk menentukan alokasi baterai ke jalur echelon vs. recycling. Formulasi MILP mengikuti paper JIANG & TANG (2025).

### Tahap 3: Reverse Logistics Network Design
- Desain rute pengumpulan回收 dari dealer EV, operator fleet, dan*second-life aggregators*
- Optimisasi lokasi fasilitas EU dan RR menggunakan *p-median problem* dengan biaya transport sebagai bobot

### Tahap 4: Echelon Utilization Implementation
- Refurbishment dan re-grading baterai pada rentang SoH 60-80%
- Integrasi ke dalam SESS dengan konverter bidirectional
- Implementasi *Battery Management System* (BMS) generasi kedua untuk mencegah thermal runaway

### Tahap 5: Recycling & Remanufacturing
- Proses *hydrometallurgical leaching* untuk ekstraksi litium, kobalt, nikel
- *Pyrometallurgical smelting* untuk recovery cobalt/nickel sebagai paduan
- Standar referensi: ISO 14001, ISO 45001, R2v3 (Responsible Recycling)

### Tahap 6: Carbon Footprint Accounting
- *Life Cycle Assessment* (LCA) menggunakan software SimaPro 9.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
