# 811 — Cryogenic Minimum Quantity Lubrication (Cryo-MQL) Hybrid Machining: Supercritical CO2 + Liquid Nitrogen Spray Thermodynamics, Eco-Efficiency LCA, and Chip Breakability

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Cryogenic Minimum Quantity Lubrication (Cryo-MQL) Hybrid Machining: Supercritical CO2 + Liquid Nitrogen Spray Thermodynamics, Eco-Efficiency LCA, and Chip Breakability  
**Standar & Referensi Utama:** Pereira et al. (2023, J. Clean. Prod.); ISO 14044; Sharma et al. (2024, CIRP J. Manuf. Sci. Technol.)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tantangan yang signifikan dalam hal efisiensi operasional, keberlanjutan, dan pengurangan dampak lingkungan. Dalam konteks ini, pemotongan bahan dengan menggunakan teknik pelumasan yang efisien dan ramah lingkungan menjadi sangat penting. Cryogenic Minimum Quantity Lubrication (Cryo-MQL) adalah metode inovatif yang menggabungkan pelumasan dengan nitrogen cair dan karbon dioksida superkritis untuk meningkatkan efisiensi proses pemotongan. Metode ini tidak hanya mengurangi penggunaan pelumas konvensional tetapi juga meningkatkan kualitas permukaan dan umur alat potong.

Dalam industri, tantangan utama yang dihadapi adalah pengelolaan limbah dan emisi yang dihasilkan selama proses pemotongan. Menurut Pereira et al. (2023), penggunaan pelumas konvensional sering kali menghasilkan limbah yang berbahaya dan memerlukan pengolahan yang rumit. Oleh karena itu, penerapan teknologi Cryo-MQL dapat menjadi solusi untuk mengurangi dampak lingkungan dan meningkatkan efisiensi energi. 

Lebih lanjut, dalam konteks rantai pasok, efisiensi biaya dan waktu sangat penting. Dengan mengurangi jumlah pelumas yang digunakan dan meningkatkan kecepatan pemotongan, Cryo-MQL dapat membantu perusahaan mengurangi biaya operasional dan meningkatkan produktivitas. Namun, penerapan teknologi ini juga menghadapi tantangan, seperti kebutuhan untuk memahami termodinamika dari campuran pelumas dan dampaknya terhadap sifat chip yang dihasilkan.

## 2. Landasan Teori & Formulasi Matematis

Cryo-MQL melibatkan penggunaan nitrogen cair dan karbon dioksida superkritis sebagai media pelumas. Proses ini dapat dijelaskan melalui beberapa parameter termodinamika dan mekanika fluida. 

### 2.1. Termodinamika Supercritical CO2

Karbon dioksida superkritis memiliki sifat unik yang memungkinkan untuk berfungsi sebagai pelumas yang efisien. Dalam kondisi superkritis, CO2 memiliki densitas yang tinggi dan viskositas yang rendah, yang membuatnya efektif dalam mengurangi gesekan dan panas selama proses pemotongan.

Persamaan keadaan untuk CO2 dalam kondisi superkritis dapat dinyatakan dengan persamaan van der Waals:

$$
[P + a \left( \frac{n}{V_m} \right)^2] (V_m - n b) = nRT
$$

di mana:
- \( P \) = tekanan
- \( V_m \) = volume molar
- \( n \) = jumlah mol
- \( R \) = konstanta gas
- \( T \) = suhu
- \( a \) dan \( b \) = parameter van der Waals.

### 2.2. Pelumasan dan Koefisien Gesekan

Koefisien gesekan (\( \mu \)) dapat dinyatakan sebagai fungsi dari tekanan (\( P \)) dan viskositas (\( \eta \)):

$$
\mu = \frac{F}{N} = \frac{\eta}{d}
$$

di mana:
- \( F \) = gaya gesekan
- \( N \) = gaya normal
- \( d \) = jarak antar permukaan.

### 2.3. Pembuktian Chip Breakability

Chip breakability dapat dianalisis dengan menggunakan model mekanika pemotongan, di mana gaya pemotongan (\( F_c \)) dapat dinyatakan sebagai:

$$
F_c = k_c \cdot A
$$

di mana:
- \( k_c \) = koefisien pemotongan
- \( A \) = area pemotongan.

Dengan menggunakan parameter ini, kita dapat menghitung energi yang dibutuhkan untuk memecah chip dan mengoptimalkan proses pemotongan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Cryo-MQL dalam proses pemotongan melibatkan beberapa langkah sistematis:

1. **Persiapan Alat dan Bahan**: Memastikan alat potong dalam kondisi baik dan memilih bahan yang sesuai untuk pemotongan.
2. **Pengaturan Sistem Cryo-MQL**: Mengatur sistem penyemprotan nitrogen cair dan CO2 superkritis. 
3. **Pengaturan Parameter Proses**: Menentukan parameter pemotongan seperti kecepatan, umpan, dan tekanan.
4. **Pelaksanaan Pemotongan**: Melakukan proses pemotongan dengan pengawasan ketat terhadap parameter yang telah ditentukan.
5. **Pengukuran dan Evaluasi**: Mengukur hasil pemotongan, kualitas chip, dan efisiensi pelumasan.
6. **Analisis Lingkungan dan Ekonomi**: Menggunakan LCA untuk mengevaluasi dampak lingkungan dari proses yang diterapkan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Persiapan Alat] --> [Pengaturan Sistem Cryo-MQL] --> [Pengaturan Parameter Proses] --> [Pelaksanaan Pemotongan] --> [Pengukuran dan Evaluasi] --> [Analisis Lingkungan dan Ekonomi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan kita memiliki parameter berikut untuk proses pemotongan:

- Kecepatan pemotongan (\( v \)) = 100 m/min
- Umpan (\( f \)) = 0.1 mm/rev
- Diameter alat potong (\( D \)) = 10 mm
- Koefisien pemotongan (\( k_c \)) = 200 N/mm²
- Area pemotongan (\( A \)) = \( \frac{\pi D f}{1000} \)

### 4.2. Perhitungan

1. Hitung area pemotongan:

$$
A = \frac{\pi \cdot 10 \cdot 0.1}{1000} = 0.00314 \, \text{mm}^2
$$

2. Hitung gaya pemotongan:

$$
F_c = k_c \cdot A = 200 \cdot 0.00314 = 0.628 \, \text{N}
$$

3. Hitung energi yang dibutuhkan untuk memecah chip:

Energi (\( E \)) dapat dihitung dengan rumus:

$$
E = F_c \cdot d
$$

di mana \( d \) adalah jarak yang ditempuh chip. Misalkan \( d = 1 \, \text{m} \):

$$
E = 0.628 \cdot 1 = 0.628 \, \text{J}
$$

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa energi yang dibutuhkan untuk memecah chip adalah 0.628 J. Ini menunjukkan efisiensi dalam proses pemotongan dengan menggunakan Cryo-MQL, yang dapat mengurangi konsumsi energi dan meningkatkan produktivitas.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Cryo-MQL tidak hanya relevan dalam konteks pemotongan logam, tetapi juga dapat diterapkan dalam berbagai sektor seperti otomotif, aerospace, dan elektronik. Dalam konteks rantai pasok, penerapan teknologi ini dapat mengurangi biaya dan waktu produksi, serta meningkatkan keberlanjutan.

Namun, ada beberapa batasan dalam metodologi ini, termasuk kebutuhan untuk memahami interaksi antara pelumas dan material yang dipotong. Penelitian lebih lanjut diperlukan untuk mengeksplorasi potensi aplikasi Cryo-MQL dalam material baru dan proses pemotongan yang lebih kompleks.

Arah riset masa depan dapat berfokus pada pengembangan sistem pelumasan yang lebih efisien, integrasi teknologi otomatisasi, dan penerapan prinsip-prinsip keberlanjutan dalam seluruh rantai pasok. Dengan demikian, Cryo-MQL dapat menjadi solusi yang berkelanjutan dan efisien untuk tantangan yang dihadapi oleh industri manufaktur modern.