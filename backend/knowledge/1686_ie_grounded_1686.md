# 1686 — Model Ketahanan (Resilience Model) untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi IoT, Kinetika Degradasi Arrhenius, dan Sistem Pemantauan Suhu Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products  
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *SSRN Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)  
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rekayasa logistik produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan segar, dan bahan kimia tertentu. Menurut Khurshid & Siddiqui (2024) dalam tulisannya yang berjudul *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), kebutuhan akan model ketahanan (*resilience*) dalam cold chain menjadi semakin mendesak karena adanya peningkatan kompleksitas distribusi global, perubahan iklim yang memperkenalkan variabilitas suhu lingkungan, dan ketergantungan tinggi pada infrastruktur energi yang rentan terhadap gangguan. Model resilience dalam konteks ini bukan sekadar kemampuan sistem untuk bertahan (*survive*) terhadap gangguan, melainkan kapasitas untuk menyerap (*absorb*), beradaptasi (*adapt*), dan segera pulih (*recover*) guna mempertahankan kualitas produk sepanjang rantai pasok.

Konteks industri yang melatari urgensi topik ini dapat dilihat dari kasus nyata yang dilaporkan Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) di Dinas Kesehatan Kabupaten Siak. Unit Pelaksana Teknis Dinas (UPTD) Farmasi Kabupaten Siak bertanggung jawab penuh menjaga kualitas vaksin hingga titik distribusi akhir. Permasalahan operasional yang diidentifikasi mencakup dua dimensi kegagalan utama: (1) **cold chain box** sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi alat pemantauan suhu *real-time* yang mampu memberikan peringatan dini kepada apoteker ketika terjadi eskalasi suhu akibat kerusakan internal (kompresor, sistem refrigerasi) maupun eksternal (gangguan daya, paparan panas lingkungan); dan (2) proses pencatatan suhu masih dilakukan secara **manual setiap 2 jam sekali pada log sheet** oleh apoteker, yang rentan terhadap human error, keterlambatan respons, dan tidak terdokumentasi secara digital.

Implikasi ekonomi dan teknis dari permasalahan ini sangat signifikan. Kerusakan vaksin yang tidak terdeteksi secara dini berpotensi menghasilkan kerugian finansial yang besar, risiko kesehatan masyarakat (vaksinasi tidak efektif), serta pemborosan sumber daya produksi dan distribusi yang telah dikeluarkan dalam rantai pasok farmasi. Putra dkk. (2024) menekankan bahwa integrasi teknologi **Internet of Things (IoT)** dengan sensor suhu digital DS18B20—yang memiliki akurasi $\pm 0,5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$—menjadi salah satu solusi teknis yang paling layak dan terukur untuk menjawab kebutuhan *real-time monitoring* pada cold chain box. Dengan konteks ini, pengembangan model resilience yang mengintegrasikan aspek kuantitatif degradasi produk, arsitektur IoT, dan protokol respons sistem menjadi kebutuhan fundamental dalam rekayasa sistem industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kinetika Degradasi Arrhenius

Fondasi matematis utama dalam cold chain modeling adalah persamaan Arrhenius, yang menjelaskan laju degradasi produk sebagai fungsi suhu absolut:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

di mana $k(T)$ adalah konstanta laju degradasi (per satuan waktu), $A$ adalah faktor pra-eksponensial (frekuensi reaksi), $E_a$ adalah energi aktivasi ($\text{J/mol}$), $R$ adalah konstanta gas universal ($8,314 \text{ J/(mol·K)}$), dan $T$ adalah suhu absolut (Kelvin). Model ini relevan untuk vaksin, protein, dan produk biologis yang mengalami denaturasi pada suhu yang lebih tinggi dari ambang batas kritis $T_{crit}$.

### 2.2. Kumulatif Degradasi (Spoilage Index)

Degradasi total sepanjang paparan suhu pada waktu $\tau$ dinyatakan sebagai:

$$D(t) = \int_{0}^{t} k\bigl(T(\tau)\bigr) \, d\tau$$

Ketika suhu menyimpang dari batas kritis $T_{crit}$ selama durasi $\Delta t$, indeks spoilage tambahan menjadi:

$$\Delta D = A \cdot e^{-\frac{E_a}{R \cdot T_{exc}}} \cdot \Delta t$$

di mana $T_{exc}$ adalah suhu aktual selama ekskursi (excursion).

### 2.3. Model Resilience Multi-Fase

Model resilience yang diajukan dalam literatur (Khurshid & Siddiqui, 2024) mengikuti kerangka **resilience triangle/lollipop** dengan tiga fase:

$$R(t) = \begin{cases} 1 - \dfrac{Q(t) - Q_{disrupted}}{Q_{normal} - Q_{disrupted}}, & t_0 \leq t \leq t_1 \text{ (fase disrupsi)} \\[8pt] \dfrac{Q(t) - Q_{disrupted}}{Q_{normal} - Q_{disrupted}}, & t_1 \leq t \leq t_2 \text{ (fase recovery)} \\[8pt] 1, & t \geq t_2 \text{ (fase restorasi penuh)} \end{cases}$$

