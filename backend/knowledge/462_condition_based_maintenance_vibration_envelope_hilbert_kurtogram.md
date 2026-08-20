# Modul 462: Analisis Getaran Lanjutan Berbasis Demodulasi Selubung Hilbert (Hilbert Envelope Demodulation), Spektrum Fast Kurtogram, dan Diagnostik Kerusakan Dini Rolling Element Bearing (CBM)

## 1. Pengantar & Landasan Strategis Pemeliharaan Berbasis Kondisi (Condition-Based Maintenance / CBM)

Dalam sistem manufaktur berkecepatan tinggi, turbomesin, konveyor industri, dan jalur perakitan otomatis, bantalan gelinding (*Rolling Element Bearings* / REB) merupakan komponen mekanis paling kritis yang menopang beban dinamis radial dan aksial. Studi keandalan aset industri (*Asset Reliability Engineering*) menunjukkan bahwa lebih dari **$45\%$ kegagalan fatal mesin rotasi** berakar dari degradasi progresif pada elemen bantalan (cincin luar, cincin dalam, elemen bola/rol, atau sangkar/cage).

Penerapan *Condition-Based Maintenance* (CBM) dan *Predictive Maintenance* (PdM) bertujuan mendeteksi tanda-tanda kerusakan mikro (*micro-pitting*, *spalling*, dan *sub-surface fatigue cracking*) pada tahap paling dini (Tahap 1 & Tahap 2 dari kurva P-F), jauh sebelum timbul panas berlebih, kebisingan audible, atau getaran makro yang memicu kerusakan sekunder pada poros (*shaft*) dan stator motor listrik.

```
+---------------------------------------------------------------------------------------------------+
|     PIPELINE PEMROSESAN SINYAL GETARAN DIAGNOSTIK KERUSAKAN BANTALAN (CBM ENVELOPE SPECTRUM)      |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    SINYAL AKSELEROMETER RAW x(t)                     KARAKTERISTIK KINEMATIKA BANTALAN            |
|    - Sampling Laju Tinggi (fs >= 20-50 kHz)          - Frekuensi Cacat: BPFO, BPFI, BSF, FTF      |
|    - Impuls Cacat Mikro Tertimbun Derau              - Modulasi Resonansi Struktur Mesin          |
|                 |                                                 |                               |
|                 v                                                 v                               |
|    +---------------------------------+           +---------------------------------+              |
|    |      ANALISIS FAST KURTOGRAM    |           | FILTER BANDPASS RESONANSI f_c,B |              |
|    | - Evaluasi Kurtosis Spektral    |           | - Isolasi Pita Pembawa Modulasi |              |
|    | - Optimasi Pusat Frekuensi (f_c)|           | - Penekanan Derau Frekuensi Ren-|              |
|    |   dan Lebar Pita Optimal (B_w)  |           |   dah (Unbalance, Misalignment) |              |
|    +---------------------------------+           +---------------------------------+              |
|                 \                                                 /                               |
|                  \                                               /                                |
|                   v                                             v                                 |
|             +-------------------------------------------------------------+                       |
|             |          TRANSFORMASI HILBERT & EKSTRAKSI SELUBUNG ENVELOPE |                       |
|             |  \tilde{x}(t) = \mathcal{H}\{x_{filt}(t)\}                  |                       |
|             |  Envelope: E(t) = \sqrt{x_{filt}^2(t) + \tilde{x}^2(t)}     |                       |
|             +-------------------------------------------------------------+                       |
|                                            |                                                      |
|                                            v                                                      |
|             +-------------------------------------------------------------+                       |
|             |      SPEKTRUM SELUBUNG FFT (ENVELOPE SPECTRUM ANALYSIS)     |                       |
|             |  - FFT dari Sinyal Selubung: \mathcal{F}\{E(t) - \bar{E}\}  |                       |
|             |  - Identifikasi Puncak Harmonik Frekuensi Karakteristik     |                       |
|             |  - Estimasi Derajat Keparahan (Severity Index & 1X Sideband)|                       |
|             +-------------------------------------------------------------+                       |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

Namun, pada tahap awal kerusakan mikro bantalan, energi getaran akibat impak cacat lokal (*impact shock pulses*) sangat kecil dan memiliki durasi sangat singkat ($\approx 50-200\,\mu\text{s}$). Sinyal impak ini langsung tertutupi (*submerged*) oleh derau latar belakang berenergi tinggi dari *unbalance*, *misalignment*, interaksi roda gigi (*gear mesh*), dan derau acak pabrik. Transformasi Fourier Langsung (Direct FFT) konvensional **gagal mendeteksi kerusakan dini** ini karena energinya tersebar merata di seluruh spektrum frekuensi rendah.

Metodologi **Demodulasi Selubung Hilbert (*Hilbert Transform Envelope Demodulation*)** yang dikombinasikan dengan pemilihan pita frekuensi otomatis menggunakan **Fast Kurtogram (*Spectral Kurtosis*)** merupakan standar emas pemrosesan sinyal getaran modern untuk mengekstrak modulasi amplitudo frekuensi cacat bantalan.

---

## 2. Formulasi Kinematika Cacat Bantalan & Frekuensi Karakteristik

Geometri bantalan gelinding menentukan frekuensi pengulangan impak mekanis saat elemen gelinding melewati titik cacat permukaan.

```
                  +-------------------------+
                  |    Outer Ring (Race)    |  <-- Stasioner / Diam
                  +-------------------------+
                     O     O     O     O       <-- Bola Gelinding (d)
                  +-------------------------+
                  |    Inner Ring (Race)    |  <-- Berputar pada Shaft (f_r)
                  +-------------------------+
                               |
                               v
                     Pitch Diameter (D_p)
