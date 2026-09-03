# 1862 — Pemodelan Resiliensi Rantai Dingin Produk Mudah Rusak: Integrasi Model Stokastik dengan Sistem Monitoring IoT Realtime

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup pangan segar, produk farmasi, dan khususnya vaksin yang memerlukan pengendalian suhu presisi sepanjang siklus distribusi. Khurshid dan Siddiqui (2024) dalam artikelnya yang diterbitkan dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menegaskan bahwa pelanggaran terhadap jendela suhu operasional (umumnya $2^\circ\text{C}$–$8^\circ\text{C}$ untuk vaksin menurut WHO PQS) bukan sekadar anomali teknis, melainkan merupakan pemicu degradasi mutu yang bersifat kumulatif dan ireversibel. Kerugian yang ditimbulkan bersifat multidimensi—mulai dari kerugian ekonomi akibat pembuangan stok (*waste*), kerugian sosial berupa morbiditas dan mortalitas pasien, hingga kerugian strategis berupa rusaknya kepercayaan publik terhadap program imunisasi nasional.

Konteks empiris yang sangat relevan dikemukakan oleh Putra, Defit, dan Nurcahyo (2024) dengan DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589) yang mendokumentasikan persoalan nyata pada UPTD Farmasi Dinas Kesehatan Kabupaten Siak. Mereka menemukan bahwa *cold chain box* yang digunakan sebagai media penyimpanan vaksin belum dilengkapi sistem pemantauan suhu secara *realtime*, sehingga kenaikan suhu akibat kerusakan internal (misalnya kegagalan kompresor, kebocoran seal, degradasi isolasi termal) maupun kerusakan eksternal (paparan matahari, pembukaan pintu berulang, pemadaman listrik) tidak segera terdeteksi. Kondisi ini diperparah oleh sistem pencatatan manual yang dilakukan setiap dua jam sekali pada *log sheet*, sehingga menciptakan *blind window* sepanjang 119 menit yang berpotensi menyembunyikan pelanggaran suhu kritis.

Integrasi antara kerangka resiliensi stokastik ala Khurshid dan Siddiqui (2024) dengan arsitektur IoT yang dikembangkan Putra dkk. (2024) menjadi迫切 karena dua alasan fundamental. Pertama, secara teoretis model resiliensi membutuhkan data granular waktu-nyata tentang pelanggaran suhu untuk mengkalibrasi fungsi kerugian dan laju pemulihan sistem. Kedua, secara operasional, sensor DS18B20 berpresisi $\pm 0.5^\circ\text{C}$ dengan protokol *1-Wire* memungkinkan akuisisi data *streaming* yang sangat diperlukan untuk membangun *digital twin* termal dari *cold chain box*. Urgensi industri diperkuat oleh fakta bahwa Organisasi Kesehatan Dunia (WHO) memperkirakan hingga 50% vaksin global terbuang sia-sia akibat kerusakan rantai dingin, sementara nilai transaksi produk farmasi rantai dingin diproyeksikan mencapai USD 380 miliar pada 2028 dengan Compound Annual Growth Rate (CAGR) sekitar 8,5%. Oleh karena itu, pengembangan model resiliensi yang kuantitatif dan aplikatif bukan sekadar kontribusi akademis, melainkan kebutuhan strategis bagi keberlanjutan sistem kesehatan dan keamanan pangan global.

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi yang digunakan dalam literatur utama mengadopsi **Resilience Triangle Framework** yang dipopulerkan oleh Bruneau dkk. dan selanjutnya diformalisasi oleh Khurshid dan Siddiqui (2024) untuk konteks rantai dingin. Inti dari model ini adalah kuantifikasi **kehilangan kinerja sistem** $L$ sebagai fungsi dari waktu deteksi gangguan $t_0$, waktu pemulihan $t_r$, dan lintasan degradasi.

Secara matematis, fungsi kerugian kumulatif didefinisikan sebagai:

$$L = \int_{t_0}^{t_0+t_r} Q(t) \cdot C[T(t)] \, dt$$

di mana $Q(t)$ adalah kualitas produk yang tersisa pada waktu $t$ (dinormalisasi antara 0 dan 1), dan $C[T(t)]$ adalah fungsi biaya yang bergantung pada suhu absolut $T(t)$. Untuk produk farmasi, fungsi biaya dapat dimodelkan dengan bentuk *Arrhenius*-like:

$$C[T(t)] = C_0 \cdot e^{k \cdot \max(0,\, T(t)-T_{ref})^2}$$

dengan $C_0$ adalah biaya satuan produk, $k$ adalah konstanta degradasi termal spesifik produk, dan $T_{ref}$ adalah batas atas suhu aman (misalnya $8^\circ\text{C}$ untuk vaksin). Eksponen kuadrat dipilih untuk mencerminkan karakteristik degradasi non-linier yang semakin cepat seiring kenaikan suhu.

**Indeks Resiliensi** $\mathcal{R}$ kemudian didefinisikan sebagai rasio antara kualitas yang berhasil dipertahankan terhadap total potensi kerugian jika tidak ada intervensi:

$$\mathcal{R} = 1 - \frac{L}{L_{max}}$$

dengan $L_{max} = C_0 \cdot Q_0 \cdot (t_0 + t_r)$ sebagai kerugian maksimum skenario terburuk. Nilai $\mathcal{R}$ mendekati 1 mengindikasikan sistem sangat resilien, sementara $\mathcal{R} < 0.5$ mengindikasikan kerentanan kritis.

Untuk kebutuhan *real-time monitoring* berbasis IoT yang didokumentasikan Putra dkk. (2024), probabilitas deteksi gangguan $P_d$ dimodelkan dengan distribusi Poisson:

$$P_d(\Delta t) = 1 - e^{-\lambda \Delta t}$$

di mana $\Delta t$ adalah interval sampling sensor dan $\lambda$ adalah laju rata-rata kejadian pelanggaran suhu per jam. Dengan sensor DS18B20 yang mampu melakukan sampling setiap $\Delta t = 10$ detik (atau 0,00278 jam), dan asumsi $\lambda = 0,5$ kejadian per jam, probabilitas deteksi menjadi:

$$P_d(0,00278) = 1 - e^{-0,5 \cdot 0,00278} \approx 1,388 \times 10^{-3}$$

Meskipun tampak kecil per sampling, akumulasi over time menghasilkan peluang deteksi yang mendekati sempurna sebelum batas waktu kritis tercapai.

Lebih lanjut, waktu pemulihan sistem $t_r$ mengikuti distribusi log-normal yang umum dalam rekayasa keandalan:

$$f(t_r) = \frac{1}{t_r \sigma \sqrt{2\pi}} \exp\left(-\frac{(\ln t_r - \mu)^2}{2\sigma^2}\right)$$

dengan parameter $\mu$ dan $\sigma$ yang dikalibrasi dari data historis kegagalan sistem pendingin.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi terintegrasi dari kedua literatur memerlukan SOP berlapis yang mencakup arsitektur sensor, protokol komunikasi, algoritma deteksi anomali, dan prosedur tanggap darurat. Putra dkk. (2024) mengusulkan arsitektur empat lapis sebagai berikut:

```
[Lapisan 1: Akuisisi Data]
Sensor DS18B20 → Mikrokontroler ESP32 (NodeMCU)
       ↓ (protokol 1-Wire, resolusi 12-bit, akurasi ±0.5°C)

[Lapisan 2: Edge Processing]
Validasi data → Moving Average Filter (window 5 sampel)
       ↓ (threshold: T > 8°C atau T < 2°C → flag anomali)

[Lapisan 3: Transmisi]
WiFi 802.11 b/g/n → MQTT Broker (QoS 1)
       ↓ (payload JSON: {ts, temp, hum, status})

[Lapisan 4: Cloud & Dashboard]
InfluxDB (time-series) → Grafana (visualisasi)
       ↓
Notifikasi: Telegram Bot / SMS Gateway ke Apoteker
```

Diagram alir keputusan (*decision flow*) untuk algoritma *real-time* adalah:

```
START → Baca Suhu T(t)
   ↓
T(t) ∈ [2°C, 8°C]? 
   ├── YA → Log Normal → Loop
   └── TIDAK → Hitung ΔT = |T(t) - T_boundary|
              ↓
              ΔT > 2°C? 
              ├── YA → ALERT LEVEL 2 (SMS + Sirene)
              └── TIDAK → ALERT LEVEL 1 (Telegram)
                          ↓
                       Start Timer t_r → Aktivasi Prosedur Pemulihan
                          ↓
                       T(t) kembali normal? 
                       ├── YA → Hitung L & R → Loop
                       └── TIDAK → t_r > 30 menit → Eskalasi Level 3
```

