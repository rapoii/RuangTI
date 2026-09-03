# 2003 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur dan proses menghadapi kerugian ekonomi masif akibat downtime tak terencana. Menurut Pearson (2024) dalam *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), sekitar 70% biaya siklus hidup aset industri modern diserap oleh fase pemeliharaan, dan unplanned downtime pada lini produksi kritikal mampu menggerus margin EBITDA perusahaan hingga 3–8% per tahun. Pada industri proses seperti petrokimia, semikonduktor, dan baja, kegagalan satu pompa sentrifugal atau satu heat exchanger dapat menghentikan keseluruhan plant dengan laju produksi turun 40–60% dalam hitungan jam.

Urgensi deteksi anomali berbasis citra muncul karena tiga keterbatasan pendekatan konvensional. Pertama, *vibration-based monitoring* memerlukan pemasangan accelerometer pada setiap bearing dan shaft, yang mahal serta tidak praktis untuk peralatan di ruang terkurung atau *high-rotational-speed*. Kedua, inspeksi termografi manual mengandalkan operator bersertifikat, dengan akurasi turun signifikan bila dilakukan secara periodik daripada real-time. Ketiga, threshold-based SCADA hanya mampu mengenali kondisi yang telah diprogramkan secara eksplisit, sehingga anomaly baru (unknown unknowns) luput terdeteksi. Pearson (2024) menekankan bahwa convolutional neural networks (CNN) mampu mengekstraksi fitur hierarkis dari citra inspeksi tanpa fitur engineering manual, sehingga memungkinkan deteksi dini retakan, korosi, kebocoran, dan misalignment pada tahap sub-millimeter.

Integrasi pendekatan ini dengan Model Predictive Control berbasis Physics-Informed Neural Networks (PINN-MPC) sebagaimana dikemukakan Patel, Bhartiya, & Gudi (2024) di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memberikan arsitektur dua lapis: lapisan persepsi (CNN untuk diagnosis) dan lapisan keputusan (PINN-MPC untuk optimasi trajectory operasional pasca-deteksi). Sinergi ini menjawab tantangan industri 4.0 di mana data heterogen (citra, sensor, logbook) harus dipadukan menjadi keputusan pemeliharaan yang aman, optimal biaya, dan *audit-able* sesuai standar ISO 55000 dan IEC 62443.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Citra Anomali

CNN memetakan tensor citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ menjadi vektor probabilitas kelas $\hat{\mathbf{y}} \in \mathbb{R}^{K}$ melalui komposisi operasi konvolusi, aktivasi nonlinier, dan pooling. Pearson (2024) menggunakan backbone seperti ResNet-50 yang telah dilatih pada ImageNet dan di-*fine-tune* pada dataset anomali industri.

Operasi konvolusi diskret pada lapisan ke-$\ell$ didefinisikan:

$$\mathbf{Z}^{[\ell]} = \mathbf{W}^{[\ell]} * \mathbf{A}^{[\ell-1]} + \mathbf{b}^{[\ell]}$$

dengan $\mathbf{W}^{[\ell]}$ kernel konvolusi berdimensi $f_h \times f_w \times C^{[\ell-1]}$, $\mathbf{b}^{[\ell]}$ bias, dan $\mathbf{A}^{[\ell-1]}$ feature map lapisan sebelumnya. Aktivasi ReLU $\sigma(x) = \max(0, x)$ menghasilkan:

$$\mathbf{A}^{[\ell]} = \sigma(\mathbf{Z}^{[\ell]})$$

Fungsi kerugian yang umum digunakan untuk deteksi anomali biner (normal vs. anomali) adalah binary cross-entropy:

$$\mathcal{L}_{\text{BCE}}(\theta) = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log \hat{y}_i + (1-y_i)\log(1-\hat{y}_i)\right]$$

di mana $y_i \in \{0,1\}$ adalah label ground-truth, $\hat{y}_i = \sigma(\mathbf{w}_o^\top \mathbf{a}_i^{[L]})$ adalah probabilitas prediksi, dan $\theta$ parameter jaringan. Pearson (2024) melaporkan bahwa augmentasi data (rotasi, flip, koreksi pencahayaan) dapat meningkatkan akurasi hingga 4–7% pada dataset bearing images.

