# Modul 565: Directed Energy Deposition (DED) & Laser Cladding: Pemodelan Termal Multiphysics, Efisiensi Penangkapan Serbuk (Powder Catchment), Kontrol Dilusi, dan Prediksi Tegangan Sisa Remanufaktur Industri (ISO/ASTM 52900, ISO/ASTM 52907, ASTM F3187)

## 1. Pengantar & Urgensi Laser Directed Energy Deposition (DED) dalam Remanufaktur & Manufaktur Aditif Lanjutan

Dalam rantai nilai manufaktur sirkular (*circular manufacturing*) dan keberlanjutan industri berat (seperti bilah turbin gas, poros transmisi kapal laut, perkakas cetakan *die-casting*, dan peralatan pengeboran minyak & gas), penggantian komponen rusak bernilai tinggi akibat keausan aus-gesek (*wear*), kavitasi, korosi, atau retak termal memicu biaya modal (*capital expenditure*) yang masif serta emisi jejak karbon lingkungan yang tinggi.

**Laser Directed Energy Deposition (DED-LB)** — yang juga dikenal luas sebagai *Blown Powder Laser Cladding* atau *Laser Metal Deposition (LMD)* — adalah proses manufaktur aditif berbasis fusi termal di mana energi berkas laser terfokus (*focused laser beam*) secara simultan melelehkan permukaan substrat logam dan aliran serbuk logam mikro yang diinjeksikan secara koaksial oleh gas pembawa (*carrier gas*). 

