# 2822 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Pemantauan Suhu IoT dan Analisis Keandalan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan salah satu subsistem paling kritis dalam rantai pasok produk termolabil (temperature-sensitive products) yang mencakup produk farmasi, vaksin, makanan segar, bioteknologi, dan bahan kimia diagnostik. Kerusakan rantai dingin tidak hanya menyebabkan kerugian finansial langsung, tetapi juga ancaman serius terhadap kesehatan masyarakat—terutama dalam konteks distribusi vaksin di negara berkembang. Khurshid dan Siddiqui (2024) dalam artikel *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa kemampuan sistem untuk menyerap (absorb),恢复 (recover), dan beradaptasi (adapt) terhadap disrupsi termal merupakan variabel endogen yang menentukan keberlanjutan operasional cold chain.

Dalam konteks operasional di Indonesia, realitas di lapangan masih menghadapi kelemahan struktural yang signifikan. Putra, Defit, dan Nurcahyo (2024) pada Jurnal KomtekInfo (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan permasalahan konkret pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, di mana cold chain box vaksin tidak dilengkapi sistem pemantauan suhu real-time sehingga apoteker harus mencatat suhu secara manual setiap 2 jam pada *log sheet*. Kondisi ini menciptakan dua masalah fundamental: (1) tidak adanya peringatan dini (*early warning system*) saat suhu melebihi ambang batas 2–8°C akibat kerusakan internal/eksternal, dan (2) potensi human error dalam pencatatan yang menurunkan kualitas dokumentasi untuk audit.

Urgensi permasalahan ini bersifat multidimensional. Pertama, secara ekonomi, WHO memperkirakan bahwa lebih dari 25% vaksin global terbuang sia-sia akibat kerusakan rantai dingin, setara dengan nilai ekonomis miliaran dolar AS per tahun. Kedua, secara teknis, sensor DS18B20 dengan akurasi ±0.5°C pada rentang operasional farmasi (-10°C hingga +85°C) telah tersedia dengan biaya sangat terjangkau (≤USD 5/unit), sehingga absennya sistem IoT lebih merupakan masalah institusional dan rekayasa proses daripada keterbatasan teknologi. Ketiga, secara regulasi, standar WHO PQS (Performance, Quality and Safety) untuk cold chain equipment telah menetapkan bahwa setiap unit penyimpanan wajib memiliki continuous temperature monitoring—suatu prasyarat yang belum terpenuhi di banyak fasilitas kesehatan tingkat kabupaten di Indonesia. Kertas kerja Khurshid dan Siddiqui (2024) menyediakan kerangka resilience kuantitatif yang dapat menjawab pertanyaan mendasar: seberapa besar kemampuan sistem cold chain kita untuk pulih dari suatu ekskursi suhu, dan bagaimana probabilitas kerugian diminimalisasi melalui investasi pada sistem monitoring digital?

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka konseptual resilience cold chain yang dibangun oleh Khurshid dan Siddiqui (2024) berakar pada formulasi *resilience triangle* yang diperkenalkan oleh Bruneau dan Reinhorn untuk infrastruktur kritis, diadaptasi untuk proses logistik waktu-nyata. Terdapat empat dimensi resilience yang diformulasikan secara matematis: **keandalan (reliability)**, **kontinjensi (contingency)**, **kapasitas recovery (recovery capacity)**, dan **kemampuan adaptif (adaptive capacity)**.

### 2.1 Indeks Ketahanan (Resilience Index)

Indeks resilience didefinisikan sebagai kemampuan sistem mempertahankan tingkat layanan $Q(t)$ di atas ambang fungsional $Q^*$ selama periode disrupsi $[t_0, t_1]$:

$$R_{idx} = 1 - \frac{\int_{t_0}^{t_1} [Q^* - Q(t)] \, dt}{(t_1 - t_0) \cdot Q^*}$$

di mana $Q(t)$ adalah kualitas produk termolabil sebagai fungsi suhu aktual, $Q^*$ adalah tingkat kualitas minimum yang dapat diterima, dan $t_0$ adalah waktu onset disrupsi. Nilai $R_{idx} \in [0, 1]$, dengan $R_{idx} = 1$ mengindikasikan sistem tanpa degradasi.

### 2.2 Model Markov untuk Transisi Status Cold Chain

Status operasional cold chain dimodelkan sebagai rantai Markov waktu-kontinu (*Continuous-Time Markov Chain* / CTMC) dengan empat status: $S_1$ (Normal: suhu dalam rentang 2–8°C), $S_2$ (Peringatan: ekskursi awal 8–10°C selama < 30 menit), $S_3$ (Kritis: ekskursi > 10°C atau durasi > 30 menit), $S_4$ (Gagal: produk terdegradasi irreversible). Laju transisi direpresentasikan oleh matriks generator infinitesimal:

$$Q = \begin{pmatrix} -\lambda_{12} & \lambda_{12} & 0 & 0 \\ \mu_{21} & -(\mu_{21} + \lambda_{23}) & \lambda_{23} & 0 \\ 0 & \mu_{32} & -(\mu_{32} + \lambda_{34}) & \lambda_{34} \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

Probabilitas stationer $\pi_i$ diselesaikan dari sistem $\pi \cdot Q = 0$ dan $\sum \pi_i = 1$. Availability sistem cold chain didefinisikan sebagai:

$$A = \pi_1 + \pi_2 = \frac{\mu_{21} \mu_{32} + \lambda_{12} \mu_{32}}{\sum_{i,j} \lambda_{ij} \pi_j}$$

### 2.3 Keandalan Sensor dan Laju Kegagalan

Keandalan komponen IoT monitoring mengikuti distribusi eksponensial ketika betracht sebagai *memoryless system*:

$$R_{sensor}(t) = e^{-\lambda_s t}$$

untuk sensor DS18B20 dengan laju kegagalan $\lambda_s \approx 0.0001$ per jam (MTBF ≈ 10.000 jam atau ≈ 14 bulan operasi kontinu). Laju pemulihan ditentukan oleh protokol respons alarm:

$$\mu_{recovery} = \frac{1}{t_{response}}$$

di mana $t_{response}$ adalah waktu rata-rata dari deteksi anomali hingga tindakan korektif (transfer vaksin ke cold chain backup, aktivasi generator, atau notifikasi ke supervisor).

### 2.4 Degradasi Produk: Persamaan Arrhenius

Kerusakan kumulatif produk termolabil mengikuti model Arrhenius yang menghubungkan degradasi dengan suhu absolut:

$$k_{deg}(T) = A \cdot e^{-E_a / (R \cdot T)}$$

Total degradasi diperoleh dari integral suhu-waktu (*time-temperature integral*):

$$D_{total} = \int_{0}^{t} k_{deg}[T(\tau)] \, d\tau$$

di mana $E_a$ adalah energi aktivasi (untuk kebanyakan vaksin $E_a \approx 80$–$120$ kJ/mol), $R = 8.314$ J/(mol·K), dan $T$ dalam Kelvin. Kerusakan irreversible terjadi ketika $D_{total} > D_{threshold}$.

### 2.5 Fungsi Objektif Optimasi Resilience

Khurshid dan Siddiqui (2024) merumuskan fungsi utilitas yang menggabungkan biaya investasi monitoring dengan kerugian yang diharapkan (*expected loss*):

$$\max_{x \in \mathcal{X}} \quad U(x) = -C_{invest}(x) - \mathbb{E}[L_{loss}(x)]$$

dengan kendala $x$ mewakili konfigurasi teknologi (jenis sensor, frekuensi sampling, redundansi gateway, SLA provider). Solusi optimal menyeimbangkan *marginal benefit of monitoring* dengan *marginal cost of disruption*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem resilience cold chain mengikuti SOP berlapis yang menggabungkan teknologi IoT, proses bisnis, dan tata kelola risiko. Berikut adalah arsitektur referensi yang disintesis dari kedua paper.

### 3.1 Arsitektur Sistem IoT Cold Chain

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Cold Chain    │    │   Edge Gateway   │    │   Cloud Server  │
│      Box        │    │  (ESP32/RPi)     │    │   (MQTT/HTTPS)  │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ DS18B20 #1  │─┼────┼─│ 1-Wire Bus   │ │    │ │ Time-Series │ │
│ │ DS18B20 #2  │─┼────┼─│  Manager     │─┼────┼─│  Database   │ │
│ │ DS18B20 #3  │─┼────┼─│              │ │    │ │ (InfluxDB)  │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ DHT22       │─┼────┼─│ WiFi/4G Modem│─┼────┼─│ Dashboard   │ │
│ │ (Humidity)  │ │    │ └──────────────┘ │    │ │ (Grafana)   │ │
│ └─────────────┘ │    │ ┌──────────────┐ │    │ └─────────────┘ │
│ ┌─────────────┐ │    │ │ Alarm Logic  │─┼────┼─> SMS/Email  │
│ │ Door Sensor │─┼────┼─│  Engine      │ │    │   Notifier   │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 3.2 Diagram Alir SOP Cold Chain dengan IoT

Diagram berikut merepresentasikan logika operasional harian yang direkomendasikan oleh Putra et al. (2024):

```mermaid
flowchart TD
    A[Vaccine Arrival at UPTD] --> B{Verify Cold Chain<br/>Transport Temp 2-8°C}