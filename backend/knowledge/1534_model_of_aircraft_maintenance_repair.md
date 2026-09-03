# 1534 — Model Pemeliharaan, Perbaikan, dan Overhaul Pesawat Terbang Berbasis Jaringan Syaraf Tiruan dengan Optimasi Kebijakan Pemeliharaan Hirarkis RCM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Model of Aircraft Maintenance Repair and Overhaul (MRO) Menggunakan Artificial Neural Networks (ANN) untuk Optimasi Kebijakan Pemeliharaan Hirarkis
**Jurnal & Sitasi Utama:** Boris Safoklov, Denis Prokopenko, Yury Deniskin (2022). *Transportation Research Procedia*. DOI: [https://doi.org/10.1016/j.trpro.2022.06.165](https://doi.org/10.1016/j.trpro.2022.06.165)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tantangan operasional yang semakin kompleks seiring dengan proyeksi pertumbuhan armada dunia yang mencapai lebih dari 39.000 unit pesawat komersial pada periode 2025–2035 (Safoklov, Prokopenko, & Deniskin, 2022). Dalam lanskap ini, sektor Maintenance, Repair, and Overhaul (MRO) menjadi salah satu pilar ekonomi yang menyumbang lebih dari USD 90 miliar per tahun secara global, namun di sisi lain menjadi titik kritis terhadap keselamatan, ketersediaan armada (*fleet availability*), dan profitabilitas operator. Kompleksitas teknisnya meningkat ketika komponen pesawat mengalami degradasi non-linear sepanjang siklus hidupnya, sehingga dibutuhkan pendekatan prediktif yang mampu menggantikan kebijakan berbasis jadwal statis (*hard-time replacement*) yang konvensional.

Safoklov et al. (2022) menekankan bahwa integrasi Artificial Neural Networks (ANN) ke dalam pemodelan MRO memungkinkan identifikasi pola degradasi yang tidak linier dan multivariat, di mana variabel masukan seperti *flight cycles* (FC), *flight hours* (FH), tekanan hidrolis, suhu bearing, getaran turbin, dan data historis inspeksi saling berinteraksi secara kompleks. Pendekatan ini menjawab keterbatasan model statistik klasik seperti regresi linier atau Weibull univariat yang sering gagal menangkap efek kopling antarkomponen. Pada saat yang bersamaan, Zhou (2024) memperkenalkan kerangka Reliability-Centered Maintenance (RCM) yang dikombinasikan dengan kebijakan pemeliharaan hirarkis A/B/C/D check — di mana A-check dilakukan setiap 400–600 flight hours, B-check setiap 6–8 bulan, C-check setiap 20–24 bulan, dan D-check (heavy maintenance visit) setiap 6–12 tahun. Studi Zhou menunjukkan bahwa penjadwalan D-check penuh dan refurbishment parsial pada fase *mature-run* operasi pesawat dapat dioptimasi untuk memaksimalkan *availability* tanpa mengorbankan tingkat keselamatan.

Urgensi ekonomi dari topik ini semakin nyata ketika mempertimbangkan bahwa setiap hari pesawat Airbus A320 narrow-body grounded karena menunggu MRO menyebabkan kerugian pendapatan langsung sebesar USD 35.000–60.000 (Safoklov et al., 2022). Oleh karena itu, integrasi model ANN dengan kebijakan RCM hirarkis menjadi kebutuhan strategis bagi maskapai, MRO independen (seperti Lufthansa Technik, ST Engineering), dan regulator (EASA, FAA). Modul 1534 ini akan membedah secara kuantitatif bagaimana arsitektur jaringan syaraf tiruan multilayer perceptron (MLP) dapat memprediksi Remaining Useful Life (RUL) komponen kritis dan bagaimana jadwal A/B/C/D check dapat dioptimasi menggunakan formulasi matematis RCM yang dikembangkan oleh Zhou (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Komponen dengan ANN (Safoklov et al., 2022)

Safoklov et al. (2022) mengusulkan arsitektur *feedforward multilayer perceptron* dengan satu *hidden layer* untuk memodelkan hubungan non-linier antara parameter operasional dan tingkat degradasi komponen pesawat. Fungsi propagasi maju jaringan didefinisikan sebagai:

$$h_j = f\left(\sum_{i=1}^{n} w_{ij}^{(1)} x_i + b_j^{(1)}\right), \quad j = 1, 2, \ldots, m$$

$$\hat{y}_k = g\left(\sum_{j=1}^{m} w_{jk}^{(2)} h_j + b_k^{(2)}\right), \quad k = 1, 2, \ldots, p$$

di mana $\mathbf{x} = [x_1, x_2, \ldots, x_n]^T$ merupakan vektor fitur masukan (flight hours, flight cycles, suhu, tekanan, getaran), $h_j$ adalah aktivasi neuron tersembunyi ke-$j$, $\hat{y}_k$ adalah keluaran prediksi ke-$k$ (misalnya RUL dalam satuan hari), $w_{ij}^{(1)}$ dan $w_{jk}^{(2)}$ masing-masing adalah bobot lapisan masukan ke tersembunyi dan tersembunyi ke keluaran, sementara $b_j^{(1)}$ dan $b_k^{(2)}$ adalah bias. Fungsi aktivasi $f(\cdot)$ yang digunakan adalah *hyperbolic tangent* (tanh) untuk lapisan tersembunyi karena memberikan gradien yang lebih stabil dibanding sigmoid, sedangkan $g(\cdot) = \text{ReLU}(z) = \max(0, z)$ digunakan pada lapisan keluaran untuk menjamin RUL non-negatif.

Pelatihan jaringan dilakukan dengan algoritma *backpropagation* yang meminimalkan fungsi kerugian *Mean Squared Error* (MSE):

$$\mathcal{L}(\mathbf{W}, \mathbf{b}) = \frac{1}{N} \sum_{l=1}^{N} \left(y^{(l)} - \hat{y}^{(l)}\right)^2$$

di mana $N$ adalah jumlah sampel pelatihan. Pembaruan bobot mengikuti aturan gradient descent dengan momentum:

$$w_{ij}^{(1)}(t+1) = w_{ij}^{(1)}(t) - \eta \frac{\partial \mathcal{L}}{\partial w_{ij}^{(1)}} + \alpha \Delta w_{ij}^{(1)}(t)$$

dengan learning rate $\eta$ dan koefisien momentum $\alpha \in [0.7, 0.95]$.

### 2.2 Model Keandalan Komponen dengan Distribusi Weibull

Untuk setiap komponen Line Replaceable Unit (LRU) yang menjadi target prediksi, laju kegagalan dimodelkan dengan distribusi Weibull dua parameter:

$$R(t) = \exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$$

di mana $R(t)$ adalah reliabilitas pada waktu $t$, $\eta > 0$ adalah *scale parameter* (umur karakteristik), dan $\beta > 0$ adalah *shape parameter*. Jika $\beta > 1$, komponen menunjukkan keausan (*wear-out*); $\beta < 1$ mengindikasikan *infant mortality*; dan $\beta \approx 1$ mendekati laju kegagalan konstan. Laju kegagalan sesaat didefinisikan sebagai:

$$\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.3 Formulasi RCM Hirarkis (Zhou, 2024)

Zhou (2024) merumuskan masalah optimasi ketersediaan armada dengan siklus check hirarkis. *Availability* sesaat didefinisikan sebagai:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}} = \frac{T_{\text{up}}}{T_{\text{up}} + T_{\text{down}}}$$

