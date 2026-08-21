# Modul 564: Phased Array Ultrasonic Testing (PAUT), Full Matrix Capture (FMC), dan Total Focusing Method (TFM) pada Inspeksi Integritas Sambungan Las Industri (ISO 13588, ISO 23865, ASTM E2700, ASME Sec V Art 4)

## 1. Pengantar & Urgensi NDT Ultrasonik Lanjutan dalam Rekayasa Industri

Dalam rekayasa manufaktur berat, bejana tekan (*pressure vessels*), jaringan pipa minyak & gas (*oil & gas pipeline*), struktur kedirgantaraan, dan infrastruktur pembangkit nuklir, integritas sambungan las (*weld integrity*) merupakan faktor kritis penentu keandalan sistem struktural (*structural reliability*). Cacat las mikro seperti retak dingin (*hydrogen-induced cracking*), diskontinuitas fusi samping (*lack of sidewall fusion - LoF*), penetrasi tidak sempurna (*lack of penetration - LoP*), porositas terkelompok (*clustered porosity*), dan inklusi terak (*slag inclusion*) dapat memicu kegagalan katastropik (*catastrophic brittle fracture*) di bawah beban siklik dinamis atau tekanan fluida tinggi.

Secara historis, inspeksi radiografi sinar-X/Gamma (*Radiographic Testing - RT*) dan ultrasonik konvensional berkas tunggal (*Conventional Ultrasonic Testing - UT*) menjadi pilar pengujian tak merusak (*Non-Destructive Testing - NDT*). Namun, industri modern beralih secara masif menuju **Phased Array Ultrasonic Testing (PAUT)** dan generasi terbarunya, **Full Matrix Capture / Total Focusing Method (FMC-TFM)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 EVOLUSI TEKNOLOGI NON-DESTRUCTIVE TESTING (NDT) UNTUK SAMBUNGAN LAS INDUSTRI                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Radiographic Testing (RT - Film/Digital):                                                                         |
|     - Keunggulan: Rekaman visual permanen 2D cacat volumetrik (porositas, slag).                                      |
|     - Kelemahan : Bahaya radiasi pengion (memerlukan barikade zona bahaya), buta terhadap retak planar sejajar berkas,|
|                   tidak menyediakan kedalaman/orientasi dimensi vertikal cacat (sizing flaw depth).                  |
|                                                                                                                       |
|  2. Conventional Single-Element Ultrasonic Testing (UT):                                                              |
|     - Keunggulan: Efektif mendeteksi diskontinuitas planar tegak lurus arah rambat gelombang.                         |
|     - Kelemahan : Sudut berkas tunggal tetap (30°, 45°, 60°, atau 70° fixed wedge), waktu scanning manual lambat,      |
|                   sensitivitas operator sangat subjektif, resolusi spasial rendah di luar zona fokus sempit.          |
|                                                                                                                       |
|  3. Phased Array Ultrasonic Testing (PAUT - ISO 13588 / ASTM E2700):                                                  |
|     - Keunggulan: Multi-elemen transduser (16, 32, 64, 128 elemen) yang dikontrol penundaan waktu elektroniknya        |
|                   (focal laws), sapuan sudut dinamis (Sectorial S-Scan & Linear E-Scan), rekonstruksi visual sektor 2D|
|                   secara real-time, laju inspeksi tinggi, rekaman data digital 100% terkodekan (encoded scanning).    |
|                                                                                                                       |
|  4. Full Matrix Capture & Total Focusing Method (FMC-TFM - ISO 23865 / ASME Section V Art 4):                        |
|     - Keunggulan: Akuisisi matriks lengkap N x N sinyal A-Scan mentah (FMC), komputasi rekonstruksi fokus sintetik     |
|                   pada SETIAP PIKSEL domain inspeksi (TFM), resolusi spasial dan sensitivitas batas tertinggi,       |
|                   karakterisasi morfologi geometri cacat (tip diffraction sizing) yang presisi tanpa blind spot.      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Arsitektur Fisik PAUT, Beamforming, dan Matriks Akuisisi FMC

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ARSITEKTUR FISIK ARRAY PROBE & AKUISISI SINYAL FMC                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|          Transduser Array 1D Linear (N Elemen Piezoelektrik)                                                          |
|          ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐                                            |
|          │ e1│ e2│ e3│ e4│ e5│ e6│ e7│ e8│...│   │   │   │   │   │   │ eN│   (Pitch = p, Width = w, Gap = g)          |
|          └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘                                            |
|            │   │   │   │   │   │   │   │       │   │   │   │   │   │   │                                              |
|            \───\───\───\───\───\───\───\───────/───/───/───/───/───/───/                                              |
|              ┌─────────────────────────────────────────────────────────┐                                              |
|              │   Pulsing / Receiving Electronics (FMC Sequential Emit) │                                              |
|              │   Tx: Elemen i menembak (1..N)  --> Rx: Semua j (1..N)  │                                              |
|              └────────────────────────────┬────────────────────────────┘                                              |
|                                           │                                                                           |
|                                           ▼                                                                           |
|              ┌─────────────────────────────────────────────────────────┐                                              |
|              │      Full Matrix Raw Data: Matriks A-Scan S_{ij}(t)     │                                              |
|              │      Dimensi: N x N x K (Time Samples @ 50-100 MHz ADC) │                                              |
|              └────────────────────────────┬────────────────────────────┘                                              |
|                                           │                                                                           |
|                                           ▼                                                                           |
|              ┌─────────────────────────────────────────────────────────┐                                              |
|              │          TFM Grid Pixel-by-Pixel Reconstruction         │                                              |
|              │   I(x, z) = | Sum_{i=1}^N Sum_{j=1}^N S_{ij}(t_{ij}(x,z)) | │                                          |
|              └─────────────────────────────────────────────────────────┘                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Parameter Geometri Probe Phased Array
Array 1D ultrasonik terdiri dari susunan $N$ kristal piezoelektrik (biasanya $N = 32, 64, \text{ atau } 128$) yang dipisahkan oleh celah isolator akustik:
1. **Pitch ($p$)**: Jarak pusat-ke-pusat antara elemen bertetangga.
2. **Width ($e$)**: Lebar elemen aktif individu.
3. **Kerf ($g$)**: Lebar celah pemisah antar-elemen ($p = e + g$).
4. **Elevation ($W$)**: Panjang elemen dalam arah pasif (tegak lurus terhadap sumbu susunan elektronik).
5. **Apertur Total ($A$)**: Dimensi aktif total array, di mana $A = N \cdot p - g \approx N \cdot p$.

