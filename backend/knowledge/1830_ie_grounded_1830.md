# 1830 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Sistem IoT, Formulasi Matematis, dan Prosedur Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan salah satu subsistem paling kritikal dalam rantai pasok produk termolabil—mencakup vaksin, produk biofarmasi, makanan segar, dan bahan kimia khusus—yang mensyaratkan pemeliharaan suhu dalam rentang presisi sepanjang siklus hulu-hilir. Gangguan sekecil apa pun pada integritas suhu dapat memicu degradasi mutu yang bersifat kumulatif dan ireversibel. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) membangun *resilience model* untuk mengkuantifikasi kemampuan sistem cold chain dalam menghadapi disrupsi, memulihkan layanan, dan mempertahankan kualitas produk. Resiliensi di sini tidak dimaknai sekadar sebagai kemampuan bertahan, melainkan sebagai kapasitas sistem untuk menyerap guncangan (*absorptive capacity*), beradaptasi (*adaptive capacity*), dan pulih (*restorative capacity*) dalam jendela waktu yang aman bagi produk.

Konteks operasional yang digambarkan oleh Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak, memperlihatkan dua problem struktural yang melatarbelakangi urgensi model resiliensi. Pertama, *cold chain box* sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi alat pemantau suhu *real-time* yang mampu memberikan peringatan dini kepada apoteker ketika suhu naik akibat kerusakan internal (misalnya kegagalan termostat, kebocoran refrigerant) maupun eksternal (misalnya pemadaman listrik, paparan sinar matahari, kesalahan *handling*). Kedua, pencatatan suhu masih dikerjakan secara manual setiap 2 (dua) jam sekali pada *log sheet* oleh apoteker, menciptakan *blind spot* sepanjang 119 menit antarpencatatan di mana degradasi suhu dapat berlangsung tanpa terdeteksi. Kombinasi dua kelemahan ini menurunkan ketersediaan data historis suhu menjadi sangat granular rendah, menghambat audit mutu, dan meningkatkan risiko *vaccine wastage*.

Secara ekonomi, World Health Organization (WHO) memperkirakan bahwa hingga 50% vaksin sensitif-beku (*freeze-sensitive vaccines*) terbuang sia-sia secara global setiap tahun akibat pelanggaran rantai dingin—angka yang menjadikan penguatan resiliensi cold chain bukan sekadar isu teknis, melainkan agenda keberlanjutan sistem kesehatan publik. Pada sektor pangan, USDA Economic Research Service melaporkan bahwa kehilangan pascapanen produk mudah rusak di negara berkembang dapat mencapai 30–40%, sebagian besar disebabkan oleh kerusakan suhu selama distribusi. Karena itu, model resiliensi yang diajukan oleh Khurshid dan Siddiqui (2024) memiliki signifikansi industri yang melampaui satu sektor, dan integrasinya dengan perangkat IoT sebagaimana dirancang Putra et al. (2024) menjadi titik konvergensi antara pemodelan teoretis dan implementasi taktis.

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi cold chain yang dibangun di atas fondasi tiga besaran utama: (i) fungsi kualitas produk sebagai fungsi suhu dan waktu, (ii) metrik resiliensi sistem, dan (iii) mekanisme deteksi-disrupsi berbasis sensor. Berikut formulasi matematis yang relevan.

### 2.1. Fungsi Degradasi Kualitas Produk (Arrhenius–TTT)

Tingkat degradasi mutu produk termolabil dimodel dengan persamaan Arrhenius yang lazim dipakai dalam *Stability Testing* farmasi:

$$k(T) = A \cdot e^{-E_a / (R_g \cdot T)}$$

di mana $k(T)$ adalah laju reaksi degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), dan $R_g = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Batas kegagalan kualitas didefinisikan ketika integral waktu-suhu melebihi ambang *Time-Temperature Tolerance*:

$$\int_{0}^{t} k(T(\tau)) \, d\tau \;\geq\; 1$$

Artinya, setiap kenaikan suhu di atas ambang $T_{max}=8^\circ\text{C}$ (untuk большинства vaksin) mempercepat degradasi secara eksponensial, sehingga waktu aman $\Delta t$ menyusut tajam.

### 2.2. Mean Kinetic Temperature (MKT)

Untuk merepresentasikan efek termal kumulatif terhadap produk, digunakan MKT yang merupakan rerata suhu non-linear:

$$T_{MKT} \;=\; \frac{\Delta H / R_g}{-\ln\!\left( \dfrac{1}{n}\sum_{i=1}^{n} e^{-E_a / (R_g \cdot T_i)} \right)}$$

