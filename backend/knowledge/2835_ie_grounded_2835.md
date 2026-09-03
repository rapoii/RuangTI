# 2835 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin terdigitalisasi, **pemeliharaan prediktif** (*predictive maintenance* — PdM) telah menjadi pilar strategis untuk mempertahankan keandalan sistem produksi dan menekan biaya operasional. Menurut estimasi industri yang banyak dikutip, biaya *unplanned downtime* pada fasilitas manufaktur kelas dunia berkisar antara **USD 10.000–50.000 per jam** tergantung pada sektor dan kompleksitas lini produksi, dengan kerugian agregat global yang melampaui triliunan dolar per tahun (Mobley, 2002; Swanson, 2001). Paradigma tradisional berupa *corrective maintenance* (CM) dan *preventive maintenance* (PM) terbukti tidak optimal: CM menunggu kegagalan terjadi dengan konsekuensi kerusakan berantai dan biaya emergency repair yang tinggi, sementara PM berbasis jadwal tetap (*time-based*) cenderung melakukan intervensi terlalu dini maupun terlambat, sehingga komponen masih diganti dalam kondisi layak pakai (*over-maintenance*) atau justru gagal sebelum jadwal servis terjadwal (*under-maintenance*).

Di sinilah **Convolutional Neural Networks (CNN)** sebagai cabang *deep learning* menawarkan lompatan kualitatif. Studi yang dipublikasikan oleh **James Pearson (2024)** dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) secara khusus membahas bagaimana deteksi anomali berbasis citra (*image-based anomaly detection*) pada peralatan industri — seperti pompa, motor listrik, bearing, heat exchanger, dan panel listrik — dapat diotomatisasi melalui arsitektur CNN yang mampu mengekstraksi fitur visual hierarkis dari gambar inspeksi atau citra kamera pemantau (CCTV/termal). Pendekatan ini menjawab keterbatasan inspeksi visual manual yang bersifat subjektif, kelelahan operator, serta tingkat konsistensi yang rendah antarshift. Lebih lanjut, integrasi dengan arsitektur kontrol lanjutan seperti **Physics-Informed Neural Networks – Model Predictive Control (PINN-MPC)** yang dikaji oleh Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa keputusan pemeliharan tidak berdiri sendiri, melainkan harus disinergikan dengan kendali proses hulu-hilir agar *false alarm* tidak memicu *setpoint disturbance* yang merugikan *throughput*. Urgensi integratif ini menjadi semakin nyata ketika industri bergerak menuju **Industry 4.0** dan **Industrial AI (IIoT)** di mana data citra, sinyal getaran, suhu, dan arus tersedia dalam volume besar melalui sensor *edge* dan platform *cloud analytics*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusi dan Ekstraksi Fitur

CNN membangun representasi fitur melalui operasi **konvolusi diskrit dua-dimensi**. Untuk citra input $X \in \mathbb{R}^{H \times W \times C}$ dan kernel filter $W \in \mathbb{R}^{k_h \times k_w \times C}$, *feature map* keluaran dihitung sebagai:

$$
Y_{i,j} = \sigma\left( \sum_{m=0}^{k_h-1} \sum_{n=0}^{k_w-1} \sum_{c=0}^{C-1} X_{i+m,\,j+n,\,c} \cdot W_{m,n,c} + b \right)
$$

dengan $\sigma(\cdot)$ merupakan fungsi aktivasi (umumnya ReLU: $\sigma(x) = \max(0,x)$), $b$ adalah *bias*, dan indeks $(i,j)$ melintasi citra dengan *stride* $s$. Setelah konvolusi, **pooling** (umumnya *max-pooling*) melakukan downsampling untuk mengurangi dimensi spasial dan meningkatkan invariansi translasi:

$$
P_{i,j} = \max_{(m,n) \in \mathcal{R}_{i,j}} Y_{m,n}
$$

di mana $\mathcal{R}_{i,j}$ adalah jendela pooling berukuran $p \times p$. Bertumpuknya blok konvolusi–aktivasi–pooling menghasilkan piramida fitur dari tingkat rendah (tepi, tekstur) ke tingkat tinggi (pola kerusakan struktural).

