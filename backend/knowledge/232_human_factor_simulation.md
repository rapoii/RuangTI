# Module 232: Human Factor Simulation in Industrial Systems

## Overview

Human factor simulation integrates cognitive, physical, and organizational dimensions of human performance into industrial system models. Unlike pure ergonomic assessment, human factor simulation captures decision-making, attention allocation, fatigue dynamics, team coordination, and error propagation within complex socio-technical systems. Modern platforms combine digital human modeling (DHM), cognitive architecture simulation, and agent-based behavioral modeling to predict system performance as a function of human capabilities and limitations. Recent advances incorporate physiological sensing, eye-tracking integration, and machine learning-based behavior prediction to enhance model fidelity (Karwowski et al., 2024; Stanton & Salmon, 2024).

## Cognitive Workload Modeling

### Mental Workload Quantification
Cognitive workload is modeled using multiple resource theory:

$$WL = \sum_{i=1}^{n} w_i \cdot D_i(t)$$

Where $w_i$ are resource weights and $D_i(t)$ are time-varying demands on visual, auditory, cognitive, and psychomotor channels. NASA-TLX subjective ratings correlate with objective measures:

$$TLX = \sum_{k=1}^{6} W_k \cdot R_k / 15$$

Simulation predicts workload trajectories over shift duration, identifying overload periods before they cause errors.

### Attention Allocation Models
Visual scanning behavior follows salience-weighted probability:

$$P(fixation_j) = \frac{S_j \cdot V_j}{\sum_k S_k \cdot V_k}$$

Where $S_j$ is stimulus salience and $V_j$ is task-relevance value. SEEV (Salience, Effort, Expectancy, Value) model predicts glance distribution across information sources. Simulation validates HMI designs against attention capacity limits.

### Situation Awareness Assessment
Endsley's three-level SA model is operationalized computationally:

$$SA_{level1} = Perception(ElementDetection)$$
$$SA_{level2} = Comprehension(Integration \& Interpretation)$$
$$SA_{level3} = Projection(Prediction \& Anticipation)$$

SAGAT (Situation Awareness Global Assessment Technique) queries during simulation freezes measure SA accuracy. Query response correctness:

$$SA_{score} = \frac{\sum CorrectResponses}{\sum TotalQueries} \times 100\%$$

## Human Error Prediction

### THERP Framework Integration
Technique for Human Error Rate Prediction models error probabilities:

$$HEP_{basic} \times PSF_1 \times PSF_2 \times \cdots = HEP_{adjusted}$$

Performance Shaping Factors (PSFs) include stress, training level, procedure quality, and environmental conditions. Simulation propagates error probabilities through task networks to predict system-level failure rates.

### CREAM Cognitive Reliability
Cognitive Reliability and Error Analysis Method classifies contexts:

$$CREAM_{context} = f(Construction, Organization, Communication, MMI, Training, Teamwork, AvailableTime, WorkingConditions)$$

Control modes determine nominal error ranges:
- **Strategic**: $HEP \in [0.0001, 0.01]$
- **Tactical**: $HEP \in [0.001, 0.1]$
- **Opportunistic**: $HEP \in [0.01, 0.5]$
- **Scrambled**: $HEP \in [0.1, 1.0]$

Simulation tracks context transitions dynamically based on workload and environmental state.

### Skill-Rule-Knowledge Taxonomy
Rasmussen's SRK framework guides error type prediction:

$$Error_{skill} = Slip/Lapse \quad (automatic processing)$$
$$Error_{rule} = Misapplication \quad (procedure following)$$
$$Error_{knowledge} = Mistake \quad (novel problem solving)$$

Simulation assigns error mechanisms based on task familiarity and complexity metrics.

## Team Performance Simulation

### Communication Network Modeling
Team effectiveness depends on information flow topology:

$$Efficiency = \frac{\sum_{i,j} ShortestPath(i,j)^{-1}}{n(n-1)/2}$$

Centralization, density, and clustering coefficients characterize team structure. Simulation evaluates communication protocols under varying stress and workload conditions.

### Shared Mental Model Assessment
Team coordination requires aligned mental models:

$$Agreement = 1 - \frac{\sum |M_i - M_j|}{n(n-1)/2}$$

Where $M_i$ represents individual mental model vectors. Simulation measures convergence over time and identifies misalignment triggers.

### Crew Resource Management
CRM principles are validated through scenario-based simulation:
- Leadership and followership dynamics
- Assertiveness and advocacy behaviors
- Decision-making under uncertainty
- Cross-monitoring and backup behaviors

Behavioral markers are scored against CRM competency frameworks.

## Fatigue and Circadian Modeling

### Biomathematical Fatigue Models
Three-process model predicts alertness:

$$Alertness(t) = S(t) + C(t) + U(t)$$

Where $S$ is homeostatic sleep pressure, $C$ is circadian rhythm, and $U$ is ultradian component. SAFTE and FAID models integrate sleep history and work schedules. Performance impairment correlates with BAC equivalents:

$$Impairment(hrs\_awake) \approx BAC_{equivalent}$$

17 hours awake ≈ 0.05% BAC; 24 hours ≈ 0.10% BAC.

### Shift Schedule Optimization
Simulation evaluates roster patterns against fatigue risk:

$$Risk = f(ShiftLength, StartTime, ConsecutiveDays, RestPeriod)$$

Optimal schedules minimize cumulative fatigue while meeting production requirements. Forward rotation (day→evening→night) outperforms backward rotation physiologically.

## Digital Human Modeling Integration

### Biomechanical-Cognitive Coupling
Physical strain affects cognitive performance:

$$CognitiveCapacity = BaseCapacity \times (1 - \alpha \cdot PhysicalFatigue)$$

Integrated DHM-cognitive models capture this interaction, enabling holistic workstation design that optimizes both physical comfort and mental performance.

### Anthropometric Variability
Population accommodation analysis ensures design inclusivity:

$$Accommodation = P(X_{min} \leq Dimension \leq X_{max})$$

Multivariate anthropometry captures correlated body dimensions better than univariate percentile approaches. Simulation tests designs across digital human populations representing target demographics.

## Software Platforms

- **Siemens Jack/Tecnomatix**: Leading DHM with cognitive task analysis
- **Dassault DELMIA**: Ergonomics and human factors integrated suite
- **IPME (Improving Performance through Modeling)**: Cognitive workload prediction
- **Micro Saint Sharp**: Task network simulation with human performance models
- **AnyLogic**: Agent-based human behavior modeling
- **OpenDS**: Driving simulator platform for transportation human factors

## References

1. Karwowski, W., Ahram, T., & Marek, T. (2024). Human factors and ergonomics in Industry 4.0: A systematic review. *Applied Ergonomics*, 115, 104158.
2. Stanton, N. A., & Salmon, P. M. (2024). Human factors methods: A practical guide for engineering and design (3rd ed.). CRC Press.
3. Wickens, C. D., Hollands, J. G., Banbury, S., & Parasuraman, R. (2023). *Engineering Psychology and Human Performance* (5th ed.). Routledge.
4. Endsley, M. R. (2023). Situation awareness: Future directions and challenges. *Journal of Cognitive Engineering and Decision Making*, 17(2), 115-132.
5. Reason, J. (2023). *Human Error* (Reprint ed.). Cambridge University Press.
6. ISO 9241-210:2019. Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems.
</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
