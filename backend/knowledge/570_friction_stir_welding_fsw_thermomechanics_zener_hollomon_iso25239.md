# Modul 570: Friction Stir Welding (FSW) & Processing (FSP): Termomekanika Kontak, Model Pemanasan Gesek Shoulder-Pin, Parameter Zener-Hollomon, Gaya Plunge, dan Standar ISO 25239

## 1. Pengantar & Urgensi Friction Stir Welding (FSW) dalam Manufaktur Maju

Dalam industri transportasi modern—termasuk manufaktur struktur kedirgantaraan (*fuselage*, panel roket kriogenik), otomotif (*battery enclosure tray*, sasis aluminium ekstrusi), dan maritim (*high-speed aluminum vessel hulls*)—kebutuhan untuk menyambung paduan aluminium berkekuatan tinggi non-weldable secara konvensional (seperti seri $2\text{xxx}$ $\text{Al-Cu-Li}$ dan seri $7\text{xxx}$ $\text{Al-Zn-Mg-Cu}$) menjadi tantangan metalurgi utama.

Pengelasan fusi konvensional (seperti GMAW / MIG, GTAW / TIG, atau Laser Welding) pada paduan aluminium presipitasi menginduksi cacat struktural yang parah:
1. **Retak Panas (*Hot Cracking / Solidification Cracking*)**: Terjadi akibat rentang suhu pembekuan yang lebar (*wide freezing range*) dan segregasi unsur paduan bertitik leleh rendah di batas butir.
2. **Porositas Gas Hidrogen (*Hydrogen Gas Porosity*)**: Akibat penurunan kelarutan hidrogen yang tajam secara eksponensial saat transisi fase cair ke padat.
3. **Pelemahan Zona Pengaruh Panas (*Severe HAZ Softening*)**: Pelarutan dan *over-aging* dari fase presipitat penguat nano ($\eta' \text{ MgZn}_2$ pada seri $7\text{xxx}$ atau $\theta' \text{ Al}_2\text{Cu}$ pada seri $2\text{xxx}$), yang menurunkan efisiensi sambungan (*joint efficiency*) hingga di bawah $60\%$.
4. **Distorsi Termal & Tegangan Sisa Tarik Tinggi (*High Tensile Residual Stresses*)**: Menyebabkan distorsi geometri perakitan pelat tipis dan penurunan ketahanan fatik (*fatigue life*).

**Friction Stir Welding (FSW)**, yang ditemukan oleh TWI (*The Welding Institute*) pada tahun 1991, merupakan teknologi penyambungan fase padat (*solid-state joining process*) di mana logam yang disambung tidak pernah mencapai titik leleh cairnya ($T_{\text{peak}} \approx 0.6 - 0.85 T_{\text{melt}}$). FSW memanfaatkan perkakas non-konsumsi (*non-consumable rotating tool*) yang terdiri dari bahu perkakas (*shoulder*) dan pin berulir (*probe/pin*) yang berputar dan ditranslasikan di sepanjang garis sambungan.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN PROSES PENGELASAN PADUAN ALUMINIUM KEKUATAN TINGGI (AL 7075-T6 / AL 2024-T3)          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Gas Tungsten Arc Welding (GTAW / TIG):                                                                            |
|     - Mekanisme : Pelelehan busur listrik elektroda tungsten gas argon.                                               |
|     - Kelemahan : Porositas hidrogen masif, rentan solidification cracking, joint efficiency rendah (50 - 65%),       |
|                   distorsi angular besar, masukan panas tinggi menyebabkan degradasi sifat mekanis.                   |
|                                                                                                                       |
|  2. Laser Beam Welding (LBW):                                                                                         |
|     - Mekanisme : Fusi leleh optik kerapatan energi tinggi (High Power Fiber Laser).                                  |
|     - Kelemahan : Penguapan unsur volatil (Zn, Mg), sensitivitas tinggi terhadap gap sambungan, retak likuasi HAZ.    |
|                                                                                                                       |
|  3. Friction Stir Welding (FSW - Standar ISO 25239 & AWS D17.3 - Fokus Modul Ini):                                    |
|     - Mekanisme : Deformasi plastis termomekanis fase padat (Severe Plastic Deformation & Dynamic Recrystallization). |
|     - Keunggulan: Zero solidification defects (Bebas porositas gas, bebas retak cair), rekristalisasi butir halus     |
|                   equiaxed pada Stir Zone (d_grain = 1 - 5 µm), efisiensi sambungan tinggi (85 - 98%), distorsi minimal,|
|                   bebas asap beracun, tanpa bahan tambah kawat las (zero filler / zero shielding gas).                |
|     - Tantangan : Perlunya clamping fixture berkekuatan tinggi menahan gaya aksial (Plunge Force F_z = 5 - 30 kN),   |
|                   pembentukan cacat cacing (wormhole/tunnel defect) jika parameter rotasi & translasi tidak optimal,  |
|                   adanya lubang keluar (exit hole) di akhir jahitan pengelasan.                                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Kinematika Perkakas, Zona Metalurgi & Fenomenologi Aliran Material

