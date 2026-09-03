# 1929 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Model numerik transien unit *latent heat thermal energy storage* (LHTES) pada sekitar 222°C yang dirancang untuk integrasi dengan *High-Temperature Heat Pump* (HTHP)
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal global, di mana lebih dari 50% kebutuhan energi final manufaktur diserap dalam bentuk *process heat* pada rentang suhu 100–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi *process heat* mensyaratkan dua pilar teknologi simultan: *electrification* melalui pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP) dan *thermal energy storage* (TES) untuk menjembatani kesenjangan antara permintaan termal yang intermiten dengan pasokan listrik terbarukan yang fluktuatif. Toloza, Payá, dan Barceló (2026) dalam makalahnya yang dipublikasikan di *Eurotherm Seminar #119* menekankan bahwa integrasi unit *latent heat thermal energy storage* (LHTES) berbasis PCM (*phase change material*) eutectik nitrat dengan HTHP merupakan strategi kunci untuk meningkatkan fleksibilitas operasional sekaligus menurunkan *capacity factor* kompresor pompa kalor.

Urgensi teknis dari integrasi ini bersifat trifold: (1) kapasitas HTHP pada suhu *lift* tinggi dibatasi oleh *coefficient of performance* (COP) yang menurun tajam, sehingga *buffering* termal dengan LHTES memungkinkan operasi HTHP pada режим mendekati desain; (2) fluktuasi harga listrik (*time-of-use tariff*) di industri Eropa saat ini mencapai rasio puncak–lembah 3–5×, sehingga *time-shifting* beban termal bernilai ekonomis signifikan; (3) material PCM dengan kapasitas laten tinggi (≥200 kJ/kg) pada suhu 200–250°C (seperti eutectic salt hidrat atau nitrat) memungkinkan densitas energi volumetrik 3–5× lebih tinggi dibanding *sensible heat storage* (SHS) berbasis air atau minyak termal (Toloza et al., 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Xu dan Wang (2024) menunjukkan bahwa pada aplikasi industri baja, kimia, dan kertas, potensi *thermal energy decarbonization* melalui HTHP+LHTES dapat menggantikan 30–60% konsumsi *natural gas boiler* dengan emisiensi eksternal sistem gabungan mencapai 0,85–0,95 (rasio energi termal berguna terhadap energi listrik input). 

Konfigurasi *shell-and-tube* dipilih oleh Toloza dkk. (2026) atas dasar tiga kriteria teknik: kekompakan volumetrik, kekakuan struktural pada operasi siklik, dan kapasitas *thermal enhancement* melalui geometri internal yang dapat dioptimasi. Tantangan fundamental yang diidentifikasi adalah konduktivitas termal rendah dari sebagian besar PCM (k_efektif ≈ 0,5–1,5 W/(m·K) untuk garam nitrat) yang menghasilkan waktu *charging/discharging* panjang jika tidak dilakukan peningkatan perpindahan kalor. Oleh karena itu, pengembangan model numerik transien yang valid menjadi prasyarat sebelum fabrikasi prototipe fisik, terutama untuk memprediksi perilaku dinamis antarmuka *solidus–likuidus* dan distribusi suhu radial-aksial di dalam PCM.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengantar Perpindahan Kalor Transien dengan Perubahan Fasa

Model numerik yang dikembangkan Toloza, Payá, dan Barceló (2026) menggunakan formulasi enthalpy-based untuk menyelesaikan persamaan energi transien dalam PCM:

$$\rho \cdot \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{eff} \, \nabla T \right) + \dot{q}_{HTF}$$

di mana $\rho$ adalah densitas PCM (kg/m³), $h$ adalah entalpi spesifik (J/kg), $k_{eff}$ adalah konduktivitas termal efektif (W/(m·K)), dan $\dot{q}_{HTF}$ adalah sumber/kalor fluks dari *heat transfer fluid* (W/m³). Hubungan antara entalpi dan suhu dalam metode *apparent heat capacity* dideklarasikan sebagai:

