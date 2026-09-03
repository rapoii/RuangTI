# 2233 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada ~222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Deindustrialisasi termal — yaitu proses elektrifikasi dan dekarbonisasi suplai panas industri — merupakan salah satu tantangan rekayasa sistem paling strategis abad ke-21. Menurut Xu dan Wang (2024) dalam *The Innovation Energy*, pompa panas termal (*heat pump*) ditempatkan sebagai teknologi kunci (*linchpin technology*) untuk menggantikan burner bahan bakar fosil pada rentang suhu 80–250°C yang selama ini didominasi oleh boiler gas alam dan uap terkompresi (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Namun, defisit utama yang menghambat adopsi High-Temperature Heat Pump (HTHP) pada proses industri adalah sifat *intermittent* dari sumber listrik terbarukan (angin, surya) serta mismatch antara profil produksi panas dan konsumsi proses (*process heat duty curve*).

Dalam konteks inilah Toloza, Payá, dan Barceló (2026) memposisikan unit *Latent Heat Thermal Energy Storage* (LHTES) berbasis *Phase Change Material* (PCM) sebagai elemen fleksibilitas yang kritikal. Makalah mereka — yang dipublikasikan pada *Eurotherm Seminar #119* dan diindeks dengan DOI [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086) — secara eksplisit menargetkan integrasi LHTES dengan HTHP pada suhu operasi di kisaran 222°C. Angka ini bukan arbitrary: suhu tersebut berada di dalam jendela operasi industri kimia, makanan, dan tekstil (*dyeing, bleaching, sterilization*) yang notabene merupakan konsumen energi termal terbesar di Uni Eropa (mencapai ~23% dari total final energy consumption menurut EU Industrial Energy Roadmap).

Permasalahan fundamental yang diidentifikasi oleh Toloza et al. (2026) adalah konduktivitas termal PCM garam nitrat yang rendah — umumnya hanya 0,5–1,5 W/(m·K) — yang menciptakan *bottleneck* perpindahan panas selama siklus charging/discharging. Tanpa optimasi geometri *heat exchanger* atau penggunaan *thermal enhancement devices* (logam wol, fin, *encapsulation*), kapasitas dayanya (*power density*) akan anjlok dan ekonomi proyek menjadi tidak feasible. Oleh karena itu, paper ini mengusulkan konfigurasi *shell-and-tube* vertikal sebagai solusi *trade-off* antara kekompakan, kekakuan struktural, dan kemampuan enhancement termal (Toloza et al., 2026).

## 2. Landasan Teori & Formulasi Matematis

Model transien yang dibangun Toloza et al. (2026) berangkat dari persamaan konservasi energi 1-D radial pada PCM eutektik nitrat (campuran KNO₃–NaNO₃, titik lebur ~220°C) di dalam *shell*:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(r \cdot k_{PCM}(T) \cdot \frac{\partial T}{\partial r}\right)$$

di mana $\rho_{PCM}$ adalah densitas PCM, $h$ adalah entalpi spesifik, $k_{PCM}(T)$ adalah konduktivitas termal dependen suhu, dan $r$ adalah koordinat radial. Formulasi entalpi digunakan untuk menghindari *sharp-interface tracking* yang secara numerik mahal; sebaliknya, digunakan metode *apparent heat capacity* (atau *enthalpy method*) yang menuliskan:

$$h(T) = \int_{T_{ref}}^{T} c_{p,PCM}\,dT + f(T)\cdot L$$

dengan $L$ sebagai panas laten fusi dan $f(T)$ adalah *liquid fraction* yang dimodelkan sebagai:

$$f(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s \le T \le T_l \\ 1, & T > T_l \end{cases}$$

dengan $T_s$ dan $T_l$ masing-masing adalah suhu *solidus* dan *liquidus*. Untuk menghindari diskontinuitas pada kapasitas panas semu $c_{p,app} = c_{p,PCM} + L \cdot \delta(T - T_m)$, paper mengadopsi regularisasi Gaussian:

$$f(T) \approx \frac{1}{2}\left[1 + \tanh\left(\frac{T - T_m}{\Delta T_{mushy}}\right)\right]$$

di mana $\Delta T_{mushy}$ adalah lebar *mushy zone* (umumnya 2–4 K) yang menjamin stabilitas numerik.

Pada sisi *tube*, perpindahan panas antara *Heat Transfer Fluid* (HTF, biasanya termal oil Dowtherm atau air bertekanan)遵循 hukum konservasi energi konvektif:

$$\rho_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} c_{p,HTF} u \frac{\partial T_{HTF}}{\partial x} = \frac{4 U}{D_{in}}(T_{PCM,wall} - T_{HTF})$$

di mana $U$ adalah koefisien transfer panas overall yang menggabungkan resistansi konveksi HTF, konduksi dinding tabung, dan konduksi efektif PCM:

$$\frac{1}{U} = \frac{1}{h_{HTF}} + \frac{D_{in}\ln(D_{out}/D_{in})}{2 k_{tube}} + \frac{D_{in}}{D_{out}\,h_{eff,PCM}}$$

Kondisi batas awal (*initial condition*) dan batas (*boundary condition*) mengikuti standar *charging mode*: $T_{PCM}(r, 0) = T_{s,initial}$ (subcooled), $T_{HTF}(x, 0) = T_{HTF,initial}$, dan