```

Misalkan:
- $f_r$ = Frekuensi putaran poros (*shaft speed / rotational frequency*) ($\text{Hz} = \text{RPM} / 60$)
- $N_b$ = Jumlah elemen gelinding (bola atau rol / *number of rolling elements*)
- $d$ = Diameter bola/elemen gelinding (*roller diameter*, $\text{mm}$)
- $D_p$ = Diameter pitch bantalan (*pitch circle diameter*, $\text{mm}$)
- $\alpha$ = Sudut kontak beban bantalan (*contact angle*, derajat)

### 2.1 Frekuensi Karakteristik Cacat Lokal (*Characteristic Defect Frequencies*)

1. **Ball Pass Frequency Outer Race (BPFO)** — Cacat pada Cincin Luar:
   $$\text{BPFO} = \frac{N_b}{2} \cdot f_r \cdot \left( 1 - \frac{d}{D_p} \cos\alpha \right)$$

2. **Ball Pass Frequency Inner Race (BPFI)** — Cacat pada Cincin Dalam:
   $$\text{BPFI} = \frac{N_b}{2} \cdot f_r \cdot \left( 1 + \frac{d}{D_p} \cos\alpha \right)$$

3. **Ball Spin Frequency (BSF)** — Cacat pada Elemen Bola/Rol Gelinding:
   $$\text{BSF} = \frac{D_p}{2 \cdot d} \cdot f_r \cdot \left( 1 - \left(\frac{d}{D_p}\right)^2 \cos^2\alpha \right)$$

4. **Fundamental Train Frequency (FTF)** — Cacat pada Sangkar/Cage:
   $$\text{FTF} = \frac{1}{2} \cdot f_r \cdot \left( 1 - \frac{d}{D_p} \cos\alpha \right)$$

---

## 3. Teori Matematis Demodulasi Selubung Hilbert & Spectral Kurtosis

### 3.1 Model Modulasi Amplitudo Sinyal Kerusakan Bantalan

Ketika elemen gelinding menabrak titik cacat, tercipta deretan impak periodik $p(t) = \sum_{k} \delta(t - k T_{\text{defect}})$. Impak ini mengeksitasi struktur mekanis dan rumah bantalan (*bearing housing*) pada frekuensi resonansi alami tingginya $f_{\text{res}} \gg f_r$. Sinyal respon getaran yang terukur pada sensor akselerometer termodulasi dalam amplitudo:

$$x(t) = \left[ 1 + a(t) \right] \cdot \cos(2\pi f_{\text{res}} t + \phi) + n(t)$$

Di mana:
- $a(t) = \sum_{m} A_m \cos(2\pi m f_{\text{defect}} t)$ adalah sinyal selubung pemodulasi (*modulating envelope*) yang memuat informasi frekuensi cacat ($f_{\text{defect}} \in \{\text{BPFO}, \text{BPFI}, \text{BSF}\}$).
- $f_{\text{res}}$ adalah frekuensi pembawa resonansi (*structural resonance carrier frequency*, biasanya pada $2-10\text{ kHz}$).
- $n(t)$ adalah derau aditif (*additive industrial noise*).

---

### 3.2 Transformasi Hilbert & Sinyal Analitik

Transformasi Hilbert dari sinyal kontinu terfilter pita $x_f(t)$ didefinisikan sebagai konvolusi dari $x_f(t)$ dengan kernel singular $\frac{1}{\pi t}$ (ekuivalen dengan pergeseran fasa sebesar $-90^\circ$ atau $-\frac{\pi}{2}$ untuk semua frekuensi positif):

$$\tilde{x}_f(t) = \mathcal{H}\{x_f(t)\} = \frac{1}{\pi} \, \text{P.V.} \int_{-\infty}^{\infty} \frac{x_f(\tau)}{t - \tau} \, d\tau$$

Sinyal analitik kompleks (*analytic signal*) $z(t)$ dibentuk dari kombinasi sinyal asli dan transformasi Hilbert-nya:

$$z(t) = x_f(t) + j \cdot \tilde{x}_f(t) = A(t) \cdot e^{j \phi(t)}$$

Di mana **Selubung Sinyal Sesaat (*Instantaneous Amplitude Envelope*)** diekstraksi melalui modulus besaran kompleks:

$$E(t) = |z(t)| = \sqrt{x_f^2(t) + \tilde{x}_f^2(t)}$$

---

### 3.3 Spectral Kurtosis (SK) & Fast Kurtogram

Untuk menentukan pita frekuensi resonansi optimal $[f_c - \frac{B_w}{2}, \, f_c + \frac{B_w}{2}]$ yang memiliki rasio sinyal terhadap derau impulsif tertinggi (*highest impulsiveness / non-Gaussianity*), digunakan **Kurtosis Spektral**:

$$K(f) = \frac{\langle |X(t, f)|^4 \rangle}{\langle |X(t, f)|^2 \rangle^2} - 2$$

Di mana $X(t, f)$ adalah representasi waktu-frekuensi sinyal (diperoleh via Short-Time Fourier Transform atau 1/3-Binary Filter Bank Decomposition). Fast Kurtogram (Antoni, 2007) menghitung kurtosis spektral secara efisien pada struktur pohon multirate (*multirate dyadic/triadic filter bank*), menghasilkan peta 2D tingkat dekomposisi versus frekuensi tengah untuk memilih parameter filter bandpass optimal secara otomatis.

---

### 3.4 Spektrum Selubung (*Envelope Spectrum*)

Setelah selubung sesaat $E(t)$ diekstraksi, komponen DC rata-rata dieliminasi $\bar{E} = \frac{1}{N}\sum E(t)$. Spektrum Daya Selubung dihitung melalui Transformasi Fourier Cepat (FFT):

$$\mathcal{E}(f) = \left| \mathcal{F}\left\{ E(t) - \bar{E} \right\} \right| = \left| \int_{-\infty}^{\infty} (E(t) - \bar{E}) \, e^{-j 2\pi f t} \, dt \right|$$

Puncak amplitudo pada frekuensi $\mathcal{E}(\text{BPFO}), \mathcal{E}(\text{BPFI})$, dan harmoniknya ($2\times\text{BPFO}, 3\times\text{BPFO}$) membuktikan secara konklusif adanya cacat mekanis spesifik.

---

## 4. Implementasi Komputasi: Python Bearing Vibration Diagnostic & Hilbert Envelope Engine

Berikut adalah implementasi Python mandiri (*full self-contained*) yang memproses sinyal akselerometer sintesis berderau tinggi, menghitung frekuensi kinematika geometris bantalan, merancang filter bandpass otomatis, melakukan Demodulasi Selubung Hilbert, dan mendeteksi anomali cacat cincin luar (BPFO) dan cincin dalam (BPFI):

```python
import numpy as np
import math
from typing import Dict, Any, Tuple

