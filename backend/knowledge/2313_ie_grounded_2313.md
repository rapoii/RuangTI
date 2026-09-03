# 2313 — Integrasi Unit Latent Heat Thermal Energy Storage (LHTES) Shell-and-Tube ~222 °C dengan High-Temperature Heat Pump (HTHP): Model Numerik Transien untuk Dekarbonisasi Proses Panas Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Pan proses industri (*industrial process heat*) merupakan kontributor terbesar konsumsi energi termal global — di Uni Eropa saja sekitar 30 % dari total energi akhir digunakan untuk memenuhi kebutuhan panas pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Desakan dekarbonisasi serta volatilitas harga gas alam memaksa pelaku industri mencari alternatif elektrifikasi berbasis *High-Temperature Heat Pump* (HTHP) yang mampu mensuplai panas pada rentang 150–250 °C dengan COP ≥ 3. Namun, salah satu keterbatasan operasional HTHP adalah karakteristik *duty* yang sensitif terhadap rasio *lift* termal dan kebutuhan *buffer* termal saat terjadi decoupling antara profil produksi uap/panas dan profil permintaan proses (Xu & Wang, 2024).

Dalam konteks ini, Toloza, Payá, & Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti bahwa integrasi **Latent Heat Thermal Energy Storage** (LHTES) dengan HTHP memberikan fleksibilitas operasional yang krusial: unit LHTES充当 *thermal buffer* yang memungkinkan *charging* pada periode *off-peak* dan *discharging* cepat ketika permintaan proses puncak. Tantangan fundamental yang diidentifikasi oleh Toloza et al. (2026) adalah konduktivitas termal rendah dari绝大多数 *phase change material* (PCM) pada kisaran 0,5–1,5 W/m·K, yang menuntut optimalisasi geometri penukar panas, enkapsulasi, atau penggunaan *metal foam/wool* sebagai enhancer. Konfigurasi *shell-and-tube* dipilih karena tiga atribut struktural: (i) kekompakan volumetrik tinggi, (ii) robustnya secara mekanis untuk menahan siklus termal pada ΔT > 200 K, dan (iii) kapasitas *thermal enhancement* melalui pemasangan *fins* internal atau *metallic wool* pada sisi shell.

Fokus spesifik makalah ini adalah pengembangan model numerik transien pada suhu operasi ~222 °C — rentang yang sesuai dengan eutektik nitrat (NaNO₃–KNO₃, *solar salt*) dan terintegrasi langsung dengan HTHP bersuhu *lift* menengah–tinggi. Secara strategis, integrasi LHTES-HTHP memungkinkan *peak-shaving* permintaan listrik, peningkatan *capacity factor* HTHP, serta penyediaan panas *on-demand* untuk aplikasi industri kimia, makanan, tekstil *dyeing*, dan pulp & paper.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan Toloza et al. (2026) dalam bahasa **Modelica** menyelesaikan secara simultan persamaan konservasi energi pada sisi PCM (shell) dan fluida pemanas/pengangkut panas (HTF, sisi tube), dengan kopling termal melalui dinding tube.

**2.1. Persamaan Governing pada PCM (domain shell)**

Untuk PCM yang mengalami perubahan fasa, pendekatan *enthalpy method* dipilih karena kontinuitas medan entalpi menghindari tracking eksplisit界面 fasa. Bentuk konservatif:

$$\rho_{\text{PCM}} \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{\text{PCM}}(T) \, \nabla T \right)$$

dengan hubungan konstitutif:

$$h(T) = \int_{T_{\text{ref}}}^{T} c_{p,\text{PCM}}(T') \, dT' + \rho_{\text{PCM}} \, L \, f_s(T)$$

di mana $L$ adalah *latent heat* (J/kg) dan $f_s(T) \in [0,1]$ adalah *liquid fraction* yang dimodelkan regularisasi sigmoid Gaussian di sekitar $T_m$:

$$f_s(T) = \frac{1}{2} \left[ 1 + \text{erf}\left( \frac{T - T_m}{dT/2} \right) \right]$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
