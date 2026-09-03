# Modul 711: Continuous Hot-Dip Galvanizing & Galvannealing (HDG/GA) pada Lembaran Baja Mutu Tinggi (AHSS): Hidrodinamika Gas Wiping (Air Knife), Kinetika Fasa Intermetalik Fe-Zn (Gamma, Delta, Zeta), Pengendalian Cacat Lapisan, dan Standar Mutu ASTM A653 / ISO 3575

## 1. Konsep Dasar, Fenomenologi Metalurgi Pelapisan Seng Celup Panas, dan Arsitektur Continuous Galvanizing Line (CGL)

Dalam industri manufaktur otomotif, konstruksi, dan peralatan rumah tangga modern, lembaran baja mutu tinggi berkekuatan tinggi (*Advanced High-Strength Steels* / AHSS—seperti DP, TRIP, dan Martensitic Steels) memerlukan perlindungan korosi jangka panjang yang handal. **Pelapisan Seng Celup Panas Kontinu (*Continuous Hot-Dip Galvanizing* / HDG)** dan perlakuan lanjut **Galvannealing (GA)** merupakan metode proteksi katodik (*sacrificial galvanic protection*) paling efisien dan ekonomis di dunia, di mana seng ($Zn$) mengorbankan dirinya secara elektrokimia sebelum baja dasar ($Fe$) terkorosi.

```
+---------------------------------------------------------------------------------------------------------+
|                  ARSITEKTUR CONTINUOUS HOT-DIP GALVANIZING & GALVANNEALING LINE (CGL)                   |
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|   +---------------------+       +----------------------+       +-------------------+                    |
|   | Tungku Anil Kontinu | ────► | Snout Proteksi Gas   | ────► | Bak Seng Cair     |                    |
|   | (NOF + RTF + HNX)   |       | N2-H2 Rendah Oksigen |       | (Zn + Al ~460°C)  |                    |
|   +---------------------+       +----------------------+       +-------------------+                    |
|                                                                          │                              |
|                                                                          ▼                              |
|   +---------------------+       +----------------------+       +-------------------+                    |
|   | Pendinginan Cepat   | ◄──── | Tungku Induksi       | ◄──── | Gas Wiping System |                    |
|   | & Passivasi Kimia   |       | Galvannealing (GA)   |       | (Air Knife Nozzle)|                    |
|   +---------------------+       | (500°C - 560°C)      |       +-------------------+                    |
|             │                   +----------------------+                 │                              |
|             ▼                              ▲                             │ (Stripping Zn Berlebih)      |
|   +---------------------+                  │ (Opsional untuk GA)         ▼                              |
|   | Skin Pass Mill      | ─────────────────┴───────────────────► [ Kontrol Ketebalan:                   |
|   | & Tension Leveler   |                                          ASTM A653 / ISO 3575 ]               |
|   +---------------------+                                                                               |
|                                                                                                         |
+---------------------------------------------------------------------------------------------------------+
```

Proses kontinu ini melibatkan tahapan termomekanis dan fluida yang terintegrasi secara ketat:
1. **Pemanasan dan Reduksi Permukaan di Tungku Anil (*Annealing Furnace*)**: Menghilangkan lapisan oksida permukaan besi dalam atmosfer reduksi nitrogen-hidrogen ($N_2 - H_2, \text{dew point} < -40^\circ\text{C}$).
2. **Pencelupan ke dalam Bak Seng Cair (*Zinc Bath Immersion*)**: Baja strip masuk melalui pipa celup (*snout*) ke dalam kolam seng cair bertemperatur $455^\circ\text{C} - 465^\circ\text{C}$ yang mengandung sedikit aluminium terlarut ($0.12\% - 0.20\ \text{wt}\%\ \text{Al}_{\text{eff}}$) untuk membentuk lapisan penghambat ultra-tipis (*inhibition layer* $\text{Fe}_2\text{Al}_5\text{Zn}_x$).
3. **Penyeka Gas (*Gas Wiping / Air Knife*)**: Tepat saat strip baja keluar vertikal dari bak seng membawa lapisan cairan tebal, sepasang nosel pisau udara bertekanan tinggi menyemprotkan gas ($N_2$ atau udara terkompresi) untuk menyeka (*strip*) kelebihan cairan seng dan mengendalikan massa lapisan (*coating weight*) secara presisi.
4. **Tungku Difusi Termal Galvannealing (GA Furnace - Opsional)**: Strip dipanaskan kembali ke temperatur $500^\circ\text{C} - 560^\circ\text{C}$ melalui pemanasan induksi frekuensi tinggi untuk memicu interdifusi atom $Fe$ dan $Zn$, mengubah lapisan seng murni (*free zinc*) menjadi paduan intermetalik $\text{Fe-Zn}$ yang keras dan memiliki kemampuan las resistansi (*weldability*) serta daya rekat cat (*paintability*) superior.

---

## 2. Hidrodinamika Lapisan Tipis Gas Wiping (*Air Knife Jet Stripping*)

