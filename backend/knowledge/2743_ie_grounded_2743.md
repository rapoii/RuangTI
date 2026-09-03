# 2743 — Analisis Implementasi FMEA AIAG/VDA dalam Industri Otomotif: Integrasi Manajemen Risiko, Keandalan Proses, dan Optimalisasi Pemeliharaan Manufaktur CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22, No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal (UPS - Universitas Puangrimaggalatung)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi tekanan simultan dari tiga vektor strategis: (i) peningkatan kompleksitas elektrifikasi powertrain dan arsitektur *software-defined vehicle*, (ii) standardisasi mutu rigor berbasis IATF 16949:2016 yang menuntut dokumentasi risiko preventif, dan (iii) eskalasi biaya *recall* yang dapat melampaui USD 1 miliar per kejadian pada kasus *safety-critical*. Dalam konteks inilah Bizeli & Terazzi (2024, DOI: 10.31510/infa.v22i1.2155) mempublikasikan studi kasus kualitatif-deskriptif di sebuah perusahaan multinasional manufaktur komponen otomotif yang mengadopsi standar FMEA AIAG/VDA —手册 resmi yang diterbitkan bersama oleh *Automotive Industry Action Group* (AIAG) dan *Verband der Automobilindustrie* (VDA) pada Juni 2019 sebagai pengganti/revisi harmonis terhadap AIAG FMEA edisi 4 (2008) dan VDA-Vol. 4 (2012).

Urgensi adopsi metodologi baru ini muncul karena metode FMEA klasik berbasis *Risk Priority Number* (RPN) terbukti memiliki tiga kelemahan struktural: redundansi antar tim FMEA (dua mode kegagalan dengan profil risiko identik dapat menghasilkan skor RPN berbeda karena variasi penilaian Deteksi), penyederhanaan berlebihan (*oversimplification*) dari produk perkalian tiga parameter, serta ketidakmampuan membedakan aksi yang bersifat preventif versus detektif. AIAG/VDA menjawabnya dengan memperkenalkan *Action Priority* (AP) berkategori **High (H), Medium (M), Low (L)** yang diturunkan dari tabel lookup berbasis kombinasi Severity (S), Occurrence (O), dan Detectability (D), bukan sekadar perkalian. Pendekatan ini selaras dengan paradigma *risk-based thinking* yang diadopsi ISO 9001:2015 dan IATF 16949:2016.

Studi Bizeli & Terazzi (2024) melakukan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di perusahaan multinasional tersebut. Temuan sentralnya: aplikasi FMEA AIAG/VDA secara empiris menghasilkan pencegahan kegagalan, reduksi biaya *rework* dan *recall*, peningkatan keandalan produk, integrasi lintas-fungsi tim, dan optimasi proses produksi. Namun, hambatan signifikan juga teridentifikasi: resistensi perubahan kultural terhadap format baru (terutama perpindahan dari RPN ke AP), kebutuhan pelatihan berkelanjutan, dan tantangan integrasi perangkat lunak (misal transisi dari format spreadsheet ke aplikasi *FMEA Connect* atau *IQ-FMEA*). Dalam lini pemeliharaan peralatan manufaktur, studi pendukung Saputra & Sukmono (2024, DOI: 10.21070/ups.8248) menunjukkan bahwa FMEA juga efektif untuk mesin *CNC milling*, memberikan justifikasi ganda bahwa metodologi ini bekerja baik pada level *product FMEA* maupun *process/machine FMEA*.

Makna strategis bagi ekosistem manufaktur Indonesia sangat relevan: Industri Otomotif Indonesia yang menyumbang ~10% PDB manufaktur (data Kemenperin) tengah melakukan transisi dari manufaktur konvensional ke *Industry 4.0*, di mana sistem manajemen risiko preventif seperti FMEA AIAG/VDA menjadi prasyarat untuk menjadi *Tier-1 supplier* global. Oleh karena itu, modul 2743 ini menyusun kerangka referensi untuk mengintegrasikan FMEA AIAG/VDA ke dalam praktik rekayasa industri kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Evaluasi Severity, Occurrence, dan Detectability

AIAG/VDA FMEA mempertahankan tiga parameter fundamental FMEA klasik, masing-masing diskalakan 1–10 dengan kriteria penilaian yang lebih rigor dan terstandarisasi (Tabel 2.1).

$$S \in \{1, 2, ..., 10\}, \quad O \in \{1, 2, ..., 10\}, \quad D \in \{1, 2, ..., 10\}$$

- **Severity (S)** — mengukur tingkat keseriusan dampak mode kegagalan terhadap *end customer*. Skala: 1 = tidak ada dampak, 10 = *safety hazard* dengan peringatan tanpa kemungkinan respons.
- **Occurrence (O)** — mengukur probabilitas atau frekuensi mode kegagalan terjadi, terkait dengan *Failure Rate (λ)* per siklus atau perjam operasi.
- **Detectability (D)** — secara AIAG/VDA didefinisikan ulang sebagai **Detection (D)**, di mana nilai rendah = deteksi mudah, nilai tinggi = sulit dideteksi sebelum pengiriman.

