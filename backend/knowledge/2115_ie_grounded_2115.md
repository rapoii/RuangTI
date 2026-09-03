# 2115 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mentransformasi paradigma pemeliharaan aset industri dari pendekatan reaktif (*run-to-failure*) dan preventif berbasis jadwal menjadi pendekatan *predictive maintenance* (PdM) berbasis kondisi aktual peralatan. Transformasi ini didorong oleh dua faktor utama: (1) meningkatnya kompleksitas sistem produksi yang membuat downtime tidak terencana menjadi sangat mahal, dan (2) ketersediaan data masif dari sensor Internet of Things (IoT), termasuk kamera resolusi tinggi yang terpasang pada lini produksi. Dalam konteks ini, Pearson (2024) melalui papernya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) mengusulkan kerangka deteksi anomali berbasis citra menggunakan *Convolutional Neural Networks* (CNN) sebagai komponen inti sistem pemeliharaan prediktif.

Urgensi ekonomis dari topik ini sangat substansial. Studi literatur menunjukkan bahwa biaya downtime tidak terjadwal pada industri manufaktur bernilai antara $10.000 hingga $250.000 per jam, tergantung pada sektor dan kompleksitas lini produksi. Pada industri semikonduktor, bahkan downtime 30 detik dapat menyebabkan kerugian produksi bernilai ratusan ribu dolar. Oleh karena itu, kemampuan mendeteksi anomali visual—seperti retakan mikro pada permukaan bearing, korosi pada pipa, misalignment pada komponen rotor, atau kontaminasi pada produk—secara *real-time* menjadi kompetensi kritikal bagi insinyur industri modern.

Pearson (2024) berargumen bahwa inspeksi visual manual memiliki tiga keterbatasan fundamental: subjektivitas evaluator, kelelahan inspektur pada shift panjang, dan ketidakmampuan manusia mendeteksi cacat sub-milimeter secara konsisten. CNN, dengan kemampuannya mengekstraksi fitur hierarkis dari citra secara otomatis, menawarkan solusi skalabel dan objektif. Pendekatan ini semakin relevan ketika dikombinasikan dengan sistem kontrol prediktif berbasis model (*Model Predictive Control*/MPC) yang semakin banyak mengadopsi *Physics-Informed Neural Networks* (PINN), seperti yang ditunjukkan oleh Patel, Bhartiya, dan Gudi (2024) dalam publikasi mereka di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431). Integrasi keduanya—deteksi anomali visual dan kontrol proses berbasis fisika—mewujudkan konsep *cyber-physical production system* yang kohesif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) mengadopsi arsitektur CNN dengan lapisan konvolusi yang mengekstraksi fitur spasial bertingkat. Operasi konvolusi dua dimensi pada citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ dengan kernel $\mathbf{K} \in \mathbb{R}^{h \times w \times C}$ didefinisikan sebagai:

$$(\mathbf{X} * \mathbf{K})_{i,j} = \sum_{m=0}^{h-1} \sum_{n=0}^{w-1} \sum_{c=0}^{C-1} \mathbf{X}_{i+m,\, j+n,\, c} \cdot \mathbf{K}_{m,n,c} + b$$

dengan $b$ adalah bias. Aktivasi non-linear ReLU diterapkan: $f(x) = \max(0, x)$. Setelah beberapa lapisan konvolusi dan *pooling*, fitur diekstraksi ke dalam ruang laten (*latent space*) berdimensi rendah.

### 2.2 Formulasi Skor Anomali

Untuk deteksi anomali tanpa監督 (*unsupervised*), Pearson (2024) menggunakan pendekatan rekonstruksi berbasis autoencoder atau model *student-teacher*. Skor anomali untuk citra $\mathbf{x}_i$ didefinisikan sebagai jarak dalam ruang laten terhadap distribusi normal:

$$A(\mathbf{x}_i) = \|\mathbf{z}_i - \boldsymbol{\mu}\|_2^2 = \sum_{k=1}^{d} (z_{i,k} - \mu_k)^2$$

