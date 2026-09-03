# 2332 — Jaringan Sensor Nirkabel (WSN) untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Proses Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization — Integrasi Sensor Nirkabel pada Proses Freeze-Drying Farmasi dalam Kerangka PAT/QbD
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan struktural yang semakin kompleks dalam produksi sediaan steril, khususnya produk biologis, antibodi monoklonal (mAb), vaksin mRNA, dan protein terapeutik yang memerlukan stabilitas termal jangka panjang. Liofilisasi (*freeze-drying*) tetap menjadi metode dehidrasi paling dominan untuk produk-produk tersebut karena mampu mempertahankan integritas molekuler tanpa degradasi termal yang signifikan. Meza‐Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4) menekankan bahwa lebih dari **50% produk biofarmasi parenteral** yang disetujui FDA antara tahun 2018–2024 memerlukan proses liofilisasi dalam rantai produksinya, dengan estimasi nilai pasar global mencapai **USD 8,2 miliar pada 2025** dan Compound Annual Growth Rate (CAGR) sebesar **9,4%**.

Urgensi teknis muncul dari karakteristik inheren proses *batch* liofilisasi konvensional: setiap *batch* dapat berlangsung 24–96 jam dengan parameter kritis seperti tekanan ruang (< 30 Pa), suhu rak ($-40°C$ hingga $+40°C$), dan laju sublimasi yang bervariasi secara spasial antar vial. Ketidakseragaman ini—yang oleh Pikal dkk. dikuantifikasi sebagai gradien suhu mencapai $\Delta T_{vial} \approx 2-5°C$—mengakibatkankarena *Critical Quality Attributes* (CQA) seperti kadar air residu, aktivitas biologis, dan waktu rekonstitusi menunjukkan variabilitas batch-to-batch yang sulit dikendalikan dengan instrumentasi *hard-wired* tradisional. Keterbatasan thermocouple kawat pada metode *temperature remote sensing* (TRS) konvensional hanya memungkinkan pengukuran 3–5 vial dari total 10.000–40.000 vial dalam satu *batch*, sehingga memberikan *coverage* statistik kurang dari 0,1%.

Solusi yang diusung oleh Meza‐Galvan dkk. (2026, ch. 4) adalah **Wireless Sensor Networks (WSN)** yang menerapkan thermocouple nirkabel miniaturized (*smart vial* dengan transceiver RFID) atau sensor MEMS berbasis protokol IEEE 802.15.4/ZigBee untuk memantau $T_b$ (suhu vial bawah), $T_p$ (suhu produk), kelembapan relatif gas ruang, dan tekanan uap air secara *real-time*. Pendekatan ini selaras dengan inisiatif FDA *Pharmaceutical Quality by Design (QbD)* dan kerangka ICH Q8(R2), Q9, Q10, serta Q13 yang ditegaskan oleh Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) sebagai landasan PAT (*Process Analytical Technology*) untuk manufaktur kontinu dan semi-kontinu. Integrasi WSN memungkinkan peningkatan jumlah titik pengukuran 100–1000 kali lipat, mendukung algoritma *Model Predictive Control* (MPC) berbasis data *big-data* dan *machine learning* untuk optimasi proses sublimasi primer dan desorpsi sekunder.

Implikasi ekonominya substansial: pengurangan satu *batch* gagal pada produk mAb bernilai **USD 500.000–2.000.000** setara dengan capital recovery yang signifikan. Dengan adopsi WSN-PAT, yield dapat ditingkatkan dari rerata industri **78%** menjadi **>92%**, dengan *cycle time* berkurang 12–18% melalui eliminasi *over-drying* konservatif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Transfer Panas Vial dalam Liofilisasi

Model transfer panas dari rak ke vial produk mengikuti formulasi Pikal-Milton yang dirujuk dalam Meza‐Galvan dkk. (2026, ch. 4). Total fluks panas $Q_{total}$ yang diterima vial merupakan kontribusi tiga mekanisme:

$$Q_{total} = Q_{gas} + Q_{rad} + Q_{cond}$$

dengan bentuk eksplisit:

$$Q_{total} = A_v \, h_c (T_g - T_b) + A_v \, \sigma \, \varepsilon \, (T_r^4 - T_b^4) + A_v \, K_v (T_s - T_b)$$

di mana $A_v$ adalah luas penampang vial, $h_c$ koefisien konveksi gas (tipikal $5-15 \text{ W/m}^2\text{K}$ pada 10–100 Pa), $\sigma$ konstanta Stefan-Boltzmann, $\varepsilon$ emisivitas permukaan, $K_v$ konduktansi kontak vial-rak (tipikal $1,8-3,2 \text{ W/m}^2\text{K}$), dan $T_g, T_r, T_s, T_b$ masing-masing suhu gas, rak, dinding stopper, dan dasar vial.

### 2.2 Persamaan Laju Sublimasi

Laju sublimasi $\dot{m}$ es dari front sublimasi mengikuti hukum Darcy untuk aliran uap air melalui *dried cake* berpori:

$$\dot{m} = \frac{A_p \, (P_{w,i}(T_b) - P_{w,c})}{R_p + R_s}$$

dengan $A_p$ luas sublimasi produk, $P_{w,i}$ tekanan uap air jenuh pada interface es (fungsi Arrhenius-Antoine dari $T_b$), $P_{w,c}$ tekanan uap air parsial di ruang, $R_p$ resistansi *dried cake*, dan $R_s$ resistansi stopper. Resistansi cake meningkat sepanjang proses primer sesuai model Pikal:

$$R_p(t) = R_{p,0} + \frac{A_0 + B_0 \, L_0}{1 + C_0 \, L_0}$$