Ketebalan akhir lapisan seng cair sebelum memadat ditentukan oleh keseimbangan gaya antara viskositas fluida seng, gravitasi, tarikan strip, gradien tekanan impak jet gas (*gas jet stagnation pressure*), dan tegangan geser gesekan gas (*shear stress*).

```
+─────────────────────────────────────────────────────────────────────────────────+
|               HIDRODINAMIKA STRIPPING LAPISAN SENG DENGAN AIR KNIFE             |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|       Strip Baja Naik (Kecepatan V_strip)                                       |
|               ▲                                                                 |
|               │          [ Nosel Air Knife (Celah d, Tekanan P_0) ]             |
|               │                   ══════════► Semburan Jet Gas N2/Udara         |
|               │                  /                                              |
|               │                 /  - Gradien Tekanan Impak: dp/dx               |
|       ┌───────┼───────┐        /   - Tegangan Geser Gas: τ_g(x)                 |
|       │       │ Lapisan│◄──────                                                 |
|       │ Sub-  │ Cair  │                                                         |
|       │ strat │ Seng  │                                                         |
|       │ Baja  │ t(x)  │ ──► Aliran Balik Cairan Seng Berlebih ke Bak Bawah      |
|       └───────┼───────┘                                                         |
|               │                                                                 |
|               │                                                                 |
|       [ Bak Seng Cair (T ~ 460°C, Viskositas μ, Densitas ρ) ]                   |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

### 2.1 Persamaan Lapisan Batas Pelumasan Fluida (*Lubrication Approximation*)
Mengasumsikan aliran satu dimensi dalam koordinat $x$ (sepanjang arah gerak strip vertikal) dan $y$ (tegak lurus permukaan strip), persamaan momentum Navier-Stokes disederhanakan menjadi:

$$\mu \frac{\partial^2 u}{\partial y^2} = \rho g + \frac{dp_g}{dx}$$

dengan kondisi batas:
- Pada permukaan strip ($y = 0$): $u(0) = V_{\text{strip}}$ (kondisi tanpa slip /*no-slip condition*).
- Pada antarmuka gas-cairan ($y = h(x)$): $\mu \left.\frac{\partial u}{\partial y}\right|_{y=h} = -\tau_g(x)$ (keseimbangan tegangan geser gas).

Integrasi dua kali terhadap $y$ menghasilkan profil kecepatan lokal cairan seng $u(y)$:

$$u(y) = V_{\text{strip}} + \frac{1}{\mu} \left( \rho g + \frac{dp_g}{dx} \right) \left( \frac{y^2}{2} - h(x) y \right) - \frac{\tau_g(x)}{\mu} y$$

Laju aliran volumetrik per satuan lebar strip $q$ dinyatakan oleh integrasi profil kecepatan:

$$q = \int_{0}^{h(x)} u(y) \, dy = V_{\text{strip}} h(x) - \frac{1}{3\mu} \left( \rho g + \frac{dp_g}{dx} \right) h^3(x) - \frac{\tau_g(x)}{2\mu} h^2(x)$$

### 2.2 Model Analitis Ketebalan Lapisan Thornton & Buchlin
Pada titik kesetimbangan kritis (*critical meniscus point*) di mana gradien tekanan dan tegangan geser gas maksimum menyeimbangkan aliran angkat cairan, ketebalan lapisan seng akhir yang memadat $t_f$ (dalam meter) diformulasikan secara semi-empiris oleh model **Thornton-Buchlin**:

$$t_f = C_w \cdot \left( \frac{\mu V_{\text{strip}}}{\rho g} \right)^{1/2} \cdot \left( \frac{\rho g Z_{\text{dist}}}{P_0} \right)^{m} \cdot \left( \frac{Z_{\text{dist}}}{d_{\text{slot}}} \right)^{n}$$

di mana:
- $V_{\text{strip}}$ adalah kecepatan garis strip baja ($\text{m/s}$).
- $P_0$ adalah tekanan suplai gas di dalam ruang nosel *air knife* ($\text{Pa} / \text{kPa}$).
- $Z_{\text{dist}}$ adalah jarak horizontal dari bibir nosel ke permukaan strip baja ($\text{mm}$).
- $d_{\text{slot}}$ adalah celah bukaan nosel (*nozzle aperture slot gap*, misal $0.8 - 1.5\ \text{mm}$).
- $\mu$ adalah viskositas dinamik seng cair ($\approx 3.5 \times 10^{-3}\ \text{Pa}\cdot\text{s}$ pada $460^\circ\text{C}$).
- $\rho$ adalah massa jenis seng cair ($\approx 6600\ \text{kg/m}^3$).
- $C_w, m, n$ adalah koefisien hidrodinamika empiris ($C_w \approx 0.85 - 1.25, m \approx 0.42 - 0.48, n \approx 0.10 - 0.18$).

Hubungan massa lapisan seng (*coating weight* $W_{\text{coat}}$ dalam $\text{g/m}^2$ per sisi) dengan ketebalan lapisan $t_f$ adalah:

$$W_{\text{coat}} = \rho_{\text{solid\_Zn}} \cdot t_f \cdot 10^3 = 7140 \cdot t_f \cdot 10^3 \quad [\text{g/m}^2]$$

---

## 3. Metalurgi Fasa Intermetalik Fe-Zn pada Proses Galvannealing (GA)

Pada proses Galvannealing (GA), lembaran baja galvanis dipanaskan pasca-*gas wiping* pada temperatur $500^\circ\text{C} - 560^\circ\text{C}$ selama 10 hingga 30 detik untuk mendifusikan atom Besi ($Fe$) dari substrat ke dalam lapisan seng cair/padat.

```
+─────────────────────────────────────────────────────────────────────────────────+
|         STRUKTUR MIKRO LAPISAN PADUAN FE-ZN PADA BAJA GALVANNEALED (GA)         |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|   Permukaan Luar: Fasa Zeta (ζ - FeZn13) ──► Monoklinik, Kolumnar Lunak         |
|   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   |
|   Lapisan Tengah: Fasa Delta (δ1 - FeZn7) ──► Heksagonal, Padat, Ulet           |
|   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   |
|   Lapisan Dasar:  Fasa Gamma (Γ - Fe3Zn10 / Γ1 - Fe5Zn21) ──► Kubik Keras/Getas |
|   ===========================================================================   |
|   Substrat Baja Matriks AHSS (Ferrite / Martensite)                             |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

