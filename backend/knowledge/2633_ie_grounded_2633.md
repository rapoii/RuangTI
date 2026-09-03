# 2633 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222 °C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37 % konsumsi energi akhir global, dimana lebih dari separuhnya digunakan dalam bentuk **panas proses** (process heat) pada rentang suhu 150 – 400 °C — rentang yang secara tradisional dipenuhi oleh pembakaran gas alam, batu bara, atau minyak berat (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses merupakan tantangan kritis karena elektrifikasi langsung belum matang secara teknis-ekonomis pada suhu ekstrem tersebut. Pompa Kalor Suhu Tinggi (*High-Temperature Heat Pump*, **HTHP**) muncul sebagai teknologi *enabler* karena mampu menaikkan *coefficient of performance* (COP) sumber listrik menjadi panas utilisasi pada rasio 3 – 5, menggantikan boiler fosil dengan emisiensi jauh lebih rendah.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengidentifikasi keterbatasan utama HTHP yaitu **variabilitas beban** dan **kesenjangan temporal** antara ketersediaan listrik (off-peak / intermiten) dan kebutuhan panas proses puncak. Solusinya adalah integrasi HTHP dengan unit **Latent Heat Thermal Energy Storage (LHTES)** berbasis *Phase Change Material* (PCM). PCM menyimpan dan melepaskan energi pada suhu near-constant selama perubahan fasa, sehingga menyediakan buffer termal dengan densitas energi volumetrik 5–10 kali lebih tinggi dibanding sensible-only storage. Untuk aplikasi pada suhu ~222 °C — relevan dengan industri makanan, pengeringan, tekstil, dan kimia ringan — PCM eutektik berbasis garam nitrat (misalnya campuran KNO₃–NaNO₃ atau sistem ternary nitrate) menjadi kandidat utama karena titik lelehnya yang dapat di-tuning ke rentang target.

Tantangan rekayasa yang diangkat Toloza et al. adalah **konduktivitas termal PCM yang rendah** (tipikal 0,5 – 1,5 W/m·K), yang membatasi laju *charge/discharge* dan menurunkan utilitas kapasitas penyimpanan. Untuk menjawab hal ini, paper mengusulkan konfigurasi **shell-and-tube vertikal** dengan PCM di sisi shell dan fluida kerja HTHP di dalam tube, dikombinasikan dengan geometri *fins* dan optimasi *encapsulation*. Pemodelan transien dikembangkan dalam bahasa **Modelica** untuk memprediksi evolusi suhu, fraksi cair (*liquid fraction*), dan laju pertukaran panas selama siklus dinamis.

Secara strategis, integrasi HTHP–LHTES memungkinkan: (a) *peak-shaving* biaya listrik, (b) decoupling temporal produksi-konsumsi panas, (c) peningkatan COP melalui operasi HTHP pada kondisi *steady* mendekati *design point*, dan (d) reduksi kapasitas terpasang HTHP karena beban puncak diratakan oleh storage. Modul ini relevan untuk keputusan **Capital Expenditure (CAPEX)** dan **Operational Expenditure (OPEX)** pada fasilitas industri yang sedang melakukan elektrifikasi termal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi pada Domain PCM

Untuk PCM dalam konfigurasi shell-and-tube, persamaan konservasi energi transient diselesaikan pada koordinat silindris 2-D axisimetris:

$$\rho_{\text{PCM}} \, c_{p,\text{PCM}} \, \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{\text{PCM}} \, r \, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{\text{PCM}} \, \frac{\partial T}{\partial z}\right) + \dot{q}_{\text{latent}}$$

dengan $\dot{q}_{\text{latent}}$ merepresentasikan pelepasan/penyerapan panas laten selama perubahan fasa. Persamaan ini diselesaikan dengan kondisi batas Dirichlet pada dinding tube ($T = T_{\text{HTF}}(z,t)$) dan kondisi adiabatic pada shell terluar.

### 2.2 Metode Kapasitas Panas Semu (*Apparent Heat Capacity*)

Untuk menghindari diskontinuitas pada antarmuka padat-cair, digunakan metode kapasitas panas semu yang melebur fasa ke dalam sebuah pita suhu $[T_m - \Delta T/2,\; T_m + \Delta T/2]$:

$$c_{\text{app}}(T) = c_{p,\text{PCM}} + L \, \frac{df}{dT}$$

dengan $L$ adalah panas laten spesifik (J/kg) dan $f(T)$ adalah fraksi cair yang dimodelkan sebagai:

