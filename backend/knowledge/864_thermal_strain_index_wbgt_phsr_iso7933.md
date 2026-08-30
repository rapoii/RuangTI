# 864 — Model Stres Panas Pekerjaan di Pabrik Pengecoran Berat: Model Prediksi Stres Panas (PHS), Profiling Suhu Globe Basah (WBGT), dan Penentuan Siklus Kerja-Istirahat Metabolik

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Occupational Heat Stress Modeling in Heavy Foundries: Predicted Heat Strain (PHS) Model (ISO 7933), Wet Bulb Globe Temperature (WBGT) Profiling, and Metabolic Work-Rest Cycle Sizing  
**Standar & Referensi Utama:** ISO 7933:2023; ISO 7243; ACGIH TLVs for Heat Stress; Parsons (Human Thermal Environments, CRC Press)

---

## 1. Pendahuluan dan Konteks Industri

Di dalam industri pengecoran berat, pekerja sering terpapar pada kondisi suhu tinggi yang dapat menyebabkan stres panas. Stres panas merupakan masalah kesehatan yang signifikan, yang dapat mengakibatkan penurunan produktivitas, peningkatan risiko kecelakaan kerja, dan bahkan kematian. Menurut ACGIH (2022), paparan suhu tinggi dapat berakibat fatal jika tidak dikelola dengan baik. Oleh karena itu, penting bagi manajer dan insinyur untuk memahami dan menerapkan model-model yang dapat memprediksi stres panas, seperti yang diatur dalam ISO 7933:2023.

Dalam konteks ini, penggunaan model Predicted Heat Strain (PHS) menjadi sangat relevan. Model ini memungkinkan perhitungan tingkat stres panas yang dialami oleh pekerja berdasarkan faktor lingkungan dan aktivitas fisik. Selain itu, profil suhu globe basah (WBGT) juga digunakan untuk mengevaluasi kondisi termal yang dihadapi pekerja. Dengan memahami interaksi antara suhu, kelembapan, dan aktivitas fisik, perusahaan dapat merancang siklus kerja-istirahat yang optimal untuk meminimalkan risiko kesehatan.

Tantangan yang dihadapi dalam industri pengecoran berat mencakup tidak hanya pengelolaan suhu, tetapi juga integrasi sistem manajemen kesehatan dan keselamatan kerja (K3) yang efektif. Hal ini mencakup pelatihan pekerja, pemantauan kondisi lingkungan, dan penerapan teknologi untuk menciptakan lingkungan kerja yang lebih aman. Oleh karena itu, pemodelan stres panas menjadi bagian integral dari strategi manajemen risiko di industri ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Predicted Heat Strain (PHS)

Model PHS dirumuskan berdasarkan keseimbangan energi tubuh manusia. Energi yang masuk ke dalam tubuh ($Q_{in}$) harus seimbang dengan energi yang keluar ($Q_{out}$). Persamaan keseimbangan energi dapat dinyatakan sebagai:

$$
Q_{in} - Q_{out} = \Delta Q
$$

Di mana:
- $Q_{in}$ adalah energi yang diterima tubuh (metabolisme + radiasi + konduksi + konveksi + evaporasi),
- $Q_{out}$ adalah energi yang hilang dari tubuh (melalui konduksi, konveksi, radiasi, dan evaporasi),
- $\Delta Q$ adalah perubahan energi dalam tubuh.

### 2.2. Komponen Energi

Energi yang diterima tubuh dapat dirumuskan sebagai:

$$
Q_{in} = M \cdot C_{p} \cdot \Delta T + Q_{solar} + Q_{conv} + Q_{cond} + Q_{evap}
$$

Di mana:
- $M$ adalah laju metabolisme (W),
- $C_{p}$ adalah kapasitas panas spesifik tubuh (J/kg·K),
- $\Delta T$ adalah perubahan suhu tubuh (K),
- $Q_{solar}$ adalah energi radiasi matahari yang diterima (W),
- $Q_{conv}$ adalah energi konveksi (W),
- $Q_{cond}$ adalah energi konduksi (W),
- $Q_{evap}$ adalah energi evaporasi (W).

### 2.3. Profiling WBGT

Suhu Globe Basah (WBGT) dihitung dengan rumus:

$$
WBGT = 0.7 \cdot T_{wb} + 0.2 \cdot T_{g} + 0.1 \cdot T_{db}
$$

Di mana:
- $T_{wb}$ adalah suhu bulb basah (°C),
- $T_{g}$ adalah suhu globe (°C),
- $T_{db}$ adalah suhu kering (°C).

### 2.4. Siklus Kerja-Istirahat Metabolik

Siklus kerja-istirahat dapat diatur berdasarkan tingkat stres panas yang diprediksi. Penentuan waktu kerja dan istirahat dapat dilakukan dengan menggunakan tabel ACGIH TLVs untuk Stres Panas, yang memberikan panduan berdasarkan WBGT dan tingkat aktivitas.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengukuran Lingkungan**: Lakukan pengukuran suhu kering, suhu bulb basah, dan suhu globe di area kerja.
2. **Perhitungan WBGT**: Hitung nilai WBGT menggunakan rumus yang telah dijelaskan.
3. **Penentuan Laju Metabolisme**: Identifikasi tingkat aktivitas pekerja untuk menentukan laju metabolisme.
4. **Model PHS**: Hitung nilai PHS menggunakan rumus keseimbangan energi.
5. **Rencana Kerja-Istirahat**: Berdasarkan hasil PHS dan WBGT, rencanakan siklus kerja-istirahat yang sesuai.
6. **Monitoring dan Evaluasi**: Lakukan pemantauan berkala terhadap kondisi lingkungan dan kesehatan pekerja.

### 3.2. Diagram Alir Proses

```plaintext
+---------------------+
|  Pengukuran Suhu   |
+---------------------+
           |
           v
+---------------------+
|   Hitung WBGT      |
+---------------------+
           |
           v
+---------------------+
|  Tentukan Laju     |
|  Metabolisme       |
+---------------------+
           |
           v
+---------------------+
|   Model PHS        |
+---------------------+
           |
           v
+---------------------+
| Rencana Kerja-Istirahat |
+---------------------+
           |
           v
+---------------------+
|  Monitoring         |
+---------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan dalam sebuah pabrik pengecoran, data yang diperoleh adalah sebagai berikut:
- Suhu kering ($T_{db}$) = 35°C
- Suhu bulb basah ($T_{wb}$) = 28°C
- Suhu globe ($T_{g}$) = 30°C
- Laju metabolisme ($M$) = 400 W

### 4.2. Perhitungan WBGT

Menggunakan rumus WBGT:

$$
WBGT = 0.7 \cdot 28 + 0.2 \cdot 30 + 0.1 \cdot 35 = 19.6 + 6 + 3.5 = 29.1°C
$$

### 4.3. Perhitungan Energi

Hitung energi yang diterima tubuh:

$$
Q_{in} = 400 \cdot 3.47 \cdot (37 - 28) + 0 + 0 + 0 + 0
$$

Di mana kapasitas panas spesifik tubuh ($C_{p}$) diasumsikan 3.47 J/kg·K.

$$
Q_{in} = 400 \cdot 3.47 \cdot 9 = 12492 W
$$

### 4.4. Interpretasi Hasil

Dengan WBGT 29.1°C dan $Q_{in}$ 12492 W, pekerja akan mengalami stres panas yang signifikan. Oleh karena itu, perlu diterapkan siklus kerja-istirahat yang lebih sering untuk mengurangi risiko kesehatan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model stres panas tidak hanya relevan untuk industri pengecoran, tetapi juga dapat diterapkan dalam sektor lain seperti konstruksi, pertanian, dan industri makanan. Dalam konteks rantai pasok, pemahaman tentang stres panas dapat membantu dalam merancang sistem logistik yang lebih efisien dan aman.

Namun, terdapat batasan dalam metodologi ini, seperti variabilitas individu dalam toleransi panas dan kondisi lingkungan yang berubah-ubah. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap perubahan kondisi.

Arah riset masa depan dapat mencakup pengembangan teknologi pemantauan real-time untuk kondisi lingkungan dan kesehatan pekerja, serta integrasi dengan sistem manajemen K3 yang lebih komprehensif. Dengan demikian, industri dapat lebih siap dalam menghadapi tantangan stres panas di masa depan.