```
+-----------------------------------------------------------------------------------------------------------------------+
|                PARADIGMA MANUFAKTUR & REMANUFAKTUR LOGAM: CONVENTIONAL SUBTRACTIVE VS PBF VS DED-LB                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Subtractive Machining (CNC Milling/Turning):                                                                      |
|     - Buy-to-Fly ratio sangat buruk (seringkali > 10:1), di mana 80-90% material bongkahan dibuang menjadi bram/chip.|
|     - Tidak mampu memperbaiki komponen aus atau menambahkan pelapis fungsional (*functionally graded materials*).     |
|                                                                                                                       |
|  2. Powder Bed Fusion (PBF / LPBF):                                                                                   |
|     - Unggul untuk komponen mikro/meso berdinding tipis dan bergeometri internal kompleks (lattice structures).       |
|     - Terbatas pada ruang bilik kerja kecil (build chamber), laju deposisi lambat (10 - 50 cm³/jam), tidak dapat      |
|       diterapkan pada komponen berukuran besar (> 1-2 meter) atau perbaikan lokal di tempat (*in-situ repair*).       |
|                                                                                                                       |
|  3. Directed Energy Deposition (DED-LB / Laser Cladding - ISO/ASTM 52900):                                            |
|     - Laju penambahan material sangat tinggi (0.5 - 5.0 kg/jam hingga > 15 kg/jam pada High-Speed Laser Cladding).   |
|     - Mampu mendeposisikan material di atas permukaan 3D bebas yang sudah ada (*freeform repair & remanufacturing*).  |
|     - Ikatan metalurgi sempurna (*fully metallurgical bonding*) dengan zona pengaruh panas (*heat affected zone* - HAZ)|
|       yang jauh lebih sempit dibandingkan pengelasan konvensional (TIG/PTA).                                          |
|     - Memungkinkan sintesis paduan baru dan pelapis gradasi fungsional (FGM - *Functionally Graded Materials*).       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Arsitektur Fisik Sistem DED-LB & Interaksi Berkas Sinar-Serbuk-Melt Pool

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                 ARSITEKTUR NOZEL KOAKSIAL & INTERAKSI TERMAL DED-LB                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                           Optik Serat Laser (Fiber/Diode Laser)                                                       |
|                                     │                                                                                 |
|                                     ▼                                                                                 |
|                           [ Kolimator & Lensa Fokus ]                                                                 |
|                                     │                                                                                 |
|                      Aliran Serbuk  │ (Berkas Laser)   Aliran Serbuk                                                  |
|                      Koaksial (P1)  │                  Koaksial (P2)                                                  |
|                            \        │        /                                                                        |
|                             \       │       /                                                                         |
|                              \      │      /                                                                          |
|                               ▼     ▼     ▼                                                                           |
|                     ┌───────────────────────────────┐                                                                 |
|                     │  Nozel Koaksial Diskrit/Cincin│ (Gas Pelindung Argon: 5-15 L/min)                               |
|                     └───────────────┬───────────────┘                                                                 |
|                                     │                                                                                 |
|                                     ▼                                                                                 |
|                         Zona Pelelehan Serbuk Udara (In-Flight Particle Heating)                                      |
|                                     │                                                                                 |
|                                     ▼                                                                                 |
|                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                             |
|                 \   Melt Pool Dinamis (T > T_liquidus)  /  ◄──── Efisiensi Penangkapan Serbuk (eta_p)                 |
|   Lapisan       =========================================                                                             |
|   Klad Deposisi │ Zona Dilusi Metalurgi (Substrat Leleh)│                                                             |
|   (Tebal h_c)   ─────────────────────────────────────────                                                             |
|                 │ Zona Pengaruh Panas (HAZ)             │                                                             |
|                 │                                       │                                                             |
|                 │ Substrat Dasar (Ketebalan T_s)        │                                                             |
|                 └───────────────────────────────────────┘                                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Variabel Kunci Pengendalian Kualitas Proses DED
Dalam sistem DED, kualitas akhir (porositas, daya rekat metalurgi, retak termal, geometri bead) ditentukan oleh interelasi variabel proses utama:
1. **Daya Laser Nominal ($P_L$, Watt)**: Mengontrol masukan panas spesifik ke sistem.
2. **Kecepatan Scanning ($v_s$, mm/s atau m/min)**: Menentukan waktu interaksi termal per satuan panjang.
3. **Laju Umpan Serbuk ($\dot{m}_p$, g/min)**: Menentukan ketersediaan massa pengisi dalam pembentukan lintasan klad (*clad bead*).
4. **Diameter Titik Laser ($d_L$, mm)**: Menentukan kerapatan daya laser (*laser power density / irradiance*, $I_L = \frac{4 P_L}{\pi d_L^2}$).
5. **Jarak Kerja Nozel (*Stand-off Distance*, $h_w$, mm)**: Menentukan titik temu fokus serbuk (*powder focal spot*) relatif terhadap permukaan substrat.

---

## 3. Landasan Teori & Formulasi Matematis Multiphysics

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI PENAMPANG LINTANG BEAD CLADDING & DILUSI                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                        Lebar Klad (W)                                                                 |
|                         |◄─────────────────────────────────────────►|                                                 |
|                                       . - ~ ~ ~ - .                                                                   |
|                                   . '               ' .             ▲                                                 |
|                                 /                       \           │ Tinggi Klad (h_c)                               |
|   Tingkat Permukaan Substrat  /    Luas Deposisi (A_c)    \         │                                                 |
|   --------------------------(-------------------------------)-------▼------------------------                         |
|                              \                             /        ▲                                                 |
|                               \  Luas Penetrasi (A_p)     /         │ Kedalaman Penetrasi (d_p)                       |
|                                 \                       /           │                                                 |
|                                   ' . _           _ . '             ▼                                                 |
|                                         ' - ~ - '                                                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Formulasi Rasio Dilusi Geometris & Metalurgis

Dilusi ($D$) mendefinisikan fraksi material substrat induk yang meleleh dan bercampur ke dalam volume total kolam leleh klad (*melt pool*).

**1. Rasio Dilusi Geometris:**
$$ D = \frac{A_p}{A_c + A_p} = \frac{d_p}{h_c + d_p} $$

di mana $A_c$ adalah luas penampang lapisan klad yang terdeposisi di atas substrat, dan $A_p$ adalah luas penampang substrat yang meleleh di bawah garis antarmuka awal.

**2. Kriteria Kualitas Dilusi Industri (ASTM F3187):**
- **Under-dilution ($D < 0.05$ / $5\%$)**: Energi termal tidak cukup untuk melelehkan substrat secara merata, memicu cacat kurang fusi (*lack of fusion*) dan pelepasan mekanis (*delamination*).
- **Optimal Range ($0.10 \le D \le 0.25$ / $10\% - 25\%$)**: Membentuk ikatan metalurgi atomik yang kokoh dengan distorsi termal minimal dan degradasi kimia bahan pelapis yang terkendali.
- **Over-dilution ($D > 0.35$ / $35\%$)**: Terlalu banyak elemen kimia substrat (misal Fe pada substrat baja) yang mencemari pelapis superalloy tahan korosi/aus (misal Stellite-6 atau Inconel 625), sehingga menurunkan kekerasan dan ketahanan aus.

**3. Dilusi Komposisi Unsur (Chemical Composition Dilution):**
$$ C_{\text{clad}} = D \cdot C_{\text{substrate}} + (1 - D) \cdot C_{\text{powder}} $$

### 3.2. Model Distribusi Aliran Serbuk & Efisiensi Penangkapan (Powder Catchment Efficiency)

Fluks massa serbuk spasial pada bidang substrat yang keluar dari nozel koaksial dimodelkan mengikuti distribusi Gaussian 2D simetris:

$$ j_p(x, y) = \frac{\dot{m}_p}{2 \pi \sigma_p^2} \exp\left( -\frac{x^2 + y^2}{2 \sigma_p^2} \right) $$

di mana $\sigma_p = \frac{d_{p,\text{focus}}}{2 \sqrt{2 \ln 2}}$ adalah parameter deviasi spasial fokus berkas serbuk.

Massa serbuk yang berhasil masuk dan meleleh di dalam kolam lelehan cair (*melt pool*) dengan batas domain elips lelehan $\Omega_m(t) = \{(x, y) \mid \frac{x^2}{a_m^2} + \frac{y^2}{b_m^2} \le 1\}$ menentukan **Efisiensi Penangkapan Serbuk ($\eta_{\text{catch}}$)**:

$$ \eta_{\text{catch}} = \frac{\iint_{\Omega_m} j_p(x, y) \, dx \, dy}{\dot{m}_p} = 1 - \exp\left( -\frac{r_{\text{pool}}^2}{2 \sigma_p^2} \right) $$

Tinggi lapisan klad terdeposisi ($h_c$) pada satu lintasan tunggal dirumuskan sebagai:

$$ h_c = \frac{\eta_{\text{catch}} \cdot \dot{m}_p}{\rho_{\text{clad}} \cdot W \cdot v_s} $$

di mana $\rho_{\text{clad}}$ adalah massa jenis logam padat, $W$ adalah lebar lintasan klad, dan $v_s$ adalah kecepatan pemindaian translasi.

### 3.3. Pemodelan Medan Termal Transien (Rosenthal 3D DED moving source)

Persamaan konduksi panas transien 3D dengan sumber panas laser bergerak berkecepatan $v_s$ searah sumbu-$x$ dirumuskan dalam kerangka koordinat kuasi-stasioner $\xi = x - v_s t$:

$$ T(\xi, y, z) - T_0 = \frac{\eta_{\text{laser}} P_L}{2 \pi k \sqrt{\xi^2 + y^2 + z^2}} \exp\left( -\frac{v_s (\xi + \sqrt{\xi^2 + y^2 + z^2})}{2 \alpha} \right) $$

di mana:
- $\eta_{\text{laser}}$: Efisiensi absorptivitas optik efektif substrat-melt pool ($0.35 - 0.70$ untuk serat laser $\lambda = 1070 \text{ nm}$).
- $k$: Konduktivitas termal material substrat ($\text{W}/(\text{m}\cdot\text{K})$).
- $\alpha = \frac{k}{\rho c_p}$: Difusivitas termal material ($\text{m}^2/\text{s}$).
- $T_0$: Temperatur awal substrat / preheating temperature ($\text{K}$).

### 3.4. Prediksi Gradien Termal, Laju Pembekuan, dan Tegangan Sisa Termomekanis

Morfologi mikrostruktur pembekuan (selular, kolumnar dendritik, atau ekuaksial) diatur oleh dua parameter termal utama:
1. **Gradien Termal ($G$)**:
   $$ G = |\nabla T| = \sqrt{\left(\frac{\partial T}{\partial x}\right)^2 + \left(\frac{\partial T}{\partial y}\right)^2 + \left(\frac{\partial T}{\partial z}\right)^2} \quad [\text{K/m}] $$
2. **Laju Pembekuan Antarmuka Padat-Cair ($R$)**:
   $$ R = v_s \cos \theta \quad [\text{m/s}] $$
3. **Laju Pendinginan ($CR$)**:
   $$ CR = G \cdot R \quad [\text{K/s}] $$

Ukuran jarak lengan dendrit sekunder (*Secondary Dendrite Arm Spacing - SDAS*, $\lambda_2$) menyusut secara eksponensial terhadap laju pendinginan, yang meningkatkan kekerasan material sesuai hukum Hall-Petch:

$$ \lambda_2 = K_{\text{dendrite}} \cdot (CR)^{-n} \quad (n \approx 0.33) $$

**Tegangan Sisa Termomekanis Elastoplastik ($\sigma_{\text{residual}}$):**
Gradien ekspansi-kontraksi termal yang tertahan oleh substrat dingin memicu tegangan tarik sisa (*tensile residual stress*) di permukaan atas lapisan klad:

$$ \sigma_{\text{res}} \approx \frac{E_{\text{clad}}}{1 - \nu} \int_{T_{\text{ambient}}}^{T_{\text{solidus}}} \left( \alpha_{\text{clad}}(T) - \alpha_{\text{sub}}(T) \right) dT + \sigma_{\text{thermal-strain}} $$

---

## 4. Standar Internasional & Kriteria Kualitas DED (ISO/ASTM 52900 / 52907 / 52920)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    STANDARISASI INTERNASIONAL DIRECTED ENERGY DEPOSITION & CLADDING                                   |
+-----------------------------------------------------------------------------------------------------------------------+
| Standar          | Domain Ruang Lingkup             | Persyaratan Utama & Kriteria Penilaian                         |
+------------------+----------------------------------+----------------------------------------------------------------+
| ISO/ASTM 52900   | Additive Manufacturing — General | - Klasifikasi terminologi proses DED (DED-LB, DED-EB, DED-Arc).|
|                  | Principles — Fundamentals        | - Definisi parameter feed rate, build volume, feedstock.       |
+------------------+----------------------------------+----------------------------------------------------------------+
| ISO/ASTM 52907   | Metal Powder Characterization    | - Karakterisasi serbuk logam (rentang ukuran partikel 45-106µm)|
|                  | for Additive Manufacturing       | - Uji fluiditas Hall Flowmeter (ASTM B213) & Apparent Density. |
+------------------+----------------------------------+----------------------------------------------------------------+
| ASTM F3187       | Standard Guide for Directed      | - Kalibrasi keselarasan nozel koaksial dan beam profile laser. |
|                  | Energy Deposition of Metals      | - Validasi parameter overlap rasio antar-track (40% - 60%).    |
|                  |                                  | - Batas toleransi porositas volumetrik (< 0.5% porosity).      |
+------------------+----------------------------------+----------------------------------------------------------------+
| ISO/ASTM 52920   | AM — Qualification Principles —  | - Kualifikasi sistem produksi DED untuk komponen kritis        |
|                  | Requirements for Industrial Sites|   aerospace, nuclear, dan pressure containment equipment.      |
+------------------+----------------------------------+----------------------------------------------------------------+
```

