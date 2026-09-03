# 2147 — Deteksi Anomali Berbasis Citra pada Peralatan Industri menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* ditandai dengan integrasi masif sensor vision, *edge computing*, dan algoritma *deep learning* ke dalam lini produksi manufaktur. Pearson (2024) dalam studinya yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menekankan bahwa **pemeliharaan prediktif berbasis citra** (*image-based predictive maintenance*, ibPdM) telah menjadi pilar strategis untuk mengurangi *unplanned downtime*, yang secara global menyumbang kerugian produktivitas mencapai USD 50 miliar per tahun di sektor manufaktur berat dan proses (Pearson, 2024). Berbeda dengan pendekatan *time-based* dan *condition-based* yang mengandalkan sensor getaran, akustik, atau termal, pendekatan berbasis citra memanfaatkan kamera industri, *hyperspectral imaging*, dan *thermography* untuk mendeteksi cacat permukaan, korosi, kebocoran, retakan, dan anomali bentuk pada komponen kritis seperti turbin, bearing, pompa, heat exchanger, dan conveyor.

Urgensi ekonominya tampak pada studi kasus di pabrik petrokimia: setiap jam *unplanned shutdown* bernilai USD 250.000–1.000.000 tergantung kapasitas unit, sehingga transisi dari *reactive maintenance* (Mx rata-rata = breakdown) ke *predictive maintenance* (Mx = terjadwal berdasarkan prediksi) dapat menekan OPEX hingga 25–30% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 7–12 poin persentase. Pearson (2024) menyatakan bahwa **Convolutional Neural Networks (CNN)** memberikan terobosan karena mampu mengekstraksi fitur hierarkis secara otomatis dari citra tanpa perlu *hand-crafted feature engineering* yang selama ini menjadi bottleneck inspeksi visual manual.

Di sisi kontrol proses, pelengkap penting bagi strategi pemeliharaan adalah **Physics-Informed Neural Networks (PINNs)** yang diterapkan pada *Model Predictive Control* (MPC). Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa PINNs memungkinkan embedding hukum fisika (konservasi massa, energi, momentum) ke dalam jaringan saraf untuk memodelkan dinamika proses yang kompleks (misal reaktor kimia, kolom distilasi) dengan akurasi tinggi dan *sample efficiency* yang superior dibanding *black-box neural networks*. Sinergi kedua pendekatan—CNN untuk deteksi anomali visual dan PINN-MPC untuk kendali proses—menjadi kerangka arsitektur *cyber-physical production system* (CPPS) yang semakin diadopsi di industri proses dan diskrit.

Dalam konteks operasional, tantangan utama yang diangkat Pearson (2024) meliputi: (i) **imbalanced dataset** di mana kondisi abnormal jauh lebih jarang daripada kondisi normal (rasio tipikal 1:1000 hingga 1:100.000); (ii) **domain shift** antara data latih dan data lapangan akibat variasi pencahayaan, sudut kamera, dan degradasi sensor; (iii) **interpretability** bagi operator lini yang memerlukan justifikasi keputusan; serta (iv) **edge deployment** pada PLC dan *industrial PC* dengan keterbatasan memori dan latensi. Modul 2147 ini mengintegrasikan arsitektur CNN untuk deteksi anomali visual dengan referensi pada kerangka MPC-PINN untuk memastikan bahwa keputusan pemeliharaan berdampak pada stabilitas kendali proses.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Operasi konvolusi 2D pada lapisan CNN didefinisikan sebagai berikut. Misalkan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ adalah citra masukan dengan tinggi $H$, lebar $W$, dan jumlah kanal $C$, dan $\mathbf{K} \in \mathbb{R}^{k_h \times k_w \times C \times F}$ adalah kernel konvolusi dengan $F$ filter. *Feature map* pada lapisan $l$ dihasilkan melalui:

$$h_{i,j}^l = \sigma\left(\sum_{c=1}^{C} \sum_{m=0}^{k_h-1} \sum_{n=0}^{k_w-1} K_{m,n,c}^{l} \cdot h_{i+m, j+n, c}^{l-1} + b^l\right)$$

dengan $\sigma(\cdot)$ merupakan fungsi aktivasi non-linear (umumnya ReLU: $\sigma(x) = \max(0, x)$), dan $b^l$ adalah bias. Pearson (2024) mengadopsi arsitektur *encoder–decoder* berbasis U-Net yang menghasilkan *anomaly score map* $A(x,y) \in [0,1]$ untuk setiap pixel.

### 2.2 Autoencoder untuk Rekonstruksi Citra Normal

Untuk deteksi anomali *unsupervised*, model *convolutional autoencoder* (CAE) dilatih hanya pada citra kondisi normal. Encoder $E_\phi: \mathcal{X} \rightarrow \mathcal{Z}$ memetakan citra ke latent space $\mathbf{z} \in \mathbb{R}^d$, dan decoder $D_\theta: \mathcal{Z} \rightarrow \mathcal{X}$ melakukan rekonstruksi $\hat{\mathbf{x}}$. Fungsi objektif meminimalkan *reconstruction loss*:

$$\mathcal{L}_{AE}(\phi, \theta) = \frac{1}{N}\sum_{i=1}^{N} \|\mathbf{x}_i - D_\theta(E_\phi(\mathbf{x}_i))\|^2_2 + \lambda \cdot \mathcal{R}(\phi, \theta)$$

