# 2585 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Temperatur ±222°C untuk Integrasi dengan Heat-Pump Temperatur Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu & Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi final terbesar di dunia, dengan proporsi lebih dari 37% dari total konsumsi energi global, dan sekitar separuh dari kebutuhan tersebut berupa panas proses (*process heat*) pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri merupakan tantangan strategis karena elektrifikasi langsung maupun penggunaan *high-temperature heat-pump* (HTHP) menuntut adanya penyangga termal yang mampu menyeimbangkan profil permintaan间歇 (intermitten) beban panas dengan profil pasokan yang tidak kontinu. Dalam konteks inilah *Latent Heat Thermal Energy Storage* (LHTES) memperoleh peran strategis, karena densitas energi volumetriknya 5–10 kali lebih tinggi dibanding *sensible heat storage*, sekaligus mampu menyimpan energi pada suhu mendekati konstan selama perubahan fasa (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Urgensi teknis yang diangkat oleh Toloza et al. (2026) berpijak pada kenyataan bahwa sebagian besar material *phase change* (PCM) memiliki konduktivitas termal yang rendah ($k_{PCM} \approx 0{,}2$–$0{,}5\ \mathrm{W/m\cdot K}$), sehingga laju transfer panas pada siklus *charge/discharge* menjadi *bottleneck* performa sistem. Untuk mengatasi keterbatasan ini, paper tersebut mengusulkan konfigurasi *shell-and-tube* vertikal yang menawarkan kekompakan, kekakuan struktural, dan kapasitas peningkatan termal melalui optimalisasi geometri *heat exchanger*, enkapsulasi, maupun penggunaan *metal wool*. Unit LHTES dirancang beroperasi pada suhu fasa sekitar 222°C sehingga sesuai untuk acoplarse (berpasangan) dengan HTHP bersuhu evaporator tinggi yang menjadi tulang punggung elektrifikasi panas industri menurut Xu & Wang (2024). Integrasi LHTES–HTHP memungkinkan: (i) pergeseran beban termal (*load shifting*), (ii) peningkatan *coefficient of performance* (COP) rata-rata HTHP, dan (iii) penyediaan cadangan termal saat terjadi fluktuasi permintaan. Secara ekonomi, kombinasi ini menekan *operational expenditure* karena HTHP dapat beroperasi pada regime optimal dalam window waktu yang lebih panjang, sementara biaya kapasitas HTHP dapat ditekan karena puncak beban ditutupi oleh LHTES. Pendekatan numerik transien menjadi penting karena fenomena fasa berlangsung secara dinamis—melt front bergerak seiring waktu, dan kapasitas pemanasan/pendinginan dibatasi oleh resistansi konduksi PCM serta resistansi konveksi pada sisi *heat transfer fluid* (HTF). Pemodelan transien yang akurat memungkinkan prediksi waktu *charge/discharge*, evolusi melt fraction, dan efektivitas termal unit—semuanya krusial bagi perancangan sistem industri nyata.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien pada Toloza et al. (2026) dikembangkan dalam bahasa Modelica dan berbasis pada formulasi *enthalpy method* untuk menangani perubahan fasa secara kontinu, yaitu:

$$H(T) = \rho_{PCM} \left[ c_{p,s} T + \Delta h_f \, f(T) + c_{p,l} (T - T_m) \right]$$

dengan $H(T)$ adalah entalpi volumetrik ($\mathrm{J/m^3}$), $\rho_{PCM}$ densitas PCM ($\mathrm{kg/m^3}$), $c_{p,s}$ dan $c_{p,l}$ kapasitas panas spesifik fasa padat dan cair ($\mathrm{J/kg\cdot K}$), $\Delta h_f$ kalor laten fusa ($\mathrm{J/kg}$), dan $f(T)$ adalah *liquid fraction function* yang dimodelkan sebagai kurva sigmoid agar turunan kedua kontinu:

$$f(T) = \frac{1}{2}\left[1 + \tanh\left(\frac{T - T_m}{\Delta T_{mush}}\right)\right]$$

dengan $T_m$ suhu leleh (sekitar 222°C sesuai paper) dan $\Delta T_{mush}$ lebar pita *mushy zone* (default 1–2 K). Persamaan konservasi energi transien pada PCM radial di dalam annulus shell-and-tube berbentuk:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( k_{PCM}(T) \, r \, \frac{\partial T}{\partial r}\right)$$

Untuk fluida pemanas/pendingin di dalam tube, persamaan konservasi energi 1-D unsteady dengan asumsi *plug flow* dan dispersi aksial dominan konveksi adalah:

$$\rho_{HTF} c_{p,HTF} A_{HTF}\frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} c_{p,HTF}\frac{\partial T_{HTF}}{\partial z} = h_i \pi d_i \left( T_{w,i} - T_{HTF} \right)$$

dengan $\dot{m}_{HTF}$ laju alir massa HTF ($\mathrm{kg/s}$), $A_{HTF}$ luas penampang tube ($\mathrm{m^2}$), $h_i$ koefisien konveksi internal ($\mathrm{W/m^2\cdot K}$), $d_i$ diameter dalam tube, dan $T_{w,i}$ suhu dinding dalam tube. Kondisi batas kopling PCM–HTF di dinding tube diekspresikan melalui kesetimbangan fluks:

$$-k_{PCM} \left.\frac{\partial T}{\partial r}\right|_{r=r_i} = h_i \left( T_{w,i} - T_{HTF} \right)$$

Untuk menghitung $h_i$, digunakan korelasi Nusselt aliran turbulen dalam tube (Dittus–Boelter) selama *charge*:

$$Nu_i = 0{,}023\, Re^{0{,}8}\, Pr^{0{,}4}, \quad h_i = \frac{Nu_i \, k_{HTF}}{d_i}$$

dengan $Re = \rho_{HTF} v d_i / \mu_{HTF}$ dan $Pr = \mu_{HTF} c_{p,HTF} / k_{HTF}$. Resistansi dinding tube dimodelkan dengan *overall heat transfer coefficient* efektif:

$$\frac{1}{U_i} = \frac{1}{h_i} + \frac{d_i \ln(d_o/d_i)}{2 k_{w}} + \frac{d_i}{d_o h_o}$$

Efektivitas unit LHTES pada setiap waktu didefinisikan sebagai rasio energi yang benar-benar disimpan terhadap energi maksimum yang secara termodinamika dapat disimpan:

$$\varepsilon(t) = \frac{Q_{stored}(t)}{Q_{max}} = \frac{\displaystyle\int_0^t \dot{m}_{HTF} c_{p,HTF}(T_{in} - T_{out})\, d\tau}{\rho_{PCM} V_{PCM}\left[c_{p,s}(T_m - T_{i}) + \Delta h_f + c_{p,l}(T_f - T_m)\right]}$$

dengan $T_i$ dan $T_f$ adalah suhu PCM awal dan akhir. *Melt fraction* global digunakan sebagai indikator State-of-Charge (SoC):

$$\text{SoC}(t) = \frac{\displaystyle\int_{V} f(T(\mathbf{x},t))\, dV}{V_{PCM}}$$

Diskretisasi numerik mengikuti *method of lines*: domain radial PCM dibagi menjadi $N_r = 30$–$50$ *node* dengan *control volume* non-uniform (lebih padat di dekat dinding tube untuk menangkap gradien tinggi selama *charge*), sementara domain aksial HTF dibagi $N_z = 50$–$100$. Integrasi waktu menggunakan solver DASSL atau CVODE (terbukti pada aplikasi Modelica untuk stiff problems pada perubahan fasa). Validasi dilakukan terhadap benchmark numerik (*semi-analytical solution* dari *moving boundary problem* untuk *Stefan problem* dengan konstanta fisik), dengan *root-mean-square error* (RMSE) suhu kurang dari 0,8 K.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SOP rekayasa untuk unit LHTES–HTHP mengikuti kerangka 6-tahap yang diturunkan dari metodologi paper Toloza et al. (2026) dan di-*cross-check* terhadap rekomendasi Xu & Wang (2024):

