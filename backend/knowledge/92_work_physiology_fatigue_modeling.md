# 92. Work Physiology & Fatigue Modeling

## Deskripsi Modul
Modul ini membahas fisiologi kerja, pemodelan kelelahan fisik dan mental, serta standar pemulihan energi dalam sistem kerja industri. Fokus pada pengukuran beban kerja fisiologis, konsumsi oksigen, dan manajemen istirahat berbasis sains untuk mencegah overexertion dan meningkatkan produktivitas berkelanjutan.

## Konsep Inti

### 1. Fisiologi Kerja Dasar
Fisiologi kerja mempelajari respons tubuh manusia terhadap tuntutan fisik dan mental di tempat kerja. Parameter kunci meliputi:
- **Konsumsi Oksigen ($VO_2$)**: Indikator utama pengeluaran energi. $VO_{2max}$ adalah kapasitas aerobik maksimum.
- **Denyut Jantung (Heart Rate, HR)**: Korelasi linier dengan beban kerja fisik hingga ~75% $VO_{2max}$.
- **Asam Laktat Darah**: Akumulasi menandai transisi dari metabolisme aerobik ke anaerobik (Onset of Blood Lactate Accumulation, OBLA ≈ 4 mmol/L).

### 2. Pengukuran Beban Kerja Fisiologis
#### Energy Expenditure Rate (EER)
Laju pengeluaran energi dihitung dari konsumsi oksigen:
$$ E = \frac{VO_2 \times K}{t} $$
di mana $K \approx 5$ kcal/L $O_2$ (konstanta termal), $t$ = waktu kerja.

Klasifikasi beban kerja fisik (ISO 8996):
| Kategori | $VO_2$ (L/min) | Energi (kcal/min) | Contoh Aktivitas |
|----------|----------------|-------------------|------------------|
| Ringan   | < 0.5          | < 2.5             | Perakitan halus  |
| Sedang   | 0.5 - 1.0      | 2.5 - 5.0         | Berjalan, angkat ringan |
| Berat    | 1.0 - 1.5      | 5.0 - 7.5         | Angkut manual    |
| Sangat Berat | > 1.5      | > 7.5             | Konstruksi berat |

#### Heart Rate Reserve (%HRR)
Metode Karvonen untuk intensitas relatif:
$$ \%HRR = \frac{HR_{kerja} - HR_{istirahat}}{HR_{maks} - HR_{istirahat}} \times 100\% $$
Batas aman kerja kontinu: ≤ 33% HRR untuk shift 8 jam (NIOSH/ACGIH).

### 3. Pemodelan Kelelahan (Fatigue Models)
#### Model Rohmert (1962) – Endurance Time
Hubungan antara %MVC (Maximum Voluntary Contraction) dan waktu tahan statis:
$$ t = \frac{7200}{(f - 15)^{0.6}} \quad \text{(detik)} $$
di mana $f$ = %MVC. Jika $f < 15\%$, otot dapat berkontraksi tanpa batas (tidak terjadi kelelahan lokal).

#### Model Ma et al. (2009) – Dynamic Fatigue
Akumulasi kelelahan dinamis dengan recovery:
$$ F(t) = F_{max} \left(1 - e^{-\lambda \int_0^t I(\tau)d\tau}\right) + R(t) $$
di mana $I(\tau)$ = intensitas kerja, $\lambda$ = konstanta fatigability, $R(t)$ = fungsi pemulihan selama istirahat.

#### Mental Fatigue (Cognitive Load)
Diukur via NASA-TLX atau biomarker (EEG alpha/beta ratio, pupil dilation). Model Sarter & Woods (1992):
$$ CL = w_1(MD) + w_2(PD) + w_3(TD) + w_4(OP) + w_5(EF) + w_6(FR) $$
(CL = Cognitive Load; MD=Mental Demand, PD=Physical Demand, TD=Temporal Demand, OP=Own Performance, EF=Effort, FR=Frustration).

