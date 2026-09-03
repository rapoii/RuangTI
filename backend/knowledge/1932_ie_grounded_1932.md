# 1932 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Pemantauan Proses Kritis Berstandar PAT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termosensitif seperti protein monoklonal, vaksin mRNA, dan antibiotik beta-laktam. Proses ini berlangsung dalam tiga tahap berurutan — pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi) — yang keseluruhannya memakan waktu antara 24 hingga 96 jam per siklus dengan konsumsi energi 5–8 MWh per batch (Meza-Galvan et al., 2026). Variabilitas proses yang tidak terkontrol dapat menyebabkan degradasi produk, yield loss, dan penolakan batch yang berdampak ekonomi sangat signifikan: satu batch gagal pada produk bioteknologi bernilai tinggi dapat merugikan hingga USD 2–5 juta.

Dalam kerangka *Process Analytical Technology* (PAT) yang digagas FDA sejak 2004, pemahaman proses secara real-time menjadi prasyarat implementasi *Quality by Design* (QbD). Bab 4 dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying* yang ditulis Meza-Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4) secara khusus membahas bagaimana Jaringan Sensor Nirkabel (*Wireless Sensor Networks* — WSN) merevolusi arsitektur pemantauan liofilisasi. Sebelumnya, sensor thermocouple hard-wired menjadi kendala utama karena memerlukan puluhan kabel menembus dinding ruang vakum, menciptakan titik kebocoran (*leak points*) dan menambah biaya instalasi hingga USD 50.000 per liofilizer. WSN menghapus kebutuhan ini dengan menempatkan node sensor otonom berdaya baterai yang berkomunikasi via *radio frequency* (RF) ke gateway di luar chamber.

Konteks operasional industri farmasi global saat ini menunjukkan urgensi adopsi WSN. Dengan lebih dari 4.500 fasilitas manufaktur parenteral di dunia yang mayoritas sudah menggunakan liofilizer kapasitas besar, permintaan akan sistem monitoring yang fleksibel, *scalable*, dan memenuhi regulasi 21 CFR Part 11 meningkat tajam. Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) dalam bab komplementer menyoroti bahwa teknologi baru termasuk WSN, *tunable diode laser absorption spectroscopy* (TDLAS), dan *smart freeze-dryers* berbasis *machine learning* merupakan pilar utama *Pharma 4.0*. Adopsi WSN memungkinkan transisi dari paradigma *batch-end testing* menuju *real-time release* (RTR) yang telah direkomendasikan FDA dan EMA untuk produk-produk kritis.

Urgensi ekonomis juga tecermin dari fakta bahwa downtime liofilizer akibat *cleaning* dan *sterilisasi* (CIP/SIP) berkurang 12–18% ketika jumlah port hard-wired berkurang. Selain itu, *mean time to detect* anomali proses turun dari rata-rata 4,5 jam menjadi 11 menit ketika sensor nirkabel memantau *product temperature* dengan densitas tinggi. Aspek teknis lain yang membuat WSN sangat relevan adalah lingkungan operasi liofilizer yang ekstrem: suhu produk antara –40°C hingga +40°C, tekanan vakum 0,05–1,0 mbar, dan paparan uap air intermiten — kondisi yang menuntut sensor dengan *drift* rendah dan komunikasi RF yang robust terhadap interferensi metalik ruang vakum.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Perpindahan Panas dan Massa pada Pengeringan Primer

Mekanisme sublimasi es dari matriks beku mengikuti model Pikal yang dikutip secara luas dalam literatur dan dirujuk oleh Meza-Galvan et al. (2026). Laju sublimasi $dm/dt$ pada vial dinyatakan sebagai:

$$\frac{dm}{dt} = \frac{A_p \left(P_{w,i} - P_{w,c}\right)}{R_p}$$

dengan $A_p$ adalah luas penampang sublimasi, $P_{w,i}$ tekanan uap air pada antarmuka sublimasi, $P_{w,c}$ tekanan uap air di ruang (chamber), dan $R_p$ tahanan terhadap aliran uap (resistance of product). Resistansi $R_p$ sendiri dimodelkan sebagai:

$$R_p = R_{p,0} + \frac{A_1 \cdot m}{1 + B_1 \cdot m}$$

di mana $R_{p,0}$ adalah resistansi awal, $A_1$ koefisien yang bergantung pada formulasi, dan $B_1$ parameter empiris. Tekanan uap air dihitung menggunakan persamaan Antoine yang disesuaikan untuk kondisi vakum:

$$\log_{10}(P_w) = a - \frac{b}{T_i + c}$$

dengan $T_i$ suhu antarmuka sublimasi (°C), dan konstanta $a$, $b$, $c$ spesifik untuk air.

### 2.2 Kinetika Degradasi Produk

Stabilitas hayati produk selama proses mengikuti kinetika Arrhenius orde pertama:

$$k = A \cdot e^{-E_a / (R \cdot T)}$$

di mana $k$ adalah laju degradasi, $A$ faktor pra-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R$ konstanta gas universal 8,314 J/(mol·K), dan $T$ suhu absolut (K). Fraksi produk aktif setelah waktu $t$ adalah:

$$C(t) = C_0 \cdot e^{-k \cdot t}$$

Formulasi ini menjadi dasar mengapa sensor suhu real-time dengan akurasi ±0,5°C sangat kritikal untuk mencegah over-temperature product yang meningkatkan $k$ secara eksponensial.

### 2.3 Arsitektur Komunikasi WSN

Topologi WSN untuk liofilizer mengikuti standar IEEE 802.15.4 dengan modifikasi untuk lingkungan vakum. Model konsumsi energi node sensor mengikuti persamaan:

$$E_{total} = E_{sense} + E_{proc} + E_{tx} + E_{rx} + E_{idle}$$

dengan $E_{tx}$ energi transmisi yang tergantung pada jarak $d$ antara node dan gateway menurut path-loss model log-normal shadowing:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

di mana $n$ adalah path-loss exponent (2,0 untuk *line-of-sight* dalam ruang vakum), $d_0$ jarak referensi (1 m), dan $X_\sigma$ variabel acak Gaussian dengan simpangan baku $\sigma$ (umumnya 4–6 dB pada lingkungan ruang liofilizer).

### 2.4 Statistik Proses dan Deteksi Anomali

Implementasi PAT berbasis WSN memerlukan kerangka *Statistical Process Control* (SPC). Batas kendali Shewhart didefinisikan sebagai:

$$UCL = \mu + 3\sigma, \quad LCL = \mu - 3\sigma$$

Untuk deteksi anomali dini pada *primary drying*, digunakan algoritma Multivariate Cumulative Sum (CUSUM):

$$S_t = \max\left(0, S_{t-1} + (x_t - \mu_0 - k)\right)$$

dengan $k$ parameter *allowance* (umumnya $\delta/2$ di mana $\delta$ adalah *shift* minimum yang ingin dideteksi) dan alarm dipicu ketika $S_t > h$ (threshold 4–5σ).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan WSN dalam liofilisasi mengikuti arsitektur berlapis sebagaimana diuraikan dalam Meza-Galvan et al. (2026) dan dilengkapi perspektif komplementer dari Artusio et al. (2026). SOP implementasi mengikuti tahapan berikut:

### 3.1 Diagram Alir Implementasi

```
┌─────────────────────────────────────────────────────────┐
│  Tahap 1: Pra-Kualifikasi (IQ/OQ)                        │
│  • Validasi protokol IEEE 802.15.4 dalam chamber vakum   │
│  • Kalibrasi sensor thermocouple nirkabel (akurasi ±0,3°C)│
│  • Pengujian EMC terhadap EMI dari kompresor             │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 2: Instalasi di Vial Loading                      │
│  • Penempatan node sensor pada posisi sentinel vial      │
│  • Distribusi topologi mesh star-cluster                 │
│  • Aktivasi mode hibernasi suhu rendah (-50°C ready)     │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 3: Real-time Monitoring Loop                      │
│  • Sampling suhu 1 Hz via wireless M-Bus / ZigBee        │
│  • Gateway mengumpulkan data 64–256 vial/node secara     │
│    simultan tanpa kabel menembus dinding chamber         │
│  • Streaming ke historian Pi via OPC-UA                   │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 4: Analisis PAT & Decision Support                │
│  • Dashboard real-time (Python/SciPy)                    │
│  • Auto-trigger endpoint primary drying via PRT          │
│  • Dokumentasi batch electronic (21 CFR Part 11)         │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Arsitektur Sistem

Arsitektur node sensor terdiri atas empat subsistem terintegrasi: (1) sensor MEMS thermocouple atau RTD platinum 1kΩ dengan akurasi ±0,3°C pada rentang –60°C hingga +60°C; (2) mikrokontroler ARM Cortex-M0+ berdaya rendah (konsumsi 3 µA pada mode sleep); (3) transceiver RF 2,4 GHz dengan protokol ZigBee PRO atau WirelessHART; (4) baterai Li-SOCl₂ berkapasitas 2,4 Ah yang memberikan otonomi 18–24 bulan. Gateway ditempatkan di luar *transfer chamber* dengan atenuasi dinding stainless 316L dikompensasi oleh path-loss margin minimal 20 dB.

### 3.3 Prosedur Pengukuran dan Endpoint Detection

Metode *Pressure Rise Test* (PRT) untuk deteksi akhir *primary drying* dimonitor secara nirkabel sebagai berikut:

1. Isolasi chamber dengan menutup *isolation valve* selama 30 detik.
2. Akuisisi data tekanan $\Delta P$ via Pirani gauge yang dibaca oleh node sensor gateway.
3. Penghitungan *drying front temperature* menggunakan regresi kuadrat terkecil:

$$T_{front} = \beta_0 + \beta_1 \cdot \Delta P + \beta_2 \cdot (\Delta P)^2$$

4. Keputusan *endpoint* otomatis ketika $\Delta P < 8 \times 10^{-3}$ mbar/detik dan $T_{front} > 0°C$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Sebuah perusahaan bioteknologi manufaktur vial 10R berisi formulasi protein monoklonal (konsentrasi 50 mg/mL) pada *fill volume* 5 mL, dengan target $T_{product}$ maksimum 28°C selama *primary drying* untuk mencegah agregasi. Liofilizer memiliki kapasitas 1.500 vial dengan 12 unit *shelves*. Sistem thermocouple hard-wired existing mampu memantau hanya 16 vial; WSN akan memperluas cakupan menjadi 96 vial sentinel.

### 4.2 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Tekanan chamber ($P_c$) | 0,10 | mbar |
| Suhu shelf ($T_s$) | 5 | °C |
| Suhu produk target ($T_p$) | ≤ 28 | °C |
| Resistansi vial ($R_v$) | 1,32×10⁻³ | m²·mbar·h/kcal |
| Energi aktivasi ($E_a$) | 92,4 | kJ/mol (protein tipikal) |
| Akurasi sensor WSN | ±0,3 | °C |

### 4.3 Perhitungan Step-by-Step

**Langkah 1 — Menghitung Tekanan U