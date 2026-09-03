# Module 169: Mental Workload Assessment (NASA-TLX, SWAT, HRV)

## Conceptual Framework
Mental workload (MWL) is defined as the proportion of an operator's limited cognitive capacity consumed by task demands. The construct follows a capacity-resource model (Kahneman/Wickens): performance degrades non-linearly at both extremes — **overload** produces errors and tunnel vision; **underload** produces vigilance decrement and mind-wandering. Modern human-AI teaming (supervisory control of automation, autonomous vehicle monitoring) makes underload the emerging industrial problem. Assessment instruments fall into three classes: subjective rating scales (NASA-TLX, SWAT), performance-based measures (secondary task), and physiological indices (HRV, EEG, eye metrics). Best practice triangulates at least two classes because each has distinct blind spots.

## Subjective Measures
### NASA Task Load Index (TLX)
Six dimensions — Mental Demand, Physical Demand, Temporal Demand, Performance, Effort, Frustration — rated 0–100 in 5-point steps, weighted via pairwise importance comparisons (Raw TLX omits weighting):

$$WL_{TLX} = \frac{\sum_{i=1}^{6} W_i R_i}{15}, \qquad \sum_{i=1}^{6} W_i = 15$$

where $W_i$ is the weight (times chosen in pairwise comparison) and $R_i$ is the raw rating. Hart & Staveland's (1988) original validation and Hart's (2006) 20-year review confirm reliability across aviation, process control, and medical domains; recent 2025 validation confirms sensitivity in hybrid human-AI teaming environments.

### SWAT (Subjective Workload Assessment Technique)
Three dimensions — Time Load, Mental Effort, Psychological Stress — scaled through conjoint-measurement-derived interval scales, capturing multiplicative dimension interaction that TLX's additive model ignores.

## Physiological Measures
### Heart Rate Variability (HRV)
Time-domain RMSSD reflects parasympathetic (vagal) activity, inversely correlated with MWL:

$$RMSSD = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N-1}\left(RR_{i+1} - RR_i\right)^2}, \qquad pNN50 = \frac{\#\{|RR_{i+1}-RR_i|>50\text{ms}\}}{N-1}\times 100\%$$

Frequency-domain sympathovagal balance via power spectral density of the RR tachogram:

$$Ratio_{LF/HF} = \frac{\int_{0.04}^{0.15} PSD(f)\,df}{\int_{0.15}^{0.40} PSD(f)\,df}$$

Elevated LF/HF ratio and suppressed RMSSD indicate sympathetic dominance under sustained cognitive demand. Recording protocol requires ≥5-minute stationary segments per the Task Force (1996) standard; wearable-grade ECG/PPG introduces motion artifacts requiring filtering.

## Integrated Assessment Framework
Combining subjective and physiological measures reduces Type II errors in workload classification. A 2025 meta-analysis (*International Journal of Human-Computer Studies*) found correlation $r = -0.68$ between NASA-TLX scores and RMSSD during continuous monitoring tasks. Practical fusion uses ML classifiers on multi-modal features to trigger adaptive automation (function reallocation) when predicted workload crosses critical thresholds — the basis of adaptive function allocation in future control rooms.

## Industrial Applications
- Process control room staffing studies and alarm flood redesign.
- Air traffic control sector complexity rating and break scheduling.
- Assembly line job rotation design using workload profiles across stations.
- Autonomous vehicle takeover-readiness monitoring.

## Related Modules
- **Module 168 (Situation Awareness)** — SA-workload coupling under automation.
- **Module 170 (Signal Detection Theory)** — vigilance decrement quantification.
- Module on Shift Work & Circadian Ergonomics — chronic workload accumulation.

## References
- Hart, S. G., & Staveland, L. E. (1988). Development of NASA-TLX: Results of empirical and theoretical research. *Advances in Psychology*, 52, 139–183.
- Hart, S. G. (2006). NASA-Task Load Index (NASA-TLX): 20 years later. *Proceedings of the HFES Annual Meeting*, 50(9), 904–908.
- Charles, R. L., & Nixon, J. (2019). Measuring mental workload using physiological measures: A systematic review. *Applied Ergonomics*, 74, 221–232.
- Li, X., et al. (2025). Convergent validity of NASA-TLX and HRV in autonomous vehicle supervision. *Int. J. Hum.-Comput. Stud.*, 182, 103145.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
