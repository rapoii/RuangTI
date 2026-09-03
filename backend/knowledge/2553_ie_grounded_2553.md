# 2553 — Modela Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222 °C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25 % konsumsi energi akhir global, dan lebih dari separuh kebutuhan tersebut berupa *process heat* pada rentang suhu 150–400 °C (Xu & Wang, 2024). Decarbonisasi sektor ini mensyaratkan penggantian boiler fosil dengan sistem elektrikal berbasis pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP) yang digabungkan dengan *thermal energy storage* (TES) untuk menangani mismatch antara permintaan termal yang fluktuatif dan ketersediaan listrik rendah karbon. Dalam konteks inilah Toloza, Payá, dan Barceló (2026) di Eurotherm Seminar #119 menyajikan model numerik transien unit LHTES (*Latent Heat Thermal Energy Storage*) yang beroperasi pada suhu sekitar 222 °C, dirancang khusus untuk integrasi langsung dengan HTHP.

Temperatur leleh 222 °C sengaja dipilih karena berada di ambang atas aplikasi proses industri menengah—mencakup distilasi, pewarnaan tekstil, sterilisasi pangan, dan pengeringan kimia—yang secara tradisional tidak dapat dilayani oleh heat pump konvensional (< 120 °C). Namun, tantangan fundamental material *phase change* (PCM) pada suhu tersebut adalah konduktivitas termal yang rendah, tipikal hanya 0,5–1,0 W/(m·K), sehingga diperlukan optimasi geometri heat exchanger. Toloza et al. (2026) memilih konfigurasi *shell-and-tube* vertikal karena tiga nilai rekayasa: (1) kekompakan volumetrik tinggi, (2) robuste struktural untuk menahan ekspansi termal PCM saat siklus padat–cair berulang, dan (3) fleksibilitas pemasangan *enhancement* (fin, *metal foam*, atau *metal wool*). Makalah ini secara eksplisit menyatakan bahwa tujuan akhirnya adalah menyediakan *buffer* termal berenergi tinggi yang mampu mengangkat *Coefficient of Performance* (COP) HTHP melalui *load leveling*, sehingga kapasitas pembangkitan panas HTHP dapat di-*right-size* terhadap beban rata-rata, bukan beban puncak. Implikasi ekonominya signifikan: investasi HTHP turun 25–35 % karena kapasitas termal berlebih digantikan oleh unit LHTES yang jauh lebih murah per kWh-nya.

---

## 2. Landasan Teori & Formulasi Matematis

Landasan teori LHTES transien mengikuti persamaan konservasi energi dalam media PCM yang mengalami perubahan fase. Dengan asumsi *Boussinesq* dan tanpa sumber internal, bentuk entalpik yang digunakan Toloza et al. (2026) dalam bahasa Modelica adalah:

$$\rho \, \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{eff} \, \nabla T \right)$$

dengan $h$ adalah entalpi spesifik, $\rho$ densitas, dan $k_{eff}$ konduktivitas efektif (setelah pemasangan enhancement). Hubungan $h(T)$ diselesaikan dengan metode *apparent heat capacity*:

$$h(T) = \int_{T_{ref}}^{T} c_p(T')\, dT' + f_l(T) \cdot L$$

di mana fraksi cair $f_l$ dimodelkan sebagai fungsi sigmoid di sekitar interval fusi $[T_s, T_l]$:

$$f_l(T) = \frac{T - T_s}{T_l - T_s}, \quad T_s \le T \le T_l$$

sehingga kapasitas termal tampak menjadi:

$$c_{p,app}(T) = c_p + L \, \frac{df_l}{dT}$$

Densitas dimodelkan sebagai fungsi kontinu dari fraksi cair untuk menghindari diskontinuitas di antarmuka padat-cair:

$$\rho(T) = \rho_s + f_l \left( \rho_l - \rho_s \right)$$

Untuk sisi *heat transfer fluid* (HTF) yang mengalir di dalam tube, konservasi energi 1-D digabung dengan *momentum equation* Darcy–Weisbach untuk menghasilkan profil suhu keluaran:

$$\dot{m}_{HTF} \, c_{p,htf} \, \frac{dT_{htf}}{dz} = h_i \,