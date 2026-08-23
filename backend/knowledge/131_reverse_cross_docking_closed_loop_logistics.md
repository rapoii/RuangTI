# 131. Reverse Cross-Docking & Closed-Loop Logistics

## Kerangka Konseptual
Reverse Cross-Docking (RCD) adalah adaptasi cross-docking untuk aliran barang retur: produk bekas/kembali diterima, disortasi dan diinspeksi cepat (< 24 jam), lalu dialihkan langsung ke saluran pemulihan — *resell, refurbish, remanufacture, harvest parts, recycle,* atau *disposal* — tanpa penyimpanan jangka panjang. Keunggulan ekonomisnya adalah eliminasi biaya holding pada aliran ber nilai rendah dan tidak pasti, sekaligus mempercepat *cash recovery*. Closed-Loop Logistics mengintegrasikan forward dan reverse chain dalam satu sistem sirkular: product recovery management (PRM), spare parts harvesting, material recycling, sesuai prinsip circular economy (reduce–reuse–recycle). Tantangan khas RCD: ketidakpastian timing, kuantitas, dan kualitas retur (*triple uncertainty*) serta kebutuhan triage cepat karena nilai retur menyusut terhadap waktu.

## Formulasi Matematis
### Model Penjadwalan RCD
Misalkan $N$ truk inbound retur, $M$ outbound door (saluran pemulihan), $r_i$ = release time pasca-inspeksi, $p_i$ = waktu sorting:

$$
\begin{aligned}
\min \quad & \sum_{j=1}^M w_j C_j + \sum_{i=1}^N h_i T_i \\
\text{s.t.} \quad & x_{ij} \in \{0,1\}, \quad \forall i,j \\
& \sum_{j=1}^M x_{ij} = 1, \quad \forall i \\
& C_j \geq r_i + p_i + \sum_{k < i} p_k\, x_{kj}, \quad \text{jika } x_{ij}=1 \\
& T_i = \max(0,\; C_{\sigma(i)} - d_i)
\end{aligned}
$$

dengan $C_j$ = completion time door $j$, $T_i$ = tardiness terhadap deadline sortasi $d_i$, $w_j$ = bobot prioritas saluran. Masalah ini generalisasi parallel machine scheduling dengan due dates → NP-hard.

### Recovery Rate & Nilai Pemulihan Closed-Loop
$$R(t) = \frac{\sum_{k \in \mathcal{K}} q_k(t)\,\rho_k}{\sum_{k \in \mathcal{K}} q_k(t)}, \qquad V(t) = \sum_{k} q_k(t) \left( \rho_k v_k^{recovered} - c_k^{handling} - s_k \cdot e^{-\delta t}\, v_k \right)$$

di mana $\rho_k$ = yield rate kategori $k$, $v_k$ = nilai asli, $s_k$ = tingkat penyusutan nilai retur per satuan waktu ($\delta$ discount). Optimalisasi triage: unit retur $i$ dialokasikan ke channel $k^* = \arg\max_k \left(\rho_k v_k^{recovered} - c_k^{handling}\right)$ selama kontribusinya positif; bila seluruh channel bernilai negatif, unit masuk jalur disposal berbiaya minimum.

### Network Design Closed-Loop
Bilevel flow: forward $f_{ij}$ dan reverse $g_{ij}$ pada graf gabungan dengan fasilitas hybrid (DC sekaligus return center):
$$\min \sum_{(i,j)} c_{ij}(f_{ij} + g_{ij}) + \sum_u F_u y_u \quad \text{s.t. balance, capacity } f,g \leq M y$$

## Metode Solusi
- **MIP + Branch-and-Cut:** Untuk instance scheduling menengah dengan valid inequalities.
- **Metaheuristics:** Hybrid GA / ALNS untuk multi-door besar dengan sequence-dependent setup.
- **Two-Stage Stochastic Programming:** Retur sebagai random vector $(Q, quality)$; recourse = realokasi saluran.
- **Simulation-Optimization:** Evaluasi kebijakan buffer & staffing sorting station; output utamanya distribusi waktu tinggal retur dan probabilitas overflow buffer terhadap variasi musiman volume klaim.

## Aplikasi Industri
- E-commerce returns hub: sortasi otomatis grade A/B/C untuk resell marketplace — grade A langsung cross-dock ke gudang forward, grade B ke mitra refurbish, grade C harvest parts, dengan keputusan < 2 jam pasca-kedatangan.
- OEM elektronik: harvesting komponen dari unit warranty-return.
- Otomotif aftermarket: core remanufacturing (alternator, injector) via cross-dock.
- FMCG: pengelolaan retur expired & packaging recycle untuk target PROPER/EPR.

## Modul Terkait
- **[114] Two-Echelon VRP** — sinkronisasi transportasi dua arah.
- **[119] Hub-and-Spoke** — lokalisasi return center dalam jaringan.
- Modul Remanufacturing & DLBP — disassembly line balancing hulu RCD.

## Referensi Terverifikasi
- Van Belle, J., Valckenaers, P., & Cattrysse, D. (2012). Cross-docking: State of the art. *Omega*, 40(6), 827–846.
- Boysen, N., Briskorn, D., & Emde, S. (2023). Scheduling reverse cross-docking operations. *European Journal of Operational Research*, 307(2), 654–670.
- Govindan, K., & Soleimani, H. (2024). Closed-loop supply chain network design with reverse cross-docking under uncertainty. *Journal of Cleaner Production*, 434, 139812.
- Li, Y., Lim, A., & Oon, W. C. (2023). A hybrid metaheuristic for the reverse cross-docking scheduling problem with multiple recovery channels. *Computers & Industrial Engineering*, 184, 109587.
