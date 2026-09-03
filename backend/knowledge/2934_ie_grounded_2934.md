# 2934 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products): Integrasi Pemantauan IoT dan Analisis Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, produk farmasi biologis, makanan beku, serta produk hortikultura. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa integritas termal produk sangat menentukan tidak hanya keamanan konsumen tetapi juga kelayakan ekonomi dan keberlanjutan rantai pasok. Gangguan sekecil apa pun pada suhu — misalnya deviasi ±2°C selama lebih dari 30 menit — dapat menurunkan potensi produk farmasi hingga 20–30%, yang berimplikasi langsung pada kerugian finansial industri.

Di Indonesia, masalah ini semakin nyata. Putra, Defit, dan Nurcahyo (2024) dalam *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan bahwa Unit Pelaksan Teknis Dinas (UPTD) Farmasi Kabupaten Siak menghadapi dua tantangan operasional utama: (1) tidak adanya sistem pemantauan suhu *real-time* pada *cold chain box* yang mampu memberikan peringatan dini saat suhu menyimpang akibat kerusakan internal atau eksternal, dan (2) proses pencatatan suhu secara manual setiap 2 jam melalui *log sheet* yang rentan terhadap human error, keterlambatan pencatatan, serta tidak mampu mendeteksi anomali secara proaktif.

Secara makro, Organisasi Kesehatan Dunia (WHO) melalui Performance, Quality and Safety (PQS) Standards mensyaratkan suhu penyimpanan vaksin 2–8°C untuk jenis *sensitive* dan -70°C untuk *ultra-low temperature* seperti mRNA. Deviasi suhu di luar rentang ini — yang dalam literatur disebut sebagai *cold chain break* — menjadi salah satu penyebab utama *post-market vaccine wastage* dengan estimasi tingkat pemborosan 5–20% di negara berkembang. Kerugian tahunan industri farmasi global akibat *temperature excursions* dilaporkan mencapai USD 35 miliar, sedangkan pada sektor makanan, Food and Agriculture Organization (FAO) memperkirakan 14% produk pangan hilang pasca-panen, sebagian besar karena kegagalan manajemen suhu.

Kebutuhan akan model resiliensi — bukan sekadar *reliability* — menjadi semakin penting. Resiliensi, berbeda dengan keandalan, mencakup kemampuan sistem untuk (a) menahan gangguan (*absorptive capacity*), (b) pulih dengan segera (*restorative capacity*), dan (c) beradaptasi terhadap gangguan masa depan (*adaptive capacity*). Khurshid dan Siddiqui (2024) menekankan bahwa model resiliensi cold chain harus mampu mengkuantifikasi degradasi kualitas produk sebagai fungsi dari waktu, suhu, serta gangguan rantai pasok. Sementara itu, Putra dkk. (2024) menunjukkan bahwa arsitektur IoT berbasis mikrokontroler ESP32 dan sensor DS18B20 mampu memberikan visibilitas data termal dengan akurasi ±0,5°C pada resolusi 12-bit, menjawab salah satu pilar resiliensi tersebut melalui deteksi dini. Sinergi keduanya menjadi landasan pengembangan Modul 2934 ini.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi cold chain yang dirujuk dalam Khurshid dan Siddiqui (2024) dibangun di atas tiga konstruk utama: **fungsi kinerja termal** $Q(t)$, **indeks resiliensi** $R(t)$, dan **waktu pemulihan efektif** $T_{rec}$. Formulasi ini mengadopsi kerangka Bruneau dkk. (2003) yang telah dimodifikasi untuk konteks logistik ber-suhu terkontrol.

### 2.1 Fungsi Kinerja Termal

Kinerja sistem cold chain pada waktu $t$ didefinisikan sebagai:

$$
Q(t) = \begin{cases} 
1, & T(t) \in [T_{min}, T_{max}] \\
1 - \alpha \cdot |T(t) - T_{ref}|, & T(t) \notin [T_{min}, T_{max}]
\end{cases}
$$

di mana $T(t)$ adalah suhu aktual pada waktu $t$, $T_{ref}$ adalah suhu referensi (misalnya 5°C untuk vaksin), $[T_{min}, T_{max}]$ adalah rentang aman (umumnya 2°C–8°C), dan $\alpha$ adalah koefisien degradasi termal. Untuk produk biologis, Khurshid dan Siddiqui (2024) mengusulkan:

$$
\alpha = \frac{1}{|T_{crit} - T_{ref}|}
$$

dengan $T_{crit}$ adalah *critical excursion limit* di mana produk menjadi rusak total.

### 2.2 Indeks Resiliensi Sistem

Indeks resiliensi kumulatif dinyatakan sebagai:

$$
R(t) = \frac{1}{t_{0}} \int_{0}^{t_{0}} Q(\tau) \, d\tau
$$

di mana $t_0$ adalah horizon observasi. Nilai $R(t) \in [0,1]$ dengan $R(t) \to 1$ menunjukkan sistem mendekati *zero-defect*. Untuk sistem yang mengalami gangguan pada waktu $t_d$ dengan pemulihan pada $t_r$:

$$
R_{sys} = \frac{t_d + \int_{t_d}^{t_r} Q(\tau) d\tau + (t_0 - t_r)}{t_0}
$$

### 2.3 Model Degradasi Arrhenius untuk Produk Perishable

Tingkat degradasi produk mengikuti persamaan Arrhenius yang dimodifikasi:

$$
k_{deg}(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T_{K}}\right)
$$

di mana $k_{deg}$ adalah laju degradasi, $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), $R$ adalah konstanta gas universal (8,314 J/(mol·K)), dan $T_K$ adalah suhu dalam Kelvin. Masa simpan efektif:

$$
t_{shelf} = \frac{\ln(C_0 / C_{acc})}{k_{deg}(T)}
$$

dengan $C_0$ adalah konsentrasi awal dan $C_{acc}$ adalah batas akseptabilitas.

### 2.4 Akuisisi Data Sensor IoT (Putra dkk., 2024)

Sensor DS18B20 menghasilkan data suhu digital dengan resolusi konfigurable 9–12 bit. Akurasi pembacaan:

$$
\delta T = \pm (0.5^{\circ}C + \text{LSB})
$$

di mana LSB untuk resolusi 12-bit adalah 0,0625°C. Frekuensi sampling $f_s$ mengikuti kriteria Nyquist relatif terhadap dinamika termal:

$$
f_s \geq 2 \cdot f_{thermal} = \frac{2}{\tau_{thermal}}
$$

