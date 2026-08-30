# 931 — Penilaian Opsi Nyata (Real Options Valuation) untuk Ekspansi Pabrik Industri Multi-Fase

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Real Options Valuation (ROV) for Multi-Phased Industrial Factory Expansion: Black-Scholes Formula, Cox-Ross-Rubinstein (CRR) Binomial Lattice, and Option to Delay/Abandon  
**Standar & Referensi Utama:** Dixit & Pindyck (Investment under Uncertainty, Princeton University Press); Trigeorgis (Real Options, MIT Press); Blank & Tarquin (Engineering Economy, 8th Ed., McGraw-Hill)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, perusahaan menghadapi ketidakpastian yang signifikan dalam pengambilan keputusan investasi, terutama dalam ekspansi pabrik yang melibatkan banyak fase. Ketidakpastian ini dapat berasal dari fluktuasi permintaan pasar, perubahan teknologi, dan dinamika persaingan. Dalam situasi seperti ini, pendekatan tradisional untuk evaluasi investasi, seperti Net Present Value (NPV), sering kali tidak memadai. Oleh karena itu, penilaian opsi nyata (Real Options Valuation, ROV) menjadi semakin relevan. ROV memberikan kerangka kerja untuk menilai fleksibilitas manajerial dalam menghadapi ketidakpastian, memungkinkan perusahaan untuk menunda, memperluas, atau bahkan membatalkan proyek berdasarkan informasi yang diperoleh seiring berjalannya waktu.

Sebagai contoh, dalam industri manufaktur, keputusan untuk memperluas kapasitas produksi sering kali melibatkan investasi besar yang tidak dapat dibatalkan. Dengan menggunakan ROV, perusahaan dapat mengevaluasi nilai dari opsi untuk menunda ekspansi hingga kondisi pasar lebih menguntungkan, atau untuk membatalkan proyek jika proyeksi tidak memenuhi harapan. Tantangan utama dalam penerapan ROV adalah kompleksitas model dan kebutuhan untuk data yang akurat. Oleh karena itu, pemahaman yang mendalam tentang teknik penilaian opsi, termasuk penggunaan rumus Black-Scholes dan model binomial Cox-Ross-Rubinstein, sangat penting untuk pengambilan keputusan yang efektif dalam konteks ini (Dixit & Pindyck, 1994; Trigeorgis, 1996).

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Opsi Nyata dan Nilai Opsi

Opsi nyata adalah hak, tetapi bukan kewajiban, untuk melakukan investasi pada proyek di masa depan. Nilai dari opsi ini dapat dihitung menggunakan berbagai metode, termasuk rumus Black-Scholes dan model binomial.

### 2.2. Rumus Black-Scholes

Rumus Black-Scholes untuk menghitung nilai opsi Eropa dapat dinyatakan sebagai berikut:

$$
C = S_0 N(d_1) - Xe^{-rT} N(d_2)
$$

di mana:
- \( C \) = nilai opsi call
- \( S_0 \) = harga aset dasar saat ini
- \( X \) = harga strike
- \( r \) = tingkat suku bunga bebas risiko
- \( T \) = waktu hingga jatuh tempo
- \( N(d) \) = fungsi distribusi kumulatif normal
- \( d_1 = \frac{\ln(S_0/X) + (r + \sigma^2/2)T}{\sigma\sqrt{T}} \)
- \( d_2 = d_1 - \sigma\sqrt{T} \)
- \( \sigma \) = volatilitas aset

### 2.3. Model Binomial Cox-Ross-Rubinstein (CRR)

Model binomial CRR digunakan untuk menghitung nilai opsi dengan membangun pohon binomial. Nilai opsi pada setiap node dihitung berdasarkan kemungkinan pergerakan harga aset. Rumus dasar untuk perhitungan adalah:

$$
C = e^{-r\Delta t} \left( pC_u + (1-p)C_d \right)
$$

di mana:
- \( C \) = nilai opsi saat ini
- \( C_u \) = nilai opsi jika harga naik
- \( C_d \) = nilai opsi jika harga turun
- \( p \) = probabilitas harga naik
- \( \Delta t \) = interval waktu