**Tahap 1 – Karakterisasi PCM dan Seleksi HTF.** Tentukan PCM eutectic (paper menggunakan campuran garam nitrat pada $T_m \approx 222°C$), ukur $\Delta h_f$, $c_{p,s}$, $c_{p,l}$, dan $k_{PCM}$ sesuai ASTM E1269 dan ISO 11357 (DSC), serta verifikasi stabilitas termal setelah 1000 siklus. HTF dipilih dengan viskositas rendah pada suhu operasi (umumnya *thermal oil* atau *molten salt*).

**Tahap 2 – Perancangan Geometri Shell-and-Tube.** Tentukan rasio diameter, panjang tube, dan jumlah tube untuk memenuhi target kapasitas penyimpanan $E_{target}$ (kWh). Hubungan energi–geometri: $E_{target} \leq \rho_{PCM} V_{PCM} \Delta h_f$ dengan $V_{PCM}$ volume annulus.

**Tahap 3 – Pembangunan Model Transien.** Bangun model 2D aksimetris (radial PCM, aksial HTF) di Modelica atau COMSOL, terapkan diskretisasi dan *enthalpy method* sesuai Bagian 2.

**Tahap 4 – Simulasi dan Verifikasi.** Jalankan skenario *charge* (HTHP mensuplai panas), *discharge* (proses mengambil panas), dan *standby*. Bandingkan dengan data eksperimen prototipe lab-scale.

**Tahap 5 – Validasi Operasional.** Ukur *melt front propagation* dengan termokopel multi-titik, bandingkan dengan prediksi numerik; lakukan analisis ketidakpastian Monte Carlo pada parameter kunci.

**Tahap 6 – Integrasi Sistem dan Kontrol.** Rancang strategi kontrol *charge/discharge* yang mempertimbangkan COP HTHP yang menurun pada *lift* tinggi (Xu & Wang, 2024). Logika kontrol tipikal: HTHP mengisi LHTES saat tarif listrik rendah dan COP tinggi; LHTES menyuplai proses saat beban puncak.

```
Arsitektur kontrol (pseudo-code):
IF (T_limp > T_demands AND SOC_LHTES < SOC_min) THEN
    activate HTHP in HEATING mode
ELIF (T_demands > T_limp AND SOC_LHTES > SOC_max) THEN
    discharge LHTES to process
ELSE
    HTHP idle, LHTES standby
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi, tinjau unit LHTES–shell-and-tube dengan parameter berikut (diadopsi dari skenario paper Toloza et al., 2026 dengan penyesuaian dimensional):

- Diameter dalam tube: $d_i = 0{,}020\ \mathrm{m}$, diameter luar: $d_o = 0{,}024\ \mathrm{m}$
- Panjang tube efektif: $L = 1{,}5\ \mathrm{m}$, jumlah tube: $N_t = 18$ (konfigurasi triangular pitch)
- Diameter shell: $D_s = 0{,}16\ \mathrm{m}$
- PCM: eutectic salt hidrat dengan $T_m = 222°C$, $\Delta h_f = 180\ \mathrm{kJ/kg}$, $c_{p} = 1{,}8\ \mathrm{kJ/kg\cdot K}$, $\rho_{PCM} = 1850\ \mathrm{kg/m^3}$, $k_{PCM} = 0{,}5\ \mathrm{W/m\cdot K}$
- HTF: *thermal oil*, $\dot{m}_{HTF} = 0{,}06\ \mathrm{kg/s}$ per tube, $c_{p,HTF} = 2{,}3\ \mathrm{kJ/kg\cdot K}$, $k_{HTF} = 0{,}11\ \mathrm{W