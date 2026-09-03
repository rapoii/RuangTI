# 2790 — Model Ketahanan (Resilience) Logistik Cold Chain untuk Produk Mudah Rusak: Integrasi IoT Monitoring dan Formulasi Rekayasa Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rekayasa logistik yang menangani produk termolabil—mulai dari vaksin, produk biologis, makanan segar, hingga bahan farmasi aktif—yang menuntut kendali suhu presisi sepanjang *last-mile*. Kerusakan satu link saja dapat memunculkan kerugian ekonomi besar dan risiko kesehatan masyarakat. Khurshid & Siddiqui (2024) dalam naskah *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa pendekatan konvensional yang berfokus pada *reliability* statis tidak cukup menghadapi dinamika gangguan modern (climate-induced delays, infrastruktur listrik intermiten, pandemi, dan *bottleneck* bea cukai). Mereka mengajukan kerangka *resilience*—yang didefinisikan sebagai kapasitas sistem untuk menyerap (*absorb*), beradaptasi (*adapt*), dan pulih (*recover*)—sebagai paradigma baru bagi rekayasa cold chain.

Di konteks nasional Indonesia, urgensi ini bahkan lebih tajam. Putra, Defit, & Nurcahyo (2024) mendokumentasikan kasus di UPTD Farmasi Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang memperlihatkan dua *failure mode* berulang pada *cold chain box* vaksin: (i) tidak adanya sistem peringatan *real-time* ketika suhu menyimpang akibat kerusakan internal atau eksternal, dan (ii) pencatatan suhu manual setiap dua jam pada *log sheet*—praktik yang rentan terhadap human error, keterlambatan deteksi, dan *single point of failure* dokumentasi. Kedua paper ini, meskipun berbeda pendekatan (model analitik vs. implementasi IoT), bertemu pada satu kesimpulan operasional: cold chain memerlukan arsitektur yang *resilient* dan *observable*.

Secara ekonomi, World Health Organization (WHO)估算 bahwa hingga 50% vaksin global terbuang akibat *cold chain failure*, dengan estimasi kerugian >US$ 31,4 miliar per tahun. Dalam konteks rekayasa industri, hal ini diterjemahkan menjadi *Key Performance Indicators* (KPI): *Mean Time To Detect* (MTTD) anomali suhu, *Recovery Time Objective* (RTO), dan *spoilage rate*. Modul 2790 ini akan menyintesiskan kedua literatur menjadi kerangka rekayasa yang menggabungkan model kuantitatif *resilience* dengan implementasi IoT monitoring.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Ketahanan (Resilience Index)

Khurshid & Siddiqui (2024) membangun ukuran *resilience* sebagai fungsi tiga kapasitas sistem. Untuk cold chain, kita formalkan indeks kualitas termal sesaat:

$$Q(t) = 1 - \frac{|T(t) - T_{set}|}{T_{tol}} \quad \text{untuk} \quad |T(t)-T_{set}| \le T_{tol}$$

dengan $T(t)$ suhu aktual, $T_{set}$ titik set-point (misal 5°C untuk vaksin), dan $T_{tol}$ toleransi (umumnya ±3°C). Saat $Q(t) < 0$, produk memasuki *exposure zone*. Indeks *resilience* agregat didefinisikan sebagai integral area di bawah kurva kualitas terhadap window observasi:

$$R = \frac{1}{\tau}\int_{t_0}^{t_0+\tau} Q(t)\,dt \in [0,1]$$

Nilai $R \ge 0{,}95$ merupakan ambang mutu farmasi (WHO PQS E006).

### 2.2 Model Degradasi Termal Arrhenius

Laju degradasi produk termolabel mengikuti persamaan Arrhenius yang dimodifikasi untuk *cold chain*:

$$k(T) = A \exp\!\left(-\frac{E_a}{R_g T}\right)$$

dengan $A$ faktor pre-eksponensial, $E_a$ energi aktivasi (J/mol), dan $R_g$ konstanta gas (8,314 J/mol·K). Untuk vaksin typical $E_a \approx 60{-}90\,\text{kJ/mol}$, artinya setiap kenaikan 1°C di atas 8°C menggandakan laju degradasi poten. Total degradasi kumulatif pada trayektori suhu $T(t)$:

$$D = \int_{t_0}^{t_1} k[T(t)]\,dt$$

### 2.3 Model Termal Cold Chain Box

Berdasarkan hukum Fourier dan analogi RC termal, suhu internal cold box pasif mengikuti:

$$C_{th}\frac{dT_{in}}{dt} = \frac{T_{out}(t)-T_{in}(t)}{R_{th}} + \dot{Q}_{load} + \dot{Q}_{phase}$$

dengan $C_{th}$ kapasitas termal efektif (J/K), $R_{th}$ resistansi termal isolasi (K/W), $\dot{Q}_{load}$ beban termal (pembukaan pintu, infiltrasi), dan $\dot{Q}_{phase}$ panas laten dari phase-change material (PCM).

### 2.4 Model Keandalan Sensor IoT (DS18B20)

Putra dkk. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0{,}5^\circ$C pada rentang $-10^\circ$C sampai $+85^\circ$C, resolusi 9–12 bit, dan protokol 1-Wire. Keandalan link akuisisi data dimodelkan sebagai seri:

$$R_{sys}(t) = R_{sensor}(t) \cdot R_{link}(t) \cdot R_{storage}(t)$$

Untuk rantai sensor–gateway–cloud dengan laju kegagalan konstan $\lambda_i$, availability sistem:

$$A_{sys} = \prod_{i=1}^{n} \frac{\mu_i}{\lambda_i + \mu_i} = \prod_{i} \frac{MTBF_i}{MTBF_i + MTTR_i}$$

### 2.5 Frekuensi Sampling & Deteksi Anomali

Berdasarkan kriteria Nyquist untuk deteksi *excursion* termal berdurasi minimum $\Delta t_{min}$:

$$f_s \ge \frac{2}{\Delta t_{min}}$$

Untuk deteksi excursion 60 detik, dibutuhkan $f_s \ge 1/30$ Hz ≈ 0,033 Hz. Implementasi Putra dkk. (2024) menggunakan interval logging 2 jam—jauh di bawah standar deteksi dini—yang merupakan salah satu *gap* yang akan dijembatani oleh modul ini.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Cold Chain Resilient

Sintesis dari kedua literatur menghasilkan arsitektur berlapis:

1. **Layer Sensing:** Sensor DS18B20 multi-titik (minimal 3 titik: inlet, center, outlet), redundant, kalibrasi tahunan.
2. **Layer Edge:** Mikrokontroler (ESP32/Arduino) dengan RTC, buffer lokal 72 jam.
3. **Layer Communication:** MQTT/HTTP over WiFi/LoRa dengan fallback SMS-GSM.
4. **Layer Analytics:** Cloud pipeline untuk monitoring $Q(t)$, $D$, dan prediksi $T(t+\Delta t)$ menggunakan model *state-space* atau LSTM ringan.
5. **Layer Response:** Alert bertingkat (SMS → Telpon → Dispatch teknisi) sesuai RTO yang ditetapkan.

### 3.2 SOP Pemantauan Cold Chain Vaksin

Berdasarkan WHO PQS E006 dan adaptasi konteks Putra dkk. (2024):

| Parameter | Standar | Tindakan Korektif |
|---|---|---|
| Suhu | $2^\circ$C $\le T \le 8^\circ$C | Alarm jika $T>8^\circ$C selama $>15$ menit |
| MTTD target | $\le 5$ menit | *Real-time alert* via dashboard & SMS |
| Frekuensi logging | $\ge 1$/menit (digital) + 2/jam (manual) | *Backup* log otomatis ke cloud |
| Recovery time | $\le 30$ menit dari deteksi | Protokol *quarantine* batch |

### 3.3 Diagram Alir Logika Pemantauan (Notasi Ringkas)

```
[Sensor Baca T(t)] → [Filter Moving Avg] → [Hitung Q(t), D]
        ↓                                        ↓
[Simpan ke Cloud]                       [Q(t) < 0 ?]
                                              ↓ Ya
                              [Trigger Alarm + SMS Apoteker]
                                              ↓
                              [Reset & Log Insiden]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi Vaksin COVID-19 dari Dinkes Siak ke 12 Puskesmas

**Parameter input (industri riil):**

- Volume cold box: 12 L, berisi 200 vial vaksin (masing-masing 5 mL)
- Set-point $T_{set} = 5^\circ$C, toleransi $T_{tol} = 3^\circ$C → rentang aman $2$–$8^\circ$C
- $E_a = 80\,\text{kJ/mol}$, $A = 10^{13}\,\text{h}^{-1}$ (vaksin mRNA tipikal)
- $R_{th} = 1{,}2\,\text{K/W}$ (PU foam 30 mm)
- $C_{th} = 5{,}0\,\text{kJ/K}$
- Durasi transit target $\tau = 8$ jam
- Suhu ambient $T_{out} = 32^\circ$C (khas Sumatera)

### 4.2 Perhitungan Degradasi pada Dua Skenario

**Skenario A: Cold chain ideal, $T(t) = 5^\circ$C konstan.**

$$k(5^\circ\text{C}) = 10^{13}\exp\!\left(-\frac{80.000}{8{,}314 \times 278{,}15}\right) \approx 3{,}2 \times 10^{-2}\,\text{h}^{-1}$$

Degradasi total 8 jam: $D_A = 3{,}2 \times 10^{-2} \times 8 = 0{,}256$ (26% potensi hilang) — ini baseline bahkan tanpa excursion.

**Skenario B: Excursion 2 jam pada $T = 15^\circ$C (kerusakan cooler di tengah perjalanan).**

$$k(15^\circ\text{C}) = 10^{13}\exp\!\left(-\frac{80.000}{8{,}314 \times 288{,}15}\right) \approx 9{,}8 \times 10^{-2}\,\text{h}^{-1}$$

Degradasi total: 6 jam pada 5°C + 2 jam pada 15°C:

$$D_B = (3{,}2 \times 10^{-2})(6) + (9{,}8 \times 10^{-2})(2) = 0{,}192 + 0{,}196 = 0{,}388$$

Artinya satu excursion 2 jam **meningkatkan degradasi kumulatif sebesar 51,6%** dibanding baseline—efek non-linear yang hanya bisa did