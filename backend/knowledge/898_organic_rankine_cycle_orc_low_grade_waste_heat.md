# 898 — Sistem Organic Rankine Cycle (ORC) untuk Pemulihan Panas Limbah Rendah di Industri: Pemilihan Fluida Kerja Termodinamika, Perhitungan Ukuran Turbin Radial, dan Efisiensi Termal Bersih

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Organic Rankine Cycle (ORC) System for Industrial Low-Grade Waste Heat Recovery: Working Fluid Thermodynamic Selection, Radial Turbine Expander Sizing, and Net Thermal Efficiency  
**Standar & Referensi Utama:** Colonna et al. (Energy); Macchi & Astolfi (Organic Rankine Cycle (ORC) Power Systems, Woodhead Publishing); ASME ORC Standards

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, efisiensi energi menjadi salah satu fokus utama untuk meningkatkan daya saing dan keberlanjutan operasional. Banyak proses industri menghasilkan limbah panas yang tidak terpakai, yang dapat dimanfaatkan melalui sistem Organic Rankine Cycle (ORC). Sistem ini memungkinkan konversi energi termal dari limbah panas menjadi energi listrik, sehingga memberikan manfaat ekonomi dan lingkungan yang signifikan. Menurut Colonna et al. (2022), pemulihan energi dari limbah panas dapat mengurangi konsumsi energi primer dan emisi gas rumah kaca, yang sejalan dengan tujuan keberlanjutan global.

Tantangan utama dalam penerapan sistem ORC adalah pemilihan fluida kerja yang tepat dan desain komponen sistem, seperti turbin radial. Fluida kerja harus memiliki sifat termodinamika yang sesuai untuk beroperasi pada suhu rendah, serta harus ramah lingkungan dan ekonomis. Selain itu, ukuran dan desain turbin radial harus dioptimalkan untuk mencapai efisiensi maksimum. Hal ini memerlukan pemahaman mendalam tentang termodinamika dan mekanika fluida, serta pemodelan matematis yang akurat.

Dalam industri manufaktur dan rantai pasok modern, penerapan teknologi pemulihan energi seperti ORC dapat meningkatkan efisiensi operasional dan mengurangi biaya energi. Penelitian ini bertujuan untuk memberikan panduan komprehensif mengenai pemilihan fluida kerja, perhitungan ukuran turbin radial, dan analisis efisiensi termal bersih dalam sistem ORC.

## 2. Landasan Teori & Formulasi Matematis

Sistem ORC bekerja berdasarkan prinsip siklus Rankine, namun menggunakan fluida kerja organik yang memiliki titik didih lebih rendah dibandingkan air. Proses utama dalam siklus ini meliputi evaporasi, ekspansi, kondensasi, dan kompresi. Persamaan dasar yang digunakan dalam analisis sistem ORC adalah sebagai berikut:

1. **Energi Termal Masuk (Q_in)**:
   $$ Q_{in} = \dot{m} \cdot (h_{evap} - h_{cond}) $$
   di mana:
   - $\dot{m}$ = laju aliran massa fluida kerja (kg/s)
   - $h_{evap}$ = entalpi fluida kerja pada titik evaporasi (kJ/kg)
   - $h_{cond}$ = entalpi fluida kerja pada titik kondensasi (kJ/kg)

2. **Kerja Ekspansi (W_t)**:
   $$ W_t = \dot{m} \cdot (h_{evap} - h_{exp}) $$
   di mana:
   - $h_{exp}$ = entalpi fluida kerja setelah ekspansi (kJ/kg)

3. **Efisiensi Termal Bersih (η_th)**:
   $$ η_{th} = \frac{W_t - W_p}{Q_{in}} $$
   di mana:
   - $W_p$ = kerja yang digunakan untuk proses pompa (kJ/kg)

4. **Ukuran Turbin Radial**:
   Ukuran turbin radial dapat dihitung menggunakan persamaan berikut:
   $$ \tau = \frac{P}{\rho \cdot Q} $$
   di mana:
   - $\tau$ = ukuran turbin (m)
   - $P$ = daya keluaran turbin (W)
   - $\rho$ = densitas fluida kerja (kg/m³)
   - $Q$ = laju aliran volumetrik (m³/s)

