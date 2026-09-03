# 1822 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil global menghadapi tantangan operasional yang semakin kompleks seiring dengan meningkatnya volume lalu lintas udara yang menurut ICAO mencapai lebih dari 4,3 miliar penumpang pada 2023 dengan armada aktif lebih dari 28.000 pesawat komersial. Dalam ekosistem ini, kebijakan *Maintenance, Repair, and Overhaul* (MRO) bukan sekadar aktivitas pendukung, melainkan menjadi *strategic backbone* yang menentukan ketersediaan armada (*fleet availability*), keselamatan operasional (*operational safety*), dan profitabilitas maskapai. Hang Zhou (2024) dalam tulisannya yang dipublikasikan di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menegaskan bahwa *Reliability-Centered Maintenance* (RCM) merupakan pendekatan yang sangat dihargai dalam industri berbasis aset berat karena kemampuannya melakukan kuantifikasi terhadap degradasi kinerja *life-cycle* yang bersifat *non-linear* dan mengoptimalkan operasi melalui peningkatan keselamatan serta ketersediaan.

Struktur MRO aviasi modern menggunakan kebijakan pemeliharaan *hirarkis A/B/C/D*, di mana *A-check* dilakukan setiap 400–600 jam terbang dengan durasi 50–100 *man-hours*, *B-check* setiap 6–8 bulan, *C-check* setiap 20–24 bulan dengan durasi 6.000–15.000 *man-hours*, serta *D-check* yang merupakan *full refurbishment* pesawat secara menyeluruh setiap 6–12 tahun dengan durasi 30.000–60.000 *man-hours* (Zhou, 2024). Kompleksitas muncul karena aktivitas-aktivitas pemeliharaan tersebut saling berinteraksi dalam satu *master schedule*, di mana keputusan untuk melakukan *partial refurbishment* pada fase *mature-run* pesawat harus dioptimasi terhadap *full D-check cycle*. Dampak ekonomi dari suboptimalnya kebijakan ini sangat signifikan, di mana setiap jam *ground time* pesawat narrow-body seperti Boeing 737 atau Airbus A320 dapat menimbulkan kerugian pendapatan sebesar USD 5.000–15.000, sementara untuk wide-body seperti Boeing 777 dapat mencapai USD 20.000–40.000 per jam. Oleh karena itu, optimasi ketersediaan armada bukan sekadar persoalan teknis, melainkan keputusan finansial strategis yang memerlukan pendekatan kuantitatif berbasis RCM seperti yang diajukan oleh Hang Zhou (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear Berbasis Distribusi Weibull

Komponen kritis pesawat terbang seperti *landing gear assembly*, *auxiliary power unit* (APU), dan *high-pressure turbine blades* mengikuti pola degradasi yang tidak dapat dimodelkan dengan distribusi eksponensial sederhana. Zhou (2024) mengusulkan penggunaan distribusi Weibull dua parameter untuk memodelkan *hazard rate* komponen sepanjang *life-cycle*:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\beta$ adalah *shape parameter* (untuk komponen avionik biasanya $\beta \approx 2,5$–$3,5$ mengindikasikan *wear-out failure*, sedangkan untuk komponen struktural $\beta \approx 1,5$–$2,0$), dan $\eta$ adalah *scale parameter* yang merepresentasikan *characteristic life* komponen. Fungsi keandalan kumulatif dinyatakan sebagai:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

### 2.2 Formulasi Ketersediaan Hirarkis A/B/C/D

Ketersediaan armada (*fleet availability*) dalam kebijakan hirarkis A/B/C/D dapat diformulasikan sebagai rasio antara waktu operasi tersedia terhadap total waktu siklus yang mencakup waktu operasi dan waktu *downtime* untuk semua tingkat inspeksi. Zhou (2024, DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) mendefinisikan ketersediaan jangka panjang sistem sebagai:

$$A_{\infty} = \frac{\sum_{i=1}^{n} T_{op,i}}{\sum_{i=1}^{n} \left(T_{op,i} + T_{down,i}\right)}$$

di mana $T_{op,i}$ adalah waktu operasi tersedia antara aktivitas pemeliharaan ke-$i$, dan $T_{down,i}$ adalah total *downtime* yang diakumulasikan selama A-check, B-check, C-check, dan D-check. Lebih lanjut, untuk komponen dengan distribusi Weibull, *expected downtime* antara dua aktivitas pemeliharaan preventif dapat dihitung sebagai:

$$E[T_{down}] = \sum_{j \in \{A,B,C,D\}} \sum_{k=1}^{n_j} \left[ t_{preventif,j,k} \cdot \Pr(\text{tidak ada failure}) + t_{corrective,j,k} \cdot \Pr(\text{failure}) \right]$$

dengan $t_{preventif,j,k}$ adalah durasi aktivitas preventif tingkat-$j$ yang ke-$k$, dan $t_{corrective,j,k}$ adalah durasi perbaikan korektif ketika terjadi kegagalan acak.

### 2.3 Fungsi Objektif Optimasi

Zhou (2024) membuktikan keberadaan nilai optimal untuk model ketersediaan dengan merumuskan masalah optimasi sebagai berikut:

$$\max_{T_A, T_B, T_C, T_D} \quad A_{\infty}(T_A, T_B, T_C, T_D)$$

*subject to* kendala teknis dan ekonomis:

$$\begin{aligned}
T_{min,j} &\leq T_j \leq T_{max,j}, \quad \forall j \in \{A,B,C,D\} \\
C_{total}(T_A, T_B, T_C, T_D) &\leq C_{budget} \\
\text{Prob}(\text{failure pada } t \mid T_j) &\leq \text{RMT}_{threshold}
\end{aligned}$$

di mana $T_j$ adalah interval aktivitas pemeliharaan tingkat-$j$, $C_{total}$ adalah total biaya pemeliharaan siklus hidup, dan $\text{RMT}_{threshold}$ adalah *Reliability Maintenance Threshold* yang ditetapkan regulator (umumnya 95% untuk komponen kritis).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi RCM Hirarkis

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti kerangka *MSG-3* (Maintenance Steering Group-3) yang distandarisasi oleh ATA (Air Transport Association) dan diadopsi regulator FAA serta EASA. Zhou (2024, DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menyajikan arsitektur tujuh tahap sebagai berikut:

1. **Tahap Definisi Sistem & Batasan:** Identifikasi semua *Line Replaceable Units* (LRU) dan *Shop Replaceable Units* (SRU) dalam *ATA Chapter* 100–120 yang relevan.
2. **Tahap Analisis Fungsi:** Mendokumentasikan fungsi primer dan sekunder setiap komponen beserta *failure modes*.
3. **Tahap Penentuan *Failure Modes and Effects Analysis* (FMEA):** Menghitung *Risk Priority Number* (RPN) = $S \times O \times D$, di mana $S$ adalah *severity*, $O$ adalah *occurrence*, dan $D$ adalah *detectability*.
4. **Tahap Pengelompokan Tugas Pemeliharaan:** Mengklasifikasikan tugas ke dalam kategori A (visual check), B (operational check), C (detailed inspection), dan D (restoration/refurbishment).
5. **Tahap Optimasi Interval:** Menerapkan algoritma optimasi untuk menentukan $T_A^*, T_B^*, T_C^*, T_D^*$ yang memaksimalkan $A_{\infty}$.
6. **Tahap Validasi & Simulasi:** Menggunakan *Monte Carlo simulation* dengan $N \geq 10.000$ iterasi untuk memvalidasi kebijakan.
7. **Tahap Implementasi & *Continuous Review*:** Pemantauan kinerja menggunakan KPI seperti *Mean Time Between Failure* (MTBF), *Mean Time To Repair* (MTTR), dan *Aircraft Availability*.

### 3.2 Diagram Alir Keputusan RCM

```
[Identifikasi Komponen Kritis]
          ↓
[Analisis Weibull Failure Data] → β, η
          ↓
[Hitung Hazard Rate h(t)]
          ↓
[Formulasikan Fungsi A∞]
          ↓
[Optimasi Interval T_A, T_B, T_C, T_D]
          ↓
[Validasi Monte Carlo N=10.000]
          ↓
[Decision: Adopt/Adjust/Revisit]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input: Armada Narrow-Body Tipe A320-200

Sebagai ilustrasi numerik berdasarkan parameter industri tipikal, pertimbangkan maskapai dengan **10 unit A320-200** dengan karakteristik operasional berikut:

- **Penggunaan harian rata-rata:** 8 jam terbang/hari (3.000 jam/tahun)
- **Parameter Weibull komponen struktural:** $\beta = 2,2$, $\eta = 18.000$ jam
- **Interval A-check:** $T_A = 500$ jam (durasi 80 jam kalender, downtime 12 jam)
- **Interval B-check:** $T_B = 3.000$ jam (durasi 600 jam kalender, downtime 48 jam)
- **Interval C-check:** $T_C = 6.000$ jam (durasi 12.000 jam kalender, downtime 360 jam)
- **Interval D-check:** $T_D = 24.000$ jam (durasi 50.000 jam kalender, downtime 1.800 jam)

### 4.2 Perhitungan Ketersediaan Eksisting

Untuk satu siklus penuh (24.000 jam operasi), komposisi waktu adalah:

- **Waktu operasi efektif:** $T_{op} = 24.000 - \sum T_{down}$
- **Frekuensi masing-masing check dalam satu siklus D:** 
  - A-check: $n_A = 24.000/500 = 48$ kali
  - B-check: $n_B = 24.000/3.000 = 8$ kali
  - C-check: $n_C = 24.000/6.000 = 4$ kali
  - D-check: $n_D = 1$ kali

- **Total downtime:**
$$\begin{aligned}
T_{down,total} &= (48 \times 12) + (8 \times 48) + (4 \times 360) + (1 \times 1.800) \\
&= 576 + 384 + 1.440 + 1.800 = 4.200 \text{ jam}
\end{aligned}$$

- **Ketersediaan satu siklus:**
$$A_{\infty} = \frac{24.000}{24.000 + 4.200} = \frac{24.000}{28.200} \approx 0,8511 \text{ atau } 85,11\%$$

### 4.3 Skenario Optimasi dengan *Partial Refurbishment*

Zhou (2024) memperkenalkan strategi *partial refurbishment* pada fase *mature-run* (yaitu ketika usia struktur pesawat 8–14 tahun) untuk mengurangi beban D-check penuh. Misalkan kebijakan baru menggunakan satu D-check penuh di usia 12 tahun dan satu *partial refurbishment* di usia 6 tahun dengan downtime 900 jam:

- **Siklus baru (24.000 jam):**
  - C-check: 4 × 360 = 1.440 jam
  - A-check: 48 × 12 = 576 jam
  - B-check: 8 × 48 = 384 jam
  - D-check penuh: 1 × 1.800 = 1.800 jam
  - **Partial refurbishment:** 1 × 900 = 900 jam

$$T_{down,total}^{baru} = 576 + 384 + 1.440 + 1.800 + 900 = 5.100 \text{ jam}$$

$$A_{\infty}^{baru} = \frac{24.000}{24.000 + 5.100} = \frac{24.000}{29.100} \approx 0,8247$$

*Insight:* Ketersediaan tampak menurun, namun total biaya perbaikan berkurang karena penggantian komponen besar dilakukan *partial*. Jika biaya D-check penuh = USD 5 juta dan *partial refurbishment* = USD 2,5 juta, penghematan per pesawat mencapai **USD 2,5 juta** per siklus, dengan kerugian revenue akibat downtime tambahan (900 jam) = $900 \times \$12.000 = \$10,8$ juta. Trade-off masih perlu dianalisis menggunakan *Net Present Value* dengan discount rate 8%.

### 4.4 Validasi Monte Carlo

Untuk memvalidasi keandalan kebijakan dengan parameter Weibull, dilakukan simulasi Monte Carlo dengan 10.000 run:

$$\text{Prob}(\text{failure sebelum } T_A) = 1 - R(T_A) = 1 - \exp\left[-\left(\frac{500}{18