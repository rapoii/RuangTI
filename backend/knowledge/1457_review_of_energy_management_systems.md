# 1457 — Sistem Manajemen Energi dan Metode Optimasi untuk Mikrogrid Bangunan Hibrida Berbasis Hidrogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Review of Energy Management Systems and Optimization Methods for Hydrogen-Based Hybrid Building Microgrids*
**Jurnal & Sitasi Utama:** Fahad Ali Sarwar, Ignacio Hernando-Gil, Ionel Vechiu (2024). *Energy Conversion and Economics*. DOI: [https://doi.org/10.1049/enc2.12126](https://doi.org/10.1049/enc2.12126)
**Sitasi Pendukung:** Muhammad Bakr Abdelghany, Ahmed Al-Durra, Fei Gao (2023). *IEEE Transactions on Sustainable Energy*. DOI: [https://doi.org/10.1109/tste.2023.3263540](https://doi.org/10.1109/tste.2023.3263540)

---

## 1. Pendahuluan dan Konteks Industri

Sektor bangunan menyumbang hampir 30–40% konsumsi energi final global menurut laporan IEA, sehingga dekarbonisasi *building microgrid* menjadi agenda strategis dalam transisi energi. Mikrogrid berbasis energi terbarukan (PV, turbin angin kecil, mikro-CHP) memiliki volatilitas inherent yang hanya dapat dimitigasi melalui sistem penyimpanan energi (Energy Storage Systems/ESS). Selama dua dekade terakhir, baterai elektrokimia seperti Lithium-ion mendominasi pasar ESS, namun karakteristiknya yang memiliki *energy density* rendah (≈90–250 Wh/kg) dan degradasi siklik yang cepat menjadi *bottleneck* dalam aplikasi *long-duration storage* (LDS) untuk kebutuhan 8–24 jam (Sarwar et al., 2024).

Sarwar, Hernando-Gil, dan Vechiu (2024) dalam *review* mereka di *Energy Conversion and Economics* menyoroti bahwa hidrogen (H₂) muncul sebagai *game-changer* karena *energy density* gravimetrik-nya yang mencapai 33,33 kWh/kg (untuk LHV) atau setara 120 MJ/kg, jauh melampaui baterai. Tantangan industrial engineering-nya bukan pada ketersediaan teknologi elektroliser (*proton exchange membrane*, PEM) dan *fuel cell* (PEMFC/SOFC), melainkan pada perancangan *Energy Management System* (EMS) yang mampu mengkoordinasikan multi-storage secara *real-time* dengan tetap memenuhi kendala fisik, ekonomi, dan degradasi aset.

Urgensi operasional ini diperkuat oleh Abdelghany, Al-Durra, dan Gao (2023) yang menunjukkan bahwa tanpa strategi EMS yang tepat, degradasi baterai dan *hydrogen devices* (elektroliser + tangki + fuel cell) dapat menurunkan *lifespan* sistem hingga 40–60%, menghambat komersialisasi skala besar. Kedua paper ini menjadi *state-of-the-art reference* bagi perekayasa industri yang merancang arsitektur kontrol optimal untuk mikrogrid hibrida, dengan penekanan pada *trade-off* antara biaya operasional, umur pakai aset, dan kepatuhan terhadap *grid code* (misalnya IEEE 1547-2018 dan IEC 61727). Kajian ini sangat relevan bagi fasilitas industri besar, kampus, rumah sakit, dan *data center* yang memerlukan *high reliability* serta *net-zero carbon* commitment.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Sistem Hibrida

Sistem yang dikaji terdiri atas empat subsistem utama: (i) sumber PV/wind, (ii) *battery energy storage system* (BESS), (iii) *hydrogen energy storage system* (HESS) yang mencakup elektroliser, tangki H₂, dan *fuel cell*, serta (iv) beban bangunan yang mungkin meliputi EV charger. Formulasi *power balance* untuk *time-step* diskret $\Delta t$ adalah:

$$P_{PV}(k) + P_{WT}(k) + P_{bat}^{dis}(k) + P_{fc}(k) = P_{load}(k) + P_{elz}(k) + P_{bat}^{ch}(k) + P_{grid}^{exp}(k) - P_{grid}^{imp}(k)$$

dengan $P_{bat}^{ch}(k), P_{bat}^{dis}(k)$ adalah daya isi/lepas baterai, $P_{elz}$ adalah konsumsi elektroliser, dan $P_{fc}$ adalah produksi *fuel cell* (Abdelghany et al., 2023).

### 2.2 Model Dinamis State-of-Charge (SoC)

SoC baterai dan Level of Hydrogen (LoH) tangki dimodelkan sebagai berikut:

$$SoC_{bat}(k+1) = SoC_{bat}(k) + \frac{\eta_{ch} P_{bat}^{ch}(k) - \tfrac{1}{\eta_{dis}} P_{bat}^{dis}(k)}{E_{bat}^{nom}} \Delta t$$

$$LoH(k+1) = LoH(k) + \frac{\eta_{elz} P_{elz}(k)}{LHV_{H_2} \cdot M_{tank}} \Delta t - \frac{P_{fc}(k)}{\eta_{fc} \cdot LHV_{H_2} \cdot M_{tank}} \Delta t$$

dengan $LHV_{H_2} = 33{,}33~\text{kWh/kg}$ dan $M_{tank}$ adalah kapasitas tangki dalam kg.

### 2.3 Fungsi Biaya dengan Degradasi

Inovasi utama Abdelghany et al. (2023) adalah memasukkan biaya degradasi baterai dan perangkat hidrogen ke dalam *objective function*:

$$J = \sum_{k=0}^{N-1} \left[ C_{grid}(k) + C_{bat}^{deg}(k) + C_{H_2}^{deg}(k) + C_{loss}(k) \right] \Delta t$$

dengan:

$$C_{bat}^{deg}(k) = \frac{C_{bat}^{inv}}{N_{bat}^{cycle}} \cdot \left( \frac{|I_{bat}(k)|}{I_{bat}^{rated}} \right)^{\alpha}$$

$$C_{H_2}^{deg}(k) = \frac{C_{elz}^{inv}}{L_{elz}^{life}} \cdot P_{elz}(k) + \frac{C_{fc}^{inv}}{L_{fc}^{life}} \cdot P_{fc}(k)$$

di mana $\alpha \approx 1{,}3$–$1{,}8$ mengikuti hukum *Peukert* termodifikasi.

### 2.4 Formulasi Model Predictive Control (MPC)

Problem optimasi MPC dalam horizon prediksi $H_p$ diselesaikan melalui *mixed-logic dynamic* (MLD) framework:

$$\min_{u(\cdot)} \sum_{k=k_0}^{k_0+H_p-1} J(k)$$

$$\text{subject to:}$$

$$\mathbf{x}(k+1) = \mathbf{A}\mathbf{x}(k) + \mathbf{B}_u \mathbf{u}(k) + \mathbf{B}_d \mathbf{d}(k)$$

$$\mathbf{y}(k) = \mathbf{C}\mathbf{x}(k)$$

$$\underline{\mathbf{x}} \leq \mathbf{x}(k) \leq \bar{\mathbf{x}}, \quad \underline{\mathbf{u}} \leq \mathbf{u}(k) \leq \bar{\mathbf{u}}$$

dimana $\mathbf{x} = [SoC_{bat}, LoH]^T$ adalah *state vector*, $\mathbf{u} = [P_{bat}^{ch}, P_{bat}^{dis}, P_{elz}, P_{fc}, P_{grid}]^T$ adalah *control vector*, dan $\mathbf{d}$ adalah gangguan (radiasi PV, kecepatan angin, profil beban). Penggunaan MLD memungkinkan konversi kendala logika (misalnya *on/off* status elektroliser dengan *minimum up-time*) menjadi *mixed-integer linear constraints* yang solvable oleh MILP solver (Sarwar et al., 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis dari kedua paper, SOP rekayasa untuk implementasi EMS hidrogen terbagi dalam delapan tahapan:

**Tahap 1 — Karakterisasi Beban dan Sumber.** Pengukuran profil beban bangunan selama minimal 12 bulan (interval 1–15 menit), produksi PV/Wind menggunakan data TMY (Typical Meteorological Year), dan identifikasi *peak demand* musiman.

**Tahap 2 — Sizing Awal.** Kapasitas BESS dan HESS dihitung melalui optimasi dua tingkat (*bi-level*):

$$\min_{E_{bat}, M_{tank}} LCOE = \frac{\sum_t C_t (1+r)^{-t}}{\sum_t E_t (1+r)^{-t}}$$

dengan $r$ adalah *discount rate*.

**Tahap 3 — Pemodelan Dinamis.** Implementasi model MLD dalam MATLAB/Simulink atau Python (Pyomo + Gurobi/CPLEX). Validasi model elektrokimia baterai menggunakan *equivalent circuit model* (ECM) orde-1 dengan parameter $R_0, R_1, C_1$.

**Tahap 4 — Desain Arsitektur EMS.** Pemilihan tingkatan kontrol: (i) *primary control* (detik, droop-based), (ii) *secondary control* (menit, MPC), (iii) *tertiary control* (jam, optimasi ekonomi). Sarwar et al. (2024) merekomendasikan struktur tiga tingkat dengan komunikasi berbasis IEC 61850.

**Tahap 5 — Tuning Parameter MPC.** Horizon prediksi $H_p$ dipilih 4–24 jam, *control horizon* $H_c$ = 1–4 jam, dan *weighting matrix* $\mathbf{Q}, \mathbf{R}$ dituning menggunakan algoritma *Bayesian optimization* untuk meminimalkan *regret*.

**Tahap 6 — Integrasi *Hardware-in-the-Loop* (HIL).** Pengujian *real-time* menggunakan OPAL-RT atau RTDS sebelum deployment ke *power hardware*.

**Tahap 7 — Commissioning dan Validasi.** *String test* mengacu pada IEEE 1547.1-2020, pengujian *anti-islanding*, dan verifikasi *power quality* (THD < 5% sesuai IEEE 519-2014).

**Tahap 8 — Operasi, Pemantauan, dan Pemeliharaan.** Implementasi *digital twin* berbasis data SCADA dengan interval retraining model 3–6 bulan untuk menangani *drift* performa komponen.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Sistem

Studi kasus: gedung komersial 500 kW *peak load*, 200 kW PV, 100 kW wind, BESS 250 kWh (Li-ion), HESS 50 kg H₂ (≈1667 kWh), elektroliser 100 kW PEM, *fuel cell* 100 kW PEMFC.

### 4.2 Perhitungan Profil Harian Tipikal

Asumsikan radiasi PV mengikuti pola sinusoidal jam 06:00–18:00 dengan *peak* 200 kW pukul 12:00, sementara *wind* menghasilkan rata-rata 60 kW dengan fluktuasi ±20%. Beban mengikuti pola *office building*: 350 kW (08:00–18:00), 250 kW (18:00–23:00), 100 kW (23:00–06:00). Pada pukul 14:00 terjadi *surplus*:

$$P_{surplus}(14{:}00) = 200 + 80 - 350 = -70~\text{kW (defisit)}$$

Karena *surplus* PV tidak cukup untuk elektroliser, EMS berbasis rule-based akan mendahulukan baterai, sedangkan MPC optimal akan mempertimbangkan *degradation cost* dan *hydrogen price forecasting*.

### 4.3 Simulasi Numerik Optimasi MPC

Misalkan parameter biaya: $C_{grid}^{imp} = 0{,}15~\text{USD/kWh}$, $C_{grid}^{exp} = 0{,}08~\text{USD/kWh}$, $C_{bat}^{inv} = 250~\text{USD/kWh}$, $C_{elz}^{inv} = 1200~\text{USD/kW}$, $C_{fc}^{inv} = 1500~\text{USD/kW}$, $N_{bat}^{cycle} = 5000$, dan umur $L_{elz} = 40.000~\text{jam}$.

Untuk satu siklus harian pada jendela optimasi 24-jam dengan $\Delta t = 1$ jam:

$$J_{rule-based} = \sum_{k=1}^{24} \left[ 0{,}15 \cdot 100 + \frac{250}{5000} \cdot 150 + \frac{1200}{40000} \cdot 30 + \frac{1500}{20000} \cdot 40 \right]$$

$$J_{rule-based} \approx 360 + 7{,}5 + 0{,}9 + 3{,}0 = 371{,}4~\text{USD/hari}$$

Dengan MPC yang mempertimbangkan *peak shaving* dan *deferrable hydrogen production*, hasil Abdelghany et al. (2023) menunjukkan reduksi biaya hingga **18–25%**, sehingga:

$$J_{MPC} \approx 0{,}78 \times 371{,}4 = 289{,}7~\text{USD/hari}$$

Penghematan tahunan: $(371{,}4 - 289{,}7) \times 365 \approx 29.846~\text{USD/tahun}$.

### 4.4 Perhitungan Degradasi dan Lifetime

Dengan DoD (Depth of Discharge) rata-rata 70% dan satu siklus per hari:

$$N_{bat}^{actual} = N_{bat}^{cycle} \times \left( \frac{DoD_{ref}}{DoD_{actual}} \right)^{0{,}5} = 5000 \times \left( \frac{0{,}8}{0{,}7} \right)^{0{,