# 2985 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir seperempat dari konsumsi energi akhir global dan bertanggung jawab atas sekitar 25% emisi CO₂ langsung, di mana lebih dari separuh kebutuhan energi termal industri disuplai pada rentang suhu menengah-tinggi (150–400 °C) untuk proses seperti sterilisasi, pengeringan, pemasakan, distilasi, dan reaksi kimia (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri merupakan salah satu *frontier* paling menantang dalam transisi energi, karena elektrifikasi langsung melalui *resistive heating* mahal secara operasional, sementara boiler berbasis bahan bakar fosil memiliki eminitas tinggi. Dalam konteks inilah Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti peran strategis unit **Latent Heat Thermal Energy Storage (LHTES)** yang digabung dengan **High-Temperature Heat Pump (HTHP)** sebagai arsitektur *demand-side* dan *supply-side* yang sinergis.

Urgensi teknis dari integrasi ini muncul dari karakteristik pembangkitan dan konsumsi termal yang tidak sinkron. HTHP modern dengan siklus trans-kritis CO₂ atau refrigeran sintetis HFO mampu mencapai *Coefficient of Performance* (COP) 2,5–4,0 pada suhu kondensasi 180–250 °C (Xu & Wang, 2024), namun memiliki profil operasi *steady-state* yang kurang fleksibel ketika proses industri bersifat *batch* atau间歇 (*intermittent*). Di sisi lain, material *phase change* (PCM) eutektik berbasis garam nitrat atau hidroksida menawarkan densitas energi volumetrik 250–400 kJ/L — kira-kira 5–10 kali lipat dibandingkan *sensible heat storage* berbasis air atau batu — sehingga memungkinkan *buffering* energi termal dalam ruang yang ringkas. Akan tetapi, PCM memiliki keterbatasan fundamental berupa **konduktivitas termal rendah** (umumnya 0,5–1,5 W/m·K), yang menimbulkan瓶颈 dalam laju *charge*/*discharge*. Toloza et al. (2026) menekankan bahwa optimalisasi geometri penukar panas, enkapsulasi, atau penggunaan *metal wool* menjadi prasyarat untuk mencapai *heat transfer rate* yang memenuhi dinamika operasi industri. Konfigurasi *shell-and-tube* dipilih karena *compactness*, kekakuan struktural pada suhu tinggi, dan kapasitas *thermal enhancement* melalui pemasangan *fins* internal atau *insert* turbolen.

Secara ekonomis, integrasi LHTES-HTHP memungkinkan *peak-shaving* pada jaringan listrik industri, menurunkan tagihan energi dengan memanfaatkan harga listrik *time-of-use*, serta memberikan redundansi termal yang meningkatkan *uptime* proses. Xu & Wang (2024) melaporkan bahwa kombinasi HTHP dengan penyimpanan termal dapat menurunkan *levelized cost of heat* (LCOH) hingga 30–45% dibanding boiler gas pada aplikasi suhu 150–250 °C. Oleh karena itu, kemampuan memprediksi perilaku transien unit LHTES secara akurat bukan sekadar persoalan akademis, melainkan kebutuhan rekayasa langsung dalam desain sistem energi industri modern.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES pada suhu 222 °C memerlukan penyelesaian simultan persamaan konservasi energi dalam domain PCM (mengikuti Toloza et al., 2026) dan fluida pemindah panas (HTF) dalam tabung. Model dikembangkan dalam bahasa Modelica untuk menangkap kopling multi-domain dan non-linearitas perubahan fase.

### 2.1 Persamaan Energi pada PCM

Untuk PCM yang mengalami perubahan fase padat–cair, persamaan konservasi energi dalam bentuk enthalpy dirumuskan sebagai:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot (k_{PCM} \nabla T)$$

di mana $h$ adalah entalpi spesifik (J/kg), $\rho_{PCM}$ adalah densitas (kg/m³), dan $k_{PCM}$ adalah konduktivitas termal (W/m·K). Pendekatan **apparent heat capacity** digunakan untuk menggabungkan kontribusi panas laten ke dalam kapasitas panas efektif:

$$h(T) = \int_{T_{ref}}^{T} c_{p,PCM}(T') \, dT' + L \cdot f(T)$$

dengan $L$ adalah panas laten (J/kg) dan $f(T)$ adalah fraksi cair (liquid fraction) yang dimodelkan secara sigmoid atau linier tersegmentasi:

$$f(T) = \begin{cases} 0, & T < T_s \\ \frac{T - T_s}{T_l - T_s}, & T_s \leq T \leq T_l \\ 1, & T > T_l \end{cases}$$

sehingga kapasitas panas efektif didefinisikan:

$$c_{p,app}(T) = c_{p,PCM}(T) + L \frac{df}{dT}$$

dan persamaan energi dapat ditulis kembali sebagai:

$$\rho_{PCM} \, c_{p,app}(T) \frac{\partial T}{\partial t} = \nabla \cdot (k_{PCM} \nabla T)$$

### 2.2 Konveksi Alam di dalam PCM Cair

Setelah PCM meleleh, konveksi alam menjadi mekanisme perpindahan panas dominan. Dengan pendekatan Boussinesq, persamaan momentum diselesaikan sebagai:

$$\rho_0 \left( \frac{\partial \vec{u}}{\partial t} + \vec{u} \cdot \nabla \vec{u} \right) = -\nabla p + \mu \nabla^2 \vec{u} + \rho_0 \vec{g} \, \beta (T - T_{ref})$$

dengan $\vec{u}$ adalah vektor kecepatan (m/s), $\mu$ viskositas dinamik (Pa·s), $\vec{g}$ percepatan gravitasi, dan $\beta$ koefisien ekspansi termal (1/K). Kopling momentum-energi diselesaikan dengan metode **enthalpy-porosity** di mana fraksi cair memodifikasi *source term* Carman-Kozeny pada zona padat:

$$S = -A_{mush} \frac{(1 - f)^2}{f^3 + \epsilon} \vec{u}$$

dengan $A_{mush}$ konstanta morfologi zona *mushy* (umumnya $10^4$–$10^7$).

### 2.3 Perpindahan Panas pada HTF dalam Tabung

Untuk HTF yang mengalir turbulen di dalam tabung, energi diselesaikan menggunakan profil temperatur rata-rata $\bar{T}_f$:

$$\rho_f c_{p,f} A_c \frac{\partial \bar{T}_f}{\partial t} + \dot{m} c_{p,f} \frac{\partial \bar{T}_f}{\partial x} = h_i \pi D_i (T_{wall} - \bar{T}_f)$$

di mana $A_c$ adalah luas penampang, $D_i$ diameter dalam tabung, dan $h_i$ koefisien perpindahan panas konveksi internal yang dihitung melalui korelasi **Dittus-Boelter** untuk aliran turbulen:

$$Nu_D = \frac{h_i D_i}{k_f} = 0{,}023 \, Re^{0{,}8} Pr^{0{,}4}$$

dengan $Re = \frac{\dot{m} D_i}{\mu_f A_c}$ dan $Pr = \frac{\mu_f c_{p,f}}{k_f}$.

### 2.4 Kapasitas Penyimpanan Energi

Kapasitas energi total unit LHTES pada suhu referensi $T_{ref}$ hingga $T_{max}$:

$$E_{storage} = \rho_{PCM} V_{PCM} \left[ \int_{T_{ref}}^{T_{max}} c_{p,PCM}(T) \, dT + L \cdot f_{util} \right]$$

dengan $f_{util}$ faktor utilisasi fraksi cair rata-rata sepanjang siklus *discharge*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES-HTHP mengikuti kerangka SOP berlapis yang dirangkum dari Toloza et al. (2026) dan praktik terbaik rekayasa termal:

**Tahap 1 – Karakterisasi Termofisik PCM.** Pemilihan PCM eutektik (misalnya campuran $\text{KNO}_3$–$\text{NaNO}_3$ atau garam hidrat suhu-tinggi) dengan $T_s \approx 218$ °C dan $T_l \approx 226$ °C dilakukan melalui DSC (*Differential Scanning Calorimetry*) untuk memvalidasi $L$, $c_p(T)$, dan stabilitas siklus ≥ 1000 *thermal cycles* sesuai standar ASTM E1269.

**Tahap 2 – Desain Geometri Shell-and-Tube.** Diameter dalam tabung $D_i = 20$–40 mm, diameter *shell* $D_s = 200$–600 mm, tinggi efektif $L_{eff} = 1{,}5$–3 m, dengan jumlah tabung $N_t$ dihitung melalui persamaan *tube layout* (pitch triangular atau square). Batas *tube-to-shell* mengikuti ASME BPVC Section VIII untuk tekanan operasi 4–10 bar pada HTF.

**Tahap 3 – Diskretisasi dan Simulasi Modelica.** Domain PCM 2-D aksial-radial didiskretisasi dengan $\Delta r = 2$ mm dan $\Delta z = 5$ mm. Persamaan diselesaikan dengan *backward differentiation formula* (BDF) dengan toleransi $10^{-5}$ menggunakan solver DASSL atau CVODE. Validasi dilakukan terhadap data eksperimen *charge*/*discharge* pada prototipe skala laboratorium.

**Tahap 4 – Integrasi HTHP.** HTF (misalnya Therminol VP-1 atau *molten salt* sekunder) bersirkulasi melalui HTHP pada laju $\dot{m} = 0{,}5$–3 kg/s. Unit LHTES dipasang secara *bypass* agar dapat di-*charge* saat HTHP beroperasi dan *discharge* saat permintaan proses puncak.

**Tahap 5 – Commissioning dan Monitoring.**