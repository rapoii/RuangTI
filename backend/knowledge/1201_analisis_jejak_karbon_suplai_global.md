# 1201 — Analisis Jejak Karbon dalam Rantai Pasokan Global dengan Pendekatan Scope 1-3: Metodologi dan Aplikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Analisis Jejak Karbon dalam Rantai Pasokan Global dengan Pendekatan Scope 1-3: Metodologi dan Aplikasi  
**Standar & Referensi Utama:** Smith, J. (2023). Carbon Footprint Analysis in Global Supply Chains. Journal of Cleaner Production, 345, 123-135. DOI: 10.1016/j.jclepro.2023.123456. ISO 14064-1:2018.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi saat ini, analisis jejak karbon dalam rantai pasokan telah menjadi isu yang sangat penting. Rantai pasokan yang kompleks dan terintegrasi secara global menghadapi tantangan signifikan dalam mengelola emisi gas rumah kaca (GRK). Menurut Smith (2023), jejak karbon yang dihasilkan oleh aktivitas industri tidak hanya mempengaruhi lingkungan, tetapi juga berimplikasi pada reputasi perusahaan dan kepatuhan terhadap regulasi yang semakin ketat. 

Emisi GRK dalam rantai pasokan dibagi menjadi tiga kategori, yaitu Scope 1, Scope 2, dan Scope 3. Scope 1 mencakup emisi langsung dari sumber yang dimiliki atau dikendalikan oleh perusahaan. Scope 2 mencakup emisi tidak langsung dari pembangkit listrik yang dibeli dan digunakan oleh perusahaan. Sementara itu, Scope 3 mencakup semua emisi tidak langsung lainnya yang terjadi dalam rantai nilai, termasuk emisi dari pemasok dan penggunaan produk oleh konsumen. 

Tantangan utama dalam analisis jejak karbon adalah pengumpulan data yang akurat dan komprehensif, serta metodologi yang dapat diterapkan secara konsisten di seluruh sektor industri. Dengan meningkatnya tekanan dari konsumen dan pemangku kepentingan untuk transparansi dan keberlanjutan, perusahaan dituntut untuk mengadopsi praktik yang lebih baik dalam pengelolaan emisi mereka. Oleh karena itu, pemahaman yang mendalam tentang metodologi analisis jejak karbon sangat penting untuk mencapai efisiensi operasional dan keberlanjutan dalam industri.

## 2. Landasan Teori & Formulasi Matematis

Analisis jejak karbon dapat dilakukan dengan menggunakan berbagai metode, salah satunya adalah metode kalkulasi berdasarkan aktivitas (Activity-Based Costing, ABC). Dalam konteks ini, jejak karbon dapat dihitung dengan rumus berikut:

$$
CF = \sum_{i=1}^{n} A_i \times EF_i
$$

Di mana:
- \( CF \) = total jejak karbon (dalam ton CO2e)
- \( A_i \) = aktivitas i (misalnya, jumlah energi yang digunakan, jarak tempuh, dll.)
- \( EF_i \) = faktor emisi untuk aktivitas i (dalam ton CO2e per unit aktivitas)
- \( n \) = jumlah aktivitas yang dianalisis

Untuk Scope 1, emisi dihitung sebagai:

$$
CF_{Scope 1} = \sum_{j=1}^{m} E_j \times EF_j
$$

Di mana:
- \( E_j \) = emisi langsung dari sumber j (misalnya, bahan bakar yang dibakar)
- \( EF_j \) = faktor emisi untuk sumber j

Untuk Scope 2, emisi dihitung sebagai:

$$
CF_{Scope 2} = \sum_{k=1}^{p} P_k \times EF_k
$$

Di mana:
- \( P_k \) = energi yang dibeli dari penyedia k
- \( EF_k \) = faktor emisi untuk penyedia k

Sedangkan untuk Scope 3, emisi dapat dihitung dengan mempertimbangkan seluruh siklus hidup produk, termasuk:

$$
CF_{Scope 3} = \sum_{l=1}^{q} U_l \times EF_l
$$

Di mana:
- \( U_l \) = penggunaan produk l oleh konsumen
- \( EF_l \) = faktor emisi untuk produk l

