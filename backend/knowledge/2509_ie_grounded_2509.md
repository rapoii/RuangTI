# 2509 — Perilaku dan Karakteristik Pembentukan Kerak (Scaling) pada Autoclave selama Pelindian Bijih Nikel Laterit dengan Proses HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah meningkat eksponensial seiring akselerasi transisi energi elektrifikasi kendaraan dan penyimpanan energi stasioner. Lebih dari 70% cadangan nikel dunia tersimpan dalam bijih laterit (limonit dan saprolit), sedangkan bijih sulfida yang konvensional semakin habis. Kondisi ini menjadikan proses **High-Pressure Acid Leaching (HPAL)** sebagai teknologi strategis yang wajib dikuasai oleh insinyur Teknik Industri di sektor metalurgi basah. Dickson, Deleau, dan Espitalier (2026) menyoroti bahwa operasi HPAL — yang berlangsung pada suhu 240–270 °C dengan tekanan total 35–55 bar dalam autoclave titanium-clad — menghadapi tantangan operasional kronis berupa **pembentukan kerak (*scaling*)** pada dinding dalam, impeller, dan pipa penukar panas. Menurut Dickson et al. (2026), skala kerak tersebut dapat menurunkan koefisien perpindahan panas sebesar 30–60% dan meningkatkan konsumsi asam sulfat spesifik melebihi ambang batas desain 350–400 kg H₂SO₄ per ton bijih kering, sehingga menurunkan *overall equipment effectiveness* (OEE) unit HPAL hingga di bawah 75%.

Secara paralel, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* mengevaluasi integrasi tahap **pra-perlakuan *roasting-reduction* dan desulfurisasi** terhadap residu HPAL sebagai strategi *front-end* untuk mengurangi beban pengotor (khususnya sulfur, Fe, dan Al) yang menjadi prekursor kerak sekunder. Kombinasi pemahaman perilaku kerak *in-situ* (Dickson et al., 2026) dan modifikasi umpan (Andrameda et al., 2024) menjadi kerangka engineering yang krusial untuk industri hidrometalurgi nikel di Indonesia, yang telah mengoperasikan beberapa unit HPAL seperti di Halmahera, Morowali, dan Sulawesi Tenggara dengan total kapasitas desain >200.000 ton Ni per tahun.

Urgensi ekonominya nyata: setiap 1 mm kerak hematit/jarosit dapat menambah biaya energi termal setara 4–6 USD per ton bijih terolah dan menurunkan *uptime* autoclave rata-rata 8–12 hari/tahun. Kerak juga memicu *thermal hotspot*, korosi galvanik, dan *unscheduled shutdown* yang merugikan hingga jutaan USD per kejadian. Oleh sebab itu, kemampuan memodelkan kinetika pembentukan kerak, mengkarakterisasi fasanya, dan merancang SOP *acid boil-out* menjadi kompetensi wajib perekayasa proses industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Kinetika Pembentukan Kerak

Model **shrinking-core** (model inti mengecil) digunakan untuk laju pelindian partikel laterit:

$$1 - (1-X)^{1/3} = \frac{k_c \cdot C_A^{n}}{\rho_p \cdot r_p} \cdot t$$

di mana $X$ adalah fraksi konversi nikel, $k_c$ konstanta laju (m/s), $C_A$ konsentrasi asam sulfat bebas (kg/m³), $n$ orde reaksi (umumnya 0,5–1), $\rho_p$ densitas partikel, $r_p$ jari-jari awal. Laju pertumbuhan kerak di permukaan autoclave mengikuti hukum **laju nukleasi-kristalisasi klasik** Turnbull & Bagdassarian yang dimodifikasi untuk kondisi *sub-cooled boiling*:

$$J = J_0 \cdot \exp\!\left(-\frac{\Delta G^*}{k_B T}\right) \cdot \exp\!\left(-\frac{Q_d}{k_B T}\right)$$

dengan $\Delta G^* = \frac{16\pi\sigma^3 v_m^2}{3(k_B T \ln S)^2}$ adalah energi kritis Gibbs untuk nukleasi homogen, $\sigma$ tegangan permukaan (J/m²), $v_m$ volume molar, $S = C/C^*$ *supersaturation ratio*, dan $Q_d$ energi aktivasi difusi.

### 2.2 Arrhenius dan Kinetika Heterogen

Untuk reaksi oksidhidrolisis Fe(III) → Fe₂O₃·xH₂O yang membentuk kerak utama:

$$k_{\text{scale}} = A_{\text{pre}} \cdot \exp\!\left(-\frac{E_a}{R T}\right)$$

Dickson et al. (2026) melaporkan $E_a = 78{,}5 \pm 3{,}2$ kJ/mol untuk pengendapan hematit dan $E_a = 65{,}1$ kJ/mol untuk jarosit Na/K pada rentang T = 513–543 K.

### 2.3 Perpindahan Panas dengan Resistansi Kerak

Laju perpindahan panasoverall dengan adanya resistansi fouling $R_f$ (m²·K/W):

$$\frac{1}{U_{\text{clean}}} = \frac{1}{h_i} + \frac{\delta_w}{k_w} + \frac{1}{h_o}$$

$$\frac{1}{U_{\text{fouled}}} = \frac{1}{U_{\text{clean}}} + R_f$$

Ketebalan kerak berkembang menurut hukum *asymptotic fouling* Kern-Seaton:

$$\delta_f(t) = \delta_f^* \left[1 - \exp(-k_r t)\right]$$

dengan $\delta_f^*$ ketebalan keseimbangan, $k_r$ konstanta peluruhan deposisi, $t$ waktu operasi (jam).

