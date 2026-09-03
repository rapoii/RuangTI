# 1089 — Desain Sistem Integrasi CCUS dengan Teknologi Pemulihan Energi Panas untuk Pabrik Pengolahan Gas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Desain Sistem Integrasi CCUS dengan Teknologi Pemulihan Energi Panas untuk Pabrik Pengolahan Gas  
**Standar & Referensi Utama:** Roberts, J. (2023). 'Integration of CCUS and Waste Heat Recovery', Journal of Environmental Management; ASME JEM 2022.

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, tantangan yang dihadapi oleh pabrik pengolahan gas semakin kompleks, terutama terkait dengan pengurangan emisi karbon dan efisiensi energi. Pabrik-pabrik ini seringkali menghasilkan emisi gas rumah kaca yang signifikan, yang berkontribusi terhadap perubahan iklim global. Oleh karena itu, penerapan teknologi Carbon Capture, Utilization, and Storage (CCUS) menjadi sangat penting. Integrasi teknologi ini dengan sistem pemulihan energi panas dapat memberikan solusi yang efektif untuk mengurangi jejak karbon sambil meningkatkan efisiensi energi.

Sistem pemulihan energi panas (Waste Heat Recovery, WHR) memungkinkan pabrik untuk memanfaatkan energi yang terbuang, yang biasanya dihasilkan selama proses produksi. Dengan memanfaatkan energi ini, pabrik dapat mengurangi konsumsi energi dari sumber eksternal, yang pada gilirannya dapat menurunkan biaya operasional. Namun, tantangan utama dalam implementasi sistem ini adalah kompleksitas desain dan integrasi antara sistem CCUS dan WHR. 

Menurut Roberts (2023), integrasi kedua sistem ini tidak hanya meningkatkan efisiensi energi, tetapi juga dapat mengurangi biaya operasional dan meningkatkan keberlanjutan. Namun, tantangan teknis dan ekonomi dalam penerapan teknologi ini harus diatasi, termasuk kebutuhan untuk investasi awal yang signifikan dan pengembangan infrastruktur yang sesuai. 

Oleh karena itu, penting untuk mengeksplorasi desain sistem yang optimal untuk integrasi CCUS dan WHR, serta memahami implikasi dari penerapan teknologi ini dalam konteks industri pengolahan gas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Dasar CCUS

CCUS adalah proses yang mencakup penangkapan karbon dioksida (CO2) dari sumber emisi, pemanfaatan CO2 untuk aplikasi tertentu, dan penyimpanan CO2 dalam formasi geologis. Proses ini dapat dirumuskan sebagai berikut:

1. **Penangkapan CO2**: 
   $$ CO_2 + H_2O \rightarrow H_2CO_3 $$
   Proses ini melibatkan reaksi kimia di mana CO2 diserap dalam larutan air untuk membentuk asam karbonat.

2. **Pemanfaatan CO2**: 
   $$ CO_2 + R \rightarrow RCOO $$ 
   Di mana R adalah senyawa organik yang dapat bereaksi dengan CO2 untuk membentuk produk baru.

3. **Penyimpanan CO2**: 
   Proses ini melibatkan injeksi CO2 ke dalam formasi geologis yang aman, yang dapat dinyatakan sebagai:
   $$ \Delta P = \frac{Q}{A \cdot L} $$ 
   Di mana $\Delta P$ adalah perubahan tekanan, $Q$ adalah laju aliran CO2, $A$ adalah luas penampang, dan $L$ adalah panjang jalur injeksi.

### 2.2. Teori Dasar Pemulihan Energi Panas

Sistem WHR berfungsi untuk menangkap energi panas yang terbuang dan mengubahnya menjadi energi yang berguna. Rumus dasar untuk efisiensi sistem WHR adalah:

$$ \eta_{WHR} = \frac{Q_{recover}}{Q_{input}} $$

