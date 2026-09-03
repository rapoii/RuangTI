# 1590 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak: Integrasi Sensor IoT dan Pemantauan Suhu Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam jaringan distribusi produk termolabil—mulai dari vaksin, produk biofarmasi, makanan laut, hingga bahan pangan segar—di mana pelanggaran suhu dalam hitungan menit sekalipun dapat memicu degradasi mutu, kerugian finansial masif, dan risiko keselamatan publik. Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menegaskan bahwa resiliensi rantai dingin bukan sekadar kemampuan mempertahankan suhu, melainkan kapasitas sistem untuk **menyerap (absorb)**, **beradaptasi (adapt)**, dan **memulihkan diri (recover)** dari gangguan termal, operasional, maupun eksternal seperti pemadaman listrik, kerusakan unit pendingin, atau延误 pengiriman. Makalah tersebut memperkenalkan kerangka kuantitatif yang memodelkan degradasi mutu sebagai fungsi deviasi suhu kumulatif terhadap ambang batas yang ditentukan oleh regulator.

Di sisi implementasi operasional, Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan kasus nyata di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak, yang bertanggung jawab penuh menjaga kualitas vaksin hingga titik distribusi. Temuan lapangan mereka menunjukkan dua kelemahan struktural yang persisten: (i) *cold chain box* tidak dilengkapi alat pemantauan suhu *real-time* sehingga apoteker tidak mendapat peringatan dini ketika suhu naik akibat kerusakan internal atau eksternal; dan (ii) proses pencatatan suhu masih dikerjakan secara manual setiap 2 jam sekali pada *log sheet*, menciptakan *single point of failure* pada dokumentasi mutu.

Dampak ekonomi dari pelanggaran rantai dingin sangat substansial. Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang sia-sia akibat kegagalan rantai dingin, dengan kerugian tahunan industri biofarmasi mencapai USD 35 miliar akibat *temperature excursions*. Dalam konteks produk pangan, setiap kenaikan suhu 1 °C di atas ambang batas dapat memperpendek umur simpan hingga 10–15% untuk produk berbasis protein, sehingga model resiliensi yang diajukan Khurshid & Siddiqui (2024) menjadi kebutuhan strategis, bukan sekadar akademis. Integrasi kedua literatur ini menghasilkan perspektif holistik: model resiliensi kuantitatif dari paper pertama bertemu dengan kebutuhan instrumentasi IoT (sensor DS18B20 dengan akurasi ±0,5 °C) yang didokumentasikan oleh paper kedua. Dokumen modul ini akan menyintesiskan keduanya menjadi kerangka rekayasa sistem yang dapat diterapkan di industri farmasi, makanan, dan logistik terpadu.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Rantai Dingin (CRI)

Khurshid & Siddiqui (2024) mendefinisikan *Cold Chain Resilience Index* sebagai fungsi tiga komponen utama: kapasitas absorpsi $A_c$, kapasitas adaptasi $A_d$, dan kapasitas pemulihan $R_c$. Secara matematis:

$$\text{CRI} = w_1 \cdot \frac{A_c}{A_c^{\max}} + w_2 \cdot \frac{A_d}{A_d^{\max}} + w_3 \cdot \frac{R_c}{R_c^{\max}}$$

dengan $w_1 + w_2 + w_3 = 1$ adalah bobot prioritas yang ditentukan berdasarkan jenis produk (untuk vaksin: $w_1 = 0{,}40$; $w_2 = 0{,}25$; $w_3 = 0{,}35$).

### 2.2 Mean Kinetic Temperature (MKT)

Parameter MKT mengkuantifikasi efek termal kumulatif terhadap produk termolabil menggunakan persamaan Haynes (1971) yang diadopsi oleh Khurshid & Siddiqui:

$$\text{MKT} = \frac{\Delta H / R}{- \ln \left( \sum_{i=1}^{n} \frac{\tau_i}{Z} e^{-\Delta H / (R \cdot T_i)} \right)}$$

di mana $\Delta H$ adalah energi aktivasi degradasi (J/mol), $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal, $T_i$ adalah suhu dalam Kelvin pada interval $i$, $\tau_i$ adalah durasi pada suhu tersebut, dan $Z = \sum \tau_i$ adalah total waktu observasi. Untuk vaksin standar WHO menggunakan $\Delta H = 83{,}144$ J/mol.

### 2.3 Model Kinetika Degradasi Arrhenius

Laju degradasi mengikuti hukum Arrhenius yang dimodifikasi untuk efek suhu:

$$k(T) = k_{ref} \cdot Q_{10}^{\frac{T - T_{ref}}{10}}$$

dengan $k_{ref}$ adalah laju referensi pada suhu $T_{ref}$, dan $Q_{10}$ adalah faktor akselerasi per kenaikan 10 °C. Putra et al. (2024) menggunakan $Q_{10} = 2{,}5$ untuk vaksin protein standar.

### 2.4 Pemrosesan Sinyal Sensor DS18B20

Sensor DS18B20 memiliki karakteristik: resolusi 9–12 bit, akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C sampai $+85$ °C, dan *self-heating* maksimal 0,1 °C. Hubungan antara data digital mentah dan suhu:

$$T_{aktual} = \frac{N_{raw}}{16} + \text{offset}_{kalibrasi}$$

