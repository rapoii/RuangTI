# 1426 — Eksplorasi Manfaat dan Keterbatasan Teknologi Digital Twin dalam Manajemen Energi Bangunan: Kerangka Human-Centric untuk Keberlanjutan Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Exploring the Benefits and Limitations of Digital Twin Technology in Building Energy
**Jurnal & Sitasi Utama:** Faham Tahmasebinia, Lin Lin, Shuo Wu (2023). *Applied Sciences*. DOI: [https://doi.org/10.3390/app13158814](https://doi.org/10.3390/app13158814)
**Sitasi Pendukung:** Ilaria Bucci, Virginia Fani, Romeo Bandinelli (2024). *Sustainability*. DOI: [https://doi.org/10.3390/su17010129](https://doi.org/10.3390/su17010129)

---

## 1. Pendahuluan dan Konteks Industri

Sektor bangunan merupakan salah satu konsumen energi terbesar sepanjang siklus hidupnya, dengan porsi signifikan terhadap konsumsi energi global dan emisi karbon. Tahmasebinia, Lin, dan Wu (2023) dalam *Applied Sciences* menegaskan bahwa *sustainable energy management* bukan lagi pilihan strategis melainkan kebutuhan operasional fundamental bagi seluruh pemangku kepentingan konstruksi dan operasional gedung (DOI: [10.3390/app13158814](https://doi.org/10.3390/app13158814)). Bangunan komersial dan residensial menyumbang hampir 30–40% dari total konsumsi energi akhir dunia, sehingga kemampuan memantau, memprediksi, dan mengendalikan konsumsi energi secara *real-time* menjadi imperatif ekonomi, lingkungan, dan regulasi.

Teknologi *Digital Twin* (DT) — yang merupakan inti dari paradigma *Industry 4.0* — telah muncul sebagai solusi transformatif yang memungkinkan replika digital dinamis dari aset fisik gedung. DT memfasilitasi integrasi data historis, sensor *Internet of Things* (IoT), dan algoritma prediktif untuk menciptakan loop umpan balik kontinu antara dunia fisik dan virtual. Tahmasebinia dkk. (2023) menekankan bahwa kemampuan DT untuk melakukan *monitoring*, *optimization*, dan *prediction* secara simultan merepresentasikan lompatan kuantum dibanding metode manajemen energi konvensional yang bersifat statis dan periodik. Lebih lanjut, paper ini melakukan *comprehensive review* terhadap pengembangan DT dalam konteks *Building Information Modeling* (BIM) sebagai fondasi data, aplikasi DT dalam *building energy management*, *indoor environmental monitoring*, dan *building energy optimization*.

Paralel dengan itu, Bucci, Fani, dan Bandinelli (2024) dalam *Sustainability* memperkenalkan dimensi humanistik melalui konsep *Human Digital Twin* (HDT) sebagai evolusi DT dalam kerangka *Industry 5.0* (DOI: [10.3390/su17010129](https://doi.org/10.3390/su17010129)). Jika DT konvensional berfokus pada replikasi aset fisik, maka HDT memperluas cakupannya dengan mereplikasi karakteristik, perilaku, dan kebutuhan manusia ke dalam arsitektur sistem. Pendekatan ini menjawab tantangan bahwa optimalisasi energi bangunan tanpa mempertimbangkan kenyamanan, keselamatan, dan produktivitas penghuni akan menghasilkan solusi yang secara teknis efisien namun secara sosial tidak berkelanjutan. Integrasi perspektif *human-centric* ini menjadi semakin relevan ketika bangunan pintar tidak hanya dituntut hemat energi, tetapi juga adaptif terhadap preferensi dinamis occupant.

Urgensi operasional dari adopsi DT dalam energi bangunan terletak pada tiga pilar: (1) pengurangan biaya operasional melalui optimasi *Heating, Ventilation, and Air Conditioning* (HVAC); (2) pencapaian target dekarbonisasi sesuai Paris Agreement dan standar ISO 50001; serta (3) peningkatan *resilience* sistem terhadap variabilitas iklim dan pola penggunaan. Paper Tahmasebinia dkk. (2023) menunjukkan bahwa implementasi DT secara konsisten mampu menurunkan konsumsi energi operasional gedung antara 15% hingga 35% tergantung kompleksitas sistem dan kualitas integrasi data, dengan *payback period* rata-rata 3–7 tahun untuk investasi infrastruktur sensor dan platform DT.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur konseptual DT dalam konteks energi bangunan dibangun di atas beberapa landasan matematis yang saling terintegrasi. Model state-space merupakan representasi fundamental yang memungkinkan digital twin merepresentasikan dinamika termal dan energi bangunan secara kontinu:

$$x_{k+1} = A x_k + B u_k + w_k$$
$$y_k = C x_k + D u_k + v_k$$

di mana $x_k \in \mathbb{R}^n$ adalah vektor *state* (suhu udara, suhu dinding, kelembapan relatif, konsentrasi CO₂) pada waktu diskret $k$, $u_k \in \mathbb{R}^m$ adalah vektor input kontrol (setpoint HVAC, intensitas pencahayaan, posisi damper), $y_k \in \mathbb{R}^p$ adalah output terukur dari sensor IoT, sementara $w_k \sim \mathcal{N}(0, Q)$ dan $v_k \sim \mathcal{N}(0, R)$ adalah *process noise* dan *measurement noise* dengan distribusi Gaussian. Matriks $A$, $B$, $C$, $D$ dikalibrasi melalui identifikasi sistem menggunakan data historis gedung.

Prediksi konsumsi energi pada rentang waktu $\Delta t$ dapat diformulasikan melalui model regresi multivariat yang diadaptasi dari Tahmasebinia dkk. (2023):

$$E_t = \alpha_0 + \sum_{i=1}^{n} \alpha_i T_i(t) + \sum_{j=1}^{m} \beta_j O_j(t) + \sum_{k=1}^{p} \gamma_k H_k(t) + \epsilon_t$$

dengan $E_t$ adalah total konsumsi energi (kWh) pada interval waktu $t$, $T_i(t)$ adalah variabel meteorologi eksternal (suhu luar, radiasi matahari, kelembapan), $O_j(t)$ adalah variabel okupansi dan profil penggunaan, $H_k(t)$ adalah parameter operasional HVAC, dan $\epsilon_t$ adalah error stochastic. Koefisien $\alpha_i$, $\beta_j$, $\gamma_k$ diestimasi melalui *recursive least squares* atau *machine learning regression* yang di-*update* secara online ketika DT menerima data baru.

Untuk mengintegrasikan dimensi *human-centric* sebagaimana diusulkan Bucci dkk. (2024), fungsi objektif optimalisasi energi harus mencakup term utilitas kenyamanan penghuni:

$$\min_{u \in \mathcal{U}} J = \int_{0}^{T} \left[ C_E(u(\tau)) + \lambda \cdot \Phi(x(\tau), u(\tau), h(\tau)) \right] d\tau$$

di mana $C_E(u)$ adalah biaya energi, $\Phi(\cdot)$ adalah fungsi disutilitas yang mengkuantifikasi deviasi antara kondisi aktual dan preferensi penghuni $h(\tau)$ (misalnya suhu nyaman, tingkat pencahayaan, kualitas udara), dan $\lambda \geq 0$ adalah bobot perdagangan antara efisiensi energi dan kenyamanan manusia.

Mekanisme sinkronisasi antara entitas fisik dan virtual DT dilakukan melalui *Kalman Filter* yang memberikan estimasi optimal state:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - H\hat{x}_{k|k-1})$$
$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$$
$$P_{k|k} = (I - K_k H) P_{k|k-1}$$

di mana $K_k$ adalah *Kalman Gain*, $P_{k|k}$ adalah kovarians error estimasi, dan parameter $H$ memetakan state ke ruang pengukuran sensor. Persamaan-persamaan ini memungkinkan DT melakukan *self-correction* ketika terjadi drift antara model virtual dan perilaku fisik aktual gedung.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DT untuk manajemen energi bangunan mengikuti kerangka SOP berlapis yang terdiri dari enam fase rekayasa sistematis. Tahmasebinia dkk. (2023) menyusun *workflow* integrasi BIM-DT yang menjadi referensi standar industri.

**Fase 1 — Akuisisi Data dan Instrumentasi.** Sensor IoT dipasang pada titik-titik strategis: *smart meters* untuk konsumsi energi per sirkuit, sensor suhu dan kelembapan (DHT22, BME680), sensor CO₂ (MH-Z19) untuk kualitas udara dalam ruang, serta *occupancy sensors* berbasis PIR dan komputer vision. Akuisisi遵循 protokol komunikasi seperti MQTT (Message Queuing Telemetry Transport) atau OPC UA (Open Platform Communications Unified Architecture) yang menjamin interoperabilitas lintas vendor.

**Fase 2 — Konstruksi Model BIM.** Model 3D parametric gedung dibangun menggunakan perangkat lunak BIM (Revit, ArchiCAD) yang memuat informasi geometris, material, dan properties termal. Setiap elemen (dinding, jendela, HVAC duct) menjadi entitas data yang kaya akan atribut struktural dan fungsional.

**Fase 3 — Pembuatan Digital Twin.** Platform DT (Azure Digital Twins, Siemens MindSphere, atau open-source Eclipse Ditto) menerima stream data sensor dan mensinkronkannya dengan model BIM melalui API. Model termal dan energi di-*embed* ke dalam DT menggunakan middleware seperti EnergyPlus atau Modelica.

**Fase 4 — Kalibrasi dan Validasi.** Parameter model dikalibrasi menggunakan data operasional historis minimal 12 bulan untuk menangkap variabilitas musiman. Validasi dilakukan dengan menghitung *Coefficient of Variation of Root Mean Square Error* (CVRMSE):

$$CVRMSE = \frac{\sqrt{\frac{1}{N}\sum_{i=1}^{N}(y_i - \hat{y}_i)^2}}{\bar{y}} \times 100\%$$

Standar ASHRAE Guideline 14 mensyaratkan CVRMSE < 30% untuk validasi model energi bangunan bulanan dan < 10% untuk validasi hourly.

**Fase 5 — Optimalisasi dan Kontrol Prediktif.** Algoritma *Model Predictive Control* (MPC) menggunakan DT sebagai *digital sandbox* untuk mensimulasikan skenario kontrol sebelum dieksekusi di gedung fisik. Horizon prediksi tipikal adalah 24–48 jam dengan resolusi 15 menit.

**Fase 6 — Integrasi Human Digital Twin.** Mengikuti kerangka Bucci dkk. (2024), profil penghuni (preferensi termal, jadwal kerja, kebutuhan aksesibilitas) diintegrasikan sebagai layer terpisah dalam DT. Sensor biometrik dan *wearable devices* dapat memberikan umpan balik fisiologis real-time yang selanjutnya digunakan untuk menyesuaikan setpoint HVAC secara personal.

Diagram alir proses menunjukkan loop kontinu: **Data Sensor → DT Update → MPC Optimization → Human Preference Validation → Actuator Command → Physical Response → Data Sensor (loop)**. SOC (Security Operations Center) juga memantau anomali siber dan integritas data sesuai standar ISO 27001.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Optimalisasi Energi Gedung Perkantoran XYZ, Jakarta.
Profil gedung: 12 lantai, luas total 18.000 m², HVAC terpusat (VAV system), okupansi rata-rata 720 orang/hari pada hari kerja. Data operasional historis menunjukkan konsumsi energi listrik tahunan sebesar 3.850 MWh dengan proporsi HVAC mencapai 58% (2.233 MWh).

**Langkah 1: Pemodelan Beban Termal.**
Beban pendinginan dihitung menggunakan persamaan perpindahan panas konduksi dan konveksi:

$$Q_{total} = Q_{cond} + Q_{conv} + Q_{rad} + Q_{internal}$$

untuk dinding barat (luas $A = 145$ m², $U = 0{,}45$ W/m²K, $\Delta T_{ekstrem} = 11$ K):

$$Q_{cond} = U \cdot A \cdot \Delta T = 0{,}45 \times 145 \times 11 = 717{,}75 \text{ W}$$

Beban internal dari peralatan kantor (daya total $P_{eq} = 85$ kW dengan *diversity factor* 0,6):

$$Q_{internal} = P_{eq} \times f_{diversity} \times 3{,}6 = 85 \times 0{,}6 \times 3{,}6 = 183{,}6 \text{ MJ/h}$$

**Langkah 2: Estimasi Potensi Penghematan DT.**
Berdasarkan sintesis paper Tahmasebinia dkk. (2023), implementasi DT dengan MPC mampu menurunkan konsumsi HVAC sebesar 18–25%. Kita gunakan konservatif 20%:

$$\Delta E_{HVAC} = 2.233 \times 0{,}20 = 446{,}6 \text{ MWh/tahun}$$

Dalam rupiah (tarif listrik industri Rp 1.450/kWh setelah kenaikan *time-of-use*):

$$\text{Penghematan} = 446.600 \text{ kWh} \times \text{Rp } 1.450 = \text{Rp } 647.570.000 \text{ /tahun}$$

**Langkah 3: Analisis Payback Period.**
Investasi awal infrastruktur DT: sensor IoT (Rp 850 juta), platform cloud & lisensi (Rp 450 juta/tahun), integrasi BIM (Rp 600 juta), biaya engineering (Rp 700 juta). Total CAPEX = Rp 2,6 miliar. OPEX tahun-1: Rp 450 juta.

$$\text{Simple Payback} = \frac{2.600.000.000}{647.570.000 - 450.000.000} = \frac{2.600
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