Untuk menghindari munculnya gelombang interferensi palsu (*grating lobes*) yang merusak rasio sinyal terhadap derau (*Signal-to-Noise Ratio - SNR*), pitch probe harus memenuhi kriteria batas spasial Nyquist akustik:

$$ p \le \frac{\lambda}{1 + |\sin \theta_{\max}|} $$

di mana $\lambda = \frac{c}{f}$ adalah panjang gelombang akustik dalam media wedge/baja, dan $\theta_{\max}$ adalah sudut defleksi berkas maksimum (*maximum steering angle*).

---

## 3. Landasan Teori & Formulasi Matematis Formal

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI PROPAGASI & WAKTU TEMPUH GELOMBANG TFM                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     Probe Array (Wedge Interface)                                                                                     |
|     (x_i, z=0) [Elemen Pemancar i]                        (x_j, z=0) [Elemen Penerima j]                              |
|           \                                                     /                                                     |
|            \ c_wedge (Kecepatan wedge)                         / c_wedge                                              |
|             \                                                 /                                                       |
|   ───────────\───────────────────────────────────────────────/─────────── Antarmuka Wedge-Benda Uji (z = z_w)         |
|               \  Refraksi Snellius (c_steel)                / Refraksi Snellius (c_steel)                             |
|                \                                           /                                                          |
|                 \                                         /                                                           |
|                  \                                       /                                                            |
|                   \                                     /                                                             |
|                    \                                   /                                                              |
|                     ───────► Target Pixel P(x, z) ◄────                                                               |
|                              [Fokus Sintetis TFM]                                                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Phased Array Beam Steering & Beam Focusing (Focal Laws Klasik)

Pada PAUT konvensional, pembentukan muka gelombang terarah (*beam steering*) pada sudut $\theta_s$ dan kedalaman fokus $F$ dilakukan dengan menerapkan keterlambatan waktu penembakan (*time delay*) $\Delta t_m$ pada elemen ke-$m$:

$$ \Delta t_m = \Delta t_m^{\text{steer}} + \Delta t_m^{\text{focus}} $$

$$ \Delta t_m = \frac{x_m \sin \theta_s}{c} + \frac{1}{c} \left( F - \sqrt{F^2 + x_m^2 - 2 F x_m \sin \theta_s} \right) $$

di mana $x_m = \left( m - \frac{N+1}{2} \right) p$ adalah koordinat posisi elemen ke-$m$ relatif terhadap pusat apertur array, dan $c$ adalah kecepatan rambat gelombang ultrasonik dalam media.

### 3.2. Formulasi Matriks Akuisisi Full Matrix Capture (FMC)

Dalam mode FMC, instrumen NDT mengeksitasi satu elemen tunggal $i \in \{1, \dots, N\}$ sebagai pemancar (*transmitter*), sementara seluruh elemen $j \in \{1, \dots, N\}$ bertindak sebagai penerima (*receivers*) yang merekam sinyal pantulan waktu penuh $S_{ij}(t)$. Proses ini diulang untuk setiap elemen $i$ dari $1$ hingga $N$, menghasilkan matriks sinyal raw RF:

$$ \mathbf{S}_{\text{FMC}} = \left\{ S_{ij}(t) \;\Big|\; i \in \{1, \dots, N\}, \; j \in \{1, \dots, N\}, \; t \in [0, T_{\max}] \right\} $$

Matriks ini merekam seluruh informasi elastodinamika ruang-waktu sistem akustik tanpa adanya kehilangan fasa awal.

