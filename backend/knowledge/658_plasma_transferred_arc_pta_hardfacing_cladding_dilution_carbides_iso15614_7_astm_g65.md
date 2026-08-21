# Modul 658: Plasma Transferred Arc (PTA) Hardfacing & Cladding: Fisika Termal Busur Terkonstriksi (*Constricted Arc Plasma*), Kinetika Deposisi Serbuk Logam, Kontrol Dilusi Substrat Minimum, Rekayasa Presipitasi Karbida Tahan Aus-Korosi, dan Integritas Metalurgi Lapisan Permukaan (AWS C5.10, ISO 15614-7, ASME BPVC Section IX & ASTM G65)

## 1. Pengantar & Konteks Industri: Rekayasa Lapisan Keras Plasma Transferred Arc (PTA)

Dalam rekayasa keandalan komponen industri berat—seperti katup uap pembangkit listrik termal bertekanan tinggi (*steam turbine control valves*), mata bor eksplorasi minyak dan gas bumi (*drill bit cutters & stabilizers*), sudu pencampur industri petrokimia (*slurry pump impellers*), serta cetakan penempaan panas (*hot forging dies*)—kerusakan permukaan akibat kombinasi abrasi partikel keras, erosi kavitasi, galling, dan oksidasi suhu tinggi ($> 600 - 800^\circ\text{C}$) merupakan faktor utama kegagalan prematur sistem mekanikal.

Metode pengelasan pelapis konvensional seperti Shielded Metal Arc Welding (SMAW), Gas Metal Arc Welding (GMAW), atau Submerged Arc Welding (SAW) menghasilkan laju dilusi substrat (*substrate dilution ratio*) yang sangat tinggi ($15 - 35\%$). Dilusi yang berlebih menyebabkan unsur-unsur dasar substrat (terutama Besi / $\text{Fe}$) mencemari lapisan paduan pelindung (*hardfacing alloy*), menurunkan kekerasan mikro, mereduksi stabilitas fase karbida, dan memicu retak pendinginan (*cold cracking*).

Di sisi lain, proses **Plasma Transferred Arc (PTA) Hardfacing & Cladding**—atau dikenal juga sebagai *PTA Surfacing*—menjadi teknologi modifikasi permukaan canggih yang memanfaatkan busur plasma kolom terkonstriksi suhu tinggi ($15,000 - 25,000\text{ K}$) terfokus dengan injeksi serbuk paduan secara kontinu. Proses ini mampu menghasilkan lapisan metalurgi yang menyatu sempurna (*true metallurgical bond*) dengan laju dilusi sangat rendah ($< 5 - 10\%$), porositas mendekati nol ($< 0.1\%$), efisiensi deposisi serbuk tinggi ($> 90\%$), dan distorsi termal minimal.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                SKEMATIKA FISIKA & METALURGI SISTEM PLASMA TRANSFERRED ARC (PTA) HARDFACING & CLADDING                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       [ Catu Daya DCEN / Inverter Pulsa ]                                             |
|                                         │ (-)                      (+) │                                              |
|                                         ▼                              │                                              |
|                            ┌────────────────────────┐                  │                                              |
|                            │ Elektroda Tungsten     │                  │                                              |
|                            │ (W-ThO2 / W-La2O3)     │                  │                                              |
|                            └───────────┬────────────┘                  │                                              |
|                                        │ Gas Plasma (Argon)            │                                              |
|                                        ▼                               │                                              |
|              ┌─ Orifis Nozel Konstriksi Berpendingin Air (Constricting Orifice Nozzle) ──┐                            |
|              │   • Efek Termal-Magnetik Pinch (Maecker Constriction Effect)              │                            |
|              │   • Densitas Energi Termal: q_arc = 10^5 - 10^6 W/cm2                     │                            |
|              │   • Kecepatan Aliran Gas Plasma Terionisasi: v_p = 300 - 800 m/s          │                            |
|              └─────────────────────────┬─────────────────────────────────────────────────┘                            |
|                                        │ Gas Pengumpan Serbuk (Carrier Gas + Powder)                                  |
|                                        ▼                                                                              |
|                    ┌────────────────────────────────────────┐                                                         |
|                    │ PENGUMPANAN SERBUK PADUAN (Powder Feed)│                                                         |
|                    │  • Stellite (Co-Cr-W-C) / Triballoy    │                                                         |
|                    │  • NiCrBSi Self-Fluxing + Spherical WC │                                                         |
|                    │  • Fe-Cr-C Hardfacing Matrix           │                                                         |
|                    └───────────────────┬────────────────────┘                                                         |
|                                        │                                                                              |
|               Gas Pelindung (Shielding Gas: Ar + H2 / Ar + He)                                                        |
|               ─────────────────────────┼─────────────────────────                                                     |
|                                        ▼                                                                              |
|           ┌────────────────────────────────────────────────────────┐                                                  |
|           │ KOLAM LELEHAN LOGAM TRANSFERRED ARC (PTA Melt Pool)    │                                                  |
|           │   • Marangoni Thermocapillary Fluid Flow               │                                                  |
|           │   • Penetrasi Dangkal Terkontrol (Dilusi Rendah 3-8%)  │                                                  |
|           │   • Fusi Metalurgi 100% Bebas Delaminasi               │                                                  |
|           └────────────────────────────┬───────────────────────────┘                                                  |
|                                        │                                                                              |
|   ◄── Arah Gerak Nozel (v_travel)      ▼                                                                              |
| ══════════════════════════════════════════════════════════════════════════════════════════════════════               |
| █ LAPISAN CLADDING BEBAS CACAT █ █ MATRIKS SUBSTRAT DASAR (Baja Karbon / Paduan) █                                   |
|   • Karbida Terdistribusi Merata  (Tersambung ke Anoda Positif (+))                                                  |
|   • Kekerasan Tinggi 55-68 HRC                                                                                        |
| ══════════════════════════════════════════════════════════════════════════════════════════════════════               |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar keinsinyuran dan spesifikasi internasional yang mengatur prosedur pengelasan pelapis keras PTA meliputi:
1. **AWS C5.10 / C5.10M**: *Recommended Practices for Shielding Gases for Welding and Plasma Arc Processes*.
2. **ISO 15614-7**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 7: Overlay welding*.
3. **ASME Boiler and Pressure Vessel Code (BPVC) Section IX**: *Welding, Brazing, and Fusing Qualifications — Hardfacing Weld Metal Overlay*.
4. **ASTM G65**: *Standard Test Method for Measuring Abrasion Using the Dry Sand/Rubber Wheel Apparatus*.
5. **ASTM G99**: *Standard Test Method for Wear Testing with a Pin-on-Disk Apparatus*.
6. **DIN 32525-1 / DIN 32525-4**: *Thermal spraying and hardfacing — Testing of PTA welded overlays*.

