# 2339 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif dan Integrasinya dengan Model Predictive Control Berbasis Physics-Informed Neural Networks

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses pada era *Industry 4.0* telah memunculkan paradigma baru dalam pengelolaan aset fisik, di mana pemeliharaan prediktif (*predictive maintenance*/PdM) menjadi tulang punggung operasional pabrik modern. Menurut Pearson (2024) dalam tulisannya yang berjudul *"Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance"* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), kegagalan tak terencana pada peralatan kritis seperti pompa sentrifugal, kompresor, motor listrik, dan *heat exchanger* dapat menimbulkan kerugian ekonomi yang signifikan, berkisar antara 1% hingga 5% dari pendapatan tahunan perusahaan pada sektor *asset-intensive* seperti minyak dan gas, petrokimia, serta manufaktur baja. Studi tersebut menunjukkan bahwa degradasi visual seperti korosi, retakan mikro, kebocoran seal, dan discolorasi termal merupakan prekursor yang paling awal terdeteksi melalui inspeksi citra, jauh sebelum parameter getaran atau suhu menyimpang dari ambang batas.

Dalam konteks operasional nyata, pendekatan tradisional berbasis *vibration analysis*, *thermography*, dan *oil sampling* masih memiliki kelemahan struktural: membutuhkan sensor permanen yang mahal, memerlukan kalibrasi periodik, dan gagal mendeteksi anomali morfologis seperti deformasi rumah bearing, kebocoran mikro pada flange, atau korosi pitting pada pipa. Pearson (2024) berargumen bahwa Convolutional Neural Networks (CNN) mampu mengekstraksi *spatial feature hierarchies* dari citra inspeksi tanpa memerlukan sensor kontak, sehingga menjadi solusi *non-invasive* yang scalable untuk ribuan titik inspeksi di fasilitas industri besar. DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589).

Urgensi ekonomi dari topik ini diperkuat oleh data empiris yang dihimpun Pearson (2024): implementasi PdM berbasis CNN dilaporkan menurunkan *unplanned downtime* sebesar 30–50% dan mengurangi biaya pemeliharaan kumulatif hingga 20% dalam horizon 5 tahun. Lebih lanjut, integrasi deteksi anomali visual dengan sistem kendali proses menjadi semakin relevan melalui pendekatan Model Predictive Control (MPC) yang dipadukan dengan Physics-Informed Neural Networks (PINNs), seperti yang dikemukakan oleh Patel, Bhartiya, dan Gudi (2024) dalam jurnal IFAC-PapersOnLine (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)). Pendekatan ini memungkinkan penyesuaian parameter operasi secara *real-time* ketika anomali terdeteksi, sehingga degradasi peralatan tidak langsung mengkompromikan kualitas produk atau keselamatan proses.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur CNN yang digunakan dalam kerangka Pearson (2024) mengikuti paradigma *transfer learning* dari jaringan yang telah pre-trained pada *ImageNet*, kemudian di-*fine-tune* pada dataset domain industri. Operasi konvolusi diskrit pada lapisan $l$ didefinisikan sebagai:

$$h_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} W_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

dengan $W_{m,n}^{(l)}$ adalah kernel konvolusi berukuran $k \times k$, $b^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(z)=\max(0,z)$). Stratifikasi ini memungkinkan ekstraksi fitur mulai dari *low-level* (edge, tekstur) hingga *high-level* (bentuk korosi, pola retak) secara hierarkis. Untuk masalah deteksi anomali yang bersifat *imbalanced*—di mana citra kondisi normal jauh lebih banyak daripada kondisi cacat—Pearson (2024) mengusulkan penggunaan *Focal Loss* sebagai pengganti *Binary Cross-Entropy* standar:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1-p_t)^{\gamma} \log(p_t)$$

