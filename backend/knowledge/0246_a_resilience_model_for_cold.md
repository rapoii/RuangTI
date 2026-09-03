# 0246 — Model Resilien untuk Logistik Cold Chain Produk yang Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan salah satu subsistem paling kritis dalam rantai pasok produk yang rentan terhadap degradasi termal, termasuk vaksin, produk biofarmasi, makanan laut, produk susu, dan bahan kimia diagnostik. Kerusakan suhu sekecil 2°C di atas ambang batas yang direkomendasikan World Health Organization (WHO) selama lebih dari 30 menit telah terbukti menurunkan potensi biologis vaksin hingga 30% (Putra, Defit & Nurcahyo, 2024). Dalam konteks Indonesia, Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak menghadapi masalah operasional klasik: tidak adanya alat pemantau suhu *real-time* pada *cold chain box*, serta pencatatan suhu yang masih dilakukan secara manual setiap dua jam sekali pada *log sheet* oleh apoteker (Putra dkk., 2024). Kondisi ini menimbulkan tiga risiko utama: (1) keterlambatan deteksi anomali termal, (2) potensi kehilangan data audit karena human error, dan (3) inefisiensi biaya rework distribusi vaksin.

Khurshid dan Siddiqui (2024) menekankan bahwa kerugian ekonomi akibat cold chain failure bersifat kumulatif dan non-linear. Pada industri farmasi global, tercatat kerugian lebih dari USD 35 miliar per tahun akibat kerusakan produk termolabil sepanjang distribusi, dengan porsi 20% berasal dari segmen distribusi last-mile. Lebih lanjut, paper tersebut mengidentifikasi bahwa sistem cold chain konvensional bersifat reaktif—alarm baru aktif setelah suhu melampaui ambang batas—bukan preventif berbasis prediksi. Padahal, integrasi model resilience dengan sensor IoT seperti DS18B20 dapat mengubah paradigma ini menjadi *predictive-prescriptive resilience*.

Urgensi model resilien semakin meningkat dengan tren *direct-to-patient* pharmaceutical delivery, pertumbuhan e-commerce grocery berpendingin (diperkirakan tumbuh 12,4% CAGR), serta ekspansi program imunisasi nasional di negara tropis dengan infrastruktur kelistrikan tidak stabil. Dalam kerangka *Industrial Engineering and Systems Engineering*, persoalan cold chain bukan sekadar isu termodinamika, melainkan masalah optimasi multi-objektif antara *service level*, *total cost of ownership*, dan *product integrity index* (PII). Pendekatan holistik yang menggabungkan resilience engineering, sensor network, dan *stochastic disruption modeling* menjadi kebutuhan strategis bagi pelaku industri. Dokumen modul ini akan menguraikan kerangka teoretis, formulasi matematis, dan studi kasus kuantitatif yang bersumber dari literatur riil Khurshid & Siddiqui (2024) dan Putra dkk. (2024) untuk membangun modul referensi spesialis yang komprehensif.

---

## 2. Landasan Teori & Formulasi Matematis

Model resilien yang diajukan Khurshid dan Siddiqui (2024) dibangun di atas tiga pilar teoritis: (i) *disruption probability function* $f_d(t)$, (ii) *recovery time distribution* $R(t)$, dan (iii) *resilience index* $RI$. Ketiganya membentuk kerangka *stochastic-resilience model* yang memungkinkan pengukuran kemampuan sistem cold chain untuk mempertahankan fungsinya di bawah tekanan gangguan termal, operasional, dan infrastruktural.

**a. Disruption Probability Function**

Probabilitas terjadinya disrupsi suhu pada segmen cold chain $i$ dimodelkan sebagai fungsi waktu eksponensial terkondisi:

$$f_d(t) = \lambda_i \cdot e^{-\lambda_i (t - \tau_i)} \cdot \mathbb{1}\{t \geq \tau_i\}$$

di mana $\lambda_i$ adalah *disruption rate* segmen ke-$i$ (satuan: insiden per jam), $\tau_i$ adalah *lead time* minimum sebelum disrupsi dapat terjadi, dan $\mathbb{1}\{\cdot\}$ adalah indikator fungsi. Parameter $\lambda_i$ dapat diestimasi secara empiris dari *historical temperature log* IoT sensor DS18B20 dengan resolusi pengukuran 0,0625°C dalam rentang -55°C hingga +125°C (Putra dkk., 2024).

**b. Resilience Index (RI)**

Indeks resilien didefinisikan sebagai rasio antara *expected service retained* terhadap *maximum possible service*, dengan formula integral:

$$RI = \frac{\displaystyle\int_{0}^{T} S(t) \cdot Q(t) \, dt}{\displaystyle\int_{0}^{T} Q(t) \, dt}$$

