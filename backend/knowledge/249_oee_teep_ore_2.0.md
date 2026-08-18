# Module 249: OEE, TEEP, and ORE 2.0 in Industrial Performance Measurement

## 1. Introduction to Equipment Effectiveness Metrics

Overall Equipment Effectiveness (OEE) is the gold standard metric for measuring productive utilization of manufacturing assets. However, traditional OEE has limitations when applied to complex, multi-product, Industry 4.0 environments. Recent developments (2023–2026) introduce **Total Effective Equipment Performance (TEEP)** and **Overall Resource Effectiveness (ORE)** as complementary metrics that address systemic losses beyond individual machine boundaries. The evolution toward **OEE 2.0** integrates real-time data streams, predictive analytics, and sustainability dimensions into equipment performance measurement.

## 2. Classical OEE Framework

### 2.1 Three Components of OEE

$$ OEE = Availability \times Performance \times Quality $$

Where:
- **Availability** $= \frac{Operating\ Time}{Planned\ Production\ Time}$
- **Performance** $= \frac{Ideal\ Cycle\ Time \times Total\ Count}{Operating\ Time}$
- **Quality** $= \frac{Good\ Count}{Total\ Count}$

### 2.2 The Six Big Losses

OEE maps directly to the six big losses identified in TPM:

| OEE Component | Loss Category | Examples |
|---------------|---------------|----------|
| Availability | Equipment Failure | Breakdowns, tool failures |
| Availability | Setup & Adjustments | Changeovers, warm-up |
| Performance | Idling & Minor Stops | Jams, sensor blocks, material shortage |
| Performance | Reduced Speed | Wear, suboptimal parameters |
| Quality | Process Defects | Scrap, rework during stable production |
| Quality | Reduced Yield | Startup defects, warm-up rejects |

### 2.3 World-Class OEE Benchmarks

Discrete manufacturing world-class: OEE ≥ 85% (A=90%, P=95%, Q=99.9%). Process industries typically target OEE ≥ 90% due to continuous flow characteristics. However, benchmarks vary significantly by industry segment and product mix complexity.

## 3. Total Effective Equipment Performance (TEEP)

### 3.1 Extending Beyond Planned Time

TEEP accounts for calendar time losses that OEE ignores:

$$ TEEP = Loading \times OEE = \frac{Planned\ Production\ Time}{Calendar\ Time} \times OEE $$

Alternatively:

$$ TEEP = \frac{Fully\ Productive\ Time}{Calendar\ Time} $$

TEEP reveals hidden capacity in unscheduled shifts, weekends, and holidays. A plant with OEE = 85% but only single-shift operation may have TEEP = 30%, indicating massive untapped capacity before capital investment is justified.

### 3.2 TEEP vs. OEE Decision Framework

Use OEE for: shift-level operational improvement, operator performance tracking, maintenance effectiveness.
Use TEEP for: strategic capacity planning, ROI justification for additional shifts, asset utilization benchmarking across facilities with different operating schedules.

## 4. Overall Resource Effectiveness (ORE)

### 4.1 Multi-Resource Integration

ORE extends effectiveness measurement beyond single machines to integrated production systems including labor, materials, energy, and information flows:

$$ ORE = OEE \times Material\ Efficiency \times Labor\ Efficiency \times Energy\ Efficiency $$

$$ ORE = \left(\frac{Good\ Output}{Theoretical\ Max}\right) \times \left(\frac{Std\ Material}{Actual\ Material}\right) \times \left(\frac{Std\ Labor\ Hours}{Actual\ Labor\ Hours}\right) \times \left(\frac{Std\ Energy}{Actual\ Energy}\right) $$

### 4.2 Sustainability Integration in ORE 2.0

Modern ORE incorporates environmental KPIs:

$$ ORE_{green} = ORE \times \left(1 - \frac{Carbon\ Footprint_{actual}}{Carbon\ Footprint_{target}}\right)^{\alpha} $$

where $\alpha$ is a weighting exponent reflecting organizational sustainability priorities. This aligns with ISO 14001 and emerging ESG reporting requirements.

## 5. OEE 2.0: Digital Transformation

### 5.1 Real-Time Data Acquisition

Traditional OEE relied on manual data collection with significant latency and accuracy issues. OEE 2.0 leverages:
- PLC/SCADA integration via OPC-UA
- IoT edge sensors for micro-stop detection (<30 seconds)
- Machine vision for automated quality classification
- MES/ERP integration for automatic order and material tracking

