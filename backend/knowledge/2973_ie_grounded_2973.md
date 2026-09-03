# 2973 — Perilaku Skala Autoclave dan Karakterisasi Selama Pelindian Bijih Laterit Nikel di Bawah Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions  
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)  
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Proses pelindian bijih laterit nikel menggunakan metode High-Pressure Acid Leaching (HPAL) merupakan salah satu teknik yang semakin banyak diterapkan dalam industri pertambangan nikel. Proses ini melibatkan penggunaan suhu dan tekanan tinggi untuk melarutkan nikel dari bijih laterit, yang sering kali mengandung sulfur dan mineral lainnya. Dalam konteks ini, perilaku skala autoclave menjadi isu penting karena dapat mempengaruhi efisiensi dan biaya operasional. Menurut Dickson et al. (2026), skala yang terbentuk selama proses pelindian dapat mengakibatkan penurunan aliran fluida, peningkatan konsumsi energi, dan kerusakan pada peralatan. Oleh karena itu, pemahaman yang mendalam tentang karakterisasi skala ini sangat penting untuk meningkatkan kinerja sistem pelindian.

Dalam penelitian yang dilakukan oleh Andrameda et al. (2024), faktor-faktor seperti agen desulfurisasi, suhu, dan waktu proses reduksi-roasting juga berkontribusi terhadap efisiensi pelindian. Penelitian ini menunjukkan bahwa pengaturan parameter tersebut dapat meminimalkan pembentukan skala dan meningkatkan hasil pelindian nikel. Dengan demikian, penting bagi industri untuk mengadopsi pendekatan yang berbasis data untuk mengoptimalkan proses HPAL dan mengurangi dampak negatif dari skala autoclave.

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang digunakan dalam analisis pelindian bijih laterit nikel dapat dinyatakan dengan persamaan reaksi kimia dan kinetika pelindian. Proses pelindian dapat dinyatakan dengan persamaan umum:

$$
\frac{dC}{dt} = k \cdot A \cdot (C_s - C)
$$

di mana:
- \( C \) adalah konsentrasi nikel dalam larutan (mol/L),
- \( C_s \) adalah konsentrasi nikel dalam bijih (mol/L),
- \( k \) adalah konstanta laju reaksi (L/(mol·s)),
- \( A \) adalah luas permukaan bijih yang terpapar (m²),
- \( t \) adalah waktu (s).

Kinetika pelindian juga dipengaruhi oleh suhu dan tekanan, yang dapat dimodelkan dengan Arrhenius equation:

$$
k = A e^{-\frac{E_a}{RT}}
$$

di mana:
- \( A \) adalah faktor frekuensi,
- \( E_a \) adalah energi aktivasi (J/mol),
- \( R \) adalah konstanta gas (8.314 J/(mol·K)),
- \( T \) adalah suhu (K).

Model ini menunjukkan bahwa peningkatan suhu dan tekanan dapat meningkatkan laju pelindian, tetapi juga dapat memperburuk pembentukan skala. Oleh karena itu, penting untuk menemukan keseimbangan antara kondisi operasional yang optimal dan pengendalian skala.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Langkah-langkah implementasi sistematis dalam proses HPAL dapat diringkas sebagai berikut:

1. **Persiapan Bijih**: Bijih laterit dihancurkan dan digiling untuk meningkatkan luas permukaan.
2. **Pencampuran**: Bijih dicampur dengan asam sulfat dan agen desulfurisasi dalam autoclave.
3. **Pelindian**: Proses pelindian dilakukan pada suhu dan tekanan tinggi, dengan pemantauan kontinu terhadap parameter seperti pH dan suhu.
4. **Pengendalian Skala**: Penggunaan inhibitor skala dan pemantauan pembentukan skala secara real-time.
5. **Ekstraksi Nikel**: Larutan yang dihasilkan diproses untuk mengekstrak nikel, dan residu yang dihasilkan dikelola sesuai dengan standar lingkungan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Persiapan Bijih] --> [Pencampuran] --> [Pelindian] --> [Pengendalian Skala] --> [Ekstraksi Nikel]
```

Standar prosedur operasional (SOP) harus mengikuti pedoman industri yang berlaku, termasuk ISO 14001 untuk manajemen lingkungan dan ISO 9001 untuk manajemen mutu.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan kita memiliki bijih laterit nikel dengan konsentrasi nikel awal \( C_s = 0.05 \, \text{mol/L} \) dan kita ingin menghitung laju pelindian pada suhu 150°C (423 K) dengan energi aktivasi \( E_a = 50 \, \text{kJ/mol} \) dan faktor frekuensi \( A = 1 \times 10^6 \, \text{L/(mol·s)} \).

1. **Hitung konstanta laju \( k \)**:

$$
k = A e^{-\frac{E_a}{RT}} = 1 \times 10^6 \cdot e^{-\frac{50000}{8.314 \cdot 423}} \approx 1.23 \, \text{L/(mol·s)}
$$

2. **Hitung laju pelindian \( \frac{dC}{dt} \)** dengan luas permukaan \( A = 0.1 \, \text{m}^2 \):

$$
\frac{dC}{dt} = k \cdot A \cdot (C_s - C) = 1.23 \cdot 0.1 \cdot (0.05 - C)
$$

3. **Misalkan \( C = 0.01 \, \text{mol/L} \)**:

$$
\frac{dC}{dt} = 1.23 \cdot 0.1 \cdot (0.05 - 0.01) = 0.00492 \, \text{mol/(L·s)}
$$

Interpretasi hasil ini menunjukkan bahwa pada kondisi tersebut, laju pelindian nikel adalah 0.00492 mol/L per detik, yang menunjukkan efisiensi proses pelindian. Dengan memantau laju ini, manajer dapat mengambil keputusan yang tepat untuk mengoptimalkan proses.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun penelitian ini memberikan wawasan yang berharga tentang perilaku skala dalam proses HPAL, ada beberapa batasan yang perlu diperhatikan. Pertama, model matematis yang digunakan mungkin tidak sepenuhnya mencakup semua variabel yang mempengaruhi pelindian, seperti variasi komposisi bijih dan kondisi lingkungan. Selain itu, penelitian lebih lanjut diperlukan untuk mengeksplorasi metode baru dalam pengendalian skala, seperti penggunaan nanomaterial atau teknologi pemantauan berbasis sensor.

Aplikasi lintas sektor dari temuan ini dapat diterapkan dalam industri lain yang menggunakan proses pelindian, seperti ekstraksi logam dari limbah elektronik atau pemrosesan mineral lainnya. Dengan mengadopsi pendekatan berbasis data dan teknologi baru, industri dapat meningkatkan efisiensi dan keberlanjutan operasional mereka.

Agenda riset lanjutan harus mencakup pengembangan metode baru untuk mengurangi pembentukan skala, serta penelitian tentang dampak lingkungan dari proses HPAL dan cara untuk memitigasinya. Dengan demikian, industri dapat bergerak menuju praktik yang lebih berkelanjutan dan efisien dalam ekstraksi sumber daya mineral.