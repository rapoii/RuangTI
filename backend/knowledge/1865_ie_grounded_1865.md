# 1865 — Model Numerik Transien Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37% konsumsi energi final global, di mana lebih dari separuhnya merupakan kebutuhan *process heat* pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri merupakan salah satu tantangan teknis paling mendesak dalam transisi energi, karena elektrifikasi langsung maupun pemanfaatan panas limbah belum mampu menjangkau seluruh rentang suhu operasi. Dalam konteks tersebut, integrasi *High-Temperature Heat Pump* (HTHP) dengan unit *Latent Heat Thermal Energy Storage* (LHTES) muncul sebagai arsitektur sistem yang menjanjikan. HTHP mampu menaikkan suhu *waste heat* atau sumber kalor rendah menjadi tingkat utilisasi industri, sementara LHTES berfungsi sebagai buffer termal yang menutup gap antara profil produksi kalor HTHP yang fluktuatif dengan permintaan proses yang sering *intermittent* (Toloza, Payá, & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Permasalahan fundamental yang dijawab oleh literatur utama adalah konduktivitas termal rendah dari sebagian besar *Phase Change Material* (PCM), yang pada kisaran 0,2–0,5 W/(m·K) untuk garam nitrat dan 0,1–0,4 W/(m·K) untuk garam klorida menyebabkan laju transfer kalor pengisian dan pelepasan menjadi bottleneck desain. Solusi yang diajukan Toloza et al. (2026) berupa konfigurasi *shell and tube* vertikal dengan PCM garam eutektik pada suhu fasa ±222 °C, disimulasikan secara transien dalam bahasa Modelica untuk mengevaluasi dinamika peleburan dan pembekuan saat dikopling dengan HTHP. Kompakness struktural, robustness mekanis terhadap tekanan dan siklus termal, serta fleksibilitas untuk penambahan *thermal enhancement* (fin, metal foam, atau nano-additive) menjadikan geometri ini menarik secara工业.

Urgensi ekonomis dan operasional bersifat ganda. Pertama, kemampuan menyimpan energi termal pada suhu tinggi memungkinkan pergeseran konsumsi listrik HTHP dari jam sibuk ke jam *off-peak*, menurunkan *demand charge* hingga 30–45%. Kedua, decupling antara produksi dan konsumsi kalor meningkatkan *capacity factor* HTHP, yang sangat penting untuk amortisasi investasi *capital expenditure* (CAPEX) yang tinggi. Ketiga, integrasi LHTES-HTHP mendukung fleksibilitas permintaan (*demand-side flexibility*) yang diperlukan untuk integrasi energi terbarukan intermiten (Xu & Wang, 2024). Dengan demikian, kemampuan memodelkan perilaku transien unit LHTES secara akurat menjadi kebutuhan rekayasa yang tidak terhindarkan dalam desain, sizing, dan kontrol sistem terintegrasi.

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES *shell-and-tube* yang dibangun oleh Toloza et al. (2026) menggunakan formulasi enthalpy-porosity dalam kerangka Computational Fluid Dynamics (CFD) 2D aksial-simetris, kemudian direduksi menjadi model 1D radial untuk efisiensi komputasi. Persamaan konservasi energi untuk PCM dalam fasa padat-cair mengikuti:

$$\rho \frac{\partial h}{\partial t} = \nabla \cdot (k_{\text{eff}} \nabla T) + \dot{q}_v \tag{1}$$

dengan $h$ adalah entalpi spesifik, $\rho$ densitas PCM, $k_{\text{eff}}$ konduktivitas efektif (dengan koreksi mushy zone), dan $\dot{q}_v$ sumber kalor volumetrik. Pendekatan enthalpy didefinisikan melalui fungsi piecewise:

$$h(T) = \begin{cases} c_{p,s}(T - T_{\text{ref}}) & T < T_s \\ c_{p,s}(T_s - T_{\text{ref}}) + f_l \, h_{sl} & T_s \leq T \leq T_l \\ c_{p,s}(T_s - T_{\text{ref}}) + h_{sl} + c_{p,l}(T - T_l) & T > T_l \end{cases} \tag{2}$$

dengan $T_s, T_l$ adalah suhu *solidus* dan *liquidus*, $h_{sl}$ kalor laten, dan $f_l$ fraksi liquidus (Toloza et al., 2026). Untuk PCM eutektik pada 222 °C, diasumsikan $T_s \approx T_l = T_m \approx 222\,°C$ sehingga mushy zone sangat tipis dan dapat didekati dengan moving interface Stefan.

Konveksi alami pada PCM cair dimodelkan melalui pendekatan Boussinesq dengan sumber momentum Darcy-Brinkman:

$$\rho \frac{\partial \vec{v}}{\partial t} + \rho (\vec{v} \cdot \nabla)\vec{v} = -\nabla p + \mu \nabla^2 \vec{v} + \rho \vec{g} \beta (T - T_m) - A_{\text{mush}} \frac{(1-f_l)^2}{f_l^3 + \epsilon} \vec{v} \tag{3}$$

