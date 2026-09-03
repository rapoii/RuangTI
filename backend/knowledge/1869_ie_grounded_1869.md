# 1869 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dengan Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak tajam seiring transisi elektrifikasi kendaraan dan penetrasi teknologi baterai lithium-ion NMC (nickel-manganese-cobalt). Lebih dari 70% cadangan nikel dunia berupa bijih laterit, bukan sulfida, sehingga teknologi High-Pressure Acid Leaching (HPAL) menjadi tulang punggung produksi nikel dari bijih limonit dan saprolit kadar rendah. Dickson, Deleau, dan Espitalier ([DOI: 10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) menekankan bahwa meskipun HPAL menawarkan recovery nikel hingga 90–95%, proses ini menghadapi masalah operasional kronis berupa **autoclave scaling** — penumpukan kerak padat pada dinding reaktor yang menurunkan efisiensi perpindahan panas, meningkatkan konsumsi asam sulfat, dan memaksa shutdown pabrik setiap 30–90 hari.

Secara ekonomi, downtime akibat scaling di fasilitas HPAL industri (misalnya PT Halmahera Persada Lygend, Tsingshan, atau Coral Bay) menyebabkan kerugian hingga USD 2–5 juta per kejadian berdasarkan kapasitas 30.000 t Ni/yr. Kerak autoclave terbentuk terutama dari endapan besi (hematit $\alpha$-Fe₂O₃, jarosit), kalsium sulfat (anhidrit/gipsum), dan alumina-silika amorf yang mengkristal ketika larutan jenuh mengalami pendinginan depressurisasi. Andrameda, Triaswinanti, dan Madra ([DOI: 10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melengkapi perspektif ini dengan menunjukkan bahwa pre-treatment desulfurisasi bijih serta optimasi *roasting-reduction* terhadap residu HPAL mampu menurunkan kandungan sulfur dan besi terlarut yang menjadi prekursor scaling.

Urgensi rekayasa sistem industri pada konteks ini bukan sekadar aspek kimia metalurgi, melainkan menyentuh **reliability engineering**, **maintenance planning**, dan **proses pengambilan keputusan investasi CAPEX/OPEX**. Setiap 1% kenaikan availability autoclave berarti tambahan produksi nikel ratusan ton per tahun. Oleh karena itu, karakterisasi kuantitatif perilaku scaling — laju pertumbuhan, komposisi fasa, morfologi, serta variabel operasi yang mengendalikan — menjadi kebutuhan fundamental bagi insinyur teknik industri yang bertanggung jawab atas optimasi lini proses hidrometalurgi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Pelindian Asam

Pelindian nikel dari limonit laterit mengikuti kinetika *shrinking core* dengan difusi melalui lapisan produk dan reaksi permukaan yang dikendalikan oleh konsentrasi asam. Untuk partikel bijih berbentuk sphere, laju pelindian dimodelkan sebagai:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \cdot C_{H_2SO_4}^n \cdot t}{r_0^2 \cdot \rho_s}$$

di mana $\alpha$ adalah fraksi nikel terekstrak, $k_s$ adalah konstanta laju reaksi permukaan ($m \cdot s^{-1}$), $C_{H_2SO_4}$ adalah konsentrasi asam sulfat bebas (kg/m³), $n$ adalah orde reaksi parsial terhadap asam (umumnya 0,5–1,0 untuk laterit), $r_0$ adalah jari-jari awal partikel (m), $\rho_s$ adalah densitas bijih (kg/m³), dan $t$ adalah waktu pelindian (s).

Pengaruh suhu dimasukkan melalui persamaan Arrhenius:

$$k_s = k_0 \cdot \exp\!\left(-\frac{E_a}{R \cdot T}\right)$$

dengan energi aktivasi $E_a$ tipikal berkisar 45–80 kJ/mol untuk pelindian laterit, $T$ dalam Kelvin, dan $R = 8{,}314$ J/(mol·K). Dickson et al. ([DOI: 10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) melaporkan bahwa pada rentang 240–270 °C (513–543 K), laju pelindian naik secara eksponensial, namun bersamaan dengan itu laju nukleasi kerak juga naik karena super-saturation Fe³⁺.

### 2.2 Model Pembentukan Kerak (Scaling Rate)

Pertumbuhan kerak pada dinding autoclave dapat dimodelkan sebagai fungsi fluks massa species pembentuk kerak ke permukaan padat:

$$\frac{dm_{scale}}{dt} = k_m \cdot (C_{sat} - C_{bulk}) - k_{diss}$$

di mana $m_{scale}$ adalah massa kerak per satuan luas (kg/m²), $k_m$ adalah koefisien transfer massa (m/s), $C_{sat}$ adalah konsentrasi jenuh species pengendap, $C_{bulk}$ adalah konsentrasi di bulk solution, dan $k_{diss}$ adalah laju disolusi parsial. Untuk kerak berbasis hematit dan jarosit, $C_{sat}$ sangat tergantung pada pH, suhu, dan rasio Fe³⁺/SO₄²⁻.

Konsentrasi jenuh ion sulfat yang memicu presipitasi gipsum mengikuti konstanta kesetimbangan kelarutan:

$$K_{sp,CaSO_4} = [\text{Ca}^{2+}] \cdot [\text{SO}_4^{2-}] = 4{,}93 \times 10^{-5} \text{ (pada 250 °C)}$$

### 2.3 Neraca Massa dan Energi Autoclave

Untuk autoclave volume $V$ dengan laju alir umpan bijih pulp $F_p$ (kg/jam) dan konsentrasi umpan $C_{Ni,feed}$, neraca massa nikel stasioner:

$$F_p \cdot C_{Ni,feed} = F_p \cdot (1 - R_{tail}) \cdot C_{Ni,feed} + F_{PLS} \cdot C_{Ni,PLS} + \dot{m}_{scale}^{Ni}$$

Recovery nikel didefinisikan:

$$R_{Ni} = 1 - \frac{C_{Ni,tail} \cdot (1-R_{tail})}{C_{Ni,feed}}$$

Energi yang dibutuhkan untuk memanaskan pulp hingga suhu operasi $T_{op}$ dari suhu umpan $T_0$ dihitung sebagai:

$$Q = \dot{m}_{pulp} \cdot c_{p,pulp} \cdot (T_{op} - T_0) + \dot{m}_{vapor} \cdot \lambda_{vap}$$

di mana $c_{p,pulp} \approx 3{,}5$ kJ/(kg·K) dan $\lambda_{vap}$ adalah panas laten steam pada tekanan operasi (40–50 bar).

### 2.4 Model Pre-treatment Roasting-Reduction

Andrameda et al. ([DOI: 10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) memformulasikan efektivitas desulfurisasi melalui:

$$\eta_{desulf} = \frac{[S]_0 - [S]_t}{[S]_0} \times 100\%$$

dengan $[S]_0$ dan $[S]_t$ adalah konsentrasi sulfur awal dan setelah waktu roasting $t$. Kinetika desulfurisasi dimodelkan:

$$[S]_t = [S]_\infty + ([S]_0 - [S]_\infty) \cdot e^{-k_{desulf} \cdot t}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dengan Pre-treatment

Integrasi sistem industri HPAL modern mengikuti diagram alir berikut:

```
[Bijih Laterit] → [Crushing & Sizing] → [Slurry Mixing 90-95% solids]
        ↓
[Pre-heating (Flash Steam)] → [Autoclave HPAL 240-270°C, 40-50 bar]
        ↓
[Discharge & Cooling (Flash Tank)]
        ↓
[Counter-Current Decantation (CCD) Thickener]
        ↓
[Neutralisation & CCD Washing] → [Residue to Roasting-Reduction]
        ↓
[Precipitation NiS / MHP] → [Filtration & Drying]
```

### 3.2 SOP Karakterisasi Scaling (Merujuk Dickson et al. 2026)

1. **Sampling Coupons**: Pasang *coupon* baja tahan karat (316L) di dinding autoclave pada zona inlet, tengah, dan outlet selama operasi 30 hari.
2. **Pengukuran Massa**: Coupons dicuci, dikeringkan pada 105 °C selama 24 jam, lalu ditimbang untuk mendapatkan *areal scaling rate* (mg/(cm²·hari)).
3. **Karakterisasi Fasa**: Analisis XRD (X-Ray Diffraction) dengan software Rietveld refinement untuk komposisi kuantitatif fasa (hematit, jarosit, anhidrit, alunit).
4. **Morfologi**: SEM-EDS (Scanning Electron Microscopy – Energy Dispersive Spectroscopy) untuk memetakan distribusi elemen dan ketebalan lapisan kerak.
5. **Analisis Termal**: TGA-DSC untuk mengidentifikasi dekomposisi kerak pada suhu 200–800 °C dan entalpi reaksi.
6. **Pengujian Kelarutan**: Coupons direndam dalam larutan asam sulfat 50 g/L pada 60 °C untuk menentukan fraksi kerak yang dapat dihilangkan secara kimia (*acid-cleanable*).

### 3.3 SOP Pre-treatment Residu (Merujuk Andrameda et al. 2024)

1. **Persiapan Residu**: Residu HPAL dikeringkan dan digiling hingga 100% lolos 74 µm.
2. **Pencampuran dengan Agen Desulfurisasi**: Tambahkan CaO atau Na₂CO₃ pada stoikiometri rasio mol 1:1 terhadap S.
3. **Roasting-Reduction**: Furnace tube pada suhu 700–900 °C selama 60–120 menit dengan atmosfer N₂ atau CO/CO₂.
4. **Karakterisasi Produk**: XRD, XRF, dan analisis kimia leaching untuk recovery Ni dan Fe residual.
5. **Pengujian Scaled-down**: Larutkan produk hasil roasting dalam larutan simulasi PLS (pregnant leach solution) untuk mengevaluasi potensi scaling ulang.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus A: Estimasi Laju Scaling dan Downtime Autoclave

**Data Input** (referensi tipikal operasi HPAL limonit):
- Kapasitas autoclave: $V = 450$ m³
- Laju umpan pulp: $\dot{m}_{pulp} = 120$ t/jam
- Konsentrasi Ni umpan: $C_{Ni,feed} = 1{,}3\%$
- Recovery target: $R_{Ni} = 92\%$
- Suhu operasi: $T_{op} = 255$ °C = 528 K
- Tekanan operasi: $P = 42$ bar
- Areal scaling rate rata-rata (dari Dickson et al.): $r_{scale} = 0{,}8$ mg/(cm²·hari) = $8 \times 10^{-6}$ kg/(m²·hari)

**Perhitungan**:

Luas permukaan dalam autoclave (asumsi rasio tinggi/diameter 2,5):
$$A_{internal} = \pi \cdot D \cdot H \approx 2\pi \cdot r \cdot (2{,}5 \cdot 2r) = 5\pi r^2$$

Dengan $V = \pi r^2 H = 2{,}5 \pi r^3$, sehingga $r = (V/(2{,}5\pi))^{1/3} = (450/(7{,}854))^{1/3} = 3{,}86$ m. Maka:
$$A_{internal} = 5\pi (3{,}86)^2 = 234 \text{ m}^2$$

Akumulasi kerak per hari:
$$\dot{m}_{scale} = r_{scale} \cdot A_{internal} = 8 \times 10^{-6} \cdot 234 = 1{,}87 \times 10^{-3} \text{ t/hari}$$

Untuk ketebalan kerak kritis $h_{crit} =