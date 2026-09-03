# 2265 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Sub-disiplin: Manajemen Energi Termal, Optimasi Proses Termal, dan Dekarbonisasi Sistem Manufaktur
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi final terbesar di Uni Eropa dan global, dengan porsi lebih dari 25% dari total konsumsi energi primer dunia (Xu & Wang, 2024). Dari total kebutuhan energi industri tersebut, estimasi IEA menunjukkan bahwa sekitar 50% merupakan permintaan *process heat* atau panas proses pada rentang suhu 150–400°C, yang selama ini dipasok dominan oleh pembakaran bahan bakar fosil (gas alam, batubara, dan minyak bakar). Dalam konteks *European Green Deal* dan agenda *Net-Zero Industry Act* yang menuntut dekarbonisasi menyeluruh sebelum 2050, pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP) muncul sebagai teknologi enabler yang paling pragmatis untuk menggantikan boiler fosil sekaligus menyediakan integrasi listrik-sektor termal.

Namun, efisiensi eksergetik (*Coefficient of Performance*, COP) pompa kalor menurun tajam ketika *temperature lift* meningkat. Untuk suhu keluaran di kisaran 222°C — sebagaimana menjadi target operasional unit LHTES (Latent Heat Thermal Energy Storage) yang dikaji Toloza, Payá, dan Barceló (2026) — tantangan teknis menjadi non-trivial karena rasio Carnot runtuh secara kuadratik terhadap perbedaan suhu. Xu dan Wang (2024) menekankan dalam tinjauan prospektif mereka bahwa kombinasi HTHP dengan sistem penyimpanan energi termal (TES) menjadi strategi kunci untuk: (i) mendekouple waktu antara produksi dan konsumsi termal, (ii) menaikkan kapasitas efektif sistem, dan (iii) memungkinkan operasi intermiten HTHP yang lebih fleksibel mengikuti profil tarif listrik dinamis.

Di sisi material, *phase change material* (PCM) pada rentang 220–230°C didominasi oleh garam nitrat eutektik (misalnya sistem biner NaNO₃–KNO₃ dengan komposisi ±50:50% mol, atau sistem terner NaNO₃–KNO₃–NaNO₂). PCM semacam ini memiliki densitas energi volumetrik tinggi (200–350 kJ/kg, 350–500 kJ/L), namun konduktivitas termalnya rendah (~0,5–1,5 W/m·K) yang menghambat laju *charge/discharge*. Inilah motivasi sentral paper Toloza et al. (2026): mengembangkan model numerik transien pada unit LHTES konfigurasi *shell-and-tube* untuk mengkuantifikasi dinamika fusi-solidifikasi PCM dan memvalidasi desain penukar kalor terhadap permintaan beban termal industri yang berfluktuasi. Urgensi industriwi dari paper ini, oleh karena itu, bukan sekadar akademis melainkan langsung memenuhi kebutuhan para *plant engineer*, integrator sistem HTHP, dan perancang sistem energi proses di sektor makanan, kimia, tekstil, dan pulp & paper yang beroperasi pada rentang suhu menengah-tinggi.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan Toloza et al. (2026) menggunakan bahasa Modelica dengan pendekatan *enthalpy-based* (atau ekivalennya *apparent heat capacity*) untuk menyelesaikan masalah pindah panas dengan perubahan fasa pada geometri aksial-simetris *shell-and-tube*. Persamaan konservasi energi dalam koordinat silinder $(r, z)$ untuk PCM dalam *shell* adalah:

$$\rho_{PCM} \, c_{p,eff}(T) \, \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( r \, k_{PCM} \, \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM} \, \frac{\partial T}{\partial z} \right)$$

di mana kapasitas panas efektif mendekomposisi kontribusi fasa padat, fasa cair, dan entalpi laten sebagai fungsi sigmoid *smoothing* di sekitar suhu transisi $T_m$:

$$c_{p,eff}(T) = c_p^s + \frac{L}{T_{liq}-T_{sol}} \cdot \frac{1}{\sigma\sqrt{2\pi}} \exp\left[-\frac{(T-T_m)^2}{2\sigma^2}\right] + c_p^l$$

dengan $L$ adalah entalpi laten spesifik PCM (J/kg), $T_{sol}$ dan $T_{liq}$ berturut-turut adalah suhu *solidus* dan *liquidus*, dan $\sigma$ adalah parameter regularisasi numerik (umumnya diambil 0,5–2 K).

Untuk sisi tabung (*tube side*), fluida pemindah panas (HTF) mengikuti persamaan energi 1D-aliran-sumbu dengan konveksi paksa:

