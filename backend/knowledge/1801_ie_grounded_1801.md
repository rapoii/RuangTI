# 1801 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Decarbonisasi proses industri merupakan salah satu tantangan strategis terbesar abad ke-21. Menurut Xu dan Wang (2024) dalam *The Innovation Energy* (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), sektor industri menyumbang sekitar 25% dari konsumsi energi akhir global, di mana lebih dari separuh kebutuhan tersebut berupa panas proses pada rentang suhu 150–400°C. Dalam konteks inilah integrasi antara *High-Temperature Heat Pump* (HTHP) dan *Latent Heat Thermal Energy Storage* (LHTES) menjadi relevan secara operasional dan ekonomis.

Toloza, Payá, dan Barceló (2026) menekankan bahwa LHTES mampu meningkatkan fleksibilitas dan efisiensi sistem ketika dikombinasikan dengan HTHP, karena memungkinkan *time-shifting* antara produksi dan konsumsi panas. Namun demikian, konduktivitas termal material *phase change* (PCM) pada umumnya rendah (0,2–1,0 W/m·K), sehingga diperlukan optimalisasi geometri penukar kalor, enkapsulasi, atau penggunaan *metal wool* untuk menaikkan laju transfer kalor. Di antara alternatif tersebut, konfigurasi *shell-and-tube* menarik karena kekompakan, ketahanan struktural, dan kapasitas *thermal enhancement* yang tinggi (Toloza et al., 2026).

Secara ekonomis, unit LHTES pada suhu fase perubahan $\approx 222$ °C ditargetkan untuk aplikasi proses industri seperti *food processing* (sterilisasi), *textile dyeing*, dan *chemical drying*, yang secara historis bergantung pada boiler gas alam. Dengan COP HTHP modern yang mencapai 3,0–4,5 pada rentang suhu tersebut, kombinasi HTHP + LHTES mampu memangkas emisi CO₂ hingga 60–80% per satuan energi termal. Urgensi ini diperkuat oleh kebijakan *Carbon Border Adjustment Mechanism* (CBAM) Uni Eropa yang mulai berlaku penuh pada 2026, sehingga pabrik yang tidak melakukan dekarbonisasi termal akan kehilangan daya saing.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES *shell-and-tube* yang dikembangkan Toloza et al. (2026) menggunakan pendekatan *enthalpy-porosity* dalam bahasa Modelica. Formulasi inti mengikuti persamaan konservasi energi untuk PCM dengan perubahan fasa:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) + \dot{Q}_{latent}$$

di mana $H$ adalah entalpi spesifik total (J/kg) dan $k_{PCM}$ adalah konduktivitas termal efektif yang bergantung pada fraksi cair $f_l$:

$$k_{PCM}(T) = k_s (1-f_l) + k_l f_l$$

Fraksi cair $f_l$ didefinisikan secara piecewise pada zona *mushy*:

$$f_l = \begin{cases} 0, & T < T_m - \Delta T/2 \\ \dfrac{T - (T_m - \Delta T/2)}{\Delta T}, & T_m - \Delta T/2 \leq T \leq T_m + \Delta T/2 \\ 1, & T > T_m + \Delta T/2 \end{cases}$$

Konveksi alami dalam PCM cair diperhitungkan melalui sumber *momentum sink* pada persamaan momentum Navier-Stokes dengan koefisien mushy zone $A_{mush}$:

$$\dot{Q}_{mush} = -A_{mush} \cdot \frac{(1-f_l)^2}{f_l^3 + \epsilon} \cdot \vec{v}$$

Untuk sisi *shell* (HTF), persamaan energi 1D untuk fluida dalam pipa mengikuti:

$$\rho_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = \frac{4 U_{o}}{D_o} (T_{PCM,surface} - T_{HTF})$$

Koefisien transfer kalor keseluruhan $U_o$ dievaluasi melalui resistansi seri:

$$\frac{1}{U_o} = \frac{D_o}{D_i h_i} + \frac{D_o \ln(D_o/D_i)}{2 k_{wall}} + \frac{1}{h_o}$$

Untuk sisi pipa, bilangan Nusselt pada aliran turbulen menggunakan korelasi Dittus-Boelter:

$$Nu_i = 0.023 \, Re_i^{0.8} Pr^{0.4}$$

Parameter dimensionless kunci yang mengontrol perilaku transien adalah:

- **Biot number:** $Bi = \dfrac{h \cdot r_{eff}}{k_{PCM}}$, yang merepresentasikan rasio resistansi konduksi internal terhadap resistansi konveksi permukaan
- **Stefan number:** $Ste = \dfrac{c_{p,PCM} (T_m - T_\infty)}{L_f}$, yang merepresentasikan rasio panas sensible terhadap panas laten
- **Fourier number:** $Fo = \dfrac{\alpha_{PCM} t}{L^2}$, yang merepresentasikan waktu difusi termal tak berdimensi

