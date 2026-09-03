# 1977 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Heat Pump Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar terhadap konsumsi energi final global—lebih dari 37% menurut IEA—dengan porsi signifikan berupa panas proses (*process heat*) bersuhu antara 150°C hingga 400°C yang selama ini dipasok oleh pembakaran gas alam. Deskarbonisasi rantai pasok energi termal industri menuntut pengganti berbasis elektrifikasi efisien yang dapat menyuplai panas pada rentang suhu tersebut tanpa emisi gas rumah kaca. Dalam konteks ini, Toloza, Payá, dan Barceló (2026) dalam prosiding Eurotherm Seminar #119 menegaskan bahwa **High-Temperature Heat Pumps (HTHPs)** yang dipadukan dengan **Latent Heat Thermal Energy Storage (LHTES)** merupakan konfigurasi sinergis untuk meningkatkan fleksibilitas operasional sekaligus efisiensi eksergi sistem. Xu dan Wang (2024) di jurnal *The Innovation Energy* lebih lanjut memproyeksikan bahwa integrasi HTHP dengan penyimpanan termal akan menjadi tulang punggung dekarbonisasi panas proses, menggantikan boiler fosil secara gradual hingga tahun 2050.

Urgensi teknis utama yang diangkat Toloza et al. (2026) adalah konduktivitas termal rendah dari sebagian besar Phase Change Material (PCM)—umumnya berada pada kisaran 0,2–0,7 W/(m·K)—yang menghambat laju transfer panas selama proses *charging* dan *discharging* pada suhu operasi 222°C. Untuk mengatasi keterbatasan ini, geometri *shell-and-tube* dipilih karena kekompakan volumenya yang tinggi (densitas energi 150–250 kWh/m³), ketahanan struktural terhadap siklus termal berulang, serta kapasitas untuk menyisipkan *thermal enhancement* berupa sirip atau *metal wool*. Kertas kerja tersebut mengembangkan model transien dalam bahasa Modelica untuk menyimulasikan perilaku satu unit vertikal LHTES berisi eutektik tertentu sebagai PCM, yang berfungsi sebagai buffer antara output kondensor HTHP dan beban termal industri (misalnya pengeringan, sterilisasi, atau destilasi). Pendekatan transien ini krusial karena operasi HTHP tidak stasioner: profil beban pabrik, dinamika tarif listrik, dan ketersediaan sumber panas limbah menyebabkan fluktuasi suhu dan laju alir yang harus diserap oleh unit penyimpanan.

Secara ekonomis, integrasi LHTES memungkinkan *load-shifting* dengan cara menyimpan panas saat harga listrik rendah (atau saat HTHP beroperasi pada Coefficient of Performance/COP optimal) dan melepaskannya saat permintaan puncak, sehingga menurunkan *levelized cost of heat* (LCOH) secara keseluruhan. Toloza et al. (2026) menyoroti bahwa tanpa unit penyimpanan, HTHP harus di-*oversizing* untuk memenuhi beban puncak, yang meningkatkan capital expenditure secara signifikan. Dengan buffer termal, kapasitas HTHP cukup dirancang mengikuti beban rata-rata, sementara puncak disuplai oleh pelepasan laten dari PCM—suatu logika yang paralel dengan strategi *peak shaving* dalam manajemen energi pabrik.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES pada suhu 222°C memerlukan penyelesaian numerik atas persamaan konservasi energi yang dikopling dengan perubahan fase PCM. Formulasi *enthalpy method* dipilih oleh Toloza et al. (2026) karena menghindari diskontinuitas pada antarmuka padat-cair yang menjadi masalah klasik pada formulasi Stefan murni.

### 2.1 Persamaan Konservasi Energi pada PCM

Untuk volume kontrol yang mengandung PCM, persamaan energi transien dalam koordinat silindris (mengikuti geometri shell-and-tube vertikal) dinyatakan sebagai:

$$\rho \frac{\partial h}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( k \, r \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k \frac{\partial T}{\partial z} \right)$$

