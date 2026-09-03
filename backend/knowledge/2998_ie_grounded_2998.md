# 2998 — Model Ketahanan Logistik Rantai Dingin untuk Produk Perishable

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products  
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)  
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik rantai dingin memainkan peran krusial dalam menjaga kualitas produk perishable, seperti makanan dan vaksin, selama proses distribusi. Dalam konteks ini, ketahanan sistem logistik menjadi sangat penting, terutama ketika menghadapi tantangan seperti fluktuasi suhu, kerusakan alat, dan gangguan lainnya yang dapat mempengaruhi integritas produk. Khurshid dan Siddiqui (2024) mengemukakan bahwa model ketahanan yang efektif untuk logistik rantai dingin harus mampu mengidentifikasi dan mengatasi risiko-risiko ini secara proaktif. Penelitian ini menyoroti pentingnya pengembangan strategi yang tidak hanya reaktif tetapi juga preventif dalam menjaga kualitas produk selama transportasi dan penyimpanan.

Salah satu tantangan utama dalam logistik rantai dingin adalah pemantauan suhu yang akurat dan real-time. Darman Putra et al. (2024) menjelaskan bahwa Dinas Kesehatan Kabupaten Siak menghadapi masalah dalam menjaga kualitas vaksin akibat kurangnya sistem pemantauan suhu yang efektif. Proses pencatatan suhu yang masih dilakukan secara manual setiap dua jam menambah risiko kerusakan produk. Oleh karena itu, penerapan teknologi Internet of Things (IoT) dalam sistem pemantauan suhu menjadi solusi yang menjanjikan untuk meningkatkan efisiensi dan akurasi dalam menjaga kualitas vaksin.

Kedua penelitian ini menekankan pentingnya integrasi teknologi dan pengembangan model ketahanan yang komprehensif dalam logistik rantai dingin, yang tidak hanya berfokus pada aspek teknis tetapi juga pada manajemen risiko dan pengambilan keputusan yang berbasis data.

## 2. Landasan Teori & Formulasi Matematis

Model ketahanan dalam logistik rantai dingin dapat dirumuskan dengan menggunakan pendekatan matematis yang menggabungkan variabel-variabel kunci seperti suhu, waktu, dan kondisi lingkungan. Misalkan kita mendefinisikan beberapa variabel sebagai berikut:

- $T$: Suhu dalam derajat Celsius
- $t$: Waktu dalam jam
- $S$: Status kualitas produk (1 = baik, 0 = buruk)
- $R$: Resiko kerusakan produk

Model ketahanan dapat dinyatakan dalam bentuk fungsi tujuan yang meminimalkan risiko kerusakan produk:

$$
\min R(T, t) = \alpha \cdot f(T) + \beta \cdot g(t)
$$

Di mana:
- $f(T)$ adalah fungsi yang menggambarkan hubungan antara suhu dan kualitas produk.
- $g(t)$ adalah fungsi yang menggambarkan dampak waktu terhadap kualitas produk.
- $\alpha$ dan $\beta$ adalah koefisien yang menunjukkan sensitivitas terhadap suhu dan waktu.

Fungsi $f(T)$ dapat dinyatakan sebagai:

$$
f(T) = 
\begin{cases} 
0 & \text{jika } T \leq T_{min} \\ 
\frac{T - T_{min}}{T_{max} - T_{min}} & \text{jika } T_{min} < T < T_{max} \\ 
1 & \text{jika } T \geq T_{max} 
\end{cases}
$$

Di mana $T_{min}$ dan $T_{max}$ adalah batas suhu yang aman untuk produk perishable. Dengan menggunakan model ini, kita dapat menganalisis dan memprediksi risiko kerusakan produk berdasarkan kondisi suhu dan waktu.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem pemantauan suhu yang efektif dalam logistik rantai dingin memerlukan langkah-langkah sistematis sebagai berikut:

1. **Identifikasi Kebutuhan**: Menentukan parameter suhu yang kritis untuk produk perishable yang akan dipantau.
2. **Pemilihan Teknologi**: Memilih sensor suhu yang tepat, seperti sensor DS18B20, yang dapat memberikan pembacaan suhu secara real-time.
3. **Desain Sistem**: Mengembangkan arsitektur sistem yang mengintegrasikan sensor dengan platform IoT untuk pemantauan dan pengendalian suhu.
4. **Pengujian dan Validasi**: Melakukan pengujian untuk memastikan bahwa sistem berfungsi dengan baik dan dapat memberikan peringatan dini jika terjadi penyimpangan suhu.
5. **Pelatihan Pengguna**: Melatih apoteker dan staf terkait untuk menggunakan sistem pemantauan suhu dan memahami prosedur darurat jika terjadi kerusakan.

Diagram alir proses pemantauan suhu dapat digambarkan sebagai berikut:

```
[Mulai] --> [Identifikasi Kebutuhan] --> [Pemilihan Teknologi] --> [Desain Sistem] --> [Pengujian] --> [Pelatihan Pengguna] --> [Sistem Beroperasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas tentang penerapan model ketahanan dalam logistik rantai dingin, mari kita lakukan perhitungan numerik berdasarkan parameter yang realistis.

Misalkan kita memiliki produk vaksin yang harus disimpan pada suhu antara 2°C dan 8°C. Kita akan menggunakan data berikut:

- $T_{min} = 2°C$
- $T_{max} = 8°C$
- Suhu aktual yang terdeteksi $T = 10°C$ selama 1 jam.

Dengan menggunakan fungsi $f(T)$, kita dapat menghitung risiko kerusakan produk:

$$
f(T) = 
\begin{cases} 
0 & \text{jika } T \leq 2 \\ 
\frac{10 - 2}{8 - 2} = \frac{8}{6} = 1.33 & \text{jika } 2 < T < 8 \\ 
1 & \text{jika } T \geq 8 
\end{cases}
$$

Karena suhu aktual $T = 10°C$, maka:

$$
f(T) = 1
$$

Dengan asumsi $\alpha = 0.6$ dan $\beta = 0.4$, kita dapat menghitung risiko kerusakan produk:

$$
R(T, t) = 0.6 \cdot f(T) + 0.4 \cdot g(t)
$$

Jika kita asumsikan $g(t) = 0.5$ untuk waktu 1 jam, maka:

$$
R(T, t) = 0.6 \cdot 1 + 0.4 \cdot 0.5 = 0.6 + 0.2 = 0.8
$$

Interpretasi hasil ini menunjukkan bahwa risiko kerusakan produk cukup tinggi (80%) jika suhu tidak dikendalikan dengan baik. Oleh karena itu, penerapan sistem pemantauan suhu yang efektif sangat penting untuk menjaga kualitas vaksin.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun model ketahanan yang diusulkan oleh Khurshid dan Siddiqui (2024) memberikan kerangka kerja yang kuat untuk meningkatkan logistik rantai dingin, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah ketergantungan pada teknologi yang mungkin tidak selalu tersedia di semua lokasi. Selain itu, biaya implementasi sistem pemantauan suhu yang canggih dapat menjadi kendala bagi beberapa organisasi.

Dibandingkan dengan metode konvensional yang mengandalkan pencatatan manual, penerapan teknologi IoT dalam pemantauan suhu menawarkan keunggulan yang signifikan dalam hal akurasi dan responsivitas. Aplikasi lintas sektor, seperti dalam industri makanan dan farmasi, menunjukkan bahwa pendekatan ini dapat diterapkan secara luas untuk meningkatkan efisiensi dan keamanan produk.

Ke depan, agenda riset lanjutan harus fokus pada pengembangan teknologi yang lebih terjangkau dan mudah diakses, serta integrasi sistem pemantauan dengan analitik data untuk pengambilan keputusan yang lebih baik. Dengan demikian, model ketahanan dalam logistik rantai dingin dapat terus berkembang dan beradaptasi dengan kebutuhan industri yang berubah.