Dalam operasi FSW, perkakas berputar dengan kecepatan sudut $\omega$ ($\text{RPM}$) dan bergerak maju sepanjang garis sambungan dengan kecepatan pengelasan $v_w$ ($\text{mm/menit}$). Sisi sambungan di mana arah rotasi linier bahu perkakas searah dengan arah laju translasi disebut **Advancing Side (AS)**, sedangkan sisi yang berlawanan arah disebut **Retreating Side (RS)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                KINEMATIKA DAN ARSITEKTUR FISIK FRICTION STIR WELDING (FSW)                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                     Rotasi Spindle: ω (RPM)                                                                           |
|                                ↻                                                                                      |
|                     ┌─────────────────────┐                                                                           |
|                     │   Tool Shank &      │ ◄─── Gaya Aksial Vertikal (Plunge Force, F_z)                             |
|                     │   Tool Holder       │                                                                           |
|                     └──────────┬──────────┘                                                                           |
|                                │ Sudut Kemiringan Perkakas (Tilt Angle, α = 1.5° - 3.0°)                              |
|                                ▼                                                                                      |
|                     ┌─────────────────────┐                                                                           |
|  Arah Maju          │    Tool Shoulder    │ Diameter Bahu: D_s (12 - 25 mm) (Kontur Cekung / Scroll)                  |
|  Pengelasan ◄────── └──┬───────────────┬──┘                                                                           |
|  Kecepatan v_w         │  Threaded Pin │    Diameter Pin: D_p (4 - 8 mm), Panjang: L_p ≈ t_pelat - 0.2 mm             |
|                        └───────┬───────┘                                                                              |
|                                │                                                                                      |
|          ══════════════════════╪═════════════════════════════                                                         |
|             Advancing Side     │     Retreating Side                                                                  |
|               (AS: v_tot =     │       (RS: v_tot =                                                                   |
|                v_rot + v_w)    │        v_rot - v_w)                                                                  |
|          ══════════════════════╪═════════════════════════════                                                         |
|                     ┌──────────┴──────────┐                                                                           |
|                     │  Backing Anvil Bed  │ Material: Baja Perkakas H13 / Karbida (Rigid Support)                     |
|                     └─────────────────────┘                                                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Karakteristik Empat Zona Mikrostruktur Sambungan FSW

Sambungan FSW memiliki gradien termomekanis yang khas, terbagi menjadi empat zona metalurgi utama:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ZONASI MIKROSTRUKTUR CROSS-SECTION SAMBUNGAN FSW                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   [ Base Metal ] ──► [   HAZ   ] ──► [  TMAZ  ] ──► [ Stir Zone (SZ) ] ◄── [  TMAZ  ] ◄── [   HAZ   ] ◄── [ Base Metal ]|
|       (BM)           (Heat-Aff.)     (Thermo-Mech)   (Nugget Zone / DXR)    (Thermo-Mech)     (Heat-Aff.)       (BM)  |
|                                                                                                                       |
|   1. Base Metal (BM): Struktur mikro asli, tidak mengalami siklus termal maupun deformasi mekanis.                   |
|   2. Heat-Affected Zone (HAZ): Mengalami siklus termal tanpa deformasi plastis. Terjadi pelunakan akibat over-aging   |
|      presipitat (penurunan kekerasan lokal minimum / minimum hardness dip).                                           |
|   3. Thermo-Mechanically Affected Zone (TMAZ): Mengalami panas tinggi dan deformasi plastis sedang tanpa              |
|      rekristalisasi penuh. Butir-butir terdistorsi dan terpelintir secara tajam mengikuti alur putaran pin.          |
|   4. Stir Zone (SZ / Nugget): Mengalami laju regangan geser ekstrem dan suhu puncak (T > 0.7 T_melt). Terjadi         |
|      Continuous Dynamic Recrystallization (CDRX), menghasilkan butir equiaxed ultra-halus (1 - 5 µm) & 'onion rings'.|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Landasan Teori & Formulasi Matematis Formal