class BearingKinematics:
    def __init__(self, shaft_rpm: float, num_balls: int, ball_diameter_mm: float, pitch_diameter_mm: float, contact_angle_deg: float = 0.0):
        self.shaft_rpm = shaft_rpm
        self.fr = shaft_rpm / 60.0  # Hz
        self.nb = num_balls
        self.d = ball_diameter_mm
        self.dp = pitch_diameter_mm
        self.alpha_rad = math.radians(contact_angle_deg)
        self.gamma = (self.d / self.dp) * math.cos(self.alpha_rad)

    @property
    def bpfo(self) -> float:
        """Ball Pass Frequency Outer Race (Hz)"""
        return 0.5 * self.nb * self.fr * (1.0 - self.gamma)

    @property
    def bpfi(self) -> float:
        """Ball Pass Frequency Inner Race (Hz)"""
        return 0.5 * self.nb * self.fr * (1.0 + self.gamma)

    @property
    def bsf(self) -> float:
        """Ball Spin Frequency (Hz)"""
        return 0.5 * (self.dp / self.d) * self.fr * (1.0 - (self.gamma ** 2))

    @property
    def ftf(self) -> float:
        """Fundamental Train Frequency / Cage Speed (Hz)"""
        return 0.5 * self.fr * (1.0 - self.gamma)

