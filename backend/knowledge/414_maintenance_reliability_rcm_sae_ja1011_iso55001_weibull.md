# Modul 414: Rekayasa Keandalan Sistem & Pemeliharaan (Reliability Centered Maintenance - RCM II SAE JA1011, Distribusi Weibull, dan Manajemen Aset ISO 55001)

## 1. Domain Profesi & Ruang Lingkup
Profesi **Reliability Engineer / Maintenance Specialist & Asset Integrity Manager** bertugas menganalisis data riwayat kerusakan mesin (*Life Data Analysis*), menentukan interval pemeliharaan preventif dan prediktif yang optimal, serta merancang strategi keandalan peralatan berbasis risiko finansial dan keselamatan.

### Standar Baku:
1. **SAE JA1011**: *Evaluation Criteria for Reliability-Centered Maintenance (RCM) Processes*.
2. **SAE JA1012**: *A Guide to the Reliability-Centered Maintenance (RCM) Standard*.
3. **ISO 55001:2014**: *Asset management — Management systems — Requirements*.
4. **ISO 14224:2016**: *Collection and exchange of reliability and maintenance data for equipment*.

---

## 2. 7 Pertanyaan Fundamental RCM II (Moubray / SAE JA1011)

Proses RCM wajib menjawab 7 pertanyaan secara berurutan untuk setiap aset kritis:
1. Apa fungsi aset dan standar kinerja yang diharapkan? (*Functions*)
2. Dalam hal apa aset dapat gagal memenuhi fungsinya? (*Functional Failures*)
3. Apa penyebab dari setiap kegagalan fungsi tersebut? (*Failure Modes*)
4. Apa yang terjadi saat kegagalan terjadi? (*Failure Effects*)
5. Apa konsekuensi dari kegagalan tersebut terhadap keselamatan, lingkungan, operasional, dan finansial? (*Failure Consequences*)
6. Apa tindakan proaktif yang dapat dilakukan untuk memprediksi atau mencegah kegagalan? (*Proactive Tasks: On-Condition / Scheduled Restoration / Scheduled Discard*)
7. Apa tindakan yang harus diambil jika tindakan proaktif yang layak tidak ditemukan? (*Default Actions: Failure-Finding Tasks / Redesign / Run-to-Failure*)

---

## 3. Analisis Data Keandalan: Distribusi Weibull 2-Parameter

Distribusi Weibull adalah model keandalan paling fleksibel yang mampu merepresentasikan kurva bak mandi (*Bathtub Curve*).

### A. Fungsi Keandalan / Reliability ($R(t)$):
$$R(t) = e^{-\left( \frac{t}{\eta} \right)^\beta}$$

Di mana:
- $\beta$ (*Shape Parameter / Modulus Weibull*):
  - $\beta < 1$: **Masa Kematian Dini (Infant Mortality / Early Failure)** $\to$ Kegagalan akibat cacat manufaktur/instalasi. Strategi: *Burn-in testing / Quality screening*. **Dilarang Preventive Maintenance terjadwal karena justru meningkatkan risiko kerusakan**.
  - $\beta = 1$: **Masa Kegagalan Acak (Constant Failure Rate / Exponential)** $\to$ Kegagalan akibat faktor eksternal tak terduga. Strategi: *Condition-Based Monitoring (CBM)*.
  - $\beta > 1$: **Masa Aus / Penuaan (Wear-Out Period)** $\to$ Kegagalan akibat gesekan/kelelahan material. Jika $\beta \ge 2.0 - 4.0$, **Preventive Maintenance pergantian terjadwal sangat efektif**.
- $\eta$ (*Scale Parameter / Characteristic Life*): Waktu operasi di mana $63.2\%$ populasi komponen telah mengalami kegagalan ($R(\eta) = e^{-1} = 0.368$).

### B. Laju Kegagalan / Hazard Rate ($h(t)$):
$$h(t) = \frac{\beta}{\eta} \left( \frac{t}{\eta} \right)^{\beta - 1}$$

### C. Mean Time Between Failures (MTBF):
$$\text{MTBF} = \eta \cdot \Gamma\left( 1 + \frac{1}{\beta} \right)$$

Di mana $\Gamma(x)$ adalah fungsi Gamma Euler ($\Gamma(n) = (n-1)!$).

---

## 4. Interval Penggantian Preventif Optimal ($T^*$) Berbasis Biaya

Untuk komponen dengan $\beta > 1$, interval pergantian preventif optimal $T^*$ yang meminimalkan total biaya per satuan waktu ($C(T)$):

$$C(T) = \frac{C_p \cdot R(T) + C_u \cdot [1 - R(T)]}{\int_{0}^{T} R(t) \, dt}$$

Di mana:
- $C_p$: Biaya penggantian preventif terencana (murah, terjadwal saat mesin mati).
- $C_u$: Biaya penggantian darurat tak terencana (mahal, mencakup kerugian waktu henti produksi dan kerusakan sekunder mesin).

---

## 5. Metrik Ketersediaan Aset (Operational Availability - $A_o$)

$$A_o = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR} + \text{MTTRES}}$$

Di mana $\text{MTTR}$ adalah *Mean Time to Repair* dan $\text{MTTRES}$ adalah *Mean Time to Respond/Supply* suku cadang.

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Moubray, J. (1997). *Reliability-Centered Maintenance: RCM II* (2nd ed.). Industrial Press.
- O’Connor, P., & Kleyner, A. (2012). *Practical Reliability Engineering* (5th ed.). John Wiley & Sons.
- Society of Automotive Engineers. (2019). *SAE JA1011: Evaluation Criteria for Reliability-Centered Maintenance (RCM) Processes*. SAE International.
- Pykäri, J. (2025). *Quantitative failure mode effects and criticality analysis (FMECA) integrated with Weibull reliability life data in industrial heavy equipment*. Quality and Reliability Engineering International, 41(2), 245-261.
