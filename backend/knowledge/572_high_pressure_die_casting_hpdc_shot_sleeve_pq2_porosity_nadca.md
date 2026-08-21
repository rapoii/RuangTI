# Modul 572: High-Pressure Die Casting (HPDC): Dinamika Logam Cair Shot Sleeve, Kecepatan Kritis Plunger, Diagram P-Q², Pemodelan Porositas Gas & Penyusutan, dan Standar NADCA / ASTM B85

## 1. Pengantar & Urgensi High-Pressure Die Casting (HPDC) dalam Manufaktur Presisi Modern

High-Pressure Die Casting (HPDC) adalah proses pengecoran logam presisi berkecepatan dan bertekanan tinggi di mana paduan logam cair non-ferrous (seperti aluminium seri A380, A383, AlSi10Mg; paduan magnesium AZ91D, AM60B; atau paduan seng Zamak) diinjeksikan ke dalam rongga cetakan baja perkakas tahan panas (*hardened tool steel die*) di bawah tekanan hidrolik berkisar antara $30 - 150\ \text{MPa}$ dengan waktu pengisian rongga cetakan (*cavity filling time*) yang sangat singkat, berkisar antara $5 - 100\ \text{milidetik}$.

HPDC merupakan tulang punggung manufaktur komponen berdensitas tinggi dan berdinding tipis (*thin-walled structural components*) dalam industri otomotif (*engine blocks, transmission cases, EV structural battery enclosures, gigacasting chassis subframes*), telekomunikasi (*5G base-station heatsinks*), dan elektronika konsumen.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PERBANDINGAN PROSES PENGECORAN LOGAM (CASTING) PADA PADUAN STRUKTURAL                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Sand Casting (Pengecoran Cetakan Pasir):                                                                          |
|     - Kecepatan Pengisian : Sangat lambat (gravitasi), waktu pengisian beberapa detik hingga menit.                   |
|     - Karakteristik       : Kekasaran permukaan tinggi (Ra > 12.5 µm), toleransi dimensi longgar (ISO 8062 CT10-12),  |
|                             laju pendinginan lambat memicu butir dendritik kasar dan segregasi mikro.                 |
|                                                                                                                       |
|  2. Gravity / Low-Pressure Die Casting (LPDC):                                                                        |
|     - Kecepatan Pengisian : Terkontrol tenang (0.05 - 0.5 m/s), tekanan rendah (0.02 - 0.2 MPa).                     |
|     - Karakteristik       : Integritas mekanis tinggi, porositas gas rendah, namun cycle time lama (1 - 5 menit) dan  |
|                             ketebalan dinding minimum terbatas (> 3.5 - 5.0 mm).                                      |
|                                                                                                                       |
|  3. Cold-Chamber High-Pressure Die Casting (HPDC - Standar NADCA & ASTM B85 - Modul Ini):                             |
|     - Kecepatan Pengisian : Injeksi gerbang sangat tinggi (v_gate = 25 - 80 m/s), tekanan intensifikasi (30 - 120 MPa)|
|     - Keunggulan          : Cycle time super cepat (10 - 45 detik), mampu mencetak dinding ultra-tipis (1.0 - 2.5 mm), |
|                             akurasi dimensi presisi tinggi (ISO 8062 CT4-6), penyelesaian permukaan prima (Ra 0.8 -  |
|                             3.2 µm), laju pembekuan sangat cepat menghasilkan butir mikro halus dan sifat tarik tinggi.|
|     - Tantangan Metalurgi : Turbulensi aliran fluida memicu penyerapan udara (gas entrapment porosity), penyusutan     |
|                             volumetrik (shrinkage porosity), dan kelelahan termal cetakan (die thermal fatigue/heat   |
|                             checking).                                                                                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

