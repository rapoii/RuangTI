# 1670 — Model Ketahanan (Resilience) Cold Chain Logistics untuk Produk Mudah Rusak dan Sistem Pemantauan Suhu IoT pada Rantai Pasok Vaksin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dari rantai pasok produk yang sensitif terhadap suhu (temperature-sensitive products/TSPs), mencakup vaksin, produk biofarmasi, produk darah, makanan laut, produk susu segar, dan bahan kimia tertentu. Berdasarkan Khurshid & Siddiqui (2024) dalam DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599), rantai dingin menghadapi tantangan ganda: degradasi kualitas intrinsik yang bersifat *time-temperature dependent* (TTD) dan paparan terhadap *disruption events* seperti pemadaman listrik, kegagalan refrigerasi, kesalahan prosedur penanganan, serta延误 pada simpul distribusi. WHO Technical Report Series No. 961 (2006) dan PQS (Performance, Quality and Safety) specification E001 mengevaluasi bahwa setiap deviasi suhu di luar rentang 2–8 °C pada rantai dingin vaksin berpotensi menurunkan potensi antigen hingga 30–80 % per jam tergantung jenis antigen. Hal ini menjadi landasan urgensi membangun model *resilience* yang tidak hanya bersifat preventif (robustness), tetapi juga adaptif-reaktif (rapidity, resourcefulness).

Secara makro-ekonomi, Bank Dunia (2019) memperkirakan kerugian global akibat *post-harvest losses* dan kerusakan cold chain produk makanan mencapai USD 310 miliar per tahun, sementara sektor farmasi mencatat write-off vaksin senilai lebih dari USD 2,5 miliar per tahun akibat *cold chain breaks*. Di Indonesia, konteks ini bahkan lebih akut. Putra, Defit, & Nurcahyo (2024) dalam DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589) mendokumentasikan secara empiris bahwa UPTD Farmasi Dinas Kesehatan Kabupaten Siak—salah satu simpul distribusi vaksin daerah—masih mengandalkan *cold chain box* konvensional tanpa sistem pemantauan suhu *real-time*, dengan pencatatan suhu manual setiap 2 jam melalui *log sheet* yang diisi apoteker. Pola ini rentan terhadap tiga jenis risiko: (i) *detection lag* ketika suhu berubah drastis di antara dua titik observasi, (ii) *human error* dalam pembacaan dan penulisan, dan (iii) tidak adanya *alert mechanism* otomatis ketika terjadi kenaikan suhu yang diinduksi kerusakan internal kompresor maupun eksternal seperti paparan matahari langsung pada saat *last-mile delivery*.

Tujuan utama modul ini adalah menyintesiskan model *resilience* cold chain dari Khurshid & Siddiqui (2024) dengan arsitektur *monitoring* berbasis IoT sensor DS18B20 yang diajukan Putra et al. (2024), untuk menghasilkan kerangka rekayasa industri yang terukur dan terimplementasi pada fasilitas manufaktur serta distribusi farmasi di Indonesia.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka 4R Resilience (Bruneau-Reinhorn-Secombe)

Model *resilience* cold chain yang diajukan oleh Khurshid & Siddiqui (2024) mengikuti formulasi klasik Bruneau dkk. (2003) yang mendefinisikan *resilience* sebagai kemampuan sistem untuk (i) mengurangi probabilitas kegagalan (*robustness* dan *redundancy*), (ii) mengurangi konsekuensi kegagalan (*resourcefulness*), dan (iii) mengurangi waktu pemulihan (*rapidity*). Secara matematis, *Resilience Index* sistem cold chain dapat diformulasikan sebagai:

$$RI = \int_{t_0}^{t_1} [100\% - Q(t)]\, dt$$

di mana $Q(t)$ adalah fungsi kualitas produk pada waktu $t$, $t_0$ adalah waktu awal gangguan, dan $t_1$ adalah waktu sistem kembali ke kondisi stabil. Semakin kecil area degradasi $(RI \to 100\%)$, semakin resilien sistem.

Empat dimensi resilience didekomposisi menjadi:

$$R = w_1 \cdot \text{Rob} + w_2 \cdot \text{Red} + w_3 \cdot \text{Res} + w_4 \cdot \text{Rap}$$

dengan bobot $w_1+w_2+w_3+w_4 = 1$ yang disesuaikan dengan *criticality* produk (misalnya $w_{\text{vaksin}} = [0.30, 0.25, 0.15, 0.30]$).

### 2.2. Model Degradasi Kualitas Time-Temperature Dependent (TTD)

Untuk produk疫苗 dan biofarmasi, degradasi potensi antigen mengikuti model Arrhenius-like:

$$Q(t) = Q_0 \cdot \exp\left[-k_{\text{ref}} \cdot \exp\left(\frac{E_a}{R}\left(\frac{1}{T_{\text{ref}}} - \frac{1}{T(t)}\right)\right) \cdot t\right]$$

dengan parameter:
- $Q_0$ = potensi awal produk (umumnya 100 % atau dosis yang tertera)
- $k_{\text{ref}}$ = konstanta laju degradasi pada suhu referensi $T_{\text{ref}}$ (umumnya 277,15 K / 4 °C)
- $E_a$ = energi aktivasi degradasi (J/mol); untuk protein疫苗 tipikal $E_a = 80.000–110.000$ J/mol
- $R$ = konstanta gas universal ($8,314$ J/mol·K)
- $T(t)$ = suhu aktual produk pada waktu $t$ (K)

### 2.3. Model Dinamika Suhu Cold Chain Box

