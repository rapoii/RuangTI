# 2566 — Model Resilensi untuk Rantai Dingin (Cold Chain) Produk Mudah Rusak: Integrasi Pemantauan Suhu Real-Time IoT dan Kerangka Pemulihan Gangguan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari logistik farmasi, vaksin, dan produk mudah rusak (*perishable products*) yang menuntut kendali suhu presisi sepanjang rantai pasok. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa gangguan pada rantai dingin tidak hanya menurunkan kualitas produk, tetapi juga mengancam keselamatan pasien dan ketahanan rantai pasok kesehatan masyarakat. Dalam konteks Indonesia, Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan permasalahan nyata pada Unit Pelaksana Teknis Daerah (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana *cold chain box* yang menyimpan vaksin tidak dilengkapi alat pemantau suhu *real-time*, sementara pencatatan suhu masih dilakukan secara manual setiap 2 (dua) jam oleh apoteker pada *log sheet*.

Kondisi ini menciptakan tiga masalah struktural: (1) **blind spot temporal** karena suhu hanya diukur dua jam sekali sehingga kejadian *excursion* suhu (penyimpangan di luar ambang batas 2–8°C untuk vaksin) di antara interval pencatatan tidak terdokumentasi; (2) **risiko degradasi termal** ketika suhu naik akibat kerusakan internal (kompresor, isolator) maupun eksternal (pemadaman listrik, paparan matahari, pembukaan pintu berulang); dan (3) **beban administratif** yang mengalihkan apoteker dari tugas inti klinis ke tugas pencatatan rutin. Secara ekonomi, Organisasi Kesehatan Dunia (WHO) melaporkan bahwa lebih dari 50% vaksin terbuang secara global karena kegagalan rantai dingin, yang berarti kerugian miliaran dolar per tahun (Putra et al., 2024). Kerangka resilensi yang diajukan oleh Khurshid dan Siddiqui (2024) berupaya menjawab tantangan ini dengan memodelkan kemampuan sistem untuk menahan (*absorb*), beradaptasi (*adapt*), dan pulih (*recover*) dari gangguan.

Permasalahan industri ini semakin relevan karena: (a) cakupan program imunisasi nasional Indonesia yang menjangkau lebih dari 70.000 puskesmas; (b) meningkatnya distribusi produk biofarmasi dan makanan fungsional yang sensitif suhu; (c) kerentanan infrastruktur listrik di daerah 3T (Terdepan, Terluar, Tertinggal); dan (d) belum adanya standar integrasi antara *Internet of Things* (IoT) dengan model analitis resiliensi kuantitatif. Dokumen modul ini menyintesiskan kedua literatur untuk membangun kerangka kerja rekayasa sistem yang utuh — dari sensor hingga keputusan manajerial.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Resilensi Cold Chain

Khurshid dan Siddiqui (2024) membangun model resilensi berdasarkan tiga fungsi utama: kemampuan menyerap (*absorptive capacity*), kemampuan beradaptasi (*adaptive capacity*), dan kemampuan memulihkan (*restorative capacity*). Indeks resilensi total dapat diformulasikan sebagai:

$$R_{total} = \alpha \cdot R_{abs} + \beta \cdot R_{adp} + \gamma \cdot R_{rec}$$

dengan $\alpha + \beta + \gamma = 1$ dan $\alpha, \beta, \gamma \geq 0$. Masing-masing sub-indeks didefinisikan sebagai:

$$R_{abs} = 1 - \frac{\int_{t_0}^{t_1} |T(t) - T_{set}| \, dt}{(t_1 - t_0) \cdot \Delta T_{max}}$$

$$R_{adp} = \frac{N_{protocols\_activated}}{N_{protocols\_total}}$$

$$R_{rec} = \frac{T_{target} - T_{actual}(t_r)}{T_{target} - T_{disrupted}} \quad ; \quad 0 \leq t_r \leq TTR$$

