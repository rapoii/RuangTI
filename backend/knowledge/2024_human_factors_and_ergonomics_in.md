# 2024 — Ergonomi Kognitif dan Faktor Manusia dalam Sistem Sosio-Teknis Industry 5.0: Pemodelan Beban Kognitif Berbasis Wearable Sensor untuk Sistem Human-Machine Interaction

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Human Factors and Ergonomics in Industry 5.0—A Systematic Literature Review
**Jurnal & Sitasi Utama:** Maja Trstenjak, Andrea Benešová, Tihomir Opetuk (2025). *Applied Sciences*. DOI: [https://doi.org/10.3390/app15042123](https://doi.org/10.3390/app15042123)
**Sitasi Pendukung:** Sabrina Iarlori, David Perpetuini, Michele Tritto (2024). *BioMedInformatics*. DOI: [https://doi.org/10.3390/biomedinformatics4020064](https://doi.org/10.3390/biomedinformatics4020064)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi paradigma manufaktur global dari Industry 4.0 menuju **Industry 5.0** menandai pergeseran fundamental dari otomatisasi murni menuju integrasi harmonis antara kapabilitas mesin dan kapasitas unik manusia. Trstenjak, Benešová, dan Opetuk (2025) dalam *systematic literature review* yang dipublikasikan di *Applied Sciences* (DOI: [10.3390/app15042123](https://doi.org/10.3390/app15042123)) menegaskan tiga pilar utama Industry 5.0: **human-centricity**, **sustainability**, dan **resilience**. Pilar human-centricity secara eksplisit menuntut pengembangan *socio-technical systems* yang tidak hanya menjamin keselamatan dan kesehatan pekerja, melainkan juga memperhatikan *cognitive workload* (CW) dan *well-being* sebagai variabel strategis yang berkaitan langsung dengan produktivitas, efisiensi, dan motivasi kerja.

Konteks industri kontemporer menunjukkan urgensi yang semakin meningkat. Sektor manufaktur Eropa kehilangan sekitar €33,7 miliar per tahun akibat *work-related stress* dan *psychosocial risks* (EU-OSHA, 2022), sementara 50% pekerja manufaktur melaporkan tingkat kelelahan kognitif *moderate-to-high* berdasarkan survei *Cedefop* terbaru. Pada lini produksi *human-robot collaboration* (HRC), peningkatan kompleksitas tugas menghasilkan *information overload* yang menurunkan *throughput* hingga 12–18% dan meningkatkan *human error rate* sebesar 23% pada skenario *dual-task* (Trstenjak et al., 2025). Iarlori, Perpetuini, dan Tritto (2024) dalam *BioMedInformatics* (DOI: [10.3390/biomedinformatics4020064](https://doi.org/10.3390/biomedinformatics4020064)) melengkapi landasan ini dengan menyatakan bahwa pemantauan *cognitive workload* secara *ecological* melalui *wearable sensors* pada skenario *Human-Machine Interaction* (HMI) menjadi krusial untuk mencegah *stressful circumstances* yang menurunkan kualitas keputusan operator.

Gap riset yang diidentifikasi oleh Trstenjak et al. (2025) adalah lemahnya penanganan **cognitive ergonomics** dalam literatur HFE, padahal pilar *well-being* dan *resilience* Industry 5.0 tidak dapat direalisasikan tanpa kerangka kuantitatif yang mampu mengukur dan memitigasi beban kognitif secara *real-time*. Oleh karena itu, modul ini membangun jembatan metodologis antara *systematic review* Trstenjak et al. (2025) dan pendekatan teknis Iarlori et al. (2024) untuk menghasilkan kerangka rekayasa yang aplikatif di lantai pabrik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Beban Kognitif (Cognitive Workload)

*Beban kognitif* dimodelkan sebagai fungsi multi-dimensi dari tuntutan tugas, kapasitas operator, dan kondisi lingkungan. Berdasarkan kerangka *Multiple Resource Theory* (Wickens, 2008) yang diadopsi secara implisit oleh Trstenjak et al. (2025), indeks beban kognitif total didefinisikan sebagai:

$$CW_{total} = \sum_{i=1}^{n} w_i \cdot \frac{D_i}{C_i}$$

di mana $D_i$ adalah *task demand* pada modalitas kognitif ke-$i$ (visual, auditori, spasial, verbal), $C_i$ adalah kapasitas modalitas tersebut, dan $w_i$ adalah bobot relevansi modalitas dengan tugas. Nilai $CW_{total} > 1$ mengindikasikan *overload*, sedangkan $CW_{total} < 0.3$ mengindikasikan *underload* (yang menurunkan *vigilance*).

### 2.2 Formulasi NASA-TLX sebagai Validasi Subjektif

Indeks subjektif *NASA-Task Load Index* diformulasikan sebagai rata-rata terbobotkan dari enam subskala:

$$NASA\text{-}TLX = \frac{\sum_{j=1}^{6} p_j \cdot s_j}{15}$$

di mana $p_j \in \{0,1\}$ adalah bobot hasil *pairwise comparison* dan $s_j \in [0,100]$ adalah *raw rating* pada subskala *Mental Demand, Physical Demand, Temporal Demand, Performance, Effort, Frustration*.

### 2.3 Estimasi CW Berbasis *Heart Rate Variability* (HRV)

Mengacu pada Iarlori et al. (2024), sinyal *photoplethysmography* (PPG) dari *wearable* wristband diproses menjadi metrik HRV. *Root Mean Square of Successive Differences* didefinisikan sebagai:

$$RMSSD = \sqrt{\frac{1}{N-1} \sum_{k=1}^{N-1} (RR_{k+1} - RR_k)^2}$$

di mana $RR_k$ adalah interval antar-detak dalam milidetik. Beban kognitif berkorelasi negatif dengan RMSSD melalui dominasi sistem saraf simpatik. Indeks beban kognitif berbasis HRV dinormalisasi sebagai:

$$CW_{HRV} = 1 - \frac{RMSSD - RMSSD_{min}}{RMSSD_{max} - RMSSD_{min}}$$

### 2.4 Analisis Sinyal EEG dan Rasio Band Power

Untuk *dry-electrode EEG headset*, *power spectral density* $P(f)$ dihitung via *Welch method* dan diintegrasikan pada pita frekuensi standar:

$$\theta\text{-band: } P_{\theta} = \int_{4}^{8} P(f)\,df, \quad \alpha\text{-band: } P_{\alpha} = \int_{8}^{13} P(f)\,df$$

$$EEG\text{-}Workload = \frac{P_{\theta}}{P_{\alpha}} \quad \text{(Theta/Alpha Ratio)}$$

Nilai rasio $\theta/\alpha > 1.5$ mengindikasikan *cognitive overload* (Klimesch, 1999). Iarlori et al. (2024) menekankan pentingnya *multimodal fusion* untuk mengatasi *noise* intrinsik sinyal fisiologis tunggal.

### 2.5 Model Produktivitas Yerkes-Dodson

Hubungan non-linear antara *arousal*/beban kognitif dan performa operator mengikuti hukum Yerkes-Dodson:

$$P(CW) = P_{max} \cdot \exp\left(-\frac{(CW - CW^*)^2}{2\sigma^2}\right)$$

di mana $P_{max}$ adalah performa puncak, $CW^*$ adalah *optimal workload* (tipikal $\approx 0.6$–$0.7$ untuk tugas HRC), dan $\sigma$ adalah *tolerance bandwidth*. Trstenjak et al. (2025) menekankan bahwa desain workstation Industry 5.0 harus men-*engineer* sistem agar $CW$ operator berada dalam *band* optimal ini.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti kerangka **ISO 9241-210** (Human-Centred Design) yang dikombinasikan dengan *ISO/TS 15066* (Collaborative Robots) dan *ISO 10075* (Ergonomic Principles related to Mental Workload). Prosedur operasional standar (SOP) untuk *Cognitive Workload Monitoring System* (CWMS) di lantai pabrik adalah sebagai berikut:

**Tahap 1 — Pra-Implementasi (Week 1–4):**
1. Lakukan *task analysis* terhadap seluruh stasiun kerja HRC menggunakan metode *Hierarchical Task Analysis* (HTA).
2. Identifikasi *cognitive demand* per tugas menggunakan *Cognitive Task Analysis* (CTA) dan *Applied Cognitive Task Analysis* (ACTA).
3. Tetapkan *baseline* NASA-TLX untuk $n \geq 30$ operator sebagai referensi.

**Tahap 2 — Instrumentasi Worker (Week 5–8):**
1. Pasang *wearable* EEG headset (misal 4-channel *dry electrode* di prefrontal area Fp1, Fp2, Fz, Cz).
2. Pasang *wristband* PPG/EDA untuk HRV dan *electrodermal activity*.
3. Integrasikan *eye-tracker* (mobile) untuk *pupillometry* dan *gaze entropy*.

**Tahap 3 — Akuisisi & Fusi Data (Week 9–10):**
1. Streaming data pada *sampling rate* minimum 128 Hz (EEG) dan 64 Hz (PPG).
2. Lakukan *preprocessing*: filter bandpass 0.5–50 Hz untuk EEG, *artifact removal* via ICA.
3. Hitung *feature vector*: $\mathbf{x} = [RMSSD, \theta/\alpha, \text{pupil diameter}, EDA\ peak]$
4. Terapkan *multimodal fusion* (late fusion dengan bobot *Bayesian* atau *Dempster-Shafer*):

$$CW_{fused} = \sum_{m=1}^{M} \alpha_m \cdot CW_m, \quad \sum \alpha_m = 1$$

**Tahap 4 — Umpan Balik & Adaptasi (Week 11–16):**
1. Tampilkan *dashboard* real-time di HMI workstation dengan *traffic-light coding* (hijau: optimal, kuning: near-threshold, merah: overload).
2. Aktifkan *adaptive automation*: jika $CW_{fused} > 0.85$ selama >30 detik, sistem secara otomatis mengurangi tingkat otomatisasi (*Level 5 → Level 3* per Sheridan scale).
3. Lakukan *retraining* model setiap 30 hari dengan data baru untuk mencegah *concept drift*.

**Tahap 5 — Audit & Iterasi (Continuous):**
1. Hitung *KPI* mingguan: rata-rata $CW_{fused}$, deviasi standar, korelasi dengan *defect rate*.
2. Bandingkan dengan *baseline* NASA-TLX untuk validasi konvergen.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Lini perakitan *cobotic* di pabrik *automotive tier-1 supplier* di Stuttgart, Jerman, dengan 12 stasiun HRC. Operator merakit *gearbox housing* dengan bantuan collaborative robot *UR10e*. Task cycle time target: 90 detik/unit.

**Data Input (Sampling 10 operator, 100 cycle masing-masing):**

| Parameter | Baseline (Pre-5.0) | Pasca-Implementasi CWMS |
|---|---|---|
| Mental Demand (NASA-TLX, 0–100) | 72 | 54 |
| Temporal Demand | 68 | 50 |
| Effort | 75 | 58 |
| Frustration | 60 | 35 |
| RMSSD (ms) | 28.4 | 41.7 |
| EEG $\theta/\alpha$ ratio | 1.78 | 1.21 |
| Pupil diameter (mm) | 5.2 | 4.3 |
| Cycle time rata-rata (s) | 102.3 | 89.4 |
| Defect rate (ppm) | 2,340 | 1,180 |

**Perhitungan Step-by-Step:**

**Langkah 1: Bobot Pairwise NASA-TLX** (dari 15 perbandingan berpasangan terhadap 6 subskala, diambil 5 pair teratas dengan signifikansi klinis):

Misal $p = [1, 0, 1, 0, 1, 1]$