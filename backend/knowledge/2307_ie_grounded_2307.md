# 2307 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan peralatan industri merupakan tulang punggung keberlangsungan operasi pada sektor manufaktur, energi, minyak & gas, serta sistem produksi diskrit dan kontinu. Secara historis, strategi pemelihasan berevolusi dari *reactive maintenance* (korektif setelah kegagalan) menuju *preventive maintenance* berbasis jadwal waktu, dan kini bergeser ke paradigma *predictive maintenance* (PdM) yang digerakkan oleh data. Pearson (2024) dalam tulisannya di SSRN dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menekankan bahwa pendekatan vision-based menggunakan Convolutional Neural Networks (CNN) memberikan lompatan signifikan dibandingkan sensor getaran atau termografi titik-tunggal, karena mampu menangkap pola degradasi spasial pada permukaan komponen seperti bearing races, gear teeth, heat exchanger tubes, dan printed circuit boards.

Urgensi ekonomi dari topik ini sangat nyata. Studi-studi industri secara konsisten melaporkan bahwa biaya downtime tidak terjadwal pada pabrik kelas dunia dapat mencapai $10.000–$250.000 per jam tergantung sektor, sementara biaya pemeliharaan korektif rata-rata 3–10 kali lebih tinggi daripada pemeliharaan prediktif. Pearson menunjukkan bahwa inspeksi manual visual memiliki tingkat漏检 (miss rate) hingga 25–40% karena fatigue inspector, variasi pencahayaan, dan subjektivitas penilaian. CNN, yang dilatih pada dataset citra kondisi normal dan anomali, mampu menstandarkan keputusan inspeksi ke level akurasi yang konsisten (F1-score > 0.90 pada dataset MVTec AD), sehingga menjadi investasi teknologi yang *cost-justifiable*.

Konteks teknis diperkuat oleh literatur kontrol proses. Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* [DOI: 10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) memaparkan integrasi Physics-Informed Neural Networks (PINN) dengan Model Predictive Control (MPC) untuk sistem proses. Sinergi ini relevan karena deteksi anomali berbasis citra menghasilkan sinyal tingkat komponen yang kemudian menjadi input bagi pengambil keputusan di tingkat sistem—misalnya menutup loop antara fault detection gambar dan *reconfigurable MPC* yang menyesuaikan setpoint proses. Dengan demikian, modul 2307 ini memposisikan CNN-PdM bukan sebagai teknologi terisolasi, melainkan sebagai node感知 (perception node) dalam arsitektur *cyber-physical production system* (CPPS) yang lebih besar.

Secara strategis, adopsi vision-based PdM juga menjawab tuntutan Industry 4.0 dan standar ISO 13373 (condition monitoring untuk mesin rotasi) serta ISO 55000 (manajemen aset). Operator yang mengintegrasikan CNN-PdM memperoleh tiga manfaat utama: (1) peningkatan *overall equipment effectiveness* (OEE) melalui pengurangan *unplanned downtime*; (2) optimasi inventaris suku cadang karena *remaining useful life* (RUL) dapat diprediksi lebih akurat; dan (3) peningkatan keselamatan kerja karena anomali kritis (retak fatik, korosi lokal) terdeteksi sebelum menjadi *catastrophic failure*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Anomaly Detection

Pearson (2024) membangun fondasi matematis pada operasi konvolusi diskrit 2D. Untuk citra masukan $x \in \mathbb{R}^{H \times W \times C}$ dan kernel $k \in \mathbb{R}^{h \times w \times C}$, fitur peta (feature map) pada lapisan konvolusional $l$ didefinisikan sebagai:

$$
z_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{h-1}\sum_{n=0}^{w-1} x_{i+m,\,j+n}^{(l-1)} \cdot k_{m,n}^{(l)} + b^{(l)}\right)
$$

dengan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(z)=\max(0,z)$), dan $b^{(l)}$ adalah bias. Untuk autoencoder—anomali deteksi tanpa data anomali berlabel—Pearson menggunakan arsitektur encoder–decoder di mana citra direkonstruksi $\hat{x}$ dan skor anomali dihitung dari *reconstruction error*:

$$
\mathcal{L}_{\text{rec}}(x, \hat{x}) = \frac{1}{HWC}\sum_{i,j,c}\left(x_{i,j,c} - \hat{x}_{i,j,c}\right)^2
$$