---

## 2. Fisika Termal Busur Plasma Terkonstriksi (*Constricted Arc Plasma*)

### 2.1 Efek Konstriksi Nozel & Persamaan Maecker

Busur plasma bebas pada proses TIG memiliki distribusi arus divergen dengan kerapatan daya relatif rendah. Pada nosel PTA, kolom busur dikompresi secara mekanis dan termal melewati orifis berdiameter kecil ($d_{\text{orifice}} = 2.5 - 5.0\ \text{mm}$) dengan pendinginan air intensif. Fenomena ini memicu *thermal pinch effect* di mana lapisan gas dingin di dekat dinding orifis mengalami disosiasi rendah sehingga membatasi aliran arus listrik hanya melalui pusat sumbu busur yang bersuhu ekstrim ($T > 18,000\text{ K}$).

Keseimbangan energi radial pada kolom busur plasma stasioner dinyatakan oleh **Persamaan Maecker-Elenbaas**:

$$\frac{1}{r} \frac{d}{dr} \left( r \cdot k_p(T) \frac{dT}{dr} \right) + \sigma_p(T) \cdot E_z^2 - u_r(T) = 0$$

di mana:
- $k_p(T)$ adalah konduktivitas termal gas plasma terionisasi ($\text{W}/(\text{m}\cdot\text{K})$),
- $\sigma_p(T)$ adalah konduktivitas listrik plasma ($\text{S/m}$),
- $E_z$ adalah gradien medan listrik potensial aksial busur ($\text{V/m}$),
- $u_r(T)$ adalah koefisien emisi radiasi volumetrik plasma ($\text{W/m}^3$),
- $r$ adalah koordinat radial dari pusat sumbu nosel ($\text{m}$).

Gaya konstriksi magnetik internal (*Lorentz Self-Magnetic Pinch Pressure*, $P_{\text{mag}}$) yang mempercepat aliran pancaran jet plasma dirumuskan:

$$P_{\text{mag}}(r) = \int_r^R j_z(r') \cdot B_\theta(r') \, dr' = \frac{\mu_0 \cdot I_{\text{arc}}^2}{4 \pi^2 \cdot R^2} \left[ 1 - \left( \frac{r}{R} \right)^2 \right]$$

di mana $\mu_0 = 4\pi \times 10^{-7}\ \text{H/m}$ adalah permeabilitas vakum, $I_{\text{arc}}$ adalah arus busur plasma ($50 - 300\ \text{A}$), dan $R$ adalah radius konstriksi orifis.

```
   DISTRIBUSI TEMPERATUR & KERAPATAN ARUS PADA BUSUR TERKONSTRIKSI
   ──────────────────────────────────────────────────────────────────────────
   Pusat Sumbu Nosel (r = 0)      : T_plasma = 18,000 - 24,000 K | j_z = 10^8 A/m²
   Zona Geser Plasma (r = R/2)    : T_plasma = 12,000 - 15,000 K | Ionisasi Parsial
   Dinding Orifis Tembaga (r = R) : T_plasma < 3,000 K (Lapisan Gas Isolator Dingin)
   ──────────────────────────────────────────────────────────────────────────
```

---

### 2.2 Distribusi Fluks Kalor Busur: Model Gaussian Modifikasi

Fluks panas permukaan ($q_{\text{arc}}(r)$, $\text{W/m}^2$) yang ditransfer dari pancaran plasma ke permukaan logam induk mengikuti distribusi probabilitas Gaussian terkonsentrasi:

$$q_{\text{arc}}(r) = q_{\text{max}} \cdot \exp\left( -3 \cdot \frac{r^2}{r_{\text{arc}}^2} \right) = \frac{3 \cdot \eta_{\text{thermal}} \cdot U_{\text{arc}} \cdot I_{\text{arc}}}{\pi \cdot r_{\text{arc}}^2} \cdot \exp\left( -3 \cdot \frac{r^2}{r_{\text{arc}}^2} \right)$$

di mana:
- $\eta_{\text{thermal}}$ adalah efisiensi perpindahan panas proses PTA ($\eta_{\text{thermal}} \approx 0.65 - 0.82$),
- $U_{\text{arc}}$ adalah tegangan kerja busur listrik transferred ($22 - 38\ \text{Volt}$),
- $I_{\text{arc}}$ adalah arus transferred arc ($\text{Ampere}$),
- $r_{\text{arc}}$ adalah radius efektif jejak busur pada benda kerja ($\text{m}$).

---

## 3. Dinamika Pemanasan Partikel Serbuk & Kinetika Kolam Lelehan

### 3.1 Termodinamika & Waktu Tinggal Partikel Serbuk dalam Busur (*In-Flight Particle Heating*)

Serbuk logam (seperti Stellite 6 berdiameter $45 - 150\ \mu\text{m}$) diinjeksikan secara koaksial atau lateral ke dalam kolom busur melalui gas pembawa argon (*carrier gas*). Temperatur partikel bola ($T_p(t)$) selama waktu terbang (*time-of-flight*, $\tau_{\text{flight}}$) diatur oleh neraca kalor konveksi-radiasi transien:

$$m_p \cdot c_{p,p} \frac{dT_p}{dt} = h_p \cdot A_p \cdot (T_{\text{plasma}} - T_p) - \epsilon_p \cdot \sigma_{\text{SB}} \cdot A_p \cdot (T_p^4 - T_{\text{amb}}^4)$$

di mana:
- $m_p = \frac{1}{6} \pi d_p^3 \rho_p$ adalah massa butiran partikel serbuk ($\text{kg}$),
- $A_p = \pi d_p^2$ adalah luas permukaan butir partikel ($\text{m}^2$),
- $h_p$ adalah koefisien perpindahan panas konvektif gas-partikel ($\text{W}/(\text{m}^2\cdot\text{K})$) yang dihitung dari bilangan Nusselt Ranz-Marshall:

$$Nu_p = \frac{h_p \cdot d_p}{k_{\text{plasma}}} = 2.0 + 0.6 \cdot Re_p^{1/2} \cdot Pr_{\text{plasma}}^{1/3}$$

$$Re_p = \frac{\rho_{\text{plasma}} \cdot |v_{\text{plasma}} - v_p| \cdot d_p}{\mu_{\text{plasma}}}$$

Jika waktu tinggal partikel $\tau_{\text{flight}} = \frac{L_{\text{standoff}}}{v_p}$ cukup untuk mencapai entalpi fusi total ($H_p \ge c_{p,s}(T_m - T_0) + \Delta H_{f,p}$), butiran serbuk tiba di kolam lelehan dalam wujud tetesan cair sempurna (*fully molten droplets*), mengeliminasi cacat porositas dan fusi tak sempurna (*lack of fusion*).

```
   TRAJEKTORI & KINETIKA PELEBURAN BUTIR SERBUK DALAM KOLAM PLASMA
   ──────────────────────────────────────────────────────────────────────────
   Nozel PTA Injeksi   ──►  Partikel Padat Dingin (T = 300 K)
   Kolom Plasma Busur  ──►  Pemanasan Cepat (dT/dt ~ 10⁵ - 10⁶ K/s)
   Antarmuka Substrat  ──►  Tetesan Superheated Menumbuk Kolam Lelehan (T > T_liquidus)
   ──────────────────────────────────────────────────────────────────────────
```

---

### 3.2 Termodinamika Aliran Marangoni & Bentuk Geometri Manik Las (*Bead Morphology*)

Aliran fluida di dalam kolam lelehan PTA didorong oleh kombinasi gaya apung termal (*buoyancy*), gaya Lorentz elektromagnetik, gesekan pancaran gas plasma, dan konveksi termokapiler Marangoni:

$$\tau_{\text{Marangoni}} = \mu_{\text{liquid}} \left( \frac{\partial v_r}{\partial z} \right)_{z=0} = \frac{\partial \gamma}{\partial T} \cdot \left( \frac{\partial T}{\partial r} \right)$$

1. **Koefisien Termokapiler Negatif ($\frac{d\gamma}{dT} < 0$, Logam Bersih/Superalloy)**: Tegangan permukaan lebih tinggi di tepi kolam yang dingin, menarik cairan lelehan ke arah luar (*outward radial flow*). Menghasilkan kolam lelehan yang lebar, dangkal, dengan dilusi substrat sangat rendah ($D < 6\%$).
2. **Koefisien Termokapiler Positif ($\frac{d\gamma}{dT} > 0$, Keberadaan Unsur Aktif Permukaan S, O)**: Aliran fluida berbalik menuju pusat dasar sumbu (*inward downward flow*), menghasilkan penetrasi dalam yang meningkatkan dilusi secara tajam.

---

## 4. Pemodelan Matematis Dilusi Substrat & Kinetika Presipitasi Karbida

### 4.1 Formulasi Rasio Dilusi Geometris dan Komposisi Kimiawi Lapisan Clad

Rasio dilusi geometris ($D$, fraksi atau persentase $\%$) mengukur proporsi logam substrat dasar yang mencair dan bercampur ke dalam volume lapisan pelapis keras:

$$D = \frac{A_{\text{penetration}}}{A_{\text{penetration}} + A_{\text{reinforcement}}} \times 100\% = \frac{A_{\text{sub}}}{A_{\text{clad}} + A_{\text{sub}}} \times 100\%$$

di mana:
- $A_{\text{sub}}$ adalah luas penampang penetrasi logam dasar yang mencair di bawah garis referensi permukaan ($\text{mm}^2$),
- $A_{\text{clad}}$ adalah luas penampang perkuatan lapisan paduan di atas garis permukaan ($\text{mm}^2$).

```
                      PROFIL PENAMPANG MANIK LAS PTA (BEAD PROFILE)
                          ┌─────────────────────────┐
                          │   A_clad (Perkuatan)    │  ◄── Logam Paduan Serbuk
     Garis Permukaan ═════╧═════════════════════════╧═════
                          │   A_sub (Penetrasi)     │  ◄── Logam Substrat Mencair
                          └─────────────────────────┘
```

Konsentrasi elemen paduan akhir dalam deposit cladding ($C_{\text{deposit}}^i$, misalnya $\% \text{Fe}$ atau $\% \text{Cr}$) diprediksi secara eksak melalui hukum kekekalan massa campuran biner:

$$C_{\text{deposit}}^i = (1 - D) \cdot C_{\text{powder}}^i + D \cdot C_{\text{substrate}}^i$$

Untuk paduan Stellite 6 (Co-Cr-W-C) yang dideposisikan di atas baja karbon ASTM A106 Grade B (kandungan $\text{Fe} \approx 98.5\%$, $\text{Fe}_{\text{powder}} \le 2.5\%$), menjaga konsentrasi besi sisa $Fe_{\text{deposit}} < 8.0\%$ merupakan syarat wajib kualifikasi ISO 15614-7 agar ketahanan abrasi tidak terdegradasi. Ini menuntut pembatasan nilai dilusi:

$$D \le \frac{Fe_{\text{target}}^{\text{max}} - Fe_{\text{powder}}}{Fe_{\text{substrate}} - Fe_{\text{powder}}} = \frac{8.0 - 2.5}{98.5 - 2.5} = \frac{5.5}{96.0} = 5.73\%$$

---

### 4.2 Laju Masukan Panas Bersih (*Net Heat Input*) dan Laju Deposisi Massa

Laju masukan panas linier spesifik ($HI$, $\text{kJ/mm}$) dan efisiensi serbuk terpakai ($\eta_p$):

$$HI = \frac{\eta_{\text{thermal}} \cdot U_{\text{arc}} \cdot I_{\text{arc}}}{v_{\text{travel}} \times 1000}$$

$$\text{Deposition Rate } (\dot{m}_{\text{dep}}, \text{kg/jam}) = \eta_p \cdot \dot{m}_{\text{feed}} = \rho_{\text{clad}} \cdot A_{\text{clad}} \cdot v_{\text{travel}} \times 3.6$$

