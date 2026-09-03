# 2473 — Model Numerik Transien untuk Unit Penyimpanan Energi Termal Panas Tersembunyi pada Suhu Sekitar 222ºC untuk Integrasi dengan Pompa Panas Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump  
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)  
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Penyimpanan energi termal merupakan komponen penting dalam transisi menuju sistem energi yang lebih berkelanjutan dan rendah karbon. Dalam konteks industri, penggunaan sistem penyimpanan energi termal berbasis panas tersembunyi (LHTES) dapat meningkatkan fleksibilitas dan efisiensi proses industri, terutama ketika dikombinasikan dengan pompa panas suhu tinggi (HTHP). Toloza et al. (2026) menyoroti bahwa sistem LHTES dapat memberikan nilai tambah yang signifikan pada aplikasi panas proses industri, di mana kebutuhan akan efisiensi energi dan pengurangan emisi karbon semakin mendesak. 

Sistem LHTES menggunakan bahan perubahan fase (PCM) yang memiliki kapasitas penyimpanan energi tinggi, namun tantangan utama yang dihadapi adalah rendahnya konduktivitas termal dari sebagian besar PCM. Hal ini mengharuskan optimasi geometri penukar panas, solusi pengemasan, atau penggunaan wol logam untuk mencapai laju transfer panas yang lebih tinggi. Konfigurasi shell dan tube menjadi pilihan menarik karena kompak, kuat secara struktural, dan memiliki kapasitas untuk peningkatan termal. Model numerik transien yang dikembangkan dalam penelitian ini bertujuan untuk mensimulasikan unit penyimpanan LHTES vertikal dengan menggunakan PCM eutektik, yang beroperasi pada suhu sekitar 222ºC. Penelitian ini memberikan wawasan yang berharga bagi industri dalam mengadopsi teknologi penyimpanan energi yang lebih efisien dan ramah lingkungan.

Dalam konteks ini, Xu dan Wang (2024) juga menggarisbawahi prospek pompa panas dalam dekarbonisasi energi termal, menekankan pentingnya inovasi dalam teknologi penyimpanan energi untuk mencapai target pengurangan emisi. Dengan memanfaatkan sistem LHTES dan HTHP, industri dapat mengurangi ketergantungan pada sumber energi fosil dan meningkatkan efisiensi operasional, yang pada gilirannya dapat berkontribusi pada keberlanjutan lingkungan.

## 2. Landasan Teori & Formulasi Matematis

Model numerik yang diusulkan dalam penelitian ini menggunakan pendekatan transien untuk menganalisis perilaku termal dari unit penyimpanan energi. Dalam konteks ini, persamaan energi untuk sistem LHTES dapat dinyatakan sebagai berikut:

$$
\frac{\partial T}{\partial t} = \frac{k}{\rho c_p} \nabla^2 T + \frac{Q_{in}}{V}
$$

Di mana:
- \( T \) adalah suhu (°C),
- \( t \) adalah waktu (s),
- \( k \) adalah konduktivitas termal (W/m·K),
- \( \rho \) adalah densitas PCM (kg/m³),
- \( c_p \) adalah kapasitas panas spesifik PCM (J/kg·K),
- \( Q_{in} \) adalah laju aliran panas masuk (W),
- \( V \) adalah volume unit penyimpanan (m³).

Model ini juga mempertimbangkan perubahan fase dari PCM, yang dapat dimodelkan dengan menggunakan entalpi sebagai fungsi suhu:

$$
h(T) = h_{solid} + \int_{T_{solid}}^{T} c_p dT \quad \text{untuk} \quad T < T_{melt}
$$

$$
h(T) = h_{liquid} + \int_{T_{melt}}^{T} c_p dT \quad \text{untuk} \quad T \geq T_{melt}
$$

Di mana:
- \( h(T) \) adalah entalpi (J/kg),
- \( T_{melt} \) adalah suhu lebur PCM (°C).

Dengan menggunakan model ini, simulasi dapat dilakukan untuk mengevaluasi kinerja sistem LHTES dalam berbagai kondisi operasional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem LHTES dalam industri memerlukan langkah-langkah sistematis yang mencakup:

1. **Analisis Kebutuhan Energi**: Identifikasi kebutuhan energi termal dari proses industri yang ada.
2. **Pemilihan PCM**: Pilih PCM yang sesuai berdasarkan suhu operasi dan karakteristik termal.
3. **Desain Sistem**: Rancang konfigurasi shell dan tube dengan mempertimbangkan geometri dan ukuran yang optimal untuk meningkatkan transfer panas.
4. **Pengembangan Model Numerik**: Kembangkan model numerik menggunakan perangkat lunak simulasi seperti Modelica untuk mensimulasikan perilaku termal.
5. **Pengujian dan Validasi**: Lakukan pengujian sistem untuk memvalidasi model dan memastikan kinerja sesuai spesifikasi.
6. **Implementasi dan Monitoring**: Implementasikan sistem di lapangan dan lakukan monitoring untuk memastikan efisiensi operasional.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Analisis Kebutuhan Energi] → [Pemilihan PCM] → [Desain Sistem] → [Pengembangan Model] → [Pengujian] → [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah industri yang memerlukan 500 kW energi panas untuk proses pemanasannya. Dengan menggunakan PCM yang memiliki densitas \( \rho = 800 \, \text{kg/m}^3 \), kapasitas panas spesifik \( c_p = 2000 \, \text{J/kg·K} \), dan konduktivitas termal \( k = 0.5 \, \text{W/m·K} \), kita dapat menghitung waktu yang diperlukan untuk mencapai suhu tertentu.

Misalkan suhu awal \( T_0 = 20 \, \text{°C} \) dan suhu target \( T_f = 222 \, \text{°C} \). Maka, kita dapat menghitung laju aliran panas yang diperlukan untuk mencapai suhu target:

1. Hitung perubahan entalpi:
   - Untuk PCM yang belum melebur:
   $$ 
   \Delta h = c_p (T_f - T_0) = 2000 \, \text{J/kg·K} \times (222 - 20) \, \text{K} = 404000 \, \text{J/kg} 
   $$

2. Hitung total energi yang diperlukan:
   - Jika volume unit penyimpanan \( V = 1 \, \text{m}^3 \):
   $$
   E_{total} = \Delta h \times \rho \times V = 404000 \, \text{J/kg} \times 800 \, \text{kg/m}^3 \times 1 \, \text{m}^3 = 323200000 \, \text{J} 
   $$

3. Hitung waktu yang diperlukan untuk mencapai suhu target:
   - Dengan laju aliran panas \( Q_{in} = 500 \, \text{kW} = 500000 \, \text{W} \):
   $$
   t = \frac{E_{total}}{Q_{in}} = \frac{323200000 \, \text{J}}{500000 \, \text{W}} = 646.4 \, \text{s} \approx 10.77 \, \text{menit}
   $$

Hasil ini menunjukkan bahwa dibutuhkan waktu sekitar 10.77 menit untuk mencapai suhu target, yang memberikan gambaran tentang efisiensi sistem LHTES dalam aplikasi industri.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun model numerik yang diusulkan memberikan wawasan yang berharga, ada beberapa batasan yang perlu diperhatikan. Salah satunya adalah asumsi bahwa konduktivitas termal dan kapasitas panas spesifik PCM tetap konstan selama proses. Dalam praktiknya, perubahan suhu dapat mempengaruhi sifat-sifat ini, sehingga memerlukan model yang lebih kompleks untuk akurasi yang lebih tinggi.

Perbandingan dengan metode konvensional menunjukkan bahwa penggunaan LHTES dapat meningkatkan efisiensi energi secara signifikan, terutama dalam aplikasi yang memerlukan fluktuasi suhu tinggi. Aplikasi lintas sektor, seperti dalam industri makanan dan minuman, serta pemanas air untuk bangunan, menunjukkan potensi besar untuk penerapan teknologi ini.

Agenda riset lanjutan harus fokus pada pengembangan PCM baru dengan konduktivitas termal yang lebih tinggi dan kapasitas penyimpanan yang lebih baik, serta integrasi sistem LHTES dengan sumber energi terbarukan untuk mencapai dekarbonisasi yang lebih efektif.

Dengan demikian, penelitian ini tidak hanya memberikan kontribusi terhadap pemahaman sistem penyimpanan energi, tetapi juga membuka jalan bagi inovasi lebih lanjut dalam teknologi energi berkelanjutan.