# Modul 567: Wire Electrical Discharge Machining (WEDM): Dinamika Erosi Lucutan Percik Termoelektrik, Pemodelan Defleksi Wire Lag, Lebar Kerf Termal, dan Karakterisasi Lapisan Resolidifikasi (Recast Layer)

## 1. Pengantar & Urgensi WEDM dalam Pembuatan Perkakas Presisi (Tool & Die Making)

Dalam manufaktur maju dan rekayasa presisi tinggi (*micro-precision engineering*), tuntutan untuk memproduksi geometri dua dimensi dan tiga dimensi berprofil kompleks pada material berkekuatan ultra-tinggi (*ultra-high strength alloys*) seperti baja perkakas martensitik keras (*hardened tool steel D2/SKD11 60-64 HRC*), karbida semen (*tungsten carbide WC-Co*), paduan nikel Inconel 718, dan titanium Ti-6Al-4V tidak dapat dipenuhi oleh proses pemesinan berbasis kontak mekanis konvensional seperti frais atau gurdi akibat keausan pahat yang sangat parah (*severe tool wear*) dan distorsi gaya potong mekanis.

**Wire Electrical Discharge Machining (WEDM)** adalah proses pemesinan termoelektrik non-kontak (*non-contact thermoelectric machining process*) di mana material dierosi dan diuapkan melalui serangkaian lucutan percik listrik frekuensi tinggi (*high-frequency discrete electrical spark discharges*, $f = 10 - 500 \text{ kHz}$) yang terjadi di celah mikroskopis (*spark gap*, $g = 10 - 50 \ \mu\text{m}$) antara elektroda kawat kontinu yang bergerak lambat (biasanya kawat kuningan atau berlapis seng $\varnothing = 0.10 - 0.30 \text{ mm}$) dan benda kerja konduktif yang terendam dalam fluida dielektrik terdeionisasi (*deionized water*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                         SPEKTRUM PROSES PEMESINAN PELEPASAN LISTRIK INDUSTRI (EDM)                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Sinker / Die-Sinking EDM:                                                                                         |
|     - Mekanisme: Memanfaatkan elektroda bentuk 3D masif (tembaga/grafit) yang dicetak khusus ke dalam rongga benda.   |
|     - Aplikasi : Pembuatan rongga cetakan injeksi plastik (cavity molds) dan forging dies tertutup.                   |
|     - Limitasi : Biaya fabrikasi elektroda mahal, keausan elektroda pada sudut tajam (corner wear / rounding).        |
|                                                                                                                       |
|  2. Micro-EDM Drilling:                                                                                               |
|     - Mekanisme: Elektroda tabung berputar mikro (Ø 0.05 - 0.50 mm) dengan flushing dielektrik internal bertekanan.   |
|     - Aplikasi : Pembuatan lubang pendingin bilah turbin gas (cooling holes) dan nozzle injektor bahan bakar diesel. |
|                                                                                                                       |
|  3. Wire EDM (WEDM - Fokus Modul Ini):                                                                                |
|     - Mekanisme: Kawat logam tipis kontinu tergulung (spool-to-spool) bertindak sebagai elektroda pemotong linier.    |
|     - Aplikasi : Punch & dies stamping presisi, bilah turbin ekstrusi, roda gigi mikro, profil taper rumit 4-axis.   |
|     - Keunggulan: Kawat selalu baru (bebas keausan geometri pahat kumulatif), akurasi posisi sub-mikron (± 1 µm),     |
|                   mampu memotong material berapapun kekerasannya asalkan konduktivitas listrik σ > 0.01 S/cm.         |
|     - Tantangan : Fenomena kelambatan kawat (Wire Lag Deflection), getaran kawat, pembentukan Recast Layer getas.     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Meskipun WEDM menawarkan fleksibilitas manufaktur yang luar biasa, dua kendala fisik fundamental yang membatasi kualitas geometris dan integritas permukaan adalah:
1. **Defleksi Kelambatan Kawat (*Wire Lag Deflection*)**: Tekanan hidrodinamik ledakan gelembung plasma (*plasma flushing pressure*), gaya elektrostatik medan tegangan tinggi, dan gaya elektromagnetik Lorentz menyebabkan kawat tipis melengkung ke belakang (*catenary bow deflection*). Hal ini memicu kesalahan kelurusan dinding (*barrel/hourglass error*) dan erosi berlebih (*gouging/undercutting*) pada sudut tajam (*sharp corners*).
2. **Lapisan Resolidifikasi (*Recast / White Layer*) & Mikro-Retak (*Micro-Cracks*)**: Pendinginan ultra-cepat (*quenching rate* $> 10^7 \ \text{K/s}$) dari lelehan logam sisa oleh air dielektrik menghasilkan struktur martensitik sangat keras tetapi getas, disertai tegangan sisa tarik tinggi yang dapat menurunkan umur lelah (*fatigue life*) komponen die stamping.

---

## 2. Arsitektur Fisik Sistem WEDM, Catu Daya Pulsa, dan Hidrodinamika Dielektrik

Sistem WEDM modern mengintegrasikan penggerak kawat terkomputerisasi, generator pulsa daya MOSFET/IGBT transistor ganda, sistem deionisasi fluida dielektrik tertutup, dan pemandu kawat presisi berlian (*diamond wire guides*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ARSITEKTUR KINEMATIKA & HIDRODINAMIKA MESIN WIRE EDM                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       Spool Kawat Baru (Brass Wire CuZn37 / Zinc-Coated)                                              |
|                                      │                                                                                |
|                                      ▼ Rem Ketegangan Kawat (Wire Tension Brake: T = 5 - 25 N)                        |
|                        ┌───────────────────────────┐                                                                  |
|                        │   Upper Wire Guide (U, V) │ (Penggerak Taper 4-Axis U-V CNC)                                 |
|                        │   + Power Feed Contact 1  │                                                                  |
|                        └─────────────┬─────────────┘                                                                  |
|                                      │ Nozzle Flushing Atas (High-Pressure Deionized Water P_up = 1.0 - 2.5 MPa)      |
|                                      ▼                                                                                |
|                       ╔═════════════════════════════╗                                                                 |
|                       ║     Benda Kerja (Anoda +)   ║   Celah Lucutan Percik (Spark Gap g = 10 - 40 µm)               |
|         Arah Gerak ──►║    ┌───────────────────┐    ║ ◄─ Kolom Plasma Suhu Tinggi (T_plasma ~ 10,000 - 20,000 K)      |
|         Kawat (v_f)   ║    │   Kawat (Katoda -)│    ║                                                                 |
|                       ║    │   Defleksi Lag δ  │    ║   Ketebalan Benda Kerja (H)                                     |
|                       ║    └───────────────────┘    ║                                                                 |
|                       ║                             ║                                                                 |
|                       ╚═════════════════════════════╝                                                                 |
|                                      │ Nozzle Flushing Bawah (P_down = 1.0 - 2.5 MPa)                                 |
|                                      ▼                                                                                |
|                        ┌───────────────────────────┐                                                                  |
|                        │   Lower Wire Guide (X, Y) │ (Meja Kerja X-Y Koordinat CNC)                                   |
|                        │   + Power Feed Contact 2  │                                                                  |
|                        └─────────────┬─────────────┘                                                                  |
|                                      │ Penggulung Kawat Bekas (Take-Up Rollers, v_w = 2 - 15 m/min)                   |
|                                      ▼                                                                                |
|                       Tempat Penampungan Kawat Daur Ulang (Used Wire Chopper / Bin)                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Siklus Pulsa Listrik dan Tahapan Lucutan Percik
Siklus pembangkitan percik tunggal terbagi ke dalam empat tahapan fisik mikro-detik:
1. **Fase Pra-Penyalaan (*Ignition Delay Time $t_d$*)**: Tegangan rangkaian terbuka (*open-circuit voltage $u_i = 80 - 300 \text{ V}$*) diterapkan pada elektroda. Medan listrik kuat terbentuk ($E \approx 10^7 \text{ V/m}$), mempolarisasi ion dan partikel debris konduktif dalam dielektrik hingga dielektrik mengalami tembus listrik (*dielectric breakdown*).
2. **Fase Lucutan Plasma (*Pulse-On Time $t_{on}$*)**: Kanal plasma konduktif terbentuk seketika. Arus lucutan puncak (*peak current $I_p = 5 - 50 \text{ A}$*) mengalir, menurunkan tegangan ke level busur lucutan (*discharge voltage $u_e \approx 20 - 35 \text{ V}$*). Suhu kolom plasma melonjak drastis hingga $10,000 - 20,000 \text{ K}$, mencairkan dan menguapkan titik mikro pada benda kerja dan kawat.
3. **Fase Ledakan Gelembung & Ejeksi Debris (*Explosive Expansion & Debris Flushing*)**: Pada akhir $t_{on}$, arus dimatikan. Kolom plasma runtuh mendadak, memicu gelombang kejut hidrodinamik mikro (*implosion/shockwave*) yang melepaskan logam cair ke dalam aliran air terdeionisasi, membentuk kawah erosi (*discharge crater*).
4. **Fase Deionisasi & Pemulihan (*Pulse-Off Time $t_{off}$*)**: Fluida dielektrik menyapu bersih butiran debris padat (*solidified debris particles*) dan memulihkan kekuatan dielektrik celah sebelum pulsa berikutnya ditembakkan. Jika $t_{off}$ terlalu pendek, percik terkonsentrasi pada satu titik memicu busur api kontinu (*destructive arcing*) dan kawat putus (*wire breakage*).

---

## 3. Landasan Teori & Formulasi Matematis Formal

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               MODEL DINAMIKA DEFLEKSI KAWAT (WIRE LAG MODEL) & GAYA TOTAL                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     Pemandu Atas (z = H/2)                                                                                            |
|     ┌────────────────────────┐                                                                                        |
|     │           ●            │  Kawat Terjepit pada Ketegangan Mekanis T_w (N)                                        |
|     └───────────┬────────────┘                                                                                        |
|                 │                                                                                                     |
|                 │  Gaya Total Per Satuan Panjang:                                                                     |
|                 │  q(z) = F_hyd(z) + F_elec(z) + F_mag(z) + F_rep(z)                                                 |
|                 │                                                                                                     |
|                 │         Profil Defleksi Lengkung Kawat w(z):                                                        |
|                 │                w(z) = (q_0 / 2 T_w) · [ (H/2)^2 - z^2 ]                                             |
|                 │                                                                                                     |
|                 │                    Defleksi Maksimum (Wire Lag di Tengah Benda Kerja z=0):                          |
|                 │                    ═══════════════════════════════════════════                                      |
|                 │                   ║  δ_max = (q_0 · H^2) / (8 · T_w)          ║                                     |
|                 │                    ═══════════════════════════════════════════                                      |
|                 │                                                                                                     |
|     ┌───────────┴────────────┐                                                                                        |
|     │           ●            │                                                                                        |
|     └────────────────────────┘                                                                                        |
|     Pemandu Bawah (z = -H/2)                                                                                          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Energi Pulsa Lucutan & Material Removal Rate (MRR)
Energi yang dilepaskan dalam satu siklus pulsa tunggal ($W_e$) diformulasikan sebagai integral perkalian tegangan lucutan $u(t)$ dan arus $i(t)$:

$$ W_e = \int_0^{t_{on}} u(t) \cdot i(t) \, dt \approx u_e \cdot I_p \cdot t_{on} \quad [\text{Joule}] $$

Daya rata-rata yang diserap celah pemesinan ($P_{avg}$):

$$ P_{avg} = W_e \cdot f = u_e \cdot I_p \cdot t_{on} \cdot \frac{1}{t_{on} + t_{off} + t_d} = u_e \cdot I_p \cdot D_c $$

di mana $D_c = \frac{t_{on}}{t_{on} + t_{off} + t_d}$ adalah *discharge duty cycle*.

Laju Pengikisan Material Volumetrik teoritis (*Volumetric Material Removal Rate - $MRR_v$*) diturunkan dari fraksi energi termal yang masuk ke anoda ($\eta_{anode} \approx 0.30 - 0.50$) dibagi energi spesifik peleburan dan penguapan volumetrik material ($C_v \Delta T + L_f + L_v$):

$$ MRR_v = \frac{\eta_{anode} \cdot P_{avg}}{\rho_m \left[ c_p (T_m - T_0) + L_f + \xi_v L_v \right]} \quad \left[\frac{\text{mm}^3}{\text{min}}\right] $$

di mana:
- $\rho_m$ adalah densitas benda kerja ($\text{g/cm}^3$).
- $c_p$ adalah kapasitas panas spesifik ($\text{J/g}\cdot\text{K}$).
- $T_m$ adalah titik lebur material ($\text{K}$).
- $L_f, L_v$ adalah panas laten fusi dan penguapan ($\text{J/g}$).
- $\xi_v$ adalah fraksi massa yang terevaporasi secara langsung ($\approx 0.05 - 0.15$).

Kecepatan potong linier mesin (*cutting feed rate $v_f$*) pada benda kerja setebal $H$ dengan lebar kerf $W_k$:

$$ v_f = \frac{MRR_v}{H \cdot W_k} \quad \left[\frac{\text{mm}}{\text{min}}\right] $$

---

### 3.2. Pemodelan Defleksi Kawat (*Wire Lag*) & Keseimbangan Gaya Mekanis
Kawat elektroda tipis bermodulus elastisitas $E$ dan berdiameter $d_w$ mengalami tegangan tarik aksial $T_w$. Sepanjang bentang benda kerja setebal $H$, kawat menerima distribusi gaya resultan per satuan panjang transversal $q(z)$ yang berlawanan dengan arah gerak potong:

$$ q(z) = F_{repulsion} + F_{hydraulic} + F_{electrostatic} + F_{electromagnetic} $$

1. **Gaya Reaksi Impak Lucutan ($F_{repulsion}$)**: Gaya dorong akibat ekspansi gelembung gas plasma:
   
   $$ F_{rep} \approx \kappa_{rep} \cdot I_p \cdot u_e \cdot \frac{t_{on}}{t_{on} + t_{off}} $$

2. **Gaya Seret Hidrodinamik Flushing ($F_{hydraulic}$)**: Akibat gradien tekanan air dielektrik berkecepatan tinggi:
   
   $$ F_{hyd} = \frac{1}{2} C_d \cdot \rho_{dielectric} \cdot v_{flush}^2 \cdot d_w $$

3. **Gaya Elektrostatik ($F_{electrostatic}$)** dan **Elektromagnetik Lorentz ($F_{electromagnetic}$)**:
   
   $$ F_{elec} = \frac{\epsilon_0 \epsilon_r \cdot u_e^2 \cdot d_w}{2 g^2}, \quad F_{mag} = \frac{\mu_0 \cdot I_p^2}{2 \pi g} $$

Persamaan diferensial defleksi transversal kawat $w(z)$ dengan asumsi tegangan senar teregang (*stretched string mechanics* di mana $T_w \gg E I \frac{\pi^2}{H^2}$):

$$ T_w \frac{d^2 w(z)}{dz^2} = -q(z) $$

Dengan kondisi batas $w\left(-\frac{H}{2}\right) = 0$ dan $w\left(\frac{H}{2}\right) = 0$, solusi profil defleksi untuk gaya terdistribusi seragam $q(z) = q_0$ adalah:

$$ w(z) = \frac{q_0}{2 T_w} \left( \frac{H^2}{4} - z^2 \right) $$

Defleksi kelambatan kawat maksimum terjadi tepat di pusat simetri benda kerja ($z = 0$):

$$ \delta_{max} = w(0) = \frac{q_0 \cdot H^2}{8 T_w} $$

Jika ketegangan kawat $T_w$ rendah atau ketebalan benda kerja $H$ sangat besar, $\delta_{max}$ melonjak secara kuadratik ($H^2$). Hal ini menyebabkan dinding potongan menjadi cembung (*barrel error*) sebesar $2 \delta_{max}$.

---

### 3.3. Dinamika Tikungan Tajam (*Corner Error*) & Algoritma Kompensasi Lintasan CNC

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       FENOMENA DISTORSI TIKUNGAN KAWAT WEDM & STRATEGI KOMPENSASI CNC                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  A. Distorsi Lintasan Tanpa Kompensasi:                                                                               |
|                                                                                                                       |
|             Lintasan Pemandu Kawat (Program CNC)                                                                      |
|             ─────────────────────────┐                                                                                |
|                                      │                                                                                |
|                                      │                                                                                |
|                                     ┌┘ ◄── Lintasan Aktual Kawat Bagian Tengah                                        |
|                                    /       (Memotong Sudut / Corner Gouging & Undercut)                               |
|                                   /        Error Radius: \Delta R = \delta_{max} / \sqrt{2}                           |
|                                  /                                                                                    |
|                                                                                                                       |
|  B. Strategi Kompensasi Adaptif Multi-Tahap (CNC Modern):                                                             |
|     1. Corner Feed Deceleration : Kecepatan pakan v_f diturunkan secara eksponensial saat mendekati titik sudut       |
|                                   untuk mereduksi gaya lucutan q_0 -> 0 dan mengembalikan kawat ke posisi tegak.      |
|     2. Corner Power Attenuation : Frekuensi pulsa f dan arus Ip diturunkan proporsional terhadap deselerasi.          |
|     3. Over-Travel & Dwell Path : Pemandu kawat bergerak melewati titik sudut sebesar delta_comp lalu berdiam       |
|                                   (dwell time t_dw = 0.1 - 0.5 s) sebelum berbelok 90 derajat.                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Untuk sudut belokan sebesar $\theta_{corner}$, pergeseran geometris lintasan sudut (*corner error*) diformulasikan sebagai:

$$ \Delta r = \delta_{max} \cdot \frac{1 - \cos\left(\frac{\theta_{corner}}{2}\right)}{\sin\left(\frac{\theta_{corner}}{2}\right)} = \delta_{max} \cdot \tan\left(\frac{\theta_{corner}}{4}\right) $$

Untuk sudut siku-siku $90^\circ$ ($\theta = 90^\circ$):

$$ \Delta r_{90^\circ} = \delta_{max} \cdot \tan(22.5^\circ) \approx 0.4142 \cdot \delta_{max} $$

---

### 3.4. Lebar Kerf Termal, Lapisan Resolidifikasi (*Recast Layer*), dan Tegangan Sisa
Lebar celah potong total (*total kerf width $W_k$*) adalah penjumlahan diameter fisik kawat $d_w$ dan dua kali celah percik lateral (*lateral spark gap $g_{lat}$*):

$$ W_k = d_w + 2 g_{lat} = d_w + 2 \cdot \left( c_g \cdot W_e^{0.33} \cdot \sigma_{dielectric}^{-0.15} \right) $$

Ketebalan rata-rata lapisan putih resolidifikasi (*white / recast layer thickness $h_{recast}$*) berbanding lurus dengan energi pulsa tunggal:

$$ h_{recast} = \alpha_r \cdot \left( u_e \cdot I_p \cdot t_{on} \right)^{0.45} \quad [\mu\text{m}] $$

Pada operasi pemotongan kasar (*roughing cut*), $h_{recast}$ dapat mencapai $15 - 35 \ \mu\text{m}$ dengan tegangan sisa tarik permukaan mencapai $+600 \text{ s/d } +900 \text{ MPa}$. Melalui multi-pass trimming (Skim Cut 1 s/d Skim Cut 4) dengan menurunkan energi pulsa secara bertahap ($t_{on} \to 0.2 \ \mu\text{s}, I_p \to 2 \text{ A}$), ketebalan recast layer dapat ditekan hingga $< 1.0 \ \mu\text{m}$ dengan kualitas permukaan cermin (*mirror finish*, $R_a \le 0.15 \ \mu\text{m}$).

---

## 4. Algoritma Python Solver: Simulasi Dinamika WEDM, Estimasi Wire Lag, MRR, Recast Layer & Kompensasi Kontur Lintasan Kawat CNC

Berikut adalah kode program Python komprehensif berstandar industri untuk memodelkan proses WEDM secara komprehensif, menghitung Material Removal Rate, defleksi kelambatan kawat, ketebalan lapisan resolidifikasi, serta menghasilkan parameter kompensasi sudut dan *multi-pass trimming sequence*.

```python
"""
RuangTI - Industrial Knowledge Engine: High-Precision WEDM Multiphysics Solver
Modul 567: Wire Electrical Discharge Machining Simulation & Corner Error Compensation
Standard Reference: ISO 230-2, CIRP Annals, ASME Journal of Manufacturing Science
"""

import math
from typing import Dict, List, Tuple, Any

class WEDMMultiphysicsSolver:
    """
    Solver Multiphysics untuk Wire Electrical Discharge Machining (WEDM).
    Menghitung dinamika percik termoelektrik, Material Removal Rate (MRR),
    defleksi kelambatan kawat (Wire Lag Deflection), ketebalan recast layer,
    dan parameter kompensasi tikungan sudut CNC.
    """
    
    def __init__(self,
                 wire_diameter_mm: float = 0.25,
                 wire_tension_n: float = 14.0,
                 wire_speed_m_min: float = 8.0,
                 wire_material_modulus_gpa: float = 110.0, # Kuningan CuZn37
                 open_circuit_voltage_v: float = 120.0,
                 discharge_voltage_v: float = 24.0,
                 peak_current_a: float = 28.0,
                 pulse_on_time_us: float = 1.2,
                 pulse_off_time_us: float = 12.0,
                 water_dielectric_conductivity_us_cm: float = 15.0):
        
        self.d_w = wire_diameter_mm * 1e-3  # m
        self.T_w = wire_tension_n  # Newton
        self.v_w = wire_speed_m_min / 60.0  # m/s
        self.E_wire = wire_material_modulus_gpa * 1e9  # Pa
        self.u_i = open_circuit_voltage_v
        self.u_e = discharge_voltage_v
        self.I_p = peak_current_a
        self.t_on = pulse_on_time_us * 1e-6  # s
        self.t_off = pulse_off_time_us * 1e-6  # s
        self.sigma_d = water_dielectric_conductivity_us_cm
        
    def calculate_discharge_energy(self) -> Dict[str, float]:
        """
        Menghitung energi pulsa tunggal, frekuensi lucutan, duty cycle,
        daya rata-rata celah, dan estimasi celah percik (spark gap).
        """
        # Energi pulsa tunggal (Joule)
        W_single = self.u_e * self.I_p * self.t_on  # J
        
        # Periode siklus & Frekuensi lucutan aktual
        # Termasuk estimasi waktu ignition delay t_d ~ 0.3 * t_on
        t_d = 0.35 * self.t_on
        t_period = self.t_on + self.t_off + t_d
        freq_discharge_khz = (1.0 / t_period) / 1000.0
        
        duty_cycle = self.t_on / t_period
        power_avg_w = self.u_e * self.I_p * duty_cycle
        
        # Celah percik radial teoritis (Spark Gap g in um)
        spark_gap_um = 12.5 * (W_single * 1000.0) ** 0.32 * (15.0 / self.sigma_d) ** 0.12
        spark_gap_m = spark_gap_um * 1e-6
        
        total_kerf_width_mm = (self.d_w + 2.0 * spark_gap_m) * 1e3
        
        return {
            "single_pulse_energy_mj": round(W_single * 1000.0, 3),
            "discharge_frequency_khz": round(freq_discharge_khz, 2),
            "duty_cycle_pct": round(duty_cycle * 100.0, 2),
            "average_power_watts": round(power_avg_w, 2),
            "spark_gap_um": round(spark_gap_um, 2),
            "total_kerf_width_mm": round(total_kerf_width_mm, 4)
        }

    def simulate_machining_process(self,
                                   material_name: str,
                                   density_g_cm3: float,
                                   melting_point_c: float,
                                   specific_heat_j_g_k: float,
                                   latent_heat_fusion_j_g: float,
                                   workpiece_height_mm: float,
                                   corner_angle_deg: float = 90.0) -> Dict[str, Any]:
        """
        Mensimulasikan proses pemotongan WEDM: MRR, cutting speed vf,
        profil defleksi kelambatan kawat (Wire Lag delta), recast layer,
        dan kompensasi sudut lintasan CNC.
        """
        pulse = self.calculate_discharge_energy()
        W_pulse_j = pulse["single_pulse_energy_mj"] * 1e-3
        P_avg = pulse["average_power_watts"]
        kerf_width_mm = pulse["total_kerf_width_mm"]
        
        H = workpiece_height_mm * 1e-3  # m
        rho = density_g_cm3 * 1e3  # kg/m^3
        T_m = melting_point_c
        c_p = specific_heat_j_g_k * 1000.0  # J/kg.K
        L_f = latent_heat_fusion_j_g * 1000.0  # J/kg
        
        # 1. Perhitungan Material Removal Rate (MRR)
        # Energi spesifik peleburan termal per unit volume (J/m^3)
        delta_T = max(100.0, T_m - 25.0)
        thermal_energy_per_volume = rho * (c_p * delta_T + L_f)
        
        # Fraksi efisiensi termal ke benda kerja (anoda) ~ 38%
        eta_thermal = 0.38
        mrr_volumetric_m3_s = (eta_thermal * P_avg) / thermal_energy_per_volume
        mrr_volumetric_mm3_min = mrr_volumetric_m3_s * 1e9 * 60.0
        
        # Kecepatan potong linier pakan kawat (Cutting feed rate v_f in mm/min)
        area_cut_per_mm_feed = workpiece_height_mm * kerf_width_mm  # mm^2
        cutting_speed_feed_mm_min = mrr_volumetric_mm3_min / area_cut_per_mm_feed
        
        # 2. Pemodelan Gaya Penolakan Lucutan & Defleksi Wire Lag
        # Gaya reaksi lucutan percik per satuan panjang (N/m)
        # q_0 = C_force * (P_avg / H)
        C_force = 1.45e-3  # Koefisien gaya elektrodinamik dan gelembung plasma
        q_0 = C_force * (P_avg / H)  # N/m
        
        # Defleksi maksimum di pusat ketebalan benda kerja (z = 0)
        # delta_max = (q_0 * H^2) / (8 * T_w)
        delta_max_m = (q_0 * (H ** 2)) / (8.0 * self.T_w)
        delta_max_um = delta_max_m * 1e6
        
        # Profil defleksi sepanjang ketebalan benda kerja (z dari -H/2 sampai +H/2)
        steps = 8
        deflection_profile = []
        for i in range(steps + 1):
            z_rel = -0.5 + (i / float(steps))  # -0.5 s/d +0.5
            z_val_m = z_rel * H
            # w(z) = (q_0 / (2 * T_w)) * ((H/2)^2 - z^2)
            w_z_m = (q_0 / (2.0 * self.T_w)) * (((H / 2.0) ** 2) - (z_val_m ** 2))
            deflection_profile.append({
                "z_position_mm": round(z_val_m * 1e3, 2),
                "wire_lag_deflection_um": round(w_z_m * 1e6, 2)
            })
            
        # 3. Analisis Kesalahan Sudut (Corner Error) & Strategi Kompensasi
        theta_rad = math.radians(corner_angle_deg)
        # Error radius pemotongan sudut tanpa kompensasi
        corner_error_um = delta_max_um * math.tan(theta_rad / 4.0)
        
        # Parameter Kompensasi CNC:
        # Deselerasi pakan saat mendekati sudut: v_corner = v_feed * factor
        corner_decel_feed_mm_min = cutting_speed_feed_mm_min * 0.25
        # Over-travel distance pemandu kawat di puncak sudut
        overtravel_distance_um = corner_error_um * 1.414
        # Waktu dwell pemandu di titik sudut agar kawat kembali tegak (s)
        damping_tau = (2.0 * self.T_w) / (q_0 * H * 100.0) if q_0 > 0 else 0.05
        dwell_time_seconds = max(0.15, round(3.0 * damping_tau, 2))
        
        # 4. Ketebalan Recast Layer & Kekasaran Permukaan Ra (Roughing Pass)
        recast_layer_thickness_um = 6.2 * ((W_pulse_j * 1e3) ** 0.44)
        Ra_rough_um = 1.85 * ((W_pulse_j * 1e3) ** 0.28)
        
        # 5. Rekomendasi Multi-Pass Skim Cutting Schedule untuk Kualitas Cermin
        skim_passes = [
            {"Pass": "Pass 1 (Main Roughing)", "Current_Ip_A": self.I_p, "Ton_us": self.t_on * 1e6, "Offset_Kerf_mm": round(kerf_width_mm / 2.0, 4), "Ra_um": round(Ra_rough_um, 2), "Recast_um": round(recast_layer_thickness_um, 2)},
            {"Pass": "Pass 2 (Semi-Finish)", "Current_Ip_A": round(self.I_p * 0.45, 1), "Ton_us": round(self.t_on * 1e6 * 0.5, 2), "Offset_Kerf_mm": round((self.d_w*1e3/2.0) + 0.020, 4), "Ra_um": round(Ra_rough_um * 0.52, 2), "Recast_um": round(recast_layer_thickness_um * 0.35, 2)},
            {"Pass": "Pass 3 (Fine Finish)", "Current_Ip_A": round(self.I_p * 0.20, 1), "Ton_us": round(self.t_on * 1e6 * 0.25, 2), "Offset_Kerf_mm": round((self.d_w*1e3/2.0) + 0.008, 4), "Ra_um": round(Ra_rough_um * 0.25, 2), "Recast_um": round(recast_layer_thickness_um * 0.12, 2)},
            {"Pass": "Pass 4 (Mirror Finish)", "Current_Ip_A": round(self.I_p * 0.08, 1), "Ton_us": 0.20, "Offset_Kerf_mm": round((self.d_w*1e3/2.0) + 0.002, 4), "Ra_um": 0.18, "Recast_um": 0.45}
        ]

        return {
            "workpiece_material": material_name,
            "workpiece_height_mm": workpiece_height_mm,
            "volumetric_mrr_mm3_min": round(mrr_volumetric_mm3_min, 2),
            "linear_cutting_speed_mm_min": round(cutting_speed_feed_mm_min, 2),
            "area_cutting_rate_mm2_min": round(cutting_speed_feed_mm_min * workpiece_height_mm, 2),
            "max_wire_lag_deflection_um": round(delta_max_um, 2),
            "barrel_shape_total_error_um": round(2.0 * delta_max_um, 2),
            "uncompensated_corner_error_um": round(corner_error_um, 2),
            "cnc_corner_decel_feed_mm_min": round(corner_decel_feed_mm_min, 2),
            "cnc_corner_overtravel_um": round(overtravel_distance_um, 2),
            "cnc_corner_dwell_time_s": dwell_time_seconds,
            "rough_pass_recast_layer_um": round(recast_layer_thickness_um, 2),
            "rough_pass_surface_roughness_Ra_um": round(Ra_rough_um, 2),
            "wire_deflection_distribution": deflection_profile,
            "multipass_trimming_schedule": skim_passes
        }


# =====================================================================
# VERIFIKASI UNIT TEST & EKSEKUSI SOLVER
# =====================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI - SIMULASI MULTIPHYSICS & WIRE LAG SOLVER WIRE EDM (WEDM)")
    print("=" * 85)
    
    # Inisialisasi sistem WEDM presisi kawat kuningan CuZn37 Ø 0.25 mm
    wedm_system = WEDMMultiphysicsSolver(
        wire_diameter_mm=0.25,
        wire_tension_n=15.0,
        wire_speed_m_min=9.0,
        open_circuit_voltage_v=110.0,
        discharge_voltage_v=25.0,
        peak_current_a=30.0,
        pulse_on_time_us=1.5,
        pulse_off_time_us=14.0,
        water_dielectric_conductivity_us_cm=12.0
    )
    
    pulse_res = wedm_system.calculate_discharge_energy()
    print("\n[1] KARAKTERISTIK PULSA DAYA & CELAH SPARK GAP:")
    for k, v in pulse_res.items():
        print(f"    - {k:32s}: {v}")
        
    # Studi Kasus: Pemotongan Baja Perkakas SKD11 / AISI D2 Hardened (62 HRC, Tebal 40.0 mm)
    print("\n[2] STUDI KASUS: PEMOTONGAN DIE BAJA SKD11 HARDENED 62 HRC (TEBAL 40 mm):")
    d2_eval = wedm_system.simulate_machining_process(
        material_name="Tool Steel AISI D2 / SKD11 (Hardened 62 HRC)",
        density_g_cm3=7.70,
        melting_point_c=1420.0,
        specific_heat_j_g_k=0.46,
        latent_heat_fusion_j_g=270.0,
        workpiece_height_mm=40.0,
        corner_angle_deg=90.0
    )
    
    for k, v in d2_eval.items():
        if k not in ["wire_deflection_distribution", "multipass_trimming_schedule"]:
            print(f"    - {k:35s}: {v}")
            
    print("\n[3] DISTRIBUSI DEFLEKSI WIRE LAG SEPANJANG KETEBALAN BLOK DIE:")
    print(f"    {'Posisi Z (mm)':18s} | {'Defleksi Kelambatan Kawat (um)':32s}")
    print("    " + "-" * 54)
    for d in d2_eval["wire_deflection_distribution"]:
        print(f"    {d['z_position_mm']:18.2f} | {d['wire_lag_deflection_um']:32.2f}")
        
    print("\n[4] JADWAL MULTI-PASS SKIM TRIMMING UNTUK MENGHILANGKAN RECAST LAYER:")
    print(f"    {'Pass Strategi':26s} | {'Ip (A)':8s} | {'Ton (us)':10s} | {'Offset (mm)':12s} | {'Ra (um)':9s} | {'Recast (um)':11s}")
    print("    " + "-" * 84)
    for p in d2_eval["multipass_trimming_schedule"]:
        print(f"    {p['Pass']:26s} | {p['Current_Ip_A']:8.1f} | {p['Ton_us']:10.2f} | {p['Offset_Kerf_mm']:12.4f} | {p['Ra_um']:9.2f} | {p['Recast_um']:11.2f}")
    print("=" * 85)
```

---

## 5. Studi Kasus Industri Nyata: Fabrikasi Punch & Dies Stamping Baja Perkakas SKD11 Hardened (62 HRC) pada Industri Otomotif Presisi

### 5.1. Deskripsi Masalah dan Batasan Rekayasa
Sebuah pabrik pembuat cetakan dan perkakas otomotif presisi (*automotive tooling & die maker*) memproduksi satu set **Punch & Die Progressive Stamping** berbahan baja perkakas **AISI D2 / SKD11** yang telah disepuh panas (*vacuum heat treated & tempered*) hingga kekerasan **62 HRC** dengan ketebalan pelat $H = 40.0 \text{ mm}$.

Spesifikasi perancangan cetakan stamping berkecepatan tinggi (*high-speed blanking die*) mewajibkan:
1. Toleransi celah punch-ke-die (*punch-to-die clearance*) sangat presisi: $c = 15.0 \pm 1.5 \ \mu\text{m}$ seragam di seluruh kontur profil.
2. Kesalahan kelurusan vertikal dinding potongan (*straightness error / barrelling*) $\le 2.0 \ \mu\text{m}$.
3. Radius ketajaman sudut punch ($R_{corner} = 0.10 \text{ mm}$) bebas distorsi undercut/gouging.
4. Lapisan putih resolidifikasi (*recast layer*) harus $< 1.0 \ \mu\text{m}$ untuk mencegah inisiasi retak lelah mikro (*fatigue micro-crack spalling*) selama operasi cetak tekan 1.5 juta stroke.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN STRATEGI PEMOTONGAN SINGLE PASS VS 4-PASS SKIM TRIMMING                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  A. Single Pass Roughing Konvensional:                                                                                |
|     - Kecepatan potong tinggi (v_f = 3.2 mm/min), namun menghasilkan Wire Lag delta_max = 14.8 um.                   |
|     - Menghasilkan profil barel cembung di bagian tengah benda kerja (+29.6 um error total).                          |
|     - Recast layer tebal (18.5 um) penuh tegangan sisa tarik (+750 MPa), rawan gompal dalam 10,000 stroke.            |
|                                                                                                                       |
|  B. 4-Pass CNC Skim Trimming Sequence (Optimized Strategy):                                                          |
|     - Pass 1 (Rough Cut): Membuka celah utama dengan offset +0.155 mm, laju potong 120 mm^2/min.                      |
|     - Pass 2 (Semi-Finish): Menghilangkan 80% distorsi barel, offset +0.138 mm, energi pulsa dikurangi 55%.          |
|     - Pass 3 (Fine Finish): Mengoreksi kelurusan dinding hingga error < 1.0 um, offset +0.129 mm.                     |
|     - Pass 4 (Mirror Skim): Menghapus seluruh recast layer mikro, offset +0.126 mm, menghasilkan Ra 0.18 um.         |
|     - Hasil Akhir: Die mampu bertahan hingga 2.2 juta stroke tanpa retak lelah.                                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.2. Desain Eksperimen Parameter & Optimasi
Dilakukan penyesuaian parameter terintegrasi:
- **Tegangan Kawat ($T_w$)**: Ditingkatkan dari nilai standar 10.0 N menjadi 15.5 N untuk memperkaku kawat terhadap gaya tolakan lucutan.
- **Flushing Pressure Adaptif**: Tekanan flushing atas dan bawah diatur independen ($P_{flush} = 1.6 \text{ MPa}$) dengan nosel menempel rapat pada permukaan ($SOD \le 0.1 \text{ mm}$) untuk mencegah deviasi jet air.
- **Algoritma CNC Corner Control**: Mengaktifkan modul *Corner Adaptive Deceleration & Dwell Path* pada sudut tajam $90^\circ$, memperlambat pakan dari $3.2 \text{ mm/min}$ menjadi $0.8 \text{ mm/min}$ dengan *dwell time* $0.35 \text{ s}$ di titik puncak sudut.

### 5.3. Hasil Evaluasi Metalurgi & Metrologi
1. **Analisis Cross-Section SEM & Uji Kekerasan Mikro (Vickers)**: Pada pemotongan tunggal tanpa skim cut, terdeteksi lapisan martensitik putih getas tebal $19.2 \ \mu\text{m}$ dengan kekerasan mikro melonjak ke 68 HRC disertai retak rambut mikro. Setelah penerapan 4-Pass Skim Trimming, lapisan recast berkurang hingga tersisa $0.6 \ \mu\text{m}$, sepenuhnya berada dalam batas toleransi aman industri kedirgantaraan/otomotif.
2. **Pengukuran Koordinat CMM (Coordinate Measuring Machine)**: Kesalahan barel kelurusan dinding turun dari $28.4 \ \mu\text{m}$ menjadi $1.4 \ \mu\text{m}$. Akurasi kontur sudut tajam tercapai dalam batas toleransi $\pm 1.2 \ \mu\text{m}$.
3. **Kekasaran Permukaan**: Tercapai nilai $R_a = 0.18 \ \mu\text{m}$ ($R_z = 1.15 \ \mu\text{m}$), meniadakan proses manual lapping/polishing dan menghemat waktu manufaktur cetakan sebesar 42%.

---

## 6. Integrasi Standar Industri, Aspek K3L, dan Panduan Praktis Operator

Dalam pengoperasian harian mesin Wire EDM di lingkungan industri manufaktur, prosedur standar operasi dan keselamatan kerja harus dipatuhi:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                STANDAR KUALITAS & PROTOKOL K3L SISTEM WIRE EDM                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Standar Akurasi Mesin & Metrologi:                                                                               |
|     - ISO 230-2: Penentuan akurasi posisi dan kemampuan pengulangan sumbu CNC (Linear & Taper Positioning).           |
|     - ISO 14137: Uji penerimaan kondisi kerja dan akurasi geometri untuk mesin Wire EDM industri.                     |
|     - ASME B46.1 / ISO 4287: Pengukuran tekstur dan integritas permukaan mikro.                                      |
|                                                                                                                       |
|  2. Manajemen Kualitas Dielektrik & Filtrasi (ISO 14001):                                                             |
|     - Konduktivitas Dielektrik: Wajib dikontrol pada rentang 10 - 15 uS/cm menggunakan resin penukar ion (DI Resin).  |
|     - Filter Kertas Mikro: Penggantian kartrid filter mikron (3 - 5 um) berkala untuk mencegah akumulasi debris.      |
|                                                                                                                       |
|  3. Protokol K3L & Keselamatan Listrik (OSHA 1910.303 / NFPA 79):                                                     |
|     - Bahaya Tegangan Listrik: Rangkaian interlock otomatis mematikan pulsa daya saat pintu tangki dibuka.             |
|     - Ventilasi Gas Ledak: Proses percik menguraikan air menjadi gas Hidrogen dan Oksigen mikro; sistem ventilasi     |
|       exhaust lokal wajib beroperasi untuk mencegah akumulasi gas mudah terbakar di atas tangki kerja.                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Referensi Akademis & Standar Industri Terverifikasi

1. **Ho, K. H., & Newman, S. T.** (2003). *State of the art electrical discharge machining (EDM)*. **International Journal of Machine Tools and Manufacture**, 43(13), 1287–1300. https://doi.org/10.1016/S0890-6955(03)00162-7
2. **Klocke, F., Zeis, M., Klink, A., & Veselovac, D.** (2013). *Technological profile of Electrodischarge Machining (EDM)*. **CIRP Annals - Manufacturing Technology**, 62(1), 183–186. https://doi.org/10.1016/j.cirp.2013.03.090
3. **Conde, A., Sánchez, J. A., Plaza, S., & Ramos, J. M.** (2018). *Experimental Measurement of Wire-lag Effect and Its Relation with Signal Classification on Wire EDM*. **Procedia CIRP**, 68, 594–599. https://doi.org/10.1016/j.procir.2017.12.120
4. **Abyar, H., & Abdullah, A.** (2019). *Analyzing wire deflection errors of WEDM process on small arced corners*. **Journal of Manufacturing Processes**, 37, 237–248. https://doi.org/10.1016/j.jmapro.2018.11.026
5. **Goyal, A., Sharma, R., & Singla, M.** (2022). *Modification and adaptation of wire lag model based on discharge energy and wire tension*. **The International Journal of Advanced Manufacturing Technology**, 117(3), 885–898. https://doi.org/10.1007/s00170-021-07870-1
6. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th Edition). John Wiley & Sons. ISBN: 978-1-119-70642-7.
7. **International Organization for Standardization**. (2015). *ISO 14137:2015 - Test conditions for wire electrical-discharge machines (wire EDM) — Testing of the accuracy*. ISO Geneva.
8. **American Society of Mechanical Engineers**. (2019). *ASME B46.1: Surface Texture (Surface Roughness, Waviness, and Lay)*. ASME New York.
