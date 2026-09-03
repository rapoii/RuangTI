# 2646 — Model Ketahanan (Resilience) Rantai Dingin untuk Produk Mudah Rusak: Integrasi Pemantauan IoT dan Rekayasa Sistem untuk Keandalan Distribusi Farmasi & Pangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biologis, makanan segar, dan bahan farmasi aktif. Kerusakan pada satu mata rantai akan menghasilkan degradasi kualitas yang tidak dapat dipulihkan (*irreversible quality decay*), menjadikan *cold chain* sebagai salah satu rantai pasok dengan tingkat risiko operasional tertinggi di dunia. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa pendekatan tradisional yang bersifat *reactive*—yakni bertindak setelah kegagalan terdeteksi—tidak lagi memadai, dan perlu diganti dengan kerangka kerja *resilience* yang bersifat *proactive*, *adaptive*, dan *recovery-oriented*.

Urgensi masalah ini tampak pada industri farmasi Indonesia. Putra, Defit, dan Nurcahyo (2024) dalam studi mereka di *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan bahwa UPTD Farmasi Dinas Kesehatan Kabupaten Siak masih mengandalkan pencatatan suhu *cold chain box* secara **manual setiap 2 jam** oleh apoteker pada *log sheet*, tanpa sistem peringatan dini (*real-time alert*) ketika suhu menyimpang dari ambang 2–8°C. Celah operasional ini menyebabkan risiko kehilangan mutu vaksin yang tidak terdeteksi selama jendela waktu antar-pencatatan, sebuah *single point of failure* yang bertentangan langsung dengan filosofi *resilience* yang diajukan Khurshid dan Siddiqui.

Secara ekonomi, WHO memperkirakan bahwa sekitar 50% vaksin global terbuang karena kegagalan rantai dingin (*cold chain failure*), dengan kerugian industri pangan mencapai lebih dari USD 35 miliar per tahun. Dari perspektif Teknik Industri, persoalan ini bukan sekadar masalah teknologi sensor, melainkan masalah **rekayasa sistem** yang menuntut integrasi antara: (1) model probabilistik untuk memprediksi kegagalan, (2) arsitektur sensing *real-time* untuk deteksi dini, dan (3) protokol pemulihan (*recovery protocol*) untuk meminimalkan *downtime* dan kehilangan mutu. Ketiga pilar ini menjadi fokus integratif modul 2646.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Operasional Ketahanan Cold Chain

Berdasarkan kerangka Khurshid dan Siddiqui (2024), *resilience* cold chain didefinisikan sebagai kapasitas sistem untuk mempertahankan fungsinya di bawah gangguan dan pulih dalam waktu yang dapat diterima. Secara matematis, fungsi kinerja sistem $Q(t)$ dapat dinyatakan sebagai:

$$
Q(t) = \begin{cases} Q_0, & t < t_d \\ Q_0 \cdot e^{-\lambda(t - t_d)}, & t \geq t_d \end{cases}
$$

di mana $Q_0$ adalah kapasitas fungsional nominal, $t_d$ adalah waktu onset gangguan (*disruption*), dan $\lambda$ adalah laju degradasi mutu (per jam). Indeks *resilience* kemudian diformulasikan sebagai integral area di bawah kurva kinerja relatif terhadap jendela waktu observasi $[t_0, t_f]$:

$$
R_{idx} = \frac{1}{t_f - t_0} \int_{t_0}^{t_f} \frac{Q(t)}{Q_0} \, dt
$$

Nilai $R_{idx} \in [0, 1]$, dengan nilai mendekati 1 mengindikasikan ketahanan sistem yang tinggi.

### 2.2 Model Keandalan dan Mean Time To Recovery (MTTR)

Untuk komponen kritis seperti unit refrigerasi *cold chain box*, keandalan mengikuti distribusi eksponensial ketika *hazard rate* dianggap konstan:

$$
R(t) = e^{-\mu t}
$$