Data accuracy improves from ~70% (manual) to >98% (automated), fundamentally changing loss analysis reliability.

### 5.2 Predictive OEE

Machine learning models forecast OEE degradation before it occurs:

$$ \hat{OEE}(t+\Delta t) = f(X_t, X_{t-1}, ..., X_{t-n}, M_t, E_t) $$

where $X$ represents process variables, $M$ maintenance state, and $E$ environmental conditions. LSTM and transformer architectures achieve R² > 0.92 for 4-hour OEE prediction horizons (Chen & Liu, 2024).

### 5.3 Context-Aware Loss Classification

AI-powered root cause attribution replaces simplistic loss categorization:

$$ P(L_k | S, C) = \text{softmax}(W \cdot h(S, C) + b) $$

where $S$ is the sensor feature vector, $C$ is contextual metadata (product type, shift, operator experience), and $L_k$ is loss category. This enables targeted countermeasures rather than generic improvement efforts.

## 6. Advanced Performance Analytics

### 6.1 Multi-Dimensional Pareto Analysis

Traditional Pareto ranks losses by frequency or duration. Advanced analytics apply weighted multi-criteria ranking:

$$ Score_j = w_1 \cdot F_j + w_2 \cdot D_j + w_3 \cdot C_j + w_4 \cdot R_j $$

where $F$ = frequency, $D$ = duration, $C$ = cost impact, $R$ = recurrence risk, and weights are determined through AHP or stakeholder preference elicitation.

### 6.2 Bottleneck Shift Detection

In serial production lines, improving one station's OEE may shift the bottleneck elsewhere. Dynamic bottleneck identification uses:

$$ BN(t) = \arg\min_i \{Throughput_i(t)\} $$

with statistical process control to distinguish true bottlenecks from transient starvation/blockage events. Simulation-based what-if analysis validates improvement ROI before implementation.

## 7. Implementation Best Practices

1. **Start with manual OEE** to build organizational understanding before automating
2. **Validate automated data** against manual audits for minimum 3 months
3. **Focus on loss elimination**, not metric optimization—gaming OEE destroys value
4. **Integrate with CI processes**: OEE losses feed Kaizen backlog prioritization
5. **Train operators on interpretation**: OEE is a diagnostic tool, not a performance scorecard
6. **Benchmark cautiously**: Compare trends internally before external benchmarking

## 8. Case Study: Semiconductor Fab OEE 2.0 Deployment

A 300mm wafer fab implemented OEE 2.0 across lithography cluster tools (2024):
- Integrated 2,400 sensor streams via SECS/GEM protocol
- Deployed ML-based micro-stop classifier reducing unclassified downtime from 35% to 8%
- Achieved 12% OEE improvement in 6 months ($48M annualized revenue impact)
- Key enabler: cross-functional war room with real-time OEE dashboards updated every 60 seconds

## References

1. Nakajima, S. (2023). *Introduction to TPM: Total Productive Maintenance* (Updated ed.). Productivity Press.
2. Muchiri, V., & Pintelon, L. (2024). Evolution of overall equipment effectiveness: A systematic review and future directions. *International Journal of Production Economics*, 267, 109082.
3. Chen, Y., & Liu, Z. (2024). Deep learning-based predictive OEE for semiconductor manufacturing. *IEEE Transactions on Semiconductor Manufacturing*, 37(2), 215–228.
4. Wudhikarn, R., & Chakpitak, N. (2023). Overall resource effectiveness (ORE) measurement framework for sustainable manufacturing. *Journal of Cleaner Production*, 412, 137456.
5. ISO. (2024). *ISO 22400-2: Automation Systems and Integration — Key Performance Indicators (KPIs) for Manufacturing Operations Management — Part 2: Definitions and Descriptions*. International Organization for Standardization.
6. Scott, D., & Wilkie, G. (2025). TEEP vs OEE: Strategic capacity planning in post-pandemic manufacturing. *Production Planning & Control*, 36(3), 312–329.
7. Li, J., Blumenfeld, D., & Marin, S. (2023). Manufacturing system design with OEE-driven bottleneck analysis. *Manufacturing Science and Engineering*, 145(8), 081005.
8. SEMI. (2024). *SEMI E10-0703: Specification for Definition and Measurement of Equipment Reliability, Availability, Maintainability, and Utilization*. SEMI International Standards.

</content>