Derivasi dari persamaan di atas dapat dilakukan dengan mempertimbangkan hukum termodinamika dan prinsip konservasi energi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem ORC memerlukan langkah-langkah sistematis sebagai berikut:

1. **Analisis Sumber Panas Limbah**:
   - Identifikasi sumber panas limbah di industri.
   - Ukur suhu dan laju aliran panas.

2. **Pemilihan Fluida Kerja**:
   - Evaluasi sifat termodinamika dari berbagai fluida kerja.
   - Pilih fluida yang sesuai berdasarkan titik didih, kapasitas panas, dan dampak lingkungan.

3. **Perhitungan Ukuran Turbin**:
   - Hitung ukuran turbin radial berdasarkan daya keluaran yang diinginkan dan laju aliran fluida kerja.

4. **Desain Sistem ORC**:
   - Rancang sistem ORC dengan mempertimbangkan komponen seperti evaporator, kondensor, dan pompa.

5. **Pengujian dan Validasi**:
   - Lakukan pengujian sistem untuk memvalidasi efisiensi dan kinerja.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[ Sumber Panas Limbah ] → [ Evaporator ] → [ Turbin Radial ] → [ Kondensor ] → [ Pompa ] → [ Sumber Panas Limbah ]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan menganalisis sistem ORC yang memanfaatkan limbah panas dari proses industri dengan parameter berikut:

- Suhu limbah panas: 150 °C
- Laju aliran massa fluida kerja: 0.5 kg/s
- Fluida kerja: R245fa (dengan entalpi $h_{evap} = 300$ kJ/kg dan $h_{cond} = 100$ kJ/kg)

### Langkah-langkah Perhitungan:

1. **Hitung Energi Termal Masuk (Q_in)**:
   $$ Q_{in} = \dot{m} \cdot (h_{evap} - h_{cond}) $$
   $$ Q_{in} = 0.5 \cdot (300 - 100) = 100 \text{ kW} $$

2. **Hitung Kerja Ekspansi (W_t)**:
   Misalkan entalpi setelah ekspansi ($h_{exp} = 200$ kJ/kg):
   $$ W_t = \dot{m} \cdot (h_{evap} - h_{exp}) $$
   $$ W_t = 0.5 \cdot (300 - 200) = 50 \text{ kW} $$

3. **Hitung Kerja Pompa (W_p)**:
   Misalkan kerja pompa adalah 5 kW:
   $$ η_{th} = \frac{W_t - W_p}{Q_{in}} $$
   $$ η_{th} = \frac{50 - 5}{100} = 0.45 \text{ atau } 45\% $$

### Interpretasi Hasil:
Efisiensi termal bersih sebesar 45% menunjukkan bahwa sistem ORC ini dapat memanfaatkan 45% dari energi termal yang tersedia dari limbah panas untuk menghasilkan energi listrik. Ini merupakan hasil yang baik dan menunjukkan potensi penghematan energi yang signifikan bagi industri.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sistem ORC tidak hanya terbatas pada industri energi, tetapi juga dapat diterapkan di sektor lain seperti pengolahan makanan, manufaktur, dan pengolahan limbah. Dalam konteks rantai pasok, pemulihan energi dapat mengurangi biaya operasional dan meningkatkan keberlanjutan. Integrasi teknologi otomasi dalam sistem ORC dapat meningkatkan efisiensi dan mengurangi risiko operasional.

Namun, terdapat batasan dalam metodologi ini, seperti ketergantungan pada sifat fluida kerja dan desain sistem yang kompleks. Penelitian masa depan harus fokus pada pengembangan fluida kerja baru yang lebih efisien dan ramah lingkungan, serta inovasi dalam desain komponen sistem untuk meningkatkan efisiensi keseluruhan.

Dengan demikian, penerapan sistem ORC dalam pemulihan panas limbah rendah di industri merupakan langkah strategis menuju keberlanjutan dan efisiensi energi yang lebih baik.