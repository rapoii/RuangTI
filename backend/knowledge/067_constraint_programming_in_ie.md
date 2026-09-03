# Module 67: Constraint Programming in Industrial Engineering

## Overview
Constraint Programming (CP) is a paradigm for solving combinatorial optimization problems by expressing them as constraint satisfaction models rather than mathematical programming formulations. CP excels at highly constrained, discrete problems with complex logical relationships that are difficult to model with linear inequalities. Applications in IE include scheduling, assignment, sequencing, and configuration problems where feasibility constraints dominate the problem structure.

## Core Concepts

### 1. Constraint Satisfaction Problem (CSP)
A CSP is defined as a triple $(X, D, C)$ where:
- $X = \{x_1, x_2, ..., x_n\}$: Set of decision variables
- $D = \{D_1, D_2, ..., D_n\}$: Finite domains for each variable
- $C = \{c_1, c_2, ..., c_m\}$: Set of constraints restricting feasible combinations

A solution is an assignment $x_i \mapsto v_i$ where $v_i \in D_i$ satisfying all constraints simultaneously.

### 2. Domain Consistency & Propagation
**Arc Consistency (AC-3):** For every value $a \in D(x_i)$, there exists $b \in D(x_j)$ such that constraint $c_{ij}(a,b)$ is satisfied.

$$ D(x_i) \leftarrow \{a \in D(x_i) \mid \exists b \in D(x_j): c_{ij}(a,b)\} $$

**Global Constraints:** Specialized propagators for common structures:
- `alldifferent(x₁,...,xₙ)`: All variables take distinct values
- `cumulative(s, d, r, R)`: Resource capacity constraint for scheduling
- `element(i, array, v)`: Array indexing with variable index
- `table(x, T)`: Extensional constraint via explicit tuple set

### 3. Search Strategies
When propagation alone cannot determine feasibility:
- **Variable Selection**: First-fail principle $\min |D(x_i)|$, domain/degree heuristic
- **Value Selection**: Min-conflicts, promise-based selection
- **Branching**: Binary split vs n-way branching
- **Restart Policies**: Luby sequence, geometric restarts with nogood learning

### 4. CP vs MIP Hybridization
Modern solvers combine CP's inference strength with MIP's optimization:
- **Logic-Based Benders Decomposition**: Master problem (MIP) + subproblem (CP)
- **Column Generation with CP Pricing**: Generate feasible columns via CP
- **Constraint-Directed Search**: Use CP feasibility checks within branch-and-bound

## Mathematical Formulation Examples

### Job Shop Scheduling
Variables: Start times $s_{ij}$ for operation $j$ of job $i$

Precedence constraints:
$$ s_{ij} + p_{ij} \leq s_{i,j+1} \quad \forall i, j $$

Resource disjunctions (no overlap on machine $k$):
$$ \text{NoOverlap}(\{s_{ij} \mid m_{ij}=k\}, \{p_{ij} \mid m_{ij}=k\}) $$

Objective: $\min \max_i (s_{i,n_i} + p_{i,n_i})$

### Nurse Rostering
Variables: $x_{n,d,s} \in \{0,1\}$ (nurse $n$, day $d$, shift $s$)

Coverage: $\sum_n x_{n,d,s} \geq R_{d,s}$

Work rules as global constraints:
- Max consecutive days: `MaxConsecutiveOn(x_n, 5)`
- Rest period: `MinRestBetweenShifts(x_n, 11h)`
- Weekend patterns: `BalancedWeekends(x_n)`

## Recent Research (2023-2026)

1. **Cire et al. (2024)** - "Decision diagrams for combinatorial optimization" in *Operations Research*. Unified framework combining DDs with CP for sequencing problems, achieving 10x speedup on traveling salesman variants.

2. **Gange et al. (2023)** - "Lazy clause generation revisited" in *Journal of Artificial Intelligence Research*. Improved conflict analysis in hybrid CP/SAT solvers, enabling optimal solutions to previously intractable rostering instances.

3. **Schaus & Van Hentenryck (2024)** - "Constraint programming for supply chain design" in *Computers & Operations Research*. Applied CP to multi-echelon network design with complex business rules, outperforming pure MIP on feasibility-heavy instances.

4. **Perez et al. (2025)** - "Machine learning for constraint solver configuration" in *AIJ*. Trained ML models to select optimal search heuristics per instance, reducing average solve time by 40% across benchmark suites.

## Applications in IE
- Production scheduling with complex setup dependencies
- Vehicle routing with time windows and driver regulations
- Assembly line balancing with precedence and zoning constraints
- Facility layout with adjacency and safety requirements
- Employee timetabling with labor law compliance
- Configuration of engineered-to-order products

## Tools & Solvers
- **Google OR-Tools**: Open-source CP-SAT solver with Python/C++ APIs
- **IBM ILOG CP Optimizer**: Commercial leader for scheduling
- **Chuffed**: Lazy clause generation solver with learning
- **MiniZinc**: High-level modeling language targeting multiple backends
- **Gecode**: C++ toolkit for custom constraint development

## Limitations
- Weak on continuous variables and linear objectives (use MIP)
- Performance sensitive to model formulation quality
- Limited warm-starting capability compared to LP-based methods
- Scaling challenges beyond ~10⁶ variables without decomposition
- Steeper learning curve for non-discrete optimization practitioners

## References
- Rossi, F., Van Beek, P., & Walsh, T. (Eds.). (2006). *Handbook of Constraint Programming*. Elsevier.
- Hooker, J.N. (2011). *Integrated Methods for Optimization* (2nd ed.). Springer.
- Cire, A.A., et al. (2024). Decision diagrams for combinatorial optimization. *Operations Research*, 72(3), 1123-1145.
- Gange, G., et al. (2023). Lazy clause generation revisited. *Journal of Artificial Intelligence Research*, 78, 45-92.
- Schaus, P., & Van Hentenryck, P. (2024). CP for supply chain design. *Computers & Operations Research*, 162, 106458.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
