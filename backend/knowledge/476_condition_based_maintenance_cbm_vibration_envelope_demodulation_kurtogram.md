# Modul 476: Condition-Based Maintenance (CBM), Vibration Envelope Demodulation & Spectral Kurtosis (Fast Kurtogram)

## 1. Pengantar & Konteks Industri: Paradigma Pemeliharaan Berbasis Kondisi pada Rotating Machinery

Dalam lanskap industri manufaktur maju (*Asset-Intensive Manufacturing*), keandalan mesin-mesin rotasi (*rotating machinery*) seperti turbin, kompresor sentrifugal, motor induksi, pompa bertekanan tinggi, dan gearbox merupakan tulang punggung kontinuitas proses. Kerusakan katastropik yang tak terduga (*unplanned downtime*) dapat mengakibatkan kerugian finansial hingga ratusan ribu dolar per jam, risiko keselamatan kerja serius, dan degradasi kualitas produk.

```
+---------------------------------------------------------------------------------------------------+
|               EVOLUSI PARADIGMA PEMELIHARAAN ASET INDUSTRI (MAINTENANCE STRATEGY)                 |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ 1. REACTIVE / BREAKDOWN ]       [ 2. TIME-BASED PREVENTIVE ]      [ 3. CONDITION-BASED / PHM ] |
|  - Run-to-Failure                  - Jadwal overhaul tetap           - Monitoring getaran online  |
|  - Biaya perbaikan ekstrem         - Mengganti komponen sehat        - Deteksi cacat mikro sub-mm |
|  - Downtime tidak terkontrol       - Risiko kesalahan perakitan      - Envelope Demodulation + SK |
|  - Risiko kecelakaan tinggi        - Biaya spare parts boros         - Intervensi tepat waktu     |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

Sebagian besar kegagalan mekanis pada mesin rotasi (sekitar 45% - 70%) berakar dari degradasi **Bantalan Gelinding (*Rolling Element Bearings - REB*)**. Pada fase awal kerusakan (*Stage 1 & Stage 2 Bearing Degradation*):
1. Cacat mikro (*micro-pitting* atau *sub-surface spalling*) pada *inner race*, *outer race*, atau *ball/roller* menghasilkan benturan impulsif berdurasi sangat singkat (dalam skala mikrodetik).
2. Impuls tajam ini mengeksitasi frekuensi resonansi struktural alami dari rumah bantalan (*bearing housing resonance* pada frekuensi tinggi, biasanya $2 \text{ kHz} - 20 \text{ kHz}$).
3. Energi dari impuls mikro awal ini **sangat lemah** dan terbenam jauh di bawah *noise* getaran latar belakang (*background noise* dari ketidakseimbangan massa (*unbalance*), *misalignment*, atau kontak roda gigi (*gear mesh*)).

Analisis spektrum Fourier standar (Direct Fast Fourier Transform - FFT) **gagal total** mendeteksi cacat tahap awal karena energi benturan tersebar di pita frekuensi yang sangat lebar. Diperlukan metodologi **Envelope Demodulation (High-Frequency Resonance Technique - HFRT)** yang dikombinasikan dengan **Spectral Kurtosis / Fast Kurtogram** untuk mengisolasi pita resonansi optimal dan mendemodulasi sinyal getaran guna mengekstrak frekuensi benturan karakteristik bantalan secara presisi.

---

## 2. Teori Matematis Kinematika Bantalan & Frekuensi Cacat Karakteristik

Ketika elemen gelinding melintasi cacat lokal pada permukaan bantalan, benturan periodik dihasilkan pada frekuensi yang ditentukan secara ketat oleh parameter geometris bantalan dan kecepatan rotasi poros ($f_r$).

```
+---------------------------------------------------------------------------------------------------+
|                        GEOMETRI DAN KINEMATIKA BANTALAN GELINDING                                 |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|                                     |<- d ->| (Diameter Elemen Gelinding / Roller)                |
|                                    (   (O)   )                                                    |
|                                 .-'         '-.                                                   |
|                              .-'   +-------+   '-.                                                |
|                            .'      | Shaft |      '.                                              |
|                           /        |  (fr) |        \  D = Pitch Diameter                         |
|                          |         +-------+         | alpha = Sudut Kontak (Contact Angle)       |
|                          |            (O)            | Nb = Jumlah Bola / Elemen Gelinding        |
|                           \                         /                                             |
|                            '.                     .'                                              |
|                              '-.               .-'                                                |
|                                 '-.         .-'                                                   |
|                                    '-------'                                                      |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 2.1 Formulasi Frekuensi Cacat Karakteristik (Characteristic Fault Frequencies)