dengan $\Delta H$ adalah entalpi aktivasi (≈ 83,144 J/mol untuk standar WHO PQS). $T_{MKT}$ merupakan parameter kunci yang memantau beban termal rata-rata sistem.

### 2.3. Indeks Resiliensi Cold Chain (R)

Berdasarkan kerangka Bruneau et al. yang diadaptasi Khurshid & Siddiqui (2024), resiliensi sistem didefinisikan sebagai:

$$R \;=\; \frac{\displaystyle\int_{t_0}^{t_r} Q(t)\, dt}{\displaystyle\int_{t_0}^{t_f} Q(t)\, dt} \;\in\; [0,1]$$

di mana $t_0$ adalah waktu mulai disrupsi, $t_r$ adalah waktu pemulihan, $t_f$ adalah total durasi disrupsi, dan $Q(t) \in [0,1]$ adalah fungsi kualitas sistem sesaat. Nilai $R=1$ mengindikasikan pemulihan instan (ideal), sementara $R \to 0$ berarti kegagalan katastrofik.

### 2.4. Indeks Integritas Cold Chain (CCII)

Untuk penilaian tingkat titik pemantauan, didefinisikan bobot sensor $w_i$ pada node $i$:

$$\text{CCII} \;=\; \frac{\sum_{i=1}^{n} w_i \cdot S_i}{\sum_{i=1}^{n} w_i}, \qquad S_i \;=\; 1 - \frac{|T_i - T_{set}|}{T_{max} - T_{set}}$$

dengan $T_{set}=2\text{–}8^\circ\text{C}$ untuk sebagian besar vaksin, dan $S_i$ adalah skor simpangan suhu ternormalisasi di node $i$.

### 2.5. Availability & Reliability Sensor

Ketersediaan sistem monitoring IoT mengikuti ekspresi klasik:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

dengan MTBF (*Mean Time Between Failure*) adalah rerata waktu antar-kegagalan sensor, dan MTTR (*Mean Time To Repair*) adalah rerata waktu perbaikan. Untuk sensor DS18B20 yang dipakai Putra et al. (2024), MTBF tipikal mencapai 200.000 jam pada operasi 0–50°C.

### 2.6. Model Penalti Pelanggaran Suhu

Ketika suhu menyimpang, kerugian produk dimodel sebagai fungsi kuadratik:

$$P(T) \;=\; \begin{cases} 0, & T_{min} \leq T \leq T_{max} \\[4pt] \kappa\,(T - T_{max})^{2}, & T > T_{max} \\[4pt] \kappa\,(T_{min} - T)^{2}, & T < T_{min} \end{cases}$$

dengan $\kappa$ adalah koefisien penalti (satuan: % / °C²) yang merepresentasikan konsekuensi ekonomi per unit suhu.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem cold chain yang resilien mengikuti arsitektur berlapis (*layered architecture*) yang mengintegrasikan sensor presisi, jaringan telemetri, analitik data, dan protokol respons.

### 3.1. Arsitektur Sistem IoT (berdasarkan Putra et al., 2024)

```
[Sensor DS18B20] → [Mikrokontroler ESP32] → [Wi-Fi/GSM Gateway]
                                                   ↓
                       [Cloud Database] ← → [Dashboard Web/Mobile]
                                                   ↓
                              [Alert Buzzer + SMS/WhatsApp Gateway]
```

Sensor DS18B20 dipilih karena resolusi 9–12 bit (akurasi ±0,5°C pada rentang -10°C sampai +85°C), antarmuka 1-Wire yang memungkinkan multi-drop banyak probe pada satu pin, serta konsumsi daya rendah (3,0–5,5 V). Putra et al. (2024) memasang probe di dalam *cold chain box* UPTD Farmasi Siak sehingga suhu internal terpantau kontinu setiap 1–5 detik, menggantikan pencatatan manual yang dilakukan setiap 2 jam.

### 3.2. Prosedur Operasional Standar (SOP)

1. **Pra-operasional (T-1 hari):**
   - Kalibrasi sensor DS18B20 terhadap termometer referensi bersertifikat (sertifikat ISO/IEC 17025).
   - Validasi *gateway* jaringan dan *power backup* (UPS atau baterai Li-ion 18650 minimal 8 jam).
   - *Sanity check* algoritma peringatan.

2. **Operasional harian:**
   - Logging otomatis dengan interval $\Delta t = 60$ detik (atau 30 detik untuk produk ultra-sensitif).
   - *Threshold alert* diset pada $T