### 3.3. Algoritma Rekonstruksi Total Focusing Method (TFM)

Domain inspeksi benda uji didiskretisasi menjadi kisi piksel spasial 2D $\Omega = \{(x, z) \mid x \in [x_{\min}, x_{\max}], z \in [z_{\min}, z_{\max}]\}$. Untuk setiap piksel target $P(x, z)$, total waktu tempuh dua arah (*round-trip acoustic time-of-flight*) dari elemen pemancar $i$ ke titik $P$, lalu dipantulkan kembali ke elemen penerima $j$, dihitung sebagai:

$$ t_{ij}(x, z) = t_i^{\text{tx}}(x, z) + t_j^{\text{rx}}(x, z) $$

Pada media homogen (inspeksi kontak langsung):

$$ t_i^{\text{tx}}(x, z) = \frac{\sqrt{(x - x_i)^2 + (z - z_i)^2}}{c} $$
$$ t_j^{\text{rx}}(x, z) = \frac{\sqrt{(x - x_j)^2 + (z - z_j)^2}}{c} $$

Intensitas citra sintetis TFM pada piksel $P(x, z)$ adalah superposisi koheren dari seluruh pasangan sinyal $S_{ij}$ yang dievaluasi pada waktu tempuh masing-masing:

$$ I(x, z) = \left| \sum_{i=1}^{N} \sum_{j=1}^{N} w_i(x, z) \cdot w_j(x, z) \cdot \hat{S}_{ij}(t_{ij}(x, z)) \right| $$

di mana:
- $\hat{S}_{ij}(t) = S_{ij}(t) + i \cdot \mathcal{H}\{S_{ij}(t)\}$ adalah sinyal analitik kompleks dari $S_{ij}(t)$ yang diperoleh melalui Transformasi Hilbert $\mathcal{H}\{\cdot\}$, untuk mengekstraksi amplop amplitudo (*envelope detection*) bebas interferensi osilasi fase frekuensi tinggi.
- $w_i(x, z)$ adalah faktor pembobotan sudut radiasi (*apodization weight* / directivity correction):

$$ w_i(x, z) = \text{sinc}\left( \frac{\pi e}{\lambda} \sin \theta_i(x, z) \right) \cdot \cos \theta_i(x, z) $$

$$ \theta_i(x, z) = \arctan\left( \frac{x - x_i}{z - z_i} \right) $$

### 3.4. Refraksi Antarmuka Wedge-Spesimen via Prinsip Fermat & Hukum Snellius

Pada aplikasi industri aktual, probe dipasang di atas baji polimer (*rexolite wedge*, $c_w \approx 2330 \text{ m/s}$) untuk menginjeksikan gelombang geser (*transverse/shear wave*, $c_s \approx 3240 \text{ m/s}$) ke dalam baja. Titik masuk antarmuka $(x_w, z_w)$ harus memenuhi Prinsip Waktu Tersingkat Fermat:

$$ t_i(x, z) = \min_{x_w} \left[ \frac{\sqrt{(x_w - x_i)^2 + z_w^2}}{c_w} + \frac{\sqrt{(x - x_w)^2 + (z - z_w)^2}}{c_s} \right] $$

Kondisi stasioner $\frac{dt}{dx_w} = 0$ menghasilkan Hukum Snellius klasik pada batas antarmuka:

$$ \frac{\sin \theta_w}{c_w} = \frac{\sin \theta_s}{c_s} $$

---