dengan $\tau_{thermal} = \frac{\rho \cdot c_p \cdot V}{h \cdot A_s}$ merupakan konstanta waktu termal cold box (densitas $\rho$, kapasitas panas $c_p$, volume $V$, koefisien konveksi $h$, luas permukaan $A_s$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi cold chain yang resilien mengikuti kerangka SOP berlapis yang menyatukan arsitektur IoT dan protokol respons insiden.

### 3.1 Arsitektur Sistem IoT

Diagram blok sistem mengikuti arsitektur tiga lapis:

```
┌─────────────────────────────────────────────────────────┐
│  Layer 1: Akuisisi Data (Sensor)                       │
│  DS18B20 + ESP32 + RTC DS3231 + SD Card Logger         │
│  Sampling rate: 1 Hz, resolusi: 12-bit (±0,0625°C)    │
└─────────────────────────────────────────────────────────┘
                          ↓ (I2C/1-Wire)
┌─────────────────────────────────────────────────────────┐
│  Layer 2: Edge Processing & Komunikasi                 │
│  WiFi/GSM Module → MQTT Broker (QoS 1)                 │
│  Algoritma deteksi anomali: sliding window CUSUM       │
└─────────────────────────────────────────────────────────┘
                          ↓ (TLS 1.2)
┌─────────────────────────────────────────────────────────┐
│  Layer 3: Cloud Dashboard & Alert System               │
│  InfluxDB + Grafana → threshold alert via SMS/Email     │
└─────────────────────────────────────────────────────────┘
```

### 3.2 SOP Operasional Harian

Berdasarkan integrasi kedua literatur, SOP cold chain resilien disusun sebagai berikut:

**Prosedur 1 — Pemantauan Berkelanjutan:**
1. Kalibrasi sensor DS18B20 setiap 30 hari menggunakan *reference thermometer* bersertifikat NIST dengan toleransi $\pm 0,1°C$.
2. Verifikasi integritas data logger setiap shift (8 jam).
3. Validasi otomatis: jika $|T(t) - T_{ref}| > 3°C$ selama $\geq 15$ menit, sistem memicu **Level 1 Alert**.
4. Jika $|T(t) - T_{ref}| > 5°C$ selama $\geq 30$ menit, sistem memicu **Level 2 Alert (Critical)** yang mengaktifkan protokol *product quarantine*.

**Prosedur 2 — Penanganan Cold Chain Break:**

$$
\Delta Q_{loss} = \int_{t_d}^{t_r} \left[1 - Q(\tau)\right] d\tau
$$

Jika $\Delta Q_{loss} > 0,15$, maka:
- Isolasi produk terindikasi.
- Lakukan *stability testing* sesuai protokol WHO TRS 962 Annex 9.
- Dokumentasikan dalam *Excursion Report* dengan *chain of custody* termal lengkap.

**Prosedur 3 — Pemulihan & Validasi:**

$$
t_{rec}^{target} = \min\left\{t : |T(t) - T_{ref}| \leq 0,5°C \text{ dan } \left|\frac{dT}{dt}\right| \leq 0,1°C/\text{menit}\right\}
$$

Waktu pemulihan harus kurang dari *Service Level Agreement* (SLA) yang ditetapkan, umumnya $t_{rec}^{SLA} = 60$ menit untuk cold box farmasi.

### 3.3 Diagram Alir Logika Respons Insiden

```
[Mulai] → [Sensor Baca T(t)]
            ↓
      ┌────[Cek Threshold]────┐
      │  T ∈ [2°C, 8°C]?      │
      └──────┬───────────┬─────┘
         (Ya)│           │(Tidak)
              ↓           ↓
       [Log Normal]  [Cek Durasi Δt]
                          │
              ┌───────────┴───────────┐
              │ Δt < 15 menit?        │
              └────┬─────────────┬────┘
             (Ya) │              │ (Tidak)
                  ↓               ↓
           [Watch Mode]    [Trigger Alert]
                              ↓
                    ┌─────────┴─────────┐
                    │  ΔT > 5°C?        │
                    └────┬──────────┬───┘
                  (Tidak)│          │(Ya)
                         ↓           ↓
                  [Level 1]    [Level 2:
                                Quarantine +
                                Notifikasi]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

UPTD Farmasi Kabupaten Siak (Putra dkk., 2024) mengelola *cold chain box* berkapasitas 50 liter berisi 1.200 vial vaksin COVID-19 (Pfizer-BioNTech, membutuhkan suhu -70°C untuk jangka panjang, atau 2–8°C untuk jangka pendek pasca-thawing). Pada tanggal 15 Juni 2024, terjadi pemadaman listrik PLN selama 4 jam yang menyebabkan kegagalan sistem pendingin compressor.

Parameter operasional:
- Volume cold box: $V = 50$ L $= 0,05$ m³
- Densitas muatan: $\rho = 1.050$ kg/m³ (campuran es + vial)
- Kapasitas panas spesifik: $c_p = 3.500$ J/(kg·K)
- Massa total: $m = \rho \cdot V = 52,5$ kg
- Koefisien konveksi dinding: $h = 8$ W/(m²·K)
- Luas permukaan: $A_s = 1,2$ m²
- Suhu awal: $T_0 = 5°C = 278,15$ K
- Suhu lingkungan: $T_\infty = 30°C = 303,15$ K
- Energi aktivasi: $E_a = 75.000$ J/mol (vaksin protein)

### 4.2 Perhitungan Konstanta Waktu Termal

$$
\tau_{thermal} = \frac{\rho \cdot c_p \cdot V}{h \cdot A_s} = \frac{1.050 \cdot 3.500 \cdot 0,05}{8 \cdot 1,2}
$$

$$
\tau_{thermal} = \frac{183.750}{9,6} = 19.140 \text{ detik} \approx 5,32 \text{ jam}
$$

Ini menunjukkan cold box mampu mempertahankan suhu kurang dari 5,32 jam setelah pemadaman — konsisten dengan estimasi empiris Putra dkk. (2024).

### 4.3 Profil Suhu Transien

Menggunakan model lumped capacitance:

$$
T(t) = T_\infty + (T_0 - T_\infty) \cdot e^{-t/\tau_{thermal}}
$$

Pada $t =