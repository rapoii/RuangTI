# 959 — Federated Learning untuk Pemodelan Kualitas Prediktif Lintas Perusahaan: Agregasi Parameter FedAvg, Penyuntikan Kebisingan Privasi Diferensial, dan Penanganan Heterogenitas Data (Non-IID)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Federated Learning for Cross-Enterprise Predictive Quality Modeling: FedAvg Parameter Aggregation, Differential Privacy Noise Injection, and Data Heterogeneity (Non-IID) Handling  
**Standar & Referensi Utama:** McMahan et al. (AISTATS); Yang et al. (Federated Machine Learning: Concept and Applications, Morgan & Claypool); ISO/IEC 27001

---

## 1. Pendahuluan dan Konteks Industri

Dalam era digital saat ini, industri manufaktur dan rantai pasok menghadapi tantangan yang signifikan terkait dengan pengelolaan kualitas produk. Dengan meningkatnya kompleksitas produk dan permintaan konsumen yang semakin tinggi, perusahaan perlu mengadopsi pendekatan inovatif untuk memastikan kualitas yang konsisten. Salah satu pendekatan yang menjanjikan adalah Federated Learning (FL), yang memungkinkan model pembelajaran mesin dilatih secara terdistribusi tanpa memindahkan data sensitif antar perusahaan. Hal ini sangat relevan dalam konteks ISO/IEC 27001 yang menekankan pentingnya keamanan informasi.

FL menawarkan solusi untuk masalah privasi data, di mana data pelanggan dan proses produksi tidak perlu dibagikan secara langsung. Sebagai contoh, dalam industri otomotif, berbagai pemasok dapat berkolaborasi untuk membangun model kualitas prediktif tanpa harus mengungkapkan data spesifik mereka. Namun, tantangan utama dalam FL adalah heterogenitas data, di mana data yang tersedia di setiap lokasi tidak identik (Non-IID). Hal ini dapat menyebabkan penurunan akurasi model yang dihasilkan.

Oleh karena itu, pemahaman yang mendalam tentang teknik agregasi parameter seperti FedAvg, serta metode untuk menyuntikkan kebisingan privasi diferensial, menjadi sangat penting. Penelitian ini bertujuan untuk mengeksplorasi penerapan FL dalam pemodelan kualitas prediktif lintas perusahaan, dengan fokus pada agregasi parameter, penanganan data Non-IID, dan penerapan kebisingan untuk menjaga privasi.

## 2. Landasan Teori & Formulasi Matematis

Federated Learning (FL) merupakan metode pembelajaran mesin di mana model dilatih secara terdistribusi di berbagai perangkat atau lokasi tanpa memindahkan data mentah. Dalam konteks ini, kita akan membahas algoritma FedAvg yang merupakan metode agregasi parameter yang paling umum digunakan.

### 2.1. Algoritma FedAvg

Misalkan kita memiliki $K$ klien, masing-masing dengan dataset $D_k$ yang berisi $n_k$ contoh. Model global $w$ diperbarui berdasarkan model lokal $w_k$ yang dilatih pada setiap klien. Proses pembaruan model global dapat dinyatakan sebagai berikut:

$$
w^{t+1} = \sum_{k=1}^{K} \frac{n_k}{n} w_k^t
$$

di mana $n = \sum_{k=1}^{K} n_k$ adalah total jumlah contoh di semua klien.

### 2.2. Penyuntikan Kebisingan Privasi Diferensial

Untuk menjaga privasi data, kita dapat menyuntikkan kebisingan ke dalam pembaruan model. Misalkan kita menggunakan mekanisme kebisingan Gaussian dengan rata-rata $0$ dan deviasi standar $\sigma$. Pembaruan model dengan kebisingan dapat dinyatakan sebagai:

$$
\tilde{w}^{t+1} = w^{t+1} + \mathcal{N}(0, \sigma^2 I)
$$

di mana $\mathcal{N}(0, \sigma^2 I)$ adalah distribusi Gaussian.

### 2.3. Penanganan Data Non-IID

