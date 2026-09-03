# 1561 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi dekarbonisasi sektor energi termal industri mensyaratkan integrasi teknologi penyimpanan energi termal (Thermal Energy Storage, TES) yang mampu menjembatani ketidaksesuaian antara供给供给 permintaan termal dan ketersediaan energi terbarukan. Dalam konteks ini, **Latent Heat Thermal Energy Storage (LHTES)** muncul sebagai tulang punggung fleksibilitas sistem energi modern karena densitas energinya yang signifikan — secara tipikal 5–10 kali lebih tinggi dibanding sensible heat storage pada volume yang setara (Toloza, Payá, & Barceló, 2026). Ketika digabungkan dengan **High-Temperature Heat Pump (HTHP)**, LHTES memungkinkan *load leveling* proses panas industri pada rentang 150–250°C yang selama ini didominasi oleh boiler gas alam.

Toloza dkk. (2026) menekankan bahwa mayoritas material perubahan fasa (*Phase Change Material*, PCM) memiliki konduktivitas termal yang rendah ($k_{PCM} \approx 0{,}5\ \text{W/m·K}$ untuk garam nitrat), sehingga瓶颈 (*bottleneck*) kinerja LHTES terletak padaenhancement perpindahan panas, bukan pada kapasitas termal materialnya. Konfigurasi **shell-and-tube** dipilih karena tiga atribut kritis: kekompakan geometri tinggi, robustnes struktural terhadap siklus termal, dan kapabilitas untuk植入 *thermal enhancement devices* seperti fin, metal wool, atau nano-additive. Suhu operasi 222°C mengarah pada penggunaan campuran eutectic nitrat — kandidat yang paling matang secara komersial untuk aplikasi proses panas industri makanan, kimia, dan pulp & paper (Toloza, Payá, & Barceló, 2026).

Dari perspektif Teknik Industri, keputusan untuk mengadopsi LHTES-HTHP耦合 bukan semata keputusan teknis, melainkan keputusan rantai pasok energi: keputusan ini mengubah struktur biaya energi dari *variable cost* (gas/LNG impor) menjadi *capital cost + marginal cost* (listrik + operasi), dengan implikasi langsung pada Total Cost of Ownership (TCO) pabrik. Xu dan Wang (2024) dalam *The Innovation Energy* menunjukkan bahwa HTHP modern dapat mencapai Coefficient of Performance (COP) 3–5 pada rentang suhu 150–250°C, sehingga kombinasi HTHP+LHTES mampu menggantikan boiler fosil dengan *primary energy ratio* (PER) yang superior. Integrasi ini juga membuka peluang partisipasi industri dalam program Demand Response, menciptakan *revenue stream* tambahan yang sebelumnya tidak tersedia pada sistem boiler konvensional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Peng governing Perpindahan Panas Transien

Model numerik transien LHTES shell-and-tube dibangun di atas **persamaan energi** dalam formulasi enthalpi untuk mengakomodasi *phase change* secara kontinyu:

$$\rho \frac{\partial h}{\partial t} = \nabla \cdot (k \nabla T) + \dot{q}_{v}$$

di mana $h$ adalah enthalpi spesifik, $\rho$ densitas, $k$ konduktivitas termal, dan $\dot{q}_{v}$ adalah *volumetric heat source/sink*. Relasi $h(T)$ diselesaikan melalui **metode enthalpi efektif**:

$$h(T) = \begin{cases} c_{p,s} \cdot (T - T_{ref}) & T < T_m - \Delta T/2 \\ h_s + f_l \cdot L + c_{p,m} \cdot (T - T_m) & |T - T_m| \le \Delta T/2 \\ h_l + c_{p,l} \cdot (T - T_m) & T > T_m + \Delta T/2 \end{cases}$$

dengan $f_l$ fraksi cair (*liquid fraction*), $L$ panas laten, dan $c_{p,m}$ kapasitas panas pada zona *mushy*.

### 2.2 Korelasi Perpindahan Panas Konveksi

Untuk sisi shell (HTF/HTC — Heat Transfer Fluid), digunakan korelasi **Nusselt** tergantung geometri bundle dan regim aliran:

$$Nu_{shell} = 0{,}33 \cdot Re_{shell}^{0{,}6} \cdot Pr_{shell}^{0{,}33} \cdot (\mu / \mu_w)^{0{,}14 \quad \text{(Zukauskas)}}$$

Untuk sisi tube (HTF sekunder), pada aliran laminer fully developed dengan *constant heat flux*:

$$Nu_{tube} = 4{,}36 \quad (\text{laminer})$$

$$Nu_{tube} = 0{,}023 \cdot Re_{tube}^{0{,}8} \cdot Pr_{tube}^{0{,}4} \quad (\text{turbulen, Dittus-Boelter})$$

### 2.3 Karakteristik Termal Eutectic Nitrat pada ~222°C

Campuran eutectic nitrat (misalnya NaNO₃-KNO₃ atau ternary dengan Ca(NO₃)₂) dipilih karena:

| Parameter | Nilai Tipikal | Satuan |
|-----------|---------------|--------|
| $T_m$ (titik lebur) | 220–225 | °C |
| $L$ (panas laten) | 100–160 | kJ/kg |
| $k_{PCM}$ | 0,5–0,7 | W/m·K |
| $\rho$ | 1850–1980 | kg/m³ |
| $c_p$ (padat/cair) | 1,5–1,8 | kJ/kg·K |