Untuk pelatihan dengan label anomali, digunakan *binary cross-entropy* atau *focal loss* guna mengatasi ketidakseimbangan kelas:

$$
\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1-p_t)^\gamma \log(p_t), \quad p_t = 
\begin{cases}
p, & y=1 \\
1-p, & y=0
\end{cases}
$$

dengan $\gamma \geq 2$ menekan kontribusi easy negatives dan $\alpha_t$ menyeimbangkan kelas positif/negatif.

### 2.2 Formulasi Skor Anomali

Skor anomali agregat untuk citra $x$ didefinisikan sebagai kombinasi normalized reconstruction error dan uncertainty epistemic:

$$
S(x) = \lambda_1 \cdot \frac{\mathcal{L}_{\text{rec}}(x,\hat{x})}{\tau_{\text{rec}}} + \lambda_2 \cdot \frac{\mathcal{H}[\hat{y}|x]}{\tau_{\text{conf}}}, \quad \lambda_1+\lambda_2=1
$$

di mana $\mathcal{H}[\hat{y}|x] = -\sum_c p(c|x)\log p(c|x)$ adalah entropi Shannon dari distribusi kelas prediksi, dan $\tau$ adalah threshold kalibrasi yang ditentukan dari *percentile ke-99* skor pada validation set normal.

### 2.3 Integrasi dengan Model Predictive Control (Patel et al., 2024)

Patel, Bhartiya, dan Gudi (2024) dalam kerangka IFAC merumuskan PINN-MPC sebagai berikut. Sistem proses kontinu dimodelkan dengan ODE:

$$
\dot{x}(t) = f(x(t), u(t))
$$

Neural network $\hat{f}_\theta(x,u)$ di-training dengan *loss* gabungan:

$$
\mathcal{L}_{\text{PINN}} = \underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d}\|\hat{f}_\theta(x_i,u_i)-\dot{x}_i^{\text{data}}\|_2^2}_{\text{data loss}} + \underbrace{\frac{1}{N_c}\sum_{j=1}^{N_c}\|\mathcal{R}\{\hat{f}_\theta\}\|_2^2}_{\text{physics residual}}
$$

Di mana $\mathcal{R}\{\cdot\}$ adalah operator residual persamaan diferensial (misalnya Navier–Stokes atau reaksi-konveksi-difusi). *Constraint anomali* dari modul CNN Pearson dimasukkan sebagai soft constraint pada horizon prediksi $N_p$:

$$
\sum_{k=0}^{N_p-1} w_k \cdot S(x_{t+k}) \leq \delta_{\text{crit}}
$$

dengan bobot $w_k = \rho^k$ ($\rho \in (0,1]$) yang mendiskon efek anomali masa depan.

### 2.4 Metrik Kinerja

Pearson (2024) mengevaluasi model dengan metrik standar information retrieval: 
$$
\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2\cdot\frac{P\cdot R}{P+R}
$$
serta **Area Under the Receiver Operating Characteristic Curve** (AUROC):

$$
\text{AUROC} = \int_{0}^{1} TPR(FPR^{-1}(t))\,dt
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menetapkan SOP rekayasa vision-PdM dalam lima fase berurutan. Prosedur ini selaras dengan ISO 13373-9 (condition monitoring berbasis citra) dan CRISP-DM untuk sains data industri.

**Fase 1 — Akuisisi & Kurasi Dataset.** Kamera industri (resolusi ≥ 5 MP, IP67, *global shutter*) dipasang pada posisi tetap dengan pencahayaan terkontrol (ring light LED 5600K, difusor polarisasi untuk mengurangi specular highlight). Citra dikumpulkan dengan *frame rate* 1–5 fps tergantung lini. Dataset awal minimal 5.000 citra normal dan ≥ 1.500 citra anomali berlabel (defect classes mengikuti taksonomi MVTec: *scratch, dent, contamination, crack, hole, wear*). Annotation dilakukan menggunakan CVAT atau LabelImg dengan format COCO JSON.

