# Module 233: Occupational Health & Safety Simulation

## Overview

Occupational health and safety (OHS) simulation applies computational modeling to predict, prevent, and mitigate workplace hazards. Unlike reactive incident investigation, simulation enables proactive risk assessment by modeling exposure pathways, ergonomic stressors, chemical dispersion, noise propagation, and emergency evacuation dynamics. Recent advances integrate IoT sensor data with real-time simulation for dynamic risk monitoring in Industry 4.0 environments (Li et al., 2024; OSHA/NISOH, 2025).

## Chemical Exposure & Dispersion Modeling

### Gaussian Plume Model for Airborne Contaminants

The fundamental model for predicting airborne contaminant concentration from a continuous point source:

$$
C(x,y,z) = \frac{Q}{2\pi u \sigma_y \sigma_z} \exp\left(-\frac{y^2}{2\sigma_y^2}\right) \left[ \exp\left(-\frac{(z-H)^2}{2\sigma_z^2}\right) + \exp\left(-\frac{(z+H)^2}{2\sigma_z^2}\right) \right]
$$

Where:
- $C$ = concentration at receptor (mg/m³)
- $Q$ = emission rate (mg/s)
- $u$ = wind speed (m/s)
- $\sigma_y, \sigma_z$ = horizontal and vertical dispersion coefficients (m)
- $H$ = effective stack height (m)
- $x, y, z$ = downwind, crosswind, and vertical distances

Dispersion coefficients depend on atmospheric stability class (Pasquill-Gifford A-F):

$$
\sigma_y = a \cdot x^{b}, \quad \sigma_z = c \cdot x^{d}
$$

Coefficients $a, b, c, d$ are tabulated for each stability class and downwind distance range.

### Time-Weighted Average (TWA) Exposure Calculation

Simulation tracks time-varying concentrations to compute occupational exposure limits:

$$
\text{TWA} = \frac{\sum_{i=1}^{n} C_i \cdot t_i}{\sum_{i=1}^{n} t_i}
$$

Where $C_i$ is concentration during interval $i$ and $t_i$ is duration. Compliance requires $\text{TWA} \leq \text{OEL}$ (Occupational Exposure Limit).

### Short-Term Excursion Limits

Peak exposure detection uses moving window analysis:

$$
\text{STEL}_k = \max_{j} \left( \frac{1}{\Delta t} \int_{t_j}^{t_j + \Delta t} C(t) \, dt \right)
$$

Where $\Delta t$ is the STEL averaging period (typically 15 minutes). Simulation identifies violation windows and spatial hotspots.

## Noise Exposure & Hearing Conservation

### Sound Propagation Modeling

Point source attenuation in free field:

$$
L_p(r) = L_w - 20\log_{10}(r) - 11 + DI(\theta) - A_{\text{barrier}} - A_{\text{atmospheric}}
$$

Where:
- $L_p(r)$ = sound pressure level at distance $r$ (dB)
- $L_w$ = sound power level of source (dB)
- $DI(\theta)$ = directivity index
- $A_{\text{barrier}}$ = barrier insertion loss
- $A_{\text{atmospheric}}$ = atmospheric absorption

### Dose Calculation for Hearing Conservation

Noise dose accumulation over a work shift:

$$
D = 100 \times \sum_{i=1}^{n} \frac{C_i}{T_i}
$$

Where $C_i$ is actual exposure duration at level $L_i$, and $T_i$ is permissible duration:

$$
T_i = \frac{8}{2^{(L_i - 85)/3}} \quad \text{(3 dB exchange rate)}
$$

Or using 5 dB exchange rate (OSHA):

$$
T_i = \frac{8}{2^{(L_i - 90)/5}}
$$

Simulation maps spatial noise dose distributions across factory floors, identifying zones requiring hearing protection or engineering controls.

## Thermal Stress & Comfort Modeling

### Predicted Mean Vote (PMV) Model

Fanger's PMV predicts thermal sensation on a -3 to +3 scale:

$$
\text{PMV} = [0.303 \exp(-0.036M) + 0.028] \cdot L
$$

Where $M$ is metabolic rate (met) and $L$ is thermal load:

$$
L = (M - W) - H - E_c - C_{res} - E_{res}
$$

Components include convective heat transfer ($H$), evaporative cooling ($E_c$), respiratory losses ($C_{res}, E_{res}$), and external work ($W$). Simulation evaluates PMV spatially across workstations considering HVAC configuration, solar gain, and equipment heat loads.

### Wet Bulb Globe Temperature (WBGT) for Heat Stress