Hubungan kuantitatif dengan laju kegagalan fisik dapat dinyatakan melalui parameter MTBF (*Mean Time Between Failures*):

$$\lambda = \frac{1}{MTBF}$$

Untuk komponen otomotif kritis (misal sensor ABS dengan MTBF ≈ 500.000 jam), $\lambda = 2 \times 10^{-6}$ per jam, yang bersesuaian dengan Occurrence rating 3–4 pada tabel AIAG/VDA.

### 2.2. Transisi dari RPN ke Action Priority (AP)

Rumus RPN klasik:

$$RPN = S \times O \times D \in [1, 1000]$$

Namun AIAG/VDA mengeliminasi RPN dan menggantinya dengan matriks keputusan AP. Tabel AP ditentukan oleh kombinasi (S, O, D) yang dipetakan ke kategori:

$$AP = f(S, O, D) \rightarrow \{H, M, L\}$$

Logika ini mengatasi *rank reversal problem* dan memungkinkan pemilahan prioritas yang lebih diskriminatif: kombinasi $(S=9, O=2, D=5)$ dan $(S=8, O=3, D=4)$ keduanya menghasilkan $RPN=90$, namun AP dapat memberikan prioritas berbeda tergantung pada bobot keamanan (S lebih dominan). Untuk transmisi item-item ke *Control Plan* dan *Operation Sheet*, hanya mode kegagalan dengan AP = H yang memerlukan respons wajib, AP = M memerlukan tinjauan, AP = L didokumentasikan tanpa aksi tambahan.

### 2.3. Formulasi Risk Reduction Cost-Benefit

Studi Bizeli & Terazzi (2024) menyoroti bahwa salah satu manfaat utama adalah reduksi biaya. Formulasi *cost of quality* sebelum dan sesudah implementasi FMEA:

$$\Delta C_{total} = (C_{rework,0} + C_{recall,0} + C_{warranty,0}) - (C_{rework,1} + C_{recall,1} + C_{warranty,1})$$

di mana subscript 0 = sebelum implementasi, 1 = sesudah implementasi. *Return on Prevention Investment* (ROPI) dapat dihitung sebagai:

$$ROPI = \frac{\Delta C_{total}}{C_{FMEA}} \times 100\%$$

dengan $C_{FMEA}$ adalah biaya agregat pelatihan, perangkat lunak, dan *FMEA facilitator time*.

### 2.4. Formulasi Penjadwalan Pemeliharaan Preventif Berbasis FMEA

Saputra & Sukmono (2024) menggunakan FMEA untuk memprioritaskan mode kegagalan mesin *CNC milling*. Interval pemeliharaan preventif optimum dapat diformulasikan menggunakan model *reliability-centered maintenance*:

$$T_{preventif,i} = \frac{T_{BD,i}}{k_i}$$

di mana $T_{BD,i}$ adalah interval kerusakan (*breakdown*) alami komponen $i$ (dari data historis atau *Weibull analysis*), dan $k_i$ adalah *multiplier factor* yang bergantung pada peringkat AP komponen tersebut:

$$k_i = \begin{cases} 1.0 & \text{jika } AP = L \\ 0.7 & \text{jika } AP = M \\ 0.5 & \text{jika } AP = H \end{cases}$$

Formulasi ini memastikan komponen dengan risiko tinggi menerima interval inspeksi lebih pendek, mengoptimalkan biaya siklus-hidup tanpa mengorbankan keandalan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi FMEA AIAG/VDA mengikuti **siklus 7 langkah** yang merupakan evolusi dari 10-langkah FMEA klasik, dengan penekanan baru pada *FMEA Project Planning* dan *Risk Mitigation*.

### Diagram Alir Implementasi

```
[Langkah 1] Planning & Scope Definition
       ↓
[Langkah 2] Structure Analysis (Block Diagram / Boundary Diagram / P-Diagram)
       ↓
[Langkah 3] Function Analysis (Function Net / Interface Matrix)
       ↓
[Langkah 4] Failure Analysis (Failure Mode → Effect → Cause chain)
       ↓
[Langkah 5] Risk Analysis (S, O, D Assessment → Action Priority)
       ↓
[Langkah 6] Optimization (Action Implementation, Effectiveness Verification)
       ↓
[Langkah 7] Documentation & Communication (Control Plan linkage, Lessons Learned)
```

### Prosedur Langkah Demi Langkah

**Langkah 1 — Planning & Scope Definition:** Tentukan cakupan program FMEA (produk/proses/sistem), identifikasi anggota tim lintas-fungsi (R&D, Manufaktur, Kualitas, Supplier), dan tetapkan milestone. Bizeli & Terazzi (2024) menekankan bahwa *cross-functional team* merupakan prasyarat keberhasilan.