di mana $Q(t)$ adalah *quality function* sistem (misalnya suhu aktual sebagai fungsi waktu), $Q_{normal}$ adalah kondisi nominal, dan $Q_{disrupted}$ adalah titik terendah kualitas saat disrupsi puncak.

### 2.4. System Resilience Index (SRI)

Indeks resilience agregat sistem cold chain didefinisikan sebagai:

$$\text{SRI} = \frac{1}{t_2 - t_0} \int_{t_0}^{t_2} R(t) \, dt$$

Nilai SRI mendekati 1 menunjukkan resilience tinggi; mendekati 0 menunjukkan sistem yang gagal mempertahankan fungsinya.

### 2.5. Model Kerugian Ekonomi (Loss Function)

Kerugian finansial akibat degradasi produk selama disrupsi:

$$L = N_{unit} \cdot P_{unit} \cdot \bigl(1 - e^{-\alpha \cdot D(t_{exc})}\bigr)$$

di mana $N_{unit}$ adalah jumlah unit produk, $P_{unit}$ adalah harga per unit, dan $\alpha$ adalah koefisien sensitivitas produk terhadap degradasi.

### 2.6. Model Reliabilitas Sensor IoT

Reliabilitas sensor DS18B20 sepanjang waktu mengikuti distribusi eksponensial:

$$R_{sensor}(t) = e^{-\lambda t}$$

dengan $\lambda$ sebagai laju kegagalan sensor. Untuk sensor DS18B20 berkualitas industri, $\lambda \approx 5 \times 10^{-6}$ per jam operasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Pemantauan Cold Chain IoT

Berdasarkan solusi yang diajukan Putra dkk. (2024), arsitektur IoT untuk cold chain box vaksin tersusun atas lima lapisan fungsional:

1. **Lapisan Sensor (Perception Layer):** Sensor suhu digital DS18B20 dengan protokol *1-Wire*, akurasi $\pm 0,5^{\circ}\text{C}$, resolusi 9–12 bit, ditempatkan di dalam cold chain box pada lokasi yang merepresentasikan suhu rata-rata ruang penyimpanan.

2. **Lapisan Pemrosesan (Network Layer):** Mikrokontroler (misalnya ESP32/Arduino) yang membaca data sensor, mengagregasi pembacaan, dan mentransmisikan melalui Wi-Fi/GSM ke *cloud server*.

3. **Lapisan Komunikasi (Transmission Layer):** Protokol MQTT/HTTP dengan enkripsi TLS untuk transmisi data ke server pusat.

4. **Lapisan Analitik (Processing Layer):** Platform IoT (misalnya ThingsBoard, AWS IoT) yang menjalankan algoritma deteksi anomali berbasis threshold dinamis.

5. **Lapisan Antarmuka (Application Layer):** Dashboard web/mobile bagi apoteker dengan notifikasi push, alert SMS, dan histori suhu otomatis.

### 3.2. Diagram Alir SOP Pemantauan Cold Chain

```
[Mulai] → [Inisialisasi Sensor DS18B20]
   ↓
[Pembacaan Suhu Setiap t = 60 detik]
   ↓
[Validasi Data: 2°C ≤ T ≤ 8°C?]
   ↓ (Ya)              ↓ (Tidak)
[Simpan ke Log]   [Trigger ALARM + Notifikasi]
   ↓                       ↓
[Hitung D(t)]        [Estimasi ΔD & L]
   ↓                       ↓
[SRI Update]         [Protokol Triage Produk]
   ↓                       ↓
[Lanjut Loop] ←————————————┘
```

### 3.3. Protokol Triage Pasca-Disrupsi

Ketika ekskursi suhu terdeteksi, protokol operasi standar mensyaratkan:

- **T < 8°C selama < 2 jam:** Evaluasi kumulatif menggunakan persamaan $\Delta D$; vaksin masih layak jika $\Delta D < D_{threshold}$.
- **8°C ≤ T < 15°C selama < 24 jam:** Karantina produk; lakukan *stability test* sebelum digunakan.
- **T ≥ 15°C atau durasi > 24 jam:** Dekontaminasi dan pemusnahan sesuai regulasi BPOM/WHO PQS.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input Kasus UPTD Kabupaten Siak

| Parameter | Nilai | Satuan |
|---|---|---|
| Kapasitas cold chain box | 50 | vial |
| Harga rata-rata per vial vaksin | 250.000 | IDR |
| Energi aktivasi tipikal (vaksin protein) $E_a$ | 80.000 | J/mol |
| Faktor pra-eksponensial $A$ | $1{,}2 \times 10^{12}$ | 1/h |
| Suhu kritis bawah $T_{crit,min}$ | 2 | °C |
| Suhu kritis atas $T_{crit,max}$ | 8 | °C |
| Suhu ekskursi $T_{exc}$ | 15 | °C |
| Durasi ekskursi $\Delta t$ | 6 | jam |
| Konstanta gas $R$ | 8,314 | J/(mol·K) |

### 4.2. Perhitungan Laju Degradasi pada Suhu Ekskursi

Konversi suhu ke Kelvin: $T_{exc} = 15 + 273{,}15 = 288{,}15 \text{ K}$

$$k(T_{exc}) = 1{,}2 \times