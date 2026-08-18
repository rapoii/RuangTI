# 137. Flexible Job-Shop Scheduling Problem (FJSSP) dengan Setup Times

## Deskripsi Modul
Modul ini membahas Flexible Job-Shop Scheduling Problem (FJSSP), varian scheduling di mana setiap operasi dapat diproses pada beberapa mesin alternatif dengan waktu proses dan setup yang berbeda. FJSSP merupakan generalisasi dari classical job-shop yang lebih merepresentasikan kondisi manufaktur modern dengan fleksibilitas mesin dan sequence-dependent setup times.

## Konsep Inti

### 1. Definisi FJSSP
FJSSP didefinisikan sebagai penugasan $n$ jobs ke $m$ mesin di mana setiap job $j$ memiliki urutan operasi $\{O_{j1}, O_{j2}, ..., O_{jn_j}\}$, dan setiap operasi $O_{jk}$ dapat diproses pada subset mesin $M_{jk} \subseteq M$ dengan waktu proses $p_{jkm}$ yang bergantung pada mesin yang dipilih.

**Karakteristik Utama:**
- **Machine Flexibility**: Setiap operasi memiliki alternatif mesin
- **Sequence-Dependent Setup Times**: Waktu setup $s_{ijk}$ bergantung pada job sebelumnya
- **Multi-objective**: Minimasi makespan, total tardiness, atau biaya setup

### 2. Formulasi Matematis FJSSP

**Notasi:**
- $J = \{1, 2, ..., n\}$: himpunan jobs
- $M = \{1, 2, ..., m\}$: himpunan mesin
- $O_j$: himpunan operasi job $j$
- $M_{jk}$: subset mesin yang dapat memproses operasi $k$ dari job $j$
- $p_{jkm}$: waktu proses operasi $O_{jk}$ pada mesin $m$
- $s_{ijm}$: setup time dari job $i$ ke job $j$ pada mesin $m$

**Decision Variables:**
$$x_{jkm} = \begin{cases} 1 & \text{jika operasi } O_{jk} \text{ ditugaskan ke mesin } m \\ 0 & \text{otherwise} \end{cases}$$

$$y_{ijk} = \begin{cases} 1 & \text{jika operasi } O_{ik} \text{ mendahului } O_{jk} \text{ pada mesin yang sama} \\ 0 & \text{otherwise} \end{cases}$$

**Objective Function (Minimize Makespan):**
$$\min C_{max} = \min \max_{j,k} \{C_{jk}\}$$

**Constraints:**
1. **Machine Assignment**: $\sum_{m \in M_{jk}} x_{jkm} = 1, \quad \forall j, k$
2. **Precedence**: $C_{jk} \geq C_{j(k-1)} + p_{jkm} \cdot x_{jkm}, \quad \forall j, k > 1$
3. **Machine Capacity**: $C_{jk} \geq C_{im} + s_{ijm} + p_{jkm} - L(1 - y_{ijk}), \quad \forall i,j,k,m$
4. **Disjunctive**: $y_{ijk} + y_{jik} = 1, \quad \forall i \neq j$

di mana $L$ adalah bilangan besar (big-M).

### 3. Sequence-Dependent Setup Times

Setup times dalam FJSSP diklasifikasikan menjadi:
- **Anticipatory Setup**: Dapat dilakukan sebelum job tiba
- **Non-anticipatory Setup**: Harus menunggu job tersedia
- **Separable vs Non-separable**: Apakah setup dapat tumpang tindih dengan proses

**Model Setup Time:**
$$s_{ijm} = f(\text{family}_i, \text{family}_j, \text{tooling}_m)$$

Untuk family-based setup:
$$s_{ijm} = \begin{cases} s^{minor} & \text{jika } \text{family}_i = \text{family}_j \\ s^{major} & \text{jika } \text{family}_i \neq \text{family}_j \end{cases}$$

dengan $s^{major} \gg s^{minor}$.

### 4. Metode Solusi

#### A. Dispatching Rules dengan Setup Awareness
- **SST (Shortest Setup Time)**: Pilih job dengan setup terpendek
- **ATCS (Apparent Tardiness Cost with Setups)**: 
  $$I_{ij} = \frac{w_j}{p_j} \exp\left(-\frac{\max(d_j - C_i - p_j, 0)}{k_1 \bar{p}}\right) \exp\left(-\frac{s_{ij}}{k_2 \bar{s}}\right)$$

