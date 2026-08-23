# Modul Riset Ilmiah: Penentuan Lokasi Fasilitas (Facility Location) & Desain Jaringan Rantai Pasok
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Daskin, M. S. (2013). *Network and Discrete Location: Models, Algorithms, and Applications* (2nd ed.). Wiley. ISBN: 978-0470905364.
- Hakimi, S. L. (1964). *Optimum locations of switching centers and the absolute centers and medians of a graph*. Operations Research, 12(3), 450-459.
- Sadeghi, A. H., Sun, Z., Sahebi-Fakhrabad, A., dkk. (2023). *A mixed-integer linear formulation for a dynamic modified stochastic p-median problem in a competitive supply chain network design*. Logistics (MDPI), 7(1), 14. DOI: [10.3390/logistics7010014](https://doi.org/10.3390/logistics7010014).
- Musa, A. I. (2025). *Optimal location selection for a new processing plant using supply chain and distribution network analysis*. Journal Industrial Servicess, 10(2).
- Ivanov, D., Tsipoulanidis, A., & Schönberger, J. (2025). *Global Supply Chain and Operations Management* (bab Facility Location Planning). Springer.
- Teitz, M. B., & Bart, P. (1968). *Heuristic methods for estimating the generalized vertex median of a weighted graph*. Operations Research, 16(5), 955-961.

---

## 1. Konsep Dasar Penentuan Lokasi Fasilitas

Penentuan lokasi fasilitas (*Facility Location Problem*, FLP) adalah keputusan investasi strategis jangka panjang yang menetapkan koordinat pabrik baru, gudang pusat (*Central Distribution Center*), atau depo distribusi untuk meminimalkan total biaya transportasi + operasional + lahan/pajak sekaligus memaksimalkan tingkat layanan pelanggan. Karakteristik keputusannya: biaya sunk besar, efek irreversibility tinggi, dan dampak kaskade terhadap desain jaringan rantai pasok hulu-hilir.

Faktor penentu non-kuantitatif: kedekatan pasar & bahan baku, infrastruktur logistik (pelabuhan/jalan tol), tenaga kerja, insentif fiskal, risiko bencana/geopolitik. Metode kuantitatif menerjemahkan faktor volume-tonase-tarif menjadi model optimasi kontinu atau diskrit.

## 2. Formulasi Matematis

### A. Metode Titik Berat (Center of Gravity Method)
Metode kontinu untuk satu fasilitas tunggal yang meminimalkan total ongkos angkut berbasis tonase dan koordinat:

$$
X^* = \frac{\sum_{i=1}^{n} X_i W_i R_i}{\sum_{i=1}^{n} W_i R_i}, \qquad Y^* = \frac{\sum_{i=1}^{n} Y_i W_i R_i}{\sum_{i=1}^{n} W_i R_i}
$$

dengan $(X_i,Y_i)$ = koordinat sumber pasokan/pasar $i$, $W_i$ = tonase per periode, dan $R_i$ = tarif angkut per km-ton. Untuk jarak Euclidean, solusi titik-optimal diperoleh iteratif **Weiszfeld**:

$$
P^{(k+1)} = \frac{\sum_i \left(w_i / \|P^{(k)}-P_i\|\right) P_i}{\sum_i w_i / \|P^{(k)}-P_i\|}
$$

### B. Model $p$-Median (Hakimi Property)
Memilih lokasi $p$ fasilitas di antara simpul kandidat agar total jarak tertimbang layanan minimum. ILP dengan variabel $x_{ij}$ (pelanggan $i$ dilayani fasilitas $j$), $y_j$ (fasilitas dibuka):

$$
\min Z = \sum_{i=1}^{n}\sum_{j=1}^{m} w_i\,d_{ij}\,x_{ij}
$$

Kendala:
1. Setiap konsumen tepat dilayani sekali: $\sum_j x_{ij} = 1,\;\forall i$
2. Hanya fasilitas terbuka yang boleh melayani: $x_{ij} \le y_j,\;\forall i,j$
3. Tepat $p$ fasilitas dibangun: $\sum_j y_j = p$
4. Bineritas: $x_{ij}, y_j \in \{0,1\}$

Hakimi theorem menjamin solusi optimal berada pada simpul jaringan — membenarkan diskretisasi kandidat lokasi.

### C. Perluasan: Kapasitas & Biaya Tetap
Capacitated $p$-median menambah $\sum_i w_i x_{ij} \le Cap_j\, y_j$. Untuk *uncapacitated fixed-charge location problem* (UFLP), jumlah fasilitas bebas dengan biaya buka $f_j$:

$$
\min \sum_j f_j y_j + \sum_i\sum_j c_{ij} x_{ij}
$$

## 3. Metode Solusi / Algoritma

1. **Heuristik klasik:** Greedy Adding (tambah lokasi dengan penurunan biaya terbesar) dan **Interchange/Teitz-Bart** swap lokal (Teitz & Bart, 1968).
2. **Relaksasi & bound:** LP relaxation (solusi sering integrer), Lagrangian relaxation dengan subgradien untuk bound atas instans besar, branch-and-bound komersial (Gurobi/CPLEX).
3. **Metaheuristik:** tabu search, VNS, GA/hybrid untuk instans ribuan simpul dan varian dinamis-stokastik (Sadeghi dkk., 2023).
4. **Validasi data:** sensitivitas terhadap proyeksi permintaan, tarif, dan skenario disrupsi (resilience-based network design).

## 4. Aplikasi di Industrial Engineering

- **Desain jaringan distribusi nasional:** pemilihan lokasi CDC/depo FMCG meminimasi biaya transport + service time ke ritel.
- **Lokasi pabrik pengolahan:** analisis gravitasi multi-sumber bahan baku (CPO, nikel, agroindustri) dengan bobot tarif truk vs kapal.
- **Jaringan layanan darurat:** p-median/p-center untuk posisi ambulans, fire station, gudang spare part dengan target coverage waktu.
- **E-commerce fulfillment:** multi-depot last-mile network design bersama VRP routing (keterkaitan Modul VRP).
- **Robust/resilient redesign:** evaluasi dual sourcing dan lokasi cadangan menghadapi disrupsi (Ivanov dkk., 2025).

## 5. Referensi Terverifikasi

1. Daskin, M. S. (2013). *Network and Discrete Location* (2nd ed.). Wiley. ISBN: 978-0470905364.
2. Hakimi, S. L. (1964). Operations Research, 12(3), 450-459.
3. Teitz, M. B., & Bart, P. (1968). Operations Research, 16(5), 955-961.
4. Sadeghi, A. H., dkk. (2023). Logistics (MDPI), 7(1), 14. DOI: 10.3390/logistics7010014.
5. Musa, A. I. (2025). Journal Industrial Servicess, 10(2).
6. Ivanov, D., Tsipoulanidis, A., & Schönberger, J. (2025). *Global Supply Chain and Operations Management*. Springer.
