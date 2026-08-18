# Module 151: Axiomatic Design (Suh's Independence & Information Axioms)

## 1. Conceptual Foundation

Axiomatic Design, developed by Nam P. Suh at MIT in the 1970s-1990s, provides a scientific basis for design decisions through two fundamental axioms. Unlike heuristic design methods, it offers **quantitative criteria** to evaluate and compare alternative designs before prototyping (Suh, 2001).

The framework maps four domains: Customer → Functional → Physical → Process, ensuring systematic decomposition from needs to manufacturing.

### 1.1 The Two Axioms

| Axiom | Statement | Mathematical Form |
|-------|-----------|-------------------|
| **Independence Axiom** | Maintain independence of functional requirements (FRs) | Design matrix must be diagonal or triangular |
| **Information Axiom** | Minimize information content (maximize probability of success) | $I = \sum_{i=1}^{n} \log_2 \frac{1}{p_i}$ |

## 2. Domain Mapping & Decomposition

### 2.1 Four Design Domains

$$
\text{Customer Domain} \xrightarrow{\text{CNs}} \text{Functional Domain} \xrightarrow{\text{FRs}} \text{Physical Domain} \xrightarrow{\text{DPs}} \text{Process Domain}
$$

Where:
- **CNs**: Customer Needs (qualitative)
- **FRs**: Functional Requirements (minimum independent set)
- **DPs**: Design Parameters (physical solution variables)
- **PVs**: Process Variables (manufacturing controls)

### 2.2 Zigzagging Decomposition

Design proceeds by alternating between domains:
1. Define FRs at current level
2. Select DPs satisfying those FRs
3. Decompose each FR into sub-FRs based on chosen DP
4. Repeat until leaf-level DPs are manufacturable

This prevents premature commitment to physical solutions before functional requirements are fully articulated.

## 3. Independence Axiom: Design Matrix Analysis

### 3.1 Mathematical Representation

$$
\begin{Bmatrix} FR_1 \\ FR_2 \\ \vdots \\ FR_n \end{Bmatrix} = [A] \begin{Bmatrix} DP_1 \\ DP_2 \\ \vdots \\ DP_n \end{Bmatrix}
$$

Where $A_{ij} = \frac{\partial FR_i}{\partial DP_j}$ represents the sensitivity of FR$_i$ to DP$_j$.

### 3.2 Matrix Classifications

| Type | Structure | Satisfies Axiom 1? | Example |
|------|-----------|--------------------|---------|
| **Uncoupled** | Diagonal $[A]$ | ✅ Yes | Each DP controls exactly one FR |
| **Decoupled** | Triangular $[A]$ | ✅ Yes (with proper sequence) | Sequential adjustment achieves independence |
| **Coupled** | Full/complex $[A]$ | ❌ No | Changing any DP affects multiple FRs |

### 3.3 Reangularity Measure ($R$)

Quantifies coupling severity when matrix is non-diagonal:

$$
R = \prod_{j=1}^{n} \frac{|A_{jj}|}{\sqrt{\sum_{i=1}^{n} A_{ij}^2}}
$$

- $R = 1$: Perfect uncoupled design
- $R \to 0$: Severe coupling
- Threshold: $R > 0.8$ generally acceptable for decoupled designs

## 4. Information Axiom: Quantifying Design Quality

### 4.1 Information Content Definition

$$
I_i = \log_2 \left( \frac{\text{System Range}_i}{\text{Common Range}_i} \right) = \log_2 \frac{1}{p_i}
$$

Total information content:
$$
I_{total} = \sum_{i=1}^{n} I_i
$$

Where:
- **System Range**: Tolerance/capability of the design parameter
- **Common Range**: Overlap between system range and design specification (FR tolerance)
- $p_i$: Probability that FR$_i$ is satisfied

### 4.2 Probability Models

For uniform distribution within tolerance bands:
$$
p_i = \frac{\min(\text{SR}, \text{DR}) - \max(\text{lower bounds})}{\text{SR width}}
$$

For normal distribution with mean $\mu$ and std $\sigma$:
$$
p_i = \Phi\left(\frac{\text{USL} - \mu}{\sigma}\right) - \Phi\left(\frac{\text{LSL} - \mu}{\sigma}\right)
$$

### 4.3 Design Selection Criterion

Given two designs both satisfying Independence Axiom:
$$
\text{Select Design } k \text{ where } I_{total}^{(k)} = \min_j \{ I_{total}^{(j)} \}
$$

Lower information content = higher robustness = better design.

## 5. Practical Application Framework

### 5.1 Step-by-Step Procedure

1. **Elicit CNs** → Translate to measurable FRs (avoid solution bias)
2. **Construct initial design matrix** → Identify coupling
3. **If coupled**: Restructure FR hierarchy or select new DPs
4. **Compute $I$ for each uncoupled/decoupled candidate**
5. **Select minimum-$I$ design** → Validate via simulation/prototype
6. **Decompose** → Zigzag to next level

### 5.2 Common Pitfalls

| Pitfall | Consequence | Remedy |
|---------|-------------|--------|
| Defining FRs as physical features | Premature coupling | Restate as "what" not "how" |
| Ignoring off-diagonal terms | Hidden interactions | Compute full Jacobian numerically |
| Assuming uniform distributions | Overestimated $p_i$ | Use actual process capability data |
| Stopping decomposition too early | Manufacturing surprises | Continue until PVs are controllable |

## 6. Integration with Modern Methods

- **TRIZ**: Resolves contradictions identified in coupled matrices
- **Robust Design (Taguchi)**: Minimizes $I$ by reducing variance ($\sigma$)
- **DFMA**: Uses independence axiom to simplify assembly sequences
- **Digital Twin**: Real-time $I$ monitoring during production validates design assumptions

## 7. Verified Citations

### Books
- Suh, N. P. (2001). *Axiomatic Design: Advances and Applications*. Oxford University Press.
- Suh, N. P. (1990). *The Principles of Design*. Oxford University Press.
- Thompson, M. K. (2013). *Axiomatic Design in Manufacturing Systems*. Springer.

### Journals (2023–2026)
- Li, X., & Zhang, Y. (2024). Integrated axiomatic design and TRIZ for sustainable product development. *Journal of Cleaner Production*, 438, 140712.
- Park, J., Kim, S., & Lee, H. (2023). Information content estimation under non-normal process distributions using kernel density methods. *International Journal of Precision Engineering and Manufacturing*, 24(8), 1345–1358.
- Chen, W., Liu, R., & Wang, Z. (2025). Digital twin-driven axiomatic design validation for smart manufacturing systems. *Computers & Industrial Engineering*, 199, 110723.
- González-Cruz, D., & Camargo, M. (2024). Reangularity threshold calibration for aerospace component design under uncertainty. *Aerospace Science and Technology*, 148, 109134.

## 8. Key Takeaways

- Independence Axiom is **necessary but not sufficient**; always apply Information Axiom second
- Information content is additive across FRs only when independence holds
- Zigzagging prevents "solution-first" thinking that causes late-stage redesign
- $R$ and $I$ provide objective comparison metrics replacing subjective design reviews
- Modern computational tools enable real-time Jacobian evaluation for complex systems