# 2582 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu IoT Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biologis, makanan beku, dan reagen diagnostik. Setiap penyimpangan suhu (*temperature excursion*) di luar rentang preskripsi 2–8 °C untuk sebagian besar vaksin dapat memicu degradasi potensi farmakologis, kerugian ekonomi masif, dan—yang paling krusial—risiko keselamatan pasien. Khurshid dan Siddiqui (2024) dalam paper *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menegaskan bahwa kemampuan sistem untuk tidak hanya bertahan (*withstand*) terhadap gangguan tetapi juga pulih (*recover*) secara cepat merupakan variabel strategis yang selama ini kurang dimodelkan secara kuantitatif dalam literatur rantai pasok farmasi.

Urgensi empiris masalah ini tecermin dari studi Putra, Defit, dan Nurcahyo (2024) di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Mereka mendokumentasikan tiga缺陷 (defisiensi) operasional yang bersifat struktural, bukan insidental: (1) *cold chain box* sebagai media penyimpanan vaksin tidak dilengkapi sistem peringatan dini saat suhu menyimpang; (2) kerusakan baik internal (misalnya kegagalan elemen Peltier, kebocoran refrigerant) maupun eksternal (paparan sinar matahari langsung pada titik distribusi, keterlambatan transportasi) tidak segera terdeteksi; (3) pencatatan suhu masih dilakukan secara manual setiap dua jam pada *log sheet* kertas oleh apoteker, sehingga menciptakan *single point of failure* pada SDM dan *data granularity* yang terlalu kasar untuk analisis *root cause*. Implikasi ekonominya signifikan: WHO memperkirakan bahwa sekitar 50% vaksin terbuang secara global akibat kegagalan rantai dingin, setara dengan kerugian USD 4–10 miliar per tahun. Dalam konteks Indonesia dengan lebih dari 34.000 puskesmas dan 514 kabupaten/kota, skala kerugian nasional berpotensi mencapai triliunan rupiah per tahun.

Rekayasawan industri dituntut untuk mengintegrasikan *framework* ketahanan (resilience) dengan teknologi Internet of Things (IoT) agar variabilitas rantai dingin dapat dikuantifikasi, dimonitor secara *real-time*, dan direspons secara otomatis sebelum produk rusak secara irreversibel.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Dinamika Termal Cold Chain Box

Perilaku suhu dalam wadah berinsulasi mengikuti **Hukum Pendinginan Newton** yang diperluas dengan sumber panas internal:

$$\frac{dT(t)}{dt} = -\kappa \left[T(t) - T_{\text{amb}}\right] + \frac{\dot{Q}_{\text{gen}}(t)}{m \cdot c_p}$$

dengan $T(t)$ adalah suhu internal (°C), $T_{\text{amb}}$ suhu ambient (°C), $\kappa$ konduktansi termal efektif wadah (s⁻¹), $\dot{Q}_{\text{gen}}$ laju kalor parasitik (W), $m$ massa produk (kg), dan $c_p$ kapasitas panas jenis (J/kg·K). Solusi analitik untuk gangguan stepwise adalah:

$$T(t) = T_{\text{amb}} + \left(T_0 - T_{\text{amb}} - \frac{\dot{Q}_{\text{gen}}}{\kappa m c_p}\right) e^{-\kappa t} + \frac{\dot{Q}_{\text{gen}}}{\kappa m c_p}$$

### 2.2 Indeks Ketahanan (*Resilience Index*)

Mengikuti formulasi Bruneau et al. yang diadaptasi oleh Khurshid dan Siddiqui (2024), indeks ketahanan sistem rantai dingin didefinisikan sebagai kemampuan mempertahankan **fungsi kualitas** $Q(t)$ selama dan setelah disrupsi:

$$R = \frac{\displaystyle\int_{t_0}^{t_1} Q(t)\, dt}{\displaystyle\int_{t_0}^{t_1} Q_{\text{nominal}}(t)\, dt}$$

dengan $Q(t)$ merepresentasikan proporsi lot produk yang masih memenuhi spesifikasi pada waktu $t$. Untuk produk termolabil, $Q(t)$ dapat didekulisasi dengan model degradasi Arrhenius:

$$\frac{dQ}{dt} = -k_{\text{deg}} \cdot e^{-E_a/(RT)} \cdot Q(t)$$

dengan $E_a$ energi aktivasi degradasi (J/mol), $R$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu absolut.

### 2.3 Model Sensor DS18B20

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) memiliki akurasi $\pm 0,5$ °C pada rentang $-10$ °C hingga $+85$ °C dan resolusi 9–12 bit. Model pengukuran stokastik:

$$T_{\text{ukur}} = T_{\text{true}} + \epsilon_{\text{sensor}}, \quad \epsilon_{\text{sensor}} \sim \mathcal{N}(0, \sigma_s^2)$$