Misalkan:
- $N_b$: Jumlah elemen gelinding (*number of rolling elements* / *balls*).
- $d$: Diameter elemen gelinding (*ball/roller diameter*) (mm).
- $D$: Diameter lintasan tengah (*pitch circle diameter*) (mm).
- $\alpha$: Sudut kontak nominal (*contact angle*) (derajat atau radian).
- $f_r$: Frekuensi rotasi poros mekanis (*shaft rotational speed*) dalam Hertz ($\text{Hz} = \text{RPM} / 60$).

Frekuensi benturan teoritis diturunkan dari kinematika kontak murni tanpa slip (*no-slip kinematic rolling*):

#### 1. Ball Pass Frequency Outer Race (BPFO)
Frekuensi lintasan bola saat menabrak cacat pada lintasan luar (*stationary outer ring*):
$$\text{BPFO} = \frac{N_b}{2} f_r \left( 1 - \frac{d}{D} \cos \alpha \right)$$

#### 2. Ball Pass Frequency Inner Race (BPFI)
Frekuensi lintasan bola saat menabrak cacat pada lintasan dalam (*rotating inner ring*):
$$\text{BPFI} = \frac{N_b}{2} f_r \left( 1 + \frac{d}{D} \cos \alpha \right)$$

*Catatan Industri*: Karena cacat lintasan dalam berputar keluar-masuk dari zona pembebanan (*load zone*), sinyal BPFI mengalami modulasi amplitudo pada frekuensi rotasi poros $f_r$, menghasilkan *sidebands* khas: $\text{BPFI} \pm k \cdot f_r$ ($k \in \{1, 2, 3\}$).

#### 3. Ball Spin Frequency (BSF)
Frekuensi putaran elemen gelinding pada sumbunya sendiri saat menabrak cacat pada bola/roller:
$$\text{BSF} = \frac{D}{2d} f_r \left[ 1 - \left( \frac{d}{D} \cos \alpha \right)^2 \right]$$
Frekuensi cacat bola ganda yang terdeteksi pada sensor adalah $2 \times \text{BSF}$ yang dimodulasi oleh frekuensi sangkar bantalan ($FTF$).

#### 4. Fundamental Train Frequency (FTF) / Cage Frequency
Frekuensi putaran sangkar bantalan (*bearing cage*):
$$\text{FTF} = \frac{1}{2} f_r \left( 1 - \frac{d}{D} \cos \alpha \right)$$

---

## 3. Matematika Sinyal: Modulasi Amplitudo, Hilbert Transform & Analytic Signal

Sinyal getaran bantalan yang mengalami kerusakan dapat dimodelkan secara matematis sebagai konvolusi antara deret impuls periodik $\delta(t)$ dengan respons impuls struktural mesin $h(t)$, ditambah dengan *noise* operasional Gaussian dan non-Gaussian $n(t)$:

$$x(t) = \left[ \sum_{k=-\infty}^{\infty} A_k \cdot \delta\left(t - \frac{k}{f_{\text{fault}}} - \tau_k\right) \right] * h(t) + n(t)$$

di mana $h(t) = e^{-\zeta \omega_n t} \sin(\omega_d t)$ mewakili osilasi teredam pada frekuensi resonansi struktural $\omega_d$, dan $\tau_k$ adalah *random slip jitter* (variasi acak 1-2% akibat kontak non-ideal).

