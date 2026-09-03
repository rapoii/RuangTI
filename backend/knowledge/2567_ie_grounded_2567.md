# 2567 — Analisis dan Implementasi FMEA AIAG/VDA pada Manufaktur Otomotif: Perspektif Kuantitatif, SOP Industri, dan Aplikasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur komponen otomotif global beroperasi di bawah standar mutu yang semakin ketat, dengan kerangka IATF 16949:2016 sebagai acuan wajib bagi seluruh rantai pasok Tier-1 dan Tier-2. Dalam konteks inilah Bizeli dan Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)), yang menginvestigasi secara kualitatif-deskriptif implementasi FMEA AIAG/VDA pada sebuah perusahaan multinasional produsen komponen otomotif. Pergeseran paradigma dari AIAG FMEA edisi 2008 menuju harmonisasi AIAG/VDA (Juni 2019) menjadi momentum transformatif karena memasukkan *Action Priority (AP)* sebagai pengganti klasik *Risk Priority Number (RPN)*, sekaligus memperkuat prinsip *prevention over detection*.

Urgensi ekonomi dari adopsi metodologi ini tidak kecil. Data industri menunjukkan bahwa biaya *recall* otomotif global rata-rata mencapai USD 1,5–3 miliar per insiden mayor, sementara *rework* internal dapat menyerap 4–10% dari total *cost of poor quality (COPQ)*. Bizeli dan Terazzi (2024) menemukan bahwa di perusahaan yang diteliti, aplikasi FMEA AIAG/VDA secara terstruktur mampu (i) mencegah kegagalan sebelum terjadi, (ii) menekan biaya *rework* dan *recall*, (iii) meningkatkan reliabilitas produk, serta (iv) memfasilitasi integrasi lintas-fungsi tim desain, manufaktur, dan kualitas. Namun, penulis juga mengidentifikasi tiga tantangan substansial: resistensi internal terhadap perubahan metodologi, kebutuhan pelatihan berkelanjutan, dan integrasi data lintas sistem (PLM/MES/ERP) yang belum optimal.

Saputra dan Sukmono (2024) dalam studi pendukungnya di jurnal *peer-reviewed* (DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)) memperkuat relevansi FMEA dengan menerapkannya pada konteks pemeliharaan mesin CNC milling, menunjukkan bahwa metodologi yang sama dapat di-*scale-up* dari lini perakitan komponen ke pemeliharaan aset kritis. Kedua studi ini, meskipun berbeda konteks, menyiratkan satu benang merah: kebutuhan akan kerangka risiko yang terstruktur, terukur, dan terdokumentasi untuk mendukung keputusan rekayasa di lantai produksi. Di Indonesia, dengan lebih dari 835 perusahaan komponen otomotif bermerek (Gaikindo, 2023) yang menjadi basis suplai Astra, Toyota, Daihatsu, dan Hyundai, adopsi FMEA AIAG/VDA bukan sekadar pilihan tetapi prasyarat untuk mempertahankan daya saing di pasar global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Aksiom Dasar FMEA dan Evolusinya

FMEA klasik yang diperkenalkan oleh NASA pada tahun 1960-an dan diadopsi oleh industri otomotif AS melalui AIAG menggunakan persamaan *Risk Priority Number*:

$$RPN_{klasik} = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan, skala 1–10), $O$ adalah *Occurrence* (frekuensi kejadian, skala 1–10), dan $D$ adalah *Detection* (kemampuan deteksi, skala 1–10). Meskipun popular, pendekatan ini dikritik karena (i) memberikan bobot yang sama pada tiga faktor yang secara fisikal berbeda, (ii) sulit membedakan kegagalan dengan RPN mirip, dan (iii) tidak mempertimbangkan tingkat risiko absolut.

### 2.2. AIAG/VDA: Action Priority (AP)

Harmonisasi AIAG/VDA memperkenalkan tabel keputusan *Action Priority* yang mengklasifikasikan risiko ke dalam tiga kategori: **High (H)**, **Medium (M)**, dan **Low (L)**. Klasifikasi ini merupakan fungsi dari triplet $(S, O, D)$ yang dirujuk dari *FMEA Handbook* (AIAG/VDA, 2019):

$$AP = f(S, O, D) \in \{H, M, L\}$$

Secara matematis, bobot relatif setiap faktor tidak lagi dikalikan melainkan dievaluasi secara kondisional. Misalnya, untuk kombinasi $(S=9, O=5, D=4)$ — kegagalan dengan severity tinggi dan occurrence moderat — AP ditentukan sebagai **High** karena *severity* merupakan *driver* dominan, terlepas dari nilai $D$.

### 2.3. Indikator Kelayakan Ekonomi

