# 2022 — Manajemen Rantai Dingin (Cold Chain) Logistik Vaksin COVID-19: Integrasi Tinjauan Sistematis, Pemodelan Termal, dan Platform IoT–Digital Twin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Management of COVID-19 vaccines cold chain logistics: a scoping review
**Jurnal & Sitasi Utama:** Mathumalar Loganathan Fahrni, Intan An-Nisaa' Ismail, Dalia Mohammed Refi (2022). *Journal of Pharmaceutical Policy and Practice*. DOI: [https://doi.org/10.1186/s40545-022-00411-5](https://doi.org/10.1186/s40545-022-00411-5)
**Sitasi Pendukung:** Wei Wu, Leidi Shen, Zhiheng Zhao (2023). *Journal of Industrial Information Integration*. DOI: [https://doi.org/10.1016/j.jii.2023.100443](https://doi.org/10.1016/j.jii.2023.100443)

---

## 1. Pendahuluan dan Konteks Industri

Krisis pandemi COVID-19 telah meletakkan tekanan yang belum pernah terjadi sebelumnya pada sistem logistik farmasi global, terutama pada subsistem *cold chain* (rantai dingin) yang harus mempertahankan integritas termal produk hayati pada rentang suhu yang sangat sempit. Fahrni, Ismail, dan Refi (2022) dalam *scoping review* mereka yang dipublikasikan di *Journal of Pharmaceutical Policy and Practice* menegaskan bahwa "successful mass vaccination programmes are public health achievements of the contemporary world", namun secara paradoks, isu *management* vaksin COVID-19—bukan sekadar formulasi klinisnya—justru menjadi titik lemah yang kurang tereskpos dalam literatur ilmiah (Fahrni et al., 2022).

Permasalahan ini menjadi sangat strategis bagi disiplin Teknik Industri karena menyentuh setidaknya empat pilar kompetensi: (1) **perancangan sistem distribusi** dengan kendala *time-temperature-sensitive*; (2) **pengendalian kualitas proses** melalui protokol Good Distribution Practice (GDP); (3) **rekayasa keandalan** untuk mencegah *cold chain breach*; dan (4) **pengambilan keputusan berbasis data** pada jaringan multi-echelon yang melintasi batas negara. Kompleksitas bertambah ketika produk vaksin COVID-19 generasi baru seperti Pfizer-BioNTech (memerlukan ultra-low temperature $-70^{\circ}\text{C}$) dan Moderna ($-20^{\circ}\text{C}$) menuntut kapasitas freezer khusus yang tidak dimiliki sebagian besar negara berkembang.

Secara ekonomi, nilai sebuah vial vaksin yang rusak bukan hanya sebanding dengan harga produksinya, tetapi juga pada nilai *opportunity cost* dari dosis yang hilang—di mana satu dosis Pfizer-BioNTech pada 2021–2022 bernilai sekitar USD 19,50 ditambah biaya distribusi last-mile sekitar USD 2,50–5,00 per dosis. Jika tingkat kerusakan rata-rata 5% (angka yang dilaporkan WHO untuk rantai dingin Afrika sebelum pandemi), maka untuk program 1 miliar dosis akan terjadi kerugian ekonomis lebih dari USD 1,25 miliar. Bagi konteks Indonesia dengan 422 juta dosis yang harus didistribusikan (per akhir 2022), potensi kerugian finansial akibat *cold chain failure* sangat material bagi perencanaan APBN kesehatan.

Wu, Shen, dan Zhao (2023) dalam paper pendukungnya di *Journal of Industrial Information Integration* mengusulkan paradigma *Internet of Everything* (IoE) yang mengintegrasikan sensor, aktuator, edge computing, dan *Digital Twin* untuk menghasilkan visibilitas real-time terhadap status termal setiap kontainer. Kombinasi kedua literatur ini—satu bersifat *evidence synthesis* kebijakan, satu bersifat *technological architecture*—menjadi landasan kuat untuk modul ini karena menjembatani kesenjangan antara *what to manage* dan *how to manage*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Termal Vaksin (Arrhenius–kontinu)

Degradasi potensi antigenik vaksin terhadap suhu dapat dimodelkan menggunakan persamaan Arrhenius orde pertama yang diadopsi oleh WHO PQS (Performance, Quality and Safety) untuk *vaccine vial monitor* (VVM):

$$
k(T) = A \cdot e^{\frac{-E_a}{R \cdot T}}
$$

dengan:
- $k(T)$ = laju degradasi (per hari) pada suhu absolut $T$ (Kelvin),
- $A$ = faktor pre-eksponensial (konstan untuk setiap jenis vaksin),
- $E_a$ = energi aktivasi reaksi degradasi ($\text{J/mol}$),
- $R$ = konstanta gas universal $= 8{,}314\,\text{J/(mol·K)}$,
- $T$ = suhu penyimpanan absolut dalam Kelvin.

Potensi antigenik tersisa pada waktu $t$ diberikan oleh:

$$
P(t) = P_0 \cdot e^{-k(T) \cdot t}
$$

Untuk vaksin mRNA Pfizer, pada suhu referensi $T_{ref} = -70^{\circ}\text{C} = 203{,}15\,\text{K}$, laju degradasi sangat rendah; namun setiap kenaikan 10°C (faktor $Q_{10} \approx 2$ untuk banyak protein) melipatgandakan laju kerusakan secara signifikan.

### 2.2 Energi Konduksi Panas pada Wadah Isothermal (Fourier 1-D)

Aliran panas masuk ke dalam *cold box* berpemakaian *phase change material* (PCM) mengikuti hukum Fourier:

$$
\dot{Q} = \frac{k_m \cdot A}{\Delta x} \cdot (T_{ext} - T_{int})
$$

dengan:
- $\dot{Q}$ = laju perpindahan panas (Watt),
- $k_m$ = konduktivitas termal dinding wadah ($\text{W/(m·K)}$),
- $A$ = luas permukaan efektif ($\text{m}^2$),
- $\Delta x$ = tebal dinding isolasi ($\text{m}$),
- $T_{ext}, T_{int}$ = suhu lingkungan luar dan internal (K).

Lama PCM mempertahankan suhu kritis dihitung dari neraca energi:

$$
t_{hold} = \frac{m_{PCM} \cdot L_{PCM}}{\dot{Q}}
$$

dengan $m_{PCM}$ = massa PCM (kg) dan $L_{PCM}$ = panas laten peleburan PCM (J/kg).

### 2.3 Indikator Keandalan Rantai Dingin (Service Level Termal)

*Service level termal* didefinisikan sebagai probabilitas bahwa suhu internal tetap dalam batas spesifikasi selama durasi pengiriman $T_d$:

$$
SL = P\!\left[ T_{int}(t) \leq T_{max}, \forall t \in [0, T_d] \right]
$$

Untuk sistem dengan permintaan acak dan gangguan Markov, *service level* dapat didekati dengan model antrian M/M/1 berprioritas sesuai Wu et al. (2023).

### 2.4 Indeks Kerentanan dan Biaya Total Cold Chain

Biaya total rantai dingin per periode didefinisikan Fahrni et al. (2022) sebagai:

$$
TC = C_{storage} + C_{transport} + C_{wastage} + C_{monitoring}
$$

dengan:
- $C_{wastage} = N_{doses} \cdot p_{breach} \cdot (c_{vaccine} + c_{distribution})$,
- $p_{breach}$ = probabilitas *cold chain breach*,
- $N_{doses}$ = jumlah dosis yang dikirim.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Kerangka PRISMA-ScR untuk Audit Cold Chain

Fahrni et al. (2022) menggunakan *Preferred Reporting Items for Systematic Reviews and Meta-Analyses extension for Scoping Reviews* (PRISMA-ScR) 2018 dengan protokol berikut:

```
┌──────────────────────────────────────────────────────────┐
│ TAHAP 1: Identifikasi                                      │
│   └─ Pencarian di PubMed (LitCovid), Scopus, ScienceDirect│
│       Rentang waktu: April 2020 – Januari 2022            │
│       Kata kunci: ("COVID-19 vaccine" AND "cold chain")    │
├──────────────────────────────────────────────────────────┤
│ TAHAP 2: Skrining                                          │
│   └─ 2 reviewer independen, pilot-tested                   │
│       Kriteria inklusi: cold chain management,           │
│       Kriteria eksklusi: hanya klinis/tanpa data logistik │
├──────────────────────────────────────────────────────────┤
│ TAHAP 3: Eligibility                                       │
│   └─ Full-text review dengan third-reviewer arbitration   │
├──────────────────────────────────────────────────────────┤
│ TAHAP 4: Inklusi & Sintesis                                │
│   └─ Tematik: storage, transport, monitoring, wastage     │
└──────────────────────────────────────────────────────────┘
```

### 3.2 SOP Operasional Cold Chain (Berbasis WHO PQS E001 + GDP)

| Tahap | Aktivitas | Parameter Kendali | Standar |
|-------|-----------|-------------------|---------|
| 1. Pre-Storage | Validasi freezer $-70^{\circ}\text{C}$ | Suhu均匀性 $\leq \pm 2^{\circ}\text{C}$ | WHO PQS E001 |
| 2. Receiving | Penerimaan dengan VVM check | VVM stage I/II | WHO PQS E006 |
| 3. Put-away | Penempatan rak dengan rotasi FEFO | $T_{int}$ logged tiap 5 menit | GDP Annex 9 |
| 4. Order Picking | Picking dengan cool box ber-PCM | $T_{int} \leq 8^{\circ}\text{C}$ maks 4 jam | PQS E004 |
| 5. Transport | GPS-tracked reefer truck | Set-point $2\text{–}8^{\circ}\text{C}$, alarm $\pm 2^{\circ}\text{C}$ | IATA TCR |
| 6. Last-mile | Vaccine carrier dengan VVM final | Suhu surface $\leq 10^{\circ}\text{C}$ | UNICEF SDD |

### 3.3 Arsitektur IoE–Digital Twin (Wu et al., 2023)

Arsitektur 4-lapis yang diusulkan Wu et al. (2023):

1. **Perception Layer:** Sensor suhu DS18B20, kelembapan, accelerometer, GPS.
2. **Edge Layer:** *Edge gateway* (Raspberry Pi/industrial gateway) dengan protokol MQTT.
3. **Platform Layer:** *Cloud* untuk agregasi big data; *Digital Twin* sebagai representasi virtual container yang mensimulasikan profil termal berbasis CFD (Computational Fluid Dynamics) kalibrasi sensor.
4. **Service Layer:** Dashboard real-time, prediksi risiko *breach* dengan *LSTM neural network*, notifikasi otomatis ke manajer logistik.

Persamaan *state-space* digital twin suhu internal:

$$
T_{int}(k+1) = \alpha \cdot T_{int}(k) + \beta \cdot T_{ext}(k) + \gamma \cdot u(k) + w(k)
$$

dengan $\alpha, \beta, \gamma$ = parameter identifikasi ARX, $u(k)$ = sinyal kontrol kompresor, dan $w(k)$ = gangguan stokastik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi 1.000 Vial Pfizer-BioNTech dari Gudang Jakarta ke Puskesmas Papua

**Asumsi parameter:**
- Volume tiap vial: 2 mL, kapasitas cold box: 50 L.
- Suhu ambient rata-rata jalur udara Jayapura: $T_{amb} = 30^{\circ}\text{C} = 303{,}15\,\text{K}$.
- Dinding cold box: $k_m = 0{,}025\,\text{W/(m·K)}$, $A = 1{,}5\,\text{m}^2$, $\Delta x = 0{,}05\,\text{m}$.
- PCM: $m_{PCM} = 5\,\text{kg}$, $L_{PCM} = 220\,\text{kJ/kg}$.
- Harga vial: USD 19,50; distribusi: USD 3,50/dosis; total per vial: USD 23,00.
- $p_{breach}$ baseline tanpa monitoring IoT: 0,08 (8%); dengan IoT-Digital Twin: 0,015 (1,5%).

**Langkah 1 — Hitung laju panas masuk ($\dot{Q}$):**

$$
\dot{Q} = \frac{0{,}025 \cdot 1{,}5}{0{,}05} \cdot (303{,}15 - 268{,}15) = 0{,}75 \cdot 35 = 26{,}25\,\text{W}
$$

**Langkah 2 — Hitung *hold-over time* PCM:**

$$
t_{hold} = \frac{5 \cdot 220\,000}{26{,}25} = \frac{1\,100\,000}{26{,}25} \approx 41\,904\,\text{sekon} \approx 11{,}6\,\text{jam}
$$

Artinya, tanpa IoT-monitoring, PCM habis sebelum penerbangan multi-leg Jakarta–Jayapura (rata-rata 14 jam termasuk transit).

**Langkah 3 — Estimasi kerugian jika tidak menggunakan IoT-Digital Twin:**

$$
C_{wastage}^{no IoT} = 1000 \cdot 0{,}08 \cdot 23 = 1\,840\,\text{USD} \approx \text{IDR }28{,}7\,\text{juta}
$$

**Langkah 4 — Estimasi kerugian dengan platform IoE–Digital Twin (Wu et al., 2023):**

$$
C_{wastage}^{IoT} = 1000 \cdot 0{,}015 \cdot 23 = 345\,\text{USD} \approx \text{IDR }5{,}4\,\text{juta}
$$

**Langkah 5 — CAPEX IoT gateway per kontainer:**

Asumsi 1 gateway @ USD 250 + sensor @ USD 75 + langganan cloud @ USD 10/bulan = **USD 335/tahun**.

**Langkah 6 — Net Benefit:**

$$
\Delta C_{wastage} = 1840 - 345 = 1495\,\text{USD}
$$

$$
ROI_{tahunan} = \frac
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