**Fase 2 — Pre-processing.** Citra dinormalisasi ke $[0,1]$, di-resize ke $224\times224\times3$, dan diaugmentasi dengan teknik *RandAugment* (rotasi $\pm 15°$, translasi $\pm 10\%$, flip horizontal, brightness jitter $\pm 20\%$). Normalisasi channel menggunakan mean dan std ImageNet: $\mu=[0.485,0.456,0.406]$, $\sigma=[0.229,0.224,0.225]$.

**Fase 3 — Arsitektur & Pelatihan.** Gunakan *backbone* ResNet-50 atau EfficientNet-B4 pre-trained pada ImageNet. *Transfer learning* dengan dua skenario: (a) full fine-tuning untuk dataset besar, (b) *head-only training* dengan freezing backbone untuk dataset kecil. Optimizer: AdamW dengan *learning rate* $\eta=10^{-4}$ dan weight decay $10^{-5}$. Scheduler: *cosine warm restart* dengan $T_0=10$ epoch. Batch size 32, *early stopping* patience 15 epoch pada validation F1.

**Fase 4 — Kalibrasi Threshold & Validasi.** Threshold $S_{\text{crit}}$ ditentukan dengan analisis kuantil pada 1.000 citra normal validation. Validasi dilakukan pada *hold-out test set* yang tidak pernah dilihat model, dengan metrik AUROC ≥ 0.95 dan *per-class recall* ≥ 0.90 sebagai *gate criteria*.

**Fase 5 — Deployment & Monitoring Edge.** Model dikonversi ke ONNX atau TensorRT dan di-deploy pada edge device (NVIDIA Jetson Orin atau Intel OpenVINO NCS2). Telemetri dikirim via MQTT/OPC-UA ke *manufacturing execution system* (MES). Drift detection menggunakan *population stability index* (PSI) dengan threshold PSI > 0.25 memicu *retraining pipeline*.

Patel et al. (2024) menambahkan langkah integrasi: output anomali dari CNN menjadi sinyal referensi untuk MPC. Arsitektur digital twin kemudian mengeksekusi skenario *what-if* pada horizon 24 jam dengan constraint $S(x_{t+k}) \leq \delta_{\text{crit}}$ yang terjaga.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik petrokimia di Cilacap memiliki 120 pompa sentrifugal (critical service) yang sebelumnya di-inspeksi manual setiap 6 bulan. Tingkat unplanned downtime pompa: 8% per tahun, dengan rata-rata 14 jam downtime × biaya $18.000/jam = $252.000/insiden. Manajemen memutuskan mengimplementasikan CNN-PdM vision-based.

**Input Parameter:**
- Jumlah pompa dipantau: $N_p = 120$
- Citra per pompa per hari: $f = 4$ (inspection cycle 6 jam)
- Total dataset citra kondisi normal tahun 1: $N_n = 120 \times 4 \times 365 = 175.200$
- Dataset anomali berlabel (defect): $N_a = 3.200$ (historical)
- Resolusi citra: $224\times224\times3$
- Biaya akuisisi citra (kamera + pencahayaan per pompa): $C_{\text{cam}} = \$2.400$
- Biaya inference edge per pompa: $C_{\text{edge}} = \$1.800$
- Biaya integrasi sistem & training: $C_{\text{int}} = \$45.000$

**Langkah 1 — Perhitungan Total Investasi (CAPEX):**
$$
\text{CAPEX} = N_p \cdot (C_{\text{cam}} + C_{\text{edge}}) + C_{\text{int}} = 120 \cdot 4200 + 45000 = 549.000
$$

**Langkah 2 — Model Performance.** Dengan arsitektur EfficientNet-B4 + autoencoder head, Pearson (2024) melaporkan metrik pada dataset setara:
- AUROC = 0.974
- Precision = 0.952, Recall = 0.941 → F1 = 0.946

**Langkah 3 — Proyeksi Penurunan Downtime.** Misalkan CNN-PdM mendeteksi anomali rata-rata 18 hari sebelum failure (dibandingkan deteksi manual 2 hari). Penurunan downtime dihitung dengan:

$$
\Delta D_{\text{downtime}} = N_p \cdot r_{\text{fail}} \cdot \left(T_{\text{manual}} - T_{\text{pred}}\right) \cdot \frac{C_{\text{downtime}}}{T_{\text{cycle}}}
$$

dengan $r_{\text{fail}} = 0.08$ (8% per tahun), $T_{\text{manual