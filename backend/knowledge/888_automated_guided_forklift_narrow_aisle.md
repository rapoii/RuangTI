# 888 — Vision-Guided Very Narrow Aisle (VNA) Automated High-Bay Forklifts: Laser Navigation Triangulation, Pallet Pocket 3D Pose Detection, and Mast Oscillation Damping Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Vision-Guided Very Narrow Aisle (VNA) Automated High-Bay Forklifts: Laser Navigation Triangulation, Pallet Pocket 3D Pose Detection, and Mast Oscillation Damping Control  
**Standar & Referensi Utama:** ISO 3691-4; FEM 9.831 (Storage and Retrieval Machines); Industrial Robot Handbook  

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, otomatisasi dan efisiensi operasional menjadi kunci untuk meningkatkan daya saing perusahaan. Sistem penyimpanan dan pengambilan otomatis (Automated Storage and Retrieval Systems, AS/RS) seperti Very Narrow Aisle (VNA) forklifts menjadi solusi yang semakin populer dalam manajemen rantai pasok dan logistik. VNA forklifts dirancang untuk beroperasi di lorong yang sangat sempit, memungkinkan penggunaan ruang penyimpanan yang lebih efisien. Namun, tantangan dalam implementasi teknologi ini meliputi navigasi yang presisi, deteksi posisi yang akurat, dan pengendalian getaran mast yang optimal.

Teknologi navigasi laser dan sistem penglihatan komputer menjadi sangat penting dalam meningkatkan akurasi dan efisiensi VNA forklifts. Laser navigation triangulation memungkinkan forklift untuk menentukan posisinya dengan akurasi tinggi, sementara 3D pose detection dari pallet pocket memastikan bahwa forklift dapat mengambil dan menempatkan beban dengan tepat. Selain itu, pengendalian osilasi mast menjadi krusial untuk menjaga stabilitas dan keamanan selama operasi.

Dalam konteks ini, penting untuk memahami bagaimana integrasi teknologi ini dapat mengurangi biaya operasional, meningkatkan throughput, dan meminimalkan risiko kecelakaan kerja. Oleh karena itu, penelitian dan pengembangan dalam bidang ini harus terus didorong untuk memenuhi tuntutan industri yang semakin kompleks dan dinamis (Zhang et al., 2023; ISO 3691-4).

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Laser Navigation Triangulation

Laser navigation triangulation adalah metode yang digunakan untuk menentukan posisi forklift dengan memanfaatkan prinsip geometri. Dalam sistem ini, dua atau lebih laser dipancarkan dari titik tetap, dan sudut yang dibentuk oleh sinar laser yang dipantulkan digunakan untuk menghitung posisi forklift.

Misalkan:
- $d_1$: jarak dari titik tetap ke titik pantul laser pertama
- $d_2$: jarak dari titik tetap ke titik pantul laser kedua
- $\theta_1$: sudut antara sinar laser pertama dan garis referensi
- $\theta_2$: sudut antara sinar laser kedua dan garis referensi

Posisi forklift ($x, y$) dapat dihitung menggunakan rumus berikut:

$$
x = \frac{d_1 \cdot \sin(\theta_2)}{\sin(\theta_1 + \theta_2)}
$$

$$
y = \frac{d_1 \cdot \sin(\theta_1)}{\sin(\theta_1 + \theta_2)}
$$

### 2.2. Pallet Pocket 3D Pose Detection

Deteksi pose 3D dari pallet pocket menggunakan teknologi visi komputer dan algoritma pemrosesan citra. Misalkan kita memiliki citra 2D dari pallet pocket, kita dapat menggunakan transformasi perspektif untuk mendapatkan koordinat 3D.

Misalkan:
- $P_{2D} = (u, v)$ adalah koordinat 2D dari citra
- $Z$ adalah kedalaman dari pallet pocket

Koordinat 3D ($X, Y, Z$) dapat dihitung dengan rumus:

$$
X = \frac{(u - c_x) \cdot Z}{f_x}
$$

$$
Y = \frac{(v - c_y) \cdot Z}{f_y}
$$

di mana $c_x$ dan $c_y$ adalah pusat citra, dan $f_x$ dan $f_y$ adalah panjang fokus kamera.

### 2.3. Mast Oscillation Damping Control

Pengendalian osilasi mast diperlukan untuk menjaga stabilitas forklift saat bergerak. Model matematis dari osilasi mast dapat dinyatakan dengan persamaan diferensial:

$$
m \frac{d^2x}{dt^2} + b \frac{dx}{dt} + kx = 0
$$

di mana:
- $m$: massa mast
- $b$: koefisien redaman
- $k$: konstanta pegas

Solusi dari persamaan ini memberikan informasi tentang perilaku osilasi sistem dan dapat digunakan untuk merancang kontroler yang efektif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Analisis Kebutuhan**: Identifikasi kebutuhan operasional dan spesifikasi teknis dari sistem VNA forklift.
2. **Desain Sistem**: Rancang sistem navigasi laser dan deteksi pose 3D dengan mempertimbangkan parameter geometris dan optik.
3. **Pengembangan Algoritma**: Kembangkan algoritma untuk pemrosesan citra dan kontrol osilasi mast.
4. **Pengujian Prototipe**: Uji prototipe untuk memastikan akurasi navigasi dan stabilitas.
5. **Implementasi**: Terapkan sistem di lingkungan nyata dan lakukan pelatihan untuk operator.

### 3.2. Diagram Alir Proses

```
[Analisis Kebutuhan] --> [Desain Sistem] --> [Pengembangan Algoritma] --> [Pengujian Prototipe] --> [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki VNA forklift yang beroperasi di gudang dengan dimensi lorong 1.2 m dan tinggi rak 10 m. Forklift ini menggunakan dua laser untuk navigasi.

#### Parameter Input:
- Jarak laser ($d_1 = 5 \text{ m}$, $d_2 = 5 \text{ m}$)
- Sudut laser ($\theta_1 = 30^\circ$, $\theta_2 = 45^\circ$)

#### Langkah Perhitungan:

1. Hitung posisi forklift menggunakan rumus navigasi triangulasi:

$$
x = \frac{5 \cdot \sin(45^\circ)}{\sin(30^\circ + 45^\circ)} = \frac{5 \cdot 0.7071}{0.9659} \approx 3.65 \text{ m}
$$

$$
y = \frac{5 \cdot \sin(30^\circ)}{\sin(30^\circ + 45^\circ)} = \frac{5 \cdot 0.5}{0.9659} \approx 2.58 \text{ m}
$$

2. Hitung posisi 3D dari pallet pocket dengan kedalaman $Z = 1.5 \text{ m}$, pusat citra $(c_x, c_y) = (320, 240)$, dan panjang fokus $(f_x, f_y) = (800, 800)$:

Misalkan $P_{2D} = (350, 260)$:

$$
X = \frac{(350 - 320) \cdot 1.5}{800} = \frac{30 \cdot 1.5}{800} \approx 0.05625 \text{ m}
$$

$$
Y = \frac{(260 - 240) \cdot 1.5}{800} = \frac{20 \cdot 1.5}{800} \approx 0.0375 \text{ m}
$$

#### Interpretasi Hasil

Dari perhitungan di atas, posisi forklift berada pada koordinat $(3.65, 2.58)$ m, dan posisi pallet pocket pada $(0.05625, 0.0375, 1.5)$ m. Hasil ini menunjukkan bahwa forklift dapat beroperasi dengan akurasi tinggi dalam mengambil dan menempatkan pallet.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Integrasi teknologi VNA forklifts dengan sistem otomasi lainnya seperti manajemen inventaris dan sistem ERP dapat meningkatkan efisiensi rantai pasok secara keseluruhan. Dalam konteks K3 dan ESG, penggunaan VNA forklifts yang otomatis dapat mengurangi risiko kecelakaan kerja dan meningkatkan keberlanjutan operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada kondisi lingkungan dan akurasi sensor. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih robust dan adaptif terhadap berbagai kondisi operasional.

Arah riset masa depan dapat mencakup pengembangan sistem yang lebih cerdas dengan menggunakan kecerdasan buatan untuk meningkatkan kemampuan deteksi dan navigasi, serta pengembangan standar baru yang dapat mengakomodasi teknologi yang terus berkembang dalam industri otomasi.

---

**Referensi:**
- ISO 3691-4: Automated Guided Vehicles - Part 4: Safety requirements for automated guided vehicles.
- FEM 9.831: Storage and Retrieval Machines.
- Zhang, Y., et al. (2023). "Advancements in Automated Forklift Systems: A Review." *Industrial Robot Handbook*.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
