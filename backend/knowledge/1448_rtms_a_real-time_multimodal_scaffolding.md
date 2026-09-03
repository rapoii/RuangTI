# 1448 — Sistem Scaffolding Multimodal Real-Time untuk Optimasi Debugging dan Manajemen Beban Kognitif: Kerangka Ergonomi Kognitif Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** RTMS: A Real-Time Multimodal Scaffolding System for Improving Debugging in Computing Education
**Jurnal & Sitasi Utama:** Anahita Golrang, Kshitij Sharma (2026). *arXiv (Cornell University)*. DOI: [https://openalex.org/W7160670761](https://openalex.org/W7160670761)
**Sitasi Pendukung:** Anahita Golrang, Kshitij Sharma (2026). *arXiv (Cornell University)*. DOI: [https://openalex.org/W7160670761](https://openalex.org/W7160670761)

---

## 1. Pendahuluan dan Konteks Industri

Industri perangkat lunak global menghadapi paradoks produktivitas yang telah lama dikenal dalam literatur Teknik Industri: sementara kapasitas komputasi meningkat secara eksponensial, *human cognitive throughput* pada aktivitas verifikasi, validasi, serta *debugging* tetap menjadi *bottleneck* dominan. Studi-studi empiris klasik memperkirakan bahwa *debugging* mengonsumsi antara 30%–50% dari total siklus pengembangan perangkat lunak, dan bagi programer pemula (novice), proporsi ini dapat melonjak hingga 70% karena inefisiensi *problem representation* dan lemahnya *metacognitive regulation*. Dalam kerangka *Industrial Engineering*, fenomena ini bukan sekadar isu pedagogi komputer, melainkan persoalan *work design*, *method engineering*, dan *human factors* yang berdampak langsung pada *throughput*, *cycle time*, dan *cost of quality* pada lini produksi perangkat lunak.

Karya Golrang dan Sharma (2026) — disitasi melalui OpenAlex dengan identifier [W7160670761](https://openalex.org/W7160670761) — mengajukan sistem RTMS (*Real-Time Multimodal Scaffolding*) yang menjawab keterbatasan instruksional ini melalui integrasi *eye-tracking* dan *heart rate variability* (HRV) sebagai sensor fisiologis pemicu *scaffolding hints* kontekstual. Urgensi praktis dari pendekatan ini bagi industri tampak pada tiga vektor: pertama, *skill gap* antara *expert* dan *novice* yang melebar di tengah transisi paradigma *cloud-native*, *AI-assisted coding*, dan *DevSecOps*; kedua, meningkatnya adopsi *remote work* yang membuat *on-site apprenticeship* sulit dilakukan sehingga diperlukan *digital coach* otomatis; ketiga, kesadaran bahwa *cognitive overload* dan *stress physiology* adalah *root cause* dari *defect injection*, *technical debt*, dan *engineer burnout* — semua merupakan *loss function* dalam *Lean Software Engineering*. Golrang dan Sharma (2026, [W7160670761](https://openalex.org/W7160670761)) secara eksplisit merumuskan masalah ini sebagai "novices often struggle to recognize impasses, regulate their problem solving, and manage cognitive load and stress", yang merupakan pernyataan langsung atas urgensi industri. Karena itu, RTMS dapat diposisikan bukan hanya sebagai *instructional technology*, melainkan sebagai *sociotechnical control system* yang menurunkan *cognitive friction* dalam rantai nilai rekayasa perangkat lunak.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis RTMS bertumpu pada tiga pilar yang dapat diformalisasikan secara kuantitatif.

### 2.1 Cognitive Load Theory (Sweller)

Total *cognitive load* dimodelkan sebagai:

$$CL_{total} = CL_{intrinsic} + CL_{extraneous} + CL_{germane}$$

di mana $CL_{intrinsic}$ melekat pada kompleksitas *program graph* yang di-*debug*, $CL_{extraneous}$ berasal dari artefak representasional (editor, *syntax highlighting*, dokumentasi), dan $CL_{germane}$ adalah sumber daya yang dicurahkan untuk *schema construction*. Sasaran RTMS adalah meminimalisir $CL_{extraneous}$ dan memfokuskan kapasitas pada $CL_{germane}$ melalui *just-in-time hints*.

### 2.2 Heart Rate Variability (HRV) sebagai *Stress Proxy*

Untuk domain waktu, *Root Mean Square of Successive Differences* didefinisikan sebagai:

$$RMSSD = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N-1}(RR_{i+1} - RR_i)^2}$$

dengan $RR_i$ adalah interval antar-detak *R-peak* ke-$i$ dalam milidetik. Penurunan RMSSD mengindikasikan aktivasi simpatik yang diasosiasikan dengan *stress*. Untuk domain frekuensi, rasio *low-frequency*/*high-frequency* diekspresikan sebagai:

$$R_{LF/HF} = \frac{\int_{0.04}^{0.15} P(f)\,df}{\int_{0.15}^{0.4} P(f)\,df}$$

di mana $P(f)$ adalah *power spectral density* dari deret RR. Ambang batas $R_{LF/HF} > \tau_{LFHF}$ atau $RMSSD < \tau_{RMSSD}$ menjadi salah satu pemicu intervensi.

### 2.3 Eye-Tracking sebagai *Cognitive Load Proxy*

Beberapa metrik yang digunakan:

$$\bar{F}_{dur} = \frac{1}{M}\sum_{j=1}^{M} F_{dur,j}, \quad \bar{D}_{pupil} = \frac{1}{M}\sum_{j=1}^{M} D_{pupil,j}$$

dengan $F_{dur,j}$ durasi *fixation* ke-$j$ (ms) dan $D_{pupil,j}$ diameter pupil ke-$j$. Peningkatan $\bar{F}_{dur}$ dan dilatasi pupil merupakan indikator klasik *cognitive effort* (Hess & Polt, atau sesuai literatur *eye-tracking* kontemporer yang dirujuk Golrang & Sharma, 2026).

### 2.4 Logika Pemicu Multimodal

Sinyal keputusan $\mathcal{D}(t)$ dimodelkan sebagai:

$$\mathcal{D}(t) = \mathbb{1}\Big[ \underbrace{(RMSSD(t) < \tau_R) \lor (R_{LF/HF}(t) > \tau_{LFHF})}_{\text{stres fisiologis}} \; \lor \; \underbrace{(\bar{F}_{dur}(t) > \tau_F) \land (\bar{D}_{pupil}(t) > \tau_D)}_{\text{beban kognitif}} \Big]$$

ketika $\mathcal{D}(t)=1$, sistem men-*deliver* *hint* kontekstual berdurasi pendek. *False positive rate* dan *false negative rate* di-tune melalui *receiver operating characteristic* (ROC) klasik.

### 2.5 Model Statistik Eksperimental

Desain *between-subjects* empat kondisi dianalisis dengan ANOVA satu-arah:

$$F = \frac{MS_{between}}{MS_{within}} = \frac{\sum_{k=1}^{K} n_k(\bar{X}_k - \bar{X}_{..})^2 / (K-1)}{\sum_{k=1}^{K}\sum_{i=1}^{n_k}(X_{ik} - \bar{X}_k)^2 / (N-K)}$$

dengan $K=4$ kondisi. Ukuran efek Cohen:

$$d = \frac{\bar{X}_{treat} - \bar{X}_{ctrl}}{s_{pooled}}, \quad s_{pooled} = \sqrt{\frac{(n_t-1)s_t^2 + (n_c-1)s_c^2}{n_t + n_c - 2}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RTMS mengikuti *pipeline* rekayasa berikut, yang dapat diadopsi dalam SOP ruang produksi perangkat lunak atau *training simulator room* pada korporasi:

1. **Akuisisi Sinyal.** Sensor *eye-tracker* (≥60 Hz) dipasang pada monitor; *wearable PPG/ECG chest-strap* meng-*sample* RR pada ≥256 Hz; keduanya di-*time-sync* melalui *Network Time Protocol* agar latensi antar-modal < 50 ms.
2. **Pra-pemrosesan.** *Bandpass filter* 0,5–40 Hz untuk sinyal EKG; *artifact rejection* berbasis *adaptive threshold*; *fixation detection* via *velocity-based identification* (I-VT) untuk *eye-tracking*.
3. **Ekstraksi Fitur.** Hitung RMSSD, $R_{LF/HF}$, $\bar{F}_{dur}$, $\bar{D}_{pupil}$ pada *sliding window* 60 detik dengan *stride* 10 detik.
4. **

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
