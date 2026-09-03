# 2166 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products): Integrasi Sensor IoT, Formulasi Kuantitatif, dan SOP Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari rantai pasok produk termolabil seperti vaksin, produk biofarmasi, makanan laut, hortikultura segar, dan bahan kimia reaktif. Kerusakan pada satu simpul rantai dingin—misalnya peningkatan suhu pada *cold chain box*—dapat memicu kerugian ekonomi, klinis, dan sosial yang tidak proporsional terhadap magnitudo gangguan fisik yang terjadi. Khurshid dan Siddiqui (2024) memposisikan *resilience* sebagai paradigma baru yang melengkapi paradigma konvensional *risk management* dan *reliability engineering*: sementara *reliability* berfokus pada probabilitas kegagalan sistem, *resilience* secara eksplisit mencakup kemampuan sistem untuk **mengabsorbsi**, **beradaptasi**, dan **pulih** dari gangguan yang terjadi (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)).

Urgensi topik ini dikonfirmasi oleh studi empiris Putra, Defit, dan Nurcahyo (2024) di UPTD Farmasi, Dinas Kesehatan Kabupaten Siak, yang menemukan dua masalah struktural pada *cold chain box* vaksin: (1) ketiadaan alat pemantauan suhu *real-time* yang mampu memberikan peringatan dini ketika suhu menyimpang dari ambang batas, dan (2) pencatatan suhu yang masih dilakukan secara manual setiap 2 (dua) jam pada *log sheet* oleh apoteker (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Pola operasional semacam ini lazim dijumpai di negara berkembang, di mana celah antara interval pencatatan (120 menit) dan waktu kritis degradasi produk (yang dapat terjadi dalam hitungan menit pada suhu ruang) menciptakan *unobserved failure window* yang berbahaya.

Secara ekonomi, World Health Organization (WHO) melalui Performance, Quality and Safety (PQS) standard E001 menetapkan kisaran suhu penyimpanan vaksin antara $+2^\circ\text{C}$ hingga $+8^\circ\text{C}$. Setiap kenaikan suhu $1^\circ\text{C}$ di atas ambang dapat mempercepat laju degradasi potenesi vaksin mengikuti kinetika Arrhenius. Pada industri perishable lain—misalnya rantai dingin udang beku pada suhu $-18^\circ\text{C}$ atau produk hortikultura pada $+4^\circ\text{C}$—dampak finansial pelanggaran suhu diestimasi mencapai 30–40% dari nilai produk yang terdampak (studi-studi terkait dalam Khurshid & Siddiqui, 2024). Dengan demikian, integrasi antara model *resilience* teoritis (Paper 1) dan implementasi sensor IoT DS18B20 (Paper 2) menjadi relevan sebagai kerangka pemecahan masalah multidisiplin: dari formulasi matematis hingga arsitektur teknis *end-to-end*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Ketahanan (Resilience) Cold Chain

Khurshid dan Siddiqui (2024) membangun kerangka *resilience* sebagai fungsi dari empat kapasitas sistem yang bersifat aditif terhadap kualitas layanan $Q(t)$:

$$R_{sys} = f(C_{abs}, C_{ad}, C_{rec}, C_{trans})$$

di mana $C_{abs}$ = kapasitas absorbsi, $C_{ad}$ = kapasitas adaptasi, $C_{rec}$ = kapasitas pemulihan, dan $C_{trans}$ = kapasitas transformasi. Untuk cold chain, kapasitas absorbsi terutama ditentukan oleh massa termal media pendingin dan isolasi termal wadah, sedangkan kapasitas pemulihan sangat bergantung pada latensi sistem peringatan dini.

### 2.2. Indeks Ketahanan Berbasis Segitiga Performa (*Resilience Triangle*)

Mengikuti formalisme Bruneau et al. yang diadopsi dalam paper, indeks *resilience* didefinisikan sebagai rasio antara area di bawah kurva kualitas aktual terhadap area referensi pada kondisi nominal:

$$\psi = \frac{\displaystyle\int_{t_0}^{t_1} Q_0(t)\, dt - \displaystyle\int_{t_1}^{t_2} [Q_0(t) - Q(t)]\, dt}{\displaystyle\int_{t_0}^{t_1} Q_0(t)\, dt}$$

dengan $Q_0(t)$ adalah fungsi kualitas nominal, $t_1$ adalah waktu onset gangguan, dan $t_2$ adalah waktu pemulihan penuh. Nilai $\psi \in [0,1]$; semakin mendekati 1, semakin resilien sistem.

### 2.3. Kinetika Degradasi Termal (Persamaan Arrhenius)

Laju degradasi kualitas produk termolabil dimodelkan sebagai:

$$k(T) = A \cdot e^{-E_a / RT}$$

di mana:
- $k(T)$ = konstanta laju degradasi pada suhu $T$ (Kelvin)
- $A$ = faktor pre-eksponensial (s$^{-1}$)
- $E_a$ = energi aktivasi (J/mol); untuk produk biologis tipikal $E_a \approx 60$–$100$ kJ/mol
- $R = 8{,}314$ J/(mol·K) = konstanta gas universal

Dampak kumulatif pelanggaran suhu terhadap masa simpan (*shelf-life*) dihitung melalui integral laju degradasi:

$$\text{SL}_{\text{used}} = \int_{0}^{t_{exp}} k(T(t))\, dt$$

di mana $t_{exp}$ adalah total waktu eksposur pada suhu aktual. Produk dinyatakan rusak ketika $\text{SL}_{\text{used}} \geq \text{SL}_{\text{total}}$.

### 2.4. Model Reliabilitas Sistem Sensor

Untuk jaringan sensor DS18B20 yang digunakan oleh Putra et al. (2024), reliabilitas fungsi sensor mengikuti distribusi eksponensial:

$$R_{sensor}(t) = e^{-\lambda_{sensor} t}$$

dengan $\lambda_{sensor}$ = laju kegagalan per satuan waktu (umumnya $\lambda \approx 1\times 10^{-6}$/jam untuk sensor kalibrasi pabrik). Ketersediaan (*availability*) sistem monitoring didefinisikan sebagai:

$$A_{sys} = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}}$$

