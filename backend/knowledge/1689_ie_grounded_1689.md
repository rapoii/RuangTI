# 1689 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi (HTHP) dalam Konteks Dekarbonisasi Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25% dari konsumsi energi final global dan bertanggung jawab atas sekitar 30% emisi CO₂ antropogenik, di mana lebih dari separuh kebutuhan termalnya berada pada rentang suhu sedang hingga tinggi (100–400°C) untuk proses seperti *drying*, *steaming*, *evaporation*, *sterilization*, dan *curing* (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi proses-proses tersebut menuntut elektrifikasi termal melalui **High-Temperature Heat Pump (HTHP)** yang digabung dengan **Latent Heat Thermal Energy Storage (LHTES)** sebagai buffer termal untuk mengatasi kesenjangan antara pasokan dan permintaan energi secara *time-shift* (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

LHTES menggunakan material perubahan fase (*Phase Change Material* – PCM) yang menyimpan energi terutama melalui panas laten (*latent heat*) pada suhu transisi yang relatif konstan. Untuk aplikasi proses industri suhu ~220°C, eutektik nitrat — antara lain campuran terner NaNO₃-KNO₃-Ca(NO₃)₂ atau *solar salt* ternitrat — menjadi kandidat menarik karena suhu lelehnya mendekati 222°C dan stabilitas termalnya teruji pada siklus termal berkepanjangan. Namun, konduktivitas termal PCM nitrat pada umumnya rendah ($k_{PCM} \approx 0{,}5$–$1{,}0 \ \text{W/m·K}$), sehingga laju transfer panas menjadi *bottleneck* desain dan menurunkan utilitas energi secara signifikan bila tidak dioptimasi (Toloza et al., 2026).

Toloza, Payá, dan Barceló (2026) menjawab tantangan ini dengan mengembangkan **model numerik transien** berbasis bahasa *Modelica* untuk unit **shell-and-tube LHTES vertikal**, dengan tujuan mensimulasikan perilaku *charging* dan *discharging* pada integrasi dengan HTHP. Keunggulan konfigurasi shell-and-tube dibanding solusi PCM lain (seperti *encapsulation* atau *metal wool*) adalah kekompakan volumetrik tinggi, kekokohan struktural terhadap gradien tekanan dan termal, serta fleksibilitas dalam menambahkan sirip, baffle, atau nano-additif ke sisi HTF tanpa mengubah geometri primer (Toloza et al., 2026). Xu dan Wang (2024) melengkapi narasi ini dengan menunjukkan bahwa kombinasi HTHP-LHTES mampu meningkatkan **COP sistemik** sebesar 30–60% dibanding operasi HTHP tanpa buffer termal, karena evaporator dan kondensor dapat beroperasi pada kondisi *steady*, terlepas dari fluktuasi beban proses (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Urgensi industri dari integrasi ini jelas: menyediakan *dispatchable* termal rendah-karbon yang menurunkan *operating cost* sekaligus memitigasi emisi.

## 2. Landasan Teori & Formulasi Matematis

Model Toloza et al. (2026) memformulasikan perilaku transien LHTES dengan tiga persamaan governing utama: **(i)** persamaan energi pada PCM, **(ii)** persamaan konveksi-paksa pada HTF di dalam tube, dan **(iii)** kopling termal di dinding tube melalui resistansi seri.

### 2.1 Persamaan Energi pada PCM (Enthalpy Formulation)

Untuk mengatasi diskontinuitas kapasitas panas di sekitar *melting front*, digunakan formulasi entalpi:

$$
\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{PCM} \nabla T \right)
$$

dengan hubungan konstitutif *apparent heat capacity*:

$$
T - T_m = \frac{h - h_m}{c_{p,eff}}, \quad c_{p,eff} = c_{p,s} + L \cdot f(T)
$$

di mana fungsi *Gaussian* $f(T)$ mensimulasikan *mushy zone*:

$$
f(T) = \frac{1}{\Delta T \sqrt{2\pi}} \exp\left(-\frac{(T - T_m)^2}{2 \Delta T^2}\right)
$$

