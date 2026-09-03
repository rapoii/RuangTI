# 2182 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik cold chain merupakan subsistem kritis dalam rantai pasok produk termolabil (vaccines, produk biofarmasi, makanan segar, dan bahan kimia reagen) yang mempertahankan suhu tertentu sepanjang proses produksi, penyimpanan, distribusi, hingga ke tangan konsumen akhir. Khurshid & Siddiqui (2024) dalam paper *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa mayoritas model cold chain konvensional bersifat *deterministic* dan *steady-state*, sehingga gagal mengakomodasi guncangan (*disruptions*) seperti pemadaman listrik, kerusakan refrigerasi unit, penyimpangan suhu ekstrem, dan延误 (*delay*) transportasi. Ketahanan (resilience) cold chain menjadi variabel strategis karena setiap kenaikan suhu 1°C di atas ambang batas pada produk termolabil tertentu dapat menurunkan potensi (potency) hingga 5–10%, yang berimplikasi langsung pada kerugian ekonomi, kesehatan publik, dan reputasi regulator.

Di sisi operasional, Putra, Defit, & Nurcahyo (2024) dalam paper *"Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20"* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan kasus empiris di **Dinas Kesehatan Kabupaten Siak**, di mana Unit Pelaksana Teknis Dinas (UPTD) Farmasi menghadapi dua masalah struktural: (1) cold chain box tidak dilengkapi sistem pemantauan suhu *real-time*, dan (2) pencatatan suhu masih dilakukan secara manual setiap 2 jam pada *log sheet* oleh apoteker. Masalah pertama menyebabkan deteksi dini yang terlambat terhadap anomali suhu, sementara masalah kedua menimbulkan *data integrity gap* yang signifikan karena rentan terhadap human error, kelalaian shift malam, serta risiko pemalsuan data.

Secara ekonomi, WHO (2024) melaporkan bahwa lebih dari 50%疫苗 global terbuang sia-sia karena kegagalan cold chain, dengan nilai kerugian mencapai USD 35–40 miliar per tahun. Di Indonesia sendiri, dengan cakupan imunisasi nasional >90%, kerentanan satu titik pada cold chain dapat mengancam program imunisasi jutaan anak. Oleh karena itu, integrasi antara **model resilience teoretis** (Khurshid & Siddiqui, 2024) dan **sistem monitoring IoT** (Putra et al., 2024) menjadi pendekatan yang saling komplementer — di mana model memberikan kerangka kuantitatif untuk mengukur kemampuan pulih (*recoverability*), sementara IoT menyediakan data primer untuk mengkalibrasi parameter model tersebut secara empiris.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Degradasi Termal Arrhenius

Degradasi mutu produk termolabil secara kimiawi mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

di mana:
- $k(T)$ = laju degradasi (1/hari) pada suhu $T$ (Kelvin)
- $A$ = faktor pre-eksponensial (1/hari)
- $E_a$ = energi aktivasi (J/mol)
- $R$ = konstanta gas universal = 8,314 J/(mol·K)
- $T$ = suhu absolut produk (K)

Untuk疫苗 sensitif (misalnya DPT, Campak), $E_a$ berkisar 80–120 kJ/mol, sehingga setiap kenaikan suhu 5°C dapat mempercepat degradasi hingga **2–4 kali lipat**.

### 2.2. Fungsi Kerugian Mutu Kumulatif

Konsentrasi produk aktif pada waktu $t$ dimodelkan sebagai:

$$C(t) = C_0 \cdot \exp\left(-\int_0^t k(T(\tau)) \, d\tau\right)$$

dengan $C_0$ adalah konsentrasi awal. Indeks kualitas termal (*Thermal Quality Index*, TQI) didefinisikan:

$$\text{TQI}(t) = \frac{C(t)}{C_{\min}} = \frac{C_0}{C_{\min}} \cdot \exp\left(-\int_0^t k(T(\tau)) \, d\tau\right)$$

di mana $C_{\min}$ adalah konsentrasi minimum efektif. TQI $< 1$ mengindikasikan produk gagal mutu.

### 2.3. Indeks Ketahanan (Resilience Index)

Berdasarkan kerangka Khurshid & Siddiqui (2024), *Resilience Index* cold chain dirumuskan sebagai:

$$\mathcal{R} = w_1 \cdot \left(1 - \frac{T_{peak} - T_{set}}{T_{max} - T_{set}}\right) + w_2 \cdot \left(1 - \frac{t_{excursion}}{t_{total}}\right) + w_3 \cdot \left(\frac{V_{recover}}{V_{total}}\right)$$

di mana:
- $T_{peak}$ = suhu puncak saat gangguan
- $T_{set}$ = suhu set-point
- $T_{max}$ = suhu batas kritis produk
- $t_{excursion}$ = total waktu pelanggaran suhu
- $t_{total}$ = total waktu siklus distribusi
- $V_{recover}$ = volume produk yang berhasil dipulihkan mutunya
- $V_{total}$ = total volume batch
- $w_1, w_2, w_3$ = bobot dengan $\sum w_i = 1$

### 2.4. Model Sensor IoT dan Akurasi Pengukuran

Putra et al. (2024) menggunakan sensor **DS18B20** dengan resolusi ±0,5°C pada rentang −55°C hingga +125°C. Akurasi absolut:

$$\varepsilon_{sensor} = \frac{|T_{measured} - T_{true}|}{T_{range}} \leq 0,5\%$$

Interval sampling $\Delta t$ direkomendasikan:

$$\Delta t \leq \frac{t_{critical}}{10}$$

di mana $t_{critical}$ adalah waktu maksimum sebelum mutu produk turun di bawah ambang batas pada suhu referensi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Pemantauan Cold Chain

