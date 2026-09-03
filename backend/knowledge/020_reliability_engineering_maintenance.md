# Modul Riset Ilmiah: Rekayasa Keandalan (Reliability Engineering) & Manajemen Perawatan Sistem
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Ebeling, C. E. (2010). *An Introduction to Reliability and Maintainability Engineering* (2nd ed.). Waveland Press. ISBN: 978-1577666257. (Foundational Benchmark).
- O'Connor, P., & Kleyner, A. (2012). *Practical Reliability Engineering* (5th ed.). Wiley. ISBN: 978-0470979815.
- Blanchard, B. S., Verma, D., & Peterson, E. L. (1995). *Maintainability: A Key to Effective Serviceability and Maintenance Management*. Wiley.

---

## 1. Konsep Dasar Keandalan Sistem
Keandalan $R(t)$ adalah probabilitas bahwa suatu komponen atau sistem akan menjalankan fungsinya yang disyaratkan dalam kondisi operasi tertentu selama interval waktu $t$.

### Hubungan Matematis Dasar:
1. **Fungsi Kerapatan Probabilitas Kegagalan (*Probability Density Function - PDF*):** $f(t)$
2. **Fungsi Kegagalan Kumulatif (*Cumulative Failure Distribution - CDF*):**
   $$F(t) = P(T \le t) = \int_0^t f(u) \, du$$
3. **Fungsi Keandalan (*Reliability Function*):**
   $$R(t) = 1 - F(t) = P(T > t) = \int_t^\infty f(u) \, du$$
4. **Laju Kegagalan Sesaat (*Hazard Rate / Failure Rate* $\lambda(t)$):**
   $$\lambda(t) = \frac{f(t)}{R(t)} = -\frac{1}{R(t)} \frac{dR(t)}{dt}$$

---

## 2. Model Distribusi Keandalan

### A. Distribusi Eksponensial (Laju Kegagalan Konstan $\lambda$):
Digunakan untuk fase masa pakai normal (*Useful Life / Random Failures*) pada kurva *Bathtub*:
$$R(t) = e^{-\lambda t}$$
$$\text{MTBF (Mean Time Between Failures)} = \frac{1}{\lambda} = \int_0^\infty R(t) \, dt$$

### B. Distribusi Weibull (Model 2-Parameter Universal):
Digunakan untuk memodelkan seluruh fase kurva *Bathtub*:
$$R(t) = \exp\left[ -\left( \frac{t}{\eta} \right)^\beta \right]$$
- $\beta =$ *Shape Parameter* (Parameter Bentuk):
  - $\beta < 1$: Fase *Infant Mortality* (Laju kegagalan menurun).
  - $\beta = 1$: Fase *Random Failures* (Identik dengan distribusi eksponensial).
  - $\beta > 1$: Fase *Wear-Out* (Kegagalan akibat keausan/penuaan komponen).
- $\eta =$ *Scale Parameter* (Karakteristik Umur $63.2\%$ kegagalan).

---

## 3. Konfigurasi Reliability Block Diagram (RBD)

### 1. Sistem Seri:
Kegagalan salah satu komponen menyebabkan seluruh sistem berhenti:
$$R_s(t) = \prod_{i=1}^n R_i(t) = R_1(t) \times R_2(t) \times \dots \times R_n(t)$$
$$\lambda_s = \sum_{i=1}^n \lambda_i$$

### 2. Sistem Paralel (Redundansi Penuh):
Sistem tetap berfungsi selama minimal satu komponen aktif:
$$R_p(t) = 1 - \prod_{i=1}^n [1 - R_i(t)] = 1 - [1 - R_1(t)][1 - R_2(t)] \dots [1 - R_n(t)]$$

---

## 4. Availability & Metrik Maintainability
- **MTTR (Mean Time To Repair):** Rata-rata waktu teknis pemulihan sistem dari saat rusak hingga kembali beroperasi normal.
- **Inherent Availability ($A_i$):**
  $$A_i = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} \times 100\%$$
- **Operational Availability ($A_o$):**
  $$A_o = \frac{\text{MTBM}}{\text{MTBM} + \text{MDT}} \times 100\%$$
  *(MDT = Mean Down Time, mencakup waktu logistik suku cadang & administrasi).*

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
