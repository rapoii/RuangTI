# 2921 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar terhadap konsumsi energi final global, di mana lebih dari 50% kebutuhan energinya berupa **panas proses** (process heat) pada rentang suhu menengah hingga tinggi (>150°C) untuk aplikasi seperti sterilisasi, distilasi, pengeringan, dan reaksi kimia endotermik (Xu & Wang, 2024). Dekarbonisasi panas proses merupakan tantangan kritis yang harus dijawab melalui kombinasi teknologi efisiensi, elektrifikasi, dan integrasi energi terbarukan. Dalam konteks ini, **High-Temperature Heat Pump (HTHP)** muncul sebagai teknologi unggulan karena mampu menaikkan kualitas termal listrik menjadi panas utilisasi dengan Coefficient of Performance (COP) 3–5, jauh lebih efisien daripada boiler listrik resistif.

Namun, salah satu hambatan fundamental adopsi HTHP adalah ketidakselarasan antara profil permintaan panas proses yang fluktuatif dan ketersediaan listrik terbarukan yang intermiten. **Latent Heat Thermal Energy Storage (LHTES)** berfungsi sebagai *buffer termal* yang menjembatani celah tersebut, memungkinkan operasi HTHP pada kondisi stabil dan optimal meskipun beban proses bervariasi. Toloza, Payá, dan Barceló (2026) menekankan bahwa material **Phase Change Material (PCM)** dengan titik lebur di sekitar 222°C sangat relevan untuk aplikasi industri makanan, kimia halus, dan tekstil, namun kendala rendahnya konduktivitas termal PCM (umumnya 0,5–1,0 W/m·K untuk garam eutektik) menuntut optimalisasi geometri penukar kalor. Penelitian tersebut mengusulkan konfigurasi **shell-and-tube vertikal** yang menawarkan tiga keunggulan utama: kekompakan tinggi, robustness struktural, dan kapasitas untuk *thermal enhancement* melalui penempatan *metal wool* atau sirip internal.

Permasalahan riset yang diidentifikasi oleh Toloza et al. (2026) adalah kebutuhan akan simulasi *transient* yang akurat untuk memprediksi perilaku *melting-solidification* PCM dalam geometri shell-and-tube, guna menghindari kegagalan desain dan under-utilization kapasitas penyimpanan. Model dikembangkan dalam bahasa **Modelica** — bahasa pemodelan acausal yang memungkinkan komposisi subsistem termodinamika dengan fleksibilitas tinggi untuk integrasi dengan model HTHP. Urgensi industri dari penelitian ini adalah menyediakan *digital twin* yang andal untuk sizing unit LHTES yang optimal secara techno-economic.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi pada PCM (Model Entalpy-Porosity)

Untuk memodelkan transisi fasa padatan-cairan pada PCM, pendekatan **enthalpy-porosity method** (Voller & Prakash, 1987; diadopsi dalam karya Toloza et al., 2026) menggabungkan persamaan konservasi energi dengan fungsi *liquid fraction* $\beta$:

$$\frac{\partial (\rho h)}{\partial t} + \nabla \cdot (\rho \mathbf{u} h) = \nabla \cdot (k_{eff} \nabla T)$$

di mana $h$ adalah entalpi spesifik total, $\rho$ densitas, $\mathbf{u}$ vektor kecepatan, dan $k_{eff}$ konduktivitas termal efektif. Hubungan entalpi-suhu dinyatakan dengan teknik *apparent heat capacity*:

$$h(T) = h_{ref} + \int_{T_{ref}}^{T} c_{p,m}(T')\, dT' + \beta L$$

dengan $L$ adalah panas laten peleburan PCM eutektik. *Liquid fraction* $\beta$ dimodelkan sebagai fungsi sigmoid halus di sekitar $T_m$:

$$\beta(T) = \begin{cases} 0 & T \leq T_m - \Delta T/2 \\ \dfrac{T - (T_m - \Delta T/2)}{\Delta T} & T_m - \Delta T/2 < T < T_m + \Delta T/2 \\ 1 & T \geq T_m + \Delta T/2 \end{cases}$$

di mana $\Delta T$ adalah lebar interval *mushy zone* yang menjadi parameter tuning.

### 2.2 Persamaan Momentum dengan Darcy Damping

Untuk mensimulasikan perilaku PCM semi-padat, diterapkan *mushy zone* sebagai media berpori dengan koefisien redaman menurut model Carman-Kozeny:

$$\frac{\partial (\rho \mathbf{u})}{\partial t} + \nabla \cdot (\rho \mathbf{u} \mathbf{u}) = -\nabla p + \mu \nabla^2 \mathbf{u} + \rho \mathbf{g} + A_{mush} \mathbf{u}$$

dengan *mushy zone parameter*:

$$A_{mush} = C \cdot \frac{(1-\beta)^2}{\beta^3 + \epsilon}$$

di mana $C = 10^5$–$10^8$ kg/m³·s adalah konstanta morfologi, dan $\epsilon = 10^{-3}$ adalah konstanta kecil penghindari pembagian nol.

### 2.3 Perpindahan Kalor pada Dinding Tube

Untuk tube sisi HTHP (heat transfer fluid, HTF), persamaan energi 1-D radial:

$$\rho_t c_{p,t} \frac{\partial T_t}{\partial t} = \frac{k_t}{r} \frac{\partial}{\partial r}\left(r \frac{\partial T_t}{\partial r}\right)$$

diabaikan gradien aksial karena laju alir tinggi. Kapasitas total unit LHTES:

$$E_{storage} = \int_V \left[ \rho_{PCM} c_{p,PCM}(T - T_0) + \rho_{PCM} L \cdot \bar{\beta} \right] dV$$

### 2.4 Parameter Material Eutektik pada 222°C

Berdasarkan literatur garam eutektik hidroksida/karbonat (analog dengan komposisi yang dimaksud Toloza et al., 2026):

| Parameter | Nilai Tipikal | Simbol |
|---|---|---|
| Titik lebur | 222°C | $T_m$ |
| Densitas (padat/cair) | 1850 / 1750 kg/m³ | $\rho$ |
| Panas laten | 220 kJ/kg | $L$ |
| Konduktivitas termal | 0,8 W/m·K | $k_{PCM}$ |
| Kapasitas panas | 1,55 kJ/kg·K | $c_p$ |
| Viscositas (cairan) | 4,5 mPa·s | $\mu$ |

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berikut adalah **SOP pemodelan dan desain unit LHTES shell-and-tube** yang distandarkan berdasarkan prosedur Toloza et al. (2026):

### SOP-LHTES-2921: Pemodelan Transient & Desain Unit Penyimpanan Panas Laten

**Fase 1 — Karakterisasi Kebutuhan Proses**
1. Tetapkan profil beban termal $Q(t)$ industri target (misal: proses sterilisasi batch pada suhu 220–230°C).
2. Tentukan durasi operasi (charging) dan durasi pelepasan (discharging).
3. Hitung kapasitas energi total: $E_{req} = \int Q_{proc}\, dt$ [kWh].

**Fase 2 — Seleksi PCM & HTF**
4. Pilih PCM eutektik dengan $T_m$ dalam interval $\pm 5°C$ dari suhu target operasi.
5. Pilih HTF (misalnya *thermal oil* Dowtherm A atau fluida HTHP sintetis) dengan $c_{p,HTF} > 2$ kJ/kg·K dan stabil secara termal pada $T > 230°C$.
6. Verifikasi kompatibilitas kimia PCM dengan material tube (umumnya baja karbon atau stainless steel 316L).

**Fase 3 — Geometri Shell-and-Tube**
7. Tentukan diameter luar tube $d_o$ (umumnya 25,4–50,8 mm) dan diameter dalam $d_i$.
8. Hitung panjang tube total: $L_t = E_{req} / (\rho_{PCM} L \cdot A_{cs} \cdot N_{tube})$, dengan $A_{cs}$ luas penampang PCM anular.
9. Tetapkan pitch tube triangular 1,25 $d_o$ untuk kompaktansi optimal.

**Fase 4 — Pemodelan Numerik Modelica**
10. Bangun *thermal network* dalam Dymola/Modelica dengan komponen 1-D untuk HTF dan 2-D axisymmetric untuk PCM.
11. Kalibrasi parameter $A_{mush}$ dan lebar *mushy zone* $\Delta T$ terhadap data eksperimental literatur.
12. Simulasikan **skenario charging** (HTF masuk 240°C, PCM awal 200°C) selama 8 jam.
13. Simulasikan **skenario discharging** (HTF masuk 180°C, PCM terisi penuh) selama 6 jam.
14. Validasi terhadap data eksperimental *melting front* (front cair-padat) menggunakan perbandingan *liquid fraction* $\beta(x,t)$.

**Fase 5 — Integrasi HTHP**
15. Tentukan kondisi operasi HTHP sumber (sesuai Xu & Wang, 2024): $T_{source}$ (misal 80°C dari waste heat) → $T_{sink}$ (240°C ke HTF).
16. Hitung COP HTHP: $COP = \eta_{Carnot} \cdot \eta_{II} = \dfrac{T_{sink}}{T_{sink}-T_{source}} \cdot \eta_{II}$.
17. Jalankan *co-simulation* LHTES ↔ HTHP untuk menilai stabilitas operasional.

**Fase 6 — Manufaktur, Instalasi & Commissioning**
18. Lakukan factory acceptance test (FAT) pada unit dengan pengukuran kapasitas termal aktual vs nominal (toleransi ±5%).
19. Instalasi sesuai ASME BPVC Section VIII untuk *unfired pressure vessel*.
20. Commissioning dengan *thermal cycling test* minimal 3 siklus charge-discharge penuh.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Sebuah pabrik makanan hendak menyimpan 500 kWh energi termal pada rentang 218–226°C untuk memasok proses *in-container sterilization* pada 222°C selama 5 jam nonstop dengan fluktuasi beban.

**Data input:**
- Energi target: $E_{req} = 500$ kWh $= 1{,}800$ MJ
- PCM: garam eutektik $T_m = 222°C$, $\rho_{PCM} = 1800$ kg/m³, $L = 220$ kJ/kg, $c_p = 1{,}55$ kJ/kg·K
- $T_{awal,PCM} = 200°C$, $T_{akhir,PCM} = 226°C$ saat penuh terisi
- HTF masuk: $T_{HTF,in} = 240°C$, $T_{HTF,out,desain} = 215°C$
- Tube: $d_o = 50{,}8$ mm, $d_i = 48$ mm (ketebalan dinding 1,4 mm), baja SS316L

### 4.2 Perhitungan Kapasitas PCM

Energi yang dibutuhkan per kg PCM dalam satu siklus charge (dari 200°C ke 226°C, melewati transisi fasa pada 222°C):

$$\Delta e = c_p \Delta T_{sensibel} + L + c_p \Delta T_{cair}$$
$$\Delta e = 1{,}55 \times 22 + 220 + 1{,}55 \times 4 = 34{,}1 + 220 + 6{,}2 = 260{,}3 \text{ kJ/kg}$$

Massa PCM total:

$$m_{PCM} = \frac{E_{req}}{\Delta e} = \frac{1{,}800{,}000 \text{ kJ}}{260{,}3 \text{ kJ/kg}} = 6{,}915 \text{ kg}$$

Volume PCM dalam shell-and-tube:

$$V_{PCM} = \frac{m_{PCM}}{\rho_{PCM}}