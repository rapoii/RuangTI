# 0249 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Panas Suhu-Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global menuju *decarbonization* menuntut penggantian sistem pembakaran fosil dalam penyediaan panas proses industri dengan teknologi elektrikal berbasis efisiensi termodinamika tinggi. Dalam konteks ini, *High-Temperature Heat Pump* (HTHP) muncul sebagai tulang punggung dekarbonisasi panas industri karena mampu menaikkan suhu dari sumber buangan (waste heat) atau sumber termal rendah menjadi suhu utilisasi proses 150–250°C dengan *Coefficient of Performance* (COP) yang kompetitif terhadap boiler gas alam (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Namun demikian, karakteristik operasional HTHP yang fluktuatif—di mana kapasitas pemanasan dan COP sangat bergantung pada *lift* suhu dan suhu kondensasi—menyebabkan mismatch temporal antara供给 energi termal dan permintaan proses industri. Ketidakselarasan ini menjadi bottleneck integrasi HTHP pada lini manufaktur kontinyu seperti industri kimia, makanan & minuman, tekstil basah, dan pulp & paper yang memerlukan pasokan uap atau air panas pada suhu dan laju massa yang presisi.

Untuk menjawab tantangan tersebut, *Latent Heat Thermal Energy Storage* (LHTES) menjadi kandidat unggul karena mampu menyimpan energi pada suhu nyaris konstan selama perubahan fasa dan menawarkan densitas energi volumetrik 5–10 kali lipat dibanding *sensible heat storage* (SHS) konvensional (Toloza, Payá, & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Pada rentang suhu 200–250°C, aplikasi industri seperti pasteurisasi, *drying*, *evaporation*, dan *distillation* sangat relevan dengan titik leleh *eutectic phase change material* (PCM) garam nitrat atau karbonat. Unit LHTES berfungsi sebagai buffer termal yang decouple operasi HTHP dari beban proses, memungkinkan HTHP beroperasi pada regimen paling efisiennya (misalnya pada *lift* minimum atau pada malam hari ketika tarif listrik rendah) sementara energi tersimpan didispatch sesuai kebutuhan puncak proses.

Urgensi ekonominya ditopang oleh data bahwa industri merupakan kontributor sekitar 37% emisi CO₂ global dan lebih dari 50% konsumsi energi final di banyak negara OECD, di mana 70% dari kebutuhan tersebut adalah panas proses di bawah 400°C. Integrasi LHTES + HTHP berpotensi memangkas konsumsi energi fosil hingga 60% dan peak demand listrik hingga 40% (Xu & Wang, 2024). Namun, mayoritas PCM memiliki konduktivitas termal rendah (0,1–0,5 W/m·K) sehingga tanpa optimalisasi geometri penukar panas, laju pengisian/pengosongan menjadi lambat dan kapasitas tersimpan tidak termanfaatkan secara real-time. Konfigurasi *shell-and-tube* dipilih Toloza et al. (2026) karena kekompakan volumetrik, robustnes struktural pada tekanan operasi, dan kapasitas *thermal enhancement* melalui pemasangan *fins*, *metal wool*, atau *encapsulated PCM capsules*. Studi ini memposisikan pemodelan numerik transien sebagai prasyarat rekayasa untuk mengkuantifikasi unjuk kerja LHTES dan merancang strategi kontrol operasi HTHP yang adaptif.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan LHTES transien dilakukan dengan formulasi enthalpi konservatif pada koordinat 2-D aksial-simetris (radial $r$, aksial $z$). Domain geometri *shell-and-tube* terdiri dari *inner tube* berisi *Heat Transfer Fluid* (HTF) dan annulus berisi PCM. Asumsi standar industri: aliran HTF 1-D *fully developed*, PCM dianggap *continuum* dengan metode *apparent heat capacity*, dan kondisi batas luar adiabatic pada shell.

**2.1 Persamaan Konservasi Energi pada PCM (domain annulus)**

Persamaan differensial parsial untuk PCM menggunakan kapasitas panas semu $c_{p,\text{app}}(T)$ yang menangkap panas laten melalui fungsi Gaussian di sekitar titik leleh $T_m$:

$$\rho_{\text{PCM}} \frac{\partial h_{\text{PCM}}}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( k_{\text{PCM}}(T) \, r \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{\text{PCM}}(T) \frac{\partial T}{\partial z} \right)$$

di mana entalpi spesifik diformulasikan sebagai:

$$h_{\text{PCM}}(T) = \int_{T_{\text{ref}}}^{T} c_{p,\text{app}}(T') \, dT', \quad c_{p,\text{app}}(T) = c_{p,s}(T) + \frac{L}{\sigma\sqrt{2\pi}} \exp\left[-\frac{(T-T_m)^2}{2\sigma^2}\right]$$

dengan $L$ adalah panas laten spesifik (J/kg), $\sigma$ lebar distribusi transisi fasa (K), dan $c_{p,s}$ kapasitas panas fase padat/cair (Toloza et al., 2026).

**2.2 Persamaan Konservasi Energi pada HTF (domain tube)**

Untuk fluida dalam pipa, persa konservasi energi 1-D unsteady:

$$\rho_f c_{p,f} A_c \frac{\partial T_f}{\partial t} + \dot{m} c_{p,f} \frac{\partial T_f}{\partial z} = h_i \pi D_i (T_{w,i} - T_f)$$

dengan $A_c$ luas penampang, $D_i$ diameter dalam tube, $h_i$ koefisien konveksi internal, dan $T_{w,i}$ suhu dinding dalam tube.

**2.3 Konduksi Radial pada Dinding Tube**

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = \frac{k_w}{r}\frac{\partial}{\partial r}\left(r \frac{\partial T_w}{\partial r}\right)$$

**2.4 Perpindahan Kalor Konveksi di Antarmuka**

Kopling antara HTF dan PCM terjadi melalui dinding tube dengan resistansi seri:

$$\dot{q}'' = \frac{T_f - T_{\text{PCM,interface}}}{\frac{1}{h_i} + \frac{\ln(D_o/D_i)}{2\pi k_w L_{\text{axial}}} + \frac{1}{h_{gap}}}$$

**2.5 Koefisien Konveksi HTF (korelasi Gnielinski untuk turbulen)**

$$\text{Nu}_D = \frac{(f/8)(\text{Re}_D - 1000)\text{Pr}}{1 + 12{,}7(f/8)^{1/2}\left(\text{Pr}^{2/3}-1\right)}, \quad f = (0{,}790\ln\text{Re}_D - 1{,}64)^{-2}$$

sehingga $h_i = \text{Nu}_D \cdot k_f / D_i$.

**2.6 Kopling Termal dengan HTHP**

Integrasi dengan HTHP memerlukan neraca energi pada kondensor:

$$\dot{Q}_{\text{cond}} = \dot{Q}_{\text{LHTES,charge}} + \dot{Q}_{\text{process,direct}}$$

dengan COP HTHP didefinisikan:

$$\text{COP}_{\text{HTHP}} = \frac{\dot{Q}_{\text{cond}}}{\dot{W}_{\text{comp}}} = \frac{1}{\eta_c} \cdot \frac{T_{\text{cond}}}{T_{\text{cond}} - T_{\text{evap}}}$$

Penurunan COP saat $T_{\text{cond}}$ meningkat (≈222°C) dikonfirmasi Xu & Wang (2024) sebagai tantangan utama integrasi.

**2.7 Bilangan Tak Berdimensen untuk Karakterisasi**

Untuk analisis scale-up, gunakan *Stefan number*, *Fourier number*, dan *PCM utilization factor*:

$$\text{Ste} = \frac{c_{p,s}(T_m - T_i)}{L}, \quad \text{Fo} = \frac{\alpha_{\text{PCM}} t}{R_{\text{shell}}^2}, \quad \eta_{\text{PCM}}(t) = \frac{\int_V (h_{\text{PCM}}(T,t) - h_{\text{PCM}}(T_i)) \, dV}{V \cdot L}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa LHTES–HTHP mengikuti SOP berlapis yang diturunkan dari metodologi Toloza et al. (2026) dan kerangka integrasi sistem energi Xu & Wang (2024). Prosedur ini terdiri dari tujuh tahap:

**Tahap 1 – Karakterisasi Beban Proses.** Audit termal dilakukan untuk mendapatkan profil suhu target $T_{\text{proc}}$, laju massa uap/air panas $\dot{m}_{\text{proc}}$, dan distribusi temporal harian/musiman. Data ini menentukan kapasitas LHTES:

$$E_{\text{st,req}} = \int_{t_1}^{t_2} \dot{Q}_{\text{proc}}(t) \, dt - \int_{t_1}^{t_2} \dot{Q}_{\text{HTHP,direct}}(t) \, dt$$

**Tahap 2 – Seleksi PCM dan HTF.** Untuk operasi 222°C, kandidat PCM adalah campuran eutektik nitrat ($\text{NaNO}_3$–$\text{KNO}_3$–$\text{Ca(NO}_3)_2$) atau karbonat dengan $L$ ≈ 100–180 kJ/kg. HTF dipilih sesuai compatibility termal: *thermal oil* (misalnya Therminol VP-1, $T_{\max}$ ≈ 400°C) atau *molten salt* untuk aplikasi lebih tinggi.

**Tahap 3 – Desain Geometri Shell-and-Tube.** Parameter desain utama: rasio diameter $D_o/D_i$, jumlah tube $N_t$, panjang $L$, dan pitch triangular/square. Kompromi antara luas perpindahan panas dan pressure drop HTF optimum pada:

$$\left.\frac{\partial \text{UA}}{\partial N_t}\right|_{\Delta P = \text{konst}} = 0$$

**Tahap 4 – Diskretisasi Numerik dan Simulasi.** Model dibangun dalam bahasa Modelica (mengikuti Toloza et al., 2026) dengan *finite volume method* pada grid 2-D aksial-simetris. Mesh independency test dilakukan pada minimal tiga tingkat refinement (misalnya 50×200, 100×400, 200×800 sel) dengan kriteria konvergensi:

$$\max\left|\frac{T^{k+1}_{i,j} - T^k_{i,j}}{T^{k+1}_{i,j}}\right| < 10^{-6}$$

**Tahap 5 – Validasi Eksperimental.** Simulasi divalidasi dengan data eksperimen laboratorium pada unit prototipe menggunakan thermocouple tipe K terkalibrasi, dengan target RMSE ≤ 5% dan *bias* ≤ 2°C. Diagram alir validasi: (a) kalibrasi sensor; (b) pengukuran profil suhu selama siklus charge/discharge; (c) inverse modeling untuk identifikasi parameter efektif; (d) verifikasi forward.

**Tahap 6 – Integrasi dengan HTHP dan Sistem Kontrol.** Arsitektur kontrol menggunakan *Model Predictive Control* (MPC) dengan *horizon* prediksi 24 jam, yang mengoptimalkan jadwal operasi HTHP berdasarkan harga listrik time-of-use, profil beban proses, dan *state-of-charge* LHTES $\text{SoC} = \eta_{\text{PCM}}(t)$.

**Tahap 7 – Commissioning, Monitoring, dan Optimasi Berkelanjutan.** Sensor IoT dipasang untuk logging real-time $T_{\text{PCM}}$, $\dot{m}_{\text{HTF}}$, dan $\dot{W}_{\text{comp}}$. Data digunakan untuk *digital twin* yang diperbarui secara berkala, menjamin *performance drift* tidak melampaui 10% dari desain awal selama siklus hidup 15–20 tahun.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Proses Penguapan (Evaporation) Pabrik Susu Konsentrat pada 220°C.**

Sebuah pabrik susu konsentrat di Eropa membutuhkan $40$ ton/jam uap pada $T_{\text{proc}} = 220°C$ dan $P = 2{,}5$ MPa (entalpi $h_g \approx 2.800$ kJ/kg). HTHP bersumber dari waste heat evaporator pada $T_{\text{$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
