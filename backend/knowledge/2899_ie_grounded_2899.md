# 2899 — Deteksi Anomali Berbasis Citra dan Kendali Prediktif Berbasis Jaringan Saraf Fisika-Informatif untuk Pemeliharaan Prediktif Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* telah mengubah secara fundamental paradigma pemeliharaan aset industri dari pendekatan *reactive* dan *preventive* berbasis jadwal tetap menuju *predictive maintenance* (PdM) berbasis kondisi aktual peralatan. Menurut Pearson (2024) dalam studinya yang dipublikasikan melalui DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), kegagalan tak terduga pada peralatan kritis di sektor manufaktur, energi, dan proses kimia menyumbang rata-rata 15–25% dari total biaya operasional (*operational expenditure*/OPEX) pabrik, dengan estimasi kerugian produktivitas global mencapai USD 50 miliar per tahun. Pearson (2024) menekankan bahwa inspeksi visual manual memiliki kelemahan inheren berupa subjektivitas evaluator, kelelahan operator, serta cakupan inspeksi yang terbatas pada shift produksi tertentu.

Di sisi lain, paper pendukung Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menggarisbawahi bahwa integrasi *Physics-Informed Neural Networks* (PINNs) ke dalam skema *Model Predictive Control* (MPC) mampu menjawab keterbatasan model *black-box* dalam sistem proses. Kombinasi arsitektur deteksi anomali visual berbasis CNN dengan kendali prediktif fisika-informatif menjadi tulang punggung sistem *Cyber-Physical Production System* (CPPS) modern.

Urgensi ekonomis penerapan PdM berbasis citra digital diperkuat oleh data bahwa downtime tak terjadwal pada lini *continuous process* (misalnya kilang minyak, petrokimia, dan *semiconductor fabrication*) menghasilkan kerugian sebesar USD 50.000–250.000 per jam. Pearson (2024) melaporkan bahwa implementasi deteksi anomali berbasis CNN pada 12 fasilitas manufaktur di Eropa menunjukkan *Mean Time Between Failures* (MTBF) meningkat 34% dan *Overall Equipment Effectiveness* (OEE) naik 6,8 poin persentase. Oleh karena itu, modul ini membahas sinergi teknologi computer vision dan kendali prediktif untuk membangun sistem pemeliharaan yang *self-aware*, *self-diagnosing*, dan *self-optimizing*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) mengusulkan arsitektur *Convolutional Autoencoder* (CAE) yang melakukan pembelajaran representasi fitur citra secara *unsupervised*. Operasi konvolusi dua dimensi didefinisikan sebagai:

$$y_{i,j,k} = \sigma\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} w_{m,n,k}^{(l)} \cdot x_{i+m,\,j+n}^{(l-1)} + b_k^{(l)}\right)$$

di mana $y_{i,j,k}$ adalah fitur aktivasi pada koordinat $(i,j)$ dari saluran ke-$k$ di lapisan $l$, $w_{m,n,k}^{(l)}$ adalah kernel konvolusi berukuran $M \times N$, $x^{(l-1)}$ adalah *feature map* lapisan sebelumnya, $b_k^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(x)=\max(0,x)$).

Autoencoder meminimalisasi *Mean Squared Error* (MSE) rekonstruksi:

$$\mathcal{L}_{\text{MSE}} = \frac{1}{N}\sum_{i=1}^{N}\|x_i - \hat{x}_i\|_2^2$$

Skor anomali untuk citra uji $x$ kemudian dihitung sebagai:

$$A(x) = \frac{1}{HW}\sum_{i=1}^{H}\sum_{j=1}^{W}(x_{i,j} - \hat{x}_{i,j})^2$$

Suatu citra diklasifikasikan anomali jika $A(x) > \tau$, dengan $\tau$ adalah *threshold* yang ditentukan berdasarkan distribusi skor anomali pada data *normal training* (umumnya pada persentil ke-99: $\tau = \mu_{train} + 2{,}33\,\sigma_{train}$).

### 2.2 Physics-Informed Neural Networks (PINNs) untuk MPC

Patel dkk. (2024) memformulasikan PINN sebagai neural network $u_\theta(t,x)$ yang meminimalisasi *loss function* gabungan:

$$\mathcal{L}_{\text{PINN}} = \lambda_{\text{data}}\,\mathcal{L}_{\text{data}} + \lambda_{\text{physics}}\,\mathcal{L}_{\text{physics}}$$

di mana:

$$\mathcal{L}_{\text{data}} = \frac{1}{N_d}\sum_{i=1}^{N_d}(u_\theta(t_i,x_i) - u_i^{\text{obs}})^2$$

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{i=1}^{N_p}\|r(t_i,x_i)\|_2^2$$

dengan residu PDE:

$$r(t,x) = \frac{\partial u_\theta}{\partial t} + \mathcal{N}[u_\theta; \lambda]$$

