# 1622 — Model Ketahanan (Resilience) Logistik Cold Chain Produk Perishable dengan Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam jaringan distribusi produk *perishable* — yang mencakup vaksin, produk biofarmasi, makanan segar (daging, ikan, produk susu), dan bahan kimia biologis — di mana integritas suhu harus dijaga dalam rentang termal sempit sepanjang *last-mile* hingga titik penggunaan akhir. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengemukakan bahwa kegagalan mempertahankan suhu pada jendela operasional $\pm 2^\circ\text{C}$ untuk vaksin program imunisasi atau $\pm 1^\circ\text{C}$ untuk produk *plasma* dapat memicu degradasi kumulatif yang bersifat irreversibel, dengan konsekuensi finansial dan kesehatan masyarakat yang tidak proporsional terhadap durasi paparan termal. Paper tersebut mengajukan *resilience model* yang memposisikan kemampuan *recovery* (pemulihan performa setelah disrupsi) setara pentingnya dengan kemampuan *absorption* (ketahanan awal terhadap guncangan), sehingga total *resilience loss* dapat diminimalisasi melalui desain jaringan dan protokol pemulihan yang adaptif.

Urgensi empiris diperkuat oleh temuan Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) pada Dinas Kesehatan Kabupaten Siak, Indonesia, di mana Unit Pelaksana Teknis Dinas (UPTD) Farmasi menghadapi dua defect operasional utama: (i) **ketiadaan sistem peringatan dini real-time** saat suhu *cold chain box* menyimpang akibat kerusakan internal (misalnya kompresor, refrigerant leak) maupun eksternal (paparan matahari, *door opening* terlalu lama); dan (ii) **pencatatan suhu manual setiap 2 jam** pada *log sheet* yang dilakukan apoteker, yang menimbulkan *sampling interval* lebar dan rawan *human error* pada shift malam. Kombinasi keduanya menciptakan *blind spot* yang dalam kerangka resilience Khurshid–Siddiqui disebut sebagai **vulnerability window** — periode di mana sistem tidak memiliki visibilitas maupun kemampuan respons terhadap eskalasi suhu.

Secara ekonomi, WHO memperkirakan bahwa lebih dari 50% vaksin terbuang di negara berkembang akibat *cold chain failure*; pada industri makanan, *Food and Agriculture Organization (FAO)* melaporkan kerugian pascapanen produk perishable mencapai 30–40% di negara tropis seperti Indonesia. Dari perspektif *Lean–Resilient Engineering*,纸 kegagalan ini bukan semata masalah teknis refrigerasi, melainkan *system design flaw* yang membutuhkan integrasi antara *process re-engineering*, *sensor instrumentation*, dan *decision support system* yang real-time. Integrasi Internet of Things (IoT) dengan sensor suhu digital presisi tinggi seperti **DS18B20** (akurasi $\pm 0,5^\circ\text{C}$ pada rentang $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$) memungkinkan *continuous monitoring*, *automatic logging*, dan *threshold-based alerting* yang secara langsung menutup *vulnerability window* tersebut. Dengan demikian, modul ini menyintesiskan kerangka resilience teoretis Khurshid–Siddiqui (2024) dengan arsitektur instrumentasi empiris Putra dkk. (2024) untuk menghasilkan *blueprint* sistem cold chain yang adaptif terhadap disrupsi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Degradasi Kinetik Produk Perishable (Arrhenius–TTI)

Degradasi mutu produk perishable dimodelkan dengan persamaan Arrhenius yang menghubungkan laju deteriorasi $k$ dengan suhu absolut $T$:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ adalah faktor pra-eksponensial (frekuensi reaksi, s$^{-1}$), $E_a$ adalah energi aktivasi (J/mol), dan $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Untuk vaksin, nilai tipikal $E_a \approx 60$–$100$ kJ/mol; untuk daging segar $E_a \approx 80$ kJ/mol.

**Time-Temperature Integrator (TTI)** kumulatif didefinisikan sebagai:

$$\text{TTI}(t) = \int_{0}^{t} k(T(\tau)) \, d\tau = \int_{0}^{t} A \cdot \exp\left(-\frac{E_a}{R \cdot T(\tau)}\right) d\tau$$

Produk dianggap失效 (*shelf-life exhausted*) ketika $\text{TTI}(t) \geq \text{TTI}_{critical}$.

### 2.2 Resilience Triangle dan Loss Function

Mengikuti kerangka Khurshid & Siddiqui (2024), performa sistem cold chain dinotasikan $Q(t) \in [0,1]$, dengan $Q=1$ merepresentasikan operasi penuh (suhu dalam toleransi) dan $Q=0$ merepresentasikan *complete failure*. Saat disrupsi terjadi pada $t = t_0$, performa turun hingga $Q(t_0^+) = Q_{min}$, kemudian sistem *recovery* mengembalikan performa secara gradual hingga $Q(t_1) = Q_{target}$.

**Resilience Loss Index (RLI)** didefinisikan sebagai integral area kehilangan performa selama siklus disrupsi–pemulihan:

$$\text{RLI} = \int_{t_0}^{t_1} \left[ Q_{target} - Q(t) \right] dt$$

Semakin kecil RLI, semakin resilien sistem. Dalam implementasi diskret terhadap data sensor dengan interval $\Delta t$:

$$\text{RLI} \approx \sum_{i=i_0}^{i_1} \left[ Q_{target} - Q(t_i) \right] \cdot \Delta t$$

### 2.3 Model Markov untuk State Transitions