di mana $\rho$ adalah densitas PCM (kg/m³), $h$ adalah entalpi spesifik (J/kg), $k$ adalah konduktivitas termal efektif (W/(m·K)), $T$ adalah suhu lokal (K), dan $r$, $z$ berturut-turut adalah koordinat radial dan aksial. Tidak ada sumber volumetrik pada PCM, sehingga hanya konduksi yang berperan di dalam matriksnya.

### 2.2 Hubungan Enthalpi–Suhu (Apparent Heat Capacity)

Untuk memodelkan pelepasan panas laten $L$ (J/kg) pada suhu transisi $T_m$, digunakan pendekatan *apparent heat capacity*:

$$h(T) = \int_{T_{ref}}^{T} c_p(T) \, dT + f(T) \cdot L$$

dengan $f(T)$ adalah fraksi cair (*liquid fraction*), yang dalam model smooth diformulasikan sebagai:

$$f(T) = \begin{cases} 0, & T < T_m - \Delta T/2 \\ \dfrac{T - (T_m - \Delta T/2)}{\Delta T}, & |T - T_m| \leq \Delta T/2 \\ 1, & T > T_m + \Delta T/2 \end{cases}$$

di mana $\Delta T$ adalah lebar setengah dari *mushy zone* (orde 1–3 K untuk PCM eutektik). Pada 222°C, eutektik yang dimaksud Toloza et al. (2026) menunjukkan $\Delta T$ sempit yang menjamin karakteristik transisi fase hampir台阶.

### 2.3 Syarat Batas dan Perpindahan Panas Konvektif

Pada dinding tabung bagian dalam yang membawa fluida heat transfer (HTF, misalnya minyak termal atau air bertekanan), syarat batas Newton-cooling diterapkan:

$$-\left.k \frac{\partial T}{\partial r}\right|_{r=r_i} = h_{HTF}\left(T_{s,i} - T_{HTF}\right)$$

dengan $h_{HTF}$ koefisien perpindahan panas konvektif (W/(m²·K)) yang bergantung pada bilangan Reynolds HTF. Untuk aliran turbulen dalam tabung, berlaku korelasi Dittus–Boelter:

$$Nu = 0.023 \, Re^{0.8} \, Pr^{n}$$

dengan $n = 0{,}4$ untuk pemanasan HTF. Bilangan Reynolds HTF dihitung sebagai:

$$Re = \frac{\rho_{HTF} \, u_{HTF} \, D_i}{\mu_{HTF}}$$

### 2.4 Bilangan-Bilangan Karakteristik Phase Change

Untuk analisis dimensional dan skenario desain, beberapa bilangan tak berdimensi menjadi penting:

**Bilangan Stefan** (rasio panas sensible terhadap panas laten):
$$Ste = \frac{c_{p,PCM}(T_m - T_{initial})}{L}$$

**Bilangan Fourier** (skala waktu difusi termal):
$$Fo = \frac{\alpha_{PCM} \, t}{R_o^2}$$

dengan $\alpha_{PCM} = k/(\rho c_{p})$ adalah difusivitas termal (m²/s) dan $R_o$ adalah jari-jari luar efektif PCM.

**Bilangan Biot** (resistansi internal vs. permukaan):
$$Bi = \frac{h_{HTF} \, R_i}{k_{PCM}}$$

Pada unit LHTES 222°C yang dirancang Toloza et al. (2026), nilai $Bi$ umumnya berada pada rentang 5–15, mengindikasikan bahwa hambatan termal utama berada di dalam PCM—justifikasi kuat untuk optimalisasi geometri dan penggunaan *thermal enhancement*.

### 2.5 Energi Tersimpan dan *State of Charge* (SoC)

Energi total yang tersimpan dalam unit pada waktu $t$ adalah:

$$E(t) = \int_V \rho \left[ h(T(\mathbf{x},t)) - h_{initial} \right] dV$$

*State of Charge* didefinisikan sebagai:

$$SoC(t) = \frac{E(t)}{E_{max}} = \frac{\int_V \left[ h(T) - h_{min} \right] dV}{\int_V \left[ h_{max} - h_{min} \right] dV}$$