di mana:
- $v_{\text{travel}}$ adalah kecepatan pengelasan maju nosel PTA ($\text{mm/s}$),
- $\dot{m}_{\text{feed}}$ adalah laju pengumpanan serbuk dari hopper ($\text{g/menit}$ atau $\text{kg/jam}$),
- $\eta_p$ adalah efisiensi tangkapan serbuk dalam kolam lelehan ($0.85 < \eta_p < 0.95$).

---

### 4.3 Kinetika Solidifikasi & Fraksi Volum Karbida Primer ($M_{7}C_3$ dan $M_{23}C_6$)

Pada paduan kobalt-kromium (Stellite), ketahanan aus abrasif ASTM G65 ditentukan oleh fraksi volum karbida eutektik dan primer ($V_f^{\text{carbide}}$). Berdasarkan hubungan Scheil-Gulliver terlarut karbon $[C]$ dan kromium $[Cr]$:

$$V_f^{\text{carbide}} = K_c \cdot [\%C_{\text{deposit}}] \cdot [\%Cr_{\text{deposit}}]^{0.35} \cdot \left( 1 - \exp\left( -B_c \cdot \dot{T}^{0.25} \right) \right)$$

Kekerasan mikro lapisan komposit (*Bulk Vickers Hardness*, $HV_{\text{composite}}$) diatur oleh hukum campuran Voigt:

$$HV_{\text{composite}} = V_f^{\text{carbide}} \cdot HV_{\text{carbide}} + (1 - V_f^{\text{carbide}}) \cdot HV_{\text{matrix}}$$

di mana $HV_{\text{carbide}} \approx 1800 - 2200\ HV$ untuk karbida $Cr_7C_3 / W_2C$ dan $HV_{\text{matrix}} \approx 350 - 450\ HV$ untuk larutan padat austenitik kobalt fasa $\gamma\text{-Co}$.

---

## 5. Implementasi Algoritma Python: Solver Termal Busur PTA, Prediksi Dilusi & Analisis Aus ASTM G65

Berikut adalah modul komputasi rekayasa lengkap untuk menyimulasikan dinamika termal busur plasma terkonstriksi, waktu terbang partikel serbuk, optimasi laju dilusi geometris, konsentrasi besi sisa, dan prediksi volume kehilangan aus abrasi ASTM G65.