```
+---------------------------------------------------------------------------------------------------+
|               TAHAPAN TRANSFORMASI SINYAL ENVELOPE DEMODULATION (HILBERT ANALYSIS)                |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  1. Raw Vibration Signal x(t)       -> Berisikan noise frekuensi rendah & impuls teredam mikro    |
|               |                                                                                   |
|  2. Bandpass Filter [fc - df, fc + df] -> Mengisolasi pita resonansi struktur pembawa impuls     |
|               |                                                                                   |
|  3. Hilbert Transform H{x_bp(t)}    -> Menghasilkan sinyal analitik kompleks z(t)                |
|               |                                                                                   |
|  4. Envelope Extraction E(t)=|z(t)| -> Mengupas sinyal pembawa resonansi, menyisakan modulasi     |
|               |                                                                                   |
|  5. Envelope FFT Spectrum F{E(t)}   -> Memunculkan garis spektrum tajam pada BPFO / BPFI / BSF    |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 3.1 Hilbert Transform Formal
Transformasi Hilbert dari sinyal kontinu real $x(t)$ didefinisikan sebagai *Cauchy Principal Value* (P.V.) dari konvolusi antara $x(t)$ dan fungsi $1/(\pi t)$:

$$\tilde{x}(t) = \mathcal{H}\{x(t)\} = \frac{1}{\pi} \text{P.V.} \int_{-\infty}^{\infty} \frac{x(\tau)}{t - \tau} \, d\tau = x(t) * \frac{1}{\pi t}$$

Dalam domain frekuensi Fourier, transformasi Hilbert setara dengan memutar fase seluruh komponen frekuensi positif sebesar $-90^\circ$ ($-\pi/2$) dan frekuensi negatif sebesar $+90^\circ$ ($+\pi/2$):

$$\mathcal{F}\{\mathcal{H}\{x(t)\}\} = -j \cdot \text{sgn}(f) \cdot X(f)$$

### 3.2 Sinyal Analitik & Ekstraksi Amplop (Envelope)
Sinyal analitik kompleks $z(t)$ dibentuk dari pasangan kuadratur:

$$z(t) = x_{\text{bp}}(t) + j \tilde{x}_{\text{bp}}(t) = A(t) e^{j \phi(t)}$$

Amplop sesaat (*Instantaneous Envelope*) $A(t)$ dihitung sebagai magnitudo sinyal analitik:

$$A(t) = |z(t)| = \sqrt{x_{\text{bp}}^2(t) + \tilde{x}_{\text{bp}}^2(t)}$$

Spektrum Amplop (*Envelope Spectrum*) diperoleh dengan menerapkan Transformasi Fourier pada $A(t)$:

$$\mathcal{S}_{\text{env}}(f) = \left| \int_{-\infty}^{\infty} (A(t) - \bar{A}) e^{-j 2\pi f t} \, dt \right|$$

di mana $\bar{A}$ adalah nilai rata-rata DC offset yang dihilangkan untuk mencegah lonjakan semu pada $f = 0 \text{ Hz}$.

---

## 4. Teori Spectral Kurtosis (SK) & Fast Kurtogram (Jerome Antoni)

Tantangan fundamental dalam HFRT adalah: **Bagaimana cara memilih frekuensi tengah ($f_c$) dan lebar pita ($\Delta f$) bandpass filter secara otomatis dan optimal?**

Kurtosis statistik tingkat empat mengukur tingkat ketajaman (*peakedness / impulsiveness*) suatu sinyal:

$$\text{Kurtosis} = \frac{\mathbb{E}[(x - \mu)^4]}{\sigma^4}$$

Untuk sinyal *noise* Gaussian murni, $\text{Kurtosis} = 3$. Kehadiran impuls benturan bantalan meningkatkan nilai kurtosis drastis di atas 3.

**Spectral Kurtosis (SK)** memperluas konsep ini ke dalam domain waktu-frekuensi. SK dari sinyal $x(t)$ pada frekuensi $f$ didefinisikan melalui estimasi momen spektral berbasis *Short-Time Fourier Transform (STFT)* atau filter bank:

$$K(f) = \frac{\langle |X(t, f)|^4 \rangle_t}{\langle |X(t, f)|^2 \rangle_t^2} - 2$$

di mana $\langle \cdot \rangle_t$ adalah operator perataan waktu.

```
+---------------------------------------------------------------------------------------------------+
|               STRUKTUR TILING FAST KURTOGRAM 1/3-BINARY TREE FILTER BANK (ANTONI)                 |
+---------------------------------------------------------------------------------------------------+
| Level 0 (k=0) :  |----------------------------- [0, Fs/2] -----------------------------| (1 band)|
| Level 1 (k=1) :  |------------ [0, Fs/4] ------------|------------ [Fs/4, Fs/2] -----------| (2) |
| Level 1.5     :  |--- [0, Fs/6] ---|--- [Fs/6, Fs/3] ---|--- [Fs/3, Fs/2] ---|        (3 bands)|
| Level 2 (k=2) :  |-- [0, Fs/8] --|-- [Fs/8, Fs/4] --|-- [Fs/4, 3Fs/8] --|-- [3Fs/8, Fs/2] --| (4) |
| ...              |                                                                                |
| Level L (k=L) :  Pita frekuensi terbagi menjadi sub-band sempit. Titik (fc*, df*) dengan SK max   |
|                  dipilih sebagai parameter optimal untuk Bandpass Demodulation.                   |
+---------------------------------------------------------------------------------------------------+
```

Algoritma **Fast Kurtogram** (Antoni, 2007) menghitung SK secara efisien melintasi bidang kisi $(f_c, \Delta f)$ menggunakan piramida filter bank kuadratur multi-tingkat (*multirate filterbank*), mendeteksi puncak impulsivitas dengan kompleksitas komputasi hanya $\mathcal{O}(N \log N)$.

---

## 5. Implementasi Algoritma Python: Fast Kurtogram & Envelope Demodulation Diagnostics

Berikut adalah modul lengkap Python untuk memproses getaran mentah, mencari parameter filter terbaik via Spectral Kurtosis, mendemodulasi amplop Hilbert, dan mengidentifikasi cacat bantalan otomatis.

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 476: CBM Vibration Envelope Demodulation & Fast Kurtogram Spectral Analyzer
Dependencies: numpy, scipy
"""

import numpy as np
from scipy import signal
from typing import Dict, Tuple, List

class BearingVibrationDiagnostics:
    def __init__(self, sampling_rate: float, shaft_rpm: float, bearing_params: Dict[str, float]):
        """
        bearing_params: {
            'n_balls': int,
            'd_roller_mm': float,
            'd_pitch_mm': float,
            'contact_angle_deg': float
        }
        """
        self.fs = sampling_rate
        self.fr = shaft_rpm / 60.0  # Shaft rotational frequency (Hz)
        self.params = bearing_params
        self.fault_freqs = self._calculate_characteristic_frequencies()

    def _calculate_characteristic_frequencies(self) -> Dict[str, float]:
        nb = self.params['n_balls']
        d = self.params['d_roller_mm']
        D = self.params['d_pitch_mm']
        alpha = np.radians(self.params['contact_angle_deg'])
        cos_a = np.cos(alpha)

        bpfo = (nb / 2.0) * self.fr * (1.0 - (d / D) * cos_a)
        bpfi = (nb / 2.0) * self.fr * (1.0 + (d / D) * cos_a)
        bsf = (D / (2.0 * d)) * self.fr * (1.0 - ((d / D) * cos_a)**2)
        ftf = 0.5 * self.fr * (1.0 - (d / D) * cos_a)

        return {
            "Shaft_1X": self.fr,
            "BPFO": bpfo,
            "BPFI": bpfi,
            "BSF": bsf,
            "FTF": ftf
        }

    def compute_spectral_kurtosis_grid(self, x: np.ndarray, levels: int = 4) -> Tuple[float, float, np.ndarray]:
        """
        Menghitung Kurtogram multi-level sederhana untuk mencari bandpass filter optimal (fc, bw)
        """
        n = len(x)
        best_kurt = -1.0
        best_fc = 0.0
        best_bw = 0.0
        kurt_results = []

        for level in range(1, levels + 1):
            num_bands = 2 ** level
            bw = (self.fs / 2.0) / num_bands
            for b in range(num_bands):
                f_low = b * bw
                f_high = (b + 1) * bw
                fc = (f_low + f_high) / 2.0

                # Avoid edges (Nyquist and DC)
                if f_low <= 10 or f_high >= (self.fs / 2.0) - 10:
                    continue

                # Bandpass Filter Design
                nyq = self.fs / 2.0
                low = max(0.01, f_low / nyq)
                high = min(0.99, f_high / nyq)
                
                try:
                    sos = signal.butter(4, [low, high], btype='bandpass', output='sos')
                    filtered = signal.sosfiltfilt(sos, x)
                    # Instantaneous amplitude
                    env = np.abs(signal.hilbert(filtered))
                    env_zero_mean = env - np.mean(env)
                    # Kurtosis
                    kurt = np.mean(env_zero_mean**4) / (np.mean(env_zero_mean**2)**2 + 1e-12) - 3.0

                    kurt_results.append((level, fc, bw, kurt))
                    if kurt > best_kurt:
                        best_kurt = kurt
                        best_fc = fc
                        best_bw = bw
                except Exception:
                    continue

        return best_fc, best_bw, np.array(kurt_results)

    def extract_envelope_spectrum(self, x: np.ndarray, fc: float, bw: float) -> Tuple[np.ndarray, np.ndarray]:
        """
        Mengekstrak Spektrum Amplop Hilbert pada pita resonansi optimal (fc, bw)
        """
        nyq = self.fs / 2.0
        low = max(0.01, (fc - bw / 2.0) / nyq)
        high = min(0.99, (fc + bw / 2.0) / nyq)

        sos = signal.butter(4, [low, high], btype='bandpass', output='sos')
        filtered_sig = signal.sosfiltfilt(sos, x)

        # Hilbert Envelope
        analytic_sig = signal.hilbert(filtered_sig)
        envelope = np.abs(analytic_sig)
        envelope_ac = envelope - np.mean(envelope)

        # FFT of Envelope
        n_samples = len(envelope_ac)
        window = signal.windows.hann(n_samples)
        fft_vals = np.fft.rfft(envelope_ac * window)
        freqs = np.fft.rfftfreq(n_samples, d=1.0 / self.fs)
        amplitudes = (2.0 / np.sum(window)) * np.abs(fft_vals)

        return freqs, amplitudes

    def diagnose_faults(self, freqs: np.ndarray, amplitudes: np.ndarray, tolerance_pct: float = 2.0) -> Dict[str, Dict]:
        """
        Mencocokkan puncak amplitudo spektrum amplop dengan frekuensi karakteristik cacat bantalan
        """
        diagnosis = {}
        for fault_name, target_freq in self.fault_freqs.items():
            if target_freq <= 0:
                continue
            delta = target_freq * (tolerance_pct / 100.0)
            idx_range = np.where((freqs >= target_freq - delta) & (freqs <= target_freq + delta))[0]

            if len(idx_range) > 0:
                peak_amp = float(np.max(amplitudes[idx_range]))
                peak_freq = float(freqs[idx_range[np.argmax(amplitudes[idx_range])]])
            else:
                peak_amp = 0.0
                peak_freq = 0.0

            # Noise floor baseline around peak
            noise_idx = np.where((freqs >= max(0, target_freq - 5 * delta)) & (freqs <= target_freq + 5 * delta))[0]
            noise_floor = float(np.median(amplitudes[noise_idx])) if len(noise_idx) > 0 else 1e-6
            snr_db = 20.0 * np.log10((peak_amp + 1e-12) / (noise_floor + 1e-12))

            diagnosis[fault_name] = {
                "nominal_freq_hz": round(target_freq, 2),
                "detected_freq_hz": round(peak_freq, 2),
                "peak_amplitude_g": round(peak_amp, 5),
                "snr_db": round(snr_db, 2),
                "fault_severity": "CRITICAL" if snr_db > 14.0 else ("WARNING" if snr_db > 8.0 else "NORMAL")
            }
        return diagnosis

# ==========================================
# SYNTHETIC BENCHMARK SIMULATION & TEST
# ==========================================
if __name__ == "__main__":
    np.random.seed(42)
    fs = 20000.0        # 20 kHz Sampling Rate
    duration = 1.0      # 1 second duration
    t = np.linspace(0, duration, int(fs * duration), endpoint=False)

    # 6205 Deep Groove Ball Bearing Parameters
    bearing_6205 = {
        'n_balls': 9,
        'd_roller_mm': 7.94,
        'd_pitch_mm': 39.04,
        'contact_angle_deg': 0.0
    }
    rpm = 1800.0  # fr = 30 Hz

    diag_engine = BearingVibrationDiagnostics(sampling_rate=fs, shaft_rpm=rpm, bearing_params=bearing_6205)
    print("=== THEORETICAL CHARACTERISTIC FAULT FREQUENCIES ===")
    for k, v in diag_engine.fault_freqs.items():
        print(f"  - {k:<10}: {v:8.2f} Hz")

    # Generate Synthetic Signal: Shaft Runout + Resonant Structural Impulses at BPFO (Outer Race Defect)
    f_res = 4500.0  # Structural Natural Resonance (4.5 kHz)
    decay_zeta = 0.05
    bpfo_freq = diag_engine.fault_freqs['BPFO']  # ~107.5 Hz

    # Periodic impulses with slight random jitter
    impulse_train = np.zeros_like(t)
    period_samples = int(fs / bpfo_freq)
    for idx in range(0, len(t), period_samples):
        jitter = int(np.random.normal(0, period_samples * 0.015))
        pos = min(len(t) - 1, max(0, idx + jitter))
        impulse_train[pos] = 1.0

    # Resonant response h(t)
    h = np.exp(-2.0 * np.pi * f_res * decay_zeta * t[:400]) * np.sin(2.0 * np.pi * f_res * t[:400])
    fault_signal = np.convolve(impulse_train, h, mode='same') * 2.5

    # Background Noise & 1X Shaft Misalignment
    shaft_1x_harmonics = 0.8 * np.sin(2.0 * np.pi * 30.0 * t) + 0.4 * np.sin(2.0 * np.pi * 60.0 * t)
    noise = np.random.normal(0, 1.2, size=len(t))
    raw_vibration = fault_signal + shaft_1x_harmonics + noise

    # Execute Fast Kurtogram Filter Selection
    best_fc, best_bw, _ = diag_engine.compute_spectral_kurtosis_grid(raw_vibration, levels=4)
    print(f"\n[Kurtogram] Optimal Demodulation Band: fc = {best_fc:.1f} Hz, bw = {best_bw:.1f} Hz")

    # Demodulate Envelope Spectrum
    freqs, amps = diag_engine.extract_envelope_spectrum(raw_vibration, best_fc, best_bw)

    # Diagnose Bearing Health Status
    results = diag_engine.diagnose_faults(freqs, amps)
    print("\n=== AUTOMATED BEARING HEALTH DIAGNOSIS REPORT ===")
    for fault, metric in results.items():
        print(f"[{metric['fault_severity']:<8}] {fault:<10}: Nominal={metric['nominal_freq_hz']:6.2f} Hz | Detected={metric['detected_freq_hz']:6.2f} Hz | SNR={metric['snr_db']:5.1f} dB")
```