### 2.2 Autoencoder untuk Anomaly Detection Unsupervised

Karena cacat langka, anotasi ground-truth sulit diperoleh. Pearson (2024) mengadopsi arsitektur autoencoder yang meminimalkan *reconstruction error*:

$$\mathcal{L}_{\text{MSE}}(\phi, \psi) = \frac{1}{N}\sum_{i=1}^{N}\left\|\mathbf{x}_i - \hat{\mathbf{x}}_i\right\|_2^2 = \frac{1}{N}\sum_{i=1}^{N}\left\|\mathbf{x}_i - D_\psi(E_\phi(\mathbf{x}_i))\right\|_2^2$$

dengan $E_\phi$ encoder, $D_\psi$ decoder, dan $\hat{\mathbf{x}}_i$ rekonstruksi. Skor anomali untuk citra uji $\mathbf{x}_{\text{test}}$:

$$s(\mathbf{x}_{\text{test}}) = \left\|\mathbf{x}_{\text{test}} - D_\psi(E_\phi(\mathbf{x}_{\text{test}}))\right\|_2^2$$

Ambang batas $\tau$ ditetapkan berdasarkan persentil ke-95 dari skor rekonstruksi data training normal, sehingga keputusan anomali:

$$\text{anomali} = \begin{cases} 1, & s(\mathbf{x}_{\text{test}}) \geq \tau \\ 0, & s(\mathbf{x}_{\text{test}}) < \tau \end{cases}$$

### 2.3 Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya, & Gudi (2024) memformulasikan sistem proses sebagai persamaan diferensial parsial (PDE) yang dihampiri oleh jaringan saraf dengan *loss term* fisika. Untuk reaktor CSTR dengan dinamika konsentrasi $C_A(t)$ dan suhu $T(t)$:

$$\frac{dC_A}{dt} = \frac{F}{V}(C_{A,in} - C_A) - k_0 \exp\left(-\frac{E}{RT}\right)C_A$$

$$\frac{dT}{dt} = \frac{F}{V}(T_{in} - T) + \frac{-\Delta H}{\rho C_p}k_0\exp\left(-\frac{E}{RT}\right)C_A + \frac{Q}{\rho C_p V}$$

PINN meminimalkan:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_f \mathcal{L}_{\text{physics}} + \lambda_b \mathcal{L}_{\text{boundary}}$$

dengan $\mathcal{L}_{\text{physics}}$ menghukum residual PDE pada titik kolokasi. Solusi PINN lalu digunakan dalam horizon prediksi $N_p$ untuk meminimalkan fungsi biaya MPC:

$$J = \sum_{k=0}^{N_p-1}\left[\mathbf{x}_k^\top \mathbf{Q}\mathbf{x}_k + \mathbf{u}_k^\top \mathbf{R}\mathbf{u}_k\right] + \mathbf{x}_{N_p}^\top \mathbf{P}\mathbf{x}_{N_p}$$

tunduk pada constraint persamaan state dinamika, $u_{\min} \leq u_k \leq u_{\max}$, dan output safety $y_{\min} \leq y_k \leq y_{\max}$. Solusi $\mathbf{u}^* = \arg\min_u J$ dikirim ke aktuator, dan prosedur berulang (receding horizon).

### 2.4 Integrasi Dua Lapis: CNN → PINN-MPC

Ketika CNN mendeteksi anomali dengan skor $s \geq \tau$, sistem memicu *set-point adjustment* dan prediksi usia sisa pakai (RUL):

$$\text{RUL} = \int_{t_0}^{t_f} dt, \quad \text{dengan} \quad P(t) \propto \exp\left(-\int_0^t \lambda(\tau) d\tau\right)$$

di mana $\lambda(t)$ adalah *hazard function* yang diturunkan dari tren degradasi fitur CNN. Informasi RUL menjadi constraint tambahan bagi MPC: jadwal pemeliharaan $t_{\text{Mx}}$ harus memenuhi $t_{\text{Mx}} \leq t_0 + \text{RUL}_{\min}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi mengikuti kerangka Plan-Do-Check-Act (PDCA) yang diselaraskan dengan ISO 55001 (Asset Management) dan ISO 18457 (Industrial data quality).

