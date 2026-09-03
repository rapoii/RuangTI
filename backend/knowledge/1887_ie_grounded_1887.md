# 1887 — Redesain Produk dan Konstruksi Pracetak dengan Pendekatan Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Manufakturabilitas pada Keranjang Kopi Enema dan Jembatan Pracetak Berbasis BIM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk dan Struktur Menggunakan Metode Design for Manufacture and Assembly (DFMA) — Kasus Keranjang Kopi Enema dan Jembatan Pracetak
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Desain produk dan struktur teknik modern tidak lagi dapat dipisahkan dari efisiensi rantai pasok manufaktur. Kesalahan fatal terbesar dalam pengembangan produk terjadi ketika keputusan desain dibekukan (*frozen design*) sebelum pengetahuan tentang proses fabrikasi, perakitan, pengangkutan, dan ereksi dimasukkan ke dalam ruang keputusan konseptual. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mendemonstrasikan persoalan ini secara mikroskopis melalui kasus redesain **keranjang kopi enema** — sebuah produk kesehatan yang meskipun tampak sederhana, awalnya memiliki banyak komponen las, sambungan tetap, dan proses instalasi yang tidak ergonomis. Produk awal (*existing design*) mengandung komponen dengan *part count* tinggi, geometri yang tidak simetris, dan proses perakitan manual yang berulang. Tanpa analisis manufacturability, biaya produksi menjadi mahal, waktu perakitan panjang, dan peluang *human error* pada tahap Quality Control meningkat.

Dalam skala infrastruktur makroskopis, Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memaparkan bahwa pada proyek jembatan pracetak, alternatif desain konvensional hanya diseleksi berdasarkan biaya dan kecukupan struktural, padahal variabel manufaktur (pengecoran, fabrikasi baja), logistik (pengangkutan modul besar), serta ereksi (lifting, *splicing*) belum pernah dimasukkan ke dalam fungsi objektif. Akibatnya, *buildability problems* baru teridentifikasi pada tahap shop drawing atau bahkan di lapangan ketika desain telah final dan perubahan menjadi sangat mahal. Kedua paper tersebut, meskipun beroperasi pada skala berbeda (produk konsumen vs. infrastruktur jembatan), menyoroti satu titik kegagalan bersama: **desain yang tidak di-evaluate dengan lensa manufacturability sejak fase konseptual**.

Urgensi DFMA semakin nyata di era Industri 4.0 dan *prefabricated construction* karena (1) tekanan depresiasi biaya produksi akibat kompetisi global, (2) fragmentasi rantai pasok yang menuntut modularitas, dan (3) kebutuhan menekan *carbon footprint* dengan mengurangi waste proses. DFMA, yang diperkenalkan oleh Boothroyd dan Dewhurst pada 1980-an, kini berevolusi menjadi pendekatan multi-kriteria yang mampu mengkuantifikasi keputusan desain melalui *Design Efficiency* dan *Manufacturing Cost Index*. Modul 1887 ini membahas implementasi komprehensif DFMA — dari level komponen (keranjang kopi enema) hingga level sistem infrastruktur (jembatan BIM-pracetak).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Boothroyd's DFMA Framework

DFMA merupakan integrasi dua sub-metodologi: **DFM (Design for Manufacture)** yang mengoptimalkan proses fabrikasi, dan **DFA (Design for Assembly)** yang meminimalkan kompleksitas perakitan. Metrik dasar DFA menurut Boothroyd adalah:

$$
\eta_{DFA} = \frac{N_m \cdot t_m}{T_{assembly}} \times 100\%
$$

di mana $\eta_{DFA}$ adalah *design efficiency*, $N_m$ adalah jumlah minimum part teoritis, $t_m$ adalah waktu perakitan teoritis minimum per part (detik), dan $T_{assembly}$ adalah total waktu perakitan aktual (detik). Efisiensi 100% berarti tidak ada aktivitas penyisipan, pengarahan, atau pengencangan yang sia-sia. Amirullah dan Jakaria (2024) menerapkan formula ini untuk menghitung efisiensi desain awal keranjang kopi enema sebelum redesain.

