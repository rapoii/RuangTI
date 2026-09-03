# 2076 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dan Rekayasa Sistem Pemantauan Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*, dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*, dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze‐drying*) merupakan unit operasi kritis dalam manufaktur biofarmasi modern yang memungkinkan stabilisasi produk termolabil seperti protein monoklonal, antibodi terapeutik, vaksin mRNA, dan formulasi steril kompleks. Proses ini terdiri atas tiga tahap berurutan—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang memerlukan pengendalian parameter proses yang sangat ketat agar mutu produk akhir konsisten dengan rilis batch. Seiring meningkatnya kompleksitas molekul biofarmasi—yang nilai pasarnya melampaui USD 500 miliar secara global pada 2024—biaya satu siklus *batch* liofilisasi pada fasilitas *Good Manufacturing Practice* (GMP) dengan kapasitas 50.000 vial dapat melebihi USD 250.000, menjadikan setiap detik penyimpangan proses sebagai kerugian material (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Dalam kerangka *Process Analytical Technology* (PAT) yang diinisiasi FDA sejak 2004, paradigma pengendalian telah bergeser dari *quality by testing* pascabroduksi menuju *real‐time quality assurance* berbasis pemantauan multivariat secara kontinu. Bab karya Meza‐Galvan *et al.* (2026) secara spesifik membahas bagaimana Wireless Sensor Networks (WSN) menjawab tantangan ini dengan menggantikan thermocouple berkabel tradisional (*hard‐wired thermocouples*) yang mahal, sulit dipasang, rentan *wiring failure*, serta membatasi jumlah titik pengukuran pada rak (*shelf*). Keterbatasan thermocouple berkabel menjadikan lebih dari 95% vial dalam satu batch liofilisasi tidak termonitor langsung, padahal variasi *vial‐to‐vial* akibat efek tepi (*edge vial effect*) dan gradien suhu *shelf* dapat menyebabkan heterogenitas suhu produk sebesar 2–6 °C (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Kebutuhan akan visibilitas multivariat ini semakin mendesak dengan meningkatnya adopsi format *continuous freeze‐drying* dan *fill‐finish* skala kecil untuk terapi *personalized medicine*, di mana ukuran batch menyusut namun heterogenitas proses justru meningkat. Arsitektur WSN yang diusulkan menjawab tiga kebutuhan operasional utama: (1) akuisisi data suhu vial nirkabel dengan latensi rendah; (2) kemampuan penskalaan (*scalability*) untuk mendukung ribuan vial per batch; dan (3) integrasi langsung dengan sistem kontrol *Supervisory Control and Data Acquisition* (SCADA) dan *Manufacturing Execution System* (MES) untuk implementasi *closed‐loop control* dan *release by exception*. Urgensi industri ini bukan sekadar akademis—implementasi WSN terbukti dapat menurunkan jumlah vial gagal (*reject rate*) hingga 15–30% dan mempersingkat siklus *primary drying* hingga 18% melalui optimasi gradien tekanan (*chamber pressure*) yang lebih presisi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Laju Sublimasi (Coupled Heat–Mass Transfer)

Meza‐Galvan *et al.* (2026) menjelaskan bahwa fenomena sublimasi dalam vial liofilisasi dimodelkan sebagai masalah *coupled heat and mass transfer* satu dimensi, yang menghasilkan laju sublimasi per vial:

$$\frac{dm}{dt} = \frac{A_v \cdot \left( P_{w}^{ice}(T_b) - P_c \right)}{R_p} \tag{1}$$

dengan $A_v$ adalah luas sublimasi vial (m²), $P_{w}^{ice}(T_b)$ adalah tekanan uap air jenuh pada suhu *bottom* produk $T_b$ (Pa), $P_c$ adalah tekanan ruang (*chamber pressure*, Pa), dan $R_p$ adalah tahanan produk terhadap transport uap air (Pa·m²·s·kg⁻¹). Resistansi produk $R_p$ umumnya diekspresikan secara empiris sebagai fungsi linier terhadap massa ter升华 yang telah terangkat ($\hat{m}$, kg):

$$R_p(\hat{m}) = R_{p0} + R_{p1} \cdot \hat{m} \tag{2}$$

dengan $R_{p0}$ (Pa·m²·s·kg⁻¹) merepresentasikan tahanan awal lapisan kering dan $R_{p1}$ (Pa·m²·s·kg⁻²) merupakan koefisien yang bergantung pada komposisi formulasi (misalnya konsentrasi sukrosa atau manitol).