**Fase 1 – Akuisisi Data (Plan).** Kamera industri IP67 (resolusi minimal $1920 \times 1080$ pixel, frame rate 30 fps, iluminasi LED ring 5600K) dipasang pada housing pelindung dengan jarak kerja 30–80 cm dari obyek. Citra disimpan dengan metadata (timestamp, ID aset, suhu ambient). Pearson (2024) merekomendasikan minimal 5.000 citra per kelas kondisi (normal, wear, crack, corrosion) untuk fine-tuning efektif.

**Fase 2 – Pra-pemrosesan (Do).** Citra dinormalisasi ke skala $[0,1]$, di-resize menjadi $224 \times 224$, dan diaugmentasi dengan albumentation library (rotasi $\pm 15°$, flip horizontal, brightness $\pm 20%$). Dataset dibagi 70/15/15 untuk training/validation/test dengan stratified sampling.

**Fase 3 – Pelatihan Model (Do).** Backbone CNN dilatih dengan Adam optimizer, learning rate $1 \times 10^{-4}$, batch size 32, dan *early stopping* patience 10 epoch. Validasi silang 5-fold untuk mengestimasi generalisasi error.

**Fase 4 – Threshold Calibration (Check).** Threshold $\tau$ ditentukan dari kurva ROC untuk memenuhi target $TPR \geq 95\%$ pada $FPR \leq 5\%$. Metrik operasional mencakup precision, recall, F1-score, dan AUC.

**Fase 5 – Integrasi dengan MPC (Act).** Output CNN dikirim via OPC-UA ke DCS, lalu diteruskan ke PINN-MPC engine. SOP-eskalasi: skor $s \in [0.5\tau, \tau]$ → *operator alert*; $s \in [\tau, 1.5\tau]$ → *work order*; $s > 1.5\tau$ → *emergency shutdown*.

Diagram alir proses:

```
[Citra Akuisisi] → [Pra-pemrosesan] → [CNN Inference]
                                          │
                            ┌─────────────┼─────────────┐
                            ▼             ▼             ▼
                       [Normal]    [Anomali Minor]  [Anomali Mayor]
                            │             │             │
                       [Lanjut]    [Alert + MPC]   [Shutdown]
                            │             │
                            │             ▼
                            │      [PINN-MPC: trajectory update]
                            │             │
                            └──────────────┴──→ [DCS / Historian]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik kimia memiliki reaktor CSTR dengan jacket cooler. Inspeksi visual kamera terhadap seal pompa sentrifugal dilakukan setiap 30 menit. Histori menunjukkan kerusakan terjadi akibat kebocoran mikro yang berkembang menjadi catastrophic failure.

**Parameter Industri:**
- Tekanan operasi: $P = 4.2$ bar
- Suhu operasi: $T = 85°C$
- Flow rate umpan: $F = 12.5$ m³/jam
- Volume reaktor: $V = 8.0$ m³
- Konsentrasi reaktan A: $C_{A,in} = 1.8$ mol/L
- Konstanta laju: $k_0 = 7.2 \times 10^9$ L/(mol·s)
- Energi aktivasi: $E/R = 8750$ K

**Langkah 1 — Perhitungan Konstanta Laju Efektif pada Suhu 85°C:**

$$k(T) = k_0 \exp\left(-\frac{E/R}{T+273.15}\right)$$

$$k(85) = 7.2 \times 10^9 \exp\left(-\frac{8750}{358.15}\right) = 7.2 \times 10^9 \exp(-24.43)$$

$$\exp(-24.43) \approx 2.45 \times 10^{-11}$$

$$k(85) \approx 7.2 \times 10^9 \times 2.45 \times 10^{-11} = 0.1764 \; \text{s}^{-1}$$

**Langkah 2 — Laju Reaksi dan Beban Termal:**

$$-r_A = k C_A^2 = 0.1764 \times (1.8)^2 = 0.1764 \times 3.24 = 0.5715 \; \text{mol/(L·s)}$$

B