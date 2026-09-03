# 1606 — Model Resiliensi untuk Rantai Dingin (Cold Chain) Produk Mudah Rusak: Integrasi Pemantauan IoT dan Pemodelan Stokastik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup produk farmasi, vaksin, makanan laut, produk susu, dan biofarmaka. Menurut Khurshid dan Siddiqui (2024) dalam artikel "A Resilience Model for Cold Chain Logistics of Perishable Products" yang dipublikasikan melalui *Social Science Research Network* dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599), gangguan pada rantai dingin — yang dikenal dengan istilah *temperature excursion* — memiliki dampak kumulatif terhadap degradasi mutu produk yang tidak dapat dipulihkan (*irreversible quality loss*). Studi tersebut membangun model resiliensi yang mengkuantifikasi kemampuan sistem untuk menahan, menyerap, memulihkan, dan beradaptasi terhadap gangguan tersebut.

Konteks industri yang melatarbelakangi riset ini sangat relevan dengan permasalahan operasional di lapangan. Seperti dilaporkan oleh Putra, Defit, dan Nurcahyo (2024) dalam Jurnal KomtekInfo Vol. 12 No. 1 (DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)), Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak menghadapi masalah struktural berupa (i) tidak adanya alat pemantau suhu *realtime* pada *cold chain box* vaksin, (ii) potensi kenaikan suhu akibat kerusakan internal/eksternal tanpa mekanisme peringatan dini, dan (iii) pencatatan suhu manual setiap 2 jam pada *log sheet* yang rentan *human error* dan tidak mampu mendeteksi *transient excursion*. Kedua literatur ini saling melengkapi: paper pertama menyediakan kerangka resiliensi makro, sementara paper kedua memberikan bukti empiris kebutuhan akan instrumentasi digital pada tingkat operasional.

Urgensi ekonomi dari gangguan rantai dingin sangat besar. Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin terbuang secara global karena kegagalan *cold chain*, dengan kerugian ekonomi farmasi global mencapai lebih dari USD 35 miliar per tahun. Di sektor makanan, USDA melaporkan bahwa sekitar 30–40% pasokan makanan rusak sebelum sampai ke konsumen. Dalam konteks manufaktur biofarmaka, satu kali *excursion* suhu di luar rentang 2–8°C selama lebih dari 30 menit dapat menyebabkan seluruh batch produk bernilai jutaan dolar harus dimusnahkan. Oleh karena itu, rekayasa sistem industri modern memerlukan pendekatan *resilience engineering* yang tidak hanya meminimalkan probabilitas kegagalan, tetapi juga memastikan kemampuan pemulihan yang cepat dan adaptif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Empat Dimensi

Mengikuti kerangka Khurshid & Siddiqui (2024), resiliensi rantai dingin $R$ didefinisikan sebagai fungsi empat kapabilitas utama:

$$R = f(C_{resist}, C_{absorb}, C_{restore}, C_{adapt})$$

di mana:
- $C_{resist}$ = kapasitas resistensi (kemampuan mencegah gangguan)
- $C_{absorb}$ = kapasitas absorbsi (kemampuan menahan dampak tanpa kegagalan total)
- $C_{restore}$ = kapasitas restorasi (kecepatan pemulihan ke kondisi operasional)
- $C_{adapt}$ = kapasitas adaptasi (pembelajaran untuk mencegah gangguan berulang)

### 2.2 Model Degradasi Kualitas Termal

Kualitas produk termolabil terdegradasi mengikuti kinetika Arrhenius yang dimodifikasi. Fungsi kelayakan (*goodness*) $G(t)$ produk pada waktu $t$ didefinisikan:

$$G(t) = G_0 \cdot \exp\left(-\int_0^t k(T(\tau))\, d\tau\right)$$

dengan $G_0$ adalah kualitas awal, dan laju degradasi $k(T)$ mengikuti persamaan Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R_g T}\right)$$

di mana $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi, $R_g = 8{,}314$ J/(mol·K) konstanta gas universal, dan $T$ suhu absolut (Kelvin). Ketika suhu menyimpang dari rentang operasional $T_{op}$, *effective decay rate* meningkat secara eksponensial.