di mana MTBF adalah *Mean Time Between Failures*, MDT adalah *Mean Downtime* untuk seluruh event maintenance (A, B, C, dan D check). Zhou memperkenalkan fungsi tujuan berupa *maximum available operation time* selama siklus hidup pesawat dengan total mission time $T_{\text{total}}$:

$$\max_{T_A, T_B, T_C, T_D} \quad \Phi = \int_{0}^{T_{\text{total}}} A(t) \, dt$$

dengan kendala:

$$T_{\text{total}} = N_A T_A + N_B T_B + N_C T_C + N_D T_D$$

$$N_B = N_A \cdot \frac{T_A}{T_B}, \quad N_C = N_B \cdot \frac{T_B}{T_C}, \quad N_D = N_C \cdot \frac{T_C}{T_D}$$

di mana $T_A, T_B, T_C, T_D$ masing-masing adalah interval antar-check dan $N_X$ adalah jumlah check tipe X sepanjang siklus hidup. Zhou membuktikan secara analitis bahwa terdapat nilai optimal $A^*$ yang bersifat stasioner pada turunan pertama $\frac{d\Phi}{dT_X} = 0$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model MRO berbasis ANN dengan kebijakan RCM hirarkis mengikuti SOP yang terstruktur dalam delapan tahap sebagaimana diuraikan oleh Safoklov et al. (2022) dan diperkuat oleh kerangka Zhou (2024):

