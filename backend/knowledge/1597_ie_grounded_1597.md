# 1597 — Perilaku dan Karakteristik Kerak Autoclave pada Pelindian Bijih Nikel Laterit dengan Proses HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) mengalami eskalasi tajam seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi skala grid. Lebih dari 60% cadangan nikel dunia terkandung dalam bijih laterit, yang tidak dapat diproses secara ekonomis melalui smelting pirometalurgi konvensional melainkan memerlukan teknologi hidrometalurgi **High-Pressure Acid Leaching (HPAL)**. Proses HPAL beroperasi pada suhu 240–270 °C dan tekanan 35–45 bar dalam autoclave horizontal multi-kompartemen dengan agitasi mekanis, menggunakan asam sulfat pekat untuk melindi (leach) nikel, kobalt, dan logam ikutan dari matriks laterit limonitik/saprolitik.

Namun demikian, operasional HPAL menghadapi tantangan kritis berupa **kerak (scaling)** pada dinding internal, impeller, dan pipa transfer antar-kompartemen autoclave. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* menjelaskan bahwa kerak terbentuk melalui mekanisme presipitasi senyawa besi(III) sulfat, aluminium hidroksisulfat, dan silika yang mengalami polimerisasi pada permukaan logam. Akumulasi kerak hingga ketebalan beberapa milimeter dalam siklus produksi tunggal mampu menurunkan koefisien perpindahan panas autoclave sebesar 25–40%, meningkatkan konsumsi asam spesifik (kg H₂SO₄/ton bijih), serta memaksa *unplanned shutdown* untuk *de-scaling* mekanis yang menimbulkan *production loss* 5–15% per tahun kalender. Andrameda dkk. (2024) melalui eksperimen *roasting-reduction* residu HPAL menunjukkan bahwa agen desulfurisasi dan suhu kalsinasi yang tidak terkontrol akan memperparah komposisi kerak yang kaya akan *basic ferric sulfate* ($\text{FeOHSO}_4$) dan *jarosite* ($\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$), yang memiliki kekerasan Mohs 3,5–4,0 dan kelarutan balik sangat rendah dalam larutan asam encer. Secara ekonomi, downtime akibat kerak di pabrik HPAL kelas dunia (seperti PT Halmahera Persada Lygend, Coral Bay, atau Ramu NiCo) berpotensi menimbulkan kerugian *opportunity cost* hingga USD 8–12 juta per kejadian shutdown darurat, sehingga pemahaman perilaku dan karakteristik kerak menjadi kebutuhan strategis dalam rekayasa proses, penjadwalan pemeliharaan, dan desain autoclave generasi baru.

Kajian ini menjadi semakin relevan ketika standar emisi dan efisiensi sumber daya semakin ketat, dimana pendekatan *cleaner production* menuntut minimasi waste, optimasi daur ulang asam, dan perpanjangan *campaign time* autoclave dari rata-rata 60 hari menjadi 120–180 hari per siklus *acid wash*. Integrasi antara karakterisasi material kerak dengan model kinetika pelindian dan perpindahan panas menjadi pilar utama dalam meningkatkan *overall equipment effectiveness* (OEE) fasilitas HPAL.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Model Inti Mengecil (Shrinking Core Model)

Pelindian partikel bijih laterit dalam autoclave HPAL umumnya dimodelkan dengan **shrinking core model** yang mempertimbangkan difusi melalui lapisan *ash* dan reaksi kimia antarmuka. Untuk reaksi pelindian nikel dari forsterit/goethite:

$$\text{NiO}_{(s)} + \text{H}_2\text{SO}_{4(aq)} \rightarrow \text{NiSO}_{4(aq)} + \text{H}_2\text{O}_{(l)}$$

Persamaan laju reaksi untuk kontrol difusi melalui lapisan produk menurut Levenspiel adalah:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{2 D_e C_{A,b}}{\rho_B r_p^2} \cdot t$$

dengan $\alpha$ adalah konversi fraksional Ni, $D_e$ koefisien difusi efektif (m²/s), $C_{A,b}$ konsentrasi asam sulfat bulk (kg/m³), $\rho_B$ densitas unggul bijih (kg/m³), $r_p$ jari-jari awal partikel (m), dan $t$ waktu pelindian (s).