### 2.4 Model Kesetimbangan Massa Pengotor

Mass balance komprehensif umpan Fe/Al/Mg/S ke autoclave mengikuti:

$$\sum_{i \in \text{impurities}} \nu_i \cdot [M_i^{n+}]_0 \cdot \dot{m}_{\text{ore}} = \dot{m}_{\text{scale}} + \dot{m}_{\text{diss}} + \dot{m}_{\text{reject}}$$

Andrameda et al. (2024) menunjukkan bahwa desulfurisasi awal dengan Na₂CO₃ atau Ca(OH)₂ pada T = 600–750 °C mampu mereduksi konsentrasi S umpan hingga 78%, menurunkan potensi pengendapan jarosit dan alunit yang menjadi kerak terburuk pada baffle autoclave.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Mitigasi Kerak

```
Umpan Bijih Laterit (saprolit/limonit)
         │
         ▼
[Pre-treatment: Desulfurisasi & Roasting-Reduction]
         │ (Andrameda et al., 2024)
         ▼
Pulp Slurry Mixing (solids 28–35%, H₂SO₄ 30–55 g/L)
         │
         ▼
[Autoclave Multi-kompartemen] ──► Sampling kerak *in-situ*
         │  (245–270 °C, 40–55 bar, τ = 60–90 min)
         ▼
[Flash Cooling & Counter-current Decantation]
         │
         ▼
[Neutralisasi & CCD Tailings]      [Precipitation Ni/Co]
```

### 3.2 SOP Karakterisasi Kerak (Dickson et al., 2026)

1. **Shutdown terkontrol** dengan depresurisasi bertahap (rate ≤ 2 bar/menit untuk cegah *thermal shock*).
2. **Pengambilan sampel coupon** pada posisi kritis: *baffle*, *impeller tip*, *downcomer*, dan dinding bawah kompartemen 1, 3, 6.
3. **Karakterisasi multi-skala**:
   - **XRD (X-Ray Diffraction)** untuk identifikasi fase: hematit $\alpha$-Fe₂O₃, jarosit $\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$, alunit $\text{KAl}_3(\text{SO}_4)_2(\text{OH})_6$, gypsum $\text{CaSO}_4 \cdot 2\text{H}_2\text{O}$, dan silika amorf $\text{SiO}_2 \cdot n\text{H}_2\text{O}$.
   - **SEM-EDS** untuk morfologi, ketebalan strata, dan distribusi elemen.
   - **TGA-DSC** untuk stabilitas termal dan kadar air kristal.
4. **Pengukuran profil kekerasan Vickers (HV)** sebagai proksi kekompakan kerak.

### 3.3 SOP *Acid Boil-Out* dan Pembersihan

- Sirkulasi larutan **H₂SO₄ 8–12%** pada T = 90–110 °C selama 6–12 jam dengan inhibitor korosi.
- **Mekanis**: *high-pressure water jet* (200–350 bar) untuk kerak keras hematit/jarosit.
- **Validasi**: pengukuran $R_f$ pasca-pembersihan harus ≤ 0,00015 m²·K/W agar memenuhi desain ulang.

### 3.4 Standar Industri dan Kepatuhan

Mengacu pada **ASME BPVC Section VIII** untuk vessel bertekanan, **NACE MR0175** untuk material tahan korosi (titanium Grade 2/12), dan ISO 9001:2015 untuk dokumentasi operasional. SOP wajib memasukkan aspek **HSE**: monitoring H₂S (< 10 ppm TLV) dan paparan asam (< 1 mg/m³ TWA).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Hipotetis Unit HPAL 50.000 ton Ni/tahun

| Parameter | Nilai | Satuan |
|---|---|---|
| Laju umpan bijih kering $\dot{m}_{\text{ore}}$ | 420 | t/jam |
| Konsentrasi Fe total dalam umpan | 28,5 | %wt |
| Konsentrasi Al | 4,2 | %wt |
| Konsentrasi Mg | 5,8 | %wt |
| Konsentrasi S umpan | 1,9 | %wt |
| Suhu operasi $T$ | 258 | °C (= 531 K) |
| Tekanan operasi $P$ | 45 | bar |
| Konsentrasi H₂SO₄ bebas target | 35 | g/L |
| Diameter autoclave $D$ | 4,2 | m |
| Panjang autoclave $L$ | 32 | m |

### 4.2 Perhitungan Laju Pertumbuhan Kerak

Menggunakan persamaan **Kern-Seaton** dengan parameter Dickson et al. (2026) untuk hematit dominan:
- $\delta_f^* = 4{,}8$ mm (ketebalan keseimbangan)
- $k_r = 0{,}0085$ /jam

Setelah operasi kontinyu selama 30 hari = 720 jam:

$$\delta_f(720) = 4{,}8 \cdot \left[1 - e^{-0{,}0085 \cdot 720}\right] = 4{,}8 \cdot (1 - e^{-6{,}12}) = 4{,}8 \cdot 0{,}9978 = 4{,}79 \text{ mm}$$

Artinya kerak praktis mencapai ketebalan terminal dalam satu bulan, konsisten dengan laporan Dickson et al. (2026).

### 4.3 Perhitungan Penurunan Koefisien Perpindahan Panas

Misal: $h_i = 8500$ W/m²·K (film slurry dalam), $h_o = 1100$ W/m²·K (steam jacket), $k_w = 17$ W/m·K (dinding Ti), $\delta_w = 0{,}012$ m.

Tanpa kerak:

$$\frac{1}{U_{\text{clean}}} = \frac{1}{8500} + \frac{0{,}012}{17} + \frac{1}{1100} = 1{,}176\times10^{-4} + 7{,}059\times10^{-4} +