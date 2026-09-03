# 984 — Penilaian Risiko Keamanan Siber Rantai Pasok Vendor Pihak Ketiga: NIST SP 800-161, Software Bill of Materials (SBOM), dan Penilaian Dampak Pelanggaran

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Third-Party Vendor Supply Chain Cybersecurity Risk Assessment: NIST SP 800-161 Cyber Supply Chain Risk Management (C-SCRM), Software Bill of Materials (SBOM), and Breach Impact Sizing  
**Standar & Referensi Utama:** NIST Special Publication 800-161r1 (2022); ISO/IEC 27036-1/2/3; CISA Software Bill of Materials (SBOM) Guidance  

---

## 1. Pendahuluan dan Konteks Industri

Dalam era digital saat ini, keamanan siber telah menjadi salah satu aspek paling kritis dalam pengelolaan rantai pasok. Dengan semakin banyaknya organisasi yang bergantung pada vendor pihak ketiga untuk menyediakan produk dan layanan, risiko yang terkait dengan keamanan siber di dalam rantai pasok semakin meningkat. Menurut laporan dari Cybersecurity and Infrastructure Security Agency (CISA), lebih dari 80% pelanggaran data melibatkan pihak ketiga. Hal ini menunjukkan bahwa ketergantungan pada vendor pihak ketiga dapat menjadi titik lemah dalam pertahanan keamanan siber suatu organisasi.

NIST SP 800-161 memberikan panduan yang komprehensif untuk mengelola risiko keamanan siber dalam konteks rantai pasok. Panduan ini menekankan pentingnya penilaian risiko yang sistematis dan berkelanjutan, serta perlunya kolaborasi antara organisasi dan vendor untuk mengidentifikasi dan mengurangi risiko. Selain itu, Software Bill of Materials (SBOM) menjadi alat penting untuk memberikan transparansi dalam komponen perangkat lunak yang digunakan, sehingga memudahkan identifikasi potensi kerentanan.

Tantangan yang dihadapi dalam implementasi keamanan siber di rantai pasok mencakup kurangnya standar yang konsisten, kompleksitas jaringan vendor, dan kesulitan dalam mengukur dampak pelanggaran. Oleh karena itu, pendekatan yang terstruktur dan berbasis data diperlukan untuk mengatasi tantangan ini dan memastikan bahwa organisasi dapat melindungi aset dan informasi kritis mereka dari ancaman yang terus berkembang.

## 2. Landasan Teori & Formulasi Matematis

Penilaian risiko keamanan siber dalam rantai pasok dapat didekati dengan menggunakan model matematis yang menggabungkan berbagai variabel yang mempengaruhi risiko. Model ini dapat dinyatakan dalam bentuk fungsi risiko sebagai berikut:

$$
R = P \times I
$$

di mana:
- \( R \) = Risiko total
- \( P \) = Probabilitas terjadinya pelanggaran
- \( I \) = Dampak dari pelanggaran

### Definisi Variabel

1. **Probabilitas Pelanggaran (\( P \))**: Dapat dihitung berdasarkan data historis dan analisis ancaman. Misalnya, jika dalam 1000 insiden, 50 di antaranya adalah pelanggaran yang melibatkan vendor pihak ketiga, maka:

$$
P = \frac{50}{1000} = 0.05
$$

2. **Dampak Pelanggaran (\( I \))**: Dapat dinyatakan dalam bentuk biaya yang terkait dengan pelanggaran, termasuk biaya pemulihan, kehilangan pendapatan, dan kerusakan reputasi. Misalkan biaya rata-rata pelanggaran adalah $200.000, maka:

$$
I = 200000
$$

### Pembuktian

Dengan menggunakan rumus di atas, kita dapat menghitung risiko total:

$$
R = P \times I = 0.05 \times 200000 = 10000
$$

Ini menunjukkan bahwa risiko total yang dihadapi organisasi dari pelanggaran yang melibatkan vendor pihak ketiga adalah $10.000.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi penilaian risiko keamanan siber dalam rantai pasok dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Vendor**: Mengidentifikasi semua vendor pihak ketiga yang terlibat dalam rantai pasok.
2. **Pengumpulan Data**: Mengumpulkan data terkait keamanan siber dari setiap vendor, termasuk SBOM dan kebijakan keamanan.
3. **Penilaian Risiko**: Menggunakan model matematis untuk mengevaluasi risiko yang terkait dengan setiap vendor.
4. **Mitigasi Risiko**: Mengembangkan rencana mitigasi untuk mengurangi risiko yang teridentifikasi.
5. **Monitoring dan Review**: Melakukan pemantauan berkelanjutan terhadap risiko dan melakukan peninjauan rutin terhadap kebijakan dan prosedur.

### Diagram Alir Proses

```
[Identifikasi Vendor] --> [Pengumpulan Data] --> [Penilaian Risiko] --> [Mitigasi Risiko] --> [Monitoring dan Review]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah perusahaan yang memiliki 10 vendor pihak ketiga. Data historis menunjukkan bahwa dari 10 vendor, 2 di antaranya memiliki catatan pelanggaran yang signifikan. Mari kita asumsikan probabilitas pelanggaran untuk vendor tersebut adalah 0.1 dan dampak rata-rata pelanggaran adalah $300.000.

### Langkah Perhitungan

1. **Probabilitas Pelanggaran**:
   - Vendor 1: \( P_1 = 0.1 \)
   - Vendor 2: \( P_2 = 0.1 \)
   - Vendor lainnya: \( P = 0.02 \) (asumsi)

2. **Dampak Pelanggaran**:
   - Vendor 1: \( I_1 = 300000 \)
   - Vendor 2: \( I_2 = 300000 \)
   - Vendor lainnya: \( I = 50000 \) (asumsi)

### Hitung Risiko untuk Masing-Masing Vendor

$$
R_1 = P_1 \times I_1 = 0.1 \times 300000 = 30000
$$

$$
R_2 = P_2 \times I_2 = 0.1 \times 300000 = 30000
$$

$$
R_{lain} = P \times I = 0.02 \times 50000 = 1000
$$

### Total Risiko

$$
R_{total} = R_1 + R_2 + 8 \times R_{lain} = 30000 + 30000 + 8 \times 1000 = 62000
$$

Hasil ini menunjukkan bahwa total risiko yang dihadapi perusahaan dari pelanggaran yang melibatkan vendor pihak ketiga adalah $62.000.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penilaian risiko keamanan siber dalam rantai pasok tidak hanya relevan untuk sektor industri tertentu, tetapi juga dapat diterapkan di berbagai sektor seperti kesehatan, keuangan, dan teknologi informasi. Dalam konteks ini, penting untuk mengintegrasikan penilaian risiko dengan praktik manajemen biaya dan teknik untuk memastikan bahwa investasi dalam keamanan siber memberikan nilai yang optimal.

Batasan metodologi ini termasuk ketidakpastian dalam estimasi probabilitas dan dampak, serta kesulitan dalam mengumpulkan data yang akurat dari semua vendor. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih robust dan adaptif terhadap perubahan dalam lanskap ancaman.

Ke depan, standar dan panduan seperti NIST SP 800-161 dan ISO/IEC 27036-1/2/3 akan terus berkembang untuk mencakup teknologi baru dan praktik terbaik dalam manajemen risiko keamanan siber. Penelitian di bidang ini harus fokus pada pengembangan alat dan teknik yang dapat membantu organisasi dalam mengelola risiko dengan lebih efektif dan efisien.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