dengan $E_{max} = m \cdot (L + c_p \Delta T_{util})$ adalah kapasitas termal nominal.

### 2.6 Integrasi dengan HTHP — Model Kinerja Coupling

Kondensor HTHP menyuplai energi termal ke HTF dengan laju:

$$\dot{Q}_{HTHP} = COP \cdot \dot{W}_{kompresor}$$

di mana $COP$ tergantung pada *lift* suhu $T_{cond} - T_{evap}$. Xu dan Wang (2024) menekankan bahwa efisiensi *exergy* sistem terintegrasi bergantung pada minimisasi irreversibilitas di penukar panas dan penyimpanan. Neraca energi pada simpul pencampur HTF masuk unit LHTES adalah:

$$\dot{m}_{HTF} c_{p,HTF} (T_{in} - T_{out}) = \dot{Q}_{stored} + \dot{Q}_{loss}$$

dengan $\dot{Q}_{loss}$ adalah kerugian termal ke lingkungan yang dimodelkan melalui resistansi konveksi-radiasi pada permukaan shell.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan hasil Toloza et al. (2026) di lingkungan industri memerlukan SOP yang menjamin reprodusibilitas, keamanan, dan kesesuaian dengan standar (misalnya ISO 50015 untuk pengukuran kinerja energi dan ASME Boiler & Pressure Vessel Code untuk bejana bertekanan). Berikut adalah arsitektur prosedur yang diturunkan dari metodologi Modelica mereka.

### 3.1 Arsitektur Model dan Diagram Alir Simulasi

```
[Input: Profil beban pabrik] 
        │
        ▼
[Karakterisasi HTHP: COP(T_cond, T_evap)]
        │
        ▼
[Hitung Q_dot_HTHP(t)] ──► [Simpul pencampur HTF]
        │                            │
        ▼                            ▼
[Boundary condition HTF masuk unit] [Hitung T_in(t)]
        │
        ▼
[Solve PDE 2D aksial-radial pada domain PCM]
        │
        ▼
[Update enthalpy field h(x,t); update f(T)]
        │
        ▼
[Hitung T_out(t), SoC(t), Q_loss(t)]
        │
        ▼
[Output ke sistem kontrol HTHP & plant EMS]
```

### 3.2 Tahapan Implementasi SOP

**Tahap 1 — Karakterisasi PCM dan Data Material.**
Parameter PCM (densitas, $c_p$, $k$, $L$, $T_m$) dikalibrasi terhadap TGA/DSC hasil Toloza et al. (2026) untuk eutektik target pada $T_m = 222°C$. Data dimasukkan ke pustaka Modelica `Media` dengan jangkauan suhu 180–260°C.

**Tahap 2 — Diskretisasi Domain dan Validasi Mesh.**
Domain PCM shell-and-tube dibagi menggunakan mesh silinder terstruktur dengan refinement di sekitar dinding tabung dan antarmuka fase. Independensi grid diverifikasi pada target residu $<10^{-4}$ untuk $SoC$.

**Tahap 3 — Kalibrasi Koefisien Perpindahan Panas.**
Korelasi $Nu$ di-*fit* terhadap data eksperimen *charging* dan *discharging* dari prototipe. Parameter $h_{HTF}$ yang dihasilkan menjadi masukan eksitasi untuk simulasi transien.

**Tahap 4 — Penyelesaian Simulasi Transien.**
Integrasi waktu dilakukan dengan langkah adaptif (orde 2–4), umumnya $\Delta t = 1$–$5$ s untuk total durasi simulasi 6–24 jam (siklus harian). Toleransi absolut dan relatif dideklarasikan secara eksplisit.

**Tahap 5 — Analisis Sensitivitas dan Optimasi.**
Variabel desain (diameter tabung, pitch, panjang, jenis enhancement) disapu untuk meminimumkan waktu *charging* pada kendala $\Delta P$ HTF yang diizinkan.

**Tahap 6 — Verifikasi & Validasi (V.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
