# 1464 — Ergonomi Kognitif: Triangulasi Penilaian Beban Kerja Mental Berbasis Fisiologis, Subjektif, dan Kinerja pada Sistem Manufaktur Maju

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Cognitive ergonomics: Triangulation of physiological, subjective, and performance-based mental workload assessments
**Jurnal & Sitasi Utama:** Emmie Fogelberg, H. Henry Cao, Peter Thorvald (2025). *Frontiers in Industrial Engineering*. DOI: [https://doi.org/10.3389/fieng.2025.1605975](https://doi.org/10.3389/fieng.2025.1605975)
**Sitasi Pendukung:** Giovanni Blandino (2023). *Materials Research Proceedings*. DOI: [https://doi.org/10.21741/9781644902714-7](https://doi.org/10.21741/9781644902714-7)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur global yang ditandai dengan adopsi paradigma *Industry 4.0* dan kini bergeser menuju *Industry 5.0* telah mengubah secara fundamental profil beban kerja operator lini produksi. Menurut Blandino (2023) dalam *Materials Research Proceedings* (DOI: [10.21741/9781644902714-7](https://doi.org/10.21741/9781644902714-7)), pergeseran paradigma ini memindahkan fokus teknologi dari sekadar otomasi menjadi pengembangan *human-centred work environments* yang memprioritaskan kesejahteraan operator. Dalam konteks ini, meningkatnya kustomisasi produk, variasi item yang tinggi, dan kompleksitas perakitan yang semakin menuntut kapasitas kognitif operator menjadi tantangan ergonomis yang nyata. Fogelberg, Cao, dan Thorvald (2025) dalam *Frontiers in Industrial Engineering* (DOI: [10.3389/fieng.2025.1605975](https://doi.org/10.3389/fieng.2025.1605975)) menekankan bahwa operator pada lini perakitan modern semakin banyak mengeksekusi tugas-tugas yang bersifat *cognitively complex*, sehingga penilaian terhadap kesehatan dan performa kognitif mereka menjadi topik yang semakin strategis dalam disiplin *cognitive ergonomics*.

Secara ekonomi-operasional, ketidakmampuan mengelola beban kerja mental (mental workload) memiliki konsekuensi langsung terhadap tiga metrik kritis: *first-pass yield*, *overall equipment effectiveness* (OEE), dan *human reliability*. Ketika beban kerja mental melampaui kapasitas kognitif, muncul fenomena *cognitive overload* yang ditandai dengan peningkatan *error rate*, perlambatan *completion time*, serta degradasi kualitas keputusan. Sebaliknya, beban kerja yang terlalu rendah (*underload*) menghasilkan *disengagement*, kebosanan, dan potensi *safety violations*. Fenomena *Yerkes-Dodson Law* menunjukkan hubungan kurvilinear antara arousal/load dan performa, sehingga diperlukan jendela operasi optimal yang hanya dapat diidentifikasi melalui instrumentasi pengukuran yang valid dan reliabel. Urgensi ini diperkuat oleh fakta bahwa pada lini perakitan drone 3D-printed yang diteliti Fogelberg dkk. (2025), kombinasi empat instrumen pengukuran (error rate, completion time, RSME, dan HRV) menunjukkan bahwa tiga dari empat ukuran secara signifikan berkorelasi dan dapat digunakan bersama untuk mendukung asesmen beban kerja mental secara holistik. Lebih jauh, Blandino (2023) menambahkan bahwa sistem *push* dan *pull* (misalnya *lean* versus *agile*) memiliki efek berbeda terhadap *workload and stress* (WLS) operator, yang hingga saat ini masih kurang dieksplorasi dalam literatur akademis meskipun memiliki implikasi manajerial yang signifikan. Dengan demikian, pengembangan protokol triangulasi yang mengintegrasikan sinyal fisiologis, subjektif, dan kinerja menjadi kebutuhan riset dan praktik industri yang mendesak.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang mendasari triangulasi beban kerja mental bersandar pada *Multiple Resource Theory* (Wickens, 2008) yang menyatakan bahwa kinerja kognitif dipengaruhi oleh persaingan antar sumber daya mental (*visual, auditory, cognitive, psychomotor*). Pengukuran yang digunakan dalam studi Fogelberg dkk. (2025) mewakili tiga domain pengukuran:

### 2.1 Pengukuran Fisiologis: Heart Rate Variability (HRV)

HRV diukur dari interval RR (RR-interval) antar detak jantung berurutan. Dua metrik domain waktu yang lazim digunakan adalah **SDNN** (*Standard Deviation of NN intervals*) dan **RMSSD** (*Root Mean Square of Successive Differences*):

$$\text{SDNN} = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N}(RR_i - \overline{RR})^2}$$

