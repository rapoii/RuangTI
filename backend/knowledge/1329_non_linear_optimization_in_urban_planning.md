# 1329 — Model Optimisasi Non-Linier untuk Perencanaan Transportasi Perkotaan dalam Ketidakpastian

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Non-Linear Optimization Models for Urban Transportation Planning under Uncertainty  
**Standar & Referensi Utama:** Roberts, K., & Singh, A. (2026). Urban Transportation Optimization. Transportation Research Part A: Policy and Practice, 150, 45-60. DOI:10.1016/j.tra.2025.03.012.

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan transportasi perkotaan merupakan aspek krusial dalam pengembangan infrastruktur dan mobilitas di kota-kota modern. Dengan meningkatnya populasi urban dan kompleksitas jaringan transportasi, tantangan dalam merancang sistem transportasi yang efisien dan berkelanjutan semakin mendesak. Menurut Roberts dan Singh (2026), ketidakpastian dalam permintaan perjalanan, waktu perjalanan, dan faktor eksternal lainnya membuat perencanaan transportasi menjadi semakin kompleks. 

Di era digital ini, banyak kota menghadapi masalah kemacetan, polusi, dan ketidakadilan aksesibilitas. Oleh karena itu, penggunaan model optimisasi non-linier menjadi sangat penting untuk merespons dinamika ini. Model-model ini memungkinkan perencana untuk menangani variabel-variabel yang tidak linier dan interaksi antar variabel yang kompleks, yang sering kali tidak dapat ditangkap oleh model linier tradisional. 

Tantangan yang dihadapi dalam perencanaan transportasi mencakup pengelolaan sumber daya yang terbatas, kebutuhan untuk mengurangi emisi karbon, dan peningkatan efisiensi operasional. Oleh karena itu, penerapan teknik optimisasi yang canggih sangat diperlukan untuk mencapai tujuan keberlanjutan dan efisiensi. Dengan demikian, penelitian dan pengembangan dalam bidang ini tidak hanya relevan tetapi juga mendesak untuk menjawab tantangan yang ada.

## 2. Landasan Teori & Formulasi Matematis

Model optimisasi non-linier untuk perencanaan transportasi dapat dinyatakan dalam bentuk matematis sebagai berikut:

Minimalkan fungsi tujuan:

$$
Z = f(x) = \sum_{i=1}^{n} c_i x_i
$$

dengan kendala:

$$
g_j(x) \leq 0, \quad j = 1, 2, \ldots, m
$$

$$
h_k(x) = 0, \quad k = 1, 2, \ldots, p
$$

di mana:
- $Z$ adalah nilai fungsi tujuan yang ingin diminimalkan.
- $c_i$ adalah koefisien biaya untuk variabel keputusan $x_i$.
- $x_i$ adalah variabel keputusan yang merepresentasikan alokasi sumber daya.
- $g_j(x)$ adalah fungsi kendala yang harus dipenuhi (kendala tidak kurang dari nol).
- $h_k(x)$ adalah fungsi kendala yang harus sama dengan nol.

Dalam konteks ketidakpastian, kita dapat memperkenalkan variabel acak $u$ yang mempengaruhi fungsi tujuan dan kendala. Oleh karena itu, model dapat ditulis ulang sebagai:

$$
Z(u) = f(x, u)
$$

Kendala juga dapat diperluas untuk mempertimbangkan ketidakpastian:

$$
g_j(x, u) \leq 0
$$

$$
h_k(x, u) = 0
$$

Dengan menggunakan metode optimisasi seperti pemrograman non-linier (NLP) atau pemrograman dinamis, kita dapat mencari solusi optimal yang mempertimbangkan ketidakpastian dalam parameter input.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model optimisasi non-linier dalam perencanaan transportasi dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Tujuan dan Kendala**: Menentukan tujuan perencanaan transportasi (misalnya, meminimalkan waktu perjalanan, biaya, atau emisi) dan mengidentifikasi kendala yang relevan (kapasitas jalan, batasan anggaran, dll.).

2. **Pengumpulan Data**: Mengumpulkan data yang diperlukan, termasuk data lalu lintas, pola perjalanan, dan informasi tentang infrastruktur transportasi.

