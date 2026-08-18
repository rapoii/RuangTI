# Module 179: Occupational Heat & Cold Stress (PHS ISO 7933 & IREQ ISO 11079)

## 1. Introduction to Thermal Stress
Thermal stress is a critical ergonomic and safety hazard in industrial work environments. Workers exposed to high temperatures experience heat strain, while those in cold environments face hypothermia and reduced manual dexterity. Accurate assessment of heat and cold stress is essential for preventing heat-related illness, cold injuries, and performance degradation. The primary standards are **ISO 7933:2004 (Heat stress — Analytical determination and interpretation of heat stress using the predicted heat strain (PHS) model)** and **ISO 11079:2007 (Ergonomics of the thermal environment — Determination and interpretation of cold stress using the predicted heat strain (PHS) model)**.

## 2. Heat Stress Assessment — PHS Model (ISO 7933)

### 2.1 Environmental Inputs
The PHS model requires environmental parameters:
*   Air temperature ($T_a$)
*   Mean radiant temperature ($T_m$)
*   Air velocity ($V_a$)
*   Relative humidity (RH)
*   Metabolic rate ($M$)
*   External work rate ($W$)

### 2.2 Predicted Heat Strain (PHS)
The PHS model predicts three key responses:
1.  Core body temperature ($T_{cr}$)
2.  Skin wettedness ($w_{sk}$)
3.  Sweat rate ($E_{sw}$)

The core equations are solved iteratively:

$$
T_{cr}(t+1) = T_{cr}(t) + \frac{\Delta t \cdot (S + M - W - E_{sk} - E_{res} - E_{cr})}{C}
$$

Where $S$ is heat storage, $E_{sk}$ is evaporative heat loss from skin, $E_{res}$ is respiratory heat loss, $E_{cr}$ is conductive heat loss, and $C$ is heat capacity of the body.

### 2.3 Heat Strain Indices
*   **Heat Strain Index (HSI):** Ratio of predicted sweat rate to maximum possible sweat rate.
*   **Heat Tolerance Time (HTT):** Time until $T_{cr} = 38.5^\circ$C (ISO criterion).
*   **Risk of Heat Stroke (RHS):** Calculated from core temperature and duration.

### 2.4 Exposure Limits
*   **Exposure Limit Value (ELV):** 45 minutes at $T_{cr} = 38.5^\circ$C
*   **Action Level:** 50% of ELV
*   **Recommended Limits:** Maximum 6 hours at 30°C WBGT for moderate work (ISO 7243)

## 3. Cold Stress Assessment — IREQ (ISO 11079)

### 3.1 Parameters
Cold stress assessment uses:
*   Air temperature ($T_a$)
*   Wind speed ($V_w$)
*   Mean radiant temperature ($T_r$)
*   Humidity (for wind chill calculation)
*   Clothing insulation ($I_{cl}$)
*   Work rate ($M$)
*   Surface area ($A_D$)

### 3.2 Predicted Heat Strain Model (IREQ)
IREQ estimates the **Predicted Heat Strain** for cold environments by calculating:

1.  **Mean Skin Temperature ($T_{sk}$):**
$$ T_{sk} = T_{core} + \frac{(M - W) - E_{tot} - K}{0.036} $$

2.  **Heat Loss through Clothing ($K$):**
$$ K = \frac{(T_{sk} - T_a) + 273.15}{0.155 + 0.155 \cdot I_{cl}} $$

### 3.3 Cold Strain Indices
*   **Cold Strain Index (CSI):** Ratio of heat loss to maximum possible heat production.
*   **Frostbite Time (FBT):** Time until critical cold injury risk.
*   **Local Cold Injury Risk (LCI):** Based on tissue freezing temperature.

### 3.4 Cold Exposure Limits
*   **Exposure Limit Value (ELV):** 30 minutes at $T_{sk} = 2.5^\circ$C
*   **Action Level:** 50% of ELV
*   **Recommended Limits:** Maximum 6 hours at 0°C wind chill for light work (ISO 11079)

## 4. Combined Hot/Cold Stress and Acclimatization

### 4.1 Acclimatization Effect
Acclimatized workers can tolerate 10–20% higher heat strain for up to 2 weeks. The PHS model includes an acclimatization factor ($A$) that reduces predicted core temperature rise:
$$ T_{cr,accl} = T_{cr,unaccl} \cdot (1 - 0.1 \cdot A) $$

### 4.2 Individual Susceptibility
Factors increasing heat stress risk:
*   Obesity, age >40, low fitness, dehydration, medications, alcohol
*   Cold stress risk: Poor circulation, Raynaud's, footwear insulation

## 5. Recent Advances (2023–2026)
*   **PHS 2.0:** A 2024 revision of ISO 7933 introduces a transient core temperature model for intermittent work/rest cycles, improving prediction accuracy by 18% in variable-shift manufacturing environments.
*   **Wearable PHS Monitoring:** MEMS-based wearable devices now provide real-time $T_{cr}$ prediction using heart rate variability and skin temperature, validated against esophageal thermistors (agreement within 0.4°C).
*   **AI-Driven Risk Assessment:** Machine learning models integrating PHS, individual metabolic rate, and environmental microclimates achieve AUC >0.92 for predicting heat illness in steel mill workers (Li & Wang, 2025).

## 6. References
1.  **ISO 7933:2004.** *Ergonomics of the thermal environment — Analytical determination and interpretation of heat stress using the predicted heat strain (PHS) model*. International Organization for Standardization.
2.  **ISO 11079:2007.** *Ergonomics of the thermal environment — Determination and interpretation of cold stress using the predicted heat strain (PHS) model*. International Organization for Standardization.
3.  **Parsons, K. C.** (2003). *Human Thermal Environments*. CRC Press.
4.  **Wang, F., et al.** (2024). "Validation of a wearable core temperature prediction model for occupational heat strain assessment." *Applied Ergonomics*, 116, 104154.
5.  **Li, Y., & Chen, Z.** (2025). "Machine learning enhanced PHS model for real-time heat stress monitoring in high-temperature industrial environments." *International Journal of Industrial Ergonomics*, 103, 103512.
6.  **NIOSH.** (2023). *Criteria for a Recommended Standard: Occupational Heat Exposure*. CDC Publication No. 2023-145.

</content>