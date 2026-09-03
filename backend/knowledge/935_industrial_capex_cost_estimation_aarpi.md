# 935 — Klasifikasi Estimasi Biaya AACE International untuk Industri Proses: Ukuran Modal Berdasarkan Faktor Lang dan Hand, Hukum Daya Kapasitas Peralatan, dan Overrun P80

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** AACE International Class 1 to 5 Cost Estimate Classification for Process Industries: Lang and Hand Factor Factored Capital Cost Sizing, Equipment Capacity Power Law, and Overrun P80  
**Standar & Referensi Utama:** AACE International Recommended Practice No. 18R-97; Dysert (Cost Estimating and Project Controls); Peters, Timmerhaus & West (Plant Design and Economics for Chemical Engineers)

---

## 1. Pendahuluan dan Konteks Industri

Industri proses, yang mencakup sektor seperti kimia, minyak dan gas, serta makanan dan minuman, menghadapi tantangan signifikan dalam pengelolaan biaya dan efisiensi operasional. Dalam konteks global yang semakin kompetitif, perusahaan dituntut untuk meningkatkan akurasi estimasi biaya proyek guna meminimalkan risiko finansial dan meningkatkan pengembalian investasi. Menurut AACE International, estimasi biaya yang tepat sangat penting untuk perencanaan dan pengendalian proyek, terutama dalam industri dengan investasi modal yang besar dan kompleksitas tinggi.

Tantangan utama dalam industri ini meliputi fluktuasi harga bahan baku, ketidakpastian regulasi, dan kebutuhan untuk inovasi berkelanjutan. Selain itu, manajemen rantai pasok yang efisien menjadi krusial untuk memastikan kelancaran aliran material dan produk. Dalam hal ini, penerapan metodologi estimasi biaya yang tepat, seperti yang diusulkan dalam AACE International Recommended Practice No. 18R-97, menjadi sangat relevan. Metodologi ini mengklasifikasikan estimasi biaya ke dalam lima kelas, yang masing-masing memiliki tingkat ketepatan dan detail yang berbeda, memungkinkan perusahaan untuk memilih pendekatan yang paling sesuai dengan fase proyek dan tingkat informasi yang tersedia.

Literatur menunjukkan bahwa penggunaan faktor Lang dan Hand dalam sizing modal dapat membantu dalam memperkirakan biaya investasi awal dengan lebih akurat, sementara hukum daya kapasitas peralatan memberikan panduan dalam menentukan kapasitas produksi yang optimal. Dengan pemahaman yang mendalam tentang estimasi biaya, perusahaan dapat mengurangi overrun biaya, yang sering kali terjadi dalam proyek besar, dan meningkatkan profitabilitas secara keseluruhan (Dysert, 2022; Peters et al., 2023).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Klasifikasi Estimasi Biaya AACE

AACE International mengklasifikasikan estimasi biaya ke dalam lima kelas, sebagai berikut:

- **Kelas 1:** Estimasi dengan ketepatan ± 1-5%, biasanya dilakukan pada tahap awal proyek.
- **Kelas 2:** Estimasi dengan ketepatan ± 5-10%, dilakukan saat desain awal telah selesai.
- **Kelas 3:** Estimasi dengan ketepatan ± 10-15%, dilakukan saat desain rinci sedang berlangsung.
- **Kelas 4:** Estimasi dengan ketepatan ± 15-30%, dilakukan pada tahap akhir desain.
- **Kelas 5:** Estimasi dengan ketepatan ± 30% atau lebih, biasanya dilakukan untuk proyek yang sangat tidak pasti.

### 2.2 Faktor Lang dan Hand

Faktor Lang dan Hand digunakan untuk menghitung ukuran modal berdasarkan kapasitas peralatan. Rumus dasar untuk menghitung biaya modal ($C$) adalah:

$$ C = C_{base} \times (Capacity_{actual}/Capacity_{base})^n $$

Di mana:
- $C_{base}$ = biaya peralatan pada kapasitas dasar
- $Capacity_{actual}$ = kapasitas aktual peralatan
- $Capacity_{base}$ = kapasitas dasar peralatan
- $n$ = faktor daya yang ditentukan oleh jenis peralatan dan proses.

### 2.3 Hukum Daya Kapasitas