dengan $p_t$ adalah probabilitas prediksi kelas target, $\alpha_t \in [0,1]$ adalah *class weighting factor*, dan $\gamma \geq 0$ adalah *focusing parameter* yang menekan kontribusi *easy examples* sehingga jaringan lebih fokus pada *hard negatives* seperti cacat awal yang nyaris tak terlihat. Pengaturan tipikal $\gamma=2$ dan $\alpha_t = 0.25$ untuk kelas minoritas memberikan peningkatan *recall* signifikan pada anomali minor.

Pada lapisan klasifikasi akhir, fungsi *softmax* memetakan *logits* $\mathbf{z}$ ke distribusi probabil kelas $\hat{y}$:

$$\hat{y}_c = \frac{\exp(z_c)}{\sum_{c'=1}^{C}\exp(z_{c'})}, \quad c=1,2,\dots,C$$

dengan $C$ adalah jumlah kelas kondisi (normal, korosi ringan, korosi berat, retak, kebocoran). Evaluasi kinerja model mengikuti metrik standar: *Accuracy*, *Precision*, *F1-score*, dan *Area Under the ROC Curve* (AUC-ROC).

Komplementer terhadap framework deteksi visual di atas, pendekatan Model Predictive Control (MPC) dengan PINNs yang dikembangkan Patel dkk. (2024) (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memodelkan dinamika proses $\dot{x}(t) = f(x(t), u(t))$ menggunakan neural network $u_\theta(t)$ yang dilatih untuk menghampiri solusi persamaan diferensial, dengan *physics loss* yang menghukum residual PDE/ODE:

$$\mathcal{L}_{\text{PINN}} = \lambda_{\text{data}} \mathcal{L}_{\text{data}} + \lambda_{\text{physics}} \mathcal{L}_{\text{physics}}$$

dengan $$\mathcal{L}_{\text{physics}} = \frac{1}{N_r}\sum_{i=1}^{N_r}\left\| \frac{\partial \hat{x}_\theta}{\partial t}(t_i) - f(\hat{x}_\theta(t_i), u(t_i)) \right\|^2^2$$

yang dievaluasi pada *collocation points* $t_i$. Formulasi MPC kemudian meminimalkan *cost function*:

$$J = \sum_{k=0}^{N_p-1}\left[ (x_{k|k}-x^{\text{ref}})^\top Q (x_{k|k}-x^{\text{ref}}) + u_k^\top R u_k \right]$$

terhadap trajectory kontrol $\{u_0, u_1, \dots, u_{N_c-1}\}$ dengan kendala dinamika $\hat{x}_\theta$ dan batas operasional. Integrasi kedua framework ini memungkinkan *closed-loop* antara persepsi visual dan aksi kendali proses.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis deteksi anomali berbasis CNN mengikuti SOP delapan-tahap yang diformalkan oleh Pearson (2024):

**Tahap 1 — Akuisisi Data Citra.** Pengumpulan dataset melalui inspeksi terjadwal menggunakan kamera resolusi tinggi (≥12 MP) atau drone inspeksi pada jalur pipa dan tangki, menghasilkan citra dalam format RGB $H \times W \times 3$.

**Tahap 2 — Anotasi dan Labeling.** Pemberian label oleh *subject matter expert* pada setiap citra: $y \in \{0,1,\dots,C-1\}$. Minimum 1.000 citra per kelas direkomendasikan untuk melatih CNN robust.

**Tahap 3 — Preprocessing.** Normalisasi piksel $[0,255] \to [0,1]$, *resize* ke $224 \times 224$ (standar input ResNet/EfficientNet), dan augmentasi data: *random rotation* ($\pm 15°$), *horizontal flip*, *color jitter*, dan *mixup* untuk meningkatkan generalisasi.

**Tahap 4 — Arsitektur Model.** Pemilihan *backbone* (ResNet-50, EfficientNet-B3, atau ConvNeXt-Tiny) sesuai kapasitas komputasi edge device yang tersedia. Modifikasi lapisan klasifikasi akhir untuk menyesuaikan $C$ kelas.

**Tahap 5 — Pelatihan.** Optimisasi menggunakan AdamW dengan *learning rate* awal $\eta_0 = 10^{-4}$, *scheduler* Cosine Annealing, dan *early stopping* berdasarkan *validation F1-score*.

**Tahap 6 — Validasi dan Kalibrasi.** Evaluasi pada *hold-out test set* dengan pelaporan *confusion matrix*, AUC-ROC, dan *calibration plot* untuk memastikan probabilitas prediksi dapat dipercaya dalam konteks keputusan pemeliharaan.

**Tahap 7 — Deployment Edge/Cloud.** *Model quantization* (INT8) untuk inference pada edge GPU (NVIDIA Jetson) atau *containerization* (Docker + TensorRT) pada server cloud.

**Tahap 8 — Integrasi dengan CMMS/EAM.** Output deteksi dikirim ke *Computerized Maintenance Management System* melalui REST API, memicu *work order* otomatis dengan prioritas berdasarkan tingkat keparahan anomali.

Integrasi dengan MPC-PINN mengikuti alur: ketika anomali terdeteksi (misalnya korosi pada dinding reaktor yang mengubah *heat transfer coefficient*), estimasi parameter fisika $\hat{\theta}_{\text{degraded}}$ diperbarui, dan re-optimisasi MPC dilakukan untuk menyesuaikan *setpoint* dan *control moves* guna mempertahankan performa proses dalam batas aman.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Inspeksi Visual Pompa Sentrifugal di Fasilitas Petrokimia.** Sebuah pompa sentrifugal 150 kW beroperasi pada $Q = 180\,\text{m}^3/\text{h}$ dan $H = 45\,\text{m}$ diperiksa melalui 3.200 citra housing pompa, dengan distribusi: 2.400 citra normal, 400 korosi ringan, 300 kebocoran seal, dan 100 retakan kritis. Dataset dibagi 70/15/15 untuk train/val/test.

**Langkah 1: Perhitungan *Class Weight* $\alpha_t$.** Menggunakan *inverse frequency*:

$$\alpha_c = \frac{1}{N_c \cdot \sum_{c'} (1/N_{c'})} = \frac{N/N_c}{\sum_{c'} N/N_{c'}} \cdot \frac{1}{N_{\text{classes}}}$$