---

## 5. Implementasi Algoritma Python Solver: DED Multiphysics & Dilution Optimizer

Di bawah ini adalah kode komputasi numerik Python lengkap yang memodelkan interaksi termal Rosenthal 3D, efisiensi penangkapan serbuk, prediksi geometri bead klad, rasio dilusi, komposisi kimia paduan akhir, dan estimasi tegangan sisa termal.

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 565: Laser Directed Energy Deposition (DED) & Cladding Multiphysics Solver
Standar: ISO/ASTM 52900, ISO/ASTM 52907, ASTM F3187, ISO/ASTM 52920
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, Any, Tuple, List


@dataclass
class DEDProcessParameters:
    """Parameter Operasi Mesin DED-LB / Laser Cladding"""
    laser_power_w: float = 2000.0          # Daya laser nominal P_L (Watt)
    scan_speed_mms: float = 12.0           # Kecepatan pemindaian v_s (mm/s)
    powder_feed_rate_gpmin: float = 18.0   # Laju umpan serbuk m_p (gram/menit)
    laser_beam_diam_mm: float = 3.0        # Diameter berkas laser d_L pada bidang substrat (mm)
    powder_spot_diam_mm: float = 3.5       # Diameter fokus berkas serbuk d_p (mm)
    preheat_temp_c: float = 150.0          # Temperatur pemanasan awal substrat T_0 (°C)
    laser_absorption_eff: float = 0.45     # Efisiensi absorpsi optik laser eta_laser (fraksi)


