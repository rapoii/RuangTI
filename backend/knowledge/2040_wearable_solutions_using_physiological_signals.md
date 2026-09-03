# 2040 — Perancangan Wearable Physiological Monitoring untuk Deteksi Stres pada Individu dengan Autism Spectrum Disorder (ASD): Perspektif Teknik Industri & Rekayasa Sistem Manusia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wearable Solutions Using Physiological Signals for Stress Monitoring on Individuals with Autism Spectrum Disorder (ASD): A Systematic Literature Review
**Jurnal & Sitasi Utama:** Sandra Cano, Claudio Cubillos, Rodrigo Alfaro (2024). *Sensors*. DOI: [https://doi.org/10.3390/s24248137](https://doi.org/10.3390/s24248137)
**Sitasi Pendukung:** Jun Chen, Fanzhou Zhao, Xinyu Zhang (2025). *Drones*. DOI: [https://doi.org/10.3390/drones9110808](https://doi.org10.3390/drones9110808)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan kesejahteraan psikososial individu dengan Autism Spectrum Disorder (ASD) telah menjadi agenda strategis dalam rekayasa sistem manusia modern, mengingat prevalensi global ASD yang secara konsisten meningkat menjadi sekitar 1 dari 100 anak menurut laporan WHO dan CDC. Cano, Cubillos, dan Alfaro (2024) dalam *Sensors* [DOI: 10.3390/s24248137] menegaskan bahwa individu dengan ASD memiliki kerentanan tinggi terhadap situasi overstimulasi sensorik yang memicu stres akut dan kronis, namun deteksi dini terhadap keadaan emosional tersebut masih menjadi tantangan operasional bagi orang tua, guru, dan caregiver. Studi systematic literature review mereka merangkum 88 artikel dari basis data Scopus, PubMed, Web of Science, dan IEEE-Xplore (2014–2024), dan menemukan bahwa solusi *wearable* berbasis sinyal fisiologis—seperti *electrodermal activity* (EDA), *heart rate variability* (HRV), elektroensefalografi (EEG), dan suhu kulit—memiliki potensi besar sebagai sistem peringatan dini (*early warning system*) non-invasif.

Dari perspektif teknik industri, fenomena ini bukan sekadar isu klinis melainkan persoalan *human factors engineering*, *quality of service*, dan *product life-cycle management*. Cano et al. (2024) menekankan bahwa perangkat wearable untuk populasi ASD tidak dapat dirancang dengan asumsi *one-size-fits-all* karena individu dengan ASD memiliki *sensory sensitivity* (hipersensitivitas taktil, tekstil, dan tekanan) yang dapat menyebabkan *device rejection rate* sangat tinggi. Kegagalan佩戴 (penggunaan) pada populasi ini menjadi *critical-to-quality* (CTQ) yang menentukan keberhasilan intervensi. Lebih lanjut, paper Chen, Zhao, dan Zhang (2025) dalam *Drones* [DOI: 10.3390/drones9110808] memperkuat landasan kuantitatif melalui eksperimen lintas-subjek pada operator UAV yang menunjukkan bahwa *brain functional connectivity network* (BFCN) berbasis EEG menghasilkan robustitas lebih baik dibandingkan penggunaan sinyal EEG mentah—pelajaran metodologis yang dapat diadaptasi untuk konteks ASD di mana variabilitas antar-individu sangat tinggi.

Konteks industri wearable medis global diproyeksikan mencapai USD 196,6 miliar pada tahun 2030 (CAGR ≈13,2%), dengan driver utama berupa *remote patient monitoring* dan *digital therapeutics*. Peluang rekayasa industri pada domain spesifik ASD terletak pada perancangan sistem wearable yang memenuhi tiga约束 (constraint) simultan: (1) akurasi fisiologis tinggi, (2) toleransi ergonomis untuk *sensory profile* individu ASD, dan (3) interoperabilitas dengan platform caregiver. Ketiga约束 ini membentuk *design specification matrix* yang harus diselesaikan melalui pendekatan multidisiplin yang memadukan ergonomi, sensor engineering, dan rekayasa kualitas.

## 2. Landasan Teori & Formulasi Matematis

Kerangka kuantitatif untuk deteksi stres pada individu ASD mengandalkan ekstraksi fitur dari beberapa modalitas sinyal fisiologis. Untuk sinyal EDA, parameter *Skin Conductance Level* (SCL) dan *Skin Conductance Response* (SCR) diekstrak dengan dekomposisi tonik-fasik menggunakan model *cvxEDA* atau *Ledalab*. Hubungan antara tingkat stres dan amplitudo SCR dapat diformulasikan sebagai berikut:

$$SCR_{amp}(t) = A \cdot e^{-\frac{(t-t_0)}{\tau_1}} - B \cdot e^{-\frac{(t-t_0)}{\tau_2}}$$

dengan $A$ adalah amplitudo puncak (μS), $t_0$ waktu onset stimulus, $\tau_1$ dan $\tau_2$ konstanta waktu naik dan turun, serta $B$ parameter offset. Untuk HRV, metrik domain waktu yang banyak digunakan adalah *Root Mean Square of Successive Differences* (RMSSD):

$$RMSSD = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N-1}(RR_{i+1} - RR_i)^2}$$