$$f(T) = \begin{cases} 0, & T \leq T_m - \Delta T/2 \\ \dfrac{T - (T_m - \Delta T/2)}{\Delta T}, & T_m - \Delta T/2 < T < T_m + \Delta T/2 \\ 1, & T \geq T_m + \Delta T/2 \end{cases}$$

### 2.3 Persamaan Stefan pada Antarmuka

Pada batas solid-liquid, keseimbangan energi mengikuti kondisi Stefan:

$$\rho_{\text{PCM}} \, L \, v_n = k_s \left.\frac{\partial T}{\partial n}\right|_{s} - k_l \left.\frac{\partial T}{\partial n}\right|_{l}$$

dengan $v_n$ adalah kecepatan gerak antarmuka dan gradien suhu dievaluasi pada sisi padat ($s$) dan cair ($l$).

### 2.4 Perpindahan Panas Sisi Tube (HTF)

Untuk fluida perpindahan panas (*Heat Transfer Fluid*, HTF) yang mengalir turbulen di dalam tube, koefisien konveksi diprediksi oleh korelasi Gnielinski:

$$Nu_D = \frac{(f/8)(Re_D - 1000)Pr}{1 + 12{,}7\sqrt{f/8}\,(Pr^{2/3} - 1)}, \quad f = (0{,}790 \ln Re_D - 1{,}64)^{-2}$$

berlaku untuk $2300 < Re_D < 5 \times 10^6$ dan $0{,}5 < Pr < 2000$. Laju perpindahan panas total:

$$Q(t) = \dot{m}_{\text{HTF}} \, c_{p,\text{HTF}} \left[ T_{\text{in}}(t) - T_{\text{out}}(t) \right] = U A_{\text{heat}} \, \Delta T_{\text{LMTD}}(t)$$

dengan koefisien keseluruhan $U$:

$$\frac{1}{U} = \frac{r_o}{r_i h_i} + \frac{r_o \ln(r_o/r_i)}{k_{\text{wall}}} + \frac{1}{h_o}$$

### 2.5 Kapasitas Penyimpanan Energi

Kapasitas energi total yang tersimpan dalam PCM:

$$E_{\text{stored}} = m_{\text{PCM}} \left[ \int_{T_i}^{T_m} c_{p,s}(T) \, dT + L + \int_{T_m}^{T_f} c_{p,l}(T) \, dT \right]$$

dengan komponen sensible (padat dan cair) di sekitar komponen latent — tipikal rasio sensible/latent ≈ 30/70 untuk PCM garam nitrat.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

### 3.1 Arsitektur Sistem HTHP–LHTES

```
┌──────────────┐    uap superheat     ┌──────────────────┐
│   HTHP       │ ───────────────────► │ Shell-and-Tube   │
│  (sumber     │   kondensor 222°C    │ LHTES (PCM       │
│   listrik)   │ ◄─────────────────── │  nitrate eutektik)│
└──────────────┘    HTF balik (180°C) └──────────────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │  Beban Proses    │
                                    │  (heat exchanger │
                                    │   sekunder)      │
                                    └──────────────────┘
```

### 3.2 SOP Pemodelan Transien (mengikuti Toloza et al., 2026)

| Tahap | Aktivitas | Output |
|-------|-----------|--------|
| 1 | **Karakterisasi PCM** — pengukuran DSC untuk $L$, $T_m$, $c_p(T)$, $k(T)$; TGA untuk stabilitas termal | Properti termo-fisik sebagai fungsi $T$ |
| 2 | **Disain geometri** — penentuan $D_i$, $D_o$, panjang tube, jumlah tube, pitch arrangement (triangular/hex) | CAD + gambar teknik |
| 3 | **Discretization domain** — mesh silindris 2-D, refinement di dinding tube dan zona mushy | Grid ~20.000 – 80.000 elemen |
| 4 | **Pemodelan Modelica** — implementasi persamaan energi + HTF 1-D dalam Dymola/AMESim | Library termodinamika |
| 5 | **Validasi eksperimental** — uji charge-discharge pada prototipe skala lab | Data $T(z,t)$, $\dot{Q}(t)$ |
| 6 | **Kalibrasi parameter** — minimasi RMSE antara simulasi dan eksperimen | Adjusted $h$, $k_{\text{eff}}$ |
| 7 | **Simulasi skenario industri** — profil beban harian, variasi tarif listrik | Kurva SOC (*state of charge*) termal |
| 8 | **Analisis kelayakan ekonomi** — NPV, payback period, LCOE termal | Decision matrix |

### 3.3 SOP Pengoperasian Industri

1. **Pre-startup check** — verifikasi integritas tube, kebocoran HTF, dan pre-heating PCM ke suhu $T_m -