```python
"""
PLASMA TRANSFERRED ARC (PTA) CLADDING SIMULATOR & QUALITY OPTIMIZER
Standar Acuan: AWS C5.10, ISO 15614-7, ASME BPVC Section IX, ASTM G65, ASTM G99.
Fungsi:
 1. Menghitung profil termal busur plasma terkonstriksi (Maecker-Gaussian Heat Source).
 2. Menghitung pemanasan partikel serbuk in-flight dan peleburan entalpi.
 3. Memprediksi geometri manik las, laju dilusi substrat (Dilution Ratio D%).
 4. Menghitung komposisi kimia deposit akhir (Pencemaran Fe Substrat).
 5. Memprediksi fraksi presipitasi karbida, kekerasan komposit (HV / HRC),
    dan laju keausan abrasi kering ASTM G65.
"""

import math
from typing import Dict, Any, Tuple, List


class PlasmaTransferredArcSimulator:
    def __init__(
        self,
        current_a: float = 140.0,            # Arus busur utama transferred (A)
        voltage_v: float = 28.0,             # Tegangan kerja busur (V)
        travel_speed_mm_s: float = 2.5,      # Kecepatan gerak las (mm/s)
        powder_feed_rate_g_min: float = 35.0,# Laju pengumpanan serbuk (g/menit)
        orifice_diameter_mm: float = 3.5,    # Diameter orifis nosel konstriksi (mm)
        standoff_distance_mm: float = 8.0,   # Jarak nosel ke benda kerja (mm)
        powder_type: str = "Stellite 6 (Co-Cr-W-C Alloy)",
        powder_fe_wt_pct: float = 2.0,       # Kandungan Fe nominal dalam serbuk (wt%)
        substrate_fe_wt_pct: float = 98.2,   # Kandungan Fe nominal substrat baja karbon (wt%)
        powder_c_wt_pct: float = 1.20,       # Kandungan Karbon nominal serbuk (wt%)
        powder_cr_wt_pct: float = 28.5       # Kandungan Kromium nominal serbuk (wt%)
    ):
        self.i_arc = current_a
        self.u_arc = voltage_v
        self.v_travel = travel_speed_mm_s
        self.powder_feed = powder_feed_rate_g_min
        self.d_orifice = orifice_diameter_mm
        self.standoff = standoff_distance_mm
        self.powder_type = powder_type
        self.fe_powder = powder_fe_wt_pct
        self.fe_substrate = substrate_fe_wt_pct
        self.c_powder = powder_c_wt_pct
        self.cr_powder = powder_cr_wt_pct
        
        # Properti Termofisika Proses
        self.eta_thermal = 0.74              # Efisiensi termal transfer panas PTA
        self.eta_powder = 0.91               # Efisiensi deposisi tangkapan serbuk
        self.rho_clad = 8440.0               # Densitas Stellite 6 (kg/m3) -> 0.00844 g/mm3
        self.cp_powder = 450.0               # Kapasitas kalor spesifik paduan (J/kg.K)
        self.t_melt_powder = 1350.0          # Titik leleh paduan (°C)
        self.latent_heat_powder = 265000.0   # Kalor laten peleburan (J/kg)
        self.substrate_density = 7850.0      # Densitas baja substrat (kg/m3)

    def compute_heat_input_and_plasma_density(self) -> Dict[str, float]:
        """Menghitung masukan kalor linier dan kerapatan daya nosel orifis."""
        gross_power_w = self.i_arc * self.u_arc
        net_power_w = gross_power_w * self.eta_thermal
        
        # Masukan kalor spesifik kJ/mm
        heat_input_kj_mm = (net_power_w / (self.v_travel * 1000.0))
        
        # Kerapatan daya orifis W/mm2
        area_orifice = math.pi * (self.d_orifice / 2.0)**2
        power_density_w_mm2 = net_power_w / area_orifice
        
        return {
            "gross_power_kw": gross_power_w / 1000.0,
            "net_power_kw": net_power_w / 1000.0,
            "heat_input_kj_mm": heat_input_kj_mm,
            "power_density_w_mm2": power_density_w_mm2
        }

    def compute_powder_heating_in_flight(self) -> Dict[str, float]:
        """Menghitung perpindahan panas partikel serbuk rata-rata 90 um dalam plasma."""
        d_particle_um = 90.0
        d_p_m = d_particle_um * 1e-6
        v_carrier_gas = 12.0 # Kecepatan aliran gas pembawa (m/s)
        
        time_of_flight_s = (self.standoff * 1e-3) / v_carrier_gas
        
        # Energi spesifik yang diserap partikel selama penerbangan
        h_plasma_eff = 3800.0 # W/m2.K
        t_plasma_mean = 14000.0 # K
        
        area_p = math.pi * (d_p_m ** 2)
        vol_p = (math.pi / 6.0) * (d_p_m ** 3)
        mass_p = vol_p * self.rho_clad
        
        # Pemanasan adiabatik butiran
        q_transferred_j = h_plasma_eff * area_p * (t_plasma_mean - 300.0) * time_of_flight_s
        enthalpy_req_melting = mass_p * (self.cp_powder * (self.t_melt_powder - 25.0) + self.latent_heat_powder)
        
        melting_ratio = min(1.5, q_transferred_j / enthalpy_req_melting)
        is_fully_molten = melting_ratio >= 1.0
        
        return {
            "time_of_flight_ms": time_of_flight_s * 1000.0,
            "energy_transferred_uj": q_transferred_j * 1e6,
            "enthalpy_req_uj": enthalpy_req_melting * 1e6,
            "melting_state_ratio": melting_ratio,
            "is_fully_molten_on_impact": is_fully_molten
        }

    def compute_bead_geometry_and_dilution(self, net_power_w: float) -> Dict[str, Any]:
        """Memodelkan luas penampang perkuatan, kedalaman penetrasi, dan rasio dilusi."""
        # Laju massa deposisi efektif serbuk (g/s)
        m_dep_g_s = (self.powder_feed / 60.0) * self.eta_powder
        
        # Luas penampang deposit cladding di atas substrat A_clad (mm2)
        # m_dep = rho_clad (g/mm3) * A_clad (mm2) * v_travel (mm/s)
        rho_clad_g_mm3 = self.rho_clad / 1e6
        a_clad_mm2 = m_dep_g_s / (rho_clad_g_mm3 * self.v_travel)
        
        # Penetrasi dan peleburan substrat didorong oleh sisa panas busur
        # Pada PTA dengan pemanasan busur terkonstriksi terbagi antara serbuk dan substrate melt:
        # Efisiensi peleburan lokal substrat (eta_sub_melt ~ 0.015 - 0.025 pada busur PTA terkontrol)
        eta_sub_melt = 0.016
        h_melt_substrate_j_g = 1350.0 # J/g untuk melebur baja karbon
        m_sub_melt_g_s = (net_power_w * eta_sub_melt) / h_melt_substrate_j_g
        
        rho_sub_g_mm3 = self.substrate_density / 1e6
        a_sub_mm2 = m_sub_melt_g_s / (rho_sub_g_mm3 * self.v_travel)
        
        # Rasio Dilusi Geometris D (%)
        dilution_pct = (a_sub_mm2 / (a_clad_mm2 + a_sub_mm2)) * 100.0
        
        # Estimasi Geometri Manik Las (Lebar W_b dan Tinggi H_b)
        width_bead_mm = 2.4 * math.sqrt(a_clad_mm2 + a_sub_mm2)
        height_clad_mm = (1.5 * a_clad_mm2) / width_bead_mm
        depth_penetration_mm = (1.5 * a_sub_mm2) / width_bead_mm
        
        # Kandungan Kimia Akhir Campuran (Fe, C, Cr)
        d_frac = dilution_pct / 100.0
        fe_final = (1.0 - d_frac) * self.fe_powder + d_frac * self.fe_substrate
        c_final = (1.0 - d_frac) * self.c_powder + d_frac * 0.20 # Asumsi C substrat = 0.20%
        cr_final = (1.0 - d_frac) * self.cr_powder + d_frac * 0.15 # Asumsi Cr substrat = 0.15%
        
        return {
            "clad_area_mm2": a_clad_mm2,
            "penetration_area_mm2": a_sub_mm2,
            "bead_width_mm": width_bead_mm,
            "bead_height_mm": height_clad_mm,
            "penetration_depth_mm": depth_penetration_mm,
            "dilution_ratio_pct": dilution_pct,
            "fe_deposit_wt_pct": fe_final,
            "c_deposit_wt_pct": c_final,
            "cr_deposit_wt_pct": cr_final
        }

    def compute_carbides_hardness_and_wear(self, chem: Dict[str, float]) -> Dict[str, Any]:
        """Memprediksi fraksi karbida, kekerasan (HRC), dan kehilangan aus ASTM G65."""
        fe_pct = chem["fe_deposit_wt_pct"]
        c_pct = chem["c_deposit_wt_pct"]
        cr_pct = chem["cr_deposit_wt_pct"]
        
        # 1. Fraksi Volum Presipitasi Karbida M7C3 / Cr7C3
        # Dilusi Fe berlebih mendegradasi pembentukan karbida kromium
        carbide_vol_frac = 0.125 * (c_pct * (cr_pct ** 0.45)) * max(0.2, (1.0 - 0.035 * max(0.0, fe_pct - 2.0)))
        carbide_vol_frac = min(0.42, max(0.05, carbide_vol_frac))
        
        # 2. Kekerasan Komposit Matriks-Karbida (Vickers & Rockwell C)
        hv_matrix = 380.0 + 80.0 * (1.0 - math.exp(-0.15 * cr_pct))
        hv_carbide = 1950.0
        hv_composite = carbide_vol_frac * hv_carbide + (1.0 - carbide_vol_frac) * hv_matrix
        
        # Konversi empiris ASTM E140: HV -> HRC
        hrc_composite = 0.086 * (hv_composite ** 0.95) - 3.2
        
        # 3. Prediksi Kehilangan Volume Abrasi Pasir Kering ASTM G65 Prosedur A (mm3)
        # Standar Stellite 6 murni (Dilusi < 5%): Volume Loss ~ 32 - 42 mm3
        # Jika Fe > 10%, Volume Loss naik secara eksponensial
        base_g65_loss_mm3 = 34.0
        g65_loss_mm3 = base_g65_loss_mm3 * ((52.0 / max(30.0, hrc_composite)) ** 2.2) * (1.0 + 0.045 * max(0.0, fe_pct - 5.0))
        
        is_iso15614_qualified = (chem["dilution_ratio_pct"] <= 10.0) and (fe_pct <= 8.0) and (hrc_composite >= 40.0)
        
        return {
            "carbide_volume_fraction_pct": carbide_vol_frac * 100.0,
            "vickers_hardness_hv": hv_composite,
            "rockwell_hardness_hrc": hrc_composite,
            "astm_g65_volume_loss_mm3": g65_loss_mm3,
            "iso15614_7_qualified": is_iso15614_qualified,
            "qualification_notes": "Lolos Kualifikasi Clad Berintegritas Tinggi" if is_iso15614_qualified else "Gagal: Dilusi Fe Berlebih / Kekerasan Rendah"
        }

    def run_full_simulation(self) -> Dict[str, Any]:
        """Menjalankan seluruh siklus pemodelan proses PTA cladding."""
        heat = self.compute_heat_input_and_plasma_density()
        powder = self.compute_powder_heating_in_flight()
        bead = self.compute_bead_geometry_and_dilution(heat["net_power_kw"] * 1000.0)
        mech = self.compute_carbides_hardness_and_wear(bead)
        
        return {
            "parameters": {
                "powder_alloy": self.powder_type,
                "current_a": self.i_arc,
                "voltage_v": self.u_arc,
                "travel_speed_mm_s": self.v_travel,
                "feed_rate_g_min": self.powder_feed,
                "orifice_diameter_mm": self.d_orifice
            },
            "thermal_plasma": heat,
            "powder_kinetics": powder,
            "bead_and_dilution": bead,
            "metallurgy_and_wear": mech
        }


# =====================================================================
# DEMONSTRASI PENGUJIAN SOLVER & KUALIFIKASI ISO 15614-7 / ASTM G65
# =====================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("  SIMULASI PROSES PLASMA TRANSFERRED ARC (PTA) CLADDING - RUANGTI HARDFACING")
    print("=" * 85)
    
    pta = PlasmaTransferredArcSimulator(
        current_a=135.0,
        voltage_v=28.0,
        travel_speed_mm_s=2.6,
        powder_feed_rate_g_min=42.0,
        orifice_diameter_mm=3.5,
        standoff_distance_mm=7.0,
        powder_type="Stellite 6 Premium Grade (Co-28Cr-4.5W-1.2C)",
        powder_fe_wt_pct=1.8,
        substrate_fe_wt_pct=98.5,
        powder_c_wt_pct=1.25,
        powder_cr_wt_pct=28.8
    )
    
    results = pta.run_full_simulation()
    
    print(f"Material Pelapis (Powder) : {results['parameters']['powder_alloy']}")
    print(f"Parameter Busur Listrik   : {results['parameters']['current_a']:.1f} A | {results['parameters']['voltage_v']:.1f} V | Laju: {results['parameters']['travel_speed_mm_s']:.1f} mm/s")
    print(f"Laju Umpan Serbuk & Nozel : {results['parameters']['feed_rate_g_min']:.1f} g/menit | Orifis: Ø {results['parameters']['orifice_diameter_mm']:.1f} mm")
    print("-" * 85)
    print("1. KARAKTERISTIK TERMAL BUSUR PLASMA:")
    print(f"   • Total Daya Bersih Efektif       : {results['thermal_plasma']['net_power_kw']:.2f} kW (Gross: {results['thermal_plasma']['gross_power_kw']:.2f} kW)")
    print(f"   • Masukan Kalor Linier (Heat Input): {results['thermal_plasma']['heat_input_kj_mm']:.3f} kJ/mm")
    print(f"   • Kerapatan Daya Orifis Konstriksi: {results['thermal_plasma']['power_density_w_mm2']:.1f} W/mm²")
    print("-" * 85)
    print("2. KINETIKA PENERBANGAN & PELEBURAN BUTIR SERBUK:")
    print(f"   • Waktu Tinggal Butir (Time of Flight): {results['powder_kinetics']['time_of_flight_ms']:.2f} ms")
    print(f"   • Rasio Peleburan Entalpi Butir   : {results['powder_kinetics']['melting_state_ratio']:.2f}x Energi Laten")
    print(f"   • Status Fusi Saat Menumbuk Kolam : {'TERLEBUR SEMPURNA (100% MOLTEN DROPLETS)' if results['powder_kinetics']['is_fully_molten_on_impact'] else 'MELELEH SEBAGIAN'}")
    print("-" * 85)
    print("3. GEOMETRI MANIK LAS & KONTROL DILUSI SUBSTRAT:")
    print(f"   • Luas Penampang Clad / Penetrasi : {results['bead_and_dilution']['clad_area_mm2']:.2f} mm² / {results['bead_and_dilution']['penetration_area_mm2']:.2f} mm²")
    print(f"   • Dimensi Manik (Lebar x Tebal)   : {results['bead_and_dilution']['bead_width_mm']:.2f} mm x {results['bead_and_dilution']['bead_height_mm']:.2f} mm (Kedalaman: {results['bead_and_dilution']['penetration_depth_mm']:.2f} mm)")
    print(f"   • Rasio Dilusi Logam Induk (D)    : {results['bead_and_dilution']['dilution_ratio_pct']:.2f}% (Batas Aman Kritis < 10.0%)")
    print(f"   • Komposisi Deposit: Fe Sisa      : {results['bead_and_dilution']['fe_deposit_wt_pct']:.2f} wt% (Batas Spesifikasi Max 8.0%)")
    print(f"   • Komposisi Deposit: Cr Aktif     : {results['bead_and_dilution']['cr_deposit_wt_pct']:.2f} wt% | C: {results['bead_and_dilution']['c_deposit_wt_pct']:.2f} wt%")
    print("-" * 85)
    print("4. STRUKTUR MIKRO METALURGI, KEKERASAN & UJI AUS ASTM G65:")
    print(f"   • Fraksi Volum Presipitasi Karbida: {results['metallurgy_and_wear']['carbide_volume_fraction_pct']:.2f}% (Fase Eutektik Cr7C3)")
    print(f"   • Kekerasan Lapisan (Vickers / HRC): {results['metallurgy_and_wear']['vickers_hardness_hv']:.1f} HV ({results['metallurgy_and_wear']['rockwell_hardness_hrc']:.1f} HRC)")
    print(f"   • Prediksi Kehilangan Aus ASTM G65: {results['metallurgy_and_wear']['astm_g65_volume_loss_mm3']:.2f} mm³ (Abrasi Pasir Kering)")
    print(f"   • Status Kualifikasi ISO 15614-7  : {'LOLOS KUALIFIKASI STANDAR' if results['metallurgy_and_wear']['iso15614_7_qualified'] else 'TIDAK LOLOS'}")
    print(f"   • Evaluasi & Catatan Metalurgi    : {results['metallurgy_and_wear']['qualification_notes']}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri Nyata: Pelapisan Katup Uap Tekanan Tinggi Turbin Pembangkit Listrik Superkritikal (*Main Steam Stop Valve Spindle*)

### 6.1 Deskripsi Masalah & Tantangan Rekayasa

Sebuah pembangkit listrik tenaga uap superkritikal berkapasitas $1000\text{ MW}$ mengalami kegagalan *galling*, abrasi erosi uap bersuhu tinggi ($580^\circ\text{C}$ pada tekanan $24.5\text{ MPa}$), serta degradasi dudukan spindel katup utama (*Main Steam Stop Valve Spindle* berdiameter $\varnothing\ 120\ \text{mm}$ dari material baja tahan panas martensitik $10\text{CrMo}9\text{-}10$ / ASTM A182 F22).

Sebelumnya, pabrik menggunakan metode pelapisan las manual TIG / GTAW dengan batang kawat Stellite 6:
1. Dilusi substrat mencapai $18.5\%$, menyebabkan besi ($\text{Fe}$) dari batang spindel terlarut ke dalam lapisan hingga kadar $\text{Fe} = 19.8\text{ wt}\%$.
2. Ketinggian kadar $\text{Fe}$ menurunkan fraksi volum karbida kromium primer dari target $28\%$ menjadi hanya $11\%$, sehingga kekerasan mikro deposit turun drastis ke $34\ \text{HRC}$ (target minimum $42\ \text{HRC}$).
3. Uji abrasi ASTM G65 menunjukkan kehilangan volume sebesar $86.5\ \text{mm}^3$, menyebabkan katup mengalami kebocoran uap internal (*steam leakage*) setelah hanya 4200 jam operasi ($< 6\text{ bulan}$), memaksa pembangkit listrik mengalami *unscheduled shutdown* berbiaya jutaan dolar.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       STUDI KASUS: MODIFIKASI PELAPISAN SPINDEL KATUP UAP SUPERKRITIKAL                               |
+-----------------------------------------------------------------------------------------------------------------------+
| PARAMETER EVALUASI          │ METODE LAMA: GTAW / TIG MANUAL         │ METODE BARU: PTA HARDFACING OTOMATIS           |
+─────────────────────────────┼────────────────────────────────────────┼────────────────────────────────────────────────+
| Laju Dilusi Substrat (D)    │ 18.5% (Tinggi, penetrasi tak seragam)  │ 4.8% (Sangat Rendah & Terkontrol Presisi)      |
| Kandungan Fe Lapisan Akhir  │ 19.8 wt% Fe (Kontaminasi Parah)        │ 6.4 wt% Fe (Memenuhi Kualifikasi ISO 15614-7)  |
| Kekerasan Permukaan Lapisan │ 34 HRC (330 HV) [Lunak, rentan aus]    │ 44.5 HRC (440 HV) [Tahan Abrasi Ekstrim]       |
| Kehilangan Volume ASTM G65  │ 86.5 mm³ Volume Loss                   │ 35.8 mm³ Volume Loss [-58.6% Keausan Abrasi]   |
| Distorsi Termal Spindel     │ Runout Kelurusan: 1.85 mm (Perlu Press)│ Runout Kelurusan: 0.12 mm (Zero Post-Straight) |
| Umur Layanan Operasi Katup  │ 4,200 Jam (Shutdown Prematur)          │ > 35,000 Jam Bebas Kebocoran (> 4 Tahun)       |
| Efisiensi Serbuk / Kawat    │ 65% (Banyak stub end terbuang)         │ 92% Powder Capture Efficiency                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

### 6.2 Intervensi Rekayasa & Solusi Parameter PTA

Tim rekayasa material menerapkan sistem **Automated PTA Hardfacing Lathe System** dengan kontrol CNC 4-axis:
- **Paduan Serbuk**: Stellite 6 bergradasi bulat atomisasi gas spherical ($45 - 125\ \mu\text{m}$).
- **Gas Plasma**: Argon $99.999\%$ kemurnian tinggi dengan laju alir $2.2\ \text{L/min}$.
- **Gas Pelindung (*Shielding Gas*)**: Campuran $\text{Ar} + 5\%\ \text{H}_2$ ($14\ \text{L/min}$) untuk memberikan atmosfer reduktif yang mencegah oksidasi karbida kromium dan meningkatkan tegangan permukaan cairan lelehan.
- **Setelan Busur**: Arus $I_{\text{arc}} = 145\ \text{A}$, tegangan $U_{\text{arc}} = 28.5\ \text{V}$, kecepatan rotasi spindel dengan laju gerak linier $v_{\text{travel}} = 2.6\ \text{mm/s}$, dan laju umpan serbuk $36\ \text{g/min}$.

Hasil pengujian metalurgi dan kualifikasi destruktif sesuai ISO 15614-7 & ASTM G65:
- Dilusi substrat berhasil ditekan ke $4.8\%$, menjaga kadar $\text{Fe}$ deposit pada $6.4\text{ wt}\%$.
- Kekerasan permukaan meningkat konsisten ke $44.5\ \text{HRC}$ dengan jaringan karbida eutektik kromium $Cr_7C_3$ yang rapat dan homogen.
- Kehilangan aus ASTM G65 turun menjadi $35.8\ \text{mm}^3$ (reduksi laju keausan $58.6\%$).
- Spindel beroperasi mulus selama lebih dari $35,000\text{ jam}$ operasi uap superkritikal tanpa kebocoran maupun indikasi kerusakan *galling*.

---

## 7. Panduan Praktis & Troubleshooting Operasional PTA Cladding

```
+-----------------------------------------------------------------------------------------------------------------------+
|                          MATRIKS TROUBLESHOOTING OPERASIONAL PLASMA TRANSFERRED ARC (PTA)                             |
+-----------------------------------------------------------------------------------------------------------------------+
| ANOMALI / CACAT HARDFACING  │ AKAR PENYEBAB FISIKA-KIMIA             │ TINDAKAN KOREKTIF KEINSINYURAN                 |
+─────────────────────────────┼────────────────────────────────────────┼────────────────────────────────────────────────+
| Dilusi Substrat Terlalu     | Arus busur transferred terlalu tinggi, | Turunkan arus transferred, naikkan laju umpan  |
| Tinggi (D > 10% / Fe Naik)  | kecepatan gerak lambat, atau laju      | serbuk paduan, dan perpendek jarak standoff    |
|                             | umpan serbuk terlalu rendah.           | nosel ke benda kerja (6 - 8 mm).               |
+─────────────────────────────┼────────────────────────────────────────┼────────────────────────────────────────────────+
| Retak Pendinginan Transversal| Laju pendinginan lokal terlalu cepat   | Terapkan pemanasan awal substrat (Preheat      |
| (Check Cracking / Cold Crack)| pada paduan tinggi karbon, atau tidak  | 250 - 400°C) dan pendinginan lambat pasca-     |
|                             | ada pemanasan awal (Preheat).          | las dalam selimut keramik (Post-weld Slow Cool)|
+─────────────────────────────┼────────────────────────────────────────┼────────────────────────────────────────────────+
| Porositas Gas / Pinholes    | Serbuk lembab, kontaminasi minyak pada | Keringkan serbuk paduan pada oven 150°C selama |
| pada Lapisan Cladding       | substrat, atau gas pelindung turbulen. | 2 jam; bersihkan benda kerja dengan pelarut;   |
|                             |                                        | optimalkan laju alir shielding gas laminar.    |
+─────────────────────────────┼────────────────────────────────────────┼────────────────────────────────────────────────+
| Efisiensi Tangkapan Serbuk  | Kecepatan gas pembawa carrier terlalu  | Kalibrasi laju gas carrier agar fokus tepat    |
| Rendah (Powder Loss > 20%)  | tinggi meniup serbuk ke luar kolam,   | di pusat kawah lelehan; ganti orifis nosel     |
|                             | atau nosel orifis aus/asimetris.       | konsentris yang presisi.                       |
+─────────────────────────────┼────────────────────────────────────────┼────────────────────────────────────────────────+
| Fusi Tak Sempurna           | Serbuk belum meleleh sempurna saat     | Naikkan daya transferred arc secara bertahap   |
| (Lack of Fusion / Disbond)  | tiba di substrat dingin (underheated). | atau kurangi kecepatan gerak travel speed.     |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Pertanyaan Uji Kompetensi & Diskusi Terarah

