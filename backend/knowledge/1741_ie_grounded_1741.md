# 1741 — Modul Perilaku Pembentukan Kerak (*Scaling*) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel sebagai logam kritis untuk baterai *lithium-ion* kendaraan listrik (EV), stainless steel, dan superalloy mendorong eksploitasi bijih nikel laterit secara masif. Lebih dari 70% cadangan nikel dunia berupa bijih laterit kadar rendah (*low-grade limonite*), yang tidak dapat diproses secara ekonomis melalui jalur pirometalurgi konvensional (seperti *smelting*) melainkan harus dileaching pada tekanan tinggi dan suhu tinggi dalam autoclave — yaitu proses **High-Pressure Acid Leaching (HPAL)**. Menurut Dickson, Deleau, dan Espitalier (2026), operasional HPAL berlangsung pada rentang suhu $240$–$270^{\circ}\text{C}$ dan tekanan total $30$–$50$ bar dengan media asam sulfat pekat, yang ditujukan untuk melarutkan nikel dan kobalt secara selektif sambil mempertahankan besi dan aluminium dalam bentuk endapan oksida-hidroksida (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan operasional paling kronis pada HPAL adalah **pembentukan kerak (*autoclave scaling*)** pada dinding bagian dalam reaktor, pipa transfer slurry, dan *flash tank*. Kerak ini terutama terdiri dari fase *goethite* yang telah bertransformasi menjadi *hematit* ($\alpha\text{-Fe}_2\text{O}_3$), *alunite/jointite*, *jarosite* ($\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$), *gipsum* ($\text{CaSO}_4\cdot 2\text{H}_2\text{O}$), dan silika hidrat amorf. Akumulasi kerak dapat mengurangi koefisien perpindahan panas dinding autoclave hingga 60–80%, memaksa *shut-down* unit selama 2–6 minggu setiap siklus pembersihan, menurunkan *overall plant availability* di bawah 85%, dan meningkatkan konsumsi spesifik asam sulfat sebesar 15–25%. Studi Andrameda, Triaswinanti, dan Madra (2024) menunjukkan bahwa residu HPAL yang kaya akan fasa besi sulfat masih mengandung sulfur hingga 4–8% berat dan memerlukan proses *roasting-reduction* lanjutan untuk daur ulang nikel residu (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Secara ekonomi, downtime autoclave pada pabrik HPAL berkapasitas 30.000–50.000 ton nikel混合 hydroxide per tahun dapat menimbulkan kerugian *opportunity cost* hingga **USD 8–12 juta per kejadian shutdown** berdasarkan *lost production* dan konsumsi reagen berlebih. Oleh karena itu, pemahaman kuantitatif atas mekanisme nukleasi, pertumbuhan, deposisi, dan karakterisasi fasa kerak menjadi agenda riset rekayasa industri yang sangat strategis untuk mendukung transisi energi global dan keberlanjutan rantai pasok baterai.

---

## 2. Landasan Teori & Formulasi Matematis

Perilaku pembentukan kerak dalam autoclave HPAL dapat dimodelkan melalui tiga persamaan governing: (i) kinetika presipitasi, (ii) neraca massa akumulasi, dan (iii) perpindahan panas efektif melalui lapisan kerak.

### 2.1 Kinetika Induksi dan Nukleasi Skala

Waktu induksi ($t_{\text{ind}}$) untuk onset presipitasi mengikuti model klasik Nielsen:

$$t_{\text{ind}} = A \cdot \exp\!\left(\frac{B}{T^{3} \Delta G^{*2}}\right)$$

dengan $A$ dan $B$ adalah konstanta empiris yang bergantung pada konsentrasi $\text{Fe}^{3+}$ bebas dan kekuatan ionik larutan, $T$ adalah suhu absolut (K), dan $\Delta G^{*}$ adalah *energy barrier* Gibbs untuk nukleasi homogen. Untuk sistem $\text{Fe}^{3+}$–$\text{H}_2\text{SO}_4$ pada $T = 543$ K, Dickson *et al.* (2026) melaporkan $t_{\text{ind}}$ berkisar antara $8$–$22$ menit tergantung rasio $\text{Fe}/\text{SO}_4$ dan konsentrasi padatan.

### 2.2 Laju Pertumbuhan Kerak (*Scaling Growth Rate*)

Laju pertumbuhan ketebalan kerak $\delta(t)$ mengikuti persamaan diferensial orde satu dengan pendekatan hukum Arrhenius:

$$\frac{d\delta}{dt} = k_{s,0} \exp\!\left(-\frac{E_a}{RT}\right) \cdot C_{\text{Fe}^{3+}}^{\,n}$$

dengan:
- $k_{s,0} = 2{,}4 \times 10^{6}\ \mu\text{m/s}\ (\text{constanta pre-eksponensial untuk } \alpha\text{-FeOOH/jarosite})$,
- $E_a = 78{,}4\ \text{kJ/mol}$ (energi aktivasi untuk transformasi goethite→hematit di lingkungan sulfat tinggi),
- $R = 8{,}314\ \text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$,
- $C_{\text{Fe}^{3+}}$ = konsentrasi besi(III) terlarut (g/L),
- $n = 1{,}4$ (orde reaksi terhadap $\text{Fe}^{3+}$ menurut Dickson *et al.*, 2026).

### 2.3 Model *Shrinking Core* untuk Pelindian Bijih

