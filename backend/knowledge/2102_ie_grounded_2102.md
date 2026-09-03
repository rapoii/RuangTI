# 2102 — Model Resiliensi Cold Chain Logistics untuk Produk Mudah Rusak dan Integrasi Sistem Monitoring Suhu IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk termolabil—mulai dari vaksin, produk biofarmasi, makanan segar, hingga reagen diagnostik—di mana suhu harus dipertahankan dalam rentang sempit sepanjang siklus pasok (Khurshid & Siddiqui, 2024). Gangguan sekecil apa pun pada integritas termal dapat memicu degradasi kualitas yang tidak reversibel, dengan dampak ekonomi dan kesehatan masyarakat yang signifikan. Laporan World Health Organization (WHO) menyebutkan bahwa lebih dari 50% vaksin terbuang sia-sia di rantai pasok akibat kegagalan mempertahankan suhu pada rentang 2–8 °C; fenomena yang kemudian menjadi titik tekan pada operasional Unit Pelaksana Teknis Dinas (UPTD) Farmasi di tingkat kabupaten/kota di Indonesia (Putra, Defit, & Nurcahyo, 2024).

Putra, Defit, dan Nurcahyo (2024) mendokumentasikan secara empiris kondisi nyata di Dinas Kesehatan Kabupaten Siak, di mana penyimpanan vaksin dalam *cold chain box* masih mengandalkan pencatatan manual *log sheet* setiap dua jam oleh apoteker. Sistem manual ini memiliki tiga kelemahan fundamental: (1) tidak memberikan peringatan dini (*real-time alert*) saat suhu menyimpang akibat kerusakan internal (misalnya degradasi ice pack, kegagalan insulasi) maupun eksternal (misalnya paparan matahari, kesalahan prosedur buka-tutup box); (2) resolusi temporal dua jam terlalu kasar untuk menangkap *transient excursion* berdurasi menit yang tetap merusak termosensitif produk; dan (3) rentan terhadap human error dalam pencatatan dan keterlambatan respons. Khurshid & Siddiqui (2024) melengkapi perspektif ini dengan mengajukan model resiliensi yang memperlakukan *cold chain* bukan sekadar sistem statis melainkan entitas dinamis yang harus mampu menyerap guncangan (*absorption*), beradaptasi (*adaptation*), dan pulih (*recovery*) terhadap disrupsi suhu.

Urgensi integrasi kedua perspektif—model resiliensi teoretis (Khurshid & Siddiqui, 2024) dan implementasi IoT monitoring (Putra et al., 2024)—menjadi semakin relevan ketika industri farmasi, makanan, dan bioteknologi global bergerak menuju kepatuhan Good Distribution Practice (GDP) dan Annex 9 WHO yang menuntut traceability suhu berbasis data elektronik. Dari sudut pandang Teknik Industri, persoalan ini bukan sekadar instrumentasi, melainkan desain sistem terintegrasi yang menyeimbangkan empat dimensi: keandalan sensor, akurasi data, kelayakan ekonomi, dan kepatuhan terhadap standar operasional. Modul ini menyusun kerangka berpikir dan prosedur perhitungan yang dibutuhkan untuk merancang sistem *cold chain* yang resilien dengan memanfaatkan sensor DS18B20 sebagai tulang punggung akuisisi data termal.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Model resiliensi yang diajukan oleh Khurshid & Siddiqui (2024) memformalkan kemampuan sistem *cold chain* mempertahankan kualitas produk sebagai fungsi waktu. Indeks resiliensi $R$ didefinisikan sebagai rasio antara luas area di bawah kurva kualitas aktual terhadap luas area di bawah kualitas ideal selama horizon waktu $[t_0, t_f]$:

$$R = \frac{\int_{t_0}^{t_f} Q(t)\, dt}{Q_{\max} \cdot (t_f - t_0)}$$

dengan $Q(t)$ adalah fungsi kualitas termal pada waktu $t$, dan $Q_{\max}$ adalah nilai kualitas referensi (maksimum). Nilai $R$ berkisar pada interval $[0, 1]$, di mana $R = 1$ menyatakan sistem sepenuhnya resilien (tidak ada degradasi) dan $R \to 0$ menyatakan kegagalan total.

### 2.2 Model Degradasi Kualitas Termal

Kualitas produk mudah rusak mengikuti kinetika reaksi orde pertama yang dipercepat oleh suhu, dengan laju degradasi $k$ yang mengikuti persamaan Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R_g \cdot T}\right)$$

di mana $A$ adalah faktor pra-eksponensial, $E_a$ energi aktivasi (J/mol), $R_g$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu absolut (K). Evolusi kualitas terhadap waktu diberikan oleh:

$$Q(t) = Q_0 \cdot \exp\bigl(-k(T) \cdot t\bigr)$$

Aturan praktis Q10 dalam industri farmasi dan pangan menyatakan bahwa laju reaksi naik dua kali lipat setiap kenaikan 10 °C:

$$k_2 = k_1 \cdot 10^{\frac{T_2 - T_1}{10}}$$

### 2.3 Fungsi Resiliensi Empat-Fase

Berdasarkan kerangka Bruneau yang disesuaikan untuk *cold chain*, resiliensi dimodelkan sebagai fungsi waktu multi-fase yang mencakup empat tahap: pra-gangguan (kondisi steady), absorbsi, adaptasi, dan pemulihan. Defisit kualitas $\Delta Q(t)$ terhadap baseline ideal diformulasikan sebagai:

$$\Delta Q(t) = Q_{\text{ideal}}(t) - Q_{\text{actual}}(t)$$