di mana $L_0$ adalah ketebalan lapisan kering yang tumbuh seiring waktu dan parameter $R_{p,0}, A_0, B_0, C_0$ diperoleh dari *fitting* eksperimental (tipikal $R_{p,0} \approx 0,3 \text{ cm}^2 \cdot \text{Torr} \cdot \text{h/g}$, $A_0 \approx 3,1$, $B_0 \approx 0,011$, $C_0 \approx 0,027$).

### 2.3 Kinetika Degradasi Produk (Arrhenius)

Stabilitas hayati produk selama *primary drying* dimodelkan sebagai degradasi orde-1:

$$\frac{dC}{dt} = -k(T_p) \cdot C$$

dengan konstanta laju mengikuti persamaan Arrhenius:

$$k(T_p) = A \, \exp\left(-\frac{E_a}{R \, T_p}\right)$$

Untuk protein terapeutik tipikal, $E_a \approx 80-120 \text{ kJ/mol}$ dan $\ln A \approx 25-35$. Parameter ini menjadi dasar batas operasional $T_p < T_g'$ (suhu *glass transition*) untuk menghindari *collapse* dan $T_p < T_{eu}$ (*eutectic*) untuk mencegah *melt-back*.

### 2.4 Model Energi Node Sensor Nirkabel (WSN)

Dalam arsitektur ZigBee/IEEE 802.15.4 yang digunakan *smart vial*, konsumsi energi tiap node mengikuti model *first-order radio* Heinzelman:

$$E_{TX}(k, d) = E_{elec} \cdot k + \varepsilon_{amp} \cdot k \cdot d^n$$

$$E_{RX}(k) = E_{elec} \cdot k$$

dengan $k$ ukuran paket (bit), $d$ jarak transmisi (m), $n$ eksponen path-loss (2 untuk *free-space*, 3,5 untuk lingkungan industri dengan multipath), $E_{elec} = 50 \text{ nJ/bit}$, dan $\varepsilon_{amp} = 100 \text{ pJ/bit/m}^2$. Batas energi baterai Lithium-thionyl chloride (Li-SOCl₂) tipikal 2,4 Ah @ 3,6 V memungkinkan operasi node selama >5 tahun pada duty cycle 1%.

### 2.5 Throughput dan Latency Jaringan

Throughput agregat jaringan untuk $N$ node pada topologi *star* dengan *coordinator* tunggal:

$$\Theta_{net} = \frac{N \cdot f_{sample} \cdot L_{payload}}{T_{frame}}$$

dengan $f_{sample}$ frekuensi sampling (tipikal 0,1–1 Hz untuk sublimasi primer), $L_{payload}$ panjang payload (32–64 byte), dan $T_{frame}$ durasi superframe (250 ms pada ZigBee PRO). Kapasitas ini memungkinkan 250 vial/node aktif per *coordinator*, sehingga satu *lyophilizer* berkapasitas 40.000 vial memerlukan **160 koordinator** dalam topologi *cluster-tree*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-PAT

Implementasi mengikuti arsitektur empat-lapis yang didokumentasikan oleh Meza‐Galvan dkk. (2026, ch. 4):

**Layer 1 – Sensor Fisik:** *Thermocouple* Tipe-T miniaturized (akurasi $\pm 0,3°C$), sensor kapasitif RH (0–100% RH, akurasi $\pm 2%$), sensor tekanan MEMS piezoresistif (0,1–1000 Pa), dan *Pirani* gauge untuk cross-validation.

**Layer 2 – Node Nirkabel:** Modul transceiver CC2652 (Texas Instruments) dengan mikrokontroler ARM Cortex-M4, baterai Li-SOCl₂ 2,4 Ah, dan enkapsulasi IP68 untuk sterilisasi *gamma* pra-pemuatan.

**Layer 3 – Gateway & Jaringan Mesh:** *Coordinator* berbasis Raspberry Pi 4B atau industrial gateway Advantech UNO-2484G dengan router ZigBee PRO dan protokol MQTT (ISO/IEC 20922) untuk transmisi ke server.

**Layer 4 – Platform Data Analytics:** *Time-series database* (InfluxDB), dashboard Grafana, dan modul *machine learning* (Python scikit-learn/PyTorch) untuk deteksi anomali berbasis *autoencoder LSTM*.

### 3.2 SOP Pemasangan dan Validasi

1. **Pra-Kualifikasi (IQ/OQ):** Kalibrasi tiap node sensor pada rentang $-50°C$ hingga $+60°C$ terhadap standar NIST-traceable RTD dengan ketidakpastian $\leq 0,1°C$.
2. **Pemetaan Suhu Ruang (*Thermal Mapping*):** Penempatan node sensor pada posisi grid 5×5 (25 titik) selama *empty chamber* run untuk verifikasi distribusi $T_r$ dan identifikasi *hot/cold spot*.
3. **Pemuatan Vial:** Vial berisi produk dengan sensor ditanam pada subset representatif (1–2% vial) sesuai prinsip ASTM E2503-20 untuk PAT.
4. **Akuisisi & Monitoring:** Sampling rate 0,5 Hz untuk $T_b, T_p$ dan 0,1 Hz untuk $P_c, RH$. Data di-*stream* ke historian (Werum PAS-X, Siemens SIPAT).
5. **Closed-Loop Control:** Algoritma MPC meng-update $T_r$ setiap 60 detik berdasarkan deviasi $T_p$ terhadap *setpoint*, dengan constraints $T_p \leq T_g' - 3°C$.
6. **Audit & Review:** Pembuatan *batch electronic record* sesuai 21 CFR Part 11 dengan *audit log* immutable berbasis blockchain (opsional untuk integritas data tertinggi).

### 3.3 Diagram Alir Logika Pengendalian

```
[START] → Load Recipe (T_sh
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
