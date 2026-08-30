# 869 — Manajemen Keselamatan Proses Terintegrasi: Analisis Risiko Bow-Tie, Identifikasi Bahaya, Penilaian Risiko dan Penentuan Kontrol (HIRADC), serta Model Penyebab Kerugian (SCAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Integrated Process Safety Management: Bow-Tie Risk Analysis, Hazard Identification Risk Assessment and Determining Control (HIRADC), and Loss Causation Model (SCAT) Incident Root-Cause  
**Standar & Referensi Utama:** Center for Chemical Process Safety (CCPS / AIChE: Guidelines for Hazard Evaluation Procedures, 3rd Ed.); ISO 45001; Bird & Germain  

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, manajemen keselamatan proses (Process Safety Management - PSM) menjadi semakin penting seiring dengan kompleksitas operasional dan meningkatnya risiko yang dihadapi oleh industri manufaktur dan rantai pasok. Penerapan teknologi baru, seperti otomasi dan digitalisasi, meskipun meningkatkan efisiensi, juga dapat memperbesar potensi bahaya yang tidak terduga. Kecelakaan industri dapat mengakibatkan kerugian finansial yang signifikan, kerusakan lingkungan, dan dampak sosial yang luas. Oleh karena itu, pendekatan sistematis untuk mengidentifikasi dan mengelola risiko menjadi sangat krusial.

Analisis risiko Bow-Tie, yang menggabungkan elemen dari analisis risiko kuantitatif dan kualitatif, memberikan kerangka kerja yang komprehensif untuk memahami dan mengelola risiko. Metodologi ini memungkinkan identifikasi bahaya, penilaian risiko, dan penentuan kontrol yang tepat untuk mencegah insiden. Selain itu, model penyebab kerugian (SCAT) membantu dalam mengidentifikasi akar penyebab insiden, yang penting untuk perbaikan berkelanjutan dalam sistem manajemen keselamatan.

Dalam konteks ini, ISO 45001 memberikan kerangka kerja untuk sistem manajemen keselamatan dan kesehatan kerja yang dapat diintegrasikan dengan praktik PSM. Dengan mengadopsi standar ini, organisasi dapat meningkatkan kinerja keselamatan mereka dan meminimalkan risiko yang terkait dengan operasi mereka. Oleh karena itu, pemahaman yang mendalam tentang metodologi ini dan penerapannya dalam konteks industri sangat penting untuk mencapai tujuan keselamatan dan keberlanjutan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Analisis Risiko Bow-Tie

Analisis risiko Bow-Tie adalah metode visual yang menggambarkan hubungan antara penyebab, konsekuensi, dan kontrol risiko. Diagram Bow-Tie terdiri dari dua sisi: sisi kiri menunjukkan penyebab insiden (hazard) dan sisi kanan menunjukkan konsekuensi. Di tengah, terdapat kontrol yang diterapkan untuk mencegah penyebab dan mengurangi konsekuensi.

#### 2.1.1. Notasi Matematis

Misalkan:
- $H$: Bahaya yang diidentifikasi.
- $C$: Konsekuensi dari bahaya.
- $P$: Probabilitas terjadinya insiden.
- $R$: Risiko yang dihitung sebagai produk dari probabilitas dan konsekuensi.

Maka, risiko dapat dinyatakan sebagai:

$$
R = P \cdot C
$$

### 2.2. HIRADC (Hazard Identification Risk Assessment and Determining Control)

HIRADC adalah proses sistematis untuk mengidentifikasi bahaya, menilai risiko, dan menentukan kontrol yang tepat. Proses ini meliputi langkah-langkah berikut:

1. Identifikasi bahaya ($H_i$).
2. Penilaian risiko ($R_i$) berdasarkan probabilitas ($P_i$) dan dampak ($I_i$).
3. Penentuan kontrol ($C_i$) untuk mengurangi risiko.

Rumus untuk menghitung risiko dalam HIRADC adalah:

$$
R_i = P_i \cdot I_i
$$

### 2.3. Model Penyebab Kerugian (SCAT)

