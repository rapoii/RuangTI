# Module 277: Consequence Modeling for Industrial Catastrophes: BLEVE, Vapour Cloud Explosions & Toxic Dispersion

## Conceptual Framework

Quantitative risk assessment (QRA) rests on two pillars: frequency analysis and **consequence modeling** — the physics-based prediction of how released energy and matter translate into harm distances. Consequence modeling chains four stages: (1) source-term definition (release rate, flash fraction, pool formation), (2) dispersion of flammable/toxic clouds, (3) hazard-phenomenon intensity (thermal radiation, overpressure, concentration fields), and (4) dose-effect translation via probit functions into injury/fatality probabilities.

Key phenomena include the **BLEVE** (Boiling Liquid Expanding Vapour Explosion): a pressure vessel containing superheated liquid fails catastrophically, producing a fireball with intense thermal radiation plus vessel-fragment projectiles. **Vapour Cloud Explosions (VCE)** occur when a dispersed flammable cloud detonates or deflagrates; engineering estimates use TNT equivalency (conservative, point-source) and the Multi-Energy method (recognizing partially confined, congested volumes as the true driver of blast strength). **Toxic dispersion** spans passive Gaussian plume behavior for neutrally buoyant gases to heavy-gas models (Britter–McQuaid workbook, SLAB/DEGADIS) where dense-cloud gravity spreading dominates near-field concentrations.

## Mathematical Formulation

BLEVE fireball point-source thermal radiation at stand-off distance $x$:

$$q(x) = \dfrac{E \cdot F_{\text{view}}\,\tau_{\text{atm}}}{4\pi x^2}, \qquad E = \eta\, m_f\, H_c$$

with atmospheric transmissivity $\tau_{\text{atm}}$ and view factor $F_{\text{view}}$. TNT equivalency converts flammable mass to blast source:

$$W_{\text{TNT}} = \dfrac{\eta\, m_f\, \Delta H_c}{\Delta H_{\text{TNT}}}, \qquad Z = \dfrac{R}{W_{\text{TNT}}^{1/3}}$$

where yield factor $\eta \approx 0.03–0.10$ for VCEs; scaled distance $Z$ reads peak side-on overpressure from standardized curves. Steady-state Gaussian plume ground-level concentration downwind:

$$C(x,y,0) = \dfrac{Q}{\pi u \sigma_y \sigma_z}\exp\!\left(-\dfrac{y^2}{2\sigma_y^2} - \dfrac{H^2}{2\sigma_z^2}\right)$$

with dispersion coefficients $\sigma_y, \sigma_z$ parameterized by Pasquill stability class (A–F). Toxic load converts exposure to harm via probit:

$$Pr = a + b\ln(C^n t), \qquad P_{\text{fatality}} = \Phi(Pr - 5)$$

using substance-specific constants (e.g., chlorine: $a=-8.29$, $b=0.92$, $n=2$).

## Implementation Methodology

1. Enumerate release scenarios (hole sizes, full-bore rupture, line rapture) with material inventories and operating conditions.
2. Compute source terms including flashing (thermodynamic equilibrium flash), aerosol rainout, and pool evaporation.
3. Select model class per buoyancy regime and terrain; run meteorological joint-frequency distributions (wind speed × direction × stability).
4. Translate intensity fields into effect zones (1% / 50% lethality contours; 35 kPa / 16.5 kPa overpressure rings) and overlay population density for risk integration (Module 278).
5. Validate against historical incident data and benchmark software (PHAST, ALOHA); document assumptions for regulator review.

## Industrial Applications & Case Evidence

Consequence modeling of a 50,000-ton LPG tank farm defined buffer-zone boundaries separatingBLEVE radiation footprints and VCE overpressure rings from residential areas, directly sizing the deluge-cooling requirement (Module 276 barriers) and evacuation planning radius. The same toolkit supports siting studies under Indonesian Permenaker and international Seveso III obligations, LNG import-terminal QRA, ammonia refrigeration PHA, and hydrogen refueling-station permitting.

## Related Modules

Module 274 (Industrial Safety Management), Module 275 (HIRADC), Module 276 (Bow-Tie & Barrier Management), Module 278 (Societal Risk, ALARP & VSL).

## References

1. Center for Chemical Process Safety (CCPS). (2020). *Guidelines for Consequence Analysis of Chemical Releases*. AIChE.
2. Mannan, S. (Ed.). (2012). *Lees' Loss Prevention in the Process Industries* (4th ed.). Butterworth-Heinemann.
3. TNO. *Methods for the Calculation of Physical Effects (Yellow Book)*. TNO Defence, Security and Safety.
4. Process Safety Progress (2023).
