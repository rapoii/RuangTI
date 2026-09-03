# 2537 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (~222 °C) untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi final global, dengan porsi sekitar 37% dari total energi final dunia dan bertanggung jawab atas hampir 24% emisi CO₂ (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Di dalam konsumsi tersebut, panas proses industri (*industrial process heat* / IPH) menyumbang proporsi dominan—mencapai lebih dari 50% kebutuhan energi termal pabrik—yang secara historis dipenuhi oleh pembakaran gas alam, batubara, atau minyak berat. Dekarbonisasi IPH mensyaratkan transisi teknologi radikal, salah satunya melalui kombinasi *High-Temperature Heat Pumps* (HTHPs) dengan *Latent Heat Thermal Energy Storage* (LHTES) (Xu & Wang, 2024). HTHPs modern berbasis siklus Rankine trans-kritis atau siklus Kalina mampu menaikkan suhu dari rejeksi sumber panas tingkat rendah (≤120 °C) menjadi output pada rentang 150–250 °C, menjadikannya kandidat utama elektrifikasi panas proses (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Namun, HTHPs menghadapi tantangan operasional serius ketika terintegrasi langsung dengan beban termal yang fluktuatif: kapasitas kondensor harus menyesuaikan diri secara dinamis dengan permintaan steam proses yang bersifat *intermittent* (batch reactor, *sterilization*, *drying*), sementara koefisien performa (*COP*) sistem menurun tajam ketika sumber panas berada di bawah ambang kritis. Di sinilah LHTES berperan sebagai *buffer* termal: menyimpan kelebihan produksi HTHP saat beban rendah dan melepaskannya saat beban puncak, sekaligus men-*smooth* profil termal sisi kondensor. Tantangan fundamentalnya adalah mayoritas *Phase Change Material* (PCM) yang beroperasi pada kisaran 200–250 °C—terutama garam nitrat dan campuran eutektiknya—mempunyai konduktivitas termal sangat rendah (0,5–1,5 W/m·K), sehingga geometri penukar panas menjadi faktor penentu kelayakan ekonomi (Toloza et al., 2026). Konfigurasi *shell-and-tube* dipilih karena kekompakan volumetrik, ketahanan struktural, dan kemampuan integrasi elemen peningkatan perpindahan panas (fin internal, *metal foam*, *metal wool*, atau *encapsulation* nano-enhanced).

Relevansi industri dari penelitian Toloza et al. (2026) sangat tinggi untuk rantai pasok Eropa yang tengah mengimplementasikan *EU Energy Efficiency Directive* (EEC 2023/1791) dan standar ISO 50001:2018. Penyimpanan panas laten pada ~222 °C dapat melayani sektor makanan (sterilisasi UHT), kimia (reaksi endotermik sedang), tekstil (pewarnaan & finishing), kertas (pengeringan), dan refinery (reboiler ringan). Makalah Toloza et al. mengisi *gap* literatur dengan menyediakan model transien numerik dalam bahasa Modelica—yang mampu memecahkan persamaan konservasi energi secara coupled antara PCM dan *Heat Transfer Fluid* (HTF) di dalam tube—sehingga insinyur dapat melakukan *digital twin* terhadap unit LHTES sebelum fabrikasi fisik. Pendekatan ini sangat penting untuk *capital-intensive* proyek dekarbonisasi di mana kesalahan desain pada suhu di atas 200 °C berpotensi menimbulkan kerugian material yang signifikan akibat korosi, *thermal cycling stress*, dan degradasi PCM.

## 2. Landasan Teori & Formulasi Matematis

