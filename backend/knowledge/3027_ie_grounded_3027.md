# 3027 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance* – PdM) telah menjadi pilar strategis dalam transformasi digital industri manufaktur modern, khususnya sejak peluncuran inisiatif *Industry 4.0* dan *Industry 5.0* yang menekankan integrasi antara sistem siber-fisik, kecerdasan buatan, dan kemampuan manusia. Dalam konteks operasional pabrik modern, downtime yang tidak terencana dapat menimbulkan kerugian ekonomi yang sangat signifikan. Studi-studi internasional melaporkan bahwa biaya downtime pada industri proses dapat mencapai ratusan ribu hingga jutaan dolar AS per jam, tergantung pada kompleksitas lini produksi dan nilai tambah produk yang dihasilkan. Oleh karena itu, kemampuan untuk mendeteksi anomali sejak dini — bahkan sebelum kegagalan fungsional terjadi — menjadi keunggulan kompetitif yang menentukan profitabilitas dan keberlanjutan operasi.

Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa pendekatan deteksi anomali berbasis citra (*image-based anomaly detection*) menggunakan *Convolutional Neural Networks* (CNN) memberikan lompatan kualitatif dibandingkan metode inspeksi visual manual maupun algoritma *signal-based* konvensional. Pendekatan tradisional seperti *vibration spectral analysis*, *oil debris monitoring*, atau *thermography thresholding* umumnya hanya mampu menangkap satu modalitas kegagalan dan memerlukan instrumentasi fisik yang mahal per titik ukur. Sebaliknya, sebuah jaringan saraf konvolusional yang dilatih dengan dataset citra kondisi permukaan dan internal peralatan dapat mengenali pola degradasi yang kompleks — seperti retakan mikro, korosi pitting, deformasi termal, kontaminasi permukaan, dan misalignment — secara simultan dan non-kontak.

Urgensi penerapan pendekatan ini diperkuat oleh tiga tren industri yang simultan. Pertama, proliferasi sensor citra berbiaya rendah (kamera industri, drone inspeksi, dan *smartphone-based* imaging) yang menghasilkan volume data visual sangat besar dari lini produksi. Kedua, ketersediaan *edge computing devices* seperti NVIDIA Jetson, Google Coral, dan Intel Movidius yang memungkinkan inferensi CNN berjalan secara *real-time* di lapangan tanpa latensi jaringan. Ketiga, kebutuhan akan transparansi dan akuntabilitas dalam rantai pasok yang memaksa pelaku industri menerapkan dokumentasi visual kondisi aset sebagai bukti kepatuhan terhadap standar ISO 55000 (manajemen aset) dan IEC 62443 (keamanan siber pada sistem industri).

