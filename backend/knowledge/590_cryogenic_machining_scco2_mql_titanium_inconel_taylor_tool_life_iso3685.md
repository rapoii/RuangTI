# Modul 590: Cryogenic Machining & Supercritical CO2 (scCO2) Minimum Quantity Lubrication (MQL): Termodinamika Pendinginan LN2/scCO2, Mekanika Keausan Pahat Taylor Lanjutan, Reduksi Gaya Potong, dan Integritas Permukaan Paduan Super Ti-6Al-4V / Inconel 718 (ISO 3685 & ASTM E384)

## 1. Pengantar & Konteks Industri Pemotongan Logam Paduan Sukar-Pemesinan (*Difficult-to-Cut Alloys*)

Dalam industri manufaktur presisi tinggi seperti propulsi kedirgantaraan (*aerospace turbomachinery*), implan biomedis ortopedi (*biomedical titanium implants*), dan bejana reaktor nuklir, penggunaan material paduan super seperti Titanium Ti-6Al-4V (Grade 5) dan Nickel-based Superalloy Inconel 718 merupakan hal yang mutlak karena rasio kekuatan terhadap berat yang luar biasa, ketahanan korosi, serta integritas mekanis pada temperatur ekstrem.

Namun, material-material tersebut diklasifikasikan sebagai material **sangat sukar dimesin (*difficult-to-cut / hard-to-machine alloys*)** akibat sifat termofisika intrinsik:
1. **Konduktivitas Termal Rendah (*Low Thermal Conductivity*)**: Konduktivitas termal Ti-6Al-4V ($\approx 6.7 - 7.5\ \text{W/m}\cdot\text{K}$) dan Inconel 718 ($\approx 11.4\ \text{W/m}\cdot\text{K}$) hanya sekitar $10\% - 15\%$ dari baja struktural. Akibatnya, lebih dari $80\%$ panas pemotongan terkonsentrasi pada zona geser primer (*primary shear zone*) dan zona kontak pahat-geram (*tool-chip interface*), memicu temperatur lokal melebihi $900^\circ\text{C} - 1100^\circ\text{C}$.
2. **Reaktivitas Kimia Tinggi & *Work Hardening***: Pada suhu tinggi, titanium sangat reaktif terhadap material pahat potong (karbida tungsten WC-Co), menyebabkan difusi cepat, keausan kawah (*crater wear*), dan fenomena *Built-Up Edge* (BUE). Selain itu, pengerasan regangan dinamis memicu keausan takik (*notch wear*) parah pada garis kedalaman potong (*depth-of-cut line*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    SKEMATIKA TEKNOLOGI PENDINGINAN KONVENSIONAL VS CRYOGENIC scCO2 + MQL (CRYO-MQL)                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. FLOOD COOLANT KONVENSIONAL (Basah / Emulsi Minyak 5-10%):                                                        |
|     - Konsumsi fluida: 60 - 200 L/jam (Biaya daur ulang tinggi, limbah B3, dermatitis operator).                      |
|     - Fenomena Leidenfrost: Cairan mendidih membentuk selubung uap (vapor blanket), gagal menembus zona kontak mikro.|
|                                                                                                                       |
|  2. CRYOGENIC scCO2 + MQL HYBRID (Eco-Friendly High-Performance Machining):                                           |
|                                                                                                                       |
|         [ Tabung Karbon Dioksida scCO2 ]                   [ Reservoir Bio-Lubricant MQL ]                            |
|             (P ~ 8 - 15 MPa, Cair/Superkritis)                  (Ester Sintetis / Nabati ~ 10-50 mL/jam)               |
|                           │                                                      │                                    |
|                           └───────────────────────┬──────────────────────────────┘                                    |
|                                                   ▼ Sistem Pencampuran Dual-Channel                                   |
|                                           ┌───────────────────────────────┐                                           |
|                                           │ Internal Tool Holder Channel  │                                           |
|                                           └───────────────┬───────────────┘                                           |
|                                                           ▼ Nozel Mikro Khusus (d ~ 0.4 - 0.8 mm)                     |
|                                             Ekspansi Joule-Thomson Ekstrem                                            |
|                                             (scCO2 -> Gas Dingin + Salju Padat CO2, T ~ -78.5°C)                      |
|                                             Dispersi Partikel Minyak MQL Aerosol Bertekanan                           |
|                                                           │                                                           |
|                                                           ▼ Penetrasi Kuat ke Antarmuka Mikro Pahat-Geram             |
|                                                 ╔═══════════════════╗                                                 |
|                                                 ║ Zona Kontak Kawah ║                                                 |
|                                                 ║  Pahat Karbida    ║ ◄── Geram Mengalir Panas                        |
|                                                 ╚═════════════╦═════╝                                                 |
|                                                               │                                                       |
|                                             ──────────────────┴───────────────────                                    |
|                                                    Benda Kerja (Ti-6Al-4V)                                            |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.2 Paradigma Pendinginan Berkelanjutan: Cryogenic LN2 vs scCO2 + MQL
Untuk mengatasi keterbatasan metode basah konvensional (*flood cooling*) dan bahaya lingkungan dari limbah cairan pemotongan (*metalworking fluids* / MWF), dua pendekatan pendinginan lanjutan dikembangkan dalam teknik industri manufaktur hijau (*sustainable manufacturing*):
1. **Cryogenic Liquid Nitrogen (LN2)**: Nitrogen cair disemprotkan pada temperatur kriogenik $T = -196^\circ\text{C}$ (77 K). LN2 memberikan kapasitas penyerapan panas sensibel dan laten yang sangat masif, menurunkan suhu pemotongan secara drastis, namun memiliki daya lumas (*lubricity*) nol.
2. **Supercritical $\text{CO}_2$ ($\text{scCO}_2$) + MQL**: Karbon dioksida dalam fase superkritis ($T_c = 31.1^\circ\text{C}, P_c = 7.38\ \text{MPa}$) bertindak sebagai fluida pelarut dan pembawa berdensitas tinggi dengan viskositas sangat rendah, yang membawa mikro-tetesan pelumas ester sintetis nabati (*vegetable-based ester oils*) berkecepatan tinggi menuju celah kapiler antarmuka pahat-benda kerja. Saat keluar dari nozel internal pahat, ekspansi Joule-Thomson memicu pembentukan campuran gas dingin dan partikel es kering $\text{CO}_2$ ($T \approx -78.5^\circ\text{C}$), memberikan efek sinergis pendinginan instan (*cryo-cooling*) dan pelumasan batas bertekanan tinggi (*extreme boundary lubrication*).

Standar internasional pengujian umur pahat, metalografi, dan keausan:
- **ISO 3685**: *Tool-life testing with single-point turning tools*.
- **ISO 4287 / ISO 21920**: *Geometrical Product Specifications (GPS) — Surface texture: Profile method*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.

---

## 2. Termodinamika Pendinginan Kriogenik & Mekanika Perpindahan Panas

```
+-----------------------------------------------------------------------------------------------------------------------+
|                              KESETIMBANGAN ENERGI DAN PERPINDAHAN PANAS ZONA PEMOTONGAN                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Daya Pemotongan Total:                                                                                              |
|   P_c = F_c * V_c = Q_primary (Zona Geser) + Q_secondary (Gesekan Rake) + Q_tertiary (Gesekan Flank)                  |
|                                                                                                                       |
|   Pelepasan Kalor Kriogenik:                                                                                          |
|   Q_removed = q_convection + q_evaporation + q_sublimation                                                            |
|             = h_cryo * A_contact * (T_tool - T_cryo) + m_dot_cryo * h_fg                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Pembangkitan Daya Kalor Pemotongan
Daya pemotongan total yang diubah menjadi energi termal ($P_c$) saat operasi bubut atau frais dinyatakan oleh produk gaya potong utama $F_c$ dan kecepatan potong $V_c$:

$$P_c = F_c \cdot V_c = \dot{Q}_{\text{total}}$$

Fraksi pembangkitan kalor terdistribusi ke dalam tiga zona diskrit:
1. **Zona Geser Primer ($\dot{Q}_{\text{shear}}$)**: Akibat deformasi plastis adiabatik jaringan kristal benda kerja pada sudut geser $\phi$.
2. **Zona Geser Sekunder ($\dot{Q}_{\text{rake}}$)**: Akibat gesekan geser dan adhesi antara permukaan geram (*chip*) dan muka pahat (*rake face*).
3. **Zona Geser Tersier ($\dot{Q}_{\text{flank}}$)**: Akibat gesekan elastis/plastis antara bidang bebas pahat (*flank face*) dan permukaan benda kerja yang telah terpotong.

$$\dot{Q}_{\text{total}} = \dot{Q}_{\text{shear}} + \dot{Q}_{\text{rake}} + \dot{Q}_{\text{flank}}$$

### 2.2 Efek Joule-Thomson pada Ekspansi Supersonik $\text{scCO}_2$
Fluida $\text{CO}_2$ bertekanan superkritis ($P_{\text{in}} \approx 8 - 15\ \text{MPa}$) mengalami ekspansi isentalpik saat melewati nozel mikro menuju tekanan atmosfer ($P_{\text{atm}} \approx 0.101\ \text{MPa}$). Koefisien Joule-Thomson ($\mu_{\text{JT}}$) didefinisikan sebagai:

$$\mu_{\text{JT}} = \left( \frac{\partial T}{\partial P} \right)_H = \frac{1}{C_p} \left[ T \left( \frac{\partial V}{\partial T} \right)_P - V \right]$$

Karena $\mu_{\text{JT}} > 0$ untuk $\text{CO}_2$ pada kondisi ini, penurunan tekanan drastis ($\Delta P \approx -10\ \text{MPa}$) menghasilkan penurunan temperatur seketika hingga titik sublimasi solidifikasi salju es $\text{CO}_2$:

$$T_{\text{jet}} = T_{\text{sublimation}} \approx -78.5^\circ\text{C} = 194.65\ \text{K}$$

### 2.3 Fluks Perpindahan Panas Konveksi Paksa Kriogenik
Laju pembuangan kalor konveksi paksa oleh jet kriogenik berkecepatan tinggi dimodelkan melalui bilangan Nusselt ($\text{Nu}$):

$$\dot{Q}_{\text{cryo}} = h_{\text{conv}} A_{\text{eff}} (T_{\text{interface}} - T_{\text{cryo}}) + \dot{m}_{\text{cryo}} \Delta h_{\text{phase}}$$

di mana koefisien perpindahan panas konvektif $h_{\text{conv}}$ ditentukan oleh relasi korelasi impinging jet:

$$\text{Nu} = \frac{h_{\text{conv}} d_{\text{nozzle}}}{k_f} = C_{\text{jet}} \text{Re}^m \text{Pr}^n$$

di mana $\text{Re} = \frac{\rho v_{\text{jet}} d_{\text{nozzle}}}{\mu}$ dan $\text{Pr} = \frac{C_p \mu}{k_f}$. Nilai $h_{\text{conv}}$ untuk semburan $\text{LN}_2 / \text{scCO}_2$ mencapai $25.000 - 60.000\ \text{W/m}^2\cdot\text{K}$, dibandingkan hanya $2.000 - 5.000\ \text{W/m}^2\cdot\text{K}$ pada pendinginan basah emulsi standar.

---

## 3. Mekanika Kontak Pahat-Geram & Model Keausan Taylor Lanjutan

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MEKANIKA GESEKAN & DISTRIBUSI TEGANGAN BIDANG RAKE                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     Tegangan Geser Antarmuka τ(x)                                                                                     |
|          ▲                                                                                                            |
|          │    Zona Adhesi / Sticking (τ = k_shear = konstan)                                                          |
|    k_s   ├────────────────────┐                                                                                       |
|          │                    │  Zona Gesekan Luncur / Sliding (Hukum Amontons-Coulomb: τ(x) = μ * σ(x))              |
|          │                    │   ╲                                                                                   |
|          │                    │     ╲                                                                                 |
|          │                    │       ╲                                                                               |
|          └────────────────────┴─────────┴────────────────► Jarak dari Mata Potong x                                   |
|          0                   l_stick    l_contact (Panjang Kontak Total)                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Model Gesekan Zorev pada Bidang Geram
Sesuai teori Zorev, antarmuka kontak pahat-geram dibagi menjadi dua wilayah fisik:
1. **Zona Lengket (*Sticking Region*, $0 \le x \le l_{\text{stick}}$)**: Tegangan normal $\sigma_n(x)$ sangat besar sehingga tegangan geser $\tau_f(x)$ mencapai batas kekuatan luluh geser material benda kerja ($k_s = \sigma_y / \sqrt{3}$):
   $$\tau_f(x) = k_s = \text{konstan}$$
2. **Zona Luncur (*Sliding Region*, $l_{\text{stick}} < x \le l_c$)**: Tegangan normal menurun, dan tegangan geser mengikuti koefisien gesek geser Coulomb $\mu_{\text{fric}}$:
   $$\tau_f(x) = \mu_{\text{fric}} \sigma_n(x)$$

Pemberian aerosol MQL terlarut dalam $\text{scCO}_2$ bertekanan tinggi menembus ke dalam zona mikro-kapiler, menurunkan koefisien gesek $\mu_{\text{fric}}$ dari $0.65 - 0.85$ (dry/cryo murni) menjadi $0.20 - 0.35$, yang secara langsung memperpendek panjang kontak geram total $l_c$.

### 3.2 Persamaan Umur Pahat Taylor Diperluas (*Extended Taylor Tool Life Equation*)
Persamaan empiris Taylor klasik $V T^n = C$ diperluas dengan memasukkan pengaruh temperatur antarmuka efektif ($T_{\text{int}}$), laju pemakanan ($f$), kedalaman potong ($a_p$), dan tekanan fluida pendingin ($P_{\text{cool}}$):

$$T_{\text{life}} = \left[ \frac{C_{\text{Taylor}}}{V_c \cdot f^a \cdot a_p^b} \cdot \left(\frac{T_{\text{ref}}}{T_{\text{int}}}\right)^\gamma \cdot \left(1 + \kappa \cdot P_{\text{cool}}\right) \right]^{1/n}$$

### 3.3 Model Laju Keausan Difusi Usui (*Usui Diffusion Wear Rate Model*)
Pada temperatur tinggi, keausan kawah (*crater wear*) pada pahat karbida dikontrol oleh difusi atomik termal teraktivasi. Laju keausan volumetrik per satuan luas kontak dinyatakan oleh persamaan Usui:

$$\frac{dW_{\text{crater}}}{dt} = C_1 \cdot \sigma_n \cdot V_{\text{slip}} \cdot \exp\left( -\frac{E_a}{R_g \cdot T_{\text{int}}} \right)$$

di mana:
- $\sigma_n$ = Tegangan normal kontak pada bidang garu (MPa)
- $V_{\text{slip}}$ = Kecepatan luncur relatif geram terhadap pahat ($\text{m/s}$)
- $E_a$ = Energi aktivasi difusi material (J/mol)
- $R_g = 8.314\ \text{J/mol}\cdot\text{K}$ (Konstanta gas universal)
- $T_{\text{int}}$ = Temperatur mutlak antarmuka kontak (K)

Penurunan suhu antarmuka dari $950^\circ\text{C}$ ($1223\ \text{K}$) menjadi $450^\circ\text{C}$ ($723\ \text{K}$) melalui pendinginan kriogenik memotong laju difusi eksponensial hingga lebih dari $95\%$, menghasilkan lonjakan umur pahat yang dramatis.

---

## 4. Analisis Gaya Potong, Kekasaran Permukaan, dan Integritas Metalurgi

### 4.1 Dinamika Gaya Potong Lingkaran Merchant (Merchant's Circle)
Sudut geser $\phi$ dimodifikasi oleh perubahan sudut gesek rata-rata $\beta_{\text{fric}} = \arctan(\mu_{\text{fric}})$ dan sudut garu pahat $\gamma_0$:

$$\phi = \frac{\pi}{4} - \frac{\beta_{\text{fric}}}{2} + \frac{\gamma_0}{2}$$

Gaya potong utama $F_c$ dan gaya dorong $F_t$ dihitung melalui relasi tegangan geser dinamis $\tau_s$:

$$F_c = \frac{\tau_s \cdot b \cdot h \cdot \cos(\beta_{\text{fric}} - \gamma_0)}{\sin \phi \cdot \cos(\phi + \beta_{\text{fric}} - \gamma_0)}$$

$$F_t = \frac{\tau_s \cdot b \cdot h \cdot \sin(\beta_{\text{fric}} - \gamma_0)}{\sin \phi \cdot \cos(\phi + \beta_{\text{fric}} - \gamma_0)}$$

di mana $b$ adalah lebar pemotongan ($a_p$) dan $h$ adalah tebal geram belum terpotong ($f$).

### 4.2 Model Kekasaran Permukaan Teoretis & Eksperimental
Kekasaran permukaan rata-rata aritmetika ($R_a$) dipengaruhi oleh jari-jari ujung pahat ($r_\varepsilon$), laju pemakanan ($f$), serta getaran pahat (*tool chatter*):

$$R_a = \frac{f^2}{18 \sqrt{3} \cdot r_\varepsilon} + \Delta R_{\text{BUE/Vib}}$$

Pendinginan kriogenik mengeliminasi pembentukan *Built-Up Edge* ($\Delta R_{\text{BUE}} \to 0$), sehingga kekasaran permukaan aktual mendekati batas kinematis ideal ($R_a < 0.4\ \mu\text{m}$).

---

## 5. Implementasi Python: Simulator Termo-Mekanika Pemotongan Kriogenik scCO2 + MQL & Estimasi Umur Pahat Taylor

Script Python berorientasi industri berikut menghitung kesetimbangan termal antarmuka, gaya pemotongan lingkaran Merchant, laju keausan kawah Usui, dan umur pakai pahat potong untuk pemesinan Titanium Ti-6Al-4V dan Inconel 718.

```python
"""
Cryogenic_Machining_Optimizer.py
Advanced Cryogenic & scCO2-MQL Machining Thermo-Mechanical Solver
Standar: ISO 3685 / ISO 4287 / ASTM E384
"""

import numpy as np
import math
from dataclasses import dataclass
from typing import Dict, Any, Tuple

@dataclass
class MachiningProcessConfig:
    # Parameter Material Benda Kerja
    workpiece_material: str     # Misal 'Ti-6Al-4V' atau 'Inconel 718'
    shear_strength_MPa: float   # Tegangan luluh geser tau_s (MPa)
    thermal_conductivity_W_mK: float # Konduktivitas termal material k_w (W/mK)
    specific_heat_J_kgK: float  # Kalor jenis material Cp (J/kgK)
    density_kg_m3: float        # Densitas material rho (kg/m3)
    activation_energy_J_mol: float # Energi aktivasi difusi kawah Ea (J/mol)
    
    # Parameter Geometri Pahat & Operasi
    cutting_speed_m_min: float  # Kecepatan potong Vc (m/min)
    feed_rate_mm_rev: float     # Gerak makan f (mm/rev)
    depth_of_cut_mm: float      # Kedalaman potong ap (mm)
    rake_angle_deg: float       # Sudut garu gamma_0 (deg)
    nose_radius_mm: float       # Jari-jari hidung pahat r_eps (mm)
    
    # Kondisi Pendinginan & Pelumasan
    cooling_mode: str           # 'DRY', 'FLOOD', 'CRYO_LN2', 'scCO2_MQL'
    coolant_pressure_bar: float # Tekanan suplai pendingin (bar)
    mql_flow_rate_ml_h: float   # Laju alir minyak MQL (mL/jam)

class CryoMachiningSolver:
    def __init__(self, cfg: MachiningProcessConfig):
        self.cfg = cfg
        self.R_gas = 8.314  # Konstanta gas universal (J/mol.K)
        
    def resolve_cooling_environment(self) -> Tuple[float, float, float]:
        """
        Mengembalikan:
        - h_conv: Koefisien perpindahan panas efektif (W/m2.K)
        - T_coolant: Temperatur fluida pendingin (K)
        - friction_coeff: Koefisien gesek antarmuka pahat-geram (mu)
        """
        mode = self.cfg.cooling_mode.upper()
        if mode == "DRY":
            return 25.0, 298.15, 0.78
        elif mode == "FLOOD":
            return 3500.0, 298.15, 0.48
        elif mode == "CRYO_LN2":
            # Nitrogen cair pada 77 K (-196 °C), pendinginan ekstrem tanpa lumas
            return 45000.0, 77.15, 0.55
        elif mode == "SCCO2_MQL":
            # Supercritical CO2 + MQL (Joule-Thomson -78.5 °C + ester biolubricant)
            # Koefisien gesek sangat rendah berkat penetrasi aerosol bertekanan
            h_eff = 32000.0 * (1.0 + 0.005 * self.cfg.coolant_pressure_bar)
            return h_eff, 194.65, 0.24
        else:
            raise ValueError(f"Mode pendinginan '{mode}' tidak dikenal!")

    def calculate_cutting_mechanics(self) -> Dict[str, float]:
        """Menghitung sudut geser, gaya potong Merchant, daya pemotongan, dan tegangan kontak."""
        h_conv, T_cool, mu_fric = self.resolve_cooling_environment()
        
        gamma_rad = math.radians(self.cfg.rake_angle_deg)
        beta_rad = math.atan(mu_fric) # Sudut gesek
        
        # Sudut Geser Merchant: phi = pi/4 - beta/2 + gamma/2
        phi_rad = (math.pi / 4.0) - (beta_rad / 2.0) + (gamma_rad / 2.0)
        phi_deg = math.degrees(phi_rad)
        
        # Luas Penampang Geram
        b = self.cfg.depth_of_cut_mm * 1e-3 # Lebar potong (m)
        h = self.cfg.feed_rate_mm_rev * 1e-3 # Tebal geram sebelum terpotong (m)
        tau_s = self.cfg.shear_strength_MPa * 1e6 # Pa
        
        # Gaya Potong Utama Fc dan Gaya Dorong Ft
        denom = math.sin(phi_rad) * math.cos(phi_rad + beta_rad - gamma_rad)
        f_c = (tau_s * b * h * math.cos(beta_rad - gamma_rad)) / denom
        f_t = (tau_s * b * h * math.sin(beta_rad - gamma_rad)) / denom
        f_resultant = math.sqrt(f_c**2 + f_t**2)
        
        # Kecepatan Potong Vc (m/s) dan Daya Pemotongan Pc (W)
        v_c = (self.cfg.cutting_speed_m_min) / 60.0
        p_cutting_watts = f_c * v_c
        
        # Panjang Kontak Pahat-Geram lc (Model Toropov & Ko)
        l_c_mm = (h * math.sin(phi_rad + beta_rad - gamma_rad) / (math.sin(phi_rad) * math.cos(beta_rad))) * 1.8 * 1e3
        
        return {
            "shear_angle_deg": phi_deg,
            "friction_coeff": mu_fric,
            "cutting_force_Fc_N": f_c,
            "thrust_force_Ft_N": f_t,
            "resultant_force_N": f_resultant,
            "cutting_power_kW": p_cutting_watts * 1e-3,
            "contact_length_mm": l_c_mm,
            "cutting_speed_m_s": v_c
        }

    def solve_thermal_equilibrium(self, mechanics: Dict[str, float]) -> Dict[str, float]:
        """Menyelesaikan neraca termal konduksi-konveksi untuk mengestimasi temperatur antarmuka puncak."""
        h_conv, T_cool, _ = self.resolve_cooling_environment()
        v_c = mechanics["cutting_speed_m_s"]
        f_c = mechanics["cutting_force_Fc_N"]
        
        # Total Kalor Terdisipasi
        q_total_w = mechanics["cutting_power_kW"] * 1e3
        
        # Angka Termal Peclet Pe = rho * Cp * V * h / k_w
        rho = self.cfg.density_kg_m3
        cp = self.cfg.specific_heat_J_kgK
        k_w = self.cfg.thermal_conductivity_W_mK
        h_uncut = self.cfg.feed_rate_mm_rev * 1e-3
        peclet_number = (rho * cp * v_c * h_uncut) / k_w
        
        # Fraksi kalor yang masuk ke pahat (Model Loewen & Shaw)
        r_fraction = 1.0 / (1.0 + 0.75 * math.sqrt(peclet_number * (k_w / 40.0)))
        q_into_tool = q_total_w * r_fraction * 0.25 # Kalor sekunder kontak rake
        
        # Luas Area Pendinginan Efektif pada Pahat
        a_cooling_m2 = (self.cfg.nose_radius_mm * 1e-3) * (mechanics["contact_length_mm"] * 1e-3) * 3.5
        
        # Keseimbangan Panas: Q_tool = Q_conduction_body + Q_cryo_convection
        # T_int = (q_into_tool + h_conv * A * T_cool + G_cond * T_env) / (h_conv * A + G_cond)
        g_conductance = (40.0 * a_cooling_m2) / (2.0e-3) # Konduktivitas badan pahat WC
        
        t_int_kelvin = (q_into_tool + (h_conv * a_cooling_m2 * T_cool) + (g_conductance * 298.15)) / \
                       (h_conv * a_cooling_m2 + g_conductance)
        t_int_celsius = t_int_kelvin - 273.15
        
        return {
            "interface_temp_C": t_int_celsius,
            "interface_temp_K": t_int_kelvin,
            "heat_to_tool_W": q_into_tool,
            "peclet_number": peclet_number,
            "convective_coeff_W_m2K": h_conv
        }

    def estimate_tool_life_and_surface_quality(self, mechanics: Dict[str, float], thermal: Dict[str, float]) -> Dict[str, Any]:
        """Menghitung umur pahat berbasis Taylor-Usui dan estimasi kekasaran permukaan Ra (ISO 4287)."""
        t_k = thermal["interface_temp_K"]
        v_c = self.cfg.cutting_speed_m_min
        f = self.cfg.feed_rate_mm_rev
        ap = self.cfg.depth_of_cut_mm
        r_eps = self.cfg.nose_radius_mm
        
        # 1. Model Laju Keausan Difusi Usui (Crater Wear Rate)
        # dW/dt = C_usui * sigma_n * V_slip * exp(-Ea / (R * T))
        sigma_normal_MPa = mechanics["resultant_force_N"] / (mechanics["contact_length_mm"] * ap * 1e-3 * 1e3 + 1e-6)
        exp_factor = math.exp(-self.cfg.activation_energy_J_mol / (self.R_gas * t_k))
        usui_wear_rate_um_min = 1.2e7 * (sigma_normal_MPa / 1000.0) * (v_c / 60.0) * exp_factor
        
        # 2. Estimasi Umur Pahat Taylor Diperluas (Kriteria VB_max = 0.3 mm / ISO 3685)
        # Kalibrasi eksponen Taylor untuk superalloy Ti-6Al-4V
        n_taylor = 0.28
        c_baseline = 75.0 # Baseline m/min untuk 15 menit umur pahat pada dry cutting
        temp_penalty_ratio = (1173.15 / t_k)**2.2 # Keuntungan termal kriogenik
        
        v_adjusted = v_c / temp_penalty_ratio
        tool_life_minutes = 15.0 * ((c_baseline / max(v_adjusted, 1.0)) ** (1.0 / n_taylor)) * ((0.15 / f)**0.4) * ((1.0 / ap)**0.2)
        tool_life_minutes = max(1.0, min(tool_life_minutes, 360.0)) # Bounding rasional industri
        
        # 3. Kekasaran Permukaan Teoretis & Efek Built-Up Edge
        # Ra_kinematic = f^2 / (18 * sqrt(3) * r_eps)
        ra_kinematic_um = ((f**2) / (18.0 * math.sqrt(3.0) * r_eps)) * 1e3
        bue_chatter_penalty = 0.05 if t_k < 750.0 else (0.45 if t_k < 1050.0 else 0.85)
        ra_actual_um = ra_kinematic_um + bue_chatter_penalty
        
        return {
            "tool_life_minutes": round(tool_life_minutes, 1),
            "crater_wear_rate_um_min": round(usui_wear_rate_um_min, 4),
            "surface_roughness_Ra_um": round(ra_actual_um, 3),
            "kinematic_Ra_um": round(ra_kinematic_um, 3),
            "iso_3685_flank_wear_status": "Lolos Kriteria Kualifikasi" if tool_life_minutes >= 15.0 else "Tool Life Terlalu Pendek (Ganti Parameter)"
        }

# ==========================================
# BENCHMARK KOMPARATIF 4 KONDISI PEMESINAN PADA Ti-6Al-4V
# (DRY vs FLOOD vs CRYO_LN2 vs scCO2_MQL)
# ==========================================
if __name__ == "__main__":
    modes = ["DRY", "FLOOD", "CRYO_LN2", "scCO2_MQL"]
    
    print("=========================================================================================")
    print("      KOMPARASI PERFORMA TERMO-MEKANIKA & UMUR PAHAT PEMESINAN Ti-6Al-4V (ISO 3685)      ")
    print("=========================================================================================")
    print(f"{'Kondisi Pendinginan':<15} | {'Fc (N)':<8} | {'Temp (°C)':<10} | {'Ra (µm)':<8} | {'Wear (µm/min)':<14} | {'Tool Life (min)':<15}")
    print("-----------------------------------------------------------------------------------------")
    
    for m in modes:
        cfg = MachiningProcessConfig(
            workpiece_material="Titanium Ti-6Al-4V Grade 5",
            shear_strength_MPa=650.0,
            thermal_conductivity_W_mK=7.2,
            specific_heat_J_kgK=560.0,
            density_kg_m3=4430.0,
            activation_energy_J_mol=115000.0,
            
            cutting_speed_m_min=85.0,
            feed_rate_mm_rev=0.12,
            depth_of_cut_mm=1.5,
            rake_angle_deg=6.0,
            nose_radius_mm=0.8,
            
            cooling_mode=m,
            coolant_pressure_bar=120.0 if "scCO2" in m else 15.0,
            mql_flow_rate_ml_h=35.0
        )
        
        solver = CryoMachiningSolver(cfg)
        mech = solver.calculate_cutting_mechanics()
        therm = solver.solve_thermal_equilibrium(mech)
        life = solver.estimate_tool_life_and_surface_quality(mech, therm)
        
        print(f"{m:<15} | {mech['cutting_force_Fc_N']:<8.1f} | {therm['interface_temp_C']:<10.1f} | {life['surface_roughness_Ra_um']:<8.3f} | {life['crater_wear_rate_um_min']:<14.4f} | {life['tool_life_minutes']:<15.1f}")
    
    print("=========================================================================================")
```

---

## 6. Studi Kasus Industri Kedirgantaraan: Pemesinan Sudu Turbin Ti-6Al-4V (*Blisk Milling*)

### 6.1 Latar Belakang Masalah
Sebuah manufaktur komponen mesin jet kedirgantaraan memproduksi piringan sudu terintegrasi (*integrally bladed rotor / Blisk*) berbahan titanium Ti-6Al-4V. Pada pemesinan frais berkecepatan tinggi konvensional (*flood coolant* emulsi 8%):
- Umur pahat karbida lapis AlTiN hanya bertahan rata-rata $11.5\ \text{menit}$ akibat keausan kawah termal dan *chipping*.
- Operator terpaksa membatasi kecepatan potong pada $V_c = 55\ \text{m/min}$, mengakibatkan waktu pemesinan per unit (*machining cycle time*) mencapai $4.8\ \text{jam}$.
- Biaya pembuangan limbah emulsi pendingin mencapai \$42.000 per tahun per mesin CNC 5-axis.

### 6.2 Implementasi Sistem Retrofit $\text{scCO}_2 + \text{MQL}$
Pabrik melakukan retrofit spindel internal CNC dengan sistem kriogenik $\text{scCO}_2 + \text{MQL}$ (Nozel mikro ganda $\varnothing\ 0.5\ \text{mm}$ terintegrasi pada dudukan pahat):
- Tekanan Karbon Dioksida: $P_{\text{scCO2}} = 12\ \text{MPa}$ (120 bar).
- Pelumas MQL: Ester sintetis berbahan dasar minyak nabati ramah lingkungan dengan dosis $30\ \text{mL/jam}$.
- Parameter Potong Ditingkatkan: $V_c = 95\ \text{m/min}$ ($+72.7\%$), $f_z = 0.10\ \text{mm/gigi}$, $a_p = 2.0\ \text{mm}$.

### 6.3 Evaluasi Kinerja Manufaktur & Integritas Permukaan (ASTM E384 & ISO 4287)
1. **Peningkatan Umur Pahat (*Tool Life*)**: Umur pakai pahat melonjak dari $11.5\ \text{menit}$ menjadi $48.2\ \text{menit}$ (peningkatan $> 300\%$) meskipun kecepatan potong dinaikkan $72\%$.
2. **Kekasaran Permukaan ($R_a$)**: Nilai kekasaran permukaan turun dari $R_a = 0.78\ \mu\text{m}$ menjadi $R_a = 0.29\ \mu\text{m}$, mengeliminasi proses pemolesan manual (*manual polishing stage*).
3. **Integritas Metalurgi Lapisan Permukaan**: Pengujian mikrostruktur penampang dan uji kekerasan mikro Vickers (ASTM E384) membuktikan tidak adanya lapisan putih getas (*white layer formation*) atau distorsi fasa mikro, serta tegangan sisa permukaan terukur bersifat tekan (*compressive residual stress* $\sigma_{\text{res}} \approx -320\ \text{MPa}$), yang secara drastis meningkatkan ketahanan fatik sudu turbin (*fatigue life endurance*).
4. **Keberlanjutan & Efisiensi Biaya**: Konsumsi daya total pemotongan berkurang $18\%$, lingkungan kerja bebas aerosol kabut minyak berbahaya (*zero hazardous mist*), dan sertifikasi ISO 14001 tercapai.

---

## 7. Referensi Akademis Terverifikasi & Standar Industri

1. **Hu, X., Sun, Z., & Chen, C.** (2025). "Milling Performance of Ti-6Al-4V Titanium Alloy under Supercritical CO2 with Electrostatic Minimum Quantity Lubrication". *Journal of Materials Engineering and Performance*, 34(3), 1420–1432. DOI: [10.1007/s11665-025-12632-1](https://doi.org/10.1007/s11665-025-12632-1).
2. **Zhang, H., Wang, B., & Qu, L.** (2024). "Optimization of Tool Wear and Cutting Parameters in SCCO2-MQL Ultrasonic Vibration Milling of Difficult-to-Cut Composites". *Machines*, 12(9), 646. DOI: [10.3390/machines12090646](https://doi.org/10.3390/machines12090646).
3. **Li, C., Zhang, Y., & Yang, M.** (2023). "Convective Heat Transfer Coefficient Model Under Nanofluid Minimum Quantity Lubrication Coupled with Cryogenic Air Grinding Ti-6Al-4V". In *Thermodynamic Mechanism of MQL Grinding with Nano Bio-lubricant*, Springer, Singapore, pp. 245–289. DOI: [10.1007/978-981-99-6265-5_9](https://doi.org/10.1007/978-981-99-6265-5_9).
4. **Taha-Tijerina, J. J., & Edinbarough, I. A.** (2023). "Comparative Cutting Fluid Study on Optimum Grinding Parameters of Ti-6Al-4V Alloy Using Flood, Minimum Quantity Lubrication (MQL), and Nanofluid MQL (NMQL)". *Lubricants*, 11(6), 250. DOI: [10.3390/lubricants11060250](https://doi.org/10.3390/lubricants11060250).
5. **ISO 3685:1993**: *Tool-life testing with single-point turning tools*. International Organization for Standardization, Geneva.
6. **ISO 4287:1997 / ISO 21920:2021**: *Geometrical product specifications (GPS) — Surface texture: Profile method*. ISO, Geneva.
7. **Shaw, M. C.** (2005). *Metal Cutting Principles* (2nd Edition). Oxford University Press, New York.
8. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th Edition). John Wiley & Sons, Hoboken, NJ.$.