Untuk menilai kelayakan investasi dalam mitigasi risiko FMEA, digunakan parameter *Risk Reduction Worth (RRW)* dan *Cost of Poor Quality*:

$$RRW_i = \frac{RPN_{baseline}}{RPN_{setelah mitigasi}}$$

$$COPQ = C_{prevention} + C_{appraisal} + C_{internal\,failure} + C_{external\,failure}$$

Peran AIAG/VDA adalah meminimalkan $C_{internal\,failure}$ (biaya scrap, rework) dan $C_{external\,failure}$ (garansi, recall) melalui tindakan preventif.

### 2.4. Penurunan Prioritas Tindakan

Untuk menetapkan urutan tindakan, *Action Priority* dikombinasikan dengan estimasi biaya mitigasi $C_{mit,i}$ dan *payback period*:

$$PB_i = \frac{C_{mit,i}}{\Delta COPQ_{tahunan,i}}$$

di mana $PB_i$ adalah *payback period* (tahun) untuk tindakan mitigasi ke-$i$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Bizeli dan Terazzi (2024) mengadopsi pendekatan kualitatif melalui *case study* dengan wawancara semi-terstruktur terhadap tiga profesional berpengalaman. Dari ekstraksi metodologis, dapat direkonstruksi SOP tujuh langkah AIAG/VDA yang berlaku universal:

**Langkah 1 — Perencanaan dan Penentuan Lingkup (Planning & Scoping).**
Definisikan batas analisis, tim lintas-fungsi (design, manufacturing, quality, supplier, service), dan *subject* FMEA (komponen, subsistem, proses, atau layanan).

**Langkah 2 — Analisis Struktur (Structure Analysis).**
Gunakan diagram blok, *Boundary Diagram*, dan *P-diagram* (Parameter diagram) untuk memvisualisasikan hubungan antara elemen, fungsi, dan karakteristik.

**Langkah 3 — Analisis Fungsi (Function Analysis).**
Tetapkan fungsi setiap elemen dan turunkan ke *Product/Process Functions*, lalu petakan ke *Failure Modes* potensial.

**Langkah 4 — Analisis Kegagalan (Failure Analysis).**
Identifikasi *Failure Modes*, *Failure Effects* (akibat), dan *Failure Causes*. Setiap node dievaluasi menggunakan triplet $(S, O, D)$.

**Langkah 5 — Analisis Risiko (Risk Analysis).**
Tentukan skor $S$, $O$, $D$ berdasarkan tabel referensi AIAG/VDA, lalu turunkan *Action Priority (AP)* melalui tabel keputusan.

**Langkah 6 — Optimasi (Optimization).**
Untuk item dengan AP = High, tetapkan tindakan preventif dan detektif, lalu tetapkan *responsible* dan *target date*.

**Langkah 7 — Dokumentasi dan Review (Documentation & Communication).**
Hasil dicatat dalam *FMEA Worksheet* dan direviu secara berkala, terutama ketika terjadi perubahan desain, proses, atau insiden lapangan.

Diagram alir logikanya dapat dinyatakan sebagai berikut:

```
Input (Desain/Proses)
       ↓
[1] Planning & Scoping
       ↓
[2] Structure Analysis (P-diagram, Block Diagram)
       ↓
[3] Function Analysis
       ↓
[4] Failure Analysis → Failure Mode → Effect → Cause
       ↓
[5] Risk Analysis → (S,O,D) → AP = f(S,O,D) ∈ {H,M,L}
       ↓
[6] Optimization (jika AP=H atau M dengan justifikasi)
       ↓
[7] Documentation, Communication, & Periodic Review
       ↓
Output (FMEA Hidup / Living Document)
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi kuantitatif pada perusahaan komponen otomotif (align dengan konteks paper Bizeli & Terazzi, 2024), dilakukan simulasi pada lini produksi *transmission housing* (rumah transmisi) dengan tiga *failure mode* dominan hasil identifikasi lapangan.

**Tabel 1. Parameter Risiko Tiga Failure Mode Kritis**

| No. | Failure Mode | S | O | D | RPN Klasik | AP (AIAG/VDA) |
|-----|--------------|---|---|---|------------|---------------|
| FM-01 | Porositas pada coran rumah transmisi | 9 | 4 | 6 | 216 | **High (H)** |
| FM-02 | Dimensi diameter luar *out-of-tolerance* | 8 | 3 | 4 | 96 | **High (H)** |
| FM-03 | Burring pada lubang baut | 5 | 7 | 3 | 105 | **Medium (M)** |

**Perhitungan RPN klasik (untuk referensi historis):**

$$RPN_{FM-01} = 9 \times 4 \times 6 = 216$$

$$RPN_{FM-02} = 8 \times 3 \times 4 = 96$$

$$RPN_{FM-03} = 5 \times 7 \times 3 = 105$$