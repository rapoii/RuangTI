# 2195 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industrial Internet of Things* (IIoT) dan manufaktur cerdas (*smart manufacturing*) telah mengubah secara fundamental paradigma pemeliharaan aset fisik, dari pendekatan *reactive* (perbaikan setelah kegagalan) dan *preventive* (penggantian terjadwal) menuju **pemeliharaan prediktif** (*predictive maintenance*, PdM) berbasis data. Dalam konteks ini, Pearson (2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyoroti bahwa biaya *unplanned downtime* pada aset produksi kritis di sektor proses kontinyu (minyak & gas, petrokimia, dan *pulp & paper*) berkisar antara **USD 10.000–250.000 per jam**, sedangkan *scheduled* PdM mampu menurunkan *Mean Time To Repair* (MTTR) hingga 30–50% dan memperpanjang *Remaining Useful Life* (RUL) aset hingga 20–40%. Studi tersebut secara eksplisit mengusulkan kerangka deteksi anomali berbasis citra visual—melalui *Convolutional Neural Networks* (CNN)—yang diintegrasikan dengan platform *edge computing* dan *cloud-based CMMS* (Computerized Maintenance Management System) untuk mendeteksi degradasi visual seperti korosi, retakan mikro (*micro-cracks*), kebocoran, dan *misalignment* pada komponen putar (*rotating equipment*).

Urgensi teknis dan ekonomi dari pendekatan ini berakar pada tiga faktor utama. Pertama, data visual dari inspeksi termografi, *closed-circuit television* (CCTV), *drone-mounted RGB*, dan sensor *hyperspectral imaging* kini melimpah di fasilitas industri modern namun belum dimanfaatkan secara sistematis melalui pembelajaran mesin. Kedua, metode inspeksi manual—yang masih menjadi praktik pada 60–70% perusahaan manufaktur di negara berkembang—memiliki tingkat kesalahan subjektif (*human error*) antara 15–25%, sebagaimana dilaporkan oleh Pearson (2024). Ketiga, integrasi CNN dengan sistem kendali proses lanjutan—misalnya *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINNs) yang dikemukakan oleh Patel, Bhartiya, dan Gudi (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431))—membuka kemungkinan *closed-loop control* antara diagnosis kondisi peralatan dan optimasi operasional proses secara *real-time*.

Pearson (2024) mencatat bahwa arsitektur CNN modern seperti *ResNet-50*, *EfficientNet-B4*, dan *Vision Transformer* (ViT) mampu mencapai akurasi klasifikasi anomali sebesar **94,7–98,2%** pada *dataset* MVTec AD dan *custom industrial defect dataset*, melampaui kemampuan inspektur bersertifikat rata-rata 87–90%. Lebih lanjut, integrasi dengan arsitektur *autoencoder* dan *generative adversarial network* (GAN) memungkinkan deteksi anomali *zero-shot* dan *few-shot learning*, krusial untuk skenario di mana data kegagalan (*failure data*) sangat jarang. Konteks industri ini diperkuat oleh estimasi bahwa pasar global *AI-enabled predictive maintenance* akan tumbuh dari USD 4,8 miliar (2024) menjadi USD 28,2 miliar (2032) dengan CAGR 24,7%, didominasi oleh sektor manufaktur, energi, dan transportasi (Pearson, 2024).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Klasifikasi Anomali Visual

CNN memproses citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ melalui serangkaian lapisan konvolusi, aktivasi non-linier, dan *pooling* guna mengekstraksi *hierarchical feature representation*. Operasi konvolusi pada lapisan $l$ didefinisikan sebagai:

$$\mathbf{Z}^{(l)} = \mathbf{W}^{(l)} * \mathbf{X}^{(l-1)} + \mathbf{b}^{(l)}, \quad \mathbf{A}^{(l)} = f\left(\mathbf{Z}^{(l)}\right)$$

