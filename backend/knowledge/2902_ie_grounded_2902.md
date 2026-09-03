# 2902 — Ketahanan Rantai Dingin Produk Mudah Rusak: Model Resiliensi dan Sistem Pemantauan Suhu Cerdas Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan sistem logistik terintergrasi yang menjamin produk termolabil—vaksin, produk biofarmasi, makanan segar, dan reagen diagnostik—tetap berada dalam rentang suhu spesifik sejak titik produksi hingga titik konsumsi. Kerusakan satu mata rantai pada sistem ini dapat menyebabkan kerugian ekonomi masif dan risiko kesehatan publik yang tidak terkompensasi. World Health Organization (WHO) memperkirakan bahwa sekitar 50% vaksin yang diproduksi global terbuang sia-sia akibat kegagalan rantai dingin, terutama di negara berkembang dengan infrastruktur distribusi geografis yang menantang.

Khurshid dan Siddiqui (2024) dalam studinya menyoroti bahwa volatilitas suhu selama transpor dan penyimpanan bukan sekadar masalah teknis melainkan masalah resiliensi sistemik yang memerlukan kerangka kuantitatif untuk mengukur, memprediksi, dan memitigasi disrupsi. Disrupsi dapat berupa kegagalan refrigerasi, keterlambatan distribusi, kesalahan prosedural operator, atau bencana alam yang memutus链路 jaringan listrik. Pendekatan resiliensi menggeser paradigma tradisional dari sekadar *reliability* (kemampuan beroperasi tanpa gangguan) menjadi kemampuan sistem untuk *absorb, adapt, recover, dan restore* performa pascad disrupsi.

Putra, Defit, dan Nurcahyo (2024) memberikan bukti empiris konkret dari konteks Indonesia melalui studi pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi dua缺陷 struktural utama dalam operasional cold chain box: (1) absennya sistem pemantauan suhu realtime yang mampu memberikan peringatan dini kepada apoteker ketika suhu menyimpang akibat kerusakan internal (misalnya compressor failure) maupun eksternal (misalnya paparan matahari berkepanjangan saat distribusi lapangan); (2) proses pencatatan suhu yang masih dikerjakan secara manual setiap 2 jam pada lembar catatan (*log sheet*), yang rentan terhadap human error, kelalaian, dan kehilangan jejak audit digital.

Konteks Kabupaten Siak sendiri sangat relevan secara akademis: wilayah ini memiliki topografi kepulauan di Provinsi Riau dengan aksesibilitas运输 yang menantang, sehingga kombinasi antara kegagalan teknis lokal dan tantangan geografis menciptakan kebutuhan akan sistem resiliensi yang robust. Integrasi antara kerangka resiliensi teoretis Khurshid & Siddiqui (2024) dengan solusi rekayasa konkret berupa Temperature Monitoring System berbasis sensor DS18B20 yang diajukan oleh Putra dkk. (2024) membentuk pasangan simbiotik antara konseptualisasi masalah dan implementasi solusinya—suatu corak khas penelitian Teknik Industri modern yang menjembatani *operations research* dan *industrial IoT*.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi untuk rantai dingin perishable dapat diformulasikan sebagai fungsi multivariabel yang mengintegrasikan degradasi termal, probabilitas disrupsi, dan kapasitas pemulihan sistem. Berikut adalah kerangka matematis yang digunakan:

**Indeks Resiliensi Sistem (Bruneau-Modified):**

$$R = \frac{\int_{t_0}^{t_1} Q(t)\,dt}{\int_{t_0}^{t_1} 100\%\,dt}$$

di mana $Q(t)$ adalah kualitas produk ternormalisasi pada waktu $t$, $t_0$ adalah waktu awal disrupsi, dan $t_1$ adalah waktu pemulihan penuh. Nilai $R \in [0,1]$, dengan $R=1$ menunjukkan resiliensi sempurna (tidak ada degradasi) dan $R=0$ menunjukkan kegagalan total.

**Akumulasi Deviasi Suhu (Temperature Excursion Integral):**

$$\Delta T_{acc} = \int_{0}^{T_{exp}} \max\left(0,\, |T(t) - T_{set}| - \delta\right)\,dt$$

di mana $T(t)$ adalah suhu aktual terukur, $T_{set}$ adalah suhu setpoint (untuk vaksin rutin: $T_{set}=5°C$), $\delta$ adalah toleransi (umumnya $\delta = 0°C$ untuk rentang $2-8°C$), dan $T_{exp}$ adalah durasi eksposur. Nilai $\Delta T_{acc}$ berkorelasi langsung dengan degradasi poten menurut hukum Arrhenius untuk kinetika degradasi termal:**

