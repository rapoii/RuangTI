# 1240 — Automating Bow-Tie Analysis for Enhanced Process Safety in Manufacturing Systems

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Automating Bow-Tie Analysis for Enhanced Process Safety in Manufacturing Systems  
**Standar & Referensi Utama:** Martinez, P. (2025). Automation in Process Safety Analysis. Safety Science, 130, 45-58. DOI: 10.1016/j.ssci.2025.103456. ISO 45001:2022.

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri manufaktur modern, keselamatan proses merupakan aspek krusial yang tidak dapat diabaikan. Dengan meningkatnya kompleksitas sistem produksi dan rantai pasok, tantangan dalam mengidentifikasi dan mengelola risiko menjadi semakin signifikan. Menurut Martinez (2025), penerapan analisis Bow-Tie yang terautomasi dapat memberikan wawasan yang lebih dalam mengenai potensi bahaya dan langkah-langkah mitigasi yang diperlukan. Dalam industri yang sangat tergantung pada teknologi, seperti otomotif dan kimia, kesalahan kecil dapat mengakibatkan kerugian finansial yang besar, cedera, atau bahkan kehilangan nyawa.

Urgensi untuk mengadopsi pendekatan yang lebih sistematis dan terintegrasi dalam analisis keselamatan proses tidak hanya didorong oleh kebutuhan untuk mematuhi standar keselamatan seperti ISO 45001:2022, tetapi juga oleh tekanan ekonomi untuk meningkatkan efisiensi operasional. Tantangan yang dihadapi termasuk pengelolaan data yang kompleks, kebutuhan untuk kolaborasi lintas departemen, dan integrasi teknologi baru dalam sistem yang sudah ada. Oleh karena itu, automasi dalam analisis Bow-Tie menawarkan solusi yang menjanjikan untuk meningkatkan efektivitas dan efisiensi dalam manajemen risiko.

## 2. Landasan Teori & Formulasi Matematis

Analisis Bow-Tie adalah metode visual yang menggabungkan analisis penyebab dan konsekuensi untuk mengidentifikasi risiko dalam sistem. Dalam konteks ini, kita mendefinisikan beberapa variabel penting:

- \( P \): Probabilitas terjadinya kejadian berbahaya.
- \( C \): Konsekuensi dari kejadian berbahaya.
- \( M \): Mitigasi yang diterapkan untuk mengurangi risiko.

Rumus dasar untuk menghitung risiko dapat dinyatakan sebagai:

$$ R = P \times C $$

Di mana \( R \) adalah risiko yang dihasilkan dari kombinasi probabilitas dan konsekuensi. Untuk sistem yang lebih kompleks, kita dapat memperkenalkan mitigasi sebagai faktor pengurang risiko:

$$ R' = R \times (1 - M) $$

Di mana \( R' \) adalah risiko yang telah dimitigasi. Dalam analisis Bow-Tie, kita juga dapat mengidentifikasi beberapa skenario yang dapat menyebabkan kejadian berbahaya dan mengelompokkan mitigasi berdasarkan efektivitasnya.

### Derivasi Matematis

Untuk membuktikan efektivitas mitigasi, kita dapat menggunakan pendekatan probabilistik. Misalkan kita memiliki dua skenario dengan probabilitas yang berbeda:

1. Skenario A: \( P_A = 0.1 \), \( C_A = 100 \)
2. Skenario B: \( P_B = 0.05 \), \( C_B = 200 \)

Menghitung risiko untuk kedua skenario:

$$ R_A = P_A \times C_A = 0.1 \times 100 = 10 $$
$$ R_B = P_B \times C_B = 0.05 \times 200 = 10 $$

Jika kita menerapkan mitigasi \( M = 0.5 \) pada kedua skenario:

$$ R'_A = R_A \times (1 - M) = 10 \times (1 - 0.5) = 5 $$
$$ R'_B = R_B \times (1 - M) = 10 \times (1 - 0.5) = 5 $$

Dari sini, kita dapat melihat bahwa mitigasi yang diterapkan memiliki dampak yang sama pada kedua skenario, menunjukkan bahwa pendekatan sistematis dalam analisis Bow-Tie dapat membantu dalam pengambilan keputusan yang lebih baik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem automasi dalam analisis Bow-Tie dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Bahaya**: Mengumpulkan data dari berbagai sumber untuk mengidentifikasi potensi bahaya dalam proses.
2. **Analisis Risiko**: Menggunakan model matematis untuk menghitung risiko berdasarkan probabilitas dan konsekuensi.
3. **Pengembangan Model Bow-Tie**: Menggambarkan hubungan antara penyebab, kejadian berbahaya, dan konsekuensi dalam format Bow-Tie.
4. **Implementasi Mitigasi**: Mengidentifikasi dan menerapkan langkah-langkah mitigasi yang sesuai.
5. **Monitoring dan Evaluasi**: Menggunakan sistem otomasi untuk memantau efektivitas mitigasi dan melakukan penyesuaian jika diperlukan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Bahaya] --> [Analisis Risiko] --> [Model Bow-Tie] --> [Implementasi Mitigasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita analisis risiko dalam proses produksi kimia. Misalkan kita memiliki data berikut:

- Probabilitas kebocoran bahan kimia: \( P = 0.02 \)
- Konsekuensi kebocoran (biaya kerugian): \( C = 500000 \)
- Mitigasi yang diterapkan (misalnya, pelatihan karyawan): \( M = 0.3 \)

Menghitung risiko awal:

$$ R = P \times C = 0.02 \times 500000 = 10000 $$

Setelah menerapkan mitigasi:

$$ R' = R \times (1 - M) = 10000 \times (1 - 0.3) = 7000 $$

Interpretasi hasil menunjukkan bahwa dengan menerapkan mitigasi, risiko total dapat dikurangi dari \$10,000 menjadi \$7,000, yang menunjukkan efektivitas dari langkah-langkah mitigasi yang diambil.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Automasi dalam analisis Bow-Tie tidak hanya terbatas pada sektor manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam konteks K3 dan ESG, pendekatan ini dapat membantu perusahaan dalam memenuhi standar keselamatan yang semakin ketat dan meningkatkan keberlanjutan operasional.

Namun, ada beberapa batasan metodologi yang perlu diperhatikan, termasuk ketergantungan pada data yang akurat dan relevan serta potensi bias dalam analisis. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan algoritma yang lebih canggih untuk analisis risiko dan integrasi teknologi baru seperti kecerdasan buatan untuk meningkatkan akurasi dan efisiensi.

Dengan demikian, penerapan analisis Bow-Tie yang terautomasi dapat menjadi alat yang sangat berharga dalam meningkatkan keselamatan proses dan efisiensi operasional di berbagai sektor industri.