dengan $\mathbf{z}_i = f_{\text{enc}}(\mathbf{x}_i)$ adalah vektor laten hasil encoder, $\boldsymbol{\mu}$ adalah rata-rata embeddings pelatihan normal, dan $d$ adalah dimensi laten. Ambang batas $\tau$ ditetapkan sehingga citra dengan $A(\mathbf{x}_i) > \tau$ diklasifikasikan anomali.

Fungsi loss pelatihan autoencoder:

$$\mathcal{L}_{\text{AE}}(\theta) = \frac{1}{N} \sum_{i=1}^{N} \|\mathbf{x}_i - \hat{\mathbf{x}}_i\|_2^2 + \lambda \|\theta\|_2^2$$

di mana $\hat{\mathbf{x}}_i = f_{\text{dec}}(f_{\text{enc}}(\mathbf{x}_i))$ adalah rekonstruksi dan $\lambda \|\theta\|_2^2$ adalah regularisasi weight decay.

### 2.3 Metrik Evaluasi Kinerja

Kinerja detektor anomali diukur menggunakan metrik standar klasifikasi biner:

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}, \quad F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

Area Under Curve (AUC) dari kurva ROC memberikan ukuran agregat kemampuan diskriminatif pada berbagai ambang batas.

### 2.4 Integrasi dengan Physics-Informed Neural Networks (PINN)

Patel, Bhartiya, dan Gudi (2024) memperkenalkan formulasi PINN untuk MPC sistem proses. Dalam konteks integrasi, ketika anomali terdeteksi, parameter model proses $\boldsymbol{\theta}_p$ dalam PINN diperbarui untuk mencerminkan degradasi peralatan. Fungsi loss gabungan PINN:

$$\mathcal{L}_{\text{PINN}} = \alpha \mathcal{L}_{\text{data}} + \beta \mathcal{L}_{\text{physics}} + \gamma \mathcal{L}_{\text{BC/IC}}$$

dengan $\mathcal{L}_{\text{data}} = \frac{1}{N_d} \sum_{i=1}^{N_d} (\hat{y}_i - y_i)^2$ adalah kehilangan data, $\mathcal{L}_{\text{physics}} = \frac{1}{N_f} \sum_{j=1}^{N_f} r(\mathbf{x}_j, t_j)^2$ adalah residual persamaan diferensial parsial (misalnya persamaan panas atau dinamika fluida), dan $\mathcal{L}_{\text{BC/IC}}$ menghukum pelanggaran kondisi batas/awal.

Formulasi MPC dengan model neural network:

$$\min_{\mathbf{u}_{0:H-1}} \sum_{k=0}^{H-1} \left[ (\hat{\mathbf{x}}_k - \mathbf{x}_{\text{ref},k})^\top \mathbf{Q} (\hat{\mathbf{x}}_k - \mathbf{x}_{\text{ref},k}) + \mathbf{u}_k^\top \mathbf{R} \mathbf{u}_k \right]$$

$$\text{subject to: } \hat{\mathbf{x}}_{k+1} = f_{\text{NN}}(\hat{\mathbf{x}}_k, \mathbf{u}_k), \quad \mathbf{x}_{\min} \leq \hat{\mathbf{x}}_k \leq \mathbf{x}_{\max}, \quad \mathbf{u}_{\min} \leq \mathbf{u}_k \leq \mathbf{u}_{\max}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN untuk pemeliharaan prediktif mengikuti SOP berlapis berikut, yang disintesis dari rekomendasi Pearson (2024) dan diintegrasikan dengan kerangka kerja Patel et al. (2024):

**Tahap 1 – Akuisisi Data & Kalibrasi Sensor:** Kamera industri (resolusi minimum 2 MP, frame rate 30 fps) dipasang pada posisi strategis dengan pencahayaan terkontrol (3000–5000 K). Dataset normal dikumpulkan selama periode *burn-in* 200–500 jam operasi.

**Tahap 2 – Pra-pemrosesan Citra:** Augmentasi data dengan rotasi, flipping, dan penyesuaian brightness/contrast untuk meningkatkan robustnes. Normalisasi piksel: $x_{\text{norm}} = (x - 127.5)/127.5$ untuk rentang $[-1, 1]$.

