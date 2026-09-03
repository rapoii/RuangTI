# 1910 — Model Ketahanan (Resilience) Cold Chain Logistics untuk Produk Mudah Rusak: Integrasi Sistem Pemantauan IoT Real-Time sebagai Mitigasi Risiko Rantai Pasok Kritis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dalam rekayasa rantai pasok yang mengelola pergerakan barang-barang termolabil (temperatur-sensitif) seperti vaksin, produk biofarmasi, produk darah, hortikultura segar, makanan laut, dan dairy dari titik produksi hingga titik konsumsi akhir. Menurut Khurshid dan Siddiqui (2024) dalam paper *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), gangguan pada cold chain tidak hanya menurunkan kualitas produk tetapi juga menimbulkan risiko keselamatan pasien/konsumen, kerugian finansial multi-miliar dolar, serta disrupsi pada program kesehatan masyarakat berskala besar. Sebagai contoh, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang sia-sia setiap tahun akibat cold chain failure, dengan nilai ekonomis yang sangat substansial terutama di negara berkembang.

Pada tataran operasional di Indonesia, realitas kerentanan cold chain ini dikonfirmasi oleh Putra, Defit, dan Nurcahyo (2024) dalam studi mereka di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Penulis mengidentifikasi dua masalah struktural yang persisten: pertama, cold chain box yang berfungsi sebagai media penyimpanan dan pendingin vaksin belum配备 alat pemantauan suhu secara *real-time* sehingga apoteker tidak menerima peringatan dini apabila terjadi kenaikan suhu akibat kerusakan internal (kompresor, evaporator, kegagalan refrigerant) maupun kerusakan eksternal (gangguan daya listrik, human error pada pintu, paparan lingkungan ambient). Kedua, proses pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet* kertas oleh apoteker, yang notabene menciptakan jeda waktu rata-rata 60–120 menit antara anomali suhu dan deteksinya. Jeda deteksi ini sangat krusial karena mayoritas vaksin hidup (live attenuated) seperti polio, campak, BCG, dan rotavirus memiliki toleransi thermal window yang sangat sempit pada rentang 2°C–8°C. Pelanggaran rentang ini，哪怕 hanya selama beberapa jam, dapat memicu degradasi poten secara ireversibel.

Urgensi industri dari integrasi kedua perspektif ini—yakni model ketahanan (resilience modeling) pada tataran strategis dan sistem IoT monitoring pada tataran operasional—menjadi semakin nyata ketika dimasukkan ke dalam kerangka Industrial Engineering. cold chain adalah *cyber-physical system* yang menggabungkan variabel mekanis (sistem refrigerasi), variabel logistik (routing, kapasitas, lead time), variabel manusia (kepatuhan SOP apoteker), dan variabel informasi (data suhu, pelacakan). Kegagalan pada salah satu subsistem akan memicu efek domino yang menurunkan integritas produk secara kumulatif. Modul 1910 ini dirancang untuk membekali mahasiswa dan praktisi Teknik Industri dengan perangkat analitis dan prosedural guna merancang, mengukur, dan meningkatkan ketangguhan (resilience) cold chain melalui pendekatan kuantitatif berbasis bukti empiris.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Teori Ketahanan Cold Chain

Khurshid dan Siddiqui (2024) mengusulkan kerangka ketahanan cold chain yang memandang sistem sebagai jaringan multi-echelon dengan kemampuan untuk mempertahankan fungsionalitasnya (functionality) di bawah tekanan gangguan (disruption). Ketahanan didefinisikan secara matematis sebagai rasio kinerja aktual terhadap kinerja nominal yang dinormalisasi sepanjang horizon waktu gangguan.

Misalkan $P(t)$ menyatakan kinerja sistem pada waktu $t$ dan $P_{nom}$ kinerja nominal, maka fungsi kinerja ternormalisasi didefinisikan sebagai:

$$\rho(t) = \frac{P(t)}{P_{nom}}, \quad \rho(t) \in [0, 1]$$

Saat gangguan terjadi pada waktu $t_d$ (detection time of disruption), kinerja menurun ke level minimum $\rho_{min}$, kemudian mengalami fase pemulihan hingga mencapai kembali level acceptable $\rho_{rec}$ pada waktu $t_r$. Fungsi pemulihan (recovery function) secara stokastik dapat dimodelkan sebagai:

$$\rho(t) = \rho_{min} + (1 - \rho_{min}) \cdot \left(1 - e^{-\lambda(t - t_d)}\right), \quad t_d \leq t \leq t_r$$

di mana $\lambda$ adalah laju pemulihan (recovery rate) yang bergantung pada kapabilitas sistem dan kecepatan respons insiden. Semakin besar $\lambda$, semakin cepat sistem kembali ke kapasitas nominal.

