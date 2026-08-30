# 902 — Anaerobic Digestion POME dalam Lagun Tertutup: Kinetika Produksi Biogas Metana Monod, Scrubbing H2S Biologis Berkelanjutan, dan Interkoneksi Jaringan Mesin Gas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Palm Oil Mill Effluent (POME) Covered Lagoon Anaerobic Digestion: Monod Methane Biogas Production Kinetics, Continuous H2S Biological Scrubbing, and Gas Engine Grid Interconnection  
**Standar & Referensi Utama:** Metcalf & Eddy (Wastewater Engineering: Treatment and Resource Recovery, 5th Ed., McGraw-Hill); ISO 14040; Renewable Energy (Elsevier)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan minyak kelapa sawit (PKS) menghasilkan limbah cair yang dikenal sebagai Palm Oil Mill Effluent (POME). POME merupakan salah satu sumber pencemaran yang signifikan, mengandung bahan organik tinggi yang dapat merusak ekosistem jika tidak dikelola dengan baik. Oleh karena itu, pengolahan POME menjadi sangat penting, baik dari segi lingkungan maupun ekonomi. Proses anaerobik dalam lagun tertutup menawarkan solusi yang efektif untuk mengurangi dampak lingkungan sambil memproduksi biogas yang dapat dimanfaatkan sebagai sumber energi terbarukan.

Urgensi operasional dalam pengolahan POME tidak hanya terletak pada kepatuhan terhadap regulasi lingkungan, tetapi juga pada potensi penghematan biaya energi. Dengan memanfaatkan biogas yang dihasilkan, pabrik dapat mengurangi ketergantungan pada sumber energi fosil, yang semakin mahal dan tidak berkelanjutan. Namun, tantangan yang dihadapi dalam implementasi sistem ini meliputi pengendalian H2S yang dihasilkan selama proses anaerobik, yang dapat merusak peralatan dan mengurangi efisiensi konversi energi.

Dalam konteks rantai pasok modern, pengelolaan limbah yang efisien dapat meningkatkan citra perusahaan dan memenuhi tuntutan konsumen akan produk yang ramah lingkungan. Oleh karena itu, penelitian dan pengembangan lebih lanjut dalam teknologi pengolahan POME sangat diperlukan untuk mengoptimalkan produksi biogas dan meminimalkan dampak negatif terhadap lingkungan (Metcalf & Eddy, 2014; ISO 14040, 2020).

## 2. Landasan Teori & Formulasi Matematis

Proses anaerobik dalam lagun tertutup dapat dijelaskan melalui model kinetika Monod, yang menggambarkan pertumbuhan mikroorganisme dalam kondisi terbatas. Persamaan Monod dinyatakan sebagai berikut:

$$
\mu = \mu_{\max} \frac{S}{K_s + S}
$$

Di mana:
- $\mu$ = laju pertumbuhan spesifik mikroorganisme (1/hari)
- $\mu_{\max}$ = laju pertumbuhan maksimum (1/hari)
- $S$ = konsentrasi substrat (g/L)
- $K_s$ = konstanta setengah saturasi (g/L)

Produksi biogas dapat dihitung dengan menggunakan persamaan berikut:

$$
P = Y \cdot X \cdot \frac{1}{\theta}
$$

Di mana:
- $P$ = produksi biogas (m³/hari)
- $Y$ = yield biogas (m³/g COD)
- $X$ = konsentrasi biomassa (g/L)
- $\theta$ = waktu tinggal (hari)

Dalam proses ini, H2S yang dihasilkan selama fermentasi anaerobik perlu diolah menggunakan metode scrubbing biologis. Persamaan untuk menghitung laju penghilangan H2S dapat dinyatakan sebagai:

$$
R = k \cdot C_{H2S}
$$

Di mana:
- $R$ = laju penghilangan H2S (mg/L/hari)
- $k$ = konstanta laju reaksi (1/hari)
- $C_{H2S}$ = konsentrasi H2S (mg/L)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem anaerobik untuk pengolahan POME dalam lagun tertutup meliputi langkah-langkah berikut:

1. **Pengumpulan dan Pengolahan Awal POME**: POME dikumpulkan dari proses pengolahan minyak kelapa sawit dan dilakukan penyaringan untuk menghilangkan padatan kasar.
   
