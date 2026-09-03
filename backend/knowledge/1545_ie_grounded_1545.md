# 1545 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Temperatur Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37% konsumsi energi final global, di mana lebih dari separuh kebutuhan tersebut merupakan panas proses (process heat) pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Decarbonisasi panas proses merupakan tantangan teknis dan ekonomis paling kompleks dalam transisi energi industri, karena hingga saat ini panas tingkat tinggi masih didominasi oleh pembakaran bahan bakar fosil (gas alam, batubara, dan minyak bakar). Dalam konteks dekarbonisasi tersebut, pompa panas temperatur tinggi (*High-Temperature Heat Pump*, HTHP) muncul sebagai teknologi elektrifikasi yang menjanjikan dengan *Coefficient of Performance* (COP) yang semakin kompetitif pada suhu output 150–250 °C.

Namun, efektivitas integrasi HTHP ke dalam lini proses industri menghadapi satu瓶颈 (*bottleneck*) mendasar: profil permintaan panas industri yang sangat fluktuatif dan tidak kontinu (batch process, shift operation), sedangkan operasi HTHP membutuhkan kondisi tunak (*steady-state*) untuk mempertahankan efisiensi kompresor. Solusi rekayasa yang paling elegan adalah pemasangan unit *Latent Heat Thermal Energy Storage* (LHTES) sebagai *buffer termal* antara HTHP dan beban proses. Inilah precisely the research gap yang dijawab oleh Toloza, Payá, dan Barceló (2026) dalam paper mereka di Eurotherm Seminar #119.

