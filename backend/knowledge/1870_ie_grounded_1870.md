# 1870 — Kebijakan Pemeliharaan Hierarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil global menghadapi tantangan operasional yang semakin kompleks pada dekade kedua abad ke-21, di mana maskapai penerbangan, *lessor*, dan operator *Maintenance, Repair, and Overhaul* (MRO) harus menyeimbangkan tiga pilar strategis secara simultan: keselamatan penerbangan (*flight safety*), ketersediaan armada (*fleet availability*), dan efisiensi biaya siklus hidup (*life-cycle cost*). Hang Zhou (2024) dalam kajian fundamentalnya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menegaskan bahwa *Reliability-Centered Maintenance* (RCM) merupakan kerangka analitis yang paling dihargai di industri berbasis aset modal intensif karena kemampuannya mengkuantifikasi degradasi non-linier terhadap performa siklus hidup serta mengoptimalkan operasi melalui peningkatan keselamatan dan ketersediaan. Studi lanjutan Zhou (2024) pada DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) memperkuat urgensi pemodelan RCM untuk sistem kompleks yang tidak dapat ditangani oleh pendekatan pemeliharaan korektif konvensional.

Konteks industri penerbangan mensyaratkan hierarki pemeriksaan berkala yang telah terstandarisasi secara internasional, terdiri atas **A-check** (pemeliharaan ringan setiap 400–600 jam terbang atau 2–3 bulan), **B-check** (pemeliharaan menengah setiap 6–8 bulan), **C-check** (inspeksi mayor setiap 20–24 bulan), dan **D-check** (refurbishment penuh setiap 6–12 tahun, di mana pesawat dibongkar secara sistematis). Kompleksitas struktural muncul karena interdependensi antara检修检修 (siklus检修) parsial pada fase *mature-run* dengan检修检修 penuh D-check menciptakan keputusan penjadwalan yang non-trivial. Biaya satu kali D-check untuk pesawat narrow-body seperti Airbus A320 atau Boeing 737 dapat melampaui USD 3 juta dengan downtime 30–60 hari, sementara A-check hanya memerlukan USD 10.000–50.000 dengan downtime 24–72 jam (Zhou, 2024). Disparitas biaya dan downtime ini menjadi justifikasi ekonomis utama mengapa optimalisasi kebijakan hierarkis menjadi krusial.

Urgensi teknis makin diperkuat oleh fakta bahwa degradasi komponen pesawat tidak mengikuti pola linier; komponen *high-cycle fatigue* seperti *turbine blades*, *landing gear*, dan *avionics* menunjukkan karakteristik degradasi yang服从 distribusi Weibull dengan bentuk parameter β > 1 (wear-out phase) pada fase akhir siklus hidup. Oleh karena itu, paper Zhou (2024) DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) mengusulkan kerangka kebijakan MRO yang mengintegrasikan检修 penuh D-check dengan检修检修 parsial selama fase mature-run operasi penerbangan, dengan penjadwalan didasarkan pada **maksimisasi waktu operasi tersedia** (*maximum available operation time*) dan membuktikan secara matematis eksistensi nilai optimal untuk model ketersediaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Keandalan dan Ketersediaan

Ketersediaan sesaat (*instantaneous availability*) sistem pada waktu $t$ didefinisikan sebagai:

$$A(t) = \frac{1}{t}\int_{0}^{t} R(\tau) \, d\tau$$

di mana $R(\tau)$ adalah fungsi keandalan pada waktu $\tau$. Ketersediaan tunak (*steady-state availability*) yang menjadi target optimalisasi dalam kebijakan MRO dinyatakan sebagai:

$$A_{ss} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} = \frac{\mu}{\lambda + \mu}$$

di mana $\lambda$ adalah laju kegagalan dan $\mu$ adalah laju perbaikan. Untuk konteks hierarkis A/B/C/D, Zhou (2024) DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) memodelkan setiap检修检修 sebagai proses Bernoulli dengan downtime deterministik $D_k$ untuk检修检修 level $k \in \{A,B,C,D\}$.

### 2.2. Model Degradasi Non-Linier Weibull

Paper Zhou (2024) mengadopsi distribusi Weibull dua parameter untuk karakterisasi degradasi komponen kritis pesawat:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \beta > 0, \; \eta > 0$$

di mana $\beta$ adalah *shape parameter* (mencerminkan mode kegagalan: $\beta < 1$ untuk *infant mortality*, $\beta \approx 1$ untuk *random failure*, $\beta > 1$ untuk *wear-out*) dan $\eta$ adalah *scale parameter* (umur karakteristik). Laju kegagalan *hazard function* yang terkait:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.3. Formulasi Kebijakan Hierarkis MRO

Misalkan $T_A, T_B, T_C, T_D$ masing-masing adalah interval检修检修 untuk检修检修 A, B, C, dan D, dengan kendala struktural:

$$T_A < T_B < n_B \cdot T_A < T_C < n_C \cdot T_B < T_D$$

di mana $n_B, n_C$ adalah multiplisitas struktural (umumnya $n_B \approx 4$–$8$ dan $n_C \approx 8$–$12$). Ketersediaan rata-rata siklus armada (*fleet availability*) untuk satu检修检修 D-check didefinisikan oleh Zhou (2024) DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) sebagai:

$$A_{\text{fleet}} = \frac{T_D - \sum_{k \in \{A,B,C\}} n_k \cdot D_k - D_D}{T_D}$$

dengan $n_A = T_D/T_A$, $n_B = T_D/T_B$, $n_C = T_D/T_C$. Tujuan optimalisasi adalah memaksimumkan $A_{\text{fleet}}$ dengan memilih $T_A, T_B, T_C, T_D$ yang memenuhi kendala struktural dan kendala biaya siklus hidup.

