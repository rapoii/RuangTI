# 2617 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (~222 °C) untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi final terbesar secara global, di mana lebih dari 50 % permintaan energi termal berada pada rentang suhu menengah–tinggi (100–400 °C) yang digunakan untuk proses pengeringan, pemasakan, sterilisasi, distilasi, dan reaksi kimia. Dalam peta dekarbonisasi industri, elektrifikasi proses termal melalui *High-Temperature Heat Pumps* (HTHPs) muncul sebagai strategi utama untuk menggantikan boiler berbasis gas alam, karena mampu menaikkan koefisien performansi (*Coefficient of Performance*, COP) hingga 3–5 pada sumber panas buangan (Toloza, Payá, & Barceló, 2026; Xu & Wang, 2024). Namun demikian, fluktuasi antara ketersediaan sumber panas limbah dan kebutuhan proses termal industri menciptakan *mismatch* temporal yang menurunkan utilisasi dan efektivitas HTHP. Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) mengambil peran strategis: menyimpan kelebihan output HTHP pada fase pelelehan *Phase Change Material* (PCM) untuk dilepas kemudian saat permintaan puncak.

Toloza dkk. (2026) secara eksplisit menekankan bahwa integrasi LHTES dengan HTHP merupakan *added value* pada aplikasi panas proses industri, khususnya ketika memanfaatkan PCM eutektik dengan titik lebur di kisaran 222 °C. Tantangan fundamentalnya adalah konduktivitas termal PCM yang rendah (umumnya 0,2–1,0 W/m·K untuk garam nitrat dan hidrat), yang menghambat laju *charging* dan *discharging*. Solusi yang dikaji meliputi optimalisasi geometri penukar panas, enkapsulasi, dan *metal wool* (Toloza, Payá, & Barceló, 2026). Xu dan Wang (2024) menambahkan bahwa untuk dekarbonisasi termal berskala utilitas, kombinasi HTHP-LHTES mampu menyimpan energi dalam densitas tinggi (200–500 kJ/kg) sehingga *footprint* fisik berkurang signifikan dibanding *sensible heat storage*.

Secara operasional, konfigurasi *shell-and-tube* dipilih karena tiga alasan struktural: kekompakan volumetrik, kemampuan menahan tekanan siklus termal, dan kapasitas *thermal enhancement* melalui *baffles* dan *fins* internal. Dalam perspektif rekayasa industri, pemahaman perilaku transien unit LHTES sangat penting untuk menentukan jadwal operasi HTHP, sizing buffer, dan strategi *demand-side management* pada pabrik. Dokumen ini akan menguraikan kerangka analitis untuk menjawab tantangan tersebut dengan berbasis pada formulasi numerik Modelica yang dilaporkan oleh Toloza dkk. (2026).

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES *shell-and-tube* pada hakikatnya adalah masalah perpindahan panas konduksi–konveksi dua arah yang dikopling dengan perubahan fasa. Pendekatan standar yang diadopsi adalah *enthalpy method*, di mana energi dalam (*h*) PCM dimodelkan sebagai fungsi suhu dengan menyertakan panas laten melalui fungsi fraksi cair $f_l$.