Patel, Bhartiya, dan Gudi (2024) dalam artikel mereka di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) melengkapi perspektif ini dengan menunjukkan bahwa integrasi *Physics-Informed Neural Networks* (PINN) ke dalam *Model Predictive Control* (MPC) mampu meningkatkan akurasi prediksi dinamika proses sekaligus menjaga konsistensi dengan hukum fisika. Meskipun fokus utama mereka adalah pada sistem proses (misalnya reaktor kimia dan kolom distilasi), prinsip menggabungkan struktur fisika dengan pembelajaran mesin tersebut sangat relevan untuk sistem deteksi anomali citra, di mana *physics-informed loss functions* dapat digunakan untuk membatasi ruang solusi CNN agar konsisten dengan prinsip kontinuitas, konservasi energi, atau kekangan mekanis pada struktur yang diinspeksi. Sinergi antara kedua literatur ini memberikan kerangka pikir holistik: dari sisi persepsi (Pearson, 2024) dan dari sisi optimasi kontrol keputusan pemeliharaan (Patel dkk., 2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Secara matematis, sebuah CNN memetakan tensor citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ ke ruang representasi fitur $\mathbf{F} \in \mathbb{R}^{h \times w \times d}$ melalui serangkaian operasi konvolusi, aktivasi non-linear, dan *pooling*. Operasi konvolusi pada lapisan ke-$l$ dapat dinyatakan sebagai:

$$
\mathbf{Z}^{(l)}_{i,j,k} = \sum_{u=0}^{k_h - 1} \sum_{v=0}^{k_w - 1} \sum_{c=0}^{C_{l-1} - 1} \mathbf{W}^{(l)}_{u,v,c,k} \cdot \mathbf{A}^{(l-1)}_{i+u, j+v, c} + b^{(l)}_k
$$

di mana $\mathbf{W}^{(l)}$ adalah kernel filter yang dapat dipelajari, $b^{(l)}$ adalah bias, dan $\mathbf{A}^{(l-1)}$ adalah *feature map* dari lapisan sebelumnya. Setelah konvolusi, fungsi aktivasi ReLU diterapkan:

$$
\mathbf{A}^{(l)}_{i,j,k} = \max(0, \mathbf{Z}^{(l)}_{i,j,k})
$$

Untuk deteksi anomali, Pearson (2024) mengusulkan penggunaan arsitektur *encoder-decoder* (mirip U-Net atau autoencoder variasional) yang merekonstruksi citra kondisi normal, di mana anomali diidentifikasi sebagai wilayah dengan *reconstruction error* tinggi. Fungsi kehilangan rekonstruksi didefinisikan sebagai:

$$
\mathcal{L}_{\text{rec}}(\theta) = \frac{1}{N} \sum_{i=1}^{N} \left\| \mathbf{X}_i - \hat{\mathbf{X}}_i \right\|^2_2 = \frac{1}{N} \sum_{i=1}^{N} \left\| \mathbf{X}_i - D_\theta(E_\theta(\mathbf{X}_i)) \right\|^2_2
$$

dengan $E_\theta(\cdot)$ adalah encoder dan $D_\theta(\cdot)$ adalah decoder berparameter $\theta$.

### 2.2 Skor Anomali dan Threshold Adaptif

Skor anomali per piksel $s_{i,j}$ dan skor anomali per citra $S$ didefinisikan sebagai:

$$
s_{i,j} = \frac{1}{C} \sum_{c=1}^{C} \left( X_{i,j,c} - \hat{X}_{i,j,c} \right)^2
$$

$$
S = \frac{1}{H \cdot W} \sum_{i=1}^{H} \sum_{j=1}^{W} s_{i,j}
$$

Threshold anomali $\tau$ ditetapkan melalui pendekatan statistik berbasis distribusi normal standar (mengikuti *3-sigma rule*):

$$
\tau = \mu_S + k \cdot \sigma_S
$$

di mana $\mu_S$ dan $\sigma_S$ adalah rata-rata dan simpangan baku skor anomali pada data pelatihan kondisi normal, dan $k$ adalah konstanta sensitivitas (umumnya $k = 3$ untuk tingkat *false positive* rendah).

### 2.3 Integrasi Physics-Informed Loss

Menggati atau melengkapi dengan inspirasi dari Patel, Bhartiya, dan Gudi (2024), fungsi kehilangan total dapat ditulis sebagai:

$$
\mathcal{L}_{\text{total}} = \alpha \cdot \mathcal{L}_{\text{rec}} + \beta \cdot \mathcal{L}_{\text{physics}} + \gamma \cdot \mathcal{L}_{\text{reg}}
$$

dengan $\alpha + \beta + \gamma = 1$ adalah bobot regularisasi, dan $\mathcal{L}_{\text{physics}}$ adalah istilah kerugian yang menghukum pelanggaran terhadap hukum kekangan fisis. Contoh pada kasus inspeksi struktur mekanis:

$$
\mathcal{L}_{\text{physics}} = \lambda_1 \left\| \nabla \cdot \boldsymbol{\sigma} - \mathbf{f} \right\|^2 + \lambda_2 \left\| \mathbf{D} - \mathbf{C} : \boldsymbol{\varepsilon} \right\|^2
$$

di mana $\boldsymbol{\sigma}$ adalah tensor tegangan, $\mathbf{f}$ vektor gaya volumetrik, $\mathbf{D}$ matriks kekakuan, $\mathbf{C}$ tensor elastisitas, dan $\boldsymbol{\varepsilon}$ tensor regangan.

### 2.4 Formulasi Predictive Maintenance sebagai Optimasi Keputusan

Dengan skor anomali $S_t$ pada waktu $t$, keputusan pemeliharaan dapat diformulasikan sebagai masalah Markov Decision Process (MDP). *State* sistem mencakup riwayat skor, *Remaining Useful Life* (RUL), dan biaya kumulatif. *Action* terdiri dari $\{ \text{lanjut operasi}, \text{inspeksi terjadwal}, \text{penggantian preventif} \}$. Fungsi nilai optimal memenuhi persamaan Bellman:

$$
V(s) = \max_{a \in \mathcal{A}} \left[ R(s, a) + \gamma_{\text{MDP}} \sum_{s'} P(s' | s, a) V(s') \right]
$$

dengan $R(s, a)$ adalah *reward* (negatif dari biaya), $\gamma_{\text{MDP}}$ faktor diskonto, dan $P(s'|s,a)$ probabilitas transisi keadaan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi Sistematis

Berdasarkan kerangka yang diajukan Pearson (2024) dan diperkaya dengan prinsip MPC dari Patel dkk. (2024), prosedur operasional standar (SOP) untuk implementasi deteksi anomali berbasis CNN dapat disusun sebagai berikut:

**Tahap 1 – Akuisisi Data dan Pra-pemrosesan:**
- Pengumpulan dataset citra kondisi normal peralatan minimal 10.000 sampel (rekomendasi empiris).
- Standardisasi resolusi citra (misal $224 \times 224 \times 3$ piksel untuk kompatibilitas dengan backbone ResNet-50 atau EfficientNet-B0).
- Augmentasi data: rotasi, flip, *brightness/contrast adjustment*, dan *Gaussian noise injection* untuk meningkatkan generalisasi.

**Tahap 2 – Pelatihan Model:**
- Inisialisasi bobot dengan *pre-trained weights* dari ImageNet (*transfer learning*).
- Pembagian dataset: 70% pelatihan, 15% validasi, 15% pengujian.
- Optimasi dengan Adam optimizer, *learning rate* awal $\eta_0 = 10^{-4}$, dan *scheduler* Cosine Annealing.
- *Early stopping* dengan *patience* = 10 epoch berdasarkan validasi loss.

**Tahap 3 – Kalibrasi Threshold Anomali:**
- Estimasi $\mu_S$ dan $\sigma_S$ dari data validasi kondisi normal.
- Penentuan $\tau$ dengan validasi silang menggunakan *precision-recall curve*.
- Penyesuaian $\tau$ terhadap tingkat risiko operasional dan kelas aset (kritis vs non-kritis).

**Tahap 4 – Deployment di Edge:**
- Konversi model ke format *TensorRT* atau *ONNX Runtime* untuk inferensi cepat.
- Penempatan pada *edge gateway* dengan protokol komunikasi OPC UA / MQTT.
- Integrasi dengan sistem ERP/MES melalui API RESTful.

**Tahap 5 – Monitoring dan Retraining Berkala:**
- Logging skor anomali dan *false alarm rate* harian.
- Retraining setiap 3–6 bulan atau ketika *concept drift* terdeteksi (misalnya dengan Page-Hinkley statistics).

### 3.2 Diagram Alir Proses

Diagram alir logika keputusan deteksi anomali dapat direpresentasikan sebagai berikut:

```
[Akuisisi Citra] → [Pra-pemrosesan & Normalisasi]
        ↓
[Inferensi CNN Encoder-Decoder]
        ↓
[Hitung Reconstruction Error s_{i,j}]
        ↓
[Agregasi Skor Anomali S]
        ↓
   ┌────┴────┐
 S ≤ τ      S > τ
   │         │
[Operasi   [FLAG Anomali]
 Normal]        ↓
        [Klasifikasi Tingkat Risiko]
        ↓
[Keputusan: Inspeksi / Perbaikan / Penggantian]
        ↓
[Update Log Pemeliharaan & Retraining Trigger?]
```

### 3.3 Standar Industri yang Relevan

- **ISO 13373-1**: *Condition monitoring and diagnostics of machines – Vibration condition monitoring*.
- **ISO 17359**: *Condition monitoring and diagnostics of machines – General guidelines*.
- **IEC 62443**: Keamanan siber pada sistem otomasi dan kontrol industri.
- **ISO 55000**: Manajemen aset – kerangka kerja strategis.
- **API 571**: *Mechanisms of damage and factors that influence damage to equipment* (sebagai referensi taksonomi kerusakan).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Inspeksi Bantalan Rol pada Conveyor Pabrik Semen

Sebuah pabrik semen dengan kapasitas produksi 5.000 ton/hari memiliki 240 unit *idler roller* pada conveyor utama. Inspeksi manual dilakukan setiap 30 hari dengan biaya Rp 150.000/orang-jam. Tim pemeliharaan memutuskan mengimplementasikan sistem deteksi anomali berbasis CNN sesuai metode Pearson (2024).

**Parameter Input:**
- Jumlah *idler* yang dipantau: $N = 240$ unit
- Frekuensi akuisisi citra: 1 citra/unit/hari
- Resolusi citra: $224 \times 224 \times 3$ piksel
- Biaya inspeksi manual per unit: $C_{\text{manual}} = $ Rp 50.000