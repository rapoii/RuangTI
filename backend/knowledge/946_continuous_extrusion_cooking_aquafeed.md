# 946 — Optimasi Energi Mekanik Spesifik dalam Ekstrusi Makanan dan Pakan Akuakultur

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Twin-Screw Food and Aquafeed Extrusion Cooking: Specific Mechanical Energy (SME) Optimization, Starch Gelatinization Extent, Die Swell Rheology, and Sinking/Floating Pellet Control  
**Standar & Referensi Utama:** Guy (Extrusion Cooking: Technologies and Applications, Woodhead Publishing); Harper (Extrusion of Foods, CRC Press); ISO 17715

---

## 1. Pendahuluan dan Konteks Industri

Ekstrusi makanan dan pakan akuakultur merupakan proses penting dalam industri makanan modern, yang bertujuan untuk meningkatkan kualitas produk dan efisiensi produksi. Proses ini melibatkan pemanasan, pengadukan, dan pembentukan bahan baku melalui penggunaan mesin ekstruder, khususnya twin-screw extruder. Dalam konteks industri, optimasi energi mekanik spesifik (Specific Mechanical Energy, SME) menjadi krusial untuk mengurangi biaya operasional dan meningkatkan produktivitas. 

Tantangan utama yang dihadapi dalam proses ekstrusi adalah pengendalian gelatinisasi pati, rheologi die swell, serta kontrol pellet yang tenggelam atau mengapung. Gelatinisasi pati yang optimal diperlukan untuk meningkatkan ketersediaan nutrisi dan tekstur produk akhir. Namun, proses ini juga memerlukan energi yang signifikan, sehingga pemahaman yang mendalam tentang SME dan faktor-faktor yang mempengaruhinya sangat penting. 

Menurut Guy (2022), efisiensi energi dalam proses ekstrusi dapat ditingkatkan dengan memahami interaksi antara parameter proses dan sifat fisik bahan baku. Selain itu, Harper (2022) menekankan bahwa rheologi die swell sangat berpengaruh terhadap bentuk dan ukuran pellet yang dihasilkan, yang pada gilirannya mempengaruhi performa pakan dalam akuakultur. Dengan demikian, penelitian dan pengembangan dalam bidang ini tidak hanya berkontribusi pada efisiensi produksi tetapi juga pada keberlanjutan industri makanan dan pakan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Energi Mekanik Spesifik (SME)

Energi mekanik spesifik (SME) didefinisikan sebagai energi yang digunakan per unit massa bahan yang diproses. SME dapat dihitung dengan rumus berikut:

$$
SME = \frac{P}{\dot{m}}
$$

di mana:
- \( P \) = daya yang digunakan (Watt)
- \( \dot{m} \) = laju aliran massa (kg/s)

### 2.2. Gelatinisasi Pati

Gelatinisasi pati merupakan proses di mana pati menyerap air dan membengkak, mengubah strukturnya menjadi bentuk yang lebih mudah dicerna. Derajat gelatinisasi dapat dinyatakan sebagai:

$$
DG = \frac{W_g}{W_t} \times 100\%
$$

di mana:
- \( DG \) = derajat gelatinisasi (%)
- \( W_g \) = berat pati yang ter-gelatinisasi (kg)
- \( W_t \) = total berat pati (kg)

### 2.3. Rheologi Die Swell

Rheologi die swell dapat dijelaskan dengan menggunakan hukum viskositas Newton, di mana laju deformasi (\( \dot{\gamma} \)) berbanding lurus dengan tegangan geser (\( \tau \)):

$$
\tau = \eta \cdot \dot{\gamma}
$$

di mana:
- \( \tau \) = tegangan geser (Pa)
- \( \eta \) = viskositas (Pa.s)
- \( \dot{\gamma} \) = laju deformasi (s\(^{-1}\))

### 2.4. Kontrol Pellet Tenggelam/Mengapung

