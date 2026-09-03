# 2329 — Model Numerik Transien Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Toloza, J., Payá, J., & Barceló, F. (2026). *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*. Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Xu, Z., & Wang, R. (2024). *Prospects of heat pump for thermal energy decarbonization*. The Innovation Energy. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37% konsumsi energi final global dan hampir 24% emisi CO₂ langsung, di mana lebih dari separuh kebutuhan termal industri—mencakup proses pada rentang 150–400 °C—masih dipasok oleh pembakaran bahan bakar fosil (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Desentralisasi energi termal dan dekarbonisasi proses *low-to-medium temperature* mensyaratkan integrasi antara **High-Temperature Heat Pump (HTHP)** sebagai penyedia panas *upgrade* dari sumber ambient atau *waste heat*, dengan **Latent Heat Thermal Energy Storage (LHTES)** sebagai penyangga fluktuasi beban dan penyimpan energi *off-peak* untuk digunakan saat *peak demand* atau saat *coefficient of performance* (COP) pompa panas menurun.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa tantangan teknis utama LHTES adalah **konduktivitas termal PCM yang rendah** (umumnya 0,2–1,0 W/m·K untuk garam dan campuran eutektik), yang menghambat laju *charge/discharge* dan menurunkan *power density* unit penyimpanan. Untuk aplikasi HTHP pada suhu operasi di sekitar 222 °C—yang relevan dengan proses *dyeing*, *sterilization*, *food processing* pasteurisasi tinggi, dan *pressurized steam generation*—diperlukan geometri penukar panas yang kompak, kuat secara struktural, dan mampu menangani ekspansi volumetrik PCM saat perubahan fasa. Konfigurasi **shell-and-tube** menjadi pilihan dominan karena *form factor* silindrisnya yang mudah difabrikasi, kemampuannya menahan tekanan internal, dan kapasitasnya ditingkatkan secara modular dengan *fins*, *metal foams*, atau *nanoparticle-enhanced PCM* (Toloza et al., 2026).

Integrasi LHTES dengan HTHP memberikan nilai tambah strategis: (i) perataan profil beban listrik pompa panas (*load leveling*), (ii) peningkatan *dispatchability* energi termal, (iii) reduksi *oversizing* kapasitas HTHP, dan (iv) dekopling temporal antara *availability* waste heat dan *demand* proses. Dalam konteks dekarbonisasi, Xu dan Wang (2024) memproyeksikan bahwa kombinasi HTHP + LHTES pada suhu 200–300 °C berpotensi menggantikan 30–50% boiler gas industri di Uni Eropa dan Cina pada tahun 2040, dengan *levelized cost of heat* (LCOH) turun ke rentang 20–35 €/MWh.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Enthalpy untuk Perubahan Fasa

Model transien LHTES Toloza et al. (2026) menggunakan **enthalpy method** untuk mengatasi *moving interface* (Stefan problem) pada PCM eutektik. Persamaan konservasi energi dalam koordinat aksial-simetris silindris:

$$\rho c_p^{eff} \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k^{eff} r \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k^{eff} \frac{\partial T}{\partial z}\right) + \dot{q}_{HTF}$$

di mana kapasitas panas efektif didefinisikan sebagai:

$$c_p^{eff}(T) = c_p^s + \frac{L}{T_{liq}-T_{sol}} \cdot \mathbb{1}_{[T_{sol},\,T_{liq}]}(T) + c_p^l$$

dengan $L$ adalah **entalpi fasa latent** (J/kg), $T_{sol}$ dan $T_{liq}$ adalah suhu *solidus* dan *liquidus*, dan $\mathbb{1}$ adalah fungsi indikator. Pada paper Toloza et al. (2026), PCM eutektik yang digunakan memiliki $T_m \approx 222$ °C dengan $L \approx 180$–220 kJ/kg.

### 2.2 Neraca Energi pada Heat Transfer Fluid (HTF)

Untuk HTF yang mengalir di dalam tube inner (sisi *shell* berisi PCM), persamaan konservasi mengikuti model 1D *plug flow* dengan asumsi *thermal equilibrium* radial:

$$\rho_{HTF} A_c c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_{in} P_{in} (T_{PCM,\,r=R_{in}} - T_{HTF})$$

di mana $h_{in}$ adalah koefisien konveksi internal yang dihitung dari korelasi Dittus-Boelter untuk aliran turbulen (Re > 10 000):

$$Nu = 0.023\, Re^{0.8}\, Pr^{0.4}$$

atau Gnielinski untuk Re 2300–10⁶.

### 2.3 Kriteria Desain dan Kapasitas Penyimpanan

Kapasitas termal total unit LHTES:

$$Q_{tot} = m_{PCM} \left[ c_p^s (T_m - T_{sol}) + L + c_p^l (T_{liq} - T_m) \right]$$

*Volumetric energy density* (parameter kunci untuk sizing industri):

$$E_v = \rho_{PCM} \left[ c_p^s (T_m - T_{sol}) + L \right] \approx \rho_{PCM} \cdot L$$

Untuk PCM eutektik dengan $\rho_{PCM} \approx 1850$ kg/m³ dan $L = 200$ kJ/kg, $E_v \approx 370$ MJ/m³—sekitar 4–6× lebih tinggi dibanding *sensible water storage* pada rentang ΔT 50 K.