$$h(T) = h_{\text{ref}} + \int_{T_{\text{ref}}}^{T} c_p(T')\,dT' + f_l(T) \cdot L$$

dengan $L$ adalah panas laten pelelehan dan $f_l(T)$ adalah *liquid fraction* yang dimodelkan sebagai fungsi bertingkat (*piecewise linear*) atau melalui pendekatan *apparent heat capacity*:

$$f_l(T) = \begin{cases} 0, & T \le T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s < T < T_l \\ 1, & T \ge T_l \end{cases}$$

Persamaan konservasi energi pada domain PCM dalam koordinat silindris (2-D axisimetri karena konfigurasi vertikal) adalah:

$$\rho_{\text{PCM}} \frac{\partial h}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(k_{\text{PCM,eff}}\,r\,\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k_{\text{PCM,eff}}\,\frac{\partial T}{\partial z}\right)$$

di mana $k_{\text{PCM,eff}}$ adalah konduktivitas efektif yang sudah mencakup kontribusi *metal wool* atau *foam* (Toloza, Payá, & Barceló, 2026). Pada sisi *Heat Transfer Fluid* (HTF) yang mengalir dalam tabung, model 1-D *plug flow* dengan koefisien konveksi $h_{\text{HTF}}$ digunakan:

$$\rho_{\text{HTF}}\, c_{p,\text{HTF}}\, A_c \frac{\partial T_f}{\partial t} + \dot{m}\, c_{p,\text{HTF}} \frac{\partial T_f}{\partial z} = h_{\text{HTF}}\, P_c\,(T_s^{\text{inner}} - T_f)$$

Kopling antardomain terjadi pada dinding tabung (kondisi batas radial), dengan resistansi termal total $R_{\text{tot}}$:

$$\frac{1}{U} = \frac{1}{h_{\text{HTF}}} + \frac{r_o \ln(r_o/r_i)}{k_{\text{wall}}} + \frac{r_o}{r_i\, h_{\text{PCM,int}}}$$

Pada fase cair PCM, kontribusi konveksi alami dimodelkan melalui bilangan Rayleigh:

$$Ra_L = \frac{g\,\beta\, (T_s - T_m)\, L_c^3}{\nu\, \alpha_{\text{PCM}}}$$

Untuk analisis global, kapasitas energi yang tersimpan dalam siklus *charging* penuh adalah:

$$Q_{\text{stored}} = m_{\text{PCM}} \left[\int_{T_{\text{init}}}^{T_s} c_{p,s}\,dT + L + \int_{T_l}^{T_{\text{final}}} c_{p,l}\,dT \right]$$

Waktu *charging* orde pertama dapat diestimasi dengan metode *lumped capacitance* ketika $Bi = h L_c / k_{\text{eff}} < 0{,}1$, menghasilkan:

$$\frac{T(t) - T_\infty}{T_{\text{init}} - T_\infty} = \exp\!\left(-\frac{U A}{m c_p}\, t\right)$$

Untuk kebutuhan integrasi HTHP, COP musiman didefinisikan sebagai rasio energi termal tersimpan terhadap input listrik total:

$$\text{COP}_{\text{sys}} = \frac{Q_{\text{charge}} + Q_{\text{discharge}}}{W_{\text{HTHP}}}$$

Formulasi di atas selanjutnya dikodekan dalam *Modelica* dengan pustaka termodinamika multi-domain (Toloza, Payá, & Barceló, 2026), menggunakan diskretisasi *finite volume* untuk domain PCM dan integrasi eksplisit untuk HTF.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis unit LHTES–HTHP di lingkungan industri mengikuti *Standard Operating Procedure* yang diturunkan dari arsitektur model Toloza dkk. (2026). Prosedur ini diuraikan secara bertahap sebagai berikut:

**Tahap 1 — Karakterisasi Beban Termal dan Sumber Panas.** Pemetaan profil suhu dan laju aliran *waste heat* (sumber) serta profil permintaan proses termal (sinks). Data ini menjadi input fungsi $Q_{\text{supply}}(t)$ dan $Q_{\text{demand}}(t)$ pada domain waktu harian/mingguan.

**Tahap 2 — Seleksi PCM Eutektik dan Fluida Pembawa Panas (HTF).** Pemilihan PCM didasarkan pada tiga kriteria simultan: suhu pelelehan mendekati *mid-point* antara suhu sumber dan suhu target proses, panas laten $> 200$ kJ/kg, dan stabilitas siklik $> 3000$ siklus. Untuk suhu 222 °C, eutektik berbasis garam nitrat (misalnya campuran $\text{NaNO}_3$–$\text{KNO}_3$–$\text{Ca(NO}_3)_2$) adalah kandidat dominan. HTF yang umum adalah minyak termal sintetis atau *molten salt* dengan batas stabilitas $> 320$ °C.

**Tahap 3 — Desain Geometri Shell-and-Tube.** Optimasi dilakukan terhadap tiga variabel desain: rasio diameter $d_o/d_i$, panjang tabung $L_t$, dan pitch tube. Bilangan Reynolds internal HTF ditargetkan $> 10.000$ untuk rezim turbulen penuh agar $h_{\text{HTF}}$ optimal.

**Tahap 4 — Peningkatan Konduktivitas PCM.** Penambahan *metal wool* atau *expanded graphite matrix* dengan fraksi volumetrik 5–15 % untuk menaikkan $k_{\text{eff}}$ ke 3–8 W/m·K. Karakteristik tekanan drop pada sisi PCM juga diverifikasi agar $< 50$ Pa/m.

**Tahap 5 — Pembangunan Model Transien Modelica.** Model dikembangkan dengan komponen *flow channel*, *heat exchanger*, dan *phase change material* dari pustaka *Modelica.Thermal.HeatTransfer* dan *Modelica.Fluid*. Diskretisasi spasial: minimal 20 node radial × 30 node aksial. Solver: *CVODE* dengan toleransi relatif $10^{-6}$.

**Tahap 6 — Simulasi dan Validasi.** Simulasi dijalankan untuk skenario *charging* (HTHP aktif, HTF masuk 240 °C) dan *discharging* (HTF masuk 180 °C, proses aktif). Validasi