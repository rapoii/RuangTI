# 875 — Penerapan TinyML dan Edge AI pada Mikrokontroler untuk Deteksi Anomali Getaran Industri: Kuantisasi Pasca-Pelatihan 8-Bit, Optimasi CMSIS-NN, dan Inferensi Autoencoder

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** TinyML and Edge AI Deployment on Microcontrollers for Industrial Vibration Anomaly Detection: 8-Bit Post-Training Quantization, CMSIS-NN Optimization, and Autoencoder Inference  
**Standar & Referensi Utama:** Warden & Situnayake (TinyML, O'Reilly); ISO 13373; IEEE Trans. Ind. Inform.

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, deteksi anomali getaran pada mesin dan peralatan menjadi semakin penting untuk menjaga efisiensi operasional dan mengurangi biaya pemeliharaan. Menurut ISO 13373, deteksi dini terhadap anomali getaran dapat mencegah kerusakan yang lebih parah dan memperpanjang umur peralatan. Dengan meningkatnya kompleksitas sistem manufaktur dan rantai pasok, tantangan dalam pengelolaan data dan pemrosesan informasi menjadi semakin signifikan. 

TinyML dan Edge AI menawarkan solusi inovatif untuk mengatasi tantangan ini dengan memungkinkan pemrosesan data secara lokal pada perangkat mikrokontroler. Pendekatan ini tidak hanya mengurangi latensi dalam pengambilan keputusan tetapi juga mengurangi kebutuhan bandwidth untuk mentransfer data ke cloud. Dalam konteks ini, penerapan kuantisasi pasca-pelatihan 8-bit dan optimasi CMSIS-NN menjadi sangat relevan. Dengan mengurangi ukuran model dan meningkatkan efisiensi komputasi, kita dapat mengimplementasikan algoritma pembelajaran mesin yang kompleks pada perangkat dengan sumber daya terbatas.

Tantangan utama dalam penerapan teknologi ini mencakup keterbatasan daya, kapasitas penyimpanan, dan kebutuhan untuk menjaga akurasi deteksi. Oleh karena itu, pemahaman yang mendalam tentang metodologi dan teknik yang digunakan dalam TinyML dan Edge AI sangat penting untuk mencapai hasil yang optimal dalam deteksi anomali getaran.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Autoencoder

Autoencoder adalah jenis jaringan saraf yang digunakan untuk belajar representasi data yang efisien. Model ini terdiri dari dua bagian utama: encoder dan decoder. Fungsi loss untuk autoencoder dapat dinyatakan sebagai:

$$
L(x, \hat{x}) = ||x - \hat{x}||^2
$$

di mana \( x \) adalah input asli dan \( \hat{x} \) adalah output rekonstruksi. 

### 2.2. Kuantisasi Pasca-Pelatihan

Kuantisasi pasca-pelatihan adalah teknik yang digunakan untuk mengurangi ukuran model dengan mengubah bobot dari representasi floating-point ke representasi integer. Proses ini dapat dinyatakan sebagai:

$$
w_q = \text{round}\left(\frac{w - w_{min}}{w_{max} - w_{min}} \cdot (2^n - 1)\right)
$$

di mana \( w_q \) adalah bobot kuantisasi, \( w \) adalah bobot asli, \( w_{min} \) dan \( w_{max} \) adalah nilai minimum dan maksimum dari bobot, dan \( n \) adalah jumlah bit yang digunakan untuk representasi.

### 2.3. Optimasi CMSIS-NN

CMSIS-NN adalah pustaka yang dirancang untuk mempercepat inferensi jaringan saraf pada mikrokontroler. Optimasi dilakukan dengan menggunakan operasi yang efisien untuk arsitektur ARM Cortex-M. Misalnya, operasi konvolusi dapat dinyatakan sebagai:

$$
Y[i,j] = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} X[i+m,j+n] \cdot K[m,n]
$$

