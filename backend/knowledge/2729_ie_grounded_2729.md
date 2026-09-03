# 2729 — Integrasi Latent Heat Thermal Energy Storage (LHTES) Shell-and-Tube dengan High-Temperature Heat Pump: Pemodelan Numerik Transien pada Suhu Fasa Perubahan ±222 °C untuk Dekarbonisasi Panas Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 25 % dari konsumsi energi final global dan lebih dari 30 % emisi CO₂ terkait energi, di mana hampir setengahnya berasal dari permintaan *process heat* bersuhu sedang–tinggi (100–250 °C) yang selama ini dipasok oleh boiler pembakaran bahan bakar fosil (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Desakan dekarbonisasi, fluktuasi harga gas alam, serta kebijakan carbon pricing di Uni Eropa (EU-ETS) dan inisiatif *net-zero* nasional telah menempatkan **High-Temperature Heat Pump (HTHP)** sebagai teknologi elektrifikasi strategis yang mampu menaikkan kalor dari sumber buangan/sumber termal rendah menjadi *useful heat* pada suhu 150–250 °C dengan *Coefficient of Performance* (COP) 2,5–4,5 (Xu & Wang, 2024). Namun, sifat HTHP yang *thermally dynamic* — debit termal berfluktuasi saat kompresor *on/off* mengikuti profil permintaan industri (batch drying, pasteurisasi, *steam raising*) — menciptakan masalah *mismatch* temporal antara suplai dan beban termal. Di sinilah **Latent Heat Thermal Energy Storage (LHTES)** berperan sebagai *thermal buffer* yang menyimpan energi pada suhu near-constant melalui perubahan fasa *Phase Change Material* (PCM).

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa konduktivitas termal PCM yang rendah (tipikal 0,5–1,5 W/m·K untuk garam nitrat) menghambat laju *charge/discharge* dan mengharuskan optimasi geometri penukar panas. Konfigurasi **shell-and-tube vertikal** dipilih karena tiga keunggulan struktural: kekompakan densitas energi volumetrik tinggi (200–400 kJ/L), kemampuan menahan gradien termal besar, dan kapasitas integrasi sirip/*fins* atau *metal wool* untuk *thermal enhancement*. Studi mereka mengembangkan model numerik transien dalam bahasa **Modelica** untuk menyimulasikan unit LHTES shell-and-tube berisi **eutectic nitrate** (kemungkinan besar *solar salt* 60 % NaNO₃ + 40 % KNO₃ dengan titik lebur ~222 °C) yang dirancang untuk coupling langsung dengan HTHP. Dari sisi Teknik Industri, integrasi LHTES–HTHP mengubah arsitektur *energy supply chain* pabrik: biaya energi dapat di-*time-shift*, kapasitas HTHP dapat di-*downsize* karena puncak beban ditutup oleh storage, dan emisi dapat dipindahkan ke jam-jam listrik rendah karbon (*green-hour scheduling*). Urgensi ekonominya tampak pada studi kasus industri makanan dan kertas di Eropa yang menunjukkan *payback period* integrasi LHTES–HTHP turun dari 9 tahun menjadi 4,5 tahun ketika dimasukkan *carbon credit* €80/ton CO₂ (Xu & Wang, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi pada PCM dengan Perubahan Fasa

Model Toloza dkk. (2026) menyelesaikan **enthalpy method** (formulasi enthalpi) karena mampu menangani *mushy zone* (daerah transisi padat–cair) tanpa harus melacak interface secara eksplisit. Persamaan energi transiennya:

$$\rho \, \frac{\partial h}{\partial t} = \nabla \cdot (k \, \nabla T) \tag{1}$$

dengan *h* adalah entalpi spesifik [J/kg], ρ densitas [kg/m³], dan *k* konduktivitas termal [W/m·K]. Hubungan *h–T* ditulis dengan metode **effective heat capacity**:

$$h(T) = \int_{T_{ref}}^{T} c_{p,eff}(T^{*}) \, dT^{*} \quad ; \quad c_{p,eff}(T) = c_{p,s} + \frac{L}{T_l - T_s} \cdot f(T) + c_{p,l} \tag{2}$$

di mana fraksi cair *f(T)* dimodelkan secara linier dalam interval *mushy*:

$$f(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s \leq T \leq T_l \\ 1, & T > T_l \end{cases} \tag{3}$$

dengan $T_s, T_l$ adalah suhu *solidus* dan *liquidus*, $L$ kalor laten [J/kg], serta $c_{p,s}$ dan $c_{p,l}$ kapasitas panas spesifik fasa padat dan cair. Penyederhanaan sering dilakukan dengan metode **apparent heat capacity**:

$$\rho \, c_{p,app}(T) \, \frac{\partial T}{\partial t} = \nabla \cdot (k_{eff} \, \nabla T) \tag{4}$$

### 2.2 Konveksi Alam di dalam PCM Cair

Pada zona cair di atas *mushy zone*, perpindahan panas dalam PCM terjadi melalui **natural convection** yang dimodelkan dengan korelasi *Nusselt–Rayleigh* dalam kavitas silindris (Toloza dkk., 2026, mengikuti *Brent–Voller–Reid*):

$$Nu = C_1 \, Ra^{C_2} \quad ; \quad Ra = \frac{g \, \beta \, \Delta T \, H^3}{\nu \, \alpha} \tag{5}$$

dengan $g$ percepatan gravitasi, $\beta$ koefisien ekspansi termal, $\nu$ viskositas kinematik, $\alpha = k/(\rho c_p)$ difusivitas termal, dan $H$ tinggi sel