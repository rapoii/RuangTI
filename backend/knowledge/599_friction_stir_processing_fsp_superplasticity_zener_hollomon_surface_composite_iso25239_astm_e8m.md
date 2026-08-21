# Modul 599: Friction Stir Processing (FSP) untuk Superplastisitas & Modifikasi Matriks Komposit Permukaan: Severe Plastic Deformation, Rekristalisasi Dinamik Zener-Hollomon, dan Dispersi Partikulat Intermetalik (ISO 25239 & ASTM E8M)

## 1. Pengantar & Konteks Industri Friction Stir Processing (FSP)

Dalam manufaktur modern kedirgantaraan (*aerospace*), otomotif performa tinggi, perkapalan (*marine structures*), dan biomedikal, keandalan struktural komponen ringan berbahan paduan aluminium (seri 2xxx, 5xxx, 6xxx, 7xxx), paduan magnesium (AZ31, AZ91), dan paduan titanium (Ti-6Al-4V) sering kali terhambat oleh keterbatasan intrinsik struktur coran (*as-cast*) maupun lembaran canai (*as-rolled*):
1. **Mikrostruktur Kasar & Porositas Coran (*Dendritic Coarseness & Gas Porosity*)**: Struktur coran konvensional memiliki segregasi intermetalik getas pada batas butir dan porositas susut (*shrinkage voids*), yang menurunkan kekuatan lelah (*fatigue strength*) dan keuletan plastis.
2. **Keterbatasan Formabilitas Superplastis (*Superplastic Forming Limits*)**: Pembentukan superplastis (*Superplastic Forming* / SPF) membutuhkan ukuran butir ultra-halus ekuiseksial ($d < 10\ \mu\text{m}$) yang stabil secara termal pada temperatur tinggi ($T > 0.5\ T_m$). Material komersial tanpa perlakuan deformasi parah tidak mampu mencapai elongasi superplastis puluhan hingga ratusan persen ($\delta > 500\% - 1000\%$).
3. **Ketahanan Aus & Korosi Permukaan yang Rendah**: Paduan struktural ringan memiliki ketahanan abrasi dan kekerasan permukaan yang rendah. Metode pelapisan konvensional (seperti *cladding* termal atau pelapisan semprot) rentan terhadap delaminasi akibat perbedaan tegangan antarmuka (*interfacial mismatch*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               SKEMATIKA PROSES FRICTION STIR PROCESSING (FSP)                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Kecepatan Rotasi Spindel ω (RPM) ────┐         ┌──── Gaya Tekan Aksial F_z (Downforce, kN)                    |
|                                              │         │                                                              |
|                                              ▼         ▼                                                              |
|                                    ┌───────────────────────┐                                                          |
|                                    │  TOOL SHOULDER (Bahu) │                                                          |
|                                    │  - Gesekan Geser Q_s  │                                                          |
|                                    └───────────┬───────────┘                                                          |
|                                                │                                                                      |
|                                      ┌─────────┴─────────┐ ◄── Pin Tool Berulir / Berulir Tirus                       |
|                                      │     PROBE / PIN   │     (Severe Plastic Deformation & Hydrodynamic Stirring)   |
|                                      └─────────┬─────────┘                                                            |
|                                                │ Kecepatan Maju / Traversing v (mm/min)                               |
|                     Advancing Side (AS)        ▼        Retreating Side (RS)                                          |
|            ───────────────────────────────► ┌──────┐ ◄────────────────────────────────                                |
|           [ Material Dasar (Base Metal) ]   │  SZ  │   [ Material Dasar (Base Metal) ]                                |
|           [ Mikrostruktur Kasar (d_0)   ]   └──────┘   [ Partikulat Penguat SiC/Al2O3  ]                              |
|                                                │                                                                      |
|                                                ▼                                                                      |
|                  ┌─────────────────────────────────────────────────────────────┐                                      |
|                  │ ZONA PENGADUKAN (Stir Zone / Nugget Zone):                   │                                      |
|                  │ - Dynamic Recrystallization (DRX) Kontinu (CDRX / GDRX)     │                                      |
|                  │ - Butir Halus Ekuiseksial Sub-Mikron (d_SZ ≈ 0.5 - 3 μm)    │                                      |
|                  │ - Dispersi Homogen Partikel Nano/Mikro Reinforcement        │                                      |
|                  │ - Eliminasi Porositas Cor & Densifikasi 100% Solid-State    │                                      |
|                  └─────────────────────────────────────────────────────────────┘                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Friction Stir Processing (FSP)** adalah teknologi rekayasa mikrostruktur keadaan padat (*solid-state microstructural modification technology*) yang diturunkan dari prinsip *Friction Stir Welding* (FSW). Berbeda dengan FSW yang bertujuan menyambung dua benda kerja, FSP diaplikasikan secara lokal pada permukaan atau volume pelat tunggal untuk:
- Menghaluskan butir kristal secara masif (*severe grain refinement*) melalui deformasi plastis parah (*Severe Plastic Deformation* / SPD) yang disertai rekristalisasi dinamik (*Dynamic Recrystallization* / DRX).
- Memproduksi komposit matriks logam permukaan (*Surface Metal Matrix Nanocomposites* / SMMNC) secara *in-situ* dengan mengaduk serbuk penguat keramik (seperti $\text{SiC}$, $\text{Al}_2\text{O}_3$, $\text{B}_4\text{C}$, $\text{TiC}$, atau grafena/CNT) ke dalam matriks logam lunak tanpa peleburan fasa cair, sehingga bebas dari cacat pemadatan (*solidification defects*), segregasi fasa getas, dan reaksi antarmuka yang merusak.
- Membuka kapabilitas superplastisitas laju regangan tinggi (*High Strain Rate Superplasticity* / HSRS) dan superplastisitas temperatur rendah (*Low Temperature Superplasticity* / LTSP).

### 1.1 Standar Internasional & Regulasi Terkait FSP
- **ISO 25239 (Parts 1-5)**: *Friction stir welding — Aluminium*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ASTM E2448**: *Standard Test Method for Determining the Superplastic Properties of Metallic Sheet Materials*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **ASTM G99**: *Standard Test Method for Wear Testing with a Pin-on-Disk Apparatus*.
- **ISO 20951**: *Metallic materials — Sheet and strip — Superplastic forming test*.

---

## 2. Mekanika Deformasi Plastis Parah & Rekristalisasi Dinamik (*Dynamic Recrystallization*)

### 2.1 Pembangkitan Panas Gesekan & Plastis Termomekanis
Panas total yang dibangkitkan selama FSP ($Q_{\text{total}}$) berasal dari disipasi gesekan antara bahu perkakas (*shoulder*) serta pin dengan benda kerja ($Q_{\text{frict}}$), ditambah disipasi kerja deformasi plastis viskoplastik logam ($Q_{\text{plastic}}$):

$$Q_{\text{total}} = Q_{\text{frict}} + Q_{\text{plastic}} = \iint \mu_{\text{frict}}(T, P) P_{\text{contact}} (\omega r) \, dA + \iiint \eta_{\text{Taylor-Quinney}} \boldsymbol{\sigma} : \dot{\boldsymbol{\varepsilon}}_{\text{pl}} \, dV$$

Untuk perkakas silindris datar dengan radius bahu $R_{\text{shoulder}}$ dan radius pin $R_{\text{pin}}$ dengan tekanan kontak seragam $P_0$, laju pembangkitan panas analitis per satuan waktu diestimasi:

$$Q_{\text{input}} \approx \frac{2}{3} \pi \mu_{\text{frict}} P_0 \omega \left( R_{\text{shoulder}}^3 - R_{\text{pin}}^3 \right) + 2 \pi \mu_{\text{frict}} P_0 \omega R_{\text{pin}}^2 H_{\text{pin}}$$

di mana:
- $\mu_{\text{frict}}$: Koefisien gesekan antarmuka dinamis ($\approx 0.3 - 0.5$).
- $P_0$: Tekanan kontak aksial efektif akibat gaya tekan $F_z$ ($\text{N/m}^2$), di mana $P_0 \approx \frac{F_z}{\pi R_{\text{shoulder}}^2}$.
- $\omega$: Kecepatan sudut putaran perkakas ($\text{rad/s}$), di mana $\omega = \frac{2\pi N_{\text{rpm}}}{60}$.
- $H_{\text{pin}}$: Panjang/kedalaman penetrasi pin tool ($\text{m}$).
- $\eta_{\text{Taylor-Quinney}}$: Fraksi kerja plastis yang terkonversi menjadi panas ($\approx 0.90 - 0.95$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ZONASI MIKROSTRUKTURAL PADA PENAMPANG LINTANG HASIL FSP                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         ◄── AS (Advancing Side)                                             RS (Retreating Side) ──►                  |
|                                                                                                                       |
|         [  BM  ] ──── [  HAZ  ] ──── [  TMAZ  ] ──── [  SZ / NUGGET  ] ──── [  TMAZ  ] ──── [  HAZ  ] ──── [  BM  ]   |
|                                                                                                                       |
|   1. BM (Base Metal): Struktur awal butir kasar gilingan/coran (d ≈ 20 - 150 μm), tidak terpengaruh deformasi.        |
|   2. HAZ (Heat-Affected Zone): Terpapar siklus termal, penuaan lewat-jenuh (overaging), butir mengalami coarsening.   |
|   3. TMAZ (Thermo-Mechanically Affected Zone): Terdeformasi plastis sedang & terotasi, butir terpuntir melengkung.   |
|   4. SZ (Stir Zone / Nugget Zone): Deformasi plastis parah + rekristalisasi dinamik penuh (d_SZ ≈ 0.5 - 3 μm).       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Pemodelan Konstitutif: Parameter Zener-Hollomon & Prediksi Ukuran Butir Rekristalisasi

### 3.1 Parameter Zener-Hollomon ($Z$)
Kondisi termomekanis gabungan antara laju regangan efektif ($\dot{\varepsilon}$) dan temperatur absolut deformasi ($T$ dalam Kelvin) dikompensasikan ke dalam parameter Zener-Hollomon $Z$ ($\text{s}^{-1}$):

$$Z = \dot{\varepsilon} \cdot \exp\left( \frac{Q_{\text{def}}}{R \cdot T} \right)$$

di mana:
- $\dot{\varepsilon}$: Laju regangan ekuivalen rata-rata dalam *stir zone* ($\text{s}^{-1}$), berorde $10^1 - 10^3\ \text{s}^{-1}$.
- $Q_{\text{def}}$: Energi aktivasi semu deformasi plastis termal material matriks ($\text{J/mol}$, untuk paduan Al berkisar $140 - 160\ \text{kJ/mol}$, untuk Mg berkisar $130 - 145\ \text{kJ/mol}$).
- $R$: Konstanta gas universal ($8.31446\ \text{J/(mol}\cdot\text{K)}$).
- $T$: Temperatur puncak pada *stir zone* ($T_{\text{peak}} \approx 0.6 - 0.85\ T_m$ dalam Kelvin).

Estimasi laju regangan efektif $\dot{\varepsilon}_{\text{avg}}$ di sekitar batas geser pin tool dapat dimodelkan menurut formulasi Chang et al. dan Sheppard:

$$\dot{\varepsilon}_{\text{avg}} \approx \frac{R_{\text{pin}} \cdot \omega}{L_{\text{shear}}} = \frac{R_{\text{pin}} \cdot \left( \frac{2\pi N}{60} \right)}{\delta_{\text{shear}}}$$

di mana $\delta_{\text{shear}}$ adalah tebal lapisan geser dinamis di sekeliling permukaan pin ($\approx 0.1 - 0.5\ \text{mm}$).

### 3.2 Temperatur Puncak (*Peak Temperature Model*)
Temperatur puncak $T_{\text{peak}}$ di dalam stir zone sebagai fungsi dari kecepatan putar spindel $\omega$ ($N$ dlm RPM) dan kecepatan translasi maju $v$ ($\text{mm/min}$) didekati melalui formulasi semi-empiris Arbegast & Hartley:

$$\frac{T_{\text{peak}}}{T_m} = K_{\text{temp}} \cdot \left( \frac{N^2}{v \cdot 10^4} \right)^\alpha$$

di mana $T_m$ adalah titik lebur absolut paduan ($\text{K}$), $K_{\text{temp}} \approx 0.65 - 0.80$, dan $\alpha \approx 0.04 - 0.08$.

### 3.3 Model Ukuran Butir Rekristalisasi Dinamik (Derby & Sellars)
Ukuran butir akhir ter-rekristalisasi ($d_{\text{SZ}}$) di stir zone berbanding terbalik secara monotonik terhadap parameter Zener-Hollomon $Z$:

$$d_{\text{SZ}} = A_{\text{DRX}} \cdot Z^{-m_{\text{DRX}}} = A_{\text{DRX}} \left[ \dot{\varepsilon} \cdot \exp\left( \frac{Q_{\text{def}}}{R T} \right) \right]^{-m_{\text{DRX}}}$$

Nilai eksponen $m_{\text{DRX}}$ untuk logam paduan berkisar antara $0.15 - 0.35$, dan $A_{\text{DRX}}$ adalah konstanta material. 
Dari persamaan di atas tampak bahwa:
- **Menaikkan laju pendinginan / menurunkan temperatur puncak** ($T \downarrow$) dan **meningkatkan laju regangan** ($\dot{\varepsilon} \uparrow$) memaksimalkan $Z$, menghasilkan butir ultra-halus ($d_{\text{SZ}} < 1\ \mu\text{m}$).

### 3.4 Peningkatan Kekuatan Luluh: Modifikasi Hubungan Hall-Petch & Orowan Strengthening
Kekuatan luluh mikrokomposit permukaan hasil FSP ($\sigma_{y,\text{comp}}$) merupakan superposisi linier dari kontribusi matriks dasar, penghalusan butir (Hall-Petch), dislokasi regangan sisa, dan mekanisme *Orowan looping* akibat partikulat nano:

$$\sigma_{y,\text{comp}} = \sigma_0 + \Delta \sigma_{\text{HP}} + \Delta \sigma_{\text{Orowan}} + \Delta \sigma_{\text{CTE}} + \Delta \sigma_{\text{load}}$$

1. **Kontribusi Hall-Petch ($\Delta \sigma_{\text{HP}}$)**:
   $$\Delta \sigma_{\text{HP}} = k_y \left( d_{\text{SZ}}^{-1/2} - d_0^{-1/2} \right)$$
   di mana $k_y$ adalah koefisien penguatan batas butir ($\text{MPa}\cdot\mu\text{m}^{1/2}$) dan $d_0$ adalah ukuran butir awal.

2. **Penguatan Hambatan Dislokasi Orowan ($\Delta \sigma_{\text{Orowan}}$)**:
   Untuk dispersi seragam partikel sub-mikron berdiameter rata-rata $d_p$ dengan fraksi volume $V_p$:
   $$\Delta \sigma_{\text{Orowan}} = \frac{0.13 \, G_m \, b}{d_p \left[ \left(\frac{1}{2 V_p}\right)^{1/3} - 1 \right]} \ln\left( \frac{d_p}{2 b} \right)$$
   di mana $G_m$ adalah modulus geser matriks ($\text{GPa}$) dan $b$ adalah magnitudo vektor Burgers ($\text{nm}$).

3. **Penguatan *Misfit* Termal CTE ($\Delta \sigma_{\text{CTE}}$)**:
   Akibat perbedaan koefisien ekspansi termal ($\Delta \alpha = |\alpha_m - \alpha_p|$):
   $$\Delta \sigma_{\text{CTE}} = \beta_{\text{CTE}} G_m b \sqrt{\rho_{\text{CTE}}} = \beta_{\text{CTE}} G_m b \sqrt{ \frac{12 \, \Delta \alpha \, \Delta T \, V_p}{b \, d_p (1 - V_p)} }$$

---

## 4. Mekanisme & Konstitutif Deformasi Superplastis Laju Tinggi (*High Strain Rate Superplasticity*)

### 4.1 Persamaan Konstitutif Aliran Superplastis Backofen & Mukherjee-Bird-Dorn
Pada temperatur pembentukan superplastis ($T \ge 0.5\ T_m$), tegangan alir plastis ($\sigma_{\text{flow}}$) dimodelkan melalui persamaan Mukherjee-Bird-Dorn:

$$\dot{\varepsilon}_{\text{SPF}} = \frac{A_{\text{SPF}} D_0 \mu b}{k_B T} \left( \frac{b}{d_{\text{SZ}}} \right)^p \left( \frac{\sigma_{\text{flow}}}{\mu} \right)^n \exp\left( -\frac{Q_{\text{SPF}}}{R T} \right)$$

Dalam bentuk relasi daya tegangan-regangan sederhana Backofen:

$$\sigma_{\text{flow}} = K_{\text{SPF}} \cdot (\dot{\varepsilon}_{\text{SPF}})^m$$

di mana:
- $m = \frac{\partial \ln \sigma_{\text{flow}}}{\partial \ln \dot{\varepsilon}_{\text{SPF}}} = \frac{1}{n}$ adalah **indeks sensitivitas laju regangan (*strain rate sensitivity index*)**.
- $p$: Eksponen ukuran butir ($p \approx 2$ untuk difusi volume matriks / *lattice diffusion*, $p \approx 3$ untuk difusi batas butir Coble / *grain boundary diffusion*).
- $d_{\text{SZ}}$: Ukuran butir hasil FSP.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       REZIM DEFORMASI SUPERPLASTIS: GRAFIK TEGANGAN ALIR VS LAJU REGANGAN                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   ln(σ_flow)                                                                                                          |
|   ▲                                                                                                                   |
|   │                                                   Rezim III: Dislocation Power-Law Creep (m ≈ 0.1 - 0.2)          |
|   │                                                   /                                                               |
|   │                         Rezim II: SUPERPLASTIS   /                                                                |
|   │                         Grain Boundary Sliding  /                                                                 |
|   │                         (GBS) Dominan          /                                                                  |
|   │                         (m ≈ 0.45 - 0.65)     /                                                                   |
|   │                             ┌────────────────┘                                                                    |
|   │                            /                                                                                      |
|   │    Rezim I: Diffusional   /                                                                                       |
|   │    Creep & Threshold     /                                                                                        |
|   │    Stress (m ≈ 0.2)     /                                                                                         |
|   │          ┌─────────────┘                                                                                          |
|   │         /                                                                                                         |
|   └────────┴────────────────────────────────────────────────► ln(dε/dt)                                               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Superplastisitas optimal tercapai pada **Rezim II** di mana $m > 0.33$ (umumnya $m \ge 0.50$). Nilai $m$ yang tinggi mencegah terjadinya pencekikan lokal (*necking suppression*), memungkinkan deformasi elongasi plastik sebelum patah mencapai $\delta > 500\% - 2000\%$.

---

## 5. Algoritma Python Solver: Rekayasa Mikrostruktur & Solver Superplastisitas FSP

Skrip Python berikut menghitung laju pembangkitan panas, parameter Zener-Hollomon ($Z$), ukuran butir tereksitasi ($d_{\text{SZ}}$), penguatan mekanis komposit (Hall-Petch, Orowan, CTE), serta memetakan kurva aliran superplastis dan jendela proses optimal.

```python
#!/usr/bin/env python3
"""
Friction Stir Processing (FSP) & Superplasticity Microstructure Engineering Solver
Kompatibel dengan standar ISO 25239, ASTM E8M, dan ASTM E2448.
"""

import numpy as np
import math

class FrictionStirProcessor:
    def __init__(self,
                 alloy_name: str = "AA7075-T6",
                 T_m: float = 908.0,          # Titik lebur absolut (K)
                 G_m: float = 26.9e9,         # Modulus geser matriks (Pa)
                 b_burger: float = 2.86e-10,  # Vektor Burgers (m)
                 Q_def: float = 142000.0,     # Energi aktivasi deformasi termal (J/mol)
                 k_HP: float = 0.12,          # Koefisien Hall-Petch (MPa * m^0.5)
                 sigma_0: float = 75.0,       # Tegangan gesekan kisi (MPa)
                 d_0: float = 45e-6):         # Ukuran butir awal (m)
        self.alloy = alloy_name
        self.T_m = T_m
        self.G_m = G_m
        self.b = b_burger
        self.Q_def = Q_def
        self.k_HP = k_HP
        self.sigma_0 = sigma_0
        self.d_0 = d_0
        self.R = 8.31446 # J/(mol*K)

    def compute_thermal_kinetics(self,
                                 N_rpm: float,
                                 v_feed: float,
                                 F_z: float,
                                 R_shoulder: float = 0.009,
                                 R_pin: float = 0.003,
                                 H_pin: float = 0.004,
                                 delta_shear: float = 0.0003,
                                 mu_frict: float = 0.42) -> dict:
        """
        Menghitung daya termal, laju regangan geser, temperatur puncak, dan parameter Zener-Hollomon.
        """
        omega = 2.0 * math.pi * N_rpm / 60.0 # rad/s
        A_shoulder = math.pi * (R_shoulder**2)
        P_contact = F_z / A_shoulder # Pa

        # Daya gesekan perkakas (W)
        Q_shoulder = (2.0 / 3.0) * math.pi * mu_frict * P_contact * omega * (R_shoulder**3 - R_pin**3)
        Q_pin = 2.0 * math.pi * mu_frict * P_contact * omega * (R_pin**2) * H_pin
        Q_total = Q_shoulder + Q_pin

        # Laju regangan rata-rata (1/s)
        strain_rate = (R_pin * omega) / delta_shear

        # Estimasi temperatur puncak T_peak (K)
        # Model pseudo-Arbegast: T/Tm = 0.72 * (N^2 / (v * 10^4))^0.052
        pseudo_val = (N_rpm**2) / (v_feed * 10000.0)
        T_peak = self.T_m * 0.72 * (pseudo_val**0.052)
        if T_peak > self.T_m * 0.92:
            T_peak = self.T_m * 0.92

        # Parameter Zener-Hollomon Z (1/s)
        Z_param = strain_rate * math.exp(self.Q_def / (self.R * T_peak))

        # Model Ukuran Butir DRX (Derby-Sellars): d_SZ = A * Z^(-0.22)
        # Untuk Al: A ≈ 1.8e-3
        A_drx = 1.85e-3
        d_SZ = A_drx * (Z_param ** (-0.22)) # dalam meter

        return {
            "omega_rad_s": omega,
            "P_contact_MPa": P_contact / 1e6,
            "Q_total_kW": Q_total / 1e3,
            "strain_rate_s_inv": strain_rate,
            "T_peak_K": T_peak,
            "T_peak_C": T_peak - 273.15,
            "Zener_Hollomon_Z": Z_param,
            "d_SZ_microns": d_SZ * 1e6
        }

    def compute_composite_strengthening(self,
                                        d_SZ_m: float,
                                        V_p: float = 0.05,       # Fraksi volume penguat (5%)
                                        d_p_m: float = 50e-9,     # Diameter partikel nano SiC (50 nm)
                                        delta_alpha: float = 18.6e-6, # Perbedaan CTE (1/K)
                                        delta_T: float = 400.0) -> dict:
        """
        Menghitung penguatan mekanis komposit nano FSP (Hall-Petch, Orowan, CTE misfit).
        """
        # 1. Hall-Petch Matrix Strengthening
        sigma_HP = self.sigma_0 + (self.k_HP / math.sqrt(d_SZ_m))

        # 2. Orowan Nanoparticle Looping
        if V_p > 0.0:
            term1 = (0.13 * self.G_m * self.b) / d_p_m
            term2 = ((1.0 / (2.0 * V_p))**(1.0/3.0)) - 1.0
            term3 = math.log(d_p_m / (2.0 * self.b))
            delta_sigma_orowan = (term1 / term2) * term3 / 1e6 # Konversi ke MPa

            # 3. CTE Dislocation Density Strengthening
            rho_CTE = (12.0 * delta_alpha * delta_T * V_p) / (self.b * d_p_m * (1.0 - V_p))
            delta_sigma_CTE = (1.25 * self.G_m * self.b * math.sqrt(rho_CTE)) / 1e6 # MPa
        else:
            delta_sigma_orowan = 0.0
            delta_sigma_CTE = 0.0

        # Total Predicted Yield Strength (MPa)
        sigma_yield_total = sigma_HP + delta_sigma_orowan + delta_sigma_CTE

        return {
            "sigma_HP_matrix_MPa": sigma_HP,
            "delta_sigma_Orowan_MPa": delta_sigma_orowan,
            "delta_sigma_CTE_MPa": delta_sigma_CTE,
            "sigma_yield_total_MPa": sigma_yield_total
        }

    def evaluate_superplastic_flow(self,
                                   d_SZ_m: float,
                                   T_test_C: float = 450.0,
                                   strain_rate_spf: float = 1e-2) -> dict:
        """
        Menghitung tegangan alir superplastis dan indeks strain rate sensitivity (m).
        """
        T_test_K = T_test_C + 273.15
        # Persamaan Mukherjee-Bird-Dorn untuk Al ultra-fine grain
        # m ≈ 0.52 untuk d < 3 μm pada 450°C
        m_index = 0.55 if d_SZ_m < 3e-6 else (0.42 if d_SZ_m < 8e-6 else 0.25)
        
        # Koefisien kekuatan alir K_spf (MPa * s^m)
        K_spf = 220.0 * (d_SZ_m / 1e-6)**0.8 * math.exp(65000.0 / (self.R * T_test_K)) / 1e5
        sigma_flow_MPa = K_spf * (strain_rate_spf ** m_index)
        
        # Estimasi elongasi superplastis maksimum (%)
        # Korelasi Woodford: elongation ≈ 100 * (10 ** (2.8 * m))
        max_elongation_pct = 100.0 * (10.0 ** (2.4 * m_index))

        return {
            "m_sensitivity_index": m_index,
            "K_spf": K_spf,
            "sigma_flow_MPa": sigma_flow_MPa,
            "predicted_elongation_pct": max_elongation_pct,
            "superplastic_capable": m_index >= 0.35 and max_elongation_pct >= 400.0
        }

if __name__ == "__main__":
    processor = FrictionStirProcessor(alloy_name="AA7075-T6")
    
    # Skenario 1: Parameter FSP (Rotasi 1200 RPM, Maju 100 mm/min, Gaya 12 kN)
    kinetics = processor.compute_thermal_kinetics(N_rpm=1200, v_feed=100, F_z=12000)
    print("=== HASIL SIMULASI TERMAL & REKRISTALISASI FSP ===")
    print(f"Daya Termal Total     : {kinetics['Q_total_kW']:.2f} kW")
    print(f"Laju Regangan Geser   : {kinetics['strain_rate_s_inv']:.2e} s^-1")
    print(f"Temperatur Puncak (SZ): {kinetics['T_peak_C']:.1f} °C")
    print(f"Parameter Zener-Hollomon: {kinetics['Zener_Hollomon_Z']:.3e} s^-1")
    print(f"Ukuran Butir DRX (d_SZ): {kinetics['d_SZ_microns']:.2f} μm (Awal: 45.0 μm)")
    
    # Skenario 2: Fabrikasi Komposit Matriks Permukaan (5 vol% nano-SiC, dp=50nm)
    strength = processor.compute_composite_strengthening(
        d_SZ_m=kinetics['d_SZ_microns']*1e-6,
        V_p=0.05,
        d_p_m=50e-9
    )
    print("\n=== PENGUATAN MEKANIS KOMPOSIT NANO PERMUKAAN ===")
    print(f"Kekuatan Matriks (Hall-Petch) : {strength['sigma_HP_matrix_MPa']:.1f} MPa")
    print(f"Penguatan Orowan (Nano-SiC)   : {strength['delta_sigma_Orowan_MPa']:.1f} MPa")
    print(f"Penguatan CTE Misfit          : {strength['delta_sigma_CTE_MPa']:.1f} MPa")
    print(f"Total Yield Strength Prediksi : {strength['sigma_yield_total_MPa']:.1f} MPa")
    
    # Skenario 3: Uji Karakterisasi Formabilitas Superplastis (SPF pada 450°C, laju 1e-2 s^-1)
    spf = processor.evaluate_superplastic_flow(
        d_SZ_m=kinetics['d_SZ_microns']*1e-6,
        T_test_C=450.0,
        strain_rate_spf=0.01
    )
    print("\n=== EVALUASI PERILAKU SUPERPLASTISITAS (HSRS) ===")
    print(f"Indeks Sensitivitas Laju (m)  : {spf['m_sensitivity_index']:.2f}")
    print(f"Tegangan Alir Superplastis    : {spf['sigma_flow_MPa']:.2f} MPa")
    print(f"Elongasi Maksimum Sebelum Patah: {spf['predicted_elongation_pct']:.1f} %")
    print(f"Status Kelayakan Superplastis : {'LAYAK (Superplastic)' if spf['superplastic_capable'] else 'TIDAK LAYAK'}")
```

---

## 6. Studi Kasus Rekayasa Industri: Fabrikasi Komposit Permukaan AA7075/SiC & Formabilitas Panel Kedirgantaraan

### 6.1 Latar Belakang Masalah
Sebuah manufaktur struktur kedirgantaraan memproduksi panel pintu kabin bertekanan berbahan paduan aluminium kekuatan tinggi **AA7075-T6**. Komponen ini mengalami dua kendala manufaktur dan operasi yang parah:
1. **Kegagalan Retak Pembentukan Cekung Tajam**: Rasio *drawability* konvensional sangat buruk pada suhu ruang (elongasi sebelum patah hanya $11\%$), menyebabkan penolakan cetak (*scrap rate*) sebesar $24.8\%$.
2. **Keausan Tribologis & Pengikisan Pasir (*Fretting Wear & Sand Erosion*)**: Permukaan kontak bibir pintu mengalami laju keausan spesifik $k_{\text{wear}} = 4.8 \times 10^{-4}\ \text{mm}^3/(\text{N}\cdot\text{m})$, memerlukan penggantian suku cadang setiap 2.500 jam terbang.

### 6.2 Solusi Rekayasa Berbasis FSP
Tim rekayasa material menerapkan strategi perlakuan terpadu FSP:
- **Alur Pra-Perlakuan Serbuk (*Groove Filling Method*)**: Membuat parutan mikro sedalam $1.8\ \text{mm}$ dan lebar $1.2\ \text{mm}$ pada permukaan pelat, kemudian diisi serbuk nano-$\text{SiC}$ (ukuran partikel rata-rata $45\ \text{nm}$, kemurnian $99.9\%$).
- **Parameter Proses FSP Multi-Pass Berpendingin Aktif**:
  - Diameter bahu perkakas ($D_{\text{shoulder}}$): $16\ \text{mm}$ berkontur spiral konsentris (*scrolled shoulder*).
  - Pin tirus berulir (*tapered threaded pin*): $D_{\text{base}} = 5.5\ \text{mm}$, $D_{\text{tip}} = 3.5\ \text{mm}$, $L_{\text{pin}} = 3.2\ \text{mm}$.
  - Kecepatan putar spindel ($N$): $1000\ \text{RPM}$.
  - Kecepatan translasi ($v$): $75\ \text{mm/min}$.
  - Gaya tekan aksial ($F_z$): $10.5\ \text{kN}$.
  - Sistem pendingin eksternal: Semprotan kabut $\text{CO}_2$ kriogenik di belakang perkakas untuk membatasi pertumbuhan butir (*dynamic grain growth inhibition*).
  - Jumlah lintasan: 3-pass FSP dengan arah putaran balik 100% *overlap*.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       METRIK PERFORMA: BASE METAL VS 3-PASS CRYOGENIC FSP NANO-COMPOSITE                              |
+-----------------------------------------------------------------------------------------------------------------------+
| Metrik Kinerja                              Base Metal (AA7075-T6)    Hasil 3-Pass FSP + Nano-SiC   Peningkatan       |
+-----------------------------------------------------------------------------------------------------------------------+
| Ukuran Butir Rata-rata (d)                  42.5 μm (Struktur Rol)    0.85 μm (Ekuiseksial DRX)     -98.0% (Sub-μm)   |
| Kekerasan Permukaan (Vickers HV0.5)         165 HV                    248 HV                        +50.3%            |
| Kekuatan Tarik Luluh (Yield Strength)       505 MPa                   618 MPa                       +22.4%            |
| Elongasi Tarik SPF (450°C, 10^-2 s^-1)      68 %                      780 % (Superplastisitas HSRS) +1047%            |
| Laju Keausan Abrasi (ASTM G99, Pin-on-Disk) 4.8 x 10^-4 mm^3/(N·m)    0.62 x 10^-4 mm^3/(N·m)       -87.1% (Tahan Aus)|
| Scrap Rate Pembentukan Panel Pintu          24.8 %                    0.3 %                         -98.8% (Efisiensi)|
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.3 Analisis Hasil & Dampak Keekonomian
1. **Superplastic Forming Window Expansion**: Penghalusan butir dari $42.5\ \mu\text{m}$ menjadi $0.85\ \mu\text{m}$ memicu mekanisme dominan *Grain Boundary Sliding* (GBS) yang diakomodasi oleh dislokasi kisi dan difusi batas butir. Hal ini menurunkan temperatur pembentukan superplastis yang dibutuhkan dari $520^\circ\text{C}$ menjadi $440^\circ\text{C}$ serta meningkatkan laju regangan operasional hingga satu orde magnitudo ($10^{-2}\ \text{s}^{-1}$), mempercepat waktu siklus penekanan panel dari 45 menit menjadi 4.5 menit per bagian.
2. **Pengurangan Biaya Siklus Hidup**: Ketahanan aus meningkat hampir 8 kali lipat berkat kombinasi penguatan Orowan dari partikulat $\text{SiC}$ dan densifikasi total bebas porositas, memperpanjang interval inspeksi pintu kabin dari 2.500 jam menjadi lebih dari 12.000 jam terbang.

---

## 7. Referensi Akademik Terverifikasi (ISO, ASTM, & Reputable Journals)

1. **Ma, Z. Y., & Mishra, R. S.** (2014). *Friction Stir Microstructure for Superplasticity*. In *Friction Stir Superplasticity for Unitized Structures* (pp. 25-68). Elsevier. DOI: [10.1016/B978-0-12-420006-7.00002-9](https://doi.org/10.1016/B978-0-12-420006-7.00002-9).
2. **Kishchik, A. A.** (2023). *Friction stir processing to improve grain refinement and superplasticity of Al-Mg-Mn-Cr alloy*. *Materials Research Proceedings*, 28, 163-172. DOI: [10.21741/9781644902615-19](https://doi.org/10.21741/9781644902615-19).
3. **Shafiei-Zarghani, A., Kashani-Bozorg, S. F., & Zarei-Hanzaki, A.** (2011). *Wear assessment of Al/Al2O3 nano-composite surface layer produced using friction stir processing*. *Wear*, 270(5-6), 403-410. DOI: [10.1016/j.wear.2010.12.002](https://doi.org/10.1016/j.wear.2010.12.002).
4. **Regev, M., & Spigarelli, S.** (2024). *On Dynamic Recrystallization During Friction Stir Processing of Commercially Pure Ti and Its Influence on the Microstructure and the Mechanical Properties*. *Preprints*, 2024050876. DOI: [10.20944/preprints202405.0876.v1](https://doi.org/10.20944/preprints202405.0876.v1).
5. **ASTM International.** (2021). *ASTM E2448-21: Standard Test Method for Determining the Superplastic Properties of Metallic Sheet Materials*. ASTM International, West Conshohocken, PA. DOI: [10.1520/E2448-21](https://doi.org/10.1520/E2448-21).
6. **International Organization for Standardization.** (2019). *ISO 25239:2019 - Friction stir welding — Aluminium*. ISO Central Secretariat, Geneva, Switzerland.