### 2.4 Kriteria Stabilitas Numerik Modelica

Implementasi Modelica menggunakan *discretization* metode volume hingga (*finite volume*) dengan *upwind scheme* untuk konveksi HTF dan *central differencing* untuk konduksi radial. Langkah waktu adaptif mengikuti *CFL*:

$$\Delta t \leq \frac{\Delta x}{u_{HTF}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Integrasi HTHP–LHTES

```
[Sumber: listrik + waste heat]
        ↓
   [HTHP Compressor]  ←→  [Kondenser @ 222°C]
        ↓                        ↓
   [Evaporator]        [LHTES Shell-and-Tube]
        ↓                        ↓
   [Sumber ambient/   [Proses Industri @ 200–250°C]
    waste heat]        
```

### 3.2 SOP Implementasi Industri

Tahap 1 – **Karakterisasi PCM**: Kalorimetri DSC untuk menentukan $T_m$, $L$, dan $c_p$; TGA untuk stabilitas termal pada 222 °C; siklus termal 500+ untuk *degradation testing* sesuai ASTM E1269 dan ISO 11357.

Tahap 2 – **Desain Shell-and-Tube**: Iterasi *trade-off* antara *tube diameter* (8–25 mm), *pitch* (1,25–1,5×D_o), dan *shell length* (1–3 m). *Effectiveness* NTU harus memenuhi:

$$\varepsilon = 1 - \exp\left[-NTU\,(1 + C_r)\right] \geq 0{,}85$$

dengan $NTU = UA/(C_{min})$ dan $C_r = C_{min}/C_{max}$.

Tahap 3 – **Simulasi Transien (Modelica)**: Validasi dengan eksperimen *step response* dan *cyclic charge/discharge* pada prototipe skala lab.

Tahap 4 – **Commissioning**: Uji integrasi HTHP-LHTES, verifikasi COP sistem, dan *soak test* 72 jam kontinu pada beban nominal.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Sebuah pabrik makanan di Eropa membutuhkan **8 jam pasokan uap proses** pada $T = 220$ °C, dengan *peak load* 1,2 MW dan *base load* 0,6 MW. Sistem dirancang menggunakan LHTES shell-and-tube berbasis eutektik nitrat (analog dengan Toloza et al., 2026) yang terintegrasi dengan HTHP bersumber *waste heat* dari kompresor refrigeration.

**Parameter desain:**

| Parameter | Nilai | Satuan |
|---|---|---|
| $T_m$ (PCM) | 222 | °C |
| $L$ (PCM) | 198 | kJ/kg |
| $\rho_{PCM}$ | 1850 | kg/m³ |
| $c_p^{PCM}$ | 1,55 | kJ/kg·K |
| $\dot{m}_{HTF}$ (sintetik oil) | 4,2 | kg/s |
| $T_{HTF,in}$ (charge) | 240 | °C |
| $T_{HTF,out}$ (discharge) | 215 | °C |
| Diameter tube inner $D_i$ | 16 | mm |
| Diameter tube outer $D_o$ | 19 | mm |
| Panjang tube $L_t$ | 2,8 | m |
| Jumlah tube $N_t$ | 96 | – |
| Shell ID | 380 | mm |

### 4.2 Perhitungan Kapasitas dan Dimensi

**Massa PCM** yang dibutuhkan untuk menyimpan energi 8 jam pada *average load* 0,9 MW:

$$E_{needed} = P \cdot t = 900 \text{ kW} \cdot 8 \cdot 3600 \text{ s} = 25{,}92 \text{ GJ}$$

Asumsi 90% *discharge efficiency* (Toloza et al., 2026):

$$m_{PCM} = \frac{E_{needed}}{\eta_{dis} \cdot L} = \frac{25{,}92 \times 10^9}{0{,}90 \times 198 \times 10^3} = 145{,}5 \text{ ton}$$

**Volume PCM** (mengisi shell volume di luar tubes):

$$V_{PCM} = \frac{\pi}{4}(D_{shell}^2 - N_t D_o^2) L_t = \frac{\pi}{4}(0{,}38^2 - 96 \cdot 0{,}019^2) \cdot 2{,}8$$

$$V_{PCM} = \frac{\pi}{4}(0{,}1444 - 0{,}0347) \cdot 2{,}8 = 0{,}2413 \text{ m}^3$$

Massa aktual = $0{,}2413 \cdot 1850 = 446{,}4$ kg per unit. Maka **jumlah unit** yang dibutuhkan:

$$N_{units} = \frac{145{,}5 \times 10^3}{446{,}4} \approx 326 \text{ unit} \rightarrow \text{di-bundle menjadi 4 modul } (80+80+80+86)$$

### 4.3 Analisis Laju Charge

Laju *charging* dihitung dari neraca energi sisi HTF (ΔT log-mean temperature difference, LMTD):

$$\Delta T_{lmtd} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1 / \Delta T_2)}$$

Pada *initial state* (PCM solid @ 200 °C, HTF in @ 240 °C):
- $\Delta T_1 = 240 - 200 = 40$ °C
- $\Delta T_2 = 240 - 222 = 18$ °C
- $\Delta T_{lmtd} = (40-18)/\ln(40/18) = 22/\ln(2{,}222) = 27{,}4$ °C

**Overall heat transfer coefficient** dengan *effective conductivity*

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
