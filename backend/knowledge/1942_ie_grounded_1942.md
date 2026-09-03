# 1942 — Model Ketahanan (Resilience) Cold Chain Logistics Produk Mudah Rusak: Integrasi Sensor IoT DS18B20 dan Formulasi Pemulihan Sistem Pemantauan Realtime

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk yang rentan terhadap degradasi termal—meliputi vaksin, produk biologis, makanan beku, dan sediaan farmasi termolabil. Menurut Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), gangguan termal sekecil apa pun yang melampaui ambang batas yang ditetapkan dapat memicu degradasi kumulatif yang menurunkan mutu, kemanjuran, dan keamanan produk. Pada konteks farmasi, World Health Organization (WHO) melalui Performance, Quality and Safety (PQS) specification E006 menetapkan rentang suhu 2–8°C untuk绝大多数 vaksin, dengan deviasi sesaat saja yang berpotensi menyebabkan *post-exposure loss* (kehilangan pasca-pemaparan) hingga 100% batch apabila durasi paparan melebihi batas stabilitas termal.

Studi empiris di Indonesia yang dilakukan oleh Putra, Defit, dan Nurcahyo (2024) pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) menunjukkan dua kelemahan struktural yang masih lazim di fasilitas rantai dingin tier-2 dan tier-3 Indonesia. Pertama, *cold chain box* tidak dilengkapi instrumen pemantauan suhu *realtime*, melainkan hanya dicatat secara manual oleh apoteker setiap dua jam pada *log sheet* kertas—sehingga suatu *excursion* termal berdurasi pendek (≤120 menit) berpotensi luput terdeteksi. Kedua, tidak tersedia sistem peringatan dini otomatis yang mampu memberitahu apoteker pada saat suhu *cold chain box* naik akibat kerusakan internal (kegagalan kompresor, kebocoran refrigerant) maupun eksternal (paparan matahari, pembukaan pintu berulang). Kedua *failure mode* ini secara langsung menurunkan tingkat ketahanan (resilience) sistem rantai dingin.

Secara ekonomi, World Bank (2019) memperkirakan kerugian global akibat *cold chain breakdown* pada produk vaksin mencapai USD 18–34 miliar per tahun. Pada industri makanan, FAO (2020) melaporkan bahwa 14% produk pangan dunia hilang di sepanjang rantai pasok, sebagian besar terkait pelanggaran zona suhu. Dari perspektif Teknik Industri, permasalahan ini bukan sekadar isu instrumentasi, melainkan masalah desain sistem yang menyangkut *reliability engineering*, *human factors*, dan *decision support system*. Modul 1942 ini menyintesiskan pendekatan model ketahanan dari Khurshid dan Siddiqui (2024) dengan arsitektur IoT yang divalidasi oleh Putra dkk. (2024) untuk membangun kerangka rekayasa sistem yang holistik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Ketahanan Cold Chain (Bruneau Framework)

Khurshid dan Siddiqui (2024) mengadopsi kerangka Bruneau dkk. (2003) untuk mengkuantifikasi *resilience loss* sebagai luasan antara kurva performa sistem aktual $Q(t)$ dengan performa target $Q^*(t)=100\%$ selama periode disrupsi $t \in [t_0, t_1+t^*]$, di mana $t^*$ adalah waktu pemulihan (*time to recovery*). Formulasi indeks ketahanan (*resilience index*) dinyatakan sebagai:

$$
\mathcal{R} = 1 - \frac{\displaystyle\int_{t_0}^{t_0+t^*} \left[Q^* - Q(t)\right] dt}{\left(t^* - t_0\right) \cdot Q^*}
$$

dengan $Q^*=1$ (atau 100%) untuk sistem tanpa degradasi. Nilai $\mathcal{R} \in [0,1]$, di mana $\mathcal{R}=1$ mengindikasikan sistem yang sepenuhnya elastis (zero *resilience loss*).

### 2.2 Fungsi Reliabilitas dan Ketersediaan Sensor

Sensor DS18B20 yang digunakan oleh Putra dkk. (2024) memiliki karakteristik intrinsik yang dimodelkan sebagai fungsi reliabilitas eksponensial:

$$
R(t) = e^{-\lambda t}
$$

dengan $\lambda$ adalah laju kegagalan (*failure rate*) sensor. Berdasarkan *datasheet* Maxim Integrated, MTBF DS18B20 pada rentang operasi $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$ adalah sekitar 250.000 jam, sehingga $\lambda \approx 4 \times 10^{-6}$ jam$^{-1}$.

Ketersediaan sistem (*system availability*) yang menggabungkan *Mean Time Between Failure* (MTBF) dan *Mean Time To Repair* (MTTR) adalah:

$$
A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}
$$

### 2.3 Model Degradasi Termal Arrhenius

Kehilangan mutu produk akibat paparan suhu $T$ (dalam Kelvin) mengikuti persamaan Arrhenius orde pertama:

$$
\frac{dD}{dt} = k_0 \cdot e^{-E_a/RT}
$$

dengan $D$ adalah fraksi degradasi, $k_0$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi, dan $R$ adalah konstanta gas universal ($8{,}314$ J/(mol·K)). Pada aplikasi疫苗, total degradasi kumulatif dihitung sebagai:

$$
D_{\text{total}} = \int_{t_0}^{t_1} k_0 \, e^{-E_a/RT(t)} \, dt
$$

Ambang batas kerusakan (spoilage threshold) tercapai ketika $D_{\text{total}} \geq D_{\text{crit}}$ (umumnya $D_{\text{crit}}=0{,}3$ untuk sebagian besar疫苗).

### 2.4 Ketidakpastian Pengukuran Sensor

Putra dkk. (2024) melaporkan akurasi DS18B20 sebesar $\pm 0{,}5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$ dengan resolusi 12-bit ($0{,}0625^{\circ}\text{C}$). Ketidakpastian gabungan (*combined uncertainty*) mengikuti formulasi *root-sum-square*:

$$
u_c(T) = \sqrt{u_{\text{cal}}^2 + u_{\text{noise}}^2 + u_{\text{drift}}^2 + u_{\text{res}}^2}
$$

dengan $u_{\text{cal}}$ (ketidakpastian kalibrasi), $u_{\text{noise}}$ (derau termal), $u_{\text{drift}}$ (penyimpangan jangka panjang), dan $u_{\text{res}} = \frac{0{,}0625^{\circ}\text{C}}{2\sqrt{3}}$ (resolusi dikonversi ke ketidakpastian persegi panjang).

### 2.5 Laju Pemulihan Sistem

Setelah gangguan termal teridentifikasi, proses pendinginan kembali ke $T_{\text{target}}$ mengikuti dinamika orde pertama:

$$
T(t) = T_{\text{ambient}} + (T_{\text{peak}} - T_{\text{ambient}}) \, e^{-(t-t_{\text{peak}})/\tau_c}
$$

dengan $\tau_c$ adalah konstanta waktu termal *cold chain box*. *Time to recovery* didefinisikan sebagai $t^* = t \mid T(t) = T_{\text{target