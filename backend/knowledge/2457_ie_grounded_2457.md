# 2457 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global mengonsumsi sekitar 37% dari energi akhir dunia, di mana lebih dari separuhnya—menurut IEA—digunakan untuk memenuhi kebutuhan *process heat* (panas proses). Panas proses bersuhu sedang hingga tinggi (150–400°C) menjadi tulang punggung industri makanan, kimia, tekstil, pulp & kertas, serta metalurgi ringan. Dekarbonisasi sektor ini mensyaratkan elektrifikasi termal melalui *high-temperature heat pumps* (HTHPs) yang dipadukan dengan sistem penyimpanan energi termal, karena profil permintaan panas tidak selalu selaras dengan profil ketersediaan energi terbarukan yang fluktuatif (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)).

Dalam konteks ini, Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengembangkan model numerik transien untuk unit *Latent Heat Thermal Energy Storage* (LHTES) berbasis konfigurasi *shell-and-tube* vertikal, yang dirancang untuk diintegrasikan dengan HTHP pada suhu operasi sekitar 222°C. Justifikasi teknis pemilihan teknologi LHTES—dan bukan *sensible heat storage* (SHS)—adalah densitas energi volumetrik yang jauh lebih tinggi (3–5 kali lipat), serta kemampuan mempertahankan suhu output mendekati konstan selama fasa transisi fasa PCM (*phase change material*). Tantangan klasik PCM adalah konduktivitas termal rendah (umumnya 0,2–1,0 W/m·K), sehingga geometri *heat exchanger* dan strategi *thermal enhancement* (logam wol, *fins*, atau enkapsulasi) menjadi faktor penentu performa.

Urgensi operasional pemilihan suhu 222°C spesifik berkaitan dengan tiga hal: (1) rentang suhu tersebut mencakup proses sterilisasi industri makanan dan pengeringan kimiawi; (2) *eutectic nitrate* seperti NaNO₃–KNO₃ (solar salt) memiliki titik leleh ±220°C, menjadikannya kandidat PCM yang stabil secara termokimia pada suhu tinggi; (3) integrasi HTHP dengan *thermal storage* memungkinkan operasi HTHP pada kondisi *steady-state* (efisiensi optimal) meskipun beban termal industri bersifat intermiten. Dari perspektif ekonomi teknik, decoupling antara *generation* dan *demand* ini menurunkan *capacity factor* yang dibutuhkan dan memperbaiki *levelized cost of heat* (LCOH) sistem, sehingga proyek elektrifikasi termal menjadi layak secara finansial.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES Toloza et al. (2026) menggunakan bahasa Modelica, yang bersifat *equation-based* dan *acyclic*, sehingga cocok untuk menyimulasikan kopling multi-dominia (konduksi, konveksi, perubahan fasa). Formulasi inti mengikuti **metode kapasitas panas efektif** (*apparent heat capacity method*), yang menghindari diskontinuitas pada saat transisi fasa dengan mendefinisikan properti termal efektif yang bervariasi halus terhadap suhu.

### 2.1 Persamaan Governing Konduksi Transien 2D

Untuk elemen volume diferensial PCM dalam koordinat silindris $(r, z)$, persamaan konservasi energi adalah:

$$\rho_{PCM} \cdot c_p^{app}(T) \cdot \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r \, k_{PCM}^{eff} \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{PCM}^{eff} \frac{\partial T}{\partial z}\right) \tag{1}$$

di mana $\rho_{PCM}$ adalah densitas PCM, $k_{PCM}^{eff}$ adalah konduktivitas termal efektif setelah *enhancement*, dan $c_p^{app}(T)$ adalah kapasitas panas tampak yang diformulasikan sebagai:

$$c_p^{app}(T) = c_{p,s}(T) + L_f \cdot f(T) \tag{2}$$

dengan $c_{p,s}(T)$ adalah kapasitas panas fasa padat/cair, $L_f$ adalah panas laten fusi, dan $f(T)$ adalah fungsi Gaussian yang mengaproksimasi *Dirac delta* di sekitar $T_{melt}$:

$$f(T) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left[-\frac{(T - T_{melt})^2}{2\sigma^2}\right] \tag{3}$$

Parameter $\sigma$ (deviasi standar Gaussian) dipilih tipikal 1–2 K untuk menyempitkan pita fusi.

### 2.2 Jaringan Resistansi Termal *Shell-and-Tube*

Laju perpindahan panas antar HTF (*heat transfer fluid*) dan PCM dimodelkan melalui *thermal resistance network*:

$$\frac{1}{U_i} = \frac{1}{h_{HTF}} + \frac{r_i \ln(r_o/r_i)}{k_{tube}} + \frac{r_i \ln(r_{PCM}/r_o)}{k_{PCM}^{eff}} \tag{4}$$

di mana $h_{HTF}$ adalah koefisien konveksi internal tube (dari korelasi Dittus-Boelter untuk aliran turbulen: $Nu = 0{,}023 \, Re^{0{,}8} Pr^{0{,}4}$), dan $r_i, r_o, r_{PCM}$ berturut-turut adalah radius dalam, radius luar tube, dan radius efektif PCM. Pada konfigurasi Toloza et al. (2026), diameter tube kecil (orde 10–25 mm) dipilih untuk menaikkan densitas luas permukaan perpindahan panas.

### 2.3 Kapasitas Penyimpanan Energi

Total energi yang disimpan dalam unit LHTES diberikan oleh:

$$E_{stored} = m_{PCM} \left[ \int_{T_i}^{T_{melt}} c_{p,s}(T) \, dT + L_f + \int_{T_{melt}}^{T_f} c_{p,l}(T) \, dT \right] \tag{5}$$

dengan $T_i$ dan $T_f$ adalah suhu batas bawah dan atas. Untuk PCM eutektik nitrat pada operasi 222°C, kontribusi *sensible* pra-fusi dan pasca-fusi adalah sekitar 10–25% dari total, sehingga panas laten mendominasi densitas energi.

### 2.4 Karakteristik Transien: Bilangan Fourier & Biot

Dua bilangan tak berdimensi governs perilaku transien:

$$Fo = \frac{\alpha_{PCM} \, t}{R_c^2} \quad ; \quad Bi = \frac{h_{eff} \, R_c}{k_{PCM}} \tag{6}$$

di mana $\alpha_{PCM} = k_{PCM}/(\rho_{PCM} c_p^{app})$ adalah difusivitas termal dan $R_c$ adalah radius karakteristik PCM. Toloza et al. (2026) mensimulasikan domain hingga $Fo > 1$ untuk memastikan tercapainya *steady-state* termal, dan menganalisis rezim $Bi \gg 1$ (konduksi PCM yang membatasi laju).

### 2.5 Kopling dengan High-Temperature Heat Pump

Integrasi HTHP dimodelkan sebagai *source term* yang memasok HTF bersuhu $T_{HTHP,out} > T_{melt}$, dengan *coefficient of performance* (COP) yang bergantung pada *temperature lift*:

$$COP_{HTHP} = \frac{Q_{useful}}{W_{compress}} = \eta_{Carnot}^{-1} \cdot \frac{T_{hot}}{T_{hot} - T_{cold}} \tag{7}$$

Toloza et al. (2026) menunjukkan bahwa *thermal storage* memungkinkan HTHP beroperasi pada $T_{hot}$ optimum tanpa *throttling* saat beban industri turun, sehingga COP sistem rata-rata meningkat signifikan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Toloza et al. (2026) di industri mengikuti SOP berlapis yang mengintegrasikan disiplin *thermal modeling*, *process integration*, dan *control engineering*. Diagram alir rekayasa secara umum adalah sebagai berikut:

**Tahap 1 — Karakterisasi Kebutuhan Proses.**
Insinyur industri menentukan profil beban termal: suhu target (T_target ≈ 222°C), durasi operasi harian, dan fluktuasi musiman. Data ini menjadi input sizing unit LHTES.

**Tahap 2 — Seleksi PCM dan HTF.**
Untuk suhu 222°C, dipilih eutektik nitrat (NaNO₃–KNO₃ atau modifikasi dengan nitrit) sebagai PCM, dan HTF berupa *thermal oil* sintetis (misalnya *Therminol* 66 atau *Dowtherm* A) yang stabil di atas 250°C. Properti termofisika divalidasi terhadap basis data NIST dan literatur termokimia PCM.

**Tahap 3 — Desain Geometri *Shell-and-Tube*.**
Dilakukan *optimization loop* dengan variabel desain: jumlah tube, panjang tube, diameter tube, pitch (jarak antar tube), dan *baffle spacing*. Fungsi objektif: maksimalkan densitas energi volumetrik (kWh/m³) dengan tetap mempertahankan $h_{eff} > 200$ W/m²·K.

**Tahap 4 — Pembangunan Model Numerik Modelica.**
Menggunakan pustaka standar seperti *Modelica.Fluid*, *Modelica.Thermal.HeatTransfer*, dan *Modelica.Media*, dibangun komponen:
- `PCM_Shell` : subdomain konduksi 2D r-z dengan *apparent heat