### 2.2. Minimum Number of Parts Criterion

Kriteria Boothroyd menentukan bahwa sebuah part layak digabung jika memenuhi salah satu dari dua pertanyaan berikut:

$$
\text{KEEP}_i = \mathbb{1}\left[ \left(\frac{\Delta C_{combine}}{\Delta C_{separate}} < 1\right) \lor \left(\frac{\Delta t_{combine}}{\Delta t_{separate}} < 1\right) \right]
$$

di mana $\Delta C$ adalah *cost difference* (biaya) dan $\Delta t$ adalah *time difference* (waktu) antara penggabungan part versus memisahkannya. Jika salah satu rasio lebih kecil dari 1, part layak digabung.

### 2.3. Assembly Time Estimation

Total waktu perakitan dimodelkan sebagai:

$$
T_{assembly} = \sum_{i=1}^{N_p} \left( t_{handle,i} + t_{insert,i} + t_{secure,i} + t_{reorient,i} \right)
$$

dengan $t_{handle}$ (handling time), $t_{insert}$ (insertion time), $t_{secure}$ (fastening time), dan $t_{reorient}$ (reorientation time). Klasifikasi handling code berdasarkan Boothroyd menggunakan tabel referensi (symmetry, thickness ratio, ease of grasping).

### 2.4. Manufacturing Cost Function

Untuk komponen sheet metal (kasus keranjang kopi enema), biaya fabrikasi:

$$
C_{mfg} = C_{mat} \cdot \rho \cdot V + C_{mach} \cdot t_{mach} + C_{tooling} \cdot \frac{1}{n}
$$

di mana $C_{mat}$ adalah harga material per kg, $\rho$ densitas, $V$ volume material, $C_{mach}$ biaya mesin per jam, $t_{mach}$ waktu machining, $C_{tooling}$ biaya tooling, dan $n$ jumlah produksi. Redesain DFMA umumnya menurunkan $n$ part dan $t_{mach}$.

### 2.5. Multi-Criteria Bridge Design Evaluation (Islam, 2024)

Untuk evaluasi jembatan pracetak, Islam (2024) mengusulkan fungsi utilitas multi-kriteria:

$$
U_j = \sum_{k=1}^{K} w_k \cdot s_{k,j}
$$

dengan $U_j$ utilitas desain alternatif ke-$j$, $w_k$ bobot kriteria ke-$k$ (misalnya biaya, struktural, manufacturability, transportability, liftability, erectability), dan $s_{k,j}$ *score* ternormalisasi. Bobot $w_k$ dapat ditentukan melalui AHP (*Analytic Hierarchy Process*):

$$
CR = \frac{CI}{RI}, \quad CI = \frac{\lambda_{max} - n}{n-1}
$$

Konsistensi bobot harus $CR < 0.10$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. SOP DFMA untuk Redesain Produk (Adaptasi Amirullah & Jakaria, 2024)

**Tahap 1 — Information Gathering:** Kumpulkan data teknis produk eksisting, termasuk *Bill of Materials* (BOM), gambar kerja, waktu siklus produksi aktual, dan data Quality Control rejection rate.

**Tahap 2 — DFA Analysis:** Hitung $N_m$, $t_m$, dan $T_{assembly}$ aktual. Identifikasi part dengan rasio assembly time insertion-to-fastening > 0.5 (indikasi over-engineering).

**Tahap 3 — Function Analysis:** Gunakan Function Analysis System Technique (FAST) untuk memisahkan fungsi *work* (fungsi utama) dari *bloat* (fungsi sekunder yang menambah part).

**Tahap 4 — Concept Generation:** Buat minimal tiga konsep redesain, masing-masing dengan skenario kombinasi part yang berbeda.

**Tahap 5 — DFM Analysis:** Evaluasi manufacturability tiap konsep menggunakan *manufacturing cost matrix* (proses stamping, welding, injection molding, dll.).

**Tahap 6 — Selection & Prototyping:** Pilih konsep dengan $\eta_{DFA}$ tertinggi dan *manufacturing cost* terendah, lalu buat prototipe untuk validasi.

