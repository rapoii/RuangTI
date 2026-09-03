# 955 — Physics-Informed Neural Networks (PINN) for Inverse Heat Transfer and Solidification Front Tracking in Continuous Steel Casting: Navier-Stokes-Fourier Loss Regularization

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Physics-Informed Neural Networks (PINN) for Inverse Heat Transfer and Solidification Front Tracking in Continuous Steel Casting: Navier-Stokes-Fourier Loss Regularization  
**Standar & Referensi Utama:** Raissi, Perdikaris & Karniadakis (2019 / Survey 2023, J. Comput. Phys.); ISIJ International; Goodfellow, Bengio & Courville (Deep Learning, MIT Press)

---

## 1. Pendahuluan dan Konteks Industri

Industri baja merupakan salah satu sektor yang paling vital dalam perekonomian global, dengan permintaan yang terus meningkat seiring dengan pertumbuhan infrastruktur dan teknologi. Proses pengecoran baja kontinu adalah metode yang umum digunakan untuk memproduksi baja dengan efisiensi tinggi. Namun, tantangan utama dalam proses ini adalah pengendalian suhu dan pelacakan front pembekuan yang tepat, yang sangat mempengaruhi kualitas produk akhir. Ketidakakuratan dalam pengendalian suhu dapat menyebabkan cacat pada produk, yang berujung pada kerugian ekonomi yang signifikan.

Dalam konteks ini, Physics-Informed Neural Networks (PINN) muncul sebagai solusi inovatif untuk memodelkan dan memecahkan masalah inverse heat transfer dan pelacakan front solidifikasi. PINN mengintegrasikan pengetahuan fisika dalam bentuk persamaan diferensial ke dalam arsitektur jaringan saraf, memungkinkan model untuk belajar dari data sekaligus mematuhi hukum fisika yang mendasarinya. Hal ini sangat penting dalam aplikasi industri di mana data sering kali terbatas dan mahal untuk diperoleh.

Tantangan utama dalam penerapan PINN di industri baja adalah bagaimana mengatur loss function yang mencakup regularisasi Navier-Stokes dan Fourier untuk memastikan akurasi model. Dengan memanfaatkan pendekatan ini, diharapkan dapat meningkatkan efisiensi proses pengecoran dan mengurangi cacat produk, yang pada gilirannya akan meningkatkan daya saing industri baja secara keseluruhan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Persamaan Dasar

Dalam konteks transfer panas dan solidifikasi, kita perlu mempertimbangkan dua persamaan utama: persamaan Navier-Stokes untuk aliran fluida dan persamaan Fourier untuk konduksi panas.

#### 2.1.1. Persamaan Navier-Stokes

Persamaan Navier-Stokes untuk aliran fluida dapat dinyatakan sebagai:

$$
\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} = -\frac{1}{\rho} \nabla p + \nu \nabla^2 \mathbf{u} + \mathbf{f}
$$

di mana:
- $\mathbf{u}$ adalah vektor kecepatan fluida,
- $t$ adalah waktu,
- $\rho$ adalah densitas fluida,
- $p$ adalah tekanan,
- $\nu$ adalah viskositas kinematik,
- $\mathbf{f}$ adalah gaya luar per satuan massa.

#### 2.1.2. Persamaan Fourier

Persamaan Fourier untuk konduksi panas dapat dinyatakan sebagai:

$$
\frac{\partial T}{\partial t} = \alpha \nabla^2 T
$$

di mana:
- $T$ adalah suhu,
- $\alpha$ adalah koefisien difusi termal.

### 2.2. Regularisasi Loss Function

Dalam PINN, kita mendefinisikan loss function yang menggabungkan data observasi dengan persamaan fisika. Loss function dapat dinyatakan sebagai:

$$
L = L_{data} + \lambda_1 L_{NS} + \lambda_2 L_{Fourier}
$$

di mana:
- $L_{data}$ adalah loss dari data observasi,
- $L_{NS}$ adalah loss dari persamaan Navier-Stokes,
- $L_{Fourier}$ adalah loss dari persamaan Fourier,
- $\lambda_1$ dan $\lambda_2$ adalah bobot regularisasi.

Loss dari data observasi dapat dinyatakan sebagai:

$$
L_{data} = \frac{1}{N} \sum_{i=1}^{N} \left( T_{pred}(x_i, t_i) - T_{obs}(x_i, t_i) \right)^2
$$