di mana $S(t) \in [0,1]$ adalah *service function* yang merepresentasikan proporsi kapasitas rantai pasok aktif pada waktu $t$, dan $Q(t)$ adalah *quality retention function* yang merepresentasikan integritas termal produk perishable. Khurshid dan Siddiqui (2024) memformalkan $Q(t)$ mengikuti persamaan Arrhenius-like:

$$Q(t) = e^{-k_d \cdot \int_{0}^{t} \Delta T(s)^+ \, ds}$$

di mana $k_d$ adalah *degradation rate constant* (satuan: 1/(°C·jam)) yang spesifik untuk tiap kategori produk, dan $\Delta T(s)^+ = \max(0, T(s) - T_{ref})$ adalah ekskursi suhu positif di atas referensi. Akumulasi ekskursi suhu melalui integral $\int_0^t \Delta T(s)^+ ds$ dikenal dalam standar pharma sebagai konsep **Mean Kinetic Temperature (MKT)**.

**c. Recovery Time Distribution**

Waktu pemulihan sistem setelah disrupsi dimodelkan dengan distribusi Weibull:

$$R(t) = \frac{\beta}{\eta} \left(\frac{t - t_0}{\eta}\right)^{\beta - 1} e^{-\left(\frac{t - t_0}{\eta}\right)^{\beta}}$$

di mana $\beta > 0$ adalah *shape parameter* (distribusi eksponensial ketika $\beta = 1$), $\eta > 0$ adalah *scale parameter*, dan $t_0$ adalah *onset time* recovery.

**d. Total Expected Loss (TEL)**

Fungsi tujuan yang diminimalkan dalam optimasi cold chain:

$$TEL = \sum_{i=1}^{n} \left[ C_{p,i} \cdot P(Q(t) < Q_{crit}) + C_{r,i} \cdot E[R_i] + C_{o,i} \right]$$

di mana $C_{p,i}$ adalah biaya produk rusak pada segmen $i$, $C_{r,i}$ adalah biaya pemulihan, $C_{o,i}$ adalah biaya operasional, dan $Q_{crit}$ adalah ambang batas kualitas kritis yang biasanya 0,85 untuk vaksin hidup dan 0,90 untuk produk dairy.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resilien cold chain mengikuti kerangka **PDCA (Plan-Do-Check-Act)** yang dipadukan dengan arsitektur IoT tiga lapis (Putra dkk., 2024):

**Tahap 1 — Plan (Perencanaan & Karakterisasi)**
1. Pemetaan proses bisnis cold chain menggunakan *Value Stream Mapping* (VSM) untuk mengidentifikasi segmen kritis (receiving → storage → dispatch → last-mile delivery).
2. Penentuan $T_{ref}$, $Q_{crit}$, dan $\lambda_i$ berbasis data historis 12 bulan.
3. Klasifikasi produk perishable ke dalam *thermal sensitivity class* (TSC 1–5).

**Tahap 2 — Do (Implementasi Sensor & Monitoring)**
Pemasangan sensor DS18B20 dengan protokol komunikasi 1-Wire pada setiap *cold chain box*. Sensor dibaca setiap interval $\Delta t = 60$ detik dengan akurasi $\pm 0,5°C$ dalam rentang -10°C hingga +85°C (Putra dkk., 2024). Data dikirim ke mikrokontroler (Arduino/ESP32) lalu diteruskan ke *cloud server* melalui MQTT protocol. Diagram alir logika:

```
[START] → [Inisialisasi Sensor DS18B20]
        → [Baca Suhu Setiap Δt]
        → [Hitung ΔT⁺ = max(0, T - T_ref)]
        → [Update Running Integral ∫ΔT⁺ds]
        → [Evaluasi Q(t) vs Q_crit]
        → [Decision Branch]
              ├── Q(t) ≥ Q_crit → [LOG OK] → [Loop]
              └── Q(t) < Q_crit → [TRIGGER ALARM]
                                  → [Hitung TEL insiden]
                                  → [Notifikasi Stakeholder]
                                  → [Loop Recovery]
```

**Tahap 3 — Check (Validasi & Kalibrasi)**
Kalibrasi sensor DS18B20 dilakukan setiap 6 bulan menggunakan *ice-point reference* (0,0°C) dan *certified reference thermometer*. Validasi model RI dilakukan dengan membandingkan prediksi $Q(t)$ terhadap hasil laboratorium *potency assay* untuk sub-sampel produk.