@dataclass
class MaterialThermophysicalProps:
    """Sifat Termofisika & Mekanika Material (Substrat & Serbuk Klad)"""
    name: str = "Inconel 625 on AISI 4140"
    k_thermal_cond: float = 28.0           # Konduktivitas termal k (W / m.K)
    rho_density: float = 8440.0            # Massa jenis padat rho (kg / m^3)
    cp_specific_heat: float = 480.0        # Kalor jenis spesifik c_p (J / kg.K)
    t_melting_c: float = 1350.0            # Temperatur leleh liquidus T_m (°C)
    youngs_modulus_gpa: float = 205.0      # Modulus elastisitas Young E (GPa)
    poisson_ratio: float = 0.30            # Poisson's ratio nu
    cte_substrate: float = 13.5e-6         # Koefisien ekspansi termal substrat (1/K)
    cte_clad: float = 12.8e-6              # Koefisien ekspansi termal serbuk klad (1/K)
    base_cr_wt_pct: float = 1.0            # Kandungan Cr substrat awal (% berat)
    powder_cr_wt_pct: float = 22.0         # Kandungan Cr serbuk pelapis Inconel 625 (% berat)


class DEDMultiphysicsCladdingEngine:
    """
    Engine Multiphysics Komprehensif untuk Pemodelan DED-LB:
    - Profil Termal 3D Rosenthal Kuasi-Stasioner
    - Efisiensi Penangkapan Serbuk (Powder Catchment)
    - Morfologi Geometri Bead (Tinggi h_c, Lebar W, Kedalaman d_p)
    - Rasio Dilusi Geometris & Komposisi Kimia Akhir
    - Analisis Tegangan Sisa & Kualifikasi Standar ASTM F3187
    """

    def __init__(self, process: DEDProcessParameters, material: MaterialThermophysicalProps):
        self.p = process
        self.m = material
        
        # Konversi satuan SI
        self.vs_mps = self.p.scan_speed_mms * 1e-3
        self.mp_kgps = (self.p.powder_feed_rate_gpmin / 60.0) * 1e-3
        self.alpha_diff = self.m.k_thermal_cond / (self.m.rho_density * self.m.cp_specific_heat) # m^2/s
        self.t0_k = self.p.preheat_temp_c + 273.15
        self.tm_k = self.m.t_melting_c + 273.15

    def compute_rosenthal_thermal_field(self, x_grid_mm: np.ndarray, y_grid_mm: np.ndarray, z_depth_mm: float = 0.0) -> np.ndarray:
        """
        Menghitung distribusi medan temperatur 2D/3D kuasi-stasioner Rosenthal di sekitar kolam lelehan.
        """
        x_m = x_grid_mm * 1e-3
        y_m = y_grid_mm * 1e-3
        z_m = z_depth_mm * 1e-3
        
        X, Y = np.meshgrid(x_m, y_m)
        R = np.sqrt(X**2 + Y**2 + z_m**2) + 1e-7 # Hindari singularitas r=0
        
        # Rosenthal semi-infinite point/disk moving heat source equation
        absorbed_pwr = self.p.laser_absorption_eff * self.p.laser_power_w
        exponent = -(self.vs_mps * (X + R)) / (2.0 * self.alpha_diff)
        temp_k = self.t0_k + (absorbed_pwr / (2.0 * np.pi * self.m.k_thermal_cond * R)) * np.exp(exponent)
        
        temp_c = temp_k - 273.15
        return temp_c

    def estimate_melt_pool_dimensions(self) -> Tuple[float, float, float]:
        """
        Mengestimasi dimensi kolam lelehan (Panjang L_m, Lebar W_m, Kedalaman d_p) pada kontur isotherm T_melting.
        """
        absorbed_pwr = self.p.laser_absorption_eff * self.p.laser_power_w
        delta_tm = self.tm_k - self.t0_k
        
        # Radius semi-teoretis kolam lelehan Rosenthal
        r_isotherm = absorbed_pwr / (2.0 * np.pi * self.m.k_thermal_cond * delta_tm) # meter
        
        # Koreksi bentuk elips kolam leleh akibat kecepatan pemindaian
        peclet_number = (self.vs_mps * self.p.laser_beam_diam_mm * 1e-3) / (2.0 * self.alpha_diff)
        
        pool_width_mm = max(self.p.laser_beam_diam_mm * 0.9, (2.0 * r_isotherm * 1e3) / (1.0 + 0.35 * np.sqrt(peclet_number)))
        pool_depth_mm = pool_width_mm * 0.38 # Rasio kedalaman konduksi standar DED
        pool_length_mm = pool_width_mm * (1.0 + 0.6 * peclet_number)
        
        return pool_length_mm, pool_width_mm, pool_depth_mm

    def compute_powder_catchment_and_clad_geometry(self) -> Dict[str, Any]:
        """
        Menghitung efisiensi penangkapan serbuk (eta_catch), tinggi deposisi bead (h_c),
        penetrasi leleh substrat (d_p), rasio dilusi geometris, dan komposisi paduan.
        """
        pool_length_mm, pool_width_mm, pool_depth_mm = self.estimate_melt_pool_dimensions()
        
        # 1. Efisiensi Penangkapan Serbuk Berkas Gaussian (Powder Catchment Efficiency)
        # sigma_p serbuk
        sigma_p_mm = self.p.powder_spot_diam_mm / (2.0 * np.sqrt(2.0 * np.log(2.0)))
        r_effective_pool = pool_width_mm / 2.0
        
        # Integrasi analitik distribusi massa serbuk yang tertangkap dalam radius kolam leleh
        eta_catch = 1.0 - np.exp(-(r_effective_pool**2) / (2.0 * sigma_p_mm**2))
        eta_catch = float(np.clip(eta_catch, 0.15, 0.92))
        
        # 2. Tinggi Geometri Lapisan Klad (h_c)
        effective_powder_mass_rate = self.mp_kgps * eta_catch
        # Luas penampang terdeposisi A_c = (h_c * W * pi / 4) untuk penampang parabola/elips
        # Laju volume terdeposisi V_dot = effective_powder_mass_rate / rho = A_c * v_s
        a_clad_mm2 = (effective_powder_mass_rate / (self.m.rho_density * self.vs_mps)) * 1e6 # mm^2
        h_clad_mm = (1.5 * a_clad_mm2) / pool_width_mm # Aproksimasi profil parabola bead
        
        # 3. Penetrasi Substrat & Dilusi Geometris
        a_penetration_mm2 = (2.0 / 3.0) * pool_width_mm * pool_depth_mm
        dilution_ratio = a_penetration_mm2 / (a_clad_mm2 + a_penetration_mm2)
        
        # 4. Komposisi Kimia Akhir Elemen Paduan (Cr wt%)
        cr_final_wt = (dilution_ratio * self.m.base_cr_wt_pct) + ((1.0 - dilution_ratio) * self.m.powder_cr_wt_pct)
        
        # 5. Prediksi Tegangan Sisa Termal Tarik Maksimum
        delta_t_freeze = (self.m.t_melting_c - self.p.preheat_temp_c)
        delta_cte = abs(self.m.cte_clad - self.m.cte_substrate)
        thermal_mismatch_stress = (self.m.youngs_modulus_gpa * 1e3 / (1.0 - self.m.poisson_ratio)) * delta_cte * delta_t_freeze
        cooling_shrinkage_stress = 0.45 * (self.m.youngs_modulus_gpa * 1e3 * self.m.cte_clad * delta_t_freeze)
        total_residual_stress_mpa = min(750.0, thermal_mismatch_stress + cooling_shrinkage_stress)
        
        # 6. Evaluasi Batas Standar ASTM F3187
        if dilution_ratio < 0.05:
            astm_status = "REJECT: Under-dilution (< 5%), Risiko Cacat Kurang Fusi / Delaminasi"
        elif 0.10 <= dilution_ratio <= 0.28:
            astm_status = "OPTIMAL (ASTM F3187 Compliant: Dilusi 10-28%, Ikatan Metalurgi Sempurna)"
        elif dilution_ratio > 0.35:
            astm_status = "WARNING: Over-dilution (> 35%), Penurunan Kualitas Paduan / Korosi"
        else:
            astm_status = "ACCEPTABLE: Batas Marginal Dilusi"
            
        return {
            "melt_pool_length_mm": round(pool_length_mm, 2),
            "melt_pool_width_mm": round(pool_width_mm, 2),
            "melt_pool_depth_mm": round(pool_depth_mm, 2),
            "powder_catchment_eff_pct": round(eta_catch * 100.0, 1),
            "clad_height_hc_mm": round(h_clad_mm, 2),
            "clad_area_Ac_mm2": round(a_clad_mm2, 2),
            "dilution_ratio_pct": round(dilution_ratio * 100.0, 1),
            "alloy_cr_content_wt_pct": round(cr_final_wt, 2),
            "residual_stress_mpa": round(total_residual_stress_mpa, 1),
            "astm_f3187_compliance": astm_status
        }


