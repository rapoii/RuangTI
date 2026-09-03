# 2217 — Model Numerik Transient Unit Penyimpanan Energi Termal Panas Laten Suhu ~222 °C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar permintaan energi termal tingkat menengah–tinggi (200–400 °C), yang secara historis dipenuhi oleh boiler bahan bakar fosil. Dalam konteks dekarbonisasi sistem energi industri, integrasi antara *High-Temperature Heat Pump* (HTHP) dan unit *Latent Heat Thermal Energy Storage* (LHTES) muncul sebagai arsitektur unggulan yang menjawab dua permasalahan simultan: fluktuasi beban termal proses dan defisit konduktivitas termal material fasa-ubah (*phase change material*/PCM). Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa keterbatasan utama adopsi LHTES pada rentang ~222 °C adalah konduktivitas termal PCM yang rendah, sehingga memerlukan optimalisasi geometri penukar panas, solusi enkapsulasi, atau penggunaan wol logam sebagai media penguat.

Xu dan Wang (2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)) memperkuat narasi ini dengan menunjukkan bahwa dekarbonisasi energi termal mensyaratkan kombinasi tiga pilar: elektrifikasi proses termal melalui HTHP, integrasi penyimpanan termal untuk mengatasi kesenjangan temporal antara produksi dan konsumsi panas, serta digitalisasi sistem melalui model numerik untuk prediksi perilaku transien. Pada level operasional, kombinasi HTHP-LHTES memungkinkan *peak shaving*, perataan profil beban listrik, peningkatan *coefficient of performance* (COP) HTHP, dan decoupling antara jam produksi panas dengan jam kebutuhan proses—semuanya berdampak langsung pada *levelized cost of storage* (LCOS) dan pengembalian investasi modal.

Urgensi rekayasa industri muncul dari realitas bahwa banyak proses (pengeringan, sterilisasi, distilasi, *steam generation*) beroperasi pada suhu yang selaras dengan titik lebur eutektik nitrat (misalnya campuran NaNO₃–KNO₃ dengan *melting point* ~220–230 °C). Tanpa model numerik transien yang tervalidasi, perancang industri tidak dapat memprediksi berapa lama sebuah unit LHTES vertikal *shell-and-tube* mampu mempertahankan *outlet temperature* proses pada debit HTF yang ditentukan—suatu variabel desain yang menentukan kapasitas produksi dan utilisasi aset. Kertas Toloza et al. (2026) menjawab kebutuhan ini dengan mengembangkan model transient 2D aksisimetris dalam bahasa Modelica, yang mampu mensimulasikan evolusi front peleburan/pembekuan PCM selama operasi pengisian dan pelepasan energi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Representasi Panas Laten dengan Metode Kapasitas Panas Efekif

Untuk menghindari diskontinuitas pada antarmuka fasa padat–cair, Toloza et al. (2026) mengadopsi formulasi *apparent heat capacity* yang meleburkan panas laten ke dalam fungsi kapasitas panas efektif:

$$c_{p,eff}(T) = c_{p,s} + \frac{L}{(T_l - T_s)\sqrt{\pi/\ln(10^{16})}}\exp\left[-\frac{(T - T_m)^2 \ln(10^{16})}{(T_l - T_s)^2}\right]$$

dengan $c_{p,s}$ kapasitas panas fase padat, $L$ panas laten fusi (J/kg), $T_m$ suhu fusi, dan $T_l - T_s$ selang transisi fasa (biasanya 1–5 K). Fungsi Gaussian dengan faktor $\ln(10^{16})$ memastikan regularisasi numerik tanpa mengintroduksi difusi panas artifisial berlebihan.

### 2.2 Persamaan Pengendalian pada PCM (2D Aksisimetris)

Geometri *shell-and-tube* vertikal dengan PCM di sisi *shell* dan *heat transfer fluid* (HTF) di dalam tabung menghasilkan persamaan konduksi tidak tunak 2D:

$$\rho_{PCM}\,c_{p,eff}(T)\frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(r\,k_{PCM}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k_{PCM}\frac{\partial T}{\partial z}\right)$$

dengan $r$ koordinat radial, $z$ aksial, $k_{PCM}$ konduktivitas termal efektif (yang dapat mencakup kontribusi wol logam jika digunakan), dan $\rho_{PCM}$ densitas PCM.

### 2.3 Persamaan Energi HTF dalam Tabung

Untuk HTF yang mengalir secara paksa, persamaan konservasi energi 1D konveksi-difusi dominan:

$$\rho_{HTF}\,c_{p,HTF}\,A_{cs}\frac{\partial T_f}{\partial t} + \dot{m}\,c_{p,HTF}\frac{\partial T_f}{\partial z} = h_i\,\pi D_i\,(T_{w,i} - T_f)$$

