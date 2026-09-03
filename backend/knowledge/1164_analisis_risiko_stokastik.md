# 1164 — Analisis Risiko Stokastik dalam Jaringan Rantai Pasok Menggunakan Pendekatan Pemrograman Dinamis

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Stochastic Risk Analysis in Supply Chain Networks Using Dynamic Programming Approaches  
**Standar & Referensi Utama:** Chen, L., & Kumar, V. (2026). Risk Management in Supply Chains: A Dynamic Programming Approach. International Journal of Production Economics, 234, 112-130. DOI: 10.1016/j.ijpe.2026.01.045. ASTM E2500-13.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan digitalisasi saat ini, rantai pasok menghadapi tantangan yang semakin kompleks dan dinamis. Ketidakpastian yang muncul dari fluktuasi permintaan, gangguan pasokan, dan perubahan regulasi memerlukan pendekatan yang lebih canggih dalam manajemen risiko. Menurut Chen dan Kumar (2026), risiko dalam rantai pasok tidak hanya berasal dari faktor eksternal seperti bencana alam dan krisis ekonomi, tetapi juga dari variabilitas internal seperti kesalahan produksi dan keterlambatan pengiriman. Oleh karena itu, analisis risiko stokastik menjadi penting untuk mengidentifikasi, menganalisis, dan memitigasi risiko-risiko tersebut.

Pendekatan pemrograman dinamis memberikan kerangka kerja yang kuat untuk menangani masalah pengambilan keputusan yang kompleks dalam konteks ketidakpastian. Dengan memecah masalah menjadi sub-masalah yang lebih kecil, pemrograman dinamis memungkinkan pengambilan keputusan yang lebih efisien dan efektif. Dalam konteks rantai pasok, pendekatan ini dapat digunakan untuk merancang strategi pengadaan, pengelolaan persediaan, dan distribusi yang optimal, sambil mempertimbangkan risiko yang mungkin terjadi.

Tantangan utama dalam penerapan analisis risiko stokastik adalah pengintegrasian model matematis dengan data real-time yang akurat. Hal ini memerlukan kolaborasi lintas fungsi antara departemen teknik, produksi, dan manajemen risiko untuk menciptakan sistem yang responsif dan adaptif. Dengan demikian, pemahaman yang mendalam tentang teori dan praktik analisis risiko stokastik menjadi krusial bagi para profesional di bidang teknik industri.

## 2. Landasan Teori & Formulasi Matematis

Analisis risiko stokastik dalam rantai pasok dapat dimodelkan menggunakan pemrograman dinamis. Misalkan kita memiliki sistem rantai pasok dengan $N$ node, di mana setiap node dapat mewakili pemasok, pabrik, atau pusat distribusi. Kita mendefinisikan variabel berikut:

- $S_t$: Status persediaan pada waktu $t$.
- $D_t$: Permintaan yang tidak pasti pada waktu $t$.
- $C_t$: Biaya yang terkait dengan pemenuhan permintaan pada waktu $t$.
- $R_t$: Risiko yang terkait dengan keputusan yang diambil pada waktu $t$.

Model pemrograman dinamis dapat dinyatakan sebagai berikut:

$$ V(S_t) = \min_{a_t} \left\{ C_t(a_t) + \mathbb{E}[V(S_{t+1}) | S_t, a_t] \right\} $$

di mana $a_t$ adalah keputusan yang diambil pada waktu $t$, dan $\mathbb{E}$ adalah operator ekspektasi. Fungsi nilai $V(S_t)$ merepresentasikan biaya minimum yang diharapkan untuk memenuhi permintaan di masa depan, tergantung pada status persediaan saat ini.

Dalam konteks ini, kita juga perlu mempertimbangkan risiko yang terkait dengan keputusan yang diambil. Risiko dapat dimodelkan sebagai fungsi dari variabilitas permintaan dan biaya, yang dapat dinyatakan sebagai:

$$ R_t = \sigma(D_t) \cdot C_t(a_t) $$