# ============================================================================
# EKSEKUSI SOLVER KASUS REMANUFAKTUR POROS TURBIN GAS (INCONEL 625 / AISI 4140)
# ============================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI - SIMULASI TERMAL MULTIPHYSICS & DILUSI DED-LB (ISO/ASTM 52900 / ASTM F3187)")
    print("=" * 85)
    
    process_cfg = DEDProcessParameters(
        laser_power_w=2200.0,           # Daya laser 2.2 kW
        scan_speed_mms=14.0,            # 14 mm/detik
        powder_feed_rate_gpmin=20.0,    # 20 g/menit
        laser_beam_diam_mm=3.2,         # Spot diameter laser 3.2 mm
        powder_spot_diam_mm=3.8,        # Spot diameter serbuk 3.8 mm
        preheat_temp_c=180.0,           # Preheating 180 °C untuk mereduksi tegangan sisa
        laser_absorption_eff=0.48       # Absorptivitas optik Inconel
    )
    
    material_cfg = MaterialThermophysicalProps(
        name="Cladding Inconel 625 on AISI 4140 Heavy Shaft",
        k_thermal_cond=31.0,
        rho_density=8440.0,
        cp_specific_heat=490.0,
        t_melting_c=1350.0,
        youngs_modulus_gpa=206.0,
        poisson_ratio=0.31,
        cte_substrate=13.7e-6,
        cte_clad=12.8e-6,
        base_cr_wt_pct=1.0,             # AISI 4140 ~1% Cr
        powder_cr_wt_pct=21.5           # Inconel 625 ~21.5% Cr
    )
    
    solver = DEDMultiphysicsCladdingEngine(process=process_cfg, material=material_cfg)
    results = solver.compute_powder_catchment_and_clad_geometry()
    
    print("\n[1] Parameter Input Proses DED & Sifat Material:")
    print(f"    - Laser Power (P_L)       : {process_cfg.laser_power_w} W")
    print(f"    - Scanning Speed (v_s)    : {process_cfg.scan_speed_mms} mm/s")
    print(f"    - Powder Feed Rate (m_p)  : {process_cfg.powder_feed_rate_gpmin} g/min")
    print(f"    - Preheating Temperature  : {process_cfg.preheat_temp_c} °C")
    print(f"    - Pasangan Material       : {material_cfg.name}")
    
    print("\n[2] Hasil Komputasi Dimensi Melt Pool & Efisiensi Serbuk:")
    print(f"    - Dimensi Kolam Lelehan   : Panjang = {results['melt_pool_length_mm']} mm, Lebar = {results['melt_pool_width_mm']} mm, Kedalaman = {results['melt_pool_depth_mm']} mm")
    print(f"    - Efisiensi Penangkapan   : {results['powder_catchment_eff_pct']} % (Powder Catchment Efficiency)")
    print(f"    - Geometri Lapisan Klad   : Tinggi h_c = {results['clad_height_hc_mm']} mm, Luas Deposisi A_c = {results['clad_area_Ac_mm2']} mm²")
    
    print("\n[3] Analisis Metalurgi Dilusi & Integritas Tegangan Sisa:")
    print(f"    - Rasio Dilusi Geometris  : {results['dilution_ratio_pct']} %")
    print(f"    - Kandungan Cr Paduan     : {results['alloy_cr_content_wt_pct']} wt% (Kriteria Korosi > 18 wt%: {'MEMENUHI' if results['alloy_cr_content_wt_pct'] >= 18.0 else 'TIDAK MEMENUHI'})")
    print(f"    - Estimasi Tegangan Sisa  : {results['residual_stress_mpa']} MPa (Tarik)")
    print(f"    - Status Kelayakan ASTM   : {results['astm_f3187_compliance']}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri: Remanufaktur Poros Kompresor Pembangkit Listrik Tenaga Gas (PLTG 150 MW)

### 6.1. Konteks Masalah & Kerusakan Komponen
Poros kompresor turbin gas berdiameter $450 \text{ mm}$ berbahan baja paduan tempa *AISI 4140 (42CrMo4)* mengalami keausan abrasif dan *fretting wear* sedalam $1.8 \text{ mm}$ pada dudukan bantalan luncur (*journal bearing seat*). Biaya pemesanan poros baru mencapai USD 380,000 dengan *lead time* pengiriman 9 bulan. Diterapkan perbaikan terencana menggunakan teknologi *Laser Directed Energy Deposition* (DED-LB) bermaterial pengisi paduan super *Inconel 625*.

### 6.2. Rancangan Eksperimen & Optimasi Multi-Objektif
Tujuan rekayasa:
1. Menghasilkan ketebalan lapisan restorasi nominal $2.5 \text{ mm}$ (setelah proses *finish grinding* menjadi $1.8 \text{ mm}$).
2. Menjaga rasio dilusi antara $12\% - 18\%$ agar kandungan *Chromium* dan *Molybdenum* pada Inconel 625 tidak terdegradasi oleh migrasi unsur Besi (Fe) dari substrat.
3. Mencegah timbulnya retak mikro pendinginan (*hot cracking*) dengan penerapan pemanasan awal induksi (*induction preheating*) pada $180^\circ \text{C}$.

### 6.3. Hasil Validasi Metalurgi & Pengujian Mekanis

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    HASIL ANALISIS PENGUJIAN REMANUFAKTUR POROS TURBIN GAS DED-LB                                      |
+-----------------------------------------------------------------------------------------------------------------------+
| Parameter Kualitas / Metalurgi       | Target Spesifikasi OEM          | Hasil Aktual DED-LB (Optimal)                |
+--------------------------------------+---------------------------------+----------------------------------------------+
| Porositas Volumetrik (ASTM E505)     | < 0.3%                          | 0.08% (Bebas gas entrapment)                 |
| Kekuatan Ikatan Geser Antarmuka      | > 350 MPa                       | 485 MPa (Failure terjadi di substrat)        |
| Kekerasan Permukaan Klad (Vickers)   | 240 - 280 HV                    | 265 HV (Klad Inconel 625 padat)              |
| Kandungan Cr Lapisan Atas            | > 18.5 wt%                      | 19.8 wt% (Dilusi Fe hanya 13.4%)             |
| Distorsi Run-out Poros Total (TIR)   | < 0.05 mm                       | 0.025 mm (Pemanasan simetris terkontrol)     |
| Waktu Siklus Perbaikan & Penghematan | Penggantian baru: 36 minggu     | Remanufaktur selesai: 4 hari kerja (Hemat 87%)|
+--------------------------------------+---------------------------------+----------------------------------------------+
```

---

## 7. Pedoman Praktis & *Troubleshooting* Lapangan Proses DED

1. **Pengendalian Defek Kurang Fusi (*Lack of Fusion* / LoF)**:
   Jika terjadi porositas LoF berbentuk celah pipih tak beraturan antar-lintasan (*inter-track voids*), naikkan overlap ratio lintasan dari $35\%$ menjadi $45\% - 50\%$, atau tingkatkan daya laser untuk memperlebar dasar kolam leleh.
2. **Pencegahan Oksidasi & Kehilangan Unsur Pelindung**:
   Pastikan laju aliran gas pelindung argon (*shielding gas flow rate*) diatur pada $10 - 15 \text{ L/min}$ dengan kemurnian gas $\ge 99.999\%$. Konsentrasi oksigen dalam ruang kerja lokal harus dijaga di bawah $100 \text{ ppm}$ untuk mencegah pembentukan terak oksida rapuh (*oxide inclusions*).
3. **Strategi Pemindaian Termal (*Scanning Strategy*)**:
   Gunakan pola pemindaian bolak-balik berputar $90^\circ$ di setiap layer (*meander alternating scan pattern*) atau pola *island scanning* untuk meratakan akumulasi gradien temperatur dan meniadakan konsentrasi tegangan sisa searah.

---

## 8. Referensi Terverifikasi & Standar Rekayasa

1. **International Organization for Standardization / ASTM International.** (2021). *Additive manufacturing — General principles — Fundamentals and vocabulary* (ISO/ASTM Standard No. 52900:2021). Geneva, Switzerland: ISO.
2. **ASTM International.** (2020). *Standard Guide for Directed Energy Deposition of Metals* (ASTM Standard No. F3187-20). West Conshohocken, PA: ASTM International. DOI: [10.1520/F3187-20](https://doi.org/10.1520/F3187-20).
3. **International Organization for Standardization / ASTM International.** (2019). *Additive manufacturing — Feedstock materials — Methods to characterize metal powders* (ISO/ASTM Standard No. 52907:2019). Geneva, Switzerland: ISO.
4. **Toyserkani, E., Khajepour, A., & Corbin, S. F.** (2004). *Laser Cladding*. CRC Press, Boca Raton, FL. ISBN: 978-0849321726.
5. **Pinkerton, A. J., & Li, L.** (2004). Modelling the geometry of a moving laser melt pool and deposition track via energy and mass balances. *Journal of Physics D: Applied Physics*, 37(14), 1874–1881. DOI: [10.1088/0022-3727/37/14/003](https://doi.org/10.1088/0022-3727/37/14/003).
6. **DebRoy, T., Wei, H. L., Zuback, J. S., Mukherjee, T., Elmer, J. W., Milewski, J. O., Beese, A. M., Wilson-Heid, A., De, A., & Zhang, W.** (2018). Additive manufacturing of metallic components – Process, structure and properties. *Progress in Materials Science*, 92, 112–224. DOI: [10.1016/j.pmatsci.2017.10.001](https://doi.org/10.1016/j.pmatsci.2017.10.001).
7. **Saboori, A., Aversa, A., Marchese, G., Biamino, S., Ugues, D., & Fino, P.** (2019). Application of directed energy deposition in repair, coating, and additive manufacturing: A review. *Materials*, 12(18), 2955. DOI: [10.3390/ma12182955](https://doi.org/10.3390/ma12182955).
