# 1945 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Panas proses industri (industrial process heat) menyumbang proporsi dominan dari konsumsi energi akhir manufaktur global — secara historis mencapai lebih dari 50% dari total energi industri dan sekitar 20% dari konsumsi energi final global. Pada rentang suhu 150–400°C (level menengah–tinggi), banyak proses kritikal seperti pasteurisasi, sterilisasi, pengeringan, pemanggangan, distilasi, hingga reaksi kimiawi katalitik masih sangat bergantung pada pembakaran gas alam. Upaya dekarbonisasi panas proses melalui elektrifikasi menempatkan *High-Temperature Heat Pumps* (HTHPs) sebagai salah satu enabler strategis karena mampu menyediakan suhu output hingga 200–250°C dengan Coefficient of Performance (COP) tipikal 2,0–4,5 (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Namun, operasi HTHP menghadapi tantangan operasional nyata: (i) fluktuasi harga dan ketersediaan listrik berbasis *renewables*, (ii) profil beban panas proses yang tidak stasioner, dan (iii) inefisiensi termodinamika akibat *cycling* hidup–mati kompresor.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti bahwa integrasi *Latent Heat Thermal Energy Storage* (LHTES) berbasis *Phase Change Material* (PCM) dapat menjawab tantangan tersebut secara simultan: LHTES berfungsi sebagai *buffer termal* yang mendekopelkan sisi suplai HTHP dengan sisi permintaan proses, sekaligus menyimpan energi pada densitas volumetrik tinggi (tipikal 250–400 kJ/L) pada suhu mendekati konstan. Akan tetapi, konduktivitas termal PCM yang rendah (0,2–0,5 W/m·K) menjadi bottleneck utama. Untuk aplikasi suhu ~222°C, mereka mengusulkan konfigurasi *shell-and-tube* vertikal dengan PCM eutectic nitrat (NaNO₃–KNO₃) di sisi selongsong dan *Heat Transfer Fluid* (HTF) bersirkulasi di dalam tube bundle. Numerasi transien dikembangkan dalam bahasa Modelica untuk mengkuantifikasi dinamika pengisian (*charging*) dan pelepasan (*discharging*). Urgensi industri dari pendekatan ini sangat jelas: pabrik dengan operasi shift, beban puncak siang–malam, atau间歇 pada pasokan listrik hijau akan memperoleh *peak-shaving*, perataan beban (*load leveling*), dan peningkatan *overall equipment effectiveness* (OEE) sistem termal secara keseluruhan.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES *shell-and-tube* memerlukan penyelesaian simultan persamaan energi pada domain PCM (selongsong) dan HTF (tube). Toloza et al. (2026) menggunakan formulasi enthalpy-based yang menghindari diskontinuitas pada antarmuka padat–cair.

**Persamaan energi pada PCM (koordinat silindris 2D):**

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{PCM} \, r \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{PCM} \frac{\partial T}{\partial z}\right)$$

di mana $H$ adalah entalpi spesifik, $T$ suhu, $r$ radius, $z$ aksial, dan $\rho_{PCM}$ densitas PCM. Hubungan $H(T)$ menggunakan metode *apparent heat capacity*:

$$H(T) = \int_{T_{ref}}^{T} c_p^{*}(\tau) \, d\tau, \quad c_p^{*}(T) = c_{p,s} + \frac{L}{w}\exp\left(-\frac{(T-T_m)^2}{2w^2}\right)$$

dengan $L$ entalpi fusi (J/kg), $w$ lebar Gaussian regularisasi, $T_m$ suhu lebur, dan $c_{p,s}$ kapasitas panas sensibel. Untuk eutectic NaNO₃–KNO₃ pada $T_m \approx 222°C$: $\rho_{PCM} \approx 1820$ kg/m³ (cair), $k_{PCM} \approx 0{,}52$ W/m·K, $L \approx 161$ kJ/kg.

**Persamaan energi HTF dalam tube (1D, aliran