Arsitektur yang diadopsi dari Putra et al. (2024) dan diintegrasikan dengan model Khurshid & Siddiqui (2024):

```
┌─────────────────────┐
│  Cold Chain Box     │
│  (2–8°C vaccine)    │
└──────────┬──────────┘
           │ DS18B20 sensor
           ▼
┌─────────────────────┐
│  Microcontroller    │
│  (ESP32 / Arduino)  │
└──────────┬──────────┘
           │ WiFi/GSM
           ▼
┌─────────────────────┐    ┌──────────────────┐
│  Cloud Database     │◄──►│  Dashboard Web   │
│  (InfluxDB/MySQL)   │    │  (Grafana)       │
└──────────┬──────────┘    └──────────────────┘
           │
           ▼
┌─────────────────────┐
│  Resilience Engine  │
│  (Hitung ℛ & TQI)  │
└──────────┬──────────┘
           │ Alert
           ▼
┌─────────────────────┐
│  Notifikasi (SMS,   │
│  Telegram, Buzzer)  │
└─────────────────────┘
```

### 3.2. SOP Implementasi 8 Tahap

| Tahap | Kegiatan | Output | Standar Acuan |
|-------|----------|--------|---------------|
| 1 | Pemetaan titik kritis (*HACCP*) | Peta cold chain | WHO PQS E006 |
| 2 | Kalibrasi sensor DS18B20 | Sertifikat kalibrasi ±0,2°C | ISO 17025 |
| 3 | Instalasi gateway IoT | Coverage WiFi/GSM ≥98% | IEEE 802.11 |
| 4 | Konfigurasi threshold alarm | Alert $T > 8°C$ atau $T < 2°C$ | PQS E006 |
| 5 | *Baseline* data historis | Dataset 30 hari | Internal SOP |
| 6 | Deployment model resilience $\mathcal{R}$ | Skor ℛ harian | Khurshid & Siddiqui (2024) |
| 7 | Pelatihan SDM apoteker | Sertifikasi operator | CPOB |
| 8 | Audit & *continuous improvement* | Laporan bulanan | ISO 9001:2015 |

### 3.3. Prosedur Tanggap Gangguan

Ketika $T > T_{set} + \Delta T$:

1. **Deteksi otomatis** (t < 30 detik): sensor mengirim alert ke cloud.
2. **Notifikasi bertingkat**: apoteker → kepala UPTD → distributor (eskalasi otomatis jika tidak ada respons dalam 5 menit).
3. **Aktivasi rencana mitigasi**: transfer ke cold chain backup, *quarantine* batch, atau *recall* selektif.
4. **Post-mortem analysis**: hitung $\mathcal{R}_{event}$ untuk evaluasi kapasitas mitigasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus: Distribusi Vaksin di Kabupaten Siak

**Data Input:**
- Volume batch: $V_{total} = 1.200$ vial疫苗 DPT
- Suhu set-point: $T_{set} = 5°C$ = 278,15 K
- Suhu batas kritis: $T_{max} = 8°C$ = 281,15 K
- Energi aktivasi: $E_a = 100.000$ J/mol (vaksin atenuasi)
- Faktor pre-eksponensial: $A = 1,2 \times 10^{40}$ /hari
- Konsentrasi minimum efektif: $C_{\min} = 0,7 \cdot C_0$
- Durasi distribusi: $t_{total} = 48$ jam = 2 hari

### 4.2. Perhitungan Laju Degradasi pada Suhu Normal

$$k(5°C) = 1,2 \times 10^{40} \cdot \exp\left(-\frac{100.000}{8,314 \cdot 278,15}\right)$$

$$\frac{100.000}{8,314 \cdot 278,15} = \frac{100.000}{2.312,55} = 43,245$$

$$k(5°C) = 1,2 \times 10^{40} \cdot e^{-43,245} = 1,2 \times 10^{40} \cdot 1,87 \times 10^{-19}$$

$$k(5°C) \approx 2,24 \times 10^{21} \text{ /hari}$$

Catatan: nilai ini perlu dikalibrasi ulang dengan data empiris; untuk demonstrasi, gunakan $k_{ref} = 0,005$/hari pada 5°C (standar farmasi tipikal).

### 4.3. Simulasi Gangguan: Kenaikan Suhu menjadi 12°C selama 4 Jam

$$k(12°C) = k_{ref} \cdot \exp\left[\frac{E_a}{R}\left(\frac{1}{T_{ref}} - \frac{1}{T_{actual}}\right)\right]$$

$$\frac{1}{278,15} - \frac{1}{285,15} = \frac{285,15 - 278,15}{278,15 \cdot 285,15} = \frac{7}{79.318} = 8,82 \times 10^{-5}$$

$$\Delta k = \frac{100.000}{8,314} \cdot 8,82 \times 10^{-5} = 12.027 \cdot 8,82 \times 10^{-5} = 1,061$$

$$k(12°C) = 0,005 \cdot e^{1,061} = 0,005 \cdot 2,889 = 0,01444 \text{ /hari}$$

Dalam 4 jam gangguan:

$$\Delta t = \frac{4}{24} = 0,1667 \text{ hari}$$

Kerugian mutu kumulatif:

$$\text{Loss}_{excursion} = 1 - \exp(-k(12°C) \cdot \Delta t) = 1 - \exp(-0,01444 \cdot 0,1667)$$

$$= 1 - \exp(-0,002407) = 1 - 0,99760 = 0,00240 \text{ atau } 0,24\%$$

### 4.4. Perhitungan Resilience Index

Dengan bobot default $w_1 = w_2 = w_3 = 1/3$:

-