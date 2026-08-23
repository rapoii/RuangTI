# 122. Procurement Auctions, Combinatorial & VCG Mechanisms

## Kerangka Konseptual
Procurement Auction (*reverse auction*) membalikkan struktur lelang konvensional: pembeli (*buyer*) mengundang pemasok bersaing menurunkan penawaran. Dalam pengadaan modern, item sering **saling terkait secara biaya** — biaya pemasok untuk lane transportasi A bergantung pada apakah ia juga memenangkan lane B yang berbagi backhaul. *Item-by-item auction* gagal menangkap efek komplementaritas ($v(S \cup T) > v(S) + v(T)$) maupun substitusi, sehingga **Combinatorial Auction** memungkinkan bid pada *bundle* $S \subseteq M$ sekaligus.

Mekanisme **Vickrey-Clarke-Groves (VCG)** adalah satu-satunya kelas mekanisme yang secara simultan mencapai *allocative efficiency* dan *dominant-strategy incentive compatibility* (truthfulness) dalam setting private-value umum — hasil dari teorema Green-Laffont. Desain mekanisme lain (first-price sealed-bid, ascending clock seperti RAD/CC-Award) mengorbankan truthfulness demi sifat praktis: pendapatan lebih tinggi bagi buyer dan resistensi kolusi.

## Formulasi Matematis
### Winner Determination Problem (WDP)
Diberikan $N$ pemasok dan $M$ item dengan bid $b_j(S)$ dari pemasok $j$ untuk bundle $S$:

$$
\begin{aligned}
\max \quad & \sum_{j=1}^N \sum_{S \subseteq M} b_j(S)\, x_{jS} \\
\text{s.t.} \quad & \sum_{j=1}^N \sum_{S : i \in S} x_{jS} \leq 1, \quad \forall i \in M \\
& \sum_{S \subseteq M} x_{jS} \leq 1, \quad \forall j = 1,\dots,N \\
& x_{jS} \in \{0, 1\}
\end{aligned}
$$

WDP ekuivalen **Weighted Set Packing** dan NP-hard; bahkan menghitung solusi feasible kedua terbaik pun NP-hard, sehingga pembayaran VCG tidak bisa diaproksimasi mudah. Dengan $|M|$ besar, enumerasi $2^{M}-1$ bundle tidak praktis → hanya bundle "menarik" yang dibolehkan di-submit (restricted bidding).

### Pembayaran VCG
Untuk pemenang $j$, pembayaran didefinisikan sebagai eksternalitas yang ia timbulkan:

$$p_j^{VCG} = \left( \max_{x^{-j}} \sum_{k \neq j} \sum_S b_k(S)\, x_{kS} \right) - \left( \sum_{k \neq j} \sum_S b_k(S)\, x^*_{kS} \right)$$

Pada reverse auction, buyer membayar $p_j \geq c_j$ sehingga surplus pemasok positif: $u_j = p_j - c_j$. Utilitas truth-telling $u_j(\text{true}) \geq u_j(\text{misreport})$ berlaku untuk semua strategi alternatif — definisi DSIC.

### Sifat Mekanisme
- **Dominant-Strategy Incentive Compatible (DSIC):** Truth-telling dominan tanpa asumsi rasionalitas lawan.
- **Individual Rationality:** $p_j \geq c_j$ untuk semua pemenang.
- **Allocative Efficiency:** Total social welfare $\sum_j v_j(x^*)$ maksimal.
- **Kelemahan:** Pendapatan buyer dapat sangat rendah; rentan *shill bidding* (identitas palsu); WDP eksak mahal secara komputasi — mitigasinya meliputi activity rules pada fase ascending, reserve pricing, dan bid screening otomatis.

## Metode Solusi
- **Branch-and-Price / Branch-on-Bids:** Kolom = bid; efektif saat jumlah bid jutaan.
- **Heuristic LP-based:** LP relaxation + rounding untuk upper bound cepat pada instance industri besar.
- **Iterative Auction Design:** Clock-proxy auction menggabungkan fase ascending dan sealed-bid untuk mengekspose informasi valuasi secara bertahap.
- **ML-assisted Bid Screening:** Deteksi anomali pola kolusi via clustering pada histori bid.

## Aplikasi Industri
- **Transportation Procurement:** Lane-based combinatorial bidding untuk kontrak truckload tahunan (praktik umum 3PL & retail).
- **IT Outsourcing:** Bundling software + hardware + maintenance dengan sinergi integrasi.
- **Construction Subcontracting:** Trade package bundling untuk mereduksi koordinasi antar subkontraktor.
- **Energy Procurement:** Pembelian blok waktu listrik dengan komplementaritas antar periode peak/base load.

## Modul Terkait
- **[125] Strategic Sourcing & Kraljic Matrix** — kapan lelang kombinasi layak dibanding negosiasi partnership (kuadran Leverage).
- Modul Game Theory & Mechanism Design — fondasi teoretis incentive compatibility.
- Modul Supplier Selection MCDA — kriteria non-harga pasca-lelang.

## Referensi Terverifikasi
- Cramton, P., Shoham, Y., & Steinberg, R. (Eds.). (2006). *Combinatorial Auctions*. MIT Press.
- Krishna, V. (2009). *Auction Theory* (2nd ed.). Academic Press.
- Kwasnica, A. M., Ledyard, J. O., Porter, D., & DeMartini, C. (2023). A new and improved design for multiobject iterative auctions. *Management Science*, 69(4), 2185–2208.
- Chen, X., & Li, Z. (2024). Combinatorial reverse auction mechanisms for logistics service procurement with synergy effects. *European Journal of Operational Research*, 312(3), 1045–1062.