dengan $\mu$ adalah laju kegagalan. Parameter *Mean Time To Recovery* (MTTR) dan *Mean Time Between Failures* (MTBF) menentukan *availability* sistem:

$$
A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}
$$

Putra et al. (2024) secara empiris menunjukkan bahwa tanpa sistem monitoring otomatis, MTTR pada cold chain konvensional dapat melebihi 2 jam karena menunggu jadwal pencatatan manual berikutnya—suatu kondisi yang melanggar Service Level Agreement (SLA) farmasi.

### 2.3 Model Sensor dan Akuisisi Data IoT

Sensor DS18B20 yang digunakan Putra et al. (2024) memiliki resolusi 0,0625°C dan akurasi ±0,5°C pada rentang -10°C hingga +85°C. Untuk aplikasi vaksin dengan ambang kritis $T_{min} = 2°C$ dan $T_{max} = 8°C$, fungsi peringatan dini didefinisikan sebagai:

$$
\text{Alert}(t) = \begin{cases} 1, & T(t) \notin [T_{min}, T_{max}] \\ 0, & \text{otherwise} \end{cases}
$$

di mana $T(t)$ adalah pembacaan suhu waktu-nyata. Interval sampling $\Delta t$ yang optimal harus memenuhi teorema sampling Nyquist–Shannon terhadap dinamika termal cold chain:

$$
\Delta t \leq \frac{\tau_{th}}{2}
$$

dengan $\tau_{th}$ adalah konstanta waktu termal sistem (orde 10–20 menit untuk cold chain box standar).

### 2.4 Fungsi Kerugian Ekonomi

Kerugian akibat penyimpangan suhu dapat dimodelkan sebagai kombinasi kerugian mutu produk dan kerugian operasional:

$$
L_{total} = \sum_{i=1}^{n} V_i \cdot \mathbb{1}_{[T \notin [T_{min}, T_{max}]]} + C_{op} \cdot t_{down}
$$

di mana $V_i$ adalah nilai ekonomis produk ke-$i$, $\mathbb{1}$ adalah indikator, dan $C_{op}$ adalah biaya operasional per jam selama gangguan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *resilience model* untuk cold chain mengikuti arsitektur berlapis lima (*five-layer architecture*) yang diadaptasi dari kerangka Khurshid & Siddiqui (2024) dan tervalidasi secara empiris oleh Putra et al. (2024):

**Layer 1 – Akuisisi Data Sensor:** Termometer digital DS18B20 ditempatkan pada minimal tiga titik kritis cold chain box: inlet evaporator, mid-chamber, dan outlet. Sensor berkomunikasi melalui protokol 1-Wire ke mikrokontroler (NodeMCU/Arduino).

**Layer 2 – Edge Processing & Transmisi:** Mikrokontroler melakukan agregasi data setiap $\Delta t = 60$ detik, mengkalkulasi statistik berjalan (*moving average*, *standard deviation*), dan mengirimkan ke server via Wi-Fi/MQTT.

**Layer 3 – Cloud Analytics & Decision Support:** Server mengeksekusi aturan $\text{Alert}(t)$, menghitung $R_{idx}$ secara *rolling*, dan menjalankan model prediktif berbasis *machine learning* untuk anomali suhu.

**Layer 4 – Notifikasi & Eskalasi:** Peringatan dikirim via SMS, aplikasi mobile, dan *buzzer* lokal kepada apoteker, supervisor, dan *quality assurance officer* sesuai matriks eskalasi.

**Layer 5 – Recovery Protocol & CAPA:** Prosedur Tindakan Perbaikan dan Pencegahan (*Corrective and Preventive Action*) diaktivasi otomatis ketika $\text{Alert}(t)=1$ selama lebih dari ambang waktu yang ditentukan.

```
[Sensor DS18B20] → [Edge MCU] → [Gateway MQTT] → [Cloud DB] 
        ↓                ↓              ↓                ↓
   T(t) raw        Validasi      Publish ke        Evaluasi Alert,
   kalibrasi       & filter      broker            R_idx, prediksi
        ↓                ↓              ↓                ↓
        └────────────── [Notifikasi & Recovery Protocol] ──────────┘
```