Untuk PCM *eutectic nitrate* pada $T_m \approx 222$ °C (495 K) yang digunakan Toloza et al. (2026), parameter termofisik tipikal adalah $\rho_{PCM} \approx 1900$ kg/m³, $L_f \approx 100$ kJ/kg, dan $k_{PCM} \approx 0{,}5$ W/(m·K).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi unit LHTES-HTHP mengikuti prosedur sistematis sebagai berikut:

**Tahap 1 – Penentuan Kapasitas Termal.** Berdasarkan *heat balance* proses, kebutuhan kalor harian $Q_{demand}$ dan profil beban $Q(t)$ diestimasi menggunakan data SCADA historis minimal 12 bulan, mengikuti standar ISO 50015.

**Tahap 2 – Seleksi PCM.** Material PCM dipilih berdasarkan kesesuaian $T_m$ dengan suhu operasi, kapasitas laten, stabilitas siklus (≥3000 siklus), dan kompatibilitas kimia dengan material kontainer (umumnya stainless steel 316L).

**Tahap 3 – Desain Geometri Shell-and-Tube.** Parameter desain meliputi rasio aspek $L/D_{shell}$, jumlah tube $N_t$, pitch tube $p_t$, dan konfigurasi *baffle*. Kriteria kekompakan mengikuti:

$$\beta = \frac{V_{PCM}}{Q_{stored}} \quad \text{[m}^3\text{/kWh]}$$

target $\beta < 0{,}05$ m³/kWh untuk aplikasi industri (Toloza et al., 2026).

**Tahap 4 – Pemodelan Numerik Transien.** Bangun model Modelica dengan diskretisasi 1D radial (PCM) dan 1D aksial (HTF). Validasi dilakukan dengan data eksperimen pada prototipe skala lab, dengan target RMSE suhu < 2 K.

**Tahap 5 – Integrasi dengan HTHP.** Kontrol *charging/discharging* menggunakan PLC dengan logika: HTHP mengisi LHTES saat listrik *off-peak* dan tarif rendah; LHTES melepas kalor saat *peak demand* atau saat HTHP *off*.

**Tahap 6 – Commissioning & Monitoring.** Uji *thermal performance* sesuai standar EN 305 dan pemasangan sensor suhu多点 pada inlet, outlet, dan beberapa ketinggian aksial untuk verifikasi model.

Diagram alir keputusan operasional:

```
[Profil Beban Industri Q(t)]
        ↓
[Optimasi Kapasitas LHTES via Mixed Integer LP]
        ↓
[Desain Shell-and-Tube] → [Simulasi Transien Modelica]
        ↓                            ↓
[Fabrikasi Modul]          ← [Validasi Numerik]
        ↓
[Integrasi HTHP + LHTES] → [Uji Kinerja EN 305] → [Operasi Komersial]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik *textile dyeing* membutuhkan panas proses pada suhu 220 °C selama 8 jam/hari dengan beban rata-rata 50 kW. HTHP beroperasi pada COP = 3,5 dengan sumber kalor 60 °C. Unit LHTES didesain untuk menyimpan kelebihan produksi HTHP pada periode *off-peak* (16 jam/hari).

**Langkah 1 – Energi yang harus disimpan:**

$$Q_{stored} = \dot{Q}_{process} \cdot t_{process} = 50 \text{ kW} \times 8 \text{ h} = 400 \text{ kWh} = 1{,}44 \times 10^9 \text{ J}$$

**Langkah 2 – Massa PCM yang dibutuhkan** (menggunakan $L_f = 100$ kJ/kg dan margin desain 20%):

$$m_{PCM} = \frac{Q_{stored}}{L_f} \times 1{,}2 = \frac{400 \times 3600}{100} \times 1{,}2 = 17{,}280 \text{ kg}$$

**Langkah 3 – Volume PCM** (dengan $\rho_{PCM} = 1900$ kg/m³):

$$V_{PCM} = \frac{m_{PCM}}{\rho_{PCM}} = \frac{17{,}280}{1900} \approx 9{,}09 \text{ m}^3$$

**Langkah 4 – Desain geometri shell-and-tube.** Dipilih $D_{shell} = 0{,}5$ m, panjang efektif $L = 3$ m, dengan 19 tube berdiameter luar $D_o = 0{,}0603$ m dan pitch triangular $p_t = 0{,}084$ m. Volume efektif shell:

$$V_{shell} = \frac