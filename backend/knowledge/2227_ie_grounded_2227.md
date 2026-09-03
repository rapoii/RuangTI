# 2227 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* dan *Industrial Internet of Things* (IIoT) telah mengubah secara fundamental paradigma pemeliharaan aset fisik di sektor industri manufaktur, energi, dan proses. Pergeseran dari paradigma reaktif-korektif menuju *predictive maintenance* (PdM) berbasis data menjadi keniscayaan strategis mengingat dampak ekonomi downtime yang signifikan. Menurut estimasi literatur industri, biaya downtime tak terjadwal pada lini produksi kontinyu dapat mencapai USD 50.000 per jam pada fasilitas petrokimia menengah dan hingga USD 1,5 juta per jam pada pabrik semikonduktor kelas atas. James Pearson (2024) dalam papernya yang dipublikasikan pada *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa integrasi metode *deep learning* dengan sistem pencitraan industri—khususnya *Convolutional Neural Networks* (CNN)—menawarkan lompatan kuantum dalam akurasi deteksi anomali permukaan, struktur mikro, dan cacat geometris pada komponen rotodinamik, bejana tekan, serta elemen transpor panas yang sulit diakses oleh sensor titik konvensional.

Urgensi permasalahan semakin kompleks ketika mempertimbangkan heterogenitas data visual yang dihasilkan oleh sistem inspeksi modern: citra *visible-light CCD*, citra termal *infrared* (IRT), citra *X-ray computed tomography* (CT), serta citra hiperspektral. Pearson (2024) menunjukkan bahwa arsitektur CNN modern mampu melakukan *feature extraction* hirarkis mulai dari edge primitive hingga representasi semantik cacat dengan akurasi klasifikasi yang melampaui inspektur manusia berpengalaman (>96% F1-score pada dataset MVTec AD). Konteks ini selaras dengan tantangan operasional yang diidentifikasi oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) yang menekankan bahwa integrasi kendali prediktif berbasis model (MPC) dengan *Physics-Informed Neural Networks* (PINNs) menjadi komplemen strategis untuk sistem deteksi anomali, karena kedua pendekatan secara kolektif memungkinkan transisi dari sekadar *monitoring* menuju *autonomous closed-loop process control* yang menjamin keselamatan proses selama fase degradasi aset.

Secara strategis, keputusan investasi pada sistem CNN-PdM tidak hanya menurunkan *Mean Time To Repair* (MTTR) tetapi juga memperpanjang *Remaining Useful Life* (RUL) melalui intervensi presisi. Modul ini membahas secara mendalam bagaimana arsitektur CNN didesain untuk mendeteksi anomali, bagaimana formulasi matematis pemrosesan citra digital bekerja, bagaimana standar operasional implementasi disusun mengikuti kerangka ISO 13373 (vibrasi), ISO 9001 (manajemen mutu), dan IEC 61508 (keselamatan fungsional), serta bagaimana studi kasus kuantitatif dapat memberikan gambaran *business case* investasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusi Diskrit

CNN bekerja melalui operasi konvolusi diskrit dua-dimensi terhadap tensor citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$, di mana $H$, $W$, dan $C$ masing-masing menyatakan tinggi, lebar, dan jumlah kanal warna. Peta fitur keluaran $\mathbf{Y}^{(l)}$ pada lapisan $l$ dihasilkan oleh konvolusi dengan kernel $\mathbf{K}_{l} \in \mathbb{R}^{k_h \times k_w \times C_{in} \times C_{out}}$:

$$\mathbf{Y}^{(l)}_{i,j,c} = f\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1}\sum_{c'=0}^{C_{in}-1} \mathbf{X}^{(l-1)}_{i+m,\,j+n,\,c'}\cdot \mathbf{K}^{(l)}_{m,n,c',c} + b^{(l)}_c\right)$$

di mana $f(\cdot)$ merupakan fungsi aktivasi nonlinier (umumnya ReLU: $f(z)=\max(0,z)$), dan $b^{(l)}_c$ adalah bias kanal. Pearson (2024) menekankan bahwa untuk citra anomali industri dengan rasio sinyal-ke-noise rendah, penggunaan *LeakyReLU* dengan parameter $\alpha=0{,}1$ memberikan gradien yang lebih stabil selama propagasi balik:

$$f(z) = \begin{cases} z, & z \geq 0 \\ \alpha z, & z < 0 \end{cases}$$

### 2.2 Formulasi Deteksi Anomali via Autoencoder

Pendekatan Pearson (2024) menggunakan varian autoencoder konvolusional untuk deteksi anomali tak tersupervisi. Encoder $E_\phi: \mathcal{X} \rightarrow \mathcal{Z}$ memetakan citra masukan ke ruang laten dimensi rendah $\mathbf{z} \in \mathbb{R}^{d}$, dan decoder $D_\theta: \mathcal{Z} \rightarrow \mathcal{X}$ merekonstruksi citra $\hat{\mathbf{X}}$. Fungsi kerugian rekonstruksi didefinisikan sebagai:

$$\mathcal{L}_{rec}(\phi,\theta) = \frac{1}{N}\sum_{i=1}^{N} \|\mathbf{X}_i - D_\theta(E_\phi(\mathbf{X}_i))\|_2^2$$

*Anomaly score* untuk citra uji $\mathbf{X}_u$ dihitung dari jarak Euclidean piksel-wise terhadap rekonstruksi, lalu diagregasi dengan ambang batas $\tau$:

$$s(\mathbf{X}_u) = \frac{1}{H\cdot W}\sum_{i,j}\left(\mathbf{X}_u(i,j) - \hat{\mathbf{X}}_u(i,j)\right)^2 \quad;\quad \text{anomali jika } s(\mathbf{X}_u) > \tau$$

### 2.3 Formulasi Physics-Informed Neural Networks untuk MPC Pendukung

Patel, Bhartiya, dan Gudi (2024) menyusun arsitektur PINN yang menggabungkan kerugian data $\mathcal{L}_{data}$ dengan kerugian residual fisika $\mathcal{L}_{phys}$ dari persamaan diferensial parsial yang menggovern dinamika proses:

$$\mathcal{L}_{PINN} = \lambda_1 \mathcal{L}_{data} + \lambda_2 \mathcal{L}_{phys}, \quad \mathcal{L}_{phys} = \frac{1}{N_r}\sum_{k=1}^{N_r}\left\|\mathcal{N}[\hat{u}](t_k)\right\|^2$$

di mana $\mathcal{N}[\cdot]$ adalah operator diferensial terhadap jaringan $\hat{u}(t;\boldsymbol{\omega})$. Ketika diintegrasikan dengan MPC pada horizon prediksi $N_p$, permasalahan optimasi menjadi:

$$\min_{\Delta\mathbf{U}_k} J = \sum_{j=0}^{N_p-1}\left[\|\mathbf{y}_{k+j|k}-\mathbf{y}^{ref}\|_{\mathbf{Q}}^2 + \|\Delta \mathbf{u}_{k+j}\|_{\mathbf{R}}^2\right]$$
$$\text{s.t.}\quad \mathbf{x}_{k+j+1|k} = \mathbf{g}(\mathbf{x}_{k+j|k},\mathbf{u}_{k+j|k}),\quad \mathbf{u}^{min}\le\mathbf{u}\le\mathbf{u}^{max}$$

Sinergi antara CNN-anomali dan PINN-MPC memungkinkan sistem industri: (a) mendeteksi degradasi dini secara visual, dan (b) mengadaptasi parameter kendali real-time agar proses tetap aman saat anomali terdeteksi, yang merupakan kerangka yang divalidasi oleh kedua paper di atas.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem CNN-PdM mengikuti SOP bertahap sebagai berikut:

**Tahap 1 — Akuisisi Data & Pra-pemrosesan.** Citra dikumpulkan dari lini produksi menggunakan kamera industri terkalibrasi (resolusi ≥ 5 MP, *frame rate* ≥ 30 fps, antarmuka GigE Vision). Pra-pemrosesan mengikuti alur: *cropping* pada *Region of Interest* (ROI) → *resize* ke dimensi standar $224\times224\times3$ → normalisasi intensitas piksel $\mathbf{X}_{norm}=(\mathbf{X}/255{,}0)-0{,}5$ → augmentasi geometris (rotasi $\pm 15°$, flip horizontal, jitter brightness ±10%) untuk memperbesar variabilitas data pelatihan.

**Tahap 2 — Pelatihan Model.** Dataset dibagi dengan rasio 70:15:15 untuk *train:validation:test*. Arsitektur yang direkomendasikan Pearson (2024) adalah *transfer learning* dari ResNet-50 pra-terlatih ImageNet, dengan *fine-tuning* 10 lapisan akhir dan *learning rate* sebesar $10^{-4}$ menggunakan optimizer Adam ($\beta_1=0{,}9$, $\beta_2=0{,}999$). Pelatihan dihentikan lebih awal (*early stopping*) ketika *validation loss* tidak membaik selama 10 epoch berturut-turut.

**Tahap 3 — Kalibrasi Ambang Batas Anomali.** Ambang batas $\tau$ ditentukan dari persentil ke-99 *anomaly score* pada himpunan validasi normal (kondisi *healthy baseline*). Pearson (2024) menggunakan prinsip kontrol statistik proses: $\tau = \mu_{normal} + 3\sigma_{normal}$ (aturan 3-sigma).

**Tahap 4 — Integrasi dengan Platform IIoT.** Model diekspor ke format ONNX dan dideploy pada *edge device* (NVIDIA Jetson AGX Orin, latency < 50 ms per inferensi). Telemetri dikirim ke *SCADA/DCS* melalui protokol MQTT dengan QoS level 2.

**Tahap 5 — Integrasi PINN-MPC (Patel et al., 2024).** Ketika skor anomali melampaui $\tau$, modul PINN-MPC mengaktifkan *safety control mode*: memperketat batas variabel proses ($\mathbf{u}^{min,max}$ dipersempit 20%), meningkatkan bobot penalty pelanggaran kendala $\mathbf{Q}$, dan mengaktifkan *soft constraint* pada *rate-of-change* variabel untuk mencegah transien berbahaya.

**Tahap 6 — Continuous Improvement.** Mekanisme *active learning* di mana citra anomali baru yang dikonfirmasi ahli di-*feedback* ke dataset pelatihan untuk *retraining* periodik (siklus 30 hari).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Inspeksi otomatis *impeller* pompa sentrifugal ASTM A743 grade CA6NM pada pabrik kimia.

**Parameter Operasional:**
- Dimensi citra: $H\times W = 224\times 224$
- Panjang kernel konvolusi lapisan 1: $k_h = k_w = 3$, stride $s=1$, padding $p=1$
- Capaian operasi: 1.000 impeller/hari, tingkat cacat historis: 4,5%
- Biaya inspeksi manual: Rp 75.000/unit
- Biaya inspeksi otomatis (amortisasi): Rp 12.500/unit
- Downtime akibat cacat terlewat: Rp 50.000.000/kejadian

**Perhitungan 1 — Dimensi Peta Fitur:**
$$H_{out} = \frac{H_{in} - k_h + 2p}{s} + 1 = \frac{224 - 3 + 2(1)}{1} + 1 = 224$$

jadi dimensi spasial dipertahankan, sementara kedalaman fitur bertambah dari $C_{in}=3$ menjadi $C_{out}=64$.

**Perhitungan 2 — Anomaly Score pada Sampel Uji:**
Misalkan kita memiliki dua sampel:

| Citra | MSE rekonstruksi | Klasifikasi |
|-------|-----------------|-------------|
| Normal (bearing sehat) | 0,0084 | $\leq \tau = 0,0120$ → **Normal** |
| Anomali (retak mikro pada) | 0,0391 | $> \tau$ → **Anomali** |

di mana $\tau = \mu_{normal} + 3\sigma_{normal} = 0{,}0050 + 3(0{,}0023) = 0{,}0120$.

**Perhitungan 3 — Akurasi dan F1-Score** (berdasarkan confusion matrix pada test set 500 citra):

$$\text{Precision} = \frac{TP}{TP+FP} = \frac{22}{22+2} = 0{,}917$$

$$\text{Recall} = \frac{TP}{TP+FN} = \frac{22}{22+1} = 0{,}957$$

$$F_1 = 2\cdot\frac{P\cdot R}{P+R} = 2\cdot\frac{0{,}917\times0{,}957}{0{,}917+0{,}957} = 0{,}937$$

**Perhitungan 4 — Analisis Ekonomi:**
- Cacat historis harian: $1.000 \times 0{,}045 = 45$ unit
- Cacat tertangkap otomatis (recall 95,7%): $45\times 0{,}957 = 43{,}07 \approx 43$ unit
- Cacat terlewat (FN): $45 - 43 = 2$ unit/hari
- Penghematan inspeksi: $(75.000 - 12.500)\times 1.000 = \text{Rp