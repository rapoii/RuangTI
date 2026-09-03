# 1416 — Neuroergonomi Kognitif dalam Rekayasa Perangkat Lunak: EEG & fMRI sebagai Ground Truth untuk Penilaian Cognitive State Programmer serta Integrasi Machine Learning untuk Human Status Detection

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EEG as a potential ground truth for the assessment of cognitive state in software development activities: A multimodal imaging study
**Jurnal & Sitasi Utama:** Júlio Medeiros, Marco Simões, João Castelhano (2024). *PLoS ONE*. DOI: [https://doi.org/10.1371/journal.pone.0299108](https://doi.org/10.1371/journal.pone.0299108)
**Sitasi Pendukung:** Suman Kalyan Sardar, Naveen Kumar, Seul Chan Lee (2022). *IEEE Access*. DOI: [https://doi.org/10.1109/access.2022.3190967](https://doi.org/10.1109/access.2022.3190967)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengembangan perangkat lunak global menanggung kerugian ekonomi monumental akibat *cognitive human error* — kesalahan yang bersumber dari keterbatasan kognitif manusiawi seperti *mental overload*, *attention slips*, dan *working memory overload*. Medeiros, Simões, dan Castelhano (2024) dalam PLoS ONE (DOI: 10.1371/journal.pone.0299108) menguantifikasi bahwa faktor kognitif ini merupakan kontributor dominan terhadap *software defects*, dengan estimasi biaya global akibat *software bugs* mencapai triliunan dolar per tahun, setara dengan 0,5–1% PDB dunia menurut laporan NIST dan Consortium for IT Software Quality.

Dalam konteks Teknik Industri, masalah ini bukan sekadar isu psikologi kerja, melainkan *bottleneck* sistemik pada rantai pasok digital. Programmer modern beroperasi sebagai *cognitive worker* dengan paparan terhadap *interruption cost* rata-rata 23 menit per gangguan (resynchronization lag menurut Mark et al.), menurunkan throughput produksi kode hingga 40%. Untuk itulah, urgensi pengembangan **Cognitive State Assessment (CSA)** menjadi nyata: dibutuhkan *surrogate measurement* non-invasif yang dapat dideploy di lantai produksi *software house* tanpa menghentikan alur kerja, namun tetap memiliki validitas referensi (*ground truth*) yang setara dengan modalitas neuroimaging berat seperti fMRI.

Penelitian Medeiros dkk. (2024) menjawab tantangan ini dengan mengusulkan **EEG sebagai ground truth potensial** untuk menggantikan fMRI dalam pengukuran cognitive state programmer, melalui studi multimodal yang membandingkan biomarker EEG (*theta, alpha, beta band*) dengan sinyal BOLD fMRI. Pendekatan ini revolusioner karena EEG memiliki portabilitas tinggi (wearable devices seperti Emotiv EPOC, OpenBCI) dengan *temporal resolution* milidetik, berlawanan dengan fMRI yang bersifat *stationary*, mahal (USD 1–3 juta per unit), dan memiliki *temporal resolution* terbatas (~6 detik karena Hemodynamic Response Function).

Di sisi komplementer, Sardar, Kumar, dan Lee (2022) dalam *IEEE Access* (DOI: 10.1109/access.2022.3190967) melakukan Systematic Literature Review (SLR) berbasis protokol PRISMA terhadap 76 artikel yang membahas algoritma *Machine Learning* (ML) untuk Human Status Detection (HSD). Mereka menemukan bahwa SVM, Random Forest, dan Deep Learning menjadi tulang punggung klasifikasi status kognitif dengan akurasi 75–95%, menjadikan integrasi EEG-ML sebagai *value stream* kritis dalam *human factors engineering* modern.

Sintesis kedua paper ini menghasilkan kerangka *Neuroergonomi Kognitif Terapan* — sebuah domain Teknik Industri yang menjembatani neuroscience, *human-computer interaction*, dan *lean production* untuk optimasi kapasitas intelektual pekerja pengetahuan (*knowledge workers*).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Hemodinamik fMRI sebagai Referensi

Sinyal fMRI berbasis Blood-Oxygen-Level-Dependent (BOLD) dimodelkan melalui *Canonical Hemodynamic Response Function* (cHRF) menggunakan *double-gamma function*:

$$h(t) = \left(\frac{t^{\alpha_1-1}\beta_1^{\alpha_1}e^{-\beta_1 t}}{\Gamma(\alpha_1)} - c \cdot \frac{t^{\alpha_2-1}\beta_2^{\alpha_2}e^{-\beta_2 t}}{\Gamma(\alpha_2)}\right)$$

di mana $\alpha_1 = 6, \beta_1 = 1, \alpha_2 = 16, \beta_2 = 1, c = 1/6$ adalah parameter standar (SPM). Sinyal BOLD yang terukur merupakan konvolusi stimulus neural $s(t)$ dengan cHRF:

$$y_{BOLD}(t) = (s * h)(t) + \epsilon(t)$$

dengan $\epsilon(t) \sim \mathcal{N}(0, \sigma^2)$ sebagai noise Gaussian.

### 2.2 Power Spectral Density (PSD) EEG

Untuk ekstraksi biomarker kognitif dari EEG, digunakan *Welch's method* dengan PSD diestimasi sebagai:

$$\hat{P}_x(f) = \frac{1}{K \cdot U} \sum_{k=1}^{K} \left| X_k(f) \right|^2$$

di mana $X_k(f)$ adalah FFT dari segmen ke-$k$, $U$ adalah *normalization factor* window, dan $K$ adalah jumlah segmen. Band frekuensi yang diekstrak (Medeiros dkk., 2024):

- **Theta (4–8 Hz):** Indikator *working memory load*
- **Alpha (8–13 Hz):** Indikator *attention & inhibition*
- **Beta (13–30 Hz):** Indikator *mental engagement*
- **Gamma (30–100 Hz):** Indikator *feature binding*

Rasio kognitif klasik (*Engagement Index*):

$$EI = \frac{P_{\beta}}{P_{\alpha} + P_{\theta}}$$

### 2.3 Similarity Analysis EEG-fMRI

Medeiros dkk. (2024) mengukur kesamaan temporal antara biomarker EEG dan sinyal BOLD melalui *Pearson correlation coefficient* dengan *time-lag optimization*:

$$r(\tau) = \frac{\sum_{t=1}^{N}(x(t-\tau) - \bar{x})(y(t) - \bar{y})}{\sqrt{\sum_{t=1}^{N}(x(t-\tau) - \bar{x})^2 \sum_{t=1}^{N}(y(t) - \bar{y})^2}}$$

di mana $\tau$ adalah *hemodynamic delay* yang dioptimasi (umumnya 4–8 detik). Biomarker EEG terbaik adalah *peak alpha frequency* (PAF) yang menunjukkan korelasi tertinggi $r > 0.6$ dengan aktivasi prefrontal cortex fMRI.

### 2.4 Machine Learning untuk Human Status Detection

Berdasarkan SLR Sardar dkk. (2022), untuk klasifikasi status kognitif digunakan Support Vector Machine (SVM) dengan kernel RBF:

$$f(\mathbf{x}) = \sum_{i=1}^{N_s} \alpha_i y_i K(\mathbf{x}_i, \mathbf{x}) + b$$

dengan kernel:

$$K(\mathbf{x}_i, \mathbf{x}_j) = \exp\left(-\gamma \|\mathbf{x}_i - \mathbf{x}_j\|^2\right)$$

dan metrik evaluasi *balanced accuracy*:

$$BA = \frac{1}{C}\sum_{c=1}^{C} \frac{TP_c}{TP_c + FN_c}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Multimodal Imaging untuk Industri

```
┌──────────────────────────────────────────────────────────────┐
│           ALUR SOP COGNITIVE STATE ASSESSMENT                │
├──────────────────────────────────────────────────────────────┤
│ 1. KALIBRASI LINGKUNGAN (T-30 menit)                        │
│    - Pencahayaan 500 lux, suhu 22±2°C                       │
│    - Impedansi elektroda EEG < 5 kΩ                         │
│    - Baseline resting-state 2 menit                         │
├──────────────────────────────────────────────────────────────┤
│ 2. EKSEKUSI TUGAS PEMROGRAMAN (T+0 sampai T+30 menit)       │
│    - Code comprehension task (bug detection)                 │
│    - Code synthesis task (algoritma baru)                    │
│    - Concurrent EEG-fMRI recording                          │
├──────────────────────────────────────────────────────────────┤
│ 3. PREPROCESSING (offline)                                  │
│    - EEG: ICA (Independent Component Analysis)              │
│    - fMRI: motion correction, spatial smoothing FWHM=6mm    │
│    - Artifact rejection: amplitude > 100 µV                 │
├──────────────────────────────────────────────────────────────┤
│ 4. FEATURE EXTRACTION & CLASSIFICATION                      │
│    - PSD per band, time-lag optimization                    │
│    - SVM/RF classifier → label cognitive state              │
├──────────────────────────────────────────────────────────────┤
│ 5. FEEDBACK LOOP KE MANAJEREN PRODUKSI                      │
│    - Dashboard real-time cognitive load                     │
│    - Rekomendasi micro-break (Pomodoro adaptif)              │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 Konfigurasi EEG Industri

Berdasarkan Medeiros dkk. (2024), konfigurasi optimal menggunakan sistem 32-channel dengan **montage 10-10 internasional**, fokus pada channel prefrontal (Fp1, Fp2, AF3, AF4) dan parietal (P3, P4, Pz, POz) yang terbukti paling robust untuk task software development. Sampling rate minimum 256 Hz (sesuai standar IFCN — International Federation of Clinical Neurophysiology).

### 3.3 Integrasi dengan ML Pipeline (Sardar dkk., 2022)

Workflow ML mengikuti rekomendasi SLR:

1. **Data acquisition:** sinyal EEG 32-channel × 30 menit × 50 partisipan
2. **Preprocessing:** bandpass filter 0.5–50 Hz, notch filter 50/60 Hz
3. **Feature extraction:** PSD, *Hjorth parameters* (activity, mobility, complexity)
4. **Train/test split:** 80/20 stratified
5. **Cross-validation:** 10-fold
6. **Model deployment:** Edge AI pada wearable (TensorFlow Lite)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Software House dengan 50 Programmer

Misalkan PT. KodeNusantara memiliki 50 programmer senior, jam kerja 8 jam/hari, dengan produktivitas baseline 200 LOC (Lines of Code) per hari. Manajemen ingin menurunkan *defect rate* dari 8% menjadi 3% dengan mengimplementasikan CSA berbasis EEG.

### 4.2 Perhitungan Engagement Index Real-Time

Dari data EEG seorang programmer selama sesi *code review* (5 menit = 300 detik @ 256 Hz, total $N = 76{,}800$ sampel), dihitung PSD menggunakan Welch dengan window 4 detik (1024 sampel) dan overlap 50%:

$$K = \frac{N - L}{L/2} = \frac{76{,}800 - 1024}{512} \approx 148 \text{ segmen}$$

Hasil ekstraksi band power dari frontopolar channel Fp1:

| Band | Frekuensi (Hz) | Power (µV²/Hz) |
|------|----------------|----------------|
| Theta | 4–8 | $P_\theta = 8.42$ |
| Alpha | 8–13 | $P_\alpha = 12.15$ |
| Beta | 13–30 | $P_\beta = 6.78$ |

Engagement Index:
$$EI = \frac{P_\beta}{P_\alpha + P_\theta} = \frac{6.78}{12.15 + 8.42} = \frac{6.78}{20.57} \approx 0.330$$

Interpretasi: $EI < 0.4$ mengindikasikan *under-engagement* / kebosanan, sehingga sistem memicu *alert* kepada supervisor untuk memberikan *challenging task* baru (sesuai rekomendasi Medeiros dkk., 2024, bahwa $EI$ programmer optimal berada pada rentang 0.5–0.7 saat *deep work*).

### 4.3 Optimasi Hemodynamic Delay

Menghitung korelasi Pearson antara alpha power time series EEG (downsampled ke 1 Hz) dan sinyal BOLD dari ROI prefrontal cortex fMRI dengan lag sweep $\tau \in \{0, 2, 4, 6, 8\}$ detik:

$$r(\tau=6) = 0.67, \quad r(\tau=4) = 0.61, \quad r(\tau=8) = 0.58$$

*Optimal hemodynamic delay* adalah **6 detik**, sesuai dengan literatur canonical HRF (~6 detik peak). Ini menunjukkan bahwa EEG alpha power pada Fp1 adalah *surrogate* valid untuk aktivasi prefrontal fMRI.

### 4.4 Perhitungan Dampak Ekonomi (ROI)

Dengan asumsi:
- *Defect rate* sebelum CSA: 8% (40 bugs per 500 LOC harian tim)
- *Defect rate* setelah CSA (berdasarkan perbaikan EI 25%): 3% (15 bugs)
- *Cost per bug* (rata-rata industri): USD 350 (menurut IBM Systems Sciences Institute, dengan weighting faktor)
- Tim 50 programmer × 200 LOC × 250 hari kerja = 2,500,000 LOC/tahun

**Penghematan tahunan:**

$$\Delta\text{Bugs} = (0.08 - 0.03) \times \frac{2{,}500{,}000}{10} = 12{,}500 \text{ bugs/tahun}$$

(asumsi 10 LOC per bug density)

$$\text{Savings} =