Paper tersebut secara eksplisit mengembangkan model numerik transient untuk unit LHTES *shell-and-tube* vertikal yang beroperasi pada suhu fasa perubahan (~222 °C) menggunakan bahasa pemodelan Modelica. Pemilihan suhu 222 °C bukan kebetulan—suhu ini berkorelasi langsung dengan titik lebur eutektik garam nitrat (misalnya KNO₃–NaNO₃) yang merupakan kelas PCM (*Phase Change Material*) paling mature untuk aplikasi industri suhu-tinggi karena kapasitas panas laten tinggi (~80–120 kJ/kg), stabilitas siklus termal yang baik (>1000 siklus), biaya relatif rendah, dan non-flammability (Toloza et al., 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Permasalahan utama yang melatarbelakangi riset ini adalah konduktivitas termal PCM yang rendah (umumnya 0,5–1,5 W/m·K untuk garam nitrat), sehingga laju pelepasan muatan (*discharge rate*) menjadi terbatas tanpa optimalisasi geometri penukar panas. Toloza et al. (2026) mengevaluasi konfigurasi *shell-and-tube* karena tiga atribut industrial-grade: kekompakan tinggi (volumetric energy density), robustness struktural untuk operasi ribuan siklus termal, dan kapasitas enhancement termal melalui pemasangan *fins* internal atau *metal wool*. Urgensi ekonominya jelas: storage unit yang dirancang dengan benar memungkinkan HTHP beroperasi pada titik desain optimalnya sepanjang waktu, sementara beban proses dilayani dari buffer termal saat demand peak—mengurangi kapasitas terpasang HTHP hingga 30–40% dan menurunkan LCOH (*Levelized Cost of Heat*) secara signifikan (Xu & Wang, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transient LHTES memerlukan penyelesaian persamaan konservasi energi yang coupled dengan front perubahan fasa. Dua pendekatan dominan dalam literatur adalah **metode kapasitas panas efektif** (*effective heat capacity method*) dan **metode entalpi-porositas** (*enthalpy-porosity method*). Toloza et al. (2026) memilih pendekatan enthalpy-based dalam Modelica untuk akurasi numerik pada geometri *shell-and-tube* 2D-aksisimetrik.

### 2.1 Persamaan Konservasi Energi (Bentuk Entalpi)

Untuk domain PCM (dengan asumsi *incompressible flow* di fasa cair dan Boussinesq approximation untuk natural convection):

$$\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) + \dot{q}_{conv}$$

di mana $h$ adalah entalpi spesifik, $\rho_{PCM}$ densitas, $k_{PCM}$ konduktivitas termal (fungsi suhu/fasa), dan $\dot{q}_{conv}$ adalah source term dari konveksi natural pada liquid mushy zone.

Hubungan entalpi-suhu untuk PCM mengikuti formulasi klasik:

$$h(T) = \int_{T_{ref}}^{T} c_p(T) \, dT + f_l(T) \cdot L$$

dengan $f_l(T)$ adalah fraksi liquid (*liquid fraction*) yang bervariasi dari 0 hingga 1 sepanjang interval fasa perubahan $[T_s, T_l]$, dan $L$ adalah panas laten.

### 2.2 Liquid Fraction Function

Model yang diadopsi Toloza et al. menggunakan *smoothing function* untuk menghindari diskontinuitas pada numerik:

$$f_l(T) = \begin{cases} 0 & T \leq T_s \\ \dfrac{T - T_s}{T_l - T_s} & T_s < T < T_l \\ 1 & T \geq T_l \end{cases}$$

Untuk menghindari numerical stiffness pada batas fasa, diterapkan regularisasi:

$$\tilde{f}_l(T) = \frac{1}{2}\left[1 + \tanh\left(\frac{T - T_m}{\delta T}\right)\right]$$

dengan $T_m = (T_s + T_l)/2$ dan $\delta T$ adalah parameter smoothing (umumnya 0,5–1 K).

### 2.3 Konveksi Alam pada Liquid Fraction

Natural convection dimodelkan melalui source term Darcy-like pada mushy zone dengan parameter *morphology* $A_{mush}$ (amortisasi konveksi pada solid/liquid interface):

$$\dot{q}_{conv} = -A_{mush} \cdot f_l \cdot \rho_{PCM} \cdot (\vec{v} \cdot \vec{g})$$

atau dalam formulasi beda hingga, koefisien perpindahan panas efektif selama pelelehan:

$$h_{eff} = h_{nc} \cdot (f_l)^{n}$$

dengan $n \approx 1.5$ untuk geometry shell-and-tube vertikal.

### 2.4 Persamaan Energi pada Heat Transfer Fluid (HTF)

Untuk sisi tube (HTF yang biasanya berupa udara, minyak termal, atau fluida siklik):

$$\rho_{HTF} c_{p,HTF} \left(\frac{\partial T_{HTF}}{\partial t} + u \frac{\partial T_{HTF}}{\partial x}\right) = k_{HTF} \nabla^2 T_{HTF}$$

### 2.5 Dimensi dan Parameter Non-Dimensional

Karakterisasi fenomena dikuantifikasi melalui bilangan tanpa dimensi:

**Bilangan Fourier:**
$$Fo = \frac{\alpha_{PCM} \cdot t}{R_{tube}^2}$$

**Bilangan Stefan:**
$$Ste = \frac{c_{p,PCM}(T_m - T_{init})}{L}$$

**Bilangan Biot:**
$$Bi = \frac{h_{HTF} \cdot R_{tube}}{k_{PCM}}$$

Untuk PCM garam nitrat, $Ste \approx 0{,}3$–$0{,}5$ menunjukkan bahwa *sensible heat* contribution non-negligible (Toloza et al., 2026).

### 2.6 Kapasitas Energi dan Efektivitas Unit

Kapasitas penyimpanan efektif:

$$Q_{storage} = \int_V \left[\rho_{PCM} \cdot (h(T) - h(T_{init}))\right] dV$$

Rasio discharge (energy extracted selama interval waktu $\Delta t_d$):

$$\eta_{discharge} = \frac{Q_{extracted}}{Q_{storage,max}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES-HTHP mengikuti kerangka sistematis berikut berdasarkan protokol Toloza et al. (2026):

### Langkah 1: Karakterisasi Beban Termal Industri

```mermaid
Peta Proses → Audit Energi → Profil Q̇(t), T_proses(t) → Identifikasi Window Decarbonisasi
```

Audit termal harus menghasilkan kurva durasi beban (*load duration curve*), puncak (*peak demand*), dan *base load* minimum—parameter ini menentukan sizing unit storage.

### Langkah 2: Seleksi PCM dan Geometri Shell-and-Tube

Kriteria pemilihan PCM:
- $T_m \in [T_{HTHP,out} - \Delta T_1, T_{HTHP,out}]$ dengan margin 5–10 K
- $L > 80$ kJ/kg, $\rho > 1500$ kg/m³ (volumetric density tinggi)
- Stabilitas > 2000 siklus, non-corrosive, non-toxic
- Untuk target 222 °C: eutektik KNO₃–NaNO₃ (Solar Salt modified)

### Langkah 3: Pemodelan Numerik di Modelica

Toloza et al. menggunakan *Dymola* dengan pustaka `HeatTransfer` dan `FluidHeatFlow`. Discretization spatial dilakukan pada mesh 2D-aksisimetrik dengan 5000–15000 elemen triangular, dengan refinement di sekitar dinding tube. Time-step adaptif $\Delta t \in [0{,}1; 10]$ s berdasarkan *Courant-Friedrichs-Lewy* condition.

### Langkah 4: Validasi Eksperimental

Validasi dilakukan dengan membandingkan prediksi numerik terhadap data eksperimental discharge/charge pada prototipe skala lab (misalnya 5–50 kWh kapasitas), menggunakan *Root Mean Square Error*:

$$RMSE = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(T_{sim,i} - T_{exp,i})^2}$$

Target akurasi: $RMSE < 2$ K untuk suhu PCM.

### Langkah 5: Integrasi dengan HTHP dan Sistem Kontrol

*Control logic* menggunakan strategi *Model Predictive Control* (MPC) dengan horizon prediksi 15–60 menit: state-of-charge (SoC) unit LHTES diprediksi, dan setpoint HTHP dioptimasi untuk mempertahankan SoC dalam rentang $[SoC_{min}, SoC_{max}]$ sambil memenuhi $Q_{demand}(t)$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Sistem HTHP-LHTES untuk Pabrik Pengeringan Makanan (Food Drying Industry)

**Spesifikasi desain (berdasarkan parameter paper Toloza et al., 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_m$ PCM | 222 | °C |
| $L$ (eutektik KNO₃–NaNO₃) | 110 | kJ/kg |
| $\rho_{PCM}$ | 1850 | kg/m³ |
| $k_{PCM,solid}$ | 0,55 | W/m·K |
| $k_{PCM,liquid}$ | 0,65 | W/m·K |
| $c_{p,PCM}$ | 1,55 | kJ/kg·K |
| $R_{tube,outer}$ | 0,025 | m |
| $R_{tube,inner}$ | 0,020 | m |
| Panjang tube $L$ | 3,0 | m |
| Jumlah tube $N$ | 40 | – |
| $T_{HTF,in}$ (charge) | 240 | °C |
| $T_{init}$ PCM | 210 | °C |

### Langkah 1: Massa dan Kapasitas Storage

Volume PCM (annulus antara shell dan tubes):
$$V_{PCM} = \pi (R_{shell}^2 - N \cdot R_{t,o}^2) \cdot L$$
Dengan $R_{shell} = 0{,}20$ m, $N = 40$:
$$V_{PCM} = \pi (0{,}04 - 40 \cdot 6{,}25 \times 10^{-4}) \cdot 3{,}0 = 0{,}1414 \text