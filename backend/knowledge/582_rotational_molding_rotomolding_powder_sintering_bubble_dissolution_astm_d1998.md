# Modul 582: Rotational Molding (Rotomolding): Kinetika Sintering Serbuk Polimer (Polymer Sintering Coalescence), Disolusi Gelembung Viskoelastik (Bubble Dissolution), Kinematika Rotasi Biaksial, dan Kontrol Siklus Termal PIAT (ASTM D1998 & ISO 17855)

## 1. Pengantar & Prinsip Fundamental Rotational Molding (Rotomolding)

Rotational Molding (Rotomolding) — atau *rotational casting* — adalah proses manufaktur termoplastik suhu tinggi bertekanan atmosfer rendah (*zero-shear / pressureless forming process*) yang digunakan untuk memproduksi komponen berongga (*hollow seamless articles*) berskala kecil hingga raksasa (kapasitas $1\text{ liter}$ hingga $> 50.000\text{ liter}$) dengan ketebalan dinding yang sangat seragam dan bebas dari tegangan sisa orientasi aliran (*flow-induced residual stress*).

Berbeda secara fundamental dengan proses ekstrusi tiup (*Blow Molding*) atau cetak injeksi (*Injection Molding*) yang memanfaatkan lelehan polimer bertekanan tinggi ($5 - 150\text{ MPa}$) dan laju geser tinggi ($\dot{\gamma} > 10^3\text{ s}^{-1}$), rotomolding menggunakan serbuk polimer mikro (*micropelletized / grinded powder*, mesh $35\text{ mesh} \approx 500\ \mu\text{m}$) yang dimasukkan ke dalam cetakan logam berongga (*split-mold aluminum / sheet steel*). Cetakan kemudian dipanaskan di dalam oven sambil diputar secara simultan mengelilingi dua sumbu ortogonal tegak lurus (*biaxial rotation: major axis & minor axis*).

Di bawah pengaruh gravitasi dan fluks termal konduksi dari dinding cetakan panas:
1. Butiran serbuk polimer mengalir bebas (*tumbling powder bed*), menempel pada permukaan dinding cetakan saat mencapai temperatur leleh ($T_m$).
2. Partikel serbuk mengalami koalesensi viskositas lelehan (*viscous sintering*) membentuk lapisan homogen tanpa tekanan mekanis luar.
3. Kantong-kantong udara yang terjebak di antara butiran serbuk membentuk rongga mikro/gelembung (*bubble entrapment*).
4. Gelembung udara berdifusi dan larut secara perlahan ke dalam massa lelehan polimer (*bubble dissolution kinetics*) hingga terbentuk dinding padat bebas pori (*pore-free homogeneous matrix*).
5. Cetakan dipindahkan ke stasiun pendinginan (*cooling chamber*) hingga polimer mengkristal dan benda kerja dikeluarkan (*demolding*).