di mana $T_{pred}$ adalah suhu yang diprediksi oleh model, dan $T_{obs}$ adalah suhu yang diobservasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data suhu dan kecepatan dari proses pengecoran baja kontinu.
2. **Preprocessing Data**: Lakukan normalisasi dan pembagian data menjadi set pelatihan dan pengujian.
3. **Definisi Model PINN**: Rancang arsitektur jaringan saraf dengan lapisan input, tersembunyi, dan output.
4. **Definisi Loss Function**: Implementasikan loss function yang menggabungkan data observasi dan regularisasi fisika.
5. **Pelatihan Model**: Latih model menggunakan algoritma optimasi seperti Adam atau SGD.
6. **Validasi Model**: Uji model dengan data pengujian untuk mengevaluasi akurasi prediksi.
7. **Implementasi di Lapangan**: Terapkan model di lingkungan produksi untuk memantau dan mengontrol proses.

### 3.2. Diagram Alir Proses

```
[Pengumpulan Data] --> [Preprocessing Data] --> [Definisi Model PINN]
       |                        |                            |
       v                        v                            v
[Definisi Loss Function] --> [Pelatihan Model] --> [Validasi Model]
       |                                                      |
       v                                                      v
[Implementasi di Lapangan] <------------------------------ [Uji Coba]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki data suhu dan kecepatan pada proses pengecoran baja kontinu sebagai berikut:

- Suhu awal: $T_0 = 1500 \, \text{°C}$
- Densitas baja: $\rho = 7850 \, \text{kg/m}^3$
- Viskositas kinematik: $\nu = 0.01 \, \text{m}^2/\text{s}$
- Koefisien difusi termal: $\alpha = 1.2 \times 10^{-5} \, \text{m}^2/\text{s}$

### 4.2. Langkah Perhitungan

1. **Hitung Loss Data**:
   Misalkan kita memiliki pengamatan suhu $T_{obs} = 1450 \, \text{°C}$ pada titik tertentu.
   Maka, loss data dapat dihitung sebagai:

   $$
   L_{data} = \left( T_{pred} - T_{obs} \right)^2 = \left( 1500 - 1450 \right)^2 = 2500
   $$

2. **Hitung Loss Navier-Stokes**:
   Untuk menghitung $L_{NS}$, kita perlu menyelesaikan persamaan Navier-Stokes dengan kondisi batas yang sesuai. Misalkan hasil simulasi memberikan nilai $L_{NS} = 100$.

3. **Hitung Loss Fourier**:
   Dengan asumsi hasil simulasi memberikan nilai $L_{Fourier} = 50$.

4. **Hitung Total Loss**:
   Misalkan kita menggunakan bobot $\lambda_1 = 0.5$ dan $\lambda_2 = 0.5$, maka total loss dapat dihitung sebagai:

   $$
   L = L_{data} + \lambda_1 L_{NS} + \lambda_2 L_{Fourier} = 2500 + 0.5 \times 100 + 0.5 \times 50 = 2500 + 50 + 25 = 2575
   $$

### 4.3. Interpretasi Hasil

Hasil total loss yang tinggi menunjukkan bahwa model masih perlu diperbaiki, baik dari segi arsitektur jaringan maupun pengaturan hyperparameter. Dengan mengurangi total loss melalui optimasi, kita dapat meningkatkan akurasi prediksi suhu dan kecepatan dalam proses pengecoran baja.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Penerapan PINN dalam industri baja tidak hanya terbatas pada pengendalian suhu dan pelacakan solidifikasi. Metodologi ini juga dapat diterapkan dalam bidang lain seperti manajemen rantai pasok, di mana prediksi permintaan dan pengendalian inventaris dapat dioptimalkan menggunakan model berbasis fisika. Selain itu, integrasi dengan teknologi otomasi dan sistem kontrol dapat meningkatkan efisiensi operasional.

### 5.2. Batasan Metodologi

Meskipun PINN menawarkan banyak keuntungan, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah kebutuhan akan data yang berkualitas tinggi untuk pelatihan model. Selain itu, kompleksitas model dapat menyebabkan waktu pelatihan yang lama dan kebutuhan komputasi yang tinggi.

### 5.3. Arah Riset Masa Depan

Ke depan, riset dalam bidang PINN untuk industri baja dapat difokuskan pada pengembangan algoritma yang lebih efisien dan robust, serta integrasi dengan teknologi machine learning lainnya. Selain itu, eksplorasi aplikasi PINN dalam konteks keberlanjutan dan efisiensi energi juga menjadi area yang menarik untuk diteliti, sejalan dengan tuntutan industri untuk mengurangi jejak karbon dan meningkatkan praktik ramah lingkungan.

Dengan demikian, penerapan Physics-Informed Neural Networks dalam proses pengecoran baja kontinu tidak hanya menjanjikan peningkatan efisiensi dan kualitas produk, tetapi juga membuka peluang untuk inovasi dalam berbagai disiplin ilmu dan praktik industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