Standar Prosedur Operasional (SOP) yang dihasilkan dari integrasi kedua paper mengikuti protokol WHO PQS E006 dan ISO 23412:2020 (*Controlled temperature chain*). Tahapan kunci meliputi: (1) **Kalibrasi sensor** setiap 90 hari menggunakan *ice-bath calibration* pada $0.0^\circ\text{C}$ dengan toleransi $\pm 0.3^\circ\text{C}$; (2) **Verifikasi sistem** harian berupa *self-test* hubungan sensor–mikrokontroler; (3) **Audit data mingguan** untuk mendeteksi *drift* sensor; (4) **Simulasi kegagalan bulanan** dengan injeksi anomali termal terkontrol; (5) **Pelaporan berkala** ke otoritas regulator (BPOM/MOH) sesuai pedoman Pharmacovigilance.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Studi kasus mengadaptasi skenario UPTD Farmasi Dinas Kesehatan Kabupaten Siak yang dilaporkan Putra dkk. (2024). Asumsikan sebuah *cold chain box* berkapasitas 50 vial vaksin DPT-HepB-Hib, dengan parameter operasional sebagai berikut:

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Suhu referensi batas atas | $T_{ref}$ | $8^\circ\text{C}$ |
| Suhu referensi batas bawah | $T_{min}$ | $2^\circ\text{C}$ |
| Harga satuan vial | $C_0$ | Rp 95.000 |
| Konstanta degradasi | $k$ | $0,015 \text{ }^\circ\text{C}^{-2}$ |
| Kualitas awal | $Q_0$ | 1,00 (50 vial utuh) |
| Sampling interval IoT | $\Delta t$ | 10 detik |

**Skenario:** Gempatu daya PLN terjadi pada pukul 10:00 WIB, suhu naik secara linier dari $6^\circ\text{C}$ ke $11^\circ\text{C}$ dalam 18 menit. Petugas menerima notifikasi pada menit ke-2 (berkat IoT) dan generator menyala kembali pada menit ke-22. Tentukan kerugian total dan indeks resiliensi sistem.

**Langkah 1: Profil suhu sebagai fungsi waktu**

Karena kenaikan dianggap linier: $T(t) = 6 + \frac{11-6}{18} t = 6 + 0,278 t$ untuk $t \in [0, 18]$ menit, lalu turun kembali secara eksponensial $T(t) = 11 \cdot e^{-0,15(t-18)}$ untuk $t > 18$ menuju steady state $8^\circ\text{C}$.

**Langkah 2: Deteksi pelanggaran**

Suhu melewati $T_{ref} = 8^\circ\text{C}$ ketika $6 + 0,278 t_0 = 8$, sehingga $t_0 = 2,16$ menit. Dengan IoT aktif ($\Delta t = 10$ detik), pelanggaran terdeteksi hampir seketika. Tanpanya (sistem manual 2 jam), $t_0 = 120$ menit—sangat terlambat.

**Langkah 3: Waktu pemulihan**

Suhu kembali ke $8^\circ\text{C}$ ketika $11 e^{-0,15(t_r-18)} = 8$, sehingga $t_r - 18 = \frac{\ln(11/8)}{0,15} = \frac{0,318}{0,15} = 2,12$ menit, sehingga $t_r = 20,12$ menit dari mulai pelanggaran. Total *recovery time* dari $t_0$ hingga normal: $\approx 18$ menit.

**Langkah 4: Perhitungan kerugian kumulatif dengan IoT**

Karena $Q(t) \approx 1$ untuk pelanggaran singkat (degradasi mutu belum material pada rentang menit):

$$L_{IoT} = \int_{2,16}^{20,12} 1 \cdot 95.000 \cdot e^{0,015 (T(t)-8)^2} dt$$

Untuk $t \in [2,16; 18]$, $\Delta T = 0,278 t'$ (di mana $t' = t - 2,16$), sehingga:

$$\int_{0}^{15,84} e^{0,015 (0,278 t')^2} dt' = \int_{0}^{15,84} e^{0,001159 t'^2} dt' \approx \int_{0}^{15,84} (1 + 0,001159 t'^2) dt'$$

$$= 15,84 + 0,001159 \cdot \frac{15,84^3}{3} = 15,84 + 1,532 = 17,37$$

Untuk $t \in [18; 20,12