# 2614 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products) Berbasis Integrasi IoT dan Analisis Kuantitatif Rekayasa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan laut, produk susu, dan bahan biologis lainnya. Karakteristik operasional cold chain mensyaratkan pemeliharaan suhu pada rentang termal sempit (umumnya $2^\circ C$ hingga $8^\circ C$ untuk vaksin menurut WHO PQS E001; $-18^\circ C$ hingga $-25^\circ C$ untuk produk beku) sepanjang proses penyimpanan, penanganan, dan distribusi. Setiap deviasi suhu melebihi ambang batas yang diizinkan akan memicu degradasi kualitas yang tidak dapat dipulihkan (*irreversible degradation*), sehingga memunculkan risiko kerugian ekonomi, klinis, dan keselamatan publik yang signifikan.

Khurshid dan Siddiqui (2024) dalam naskah "A Resilience Model for Cold Chain Logistics of Perishable Products" ([DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti urgensi pengembangan model resiliensi kuantitatif untuk menilai kemampuan sistem cold chain dalam menghadapi gangguan (*disruptions*), seperti kegagalan refrigerasi, keterlambatan distribusi, kerusakan infrastruktur, atau anomali sensor. Pendekatan tradisional yang berfokus pada reliabilitas komponen (*reliability-centered*) terbukti tidak cukup, karena dalam konteks rantai dingin, kemampuan untuk pulih (*recoverability*) setelah terjadi degradasi kinerja memiliki bobot yang sama pentingnya dengan pencegahan kegagalan itu sendiri. Oleh karena itu, paradigma rekayasa bergeser dari sekadar *Mean Time Between Failures* (MTBF) menuju *resilience triangle* yang mengkuantifikasi kerugian fungsional selama periode gangguan.

Konteks empiris diperkuat oleh temuan Putra, Defit, dan Nurcahyo (2024) dalam studi "Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20" ([DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan realitas operasional pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Penelitian ini menemukan tiga permasalahan struktural: (1) cold chain box sebagai media penyimpanan vaksin tidak dilengkapi alat pemantauan suhu *real-time*; (2) sistem peringatan dini (*early warning system*) bagi apoteker tidak tersedia ketika suhu melebihi ambang batas akibat kerusakan internal maupun eksternal; serta (3) proses pencatatan suhu masih dilakukan secara manual pada *log sheet* setiap 2 jam sekali, yang selain rentan terhadap human error juga menghasilkan resolusi temporal yang sangat rendah untuk mendeteksi transien termal. Kombinasi ketiga kelemahan ini secara langsung menurunkan *resilience index* rantai dingin, karena durasi deteksi (*detection latency*) menjadi bottleneck utama yang menentukan apakah produk dapat diselamatkan atau harus dimusnahkan.

Secara ekonomis, World Health Organization (WHO) memperkirakan bahwa kegagalan cold chain menyebabkan kerugian hingga US\$ 35 miliar per tahun secara global pada sektor farmasi dan pangan, dengan tingkat pemborosan (*wastage rate*) vaksin di negara berkembang mencapai 20–50%. Oleh sebab itu, integrasi antara model resiliensi kuantitatif Khurshid & Siddiqui (2024) dan implementasi IoT monitoring berbasis DS18B20 (Putra et al., 2024) menjadi kerangka rekayasa yang sangat relevan untuk工业 *industrial engineering* modern, di mana pengambilan keputusan berbasis data (*data-driven decision making*) dan kemampuan adaptif sistem menjadi pilar utama keberlanjutan operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Resiliensi Sistem Cold Chain

Khurshid dan Siddiqui (2024) memformulasikan resiliensi cold chain sebagai fungsi multi-dimensi yang menggabungkan empat atribut inti: **(1) absorptivitas** (kemampuan menahan guncangan tanpa kehilangan fungsi), **(2) adaptabilitas** (kapasitas reorganisasi terhadap perubahan kondisi), **(3) recoverabilitas** (kecepatan kembali ke kondisi operasional standar), dan **(4) restorabilitas** (pemulihan kualitas produk pasca-gangguan). Indeks resiliensi total didefinisikan sebagai:

$$R_{total} = \int_{t_0}^{t_0+T_r} Q(t) \, dt$$

di mana $Q(t)$ adalah fungsi kualitas termal ternormalisasi (*normalized thermal quality function*), $t_0$ adalah waktu onset gangguan, dan $T_r$ adalah waktu pemulihan total (*total recovery time*). Nilai $R_{total} \in [0, 1]$ dengan nilai 1 menunjukkan sistem yang sepenuhnya resilien tanpa degradasi.

### 2.2. Fungsi Degradasi Kualitas Termal

Ketika suhu menyimpang dari rentang operasional $\left[T_{min}, T_{max}\right]$, kualitas produk menurun mengikuti persamaan Arrhenius termodifikasi yang lazim digunakan dalam studi stabilitas farmasi:

$$Q(t) = Q_0 \cdot \exp\left(-k_{deg} \int_0^t f(T(\tau)) \, d\tau\right)$$

dengan $k_{deg}$ adalah konstanta laju degradasi spesifik produk, dan $f(T(\tau))$ adalah fungsi aktivasi termal:

$$f(T(\tau)) = \begin{cases} 0 & \text{jika } T(\tau) \in [T_{min}, T_{max}] \\ \exp\left(-\dfrac{E_a}{R_g}\left[\dfrac{1}{T(\tau)} - \dfrac{1}{T_{ref}}\right]\right) & \text{lainnya} \end{cases}$$

di mana $E_a$ adalah energi aktivasi (J/mol), $R_g$ adalah konstanta gas universal (8,314 J/(mol·K)), dan $T_{ref}$ adalah suhu referensi absolut.

### 2.3. Model Probabilistik Kegagalan Sensor dengan Distribusi Weibull

Keandalan sensor DS18B20 yang digunakan dalam sistem pemantauan (Putra et al., 2024) dimodelkan menggunakan distribusi Weibull dua parameter:

$$F(t) = 1 - \exp\left(-\left(\frac{t}{\eta}\right)^\beta\right), \quad R(t) = \exp\left(-\left(\frac{t}{\eta}\right)^\beta\right)$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*) dan $\eta$ adalah parameter skala (*scale parameter* atau *characteristic life*).

### 2.4. Resiliensi Berbasis *Resilience Triangle*

Mengikuti kerangka Bruneau & Reinhorn (2007) yang diadopsi Khurshid & Siddiqui (2024), degradasi kinerja sistem cold chain selama gangguan direpresentasikan sebagai segitiga resiliensi:

$$\text{Resilience Loss} = \frac{1}{2} \cdot (T_r - T_0) \cdot \Delta P_{max}$$

di mana $T_0$ adalah waktu onset, $T_r$ adalah waktu pemulihan, dan $\Delta P_{max}$ adalah degradasi kinerja maksimum. Dalam konteks cold chain:

$$\Delta P_{max} = \frac{|T_{observed} - T_{setpoint}|}{T_{threshold} - T_{setpoint}}$$

### 2.5. Indeks Resiliensi Komposit (CRI)

Khurshid dan Siddiqui (2024) memperkenalkan Composite Resilience Index (CRI) yang menggabungkan dimensi waktu, kinerja, dan ekonomi:

$$CRI = w_1 \cdot \frac{T_{target}}{T_r} + w_2 \cdot \left(1 - \frac{\int_{t_0}^{t_0+T_r} Q(t)\,dt}{Q_0 \cdot T_r}\right) + w_3 \cdot \frac{C_{saved}}{C_{total}}$$

dengan $\sum_{i=1}^{3} w_i = 1$, $C_{saved}$ adalah nilai produk yang berhasil diselamatkan, dan $C_{total}$ adalah nilai total produk berisiko.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem IoT Cold Chain Monitoring

Berdasarkan integrasi kedua literatur, arsitektur sistem mengikuti pola **3-tier IoT architecture**:

**Tier 1 — Sensing Layer:** Sensor DS18B20 (resolusi 9–12 bit, akurasi $\pm 0,5^\circ C$ pada rentang $-10^\circ C$ hingga $+85^\circ C$) ditempatkan di multiple zones dalam cold chain box. Sensor ini menggunakan protokol 1-Wire dengan alamat unik 64-bit.

**Tier 2 — Network & Edge Layer:** Mikrokontroler (Arduino/ESP32) melakukan agregasi data, komputasi tepi (*edge computing*), dan transmisi melalui Wi-Fi/LoRa ke gateway.

**Tier 3 — Cloud & Application Layer:** Platform dashboard berbasis *time-series database* (InfluxDB/Grafana) untuk visualisasi, alarm otomatis, dan analitik historis.

### 3.2. SOP Implementasi Standar

```
┌─────────────────────────────────────────────────────────────┐
│  INISIALISASI SISTEM COLD CHAIN (Fase Pra-Operasional)      │
└─────────────────────────────────────────────────────────────┘
            │
            ▼
[1] Kalibrasi sensor DS18B20 terhadap termometer referensi NIST
            │
            ▼
[2] Konfigurasi ambang batas: T_min = 2°C, T_max = 8°C
            │
            ▼
[3] Penetapan parameter transmisi: interval sampling Δt = 60 detik
            │
            ▼
[4] Registrasi alert channel (SMS/WhatsApp/dashboard)
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│  OPERASIONAL BERKALA                                         │
└─────────────────────────────────────────────────────────────┘
            │
            ▼
[5] Pengukuran kontinu Q(t) setiap Δt
            │
            ▼
[6] Evaluasi: apakah T(t) ∈ [T_min, T_max]?
            │
       ┌────┴────┐
      YES        NO
       │          │
       ▼          ▼
  [Normal]   [Trigger Alarm]
   Logging      │
       │          ▼
       │     [Notifikasi tim respon < 30 detik]
       │          │
       │          ▼
       │     [Aktivasi protokol recovery]
       │          │
       └────┬─────┘
            ▼
[7] Komputasi CRI real-time dan update dashboard
```

### 3.3. Protokol Deteksi Anomali

Algoritma deteksi menggunakan *modified Z-score* berbasis Median Absolute Deviation (MAD) untuk robust outlier detection:

$$M_i = \frac{0.6745 \cdot (x_i - \tilde{x})}{MAD}$$

di mana $\tilde{x}$ adalah median, $MAD = \text{median}(|x_i - \tilde{x}|)$. Anomali dideklarasikan ketika $|M_i| > 3,5$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Data Input Operasional (UPTD Farmasi Siak — Adaptasi dari Putra et al., 2024)

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Volume cold chain box | $V$ | 50 | liter |
| Kapasitas vaksin | $N$ | 1.200 | vial |
| Suhu setpoint | $T_{sp}$ | 5 | °C |
| Batas bawah | $T_{min}$ | 2 | °C |
| Batas atas | $T_{max}$ | 8 | °C |
| Konstanta degradasi | $k_{deg}$ | $1,2 \times 10^{-5}$ | jam$^{-1}$ |
| Energi aktivasi | $E_a$ | 83.680 | J/mol |
| Sampling interval | $\Delta t$ | 60 | detik |
| Biaya per vial | $c_{vial}$ | 25.000 | IDR |
| Nilai total produk | $C_{total}$ | 30.000.000 | IDR |
| β (Weibull DS18B20) | $\beta$ | 2,8 | - |
| η (Weibull DS18B20) | $\eta$ | 28.000 | jam |

### 4.2. Skenario Gangguan: Kegagalan Refrigerasi 90 Menit

**Tahap 1: Hitung Laju Degradasi Termal**

Pada $T_{observed} = 12^\circ C$ (di luar ambang batas $T_{max}=8^\circ C$):

$$f(T) = \exp\left(-\frac{83.680}{8.314}\left[\frac{1}{285{,}15} - \frac{1}{278{,}15}\right]\right)$$

Perhitungan intermediet:
$$\frac{1}{285{,}15} - \frac{1}{278{,}15} = \frac{278{,}15