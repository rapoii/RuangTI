# 828 — Drone Inventaris Gudang Dalam Ruangan Otonom: Fusi Sensor Ultra-Wideband (UWB) dan Visual-Inertial Odometry (VIO), Penyesuaian Optik Pemindaian Barcode, dan Aerodinamika Efek Tanah

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Autonomous Indoor Warehouse Inventory Drones: Ultra-Wideband (UWB) and Visual-Inertial Odometry (VIO) Sensor Fusion, Barcode Scan Optical Alignment, and Ground Effect Aerodynamics  
**Standar & Referensi Utama:** Loianno et al. (2023, IEEE Rob. Autom. Mag.); ISO 21384; Floreano & Wood (Science Robotics)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, otomatisasi dan digitalisasi menjadi kunci untuk meningkatkan efisiensi operasional dalam rantai pasok dan manufaktur. Salah satu inovasi yang menjanjikan adalah penggunaan drone otonom untuk inventarisasi gudang dalam ruangan. Drone ini tidak hanya meningkatkan kecepatan dan akurasi dalam pengelolaan stok, tetapi juga mengurangi biaya tenaga kerja dan kesalahan manusia. Menurut laporan dari Loianno et al. (2023), penggunaan drone dalam manajemen inventaris dapat mengurangi waktu pencarian barang hingga 50% dan meningkatkan akurasi inventarisasi hingga 95%.

Namun, tantangan yang dihadapi dalam implementasi drone ini meliputi navigasi yang tepat di lingkungan yang kompleks, penghindaran rintangan, dan pemindaian barcode yang akurat. Sensor Ultra-Wideband (UWB) dan Visual-Inertial Odometry (VIO) merupakan teknologi yang dapat diintegrasikan untuk meningkatkan kemampuan navigasi dan pemetaan drone. UWB menyediakan informasi posisi yang sangat akurat, sementara VIO menggabungkan data dari kamera dan sensor inertial untuk memberikan estimasi posisi dan orientasi yang lebih baik. 

Di sisi lain, aerodinamika efek tanah juga menjadi faktor penting dalam desain drone, terutama pada ketinggian rendah, di mana interaksi antara drone dan permukaan tanah dapat mempengaruhi performa terbang. Dengan memanfaatkan teknologi ini, perusahaan dapat mengoptimalkan proses inventarisasi, mengurangi biaya operasional, dan meningkatkan kepuasan pelanggan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Fusi Sensor UWB dan VIO

Fusi sensor adalah proses menggabungkan data dari berbagai sensor untuk meningkatkan akurasi dan keandalan informasi yang diperoleh. Dalam konteks ini, kita akan menggunakan model matematis untuk menggambarkan fusi data dari UWB dan VIO.

Misalkan:
- $P_{UWB}$ adalah posisi yang diukur oleh sensor UWB.
- $P_{VIO}$ adalah posisi yang diukur oleh sensor VIO.
- $W$ adalah bobot yang diberikan pada masing-masing sensor.

Fusi posisi dapat dinyatakan dengan rumus berikut:

$$
P_{fused} = \frac{W_{UWB} \cdot P_{UWB} + W_{VIO} \cdot P_{VIO}}{W_{UWB} + W_{VIO}}
$$

Dengan bobot yang ditentukan berdasarkan akurasi masing-masing sensor. Misalnya, jika UWB memiliki akurasi lebih tinggi, maka $W_{UWB} > W_{VIO}$.

### 2.2. Estimasi Posisi Menggunakan VIO

VIO menggunakan data dari kamera dan sensor inertial untuk memperkirakan posisi dan orientasi. Model matematis untuk estimasi posisi dapat dinyatakan sebagai:

$$
\mathbf{P}_{t} = \mathbf{P}_{t-1} + \mathbf{v}_{t} \Delta t + \frac{1}{2} \mathbf{a}_{t} \Delta t^2
$$

Di mana:
- $\mathbf{P}_{t}$ adalah posisi pada waktu $t$.
- $\mathbf{P}_{t-1}$ adalah posisi pada waktu sebelumnya.
- $\mathbf{v}_{t}$ adalah kecepatan pada waktu $t$.
- $\mathbf{a}_{t}$ adalah percepatan pada waktu $t$.
- $\Delta t$ adalah interval waktu.

### 2.3. Aerodinamika Efek Tanah