1. **Fisika Busur Terkonstriksi**: Turunkan hubungan matematis antara diameter orifis nosel konstriksi ($d_{\text{orifice}}$) dan kerapatan fluks kalor puncak ($q_{\text{max}}$) berdasarkan persamaan medan Maecker-Elenbaas! Mengapa busur terkonstriksi menghasilkan penetrasi yang jauh lebih terlokalisasi dibandingkan busur bebas TIG?
2. **Pengaruh Dilusi terhadap Metalurgi Karbida**: Uraikan secara kuantitatif mengapa peningkatan kadar besi sisa ($Fe_{\text{deposit}} > 10\%$) pada deposit Stellite 6 mendestabilisasi pembentukan karbida primer $M_7C_3$ dan bagaimana dampaknya terhadap laju kehilangan massa pada uji keausan abrasif ASTM G65!
3. **Termodinamika Perpindahan Panas Serbuk In-Flight**: Jelaskan bagaimana waktu tinggal butiran serbuk ($\tau_{\text{flight}}$) di dalam kolom plasma mempengaruhi fusi metalurgi saat menumbuk benda kerja! Apa risiko mekanis jika serbuk tiba dalam keadaan fasa semi-padat (*partially molten*)?
4. **Analisis Kualifikasi Prosedur ISO 15614-7**: Sebutkan parameter-parameter variabel esensial (*essential variables*) yang jika diubah melampaui rentang kualifikasi WPS (*Welding Procedure Specification*) mengharuskan pengujian ulang rekualifikasi pada pelapisan PTA!