```
+-----------------------------------------------------------------------------------------------------------------------+
|                        FORMULASI TERMODINAMIKA PEMANASAN GESEK, ZENER-HOLLOMON, DAN GAYA FSW                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Laju Pembangkitan Panas Total (Total Heat Generation Rate, Q_total):                                              |
|     Q_total = Q_shoulder + Q_pin_side + Q_pin_tip                                                                     |
|                                                                                                                       |
|  2. Pembangkitan Panas Bahu Perkakas (Flat Shoulder with Coulomb Friction & Interfacial Shear):                       |
|     Q_shoulder = 2/3 * π * μ_f * P_N * ω * ( R_s^3 - R_p^3 )   [Watt]                                                 |
|     dengan slip factor δ:  Q_shoulder = 2/3 * π * [ δ * μ_f * P_N + (1 - δ) * τ_yield ] * ω * ( R_s^3 - R_p^3 )       |
|                                                                                                                       |
|  3. Estimasi Suhu Puncak Sambungan (Peak Temperature T_peak):                                                         |
|     T_peak / T_melt = K_T * ( ω^2 / ( v_w * 10^4 ) )^α_T                                                              |
|                                                                                                                       |
|  4. Parameter Laju Deformasi Termomekanis Zener-Hollomon (Z):                                                         |
|     Z = ε_dot * exp( Q_def / ( R_gas * T_kelvin ) )                                                                   |
|                                                                                                                       |
|  5. Hubungan Ukuran Butir Rekristalisasi Nugget (d_grain) terhadap Parameter Z:                                       |
|     d_grain = A_g * Z^(-m_g)   ==>   ln(d_grain) = ln(A_g) - m_g * ln(Z)                                              |
|                                                                                                                       |
|  6. Persamaan Kekuatan Luluh Hall-Petch pada Stir Zone:                                                               |
|     σ_y = σ_0 + k_y / sqrt(d_grain)                                                                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Model Pembangkitan Panas Antarmuka Perkakas-Benda Kerja

Energi panas dalam FSW dibangkitkan dari kombinasi friksi gesek antarmuka (*frictional contact dissipation*) dan disipasi deformasi plastis volumetrik material viskoplastis (*viscoplastic shear work*). 

Pada kondisi kontak lengket-selip parsial (*partial stick-slip condition*) dengan fraksi selip $\delta \in [0, 1]$:
$$\tau_{\text{contact}} = \delta \cdot \mu_f P_N + (1 - \delta) \cdot \tau_{\text{yield}}(T)$$
dengan $\mu_f$ adalah koefisien gesek dinamis ($\mu_f \approx 0.3 - 0.5$), $P_N$ tekanan kontak normal ($\text{MPa}$), dan $\tau_{\text{yield}}(T) = \sigma_y(T)/\sqrt{3}$ adalah tegangan geser luluh material pada suhu lokal.

Komponen daya panas yang dibangkitkan oleh masing-masing elemen geometri perkakas:
1. **Bahu Perkakas (*Tool Shoulder*, $Q_s$)**:
   $$Q_s = \int_{R_p}^{R_s} 2\pi r \cdot \tau_{\text{contact}} \cdot (\omega r) \, dr = \frac{2}{3} \pi \tau_{\text{contact}} \, \omega \left( R_s^3 - R_p^3 \right)$$
2. **Sisi Silinder Pin Perkakas (*Pin Cylindrical Surface*, $Q_{\text{pin\_side}}$)**:
   $$Q_{\text{pin\_side}} = 2\pi R_p L_p \cdot \tau_{\text{contact}} \cdot (\omega R_p) = 2\pi \tau_{\text{contact}} \, \omega R_p^2 L_p$$
3. **Ujung Bawah Pin Perkakas (*Pin Tip / Base*, $Q_{\text{pin\_tip}}$)**:
   $$Q_{\text{pin\_tip}} = \int_0^{R_p} 2\pi r \cdot \tau_{\text{contact}} \cdot (\omega r) \, dr = \frac{2}{3} \pi \tau_{\text{contact}} \, \omega R_p^3$$

Daya pemanasan total:
$$Q_{\text{total}} = Q_s + Q_{\text{pin\_side}} + Q_{\text{pin\_tip}} = \frac{2}{3} \pi \tau_{\text{contact}} \, \omega \left( R_s^3 + 3 R_p^2 L_p \right)$$
Karena $R_s \gg R_p$, bahu perkakas menyumbang sekitar $80\% - 90\%$ dari total masukan panas FSW.

### 3.2. Laju Regangan Geser & Pemodelan Zener-Hollomon pada Stir Zone

Laju regangan geser ekuivalen rata-rata ($\dot{\varepsilon}$) yang dialami material plastis di sekitar pin yang berputar dapat didekati dengan formulasi Chang-Lee:
$$\dot{\varepsilon} = \frac{R_m \cdot \omega}{L_{\text{shear}}} = \frac{\left(\frac{R_s + R_p}{2}\right) \cdot \left(\frac{2\pi N}{60}\right)}{R_s - R_p}$$

Parameter Zener-Hollomon ($Z$) mengkuantifikasi efek komparatif antara laju deformasi kinetik ($\dot{\varepsilon}$) dan laju pemulihan difusi termal (*thermal activation recovery*):
$$Z = \dot{\varepsilon} \exp\left( \frac{Q_{\text{def}}}{R_{\text{gas}} T_{\text{peak}}} \right)$$
dengan:
- $\dot{\varepsilon}$ = laju regangan ekuivalen ($\text{s}^{-1}$),
- $Q_{\text{def}}$ = energi aktivasi deformasi plastis / difusi paduan ($\text{J/mol}$, untuk aluminium murni $\approx 142 \text{ kJ/mol}$, untuk paduan seri $7\text{xxx} \approx 155 - 220 \text{ kJ/mol}$),
- $R_{\text{gas}}$ = konstanta gas universal ($8.314 \text{ J/(mol}\cdot\text{K)}$),
- $T_{\text{peak}}$ = suhu mutlak puncak di Stir Zone ($\text{K}$).

Hubungan empiris ukuran butir rekristalisasi dinamis ($d_{\text{grain}}$):
$$\ln(d_{\text{grain}}) = a - b \ln(Z) \iff d_{\text{grain}} = A_Z \cdot Z^{-n_Z}$$
Persamaan ini membuktikan secara fundamental: **semakin tinggi kecepatan translasi $v_w$ (suhu $T$ lebih rendah, $Z$ lebih besar), ukuran butir di Stir Zone akan semakin halus (*ultra-fine grain refinement*)**, meningkatkan ketahanan luluh sesuai hukum Hall-Petch.

---

## 4. Standar Mutu Industri ISO 25239 & Klasifikasi Cacat FSW

Standar internasional **ISO 25239 (Parts 1 to 5): *Friction stir welding — Aluminium*** menetapkan persyaratan kualifikasi prosedur pengelasan, operator, dan kriteria keberterimaan diskontinuitas:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                         KLASIFIKASI CACAT DEFECT PADA SAMBUNGAN FRICTION STIR WELDING                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Cacat Cacing / Terowongan (Wormhole / Tunnel Defect):                                                             |
|     - Morfologi : Rongga internal memanjang kontinu di sisi Advancing Side dekat dasar akar sambungan.               |
|     - Penyebab  : Masukan panas terlalu rendah (Heat Input Index rendah, RPM terlalu kecil / translasi terlalu cepat) |
|                   atau panjang pin (L_p) kurang dalam, menyebabkan aliran plastisitas tidak tertutup sempurna.       |
|                                                                                                                       |
|  2. Cacat Ciuman / Garis Oksida Zig-zag (Kissing Bond / Joint Line Remnant - JLR):                                    |
|     - Morfologi : Lapisan film oksida tipis kontinu yang tidak teraduk sempurna di sepanjang antarmuka tumpul.        |
|     - Penyebab  : Gangguan aliran material, kurangnya aksi pemecahan oksida oleh ulir pin. Berbahaya pada uji tekuk.|
|                                                                                                                       |
|  3. Flashing Berlebih & Penipisan Pelat (Excessive Flash & Underfill):                                                |
|     - Morfologi : Logam terperas keluar membentuk sirip tajam di tepi bahu, alur cekung di permukaan atas.           |
|     - Penyebab  : Gaya plunge F_z terlalu tinggi atau suhu berlebih (RPM terlalu tinggi), viskositas logam anjlok.   |
|                                                                                                                       |
|  4. Cacat Lubang Jarum Permukaan (Surface Galling & Grooving):                                                        |
|     - Morfologi : Permukaan kasar terkelupas dan beralur parit.                                                       |
|     - Penyebab  : Sudut kemiringan perkakas (tilt angle) salah (terlalu datar α < 1.0°) atau penempelan logam ke pin.|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Algoritma & Komputasi Python: Simulator Termomekanis, Zener-Hollomon & Prediksi Kualitas Sambungan FSW

Berikut adalah program Python mandiri berstandar teknik industri untuk menghitung pembangkitan daya termal, profil suhu puncak, parameter Zener-Hollomon, ukuran butir rekristalisasi dinamis, estimasi kekuatan mekanis, serta verifikasi proses terhadap batas cacat ISO 25239.

```python
"""
RuangTI Industrial Engineering Knowledge Base - Module 570
Friction Stir Welding (FSW) Thermomechanical Modeling & Microstructure Predictor
Standards: ISO 25239-1..5, AWS D17.3, Hall-Petch Metallurgical Model
"""

