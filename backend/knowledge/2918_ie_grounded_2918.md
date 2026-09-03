# 2918 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak: Kerangka Kuantitatif dan Integrasi IoT untuk Pemantauan Suhu Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik farmasi, makanan, dan bioteknologi yang menuntut kendali suhu presisi pada rentang sempit (umumnya $2^\circ\text{C}$ hingga $8^\circ\text{C}$ untuk vaksin) sepanjang proses *storage*, *handling*, dan *distribution* (Khurshid & Siddiqui, 2024). Kerusakan pada salah satu mata rantai akan memicu *cascading failure* yang menurunkan kualitas farmasi secara irreversibel, sehingga persoalan *cold chain resilience* bukan sekadar isu *reliability* konvensional melainkan persoalan **ketahanan sistemik** (*system resilience*) yang menggabungkan kemampuan *absorption*, *adaptation*, dan *restoration* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)).

Urgensi industri nyata digambarkan secara tajam oleh Putra, Defit, dan Nurcahyo (2024) pada kasus UPTD Farmasi Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi tiga *pain points* utama: (1) **cold chain box** sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi alat pemantauan suhu *real-time*; (2) sistem peringatan dini (*early warning system*) bagi apoteker belum tersedia ketika suhu naik akibat kerusakan internal (misalnya compressor failure) maupun eksternal (misalnya paparan ambient tinggi); dan (3) **pencatatan suhu masih manual** setiap 2 jam melalui *log sheet*, yang rentan terhadap *human error*, keterlambatan deteksi, dan *audit trail* yang lemah (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Ketiga *pain points* tersebut merupakan representasi klasik dari rendahnya *resilience* rantai dingin karena sistem tidak memiliki *absorptive capacity* untuk mendeteksi gangguan secara cepat.

Secara ekonomi, WHO memperkirakan bahwa sekitar 50% vaksin terbuang sia-sia akibat breakage rantai dingin di negara berkembang, sehingga investasi pada model *resilience* yang terukur memberikan *return on prevention* yang sangat tinggi. Pendekatan Khurshid dan Siddiqui (2024) menjawab kebutuhan tersebut melalui formulasi kuantitatif yang memungkinkan *system designer* menghitung probabilitas sistem pulih dalam jendela waktu tertentu, sementara sistem pendukung IoT dari Putra dkk. (2024) menyediakan *data acquisition layer* yang menjadi prasyarat bagi model tersebut. Kombinasi keduanya melahirkan arsitektur *cyber-physical cold chain* yang resilien.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Resilience Cold Chain

Mengikuti kerangka Bruneau dkk. yang diadaptasi oleh Khurshid dan Siddiqui (2024), **resilience** rantai dingin didefinisikan sebagai kemampuan sistem untuk mempertahankan level layanan (Quality Function $Q(t)$) ketika terjadi *disruption*, serta durasi pemulihannya. Formulasi diskretnya:

$$R = \int_{t_{0}}^{t_{1}} \frac{Q(t)}{Q_{\max}} \, dt$$

di mana $t_0$ adalah waktu *disruption*, $t_1$ adalah waktu *full recovery*, $Q_{\max}$ adalah level layanan nominal, dan $R$ adalah *resilience index* (unit: waktu × level). Semakin tinggi $R$, semakin resilien sistem.

### 2.2 Markov Chain State-Space Model

Cold chain dimodelkan sebagai rantai Markov waktu-diskrit dengan empat *state*: $\mathcal{S} = \{S_0, S_1, S_2, S_3\}$:

- $S_0$ = Normal Operation ($2^\circ\text{C} \leq T \leq 8^\circ\text{C}$)
- $S_1$ = Warning Deviation ($8^\circ\text{C} < T \leq 10^\circ\text{C}$ selama $\leq 30$ menit)
- $S_2$ = Critical Failure ($T > 10^\circ\text{C}$ atau $T < 2^\circ\text{C}$)
- $S_3$ = Absorptive Failure / Vaccine Compromised

Probabilitas transisi $p_{ij}$ membentuk *transition matrix* $\mathbf{P}$:

$$\mathbf{P} = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}$$

dengan kendala $\sum_{j} p_{ij} = 1$ untuk setiap $i$. *Steady-state probability* $\boldsymbol{\pi}$ diperoleh dari solusi $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$.

### 2.3 Sensor Reliability & Detection Probability

Putra dkk. (2024) menggunakan sensor **DS18B20** dengan karakteristik: rentang $-55^\circ\text{C}$ hingga $+125^\circ\text{C}$, akurasi $\pm 0.5^\circ\text{C}$ pada $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$, resolusi $9$–$12$ bit (resolusi $0.0625^\circ\text{C}$ pada mode 12-bit). Probabilitas deteksi anomali suhu:

$$P_{\text{detect}} = 1 - (1 - p_s)^{n}$$

di mana $p_s$ adalah probabilitas sensor memberikan pembacaan benar pada satu kali *sampling*, dan $n$ adalah jumlah *sample* dalam jendela deteksi. Dengan sampling setiap 60 detik dan target deteksi anomali dalam 5 menit:

$$P_{\text{detect}}(n=5) = 1 - (1 - 0{,}98)^{5} \approx 0{,}9992$$

### 2.4 Mean Time To Recovery (MTTR)

MTTR dimodelkan sebagai:

$$\text{MTTR} = \int_{0}^{\infty} t \cdot f_{\text{recovery}}(t) \, dt$$