dengan $\mathcal{R}(\phi,\theta) = \|\phi\|^2_2 + \|\theta\|^2_2$ adalah regularisasi $L_2$ untuk mencegah overfitting. Saat inferensi, *anomaly score* untuk citra $\mathbf{x}$ adalah:

$$s(\mathbf{x}) = \frac{1}{HWC}\sum_{i,j,c}\left(\mathbf{x}_{i,j,c} - \hat{\mathbf{x}}_{i,j,c}\right)^2$$

### 2.3 Structural Similarity (SSIM) Loss

Pearson (2024) menekankan bahwa MSE kurang sensitif terhadap tekstur; sehingga digunakan SSIM yang lebih selaras dengan persepsi visual:

$$\text{SSIM}(\mathbf{x}, \hat{\mathbf{x}}) = \frac{(2\mu_x\mu_{\hat{x}} + C_1)(2\sigma_{x\hat{x}} + C_2)}{(\mu_x^2 + \mu_{\hat{x}}^2 + C_1)(\sigma_x^2 + \sigma_{\hat{x}}^2 + C_2)}$$

dengan $\mu_x, \mu_{\hat{x}}$ adalah rata-rata lokal, $\sigma_x^2, \sigma_{\hat{x}}^2$ varians lokal, $\sigma_{x\hat{x}}$ kovarians, dan $C_1, C_2$ konstanta stabilisasi. Loss yang digunakan:

$$\mathcal{L}_{SSIM} = 1 - \text{SSIM}(\mathbf{x}, \hat{\mathbf{x}})$$

### 2.4 Metrik Evaluasi Klasifikasi Anomali

Threshold $\tau$ diterapkan pada $s(\mathbf{x})$ untuk klasifikasi biner. Pearson (2024) menggunakan metrik standar industri:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}$$

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}, \quad \text{AUC} = \int_0^1 TPR(FPR)\, d(FPR)$$

Untuk aplikasi pemeliharaan kritis, *recall* (sensitivity) diprioritaskan karena biaya *missed anomaly* (false negative) jauh lebih tinggi daripada *false alarm* (false positive).

### 2.5 Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya, dan Gudi (2024) memformulasikan PINN sebagai jaringan $u_\theta(x,t)$ yang mendekati solusi PDE proses:

$$\mathcal{L}_{PINN} = w_d \mathcal{L}_{data} + w_f \mathcal{L}_{phys} + w_b \mathcal{L}_{BC} + w_i \mathcal{L}_{IC}$$

dengan *physics loss*:

$$\mathcal{L}_{phys} = \frac{1}{N_f}\sum_{j=1}^{N_f}\left\|\mathcal{N}[u_\theta](x_j) - f(x_j)\right\|^2$$

di mana $\mathcal{N}[\cdot]$ adalah operator diferensial dari governing equation. Pada konteks reaktor Continuous Stirred Tank Reactor (CSTR):

$$\mathcal{N}[u_\theta] = \frac{\partial u_\theta}{\partial t} - \left(-k(T)C_A + \frac{F}{V}(C_{A,in} - C_A)\right)$$

### 2.6 Formulasi MPC dengan Model PINN

Formulasi *Nonlinear Model Predictive Control* (NMPC) dengan model prediksi berbasis PINN adalah:

$$\min_{u_0,\dots,u_{N-1}} J = \sum_{k=0}^{N_p-1} \left(\|\mathbf{x}_k - \mathbf{x}_{ref}\|^2_Q + \|\mathbf{u}_k - \mathbf{u}_{ref}\|^2_R\right) + \|\mathbf{x}_{N_p} - \mathbf{x}_{ref}\|^2_P$$

tunduk pada:

$$\mathbf{x}_{k+1} = F_{\theta}(\mathbf{x}_k, \mathbf{u}_k), \quad \mathbf{x}_{k} \in \mathcal{X}, \quad \mathbf{u}_k \in \mathcal{U}$$

dengan horizon prediksi $N_p$, bobot $Q \succeq 0$, $R \succ 0$, dan $F_\theta$ adalah model PINN yang menggantikan model first-principles untuk komputasi Jacobian yang efisien.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem End-to-End

Implementasi mengikuti kerangka **CPS–AI Maintenance Loop** yang terdiri atas empat lapisan:

| Lapisan | Komponen | Fungsi |
|---------|----------|--------|
| **L1 — Sensing** | Kamera industri (CCD/CMOS), termal IR, hyperspectral | Akuisisi citra kondisi aset |
| **L2 — Edge Inference** | GPU edge (NVIDIA Jetson, Intel OpenVINO) | Eksekusi model CNN inference |
| **L3 — Cloud Analytics** | Server MLOps, data lake | Retraining, monitoring drift |
| **L4 — Actuator** | CMMS, work-order generator, alert dashboard | Eksekusi tindakan pemeliharaan |

### 3.2 SOP Implementasi CNN-Anomaly Detection

Berikut adalah SOP 10 langkah yang diturunkan dari prosedur Pearson (2024):

1. **Scope Definition & Asset Criticality Analysis** — klasifikasi aset berdasarkan *criticality matrix*