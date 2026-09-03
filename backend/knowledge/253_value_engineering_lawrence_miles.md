# Module 253: Value Engineering & Lawrence Miles’ Methodology

## 1. Introduction to Value Engineering

Value Engineering (VE), pioneered by Lawrence D. Miles at General Electric in the 1940s–1960s, is a systematic methodology for improving the **value** of products, processes, or services by analyzing their functions relative to cost. VE is not merely cost reduction—it is **function-oriented optimization** that maintains or enhances performance while minimizing life-cycle cost. Modern VE (2023–2026) integrates with digital product development, sustainability assessment, and AI-driven function analysis.

### 1.1 Miles’ Definition of Value

$$ Value = \frac{Function\ Worth}{Cost} $$

Where:
- **Function Worth**: The minimum cost required to perform the essential function
- **Cost**: Total life-cycle cost including acquisition, operation, maintenance, and disposal

Miles distinguished between:
- **Use Value**: Utility derived from functional performance
- **Esteem Value**: Psychological satisfaction from ownership
- **Exchange Value**: Market-determined monetary worth
- **Scrap Value**: Residual value at end-of-life

## 2. The Value Engineering Job Plan

Miles’ original seven-phase framework remains the foundation of modern VE practice:

### Phase 1: Information Gathering
Collect comprehensive data about the product/process:
- Functional specifications and performance requirements
- Cost breakdown structure (materials, labor, overhead, profit)
- Customer needs and competitive benchmarks
- Manufacturing constraints and supply chain dependencies

### Phase 2: Function Analysis
The heart of VE—identifying and classifying functions using **verb-noun** pairs:

| Function Type | Description | Example |
|--------------|-------------|---------|
| Basic Function | Primary purpose; cannot be eliminated | "Transmit Torque" |
| Secondary Function | Supports basic function; may be modified | "Reduce Vibration" |
| Aesthetic Function | Provides esteem value | "Enhance Appearance" |
| Unnecessary Function | Adds cost without customer-perceived value | "Decorative Plating" |

### Phase 3: Creative Speculation
Generate alternative methods to perform each function:
- Brainstorming without judgment
- Analogical thinking from other industries
- TRIZ integration for inventive solutions
- Morphological analysis of parameter combinations

### Phase 4: Evaluation
Screen and rank alternatives using weighted criteria:

$$ Score_j = \sum_{i=1}^{n} w_i \cdot r_{ij} $$

Where $w_i$ are criterion weights ($\sum w_i = 1$) and $r_{ij}$ is the rating of alternative $j$ on criterion $i$.

### Phase 5: Development
Develop selected alternatives into implementable proposals:
- Detailed cost estimation
- Prototype testing and validation
- Risk assessment and mitigation planning
- Supplier consultation for feasibility

### Phase 6: Presentation
Communicate recommendations to decision-makers with clear ROI justification.

### Phase 7: Implementation Follow-Up
Track actual savings and lessons learned post-implementation.

## 3. FAST Diagramming (Function Analysis System Technique)

FAST diagrams visualize functional relationships hierarchically:

```
[Higher-Level Function] ← WHY? ← [Basic Function] ← HOW? ← [Lower-Level Functions]
                                    ↑
                              Critical Path
```

Rules:
- Reading left-to-right answers "HOW?"
- Reading right-to-left answers "WHY?"
- The critical path identifies the essential function chain
- Supporting functions branch below the critical path

Modern FAST integrates with MBSE tools like SysML for digital function modeling (Thompson & Liu, 2024).

## 4. Value Metrics and Analysis

### 4.1 Value Index

$$ VI = \frac{FI}{CI} $$

Where $FI$ = Function Importance coefficient and $CI$ = Cost coefficient. Targets:
- $VI < 1$: Over-costed function → cost reduction opportunity
- $VI > 1$: Under-invested function → potential quality/performance risk
- $VI \approx 1$: Balanced value allocation

### 4.2 Pareto Analysis of Function-Cost

Typically 20% of functions consume 80% of cost. VE targets these high-cost functions first.

### 4.3 Life-Cycle Cost Integration

$$ LCC = C_{acq} + \sum_{t=1}^{T} \frac{C_{op}(t) + C_{maint}(t)}{(1+r)^t} + \frac{C_{disp}}{(1+r)^T} $$

VE optimizes LCC, not just acquisition cost—a critical distinction often missed in naive cost-cutting.

## 5. Modern Extensions and Digital VE

### 5.1 Sustainability-Integrated VE

Extending value definition to include environmental impact:

$$ Value_{sustainable} = \frac{Function\ Worth}{LCC + \alpha \cdot Environmental\ Impact} $$

Where $\alpha$ converts ecological damage to monetary equivalent via carbon pricing or shadow costs.

### 5.2 AI-Assisted Function Analysis

NLP models extract verb-noun function pairs from technical documents automatically. Knowledge graphs link functions to historical solutions across industries (Chen et al., 2025).

### 5.3 Digital Twin-Based Value Simulation

Simulate alternative designs in virtual environments to estimate function worth and cost before physical prototyping.

## 6. Applications and Case Studies

### 6.1 Automotive Component Redesign
- Original: Machined aluminum bracket ($12.50/unit)
- VE Alternative: Stamped steel with integrated mounting features ($4.20/unit)
- Function preserved: "Support Load" and "Provide Interface"
- Annual savings: $1.8M at 200K units/year

### 6.2 Hospital Process Optimization
- Function: "Deliver Medication Safely"
- Original: Manual verification by 3 nurses (45 min/patient/day)
- VE Solution: Barcode scanning + automated dispensing (8 min/patient/day)
- Value improvement: 5.6× with enhanced safety

### 6.3 Software Feature Rationalization
- Identified 34% of features as unnecessary functions
- Eliminated low-value features reducing codebase complexity by 28%
- Maintenance cost reduced $450K annually

## 7. Common Pitfalls and Best Practices

### Pitfalls
- Confusing cost cutting with value engineering
- Skipping function analysis (jumping to solutions)
- Ignoring secondary/supporting functions
- Failing to quantify function worth objectively

### Best Practices
- Always start with function, never with form
- Involve cross-functional teams (design, manufacturing, procurement, customers)
- Use standardized worksheets and templates
- Document assumptions and rationale transparently
- Track implemented savings rigorously

## References

1. Miles, L. D. (2023). *Techniques of Value Analysis and Engineering* (4th ed.). McGraw Hill.
2. SAVE International. (2024). *Value Methodology Standard (VMS-2)*. Society of American Value Engineers.
3. Thompson, M., & Liu, Y. (2024). Integrating FAST diagrams with SysML for model-based value engineering. *Journal of Engineering Design*, 35(2), 189–212.
4. Chen, X., Wang, H., & Zhang, L. (2025). AI-powered function analysis for value engineering: A knowledge graph approach. *Advanced Engineering Informatics*, 8, 100234.
5. Younker, D. L. (2023). *Value Engineering: Analysis and Methodology*. CRC Press.
6. ISO. (2024). *ISO/IEC 60300-3-3: Dependability Management — Part 3-3: Application Guide — Life Cycle Costing*. International Organization for Standardization.
7. Dell'Isola, A. J. (2023). *Value Engineering: Practical Applications for Design, Construction, Maintenance and Operations* (3rd ed.). RSMeans.
8. Sakurai, M., & Tanaka, K. (2025). Sustainable value engineering: Integrating circular economy principles into traditional VE methodology. *Journal of Cleaner Production*, 412, 137456.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
