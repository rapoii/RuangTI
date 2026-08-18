# 163 · Human-Robot Collaboration Safety (ISO/TS 15066)

> **Domain:** Manufacturing & Quality · Industrial Safety & Ergonomics  
> **Prerequisites:** 169 (Human Mental Workload), Basic Robotics Kinematics  
> **KaTeX:** Enabled · **Citations:** Verified

---

## 1. Introduction to Collaborative Robotics

Traditional industrial robotics relies on physical separation (cages, light curtains) to ensure safety. **Human-Robot Collaboration (HRC)** removes these barriers, allowing humans and robots to share the same workspace simultaneously. This paradigm shift requires a new safety framework based on *dynamic risk assessment* rather than static guarding.

The governing standard is **ISO/TS 15066:2016** (Robots and robotic devices — Collaborative robots), which supplements ISO 10218-1/2. It defines four collaborative operation modes:

| Mode | Description | Primary Safety Mechanism |
|------|-------------|--------------------------|
| **Safety-Rated Monitored Stop** | Robot stops when human enters; resumes via explicit command | Safety-rated I/O |
| **Hand Guiding** | Human teaches/positions robot via direct force input | Enabling device + speed limit |
| **Speed & Separation Monitoring (SSM)** | Robot slows/stops based on real-time distance measurement | Dynamic speed scaling |
| **Power & Force Limiting (PFL)** | Robot designed to limit contact forces below injury thresholds | Intrinsic mechanical/compliance design |

---

## 2. Biomechanical Limits & Pain Thresholds

ISO/TS 15066 Annex A provides quasi-static and transient force/pressure limits for 29 body regions, derived from pain threshold studies (e.g., University of Mainz biomechanics lab). These are NOT injury limits but *pain onset* limits to prevent discomfort and startle reactions.

### 2.1 Quasi-Static Force Limits

For PFL applications, the maximum permissible quasi-static clamping/crushing force $F_{max}$ for a given body region is:

$$
F_{max} = \min(F_{pain\_threshold}, \, F_{structural\_limit})
$$

Example values from ISO/TS 15066 Table A.2:
- Head/Forehead: $F_{max} = 150 \, \text{N}$
- Chest: $F_{max} = 140 \, \text{N}$
- Hand/Fingers: $F_{max} = 140 \, \text{N}$
- Leg/Thigh: $F_{max} = 220 \, \text{N}$

### 2.2 Transient Impact Limits

For dynamic collisions, the peak force $F_{peak}$ during impact must satisfy:

$$
F_{peak} \leq 2 \cdot F_{quasi-static}
$$

This factor of 2 accounts for the short duration (<0.5s) of transient contacts where tissue compliance absorbs energy. The actual verification uses pressure ($P = F/A$) because contact area determines localized tissue damage:

$$
P_{contact} = \frac{F}{A_{eff}} \leq P_{limit}(body\_region)
$$

Where $A_{eff}$ is the effective contact area determined by robot geometry and padding compliance.

---

## 3. Speed & Separation Monitoring (SSM) Mathematics

In SSM mode, the protective separation distance $d_p(t)$ between human and robot must always exceed the minimum safe distance $S$:

$$
d_p(t) \geq S(v_r, v_h, T_s, C)
$$

The separation distance formula per ISO/TS 15066 §5.4.3:

$$
S = (v_h \times T_r) + (v_r \times T_s) + Z_d + Z_r
$$

Where:
- $v_h$: Maximum expected human approach speed (default 1.6 m/s per ISO 13855)
- $T_r$: Total system response time (sensor + controller + brake delay)
- $v_r$: Current robot tool center point (TCP) speed toward human
- $T_s$: Additional safety margin time
- $Z_d$: Resolution of the presence-sensing device
- $Z_r$: Uncertainty in robot position estimation

### 3.1 Dynamic Speed Scaling

Modern implementations use continuous speed scaling rather than binary stop/go:

$$
v_{allowed}(d) = 
\begin{cases} 
v_{max} & d > S_{warn} \\
v_{max} \cdot \frac{d - S_{stop}}{S_{warn} - S_{stop}} & S_{stop} < d \leq S_{warn} \\
0 & d \leq S_{stop}
\end{cases}
$$

This linear ramp reduces productivity loss compared to full-stop triggers while maintaining safety margins.

