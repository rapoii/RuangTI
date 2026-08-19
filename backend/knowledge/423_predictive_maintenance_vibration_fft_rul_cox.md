# Modul 423: Pemeliharaan Prediktif Tingkat Lanjut (Predictive Maintenance 4.0), Analisis Spektrum Getaran FFT, Estimasi Sisa Umur Pakai (Remaining Useful Life - RUL), dan Model Cox Proportional Hazards

## 1. Domain Profesi & Ruang Lingkup
Profesi **Predictive Maintenance (PdM) Specialist / Vibration Analyst (ISO 18436-2) & Prognostics Health Management (PHM) Engineer** bertugas memproses sinyal getaran (*Vibration Signal Processing*), mendeteksi cacat mikro pada bantalan/bearing dan roda gigi sebelum terjadi kerusakan fatal, serta memprediksi sisa masa pakai mesin (*Remaining Useful Life* - RUL).

---

## 2. Analisis Spektrum Getaran: Fast Fourier Transform (FFT) & Envelope Analysis

Mengubah sinyal getaran domain waktu $x(t)$ yang terekam oleh akselerometer piezoelektrik menjadi domain frekuensi $X(f)$:

### A. Transformasi Fourier Diskrit (DFT / FFT):
$$X(k) = \sum_{n=0}^{N-1} x(n) \cdot e^{-j \frac{2\pi}{N} k n}, \quad k = 0, 1, \dots, N-1$$

### B. Frekuensi Cacat Karakteristik Bantalan Gelinding (Rolling Element Bearing Frequencies):
Diberikan bantalan dengan $N_b$ jumlah bola/rol, diameter bola $d$, diameter lingkaran pitch $D_p$, sudut kontak $\theta$, dan kecepatan putar poros $f_r$ (Hz):

1. **BPFO (*Ball Pass Frequency Outer Race* - Cacat Cincin Luar)**:
   $$\text{BPFO} = \frac{N_b}{2} \times f_r \times \left( 1 - \frac{d}{D_p} \cos(\theta) \right)$$
2. **BPFI (*Ball Pass Frequency Inner Race* - Cacat Cincin Dalam)**:
   $$\text{BPFI} = \frac{N_b}{2} \times f_r \times \left( 1 + \frac{d}{D_p} \cos(\theta) \right)$$
3. **BSF (*Ball Spin Frequency* - Cacat Bola/Rol)**:
   $$\text{BSF} = \frac{D_p}{2d} \times f_r \times \left( 1 - \left( \frac{d}{D_p} \cos(\theta) \right)^2 \right)$$
4. **FTF (*Fundamental Train Frequency* - Cacat Sangkar/Cage)**:
   $$\text{FTF} = \frac{f_r}{2} \times \left( 1 - \frac{d}{D_p} \cos(\theta) \right)$$

---

## 3. Estimasi Sisa Masa Pakai Aset (Remaining Useful Life - RUL Estimation)

### A. Model Regresi Degradasi Eksponensial:
Indikator kesehatan mesin (*Health Indicator* $S(t)$, misal: nilai RMS getaran atau energi *envelope*):

$$S(t) = \phi + \theta(t) \cdot e^{\beta t + \epsilon(t)}$$

Di mana $D_{\text{threshold}}$ adalah ambang batas getaran bahaya ISO 10816-3 (e.g., $7.1\text{ mm/s RMS}$).
Sisa masa pakai pada waktu pengamatan $t_k$:

$$\text{RUL}(t_k) = \frac{\ln(D_{\text{threshold}} - \phi) - \ln(\theta_k)}{\beta_k} - t_k$$

### B. Model Regresi Cox Proportional Hazards (Survival Analysis dengan Kovariat Sensor):
Laju bahaya kegagalan $h(t | \mathbf{z})$ dipengaruhi oleh vektor kondisi operasi $\mathbf{z} = [\text{Suhu}, \text{Vibrasi RMS}, \text{Beban Spindle}]$:

$$h(t | \mathbf{z}) = h_0(t) \times \exp\left( \sum_{i=1}^{p} \beta_i z_i \right)$$

Di mana $h_0(t)$ adalah laju bahaya dasar (*Baseline Hazard*) yang mengikuti distribusi Weibull.

---

## 4. Standar Evaluasi Keparahan Getaran Mesin Industri (ISO 10816-3 / ISO 20816-3)

| Zona Getaran | Kecepatan Getaran RMS ($10 - 1000\text{ Hz}$) | Status & Rekomendasi Tindakan |
| :--- | :---: | :--- |
| **Zona A (Baru/Sempurna)** | $< 1.4\text{ mm/s}$ | Kondisi mesin baru dipasang / baru selesai overhaul |
| **Zona B (Operasi Normal)**| $1.4 - 2.8\text{ mm/s}$ | Mesin dapat beroperasi jangka panjang tanpa batasan |
| **Zona C (Peringatan / Warning)**| $2.8 - 7.1\text{ mm/s}$ | Kerusakan awal terdeteksi; jadwalkan perbaikan saat downtime |
| **Zona D (Bahaya / Critical Trip)**| $> 7.1\text{ mm/s}$ | **STOP MESIN SEGERA** untuk mencegah kegagalan katastropik |

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Mobley, R. K. (1999). *Vibration Fundamentals*. Butterworth-Heinemann.
- International Organization for Standardization. (2018). *ISO 10816-3: Mechanical vibration — Evaluation of machine vibration by measurements on non-rotating parts*. Geneva: ISO.
- Randall, R. B. (2021). *Vibration-Based Condition Monitoring: Industrial, Aerospace and Automotive Applications* (2nd ed.). John Wiley & Sons.
- Saffirio, A., & Civera, M. (2023). *Vibration signal processing, envelope analysis, and machine learning prognostics for predictive maintenance*. Mechanical Systems and Signal Processing, 194, 110255.
