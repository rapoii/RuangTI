# 1542 — Model Ketahanan (Resilience) Rantai Dingin untuk Produk Mudah Rusak: Integrasi IoT Sensor DS18B20 dan Mitigasi Disrupsi Termal

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain logistics*) merupakan subsistem kritis dalam rantai pasok industri farmasi, makanan beku, bioteknologi, dan agrikultur bernilai tinggi, yang mempertahankan integritas produk mudah rusak (*perishable products*) pada rentang suhu spesifik, umumnya $+2^{\circ}\text{C}$ hingga $+8^{\circ}\text{C}$ untuk vaksin program imunisasi WHO. Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menegaskan bahwa kemampuan sistem untuk pulih (*recover*) dari degradasi performa akibat disrupsi—bukan sekadar kemampuan bertahan—menjadi metrik utama abad ke-21 yang membedakan rantai pasok yang *robust* dengan yang benar-benar *resilient*. Studi tersebut mengajukan kerangka kuantitatif yang mengkuantifikasi kapasitas absorpsi, adaptasi, dan restorasi ketika terjadi *thermal excursion*, kegagalan refrigerasi, atau keterlambatan distribusi.

Konteks empiris yang sangat relevan di Indonesia dipaparkan oleh Putra, Defit, dan Nurcahyo (2024) dalam *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)), yang melakukan studi kasus pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Mereka mengidentifikasi dua *failure point* utama: (1) cold chain box疫苗 tidak dilengkapi alat pemantau suhu *realtime* melainkan pencatatan manual setiap 2 jam pada *log sheet*, dan (2) tidak ada sistem peringatan dini (*early warning*) saat suhu naik akibat kerusakan internal (misalnya kegagalan termoelektrik) maupun eksternal (misalnya paparan lingkungan ambien). Kedua kondisi ini menyebabkan *thermal excursion* sering kali baru terdeteksi setelah produk telah rusak secara irreversibel—menurunkan *vaccine potency* dan menimbulkan *post-market failure cost* yang signifikan.

Secara ekonomis, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin global terbuang sia-sia karena pelanggaran rantai dingin, dengan kerugian industri farmasi mencapai miliaran dolar per tahun. Dari perspektif Teknik Industri, fenomena ini merupakan *system reliability problem* yang dapat dimodelkan secara stokastik, dan memerlukan integrasi antara *sensing layer* (sensor DS18B20 dengan akurasi $\pm 0,5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$), *communication layer* (protokol IoT MQTT/LoRaWAN), dan *decision layer* (algoritma resilience untuk mitigasi). Urgensi rekayasa sistem ini bukan lagi bersifat pilihan, melainkan *compliance requirement* terhadap standar WHO PQS E006, BPOM, dan ISO 23412:2020 (*Cold chain logistics for pharmaceuticals*).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Ketahanan Sistem Cold Chain

Mengikuti formulasi Khurshid & Siddiqui (2024), kinerja rantai dingin dimodelkan sebagai fungsi waktu $P(t)$ yang menurun saat disrupsi terjadi dan pulih secara parsial pasca-intervensi. Indeks Resilience $R$ didefinisikan sebagai rasio integral performa aktual terhadap performa nominal dalam jendela observasi $[t_0, t_1]$:

$$R = \frac{\displaystyle\int_{t_0}^{t_1} P(t)\,dt}{\displaystyle\int_{t_0}^{t_1} P_{\text{nominal}}(t)\,dt} = \frac{\int_{t_0}^{t_1}\left[1 - \delta(t)\right] dt}{t_1 - t_0}$$

di mana $\delta(t) \in [0,1]$ adalah fungsi degradasi relatif yang merepresentasikan proporsi kerusakan termal pada waktu $t$. Untuk produk vaksin, $\delta(t)$ dapat dinyatakan sebagai:

$$\delta(t) = \begin{cases} 0, & T(t) \in [T_{\min}, T_{\max}] \\ \left|\dfrac{T(t) - T_{\text{set}}}{T_{\text{critical}} - T_{\text{set}}}\right|^{\alpha}, & T(t) \notin [T_{\min}, T_{\max}] \end{cases}$$

dengan $T_{\text{set}}$ adalah *setpoint* suhu cold chain box (umumnya $+5^{\circ}\text{C}$ untuk vaksin), $T_{\text{critical}}$ adalah suhu ambang kerusakan (WHO merekomendasikan $+8^{\circ}\text{C}$ sebagai batas atas dan $-0,5^{\circ}\text{C}$ sebagai batas bawah pembekuan), dan $\alpha$ adalah parameter non-linearitas kinetika degradasi protein antigen (umumnya $\alpha = 2$ untuk kebanyakan vaksin inactivated).

### 2.2 Model Termodinamika Cold Chain Box

Perubahan suhu internal cold chain box dimodelkan menggunakan persamaan keseimbangan energi dengan konduksi dan konveksi sebagai mekanisme dominan:

$$m \, c_p \, \frac{dT_{\text{in}}}{dt} = h_{\text{ext}} \, A_{\text{ext}} \, (T_{\text{amb}} - T_{\text{in}}) + Q_{\text{phase}}$$

