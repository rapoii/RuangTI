# 1037 — Strategi Koordinasi Swarm Robot untuk Tugas Bin-Picking dengan Menggunakan Metode Game Theory

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Strategi Koordinasi Swarm Robot untuk Tugas Bin-Picking dengan Menggunakan Metode Game Theory  
**Standar & Referensi Utama:** F. Patel, 'Game Theory Strategies for Swarm Robot Coordination', Journal of Intelligent & Robotic Systems, 2025; ISO 13482:2014

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, otomatisasi dan penggunaan robotik semakin mendominasi proses manufaktur dan logistik. Salah satu aplikasi penting dalam konteks ini adalah tugas bin-picking, di mana robot harus mengambil objek dari dalam wadah yang tidak teratur. Tugas ini menjadi semakin kompleks seiring dengan meningkatnya variasi dan jumlah objek yang harus diambil, serta kebutuhan untuk meningkatkan efisiensi dan mengurangi biaya operasional.

Koordinasi antara robot dalam swarm (kelompok robot) menjadi kunci untuk menyelesaikan tugas bin-picking secara efektif. Dalam konteks ini, penerapan teori permainan (game theory) menawarkan pendekatan yang menarik untuk mengoptimalkan interaksi antar robot. Teori permainan memungkinkan robot untuk beradaptasi dan membuat keputusan strategis berdasarkan perilaku robot lain, sehingga meningkatkan efisiensi pengambilan objek.

Namun, tantangan yang dihadapi dalam implementasi strategi ini mencakup kebutuhan untuk mengurangi waktu siklus, meminimalkan kolisi antar robot, dan memastikan penggunaan sumber daya yang optimal. Dalam konteks industri, kegagalan dalam mengimplementasikan strategi yang efektif dapat mengakibatkan biaya tinggi dan penurunan produktivitas. Oleh karena itu, penelitian ini bertujuan untuk mengeksplorasi dan mengembangkan strategi koordinasi menggunakan metode game theory yang dapat diterapkan dalam konteks bin-picking.

## 2. Landasan Teori & Formulasi Matematis

Teori permainan menyediakan kerangka kerja untuk menganalisis interaksi strategis antara agen. Dalam konteks swarm robot, kita dapat menggunakan model permainan non-kooperatif untuk menggambarkan interaksi antara robot yang bersaing untuk mengambil objek.

### Notasi dan Definisi Variabel

- $N$: Jumlah robot dalam swarm.
- $O$: Jumlah objek yang harus diambil.
- $C_{ij}$: Biaya kolisi antara robot $i$ dan robot $j$.
- $T_i$: Waktu yang dibutuhkan robot $i$ untuk mengambil objek.
- $R_i$: Reward yang diperoleh robot $i$ setelah berhasil mengambil objek.

### Model Permainan

Setiap robot dapat memilih strategi $S_i$ untuk mengambil objek. Fungsi utilitas untuk robot $i$ dapat dinyatakan sebagai:

$$
U_i(S_i, S_{-i}) = R_i - \sum_{j \neq i} C_{ij}
$$

di mana $S_{-i}$ adalah strategi yang dipilih oleh robot lain. Untuk mencapai keseimbangan, kita mencari Nash Equilibrium, di mana tidak ada robot yang dapat meningkatkan utilitasnya dengan mengubah strateginya secara sepihak.

### Derivasi Matematis

Untuk menemukan Nash Equilibrium, kita perlu menyelesaikan sistem persamaan berikut:

$$
\frac{\partial U_i}{\partial S_i} = 0 \quad \forall i \in N
$$

Dengan menyelesaikan persamaan ini, kita dapat menentukan strategi optimal untuk setiap robot dalam konteks bin-picking.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi strategi koordinasi swarm robot untuk tugas bin-picking dapat dilakukan melalui langkah-langkah berikut:

1. **Analisis Lingkungan**: Mengidentifikasi objek dan posisi dalam wadah.
2. **Penentuan Strategi Awal**: Menggunakan model permainan untuk menentukan strategi awal setiap robot.
3. **Simulasi Interaksi**: Melakukan simulasi untuk menganalisis interaksi antar robot dan dampaknya terhadap waktu pengambilan.
4. **Penyesuaian Strategi**: Mengadaptasi strategi berdasarkan hasil simulasi untuk mencapai Nash Equilibrium.
5. **Implementasi Lapangan**: Mengimplementasikan strategi yang telah disempurnakan dalam lingkungan nyata.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Analisis Lingkungan] --> [Penentuan Strategi Awal] --> [Simulasi Interaksi] --> [Penyesuaian Strategi] --> [Implementasi Lapangan]
```

Standar ISO 13482:2014 memberikan panduan untuk keselamatan dan interoperabilitas robot, yang harus dipatuhi selama implementasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan kita memiliki 3 robot ($N=3$) dan 5 objek ($O=5$) yang harus diambil. Biaya kolisi antar robot ditentukan sebagai berikut:

- $C_{12} = 2$, $C_{13} = 3$, $C_{23} = 1$

Waktu yang dibutuhkan untuk mengambil objek oleh setiap robot adalah:

- $T_1 = 5$, $T_2 = 4$, $T_3 = 6$

Reward yang diperoleh setelah mengambil objek adalah:

- $R_1 = 10$, $R_2 = 8$, $R_3 = 12$

### Perhitungan Utilitas

Mari kita hitung utilitas untuk setiap robot dengan strategi awal yang dipilih secara acak:

- Robot 1 memilih $S_1 = \{O_1\}$
- Robot 2 memilih $S_2 = \{O_2\}$
- Robot 3 memilih $S_3 = \{O_3\}$

Utilitas untuk setiap robot dapat dihitung sebagai berikut:

$$
U_1 = R_1 - (C_{12} + C_{13}) = 10 - (2 + 3) = 5
$$

$$
U_2 = R_2 - (C_{12} + C_{23}) = 8 - (2 + 1) = 5
$$

$$
U_3 = R_3 - (C_{13} + C_{23}) = 12 - (3 + 1) = 8
$$

### Interpretasi Hasil

Dalam kondisi ini, robot 1 dan robot 2 memiliki utilitas yang sama, sementara robot 3 memiliki utilitas yang lebih tinggi. Hal ini menunjukkan bahwa strategi yang dipilih perlu disesuaikan untuk meningkatkan utilitas robot 1 dan 2, sehingga mencapai keseimbangan yang lebih baik.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Strategi koordinasi swarm robot yang menggunakan metode game theory dapat diterapkan tidak hanya dalam konteks bin-picking, tetapi juga dalam berbagai disiplin lain seperti manajemen rantai pasok, otomasi, dan manajemen biaya. Misalnya, dalam manajemen rantai pasok, robot dapat berkolaborasi untuk mengoptimalkan pengiriman barang dengan meminimalkan waktu dan biaya.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kompleksitas perhitungan dan kebutuhan untuk data yang akurat mengenai biaya dan waktu. Arah riset masa depan dapat berfokus pada pengembangan algoritma yang lebih efisien dan adaptif, serta integrasi dengan teknologi kecerdasan buatan untuk meningkatkan kemampuan pengambilan keputusan robot.

Dengan demikian, penerapan strategi koordinasi swarm robot yang efektif tidak hanya dapat meningkatkan efisiensi operasional dalam industri, tetapi juga memberikan kontribusi signifikan terhadap inovasi dalam teknologi robotik dan otomatisasi.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
