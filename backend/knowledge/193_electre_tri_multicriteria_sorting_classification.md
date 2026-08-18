# Module 193: ELECTRE TRI for Multi-Criteria Supplier/Project Sorting

## 1. Introduction to Multi-Criteria Sorting in Industrial Engineering

Industrial Engineering (IE) decisions frequently involve **sorting** rather than ranking. In supplier selection, technology investment, or project prioritization, we often classify alternatives into predefined ordered categories rather than assigning arbitrary ranks. The **ELECTRE TRI** (ELimination Et Choix Traduisant la REalité) method, developed by Bernard Roy in 1968 and refined in the 1990s, is the most widely used outranking-based sorting method in IE.

ELECTRE TRI is particularly suited for industrial applications because:
-   It explicitly models **indifference, preference, and veto thresholds** to handle uncertainty and decision-maker preferences.
-   It works with **incommensurable criteria** (e.g., cost vs. quality vs. sustainability).
-   It produces **clear, auditable classifications** suitable for risk-averse industrial environments.
-   It is implemented in professional software (e.g., PROMCALC, DECISION LAB) and taught in industrial engineering curricula worldwide.

## 2. Mathematical Formulation of ELECTRE TRI

### 2.1 Basic Concepts

For a set of $n$ alternatives $A = \{A_1, A_2, \dots, A_m\}$ and $k$ criteria $C = \{C_1, C_2, \dots, C_k\}$, ELECTRE TRI classifies alternatives into ordered categories $C_1 \succ C_2 \succ \dots \succ C_q$ (e.g., "Excellent", "Good", "Acceptable", "Poor").

For each alternative $A_i$ and category $C_q$, define:
-   $a_i^q$: outranking degree of $A_i$ over the best element in category $C_q$
-   $b_i^q$: outranking degree of $A_i$ under the worst element in category $C_q$

The alternative $A_i$ is assigned to category $C_q$ if:
$$
a_i^q \geq \lambda \quad \text{and} \quad b_i^q \leq \lambda
$$
Where $\lambda$ is the **cutting level** (typically 0.5–0.7).

### 2.2 Concordance and Discordance Indices

**Concordance Index** ($c_i^q$):
Measures the degree of agreement among criteria that $A_i$ is at least as good as the best in $C_q$:
$$
c_i^q = \frac{\sum_{j \in J_1^q} w_j}{\sum_{j=1}^k w_j}
$$
Where $J_1^q = \{j \mid g_j(A_i) \geq g_j(a^q)\}$ ($a^q$ = best element in $C_q$)

**Discordance Index** ($d_i^q$):
Measures the degree of disagreement (veto) for any criterion:
$$
d_i^q = \max \left[ 0, \frac{g_j(a^q) - g_j(A_i)}{g_j(a^q) - g_j(a^{q-1})} \right]
$$
Where $a^{q-1}$ = worst element in $C_q$, and $g_j$ are the performance functions (often normalized to [0,1]).

### 2.3 Credibility of Outranking
The final credibility of outranking $A_i$ over category $C_q$ is:
$$
\sigma_i^q = c_i^q \quad \text{if } d_i^q \leq c_i^q
$$
$$
\sigma_i^q = \frac{c_i^q (1 - d_i^q)}{1 - c_i^q d_i^q} \quad \text{if } d_i^q > c_i^q
$$
This formula prevents vetoed outrankings.

## 3. Thresholds and Weights

### 3.1 Weighting Criteria
Weights $w_j$ (usually obtained via AHP or Fuzzy AHP) represent the relative importance of criteria. They must satisfy:
$$
\sum_{j=1}^k w_j = 1, \quad w_j \geq 0
$$

### 3.2 Indifference, Preference, and Veto Thresholds
-   **Indifference threshold** ($q_j$): $g_j(A) = g_j(B)$ if $|g_j(A) - g_j(B)| \leq q_j$
-   **Preference threshold** ($p_j$): $g_j(A) \geq g_j(B) + p_j$ implies strict preference
-   **Veto threshold** ($v_j$): If $g_j(A) - g_j(B) > v_j$, the outranking is vetoed regardless of concordance

These thresholds allow the decision maker to model realistic industrial judgment.

## 4. Practical Implementation Workflow for IE

1.  **Define Categories** ($C_1, C_2, \dots, C_q$) and assign reference profiles $a^q$.
2.  **Normalize performance matrix** $g_j(A_i)$ to [0,1] range.
3.  **Construct pairwise comparison matrices** for weights (AHP/Fuzzy AHP).
4.  **Compute concordance and discordance indices** for each alternative-category pair.
5.  **Calculate credibility of outranking** $\sigma_i^q$.
6.  **Assign classification** based on $\sigma_i^q$ and $\lambda$.
7.  **Sensitivity analysis**: Vary $\lambda$, thresholds, and weights to assess robustness.

## 5. Key References

-   Roy, B. (1968). *Classement et choix en présence de points de vue multiples*. Revue Française d'Informatique et de Recherche Opérationnelle.
-   Roy, B., & Bouyssou, D. (1993). *Aide multicritère à la décision: Concepts, méthodes et résultats*. Economica.
-   Figueira, J., Greco, S., & Ehrgott, M. (2005). *Multiple Criteria Decision Analysis: State of the Art Surveys*. Springer.
-   Greco, S., Figueira, J., & Ehrgott, M. (2016). *Multiple Criteria Decision Analysis: State of the Art Surveys*. Springer (2nd ed.).
-   International Journal of Production Economics (2023). "ELECTRE TRI application in sustainable supplier classification".
-   Decision Sciences (2024). "Robust ELECTRE TRI for multi-criteria project sorting".

</content>