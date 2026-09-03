# 2557 — Rekayasa Autoclave HPAL pada Pelindian Nikel Laterit: Karakterisasi dan Mitigasi Skala pada Sistem Bertekanan Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global tengah mengalami transformasi besar yang dipicu oleh peningkatan permintaan baterai kendaraan listrik (EV) dan akumulator energi stasioner. Lebih dari 60 % cadangan nikel dunia berbentuk bijih laterit (limonit dan saprolit), yang tidak dapat diproses secara efisien melalui teknologi pirometalurgi konvensional karena kadar nikelnya rendah (umumnya 0,8–1,5 % Ni) dan terikat dalam struktur oksida besi serta magnesium silikat. **High-Pressure Acid Leaching (HPAL)** muncul sebagai teknologi hidrometalurgi dominan untuk mengekstraksi nikel dan kobalt dari bijih limonitik, dengan proses operasi tipikal pada suhu $T = 240$–$270 \text{ °C}$ dan tekanan parsial $P = 35$–$55 \text{ bar}$ dalam autoclave tahan asam (Whittington & Muir, 2000; Rubisov et al., 2000).

Dalam konteks ini, Dickson et al. (2026) menyoroti satu masalah operasional paling kritis pada rantai HPAL: **pembentukan skala (scaling) pada dinding dan komponen internal autoclave**. Skala adalah endapan padatan anorganik yang terbentuk dari proses presipitasi, deposisi partikel, dan kristalisasi balik senyawa besi, aluminium, kalsium, dan magnesium selama siklus pemanasan, leaching, dan pendinginan slurry. Akumulasi skala menyebabkan: (i) penurunan koefisien perpindahan panas lokal $U$ hingga 40–60 % dari kondisi clean wall, (ii) peningkatan konsumsi energi spesifik untuk mempertahankan suhu reaksi, (iii) shutdown tidak terjadwal yang menurunkan *overall equipment effectiveness* (OEE) autoclave, dan (iv) kerugian ekonomi miliaran rupiah per tahun pada fasilitas berskala komersial (Dickson et al., 2026; Andrameda et al., 2024).

Andrameda et al. (2024) melengkapi kajian ini dengan menunjukkan bahwa pemilihan agen desulfurisasi, suhu, dan waktu proses roasting–reduksi terhadap residue HPAL sangat menentukan karakteristik residu yang selanjutnya memengaruhi potensi rekristalisasi senyawa pembentuk skala di downstream. Sinergi dua paper ini menunjukkan bahwa masalah skala bukan fenomena terisolasi melainkan manifestasi termodinamika dan kinetika multi-fase yang harus ditangani secara holistik dari hulu (kondisi bijih, pretreatment) hingga hilir (pengelolaan autoclave). Urgensi rekayasa modul ini semakin nyata mengingat kapasitas autoclave HPAL modern mencapai $250$–$300 \text{ m}^3$ per unit dengan investasi modal > USD 200 juta per train, sehingga setiap 1 % peningkatan efisiensi termal melalui mitigasi skala bernilai signifikan dalam *total cost of ownership* (TCO).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Presipitasi Skala

Pembentukan skala autoclave terutama didominasi oleh tiga fasa padatan: **hematit ($\alpha$-Fe₂O₃)**, **aluminum hydroxide/sulfate (AlOHSO₄, Al(OH)₃)**, dan **anhydrite/gypsum (CaSO₄)**. Konstanta kesetimbangan kelarutan untuk reaksi umum:

$$\text{Me}^{n+} + n \text{OH}^- \rightleftharpoons \text{Me(OH)}_n \downarrow$$

diekspresikan melalui *solubility product*:

$$K_{sp} = [\text{Me}^{n+}][\text{OH}^-]^n = [\text{Me}^{n+}] \left(\frac{K_w}{[\text{H}^+]}\right)^n$$

dengan $K_w$ sebagai konstanta disosiasi air. Untuk lingkungan asam kuat HPAL dengan $\text{pH} < 2$ pada suhu operasi, kelarutan Fe(III) turun drastis mengikuti relasi empiris:

$$\log [\text{Fe}^{3+}]_{eq} = -\frac{1}{3}\log K_{sp}^{\text{Fe(OH)}_3(T)} - \log [\text{H}^+]$$

Data tipikal pada $T = 250 \text{ °C}$ menunjukkan $[\text{Fe}^{3+}]_{eq} \approx 1$–$10 \text{ ppm}$, jauh di bawah konsentrasi umpan, sehingga hampir semua Fe(III) mengendap sebagai hematit atau jarosite tergantung rasio $\text{K}^+/\text{Na}^+$ dan aktivitas sulfat (Dickson et al., 2026).

### 2.2 Kinetika Pertumbuhan Skala

Laju deposisi skala pada permukaan logam autoclave umumnya mengikuti model **parabolic** atau **linear-logaritmik** sesuai persamaan:

$$\frac{dm_s}{dt} = \frac{k_d (C_b - C_s)}{1 + \alpha \, m_s}$$

dengan $m_s$ = massa skala per satuan luas $\left(\text{kg/m}^2\right)$, $C_b$ = konsentrasi species pembentuk skala dalam bulk slurry, $C_s$ = konsentrasi pada permukaan antarmuka, $k_d$ = koefisien transfer massa, serta $\alpha$ = konstanta resistif yang merepresentasikan difusi ion melalui lapisan skala yang sudah terbentuk. Integrasi persamaan ini menghasilkan:

$$m_s(t) = \frac{1}{\alpha}\left[\sqrt{1 + 2 \alpha k_d (C_b - C_s) t} - 1\right]$$

Ketika $\alpha \, m_s \ll 1$ (skala tipis), pertumbuhan mendekati linear: $m_s \approx k_d(C_b - C_s)t$; ketika $\alpha \, m_s \gg 1$, pertumbuhan mengikuti hukum parabolic: $m_s \approx \sqrt{2 k_d (C_b - C_s) t / \alpha}$.

### 2.3 Penurunan Perpindahan Panas

Adanya skala menurunkan konduktivitas termal efektif dinding autoclave. Resistansi total perpindahan panas:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_w}{k_w} + \frac{\delta_s}{k_s} + \frac{1}{h_o}$$

dengan $h_i, h_o$ = koefisien konveksi internal-eksternal, $\delta_w, \delta_s$ = tebal dinding logam dan skala, $k_w, k_s$ = konduktivitas termal masing-masing. Tipikal $k_w^{\text{carbon steel}} \approx 45 \text{ W/m·K}$ sedangkan $k_s^{\text{hematit scale}} \approx 0{,}5$–$2 \text{ W/m·K}$, sehingga skala 5 mm sudah mampu menurunkan $U$ sebesar 40–60 %.

### 2.4 Energi Aktivasi dan Efek Suhu

Ketergantungan laju presipitasi terhadap suhu mengikuti **Arrhenius**:

$$k(T) = A \, \exp\left(-\frac{E_a}{RT}\right)$$

Untuk presipitasi Fe(III) pada rentang HPAL, $E_a \approx 60$–$90 \text{ kJ/mol}$, menjelaskan mengapa kenaikan suhu operasi $5 \text{ °C}$ saja dapat melipatgandakan laju scale formation (Dickson et al., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Mitigasi Skala

```
Bijih Laterit → Crushing/Grinding → Slurry Mixing (H₂SO₄ 98%)
       ↓
Pre-heating (Multi-stage flash) → HPAL Autoclave (240–270 °C, 40–55 bar)
       ↓                                 ↑
   Counter-current decantation ← Sampling & Scale monitoring
       ↓
Neutralization (Limestone/Lime) → CCD Washing → Residue Treatment
       ↓
SX (Solvent Extraction Ni/Co) → Crystallization → NiSO₄·6H₂O / CoSO₄·7H₂O
```

### 3.2 SOP Mitigasi Skala Autoclave (Best Practice Industri)

| Tahap | Aksi | Parameter Kritis | Acuan |
|-------|------|------------------|-------|
| **Pra-operasi** | Inspecti visual & UT thickness | $\delta_{s,max} \leq 3 \text{ mm}$ | ASME BPVC |
| **In-situ mitigation** | Penambahan seed hematit recycle | $C_{\text{seed}} = 5$–$15 \text{ g/L}$ | Dickson et al., 2026 |
| **pH control** | Injeksi asam bertahap | $\text{pH}_{out} = 1{,}3$–$1{,}8$ | Rubisov et al., 2000 |
| **Operasional** | Rotasi duty antar autoclave | Siklus 90–120 hari | NPI/PT Halmahera |
| **Shut-down** | Acid wash (5 % H₂SO₄, 60 °C) | Durasi 12–24 jam | Industri HPAL |
| **Pascashutdown** | Mechanical cleaning high-pressure water jet | $P_{jet} > 350 \text{ bar}$ | Plant SOP |

### 3.3 Strategi Multi-layer Mitigasi

Pendekatan modern mengadopsi konsep **defense-in-depth**: (a) kontrol umpan (desulfurisasi menurut Andrameda et al., 2024, untuk mengurangi S pembentuk CaSO₄), (b) kontrol proses (T, P, residence time, seed recycle), (c) kontrol material (linning Ti atau alloy tahan asam di zona kritis), dan (d) kontrol operasional (predictive maintenance berbasis IoT dan digital twin).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Sebuah autoclave HPAL diameter dalam $D_i = 4{,}5 \text{ m}$, panjang $L = 18 \text{ m}$, beroperasi pada $T = 255 \text{ °C}$, memproses slurry umpan dengan komposisi: $\text{Ni}^{2+} = 6 \text{ g/L}$, $\text{Fe}^{3+}_{total} = 35 \text{ g/L}$, $\text{Al}^{3+} = 4 \text{ g/L}$, $\text{Ca}^{2+} = 0{,}6 \text{ g/L}$, free acid $50 \text{ g/L H}_2\text{SO}_4$. Target operasi: residence time $\tau = 60 \text{ menit}$, target produksi Ni $40.000 \text{ ton/tahun}$.

### 4.2 Perhitungan Laju Scale Formation

**Langkah 1:** Tetapkan $k_d$ tipikal untuk presipitasi hematit pada $T = 255 \text{ °C}$:

$$k_d = 1{,}2 \times 10^{-5} \text{ m/s}$$

**Langkah 2:** Konsentrasi bulk vs. saturasi. Untuk Fe(III) pada kondisi HPAL, $C_b - C_s \approx 34{,}9 \text{ g/L} = 34{,}