### 3.2. SOP DfMA-BIM Integration untuk Jembatan (Adaptasi Islam, 2024)

**Tahap 1 — BIM Model Development:** Bangun model BIM Level of Development (LOD) 300-400 dari alternatif desain.

**Tahap 2 — DfMA Criteria Definition:** Definisikan kriteria DfMA: casting feasibility, modular segment weight limit, transport clearances, crane capacity, dan connection simplicity.

**Tahap 3 — Multi-Criteria Weighting:** Gunakan AHP dengan matriks perbandingan berpasangan yang divalidasi oleh ahli struktural, fabrikator, dan kontraktor ereksi.

**Tahap 4 — BIM-Based Scoring:** Ekstrak data geometri dari BIM dan scoring otomatis menggunakan parameter rules (misalnya segment weight > kapasitas crane diberi penalty factor).

**Tahap 5 — Sensitivity Analysis:** Uji robustnes dengan mengubah $w_k \pm 10\%$ untuk memastikan ranking alternatif tidak fluktuatif.

**Tahap 6 — Final Selection & Design Freeze:** Pilih alternatif dengan $U_j$ tertinggi, dokumentasikan *design freeze report* sebagai baseline fabrikasi.

### 3.3. Diagram Alir Proses DFMA

```
┌─────────────────────┐
│   Data Existing     │
│   Product/System    │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│   DFA Analysis      │
│  (Part Count, Time) │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  Function Analysis  │
│      (FAST)         │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Concept Generation  │
│   (3+ Alternatives)  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  DFM + Cost Matrix  │
│   Evaluation        │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  Selected Concept + │
│     Prototype       │
└─────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Kasus 1: Redesain Keranjang Kopi Enema (Adaptasi Amirullah & Jakaria, 2024)

**Parameter Eksisting:**
- Part count: $N_p = 12$ part
- Material: stainless steel 304 sheet 1.2 mm
- Assembly time aktual: $T_{assembly} = 480$ detik/unit
- Welding joint: 8 titik
- Biaya produksi existing: Rp 285.000/unit

**Perhitungan DFA:**

Minimum part teoritis menurut Boothroyd:
$$
N_m = N_{essential} + N_{functional} = 4 + 1 = 5
$$

di mana 4 part essential (body, lid, filter mesh, handle) + 1 functional (locking ring). Minimum time per part teoritis $t_m = 9$ detik, sehingga:

$$
t_m \cdot N_m = 45 \text{ detik}
$$

Efisiensi DFA eksisting:
$$
\eta_{DFA}^{existing} = \frac{45}{480} \times 100\% = 9.375\%
$$

Efisiensi sangat rendah — mengonfirmasi over-engineering.

**Skenario Redesain:**

Setelah DFMA, dilakukan integrasi komponen: handle digabung dengan body melalui *folding & stamping* (sheet metal one-piece), locking ring dieliminasi dengan *snap-fit* geometry, filter mesh menggunakan *laser-cut integrated slots*.

- Part count baru: $N_p' = 6$
- Assembly time baru: $T_{assembly}' = 95$ detik
- Welding joint baru: 2 titik (hanya body-to-base)

Efisiensi DFA redesain:
$$
\eta_{DFA}^{new} = \frac{6 \times 9}{95} \times 100\% \approx 56.84\%
$$

**Improvement:** $\Delta\eta = 56.84\% - 9.375\% = 47.47\%$ atau peningkatan 6 kali lipat.

**Cost Reduction:**

Biaya produksi baru dihitung dengan $C_{mat}$ stainless steel Rp 45.000/kg, $\rho = 7.93$ g/cm³, volume material turun 30% karena integrasi part:

$$
C_{mfg}^{new} = (45.000 \times 0.85) + (25.000 \times 0.4) = 48.250 \text{ Rp/unit}
$$

Assembly cost turun karena $T_{assembly}$ berkurang:
$$
C_{assy}^{new} = T_{assembly}' \times C_{labor} = 95 \times
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
