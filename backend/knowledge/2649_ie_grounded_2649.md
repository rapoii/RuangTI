# 2649 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222 °C untuk Integrasi dengan High-Temperature Heat Pump

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25 % dari konsumsi energi final global dan sekitar 30 % emisi CO₂, di mana lebih dari separuh kebutuhan energi tersebut digunakan untuk membangkitkan panas proses pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dalam peta dekarbonisasi industri, *high-temperature heat pump* (HTHP) muncul sebagai teknologi strategis karena mampu menaikkan kalor pada *coefficient of performance* (COP) 3–5, jauh lebih efisien dibanding boiler berbasis bahan bakar fosil. Namun, karakteristik beban panas industri pada umumnya tidak stasioner: profil permintaan harian berbentuk *peak-valley* dengan faktor beban (*load factor*) yang fluktuatif antara 30 %–110 %. Tanpa penyangga termal, HTHP harus di-*oversize* atau di-*cascaded*, menurunkan kelayakan ekonomi dan operasional.

Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) mengambil peran krusial. Berbeda dengan *sensible heat storage* (SHS) yang menyimpan energi melalui kenaikan suhu material, LHTES memanfaatkan entalpi fusi (*latent heat of fusion*) dari *phase change material* (PCM), sehingga densitas penyimpanan energi dapat mencapai 200–500 kJ/kg pada volume yang jauh lebih ringkas. Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa salah satu hambatan utama adopsi LHTES pada rentang suhu tinggi (~222 °C) adalah konduktivitas termal PCM yang rendah (tipikal 0,5–1,5 W/m·K untuk garam nitrat, dan 20–40 W/m·K untuk paduan logam), sehingga *heat exchanger* (HX) harus dioptimasi melalui geometri *shell-and-tube*, *metal foam*, atau *fins*. Konteks integrasi HTHP–LHTES menjadi sangat relevan untuk aplikasi *industrial process heat* seperti sterilisasi makanan, tekstil *dyeing*, pulp & paper, serta *steam generation* pada tekanan rendah–menengah.

Tantangan tambahan yang diidentifikasi Xu & Wang (2024) adalah pemilihan PCM yang stabil secara termokimia pada siklus berulang di atas 200 °C, sifat korosi terhadap material *shell*, serta kontrol kualitas *charge–discharge* agar *melt–freeze interface* tidak merusak struktur *encapsulation*. Oleh karena itu, kebutuhan akan model numerik transien yang mampu memprediksi perilaku dinamis LHTES selama integrasi dengan HTHP menjadi kebutuhan riset yang mendesak dan bernilai industri tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

Model numerik yang dikembangkan Toloza dkk. (2026) menggunakan bahasa *Modelica* dengan paket *HeatTransfer* dan *ThermodynamicState*. Domain komputasi adalah geometri aksisimetrik 2-D dari satu *tube* PCM yang dikelilingi oleh fluida pemindah panas (HTF) pada selubung luar. PCM dimodelkan sebagai eutektik nitrat dengan suhu fusi $T_m \approx 222 \,^\circ\text{C}$. Formulasi governing equations menggunakan *enthalpy-porosity* method yang dikembangkan oleh Voller dan Prakash (1987), di mana energi total sistem dilacak melalui fungsi entalpi, bukan suhu secara eksplisit, sehingga diskontinuitas pada antarmuka padat–cair dapat ditangani secara *smeared* melalui *mushy zone*.

### 2.1 Persamaan Energi pada Domain PCM

Untuk kontrol volume di dalam PCM, persamaan konservasi energi ditulis:

$$\rho_{\text{PCM}} \frac{\partial h}{\partial t} = \nabla \cdot \left(k_{\text{PCM}} \, \nabla T\right) + \dot{q}_{v}$$

dengan $\rho_{\text{PCM}}$ densitas PCM, $h$ entalpi spesifik, $k_{\text{PCM}}$ konduktivitas termal, dan $\dot{q}_{v}$ sumber kalor volumetric (nol untuk kasus pasif). Hubungan entalpi–suhu untuk PCM yang mengalami perubahan fusi didekati dengan metode *apparent heat capacity*:

$$h(T) = \int_{T_{\text{ref}}}^{T} c_p^{\text{eff}}(T^*) \, dT^*$$

dengan kapasitas kalor efektif:

$$c_p^{\text{eff}}(T) = c_p^{\,s} + \frac{L}{T_{\ell}-T_s} \cdot \frac{1}{\sqrt{2\pi}\sigma} \exp\!\left[-\frac{(T-T_m)^2}{2\sigma^2}\right]$$

di mana $L$ adalah entalpi laten fusi, $T_s$ dan $T_\ell$ adalah suhu *solidus* dan *liquidus*, dan $\sigma$ adalah parameter penghalusan Gaussian (umumnya $\sigma = 0{,}5$ K untuk transisi tajam). Fungsi Gaussian ini menggantikan fungsi *step* ideal dan menjamin konvergensi numerik.

### 2.2 Fungsi Liquid Fraction dan Damping Konveksi Alami

Fraksi cair $\beta$ didefinisikan sebagai:

$$\beta(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_\ell - T_s}, & T_s \le T \le T_\ell \\ 1, & T > T_\ell \end{cases}$$

Konveksi alami pada PCM cair direpresentasikan melalui pendekatan *Boussinesq* dengan penambahan suku *momentum sink* pada persamaan momentum Navier–Stokes (*Darcy damping*):

$$\vec{v} \cdot \nabla \vec{v} = -\frac{1}{\rho}\nabla p + \nu \nabla^2 \vec{v} + \vec{g}\,\beta_T (T - T_{\text{ref}}) - A_{\text{mush}} \frac{(1-\beta)^2}{\beta^3 + \epsilon}\,\vec{v}$$

dengan $A_{\text{mush}}$ konstanta *morphology* (umumnya $10^5$–$10^8$ kg/m³·s) dan $\beta_T$ koefisien ekspansi termal volumetrik. Suku terakhir mencegah fluida mengalir di zona padat.

### 2.3 Persamaan Energi pada Dinding Tube dan HTF

Untuk dinding tube stainless steel AISI 316L dengan ketebalan $\delta_w$:

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = \frac{k_w}{\delta_w}\left(T_{\text{HTF}} - T_{\text{PCM,surface}}\right)$$

Untuk HTF (udara atau minyak termal) dalam *shell* dengan asumsi *plug flow* 1-D:

$$\rho_{\text{HTF}} c_{p,\text{HTF}} \left(\frac{\partial T_{\text{HTF}}}{\partial t} + u \frac{\partial T_{\text{HTF}}}{\partial z}\right) = \frac{4 k_{\text{HTF}}}{D_{h,\text{shell}}^2}\left(T_{\text{PCM,outer}} - T_{\text{HTF}}\right)$$

Kondisi batas yang digunakan adalah: (i) *symmetry axis* di pusat tube, $\partial T / \partial r = 0$; (ii) *convective flux* di antarmuka PCM–dinding tube; (iii) *insulated* pada ujung atas–bawah (*adiabatic top/bottom*); dan (iv) aliran masuk HTF bersuhu $T_{\text{in}}$ yang dikendalikan dari siklus HTHP.

### 2.4 Energi Tersimpan dan Efisiensi Eksergi

Energi termal yang tersimpan pada waktu $t$:

$$E_{\text{stored}}(t) = \int_V \rho_{\text{PCM}} \left[h(T(r,z,t)) - h(T_{\text{ref}})\right] dV$$

Efisiensi *round-trip* didefinisikan sebagai:

$$\eta_{\text{RT}} = \frac{\displaystyle\int_{t_{\text{disch}}}^{\text{end}} \dot{Q}_{\text{disch}}(t) \, dt}{\displaystyle\int_0^{t_{\text{ch}}} \dot{Q}_{\text{ch}}(t) \, dt}$$