Di mana:
- $\eta_{WHR}$ adalah efisiensi sistem WHR,
- $Q_{recover}$ adalah energi panas yang berhasil dipulihkan,
- $Q_{input}$ adalah total energi panas yang tersedia.

### 2.3. Integrasi CCUS dan WHR

Integrasi kedua sistem ini dapat dinyatakan dengan model matematis yang menggabungkan efisiensi pemulihan energi dengan laju penangkapan CO2:

$$ \eta_{total} = \eta_{WHR} \cdot \eta_{CCUS} $$

Di mana $\eta_{CCUS}$ adalah efisiensi sistem CCUS dalam menangkap CO2. 

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Kelayakan**: Melakukan studi kelayakan untuk menilai potensi pengurangan emisi dan efisiensi energi.
2. **Desain Sistem**: Mengembangkan desain sistem integrasi CCUS dan WHR dengan mempertimbangkan parameter teknis dan ekonomi.
3. **Pengujian Prototipe**: Membangun prototipe untuk menguji integrasi sistem dalam skala kecil.
4. **Implementasi**: Melakukan implementasi sistem di pabrik dengan pengawasan ketat terhadap kinerja.
5. **Monitoring dan Evaluasi**: Mengembangkan sistem monitoring untuk mengevaluasi kinerja sistem secara berkelanjutan.

### 3.2. Diagram Alir Proses

Diagram alir proses integrasi CCUS dan WHR dapat digambarkan sebagai berikut:

```
[Proses Produksi] → [Energi Panas Terbuang] → [Sistem WHR] → [Energi Berguna]
                          ↓
                      [Sistem CCUS]
                          ↓
                     [Penyimpanan CO2]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan sebuah pabrik pengolahan gas memiliki parameter sebagai berikut:
- Energi panas terbuang: $Q_{input} = 5000 \, kW$
- Efisiensi WHR: $\eta_{WHR} = 0.3$
- Efisiensi CCUS: $\eta_{CCUS} = 0.85$

### 4.2. Perhitungan

1. **Energi yang dipulihkan oleh WHR**:
   $$ Q_{recover} = \eta_{WHR} \cdot Q_{input} $$
   $$ Q_{recover} = 0.3 \cdot 5000 \, kW = 1500 \, kW $$

2. **Total efisiensi sistem**:
   $$ \eta_{total} = \eta_{WHR} \cdot \eta_{CCUS} $$
   $$ \eta_{total} = 0.3 \cdot 0.85 = 0.255 $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, pabrik dapat memulihkan 1500 kW energi panas yang terbuang, dan total efisiensi sistem integrasi CCUS dan WHR adalah 25.5%. Ini menunjukkan bahwa meskipun ada potensi pemulihan energi yang signifikan, efisiensi total sistem masih perlu ditingkatkan untuk mencapai tujuan keberlanjutan yang lebih baik.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Integrasi CCUS dan WHR tidak hanya relevan dalam konteks industri pengolahan gas, tetapi juga dapat diterapkan dalam sektor lain seperti pembangkit listrik, industri kimia, dan manufaktur. Dalam konteks rantai pasok, penerapan teknologi ini dapat mengurangi biaya energi dan meningkatkan keberlanjutan, yang penting untuk memenuhi standar ESG (Environmental, Social, Governance).

Namun, terdapat batasan dalam metodologi yang perlu diperhatikan, seperti kebutuhan untuk investasi awal yang tinggi dan tantangan teknis dalam desain sistem. Oleh karena itu, riset masa depan harus fokus pada pengembangan teknologi yang lebih efisien dan ekonomis, serta kebijakan yang mendukung penerapan teknologi ini secara luas.

Dengan demikian, desain sistem integrasi CCUS dengan teknologi pemulihan energi panas merupakan langkah penting menuju industri yang lebih berkelanjutan dan efisien. Penelitian lebih lanjut dan kolaborasi lintas sektor akan menjadi kunci dalam mencapai tujuan ini.