Kapasitas volumetrik energi termal LHTES dapat dihitung sebagai:

$$E_{vol} = \rho \left[ c_p (T_{max} - T_m) + L + c_p (T_m - T_{min}) \right] \quad [\text{kJ/m}^3]$$

### 2.4 Bilangan Tak Berdimensen Kunci

Untuk analisis skalabilitas dan perbandingan dengan literatur:

$$\text{Stefan Number: } Ste = \frac{c_p (T_m - T_{ref})}{L}$$

$$\text{Fourier Number: } Fo = \frac{\alpha t}{R^2}$$

$$\text{Biot Number: } Bi = \frac{h R}{k_{PCM}}$$

$$\text{NTU (Number of Transfer Units): } NTU = \frac{U A}{C_{min}}$$

dengan $C_{min} = \dot{m}_{HTF} \cdot c_{p,HTF}$ kapasitas termal minimum antara PCM dan HTF.

### 2.5 Model Numerik Modelica

Implementasi dilakukan dalam bahasa **Modelica** (*object-oriented, equation-based*), yang memungkinkan:

1. **Acausal modelling** — persamaan konservasi diselesaikan secara simultan tanpa memerlukan *causality specification* manual.
2. Perpustakaan termal `TransientHeatConduction`, `ConvectiveHeatTransfer`, dan `PhaseChangeMaterial` digunakan untuk menyusun model multi-domain (Toloza, Payá, & Barceló, 2026).
3. Diskretisasi 1D radial pada PCM tube (symmetry axisymmetric) dengan elemen hingga volume kontrol eksplisit/implicit.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Shell-and-Tube LHTES

```
┌──────────────────────────────────────────┐
│         SHELL (HTF primer, e.g. thermal oil) │
│  ┌──────────────────────────────────────┐│
│  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ││  ← PCM (eutectic nitrat)
│  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ││     mengisi shell
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐││
│  │  │ T1 │ │ T2 │ │ T3 │ │ T4 │ │ T5 │││  ← Tube bundle (HTF sekunder)
│  │  └────┘ └────┘ └────┘ └────┘ └────┘││     atau uap proses
│  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ││
│  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ││
│  └──────────────────────────────────────┘│
└──────────────────────────────────────────┘
```

### 3.2 Diagram Alir Proses Engineering

**Fase 1 — Desain Konseptual (Bulan 1–2):**
1. Karakterisasi profil beban termal pabrik: $Q(t)$ untuk 8760 jam/tahun.
2. Penentuan suhu target ($T_{charge}$, $T_{discharge}$) dan kapasitas energi ($E_{req}$ dalam MWh_th).
3. Seleksi PCM kandidat: screening berdasarkan $T_m$, $L$, $k$, stabilitas siklus, biaya.
4. Estimasi volume awal: $V_{PCM} = E_{req} / E_{vol}$.

**Fase 2 — Desain Detil & Simulasi Transien (Bulan 3–5):**
1. Konstruksi geometri shell-and-tube: diameter shell $D_s$, panjang $L$, jumlah tube $N_t$, diameter tube $D_t$.
2. Pembuatan model Modelica sesuai arsitektur perspektif 2.5.
3. Validasi dengan data eksperimental *literature* atau *in-house test rig*.
4. Analisis sensitivitas terhadap laju alir HTF, $T_{inlet}$, dan ketebalan dinding tube.

**Fase 3 — Integrasi dengan HTHP (Bulan 6–8):**
1. Penentuan kapasitas HTHP: $Q_{HTHP} = Q_{demand,peak} + \dot{Q}_{losses}$.
2. Optimasi *charging schedule*: memprioritaskan jam *off-peak* listrik ketika tarif rendah.
3. Perhitungan *payback period*: $PB = \frac{CapEx}{\Delta OPEX_{tahunan}}$.

**Fase 4 — Commissioning & Operasi (Bulan 9–12):**
1. *Leak test* hidrostatik shell-and-tube pada 1,5× tekanan desain.
2. *Thermal cycling test* minimal 50 siklus untuk validasi stabilitas PCM.
3. Implementasi SCADA dengan sensor T di 8–12 titik kritis (inlet/outlet HTF, midline PCM, dinding tube).

### 3.3 Prosedur Pengisian (Charging) dan Pengosongan (Discharging)

**Charging (PCM mencair):**
- HTF masuk pada $T_{in,charge} > T_m + \Delta T_{sup}$ (typical $\Delta T_{sup}$ = 15–25 K).
- Laju alir dirancang untuk $Re_{shell} = 5000$–15000 (aliran turbulen untuk perpindahan panas optimal).

**Discharging (PCM memadat):**
- HTF masuk pada $T_{in,discharge} < T_m - \Delta T_{sub}$.
- Pada aplikasi HTHP-coupled, *discharging* dapat berupa: ekstraksi uap proses, atau transfer ke *cold storage* untuk *cold-to-heat upgrade*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Studi kasus mengadopsi parameter yang konsisten dengan karakteristik unit LHTES-Toloza dkk. (2026):

**Tabel 1.