dengan $A_{cs}$ luas penampang aliran, $\dot{m}$ laju aliran massa, $h_i$ koefisien konveksi internal yang dihitung dari korelasi Nusselt (misal Dittus–Boelter untuk aliran turbulen: $Nu = 0{,}023\,Re^{0,8}Pr^{0,4}$), $D_i$ diameter dalam tabung, dan $T_{w,i}$ suhu dinding dalam.

### 2.4 Kopling Dinding Tabung

Kontinuitas fluks panas pada dinding tabung logam mensyaratkan:

$$-k_{PCM}\frac{\partial T}{\partial r}\bigg|_{r=R_o} = \frac{k_{w}}{\delta_w}(T_{w,o} - T_{w,i}) = h_i(T_{w,i} - T_f)$$

dengan $R_o$ radius luar tabung, $k_w$ konduktivitas termal dinding, dan $\delta_w$ tebal dinding. Persamaan ini diselesaikan secara iteratif karena seluruh ruas bergantung pada $T_{w,i}$ dan $T_{w,o}$ yang tidak diketahui.

### 2.5 Diskritisasi dan Implementasi Modelica

Model Toloza et al. (2026) menggunakan *method of lines* dengan diskritisasi ruang pada grid staggered (50–100 sel radial, 100–200 sel aksial) dan integrator waktu CVODE atau DASPK untuk stiff ODE. Bahasa Modelica (melalui Dymola atau OpenModelica) memungkinkan deklarasi variabel fasa dan parameter termofisika sebagai fungsi suhu piecewise.

## 4. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP berlapis berikut:

**Fase 1 — Karakterisasi Kebutuhan Proses.** Tentukan profil suhu HTF masuk/keluar proses, debit massa, durasi operasi harian, dan *target discharge time* (mis. 4 jam operasi pada 200 °C). Ini menjadi *design basis* kapasitas penyimpanan:

$$E_{req} = \dot{m}_{HTF}\,c_{p,HTF}\,\Delta T_{designed}\,t_{discharge}$$

**Fase 2 — Seleksi PCM dan Konfigurasi Shell-and-Tube.** Pilih eutektik nitrat dengan $T_m$ dalam selang ±5 °C dari suhu target. Tentukan diameter tabung (umumnya 25–50 mm untuk HTHP), panjang efektif (1,5–3 m), dan jumlah tabung yang memenuhi kapasitas. Validasi dengan kriteria *Biot number* dan *Stefan number*:

$$Ste = \frac{c_{p,s}(T_{in} - T_m)}{L}$$

Nilai $Ste \ll 1$ mengindikasikan proses *melting front* dominan dan kapasitas termal PCM efektif.

**Fase 3 — Kalibrasi dan Validasi Model Numerik.** Jalankan simulasi Modelica dengan parameter termofisika PCM hasil DSC (Differential Scanning Calorimetry). Bandingkan profil suhu hasil simulasi dengan eksperimen pelepasan muatan pada unit prototipe. Target: RMSE < 2 K pada prediksi *outlet temperature*.

**Fase 4 — Integrasi dengan HTHP dan Sistem Kontrol.** Hubungkan model LHTES dengan model kompresor HTHP (siklus transkritis CO₂ atau siklus Rankine terbalik dengan refrigeran HFO/HFC). Atur strategi kontrol *charging* (HTHP→LHTES) pada jam tarif listrik rendah dan *discharging* (LHTES→proses) pada jam produksi puncak.

**Fase 5 — Commissioning dan Performance Test.** Lakukan *charge–discharge cycling test* sesuai ISO 17777 atau protokol IEA SHC Task 58/ECES Annex 29 untuk validasi kapasitas termal, retensi panas setelah 24 jam, dan degradasi termofisika setelah 500 siklus.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain Unit LHTES

Sebuah pabrik makanan kaleng di kawasan industri membutuhkan 800 kWh termal/hari pada suhu proses 200 °C (steam untuk sterilisasi). Sistem dirancang menggunakan unit *shell-and-tube* vertikal, PCM eutektik 50%NaNO₃–50%KNO₃ dengan parameter termofisika tipikal pada literatur (Shamberger & Bruno, 2020; Zhang et al., 2020):

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Suhu fusi | $T_m$ | 222 | °C |
| Panas laten | $L$ | 161 | kJ/kg |
| $c_{p,s}$ | – | 1,55 | kJ/(kg·K) |
| $c_{p,l}$ | – | 1,70 | kJ/(kg·K) |
| $k_{PCM}$ | – | 0,65 | W/(m·K) |
| $\rho_{PCM,l}$ | – | 1895 | kg/m³ |
| Diameter tabung $D_o$ | – | 0,048 | m |
| Panjang $L$ | – | 2,0 | m |
| Jumlah tabung | $N_t$ | 24 | – |

### 4.2 Perhitungan Kapasitas Panas

Massa PCM per tabung (annulus antara $R_o$ dan $R_{shell}$):

$$V