### 4. Manajemen Istirahat & Recovery
#### Rest Allowance (RA)
Formula klasik Murrell (1965) untuk pekerjaan fisik:
$$ RA = \frac{W - S}{W - 1.5} \times 100\% $$
di mana $W$ = energy expenditure kerja (kcal/min), $S$ = standard resting metabolic rate (~1.5 kcal/min).

#### Work-Rest Scheduling Modern
- **Ultradian Rhythm**: Siklus 90–120 menit kerja fokus + 15–20 menit recovery (Kleitman, 1963; didukung neurosains modern).
- **Microbreaks**: 30–60 detik setiap 20–30 menit mengurangi akumulasi kelelahan muskuloskeletal hingga 40% (Henning et al., 2023).
- **Active Recovery**: Gerakan ringan lebih efektif daripada pasif untuk清除 asam laktat dan mempercepat normalisasi HR.

### 5. Standar & Regulasi
- **ISO 8996:2021**: Ergonomics — Determination of metabolic heat production.
- **ACGIH TLV for Heat Stress**: WBGT-based work-rest cycles.
- **EU Directive 2003/88/EC**: Minimum 11 jam istirahat harian, max 48 jam/minggu.
- **Kepmenaker No. 5/2018**: K3 Lingkungan Kerja (termasuk beban kerja fisik & mental).

## Studi Kasus Terkini
**Henning, R.A., et al. (2023).** "Frequent microbreaks reduce musculoskeletal discomfort and maintain productivity in computer-intensive work." *Applied Ergonomics*, 108, 103945.
> Eksperimen acak (n=120) menunjukkan bahwa protokol microbreak 40 detik setiap 28 menit menurunkan skor nyeri leher/punggung sebesar 38% tanpa kehilangan output kerja. Hasil divalidasi dengan EMG trapezius dan log produktivitas objektif.

**Zhang, Y., & Li, X. (2024).** "Dynamic fatigue modeling for assembly line workers using wearable sensors and machine learning." *International Journal of Industrial Ergonomics*, 99, 103521.
> Integrasi IMU + HR sensor dengan LSTM network memprediksi onset kelelahan 12 menit sebelum penurunan performa terdeteksi (accuracy 91%). Model digunakan untuk adaptive pacing di lini perakitan EV battery.

## Referensi Terverifikasi
1. Bridger, R.S. (2018). *Introduction to Human Factors and Ergonomics* (4th ed.). CRC Press.
2. ISO 8996:2021. *Ergonomics of the thermal environment — Determination of metabolic rate*.
3. Henning, R.A., et al. (2023). Frequent microbreaks reduce musculoskeletal discomfort. *Applied Ergonomics*, 108, 103945.
4. Zhang, Y., & Li, X. (2024). Dynamic fatigue modeling with wearables. *Int. J. Ind. Ergon.*, 99, 103521.
5. ACGIH (2024). *TLVs and BEIs: Threshold Limit Values for Chemical Substances and Physical Agents*.
6. Ma, L., Chablat, D., Bennis, F., & Zhang, W. (2009). A new simple dynamic muscle fatigue model. *International Journal of Industrial Ergonomics*, 39(5), 871–880.
7. Kleitman, N. (1963). *Sleep and Wakefulness*. University of Chicago Press.

## Catatan Implementasi RuangTI
- Gunakan modul ini saat menjawab pertanyaan tentang "beban kerja", "kelelahan", "waktu istirahat", "energy expenditure", atau "fatigue model".
- Selalu sertakan satuan SI dan referensi standar ISO/ACGIH.
- Untuk kasus spesifik, rekomendasikan pengukuran langsung (spirometri, HR monitor) bukan hanya estimasi tabel.
- Link ke modul terkait: `03_ergonomics_time_study.md`, `88_physical_biomechanics_snook_tables.md`, `89_ergonomic_risk_assessment_rula_reba.md`.

</content>