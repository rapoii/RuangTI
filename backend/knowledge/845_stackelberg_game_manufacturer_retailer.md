# 845 — Kontrak Rantai Pasok Teoretik Permainan Stackelberg Dinamis: Penentuan Parameter Harga Grosir, Pembagian Pendapatan, dan Pembelian Kembali serta Koordinasi Saluran di Bawah Informasi Asimetris

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Dynamic Stackelberg Game Theoretic Supply Chain Contracts: Wholesale Price, Revenue-Sharing, Buy-Back Parameter Sizing, and Channel Coordination under Asymmetric Information  
**Standar & Referensi Utama:** Cachon (Supply Chain Coordination with Contracts, Elsevier); Fudenberg & Tirole (Game Theory, MIT Press)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan digitalisasi, tantangan dalam manajemen rantai pasok semakin kompleks. Rantai pasok modern menghadapi ketidakpastian yang tinggi akibat fluktuasi permintaan, perubahan regulasi, dan dinamika pasar yang cepat. Kontrak yang efektif menjadi kunci untuk mencapai koordinasi yang optimal antara berbagai pemangku kepentingan dalam rantai pasok. Salah satu pendekatan yang menjanjikan adalah penggunaan teori permainan, khususnya model permainan Stackelberg dinamis, yang memungkinkan analisis interaksi strategis antara produsen dan distributor.

Permasalahan utama dalam konteks ini adalah informasi asimetris, di mana salah satu pihak memiliki informasi lebih banyak dibandingkan pihak lainnya. Hal ini dapat menyebabkan ketidakpastian dalam pengambilan keputusan dan mengurangi efisiensi operasional. Misalnya, produsen mungkin tidak mengetahui secara akurat permintaan pasar, sementara distributor memiliki informasi lebih baik tentang preferensi konsumen. Dalam situasi ini, kontrak yang dirancang dengan baik, seperti kontrak harga grosir, pembagian pendapatan, dan pembelian kembali, dapat membantu mengurangi risiko dan meningkatkan koordinasi.

Cachon (2022) menunjukkan bahwa kontrak dapat digunakan untuk mengatasi masalah informasi asimetris dan meningkatkan efisiensi dalam rantai pasok. Dengan memanfaatkan model permainan Stackelberg, kita dapat menentukan parameter kontrak yang optimal yang memaksimalkan keuntungan bagi semua pihak yang terlibat. Oleh karena itu, penting untuk memahami bagaimana merancang kontrak yang efektif dalam konteks informasi asimetris dan dinamika pasar yang berubah-ubah.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Permainan Stackelberg

Model permainan Stackelberg adalah model di mana satu pemimpin (leader) membuat keputusan terlebih dahulu, diikuti oleh pengikut (follower) yang merespons keputusan pemimpin. Dalam konteks rantai pasok, produsen dapat dianggap sebagai pemimpin, sedangkan distributor sebagai pengikut.

### 2.2. Notasi dan Definisi Variabel

- $P$: Harga grosir yang ditetapkan oleh produsen.
- $R$: Pembagian pendapatan yang diterima oleh distributor.
- $B$: Parameter pembelian kembali yang ditawarkan oleh produsen.
- $D$: Permintaan pasar yang dipengaruhi oleh harga dan faktor eksternal.
- $C$: Biaya produksi per unit.
- $Q$: Kuantitas yang diproduksi oleh produsen.
- $\pi_L$: Keuntungan pemimpin (produsen).
- $\pi_F$: Keuntungan pengikut (distributor).

### 2.3. Fungsi Permintaan

Fungsi permintaan dapat dinyatakan sebagai:

$$
D(P) = a - bP
$$

di mana $a$ dan $b$ adalah parameter positif yang menunjukkan intercept dan kemiringan fungsi permintaan.

### 2.4. Fungsi Keuntungan

Keuntungan pemimpin dan pengikut dapat dinyatakan sebagai:

$$
\pi_L = (P - C)Q - B
$$

$$
\pi_F = RQ - C(Q)
$$

### 2.5. Optimalisasi Kontrak

Untuk menentukan parameter kontrak yang optimal, kita perlu memaksimalkan keuntungan pemimpin dan pengikut dengan mempertimbangkan informasi asimetris. Dengan menggunakan kalkulus, kita dapat menemukan titik maksimum dengan menghitung turunan pertama dari fungsi keuntungan dan menyamakannya dengan nol.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Pasar**: Identifikasi parameter pasar seperti permintaan, biaya, dan preferensi konsumen.
2. **Modeling**: Gunakan model permainan Stackelberg untuk memformulasikan masalah.
3. **Optimalisasi**: Tentukan parameter kontrak (harga grosir, pembagian pendapatan, dan pembelian kembali) yang memaksimalkan keuntungan.
4. **Simulasi**: Lakukan simulasi untuk menguji sensitivitas parameter terhadap perubahan kondisi pasar.
5. **Implementasi**: Terapkan kontrak yang telah dioptimalkan dalam rantai pasok.
6. **Monitoring dan Evaluasi**: Pantau kinerja kontrak dan lakukan penyesuaian jika diperlukan.

### 3.2. Diagram Alir Proses

Diagram alir dapat menggambarkan langkah-langkah di atas, mulai dari analisis pasar hingga evaluasi kinerja kontrak.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Input Parameter

- $a = 100$
- $b = 2$
- $C = 20$
- $R = 0.5$
- $B = 10$

### 4.2. Perhitungan

1. **Fungsi Permintaan**:

$$
D(P) = 100 - 2P
$$

2. **Keuntungan Pemimpin**:

$$
\pi_L = (P - 20)(100 - 2P) - 10
$$

3. **Keuntungan Pengikut**:

$$
\pi_F = 0.5(100 - 2P) - 20(100 - 2P)
$$

4. **Optimalisasi**:

Hitung turunan pertama dari $\pi_L$ dan $\pi_F$, setarakan dengan nol untuk menemukan $P$ optimal.

### 4.3. Interpretasi Hasil

Setelah menghitung, misalkan diperoleh $P^* = 30$. Maka, keuntungan pemimpin dan pengikut dapat dihitung dan diinterpretasikan untuk pengambilan keputusan manajerial.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model permainan Stackelberg dinamis memiliki aplikasi luas di berbagai sektor, termasuk otomotif, elektronik, dan makanan. Dalam konteks otomasi dan manajemen biaya, pemahaman yang lebih baik tentang kontrak dapat membantu perusahaan mengurangi biaya dan meningkatkan efisiensi. Namun, terdapat batasan dalam metodologi ini, seperti asumsi tentang rasio informasi yang tidak selalu realistis.

Arah riset masa depan dapat mencakup pengembangan model yang lebih kompleks yang mempertimbangkan lebih banyak variabel eksternal dan interaksi antar pemain dalam rantai pasok. Penelitian lebih lanjut juga diperlukan untuk mengeksplorasi dampak teknologi baru, seperti kecerdasan buatan dan analitik data besar, terhadap desain kontrak dan strategi rantai pasok.

---

Dokumen ini memberikan gambaran menyeluruh tentang penggunaan teori permainan dalam desain kontrak rantai pasok, dengan fokus pada model Stackelberg dinamis. Dengan memahami dan menerapkan konsep-konsep ini, praktisi di bidang teknik industri dapat meningkatkan efisiensi dan efektivitas rantai pasok mereka.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