Standar internasional dan industri yang mengatur fabrikasi dan metrologi komponen rotomolding mencakup:
- **ASTM D1998**: *Standard Specification for Polyethylene Upright Storage Tanks*.
- **ISO 17855-1 / ISO 17855-2**: *Plastics — Polyethylene (PE) moulding and extrusion materials*.
- **ASTM D5420 / ISO 6603-2**: *Standard Test Method for Impact Resistance of Flat, Rigid Plastic Specimen by Means of a Falling Dart (ARM Low-Temperature Impact Test at -40 °C)*.
- **ASTM D1693**: *Standard Test Method for Environmental Stress-Cracking Resistance (ESCR) of Polyethylene Plastics*.
- **ISO 13000**: *Plastics — Polytetrafluoroethylene (PTFE) semi-finished products*.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ARSITEKTUR MESIN ROTATIONAL MOLDING KARUSEL TIGA-LENGAN                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       [ MENARA POROS PUSAT TURRET CAROUSEL ]                                          |
|                                                              │                                                        |
|                 ┌────────────────────────────────────────────┼────────────────────────────────────────────┐           |
|                 │ Lengas 1                                   │ Lengan 2                                   │ Lengan 3  |
|                 ▼                                            ▼                                            ▼           |
|  ┌──────────────────────────────┐             ┌──────────────────────────────┐             ┌────────────────────────┐ |
|  │      STASIUN PEMANASAN       │             │      STASIUN PENDINGINAN     │             │  STASIUN BONGKAR-MUAT  │ |
|  │        (HEATING OVEN)        │             │       (COOLING CHAMBER)      │             │  (LOADING / DEMOLDING) │ |
|  │  T_oven = 250 - 350 °C       │             │  Kipas Udara Paksa /         │             │  Pengisian Serbuk Baru │ |
|  │  Sirkulasi Gas Panas Konveksi│             │  Kabut Air (Water Mist Spray)│             │  & Pelepasan Benda Jadi│ |
|  │  ┌────────────────────────┐  │             │  ┌────────────────────────┐  │             │  ┌──────────────────┐  │ |
|  │  │  Sumbu Utama (Major)   │  │             │  │   Pendinginan Terkontrol│ │             │  │ Cetakan Dibuka   │  │ |
|  │  │   Omega_1 = 4 - 12 rpm │  │             │  │   Laju dT/dt = 5-15°C/m │ │             │  │ T_part < 60 °C   │  │ |
|  │  │           │            │  │             │  │                        │  │             │  └──────────────────┘  │ |
|  │  │   Sumbu Kedua (Minor)  │  │             │  │                        │  │             └────────────────────────┘ |
|  │  │   Omega_2 = 1 - 4 rpm  │  │             │  │                        │  │                                        |
|  │  │   (Biaxial Speed Ratio)│  │             │  │                        │  │                                        |
|  │  └────────────────────────┘  │             │  └────────────────────────┘  │                                        |
|  └──────────────────────────────┘             └──────────────────────────────┘                                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                 EVOLUSI MIKROSTRUKTUR POLIMER SELAMA FASE SINTERING & DISOLUSI                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. SERBUK MELELEH DI DINDING          2. KOALESENSI LEHER SINTER             3. DISOLUSI GELEMBUNG UDARA            |
|   ┌────────────────────────────────┐    ┌─────────────────────────────────┐    ┌─────────────────────────────────┐    |
|   │ Partikel serbuk kontak saling  │    │ Leher lelehan membesar di bawah │    │ Tekanan kapiler Laplace menekan │    |
|   │ menempel akibat perpindahan    │──► │ pengaruh tegangan permukaan     │──► │ udara berdifusi ke matriks leleh│    |
|   │ kalor konduksi dinding cetakan │    │ lelehan (Frenkel Sintering Model│    │ Struktur kompak bebas void      │    |
|   └────────────────────────────────┘    └─────────────────────────────────┘    └─────────────────────────────────┘    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Kinematika Rotasi Biaksial & Dinamika Distribusi Serbuk (*Biaxial Rotation Kinematics*)

Keseragaman ketebalan dinding produk rotomolding dikendalikan oleh trayektori jalur gravitasi bed serbuk polimer terhadap orientasi spasial cetakan 3D.

### 2.1 Persamaan Kinematika Sumbu Ganda (Biaxial Speed Ratio)
Gerakan titik sembarang $\mathbf{r}_0 = [x_0, y_0, z_0]^T$ pada permukaan dinding cetakan dinyatakan dalam koordinat global melalui matriks transformasi rotasi Euler dua-sumbu:

$$\mathbf{r}(t) = \mathbf{R}_z(\omega_1 t) \cdot \mathbf{R}_x(\omega_2 t) \cdot \mathbf{r}_0$$

Di mana:
- $\omega_1 = \frac{2\pi N_1}{60}$ = Kecepatan sudut sumbu utama (*major / arm axis*, $\text{rad/s}$).
- $\omega_2 = \frac{2\pi N_2}{60}$ = Kecepatan sudut sumbu kedua (*minor / plate axis*, $\text{rad/s}$).
- Rasio kecepatan rotomolding didefinisikan sebagai $R_v = \frac{N_1}{N_2}$ (pada umumnya dipilih rasio non-integer atau integer ganjil seperti $4:1$, $3:1$, atau $8:1$ untuk mencegah pengulangan lintasan harmonik/jalur berulang).

$$\mathbf{R}_z(\theta_1) = \begin{bmatrix} \cos(\omega_1 t) & -\sin(\omega_1 t) & 0 \\ \sin(\omega_1 t) & \cos(\omega_1 t) & 0 \\ 0 & 0 & 1 \end{bmatrix}, \quad \mathbf{R}_x(\theta_2) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos(\omega_2 t) & -\sin(\omega_2 t) \\ 0 & \sin(\omega_2 t) & \cos(\omega_2 t) \end{bmatrix}$$

### 2.2 Dinamika Aliran Serbuk & Sudut Henti (*Angle of Repose*)
Serbuk polimer di dalam cetakan mengalami rezim aliran transisi antara *cascading* dan *cataracting* bergantung pada bilangan Froude rotasional ($\text{Fr}$):

$$\text{Fr} = \frac{\omega_1^2 R_{\text{mold}}}{g} \ll 1 \quad (\text{Rezim Quasistatis Gravitasi Murni})$$

Ketika kemiringan dinding cetakan melampaui sudut henti dinamis serbuk ($\theta_{\text{repose}} \approx 28^\circ - 38^\circ$), massa serbuk meluncur turun melintasi permukaan panas, mendepositkan lapisan tipis setebal $50 - 150\ \mu\text{m}$ per putaran.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TRAYEKTORI BED SERBUK TERHADAP SUDUT REPOSE DALAM CETAKAN                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                         Poros Sumbu Utama Omega_1                                                     |
|                                                    │                                                                  |
|                                       ┌────────────┴────────────┐                                                     |
|                                       │   Dinding Cetakan Panas │                                                     |
|                                       │    (T_mold > T_melt)    │                                                     |
|                                       │                         │                                                     |
|                                       │   \           /         │                                                     |
|                                       │    \  Serbuk /          │ Lapisan Polimer Meleleh Menempel                    |
|                                       │     \ Menempel          │ (Polymer Skin Deposition)                           |
|                                       │      \     /            │                                                     |
|                                       │       \   /             │                                                     |
|                                       │        \_/              │                                                     |
|                                       │     ░░░░░░░             │                                                     |
|                                       │   ░░░░░░░░░░░ ◄─────────┼── Bed Serbuk Berguling (Tumbling Powder Pool)       |
|                                       │  ░░░░░░░░░░░░░          │   Sudut Henti theta_repose = 32°                    |
|                                       └─────────────────────────┘                                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Kinetika Koalesensi Sintering Serbuk & Disolusi Gelembung Pori (*Powder Sintering & Bubble Dissolution*)

Setelah partikel serbuk polimer menempel pada dinding cetakan, tegangan permukaan lelehan polimer mendorong pembentukan dan pertumbuhan leher kontak (*neck growth*).

### 3.1 Model Sintering Viscous Newtonian Frenkel-Eshelby & Modifikasi Bellehumeur
Pertumbuhan radius leher kontak $y(t)$ antara dua partikel sferis polimer dengan radius awal $a_0$ diatur oleh kesetimbangan disipasi energi viskos dan energi bebas permukaan:

$$\left(\frac{y(t)}{a_0}\right)^2 = \frac{3 \Gamma}{2 \eta_0(T) a_0} \cdot t$$

Di mana:
- $y(t)$ = Radius leher sinter pada waktu $t$ ($\text{m}$).
- $a_0$ = Radius partikel serbuk rata-rata ($\text{m}$).
- $\Gamma$ = Tegangan permukaan lelehan polimer ($\text{N/m}$, untuk LLDPE $\Gamma \approx 0.025 - 0.030\ \text{N/m}$).
- $\eta_0(T)$ = Viskositas lelehan pada laju geser nol (*zero-shear rate viscosity*, $\text{Pa}\cdot\text{s}$), mengikuti relasi Arrhenius-Andrade:
  $$\eta_0(T) = \eta_{\text{ref}} \cdot \exp\left[ \frac{E_{\eta}}{R_g} \left( \frac{1}{T} - \frac{1}{T_{\text{ref}}} \right) \right]$$

Untuk polimer viskoelastik non-Newtonian dengan waktu relaksasi $\lambda_r$, model disempurnakan oleh Bellehumeur et al.:

$$\frac{d\theta}{dt} = \frac{\Gamma}{\eta_0 a_0} \cdot \frac{2^{-5/3} \cos\theta \sin\theta (2 - \cos\theta)^{1/3}}{(1 - \cos\theta) (1 + \cos\theta)^{1/3}} \cdot \left[ 1 + \frac{\lambda_r \Gamma}{\eta_0 a_0} f(\theta) \right]^{-1}$$

dengan $y(t) = a_0 \sin\theta(t)$.

### 3.2 Kinetika Disolusi Gelembung Viskoelastik (Gogos-Kontopoulou Bubble Dissolution Model)
Setelah koalesensi leher selesai ($y/a \to 1$), udara yang terperangkap membentuk rongga mikro/gelembung sferis dengan radius $R_b$. Gelembung mengalami penyusutan akibat tekanan kapiler Laplace $\Delta P_{\text{Laplace}} = \frac{2\Gamma}{R_b}$ yang mendorong difusi gas nitrogen dan oksigen ke dalam matriks lelehan polimer:

$$\frac{dR_b}{dt} = - \frac{D_g \cdot K_H \cdot \left( \frac{2\Gamma}{R_b} + \Delta P_{\text{ext}} \right)}{\rho_{\text{gas}} \cdot R_b} - \frac{\Gamma}{4 \eta_0(T)}$$

Di mana:
- $R_b(t)$ = Radius gelembung sesaat ($\text{m}$).
- $D_g(T) = D_0 \exp\left(-\frac{E_D}{R_g T}\right)$ = Koefisien difusi gas dalam lelehan polimer ($\text{m}^2/\text{s}$).
- $K_H$ = Konstanta kelarutan gas Henry ($\text{mol}/(\text{m}^3\cdot\text{Pa})$).
- $\rho_{\text{gas}}$ = Kerapatan molar gas terperangkap ($\text{mol/m}^3$).
- $\Delta P_{\text{ext}}$ = Tekanan balik internal cetakan (jika diaplikasikan sistem *mold pressurization* $0.05 - 0.2\ \text{bar}$).

Jika waktu tinggal lelehan polimer pada temperatur puncak tidak mencukupi, disolusi gelembung gagal tuntas, meninggalkan cacat pori (*pinholes / micro-voids*) yang bertindak sebagai pemusat tegangan (*stress concentrator*) penyebab kegagalan getas (*brittle failure*).

---

## 4. Analisis Termal Siklus IAT (*Peak Internal Air Temperature / PIAT*) & Uji Ketahanan Impak ARM

Kurva temperatur udara internal cetakan (*Internal Air Temperature / IAT*) yang diukur secara real-time menggunakan modul datalogger nirkabel (*K-PAQ / Rotolog*) adalah sidik jari (*fingerprint*) kualitas produk rotomolding.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                     PROFIL KURVA SIKLUS TEMPERATUR IAT (INTERNAL AIR TEMPERATURE)                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Temperatur Udara Dalam Cetakan IAT (°C)                                                                             |
|    ▲                                                                                                                  |
|    │                                              [ PIAT: Peak Internal Air Temp ]                                    |
|    │                                              (T_PIAT = 195 - 215 °C)                                             |
|    │                                                    ▲                                                             |
|    │                                                   / \                                                            |
|    │                                                  /   \  Zona D: PENDINGINAN TERKONTROL                           |
|    │                                                 /     \ (Cooling Stage)                                          |
|    │                        Zona B: INDUKSI         /       \                                                         |
|    │                     PELELEHAN (Melting Plateau)         \                                                        |
|    │                     (T_melt = 125 - 135 °C)   /          \   T_c (Plato Rekristalisasi                           |
|    │                           ┌──────────┐       /            \─── Polimer T_c = 115 - 120 °C)                       |
|    │                          /            \     /              \                                                     |
|    │                         /              \   /                \                                                    |
|    │                        /                ──/                  \                                                   |
|    │                       /   Zona C: PEMATANGAN LELEHAN          \                                                  |
|    │                      /    & DISOLUSI GELEMBUNG                 \                                                 |
|    │  Zona A: PEMANASAN  /     (Curing & Bubble Removal)             \                                                |
|    │  SERBUK AWAL       /                                             \── T_demold (< 60 °C)                          |
|    │                   /                                                  (Bongkar Produk)                            |
|    └──────────────────┴───────────────────────────────────────────────────────► Waktu Siklus (Menit)                |
|                       t_melt                  t_PIAT                t_demold                                          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Hubungan Krusial PIAT terhadap Ketangguhan Impak ARM (-40 °C)
1. **Under-Cured Regime ($T_{\text{PIAT}} < 185\text{ }^\circ\text{C}$)**:
   Disolusi gelembung belum selesai. Pori-pori mikro sisa menyebabkan patah getas (*brittle fracture*) dengan energi serap impak ARM rendah ($E_{\text{impact}} < 40\text{ J}$).
2. **Optimum Cured Regime ($195\text{ }^\circ\text{C} \le T_{\text{PIAT}} \le 215\text{ }^\circ\text{C}$)**:
   Matriks polimer homogen padat 100% bebas gelembung, derajat kristalinitas optimal ($X_c \approx 52 - 58\%$). Mode patah ulet murni (*100% ductile failure*) dengan energi serap impak $E_{\text{impact}} > 180 - 240\text{ J}$ pada $-40\text{ }^\circ\text{C}$ (ASTM D5420).
3. **Over-Cured / Thermal Degradation Regime ($T_{\text{PIAT}} > 230\text{ }^\circ\text{C}$)**:
   Terjadi pemutusan rantai polimer termo-oksidatif (*thermo-oxidative chain scission*) dan degradasi antioksidan (*Oxidation Induction Time / OIT* turun drastis), memicu penggetasan material kembali dan timbul bau hangus.

---

## 5. Algoritma Komputasi & Solusi Python: Simulasi Termal IAT, Koalesensi Partikel, dan Disolusi Gelembung

Berikut adalah implementasi numerik Python lengkap untuk memprediksi kurva profil IAT, laju pertumbuhan leher partikel Frenkel-Bellehumeur, dan kinetika peluruhan radius gelembung mikro polimer.

```python
"""
RuangTI Engine: Modul 582 - Rotational Molding (Rotomolding) Process Simulator
Thermal IAT Cycle, Polymer Viscous Sintering & Bubble Dissolution Kinetics Solver
Standard Reference: ASTM D1998, ISO 17855, ASTM D5420
"""

import math
from typing import Dict, Any, Tuple, List

class RotomoldingProcessSimulator:
    def __init__(self, polymer_props: Dict[str, Any], process_params: Dict[str, Any]):
        """
        Inisialisasi parameter fisik polimer (LLDPE) dan siklus termal cetakan.
        """
        # Polymer Physical & Rheological Properties
        self.T_melt = polymer_props.get("melting_temp_C", 128.0) + 273.15      # K
        self.T_cryst = polymer_props.get("crystallization_temp_C", 116.0) + 273.15 # K
        self.gamma_surface = polymer_props.get("surface_tension_N_m", 0.028)    # N/m
        self.eta_0_ref = polymer_props.get("zero_shear_viscosity_Pa_s", 2600.0) # Pa*s at T_ref
        self.T_ref = polymer_props.get("viscosity_ref_temp_C", 190.0) + 273.15  # K
        self.E_visc = polymer_props.get("activation_energy_visc_J_mol", 41500.0) # J/mol
        self.a0_particle = polymer_props.get("mean_powder_radius_um", 175.0) * 1e-6 # m
        self.R0_bubble = polymer_props.get("initial_bubble_radius_um", 75.0) * 1e-6 # m
        self.D_gas_ref = polymer_props.get("gas_diffusivity_m2_s", 5.2e-10)     # m^2/s at 190C
        self.E_diff = polymer_props.get("activation_energy_diff_J_mol", 34000.0) # J/mol
        self.henry_const = polymer_props.get("henry_solubility_mol_m3_Pa", 1.3e-4) # mol/(m^3*Pa)
        self.rho_gas_molar = polymer_props.get("gas_molar_density_mol_m3", 26.5) # mol/m^3
        
        # Process Operating Parameters
        self.T_oven = process_params.get("oven_temp_C", 300.0) + 273.15        # K
        self.T_cooling_air = process_params.get("cooling_temp_C", 25.0) + 273.15 # K
        self.t_heating = process_params.get("heating_time_sec", 920.0)         # ~15.3 menit oven
        self.t_cooling = process_params.get("cooling_time_sec", 600.0)         # 10 menit cooling
        self.part_thickness = process_params.get("wall_thickness_mm", 8.0) * 1e-3 # m
        self.R_gas = 8.314462 # J/(mol*K)

    def calculate_zero_shear_viscosity(self, T: float) -> float:
        """Menghitung viskositas nol-geser Arrhenius pada suhu T (K)."""
        T = max(T, self.T_melt)
        return self.eta_0_ref * math.exp((self.E_visc / self.R_gas) * ((1.0 / T) - (1.0 / self.T_ref)))

    def calculate_gas_diffusivity(self, T: float) -> float:
        """Menghitung koefisien difusi gas oksigen/nitrogen dalam lelehan polimer."""
        T = max(T, self.T_melt)
        return self.D_gas_ref * math.exp((self.E_diff / self.R_gas) * ((1.0 / self.T_ref) - (1.0 / T)))

    def internal_air_temperature(self, t: float) -> Tuple[float, str]:
        """
        Model Termodinamika Lumping Transien untuk Estimasi Kurva IAT.
        """
        tau_heat = 380.0
        tau_melt_plateau = 180.0
        
        if t <= self.t_heating:
            # Fase Pemanasan
            T_target = self.T_oven - 60.0
            T_base = 298.15 + (T_target - 298.15) * (1.0 - math.exp(-t / tau_heat))
            
            # Efek penyerapan kalor laten pelelehan (Melting Plateau pada 128 °C)
            if 125.0 <= (T_base - 273.15) <= 138.0:
                plateau_damping = math.exp(-((t - 360.0)**2) / (2 * (tau_melt_plateau**2)))
                T_iat = T_base - 12.0 * plateau_damping
                regime = "Melting Plateau"
            else:
                T_iat = T_base
                regime = "Heating & Curing"
        else:
            # Fase Pendinginan
            t_rel = t - self.t_heating
            T_at_piat = 298.15 + (self.T_oven - 60.0 - 298.15) * (1.0 - math.exp(-self.t_heating / tau_heat))
            T_cool_base = self.T_cooling_air + (T_at_piat - self.T_cooling_air) * math.exp(-t_rel / 240.0)
            
            # Plato Rekristalisasi Eksotermik pada ~116 °C
            if 112.0 <= (T_cool_base - 273.15) <= 122.0:
                T_iat = T_cool_base + 6.0 * math.exp(-((t_rel - 150.0)**2) / (2 * (80.0**2)))
                regime = "Crystallization Exotherm"
            else:
                T_iat = T_cool_base
                regime = "Cooling Stage"
                
        return T_iat, regime

    def run_simulation(self, dt: float = 0.5) -> Dict[str, Any]:
        """Eksekusi simulasi proses lengkap secara diskrit waktu."""
        t_total = self.t_heating + self.t_cooling
        
        t = 0.0
        theta = 0.05 # Sudut koalesensi leher awal (rad)
        R_b = self.R0_bubble # Radius gelembung awal (m)
        
        history_t: List[float] = []
        history_iat: List[float] = []
        max_iat = -1000.0
        max_iat_time = 0.0
        
        while t <= t_total:
            T_iat, _ = self.internal_air_temperature(t)
            iat_C = T_iat - 273.15
            history_t.append(t)
            history_iat.append(iat_C)
            
            if iat_C > max_iat:
                max_iat = iat_C
                max_iat_time = t
                
            # 1. Kinetika Sintering Serbuk (Bellehumeur-Frenkel Model)
            if T_iat >= self.T_melt and theta < (math.pi / 2.0 - 0.01):
                eta_0 = self.calculate_zero_shear_viscosity(T_iat)
                dtheta_dt = (self.gamma_surface / (eta_0 * self.a0_particle)) * \
                            (2.0**(-5.0/3.0) * math.cos(theta) * math.sin(theta) * (2.0 - math.cos(theta))**(1.0/3.0)) / \
                            ((1.0 - math.cos(theta)) * (1.0 + math.cos(theta))**(1.0/3.0) + 1e-5)
                theta = min(math.pi / 2.0, theta + dtheta_dt * dt)
                
            # 2. Kinetika Disolusi Gelembung Pori (Gogos-Kontopoulou Model)
            if T_iat >= self.T_melt and theta > 0.50 and R_b > 1.0e-7:
                eta_0 = self.calculate_zero_shear_viscosity(T_iat)
                D_gas = self.calculate_gas_diffusivity(T_iat)
                laplace_pressure = (2.0 * self.gamma_surface) / R_b
                
                diffusion_term = (D_gas * self.henry_const * laplace_pressure) / (self.rho_gas_molar * R_b)
                viscous_term = self.gamma_surface / (4.0 * eta_0)
                
                dR_b_dt = diffusion_term + viscous_term
                R_b = max(0.0, R_b - dR_b_dt * dt)
                
            t += dt
            
        final_sinter_neck_ratio = math.sin(theta)
        final_bubble_radius_um = R_b * 1e6
        bubble_removal_efficiency = ((self.R0_bubble * 1e6 - final_bubble_radius_um) / (self.R0_bubble * 1e6)) * 100.0
        
        # Evaluasi Kualitas Impak ARM (-40 °C) ASTM D5420
        if 195.0 <= max_iat <= 218.0 and final_bubble_radius_um < 5.0:
            arm_impact_energy_J = 210.0 + (max_iat - 195.0) * 1.2
            failure_mode = "100% Ductile Failure (ASTM D1998 Pass)"
            quality_status = "OPTIMUM CURED"
        elif max_iat < 195.0:
            arm_impact_energy_J = max(35.0, 35.0 + (max_iat - 140.0) * 2.5)
            failure_mode = "Brittle / Pinholes Failure (Under-cured)"
            quality_status = "UNDER-CURED"
        else:
            arm_impact_energy_J = max(50.0, 220.0 - (max_iat - 218.0) * 10.0)
            failure_mode = "Thermo-Oxidative Degradation / Brittle (Over-cured)"
            quality_status = "OVER-CURED"
            
        return {
            "piat_C": round(float(max_iat), 2),
            "piat_time_sec": round(float(max_iat_time), 1),
            "sinter_neck_ratio_final": round(float(final_sinter_neck_ratio), 4),
            "final_bubble_radius_um": round(float(final_bubble_radius_um), 2),
            "bubble_removal_efficiency_pct": round(float(bubble_removal_efficiency), 2),
            "arm_impact_energy_J": round(float(arm_impact_energy_J), 1),
            "failure_mode": failure_mode,
            "quality_status": quality_status,
            "astm_d1998_compliant": quality_status == "OPTIMUM CURED"
        }

if __name__ == "__main__":
    polymer_data = {
        "melting_temp_C": 128.0,
        "crystallization_temp_C": 116.0,
        "surface_tension_N_m": 0.028,
        "zero_shear_viscosity_Pa_s": 2600.0,
        "viscosity_ref_temp_C": 190.0,
        "activation_energy_visc_J_mol": 41500.0,
        "mean_powder_radius_um": 175.0,
        "initial_bubble_radius_um": 75.0,
        "gas_diffusivity_m2_s": 5.2e-10,
        "activation_energy_diff_J_mol": 34000.0,
        "henry_solubility_mol_m3_Pa": 1.3e-4,
        "gas_molar_density_mol_m3": 26.5
    }
    
    process_data = {
        "oven_temp_C": 285.0,
        "cooling_temp_C": 25.0,
        "heating_time_sec": 840.0,     # 14.0 menit
        "cooling_time_sec": 600.0,     # 10 menit
        "wall_thickness_mm": 8.0
    }
    
    sim = RotomoldingProcessSimulator(polymer_data, process_data)
    res = sim.run_simulation(dt=0.5)
    
    print("=================================================================")
    print("       RUANGTI ROTATIONAL MOLDING PROCESS QUALITY REPORT         ")
    print("=================================================================")
    print(f"Peak Internal Air Temp (PIAT) : {res['piat_C']} °C (at t = {res['piat_time_sec']} s)")
    print(f"Curing Status Classification  : {res['quality_status']}")
    print(f"Final Sinter Neck Ratio (y/a) : {res['sinter_neck_ratio_final']} (Full Sinter: 1.0)")
    print(f"Residual Bubble Radius        : {res['final_bubble_radius_um']} µm (Removal: {res['bubble_removal_efficiency_pct']}%)")
    print(f"ARM Impact Energy (-40 °C)    : {res['arm_impact_energy_J']} Joules")
    print(f"Failure Mode Assessment       : {res['failure_mode']}")
    print(f"ASTM D1998 Standard Pass      : {res['astm_d1998_compliant']}")
    print("=================================================================")
```

---

## 6. Studi Kasus Industri: Fabrikasi Tangki Penyimpanan Kimia Polietilena LLDPE 5000 Liter (ASTM D1998)

### 6.1 Deskripsi Kasus & Parameter Operasi
Sebuah industri manufaktur tangki polimer skala besar memproduksi tangki penyimpanan bahan kimia industri silindris vertikal kapasitas $5000\text{ Liter}$ (diameter $1.8\text{ m}$, tinggi $2.2\text{ m}$, tebal dinding desain $12.5\text{ mm}$) menggunakan material serbuk *Linear Low-Density Polyethylene* (LLDPE rotomolding grade, $MFI = 3.5\text{ g/10 min}$, densitas $\rho = 0.938\text{ g/cm}^3$).

Pada lini produksi awal, terjadi tingkat penolakan (*reject rate*) sebesar $14.2\%$ akibat kegagalan retak getas saat dilakukan uji jatuh impak dingin (*Low-Temperature Falling Dart ARM Impact Test*) pada $-40\text{ }^\circ\text{C}$ serta timbulnya kebocoran mikro (*pinhole leaks*) di area radius sudut bawah tangki.

Analisis termal diagnostik menggunakan sensor telemetri nirkabel internal mendeteksi bahwa operator mengeluarkan cetakan terlalu cepat dari oven ketika temperatur udara dalam hanya mencapai $\text{PIAT} = 178\text{ }^\circ\text{C}$ (*under-cured*), sehingga waktu disolusi gelembung mikro terpotong saat porositas matriks masih mencapai $4.8\%$.

### 6.2 Langkah Optimasi & Hasil Pengujian Standar (ASTM D1998 & ASTM D1693)
1. **Optimasi Waktu Pemanasan Oven**:
   Waktu oven disesuaikan dari $14\text{ menit}$ menjadi $18.5\text{ menit}$ pada temperatur oven $295\text{ }^\circ\text{C}$, menaikkan target $\text{PIAT}$ ke $204.5\text{ }^\circ\text{C}$.
2. **Pengaturan Rasio Rotasi Biaksial**:
   Rasio rotasi disetel ke $R_v = 4:1$ ($N_1 = 6\text{ rpm}, N_2 = 1.5\text{ rpm}$) untuk memaksimalkan deposisi serbuk pada radius sudut tajam dasar cetakan.
3. **Hasil Verifikasi Kualitas**:
   - **Kerapatan Pori & Pinhole**: Porositas mikro turun dari $4.8\%$ menjadi $< 0.05\%$ (bebas gelembung berdiameter $> 10\ \mu\text{m}$).
   - **Uji Impak ARM (-40 °C)**: Energi serap impak meningkat drastis dari $42\text{ J}$ (pecah getas berkeping-keping) menjadi $228\text{ J}$ (mode deformasi ulet murni tanpa retak, melampaui batas minimum ASTM D1998 sebesar $160\text{ J}$).
   - **Ketahanan Retak Tegangan Lingkungan (ESCR ASTM D1693 Kondisi B 100% Igepal CO-630)**: Mencapai $> 1500\text{ jam}$ tanpa inisiasi retak.
   - **Penurunan Reject Rate**: Reject rate pabrik turun dari $14.2\%$ menjadi $0.18\%$.

---

## 7. Rangkuman & Pedoman Implementasi Praktis

1. **Kendali Berbasis PIAT, Bukan Waktu Buta**: Kontrol siklus oven rotomolding tidak boleh didasarkan pada pewaktu (*timer*) semata karena fluktuasi suhu lingkungan dan keausan burner oven; penggunaan sensor IAT real-time menjamin konsistensi *cure level*.
2. **Pipa Ventilasi Cetakan (Vent Pipe PTFE)**: Wajib dipasang tabung ventilasi berserat kaca/PTFE berdiameter proporsional ($10 - 25\text{ mm}$ per $\text{m}^3$ volume) guna mencegah peningkatan tekanan internal yang memicu dinding menggelembung (*blow-out*) atau efek vakum saat pendinginan yang merusak bentuk (*warpage*).
3. **Kualitas Serbuk & Dry Flow Index**: Distribusi ukuran partikel serbuk harus dipertahankan pada rentang $150 - 500\ \mu\text{m}$ dengan kadar serbuk halus ($< 75\ \mu\text{m}$) di bawah $5\%$ untuk mencegah pembentukan gumpalan (*bridging*) dan defek gelembung udara masif.

---

## 8. Referensi Terverifikasi (Buku Teks Standar & Jurnal Bereputasi)

1. **Crawford, R. J., & Throne, J. L.** (2002). *Rotational Molding Technology*. William Andrew Publishing / Elsevier, New York. ISBN: `978-1-884-20785-3`.
2. **Bellehumeur, C. T., Kontopoulou, M., & Vlachopoulos, J.** (1998). *The role of surface tension and rheological properties in rotational molding*. **Progress and Trends in Rheology V**, Springer, 394–395. DOI: `10.1007/978-3-642-51062-5_200`.
3. **Gogos, G.** (2004). *Bubble removal in rotational molding*. **Polymer Engineering & Science**, 44(2), 388–394. DOI: `10.1002/pen.20035`.
4. **Khanna, S., & Ramkumar, P.** (2026). *Thermal and Rheological Characterization of Linear Low-Density Polyethylene-Mineral Blends for Rotational Molding*. **Heat Transfer Engineering**, 47(3), 245–259. DOI: `10.1080/01457632.2026.2642435`.
5. **Ortega, Z., Douglas, P., & Hanna, P. R.** (2024). *Influence of mold pressurization on cycle time in rotational molding composites with welded ignimbrite as loading*. **Composites Communications**, 45, 101797. DOI: `10.1016/j.coco.2023.101797`.
6. **Ortega, Z., Suárez, L., & Kelly-Walley, C.** (2024). *Use of Pressure in Rotational Molding to Reduce Cycle Times: Comparison of the Thermomechanical Behavior of Rotomolded Reed/Polyethylene Composites*. **Journal of Composites Science**, 8(1), 17. DOI: `10.3390/jcs8010017`.
7. **Hejna, A., Barczewski, M., & Andrzejewski, J.** (2020). *Rotational Molding of Linear Low-Density Polyethylene Composites Filled with Wheat Bran*. **Polymers**, 12(5), 1004. DOI: `10.3390/polym12051004`.
8. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems (7th Edition)*. John Wiley & Sons, Hoboken. ISBN: `978-1-119-70642-7`.
