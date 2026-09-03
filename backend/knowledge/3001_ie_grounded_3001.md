# 3001 — Model Numerik Transien Penyimpanan Energi Termal Panas Laten (LHTES) Shell-and-Tube pada 222°C untuk Integrasi dengan Pompa Panas Temperatur Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir seperempat konsumsi energi final global dan merupakan kontributor emisi CO₂ terbesar setelah pembangkitan listrik, dengan porsi signifikan berasal dari permintaan *process heat* pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dalam peta jalan dekarbonisasi Eropa, elektrifikasi *process heat* melalui *High-Temperature Heat Pump* (HTHP) dianggap sebagai tulang punggung transisi karena mampu menghasilkan Coefficient of Performance (COP) 3–5 bahkan pada suhu output >200 °C—jauh lebih efisien dibanding boiler listrik resistif. Namun, karakteristik HTHP memiliki keterbatasan operasional yang substansial: kapasitas termalnya sangat tergantung pada *lift* suhu (perbedaan T_evap dan T_cond) dan cenderung fluktuatif ketika terjadi transien beban pada sisi Heat Transfer Fluid (HTF) proses. Untuk itulah *Latent Heat Thermal Energy Storage* (LHTES) menjadi *enabler* strategis—menyediakan *buffer* termal yang memungkinkan HTHP beroperasi pada titik desain optimalnya meskipun downstream plant bersifat intermiten.

Toloza, Payá, dan Barceló (2026) dalam makro mereka yang dipublikasikan di *Eurotherm Seminar #119* ([DOI: 10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti urgensi integrasi LHTES dengan HTHP pada kisaran 222 °C—suhu yang relevan untuk aplikasi *process heat* di industri kimia, makanan/minuman (sterilisasi), dan pengeringan industri kertas. Tantangan fundamentalnya adalah konduktivitas termal PCM yang rendah (umumnya 0,2–1,0 W/m·K untuk garam dan garam eutektik), sehingga tanpa optimasi geometri *heat exchanger*, laju pelepasan/muatan panas menjadi tidak memadai untuk memenuhi dinamika proses industri. Konfigurasi *shell-and-tube* dipilih penulis karena tiga atribut industrial-grade: kekompakan volumetrik tinggi, ketahanan struktural terhadap siklus termal, dan kapasitas *thermal enhancement* lewat penambahan *fins*, *metal foams*, atau *metal wool* (Toloza dkk., 2026). Xu dan Wang (2024) mengonfirmasi bahwa integrasi HTHP-LHTES menjadi salah satu *technology pathway* paling matang untuk menggantikan boiler bahan bakar fosil pada rentang suhu menengah-tinggi, dengan potensi pengurangan emisi hingga 60–80% pada industri proses.

Konteks ekonomi industrial saat ini semakin memperkuat urgensi adopsi: harga listrik berbasis *renewables* menunjukkan profil *duck-curve* yang tajam, sehingga kemampuan *time-shifting* konsumsi listrik HTHP lewat LHTES menjadi nilai tambah finansial langsung. Selain itu, decarbonisasi proses industri melalui elektrifikasi termal telah masuk dalam *Net-Zero Industry Act* Uni Eropa dan menjadi bagian tak terpisahkan dari strategi *carbon border adjustment mechanism* (CBAM), sehingga kompetensi rekayasa dalam memodelkan dan mengintegrasikan unit LHTES-HTHP menjadi kebutuhan strategis bagi insinyur industri masa depan.

## 2. Landasan Teori & Formulasi Matematis

Model transien unit LHTES *shell-and-tube* yang dikembangkan Toloza dkk. (2026) menggunakan bahasa pemodelan *equation-based* Modelica, dengan *framework* perpindahan panas fase berubah (*phase-change heat transfer*) berbasis metode *enthalpy-porosity*. Persamaan konservasi energi untuk domain PCM dalam geometri silindris (radial-symmetric) adalah:

$$\rho \, \frac{\partial h}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(k_{\text{eff}}(T)\, r\, \frac{\partial T}{\partial r}\right) + \frac{1}{r^2}\frac{\partial}{\partial \theta}\!\left(k_{\text{eff}}(T)\, \frac{\partial T}{\partial \theta}\right) + \frac{\partial}{\partial z}\!\left(k_{\text{eff}}(T)\, \frac{\partial T}{\partial z}\right)$$

dengan $h$ adalah entalpi spesifik, $\rho$ densitas PCM, dan $k_{\text{eff}}(T)$ konduktivitas efektif yang bergantung suhu (penting karena pada fase transisi terjadi *mushy zone* dua fase). Relasi $h(T)$ diberikan oleh model *effective heat capacity*:

$$h(T) = \int_{T_{\text{ref}}}^{T} c_{p,\text{eff}}(T')\, dT', \quad \text{dengan}\quad c_{p,\text{eff}}(T) = c_{p,s} + \frac{L}{T_l - T_s}\, f_s(T)$$

dengan $L$ adalah laten peleburan, $T_s, T_l$ suhu *solidus* dan *liquidus*, dan fraksi cair $f_s(T)$ mengikuti interpolasi linier:

$$f_s(T) = \begin{cases} 0, & T \le T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s < T < T_l \\ 1, & T \ge T_l \end{cases}$$

Untuk menangkap efek konveksi alami pada fase cair, Toloza dkk. (2026) memasukkan pendekatan *mushy zone* dengan menambahkan *momentum sink* berupa gaya Boussinesq pada persamaan momentum Navier-Stokes:

$$\mathbf{F}_{\text{damp}} = -A_{\text{mush}}\, f_s(T)\, \mathbf{u}, \quad A_{\text{mush}} = \frac{1{,}8 \times 10^5}{L^3}\cdot \mu_{\text{liquid}}$$

Nilai $A_{\text{mush}}$ yang besar memastikan PCM di bawah $T_s$ berperilaku sebagai padatan diam (zero velocity). Bilangan karakteristik utama yang memvalidasi model adalah:

$$\text{Ste} = \frac{c_p (T_{\text{HTF,in}} - T_m)}{L}, \quad \text{Fo} = \frac{\alpha_{\text{PCM}}\, t}{R_c^2}, \quad \text{Bi} = \frac{h_i R_c}{k_{\text{PCM}}}$$

dengan $R_c$ jari-jari karakteristik sel PCM, $h_i$ koefisien konveksi sisi HTF, dan $\alpha_{\text{PCM}} = k_{\text{PCM}}/(\rho c_{p})$. Pada sisi HTF (aliran dalam tabung), koefisien konveksi $h_i$ dihitung dari korelasi Gnielinski untuk Re > 10⁴ atau Sieder-Tate untuk Re lebih rendah. Resistansi termal total rangkaian seri dikuantifikasi sebagai:

$$\frac{1}{U\, A} = \frac{1}{h_i A_i} + \frac{\ln(D_o/D_i)}{2\pi k_{\text{wall}} L} + \frac{1}{h_{\text{o,eff}} A_o}$$

dengan $h_{\text{o,eff}}$ merepresentasikan gabungan konduksi PCM dan konveksi alami, yang oleh Toloza dkk. (2026) dikorelasikan sebagai fungsi Ra (Raleigh) lokal dan fraksi cair. Pendekatan ini membuat model *predictive* terhadap efek densifikasi *metal wool/foam* yang didefinisikan lewat koefisien $\varepsilon$ (porositas) dan modifikasi $k_{\text{eff}}$ efektif menurut hukum paralel–serial *Bhattacharya*:

$$k_{\text{eff}} = \varepsilon\, k_{\text{PCM}} + (1-\varepsilon)\, k_{\text{metal}} \cdot \left[\frac{1 + 2\, r_m + \frac{2}{3}(1 - r_m)^2}{1 - r_m + r_m^2 \cdot k_{\text{PCM}}/k_{\text{metal}}}\right], \quad r_m = \frac{k_{\text{PCM}}}{k_{\text{metal}}}$$

Model ini diselesaikan secara coupled dengan HTF 1D non-stasioner di dalam tabung, dengan diskretisasi *finite volume* dalam Modelica menggunakan pustaka *HeatTransfer.Media* dan *HeatTransfer.Components*. Validasi dilakukan terhadap data eksperimen pembuangan panas dengan *heat extraction rate* (HER) sebagai metrik utama:

$$\text{HER}(t) = \dot{m}_{\text{HTF}}\, c_{p,\text{HTF}}\, (T_{\text{out}}(t) - T_{\text{in}})$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial unit LHTES-HTHP mengikuti SOP berbasis *Modelica-Systems Engineering* yang dirangkum dari protokol Toloza dkk. (2026) dan best-practice integrasi termal dari Xu & Wang (2024). Diagram alir SOP engineering secara berurutan adalah sebagai berikut.

**Tahap 1 — Penentuan Spesifikasi Desain.**
Definisikan *energy demand profile* (W), rentang suhu proses, dan siklus operasional harian. Pilih PCM eutektik dengan $T_m \in [T_{\text{proses}}-20°C, T_{\text{proses}}]$ (untuk kasus Toloza dkk. digunakan eutektik pada $T_m \approx 222$ °C). Pilih HTF yang kompatibel dengan rentang suhu HTHP (mis. *thermal oil* Dowtherm A atau air bertekanan pada loop terpisah).

**Tahap 2 — Pemodelan Term