# 2761 — Model Numerik Transient Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global bertanggung jawab atas hampir **37% dari konsumsi energi final dunia** dan menyumbang sekitar **24% emisi CO₂ antropogenik** menurut data IEA (2023). Di tengah agenda dekarbonisasi yang semakin ketat—terutama pasca-penerapan *Carbon Border Adjustment Mechanism* (CBAM) Uni Eropa dan target *Net Zero Emission* (NZE) IPCC 2050—sistem pemanasan proses industri (*industrial process heat*, IPH) menjadi titik kritis yang harus ditransformasi. Menurut Xu dan Wang (2024) dalam tinjauan prospektifnya di *The Innovation Energy* dengan DOI [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032), *heat pump* (HP) muncul sebagai teknologi "prime mover" dekarbonisasi termal karena mampu menggantikan boiler bahan bakar fosil dengan **COP (Coefficient of Performance) tipikal 3–5** untuk aplikasi suhu menengah–tinggi, memberikan potensi pengurangan emisi hingga **80%** pada rentang suhu 100–250°C.

Namun, Toloza, Payá, dan Barceló (2026) dalam naskah publikasinya di *Eurotherm Seminar #119* dengan DOI [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086) menyoroti bahwa integrasi *High-Temperature Heat Pump* (HTHP) dengan sistem **Latent Heat Thermal Energy Storage** (LHTES) menghadapi tantangan teknis serius, yaitu (i) **ketidakselarasan temporal** antara profil produksi termal HP dan permintaan beban proses industri (*load-shift*), (ii) **konduktivitas termal rendah** PCM (*Phase Change Material*) yang tipikalnya hanya $\lambda_{PCM} \approx 0,2$ W/(m·K), dan (iii) **fluktuasi operasional** HTHP akibat siklus defrost dan kompresi. Sebagai contoh kuantitatif, sebuah pabrik makanan dan minuman di Eropa dengan konsumsi uap proses 50 MW_th membutuhkan profil beban harian dengan puncak 1,8× rata-rata, sehingga tanpa buffer termal, HTHP harus di-*oversize* 35–40%, menurunkan *capital expenditure* (CAPEX) efektivitas sistem.

Konteks operasional ini mengarahkan pada kebutuhan mendesak akan **unit LHTES shell-and-tube** yang beroperasi di sekitar 222°C—suhu yang strategis karena berada dalam jangkauan operasional efisien HTHP berbasis siklus trans-kritis CO₂ dan *refrigeran hidrokarbon*新一代—serta mampu menyimpan energi dalam volume ringkas melalui perubahan fase PCM eutectic, misalnya campuran **NaNO₃–KNO₃** atau **D-arabitol dan hidrokarbon sintetis**. Toloza et al. (2026) menekankan bahwa integrasi LHTES ke dalam arsitektur HTHP-IPH merupakan *enabler* strategis untuk decarbonisasi panas proses sekaligus memperbaiki *flexibility factor* sistem energi industri modern. Xu dan Wang (2024) menambahkan bahwa dekarbonisasi termal melalui HTHP+LHTES merupakan *low-hanging fruit* dengan payback period 4–7 tahun di banyak industri (DOI: 10.59717/j.xinn-energy.2024.100032). Dengan demikian, kemampuan memodelkan perilaku transient unit LHTES menjadi kompetensi inti bagi insinyur industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konservasi Energi dalam PCM

Model transient LHTES yang dikembangkan Toloza et al. (2026) menggunakan **formulasi entalpi-porositas (*enthalpy-porosity method*)** di lingkungan bahasa Modelica untuk menyelesaikan **persamaan difusi panas fase-ubah** sebagai berikut:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot (\lambda_{eff} \nabla T) + \dot{q}_{HTF}$$

di mana $h$ adalah entalpi spesifik [J/kg], $\rho_{PCM}$ densitas PCM [kg/m³], $\lambda_{eff}$ konduktivitas termal efektif komposit PCM-logam [W/(m·K)], $T$ suhu [K], dan $\dot{q}_{HTF}$ fluks panas dari *heat transfer fluid* (HTF) [W/m³].

