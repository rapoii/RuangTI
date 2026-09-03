# 2665 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ±222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu & Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global mengonsumsi hampir 37% dari total energi akhir dunia, di mana lebih dari separuh kebutuhan tersebut berupa **panas proses industri** (*industrial process heat*) pada rentang suhu medium–tinggi (100–400 °C). Komponen panas proses ini selama beberapa dekade dipasok hampir seluruhnya oleh pembakaran bahan bakar fosil, menyumbang emisi CO₂ sekitar 20% dari total emisi antropogenik global. Dekarbonisasi rantai pasok energi termal industri menjadi salah satu tantangan paling mendesak dalam transisi energi, dan di sinilah **High-Temperature Heat Pump (HTHP)** dan **Latent Heat Thermal Energy Storage (LHTES)** memainkan peran transformatif (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)).

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa integrasi LHTES dengan HTHP memberikan fleksibilitas operasional yang signifikan: ketika permintaan panas proses bersifat间歇 (*intermittent*) atau tarif listrik fluktuatif, unit LHTES充当 sebagai buffer termal yang menyimpan surplus energi dari HTHP pada jam *off-peak* dan melepaskannya saat *peak demand*. Namun, tantangan fundamental terletak pada **konduktivitas termal rendah** dari mayoritas *Phase Change Material* (PCM) — umumnya bernilai $k_{pcm} \approx 0{,}2$–$1{,}0$ W/(m·K) — sehingga laju transfer panas menjadi *bottleneck* desain dan membutuhkan optimalisasi geometri penukar panas, enkapsulasi, atau penggunaan *metal wool/foam*.

Pemilihan suhu fusi sekitar **222 °C** sangat relevan secara industri karena terletak di kisaran suhu medium–tinggi yang mencakup proses sterilisasi pangan, *dyeing* tekstil, *preheating* fluida kimia, serta beberapa tahap proses pulp & kertas. Pada rentang suhu ini, eutektik berbasis garam nitrat (misalnya campuran Solar Salt termodifikasi atau eutektik ternary) menawarkan densitas energi volumetrik tinggi ($>$250 kJ/L) dan stabilitas siklus termal yang memadai untuk aplikasi industri.

Dari perspektif **rekayasa sistem industri**, keputusan adopsi LHTES-HTHP harus didasarkan pada analisis *techno-economic* yang mempertimbangkan: (i) *Capital Expenditure* (CAPEX) unit penukar panas dan PCM, (ii) *Levelized Cost of Heat* (LCOH) yang harus mampu bersaing dengan boiler gas alam, dan (iii) *dispatchability* energi termal yang dihasilkan. Tanpa model numerik transien yang valid, keputusan kapasitas, geometri, dan protokol operasi menjadi sangat spekulatif. Oleh karena itu, pengembangan model transien seperti yang dilakukan Toloza et al. (2026) dalam bahasa Modelica merupakan kontribusi rekayasa yang sangat bernilai bagi komunitas industri dan konsultan energi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas pada PCM

Perpindahan panas dalam PCM terjadi melalui tiga mekanisme simultan: konduksi termal dalam padatan/kristal, perpindahan panas laten pada antarmuka *solid-liquid*, dan konveksi alami dalam fasa cair. Model matematis paling ringkas namun akurat untuk menyelesaikan masalah perubahan fasa adalah **metode kapasitas kalor efektif** (*apparent heat capacity method*) yang diadopsi oleh Toloza et al. (2026):

$$\rho_{pcm} \cdot c_{p,\text{eff}}(T) \cdot \frac{\partial T}{\partial t} = \nabla \cdot (k_{pcm} \, \nabla T)$$

dengan kapasitas kalor efektif didefinisikan sebagai:

$$c_{p,\text{eff}}(T) = c_p + \Delta H \cdot f'(T)$$

di mana $\Delta H$ adalah entalpi fusi (J/kg), dan $f'(T)$ adalah turunan fungsi fraksi cair (*liquid fraction*) terhadap suhu.

### 2.2 Fungsi Fraksi Cair (Liquid Fraction Function)

Untuk PCM eutektik yang meleleh pada suhu tertentu $T_m$, fungsi fraksi cair disederhanakan menjadi fungsi step ideal; namun untuk paduan dengan rentang leleh $T_s \leq T \leq T_l$, fungsi linier berikut digunakan:

$$f(T) = \begin{cases} 0 & T < T_s \\[4pt] \dfrac{T - T_s}{T_l - T_s} & T_s \leq T \leq T_l \\[8pt] 1 & T > T_l \end{cases}$$

dengan turunan fungsi Dirac terkonsentrasi di sekitar $T_m$:

$$f'(T) = \frac{1}{T_l - T_s} \quad \text{untuk } T_s \leq T \leq T_l$$

### 2.3 Persamaan Energi untuk Heat Transfer Fluid