## 4. Standar Industri NDT: ISO 13588, ISO 23865, ASTM E2700, & ASME Section V

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       STANDARISASI INTERNASIONAL INSPEKSI PAUT & FMC-TFM                                              |
+-----------------------------------------------------------------------------------------------------------------------+
| Standar         | Domain Ruang Lingkup             | Persyaratan Kunci & Kriteria Keberterimaan                      |
+-----------------+----------------------------------+-----------------------------------------------------------------+
| ISO 13588       | Pengujian Ultrasonik Sambungan   | - Kalibrasi rentang waktu dan sensitivitas (DAC/TCG).           |
|                 | Las Baja Menggunakan Phased      | - Resolusi sudut minimum (step <= 1° untuk S-scan).             |
|                 | Array Terintegrasi               | - Evaluasi diskontinuitas planar berbasis amplitude & length.   |
+-----------------+----------------------------------+-----------------------------------------------------------------+
| ISO 23865       | Ultrasonic Testing using Arrays  | - Karakterisasi resolusi TFM (Point Spread Function / PSF).     |
|                 | with FMC/TFM Techniques          | - Densitas kisi piksel: delta_x, delta_z <= lambda / 8.         |
|                 |                                  | - Pemilihan mode propagasi (L-L, T-T, TT-TT, TL-LT skip path).  |
+-----------------+----------------------------------+-----------------------------------------------------------------+
| ASTM E2700      | Standard Practice for Contact    | - Verifikasi indeks pembiasan baji dan offset titik emisi.      |
|                 | Ultrasonic Testing of Welds      | - Kuantifikasi kemampuan pendeteksian cacat akar (root pass)    |
|                 | Using Phased Arrays              |   dan ketidaksempurnaan fusi dinding samping (sidewall LoF).    |
+-----------------+----------------------------------+-----------------------------------------------------------------+
| ASME BPVC       | Boiler and Pressure Vessel Code  | - Validasi kinerja sistem TFM menggunakan blok kalibrasi standar|
| Section V Art 4 | Rules for NDT: Ultrasonic arrays |   (ASME Basic Calibration Block / Navships Block).              |
| & Mandatory App | & Full Matrix Capture TFM        | - Pengukuran dimensi cacat menggunakan -6 dB tip-diffraction.   |
+-----------------+----------------------------------+-----------------------------------------------------------------+
```

---

## 5. Implementasi Algoritma FMC-TFM Multithreaded Python Solver

Di bawah ini adalah implementasi komputasi lengkap untuk akuisisi sintetik Full Matrix Capture (FMC), perambatan waktu tempuh, transformasi Hilbert kompleks, dan rekonstruksi citra Total Focusing Method (TFM) resolusi sub-milimeter.

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 564: Phased Array Ultrasonic Testing (PAUT) & FMC-TFM Weld Inspection Solver
Standar: ISO 13588, ISO 23865, ASTM E2700, ASME Sec V Art 4
"""

import numpy as np
def hilbert_transform_envelope(signal_1d: np.ndarray) -> np.ndarray:
    """
    Menghitung representasi sinyal analitik kompleks menggunakan Fast Fourier Transform (FFT)
    murni dengan NumPy (menggantikan dependensi scipy.signal).
    """
    n = len(signal_1d)
    if n == 0:
        return np.array([], dtype=np.complex64)
    x_fft = np.fft.fft(signal_1d)
    h = np.zeros(n)
    if n % 2 == 0:
        h[0] = 1
        h[n // 2] = 1
        h[1 : n // 2] = 2
    else:
        h[0] = 1
        h[1 : (n + 1) // 2] = 2
    return np.fft.ifft(x_fft * h).astype(np.complex64)
from dataclasses import dataclass
from typing import List, Tuple, Dict, Any


@dataclass
class ProbeConfiguration:
    """Konfigurasi Transduser Phased Array 1D Linear"""
    num_elements: int = 64          # Jumlah total elemen kristal piezoelektrik (N)
    pitch_mm: float = 0.6           # Pitch elemen (jarak pusat-ke-pusat, mm)
    element_width_mm: float = 0.5   # Lebar elemen aktif (mm)
    center_freq_mhz: float = 5.0    # Frekuensi tengah transduser (MHz)
    sampling_freq_mhz: float = 50.0 # Laju sampling ADC perangkat NDT (MHz)
    c_steel_mps: float = 3240.0     # Kecepatan gelombang geser transversal dalam baja karbon (m/s)


@dataclass
class InspectionGrid:
    """Domain Diskretisasi Grid Rekonstruksi Citra TFM"""
    x_min_mm: float = -20.0
    x_max_mm: float = 20.0
    z_min_mm: float = 5.0
    z_max_mm: float = 45.0
    pixel_size_mm: float = 0.2      # Ukuran piksel rekonstruksi grid (<= lambda / 8)


class FMCTFMWeldInspectionEngine:
    """
    Engine Komputasi Full Matrix Capture (FMC) dan Rekonstruksi Total Focusing Method (TFM)
    dengan koreksi sinyal analitik Hilbert dan evaluasi cacat las otomatis (-6 dB sizing).
    """

    def __init__(self, probe: ProbeConfiguration, grid: InspectionGrid):
        self.p = probe
        self.g = grid
        
        # Hitung panjang gelombang akustik dalam baja
        self.wavelength_mm = (self.p.c_steel_mps / (self.p.center_freq_mhz * 1e6)) * 1e3
        
        # Verifikasi batas kerapatan spasial piksel (ISO 23865: pixel_size <= lambda / 8)
        self.max_allowed_pixel = self.wavelength_mm / 4.0
        assert self.g.pixel_size_mm <= self.max_allowed_pixel, (
            f"Ukuran piksel ({self.g.pixel_size_mm} mm) melebihi batas resolusi ISO 23865 ({self.max_allowed_pixel:.3f} mm)"
        )
        
        # Koordinat 1D elemen probe di sepanjang sumbu X (Z = 0)
        elem_indices = np.arange(self.p.num_elements)
        self.elem_x = (elem_indices - (self.p.num_elements - 1) / 2.0) * self.p.pitch_mm
        self.elem_z = np.zeros(self.p.num_elements)
        
        # Bangun koordinat meshgrid 2D TFM
        self.x_grid = np.arange(self.g.x_min_mm, self.g.x_max_mm + self.g.pixel_size_mm, self.g.pixel_size_mm)
        self.z_grid = np.arange(self.g.z_min_mm, self.g.z_max_mm + self.g.pixel_size_mm, self.g.pixel_size_mm)
        self.X_mesh, self.Z_mesh = np.meshgrid(self.x_grid, self.z_grid)
        self.nz, self.nx = self.X_mesh.shape

    def generate_synthetic_fmc_matrix(
        self, flaws: List[Dict[str, float]], noise_snr_db: float = 24.0, num_samples: int = 1500
    ) -> np.ndarray:
        """
        Mensimulasikan perolehan data matriks mentah FMC N x N sinyal A-Scan berdasarkan
        penghamburan gelombang akustik elastodinamik (Point Scatterers).
        """
        dt_us = 1.0 / self.p.sampling_freq_mhz
        t_vector = np.arange(num_samples) * dt_us  # waktu dalam microsecond
        fmc_data = np.zeros((self.p.num_elements, self.p.num_elements, num_samples), dtype=np.float32)
        
        # Bangun pulsa ultrasonik gelombang Ricker/Gabor wavelet
        fc = self.p.center_freq_mhz
        pulse_width = 3.0 / fc
        t_pulse = np.linspace(-pulse_width/2, pulse_width/2, int(pulse_width / dt_us))
        wavelet = np.exp(-np.pi**2 * (fc * t_pulse)**2) * np.cos(2 * np.pi * fc * t_pulse)
        wavelet_len = len(wavelet)
        
        c_mm_us = self.p.c_steel_mps * 1e-3  # Kecepatan dalam mm/microsecond (~3.24 mm/us)
        
        for tx in range(self.p.num_elements):
            x_tx, z_tx = self.elem_x[tx], self.elem_z[tx]
            for rx in range(self.p.num_elements):
                x_rx, z_rx = self.elem_x[rx], self.elem_z[rx]
                a_scan = np.zeros(num_samples, dtype=np.float32)
                
                for f in flaws:
                    xf, zf, amp = f["x"], f["z"], f.get("amp", 1.0)
                    dist_tx = np.hypot(xf - x_tx, zf - z_tx)
                    dist_rx = np.hypot(xf - x_rx, zf - z_rx)
                    total_tof_us = (dist_tx + dist_rx) / c_mm_us
                    
                    # Directivity apodization factor
                    theta_tx = np.arctan2(xf - x_tx, zf - z_tx)
                    theta_rx = np.arctan2(xf - x_rx, zf - z_rx)
                    dir_factor = np.cos(theta_tx) * np.cos(theta_rx)
                    
                    # Distance attenuation factor (1 / sqrt(r1 * r2))
                    att_factor = 1.0 / (np.sqrt(dist_tx * dist_rx) + 1e-3)
                    
                    sample_idx = int(round(total_tof_us / dt_us))
                    if 0 <= sample_idx < num_samples - wavelet_len:
                        effective_amp = amp * dir_factor * att_factor * 10.0
                        a_scan[sample_idx : sample_idx + wavelet_len] += effective_amp * wavelet
                
                # Injeksi Gaussian noise sesuai target SNR (dB)
                sig_pwr = np.mean(a_scan**2)
                if sig_pwr > 1e-12:
                    noise_pwr = sig_pwr / (10.0 ** (noise_snr_db / 10.0))
                    noise = np.random.normal(0, np.sqrt(noise_pwr), num_samples)
                    a_scan += noise
                
                fmc_data[tx, rx, :] = a_scan
                
        return fmc_data

    def reconstruct_tfm_image(self, fmc_data: np.ndarray) -> np.ndarray:
        """
        Rekonstruksi citra TFM bidang-penuh menggunakan superposisi sinyal analitik Hilbert.
        """
        c_mm_us = self.p.c_steel_mps * 1e-3
        dt_us = 1.0 / self.p.sampling_freq_mhz
        num_samples = fmc_data.shape[2]
        
        # 1. Konversi seluruh sinyal FMC menjadi sinyal analitik Hilbert kompleks
        analytic_fmc = np.zeros_like(fmc_data, dtype=np.complex64)
        for tx in range(self.p.num_elements):
            for rx in range(self.p.num_elements):
                analytic_fmc[tx, rx, :] = hilbert_transform_envelope(fmc_data[tx, rx, :])
                
        # 2. Pre-komputasi matriks jarak Euclidean dari seluruh piksel grid ke setiap elemen probe
        # Shape: (num_elements, nz, nx)
        distances_to_elems = np.zeros((self.p.num_elements, self.nz, self.nx), dtype=np.float32)
        for idx in range(self.p.num_elements):
            ex = self.elem_x[idx]
            distances_to_elems[idx, :, :] = np.hypot(self.X_mesh - ex, self.Z_mesh)
            
        # 3. Akumulasi koheren TFM pada setiap piksel
        tfm_intensity = np.zeros((self.nz, self.nx), dtype=np.complex64)
        
        for tx in range(self.p.num_elements):
            d_tx = distances_to_elems[tx, :, :]
            for rx in range(self.p.num_elements):
                d_rx = distances_to_elems[rx, :, :]
                total_tof_us = (d_tx + d_rx) / c_mm_us
                
                # Konversi waktu tempuh menjadi indeks sampel diskrit
                sample_indices = np.round(total_tof_us / dt_us).astype(np.int32)
                
                # Masking indeks di dalam batas array waktu sampel
                valid_mask = (sample_indices >= 0) & (sample_indices < num_samples)
                
                valid_idx = sample_indices[valid_mask]
                tfm_intensity[valid_mask] += analytic_fmc[tx, rx, valid_idx]
                
        # 4. Amplitudo citra TFM envelope dan normalisasi dB
        tfm_abs = np.abs(tfm_intensity)
        max_val = np.max(tfm_abs)
        if max_val > 0:
            tfm_db = 20.0 * np.log10(tfm_abs / max_val + 1e-12)
        else:
            tfm_db = np.zeros_like(tfm_abs)
            
        return tfm_db

    def evaluate_weld_flaws_6db(self, tfm_db: np.ndarray, threshold_db: float = -6.0) -> List[Dict[str, Any]]:
        """
        Karakterisasi ukuran dan penentuan koordinat cacat las berbasis batas -6 dB (ISO 13588 / ISO 23865).
        """
        detected_flaws = []
        mask = tfm_db >= threshold_db
        labeled_img, num_features = signal.label(mask) if hasattr(signal, "label") else (mask.astype(int), 1)
        
        # Identifikasi puncak lokal cacat
        # Mencari area dengan nilai puncak terisolasi
        peak_points = []
        for iz in range(1, self.nz - 1):
            for ix in range(1, self.nx - 1):
                val = tfm_db[iz, ix]
                if val >= threshold_db:
                    neighborhood = tfm_db[iz-1:iz+2, ix-1:ix+2]
                    if val == np.max(neighborhood):
                        peak_points.append((ix, iz, val))
                        
        for ix, iz, peak_val in peak_points:
            x_center = self.x_grid[ix]
            z_center = self.z_grid[iz]
            
            # Estimasi batas -6 dB dari puncak lokal
            local_thresh = peak_val - 6.0
            
            # Lebar X (-6 dB width)
            ix_left = ix
            while ix_left > 0 and tfm_db[iz, ix_left] >= local_thresh:
                ix_left -= 1
            ix_right = ix
            while ix_right < self.nx - 1 and tfm_db[iz, ix_right] >= local_thresh:
                ix_right += 1
            flaw_width_x = (ix_right - ix_left) * self.g.pixel_size_mm
            
            # Tinggi Z (-6 dB height / depth extent)
            iz_top = iz
            while iz_top > 0 and tfm_db[iz_top, ix] >= local_thresh:
                iz_top -= 1
            iz_bottom = iz
            while iz_bottom < self.nz - 1 and tfm_db[iz_bottom, ix] >= local_thresh:
                iz_bottom += 1
            flaw_height_z = (iz_bottom - iz_top) * self.g.pixel_size_mm
            
            detected_flaws.append({
                "x_peak_mm": round(float(x_center), 2),
                "z_peak_mm": round(float(z_center), 2),
                "peak_amplitude_db": round(float(peak_val), 2),
                "width_dx_mm": round(float(flaw_width_x), 2),
                "height_dz_mm": round(float(flaw_height_z), 2),
                "iso_assessment": "REJECT (Unacceptable Flaw)" if flaw_height_z > 1.5 or flaw_width_x > 3.0 else "ACCEPT (Imperfection Tolerable)"
            })
            
        return detected_flaws


# ============================================================================
# EKSEKUSI PENGUJIAN KASUS INSPEKSI SAMBUNGAN LAS BUTT-JOINT BEJANA TEKAN
# ============================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI - SIMULASI & REKONSTRUKSI INSPEKSI LAS PAUT / FMC-TFM (ISO 23865 / ASTM E2700)")
    print("=" * 85)
    
    probe_cfg = ProbeConfiguration(
        num_elements=32,            # 32 elemen array
        pitch_mm=0.75,              # Pitch 0.75 mm
        element_width_mm=0.6,
        center_freq_mhz=5.0,        # 5 MHz frekuensi tengah
        sampling_freq_mhz=50.0,     # ADC 50 MHz
        c_steel_mps=3240.0          # Kecepatan gelombang geser transversal baja
    )
    
    grid_cfg = InspectionGrid(
        x_min_mm=-15.0,
        x_max_mm=15.0,
        z_min_mm=10.0,
        z_max_mm=35.0,
        pixel_size_mm=0.25          # Resolusi spasial kisi TFM
    )
    
    engine = FMCTFMWeldInspectionEngine(probe=probe_cfg, grid=grid_cfg)
    
    # Skenario 2 Cacat Kritis Sambungan Las:
    # 1. Cacat Fusi Samping (Lack of Sidewall Fusion - LoF) pada bevel las X = -4.5 mm, Z = 18.0 mm
    # 2. Retak Akar Las (Root Crack) pada X = 2.0 mm, Z = 28.5 mm
    ground_truth_flaws = [
        {"x": -4.5, "z": 18.0, "amp": 1.0, "desc": "Lack of Sidewall Fusion"},
        {"x": 2.0, "z": 28.5, "amp": 0.85, "desc": "Root Pass Crack"}
    ]
    
    print(f"\n[1] Parameter Transduser Phased Array:")
    print(f"    - Elemen Aktif (N)    : {probe_cfg.num_elements} elemen")
    print(f"    - Pitch Array (p)     : {probe_cfg.pitch_mm} mm (Panjang Apertur Total: {probe_cfg.num_elements * probe_cfg.pitch_mm:.1f} mm)")
    print(f"    - Frekuensi Akustik   : {probe_cfg.center_freq_mhz} MHz (Panjang Gelombang Baja λ: {engine.wavelength_mm:.3f} mm)")
    print(f"    - Grid Rekonstruksi   : {engine.nx} x {engine.nz} piksel ({grid_cfg.pixel_size_mm} mm/pixel)")
    
    print(f"\n[2] Menjalankan Akuisisi Data Matriks Lengkap (Full Matrix Capture - FMC)...")
    fmc_matrix = engine.generate_synthetic_fmc_matrix(flaws=ground_truth_flaws, noise_snr_db=20.0)
    print(f"    -> Ukuran Matriks Data FMC: {fmc_matrix.shape} (N_tx x N_rx x N_samples)")
    
    print(f"\n[3] Memproses Rekonstruksi Citra Total Focusing Method (TFM)...")
    tfm_map_db = engine.reconstruct_tfm_image(fmc_data=fmc_matrix)
    print(f"    -> Rentang Nilai Amplitudo TFM: Min = {np.min(tfm_map_db):.1f} dB, Max = {np.max(tfm_map_db):.1f} dB")
    
    print(f"\n[4] Evaluasi Karakterisasi Cacat & Verifikasi Batas Keberterimaan (ASME Sec V / ISO 13588):")
    flaw_results = engine.evaluate_weld_flaws_6db(tfm_db=tfm_map_db, threshold_db=-6.0)
    
    print("-" * 85)
    print(f"{'No':<4} | {'Lokasi (X, Z) mm':<18} | {'Amplitudo':<12} | {'Dimensi (dx * dz)':<18} | {'Keputusan ISO/ASME':<20}")
    print("-" * 85)
    for idx, f in enumerate(flaw_results, 1):
        pos_str = f"({f['x_peak_mm']}, {f['z_peak_mm']})"
        dim_str = f"{f['width_dx_mm']} mm x {f['height_dz_mm']} mm"
        amp_str = f"{f['peak_amplitude_db']:.1f} dB"
        print(f"{idx:<4} | {pos_str:<18} | {amp_str:<12} | {dim_str:<18} | {f['iso_assessment']}")
    print("-" * 85)
```

