# 3043 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai dengan adopsi Industri 4.0 dan inisiatif *smart factory*, pemeliharaan peralatan telah bergeser secara fundamental dari paradigma reaktif-korektif menuju paradigma **pemeliharaan prediktif** (*predictive maintenance* / PdM). James Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa downtime tak terencana pada peralatan kritis—seperti pompa sentrifugal, kompresor, turbin uap, dan motor listrik—menyebabkan kerugian ekonomi agregat yang mencapai 3–8% dari total kapasitas produksi tahunan pada industri proses kontinu, dengan estimasi biaya langsung rata-rata USD 50.000–250.000 per kejadian kegagalan mayor pada fasilitas petrokimia dan pembangkitan listrik. Pearson (2024) lebih lanjut merujuk data Society of Maintenance & Reliability Professionals (SMRP) yang menunjukkan bahwa konversi strategi dari *reactive maintenance* ke PdM berbasis AI mampu menurunkan *unplanned downtime* hingga 70% dan memangkas total biaya siklus hidup aset (*life-cycle cost*) berkisar 25–30%.

Konteks ini diperparah oleh kenyataan bahwa inspeksi visual konvensional bersifat subjektif, bergantung pada ketersediaan operator berpengalaman (*subject matter experts*), serta memiliki *sampling rate* yang rendah sehingga banyak anomali nascent—retakan mikro pada bilah turbin, *cavitation* pada impeller pompa, korosi *pitting* pada bejana tekan, atau kelelahan sambungan las—gota terdeteksi sebelum mencapai ambang batas kegagalan katastrofik. Pearson (2024) memperkenalkan pendekatan *image-based anomaly detection* berbasis **Convolutional Neural Networks** (CNN) sebagai instrumen otomasi inspeksi yang mampu memproses citra resolusi tinggi dari kamera industri, *drone inspeksi*, endoskop, atau sensor termografi, kemudian mengklasifikasikan kondisi komponen ke dalam kategori *normal*, *anomali ringan*, atau *anomali kritis* dengan latensi inferensi di bawah 100 ms per citra.

Kontribusi paper Pearson (2024) bersifat ganda: pertama, mengusulkan arsitektur CNN hibrida yang mengombinasikan *transfer learning* dari backbone ResNet-50 dengan kepala klasifikasi *fully-connected* yang di-*fine-tune* menggunakan dataset defect industri; kedua, mendemonstrasikan peningkatan *recall* deteksi cacat sebesar 18,7% terhadap metode *handcrafted feature extraction* klasik seperti Histogram of Oriented Gradients (HOG) yang dikombinasikan dengan Support Vector Machine (SVM). Studi ini diperkuat oleh literatur komplementer dari Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)), yang memperlihatkan bahwa integrasi arsitektur *deep learning*—khususnya **Physics-Informed Neural Networks** (PINN)—dengan sistem **Model Predictive Control** (MPC) menghasilkan peningkatan kemampuan regulasi proses sekaligus mengurangi *process upset* ketika anomali terdeteksi. Sinergi keduanya merepresentasikan paradigma **cyber-physical production system** (CPPS) di mana sinyal visual anomali diekstraksi oleh CNN dan diterjemahkan menjadi tindakan kontrol optimal oleh MPC-PINN secara *real-time*.

Urgensi adopsi pendekatan ini diperkuat oleh fakta bahwa pada industri dengan profil Continuous Operating Rate (COR) di atas 95%, setiap jam downtime memiliki opportunity cost produksi yang sangat tinggi, sehingga akurasi deteksi dini menjadi variabel keputusan kritis dalam rekayasa keandalan (*reliability engineering*). Modul 3043 ini membedah arsitektur, formulasi matematis, prosedur operasional, serta kuantifikasi dampak ekonomi dari implementasi sistem deteksi anomali visual berbasis CNN tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

CNN adalah arsitektur jaringan saraf tiruan feed-forward yang dioptimalkan untuk memproses data grid berdimensi tinggi (citra 2D atau 3D). Pearson (2024) mengadopsi backbone ResNet-50 yang telah dilatih pada dataset ImageNet (1,28 juta citra, 1000 kelas) dan melakukan *fine-tuning* pada dataset cacat industri.

Operasi konvolusi diskret pada lapisan konvolusional ke-$\ell$ didefinisikan sebagai:

$$y_{i,j,k}^{(\ell)} = \sigma\left(\sum_{c=0}^{C_{\ell-1}-1} \sum_{u=0}^{k_h-1} \sum_{v=0}^{k_w-1} w_{u,v,c,k}^{(\ell)} \cdot x_{i+u,\,j+v,\,c}^{(\ell-1)} + b_k^{(\ell)}\right)$$

