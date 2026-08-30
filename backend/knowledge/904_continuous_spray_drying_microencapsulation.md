# 904 — Dinamika Atomisasi Droplet dalam Spray Drying dan Mikroenkapsulasi Bahan Fungsional Sensitif

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Industrial Spray Drying & Microencapsulation of Sensitive Functional Ingredients: Droplet Atomization Dynamics, Drying Air Cocurrent Psychrometry, and Glassy Matrix Yield Retention  
**Standar & Referensi Utama:** Masters (Spray Drying Handbook, 5th Ed., Longman); Mujumdar (Handbook of Industrial Drying, 4th Ed., CRC Press); ISO 22000

---

## 1. Pendahuluan dan Konteks Industri

Spray drying adalah proses yang sangat penting dalam industri makanan, farmasi, dan bahan kimia, di mana bahan cair diubah menjadi serbuk dengan cara menguapkan pelarutnya. Proses ini sangat relevan dalam konteks produksi bahan fungsional sensitif seperti vitamin, probiotik, dan aroma, yang memerlukan perlindungan dari degradasi selama penyimpanan dan penggunaan. Dalam era globalisasi dan persaingan industri yang ketat, efisiensi operasional dan pengendalian kualitas produk menjadi sangat krusial. Tantangan utama dalam spray drying adalah menjaga integritas bahan fungsional selama proses pengeringan, yang sering kali melibatkan kondisi suhu dan tekanan yang ekstrem.

Konteks ini semakin mendesak dengan meningkatnya permintaan konsumen akan produk yang lebih sehat dan alami, yang mendorong produsen untuk mencari metode pengolahan yang lebih efisien dan berkelanjutan. Selain itu, tantangan dalam rantai pasok modern, seperti fluktuasi harga bahan baku dan kebutuhan untuk memenuhi standar keamanan pangan yang ketat, seperti yang ditetapkan oleh ISO 22000, semakin menambah kompleksitas dalam proses manufaktur. Oleh karena itu, pemahaman yang mendalam tentang dinamika atomisasi droplet, psikrometri udara pengering, dan retensi hasil matriks kaca sangat penting untuk meningkatkan efisiensi dan efektivitas proses spray drying.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Dinamika Atomisasi Droplet

Atomisasi adalah proses di mana cairan diubah menjadi droplet kecil. Dalam spray drying, ukuran droplet sangat mempengaruhi laju pengeringan dan kualitas produk akhir. Ukuran droplet dapat dihitung menggunakan rumus berikut:

$$
D = \frac{(6 \cdot V)}{A}
$$

di mana:
- \( D \) = diameter droplet (m)
- \( V \) = volume cairan (m³)
- \( A \) = luas permukaan droplet (m²)

### 2.2. Psikrometri Udara Pengering

Psikrometri adalah studi tentang sifat-sifat udara lembap. Dalam spray drying, penting untuk memahami hubungan antara suhu, kelembapan, dan tekanan. Persamaan dasar yang digunakan adalah:

$$
h = c_p \cdot T + \omega \cdot (h_{fg} + c_{p,w} \cdot T)
$$

di mana:
- \( h \) = entalpi udara (kJ/kg)
- \( c_p \) = kapasitas panas udara (kJ/kg·K)
- \( T \) = suhu (K)
- \( \omega \) = rasio kelembapan (kg air/kg udara kering)
- \( h_{fg} \) = entalpi penguapan (kJ/kg)
- \( c_{p,w} \) = kapasitas panas air (kJ/kg·K)

### 2.3. Retensi Hasil Matriks Kaca

Retensi hasil dalam mikroenkapsulasi dapat dinyatakan dengan persentase hasil sebagai berikut:

$$
Y = \frac{M_f}{M_i} \times 100\%
$$

di mana:
- \( Y \) = persentase hasil
- \( M_f \) = massa produk akhir (g)
- \( M_i \) = massa bahan awal (g)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Persiapan Bahan**: Siapkan bahan fungsional dan pelarut sesuai dengan spesifikasi produk.
2. **Atomisasi**: Gunakan nozzle atomizer untuk menghasilkan droplet dengan ukuran yang diinginkan.
3. **Pengeringan**: Alirkan udara panas ke dalam ruang pengering untuk menguapkan pelarut dari droplet.
4. **Pengumpulan Produk**: Kumpulkan serbuk hasil pengeringan dan lakukan analisis untuk memastikan kualitas.
5. **Pengemasan**: Kemasi produk dalam kondisi yang menjaga stabilitasnya.

### 3.2. Diagram Alir Proses

```
[Persiapan Bahan] --> [Atomisasi] --> [Pengeringan] --> [Pengumpulan Produk] --> [Pengemasan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan kita memiliki parameter berikut untuk proses spray drying:
- Volume cairan: \( V = 0.01 \, \text{m}^3 \)
- Luas permukaan droplet: \( A = 0.005 \, \text{m}^2 \)
- Massa bahan awal: \( M_i = 100 \, \text{g} \)
- Massa produk akhir: \( M_f = 90 \, \text{g} \)

### 4.2. Perhitungan

1. **Diameter Droplet**:
   \[
   D = \frac{(6 \cdot 0.01)}{0.005} = 12 \, \text{m}
   \]

2. **Persentase Hasil**:
   \[
   Y = \frac{90}{100} \times 100\% = 90\%
   \]

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa diameter droplet yang dihasilkan adalah 12 m, yang mungkin terlalu besar untuk aplikasi praktis. Hal ini menunjukkan perlunya optimasi dalam proses atomisasi. Persentase hasil 90% menunjukkan efisiensi yang baik dalam proses mikroenkapsulasi, tetapi perlu diperhatikan bahwa ukuran droplet yang besar dapat mempengaruhi laju pengeringan dan kualitas produk akhir.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Spray drying dan mikroenkapsulasi memiliki aplikasi luas dalam berbagai disiplin ilmu, termasuk manajemen rantai pasok, di mana efisiensi proses dapat mengurangi biaya dan meningkatkan kualitas produk. Dalam konteks otomasi, penggunaan teknologi sensor dan kontrol cerdas dapat meningkatkan akurasi dan konsistensi dalam proses. Selain itu, penerapan prinsip K3 dan ESG dalam proses ini sangat penting untuk memastikan keberlanjutan dan keselamatan.

Batasan metodologi yang ada, seperti ketergantungan pada parameter fisik tertentu dan variasi dalam sifat bahan baku, perlu diatasi melalui penelitian lebih lanjut. Arah riset masa depan dapat mencakup pengembangan teknologi baru untuk atomisasi yang lebih efisien dan pengujian bahan baru yang dapat meningkatkan stabilitas produk akhir.

Dengan demikian, pemahaman yang mendalam tentang dinamika atomisasi droplet, psikrometri, dan retensi hasil matriks kaca akan sangat berkontribusi pada inovasi dan efisiensi dalam industri spray drying dan mikroenkapsulasi.