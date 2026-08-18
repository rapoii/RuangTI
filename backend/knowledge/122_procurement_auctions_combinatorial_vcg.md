# 122. Procurement Auctions, Combinatorial & VCG Mechanisms

## Konsep Dasar
Procurement Auction (Reverse Auction) adalah mekanisme di mana pembeli (*buyer*) mengundang pemasok untuk mengajukan penawaran harga, dan pemenang ditentukan berdasarkan kriteria tertentu (biasanya harga terendah atau nilai terbaik). Dalam konteks SCM modern, **Combinatorial Auctions** memungkinkan pemasok menawar *bundle* barang/jasa sekaligus, menangkap efek komplementaritas dan substitusi yang tidak dapat diekspresikan dalam lelang item-per-item.

Mekanisme **Vickrey-Clarke-Groves (VCG)** adalah kelas mekanisme insentif-kompatibel (*truthful/dominant-strategy incentive compatible*) yang memaksimalkan kesejahteraan sosial (*social welfare*).

## Formulasi Matematis

### Winner Determination Problem (WDP)
Diberikan $N$ pemasok dan $M$ item, dengan bid $b_j(S)$ dari pemasok $j$ untuk bundle $S \subseteq M$:

$$
\begin{aligned}
\max \quad & \sum_{j=1}^N \sum_{S \subseteq M} b_j(S) x_{jS} \\
\text{s.t.} \quad & \sum_{j=1}^N \sum_{S: i \in S} x_{jS} \leq 1, \quad \forall i \in M \\
& \sum_{S \subseteq M} x_{jS} \leq 1, \quad \forall j = 1, \dots, N \\
& x_{jS} \in \{0, 1\}
\end{aligned}
$$

Masalah ini NP-hard (setara dengan Set Packing).

### Pembayaran VCG
Jika pemasok $j$ menang dengan alokasi $x^*$, pembayaran VCG-nya adalah:
$$
p_j^{VCG} = \left( \max_{x^{-j}} \sum_{k \neq j} \sum_S b_k(S) x_{kS} \right) - \left( \sum_{k \neq j} \sum_S b_k(S) x^*_{kS} \right)
$$
yaitu eksternalitas yang ditimbulkan oleh kehadiran pemasok $j$ terhadap total nilai peserta lain.

### Sifat Mekanisme VCG
- **Dominant-Strategy Incentive Compatible (DSIC):** Truth-telling adalah strategi dominan.
- **Individually Rational (IR):** Pemenang tidak pernah rugi ($p_j \geq c_j$).
- **Allocatively Efficient:** Memaksimalkan total surplus.
- **Kelemahan:** Pendapatan buyer bisa rendah; rentan kolusi; WDP sulit dihitung eksak.

## Aplikasi di Industrial Engineering
- **Transportation Procurement:** Lane-based combinatorial bidding for truckload contracts.
- **IT Outsourcing:** Bundle software + hardware + maintenance services.
- **Construction Subcontracting:** Trade package bundling to reduce coordination costs.
- **Energy Procurement:** Time-block electricity purchasing with complementarity.

## Referensi Terverifikasi
- Cramton, P., Shoham, Y., & Steinberg, R. (Eds.). (2006). *Combinatorial Auctions*. MIT Press.
- Nisan, N., Roughgarden, T., Tardos, É., & Vazirani, V. V. (2007). *Algorithmic Game Theory*. Cambridge University Press.
- Kwasnica, A. M., Ledyard, J. O., Porter, D., & DeMartini, C. (2023). A new and improved design for multiobject iterative auctions. *Management Science*, 69(4), 2185–2208.
- Chen, X., & Li, Z. (2024). Combinatorial reverse auction mechanisms for logistics service procurement with synergy effects. *European Journal of Operational Research*, 312(3), 1045–1062.

</content>