# 2814 — Optimalisasi Kebijakan Pemeliharaan Hierarkis Berbasis Reliabilitas untuk Memaksimalkan Ketersediaan Armada Pesawat: Studi Kebijakan MRO Aviasi A/B/C/D

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. SSRN Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy — Companion Mathematical Framework*. SSRN Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global menghadapi tantangan operasional yang sangat kompleks terkait pengelolaan siklus hidup armada pesawat. Dengan lebih dari 28.000 pesawat komersial beroperasi di seluruh dunia dan tingkat utilisasi harian rata-rata 8–12 jam per pesawat, ketersediaan (*availability*) menjadi metrik performa paling kritikal bagi operator maskapai. Menurut Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), industri *Maintenance, Repair, and Overhaul* (MRO) penerbangan menghadapi dilema struktural: bagaimana menyeimbangkan antara keamanan operasional yang bersifat non-negotiable dengan optimalisasi ekonomi yang mengejar utilisasi aset maksimal. Kerangka pemeliharaan tradisional A/B/C/D-check yang diadopsi secara luas oleh regulator FAA (Federal Aviation Administration) dan EASA (European Union Aviation Safety Agency) memberikan hierarki intervensi berbasis interval waktu — A-check (≈400–600 flight hours), B-check (≈6–8 bulan), C-check (≈20–24 bulan), hingga D-check *heavy maintenance* (≈6–12 tahun) — namun gagal menangkap karakteristik degradasi non-linear dari subsistem kritis pesawat.

Zhou (2024) menekankan bahwa pemodelan *Reliability-Centered Maintenance* (RCM) memberikan kemampuan kuantitatif untuk mengukur degradasi performa siklus hidup yang non-linear dan mengoptimalkan operasi dengan meningkatkan keselamatan serta ketersediaan. Namun, tantangan implementasi RCM pada sistem kompleks seperti kebijakan hierarkis A/B/C/D MRO penerbangan tetap signifikan. Urgensi ekonomis dari optimalisasi ini dapat diukur dari fakta bahwa setiap jam *ground time* pesawat narrow-body seperti Boeing 737-800 menimbulkan kerugian pendapatan sebesar USD 8.000–12.000, sementara *D-check* penuh membutuhkan 1–2 bulan dengan biaya USD 1–3 juta per peristiwa (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Lebih lanjut, catatan Zhou (2024) menunjukkan bahwa hingga 12–18% dari total biaya operasional maskapai secara langsung dialokasikan untuk aktivitas MRO, menjadikan keputusan penjadwalan pemeliharaan sebagai variabel keputusan dengan dampak profitabilitas masif.

Kompleksitas bertambah ketika dipertimbangkan bahwa siklus hidup operasional pesawat melewati setidaknya tiga regime degradasi: (i) *infant mortality* atau *burn-in* pada awal operasi, (ii) *mature-run* atau periode useful life, dan (iii) *wear-out* menjelang akhir siklus ekonomis. Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) mengusulkan bahwa optimalisasi jadwal maintenance check sepanjang life-cycle harus memperhitungkan karakteristik regime-dependent ini. Secara metodologis, paper Zhou memperkenalkan framework kebijakan MRO yang menggabungkan siklus *fully refurbished D-check* dan *partial refurbishments* selama fase *mature-run* operasi penerbangan, dengan penjadwalan yang dioptimasi berdasarkan *maximum available operation time*, disertai pembuktian eksistensi nilai optimal untuk model availabilitas. Pendekatan ini menjadi breakthrough karena menggeser paradigma dari *fixed-interval maintenance* menuju *condition-adaptive reliability-centered scheduling*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Reliabilitas Berbasis Distribusi Weibull

Karakteristik degradasi komponen kritis pesawat dimodelkan menggunakan distribusi Weibull dua parameter yang fleksibel dalam menangkap berbagai regime kegagalan. Fungsi reliabilitas dinyatakan sebagai:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*) yang menentukan karakteristik degradasi ($\beta < 1$ menunjukkan *infant mortality*, $\beta = 1$ menunjukkan laju kegagalan konstan eksponensial, dan $\beta > 1$ menunjukkan *wear-out*), sedangkan $\eta$ adalah *scale parameter* atau *characteristic life* (dalam jam terbang atau siklus). Laju kegagalan sesaat (*hazard rate*) diberikan oleh:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Untuk subsistem kritis pesawat seperti *landing gear*, *auxiliary power unit* (APU), dan *engine high-pressure turbine*, Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) merekomendasikan penggunaan $\beta \in [1.8, 2.8]$ dan $\eta \in [8.000, 25.000]$ flight hours, yang mencerminkan karakteristik *wear-out* dominan pada komponen fatigue-loaded.

### 2.2. Formulasi Availabilitas Jangka Panjang

Berdasarkan teorema *renewal reward* (*renewal reward theorem*), availabilitas sesaat (*instantaneous availability*) dari sistem dengan siklus pemeliharaan periodik adalah:

$$A(t) = \frac{\mu \cdot T_{up}(t)}{\mu \cdot T_{up}(t) + \lambda(t) \cdot T_{down}(t)}$$

