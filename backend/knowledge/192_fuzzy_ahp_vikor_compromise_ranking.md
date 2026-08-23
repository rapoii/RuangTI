# Module 192: PROMETHEE II & ELECTRE III Outranking Methods for Complex Industrial Decision-Making

## Conceptual Framework
Outranking methods address MCDM problems where criteria are **non-compensatory**: a severe weakness on one criterion cannot be offset by strengths elsewhere (e.g., a logistics provider failing the cold-chain response-time requirement regardless of price advantage). PROMETHEE builds pairwise preference flows from criterion-wise preference functions; ELECTRE III extends this with indifference ($q_j$), preference ($p_j$), and **veto** ($v_j$) thresholds that formally block alternatives violating hard constraints. Compared to fully compensatory methods (weighted-sum, TOPSIS), outranking produces richer outputs: partial pre-orders (PROMETHEE I), complete rankings (PROMETHEE II), and robustness diagnostics via Gaia plane and stability intervals. VIKOR complements outranking by returning compromise solutions closest to the ideal point, $Q_i = \nu\,(R_i - R^*)/(R^- - R^*) + (1-\nu)\,(S_i - S^*)/(S^- - S^*)$, valuable when group consensus on weights is only partial.

## Mathematical Formulation
### PROMETHEE Preference Structure
For each criterion $j$, a generalized preference function $P_j(a,b) \in [0,1]$ maps deviation $d = f_j(a) - f_j(b)$ into preference degree (linear form with $q \le d \le p$ ramp):

$$\pi(a,b) = \sum_{j=1}^{k} w_j P_j(a,b)$$

Leaving and entering flows quantify global strength/weakness against all other actions:

$$\Phi^+(a) = \frac{1}{n-1}\sum_{x \in A}\pi(a,x), \qquad \Phi^-(a) = \frac{1}{n-1}\sum_{x \in A}\pi(x,a)$$

### PROMETHEE I & II Rankings
Partial preorder (I): $a$ outranks $b$ iff $\Phi^+(a) > \Phi^+(b)$ and $\Phi^-(a) < \Phi^-(b)$; incomparability signals genuine trade-offs. Complete net flow (II):

$$\Phi(a) = \Phi^+(a) - \Phi^-(a)$$

### ELECTRE III Concordance–Discordance
Credibility of the assertion "$a$ outranks $b$":

$$S(a,b) = C(a,b)\cdot \prod_{j \in \tilde{J}}\frac{1 - D_j(a,b)}{1 - C(a,b)}$$

where concordance $C(a,b) = \sum_j w_j c_j(a,b)$ uses soft thresholds ($c_j = 1$ if $f_j(a)-f_j(b) \ge p_j$; linear decay to $q_j$), and discordance $D_j(a,b)$ activates only beyond the veto threshold $v_j$. Distillation procedures then extract ascending/descending preorders.

## Solution Methods
- Threshold elicitation via decision-maker interviews or data-driven quantiles; PROMETHEE generalized preference functions (Usual, U-shape, V-shape, Level, Linear, Gaussian) are matched to criterion semantics.
- Weight sensitivity analysis: stability intervals per criterion weight; Gaia plane projection for conflict visualization among criteria.

## VIKOR Compromise Ranking (Multi-Criteria Optimization & Compromise Solution)

VIKOR (*VIseKriterijumska Optimizacija I Kompromisno Resenje*) extends the outranking toolkit with a formal compromise-ranking mechanism for **supplier selection, machine tool selection, and material choice** under conflicting criteria. For alternatives $a_i$ with normalized best $f_j^*$ and worst $f_j^-$ criterion values:

$$S_i = \sum_{j=1}^{k} w_j \frac{f_j^* - f_{ij}}{f_j^* - f_j^-}, \qquad R_i = \max_{j} \left( w_j \frac{f_j^* - f_{ij}}{f_j^* - f_j^-} \right)$$

where $S_i$ aggregates group utility and $R_i$ captures the worst individual regret. The compromise index

$$Q_i = \nu\,\frac{S_i - S^*}{S^- - S^*} + (1-\nu)\,\frac{R_i - R^*}{R^- - R^*}, \qquad \nu = 0.5$$

balances total utility ($\nu$) against individual regret ($1-\nu$). Acceptability conditions: (1) *Acceptable advantage* — $Q_2 - Q_1 \ge \frac{1}{n-1}$ (alternative 1 dominates); (2) *Acceptable stability* — alternative 1 must also rank first under both $S$ and $R$. When violated, VIKOR returns a compromise set $\{a_1, a_2, \dots\}$ rather than a single winner. In **fuzzy environments**, crisp ratings are replaced by TFN (triangular fuzzy numbers) $\tilde{f}_{ij} = (l, m, u)$ with defuzzification $\hat{f} = (l + 4m + u)/6$ before aggregation — the standard *Fuzzy VIKOR* pipeline used in green supplier selection studies (2023–2026). Related: Fuzzy AHP supplies the weight vector $w_j$ via Chang's extent analysis or geometric-mean defuzzification; PROMETHEE II provides a robustness cross-check on the final ranking.
- Group decision aggregation through criteria weights or PROMETHEE GDSS extensions.
- Monte Carlo perturbation of weights/thresholds to test rank robustness before commitment.

## Industrial Case Study
Evaluasi dan pemilihan penyedia layanan logistik pihak ketiga (3PL) untuk distribusi farmasi berpendingin menggunakan PROMETHEE II dengan kriteria veto waktu tanggap: alternatif dengan lead time tanggap > 4 jam didiskualifikasi meskipun skor biaya terbaik. Kriteria yang digunakan meliputi: biaya per shipment ($w = 0{,}25$), waktu tanggap darurat (veto pada 4 jam, $w = 0{,}30$), tingkat temperature excursion rate ($w = 0{,}25$), dan coverage jaringan cabang ($w = 0{,}20$). Analisis stabilitas menunjukkan ranking tahan terhadap variasi bobot hingga $\pm 15\%$. Hasil akhir menstabilkan kontrak multi-tahun pada 2 penyedia utama dan mengurangi risiko temperature excursion sebesar 37% dibanding seleksi berbasis harga tunggal.

## Related Modules
- **Module 125 (Kraljic + TOPSIS)** — compensatory counterpart within supplier selection.
- Module on Fuzzy AHP weighting — deriving $w_j$ under linguistic uncertainty.
- Module on Goal Programming — alternative with explicit aspiration levels.

## References
- Brans, J. P., & Vincke, P. (1985). A preference ranking organisation method: The PROMETHEE method. *Management Science*, 31(6), 647–656.
- Roy, B. (1991). The outranking approach and the foundations of ELECTRE methods. *Theory and Decision*, 31(1), 49–73.
- Brans, J. P., & De Smet, Y. (2016). PROMETHEE methods. In *Multiple Criteria Decision Analysis* (pp. 187–219). Springer.
- Corrente, S., et al. (2024). Robust ordinal regression for ELECTRE TRI with interacting criteria: Applications to industrial supplier evaluation. *European Journal of Operational Research*, 315(2), 512–528.