### 3.1 Karakteristik Kristalografi & Sifat Mekanik Fasa Fe-Zn

| Fasa Intermetalik | Rumus Stoikiometri | Kadar Besi ($wt\% Fe$) | Sistem Kristal | Sifat Mekanik & Perilaku Manufaktur |
| :--- | :--- | :--- | :--- | :--- |
| **Eta ($\eta$)** | Murni $\text{Zn}$ ($< 0.03\% Fe$) | $< 0.03\%$ | Hexagonal (HCP) | Sangat lunak ($HV \approx 50$), memicu cacat *flaking/galling* pada cetakan *stamping* otomotif jika tidak terpadukan sempurna. |
| **Zeta ($\zeta$)** | $\text{FeZn}_{13}$ | $5.0\% - 6.2\%$ | Monoclinic | Berbentuk kristal jarum/kolumnar ($HV \approx 200$), relatif lunak, koefisien gesek rendah. |
| **Delta ($\delta_1$)** | $\text{FeZn}_7$ / $\text{FeZn}_{10}$ | $7.0\% - 11.5\%$ | Hexagonal | **Fasa target optimal GA** ($HV \approx 350$). Padat, ulet, memberikan ketahanan aus tinggi dan daya rekat cat maksimal. |
| **Gamma-1 ($\Gamma_1$)** | $\text{Fe}_5\text{Zn}_{21}$ | $17.0\% - 19.5\%$ | Face-Centered Cubic | Sangat keras ($HV \approx 500$), lapisan tipis diinginkan untuk pengikatan antar-muka. |
| **Gamma ($\Gamma$)** | $\text{Fe}_3\text{Zn}_{10}$ | $20.0\% - 28.0\%$ | Body-Centered Cubic | Sangat getas dan keras ($HV \approx 600$). Jika ketebalannya $> 1.0\ \mu\text{m}$, memicu cacat pengelupasan getas (*powdering*). |

### 3.2 Kinetika Pertumbuhan Lapisan Difusi Fasa Berdasarkan Hukum Parabolis
Pertumbuhan ketebalan total lapisan intermetalik $\text{Fe-Zn}$ ($X_{\text{layer}}$ dalam meter) terhadap waktu pemanasan $t$ (detik) mengikuti persamaan difusi Arrhenius parabolis:

$$X_{\text{layer}}(t) = K_p(T) \cdot t^n \approx \sqrt{K_p(T) \cdot t}$$

dengan konstanta laju reaksi parabolis $K_p(T)$:

$$K_p(T) = K_0 \exp\left( -\frac{Q_{\text{act}}}{R \cdot T} \right)$$

di mana:
- $K_0$ adalah faktor frekuensi difusi ($\text{m}^2/\text{s}$).
- $Q_{\text{act}}$ adalah energi aktivasi difusi intermetalik $\text{Fe-Zn}$ ($\approx 85 - 130\ \text{kJ/mol}$).
- $R = 8.314\ \text{J/(mol}\cdot\text{K)}$ adalah konstanta gas universal.
- $T$ adalah temperatur tungku anil pemadu GA dalam Kelvin ($\text{K}$).

Kandungan besi rata-rata pada seluruh lapisan paduan ($\%Fe_{\text{avg}}$) ditargetkan secara presisi pada rentang **$9.0\% - 11.5\ \text{wt}\% Fe$** untuk mencapai keseimbangan optimal antara ketahanan *powdering* saat *deep drawing* dan resistansi las titik (*spot weldability*).

---

