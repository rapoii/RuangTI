# 996 — Metodologi Simulasi Sistem Peristiwa Diskrit: Arsitektur Kelton-Sadowski Arena, Penyesuaian Distribusi Probabilitas Input Law-Kelton, dan Pemanasan Steady-State

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Discrete-Event System Simulation Methodology: Kelton-Sadowski Arena Architecture, Law-Kelton Input Probability Distribution Fitting (Goodness-of-Fit Chi-Square/KS), and Steady-State Warm-Up  
**Standar & Referensi Utama:** Kelton, Sadowski & Zupick (Simulation with Arena, 6th Ed., McGraw-Hill); Law (Simulation Modeling and Analysis, 5th Ed., McGraw-Hill); Banks et al. (Discrete-Event System Simulation)

---

## 1. Pendahuluan dan Konteks Industri

Simulasi sistem peristiwa diskrit (Discrete-Event Simulation, DES) telah menjadi alat yang sangat penting dalam analisis dan perancangan sistem industri modern. Dalam konteks manufaktur dan rantai pasok, DES memungkinkan para insinyur untuk memodelkan dan menganalisis perilaku sistem yang kompleks dengan mempertimbangkan variabilitas dan ketidakpastian yang ada. Dengan meningkatnya kompleksitas sistem produksi dan rantai pasok, kebutuhan untuk memahami interaksi antar elemen dalam sistem menjadi semakin mendesak. 

Misalnya, dalam industri otomotif, waktu tunggu dan variasi dalam proses produksi dapat berdampak signifikan pada efisiensi dan biaya. Oleh karena itu, penggunaan metodologi simulasi yang tepat sangat penting untuk mengidentifikasi bottleneck, mengoptimalkan alokasi sumber daya, dan meningkatkan throughput. Tantangan yang dihadapi dalam konteks ini meliputi kebutuhan untuk mengintegrasikan data dari berbagai sumber, mengelola ketidakpastian dalam permintaan dan pasokan, serta memastikan bahwa sistem dapat beradaptasi dengan perubahan kondisi pasar. 

Literatur menunjukkan bahwa penerapan DES dapat mengurangi biaya operasional hingga 30% dan meningkatkan efisiensi produksi hingga 20% (Kelton et al., 2020). Dengan demikian, pemahaman yang mendalam tentang metodologi simulasi, termasuk arsitektur Kelton-Sadowski, penyesuaian distribusi probabilitas, dan pemanasan steady-state, menjadi sangat penting bagi para profesional di bidang teknik industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur Kelton-Sadowski Arena

Arsitektur Kelton-Sadowski mengacu pada struktur dasar yang digunakan dalam perangkat lunak simulasi Arena. Arsitektur ini terdiri dari komponen utama seperti entitas, sumber daya, dan proses. Entitas mewakili objek yang bergerak melalui sistem, sedangkan sumber daya adalah elemen yang dibutuhkan untuk memproses entitas. Proses menggambarkan interaksi antara entitas dan sumber daya.

### 2.2. Penyesuaian Distribusi Probabilitas

Penyesuaian distribusi probabilitas merupakan langkah penting dalam simulasi untuk memastikan bahwa model yang dibangun mencerminkan realitas sistem. Metode yang umum digunakan adalah uji goodness-of-fit, seperti Chi-Square dan Kolmogorov-Smirnov (KS).

#### 2.2.1. Uji Chi-Square

Uji Chi-Square digunakan untuk menentukan apakah distribusi yang diharapkan sesuai dengan distribusi yang diamati. Rumusnya adalah:

$$
\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}
$$

di mana:
- $O_i$ = frekuensi observasi
- $E_i$ = frekuensi yang diharapkan

#### 2.2.2. Uji Kolmogorov-Smirnov

Uji KS digunakan untuk membandingkan distribusi kumulatif dari dua sampel. Rumusnya adalah:

$$
D = \sup_x |F_n(x) - F(x)|
$$

di mana:
- $F_n(x)$ = distribusi kumulatif sampel
- $F(x)$ = distribusi kumulatif teoritis

