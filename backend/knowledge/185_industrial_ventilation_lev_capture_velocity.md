# Module 185: Industrial Ventilation Design (LEV, Capture Velocity & Friction)

## 1. Introduction to Industrial Ventilation
Industrial ventilation is the primary engineering control for managing airborne contaminants, heat, and humidity in occupational environments. While general dilution ventilation maintains overall air quality, **Local Exhaust Ventilation (LEV)** is the preferred method for capturing hazardous substances at their source before they enter the worker's breathing zone. Effective LEV design relies on fluid mechanics principles, specifically capture velocity, hood entry losses, and duct friction calculations as defined in **ACGIH Industrial Ventilation Manual** and **ANSI/ASHRAE Standard 62.1**.

## 2. Fundamentals of Airflow and Capture Velocity

### 2.1 Capture Velocity ($V_c$)
Capture velocity is the minimum air velocity required at the point of contaminant generation to overcome opposing air currents and direct the contaminant into the hood. It is distinct from face velocity or duct transport velocity.

$$
V_c = f(\text{toxicity}, \text{generation rate}, \text{cross-drafts})
$$

Typical capture velocities range from 0.25 m/s for low-toxicity vapors to >2.5 m/s for high-velocity grinding dusts. A common design error is confusing capture velocity with average face velocity; capture velocity decays rapidly with distance from the hood opening.

### 2.2 Velocity Decay for Plain Openings
For a plain circular opening (unflanged), the centerline velocity $V_x$ at distance $x$ from the hood face is approximated by:

$$
\frac{V_x}{V_0} = \frac{A}{4\pi x^2 + A}
$$

Where:
*   $V_x$: Centerline velocity at distance $x$ (m/s)
*   $V_0$: Average face velocity (m/s)
*   $A$: Hood opening area (m²)
*   $x$: Distance along centerline from hood face (m)

This inverse-square relationship demonstrates why hoods must be placed as close to the source as possible. Doubling the distance requires quadrupling the exhaust volume to maintain the same capture velocity.

### 2.3 Flanged vs. Unflanged Hoods
Adding a flange reduces ineffective airflow from behind the hood. For a flanged rectangular hood:

$$
Q = V_c \cdot L \cdot W \cdot K_f
$$

Where $K_f$ is the flange factor (typically 0.75 for wide flanges). Empirical equations like those from DallaValle provide more accurate estimates for specific geometries:

$$
Q = V_c \left( 10x^2 + A \right) \quad \text{(Unflanged)}
$$
$$
Q = 0.75 V_c \left( 10x^2 + A \right) \quad \text{(Flanged)}
$$

## 3. Duct System Design and Pressure Losses

### 3.1 Transport Velocity
Ducts must maintain sufficient velocity to prevent particle settling. Minimum transport velocities are material-dependent:
*   Vapors/Gases: Any velocity (no settling)
*   Fine Dust (fume): 10–12 m/s
*   Coarse Dust (wood, grain): 15–18 m/s
*   Heavy/Moist Particles: 18–23 m/s

### 3.2 Friction Loss (Darcy-Weisbach)
Friction loss in straight duct sections is calculated using the Darcy-Weisbach equation or the simplified ASHRAE chart method:

$$
\Delta P_f = f \cdot \frac{L}{D_h} \cdot \frac{\rho V^2}{2}
$$

Where:
*   $\Delta P_f$: Friction pressure loss (Pa)
*   $f$: Friction factor (Moody chart, function of Re and roughness)
*   $L$: Duct length (m)
*   $D_h$: Hydraulic diameter (m)
*   $\rho$: Air density (~1.2 kg/m³ at STP)
*   $V$: Duct velocity (m/s)

For standard galvanized steel round ducts, the ASHRAE friction chart provides $\Delta P/L$ directly based on flow rate and diameter.

### 3.3 Dynamic Losses (Fittings)
Pressure losses through elbows, transitions, and entries are expressed as velocity pressure fractions:

$$
\Delta P_d = C \cdot VP = C \cdot \left( \frac{V}{1.29} \right)^2 \quad [\text{Pa, with } V \text{ in m/s}]
$$

Or in Imperial units: $VP = (V/4005)^2$ inches w.g.

Common loss coefficients ($C$):
*   Hood Entry (plain): 0.93
*   Hood Entry (tapered/flanged): 0.03–0.15
*   90° Elbow (R/D=1.5): 0.24
*   Sudden Expansion: $(1 - A_1/A_2)^2$

### 3.4 Fan Static Pressure Requirement
The fan must overcome total system losses plus provide adequate exit velocity pressure:

$$
FSP = \sum \Delta P_{friction} + \sum \Delta P_{dynamic} + VP_{exit} - VP_{inlet}
$$

System effect factors should be applied to account for non-ideal inlet/outlet conditions per AMCA 201.

## 4. Performance Testing and Balancing

### 4.1 Traverse Measurements
Airflow verification requires pitot tube traverses per ISO 3966 or ASHRAE 111. For round ducts, log-linear traverse points ensure representative sampling across boundary layers:

$$
r_n = R \sqrt{\frac{2n-1}{2N}}
$$

Where $r_n$ is the radial position of point $n$, $R$ is duct radius, and $N$ is number of traverse points per diameter.

### 4.2 Capture Velocity Verification
Field validation uses smoke tubes, anemometers, or tracer gas methods to confirm actual capture at the generation point. Measured values often deviate 20–40% from design due to cross-drafts, process changes, or duct leakage.

## 5. Recent Advances and Standards Updates

### 5.1 Computational Fluid Dynamics (CFD) Integration
Modern LEV design increasingly uses CFD to model complex capture zones where empirical equations fail. Studies show CFD can predict capture efficiency within ±10% when validated against field measurements, enabling optimization of hood geometry and placement before installation.

### 5.2 Smart Ventilation Systems
Variable frequency drives (VFDs) coupled with real-time particle/gas sensors enable demand-controlled ventilation. Research demonstrates 30–50% energy savings while maintaining compliance with OELs through adaptive capture velocity control.

## 6. References

1.  **ACGIH.** (2024). *Industrial Ventilation: A Manual of Recommended Practice for Design* (31st ed.). American Conference of Governmental Industrial Hygienists.
2.  **ASHRAE.** (2023). *ANSI/ASHRAE Standard 62.1-2022: Ventilation for Acceptable Indoor Air Quality*. ASHRAE.
3.  **ISO 3966:2020.** *Measurement of fluid flow in closed conduits — Velocity area method using Pitot static tubes*. International Organization for Standardization.
4.  **AMCA.** (2023). *AMCA Standard 201-23: Fans and Systems*. Air Movement and Control Association.
5.  **Wang, X., & Liu, Y.** (2024). "CFD-assisted optimization of local exhaust ventilation for welding fume capture in shipyard fabrication." *Journal of Occupational and Environmental Hygiene*, 21(3), 178-192.
6.  **Park, J., & Kim, S.** (2025). "Energy-efficient demand-controlled industrial ventilation using real-time aerosol monitoring and machine learning predictive control." *Building and Environment*, 267, 112145.

</content>