Untuk distribusi pemulihan eksponensial dengan rate $\mu$:

$$\text{MTTR} = \frac{1}{\mu}$$

### 2.5 Composite Resilience Index

Khurshid dan Siddiqui (2024) mengusulkan *composite index* yang mengintegrasikan *reliability*, *recovery*, dan *redundancy*:

$$\rho = \alpha \cdot \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} + \beta \cdot e^{-\lambda \cdot \text{MTTR}} + \gamma \cdot R_{\text{red}}$$

di mana $\alpha + \beta + \gamma = 1$, $\lambda$ adalah *decay constant*, dan $R_{\text{red}}$ adalah *redundancy factor* ($0 \leq R_{\text{red}} \leq 1$).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Cyber-Physical Cold Chain

```
┌─────────────────────────────────────────────────────────┐
│         SENSOR LAYER (DS18B20 Array, n ≥ 3)           │
│   Sampling: 1 Hz, Resolution: 12-bit, Interface: 1-Wire │
└──────────────────────────┬──────────────────────────────┘
                           │ (1-Wire / I2C bus)
┌──────────────────────────▼──────────────────────────────┐
│   EDGE COMPUTING LAYER (ESP32 / Raspberry Pi)          │
│   - Real-time threshold check (2°C ≤ T ≤ 8°C)          │
│   - Local alert via buzzer + LED                       │
│   - Buffer storage (SQLite / InfluxDB)                 │
└──────────────────────────┬──────────────────────────────┘
                           │ (Wi-Fi / MQTT / LoRaWAN)
┌──────────────────────────▼──────────────────────────────┐
│   CLOUD LAYER (Dashboard + Alert System)               │
│   - Apoteker notification (SMS / WA / Telegram Bot)    │
│   - Auto-log ke logbook digital (ganti manual sheet)   │
└─────────────────────────────────────────────────────────┘
```

### 3.2 SOP Pemantauan Cold Chain Box (Berdasarkan Putra dkk., 2024)

1. **Pra-Operasional** — kalibrasi sensor DS18B20 menggunakan *ice-point calibration* ($T = 0{,}00 \pm 0{,}05^\circ\text{C}$).
2. **Inisialisasi** — pasang 3 sensor pada lokasi *representative* (dekat evaporator, tengah box, dekat dinding).
3. **Operasional** — aktivasi *continuous logging* dengan interval $\Delta t \leq 120$ detik (Putra dkk. merekomendasikan interval lebih pendek dari manual 2 jam untuk menutup gap deteksi).
4. **Threshold Logic** — aktifkan alarm bertingkat:
   - *Soft alarm*: $T > 8^\circ\text{C}$ atau $T < 2^\circ\text{C}$ selama $>5$ menit.
   - *Hard alarm*: $T > 10^\circ\text{C}$ atau $T < 0^\circ\text{C}$ (langsung).
5. **Audit Trail** — semua kejadian disimpan dengan timestamp, nilai suhu, dan action yang diambil apoteker.
6. **Recovery Drill** — uji *restoration time* setiap bulan sesuai target MTTR $\leq 15$ menit.

### 3.3 Integrasi dengan Model Resilience

Setiap *event* (deviasi suhu, alarm, recovery) di-*feed* ke model Markov untuk re-estimasi parameter $p_{ij}$. Dengan pendekatan Bayesian update:

$$p_{ij}^{(t+1)} = \frac{N_{ij}^{(t)} + \alpha_{ij}}{N_{i}^{(t)} + \sum_{k} \alpha_{ik}}$$

di mana $N_{ij}^{(t)}$ adalah jumlah transisi observed dari state $i$ ke $j$ hingga waktu $t$, dan $\alpha_{ij}$ adalah prior Dirichlet hyperparameter.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Sistem (UPTD Farmasi Kab. Siak)

Misalkan cold chain box UPTD Farmasi memiliki parameter berikut berdasarkan skenario realistis:

- Volume cold chain box: $V = 50$ liter
- Kapasitas疫苗/vaksin: $N_{\text{vax}} = 2000$ vial
- Biaya per vial: $C_{\text{vax}} = \text{Rp } 75.000$
- Total nilai inventaris: $C_{\text{inv}} = N_{\text{vax}} \times C_{\text{vax}} = \text{Rp } 150.000.000$
- Failure rate kompresor: $\lambda_c = 0{,}002$/jam
- Detection delay (prosedur manual): $\tau_{\text{manual}} = 120$ menit (pencatatan tiap 2 jam)
- Detection delay (IoT DS18B20): $\tau_{\text{IoT}} = 1$ menit

### 4.2 Perhitungan Resilience Index (Skenario Manual vs IoT)

**Asumsi:** ketika suhu naik ke $10^\circ\text{C}$ (transisi $S_0 \to S_1$), vaccine mulai degradasi dengan laju $\delta = 0{,}1\%$ per jam. Kerusakan menjadi irreversibel jika suhu $>10^\circ\text{C}$ selama $>60$ menit.

**Tanpa IoT (manual):**

Kerusakan yang terjadi sebelum deteksi (120 menit delay):

$$L_{\text{manual}} = \delta \times \tau_{\text{manual}} \times C_{\text{inv}} = 0{,}001 \times 2 \times \text{Rp } 150.000.000 = \text{Rp } 300.000$$

Resilience index:

$$R_{\text{manual}} = 1 - \frac{L_{\text{manual}}}{