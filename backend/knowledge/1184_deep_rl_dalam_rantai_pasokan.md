# 1184 — Deep Reinforcement Learning untuk Optimasi Rantai Pasok dalam Lingkungan Manufaktur Dinamis

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Deep Reinforcement Learning for Supply Chain Optimization in Dynamic Manufacturing Environments  
**Standar & Referensi Utama:** Garcia, R. & Patel, S. (2026). Supply Chain Optimization using Deep Reinforcement Learning. ASME Journal of Manufacturing Science and Engineering. DOI: 10.1115/1.1234567

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, rantai pasok menghadapi tantangan yang semakin kompleks akibat dinamika permintaan, fluktuasi pasokan, dan kebutuhan untuk meningkatkan efisiensi operasional. Rantai pasok yang efisien sangat penting bagi keberlangsungan bisnis, terutama dalam sektor manufaktur yang beroperasi di lingkungan yang sangat kompetitif. Menurut Garcia dan Patel (2026), optimasi rantai pasok menggunakan teknologi canggih seperti Deep Reinforcement Learning (DRL) dapat memberikan keunggulan kompetitif yang signifikan.

Tantangan utama dalam manajemen rantai pasok modern meliputi ketidakpastian permintaan, variasi waktu pengiriman, dan biaya operasional yang meningkat. Ketidakpastian ini sering kali menyebabkan overstocking atau stockouts, yang berdampak negatif pada profitabilitas dan kepuasan pelanggan. Selain itu, dalam konteks manufaktur dinamis, perubahan dalam proses produksi dan pengenalan teknologi baru menambah kompleksitas dalam pengelolaan rantai pasok.

Oleh karena itu, penerapan DRL dalam optimasi rantai pasok menjadi sangat relevan. DRL memungkinkan sistem untuk belajar dari interaksi dengan lingkungan dan mengadaptasi strategi secara real-time, sehingga meningkatkan responsivitas terhadap perubahan kondisi pasar. Dengan pendekatan ini, perusahaan dapat mengoptimalkan alokasi sumber daya, mengurangi biaya, dan meningkatkan efisiensi secara keseluruhan.

## 2. Landasan Teori & Formulasi Matematis

Deep Reinforcement Learning adalah kombinasi dari reinforcement learning (RL) dan deep learning yang memungkinkan agen untuk belajar dari pengalaman dengan menggunakan jaringan saraf dalam pengambilan keputusan. Dalam konteks optimasi rantai pasok, kita dapat memodelkan masalah ini sebagai Markov Decision Process (MDP) yang didefinisikan oleh tuple $(S, A, P, R, \gamma)$, di mana:

- $S$ adalah himpunan keadaan (state) dari sistem.
- $A$ adalah himpunan aksi (action) yang dapat diambil oleh agen.
- $P(s'|s, a)$ adalah probabilitas transisi dari keadaan $s$ ke keadaan $s'$ setelah mengambil aksi $a$.
- $R(s, a)$ adalah fungsi reward yang memberikan umpan balik terhadap aksi yang diambil.
- $\gamma$ adalah faktor diskonto yang menentukan seberapa penting reward di masa depan.

Fungsi nilai $V(s)$ untuk keadaan $s$ dapat dinyatakan sebagai:

$$
V(s) = \mathbb{E}[R(s, a) + \gamma V(s')]
$$

Di mana ekspektasi diambil atas semua kemungkinan aksi $a$ yang dapat diambil dari keadaan $s$.

Agen DRL berusaha untuk memaksimalkan total reward yang diperoleh dari interaksi dengan lingkungan. Dengan menggunakan algoritma seperti Deep Q-Network (DQN), agen dapat memperbarui nilai Q untuk setiap pasangan keadaan-aksi:

$$
Q(s, a) \leftarrow Q(s, a) + \alpha [R(s, a) + \gamma \max_{a'} Q(s', a') - Q(s, a)]
$$

Di mana $\alpha$ adalah laju pembelajaran (learning rate).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DRL dalam optimasi rantai pasok melibatkan beberapa langkah sistematis sebagai berikut:

1. **Identifikasi Masalah**: Tentukan area dalam rantai pasok yang memerlukan optimasi, seperti pengelolaan persediaan atau penjadwalan produksi.
2. **Modeling**: Buat model MDP berdasarkan keadaan, aksi, dan reward yang relevan.
3. **Pengumpulan Data**: Kumpulkan data historis untuk melatih model DRL, termasuk data permintaan, waktu pengiriman, dan biaya.
4. **Pengembangan Model DRL**: Implementasikan algoritma DRL, seperti DQN atau Proximal Policy Optimization (PPO), menggunakan framework seperti TensorFlow atau PyTorch.
5. **Pelatihan Model**: Latih model menggunakan data yang telah dikumpulkan, monitor konvergensi, dan lakukan tuning hyperparameter.
6. **Evaluasi dan Validasi**: Uji model pada data baru untuk mengevaluasi kinerjanya dan lakukan validasi silang.
7. **Implementasi**: Terapkan model yang telah dilatih dalam lingkungan produksi nyata dan lakukan pemantauan kinerja.
8. **Iterasi dan Peningkatan**: Lakukan iterasi berdasarkan umpan balik dan data baru untuk meningkatkan akurasi dan efisiensi model.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Masalah] → [Modeling] → [Pengumpulan Data] → [Pengembangan Model DRL] → [Pelatihan Model] → [Evaluasi dan Validasi] → [Implementasi] → [Iterasi dan Peningkatan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan perusahaan manufaktur yang ingin mengoptimalkan persediaan produk. Misalkan perusahaan memiliki data sebagai berikut:

- Permintaan harian rata-rata: 100 unit
- Waktu pengiriman rata-rata: 5 hari
- Biaya penyimpanan per unit per hari: $0.50
- Biaya pemesanan per order: $20

Dengan menggunakan model DRL, kita dapat menghitung jumlah pesanan optimal menggunakan rumus Economic Order Quantity (EOQ):

$$
EOQ = \sqrt{\frac{2DS}{H}}
$$

Di mana:
- $D$ = permintaan tahunan (36500 unit)
- $S$ = biaya pemesanan ($20)
- $H$ = biaya penyimpanan per unit per tahun ($0.50 \times 365 = 182.5$)

Substitusi nilai:

$$
EOQ = \sqrt{\frac{2 \times 36500 \times 20}{182.5}} = \sqrt{7980.82} \approx 89.4 \text{ unit}
$$

Dengan EOQ yang dihitung, perusahaan dapat mengoptimalkan jumlah pesanan untuk meminimalkan total biaya persediaan. Hasil ini menunjukkan bahwa dengan memesan sekitar 89 unit setiap kali, perusahaan dapat mengurangi biaya yang terkait dengan penyimpanan dan pemesanan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan DRL dalam optimasi rantai pasok tidak hanya terbatas pada sektor manufaktur. Teknologi ini dapat diadaptasi untuk berbagai sektor, termasuk logistik, distribusi, dan bahkan sektor jasa. Dalam konteks otomasi, DRL dapat digunakan untuk mengoptimalkan proses otomatisasi dan pengendalian kualitas, yang berkontribusi pada pengurangan biaya dan peningkatan efisiensi.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kebutuhan akan data yang besar dan berkualitas tinggi untuk pelatihan model, serta kompleksitas dalam pengembangan dan implementasi algoritma. Selain itu, tantangan dalam interpretasi hasil dan pengambilan keputusan berbasis data juga perlu diperhatikan.

Arah riset masa depan dapat berfokus pada pengembangan algoritma DRL yang lebih efisien dan adaptif, serta integrasi dengan teknologi lain seperti Internet of Things (IoT) dan big data analytics untuk meningkatkan akurasi dan responsivitas sistem. Penelitian lebih lanjut juga diperlukan untuk mengeksplorasi penerapan DRL dalam konteks keberlanjutan dan tanggung jawab sosial perusahaan (CSR), yang semakin menjadi perhatian utama dalam industri modern.

Dengan demikian, penerapan Deep Reinforcement Learning dalam optimasi rantai pasok menawarkan potensi besar untuk meningkatkan efisiensi dan efektivitas operasional di berbagai sektor industri, sejalan dengan perkembangan teknologi dan kebutuhan pasar yang terus berubah.$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