Luas area defisit (*resilience loss*) sepanjang horizon gangguan menjadi ukuran utama kapasitas pemulihan:

$$\mathcal{L} = \int_{t_1}^{t_2} \Delta Q(t)\, dt$$

Semakin kecil $\mathcal{L}$, semakin tinggi resiliensi sistem (Khurshid & Siddiqui, 2024).

### 2.4 Akuisisi Data Suhu dan Akurasi Sensor DS18B20

Sensor DS18B20 yang digunakan oleh Putra et al. (2024) memiliki akurasi $\pm 0{,}5\ ^\circ\text{C}$ pada rentang $-10\ ^\circ\text{C}$ hingga $+85\ ^\circ\text{C}$, resolusi konfigurable 9–12 bit (setara $0{,}0625\ ^\circ\text{C}$ pada resolusi penuh), dan protokol komunikasi *1-Wire* yang memungkinkan multi-sensor pada satu bus data. Ketidakpastian pengukuran total mengikuti formulasi kuadratik:

$$\sigma_T = \sqrt{\sigma_{\text{cal}}^2 + \sigma_{\text{noise}}^2 + \sigma_{\text{drift}}^2}$$

dengan $\sigma_{\text{cal}}$ akurasi kalibrasi pabrikan, $\sigma_{\text{noise}}$ derau termal, dan $\sigma_{\text{drift}}$ drift jangka panjang.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem *cold chain* yang resilien mengikuti arsitektur berlapis yang menggabungkan model Khurshid & Siddiqui (2024) dengan perangkat keras monitoring Putra et al. (2024). Prosedur operasional standar disusun sebagai berikut:

**Tahap 1 — Pemetaan Termal dan Identifikasi Risiko.** Lakukan *thermal mapping* pada seluruh *cold chain box* dengan menempatkan minimal 9 titik sensor (3 tingkat: atas, tengah, bawah × 3 zona: depan, tengah, belakang) sesuai panduan WHO PQS E001. Identifikasi *hot spot* dan *cold spot*.

**Tahap 2 — Instalasi Jaringan Sensor.** Pasang sensor DS18B20 pada setiap titik kritis. Setiap sensor memiliki alamat 64-bit unik pada bus *1-Wire*. Mikrokontroler (misalnya ESP32) melakukan polling setiap interval $\Delta t = 60$ detik, menggantikan pencatatan manual 2 jam (Putra et al., 2024).

**Tahap 3 — Transmisi dan Penyimpanan Data.** Data dikirim melalui Wi-Fi/LoRa ke *cloud dashboard* (Grafana/ThingsBoard). Format pesan JSON:

```json
{"sensor_id":"DS-A1","T":4.32,"timestamp":1700000000,"battery":87}
```

**Tahap 4 — Algoritma Deteksi Anomali.** Terapkan aturan kendali statistik: peringatan Level 1 (yellow) bila $|T - T_{\text{set}}| > 1{,}0\ ^\circ\text{C}$ lebih dari 5 menit; Level 2 (red) bila $|T - T_{\text{set}}| > 2{,}0\ ^\circ\text{C}$ atau $T > 8\ ^\circ\text{C}$ lebih dari 1 menit. Notifikasi dikirim via SMS/Telegram ke apoteker penanggung jawab (Putra et al., 2024).

**Tahap 5 — Perhitungan Indeks Resiliensi Otomatis.** Backend server menghitung $R$, $\Delta Q(t)$, dan $\mathcal{L}$ secara *real-time* menggunakan persamaan pada Bagian 2, sehingga manajer mutu dapat memantau degradasi kumulatif dan memprediksi sisa umur simpan efektif.

**Tahap 6 — Validasi dan Kalibrasi Berkala.** Kalibrasi sensor DS18B20 setiap 6 bulan menggunakan *ice-point reference* ($0{,}000\ ^\circ\text{C}$) dan *dry-block calibrator*. Catat nilai $\sigma_{\text{drift}}$ untuk koreksi data historis.

**Diagram Alir Keputusan SOP:**

```
[Sensor DS18B20] → [Akuisisi T(t)] → [Filter Moving Avg 5 titik]
       ↓
[Evaluasi |T - T_set|] ──> OK → [Log ke Database]
       ↓ EXCURSION
[Level 1: 1-2°C] → [SMS Warning ke Apoteker]
       ↓
[Level 2: >2°C atau >8°C] → [Alarm + Auto-cut Power Chiller]
       ↓
[Hitung R dan ΔQ] → [Dashboard Web Manager]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Distribusi Vaksin COVID-19 di Dinkes Kabupaten Siak.**

**Parameter Industri (diadopsi dari Putra et al., 2024 dan disesuaikan):**
- Volume *cold chain box*: 12 L, berisi 200 vial vaksin (mRNA termolabil)
- Suhu set-point: $T_{\text{set}} = 4{,}0\ ^\circ\text{C}$ (277,15 K)
- Energi aktivasi degradasi mRNA: $E_a = 83\ \text{kJ/mol}$ (literatur tipikal)
- Faktor pra-eksponensial: $A = 1{,}2 \times 10^{13}\ \text{jam}^{-1}$
- Konstanta gas: $R_g = 8{,}314\ \text{J/mol·K}$
- Interval sampling sensor: $\Delta t = 60$ detik
- Akurasi DS18B20: $\pm 0{,}5\ ^\circ\text{C}$

**Langkah 1 — Hitung laju degradasi pada suhu ideal:**

$$k(277{,}15) = 1{,}2 \times 10^{13} \cdot \exp\left(-\frac{83000}{8{,}314 \cdot 277{,}15}\