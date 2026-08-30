# 850 — Teori Permainan Kooperatif dan Alokasi Nilai Shapley dalam Kolaborasi Pengangkut Logistik Horizontal: Stabilitas Inti, Solusi Nucleolus, dan Pembagian Penghematan Biaya yang Adil

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Cooperative Game Theory and Shapley Value Allocation in Horizontal Logistics Carrier Collaboration: Core Stability, Nucleolus Solution, and Fair Cost Savings Sharing  
**Standar & Referensi Utama:** Frisk et al. (2022, Transp. Res. Part E); Shapley (Contributions to the Theory of Games); Tijs & Driessen  

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, industri logistik menghadapi tantangan yang signifikan dalam hal efisiensi operasional dan pengurangan biaya. Kolaborasi antara pengangkut logistik horizontal menjadi semakin penting untuk mencapai tujuan ini. Kolaborasi ini memungkinkan perusahaan untuk berbagi sumber daya, mengurangi biaya transportasi, dan meningkatkan layanan pelanggan. Namun, tantangan utama dalam kolaborasi ini adalah bagaimana membagi penghematan biaya secara adil di antara para peserta. Teori permainan kooperatif, khususnya konsep nilai Shapley, memberikan kerangka kerja yang kuat untuk menangani masalah ini.

Frisk et al. (2022) menyoroti pentingnya kolaborasi dalam pengangkutan barang dan bagaimana penggunaan teori permainan dapat membantu dalam pengambilan keputusan yang lebih baik. Dalam konteks ini, stabilitas inti dan solusi nucleolus menjadi aspek penting yang perlu dipertimbangkan. Stabilitas inti memastikan bahwa tidak ada sub-kelompok dari pengangkut yang dapat memperoleh keuntungan lebih besar dengan beroperasi secara independen, sementara solusi nucleolus memberikan cara untuk mengalokasikan penghematan biaya secara adil berdasarkan kontribusi masing-masing pengangkut.

Dengan meningkatnya kompleksitas rantai pasok dan kebutuhan untuk mengoptimalkan biaya, pemahaman yang mendalam tentang teori permainan kooperatif dan aplikasinya dalam kolaborasi logistik horizontal menjadi sangat penting. Dalam modul ini, kita akan membahas landasan teori, metodologi, studi kasus kuantitatif, dan evaluasi kritis mengenai penerapan teori permainan dalam konteks ini.

## 2. Landasan Teori & Formulasi Matematis

Teori permainan kooperatif berfokus pada analisis interaksi antara pemain yang dapat bekerja sama untuk mencapai hasil yang lebih baik. Dalam konteks kolaborasi logistik, kita dapat mendefinisikan permainan sebagai berikut:

- **Pemain**: Pengangkut logistik yang terlibat dalam kolaborasi.
- **Koalisi**: Subset dari pemain yang bekerja sama.
- **Payoff**: Penghematan biaya yang diperoleh dari kolaborasi.

### Notasi dan Definisi

- Misalkan $N = \{1, 2, \ldots, n\}$ adalah himpunan pemain.
- Fungsi keuntungan koalisi $v(S)$ untuk koalisi $S \subseteq N$ adalah total penghematan biaya yang dapat dicapai oleh koalisi $S$.
- Nilai Shapley $Sh(i)$ untuk pemain $i$ didefinisikan sebagai:

$$
Sh(i) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|! (|N| - |S| - 1)!}{|N|!} \cdot (v(S \cup \{i\}) - v(S))
$$

di mana $|S|$ adalah jumlah pemain dalam koalisi $S$.

### Pembuktian Nilai Shapley

Nilai Shapley memiliki beberapa sifat penting, termasuk efisiensi, simetri, dan konsistensi. Pembuktian bahwa nilai Shapley memenuhi sifat-sifat ini dapat dilakukan dengan menggunakan argumen kombinatorial dan analisis matematis.

1. **Efisiensi**: Total alokasi nilai Shapley untuk semua pemain sama dengan nilai total dari koalisi, yaitu:

$$
\sum_{i \in N} Sh(i) = v(N)
$$

2. **Simetri**: Jika dua pemain memiliki kontribusi yang sama terhadap setiap koalisi, maka nilai Shapley mereka sama.

