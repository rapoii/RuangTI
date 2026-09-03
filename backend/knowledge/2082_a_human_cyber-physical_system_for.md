# 2082 — Sistem Siber-Fisik Manusia untuk Komputasi Berpusat-Manusia dan Integrasi Plug-and-Produce pada Rantai Nilai Industri 4.0/5.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Arsitektur Human Cyber-Physical System (HCPS) untuk Komputasi Berpusat-Manusia di Lingkungan Operasional Maritim dengan Pendukung Plug-and-Produce
**Jurnal & Sitasi Utama:** Nicole Taylor, Karel Kruger, Anriëtte Bekker (2023). *A human cyber-physical system for human-centered computing in seafaring*. **Journal of Ambient Intelligence and Humanized Computing**. DOI: [https://doi.org/10.1007/s12652-023-04598-6](https://doi.org/10.1007/s12652-023-04598-6)
**Sitasi Pendukung:** Mahmood Reza Khabbazi, Fredrik Danielsson, Bassam Massouh (2024). *Plug and Produce — a review and future trend*. **The International Journal of Advanced Manufacturing Technology**. DOI: [https://doi.org/10.1007/s00170-024-14379-w](https://doi.org/10.1007/s00170-024-14379-w)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di sektor maritim dan manufaktur memerlukan pendekatan yang melampaui sekadar integrasi *cyber* dan fisik. Taylor, Kruger, dan Bekker (2023) dalam *Journal of Ambient Intelligence and Humanized Computing* memperkenalkan **arsitektur Human Cyber-Physical System (HCPS)** sebagai platform formal untuk *human-centered computing* di lingkungan operasional maritim, dengan studi kasus **Mariner 4.0**—sebuah implementasi HCPS untuk memantau *motion sickness* (mabuk laut) pada pelaut secara real-time (Taylor et al., 2023, DOI: 10.1007/s12652-023-04598-6). Urgensi topik ini diperkuat oleh data industri pelayaran global: International Maritime Organization (IMO) melaporkan bahwa kelelahan kru dan gangguan vestibular menyebabkan kontribusi signifikan terhadap *human error*, yang merupakan akar penyebab 75–96% kecelakaan laut menurut beberapa laporan maritime safety. Pada konteks manufaktur, pelengkap konseptual ditawarkan oleh Khabbazi, Danielsson, dan Massouh (2024) melalui *systematic literature review* terhadap konsep **Plug-and-Produce (PnP)** di dalam *advanced automated manufacturing control systems* (Khabbazi et al., 2024, DOI: 10.1007/s00170-024-14379-w). Kedua literatur ini bertemu pada titik strategis: kebutuhan akan sistem yang tidak hanya mengotomasi proses, tetapi juga memposisikan manusia sebagai entitas pertama (*first-class citizen*) di dalam arsitektur siber-fisik.

Konteks ekonominya signifikan. Industri pelayaran dunia mempekerjakan lebih dari 1,89 juta pelaut (ILO, 2023) dan mengelola 80–90% perdagangan global berdasarkan tonase. Setiap insiden yang menurunkan *readiness* kru—termasuk motion sickness yang menurunkan produktivitas dek hingga 30%—berimplikasi langsung pada *schedule reliability* kapal, biaya operasional harian ($10.000–$100.000/hari untuk kapal kontainer besar), dan klaim asuransi. Di sisi manufaktur, PnP memungkinkan *reconfiguration time* lini produksi ditekan dari hitungan minggu menjadi jam, sehingga mendukung *mass customization* dan *lot-size-one* production yang menjadi ciri Industry 5.0. Kedua domain ini akhirnya bertemu pada **arsitektur HCPS generik** yang didefinisikan Taylor et al. (2023): *human layer*, *cyber layer*, dan *physical layer* yang saling berinteraksi melalui *digital twin representation* pelaut atau operator. Modul 2082 ini menyintesis kedua paper untuk membangun fondasi keilmuan tentang bagaimana arsitektur HCPS dan paradigma PnP dapat digunakan bersama untuk rekayasa sistem industri yang adaptif, humanis, dan berkinerja tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Tiga-Lapisan Human Cyber-Physical System

Taylor et al. (2023) mendefinisikan HCPS sebagai sistem dengan tiga lapisan yang saling berinteraksi melalui *interface* tertentu. Representasi formalnya dapat dituliskan sebagai himpunan:

$$\text{HCPS} = \{H, C, P, \mathcal{I}\}$$

di mana $H$ adalah *human layer* (pelaut dengan atribut fisiologis dan kognitif), $C$ adalah *cyber layer* (platform komputasi, sensor fusion, model prediktif), $P$ adalah *physical layer* (kapal, lingkungan laut, aktuator), dan $\mathcal{I}$ adalah himpunan *interface* yang menghubungkan ketiganya. Setiap elemen $H$, $C$, dan $P$ memiliki **digital twin** yang diperbarui secara time-driven maupun event-driven:

$$DT_i(t+\Delta t) = f_i\left( DT_i(t), S_i(t), \mathcal{I}_i(t) \right)$$

dengan $S_i(t)$ adalah *sensor stream* yang mengalir dari physical ke cyber layer, dan $\mathcal{I}_i(t)$ adalah *interaction vector*. Pendekatan ini memungkinkan deteksi *motion sickness* melalui pemantauan variabel fisiologis yang difusikan dari berbagai sensor (Taylor et al., 2023).

### 2.2 Model Kuantitatif Motion Sickness pada Mariner 4.0

Implementasi Mariner 4.0 menggunakan skor **Motion Sickness Dose Value (MSDV)** sebagai agregat akselerasi spectral, yang oleh ISO 2631-1 diadopsi untuk getaran人体. Untuk pelaut, formulasi yang relevan adalah:

$$\text{MSDV}_{total} = \left[ \int_0^T a_w^4(t)\, dt \right]^{1/2}$$

di mana $a_w(t)$ adalah akselerasi *frequency-weighted* pada *seat* pelaut, dan $T$ adalah durasi eksposur. Namun, karena tidak semua gerakan kapal bersifat translational, perluasan ke motion sickness pada pelaut mengikuti pendekatan **O'Hanlon & McCauley (1974)** yang direplikasi Taylor et al. (2023):

$$\text{MSI} = a_m \cdot f_s^{b_m}$$

dengan $a_m, b_m$ adalah koefisien empiris (umumnya $a_m \approx 0.5$ untuk akselerasi vertikal pada 0,25–0,5 Hz, $b_m \approx 2$), $f_s$ adalah frekuensi stimulyang dominan. Indeks ini kemudian dibandingkan dengan **MISC (Misery Index Score Composite)**:

$$\text{MISC}(t) = w_1 \cdot \text{HR}(t) + w_2 \cdot \text{GSR}(t) + w_3 \cdot \text{EDA}(t) - w_4 \cdot \text{RMSSD}(t)$$

di mana HR = heart rate (bpm), GSR = galvanic skin response (μS), EDA = electrodermal activity (μS), RMSSD = akar kuadrat rata-rata selisih berurutan R-R interval (ms), dengan bobot $w_i \in [0,1]$ dan $\sum w_i = 1$.

### 2.3 Formulasi Plug-and-Produce untuk Adaptasi Modul HCPS

Merujuk pada Khabbazi et al. (2024), paradigma PnP memungkinkan modul sensor atau aktuator baru "dicolokkan" ke sistem kontrol dengan konfigurasi minimal. Formulasi generiknya adalah *capability matching* antara modul baru $M_j$ dan slot arsitektur $A_k$:

$$\text{Compatibility}(M_j, A_k) = \mathbb{1}\left[ \bigwedge_{l \in \mathcal{L}} \left( \mu_l(M_j) \subseteq \mu_l(A_k) \right) \right]$$

dengan $\mathcal{L}$ adalah himpunan *capability descriptors* (misalnya jenis sensor, rentang ukur, protokol komunikasi IEC 61499), $\mu_l(\cdot)$ adalah operator ekstraksi, dan $\mathbb{1}[\cdot]$ adalah indikator kompatibilitas. Ketika satu modul memenuhi slot, waktu integrasi efektifnya menurun drastis:

$$T_{PnP} = T_{detect} + T_{match} + T_{configure} + T_{validate} \ll T_{conv}$$

Khabbazi et al. (2024) melaporkan bahwa $T_{PnP}$ pada studi kasus mencapai 5–15 menit versus $T_{conv}$ 2–8 minggu untuk integrasi manual lini manufaktur.

### 2.4 Pemodelan State-Space HCPS

Untuk keperluan *real-time monitoring*, model state-space HCPS dapat ditulis sebagai:

$$\dot{\mathbf{x}}(t) = A\mathbf{x}(t) + B\mathbf{u}(t) + E\mathbf{w}(t)$$
$$\mathbf{y}(t) = C\mathbf{x}(t) + D\mathbf{u}(t) + F\mathbf{n}(t)$$

di mana $\mathbf{x}(t)$ adalah state vector pelaut (posisi, velocity, HR, GSR, EDA), $\mathbf{u}(t)$ adalah input kontrol (misalnya perintah navigasi, pengingat istirahat), $\mathbf{w}(t)$ adalah gangguan lingkungan (gelombang, cuaca), $\mathbf{y}(t)$ adalah output observasi, dan matriks $A, B, C, D, E, F$ ditentukan melalui proses *system identification* dari data Mariner 4.0 (Taylor et al., 2023).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Mariner 4.0

Taylor et al. (2023) mendesain Mariner 4.0 mengikuti SOP berlapis sebagai berikut:

1. **Akuisisi Data Sensor Layer:** Wearable sensor (wristband + chest strap) mengumpulkan HR, RMSSD, GSR, EDA, akselerasi 3-axis, dan gyro 3-axis pada sampling rate $f_s = 50$ Hz untuk IMU dan $f_s = 1$ Hz untuk biosignal.
2. **Pre-processing & Edge Filtering:** Low-pass Butterworth filter orde 4 dengan cut-off 0,5 Hz untuk akselerasi, dan band-pass 0,5–40 Hz untuk HR.
3. **Cyber Layer — Feature Extraction:** FFT-based MSDV, time-domain HRV (RMSSD, SDNN), statistical features (mean, variance, skewness) dikomputasi pada jendela $T_w = 60$ s dengan overlap 50%.
4. **Inference Engine:** Random Forest atau LSTM ringan menghasilkan prediksi level motion sickness (skala 0–10) yang dipetakan ke MISC.
5. **Digital Twin Update:** Representasi virtual pelaut diperbarui setiap 5 detik dan dikirim ke *bridge* melalui *tactical maritime communication network*.
6. **Actuation Layer:** Saat MISC > threshold $\tau_{alert}$, sistem memberikan *alert* visual/audio ke nahkoda untuk rotasi tugas atau intervensi medis dini.

### 3.2 Integrasi Plug-and-Produce

Berdasarkan Khabbazi et al. (2024), integrasi PnP mengikuti protokol:

1. **Self-Description:** Setiap modul HCPS baru mendeklarasikan diri menggunakan *Asset Administration Shell* (AAS, standar Industrie 4.0) atau *Capability Description Language* (CDL).
2. **Auto-Discovery & Matching:** *Middleware* memindai *bus* (misalnya OPC UA, MQTT, TSN), mengekstrak descriptor, dan menjalankan fungsi $\text{Compatibility}(M_j, A_k)$.
3. **Auto-Configuration:** Modul dikonfigurasi ulang dengan parameter uniknya (alamat IP, slot memori, kalibrasi sensor).
4. **Validation & Handover:** Pengujian singkat (sanity check, latency test) sebelum modul aktif beroperasi.
5. **Continuous Operation & Telemetry:** Modul mengirim status operasional secara periodik untuk predictive maintenance.

### 3.3 Diagram Alir HCPS-PnP Terintegrasi

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  PHYSICAL LAYER  │◄──►│   CYBER LAYER    │◄──►│   HUMAN LAYER    │
│  Kapal + Sensor  │    │  Edge + Cloud +  │    │  Pelaut + Twin   │
│  Wearable + IMU  │    │  AI Inference    │    │  Operator Loop   │
└──────────────────┘    └──────────────────┘    └──────────────────┘
         ▲                       ▲                       ▲
         │              ┌────────┴────────┐              │
         └──────────────┤   PnP MIDDLEWARE├──────────────┘
                        │ (Auto-Discovery │
                        │  & Matching)    │
                        └─────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pemantauan 12 Pelaut dalam Pelayaran 14 Hari

Sebuah kapal container kelas feeder (kapasitas 2.500 TEU) dengan 12 pelaut diuji dengan Mariner 4.0 selama 14 hari pelayaran di rute Utara-Selatera dengan rata-rata tinggi gelombang signifikan $H_s = 2{,}4$ m.

**Input Parameter:**

| Parameter | Nilai | Satuan |
|---|---|---|
| Durasi eksposur ($T$) | 336 | jam |
| Akselerasi rms weighted ($a_w$) | 0,45 | m/s² |
| Frekuensi dominan ($f_s$) | 0,35 | Hz |
| HR rata-rata | 78 | bpm |
| HR saat storm | 102 | bpm |
| GSR rata-rata | 4,8 | μS |
| GSR saat storm | 11,2 | μS |
| RMSSD baseline | 42 | ms |
| RMSSD saat storm | 19 | ms |
| Bobot MISC ($w_1, w_2, w_3, w_4$) | 0,20; 0,15; 0,25; 0,40 |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
