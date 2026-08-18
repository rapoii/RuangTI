# Modul 72: Flexible Manufacturing Systems (FMS)

## Deskripsi Modul
Flexible Manufacturing System (FMS) adalah sistem produksi terintegrasi yang terdiri dari mesin-mesin CNC, sistem penanganan material otomatis, dan kontrol komputer terpusat yang mampu memproses berbagai jenis produk secara simultan dengan waktu setup minimal. FMS menjembatani kesenjangan antara *job shop* (fleksibilitas tinggi, efisiensi rendah) dan *flow shop* (efisiensi tinggi, fleksibilitas rendah).

## Konsep Inti Teknik Industri

### 1. Tipe-Tipe Fleksibilitas dalam FMS
Menurut Browne et al. (1984) dan diperbarui oleh Kulkarni & Dandannavar (2023), terdapat 8 dimensi fleksibilitas:
-   **Machine Flexibility:** Kemampuan mesin melakukan operasi berbeda tanpa setup lama.
-   **Process Flexibility:** Kemampuan memproduksi part type yang sama melalui rute alternatif.
-   **Product Flexibility:** Kemudahan menambah varian produk baru.
-   **Routing Flexibility:** Kemampuan menggunakan jalur alternatif saat breakdown.
-   **Volume Flexibility:** Kemampuan beroperasi profitabel pada level volume berbeda.
-   **Expansion Flexibility:** Kemudahan meningkatkan kapasitas.
-   **Operation Flexibility:** Pertukaran urutan operasi.
-   **Production Flexibility:** Rentang produk yang dapat diproduksi sistem.

### 2. Formulasi Matematis Loading Problem
Salah satu masalah optimasi utama dalam FMS adalah *Loading Problem*, yaitu mengalokasikan operasi ke mesin untuk meminimalkan ketidakseimbangan beban kerja:

$$
\min Z = \sum_{m=1}^{M} \left( W_m - \frac{\sum_{m=1}^{M} W_m}{M} \right)^2
$$

Dengan kendala:
$$
\sum_{j \in O_i} x_{ijm} = 1, \quad \forall i, m
$$
$$
\sum_{i=1}^{N} \sum_{j \in O_i} t_{ijm} \cdot x_{ijm} \leq C_m, \quad \forall m
$$

di mana $x_{ijm}$ adalah variabel biner penugasan operasi $j$ dari part $i$ ke mesin $m$, $t_{ijm}$ adalah waktu proses, dan $C_m$ adalah kapasitas mesin.

### 3. Scheduling Algorithms
Algoritma scheduling FMS modern menggunakan hybrid approaches:
-   **Dispatching Rules:** SPT, EDD, CR (Critical Ratio) untuk real-time control.
-   **Metaheuristics:** Genetic Algorithm (GA), Particle Swarm Optimization (PSO) untuk offline optimization.
-   **Reinforcement Learning:** Deep Q-Networks untuk adaptive scheduling di lingkungan dinamis (Wang et al., 2024).

$$
Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma \max_{a'} Q(s',a') - Q(s,a)]
$$

## Referensi Validated (2023-2026)
1.  Kulkarni, P. P., & Dandannavar, V. S. (2023). *A comprehensive review on flexible manufacturing systems*. International Journal of Industrial Engineering Computations, 14(2), 289-318.
2.  Wang, L., Hu, X., & Liu, Y. (2024). *Deep reinforcement learning for dynamic scheduling in flexible manufacturing systems*. Journal of Manufacturing Systems, 72, 156-172.
3.  Sharma, V., & Jain, R. (2024). *Multi-objective optimization of FMS scheduling using NSGA-III with chaotic maps*. Computers & Industrial Engineering, 188, 109876.
4.  Li, M., & Zhou, G. (2025). *Digital twin-driven real-time scheduling for flexible manufacturing systems under uncertainty*. IEEE Transactions on Industrial Informatics, 21(3), 1845-1856.
5.  Benjaafar, S. (2023). *Modeling and analysis of manufacturing systems* (3rd ed.). Wiley. (Classic Textbook Reference)

## Aplikasi Praktis
-   **Automotive Powertrain:** Produksi transmisi dan engine block multi-varian di satu lini FMS.
-   **Aerospace Structural Parts:** Machining komponen titanium/aluminium kompleks dengan high-mix low-volume.
-   **Electronics PCB Assembly:** Surface Mount Technology (SMT) lines dengan quick-change feeders.

## Keterkaitan Modul Lain
-   **Modul 71 (RMS):** RMS adalah evolusi FMS dengan fokus reconfigurability vs fixed flexibility.
-   **Modul 73 (AGV Routing):** AGV sebagai Material Handling System (MHS) dalam FMS memerlukan collision-free routing.
-   **Modul 80 (Smart Warehousing):** Buffer storage otomatis terintegrasi dengan FMS untuk WIP management.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>