di mana $T(t)$ adalah suhu aktual, $T_{set}$ adalah suhu acuan (misal 5°C), $\Delta T_{max}$ adalah deviasi maksimum yang diizinkan (umumnya 3°C untuk vaksin), $TTR$ adalah *Time-To-Recovery*.

### 2.2. Kinetika Degradasi Produk

Untuk produk biologi dan vaksin, degradasi mengikuti kinetika Arrhenius yang dimodifikasi. Kerusakan termal kumulatif dapat dihitung dengan *Shelf Life Decision Rule*:

$$F = \int_{0}^{t} 10^{\frac{T_{ref} - T(t)}{z}} \, dt$$

dengan $T_{ref}$ adalah suhu referensi (umumnya 5°C), $z$ adalah kenaikan suhu yang melipatgandakan laju reaksi (untuk vaksin tipikal $z \approx 5$–$7$°C), dan $F$ adalah faktor degradasi. Produk dianggap失效 jika $F \geq F_{fail}$.

### 2.3. Model Sensor DS18B20

Putra et al. (2024) menggunakan sensor DS18B20 dengan karakteristik: akurasi $\pm 0{,}5$°C pada rentang $-10$°C hingga $+85$°C, resolusi 9–12 bit (setara $0{,}0625$°C pada resolusi 12-bit), dan waktu konversi maksimum 750 ms. Resolusi suhu dirumuskan:

$$R_{temp} = \frac{T_{max} - T_{min}}{2^n - 1}$$

dengan $n$ adalah jumlah bit resolusi. Pada $n = 12$, $R_{temp} = 0{,}0625$°C, memenuhi presisi yang dibutuhkan untuk memantau rentang 2–8°C.

### 2.4. Metrik Ketersediaan Sistem (*System Availability*)

Ketersediaan sistem monitoring dihitung sebagai:

$$A = \frac{MTBF}{MTBF + MTTR}$$

dengan $MTBF$ (*Mean Time Between Failures*) dan $MTTR$ (*Mean Time To Repair*). Untuk sistem IoT yang dirancang Putra et al. (2024) dengan sensor ganda dan *gateway* redundan, target ketersediaan adalah $A \geq 0{,}999$ (downtime < 8,76 jam/tahun).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Pemantauan IoT

Berdasarkan Putra et al. (2024), arsitektur sistem monitoring *cold chain box* vaksin terdiri atas empat lapisan:

1. **Lapisan Persepsi (*Perception Layer*):** Sensor DS18B20 (topologi *1-Wire* atau多点 *multidrop*), mikrokontroler ESP32/Arduino, modul RTC DS3231 untuk penandaan waktu.
2. **Lapisan Jaringan (*Network Layer*):** Protokol MQTT (*Message Queuing Telemetry Transport*) melalui Wi-Fi/GSM, dengan *payload* ≤ 200 byte per transmisi.
3. **Lapisan Pemrosesan (*Processing Layer*):** Platform IoT (Blynk, ThingsBoard, atau *cloud* privat) untuk visualisasi *dashboard*.
4. **Lapisan Aplikasi (*Application Layer*):** Notifikasi *push* dan SMS ke apoteker saat $T > 8$°C atau $T < 2$°C.

Diagram alir logika pemantauan dirancang sebagai berikut:

```
[Inisialisasi Sensor DS18B20] → [Baca Suhu T(t)]
        ↓
[Validasi: |T - T_prev| < ΔT_threshold?]
   ├── Tidak → [Tandai sebagai outlier, gunakan median filter]
   └── Ya → [Lanjut]
        ↓
[Hitung F (Faktor Degradasi)]
        ↓
[Apakah T ∈ [2°C, 8°C]?]
   ├── Tidak → [Aktifkan alarm & logging]
   └── Ya → [Logging normal]
        ↓
[Kirim ke Cloud via MQTT setiap Δt = 60 detik]
        ↓
[Hitung R_abs, R_total secara real-time]
```