### 2.3 Indeks Resiliensi Kuantitatif

Indeks resiliensi sistem $\rho$ didefinisikan sebagai rasio antara *performance recovery curve* dan *ideal performance baseline* selama horizon waktu $[t_d, t_d + H]$ di mana $t_d$ adalah waktu deteksi gangguan:

$$\rho = \frac{1}{H \cdot P^*} \int_{t_d}^{t_d+H} P(t)\, dt$$

dengan $P(t)$ adalah *system performance function* aktual dan $P^*$ adalah *target performance*. Nilai $\rho \in [0, 1]$ di mana $\rho = 1$ menunjukkan resiliensi sempurna.

### 2.4 Model Probabilitas Kegagalan Sensor IoT

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0{,}5°C$ pada resolusi 9–12 bit. Probabilitas sensor gagal membaca suhu dalam toleransi $\epsilon$ mengikuti distribusi normal:

$$P(\text{error} > \epsilon) = 1 - \Phi\left(\frac{\epsilon}{\sigma_{sensor}}\right)$$

dengan $\Phi$ fungsi distribusi kumulatif normal standar dan $\sigma_{sensor}$ simpangan baku kesalahan sensor. Untuk DS18B20, $\sigma_{sensor} \approx 0{,}25°C$.

### 2.5 Formulasi Optimasi Biaya-Resiliensi

Pemilihan antara investasi instrumentasi dan *expected loss* dapat diformulasikan sebagai masalah minimisasi biaya total expected:

$$\min_{x} \; C_{total} = C_{inv}(x) + \sum_{i=1}^{n} P_i(x) \cdot L_i$$

di mana $x$ adalah vektor keputusan investasi (jumlah sensor, frekuensi sampling, redundansi), $C_{inv}(x)$ biaya investasi, $P_i(x)$ probabilitas skenario gangguan $i$, dan $L_i$ kerugian terkait.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Terintegrasi

Berdasarkan integrasi kedua literatur, arsitektur sistem cold chain resiliens modern terdiri dari empat lapisan:

1. **Lapisan Sensor (Perception Layer):** Sensor DS18B20 (*1-Wire digital temperature sensor*) dengan akurasi $\pm 0{,}5°C$, jangkauan pengukuran $-55°C$ hingga $+125°C$, dan resolusi konfigurable 9–12 bit. Sensor ini dipilih karena konsumsi daya rendah, kemampuan *multi-drop* hingga 127 sensor pada satu bus, dan harga terjangkau.
2. **Lapisan Komunikasi:** Protokol MQTT (*Message Queuing Telemetry Transport*) untuk transmisi data ringan dengan QoS level 1 (*at least once delivery*) guna menjamin setiap pembacaan suhu tercatat.
3. **Lapisan Edge Computing:** Mikrokontroler ESP32 atau Arduino yang melakukan agregasi data, *threshold checking*, dan *early warning* lokal tanpa bergantung pada konektivitas cloud penuh.
4. **Lapisan Cloud & Analytics:** Dashboard berbasis *time-series database* (InfluxDB/Grafana) dengan algoritma deteksi anomali berbasis *statistical process control*.

### 3.2 SOP Prosedur Pemantauan dan Respons

SOP berikut merangkum prosedur yang harus dijalankan operator cold chain:

| Tahapan | Prosedur | Standar Acuan |
|---------|----------|---------------|
| **Pra-Operasional** | Kalibrasi sensor DS18B20 dengan *ice-bath calibration* pada $0{,}0 \pm 0{,}1°C$ | ISO 17025 |
| **Operasional** | Sampling suhu setiap 60 detik dengan logging ke cloud | WHO PQS E006 |
| **Deteksi Anomali** | Trigger alarm jika $\lvert T - T_{set} \rvert > \Delta T_{crit}$ selama $t > t_{persist}$ | Putra et al. (2024) |
| **Respons Insiden** | Aktivasi SOP pemulihan dalam MTTR $\leq 15$ menit | Khurshid & Siddiqui (2024) |
| **Post-Incident** | Analisis *root cause failure* dan update parameter $C_{adapt}$ | ISO 31000 |