dengan $T_m$ adalah suhu leleh (~222°C) dan $\Delta T$ adalah lebar interval fusi (tipikal 1–3 K). Energi tersimpan total per satuan massa:

$$
E_{tot} = \int_{T_{min}}^{T_{max}} c_{p,PCM}\, dT + L_{PCM}
$$

### 2.2 Persamaan HTF pada Tube

Asumsi aliran *plug flow* satu-dimensi di sepanjang sumbu tube ($z$) memberikan:

$$
\rho_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} c_{p,HTF} u \frac{\partial T_{HTF}}{\partial z} = -\frac{h_i P_i}{A_c}(T_{HTF} - T_{w,i})
$$

dengan $u$ adalah kecepatan HTF, $h_i$ koefisien konveksi internal, $P_i$ keliling basah tube, dan $A_c$ luas penampang tube.

### 2.3 Kopling Termal Dinding Tube (Resistansi Seri)

$$
T_{w,i} - T_{w,o} = \frac{q'' \ln(d_o/d_i)}{2\pi k_w L}, \quad q'' = \frac{T_{HTF} - T_{PCM}}{(1/h_i) + (\ln(d_o/d_i)/2\pi k_w L) + (1/h_o)}
$$

Koefisien konveksi luar $h_o$ biasanya dimodelkan sebagai **konveksi alami Rayleigh-Bénard** karena PCM meleleh membentuk *buoyancy-driven flow*:

$$
h_o = \frac{k_{PCM,\ell}}{H} \mathrm{Nu}, \quad \mathrm{Nu} = C (\mathrm{Ra})^n, \quad \mathrm{Ra} = \frac{g \beta (T_{w,o} - T_m) H^3}{\nu \alpha}
$$

dengan $C \approx 0{,}59$ dan $n \approx 0{,}25$ untuk $\mathrm{Ra} \in [10^4, 10^7]$ (Churchill-Chu).

### 2.4 Kapasitas Termal dan Laju Discharge

Kapasitas energi total unit:

$$
E_{unit} = \rho_{PCM} V_{PCM} \left[ c_{p,PCM} (T_m - T_{i}) + L_{PCM} + c_{p,PCM}(T_{f} - T_m) \right]
$$

Waktu discharge pada daya konstan $\dot{Q}$:

$$
t_{dis} = \frac{E_{unit}}{\dot{Q}_{avg}}, \quad \dot{Q}_{avg} = \frac{1}{t_f - t_0}\int_{t_0}^{t_f} \dot{Q}(t)\, dt
$$

### 2.5 Efektivitas Heat Exchanger (ε-NTU)

Untuk evaluasi performa:

$$
\varepsilon = 1 - \exp\left[-\mathrm{NTU}\,(1 - C_r)\right], \quad \mathrm{NTU} = \frac{UA}{C_{\min}}, \quad C_r = \frac{C_{\min}}{C_{\max}}
$$

dengan $C_{\min} = \min(\dot{m}_{HTF} c_{p,HTF},\ \dot{m}_{eff,PCM})$ dan $UA$ = *overall heat transfer coefficient* × luas (Toloza et al., 2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti kerangka yang dikembangkan Toloza et al. (2026) dengan penyesuaian SOP sesuai praktik rekayasa termal (ASME PTC 30, ISO 12241). Prosedur disusun sebagai berikut:

**Tahap 1 — *Requirements Engineering* & Karakterisasi Beban.** Tentukan profil beban termal proses industri (daya puncak, *time-of-use*, faktor diversitas), suhu masuk/keluar HTF, dan *availability* HTHP. Pilih PCM eutektik nitrat dengan $T_m \approx T_{proses} - 5\text{–}10$ K untuk memastikan *temperature lift* minimum dan COP HTHP optimal (Xu & Wang, 2024).

**Tahap 2 — Desain Geometri Shell-and-Tube.** Pilih diameter shell $D_s$, jumlah tube $N_t$, diameter tube $d_o/d_i$, panjang tube $L$, dan *pitch* triangular/kuadrat. Validasi terhadap standar TEMA (Tubular Exchanger Manufacturers Association) kelas B atau C untuk aplikasi