3. **Konsistensi**: Jika permainan diubah dengan menghapus pemain dan koalisi, maka nilai Shapley pemain yang tersisa tetap konsisten dengan nilai sebelumnya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi teori permainan kooperatif dalam kolaborasi logistik dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Pemain**: Tentukan pengangkut logistik yang akan berpartisipasi dalam kolaborasi.
2. **Pengumpulan Data**: Kumpulkan data terkait biaya transportasi, volume pengiriman, dan potensi penghematan.
3. **Modeling Koalisi**: Buat model koalisi berdasarkan data yang dikumpulkan dan hitung fungsi keuntungan koalisi $v(S)$.
4. **Perhitungan Nilai Shapley**: Gunakan rumus nilai Shapley untuk menghitung alokasi penghematan biaya untuk setiap pengangkut.
5. **Analisis Stabilitas**: Evaluasi stabilitas inti untuk memastikan bahwa tidak ada sub-kelompok yang dapat memperoleh keuntungan lebih besar dengan beroperasi secara independen.
6. **Implementasi dan Monitoring**: Terapkan hasil alokasi dan monitor kinerja kolaborasi secara berkala.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Pemain] --> [Pengumpulan Data] --> [Modeling Koalisi] --> [Perhitungan Nilai Shapley] --> [Analisis Stabilitas] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan terdapat tiga pengangkut logistik: A, B, dan C. Data biaya transportasi dan potensi penghematan adalah sebagai berikut:

- $v(\{A\}) = 100$, $v(\{B\}) = 150$, $v(\{C\}) = 200$
- $v(\{A, B\}) = 300$, $v(\{A, C\}) = 350$, $v(\{B, C\}) = 400$
- $v(\{A, B, C\}) = 600$

### Langkah Perhitungan

1. Hitung nilai Shapley untuk setiap pengangkut.

Untuk pengangkut A:

$$
Sh(A) = \frac{0! \cdot 2!}{3!} \cdot (v(\{A\}) - v(\emptyset)) + \frac{1! \cdot 1!}{3!} \cdot (v(\{A, B\}) - v(\{B\})) + \frac{1! \cdot 1!}{3!} \cdot (v(\{A, C\}) - v(\{C\}))
$$

$$
= \frac{1}{6} (100) + \frac{1}{6} (300 - 150) + \frac{1}{6} (350 - 200) = \frac{1}{6} (100 + 150 + 150) = \frac{400}{6} \approx 66.67
$$

Untuk pengangkut B:

$$
Sh(B) = \frac{0! \cdot 2!}{3!} \cdot (v(\{B\}) - v(\emptyset)) + \frac{1! \cdot 1!}{3!} \cdot (v(\{A, B\}) - v(\{A\})) + \frac{1! \cdot 1!}{3!} \cdot (v(\{B, C\}) - v(\{C\}))
$$

$$
= \frac{1}{6} (150) + \frac{1}{6} (300 - 100) + \frac{1}{6} (400 - 200) = \frac{1}{6} (150 + 200 + 200) = \frac{550}{6} \approx 91.67
$$

Untuk pengangkut C:

$$
Sh(C) = \frac{0! \cdot 2!}{3!} \cdot (v(\{C\}) - v(\emptyset)) + \frac{1! \cdot 1!}{3!} \cdot (v(\{A, C\}) - v(\{A\})) + \frac{1! \cdot 1!}{3!} \cdot (v(\{B, C\}) - v(\{B\}))
$$

$$
= \frac{1}{6} (200) + \frac{1}{6} (350 - 100) + \frac{1}{6} (400 - 150) = \frac{1}{6} (200 + 250 + 250) = \frac{700}{6} \approx 116.67
$$

### Interpretasi Hasil

Dari perhitungan di atas, alokasi nilai Shapley untuk pengangkut A, B, dan C masing-masing adalah sekitar 66.67, 91.67, dan 116.67. Ini menunjukkan bahwa pengangkut C memiliki kontribusi terbesar terhadap penghematan biaya total, diikuti oleh B dan A. Alokasi ini mencerminkan kontribusi masing-masing pengangkut dalam kolaborasi dan memberikan dasar yang kuat untuk pembagian biaya yang adil.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Teori permainan kooperatif dan alokasi nilai Shapley memiliki aplikasi yang luas tidak hanya dalam logistik tetapi juga dalam disiplin lain seperti manajemen rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, kolaborasi antara pemasok dan produsen dapat dioptimalkan menggunakan pendekatan ini untuk mencapai efisiensi biaya dan meningkatkan layanan pelanggan.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk asumsi bahwa semua pemain bertindak rasional dan memiliki informasi yang sempurna. Dalam praktiknya, ketidakpastian dan dinamika pasar dapat mempengaruhi keputusan kolaboratif. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengatasi tantangan ini dan mengeksplorasi penerapan teori permainan dalam konteks yang lebih kompleks.

Arah riset masa depan dapat mencakup pengembangan model yang lebih adaptif dan responsif terhadap perubahan kondisi pasar, serta integrasi teknologi baru seperti kecerdasan buatan dan analitik data besar untuk meningkatkan pengambilan keputusan dalam kolaborasi logistik.

Dengan demikian, pemahaman yang mendalam tentang teori permainan kooperatif dan aplikasinya dalam kolaborasi logistik horizontal sangat penting untuk mencapai efisiensi dan keberlanjutan dalam industri logistik modern.