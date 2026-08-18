# Module 171: Human Reliability Assessment (HEART, THERP, HRA)

## 1. HRA Overview
Human Reliability Assessment quantifies Human Error Probabilities (HEPs) for probabilistic risk assessments. First-generation methods focus on task decomposition; second-generation methods incorporate cognitive factors.

## 2. THERP (Technique for Human Error Rate Prediction)
Event-tree based approach decomposing tasks into binary success/failure nodes:
$$
HEP_{task} = 1 - \prod_{i=1}^{n} (1 - BHEP_i \cdot PSF_i)
$$
Where $BHEP$ is Basic HEP and $PSF$ is Performance Shaping Factor multiplier.

## 3. HEART (Human Error Assessment and Reduction Technique)
Uses Generic Task Types (GTTs) with nominal HEPs modified by Error Producing Conditions (EPCs):
$$
HEP = NHEP \times \prod_{j=1}^{m} [(EPC_j - 1) \cdot APOA_j + 1]
$$
Where $APOA$ is Assessed Proportion Of Affect (0-1).

Common GTTs:
*   Routine highly-practiced task: NHEP = 0.0002
*   Restore system following procedure: NHEP = 0.003
*   Complex decision under stress: NHEP = 0.16

## 4. Second-Generation HRA
Methods like ATHEANA and CREAM address cognitive error mechanisms. IAEA TECDOC-1842 (2023) provides updated guidance integrating digital instrumentation effects on HEP.

## 5. References
*   Swain, A. D., & Guttmann, H. E. (1983). *Handbook of Human Reliability Analysis*. NUREG/CR-1278.
*   Williams, J. C. (1988). HEART: A proposed method for assessing and reducing human error. *Nuclear Power Experience*.
*   IAEA. (2023). *Human Reliability Analysis for Nuclear Installations*. TECDOC-1842 Rev.1.
*   Kirwan, B., & Ainsworth, L. (Eds.). (2023). *A Guide to Practical Human Reliability Assessment* (2nd ed.). Taylor & Francis.
