# 1376 — Analisis Kinerja Logistik Perishable Menggunakan Simulasi Discrete Event

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Analisis Kinerja Logistik Perishable Menggunakan Simulasi Discrete Event  
**Standar & Referensi Utama:** Brown, C., & Wilson, J. (2024). Discrete Event Simulation in Perishable Logistics. CIRP Journal of Manufacturing Science and Technology, 38, 45-58. doi:10.1016/j.cirpj.2024.01.005. ISO 9001:2023.

---

## 1. Pendahuluan dan Konteks Industri

Logistik perishable merupakan aspek penting dalam rantai pasok modern, terutama dalam industri makanan dan farmasi, di mana produk memiliki umur simpan yang terbatas. Dalam konteks industri nyata, tantangan utama yang dihadapi adalah menjaga kualitas dan keamanan produk selama proses penyimpanan dan distribusi. Menurut Brown dan Wilson (2024), efisiensi dalam pengelolaan logistik perishable sangat berpengaruh terhadap biaya operasional dan kepuasan pelanggan. 

Krisis global seperti pandemi COVID-19 telah memperlihatkan betapa rentannya rantai pasok perishable terhadap gangguan. Dalam situasi seperti ini, perusahaan harus beradaptasi dengan cepat untuk menghindari kerugian yang signifikan. Oleh karena itu, analisis kinerja logistik perishable menjadi semakin mendesak. Salah satu metode yang efektif untuk menganalisis dan mengoptimalkan proses logistik adalah melalui simulasi discrete event. Metode ini memungkinkan pemodelan sistem kompleks dengan berbagai variabel dan ketidakpastian, sehingga memberikan gambaran yang lebih akurat tentang kinerja sistem.

Tantangan yang dihadapi dalam logistik perishable mencakup pengelolaan suhu, waktu transit, dan pengendalian inventaris. Kegagalan dalam mengelola faktor-faktor ini dapat menyebabkan kerugian besar, baik dari segi finansial maupun reputasi. Oleh karena itu, pemahaman yang mendalam tentang kinerja logistik perishable dan penerapan teknik analisis yang tepat sangat penting untuk meningkatkan efisiensi dan efektivitas dalam rantai pasok.

## 2. Landasan Teori & Formulasi Matematis

Simulasi discrete event adalah metode yang digunakan untuk memodelkan sistem yang berubah seiring waktu berdasarkan kejadian diskrit. Dalam konteks logistik perishable, kita dapat memodelkan berbagai elemen seperti pengiriman, penyimpanan, dan permintaan pelanggan. Beberapa rumus penting yang digunakan dalam analisis ini adalah:

1. **Rumus Waktu Tunggu**:
   $$ W = \frac{L}{\lambda} $$
   di mana:
   - \( W \) = waktu tunggu rata-rata
   - \( L \) = jumlah rata-rata pelanggan dalam sistem
   - \( \lambda \) = laju kedatangan pelanggan

2. **Rumus Utilisasi**:
   $$ \rho = \frac{\lambda}{\mu} $$
   di mana:
   - \( \rho \) = utilisasi sistem
   - \( \mu \) = laju pelayanan

3. **Rumus Probabilitas**:
   $$ P_n = (1 - \rho) \rho^n $$
   di mana:
   - \( P_n \) = probabilitas terdapat \( n \) pelanggan dalam sistem

4. **Rumus Total Biaya**:
   $$ TC = C_f + C_v + C_e $$
   di mana:
   - \( TC \) = total biaya
   - \( C_f \) = biaya tetap
   - \( C_v \) = biaya variabel
   - \( C_e \) = biaya kehilangan produk

Dengan menggunakan rumus-rumus ini, kita dapat menganalisis kinerja sistem logistik perishable dan mengidentifikasi area yang memerlukan perbaikan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi yang digunakan dalam analisis kinerja logistik perishable melalui simulasi discrete event meliputi langkah-langkah berikut:

1. **Identifikasi Tujuan dan Ruang Lingkup**: Menentukan tujuan analisis dan batasan sistem yang akan dimodelkan.
2. **Pengumpulan Data**: Mengumpulkan data historis tentang permintaan, waktu transit, dan biaya.
3. **Pemodelan Sistem**: Menggunakan perangkat lunak simulasi untuk membuat model sistem logistik perishable.
4. **Validasi Model**: Memastikan bahwa model yang dibuat akurat dan dapat merepresentasikan sistem nyata.
5. **Simulasi**: Melakukan simulasi untuk berbagai skenario dan menganalisis hasilnya.
6. **Evaluasi dan Rekomendasi**: Menginterpretasikan hasil simulasi untuk memberikan rekomendasi perbaikan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] -> [Pengumpulan Data] -> [Pemodelan Sistem] -> [Validasi Model] -> [Simulasi] -> [Evaluasi dan Rekomendasi]
```

Standar prosedur operasional (SOP) harus mengikuti pedoman ISO 9001:2023 untuk memastikan kualitas dan konsistensi dalam proses.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan menganalisis sistem distribusi produk makanan beku dengan parameter berikut:

- Laju kedatangan pelanggan (\( \lambda \)): 10 pelanggan/jam
- Laju pelayanan (\( \mu \)): 15 pelanggan/jam
- Biaya tetap (\( C_f \)): Rp 5.000.000
- Biaya variabel (\( C_v \)): Rp 1.000.000
- Biaya kehilangan produk (\( C_e \)): Rp 500.000

### Langkah 1: Hitung Waktu Tunggu
Menggunakan rumus waktu tunggu:
$$ W = \frac{L}{\lambda} $$
Dengan \( L = \frac{\lambda}{\mu - \lambda} = \frac{10}{15 - 10} = 2 \):
$$ W = \frac{2}{10} = 0.2 \text{ jam} = 12 \text{ menit} $$

### Langkah 2: Hitung Utilisasi
Menggunakan rumus utilisasi:
$$ \rho = \frac{\lambda}{\mu} = \frac{10}{15} = 0.67 $$

### Langkah 3: Hitung Total Biaya
$$ TC = C_f + C_v + C_e = 5.000.000 + 1.000.000 + 500.000 = Rp 6.500.000 $$

### Interpretasi Hasil
Dari hasil perhitungan, waktu tunggu rata-rata pelanggan adalah 12 menit, dengan utilisasi sistem sebesar 67%. Total biaya yang dikeluarkan untuk sistem distribusi ini adalah Rp 6.500.000. Hasil ini menunjukkan bahwa sistem masih memiliki kapasitas untuk menampung lebih banyak pelanggan tanpa meningkatkan waktu tunggu secara signifikan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis kinerja logistik perishable menggunakan simulasi discrete event memiliki aplikasi luas di berbagai sektor, termasuk supply chain, otomasi, dan manajemen biaya. Dalam konteks supply chain, pemahaman yang baik tentang dinamika sistem dapat membantu perusahaan dalam mengoptimalkan rantai pasok dan mengurangi biaya. 

Namun, terdapat beberapa batasan dalam metodologi ini, seperti ketergantungan pada data historis yang akurat dan asumsi yang mungkin tidak selalu berlaku dalam kondisi nyata. Selain itu, perkembangan teknologi seperti Internet of Things (IoT) dan analitik data besar dapat memberikan peluang baru untuk meningkatkan akurasi dan efisiensi dalam analisis logistik.

Arah riset masa depan dapat difokuskan pada integrasi teknologi baru dalam simulasi, serta pengembangan model yang lebih kompleks yang dapat menangani ketidakpastian dan variabilitas dalam sistem logistik perishable. Dengan demikian, analisis kinerja logistik perishable akan terus menjadi area penelitian yang relevan dan penting dalam dunia industri.