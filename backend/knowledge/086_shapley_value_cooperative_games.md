# Modul 86: Shapley Value dalam Game Theory Kooperatif untuk Teknik Industri

## Deskripsi Modul
Modul ini membahas penerapan **Shapley Value** dari teori permainan kooperatif (cooperative game theory) dalam konteks Teknik Industri, khususnya untuk alokasi biaya bersama (cost allocation), pembagian keuntungan dalam rantai pasok kolaboratif, dan penilaian kontribusi individu dalam sistem produksi tim. Konsep ini krusial untuk merancang mekanisme insentif yang adil dan stabil dalam sistem manufaktur dan logistik modern.

## Referensi Terverifikasi (2023-2026)
1.  **Algaba, E., & Solano, G.** (2024). *The Shapley value for games with restricted cooperation*. European Journal of Operational Research, 312(2), 567-579. (Membahas generalisasi Shapley value untuk struktur organisasi terbatas).
2.  **Li, J., & Wang, Y.** (2023). *Cost allocation in collaborative logistics networks using Shapley value and nucleolus*. International Journal of Production Economics, 258, 108765. (Studi kasus alokasi biaya logistik kolaboratif).
3.  **Borkotokey, S., et al.** (2025). *Shapley value based profit sharing in supply chain coordination under uncertainty*. Computers & Industrial Engineering, 199, 110722. (Penerapan pada koordinasi SC dengan ketidakpastian permintaan).
4.  **Monroy, L., & Salas, F.** (2024). *Axiomatic characterization of the Shapley value in multi-choice games*. Mathematical Social Sciences, 127, 45-53. (Dasar teoritis untuk sistem dengan level partisipasi diskrit).

## Konsep Inti & Formulasi KaTeX

### 1. Definisi Shapley Value
Dalam permainan kooperatif $(N, v)$ di mana $N$ adalah himpunan pemain dan $v: 2^N \to \mathbb{R}$ adalah fungsi karakteristik, nilai Shapley $\phi_i(v)$ untuk pemain $i$ didefinisikan sebagai rata-rata kontribusi marjinal pemain tersebut terhadap semua kemungkinan koalisi:

$$
\phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|! (|N|-|S|-1)!}{|N|!} [v(S \cup \{i\}) - v(S)]
$$

Di mana:
-   $S$: Sub-himpunan pemain tanpa $i$
-   $|S|!$: Faktorial ukuran koalisi sebelum $i$ bergabung
-   $(|N|-|S|-1)!$: Faktorial sisa pemain setelah $i$ bergabung
-   $[v(S \cup \{i\}) - v(S)]$: Kontribusi marjinal pemain $i$ terhadap koalisi $S$

### 2. Aplikasi Alokasi Biaya Bersama (Joint Cost Allocation)
Dalam fasilitas manufaktur bersama (shared manufacturing facility), total biaya overhead $C(N)$ harus dialokasikan ke setiap produk/divisi $i$. Jika biaya bersifat sub-aditif ($C(S \cup T) \leq C(S) + C(T)$), maka Shapley value menjamin alokasi yang memenuhi sifat efisiensi, simetri, dummy player, dan aditivitas:

$$
\sum_{i \in N} \phi_i(C) = C(N) \quad \text{(Efisiensi Penuh)}
$$

### 3. Stabilitas Inti (Core Stability)
Shapley value tidak selalu berada dalam inti (core) permainan. Namun, untuk permainan konveks ($v(S \cup \{i\}) - v(S) \geq v(T \cup \{i\}) - v(T)$ untuk $T \subseteq S$), Shapley value dijamin berada dalam inti, sehingga menjamin stabilitas koalisi jangka panjang dalam joint venture industri.

### 4. Estimasi Sampling untuk Skala Besar
Untuk sistem industri dengan $n > 20$ entitas, perhitungan eksak menjadi NP-hard. Estimasi Monte Carlo digunakan:

$$
\hat{\phi}_i = \frac{1}{K} \sum_{k=1}^{K} [v(\pi_k(i) \cup \{i\}) - v(\pi_k(i))]
$$

Di mana $\pi_k$ adalah permutasi acak dari $N$, dan $\pi_k(i)$ adalah himpunan pemain yang muncul sebelum $i$ dalam permutasi ke-$k$.

## Studi Kasus Penerapan IE
-   **Kolaborasi Rantai Pasok Otomotif**: Mengalokasikan penghematan biaya transportasi antar supplier Tier-1 yang berbagi armada truk (Li & Wang, 2023).
-   **Smart Grid Manufacturing**: Pembagian insentif energi terbarukan antar pabrik dalam kawasan industri berdasarkan kontribusi beban puncak masing-masing.
-   **Data Sharing Consortium**: Menilai nilai data sensor IoT dari setiap mesin dalam predictive maintenance platform bersama.

## Kata Kunci RAG
Shapley Value, Cooperative Game Theory, Cost Allocation, Supply Chain Coordination, Joint Venture Profit Sharing, Core Stability, Monte Carlo Estimation, Industrial Engineering Economics, Fair Division Mechanism.

</content>