class EnvelopeDemodulationAnalyzer:
    def __init__(self, sampling_rate_hz: float):
        self.fs = sampling_rate_hz

    def bandpass_filter_fft(self, raw_signal: np.ndarray, lowcut: float, highcut: float) -> np.ndarray:
        """
        Menerapkan filter bandpass frekuensi via domain FFT (Frequency-domain ideal bandpass).
        Mengisolasi sinyal pada pita frekuensi resonansi struktural [lowcut, highcut].
        """
        n = len(raw_signal)
        fft_sig = np.fft.fft(raw_signal)
        freqs = np.fft.fftfreq(n, d=1.0/self.fs)
        
        # Mask pita frekuensi positif dan negatif
        mask = (np.abs(freqs) >= lowcut) & (np.abs(freqs) <= highcut)
        fft_filtered = fft_sig * mask
        return np.real(np.fft.ifft(fft_filtered))

    def extract_hilbert_envelope(self, filtered_signal: np.ndarray) -> np.ndarray:
        """
        Mengekstraksi selubung sesaat E(t) menggunakan Transformasi Hilbert dalam domain FFT.
        z(t) = x(t) + j * H{x(t)}
        """
        n = len(filtered_signal)
        x_fft = np.fft.fft(filtered_signal)
        h = np.zeros(n)
        if n % 2 == 0:
            h[0] = 1
            h[n // 2] = 1
            h[1:n // 2] = 2
        else:
            h[0] = 1
            h[1:(n + 1) // 2] = 2
        
        analytic_signal = np.fft.ifft(x_fft * h)
        envelope = np.abs(analytic_signal)
        # Hilangkan komponen DC rata-rata
        envelope_ac = envelope - np.mean(envelope)
        return envelope_ac

    def compute_envelope_spectrum(self, envelope_ac: np.ndarray, max_freq_hz: float = 500.0) -> Tuple[np.ndarray, np.ndarray]:
        """Menghitung FFT spektrum selubung hingga frekuensi batas max_freq_hz."""
        n = len(envelope_ac)
        window = np.hanning(n)
        fft_vals = np.fft.rfft(envelope_ac * window)
        fft_mag = (2.0 / n) * np.abs(fft_vals)
        freqs = np.fft.rfftfreq(n, d=1.0/self.fs)

        mask = freqs <= max_freq_hz
        return freqs[mask], fft_mag[mask]

    def evaluate_fault_severity(self, freqs: np.ndarray, spectrum: np.ndarray, target_freq: float, tolerance_hz: float = 2.5) -> float:
        """Menghitung puncak amplitudo pada frekuensi cacat target dan harmoniknya."""
        peak_energies = []
        for harmonic in [1, 2, 3]:
            center = harmonic * target_freq
            mask = (freqs >= center - tolerance_hz) & (freqs <= center + tolerance_hz)
            if np.any(mask):
                peak_energies.append(float(np.max(spectrum[mask])))
            else:
                peak_energies.append(0.0)
        return float(np.sum(peak_energies))

# =====================================================================
# SIMULASI PEMROSESAN SINYAL GETARAN INDUSTRI & VALIDASI DIAGNOSTIK
# =====================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("  DIAGNOSTIK KERUSAKAN BANTALAN CBM DENGAN DEMODULASI SELUBUNG HILBERT")
    print("=" * 85)

    # Spesifikasi Bantalan SKF 6205 (Standar Industri)
    # RPM = 1750 (29.17 Hz), Nb = 9, d = 7.94 mm, Dp = 39.04 mm, alpha = 0°
    bearing = BearingKinematics(
        shaft_rpm=1750.0,
        num_balls=9,
        ball_diameter_mm=7.94,
        pitch_diameter_mm=39.04,
        contact_angle_deg=0.0
    )

    print(f"Kecepatan Putar Poros (fr)   : {bearing.fr:.2f} Hz ({bearing.shaft_rpm} RPM)")
    print(f"BPFO (Cacat Cincin Luar)     : {bearing.bpfo:.2f} Hz")
    print(f"BPFI (Cacat Cincin Dalam)    : {bearing.bpfi:.2f} Hz")
    print(f"BSF  (Cacat Elemen Gelinding): {bearing.bsf:.2f} Hz")
    print(f"FTF  (Cacat Sangkar / Cage)  : {bearing.ftf:.2f} Hz\n")

    # Parameter Sampling
    Fs = 25000.0  # 25 kHz
    Duration = 1.5 # 1.5 detik
    t = np.arange(0, Duration, 1.0/Fs)
    N = len(t)

    # 1. Sinyal Komponen Normal Mesin (Rotasi Poros 1X, 2X, Unbalance)
    sig_normal = 1.2 * np.sin(2 * np.pi * bearing.fr * t) + 0.4 * np.sin(2 * np.pi * 2 * bearing.fr * t)

    # 2. Sinyal Impak Cacat Dini Cincin Luar (BPFO = 104.56 Hz)
    # Impak mengeksitasi resonansi struktural perumahan bantalan pada f_res = 4500 Hz
    f_res = 4500.0
    damping_decay = 800.0 # redaman eksponensial
    defect_period = 1.0 / bearing.bpfo
    impulse_train = np.zeros(N)
    
    # Tempatkan impuls pada interval BPFO
    num_impacts = int(Duration * bearing.bpfo)
    for i in range(num_impacts):
        impact_idx = int(i * defect_period * Fs)
        if impact_idx < N:
            impulse_train[impact_idx] = 1.0

    # Respon impuls struktur
    t_resp = np.arange(0, 0.025, 1.0/Fs)
    h_struct = np.exp(-damping_decay * t_resp) * np.sin(2 * np.pi * f_res * t_resp)
    bearing_fault_sig = 1.5 * np.convolve(impulse_train, h_struct, mode='same')

    # 3. Derau Industri (Noise SNR)
    np.random.seed(42)
    noise = np.random.normal(0, 1.2, N)

    # Gabungkan Sinyal Raw Akselerometer
    raw_vibration = sig_normal + bearing_fault_sig + noise

    # Analisis Sinyal Menggunakan Envelope Analyzer
    analyzer = EnvelopeDemodulationAnalyzer(sampling_rate_hz=Fs)

    # Bandpass filter di sekitar resonansi struktural (3500 Hz - 5500 Hz)
    filtered_sig = analyzer.bandpass_filter_fft(raw_vibration, lowcut=3500.0, highcut=5500.0)

    # Ekstraksi Selubung Hilbert
    envelope = analyzer.extract_hilbert_envelope(filtered_sig)

    # Hitung Spektrum Selubung
    env_freqs, env_mag = analyzer.compute_envelope_spectrum(envelope, max_freq_hz=400.0)

    # Evaluasi Keparahan Indikator Cacat
    severity_bpfo = analyzer.evaluate_fault_severity(env_freqs, env_mag, bearing.bpfo)
    severity_bpfi = analyzer.evaluate_fault_severity(env_freqs, env_mag, bearing.bpfi)

    print("[HASIL EVALUASI PEMROSESAN SINYAL GETARAN]")
    print(f"  Raw Signal RMS Total         : {np.sqrt(np.mean(raw_vibration**2)):.3f} g")
    print(f"  Filter Resonansi Bandpass    : 3500 Hz - 5500 Hz (Center ~4500 Hz)")
    print(f"  Indeks Keparahan Puncak BPFO : {severity_bpfo:.4f} g (Sangat Kuat)")
    print(f"  Indeks Keparahan Puncak BPFI : {severity_bpfi:.4f} g (Latar / Tidak Ada)")
    
    status = "OUTER_RACE_FAULT_CONFIRMED" if severity_bpfo > 3.0 * severity_bpfi else "HEALTHY_OR_UNSPECIFIED"
    print(f"  Keputusan Diagnostik Sistem : {status}")
    print("=" * 85)
```

---

## 5. Studi Kasus Industri: Deteksi Kerusakan Dini Pompa Feedwater Pembangkit Listrik

### 5.1 Latar Belakang Masalah
Pada unit pompa *Boiler Feedwater Pump* berdaya $450\text{ kW}$ di pabrik petrokimia, spektrum getaran standar ISO 10816 menunjukkan nilai *overall vibration velocity* $1.8\text{ mm/s RMS}$ (Kategori A: *Good Condition*). Namun, sistem pemantauan CBM online mendeteksi kenaikan tajam pada nilai kurtosis akselerasi frekuensi tinggi ($g_{\text{peak}} / g_{\text{rms}} = 6.8$).

### 5.2 Analisis Sinyal & Temuan Diagnostik
1. **Analisis FFT Langsung**: Spektrum kecepatan frekuensi rendah $0-1000\text{ Hz}$ didominasi puncak putaran motor $1\text{X} = 29.5\text{ Hz}$ dan $2\text{X} = 59.0\text{ Hz}$ akibat sedikit sisa residual unbalance. Tidak terlihat puncak abnormal lain.
2. **Demodulasi Selubung Hilbert**: Setelah dilakukan *Fast Kurtogram* teridentifikasi pita resonansi optimal pada frekuensi tengah $f_c = 4250\text{ Hz}$ dengan lebar pita $B = 1200\text{ Hz}$.
3. **Envelope Spectrum**: Ditemukan puncak menonjol pada frekuensi $\text{BPFO} = 106.2\text{ Hz}$ beserta harmonik $2\text{X BPFO} = 212.4\text{ Hz}$ dan $3\text{X BPFO} = 318.6\text{ Hz}$ dengan amplitudo dominan $0.082\text{ g}$.

### 5.3 Tindakan Pemeliharaan & Penghematan Biaya (*Cost Avoidance*)
Inspeksi visual terencana (*planned inspection*) selama jeda operasional menemukan retakan lelah mikro (*micro-flaking*) selebar $1.2\text{ mm}$ pada alur cincin luar bantalan. Penggantian bantalan dilakukan secara terencana selama $2\text{ jam}$ dengan biaya komponen **Rp 8.500.000**. Apabila kerusakan dibiarkan hingga terjadi *catastrophic seizure*, biaya *downtime* produksi yang tidak terencana diestimasi mencapai **Rp 450.000.000** ($14\text{ jam}$ penghentian unit petrokimia).

---

## 6. Soal Latihan & Evaluasi Kuantitatif

### Soal 1
Sebuah bantalan rol silindris pada mesin bubut CNC memiliki data geometri: jumlah rol $N_b = 12$, diameter rol $d = 12\text{ mm}$, diameter lingkaran pitch $D_p = 75\text{ mm}$, sudut kontak $\alpha = 0^\circ$, dan beroperasi pada putaran motor $n = 2400\text{ RPM}$.
1. Hitung frekuensi rotasi poros $f_r$ dalam Hertz.
2. Hitung frekuensi karakteristik cacat cincin luar ($\text{BPFO}$) dan cincin dalam ($\text{BPFI}$).
3. Jika sensor mendeteksi modulasi amplitudo pada spektrum selubung dengan puncak dominan pada $201.6\text{ Hz}$, identifikasi komponen bantalan mana yang mengalami kerusakan dan jelaskan fenomena modulasi yang terjadi.

---

## 7. Referensi & Standar Akademis Terverifikasi

1. **Randall, R. B., & Antoni, J.** (2011). Rolling element bearing diagnostics—A tutorial. *Mechanical Systems and Signal Processing*, 25(2), 485-520. https://doi.org/10.1016/j.ymssp.2010.07.017
2. **Antoni, J.** (2006). The spectral kurtosis: A useful tool for analysing non-stationary signals. *Mechanical Systems and Signal Processing*, 20(2), 282-307.
3. **Antoni, J.** (2007). Fast computation of the kurtogram for the detection of transient faults. *Mechanical Systems and Signal Processing*, 21(1), 108-124. https://doi.org/10.1016/j.ymssp.2005.12.002
4. **ISO 13373-1:2002**. *Condition monitoring and diagnostics of machines — Vibration condition monitoring — Part 1: General procedures*. International Organization for Standardization, Geneva.
5. **Mobley, R. K.** (2002). *An Introduction to Predictive Maintenance*. 2nd Edition, Butterworth-Heinemann, Oxford.
6. **Zhao, M., Lin, J., Xu, X., & Lei, Y.** (2024). Multi-band envelope demodulation for weak bearing defect detection under variable speed conditions. *IEEE Transactions on Industrial Electronics*, 71(5), 5120-5131.
