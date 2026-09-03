# 1965 — Perilaku Skala Autoclave dan Karakterisasi Selama Pelindian Bijih Laterit Nikel di Bawah Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions  
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)  
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Proses ekstraksi nikel dari bijih laterit melalui metode High-Pressure Acid Leaching (HPAL) telah menjadi salah satu fokus utama dalam industri pertambangan nikel. Metode ini menawarkan efisiensi yang lebih tinggi dalam ekstraksi logam berharga dibandingkan dengan metode tradisional. Namun, tantangan yang signifikan dalam penerapan HPAL adalah fenomena skala yang terjadi di dalam autoclave, yang dapat mempengaruhi efisiensi proses dan biaya operasional. Menurut Dickson et al. (2026), perilaku skala autoclave selama pelindian bijih laterit nikel dapat menyebabkan penurunan efisiensi proses dan meningkatkan biaya pemeliharaan peralatan. Skala ini terbentuk akibat reaksi kimia yang terjadi selama pelindian, yang dapat mengakibatkan penyumbatan dan penurunan laju aliran.

Dalam konteks industri, penting untuk memahami karakteristik skala ini agar dapat mengembangkan strategi mitigasi yang efektif. Penelitian yang dilakukan oleh Andrameda et al. (2024) menunjukkan bahwa penggunaan agen desulfurisasi, pengaturan suhu, dan waktu proses roasting-reduction dapat mempengaruhi hasil pelindian residu bijih laterit nikel. Dengan memahami interaksi antara variabel-variabel ini, industri dapat merancang proses yang lebih efisien dan ekonomis.

Urgensi untuk mengatasi masalah skala ini tidak hanya berkaitan dengan efisiensi proses, tetapi juga dengan dampak lingkungan yang ditimbulkan. Proses yang tidak efisien dapat menghasilkan limbah yang lebih besar dan meningkatkan jejak karbon dari operasi pertambangan. Oleh karena itu, penelitian ini tidak hanya relevan dari segi teknis, tetapi juga dari perspektif keberlanjutan lingkungan.

## 2. Landasan Teori & Formulasi Matematis

Proses HPAL melibatkan pelindian bijih laterit nikel dengan menggunakan asam sulfat pada tekanan dan suhu tinggi. Reaksi kimia utama yang terjadi dapat dinyatakan sebagai berikut:

$$
\text{NiO} + 2 \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{H}_2\text{O}
$$

Dalam proses ini, laju reaksi dipengaruhi oleh beberapa faktor, termasuk suhu ($T$), konsentrasi asam ($C$), dan waktu reaksi ($t$). Model matematis yang umum digunakan untuk menggambarkan laju reaksi adalah hukum Arrhenius:

$$
k = A e^{-\frac{E_a}{RT}}
$$

Di mana:
- $k$ adalah laju reaksi,
- $A$ adalah faktor frekuensi,
- $E_a$ adalah energi aktivasi,
- $R$ adalah konstanta gas ideal (8.314 J/mol·K),
- $T$ adalah suhu dalam Kelvin.

Dalam konteks skala autoclave, kita juga perlu mempertimbangkan model pertumbuhan skala, yang dapat dinyatakan dengan persamaan diferensial:

$$
\frac{dS}{dt} = k_{scale} \cdot A \cdot (C_{sat} - C)
$$

Di mana:
- $S$ adalah ketebalan skala,
- $k_{scale}$ adalah konstanta laju pertumbuhan skala,
- $A$ adalah area permukaan,
- $C_{sat}$ adalah konsentrasi saturasi,
- $C$ adalah konsentrasi aktual.

Dengan memahami model-model ini, kita dapat merancang eksperimen untuk mengukur parameter-parameter yang relevan dan mengoptimalkan proses pelindian.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dalam industri untuk mengatasi masalah skala autoclave dapat dilakukan melalui beberapa langkah berikut:

1. **Pengumpulan Data Awal**: Melakukan analisis komposisi bijih laterit nikel dan kondisi operasional saat ini.
2. **Desain Eksperimen**: Merancang eksperimen untuk menguji pengaruh variabel seperti suhu, konsentrasi asam, dan waktu reaksi terhadap laju pelindian dan pembentukan skala.
3. **Pelaksanaan Eksperimen**: Melakukan pengujian di laboratorium untuk mengumpulkan data tentang laju reaksi dan karakteristik skala.
4. **Analisis Data**: Menggunakan model matematis untuk menganalisis data yang diperoleh dan mengidentifikasi faktor-faktor yang paling berpengaruh.
5. **Implementasi di Lapangan**: Mengadaptasi hasil penelitian ke dalam operasi industri, termasuk pengaturan suhu dan penggunaan agen desulfurisasi.
6. **Monitoring dan Evaluasi**: Melakukan pemantauan berkelanjutan terhadap proses untuk mengevaluasi efektivitas strategi mitigasi skala.

Diagram alir proses dapat menggambarkan langkah-langkah ini secara visual, mulai dari pengumpulan data hingga evaluasi hasil.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh perhitungan numerik, mari kita pertimbangkan sebuah pabrik yang memproses 1000 kg bijih laterit nikel dengan konsentrasi nikel 1.5%. Kita akan menghitung jumlah nikel yang dapat diekstraksi menggunakan metode HPAL.

### Parameter Input:
- Berat bijih: $m = 1000 \text{ kg}$
- Konsentrasi nikel: $C_{Ni} = 1.5\% = 0.015$
- Efisiensi ekstraksi: $\eta = 90\% = 0.9$

### Langkah Perhitungan:
1. Hitung total nikel dalam bijih:
   $$
   m_{Ni} = m \cdot C_{Ni} = 1000 \cdot 0.015 = 15 \text{ kg}
   $$

2. Hitung nikel yang dapat diekstraksi:
   $$
   m_{ekstraksi} = m_{Ni} \cdot \eta = 15 \cdot 0.9 = 13.5 \text{ kg}
   $$

Dari perhitungan di atas, pabrik dapat mengekstraksi sekitar 13.5 kg nikel dari 1000 kg bijih laterit nikel. Hasil ini menunjukkan potensi keuntungan yang dapat diperoleh dari proses HPAL, namun juga menggarisbawahi pentingnya pengelolaan skala untuk memastikan efisiensi proses tetap terjaga.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun penelitian ini memberikan wawasan yang berharga tentang perilaku skala autoclave, ada beberapa batasan yang perlu diperhatikan. Salah satunya adalah variasi komposisi bijih yang dapat mempengaruhi hasil pelindian. Selain itu, metode yang diusulkan mungkin memerlukan penyesuaian untuk diterapkan pada berbagai jenis bijih dan kondisi operasional.

Dibandingkan dengan metode konvensional, HPAL menawarkan keuntungan dalam hal efisiensi ekstraksi, namun tantangan skala tetap menjadi kendala yang harus diatasi. Aplikasi lintas sektor dapat mencakup industri pengolahan mineral lainnya, di mana pemahaman tentang perilaku skala dapat diterapkan untuk meningkatkan efisiensi dan mengurangi dampak lingkungan.

Agenda riset lanjutan harus fokus pada pengembangan teknologi baru untuk mengatasi masalah skala, serta eksplorasi metode alternatif yang lebih ramah lingkungan untuk ekstraksi logam. Dengan demikian, industri dapat bergerak menuju praktik yang lebih berkelanjutan dan efisien dalam pengolahan bijih laterit nikel dan mineral lainnya.

---

Dokumen ini memberikan gambaran menyeluruh tentang perilaku skala autoclave dalam proses HPAL dan implikasinya bagi industri. Dengan mengintegrasikan teori, metodologi, dan studi kasus, diharapkan dapat memberikan kontribusi signifikan terhadap pengembangan praktik terbaik dalam pengolahan bijih laterit nikel.