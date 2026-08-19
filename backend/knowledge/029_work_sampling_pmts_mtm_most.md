# Modul Riset Ilmiah: Pengukuran Kerja Lanjut (Work Sampling & MTM / MOST Predetermined Time Systems)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Barnes, R. M. (1980). *Motion and Time Study: Design and Measurement of Work* (7th ed.). Wiley. ISBN: 978-0471059059.
- Zandin, K. B. (2002). *MOST Work Measurement Systems* (3rd ed.). CRC Press. ISBN: 978-0824709532.
- Maynard, H. B., Stegemerten, G. J., & Schwab, J. L. (1948). *Methods-Time Measurement (MTM)*. McGraw-Hill.

---

## 1. Uji Petik Kerja (Work Sampling)
Teknik statistik sampling aktivitas acak untuk mengestimasi proporsi waktu kerja produktif vs non-produktif (menganggur/idle/delay) dari operator atau mesin.

### Formula Ukuran Sampel Uji Petik Kerja (Statistical Sample Size $N$):
$$N = \frac{z_{\alpha/2}^2 \times p (1 - p)}{k^2 \times p^2} = \frac{z_{\alpha/2}^2 (1 - p)}{s^2 \times p}$$
- $p =$ Estimasi awal proporsi kejadian aktivitas yang diamati (misal: $p = 0.80$ untuk aktivitas produktif).
- $k$ atau $s =$ Tingkat ketelitian relatif (*Relative Accuracy*, biasanya $5\%$ atau $0.05$).
- $z_{\alpha/2} =$ Nilai tabel normal standar pada tingkat kepercayaan tertentu (untuk $\text{CL } 95\% \rightarrow z = 1.96 \approx 2$).

### Prosedur Uji Keseragaman & Kecukupan Data:
1. Hitung batas kendali proporsi harian ($p\text{-chart}$):
   $$\text{UCL/LCL} = \bar{p} \pm 3 \sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$$
2. Eliminasi hari pengamatan yang berada di luar batas kendali jika disebabkan oleh faktor *assignable cause*, lalu hitung ulang ukuran sampel minimum $N$.

---

## 2. Sistem Waktu Standar Gerakan Dasar (Predetermined Motion Time Systems - PMTS)

### A. MTM-1 (Methods-Time Measurement):
Mengukur waktu elemen gerak mikro dalam satuan **TMU (Time Measurement Unit)**:
$$1\text{ TMU} = 0.00001\text{ jam} = 0.0006\text{ menit} = 0.036\text{ detik}$$
$$1\text{ Detik} \approx 27.8\text{ TMU} \quad | \quad 1\text{ Menit} = 1667\text{ TMU}$$

### B. Basic MOST (Maynard Operation Sequence Technique):
Menyederhanakan pengukuran waktu gerakan dengan 3 model sekuens universal:
1. **General Move Sequence (Pemindahan Bebas Tanpa Hambatan):**
   $$A_i \, B_j \, G_k \, A_l \, B_m \, P_n \, A_p$$
   - $A =$ Action Distance (Jarak Gerak Tubuh)
   - $B =$ Body Motion (Gerak Membungkuk / Duduk)
   - $G =$ Gain Control (Menggenggam Objek)
   - $P =$ Placement (Menempatkan / Memposisikan Objek)
2. **Controlled Move Sequence (Gerak Terkendali):**
   $$A_i \, B_j \, G_k \, M_l \, X_m \, I_n \, A_p$$
   *(M = Move Controlled, X = Process Time, I = Alignment).*
3. **Kalkulasi Total TMU pada MOST:**
   $$\text{Total TMU} = \sum (\text{Index Values}) \times 10$$
