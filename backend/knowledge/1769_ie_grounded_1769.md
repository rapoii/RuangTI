# 1769 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global menyerap hampir 50% dari konsumsi energi final dunia, di mana lebih dari separuh kebutuhan tersebut berupa **panas proses** pada rentang suhu 100–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Permintaan panas proses pada suhu menengah-tinggi (150–250°C) banyak dijumpai pada industri makanan dan susu, pengeringan tekstil, pulp & paper, sterilisasi kimia, serta distilasi bioenergi. Selama hampir satu abad, pasokan panas tersebut dipenuhi oleh boiler gas alam atau uap panas buang yang bersifat *carbon-intensive*. Dekarbonisasi panas proses menjadi salah satu tantangan paling mendesak dalam transisi energi industri, dan menurut Xu & Wang (2024), **High-Temperature Heat Pumps (HTHPs)** merupakan salah satu teknologi paling prospektif untuk menggantikan boiler berbasis fosil karena mampu menaikkan *Coefficient of Performance* (COP) sistem hingga 3–5 kali lipat melalui integrasi listrik terbarukan.

Namun, sifat fluktuatif dari energi terbarukan (surya, angin) dan ketidakselarasan antara kurva permintaan proses dengan ketersediaan energi memerlukan **penyangga termal** yang mampu menyimpan energi pada suhu tinggi. Di sinilah **Latent Heat Thermal Energy Storage (LHTES)** berperan penting. Berbeda dengan *sensible heat storage* (SHS) yang mengandalkan perubahan suhu, LHTES memanfaatkan **Phase Change Material (PCM)** untuk menyimpan energi dalam bentuk panas laten pada suhu fasa perubahan yang relatif konstan—ideal untuk pencocokan antara produksi dan konsumsi panas proses. Menurut Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)), integrasi LHTES pada suhu ~222°C dengan HTHP memberikan nilai tambah strategis untuk aplikasi industri, namun terkendala oleh **konduktivitas termal PCM yang rendah** (umumnya < 1 W/m·K untuk garam eutektik).

Permasalahan utama tersebut memerlukan optimalisasi tiga hal secara simultan: (i) geometri penukar panas, (ii) solusi enkapsulasi PCM, dan (iii) penggunaan **metal wool/fin** untuk peningkatan perpindahan panas. Di antara alternatif tersebut, konfigurasi **shell-and-tube** menawarkan tiga keunggulan struktural: kekompakan tinggi, robustness mekanis terhadap siklus termal, dan kapasitas peningkatan termal yang fleksibel. Oleh karena itu, makalah Toloza et al. (2026) menyajikan **model numerik transien** yang dikembangkan dalam bahasa **Modelica** untuk menyimulasikan unit LHTES vertikal *shell-and-tube* menggunakan **garam eutektik** pada suhu operasi 222°C, yang menjadi fokus utama modul pengetahuan ini.

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis LHTES transien dikembangkan dengan menerapkan **konservasi energi** pada elemen volumetrik PCM dan fluida perpindahan panas (HTF) secara terpisah. Karena fase perubahan terjadi pada rentang suhu kecil di sekitar suhu lebur $T_m$, digunakan pendekatan **enthalpy method** atau **apparent heat capacity** untuk menangkap efek pelepasan panas laten.

### 2.1 Persamaan PengGovernan PCM

Untuk domain PCM dengan geometri aks-simetris (radial $r$ dan aksial $z$), persamaan energi transien dalam koordinat silindris adalah:

$$\rho_{pcm} \frac{\partial H}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(k_{pcm} \, r \, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{pcm} \, \frac{\partial T}{\partial z}\right)$$

di mana $\rho_{pcm}$ adalah densitas PCM (kg/m³), $k_{pcm}$ konduktivitas termal (W/m·K), dan $H$ entalpi spesifik (J/kg) yang mencakup kontribusi sensible dan laten.

### 2.2 Pendekatan Kapasitas Panas Nyata (*Apparent Heat Capacity*)

Untuk implementasi numerik, fungsi $H(T)$ dilinearisasi menjadi kapasitas panas efektif $c_p^*(T)$:

$$c_p^*(T) = c_{p,s} + \frac{L}{T_l - T_s} \cdot f(T)$$

dengan $c_{p,s}$ kapasitas panas fase padat, $L$ panas laten (J/kg), $T_l - T_s$ lebar interval fasa, dan $f(T)$ fungsi regularisasi Gaussian atau sigmoid. Pada $T = T_m$:

$$f(T_m) = 1 \quad \Rightarrow \quad c_p^*(T_m) = c_{p,s} + \frac{L}{T_l - T_s}$$

Untuk PCM garam eutektik NaNO₃–KNO₃ yang digunakan Toloza et al. (2026), nilai parameter tipikal: $T_m \approx 222°C$, $L \approx 100$ kJ/kg, $c_{p,s} \approx 1{,}5$ kJ/kg·K, $\rho_{pcm} \approx 1900$ kg/m³, dan $k_{pcm} \approx 0{,}5$ W/m·K.

### 2.3 Neraca Energi pada Sisi HTF

HTF (minyak termal) mengalir di dalam tabung-tabung dengan kecepatan $u_{htf}$. Asumsi *plug flow* satu dimensi memberikan:

$$\rho_{htf} \, c_{p,htf} \, A_t \frac{\partial T_{htf}}{\partial t} + \dot{m}_{htf} \, c_{p,htf} \frac{\partial T_{htf}}{\partial z} = h_i \, P_t \, (T_{w,i} - T_{htf})$$

di mana $A_t$ luas penampang tabung (m²), $P_t$ keliling dalam tabung (m), $h_i$ koefisien konveksi internal (W/m²·K), dan $T_{w,i}$ suhu dinding dalam tabung.

### 2.4 Kopling Termal Dinding Tabung

Kondisi batas pada antarmuka HTF–dinding–PCM diselesaikan dengan resistansi seri:

$$\frac{T_{htf} - T_{pcm}}{R_{total}} = q''$$

dengan $R_{total} = \dfrac{1}{h_i} + \dfrac{\ln(D_o/D_i)}{2\pi k_w L} + \dfrac{1}{h_o^*}$

di mana $h_o^*$ adalah koefisien konveksi ekuivalen antara dinding luar tabung dan PCM, yang mendekati konduksi radial murni saat PCM masih padat:

$$h_o^* \approx \frac{2 k_{pcm}}{D_o \ln(D_o / D_i)}$$

### 2.5 Persamaan Modelica (DAE)

Implementasi dalam bahasa Model