```
+-----------------------------------------------------------------------------------------------------------------------+
|                           ARSITEKTUR FISIK MESIN COLD-CHAMBER HIGH-PRESSURE DIE CASTING (HPDC)                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     Sistem Injeksi Hidrolik                 Shot Sleeve & Plunger                Die Tooling (Cavity & Core)          |
|    ┌────────────────────────┐             ┌─────────────────────────┐           ┌────────────────────────────────┐    |
|    │ Silinder Hidrolik Utama│             │ Lubang Tuang (Pour Hole)│           │ Plat Cetakan   Plat Cetakan    │    |
|    │ + Akumulator Nitrogen  │             │           │             │           │ Tetap (Cover)  Bergerak (Eject)│    |
|    │ (P_hyd = 10 - 25 MPa)  │             │           ▼             │           │ ┌────────────┐┌──────────────┐ │    |
|    │                        │             │ ┌─────────────────────┐ │           │ │            ││              │ │    |
|    │ ┌───┐                  │ Plunger Rod │ │  Logam Cair Al/Mg   │ │ Runner    │ │  Rongga    ││  Baja H13    │ │    |
|    │ │   │──────────────────┼─────────────┼─┼──┐ (T = 650-700 °C) │─┼───────────┼─┼─► Cetakan  ││  Saluran Air │ │    |
|    │ └───┘                  │             │ │  │ Fraction: f_fill │ │ Gate (A_g)│ │  (Cavity)  ││  Pendingin   │ │    |
|    │ Plunger Piston         │             │ └──┴──────────────────┘ │           │ │            ││  (Cooling)   │ │    |
|    └────────────────────────┘             └─────────────────────────┘           │ └────────────┘└──────────────┘ │    |
|                                                                                 │   ▲            ▲               │    |
|                                                                                 └───┼────────────┼───────────────┘    |
|                                                                                     │            │                    |
|                                                                                 [ Tie Bars (4x) & Toggle Clamp ]      |
|                                                                                 [ Locking Force: 500 - 4500 Ton ]     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Hidrodinamika Logam Cair dalam Shot Sleeve & Kecepatan Kritis Plunger

Tahap pertama injeksi (*slow shot phase*) bertujuan mendorong logam cair dari bawah lubang tuang (*pour hole*) menuju gerbang masuk runner (*runner inlet*) tanpa memerangkap kantong udara atau oksida ke dalam aliran fluida.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       FENOMENA PEMBENTUKAN GELOMBANG (WAVE FORMATION) PADA SHOT SLEEVE                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Kasus A: Kecepatan Plunger Terlalu Rendah (v_p << v_crit) -> Gelombang Pantul Refleksi Memerangkap Udara             |
|   ┌─────────────────────────────────────────────────────────────────┐                                                 |
|   │ Plunger ──►                                                     │                                                 |
|   │ ┌───┐    Gelombang Rendah     Refleksi Balik Gelombang          │                                                 |
|   │ │   │ ~~~~~~~~~~~~~~~~~~~~~~~~~\                                │                                                 |
|   │ │   │ Logam Cair                \   Udara Terperangkap!         │                                                 |
|   │ └───┘                            \~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│                                                 |
|   └─────────────────────────────────────────────────────────────────┘                                                 |
|                                                                                                                       |
|   Kasus B: Kecepatan Plunger Terlalu Tinggi (v_p >> v_crit) -> Gelombang Menghantam Atap Sleeve (Wave Roll-Over)       |
|   ┌─────────────────────────────────────────────────────────────────┐                                                 |
|   │ Plunger ──►                                                     │                                                 |
|   │ ┌───┐           ┌──────────┐                                    │                                                 |
|   │ │   │          /            \  Roll-Over & Vortex Udara         │                                                 |
|   │ │   │ ~~~~~~~~(   Udara!     )~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│                                                 |
|   │ └───┘          \____________/                                   │                                                 |
|   └─────────────────────────────────────────────────────────────────┘                                                 |
|                                                                                                                       |
|   Kasus C: Kecepatan Kritis Optimal (v_p = v_crit) -> Profil Gelombang Tunggal Kontinu Mendorong Udara ke Lubang      |
|   ┌─────────────────────────────────────────────────────────────────┐                                                 |
|   │ Plunger ──►                                                     │                                                 |
|   │ ┌───┐                                                           │                                                 |
|   │ │   │\                                                          │                                                 |
|   │ │   │ \  Gelombang Soliter Stabil (Udara Keluar Bebas ke Depan) │                                                 |
|   │ └───┘  \~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│                                                 |
|   └─────────────────────────────────────────────────────────────────┘                                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Teori Gelombang Dangkal & Penentuan Kecepatan Kritis ($v_{\text{crit}}$) Garber-Kohlstädt

Berdasarkan teori dinamika fluida gelombang gravitasi dangkal (*shallow-water wave theory*) pada silinder horizontal dengan diameter dalam $D_s$ dan fraksi pengisian volume $f_{\text{fill}} = V_{\text{melt}} / V_{\text{sleeve}}$, kedalaman awal cairan $h_0$ dan luas basah dihitung dari geometri busur lingkaran:

Fraksi Luas Penampang Basah:
$$\theta - \sin(\theta) = 2\pi f_{\text{fill}}$$

Kedalaman awal cairan:
$$h_0 = \frac{D_s}{2} \left( 1 - \cos\left(\frac{\theta}{2}\right) \right)$$

Kecepatan gelombang celerity gravitasi bebas ($c_0$) dinyatakan oleh:

$$c_0 = \sqrt{g \cdot h_{\text{eff}}} = \sqrt{g \frac{A_{\text{melt}}}{w_{\text{surface}}}}$$

Di mana $w_{\text{surface}} = D_s \sin(\theta / 2)$ adalah lebar permukaan bebas logam cair, dan $g = 9.81\ \text{m/s}^2$.

Kecepatan kritis fasa lambat (*critical slow shot speed*, $v_{1,\text{crit}}$) untuk mencegah turbulensi gulungan gelombang (*wave rollover*) dan pemantulan gelombang balik dirumuskan oleh model Garber & NADCA:

$$v_{1,\text{crit}} = \sqrt{\frac{g \cdot D_s \cdot (1 - f_{\text{fill}})}{2}}$$

Atau dalam model profil akselerasi kontinu optimal $a_{\text{opt}}(t)$:

$$v_p(t) = c_0 \left( 1 - \left( 1 - \frac{a_0 t}{2 c_0} \right)^2 \right)$$

---

## 3. Dinamika Pengisian Cetakan, Diagram $P-Q^2$ & Matching Mesin-Cetakan

Diagram $P-Q^2$ adalah metode grafis dan analitis standar industri (dikembangkan oleh CSIRO & NADCA) untuk memodelkan interaksi antara **Karakteristik Tekanan Dinamis Mesin Injeksi** (*Machine Hydraulic Capability Line*) dan **Karakteristik Hambatan Hidrolik Cetakan** (*Die Resistance Line*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                        DIAGRAM P - Q² OPERATING WINDOW HPDC                                           |
+-----------------------------------------------------------------------------------------------------------------------+
|   Tekanan Logam                                                                                                       |
|   (P_metal, MPa)                                                                                                      |
|        ▲                                                                                                              |
|   P_max│ ▀▄                                                                                                           |
|        │   ▀▄                                                                                                         |
|        │     ▀▄   Garis Karakteristik Mesin (Machine Line)                                                            |
|        │       ▀▄   P = P_max - K_m * Q²                                                                              |
|        │         ▀▄                                                                                                   |
|   P_op ┼───────────\█/ ◄────────── TITIK KERJA OPERASIONAL (Q_op, P_op)                                               |
|        │           / ▀▄            (Titik Potong Kurva Mesin & Kurva Cetakan)                                         |
|        │          /    ▀▄                                                                                             |
|        │         /       ▀▄                                                                                           |
|        │        /          ▀▄  Garis Hambatan Cetakan (Die Resistance Line)                                           |
|        │       /                 P = K_d * Q²                                                                         |
|        │      /                                                                                                       |
|        │     /  Jendela Kecepatan Gerbang Optimal                                                                     |
|        │    /   (v_gate = 30 - 60 m/s, t_fill = 15 - 45 ms)                                                           |
|        └────┴───────────────────────────────────────► Laju Aliran Kuadrat (Q², m⁶/s²)                                 |
|             0                   Q_op²              Q_max²                                                             |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Persamaan Garis Karakteristik Mesin HPDC (*Machine Hydraulic Line*)

Karakteristik tenaga hidrolik mesin pembuat cetakan dimodelkan sebagai hubungan linier antara tekanan statis logam pada ruang injeksi terhadap kuadrat laju aliran volumetrik $Q^2$:

$$P_{\text{metal}} = P_{\text{max}} - K_{\text{machine}} \cdot Q^2$$

Di mana:
- $P_{\text{max}} = P_{\text{hyd,\max}} \cdot \left( \frac{D_{\text{hyd}}}{D_{\text{plunger}}} \right)^2$ adalah tekanan logam statis maksimum saat laju aliran $Q = 0$.
- $Q_{\text{max}} = v_{\text{plunger,\max}} \cdot \left( \frac{\pi}{4} D_{\text{plunger}}^2 \right)$ adalah laju aliran volumetrik tanpa beban saat hambatan $P = 0$.
- Koefisien impedansi hidrolik mesin ($K_{\text{machine}}$):

$$K_{\text{machine}} = \frac{P_{\text{max}}}{Q_{\text{max}}^2}$$

### 3.2. Persamaan Garis Hambatan Cetakan (*Die Resistance Line*)

Berdasarkan persamaan Bernoulli dan debit aliran orifis, kehilangan tekanan hidrolik saat logam cair melewati saluran masuk sempit (*gate*) dengan luas area $A_g$ dan koefisien debit $C_d$ ($0.55 - 0.75$) dinyatakan oleh:

$$P_{\text{metal}} = \frac{\rho_m}{2 \cdot C_d^2 \cdot A_g^2} \cdot Q^2 = K_{\text{die}} \cdot Q^2$$

Di mana:
- $\rho_m$ adalah massa jenis logam cair ($\text{kg/m}^3$), misalnya $\approx 2450\ \text{kg/m}^3$ untuk paduan aluminium A380 cair.
- $K_{\text{die}} = \frac{\rho_m}{2 C_d^2 A_g^2}$ adalah konstanta hambatan die gating system.

### 3.3. Solusi Titik Operasi Sistem ($Q_{\text{op}}, P_{\text{op}}, v_{\text{gate}}$)

Titik potong antara garis kapabilitas mesin dan garis hambatan die menentukan laju aliran operasi aktual ($Q_{\text{op}}$):

$$P_{\text{max}} - K_{\text{machine}} Q_{\text{op}}^2 = K_{\text{die}} Q_{\text{op}}^2$$

$$Q_{\text{op}} = \sqrt{\frac{P_{\text{max}}}{K_{\text{machine}} + K_{\text{die}}}}$$

$$P_{\text{op}} = K_{\text{die}} \cdot Q_{\text{op}}^2$$

Kecepatan aliran logam cair saat melintasi gerbang masuk (*gate velocity* $v_{\text{gate}}$) adalah:

$$v_{\text{gate}} = \frac{Q_{\text{op}}}{C_c \cdot A_g} \approx \frac{Q_{\text{op}}}{A_g}$$

Waktu pengisian rongga cetakan (*cavity fill time* $t_{\text{fill}}$) untuk volume coran $V_{\text{cavity}}$:

$$t_{\text{fill}} = \frac{V_{\text{cavity}}}{Q_{\text{op}}}$$

---

## 4. Analisis Waktu Pembekuan, Porositas Gas & Pemadatan Intensifikasi

### 4.1. Batas Maksimum Waktu Pengisian Cetakan (Formula Termal NADCA)

Untuk mencegah cacat *cold shut* (garis batas penyatuan dingin) dan *misrun* (aliran tidak penuh), waktu pengisian rongga cetakan $t_{\text{fill}}$ tidak boleh melebihi batas waktu pembekuan lapisan kulit tipis pertama:

$$t_{\text{fill,\max}} = K_T \left[ \frac{T_i - T_s + S_z \cdot \Delta T_f}{T_m - T_d} \right] \cdot w_{\text{avg}}$$

Di mana:
- $K_T$: Faktor konduktivitas termal cetakan ($0.0346\ \text{s/mm}$ untuk cetakan baja H13 standar).
- $T_i$: Suhu tuang logam cair di gerbang masuk ($^\circ\text{C}$).
- $T_s$: Suhu solidus paduan logam ($^\circ\text{C}$).
- $\Delta T_f = T_l - T_s$: Rentang suhu pembekuan antara liquidus dan solidus ($^\circ\text{C}$).
- $S_z$: Fraksi padatan maksimum yang diperbolehkan di ujung aliran ($10\% - 25\%$).
- $T_m$: Titik leleh paduan ($^\circ\text{C}$).
- $T_d$: Suhu permukaan rongga cetakan (*die cavity surface temperature*, $180 - 260\ ^\circ\text{C}$).
- $w_{\text{avg}}$: Ketebalan dinding rata-rata coran ($\text{mm}$).

### 4.2. Model Porositas Gas (*Entrapped Air Porosity*) & Bilangan Reynolds Gerbang

Pola aliran logam cair di gerbang cetakan diklasifikasikan berdasarkan Bilangan Reynolds hidrolik ($Re_g$) dan Bilangan Weber ($We_g$):

$$Re_g = \frac{\rho_m \cdot v_{\text{gate}} \cdot D_{h,g}}{\mu_m}$$

Di mana $D_{h,g} = \frac{4 A_g}{P_g} = \frac{2 w_g t_g}{w_g + t_g}$ adalah diameter hidrolik celah gerbang. Jika $Re_g > 20000$ dan $v_{\text{gate}} > 60\ \text{m/s}$, terjadi atomisasi semprotan bergejolak (*turbulent atomized jet*) yang menjebak udara rongga.

Tekanan residual gas yang terperangkap dalam pori mikro ($P_{\text{gas}}$) selama tahap intensifikasi hidrolik ($P_{\text{intens}}$) mengikuti hukum gas ideal kompresi politropik:

$$V_{\text{pore,final}} = V_{\text{pore,initial}} \left( \frac{P_{\text{amb}}}{P_{\text{intens}}} \right)^{1/n}$$

Di mana $n \approx 1.2 - 1.4$ adalah indeks politropik kompresi gas termal.

### 4.3. Penyusutan Volumetrik & Pembekuan Modulus Chvorinov

Penyusutan pemadatan logam paduan aluminium berkisar antara $3.5\% - 6.5\%$ volume. Waktu pembekuan lokal segmen coran $\tau_{\text{solid}}$ dikendalikan oleh modulus geometris ($M_c = V / A_{\text{cooling}}$):

$$\tau_{\text{solid}} = C_{\text{chvorinov}} \cdot \left( \frac{V}{A_{\text{cooling}}} \right)^2$$

Untuk mencegah porositas susut (*shrinkage porosity*), gradien pembekuan harus diarahkan menuju biskuit shot sleeve (*directional solidification*), dan tekanan pemadatan tahap-3 (*intensification stage pressure*, $P_{\text{intens}} = 60 - 120\ \text{MPa}$) harus diterapkan sebelum gerbang masuk (*gate*) membeku sepenuhnya ($\tau_{\text{gate}} > t_{\text{intens}}$).

---

## 5. Standar Industri, Desain Toleransi & Integritas Coran HPDC

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    KERANGKA STANDAR TEKNIK INDUSTRI UNTUK HPDC                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. NADCA Commercial & Precision Tolerances (Standard Design Guidelines):                                           |
|      - Draft Angle (Kemiringan Dinding Cetakan) : 1.0° - 2.0° untuk dinding luar; 1.5° - 3.0° untuk core pin dalam.    |
|      - Parting Line Mismatch & Flash Control    : Standar batas tonjolan sirip (< 0.15 mm).                           |
|                                                                                                                       |
|   2. ASTM B85 / B85M : Standard Specification for Aluminum-Alloy Die Castings:                                        |
|      - Mengatur komposisi kimia, kekuatan tarik ultimat (UTS >= 310 MPa untuk A380), yield strength, dan elongasi.    |
|                                                                                                                       |
|   3. ASTM E505 : Standard Reference Radiographs for Inspection of Aluminum and Magnesium Die Castings:                |
|      - Kategori tingkat keparahan radiografi X-Ray untuk porositas gas (Gas Porosity Level 1 - 8) dan porositas susut.|
|                                                                                                                       |
|   4. ISO 8062-3 (Geometrical Product Specifications - Castings System of Dimensional Tolerances & Machining Allowances):|
|      - Kelas toleransi coran DGC (Tolerance Grade DGC 4 hingga DGC 7 untuk High-Pressure Casting).                     |
|                                                                                                                       |
|   5. NADCA Die Materials (Special Publication #207) - Premium Quality H13 Tool Steel:                                |
|      - Standar perlakuan panas pendinginan vakum, kekerasan 44 - 48 HRC, ketahanan terhadap thermal fatigue cracking.  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 6. Algoritma & Implementasi Python: HPDC Shot Profiling, P-Q² Engine & Cavity Integrity Analyzer

Berikut adalah kode komputasi modular berbasis Python untuk menghitung kecepatan kritis plunger shot sleeve, menyusun kurva karakteristik mesin dan cetakan dalam diagram $P-Q^2$, menghitung waktu pengisian optimum, dan mengevaluasi indeks porositas coran.

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 572: High-Pressure Die Casting (HPDC) Process Engineering & P-Q² Solver
Author: Industrial Process Systems & Manufacturing Automation Lab
"""

import math
from typing import Dict, List, Tuple, Any

class HPDCSimulator:
    def __init__(
        self,
        machine_clamping_force_tons: float = 850.0,
        hydraulic_pressure_max_bar: float = 160.0,
        hydraulic_cylinder_diam_mm: float = 180.0,
        plunger_diameter_mm: float = 80.0,
        sleeve_length_mm: float = 550.0,
        max_dry_shot_velocity_m_s: float = 6.0,
        alloy_name: str = "A380_Aluminum"
    ):
        # Konversi Satuan SI
        self.clamp_force_N = machine_clamping_force_tons * 9806.65
        self.P_hyd_max = hydraulic_pressure_max_bar * 1e5  # Pa
        self.D_hyd = hydraulic_cylinder_diam_mm * 1e-3     # m
        self.D_plunger = plunger_diameter_mm * 1e-3        # m
        self.L_sleeve = sleeve_length_mm * 1e-3            # m
        self.v_dry_max = max_dry_shot_velocity_m_s         # m/s
        
        # Luas Area Hidrolik & Plunger
        self.A_hyd = math.pi * (self.D_hyd / 2.0) ** 2
        self.A_plunger = math.pi * (self.D_plunger / 2.0) ** 2
        self.V_sleeve_total = self.A_plunger * self.L_sleeve
        
        # Tekanan Statis Maksimum pada Logam Cair (P_max)
        self.intens_ratio = self.A_hyd / self.A_plunger
        self.P_metal_max = self.P_hyd_max * self.intens_ratio  # Pa
        
        # Debit Maksimum Tanpa Beban (Q_max)
        self.Q_max = self.v_dry_max * self.A_plunger  # m3/s
        
        # Karakteristik Impedansi Mesin (K_machine = P_max / Q_max^2)
        self.K_machine = self.P_metal_max / (self.Q_max ** 2)
        
        # Properti Termofisika Paduan Logam
        self.alloy_name = alloy_name
        if "A380" in alloy_name:
            self.rho_liquid = 2450.0   # kg/m3
            self.T_liquidus = 595.0    # deg C
            self.T_solidus = 540.0     # deg C
            self.viscosity = 1.3e-3    # Pa.s
            self.vol_shrinkage = 0.045 # 4.5%
        elif "AZ91D" in alloy_name:
            self.rho_liquid = 1600.0   # kg/m3 (Magnesium)
            self.T_liquidus = 595.0
            self.T_solidus = 470.0
            self.viscosity = 1.2e-3
            self.vol_shrinkage = 0.040
        else: # AlSi10Mg
            self.rho_liquid = 2400.0
            self.T_liquidus = 590.0
            self.T_solidus = 570.0
            self.viscosity = 1.4e-3
            self.vol_shrinkage = 0.050

    def calculate_shot_sleeve_slow_shot(
        self,
        shot_weight_kg: float
    ) -> Dict[str, float]:
        """
        Menghitung fraksi pengisian shot sleeve dan kecepatan kritis plunger tahap-1
        untuk mencegah turbulensi gelombang dan udara terperangkap.
        """
        V_melt = shot_weight_kg / self.rho_liquid
        fill_fraction = V_melt / self.V_sleeve_total
        
        if fill_fraction >= 1.0 or fill_fraction <= 0.05:
            raise ValueError(f"Fraksi pengisian tidak valid: {fill_fraction*100:.1f}%. Harus 15-80%.")
            
        g = 9.81
        Ds = self.D_plunger
        
        # Model Kecepatan Kritis Garber-NADCA
        v1_crit = math.sqrt(g * Ds * (1.0 - fill_fraction) / 2.0)
        
        # Jarak tempuh tahap lambat hingga seluruh udara di atas sleeve terdorong ke gerbang
        stroke_slow = self.L_sleeve * (1.0 - fill_fraction)
        t_slow = stroke_slow / v1_crit if v1_crit > 0 else 0.0
        
        return {
            "shot_weight_kg": shot_weight_kg,
            "melt_volume_cm3": V_melt * 1e6,
            "fill_fraction_pct": fill_fraction * 100.0,
            "critical_slow_shot_velocity_m_s": v1_crit,
            "slow_shot_stroke_mm": stroke_slow * 1e3,
            "slow_shot_duration_s": t_slow
        }

    def solve_pq2_operating_point(
        self,
        gate_area_mm2: float,
        discharge_coeff_Cd: float = 0.65
    ) -> Dict[str, float]:
        """
        Menyelesaikan titik potong hidrolik (Q_op, P_op) antara kurva mesin dan kurva gerbang.
        """
        A_gate = gate_area_mm2 * 1e-6  # m2
        
        # Koefisien Hambatan Die (K_die)
        K_die = self.rho_liquid / (2.0 * (discharge_coeff_Cd ** 2) * (A_gate ** 2))
        
        # Solusi Aliran Operasi Aktual (Q_op)
        Q_op = math.sqrt(self.P_metal_max / (self.K_machine + K_die))
        P_op = K_die * (Q_op ** 2)
        
        # Kecepatan Plunger Tahap Cepat & Kecepatan Gerbang
        v_fast_plunger = Q_op / self.A_plunger
        v_gate = Q_op / A_gate
        
        return {
            "gate_area_mm2": gate_area_mm2,
            "K_die_Pa_per_m6_s2": K_die,
            "Q_op_m3_s": Q_op,
            "Q_op_liters_s": Q_op * 1e3,
            "P_op_metal_bar": P_op * 1e-5,
            "P_op_metal_MPa": P_op * 1e-6,
            "fast_shot_plunger_speed_m_s": v_fast_plunger,
            "gate_velocity_m_s": v_gate
        }

    def evaluate_casting_filling_and_porosity(
        self,
        casting_net_weight_kg: float,
        gate_area_mm2: float,
        avg_wall_thickness_mm: float,
        pour_temp_C: float = 670.0,
        die_surface_temp_C: float = 220.0,
        intensification_pressure_bar: float = 300.0
    ) -> Dict[str, Any]:
        """
        Evaluasi termal pengisian cetakan, waktu beku, dan prediksi porositas.
        """
        V_casting = casting_net_weight_kg / self.rho_liquid
        pq2_res = self.solve_pq2_operating_point(gate_area_mm2)
        
        Q_op = pq2_res["Q_op_m3_s"]
        t_fill_actual_ms = (V_casting / Q_op) * 1000.0  # ms
        
        # Batas Maksimum Waktu Pengisian Termal NADCA
        KT = 0.0346  # Konstanta die H13 baja
        Sz = 0.15    # Max 15% padat
        delta_Tf = self.T_liquidus - self.T_solidus
        T_m = (self.T_liquidus + self.T_solidus) / 2.0
        
        term_temp = (pour_temp_C - self.T_solidus + Sz * delta_Tf) / (T_m - die_surface_temp_C)
        t_fill_max_allowed_ms = KT * term_temp * avg_wall_thickness_mm * 1000.0
        
        # Evaluasi Kecepatan Gerbang
        v_g = pq2_res["gate_velocity_m_s"]
        if v_g < 25.0:
            gate_status = "Sub-optimal (Terlalu Rendah, Risiko Cold Shut)"
        elif 25.0 <= v_g <= 60.0:
            gate_status = "Optimal Window (Aliran Laminar-Transisional Terkendali)"
        else:
            gate_status = "Severe Jet Atomization (Risiko Erosi Die & Gas Entrapment Tinggi)"
            
        # Evaluasi Kebutuhan Gaya Klem Mesin (Projected Area Clamping Force Check)
        projected_area_cm2 = (casting_net_weight_kg / (avg_wall_thickness_mm * 0.1 * self.rho_liquid * 1e-3))
        P_intens_metal_Pa = intensification_pressure_bar * 1e5 * self.intens_ratio
        opening_force_N = (projected_area_cm2 * 1e-4) * P_intens_metal_Pa
        clamping_safety_factor = self.clamp_force_N / (opening_force_N + 1e-6)
        
        return {
            "casting_volume_cm3": V_casting * 1e6,
            "actual_fill_time_ms": t_fill_actual_ms,
            "max_allowed_fill_time_ms": t_fill_max_allowed_ms,
            "fill_time_compliant": t_fill_actual_ms <= t_fill_max_allowed_ms,
            "gate_velocity_m_s": v_g,
            "gate_velocity_assessment": gate_status,
            "die_opening_force_ton": opening_force_N / 9806.65,
            "clamping_safety_factor": clamping_safety_factor,
            "clamping_safe": clamping_safety_factor >= 1.25,
            "operating_metal_pressure_MPa": pq2_res["P_op_metal_MPa"]
        }

# ==============================================================================
# EKSEKUSI SOLVER KASUS INDUSTRI OTOMOTIF (SUBFRAME EV BATTERY CASING A380)
# ==============================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI - SIMULASI PROSES HIGH-PRESSURE DIE CASTING (HPDC)")
    print("Analisis Dinamika Shot Sleeve, Solusi Diagram P-Q² & Kepatuhan Termal NADCA")
    print("=" * 85)
    
    # 1. Inisialisasi Mesin HPDC 850 Ton Cold Chamber
    machine = HPDCSimulator(
        machine_clamping_force_tons=850.0,
        hydraulic_pressure_max_bar=160.0,
        hydraulic_cylinder_diam_mm=180.0,
        plunger_diameter_mm=85.0,
        sleeve_length_mm=580.0,
        max_dry_shot_velocity_m_s=5.5,
        alloy_name="A380_Aluminum"
    )
    
    total_shot_mass = 4.8  # kg (Part + Overflow + Runner + Biscuit)
    part_mass = 3.2        # kg (Net Casting)
    wall_thick = 2.5       # mm
    
    # 2. Hitung Profil Tahap-1 (Slow Shot)
    slow_shot = machine.calculate_shot_sleeve_slow_shot(total_shot_mass)
    print(f"\n[1. ANALISIS SHOT SLEEVE & KECEPATAN KRITIS TAHAP-1]")
    print(f"Total Shot Mass          : {slow_shot['shot_weight_kg']:.2f} kg")
    print(f"Volume Logam Cair        : {slow_shot['melt_volume_cm3']:.1f} cm³")
    print(f"Sleeve Fill Fraction     : {slow_shot['fill_fraction_pct']:.1f} %")
    print(f"Kecepatan Kritis Plunger : {slow_shot['critical_slow_shot_velocity_m_s']:.3f} m/s")
    print(f"Jarak Slow Stroke        : {slow_shot['slow_shot_stroke_mm']:.1f} mm")
    print(f"Durasi Tahap Lambat      : {slow_shot['slow_shot_duration_s']:.2f} detik")
    
    # 3. Analisis Rentang Luas Gerbang (P-Q² Window Iteration)
    gate_sizes_to_test = [180.0, 260.0, 340.0, 420.0]  # mm2
    print(f"\n[2. EVALUASI JENDELA PROSES DIAGRAM P-Q² PADA VARIASI LUAS GERBANG]")
    print("-" * 85)
    print(f"{'Luas Gate (mm²)':<16} {'Q_op (L/s)':<12} {'P_metal (MPa)':<14} {'v_gate (m/s)':<14} {'v_plunger (m/s)':<16} {'Status'}")
    print("-" * 85)
    for Ag in gate_sizes_to_test:
        pq = machine.solve_pq2_operating_point(Ag)
        status = "Optimal" if 30.0 <= pq["gate_velocity_m_s"] <= 55.0 else ("Terlalu Cepat" if pq["gate_velocity_m_s"] > 55.0 else "Terlalu Lambat")
        print(f"{Ag:<16.1f} {pq['Q_op_liters_s']:<12.2f} {pq['P_op_metal_MPa']:<14.1f} {pq['gate_velocity_m_s']:<14.1f} {pq['fast_shot_plunger_speed_m_s']:<16.2f} {status}")
    print("-" * 85)
    
    # 4. Evaluasi Kelayakan Termal & Porositas pada Desain Terpilih (Ag = 260 mm2)
    eval_result = machine.evaluate_casting_filling_and_porosity(
        casting_net_weight_kg=part_mass,
        gate_area_mm2=260.0,
        avg_wall_thickness_mm=wall_thick,
        pour_temp_C=665.0,
        die_surface_temp_C=225.0,
        intensification_pressure_bar=320.0
    )
    
    print(f"\n[3. VERIFIKASI INTEGRITAS PENGISIAN & KELAYAKAN TERMAL (Ag = 260.0 mm²)]")
    print(f"Waktu Pengisian Aktual (t_fill)   : {eval_result['actual_fill_time_ms']:.2f} ms")
    print(f"Batas Maksimum Waktu Isi NADCA   : {eval_result['max_allowed_fill_time_ms']:.2f} ms")
    print(f"Kepatuhan Waktu Isi (Anti-Misrun): {'LOLOS (MEMENUHI SYARAT)' if eval_result['fill_time_compliant'] else 'GAGAL'}")
    print(f"Kecepatan Gerbang Masuk          : {eval_result['gate_velocity_m_s']:.1f} m/s ({eval_result['gate_velocity_assessment']})")
    print(f"Gaya Buka Cetakan Hidrolik       : {eval_result['die_opening_force_ton']:.1f} Ton")
    print(f"Safety Factor Clamping Force     : {eval_result['clamping_safety_factor']:.2f}x ({'AMAN / ZERO FLASH' if eval_result['clamping_safe'] else 'BAHAYA FLASH'})")
    print("=" * 85)
```