### 2.4. Model Biaya Siklus Hidup (LCC)

Total biaya siklus hidup per unit waktu operasi:

$$\text{LCC} = \frac{C_D + \sum_{k} n_k \cdot C_k}{T_D - \sum_{k} n_k \cdot D_k - D_D}$$

di mana $C_k$ adalah biaya检修检修 level $k$. Fungsi Lagrangian untuk permasalahan optimalisasi terbatas (*constrained optimization*):

$$\mathcal{L}(T_A,T_B,T_C,T_D,\lambda_i) = -A_{\text{fleet}} + \sum_{i} \lambda_i \cdot g_i(T_A,T_B,T_C,T_D)$$

Zhou (2024) DOI [10.2139/ssrn.6387479](https://doi.com/10.2139/ssrn.6387479) membuktikan secara analitis melalui kondisi KKT (*Karush-Kuhn-Tucker*) bahwa **nilai optimal $A_{\text{fleet}}^{\star}$ eksis dan unik** dalam domain fisibel, memberikan landasan matematis untuk implementasi kebijakan检修检修.

### 2.5. Model Degradasi Gabungan (*Compound Degradation*)

Karena检修检修 parsial (A/B/C) memulihkan sebagian kapasitas komponen tanpa mengembalikan ke kondisi *as-good-as-new*, paper Zhou (2024) DOI [10.2139/ssrn.6387472](https://doi.org/10.2139/ssrn.5291672) menerapkan model *imperfect maintenance*:

$$R_{\text{post}}(t) = e^{-\left(\frac{t + \alpha \cdot t_{\text{op}}}{\eta}\right)^{\beta}}, \quad 0 < \alpha < 1$$

di mana $\alpha$ adalah faktor *maintenance effectiveness* (efektivitas检修检修), $t_{\text{op}}$ adalah waktu operasi kumulatif sebelum检修检修, dan $\alpha = 0$ merepresentasikan检修检修 sempurna (D-check), sedangkan $\alpha = 1$ merepresentasikan检修检修 minimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Implementasi Kebijakan MRO Hierarkis

Zhou (2024) DOI [10.2139/ssrn.6387479](https://doi.com/10.2139/ssrn.6387479) mengusulkan kerangka implementasi lima tahap yang dapat diadaptasi ke dalam SOP industri:

**Tahap 1 — Akuisisi Data Telemetri & Operasional:**
Data dikumpulkan dari *Aircraft Health Monitoring* (AHM) systems, *Flight Data Recorder* (FDR), dan *Centralized Maintenance System* (CMS). Parameter yang diekstraksi mencakup *actual flight hours*, *cycles*, *vibration spectra*, *oil analysis*, dan *avionics fault logs*.

**Tahap 2 — Karakterisasi Distribusi Degradasi:**
Estimator Maximum Likelihood (MLE) digunakan untuk menentukan parameter Weibull $(\hat{\beta}, \hat{\eta})$ per subsistem kritis:

$$\hat{\beta}, \hat{\eta} = \arg\max_{\beta,\eta} \sum_{i=1}^{n} \left[\ln\beta - \beta\ln\eta + (\beta-1)\ln t_i - \left(\frac{t_i}{\eta}\right)^{\beta}\right]$$

**Tahap 3 — Optimasi Interval检修:**
Algoritma *Sequential Quadratic Programming* (SQP) atau *Dynamic Programming* diterapkan untuk menyelesaikan permasalahan maksimasi $A_{\text{fleet}}$ dengan kendala struktural dan biaya.

**Tahap 4 — Penjadwalan Adaptif:**
Interval检修检修 yang dihasilkan diintegrasikan ke dalam *Maintenance Planning System* (misalnyaAMOS, TRAX, atau SAP PM) dengan *trigger* berbasis kondisi (*condition-based trigger*) untuk检修检修 minor.

**Tahap 5 — Audit & Validasi Berkelanjutan:**
*Reliability Growth Testing* dan *Weibull Recalibration* dilakukan setiap 6 bulan untuk memvalidasi bahwa parameter degradasi aktual masih konsisten dengan model.

### 3.2. Diagram Alir Logika Keputusan MRO

```
┌─────────────────────────────────┐
│  INPUT: Telemetri & Flight Hours│
└───────────────┬─────────────────┘
                │
                ▼
    ┌───────────────────────┐
    │  Hitung t_op kumulatif │
    └───────────┬───────────┘
                │
                ▼
    ┌───────────────────────┐    Ya   ┌─────────────┐
    │ t_op ≥ T_A?           ├────────►│ Jadwalkan  │
    └───────────┬───────────┘          │ A-check     │
                │ Tidak                └─────────────┘
                ▼
    ┌───────────────────────┐    Ya   ┌─────────────┐
    │ t_op ≥ n_A·T_A = T_B? ├────────►│ Jadwalkan  │
    └───────────┬───────────┘          │ B-check     │
                │ Tidak                └─────────────┘
                ▼
    ┌───────────────────────┐    Ya   ┌─────────────┐
    │ t_op ≥ n_B·T_B = T_C? ├────────►│ Jadwalkan  │
    └───────────┬───────────┘          │ C-check     │
                │ Tidak                └─────────────┘
                ▼
    ┌───────────────────────┐    Ya   ┌─────────────┐
    │ t_op ≥ n_C·T_C = T_D? ├────────►│ Jadwalkan  │
    └───────────┬───────────┘          │ D-check     │
                │ Tidak                │ (Refurbish