Kontrol pellet dapat dilakukan dengan memanipulasi densitas dan ukuran pellet. Densitas pellet (\( \rho_p \)) dapat dihitung dengan:

$$
\rho_p = \frac{m_p}{V_p}
$$

di mana:
- \( m_p \) = massa pellet (kg)
- \( V_p \) = volume pellet (m³)

Pellet akan mengapung jika densitas pellet lebih kecil dari densitas air (\( \rho_{water} \approx 1000 \, \text{kg/m}^3 \)).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Persiapan Bahan Baku**: Memastikan kualitas bahan baku yang digunakan, termasuk kadar air dan komposisi kimia.
2. **Pengaturan Parameter Proses**: Menentukan parameter ekstrusi seperti suhu, kecepatan viskositas, dan laju aliran massa.
3. **Pengukuran SME**: Menggunakan alat ukur daya untuk menghitung SME selama proses ekstrusi.
4. **Analisis Gelatinisasi**: Mengambil sampel dan menganalisis derajat gelatinisasi menggunakan metode gravimetri.
5. **Pengujian Rheologi**: Mengukur viskositas dan die swell menggunakan reometer.
6. **Evaluasi Hasil**: Mengamati karakteristik pellet dan melakukan pengujian untuk menentukan apakah pellet tenggelam atau mengapung.

### 3.2. Diagram Alir Proses

```plaintext
[Persiapan Bahan Baku] --> [Pengaturan Parameter Proses] --> [Ekstrusi] --> [Pengukuran SME]
       |                                               |
       |                                               v
       |------------------------------------> [Analisis Gelatinisasi]
       |
       v
[Pengujian Rheologi] --> [Evaluasi Hasil] --> [Kontrol Pellet]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan kita memiliki data berikut untuk proses ekstrusi pakan akuakultur:

- Daya ekstruder (\( P \)): 1500 W
- Laju aliran massa (\( \dot{m} \)): 0.5 kg/s
- Berat pati total (\( W_t \)): 2 kg
- Berat pati yang ter-gelatinisasi (\( W_g \)): 1.5 kg

### 4.2. Perhitungan SME

Menggunakan rumus SME:

$$
SME = \frac{P}{\dot{m}} = \frac{1500 \, \text{W}}{0.5 \, \text{kg/s}} = 3000 \, \text{J/kg}
$$

### 4.3. Perhitungan Derajat Gelatinisasi

Menggunakan rumus derajat gelatinisasi:

$$
DG = \frac{W_g}{W_t} \times 100\% = \frac{1.5 \, \text{kg}}{2 \, \text{kg}} \times 100\% = 75\%
$$

### 4.4. Interpretasi Hasil

Hasil SME sebesar 3000 J/kg menunjukkan bahwa proses ekstrusi ini efisien dalam penggunaan energi. Derajat gelatinisasi sebesar 75% menunjukkan bahwa sebagian besar pati telah ter-gelatinisasi, yang penting untuk meningkatkan kualitas pakan. 

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Proses ekstrusi tidak hanya terbatas pada industri makanan dan pakan, tetapi juga memiliki aplikasi dalam bidang farmasi dan bioteknologi. Dalam konteks rantai pasok, optimasi SME dapat mengurangi biaya dan meningkatkan keberlanjutan dengan meminimalkan limbah energi. 

Dari perspektif K3 dan ESG, pengurangan energi dalam proses ekstrusi berkontribusi pada pengurangan jejak karbon. Penelitian masa depan dapat berfokus pada pengembangan teknologi ekstrusi yang lebih efisien dan ramah lingkungan, serta penerapan otomatisasi dan kontrol cerdas untuk meningkatkan konsistensi produk dan efisiensi operasional.

Dengan demikian, pemahaman yang mendalam tentang optimasi SME, gelatinisasi pati, rheologi die swell, dan kontrol pellet sangat penting untuk kemajuan industri makanan dan pakan akuakultur yang berkelanjutan.