di mana $\mathcal{N}$ adalah operator diferensial non-linear yang merepresentasikan fisika proses (misalnya persamaan reaksi-diffusi untuk reaktor kimia atau persamaan konservasi massa-energi pada *heat exchanger*).

### 2.3 Formulasi Model Predictive Control (MPC)

Masalah optimasi MPC dengan horizon prediksi $N_p$ dan horizon kontrol $N_c$ diformulasikan sebagai:

$$\min_{u_k,\,\forall k\in[0,N_p-1]} J = \sum_{k=0}^{N_p-1}\left[(x_k - x_{\text{ref}})^T Q (x_k - x_{\text{ref}}) + u_k^T R u_k + \Delta u_k^T S \Delta u_k\right]$$

subjek terhadap kendala:

$$x_{k+1} = f_{\text{PINN}}(x_k, u_k), \quad x_0 = x(t)$$

$$x_{\min} \leq x_k \leq x_{\max}, \quad u_{\min} \leq u_k \leq u_{\max}$$

Matriks bobot $Q$, $R$, dan $S$ adalah *tuning parameter* yang menentukan trade-off antara *setpoint tracking*, *effort control*, serta kelancaran aksi kontrol.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi Sistem PdM

Pearson (2024) merancang SOP tujuh tahap untuk implementasi deteksi anomali berbasis CNN:

1. **Akuisisi Data Citra**: Pengambilan citra peralatan menggunakan kamera industri (*line-scan*, *area-scan*, atau *hyperspectral*) dengan resolusi minimum 1024×1024 piksel, frekuensi akuisisi 1–30 fps, dan pencahayaan terkontrol (standar IEC 62471 untuk fotobiological safety).
2. **Pra-pemrosesan**: Normalisasi intensitas piksel, resize ke dimensi standar, augmentasi data (rotasi, flip, *contrast adjustment*), dan segmentasi ROI (*Region of Interest*).
3. **Pelatihan CAE**: Inisialisasi bobot dengan *He initialization*, optimasi menggunakan Adam optimizer dengan *learning rate* $\eta = 10^{-3}$, dan *early stopping* berdasarkan *validation loss*.
4. **Kalibrasi Threshold**: Penentuan $\tau$ berdasarkan distribusi skor anomali pada dataset validasi *normal-only*.
5. **Deployment Edge/Inference**: Inferensi menggunakan *edge computing device* (NVIDIA Jetson AGX Orin atau Intel Movidius Myriad X) dengan latensi target $\leq 50$ ms per citra.
6. **Alarm & Decision Support**: Aktivasi alarm, eskalasi ke *control room*, dan penjadwalan inspeksi teknisi sesuai SOP ISO 55000 untuk manajemen aset.
7. **Continuous Learning**: Retraining periodik menggunakan *feedback loop* dari teknisi lapangan (*active learning*).

### 3.2 Integrasi dengan MPC Berbasis PINNs

Patel dkk. (2024) melengkapi arsitektur dengan lapisan kendali:

- **Layer 1 — Perception**: CNN menerima data citra dan sensor IoT (*vibration*, *temperature*, *current*).
- **Layer 2 — Diagnosis**: Modul deteksi anomali menghasilkan flag kondisi abnormal.
- **Layer 3 — Prediction**: PINN memprediksi trajektori state $\hat{x}(t+\Delta t)$ berdasarkan residu PDE.
- **Layer 4 — Optimization**: Solver Quadratic Programming (QP) seperti HPIPM atau OSQP menyelesaikan masalah MPC dalam horizon $N_p = 20$–$50$ langkah.
- **Layer 5 — Actuation**: Sinyal kontrol $u_k^*$ dikirim ke *Programmable Logic Controller* (PLC) melalui protokol OPC UA.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Deteksi Anomali pada Bantalan Rol Pompa Sentrifugal

**Parameter Input:**
- Dataset MVTec AD: 5.354 citra *training* kondisi normal, 1.100 citra *test* (362 *normal* + 738 *defective*).
- Arsitektur CAE: Encoder 4 lapisan konvolusi (32, 64, 128, 256 filter) + Decoder simetris.
- Epoch pelatihan: 100, *batch size*: 32.

**Perhitungan Skor Anomali (contoh 3 citra uji):**

| Citra | MSE Rekonstruksi | Status |
|------:|:----------------:|:------:|
| $x_1$ (normal bearing) | 0,00341 | Normal |
| $x_2$ (cracked bearing) | 0,02457 | Anomali |
| $x_3$ (severely worn) | 0,08912 | Anomali |

**Threshold** (persentil ke-99 data normal): $\tau = \mu + 2{,}33\sigma = 0{,}0041 + 2{,}33 \times 0{,}0012 = 0{,}00690$.

Karena $A(x_2) = 0{,