Untuk kontrol reaksi kimia antarmuka:

$$1 - (1-\alpha)^{1/3} = \frac{k_s C_{A,b}}{\rho_B r_p} \cdot t$$

dengan $k_s$ konstanta laju reaksi antarmuka (m/s). Parameter kinetika ini sangat dipengaruhi oleh suhu menurut **persamaan Arrhenius**:

$$k = A \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ energi aktivasi (J/mol), $R$ konstanta gas universal (8,314 J/mol·K), $T$ suhu absolut (K), dan $A$ faktor pre-eksponensial.

### 2.2 Mekanisme Pembentukan dan Pertumbuhan Kerak

Pertumbuhan kerak di permukaan dalam autoclave mengikuti **model parabolic scaling law** ketika dikontrol oleh difusi ion melalui lapisan kerak yang sudah terbentuk:

$$\delta^2 = 2 k_d (C_s - C_b) \cdot t$$

dengan $\delta$ ketebalan kerak (m), $k_d$ koefisien difusi dalam kerak (m²/s), $C_s$ konsentrasi jenuh solute di antarmuka larutan-kerak, dan $C_b$ konsentrasi bulk. Untuk kerak yang dikontrol oleh reaksi permukaan (kimia), hukum linier berlaku:

$$\delta = k_r (C_s - C_b) \cdot t$$

Dickson dkk. (2026) mengidentifikasi tiga zona komposisi kerak: (i) lapisan luar kaya *basic ferric sulfate* $\text{FeOHSO}_4$ dengan porositas 12–18%, (ii) lapisan tengah *hematit* ($\alpha$-Fe₂O₃) dengan porositas 4–7%, dan (iii) lapisan dasar tipis aluminium hidroksisulfat yang berperan sebagai *bonding layer* ke baja karbon autoclave.

### 2.3 Neraca Massa dan Konsentrasi Asam

Konsumsi asam spesifik ditentukan oleh neraca stoikiometri semua komponen yang melindi:

$$m_{\text{H}_2\text{SO}_4} = \sum_i \nu_i \frac{m_{\text{ore}} \cdot w_i \cdot \eta_i}{M_i}$$

dengan $\nu_i$ koefisien stoikiometri asam per mol logam $i$, $w_i$ kadar logam dalam bijih (fraksi massa), $\eta_i$ efisiensi pelindian, dan $M_i$ massa molar logam. Untuk bijih laterit tipikal dengan komposisi Fe 38%, Ni 1,2%, Al 4,5%, Mg 5,0%, konsumsi asam didominasi oleh besi dan aluminium, mencapai 380–450 kg H₂SO₄ per ton bijih.

### 2.4 Perpindahan Panas dan Dampak Kerak

Koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*) pada autoclave bersirip berkurang dengan adanya kerak:

$$\frac{1}{U_o} = \frac{1}{h_i} + \frac{\delta_m}{k_m} + \frac{\delta_s}{k_s} + \frac{1}{h_o}$$

dengan $h_i$ dan $h_o$ koefisien konveksi sisi dalam dan luar (W/m²·K), $\delta_m, k_m$ ketebalan dan konduktivitas dinding logam, serta $\delta_s, k_s$ ketebalan dan konduktivitas kerak. Konduktivitas termal kerak *hematit* tipikal hanya 0,8–1,2 W/m·K, jauh lebih rendah dibanding baja karbon (45 W/m·K), sehingga lapisan kerak 5 mm menurunkan $U_o$ hingga 35–50%.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dan Manajemen Kerak