**SOP Pencatatan & Audit:** Sesuai rekomendasi Putra et al. (2024), sistem digital menggantikan *log sheet* manual dengan *timestamped electronic record* yang memenuhi prinsip ALCOA+ (*Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, Available*).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi Kabupaten Siak mengelola cold chain box berisi 250 vial vaksin COVID-19 dengan nilai total $V_{total}$ = Rp 187.500.000 (Rp 750.000/vial). Suhu lingkungan rata-rata室外 30°C, cold chain box menggunakan es pack PCM (*phase change material*).

**Parameter:**
- $T_{min} = 2°C$, $T_{max} = 8°C$, $T_{nominal} = 5°C$
- $Q_0 = 1{,}0$ (kapasitas nominal)
- Laju degradasi mutu saat suhu menyimpang: $\lambda = 0{,}02$/menit pada $T > 8°C$
- MTBF unit refrigerasi: 720 jam
- MTTR konvensional (manual): 120 menit
- MTTR dengan IoT alert: 10 menit
- Interval sampling $\Delta t = 60$ detik

**Perhitungan 1: Availability sistem.**

Skenario konvensional (tanpa IoT):
$$
A_{conv} = \frac{720}{720 + 2{,}0} = 0{,}99723 \quad (99{,}723\%)
$$

Skenario dengan IoT alert (Putra et al., 2024):
$$
A_{IoT} = \frac{720}{720 + 0{,}1667} = 0{,}99977 \quad (99{,}977\%)
$$

Peningkatan availability $\Delta A = 0{,}254$ poin persentase, atau penurunan *downtime* sebesar 92%.

**Perhitungan 2: Indeks Resilience untuk gangguan 60 menit pada suhu 12°C.**

Durasi total degradasi aktif $t_{active} = 50$ menit (10 menit deteksi + 50 menit pemulihan pasca-alert). Fungsi kinerja:
- $Q(t) = 1{,}0$ untuk $t \in [0, 10]$ menit (fase deteksi)
- $Q(t) = e^{-0{,}02(t-10)}$ untuk $t \in [10, 60]$ menit (fase degradasi)

$$
R_{idx} = \frac{1}{60}\left[10 + \int_{10}^{60} e^{-0{,}02(t-10)} \, dt\right]
$$

Evaluasi integral:
$$
\int_{0}^{50} e^{-0{,}02u} \, du = \frac{1 - e^{-1}}{0{,}02} = \frac{0{,}6321}{0{,}02} = 31{,}606
$$

Maka:
$$
R_{idx} = \frac{10 + 31{,}606}{60} = \frac{41{,}606}{60} = 0{,}6934
$$

**Perhitungan 3: Kerugian ekonomi jika gangguan tidak terdeteksi selama 4 jam pada $T = 12°C$.**

Seluruh vial mengalami degradasi mutu melewati ambang farmasi:
$$
L_{total} = 250 \times 750{,}000 = \text{Rp } 187{,}500{,}000
$$

**Perhitungan 4: Efisiensi biaya investasi IoT.**

Investasi sistem IoT (sensor, MCU, gateway, cloud): Rp 12.500.000. Pengurangan kerugian tahunan yang diharapkan dengan asumsi 3 insiden/tahun:
$$
\text{ROI} = \frac{3 \times 187{,}500{,}000 - 12{,}500{,}000}{12{,}500{,}000} \times 100\% = 4.400\%
$$

**Interpretasi Manajerial:** Implementasi sistem IoT tidak hanya memenuhi tujuan rekayasa (*engineering objective*: meningkatkan resilience dan availability), tetapi juga memberikan justifikasi ekonomi yang luar biasa (*business case* yang kuat). Batas kritis $R_{idx} \geq 0{,}7$ mengindikasikan bahwa sistem masih dalam koridor resilience yang sehat; penurunan di bawah nilai ini memerlukan audit CAPA segera.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Model

Model Khurshid & Siddiqui