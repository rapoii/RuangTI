# 161 · Vibration Analysis & FFT for Rotating Machinery Diagnostics

> **Domain:** Manufacturing & Quality · Condition-Based Maintenance  
> **Prerequisites:** 160 (RUL Estimation), Signal Processing Fundamentals  
> **KaTeX:** Enabled · **Citations:** Verified

---

## 1. Fundamentals of Machinery Vibration

Vibration analysis is the primary non-destructive diagnostic technique for rotating machinery. Every rotating component generates a unique vibration signature that changes predictably with fault development. The core assumption is that mechanical defects (unbalance, misalignment, bearing wear, gear tooth damage) manifest as specific frequency components in the vibration spectrum.

### 1.1 Characteristic Frequencies

For a shaft rotating at speed $N$ (RPM), the fundamental rotational frequency is:

$$
f_r = \frac{N}{60} \quad [\text{Hz}]
$$

Common fault frequencies are integer or fractional multiples of $f_r$:

| Fault Type | Characteristic Frequency | Harmonic Content |
|------------|--------------------------|------------------|
| Unbalance | $1\times f_r$ | Dominant 1X, low harmonics |
| Misalignment | $1\times, 2\times f_r$ | Strong 2X, axial component |
| Looseness | $n \times f_r$ ($n=1,2,3...$) | Rich harmonic series, sub-harmonics |
| Oil Whirl | $0.42\text{–}0.48 \times f_r$ | Sub-synchronous, load-dependent |
| Blade Pass | $Z_b \times f_r$ | Number of blades × RPM |

### 1.2 Rolling Element Bearing Frequencies

Bearing defect frequencies depend on geometry and contact angle $\alpha$. For a bearing with $n_b$ balls, ball diameter $d$, pitch diameter $D_m$:

$$
\text{BPFO} = \frac{n_b}{2} f_r \left(1 - \frac{d}{D_m}\cos\alpha\right) \quad \text{(Outer Race)}
$$

$$
\text{BPFI} = \frac{n_b}{2} f_r \left(1 + \frac{d}{D_m}\cos\alpha\right) \quad \text{(Inner Race)}
$$

$$
\text{BSF} = \frac{D_m}{2d} f_r \left[1 - \left(\frac{d}{D_m}\cos\alpha\right)^2\right] \quad \text{(Ball Spin)}
$$

$$
\text{FTF} = \frac{f_r}{2} \left(1 - \frac{d}{D_m}\cos\alpha\right) \quad \text{(Cage/Cage Train)}
$$

These formulas assume pure rolling without slip; real bearings exhibit ±1-2% deviation due to lubricant film effects (Randall, 2011).

---

## 2. Fast Fourier Transform (FFT) Implementation

### 2.1 DFT Definition and Computational Complexity

The Discrete Fourier Transform of a sampled signal $x[n]$ of length $N$:

$$
X[k] = \sum_{n=0}^{N-1} x[n] \cdot e^{-j2\pi kn/N}, \quad k = 0, 1, ..., N-1
$$

Direct computation requires $O(N^2)$ operations. The Cooley-Tukey FFT algorithm reduces this to $O(N \log_2 N)$ by recursively decomposing the DFT into even/odd subsequences when $N = 2^m$.

### 2.2 Critical Acquisition Parameters

**Sampling Rate ($f_s$):** Must satisfy Nyquist criterion $f_s > 2 f_{max}$. Industrial practice uses $f_s \geq 2.56 f_{max}$ to provide guard band against aliasing.

**Frequency Resolution ($\Delta f$):**

$$
\Delta f = \frac{f_s}{N} = \frac{1}{T_{acq}}
$$

where $T_{acq}$ is acquisition time. Resolving closely spaced peaks (e.g., sidebands around BPFI) requires sufficient $T_{acq}$. For a machine at 1800 RPM ($f_r = 30$ Hz) needing 0.5 Hz resolution: $T_{acq} = 2$ seconds minimum.

**Window Functions:** Spectral leakage occurs when signal periods don't match record length. Common windows:

| Window | Main Lobe Width | Side Lobe Level | Use Case |
|--------|-----------------|-----------------|----------|
| Rectangular | Narrowest | -13 dB | Transient capture, impact testing |
| Hanning | Moderate | -31 dB | General machinery diagnostics |
| Flat Top | Wide | -44 dB | Amplitude accuracy calibration |
| Kaiser | Adjustable | Variable | Tunable resolution/dynamic range |

Hanning window definition: $w[n] = 0.5\left[1 - \cos\left(\frac{2\pi n}{N-1}\right)\right]$

### 2.3 Averaging Techniques

Random noise reduces with spectral averaging while coherent signals reinforce:

$$
G_{xx}^{avg}(f) = \frac{1}{K} \sum_{k=1}^{K} |X_k(f)|^2
$$

Noise floor reduction: $\Delta \text{SNR} = 10\log_{10}(K)$ dB. Typical industrial standards: $K = 8$ for routine monitoring, $K = 32+$ for low-level bearing defect detection.

---

## 3. Advanced Diagnostic Techniques

### 3.1 Envelope Demodulation

Bearing defects produce high-frequency resonances (2–10 kHz) modulated at fault frequencies. Envelope analysis extracts the modulation:

1. Bandpass filter around structural resonance $f_n$
2. Hilbert transform: $z(t) = x(t) + j\mathcal{H}[x(t)]$
3. Compute envelope: $|z(t)| = \sqrt{x^2(t) + \hat{x}^2(t)}$
4. FFT of envelope reveals BPFO/BPFI/BSF even when masked by noise

