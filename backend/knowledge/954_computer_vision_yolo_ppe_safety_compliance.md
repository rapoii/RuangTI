# 954 — Deteksi Kepatuhan Alat Pelindung Diri (APD) di Pabrik Menggunakan Edge AI dan YOLO Berkecepatan Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Edge AI and High-FPS YOLO Vision Detection for Factory Personal Protective Equipment (PPE) Compliance: Hard-Hat/Vest Detection, Occlusion Handling, and Real-Time RTSP Video Stream Ingestion  
**Standar & Referensi Utama:** Redmon et al. (YOLO Series); ISO 45001; Szeliski (Computer Vision: Algorithms and Applications, 2nd Ed., Springer); OSHA Compliance Guidelines

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, keselamatan kerja menjadi prioritas utama, terutama di sektor manufaktur yang berisiko tinggi. Alat Pelindung Diri (APD) seperti helm dan rompi keselamatan merupakan komponen vital dalam menjaga keselamatan pekerja. Menurut ISO 45001, organisasi harus memastikan bahwa semua pekerja dilindungi dari risiko yang dapat menyebabkan cedera atau kematian. Namun, tantangan dalam memastikan kepatuhan terhadap penggunaan APD di lapangan sering kali disebabkan oleh pengawasan yang tidak memadai dan kesulitan dalam mendeteksi kepatuhan secara real-time.

Sistem tradisional yang bergantung pada pengawasan manusia tidak hanya mahal tetapi juga rentan terhadap kesalahan. Dengan meningkatnya kompleksitas operasi di pabrik dan kebutuhan untuk efisiensi yang lebih tinggi, teknologi berbasis kecerdasan buatan (AI) menjadi solusi yang menjanjikan. Deteksi objek menggunakan algoritma YOLO (You Only Look Once) menawarkan kemampuan untuk mendeteksi dan mengklasifikasikan objek dalam video secara real-time dengan kecepatan tinggi dan akurasi yang tinggi. 

Implementasi teknologi Edge AI memungkinkan pemrosesan data di lokasi, mengurangi latensi dan meningkatkan responsivitas sistem. Dengan memanfaatkan video streaming RTSP (Real-Time Streaming Protocol), sistem dapat secara langsung menganalisis video dari kamera pengawas untuk mendeteksi kepatuhan penggunaan APD. Hal ini tidak hanya meningkatkan keselamatan tetapi juga mengurangi biaya operasional yang terkait dengan pelatihan dan pengawasan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Deteksi Objek dengan YOLO

YOLO adalah algoritma deteksi objek yang membagi gambar menjadi grid dan memprediksi bounding box serta probabilitas kelas untuk setiap grid. Rumus dasar untuk menghitung loss function dalam YOLO adalah sebagai berikut:

$$
L = \lambda_{coord} L_{coord} + L_{obj} + \lambda_{noobj} L_{noobj} + \lambda_{class} L_{class}
$$

Di mana:
- $L_{coord}$: Loss untuk koordinat bounding box
- $L_{obj}$: Loss untuk objek yang terdeteksi
- $L_{noobj}$: Loss untuk area tanpa objek
- $L_{class}$: Loss untuk klasifikasi objek
- $\lambda_{coord}, \lambda_{noobj}, \lambda_{class}$: Koefisien penyesuaian untuk setiap komponen loss

### 2.2. Parameter dan Variabel

- $x, y$: Koordinat pusat bounding box
- $w, h$: Lebar dan tinggi bounding box
- $p$: Probabilitas bahwa bounding box mengandung objek
- $c$: Kelas objek yang terdeteksi

### 2.3. Pembuktian Matematis

Untuk menghitung loss koordinat, kita menggunakan rumus berikut:

$$
L_{coord} = \sum_{i=0}^{B} \left( (x_i - \hat{x}_i)^2 + (y_i - \hat{y}_i)^2 + (w_i - \hat{w}_i)^2 + (h_i - \hat{h}_i)^2 \right)
$$

Di mana $B$ adalah jumlah bounding box yang diprediksi. Pembuktian ini menunjukkan bagaimana model berusaha untuk meminimalkan perbedaan antara prediksi dan nilai sebenarnya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Mengumpulkan video dari kamera yang terpasang di area kerja.
2. **Preprocessing Data**: Mengubah ukuran gambar, normalisasi, dan augmentasi data untuk meningkatkan akurasi model.
3. **Pelatihan Model YOLO**: Menggunakan dataset yang telah diproses untuk melatih model YOLO.
4. **Implementasi Edge AI**: Mengintegrasikan model ke dalam perangkat edge untuk pemrosesan real-time.
5. **Pengujian dan Validasi**: Menggunakan data pengujian untuk mengevaluasi akurasi model.
6. **Monitoring dan Pemeliharaan**: Memastikan sistem berfungsi dengan baik dan melakukan pembaruan model secara berkala.

### 3.2. Diagram Alir Proses

```plaintext
[Pengumpulan Data] --> [Preprocessing Data] --> [Pelatihan Model] --> [Implementasi Edge AI] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan

Misalkan kita memiliki 100 pekerja di pabrik, dan kita ingin menghitung tingkat kepatuhan penggunaan APD setelah implementasi sistem deteksi.

- **Data Awal**: 
  - Jumlah pekerja yang menggunakan APD sebelum sistem: 70
  - Jumlah pekerja yang menggunakan APD setelah sistem: 90

### 4.2. Perhitungan

Tingkat kepatuhan sebelum dan sesudah implementasi dapat dihitung sebagai berikut:

$$
Tingkat\ Kepatuhan\ Sebelum = \frac{70}{100} \times 100\% = 70\%
$$

$$
Tingkat\ Kepatuhan\ Sesudah = \frac{90}{100} \times 100\% = 90\%
$$

### 4.3. Interpretasi Hasil

Hasil menunjukkan peningkatan 20% dalam kepatuhan penggunaan APD setelah implementasi sistem deteksi berbasis AI. Hal ini menunjukkan efektivitas teknologi dalam meningkatkan keselamatan kerja.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Teknologi deteksi berbasis AI tidak hanya relevan di sektor manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam konteks K3 (Keselamatan dan Kesehatan Kerja), penerapan sistem ini dapat membantu organisasi memenuhi standar OSHA dan ISO 45001, serta meningkatkan kepatuhan terhadap regulasi keselamatan.

### 5.1. Batasan Metodologi

Meskipun sistem ini menjanjikan, terdapat beberapa batasan, seperti ketergantungan pada kualitas video dan kondisi pencahayaan. Selain itu, model mungkin kesulitan dalam mendeteksi pekerja yang mengenakan APD yang tidak standar atau saat terjadi occlusion.

### 5.2. Arah Riset Masa Depan

Penelitian lebih lanjut dapat difokuskan pada pengembangan algoritma yang lebih robust untuk menangani occlusion dan meningkatkan akurasi deteksi dalam kondisi yang beragam. Selain itu, integrasi dengan sistem manajemen keselamatan yang lebih luas dapat memberikan manfaat tambahan dalam pengelolaan risiko di tempat kerja.

Dengan demikian, penerapan Edge AI dan teknologi deteksi berbasis YOLO memiliki potensi besar untuk meningkatkan kepatuhan terhadap penggunaan APD di industri, sekaligus mengurangi risiko kecelakaan kerja dan meningkatkan efisiensi operasional.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