di mana $A_{\text{mush}}$ adalah konstanta mushy zone (~10⁴–10⁵ kg/(m³·s)), $\beta$ koefisien ekspansi termal, dan $\epsilon$ parameter komputasional kecil (Toloza et al., 2026). Suku terakhir meniadakan kecepatan pada fasa padat dan meredamnya secara kontinyu di mushy zone.

Untuk sisi *Heat Transfer Fluid* (HTF) yang mengalir di dalam tube, model 1D plug-flow unsteady digunakan:

$$\rho_f c_{p,f} \left( \frac{\partial T_f}{\partial t} + u \frac{\partial T_f}{\partial z} \right) = \frac{4 U_i}{D_i} (T_{w,i} - T_f) \tag{4}$$

dengan $U_i$ koefisien transfer kalor overall pada permukaan dalam tube, $D_i$ diameter dalam tube, dan $u$ kecepatan aksial HTF. Kondisi kopling pada dinding tube menggunakan persamaan kontinuitas fluks:

$$q'' = h_{\text{conv},i}(T_{w,i} - T_f) = k_{\text{PCM}} \left. \frac{\partial T_{\text{PCM}}}{\partial r} \right|_{r=R_i} \tag{5}$$

Untuk karakterisasi dinamika peleburan, digunakan bilangan Fourier dan Stefan:

$$\text{Fo} = \frac{\alpha_s t}{R_o^2}, \qquad \text{Ste} = \frac{c_{p,s}(T_w - T_m)}{h_{sl}} \tag{6}$$

dengan $R_o$ jari-jari luar shell. Nilai Ste rendah (Ste ≪ 1) mengindikasikan bahwa kalor sensible dominan sehingga moving front dapat didekati secara quasi-steady dengan solusi Neumann klasik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Modelica yang dilaporkan Toloza et al. (2026) mengikuti SOP rekayasa empat-tahap untuk integrasi LHTES-HTHP:

**Tahap 1 — Karakterisasi PCM dan Penentuan Batas Operasi.** Data DTA/DSC digunakan untuk menentukan $T_m$, $h_{sl}$, $c_{p,s}$, $c_{p,l}$, dan stabilitas siklus (≥2000 siklus). Untuk aplikasi HTHP pada 222 °C, garam eutektik seperti campuran $KNO_3$–$LiNO_3$ atau $NaNO_3$–$KNO_3$ dimodifikasi nano-additif menjadi kandidat. Suhu masuk HTF ditetapkan $T_{\text{in}} = T_m + \Delta T_{\text{sup}}$ dengan $\Delta T_{\text{sup}} = 20$–$40$ K untuk menjaga driving force optimal tanpa overheating.

**Tahap 2 — Discretization dan Setup Numerik.** Domain 2D aksial-simetris dibagi dengan grid non-uniform: finer mesh ($\Delta r \sim 1$ mm) di dekat dinding tube, coarser ($\Delta r \sim 5$ mm) pada outer shell. Time-step adaptif dengan $\text{CFL} < 1$ untuk stabilitas solver. Model diselesaikan dengan *finite volume method* menggunakan library Modelica.Media dan partial differential equations (PDE) plug-in.

**Tahap 3 — Validasi dan Sensitivitas.** Validasi dilakukan terhadap data eksperimental peleburan murni (literature benchmark) dan studi *grid-independence* (3 mesh densities). Analisis sensitivitas mencakup: (a) pengaruh $k_{\text{PCM}}$ terhadap waktu charging, (b) pengaruh laju alir massa HTF $\dot{m}_f$ terhadap efektifitas termal, (c) pengaruh panjang tube $L$ terhadap *pressure drop*.

**Tahap 4 — Integrasi dengan HTHP dan Optimasi Kontrol.** Profil waktu HTF inlet dari HTHP (fungsi COP dan kapasitas kompresor) digunakan sebagai *boundary condition* transien. Strategi kontrol *state-of-charge* (SOC) berbasis prediksi dinamika peleburan diimplementasikan untuk switching antara mode charging dan discharging.

Diagram alir logika:
```
[INPUT: T_HTF,in(t), ṁ_HTF(t)] 
        ↓
[Boundary Conditions pada tube wall]
        ↓
[Solver enthalpy-porosity 2D aksial-simetris]
        ↓
[Update f_l, T_PCM, T_w]
        ↓
[Update T_HTF,out dari pers. (4)]
        ↓
[Output: SOC(t), Q_stored(t), η_ex(t)]
        ↓
[Feedback ke kontrol HTHP]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai studi kasus ilustratif berbasis parameter Toloza et al. (2026), pertimbangkan unit LHTES shell-and-tube dengan spesifikasi berikut:

| Parameter | Nilai |
|---|---|
| PCM | Eutektik garam nitrat, $T_m = 222\,°C$ |
| $h_{sl}$ | $180\,\text{kJ/kg}$ |
| $\rho_{\text{PCM}}$ | $1900\,\text{kg/m}^3$ |
| $c_{p,s}, c_{p,l}$ | $1,55 / 1,65\,\text{kJ/(kg·K)}$ |
| $k_{\text{PCM,s}}, k_{\text{$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
