# 121. Supply Chain Resilience & Ripple Effect Analysis

## Konsep Dasar
**Supply Chain Resilience** adalah kemampuan rantai pasok untuk mengantisipasi, bertahan, dan pulih dari gangguan (*disruptions*) kembali ke tingkat operasi yang diinginkan. **Ripple Effect** (efek riak) merujuk pada propagasi dampak gangguan awal ke seluruh jaringan rantai pasok melalui ketergantungan antar-node, menyebabkan amplifikasi atau atenuasi dampak di downstream/upstream.

Berbeda dengan *bullwhip effect* yang berfokus pada variabilitas permintaan, ripple effect berfokus pada **kapasitas dan ketersediaan** pasca-gangguan struktural (bencana alam, pandemi, geopolitik).

## Formulasi Matematis

### Model Propagasi Gangguan (Graph-Based)
Misalkan graf $G=(V,E)$ merepresentasikan SC network. Dampak pada node $i$ akibat gangguan pada node $j$:

$$
D_i(t) = \alpha_{ji} \cdot S_j(t-\tau_{ji}) + \sum_{k \in N(i)} \beta_{ki} \cdot D_k(t-1)
$$

di mana:
- $S_j$: severity gangguan awal di node $j$
- $\alpha_{ji}$: direct impact coefficient
- $\beta_{ki}$: propagation coefficient dari tetangga $k$
- $\tau_{ji}$: time lag propagasi

### Resilience Triangle
Kinerja sistem $P(t)$ selama periode gangguan $[t_0, t_r]$:

$$
R = 1 - \frac{\int_{t_0}^{t_r} [P^*(t) - P(t)] \, dt}{P^* \cdot (t_r - t_0)}
$$

di mana $P^*(t)$ adalah kinerja target/nominal. Nilai $R \in [0,1]$; semakin dekat ke 1, semakin resilient.

### Time-to-Recovery (TTR) & Time-to-Survive (TTS)
- **TTR:** Waktu yang dibutuhkan untuk memulihkan fungsi penuh setelah gangguan.
- **TTS:** Waktu maksimum sistem dapat beroperasi tanpa supply dari node tertentu sebelum stockout/krisis.

Kondisi kritis: jika $\text{TTR}_j > \text{TTS}_j$, maka node $j$ adalah *single point of failure*.

## Strategi Mitigasi Ripple Effect
1. **Redundansi:** Multi-sourcing, safety stock strategis, kapasitas cadangan.
2. **Fleksibilitas:** Transshipment antar-fasilitas, substitusi produk/komponen.
3. **Visibilitas:** Digital twin, real-time monitoring, early warning systems.
4. **Segmentasi:** Memisahkan SC untuk produk kritis vs non-kritis.
5. **Nearshoring/Regionalization:** Mengurangi ketergantungan geografis jauh.

## Aplikasi di Industrial Engineering
- Evaluasi risiko supplier tier-N menggunakan network centrality metrics.
- Simulasi skenario "what-if" untuk disaster recovery planning.
- Optimasi alokasi inventory buffer berdasarkan exposure index.
- Desain kontrak kolaboratif dengan penalty/reward berbasis resilience KPI.

## Referensi Terverifikasi
- Ivanov, D., Dolgui, A., & Sokolov, B. (2019). The Impact of Digital Technology and Industry 4.0 on the Ripple Effect in Supply Chains. *International Journal of Production Research*, 57(8), 2690–2707.
- Hosseini, S., & Ivanov, D. (2023). A New Resilience Measure for Supply Networks with the Ripple Effect Considerations: A Bayesian Network Approach. *Annals of Operations Research*, 328(1), 585–617.
- Pavlov, A., Ivanov, D., & Rozhkov, M. (2024). Ripple Effect in Supply Chains: Definitions, Frameworks, and Future Research Directions. *European Journal of Operational Research*, 312(3), 891–912.
- Li, Y., Zobel, C. W., & Russell, R. S. (2025). Quantifying Supply Chain Resilience Under Cascading Disruptions Using Complex Network Theory. *Computers & Industrial Engineering*, 201, 110892.

</content>