$$k_{deg} = A \cdot \exp\left(-\frac{E_a}{R_g \cdot T}\right)$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), $R_g$ adalah konstanta gas universal (8.314 J/(mol·K)), dan $T$ adalah suhu absolut (K).

**Availability Sistem Pemantauan (IoT Sensor):**

$$A_{sys} = \frac{MTBF}{MTBF + MTTR}$$

Untuk sensor DS18B20 yang digunakan oleh Putra dkk. (2024), spesifikasi pabrik memberikan akurasi $\pm 0.5°C$ pada rentang $-10°C$ hingga $+85°C$ dengan resolusi 9–12 bit yang dapat dikonfigurasi. Dengan asumsi MTBF sensor = 100.000 jam dan MTTR (termasuk deteksi + replacement) = 4 jam, maka:

$$A_{sys} = \frac{100.000}{100.000 + 4} \approx 0.99996$$

**Probabilitas Kegagalan Rantai Dingin:**

$$P_{fail} = 1 - \prod_{i=1}^{n}(1 - p_i)$$

di mana $p_i$ adalah probabilitas disrupsi lokal pada mata rantai $i$ (transportasi, penyimpanan, bongkar muat), dan $n$ adalah jumlah mata rantai. Dengan $p_i = 0.02$ untuk 5 mata rantai:

$$P_{fail} = 1 - (0.98)^5 \approx 0.0961$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur sistem yang dirancang dalam paper pendukung (Putra dkk., 2024) mengikuti pola referensi 4-lapis Industrial IoT:

**Lapisan 1 – Sensing Layer:** Sensor DS18B20 (sensor suhu solid-state dengan output digital 1-Wire) ditempatkan secara terdistribusi pada cold chain box: (a) zona dekat evaporator (risiko over-cooling), (b) zona tengah (representatif), (c) zona靠近 pintu (risiko warm ingress saat pembukaan). Protokol 1-Wire memungkinkan multiple sensor daisy-chained pada satu pin mikrokontroler, sehingga arsitektur ini secara inheren mendukung *spatial temperature profiling*.

**Lapisan 2 – Communication Layer:** Mikrokontroler (misalnya ESP32 atau Arduino) membaca data sensor secara periodik (sampling rate direkomendasikan 1–5 menit untuk konservasi energi, dengan event-driven sampling 10 detik saat anomali terdeteksi). Transmisi data ke gateway menggunakan protokol WiFi/LoRaWAN tergantung cakupan geografis; untuk konteks kabupaten kepulauan seperti Siak, kombinasi LoRaWAN (long-range, low-power) + fallback GSM sangat direkomendasikan.

**Lapisan 3 – Edge Computing Layer:** Algoritma deteksi anomali berbasis *threshold checking* dan *rate-of-change analysis* berjalan di edge device:

$$\text{Alert} = \begin{cases} \text{CRITICAL}, & \text{jika } |T(t) - T_{set}| > 3°C \\ \text{WARNING}, & \text{jika } 1°C < |T(t) - T_{set}| \leq 3°C \\ \text{NORMAL}, & \text{otherwise} \end{cases}$$

**Lapisan 4 – Application Layer:** Dashboard web/mobile menampilkan time-series suhu, *alert log*, dan *compliance report* untuk audit. Push notification dikirimkan ke apoteker melalui Telegram API atau SMS gateway saat status CRITICAL terdeteksi.

SOP Operasional yang dihasilkan mengikuti kerangka resiliensi Khurshid & Siddiqui (2024) dengan empat fase:

1. **Prepare:** Kalibrasi sensor, validasi rentang $2-8°C$, verifikasi alarm, *backup battery* untuk cold chain box (maks 8 jam autonomi saat PLN padam).
2. **Monitor:** Sampling kontinu, logging otomatis menggantikan pencatatan manual 2-jam, dashboard real-time.
4. **Respond:** Protokol tanggap darurat saat alert CRITICAL: verifikasi silang, transfer vaksin ke backup unit, *incident documentation*.
4. **Recover & Learn:** Post-incident review, analisis akar masalah, update parameter model resiliensi untuk mencegah rekurensi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah cold chain box berisi 500 vial vaksin DPT-HepB-Hib (setpoint $T_{set}=5°C$, rentang toleransi $2-8°C$) mengalami disrupsi refrigerasi selama distribusi 6 jam di kabupaten kepulauan. Suhu terekam naik secara gradual: $T(0)=5.0°C$, $T(1)=5.3°C$, $T(2)=6.1°C$, $T(3)=7.2°C$, $T(4)=8.5°C$, $T(5)=10.1°C$, $T(6)=12.0°C$.

**Langkah 1 – Hitung Akumulasi Deviasi Suhu:**

Menggunakan integrasi diskret (aturan trapezoid) untuk jam $j=3$ ke $j=6$ (di mana $|T-T_{set}|>3°C$ mulai dari