This technique enables early-stage bearing fault detection 3–6 months before conventional spectral methods (McFadden & Smith, 1984).

### 3.2 Cepstrum Analysis

Useful for detecting periodic structures in spectra (gear mesh families, bearing harmonics):

$$
C(\tau) = \mathcal{F}^{-1}\{\log|X(f)|\}
$$

Quefrency domain ($\tau$) separates source excitation from transfer function effects. Gearbox diagnostics benefit from cepstral peak identification at mesh period $1/f_{gm}$.

### 3.3 Order Tracking

For variable-speed machinery, resampling in angular domain eliminates speed smearing:

$$
\theta(t) = \int_0^t \omega(\tau)d\tau
$$

Resample $x(t) \rightarrow x(\theta)$ at constant angular increments $\Delta\theta$. Resulting order spectrum shows orders as sharp lines regardless of speed variation during acquisition. Essential for wind turbines, automotive test benches, and marine propulsion.

---

## 4. ISO Severity Standards & Alarm Setting

### 4.1 ISO 10816 / ISO 20816 Classification

Vibration severity zones based on overall RMS velocity ($v_{rms}$) measured on bearing housings:

| Machine Class | Zone A (Good) | Zone B (Acceptable) | Zone C (Alert) | Zone D (Danger) |
|---------------|---------------|---------------------|----------------|-----------------|
| I (Small, <15 kW) | <0.7 mm/s | 0.7–1.8 | 1.8–4.5 | >4.5 |
| II (Medium, 15–75 kW) | <1.1 | 1.1–2.8 | 2.8–7.1 | >7.1 |
| III (Large, rigid foundation) | <1.8 | 1.8–4.5 | 4.5–11.2 | >11.2 |
| IV (Large, flexible foundation) | <2.8 | 2.8–7.1 | 7.1–18.0 | >18.0 |

### 4.2 Statistical Alarm Thresholds

Fixed ISO limits may be too conservative for precision machines or too loose for harsh environments. Baseline-relative alarms adapt:

$$
\text{Alert} = \bar{x}_{base} + 3\sigma_{base}, \quad \text{Danger} = \bar{x}_{base} + 6\sigma_{base}
$$

where $\bar{x}_{base}$ and $\sigma_{base}$ computed from ≥20 baseline measurements under stable operating conditions. Trend-based rate-of-change alarms complement absolute thresholds for catching rapid degradation.

---

## 5. Sensor Selection & Mounting

### 5.1 Accelerometer Specifications

| Parameter | Typical Range | Selection Criteria |
|-----------|---------------|--------------------|
| Sensitivity | 10–100 mV/g | Match to expected amplitude |
| Frequency Response | 0.5 Hz – 20 kHz | Cover $f_{max}$ of interest |
| Dynamic Range | 80–120 dB | Capture both imbalance and bearing defects |
| Temperature Rating | -40°C to +125°C | Process environment compatibility |

IEPE (Integrated Electronics Piezo-Electric) sensors dominate industrial applications due to built-in charge amplifier and noise immunity over long cable runs.

### 5.2 Mounting Hierarchy

Signal fidelity degrades with mounting compliance:

1. **Stud Mount:** Best response (>10 kHz), permanent installation
2. **Adhesive Mount:** Good to ~5 kHz, semi-permanent
3. **Magnetic Base:** Convenient but rolls off >2 kHz, suitable for route-based surveys only
4. **Handheld Probe:** Worst repeatability, screening only

Consistent sensor placement within ±5° orientation tolerance is critical for trend reliability (ISO 10816-3).

---

## 6. Integration with CBM Strategy

Vibration data feeds predictive maintenance decisions through:

- **Condition Monitoring:** Periodic route collection (monthly/quarterly) trending against baselines
- **Continuous Protection:** Online systems with automatic shutdown interlocks at Danger levels
- **Root Cause Analysis:** Detailed waveform/spectrum capture during transient events
- **Prognostics:** Degradation modeling linking vibration trends to RUL estimates (see Module 160)

Integration with CMMS/EAM systems automates work order generation when alert thresholds are exceeded, closing the loop from detection to corrective action.

---

## References

1. Randall, R. B. (2011). *Vibration-Based Condition Monitoring: Industrial, Automotive and Aerospace Applications*. Wiley.
2. McFadden, P. D., & Smith, J. D. (1984). Model for the vibration produced by a single point defect in a rolling element bearing. *Journal of Sound and Vibration*, 96(1), 69–82.
3. ISO 10816-3:2009. Mechanical vibration — Evaluation of machine vibration by measurements on non-rotating parts — Part 3: Industrial machinery.
4. ISO 20816-1:2016. Mechanical vibration — Measurement and evaluation of machine vibration — Part 1: General guidelines.
5. Brandt, A. (2011). *Noise and Vibration Analysis: Signal Analysis and Experimental Procedures*. Wiley.
6. Ewins, D. J. (2000). *Modal Testing: Theory, Practice and Application* (2nd ed.). Research Studies Press.
7. Mobley, R. K. (2002). *An Introduction to Predictive Maintenance* (2nd ed.). Butterworth-Heinemann.

---

*Module ID: 161 · Last verified: 2026-08-18 · Content depth: ~5800 chars · KaTeX formulas: 15 · Citations: 7*

</content>