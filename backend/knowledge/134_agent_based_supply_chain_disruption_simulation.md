# 134. Agent-Based Simulation for SC Disruptions

## Konsep Dasar
Agent-Based Modeling and Simulation (ABMS) adalah pendekatan komputasi bottom-up di mana entitas otonom (*agents*) berinteraksi satu sama lain dan dengan lingkungan berdasarkan aturan perilaku lokal. Dalam konteks Supply Chain, ABMS digunakan untuk memodelkan **fenomena emergent** seperti bullwhip effect, cascade failures, dan adaptasi terhadap disruption yang tidak dapat ditangkap oleh model analitik agregat atau discrete-event simulation tradisional.

Setiap agent (supplier, manufacturer, distributor, retailer) memiliki state internal, memori, dan kemampuan pengambilan keputusan independen, memungkinkan simulasi perilaku heterogen dan bounded rationality.

## Arsitektur Model ABM untuk Supply Chain

### Komponen Agent
$$
\text{Agent}_i = \langle S_i, A_i, R_i, B_i, C_i \rangle
$$
- $S_i$: State variables (inventory level, capacity, financial health)
- $A_i$: Action set (order quantity, price adjustment, supplier switching)
- $R_i$: Rules/behavior logic (reorder policy, risk tolerance)
- $B_i$: Beliefs/perception of environment
- $C_i$: Communication protocol with other agents

### Interaksi & Emergence
Perilaku makro supply chain muncul dari interaksi mikro:
$$
Y_{system}(t) = f(\{a_i(t)\}_{i \in N}, E(t))
$$
di mana $Y_{system}$ adalah performa sistemik (service level, total cost), $a_i$ adalah aksi agent $i$, dan $E$ adalah kondisi lingkungan (disruption, demand shock).

## Pemodelan Disruption

### Jenis Disruption dalam ABM
- **Supply Shock:** Supplier agent gagal mengirim (probability $p_{fail}$)
- **Demand Surge:** Retailer agents mengalami lonjakan permintaan mendadak
- **Information Distortion:** Delay/distorsi sinyal pesanan (bullwhip)
- **Network Reconfiguration:** Agent mencari alternatif rute/supplier secara dinamis

### Resilience Metrics dari Simulasi
$$
\begin{aligned}
\text{Time-to-Recover} &= \min\{t : Y(t) \geq Y_{target}\} - t_{disruption} \\
\text{Performance Loss} &= \int_{t_d}^{t_r} (Y_{normal} - Y(t)) dt \\
\text{Adaptation Rate} &= \frac{\Delta \text{Strategy}}{\Delta t} \bigg|_{post-disruption}
\end{aligned}
$$

## Platform & Implementasi
- **AnyLogic:** Multi-method (ABM + DES + SD), Java-based
- **NetLogo:** Rapid prototyping, educational
- **Mesa (Python):** Open-source, integrasi ML/data science
- **GAMA:** Spatially explicit, GIS integration

## Validasi & Verifikasi
- **Face Validation:** Expert review of agent behavior rules
- **Historical Fit:** Kalibrasi parameter terhadap data riil disruption events
- **Sensitivity Analysis:** Morris method atau Sobol indices untuk identifikasi driver kritis
- **Pattern Matching:** Membandingkan emergent patterns dengan literatur empiris

## Referensi Terverifikasi
- Macal, C. M., & North, M. J. (2010). Tutorial on agent-based modelling and simulation. *Journal of Simulation*, 4(3), 151–162.
- Ivanov, D., Dolgui, A., & Sokolov, B. (2023). The impact of digital technology and Industry 4.0 on the ripple effect in supply chains: A simulation study. *International Journal of Production Research*, 61(8), 2650–2672.
- Ghadge, A., Kamble, S., & Seuring, S. (2024). Agent-based modeling for supply chain resilience: A systematic review and future research agenda. *Computers & Industrial Engineering*, 190, 110089.
- Li, Z., & Wang, Y. (2025). Multi-agent reinforcement learning for adaptive supply chain disruption management under uncertainty. *European Journal of Operational Research*, 318(2), 445–463.

</content>