di mana $\mu$ merepresentasikan tingkat keberhasilan operasi dan $\lambda(t)$ adalah laju kegagalan sesuai persamaan (2). Availabilitas jangka panjang (*long-run availability*) diekspresikan sebagai:

$$A_{\infty} = \lim_{T \to \infty} \frac{1}{T} \int_{0}^{T} A(t)\, dt = \frac{E[T_{up}]}{E[T_{up}] + E[T_{down}]}$$

dengan $E[T_{up}]$ adalah *expected up-time* antar pemeliharaan preventif dan $E[T_{down}]$ adalah *expected down-time* termasuk durasi maintenance korektif dan preventif (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

### 2.3. Fungsi Utilitas Pemeliharaan Hierarkis

Untuk kebijakan A/B/C/D-check, total *expected operational time* per siklus panjang adalah:

$$T_{op}^{total} = N_A \cdot T_A + N_B \cdot T_B + N_C \cdot T_C + T_D$$

di mana $N_A, N_B, N_C$ berturut-turut adalah jumlah A-check, B-check, dan C-check yang terjadi dalam satu siklus penuh D-check. Relasi intervalnya: $T_A < T_B < T_C < T_D$, dengan multiplisitas tipikal $N_A \approx 50$, $N_B \approx 8$, $N_C \approx 2$ untuk siklus D-check 6 tahun (Zhou, 2024).

### 2.4. Fungsi Objektif Optimasi

Optimasi jadwal pemeliharaan diformulasikan sebagai masalah maksimisasi availabilitas dengan kendala biaya:

$$\max_{T_A, T_B, T_C, T_D} A_{\infty}(T_A, T_B, T_C, T_D)$$

$$\text{subject to: } \sum_{i \in \{A,B,C,D\}} C_i \cdot N_i \leq B_{MRO}$$

dengan kendala tambahan reliabilitas $R(T_D) \geq R_{min}$ untuk memastikan keselamatan. Biaya total jangka panjang per flight hour:

$$TC = \frac{C_A \cdot N_A + C_B \cdot N_B + C_C \cdot N_C + C_D + C_f \cdot \int_0^{T_D} \lambda(t) dt}{T_{op}^{total}}$$

di mana $C_f$ adalah biaya kegagalan tak terjadwal (*unscheduled failure cost*), termasuk *AOG* (*Aircraft on Ground*) penalty (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.5. Bukti Eksistensi Nilai Optimal

Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) membuktikan eksistensi nilai optimal $A_{\infty}^*$ dengan menggunakan sifat kontinuitas dan *compactness* domain $(T_A, T_B, T_C, T_D)$ pada ruang parameter terbatas, melalui aplikasi teorema fixed-point Brouwer dan *extreme value theorem*. Kondisi optimalitas orde-1 (*first-order necessary conditions*) memenuhi:

$$\frac{\partial A_{\infty}}{\partial T_A} = \frac{\partial A_{\infty}}{\partial T_B} = \frac{\partial A_{\infty}}{\partial T_C} = \frac{\partial A_{\infty}}{\partial T_D} = 0$$

dengan kendala biaya aktif sehingga solusi optimal berada pada *boundary feasible region* atau interior *Kuhn-Tucker point*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hierarkis berbasis RCM mengikuti SOP 8-langkah sistematis sesuai kerangka Zhou (2024):

**Langkah 1 — Segmentasi Subsistem Kritis (Fungsi 1–3 hari).** Lakukan *Failure Modes, Effects, and Criticality Analysis* (FMECA) untuk mengidentifikasi 7–9 subsistem kritis (struktur, propulsi, avionik, hidrolik, *landing gear*, APU, kabin, sistem bahan bakar, kontrol penerbangan). Tentukan *criticality number* $CN = S \cdot P \cdot D$, dengan $S$ = severity, $P$ = probability, $D$ = detectability.

**Langkah 2 — Pengumpulan Data Operasional Historis.** Ekstrak data *Mean Time Between Failure* (MTBF), *Mean Time To Repair* (MTTR), dan interval kegagalan historis minimal 5 tahun dari *Continuing Airworthiness Maintenance Organization Exposition* (CAME).

**Langkah 3 — Estimasi Parameter Weibull.** Gunakan *Maximum Likelihood Estimation* (MLE) untuk menentukan $\hat{\beta}$ dan $\hat{\eta}$:

$$\hat{\beta} = \left[\frac{\sum_{i=1}^{n} t_i^{\hat{\beta}} \ln t_i}{\sum_{i=1}^{n} t_i^{\hat{\beta}}} - \frac{1}{n}\sum_{i=1}^{n} \ln t_i\right]^{-1}$$

**Langkah 4 — Penentuan *Maximum Available Operation Time*.** Hitung interval inspeksi optimal yang memenuhi $R(T) \geq R_{min}$ (umumnya $R_{min} = 0.95$ untuk komponen struktural).

**Langkah 5 — Optimasi Jadwal A/B/C/D-check.** Selesaikan formulasi persamaan (8) menggunakan *Sequential Quadratic Programming* (SQP) atau algoritma *Genetic Algorithm* (GA) untuk fleet-wide scheduling.

**Langkah 6