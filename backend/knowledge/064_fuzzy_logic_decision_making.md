# Module 64: Fuzzy Logic in Decision Making

## Overview
Fuzzy Logic extends classical binary logic to handle partial truth values between 0 and 1, enabling modeling of vagueness and linguistic uncertainty inherent in industrial decision-making. Unlike probability (which models randomness), fuzzy logic captures ambiguity in human judgment, expert knowledge, and qualitative criteria. This module covers fuzzy sets, inference systems, and multi-criteria decision making under fuzziness.

## Core Concepts

### 1. Fuzzy Sets & Membership Functions
A fuzzy set $\tilde{A}$ on universe $X$ is defined by membership function $\mu_{\tilde{A}}: X \to [0,1]$.

**Triangular Fuzzy Number (TFN):**
$$ \mu_{\tilde{A}}(x) = \begin{cases} 0 & x < a \\ \frac{x-a}{b-a} & a \leq x \leq b \\ \frac{c-x}{c-b} & b \leq x \leq c \\ 0 & x > c \end{cases} $$

denoted as $\tilde{A} = (a, b, c)$ where $b$ is the modal value.

**Trapezoidal Fuzzy Number:**
$$ \mu_{\tilde{A}}(x) = \begin{cases} 0 & x < a \\ \frac{x-a}{b-a} & a \leq x < b \\ 1 & b \leq x \leq c \\ \frac{d-x}{d-c} & c < x \leq d \\ 0 & x > d \end{cases} $$

### 2. Fuzzy Arithmetic Operations
For TFNs $\tilde{A}=(a_1,b_1,c_1)$ and $\tilde{B}=(a_2,b_2,c_2)$:

**Addition:** $\tilde{A} \oplus \tilde{B} = (a_1+a_2, b_1+b_2, c_1+c_2)$

**Multiplication (approximate):** $\tilde{A} \otimes \tilde{B} \approx (a_1 a_2, b_1 b_2, c_1 c_2)$ for positive TFNs

**Scalar multiplication:** $k \cdot \tilde{A} = (ka_1, kb_1, kc_1)$ for $k > 0$

**Defuzzification (Centroid Method):**
$$ x^* = \frac{\int x \cdot \mu_{\tilde{A}}(x) dx}{\int \mu_{\tilde{A}}(x) dx} $$

For TFN: $x^* = \frac{a + 2b + c}{4}$ (weighted average approximation)

### 3. Fuzzy Inference Systems (FIS)
**Mamdani FIS Steps:**
1. **Fuzzification**: Convert crisp inputs to fuzzy sets
2. **Rule Evaluation**: Apply fuzzy operators (AND=min, OR=max)
3. **Aggregation**: Combine rule consequents
4. **Defuzzification**: Convert aggregated output to crisp value

**Rule Base Example:**
- IF demand is *High* AND lead_time is *Long* THEN safety_stock is *Very_High*
- IF demand is *Medium* OR supplier_reliability is *Low* THEN safety_stock is *High*

**Takagi-Sugeno-Kang (TSK) Model:**
Rules have linear consequents: IF $x$ is $A_i$ AND $y$ is $B_i$ THEN $z = p_i x + q_i y + r_i$

Output: $z = \frac{\sum w_i (p_i x + q_i y + r_i)}{\sum w_i}$ where $w_i = \mu_{A_i}(x) \wedge \mu_{B_i}(y)$

### 4. Fuzzy MCDM Methods
**Fuzzy TOPSIS Extension:**
- Rating matrix with TFNs: $\tilde{x}_{ij} = (a_{ij}, b_{ij}, c_{ij})$
- Fuzzy normalization: $\tilde{r}_{ij} = (\frac{a_{ij}}{c_j^+}, \frac{b_{ij}}{c_j^+}, \frac{c_{ij}}{c_j^+})$ for benefit criteria
- Fuzzy distance to ideal solutions using vertex method:
$$ d(\tilde{A}, \tilde{B}) = \sqrt{\frac{1}{3}[(a_1-b_1)^2 + (a_2-b_2)^2 + (a_3-b_3)^2]} $$

