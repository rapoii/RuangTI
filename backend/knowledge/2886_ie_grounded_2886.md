# 2886 — Ketahanan Rantai Dingin (Cold Chain Resilience) untuk Produk Mudah Rusak: Pemodelan Resiliensi, Monitoring IoT Real-Time, dan Formulasi Rekayasa Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk termolabil—mulai dari vaksin, biofarmaka, produk biologis, makanan segar, hingga bahan kimia khusus—di mana pelanggaran rentang suhu operasional yang sangat sempit (umumnya 2–8 °C untuk vaksin) selama durasi yang relatif singkat sekalipun dapat menyebabkan degradasi irreversibel, kerugian ekonomi masif, dan risiko keselamatan publik. Khurshid & Siddiqui (2024) memposisikan resiliensi rantai dingin bukan sekadar sebagai kemampuan untuk kembali ke kondisi *steady-state* setelah gangguan, melainkan sebagai kapasitas multifaset yang menggabungkan **absorption, adaptation, restoration, dan learning** di sepanjang jaringan distribusi (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)). Pendekatan ini secara fundamental mengubah cara insinyur industri merancang sistem karena gangguan (*disruption*) bukan lagi diperlakukan sebagai *outlier* melainkan sebagai variabel intrinsik yang harus di-*engineer* kapasitas penanganannya.

Di sisi operasional, Putra, Defit & Nurcahyo (2024) mendokumentasikan secara empiris salah satu titik rapuh paling nyata di lapangan: pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, proses pencatatan suhu *cold chain box* vaksin masih dilakukan secara manual setiap 2 jam sekali oleh apoteker melalui *log sheet* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Sistem manual ini memiliki tiga kelemahan struktural: (1) *detection latency* yang panjang—anomali suhu baru teridentifikasi pada interval pengecekan berikutnya; (2) tidak adanya *push notification* otomatis saat suhu melewati *threshold* ambang batas; serta (3) risiko *human-induced* seperti kelalaian, kekeliruan pembacaan termometer analog, dan kesalahan transkripsi. Konteks ini menunjukkan bahwa kapasitas resiliensi sistem sangat ditentukan oleh kualitas *sensory layer* dan arsitektur data-logging—dua elemen yang menjadi domain kontribusi utama modul ini.

Urgensi ekonomi dan kesehatan publik dari pengelolaan rantai dingin juga tecermin dari estimasi WHO bahwa sekitar 50% vaksin global terbuang akibat kerusakan suhu selama distribusi. Kerugian ini tidak hanya berupa *write-off* biaya produksi dan logistik, melainkan juga opportunity cost program imunisasi dan dampak sosio-ekonomi jangka panjang. Oleh karena itu, modul ini menyintesiskan dua pilar: **pemodelan resiliensi kuantitatif** ala Khurshid & Siddiqui (2024) dan **implementasi sensor IoT DS18B20** ala Putra dkk. (2024), untuk menghasilkan kerangka rekayasa yang komprehensif dan terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid & Siddiqui (2024) mengusulkan *Resilience Triangle Index* untuk mengkuantifikasi performa sistem selama jendela gangguan $t \in [t_0, t_1]$:

$$R_{idx} = \frac{\displaystyle\int_{t_0}^{t_1} Q_{actual}(t) \, dt}{\displaystyle\int_{t_0}^{t_1} Q_{nominal}(t) \, dt}$$

di mana $Q_{actual}(t)$ adalah kapasitas fungsi sistem pada waktu $t$ pasca-disrupsi, dan $Q_{nominal}(t)$ adalah kapasitas nominal. Nilai $R_{idx} \in [0,1]$, dengan $R_{idx} = 1$ mengindikasikan resiliensi sempurna (tidak ada degradasi).

Untuk komponen rantai dingin spesifik, fungsi kualitas didekati melalui **deviasi suhu kumulatif terhadap rentang aman**:

$$D_{temp}(t) = \int_{t_0}^{t_1} \max\left(0, |T(t) - T_{set}| - \delta_{tol}\right) dt$$

dengan $T_{set}$ adalah *setpoint* (misal 5 °C untuk zona 2–8 °C), $\delta_{tol}$ adalah toleransi deviasi yang diizinkan, dan satuan integral adalah °C·jam. Degradasi produk kemudian mengikuti **model kinetika Arrhenius**:

$$k_{deg}(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T_{abs}}\right)$$

di mana $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T_{abs}$ adalah suhu absolut (K). Untuk banyak vaksin, $E_a$ berada pada rentang 60–100 kJ/mol, menjadikan degradasi sangat sensitif terhadap pelanggaran suhu.

### 2.2 Model Probabilistik Kegagalan Sensor

Putra dkk. (2024) menggunakan sensor **DS18B20** dengan akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C hingga $+85$ °C dan resolusi konfigurasi 9–12 bit. Probabilitas sensor gagal membaca anomali pada jendela sampling $\Delta t$ dimodelkan:

$$P_{miss}(t) = 1 - \left[1 - \Phi\left(\frac{T_{anom} - \mu_{sensor}}{\sigma_{sensor}}\right)\right]^{N_{sample}}$$

dengan $N_{sample} = \lfloor \Delta t / \Delta t_{sample} \rfloor$ adalah jumlah sampel dalam jendela tersebut.

### 2.3 Response Time dan Recovery Time

Waktu respons sistem didefinisikan sebagai selang antara onset anomali dan notifikasi:

$$T_{response} = T_{detection} + T_{transmission} + T_{alert}$$

dan waktu pemulihan:

$$T_{recovery} = T_{diagnosis} + T_{mitigation} + T_{verification}$$

Total downtime fungsional: $T_{down} = T_{response} + T_{recovery}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT (Berdasarkan Putra dkk., 2024)

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│ Sensor Layer    │───▶│  Edge/MCU Layer  │───▶│ Network Layer   │───▶│ Application Layer│
│ DS18B20 array   │    │ Arduino/ESP32    │    │ Wi-Fi/BLE/GSM   │    │ Dashboard+Alarm  │
│ (1-Wire bus)    │    │ + RTC DS3231     │    │ MQTT protocol   │    │ Mobile/Web app   │
└─────────────────┘    └──────────────────┘    └─────────────────┘    └──────────────────┘
        │                       │                       │                       │
   Akuisisi multi-         Timestamp lokal,        Enkripsi TLS,         Threshold rules,
   titik (min 3 titik)     buffer fail-safe         retry qos=1           notifikasi SMS/email
```

### 3.2 SOP Implementasi

| No. | Tahapan | Aktivitas Kunci | Output |
|----|---------|----------------|--------|
| 1 | Risk Assessment | Pemetaan titik kritis distribusi, FMEA | Risk register, RPN tiap titik |
| 2 | Sensor Placement | Minimal 3 titik (top/mid/bottom box) | Peta termal cold chain box |
| 3 | Calibration | Bandingkan DS18B20 dengan NIST-traceable reference | Sertifikat kalibrasi ±0,3 °C |
| 4 | Threshold Setting | Sesuai WHO PQS atau farmakope; histeresis 1 °C | Rule engine di firmware |
| 5 | Alert Routing | Multi-channel: SMS, email, buzzer lokal, MQTT dashboard | SLA alert <60 detik |
| 6 | Data Logging | Minimum 1 sampel/menit; retensi 5 tahun | Time-series DB (InfluxDB/PostgreSQL) |
| 7 | Periodic Audit | Bulanan: verifikasi akurasi sensor & alarm | Audit trail & CAPA |

### 3.3 Integrasi dengan Model Resiliensi

SOP di atas secara langsung memperbaiki komponen $T_{detection}$ dalam formula $T_{response}$. Khurshid & Siddiqui (2024) menekankan bahwa **digitalisasi sensory layer** adalah *enabler* utama untuk meningkatkan $R_{idx}$ dari 0,4–0,6 (manual) menjadi 0,85–0,95 (IoT-enabled).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus: Cold Chain Box Vaksin UPTD Farmasi Siak

- Volume *cold chain box*: $V = 50$ L
- Muatan: 500 vial vaksin (volume @5 mL)
- *Setpoint*: $T_{set} = 5$ °C; rentang aman $[T_{min}, T_{max}] = [2, 8]$ °C
- Energi aktivasi degradasi (konservatif): $E_a = 80$ kJ/mol
- Konstanta pre-exponensial: $A = 10^{15}$/jam
- Sampling IoT: $\Delta t_{sample} = 60$ s (1 menit)
- Sampling manual sebelumnya: $\Delta t_{manual} = 7200$ s (2 jam)

### 4.2 Perhitungan 1: Laju Degradasi pada Suhu Normal (5 °C)

$$k_{deg}(278{,}15\,K) = 10^{15} \cdot \exp\left(-\frac{80.000}{8{,}314 \times 278{,}15}\right)$$

$$= 10^{15} \cdot \exp(-34{,}59) = 10^{15} \times 9{,}67 \times 10^{-16} \approx 0{,}967 \text{ /jam}$$

Artinya: pada suhu *setpoint*, fraksi degradasi per jam $\approx 96{,}7\%$ terhadap laju referensi—menunjukkan degradasi inheren yang tidak nol namun minimal.

### 4.3 Perhitungan 2: Laju Degradasi pada Suhu Pelanggaran 12 °C (Gangguan 4 Jam)

$$k_{deg}(285{,}15\,K) = 10^{15} \cdot \exp\left(-\frac{80.000}{8{,}314 \times 285{,}15}\right)$$

$$= 10^{15} \cdot \exp(-33{,}75) = 10^{15} \times 2{,}16 \times 10^{-15} \approx 2{,}16 \text{ /jam}$$

**Rasio akselerasi degradasi**:

$$\frac{k_{deg}(12°C)}{k_{deg}(5°C)} = \frac{2{,}16}{0{,}967} \approx 2{,}23\times$$

Artinya: setiap jam di suhu