### 2.2 Indeks Kerugian Ketahanan (Resilience Loss Index)

Total Resilience Loss (RL) selama periode disrupsi dihitung sebagai area di bawah kurva kehilangan kinerja (resilience triangle):

$$RL = \int_{t_d}^{t_r} \left[1 - \rho(t)\right] dt = \int_{t_d}^{t_r} (1 - \rho_{min}) \cdot e^{-\lambda(t - t_d)} \, dt$$

Dengan menyelesaikan integral tersebut secara analitik:

$$RL = \frac{(1 - \rho_{min})}{\lambda} \left[1 - e^{-\lambda(t_r - t_d)}\right]$$

Parameter $(t_r - t_d)$ adalah *Time-to-Recovery* (TTR) dan $\rho_{min}$ adalah *Performance Degradation Depth*. Semakin rendah $RL$, semakin resilien sistem cold chain tersebut.

### 2.3 Model Degradasi Potensi Vaksin (Arrhenius Kinetics)

Kerusakan thermal pada vaksin dan produk biofarmasi mengikuti kinetika Arrhenius. Laju degradasi $k$ bergantung pada suhu absolut $T$ dengan persamaan:

$$k(T) = A \cdot e^{-E_a / (R \cdot T)}$$

di mana $A$ adalah pre-exponential factor, $E_a$ energi aktivasi (J/mol), dan $R$ konstanta gas universal (8,314 J/mol·K). Untuk vaksin pada rentang termal window-nya, fraksi poten yang tersisa setelah waktu $\Delta t$ paparan suhu dihitung sebagai:

$$P_{remaining} = e^{-k(T) \cdot \Delta t}$$

Sebagai contoh kuantitatif, degradasi vaksin polio pada suhu 25°C (pelanggaran 17°C dari batas atas 8°C) berlangsung 10–20 kali lebih cepat dibandingkan pada suhu 8°C. Dengan $\Delta t = 4$ jam, potensi dapat turun hingga 30–50% yang melampaui ambang batas WHO (minimum 90% potency).

### 2.4 Karakteristik Sensor IoT DS18B20

Putra et al. (2024) memilih sensor DS18B20 sebagai elemen akuisisi data. Spesifikasi teknisnya relevan dalam pemodelan:

- Akurasi: $\sigma_{sensor} = \pm 0.5°C$ pada rentang $-10°C$ hingga $+85°C$
- Resolusi: 9–12 bit (konfigurasi default 12 bit = 0,0625°C)
- Interface: 1-Wire (single-wire digital)
- Response time: $\tau_{response} \leq 750$ ms

Total galat pengukuran sistem monitoring adalah:

$$\sigma_{total} = \sqrt{\sigma_{sensor}^2 + \sigma_{ADC}^2 + \sigma_{kalibrasi}^2}$$

### 2.5 Model Probabilistik Kegagalan Cold Chain

Reliabilitas peralatan refrigerasi cold chain umumnya mengikuti distribusi eksponensial dengan *Mean Time Between Failure* (MTBF) tertentu:

$$R(t) = e^{-\lambda t}, \quad \text{MTBF} = \frac{1}{\lambda}$$

Untuk cold chain box berkualitas industri dengan MTBF = 8.000 jam (~333 hari), laju kegagalan $\lambda \approx 1,25 \times 10^{-4}$ per jam. Probabilitas kegagalan dalam periode misi $T_{mission}$ adalah:

$$P_{fail}(T_{mission}) = 1 - e^{-\lambda T_{mission}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Cold Chain Berbasis IoT

Berdasarkan pendekatan Putra et al. (2024), arsitektur IoT monitoring cold chain box疫苗 tersusun atas lima lapisan:

1. **Lapisan Sensor:** Multiple DS18B20 probes ditempatkan pada zona-zona kritis (dekat evaporator, tengah rak, pintu) untuk mendeteksi gradien suhu spasial.
2. **Lapisan Akuisisi Data:** Mikrokontroler (Arduino/ESP32) membaca data suhu via protokol 1-Wire dengan frekuensi sampling $f_s = 1$ Hz hingga $10$ Hz.
3. **Lapisan Edge Processing:** Filter digital (moving average dengan window $N = 10$ atau Kalman filter) untuk mereduksi noise sensor sebelum transmisi.
4. **Lapisan Komunikasi & Cloud:** Transmisi via WiFi/GSM ke dashboard cloud (Firebase, AWS IoT) yang menyimpan time-series data.
5. **Lapisan Alarm & Notifikasi:** *Threshold-based alerting* dengan trigger otomatis jika $T > 8°C$ atau $T < 2°C$, disertai notifikasi real-time ke apoteker via SMS/mobile app.

### 3.2 SOP Cold Chain Resilience (Integrasi Model Khurshid & Siddiqui 2024