$$c_{p,app}(T) = \frac{dh}{dT} = c_{p,s} + \frac{L}{T_{liq} - T_{sol}} \cdot \mathcal{F}(T)$$

dengan $L$ adalah panas laten (J/kg), $T_{liq}$ dan $T_{sol}$ adalah suhu likuidus dan solidus, dan $\mathcal{F}(T)$ adalah fungsi regularisasi Gaussian (atau sinusoidal smoothing) yang mendistribusikan kalor laten dalam interval fasa transisi.

### 2.2 Konfigurasi Shell-and-Tube dan Persamaan Konjugasi

Geometri *shell-and-tube* yang digunakan dalam model (Toloza et al., 2026) terdiri atas satu tube internal berisi HTF yang dikelilingi PCM dalam *shell*. Untuk domain PCM 2D-aksisimetris $(r, z)$:

$$\rho_{PCM} \, c_{p,app}(T) \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r k_{PCM} \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM} \frac{\partial T}{\partial z} \right)$$

Untuk domain HTF dalam tube dengan asumsi *fully developed laminar flow*:

$$\rho_{HTF} \, c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} \, u_z \, c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = \frac{k_{HTF}}{r} \frac{\partial}{\partial r}\left( r \frac{\partial T_{HTF}}{\partial r} \right)$$

di mana $u_z$ adalah profil kecepatan parabolik Hagen–Poiseuille. Kopling antardomain terjadi melalui syarat batas konvektif pada dinding tube:

$$-k_{PCM} \frac{\partial T_{PCM}}{\partial r}\bigg|_{r=r_i} = h_{HTF} \left( T_{HTF,wall} - T_{PCM,wall} \right)$$

dengan koefisien konveksi internal $h_{HTF}$ dihitung dari korelasi Nu untuk *developing flow*:

$$Nu_{HTF} = 1.86 \left( Re \cdot Pr \cdot \frac{D_h}{L} \right)^{1/3} \quad \text{(untuk } Re < 2300, \text{ thermal entry length)}$$

### 2.3 Bilangan Dimensi dan Parameter Kunci

Tiga bilangan tanpa dimensi mengontrol dinamika sistem:

$$Fo = \frac{\alpha_{PCM} \, t}{r_{o}^{2} - r_{i}^{2}}, \quad Bi = \frac{h_{HTF} \, r_i}{k_{PCM}}, \quad Ste = \frac{c_{p,PCM} \, \Delta T}{L}$$

di mana $Fo$ (Fourier) mengukur rasio waktu difusi terhadap waktu observasi, $Bi$ (Biot) mengukur resistansi termal internal terhadap resistansi konveksi permukaan, dan $Ste$ (Stefan) mengukur signifikansi energi sensible relatif terhadap kalor laten. Untuk eutectic nitrat pada rentang 200–250°C (Xu & Wang, 2024), tipikal $Ste \approx 0,3–0,5$, yang menunjukkan bahwa kapasitas sensible tidak dapat diabaikan dan justifikasi pendekatan *apparent heat capacity* menjadi valid.

### 2.4 Kapasitas Penyimpanan dan Daya

Kapasitas energi total unit LHTES dideklarasikan sebagai:

$$Q_{total} = m_{PCM} \left[ c_{p,sol}(T_m - T_{sol}) + L + c_{p,liq}(T_{liq} - T_m) \right]$$

Daya rata-rata saat *charging* (dengan efektivitas $\varepsilon$ exchanger):

$$\dot{Q}_{ch} = \varepsilon \cdot \dot{m}_{HTF} \cdot c_{p,HTF} \cdot (T_{HTF,in} - T_{HTF,out})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Model Modelica

Toloza, Payá, dan Barceló (2026) mengimplementasikan model dalam bahasa Modelica melalui pustaka *ThermoCycle* dan *HeatTransfer*, dengan arsitektur sebagai berikut:

1. **Pre-processing geometri**: Definisi parameter `$r_i$` (jari-jari tube dalam, m), `$r_o$` (jari-jari shell dalam, m), `$L$` (panjang tube, m), `$N_t$` (jumlah tube). Untuk unit vertikal skala pilot laboratorium tipikal: $r_i = 0{,}006$ m, $r_o = 0{,}040$ m, $L = 0{,}60$ m, $N_t = 1$.
2. **Discretization**: Domain PCM dibagi dalam *finite volume* 2D-aksisimetris dengan mesh non-uniform terkonsentrasi di dekat dinding tube (gradien termal tinggi). Resolusi tipikal 30 nodal radial × 80 nodal aksial.
3. **Inisialisasi**: Suhu awal $T_0 = T_{sol} - 5$ K (PCM sepenuhnya padat); HTF inlet $T_{in}$ ditetapkan menurut режим operasi (HTFP HTHP *discharge*).
4. **Solver**: Integrasi temporal dengan metode CVODE (BDF) pada *tolerance* relatif $10^{-6}$.
5. **Validasi**: Perbandingan dengan data eksperimental prototipe fisik atau korelasi *Stefan problem* analitis untuk *semi-infinite slab*.

### 3.2 Diagram Alir SOP untuk Charging dan Discharging

```
┌─────────────────────────────────────────────────────────┐
│  START: Identifikasi режим operasi (Charging/Discharging)│
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
        ┌─────────────────────────────────────────┐
        │ Set boundary condition HTF inlet:      │
        │ - Charging: T_in = T_HTHP_out ≈ 230°C   │
        │ - Discharging: T_in = T_process ≈ 200°C │
        └─────────────────────────────────────────┘
                          │
                          ▼
        ┌─────────────────────────────────────────┐
        │ Hitung Re, Pr, Nu HTF dan h_HTF        │
        │ Validasi laminar/transition regime      │
        └─────────────────────────────────────────┘
                          │
                          ▼
        ┌─────────────────────────────────────────┐
        │ Run transient solver s.d. t_max        │
        │ (tipikal 4–8 jam untuk full cycle)      │
        └─────────────────────────────────────────┘
                          │
                          ▼
        ┌─────────────────────────────────────────┐
        │ Post-process: liquid fraction θ(T)     │
        │ Store energy Q(t), exit temperature     │
        └─────────────────────────────────────────┘
                          │
                          ▼
                  ┌───────────────┐
                  │  END & Report │
                  └───────────────┘
```

### 3.3 Prosedur Pengendalian Kualitas (QC)

Sesuai dengan praktik rekayasa sistem termal (Xu & Wang, 2024), setiap model wajib melalui:
- **Mesh independence test**: variasi jumlah nodal ≥2× menghasilkan perubahan output <1%.
- **Energy balance check**: deviasi $|(Q_{in} - Q_{out}) - Q_{stored}| / Q_{in} < 2\%$.
- **Sensitivity analysis** terhadap $k_{PCM}$ (variasi ±20%) dan $h_{HTF}$ (variasi ±30%).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit LHTES-HTHP (Sintesis dari Parameter Toloza et al., 2026)

Asumsikan unit *shell-and-tube* dengan parameter berikut berdasarkan protokol model Toloza dkk. (2026):

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Jari-jari tube dalam | $r_i$ | 0,006 | m |
| Jari-jari shell | $r_o$ | 0,040 | m |
| Panjang | $L$ | 0,60 | m |
| PCM: eutectic nitrate | — | $HTS$ | — |
| Densitas PCM (padat) | $\rho_s$ | 1900 | kg/m³ |
| Panas laten | $L$ | 220 | kJ/kg |
| $c_{p,liq}$ | — | 1500 | J/(kg·K) |
| $k_{PCM}$ | — | 1,0 | W/(m·K) |
| Suhu fasa transisi | $T_m$ | 222 | °C |
| HTF: thermal oil | — | — | — |
| Debit HTF | $\dot{m}$ | 0,02 | kg/s |
| $c_{p,HTF}$ | — | 2300 | J/(kg·K) |
| $T_{in}$ (charging) | — | 230 |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
