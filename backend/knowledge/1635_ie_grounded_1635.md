# 1635 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai dengan kompleksitas sistem fisik-cyber (CPS), paradigma *Industry 4.0* telah mentransformasi secara fundamental pendekatan terhadap pengelolaan aset fisik dan keandalan operasional. Konsep *predictive maintenance* (PdM) muncul sebagai antitesis strategis terhadap dua paradigma tradisional—*reactive maintenance* yang menunggu kegagalan total dan *preventive maintenance* yang berbasis jadwal tetap—dengan memanfaatkan data sensor, machine learning, dan computer vision untuk memprediksi degradasi komponen sebelum *failure* terjadi. Menurut Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), kebutuhan akan deteksi anomali visual menjadi semakin krusial ketika peralatan industri seperti turbin, motor listrik, sistem perpipaan, dan *printed circuit boards* (PCB) menunjukkan tanda-tanda degradasi yang secara visual dapat diamati namun luput dari inspeksi manual konvensional.

Urgensi ekonomi dari implementasi image-based PdM tidak dapat diremehkan. Studi-studi industri menunjukkan bahwa downtime yang tidak terjadwal di sektor manufaktur dapat menimbulkan kerugian hingga $50.000 per jam pada lini produksi kelas menengah, sementara误diagnosis kegagalan komponen kritis pada industri proses kontinyu (minyak & gas, kimia, semen) berpotensi menimbulkan kerugian hingga $1 juta per insiden ketika disertai dengan *unscheduled shutdown*, kerusakan peralatan cascading, dan risiko keselamatan personel. Pearson (2024) menekankan bahwa arsitektur *Convolutional Neural Networks* (CNN) memberikan kemampuan *hierarchical feature extraction* yang secara otomatis mempelajari representasi visual dari kondisi normal dan anomali, menggantikan metode inspeksi manual yang memiliki tingkat inkonsistensi manusia (*human error rate*) mencapai 15-25%.

Konteks rekayasa sistem industri menempatkan topik ini pada persimpangan tiga disiplin: (1) *reliability engineering* dengan metrik MTBF (Mean Time Between Failures) dan MTTR (Mean Time To Repair); (2) *computer vision* dengan arsitektur deep learning modern; dan (3) *operations research* dengan optimalisasi jadwal pemeliharaan berdasarkan *risk-based* dan *condition-based* criteria. Dukungan dari literatur komplementer yang dipublikasikan oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) semakin memperkuat kerangka integrasi ini, di mana *Physics-Informed Neural Networks* (PINNs) menunjukkan bahwa embedding hukum fisika konservasi massa, energi, dan momentum ke dalam arsitektur neural network mampu meningkatkan generalisasi model prediktif ketika data pelatihan bersifat terbatas—sebuah kondisi yang sangat umum dijumpai pada skenario kegagalan langka (*rare failure events*) dalam pemeliharaan prediktif.

Lebih lanjut, adopsi image-based anomaly detection menjadi semakin relevan ketika biaya sensor imaging (kamera termal, hyperspectral, high-resolution RGB, dan X-ray) telah turun secara eksponensial sementara kapasitas komputasi *edge* (NVIDIA Jetson, Google Coral, Intel OpenVINO) telah memungkinkan inferensi real-time di lantai produksi. Integrasi dengan *digital twin*, *Manufacturing Execution Systems* (MES), dan *Enterprise Resource Planning* (ERP) memungkinkan *closed-loop control* antara deteksi anomali dan eksekusi tindakan pemeliharaan secara otomatis.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur deteksi anomali berbasis CNN yang diajukan oleh Pearson (2024) dibangun di atas fondasi matematis operasi konvolusi diskrit. Untuk citra input dua dimensi $X \in \mathbb{R}^{H \times W \times C}$ dengan tinggi $H$, lebar $W$, dan jumlah saluran warna $C$, fitur konvolusional pada lapisan ke-$l$ didefinisikan sebagai:

$$Z^{(l)}_{i,j,k} = \sum_{m=0}^{K_h-1} \sum_{n=0}^{K_w-1} \sum_{c=0}^{C_{l-1}-1} W^{(l)}_{m,n,c,k} \cdot X^{(l-1)}_{i+m, j+n, c} + b^{(l)}_k$$

di mana $K_h$ dan $K_w$ adalah dimensi kernel, $W^{(l)}_{m,n,c,k}$ adalah bobot yang dapat dipelajari untuk filter ke-$k$, dan $b^{(l)}_k$ adalah bias. Aktivasi non-linear menggunakan *Rectified Linear Unit* (ReLU) mempertahankan sparsity aktivasi:

$$A^{(l)}_{i,j,k} = \max(0, Z^{(l)}_{i,j,k})$$

Operasi *max-pooling* pada lapisan sub-sampling mereduksi dimensi spasial sambil mempertahankan fitur dominan:

$$P^{(l)}_{i,j,k} = \max_{(m,n) \in \mathcal{R}} A^{(l-1)}_{i \cdot s + m, j \cdot s + n, k}$$

dengan $s$ sebagai *stride* dan $\mathcal{R}$ sebagai *receptive field* pooling $2 \times 2$.

Untuk deteksi anomali, Pearson (2024) mengusulkan pendekatan *reconstruction-based* menggunakan *autoencoder* atau *Variational Autoencoder* (VAE), di mana citra input $\mathbf{x}$ direkonstruksi menjadi $\hat{\mathbf{x}}$ dan *anomaly score* dihitung sebagai *reconstruction error*:

$$\mathcal{A}(\mathbf{x}) = \frac{1}{N}\sum_{i=1}^{N} \| x_i - \hat{x}_i \|_2^2 = \frac{1}{N}\sum_{i=1}^{N} (x_i - \hat{x}_i)^2$$

dengan $N$ adalah jumlah piksel. Ambang batas deteksi $\tau$ ditentukan secara empiris menggunakan data validasi melalui persentil ke-$(1-\alpha)$ dari skor anomali data normal:

$$\tau = Q_{1-\alpha}(\{\mathcal{A}(\mathbf{x}_j)\}_{j=1}^{M_{val}})$$

dengan $Q$ sebagai fungsi kuantil, $\alpha$ sebagai tingkat signifikansi (umumnya $\alpha = 0.05$), dan $M_{val}$ jumlah sampel validasi.

Formulasi *predictive maintenance* formal yang melengkapi arsitektur CNN dibangun dengan mengintegrasikan persamaan kerusakan (*degradation model*) berbasis *physics-of-failure*:

$$h(t) = h_0 + \int_0^t f(s, \mathbf{X}(s), \boldsymbol{\theta}) \, ds$$

di mana $h(t)$ adalah kondisi kesehatan (health index) pada waktu $t$, $h_0$ adalah kondisi awal, $f(\cdot)$ adalah laju degradasi, $\mathbf{X}(s)$ adalah vektor fitur citra, dan $\boldsymbol{\theta}$ adalah parameter model. Probabilitas kegagalan dalam interval $[t, t+\Delta t]$ diberikan oleh:

$$P_f(t) = \Pr\{h(t) \leq h_{critical}\} = \Phi\left(\frac{h_{critical} - \mathbb{E}[h(t)]}{\sqrt{\text{Var}[h(t)]}}\right)$$

dengan $\Phi$ sebagai *cumulative distribution function* dari distribusi normal standar.

Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa untuk proses industri kontinyu, embedding PINN ke dalam arsitektur kontrol dapat diformulasikan sebagai solusi *partial differential equation* (PDE):

$$\mathcal{L}_{PINN} = \lambda_{data} \mathcal{L}_{data} + \lambda_{physics} \mathcal{L}_{physics}$$

dengan:
$$\mathcal{L}_{physics} = \frac{1}{N_p} \sum_{i=1}^{N_p} \left\| \mathcal{N}[u](x_i, t_i) \right\|_2^2$$

di mana $\mathcal{N}[\cdot]$ adalah operator diferensial residual dari hukum fisika governing, $u(x,t)$ adalah state field prediksi jaringan, dan $\lambda$ adalah bobot regularisasi yang menyeimbangkan fit data dan kepatuhan fisika.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi image-based anomaly detection dalam lingkungan industri mengikuti kerangka SOP berlapis yang dapat dirangkum menjadi tujuh fase utama:

**Fase 1 – Akuisisi Data dan Sensor Engineering.** Penempatan kamera dengan resolusi minimal $1920 \times 1080$ piksel pada jarak $d$ yang memenuhi *field of view* (FoV) target. Pencahayaan terkontrol menggunakan *ring light* LED dengan color temperature $5500\text{K}$ dan *diffuser* untuk mengurangi pantulan specular. Sampling rate citra disesuaikan dengan kecepatan proses, misalnya 30 fps untuk lini perakitan dan 1 fps untuk inspeksi tangki statis.