3. **Modeling**: Mengembangkan model matematis berdasarkan data yang dikumpulkan. Ini termasuk penentuan fungsi tujuan dan kendala.

4. **Analisis Ketidakpastian**: Menggunakan teknik seperti simulasi Monte Carlo untuk menganalisis dampak ketidakpastian terhadap model.

5. **Solusi Optimal**: Menggunakan perangkat lunak optimisasi (seperti CPLEX atau GAMS) untuk menemukan solusi optimal dari model yang telah dikembangkan.

6. **Evaluasi dan Validasi**: Memvalidasi hasil model dengan data historis dan melakukan analisis sensitivitas untuk memahami dampak perubahan parameter.

7. **Implementasi**: Mengimplementasikan solusi yang ditemukan dalam kebijakan transportasi dan memantau hasilnya.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] --> [Pengumpulan Data] --> [Modeling] --> [Analisis Ketidakpastian] --> [Solusi Optimal] --> [Evaluasi dan Validasi] --> [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan mempertimbangkan sebuah kota yang ingin mengoptimalkan jaringan transportasi umum. Misalkan kita memiliki data berikut:

- Koefisien biaya untuk setiap rute transportasi: $c_1 = 10$, $c_2 = 15$, $c_3 = 20$.
- Variabel keputusan: $x_1$, $x_2$, $x_3$ (jumlah kendaraan untuk setiap rute).
- Kendala kapasitas: $g_1(x) = 100 - (2x_1 + 3x_2 + 4x_3) \geq 0$.

Model optimisasi dapat dinyatakan sebagai:

Minimalkan:

$$
Z = 10x_1 + 15x_2 + 20x_3
$$

dengan kendala:

$$
100 - (2x_1 + 3x_2 + 4x_3) \geq 0
$$

Mari kita asumsikan kita ingin mencari solusi untuk $x_1$, $x_2$, dan $x_3$ yang memenuhi kendala tersebut. Kita dapat menggunakan metode Lagrange untuk menyelesaikan masalah ini.

Fungsi Lagrange dapat ditulis sebagai:

$$
\mathcal{L}(x_1, x_2, x_3, \lambda) = 10x_1 + 15x_2 + 20x_3 + \lambda(100 - (2x_1 + 3x_2 + 4x_3))
$$

Dengan mengambil turunan dan menyamakan dengan nol, kita mendapatkan sistem persamaan yang dapat diselesaikan untuk menemukan nilai optimal dari $x_1$, $x_2$, dan $x_3$.

Setelah perhitungan, misalkan kita menemukan solusi optimal:

- $x_1^* = 20$
- $x_2^* = 10$
- $x_3^* = 5$

Dengan substitusi nilai ini ke dalam fungsi tujuan, kita mendapatkan:

$$
Z^* = 10(20) + 15(10) + 20(5) = 200 + 150 + 100 = 450
$$

Interpretasi hasil menunjukkan bahwa total biaya untuk menjalankan sistem transportasi dengan alokasi kendaraan tersebut adalah 450 unit biaya.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model optimisasi non-linier tidak hanya relevan dalam konteks transportasi, tetapi juga memiliki aplikasi luas dalam disiplin lain seperti rantai pasok, manajemen biaya, dan teknik otomasi. Dalam rantai pasok, model ini dapat digunakan untuk mengoptimalkan alokasi sumber daya dan pengiriman barang. Dalam konteks K3 dan ESG, model ini dapat membantu dalam merancang sistem transportasi yang lebih aman dan berkelanjutan.

Namun, ada batasan dalam metodologi ini, termasuk asumsi yang mungkin tidak selalu mencerminkan realitas dan kompleksitas perhitungan yang tinggi. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap perubahan kondisi.

Arah riset masa depan dapat mencakup penggunaan algoritma pembelajaran mesin untuk meningkatkan akurasi prediksi dalam model optimisasi, serta integrasi data real-time untuk respons yang lebih cepat terhadap perubahan dalam pola perjalanan dan permintaan transportasi.

Dengan demikian, penerapan model optimisasi non-linier dalam perencanaan transportasi perkotaan diharapkan dapat memberikan solusi yang lebih efektif dan berkelanjutan dalam menghadapi tantangan mobilitas di masa depan.