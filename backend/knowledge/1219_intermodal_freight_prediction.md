# 1219 — Prediksi Permintaan dalam Jaringan Freight Intermodal Menggunakan Model Pembelajaran Dalam

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Prediksi Permintaan dalam Jaringan Freight Intermodal Menggunakan Model Pembelajaran Dalam  
**Standar & Referensi Utama:** Wang, Y. et al. (2026). 'Deep Learning Models for Demand Prediction in Intermodal Freight Networks'. Transportation Research Part E: Logistics and Transportation Review, 159, 102-115. DOI:10.1016/j.tre.2026.01.007.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan digitalisasi, industri logistik dan transportasi mengalami transformasi yang signifikan. Jaringan freight intermodal, yang menggabungkan berbagai moda transportasi seperti kereta api, truk, dan kapal, menjadi sangat penting dalam memenuhi permintaan pasar yang terus meningkat. Prediksi permintaan yang akurat dalam jaringan ini tidak hanya berpengaruh pada efisiensi operasional, tetapi juga pada pengelolaan biaya dan kepuasan pelanggan. 

Tantangan utama dalam prediksi permintaan adalah ketidakpastian yang tinggi yang disebabkan oleh fluktuasi permintaan, perubahan kebijakan, dan variabilitas dalam kondisi pasar. Menurut Wang et al. (2026), penggunaan model pembelajaran dalam (deep learning) telah menunjukkan potensi yang besar dalam meningkatkan akurasi prediksi permintaan. Model ini mampu menangkap pola kompleks dalam data historis yang tidak dapat diidentifikasi oleh metode tradisional.

Konteks industri ini sangat relevan, mengingat bahwa kesalahan dalam prediksi permintaan dapat mengakibatkan biaya yang tinggi akibat kelebihan atau kekurangan kapasitas. Oleh karena itu, pengembangan dan implementasi model pembelajaran dalam untuk prediksi permintaan dalam jaringan freight intermodal menjadi sangat penting untuk meningkatkan daya saing dan efisiensi operasional di sektor ini.

## 2. Landasan Teori & Formulasi Matematis

Model pembelajaran dalam untuk prediksi permintaan memanfaatkan jaringan saraf tiruan (neural networks) yang terdiri dari beberapa lapisan. Dalam konteks ini, kita dapat menggunakan model jaringan saraf berulang (Recurrent Neural Network, RNN) atau Long Short-Term Memory (LSTM) untuk menangkap dependensi temporal dalam data permintaan.

Model dasar dari RNN dapat dinyatakan dengan persamaan berikut:

$$
h_t = f(W_h h_{t-1} + W_x x_t + b_h)
$$

di mana:
- $h_t$ adalah keadaan tersembunyi pada waktu $t$.
- $W_h$ adalah bobot antara keadaan tersembunyi sebelumnya dan saat ini.
- $W_x$ adalah bobot input saat ini.
- $x_t$ adalah input pada waktu $t$.
- $b_h$ adalah bias.

Output dari model dapat dinyatakan sebagai:

$$
y_t = W_y h_t + b_y
$$

di mana:
- $y_t$ adalah output pada waktu $t$.
- $W_y$ adalah bobot output.
- $b_y$ adalah bias output.

Proses pelatihan model dilakukan dengan meminimalkan fungsi loss, seperti Mean Squared Error (MSE):

$$
L = \frac{1}{N} \sum_{t=1}^{N} (y_t - \hat{y}_t)^2
$$

di mana $\hat{y}_t$ adalah prediksi model pada waktu $t$ dan $N$ adalah jumlah data.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model pembelajaran dalam untuk prediksi permintaan dalam jaringan freight intermodal dapat dilakukan melalui langkah-langkah berikut:

1. **Pengumpulan Data**: Kumpulkan data historis permintaan, termasuk faktor-faktor yang mempengaruhi permintaan seperti musim, harga, dan kondisi ekonomi.
2. **Pra-pemrosesan Data**: Normalisasi data dan pembagian menjadi set pelatihan, validasi, dan pengujian.
3. **Pengembangan Model**: Pilih arsitektur model (misalnya, LSTM) dan tentukan parameter seperti jumlah lapisan dan neuron.
4. **Pelatihan Model**: Latih model menggunakan data pelatihan dengan optimasi parameter menggunakan algoritma seperti Adam atau RMSprop.
5. **Evaluasi Model**: Uji model menggunakan data validasi dan evaluasi kinerjanya menggunakan metrik seperti MSE atau R-squared.
6. **Implementasi dan Monitoring**: Terapkan model dalam sistem operasional dan lakukan pemantauan kinerja secara berkala untuk penyesuaian.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Pra-pemrosesan Data] --> [Pengembangan Model] --> [Pelatihan Model] --> [Evaluasi Model] --> [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan perusahaan logistik yang ingin memprediksi permintaan pengiriman barang selama bulan mendatang. Data historis menunjukkan permintaan bulanan selama 12 bulan terakhir sebagai berikut (dalam satuan ton):

| Bulan | Permintaan |
|-------|------------|
| 1     | 200        |
| 2     | 220        |
| 3     | 250        |
| 4     | 270        |
| 5     | 300        |
| 6     | 320        |
| 7     | 350        |
| 8     | 370        |
| 9     | 400        |
| 10    | 420        |
| 11    | 450        |
| 12    | 480        |

Dengan menggunakan model LSTM, kita dapat memprediksi permintaan untuk bulan ke-13. Misalkan setelah pelatihan, model memberikan output prediksi sebagai berikut:

$$
\hat{y}_{13} = 490 \text{ ton}
$$

Interpretasi hasil ini menunjukkan bahwa perusahaan harus mempersiapkan kapasitas pengiriman yang cukup untuk memenuhi permintaan yang diprediksi. Jika tidak, perusahaan berisiko kehilangan pelanggan akibat keterlambatan pengiriman.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Prediksi permintaan menggunakan model pembelajaran dalam tidak hanya relevan dalam konteks freight intermodal, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti manajemen rantai pasok, otomasi, dan manajemen biaya. Dalam konteks manajemen rantai pasok, akurasi prediksi permintaan dapat mengurangi biaya penyimpanan dan meningkatkan efisiensi distribusi.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk kebutuhan akan data yang berkualitas tinggi dan kompleksitas model yang dapat menyebabkan overfitting. Oleh karena itu, riset masa depan perlu fokus pada pengembangan teknik regularisasi dan pemanfaatan data eksternal untuk meningkatkan akurasi model.

Dengan demikian, penggunaan model pembelajaran dalam untuk prediksi permintaan dalam jaringan freight intermodal menunjukkan potensi yang besar untuk meningkatkan efisiensi operasional dan daya saing industri logistik. Penelitian lebih lanjut diperlukan untuk mengeksplorasi integrasi teknologi baru dan pengembangan metodologi yang lebih adaptif terhadap perubahan pasar.