Hukum daya kapasitas menyatakan bahwa biaya per unit kapasitas ($C$) berbanding terbalik dengan kapasitas ($Q$) yang dinyatakan dalam rumus:

$$ C = k \cdot Q^b $$

Di mana:
- $k$ = konstanta yang tergantung pada jenis peralatan
- $b$ = eksponen yang menunjukkan skala ekonomi.

### 2.4 Overrun P80

Overrun P80 mengacu pada estimasi biaya yang melebihi anggaran yang ditetapkan. Untuk menghitung kemungkinan overrun, dapat digunakan rumus:

$$ P_{80} = \mu + 0.84 \sigma $$

Di mana:
- $\mu$ = rata-rata estimasi biaya
- $\sigma$ = deviasi standar estimasi biaya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah-langkah Implementasi

1. **Pengumpulan Data:** Kumpulkan data historis biaya proyek sebelumnya dan parameter teknis dari peralatan.
2. **Klasifikasi Proyek:** Tentukan kelas estimasi biaya yang sesuai berdasarkan fase proyek.
3. **Perhitungan Biaya Modal:** Gunakan rumus Lang dan Hand untuk menghitung biaya modal berdasarkan kapasitas peralatan.
4. **Analisis Hukum Daya:** Terapkan hukum daya kapasitas untuk memperkirakan biaya per unit berdasarkan kapasitas aktual.
5. **Estimasi Overrun:** Hitung potensi overrun menggunakan rumus P80 untuk mempersiapkan mitigasi risiko.
6. **Dokumentasi dan Review:** Dokumentasikan semua perhitungan dan hasil, serta lakukan review oleh tim manajemen.

### 3.2 Diagram Alir Proses

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] → [Klasifikasi Proyek] → [Perhitungan Biaya Modal] → [Analisis Hukum Daya] → [Estimasi Overrun] → [Dokumentasi dan Review]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Kasus

Misalkan sebuah perusahaan ingin memperkirakan biaya modal untuk pabrik pengolahan kimia dengan kapasitas 500 ton/hari. Data yang tersedia adalah sebagai berikut:

- $C_{base} = 1.000.000$ USD (biaya peralatan pada kapasitas dasar 100 ton/hari)
- $Capacity_{base} = 100$ ton/hari
- $n = 0.6$

### 4.2 Perhitungan

1. **Hitung Biaya Modal ($C$):**

$$ C = 1.000.000 \times \left(\frac{500}{100}\right)^{0.6} $$

$$ C = 1.000.000 \times 5^{0.6} $$

$$ C \approx 1.000.000 \times 3.98 \approx 3.980.000 \text{ USD} $$

2. **Estimasi Overrun P80:**

Misalkan rata-rata estimasi biaya adalah $C_{avg} = 4.000.000$ USD dan deviasi standar $\sigma = 200.000$ USD.

$$ P_{80} = 4.000.000 + 0.84 \times 200.000 $$

$$ P_{80} = 4.000.000 + 168.000 \approx 4.168.000 \text{ USD} $$

### 4.3 Interpretasi Hasil

Dari perhitungan di atas, biaya modal yang diperkirakan untuk pabrik adalah sekitar 3.980.000 USD. Namun, dengan mempertimbangkan kemungkinan overrun, perusahaan harus siap dengan anggaran sekitar 4.168.000 USD untuk menghindari risiko finansial yang tidak terduga.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Metodologi estimasi biaya yang dibahas di atas tidak hanya relevan untuk industri proses, tetapi juga dapat diterapkan dalam sektor lain seperti konstruksi, energi, dan teknologi informasi. Dalam konteks manajemen biaya, pendekatan ini dapat diintegrasikan dengan teknik analisis risiko dan manajemen rantai pasok untuk meningkatkan efisiensi dan efektivitas proyek.

Di masa depan, dengan kemajuan teknologi seperti otomatisasi dan analitik data besar, diharapkan estimasi biaya akan semakin akurat dan cepat. Penelitian lebih lanjut diperlukan untuk mengembangkan model prediktif yang dapat mengakomodasi variabel yang lebih kompleks dan dinamis dalam lingkungan industri yang terus berubah.

Dengan demikian, pemahaman yang mendalam tentang klasifikasi estimasi biaya dan penerapan metodologi yang tepat akan menjadi kunci bagi keberhasilan proyek di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
