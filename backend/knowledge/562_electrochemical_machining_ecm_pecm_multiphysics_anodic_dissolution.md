# Modul 562: Electrochemical Machining (ECM) & Pulsed ECM (PECM): Pemodelan Multi-Fisika Celah Inter-Elektroda (Inter-Electrode Gap Multiphysics), Kinetika Pelarutan Anodik Faraday (Faraday Anodic Dissolution), Dinamika Aliran Elektrolit Turbulen, dan Optimasi Bentuk Katoda Pahat (Cathode Tool Shape Inversion)

## 1. Pengantar & Urgensi Pemesinan Non-Konvensional Elektrokimia (ECM & PECM)

Dalam lanskap manufaktur presisi modern, pemesinan material berkekuatan ultra-tinggi (*ultra-high strength*), superalloy berbasis nikel dan titanium (*Inconel 718, Ti-6Al-4V, Haynes 282*), karbida sementit (*tungsten carbide*), serta bilah turbin bergeometri kompleks (*aero-engine blisk & turbine blades*) menimbulkan batasan fisik yang parah bagi proses permesinan konvensional (milling, turning, grinding). Gaya potong yang masif, keausan pahat yang sangat cepat (*rapid tool wear*), pembentukan lapisan tegangan sisa tarik (*residual tensile stress*), dan zona terpengaruh panas (*Heat Affected Zone* / HAZ) menjadi kendala utama dalam memenuhi standar integritas permukaan kedirgantaraan (*aerospace-grade surface integrity*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PERBANDINGAN PARADIGMA PEMESINAN TINGKAT LANJUT                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Pemesinan Mekanis Konvensional (High-Speed Milling/Turning):                                                     |
|     - Mekanisme: Pembentukan tatal melalui deformasi plastis geser mekanik kontak langsung pahat-benda kerja.         |
|     - Keterbatasan: Keausan pahat masif pada material keras (> 45 HRC), distorsi termal, tegangan sisa tarik mikro.  |
|                                                                                                                       |
|  2. Electrical Discharge Machining (EDM):                                                                             |
|     - Mekanisme: Pelelehan dan penguapan termal material melalui loncatan bunga api listrik frekuensi tinggi.          |
|     - Keterbatasan: Menghasilkan lapisan beku ulang (*recast layer* / *white layer*), retak mikro (micro-cracks),     |
|       dan penurunan umur lelah (*fatigue life*) komponen kritis.                                                     |
|                                                                                                                       |
|  3. Electrochemical Machining (ECM & Pulsed ECM):                                                                     |
|     - Mekanisme: Pelarutan anodik atomik material secara elektrolisis berdasarkan Hukum Faraday tanpa kontak mekanis.  |
|     - Keunggulan Mutlak:                                                                                              |
|       * Laju pembuangan material (*Material Removal Rate* / MRR) TIDAK BERGANTUNG pada kekerasan material.           |
|       * Keausan pahat secara teoritis NOL (Tool Wear = 0) karena pahat berfungsi sebagai katoda terlindungi.          |
|       * BEBAS TEGANGAN SISA (Zero Residual Stress) & BEBAS LAPISAN BEKU ULANG (No Recast Layer / No HAZ).             |
|       * Integritas permukaan cermin (*mirror-finish* Ra < 0.05 um) dan akurasi sub-mikron dengan Pulsed ECM (PECM).  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Pemesinan Elektrokimia (*Electrochemical Machining* / ECM) dan varian mutakhirnya *Pulsed Electrochemical Machining* (PECM) bekerja dengan mengalirkan arus listrik searah (DC) atau pulsa gelombang mikro berdensitas tinggi ($J = 10 \text{ hingga } 150 \text{ A/cm}^2$) melalui celah antar-elektroda sempit (*inter-electrode gap* / IEG, $h = 0.05 \text{ hingga } 0.5 \text{ mm}$) yang dialiri larutan elektrolit berkecepatan tinggi ($v_{\text{fluid}} = 10 \text{ hingga } 50 \text{ m/s}$).

---

## 2. Taksonomi Sistem & Fenomena Multi-Fisika Celah Inter-Elektroda (IEG)

Celah antar-elektroda (IEG) merupakan sistem multi-fisika terkoneksi kuat (*strongly coupled multiphysics domain*) yang melibatkan empat disiplin ilmu fisika-teknik secara simultan:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                     COUPLING MULTI-FISIKA PADA CELAH ELEKTROKIMIA (IEG)                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     ┌────────────────────────┐                             ┌────────────────────────┐                                 |
|     │      MEDAN LISTRIK     │◄────── Konsentrasi Ion ─────┤   TRANSPORT REAKSI     │                                 |
|     │    (Laplace Potential) │                             │   & SPESIES KIMIA      │                                 |
|     │  ∇ · (σ ∇φ) = 0        │────── Densitas Arus J ─────►│   (Nernst-Planck)      │                                 |
|     └───────────┬────────────┘                             └───────────┬────────────┘                                 |
|                 │                                                      │                                              |
|            Panas Joule                                            Flushing Sludge                                     |
|             (J² / σ)                                              & Gelembung H₂                                      |
|                 │                                                      │                                              |
|                 ▼                                                      ▼                                              |
|     ┌────────────────────────┐                             ┌────────────────────────┐                                 |
|     │     MEDAN TERMAL       │                             │  DINAMIKA FLUIDA (CFD) │                                 |
|     │   (Konduksi-Konveksi)  │◄─── Kecepatan Aliran u ─────┤    (Navier-Stokes)     │                                 |
|     │  ρ Cp u·∇T = ∇·(k∇T)+q │────── Viskositas/Suhu ─────►│   k-ε Turbulence Model │                                 |
|     └────────────────────────┘                             └────────────────────────┘                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Elektro-Kinetika & Medan Potensial Listrik**: Distribusi potensial listrik $\varphi$ dalam domain elektrolit diatur oleh persamaan Laplace terkoreksi konduktivitas lokal $\sigma(T, \beta)$, di mana $\beta$ adalah fraksi volumetrik gas hidrogen hasil reaksi katodik.
2. **Dinamika Fluida Elektrolit (Turbulent CFD)**: Aliran elektrolit (misal aqueous $\text{NaNO}_3$ atau $\text{NaCl}$) harus berkecepatan tinggi dan turbulen ($Re > 4000$) untuk membilas produk samping elektrolisis (*sludge* hidroksida logam $\text{Fe(OH)}_2$, $\text{Cr(OH)}_3$) dan gelembung gas hidrogen ($\text{H}_2$) keluar dari celah.
3. **Pembangkitan & Perpindahan Panas Joule**: Densitas arus tinggi membangkitkan disipasi panas Joule ($q_{\text{Joule}} = \frac{J^2}{\sigma}$), menaikkan temperatur elektrolit sepanjang lintasan aliran dari inlet ke outlet, yang secara signifikan mengubah konduktivitas listrik larutan.
4. **Kinetika Pembubaran Anodik (Workpiece Dissolution Front)**: Laju pergerakan batas anoda (benda kerja) ditentukan oleh hukum Faraday yang dimodifikasi dengan efisiensi arus anodik $\eta(J)$.

---

## 3. Landasan Teori & Formulasi Matematis Formal

### 3.1. Hukum Elektrolisis Faraday & Laju Penghilangan Material (MRR)

Massa material anoda yang terlarut $m$ berbanding lurus dengan muatan listrik total $Q = I \cdot t$ yang melewati sel elektrolisis:

$$ m = \frac{M_{\text{eq}}}{z \cdot F} \cdot \eta \cdot I \cdot t $$

di mana:
- $M_{\text{eq}}$: Massa molar rata-rata atau berat atom ekuivalen paduan ($g/\text{mol}$).
- $z$: Valensi pelarutan efektif kation logam (elektron yang ditransfer per atom terlarut).
- $F$: Konstanta Faraday ($F \approx 96.485,33 \text{ C/mol} = \text{A}\cdot\text{s/mol}$).
- $\eta$: Efisiensi arus anodik ($0 \le \eta \le 1.0$).
- $I$: Arus elektrolisis total ($\text{A}$).
- $t$: Durasi waktu pemesinan ($\text{s}$).

Laju pembuangan material volumetrik teoritis ($\text{MRR}_v$) dan laju pelarutan linier permukaan anoda ($v_a = \frac{dh_a}{dt}$) dirumuskan sebagai:

$$ \text{MRR}_v = \frac{m}{\rho_m \cdot t} = \frac{\eta \cdot M_{\text{eq}}}{\rho_m \cdot z \cdot F} \cdot I $$

$$ v_a = \frac{J \cdot \eta \cdot M_{\text{eq}}}{\rho_m \cdot z \cdot F} = \omega \cdot J $$

di mana $\rho_m$ adalah massa jenis paduan benda kerja ($\text{g/cm}^3$), $\omega = \frac{\eta M_{\text{eq}}}{\rho_m z F}$ adalah koefisien pembuangan volumetrik elektrokimia spesifik ($\text{mm}^3 / (\text{A}\cdot\text{min})$ atau $\text{m}^3/(\text{A}\cdot\text{s})$), dan $J$ adalah densitas arus lokal ($\text{A/m}^2$).

### 3.2. Penentuan Valensi & Berat Ekuivalen Multi-Elemen Paduan Superalloy

Untuk superalloy nikel beraneka unsur (seperti Inconel 718 yang mengandung $\text{Ni, Cr, Fe, Nb, Mo, Ti, Al}$), berat ekuivalen elektrokimia $M_{\text{eq}}$ dihitung berdasarkan fraksi massa unsur $w_i$ dan keadaan valensi operasional $z_i$:

$$ \frac{z_{\text{eff}}}{M_{\text{eq}}} = \sum_{i=1}^{N} \frac{w_i \cdot z_i}{M_i} $$

$$ M_{\text{eq, alloy}} = \frac{1}{\sum_{i=1}^N \frac{w_i \cdot z_i}{M_i}} \cdot z_{\text{eff}} $$

| Elemen Paduan | Simbol | Fraksi Massa Nominal $w_i$ | Massa Atom $M_i$ (g/mol) | Valensi Pelarutan ECM $z_i$ | Reaksi Pelarutan Anodik Utama |
|---|---|---|---|---|---|
| Nikel | Ni | 0.525 | 58.69 | +2 | $\text{Ni} \to \text{Ni}^{2+} + 2e^-$ |
| Kromium | Cr | 0.190 | 52.00 | +6 (transpasif) | $\text{Cr} + 4\text{H}_2\text{O} \to \text{CrO}_4^{2-} + 8\text{H}^+ + 6e^-$ |
| Besi | Fe | 0.185 | 55.85 | +2 / +3 | $\text{Fe} \to \text{Fe}^{2+} + 2e^-$ |
| Niobium | Nb | 0.051 | 92.91 | +5 | $\text{Nb} + 5\text{OH}^- \to \text{NbO}_2.5 + 2.5\text{H}_2\text{O} + 5e^-$ |
| Molibdenum | Mo | 0.030 | 95.95 | +6 | $\text{Mo} + 4\text{H}_2\text{O} \to \text{MoO}_4^{2-} + 8\text{H}^+ + 6e^-$ |
| Titanium | Ti | 0.009 | 47.87 | +4 | $\text{Ti} \to \text{Ti}^{4+} + 4e^-$ |
| Aluminium | Al | 0.005 | 26.98 | +3 | $\text{Al} \to \text{Al}^{3+} + 3e^-$ |

### 3.3. Dinamika Keseimbangan Celah Inter-Elektroda (Equilibrium Working Gap $h_{\text{eq}}$)

Dalam proses ECM kontinu dengan katoda yang bergerak maju ke arah anoda pada laju pemakanan konstan $v_f$ ($\text{mm/s}$ atau $\text{m/s}$):

$$ \frac{dh}{dt} = v_a - v_f = \omega \cdot J(h) - v_f $$

Berdasarkan Hukum Ohm pada celah inter-elektroda 1D dengan tegangan terpasang $U$ dan drop tegangan lebih pada elektroda (*overpotential*) $\Delta U_{\text{ov}} = U_{\text{anode}} + U_{\text{cathode}}$:

$$ J(h) = \frac{\sigma \cdot (U - \Delta U_{\text{ov}})}{h} $$

Maka persamaan diferensial dinamika celah adalah:

$$ \frac{dh}{dt} = \frac{\omega \cdot \sigma \cdot (U - \Delta U_{\text{ov}})}{h} - v_f $$

Pada kondisi tunak (*steady-state equilibrium*), laju pelarutan anoda tepat menyeimbangi laju pemakanan katoda ($\frac{dh}{dt} = 0$), sehingga diperoleh **Celah Keseimbangan Teoritis ($h_{\text{eq}}$)**:

$$ h_{\text{eq}} = \frac{\omega \cdot \sigma \cdot (U - \Delta U_{\text{ov}})}{v_f} $$

```
Dinamika Konvergensi Celah IEG:
      h(t)
       ^
       │  h(0) > h_eq (Celah Awal Terlalu Besar)
       │  \
       │   \______
       │          ───────------------------ h_eq (Celah Keseimbangan Mantap)
       │   /‾‾‾‾‾‾
       │  /
       │  h(0) < h_eq (Celah Awal Terlalu Sempit)
       └────────────────────────────────────────> Waktu t (s)
```

Solusi analitis transien dari persamaan diferensial di atas untuk nilai awal celah $h_0$ pada $t=0$:

$$ t = \frac{1}{v_f} \left[ (h_0 - h) + h_{\text{eq}} \ln\left( \frac{h_0 - h_{\text{eq}}}{h - h_{\text{eq}}} \right) \right] $$

Hal ini membuktikan stabilitas bawaan (*inherent self-regulating stability*) dari proses ECM: deviasi celah akan meluruh secara eksponensial menuju $h_{\text{eq}}$.

### 3.4. Efek Kopling Termal & Fraksi Rongga Gas (Void Fraction) pada Konduktivitas Elektrolit

Konduktivitas spesifik elektrolit $\sigma(x)$ di sepanjang lintasan aliran celah dari posisi inlet $x=0$ ke outlet $x=L$ dipengaruhi oleh dua fenomena yang saling berlawanan:
1. **Pemanasan Joule**: Menaikkan konduktivitas seiring kenaikan temperatur ($\sim +2\% / ^\circ\text{C}$).
2. **Evolusi Gelembung Gas Hidrogen**: Menurunkan konduktivitas efektif akibat bertambahnya volume isolator gas.

Model konduktivitas termal larutan elektrolit:

$$ \sigma_T(x) = \sigma_0 \cdot \left[ 1 + \alpha_T \cdot (T(x) - T_0) \right] $$

di mana $\alpha_T \approx 0.018 - 0.025 \text{ K}^{-1}$ adalah koefisien temperatur konduktivitas elektrolit.

Kenaikan temperatur fluida sepanjang arah aliran $x$:

$$ \frac{dT(x)}{dx} = \frac{J(x)^2}{\sigma(x) \cdot \rho_e \cdot C_p \cdot u(x)} = \frac{U_{\text{eff}}^2 \cdot \sigma(x)}{h(x)^2 \cdot \rho_e \cdot C_p \cdot u} $$

Model fraksi volumetrik gas hidrogen $\beta(x)$ menggunakan model Bruggeman atau Maxwell-Rayleigh untuk konduktivitas efektif campuran dua fasa (cair-gas):

$$ \sigma_{\text{eff}}(x) = \sigma_T(x) \cdot (1 - \beta(x))^{1.5} \quad \text{(Bruggeman Formulation)} $$

Laju akumulasi fraksi volume hidrogen $\beta(x)$ dari reaksi katoda $2\text{H}^+ + 2e^- \to \text{H}_2 \uparrow$:

$$ \beta(x) = \frac{\dot{V}_{\text{gas}}(x)}{\dot{V}_{\text{gas}}(x) + \dot{V}_{\text{liquid}}} = \frac{\int_0^x \frac{J(\xi) \cdot R_{\text{gas}} \cdot T(\xi)}{2 \cdot F \cdot P(\xi)} d\xi}{u \cdot h(x) + \int_0^x \frac{J(\xi) \cdot R_{\text{gas}} \cdot T(\xi)}{2 \cdot F \cdot P(\xi)} d\xi} $$

---

## 4. Pulsed Electrochemical Machining (PECM) & Modulasi Frekuensi

Untuk mengatasi keterbatasan akurasi ECM konvensional akibat ekspansi celah liar (*stray current corrosion*) dan akumulasi panas, **Pulsed ECM (PECM)** menerapkan pulsa tegangan frekuensi tinggi yang disinkronisasikan dengan osilasi mekanis mikro katoda.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    SIKLUS KERJA SYNCHRONIZED PULSED ECM (PECM)                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Posisi Katoda z(t)                                                                                                   |
|     ^                                                                                                                 |
|  z_max│          /\                  /\                  /\                                                           |
|       │         /  \                /  \                /  \         (Osilasi Mekanis Katoda f = 10 - 100 Hz)         |
|  z_min│────────/────\──────────────/────\──────────────/────\─────────                                               |
|       └─────────────────────────────────────────────────────────────> Waktu t                                         |
|                                                                                                                       |
|  Pulsa Tegangan U(t)                                                                                                  |
|     ^                                                                                                                 |
|    U  │        ┌──┐                ┌──┐                ┌──┐                                                           |
|       │        │  │                │  │                │  │          (Pulsa Listrik ON HANYA saat Katoda di z_min)    |
|    0  └────────┴──┴────────────────┴──┴────────────────┴──┴─────────> Waktu t                                         |
|                ◄t_on►                                                                                                 |
|                ◄─────── T_period ───────►                                                                             |
|                                                                                                                       |
|  Fase 1 (z_min, Pulse ON): IEG minimum (h = 10 - 30 um), pembubaran material presisi ultra-tinggi terlokalisasi.     |
|  Fase 2 (z_max, Pulse OFF): IEG melebar (h > 200 um), pembilasan hidrolik elektrolit segar & pembuangan sludge/gas.  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Parameter kunci PECM:
- **Duty Cycle ($\delta$)**: $\delta = \frac{t_{\text{on}}}{T_{\text{period}}} = t_{\text{on}} \cdot f_{\text{pulse}}$ (tipikal $5\% - 30\%$).
- **Peak Current Density ($J_{\text{peak}}$)**: Mencapai $50 - 200 \text{ A/cm}^2$ saat $t_{\text{on}}$.
- **Effective Material Removal Rate**: $\text{MRR}_{\text{PECM}} = \delta \cdot \omega \cdot J_{\text{peak}}$.
- **Resolusi Celah Ekstrem**: Mampu mempertahankan celah kerja stabil pada $10 - 25 \ \mu\text{m}$, menghasilkan toleransi geometris benda kerja $\pm 2 - 5 \ \mu\text{m}$.

---

## 5. Algoritma Optimasi & Pemodelan Rekayasa Bentuk Katoda (Cathode Shape Inversion)

Tantangan fundamental manufaktur ECM adalah masalah inversi bentuk (*Inverse Boundary Problem*): menentukan bentuk permukaan perkakas katoda $S_c(x,y)$ yang menghasilkan bentuk target anoda benda kerja $S_a(x,y)$ setelah mencapai kondisi tunak.

```
Algoritma Inversi Profil Katoda ECM:
1. Inisialisasi: Bentuk katoda awal diasumsikan cermin negatif target anoda S_c^(0)(x) = -S_a_target(x).
2. Diskretisasi Batas: Mesh 2D/3D pada antarmuka celah anoda-elektrolit-katoda.
3. FEM/BEM Solver: Hitung distribusi potensial Laplace ∇·(σ ∇φ) = 0 dan medan rapat arus J_n(x).
4. Prediksi Erosi: Hitung laju pembubaran anoda lokal v_a(x) = ω · J_n(x).
5. Error Residual: Bandingkan profil kecepatan anoda terhadap vektor translasi pemakanan v_f:
   ε(x) = |v_a(x) · n_a - v_f · n_z|.
6. Update Batas Katoda:
   S_c^(k+1)(x) = S_c^(k)(x) + α · (v_a^(k)(x) - v_f_target) · Δt
7. Periksa Konvergensi: Jika max|ε(x)| < Tol, SELESAI; jika tidak, ulangi langkah 3.
```

---

## 6. Implementasi Pemrograman & Solver Multi-Fisika ECM (Python)

Berikut adalah skrip Python numerik komprehensif untuk simulasi kopling elektro-termo-hidrodinamika celah inter-elektroda ECM, dinamika transien celah, profil konduktivitas sepanjang celah, dan kalkulasi perancangan bentuk elektroda.

```python
"""
RuangTI Engineering Knowledge Base - Module 562
Electrochemical Machining (ECM & PECM) Multiphysics Inter-Electrode Gap Solver
"""

import numpy as np
import matplotlib.pyplot as plt
from dataclasses import dataclass
from typing import Dict, Tuple, List

@dataclass
class ECMParameters:
    # Parameter Material Anoda (Inconel 718 Superalloy)
    alloy_name: str = "Inconel 718"
    density_anode: float = 8.19  # g/cm^3
    faraday_const: float = 96485.33  # C/mol (A*s/mol)
    elements: Dict[str, Tuple[float, float, int]] = None  # name: (mass_fraction, molar_mass, valence)
    
    # Parameter Proses Elektrolisis
    voltage: float = 18.0  # V (Applied Potential)
    overpotential: float = 2.5  # V (Anode + Cathode overpotentials)
    feed_rate: float = 1.2  # mm/min (Cathode feed rate)
    
    # Parameter Elektrolit (NaNO3 15 wt% Aqueous Solution)
    sigma_0: float = 0.12  # S/mm (Initial electrical conductivity at T0 = 120 mS/cm)
    temp_0: float = 25.0  # deg C (Inlet temperature)
    alpha_temp: float = 0.020  # 1/K (Conductivity temperature coefficient)
    density_electrolyte: float = 1100.0  # kg/m^3
    heat_capacity: float = 3800.0  # J/(kg*K)
    electrolyte_velocity: float = 20.0  # m/s (Inter-electrode flushing speed)
    channel_length: float = 60.0  # mm (Length of machining zone)
    
    # Mode Pulsa (PECM)
    is_pecm: bool = False
    pulse_frequency: float = 50.0  # Hz
    duty_cycle: float = 0.20  # 20% on-time

    def __post_init__(self):
        if self.elements is None:
            # Komposisi Nominal Inconel 718
            self.elements = {
                "Ni": (0.525, 58.69, 2),
                "Cr": (0.190, 52.00, 6),
                "Fe": (0.185, 55.85, 2),
                "Nb": (0.051, 92.91, 5),
                "Mo": (0.030, 95.95, 6),
                "Ti": (0.009, 47.87, 4),
                "Al": (0.010, 26.98, 3),
            }

class ECMMultiphysicsEngine:
    def __init__(self, params: ECMParameters):
        self.p = params
        self.m_eq, self.z_eff, self.volumetric_coeff = self._calc_alloy_properties()
        
    def _calc_alloy_properties(self) -> Tuple[float, float, float]:
        """Menghitung berat ekuivalen rata-rata dan koefisien elektrokimia paduan."""
        sum_term = 0.0
        for el, (w_i, m_i, z_i) in self.p.elements.items():
            sum_term += (w_i * z_i) / m_i
            
        z_eff = 1.0 / sum_term  # Ekuivalen gram per mol elektron
        m_eq = z_eff  # Equivalent mass (g/mol equivalent)
        
        # Koefisien pelarutan volumetrik omega (mm^3 / (A * s))
        # omega = (eta * M_eq) / (rho * z * F)
        # Dengan asumsi efisiensi arus eta = 0.95
        eta = 0.95
        omega_m3_per_As = (eta * (m_eq * 1e-3)) / (self.p.density_anode * 1e3 * 1.0 * self.p.faraday_const)
        omega_mm3_per_As = omega_m3_per_As * 1e9  # mm^3 / (A * s)
        omega_mm3_per_Amin = omega_mm3_per_As * 60.0  # mm^3 / (A * min)
        
        return m_eq, z_eff, omega_mm3_per_As

    def calculate_equilibrium_gap(self, sigma: float = None) -> float:
        """Menghitung celah keseimbangan mantap h_eq (mm)."""
        if sigma is None:
            sigma = self.p.sigma_0
        
        effective_v = self.p.voltage - self.p.overpotential
        v_f_mm_per_s = self.p.feed_rate / 60.0  # konversi mm/min ke mm/s
        
        if self.p.is_pecm:
            # PECM menggunakan peak voltage dan duty cycle
            effective_v_pulse = effective_v
            # Rata-rata pelarutan diskalakan duty cycle
            h_eq = (self.p.duty_cycle * self.volumetric_coeff * sigma * effective_v_pulse) / v_f_mm_per_s
        else:
            # Konvensional ECM
            h_eq = (self.volumetric_coeff * sigma * effective_v) / v_f_mm_per_s
            
        return h_eq

    def simulate_gap_transient(self, h_init: float, t_max: float = 30.0, dt: float = 0.01) -> Dict[str, np.ndarray]:
        """Simulasi diferensial transien celah h(t) dari celah awal hingga kondisi tunak."""
        n_steps = int(t_max / dt)
        time_arr = np.linspace(0, t_max, n_steps)
        h_arr = np.zeros(n_steps)
        j_arr = np.zeros(n_steps)
        
        h_current = h_init
        v_f_s = self.p.feed_rate / 60.0
        eff_v = self.p.voltage - self.p.overpotential
        
        for i, t in enumerate(time_arr):
            h_arr[i] = h_current
            # Rapat arus Ohm
            j_current = (self.p.sigma_0 * eff_v) / (h_current / 10.0)  # A/cm^2 (sigma_0 S/mm = 10 S/cm)
            j_arr[i] = j_current
            
            # Laju pembubaran anoda v_a
            if self.p.is_pecm:
                v_a = self.p.duty_cycle * self.volumetric_coeff * (self.p.sigma_0 * eff_v / h_current)
            else:
                v_a = self.volumetric_coeff * (self.p.sigma_0 * eff_v / h_current)
                
            dh_dt = v_a - v_f_s
            h_current += dh_dt * dt
            
            # Pencegahan short-circuit numerik
            if h_current < 0.005:
                h_current = 0.005
                
        return {"time": time_arr, "gap": h_arr, "current_density": j_arr}

    def solve_1d_channel_multiphysics(self, n_nodes: int = 200) -> Dict[str, np.ndarray]:
        """
        Penyelesaian integrasi 1D sepanjang aliran elektrolit x:
        Kopling kenaikan suhu (panas Joule) dan evolusi hidrogen terhadap konduktivitas sigma(x).
        """
        x = np.linspace(0, self.p.channel_length, n_nodes)  # mm
        dx = x[1] - x[0]  # mm
        dx_m = dx * 1e-3  # m
        
        temp = np.zeros(n_nodes)
        beta_gas = np.zeros(n_nodes)
        sigma = np.zeros(n_nodes)
        gap = np.zeros(n_nodes)
        j_density = np.zeros(n_nodes)  # A/cm^2
        
        temp[0] = self.p.temp_0
        beta_gas[0] = 0.0
        sigma[0] = self.p.sigma_0
        
        u_fluid = self.p.electrolyte_velocity  # m/s
        eff_v = self.p.voltage - self.p.overpotential
        v_f_s = self.p.feed_rate / 60.0  # mm/s
        
        # Tekanan fluida rata-rata 0.5 MPa (5 bar)
        pressure = 5.0e5  # Pa
        r_gas = 8.314  # J/(mol*K)
        
        for i in range(n_nodes):
            # 1. Hitung celah lokal h_eq(x) berdasarkan konduktivitas lokal
            gap[i] = (self.volumetric_coeff * sigma[i] * eff_v) / v_f_s
            h_m = gap[i] * 1e-3  # m
            
            # 2. Rapat arus lokal
            # J = sigma * V / h (A/mm^2) -> konversi ke A/cm^2 (* 100)
            j_local_A_mm2 = (sigma[i] * eff_v) / gap[i]
            j_density[i] = j_local_A_mm2 * 100.0  # A/cm^2
            j_local_A_m2 = j_local_A_mm2 * 1e6  # A/m^2
            
            if i < n_nodes - 1:
                # 3. Kenaikan temperatur akibat Disipasi Panas Joule
                # dT/dx = (J^2 / sigma) / (rho * Cp * u)
                q_joule = (j_local_A_m2**2) / (sigma[i] * 1e3)  # W/m^3
                dt_dx = q_joule / (self.p.density_electrolyte * self.p.heat_capacity * u_fluid)
                temp[i+1] = temp[i] + dt_dx * dx_m
                
                # 4. Akumulasi fraksi volume gas hidrogen beta(x)
                # n_dot_H2 = J / (2 * F) (mol/(m^2*s))
                # v_dot_H2 = n_dot * R * T / P (m^3 gas / (m^2 anoda * s))
                t_kelvin = temp[i] + 273.15
                v_dot_h2_flux = (j_local_A_m2 * r_gas * t_kelvin) / (2.0 * self.p.faraday_const * pressure)
                
                # Fluks volumetrik gas bertambah sepanjang dx
                q_gas_cum = v_dot_h2_flux * dx_m  # m^3/s per lebar unit
                q_liquid = u_fluid * h_m  # m^3/s per lebar unit
                beta_inc = q_gas_cum / (q_liquid + q_gas_cum)
                beta_gas[i+1] = min(beta_gas[i] + beta_inc, 0.45)  # Cap pada 45% void fraction
                
                # 5. Update Konduktivitas Elektrolit Efektif (Model Bruggeman + Termal)
                sigma_t = self.p.sigma_0 * (1.0 + self.p.alpha_temp * (temp[i+1] - self.p.temp_0))
                sigma[i+1] = sigma_t * ((1.0 - beta_gas[i+1])**1.5)
                
        return {
            "x_pos": x,
            "temperature": temp,
            "void_fraction": beta_gas,
            "conductivity": sigma,
            "gap": gap,
            "current_density": j_density
        }

if __name__ == "__main__":
    params_std = ECMParameters()
    solver_std = ECMMultiphysicsEngine(params_std)
    
    print("=" * 75)
    print("      RUANGTI INDUSTRIAL ECM / PECM MULTIPHYSICS ENGINE SOLVER       ")
    print("=" * 75)
    print(f"Material Anoda              : {params_std.alloy_name}")
    print(f"Equivalent Mass (M_eq)      : {solver_std.m_eq:.3f} g/mol eq")
    print(f"Volumetric Coeff (omega)    : {solver_std.volumetric_coeff:.6f} mm^3/(A*s)")
    
    h_eq_initial = solver_std.calculate_equilibrium_gap()
    print(f"Celah Keseimbangan (h_eq)   : {h_eq_initial:.4f} mm ({h_eq_initial*1000:.1f} um)")
    
    # 1. Simulasi Transien
    trans = solver_std.simulate_gap_transient(h_init=0.80, t_max=15.0)
    print(f"\nUji Transien Konvergensi Celah:")
    print(f"  Gap pada t=0.0s  : {trans['gap'][0]:.4f} mm")
    print(f"  Gap pada t=2.0s  : {trans['gap'][int(2.0/0.01)]:.4f} mm")
    print(f"  Gap pada t=10.0s : {trans['gap'][int(10.0/0.01)]:.4f} mm (Mendekati h_eq)")
    
    # 2. Simulasi Kopling 1D Multi-Fisika
    res_1d = solver_std.solve_1d_channel_multiphysics(n_nodes=100)
    print(f"\nProfil Celah Sepanjang Saluran Elektrolit (L = {params_std.channel_length} mm):")
    print(f"  Inlet (x=0mm)   : Suhu={res_1d['temperature'][0]:.2f} C, Void={res_1d['void_fraction'][0]*100:.2f}%, Sigma={res_1d['conductivity'][0]:.4f} S/mm, Gap={res_1d['gap'][0]*1000:.1f} um")
    mid = len(res_1d['x_pos']) // 2
    print(f"  Mid   (x=30mm)  : Suhu={res_1d['temperature'][mid]:.2f} C, Void={res_1d['void_fraction'][mid]*100:.2f}%, Sigma={res_1d['conductivity'][mid]:.4f} S/mm, Gap={res_1d['gap'][mid]*1000:.1f} um")
    print(f"  Outlet(x=60mm)  : Suhu={res_1d['temperature'][-1]:.2f} C, Void={res_1d['void_fraction'][-1]*100:.2f}%, Sigma={res_1d['conductivity'][-1]:.4f} S/mm, Gap={res_1d['gap'][-1]*1000:.1f} um")
    print("=" * 75)
```

---

## 7. Studi Kasus Industri: Pembuatan Blisk Bilah Turbin Inconel 718 Aerospace

### 7.1. Latar Belakang Masalah & Spesifikasi Komponen

Sebuah konsorsium manufaktur mesin jet kedirgantaraan memproduksi *Integrally Bladed Disk* (Blisk) berbahan superalloy Inconel 718 (kekerasan 44 HRC). Pemesinan saluran antar-bilah (*airfoil blade channels*) menggunakan 5-axis CNC high-speed milling mengalami masalah kritis:
- Biaya perkakas potong solid carbide karbida bersalut TiAlN sangat tinggi akibat keausan pahat yang parah (umur pahat hanya 8 menit per bilah).
- Timbul tegangan sisa tarik permukaan sebesar $+380 \text{ MPa}$ pada radius bilah (*blade root fillet*), memerlukan proses peening sekunder yang memicu risiko distorsi geometris bilah tipis (*blade thickness* 1.2 mm).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  SPESIFIKASI PROSES PERANCANGAN BLISK PULSED ECM                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|  Parameter Operasi                  | Nilai Parameter & Satuan                                                        |
+-------------------------------------+---------------------------------------------------------------------------------+
|  Material Komponen                  | Inconel 718 (52.5% Ni, 19% Cr, 18.5% Fe, 5.1% Nb, 3% Mo)                        |
|  Elektrolit                         | Aqueous Sodium Nitrate (NaNO3, konsentrasi 180 g/L, pH 8.2)                    |
|  Laju Alir Elektrolit               | Kecepatan inlet v_fluid = 28 m/s, Tekanan inlet P_in = 1.2 MPa                  |
|  Tegangan Pulsa (PECM Peak)         | U_peak = 20.0 V, Frekuensi osilasi = 40 Hz, Duty Cycle delta = 18%             |
|  Laju Pemakanan Katoda (v_f)        | 0.85 mm/min (translasi simultan 3D profiling)                                   |
|  Kompensasi Katoda Inversi          | Modifikasi sudut katoda sebesar 1.42 deg untuk menyeimbangi gradien konduktivitas|
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.2. Analisis Hasil Penerapan & Evaluasi Kinerja Kualitas

Penerapan sistem Synchronized Pulsed ECM (PECM) multi-axis menghasilkan peningkatan signifikan pada seluruh metrik integritas permukaan dan produktivitas:

```
+------------------------------------+-------------------------+-------------------------+------------------------------+
| Parameter Integritas & Kinerja     | 5-Axis Milling (Lama)   | Synchronized PECM (Baru)| Peningkatan Rekayasa         |
+------------------------------------+-------------------------+-------------------------+------------------------------+
| Waktu Siklus per Bilah             | 42.5 menit              | 8.2 menit               | Efisiensi Waktu 80.7%        |
| Keausan Pahat per 100 Komponen     | US$ 14.800 (Carbide)    | US$ 0 (Zero Tool Wear)  | Penghematan Tooling 100%     |
| Kekasaran Permukaan (Ra)           | 0.85 - 1.20 um          | 0.04 - 0.08 um (Mirror) | Kualitas Permukaan Superior  |
| Tegangan Sisa Permukaan (Fillet)   | +380 MPa (Tarik/Tegang) | -15 MPa (Netral/Aman)   | Zero Tensile Stress          |
| Umur Lelah Komponen (High-Cycle)   | 1.2 x 10^7 siklus       | 4.8 x 10^7 siklus       | Peningkatan Umur Lelah 300%  |
+------------------------------------+-------------------------+-------------------------+------------------------------+
```

---

## 8. Panduan Desain & Rekomendasi Praktis Operasional ECM/PECM

1. **Pemilihan Larutan Elektrolit Bebas Korosi Pasif**:
   - Gunakan $\text{NaNO}_3$ untuk superalloy berbasis nikel dan baja paduan tinggi guna membentuk lapisan pasivasi tipis pada zona celah samping (*side-gap*), yang secara drastis mengurangi arus bocor (*stray dissolution*) dan meningkatkan akurasi dimensi sudut tajam.
   - Hindari $\text{NaCl}$ pada superalloy kedirgantaraan karena ion klorida bersifat agresif dan memicu korosi sumuran (*pitting corrosion*) di area tanpa aliran elektrolit langsung.
2. **Pengendalian Kecepatan dan Keseragaman Aliran Elektrolit**:
   - Pastikan bilangan Reynolds selalu $Re > 5.000$ di sepanjang celah untuk mencegah stagnasi gelembung gas hidrogen. Kantong gas yang terjebak (*gas pockets*) menyebabkan percikan bunga api listrik (*spark breakdown*) yang dapat melubangi permukaan benda kerja dan merusak elektroda katoda.
3. **Penyaringan Sludge Elektrolisis Kontinu**:
   - Integrasikan sistem sentrifugasi multi-tahap dan *filter press membrane* berpori $< 5 \ \mu\text{m}$ untuk mempertahankan konduktivitas larutan elektrolit stabil dalam rentang variasi $\Delta \sigma / \sigma_0 < \pm 1.5\%$.
4. **Sistem Deteksi Percikan Kecepatan Ultra-Tinggi (*Ultra-Fast Spark Quenching*)**:
   - Pasang proteksi sirkuit thyristor berkecepatan respon $< 5 \ \mu\text{s}$ yang memantau laju perubahan tegangan ($dU/dt$) dan arus ($dI/dt$) secara *in-line*. Jika terdeteksi *pre-spark breakdown*, pasokan daya diputus seketika sebelum busur api listrik terbentuk.

---

## 9. Referensi Terverifikasi & Standar Industri

1. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons. — Bab 26: Nontraditional Machining and Thermal Cutting Processes (ECM & PECM Theory).
2. **Rajurkar, K. P., Sundaram, M. M., & Malshe, A. P.** (2013). Review of Electrochemical and Electrodischarge Machining. *Procedia CIRP*, 6, 13–26. https://doi.org/10.1016/j.procir.2013.03.002
3. **Klocke, F., Zeis, M., Klink, A., & Veselovac, D.** (2013). Experimental research on the electrochemical machining of modern titanium- and nickel-based alloys for aero engine components. *Procedia CIRP*, 6, 368–372. https://doi.org/10.1016/j.procir.2013.03.061
4. **Bhattacharyya, B.** (2015). *Electrochemical Micromachining for Nanofabrication, MEMS and Nanotechnology*. Elsevier Science & Technology. ISBN: 9780323340007.
5. **ISO 23125 / DIN 8580**: Manufacturing Processes - Terms and Definitions, Division of Non-Thermal Chemical and Electrochemical Removal Processes.
6. **ASTM B912-02(2018)**: Standard Specification for Passivation of Stainless Steels Using Electropolishing and Electrochemical Techniques.
7. **Zhang, Z., Zhu, D., & Qu, N.** (2025). Anodic dissolution behavior and microstructure preparation of nickel-based superalloys in pulsed electrochemical machining. *Journal of Materials Processing Technology*, 332, 118542. https://doi.org/10.1016/j.jmatprotec.2025.118542.
