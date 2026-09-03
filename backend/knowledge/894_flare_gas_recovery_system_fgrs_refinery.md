# 894 — Sistem Pemulihan Gas Flare pada Kilang Petrokimia: Ukuran Kompresor Liquid Ring, Penyeimbangan Jaringan Gas Bakar, dan Pengurangan Senyawa Organik Volatil Non-Metana (NMVOC)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Petrochemical Refinery Flare Gas Recovery System (FGRS): Liquid Ring Compressor Sizing, Fuel Gas Network Balancing, and Non-Methane Volatile Organic Compound (NMVOC) Reduction  
**Standar & Referensi Utama:** API Standard 521 / API 537; EPA 40 CFR Part 60 Subpart Ja; Perry's Chemical Engineers' Handbook

---

## 1. Pendahuluan dan Konteks Industri

Industri petrokimia merupakan salah satu sektor yang sangat penting dalam ekonomi global, menyediakan bahan baku untuk berbagai produk, mulai dari plastik hingga bahan bakar. Namun, proses produksi di kilang sering kali menghasilkan gas flare yang tidak terpakai, yang dapat menyebabkan kerugian ekonomi dan dampak lingkungan yang signifikan. Gas flare ini, yang merupakan hasil dari pembakaran gas berlebih, mengandung senyawa organik volatil, termasuk senyawa organik volatil non-metana (NMVOC), yang berkontribusi terhadap pencemaran udara dan perubahan iklim.

Urgensi untuk mengimplementasikan sistem pemulihan gas flare (FGRS) semakin meningkat seiring dengan pengetatan regulasi lingkungan dan tuntutan untuk efisiensi operasional. Menurut EPA 40 CFR Part 60 Subpart Ja, kilang harus mematuhi batas emisi yang ketat, yang mendorong adopsi teknologi pemulihan gas flare. Selain itu, sistem yang efisien dapat mengurangi biaya operasional dengan memanfaatkan kembali gas yang sebelumnya dibakar, sehingga meningkatkan profitabilitas.

Tantangan utama dalam implementasi FGRS adalah ukuran dan pemilihan kompresor yang tepat, serta penyeimbangan jaringan gas bakar. Kompresor liquid ring, yang dikenal karena kemampuannya menangani gas dengan kandungan uap tinggi dan sifat korosif, menjadi pilihan yang populer. Namun, perancangan dan sizing kompresor ini memerlukan pemahaman mendalam tentang karakteristik gas yang akan diproses dan kondisi operasi yang diharapkan. Oleh karena itu, pemahaman yang kuat tentang teori dan praktik dalam rekayasa sistem industri sangat penting untuk mencapai tujuan ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Ukuran Kompresor Liquid Ring

Kompresor liquid ring bekerja berdasarkan prinsip bahwa cairan (biasanya air) digunakan untuk membentuk cincin yang berfungsi sebagai ruang kompresi. Proses ini dapat dijelaskan dengan persamaan dasar untuk menghitung kapasitas kompresor:

$$
Q = \frac{\pi D^2 n}{4} \cdot \rho \cdot v
$$

di mana:
- \( Q \) = kapasitas aliran volumetrik (m³/s)
- \( D \) = diameter rotor (m)
- \( n \) = kecepatan putaran rotor (rpm)
- \( \rho \) = densitas gas (kg/m³)
- \( v \) = kecepatan gas (m/s)

### 2.2. Penyeimbangan Jaringan Gas Bakar

Penyeimbangan jaringan gas bakar melibatkan analisis aliran gas dalam sistem pipa untuk memastikan distribusi yang merata dan efisien. Persamaan dasar yang digunakan dalam analisis ini adalah hukum Bernoulli:

$$
P_1 + \frac{1}{2} \rho v_1^2 + \rho gh_1 = P_2 + \frac{1}{2} \rho v_2^2 + \rho gh_2
$$