## 4. Analisis Modus Kegagalan dan Cacat Kritis Pelapisan (Defect Mechanisms)

```
+─────────────────────────────────────────────────────────────────────────────────+
|                KLASIFIKASI CACAT UTAMA PADA PRODUK HDG / GA                     |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|   1. Powdering (Pengelupasan Bubuk Intermetalik):                               |
|      - Akar Masalah : Lapisan Fasa Gamma (Γ) terlalu tebal (> 1.2 μm)           |
|                       akibat temperatur GA terlalu tinggi / waktu tahan berlebih|
|      - Gejala       : Lapisan retak getas dan lepas saat proses forming/stamping|
|                                                                                 |
|   2. Flaking (Pengelupasan Lembaran):                                           |
|      - Akar Masalah : Keberadaan sisa fasa Eta (η-Zn bebas) di permukaan luar   |
|                       akibat pemanasan GA kurang matang (under-galvannealed).   |
|      - Gejala       : Terjadi penempelan seng pada punch cetakan dies.          |
|                                                                                 |
|   3. Dross Entrapment (Inklusi Dross Seng):                                     |
|      - Akar Masalah : Partikel intermetalik Fe-Zn (Top Dross FeZn13 atau        |
|                       Bottom Dross Fe2Al5) terseret oleh aliran turbulen bak.   |
|      - Gejala       : Bintik kasar/tonjolan tajam pada permukaan lembaran.      |
|                                                                                 |
|   4. Edge Overcoating (Penebalan Seng pada Tepi Strip):                         |
|      - Akar Masalah : Dispersi jet gas air knife melemah di luar tepi lebar     |
|                       strip, memicu ketebalan seng lokal berlebih.              |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

---

## 5. Standar Spesifikasi Mutu Internasional (ASTM A653 / ISO 3575)

### 5.1 Penamaan Massa Lapisan Seng Menurut Standar ASTM A653 / A653M

| Kode Spesifikasi Metrik | Massa Lapisan Minimum Total Kedua Sisi (Triple Spot Test - $\text{g/m}^2$) | Massa Lapisan Minimum Satu Sisi (Single Spot Test - $\text{g/m}^2$) | Ketebalan Ekuivalen Per Sisi ($\mu\text{m}$) | Aplikasi Khas Industri |
| :--- | :--- | :--- | :--- | :--- |
| **Z090 / G30** | $90\ \text{g/m}^2$ | $30\ \text{g/m}^2$ | $\approx 4.2\ \mu\text{m}$ | Komponen interior kering, peralatan elektronik. |
| **Z180 / G60** | $180\ \text{g/m}^2$ | $60\ \text{g/m}^2$ | $\approx 8.5\ \mu\text{m}$ | Panel bodi mobil interior, saluran HVAC. |
| **Z275 / G90** | $275\ \text{g/m}^2$ | $94\ \text{g/m}^2$ | $\approx 13.5\ \mu\text{m}$ | Struktur bodi otomotif eksterior, atap baja. |
| **Z350 / G115**| $350\ \text{g/m}^2$ | $120\ \text{g/m}^2$ | $\approx 17.2\ \mu\text{m}$ | Rangka baja struktural luar ruangan sedang. |
| **ZF100 (GA)** | $100\ \text{g/m}^2$ (Paduan Fe-Zn) | $35\ \text{g/m}^2$ | $\approx 5.0\ \mu\text{m}$ | Panel luar otomotif yang dicat (Class-A Surface). |

---

## 6. Implementasi Python: Simulator Hidrodinamika Gas Wiping, Kinetika Fasa GA & Optimasi CGL

Berikut adalah modul Python terpadu untuk memodelkan hidrodinamika penyekaan gas pisau udara (*gas wiping*), mensimulasikan evolusi fraksi fasa intermetalik $\text{Fe-Zn}$, dan mengoptimalkan parameter proses CGL secara otomatis.

```python
"""
RuangTI Continuous Hot-Dip Galvanizing & Galvannealing (HDG/GA) Engineering Engine
Standar: ASTM A653 / ISO 3575 / ISO 4998
Hidrodinamika: Thornton-Buchlin Gas Wiping Model & Navier-Stokes Thin-Film Strip
Kinetika: Arrhenius Fe-Zn Intermetallic Phase Growth (Gamma, Delta, Zeta)
"""

import numpy as np
import dataclasses
from typing import Dict, List, Tuple, Optional


@dataclasses.dataclass
class CGLOperatingConditions:
    strip_speed_mpm: float          # Kecepatan strip baja (meter per menit)
    strip_thickness_mm: float       # Ketebalan strip baja (mm)
    strip_width_mm: float           # Lebar strip baja (mm)
    air_knife_pressure_kpa: float   # Tekanan suplai gas nosel (kPa)
    knife_distance_mm: float        # Jarak horizontal nosel ke strip (mm)
    knife_gap_mm: float             # Celah bukaan slot nosel (mm)
    zinc_bath_temp_c: float         # Temperatur bak seng cair (°C)
    effective_al_pct: float         # Kadar aluminium efektif dalam bak (wt%)
    ga_furnace_temp_c: float        # Temperatur tungku pemadu GA (°C)
    ga_soak_time_s: float           # Waktu pemanasan tahan GA (detik)


