# Module 188: Life Cycle Costing (LCC) & Total Cost of Ownership (TCO)

## 1. Fundamentals of Life Cycle Costing in Industrial Engineering

Life Cycle Costing (LCC) is an economic evaluation technique that accounts for all costs associated with a product, system, or asset over its entire life span—from acquisition to disposal. Unlike traditional accounting which focuses on initial purchase price, LCC reveals the true long-term financial impact of engineering decisions. For Industrial Engineers, LCC is critical for capital budgeting, equipment selection, and sustainability assessment.

### 1.1 The Iceberg Model of Costs
In many industrial assets (CNC machines, HVAC systems, fleet vehicles), the acquisition cost represents only 20-30% of total life cycle costs. The remaining 70-80% comprises:
-   **Operating Costs:** Energy, fuel, consumables, labor.
-   **Maintenance Costs:** Preventive, corrective, predictive maintenance, spare parts.
-   **Downtime Costs:** Lost production, quality defects, safety incidents.
-   **End-of-Life Costs:** Decommissioning, disposal, recycling, environmental remediation.

### 1.2 ISO 15663 Standard
ISO 15663 *Petroleum, petrochemical and natural gas industries — Life-cycle costing* provides the international framework for LCC application. It defines three levels of analysis:
1.  **Level 1 (Screening):** Qualitative comparison using expert judgment.
2.  **Level 2 (Simplified Quantitative):** Discounted cash flow with aggregated cost categories.
3.  **Level 3 (Detailed Quantitative):** Probabilistic modeling with uncertainty quantification.

## 2. Mathematical Formulation of LCC

The fundamental LCC equation aggregates discounted future cash flows:

$$
LCC = C_{acq} + \sum_{t=1}^{N} \frac{C_{op,t} + C_{maint,t} + C_{down,t}}{(1+r)^t} + \frac{C_{disp}}{(1+r)^N} - \frac{R_{salv}}{(1+r)^N}
$$

Where:
-   $C_{acq}$ = Acquisition cost (purchase, installation, commissioning)
-   $C_{op,t}$ = Operating cost in year $t$
-   $C_{maint,t}$ = Maintenance cost in year $t$
-   $C_{down,t}$ = Downtime/unavailability cost in year $t$
-   $C_{disp}$ = Disposal/decommissioning cost at end of life
-   $R_{salv}$ = Salvage/residual value
-   $r$ = Discount rate (real or nominal, consistent with cash flows)
-   $N$ = Analysis period (years)

### 2.1 Equivalent Uniform Annual Cost (EUAC)
For comparing alternatives with unequal lives, convert LCC to an annual equivalent:

$$
EUAC = LCC \times \frac{r(1+r)^N}{(1+r)^N - 1} = LCC \times (A/P, r, N)
$$

### 2.2 Present Worth Factor for Geometric Gradient Series
When operating/maintenance costs escalate at rate $g$ per year:

$$
P = A_1 \times \left[ \frac{1 - \left(\frac{1+g}{1+r}\right)^N}{r - g} \right] \quad \text{for } r \neq g
$$

If $r = g$: $P = \frac{N \cdot A_1}{1+r}$

## 3. Total Cost of Ownership (TCO) vs. LCC

While often used interchangeably, TCO and LCC have distinct scopes in IE practice:

| Dimension | LCC | TCO |
|-----------|-----|-----|
| **Primary Focus** | Engineering economics, investment appraisal | Procurement, supplier management |
| **Cost Boundary** | Physical asset lifecycle | Organizational ownership boundary |
| **Includes** | Technical operating costs | Administrative overhead, training, IT support |
| **Time Horizon** | Physical/economic life | Contract/ownership period |
| **Standard** | ISO 15663, ASTM E917 | Gartner TCO Model, SAP TCO Calculator |

### 3.1 Hidden Costs in TCO Analysis
Industrial TCO must capture non-obvious cost drivers:
-   **Learning Curve Costs:** Productivity loss during operator training ($Y_x = ax^{-b}$).
-   **Integration Costs:** Interface development, data migration, testing.
-   **Compliance Costs:** Regulatory reporting, certification renewals.
-   **Risk Premiums:** Supply chain disruption probability × impact.
-   **Obsolescence Risk:** Technology refresh cycles shorter than physical life.

## 4. Advanced LCC Techniques

### 4.1 Probabilistic LCC (Monte Carlo Simulation)
Deterministic LCC uses point estimates; probabilistic LCC models uncertainty:

$$
LCC_{prob} = f(C_{acq}, \tilde{C}_{op}, \tilde{C}_{maint}, \tilde{N}, \tilde{r})
$$

Where tildes denote random variables with specified distributions (triangular, lognormal, Weibull). Output is a cumulative distribution function (CDF) showing P(LCC ≤ x).

### 4.2 Real Options in LCC
Traditional NPV/LCC assumes "now or never" decisions. Real options value flexibility:
-   **Option to Defer:** Wait for technology maturity or demand clarity.
-   **Option to Expand:** Modular design allowing capacity addition.
-   **Option to Abandon:** Early exit if performance targets unmet.

Valuation uses Black-Scholes or binomial lattices adapted for engineering projects.

### 4.3 Environmental LCC (E-LCC)
Integrates externalities into monetary terms:
$$
E\text{-}LCC = LCC_{private} + \sum_{i} Q_i \times EF_i \times MC_i
$$
Where $Q_i$ = emission quantity, $EF_i$ = emission factor, $MC_i$ = marginal damage cost (social cost of carbon, health impacts).

## 5. Application Framework for Industrial Engineers

### Step 1: Define System Boundary & Functional Unit
Specify what "ownership" includes and the service delivered (e.g., "produce 1M units/year for 10 years").

### Step 2: Identify Cost Elements
Use Work Breakdown Structure (WBS) aligned with MIL-STD-881F or ISO 15663 Annex B.

### Step 3: Data Collection & Validation
Sources: CMMS records, OEM manuals, industry benchmarks (RSMeans), vendor quotes. Apply confidence intervals to uncertain parameters.

### Step 4: Discount Rate Selection
Use Weighted Average Cost of Capital (WACC) adjusted for project risk. Public sector uses social discount rate (typically 3-7%).

### Step 5: Sensitivity & Uncertainty Analysis
Tornado diagrams identify dominant cost drivers. Monte Carlo quantifies outcome range.

### Step 6: Decision Recommendation
Rank alternatives by EUAC or NPV. Document assumptions, limitations, and non-monetary factors.

## 6. Case Study: CNC Machine Tool Selection

**Scenario:** Choose between conventional CNC ($150k) and smart CNC ($220k) with predictive maintenance.

| Parameter | Conventional | Smart CNC |
|-----------|-------------|-----------|
| Acquisition | $150,000 | $220,000 |
| Annual Energy | $18,000 | $15,000 |
| Annual Maint. | $25,000 | $12,000 |
| Downtime Cost/yr | $30,000 | $8,000 |
| Life (years) | 10 | 12 |
| Salvage | $10,000 | $25,000 |
| Discount Rate | 8% | 8% |

**Calculation (Smart CNC):**
$$
LCC = 220k + \sum_{t=1}^{12} \frac{15k+12k+8k}{1.08^t} - \frac{25k}{1.08^{12}}
$$
$$
= 220k + 35k(P/A,8\%,12) - 25k(P/F,8\%,12)
$$
$$
= 220k + 35k(7.536) - 25k(0.397) = 220k + 263.8k - 9.9k = \$473.9k
$$

**Conventional LCC:** $150k + 73k(7.536) - 10k(0.463) = \$693.5k$

**Decision:** Smart CNC saves $219.6k despite 47% higher acquisition cost. Payback period ≈ 3.2 years.

## 7. Key References

-   Blanchard, B. S., & Fabrycky, W. J. (2011). *Systems Engineering and Analysis* (5th ed.). Pearson. (Chapter 13: Life-Cycle Cost Analysis)
-   Dhillon, B. S. (2009). *Life Cycle Costing for Engineers*. CRC Press.
-   ISO 15663-1:2023. *Petroleum, petrochemical and natural gas industries — Life-cycle costing — Part 1: Methodology and calculation guidelines*. International Organization for Standardization.
-   Ellram, L. M., & Siferd, S. P. (2023). Total cost of ownership: A 30-year retrospective and future directions. *Journal of Purchasing and Supply Management*, 29(2), 100842.
-   Moretto, A., & Cagno, E. (2024). Integrating environmental and economic dimensions in LCC: A systematic review. *Journal of Cleaner Production*, 434, 139812.
-   ASTM E917-24. *Standard Practice for Measuring Life-Cycle Costs of Buildings and Building Systems*. ASTM International.

</content>