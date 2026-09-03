# 2169 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar **24% konsumsi energi final global**, di mana lebih dari separuh kebutuhan tersebut berupa **panas proses industri** (*industrial process heat*) pada rentang suhu 150–400 °C (Xu & Wang, 2024, [DOI:10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses ini mensyaratkan elektrifikasi termal melalui **High-Temperature Heat Pumps (HTHPs)** dan **Thermal Energy Storage (TES)**, yang merupakan pilar utama transisi energi industri menurut European Heat Pump Association dan IEA (Toloza et al., 2026, [DOI:10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Permasalahan operasional yang krusial adalah sifat **intermittent** dari sumber energi terbarukan dan karakteristik **non-steady** dari permintaan proses. Unit *Latent Heat Thermal Energy Storage* (LHTES) menjawab tantangan ini dengan cara menyimpan energi dalam bentuk **panas laten pelelehan** suatu *Phase Change Material* (PCM). Dibandingkan dengan *sensible heat storage* konvensional (seperti air atau molten salt pada suhu tinggi), LHTES menawarkan **densitas energi volumetrik 5–10 kali lebih tinggi** pada selang suhu yang sempit. Namun, Toloza et al. (2026) menekankan bahwa mayoritas PCM—termasuk **garam nitrat eutektik** dengan titik leleh ~222 °C—memiliki **konduktivitas termal rendah** ($k \approx 0{,}5$ W/m·K untuk fase padat). Kondisi ini menciptakan bottleneck perpindahan panas yang menghambat laju pengisian/pengosongan (*charging/discharging*) dan menurunkan *round-trip efficiency* sistem secara keseluruhan (Toloza et al., 2026).

Konteks industrial engineering yang melatarbelakangi riset ini adalah kebutuhan akan **desain unit LHTES yang compact, robust, dan scalable** untuk aplikasi *waste heat recovery* dan integrasi dengan HTHP bersuhu evaporasi >180 °C. Konfigurasi **shell-and-tube** dipilih karena tiga keunggulan struktural: (1) kekompakan volumetrik tinggi, (2) kemampuan menahan tekanan diferensial pada sisi *heat transfer fluid* (HTF), dan (3) kemudahan integrasi dengan *cross-flow heat exchanger* pada manifold industri (Toloza et al., 2026). Xu & Wang (2024) menambahkan bahwa pengembangan HTHP generasi baru—seperti siklus trans-kritis CO₂ dan siklus kaskada refrigeran alami—memerlukan unit TES dengan karakteristik transien yang dapat dimodelkan secara akurat untuk menghindari *thermal stress* pada kompresor dan evaporator.

Urgensi ekonominya semakin nyata ketika mempertimbangkan **Levelized Cost of Storage (LCOS)** untuk panas proses. Tanpa optimasi perpindahan panas, biaya investasi LHTES menjadi tidak kompetitif dibanding dengan boiler gas alam (*natural gas boiler*) bersubsidi. Maka, **model numerik transien** menjadi alat esensial bagi engineering untuk memprediksi kinerja sistem sebelum fabrikasi prototipe fisik yang mahal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konduksi Panas Transien pada Geometri Silindris

Model LHTES shell-and-tube dikembangkan dalam **bahasa Modelica** (Toloza et al., 2026), dengan PCM mengisi *annulus* antara tabung internal (HTF) dan dinding shell. Persamaan konservasi panas dalam koordinat silindris $(r, \theta, z)$ untuk PCM adalah:

$$\rho c_p \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(k\, r \frac{\partial T}{\partial r}\right) + \frac{1}{r^{2}}\frac{\partial}{\partial \theta}\!\left(k \frac{\partial T}{\partial \theta}\right) + \frac{\partial}{\partial z}\!\left(k \frac{\partial T}{\partial z}\right) + \dot{q}_{lat}$$

di mana $\dot{q}_{lat}$ adalah sumber panas akibat pelepasan panas laten pada interface padat-cair.

### 2.2 Metode Enthalpi untuk Masalah Perubahan Fase

Karena interface bergerak (*moving boundary*), metode *enthalpy* lebih robust dibanding pelacakan interface eksplisit. Definisikan entalpi total per satuan volume:

$$h(T) = \int_{T_{ref}}^{T}\rho c_{p}(T')\, dT' + \rho L \cdot f(T)$$

dengan $f(T)$ adalah *liquid fraction* yang dimodelkan secara halus (smoothing) di sekitar $T_m$:

$$f(T) = \begin{cases} 0, & T < T_m - \Delta T/2 \\ \dfrac{T - (T_m - \Delta T/2)}{\Delta T}, & T_m - \Delta T/2 \le T \le T_m + \Delta T/2 \\ 1, & T > T_m + \Delta T/2 \end{cases}$$

Persamaan governing menjadi:

$$\rho \frac{\partial h}{\partial t} = \nabla \cdot (k \nabla T)$$

### 2.3 Kapasitas Penyimpanan Energi Total

Kapasitas penyimpanan satu unit LHTES dihitung sebagai:

$$Q_{tot} = \underbrace{m\int_{T_i}^{T_m}\! c_{p,s}\, dT'}_{Q_{sens,s}} + \underbrace{m L}_{Q_{lat}} + \underbrace{m\int_{T_m}^{T_f}\! c_{p,l}\, dT'}_{Q_{sens,l}}$$

### 2.4 Laju Perpindahan Panas dan Resistansi Termal

Laju heat flux radial melalui dinding tabung dan PCM:

$$\dot{Q} = \frac{T_{HTF} - T_{PCM}}{\sum R_{th}} = \frac{T_{HTF} - T_{PCM}}{\dfrac{1}{h_i 2\pi r_i L} + \dfrac{\ln(r_{t,o}/r_{t,i})}{2\pi k_w L} + \dfrac{\ln(r_o/r_{t,o})}{2\pi k_{PCM} L}}$$

### 2.5 Bilangan Tanpa Dimensi

Untuk analisis transien, dua bilangan berikut esensial:

$$\mathrm{Fo} = \frac{\alpha t}{L_c^2} \quad ; \quad \mathrm{Bi} = \frac{h L_c}{k_{PCM}}$$

di mana $\alpha = k_{PCM}/(\rho c_p)$ adalah difusivitas termal dan $L_c$ adalah panjang karakteristik.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Toloza et al. (2026) menyusun alur rekayasa sistematis sebagai berikut (disesuaikan menjadi SOP industri):

**Tahap