@dataclasses.dataclass
class CoatingSimulationResult:
    strip_speed_mps: float
    coating_thickness_um: float
    coating_weight_gsm_per_side: float
    total_both_sides_gsm: float
    astm_designation: str
    phase_fractions: Dict[str, float]  # Fraksi fasa: 'Gamma', 'Delta', 'Zeta', 'Eta'
    avg_iron_content_pct: float
    powdering_risk_index: float        # 0.0 - 1.0 (Skala risiko retak getas)
    flaking_risk_index: float          # 0.0 - 1.0 (Skala risiko fasa bebas seng)
    process_status: str                # 'OPTIMAL', 'OVER_ALLOYED', 'UNDER_ALLOYED', 'OFF_SPEC'


class GasWipingHydrodynamics:
    """Pemodelan Hidrodinamika Penyekaan Gas (Air Knife Wiping)."""

    def __init__(self, cw: float = 0.082, m_exp: float = 0.45, n_exp: float = 0.15):
        self.cw = cw
        self.m = m_exp
        self.n = n_exp
        self.g = 9.81  # Gravitasi m/s2
        self.rho_liquid = 6600.0  # Densitas seng cair kg/m3
        self.rho_solid = 7140.0   # Densitas paduan seng padat kg/m3

    def get_zinc_viscosity(self, temp_c: float) -> float:
        """Viskositas dinamik seng cair (Pa.s) berdasarkan temperatur Arrhenius."""
        # mu = A * exp(E / RT)
        t_k = temp_c + 273.15
        mu_ref = 3.5e-3 * np.exp(1850.0 * (1.0 / t_k - 1.0 / (460.0 + 273.15)))
        return float(mu_ref)

    def calculate_coating_thickness(self, cond: CGLOperatingConditions) -> Tuple[float, float]:
        """
        Menghitung ketebalan film akhir (mikrometer) dan massa lapisan (g/m2 per sisi)
        menggunakan Model Semi-Empiris Thornton-Buchlin.
        """
        v_mps = cond.strip_speed_mpm / 60.0
        mu = self.get_zinc_viscosity(cond.zinc_bath_temp_c)
        p_pa = cond.air_knife_pressure_kpa * 1000.0
        z_m = cond.knife_distance_mm * 1e-3
        d_m = cond.knife_gap_mm * 1e-3
        
        # Persamaan Bilangan Tak Berdimensi Thornton-Buchlin
        term1 = np.sqrt((mu * v_mps) / (self.rho_liquid * self.g))
        term2 = ((self.rho_liquid * self.g * z_m) / p_pa) ** self.m
        term3 = (z_m / d_m) ** self.n
        
        t_final_m = self.cw * term1 * term2 * term3
        t_final_um = t_final_m * 1e6
        
        # Massa lapisan per sisi (g/m2)
        w_coat_gsm = self.rho_solid * t_final_m * 1000.0
        
        return t_final_um, w_coat_gsm


