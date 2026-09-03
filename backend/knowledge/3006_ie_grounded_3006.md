# 3006 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada - Studi di Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector  
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)  
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan merupakan salah satu sektor yang paling menuntut dalam hal keandalan dan ketersediaan armada. Dalam konteks ini, pemeliharaan, perbaikan, dan overhaul (MRO) menjadi aspek krusial yang mempengaruhi operasional dan ekonomi perusahaan penerbangan. Dengan meningkatnya kompleksitas sistem pesawat dan kebutuhan untuk mematuhi regulasi keselamatan yang ketat, penerapan kebijakan pemeliharaan yang efektif menjadi sangat penting. Hang Zhou (2024) menekankan bahwa pemeliharaan berbasis keandalan (Reliability-Centered Maintenance, RCM) memiliki nilai tinggi dalam industri yang padat aset, karena dapat mengkuantifikasi degradasi non-linear dari kinerja siklus hidup dan mengoptimalkan operasi dengan meningkatkan keselamatan dan ketersediaan.

Namun, penerapan RCM dalam sistem yang kompleks, seperti kebijakan MRO hierarkis A/B/C/D yang digunakan di sektor penerbangan, sering kali menghadapi tantangan. Penelitian ini memperkenalkan kerangka kebijakan MRO yang menggabungkan siklus D-check yang sepenuhnya diperbaharui dan perbaikan parsial selama fase operasional matang. Dengan mengoptimalkan penjadwalan pemeriksaan pemeliharaan siklus hidup berdasarkan waktu operasi yang tersedia maksimum, penelitian ini menunjukkan adanya nilai optimal untuk model ketersediaan. Hal ini penting untuk memastikan bahwa armada dapat beroperasi secara efisien dan efektif, meminimalkan downtime, dan meningkatkan profitabilitas perusahaan.

Konteks ini menunjukkan urgensi untuk mengembangkan dan menerapkan kebijakan pemeliharaan yang lebih baik, yang tidak hanya mempertimbangkan aspek teknis tetapi juga aspek ekonomi dan operasional. Dengan demikian, penelitian ini memberikan kontribusi signifikan terhadap pemahaman dan praktik pemeliharaan dalam industri penerbangan.

## 2. Landasan Teori & Formulasi Matematis

Kebijakan pemeliharaan berbasis keandalan (RCM) berfokus pada identifikasi dan pengelolaan risiko yang terkait dengan kegagalan sistem. Dalam konteks MRO, model kuantitatif yang diusulkan dalam penelitian ini melibatkan beberapa elemen kunci, termasuk:

1. **Ketersediaan Sistem ($A$)**: Didefinisikan sebagai rasio waktu sistem beroperasi terhadap total waktu yang tersedia. Formula dasar untuk ketersediaan adalah:
   $$
   A = \frac{T_{operasi}}{T_{total}}
   $$
   di mana $T_{operasi}$ adalah waktu di mana sistem berfungsi dan $T_{total}$ adalah total waktu yang diharapkan.

2. **Degradasi Kinerja ($D$)**: Degradasi kinerja dapat dimodelkan dengan fungsi non-linear yang menggambarkan penurunan efisiensi seiring waktu. Misalnya, fungsi degradasi dapat dinyatakan sebagai:
   $$
   D(t) = D_0 e^{-\lambda t}
   $$
   di mana $D_0$ adalah degradasi awal, $\lambda$ adalah laju degradasi, dan $t$ adalah waktu.

3. **Penjadwalan Pemeliharaan ($PM$)**: Penjadwalan pemeliharaan yang optimal dapat dicapai dengan meminimalkan total biaya pemeliharaan dan downtime. Model matematis untuk penjadwalan pemeliharaan dapat dinyatakan sebagai:
   $$
   \min PM = C_{maint} + C_{downtime}
   $$
   di mana $C_{maint}$ adalah biaya pemeliharaan dan $C_{downtime}$ adalah biaya akibat downtime.

