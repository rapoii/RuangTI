# 2441 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222 °C untuk Integrasi dengan Pompa Panas Temperatur Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global mengonsumsi sekitar 37 % dari total energi final dunia, dimana lebih dari separuh供给 berupa panas proses (process heat) pada rentang suhu 150 – 400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Aplikasi khas pada rentang 200 – 250 °C mencakup pengeringan kertas, pasteurisasi makanan, reaksi kimia, dan pemrosesan tekstil — semuanya selama ini dipasok oleh boiler bahan bakar fosil. Desakan dekarbonisasi menuntut substitusi boiler tersebut dengan pompa panas temperatur tinggi (*High-Temperature Heat Pump*, HTHP), namun HTHP memiliki karakteristik pembangkitan termal yang fluktuatif dan tidak kontinu karena keterbatasan siklus kompresi-uap pada suhu kondensasi di atas 200 °C.

Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) berperan sebagai buffer termal yang menyimpan energi pada suhu hampir konstan selama proses perubahan fasa *Phase Change Material* (PCM). Menurut Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)), unit LHTES menjadi nilai tambah signifikan ketika digabungkan dengan HTHP, karena dapat menyimpan kelebihan produksi termal saat HTHP beroperasi pada efisiensi puncak (*Coefficient of Performance*, COP tinggi) dan melepaskannya ketika permintaan proses memuncak. Suhu 222 °C dipilih karena merupakan suhu kondensasi khas HTHP berbasis siklus *transcritical CO₂* dan *HFO/HFC blend*, yang merupakan titik operasional paling efisien pada rentang industri makanan-kimia.

Permasalahan utama pada LHTES adalah konduktivitas termal PCM yang rendah (umumnya 0,2 – 0,5 W/m·K), sehingga laju perpindahan panas menjadi bottleneck yang menurunkan *power density* dan meningkatkan waktu pengisian/pengosongan. Toloza dkk. (2026) mengusulkan konfigurasi *shell-and-tube* vertikal sebagai solusi karena tiga keunggulan struktural: (i) kekompakan geometri yang tinggi, (ii) robusteitas mekanis terhadap siklus termal, dan (iii) kapasitas peningkatan termal melalui modifikasi permukaan internal tube. Studi ini membangun pemodelan transien dalam bahasa Modelica untuk memprediksi perilaku unit sebelum fabrikasi fisik, sehingga mengurangi biaya eksperimentasi iteratif.

Konteks industri Eropa — yang menjadi latar paper — menunjukkan bahwa target FIT-FOR-55 Uni Eropa mensyaratkan pengurangan emisi CO₂ industri sebesar 55 % pada 2030, menjadikan integrasi HTHP + LHTES salah satu *technology pathway* paling realistis untuk industri proses suhu menengah-tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan LHTES transien memerlukan penyelesaian persepsi konservasi energi yang digabungkan dengan *apparent heat capacity method* untuk menangani perubahan fasa. Persamaan energi dalam koordinat aksial-simetris (*shell-and-tube*) untuk domain PCM adalah:

$$\rho_{\text{PCM}} \, c_p^{*}(T) \, \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( k_{\text{PCM}} \, r \, \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{\text{PCM}} \, \frac{\partial T}{\partial z} \right)$$

di mana kapasitas panas semu (*apparent heat capacity*) $c_p^{*}$ mencakup kontribusi panas laten $L$ di sekitar suhu fasa $T_m$:

$$c_p^{*}(T) = c_{p,s}(T) + \frac{L}{\Delta T_m} \cdot \exp\!\left[-\frac{(T - T_m)^2}{2 \Delta T_m^2}\right]$$

dengan $c_{p,s}$ kapasitas panas sensible, $L$ panas laten (J/kg), dan $\Delta T_m$ setengah lebar kurva Gaussian yang mengontrol "keburaman" transisi fasa.

Untuk fluida perpindahan panas (*Heat Transfer Fluid*, HTF) yang mengalir di dalam tube pada régimen turbulen, persepsi konservasi energi satu dimensi digabung dengan koefisien perpindahan panas konvektif $h_{\text{HTF}}$:

$$\rho_{\text{HTF}} \, A_c \, c_{p,\text{HTF}} \left( \frac{\partial T_f}{\partial t} + u \frac{\partial T_f}{\partial z} \right) = h_{\text{HTF}} \, P_c \, (T_s - T_f)$$

dengan $u$ kecepatan superfisial HTF, $A_c$ luas penampang tube, $P_c$ keliling tube, dan $T_s$ suhu dinding tube sisi PCM.

Kondisi batas radial di antarmuka HTF–PCM adalah kontinuitas fluks:

$$k_{\text{PCM}} \left.\frac{\partial T}{\partial r}\right|_{r=r_i} = h_{\text{HTF}} \, (T_f - T_s)$$

Untuk proses *charging*, HTF masuk dengan suhu $T_{f,\text{in}} > T_m$, sedangkan pada *discharging* $T_{f,\text{in}} < T_m$. Efektivitas termal unit didefinisikan sebagai:

$$\varepsilon(t) = \frac{T_{f,\text{out}}(t) - T_{f,\text{in}}}{T_{f,\text{in}} - T_m}$$

