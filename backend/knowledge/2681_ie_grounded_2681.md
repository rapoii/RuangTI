# 2681 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi struktural sektor energi industri Eropa dan global tengah bergeser dari paradigma pembakaran fosil menuju elektrifikasi proses termal. Dalam konteks inilah **Latent Heat Thermal Energy Storage (LHTES)** muncul sebagai enabler strategis, khususnya untuk aplikasi *industrial process heat* (IPH) yang beroperasi pada rentang suhu menengah-tinggi (150–300 °C). Seperti ditegaskan oleh Toloza, Payá, dan Barceló (2026) dalam *Eurotherm Seminar #119* (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)), LHTES berfungsi sebagai buffer termal yang mampu meningkatkan fleksibilitas operasional sekaligus efisiensi sistem ketika dikombinasikan dengan **High-Temperature Heat Pump (HTHP)**. Pandangan ini diperkuat oleh Xu dan Wang (2024) dalam *The Innovation Energy* (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)) yang memproyeksikan peran kritikal pompa kalor sebagai backbone dekarbonisasi energi termal.

Urgensi rekayasa muncul dari kontradiksi fundamental material PCM (Phase Change Material): kapasitas penyimpanan panas latennya tinggi (200–400 kJ/kg), namun konduktivitas termal intrinsiknya rendah (0,2–1,0 W/m·K untuk garam nitrat). Toloza dkk. (2026) menekankan perlunya optimalisasi tiga vektor: geometri *heat exchanger*, solusi enkapsulasi, dan penggunaan *metal wool/fin structures*. Di antara alternatif tersebut, konfigurasi *shell-and-tube* LHTES vertikal dipilih karena tiga atribut rekayasa: (i) **kekompakan volumetrik** (rasio area permukaan per volume >150 m²/m³), (ii) **robustness struktural** dalam menahan siklus termal berulang, dan (iii) **kapasitas enhancement** melalui internal fins atau twisted tape inserts.

Secara ekonomis, integrasi LHTES-HTHP memungkinkan *peak-shaving* konsumsi listrik industri, *time-shifting* beban termal, dan peningkatan *Coefficient of Performance* (COP) rata-rata sistem hingga 25–40% berdasarkan studi Xu dan Wang (2024). Unit LHTES dengan PCM eutektik di sekitar 222 °C relevan untuk industri makanan (sterilisasi UHT), tekstil (pewarnaan), kimia (reaksi endotermik ringan), dan pulp & paper (pengeringan). Nilai strategis ini menjadikan kemampuan memodelkan perilaku transien LHTES sebagai kompetensi inti bagi insinyur teknik industri modern.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan Toloza dkk. (2026) menggunakan bahasa Modelica dengan pendekatan **effective heat capacity** (apparent heat capacity) untuk menghindari kompleksitas komputasional *moving boundary problem* Stefan klasik. Persamaan dasar konservasi energi pada elemen PCM mengikuti formulasi enthalpy:

$$\rho_{\text{PCM}} \frac{\partial h(T)}{\partial t} = \nabla \cdot \left[ k_{\text{eff}} \nabla T \right] + \dot{q}_{\text{src}}$$

di mana $h(T)$ adalah entalpi spesifik sebagai fungsi suhu, $k_{\text{eff}}$ adalah konduktivitas termal efektif setelah augmentasi geometri, dan $\dot{q}_{\text{src}}$ merepresentasikan sumber panas internal. Pendekatan *apparent heat capacity* memformulasikan $h(T)$ sebagai:

$$h(T) = \int_{T_{\text{ref}}}^{T} c_p^{*}(T') \, dT'$$

dengan kapasitas panas efektif didefinisikan sebagai:

$$c_p^{*}(T) = c_{p,s}(T) + L \cdot \frac{f(T)}{\Delta T_{\text{melt}}}$$

di mana $c_{p,s}$ adalah kapasitas panas sensible, $L$ adalah panas laten fusi, $\Delta T_{\text{melt}}$ adalah interval fusi, dan $f(T)$ adalah fungsi Gaussian smoothing untuk meniru transisi fusi/pembekuan (biasanya dengan lebar 2–5 K).

Untuk fluida heat transfer (HTF) yang mengalir dalam tabung, persamaan momentum dan energi diselesaikan menggunakan model *1D distributed parameter* dengan diskretisasi spatial $N$ segmen aksial. Persamaan konservasi energi HTF pada segmen ke-$i$ adalah:

$$\rho_f c_{p,f} A_c \frac{\partial T_f^{(i)}}{\partial t} + \rho_f c_{p,f} \dot{V} \frac{\partial T_f^{(i)}}{\partial x} = U_i A_s \left( T_{\text{PCM}}^{(i)} - T_f^{(i)} \right)$$

dengan $A_c$ luas penampang aliran, $A_s$ luas perpindahan panas, dan $U_i$ koefisien transfer panas overall pada segmen $i$ yang memperhitungkan resistansi konveksi HTF, resistansi konduksi dinding tabung, dan resistansi konduksi efektif PCM:

$$\frac{1}{U_i} = \frac{1}{h_f^{(i)}} + \frac{\ln(r_o/r_i)}{2\pi k_{\text{wall}} L_i} + \frac{1}{h_{\text{PCM,eff}}^{(i)}}$$

Selama fase transisi fusi, $h_{\text{PCM,eff}}$ sangat rendah karena PCM bersifat quasi-solid dengan konveksi natural terbatas. Peningkatan $h_{\text{PCM,eff}}$ dicapai dengan menambahkan **metal wool/foam matrix** di dalam annulus shell, yang didekati oleh model konduktivitas efektif:

$$k_{\text{eff}} = k_{\text{PCM}} \cdot \varepsilon^2 + \frac{(1-\varepsilon) k_{\text{metal}} \cdot k_{\text{PCM}}}{k_{\text{PCM}} + 0.5(1-\varepsilon)k_{\text{PCM}}}$$

dengan $\varepsilon$ porositas matriks metal wool (tipikal 0,85–0,95). Model divalidasi terhadap data eksperimental menggunakan kriteria RMSE < 5% pada profil suhu discharge.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis unit LHTES-HTHP di lingkungan industri mengikuti kerangka SOP berikut yang diadaptasi dari protokol rekayasa Toloza dkk. (2026) dan praktik terbaik integrasi pompa kalor industri (Xu & Wang, 2024):

**Tahap 1 – Karakterisasi Kebutuhan Termal.** Audit beban termal proses industri selama 8760 jam/tahun untuk mengidentifikasi kapasitas puncak, profil suhu, dan durasi siklus. Penentuan $\Delta T_{\text{design}}$ dan *capacity factor* menentukan sizing unit.

**Tahap 2 – Seleksi PCM.** Pemilihan PCM eutektik di sekitar 222 °C mempertimbangkan: (a) keselarasan dengan suhu kondensor HTHP, (b) stabilitas siklus termal >3000 siklus, (c) kompatibilitas kimia dengan material kontainer, dan (d) biaya per kWh-th. Karakterisasi DSC (Differential Scanning Calorimetry) menentukan $T_{\text{melt}}$, $L$, dan $c_{p,s}$.

**Tahap 3 – Desain Heat Exchanger Shell-and-Tube.** Dimensi utama: panjang aksial $L$, diameter shell $D_s$, diameter tube $d_o/d_i$, jumlah tube $N_t$, dan pitch triangular/quad. Kriteria desain mengikuti $L/D_s \geq 4$ untuk memastikan gradien termal aksial terkontrol. Pitch selection mengikuti standar TEMA (Tubular Exchanger Manufacturers Association) kelas R untuk fluida non-flammable.

**Tahap 4 – Augmentasi Perpindahan Panas.** Pemasangan metal wool (porositas 0,90, density 200–400 kg/m³) di annulus shell atau internal longitudinal fins pada tube untuk meningkatkan $k_{\text{eff}}$ 3–8 kali lipat.

**Tahap 5 – Pemodelan Numerik Transien.** Pembangunan model dalam Modelica (atau COMSOL/Ansys sebagai alternatif) dengan validasi terhadap data eksperimental *charge-discharge* pada prototipe skala lab. Diagram alir logika simulasi:

```
[Input: Profil beban HTF, T_inlet, m_dot]
        │
        ▼
[Inisialisasi kondisi awal PCM]
        │
        ▼
[Loop waktu dt = 0,1–1 s]
        │
        ▼
[Solve PDE enthalpy pada PCM] ──► [Update f(T), c_p*(T)]
        │
        ▼
[Solve ODE HTF dalam tabung] ──► [Update U_i]
        │
        ▼
[Output: T_PCM(x,t), T_HTF(x,t), SOC(t)]
        │
        ▼
[Post-processing: Effectiveness, discharge time]
```

**Tahap 6 – Integrasi dengan HTHP.** Matching kurva kondensor HTHP dengan profil discharge LHTES untuk memastikan $\Delta T_{\text{pinch}} \geq 10$ K pada semua kondisi operasi. Implementasi kontrol *Model Predictive Control* (MPC) untuk mengatur laju alir HTF dan *setpoint* suhu.

**Tahap 7 – Commissioning & Performance Verification.** Pengujian *thermal performance test* mengacu pada standar ASHRAE 94 dan EN 12977 untuk sistem storage termal. Parameter KPI: kapasitas utilisasi, *round-trip efficiency*, degradasi kapasitas per 1000 siklus.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Sistem LHTES-HTHP untuk Industri Pengeringan Tekstil (Kapasitas 500 kWh_th)**

Parameter desain berdasarkan spesifikasi Toloza dkk. (2026) dengan asumsi PCM eutektik berbasis garam nitrat pada $T_{\text{melt}} = 222$ °C:

| Parameter | Nilai | Satuan |
|---|---|---|
| Panjang tabung $L$ | 1,5 | m |
| Diameter luar tabung $d_o$ | 25,4 | mm |
| Diameter dalam tabung $d_i$ | 20,0 | mm |
| Diameter shell $D_s$ | 200 | mm |
| Jumlah tabung $N_t$ | 8 | – |
| Massa PCM | 150 | kg |
| $T_{\text{melt}}$ PCM | 222 | °C |
| Panas laten $L$ | 220 | kJ/kg |
| $c_{p,s}$ (sensible) | 1,55 | kJ/kg·K |
| $k_{\text{PCM}}$ | 0,55 | W/m·K |
| $k_{\text{eff}}$ (dengan metal wool) | 2,4 | W/m·K |
| HTF | Terminol VP-1 | – |
| $T_{\text{inlet}}$ HTF (charging) | 240 | °C |
| $\dot{m}_{HTF}$ | 0,8 | kg/s |

**Perhitungan 1: Kapasitas Penyimpanan Energi Total**

$$E_{\text{total}} = m_{\text{PCM}} \left[ L + c_{p,s} \Delta T_{\text{util}} \right]$$

dengan $\Delta T_{\text{util}} = 20$ K (rentang utilisasi sensible di sekitar $T_{\text{melt}}$):

$$E_{\text{total}} = 150 \times \left[ 220 + 1,55 \times 20 \right] = 150 \times 251 = 37\,650 \text{ kJ} = 10,46 \text{ kWh}$$

*Catatan:* Skala unit lebih kecil dari target 500 kWh_th — mengindikasikan bahwa kebutuhan industri realistis membutuhkan *modular array* 48 unit identik,