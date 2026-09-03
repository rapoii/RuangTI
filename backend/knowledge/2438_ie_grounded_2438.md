# 2438 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak: Integrasi Pemantauan IoT dan Formulasi Kuantitatif Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan beku, dan bahan kimia sensitif suhu. Kerusakan suhu sekecil 2–8°C di luar rentang operasional 2–8°C (rentang standar WHO untuk sebagian besar vaksin) selama periode waktu tertentu dapat menurunkan kemanjuran produk, menimbulkan risiko kesehatan masyarakat, dan kerugian ekonomi signifikan. Khurshid & Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan kerangka resiliensi (*resilience framework*) yang secara eksplisit mengkuantifikasi kemampuan sistem rantai dingin untuk menyerap (*absorb*), menyesuaikan diri (*adapt*), dan memulihkan (*recover*) diri dari disrupsi, baik berupa kegagalan mekanis unit pendingin, keterlambatan transportasi, maupun *human error* dalam pencatatan suhu.

Konteks empiris yang sangat relevan dikemukakan oleh Putra, Defit, & Nurcahyo (2024) (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan permasalahan nyata di UPTD Farmasi Dinas Kesehatan Kabupaten Siak, Indonesia. Mereka menemukan bahwa *cold chain box* yang digunakan untuk menyimpan dan mendinginkan vaksin belum dilengkapi dengan alat pemantau suhu *real-time*. Sebagai kompensasi, apoteker melakukan pencatatan suhu secara manual pada *log sheet* setiap 2 jam sekali. Pendekatan manual ini memiliki tiga kelemahan fatal: (i) interval 2 jam menciptakan *blind spot* selama 119 menit di mana degradasi suhu dapat terjadi tanpa terdeteksi; (ii) tidak ada sistem peringatan dini (*early warning*) kepada apoteker ketika suhu naik akibat kerusakan internal (misalnya kompresor) maupun eksternal (misalnya paparan panas lingkungan atau pembukaan pintu yang terlalu lama); dan (iii) *log sheet* manual rentan terhadap kesalahan transkripsi dan tidak memberikan bukti audit yang kuat untuk kepatuhan监管 (*regulatory compliance*).

Integrasi kedua perspektif ini—model resiliensi teoritis dari Khurshid & Siddiqui (2024) dengan bukti empiris permasalahan operasional dari Putra et al. (2024)—menjadi landasan bagi penyusunan modul ini. Urgensi industri tidak hanya bersifat teknis tetapi juga ekonomis dan sosial: menurut estimasi industri farmasi global, kerugian akibat pelanggaran rantai dingin mencapai miliaran USD per tahun, sementara bagi program imunisasi nasional di negara berkembang seperti Indonesia, satu insiden pemalsuan suhu (*temperature excursion*) pada kampanye imunisasi massal dapat membatalkan kemanjuran ribuan dosis dan mengancam kepercayaan publik terhadap program vaksinasi. Dengan demikian, kemampuan untuk memodelkan, memantau, dan meningkatkan resiliensi rantai dingin menjadi kompetensi inti seorang ahli Teknik Industri yang mengelola sistem logistik produk kritis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Bruneau yang Diadopsi

Khurshid & Siddiqui (2024) membangun model resiliensi dengan mengadopsi kerangka Bruneau yang telah dimodifikasi untuk *supply chain*. Resiliensi sistem $R$ didefinisikan sebagai kemampuan untuk mengurangi probabilitas kegagalan, mengurangi konsekuensi kegagalan, dan mengurangi waktu pemulihan. Secara matematis, fungsi kualitas sistem $Q(t)$ yang merepresentasikan tingkat kepatuhan suhu terhadap spesifikasi dinormalisasi pada skala 0–100:

$$Q(t) = 100 \cdot \mathbb{1}_{\{T_{min} \leq T(t) \leq T_{max}\}} \cdot \left(1 - \frac{|T(t) - T_{set}|}{\Delta T_{tol}}\right)^+$$

di mana $T(t)$ adalah suhu aktual pada waktu $t$, $T_{set}$ adalah *setpoint* (umumnya 5°C untuk rentang 2–8°C), $\Delta T_{tol}$ adalah toleransi deviasi maksimum (umumnya 3°C), dan $(\cdot)^+$ menyiratkan nilai dibatasi tidak negatif. Ketika suhu keluar dari rentang operasional, kualitas turun dan akhirnya失效 (*fail*).

### 2.2 Indeks Resiliensi (Resilience Triangle)

Indeks resiliensi dihitung sebagai rasio antara area di bawah kurva kinerja aktual terhadap area ideal:

$$R_{idx} = \frac{\int_{t_0}^{t_0+T} Q(t)\,dt}{100 \cdot T}$$

Untuk kasus sederhana di mana degradasi terjadi secara linier dari $t_0$ hingga $t_1$ (titik kegagalan total) dan pemulihan linier dari $t_1$ hingga $t_2$, maka *resilience loss* adalah:

$$L_R = \int_{t_0}^{t_1} [100 - Q(t)]\,dt + \int_{t_1}^{t_2} [100 - Q(t)]\,dt$$

### 2.3 Keandalan dan Laju Kegagalan

Kompleksitas rantai dingin dimodelkan dengan distribusi kegagalan eksponensial:

$$R(t) = e^{-\lambda t}, \quad \text{MTTF} = \frac{1}{\lambda}, \quad \text{MTTR} = \frac{1}{\mu}$$

di mana $\lambda$ adalah laju kegagalan dan $\mu$ adalah laju perbaikan. Ketersediaan (*availability*) sistem:

$$A = \frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}} = \frac{\mu}{\lambda + \mu}$$