Putra et al. (2024) menggunakan sensor DS18B20 untuk memantau dinamika suhu *cold chain box*. Model transien suhu internal mengikuti persamaan keseimbangan energi satu-zona:

$$\rho V c_p \frac{dT_{\text{in}}(t)}{dt} = h A \left[T_{\text{amb}}(t) - T_{\text{in}}(t)\right] + \dot{Q}_{\text{cool}}(t) + \dot{Q}_{\text{load}}(t)$$

di mana:
- $\rho$ = densitas udara ($1,2$ kg/m³)
- $V$ = volume internal cold box (m³)
- $c_p$ = kapasitas panas spesifik udara ($1005$ J/kg·K)
- $h$ = koefisien konveksi efektif ($W/m^2 \cdot K$)
- $A$ = luas permukaan (*heat-leak area*)
- $T_{\text{amb}}$ = suhu lingkungan
- $\dot{Q}_{\text{cool}}$ = laju pendinginan oleh ice-pack PCM
- $\dot{Q}_{\text{load}}$ = laju beban panas dari produk

Untuk ice-pack *phase change material* (PCM), $\dot{Q}_{\text{cool}}(t)$ dapat dimodelkan sebagai konstan selama fase perubahan fasa:

$$\dot{Q}_{\text{cool}} = \frac{m_{\text{ice}} \cdot L_f}{t_{\text{hold}}}$$

dengan $L_f = 334.000$ J/kg (kalor lebur es) dan $t_{\text{hold}}$ adalah durasi fase PCM aktif.

### 2.4. Model Kegagalan dan Recovery (Reliability-Repair)

Probabilitas kegagalan sistem pendingin mengikuti distribusi Weibull:

$$F(t) = 1 - \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan $\beta$ = *shape parameter* dan $\eta$ = *scale parameter*. Waktu pemulihan (MTTR) setelah kegagalan:

$$\text{MTTR} = \int_0^{\infty} t \cdot f_{\text{rep}}(t)\, dt$$

Respon *real-time* IoT menurunkan MTTR karena eliminasi *detection lag*. Putra et al. (2024) menunjukkan bahwa pencatatan manual 2-jam menghasilkan *average detection lag* $\bar{t}_d = 60$ menit, sementara sistem IoT kontinyu menurunkan $\bar{t}_d \leq 1$ menit (latency jaringan).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem IoT-Monitoring

Sistem yang dirancang oleh Putra et al. (2024) mengintegrasikan komponen:

| Komponen | Spesifikasi Teknis |
|---|---|
| Sensor suhu | DS18B20, akurasi ±0,5 °C (-10–85 °C), resolusi 9–12 bit, protokol 1-Wire |
| Mikrokontroler | ESP32 / Arduino + WiFi |
| Transmisi data | MQTT/HTTP ke *cloud server* (Firebase/ThingsBoard) |
| Antarmuka pengguna | Dashboard web + notifikasi Telegram/SMS |
| Catu daya | Baterai Li-ion 18650 + solar backup |

Arsitektur tiga-lapis (*perception–network–application*) ini memungkinkan *sampling rate* hingga 60 detik dengan konsumsi daya < 1 W.

### 3.2. Diagram Alir SOP Cold Chain dengan IoT

```
[START]
   ↓
[Pre-loading: Verifikasi suhu ice-pack ≤ -18 °C selama ≥ 24 jam]
   ↓
[Loading: Penempatan vaksin + aktivasi sensor DS18B20]
   ↓
[In-transit monitoring: Sampling T(t) setiap Δt = 60 s]
   ↓
[Decision Logic]
   ├── IF 2 °C ≤ T(t) ≤ 8 °C → status NORMAL, log data
   ├── IF 8 °C < T(t) ≤ 12 °C → status WARNING, kirim alert ke apoteker
   └── IF T(t) > 12 °C OR T(t) < 2 °C → status CRITICAL, alarm + evaluasi vial
   ↓
[Post-delivery: Sinkronisasi data ke sistem LIS/logistik]
   ↓
[END]
```

### 3.3. SOP Tanggapan Gangguan

1. **Deteksi otomatis** (≤ 1 menit) oleh IoT ketika suhu keluar threshold.
2. **Triase apoteker** (5–10 menit): identifikasi akar masalah (kerusakan alat, human error, paparan lingkungan).
3. **Aksi korektif**: (a) pindahkan ke cold chain cadangan, (b) gunakan ice-pack tambahan, (c) hubungi teknisi.
4. **Pelaporan** ke vendor dan otoritas regulator (BPOM, Dinkes provinsi) jika vial terindikasi compromised.
5. **Post-mortem** dalam 24 jam dengan analisis *root cause* dan pembaruan parameter $w_i$ pada model resilience.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Simulasi

Distribusi 200 vial vaksin DPT-HepB-Hib dari Dinkes Kabupaten Siak ke puskesmas kecamatan dengan parameter operasional:

- Volume *cold chain box*: $V = 0{,}045$ m³ (45 liter)
- Luas permukaan: $A = 0{,}42$ m²
- Kapasitas panas produk: $\dot{Q}_{\text{load}} = 8$ W
- Ice pack: 8 × 400 g, $m_{\text{ice}} = 3{,}2$ kg pada $T_{\text{PCM}} = -18$ °C
- Durasi transit terjadwal: $t_{\text{transit}} = 8$ jam
- Suhu ambient rata-rata Siak: $T_{\text{amb}} = 31$ °C (304,15 K)

### 4.2. Perhitungan Durasi Cold Hold Time (Tanpa IoT