class GalvannealingKineticsEngine:
    """Pemodelan Kinetika Difusi Fasa Intermetalik Fe-Zn pada Paduan GA."""

    def __init__(self):
        # Parameter Arrhenius Difusi Fe-Zn
        self.q_act_j_mol = 95000.0  # J/mol
        self.r_gas = 8.314          # J/(mol.K)
        self.k0_diff = 4.2e-4       # m2/s

    def simulate_phase_evolution(
        self,
        ga_temp_c: float,
        soak_time_s: float,
        initial_thickness_um: float
    ) -> Tuple[Dict[str, float], float, float, float]:
        """
        Simulasi evolusi ketebalan fasa Gamma, Delta, Zeta, dan sisa Eta.
        Output:
            fraksi_fasa: Dict persentase fasa
            avg_fe_pct: Kadar Fe rata-rata lapisan (%)
            powdering_risk: Indeks risiko 0-1
            flaking_risk: Indeks risiko 0-1
        """
        t_k = ga_temp_c + 273.15
        
        if soak_time_s <= 0.1 or ga_temp_c < 450.0:
            # Kasus HDG biasa (tanpa GA)
            return {'Gamma (Fe3Zn10)': 0.0, 'Delta (FeZn7)': 0.0, 'Zeta (FeZn13)': 2.5, 'Eta (Free Zn)': 97.5}, 0.2, 0.0, 0.0
            
        # Kinetika difusi pada temperatur 500-560 °C
        # Laju pembentukan paduan intermetalik total
        diff_rate_factor = np.exp(-self.q_act_j_mol / (self.r_gas * t_k)) / np.exp(-self.q_act_j_mol / (self.r_gas * 798.15))
        alloy_conversion_ratio = min(1.0, (0.35 * diff_rate_factor) * np.sqrt(soak_time_s))
        
        total_reacted_um = initial_thickness_um * alloy_conversion_ratio
        
        # Proporsi pembentukan fasa Gamma, Delta, Zeta
        # Temperatur optimal (515-525°C) memaksimalkan fasa Delta yang ulet dan minim fasa Gamma
        gamma_frac = 0.065 + 0.075 * max(0.0, (ga_temp_c - 500.0) / 60.0)
        gamma_thickness_um = total_reacted_um * gamma_frac
        
        delta_thickness_um = total_reacted_um * 0.885
        zeta_thickness_um = max(0.0, total_reacted_um - gamma_thickness_um - delta_thickness_um)
        eta_free_zn_um = max(0.0, initial_thickness_um - total_reacted_um)
        
        total_h = initial_thickness_um
        gamma_pct = (gamma_thickness_um / total_h) * 100.0
        delta_pct = (delta_thickness_um / total_h) * 100.0
        zeta_pct = (zeta_thickness_um / total_h) * 100.0
        eta_pct = (eta_free_zn_um / total_h) * 100.0
        
        # Hitung kadar Fe rata-rata paduan (% wt Fe)
        fe_avg = (gamma_pct * 0.23 + delta_pct * 0.102 + zeta_pct * 0.058 + eta_pct * 0.002)
        
        # Indeks Risiko Mekanik
        # Powdering risk tinggi jika Gamma > 0.85 um atau kadar Fe > 12.0%
        powdering_risk = float(np.clip((gamma_thickness_um - 0.65) / 0.45, 0.0, 1.0))
        # Flaking risk tinggi jika sisa Zn bebas Eta > 4% (under-annealed)
        flaking_risk = float(np.clip(eta_pct / 5.0, 0.0, 1.0))
        
        phase_dict = {
            'Gamma (Fe3Zn10)': round(float(gamma_pct), 1),
            'Delta (FeZn7)': round(float(delta_pct), 1),
            'Zeta (FeZn13)': round(float(zeta_pct), 1),
            'Eta (Free Zn)': round(float(eta_pct), 1)
        }
        
        return phase_dict, round(float(fe_avg), 2), round(powdering_risk, 3), round(flaking_risk, 3)






class ContinuousGalvanizingSimulator:
    """Simulator Terpadu Lini HDG & GA RuangTI."""

    def __init__(self):
        self.hydro = GasWipingHydrodynamics()
        self.ga_engine = GalvannealingKineticsEngine()

    def run_simulation(self, cond: CGLOperatingConditions, is_ga_product: bool = False) -> CoatingSimulationResult:
        t_um, w_gsm = self.hydro.calculate_coating_thickness(cond)
        total_gsm = w_gsm * 2.0
        
        # Penentuan Kode Standar ASTM A653
        if is_ga_product:
            astm_code = f"ZF{int(round(total_gsm, -1)):03d} (GA)"
        else:
            if total_gsm <= 100:
                astm_code = "Z090 / G30"
            elif total_gsm <= 200:
                astm_code = "Z180 / G60"
            elif total_gsm <= 300:
                astm_code = "Z275 / G90"
            else:
                astm_code = "Z350 / G115"
                
        # Simulasi Fasa GA
        if is_ga_product:
            phases, fe_pct, pow_risk, flk_risk = self.ga_engine.simulate_phase_evolution(
                cond.ga_furnace_temp_c, cond.ga_soak_time_s, t_um
            )
            
            if 9.0 <= fe_pct <= 11.5 and pow_risk < 0.25 and flk_risk < 0.15:
                status = "OPTIMAL"
            elif fe_pct > 12.0 or pow_risk >= 0.40:
                status = "OVER_ALLOYED (POWDERING_DANGER)"
            elif fe_pct < 8.5 or flk_risk >= 0.30:
                status = "UNDER_ALLOYED (FLAKING_DANGER)"
            else:
                status = "MARGINAL_QUALITY"
        else:
            phases = {'Gamma (Fe3Zn10)': 0.0, 'Delta (FeZn7)': 0.0, 'Zeta (FeZn13)': 2.5, 'Eta (Free Zn)': 97.5}
            fe_pct = 0.15
            pow_risk = 0.0
            flk_risk = 0.0
            status = "OPTIMAL_HDG_FREE_ZINC"
            
        return CoatingSimulationResult(
            strip_speed_mps=round(cond.strip_speed_mpm / 60.0, 2),
            coating_thickness_um=round(t_um, 2),
            coating_weight_gsm_per_side=round(w_gsm, 1),
            total_both_sides_gsm=round(total_gsm, 1),
            astm_designation=astm_code,
            phase_fractions=phases,
            avg_iron_content_pct=fe_pct,
            powdering_risk_index=pow_risk,
            flaking_risk_index=flk_risk,
            process_status=status
        )


