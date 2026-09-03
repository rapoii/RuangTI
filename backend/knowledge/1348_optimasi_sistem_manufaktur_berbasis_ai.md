# 1348 — Optimasi Berbasis AI pada Sistem Manufaktur: Pendekatan Jaringan Saraf Terinformasi Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** AI-Based Optimization of Manufacturing Systems: A Physics-Informed Neural Network Approach  
**Standar & Referensi Utama:** Taylor, S. & Kim, J. (2024). 'Optimization Techniques in Manufacturing'. International Journal of Advanced Manufacturing Technology. DOI: 10.1007/s00170-024-06234-5; ISO 3834 - Quality Requirements for Fusion Welding.

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tantangan yang kompleks, mulai dari peningkatan efisiensi produksi hingga pengurangan biaya operasional. Dengan adanya globalisasi dan persaingan yang semakin ketat, perusahaan dituntut untuk berinovasi dan mengadopsi teknologi terbaru untuk tetap relevan. Salah satu teknologi yang menjanjikan adalah kecerdasan buatan (AI), yang dapat digunakan untuk mengoptimalkan proses manufaktur. 

Konteks ini semakin mendesak mengingat kebutuhan untuk meningkatkan produktivitas sambil memenuhi standar kualitas yang ketat. Misalnya, ISO 3834 menetapkan persyaratan kualitas untuk pengelasan, yang merupakan aspek krusial dalam banyak proses manufaktur. Dalam hal ini, penerapan teknik optimasi berbasis AI, khususnya melalui pendekatan Jaringan Saraf Terinformasi Fisika (PINN), dapat membantu dalam memprediksi dan mengoptimalkan parameter proses, sehingga mengurangi cacat dan meningkatkan kualitas produk akhir.

Tantangan utama yang dihadapi oleh industri adalah ketidakpastian dalam proses produksi dan variabilitas dalam input material. Dengan menggunakan model yang diinformasikan oleh fisika, kita dapat mengintegrasikan pengetahuan domain ke dalam algoritma pembelajaran mesin, sehingga meningkatkan akurasi prediksi dan efisiensi proses. Penelitian oleh Taylor dan Kim (2024) menunjukkan bahwa penerapan teknik optimasi yang tepat dapat menghasilkan peningkatan signifikan dalam efisiensi dan kualitas produk.

## 2. Landasan Teori & Formulasi Matematis

Pendekatan Jaringan Saraf Terinformasi Fisika (PINN) menggabungkan prinsip-prinsip fisika dengan algoritma pembelajaran mesin untuk memodelkan sistem kompleks. Dalam konteks ini, kita dapat mendefinisikan fungsi loss yang menggabungkan kesalahan prediksi dari jaringan saraf dengan persamaan diferensial yang menggambarkan fenomena fisik yang relevan.

Misalkan kita memiliki sistem yang dijelaskan oleh persamaan diferensial parsial (PDE):

$$
\frac{\partial u}{\partial t} + \nabla \cdot \mathbf{F}(u) = 0
$$

di mana $u$ adalah variabel yang ingin kita prediksi dan $\mathbf{F}$ adalah fungsi aliran. Fungsi loss total dapat dinyatakan sebagai:

$$
L_{total} = L_{data} + \lambda L_{PDE}
$$

di mana:
- $L_{data}$ adalah kesalahan antara prediksi dan data observasi,
- $L_{PDE}$ adalah kesalahan yang dihasilkan dari ketidakpuasan terhadap PDE,
- $\lambda$ adalah bobot yang menentukan kontribusi masing-masing komponen.

Definisi variabel:
- $u$: variabel output yang diprediksi (misalnya, suhu, tekanan).
- $\mathbf{F}(u)$: fungsi aliran yang menggambarkan interaksi dalam sistem.

Dengan menggunakan teknik optimasi seperti Adam atau SGD, kita dapat meminimalkan fungsi loss ini untuk mendapatkan model yang optimal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem optimasi berbasis PINN dapat dilakukan melalui langkah-langkah berikut:

1. **Pengumpulan Data**: Kumpulkan data historis dari proses manufaktur yang relevan, termasuk parameter input dan output.
2. **Pemodelan Fisika**: Identifikasi dan formulasi persamaan fisika yang relevan untuk sistem yang sedang dianalisis.
3. **Desain Jaringan Saraf**: Rancang arsitektur jaringan saraf yang sesuai, dengan mempertimbangkan jumlah lapisan dan neuron.
4. **Pelatihan Model**: Gunakan data yang dikumpulkan untuk melatih model dengan meminimalkan fungsi loss yang telah didefinisikan.
5. **Validasi Model**: Uji model dengan data yang tidak terlihat untuk memastikan akurasi dan generalisasi.
6. **Implementasi dan Monitoring**: Terapkan model dalam sistem produksi dan lakukan monitoring untuk penyesuaian lebih lanjut.

Diagram alir proses dapat digambarkan sebagai berikut:

```
Pengumpulan Data → Pemodelan Fisika → Desain Jaringan Saraf → Pelatihan Model → Validasi Model → Implementasi
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang memproduksi komponen otomotif. Data historis menunjukkan bahwa suhu pengelasan ($u$) berpengaruh signifikan terhadap kualitas sambungan. Misalkan kita memiliki data berikut:

- Suhu target: 1500 °C
- Suhu aktual: 1450 °C
- Fungsi aliran: $\mathbf{F}(u) = k \cdot (u - u_{target})^2$, dengan $k$ adalah konstanta material.

Kita ingin meminimalkan kesalahan antara suhu aktual dan suhu target. Fungsi loss dapat ditentukan sebagai:

$$
L_{data} = (u_{actual} - u_{target})^2 = (1450 - 1500)^2 = 2500
$$

Dengan asumsi $k = 0.1$, kita dapat menghitung $L_{PDE}$:

$$
L_{PDE} = \int (u - u_{target})^2 \, dx \approx k \cdot (1450 - 1500)^2 = 0.1 \cdot 2500 = 250
$$

Fungsi loss total menjadi:

$$
L_{total} = 2500 + 250 = 2750
$$

Setelah pelatihan model, kita menemukan bahwa dengan penyesuaian parameter, suhu pengelasan dapat ditingkatkan menjadi 1480 °C, yang mengurangi kesalahan menjadi:

$$
L_{data} = (1480 - 1500)^2 = 400
$$

Dengan $L_{PDE}$ tetap sama, fungsi loss total baru menjadi:

$$
L_{total} = 400 + 250 = 650
$$

Interpretasi hasil menunjukkan bahwa dengan penerapan model PINN, kita berhasil mengurangi kesalahan prediksi dan meningkatkan kualitas produk.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan teknik optimasi berbasis AI tidak hanya terbatas pada manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin, termasuk rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, integrasi model prediktif dapat membantu dalam perencanaan yang lebih baik dan pengurangan biaya inventaris.

Namun, terdapat batasan dalam metodologi ini, seperti kebutuhan akan data yang berkualitas tinggi dan pemahaman yang mendalam tentang fisika sistem. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengatasi tantangan ini dan mengembangkan model yang lebih robust.

Arah riset masa depan dapat mencakup pengembangan algoritma yang lebih efisien, integrasi dengan teknologi IoT untuk pengumpulan data real-time, serta penerapan teknik pembelajaran mendalam untuk meningkatkan akurasi prediksi. Dengan demikian, optimasi berbasis AI akan terus menjadi pilar penting dalam transformasi industri manufaktur menuju efisiensi dan keberlanjutan yang lebih besar.