Enthalpi total didefinisikan dengan:

$$h(T) = \int_{T_{ref}}^{T} c_{p,solid}(T') dT' + f_{liq}(T) \cdot L_{fus}, \quad T_{s} \leq T \leq T_{l}$$

dengan $L_{fus}$ adalah panas laten peleburan [J/kg], $T_s$ dan $T_l$ adalah suhu *solidus* dan *liquidus*, serta $f_{liq}(T)$ adalah *liquid fraction function* yang dimodelkan dengan kurva Huber–Sekerka atau pendekatan sigmoid Galerkin:

$$f_{liq}(T) = \begin{cases} 0, & T < T_s \\ \frac{T - T_s}{T_l - T_s}, & T_s \leq T \leq T_l \\ 1, & T > T_l \end{cases}$$

### 2.2 Pendekatan Momentum dan Darcy Damping

Untuk menangkap efek konveksi alami pada *mushy zone*, digunakan **koefisien redaman Carman-Kozeny** dalam persamaan Navier-Stokes:

$$\vec{v} = 0 \quad \text{saat} \quad f_{liq} < 0{,}5$$

$$S = -C_{Kozeny} \frac{(1 - f_{liq})^2}{f_{liq}^3 + \epsilon} \vec{v}, \quad C_{Kozeny} \approx 1{,}6 \times 10^{6}$$

dengan $\epsilon$ parameter regularisasi kecil untuk menghindari singularitas numerik.

### 2.3 Perpindahan Panas Shell-and-Tube

Untuk HTF yang mengalir di dalam tube bundle, rezim turbulen dalam pipa dengan $Re_{HTF} > 10^4$ menggunakan korelasi **Gnielinski**:

$$Nu_{tube} = \frac{(f/8)(Re_{HTF} - 1000)Pr_{HTF}}{1 + 12{,}7\sqrt{f/8}(Pr_{HTF}^{2/3} - 1)}$$

dengan $f = (0{,}790 \ln Re_{HTF} - 1{,}64)^{-2}$. Koefisien perpindahan panas konveksi:

$$h_{HTF} = \frac{Nu_{tube} \cdot \lambda_{HTF}}{D_{i,tube}}$$

### 2.4 Resistansi Termal Total dan Waktu Discharge

Resistansi termal total antara HTF dan PCM dalam satu tube:

$$R_{tot} = \frac{1}{h_{HTF} \cdot A_{i}} + \frac{\ln(D_o/D_i)}{2\pi \lambda_{wall} L_{tube}} + \frac{1}{h_{PCM} \cdot A_o} + R_{contact}$$

Laju pelepasan energi util:

$$\dot{Q}_{discharge} = \frac{\Delta T_{lm}}{R_{tot}}, \quad \Delta T_{lm} = \frac{\Delta T_{in} - \Delta T_{out}}{\ln(\Delta T_{in}/\Delta T_{out})}$$

Kapasitas energi total:

$$E_{storage} = m_{PCM} \cdot \left[ c_{p,s} (T_m - T_s) + L_{fus} + c_{p,l} (T_l - T_m) \right]$$

Waktu discharge karakteristik:

$$\tau_{discharge} = \frac{E_{storage}}{\dot{Q}_{discharge}} \approx \frac{\rho_{PCM} V_{PCM} L_{fus}}{\dot{Q}_{discharge}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES–HTHP mengikuti SOP rekayasa berikut, sebagaimana distandarisasi dalam pedoman Toloza et al. (2026):

**Fase 1 — Karakterisasi PCM dan Pemilihan Bahan**
1. Seleksi PCM eutectic pada suhu target 222°C (misalnya **D-arabitol / erythritol blends** atau **sintetik parafin high-temp**), verifikasi dengan DSC (*Differential Scanning Calorimetry*) standar ASTM E1269.
2. Pengukuran $\lambda_{PCM}$, $c_p$, $\rho$, dan stabilitas siklus termal ≥ 1000 siklus.
3. Penilaian kompatibilitas kimiawi dengan material dinding tube (umumnya baja karbon atau aluminium AA6061).

**Fase 2 — Desain Heat Exchanger Shell-and-Tube**
1. Penentuan geometri: jumlah tube $N_t$, panjang $L$, diameter dalam $D_i$, diameter luar $D_o$, dan *pitch* triangular.
2. Perhitungan *shell-side heat transfer* dengan metode **Delaware Bell-Delaware** atau **Tinker** untuk akurasi ±15%.
3. Validasi numerik 1D sumbu-radial dengan solver Modelica `DynamicPipe` dan `HeatExchanger` libraries.

**Fase 3 — Pemodelan Transient dalam Modelica**
Diagram alir logika pemodelan mengikuti arsitektur Toloza et al. (2026):
- **Input layer:** $T_{in,HTF}(t)$, $\dot{m}_{HTF}(t)$, $T_{amb}$, parameter PCM.
- **Governing equations:** konservasi massa HTF, konservasi energi PCM (enthalpy method), perpindahan panas konveksi konduksi.
- **Numerik:** diskretisasi implisit *backward Euler* dengan time-step adaptif $10^{-3}$–$10^{2}$ s.
- **Output layer:** profil $T(r,z,t)$, $f_{liq}(r,z,t)$, $T_{out,HTF}(t)$, SOC (*state of charge*) termal.

**Fase 4 — Integrasi dengan HTHP dan Sistem Kontrol**
1. Penempatan LHTES pada *suction line* atau *discharge line* kompresor HTHP untuk *load leveling*.
2. Implementasi **model predictive control (MPC)** dengan horizon 15–60 menit berdasarkan prediksi permintaan beban proses.
3. Penyertaan **safety interlocks** untuk mencegah superheating > $T_{max,PCM}$ (umumnya 240°C untuk PCM organik).

**Fase 5 — Commissioning, Testing & Commissioning (CTC)**
1. *Leak testing* pada tekanan 1,5× kerja sesuai **ASME BPVC Section VIII**.
2. *Thermal performance test* sesuai standar **EN 12976** atau **ISO 9806** untuk storage efficiency.
3. Pengukuran *exergy efficiency*: $\eta_{ex} = 1 - \dot{Ex}_{loss}/\dot{Ex}_{in}$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit LHTES untuk Industri Kimia Skala Menengah

Ambil studi kasus sebuah pabrik *specialty chemicals* dengan kebutuhan termal:
- Kebutuhan uap proses 222°C: **$Q_{process} = 5$ MW_th** pada *peak load*.
- Profil harian: operasi 16 jam dengan fluktuasi $\pm 30\%$ akibat *batch scheduling*.
- HTHP rencana: COP rata-rata 3,2, $T_{out,HTHP} = 230°C$, $T_{in,HTF} = 210°C$.

**Parameter desain LHTES (shell-and-tube, vertikal):**

| Parameter | Nilai |
|---|---|
| PCM | Eutectic D-arabitol/Erythritol, $T_m = 222$°C |
| $L_{fus}$ | 246 kJ/kg |
| $\rho_{PCM}$ | 1180 kg/m³ |
| $\lambda_{PCM}$ | 0,35 W/(m·K) |
| $\lambda_{wall}$ (Al 6061) | 167 W/(m·K) |
| $D_i$ / $D_o$ tube | 50 mm / 60 mm |
| $L_{tube}$ | 3,0 m |
| $N_t$ | 240 tubes |
| HTF | Synthetic oil (Therminol 66), $\dot{m} = 28$ kg/s |
| $c_{p,HTF}$ | 2400 J/(kg·K) |
| $\lambda_{HTF}$ | 0,105 W/(m·K) |
| $Pr_{HTF}$ | 36 |
| $Re_{HTF}$ | $\approx 12.500$ |

### 4.2 Perhitungan Perpindahan Panas

**Langkah 1:** Faktor gesekan Darcy–Weisbach dari korelasi Gnielinski:

$$f = (0{,}790 \ln(12.500) - 1{,}64)^{-2} = (0{,}790 \cdot 9{,}433 - 1{,}64)^{-2} = (5{,}72)^{-2} \approx 0