di mana:
- $x^{(\ell-1)} \in \mathbb{R}^{H_{\ell-1} \times W_{\ell-1} \times C_{\ell-1}}$ adalah *feature map* masukan,
- $w^{(\ell)} \in \mathbb{R}^{k_h \times k_w \times C_{\ell-1} \times C_{\ell}}$ adalah kernel konvolusi dengan ukuran spasial $k_h \times k_w$,
- $b_k^{(\ell)}$ adalah bias pada filter ke-$k$,
- $\sigma(\cdot)$ adalah fungsi aktivasi nonlinier.

Pearson (2024) menggunakan **ReLU** sebagai fungsi aktivasi karena efisiensi komputasional dan mitigasi masalah *vanishing gradient*:

$$\sigma(x) = \text{ReLU}(x) = \max(0, x)$$

### 2.2 Lapisan Pooling dan Reduksi Dimensi

Untuk mereduksi dimensi fitur dan meningkatkan invariansi translasi, diterapkan operasi **max-pooling** dengan ukuran window $p \times p$ dan stride $s$:

$$p_{i,j,k}^{(\ell)} = \max_{(u,v) \in \mathcal{N}_{i,j}} \, x_{u,v,k}^{(\ell)}$$

di mana $\mathcal{N}_{i,j}$ adalah neighbourhood spasial di sekitar posisi $(i,j)$. Pearson (2024) menerapkan konfigurasi $p=2, s=2$ yang secara efektif membagi dimensi spasial menjadi setengahnya.

### 2.3 Residual Block (Inti ResNet-50)

Inovasi arsitektural kunci ResNet adalah **skip connection** yang memungkinkan gradien mengalir langsung melalui blok residual, menghindari degradasi performa pada jaringan sangat dalam:

$$\mathbf{x}^{(\ell+1)} = \mathcal{F}(\mathbf{x}^{(\ell)}, \{W^{(\ell)}\}) + \mathbf{x}^{(\ell)}$$

di mana $\mathcal{F}(\mathbf{x}^{(\ell)}, \{W^{(\ell)}\}) = W_2^{(\ell)} \cdot \sigma(W_1^{(\ell)} \cdot \mathbf{x}^{(\ell)})$ adalah *residual mapping* yang akan dipelajari. Pearson (2024) mempertahankan struktur ini untuk melatih 50-layer network dengan stabil terhadap gradien.

### 2.4 Fungsi Loss untuk Deteksi Anomali

Mengingat distribusi kelas anomali pada data industri bersifat **highly imbalanced** (rasio *normal*:*anomali* dapat mencapai 100:1), Pearson (2024) menggunakan **Focal Loss** sebagai pengganti cross-entropy konvensional:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1-p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas benar, $\alpha_t \in [0,1]$ adalah *class weighting factor*, dan $\gamma \geq 0$ adalah *focusing parameter* (umumnya $\gamma = 2$). Untuk konteks klasifikasi multi-kelas dengan $C$ kelas,損失 total:

$$\mathcal{L} = -\frac{1}{N}\sum_{i=1}^{N} \sum_{c=1}^{C} \alpha_c (1-\hat{p}_{i,c})^{\gamma} \cdot y_{i,c} \log(\hat{p}_{i,c})$$

### 2.5 Metrik Evaluasi Kinerja

Pearson (2024) mengevaluasi model menggunakan *confusion matrix* turunan:

- **Precision**: $P = \dfrac{TP}{TP + FP}$
- **Recall (Sensitivity)**: $R = \dfrac{TP}{TP + FN}$
- **F1-Score**: $F_1 = 2 \cdot \dfrac{P \cdot R}{P + R}$
- **AUC-ROC**: Area di bawah kurva Receiver Operating Characteristic.

di mana $TP$ = *true positive*, $FP$ = *false positive*, $FN$ = *false negative*.

### 2.6 Integrasi dengan Physics-Informed Neural Network (PINN) untuk MPC

Patel, Bhartiya, dan Gudi (2024) (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) mengusulkan bahwa sinyal anomali dari CNN dapat diumpankan sebagai *disturbance variable* ke dalam skema **Model Predictive Control** yang dinamikanya didekati oleh PINN. Fungsi loss PINN menggabungkan *data fidelity* dan *physics residual*:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_r \mathcal{L}_{\text{residual}}$$

dengan *physics residual*:

$$\mathcal{L}_{\text{residual}} = \frac{1}{N_r}\sum_{i=1}^{N_r}\left\| f\!\left(\mathbf{x}_i, \frac{\partial \hat{u}}{\partial t}, \nabla \hat{u}, \nabla^2 \hat{u}\right) \right\|_2^2$$

di mana $f(\cdot)=0$ adalah persamaan diferensial parsial (PDE) governing proses (mis. persamaan difusi panas pada dinding reaktor atau persamaan Navier-Stokes pada aliran fluida), $\hat{u}$ adalah solusi aproksimasi neural network, dan $\lambda_d, \lambda_r$ adalah *weighting hyperparameters*. Ketika anomali terdeteksi, MPC-PINN menyesuaikan *control moves* $u(k+i|k)$ untuk menjaga *tracking error* tetap minimum sepanjang horizon prediksi $N_p$.

---

## 3. Metodologi Rekay