State suhu cold chain dimodelkan sebagai rantai Markov waktu-diskret dengan tiga state: $S_1$ (normal), $S_2$ (warning, $T \in [T_{alert}, T_{crit})$), $S_3$ (failure, $T \geq T_{crit}$ atau $T \leq T_{min}$). Matriks transisi probabilitas:

$$\mathbf{P} = \begin{bmatrix} p_{11} & p_{12} & p_{13} \\ p_{21} & p_{22} & p_{23} \\ p_{31} & p_{32} & p_{33} \end{bmatrix}, \quad \sum_{j} p_{ij} = 1$$

Probabilitas stationer $\boldsymbol{\pi} = (\pi_1, \pi_2, \pi_3)$ memenuhi $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$ dan merepresentasikan fraksi waktu jangka panjang yang dihabiskan sistem pada masing-masing state.

### 2.4 Network Reliability Cold Chain

Untuk jaringan distribusi multi-echelon (pabrik $\to$ gudang regional $\to$ puskesmas $\to$ *last-mile*), reliabilitas $R_{net}$ dihitung dari reliabilitas setiap edge $r_e$:

$$R_{net} = 1 - \prod_{e \in \text{min-cut}} (1 - r_e)$$

di mana *min-cut* adalah himpunan edge minimal yang bila gagal memutuskan konektivitas end-to-end.

### 2.5 Decision Rule IoT Threshold

Sensor DS18B20 menghasilkan *temperature reading* setiap interval sampling $\Delta t_s$. Aturan keputusan *threshold-based alert*:

$$\text{Alert}_t = \begin{cases} 0 & \text{if } T_{min} \leq T_t \leq T_{max} \\ 1 & \text{if } T_t < T_{min} \text{ atau } T_t > T_{max} \\ 2 & \text{if } T_t > T_{crit} \text{ (alarm darurat)} \end{cases}$$

dengan $T_{max}$ dan $T_{min}$ adalah batas toleransi (misalnya 2–8°C untuk vaksin), dan $T_{crit}$ adalah ambang kritis yang memicu *discard protocol*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Cold Chain (berdasarkan Putra dkk., 2024)

```
┌──────────────────────────────────────────────────────────────────┐
│                   ARSITEKTUR IoT COLD CHAIN                      │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐   1-Wire    ┌──────────────┐                   │
│  │ Sensor      │◄───────────►│ MCU          │                   │
│  │ DS18B20     │  Protocol   │ (ESP32/      │                   │
│  │ (Multi-     │             │  Arduino)    │                   │
│  │  point)     │             └──────┬───────┘                   │
│  └─────────────┘                    │                            │
│                                     │ UART/SPI                   │
│                                     ▼                            │
│                          ┌──────────────────┐                    │
│                          │ WiFi/GSM Module  │                    │
│                          └─────────┬────────┘                    │
│                                    │                             │
│                       ┌────────────┴────────────┐                │
│                       ▼                         ▼                │
│              ┌─────────────────┐    ┌─────────────────────┐     │
│              │ Cloud Database  │    │ Mobile/Web Dashboard│     │
│              │ (InfluxDB /     │    │ (Real-time Graph +  │     │
│              │  ThingSpeak)    │    │  Push Notification) │     │
│              └─────────────────┘    └─────────────────────┘     │
└──────────────────────────────────────────────────────────────────┘
```

**Komponen dan Fungsi:**
1. **Sensor DS18B20**: Sensor suhu digital 1-Wire dengan resolusi 9–12 bit (resolusi konfigurasi $0{,}0625^\circ\text{C}$ pada mode 12-bit), akurasi $\pm 0{,}5^\circ\text{C}$ ($-10^\circ\text{C}$ hingga $+85^\circ\text{C}$), mendukung *multi-drop* hingga 10+ sensor pada satu bus untuk memetakan gradien termal dalam *cold box*.
2. **Mikrokontroler (ESP32/Arduino)**: Akuisisi data setiap $\Delta t_s = 30$–$60$ detik, implementasi aturan keputusan (Persamaan 2.5), dan *timestamping* NTP untuk konsistensi data.
3. **Komunikasi**: Transmisi ke cloud via WiFi (skala dalam gedung) atau GSM (skara lapangan/distribusi移动), protokol MQTT untuk efisiensi bandwidth.
4. **Dashboard & Alert**: Visualisasi grafik *time-series*, threshold alert, dan integrasi Telegram/WhatsApp API untuk notifikasi apoteker.

### 3.2 SOP Implementasi 5-Langkah (Industrial Engineering Standard)

**Langkah 1 — Pemetaan Proses (Value Stream Mapping cold chain).**
Identifikasi setiap *touchpoint* suhu: dari *manufacturing* $\to$ *primary distribution* $\to$ *regional warehouse* $\to$ *cold box transport* $\to$ *last-mile storage*. Catat *holding time* di setiap node untuk estimasi $\text{TTI}_{akumulatif}$.

**Langkah 2 — Risk Assessment & FMEA.**
Hitung **Risk Priority Number (RPN)** untuk setiap mode kegagalan:

$$\text{RPN} = S \times O \times D$$

dengan $S$ (severity), $O$ (occurrence), $D$ (detectability). Contoh: kegagalan sensor (S=8, O=3, D=2) $\Rightarrow$ RPN=48; *power outage* (S=10, O=4, D=5 sebelum IoT, D=1 sesudah IoT) $\Rightarrow$ RPN turun dari 200 menjadi 40.

**Langkah 3 — Instrumentasi & Kalibrasi.**
Pasang sensor DS18B20 di tiga zona cold box (dekat evaporator, tengah, dekat pintu). Kalibrasi menggunakan *ice