dengan $\sigma_s \approx 0,25$ °C untuk kalibrasi standar.

### 2.4 Mean Time To Detection (MTTD) dan Mean Time To Recovery (MTTR)

MTTD sistem manual (pencatatan 2 jam sekali): $\text{MTTD}_{\text{manual}} = 60$ menit (rata-rata).  
MTTD sistem IoT dengan ambang batas (*threshold*) dinamis: $\text{MTTD}_{\text{IoT}} = \tau_{\text{telemetry}}$ dengan $\tau_{\text{telemetry}} \leq 60$ detik.

$$\eta_{\text{detection}} = \frac{\text{MTTD}_{\text{manual}}}{\text{MTTD}_{\text{IoT}}} \geq 60$$

### 2.5 Fungsi Kerugian Ekonomi

Kerugian akibat excursion suhu selama $\Delta t$ pada lot bernilai $V$:

$$L = V \cdot \left[1 - \exp\left(-\int_{t}^{t+\Delta t} k_{\text{deg}} e^{-E_a/(RT(\tau))} d\tau\right)\right]$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur sistem yang diintegrasikan mengikuti tiga lapisan fungsional:

**Lapisan 1 — Akuisisi Data (Sensor Layer):**
Node sensor DS18B20 dipasang di tiga zona cold chain box (atas, tengah, bawah) untuk menangkap gradien termal akibat konveksi alami. Sensor berkomunikasi via protokol OneWire ke mikrokontroler ESP32.

**Lapisan 2 — Edge Computing & Telemetry:**
ESP32 menjalankan *finite state machine* dengan empat status: `NORMAL` ($2 \leq T \leq 8$ °C), `WARNING` ($8 < T \leq 10$ °C atau $0 \leq T < 2$ °C), `CRITICAL` ($T > 10$ °C atau $T < 0$ °C), dan `SENSOR_FAULT` (data invalid > 5 menit). Telemetry dikirim ke broker MQTT setiap 30 detik.

**Lapisan 3 — Cloud Dashboard & Alerting:**
Platform ThingsBoard atau custom Node-RED dashboard menampilkan *time-series*, menyimpan *audit trail* immutable (blockchain opsional), dan memicu peringatan multi-channel (SMS, WhatsApp, buzzer lokal).

```
┌─────────────────────────────────────────────────────────────┐
│  SOP Cold Chain Tahan Gangguan — Modul 2582                 │
├─────────────────────────────────────────────────────────────┤
│  IF T_sensor > 8°C selama ≥ 60 detik THEN                   │
│      trigger: ALERT_LEVEL_1 → SMS ke apoteker jaga          │
│      trigger: data_logger write event ke PostgreSQL         │
│  IF T_sensor > 10°C selama ≥ 30 detik THEN                 │
│      trigger: ALERT_LEVEL_2 → Telepon kepala UPTD           │
│      trigger: protokol pindah ke cold chain backup          │
│      trigger:hitung MTTR aktual vs MTTR target              │
│  IF T_sensor > 12°C selama ≥ 120 detik THEN                │
│      trigger: ALERT_LEVEL_3 → Karantina lot,hitung kerugian │
└─────────────────────────────────────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi Kabupaten Siak menyimpan 500 vial vaksin COVID-19 (nilai total Rp. 75.000.000). Sensor DS18B20 pada pukul 10:00 WIB mendeteksi suhu melonjak dari 5,2 °C ke 11,4 °C akibat kegagalan elemen pendingin.

**Langkah 1 — Karakteristik termal wadah:**
$\kappa = 1/(RC) = 1/(1800 \text{ s}) \approx 5,56 \times 10^{-4}$ s⁻¹, $T_{\text{amb}} = 30$ °C, $T_0 = 5,2$ °C.

**Langkah 2 — Evolusi suhu (gangguan stepwise):**
$$T(t) = 30 + (5{,}2 - 30) \cdot e^{-5{,}56 \times 10^{-4} \cdot t} = 30 - 24{,}8 \cdot e^{-5{,}56 \times 10^{-4} \cdot t}$$

Pada $t = 30$ menit (1800 s): $T = 30 - 24{,}8 \cdot e^{-1} = 30 - 9{,}12 = 20{,}88$ °C — *namun* nilai aktual 11,4 °C mengindikasikan kombinasi $\kappa$ lebih tinggi dan operasi teknis yang sempat dilakukan.

**Langkah 3 — Degradasi kualitas vaksin (model Arrhenius, $E_a = 84$ kJ/mol untuk mRNA, $k_{\text{deg},0} = 1,2 \times 10^{12}$ jam⁻¹):**
$$k_{\text{deg}}(T) = 1{,}2 \times 10^{12} \cdot e^{-84000/(8{,}314 \cdot 284{,}55)} \approx 1{,}58 \