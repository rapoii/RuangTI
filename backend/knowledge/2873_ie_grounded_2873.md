# 2873 — Model Numerik Transien Unit Penyimpanan Energi Termal Kalor Laten pada ±222 °C untuk Integrasi dengan Heat Pump Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25 % dari konsumsi energi akhir global dan merupakan kontributor utama emisi CO₂ proses, di mana lebih dari separuh kebutuhan termalnya berada pada rentang suhu menengah-tinggi (150–250 °C) untuk aplikasi seperti sterilisasi pangan, pengeringan, distilasi kimia, dan pemrosesan tekstil [Xu & Wang, *The Innovation Energy*, DOI: 10.59717/j.xinn-energy.2024.100032]. Elektrifikasi panas proses melalui High-Temperature Heat Pump (HTHP) menjadi salah satu pilar dekarbonisasi, namun HTHP memiliki karakteristik operasional yang fluktuatif tergantung pada profil beban dan suhu kondensasi, sehingga memerlukan buffer termal untuk menjaga kestabilan sistem dan memperhalus profil permintaan listrik. Toloza, Payá, dan Barceló (DOI: 10.21001/eurotherm2026.086) menekankan bahwa Latent Heat Thermal Energy Storage (LHTES) dengan Phase Change Material (PCM) merupakan solusi bernilai tambah tinggi ketika digabungkan dengan HTHP, karena densitas penyimpanan energi persatuan volume jauh melampaui sensible heat storage.

Studi tersebut secara spesifik memilih suhu fasa-lebur PCM sekitar 222 °C yang berkorelasi langsung dengan jendela operasi tipikal HTHP berbasis refrigeran alami (mis. CO₂, hidrokarbon) atau siklus Rankin organik. Tingginya suhu fasa-lebur mengharuskan penggunaan PCM garam nitrat eutektik (misalnya solar salt 60 % NaNO₃ – 40 % KNO₃ dengan titik lebur ≈ 220 °C), yang memiliki konduktivitas termal rendah sehingga hambatan utama bukan pada kapasitas kalor, melainkan pada laju transfer panas. Konfigurasi *shell-and-tube* dipilih karena kekompakan, kekakuan struktural, dan kapasitas peningkatan termal melalui optimasi geometri pertukaran panas, enkapsulasi, atau wol logam. Konteks industrial engineering yang melatarbelakangi riset ini mencakup tiga kebutuhan simultan: (i) mendekoupling produksi panas HTHP dari permintaan beban proses untuk meningkatkan COP musiman, (ii) menyediakan energi termal saat terjadi intermitensi atau tarif listrik puncak, dan (iii) menurunkan kapasitas terpasang HTHP melalui *peak-shaving*, sehingga investasi modal menjadi lebih rasional.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES diselesaikan dengan menggunakan bahasa Modelica untuk menyimulasikan perilaku peleburan dan pembekuan PCM secara aksial-simetris pada geometri *shell-and-tube* vertikal. Persamaan konservasi energi dalam koordinat silinder untuk PCM dengan perubahan fasa dinyatakan sebagai:

$$\rho \, c_p(T) \, \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(k(T)\,r\,\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k(T)\,\frac{\partial T}{\partial z}\right)$$

dengan $T$ suhu, $t$ waktu, $r$ radius, $z$ aksial, $\rho$ densitas, $c_p$ kapasitas panas jenis, dan $k$ konduktivitas termal efektif. Karena $k$ PCM sangat rendah (≈ 0,5–1,5 W/m·K), gradien radial mendominasi proses perpindahan panas. Formulasi entalpi (*apparent heat capacity method*) digunakan untuk menghindari diskontinuitas pada antarmuka padat-cair:

$$H(T) = \int_{T_{ref}}^{T} \rho\,c_p(T')\,dT' + \rho\,L \cdot f(T)$$

dengan $L$ kalor laten peleburan dan fraksi cair $f(T)$ dimodelkan dengan pendekatan *mushy zone*:

$$f(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s \le T \le T_l \\ 1, & T > T_l \end{cases}$$

Bilangan Stefan dan Fourier digunakan untuk analisis dimensional:

$$Ste = \frac{c_p\,(T_m - T_{init})}{L}, \qquad Fo = \frac{\alpha\,t}{R_t^{2}}$$

dengan $\alpha = k/(\rho c_p)$ diffusivitas termal, $R_t$ radius tabung HTF, $T_m$ suhu lebur, dan $T_{init}$ suhu awal PCM. Pada sisi HTF (fluida pemanas/pendingin), persamaan energi 1-D unsteady dengan asumsi sumbu-z diasumsikan dominan untuk koordinat aksial, sehingga:

$$\rho_f\,c_{p,f}\,A_f\,\frac{\partial T_f}{\partial t} + \dot{m}\,c_{p,f}\,\frac{\partial T_f}{\partial z} = h_i\,\pi D_i\,(T_{wall} - T_f)$$

dengan $\dot{m}$ laju aliran massa HTF, $A_f$ luas penampang aliran, $h_i$ koefisien konveksi internal, dan $D_i$ diameter dalam tabung. Kopling termal antara sisi HTF dan PCM diselesaikan melalui resistansi termal seri dinding tabung. Kondisi batas radial meliputi konveksi HTF internal dan konveksi/insulasi eksternal pada cangkang. Diskretisasi numerik menggunakan metode volume hingga (*finite volume