### 2.4 Kinetika Degradasi Arrhenius untuk Produk Vaksin

Degradasi produk biologis mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-E_a / RT}$$

Konsekuensinya, *mean kinetic temperature* (MKT) yang digunakan dalam监管 farmasi:

$$\text{MKT} = \frac{\Delta H / R}{- \ln\left(\sum_{i=1}^{n} \frac{1}{n} e^{-E_a / (R \cdot T_i)}\right)^{-1}}$$

### 2.5 Akurasi Sensor DS18B20

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\sigma = \pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$. Resolusi 9–12 bit yang dapat dikonfigurasi memberikan akurasi pengukuran:

$$\Delta T_{res} = \frac{T_{range}}{2^{n_{bits}}}$$

Untuk resolusi 12 bit pada rentang $-55°C$ hingga $+125°C$: $\Delta T_{res} = 180/4096 \approx 0{,}044°C$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT (Berdasarkan Putra et al., 2024)

```
┌─────────────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────────┐
│ Sensor DS18B20  │───▶│ Mikrokontroler│───▶│ Modul Wireless │───▶│ Dashboard Cloud  │
│ (multi-node 1-Wire)│   │ (ESP32/Arduino)│    │ (WiFi/GSM)     │    │ (Web/Mobile App) │
└─────────────────┘    └──────────────┘    └────────────────┘    └──────────────────┘
         │                      │                     │                      │
         ▼                      ▼                     ▼                      ▼
   Akuisisi Suhu         Pemrosesan Data      Transmisi Real-time      Notifikasi Alert
   (tiap 5-10 detik)     (filter, threshold)   (MQTT/HTTP)            (SMS/Email/Buzzer)
```

### 3.2 SOP Pemantauan Cold Chain Box

1. **Pra-operasional (T-30 menit):** Kalibrasi sensor DS18B20 terhadap termometer referensi bersertifikat; verifikasi *setpoint* pada 5°C ± toleransi.
2. **Inisialisasi:** Catat nomor batch vaksin, jumlah dosis, dan waktu *loading* ke dalam sistem digital; pastikan interval *logging* ≤ 10 detik.
3. **Pemantauan aktif:** Sistem otomatis merekam $T_i$ setiap interval $\Delta t$; jika $T_i > T_{alert} = 7{,}5°C$ atau $T_i < 1{,}5°C$, alarm terpicu dalam $< 30$ detik.
4. **Respons alarm:** Apoteker menerima notifikasi; investigasi dalam 15 menit; dokumentasi *corrective action*.
5. **Audit & pelaporan:** Ekspor data ke format PDF/CSV untuk监管 BPOM dan WHO PQS.

### 3.3 Diagram Alir Logika Resiliensi

```
[START] → [Monitor Q(t)] → {Q(t) ≥ 95?} ─┬─[YES]→ [Log Normal] → [Continue]
                                          │
                                          └─[NO]→ [Trigger Alert] 
                                                  → [Diagnose Disruption]
                                                  → [Activate Backup/Corrective]
                                                  → [Track Recovery Time t_rec]
                                                  → [Compute R_idx & L_R]
                                                  → [Update Reliability Database]
                                                  → [Continue]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Disrupsi Cold Chain Box di UPTD Farmasi

**Parameter Input (realistis berdasarkan Putra et al., 2024):**

| Parameter | Nilai | Satuan |
|---|---|---|
| Kapasitas cold chain box | 50 | liter |
| Jumlah dosis vaksin | 200 | dosis |
| Setpoint suhu $T_{set}$ | 5 | °C |
| Batas atas $T_{max}$ | 8 | °C |
| Batas bawah $T_{min}$ | 2 | °C |
| Toleransi alarm | 7,5 | °C |
| Interval pencatatan manual (lama) | 120 | menit |
| Interval pencatatan IoT (baru) | 0,17 | menit (10 detik) |
| Akurasi sensor $\sigma$ | 0,5 | °C |
| MTTF unit pendingin | 720 | jam |
| MTTR teknisi | 4 | jam |
| Energi aktivasi $E_a$ (vaksin典型) | 83