Reaksi pelindian partikel limonit mengikuti model inti menyusut (*shrinking unreacted core model*), di mana fraksi nikel terekstraksi $X_{\text{Ni}}(t)$ diberikan oleh:

$$1 - (1 - X_{\text{Ni}})^{1/3} = \frac{b \cdot k_s \cdot C_A}{\rho_p \cdot r_p} \cdot t$$

dengan $b$ adalah stoikiometri, $k_s$ koefisien transfer massa cairan (m/s), $C_A$ konsentrasi $\text{H}_2\text{SO}_4$ di *bulk* (mol/m³), $\rho_p$ densitas partikel (kg/m³), dan $r_p$ jari-jari awal partikel. Pada suhu 250°C dan ukuran partikel $d_{80} = 75\ \mu\text{m}$, $X_{\text{Ni}}$ tipikal setelah 60 menit = 0,92–0,95.

### 2.4 Resistansi Termal Komposit Kerak

Konduktivitas termal efektif dinding autoclave dengan lapisan kerak diberikan oleh model *series-parallel*:

$$\frac{1}{U_{\text{eff}}} = \frac{1}{h_i} + \frac{\delta_{w}}{k_w} + \frac{\delta_s}{k_s} + \frac{\delta_h}{k_h} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi sisi dalam dan luar; indeks $w$, $s$, $h$ berturut-turut merujuk pada baja, kerak sulfat, dan kerak oksida/hematit. Untuk kerak hematit kompak, $k_h \approx 0{,}7\ \text{W/m}\cdot\text{K}$, jauh lebih rendah daripada baja ($k_w \approx 16\ \text{W/m}\cdot\text{K}$), sehingga lapisan kerak 5 mm sudah dapat menurunkan fluks panas secara signifikan.

### 2.5 Neraca Massa Akumulasi Kerak

Laju akumulasi massa kerak di permukaan autoclave:

$$\dot{m}_s = \int_{0}^{t} \rho_{\text{scale}} \cdot A_{\text{wall}} \cdot \frac{d\delta}{dt}\, dt$$

dengan $A_{\text{wall}}$ adalah luas basah dinding yang terindikasi. Untuk autoclave 1800 m³ berdiameter $\sim 4{,}5$ m dan panjang 36 m, luas basah internal sekitar $560\ \text{m}^2$, menghasilkan deposit kerak tipikal $80$–$140\ \text{kg/jam}$ pada operasi *steady state* suhu puncak.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi kerak mengikuti prosedur berbasis *Plan–Do–Check–Act* (PDCA) yang dipadukan dengan *standard operating procedure* (SOP) ASTM D-1129 dan ISO 9001:2015. Tahapan utamanya:

### 3.1 Diagram Alir SOP Mitigasi Scaling HPAL

```
┌────────────────────────────────────────────────────┐
│ 1. PRE-STARTUP CHECK                               │
│   • Inspeksi dinding autoclave (UT-thickness)      │
│   • Sampling scale residual → XRD/XRF              │
│   • Validasi konsentrasi H2SO4 (titrasi)           │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│ 2. FEED PREPARATION                                │
│   • Pre-mixing slurry 8-12 wt% solids              │
│   • Pengaturan rasio Fe total / H2SO4 = 1,2-1,5   │
│   • Pemanasan awal di preheater 90-110°C           │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│ 3. HPAL LEACHING OPERATION                         │
│   • Ramp-up T: 110→255°C dalam 35-45 menit        │
│   • Tekanan operasi dijaga 42-45 bar               │
│   • Agitasi 4-blade retreat curve impeller 95 rpm  │
│   • Residence time total: 60-90 menit              │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│ 4. IN-PROCESS MONITORING                           │
│   • Inline pH/redox probe (Pt/Calomel)             │
│   • Sampling slurry setiap 15 menit → ICP-OES      │
│   • Wall temperature scanning (IR thermography)    │
│   • Pressure differential monitoring (ΔP)          │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│ 5. POST-RUN DESCALING & CHARACTERISATION          │
│   • Acid wash 5% H2SO4 + 0,3% inhibitor (flote)   │
│   • Mechanical descaling (hydrolasing 250 bar)    │
│   • Karakterisasi: SEM-EDS, XRD, TGA-DSC           │
│   • ΔT wall ≥ 12°C → schedule maintenance          │
└────────────────────────────────────────────────────┘
```

### 3.2 Tahapan Analitik Karakterisasi Kerak

Protokol karakterisasi yang diadopsi mengikuti prosedur Dickson *et al.* (2026):

1. **Pengambilan sampel** kerak dari zona *top*, *mid*, *bottom* autoclave menggunakan *pigtail sampler* stainless-steel 316L.
2. **Pengeringan vakum** pada $T = 60^{\circ}\text{C}$ selama 24 jam untuk mencegah transformasi fase *goethite*→*hematit* artefaktual.
3. **Analisis XRD** (Cu-K$\alpha$, $2\theta = 5$–$80^{\circ}$, step 0,02°) untuk identifikasi kuantitatif fasa dengan metode Rietveld.
5. **SEM-EDS mapping** pada sayatan melintang untuk distribusi elemen Fe, S, Ca, Al, Si.
6. **TGA-DSC** pada heating rate $10^{\circ}\text{C/min}$ di atmosfer $\text{N}_2$ untuk dekomposisi *jarosite* ($T_{\text{dec}} \approx 480^{\circ}\text{C