**Tahap 1 – Akuisisi Data Historis MRO.** Pengumpulan data dari *Maintenance Information System* (MIS) mencakup logbook komponen, *Airworthiness Directive* (AD) compliance, *Service Bulletin* (SB), dan hasil *Non-Destructive Testing* (NDT) seperti eddy current, ultrasonic, dan boroscope inspection. Volume data minimum yang direkomendasikan adalah 50.000 record per LRU untuk mencapai generalisasi yang baik.

**Tahap 2 – Pra-pemrosesan dan Feature Engineering.** Normalisasi data menggunakan *min-max scaling*:

$$x_i^{\text{norm}} = \frac{x_i - x_{\min}}{x_{\max} - x_{\min}}$$

**Tahap 3 – Arsitektur Jaringan.** Safoklov et al. (2022) merekomendasikan topologi *input layer* dengan $n = 12$ fitur, *hidden layer* dengan $m = 24$ neuron (heuristik $m \approx 2n$), dan *output layer* dengan $p = 1$ neuron RUL.

**Tahap 4 – Pelatihan & Validasi.** Pembagian data 70% pelatihan, 15% validasi, 15% pengujian. *Early stopping* dengan *patience* = 20 epoch untuk mencegah *overfitting*.

**Tahap 5 – Estimasi Parameter Weibull.** Estimasi $\eta$ dan $\beta$ menggunakan *Maximum Likelihood Estimation* (MLE).

**Tahap 6 – Penjadwalan Hirarkis.** Penentuan interval optimal $T_A^*, T_B^*, T_C^*, T_D^*$ menggunakan algoritma *iterative golden-section search* atau *sequential quadratic programming* (SQP).

**Tahap 7 – Integrasi Sistem Keputusan.** Output ANN menjadi masukan *decision support system* yang menentukan apakah komponen dijadwalkan untuk inspection, repair, atau replacement berdasarkan ambang batas RUL kritis.

**Tahap 8 – Audit & Continuous Improvement.** Feedback loop untuk *retraining* model setiap 6 bulan dengan data baru, sesuai dengan siklus audit kualitas AS9110 dan regulasi EASA Part-145.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah maskapai regional mengoperasikan 25 unit Boeing 737-800 dengan total flight hours kumulatif 180.000 FH per tahun. Kita akan menghitung RUL komponen *High-Pressure Turbine Blade* (HPTB) menggunakan model Safoklov dan menentukan interval check optimal menggunakan formulasi Zhou.

### 4.1 Perhitungan Parameter Weibull HPTB

Berdasarkan data historis MRO, parameter Weibull untuk HPTB: $\beta = 1.85$ (keausan dominan), $\eta = 8.500$ flight cycles. Untuk komponen dengan $t = 6.000$ FC:

$$R(6000) = \exp\left(-\left(\frac{6000}{8500}\right)^{1.85}\right) = \exp\left(-(0.7059)^{1.85}\right) = \exp(-0.5296) = 0.589$$

Laju kegagalan sesaat:

$$\lambda(6000) = \frac{1.85}{8500} \left(\frac{6000}{8500}\right)^{0.85} = 0.000218 \times 0.7395 = 1.61 \times 10^{-4} \text{ failures/FC}$$

### 4.2 Prediksi RUL dengan ANN

Arsitektur jaringan: $n = 12$ fitur masukan, $m = 24$ neuron tersembunyi dengan aktivasi tanh, $p = 1$ keluaran RUL. Hasil pelatihan pada 5.000 sampel menghasilkan bobot lapisan tersembunyi ke keluaran yang telah konvergen. Untuk satu sampel uji dengan fitur masukan:

$$\mathbf{x} = [\text{FH}, \text{FC}, T_{\text{bearing}}, P_{\text{oil}}, V_{\text{vib}}, \text{EGT}_{\text{margin}}]^T = [12.500, 6.800, 285°C, 38 psi, 1.8 mm/s, 18°C]^T$$

Setelah propagasi maju dengan bobot terlatih, diperoleh aktivasi tersembunyi:

$$h_1 = \tanh(0.847) = 0.689, \quad h_2 = \tanh(1.235) = 0.826, \quad \ldots, \quad h_{24} = \tanh(0.412) = 0.389$$

Keluaran jaringan (RUL prediksi dalam hari kalender):

$$\hat{y} = \text{ReLU}\left(\sum_{j=1}^{24} w_j^{(2)} h_j + b^{(2)}\right) = \text{ReLU}(412.7) = 412.7 \text{ hari}$$