Metodologi analitis yang diusulkan dalam penelitian ini melibatkan penggunaan teknik optimasi untuk menentukan waktu pemeliharaan yang optimal, dengan mempertimbangkan faktor-faktor seperti ketersediaan maksimum dan siklus hidup komponen.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hierarkis berbasis keandalan memerlukan pendekatan sistematis. Berikut adalah langkah-langkah yang diusulkan dalam penelitian ini:

1. **Analisis Kinerja Awal**: Melakukan analisis kinerja awal untuk menentukan tingkat ketersediaan dan degradasi sistem saat ini.

2. **Identifikasi Kritisitas Komponen**: Mengidentifikasi komponen yang paling kritis terhadap ketersediaan armada menggunakan analisis kegagalan dan efek (FMEA).

3. **Pengembangan Model Pemeliharaan**: Mengembangkan model pemeliharaan berbasis keandalan yang mencakup siklus D-check dan perbaikan parsial.

4. **Penjadwalan Pemeliharaan**: Menggunakan teknik optimasi untuk menjadwalkan pemeliharaan dengan memaksimalkan waktu operasi dan meminimalkan biaya.

5. **Implementasi dan Monitoring**: Melaksanakan kebijakan pemeliharaan yang telah direncanakan dan memonitor kinerja secara berkala untuk penyesuaian yang diperlukan.

Diagram alir proses implementasi dapat digambarkan sebagai berikut:

```
[Analisis Kinerja Awal] --> [Identifikasi Kritisitas] --> [Pengembangan Model] --> [Penjadwalan Pemeliharaan] --> [Implementasi & Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas tentang penerapan model ini, mari kita lihat studi kasus hipotetis di sebuah perusahaan penerbangan dengan parameter berikut:

- Total waktu operasi yang direncanakan ($T_{total}$): 1000 jam
- Waktu operasi aktual ($T_{operasi}$): 800 jam
- Biaya pemeliharaan ($C_{maint}$): $50,000
- Biaya downtime ($C_{downtime}$): $20,000

### Langkah 1: Hitung Ketersediaan

Menggunakan rumus ketersediaan:
$$
A = \frac{T_{operasi}}{T_{total}} = \frac{800}{1000} = 0.8 \text{ atau } 80\%
$$

### Langkah 2: Hitung Total Biaya Pemeliharaan

Menggunakan rumus untuk total biaya pemeliharaan:
$$
PM = C_{maint} + C_{downtime} = 50,000 + 20,000 = 70,000
$$

### Interpretasi Hasil

Dengan ketersediaan 80%, perusahaan dapat dianggap berada dalam kondisi yang baik, namun masih ada ruang untuk perbaikan. Total biaya pemeliharaan sebesar $70,000 menunjukkan bahwa ada potensi untuk mengurangi biaya dengan meningkatkan efisiensi pemeliharaan dan mengurangi downtime.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun penelitian ini memberikan kerangka kerja yang komprehensif untuk kebijakan pemeliharaan berbasis keandalan, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah kompleksitas dalam penerapan model pada sistem yang sangat dinamis dan variabel. Selain itu, perbandingan dengan metode konvensional menunjukkan bahwa meskipun RCM menawarkan keuntungan dalam hal ketersediaan, biaya implementasi awal dapat menjadi penghalang bagi beberapa organisasi.

Aplikasi lintas sektor dari kebijakan ini dapat mencakup industri otomotif, energi, dan manufaktur, di mana keandalan sistem sangat penting. Ke depan, agenda riset lanjutan dapat berfokus pada pengembangan algoritma optimasi yang lebih canggih, serta integrasi teknologi digital seperti Internet of Things (IoT) untuk pemantauan real-time dan analisis data besar dalam pemeliharaan.

Dengan demikian, penelitian ini tidak hanya memberikan wawasan baru dalam kebijakan pemeliharaan di sektor penerbangan, tetapi juga membuka jalan bagi inovasi dan efisiensi di berbagai industri lainnya.