### 2.2 Neraca Energi pada Vial (Heat Balance)

Konservasi energi pada vial menghasilkan persamaan diferensial suhu produk:

$$m_i \cdot c_{p,i} \cdot \frac{dT_b}{dt} = K_v \cdot A_v \cdot (T_s - T_b) + \Delta H_s \cdot \frac{dm}{dt} \tag{3}$$

dengan $m_i$ adalah massa es dalam vial (kg), $c_{p,i}$ kapasitas kalor jenis es (≈ 2000 J·kg⁻¹·K⁻¹), $K_v$ koefisien kalor vial (W·m⁻²·K⁻¹), $T_s$ suhu *shelf* (K), dan $\Delta H_s$ entalpi sublimasi air (≈ 2.838 × 10⁶ J·kg⁻¹). Tahanan termal total $R_{total}$ didefinisikan sebagai:

$$\frac{1}{K_v A_v} = R_{c} + R_{s} + R_{g} \tag{4}$$

yang merupakan kombinasi seri dari tahanan kontak vial–shelf ($R_c$), tahanan stopper vial ($R_s$), dan tahanan gas di lingkungan ($R_g$, signifikan hanya pada tekanan tinggi).

### 2.3 Kinetika Degradasi Produk (Arrhenius)

Untuk menjamin kualitas hayati (*biological activity*), Meza‐Galvan *et al.* (2026) mengintegrasikan model degradasi Arrhenius ke dalam kerangka *soft sensing*:

$$\frac{dC}{dt} = -k_0 \cdot e^{-E_a/(RT_b)} \cdot C \tag{5}$$

dengan $C$ konsentrasi bahan aktif, $k_0$ faktor pre‐eksponensial, $E_a$ energi aktivasi (J·mol⁻¹), dan $R$ konstanta gas universal (8.314 J·mol⁻¹·K⁻¹). Persamaan ini penting karena memprediksi berapa lama vial dapat mempertahankan suhu sublimasi sebelum melampaui *collapse temperature* $T_c$ atau *glass transition temperature* $T_g'$.

### 2.4 Arsitektur Jaringan Sensor Nirkabel (WSN)

Kinerja WSN dievaluasi melalui beberapa metrik kuantitatif. *Signal‐to‐Noise Ratio* (SNR) tautan komunikasi didefinisikan:

$$\mathrm{SNR}_{dB} = P_{tx} - P_{noise} - L_{path} \tag{6}$$

dengan $P_{tx}$ daya pancar (dBm), $P_{noise}$ derau termal (≈ −174 dBm·Hz⁻¹ pada 290 K), dan $L_{path}$ redaman propagasi *free‐space* (dB):

$$L_{path} = 20 \log_{10}\left(\frac{4 \pi d}{\lambda}\right) \tag{7}$$

dengan $d$ jarak transmitter–receiver dan $\lambda$ panjang gelombang. Umur baterai simpul sensor (*node lifetime*) mengikuti:

$$T_{life} = \frac{E_{bat}}{P_{sense} + P_{tx} + P_{idle}} \tag{8}$$

dengan $E_{bat}$ kapasitas energi baterai (Joule). Untuk topologi mesh dengan *n* simpul sensor yang masing‐masing memiliki reliabilitas tautan $p$, reliabilitas end‐to‐end dihitung:

$$\eta_{e2e} = 1 - (1 - p)^{n} \tag{9}$$

Model ini menjadi dasar desain *redundancy planning* yang dibahas dalam Meza‐Galvan *et al.* (2026) untuk memastikan kontinuitas data meskipun beberapa simpul gagal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan sensor nirkabel untuk liofilisasi mengikuti SOP berlapis yang terdiri atas empat tahap rekayasa utama:

**Tahap 1 – Pra‐Studi Kelayakan dan Pemetaan Risiko (PRA).** Sebelum instalasi, dilakukan *Process Risk Assessment* menggunakan metode Failure Mode and Effects Analysis (FMEA) untuk mengidentifikasi lokasi vial kritis (misalnya *edge vials*, *corner vials*) yang menjadi kandidat pemasangan sensor prioritas. Suhu sublimasi yang homogen antar‐vial menjadi tujuan utama agar standar deviasi $T_b$ antar‐vial tidak melampaui 1.5 °C.

**Tahap 2 – Instalasi Arsitektur Topologi Mesh.** Sensor thermocouple nirkabel berbasis protokol IEEE 802.15