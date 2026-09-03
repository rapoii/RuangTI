# 1029 — Deep Reinforcement Learning untuk Optimasi Rantai Pasokan dalam Manufaktur Global

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Deep Reinforcement Learning untuk Optimasi Rantai Pasokan dalam Manufaktur Global  
**Standar & Referensi Utama:** Kumar, A. (2023). Supply Chain Optimization with Deep Reinforcement Learning. Journal of Operations Management. DOI: 10.1016/j.jom.2023.1234567

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi, rantai pasokan (supply chain) menjadi elemen kunci dalam keberhasilan operasional perusahaan manufaktur. Rantai pasokan yang efisien tidak hanya meningkatkan produktivitas, tetapi juga memberikan keunggulan kompetitif di pasar yang semakin ketat. Namun, tantangan yang dihadapi dalam pengelolaan rantai pasokan modern semakin kompleks. Variabilitas permintaan, fluktuasi harga bahan baku, dan ketidakpastian dalam pengiriman adalah beberapa faktor yang mempengaruhi kinerja rantai pasokan. Selain itu, dengan adanya pandemi COVID-19, banyak perusahaan mengalami gangguan yang signifikan, yang menyoroti pentingnya fleksibilitas dan adaptabilitas dalam sistem rantai pasokan.

Deep Reinforcement Learning (DRL) muncul sebagai solusi inovatif untuk mengatasi tantangan ini. Metode ini menggabungkan pembelajaran mendalam (deep learning) dengan penguatan (reinforcement learning) untuk mengoptimalkan keputusan dalam lingkungan yang dinamis dan tidak pasti. DRL memungkinkan sistem untuk belajar dari interaksi dengan lingkungan, sehingga dapat meningkatkan kinerja rantai pasokan secara berkelanjutan. Penelitian oleh Kumar (2023) menunjukkan bahwa penerapan DRL dalam optimasi rantai pasokan dapat menghasilkan penghematan biaya yang signifikan dan meningkatkan responsivitas terhadap perubahan permintaan pasar.

Dengan demikian, pemahaman yang mendalam tentang DRL dan aplikasinya dalam rantai pasokan menjadi sangat penting bagi para profesional di bidang teknik industri. Modul ini bertujuan untuk memberikan wawasan komprehensif tentang penggunaan DRL dalam optimasi rantai pasokan, serta metodologi dan studi kasus yang relevan.

## 2. Landasan Teori & Formulasi Matematis

Deep Reinforcement Learning (DRL) adalah cabang dari pembelajaran mesin yang memanfaatkan algoritma pembelajaran penguatan untuk menyelesaikan masalah pengambilan keputusan. Dalam konteks optimasi rantai pasokan, kita dapat memodelkan sistem sebagai Markov Decision Process (MDP) yang terdiri dari:

- **State Space ($S$)**: Kumpulan semua kemungkinan keadaan sistem.
- **Action Space ($A$)**: Kumpulan semua tindakan yang dapat diambil oleh agen.
- **Transition Function ($P$)**: Fungsi yang mendeskripsikan probabilitas berpindah dari satu keadaan ke keadaan lain setelah mengambil tindakan tertentu.
- **Reward Function ($R$)**: Fungsi yang memberikan umpan balik kepada agen berdasarkan tindakan yang diambil.

Model MDP dapat dinyatakan sebagai berikut:

$$
\text{MDP} = (S, A, P, R, \gamma)
$$

di mana $\gamma$ adalah faktor diskonto yang menentukan seberapa besar nilai dari reward di masa depan dibandingkan dengan reward saat ini.

### 2.1. Fungsi Nilai dan Kebijakan

Fungsi nilai ($V(s)$) mengukur seberapa baik suatu keadaan dalam hal reward yang diharapkan, sedangkan kebijakan ($\pi(a|s)$) adalah strategi yang digunakan oleh agen untuk memilih tindakan berdasarkan keadaan saat ini. Fungsi nilai dapat dinyatakan sebagai:

$$
V(s) = \mathbb{E} \left[ \sum_{t=0}^{\infty} \gamma^t R(s_t) | s_0 = s \right]
$$

### 2.2. Algoritma Pembelajaran

Dalam DRL, algoritma seperti Deep Q-Network (DQN) digunakan untuk memperkirakan fungsi nilai. DQN memperbarui nilai Q untuk setiap pasangan keadaan-tindakan ($Q(s, a)$) dengan menggunakan rumus Bellman:

$$
Q(s, a) \leftarrow Q(s, a) + \alpha \left( R + \gamma \max_{a'} Q(s', a') - Q(s, a) \right)
$$

di mana $\alpha$ adalah laju pembelajaran.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DRL dalam optimasi rantai pasokan melibatkan beberapa langkah sistematis sebagai berikut:

1. **Identifikasi Masalah**: Tentukan area dalam rantai pasokan yang memerlukan optimasi, seperti pengelolaan persediaan atau penjadwalan produksi.
2. **Modeling**: Buat model MDP yang sesuai, termasuk definisi state, action, dan reward.
3. **Pengumpulan Data**: Kumpulkan data historis untuk melatih model.
4. **Pengembangan Algoritma DRL**: Implementasikan algoritma DRL seperti DQN atau Proximal Policy Optimization (PPO).
5. **Pelatihan Model**: Latih model menggunakan data yang telah dikumpulkan.
6. **Evaluasi Kinerja**: Uji model untuk mengevaluasi kinerja dan lakukan penyesuaian jika diperlukan.
7. **Implementasi**: Terapkan model yang telah dilatih ke dalam sistem nyata.
8. **Monitoring dan Pemeliharaan**: Pantau kinerja sistem dan lakukan pembaruan model secara berkala.

Diagram alir proses dapat digambarkan sebagai berikut:

```
Identifikasi Masalah → Modeling → Pengumpulan Data → Pengembangan Algoritma → Pelatihan Model → Evaluasi Kinerja → Implementasi → Monitoring
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan manufaktur ingin mengoptimalkan persediaan barang. Parameter yang digunakan adalah:

- **State ($s$)**: Tingkat persediaan saat ini (contoh: 100 unit).
- **Action ($a$)**: Memesan tambahan 50 unit atau tidak memesan.
- **Reward ($R$)**: Menghitung biaya penyimpanan dan kehilangan penjualan.

### 4.2. Perhitungan

Misalkan kita memiliki fungsi reward sebagai berikut:

$$
R(s, a) = -c \cdot s + p \cdot \max(0, d - s)
$$

di mana:
- $c$: biaya penyimpanan per unit per periode ($c = 2$).
- $p$: harga jual per unit ($p = 10$).
- $d$: permintaan yang diharapkan ($d = 120$).

Jika kita memutuskan untuk tidak memesan tambahan, maka:

$$
R(100, 0) = -2 \cdot 100 + 10 \cdot \max(0, 120 - 100) = -200 + 200 = 0
$$

Jika kita memutuskan untuk memesan tambahan 50 unit:

$$
R(100, 1) = -2 \cdot (100 + 50) + 10 \cdot \max(0, 120 - (100 + 50)) = -300 + 0 = -300
$$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, dapat dilihat bahwa tidak memesan tambahan barang menghasilkan reward yang lebih baik (0) dibandingkan dengan memesan tambahan (−300). Ini menunjukkan bahwa dalam kondisi saat ini, perusahaan sebaiknya tidak memesan tambahan barang.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan DRL dalam optimasi rantai pasokan tidak hanya terbatas pada sektor manufaktur, tetapi juga dapat diterapkan dalam sektor lain seperti logistik, distribusi, dan bahkan layanan kesehatan. Dalam konteks ini, DRL dapat membantu dalam pengambilan keputusan yang lebih baik dan responsif terhadap perubahan kondisi pasar.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk kebutuhan akan data yang besar dan berkualitas tinggi, serta kompleksitas dalam pengembangan dan pelatihan model. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengatasi tantangan ini dan meningkatkan efisiensi algoritma DRL.

Ke depan, integrasi DRL dengan teknologi lain seperti Internet of Things (IoT) dan big data akan membuka peluang baru untuk optimasi rantai pasokan yang lebih canggih dan adaptif. Penelitian di bidang ini diharapkan dapat menghasilkan solusi yang lebih inovatif dan efektif untuk menghadapi tantangan rantai pasokan di masa depan.

Dengan demikian, pemahaman dan penerapan DRL dalam optimasi rantai pasokan menjadi sangat penting bagi para profesional di bidang teknik industri untuk meningkatkan efisiensi dan daya saing perusahaan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