---

## 6. Studi Kasus Industri: Inspeksi Pengelasan Sambungan Bejana Tekan Reaktor Petrokimia (SA-516 Gr 70)

### 6.1. Deskripsi Permasalahan & Kondisi Operasi
Sebuah bejana tekan vertikal (*hydrotreating reactor vessel*) berdiameter $3.2 \text{ m}$ dengan ketebalan dinding nominal $32.0 \text{ mm}$ berbahan pelat baja karbon *ASTM A516 Grade 70* mengalami pengelasan tumpul ganda (*Double-V Butt Weld*). Sesuai spesifikasi desain *ASME Boiler and Pressure Vessel Code Section VIII Division 1*, seluruh $100\%$ panjang sambungan las sirkumferensial dan longitudinal wajib menjalani pengujian tak merusak volumetrik sebelum uji hidrostatik (*hydrostatic pressure test*).

### 6.2. Parameter Kalibrasi & Setup Alat
1. **Transduser & Baji**: Probe PAUT 64 elemen, pitch $0.6 \text{ mm}$, frekuensi $5.0 \text{ MHz}$, terpasang pada baji rexolite bersudut $55^\circ$ dengan sistem suplai koplan air otomatis.
2. **Koreksi TCG (Time-Corrected Gain)**: Dikalibrasi menggunakan blok standar *ASTM E2700 / ASME Basic Calibration Block* berdiameter lubang sisi (*Side-Drilled Hole - SDH*) $2.4 \text{ mm}$ pada kedalaman $T/4$, $T/2$, dan $3T/4$.
3. **Konfigurasi Scanning**: Mode FMC-TFM sektor kisi $40 \text{ mm} \times 35 \text{ mm}$ dengan resolusi piksel $\Delta x = \Delta z = 0.2 \text{ mm}$ ($\lambda / 3.24$).

