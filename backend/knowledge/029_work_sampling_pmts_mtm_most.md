# Modul Riset Ilmiah: Pengukuran Kerja Lanjut (Work Sampling & MTM / MOST Predetermined Time Systems)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Barnes, R. M. (1980). *Motion and Time Study: Design and Measurement of Work* (7th ed.). Wiley. ISBN: 978-0471059059.
- Zandin, K. B. (2002). *MOST Work Measurement Systems* (3rd ed.). Marcel Dekker / CRC Press. ISBN: 978-0824709532.
- Maynard, H. B., Stegemerten, G. J., & Schwab, J. L. (1948). *Methods-Time Measurement (MTM)*. McGraw-Hill.
- Niebel, B. W., & Freivalds, A. (2013). *Niebel's Methods, Standards, and Work Design* (13th ed.). McGraw-Hill.
- Kanawaty, G. (Ed.) (1992). *Introduction to Work Study* (4th ed.). International Labour Office (ILO), Geneva.

---

## 1. Konsep Dasar Pengukuran Kerja

Pengukuran kerja (*work measurement*) menetapkan waktu standar suatu pekerjaan oleh operator terampil pada tingkat kecepatan normal plus allowance. Dua keluarga teknik utama: **teknik observasional** (stopwatch time study, work sampling) dan **teknik berbasis data** (*Predetermined Motion Time Systems*, PMTS — MTM dan MOST) yang menghitung waktu dari tabel gerak dasar tanpa perlu pengamatan langsung setiap siklus.

### Uji Petik Kerja (Work Sampling)
Teknik sampling aktivitas secara acak untuk mengestimasi proporsi waktu produktif vs non-produktif (idle/delay) operator atau mesin. Keunggulan: satu analis dapat mengamati banyak objek sekaligus; tidak mengganggu operator; ideal untuk aktivitas tidak berulang (maintenance, logistik, layanan).

### Formula Ukuran Sampel Work Sampling
Dengan tingkat kepercayaan $z_{\alpha/2}$, estimasi proporsi awal $p$, dan ketelitian relatif $k$:

$$
N = \frac{z_{\alpha/2}^2\,(1-p)}{k^2\,p}
$$

- $p$ = estimasi awal proporsi aktivitas diamati (misal $p=0{,}80$ untuk waktu produktif).
- $k$ = relative accuracy (umum $0{,}05$); $z_{\alpha/2}=1{,}96$ untuk CL 95%.

### Uji Keseragaman Data Harian
Kontrol konsistensi proporsi harian dengan p-chart:
$$
\text{UCL/LCL} = \bar{p} \pm 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}
$$
Hari di luar batas akibat *assignable cause* dikeluarkan, lalu ukuran sampel minimum dihitung ulang.

## 2. Formulasi Matematis Waktu Standar

Dari stopwatch study dengan rating performa $R$ (%):

$$
NT = OT \times \frac{R}{100}, \qquad ST = NT\,(1 + A)
$$

dengan $NT$ = normal time, $OT$ = observed time rata-rata, $A$ = allowance (pribadi-fatigue-delay, umum $10\%-17\%$). Jumlah siklus minimum pengamatan untuk ketelitian relatif $k$:

$$
n = \left(\frac{z_{\alpha/2}\cdot s}{k\cdot \bar{x}}\right)^2
$$

dengan $s$ = simpangan baku waktu siklus dan $\bar{x}$ = mean waktu siklus.

### A. MTM-1 (Methods-Time Measurement)
Menguraikan gerakan menjadi elemen mikro (Reach, Move, Turn, Grasp, Position, Release) dalam satuan **TMU (Time Measurement Unit)**:

$$
1\text{ TMU} = 0{,}00001\text{ jam} = 0{,}0006\text{ menit} = 0{,}036\text{ detik}; \qquad 1\text{ menit} = 1667\text{ TMU}
$$

Waktu tiap elemen dibaca dari tabel sesuai jarak, tipe gerak, dan case kontrol.

### B. Basic MOST (Maynard Operation Sequence Technique)
Menyederhanakan pengukuran melalui tiga model sekuens universal dengan parameter indeks $(i,j,k,\dots)$:
1. **General Move** (objek bebas bergerak):
   $$A_i\,B_j\,G_k\,A_l\,B_m\,P_n\,A_p$$
   ($A$=Action Distance, $B$=Body Motion, $G$=Gain Control, $P$=Placement).
2. **Controlled Move** (objek digerakkan terkendali):
   $$A_i\,B_j\,G_k\,M_l\,X_m\,I_n\,A_p$$
   ($M$=Move Controlled, $X$=Process Time, $I$=Alignment).
3. **Tool Use** (penggunaan alat: fasten/loosen, cut, measure, write).
Konversi indeks ke waktu:
$$
\text{Total TMU} = (\Sigma\,\text{index values})\times 10
$$

MOST ±30 kali lebih cepat penerapannya daripada MTM-1 dengan deviasi hasil tipikal <5% — kompromi presisi-vs-kecepatan yang menjadikannya standar industri modern.

## 3. Metode Solusi / Prosedur Praktis

1. **Work sampling:** definisikan kategori aktivitas → tentukan $N$ dari formula → jadwalkan observasi acak (tabel bilangan acak) → kumpulkan data → uji p-chart → hitung utilitas & utilization → susun standard data non-repetitif.
2. **PMTS:** dekomposisi metode kerja menjadi sekuens MOST → tetapkan indeks parameter dari tabel → jumlah TMU → tambah allowance → validasi dengan beberapa siklus stopwatch.
3. **Metod engineering pasca-pengukuran:** eliminasi gerak sia-sia (therblig), redesign workstation, lalu re-measure — prinsip Barnes: "ukur untuk memperbaiki metode", bukan sekadar menetapkan insentif.

## 4. Aplikasi di Industrial Engineering

- **Penetapan waktu baku & kapasitas:** dasar line balancing, MPS/RCCP, dan penjadwalan.
- **Sistem upahan insentif:** standard data sebagai basis wage incentive yang adil dan defensible.
- **Benchmarking metode kerja:** evaluasi alternatif fixture/tooling sebelum investasi via MOST simulation on paper.
- **Analisis produktivitas area non-siklik:** work sampling pada maintenance, warehouse picking, dan rumah sakit (proporsi nilai tambah perawat).
- **Digital manufacturing:** library MOST tertanam di software time estimation dan desain stasiun cobot.

## 5. Referensi Terverifikasi

1. Barnes, R. M. (1980). *Motion and Time Study* (7th ed.). Wiley. ISBN: 978-0471059059.
2. Zandin, K. B. (2002). *MOST Work Measurement Systems* (3rd ed.). CRC Press. ISBN: 978-0824709532.
3. Maynard, H. B., Stegemerten, G. J., & Schwab, J. L. (1948). *Methods-Time Measurement*. McGraw-Hill.
4. Niebel, B. W., & Freivalds, A. (2013). *Niebel's Methods, Standards, and Work Design* (13th ed.). McGraw-Hill.
5. Kanawaty, G. (1992). *Introduction to Work Study* (4th ed.). ILO Geneva.