**Tahap 3 – Pelatihan Model:** CNN dilatih dengan Adam optimizer (learning rate $10^{-4}$), batch size 32, selama 100 epoch dengan *early stopping* (patience 10). Validasi silang k-fold (k=5) dilakukan.

**Tahap 4 – Kalibrasi Ambang Batas:** Distribusi skor anomali pada data validasi normal dimodelkan sebagai Gaussian, dan ambang $\tau$ ditetapkan pada persentil ke-99 ($\mu + 2{,}33\sigma$).

**Tahap 5 – Integrasi dengan Sistem Kontrol:** Ketika anomali terdeteksi, sinyal dikirim ke modul MPC yang menyesuaikan parameter operasional (kecepatan, tekanan, suhu) untuk mencegah propagasi kerusakan, mengikuti protokol Patel et al. (2024).

**Tahap 6 – Pemantauan Berkelanjutan & Retraining:** Model dievaluasi ulang setiap 30 hari dengan data baru menggunakan *concept drift detection* (misalnya Page-Hinkley test).

Diagram alir proses:

```
[Citra Peralatan] → [Pra-pemrosesan] → [CNN Encoder] → [Vektor Latent]
                                                              ↓
[Keputusan Maintenance] ← [Klasifikasi: Normal/Anomali] ← [Threshold Check]
         ↓
[Update Model MPC] → [Penyesuaian Parameter Proses]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik baja dengan 200 motor listrik kritis ( kelas 100 kW). Inspeksi visual bearing motor dilakukan menggunakan kamera termal + visible light pada interval sampling 5 menit.

**Parameter Operasional:**
- Biaya downtime per jam: $C_d = \$15.000$
- Biaya inspeksi manual per motor per bulan: $C_i = \$50$
- Mean Time Between Failures (MTBF) bearing tanpa PdM: 8.000 jam
- Mean Time To Repair (MTTR): 24 jam

**Langkah 1: Deteksi Anomali oleh CNN**

Misalkan pada bulan tertentu CNN mendeteksi 12 motor dengan skor anomali $A_i$ sebagai berikut (nilai tipikal 0–100):

| Motor | $A_i$ | Keputusan |
|-------|-------|-----------|
| M-001 | 3,2 | Normal |
| M-002 | 87,5 | Anomali |
| M-003 | 4,1 | Normal |
| ... | ... | ... |
| M-012 | 91,3 | Anomali |

Confusion matrix hasil validasi (dari 1.000 citra uji, dengan 80 anomali):
- True Positive (TP) = 76
- False Positive (FP) = 12
- False Negative (FN) = 4
- True Negative (TN) = 908

Perhitungan metrik:

$$\text{Precision} = \frac{76}{76+12} = \frac{76}{88} = 0{,}864 \; (86{,}4\%)$$

$$\text{Recall} = \frac{76}{76+4} = \frac{76}{80} = 0{,}950 \; (95{,}0\%)$$

$$F_1 = 2 \cdot \frac{0{,}864 \times 0{,}950}{0{,}864 + 0{,}950} = 2 \cdot \frac{0{,}8208}{1{,}814} = 0{,}905 \; (90{,}5\%)$$

**Langkah 2: Perhitungan Penghematan Biaya**

*Tanpa PdM (baseline):* Kerugian akibat kegagalan tak terduga pada 12 motor potensial:

$$L_{\text{baseline}} = 12 \times C_d \times \text{MTTR} = 12 \times \$15.000 \times 24 = \$4.320.000$$

*Dengan PdM:* Kerusakan terdeteksi dini memungkinkan perbaikan terjadwal dengan MTTR 6 jam (4× lebih cepat karena persiapan lebih baik):

$$L_{\text{PdM}} = (12 - FN) \times C_d \times 6 + FN \times C_d \times 24$$

$$L_{\text{PdM}} = 8 \times \$15.000 \times 6 + 4 \times \$15.000