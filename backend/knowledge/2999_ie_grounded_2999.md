# 2999 — Modul Spesialis FMEA AIAG/VDA dalam Manufaktur Otomotif dan Rekayasa Pemeliharaan Mesin Perkakas CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas*
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22 No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *CNC Milling Machine Maintenance Analysis Using Method Failure Mode and Effects Analysis (FMEA)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global beroperasi dalam ekosistem rekayasa mutu yang sangat ketat, di mana satu cacat komponen dapat memicu kampanye *recall* berskala internasional dengan konsekuensi ekonomi dan keselamatan konsumen yang katastrofik. Bizeli & Terazzi (2024) dalam studi kasusnya terhadap sebuah perusahaan multinasional fabricante de peças automotivas menunjukkan bahwa transisi dari pendekatan FMEA konvensional menuju **FMEA AIAG/VDA** bukan sekadar perubahan format dokumentasi, melainkan transformasi fundamental dalam cara organisasi mengelola risiko kegagalan produk dan proses secara sistematis ([DOI: 10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)).

Konteks industri yang melatarbelakangi urgensi adopsi metodologi ini cukup kompleks. Pertama, rantai pasok otomotif modern (*Just-in-Time* dan *Just-in-Sequence*) mempersempit toleransi waktu respons terhadap cacat, sehingga tindakan preventif menjadi jauh lebih bernilai ekonomis dibanding tindakan korektif. Kedua, standar regulasi IATF 16949:2016 secara eksplisit mengamanatkan penerapan *risk-based thinking* yang mensyaratkan dokumentasi FMEA yang lebih granular dan traceable. Ketiga, kompleksitas produk seperti *electronic control units*, sensor ADAS, dan komponen powertrain elektrifikasi menciptakan permukaan kegagalan (*failure surface*) yang semakin luas sehingga model penilaian risiko tradisional dengan tiga parameter Severity-Occurrence-Detection sudah tidak lagi memadai.