### 2.3. Pemanasan Steady-State

Pemanasan steady-state adalah proses untuk memastikan bahwa sistem telah mencapai kondisi stabil sebelum pengambilan data. Ini penting untuk menghindari bias dalam hasil simulasi. Metode yang umum digunakan adalah analisis waktu pemanasan, di mana waktu yang diperlukan untuk mencapai steady-state diukur dan digunakan untuk menentukan periode pengambilan data.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Tujuan Simulasi**: Tentukan tujuan dari simulasi, seperti mengurangi waktu tunggu atau meningkatkan throughput.
2. **Pengumpulan Data**: Kumpulkan data historis yang relevan untuk analisis distribusi probabilitas.
3. **Penyesuaian Distribusi**: Gunakan metode Chi-Square atau KS untuk menyesuaikan distribusi probabilitas input.
4. **Modeling**: Buat model simulasi menggunakan arsitektur Kelton-Sadowski di perangkat lunak Arena.
5. **Pemanasan Steady-State**: Lakukan pemanasan untuk memastikan sistem dalam kondisi stabil.
6. **Pengambilan Data**: Ambil data dari simulasi setelah sistem mencapai steady-state.
7. **Analisis Hasil**: Analisis hasil untuk mendapatkan wawasan dan rekomendasi.

### 3.2. Diagram Alir Proses

![Diagram Alir Proses Simulasi](https://www.example.com/flowchart.png)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik otomotif ingin menganalisis waktu tunggu di jalur perakitan. Data historis menunjukkan bahwa waktu tunggu mengikuti distribusi normal dengan rata-rata 5 menit dan deviasi standar 1 menit.

### 4.2. Langkah Kalkulasi

1. **Parameter Input**:
   - Rata-rata ($\mu$) = 5 menit
   - Deviasi standar ($\sigma$) = 1 menit

2. **Penyesuaian Distribusi**:
   - Hitung nilai Chi-Square untuk menguji kesesuaian distribusi.

3. **Simulasi**:
   - Jalankan simulasi dengan 1000 iterasi.

4. **Analisis Hasil**:
   - Rata-rata waktu tunggu yang terukur = 4.8 menit
   - Standar deviasi waktu tunggu = 0.9 menit

### 4.3. Interpretasi Hasil

Hasil simulasi menunjukkan bahwa waktu tunggu rata-rata lebih rendah dari yang diharapkan. Ini menunjukkan bahwa ada potensi untuk meningkatkan efisiensi jalur perakitan. Rekomendasi dapat mencakup penambahan sumber daya atau pengurangan waktu siklus.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Metodologi simulasi sistem peristiwa diskrit tidak hanya terbatas pada industri manufaktur, tetapi juga dapat diterapkan dalam berbagai sektor seperti layanan kesehatan, logistik, dan telekomunikasi. Dalam konteks rantai pasok, DES dapat membantu dalam perencanaan dan pengendalian inventaris, serta dalam pengoptimalan distribusi.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada data yang akurat dan valid. Selain itu, dengan kemajuan teknologi seperti kecerdasan buatan dan pembelajaran mesin, ada potensi untuk mengintegrasikan DES dengan teknik-teknik ini untuk meningkatkan akurasi dan efisiensi.

Arah riset masa depan dapat difokuskan pada pengembangan algoritma yang lebih canggih untuk penyesuaian distribusi dan pemanasan steady-state, serta penerapan DES dalam konteks sistem yang lebih kompleks dan dinamis.

---

Dokumen ini memberikan gambaran menyeluruh tentang metodologi simulasi sistem peristiwa diskrit, dengan fokus pada arsitektur Kelton-Sadowski, penyesuaian distribusi probabilitas, dan pemanasan steady-state. Dengan pemahaman yang mendalam tentang konsep-konsep ini, para profesional di bidang teknik industri dapat mengoptimalkan sistem mereka untuk mencapai efisiensi yang lebih tinggi dan biaya yang lebih rendah.