```
┌─────────────────────────────────────────────────────────────┐
│   PENGUMPAN BIJIH LATERIT → CRUSHER & ORE SLURRY PREP      │
└────────────────────────────┬────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────┐
│   AUTOCLAVE HPAL (240-270°C, 35-45 bar, 4-6 kompartemen)   │
│   ├─ Kompartemen 1-2: Pelindian utama (high acid)          │
│   ├─ Kompartemen 3-4: Pelindian lanjutan + counter-current  │
│   └─ Kompartemen 5-6: Disengagement & cooling               │
└────────────────────────────┬────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────┐
│   COOLING & FLASH → CCD (Counter Current Decantation)       │
└────────────────────────────┬────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────┐
│   NEUTRALISASI & MSP/MHP PRECIPITATION                      │
└────────────────────────────┬────────────────────────────────┘
                             ▼
                    PRODUK Ni/Co SULFAT
```

### 3.2 SOP Karakterisasi Kerak (Berdasarkan Dickson dkk., 2026)

1. **Sampling Kerak**: Pengambilan sampel pada permukaan autoclave saat *turnaround* menggunakan scraper stainless pada 5–7 titik radial per kompartemen.
2. **Analisis Komposisi Kimia**: Digesti asam dalam microwave (HCl + HNO₃ + HF), kemudian analisis dengan **ICP-OES** untuk Fe, Al, Ni, Mg, Si, K, Na, Cr; serta **Leco CS-230** untuk karbon dan sulfur.
3. **Analisis Fasa Mineral**: **XRD (X-Ray Diffraction)** dengan radiasi Cu-Kα ($\lambda = 1{,}5406$ Å) pada sudut 2θ = 5°–80°, step size 0,02°, diidentifikasi melalui database ICDD PDF-4+.
4. **Mikrostruktur dan Morfologi**: **SEM-EDS** pada perbesaran 100×–10.000× untuk観察 morfologi kristal dan distribusi elemental.
5. **Analisis Termal**: **TGA-DSC** pada laju pemanasan 10 °C/min dalam atmosfer N₂ dari 25–1000 °C untuk menentukan stabilitas termal kerak dan identifikasi dekomposisi *basic ferric sulfate*.
6. **Pengujian Mekanik**: Pengukuran kekerasan Vickers (HV) pada penampang melintang dengan beban 0,5–5 kgf.

### 3.3 Prosedur *Acid Wash* dan Pencegahan Kerak

Andrameda dkk. (2024) menekankan pentingnya kontrol parameter *roasting-reduction* pada suhu 600–900 °C untuk menghasilkan residu besi yang inert secara kimia. Dalam operasional HPAL, mitigasi kerak dilakukan melalui:

- **Acid wash terjadwal**: Siklus pencucian dengan larutan H₂SO₄ 5–10% pada suhu 80–90 °C selama 8–12 jam untuk melarutkan kerak *basic ferric sulfate* dan *jarosite*.
- **Kontrol parameter operasi**: Menjaga rasio Fe³⁺/Fe²⁺ > 1,5 di kompartemen akhir untuk mencegah deposisi ferrous monosulfate.
- **Aditif anti-scaling**: Dosis rendah polimer akrilat (5–15 ppm) atau fosfonat untuk mengganggu nukleasi kristal.
- **Material upgrade**: Penggunaan lapisan *cladding* Alloy 825 atau titanium Grade 2 pada area *high-heat-flux zone*.

### 3.4 SOP Pemantauan *On-line*

Implementasi **distributed control system (DCS)** dengan sensor temperatur *multi-point* pada dinding autoclave (*skin thermocouples*) memungkinkan deteksi dini penebalan kerak melalui *inverse heat transfer calculation* dengan laju umpan balik 30–60 detik.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Operasi Pabrik HPAL Tipikal

Ambil asumsi pabrik HPAL kapasitas 30.000 ton bijih/tahun dengan spesifikasi:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Komposisi bijih: Fe | 38,0 | % wt |
| Komposisi bijih: Ni | 1,30 | % wt |
| Komposisi bijih: Al | 4,50 | % wt |
| Komposisi bijih: Mg | 5,20 | % wt |
| Suhu operasi | 255 | °C |
| Tekanan operasi | 42 | bar |
| Laju alir slurry | 95 | m³/h |
| Konsentrasi solid | 28 | % wt |
| Diameter partikel rata-rata (d₈₀) | 75 | µm |
| Specific acid consumption | 425 | kg H₂SO₄/ton