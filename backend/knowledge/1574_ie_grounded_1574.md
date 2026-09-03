# 1574 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable) dan Integrasi Sistem Monitoring IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Sektor distribusi produk mudah rusak (*perishable*) — yang mencakup vaksin, produk farmasi biologis, makanan beku, dan produk hortikultura — menghadapi tantangan struktural yang sangat khas dalam rekayasa rantai pasok. Berbeda dengan barang manufaktur konvensional, kualitas produk ini terdegradasi secara *time-temperature dependent* sehingga setiap pelanggaran pada jendela suhu operasional (umumnya $2^\circ\text{C}$ hingga $8^\circ\text{C}$ untuk vaksin sesuai WHO PQS E001) berakibat pada kerusakan ireversibel, kerugian finansial, dan pada kasus kritis, risiko kesehatan masyarakat. Khurshid dan Siddiqui (2024) dalam naskah "A Resilience Model for Cold Chain Logistics of Perishable Products" (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan kerangka kuantitatif untuk mengukur, memodelkan, dan meningkatkan kemampuan pulih (*resilience*) sistem cold chain ketika menghadapi gangguan (disrupsi). 

Urgensi industrialisasi model ini dapat dilihat dari konteks empiris yang didokumentasikan oleh Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) pada UPTD Farmasi Dinas Kesehatan Kabupaten Siak. Mereka menemukan tiga masalah operasional yang menjadi *failure mode* klasik pada cold chain lapangan Indonesia, yaitu: (i) tidak adanya alat pemantauan suhu *realtime* pada *cold chain box*; (ii) tidak adanya sistem peringatan otomatis saat suhu melebihi ambang batas akibat kerusakan internal/eksternal; dan (iii) proses pencatatan suhu yang masih dilakukan secara *manual* setiap 2 jam pada *log sheet* oleh apoteker. Kondisi ini menyebabkan blind-spot temporal yang lebar dan membuka peluang terhadap *silent spoilage*. 

Kombinasi keduanya — model resiliensi teoretis (Khurshid & Siddiqui, 2024) dan instrumentasi IoT (Putra dkk., 2024) — menunjukkan bahwa rekayasa cold chain modern membutuhkan integrasi antara model keputusan kuantitatif dan arsitektur sensing operasional. Pasar global cold chain物流 diproyeksikan melebihi USD 428 miliar pada 2030, dengan kerugian tahunan akibat *temperature excursion* mencapai USD 35 miliar (estimasi Global Cold Chain Alliance), menjadikan investasi pada resiliensi bukan sekadar opsi teknis melainkan kebutuhan strategis. Dokumen modul ini akan membedah model resiliensi, formulasi matematis, prosedur operasional, hingga aplikasi lintas sektor dari perspektif industrial engineering.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Cold Chain

Resiliensi dalam konteks cold chain didefinisikan sebagai kemampuan sistem untuk mempertahankan fungsi kritis (integritas suhu dan kualitas produk) di bawah skenario disrupsi, serta *bounce back* ke tingkat kinerja semula dalam waktu yang dapat diterima. Khurshid dan Siddiqui (2024) memformalkan kapasitas resiliensi melalui indeks *Resilience Loss Integral* (RLI), yaitu luas area di bawah kurva degradasi kinerja yang dihitung sejak waktu disrupsi $t_0$ hingga sistem pulih kembali ke steady-state di $t_r$:

$$\text{RLI} = \int_{t_0}^{t_r} \left[ Q^*(t) - Q(t) \right] dt$$

di mana $Q^*(t)$ adalah fungsi kinerja nominal (baseline) dan $Q(t)$ adalah kinerja aktual pasca-disrupsi. Semakin kecil RLI, semakin resilien sistem. Indikator turunannya adalah *Time To Recovery* (TTR) dan *Performance Drop Magnitude* (PDM).

Untuk cold chain, fungsi kinerja $Q(t)$ dapat diparameterisasi sebagai *Service Level Index* yang bergantung pada dua variabel utama: suhu aktual $T(t)$ dan waktu paparan $\Delta t$:

$$Q(t) = 1 - \alpha \cdot \max\!\left(0, T(t) - T_{\text{upper}}\right) \cdot \Delta t - \beta \cdot \max\!\left(0, T_{\text{lower}} - T(t)\right) \cdot \Delta t$$

di mana $\alpha$ dan $\beta$ adalah koefisien sensitivitas produk (untuk vaksin, $\alpha \approx 0{,}015$ per jam per derajat pelanggaran). $T_{\text{upper}}$ dan $T_{\text{lower}}$ adalah batas jendela suhu (untuk vaksin $T_{\text{upper}}=8^\circ\text{C}$, $T_{\text{lower}}=2^\circ\text{C}$).

### 2.2 Model Probabilistik Disrupsi