# ==========================================
# VERIFIKASI STUDI KASUS & EKSEKUSI SOLVER
# ==========================================
if __name__ == "__main__":
    print("=== RUANGTI CONTINUOUS GALVANIZING & GALVANNEALING SIMULATOR ===")
    
    sim = ContinuousGalvanizingSimulator()
    
    # Skenario 1: Pelapisan Bodi Otomotif GA (Galvannealed High-Formability)
    ga_conditions = CGLOperatingConditions(
        strip_speed_mpm=130.0,          # 130 m/min
        strip_thickness_mm=0.8,
        strip_width_mm=1250.0,
        air_knife_pressure_kpa=32.0,    # 32 kPa
        knife_distance_mm=11.0,         # 11 mm
        knife_gap_mm=1.0,
        zinc_bath_temp_c=460.0,
        effective_al_pct=0.135,
        ga_furnace_temp_c=515.0,        # 515 °C GA
        ga_soak_time_s=12.0             # 12 detik soak time
    )
    
    res_ga = sim.run_simulation(ga_conditions, is_ga_product=True)
    print("\n--- [Skenario 1: Lembaran Baja GA Otomotif ZF100] ---")
    print(f"  Kecepatan Garis: {ga_conditions.strip_speed_mpm} m/min ({res_ga.strip_speed_mps} m/s)")
    print(f"  Ketebalan Lapisan: {res_ga.coating_thickness_um} um | Berat: {res_ga.coating_weight_gsm_per_side} g/m2/sisi (Total: {res_ga.total_both_sides_gsm} g/m2)")
    print(f"  Klasifikasi Standar: {res_ga.astm_designation} | Status Proses: {res_ga.process_status}")
    print(f"  Kadar Fe Rata-rata: {res_ga.avg_iron_content_pct}% (Target Optimal: 9.0 - 11.5%)")
    print(f"  Distribusi Fasa: {res_ga.phase_fractions}")
    print(f"  Indeks Risiko: Powdering = {res_ga.powdering_risk_index:.3f}, Flaking = {res_ga.flaking_risk_index:.3f}")
    
    # Skenario 2: Pelapisan HDG Bebas Seng Konstruksi (ASTM A653 G90 / Z275)
    hdg_conditions = CGLOperatingConditions(
        strip_speed_mpm=95.0,
        strip_thickness_mm=1.2,
        strip_width_mm=1200.0,
        air_knife_pressure_kpa=12.0,
        knife_distance_mm=19.0,
        knife_gap_mm=1.2,
        zinc_bath_temp_c=460.0,
        effective_al_pct=0.190,
        ga_furnace_temp_c=0.0,
        ga_soak_time_s=0.0
    )
    
    res_hdg = sim.run_simulation(hdg_conditions, is_ga_product=False)
    print("\n--- [Skenario 2: Lembaran Baja HDG Struktural Z275 / G90] ---")
    print(f"  Kecepatan Garis: {hdg_conditions.strip_speed_mpm} m/min ({res_hdg.strip_speed_mps} m/s)")
    print(f"  Ketebalan Lapisan: {res_hdg.coating_thickness_um} um | Berat: {res_hdg.coating_weight_gsm_per_side} g/m2/sisi (Total: {res_hdg.total_both_sides_gsm} g/m2)")
    print(f"  Klasifikasi Standar: {res_hdg.astm_designation} | Status Proses: {res_hdg.process_status}")
    print(f"  Distribusi Fasa: {res_hdg.phase_fractions}")
```

---

## 7. Studi Kasus Industri: Optimasi Konsumsi Seng & Penurunan Cacat Powdering pada Jalur CGL Otomotif

Sebuah pabrik baja lembaran terpadu memproduksi baja galvannealed (GA) mutu AHSS (DP780 dan TRIP690) untuk panel pintu dan lantai kendaraan berpenumpang. Fasilitas tersebut menghadapi dua tantangan utama:
1. **Fluktuasi Massa Lapisan Seng (*Coating Weight Variation*)**: Variasi berat seng sebesar $\pm 14\ \text{g/m}^2$ akibat kontrol manual jarak nosel *air knife*, yang menyebabkan pemborosan seng murni hingga 42 ton per bulan.
2. **Cacat Pengelupasan (*Powdering Defect Rate*)**: Tingkat cacat *powdering* pada proses pencetakan *deep drawing* di pabrik perakitan mobil mencapai **2.8%** yang diakibatkan oleh *over-annealing* pada temperatur induksi $555^\circ\text{C}$, sehingga memicu penebalan fasa getas $\Gamma$ ($> 1.6\ \mu\text{m}$).

```
+─────────────────────────────────────────────────────────────────────────────────+
|               ANALISIS HASIL OPTIMASI PROSES JALUR CGL & GA                     |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|   Tindakan Rekayasa Terpadu:                                                    |
|   1. Pemasangan Pengukur Ketebalan Sinar-X (*Online X-Ray Coating Gauge*)       |
|      dengan loop kendali aktuator nosel pneumatik otomatis.                     |
|   2. Optimasi Tekanan Air Knife: P_0 disesuaikan dinamis antara 28 - 34 kPa     |
|      menggunakan model Thornton-Buchlin untuk menjaga target 50 g/m2/sisi.      |
|   3. Penyesuaian Termal GA Furnace: Menurunkan temperatur rendam induksi dari   |
|      555°C ke 522°C dan membatasi waktu tahan difusi t = 13.5 detik.            |
|                                                                                 |
|   Hasil Kinerja Operasional (Evaluasi 12 Bulan):                                |
|   - Deviasi Ketebalan Seng : Turun dari ±14 g/m2 menjadi ±2.1 g/m2              |
|   - Penghematan Bahan Baku : Mengurangi konsumsi ingot Zn senilai $620.000 / th |
|   - Kadar Rata-rata Fe     : Terkunci stabil pada rentang 9.8% - 10.4% wt Fe    |
|   - Ketebalan Fasa Gamma   : Berhasil ditekan di bawah 0.65 μm                  |
|   - Tingkat Cacat Powdering: Turun drastis dari 2.8% ke 0.04% (Zero-Customer)  |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