di mana $\sigma(D_t)$ adalah deviasi standar dari permintaan pada waktu $t$. Dengan demikian, tujuan kita adalah meminimalkan total biaya yang diharapkan sambil mempertimbangkan risiko yang mungkin terjadi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi analisis risiko stokastik dalam rantai pasok menggunakan pemrograman dinamis dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Variabel dan Parameter**: Tentukan semua variabel yang relevan, termasuk status persediaan, permintaan, dan biaya.

2. **Pengumpulan Data**: Kumpulkan data historis tentang permintaan, biaya, dan variabilitas untuk membangun model yang akurat.

3. **Modeling**: Kembangkan model pemrograman dinamis berdasarkan rumus yang telah ditentukan, dengan mempertimbangkan risiko.

4. **Simulasi**: Lakukan simulasi untuk menguji model dengan berbagai skenario permintaan dan biaya.

5. **Analisis Hasil**: Evaluasi hasil simulasi untuk menentukan strategi pengadaan dan distribusi yang optimal.

6. **Implementasi**: Terapkan strategi yang telah dianalisis ke dalam operasi sehari-hari.

7. **Monitoring dan Penyesuaian**: Lakukan pemantauan berkelanjutan terhadap kinerja rantai pasok dan lakukan penyesuaian jika diperlukan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Variabel] → [Pengumpulan Data] → [Modeling] → [Simulasi] → [Analisis Hasil] → [Implementasi] → [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas, mari kita lihat contoh perhitungan numerik dalam konteks rantai pasok. Misalkan kita memiliki data sebagai berikut:

- Permintaan yang tidak pasti pada waktu $t$: $D_t \sim N(100, 20^2)$
- Biaya pemenuhan permintaan: $C_t(a_t) = 5a_t$
- Status persediaan awal: $S_0 = 150$

Langkah pertama adalah menghitung ekspektasi permintaan dan risiko. Dalam hal ini, kita dapat menghitung deviasi standar permintaan sebagai:

$$ \sigma(D_t) = 20 $$

Dengan menggunakan rumus yang telah ditentukan, kita dapat menghitung total biaya yang diharapkan:

1. Hitung biaya pemenuhan untuk $a_t = 100$:

$$ C_t(100) = 5 \times 100 = 500 $$

2. Hitung risiko:

$$ R_t = \sigma(D_t) \cdot C_t(a_t) = 20 \cdot 500 = 10000 $$

3. Total biaya yang diharapkan:

$$ V(S_0) = C_t(a_t) + \mathbb{E}[V(S_{1}) | S_0, a_t] = 500 + 10000 = 10500 $$

Interpretasi hasil menunjukkan bahwa total biaya yang diharapkan untuk memenuhi permintaan adalah $10,500. Ini memberikan informasi penting bagi manajer dalam pengambilan keputusan terkait pengadaan dan distribusi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis risiko stokastik dalam rantai pasok tidak hanya relevan untuk industri manufaktur, tetapi juga dapat diterapkan di sektor lain seperti logistik, kesehatan, dan teknologi informasi. Dalam konteks otomasi, penerapan teknologi seperti Internet of Things (IoT) dan big data dapat meningkatkan akurasi prediksi permintaan dan risiko, memungkinkan respons yang lebih cepat terhadap perubahan kondisi pasar.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada data historis yang mungkin tidak selalu mencerminkan kondisi masa depan. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap perubahan yang cepat.

Arah riset masa depan dapat mencakup integrasi analisis risiko dengan teknologi machine learning untuk meningkatkan akurasi prediksi dan pengambilan keputusan dalam rantai pasok. Selain itu, pengembangan standar internasional yang lebih baik untuk analisis risiko dalam rantai pasok dapat membantu meningkatkan kolaborasi dan efisiensi di seluruh industri.

Dengan demikian, pemahaman yang mendalam tentang analisis risiko stokastik dan penerapan pemrograman dinamis menjadi sangat penting bagi para profesional di bidang teknik industri untuk menghadapi tantangan yang semakin kompleks dalam rantai pasok modern.