Probabilitas terjadinya *excursion* suhu dimodelkan dengan distribusi Weibull karena karakter *hazard rate*-nya yang meningkat seiring penuaan peralatan:

$$f(t_d; k, \lambda) = \frac{k}{\lambda} \left(\frac{t_d}{\lambda}\right)^{k-1} e^{-(t_d/\lambda)^k}$$

dengan $k$ adalah *shape parameter* (umumnya $k=2{,}3$ untuk kegagalan *cold chain box* berdasarkan data MTBF lapangan) dan $\lambda$ adalah *scale parameter* (umur karakteristik). Fungsi reliabilitas sistem multi-kompresor dapat dinyatakan:

$$R_{\text{system}}(t) = 1 - \prod_{i=1}^{n} \left[1 - R_i(t)\right]$$

### 2.3 Model Sensor dan Akuisisi Data IoT

Berdasarkan Putra dkk. (2024), sensor DS18B20 digunakan sebagai transducer suhu digital dengan akurasi $\pm 0{,}5^\circ\text{C}$ pada rentang $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$ dan resolusi $0{,}0625^\circ\text{C}$. Model pengukuran dapat dinyatakan:

$$T_{\text{measured}} = T_{\text{true}} + \varepsilon_{\text{sensor}} + \varepsilon_{\text{noise}}$$

di mana $\varepsilon_{\text{noise}} \sim \mathcal{N}(0, \sigma^2)$ dengan $\sigma \approx 0{,}1^\circ\text{C}$ pada lingkungan terkontrol. Sampling rate $f_s$ yang direkomendasikan untuk menggantikan pencatatan manual 2 jam adalah $f_s \geq 0{,}1\,\text{Hz}$ (satu sampel per 10 detik) guna memenuhi ambang deteksi dini.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis cold chain resilien mengikuti kerangka **Plan–Monitor–Detect–Respond–Recover (PMDRR)** yang merupakan pengembangan dari ISO 28000 (Supply Chain Security Management) dan WHO TRS 962 Annex 9.

### 3.1 Diagram Alir Operasional

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ PLAN         │───▶│ MONITOR (IoT)│───▶│ DETECT       │
│ • Set baseline│    │ • DS18B20    │    │ • Threshold  │
│ • Risk mapping│    │ • Cloud log  │    │ • Anomaly    │
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │ alarm
┌──────────────┐    ┌──────────────┐    ┌──────▼───────┐
│ RECOVER      │◀───│ RESPOND      │◀───│ ALERT        │
│ • RLI recalc │    │ • Switch unit│    │ • SMS/Email  │
│ • CAPA       │    │ • Quarantine │    │ • Dashboard  │
└──────────────┘    └──────────────┘    └──────────────┘
```

### 3.2 SOP Pencatatan Suhu

Menggantikan pendekatan manual Putra dkk. (2024), SOP baru menetapkan: (a) pencatatan otomatis kontinu dengan timestamp UNIX; (b) validasi *outlier* menggunakan *modified Z-score* $|M_i| = 0{,}6745 \cdot (x_i - \tilde{x})/\text{MAD} > 3{,}5$; (c) retensi data minimum 5 tahun sesuai BPOM; (d) *audit trail* yang tidak dapat dimodifikasi (*append-only ledger* berbasis blockchain opsional).

### 3.3 Arsitektur Teknologi IoT

Lapisan sensor (DS18B20 + mikrokontroler ESP32) → lapisan komunikasi (Wi-Fi/MQTT dengan QoS level 1) → lapisan *edge gateway* (database time-series InfluxDB) → lapisan aplikasi (dashboard Grafana + alert Telegram). Latency end-to-end target $\leq 3$ detik, dengan SLA uptime $\geq 99{,}5\%$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah Puskesmas di Kabupaten Siak mendistribusikan 200 vial vaksin COVID-19 (tiap vial 10 dosis) dari UPTD Farmasi menggunakan *cold chain box* kapasitas 8 liter dengan akumulator es. Kita evaluasi Q1: bagaimana RLI berubah jika sensor manual diganti IoT, dan Q2: berapa estimasi kerugian moneter pada berbagai skenario disrupsi.

### 4.1 Parameter Input

- Jendela suhu aman: $[T_{\text{lower}}, T_{\text{upper}}] = [2^\circ\text{C}, 8^\circ\text{C}]$
- Durasi distribusi lapangan: $\Delta t_{\text{dist}} = 6$ jam
- Koefisien $\alpha = 0{,}015$/°C/jam untuk vaksin mRNA
- Harga per dosis: Rp 250.000
- Total nilai muatan: $200 \times 10 \times 250.000 = \text{Rp } 500.000.000$

### 4.2 Skenario Manual (Putra dkk., 2024)

Pencatatan setiap 2 jam berarti *worst-case detection lag* = 2 jam. Jika terjadi *excursion* ke $T = 10^\circ\text{C}$