sedangkan efisiensi eksergi sistem gabungan HTHP–LHTES mengikuti formulasi umum:

$$\eta_{\text{ex}} = 1 - \frac{T_0 \displaystyle\int \frac{\dot{Q}(t)}{T(t)} dt}{W_{\text{HTHP}}(t)}$$

dengan $T_0$ suhu referensi lingkungan (293 K) dan $W_{\text{HTHP}}$ kerja kompresor HTHP.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa LHTES untuk integrasi dengan HTHP mengikuti SOP berlapis berikut ini, yang diselaraskan dengan standar ISO 13790 (energi bangunan), DIN EN 14785 (perangkat pemanas), dan ISO 50001 (manajemen energi):

1. **Pra-studi dan Karakterisasi Beban Panas**
   - Audit energi 12 bulan pada fasilitas target untuk membangun profil *load duration curve*.
   - Identifikasi *valley* (periode tarif listrik rendah / *off-peak*) dan *peak* produksi.
   - Penentuan kapasitas penyimpanan target $Q_{\text{design}}$ (MJ) dari integrasi:
     $$Q_{\text{design}} = \int_{t_1}^{t_2} \left[\dot{Q}_{\text{demand}}(t) - \dot{Q}_{\text{HTHP,rated}}\right] dt$$

2. **Pemilihan PCM dan Konfigurasi HX**
   - Seleksi PCM eutektik nitrat ($T_m \approx 222 \,^\circ\text{C}$, $L \approx 180$ kJ/kg) berdasar *screening matrix* pada parameter: $T_m$, $L$, $k$, $\rho$, stabilitas siklik > 3000 siklus, toksisitas, dan biaya (< 1,5 USD/kg).
   - Desain *shell-and-tube* dengan parameter geometri: panjang $L_{\text{tube}} = 2{,}5$ m, diameter dalam $D_i = 0{,}05$ m, *pitch* triangular 1,25 $D_i$, jumlah tube $N_t = 24$, menghasilkan volume PCM $\approx 0{,}118$ m³ dan kapasitas nominal $E_{\text{nom}} = \rho L V \approx 165$ MJ.

3. **Pembangunan Model Numerik**
   - Domain 2-D aksisimetrik di-*mesh* dengan elemen segitiga tidak terstruktur, target $y^+ \leq 1$ di dekat dinding tube.
   - Diskretisasi waktu eksplisit dengan $\Delta t = 0{,}5$ s, memenuhi kriteria CFL untuk konveksi alami di PCM cair.
   - Validasi dengan eksperimen *T-history* dan *DSC* (Diferential Scanning Calorimetry) pada prototipe skala lab, target eror < 5 % pada profil suhu dan posisi *melt front*.

4. **Integrasi dengan HTHP**
   - Kopling termal melalui *intermediate heat exchanger* (IHX) dengan kontrol *three-way valve* untuk switching mode *charge* (HTHP → LHTES) dan *discharge* (LHTES → proses).
   - Pengaturan *set-point* suhu HTF masuk $T_{\text{HTF,in}}^{\text{ch}} = 240 \,^\circ\text{C}$ saat pengisian dan $T_{\text{HTF,in}}^{\text{disch}} = 260 \,^\circ\text{C}$ saat pengosongan, sesuai rekomendasi Toloza dkk. (2026).

5. **Komisioning dan Commissioning Test**
   - Uji *first charge* pada kondisi tunak dan transien.
   - Pengukuran *round-trip efficiency* minimal 70 %, *exergy efficiency* > 55 %.
   - Kalibrasi *model predictive control* (MPC) untuk penjadwalan optimal pengaktifan HTHP.

6. **Operasi, Pemeliharaan, dan Pemantauan**
   - Inspeksi visual dan *thermal imaging* setiap 6 bulan untuk deteksi *void*, delaminasi, atau kebocoran.
   - *Data logging* suhu multi-titik (≥ 16 sensor) dengan *sampling* 10 s dan penyimpanan 5 tahun sesuai ISO 50015.

---

## 4. Studi