$$\text{RMSSD} = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N-1}(RR_{i+1} - RR_i)^2}$$

di mana $RR_i$ adalah interval RR ke-$i$ (dalam milidetik), $\overline{RR}$ adalah rata-rata interval RR, dan $N$ adalah jumlah total interval. Pada domain frekuensi, rasio LF/HF (Low Frequency / High Frequency) merefleksikan keseimbangan simpatik-parasimpatik:

$$\text{LF/HF} = \frac{\int_{0.04}^{0.15} P(f)\, df}{\int_{0.15}^{0.40} P(f)\, df}$$

di mana $P(f)$ adalah *power spectral density*. Peningkatan rasio LF/HF mengindikasikan dominasi sistem saraf simpatik yang terkait dengan stres dan beban kognitif tinggi (Fogelberg dkk., 2025).

### 2.2 Pengukuran Subjektif: Rating Scale Mental Effort (RSME)

RSME yang dikembangkan oleh Zijlstra (1993) menggunakan skala kontinu 0–150 mm yang meminta partisipan menilai usaha mental yang dikeluarkan. Skor RSME dikonversi ke skala terstandar:

$$S_{RSME} = \frac{d_{mark}}{L_{scale}} \times 100$$

dengan $d_{mark}$ adalah jarak tanda partisipan dari titik nol pada garis RSME, dan $L_{scale}$ adalah panjang total garis (umumnya 150 mm). Skor lebih tinggi merepresentasikan usaha mental lebih besar. Untuk agregasi multi-dimensi, **NASA-TLX** (Task Load Index) memberikan skor terbobotkan:

$$\text{TLX}_{weighted} = \frac{\sum_{k=1}^{6} w_k \cdot r_k}{15}$$

di mana $w_k$ adalah bobot dari perbandingan berpasangan untuk keenam dimensi (*Mental Demand, Physical Demand, Temporal Demand, Performance, Effort, Frustration*) dan $r_k$ adalah rating skala 0–100 untuk masing-masing dimensi (Blandino, 2023).

### 2.3 Pengukuran Kinerja: Error Rate dan Completion Time

*Error rate* didefinisikan sebagai:

$$E_{rate} = \frac{n_{errors}}{n_{total\,ops}} \times 100\%$$

*Cycle time efficiency* (deviasi dari *standard time*):

$$\eta_{ct} = \frac{T_{standard}}{T_{actual}} \times 100\%$$

### 2.4 Indeks Komposit Beban Kerja Mental (CMWI)

Untuk mengintegrasikan ketiga domain ke dalam satu skor terstandar, digunakan normalisasi Z-score dan agregasi terbobotkan:

$$Z_j = \frac{X_j - \mu_j}{\sigma_j}, \quad \text{CMWI} = \sum_{j=1}^{m} \beta_j \cdot Z_j$$

dengan $\beta_j$ adalah bobot domain ($j \in \{fisiologis, subjektif, kinerja\}$), $\sum \beta_j = 1$. Validasi statistik menggunakan koefisien korelasi Pearson:

$$r_{xy} = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \sum_{i=1}^{n}(y_i - \bar{y})^2}}$$

dan signifikansi diuji melalui *Student's t-test* dengan $t = r\sqrt{(n-2)/(1-r^2)}$ dengan $df = n-2$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi protokol triangulasi beban kerja mental mengikuti kerangka sistematis berikut, yang mengintegrasikan kontribusi kedua literatur:

**Langkah 1 — Analisis Tugas dan Pemetaan Beban Kognitif.** Lakukan *task analysis* hierarkis (HTA) terhadap lini perakitan. Identifikasi node tugas dengan densitas keputusan tinggi, *multi-tasking requirements*, dan *time pressure*. Output: Peta *cognitive demand* per workstation.

**Langkah 2 — Instrumentasi Multi-Sensor.** Pasang sensor HRV (misal *Polar H10* atau *ECG chest strap*) pada operator; standar frekuensi sampling ≥ 1000 Hz untuk akurasi deteksi puncak R. Siapkan *workload dashboard* digital untuk RSME/NASA-TLX via tablet pasca-tugas. Siapkan *Poka-Yoke* dan *MES* untuk *real-time error capture* dan *automatic timestamp logging*.

**Langkah 3 — Pengumpulan Data Terkontrol.** Minimal $n = 30$ partisipan untuk validitas statistik (sesuai Fogelberg dkk., 2025). Variabel kontrol: waktu adaptasi ≥ 15 menit, konsistensi pencahayaan (≥ 500 lux per ISO 8995), suhu 20–24°C, kebisingan < 65 dBA.

**Langkah 4 — Pengolahan Sinyal.** Sinyal RR-interval diproses menggunakan algoritma Pan-Tompkins untuk deteksi puncak R, kemudian dihitung metrik SDNN, RMSSD, dan LF/HF via *Welch periodogram* (window 256 detik, overlap 50%). Pencilan (outlier) RR > 1500 ms atau < 300 ms dihapus.

**Langkah 5 — Korelasi Lintas Domain dan Validasi.** Hitung matriks korelasi Pearson/Spearman antar metrik. Threshold signifikansi $p < 0.05$. Validasi konsistensi internal menggunakan *Cronbach's alpha* $\alpha \geq 0.7$.

**Langkah 6 — Penerapan Hasil dan *Feedback Loop*.** Hasil CMWI diintegrasikan ke sistem *workstation redesign* dan *job rotation scheduling*. Lakukan *Plan-Do-Check-Act* (PDCA) setiap 4 minggu sesuai kerangka Blandino (2023).

**Diagram Alir SOP:**

```
┌─────────────────────┐
│ Task Analysis (HTA) │
└──────────┬──────────┘
           ▼
┌─────────────────────┐     ┌──────────────────┐
│ Instrumentasi HRV   │ ──▶ │ RSME/NASA-TLX    │
│ & Performance Logger│     │ Post-Task Survey │
└──────────┬──────────┘     └─────────┬────────┘
           ▼                         ▼
┌──────────────────────────────────────────┐
│    Preprocessing & Feature Extraction    │
│   (Pan-Tompkins, Welch, Z-score Norm.)   │
└──────────────────────┬───────────────────┘
                       ▼
┌──────────────────────────────────────────┐
│   Statistical Triangulation & CMWI       │
│  (Pearson r, t-test, Cronbach's α)       │
└──────────────────────┬───────────────────┘
                       ▼
┌──────────────────────────────────────────┐
│ Workload Dashboard & PDCA Redesign Loop  │
└──────────────────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Lini perakitan drone *quadcopter* 3D-printed dengan 5 operator, masing-masing menyelesaikan 10 unit per shift (8 jam). Tugas mencakup 18 sub-assembly steps termasuk pemasangan *flight controller*, *ESC calibration*, dan *propeller balancing*. Tujuannya: mengevaluasi apakah beban kerja mental operator melebihi kapasitas optimal.

**Input Parameter (5 operator, diringkas dari data lapangan):**

| Operator | RMSSD (ms) | SDNN (ms) | RSME (0–100) | $n_{errors}$ | $n_{ops}$ | $T_{actual}$ (s) | $T_{standard}$ (s) |
|----------|-----------|-----------|--------------|--------------|-----------|-------------------|--------------------|
| A | 28 | 42 | 72 | 6 | 180 | 3120 | 2700 |
| B | 35 | 51 | 55 | 3 | 180 | 2640 | 2700 |
|.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
