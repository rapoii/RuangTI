# 2072 — Sistem Augmented Reality Wearable Real-Time untuk Visi Egocentric pada Edge Computing

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A real-time wearable AR system for egocentric vision on the edge
**Jurnal & Sitasi Utama:** Iason Karakostas, Aikaterini Valakou, Despoina Gavgiotaki (2024). *Virtual Reality*. DOI: [https://doi.org/10.1007/s10055-023-00937-2](https://doi.org/10.1007/s10055-023-00937-2)
**Sitasi Pendukung:** Iason Karakostas, Aikaterini Valakou, Despoina Gavgiotaki (2024). *Virtual Reality*. DOI: [https://doi.org/10.1007/s10055-023-00937-2](https://doi.org/10.1007/s10055-023-00937-2)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma Industri 4.0 menuju Industri 5.0 menempatkan kolaborasi manusia-mesin sebagai pilar utama produktivitas, di mana sistem *Augmented Reality* (AR) wearable menjadi antarmuka krusial antara operator dan ekosistem siber-fisik (cyber-physical system). Dalam konteks operasional lantai pabrik, teknisi lini perakitan, auditor mutu, maupun operator logistik memerlukan akses informasi kontekstual secara *real-time* tanpa打断 alur kerja fisik mereka. Keterlambatan rendering sebesar 100 milidetik saja sudah cukup untuk menurunkan *situational awareness* dan meningkatkan *cognitive load* operator hingga 30%, sehingga parameter latensi menjadi *Key Performance Indicator* (KPI) utama dalam desain sistem AR industri (Karakostas, Valakou, & Gavgiotaki, 2024).

Penelitian yang dipublikasikan dalam jurnal *Virtual Reality* edisi 2024 oleh Karakostas *et al.* memperkenalkan sistem **DARLENE** (Deep AR Learning for Egocentric Navigation and Execution) sebagai arsitektur AR wearable yang memindahkan beban komputasi berat ke *edge node* portabel. Sistem ini terdiri atas dua subsistem terintegrasi: (i) kacamata AR dengan kamera *egocentric* beresolusi tinggi, dan (ii) *wearable computing node* berbasis akselerator neuromorfik/GPU hemat daya. Modul-modul *computer vision* yang dikembangkan di dalamnya mencakup *instance segmentation*, *object tracking*, dan *pose estimation* untuk mendukung analisis adegan dinamis pada sumber daya komputasi yang terbatas. Pilihan arsitektur ini didorong oleh tiga urgensi industri: pertama, kebutuhan akan *motion-to-photon latency* di bawah 20 ms agar konten virtual tidak terasa *decoupled* dari dunia fisik; kedua, kendala *form factor* yang melarang penggunaan GPU desktop; dan ketiga, tuntutan *privacy-by-design* karena data visual seringkali meninggalkan fasilitas manufaktur (Karakostas *et al.*, 2024).

Dari sisi ekonomi, pasar *Enterprise AR* diproyeksikan mencapai USD 95,7 miliar pada tahun 2030 dengan CAGR 31,5%, didorong oleh adopsi di sektor manufaktur, perawatan pesawat, dan operasi gudang. Studi-studi awal menunjukkan *return on investment* (ROI) positif dalam 12-18 bulan melalui pengurangan *mean time to repair* (MTTR) sebesar 40-60%. Namun, adopsi массовaya terhambat oleh dua hambatan struktural: (1) keterbatasan daya baterai pada perangkat wearable yang umumnya hanya mampu menyuplai 5-15 Watt kontinu, dan (2) *trade-off* antara akurasi algoritma *deep learning* modern dengan kebutuhan *real-time inference*. Riset DARLENE menjawab hambatan ini dengan adaptasi algoritmik konkret seperti pruning, quantization, dan *temporal coherence exploitation* yang memungkinkan model berat seperti Mask R-CNN dijalankan pada *edge device* tanpa mengorbankan laju frame yang dibutuhkan (Karakostas, Valakou, & Gavgiotaki, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis sistem AR wearable real-time dapat diformulasikan melalui beberapa model matematis yang saling terkait. Pertama, **Motion-to-Photon Latency (MTP)** yang merepresentasikan total delay dari peristiwa dunia nyata hingga render piksel pada layar kacamata:

$$\text{MTP} = t_{\text{sense}} + t_{\text{process}} + t_{\text{transmit}} + t_{\text{render}} + t_{\text{display}}$$

di mana $t_{\text{sense}}$ adalah waktu akuisisi sensor (umumnya 8,3-16,6 ms pada 60-120 FPS), $t_{\text{process}}$ adalah latensi inferensi neural network, $t_{\text{transmit}}$ adalah propagasi data, $t_{\text{render}}$ adalah rasterisasi konten virtual, dan $t_{\text{display}}$ adalah *pixel response time*. Untuk *immersive comfort*, total MTP harus memenuhi $\text{MTP} \leq 20\text{ ms}$ (Karakostas *et al.*, 2024).

Kedua, **Intersection over Union (IoU)** sebagai metrik akurasi segmentasi:

$$\text{IoU} = \frac{|P \cap G|}{|P \cup G|} = \frac{\text{TP}}{\text{TP} + \text{FP} + \text{FN}}$$

dengan $P$ adalah prediksi piksel dan $G$ adalah *ground truth*. Untuk *instance segmentation* pada lingkungan dinamis, threshold $\text{IoU} \geq 0{,}5$ umumnya diterima sebagai *correct detection*, dan *mean Average Precision* (mAP) dihitung sebagai:

$$\text{mAP} = \frac{1}{N_{\text{classes}}} \sum_{c=1}^{N} \text{AP}_c$$

Ketiga, **Throughput Inference** dibatasi oleh *FLOPS* dan paralelisme *edge device*. Untuk model dengan total $F$ FLOPs dan kapasitas perangkat $C_{\text{FLOPs}}$ (FLOPs/detik):

$$\text{FPS}_{\text{net}} = \frac{C_{\text{FLOPs}}}{F \cdot \rho_{\text{overhead}}}$$

dengan $\rho_{\text{overhead}} \geq 1$ merepresentasikan overhead memori dan I/O. Keempat, **Model Energi**:

$$E = \int_0^T P(t)\, dt = P_{\text{idle}} \cdot T + P_{\text{compute}} \cdot t_{\text{active}}$$

Pada baterai lithium 18650 3,4 Ah @ 3,7 V (= 12,6 Wh), dengan asumsi $P_{\text{idle}} = 0{,}8\text{ W}$ dan $P_{\text{compute}} = 8\text{ W}$, masa pakai $T_{\text{battery}}$ menjadi variabel keputusan yang akan kita hitung di bagian studi kasus.

Untuk modul *pose estimation*, estimasi sendi manusia mengikuti model *regression*:

$$\hat{\theta}_k = f_{\text{pose}}(I; W), \quad k \in \{1, \ldots, K\}$$

dengan $I$ adalah *image tensor*, $W$ adalah parameter bobot jaringan, dan $K$ adalah jumlah sendi. *Loss function* yang umum digunakan adalah *OKS-based loss* (Object Keypoint Similarity):

$$\text{OKS} = \frac{\sum_i \exp\left(-d_i^2 / (2 s^2 k_i^2)\right) \delta(v_i > 0)}{\sum_i \delta(v_i > 0)}$$

dengan $d_i$ jarak Euclidean prediksi–*ground truth*, $s$ adalah *scale*, dan $k_i$ adalah konstanta *per-keypoint*. Terakhir, **kapasitas edge node** mengikuti hukum Amdahl untuk paralelisme:

$$S_{\text{speedup}}(p) = \frac{1}{(1 - \alpha) + \alpha / p}$$

di mana $\alpha$ adalah fraksi paralel dari workload. Model-model ini menjadi dasar optimasi algoritmik yang diusulkan Karakostas *et al.* (2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem AR wearable real-time mengikuti **SOP 2072-AR/Edge** yang terdiri atas tujuh fase rekayasa:

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 1: Analisis Kebutuhan → Use Case Definition              │
│  FASE 2: Seleksi Hardware → Edge Node + AR Glasses             │
│  FASE 3: Akuisisi & Anotasi Dataset Egocentric                 │
│  FASE 4: Adaptasi Algoritmik (Pruning/Quantization/Tracking)    │
│  FASE 5: Integrasi Pipeline (Capture→Inference→Render→Display)  │
│  FASE 6: Validasi Kuantitatif (Latency/Accuracy/Power)          │
│  FASE 7: Deployment & Continuous Monitoring                     │
└─────────────────────────────────────────────────────────────────┘
```

**Fase 1 – Analisis Kebutuhan.** Mengacu pada ISO 9241-210 untuk *human-centred design*, dilakukan pemetaan *task flow* operator, identifikasi *pain points*, dan penentuan target KPI (latensi, akurasi, masa pakai baterai). Karakostas *et al.* (2024) menekankan bahwa pada *use case* navigasi dan eksekusi tugas egocentric, *target latency* berada pada 50-100 ms dengan akurasi segmentasi mAP≥0,45.

**Fase 2 – Seleksi Hardware.** DARLENE memilih *wearable computing node* berbasis NVIDIA Jetson Orin Nano (67 TOPS INT8, daya 7-15 W) dan kacamata AR dengan dua kamera *stereo* (resolusi 1280×960, 90 Hz) + satu kamera RGB *world-facing*. Koneksi internal menggunakan USB-C 3.2 Gen 2 dengan throughput 10 Gbps.

**Fase 3 – Akuisisi Dataset.** Karena domain manufaktur memiliki *class distribution* yang sangat *long-tailed*, diperlukan strategi *data augmentation* (random crop, color jitter, motion blur) dan *synthetic-to-real domain transfer* menggunakan *domain randomization*.

**Fase 4 – Adaptasi Algoritmik.** Ini adalah kontribusi inti paper (Karakostas, Valakou, & Gavgiotaki, 2024):
- **Backbone Pruning:** Layer pruning 40% dengan *Lottery Ticket Hypothesis* mempertahankan akurasi dalam 2% dari baseline.
- **INT8 Quantization:** Konversi FP32→INT8 dengan *post-training calibration* menggunakan 500 sampel representatif.
- **Temporal Coherence Exploitation:** Penggunaan *optical flow* untuk propagasi *bounding box* antar frame, sehingga inferensi *detection* hanya dilakukan tiap 3-5 frame.
- **Adaptive Resolution:** Resolusi input diturunkan dari 1280×960 ke 640×480 saat *motion energy* melebihi threshold, untuk menjaga *frame budget*.

**Fase 5 – Integrasi Pipeline.** Arsitektur *software* mengikuti *microservices* pada ROS 2 Humble dengan node-node sebagai berikut:

```
[Camera Driver] → [Pre-process Node] → [Inference Node (TensorRT)]
        → [Tracker Node (ByteTrack)] → [Renderer (OpenGL ES)]
        → [Display Compositor] → [AR Glasses]
```

Setiap node mengimplementasikan *Quality of Service* (QoS) yang berbeda — *sensor data* menggunakan BEST_EFFORT, sedangkan *pose estimation* menggunakan RELIABLE untuk menjamin konsistensi.

**Fase 6 – Validasi.** Pengujian dilakukan pada tiga skenario: *static scene*, *dynamic scene* (1-3 objek bergerak), dan *crowded scene* (≥5 objek). Metrik yang dicatat: end-to-end latency (ms), mAP@0.5, *tracking ID switches*, dan *power draw* (W).

**Fase 7 – Deployment & Monitoring.** Implementasi *OTA (Over-The-Air) update*, *telemetry logging*, dan *A/B testing* dengan kelompok kontrol operator yang tidak menggunakan AR. SOP ini menjamin *repeatability* dan *traceability* sesuai persyaratan IEC 62443 untuk keamanan siber pada *industrial IoT*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik perakitan elektronik di Batam yang menerapkan sistem DARLENE untuk membantu operator *pick-and-place* komponen SMD dengan 12 workstation aktif secara paralel.

**Parameter Input Industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Target throughput workstation | 60 | komponen/menit |
| Durasi shift | 8 | jam |
| Jumlah operator | 12 | orang |
| Resolusi kamera | 1280 × 960 | piksel |
| Target frame rate | 30 | FPS |
| Daya baterai edge node | 12,6 | Wh |
| Target mAP@0.5 | 0,45 | – |
| Toleransi latensi | ≤100 | ms |

**Langkah 1: Perhitungan Frame Budget.**

Untuk menjamin kelancaran visual, *frame budget* harus $\Delta t_{\text{frame}} = 1/30 \approx 33{,}3\text{ ms}$. Total MTP target 100 ms memberikan *headroom* proses 100 − 33,3 − 8,3 (sensor) − 5 (display) = **53,4 ms** untuk inferensi + transmisi + render.

**Langkah 2: Perhitungan FLOPs Model Setelah Pruning.**

Baseline Mask R-CNN dengan ResNet-50 memiliki $F_{\text{base}} = 320$ GFLOPs per gambar. Setelah pruning 40% dan input resize ke 640×480 (faktor 1/4 dari area):

$$F_{\text{pruned}} = 0{,}60 \times 320 \times \frac{1}{4} = 48\text{ GFLOPs}$$

Dengan INT8 quantization, *throughput* efektif di Jetson Orin Nano $C_{\text{FLOPs}} = 67$ TOPS:

$$\text{FPS}_{\text{net}} = \frac{67 \times 10^{12}}{48 \times 10^9 \times 1{,}15} = \frac{67}{55{,}2} \approx 1{,}21\text{ inferensi per detik}$$

**Langkah 3: Eksploitasi Koherensi Temporal.**

Karena frame rate 30 FPS, dengan *temporal propagation* setiap 4 frame:

$$\text{FPS}_{\text{detection}} = \frac{30}{4} = 7{,}5\text{ Hz}$$

Tracker ByteTrack membutuhkan $\sim 5$ ms per frame, sehingga total pipeline per frame:

$$t_{\text{process}} = \frac{1000}{7{,}5} + 5 = 133{,}3 + 5 = 138{,}3\text{ ms (per deteksi)}$$

Rata-rata per frame:

$$\
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
