# 2857 — Model Transien Penyimpanan Energi Termal Laten (LHTES) Shell-and-Tube pada 222°C untuk Integrasi dengan Heat-Pump Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Penyimpanan energi termal laten (*Latent Heat Thermal Energy Storage*, LHTES) muncul sebagai teknologi backbone dalam transisi energi industri berbasis *decarbonization*. Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menegaskan bahwa LHTES mampu memberikan fleksibilitas dan efisiensi pada aplikasi proses panas industri ketika dikombinasikan dengan *High-Temperature Heat Pump* (HTHP). Suhu operasi 222°C merupakan ambang batas strategis karena merupakan titik leleh eutektik nitrat (campuran NaNO₃–KNO₃ yang dikenal sebagai *solar salt*) yang banyak digunakan pada *Concentrated Solar Power* (CSP) generasi ketiga serta proses industri kimia, makanan, dan pulp & paper. Pada rentang suhu tersebut, konduktivitas termal *Phase Change Material* (PCM) pada umumnya hanya 0,5–1,0 W/m·K, sehingga performa LHTES sangat ditentukan oleh geometri *heat exchanger*, teknik enkapsulasi, dan penggunaan *metal foam/wool* sebagai enhancer.

Menurut Xu dan Wang (2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), HTHP modern mampu mencapai suhu output 150–200°C dengan *Coefficient of Performance* (COP) 3–5, menjadikannya alternatif elektrifikasi proses panas yang sebelumnya hanya dapat dipenuhi oleh boiler gas alam. Integrasi LHTES pada suhu 222°C berfungsi sebagai *thermal buffer* yang: (i) meratakan beban termal HTHP saat operasi intermiten, (ii) menyimpan surplus panas saat tarif listrik rendah (*time-of-use arbitrage*), dan (iii) menjamin kontinuitas suplai proses ketika HTHP menjalani siklus *defrost* atau *maintenance*. Dari perspektif industrial engineering, integrasi ini menyentuh aspek *capacity planning*, *production scheduling*, dan *total cost of ownership* (TCO). Urgensi ekonomi muncul karena fluktuasi harga listrik di pasar Eropa (EPEX SPOT) dan Asia bisa menyentuh rasio 5:1 antara jam sibuk dan jam rendah; tanpa LHTES, peluang arbitrase ini tidak terekstraksi. Secara teknis, tanpa LHTES, HTHP harus di-*oversize* 20–40% untuk memenuhi beban puncak, yang meningkatkan *capital expenditure* (CAPEX) dan memperpanjang *payback period* investasi elektrifikasi proses panas.

Konteks decarbonisasi ini semakin diperkuat oleh regulasi seperti EU *Net-Zero Industry Act* (2024) dan Indonesia *RUPTL 2025–2034* yang menargetkan efisiensi energi industri ≥ 30% pada 2030. Dengan demikian, kemampuan memodelkan perilaku transien LHTES pada 222°C menjadi kompetensi inti bagi *industrial energy engineer* yang ditugaskan merancang sistem hybrid HTHP-LHTES pada pabrik *food & beverage*, *chemical processing*, dan *district heating* generasi baru.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES shell-and-tube yang dikembangkan Toloza dkk. (2026) dibangun di atas tiga persamaan utama yang diselesaikan secara coupled dalam bahasa Modelica: (i) neraca energi HTF (*Heat Transfer Fluid*) di sisi shell, (ii) neraca energi PCM di dinding tube dengan efek perubahan fasa, dan (iii) korelasi perpindahan panas antarmuka.

### 2.1 Neraca Energi HTF (1-D Axial, Control Volume)

Untuk fluida yang mengalir secara paksa di dalam tube (atau di antara tube bundle di shell), hukum konservasi energi memberikan:

$$\rho_{HTF}\,c_{p,HTF}\,A_{c}\frac{\partial T_{HTF}}{\partial t} + \dot{m}\,c_{p,HTF}\frac{\partial T_{HTF}}{\partial x} = U\,A_{s}\,(T_{PCM,w}(x,t) - T_{HTF}(x,t))$$

di mana $\rho_{HTF}$ adalah densitas HTF, $c_{p,HTF}$ kapasitas panas spesifik, $A_c$ luas penampang aliran, $\dot{m}$ laju aliran massa, $U$ koefisien perpindahan panas overall, dan $A_s$ luas perpindahan panas per segmen aksial.

### 2.2 Neraca Energi PCM dengan *Apparent Heat Capacity*

Fenomena pelelehan/pembekuan dimodelkan menggunakan metode *apparent heat capacity* yang menggabungkan panas sensibel dan laten dalam satu parameter efektif:

$$\rho_{PCM}\,c_{p,app}(T)\,\frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(r\,k_{PCM}\,\frac{\partial T}{\partial r