# 133. Cooperative Game Theory in SCM: Nucleolus, Core & Bankruptcy

## Konsep Dasar
Cooperative Game Theory memodelkan situasi di mana pemain (agents) dapat membentuk koalisi untuk mencapai payoff yang lebih besar daripada bertindak sendiri. Dalam Supply Chain Management, ini relevan untuk alokasi biaya/keuntungan kolaboratif (*cost/profit sharing*), stabilitas aliansi strategis, dan mekanisme pembagian risiko.

Berbeda dengan non-cooperative game theory (Nash equilibrium), fokus cooperative game adalah pada **stabilitas kelompok** dan **fairness axioms**.

## Formulasi Matematis

### Transferable Utility (TU) Game
Game $(N, v)$ dengan $N$ himpunan pemain dan $v: 2^N \to \mathbb{R}$ characteristic function, $v(\emptyset)=0$. Superadditivity: $v(S \cup T) \geq v(S) + v(T)$ untuk $S \cap T = \emptyset$.

### The Core
Himpunan alokasi yang stabil terhadap deviasi koalisi manapun:
$$ C(v) = \left\{ x \in \mathbb{R}^n : \sum_{i \in N} x_i = v(N), \quad \sum_{i \in S} x_i \geq v(S), \forall S \subset N \right\} $$
Core bisa kosong; keberadaan core menjamin tidak ada koalisi yang ingin menyimpang.

### Shapley Value
Alokasi unik yang memenuhi efisiensi, simetri, dummy player, dan additivity:
$$ \phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|!(n-|S|-1)!}{n!} [v(S \cup \{i\}) - v(S)] $$
Interpretasi: kontribusi marginal rata-rata pemain $i$ terhadap semua kemungkinan urutan pembentukan koalisi.

### Nucleolus
Alokasi yang meminimalkan *excess* terbesar secara lexicographic:
$$ e(S, x) = v(S) - \sum_{i \in S} x_i $$
$$ \nu(v) = \arg\min_x \text{lexmin} \left( \theta(e(S,x))_{S \subset N} \right) $$
Nucleolus selalu tunggal dan berada dalam core jika core tidak kosong. Lebih "adil" daripada Shapley dalam hal meminimalkan ketidakpuasan maksimal.

### Bankruptcy Problem
Pembagian estate $E$ di antara claimants dengan total claims $\sum d_i > E$. Aturan proporsional, constrained equal awards, Talmud rule, dll. Terkait erat dengan cooperative games via associated bankruptcy game.

## Aplikasi di Industrial Engineering
- **Joint Replenishment:** Alokasi ordering cost savings antar retailer dalam konsolidasi pembelian.
- **Collaborative Transportation:** Cost sharing dalam shared truckload/carrier alliances.
- **Inventory Pooling:** Risk pooling benefits allocation menggunakan Shapley/Nucleolus.
- **Carbon Credit Sharing:** Distribusi emisi savings dalam green SC partnerships.

## Referensi Terverifikasi
- Peleg, B., & Sudhölter, P. (2007). *Introduction to the Theory of Cooperative Games*. Springer.
- Branzei, R., Dimitrov, D., & Tijs, S. (2008). *Models in Cooperative Game Theory*. Springer.
- Fiestras-Janeiro, M. G., García-Jurado, I., & Mosquera, M. A. (2023). Cooperative game theory approaches in supply chain management: A systematic review. *European Journal of Operational Research*, 306(1), 1–19.
- Li, J., & Natarajan, K. (2024). Fair allocation of logistics collaboration surplus under uncertainty: A robust nucleolus approach. *Transportation Science*, 58(3), 712–734.

</content>