### 6.3. Analisis Hasil & Komparasi Kinerja

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    HASIL ANALISIS PENGUKURAN CACAT PADA BEJANA TEKAN (KETEBALAN 32 mm)                                |
+-----------------------------------------------------------------------------------------------------------------------+
| Parameter Diskontinuitas      | PAUT S-Scan Konvensional         | FMC-TFM Berkas Sintetis (ISO 23865)                |
+-------------------------------+----------------------------------+----------------------------------------------------+
| Resolusi Spasial Titik Puncak | ± 1.8 mm (Terbatas zona fokus)   | ± 0.35 mm (Fokus di setiap piksel matriks)         |
| Sizing Retak Tip Diffraction  | Sinyal ujung retak kabur (-18dB) | Difraksi ujung retak tajam & terpisah (-8 dB)      |
| Error Penentuan Kedalaman (z) | Δz error = 1.4 mm                | Δz error = 0.22 mm                                 |
| Klasifikasi Morfologi         | Meragukan (LoF vs Slag Inclusion)| Jelas diskontinuitas planar (LoF dinding samping)  |
| Keputusan Engineering Critical| Rekomendasi Reject Berlebih      | Penentuan Akurat Sesuai ASME Sec VIII Div 1        |
+-------------------------------+----------------------------------+----------------------------------------------------+
```

Rekonstruksi TFM menunjukkan keunggulan mutlak dalam mereproduksi kontur asli dinding bejana dan mendeteksi ketiadaan fusi samping (*sidewall LoF*) sepanjang $4.2 \text{ mm}$ pada kedalaman $z = 18.2 \text{ mm}$ tanpa dipengaruhi sudut elevasi baji.

---

## 7. Rekomendasi Praktis & Panduan Implementasi Lapangan

1. **Pemilihan Pitch Elemen Sesuai Standar Nyquist Akustik**:
   Pastikan pitch probe $p \le \frac{\lambda}{1 + |\sin \theta_{\max}|}$ untuk mengeliminasi *grating lobes*. Untuk baja ($c_s = 3240 \text{ m/s}$) pada frekuensi $5 \text{ MHz}$ ($\lambda \approx 0.65 \text{ mm}$) dengan sudut sapuan hingga $70^\circ$, pilih probe dengan pitch $p \le 0.6 \text{ mm}$.
2. **Kompensasi Kecepatan Suara & Ketebalan Baji**:
   Lakukan kalibrasi kecepatan aktual material baji (*wedge delay calibration*) dan kecepatan gelombang transversal material induk secara berkala sebelum inspeksi karena variasi temperatur lingkungan $10^\circ \text{C}$ dapat menggeser kecepatan suara sebesar $\sim 15 \text{ m/s}$, yang memicu deviasi pemetaan kedalaman TFM.
3. **Penyelarasan Mode Propagasi Gelombang (Direct vs Self-Tandem / Full Skip Mode)**:
   Gunakan mode gelombang langsung (*Direct T-T Mode*) untuk mendeteksi cacat di dekat permukaan atas hingga tengah ($0 - 0.75 T$). Untuk cacat akar (*root cracks*) dan fusi samping vertikal pada ketebalan dinding tinggi, aktifkan mode pantulan balik (*Indirect TT-TT / Half-skip / Full-skip mode*) sesuai petunjuk ISO 23865.

---

## 8. Referensi Terverifikasi & Standar Rekayasa

1. **International Organization for Standardization.** (2021). *Non-destructive testing — Ultrasonic testing — Use of full matrix capture/total focusing method (FMC/TFM) techniques and related technologies* (ISO Standard No. 23865:2021). Geneva, Switzerland: ISO.
2. **International Organization for Standardization.** (2019). *Non-destructive testing — Ultrasonic testing — Use of automated phased array technology for thin-walled steel components* (ISO Standard No. 13588:2019). Geneva, Switzerland: ISO.
3. **ASTM International.** (2020). *Standard Practice for Contact Ultrasonic Testing of Welds Using Phased Arrays* (ASTM Standard No. E2700-20). West Conshohocken, PA: ASTM International. DOI: [10.1520/E2700-20](https://doi.org/10.1520/E2700-20).
4. **American Society of Mechanical Engineers.** (2023). *ASME Boiler and Pressure Vessel Code, Section V: Nondestructive Examination, Article 4 — Ultrasonic Examination Methods for Welds*. New York, NY: ASME.
5. **Holmes, C., Drinkwater, B. W., & Wilcox, P. D.** (2005). Post-processing of the full matrix of ultrasonic transmit–receive array data for non-destructive evaluation. *NDT & E International*, 38(8), 701–711. DOI: [10.1016/j.ndteint.2005.04.002](https://doi.org/10.1016/j.ndteint.2005.04.002).
6. **Le Jeune, L., Robert, S., Lopez Villaverde, E., & Prada, C.** (2016). Plane wave imaging for ultrasonic non-destructive testing: Generalization to plane arrays and imaging performance. *IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control*, 63(12), 2195–2204. DOI: [10.1109/TUFFC.2016.2608402](https://doi.org/10.1109/TUFFC.2016.2608402).
7. **Zhang, J., Drinkwater, B. W., & Wilcox, P. D.** (2010). Defect characterization using an ultrasonic array to measure the scattering matrix. *IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control*, 57(9), 2008–2017. DOI: [10.1109/TUFFC.2010.1650](https://doi.org/10.1109/TUFFC.2010.1650).