dengan $N_{raw}$ adalah keluaran ADC 12-bit dan $\text{offset}_{kalibrasi}$ adalah koreksi terhadap *systematic bias* yang ditentukan melalui kalibrasi titik ganda.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur sistem yang diintegrasikan mengikuti protokol terstruktur sebagai berikut:

**Tahap 1 — Pemetaan Risiko Termal (HACCP-Cold Chain).** Lakukan *Failure Mode and Effect Analysis* (FMEA) pada setiap simpul distribusi: pabrik → gudang sentral → gudang regional → *cold chain box* → titik layanan. Untuk setiap simpul, identifikasi $T_{min}$, $T_{max}$, dan $t_{eksposur\_maks}$.

**Tahap 2 — Instrumentasi IoT.** Pasang sensor DS18B20 pada titik kritis (*critical control points*) dalam *cold chain box*. Susun topologi *1-Wire bus* dengan catu daya *parasite power*, mikrokontroler ESP32 sebagai *edge gateway*, dan protokol MQTT untuk transmisi data ke *cloud server* dengan latensi < 3 detik.

**Tahap 3 — Kalibrasi dan Validasi.** Kalibrasi dua titik (*ice point* 0 °C dan *chamber reference* 5 °C) sebelum deployment. Validasi menggunakan metode *paired t-test* terhadap termometer referensi terkalibrasi ISO 17025.

**Tahap 4 — Logika Alarm Berlapis.** Tetapkan ambang sebagai berikut: *warning* pada $|T - T_{set}| \geq 1$ °C selama $\geq 5$ menit; *critical alert* pada $|T - T_{set}| \geq 2$ °C selama $\geq 2$ menit; *emergency* pada pelanggaran > 8 °C selama > 15 menit (konsisten dengan Pedoman WHO PQS E006).

**Tahap 5 — Prosedur Pemulihan (Recovery SOP).** Saat alarm *critical* aktif: (a) verifikasi sensor dengan pembacaan kedua; (b) pindahkan produk ke unit cadangan dalam waktu $\leq 30$ menit; (c) dokumentasikan *deviation report* dengan timestamp dan akar penyebab; (d) hitung ulang MKT untuk menentukan *remaining shelf-life*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Evaluasi resiliensi distribusi 500 vial vaksin COVID-19 (2–8 °C) dari UPTD Farmasi Kabupaten Siak menuju 12 puskesmas dengan *cold chain box* berpendingin *phase change material* (PCM) kapasitas 50 L.

**Parameter Input Industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_{set}$ | 5 | °C |
| $V_{produk}$ | 500 | vial |
| $N_{batch}$ | 1 | batch |
| $C_{vial}$ | Rp 285.000 | Rp/vial |
| $k_{ref}$ | 1,5 × 10⁻⁶ | jam⁻¹ |
| $T_{ref}$ | 5 | °C |
| $Q_{10}$ | 2,5 | – |
| $\Delta H$ | 83.144 | J/mol |
| Durasi distribusi | 14 | jam |

**Langkah 1 — Simulasi Excursion Termal.** Diasumsikan selama 90 menit (1,5 jam) suhu naik dari 5 °C menjadi 11 °C akibat pembukaan pintu berulang. Suhu rata-rata selama periode ekskursi: $\bar{T}_{eks} = (5+11)/2 = 8$ °C.

Hitung MKT dengan menyertakan 12,5 jam pada 5 °C dan 1,5 jam pada 8 °C (rata-rata ekskursi):

$$\text{MKT} = \frac{83144 / 8{,}314}{- \ln \left( \frac{12{,}5}{14} e^{-83144/(8{,}314 \times 278{,}15)} + \frac{1{,}5}{14} e^{-83144/(8{,}314 \times 281{,}15)} \right)}$$

Hitung eksponen: $83144/(8{,}314 \times 278{,}15) = 35{,}933$ dan $83144/(8{,}314 \times 281{,}15) = 35{,}558$.

$$\text{MKT} = \frac{10}{- \ln (0{,}8929 \cdot e^{-35{,}933} + 0{,}1071 \cdot e^{-35{,}558})}$$

Karena $e^{-35{,}933} \approx 2{,}52 \times 10^{-16}$ dan $e^{-35{,}558} \approx 3{,}63 \times 10^{-16}$:

$$\text{MKT} = \frac{10}{- \ln(2{,}25 \times 10^{-16} + 3{,}89 \times 10^{-17})} = \frac{10}{34{,}86} = 0{,}2869 \text{ K}$$

Nilai MKT absolut ≈ 274,17 K atau **1,02 °C**—masih di bawah ambang 8 °C sehingga vial secara fisik belum失效, namun mendekati batas konservatif.

**Langkah 2 — Laju Degradasi dan Penurunan Potensi.** Pada suhu efektif MKT ≈ 1 °C, namun kita gunakan suhu puncak 11 °C untuk analisis konservatif pada periode kritis:

$$k(11) = 1{,}5 \times 10^{-6} \times 2{,}5^{(11-5)/10} = 1{,}5 \times 10^{-6} \times 1{,}5 = 2{,}25 \times 10^{-6} \text{ jam}^{-1}$$

Fraksi potensi yang hilang pada puncak 11 °C selama 1,5 jam:

$$\Delta P = 1 - e^{-k(11) \cdot t} = 1 - e^{-2{,}25 \times 10^{-6} \times 1{,