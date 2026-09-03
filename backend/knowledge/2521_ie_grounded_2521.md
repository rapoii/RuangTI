# 2521 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir seperempat emisi CO₂ global, di mana lebih dari 50% kebutuhan energinya berbentuk panas proses pada rentang suhu menengah–tinggi (100–400°C) (Xu & Wang, 2024). Dalam konteks dekarbonisasi, pompa panas suhu tinggi (*High-Temperature Heat Pump* / HTHP) muncul sebagai teknologi unggulan karena mampu menyediakan panas dengan *Coefficient of Performance* (COP) 3–5, jauh lebih efisien dibanding boiler bahan bakar fosil (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Namun, karakteristik HTHP yang intermiten—bergantung pada availability sumber panas buang dan profil beban industri—menuntut adanya buffer termal yang mampu menyimpan dan melepas energi pada suhu tinggi secara fleksibel.

Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) mengambil peran strategis. Berbeda dengan *sensible heat storage* (SHS), LHTES memanfaatkan *Phase Change Material* (PCM) yang menyimpan energi melalui perubahan fase (padat–cair) pada suhu hampir konstan, sehingga densitas energi volumetriknya 5–10× lebih tinggi (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Untuk aplikasi HTHP pada suhu proses industri (misal: pasteurisasi, sterilisasi, pengeringan, atau distilasi), eutektik nitrat dengan titik lebur di sekitar **222°C** menjadi kandidat menarik karena stabilitas termal dan biaya yang relatif rendah.

Permasalahan utama PCM adalah konduktivitas termal yang rendah (umumnya 0,2–0,7 W/m·K untuk garam nitrat), yang menghambat laju transfer panas dan menurunkan utilisasi energi selama operasi charge/discharge. Toloza et al. (2026) menekankan perlunya optimalisasi geometri *heat exchanger*, solusi enkapsulasi, atau penggunaan *metal wool* untuk meningkatkan laju transfer panas. Di antara alternatif tersebut, konfigurasi **shell-and-tube** menonjol untuk aplikasi industri karena kekompakan, robustness struktural, dan kapasitas peningkatan termalnya (Toloza et al., 2026). Makalah mereka mengembangkan model numerik transient dalam bahasa Modelica untuk menyimulasikan unit LHTES vertikal shell-and-tube yang dirancang beroperasi pada 222°C dan diintegrasikan dengan HTHP—menjawab kebutuhan industri akan alat desain yang dapat memprediksi perilaku dinamis unit penyimpanan sebelum fabrikasi prototipe fisik.

Konteks industri yang melatarbelakangi riset ini sangat konkret: pabrik makanan/minuman, industri kimia, dan fasilitas pemrosesan limbah membutuhkan panas proses stabil di kisaran 200–250°C, di mana fluktuasi beban dapat diminimalkan dengan buffer termal berbasis PCM, sekaligus memungkinkan HTHP beroperasi pada kondisi desain yang optimal, bukan mengikuti puncak beban sesaat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi Transient pada PCM

Model numerik Toloza et al. (2026) menggunakan bentuk persamaan energi 2D *axisymmetric* untuk PCM dalam geometri silinder shell-and-tube, diselesaikan dengan metode kapasitas panas semu (*apparent heat capacity*) untuk menghindari diskontinuitas pada antarmuka padat-cair:

$$\rho \cdot c_p^{app}(T) \cdot \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(r \cdot k^{eff}(T) \cdot \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k^{eff}(T) \cdot \frac{\partial T}{\partial z}\right)$$

dengan $c_p^{app}(T)$ didefinisikan sebagai:

$$c_p^{app}(T) = c_p^s + \frac{L}{T_l - T_s}, \quad T_s \leq T \leq T_l$$

di mana:
- $\rho$ = densitas PCM (kg/m³)
- $c_p^s$ = kapasitas panas fasa padat (J/kg·K)
- $L$ = panas laten peleburan (J/kg)
- $T_s, T_l$ = suhu batas bawah dan atas zona mushy
- $k^{eff}$ = konduktivitas termal efektif, termasuk efek *metal wool* jika diaplikasikan

### 2.2 Neraca Energi pada Heat Exchanger Shell-and-Tube

Untuk fluida kerja HTHP (biasanya refrigerant atau air bertekanan) yang mengalir di dalam tube:

$$\dot{m}_f \cdot c_{p,f} \cdot \frac{dT_f}{dz} = h_{in} \cdot \pi \cdot d_i \cdot (T_{w,i}(z) - T_f(z))$$

Di sisi PCM (shell side):

$$Q_{stored} = \int_{V_{PCM}} \rho \left[\int_{T_i}^{T_f} c_p^{app}(T) \, dT\right] dV$$

Total energi yang dapat disimpan persatuan massa PCM mendekati suhu transisi:

$$q_{st} = c_p^s (T_m - T_{i,s}) + L + c_p^l (T_{f,l} - T_m)$$

dengan $T_m$ suhu lebur eutektik.

### 2.3 Kapasitas Penyimpanan Unit

Kapasitas energi unit LHTES secara keseluruhan:

$$E_{unit} = m_{PCM} \cdot \left[c_p^s (T_m - T_{i,s}) + L + c_p^l (T_{f,l} - T_m)\right]$$

dengan massa PCM:

$$m_{PCM} = \rho_{PCM} \cdot V_{shell} \cdot (1 - \epsilon_{tube}) \cdot (1 - \epsilon_{wool})$$

di mana $\epsilon_{tube}$ dan $\epsilon_{wool}$ berturut-turut adalah fraksi volume tube dan metal wool.

### 2.4 Waktu Discharge dan Laju Transfer

Waktu discharge pada daya termal $\dot{Q}_{HX}$ tertentu:

$$t_{discharge} = \frac{E_{unit}}{\dot{Q}_{HX} \cdot \eta_{HX}}$$

dengan efektivitas heat exchanger $\eta_{HX}$ yang dipengaruhi bilangan NTU:

$$\eta_{HX} = 1 - \exp(-NTU \cdot (1 - C_r))$$

untuk konfigurasi aliran *counter-flow* shell-and-tube dengan $C_r = \min(C_{min}/C_{max}, 1)$.

### 2.5 Kriteria Desain Termal

Batasan kritikal untuk mencegah degradasi PCM dan menjamin keamanan operasi:

$$T_{max,wall} < T_{decomp,PCM} \quad \text{dan} \quad \Delta T_{superheat} < 30\text{ K}$$

Mengikuti rekomendasi Xu & Wang (2024), integrasi HTHP–LHTES memerlukan ramp-up suhu yang terkontrol untuk mencegah thermal shock pada siklus refrigerasi HFC/HFO di HTHP.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES shell-and-tube 222°C untuk integrasi HTHP mengikuti alur rekayasa berikut (Toloza et al., 2026; Xu & Wang, 2024):

**SOP-1: Penentuan Profil Beban Termal**
Lakukan audit energi proses industri (misal: ISO 50002) untuk mengidentifikasi kebutuhan panas pada rentang 180–240°C, durasi puncak, dan *time-of-use* harian. Output: profil Q(t) dan T(t).

**SOP-2: Seleksi PCM Eutektik**
Pilih campuran nitrat (contoh: 60% KNO₃–40% NaNO₃ atau eutektik spesifik pada 222°C). Verifikasi stabilitas siklus (>3000 siklus), kapasitas panas laten >120 kJ/kg, dan toksisitas rendah sesuai REACH.

**SOP-3: Desain Geometri Shell-and-Tube**
- Diameter shell $D_s$: 0,2–0,5 m (tergantung kapasitas)
- Panjang $L$: 1,5–3 m
- Diameter tube $d_i$: 0,025–0,05 m
- Jumlah tube $N_t$: dipilih dari *standard tube layout* (TEMA Class B/C)

**SOP-4: Peningkatan Transfer Panas**
Jika laju transfer native PCM tidak memenuhi target, lakukan:
- Inserksi *metal wool* (porositas 0,85–0,95) untuk menaikkan $k^{eff}$ hingga 3–8× (Toloza et al., 2026).
- Aplikasi *fins* longitudinal pada tube internal.
- Nano-enhancement PCM (*graphite nanoplatelets* 1–3% wt).

**SOP-5: Pemodelan Numerik Transient**
Implementasikan dalam Modelica (atau COMSOL/ANSYS Fluent sebagai alternatif validasi) dengan:
1. Diskretisasi 2D axisymmetric $r$-$z$.
2. Resolusi mesh 0,5–2 mm di zona mushy.
3. Timestep adaptif $\Delta t = 0{,}1$–$1$ s.
4. Boundary condition: konveksi di tube wall, adiabatic di outer shell.

**SOP-6: Validasi Eksperimental**
Bangun prototipe *small-scale* (±5 kWh), instrumentasi termokopel Tipe K multi-titik. Bandingkan data eksperimen dengan model; target kesesuaian <5% RMSE pada profil T(t).

**SOP-7: Integrasi dengan HTHP**
- Pasang *three-way valve* untuk mengalihkan aliran HTHP ke LHTES saat beban rendah.
- Konfigurasikan *control logic* di PLC/DCS: SOC (State of Charge) PCM menjadi variabel kontrol utama.
- Pastikan refrigeran HTHP (R1234ze, R1336mzz, atau CO₂) compatible dengan suhu operasi.

**SOP-8: Standar & Kepatuhan**
Patuhi standar relevan: ASME BPVC Section VIII (desain vessel), EN 13445 (vessel tekan Eropa), ISO 12241 (insulasi termal), dan pedoman IEA SHC Task 58/ECES Annex 30