dengan $\mathbf{W}^{(l)}$ adalah kernel konvolusi (misal ukuran $3 \times 3$ atau $5 \times 5$), $\mathbf{b}^{(l)}$ adalah vektor bias, dan $f(\cdot)$ merupakan fungsi aktivasi ReLU: $f(z) = \max(0, z)$. *Feature map* $\mathbf{A}^{(l)}$ kemudian direduksi dimensinya oleh *max-pooling*:

$$\mathbf{A}_{i,j,k}^{(l, \text{pool})} = \max_{(p,q) \in \mathcal{P}} \mathbf{A}_{i+p, j+q, k}^{(l)}$$

Untuk klasifikasi biner (*anomali vs. normal*), lapisan *fully-connected* akhir menghasilkan *logits* $\mathbf{z} = [z_0, z_1]$ yang dipetakan ke probabilitas melalui fungsi *softmax*:

$$P(y = k \mid \mathbf{X}; \boldsymbol{\theta}) = \frac{\exp(z_k)}{\sum_{j=0}^{1} \exp(z_j)}, \quad k \in \{0, 1\}$$

Fungsi kerugian (*loss function*) yang digunakan adalah *binary cross-entropy*:

$$\mathcal{L}_{\text{BCE}}(\boldsymbol{\theta}) = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log \hat{y}_i + (1 - y_i) \log (1 - \hat{y}_i) \right]$$

di mana $\hat{y}_i = P(y_i = 1 \mid \mathbf{X}_i; \boldsymbol{\theta})$. Pelatihan dilakukan dengan meminimalkan $\mathcal{L}_{\text{BCE}}$ melalui *stochastic gradient descent* (SGD) atau Adam optimizer:

$$\boldsymbol{\theta}^{(t+1)} = \boldsymbol{\theta}^{(t)} - \eta \cdot \nabla_{\boldsymbol{\theta}} \mathcal{L}_{\text{BCE}}(\boldsymbol{\theta}^{(t)})$$

dengan *learning rate* $\eta$ (umumnya $10^{-3}$ hingga $10^{-5}$) dan *batch size* $N$.

### 2.2 Formulasi *Remaining Useful Life* dan Skor Anomali

Untuk mengkuantifikasi tingkat degradasi, Pearson (2024) mengusulkan *Anomaly Score Function* (ASF) berbasis jarak Euclidean antara fitur citra anomali dan referensi normal pada ruang laten (*latent space*) autoencoder:

$$\text{ASF}(\mathbf{X}) = \| \phi(\mathbf{X}) - \phi(\mathbf{X}_{\text{ref}}) \|_2 = \sqrt{\sum_{j=1}^{d} \left( \phi_j(\mathbf{X}) - \phi_j(\mathbf{X}_{\text{ref}}) \right)^2}$$

di mana $\phi(\cdot): \mathbb{R}^{H \times W \times C} \to \mathbb{R}^d$ adalah *encoder*. Ambang batas keputusan adalah $\tau$, dengan keputusan anomali:

$$\hat{y} = \begin{cases} 1 \; (\text{anomali}) & \text{jika } \text{ASF}(\mathbf{X}) \geq \tau \\ 0 \; (\text{normal}) & \text{jika } \text{ASF}(\mathbf{X}) < \tau \end{cases}$$

### 2.3 Integrasi dengan Physics-Informed Neural Networks–Model Predictive Control (PINN-MPC)

Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) merumuskan MPC dengan dinamika proses $\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u})$ yang didekati oleh PINN melalui *residual*:

$$\mathcal{L}_{\text{PINN}} = \underbrace{\frac{1}{N_d} \sum_{i=1}^{N_d} \left( \hat{\mathbf{x}}(t_i) - \mathbf{x}_{\text{data}}(t_i) \right)^2}_{\text{data loss}} + \underbrace{\lambda \frac{1}{N_r} \sum_{j=1}^{N_r} \left( \frac{d\hat{\mathbf{x}}}{dt}\bigg|_{t_j} - f(\hat{\mathbf{x}}(t_j), \mathbf{u}(t_j)) \right)^2}_{\text{physics residual}}$$

dengan $\lambda$ adalah bobot regularisasi fisika. Kendala optimalisasi MPC dalam horizon prediksi $H_p$ adalah:

$$\min_{\mathbf{u}_{k}, \ldots, \mathbf{u}_{k+H_p-1}} \; J = \sum_{i=0}^{H_p-1} \left( \|\mathbf{x}_{k+i} - \mathbf{x}_{\text{ref}}\|_{\mathbf{Q}}^2 + \|\Delta \mathbf{u}_{k+i}\|_{\mathbf{R}}^2 \right)$$

$$\text{subject to: } \mathbf{x}_{k+i+1} = g(\mathbf{x}_{k+i}, \mathbf{u}_{k+i}), \; \mathbf{u}_{\min} \leq \mathbf{u}_{k+i} \leq \mathbf{u}_{\max}$$

di mana $\mathbf{Q}$ dan $\mathbf{R}$ adalah matriks pembobot *state* dan *control effort*. Hasil deteksi anomali CNN dimasukkan sebagai *disturbance term* $\mathbf{d}_k$ dalam persamaan状态.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti kerangka ISO 13373-*Condition monitoring and diagnostics of machines* dan ISO 55000 (*Asset Management*). Tahapan SOP berdasarkan Pearson (2024):

1. **Akuisisi Data Visual** — pemasangan kamera industri (resolusi $\geq 1920 \times 1080$, *frame rate* $\geq 30$ FPS) pada titik inspeksi kritis; standar iluminasi minimal 500 lux untuk mencegah artefak.
2. **Pra-pemrosesan Citra** — normalisasi piksel ke $[0,1]$, augmentasi data (*rotation, flipping, brightness jitter*), segmentasi ROI dengan *bounding box annotation*.
3. **Pelatihan Model CNN** — arsitektur *transfer learning* dari *ImageNet pretrained weights*; *fine-tuning* 10–20 epoch dengan *early stopping* berpatok pada *validation loss*.
4. **Validasi & Kalibrasi Ambang Batas** — penentuan $\tau$ melalui kurva ROC untuk memenuhi target *False Positive Rate* ≤ 5%.
5. **Deployment Edge–Cloud** — inferensi pada *edge device* (NVIDIA Jetson Orin, latensi ≤ 50 ms); telemetri dan retraining di *cloud*.
6. **Integrasi CMMS/EAM** — pemicuan *work order* otomatis ketika ASF ≥ $\tau$ melalui API RESTful ke SAP PM atau IBM Maximo.
7. **Tinjauan Berkelanjutan** — *model drift monitoring* dengan metrik PSI (*Population Stability Index*) $\geq 0,25$ sebagai pemicu retraining.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Inspeksi visual *centrifugal pump* pada unit *hydrocracking* Pertamina RU V (dianalogikan dari parameter Pearson, 2024).

**Input Parameter:**
- Citra termografi: $H = 224, W = 224, C = 3$ (RGB pseudo-thermal)
- Probabilitas deteksi anomali CNN: $P(y=1|X) = 0{,}92$
- Probabilitas false alarm: $P_{\text{FA}} = 0{,}04$
- Frekuensi inspeksi otomatis: $f_{\text{insp}} = 6$ citra/jam selama 24 jam/hari, 330 hari/tahun
- Biaya *unplanned downtime*: $C_{\text{DT}} = \text{USD } 50.000$/jam
- Biaya inspeksi otomatis CNN: $C_{\text{insp}} = \text{USD } 8$/citra
- Probabilitas kegagalan tanpa PdM (per tahun): $p_0 = 0{,}30$

**Langkah 1 — Volume inspeksi tahunan:**

$$N_{\text{insp}} = 6 \times 24 \times 330 = 47.520 \text{ citra/tahun}$$

**Langkah 2 — Biaya inspeksi otomatis:**

$$C_{\text{insp,total}} = 47.520 \times 8 = \text{USD } 380.160/\text{tahun}$$

**Langkah 3 — Efektivitas deteksi (dengan PdM):**

$$p_{\text{PdM}} = p_0 \times (1 - P(y=1|X)) = 0{,}30 \times (1 - 0{,}