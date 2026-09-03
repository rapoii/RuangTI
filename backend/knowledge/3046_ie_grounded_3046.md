# 3046 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak (Perishable Products) dan Integrasi Sistem Pemantauan Suhu Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok global yang mengelola produk mudah rusak (*perishable products*) seperti vaksin, produk biofarmasi, makanan beku, serta produk hortikultura segar. Gangguan sekecil apapun pada rentang suhu yang dipersyaratkan—misalnya pada kisaran 2°C–8°C untuk sebagian besar vaksin sensitif termal—dapat menurunkan efikasi produk secara ireversibel dan menimbulkan kerugian ekonomi, sosial, serta kesehatan masyarakat yang signifikan. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa resiliensi cold chain bukan sekadar kemampuan mempertahankan suhu, melainkan kapasitas sistem untuk menyerap (*absorb*), beradaptasi (*adapt*), dan pulih (*recover*) dari berbagai jenis disrupsi: kegagalan kompresor, keterlambatan distribusi, pemadaman listrik, kesalahan prosedur operator, hingga guncangan eksternal seperti bencana alam dan pandemi.

Dalam konteks nasional, Putra, Defit, dan Nurcahyo (2024) mendokumentasikan kasus nyata di Dinas Kesehatan Kabupaten Siak (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang menemukan dua masalah fundamental pada *cold chain box* vaksin: (1) tidak tersedianya alat pemantauan suhu secara *real-time* yang mampu memberikan peringatan otomatis kepada apoteker ketika suhu melebihi ambang batas—baik karena kerusakan internal (kegagalan kompresor, kebocoran refrigeran) maupun eksternal (paparan matahari, pembukaan pintu terlalu sering); serta (2) pencatatan suhu yang masih dikerjakan secara manual setiap 2 jam pada *log sheet*, menciptakan kelemahan akurasi, keterlambatan deteksi, dan jejak audit (*audit trail*) yang tidak kontinu. Kedua kelemahan ini memicu kebutuhan integrasi model resiliensi kuantitatif dengan arsitektur instrumentasi cerdas.

Urgensi rekayasa industri pada modul 3046 ini setidaknya dipicu oleh tiga faktor makro. Pertama, valuasi ekonomi: Organisasi Kesehatan Dunia (WHO) memperkirakan lebih dari 50% vaksin global terbuang sia-sia akibat *cold chain failure*; pada tataran industri makanan, kerugian serupa mencapai miliaran dolar AS per tahun. Kedua, kompleksitas operasional: cold chain modern melibatkan multi-echelon nodes (pabrik → gudang ber-AC → *reefer truck* → *cold box* → puskesmas/konsumen akhir) di mana setiap node membawa profil risiko termal berbeda. Ketiga, transformasi digital: integrasi sensor IoT seperti DS18B20, komunikasi nirkabel (LoRa/Wi-Fi/GSM), dan komputasi tepi (*edge computing*) memungkinkan transisi dari model reaktif menjadi model prediktif-preskriptif. Oleh karena itu, modul ini menyintesiskan kerangka resiliensi stokastik Khurshid & Siddiqui (2024) dengan arsitektur teknis yang divalidasi oleh Putra et al. (2024) untuk menghasilkan modul pembelajaran yang utuh secara teoritis, teknis, dan manajerial.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi yang dibangun merujuk pada kerangka Khurshid & Siddiqui (2024), yang mendefinisikan **Indeks Resiliensi Rantai Dingin (CRI)** sebagai fungsi dari degradasi kinerja sistem dan waktu pemulihan. Formulasi generik yang digunakan adalah:

$$ CRI = \frac{\int_{t_0}^{t_0 + T_{rec}} Q(t) \, dt}{Q_0 \cdot T_{rec}} $$

di mana $Q(t)$ adalah fungsi kualitas produk (skor 0–1) terhadap waktu, $Q_0$ adalah kualitas awal, $T_{rec}$ adalah total periode pemulihan, dan $t_0$ adalah waktu onset disrupsi. Nilai $CRI = 1$ menunjukkan resiliensi sempurna (tidak ada degradasi); $CRI = 0$ menunjukkan kegagalan total.

Untuk degradasi suhu selama *excursion* termal, model Arrhenius banyak digunakan untuk memprediksi kehilangan poten produk biofarmasi:

$$ k(T) = A \cdot e^{-E_a / (R \cdot T)} $$

dengan $k(T)$ laju degradasi (satuan waktu⁻¹), $A$ faktor frekuensi Arrhenius, $E_a$ energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T$ suhu absolut (K). Integrasi terhadap profil suhu riil memberikan *cumulative thermal stress*:

$$ \Gamma = \int_{0}^{\tau} k(T(t)) \, dt $$

Jika ambang batas degradasi yang dapat ditoleransi adalah $\Gamma_{max}$, maka waktu maksimum yang diizinkan untuk produk bertahan pada suhu kritis adalah solusi dari:

$$ \tau_{max} = \min\left\{ \tau : \int_{0}^{\tau} k(T(t)) \, dt = \Gamma_{max} \right\} $$

Dari sisi keandalan komponen, probabilitas sensor DS18B20—yang dipakai oleh Putra et al. (2024) dengan akurasi $\pm 0{,}5$°C pada kisaran -10°C hingga +85°C—tetap berfungsi sepanjang misi $t$ mengikuti distribusi eksponensial:

$$ R_s(t) = e^{-\lambda_s t} $$

dengan $\lambda_s$ laju kegagalan sensor. Laju kegagalan keseluruhan sistem cold chain dipengaruhi oleh reliabilitas *cold box*, refrigeran, catu daya, dan jaringan IoT, yang secara seri dapat dimodelkan sebagai:

$$ R_{sys}(t) = \prod_{i=1}^{n} R_i(t) = \exp\left(-\sum_{i=1}^{n} \lambda_i t\right) = e^{-\Lambda_{sys} t} $$

di mana $\Lambda_{sys} = \sum_{i=1}^{n} \lambda_i$ adalah laju kegagalan agregat.

Model keputusan ekonomis untuk investasi IoT monitoring dibangun dengan menyeimbangkan *Cost of Quality* (CoQ). Total biaya yang diharapkan (*Expected Total Cost*, ETC) adalah:

$$ ETC = C_{IoT} + P_f \cdot C_{loss} + P_d \cdot C_{delay} $$

di mana $C_{IoT}$ adalah biaya investasi IoT, $P_f$ probabilitas kegagalan tanpa IoT, $C_{loss}$ nilai produk rusak, $P_d$ probabilitas keterlambatan deteksi, dan $C_{delay}$ biaya operasional keterlambatan. Investasi optimal IoT tercapai ketika $\partial ETC / \partial C_{IoT} = 0$ sesuai titik keseimbangan marjinal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi teknis mengikuti arsitektur tiga lapis yang diadaptasi dari Putra et al. (2024) dan diintegrasikan dengan model resiliensi Khurshid & Siddiqui (2024). Diagram alir SOP mengikuti urutan **Deteksi → Akuisisi → Transmisi → Analisis → Respon → Pemulihan → Audit**.

**Tahap 1: Instrumentasi Sensorik.**
Sensor DS18B20 (resolusi 9–12 bit, akurasi $\pm 0{,}5$°C, protokol 1-Wire) dipasang minimal tiga titik di dalam *cold chain box*: zona inlet evaporator, zona tengah (bulk produk), dan zona outlet. Mikrokontroler (misalnya ESP32/NodeMCU) melakukan akuisisi setiap $\Delta t$ (umumnya 30–60 detik). Kode semu akuisisi:

```
for each sensor_i:
    T_i = read_DS18B20(sensor_i)
    T_i_filtered = moving_average(T_i, window=5)
    push_to_queue(sensor_i, T_i_filtered, timestamp)
```

**Tahap 2: Edge Processing & Deteksi Anomali.**
Ambang batas dikonfigurasi sesuai spesifikasi produk; untuk vaksin umumnya $T_{min} = 2$°C, $T_{max} = 8$°C. Aturan deteksi excursions mengikuti logika:

$$
\text{Alert} =
\begin{cases}
\text{Critical}, & \text{jika } T(t) > T_{max} \text{ atau } T(t) < T_{min} \\
\text{Warning}, & \text{jika } \left|\frac{dT}{dt}\right| > \delta_{rate} \\
\text{Normal}, & \text{lainnya}
\end{cases}
$$

dengan $\delta_{rate}$ ambang laju perubahan suhu (umumnya 0,5°C/menit).

**Tahap 3: Komunikasi & Cloud Logging.**
Data dikirim via Wi-Fi/GSM ke *dashboard* berbasis web/mobile (misalnya Blynk, ThingsBoard, atau custom REST API). Payload JSON memuat `device_id`, `timestamp`, `T_1`, `T_2`, `T_3`, dan `battery_level`. Notifikasi *push* dan SMS dikirim ke apoteker jika status $\neq$ Normal, menggantikan sistem *log sheet* manual setiap 2 jam yang dikeluhkan Putra et al. (2024).

**Tahap 4: Respon & Pemulihan.**
Saat *Critical Alert*, SOP mengaktifkan protokol pemulihan: (a) verifikasi visual oleh apoteker, (b) pengecekan sumber listrik dan kompresor, (c) pemindahan produk ke *cold box* cadangan jika $T > T_{max}$ selama > 15 menit, (d) dokumentasi insiden untuk analisis $\tau_{excursion}$.

**Tahap 5: Audit & Perbaikan Berkelanjutan.**
Data historis dipakai menghitung KPI resiliensi: $CRI$ mingguan, MTTR (*Mean Time To Repair*), dan *First-Time-Right Rate*. Kalibrasi sensor dilakukan setiap 6 bulan dengan *reference thermometer* terkalibrasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi Dinas Kesehatan Kabupaten Siak mengelola 5 *cold chain box* berisi total 1.200 vial vaksin COVID-19 (nilai @Rp 250.000 → total nilai inventaris $V = 1.200 \times 250.000 =$ Rp 300.000.000). Suhu disyaratkan pada kisaran 2°C–8°C. Tanpa sistem IoT, pencatatan dilakukan manual setiap 2 jam.

**Langkah 1 — Penentuan parameter degradasi Arrhenius.**
Untuk vaksin mRNA, energi aktivasi tipikal $E_a = 83{,}7$ kJ/mol, $A = 1{,}8 \times 10^{12}$ jam⁻¹, $R = 8{,}314$ J/(mol·K). Hitung laju degradasi pada suhu referensi $T_{ref} = 277{,}15$ K (4°C):

$$ k(4°C) = 1{,}8 \times 10^{12} \cdot e^{-83700 / (8{,}314 \times 277{,}15)} $$

$$ k(4°C) = 1{,}8 \times 10^{12} \cdot e^{-36{,}30} = 1{,}8 \times 10^{12} \times 1{,}77 \times 10^{-16} = 3{,}19 \times 10^{-4} \text{ jam}^{-1} $$

Pada suhu gangguan $T_{alt} = 298{,}15$ K (25°C, kondisi ruang):

$$ k(25°C) = 1{,}8 \times 10^{12} \cdot e^{-83700 / (8{,}314 \times 298{,}15)} = 1{,}8 \times 10^{12} \cdot e^{-33{,}77} = 1{,}8 \times 10^{12} \times 2{,}27 \times 10^{-15} = 4{,}09 \times 10^{-3} \text{ jam}^{-1} $$

Rasio laju degradasi: $k(25°C)/k(4°C) \approx 12{,}8\times$. Artinya setiap jam pada suhu ruang setara dengan $\approx$ 12,8 jam pada suhu normal—menegaskan mengapa deteksi cepat sangat krusial.

**Langkah 2