**Langkah 2 — Structure Analysis:** Bangun *Block Diagram* atau *Boundary Diagram* komponen, dan untuk analisis sistem gunakan *P-Diagram* (Parameter Diagram) yang memetakan input, output, *noise factors*, *error states*, dan *control factors*. Pendekatan ini mengungkap korelasi antara kondisi operasional dan mode kegagalan yang tidak terlihat pada FMEA klasik.

**Langkah 3 — Function Analysis:** Definisikan fungsi setiap elemen menggunakan struktur *Verb + Noun* (misal "memindahkan torsi", "menutup kontak listrik"). Gunakan *Function Net* untuk menunjukkan hubungan antar fungsi pada level hierarki yang berbeda. Tabel *Interface Matrix* kemudian mengidentifikasi interaksi antar-elemen.

**Langkah 4 — Failure Analysis:** Untuk setiap fungsi, identifikasi mode kegagalan (failure mode), efek (effect), dan penyebab (cause). Beri perhatian khusus pada *cascading failure* dan *common cause failure*.

**Langkah 5 — Risk Analysis:** Berikan peringkat S, O, D menggunakan tabel AIAG/VDA yang baru (skala S: 1–10, O: 1–10, D: 1–10 dengan deskripsi spesifik). Tentukan AP menggunakan tabel *Action Priority Matrix* (lampiran AIAG/VDA Handbook 2019). Untuk item software/cyber, gunakan lampiran khusus AIAG/VDA Software FMEA Supplement (2021).

**Langkah 6 — Optimization:** Tentukan *Prevention* actions (mengurangi O) dan *Detection* actions (mengurangi D). Jangan pernah berusaha mengurangi S — Severity adalah konsekuensi desain, hanya dapat dimitigasi melalui *redesign*. Setelah aksi diterapkan, hitung ulang AP.

**Langkah 7 — Documentation & Communication:** Hubungkan FMEA ke *Control Plan* (IATF 16949:2016 klausul 8.5.1.1), *Operation Sheet*, dan *DVP&R* (Design Verification Plan & Report). Komunikasikan kepada supplier sebagai bagian dari PPAP (Production Part Approval Process).

### Integrasi dengan Pemeliharaan CNC

Saputra & Sukmono (2024) menunjukkan bahwa SOP FMEA untuk mesin *CNC milling* mengikuti alur identifikasi komponen kritis (spindle, ball screw, ATC – *Automatic Tool Changer*, sistem hidrolik, dsb.), penilaian mode kegagalan (bearing failure, backlash, misalignment, dsb.), dan prioritas pemeliharaan. Hasil FMEA kemudian diterjemahkan menjadi *maintenance schedule* dengan periode inspeksi berbasis AP seperti pada Persamaan (4.1).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus: FMEA Modul Sensor Otomotif

Sebuah perusahaan komponen Tier-1 memproduksi *Wheel Speed Sensor* untuk sistem ABS. Tim FMEA mengidentifikasi enam mode kegagalan potensial. Tabel berikut merangkum penilaian S, O, D, dan AP untuk tiga mode kritis:

| No | Mode Kegagalan | Efek | Penyebab | S | O | D | RPN (Klasik) | AP (AIAG/VDA) |
|----|---------------|------|----------|---|---|---|-------------|---------------|
| 1 | Sinyal output putus | Lampu ABS menyala, fungsi ABS hilang | Korosi pada housing, retakan kabel | 9 | 3 | 6 | 162 | **M** |
| 2 | Sinyal output noise tinggi | False triggering ABS | Kontaminasi Hall sensor | 8 | 5 | 7 | 280 | **H** |
| 3 | Kecepatan respon lambat | ABS terlambat aktif | Degradasi magnet | 7 | 4 | 5 | 140 | **M** |

**Interpretasi Manajemen:**
Mode #2 memiliki RPN tertinggi (280) dan AP = High, menandakan prioritas utama. Mode #1 dan #3 memiliki AP = Medium, memerlukan tinjauan tanpa aksi wajib.

**Aksi Pengurangan Risiko untuk Mode #2:**
1. **Prevention:** Guna seal ganda (IP67→IP69K), supplier audit peningkatan → O turun dari 5 ke 3.
2. **Detection:** Tambah 100% *end-of-line hipot test* dan *X-ray inspection* pada sambungan solder → D turun dari 7 ke 3.
3. **Hasil:** AP berubah dari H → L setelah verifikasi.

### 4.2. Perhitungan Dampak Ekonomi (ROPI)

Asumsikan biaya *rework* sebelum FMEA: Rp 12 miliar/tahun; *recall*: Rp 45 miliar/insiden (1 insiden/tahun); *warranty*: Rp 8 miliar/tahun.
Setelah implementasi FMEA AIAG/VDA selama