# 1459 — Kecerdasan Buatan untuk Solusi Perubahan Iklim: Integrasi Graph Neural Networks dalam Efisiensi Energi Manufaktur dan Mitigasi Emisi Karbon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Artificial Intelligence-Based Solutions for Climate Change: A Review (Catatan: artikel ini berstatus *retracted* per catatan redaksi jurnal, namun tetap dijadikan basis literatur sesuai dokumen sumber; pengguna dimohon melakukan verifikasi silang terhadap jurnal primer yang tidak ter-retract untuk pengambilan keputusan operasional)
**Jurnal & Sitasi Utama:** Lin Chen, Zhonghao Chen, Yubing Zhang (2023). *Environmental Chemistry Letters*. DOI: [https://doi.org/10.1007/s10311-023-01617-y](https://doi.org/10.1007/s10311-023-01617-y)
**Sitasi Pendukung:** Ming Jin, Huan Yee Koh, Qingsong Wen (2023). *arXiv (Cornell University)*. DOI: [https://doi.org/10.48550/arxiv.2307.03759](https://doi.org/10.48550/arxiv.2307.03759)

---

## 1. Pendahuluan dan Konteks Industri

Perubahan iklim telah bertransformasi dari isu lingkungan menjadi ancaman sistemik terhadap operasional industri global. Chen, Chen, dan Zhang (2023) dalam *Environmental Chemistry Letters* melaporkan bahwa fenomena perubahan iklim telah menimbulkan kerusakan sistemik pada infrastruktur urban dan natural systems, serta menyebabkan kerugian ekonomi global melebihi **USD 500 miliar** per tahun. Angka tersebut mencakup kerusakan aset fisik, gangguan rantai pasok, kerugian produktivitas pertanian, dan biaya asuransi yang meningkat drastis akibat bencana hidrometeorologi. Dalam konteks Teknik Industri, fenomena ini bukan sekadar masalah ESG (*Environmental, Social, Governance*) melainkan sudah menjadi variabel eksogen yang secara langsung memengaruhi *availability*, *reliability*, dan *cost structure* sistem produksi.

Temuan paling relevan bagi komunitas rekayasa industri adalah kuantifikasi potensi *smart manufacturing* berbasis kecerdasan buatan (AI). Chen dkk. (2023) menyatakan bahwa integrasi AI pada lantai produksi mampu menurunkan konsumsi energi, limbah, dan emisi karbon sebesar **30–50%**, dengan kontribusi signifikan pada pengurangan konsumsi energi gedung dan proses industri. Angka ini merupakan *upper bound* yang realistis yang telah divalidasi pada berbagai studi kasus manufaktur di sektor baja, semen, dan *semiconductor*. Urgensi industrial engineering, oleh karena itu, bergeser dari sekadar *process optimization* tradisional menuju pengembangan arsitektur *cyber-physical production systems* yang mampu melakukan prediksi, preskripsi, dan adaptasi otonom terhadap dinamika perubahan iklim.

Kompleksitas prediksi iklim dan perilaku sistem energi memerlukan pendekatan yang mampu memodelkan relasi *spatio-temporal* antar variabel. Di sinilah peran *Graph Neural Networks for Time Series* (GNN4TS) yang di-review oleh Jin, Koh, dan Wen (2023) menjadi metodologis krusial. Mereka menunjukkan bahwa pendekatan GNN mampu secara eksplisit memodelkan relasi *inter-temporal* dan *inter-variable* yang sulit ditangani oleh Recurrent Neural Network (RNN) atau Convolutional Neural Network (CNN) konvensional. Integrasi kedua literatur ini—yaitu domain aplikasi perubahan iklim (Chen dkk., 2023) dan domain metodologi time-series modeling (Jin dkk., 2023)—menghasilkan kerangka kerja *Industrial AI for Climate Resilience* yang menjadi fokus Modul 1459.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Propagasi Graph Neural Network untuk Time-Series

Notasi dasar mengikuti konvensi GCN (Kipf & Welling) yang diadopsi Jin dkk. (2023) untuk task *forecasting*. Diberikan *graph* $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ dengan adjacency matrix $\mathbf{A} \in \mathbb{R}^{N \times N}$, di mana $N$ adalah jumlah node (variabel sensor atau unit produksi). Propagasi informasi pada layer $\ell$ diformulasikan sebagai:

$$\mathbf{H}^{(\ell+1)} = \sigma\left(\tilde{\mathbf{D}}^{-1/2}\tilde{\mathbf{A}}\tilde{\mathbf{D}}^{-1/2}\mathbf{H}^{(\ell)}\mathbf{W}^{(\ell)}\right)$$

dengan $\tilde{\mathbf{A}} = \mathbf{A} + \mathbf{I}_N$ adalah *self-loop augmented adjacency*, $\tilde{\mathbf{D}}$ adalah *degree matrix* dari $\tilde{\mathbf{A}}$, $\mathbf{W}^{(\ell)}$ adalah *trainable weight matrix*, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU atau GELU). Representasi akhir $\mathbf{H}^{(L)}$ digunakan untuk *forecasting horizon* $h$ sebagai:

$$\hat{\mathbf{Y}}_{t+1:t+h} = f_{\theta}\left(\mathbf{X}_{t-w+1:t}, \mathbf{A}\right)$$

di mana $\mathbf{X}_{t-w+1:t} \in \mathbb{R}^{N \times w}$ adalah *look-back window* sepanjang $w$, dan $\hat{\mathbf{Y}} \in \mathbb{R}^{N \times h}$ adalah prediksi multi-variabel multi-langkah ke depan.

### 2.2 Fungsi Loss untuk Forecasting

Pelatihan model menggunakan *Mean Squared Error* (MSE) yang dinormalisasi per variabel:

$$\mathcal{L}_{\text{MSE}} = \frac{1}{N \cdot h}\sum_{i=1}^{N}\sum_{j=1}^{h}\left(y_{i,t+j} - \hat{y}_{i,t+j}\right)^2$$

Untuk menangkap outlier emisi karbon突发, Chen dkk. (2023) merekomendasikan augmentasi dengan *Huber loss*:

$$\mathcal{L}_{\text{Huber}} = \begin{cases} \frac{1}{2}(y - \hat{y})^2 & \text{jika } |y - \hat{y}| \leq \delta \\ \delta\left(|y - \hat{y}| - \frac{1}{2}\delta\right) & \text{lainnya} \end{cases}$$

### 2.3 Model Efisiensi Energi Manufaktur

Potensi pengurangan energi oleh AI mengikuti model proporsional Chen dkk. (2023):

$$\Delta E = E_0 \cdot \rho_{\text{AI}}, \quad \rho_{\text{AI}} \in [0{,}30,\ 0{,}50]$$

dengan $E_0$ adalah konsumsi energi baseline (kWh/tahun) dan $\rho_{\text{AI}}$ adalah *reduction factor* yang bergantung pada kematangan digital industri. *Carbon footprint* terkait dihitung melalui *emission factor* grid listrik regional $\epsilon_{\text{CO}_2}$:

$$C_{\text{reduction}} = \Delta E \cdot \epsilon_{\text{CO}_2}$$

Untuk grid Jawa-Madura-Bali (Indonesia, tahun 2023), $\epsilon_{\text{CO}_2} \approx 0{,}80\ \text{kg CO}_2\text{e/kWh}$.

### 2.4 Model Keputusan Investasi

Kelayakan ekonomi dianalisis melalui *Net Present Value* (NPV) dan *Internal Rate of Return* (IRR):

$$\text{NPV} = \sum_{t=1}^{T}\frac{\text{CF}_t}{(1+r)^t} - I_0, \qquad \text{IRR}: \sum_{t=1}^{T}\frac{\text{CF}_t}{(1+\text{IRR})^t} = I_0$$

dengan $\text{CF}_t$ adalah *cash flow* periodik (penghematan energi), $r$ adalah *discount rate*, dan $I_0$ adalah investasi awal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AI untuk mitigasi perubahan iklim di lingkungan industri mengikuti SOP lima fase yang disintesis dari Chen dkk. (2023) dan Jin dkk. (2023):

**Fase 1 — Akuisisi Data & Konstruksi Graf.** Sensor IoT dipasang pada seluruh *bill of equipment* yang signifikan secara energi (motor, kompresor, boiler, HVAC). Data historis konsumsi energi, profil beban, dan variabel eksogen (suhu ambient, harga listrik *time-of-use*) dikumpulkan dalam *window* minimal 12 bulan. Graf $\mathcal{G}$ dibangun dengan *edge weight* $a_{ij}$ yang merepresentasikan korelasi Pearson antar unit, menghasilkan *adjacency matrix* $\mathbf{A}$ sebagai input model.

**Fase 2 — Pra-pemrosesan & Feature Engineering.** *Missing value imputation* dilakukan melalui mekanisme propagasi GNN itu sendiri (task *imputation* menurut taksonomi Jin dkk.,