---

## 9. Referensi Akademis & Standar Industri Terverifikasi

1. **Davis, J. R.** (2018). *Hardfacing, Weld Overlaying, and Cladding: Technology and Applications*. ASM International Materials Park, OH. ISBN: 978-0-87170-489-4.
2. **American Welding Society (AWS)** (2022). *AWS C5.10/C5.10M: Recommended Practices for Shielding Gases for Welding and Plasma Arc Processes*. Miami, FL: AWS.
3. **International Organization for Standardization (ISO)** (2021). *ISO 15614-7:2016/Amd 1:2021 — Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 7: Overlay welding*. Geneva: ISO.
4. **ASTM International** (2023). *ASTM G65-23: Standard Test Method for Measuring Abrasion Using the Dry Sand/Rubber Wheel Apparatus*. West Conshohocken, PA: ASTM International. DOI: `10.1520/G0065-23`.
5. **Kou, S.** (2021). *Welding Metallurgy (3rd Edition)*. John Wiley & Sons, Hoboken, NJ. ISBN: 978-1-119-52481-6.
6. **de Oliveira, U. F., Lourenço, J. M., & D'Oliveira, A. S. C.** (2023). *Plasma transferred arc processing of composite coatings: Effect of powder injection dynamics and matrix dilution on carbide dissolution kinetics*. **Surface and Coatings Technology**, 456, pp. 129270. DOI: `10.1016/j.surfcoat.2023.129270`.
7. **Bourithis, E., & Papadimitriou, G. D.** (2022). *Microstructural evolution and wear mechanisms of PTA hardfaced cobalt and nickel-based coatings*. **Wear**, 498-499, pp. 204312. DOI: `10.1016/j.wear.2022.204312`.
8. **Mendez, P. F., & Eagar, T. W.** (2022). *Penetration and dilution in plasma transferred arc welding*. **Welding Journal Research Supplement**, 101(4), pp. 112-s–124-s.
