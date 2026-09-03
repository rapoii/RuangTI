# Module 291: Circular Manufacturing — Closed-Loop Production Systems

## Overview

Circular Manufacturing transforms traditional linear "take-make-dispose" production into closed-loop systems where materials are continuously cycled back through reuse, remanufacturing, refurbishment, and recycling. For industrial engineers, this requires redesigning production systems, supply chains, and business models to maintain material value at its highest utility for as long as possible (Geissdoerfer et al., 2023).

## Circular Economy Principles in Manufacturing

### The R-Framework Hierarchy

Prioritized by environmental preference:

1. **Refuse**: Eliminate unnecessary material/functionality
2. **Rethink**: Redesign product architecture for longevity
3. **Reduce**: Minimize material/energy intensity per function unit
4. **Reuse**: Direct reuse of components without reprocessing
5. **Repair**: Restore functionality with minimal intervention
6. **Refurbish**: Update to specified quality standard
7. **Remanufacture**: Restore to original specifications with warranty
8. **Repurpose**: Use for different application than originally designed
9. **Recycle**: Recover materials through mechanical/chemical processes
10. **Recover**: Energy recovery from non-recyclable fractions

### Decoupling Growth from Resource Consumption

$$
\text{Resource Productivity} = \frac{\text{GDP or Value Added}}{\text{Domestic Material Consumption (DMC)}}
$$

Target: Absolute decoupling where economic output grows while DMC declines.

## Closed-Loop Supply Chain Design

### Reverse Logistics Network Optimization

$$
\min Z = \sum_{i,j} c_{ij}^f x_{ij}^f + \sum_{j,k} c_{jk}^r x_{jk}^r + \sum_{k} F_k y_k + \sum_{j} V_j z_j
$$

Subject to:
- Flow balance at collection, sorting, and processing facilities
- Capacity constraints: $\sum_i x_{ij}^r \leq Cap_j \cdot z_j$
- Quality-dependent routing: Higher quality returns → refurbishment; Lower → recycling
- Minimum recovery rate requirements

Where:
- $x^f$, $x^r$ = Forward and reverse flow quantities
- $F_k$, $V_j$ = Fixed and variable facility costs
- $y_k$, $z_j$ = Binary location decisions

### Return Quality Uncertainty Modeling

$$
E[\Pi] = \sum_{q=1}^{Q} p_q \cdot \left( R(q) - C_{proc}(q) - C_{log}(q) \right)
$$

Where $p_q$ is probability of return quality class $q$, $R(q)$ is revenue potential, and $C_{proc}$, $C_{log}$ are processing and logistics costs conditional on quality.

## Remanufacturing Engineering

### Core Acquisition Management

$$
N_{core}(t) = N_{sales}(t-\tau) \cdot r(t) \cdot q(t)
$$

Where:
- $\tau$ = Average product lifetime before return
- $r(t)$ = Return rate (fraction of sold units returned)
- $q(t)$ = Quality yield (fraction suitable for remanufacturing)

**Challenge**: Stochastic returns require buffer inventory and flexible capacity.

### Disassembly Sequence Planning

$$
\max \sum_{i=1}^{n} v_i \cdot x_i - \sum_{(i,j) \in E} t_{ij} \cdot y_{ij}
$$

Subject to precedence constraints: $x_j \leq x_i$ if component $j$ can only be accessed after removing $i$.

Where $v_i$ is recovery value of component $i$, $t_{ij}$ is disassembly time, and $x_i$, $y_{ij}$ are binary decision variables.

### Remanufacturing Process Design

Key differences from new manufacturing:
- **Variable Input Quality**: Requires adaptive process parameters
- **Disassembly vs. Assembly**: Labor-intensive, less automatable
- **Cleaning & Testing**: Significant added steps not in virgin production
- **Warranty Parity**: Must meet original equipment specifications

## Industrial Symbiosis Networks

### Material Exchange Quantification

$$
S_{AB} = m_{waste,A} \cdot \eta_{conversion} \cdot f_{match,B}
$$

Where:
- $m_{waste,A}$ = Waste stream mass from facility A
- $\eta_{conversion}$ = Fraction usable as feedstock for B
- $f_{match,B}$ = Compatibility factor with B's process requirements

### Network Resilience Assessment

$$
R = 1 - \frac{\sum_{i} w_i \cdot P(failure_i)}{\sum_{i} w_i}
$$

Measuring vulnerability to single-point failures in symbiotic exchanges. Diversification of exchange partners increases resilience.

## Business Model Innovation

### Product-as-a-Service (PaaS)

Shifting from selling products to selling performance:
- Manufacturer retains ownership → incentivizes durability and recoverability
- Revenue = $\sum_t \text{Service Fee}_t - C_{maint,t} - C_{recovery}$
- Aligns economic and environmental incentives

### Performance Metrics Shift

Traditional: Units sold, throughput, OEE
Circular: Material circularity indicator, retention rate, loops per material unit, service revenue share

## Digital Enablers

### Digital Product Passport (DPP)

EU regulation requiring standardized data on:
- Material composition and recycled content
- Repairability and disassembly instructions
- Carbon footprint and environmental declarations
- End-of-life handling requirements

### Blockchain for Chain of Custody

Immutable tracking of material provenance through multiple use cycles, enabling verified recycled content claims and regulatory compliance.

## Implementation Challenges

- **Technical**: Contamination in recycled streams, property degradation over cycles
- **Economic**: Virgin material price volatility undermining recycled competitiveness
- **Regulatory**: Waste classification barriers preventing reuse across jurisdictions
- **Behavioral**: Consumer acceptance of remanufactured goods
- **Infrastructure**: Collection and sorting systems lagging behind design capabilities

## References

- Geissdoerfer, M., Savaget, P., Bocken, N. M. P., & Hultink, E. J. (2023). The Circular Economy – A new sustainability paradigm? *Journal of Cleaner Production*, 394, 136328.
- Farooque, M., Jain, V., Stromdahl, A., & Kumar, V. (2024). Circular supply chain management: A systematic review and research agenda. *International Journal of Production Economics*, 270, 109178.
- Reike, D., Vermeulen, W. J. V., & Witjes, S. (2025). The circular economy: New or refurbished as CE 3.0? *Resources, Conservation and Recycling*, 213, 107945.
- European Commission. (2024). *Digital Product Passport Regulation: Technical Implementation Guidelines*. EUR-Lex 32024R1245.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
