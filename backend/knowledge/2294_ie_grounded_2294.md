# 2294 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak: Integrasi Pemantauan IoT dan Formulasi Ketahanan Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo, 12(1)*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk farmasi dan pangan yang memerlukan kontrol suhu kontinyu di sepanjang rantai distribusi mulai dari titik produksi, penyimpanan, hingga titik konsumsi akhir. Khurshid dan Siddiqui (2024) dalam studi terindeks DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menyoroti bahwa disrupsi pada rantai dingin — baik berupa *exposure* suhu, *equipment failure*, maupun *human error* — menimbulkan *vulnerability* yang tidak hanya bersifat teknis tetapi juga struktural pada jaringan logistik. Produk *perishable* seperti vaksin, produk biologis, makanan beku, dan bahan *biopharmaceutical* memiliki toleransi termal yang sangat sempit (umumnya 2–8 °C untuk vaksin dalam kerangka PQS WHO), sehingga setiap deviasi suhu dapat menurunkan potensi produk secara kuantitatif maupun kualitatif.

Dari perspektif ekonomi, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang sia-sia akibat pelanggaran rantai dingin, sebuah kerugian yang mencapai miliaran dolar per tahun dan berdampak langsung pada program imunisasi nasional di negara berkembang. Di Indonesia sendiri, Putra, Defit, dan Nurcahyo (2024) mengidentifikasi bahwa UPTD Farmasi Dinas Kesehatan Kabupaten Siak menghadapi persoalan klasik berupa tidak adanya alat pemantauan suhu *real-time* pada *cold chain box*, sehingga pencatatan suhu masih dikerjakan secara manual setiap 2 (dua) jam oleh apoteker pada *log sheet* (Putra et al., 2024, DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Pola operasional seperti ini tidak memenuhi prinsip *Good Distribution Practice* (GDP) yang mensyaratkan traceability dan monitoring kontinyu.

Urgensi rekayasa terhadap sistem rantai dingin semakin nyata ketika disrupsi terjadi pada simpul-simpul kritis seperti *cold storage warehouse*, armada refrigerated transport, maupun *last-mile delivery* menggunakan *cold chain box*. Khurshid dan Siddiqui (2024) menekankan bahwa resiliensi (*resilience*) rantai dingin tidak cukup hanya diukur dari kemampuan mempertahankan fungsionalitas, melainkan juga dari kapasitas *recovery* pasca-disrupsi dan adaptabilitas terhadap perubahan lingkungan operasional. Artikel ini mengusulkan integrasi dua perspektif: (1) model kuantitatif resiliensi jaringan logistik rantai dingin yang dikembangkan Khurshid dan Siddiqui, dan (2) arsitektur pemantauan IoT berbasis sensor DS18B20 yang diimplementasikan Putra et al. (2024), guna membangun kerangka Sistem Manajemen Resiliensi Rantai Dingin yang utuh dan terukur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Degradasi Termal (Arrhenius)

Degradasi mutu produk *perishable* akibat paparan suhu di luar ambang batas dapat dimodelkan melalui persamaan Arrhenius yang diadopsi oleh Khurshid dan Siddiqui (2024) untuk memformalkan *quality loss function*:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $k(T)$ adalah laju degradasi (per jam), $A$ adalah *pre-exponential factor* (per jam), $E_a$ adalah energi aktivasi (J·mol⁻¹), $R = 8{,}314$ J·mol⁻¹·K⁻¹ adalah konstanta gas universal, dan $T$ adalah suhu absolut (K). Sebagai contoh, untuk vaksin polio inaktif, energi aktivasi berkisar $E_a \approx 75$–$95$ kJ·mol⁻¹.

### 2.2 Indeks Q10 untuk Sensitivitas Termal

Untuk mengkuantifikasi perubahan laju degradasi akibat kenaikan suhu 10 °C, digunakan model Q10:

$$Q_{10} = \left(\frac{R_2}{R_1}\right)^{\frac{10}{T_2 - T_1}}$$

dengan $R_1$ dan $R_2$ masing-masing adalah laju reaksi pada suhu $T_1$ dan $T_2$ (°C). Untuk mayoritas produk biologis, $Q_{10}$ berada pada rentang 2–4, artinya kenaikan suhu 10 °C mempercepat degradasi 2–4 kali lipat.

### 2.3 Indeks Resiliensi Jaringan Rantai Dingin

Mengacu pada formulasi Khurshid dan Siddiqui (2024), indeks resiliensi sistem didefinisikan sebagai rasio antara integrasi kualitas sistem aktual terhadap kinerja nominal sepanjang horizon pemulihan:

$$\mathcal{R} = \frac{\displaystyle\int_{t_0}^{t_1} Q(t)\,dt}{\displaystyle (t_1 - t_0) \cdot Q_0}$$

dengan $Q(t)$ adalah fungsi kualitas sistem saat disrupsi (0 ≤ Q(t) ≤ 1), $Q_0$ adalah kualitas nominal sebelum disrupsi, $t_0$ adalah waktu inisiasi disrupsi, dan $t_1$ adalah waktu *full recovery*. Nilai $\mathcal{R} \to 1$ mengindikasikan sistem sangat resilien; $\mathcal{R} \to 0$ mengindikasikan kerentanan tinggi.

### 2.4 Waktu Pemulihan (*Time-to-Recovery*) Stokastik

Waktu pemulihan mengikuti proses stokastik yang dapat dimodelkan dengan distribusi Weibull:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan $\beta$ adalah *shape parameter* dan $\eta$ adalah *scale parameter* (jam). Median *time-to-recovery* (TTR₅₀) dihitung sebagai $t_{med} = \eta \cdot (\ln 2)^{1/\beta}$.

### 2.5 Model Transmisi Data Sensor IoT (DS18B20)

Sensor DS18B20 menggunakan protokol *1-Wire* dengan akurasi $\pm 0{,}5$ °C pada rentang $-55$ °C hingga $+125$ °C dan resolusi konfigurasi 9–12 bit. Laju pengambilan sampel mengikuti relasi:

$$f_s = \frac{1}{t_{conv}} = \frac{1}{0{,}75 \cdot (2^{n-1}) \, \text{detik}}$$

untuk resolusi $n$-bit. Dengan $n=12$ bit, $t_{conv} = 0{,}75 \cdot 2048/1000 = 1{,}536$ detik per pembacaan. Throughput efektif sistem monitoring dengan interval sampling $\Delta t$ (detik) adalah:

$$\lambda = \frac{1}{\Delta t} \quad \text{(pembacaan/detik)}$$

Putra et al. (2024) mengimplementasikan akuisisi data pada interval $\Delta t = 1$ s dengan buffering pengiriman setiap 2 menit untuk mengurangi konsumsi bandwidth.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT

Putra et al. (2024) merancang arsitektur berlapis sebagai berikut:

1. **Lapisan Sensor:** Sensor DS18B20 ditempatkan pada dinding internal *cold chain box* dan permukaan paket疫苗 dengan konfigurasi *daisy-chain* untuk multi-point monitoring.
2. **Lapisan Akuisisi & Kontrol:** Mikrokontroler (ESP32/Arduino) membaca data melalui protokol *1-Wire*, melakukan konversi ADC 12-bit, dan mengirim paket data melalui Wi-Fi/GSM ke server *cloud*.
3. **Lapisan Backend:** *Dashboard* berbasis web (Node-RED/MySQL) menampilkan *real-time temperature*, *historical log*, dan *alert system*.
4. **Lapisan Notifikasi:** SMS/WA gateway mengaktifkan peringatan dini jika suhu melewati ambang 8 °C atau turun di bawah 2 °C.

### 3.2 Diagram Alir SOP Pemantauan Rantai Dingin

```
[Inisialisasi Sensor DS18B20]
        ↓
[Baca Suhu T (°C)]
        ↓
[Validasi: 2 ≤ T ≤ 8 °C?]
        ↓ (Ya)              ↓ (Tidak)
[Simpan ke Database]   [Trigger Alarm & SMS]
        ↓                     ↓
[Hitung Q(T) = exp(-k(T)·t)] [Hitung Quality Loss ΔQ]
        ↓                     ↓
[Update Resilience Index R] [Log Insiden Disrupsi]
        ↓                     ↓
[Loop Sampling Δt]      [Hitung TTR eksponensial]
```

### 3.3 SOP Penanganan Disrupsi

1. **Deteksi Dini (T+0):** Sensor membaca $T > 8$ °C → alarm otomatis terpicu.
2. **Respons Apoteker (T+5 menit):** Verifikasi manual, pindah produk ke *cold chain box* cadangan.
3. **Investigasi Akar Masalah (T+30 menit):** Identifikasi penyebab (kegagalan kompresor, paparan ambient, kesalahan *packing*).
4. **Dokumentasi & Pelaporan (T+2 jam):** Catat ke dalam *Batch Quality Record* sesuai pedoman Cara Distribusi Obat yang Baik (CDOB) BPOM.
5. **Evaluasi Kapasitas Resiliensi (T+24 jam):** Hitung ulang $\mathcal{R}$ dan bandingkan dengan baseline.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Kasus: Distribusi Vaksin COVID-19 di Cold Chain Box 15 L)

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Energi aktivasi $E_a$ | 85.000 | J·mol⁻¹ |
| Pre-exponential factor $A$ | $2{,}5 \times 10^{12}$ | jam⁻¹ |
| Konstanta gas $R$ | 8,314 | J·mol⁻¹·K⁻¹ |
| Suhu referensi $T_{ref}$ | 277,15 (4 °C) | K |
| Suhu gangguan $T_{dis}$ | 283,15 (10 °C) | K |
| Volume cold chain box | 15 | L |
| Kapasitas muatan疫苗 | 800 | vial |
| Interval sampling $\Delta t$ | 1 | detik |

### 4.2 Perhitungan Laju Degradasi

**Langkah 1:** Hitung $k(T_{ref})$ pada suhu normal 4 °C:

$$k(277{,}15) = 2{,}5 \times 10^{12} \cdot \exp\left(-\frac{85.000}{8{,}314 \cdot 277{,}15}\right)$$

$$k(277{,}15) = 2{,}5 \times 10^{12} \cdot \exp(-36{,}87) = 2{,}5 \times 10^{12} \cdot 1{,}01 \times 10^{-16}$$

$$k(277{,}15) \approx 2{,}53 \times 10^{-4} \, \text{jam}^{-1}$$

**Langkah 2:** Hitung $k(T_{dis})$ pada suhu gangguan 10 °C:

$$k(283{,}15) = 2{,}5 \times 10^{12} \cdot \