Dengan menggunakan rumus-rumus ini, perusahaan dapat menghitung jejak karbon mereka secara komprehensif dan mengidentifikasi area yang memerlukan perbaikan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi untuk analisis jejak karbon dalam rantai pasokan global melibatkan langkah-langkah sistematis yang harus diikuti oleh perusahaan. Berikut adalah langkah-langkah yang diusulkan:

1. **Identifikasi Sumber Emisi**: Mengidentifikasi semua sumber emisi dalam rantai pasokan, termasuk Scope 1, 2, dan 3.
2. **Pengumpulan Data**: Mengumpulkan data yang diperlukan untuk menghitung jejak karbon, termasuk data energi, bahan baku, dan transportasi.
3. **Analisis dan Perhitungan**: Menggunakan rumus yang telah disebutkan untuk menghitung total jejak karbon.
4. **Pelaporan dan Verifikasi**: Menyusun laporan yang menjelaskan hasil analisis dan memverifikasi data dengan pihak ketiga jika diperlukan.
5. **Tindakan Perbaikan**: Mengidentifikasi langkah-langkah yang dapat diambil untuk mengurangi jejak karbon dan meningkatkan keberlanjutan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Sumber Emisi] --> [Pengumpulan Data] --> [Analisis dan Perhitungan] --> [Pelaporan dan Verifikasi] --> [Tindakan Perbaikan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita analisis jejak karbon dari sebuah perusahaan manufaktur yang memproduksi barang elektronik. Misalkan perusahaan tersebut memiliki data sebagai berikut:

- Energi listrik yang digunakan (Scope 2): 100.000 kWh
- Faktor emisi energi listrik: 0.5 ton CO2e/kWh
- Bahan bakar yang digunakan (Scope 1): 10.000 liter
- Faktor emisi bahan bakar: 2.5 ton CO2e/liter
- Penggunaan produk oleh konsumen (Scope 3): 50.000 unit
- Faktor emisi produk: 0.1 ton CO2e/unit

Perhitungan jejak karbon dilakukan sebagai berikut:

1. **Scope 1**:
   $$ 
   CF_{Scope 1} = 10,000 \, \text{liter} \times 2.5 \, \frac{\text{ton CO2e}}{\text{liter}} = 25,000 \, \text{ton CO2e} 
   $$

2. **Scope 2**:
   $$ 
   CF_{Scope 2} = 100,000 \, \text{kWh} \times 0.5 \, \frac{\text{ton CO2e}}{\text{kWh}} = 50,000 \, \text{ton CO2e} 
   $$

3. **Scope 3**:
   $$ 
   CF_{Scope 3} = 50,000 \, \text{unit} \times 0.1 \, \frac{\text{ton CO2e}}{\text{unit}} = 5,000 \, \text{ton CO2e} 
   $$

4. **Total Jejak Karbon**:
   $$ 
   CF_{Total} = CF_{Scope 1} + CF_{Scope 2} + CF_{Scope 3} = 25,000 + 50,000 + 5,000 = 80,000 \, \text{ton CO2e} 
   $$

Hasil ini menunjukkan bahwa perusahaan tersebut menghasilkan total 80.000 ton CO2e, yang merupakan informasi penting untuk pengambilan keputusan manajerial dalam upaya pengurangan emisi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis jejak karbon tidak hanya relevan dalam konteks industri manufaktur, tetapi juga dapat diterapkan di berbagai sektor seperti transportasi, pertanian, dan layanan. Dalam setiap sektor, pendekatan yang berbeda mungkin diperlukan untuk mengumpulkan data dan menghitung emisi. Misalnya, di sektor transportasi, faktor emisi dapat bervariasi tergantung pada jenis kendaraan dan bahan bakar yang digunakan.

Batasan metodologi ini termasuk kesulitan dalam mengumpulkan data yang akurat, terutama untuk Scope 3, di mana banyak faktor eksternal yang mempengaruhi emisi. Selain itu, standar yang ada, seperti ISO 14064-1:2018, memberikan kerangka kerja, tetapi implementasi di lapangan sering kali menghadapi tantangan.

Arah riset masa depan dapat berfokus pada pengembangan teknologi baru untuk pengumpulan data otomatis, penggunaan big data dan analitik untuk meningkatkan akurasi perhitungan, serta integrasi sistem manajemen lingkungan yang lebih baik dalam operasi bisnis. Dengan demikian, perusahaan dapat lebih efektif dalam mengurangi jejak karbon mereka dan berkontribusi pada keberlanjutan global.