Dengan $N_c$ masing-masing: $N_0=2400$, $N_1=400$, $N_2=300$, $N_3=100$, total $N=3200$:
- $\alpha_0 = (3200/2400)/((3200/2400)+(3200/400)+(3200/300)+(3200/100)) \times 0.25 \approx 0.0114$
- $\alpha_1 \approx 0.0683$, $\alpha_2 \approx 0.0911$, $\alpha_3 \approx 0.2733$

Bobot ini menekan kelas normal dan memperkuat kontribusi kelas kritis dalam *loss*.

**Langkah 2: Forward Pass pada Citra Korosi.** Kernel konvolusi pertama (deteksi edge horizontal) $W^{(1)}$ diterapkan pada patch $8\times 8$ dari citra korosi:

$$W^{(1)} = \begin{bmatrix} -1 & -1 & -1 \\ 0 & 0 & 0 \\ 1 & 1 & 1 \end{bmatrix}, \quad \text{input patch } x = \begin{bmatrix} 45 & 50 & 48 \\ 52 & 55 & 50 \\ 60 & 62 & 58 \end{bmatrix}$$

$$h^{(1)} = \sigma(W^{(1)} * x + b^{(1)})$$

Hasil konvolusi elemen tengah: $(-45-50-48+60+62+58) + b = 37 + b$. Dengan $b = -30$, $h^{(1)} = \sigma(7) = 7$.

**Langkah 3: Focal Loss pada Kelas Retakan Kritis.** Untuk sampel retakan dengan $p_t = 0{,}3$ (model ragu, kelas minoritas), $\gamma = 2$, $\alpha_t = 0{,}2733$:

$$\mathcal{L}_{\text{focal}} = -0{,}2733 \times (1-0{,}3)^2 \times \log(0{,}3) = -0{,}2733 \times 0{,}