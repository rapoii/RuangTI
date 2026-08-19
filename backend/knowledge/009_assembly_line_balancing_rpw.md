# Modul Riset Ilmiah: Assembly Line Balancing & Heuristik Keseimbangan Lini
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Helgeson, W. B., & Birnie, D. P. (1961). *Assembly line balancing using the ranked positional weight technique*. Journal of Industrial Engineering, 12(6), 394-398. (Classic Benchmark Paper).
- Boysen, N., Fliedner, M., & Scholl, A. (2007). *A classification of assembly line balancing problems*. European Journal of Operational Research, 183(2), 674-693. DOI: [10.1016/j.ejor.2006.10.010](https://doi.org/10.1016/j.ejor.2006.10.010).
- Kilbridge, M. D., & Wester, L. (1961). *A heuristic method of assembly line balancing*. Journal of Industrial Engineering, 12(4), 292-298.
- Moodie, C. L., & Young, H. H. (1965). *A heuristic method of assembly line balancing for assumptions of constant or variable work element times*. Journal of Industrial Engineering, 16(1), 23-29.

---

## 1. Konsep Keseimbangan Lini Perakitan (Assembly Line Balancing - ALB)
Line Balancing adalah metode pengalokasian elemen-elemen kerja perakitan ke stasiun-stasiun kerja (*workstations*) yang berurutan sedemikian rupa sehingga waktu menganggur (*idle time*) di setiap stasiun kerja dapat diminimalkan dan efisiensi lini produksi tercapai maksimal.

### Parameter Dasar Line Balancing:
1. **Waktu Siklus Desain / Takt Time ($C$ atau $CT$):**
   $$C = \frac{\text{Waktu Kerja Tersedia per Hari}}{\text{Target Produksi per Hari (Demand)}}$$
2. **Jumlah Minimum Stasiun Kerja Teoritis ($K_{\min}$):**
   $$K_{\min} = \left\lceil \frac{\sum_{i=1}^{n} t_i}{C} \right\rceil$$
   *Dimana:* $t_i$ adalah waktu operasi elemen kerja ke-$i$.

---

## 2. Metrik Kinerja Evaluasi Keseimbangan Lini

### A. Line Efficiency (Efisiensi Lini - $\text{LE}$):
Rasio antara total waktu operasi kerja aktual terhadap total kapasitas waktu stasiun kerja yang dibuka:
$$\text{LE} = \frac{\sum_{i=1}^{n} t_i}{K \times C} \times 100\%$$
*Dimana:* $K$ adalah jumlah stasiun kerja aktual yang terbentuk.

---

### B. Balance Delay ($\text{BD}$):
Persentase waktu menganggur (*idle time*) total pada seluruh stasiun kerja di lini perakitan:
$$\text{BD} = \frac{(K \times C) - \sum_{i=1}^{n} t_i}{K \times C} \times 100\% = 100\% - \text{LE}$$

---

### C. Smoothness Index (Indeks Kelancaran Beban - $\text{SI}$):
Mengukur tingkat kerataan variasi beban kerja antar stasiun kerja. Semakin mendekati nol ($0$), beban kerja antar operator semakin seimbang sempurna:
$$\text{SI} = \sqrt{\sum_{j=1}^{K} (ST_{\max} - ST_j)^2}$$
*Dimana:*
- $ST_j$: Total waktu stasiun kerja ke-$j$ ($ST_j = \sum_{i \in \text{Station } j} t_i \le C$).
- $ST_{\max}$: Waktu stasiun kerja terbesar (*bottleneck cycle time*).

---

## 3. Metode Heuristik Helgeson-Birnie (Ranked Positional Weight - RPW)

### Langkah Sistematis Algoritma RPW:
1. **Gambarkan Diagram Presedensi (*Precedence Diagram*)**: Hubungkan ketergantungan urutan operasi dari awal hingga akhir.
2. **Hitung Nilai Bobot Posisi (*Positional Weight* - $\text{PW}_i$)**:
   $$\text{PW}_i = t_i + \sum_{k \in \text{Followers}(i)} t_k$$
   *$\text{PW}_i$ adalah jumlah waktu operasi elemen $i$ ditambah seluruh waktu operasi elemen-elemen kerja yang mengikutinya (*successors*).*
3. **Urutkan Elemen Kerja**: Susun elemen kerja dari nilai $\text{PW}_i$ terbesar hingga terkecil (*descending order*).
4. **Alokasikan ke Stasiun Kerja**:
   - Masukkan elemen kerja teratas yang presedensinya sudah terpenuhi ke Stasiun Kerja $1$ selama $\sum t \le C$.
   - Jika penambahan elemen berikutnya melebihi $C$, buka Stasiun Kerja $2$, dan ulangi hingga semua elemen teralokasi.