import math
from typing import Dict, Any, List

class FSWProcessSimulator:
    """
    Simulator Termomekanis Pengelasan Gesek Putar (FSW).
    Menghitung disipasi daya termal, suhu puncak, parameter Zener-Hollomon,
    ukuran butir hasil rekristalisasi CDRX, dan prediksi cacat wormhole.
    """
    def __init__(self, shoulder_radius_mm: float, pin_radius_mm: float, 
                 pin_length_mm: float, plate_thickness_mm: float,
                 material_name: str = "Al 7075-T6"):
        self.r_s = shoulder_radius_mm / 1000.0  # meter
        self.r_p = pin_radius_mm / 1000.0       # meter
        self.l_p = pin_length_mm / 1000.0       # meter
        self.t_plate = plate_thickness_mm / 1000.0 # meter
        self.material = material_name
        
        # Konstanta termofisika paduan aluminium (default: Al 7075)
        self.t_melt_k = 908.15        # Titik leleh (Kelvin) ~635°C
        self.q_activation = 175000.0  # Energi aktivasi deformasi (J/mol)
        self.r_gas = 8.314            # J/(mol*K)
        self.hall_petch_k = 0.12      # MPa * m^(1/2)
        self.sigma_0 = 120.0          # Tegangan gesek kisi intrinsik (MPa)

    def compute_heat_generation(self, spindle_rpm: float, plunge_force_kn: float, 
                                friction_coeff: float = 0.40) -> Dict[str, float]:
        """
        Menghitung distribusi daya pembangkitan panas pada bahu dan pin.
        """
        omega = (spindle_rpm * 2.0 * math.pi) / 60.0  # rad/s
        f_axial_n = plunge_force_kn * 1000.0
        
        # Tekanan kontak rata-rata di bawah bahu
        a_shoulder_net = math.pi * (self.r_s**2 - self.r_p**2)
        p_normal = f_axial_n / a_shoulder_net  # N/m^2 (Pa)
        
        tau_contact = friction_coeff * p_normal
        
        # Komponen Pembangkitan Panas (Watt)
        q_shoulder = (2.0 / 3.0) * math.pi * tau_contact * omega * (self.r_s**3 - self.r_p**3)
        q_pin_side = 2.0 * math.pi * tau_contact * omega * (self.r_p**2) * self.l_p
        q_pin_tip = (2.0 / 3.0) * math.pi * tau_contact * omega * (self.r_p**3)
        q_total = q_shoulder + q_pin_side + q_pin_tip
        
        shoulder_contrib_pct = (q_shoulder / q_total) * 100.0
        
        return {
            "spindle_omega_rad_s": round(omega, 2),
            "contact_pressure_mpa": round(p_normal / 1e6, 2),
            "q_shoulder_watt": round(q_shoulder, 2),
            "q_pin_side_watt": round(q_pin_side, 2),
            "q_pin_tip_watt": round(q_pin_tip, 2),
            "q_total_watt": round(q_total, 2),
            "shoulder_heat_percentage": round(shoulder_contrib_pct, 2)
        }

    def predict_weld_thermal_cycle(self, spindle_rpm: float, travel_speed_mmpm: float, 
                                   ambient_temp_c: float = 25.0) -> Dict[str, float]:
        """
        Estimasi suhu puncak Stir Zone berbasis rasio panas semu (pseudo-heat index).
        """
        # Indeks Masukan Panas Termomekanis (HI = w^2 / v)
        heat_index = (spindle_rpm**2) / (travel_speed_mmpm * 10000.0)
        
        # Model semi-empiris suhu puncak FSW
        t_ratio = 0.42 * (heat_index**0.075)
        t_ratio = min(t_ratio, 0.88)  # Batas atas solid-state (tidak boleh leleh)
        
        t_peak_k = self.t_melt_k * t_ratio
        t_peak_c = t_peak_k - 273.15
        
        return {
            "heat_input_index": round(heat_index, 4),
            "t_peak_over_t_melt": round(t_ratio, 4),
            "t_peak_kelvin": round(t_peak_k, 2),
            "t_peak_celsius": round(t_peak_c, 2)
        }

    def evaluate_microstructure_and_strength(self, spindle_rpm: float, travel_speed_mmpm: float, 
                                             plunge_force_kn: float) -> Dict[str, Any]:
        """
        Menghitung parameter Zener-Hollomon, ukuran butir CDRX, dan estimasi Yield Strength.
        """
        heat_data = self.compute_heat_generation(spindle_rpm, plunge_force_kn)
        therm_data = self.predict_weld_thermal_cycle(spindle_rpm, travel_speed_mmpm)
        
        omega = heat_data["spindle_omega_rad_s"]
        t_peak_k = therm_data["t_peak_kelvin"]
        
        # Laju regangan ekuivalen rata-rata di shear zone
        r_mean = (self.r_s + self.r_p) / 2.0
        l_shear = self.r_s - self.r_p
        strain_rate = (r_mean * omega) / l_shear  # s^-1
        
        # Parameter Zener-Hollomon: Z = eps_dot * exp(Q / (R * T))
        exponent = self.q_activation / (self.r_gas * t_peak_k)
        ln_z = math.log(max(strain_rate, 1.0)) + exponent
        
        # Ukuran Butir Rekristalisasi Dinamis (CDRX): d_grain = A * Z^(-0.25)
        # Hubungan empiris Al-Zn-Mg-Cu: ln(d) = 9.2 - 0.24 * ln(Z)  [d dalam µm]
        ln_d_grain = 9.2 - 0.24 * ln_z
        d_grain_um = math.exp(ln_d_grain)
        d_grain_um = max(0.5, min(d_grain_um, 25.0)) # bounding
        
        # Prediksi Kekuatan Luluh Hall-Petch pada Stir Zone (SZ)
        d_grain_m = d_grain_um * 1e-6
        sigma_yield_sz = self.sigma_0 + (self.hall_petch_k / math.sqrt(d_grain_m))
        
        # Pengecekan Kualitas Proses & Cacat Potensial (ISO 25239)
        revolution_pitch_mm = travel_speed_mmpm / spindle_rpm  # Kemajuan per putaran
        
        defects = []
        if revolution_pitch_mm > 0.45:
            defects.append("RISIKO TINGGI: Wormhole / Tunnel Defect pada Advancing Side (Laju translasi terlalu cepat vs RPM)")
        elif revolution_pitch_mm < 0.08:
            defects.append("RISIKO TINGGI: Excessive Flash / Over-aging Pelunakan HAZ (Masukan panas terlalu tinggi)")
            
        if therm_data["t_peak_celsius"] > 520.0:
            defects.append("PERINGATAN: Suhu mendekati titik likuasi eutektik (Risiko pelelehan lokal batas butir)")
            
        status = "OPTIMAL (COMPLIANT ISO 25239)" if not defects else "NON_OPTIMAL"
        
        return {
            "strain_rate_per_sec": round(strain_rate, 2),
            "ln_zener_hollomon": round(ln_z, 3),
            "recrystallized_grain_size_um": round(d_grain_um, 3),
            "stir_zone_yield_strength_mpa": round(sigma_yield_sz, 2),
            "advance_per_revolution_mm_rev": round(revolution_pitch_mm, 4),
            "heat_generation_data": heat_data,
            "thermal_cycle_data": therm_data,
            "quality_status": status,
            "defect_warnings": defects
        }


