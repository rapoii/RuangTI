# 866 — Persamaan Angkat NIOSH yang Direvisi (RNLE) untuk Penanganan Material Manual Asimetris dan Multi-Tugas yang Kompleks: Frekuensi, Penggabungan, Pengganda Asimetris, dan Indeks Angkat Kumulatif (CLI)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Revised NIOSH Lifting Equation (RNLE) for Complex Asymmetric and Multi-Task Manual Material Handling: Frequency, Coupling, Asymmetric Multipliers, and Cumulative Lifting Index (CLI)  
**Standar & Referensi Utama:** Waters et al. (1993 / NIOSH Manual CDC 94-110); Ergonomics (Taylor & Francis); ISO 11228-1; OSHA Technical Manual  

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, penanganan material manual merupakan aspek krusial yang mempengaruhi produktivitas dan keselamatan kerja. Dengan meningkatnya kompleksitas proses manufaktur dan rantai pasok, tantangan dalam penanganan material semakin beragam. Penanganan material yang tidak ergonomis dapat menyebabkan cedera otot dan kerangka, yang berujung pada biaya yang signifikan bagi perusahaan dalam bentuk klaim asuransi, kehilangan produktivitas, dan biaya pengobatan. Menurut laporan NIOSH, cedera terkait penanganan material menyumbang lebih dari 30% dari semua cedera di tempat kerja, menjadikannya isu yang mendesak untuk ditangani.

Revised NIOSH Lifting Equation (RNLE) menawarkan pendekatan sistematis untuk mengevaluasi risiko yang terkait dengan penanganan material manual, terutama dalam situasi yang melibatkan pengangkatan asimetris dan multi-tugas. Dengan mempertimbangkan faktor-faktor seperti frekuensi angkat, penggabungan, dan pengganda asimetris, RNLE memberikan alat yang lebih akurat untuk menilai beban kerja dan risiko cedera. Penelitian terbaru menunjukkan bahwa penerapan RNLE dapat mengurangi tingkat cedera hingga 25% di lingkungan kerja yang berisiko tinggi (Waters et al., 1993).

Dalam modul ini, kita akan membahas landasan teori dari RNLE, metodologi implementasi, serta studi kasus kuantitatif yang relevan. Dengan pendekatan ini, diharapkan dapat memberikan wawasan yang mendalam tentang penerapan RNLE dalam konteks industri yang kompleks.

## 2. Landasan Teori & Formulasi Matematis

Persamaan angkat NIOSH yang direvisi (RNLE) dirumuskan untuk mengevaluasi risiko cedera akibat penanganan material manual. Persamaan dasar RNLE dapat dinyatakan sebagai berikut:

$$
CLI = \frac{L_{max}}{RWL}
$$

Di mana:
- $CLI$ = Cumulative Lifting Index (Indeks Angkat Kumulatif)
- $L_{max}$ = Beban maksimum yang diangkat (dalam kg)
- $RWL$ = Recommended Weight Limit (Batas Berat yang Direkomendasikan, dalam kg)

Batas Berat yang Direkomendasikan ($RWL$) dihitung dengan mempertimbangkan beberapa faktor yang mempengaruhi risiko cedera, yang dinyatakan dalam rumus:

$$
RWL = LC \times HM \times VM \times DM \times AM \times FM
$$

Di mana:
- $LC$ = Load Constant (konstanta beban, 23 kg untuk posisi angkat yang ideal)
- $HM$ = Horizontal Multiplier (pengganda horizontal)
- $VM$ = Vertical Multiplier (pengganda vertikal)
- $DM$ = Distance Multiplier (pengganda jarak)
- $AM$ = Asymmetric Multiplier (pengganda asimetris)
- $FM$ = Frequency Multiplier (pengganda frekuensi)

### Definisi Variabel Parameter

1. **Load Constant ($LC$)**: Konstanta yang ditetapkan berdasarkan studi ergonomis untuk posisi angkat yang ideal.
2. **Horizontal Multiplier ($HM$)**: Dihitung berdasarkan jarak horizontal dari posisi tubuh ke beban yang diangkat.
3. **Vertical Multiplier ($VM$)**: Dihitung berdasarkan tinggi angkat beban.
4. **Distance Multiplier ($DM$)**: Menghitung dampak dari jarak angkat beban.
5. **Asymmetric Multiplier ($AM$)**: Menghitung dampak dari sudut asimetri saat mengangkat.
6. **Frequency Multiplier ($FM$)**: Menghitung dampak dari frekuensi pengangkatan.

### Pembuktian/Derivasi Matematis

Untuk menghitung $HM$, $VM$, $DM$, $AM$, dan $FM$, kita menggunakan tabel dan grafik yang telah ditetapkan dalam panduan NIOSH. Misalnya, untuk $HM$:

$$
HM = \begin{cases} 
1 & \text{jika } H \leq 25 \text{ cm} \\
\text{dihitung dari tabel} & \text{jika } H > 25 \text{ cm}
\end{cases}
$$

Di mana $H$ adalah jarak horizontal dari posisi tubuh ke beban. Demikian pula, $VM$, $DM$, $AM$, dan $FM$ dihitung berdasarkan parameter spesifik yang relevan dengan situasi pengangkatan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RNLE memerlukan pendekatan sistematis yang melibatkan langkah-langkah berikut:

1. **Identifikasi Tugas**: Menentukan tugas penanganan material yang akan dievaluasi.
2. **Pengumpulan Data**: Mengumpulkan data terkait beban, posisi tubuh, frekuensi angkat, dan variabel lainnya.
3. **Perhitungan RWL dan CLI**: Menghitung $RWL$ dan $CLI$ menggunakan rumus yang telah dijelaskan.
4. **Evaluasi Risiko**: Menilai apakah $CLI$ melebihi 1, yang menunjukkan risiko cedera.
5. **Rekomendasi Perbaikan**: Jika $CLI > 1$, rekomendasikan perubahan dalam prosedur kerja, alat bantu, atau pelatihan.

Diagram alir proses implementasi RNLE dapat digambarkan sebagai berikut:

```
[Identifikasi Tugas] --> [Pengumpulan Data] --> [Perhitungan RWL dan CLI] --> [Evaluasi Risiko] --> [Rekomendasi Perbaikan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Contoh Kasus

Misalkan sebuah perusahaan manufaktur melakukan pengangkatan kotak berat 30 kg dari posisi 30 cm dari tubuh dan 75 cm tinggi. Frekuensi pengangkatan adalah 10 kali per jam.

1. **Parameter yang Diketahui**:
   - $L_{max} = 30 \text{ kg}$
   - $H = 30 \text{ cm}$
   - $V = 75 \text{ cm}$
   - Frekuensi = 10 kali/jam

2. **Menghitung $HM$**:
   Dari tabel NIOSH, untuk $H = 30 \text{ cm}$, $HM = 0.9$.

3. **Menghitung $VM$**:
   Dari tabel NIOSH, untuk $V = 75 \text{ cm}$, $VM = 0.8$.

4. **Menghitung $DM$**:
   Misalkan jarak angkat adalah 50 cm, maka $DM = 1$ (karena jarak dalam batas yang ditentukan).

5. **Menghitung $AM$**:
   Misalkan sudut asimetri adalah 15 derajat, maka dari tabel, $AM = 0.9$.

6. **Menghitung $FM$**:
   Frekuensi 10 kali/jam, dari tabel, $FM = 0.7$.

7. **Menghitung $RWL$**:
   $$RWL = LC \times HM \times VM \times DM \times AM \times FM$$
   $$RWL = 23 \text{ kg} \times 0.9 \times 0.8 \times 1 \times 0.9 \times 0.7$$
   $$RWL = 23 \times 0.9 \times 0.8 \times 0.9 \times 0.7 = 10.5 \text{ kg}$$

8. **Menghitung $CLI$**:
   $$CLI = \frac{L_{max}}{RWL} = \frac{30}{10.5} \approx 2.86$$

### Interpretasi Hasil

Dengan $CLI > 1$, menunjukkan bahwa beban yang diangkat melebihi batas yang direkomendasikan, sehingga meningkatkan risiko cedera. Perusahaan perlu mempertimbangkan untuk mengurangi beban, meningkatkan alat bantu, atau mengubah prosedur kerja.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan RNLE tidak hanya terbatas pada sektor manufaktur, tetapi juga relevan dalam sektor lain seperti logistik, konstruksi, dan layanan kesehatan. Dalam konteks rantai pasok, RNLE dapat digunakan untuk merancang sistem penanganan material yang lebih efisien dan aman, mengurangi biaya terkait cedera dan meningkatkan produktivitas.

Namun, terdapat batasan dalam metodologi RNLE, seperti ketidakmampuan untuk menangkap variabilitas individu dalam kemampuan fisik pekerja. Oleh karena itu, penelitian masa depan perlu fokus pada pengembangan model yang lebih adaptif dan personalisasi, serta integrasi teknologi otomatisasi untuk mengurangi beban kerja manual.

Arah riset masa depan juga dapat mencakup pengembangan alat bantu ergonomis yang lebih baik, serta pelatihan berbasis teknologi untuk meningkatkan kesadaran pekerja tentang praktik penanganan material yang aman. Dengan demikian, RNLE dapat menjadi alat yang lebih efektif dalam menciptakan lingkungan kerja yang aman dan produktif.