### 3.3 Diagram Alir Logika Pengendalian

```
[Start] → [Inisialisasi Sensor] → [Baca T]
   ↓                                 ↓
[Hitung G(t)] ← [Validasi Pembacaan] → [Error?]
   ↓                                       ↓
[T dalam rentang?]                    [Retry/Recalibrate]
   ↓ Ya        ↓ Tidak
[Log Normal]  [Trigger Alarm]
                  ↓
            [Notifikasi Operator]
                  ↓
            [Aktivasi Prosedur Pemulihan]
                  ↓
            [Update Database Insiden]
                  ↓
            [Feedback ke Model Adaptasi]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Pertimbangkan pengiriman 5.000 dosis vaksin COVID-19 dari UPTD Farmasi Kabupaten Siak ke Puskesmas di daerah terpencil dengan waktu tempuh 8 jam. Suhu operasional yang disyaratkan adalah $T_{set} = 5°C$ dengan toleransi $\pm 2°C$, sehingga batas kritis $T_{crit,upper} = 7°C$. Cold chain box menggunakan sensor DS18B20 dan *phase change material* (PCM) sebagai pendingin cadangan.

### 4.2 Perhitungan Degradasi Kualitas pada Kondisi Normal

Parameter Arrhenius untuk degradasi mRNA vaccine (berdasarkan literatur biofarmasi): $A = 1{,}2 \times 10^{18}$ /jam, $E_a = 75$ kJ/mol.

Pada suhu konstan $T = 5°C = 278{,}15$ K:

$$k(278{,}15) = 1{,}2 \times 10^{18} \cdot \exp\left(-\frac{75.000}{8{,}314 \times 278{,}15}\right)$$

$$k(278{,}15) = 1{,}2 \times 10^{18} \cdot \exp(-32{,}42) = 1{,}2 \times 10^{18} \cdot 7{,}88 \times 10^{-15}$$

$$k(278{,}15) \approx 9{,}46 \times 10^{3} \text{ /jam (efektif sangat rendah)}$$

Kualitas setelah 8 jam: $G(8) = G_0 \cdot \exp(-9{,}46 \times 10^3 \times 8) \approx G_0 \cdot e^{-75.680} \approx 0$

*Catatan: Ini mengilustrasikan bahwa pada suhu konstan 5°C, degradasi termal murni minimal; permasalahan utama muncul saat excursion.*

### 4.3 Skenario Temperature Excursion

Misalkan terjadi *excursion* pada jam ke-3 hingga jam ke-5 (durasi 2 jam) dengan suhu naik menjadi $T_{exc} = 9°C = 282{,}15$ K karena kegagalan PCM:

$$k(282{,}15) = 1{,}2 \times 10^{18} \cdot \exp\left(-\frac{75.000}{8{,}314 \times 282{,}15}\right)$$

$$k(282{,}15) = 1{,}2 \times 10^{18} \cdot \exp(-31{,}97) = 1{,}2 \times 10^{18} \cdot 1{,}35 \times 10^{-14}$$

$$k(282{,}15) \approx 1{,}62 \times 10^{4} \text{ /jam}$$

Degradasi tambahan selama 2 jam excursion:

$$\Delta G = G_0 \cdot \left(1 - e^{-1{,}62 \times 10^4 \times 2}\right) \approx G_0$$

Artinya, 2 jam pada 9°C sudah menurunkan potensi vaksin secara signifikan. Dengan deteksi cepat (dalam 15 menit menggunakan IoT), dosis degradasi berkurang drastis:

$$k(282{,}15) \times 0{,}25 \text{ jam} = 4.050 \text{ unit degradasi}$$

$$G(0{,}25) = G_0 \cdot e^{-4.050} \approx 0 \text{ (masih signifikan)}$$

Namun, pada 9°C degradasi memang inheren. Analisis lebih akurat menggunakan model dosis-akumulatif kumulatif (WHO PQS):

$$V(t) = V_0 \cdot 2^{-\sum_i \frac{\Delta t_i}{\tau_{1/2}(T_i)}}$$