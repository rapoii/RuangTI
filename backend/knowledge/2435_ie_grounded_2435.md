# 2435 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan aset fisik di lingkungan manufaktur. Pergeseran dari *reactive maintenance* (korektif setelah kegagalan) menuju *predictive maintenance* (prediktif berbasis data) menjadi agenda strategis bagi hampir seluruh perusahaan berbasis aset berat, mulai dari minyak dan gas, petrokimia, hingga manufaktur diskrit. James Pearson (2024) dalam tulisannya yang diterbitkan dengan DOI [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa inspeksi visual berbasis Computer Vision (CV) memiliki potensi besar untuk menggantikan prosedur inspeksi manual yang selama ini memiliki tingkat subjektivitas yang tinggi, kelelahan inspektur, serta cycle time yang panjang. Studi Pearson menunjukkan bahwa integrasi Convolutional Neural Networks (CNN) ke dalam pipeline inspeksi mampu menurunkan tingkat false negative hingga di bawah 3% pada dataset anomaly-equipment benchmark, sebuah capaian yang sulit dicapai dengan pendekatan thresholding citra konvensional.

Urgensi ekonomi dari topik ini tidak dapat dipandang sebelah mata. Berdasarkan data berbagai survei industri yang dirujuk dalam paper Pearson, downtime yang tidak terjadwal pada peralatan kritis seperti pompa sentrifugal, kompresor, dan motor listrik dapat menimbulkan kerugian produksi antara USD 10.000 hingga USD 250.000 per jam, tergantung pada skala fasilitas. Kerugian ini bersifat kumulatif sepanjang tahun dan dapat menggerus margin EBITDA perusahaan manufaktur hingga 5-10%. Selain itu, kegagalan katastrofik pada peralatan berputar (rotating equipment) memiliki implikasi keselamatan kerja (occupational safety) yang serius, terutama pada industri proses dengan fluida hidrokarbon bertekanan tinggi.

Di sisi lain, paper pendukung dari Rahul Patel, Sharad Bhartiya, dan Ravindra Gudi (2024) yang dipublikasikan di *IFAC-PapersOnLine* dengan DOI [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) turut memberikan kontribusi konseptual penting. Meskipun fokus utama Patel dkk. adalah integrasi Physics-Informed Neural Networks (PINN) ke dalam Model Predictive Control (MPC) untuk sistem proses, kerangka konseptual yang mereka bangun menunjukkan bagaimana jaringan saraf tiruan dapat digabungkan dengan model first-principles untuk menghasilkan generalisasi yang lebih baik. Pelajaran metodologis dari paper Patel dkk. sangat relevan bagi desain arsitektur CNN yang tidak hanya *data-driven* murni, tetapi juga menyuntikkan *domain knowledge* berupa invariansi geometris dan aturan fisika tertentu ke dalam loss function. Pendekatan hybrid seperti ini menjadi semakin penting ketika data anomali berlabel (labeled anomalies) sangat terbatas di lapangan — sebuah kondisi yang oleh Pearson disebut sebagai *rare-event imbalanced dataset*.

Secara strategis, topik ini berada di persimpangan tiga bidang keahlian Teknik Industri, yaitu: (1) *engineering economy* (optimalisasi interval inspeksi), (2) *quality engineering* (akurasi klasifikasi cacat), dan (3) *operations research* (penjadwalan pemeliharaan). Penguasaan modul 2435 ini akan membekali perekayasa industri dengan perangkat analitis untuk mengevaluasi Trade-off antara biaya investasi sensor/kamera, biaya false alarm (Type I error), dan biaya missed detection (Type II error), yang kesemuanya merupakan inti pengambilan keputusan di bawah ketidakpastian.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

CNN adalah arsitektur jaringan saraf tiruan feed-forward yang dirancang khusus untuk memproses data grid seperti citra digital. Operasi fundamentalnya adalah konvolusi diskrit dua dimensi yang didefinisikan sebagai:

$$
y_{i,j}^{(l)} = f\left(b^{(l)} + \sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} w_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)}\right)
$$

di mana $y_{i,j}^{(l)}$ adalah aktivasi neuron pada posisi $(i,j)$ di lapisan $l$, $w_{m,n}^{(l)}$ adalah elemen kernel konvolusi dengan dimensi $k_h \times k_w$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear seperti ReLU: $f(z) = \max(0, z)$.

Untuk mengurangi dimensi fitur dan meningkatkan invariansi translasi, diterapkan operasi pooling, umumnya *max-pooling*:

$$
p_{i,j}^{(l)} = \max_{(m,n) \in \mathcal{N}(i,j)} y_{m,n}^{(l)}
$$

Output dari lapisan konvolusi dan pooling akhirnya dilewatkan ke *fully-connected layer* untuk klasifikasi multi-kelas (normal, anomali-tipe-A, anomali-tipe-B, dst.).

### 2.2 Formulasi Loss Function

Untuk tugas klasifikasi anomali biner (normal vs cacat), Pearson (2024) mengadopsi *binary cross-entropy loss* sebagai fungsi objektif:

$$
\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1 - y_i)\log(1 - \hat{y}_i)\right]
$$

di mana $N$ adalah jumlah sampel citra dalam satu batch, $y_i \in \{0,1\}$ adalah label ground-truth, dan $\hat{y}_i \in [0,1]$ adalah probabilitas prediksi keluaran sigmoid. Mengingat dataset anomali pada kondisi riil sangat tidak seimbang (*imbalanced*), Pearson merekomendasikan penggunaan *focal loss*:

$$
\mathcal{L}_{FL} = -\alpha_t (1 - \hat{y}_t)^{\gamma_f} \log(\hat{y}_t)
$$

di mana $\alpha_t \in [0,1]$ adalah *class-balancing weight* dan $\gamma_f \geq 0$ adalah *focusing parameter* (umumnya $\gamma_f = 2$) yang menekan kontribusi loss dari sampel yang sudah mudah diklasifikasikan.

### 2.3 Metrik Evaluasi Kinerja

Pearson (2024) menggunakan empat metrik utama untuk menilai kinerja model pada dataset anomali industri:

$$
\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}
$$

$$
F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}
$$

$$
\text{AUC} = \int_0}^{1} \text{TPR}(\tau)\, d(\text{FPR}(\tau))
$$

di mana $TP, FP, TN, FN$ berturut-turut adalah *True Positive, False Positive, True Negative, False Negative*; $\tau$ adalah threshold klasifikasi; dan AUC mengukur kemampuan diskriminasi model pada seluruh ambang keputusan. Pearson melaporkan bahwa model CNN-nya mencapai AUC sebesar 0,987 pada benchmark deteksi cacat pompa industri.

### 2.4 Physics-Informed Loss (Injeksi Domain Knowledge)

Memperluas kerangka Patel, Bhartiya, dan Gudi (2024) untuk konteks vision, total objective function dapat ditulis sebagai:

$$
\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{data}} + \lambda_{\text{phys}} \mathcal{L}_{\text{phys}}
$$

di mana $\mathcal{L}_{\text{phys}}$ adalah penalti berbasis hukum fisika — misalnya invariansi rotasi pada permukaan bearing, atau kekonsistenan termodinamika citra thermal — dan $\lambda_{\text{phys}}$ adalah hyperparameter keseimbangan. Pendekatan ini secara langsung mentransfer filosofi PINN ke dalam arsitektur inspeksi visual, sehingga model tidak hanya menghafal pola citra tetapi juga menghormati struktur geometris/fisik peralatan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem End-to-End

Sistem deteksi anomali berbasis CNN untuk predictive maintenance mengikuti arsitektur berlapis sebagai berikut:

1. **Akuisisi Citra (Image Acquisition Layer):** Kamera industri IP67 (resolusi minimal 1920×1080 px) dipasang pada housing pelindung di sekitar peralatan target dengan jarak 0,5–2 meter. Pencahayaan terstruktur (LED ring atau strobo) dipasang untuk memastikan kecerahan konsisten, mengurangi variabilitas ambien.
2. **Pra-pemrosesan (Preprocessing Layer):** Resolusi citra dinormalisasi ke 224×224 px (standar input ResNet/VGG), konversi color space ke grayscale, normalisasi intensitas piksel ke $[0,1]$, dan augmentasi data (*rotation, flip, brightness jitter*) untuk memperbesar variasi training set.
3. **Inferensi CNN (Inference Layer):** Model CNN terlatih (misal arsitektur ResNet-50 transfer-learned) melakukan forward propagation terhadap citra masukan dan menghasilkan skor anomali $s \in [0,1]$.
4. **Keputusan & Alarm (Decision Layer):** Jika $s > \tau$ (threshold operasional, default $\tau = 0,5$), sistem memicu alarm pemeliharaan dan mencatatkan *work order* otomatis di CMMS (Computerized Maintenance Management System).
5. **Loop Pembaruan Model (Continuous Learning):** Data baru yang telah diverifikasi oleh teknisi senior digunakan untuk *fine-tuning* model secara periodik (rolling window 30 hari).

### 3.2 Standar Prosedur Operasional (SOP) Instalasi dan Validasi

| No | Tahapan SOP | Penanggung Jawab | Parameter Kendali |
|----|--------------|-------------------|-------------------|
| 1 | Site survey & risk assessment | Engineer Reliability | Jarak kamera, IP rating, kondisi ambient |
| 2 | Instalasi hardware & kalibrasi geometris | Teknisi Instrumentasi | Sudut kamera ≤ 30° dari normal permukaan |
| 3 | Akuisisi dataset awal (min. 5.000 citra) | Teknisi Inspeksi | Komposisi: ≥ 80% normal, ≥ 20% anomali |
| 4 | Pelabelan data oleh *domain expert* | Inspektur Senior | Cohen's Kappa antar-labeler ≥ 0,80 |
| 5 | Training model & hyperparameter tuning | Data Scientist | Validation F1 ≥ 0,90 sebelum deployment |
| 6 | Pilot test 30 hari paralel dengan metode lama | Engineer Pemeliharaan | False alarm rate ≤ 5% |
| 7 | Commissioning & dokumentasi as-built | Project Manager | Serah terima ke operations |

### 3.3 Diagram Alir Logika Keputusan

```
Citra Input → Pra-pemrosesan → CNN Inference → Skor s
                                            │
                                            ▼
                            ┌──────────────────────────────┐
                            │ s > τ  ?                     │
                            └──────┬──────────────┬────────┘
                                Ya │              │ Tidak
                                   ▼              ▼
                         Trigger Alarm    Log Normal Sample
                         & Work Order          │
                                │              ▼
                                │       Update Statistics
                                ▼
                    Update Maintenance
                          Schedule
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Studi Kasus

Sebuah pabrik petrokimia memiliki 120 unit pompa sentrifugal yang beroperasi 24/7. Tim rekayasa memutuskan untuk memasang sistem deteksi anomali visual berbasis CNN pada 10 unit pompa kritis sebagai pilot project. Data dikumpulkan selama 60 hari.

**Parameter Industri:**
- Biaya downtime per jam: $C_{DT} = $ USD 25.000
- Biaya inspeksi manual per pompa per bulan: $C_{insp} = $ USD 800
- Biaya pemasangan sistem (capex per pompa): $C_{capex} = $ USD 12.000 (amortisasi 5 tahun)
- Frekuensi kegagalan tanpa sistem: $\lambda_0 = 0,015$ per pompa per bulan (1,8% monthly failure rate)
- Lead time inspeksi