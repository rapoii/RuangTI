# 2310 — Model Ketahanan (Resilience) Rantai Dingin Produk Mudah Rusak dengan Pemantauan Suhu IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik farmasi, bioteknologi, dan makanan mudah rusak (*perishable products*) yang mengintegrasikan variabel suhu sebagai Quality-Defining Parameter (QDP). Khurshid dan Siddiqui (2024) dalam artikelnya *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyoroti bahwa sekitar 25–50% produk pangan mudah rusak di negara berkembang mengalami degradasi mutu atau kerugian total sebelum sampai ke konsumen akhir karena *temperature excursions* yang tidak terdeteksi secara *real-time*. Kerugian ekonomi global akibat *cold chain failure* ini ditaksir mencapai USD 35 miliar per tahun (estimasi FAO 2023 yang dirujuk dalam literatur), sehingga membangun model *resilience* bukan sekadar persoalan teknis, melainkan kebutuhan strategis bagi keberlanjutan rantai pasok.

Dalam konteks nasional Indonesia, kompleksitas rantai dingin meningkat tajam ketika menyangkut distribusi vaksin di daerah tropis dengan suhu ambient rata-rata 27–33°C. Putra, Defit, dan Nurcahyo (2024) di *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan empiris permasalahan di Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak. Mereka menemukan dua *root cause* utama: (1) cold chain box penyimpanan vaksin tidak dilengkapi sistem pemantauan suhu *real-time* sehingga apoteker tidak mendapat peringatan dini saat terjadi kenaikan suhu akibat kerusakan internal/eksternal; dan (2) proses pencatatan suhu masih dikerjakan secara manual setiap 2 (dua) jam sekali pada *log sheet* — sebuah *single point of failure* yang bersifat *human-dependent*. Kedua isu ini menurunkan *service level* dan meningkatkan *risk exposure* terhadap program imunisasi nasional, terlebih untuk vaksin yang sensitif seperti COVID-19 (suhu -20°C hingga -70°C untuk formulasi mRNA, atau 2–8°C untuk vaksin inactivated/convensional).

Urgensi rekayasa muncul dari dua kebutuhan simultan: (a) *predictive visibility* terhadap *temperature excursions* melalui arsitektur *Internet of Things* (IoT) berbiaya rendah dengan sensor DS18B20, dan (b) *system-level resilience modeling* yang mampu mengkuantifikasi kemampuan sistem pulih dari gangguan. Tulisan ini mengintegrasikan kedua perspektif tersebut menjadi satu modul referensi spesialis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Resilience Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui (2024) memformulasikan indeks *resilience* $\mathcal{R}(t)$ sebagai fungsi waktu yang membandingkan kapasitas fungsional sistem aktual $Q(t)$ terhadap kapasitas nominal $Q_{\text{nom}}$ dan kapasitas saat gangguan $Q_{\text{dis}}$:

$$
\mathcal{R}(t) = \frac{Q(t) - Q_{\text{dis}}(t)}{Q_{\text{nom}} - Q_{\text{dis}}(t)} \quad \text{(1)}
$$

di mana $Q$ adalah *service capability* (misalnya proporsi batch vaksin yang memenuhi spesifikasi suhu). Nilai $\mathcal{R}(t) \in [0,1]$; mendekati 0 = sistem kolaps, mendekati 1 = sistem pulih sempurna.

*Recovery time* didefinisikan sebagai:

$$
T_{\text{rec}} = \int_{t_d}^{t_r} \left[1 - \mathcal{R}(t)\right] dt \quad \text{(2)}
$$

di mana $t_d$ adalah waktu dimulainya disrupsi dan $t_r$ adalah waktu sistem kembali ke threshold operasional $\mathcal{R} \geq 0{,}95$.

Tingkat degradasi mutu produk terkait secara langsung dengan pelanggaran suhu melalui *cumulative thermal stress*:

$$
S_{\text{thermal}} = \int_{t_0}^{t_f} \max(0, T(t) - T_{\text{max}}) \, dt \quad \text{(3)}
$$

di mana $T(t)$ adalah suhu aktual hasil pembacaan sensor, $T_{\text{max}}$ adalah batas suhu kritis produk (untuk vaksin inactivated: $T_{\text{max}} = 8°C$). Nilai $S_{\text{thermal}}$ yang melebihi ambang spesifik menandakan produk harus dimusnahkan (*batch rejection cost* $C_{\text{rej}}$).

### 2.2. Model Keandalan IoT Sensor (Putra dkk., 2024)

Sensor DS18B20 yang digunakan Putra dkk. (2024) memiliki karakteristik: rentang -55°C hingga +125°C, akurasi $\pm 0{,}5°C$ pada rentang -10°C hingga +85°C, dan resolusi programmable 9–12 bit. Model akuisisi data mengikuti persamaan konversi:

$$
T_{\text{digital}} = \frac{\text{RawADC}_{16\text{-bit}}}{16} \quad \text{(°C)} \quad \text{(4)}
$$

*Alert logic* didefinisikan sebagai:

$$
\text{Alert}(t) = \begin{cases} 1, & T(t) > T_{\text{max}} \lor T(t) < T_{\text{min}} \\ 0, & \text{otherwise} \end{cases} \quad \text{(5)}
$$

dengan $T_{\text{max}} = 8°C$ dan $T_{\text{min}} = 2°C$ untuk cold chain box vaksin inactivated.

