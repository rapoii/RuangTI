# 2534 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Pemantauan IoT dan Optimasi Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk termolabil seperti vaksin, produk biofarmasi, makanan segar (*fresh produce*), dan produk laut. Setiap penyimpangan suhu di luar ambang batas yang ditetapkan (misalnya $2-8^{\circ}\text{C}$ untuk vaksin rutin, atau $-20^{\circ}\text{C}$ untuk produk beku) dapat menurunkan potensi produk, menimbulkan kerugian ekonomi, bahkan risiko kesehatan masyarakat. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa mayoritas penelitian cold chain sebelumnya berfokus pada *efficiency* dan *cost minimization*, namun忽略了 dimensi *resilience* — yaitu kemampuan sistem untuk menyerap, beradaptasi, dan pulih dari gangguan (disruption) seperti kerusakan refrigerasi, keterlambatan distribusi, atau kegagalan sensor.

Konteks industri di Indonesia memperkuat urgensi ini. Putra, Defit, dan Nurcahyo (2024) (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan kasus di Dinas Kesehatan Kabupaten Siak, dimana UPTD Farmasi mengelola cold chain box untuk distribusi vaksin dengan pencatatan suhu manual setiap 2 jam pada *log sheet* oleh apoteker. Sistem seperti ini mengandung tiga kelemahan struktural: (1) tidak ada peringatan *real-time* saat suhu naik akibat kerusakan internal/eksternal, (2) *human error* dalam pencatatan manual, dan (3) tidak ada jejak audit digital untuk pelacakan mutu (quality traceability). Berdasarkan laporan WHO (2023) yang dirujuk dalam kedua paper tersebut, sekitar 50% vaksin terbuang sia-sia secara global akibat kerusakan rantai dingin, menimbulkan kerugian lebih dari US$ 34,1 miliar per tahun.

Secara ekonomis, Pharmaceutical Commerce (2023) memperkirakan pasar cold chain farmasi global mencapai US$ 21,3 miliar pada 2024 dengan CAGR 12,5%. Sementara itu, Food and Agriculture Organization (FAO) memperkirakan kehilangan (*food loss*) pada rantai dingin buah dan sayur mencapai 20–40% di negara berkembang. Kedua paper yang menjadi basis modul ini secara konvergen menunjukkan bahwa *resilience* bukan lagi opsional melainkan prasyarat keberlanjutan (*sustainability*) dan kepatuhan terhadap standar seperti WHO PQS (Performance, Quality and Safety), GDP (Good Distribution Practice), dan ISO 23412:2020 untuk cold chain logistics. Dengan mengintegrasikan model *resilience* teoritis Khurshid-Siddiqui dengan implementasi IoT termonitor seperti yang dirancang Putra et al., kita dapat membangun ekosistem cold chain yang adaptif dan proaktif, bukan sekadar reaktif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep Resilience dalam Cold Chain

Khurshid dan Siddiqui (2024) mendefinisikan *resilience* cold chain sebagai kapasitas sistem untuk mempertahankan fungsionalitas di bawah tekanan (*stress*) dan kembali ke kondisi normal dengan kerugian minimal. Secara matematis, ini dapat diekspresikan sebagai *Resilience Index*:

$$R = \int_{t_0}^{t_1} \frac{Q(t)}{Q_{nom}} \, dt + \int_{t_1}^{t_2} \left(1 - \frac{L(t)}{Q_{nom}}\right) dt$$

di mana:
- $Q(t)$ = performa sistem pada waktu $t$ saat gangguan
- $Q_{nom}$ = performa nominal
- $L(t)$ = fungsi kehilangan mutu (*quality loss function*)
- $t_0$ = waktu mulai gangguan
- $t_1$ = waktu sistem mulai pulih
- $t_2$ = waktu sistem kembali stabil

Indeks $R \in [0, 1]$, di mana $R=1$ menunjukkan resilience sempurna (tidak ada degradasi mutu selama gangguan) dan $R \to 0$ menunjukkan kegagalan total.

### 2.2 Model Degradasi Termal Berdasarkan Arrhenius

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0,5^{\circ}\text{C}$ untuk memantau suhu. Laju degradasi produk termolabil mengikuti persamaan Arrhenius yang dimodifikasi:

$$k(T) = A \cdot e^{-\frac{E_a}{R_g T}}$$

dengan $k(T)$ sebagai konstanta laju degradasi pada suhu absolut $T$ (dalam Kelvin), $A$ sebagai faktor pre-eksponensial, $E_a$ sebagai energi aktivasi (J/mol), dan $R_g = 8{,}314$ J/(mol·K) sebagai konstanta gas universal. Waktu paruh mutu (*shelf-life*) pada suhu referensi $T_{ref}$ adalah:

$$t_{sh}(T) = t_{sh}(T_{ref}) \cdot Q_{10}^{\frac{T_{ref}-T}{10}}$$

di mana $Q_{10}$ adalah koefisien peningkatan laju degradasi per kenaikan $10^{\circ}\text{C}$ (umumnya 2–3 untuk produk biologis). Misalnya, jika $Q_{10}=2{,}5$ dan suhu naik dari $5^{\circ}\text{C}$ menjadi $15^{\circ}\text{C}$, maka $t_{sh}$ berkurang menjadi $t_{sh}(T_{ref})/2{,}5 = 0{,}4 \cdot t_{sh}(T_{ref})$ — turun 60%.

### 2.3 Model Markov untuk Transisi Status Cold Chain

Status cold chain dimodelkan sebagai rantai Markov dengan state space $S = \{S_0, S_1, S_2, S_3\}$:
- $S_0$ = kondisi normal (suhu dalam batas)
- $S_1$ = peringatan dini (*early warning*, deviasi $< 1^{\circ}\text{C}$)
- $S_2$ = alarm kritis (deviasi $\geq 2^{\circ}\text{C}$ atau berlangsung $> 30$ menit)
- $S_3$ = kegagalan sistem

Probabilitas transisi $P_{ij}$ membentuk matriks transisi $\mathbf{P}$:

$$\mathbf{P} = \begin{bmatrix} p_{00} & p_{01} & 0 & 0 \\ p_{10} & p_{11} & p_{12} & 0 \\ 0 & p_{21} & p_{22} & p_{23} \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

Waktu rata-rata di setiap state adalah *mean sojourn time* $\tau_i = -1/\lambda_i$, di mana $\lambda_i$ adalah *rate* transisi keluar.

### 2.4 Model Antrian M/G/1 untuk Throughput Distribusi

Cold chain box (CCB) sebagai server tunggal dengan kapasitas $K$ mengikuti model antrian $M/G/1/K$. Utilisasi server:

$$\rho = \frac{\lambda}{\mu} < 1$$

di mana $\lambda$ = laju kedatangan, $\mu$ = laju pelayanan. Panjang antrian rata-rata menggunakan rumus Pollaczek-Khinchine:

$$L_q = \frac{\rho^2 + \lambda^2 \sigma_s^2}{2(1-\rho)}$$

dengan $\sigma_s^2$ sebagai variansi waktu pelayanan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Pemantauan Cold Chain (Berdasarkan Putra et al., 2024)

Sistem yang dirancang oleh Putra et al. (2024) untuk UPTD Farmasi Siak memiliki arsitektur berlapis (*layered architecture*):

```
┌─────────────────────────────────────────────────┐
│  Layer 4: Application & Dashboard (Web/Mobile)  │
│  - Monitoring real-time, alert, histori suhu   │
├─────────────────────────────────────────────────┤
│  Layer 3: Network (WiFi/GSM/MQTT Gateway)      │
│  - Transmisi data sensor ke cloud server       │
├─────────────────────────────────────────────────┤
│  Layer 2: Edge Processing (Mikrokontroler)     │
│  - ESP32/Arduino + DS18B20 sensor              │
│  - Threshold check, logging lokal, alarm lokal │
├─────────────────────────────────────────────────┤
│  Layer 1: Physical (Cold Chain Box + Vaccine)  │
│  - Refrigerated container, ice pack, produk    │
└─────────────────────────────────────────────────┘
```

**Diagram Alir SOP Pemantauan Cold Chain:**

1. **Inisialisasi sistem** → kalibrasi sensor DS18B20 dengan referensi $\pm 0{,}1^{\circ}\text{C}$
2. **Pembacaan periodik** setiap $\Delta t = 60$ detik
3. **Filtering data** menggunakan *moving average* window $n=5$ untuk meredam noise
4. **Threshold check**: $T_{min} \leq T(t) \leq T_{max}$
   - Jika $T \in [T_{min}, T_{max}]$ → status normal
   - Jika $T \notin [T_{min}, T_{max}]$ → aktifkan *alert*
5. **Data logging** ke SD card lokal dan transmisi ke cloud via MQTT
6. **Auto-alert** via buzzer + notifikasi Telegram/WhatsApp jika deviasi terdeteksi $> 2^{\circ}\text{C}$ atau durasi $> 30$ menit
7. **Backup power** (baterai Li-ion 3,7V 2000 mAh) untuk menjaga operasi saat listrik padam

### 3.2 SOP Prosedur Pemulihan (*Recovery Procedure*)

Mengacu pada model resilience Khurshid-Siddiqui (2024), prosedur pemulihan mengikuti protokol:

| Tahap | Aktivitas | PIC | Target Waktu |
|-------|-----------|-----|--------------|
| Deteksi | Alarm otomatis oleh IoT | Sistem | $t_0$ (real-time) |
| Verifikasi | Apoteker cek kondisi fisik | Apoteker | $\leq 5$ menit |
| Isolasi | Pindahkan vaksin ke CCB cadangan | Logistik | $\leq 15$ menit |
| Stabilisasi | Ganti ice pack, cek refrigerasi | Teknisi | $\leq 30$ menit |
| Dokumentasi | Catat insiden di sistem digital | Quality Assurance | $\leq 60$ menit |
| Evaluasi | Root cause analysis | Manajer | $\leq 24$ jam |

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Studi Kasus

Sebuah UPTD Farmasi tingkat kabupaten mengelola distribusi vaksin COVID-19 ke 25 puskesmas dalam radius 80 km. Spesifikasi:
- **Vaksin:** mRNA, memerlukan suhu $-20^{\circ}\text{C} \pm 5^{\circ}\text{C}$ (skenario modificasi dari standar $2-8^{\circ}\text{C}$)
- **Jumlah per pengiriman:** 500 vial
- **Harga per vial:** Rp 250.000
- **Sensor:** DS18B20, akurasi $\pm 0{,}5^{\circ}\text{C}$
- **Waktu tempuh rata-rata:** 4 jam
- **Standar deviasi waktu pelayanan:** $\sigma_s = 0{,}5$ jam
- **Laju kedatangan:** $\lambda = 2$ pengiriman/hari
- **Laju pelayanan:** $\mu = 3$ pengiriman/hari
- **$Q_{10}$ untuk vaksin mRNA:** 2,0
- **Energi aktivasi:** $E_a = 75.000$ J/mol
- **Pre-eksponensial:** $A = 2{,}5 \times 10^{13}$ /jam

### 4.2 Perhitungan Utilisasi Server dan Antrian

$$\rho = \frac{\lambda}{\mu} = \frac{2}{3} = 0{,}667$$

Karena $\rho < 1$, sistem stabil. Panjang antrian rata-rata:

$$L_q = \frac{\rho^2 + \lambda^2 \sigma_s^2}{2(1-\rho)} = \frac{(0{,}667)^2 + (2)^2 (0{,}5)^2}{2(1-0{,}667)} = \frac{0{,}444 + 1{,}000}{0{,}666} = 2{,}167 \text{ pengiriman}$$

Waktu rata-rata dalam sistem (Waktu tunggu Little):

$$W_q = \frac{L_q}{\lambda} = \frac{2{,}167}{2} = 1{,}084 \text{ jam} \approx 65 \text{ menit}$$

### 4.3 Perhitungan Laju Degradasi pada Suhu Gangguan

Misalkan terjadi kerusakan refrigerasi sehingga suhu naik dari $-20^{\circ}\text{C}$ ke $0^{\circ}\text{C}$ (deviasi $20^{\circ}\text{C}$) selama $\Delta t = 1$ jam.

Konversi ke Kelvin: $T_1 = 253{,}15$ K, $T_2 = 273{,}15$ K

$$k(T_1) = 2{,}5 \times 10^{13}