### 2.4. Opsi untuk Menunda atau Membatalkan

Dalam konteks ekspansi pabrik, perusahaan dapat memiliki opsi untuk menunda atau membatalkan proyek. Nilai dari opsi ini dapat dihitung dengan mempertimbangkan nilai sekarang dari arus kas yang diharapkan jika proyek dilanjutkan dibandingkan dengan nilai dari menunggu hingga informasi lebih lanjut tersedia.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Proyek**: Tentukan proyek ekspansi pabrik yang akan dievaluasi.
2. **Pengumpulan Data**: Kumpulkan data historis tentang harga bahan baku, permintaan pasar, dan biaya operasional.
3. **Model Penilaian**: Pilih model penilaian yang sesuai (Black-Scholes atau CRR) berdasarkan karakteristik proyek.
4. **Perhitungan Nilai Opsi**: Hitung nilai opsi menggunakan rumus yang telah dijelaskan.
5. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk memahami dampak perubahan parameter terhadap nilai opsi.
6. **Pengambilan Keputusan**: Gunakan hasil penilaian untuk mendukung keputusan manajerial tentang ekspansi.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah dalam proses penilaian opsi nyata:

```
[Identifikasi Proyek] --> [Pengumpulan Data] --> [Model Penilaian] --> [Perhitungan Nilai Opsi] --> [Analisis Sensitivitas] --> [Pengambilan Keputusan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan manufaktur mempertimbangkan untuk memperluas pabriknya dengan investasi awal sebesar $1.000.000. Proyek ini memiliki potensi arus kas tahunan sebesar $300.000 selama 5 tahun ke depan. Tingkat suku bunga bebas risiko adalah 5%, dan volatilitas harga produk diperkirakan sebesar 20%.

### 4.2. Perhitungan Menggunakan Rumus Black-Scholes

1. **Parameter Input**:
   - \( S_0 = 300000 \) (arus kas tahunan)
   - \( X = 1000000 \) (investasi awal)
   - \( r = 0.05 \)
   - \( T = 5 \)
   - \( \sigma = 0.20 \)

2. **Hitung \( d_1 \) dan \( d_2 \)**:
   \[
   d_1 = \frac{\ln(300000/1000000) + (0.05 + 0.02) \cdot 5}{0.20 \sqrt{5}} = -1.1447
   \]
   \[
   d_2 = d_1 - 0.20 \sqrt{5} = -1.1447 - 0.4472 = -1.5919
   \]

3. **Hitung \( N(d_1) \) dan \( N(d_2) \)**:
   \[
   N(d_1) \approx 0.1260, \quad N(d_2) \approx 0.0561
   \]

4. **Hitung Nilai Opsi**:
   \[
   C = 300000 \cdot 0.1260 - 1000000 e^{-0.05 \cdot 5} \cdot 0.0561 \approx 37800 - 27280 = 10520
   \]

### 4.3. Interpretasi Hasil

Nilai opsi untuk memperluas pabrik adalah sekitar $10.520. Ini menunjukkan bahwa, meskipun investasi awal cukup besar, ada nilai yang dapat diperoleh dari fleksibilitas untuk menunggu kondisi pasar yang lebih baik sebelum melanjutkan proyek.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

ROV tidak hanya relevan untuk industri manufaktur, tetapi juga dapat diterapkan dalam sektor lain seperti energi, teknologi informasi, dan infrastruktur. Dalam konteks rantai pasok, ROV dapat membantu perusahaan dalam pengambilan keputusan terkait investasi dalam teknologi baru atau pengembangan produk. 

Namun, ada batasan dalam metodologi ini, seperti ketergantungan pada asumsi yang mungkin tidak selalu akurat. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan realistis, serta untuk mengeksplorasi integrasi ROV dengan teknik manajemen risiko lainnya.

Dengan meningkatnya ketidakpastian di pasar global, ROV akan menjadi alat yang semakin penting untuk membantu perusahaan dalam pengambilan keputusan strategis di masa depan. Penelitian lebih lanjut dapat difokuskan pada pengembangan algoritma yang lebih canggih dan penerapan analisis data besar untuk meningkatkan akurasi prediksi dalam penilaian opsi nyata.