serta *Standard Deviation of NN intervals* (SDNN):

$$SDNN = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N}(RR_i - \overline{RR})^2}$$

dengan $RR_i$ adalah interval antar-detak (ms) dan $\overline{RR}$ nilai rata-ratanya. Penurunan RMSSD mengindikasikan dominasi sistem saraf simpatis yang konsisten dengan respons stres.

Untuk pendekatan berbasis EEG—yang menjadi sorotan utama Chen et al. (2025)—*functional connectivity* antar-elektroda dihitung menggunakan *Phase Lag Index* (PLI) yang robust terhadap volume conduction:

$$PLI = \left| \mathbb{E}\left[ \text{sgn}\left( \Delta\phi(t) \right) \right] \right| = \left| \frac{1}{T}\sum_{t=1}^{T} \text{sgn}\left( \phi_x(t) - \phi_y(t) \right) \right|$$

dengan $\phi_x(t)$ dan $\phi_y(t)$ adalah fasa sesaat sinyal pada elektroda $x$ dan $y$. Alternatif lain yang digunakan dalam studi Chen et al. (2025) adalah *magnitude-squared coherence*:

$$C_{xy}(f) = \frac{|S_{xy}(f)|^2}{S_{xx}(f) \cdot S_{yy}(f)}$$

dengan $S_{xy}(f)$ adalah *cross-spectral density* dan $S_{xx}(f)$, $S_{yy}(f)$ adalah *auto-spectral density*. Matriks koherensi tersebut dikonstruksikan menjadi graf BFCN $\mathcal{G} = (V, E)$ dengan node $V$ merepresentasikan elektroda dan edge weight $E$ merepresentasikan kekuatan konektivitas. Fitur topologi graf seperti *node degree centrality*, *clustering coefficient*, dan *betweenness centrality* kemudian menjadi input model klasifikasi *machine learning* (SVM, Random Forest, atau Graph Convolutional Network) untuk membedakan tiga status kognitif (relaksasi, beban kerja normal, kelelahan).

Untuk aplikasi ASD, integrasi multimodal EDA + HRV + akselerometer (IMU) menghasilkan fitur gabungan $\mathbf{f} = [f_{EDA}, f_{HRV}, f_{IMU}]$ yang selanjutnya diklasifikasikan menggunakan model *ensemble*:

$$\hat{y} = \arg\max_{c \in \{0,1\}} \sum_{m=1}^{M} w_m \cdot P_m(c | \mathbf{f})$$

dengan $w_m$ adalah bobot ensemble ($\sum w_m = 1$) dan $P_m(c|\mathbf{f})$ probabilitas posterior model ke-$m$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pendekatan sistematis yang digunakan Cano et al. (2024) mengikuti protokol PRISMA 2020 dengan penyaringan bertingkat. Adaptasi SOP untuk konteks engineering didokumentasikan sebagai berikut:

**Tahap 1 — Penentuan Ruang Lingkup dan Pertanyaan Riset (RQ).** Empat RQ yang ditetapkan adalah: (RQ1) sinyal fisiologis apa yang digunakan, (RQ2) jenis wearable apa yang digunakan, (RQ3) kelayakan solusi bagi individu ASD, dan (RQ4) kesenjangan riset. Definisi operasional: "stres" mengikuti *Lazarus & Folkman* model transaksional dengan indikator fisiologis otonom.

**Tahap 2 — Strategi Pencarian Literatur.** String pencarian disusun dalam format PICO dengan *Boolean operator*: ("autism" OR "ASD" OR "Asperger") AND ("wearable" OR "biosensor") AND ("stress" OR "anxiety") AND ("EDA" OR "HRV" OR "EEG" OR "GSR"). Database yang digunakan: Scopus, PubMed, WoS, IEEE-Xplore. *Time horizon*: 2014–2024. Filter bahasa: Inggris dan Spanyol.

**Tahap 3 — Kriteria Inklusi dan Eksklusi (IC/EC).** IC: studi dengan subjek manusia usia 3–65 tahun dengan diagnosis ASD, menggunakan sensor fisiologis wearable, outcome stres atau kecemasan terukur. EC: studi tanpa data empiris, *review* non-sistematis, subjek tanpa ASD, sensor non-wearable (mis. *clinical polygraph*).

**Tahap 4 — Ekstraksi Data dan Penilaian Kualitas.** Instrumen *Quality Assessment Tool for Quantitative Studies* (Effective Public Health Practice Project) digunakan. Dua reviewer independen melakukan *screening* dengan Cohen's $\kappa$ untuk reliabilitas intersubjektif:

$$\kappa = \frac{P_o - P_e}{1 - P_e}$$

dengan target $\kappa \geq 0.75$ mengindikasikan kesepakatan substansial.

**Tahap 5 — Sintesis Naratif dan Kuantitatif.** Diagram PRISMA melaporkan 88 artikel inklusif dari total 412 hasil pencarian awal. Ekstraksi variabel: jenis sensor (EDA 42%, HRV 38%, EEG 24%, suhu 18%, multimodal 31%), lokasi佩戴 (pergelangan 56%, dada 28%, kepala 11%, lainnya 5%), dan tingkat kelayakan佩戴 dilaporkan menggunakan *wearing compliance rate* (WCR).

**Diagram Alir SOP Industri (Engineering Implementation):**

```
[Identifikasi Persona ASD] → [Pemetaan Sensory Profile (SPM/SSP)] 
    ↓
[Pemilihan Sensor (EDA/HRV/EEG/Suhu)] 
    ↓
[Prototyping Ergonomis (uji tekstil, berat, lokasi)] 
    ↓
[Validasi Akuisisi Data (signal-to-noise ratio ≥ 20 dB)]
    ↓
[Kalibrasi Algoritma Deteksi Stres (cross-validation 10-fold)]
    ↓
[Uji Kelayakan佩戴 (≥ 8 jam，连续 7 hari)]
    ↓
[Persetujuan IRB & Informed Consent] → [Rilis Produksi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebuah studi kasus fiktif berbasis data pada laporan Cano et al. (2024) dibangun untuk menilai kelayakan desain wearable multimodal bagi populasi ASD usia 6–12 tahun. Parameter desain dan kinerja diekstraksi dari subset studi inklusif.

**Parameter Input:**
- Jumlah subjek (Sampel N) = 30 anak ASD (usia rata-rata $\bar{u} = 9.4$ tahun, $\sigma_u = 1.8$)
- Jenis sensor yang dicobakan: EDA (Empatica E4), HRV (polar H10), akselerometer triaksial
- Tiga kondisi eksperimen: baseline (10 menit), stres sosial (Trier Social Stress Test–adapted, 15 menit), recovery (10 menit)

**Langkah 1 — Perhitungan SCR Puncak Rata-rata.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
