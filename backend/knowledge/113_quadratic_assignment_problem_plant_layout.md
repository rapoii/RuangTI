# Modul 113: Quadratic Assignment Problem (QAP) in Plant Layout

## Konsep Dasar
Quadratic Assignment Problem (QAP) adalah salah satu masalah optimasi kombinatorial paling sulit (NP-hard; bahkan instans $n\ge 20$ sulit diselesaikan eksak). Dalam Teknik Industri, QAP memodelkan **Facility Layout Problem** tipe penempatan: menempatkan $n$ fasilitas (departemen/mesin) ke $n$ lokasi diskrit sehingga total biaya interaksi aliran-jarak minimum. Kompleksitas berasal dari fungsi objektif kuadratik — produk dua variabel keputusan ($x_{ik}x_{jl}$) yang menghubungkan pasangan fasilitas dengan pasangan lokasi.

Model ini melengkapi metode Systematic Layout Planning (Muther SLP) yang kualitatif: ketika data aliran material ($f_{ij}$) dan jarak antarlokasi ($d_{kl}$) terkuantifikasi, QAP memberi jawaban optimal atau near-optimal dengan bound kualitas.

## Formulasi Matematis

### Model Koopmans-Beckmann
Diberikan matriks aliran $F=[f_{ij}]$, matriks jarak $D=[d_{kl}]$, dan biaya tetap penempatan $C=[c_{ik}]$:

$$
\min_{\pi \in S_n}\; \sum_{i=1}^{n}\sum_{j=1}^{n} f_{ij}\,d_{\pi(i)\pi(j)} + \sum_{i=1}^{n} c_{i\pi(i)}
$$

dengan $\pi$ permutasi fasilitas→lokasi dan $|S_n| = n!$. Untuk $n=15$ saja ada $1{,}3\times 10^{12}$ alternatif layout.

### Formulasi Integer Programming
Variabel biner $x_{ik}=1$ jika fasilitas $i$ ditempatkan di lokasi $k$:

$$
\begin{aligned}
\min\quad & \sum_{i,j,k,l} f_{ij}\,d_{kl}\,x_{ik}x_{jl} + \sum_{i,k} c_{ik}x_{ik}\\
\text{s.t.}\quad & \sum_k x_{ik}=1 && \forall i\\
& \sum_i x_{ik}=1 && \forall k\\
& x_{ik}\in\{0,1\}
\end{aligned}
$$

Linearisasi standar memakai variabel $y_{ijkl}=x_{ik}x_{jl}$ (Adams-Johnson reformulation), menjadi dasar solver MIP modern.

## Metode Solusi

### Exact Methods
1. **Branch-and-Bound + Gilmore-Lawler Bound (GLB):** lower bound klasik — tiap interaksi $(i,j)$ dihitung via assignment problem minor antara vektor aliran dan jarak, lalu dijumlahkan minimal.
2. **Eigenvalue / Semidefinite Programming relaxation:** memberikan bound lebih ketat untuk instans menengah ($n\le 30$).
3. **Reformulation-Linearization Technique (RLT):** transformasi kuadratik → LP dengan variabel tambahan.

### Metaheuristik & Hibrida
1. **Robust Tabu Search (Taillard, 1991):** benchmark de facto — pertukaran 2-opt dengan tabu list adaptif.
2. **Genetic Algorithm:** crossover permutasi PMX/OX + mutation swap.
3. **Ant Colony Optimization:** pheromone pada matriks assignment.
4. **Memetic/Hybrid:** GA + local search intensif; iterated local search untuk instans besar (Duman & Taşkın, 2023; Ahmadi-Javid & Hoseinpour, 2024).

Benchmark standar evaluasi: **QAPLIB** (Burkard dkk.) — instans Nugent ($n=12..30$, hadiah 1000 USD untuk solusi optimal baru Nugent 30 selama bertahun-tahun), Had20, Sko, Tai skala hingga $n=256$.

## Aplikasi di Industrial Engineering

1. **Plant Layout Design:** penempatan departemen produksi/sel manufaktur minimasi biaya material handling (sinergi Modul GT/CMS).
2. **Warehouse Slotting:** penempatan SKU ke blok rak berdasar matriks afinitas order bersama (correlated slotting).
3. **PCB Component Placement:** minimasi panjang jalur wiring pada elektronika.
4. **Hospital Department Layout:** kedekatan unit berdasarkan aliran pasien-dokumen (darurat-lab-radiologi).
5. **Kantor/Kampus Planning:** penempatan tim yang intens berkolaborasi; keyboard ergonomic key assignment sebagai analogi QAP.
6. **Backtracking reduction:** layout mesin job-shop untuk menekan arah balik aliran material.

## Referensi Terverifikasi

1. Koopmans, T. C., & Beckmann, M. (1957). Assignment problems and the location of economic activities. *Econometrica*, 25(1), 53-76.
2. Burkard, R. E., Dell'Amico, M., & Martello, S. (2012). *Assignment Problems* (rev. repr.). SIAM.
3. Loiola, E. M., de Abreu, N. M. M., Boaventura-Netto, P. O., Hahn, P., & Querido, T. (2007). A survey for the quadratic assignment problem. *European Journal of Operational Research*, 176(2), 657-690.
4. Taillard, É. D. (1991). Robust taboo search for the quadratic assignment problem. *Parallel Computing*, 17(4-5), 443-456.
5. Burkard, R. E., Karisch, S. E., & Rendl, F. (1997). QAPLIB — A quadratic assignment problem library. *Journal of Global Optimization*, 10(4), 391-403.
6. Duman, E., & Taşkın, Z. C. (2023). Exact solution approaches for the quadratic assignment problem: A computational study. *Computers & Operations Research*, 158, 106302.
7. Ahmadi-Javid, A., & Hoseinpour, P. (2024). A hybrid metaheuristic for large-scale facility layout problems with unequal area departments. *International Journal of Production Economics*, 267, 109068.