---

## 8. Rekomendasi Praktis & Standar Industri Terverifikasi

1. **Pengendalian Komposisi Aluminium Efektif ($\text{Al}_{\text{eff}}$)**:
   - Pertahankan kadar $\text{Al}_{\text{eff}}$ pada rentang $0.130\% - 0.140\ \text{wt}\%$ untuk produk GA guna membatasi pembentukan lapisan penghambat tanpa menghambat kinetika transformasi $\text{Fe-Zn}$.
   - Untuk produk HDG murni, jaga $\text{Al}_{\text{eff}} \ge 0.185\ \text{wt}\%$ untuk mencegah terjadinya reaksi difusi intermetalik fasa getas.
2. **Pencegahan Cacat *Edge Overcoating* & Fluktuasi Meniskus**:
   - Pasang *edge baffles* (pelat deflektor tepi) di samping strip baja untuk memotong pusaran turbulen jet gas di pinggir strip.
   - Gunakan gas nitrogen panas ($N_2$ bertemperatur $150^\circ\text{C} - 200^\circ\text{C}$) pada *air knife* untuk mencegah pembentukan dross oksidasi seng pada ujung bibir nosel (*nozzle lip clogging*).
3. **Standar Rujukan Internasional**:
   - **ASTM A653 / A653M**: *Standard Specification for Steel Sheet, Zinc-Coated (Galvanized) or Zinc-Iron Alloy-Coated (Galvannealed) by the Hot-Dip Process*.
   - **ISO 3575**: *Continuous hot-dip zinc-coated and zinc-iron alloy-coated carbon steel sheet of commercial and drawing qualities*.
   - **ISO 4998**: *Continuous hot-dip zinc-coated and zinc-iron alloy-coated carbon steel sheet of structural quality*.
   - **JIS G 3302**: *Hot-dip zinc-coated steel sheets and coils*.

---

## 9. Referensi Akademis & Standar Teknis Terverifikasi

1. Kobayashi, H., Takeda, K., Katoh, K., & Miyake, M. (2024). Coating Weight Reduction Technology in Gas Wiping of Hot-Dip Galvanizing on Steel Strip. *ISIJ International*, 64(4), 580–588. DOI: `10.2355/isijinternational.isijint-2024-119`.
2. Zhang, J., Cui, E., Shao, C., & Wang, X. (2012). Influence of Air-Knife Wiping on Coating Thickness in Hot-Dip Galvanizing. *Journal of Iron and Steel Research International*, 19(5), 26–31. DOI: `10.1016/s1006-706x(12)60130-7`.
3. Cho, H. H., Kwon, S. J., & Kwon, O. D. (2009). A study of the influence of air-knife tilting on coating thickness in hot-dip galvanizing. *Journal of Thermal Science*, 18(3), 262–267. DOI: `10.1007/s11630-009-0262-7`.
4. Taniyama, A., Arai, M., & Takayama, T. (2004). In-situ Observation of Growth Behavior of Fe-Zn Intermetallic Compounds at Initial Stage of Galvannealing Process. *Materials Transactions*, 45(7), 2326–2331. DOI: `10.2320/matertrans.45.2326`.
5. Gosset, A., & Buchlin, J. M. (2006). Hot-Dip Galvanization and Jet Wiping Technique. *ASME 2006 Joint U.S.-European Fluids Engineering Division Summer Meeting*, Volume 1: Symposia, Parts A and B, 707–714. DOI: `10.1115/fedsm2006-98331`.
6. ASTM International. (2022). *ASTM A653/A653M-22: Standard Specification for Steel Sheet, Zinc-Coated (Galvanized) or Zinc-Iron Alloy-Coated (Galvannealed) by the Hot-Dip Process*. West Conshohocken, PA.
7. International Organization for Standardization. (2016). *ISO 3575:2016 - Continuous hot-dip zinc-coated and zinc-iron alloy-coated carbon steel sheet of commercial and drawing qualities*. Geneva, Switzerland.$.