Aerodinamika efek tanah dapat dianalisis dengan menggunakan teori dasar aerodinamika. Ketika drone terbang dekat dengan permukaan tanah, gaya angkat yang dihasilkan dapat ditingkatkan karena interaksi antara aliran udara dan permukaan. Model gaya angkat dapat dinyatakan sebagai:

$$
L = C_L \cdot \frac{1}{2} \rho V^2 A
$$

Di mana:
- $L$ adalah gaya angkat.
- $C_L$ adalah koefisien gaya angkat.
- $\rho$ adalah densitas udara.
- $V$ adalah kecepatan aliran udara.
- $A$ adalah area sayap.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Pemilihan Sensor**: Pilih sensor UWB dan VIO yang sesuai berdasarkan kebutuhan akurasi dan biaya.
2. **Integrasi Sensor**: Rancang sistem integrasi antara sensor UWB dan VIO untuk fusi data.
3. **Pengujian dan Kalibrasi**: Lakukan pengujian untuk memastikan akurasi pengukuran dan kalibrasi sensor.
4. **Pengembangan Algoritma Navigasi**: Kembangkan algoritma untuk navigasi otonom menggunakan data yang diperoleh dari sensor.
5. **Implementasi Aerodinamika**: Rancang drone dengan mempertimbangkan efek tanah untuk meningkatkan efisiensi terbang.
6. **Uji Coba Lapangan**: Lakukan uji coba di lingkungan nyata untuk menguji performa sistem.

### 3.2. Diagram Alir Proses

```plaintext
+-------------------+
| Pemilihan Sensor  |
+-------------------+
          |
          v
+-------------------+
| Integrasi Sensor  |
+-------------------+
          |
          v
+-------------------+
| Pengujian &       |
| Kalibrasi         |
+-------------------+
          |
          v
+-------------------+
| Pengembangan       |
| Algoritma         |
+-------------------+
          |
          v
+-------------------+
| Implementasi      |
| Aerodinamika      |
+-------------------+
          |
          v
+-------------------+
| Uji Coba Lapangan |
+-------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan kita memiliki drone dengan spesifikasi berikut:
- Densitas udara ($\rho$): 1.225 kg/m³
- Kecepatan drone ($V$): 5 m/s
- Area sayap ($A$): 0.1 m²
- Koefisien gaya angkat ($C_L$): 1.2

### 4.2. Perhitungan Gaya Angkat

Menggunakan rumus gaya angkat:

$$
L = C_L \cdot \frac{1}{2} \rho V^2 A
$$

Substitusi nilai:

$$
L = 1.2 \cdot \frac{1}{2} \cdot 1.225 \cdot (5)^2 \cdot 0.1
$$

$$
L = 1.2 \cdot 0.5 \cdot 1.225 \cdot 25 \cdot 0.1
$$

$$
L = 1.2 \cdot 0.5 \cdot 1.225 \cdot 2.5
$$

$$
L = 1.2 \cdot 1.53125 = 1.8375 \text{ N}
$$

### 4.3. Interpretasi Hasil

Gaya angkat yang dihasilkan oleh drone adalah 1.8375 N. Ini menunjukkan bahwa drone mampu terbang dengan stabil pada kecepatan 5 m/s dan area sayap yang diberikan. Jika gaya angkat ini lebih besar dari berat drone, maka drone dapat terbang dengan baik.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penggunaan drone otonom dalam inventarisasi gudang tidak hanya terbatas pada sektor logistik, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti pertanian presisi, pemantauan lingkungan, dan pengiriman barang. Dalam konteks manajemen biaya, penggunaan drone dapat mengurangi biaya operasional dan meningkatkan efisiensi, yang sangat penting dalam persaingan pasar yang ketat.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti ketergantungan pada kondisi lingkungan dan kebutuhan akan infrastruktur yang mendukung. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan algoritma yang lebih canggih untuk navigasi dan penghindaran rintangan, serta peningkatan teknologi sensor untuk meningkatkan akurasi dan keandalan sistem.

Dengan mengikuti standar ISO 21384 dan pedoman dari Loianno et al. (2023) serta Floreano & Wood, industri dapat memastikan bahwa implementasi teknologi drone ini memenuhi kriteria keselamatan dan efisiensi yang diperlukan untuk operasional yang sukses.