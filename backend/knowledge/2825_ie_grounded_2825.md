# 2825 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) Suhu ~222°C untuk Integrasi dengan Pompa Panas Temperatur Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 25% konsumsi energi final global, di mana lebih dari separuh kebutuhan tersebut berupa **panas proses** (process heat) pada rentang suhu 150–400°C untuk aplikasi seperti pasteurisasi, sterilisasi, pengeringan, distilasi, dan reaksi kimia endotermik (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri menghadapi tantangan struktural: pembangkitan panas suhu-tinggi secara historis didominasi oleh boiler bahan bakar fosil, sementara elektrifikasi proses termal melalui *High-Temperature Heat Pumps* (HTHPs) terkendala oleh *mismatch* temporal antara permintaan beban termal dan ketersediaan energi listrik murah.

Dalam konteks inilah Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) memposisikan **Latent Heat Thermal Energy Storage (LHTES)** sebagai elemen penyimpan energi kritis yang menjembatani variabilitas operasi HTHP dengan kontinuitas suplai panas industri. Berbeda dengan *sensible heat storage* (SHS) yang hanya mengandalkan kapasitas panas material, LHTES memanfaatkan **panas laten fasa perubahan** — umumnya peleburan — untuk menyimpan energi 5–10 kali lebih padat volumetrik. Studi Eurotherm Seminar #119 tersebut secara khusus menyoroti suhu fasa perubahan di kisaran 222°C, yang merupakan *sweet spot* operasional karena: (i) berada dalam jangkauan efisiensi puncak *high-temperature heat pumps* berbasis siklus trans-kritis CO₂ atau campuran refrigeran HFO/HFC, (ii) memenuhi kebutuhan proses pada industri makanan, kimia ringan, dan tekstil, dan (iii) kompatibel dengan PCM (*Phase Change Material*) eutektik berbasis garam nitrat — khususnya **solar salt** (60% NaNO₃ + 40% KNO₃, T_m ≈ 220°C).

Permasalahan utama yang diidentifikasi Toloza et al. adalah **konduktivitas termal PCM yang rendah** (k_solar salt ≈ 0,5 W/m·K dalam fasa padat), yang tanpa optimalisasi geometri akan menyebabkan waktu charge-discharge tidak layak secara ekonomis. Untuk menjawab hal tersebut, konfigurasi **shell-and-tube** dipilih penulis karena tiga keunggulan struktural: kekompakan volumetrik tinggi, robusteitas mekanis pada tekanan dan siklus termal, serta kapasitas untuk *thermal enhancement* melalui fin internal atau *metal wool*. Unit LHTES vertikal yang dimodelkan dengan bahasa Modelica ini memungkinkan evaluasi kuantitatif terhadap desain sebelum fabrikasi, sehingga menurunkan risiko kapital dan mempercepat *time-to-market* integrasi HTHP-storage di pabrik.

Urgensi industrial-ekonomis dari riset ini sangat nyata: pasar *thermal energy storage* global diproyeksikan mencapai USD 12 miliar pada 2030 dengan CAGR >8%, didominasi oleh sektor industri dan distrik pemanas (Xu & Wang, 2024). Keberhasilan integrasi LHTES-HTHP berpotensi memangkas emisi CO₂ industri panas proses hingga 60–80% per satuan energi, menjadikan rekayasa sistem semacam ini kompetensi inti bagi insinyur Teknik Industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES shell-and-tube memerlukan penyelesaian simultan dari tiga domain fisik: **(i) konduksi tidak-tunak dalam PCM** dengan *moving solid-liquid interface*, **(ii) konveksi paksa HTF** di dalam tabung, dan **(iii) perpindahan kalor melalui dinding tabung**. Toloza et al. (2026) menggunakan **formulasi enthalpy** untuk menghindari *front-tracking* eksplisit pada batas fasa, yang difavoritkan dalam lingkungan Modelica.

### 2.1 Persamaan Energi pada PCM

Untuk PCM di dalam *shell*, persamaan konservasi energi dalam koordinat silindris (asimtotik sumbu-tabung, geometri sumetris aksial) adalah:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{PCM}(T) \, r \, \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM}(T) \, \frac{\partial T}{\partial z} \right)$$

di mana $H$ adalah entalpi spesifik (J/kg), $\rho_{PCM}$ densitas, dan $k_{PCM}(T)$ konduktivitas termal dependen suhu. Relasi entalpi-suhu mengikuti:

$$H(T) = \int_{T_{ref}}^{T} c_p(T')\,dT' + f_l(T) \cdot L$$

dengan $f_l \in [0,1]$ fraksi massa cair (*liquid fraction*) dan $L$ panas laten peleburan (J/kg). Pendekatan *effective heat capacity* menyederhanakan implementasi numerik:

$$k_{PCM}(T) = k_s + f_l(T) \cdot (k_l - k_s), \quad c_{p,eff}(T) = c_{p,s} + L \cdot \frac{df_l}{dT}$$

dengan $f_l(T)$ dimodelkan sebagai fungsi sigmoid (atau *apparent heat capacity* Gaussian di sekitar $T_m$) untuk menstabilkan komputasi near-interface.

### 2.2 Persamaan Stefan pada Antarmuka Fasa

Laju pergerakan antarmuka padatan-cair dikontrol oleh **kondisi Stefan**:

$$\rho_{PCM} \cdot L \cdot v_n = k_l \left.\frac{\partial T}{\partial n}\right|_{l} - k_s \left.\frac{\partial T}{\partial n}\right|_{s}$$

di mana $v_n$ adalah kecepatan normal antarmuka, dan $n$ vektor normal ke bidang solidifikasi. Pada aplikasi shell-and-tube, gradien suhu didominasi komponen radial sehingga suku $z$ dapat diabaikan dengan validitas orde pertama.

### 2.3 Perpindahan Kalor HTF dalam Tabung

Untuk aliran HTF turbulen di dalam tabung (bilangan Reynolds $Re > 10^4$), koefisien konveksi $h_{HTF}$ mengikuti korelasi Dittus-Boelter:

$$Nu_D = 0,023 \, Re_D^{0,8} \, Pr^{0,4}, \quad h_{HTF} = \frac{Nu_D \cdot k_{HTF}}{D_i}$$

dengan $D_i$ diameter dalam tabung, $Pr$ bilangan Prandtl HTF, dan $Re_D = \rho_{HTF} v D_i / \mu_{HTF}$.

### 2.4 Koefisien Perpindahan Kalor Overall

Resistansi termal total antara HTF dan PCM dihitung melalui resistansi seri:

$$\frac{1}{U_o} = \frac{1}{h_{HTF}} \frac{D_o}{D_i} + \frac{D_o \ln(D_o/D_i)}{2 k_{wall}} + \frac{1}{h_{PCM,eff}}$$

di mana $h_{PCM,eff}$ adalah koefisien konveksi efektif di sisi PCM yang merepresentasikan konduksi radial dan bergantung pada geometri serta laju perubahan fasa.

### 2.5 Persamaan Energi pada HTF

Untuk HTF mengalir secara paksa konveksi dalam tabung (asumsi *plug flow* satu dimensi):

$$\rho_{HTF} c_{p,HTF} A_i \frac{\partial T_{HTF}}{\partial t} + \dot{m} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_{HTF} \pi D_i (T_{wall,i} - T_{HTF})$$

### 2.6 Implementasi Modelica

Toloza et al. (2026) mengimplementasikan sistem persamaan di atas dalam **Modelica** menggunakan pustaka *Thermal-Fluid* dan *Media* dengan langkah waktu adaptif $\Delta t \in [0,1; 5]$ s, mesh radial 50 node per PCM, dan mesh aksial 20 node per tabung, menghasilkan $\approx 2.000$ persamaan diferensial biasa yang diselesaikan secara *DAE* simultan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri LHTES shell-and-tube untuk integrasi HTHP mengikuti SOP 7-tahap yang diturunkan dari metodologi Toloza et al. (2026) dan best practices sistem termal industri:

**Tahap 1 — Karakterisasi Kebutuhan Proses.**
Tentukan suhu target proses $T_{proc}$ (mis. 200°C untuk pasteurisasi susu), profil beban termal harian $Q(t)$ dalam kW, dan toleransi *ramp rate* (°C/menit). Data ini menentukan kapasitas penyimpanan minimum $E_{min} = \int Q(t) \, dt$.

**Tahap 2 — Seleksi PCM.**
Pilih PCM eutektik dengan $T_m$ sedekat mungkin dengan $T_{proc}$ untuk memaksimalkan eksergi. Untuk rentang 220–225°C, solar salt (60% NaNO₃ + 40% KNO₃) adalah kandidat dominan karena ketersediaan komersial, kestabilan siklus >2.000 kali, dan biaya €0,5–1,5/kg.

**Tahap 3 — Desain Geometri Shell-and-Tube.**
Tetapkan parameter utama: panjang tabung $L$, diameter luar $D_o$, diameter dalam $D_i$, jumlah tabung $N_t$, dan diameter *shell* $D_s$. Volume PCM harus memenuhi:

$$V_{PCM} = \frac{\pi}{4}(D_s^2 - N_t D_o^2) \cdot L \geq \frac{E_{min}}{\rho_{PCM} (c_p \Delta T + L)}$$

**Tahap 4 — Validasi Numerik.**
Bangun model transien 2D-aksisimetri dalam Modelica atau COMSOL, validasi terhadap data eksperimental pembangkitan prototipe (termokopel Tipe-K di 8 lokasi radial dan aksial). Akurasi target: $\|\Delta T\|_{RMS} < 2°C$ versus data lab.

**Tahap 5 — Seleksi HTF dan HTHP.**
HTF harus stabil pada 230–260°C dengan viskositas rendah; *thermal oil* (mis. Therminol VP-1, T_max = 400°C) atau *pressurized water* (P > 40 bar) adalah opsi standar. HTHP bersumber dari siklus trans-kritis CO₂ dengan $COP_{Carnot} \approx 0,5 \cdot (T_{hot}/(T_{hot}-T_{cold}))$.

**Tahap 6 — Instrumentasi dan Kontrol.**
Pasang sensor suhu HTF in/out.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
