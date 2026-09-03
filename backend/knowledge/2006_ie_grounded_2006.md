# 2006 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi IoT Monitoring dan Rekayasa Ketahanan Rantai Pasok Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk termolabil—mulai dari vaksin, produk biofarmasi, makanan segar, hingga bahan aktif biologis—yang menuntut kendali suhu presisi sepanjang siklus hulu-hilir. Gangguan sekecil apa pun, seperti kenaikan suhu 2–8°C di atas ambang pada *cold chain box* vaksin, berpotensi menurunkan potensi produk (*loss of potency*) secara irreversible, sehingga memunculkan risiko finansial, klinis, dan reputasi yang bersifat eksponensial terhadap waktu paparan. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan kerangka resiliensi kuantitatif yang mengkuantifikasi kemampuan sistem *cold chain* untuk menyerap, beradaptasi, dan pulih dari gangguan, dengan mempertimbangkan dimensi probabilistik gangguan, waktu pemulihan, dan degradasi kinerja.

Urgensi praktis problematik ini dikonkretkan oleh Putra, Defit, dan Nurcahyo (2024) di Jurnal KomtekInfo (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan kegagalan operasional pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi tiga缺陷 struktural: (1) *cold chain box* sebagai media penyimpanan dan pendingin疫苗 tidak dilengkapi alat pemantauan suhu *real-time*, (2) tidak ada sistem peringatan dini (*early warning*) bagi apoteker ketika suhu naik akibat kerusakan internal atau eksternal, dan (3) pencatatan suhu masih dilakukan secara manual setiap 2 jam pada *log sheet*. Kondisi ini menciptakan *single point of failure* pada level manusia-prosedur yang menurunkan resiliensi sistem secara keseluruhan.

Dari perspektif Teknik Industri, kedua paper tersebut bertemu pada satu titik kritis: bagaimana mengintegrasikan model resiliensi stokastik (Khurshid & Siddiqui, 2024) dengan arsitektur Instrumentasi & Kontrol berbasis IoT sensor DS18B20 (Putra et al., 2024) untuk mentransformasi *cold chain* dari sistem reaktif menjadi sistem prediktif-proaktif. Konteks industri ini semakin relevan mengingat nilai pasar farmasi global yang telah melebihi USD 1,5 triliun dengan loss-rate logistik farmasi akibat *cold chain failure* yang mencapai 15–35% di negara berkembang menurut berbagai laporan WHO dan GAVI. Integrasi ini bukan sekadar peningkatan teknis, melainkan pergeseran paradigma dari *quality by inspection* ke *quality by design*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain (CRC-Resilience Index)

Khurshid dan Siddiqui (2024) mengajukan indeks resiliensi sistem $\mathcal{R}$ sebagai fungsi dari kemampuan absorpsi ($\alpha$), adaptasi ($\beta$), dan pemulihan ($\gamma$) terhadap gangguan termal. Formulasi dasarnya:

$$\mathcal{R} = \alpha \cdot \int_{t_0}^{t_d} (P_0 - P(t)) \, dt + \beta \cdot P_{\min} + \gamma \cdot \int_{t_d}^{t_r} P(t) \, dt$$

di mana $P_0$ adalah kinerja nominal sistem (misalnya 100% integritas termal), $P(t)$ adalah kinerja sesaat selama gangguan, $t_0$ adalah waktu inisiasi gangguan, $t_d$ adalah waktu deteksi gangguan, dan $t_r$ adalah waktu pemulihan penuh. Komponen pertama merepresentasikan *loss area* (degradasi kinerja), komponen kedua merepresentasikan *adaptive capacity* minimum, dan komponen ketiga merepresentasikan *recovery trajectory*.

### 2.2 Model Probabilitas Kegagalan Termal

Untuk produk termolabil, hubungan antara suhu $T(t)$ dan laju degradasi mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-E_a / (R_g \cdot T)}$$

di mana $k(T)$ adalah konstanta laju degradasi, $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi, dan $R_g = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Untuk produk biologi dan疫苗 pada suhu referensi 5°C, degradasi mengikuti Q₁₀ rule:

$$Q_{10} = \left(\frac{k_{T+10}}{k_T}\right)^{10/(T_{new}-T_{ref})}$$

### 2.3 Kapasitas Deteksi IoT Sensor DS18B20

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) memiliki akurasi $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$ dengan resolusi 9–12 bit. Resolusi efektif pada konfigurasi 12-bit:

$$\Delta T = \frac{T_{max} - T_{min}}{2^{12}-1} = \frac{100}{4095} \approx 0{,}0244°C$$

Waktu konversi termal sensor pada resolusi 12-bit adalah $t_{conv} = 750$ ms, yang menjadi *constraint* pada frekuensi sampling maksimum:

$$f_{s,max} = \frac{1}{t_{conv}} = \frac{1}{0{,}750} \approx 1{,}333 \text{ Hz}$$

### 2.4 Availability dan MTBF/MTTR System

Ketersediaan sistem monitoring cold chain mengikuti model klasik reliabilitas:

$$A = \frac{MTBF}{MTBF + MTTR}$$

di mana MTBF (*Mean Time Between Failures*) untuk node IoT DS18B20 dengan topologi 1-Wire dilaporkan berkisar 50.000–100.000 jam, dan MTTR (*Mean Time To Repair*) pada arsitektur modular adalah 0,5–2 jam. Substitusi tipikal:

$$A = \frac{75.000}{75.000 + 1{,}25} \approx 0{,}999983 \text{ (99,9983%)}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Cold Chain Monitoring

Berdasarkan Putra et al. (2024), arsitektur sistem terdiri dari empat lapisan:

1. **Lapisan Sensor (Perception Layer):** Sensor DS18B20 dengan protokol 1-Wire, multipoint capability hingga 127 sensor pada satu bus data.
2. **Lapisan Komunikasi (Network Layer):** Mikrokontroler (Arduino/ESP32) sebagai *data logger*, transmisi via WiFi/GSM ke *cloud server*.
3. **Lapisan Platform (Middleware Layer):** *Dashboard* real-time dengan *threshold alert* pada 2°C dan 8°C.
4. **Lapisan Aplikasi (Application Layer):** *Automated logging* menggantikan pencatatan manual 2-jam-an, notifikasi push pada *smartphone* apoteker.

### 3.2 SOP Implementasi Resiliensi Cold Chain

**Fase 1 – Risk Mapping & Baseline Assessment:**
- Identifikasi titik kritis suhu pada seluruh rantai (dari *cold storage* → distribusi → *last mile*).
- Pengukuran baseline $\mathcal{R}_0$ menggunakan data historis 6–12 bulan.
- Penentuan $P_0$ (kondisi nominal) dan $P_{min}$ (kondisi kritis yang dapat ditoleransi).

**Fase 2 – Sensor Network Deployment:**
- Penempatan sensor DS18B20 pada titik representatif (masuk, keluar, tengah cold chain box).
- Kalibrasi sensor terhadap termometer referensi terkalibrasi (ISO 17025).
- Penetapan alarm threshold: $T_{alarm,low} = 2{,}0°C$, $T_{alarm,high} = 8{,}0°C$.

**Fase 3 – Data Integration & Resiliensi Modeling:**
- Input data historis ke model $\mathcal{R}$ Khurshid-Siddiqui (2024).
- Estimasi parameter $\alpha$, $\beta$, $\gamma$ menggunakan *Maximum Likelihood Estimation* (MLE).
- Simulasi Monte Carlo untuk distribusi $\mathcal{R}$ pada skenario gangguan.

**Fase 4 – Continuous Improvement:**
- *Audit* triwulanan terhadap MTBF sensor dan MTTR sistem.
- *Re-calibration* triwulanan untuk menjaga akurasi $\pm 0{,}5°C$.
- *Root cause analysis* setiap kejadian alarm dengan form 5-Why.

### 3.3 Diagram Alir Logika Alarm System

```
START → Baca T_sensor (DS18B20)
   ↓
T < 2°C ATAU T > 8°C?
   ↓ [YA]                          ↓ [TIDAK]
Trigger ALARM                  Log ke database
   ↓                               ↓
Hitung Δt sejak alarm           Tunda 60 detik
terakhir                            ↓
   ↓                              Kembali START
Notifikasi via WiFi/GSM
   ↓
Apoteker konfirmasi
   ↓
T < 2°C ATAU T > 8°C?
   ↓ [YA]              ↓ [TIDAK]
Eskalasi prosedural   Reset alarm
                          ↓
                       END → START
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: UPTD Farmasi Kabupaten Siak

Mengacu pada studi Putra et al. (2024), asumsikan UPTD mengelola 50 *cold chain box* dengan parameter:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Kapasitas per box | 250 | vial |
| Nilai rata-rata per vial | Rp 250.000 | IDR |
| Suhu operasional target | 2–8 | °C |
| Volume distribusi harian | 10 | box |
| Jumlah apoteker | 5 | orang |
| Frekuensi pencatatan manual lama | 12 | kali/hari (setiap 2 jam) |

**Total nilai aset farmasi harian:**
$$V_{total} = 10 \times 250 \times 250.000 = Rp\ 625.000.000$$

### 4.2 Perhitungan Resiliensi Baseline (Sistem Manual)

Pada sistem manual dengan pencatatan setiap 2 jam, waktu deteksi rata-rata gangguan termal:
$$t_{d,manual} = 60 \text{ menit (rata-rata)}$$

Waktu respons apoteker (berdasarkan observasi lapangan): $t_{r,manual} = 45$ menit.

**Resiliensi baseline** (dengan $P_0 = 1{,}0$, $P_{min} = 0{,}7$, $\alpha = 0{,}4$, $\beta = 0{,}2$, $\gamma = 0{,}4$, asumsi gangguan 120 menit dengan kurva linier):

$$\mathcal{R}_{manual} = 0{,}4 \cdot \int_0^{120} (1 - 0{,}85t/120) dt + 0{,}2 \cdot 0{,}7 + 0{,}4 \cdot \int_{120}^{165} (0{,}7 + 0{,}3(t-120)/45) dt$$

$$\mathcal{R}_{manual} = 0{,}4 \cdot (0{,}85 \cdot 60) + 0{,}14 + 0{,}4 \cdot (0{,}7 \cdot 45 + 0{,}3 \cdot 22{,}5)$$

$$\mathcal{R}_{manual} = 20{,}4 + 0{,}14 + 15{,}3 = 35{,}84 \text{ unit-resiliensi}$$

### 4.3 Perhitungan Resiliensi Sistem IoT (Pasca-Implementasi)

Dengan implementasi sensor DS18B20 dan *real-time alert*:
$$t_{d,IoT} = 0{,}75 \text{ detik (waktu konversi)} + 5 \text{ detik (transmisi)} \approx 6 \text{ detik} = 0{,}1 \text{ menit}$$

$$t_{r,IoT} = 10 \text{ menit (respons otomatis)} + 5 \text{ menit (verifikasi apoteker)} = 15 \text{ menit}$$

$$\mathcal{R}_{IoT} = 0{,}4 \cdot 0{,}1 \cdot 0{,}85 + 0{,}14 + 0{,}4 \cdot (0{,}7 \