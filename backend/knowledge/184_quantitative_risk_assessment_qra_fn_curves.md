# Module 184: Quantitative Risk Assessment (QRA, Individual Risk, F-N Curves)

## 1. Introduction to Quantitative Risk Assessment
Quantitative Risk Assessment (QRA) is a systematic methodology for estimating the frequency and consequences of hazardous events in process industries. Unlike qualitative methods (HAZOP, LOPA), QRA produces numerical risk metrics that can be compared against regulatory tolerability criteria. It integrates failure rate data, dispersion modeling, ignition probabilities, and vulnerability models to generate **Individual Risk** contours and **Societal Risk** (F-N curves).

## 2. Fundamental Risk Metrics

### 2.1 Individual Risk (IR)
Individual Risk is defined as the probability per year that an unprotected person at a specific location will die due to potential accidents:

$$
IR(x,y) = \sum_{i=1}^{n} f_i \cdot P_{fatality,i}(x,y)
$$

Where:
*   $f_i$: Frequency of accident scenario $i$ (events/year)
*   $P_{fatality,i}$: Probability of fatality at location $(x,y)$ given scenario $i$

IR is typically presented as iso-risk contours on a site plan. Common acceptance criteria (UK HSE, Netherlands):
*   $> 10^{-3}$/yr: Intolerable for workers and public
*   $10^{-4}$ to $10^{-6}$/yr: ALARP region
*   $< 10^{-6}$/yr: Broadly acceptable

### 2.2 Societal Risk and F-N Curves
Societal risk accounts for the potential for multiple fatalities in a single event. It is expressed as an F-N curve plotting cumulative frequency ($F$) against number of fatalities ($N$):

$$
F(N) = \sum_{i | N_i \geq N} f_i
$$

The F-N curve is compared against limit lines. The UK HSE guideline defines two boundaries:
*   Upper limit: $F = 10^{-3} / N$
*   Lower limit: $F = 10^{-5} / N$

Events above the upper line are intolerable; between lines require ALARP demonstration; below lower line are acceptable.

## 3. Scenario Development and Frequency Estimation

### 3.1 Event Tree Analysis
For each initiating event identified via HAZOP/LOPA, an event tree maps possible outcomes:

$$
f_{outcome} = f_{initiating} \times \prod_{j=1}^{m} P_{branch,j}
$$

Branch probabilities include:
*   Immediate vs. delayed ignition
*   Wind direction/speed categories
*   Emergency system success/failure
*   Evacuation effectiveness

### 3.2 Failure Rate Data Sources
Reliable frequency estimation requires validated databases:
*   **OREDA:** Offshore Reliability Data (oil & gas equipment)
*   **CCPS Guidelines:** Process Equipment Reliability Database
*   **EXIDA:** Safety instrumented function failure rates
*   **HCRD:** Human Cognitive Reliability Database

Generic data must be adjusted using Bayesian updating when plant-specific maintenance and inspection records exist.

## 4. Consequence Modeling

### 4.1 Release and Dispersion
Source term modeling uses thermodynamic phase equilibrium to determine release rate ($\dot{m}$). For pressurized liquid releases through orifices:

$$
\dot{m} = C_d A \rho \sqrt{\frac{2(P - P_{atm})}{\rho}}
$$

Dispersion modeling (Gaussian plume/puff or CFD) predicts concentration fields. Key outputs:
*   Toxic endpoint distances (ERPG-2, IDLH)
*   Flammable vapor cloud extent (LFL/UFL fractions)
*   Thermal radiation flux from fires ($kW/m^2$)

### 4.2 Vulnerability Models
Physical effects are converted to fatality probabilities using probit functions:

$$
Y = k_1 + k_2 \ln(V)
$$

Where $V$ is the dose (e.g., thermal radiation intensity $\times$ time$^{4/3}$). Fatality probability:

$$
P = \Phi(Y - 5)
$$

Standard probit parameters exist for thermal radiation, overpressure, and toxic exposure (CCPS, TNO Green Book).

## 5. Uncertainty and Sensitivity Analysis
QRA results carry significant uncertainty from input data variability and model simplifications. Best practice requires:
*   **Monte Carlo simulation:** Propagate parameter distributions through the model
*   **Tornado diagrams:** Identify dominant contributors to risk variance
*   **Scenario bounding:** Conservative assumptions documented transparently

Regulatory submissions must distinguish between aleatory (inherent randomness) and epistemic (knowledge deficiency) uncertainty.

## 6. Software Tools and Standards
Industry-standard QRA platforms include DNV PHAST/Safeti, GexCon FLACS, and TNO EFFECTS/RISKCURVES. All should comply with:
*   **ISO 31010:2019:** Risk management — Risk assessment techniques
*   **CCPS Guidelines for Chemical Process Quantitative Risk Analysis (3rd ed.)**
*   **API RP 752/753:** Building siting and blast-resistant design

## 7. References
1.  **CCPS.** (2023). *Guidelines for Chemical Process Quantitative Risk Analysis* (3rd ed.). Wiley-AIChE.
2.  **ISO 31010:2019.** *Risk management — Risk assessment techniques*. International Organization for Standardization.
3.  **DNV.** (2024). *PHAST & Safeti Technical Reference Manual v8.10*. Det Norske Veritas.
4.  **Mannan, S.** (2023). *Lees' Loss Prevention in the Process Industries* (5th ed.). Butterworth-Heinemann.
5.  **Pasman, H. J., & Reniers, G.** (2024). "Advances in dynamic QRA: Integrating real-time sensor data with Bayesian networks for major hazard sites." *Reliability Engineering & System Safety*, 241, 109612.
6.  **Zhang, L., et al.** (2025). "CFD-enhanced societal risk assessment for LNG terminals: Comparing Gaussian vs. FLACS-based F-N curves in congested geometries." *Journal of Loss Prevention in the Process Industries*, 93, 105478.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