Model transien 1D-radial untuk PCM di dalam *shell*, dikopling dengan model 1D-aksial untuk HTF di dalam tube, dibangun di atas konservasi energi berbasis metode *enthalpy* (Toloza, Payá & Barceló, 2026). Asumsi standar industri yang diadopsi: (i) PCM diasumsikan homogen secara radial di setiap *control volume*, (ii) sifat termofisik PCM bernilai konstan di tiap fase kecuali konduktivitas efektif $k_{\text{eff}}$ yang ditingkatkan oleh struktur internal, (iii) perpindahan panas ke lingkungan diabaikan (*adiabatic outer shell*), dan (iv) HTF遵守 *plug flow* dengan koefisien konveksi $h_{\text{HTF}}$ seragam.

### 2.1 Konservasi Energi pada PCM (Metode Enthalpy)

Untuk setiap elemen volumetrik PCM, persamaan governing adalah:

$$\rho_{\text{PCM}} \frac{\partial h_{\text{PCM}}}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r\, k_{\text{eff}} \frac{\partial T}{\partial r}\right) + \dot{q}_{\text{vis}} \tag{1}$$

dengan $h_{\text{PCM}}$ sebagai entalpi spesifik (J/kg), $\rho_{\text{PCM}}$ densitas (kg/m³), $k_{\text{eff}}$ konduktivitas efektif (W/m·K), $r$ koordinat radial (m), dan $\dot{q}_{\text{vis}}$ dissipasi viskos selama solidifikasi (diabaikan pada LHTES pasif).

Hubungan entalpi–temperatur menggunakan formulasi *apparent heat capacity*:

$$h_{\text{PCM}}(T) = \int_{T_{\text{ref}}}^{T} c_{p,\text{PCM}}(T')\,\mathrm{d}T' + L\cdot f(T) \tag{2}$$

dengan $L$ panas laten (J/kg) dan $f(T)$ fraksi cair (*liquid fraction*), yang dimodelkan sebagai fungsi *smoothing* (misalnya Gaussian smoothing) untuk menghindari diskontinuitas numerik:

$$f(T) = \frac{1}{2}\left[1 + \mathrm{erf}\left(\frac{T - T_m}{\Delta T/2}\right)\right] \tag{3}$$

di mana $T_m$ adalah temperatur leleh eutektik (~222 °C untuk kasus referensi) dan $\Delta T$ lebar interval fasa (~2–4 K).

### 2.2 Konservasi Energi pada HTF (Aliran dalam Tube)

Untuk HTF yang mengalir di dalam tube dengan kecepatan aksial $u_{\text{HTF}}$, konservasi energi dalam arah aksial $z$ memberikan:

$$\rho_{\text{HTF}} c_{p,\text{HTF}} \frac{\partial T_{\text{HTF}}}{\partial t} + \rho_{\text{HTF}} c_{p,\text{HTF}}\, u_{\text{HTF}} \frac{\partial T_{\text{HTF}}}{\partial z} = \frac{4 h_{\text{HTF}}}{D_i}\left(T_{s,i}(z,t) - T_{\text{HTF}}(z,t)\right) \tag{4}$$

dengan $D_i$ diameter dalam tube, $h_{\text{HTF}}$ koefisien konveksi sisi tube (W/m²·K), dan $T_{s,i}$ temperatur dinding dalam tube.

### 2.3 Kondisi Batas dan Kopling Termal

Kopling antara HTF dan PCM terjadi melalui dinding tube dengan resistansi seri:

$$\dot{Q}'(z,t) = \frac{T_{\text{HTF}}(z,t) - T_{\text{PCM}}(R_i, z, t)}{\underbrace{\frac{1}{h_{\text{HTF}}\pi D_i}}_{\text{konveksi HTF}} + \underbrace{\frac{\ln(D_o/D_i)}{2\pi k_w}}_{\text{konduksi dinding}} + \underbrace{\frac{1}{h_{\text{PCM}}\pi D_o}}_{\text{konveksi PCM}}} \tag{5}$$

dengan $D_o$ diameter luar tube, $k_w$ konduktivitas material tube (baja karbon atau stainless 316L), dan $h_{\text{PCM}}$ koefisien konveksi ekuivalen PCM (untuk lelehan alami, $h_{\text{PCM}} \approx 50$–200 W/m²·K dengan *metal wool enhancement*).

### 2.4 Bilangan Tak Berdimensa Karakteristik

Untuk analisis sensitivitas, digunakan beberapa bilangan karakteristik:

- **Bilangan Stefan** (rasio panas sensible vs laten):

$$\mathrm{Ste} = \frac{c_{p,\text{PCM}}(T_m - T_{\text{PCM},0})}{L} \tag{6}$$

- **Bilangan Fourier** (waktu difusi termal):

$$\mathrm{Fo} = \frac{\alpha_{\text{PCM}}\, t}{R_o^{2}}, \quad \alpha_{\text{PCM}} = \frac{k_{\text{eff}}}{\rho_{\text{PCM}} c_{p,\text{PCM}}} \tag{7}$$

- **Efektivitas unit** ($\varepsilon$):

$$\varepsilon = \frac{\int_{0}^{t} \dot{m}_{\text{HTF}} c_{p,\text{HTF}} (T_{\text{HTF,in}} - T_{\text{HTF,out}})\,\mathrm{d}t}{M_{\text{PCM}} L} \tag{8}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES untuk integrasi HTHP mengikuti SOP *engineering design* yang sistematis, sebagaimana divalidasi secara numerik oleh Toloza et al. (2026):

**Tahap 1 — Karakterisasi Beban Termal (Minggu 1–2):**
Lakukan audit energi fasilitas mengikuti ISO 50002:2014 untuk menentukan profil permintaan panas proses (variasi harian/musiman, durasi *peak load*, kapasitas HTHP yang sudah terpasang atau direncanakan). Data ini menjadi input kurva $T_{\text{HTF,in}}(t)$ pada model.

**Tahap 2 — Seleksi PCM (Minggu 3–4):**
Pilih PCM eutektik dengan $T_m$ ~10–20 °C di atas suhu saturasi kondensor HTHP. Untuk rentang 222 °C, kandidat utama adalah campuran $\text{KNO}_3$–$\text{NaNO}_3$ (60:40 mol%, $T_m \approx 222$ °C, $L \approx 110$ kJ/kg) atau $\text{KNO}_3$–$\text{NaNO}_2$ (Xu & Wang, 2024). Verifikasi compatibility kimia dengan material tube menggunakan *differential scanning calorimetry* (DSC) dan *thermal cycling test* ≥1000 siklus mengikuti ASTM E1269.

**Tahap 3 — Desain *Shell-and-Tube* (Minggu 5–7):**
- Diameter tube dalam $D_i$ dipilih 20–40 mm untuk keseimbangan antara luas permukaan dan pressure drop HTF.
- Diameter *shell* $D_s$ ditentukan dari *tube pitch ratio* $p/D_o \approx 1,25$ (layout segitiga) untuk kapasitas PCM maksimum.
- Tinggi unit $L$ dihitung dari target kapasitas energi $Q_{\text{target}}$:

$$L = \frac{Q_{\text{target}}}{\eta_{\text{geom}}\, \rho_{\text{PCM}} L\, A_{\text{cs}}} \tag{9}$$

dengan $\eta_{\text{geom}}$ faktor pengepakan (~0,7) dan $A_{\text{cs}}$ luas penampang anular.

**Tahap 4 — Peningkatan Perpindahan Panas (Minggu 8):**
Integrasikan *metal wool* (porositas 0,85–0,95, diameter fiber 50–100 µm) ke dalam PCM untuk menaikkan $k_{\text{eff}}$ dari 0,8 menjadi ~5–10 W/m·K (Toloza et al., 2026). Validasi melalui simulasi CFD lokal sebelum fabrikasi.

**Tahap 5 — Pemodelan Numerik (Minggu 9–11):**
Bangun model transien dalam Modelica (atau COMSOL Multiphysics sebagai alternatif komersial), dengan *grid