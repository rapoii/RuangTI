# 2361 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37% dari konsumsi energi akhir global dan hampir 24% dari emisi CO₂ terkait energi, di mana lebih dari separuh kebutuhan tersebut berupa panas proses pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri merupakan salah satu tantangan teknis paling mendesak abad ini, terutama pada sektor kimia, makanan & minuman, tekstil, dan pemrosesan logam, di mana sumber termal berbasis bahan bakar fosil masih mendominasi. Pompa kalor suhu tinggi (*High-Temperature Heat Pump*/HTHP) muncul sebagai teknologi elektrik yang menjanjikan untuk menggantikan boiler konvensional, namun karakteristik operasionalnya yang fluktuatif—bergantung pada harga listrik, ketersediaan sumber panas buangan (*waste heat*), dan profil beban termal pabrik—mengharuskan adanya buffer termal yang mampu menyimpan dan melepaskan energi secara cepat dan terkontrol.

Dalam konteks inilah Toloza, Payá, dan Barceló (2026) mempublikasikan model numerik transien unit *Latent Heat Thermal Energy Storage* (LHTES) berbasis *shell-and-tube* pada suhu operasi mendekati 222°C di *Eurotherm Seminar #119* (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Studi ini menjembatani dua kebutuhan kritis: pertama, kemampuan HTHP untuk beroperasi pada *coefficient of performance* (COP) optimal hanya ketika sumber panas dan sisi evaporator/sink stabil; kedua, kelemahan utama material *Phase Change Material* (PCM), yaitu konduktivitas termal yang rendah (umumnya 0,2–0,5 W/(m·K) untuk garam nitrat), yang menyebabkan laju pengisian dan pengosongan LHTES menjadi lambat jika tidak dioptimalkan secara geometris.

Urgensi komersial dari integrasi HTHP–LHTES tampak pada analisis biaya energi: menurut proyeksi International Energy Agency (IEA) yang dirujuk Xu & Wang (2024), elektrifikasi panas industri dapat memangkas emisi hingga 50% pada tahun 2030 bila dikombinasikan dengan *Thermal Energy Storage* (TES) sebagai elemen fleksibilitas. Tanpa buffer termal, HTHP tidak dapat berfungsi sebagai unit *load-shifting* karena respons dinamisnya yang lambat terhadap perubahan beban proses. PCM eutektik NaNO₃–KNO₃ dengan titik leleh sekitar 222°C dipilih karena mendekati suhu operasi ideal HTHP berbasis siklus kompresi uap dengan refrigeran alami seperti CO₂ atau hidrokarbon, sekaligus kompatibel dengan aplikasi pasteurisasi, sterilisasi, dan pengeringan industri makanan.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES yang dikembangkan Toloza dkk. (2026) menggunakan bahasa pemodelan **Modelica** dengan pustaka *Thermal-Fluid Transport* untuk menyelesaikan persamaan konservasi energi dan momentum secara kopel. Formulasi inti yang digunakan adalah pendekatan **enthalpy-porosity** untuk menangkap front leleh/padat PCM di dalam geometri *shell-and-tube* vertikal.

### 2.1 Persamaan Energi pada PCM

Untuk PCM dalam domain annular (antara dinding luar tabung dan dinding shell), persamaan energi transien diselesaikan sebagai:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{PCM} \nabla T \right) + \dot{q}_{HTF}$$

di mana entalpi spesifik $h$ terkait dengan suhu $T$ melalui:

$$h = \begin{cases} c_{p,s} \, T, & T < T_m \\ h_m + c_{p,l} \, (T - T_m), & T > T_m \end{cases}$$

dengan $T_m$ adalah suhu leleh, $c_{p,s}$ dan $c_{p,l}$ berturut-turut adalah kalor jenis fasa padat dan cair, serta $h_m$ entalpi leleh laten per satuan massa.

### 2.2 Model Enthalpy-Porosity untuk Batas Fase

Fraksi liquid $\beta$ dimodelkan sebagai fungsi *smoothing* Heaviside:

$$\beta(T) = \frac{1}{2} \left[ 1 + \tanh \left( \frac{T - T_m}{\Delta T / 2} \right) \right]$$

dan viskositas efektif yang muncul di persamaan momentum Navier-Stokes dimodifikasi dengan fungsi Darcy yang terkenal (model mushy zone):

$$\mu_{eff} = \mu_l \cdot \frac{(1-\beta)^2}{\beta^3 + \epsilon}$$

dengan $\epsilon \approx 10^{-3}$ untuk mencegah singularitas numerik.

### 2.3 Laju Pelepasan/Penyerapan Energi pada HTF

Sisi *Heat Transfer Fluid* (HTF) yang mengalir di dalam tabung mengikuti persamaan konservasi energi 1D:

$$\rho_{HTF} \, c_{p,HTF} \, A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m} \, c_{p,HTF} \frac{\partial T_{HTF}}{\partial x} = U_i \, \pi \, d_i \left( T_{PCM,wall} - T_{HTF} \right)$$

di mana $U_i$ adalah koefisien transfer panas menyeluruh berbasis diameter dalam tabung:

$$\frac{1}{U_i} = \frac{1}{h_{HTF}} + \frac{d_i}{d_o} \frac{1}{h_{PCM}} + \frac{d_i \ln(d_o/d_i)}{2 k_{wall}}$$

### 2.4 Kapasitas Penyimpanan Energi

Energi total yang tersimpan dihitung dengan integral volume PCM:

$$E_{stored}(t) = \int_V \rho_{PCM} \left[ h(T(x,y,z,t)) - h_{initial} \right] dV$$

Daya sesaat dari HTF keluar:

$$\dot{Q}_{HTF}(t) = \dot{m} \, c_{p,HTF} \left[ T_{out}(t) - T_{in}(t) \right]$$

### 2.5 Kopling dengan HTHP

Integrasi dengan HTHP didekstensikan dengan persamaan COP Carnot sebagai batas teoretis:

$$COP_{Carnot} = \frac{T_{sink}}{T_{source} - T_{sink}}$$

Implementasi nyata mempertimbangkan efisiensi kompresor $\eta_c$ dan expander $\eta_e$, sehingga $COP_{real} = \eta_c \cdot \eta_e \cdot COP_{Carnot}$ (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES-HTHP mengikuti SOP berlapis yang diturunkan dari kerangka kerja Toloza dkk. (2026) dan praktik terbaik rekayasa termal:

### Tahap 1: Karakterisasi Kebutuhan Termal
1. **Audit beban termal** pabrik: identifikasi profil suhu, daya, dan durasi beban proses sepanjang 24–168 jam.
2. **Penentuan suhu operasi LHTES**: pilih PCM dengan $T_m$ yang berada 5–10°C di bawah suhu sumber HTHP agar perpindahan panas tetap optimal.
3. **Estimasi kapasitas energi**: $E_{req} = \int_0^{\Delta t} \dot{Q}_{process}(t) \, dt$.

### Tahap 2: Desain Geometri *Shell-and-Tube*
1. Pilih diameter dalam tabung $d_i = 0,015$–$0,025$ m untuk keseimbangan antara luas permukaan dan pressure drop HTF.
2. Tentukan jumlah tabung $N_t$ dan diameter shell $D_s$ menggunakan relasi_bundle$:$ $D_s = d_o (N_t / K_1)^{1/n_1}$ dengan $K_1$ dan $n_1$ konstanta layout (segitiga atau kotak).
3. Tinggi unit $L = 1,5$–$3,0$ m untuk memastikan distribusi front leleh yang seragam.

### Tahap 3: Pemodelan Numerik dan Simulasi
1. **Discretization**: mesh independen minimal 50.000 elemen tetrahedral pada geometri 3D penuh; grid refinement pada antarmuka tube-PCM.
2. **Time stepping**: implicit Euler dengan $\Delta t \leq 1$ s selama fase transien (leleh/padat) dan $\Delta t \leq 10$ s selama fasa tunak.
3. **Validasi**: benchmark terhadap solusi analitik Neumann untuk geometri sederhana (semi-infinite slab) dengan toleransi error relatif <2%.

### Tahap 4: Integrasi dengan HTHP
1. Sambungkan outlet kondensor HTHP ke inlet tabung LHTES (mode *charging*).
2. Pasang katup tiga-arah untuk mengalihkan HTF ke beban proses atau ke *cold side* evaporator.
3. Pasang *flow meter*, *temperature sensor* Pt100 kelas A pada inlet/outlet, dan *pressure transducer* untuk monitoring real-time.

### Tahap 5: Commissioning dan Operasi
1. Lakukan *thermal cycling test* minimum 50 siklus untuk menguji stabilitas termal dan integritas struktur.
2. Implementasikan sistem kontrol berbasis PLC/SCADA dengan *model predictive control* (MPC) yang menyerap prediksi harga listrik dan jadwal proses.
3. Catat *key performance indicators* (KPI): laju pengisian (%), *round-trip efficiency* (%), degradasi kapasitas per siklus.

### Diagram Alir Integrasi HTHP–LHTES

```
[HTHP Kondensor] → [HTF masuk] → [Shell-and-Tube LHTES]
        ↓
   [Sensor T,P,m] → [PLC/SCADA] → [MPC Optimizer]
        ↓
   [Saklar Beban] → [Proses Industri / Pengosongan]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit LHTES (berdasarkan Toloza dkk., 2026)

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| PCM | Eutektik NaNO₃–KNO₃ | – |
| $T_m$ | 222 | °C |
| $\rho_{PCM}$ | 1890 | kg/m³ |
| $k_{PCM}$ | 0,50 | W/(m·.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
