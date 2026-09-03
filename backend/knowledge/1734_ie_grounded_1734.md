# 1734 — Model Resiliensi Logistik Rantai Dingin Produk Mudah Rusak dengan Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan salah satu subsistem paling kritis dalam rantai pasok produk mudah rusak (perishable products) yang mencakup vaksin, produk farmasi biologis, makanan beku, dan bahan agroindustri. Kerusakan rantai dingin tidak hanya menimbulkan kerugian ekonomi langsung berupa produk yang terbuang, melainkan juga risiko kesehatan masyarakat yang bersifat katastrofik, seperti pada kasus vaksin yang kehilangan potensi imunogenisitasnya akibat paparan suhu di luar rentang 2–8 °C (Putra, Defit, & Nurcahyo, 2024). Menurut Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), lebih dari 25–30% produk farmasi rantai dingin global mengalami degradasi mutu akibat *temperature excursion*, dan rata-rata kehilangan produk bernilai USD 10–15 miliar per tahun hanya untuk segmen biofarmasi.

Konteks riil di Indonesia, sebagaimana dilaporkan oleh Putra, Defit, dan Nurcahyo (2024) pada Jurnal KomtekInfo (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)), menunjukkan bahwa Unit Pelaksana Teknis Dinas (UPTD) Farmasi di Dinas Kesehatan Kabupaten Siak menghadapi permasalahan operasional ganda: pertama, *cold chain box* sebagai media penyimpanan vaksin belum配备 alat pemantau suhu real-time, sehingga apoteker tidak mendapatkan peringatan dini ketika suhu menyimpang dari ambang batas akibat kerusakan internal (gangguan kompresor) maupun eksternal (paparan panas lingkungan, keterlambatan listrik); kedua, proses pencatatan suhu masih dikerjakan secara *manual* setiap 2 (dua) jam sekali pada *log sheet*, sehingga interval deteksi anomali terlalu panjang dan risiko degradasi mutu vaksin meningkat secara kumulatif. Permasalahan ini merupakan cerminan masalah struktural logistik rantai dingin di negara berkembang, di mana *visibility* rantai pasok masih rendah meskipun biaya kegagalan (*failure cost*) sangat tinggi.

Dalam perspektif Teknik Industri, isu ini dipandang sebagai masalah desain sistem yang harus memenuhi tiga kriteria simultan: *robustness* (ketahanan terhadap gangguan), *redundancy* (cadangan kapasitas), dan *recoverability* (kemampuan pemulihan cepat). Integrasi Internet of Things (IoT) melalui sensor DS18B20 yang diusulkan oleh Putra *et al.* (2024) menjawab dimensi *visibility*, sedangkan model resiliensi kuantitatif dari Khurshid dan Siddiqui (2024) menyediakan kerangka analitis untuk mengukur dan mengoptimalkan ketiga kriteria tersebut secara matematis. Modul 1734 ini menyintesiskan kedua kontribusi tersebut menjadi satu *body of knowledge* terpadu bagi perekayasa rantai pasok.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Fungsi Kinerja Rantai Dingin Q(t)

Khurshid dan Siddiqui (2024) mendefinisikan fungsi kinerja rantai dingin sebagai $Q(t) \in [0,1]$, yang merepresentasikan tingkat kesesuaian suhu aktual terhadap *setpoint* pada waktu $t$. Formulasi diskretisasinya adalah:

$$Q(t) = 1 - \frac{1}{n}\sum_{i=1}^{n} w_i \cdot \mathbb{1}_{\{|T_i(t) - T^*| > \Delta T_{tol}\}}$$

di mana $T_i(t)$ adalah suhu terukur pada sensor ke-$i$, $T^*$ adalah suhu *setpoint* (umumnya 5 °C untuk vaksin), $\Delta T_{tol}$ adalah toleransi deviasi (default 3 °C sesuai standar WHO PQS), $w_i$ adalah bobot kontribusi sensor, dan $\mathbb{1}_{\{\cdot\}}$ adalah indikator deviasi.

### 2.2. Indeks Resiliensi (Resilience Index, RI)

Resiliensi diukur sebagai rasio integral fungsi kinerja terhadap kinerja nominal selama horizon waktu $[0, H]$:

$$RI = \frac{\int_{0}^{H} Q(t)\,dt}{Q_{nom} \cdot H}$$

dimana $Q_{nom} = 1$ untuk sistem tanpa degradasi baseline. Indeks ini merepresentasikan *Service Level Achievement Ratio* dan menjadi metrik utama optimasi sistem.

### 2.3. Kurva Resiliensi dan Segitiga Kerugian

Setelah terjadi gangguan pada waktu $t_d$, kinerja menurun hingga titik minimum $Q_{min}$ pada $t_{min}$, lalu pulih secara eksponensial dengan konstanta laju pemulihan $\lambda$:

$$Q(t) = Q_{min} + (1 - Q_{min})(1 - e^{-\lambda(t - t_{min})}), \quad t \geq t_{min}$$

