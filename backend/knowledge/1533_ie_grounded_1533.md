# 1533 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit pada Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural akibat permintaan baterai kendaraan listrik (EV) yang diproyeksikan tumbuh pada CAGR 19,4% hingga 2030, dengan nikel kelas-battery (Ni>99,8%) sebagai material katoda NMC/NCA menjadi input kritis. Bijih nikel laterit—yang menyumbang ~70% cadangan nikel daratan global—memiliki tantangan metalurgi yang unik karena nikel terikat dalam struktur limonit (FeO(OH)·NiO(OH)) dan saprolit (Mg-Ni silikat), sehingga tidak dapat diekstraksi secara ekonomis melalui pirometalurgi konvensional. **High Pressure Acid Leaching (HPAL)** merupakan teknologi hidrometalurgi dominan yang memungkinkan ekstraksi Ni 90–95% dengan tingkat rejeksi Fe, Al, dan Cr yang tinggi, beroperasi pada suhu 240–270 °C dan tekanan 35–55 bar dalam autoclave titanium-clad (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun, permasalahan operasional paling signifikan yang menghambat keberlanjutan teknis-ekonomi proses HPAL adalah **autoclave scaling**—yaitu deposisi kerak anorganik pada dinding internal, pipa heat exchanger, dan impeller. Dickson dkk. (2026) melaporkan bahwa kehilangan throughput akibat shutdown descaling pada fasilitas HPAL komersial mencapai 4–8% dari total *available hours*, dengan biaya pemeliharaan tambahan USD 12–25 per ton bijih yang diolah. Komposisi kerak dominan adalah **hematit (Fe₂O₃), alunit/jarosit, gipsum (CaSO₄·2H₂O), dan alumina-silikat amorf**, yang terbentuk melalui mekanisme presipitasi retrograd, ko-presipitasi, dan deposisi partikel koloid. Andrameda dkk. (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) mengkonfirmasi bahwa residu HPAL pasca-roasting-reduction memiliki proporsi Fe-S dan Ca-S yang signifikan, yang mengindikasikan bahwa sulfur yang tidak tereduksi sempurna menjadi prekursor pembentukan kerak sulfat pada siklus operasional berikutnya. Urgensi industri ini menjadi semakin kritis ketika proyek-properton HPAL generasi ketiga di Indonesia (Halmahera, Sulawesi) dan Kaledonia Baru (Goro) menghadapi target kapasitas >50.000 ton Ni/tahun dengan *availability factor* >92%, yang mensyaratkan pengendalian kerak autoclave secara presisi dan prediktif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Model Arrhenius

Reaksi pelindian bijih laterit dalam autoclave HPAL mengikuti kinetika pseudo-homogen orde pertama terhadap konsentrasi H⁺ dan orde pecahan (n) terhadap konsentrasi Ni-bearing mineral:

$$-\frac{dC_{Ni}}{dt} = k \cdot C_{H^+}^m \cdot C_{Ni}^n$$

di mana konstanta laju ($k$) mengikuti persamaan Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ = faktor pre-eksponensial (menit⁻¹), $E_a$ = energi aktivasi (kJ/mol), $R$ = 8,314 J/(mol·K), dan $T$ = suhu absolut (K). Untuk bijih limonit-HPAL, Dickson dkk. (2026) melaporkan $E_a \approx 65–78$ kJ/mol, mengindikasikan regime *chemical reaction-controlled* pada suhu <260 °C dan transisi ke *diffusion-controlled* pada T >265 °C.

### 2.2 Termodinamika Pembentukan Kerak dan Saturasi

Deposisi kerak terjadi ketika indeks saturasi ($SI$) terhadap fasa padat melebihi nol:

$$SI = \log\left(\frac{IAP}{K_{sp}}\right)$$

di mana $IAP$ = *Ion Activity Product* dan $K_{sp}$ = konstanta kelarutan. Untuk kerak hematit:

$$IAP_{Fe_2O_3} = a_{Fe^{3+}}^2 \cdot a_{OH^-}^6$$

dan untuk gipsum:

$$IAP_{CaSO_4 \cdot 2H_2O} = a_{Ca^{2+}} \cdot a_{SO_4^{2-}} \cdot a_{H_2O}^2$$

Ketika $SI > 0$, nukleasi heterogen dominan pada substrat baja karbon atau Ti-grade 2 dinding autoclave, dengan laju deposisi:

$$r_d = \frac{dm_{scale}}{dt} = k_s \cdot (SI)^p \cdot \exp\left(-\frac{E_{nuc}}{R \cdot T}\right)$$

### 2.3 Fouling Resistance dan Penurunan Perpindahan Panas

Efek kerak terhadap koefisien perpindahan panas keseluruhan ($U$) diformulasikan sebagai resistansi fouling tambahan:

$$R_f = \frac{1}{U_{fouled}} - \frac{1}{U_{clean}}$$

Tebal kerak ekuivalen ($x_{eq}$) terkait dengan $R_f$ melalui konduktivitas termal kerak ($\lambda_{scale} \approx 0,8–1,5$ W/(m·K)):

$$x_{eq} = R_f \cdot \lambda_{scale} = \frac{\lambda_{scale}}{U_{fouled}} - \frac{\lambda_{scale}}{U_{clean}}$$

Untuk mempertahankan duty perpindahan panas $Q$ konstan, dibutuhkan kenaikan $\Delta T$ efektif:

$$Q = U \cdot A \cdot \Delta T_{LMTD} \implies \Delta T_{LMTD}^{fouled} = \Delta T_{LMTD}^{clean} \cdot \left(1 + R_f \cdot U_{clean}\right)$$

### 2.4 Model Populasi Balans untuk Pertumbuhan Kerak

Distribusi ukuran kristal kerak dimodelkan menggunakan *Population Balance Equation* (PBE):

$$\frac{\partial n(L,t)}{\partial t} + \frac{\partial}{\partial L}\left[G(L,T) \cdot n(L,t)\right] = B_{nuc}(T) - D_{agg}(L,t)$$

di mana $n(L,t)$ = densitas populasi ukuran kristal, $G$ = laju pertumbuhan (m/s), $B_{nuc}$ = laju nukleasi, dan $D_{agg}$ = terms agregasi-fragmentasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Titik Kritis Scaling

Diagram alir proses HPAL mengacu pada konfigurasi Dickson dkk. (2026) sebagai berikut:

```
[Bijih Laterit] → [Repulping + Slurry Mixing] 
    → [Pre-heating (Shell & Tube, 90→150 °C)] 
    → [Autoclave Stage 1 (T=250°C, P=45 bar, τ=20 min)]
    → [Autoclave Stage 2 (T=265°C, P=50 bar, τ=40 min)]
    → [Flash Cooling (3-stage)] 
    → [CCD Counter-current Decantation]
    → [Neutralization & CCD Washing] → [Precipitation Ni(OH)₂/MSP]
```

**Titik kritis pembentukan kerak** teridentifikasi pada: (i) zona transisi pre-heater menuju autoclave inlet, (ii) dinding antar-kompartemen autoclave, dan (iii) discharge line pasca-flash (Dickson dkk., 2026).

### 3.2 SOP Pengendalian Scaling

| Tahapan | Aksi Teknis | Parameter Kendali | Frekuensi |
|---------|-------------|-------------------|-----------|
| **Pre-operasional** | Acid washing 5% H₂SO₄ + inhibitor | T=60°C, τ=4 jam | Setiap 30 siklus |
| **Operasional** | Kontrol rasio Fe³⁺/Fe²⁺ >1,5 dan pH slurry 1,2–1,5 | In-line ORP probe | Kontinyu |
| **Shutdown terjadwal** | Descaling mekanis high-pressure water jet (300 bar) | Inspeksi ketebalan kerak | Tiap 90 hari |
| **Monitoring** | Online coupon corrosion-scaling probe + IoT telemetry | Ketebalan <3 mm | Real-time |

### 3.3 Integrasi dengan Proses Roasting-Reduction

Andrameda dkk. (2024) menunjukkan bahwa tahap *roasting-reduction* residu HPAL pada 800–1000 °C dengan agen desulfurisasi (Na₂CO₃ atau CaO) mampu menurunkan sulfur residu 4,2% → 0,6%, sehingga secara substansial mengurangi prekursor sulfat dalam umpan balik autoclave. Variabel proses optimal yang diidentifikasi: suhu 900 °C, waktu reduksi 60 menit, dan rasio mol CaO/S = 2,5:1, menghasilkan recovery Fe-Ni >88% dengan emisi SO₂ <50 mg/Nm³.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Pabrik HPAL Acuan

Berdasarkan spesifikasi Dickson dkk. (2026) untuk fasilitas komersial 40.000 ton Ni/tahun:

- Kapasitas umpan slurry: $M_{slurry} = 850$ ton/jam
- Konsentrasi solid: $C_{solid} = 42\%$ (w/w)
- Komposisi feed: Ni = 1,25%, Fe = 38%, MgO = 8%, Al₂O₃ = 4,5%
- Suhu operasi: $T = 265°C = 538$ K
- Tekanan: $P = 50$ bar
- Asam sulfat: 220 g/L
- Volume autoclave: $V = 3.200$ m³ (6 kompartemen)

### 4.2 Perhitungan Kinetika Ekstraksi Nikel

Konstanta laju pada T = 538 K dengan asumsi $E_a = 72$ kJ/mol dan $k_{ref} = 0,018$ min⁻¹ pada $T_{ref} = 523$ K:

$$k_{538} = 0,018 \cdot \exp\left[\frac{72.000}{8,314}\left(\frac{1}{523} - \frac{1}{538}\right)\right]$$

$$= 0,018 \cdot \exp\left[8660 \cdot (1,912 \times 10^{-3} - 1,859 \times 10^{-3})\right]$$

$$= 0,018 \cdot \exp(0,459) = 0,018 \cdot 1,583 = 0,0285 \text{ min}^{-1}$$

Untuk residence time $\tau = 60$ menit, konversi Ni:

$$X_{Ni} = 1 - \exp(-k \cdot \tau) = 1 - \exp(-0,0285 \cdot 60) = 1 - \exp(-1,71) = 1 - 0,180 = 0,820$$

Untuk desain multi-stage dengan 6 kompartemen dan perpindahan接近 plug-flow, konversi kumulatif:

$$X_{overall} = 1 - (1 - X_i)^{N} = 1 - (1 - 0,82)^{...} \rightarrow X_{overall} \approx 0{,}953$$

menghasilkan produksi Ni harian:

$$m_{Ni} = 850.000 \text{ kg/jam} \times 0{,}42 \times 0{,}0125 \times 0{,}953 = 4.253 \text{ kg Ni/jam}$$

###