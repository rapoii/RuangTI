# 138. Flow-Shop Scheduling Heuristics: NEH, CDS, Palmer

## Deskripsi Modul
Modul ini membahas heuristik konstruktif klasik dan modern untuk menyelesaikan *Permutation Flow-Shop Scheduling Problem* (PFSP) dengan kriteria makespan ($C_{max}$). Karena PFSP adalah NP-Hard untuk $m \geq 3$, heuristik seperti Nawaz-Enscore-Ham (NEH), Campbell-Dudek-Smith (CDS), dan Palmer menjadi fondasi penting dalam penjadwalan industri sebelum penggunaan metaheuristik.

## Konsep Inti

### 1. Permutation Flow-Shop Scheduling Problem (PFSP)
Diberikan $n$ jobs yang harus diproses pada $m$ mesin dengan urutan identik. Matriks waktu proses $P = [p_{ij}]$ di mana $p_{ij}$ adalah waktu proses job $i$ pada mesin $j$. Tujuan: meminimalkan $C_{max}$.

$$ C_{max} = \max_{i} \{ C(i, m) \} $$

Dimana $C(i, j)$ dihitung secara rekursif:
$$ C(\pi_1, 1) = p_{\pi_1, 1} $$
$$ C(\pi_i, 1) = C(\pi_{i-1}, 1) + p_{\pi_i, 1} $$
$$ C(\pi_1, j) = C(\pi_1, j-1) + p_{\pi_1, j} $$
$$ C(\pi_i, j) = \max \{ C(\pi_{i-1}, j), C(\pi_i, j-1) \} + p_{\pi_i, j} $$

### 2. Palmer's Slope Index (1965)
Palmer mengusulkan indeks kemiringan (*slope index*) untuk mengurutkan job berdasarkan kecenderungan waktu prosesnya terhadap posisi mesin:

$$ S_i = -\sum_{j=1}^{m} (m - 2j + 1) \cdot p_{ij} $$

Job diurutkan berdasarkan $S_i$ menurun. Logika: Job dengan waktu proses meningkat seiring nomor mesin mendapat prioritas lebih tinggi untuk menghindari idle time di mesin akhir.

### 3. Campbell-Dudek-Smith (CDS) Algorithm (1970)
CDS membangun $(m-1)$ sub-problem dua-mesin virtual menggunakan algoritma Johnson:
- Sub-problem $k$: Mesin I = $\sum_{j=1}^{k} p_{ij}$, Mesin II = $\sum_{j=m-k+1}^{m} p_{ij}$
- Terapkan Johnson’s Rule pada setiap sub-problem
- Evaluasi $C_{max}$ untuk semua $(m-1)$ sequence, pilih yang terbaik

**Kompleksitas:** $O(m^2 n \log n)$ — efisien untuk masalah ukuran menengah.

### 4. Nawaz-Enscore-Ham (NEH) Algorithm (1983)
NEH dianggap sebagai heuristik konstruktif terbaik untuk PFSP makespan:

**Langkah-langkah:**
1. Hitung total waktu proses: $T_j = \sum_{i=1}^{m} p_{ji}$
2. Urutkan job berdasarkan $T_j$ menurun → urutan awal $L$
3. Ambil dua job pertama dari $L$, tentukan urutan parsial terbaik
4. Untuk job ke-$k$ ($k=3$ sampai $n$): sisipkan job tersebut ke semua posisi yang mungkin dalam urutan parsial saat ini, evaluasi $C_{max}$, pilih posisi terbaik
5. Ulangi hingga semua job terjadwal

**Kompleksitas:** $O(n^3 m)$ dengan implementasi naif; dapat dioptimasi menjadi $O(n^2 m)$ dengan teknik akselerasi Taillard (1990).

**Mengapa NEH Superior?**
- Prioritas pada job dengan total processing time besar (high impact)
- Inserion-based construction mempertahankan partial optimality
- Tidak bergantung pada asumsi struktural tertentu tentang flow shop

### 5. NEH Enhancements Modern
- **NEH-KK (Kalczynski & Kamburowski, 2007):** Tie-breaking rules berbasis standar deviasi
- **FRB5 (Fernandez-Viagas & Framinan, 2014):** Idle-time based priority rule + NEH insertion
- **NEH with Acceleration:** Taillard’s acceleration mengurangi evaluasi inserion dari $O(nm)$ menjadi $O(m)$ per posisi

### 6. Lower Bounds untuk Evaluasi Kualitas
Untuk mengevaluasi gap heuristik, diperlukan lower bound:
- **LB1 (Ignall & Schrage):** Machine-based bound
- **LB2 (Taillard):** Improved machine-based bound
- **LB3:** Lagrangian relaxation bound

$$ Gap(\%) = \frac{C_{max}^{heuristic} - LB}{LB} \times 100\% $$

## Aplikasi Industri
1. **Batch Chemical Processing:** Multi-stage batch plants dengan fixed routing
2. **Semiconductor Wafer Fabrication:** Re-entrant flow shops (modifikasi diperlukan)
3. **Food & Beverage:** Packaging lines dengan cleaning-in-place constraints
4. **Print Shop:** Multi-color printing dengan sequence-dependent setups

## Studi Kasus Numerik
Diberikan 5 jobs, 4 mesin:
$$ P = \begin{bmatrix} 2 & 3 & 4 & 1 \\ 1 & 5 & 2 & 3 \\ 4 & 2 & 3 & 2 \\ 3 & 1 & 5 & 4 \\ 2 & 4 & 1 & 3 \end{bmatrix} $$

**NEH Execution:**
1. Total times: $T = [10, 11, 11, 13, 10]$ → Order: J4, J2/J3, J1/J5
2. Insert J4: [J4]
3. Insert J2: Test [J2,J4] vs [J4,J2] → Pilih terbaik
4. Lanjutkan hingga complete sequence diperoleh

## Referensi Terverifikasi
1. **Nawaz, M., Enscore, E. E., & Ham, I.** (1983). "A heuristic algorithm for the m-machine, n-job flow-shop sequencing problem". *Omega*, 11(1), 91-95. (Paper asli NEH).
2. **Campbell, H. G., Dudek, R. A., & Smith, M. L.** (1970). "A heuristic algorithm for the n job m machine sequencing problem". *Management Science*, 16(10), B-630.
3. **Palmer, D. S.** (1965). "Sequencing jobs through a multi-stage production process". *Operational Research Quarterly*, 16(1), 100-107.
4. **Fernandez-Viagas, V., & Framinan, J. M.** (2024). "The NEH algorithm revisited: New insights and improvements after 40 years". *European Journal of Operational Research*, 312(2), 489-504.
5. **Li, X., et al.** (2023). "A comprehensive survey on flow shop scheduling: From classical to intelligent approaches". *Journal of Manufacturing Systems*, 68, 312-335.

## Kata Kunci
Flow-Shop Scheduling, PFSP, NEH Algorithm, CDS Algorithm, Palmer Slope Index, Makespan, Constructive Heuristic, Johnson's Rule, Taillard Acceleration, Permutation Flow Shop, Sequencing.

</content>