Untuk menangani heterogenitas data, kita dapat menggunakan teknik pembobotan berdasarkan distribusi data. Misalkan $p_k$ adalah proporsi data klien $k$, maka pembaruan model dapat dinyatakan sebagai:

$$
w^{t+1} = \sum_{k=1}^{K} p_k w_k^t
$$

di mana $p_k = \frac{n_k}{n}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Klien**: Tentukan perusahaan yang akan berpartisipasi dalam FL.
2. **Pengumpulan Data**: Setiap klien mengumpulkan data kualitas produk yang relevan.
3. **Model Awal**: Inisialisasi model global dengan parameter acak.
4. **Pelatihan Lokal**: Setiap klien melatih model lokal menggunakan data mereka sendiri.
5. **Agregasi Parameter**: Gunakan algoritma FedAvg untuk menggabungkan model lokal menjadi model global.
6. **Penyuntikan Kebisingan**: Tambahkan kebisingan untuk menjaga privasi.
7. **Iterasi**: Ulangi proses hingga konvergensi tercapai.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Klien] --> [Pengumpulan Data] --> [Model Awal]
       |                      |                      |
       v                      v                      v
[Pelatihan Lokal] --> [Agregasi Parameter] --> [Penyuntikan Kebisingan]
       |                      |
       v                      |
    [Iterasi] <--------------|
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan terdapat tiga klien dengan data sebagai berikut:

- Klien 1: $n_1 = 100$, $w_1^0 = [0.1, 0.2]$
- Klien 2: $n_2 = 200$, $w_2^0 = [0.3, 0.4]$
- Klien 3: $n_3 = 300$, $w_3^0 = [0.5, 0.6]$

Total data:

$$
n = n_1 + n_2 + n_3 = 100 + 200 + 300 = 600
$$

### 4.2. Agregasi Parameter

Menggunakan rumus FedAvg:

$$
w^{1} = \frac{100}{600} w_1^0 + \frac{200}{600} w_2^0 + \frac{300}{600} w_3^0
$$

Substitusi nilai:

$$
w^{1} = \frac{100}{600} [0.1, 0.2] + \frac{200}{600} [0.3, 0.4] + \frac{300}{600} [0.5, 0.6]
$$

Hitung setiap komponen:

$$
w^{1} = [\frac{10}{600} + \frac{60}{600} + \frac{150}{600}, \frac{20}{600} + \frac{80}{600} + \frac{180}{600}]
$$

$$
w^{1} = [0.43, 0.43]
$$

### 4.3. Penyuntikan Kebisingan

Misalkan kita menyuntikkan kebisingan dengan deviasi standar $\sigma = 0.01$:

$$
\tilde{w}^{1} = w^{1} + \mathcal{N}(0, 0.01^2 I)
$$

Misalkan hasil kebisingan adalah $[0.005, -0.002]$, maka:

$$
\tilde{w}^{1} = [0.43 + 0.005, 0.43 - 0.002] = [0.435, 0.428]
$$

### 4.4. Interpretasi Hasil

Model global yang dihasilkan dapat digunakan untuk memprediksi kualitas produk dengan mempertimbangkan data dari semua klien, sambil menjaga privasi data masing-masing klien.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan Federated Learning tidak hanya terbatas pada industri manufaktur, tetapi juga dapat diterapkan dalam sektor kesehatan, keuangan, dan teknologi informasi. Dalam konteks rantai pasok, FL dapat meningkatkan kolaborasi antar perusahaan tanpa mengorbankan privasi data. 

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kebutuhan akan infrastruktur yang memadai dan tantangan dalam mengelola heterogenitas data. Penelitian masa depan harus fokus pada pengembangan algoritma yang lebih efisien dan robust untuk menangani masalah Non-IID serta memperkuat aspek privasi dan keamanan data sesuai dengan standar ISO/IEC 27001.

Dengan demikian, Federated Learning menawarkan potensi besar untuk meningkatkan kualitas prediktif lintas perusahaan, namun memerlukan pendekatan yang hati-hati dan inovatif untuk mengatasi tantangan yang ada.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
