# Modul Riset Ilmiah: Metaheuristik dalam Vehicle Routing Problem (VRP) - Simulated Annealing & Tabu Search
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Leelertkij, T., Buddhakulsomsiri, J., & Huynh, V. N. (2025). *A multi-thread simulated annealing for multi-objective vehicle routing problem with time windows and demand priority*. Computers & Industrial Engineering, Elsevier. DOI: [10.1016/j.cie.2025.110000](https://doi.org/10.1016/j.cie.2025.110000).
- Yu, V. F., Lin, C. H., Maglasang, R. S., dkk. (2024). *An efficient simulated annealing algorithm for the vehicle routing problem in omnichannel distribution*. Mathematics, MDPI.
- Saragih, N. I., & Turnip, P. (2024). *Solving vehicle routing problem with considering traffic congestion using tabu search algorithm*. IEEE.
- Madhani, G. Y., Sriwana, I. K., & Ardiansyah, M. N. (2024). *Vehicle routing problem using hybridization of ant colony optimization and tabu search to reduce picking time*. Journal of Industrial Engineering and Management.
- Ramadhan, M. H., Kamal, I. M., Kim, D., & Bae, H. (2023). *Solving the inter-terminal truck routing problem for delay minimization using simulated annealing*. Journal of Marine Science and Engineering.

---

## 1. Vehicle Routing Problem (VRP) Lanjut
VRP adalah kelas masalah optimasi kombinatorial (NP-Hard) yang mencari rute optimal untuk armada kendaraan dalam melayani sekumpulan pelanggan. Karena kompleksitasnya yang meledak seiring jumlah node (pelanggan), metode eksak (seperti MILP dengan Branch-and-Bound) seringkali gagal menemukan solusi dalam waktu wajar. Oleh karena itu, **Metaheuristik** digunakan untuk mencari solusi yang *mendekati optimal* (*near-optimal*) dalam waktu komputasi yang dapat diterima.

### Varian VRP Modern di Industri:
- **CVRP (Capacitated VRP):** Kendaraan memiliki kapasitas muatan maksimum.
- **VRPTW (VRP with Time Windows):** Pelanggan harus dilayani dalam rentang waktu tertentu $[e_i, l_i]$.
- **HFVRP (Heterogeneous Fleet VRP):** Armada terdiri dari berbagai jenis kendaraan dengan kapasitas dan biaya operasional yang berbeda.
- **EVRP (Electric Vehicle Routing Problem):** Mempertimbangkan batas baterai dan lokasi stasiun pengisian daya (charging stations).

---

## 2. Simulated Annealing (SA)
Simulated Annealing diadaptasi dari proses metalurgi "Annealing" (pemanasan dan pendinginan perlahan logam untuk mengurangi cacat kristal). SA adalah algoritma pencarian lokal yang sesekali menerima solusi yang lebih buruk (mengalami penurunan kinerja) untuk menghindari jebakan *Local Optima*.

### Mekanisme Penerimaan Metropolis:
Probabilitas menerima solusi kandidat baru ($S'$) dari solusi saat ini ($S$) ditentukan oleh:
$$ P(\text{accept } S') = \begin{cases} 1, & \text{if } f(S') < f(S) \text{ (untuk masalah minimasi)} \\ \exp\left(\frac{f(S) - f(S')}{T}\right), & \text{if } f(S') \ge f(S) \end{cases} $$
Di mana $T$ adalah Suhu (*Temperature*).

### Parameter SA (Cooling Schedule):
1. **$T_0$ (Suhu Awal):** Harus cukup tinggi agar hampir semua solusi baru (baik atau buruk) diterima pada awalnya (eksplorasi tinggi).
2. **$\alpha$ (Cooling Rate):** Konstanta pendinginan (biasanya $0.8 \le \alpha \le 0.99$). Penurunan suhu pada iterasi $k$: $T_{k+1} = \alpha \cdot T_k$.
3. **L (Markov Chain Length):** Jumlah iterasi pada suhu yang sama sebelum suhu diturunkan.
4. **$T_{\text{final}}$ (Kriteria Berhenti):** Suhu minimum di mana algoritma berhenti dan membeku (*freeze*).

---

## 3. Tabu Search (TS)
Tabu Search, diperkenalkan oleh Fred Glover, adalah algoritma pencarian lokal berbasis memori. TS mengeksplorasi *neighborhood* (ruang tetangga) dari solusi saat ini dengan pergerakan (*moves*) seperti *Swap*, *Relocate*, atau *2-Opt*. 

Untuk mencegah algoritma kembali ke solusi yang baru saja dieksplorasi (mencegah siklus tanpa akhir), TS menggunakan **Tabu List** (Memori Jangka Pendek).

### Komponen Utama TS:
1. **Tabu List:** Daftar pergerakan atau solusi yang "dilarang" untuk beberapa iterasi ke depan (*Tabu Tenure*). Misalnya, jika node A baru saja dipindah dari Rute 1 ke Rute 2, maka memindahkannya kembali ke Rute 1 menjadi *Tabu* selama $L$ iterasi.
2. **Aspiration Criterion:** Aturan pengecualian yang memungkinkan pergerakan *Tabu* tetap dilakukan jika solusi yang dihasilkan ternyata jauh lebih baik daripada *Best Known Solution* sejauh ini.
3. **Intensification:** Memori jangka menengah yang mengarahkan pencarian ke wilayah ruang solusi yang terbukti menjanjikan.
4. **Diversification:** Memori jangka panjang yang memaksa algoritma untuk mengeksplorasi wilayah baru yang belum pernah dikunjungi untuk melarikan diri dari daerah tandus (local optima luas).

### Hibridisasi Metaheuristik:
Penelitian modern (seperti Madhani et al., 2024) menggabungkan algoritma:
- **ACO + TS (Ant Colony + Tabu Search):** ACO digunakan untuk eksplorasi rute global (konstruksi), kemudian TS bertindak sebagai *local search optimizer* untuk menyempurnakan rute tersebut.
- **Multi-Thread SA (Leelertkij et al., 2025):** Menjalankan beberapa *Markov Chains* secara paralel untuk memecahkan VRP Multi-Objektif (waktu tempuh vs prioritas).