*Sampling period* optimum mengikuti *Nyquist–Shannon* untuk fluktuasi termal:

$$
f_s \geq 2 \cdot f_{\text{thermal,max}} \Rightarrow T_s \leq \frac{1}{2 f_{\text{thermal,max}}} \quad \text{(6)}
$$

Putra dkk. (2024) menetapkan $T_s = 30$ detik, cukup untuk menangkap *transient* pembukaan pintu cold chain box yang berdurasi 10–60 detik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem IoT Pemantauan Suhu

Berdasarkan Putra dkk. (2024), arsitektur teknologi terdiri dari 4 (empat) lapisan:

1. **Lapisan Sensor**: Sensor DS18B20 dengan protokol *1-Wire* ditempatkan di tiga titik (atas, tengah, bawah) cold chain box untuk mendeteksi gradien termal.
2. **Lapisan Edge (Mikrokontroler)**: ESP32/DSP-IC microcontroller membaca data sensor, menjalankan *alert logic* Persamaan (5), dan melakukan *local buffering*.
3. **Lapisan Komunikasi**: Modul WiFi ESP8266 mengirim paket data ke server setiap interval $T_s$.
4. **Lapisan Cloud & Dashboard**: Server (Blynk/ThingsBoard) menerima data, menyimpan time-series, dan men-trigger *notification* ke smartphone apoteker saat $\text{Alert}(t) = 1$.

### 3.2. Diagram Alir SOP Pengawasan Cold Chain

```
[START] → Pembukaan cold chain box (pagi)
   ↓
[Inisialisasi Sensor] → Baca DS18B20 #1, #2, #3
   ↓
[Filter Digital] → Moving Average window N=5
   ↓
{Periksa Alert Logic (Eq.5)?}
   ├── Ya → [Trigger Notifikasi] → SMS/App Alert ke Apoteker
   │         ↓
   │      [Logging ke Cloud + Logsheet Otomatis]
   │         ↓
   │      [Inspeksi Visual + Tindakan Korektif]
   └── Tidak → [Logging Normal] → Loop kembali
```

### 3.3. SOP Standar (Merujuk WHO PQS E006 + Putra Dkk., 2024)

| Langkah | Aktivitas | Penanggung Jawab | Frekuensi |
|---------|-----------|------------------|-----------|
| 1 | Pre-cooling cold chain box ke 4°C ± 2°C | Apoteker | Pra-distribusi |
| 2 | Aktivasi sistem IoT + verifikasi *heartbeat* | Apoteker | Setiap buka box |
| 3 | Monitoring suhu via dashboard | Apoteker | *Real-time* |
| 4 | Verifikasi pencatatan otomatis | Supervisor Farmasi | Harian |
| 5 | *Root cause analysis* jika $\text{Alert}=1$ | QA Manager | Per insiden |
| 6 | Kalibrasi sensor DS18B20 | Teknisi | Kuartalan |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Sistem (UPTD Farmasi, Kabupaten Siak)

- Jenis produk: Vaksin DPT-HB-Hib, rentang suhu aman 2–8°C.
- Volume cold chain box: $V = 50$ liter.
- Beban harian: $n_{\text{batch}} = 8$ batch @ 25 vial.
- Biaya vial: $C_v = \text{Rp } 150.000$.
- Sensor DS18B20: akurasi $\pm 0{,}5°C$, sampling $T_s = 30$ s.

### 4.2. Perhitungan Indeks Resilience

Misalkan terjadi *insiden* berupa kegagalan refrigerasi pada $t_d = 08{:}00$ hingga pulih pada $t_r = 10{:}30$ (durasi 150 menit). Suhu naik mengikuti model Newtonian:

$$
T(t) = T_{\text{amb}} - (T_{\text{amb}} - T_0) e^{-t/\tau_{\text{th}}}
$$

dengan $T_{\text{amb}} = 30°C$ (ambient Siak), $T_0 = 4°C$, dan konstanta waktu termal $\tau_{\text{th}} = 60$ menit (tipikal cold box 50L dengan beban 200 vial).

**Step 1 — Suhu pada $t = 90$ menit:**
$$
T(90) = 30 - (30-4)e^{-90/60} = 30 - 26 \cdot e^{-1{,}5} = 30 - 26(0{,}2231) = 30 - 5{,}80 = 24{,}20°C
$$

Suhu sudah jauh melampaui $T_{\text{max}} = 8°C$, mengaktifkan $\text{Alert}(t) = 1$.

**Step 2 — Kapasitas fungsional $Q(t)$:**
Asumsikan degradasi mengikuti fungsi logistik:
$$
Q(t) = 1 - \frac{1}{1 + e^{-k(T(t) - T_{\text{crit}})}}
$$
dengan $k = 0{,}5$ dan $T_{\text{crit}} = 12°C$. Pada $T(90) = 24{,}20°C$:
$$
Q(90) = 1 - \frac{1}{1 + e^{-0{,}5(24{,}20-12)}} = 1 - \frac{1}{1 + e^{-6{,}10}} \approx 1 - \frac{1}{1{,}00224} \approx 0{,}0022
$$

**Step 3 — Recovery time terintegral (Eq. 2):**
Dengan mengevaluasi integral numerik pada interval 0–150 menit (discretization $\Delta t = 10$ min):
$$
T_{\text{rec}} \approx \sum_{i=0}^{14} \left[1 - \mathcal{R}(t_i)\right] \Delta t = 12{,}