#### B. Metaheuristics untuk FJSSP
- **Genetic Algorithm**: Chromosome encoding = (machine assignment, operation sequence)
- **Tabu Search**: Neighborhood = swap operations, reassign machines
- **Hybrid Approaches**: GA + local search untuk machine assignment refinement

#### C. Constraint Programming (CP)
CP efektif untuk FJSSP karena kemampuan menangani disjunctive constraints secara native:
$$\text{alternative}(O_{jk}, \{I_{jkm} | m \in M_{jk}\})$$
$$\text{noOverlap}(\{I_{jkm} | j,k \text{ assigned to } m\}, s_{ijm})$$

### 5. Benchmark Instances & Performance Metrics

**Benchmark Sets:**
- **Brandimarte (1993)**: 10 instances, 10-20 jobs, 5-15 mesin
- **Barnes & Chambers (1998)**: Extended dengan setup times
- **Kacem et al. (2002)**: Multi-objective FJSSP instances

**Metrics:**
- Makespan ($C_{max}$)
- Total Weighted Tardiness ($\sum w_j T_j$)
- Machine Utilization Balance
- Setup Time Ratio: $\frac{\sum s_{ijm}}{C_{max}}$

## Studi Kasus Implementasi

### Semiconductor Wafer Fabrication
Wafer fab memiliki karakteristik FJSSP ekstrem:
- 300+ operasi per lot
- Re-entrant flows (kunjungan berulang ke mesin sama)
- Sequence-dependent setups berdasarkan product family dan reticle
- Batch processing pada diffusion/implant tools

**Hasil Implementasi (Intel, 2023):**
- Hybrid CP-GA mengurangi cycle time 18%
- Setup optimization menghemat 12% capacity
- On-time delivery meningkat dari 82% ke 94%

## Referensi

### Textbooks
1. Pinedo, M. L. (2022). *Scheduling: Theory, Algorithms, and Systems* (6th ed.). Springer.
2. Blazewicz, J., Ecker, K. H., Pesch, E., Schmidt, G., & Sterna, M. (2019). *Handbook on Scheduling: From Methods to Models*. Springer.

### Journal Articles (2023-2026)
1. Zhang, Y., Wang, L., & Li, X. (2024). Deep reinforcement learning for flexible job-shop scheduling with sequence-dependent setup times. *European Journal of Operational Research*, 312(2), 567-582.
2. Kucharska, E., & Bocewicz, G. (2023). Constraint programming approach to flexible job shop scheduling with setup times. *Computers & Industrial Engineering*, 185, 109678.
3. Luo, S., Zhang, L., & Fan, Y. (2024). Hybrid genetic algorithm with tabu search for multi-objective flexible job shop scheduling considering setup energy consumption. *Journal of Manufacturing Systems*, 72, 234-248.
4. Demir, Y., & İşleyen, S. K. (2023). Mathematical models and metaheuristics for flexible job shop scheduling problem with sequence-dependent setup times. *Applied Soft Computing*, 143, 110389.
5. Chen, R., Yang, B., & Liang, Y. (2025). Reinforcement learning-based dispatching rules for dynamic flexible job shop scheduling with family setups. *International Journal of Production Economics*, 279, 109456.

## Latihan Soal

1. Sebuah FJSSP memiliki 4 jobs dan 3 mesin. Job 1 memiliki 3 operasi dengan alternatif mesin: $O_{11} \in \{M1, M2\}$, $O_{12} \in \{M2, M3\}$, $O_{13} \in \{M1, M3\}$. Setup times bersifat family-dependent dengan $s^{minor}=5$, $s^{major}=20$. Buat model CP lengkap untuk masalah ini.

2. Bandingkan performa ATCS rule dengan SST rule pada instance FJSSP dengan 20 jobs dan tight due dates. Jelaskan mengapa ATCS umumnya superior.

3. Rancang chromosome representation untuk GA yang menyelesaikan FJSSP dengan setup times. Jelaskan crossover dan mutation operators yang menjaga feasibility.

</content>