### 3.2. SOP Penanganan Gangguan (Disruption Response)

1. **Deteksi Otomatis:** Sistem mendeteksi $T > 8$°C selama $> 5$ menit dan memicu alarm level 1.
2. **Verifikasi:** Apoteker melakukan inspeksi fisik dalam 10 menit.
3. **Aktivasi Protokol Adaptif:** Pemindahan sementara ke *cooler box* berisi *ice pack* terkondisi (4°C ± 1°C).
4. **Investigasi Akar Masalah (Root Cause Analysis):** Pemeriksaan kompresor, segel pintu, sumber listrik.
5. **Pelaporan & Pembelajaran:** Insiden dicatat dalam sistem, dan parameter $\alpha, \beta, \gamma$ diperbarui untuk meningkatkan $R_{total}$ siklus berikutnya.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario: Pemadaman Listrik 4 Jam pada Cold Chain Box UPTD Siak

**Parameter input (berdasarkan Putra et al., 2024 dan standar WHO PQS E001):**

| Parameter | Nilai |
|-----------|-------|
| $T_{set}$ | 5°C |
| $\Delta T_{max}$ | 3°C |
| Kapasitas box | 50 L |
| Massa ice pack awal | 8 kg pada $-18$°C |
| $z$ (vaksin DPT) | 6,5°C |
| Durasi gangguan $t_d$ | 4 jam |
| Ambang alarm | 8°C |

**Langkah 1: Profil suhu saat gangguan**

Menggunakan model termal lumped capacitance dengan kehilangan kalor:

$$T(t) = T_{amb} - (T_{amb} - T_0) \cdot e^{-t/\tau}$$

dengan $T_{amb} = 28$°C (suhu ruang Siak), $T_0 = 5$°C, dan konstanta waktu termal $\tau = 6$ jam untuk *cold chain box* berisolasi baik.

Pada $t = 4$ jam:

$$T(4) = 28 - (28 - 5) \cdot e^{-4/6} = 28 - 23 \cdot e^{-0{,}667} = 28 - 23 \cdot 0{,}513 = 28 - 11{,}80 = 16{,}20°C$$

Karena $T(4) = 16{,}20°C > 8°C$, alarm terpicu.

**Langkah 2: Perhitungan Faktor Degradasi F**

$$F = \int_{0}^{4} 10^{\frac{5 - T(t)}{6{,}5}} \, dt$$

Karena $T(t)$ bervariasi dari 5°C ke 16,20°C, kita lakukan integrasi numerik diskret dengan $\Delta t = 0{,}5$ jam:

| $t$ (jam) | $T(t)$ (°C) | $10^{(5-T)/6,5}$ |
|---|---|---|
| 0,0 | 5,00 | 1,000 |
| 0,5 | 6,59 | 0,797 |
| 1,0 | 8,12 | 0,640 |
| 1,5 | 9,60 | 0,517 |
| 2,0 | 11,02 | 0,422 |
| 2,5 | 12,40 | 0,346 |
| 3,0 | 13,72 | 0,286 |
| 3,5 | 14,99 | 0,239 |
| 4,0 | 16,20 | 0,200 |

Rata-rata tertimbang $\overline{F_{rate}} = 0{,}494$/jam, sehingga $F \approx 0{,}494 \times 4 = 1{,}98$.

Nilai $F_{fail}$ untuk vaksin DPT umumnya $F_{fail} \approx 5$–$10$ (tergantung produsen). Pada kasus ini, $F = 1{,}98$ belum melampaui batas失效, namun akumulasi pada gangguan berulang akan mendekatinya — menegaskan perlunya sistem peringatan dini.

**Langkah 3: Perhitungan Indeks Resilensi**

Misalkan protokol adaptif diaktifkan pada $t = 2$ jam (saat alarm pertama, $T \approx 11°C$), dengan $t_r = 1$ jam