di mana \( Y \) adalah output, \( X \) adalah input, dan \( K \) adalah kernel konvolusi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Pengumpulan Data**: Mengumpulkan data getaran dari sensor yang dipasang pada peralatan industri.
2. **Pra-pemrosesan Data**: Menghilangkan noise dan normalisasi data menggunakan metode statistik.
3. **Pelatihan Model**: Menggunakan dataset yang telah diproses untuk melatih model autoencoder.
4. **Kuantisasi Model**: Menggunakan teknik kuantisasi pasca-pelatihan untuk mengurangi ukuran model.
5. **Optimasi dengan CMSIS-NN**: Mengimplementasikan model yang telah dikuantisasi menggunakan pustaka CMSIS-NN untuk inferensi.
6. **Inferensi dan Deteksi Anomali**: Melakukan inferensi pada data baru untuk mendeteksi anomali.

### 3.2. Diagram Alir Proses

```
[Pengumpulan Data] --> [Pra-pemrosesan Data] --> [Pelatihan Model] --> [Kuantisasi Model] --> [Optimasi CMSIS-NN] --> [Inferensi dan Deteksi Anomali]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan

Misalkan kita memiliki data getaran dengan frekuensi sampling 1000 Hz dan durasi pengambilan data selama 10 detik. Total sampel yang dikumpulkan adalah:

$$
N = 1000 \, \text{Hz} \times 10 \, \text{s} = 10000 \, \text{sampel}
$$

Jika kita menggunakan autoencoder dengan arsitektur 128-64-128, kita dapat menghitung jumlah parameter model sebagai berikut:

- Jumlah parameter dari layer input ke layer tersembunyi: \( 128 \times 64 + 64 \) (bias)
- Jumlah parameter dari layer tersembunyi ke layer output: \( 64 \times 128 + 128 \) (bias)

Total parameter:

$$
P = (128 \times 64 + 64) + (64 \times 128 + 128) = 8192 + 64 + 8192 + 128 = 16376
$$

### 4.2. Interpretasi Hasil

Dengan total 16376 parameter, model ini dapat dioptimalkan menggunakan kuantisasi 8-bit. Jika kita mengasumsikan bahwa setiap parameter dalam representasi floating-point memerlukan 4 byte, maka ukuran model asli adalah:

$$
\text{Ukuran Model} = 16376 \times 4 \, \text{byte} = 65404 \, \text{byte} \approx 65.4 \, \text{KB}
$$

Setelah kuantisasi, ukuran model dapat berkurang menjadi:

$$
\text{Ukuran Model Kuantisasi} = 16376 \times 1 \, \text{byte} = 16376 \, \text{byte} \approx 16.4 \, \text{KB}
$$

Pengurangan ukuran model ini memungkinkan penerapan pada mikrokontroler dengan memori terbatas.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan TinyML dan Edge AI tidak hanya terbatas pada deteksi anomali getaran, tetapi juga dapat diadaptasi untuk berbagai disiplin ilmu, termasuk manajemen rantai pasok, otomasi industri, dan manajemen biaya. Dalam konteks K3 (Keselamatan dan Kesehatan Kerja) dan ESG (Environmental, Social, and Governance), teknologi ini dapat digunakan untuk memantau kondisi peralatan dan lingkungan kerja secara real-time, sehingga meningkatkan keselamatan pekerja dan keberlanjutan operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti keterbatasan akurasi model yang dikuantisasi dan tantangan dalam pengumpulan data yang representatif. Oleh karena itu, riset masa depan harus fokus pada pengembangan algoritma yang lebih efisien dan adaptif, serta eksplorasi penggunaan teknologi baru seperti 5G untuk meningkatkan komunikasi dan pemrosesan data di lapangan.

Dengan demikian, penerapan TinyML dan Edge AI pada mikrokontroler untuk deteksi anomali getaran menawarkan potensi besar untuk meningkatkan efisiensi dan efektivitas operasional di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