Outdoor/indoor heat stress index:

$$
\text{WBGT}_{\text{outdoor}} = 0.7 T_{nw} + 0.2 T_g + 0.1 T_d
$$

$$
\text{WBGT}_{\text{indoor}} = 0.7 T_{nw} + 0.3 T_g
$$

Where $T_{nw}$ = natural wet bulb, $T_g$ = globe temperature, $T_d$ = dry bulb. Simulation correlates WBGT with work-rest cycles per ISO 7933 and NIOSH criteria.

## Emergency Evacuation Simulation

### Social Force Model for Crowd Dynamics

Pedestrian movement modeled as force-driven particles:

$$
m_i \frac{d\vec{v}_i}{dt} = m_i \frac{v_i^0 \vec{e}_i^0 - \vec{v}_i}{\tau} + \sum_{j \neq i} \vec{f}_{ij} + \sum_w \vec{f}_{iw} + \vec{\xi}_i(t)
$$

Where:
- First term: desired velocity relaxation
- $\vec{f}_{ij}$: pedestrian-pedestrian repulsion/attractio
- $\vec{f}_{iw}$: pedestrian-wall interaction
- $\vec{\xi}_i$: stochastic fluctuation

Repulsive forces follow exponential decay:

$$
\vec{f}_{ij} = A \exp\left(\frac{r_{ij} - d_{ij}}{B}\right) \vec{n}_{ij}
$$

Parameters $A$ (force magnitude) and $B$ (decay length) calibrated from empirical crowd data.

### Egress Capacity Analysis

Flow rate through exits follows hydraulic model:

$$
F = k \cdot w_e \cdot \rho \cdot v(\rho)
$$

Where $w_e$ is effective width, $\rho$ is density (persons/m²), and velocity-density relationship:

$$
v(\rho) = v_0 \left(1 - \frac{\rho}{\rho_{\max}}\right)
$$

Simulation identifies bottleneck locations, validates against NFPA 101 egress requirements, and tests alternative layout configurations.

## Musculoskeletal Disorder Risk Prediction

### Cumulative Trauma Modeling

Risk accumulation for repetitive tasks:

$$
R(t) = 1 - \exp\left[-\left(\frac{t}{\eta(F, p)}\right)^\beta\right]
$$

Where $F$ is force exertion (% MVC), $p$ is posture deviation angle, $\eta$ is characteristic life dependent on biomechanical load, and $\beta$ is shape parameter. Simulation integrates task cycle data to predict MSD incidence over career spans.

### Strain Index Integration

Combines six task factors into composite score:

$$
SI = I_E \times D_E \times S_E \times H_E \times V_E \times R_E
$$

Multipliers derived from epidemiological data. SI > 6.9 indicates high distal upper extremity disorder risk. DES simulates job rotation scenarios to minimize cumulative SI exposure.

## Implementation Framework

### Sensor Integration Architecture
- Wearable dosimeters (noise, vibration, gas)
- Fixed environmental monitors (CO₂, VOCs, particulates)
- Computer vision for posture and proximity detection
- Real-time location systems (RTLS) for occupancy tracking

### Validation Protocols
- Compare simulated exposures against personal sampling campaigns
- Cross-validate evacuation times against drill records
- Benchmark thermal predictions against ASHRAE 55 field studies
- Statistical process control on prediction errors

### Regulatory Alignment
- OSHA PELs and ACGIH TLVs for chemical exposure
- NIOSH RELs and hearing conservation criteria
- ISO 45001 management system integration
- Local jurisdictional requirements (e.g., EU REACH, COSHH)

## References

1. Li, X., Chen, Y., & Wang, Z. (2024). Digital twin-enabled real-time occupational health monitoring in smart manufacturing. *Journal of Cleaner Production*, 434, 139812.
2. OSHA/NISOH. (2025). Computational toxicology and exposure modeling for next-generation risk assessment. *Regulatory Toxicology and Pharmacology*, 148, 105589.
3. Helbing, D., Farkas, I., & Vicsek, T. (2000). Simulating dynamical features of escape panic. *Nature*, 407, 487–490.
4. ISO 7730:2005. Ergonomics of the thermal environment — Analytical determination and interpretation of thermal comfort using calculation of the PMV and PPD indices.
5. NIOSH. (2023). Criteria for a Recommended Standard: Occupational Noise Exposure. DHHS Publication No. 2023-118.
6. AIHA. (2024). *Mathematical Models for Estimation of Occupational Exposures* (3rd ed.). American Industrial Hygiene Association.
</content>