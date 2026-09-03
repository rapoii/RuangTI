# 2214 — Model Ketahanan (Resilience) Cold Chain Logistics dan Sistem Monitoring Suhu Cerdas IoT untuk Produk Mudah Rusak & Vaksin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup sektor farmasi (vaksin, produk biologis), pangan (daging, ikan, susu, buah), dan花卉 (bunga potong). Rantai dingin ini mempertahankan integritas termal produk dalam rentang suhu presisi—misalnya 2°C–8°C untuk sebagian besar vaksin rutin menurut *World Health Organization (WHO) PQS E006*—sejak titik produksi hingga titik konsumsi akhir. Setiap pelanggaran suhu di luar ambang batas yang ditentukan akan memicu degradasi kualitas ireversibel, menurunkan *potency* atau masa simpan, dan pada akhirnya menimbulkan kerugian finansial, klinis, dan reputasi yang signifikan.

Khurshid dan Siddiqui (2024) dalam papernya "A Resilience Model for Cold Chain Logistics of Perishable Products" (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa pendekatan konvensional yang berfokus pada *reliability* (keandalan statis) saja tidak cukup untuk menghadapi dinamika disrupsi modern—seperti pemadaman listrik, kerusakan kompresor, keterlambatan distribusi, dan variasi suhu ambient—yang semuanya memiliki karakteristik *low-frequency high-impact*. Mereka mengusulkan paradigma **resilience engineering** yang tidak hanya menilai kemampuan sistem bertahan terhadap gangguan (*absorptive capacity*), tetapi juga kemampuan beradaptasi (*adaptive capacity*) dan memulihkan diri (*restorative capacity*).

Di sisi operasional, Putra, Defit, dan Nurcahyo (2024) dalam artikel "Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20" (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan permasalahan riil pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak. Sistem penyimpanan vaksin di fasilitas tersebut menggunakan *cold chain box* yang tidak dilengkapi alat pemantauan suhu *realtime*, sehingga peringatan dini kepada apoteker tidak tersedia ketika suhu naik akibat kerusakan internal (kompresor, kebocoran refrigerant) maupun kerusakan eksternal (pintu terbuka, pemadaman listrik). Lebih lanjut, pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet*—prosedur yang rentan terhadap *human error*, keterlambatan respons, dan hilangnya jejak audit digital.

Integrasi kedua literatur ini memperlihatkan satu kesimpulan strategis: **tanpa model resilience yang terukur secara kuantitatif dan tanpa visibilitas data suhu secara kontinu, cold chain menjadi *single point of failure* yang merugikan pemangku kepentingan.** Konteks industri ini menjadi semakin relevan pasca-COVID-19, di mana volume distribusi vaksin global meningkat 5–10 kali lipat dan kompleksitasnya menuntut arsitektur monitoring berbasis Internet of Things (IoT).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resilience Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui (2024) mengajukan **Resilience Function** $R(t)$ yang mengukur tingkat fungsionalitas sistem terhadap waktu selama dan setelah disrupsi. Formulasi umumnya:

$$R(t) = \frac{Q(t)}{Q_{\text{nominal}}} \cdot \mathbb{1}_{\{t \geq t_0\}} \cdot \left(1 - e^{-\lambda(t - t_0)}\right)$$

di mana:
- $Q(t)$ = kualitas produk terukur pada waktu $t$ (misal: % *potency* tersisa untuk vaksin, atau TVB-N/Total Volatile Basic Nitrogen untuk ikan),
- $Q_{\text{nominal}}$ = kualitas nominal produk pada kondisi ideal,
- $t_0$ = waktu onset disrupsi,
- $\lambda$ = laju pemulihan (recovery rate, satuan: jam$^{-1}$),
- $\mathbb{1}_{\{\cdot\}}$ = fungsi indikator.

Metrik integral *Resilience Loss* didefinisikan sebagai area di bawah kurva kehilangan fungsionalitas:

$$\mathcal{L}_R = \int_{t_0}^{t_0 + T_{\text{rec}}} \left(1 - R(t)\right) dt$$

dengan $T_{\text{rec}}$ adalah *recovery time*. Semakin kecil $\mathcal{L}_R$, semakin resilien sistem cold chain.

### 2.2 Degradasi Kinetik Produk (Arrhenius-Type Model)

Degradasi produk mudah rusak遵守 *Arrhenius kinetics*. Untuk produk biologis, laju kehilangan mutu $k$ adalah:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

dengan $A$ = faktor pra-eksponensial, $E_a$ = energi aktivasi (J/mol), $R$ = konstanta gas universal 8,314 J/(mol·K), dan $T$ = suhu absolut (K). Laju degradasi meningkat eksponensial ketika suhu menyimpang dari nilai referensi.

Konsentrasi zat aktif $C(t)$ mengikuti persamaan orde satu:

$$C(t) = C_0 \cdot e^{-k(T) \cdot t}$$

Untuk vaksin yang kehilangan *potency* 5% per jam pada suhu 25°C, parameter tipikal: $A \approx 1{,}5 \times 10^{12}$ jam$^{-1}$ dan $E_a \approx 75$ kJ/mol.

### 2.3 Karakteristik Sensor DS18B20 (Putra et al., 2024)

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) memiliki karakteristik:
- Rentang pengukuran: $-55°C$ sampai $+125°C$,
- Akurasi: $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$,
- Resolusi: 9–12 bit (dikonfigurasi, setara dengan 0,0625°C pada resolusi 12-bit),
- Protokol: 1-Wire (single data line, parasitic power),
- *Time to digital conversion*: maksimum 750 ms pada resolusi 12-bit.

Resolusi suhu terukur dari DS18B20 diberikan oleh:

$$\Delta T_{\text{LSB}} = \frac{T_{\max} - T_{\min}}{2^{n_{\text{bits}}}} = \frac{125 - (-55)}{2^{12}} = 0{,}0625°C$$

dengan $n_{\text{bits}}$ = jumlah bit resolusi ADC internal sensor.

### 2.4 Model Probabilitas Kegagalan Multi-Node

Untuk cold chain dengan $N$ titik kritis (simpul: freezer, refrigerated truck, cold room, cold chain box), probabilitas keberhasilan keseluruhan:

$$P_{\text{system}} = \prod_{i=1}^{N} p_i(t) = \prod_{i=1}^{N} e^{-\int_0^t \lambda_i(\tau) d\tau}$$

di mana $p_i(t)$ adalah reliabilitas simpul ke-$i$ dan $\lambda_i(\tau)$ adalah *hazard rate* yang bergantung waktu. Pada pendekatan resilience, $\lambda_i$ tidak konstan melainkan meningkat selama disrupsi dan menurun setelah pemulihan.

### 2.5 Mean Time Between Disruptions dan Recovery Time

MTTR (Mean Time To Recovery) didefinisikan sebagai ekspektasi waktu pemulihan:

$$\text{MTTR} = \mathbb{E}[T_{\text{rec}}] = \int_0^\infty t \cdot f_{T_{\text{rec}}}(t) \, dt$$

dengan $f_{T_{\text{rec}}}(t)$ = distribusi probabilitas waktu pemulihan. Untuk sistem IoT-enabled seperti rancangan Putra et al. (2024), MTTR dapat berkurang signifikan karena deteksi anomali menjadi hampir instan dibanding sistem *log sheet* manual (rata-rata delay 2 jam).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi cold chain yang resilien mengikuti kerangka 4-fase menurut Khurshid & Siddiqui (2024) yang dipadukan dengan arsitektur IoT Putra et al. (2024):

**Fase 1 — Identifikasi & Pemetaan Risiko (Hazard Mapping):**
1. Inventarisasi seluruh simpul cold chain (*node mapping*) dari *manufacturer* hingga *end-user*.
2. Penentuan *critical control points* (CCP) berdasarkan analisis Pareto suhu historis.
3. Klasifikasi ancaman: *equipment failure*, *human error*, *environmental*, *cyber-physical*.

**Fase 2 — Instrumentasi IoT (berdasarkan Putra et al., 2024):**
Arsitektur sistem terdiri dari empat lapisan:
1. *Perception Layer*: Sensor DS18B20 ditempatkan di dalam cold chain box, terhubung ke mikrokontroler (ESP32/NodeMCU) melalui protokol 1-Wire.
2. *Network Layer*: Transmisi data via WiFi/MQTT ke *cloud server* (misal: *Firebase*, *ThingsBoard*).
3. *Processing Layer*: Logika *threshold alert*—jika $T_{\text{read}} > T_{\max}$ (mis. 8°C untuk vaksin), sistem mengirim notifikasi otomatis ke apoteker via *Telegram Bot API* atau SMS gateway.
4. *Application Layer*: *Dashboard* visualisasi time-series dengan *automatic log* menggantikan pencatatan manual 2-jam.

Standar pemasangan mengikuti prinsip kalibrasi: setiap sensor DS18B20 harus dibandingkan dengan *reference thermometer* bersertifikat (sertifikat kalibrasi ISO/IEC 17025) dengan toleransi deviasi $\leq 0{,}3°C$.

**Fase 3 — Pemodelan Resilience & Simulasi:**
- Pembangunan *Markov chain* transisi status: $\mathcal{S} = \{S_0 \text{ (normal)}, S_1 \text{ (warning)}, S_2 \text{ (disruption)}, S_3 \text{ (recovery)}, S_4 \text{ (catastrophic)}\}$,
- Monte Carlo simulation untuk estimasi $\mathcal{L}_R$ dan $T_{\text{rec}}$ pada skenario *worst-case* (mis. pemadaman listrik 6 jam di suhu ambient 35°C),
- Penetapan *Recovery Time Objective* (RTO): misalnya $T_{\text{RTO}} \leq 30$ menit untuk cold chain box vaksin.

**Fase 4 — SOP Pemulihan & Continuous Improvement:**
- Prosedur *immediate response*: aktivasi *backup power* (genset/UPS) dalam $\leq 15$ menit,
- Prosedur *secondary containment*: transfer produk ke unit cadangan,
- *Post-incident review*: analisis akar masalah dengan *5-Whys* dan pembaruan SOP.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus UPTD Dinas Kesehatan Kabupaten Siak (Putra et al., 2024)

Misalkan UPTD Farmasi Kabupaten Siak mengelola 12 unit *cold chain box* berisi 1.200 vial vaksin measles-rubella (MR). Spesifikasi:
- Rentang suhu aman: $2°C \leq T \leq 8°C$,
- Volume cold chain box: 25 liter,
- Suhu ambient rerata Kabupaten Siak: $31°C \pm 4°C$.

**Langkah 1 — Perhitungan Degradasi Saat Disrupsi (kerusakan kompresor selama 4 jam):**

Asumsikan suhu dalam box naik secara eksponensial menuju suhu ambient sesuai *Newton's law of cooling*:

$$T_{\text{box}}(t) = T_{\text{amb}} - (T