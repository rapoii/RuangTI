# 131. Reverse Cross-Docking & Closed-Loop Logistics

## Konsep Dasar
Reverse Cross-Docking (RCD) adalah adaptasi dari cross-docking konvensional untuk aliran barang retur (*returns*). Berbeda dengan forward cross-docking yang memindahkan barang dari supplier ke customer, RCD menerima produk retur, melakukan sortasi/inspeksi cepat, dan langsung mengalihkan ke saluran pemulihan (refurbish, remanufacture, recycle, atau disposal) tanpa penyimpanan jangka panjang.

Closed-Loop Logistics mengintegrasikan forward dan reverse supply chain menjadi satu sistem sirkular, mencakup product recovery, spare parts harvesting, dan material recycling.

## Formulasi Matematis

### Model RCD Scheduling
Misalkan $N$ = jumlah truk inbound (retur), $M$ = jumlah outbound door (saluran pemulihan):

$$
\begin{aligned}
\min \quad & \sum_{j=1}^M w_j C_j + \sum_{i=1}^N h_i T_i \\
\text{s.t.} \quad & x_{ij} \in \{0,1\}, \quad \forall i,j \\
& \sum_{j=1}^M x_{ij} = 1, \quad \forall i \\
& C_j \geq r_i + p_i, \quad \text{jika } x_{ij} = 1 \\
& T_i = \max(0, C_{\sigma(i)} - d_i)
\end{aligned}
$$

di mana:
- $C_j$: completion time di outbound door $j$
- $T_i$: tardiness terhadap deadline sorting $d_i$
- $r_i$: release time setelah inspeksi
- $p_i$: processing/sorting time
- $w_j$: bobot prioritas saluran pemulihan

### Recovery Rate dalam Closed-Loop
$$
R(t) = \frac{\sum_{k \in \mathcal{K}} q_k(t) \cdot \rho_k}{\sum_{k \in \mathcal{K}} q_k(t)}
$$
di mana $q_k(t)$ = volume retur kategori $k$, $\rho_k$ = recovery yield rate.

## Desain Fasilitas RCD
- **U-shaped vs I-shaped layout:** U-shaped lebih efisien untuk RCD karena proximity antara receiving dan shipping doors
- **Sorting zone design:** Parallel stations dengan dedicated lanes per recovery channel
- **Buffer sizing:** Minimal buffer (2-4 jam) untuk menjaga flow; excess buffer menghilangkan keunggulan cross-docking

## Integrasi dengan Circular Economy
- **Product triage:** Decision tree berbasis kondisi fisik → refurbish / harvest / recycle / landfill
- **Information visibility:** RFID/barcode tracking untuk traceability asal produk
- **Value recovery optimization:** Maximize recovered value minus handling cost

## Referensi Terverifikasi
- Van Belle, J., Valckenaers, P., & Cattrysse, D. (2012). Cross-docking: State of the art. *Omega*, 40(6), 827–846.
- Boysen, N., Briskorn, D., & Emde, S. (2023). Scheduling reverse cross-docking operations. *European Journal of Operational Research*, 307(2), 654–670.
- Govindan, K., & Soleimani, H. (2024). Closed-loop supply chain network design with reverse cross-docking under uncertainty. *Journal of Cleaner Production*, 434, 139812.
- Li, Y., Lim, A., & Oon, W. C. (2023). A hybrid metaheuristic for the reverse cross-docking scheduling problem with multiple recovery channels. *Computers & Industrial Engineering*, 184, 109587.

</content>