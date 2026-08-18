# Module 191: Analytic Network Process (ANP) with Supermatrices

## 1. Introduction to Multi-Criteria Decision Making (MCDM) in Industrial Engineering

Industrial Engineering (IE) routinely faces complex decisions involving interdependent criteria, feedback loops, and uncertainty. Traditional Analytic Hierarchy Process (AHP) by Saaty (1980) assumes independence of elements, which is often unrealistic in real-world industrial contexts (e.g., supplier selection where price affects quality perception, or risk assessment where probability depends on mitigation). The **Analytic Network Process (ANP)** extends AHP into a network framework by explicitly modeling dependencies and feedback among decision elements.

The ANP was developed by Thomas L. Saaty in 1996 as a generalization of AHP to handle the "network" nature of complex systems. It is particularly valuable in Industrial Engineering applications such as:
-   Supplier and vendor selection
-   Risk management and project portfolio prioritization
-   Technology selection and innovation roadmapping
-   Sustainability and circular economy metrics weighting

## 2. Mathematical Foundation: Pairwise Comparisons and Eigenvector Method

ANP begins with pairwise comparison matrices constructed using Saaty's 1–9 scale. For a pairwise comparison matrix $A = [a_{ij}]$, the principal eigenvector $\mathbf{w} = [w_1, w_2, \dots, w_n]^T$ provides the priority vector:

$$
A\mathbf{w} = \lambda_{max}\mathbf{w}
$$

Where $\lambda_{max}$ is the largest eigenvalue. To ensure consistency, compute the Consistency Index:
$$
CI = \frac{\lambda_{max} - n}{n-1}
$$
And Consistency Ratio:
$$
CR = \frac{CI}{RI} \quad (RI = \text{Random Index depending on } n)
$$
Acceptable $CR < 0.10$ (or $CR < 0.05$ for high-stakes decisions).

## 3. The Supermatrix Concept

The core innovation of ANP is the **Supermatrix**, which captures the influence of elements on one another across the entire network.

For a system with $n$ elements, construct a supermatrix $W$ where each block $W_{ij}$ contains the relative influence of elements in cluster $i$ on elements in cluster $j$.

**Block Structure Example:**
$$
W = \begin{bmatrix}
W_{11} & W_{12} & \cdots & W_{1k} \\
W_{21} & W_{22} & \cdots & W_{2k} \\
\vdots & \vdots & \ddots & \vdots \\
W_{k1} & W_{k2} & \cdots & W_{kk}
\end{bmatrix}
$$
Each block $W_{ij}$ is a matrix of normalized pairwise comparison values representing the direct influence of elements in cluster $i$ on elements in cluster $j$.

### 3.1 Example: Supplier Selection Network
Elements: Price ($P$), Quality ($Q$), Delivery ($D$), Financial Stability ($F$).

-   Cluster $C_1 = \{P, Q, D, F\}$
-   Cluster $C_2 = \{\text{Decision Element}\}\}$

After pairwise comparisons, the supermatrix might look like:
$$
W = \begin{bmatrix}
0 & 0.25 & 0.15 & 0.10 \\
0.35 & 0 & 0.20 & 0.15 \\
0.20 & 0.30 & 0 & 0.20 \\
0.25 & 0.25 & 0.30 & 0
\end{bmatrix}
$$
(Note: Rows sum to 1; columns sum to 1 only after normalization.)

## 4. Forming the Weighted Supermatrix

To account for the relative importance of clusters (which may differ from pairwise comparisons), multiply each block by the priority of its row cluster.

$$
\bar{W}_{ij} = w_i \cdot W_{ij}
$$
Where $w_i$ is the priority of cluster $i$.

The resulting **Weighted Supermatrix** $\bar{W}$ now represents the full network influence structure.

## 5. Limiting Supermatrix and Final Priorities

The limiting supermatrix $W^\infty$ is obtained by raising $\bar{W}$ to successive powers until convergence:

$$
W^\infty = \lim_{k \to \infty} (\bar{W})^k
$$
In practice, compute until elements stabilize (typically 10–20 iterations for convergence).

The column sums of $W^\infty$ yield the **final global priorities** for each element, representing the long-term influence of each factor in the decision network.

## 6. Practical Implementation in Industrial Engineering

### 6.1 Software Support
-   Super Decisions (free version available)
-   Feedback Systems (by Creative Decisions Foundation)
-   MATLAB or Python libraries (e.g., `pysaaty`, `ANP` packages)

### 6.2 Common Network Structures in IE
1.  **Supplier Evaluation:** Supplier cluster influences Decision Element; Decision Element influences Supplier cluster (feedback).
2.  **Technology Selection:** Technical criteria cluster → Economic cluster → Risk cluster → Decision Element.
3.  **Project Portfolio:** Strategic fit → Financial impact → Risk → Decision Element.
4.  **Sustainability Assessment:** Environmental → Social → Governance clusters with feedback loops.

### 6.3 Handling Uncertainty
Use fuzzy numbers (Triangular Fuzzy Numbers) or interval judgments when pairwise comparisons are imprecise. The eigenvector method generalizes to fuzzy arithmetic using operations on fuzzy sets.

## 7. Key References

-   Saaty, T. L. (1996). *The Analytic Network Process*. RWS Publications.
-   Saaty, T. L. (2005). *Theory and Applications of the Analytic Network Process*. RWS Publications.
-   Saaty, T. L., & Ozdemir, M. S. (2003). *Why the magic number seven plus or minus two?* RWS Publications.
-   Vargas, L. G. (1990). An overview of the analytic hierarchy process and its applications. *European Journal of Operational Research*, 48(1), 2–8.
-   Cheng, E. W. L., & Li, H. (2005). Application of ANP in construction decision making. *Automation in Construction*, 14(2), 201–210.
-   International Journal of Production Economics (2024). Special issue on "Network-based MCDM in industrial decision making".

</content>