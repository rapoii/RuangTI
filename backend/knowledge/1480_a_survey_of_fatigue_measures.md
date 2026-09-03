# 1480 — Pemodelan Kelelahan Operator dalam Sistem Kerja Industri dan Pertahanan: Survei Multimodal, Kuantifikasi Kinerja, dan Integrasi Interaksi Suara–Kebisingan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Survei Model Pengukuran dan Pemodelan Kelelahan (Fatigue) Operator pada Sistem Kerja Berkepanjangan
**Jurnal & Sitasi Utama:** Antonio Laverghetta, Minh‐Phuong Tran, & Alec Braynen (2023). *A survey of fatigue measures and models*. **The Journal of Defense Modeling and Simulation: Applications, Methodology, Technology.** DOI: [https://doi.org/10.1177/15485129231158580](https://doi.org/10.1177/15485129231158580)
**Sitasi Pendukung:** Maximilian Rosilius, Martin Spiertz, & Benedikt Wirsing (2024). *Impact of Industrial Noise on Speech Interaction Performance and User Acceptance when Using the MS HoloLens 2*. **Multimodal Technologies and Interaction**, 8(2), 8. DOI: [https://doi.org/10.3390/mti8020008](https://doi.org/10.3390/mti8020008)

---

## 1. Pendahuluan dan Konteks Industri

Kelelahan (*fatigue*) operator merupakan salah satu variabel human factors paling kritis yang memengaruhi reliabilitas, keselamatan, dan produktivitas sistem industri modern. Laverghetta, Tran, dan Braynen (2023, DOI: [10.1177/15485129231158580](https://doi.org/10.1177/15485129231158580)) secara eksplisit menyatakan bahwa pada periode operasional yang panjang dan penuh tekanan—seperti yang dialami oleh personel militer—kelelahan menjadi ancaman utama terhadap *performance*. Lebih lanjut, mereka menegaskan bahwa "current literature supports the view that behavioral, physiological, and cognitive factors are all predictive of the level of fatigue in individuals" (Laverghetta et al., 2023). Survei mereka mengisi kekosongan literatur dengan menyediakan kerangka komprehensif untuk mengukur dan memodelkan kelelahan secara komputasional, sehingga para perekayasa sistem dapat memilih model yang paling sesuai untuk skenario operasional tertentu.

Dalam konteks Teknik Industri, signifikansi topik ini tidak terbatas pada domain pertahanan. Industri manufaktur, pertambangan, minyak & gas, transportasi, dan operator *control room* menghadapi permasalahan serupa: shift kerja panjang, paparan kebisingan kronis, beban kognitif tinggi, dan sistem interaksi manusia–mesin yang semakin kompleks. Survei terbaru oleh Rosilius, Spiertz, dan Wirsing (2024, DOI: [10.3390/mti8020008](https://doi.org/10.3390/mti8020008)) memberikan bukti empiris bahwa kebisingan industri secara langsung menurunkan kinerja interaksi suara (*Automatic Speech Recognition*, ASR) pada *Head-Mounted Display* (HMD) seperti Microsoft HoloLens 2. Studi mereka (n = 22) menemukan bahwa *Word Error Rate* (WER) meningkat signifikan sebagai fungsi *sound pressure level* (SPL) kebisingan, dan *user acceptance* menurun ketika performa ASR menurun. Fenomena ini secara tidak langsung memperparah kelelahan kognitif operator karena *cognitive compensation* yang harus dikeluarkan untuk mengoreksi kesalahan input suara.

Secara ekonomis, International Labour Organization (ILO) memperkirakan kerugian global akibat kelelahan dan *work-related stress* mencapai 4% PDB dunia per tahun. Dalam industri berisiko tinggi (*high-reliability organizations*), satu insiden akibat human error yang dipicu kelelahan dapat menimbulkan kerugian finansial, hukum, dan reputasi yang bersifat katastrofik. Oleh karena itu, integrasi model kelelahan multimodal ke dalam desain sistem kerja dan SOP operasional menjadi kebutuhan strategis, bukan sekadar pilihan.

## 2. Landasan Teori & Formulasi Matematis

Laverghetta et al. (2023) mengategorikan ukuran kelelahan ke dalam tiga modalitas utama: **behavioral** (misalnya waktu reaksi, *lapse rate*, kelicinan motorik), **physiological** (misalnya Heart Rate Variability/HRV, *pupillometry*, EEG, *skin conductance*), dan **cognitive/psychological** (misalnya *subjective scales* seperti Karolinska Sleepiness Scale/KSS dan Borg CR-10). Setiap modalitas memiliki model matematis yang dapat diintegrasikan ke dalam kerangka simulasi operator.

### 2.1 Model Skala Subjektif (Psychometric Mapping)

Skala Borg CR-10 memetakan persepsi subjektif kelelahan ke skor numerik diskrit $R \in \{0, 0.5, 1, \ldots, 10\}$. Pemetaan ke variabel laten kontinu $F_{latent}$ dapat dilakukan melalui fungsi logistik:

$$F_{latent} = \frac{L}{1 + e^{-k(R - R_0)}}$$

dengan $L$ adalah *ceiling* kelelahan (umumnya $L = 10$), $k$ adalah parameter kemiringan, dan $R_0$ adalah *midpoint* psikometrik.

### 2.2 Model Reaksi Psikomotor (Psychomotor Vigilance Test)

PVT adalah standar emas untuk mengukur *vigilance lapse*. Distribusi waktu reaksi $RT$ mengikuti *ex-Gaussian distribution*:

$$f_{RT}(t) = \frac{1}{\tau} e^{\left(\frac{\mu - t}{\tau} + \frac{\sigma^2}{2\tau^2}\right)} \Phi\!\left(\frac{t - \mu - \frac{\sigma^2}{\tau}}{\sigma}\right)$$

dengan $\mu$ adalah *mean* komponen Gaussian, $\sigma$ adalah simpangan baku, dan $\tau$ adalah parameter *exponential tail*. Peningkatan $\tau$ secara konsisten diasosiasikan dengan akumulasi kelelahan.

### 2.3 Model HRV (Physiological Index)

Aktivitas sistem saraf otonom diukur melalui *Root Mean Square of Successive Differences* (RMSSD) dan rasio Low Frequency/High Frequency (LF/HF):

$$RMSSD = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N-1}(RR_{i+1} - RR_i)^2}$$

$$\text{Rasio } \frac{LF}{HF} = \frac{\int_{0.04}^{0.15} P(f)\,df}{\int_{0.15}^{0.40} P(f)\,df}$$

Peningkatan dominasi simpatik (rasio LF/HF naik, RMSSD turun) mengindikasikan *vigilance fatigue* dan *cognitive overload*.

### 2.4 Model Kinerja vs Arousal (Yerkes–Dodson)

Kinerja $P$ sebagai fungsi arousal $A$ mengikuti bentuk kurva invers-U:

$$P(A) = P_{max} \cdot e^{-k_1 (A - A_{opt})^2}$$

dengan $A_{opt}$ adalah tingkat arousal optimal dan $P_{max}$ kinerja puncak. Kelelahan kronis menurunkan $A_{opt}$ dan menyempitkan bandwidth kerja.

### 2.5 Model Dampak Kebisingan pada ASR

Berdasarkan Rosilius et al. (2024), hubungan antara SPL kebisingan $\beta$ (dB) dan WER pada HoloLens 2 dapat dimodelkan secara linier dalam skala logaritmik:

$$WER(\beta) = WER_0 + \alpha \cdot (\beta - \beta_{ref})$$

dengan $WER_0$ adalah *baseline* pada tingkat referensi $\beta_{ref}$ (misalnya 50 dB), dan $\alpha$ adalah koefisien sensitivitas yang merepresentasikan *degradation rate* per dB. Penurunan *user acceptance* $A_{user}$ mengikuti:

$$A_{user} = A_{max} - \gamma \cdot WER(\beta)$$

### 2.6 Model Integrasi Multimodal (Fusion)

Laverghetta et al. (2023) merekomendasikan *late-fusion weighted ensemble* untuk menggabungkan ketiga modalitas:

$$F_{total} = w_b F_{behavioral} + w_p F_{physiological} + w_c F_{cognitive}$$

dengan $\sum w_i = 1$ dan bobot ditentukan melalui optimasi ROC pada dataset kalibrasi.

## 3. Metodologi Rekayasa & SOP Integrasi Model Kelelahan

Implementasi sistematis model kelelahan dalam rantai nilai industri mengikuti alur lima tahap berikut:

**Tahap 1 — Pemetaan Risiko & Konteks Operasional.** Identifikasi *fatigue-critical tasks* (misalnya monitoring DCS di kilang, operasi alat berat malam hari, kontrol ATC). Tetapkan *fatigue risk threshold* $\tau_F$ berdasarkan standar regulator (ICAO Annex 11 untuk pelayan penerbangan, API RP 755 untuk shift industri migas).

**Tahap 2 — Akuisisi Data Multimodal.** Lakukan instrumentasi operator secara non-intrusif: *wearable* (jam pintar untuk HRV, akselerometer untuk kantuk), *eye-tracker*/pupillometer untuk ukuran *pupil dilation* sebagai proksi *cognitive load*, dan *PVT* mikro (3–5 menit) yang disisipkan dalam shift.

**Tahap 3 — Kalibrasi Model.** Bangun dataset kalibrasi per-individu menggunakan *subjective ground truth* (KSS, Borg CR-10). Latih bobot $w_b, w_p, w_c$ menggunakan regresi logistik atau *gradient boosting*.

**Tahap 4 — Integrasi dengan Sistem Interaksi Suara di Lingkungan Bising.** Khusus untuk industri yang mengadopsi AR/HMD (HoloLens 2), terapkan Rosilius et al. (2024) findings: pasang *noise-canceling microphone array* pada HMD, optimalkan *beamforming* terhadap SPL 70–95 dB, dan tetapkan *fallback modality* (gestur/menu) saat WER melampaui ambang.

**Tahap 5 — Umpan Balik & Adaptasi Real-Time.** Tampilkan *fatigue dashboard* kepada supervisor dengan *traffic-light* indicator (hijau: $F_{total}<\tau_1$, kuning: $\tau_1 \le F_{total} < \tau_2$, merah: $F_{total} \ge \tau_2$). Siapkan *adaptive task allocation* (penugasan ulang ke operator dengan skor lebih rendah).

Diagram alur keputusan dapat dirangkum sebagai berikut:

```
[Sensor Multmodal] → [Preprocessing] → [Skor Per-Modalitas] → 
[Fusion w_i] → [F_total] → [Threshold Check] → 
[IF Hijau: Lanjut | Kuning: Briefing | Merah: Rotasi/Istirahat]
```

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Kasus:** Operator *control room* di pabrik petrokimia dengan shift 12 jam, paparan kebisingan rata-rata 82 dB SPL, menggunakan HoloLens 2 untuk inspeksi visual remote. Data studi menggunakan parameter dari Rosilius et al. (2024).

**Input Parameter:**
- SPL kebisingan rata-rata: $\beta = 82$ dB
- WER baseline: $WER_0 = 0{,}08$ pada $\beta_{ref} = 60$ dB
- Koefisien sensitivitas: $\alpha = 0{,}012$ per dB (empiris Rosilius et al., 2024)
- HRV RMSSD awal: 45 ms, KSS awal: 4
- Durasi shift: $t = 10$ jam

**Langkah 1 — Hitung WER aktual:**

$$WER(82) = 0{,}08 + 0{,}012 \cdot (82 - 60) = 0{,}08 + 0{,}264 = 0{,}344$$

Artinya, 34,4% perintah suara salah dikenali. Ini mengonfirmasi bahwa kebisingan industri secara drastis menurunkan keandalan ASR.

**Langkah 2 — Estimasi beban kognitif tambahan.** Setiap *koreksi* perintah suara membutuhkan sekitar 4 detik *cognitive compensation* (reformulasi, validasi, retry). Jumlah percobaan perintah per jam: $n_{cmd} = 30$. Maka total *overhead* kognitif:

$$T_{overhead} = 0{,}344 \cdot 30 \cdot 4 = 41{,}3 \text{ detik/jam}$$

**Langkah 3 — Pemodelan akumulasi kelelahan.** Gunakan model fatigue accumulation dengan laju baseline $\lambda_0 = 0{,}05$ unit/jam, dan *cognitive penalty* $\eta = 0{,}003$ per detik overhead:

$$F(t) = F_0 + \lambda_0 t + \eta \int_0^t T_{overhead}(s)\,ds$$

Untuk $F_0 = 1$ (KSS awal) dan $t = 10$ jam:

$$F(10) = 1 + 0{,}05 \cdot 10 + 0{,}003 \cdot 41{,}3 \cdot 10 = 1 + 0{,}5 + 1{,}24 = 2{,}74 \