2. **Pengisian Lagun Tertutup**: POME yang telah disaring dimasukkan ke dalam lagun tertutup yang dirancang untuk proses anaerobik. Lagun ini dilengkapi dengan sistem pemantauan suhu dan pH.

3. **Inokulasi Mikroorganisme**: Mikroorganisme anaerobik diinokulasi ke dalam lagun untuk memulai proses fermentasi.

4. **Pengendalian Parameter Proses**: Parameter seperti suhu, pH, dan konsentrasi substrat dipantau secara berkala untuk memastikan kondisi optimal bagi pertumbuhan mikroorganisme.

5. **Pengumpulan Biogas**: Biogas yang dihasilkan dikumpulkan melalui sistem pipa dan disimpan dalam tangki penyimpanan.

6. **Pengolahan H2S**: Biogas yang mengandung H2S diproses melalui sistem scrubbing biologis untuk mengurangi konsentrasi H2S sebelum digunakan.

7. **Interkoneksi Jaringan**: Biogas yang telah dibersihkan dapat digunakan untuk menghasilkan listrik melalui mesin gas yang terhubung dengan jaringan listrik.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan POME] --> [Pengolahan Awal] --> [Pengisian Lagun] --> [Inokulasi] --> [Pengendalian Proses] --> [Pengumpulan Biogas] --> [Pengolahan H2S] --> [Interkoneksi Jaringan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan sebuah pabrik pengolahan minyak kelapa sawit menghasilkan POME dengan karakteristik sebagai berikut:
- Debit POME: 100 m³/hari
- Konsentrasi COD: 30,000 mg/L
- Yield biogas ($Y$): 0.35 m³/g COD
- Waktu tinggal ($\theta$): 20 hari

### Langkah 1: Hitung Total COD yang Masuk

Total COD yang masuk ke dalam lagun per hari dapat dihitung dengan:

$$
COD_{total} = Q \cdot C_{COD} = 100 \, \text{m³/hari} \cdot 30,000 \, \text{mg/L} \cdot \frac{1 \, \text{g}}{1,000 \, \text{mg}} \cdot \frac{1,000 \, \text{L}}{1 \, \text{m³}} = 3,000 \, \text{g/hari}
$$

### Langkah 2: Hitung Produksi Biogas

Dengan menggunakan rumus produksi biogas:

$$
P = Y \cdot COD_{total} \cdot \frac{1}{\theta} = 0.35 \, \text{m³/g COD} \cdot 3,000 \, \text{g/hari} \cdot \frac{1}{20 \, \text{hari}} = 52.5 \, \text{m³/hari}
$$

### Interpretasi Hasil

Produksi biogas sebesar 52.5 m³/hari menunjukkan potensi yang signifikan untuk menghasilkan energi terbarukan. Dengan asumsi bahwa biogas ini digunakan untuk menghasilkan listrik, pabrik dapat mengurangi biaya energi dan meningkatkan efisiensi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pengelolaan POME melalui anaerobic digestion tidak hanya relevan dalam konteks pengolahan limbah, tetapi juga memiliki implikasi luas dalam disiplin lain seperti manajemen rantai pasok, di mana pengurangan limbah dapat meningkatkan keberlanjutan keseluruhan. Dalam konteks otomasi, penggunaan sensor dan teknologi IoT dapat meningkatkan pengendalian proses dan efisiensi energi.

Dalam hal manajemen biaya, investasi awal dalam teknologi anaerobik dapat diimbangi dengan penghematan biaya energi jangka panjang. Aspek K3 dan ESG juga menjadi penting, di mana pengelolaan limbah yang baik dapat mengurangi risiko pencemaran dan meningkatkan citra perusahaan.

Ke depan, penelitian harus difokuskan pada pengembangan teknologi yang lebih efisien dalam pengolahan POME, termasuk pemanfaatan limbah sebagai sumber daya, serta inovasi dalam sistem scrubbing untuk mengurangi emisi H2S. Standar masa depan juga harus mempertimbangkan integrasi sistem energi terbarukan dalam jaringan listrik, yang dapat mendukung transisi menuju ekonomi rendah karbon.

---

Dokumen ini menyajikan panduan komprehensif mengenai pengolahan POME melalui anaerobic digestion, dengan penekanan pada aspek teknis dan aplikatif yang relevan dalam konteks industri modern.