Energi total tersimpan dihitung sebagai:

$$E_{\text{stored}}(t) = \int_V \rho_{\text{PCM}} \left[ c_{p,s}(T - T_{\text{init}}) + f(T) \cdot L \right] dV$$

dengan $f(T)$ fraksi fasa-cair (*liquid fraction function*). Implementasi Modelica Toloza dkk. (2026) menggunakan diskretisasi 1D-radial dikopling dengan 1D-aksial HTF, diselesaikan dengan *backward-differentiation formula* (BDF) untuk stabilitas stiff yang muncul pada gradien tinggi di sekitar moving solidification front.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari penelitian ini mengikuti alur rekayasa berbasis model (Model-Based Systems Engineering, MBSE):

```
┌──────────────────────────────────────────────────────────────┐
│ 1. DEFINISI SPESIFIKASI OPERASIONAL                          │
│    • Suhu proses: T_proses = 222 ± 5 °C                      │
│    • Kapasitas termal: Q_design (kW_th)                      │
│    • Durasi discharge: t_dis ≥ 4 jam                         │
│    • Siklus harian: 1 charge + 1 discharge                   │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. SELEKSI PCM EUTEKTIK                                      │
│    • Kisaran fasa 215 – 230 °C (contoh: campuran nitrat)     │
│    • L > 150 kJ/kg, k > 0,3 W/m·K                           │
│    • Stabilitas siklus ≥ 1000 siklus (TGA/DSC)               │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. DESAIN GEOMETRI SHELL-AND-TUBE                           │
│    • D_shell, D_tube, N_tubes, panjang L_total               │
│    • Spacing antar-tube (pitch ratio 1,25 – 1,5)            │
│    • Orientasi vertikal (menghindari stratifikasi gas)       │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 4. PEMODELAN TRANSIEN MODELICA                               │
│    • Diskretisasi FEM 1D-radial + 1D-aksial HTF              │
│    • Perpindahan fase: apparent heat capacity method         │
│    • Validasi benchmark (analitik Neumann / numerik publik)  │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 5. SIMULASI & OPTIMASI                                       │
│    • Sweep parameter: mass_flow, T_in, geometri              │
│    • Analisis sensitivitas terhadap k_PCM, L, ΔT_m           │
│    • Trade-off: power density vs energi tersimpan            │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 6. PROTOTIPE & VALIDASI EKSPERIMENTAL                        │
│    • Fabrikasi sesuai ASME BPVC Section VIII                │
│    • Instrumentasi termokopel Tipe-K multi-point             │
│    • Uji siklus charge-discharge terkontrol                  │
└──────────────────────────────────────────────────────────────┘
```

Standar rujukan yang relevan mencakup **ISO 13790** untuk karakterisasi termal bangunan (diadaptasikan ke skala industri), **EN 12977** untuk sistem termal dengan storage, serta **ASHRAE Handbook—HVAC Applications** Bab 51 tentang thermal storage. Pemilihan Modelica (bukan CFD 3-D penuh) oleh Toloza dkk. (2026) dilandasi oleh *computational cost* yang jauh lebih rendah (orde menit vs hari) dengan tetap mempertahankan akurasi ±5 – 10 % terhadap data eksperimen.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Spesifikasi Desain (Dimensi Tipikal Unit 50 kWh·th):**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM eutektik (misal: HTS-22 nitrat) | $L = 220$ | kJ/kg |
| Kapasitas panas sensible | $c_{p,s} = 1{,}55$ | kJ/(kg·K) |
| Konduktivitas PCM | $k_{\text{PCM}} = 0{,}45$ | W/(m·K) |
| Massa PCM | $m_{\text{PCM}} = 200$ | kg |
| Diameter tube dalam | $D_i = 0{,}020$ | m |
| Diameter shell | $D_o = 0{,}150$ | m |
| Panjang unit | $L = 1{,}5$ | m |
| HTF (sintetik oil) | $\dot{m} = 0{,}10$ | kg/s |
| $c_{p,\text{HTF}}$ | $2{,}10$ | kJ/(kg·K) |
| $T_{f,\text{in}}$ (charging) | $240$ | °C |
| $T_m$ (PCM melting) | $222$ | °C |
| $h_{\text{HTF}}$ (turbulen) | $350$ | W/(m²·K) |

**Perhitungan 1 — Kapasitas Energi Teoritis:**

$$E_{\text{theoritis}} = m_{\text{PCM}} \cdot L = 200 \cdot 220 = 44.000 \text{ kJ} = 12{,}2 \text{ kWh}$$

Tambahan energi sensible untuk pemanasan 15 °C di atas $T_m$:

$$E_{\text{sens}} = m_{\text{PCM}} \cdot c_{p,s} \cdot \Delta T = 200 \cdot 1{,}55 \cdot 15 = 4.650 \text{ kJ} \approx 1{,}3 \text{ kWh}$$

Total kapasitas desain: **≈ 13,5 kWh** per siklus.

**Perhitungan 2 — Laju Perpindahan Panas Saat Charging Awal:**

Luas permukaan tube (asumsi 7 tube): $A = N \cdot \$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