Model SCAT digunakan untuk menganalisis akar penyebab insiden. SCAT mengidentifikasi faktor-faktor yang berkontribusi terhadap insiden dan mengkategorikannya ke dalam beberapa kategori, seperti:

- Manusia
- Proses
- Lingkungan
- Sistem

### 2.4. Pembuktian/Derivasi

Dari rumus yang telah dinyatakan, kita dapat melihat bahwa untuk mengurangi risiko, kita dapat menurunkan probabilitas ($P$) atau dampak ($C$). Misalnya, jika kita dapat mengurangi probabilitas terjadinya insiden dari 0.1 menjadi 0.05, maka risiko akan berkurang sebagai berikut:

$$
R_{baru} = 0.05 \cdot C
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Bahaya**: Menggunakan metode brainstorming, analisis historis, dan inspeksi lapangan untuk mengidentifikasi bahaya.
2. **Penilaian Risiko**: Menggunakan matriks risiko untuk menilai probabilitas dan dampak dari setiap bahaya yang diidentifikasi.
3. **Penentuan Kontrol**: Mengembangkan dan menerapkan kontrol yang sesuai untuk mengurangi risiko.
4. **Monitoring dan Review**: Melakukan audit dan review berkala untuk memastikan efektivitas kontrol yang diterapkan.

### 3.2. Diagram Alir Proses

Berikut adalah diagram alir proses implementasi HIRADC:

```
[Identifikasi Bahaya] --> [Penilaian Risiko] --> [Penentuan Kontrol] --> [Monitoring dan Review]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik kimia mengidentifikasi bahaya kebocoran gas beracun. Berikut adalah parameter yang diidentifikasi:

- **Probabilitas kebocoran**: $P = 0.1$
- **Dampak (kerugian finansial)**: $C = 1,000,000$ USD

### 4.2. Perhitungan Risiko

Menggunakan rumus risiko:

$$
R = P \cdot C = 0.1 \cdot 1,000,000 = 100,000 \text{ USD}
$$

### 4.3. Implementasi Kontrol

Setelah penilaian, pabrik memutuskan untuk menerapkan kontrol berikut:

- Pemasangan detektor gas
- Pelatihan karyawan
- Prosedur darurat

Setelah penerapan kontrol, probabilitas kebocoran diperkirakan turun menjadi $P = 0.02$. Maka risiko baru adalah:

$$
R_{baru} = 0.02 \cdot 1,000,000 = 20,000 \text{ USD}
$$

### 4.4. Interpretasi Hasil

Penerapan kontrol berhasil mengurangi risiko dari $100,000$ USD menjadi $20,000$ USD, menunjukkan efektivitas dari sistem manajemen keselamatan yang diterapkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Metodologi PSM dan HIRADC dapat diterapkan di berbagai sektor, termasuk rantai pasok, otomasi, dan manajemen biaya. Dalam rantai pasok, identifikasi risiko dapat membantu dalam mengelola risiko yang terkait dengan pemasok dan distribusi. Dalam otomasi, penerapan kontrol dapat mengurangi risiko kecelakaan akibat kesalahan manusia.

### 5.2. Batasan Metodologi

Meskipun metodologi ini sangat berguna, terdapat beberapa batasan, seperti ketergantungan pada data historis dan kemungkinan bias dalam penilaian risiko. Oleh karena itu, penting untuk terus memperbarui dan merevisi pendekatan berdasarkan pengalaman dan data baru.

### 5.3. Arah Riset Masa Depan

Riset masa depan dapat berfokus pada integrasi teknologi baru, seperti kecerdasan buatan dan analitik data besar, untuk meningkatkan efektivitas identifikasi bahaya dan penilaian risiko. Selain itu, pengembangan standar baru yang lebih adaptif terhadap perubahan teknologi dan lingkungan operasional juga diperlukan untuk meningkatkan keselamatan proses di industri.

---

Dokumen ini memberikan gambaran komprehensif tentang manajemen keselamatan proses terintegrasi, dengan fokus pada analisis risiko Bow-Tie, HIRADC, dan model SCAT. Melalui pemahaman yang mendalam dan penerapan metodologi ini, organisasi dapat meningkatkan keselamatan dan keberlanjutan operasional mereka.