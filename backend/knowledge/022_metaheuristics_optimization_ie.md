# Modul Riset Ilmiah: Algoritma Metaheuristik & Optimasi Sistem Industri
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Goldberg, D. E. (1989). *Genetic Algorithms in Search, Optimization, and Machine Learning*. Addison-Wesley. ISBN: 978-0201157673.
- Kennedy, J., & Eberhart, R. (1995). *Particle swarm optimization*. Proceedings of ICNN'95 - International Conference on Neural Networks, IEEE, 4, 1942-1948. DOI: [10.1109/ICNN.1995.488968](https://doi.org/10.1109/ICNN.1995.488968).
- Glover, F. (1986). *Future paths for integer programming and links to artificial intelligence*. Computers & Operations Research, 13(5), 533-549. (Tabu Search Foundation).
- Kirkpatrick, S., Gelatt, C. D., & Vecchi, M. P. (1983). *Optimization by simulated annealing*. Science, 220(4598), 671-680.

---

## 1. Peran Metaheuristik dalam Masalah NP-Hard Teknik Industri
Banyak permasalahan optimasi teknik industri berskala besar (Traveling Salesman Problem - TSP, Vehicle Routing Problem - VRP, Job Shop Scheduling Problem - JSSP, dan Facility Layout Problem) masuk ke dalam kategori **NP-Hard**—di mana metode analitik eksak (seperti Branch and Bound atau Simpleks) membutuhkan waktu komputasi eksponensial $O(2^n)$ atau $O(n!)$ yang mustahil diselesaikan secara praktis pada skala pabrik riil.

Metaheuristik memberikan solusi mendekati optimal (*near-optimal solutions*) dalam waktu komputasi yang sangat efisien dengan menyeimbangkan **Eksplorasi (Diversifikasi ruang pencarian)** dan **Eksploitasi (Intensifikasi di sekitar solusi terbaik)**.

---

## 2. Algoritma Genetika (Genetic Algorithm - GA)
Terinspirasi dari seleksi alam Darwin dan genetika biologi:
1. **Inisialisasi Populasi:** Membangkitkan kumpulan kromosom solusi acak (misal: permutasi urutan job).
2. **Evaluasi Nilai Fitness:** Menghitung fungsi tujuan $f(x)$ (misal: $\text{Fitness} = \frac{1}{\text{Makespan}}$).
3. **Seleksi Orang Tua (Parent Selection):**
   - *Roulette Wheel Selection:* Probabilitas terpilih sebanding dengan nilai fitness:
     $$P_i = \frac{\text{Fitness}_i}{\sum_{j=1}^N \text{Fitness}_j}$$
   - *Tournament Selection:* Mengadu $k$ individu acak dan memilih yang terbaik.
4. **Crossover (Pindah Silang):** Menggabungkan gen dari dua orang tua untuk membentuk keturunan (*Order Crossover - OX* atau *Partially Mapped Crossover - PMX* untuk masalah permutasi).
5. **Mutasi (Mutation):** Membalik atau menukar gen secara acak dengan probabilitas kecil ($P_m \approx 0.01 - 0.05$) untuk mencegah terjebak di *local optimum* (*Swap Mutation / Inversion Mutation*).

---

## 3. Particle Swarm Optimization (PSO)
Terinspirasi dari perilaku kawanan burung (*flock of birds*) atau ikan yang bergerak mencari sumber makanan. Setiap solusi direpresentasikan sebagai "Partikel" yang memiliki posisi $\mathbf{x}_i$ dan kecepatan $\mathbf{v}_i$.

### Persamaan Pembaruan Posisi & Kecepatan Partikel:
$$\mathbf{v}_i^{(t+1)} = w \mathbf{v}_i^{(t)} + c_1 r_1 \left( \mathbf{pbest}_i - \mathbf{x}_i^{(t)} \right) + c_2 r_2 \left( \mathbf{gbest} - \mathbf{x}_i^{(t)} \right)$$
$$\mathbf{x}_i^{(t+1)} = \mathbf{x}_i^{(t)} + \mathbf{v}_i^{(t+1)}$$
- $w =$ *Inertia Weight* (Bobot kelembaman kecepatan sebelumnya).
- $c_1 =$ *Cognitive Parameter* (Daya tarik menuju memori posisi terbaik individu $\mathbf{pbest}_i$).
- $c_2 =$ *Social Parameter* (Daya tarik menuju posisi terbaik seluruh kawanan $\mathbf{gbest}$).
- $r_1, r_2 =$ Angka acak uniform dalam interval $[0, 1]$.

---

## 4. Simulated Annealing (SA) & Tabu Search (TS)
- **Simulated Annealing:** Meniru proses pendinginan logam panas secara perlahan. Menerima solusi yang lebih buruk dengan probabilitas Boltzmann:
  $$P(\text{accept}) = \exp\left( -\frac{\Delta E}{T} \right)$$
  *(Memungkinkan algoritma melompat keluar dari jebakan lembah lokal optimum).*
- **Tabu Search:** Menggunakan memori jangka pendek (*Tabu List*) untuk melarang algoritma mengunjungi kembali solusi yang baru saja dieksplorasi guna mencegah perulangan siklus (*cycling*).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