di mana MTBF = *Mean Time Between Failures*, MDT = *Mean Downtime*.

### 2.5. Model Termal *Cold Chain Box*

Dinamika suhu internal cold chain box mengikuti persamaan keseimbangan termal kapasitif orde pertama:

$$m \cdot c_p \cdot \frac{dT_{in}}{dt} = -h \cdot A \cdot (T_{in} - T_{out}) + Q_{int}$$

dengan $m$ = massa beban termal, $c_p$ = kapasitas panas jenis, $h$ = koefisien transfer panas konvektif, $A$ = luas permukaan efektif, dan $Q_{int}$ = panas internal (pembukaan pintu, konduksi, radiasi).

---

## 3. Metodologi Rekayasa & SOP

### 3.1. Arsitektur Sistem Monitoring IoT (Berdasarkan Putra et al., 2024)

Arsitektur yang diimplementasikan di UPTD Farmasi Siak tersusun atas empat lapisan fungsional:

```
[Sensor Layer] → [Edge Layer] → [Network Layer] → [Application Layer]
   DS18B20         MCU              Wi-Fi/GSM         Dashboard
   (±0.5°C)      (ESP32)         (MQTT/HTTP)         (Alert + Log)
```

- **Sensor Layer:** Sensor DS18B20 dengan akurasi $\pm 0{,}5^\circ\text{C}$ pada kisaran $-55^\circ\text{C}$ hingga $+125^\circ\text{C}$, resolusi konfigurabel 9–12 bit (resolusi 12 bit = $0{,}0625^\circ\text{C}$).
- **Edge Layer:** Mikrokontroler ESP32 melakukan akuisisi data dengan periode sampling $\Delta t$ dan menjalankan logika ambang batas.
- **Network Layer:** Transmisi data melalui protokol MQTT dengan *publish interval* adaptif (lebih cepat saat anomali).
- **Application Layer:** *Dashboard* visualisasi dan sistem peringatan berbasis ambang batas (threshold).

### 3.2. SOP Operasional Cold Chain

| No | Langkah | Penanggung Jawab | Frekuensi | Standar Acuan |
|----|---------|------------------|-----------|---------------|
| 1 | Pra-pembekuan/ pra-pendinginan wadah | Teknisi Farmasi | Tiap kali sebelum muat | WHO PQS E001 |
| 2 | Verifikasi kalibrasi sensor DS18B20 | Apoteker | Mingguan | $\pm 0{,}5^\circ\text{C}$ |
| 3 | Pemuatan produk termolabil | Apoteker | Per批次 | Arrhenius $k(T)$ check |
| 4 | Monitoring *real-time* via dashboard | Apoteker on-duty | Kontinyu ($\Delta t \leq 5$ min) | SLA $\psi \geq 0{,}90$ |
| 5 | Investigasi anomali | Tim QA | Per kejadian | RCA 5-Why |
| 6 | Penarikan produk terdampak | Apoteker Penanggung Jawab | Jika $\text{SL}_{\text{used}} \geq \text{SL}_{\text{total}}$ | Prosedur Recall |
| 7 | Audit & pencatatan log sheet digital | QA Manager | Harian, Mingguan, Bulanan | ISO 9001:2015 klausal 7.5 |

### 3.3. Diagram Alir Logika Peringatan Dini

```
START → Baca T_sensor
        ↓
   Apakah T_sensor > T_upper?
   ┌────┴────┐
  YA        TIDAK
   ↓          ↓
  ALERT    Apakah T_sensor < T_lower?
  SMS/APP   ┌────┴────┐
   ↓       YA        TIDAK
  Log      ALERT     Log normal
   ↓         ↓         ↓
   └────→ T_next ←──────┘
              ↓
         (loop Δt)
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1. Parameter Input Industri (Vaksin di UPTD Siak)

Asumsikan studi kasus sebagai berikut (disesuaikan dengan Paper 2 dan standar WHO PQS):

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Suhu nominal | $T_0$ | $+5$ | $^\circ$C |
| Suhu ambang atas | $T_u$ | $+8$ | $^\circ$C |
| Energi aktivasi tipikal | $E_a$ | 80.000 | J/mol |
| Faktor pre-eksponensial | $A$ | $1{,}0 \times 10^{14}$ | s$^{-1}$ |
| Konstanta gas | $R$ | 8,314 | J/(mol·K) |
| Total masa simpan | $\text{SL}_{\text{total}}$ | 1,0 | tahun ($3{,}15 \times 10^7$ s) |
| Durasi pelanggaran suhu | $t_{exp}$ | 4 | jam (14.400 s) |

### 4.2. Perhitungan Laju Degradasi

**Langkah 1: Konversi suhu**
$$T_{viol} = 8 + 273{,}15 = 281{,}15 \text{ K}$$

**Langkah 2: Hitung $k$ pada suhu pelanggaran**
$$k(281{,}15) = 1{,}0 \times 10^{14} \cdot e