**Fase 2 – Pre-processing dan Image Augmentation.** Normalisasi intensitas piksel $\tilde{X} = (X - \mu)/\sigma$ dengan $\mu, \sigma$ sebagai rata-rata dan deviasi standar dari dataset pelatihan. Augmentasi melalui rotasi ($\pm 15°$), translasi ($\pm 10\%$ dimensi), zoom ($0.9-1.1\times$), dan *horizontal flip* untuk meningkatkan generalisasi model terhadap variasi orientasi.

**Fase 3 – Arsitektur Model dan Transfer Learning.** Inisialisasi bobot menggunakan model pra-terlatih (ImageNet pretrained ResNet-50, EfficientNet-B3, atau Vision Transformer) dilanjutkan dengan *fine-tuning* pada lapisan akhir menggunakan dataset anomali spesifik industri. Pearson (2024) merekomendasikan arsitektur *U-Net* untuk segmentasi anomali lokal atau *Faster R-CNN* untuk deteksi objek cacat (*defect localization*).

**Fase 4 – Pelatihan dan Validasi.** Optimasi menggunakan *Adam optimizer* dengan *learning rate* $\eta = 10^{-4}$ dan *batch size* $B = 32$. Fungsi kerugian *focal loss* untuk menangani *class imbalance*:

$$\mathcal{L}_{focal} = -\alpha_t (1-p_t)^\gamma \log(p_t)$$

dengan $\alpha_t$ sebagai bobot kelas dan $\gamma \geq 2$ sebagai *focusing parameter* yang menekan loss untuk kelas mayoritas.

**Fase 5 – Deployment Edge-Cloud.** Inferensi pada *edge device* menggunakan ONNX Runtime atau TensorRT dengan target latensi $\leq 100$ ms per citra. Transmisi hasil anomali ke *cloud dashboard* melalui protokol MQTT dengan payload JSON terstruktur.

**Fase 6 – Integrasi CMMS/EAM.** Hasil deteksi anomali secara otomatis memicu *work order* di *Computerized Maintenance Management System* (CMMS) seperti SAP PM atau IBM Maximo, dengan prioritas berdasarkan *anomaly score* $\mathcal{A}(\mathbf{x})$.

**Fase 7 – Continuous Learning dan Model Drift Monitoring.** Retraining periodik (mingguan/bulanan) menggunakan data baru yang diverifikasi oleh teknisi ahli, dengan monitoring *data drift* melalui *Population Stability Index* (PSI):

$$PSI = \sum_{i=1}^{k} (p_i^{new} - p_i^{ref}) \ln\left(\frac{p_i^{new}}{p_i^{ref}}\right)$$

Nilai $PSI > 0.25$ mengindikasikan *significant drift* yang memerlukan retraining segera.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Inspeksi Visual Motor Listrik Induksi 3 Fasa di Pabrik Petrokimia**

Sebuah motor induksi $75\text{ kW}$ yang menggerakkan pompa sentrifugal akan diinspeksi menggunakan sistem image-based anomaly detection. Dataset pelatihan berisi 5000 citra kondisi normal dan 800 citra anomali (keretakan housing, korosi terminal, dan discolorasi winding).

**Langkah 1: Perhitungan Reconstruction Error Autoencoder**

Model autoencoder menghasilkan rekonstruksi $\hat{\mathbf{x}}$ untuk citra input $\mathbf{x}$ dengan dimensi $128 \times 128 \times 3 = 49152$ piksel. Untuk satu citra anomali dengan residual error dominan pada region terminal box:

$$x = [0.92, 0.88, 0.95, ..., 0.12, 0.08, 0.15]$$
$$\hat{x} = [0.93, 0.89, 0.94, ..., 0.85, 0.82, 0.88]$$

Perhitungan MSE parsial pada region anomali (256 piksel):
$$\text{MSE}_{region} = \frac{1}{256}\sum_{i=1}^{256}(x_i - \hat{x}_i)^2 = \frac{1}{256}(256 \times 0.49) = 0.49$$

sedangkan MSE global pada seluruh piksel:
$$\text{MSE}_{global} = \frac{1}{49152}\left[\sum_{i=1}^{48900}(x_i - \hat{x}_i)^2 + 256 \times 0.49\right]$$
$$= \frac{1}{49152}[48900 \times 0.0025 + 125.44] = \frac{247.69}{49152} \approx 0.00504$$

**Langkah 2: Penentuan Threshold dan Keputusan Klasifikasi**

Dari data validasi 1000 citra normal