**Fuzzy AHP (Chang's Extent Analysis):**
Synthetic extent value: $S_i = \sum_{j=1}^{m} \tilde{M}_{g_i}^j \otimes [\sum_{i=1}^{n} \sum_{j=1}^{m} \tilde{M}_{g_i}^j]^{-1}$

Degree of possibility: $V(S_2 \geq S_1) = \sup[\min(\mu_{S_1}(x), \mu_{S_2}(y))]$

### 5. Type-2 Fuzzy Sets
Handle uncertainty in membership functions themselves:
$$ \tilde{A} = \{((x,u), \mu_{\tilde{A}}(x,u)) | x \in X, u \in J_x \subseteq [0,1]\} $$

Interval Type-2 FS simplifies to footprint of uncertainty (FOU) bounded by upper and lower membership functions $\overline{\mu}(x)$ and $\underline{\mu}(x)$.

## Recent Research (2023-2026)

1. **Hybrid Fuzzy-ML Models**  
   Integration of fuzzy inference with neural networks (Neuro-Fuzzy) for adaptive quality control, showing 15-20% improvement in defect detection accuracy over pure statistical methods in semiconductor manufacturing.

2. **Fuzzy Digital Twin Integration**  
   Real-time fuzzy reasoning embedded in digital twins for predictive maintenance under sensor noise and operator linguistic feedback, reducing false alarms by 30%.

3. **Sustainability Assessment with Hesitant Fuzzy Sets**  
   Extensions handling expert hesitation in ESG scoring, enabling more robust supplier sustainability rankings when evaluators express uncertainty between adjacent linguistic terms.

4. **Fuzzy Reinforcement Learning**  
   Combining fuzzy state representation with deep RL for complex scheduling problems, achieving faster convergence in high-dimensional job shop environments with imprecise processing times.

## Implementation Framework

### Step 1: Problem Structuring
- Identify sources of vagueness vs randomness
- Define linguistic variables and term sets
- Select appropriate fuzzy number type (triangular/trapezoidal/Gaussian)

### Step 2: Knowledge Acquisition
- Elicit expert rules via structured interviews
- Calibrate membership functions using historical data
- Validate rule base completeness and consistency

### Step 3: System Development
- Choose FIS architecture (Mamdani vs TSK)
- Implement fuzzy operators and defuzzification method
- Integrate with existing MES/ERP systems via API

### Step 4: Validation & Tuning
- Compare fuzzy outputs against expert benchmarks
- Perform sensitivity analysis on membership parameters
- Conduct field trials with operator feedback loops

## Key Formulas Summary

| Concept | Formula | Application |
|---------|---------|-------------|
| TFN Membership | Piecewise linear $(a,b,c)$ | Linguistic variable encoding |
| Centroid Defuzz | $x^* = \frac{\int x\mu(x)dx}{\int \mu(x)dx}$ | Crisp output extraction |
| Fuzzy Distance | $d = \sqrt{\frac{1}{3}\sum(a_i-b_i)^2}$ | MCDM ranking |
| TSK Output | $z = \frac{\sum w_i f_i(x)}{\sum w_i}$ | Adaptive control |
| Alpha-Cut | $A_\alpha = \{x \| \mu_A(x) \geq \alpha\}$ | Interval arithmetic |

## References
- Zadeh, L.A. (1965). Fuzzy sets. *Information and Control*, 8(3), 338-353.
- Chang, D.Y. (1996). Applications of the extent analysis method on fuzzy AHP. *European Journal of Operational Research*, 95(3), 649-655.
- Kahraman, C., et al. (2024). Fuzzy MCDM methods for sustainable supplier selection: A comprehensive review. *Journal of Cleaner Production*, 434, 139876.
- Mendel, J.M. (2023). *Uncertain Rule-Based Fuzzy Systems: Introduction and New Directions* (2nd ed.). Springer.
- Wang, L.X. (2025). Adaptive fuzzy systems and control: Recent advances in stability and performance. *IEEE Transactions on Fuzzy Systems*, 33(2), 456-472.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
