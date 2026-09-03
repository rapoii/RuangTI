# 1997 — Optimasi Elektrokimia Pelindian Kobalt dari Kobaltit dengan Response Surface Methodology dan Desain Box-Behnken

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Electrochemical Leaching of Cobalt from Cobaltite: Box-Behnken Design and Optimization with Response Surface Methodology
**Jurnal & Sitasi Utama:** Reyixiati Repukaiti, Arindam Mukhopadhyay, Luis A. Diaz (2024). *ACS Omega*. DOI: [https://doi.org/10.1021/acsomega.4c07361](https://doi.org/10.1021/acsomega.4c07361)
**Sitasi Pendukung:** Reyixiati Repukaiti, Arindam Mukhopadhyay, Luis A. Diaz (2024). *ACS Omega*. DOI: [https://doi.org/10.1021/acsomega.4c07361](https://doi.org/10.1021/acsomega.4c07361)

---

## 1. Pendahuluan dan Konteks Industri

Kobalt (Co) telah diproyeksikan oleh berbagai lembaga strategis mineral sebagai logam kritis yang permintaan pasarnya akan meningkat signifikan dalam dua hingga tiga dekade mendatang, terutama sebagai material katoda baterai lithium-ion pada aplikasi kendaraan listrik (electric vehicle/EV). Proyeksi permintaan kobalt global yang semula sebesar ~140.000 ton pada 2020 diprediksi naik menjadi >350.000 ton per tahun pada 2030 seiring dengan akselerasi transisi energi dan elektrifikasi armada otomotif global. Namun demikian, lebih dari 70% produksi kobalt dunia masih terkonsentrasi di Republik Demokratik Kongo (DRC) dengan tingkat risiko geopolitik, ketergantungan rantai pasok, dan persoalan ESG (Environmental, Social, Governance) yang tinggi. Oleh karena itu, upaya mendorong produksi domestik kobalt di negara-negara industri maju — termasuk Amerika Serikat — menjadi agenda strategis yang sangat penting.

Repukaiti, Mukhopadhyay, dan Diaz (2024) dalam publikasi mereka di *ACS Omega* (DOI: [10.1021/acsomega.4c07361](https://doi.org/10.1021/acsomega.4c07361)) mengembangkan sebuah proses elektrokimia inovatif untuk回収 (recovery) kobalt dari konsentrat kaya kobaltit (cobaltite-rich concentrate). Proses ini dirancang untuk menghasilkan *leachate* yang kaya kobalt dan arsen (As), sehingga memungkinkan pemulihan dua logam bernilai tinggi secara simultan. Pendekatan yang digunakan ialah pelindian (leaching) elektrokimia dengan bantuan ferri iron ($Fe^{3+}$) sebagai oksidan yang digenerasi secara *in-situ* melalui elektrolisis, sehingga mengurangi kebutuhan reagen eksternal yang mahal dan berisiko.

Urgensi industrialisasi proses ini terletak pada tiga pilar rekayasa: (i) **efisiensi ekstraksi** — target recovery kobalt >90% dengan kemurnian leachate sesuai standar downstream hydrometallurgy; (ii) **selektivitas proses** — kemampuan memisahkan kobalt dari arsenik melalui parameter elektrokimia tanpa menghasilkan emisi $AsH_3$ (arsine gas) yang toksik; dan (iii) **optimalisasi multi-parameter** — variabel seperti kuat arus sel (cell current), rasio molar Fe/As, dan keasaman anolit (anolyte acidity) memiliki interaksi non-linear yang membutuhkan pendekatan desain eksperimen tingkat lanjut. Pendekatan *Response Surface Methodology* (RSM) dengan desain *Box-Behnken* (BBD) dipilih karena mampu memodelkan permukaan respons orde kedua dengan jumlah run eksperimen yang minimal, cocok untuk eksplorasi parameter pada tahap pengembangan proses hidrometalurgi.

Konteks industri ini menegaskan bahwa integrasi teknik elektrokimia, statistik terapan, dan rekayasa proses menjadi kompetensi inti bagi insinyur industri modern yang bergerak di sektor *critical minerals processing*, *battery materials supply chain*, dan *circular economy*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Reaksi Elektrokimia Fundamental

Proses pelindian elektrokimia kobaltit (CoAsS) menggunakan ferri iron sebagai oksidan mengikuti reaksi redoks utama berikut (Repukaiti et al., 2024, DOI: [10.1021/acsomega.4c07361](https://doi.org/10.1021/acsomega.4c07361)):

**Reaksi anodik (generasi oksidan):**
$$Fe^{2+} \longrightarrow Fe^{3+} + e^- \quad E^0 = +0{,}77 \text{ V vs SHE}$$

**Reaksi pelindian (leaching):**
$$CoAsS + 3Fe^{3+} \longrightarrow Co^{2+} + 3Fe^{2+} + As^{3+} + S^0$$

**Reaksi katodik (pada katoda):**
$$2H^+ + 2e^- \longrightarrow H_2 \quad \text{(at pH rendah)}$$

Efisiensi pelindian kobalt secara stoikiometri ditentukan oleh jumlah mol $Fe^{3+}$ yang tersedia per mol kobalt dalam konsentrat:

$$\eta_{Co} = \frac{n_{Co,dissolved}}{n_{Co,initial}} \times 100\%$$

### 2.2. Desain Box-Behnken (BBD)

Desain Box-Behnken merupakan desain eksperimen tiga tingkat yang memerlukan jumlah run lebih sedikit dibandingkan Central Composite Design (CCD) full factorial. Untuk tiga faktor (k = 3), jumlah total run eksperimen ialah:

$$N = 2k(k-1) + C_0 = 2(3)(2) + 3 = 15 \text{ run}$$

dengan 3 run pada titik tengah ($C_0$) untuk estimasi galat eksperimen dan 12 run pada titik tengah edge dari kubus. Faktor independen yang digunakan (Repukaiti et al., 2024) adalah:

- $X_1$ = kuat arus sel elektrokimia (Ampere, A)
- $X_2$ = rasio molar Fe/As (dimensi-less)
- $X_3$ = keasaman anolit (molaritas $H_2SO_4$, M)

Variabel kode digunakan untuk normalisasi ke rentang [-1, +1]:

$$x_i = \frac{X_i - X_{i,center}}{\Delta X_i}$$

### 2.3. Model Response Surface Methodology (RSM)

Respons efisiensi pelindian kobalt ($\eta_{Co}$, %) dimodelkan dengan polinomial orde kedua:

$$\eta_{Co} = \beta_0 + \sum_{i=1}^{k} \beta_i x_i + \sum_{i=1}^{k} \beta_{ii} x_i^2 + \sum_{i<j} \beta_{ij} x_i x_j + \varepsilon$$

Dalam bentuk eksplisit untuk k = 3:

$$\eta_{Co} = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_3 + \beta_{11} x_1^2 + \beta_{22} x_2^2 + \beta_{33} x_3^2 + \beta_{12} x_1 x_2 + \beta_{13} x_1 x_3 + \beta_{23} x_2 x_3 + \varepsilon$$

di mana $\beta_0$ adalah intersep, $\beta_i$ adalah koefisien linier, $\beta_{ii}$ adalah koefisien kuadratik, $\beta_{ij}$ adalah koefisien interaksi, dan $\varepsilon$ adalah galat acak.

### 2.4. Analisis Varians (ANOVA)

Signifikansi model diuji menggunakan ANOVA dengan statistik F:

$$F_{calc} = \frac{MS_{regression}}{MS_{residual}} = \frac{SS_{regression}/df_{regression}}{SS_{residual}/df_{residual}}$$

Kualitas model dievaluasi melalui koefisien determinasi:

$$R^2 = 1 - \frac{SS_{residual}}{SS_{total}}, \quad R^2_{adj} = 1 - \frac{(1-R^2)(n-1)}{n-p-1}$$

dengan $n$ = jumlah observasi dan $p$ = jumlah prediktor.

### 2.5. Optimasi Multi-respons

Untuk optimasi simultan terhadap dua respons ($\eta_{Co}$ dan $\eta_{As}$), fungsi desirability Harrington digunakan:

$$D = \left( d_1^{w_1} \times d_2^{w_2} \times \cdots \times d_n^{w_n} \right)^{1/\sum w_i}$$

dengan $w_i$ adalah bobot kepentingan tiap respons dan $d_i$ adalah desirability individual yang didefinisikan:

$$d_i = \begin{cases} 0, & y_i < L_i \\ \left(\frac{y_i - L_i}{T_i - L_i}\right)^r, & L_i \leq y_i \leq T_i \\ 1, & y_i > T_i \end{cases}$$

dengan $L_i$ = batas bawah, $T_i$ = target, dan $r$ = parameter bentuk.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Proses Elektrokimia

Sistem elektrokimia yang digunakan Repukaiti et al. (2024) terdiri dari komponen-komponen berikut:

```
[Sumber Daya DC] → [Sel Elektrokimia 2 Kompartemen] → [Resirkulasi Anolit] → [Filtrasi] → [Leachate]
                          ↓                  ↓
                    [Anoda: Ti/IrO₂]    [Katoda: Stainless Steel 316]
                          ↓                  ↓
                  [Generasi Fe³⁺]      [Evolusi H₂]
                          ↓
                [Konsentrat Kobaltit dalam Katolit]
```

### 3.2. SOP Pelindian Elektrokimia Kobaltit

**Tahap 1: Preparasi Konsentrat**
1. Crushing dan grinding konsentrat kobaltit hingga ukuran partikel <75 μm (200 mesh).
2. Sampling dan karakterisasi XRF (X-Ray Fluorescence) untuk komposisi kimia.
3. Pembuatan pulp (slurry) dengan solid-to-liquid ratio (S/L) tertentu, biasanya 5–10% w/v.

**Tahap 2: Setting Up Sel Elektrokimia**
1. Pilih membran penukar kation (cation exchange membrane) untuk memisahkan kompartemen anoda dan katoda.
2. Isi kompartemen anoda dengan larutan elektrolit $FeSO_4$ dalam $H_2SO_4$.
3. Isi kompartemen katoda dengan slurry konsentrat kobaltit.
4. Atur kuat arus, rasio Fe/As, dan keasaman sesuai matriks BBD.

**Tahap 3: Operasi Pelindian**
1. Jalankan elektrolisis pada suhu ruang (25 ± 2°C) selama waktu tinggal tertentu (umumnya 4–8 jam).
2. Monitor pH, potensial redoks (ORP), dan kuat arus setiap 30 menit.
3. Sampling leachate pada interval waktu terdefinisi untuk analisis ICP-OES.

**Tahap 4: Analisis dan Optimasi**
1. Hitung efisiensi pelindian kobalt dari data ICP-OES.
2. Lakukan regresi polinomial orde kedua menggunakan software RSM (Design-Expert, Minitab, atau R package `rsm`).
3. Validasi model dengan confirmation runs pada kondisi optimal.
4. Scale-up ke reaktor bench-scale (5–10 L) sebelum pilot plant.

### 3.3. Diagram Alir Logika Pengambilan Keputusan

```
[Mulai] → [Sampling Input] → [Setup BBD Matrix]
    ↓
[Run 1-15] → [Ukur Respons] → [Fit Polinomial Orde 2]
    ↓                                  ↓
[ANOVA] ← [Lack of Fit Test]    [Surface Plot & Contour]
    ↓                                  ↓
[Model Valid?] → Tidak → [Modifikasi Faktor] → Loop ke Run 1-15
    ↓ Ya
[Optimasi Desirability] → [Confirmation Runs] → [Scale-up]
    ↓
[Selesai]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus

Sebuah fasilitas hydrometallurgy di AS ingin mengolah konsentrat kobaltit asal Montana dengan komposisi sebagai berikut (data tipikal berdasarkan Repukaiti et al., 2024):

- Konsentrat: 1.000 gram
- Kadar Co: 4,2% (berat) → $n_{Co,initial} = \frac{42}{58{,}93} = 0{,}713$ mol
- Kadar As: 8,5% (berat) → $n_{As,initial} = \frac{85}{74{,}92} = 1{,}135$ mol
- Kadar Fe dalam pulp: 2,1% (berat)
- Volume pulp: 1,0 L

### 4.2. Matriks Desain Box-Behnken (3 Faktor)

| Run | $X_1$ (Arus, A) | $X_2$ (Rasio Fe/As) | $X_3$ (Asam, M) | $\eta_{Co}$ (%) |
|-----|------------------|----------------------|------------------|------------------|
| 1 | 2,0 | 1,0 | 1,5 | 78,3 |
| 2 | 6,0 | 1,0 | 1,5 | 85,7 |
| 3 | 2,0 | 3,0 | 1,5 | 82,5 |
| 4 | 6,0 | 3,0 | 1,5 | 91,2 |
| 5 | 2,0 | 2,0 | 0,5 | 71,8 |
| 6 |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