# =====================================================================
# Skenario Pengujian & Eksekusi Validasi Industri
# =====================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI FRICTION STIR WELDING (FSW) THERMOMECHANICAL & MICROSTRUCTURE SIMULATOR")
    print("Standard: ISO 25239-1..5 / AWS D17.3 (Aluminium Solid-State Joining)")
    print("=" * 85)

    # Spesifikasi Perkakas dan Pelat Benda Kerja Al 7075-T6 (Tebal 6.0 mm)
    fsw_sim = FSWProcessSimulator(
        shoulder_radius_mm=9.0,   # Diameter Bahu = 18.0 mm
        pin_radius_mm=2.5,        # Diameter Pin = 5.0 mm
        pin_length_mm=5.7,        # Panjang Pin = 5.7 mm
        plate_thickness_mm=6.0,
        material_name="Al 7075-T6 Aerospace Grade"
    )

    # Pengujian Kasus 1: Kondisi Optimal Manufaktur Kedirgantaraan
    print("\n--- SKENARIO 1: PARAMETER OPTIMAL DIRGANTARA (RPM=1000, Speed=150 mm/min, F_z=12 kN) ---")
    res1 = fsw_sim.evaluate_microstructure_and_strength(
        spindle_rpm=1000.0,
        travel_speed_mmpm=150.0,
        plunge_force_kn=12.0
    )
    print(f"[+] Pembangkitan Daya Panas Total : {res1['heat_generation_data']['q_total_watt']} Watt")
    print(f"    - Kontribusi Bahu (Shoulder) : {res1['heat_generation_data']['shoulder_heat_percentage']}%")
    print(f"    - Tekanan Kontak Aksial      : {res1['heat_generation_data']['contact_pressure_mpa']} MPa")
    print(f"[+] Siklus Termal & Suhu Puncak  : {res1['thermal_cycle_data']['t_peak_celsius']} °C ({res1['thermal_cycle_data']['t_peak_over_t_melt'] * 100:.1f}% T_melt)")
    print(f"[+] Laju Regangan Termomekanis   : {res1['strain_rate_per_sec']} s⁻¹")
    print(f"[+] Parameter Zener-Hollomon ln(Z): {res1['ln_zener_hollomon']}")
    print(f"[+] Ukuran Butir Rekristalisasi  : {res1['recrystallized_grain_size_um']} µm (Fine Equiaxed Nugget)")
    print(f"[+] Prediksi Kekuatan Luluh SZ   : {res1['stir_zone_yield_strength_mpa']} MPa")
    print(f"[+] Pitch Perputaran             : {res1['advance_per_revolution_mm_rev']} mm/rev")
    print(f"[+] Status Kualitas ISO 25239    : {res1['quality_status']}")

    # Pengujian Kasus 2: Kondisi Cacat Masukan Panas Rendah (Cold Weld / Wormhole Risk)
    print("\n--- SKENARIO 2: KONDISI CACAT WORMHOLE / LAJU TERLALU CEPAT (RPM=600, Speed=400 mm/min) ---")
    res2 = fsw_sim.evaluate_microstructure_and_strength(
        spindle_rpm=600.0,
        travel_speed_mmpm=400.0,
        plunge_force_kn=8.0
    )
    print(f"[+] Suhu Puncak Sambungan        : {res2['thermal_cycle_data']['t_peak_celsius']} °C")
    print(f"[+] Pitch Perputaran             : {res2['advance_per_revolution_mm_rev']} mm/rev")
    print(f"[+] Status Kualitas ISO 25239    : {res2['quality_status']}")
    for w in res2['defect_warnings']:
        print(f"    [!] {w}")

    # Pengujian Kasus 3: Kondisi Overheating & Flash Berlebih
    print("\n--- SKENARIO 3: KONDISI OVERHEATING & EXCESS FLASH (RPM=2200, Speed=60 mm/min) ---")
    res3 = fsw_sim.evaluate_microstructure_and_strength(
        spindle_rpm=2200.0,
        travel_speed_mmpm=60.0,
        plunge_force_kn=18.0
    )
    print(f"[+] Suhu Puncak Sambungan        : {res3['thermal_cycle_data']['t_peak_celsius']} °C")
    print(f"[+] Pitch Perputaran             : {res3['advance_per_revolution_mm_rev']} mm/rev")
    print(f"[+] Status Kualitas ISO 25239    : {res3['quality_status']}")
    for w in res3['defect_warnings']:
        print(f"    [!] {w}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri Nyata: Pengelasan Panel Kulit Roket Peluncur Luar Angkasa Paduan Al-Li 2195 Menggunakan Auto-Plunge Force Controlled FSW

### 6.1. Konteks Permasalahan Manufaktur Kedirgantaraan

Dalam pembuatan tangki bahan bakar kriogenik (*Cryogenic Liquid Hydrogen / Liquid Oxygen Tanks*) untuk roket peluncur generasi baru, material paduan aluminium-litium $\text{Al-Li } 2195\text{-T8}$ (tebal pelat $t = 5.00 \text{ mm}$) digunakan untuk mereduksi bobot struktur sebesar $15\%$ sekaligus meningkatkan kekakuan elastisitas (*specific modulus*).

Tantangan teknis manufaktur:
1. Pengelasan fusi busur sebelumnya menghasilkan $14.2\%$ tingkat penolakan (*scrap rate*) akibat retak mikro likuasi batas butir (*grain boundary liquation cracking*) dan kehilangan unsur litium volatil.
2. Tangki beroperasi pada suhu kriogenik ekstrem ($-253^\circ\text{C}$ / $20\text{ K}$) di mana keberadaan cacat pori berukuran sekecil $> 50 \ \mu\text{m}$ dapat memicu inisiasi retak getas katastropik (*brittle fracture failure*).
3. Terjadi variasi celah sambungan (*gap mismatch* hingga $0.4\text{ mm}$) dan lenturan pelat silinder berdiameter $\varnothing 4.0\text{ m}$ yang memerlukan adaptasi gaya tekan plunging secara *real-time*.

### 6.2. Parameter Fabrikasi & Implementasi Kontrol Adaptif Gaya Plunge

- **Sistem Pengelasan**: Heavy-Duty 5-Axis Gantry FSW Machine dengan modul kontrol umpan balik sel beban tertutup (*Closed-Loop Load Cell Servo Control*).
- **Material Perkakas**: Paduan Super-Hard Tungsten-Rhenium ($\text{W-25\%Re}$) berulir konus *triflute* dengan bahu *scroll concave* ($\varnothing D_s = 16.0\text{ mm}$, $\varnothing D_p = 4.8\text{ mm}$, $L_p = 4.85\text{ mm}$).
- **Parameter Proses Terpilih**:
  - Kecepatan Rotasi Spindle: $\omega = 900\text{ RPM}$.
  - Kecepatan Translasi Pengelasan: $v_w = 180\text{ mm/menit}$ ($3.0\text{ mm/s}$).
  - Gaya Aksial Plunging Terkontrol: $F_z = 14.5 \pm 0.3\text{ kN}$ (*constant load mode*).
  - Sudut Kemiringan Perkakas (*Tilt Angle*): $\alpha = 2.5^\circ$.
  - Media Pendinginan Tambahan: *Trailing water-mist cooling system* di belakang perkakas untuk mempercepat laju pendinginan HAZ.

### 6.3. Hasil Pengujian Metalurgi & Mekanis Sesuai Standar ISO 25239-4

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    HASIL PENGUJIAN MEKANIS & METALURGI SAMBUNGAN AL-LI 2195-T8 (ISO 25239)                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Evaluasi Struktur Mikro & Butir:                                                                                  |
|     - Ukuran Butir Base Metal (BM)          : 42.5 µm (Struktur pipih memanjang hasil pengerolan panas)               |
|     - Ukuran Butir Stir Zone (SZ / Nugget)  :  2.8 µm (Equiaxed DXR ultra-halus, reduksi ukuran butir 93.4%)           |
|     - Cacat Internal (Wormhole, Void, LoP)  : 0 Cacat terdeteksi via inspeksi Phased Array Ultrasonic & X-ray CT      |
|                                                                                                                       |
|  2. Uji Tarik Transversal (Transverse Tensile Test pada Suhu Ruang 25°C):                                             |
|     - Ultimate Tensile Strength (UTS) BM    : 585 MPa                                                                 |
|     - UTS Sambungan FSW Terukur             : 515 MPa                                                                 |
|     - Efisiensi Sambungan (Joint Efficiency): 88.03% (Melampaui target minimum kedirgantaraan 80.0%)                  |
|     - Lokasi Patah Uji Tarik                : Terjadi di batas zona TMAZ/HAZ sisi Retreating Side (Minimum Hardness)  |
|                                                                                                                       |
|  3. Uji Tarik Kriogenik pada Suhu Cairan Nitrogen (-196°C / 77 K):                                                   |
|     - UTS Sambungan FSW Kriogenik           : 620 MPa (Peningkatan kekuatan 20.4% akibat penguatan dislokasi termal)  |
|     - Elongasi Sambungan                    : 8.5% (Daktilitas tinggi, bebas transisi getas)                          |
|                                                                                                                       |
|  4. Uji Tekuk Akar & Wajah (Root & Face Bend Test 180°):                                                              |
|     - Hasil Pengujian                       : Lolos 100% tanpa inisiasi retak mikro (Zero Surface Crack Initiation)   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Rangkuman & Pedoman Praktis Rekayasa FSW

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                CHECKLIST REKAYASA & QUALITY ASSURANCE OPERASIONAL FSW                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [✓] Rasio Revolusi Pitch Pengelasan (Advance per Revolution, v_w / ω):                                               |
|      Jaga nilai pitch perputaran pada rentang 0.12 - 0.35 mm/rev untuk paduan aluminium struktural.                   |
|      Nilai > 0.40 mm/rev rentan wormhole; nilai < 0.08 mm/rev memicu panas berlebih dan over-aging.                   |
|                                                                                                                       |
|  [✓] Pemilihan Desain Geometri Pin:                                                                                   |
|      Gunakan pin berulir (threaded), beralur spiral (fluted), atau berbentuk konus tirus bertingkat (tapered)         |
|      untuk memaksimalkan transfer material vertikal dari atas ke dasar sambungan (*hydrodynamic churning effect*).    |
|                                                                                                                       |
|  [✓] Kontrol Gaya Plunge Berbasis Load-Cell Servo:                                                                    |
|      Hindari kontrol posisi tetap (*fixed position mode*) pada pelat berukuran besar; terapkan kontrol gaya aksial    |
|      konstan (*constant plunge force mode*) untuk mengompensasi lendutan pelat dan variasi ketebalan material.        |
|                                                                                                                       |
|  [✓] Pembersihan Permukaan Sambungan (Joint Edge Preparation):                                                        |
|      Meskipun FSW mampu memecah lapisan oksida tipis, lakukan degreasing dengan pelarut aseton dan penyikatan kawat  |
|      stainless steel sebelum pengelasan untuk mengeliminasi inklusi oksida Kissing Bond (JLR).                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Referensi Terverifikasi & Standar Rekayasa

1. **ISO 25239-1..5:2020** - *Friction stir welding — Aluminium — Part 1: Vocabulary, Part 2: Design of weld joints, Part 3: Qualification of welding operators, Part 4: Specification and qualification of welding procedures, Part 5: Quality and inspection requirements*. International Organization for Standardization, Geneva.
2. **AWS D17.3/D17.3M:2016** - *Specification for Friction Stir Welding of Aluminum Alloys for Aerospace Applications*. American Welding Society (AWS), Miami, FL.
3. **Mishra, R. S., & Ma, Z. Y.** (2005). *Friction stir welding and processing*. Materials Science and Engineering: R: Reports, 50(1-2), 1-78. [DOI: 10.1016/j.mser.2005.07.001]
4. **Nandan, R., DebRoy, T., & Bhadeshia, H. K. D. H.** (2008). *Recent advances in friction-stir welding – Process, weldment structure and properties*. Progress in Materials Science, 53(6), 980-1023. [DOI: 10.1016/j.pmatsci.2008.05.001]
5. **Colligan, K.** (1999). *Material flow behavior during friction stir welding of aluminum*. Welding Journal, 78(7), 229s-237s.
6. **Schmidt, H., Hattel, J., & Wert, J.** (2004). *An analytical model for the heat generation in friction stir welding*. Modelling and Simulation in Materials Science and Engineering, 12(1), 143-157. [DOI: 10.1088/0965-0393/12/1/013]
7. **Zener, C., & Hollomon, J. H.** (1944). *Effect of strain rate upon plastic flow of steel*. Journal of Applied Physics, 15(1), 22-32. [DOI: 10.1063/1.1707363]
8. **Hamilton, C., Sommers, A., & Dymek, S.** (2019). *Thermal modeling and simulation of friction stir welding processes*. Metals, 9(6), 628. [DOI: 10.3390/met9060628]