### 2.2 Formulasi Anomali sebagai Rekonstruksi Autoencoder

Untuk deteksi anomali tanpa pengawasan (*unsupervised*), pendekatan yang banyak digunakan adalah **Convolutional Autoencoder (CAE)**. Encoder $f_{\phi}: \mathcal{X} \rightarrow \mathcal{Z}$ memetakan citra input ke *latent space* $\mathbf{z} \in \mathbb{R}^{d}$, sedangkan decoder $g_{\theta}: \mathcal{Z} \rightarrow \mathcal{X}$ merekonstruksi citra $\hat{X} = g_{\theta}(f_{\phi}(X))$. Pelatihan hanya menggunakan citra kondisi normal, sehingga **reconstruction error** menjadi proksi anomali:

$$
L_{\text{recon}}(X) = \| X - \hat{X} \|_{2}^{2} = \sum_{i,j,c} \left( X_{i,j,c} - \hat{X}_{i,j,c} \right)^{2}
$$

Aturan keputusan (*anomaly scoring*) ditentukan oleh ambang batas $\tau$:

$$
\text{Label}(X) =
\begin{cases}
\text{Normal}, & L_{\text{recon}}(X) \leq \tau \\[4pt]
\text{Anomali}, & L_{\text{recon}}(X) > \tau
\end{cases}
$$

Nilai $\tau$ lazimnya ditentukan dari distribusi $L_{\text{recon}}$ pada data validasi normal, misalnya pada persentil ke-95 atau ke-99: $\tau = Q_{1-\alpha}(L_{\text{recon}})$, dengan $\alpha$ adalah tingkat signifikansi yang dapat diterima (*false positive rate*).

### 2.3 Integrasi dengan Physics-Informed Neural Networks (PINN)

Ketika keputusan pemeliharan harus mempertimbangkan dinamika proses fisik, kerangka kerja yang ditawarkan oleh Patel dkk. (2024) memperkenalkan **PINN** yang menggabungkan *data-driven loss* dengan *physics loss* melalui *partial differential equation* (PDE) residu:

$$
L_{\text{PINN}} = \lambda_{d} \, L_{\text{data}} + \lambda_{p} \, L_{\text{physics}}
$$

dengan:

$$
L_{\text{physics}} = \frac{1}{N_{r}} \sum_{k=1}^{N_{r}} \left\| \mathcal{F}\!\left( \hat{u}(x_k, t_k; \theta) \right) \right\|_{2}^{2}
$$

di mana $\mathcal{F}(\cdot)$ adalah *operator* PDE residual (misalnya persamaan panas, dinamika fluida, atau persamaan estado proses). Dalam konteks deteksi anomali peralatan, *physics loss* memastikan bahwa *latent representation* konsisten dengan hukum konservasi massa/energi, sehingga anomali yang terdeteksi benar-benar merepresentasikan deviasi fisik, bukan artefak akuisisi citra.

### 2.4 Kendali Prediktif Model (MPC) sebagai Pengambil Keputusan

Kendali downstream menggunakan formulasi optimasi *receding horizon*:

$$
\min_{\mathbf{u}_{0:N-1}} \; J = \sum_{k=0}^{N-1} \left[ (x_k - x_{\text{ref}})^{\top} Q (x_k - x_{\text{ref}}) + u_k^{\top} R \, u_k \right] + (x_N - x_{\text{ref}})^{\top} P (x_N - x_{\text{ref}})
$$

$$
\text{s.t.} \quad x_{k+1} = f(x_k, u_k), \quad x_k \in \mathcal{X}, \; u_k \in \mathcal{U}
$$

dengan $x_k$ adalah *state*, $u_k$ *input* kendali, $N$ horizon prediksi, serta $Q, R, P \succ 0$ matriks pembobot. Ketika skor anomali melebihi ambang batas, bobot $R$ dapat di-*re-tune* untuk memperlambat operasi dan memberi kesempatan inspeksi — memperlihatkan hubungan dua arah antara diagnosis dan kontrol.

---

##