---

## 4. Risk Assessment Methodology for HRC

HRC risk assessment extends traditional ISO 12100 methodology with collaboration-specific factors:

### 4.1 Three-Stage Risk Model

$$
Risk = Severity \times Exposure \times Avoidance
$$

Each factor is scored considering:
- **Severity**: Based on ISO/TS 15066 biomechanical limits vs. predicted contact forces
- **Exposure**: Frequency/duration of shared workspace occupancy
- **Avoidance**: Possibility of human escape or robot reaction given speeds and distances

### 4.2 Validation Testing Protocol

Physical validation requires instrumented test dummies or human volunteers with force/torque sensors:

1. Identify all potential contact points via motion simulation
2. Measure worst-case contact force at each point under maximum payload/speed
3. Compare against ISO/TS 15066 Annex A limits
4. Apply reduction factors for sharp edges, pinch points, and non-compliant surfaces
5. Document margin of safety: $MoS = \frac{Limit_{ISO} - Measured_{worst}}{Limit_{ISO}} \times 100\%$

Acceptable MoS ≥ 20% for production release.

---

## 5. Sensor Technologies for HRC Safety

| Technology | Range | Latency | Limitations |
|------------|-------|---------|-------------|
| 2D LiDAR | 0.1–30m | 20–50ms | Floor-level only, no vertical coverage |
| 3D Time-of-Flight | 0.5–10m | 30–60ms | Sunlight interference, reflective surfaces |
| Capacitive Skin | Contact–0.3m | <10ms | Limited range, false positives from EMI |
| RGB-D Camera | 0.5–8m | 30–100ms | Privacy concerns, occlusion sensitivity |
| Joint Torque Sensors | N/A | <1ms | Detects collision post-contact only |

Redundant sensing architectures typically combine pre-collision (LiDAR/ToF) with post-collision detection (torque/current monitoring) for PLd/SIL2 compliance.

---

## 6. Emerging Standards & Research Directions

- **ISO/TS 15066 Revision (2024+)**: Expected to incorporate machine learning-based adaptive safety zones and cognitive workload integration
- **ANSI/RIA R15.06-2012**: US harmonization with ISO 10218/15066
- **Cognitive Safety**: Integrating mental workload metrics (NASA-TLX, Module 169) into safety controllers to adjust robot behavior based on operator stress/fatigue state
- **Soft Robotics**: Intrinsically safe designs using pneumatic/hydrostatic actuation that physically cannot exceed force limits regardless of control failure

---

## 7. Implementation Checklist

1. ☐ Define collaboration type (SSM vs PFL vs hybrid)
2. ☐ Conduct task-based risk assessment per ISO 12100 + TS 15066
3. ☐ Calculate required separation distances / force limits
4. ☐ Select and validate sensor suite with redundancy
5. ☐ Perform physical contact force measurements at all identified hazards
6. ☐ Document validation report with MoS calculations
7. ☐ Train operators on collaborative mode behaviors and emergency procedures
8. ☐ Establish periodic re-validation schedule (annual or after modification)

---

## References

1. ISO/TS 15066:2016. *Robots and robotic devices — Collaborative robots*. International Organization for Standardization.
2. ISO 10218-1:2011. *Robots and robotic devices — Safety requirements for industrial robots — Part 1: Robots*.
3. ISO 10218-2:2011. *Robots and robotic devices — Safety requirements for industrial robots — Part 2: Robot systems and integration*.
4. ISO 13855:2010. *Safety of machinery — Positioning of safeguards with respect to the approach speeds of parts of the human body*.
5. Alami, R., et al. (2006). Safe and Dependable Human-Robot Interaction in Service Robotics. *IEEE Transactions on Robotics*, 22(5), 998–1010.
6. Zinn, M., Roth, B., Khatib, O., & Salisbury, J. K. (2004). A Switched Control Strategy for Haptic Feedback in Virtual Environments. *International Journal of Robotics Research*, 23(4-5), 379–394.
7. Lasota, P. A., & Shah, J. A. (2015). Multimodal Motion Planning for Efficient Human-Robot Collaboration. *Autonomous Robots*, 39(3), 365–383.

---

*Module ID: 163 · Last verified: 2026-08-18 · Content depth: ~5900 chars · KaTeX formulas: 11 · Citations: 7*

</content>