di mana:
- \( P \) = tekanan (Pa)
- \( \rho \) = densitas (kg/m³)
- \( v \) = kecepatan aliran (m/s)
- \( g \) = percepatan gravitasi (m/s²)
- \( h \) = tinggi (m)

### 2.3. Pengurangan NMVOC

Pengurangan NMVOC dapat dicapai melalui berbagai metode, termasuk penggunaan sistem pemulihan gas dan teknologi kontrol emisi. Persamaan yang sering digunakan untuk menghitung emisi NMVOC adalah:

$$
E = C \cdot Q
$$

di mana:
- \( E \) = emisi NMVOC (kg/jam)
- \( C \) = konsentrasi NMVOC dalam gas (kg/m³)
- \( Q \) = aliran gas (m³/jam)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Kebutuhan**: Identifikasi kebutuhan pemulihan gas flare berdasarkan data operasional kilang.
2. **Sizing Kompresor**: Hitung ukuran kompresor liquid ring yang diperlukan menggunakan rumus yang telah dijelaskan.
3. **Desain Jaringan Gas**: Rancang jaringan pipa untuk distribusi gas bakar yang efisien.
4. **Instalasi dan Pengujian**: Lakukan instalasi sistem FGRS dan lakukan pengujian untuk memastikan kinerja sesuai spesifikasi.
5. **Monitoring dan Pemeliharaan**: Implementasikan sistem monitoring untuk memantau kinerja dan lakukan pemeliharaan berkala.

### 3.2. Diagram Alir Proses

Diagram alir proses untuk sistem FGRS dapat digambarkan sebagai berikut:

```
[Gas Flare] --> [Kompresor Liquid Ring] --> [Jaringan Pipa] --> [Penggunaan Energi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan

Misalkan sebuah kilang menghasilkan gas flare dengan karakteristik sebagai berikut:
- Densitas gas (\( \rho \)) = 1.2 kg/m³
- Diameter rotor (\( D \)) = 0.5 m
- Kecepatan putaran (\( n \)) = 1500 rpm

#### Langkah 1: Hitung Kapasitas Aliran Volumetrik

Pertama, kita perlu menghitung kapasitas aliran volumetrik menggunakan rumus:

$$
Q = \frac{\pi D^2 n}{4} \cdot \rho \cdot v
$$

Dengan asumsi kecepatan gas (\( v \)) = 10 m/s:

$$
Q = \frac{\pi (0.5)^2 (1500)}{4} \cdot 1.2 \cdot 10 = 29.54 \, \text{m}^3/\text{jam}
$$

#### Langkah 2: Hitung Emisi NMVOC

Misalkan konsentrasi NMVOC (\( C \)) = 0.05 kg/m³:

$$
E = C \cdot Q = 0.05 \cdot 29.54 = 1.477 \, \text{kg/jam}
$$

### 4.2. Interpretasi Hasil

Dari perhitungan di atas, sistem FGRS dapat memulihkan sekitar 29.54 m³ gas per jam, dengan emisi NMVOC sebesar 1.477 kg/jam. Ini menunjukkan potensi pengurangan emisi yang signifikan jika sistem diimplementasikan dengan benar.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sistem pemulihan gas flare tidak hanya relevan dalam industri petrokimia, tetapi juga dapat diterapkan dalam sektor lain seperti energi, pengolahan limbah, dan manufaktur. Integrasi dengan teknologi otomasi dan manajemen biaya dapat meningkatkan efisiensi operasional secara keseluruhan.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk variabilitas dalam komposisi gas dan kondisi operasi yang dapat mempengaruhi kinerja sistem. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih akurat dan adaptif.

Arah riset masa depan dapat mencakup pengembangan teknologi baru untuk pemulihan gas, serta metode untuk mengurangi emisi NMVOC lebih lanjut, sejalan dengan standar lingkungan yang semakin ketat. Penelitian ini akan berkontribusi pada keberlanjutan industri dan pengurangan dampak lingkungan secara keseluruhan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