---

## 7. Studi Kasus Industri: Reduksi Porositas Gas & Penyusutan pada Housing Transmisi Kendaraan Listrik (EV Inverter Case A380)

### 7.1. Latar Belakang & Identifikasi Defek Awal
Sebuah fasilitas manufaktur Tier-1 komponen otomotif memproduksi wadah inverter aluminium die-cast (A380) dengan berat bersih $2.85\ \text{kg}$ dan ketebalan dinding nominal $2.2\ \text{mm}$. 

Pada lini perakitan akhir, ditemukan tingkat cacat uji kebocoran bertekanan (*pressure leak testing rejection rate*) sebesar $14.2\%$ akibat kebocoran mikro melalui pori-pori gas yang saling berhubungan di area gerbang masuk (*gate porosity*) dan retak susut di bawah bos baut tebal (*thick mounting bosses*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       DIAGNOSTIK AKAR MASALAH HPDC DENGAN DIAGRAM TIGA FASE INJEKSI                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Kondisi Awal (Tingkat Cacat 14.2%):                                                                                  |
|  - Fase 1 (Slow Shot): v_1 = 0.65 m/s konstan (v_1 > v_crit = 0.38 m/s). Membentuk gelombang rollover di dalam sleeve,|
|    memerangkap 8 - 12% volume udara ke dalam aliran logam cair sebelum mencapai runner.                               |
|  - Fase 2 (Fast Shot): Luas gerbang terlalu kecil (A_g = 140 mm²), v_gate = 78 m/s (ekstrem), memicu atomisasi jet    |
|    turbulen dan erosi die steel H13.                                                                                  |
|  - Fase 3 (Intensifikasi): Tekanan intensifikasi terlambat 40 ms karena sensor posisi biskuit tidak terkalibrasi,   |
|    sehingga gerbang membeku duluan (gate freeze) sebelum pemadatan penyusutan selesai.                                |
|                                                                                                                       |
|  Solusi Rekayasa Berbasis Standar NADCA & Solver:                                                                     |
|  1. Optimasi Kecepatan Tahap-1 : Mengurangi v_1 ke profil akselerasi terkontrol (0.18 -> 0.36 m/s), mencegah rollover.|
|  2. Redesain Luas Gerbang Masuk: Memperbesar A_g menjadi 255 mm² (Fan Gate Design) menurunkan v_gate ke 42.5 m/s    |
|     sehingga aliran logam menjadi planar-transisional yang mulus.                                                     |
|  3. Sinkronisasi Squeeze Pin   : Pemasangan pin pemadat hidrolik lokal (Squeeze Pin diameter 12 mm) pada bos baut tebal|
|     yang aktif 1.2 detik pasca pengisian rongga cetakan.                                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.2. Hasil Kualifikasi Kualitas & Efisiensi Biaya Pasca Optimasi
1. **Reduksi Porositas Gas (ASTM E505 Radiografi)**: Tingkat cacat turun dari Kategori Severitas 4 ke Kategori Severitas 1 (bebas pori terhubung).
2. **Tingkat Lolos Uji Kebocoran (*Leak Test Yield*)**: Meningkat dari $85.8\%$ menjadi $99.65\%$, menurunkan *scrap rate* harian dari 170 unit menjadi di bawah 4 unit per shift.
3. **Peningkatan Umur Cetakan (*Die Tooling Life*)**: Erosi gerbang (*gate wash*) dan *thermal heat checking* berkurang, memperpanjang interval perawatan cetakan dari 45.000 shot menjadi 110.000 shot (penghematan biaya *die tooling* tahunan sebesar \$185,000 USD).

---

## 8. Referensi Terverifikasi & Literatur Akademik Standar

1. **North American Die Casting Association (NADCA)** (2020). *Standards for High Pressure Die Casting: Commercial and Precision Tolerances, Machine and Die Design Guidelines (Publication #402 & #207)*. NADCA, Arlington Heights, IL.
2. **ASTM International** (2022). *ASTM B85 / B85M-22: Standard Specification for Aluminum-Alloy Die Castings*. ASTM International, West Conshohocken, PA. DOI: [10.1520/B0085_B0085M-22](https://doi.org/10.1520/B0085_B0085M-22).
3. **Kohlstädt, S., Vynnycky, M., Goeke, S., & Gebauer-Teichmann, A.** (2021). *On Determining the Critical Velocity in the Shot Sleeve of a High-Pressure Die Casting Machine Using Open Source CFD*. Fluids, 6(11), 386. DOI: [10.3390/fluids6110386](https://doi.org/10.3390/fluids6110386).
4. **Crowley, R., Domblesky, J., & Bowman, A.** (2023). *Investigation of shot sleeve distortion and oil cooling in high pressure die casting*. Journal of Manufacturing Processes, 86, 28-39. DOI: [10.1016/j.jmapro.2023.01.028](https://doi.org/10.1016/j.jmapro.2023.01.028).
5. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems (7th Edition)*. John Wiley & Sons, New York.
6. **Campbell, J.** (2015). *Complete Casting Handbook: Metal Casting Processes, Metallurgy, Techniques and Design (2nd Edition)*. Butterworth-Heinemann, Elsevier. DOI: [10.1016/C2013-0-15509-3](https://doi.org/10.1016/C2013-0-15509-3).