di mana $m$ adalah massa produk (kg), $c_p$ adalah kapasitas panas spesifik produk (untuk produk farmasi $c_p \approx 3{,}5 \text{ kJ/(kg·K)}$), $h_{\text{ext}}$ adalah koefisien konveksi eksternal ($\approx 5$–$10 \text{ W/(m}^2\text{·K)}$), $A_{\text{ext}}$ adalah luas permukaan efektif, $T_{\text{amb}}$ adalah suhu lingkungan ambien (di Indonesia tropis $T_{\text{amb}} \approx 30$–$35^{\circ}\text{C}$), dan $Q_{\text{phase}}$ adalah kalor yang dilepas/serap oleh paket pendingin *phase change material* (PCM).

### 2.3 Akurasi Sensor DS18B20 dan Model Pengukuran

Putra et al. (2024) menggunakan sensor DS18B20 dengan protokol komunikasi 1-Wire. Akurasi sensor ini mengikuti model:

$$\varepsilon_{\text{sensor}} \sim \mathcal{N}(0, \sigma_{\text{DS}}^{2}), \quad \sigma_{\text{DS}} = 0{,}25^{\circ}\text{C}$$

dengan resolusi digital 9–12 bit (resolusi efektif $0{,}0625^{\circ}\text{C}$ pada mode 12-bit). Frekuensi sampling optimal $f_s$ mengikuti teorema Nyquist-Shannon untuk fluktuasi termal cold chain box:

$$f_s \geq 2 \, f_{\text{max}} \quad \text{dengan} \quad f_{\text{max}} \approx \frac{1}{\tau_{\text{thermal}}}$$

di mana $\tau_{\text{thermal}} = \dfrac{m \, c_p}{h_{\text{ext}} \, A_{\text{ext}}}$ adalah konstanta waktu termal cold chain box (untuk kapasitas 5–10 liter, $\tau_{\text{thermal}} \approx 30$–$90$ menit, sehingga $f_s \geq 0{,}03$ Hz atau cukup dengan sampling tiap 30 menit; namun protokol safety mensyaratkan $f_s = 1$ tiap 60 detik saat aktif).

### 2.4 Mean Time To Recovery (MTTR) dan Metrik Keandalan

Keandalan sistem monitoring didefinisikan sebagai:

$$\text{MTBF} = \frac{1}{\lambda_{\text{total}}}, \quad \lambda_{\text{total}} = \sum_{i=1}^{n} \lambda_i$$

dengan $\lambda_i$ laju kegagalan komponen (sensor, mikrokontroler ESP32, gateway, daya). Ketersediaan (*availability*) sistem monitoring IoT:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

Untuk sistem dengan MTBF $10.000$ jam dan MTTR target $0{,}5$ jam, diperoleh $A = 0{,}99995$ (five-nines availability), memenuhi standar WHO PQS untuk monitoring farmasi.

## 3. Metodologi Rekayasa & SOP

Putra et al. (2024) merancang arsitektur IoT monitoring dengan tahapan implementasi sebagai berikut:

**Tahap 1 — Akuisisi Data:** Sensor DS18B20 membaca suhu internal cold chain box setiap $f_s = 1/60$ Hz, dikonversi oleh mikrokontroler (ESP32/Arduino) menggunakan protokol 1-Wire dengan alamat unik 64-bit per sensor.

**Tahap 2 — Edge Processing:** Algoritma deteksi ambang (*threshold detection*) di-embed pada mikrokontroler:

```
if T(t) > T_max OR T(t) < T_min:
    trigger_alert(level=critical)
    send_SMS_to_pharmacist()
    activate_backup_PCM_pack()
elif dT/dt > 0.5°C/min:
    trigger_alert(level=warning)
```

**Tahap 3 — Transmisi Data:** Data dikirim melalui Wi-Fi/GSM ke server *cloud* menggunakan protokol MQTT (port 8883, TLS 1.2) dengan payload JSON berisi timestamp, nilai suhu, dan checksum CRC-8 untuk integritas.

**Tahap 4 — Dashboard & Audit Trail:** Apoteker memantau melalui *web dashboard* dan menerima notifikasi WhatsApp/Telegram saat anomali terdeteksi, menggantikan *log sheet* manual.

**Tahap 5 — Prosedur Mitigasi (Resilience Loop):** Berdasarkan kerangka Khurshid & Siddiqui (2024), SOP pemulihan meliputi (a) aktivasi cold chain box cadangan, (b) transshipment ke hub terdekat, dan (c) prosedur *vaccine re-stabilization* sesuai PQS WHO E006.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Cold chain box UPTD Farmasi Dinkes Siak berkapasitas 8 liter menyimpan 200 vial vaksin DPT-HB-Hib pada $T_{\text{set}} = +5^{\circ}\text{C}$, dengan parameter berikut:

| Parameter | Nilai | Satuan |
|---|---|---|
| $m$ (massa vial + PCM) | 6,0 | kg |
| $c_p$ | 3,5 | kJ/(kg·K) |
| $h_{\text{ext}} A_{\text{ext}}$ | 1,2 | W/K |
| $T_{\text{amb}}$ | 33 | °C |
| $\sigma_{\text{DS}}$ | 0,25 | °C |
| $T_{\text{critical}}$ (upper) | +8 | °C |

### Langkah 1: Konstanta waktu termal

$$\tau_{\text{thermal}} = \frac{m \, c_p}{h_{\text{ext}} \, A_{\text{ext}}} = \frac{6{,}0 \times 3500}{1{,}2} = 17.500 \text{ s} \approx 291{,}7 \text{ menit} \approx 4{,}86 \text{ jam}$$

### Langkah 2: Dinamika suhu saat listrik padam

Solusi persamaan diferensial dengan $T_{\text{in}}(0) = +5^{\circ}\