---

## 6. Standar Prosedur Operasional Industri & Standar Internasional (ISO 10816 / ISO 20816 / ISO 13373)

Penerapan Condition-Based Maintenance getaran diatur oleh konsorsium standar keinsinyuran internasional:

```
+---------------------------------------------------------------------------------------------------+
|               KERANGKA EVALUASI TINGKAT KEPARAHAN GETARAN (ISO 20816 & ISO 13373)                 |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ ZONE A ] : Mesin baru dipasang / kondisi prima sempurna (Vibration < 1.4 mm/s RMS).            |
|  [ ZONE B ] : Mesin beroperasi normal tanpa batasan jangka panjang (1.4 - 2.8 mm/s RMS).          |
|  [ ZONE C ] : Kondisi memburuk; diizinkan beroperasi terbatas hingga jadwal perbaikan (2.8 - 4.5).|
|  [ ZONE D ] : Getaran berbahaya; RISIKO KERUSAKAN SEGERA / TRIP DARURAT (> 4.5 mm/s RMS).        |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### Prosedur Sensor Montase & Integritas Pengukuran (ISO 13373-1):
1. **Sensor Transduser**: Piezoelectric Accelerometer berdensitas tinggi dengan rentang frekuensi linier minimal $10 \text{ Hz} - 15 \text{ kHz}$ dan sensitivitas $100 \text{ mV/g}$.
2. **Metode Mounting**: Menggunakan stud berulir (*stud mounted*) langsung pada bodi bantalan (*bearing load zone*). Penggunaan magnet tangan hanya diperbolehkan hingga frekuensi $< 3 \text{ kHz}$ karena respon resonansi magnetik yang meredam sinyal HF.
3. **Pemberian Sinyal Alarm**:
   - **Alert Level (Stage 2 Defect)**: Kenaikan Envelope Peak SNR $> 8 \text{ dB}$ pada frekuensi BPFO/BPFI.
   - **Action / Shutdown Level (Stage 4 Defect)**: Kemunculan harmonik tinggi, peningkatan broadband noise floor pada spektrum FFT konvensional (> 4.5 mm/s RMS), dan kenaikan suhu bearing $> 15^\circ\text{C}$ di atas baseline.

---

## 7. Studi Kasus Industri: Boiler Feed Water Pump (BFP) di Pembangkit Listrik Tenaga Uap (PLTU)

### 7.1 Deskripsi Masalah & Konfigurasi Sistem
Pada unit Boiler Feed Water Pump (BFP) berdaya 1.8 MW di sebuah PLTU supercritical, tim pemeliharaan mengamati peningkatan getaran aksial non-signifikan (dari 1.8 mm/s menjadi 2.4 mm/s RMS). Pengukuran spektrum FFT kecepatan getaran (*velocity spectrum*) standar tidak menunjukkan kelainan roda gigi maupun unbalance motor.

Namun, sistem *Condition Monitoring System* (CMS) berbasis *Hilbert Envelope Demodulation & Spectral Kurtosis* mendeteksi anomali kritis:
- Parameter Bantalan SKF 7318 BECBM (Sudut kontak $\alpha = 40^\circ$, $N_b = 14$, $d = 30 \text{ mm}$, $D = 140 \text{ mm}$, $RPM = 2980$, $f_r = 49.67 \text{ Hz}$).
- Nilai teoritis $\text{BPFI} = 408.2 \text{ Hz}$.
- Fast Kurtogram mengidentifikasi pita resonansi tinggi terisolasi pada $f_c = 7.2 \text{ kHz}$ dengan $\Delta f = 1.2 \text{ kHz}$.
- Spektrum amplop menunjukkan puncak tajam pada $408.1 \text{ Hz}$ dengan sepasang sidebands $408.1 \pm 49.7 \text{ Hz}$ dan rasio SNR mencapai $18.4 \text{ dB}$ (Kategori **CRITICAL**).

```
+---------------------------------------------------------------------------------------------------+
|               PERBANDINGAN KINERJA PEMELIHARAAN: TIME-BASED VS ENVELOPE CBM                       |
+---------------------------------------------------------------------------------------------------+
| Parameter Kinerja                      | Baseline (Time-Based TBM)  | CBM Envelope Demodulation   |
+----------------------------------------+----------------------------+-----------------------------+
| Waktu Deteksi Sebelum Kerusakan Total  | 0 Hari (Trip Mendadak)     | 42 Hari (Lead Time Aman)    |
| Biaya Kerusakan Sekunder (Shaft & Seal)| Rp 850.000.000             | Rp 0 (Zero Secondary Dam.)  |
| Biaya Penggantian Komponen             | Rp 1.200.000.000           | Rp 45.000.000 (Bearing Only)|
| Downtime Produksi Listrik              | 96 Jam (4 Hari Outage)     | 6 Jam (Planned Shift Off)   |
| Availability Rate BFP                  | 93.4%                      | 99.2%                       |
+----------------------------------------+----------------------------+-----------------------------+
```

### 7.2 Evaluasi Keberhasilan & Dampak Ekonomi
Dengan peringatan dini 42 hari sebelum terjadinya *catastrophic seizure*, tim rekayasa keandalan menjadwalkan penggantian bantalan terencana (*planned outage*) selama 6 jam pada akhir pekan beban rendah. Tindakan ini mencegah kerugian kehilangan daya (*lost electricity sales*) dan perbaikan rotor pompa yang ditaksir bernilai lebih dari **Rp 2.1 Miliar**.

---

## 8. Referensi Terverifikasi (Academic & Professional Standards)

1. **Antoni, J. (2006)**. *The spectral kurtosis: a useful tool for analysing non-stationary signals*. Mechanical Systems and Signal Processing, 20(2), 282-307. DOI: [10.1016/j.ymssp.2004.10.012](https://doi.org/10.1016/j.ymssp.2004.10.012).
2. **Antoni, J. (2007)**. *Fast computation of the kurtogram for the detection of transient faults*. Mechanical Systems and Signal Processing, 21(1), 108-124. DOI: [10.1016/j.ymssp.2005.12.002](https://doi.org/10.1016/j.ymssp.2005.12.002).
3. **Randall, R. B., & Antoni, J. (2011)**. *Rolling element bearing diagnostics—A tutorial*. Mechanical Systems and Signal Processing, 25(2), 485-520. DOI: [10.1016/j.ymssp.2010.07.017](https://doi.org/10.1016/j.ymssp.2010.07.017).
4. **Xue, B., Wang, L., & Wu, C. (2022)**. *MobileNetV2 Combined with Fast Spectral Kurtosis Analysis for Bearing Fault Diagnosis*. Electronics, 11(19), 3176. DOI: [10.3390/electronics11193176](https://doi.org/10.3390/electronics11193176).
5. **Kamiel, B. P. (2020)**. *Demodulation of Vibration Signal Based on Envelope-Kurtogram for Ball Bearing Fault Detection*. JMPM (Jurnal Material dan Proses Manufaktur), 4(2), 105-115. DOI: [10.18196/jmpm.v4i2.11271](https://doi.org/10.18196/jmpm.v4i2.11271).
6. **ISO 20816-1:2016**. *Mechanical vibration — Measurement and evaluation of machine vibration — Part 1: General guidelines*. International Organization for Standardization.
7. **ISO 13373-1:2002**. *Condition monitoring and diagnostics of machines — Vibration condition monitoring — Part 1: General procedures*. International Organization for Standardization.
8. **Mobley, R. K. (2002)**. *An Introduction to Predictive Maintenance (2nd ed.)*. Elsevier / Butterworth-Heinemann. ISBN: 978-0750675314.