Kerugian kinerja total (*performance loss area*, PLA) dapat dihitung sebagai:

$$PLA = \int_{t_d}^{t_d + t_r} [1 - Q(t)]\,dt \approx \frac{(1 - Q_{min}) \cdot t_r}{2}$$

di mana $t_r$ adalah *recovery time*. Metrik ini merepresentasikan volume produk yang terdegradasi selama periode pemulihan.

### 2.4. Model Degradasi Termal Arrhenius

Degradasi mutu produk biofarmasi mengikuti persamaan Arrhenius yang dimodifikasi:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin), $E_a$ adalah energi aktivasi (~60–80 kJ/mol untuk protein vaksin), $R = 8{,}314$ J/(mol·K), dan $A$ adalah *pre-exponential factor*. Fraksi mutu yang tersisa pada waktu $t$ adalah:

$$S(t) = \exp\left(-\int_{0}^{t} k[T(\tau)]\,d\tau\right)$$

### 2.5. Model Akuisisi Data IoT Sensor DS18B20

Sensor DS18B20 memiliki akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C hingga $+85$ °C dengan resolusi 9–12 bit yang dapat dikonfigurasi. Laju sampling $f_s$ dan latensi transmisi $L_t$ mempengaruhi *detection lag* anomali suhu:

$$t_{detect} = \frac{1}{f_s} + L_t + t_{alert}$$

Untuk sistem manual dengan pencatatan tiap 2 jam, $t_{alert}^{manual} = 7200$ s, sedangkan sistem IoT dengan $f_s = 0{,}033$ Hz (sampling tiap 30 s) dan $L_t \approx 2$ s, menghasilkan $t_{alert}^{IoT} \approx 32$ s.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem resiliensi rantai dingin berbasis IoT mengikuti kerangka Plan-Do-Check-Act (PDCA) yang terdiri atas lima tahapan rekayasa:

**Tahap 1 — Pemetaan Risiko dan Karakterisasi Gangguan.** Identifikasi *failure modes* menggunakan FMEA dengan menghitung *Risk Priority Number* (RPN = S × O × D). Sumber gangguan mencakup: (i) kegagalan kompresor, (ii) keterlambatan distribusi, (iii) paparan suhu lingkungan ekstrem, (iv) kegagalan catu daya, dan (v) *human error* dalam pencatatan manual.

**Tahap 2 — Desain Arsitektur Sensor.** Penempatan sensor DS18B20 mengikuti prinsip *three-zone monitoring*: zona inlet evaporator, zona tengah *cold box*, dan zona outlet/dekat produk. Hal ini memastikan terdeteksinya *thermal gradient* yang dapat merusak produk meski suhu rata-rata masih dalam batas.

**Tahap 3 — Integrasi Protokol 1-Wire dan Gateway.** Sensor DS18B20 menggunakan protokol 1-Wire dengan *unique 64-bit serial number*, memungkinkan multiple *daisy-chain* pada satu pin mikrokontroler. Gateway ESP32/NodeMCU mentransmisikan data ke *cloud server* melalui MQTT atau HTTP dengan enkripsi TLS.

**Tahap 4 — Penerapan Sistem Peringatan Dini.** Ambang batas peringatan disusun bertingkat: *warning* pada deviasi 1 °C, *critical alert* pada deviasi 2 °C, dan *emergency* pada deviasi 3 °C. Notifikasi dikirim ke apoteker melalui SMS, aplikasi mobile, dan sirene lokal.

**Tahap 5 — Audit dan Kalibrasi Berkala.** Sensor dikalibrasi tiap 6 bulan menggunakan *ice-bath calibration* (0 °C reference) dan *dry-block calibrator* dengan toleransi $\pm 0{,}2$ °C, lebih ketat dari akurasi intrinsik sensor.

Diagram alir logika keputusan sistem peringatan dini mengikuti *fault-tolerant control loop*:

```
[Sensor DS18B20] → [Filter Kalman] → [Pembanding T(t) vs T*]
                                          │
                            ┌─────────────┼─────────────┐
                            ▼             ▼             ▼
                       |ΔT| < 1°C   1≤|ΔT|<2°C    |ΔT| ≥ 2°C
                       (Normal)     (Warning)    (Critical)
                            │             │             │
                            ▼             ▼             ▼
                       [Logging]    [SMS+Log]    [Sirene+Evac+Recall]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *cold chain box* berisi 200 vial vaksin dengan nilai total Rp 50.000.000, dioperasikan oleh UPTD Farmasi Dinkes Siak. Suhu *setpoint* $T^* = 5$ °C dengan toleransi $\pm 3$ °C. Pada pukul 10:00, terjadi kegagalan kompresor sehingga suhu naik dengan laju 0,8 °C/menit. Pada pukul 10:18, suhu telah mencapai 14,4 °C (deviasi 9,4 °C).

### 4.1. Perhitungan Degradasi Mutu (Arrhenius)

Parameter Arrhenius untuk protein vaksin tipikal: $E_a =