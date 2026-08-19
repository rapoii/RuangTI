# Module 192: PROMETHEE II & ELECTRE III Outranking Methods for Complex Industrial Decision-Making

## Overview
Non-compensatory and outranking Multi-Criteria Decision-Making (MCDM) methods: Preference Ranking Organization METHod for Enrichment Evaluation (PROMETHEE I & II) and Elimination and Choice Expressing Reality (ELECTRE III) with indifference ($q$), preference ($p$), and veto ($v$) thresholds.

## Mathematical Formulation
$$\pi(a, b) = \sum_{j=1}^k w_j P_j(a, b), \quad \Phi^+(a) = \dfrac{1}{n-1} \sum_{x \in A} \pi(a, x), \quad \Phi^-(a) = \dfrac{1}{n-1} \sum_{x \in A} \pi(x, a)$$
$$\Phi(a) = \Phi^+(a) - \Phi^-(a) \quad (\text{PROMETHEE II Net Outranking Flow})$$

## Industrial Case Study
Evaluasi dan pemilihan penyedia layanan logistik pihak ketiga (3PL) untuk distribusi farmasi berpendingin menggunakan PROMETHEE II dengan kriteria veto waktu tanggap.

## References
1. Brans, J. P., & De Smet, Y. (2016). PROMETHEE Methods. International Series in Operations Research & Management Science. Springer.
2. European Journal of Operational Research (2024).