Penelitian Bizeli & Terazzi (2024) menemukan bahwa implementasi FMEA AIAG/VDA memberikan empat manfaat utama: (1) pencegahan kegagalan proaktif melalui identifikasi dini mode kegagalan potensial, (2) reduksi biaya yang terkait dengan *rework* dan *recall* (3) peningkatan reliabilitas produk yang terukur, dan (4) integrasi lintas fungsi yang lebih efektif antara tim desain, manufaktur, dan kualitas. Namun, riset yang sama juga mengidentifikasi tiga tantangan krusial, yaitu resistensi adopsi metodologi baru, kebutuhan pelatihan berkelanjutan, dan kesulitan integrasi dengan sistem PLM/MES yang sudah ada. Studi pelengkap Saputra & Sukmono (2024) pada mesin *CNC milling* menunjukkan bahwa meskipun FMEA klasik masih efektif untuk konteks pemeliharaan peralatan, ketika kompleksitas risiko meningkat pada level sistem otomotifyang terintegrasi, pendekatan weighted scoring AIAG/VDA menjadi lebih representatif ([DOI: 10.21070/ups.8248](https://doi.org/10.21070/ups.8248)). Dengan demikian, modul 2999 ini membedah secara mendalam aspek teoretis, formulasi matematis, dan aplikasi praktis dari kedua pendekatan tersebut dalam konteks rekayasa industri kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Evolusi Konseptual dari FMEA Konvensional ke AIAG/VDA

FMEA konvensional yang dipopulerkan melalui standar *AIAG FMEA Handbook 4th Edition (2008)* dan *VDA 4 (2006)* menggunakan parameter tiga dimensi, yaitu **Severity (S)**, **Occurrence (O)**, dan **Detection (D)**, yang kemudian diagregasi menjadi satu skor tunggal berupa **Risk Priority Number (RPN)**:

$$RPN_{konvensional} = S \times O \times D \tag{1}$$

dengan rentang teoretis $1 \leq RPN \leq 1000$ (skala S, O, D masing-masing 1–10). Pendekatan ini mendapat kritik substansial dalam literatur karena (a) tiga parameter dengan bobot identik cenderung menyamarkan risiko aktual ketika Severity tinggi namun Occurrence rendah, dan (b) ambiguitas dalam penilaian Detection antar-individu yang menurunkan reliabilitas penilaian.

FMEA AIAG/VDA (2019) mereformulasi arsitektur risiko melalui **Action Priority (AP)** yang tidak lagi menggunakan perkalian sederhana, melainkan tabel keputusan berbasis *threshold* yang mempertimbangkan hubungan non-linear antar-parameter. Parameter FMEA AIAG/VDA menggunakan skala yang disebut **S, O, D dengan rentang yang sama (1–10)**, namun AP dikategorikan menjadi:

$$AP = f(S, O, D) \rightarrow \{H, M, L\} \tag{2}$$

dengan $\{H, M, L\}$ berturut-turut merepresentasikan *High*, *Medium*, dan *Low* priority. Fungsi $f(S,O,D)$ adalah pemetaan berbasis *lookup table* yang secara spesifik membedakan bobot relatif Severity yang dominan—yaitu Severity 9–10 dengan Occurrence ≥ 4 akan langsung dipetakan ke *High Priority* tanpa memperhatikan Detection.

### 2.2 Formulasi Kuantitatif Dampak Kegagalan

Untuk analisis biaya dan dampak kegagalan, modul ini mengadopsi kerangka **Cost of Poor Quality (CoPQ)** yang digunakan dalam studi Bizeli & Terazzi (2024). Total biaya kegagalan dapat diformulasikan sebagai:

$$C_{total} = \sum_{i=1}^{n} \left( C_{internal,i} + C_{external,i} + C_{recall,i} + C_{opportunity,i} \right) \tag{3}$$

di mana:
- $C_{internal,i}$ = biaya kegagalan internal untuk mode kegagalan ke-$i$ (scrap, rework)
- $C_{external,i}$ = biaya kegagalan external (warranty, return)
- $C_{recall,i}$ = biaya kampanye recall
- $C_{opportunity,i}$ = biaya kehilangan pangsa pasar dan goodwill
- $n$ = jumlah mode kegagalan teridentifikasi

Untuk analisis reliabilitas peralatan—seperti yang dicontohkan Saputra & Sukmono (2024) pada mesin *CNC milling*—parameter fundamental yang digunakan adalah **Mean Time Between Failures (MTBF)** dan **Mean Time To Repair (MTTR)**, yang menentukanAvailability sistem:

$$A = \frac{MTBF}{MTBF + MTTR} \times 100\% \tag{4}$$

sedangkan **Overall Equipment Effectiveness (OEE)** didefinisikan sebagai:

$$OEE = A \times P \times Q \tag{5}$$

dengan $P$ = *Performance* (kecepatan aktual vs desain) dan $Q$ = *Quality* (good units vs total units).

### 2.3 Model Keputusan Risiko dengan Logika Weighted Scoring AIAG/VDA

Pendekatan AIAG/VDA dapat diformulasikan sebagai model **fuzzy weighted priority** untuk menangani subjektivitas penilaian:

$$AP_{score} = w_S \cdot \tilde{S} + w_O \cdot \tilde{O} + w_D \cdot \tilde{D} \tag{6}$$

dengan $\tilde{S}, \tilde{O}, \tilde{D}$ masing-masing adalah *fuzzy membership function* (skala Likert linguistik) dan $w_S, w_O, w_D$ berturut-turut adalah bobot kepentingan dengan $w_S > w_O > w_D$ sesuai rekomendasi AIAG/VDA bahwa Severity memiliki bobot dominan dalam analisis keselamatan produk otomotif.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi FMEA AIAG/VDA

Berdasarkan kerangka yang diuraikan Bizeli & Terazzi (2024), implementasi FMEA AIAG/VDA mengikuti alur 7-langkah yang terstruktur:

```
[Step 1] Planning & Preparation
         ↓
[Step 2] Structure Analysis (Block Diagram / Boundary Diagram)
         ↓
[Step 3] Function Analysis (Function Net / Tree)
         ↓
[Step 4] Failure Analysis (Failure Net: Failure Mode → Effect → Cause)
         ↓
[Step 5] Risk Analysis (S, O, D Assessment → Action Priority)
         ↓
[Step 6] Optimization (Define Actions, Re-assess Residual Risk)
         ↓
[Step 7] Results Documentation (FMEA Form, Risk File)
```

**Diagram alur proses manajemen risiko:**

```
        ┌──────────────────────┐
        │  Identifikasi Failure │
        │       Mode            │
        └──────────┬───────────┘
                   ↓
        ┌──────────────────────┐
        │  Penilaian S, O, D    │
        │  (Skala 1–10)         │
        └──────────┬───────────┘
                   ↓
        ┌──────────────────────┐
        │  Penentuan AP (H/M/L) │
        │  via Tabel Keputusan  │
        └──────────┬───────────┘
                   ↓
           ┌───────────────┐
           │  AP = High?   │── Yes ──→ Tindakan Wajib
           └───────┬───────┘               + Prevention
                No  ↓                     + Detection Ctrl
        ┌──────────────────────┐
        │  Formulasi Aksi      │
        │  + Re-skor Residual  │
        └──────────┬───────────┘
                   ↓
        ┌──────────────────────┐
        │  Update Risk File    │
        └──────────────────────┘
```

### 3.2 SOP Integrasi Lintas Fungsi

Studi Bizeli & Terazzi (2024) menekankan pentingnya struktur tata kelola (**FMEA Owner**) yang bertanggung jawab atas satu *Risk File* dan mengkoordinasikan input dari lintas fungsi:

1. **Design Engineering** → identifikasi mode kegagalan struktural dan fungsional
2. **Manufacturing Engineering** → identifikasi mode kegagalan proses
3. **Quality Assurance** → validasi skor Detection berdasarkan metrik inspeksi
4. **Supplier Quality** → cascading FMEA ke rantai pasok tingkat-1
5. **Service Engineering** → input mode kegagalan dari data lapangan (warranty, TGW)

### 3.3 Adaptasi untuk Konteks Pemeliharaan CNC

Untuk aplikasi pada mesin CNC seperti yang dilakukan Saputra & Sukmono (2024), SOP memerlukan modifikasi sebagai berikut:

- **Pengganti Severity** → konsekuensi terhadap *production downtime* dan kualitas workpiece
- **Pengganti Occurrence** → frekuensi kegagalan berdasarkan data histori MTBF
- **Pengganti Detection** → efektivitas sensor condition monitoring (vibration, temperature, acoustic emission)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Komponen *Brake Caliper Housing* Otomotif

Kita ambil skenario komponen kritis *brake caliper housing* yang diproduksi oleh perusahaan multinasional fabricante de peças automotivas seperti dalam studi Bizeli & Terazzi (2024). Tabel FMEA berikut mengilustrasikan analisis empat mode kegagalan dominan:

| No | Failure Mode | Effect | Cause | S | O | D | AP (AIAG/VDA) |
|----|--------------|--------|-------|---|---|---|---------------|
| 1 | Porosity pada dinding silinder | Kebocoran fluida rem | *Gas entrapment* saat *high-pressure die casting* | 9 | 5 | 6 | **H** |
| 2 | Deviasi dimensi bore >0.05 mm | Ketidakakuratan piston travel | Tool wear pada CNC boring | 8 | 4 | 5 | **M** |
| 3 | Retak permukaan mounting | *Catastrophic structural collapse* | *Residual stress* dari heat treatment | 10 | 3 | 7 | **H** |
| 4 | Kontaminasi debu pada threaded port | Kebocoran saat instalasi | Kurangnya *torque specification* | 7 | 5 | 4 | **M** |

### 4.2 Perhitungan RPN Konvensional (Sebagai Baseline Komparasi)

Dengan rumus Persamaan (1):

$$RPN_1 = 9 \times 5 \times 6 = 270$$
$$RPN_2 = 8 \times 4 \times 5 = 160$$
$$RPN_3 = 10 \times 3 \times 7 = 210$$
$$RPN_4 = 7 \times 5 \times 4 = 140$$

$$\sum RPN = 270 + 160 + 210 + 140 = 780$$

### 4.3 Perhitungan dengan Pendekatan AIAG/VDA (Action Priority)

Mengacu *lookup table* AIAG/VDA, mode kegagalan #3 memiliki S=10 dan O=3—meskipun RPN-nya hanya 210 (lebih rendah dari RPN #1 = 270), namun karena Severity 10 bersifat *catastrophic*, mode ini masuk kategori **High Priority** (H) sesuai aturan AIAG/VDA. Mode #1 dengan S=9 dan O=5 juga masuk **H**. Ini menunjukkan keunggulan pendekatan AIAG/VDA yang tidak menyamarkan risiko keselamatan kritis oleh skor agregat.

### 4.4 Perhitungan Dampak Ekonomi (CoPQ)

Asumsikan produksi tahunan 500.000 unit, dengan probabilitas occurrence aktual dan biaya per kejadian:

| Mode | Prob/Fail (%) | Unit/thn | Cost/Incident (USD) | Annual CoPQ (USD) |
|------|--------------|----------|---------------------|-------------------|
| 1 | 0.8% | 4.000 | $340 (rework + claim) | $1.360.000 |
| 2 | 1.2% | 6.000 | $180 (rework only) | $1.080.000 |
| 3 | 0.15% |