$$\rho_{HTF} \, A_c \, c_{p,HTF} \, \frac{\partial T_{HTF}}{\partial t} + \dot{m} \, c_{p,HTF} \, \frac{\partial T_{HTF}}{\partial z} = h_i \, P_i \, (T_{PCM}|_{r=r_i} - T_{HTF})$$

dengan $A_c$ luas penampang aliran, $P_i$ keliling internal tabung, dan $h_i$ koefisien pindah panas konveksi internal. Untuk aliran turbulen ($\mathrm{Re} > 10^4$), korelasi Dittus-Boelter berlaku:

$$Nu_i = 0{,}023 \, Re^{0{,}8} \, Pr^{0{,}4}$$

sehingga $h_i = Nu_i \cdot k_{HTF}/D_i$. Untuk sisi *shell*, perpindahan kalon ke PCM sering dimodelkan melalui resistansi kontak termal efektif atau melalui korelasi Kern untuk bundle tabung:

$$Nu_o = 0{,}36 \, Re_o^{0{,}55} \, Pr_o^{0{,}33} \left(\frac{\mu_b}{\mu_w}\right)^{0{,}14}$$

Integrasi dinamis ke sistem HTHP membutuhkan tambahan persamaan karakteristik kompresi uap, dengan COP definitif:

$$COP = \frac{Q_h}{W_{comp}} = \frac{\dot{m}_{HTF} \, c_{p,HTF}(T_{out}-T_{in})}{W_{comp}}$$

dan batas Carnot pada $T_{hot} \approx 222°C = 495\,K$ dan $T_{cold} \approx 30°C = 303\,K$:

$$COP_{Carnot} = \frac{T_{hot}}{T_{hot}-T_{cold}} = \frac{495}{495-303} \approx 2{,}58$$

sehingga secara termodinamika, integrasi sistem HTHP-LHTES hanya akan ekonomis pada rentang COP aktual 1,6–2,2 dengan mempertimbangkan irreversibilitas kompresor dan penurunan efisiensi *lift* yang dibahas Xu & Wang (2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis unit LHTES berbasis PCM nitrat eutektik untuk integrasi HTHP mengikuti SOP rekayasa berikut, yang konsisten dengan metodologi Toloza et al. (2026):

**Tahap 1 — Karakterisasi Termofisika PCM.** Pengukuran DSC (Differential Scanning Calorimetry) untuk menetapkan $T_m$, $L$, $c_p^s$, $c_p^l$, dan konduktivitas termal $k_{PCM}$ sesuai ASTM E1269 dan ISO 11357. Estimasi densitas dengan piknometer atau korelasi pustaka.

**Tahap 2 — Desain Geometri Shell-and-Tube.** Penentuan rasio diameter shell-tabung ($D_o/D_i$), jumlah dan *pitch* tabung, serta tinggi unit menggunakan kriteria compactness $\beta = V_{PCM}/V_{total} > 0{,}7$. Toloza et al. (2026) menggunakan konfigurasi vertikal dengan HTF masuk dari bawah untuk menjamin *natural convection* dalam PCM selama *charging*.

**Tahap 3 — Pemodelan Numerik Transien.** Pembangunan model dalam Modelica (atau COMSOL/Fluent sebagai alternatif) dengan disretisasi 1D-radial-simetris atau 2D-aksimetris. Validasi mesh melalui *grid independence test* dengan target perubahan $< 1\%$ pada fluks kalor integral.

**Tahap 4 — Analisis Sensitivitas dan Optimasi.** Variasi parameter: laju alir massa HTF (0,01–0,5 kg/s), suhu inlet HTF (180–240°C), dan geometri tabung untuk mengidentifikasi *bottleneck* perpindahan kalor. Seperti disorot Xu & Wang (2024), analisis ini krusial karena PCM bersuhu tinggi memiliki konduktivitas rendah yang mendominasi resistansi total.

**Tahap 5 — Integrasi dengan HTHP.** Penentuan strategi kontrol: HTHP beroperasi saat tarif listrik rendah (*charging* PCM); PCM melepas kalor saat permintaan proses puncak (*discharging*). Pengaturan *time-of-use* ini dapat menurunkan *levelized cost of heat* (LCOH) sebesar 10–25%.

**Tahap 6 — Verifikasi Eksperimental dan Commissioning.** Pengujian unit prototipe di *test rig* dengan sensor T tipe-K terdistribusi, validasi terhadap prediksi model numerik, dan penyesuaian parameter kontak termal aktual.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES vertikal *shell-and-tube* dengan PCM nitrat eutektik pada $T_m =