**Tahap 4 — Act (Perbaikan Berkelanjutan)**
Iterasi parameter $\lambda_i$, $\eta$, dan $k_d$ berdasarkan feedback aktual. SOP ini harus terdokumentasi dalam *Quality Management System* sesuai ISO 9001:2015 klausul 7.5 dan 8.5, serta pedoman WHO PQS (Performance, Quality and Safety) untuk cold chain equipment.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Distribusi vaksin COVID-19 dari UPTD Farmasi Kabupaten Siak ke 12 puskesmas dengan rute last-mile sepanjang 380 km total. Parameter industri:

| Parameter | Nilai | Sumber |
|---|---|---|
| $T_{ref}$ | 2°C s.d. 8°C | WHO PQS E001 |
| $Q_{crit}$ | 0,90 | Putra dkk. (2024) |
| $k_d$ (vaksin mRNA) | 0,018 / (°C·jam) | Khurshid & Siddiqui (2024) |
| $\lambda_1$ (segen storage) | 0,002 /jam | Estimasi historis |
| $\lambda_2$ (segen transport) | 0,015 /jam | Estimasi historis |
| $\beta$ (recovery) | 1,8 | Khurshid & Siddiqui (2024) |
| $\eta$ (recovery) | 4,5 jam | Khurshid & Siddiqui (2024) |
| Nilai produk batch | Rp 850.000.000 | Asumsi studi |
| Biaya pemulihan insiden | Rp 12.000.000 | Asumsi studi |

**Langkah 1 — Hitung Probabilitas Disrupsi per Segmen (24 jam operasi):**

$$P(d_1) = 1 - e^{-\lambda_1 \cdot 24} = 1 - e^{-0,002 \cdot 24} = 1 - e^{-0,048} \approx 0,0469$$

$$P(d_2) = 1 - e^{-\lambda_2 \cdot 24} = 1 - e^{-0,015 \cdot 24} = 1 - e^{-0,36} \approx 0,3023$$

**Langkah 2 — Estimasi Quality Function pada Kasus Ekskursi 4°C selama 2 jam:**

$$\Delta T^+ = 4 - 2 = 2°C \Rightarrow \int_0^2 \Delta T^+ ds = 4°C \cdot jam$$

$$Q(t) = e^{-0,018 \cdot 4} = e^{-0,072} \approx 0,9305$$

Karena $Q(t) = 0,9305 > Q_{crit} = 0,90$, produk masih layak secara kuantitatif, namun mendekati batas kritis—alarm peringatan dini harus aktif.

**Langkah 3 — Hitung Resilience Index untuk Skenario Komposit:**

Misalkan 90% waktu beroperasi pada $S(t) = 1,0$ dan 10% waktu pada $S(t) = 0,6$ selama disrupsi, dengan $Q(t)$ rata-rata 0,93:

$$RI = \frac{0,9 \cdot 1,0 \cdot \Delta t + 0,1 \cdot 0,6 \cdot 0,93 \cdot \Delta t}{\Delta t} = 0,9 + 0,0558 \approx 0,9558$$

**Langkah 4 — Total Expected Loss (TEL) tanpa IoT monitoring:**

$$TEL_{manual} = 0,3023 \cdot Rp\,850\,jt + 0,5 \cdot Rp\,12\,jt + Rp\,850\,jt \cdot 0,05$$

$$TEL_{manual} = Rp\,256\,jt + Rp\,6\,jt + Rp\,42,5\,jt \approx Rp\,304,5\,jt \text{ per batch}$$

**Langkah 5 — TEL dengan IoT Real-time Monitoring:**

Penerapan IoT menurunkan $\lambda_2$ efektif menjadi 0,004/jam (deteksi dini 2× lebih cepat), sehingga:

$$TEL_{IoT} = (1 - e^{-0,004 \cdot 24}) \cdot Rp\,850\,jt + 0,3 \cdot Rp\,12\,jt + Rp\,850\,jt \cdot 0,01$$

$$TEL_{IoT} = 0,0919 \cdot Rp\,850\,jt + Rp\,3,6\,jt + Rp\,8,5\,jt \approx Rp\,90\,jt$$

**Interpretasi Manajerial:** Implementasi sistem IoT monitoring menurunkan TEL dari Rp 304,5 juta menjadi Rp 90 juta per batch—efisiensi biaya risiko sebesar **70,4%**. *Capital expenditure* sistem IoT berbasis DS18B20 (12 unit sensor + ESP32 + gateway) hanya sekitar Rp 18 juta dengan payback period < 3 bulan untuk skala batch senilai Rp 850 juta.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologi:** Model Khurshid dan Siddiqui (2024) mengasumsikan *single-node disruption* dan parameter $\lambda_i$ yang stasioner, padahal pada kenyataan工业区 disruptions bersifat *cascading*—misalnya kegagalan genset memicu kenaikan suhu yang memicu kerusakan compressor. Putra dkk. (2024) juga mencatat bahwa sensor DS18.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
