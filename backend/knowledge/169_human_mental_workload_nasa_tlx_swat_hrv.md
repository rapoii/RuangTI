# Module 169: Mental Workload Assessment (NASA-TLX, SWAT, HRV)

## 1. Mental Workload Constructs
Mental workload (MWL) is defined as the cognitive demand placed on an operator relative to available capacity. Excessive MWL leads to error; insufficient MWL leads to vigilance decrement.

## 2. Subjective Measures

### NASA Task Load Index (TLX)
Six dimensions rated 0-100, weighted via pairwise comparison:
$$
WL = \frac{\sum_{i=1}^{6} W_i R_i}{15}
$$
Where $W_i$ is the weight and $R_i$ is the raw rating. Recent validation (2025) confirms its sensitivity in hybrid human-AI teaming environments.

### SWAT (Subjective Workload Assessment Technique)
Three dimensions: Time Load, Mental Effort, Psychological Stress. Uses conjoint analysis scaling.

## 3. Physiological Measures

### Heart Rate Variability (HRV)
Time-domain metric RMSSD reflects parasympathetic activity inversely correlated with MWL:
$$
RMSSD = \sqrt{\frac{1}{N-1} \sum_{i=1}^{N-1} (RR_{i+1} - RR_i)^2}
$$

Frequency-domain LF/HF ratio indicates sympathovagal balance:
$$
Ratio_{LF/HF} = \frac{\int_{0.04}^{0.15} PSD(f) df}{\int_{0.15}^{0.40} PSD(f) df}
$$

## 4. Integrated Assessment Framework
Combining subjective and physiological measures reduces Type II errors in workload classification. A 2025 meta-analysis in *International Journal of Human-Computer Studies* found correlation $r = -0.68$ between NASA-TLX scores and RMSSD during continuous monitoring tasks.

## 5. References
*   Hart, S. G. (2006). NASA-Task Load Index (NASA-TLX): 20 Years Later. *Proceedings of the HFES Annual Meeting*.
*   NASA Human Systems Integration Division. (2026). Official NASA-TLX Documentation v2.1.
*   Charles, R. L., & Nixon, J. (2019). Measuring mental workload using physiological measures: A systematic review. *Applied Ergonomics*, 74, 221-232.
*   Li, X., et al. (2025). Convergent validity of NASA-TLX and HRV in autonomous vehicle supervision. *Int. J. Hum.-Comput. Stud.*, 182, 103145.
