# Modul 655: Electrophoretic Deposition (EPD) & Colloidal Nanocoating Processing: Mobilitas Elektroforetik Helmholtz-Smoluchowski, Kinetika Hasil Deposisi Hamaker & Sarkar-Nicholson, Stabilitas Koloid DLVO, dan Rekayasa Pelapisan Keramik Fungsional (ASTM C373, ISO 14704, ASTM F1601 & ISO 20565)

## 1. Pengantar & Konteks Industri: Teknologi *Electrophoretic Deposition* (EPD)

*Electrophoretic Deposition* (EPD) adalah proses manufaktur pelapisan dan pembentukan material keramik, polimer, serta komposit tingkat lanjut (*advanced ceramic and composite processing*) yang memanfaatkan fenomena elektrokinetik di mana partikel koloid bermuatan listrik yang terdispersi stabil dalam media suspensi cair bermigrasi menuju elektroda bermuatan berlawanan di bawah pengaruh medan listrik searah (DC) dan terakumulasi membentuk lapisan deposit padat (*green compact coating*) yang homogen, rapat, dan seragam.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    ARSITEKTUR MULTIFISIKA SISTEM ELECTROPHORETIC DEPOSITION (EPD) & REKAYASA KOLOID                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SUMBER DAYA ARUS SEARAH PRESISI (PRECISION DC POWER SUPPLY)                                                   |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Mode Operasional:               |
|         │  • Mode Tegangan Konstan (Constant Voltage): V = 5 - 300 V                 │ • Regulasi Medan Listrik (E):    |
|         │  • Mode Arus Konstan (Constant Current): J = 0.1 - 20 mA/cm^2              │   E = V / L_gap                  |
|         │  • Kontrol Waktu Deposisi Terprogram: t_dep = 30 - 1800 detik             │ • Jarak Antar Elektroda:         |
|         │                                    │                                      │   L_gap = 10 - 50 mm             |
|         └────────────────────────────────────┼──────────────────────────────────────┘                                 |
|                                              │                                                                        |
|                                              ▼                                                                        |
|         SEL ELEKTROFORESIS & SUSPENSI KOLOIDAL STABIL (EPD REACTION CELL)                                             |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  [ TANGKI SUSPENSI KOLOIDAL TERKONTROL (ISOPROPANOL / ETANOL / AIR-DI) ]  │ Parameter Suspensi:             |
|         │  ───────────────────────────────────────────────────────────────────────  │ • Fraksi Padatan: 1 - 10 wt%     |
|         │  [ELEKTRODA PEMBANDING]                   [SUBSTRAT BENDA KERJA]          │ • Potensial Zeta: |ζ| > 30 mV   |
|         │      (Counter Electrode)                      (Working Electrode)         │ • Viskositas Suspensi: η (mPa·s)|
|         │          Anoda (+)                                 Katoda (-)             │ • Konduktivitas: κ (μS/cm)      |
|         │              │                                         │                  │                                 |
|         │              │  Medan Listrik Homogen E (V/cm)         │                  │ Mekanisme Elektrokinetik:       |
|         │              ├────────────────────────────────────────►│                  │ Partikel bermuatan positif      |
|         │              │                                         │                  │ (kationik) bergerak ke katoda   |
|         │              │   ○  ──►     ○  ──►     ○  ──►  ████████│                  │ (Katoforesis) atau partikel     |
|         │              │  Partikel Koloid Bermuatan          Deposit                │ negatif bergerak ke anoda       |
|         │              │  (Zeta Potential ζ > +30 mV)        Padat Hijau            │ (Anaforesis).                   |
|         │              │                                     (Green Layer)          │                                 |
|         │  ───────────────────────────────────────────────────────────────────────  │ Fenomena Koagulasi:             |
|         │  Pemisahan Muatan Double Layer -> Kompresi Lapisan Difus -> Koagulasi     │ Gaya Tolak DLVO < Gaya Elektro  |
|         └───────────────────────────────────────────────────────────────────────────┘                                 |
|                                              │                                                                        |
|                                              ▼                                                                        |
|         PROSES TERMAL PASCA-EPD (POST-PROCESSING HEAT TREATMENT & SINTERING)                                          |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Karakteristik Akhir:            |
|         │  1. Controlled Drying: Pengeringan Lambat Bebas Retak Kapiler (25 - 60°C) │ • Ketebalan: d = 1 - 200 μm     |
|         │  2. Binder Burnout: Eliminasi Polimer Aditif Organik (300 - 500°C)        │ • Kerapatan Sinter: > 98% TD    |
|         │  3. High-Temperature Sintering: Densifikasi Metalurgi (900 - 1550°C)      │ • Kuat Rekat: Adhesi Kritis Lc  |
|         └───────────────────────────────────────────────────────────────────────────┘                                 |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar internasional, militer, dan pengujian keandalan material fungsional untuk proses EPD dan karakterisasi lapisan keramik meliputi:
1. **ASTM C373**: *Standard Test Methods for Determination of Water Absorption, Bulk Density, Apparent Porosity, and Apparent Specific Gravity of Fired Whiteware Products, Ceramic Tiles, and Glass Ceramics*.
2. **ISO 14704 / ASTM C1161**: *Fine ceramics (advanced ceramics, advanced technical ceramics) — Test method for flexural strength of monolithic ceramics at room temperature*.
3. **ASTM F1601 / ISO 13779**: *Standard Test Method for Sintered Hydroxyapatite Materials for Surgical Implants and Medical Devices*.
4. **ISO 20565 / ISO 20507**: *Fine ceramics (advanced ceramics, advanced technical ceramics) — Vocabulary and Classification of functional coatings*.
5. **ASTM C1624**: *Standard Test Method for Adhesion Strength and Mechanical Failure Modes of Ceramic Coatings by Quantitative Single Point Scratch Testing*.
6. **ASTM B117 / ISO 9227**: *Standard Practice for Operating Salt Spray (Fog) Apparatus for Corrosion Resistance Evaluation*.

---

## 2. Termodinamika & Elektrokinetika Koloid dalam EPD

### 2.1 Teori Lapisan Ganda Listrik (*Electric Double Layer* - EDL) & Potensial Zeta ($\zeta$)

Ketika partikel keramik padat didispersikan ke dalam pelarut cair polar atau semi-polar, muatan permukaan terbentuk melalui disosiasi gugus fungsi permukaan, adsorpsi ionik preferensial, atau adsorpsi surfaktan/polielektrolit. Distribusi muatan di sekitar partikel membentuk Lapisan Ganda Listrik (*Electric Double Layer* - EDL) yang terdiri dari:
1. **Stern Layer (Lapisan Dalam / Kompak)**: Lapisan ion lawan (*counter-ions*) yang terikat kuat pada permukaan partikel akibat gaya elektrostatik dan adsorpsi spesifik.
2. **Gouy-Chapman Diffuse Layer (Lapisan Difus)**: Lapisan ion dengan distribusi konsentrasi eksponensial yang meluas ke dalam badan larutan (*bulk solution*).

Batas hidrodinamik antara fluida yang bergerak bersama partikel dan fluida ruah disebut **Bidang Geser (*Shear Plane / Slipping Plane*)**. Potensial elektrostatik pada bidang geser ini didefinisikan sebagai **Potensial Zeta ($\zeta$)**.

```
   Potensial Listrik Ψ
        ▲
     Ψ₀ ┼──────────┐ (Permukaan Partikel)
        │          │
     Ψ_δ┼ - - - - -│ - ┐ Stern Layer (Lapisan Kompak)
        │          │   │
      ζ ┼ - - - - -│ - ┼ - - ┐ Bidang Geser (Slipping Plane) -> Potensial Zeta (ζ)
        │          │   │     │
        │          │   │     │   Gouy-Chapman Diffuse Layer
        │          │   │     │   (Penurunan Potensial Eksponensial)
        │          │   │     │   Ψ(x) = Ψ_δ · exp(-κ·x)
        │          │   │     │
      0 └──────────┴───┴─────┴────────────────────────────► Jarak x dari Permukaan
                   0   δ     x_s
```

Panjang Debye ($\kappa^{-1}$), yang merepresentasikan ketebalan efektif lapisan difus, dihitung dengan rumus:

$$\kappa = \sqrt{\frac{2 e^2 N_A I}{\varepsilon_0 \varepsilon_r k_B T}}$$

di mana:
- $e = 1.602 \times 10^{-19}\text{ C}$ (muatan elementer elektron),
- $N_A = 6.022 \times 10^{23}\text{ mol}^{-1}$ (bilangan Avogadro),
- $I = \frac{1}{2} \sum c_i z_i^2$ (kekuatan ionik larutan, $\text{mol/m}^3$),
- $\varepsilon_0 = 8.854 \times 10^{-12}\text{ F/m}$ (permitivitas ruang hampa),
- $\varepsilon_r$ (konstanta dielektrik relatif medium pendispersi),
- $k_B = 1.381 \times 10^{-23}\text{ J/K}$ (konstanta Boltzmann),
- $T$ (temperatur absolut suspensi, $\text{K}$).

### 2.2 Mobilitas Elektroforetik Helmholtz-Smoluchowski & Hückel

Mobilitas elektroforetik ($\mu_e$, dalam satuan $\text{m}^2 \cdot \text{V}^{-1} \cdot \text{s}^{-1}$) merepresentasikan kecepatan migrasi terminal partikel koloid ($v_e$) di bawah medan listrik satuan ($E = 1\text{ V/m}$):

$$v_e = \mu_e \cdot E$$

Hubungan antara mobilitas elektroforetik $\mu_e$ dan potensial zeta $\zeta$ ditentukan oleh rasio antara jari-jari partikel ($a$) dan ketebalan lapisan difus ($\kappa^{-1}$), yaitu parameter tak berdimensi $\kappa a$:

1. **Kasus Helmholtz-Smoluchowski ($\kappa a \gg 1$, Lapisan Difus Sangat Tipis Relatif terhadap Ukuran Partikel)**:
   Digunakan secara universal untuk partikel koloid berukuran $a > 100\text{ nm}$ dalam media dengan kekuatan ionik moderat:

   $$\mu_e = \frac{\varepsilon_0 \varepsilon_r \zeta}{\eta}$$

2. **Kasus Hückel ($\kappa a \ll 1$, Partikel Sangat Kecil / Nanopartikel dalam Pelarut Non-Polar Berkonduktivitas Rendah)**:

   $$\mu_e = \frac{2 \varepsilon_0 \varepsilon_r \zeta}{3 \eta}$$

3. **Formula Tergeneralisasi Henry**:

   $$\mu_e = \frac{2 \varepsilon_0 \varepsilon_r \zeta}{3 \eta} f(\kappa a)$$

   di mana fungsi Henry $f(\kappa a)$ bervariasi secara mulus dari $1.0$ (batas Hückel) hingga $1.5$ (batas Smoluchowski).

### 2.3 Teori Stabilitas Koloid DLVO (*Derjaguin-Landau-Verwey-Overbeek*)

Stabilitas suspensi koloid terhadap aglomerasi spontan sebelum proses EPD dikendalikan oleh total energi potensial interaksi antar-partikel ($V_{total}$):

$$V_{total}(s) = V_{vdW}(s) + V_{EDL}(s) + V_{steric}(s)$$

di mana $s$ adalah jarak pemisahan antar-permukaan partikel.

1. **Gaya Tarik Menarik Van der Waals ($V_{vdW}$)**:
   Untuk dua partikel bola identik berjari-jari $a$ dengan konstanta Hamaker efektif $A_{121}$:

   $$V_{vdW}(s) = -\frac{A_{121}}{6} \left[ \frac{2 a^2}{s^2 + 4 a s} + \frac{2 a^2}{(s + 2 a)^2} + \ln \left( \frac{s^2 + 4 a s}{(s + 2 a)^2} \right) \right]$$

   Untuk jarak pemisahan yang sangat dekat ($s \ll a$), persamaan di atas tereduksi menjadi:

   $$V_{vdW}(s) \approx -\frac{A_{121} \cdot a}{12 s}$$

2. **Gaya Tolak Menolak Elektrostatik Lapisan Ganda ($V_{EDL}$)**:

   $$V_{EDL}(s) = 2 \pi \varepsilon_0 \varepsilon_r a \zeta^2 \ln \left( 1 + \exp(-\kappa s) \right)$$

Untuk menjaga suspensi koloid tetap terdispersi stabil tanpa flokulasi prematur selama proses EPD, penghalang energi aktivasi termal (*energy barrier* $\Delta V_{max}$) harus memenuhi kriteria stabilitas:

$$\Delta V_{max} = \max_s \left[ V_{total}(s) \right] \ge 15 - 25\ k_B T$$

Dan nilai absolut potensial zeta wajib dijaga $|\zeta| \ge 30\text{ mV}$.

---

## 3. Kinetika Deposisi Sarkar-Nicholson & Hamaker

### 3.1 Hukum Akumulasi Massa Hamaker

Hukum dasar kinetika EPD pertama kali diformulasikan oleh Hamaker (1940), yang menyatakan bahwa laju penambahan massa deposit ($dm/dt$) berbanding lurus dengan luas permukaan elektroda ($A$), konsentrasi partikel dalam suspensi ($C(t)$), kecepatan migrasi elektroforetik ($v_e$), dan faktor efisiensi hasil deposisi ($f$):

$$\frac{dm}{dt} = f \cdot A \cdot C(t) \cdot v_e = f \cdot A \cdot C(t) \cdot \mu_e \cdot E(t)$$

di mana:
- $m(t)$ adalah massa lapisan deposit padat ($\text{kg}$ atau $\text{g}$),
- $f$ adalah faktor efisiensi deposisi ($0 < f \le 1.0$), merepresentasikan fraksi partikel yang mencapai elektroda dan berhasil terkoagulasi menjadi lapisan padat tanpa terlepas kembali oleh aliran konveksi fluida,
- $A$ adalah luas area deposisi aktif ($\text{m}^2$ atau $\text{cm}^2$),
- $C(t)$ adalah konsentrasi massa partikel koloid dalam suspensi ($\text{g/L}$ atau $\text{kg/m}^3$),
- $E(t)$ adalah kuat medan listrik efektif pada antarmuka deposisi ($\text{V/m}$ atau $\text{V/cm}$).

```
                      Massa Suspensi Awal M_susp, Volume V_susp
                                      │
                                      ▼
             Laju Migrasi Partikel: dm/dt = f · A · C(t) · μ_e · E(t)
                                      │
               ┌──────────────────────┴──────────────────────┐
               ▼                                             ▼
     MODE TEGANGAN KONSTAN                         MODE ARUS KONSTAN
       (Constant Voltage)                            (Constant Current)
  Eksitasi: V(t) = V₀ = Konstan                Eksitasi: I(t) = I₀ = Konstan
  Evolusi Resistansi Deposit R_dep(t) ▲        Evolusi Kuat Medan Listrik E(t) = Konstan
  Kuat Medan Listrik Efektif E(t) ▼            Penurunan Konsentrasi C(t) Eksponensial
  Kinetika Sarkar-Nicholson:                   Massa Deposit Linear-Asimtotik:
  m(t) = m₀ · [1 - exp(-t / τ_dep)]            m(t) = C₀ · V_susp · [1 - exp(-k_I · t)]
```

### 3.2 Model Kinetika Sarkar-Nicholson: Kondisi Tegangan Konstan (*Constant Voltage*)

Dalam mode tegangan konstan, tegangan total $V_0$ terbagi antara penurunan tegangan pada suspensi cair ($V_{susp}$) dan penurunan tegangan pada lapisan deposit padat ($V_{dep}$):

$$V_0 = V_{susp}(t) + V_{dep}(t) = E(t) \cdot L_{gap} + J(t) \cdot R_{dep}(t) \cdot A$$

Seiring bertambahnya ketebalan deposit $d(t)$, resistansi listrik deposit ($R_{dep} = \frac{d(t)}{\sigma_{dep} A}$) meningkat drastis jika deposit bersifat resistif/dielektrik, sehingga kuat medan listrik riil yang mendorong partikel di dalam fluida ($E(t)$) mengalami pelemahan kontinu.

Jika volume suspensi adalah $V_{susp}$, neraca massa partikel terdispersi adalah:

$$V_{susp} \frac{dC(t)}{dt} = -\frac{dm}{dt} = -f \cdot A \cdot \mu_e \cdot E(t) \cdot C(t)$$

Dengan mendefinisikan konstanta waktu karakteristik deposisi $\tau_{dep}$:

$$\tau_{dep} = \frac{V_{susp}}{f \cdot A \cdot \mu_e \cdot E_0}$$

Integrasi analitis menghasilkan persamaan profil massa terakumulasi Sarkar-Nicholson:

$$m(t) = C_0 \cdot V_{susp} \cdot \left[ 1 - \exp\left( -\frac{t}{\tau_{dep}} \right) \right] = m_{max} \cdot \left[ 1 - \exp\left( -\frac{t}{\tau_{dep}} \right) \right]$$

### 3.3 Ketebalan Lapisan Deposit Hijau (*Green Layer Thickness*)

Ketebalan deposit basah/hijau ($d(t)$) sebelum proses pengeringan dan sintering dihitung dari massa terdeposit $m(t)$, densitas teoritis material partikel ($\rho_{th}$), dan porositas lapisan hijau ($p_{green}$):

$$d(t) = \frac{m(t)}{A \cdot \rho_{th} \cdot (1 - p_{green})}$$

Densitas lapisan deposit hijau ($\rho_{green}$) adalah:

$$\rho_{green} = \rho_{th} \cdot (1 - p_{green})$$

---

## 4. Metalurgi & Fenomena Sintering Pasca-EPD

### 4.1 Mekanika Pengeringan & Tekanan Kapiler Kritis (*Capillary Stress & Mud Cracking*)

Setelah proses EPD selesai, lapisan deposit hijau mengandung cairan pelarut yang mengisi ruang antar-pori partikel. Selama tahap pengeringan evaporatif, meniskus cairan terbentuk pada saluran pori permukaan, membangkitkan tegangan tarik kapiler internal ($P_{cap}$):

$$P_{cap} = \frac{2 \gamma_{LV} \cos \theta_c}{r_{pore}}$$

di mana:
- $\gamma_{LV}$ adalah tegangan permukaan antarmuka cair-uap pelarut ($\text{N/m}$),
- $\theta_c$ adalah sudut kontak pembasahan partikel-pelarut,
- $r_{pore} \approx \frac{1 - p}{p} \cdot \frac{d_{50}}{3}$ adalah radius hidrolik pori efektif.

Jika tegangan kapiler melebihi kekuatan kohesif hijau lapisan partikel ($P_{cap} > \sigma_{green,yield}$), terjadi retak lumpur (*mud cracking*). Ketebalan kritis bebas retak (*critical cracking thickness* - $h_{crit}$) dimodelkan berdasarkan mekanika fraktur elastis:

$$h_{crit} = \left( \frac{K_{Ic,green}}{1.12 \cdot P_{cap}} \right)^2$$

Strategi mitigasi: Menggunakan pelarut organik bertegangan permukaan rendah (seperti isopropanol atau etanol, $\gamma_{LV} \approx 21 - 23\text{ mN/m}$, dibandingkan air murni $\gamma_{LV} \approx 72.8\text{ mN/m}$) serta mengendalikan laju kelembaban ruang pengeringan secara bertahap.

```
       Partikel Keramik              Meniskus Fluida Pelarut
          ┌─────────┐                      ( \
          │         │                       \ )  Tegangan Kapiler P_cap = (2·γ_LV·cos θ) / r_pore
          │  AL₂O₃  │                      ( /
          │   /     │◄────── r_pore ──────►│         ┌─────────┐
          │  HAp    │                      │         │  AL₂O₃  │
          └─────────┘                      │         │   /     │
               ▲                           │         │  HAp    │
               │                           │         └─────────┘
         Gaya Tarik Kapiler Menekan Partikel Saling Merapat (Penyusutan Volume)
```

### 4.2 Kinetika Sintering Fasa Padat & Densifikasi Coble

Proses pembakaran suhu tinggi (*high-temperature sintering*) memicu penyusutan volumetrik dan densifikasi lapisan keramik melalui difusi batas butir (*grain boundary diffusion*) dan difusi kisi (*lattice diffusion*). Laju densifikasi linier relatif ($\frac{d\rho}{dt}$) diatur oleh persamaan difusi Coble:

$$\frac{d\rho}{dt} = \frac{C_D \cdot \Omega \cdot \delta_{GB} \cdot D_{GB} \cdot \gamma_s}{k_B T \cdot G^4}$$

di mana:
- $\Omega$ adalah volume atom/molar ($\text{m}^3$),
- $\delta_{GB} D_{GB}$ adalah koefisien difusi batas butir efektif ($\text{m}^3/\text{s}$),
- $\gamma_s$ adalah energi bebas permukaan spesifik ($\text{J/m}^2$),
- $G(t)$ adalah ukuran butir rata-rata pada waktu $t$ ($\mu\text{m}$),
- $C_D$ adalah konstanta geometris difusi.

Penyusutan linier isotropik selama sintering ($\Delta L / L_0$) berkaitan dengan perubahan densitas:

$$\frac{\Delta L}{L_0} = 1 - \left( \frac{\rho_{green}}{\rho_{sintered}} \right)^{1/3}$$

---

## 5. Algoritma & Python Simulator: EPD Kinetic & Multiphysics Coating Engine

Berikut adalah modul solver komputasi lengkap untuk menyimulasikan kinetika massa deposisi $m(t)$, evolusi ketebalan lapisan hijau dan tersinter $d(t)$, profil medan listrik $E(t)$, dinamika konsentrasi koloid $C(t)$, serta risiko retak kapiler selama pengeringan:

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 655: Electrophoretic Deposition (EPD) Kinetic & Multiphysics Coating Engine
Standar Referensi: ASTM C373, ISO 14704, ASTM F1601, ISO 20565, ASTM C1624
"""

import math
from typing import Dict, List, Tuple, Any

class ElectrophoreticDepositionSimulator:
    """
    Simulator multifisika untuk proses Electrophoretic Deposition (EPD).
    Menghitung kinetika akumulasi massa Hamaker/Sarkar-Nicholson,
    evolusi hambatan deposit, tebal lapisan basah & tersinter, serta mekanika kapiler pengeringan.
    """
    
    # Konstanta Fisika Universal
    EPSILON_0: float = 8.8541878128e-12  # Permitivitas vakum (F/m)
    BOLTZMANN_K: float = 1.380649e-23     # Konstanta Boltzmann (J/K)
    E_CHARGE: float = 1.602176634e-19    # Muatan elementer (C)
    AVOGADRO_N: float = 6.02214076e23    # Bilangan Avogadro (1/mol)
    
    def __init__(
        self,
        particle_name: str,
        theoretical_density: float,     # kg/m^3 (misal HAp: 3160, Al2O3: 3980, YSZ: 6050)
        mean_particle_size_d50: float,  # meter (misal 200 nm = 200e-9)
        zeta_potential: float,          # Volt (misal +45 mV = 0.045 V)
        hamaker_constant: float,        # Joule (misal 4.0e-20 J)
        solvent_name: str,
        dielectric_constant: float,     # Relatif epsilon_r (misal Etanol: 24.5, Isopropanol: 19.9, Air: 80.1)
        solvent_viscosity: float,       # Pa·s (misal Etanol: 1.074e-3, Isopropanol: 2.038e-3)
        solvent_surface_tension: float, # N/m (misal Etanol: 0.022, Air: 0.0728)
        ionic_strength: float           # mol/m^3 (misal 1.0 mol/m^3)
    ):
        self.particle_name = particle_name
        self.rho_th = theoretical_density
        self.d50 = mean_particle_size_d50
        self.radius_a = mean_particle_size_d50 / 2.0
        self.zeta = zeta_potential
        self.A_hamaker = hamaker_constant
        
        self.solvent_name = solvent_name
        self.eps_r = dielectric_constant
        self.eta = solvent_viscosity
        self.gamma_lv = solvent_surface_tension
        self.ionic_I = ionic_strength

    def compute_debye_length(self, temperature_k: float = 298.15) -> float:
        """Menghitung panjang skrining Debye (1/kappa) dalam satuan meter."""
        val = (2.0 * (self.E_CHARGE ** 2) * self.AVOGADRO_N * self.ionic_I) / (
            self.EPSILON_0 * self.eps_r * self.BOLTZMANN_K * temperature_k
        )
        kappa = math.sqrt(val)
        return 1.0 / kappa if kappa > 0 else 1e-9

    def compute_electrophoretic_mobility(self) -> Tuple[float, str]:
        """
        Menghitung mobilitas elektroforetik mu_e (m^2 / (V·s))
        menggunakan formulasi Henry dengan transisi Smoluchowski/Huckel.
        """
        debye_len = self.compute_debye_length()
        kappa_a = self.radius_a / debye_len
        
        # Penentuan fungsi Henry f(kappa*a)
        if kappa_a > 10.0:
            # Batas Smoluchowski: f = 1.5
            f_henry = 1.5
            regime = f"Smoluchowski (kappa*a = {kappa_a:.2f} >> 1)"
        elif kappa_a < 0.1:
            # Batas Huckel: f = 1.0
            f_henry = 1.0
            regime = f"Hückel (kappa*a = {kappa_a:.2f} << 1)"
        else:
            # Aproksimasi transisi Henry
            f_henry = 1.0 + 0.5 / (1.0 + 2.5 / (kappa_a * (1.0 + 2.0 * math.exp(-kappa_a))))
            regime = f"Henry Transition (kappa*a = {kappa_a:.2f})"
            
        mu_e = (2.0 * self.EPSILON_0 * self.eps_r * self.zeta * f_henry) / (3.0 * self.eta)
        return mu_e, regime

    def simulate_epd_kinetics(
        self,
        mode: str,                      # 'constant_voltage' atau 'constant_current'
        applied_value: float,           # Volt (jika mode CV) atau A/m^2 (jika mode CC)
        electrode_gap: float,           # meter (L_gap)
        electrode_area: float,          # m^2 (A)
        suspension_volume: float,       # m^3 (V_susp)
        initial_solid_concentration: float, # kg/m^3 (C_0)
        deposition_efficiency: float,   # f (0.1 - 1.0)
        deposit_specific_resistivity: float, # Ohm·m (rho_el_dep)
        green_porosity: float,          # p_green (misal 0.40 = 40%)
        sintered_porosity: float,       # p_sintered (misal 0.02 = 2%)
        total_time_seconds: float,      # durasi proses
        time_steps: int = 100
    ) -> Dict[str, Any]:
        """
        Simulasi integrasi numerik langkah demi langkah proses EPD.
        """
        mu_e, regime = self.compute_electrophoretic_mobility()
        dt = total_time_seconds / time_steps
        
        time_series: List[float] = []
        mass_series: List[float] = []
        thickness_green_series: List[float] = []
        thickness_sintered_series: List[float] = []
        e_field_series: List[float] = []
        current_density_series: List[float] = []
        concentration_series: List[float] = []
        voltage_series: List[float] = []
        
        current_mass = 0.0
        current_conc = initial_solid_concentration
        green_density = self.rho_th * (1.0 - green_porosity)
        sintered_density = self.rho_th * (1.0 - sintered_porosity)
        
        # Konduktivitas cairan suspensi dasar
        sigma_susp = 1e-4  # S/m (tahanan spesifik ~ 10 kOhm·m)
        r_susp_const = electrode_gap / (sigma_susp * electrode_area)
        
        for step in range(time_steps + 1):
            t = step * dt
            # Tebal lapisan deposit hijau saat ini (meter)
            d_green = current_mass / (electrode_area * green_density) if current_mass > 0 else 0.0
            d_sintered = current_mass / (electrode_area * sintered_density) if current_mass > 0 else 0.0
            
            # Resistansi deposit (Ohm)
            r_dep = (deposit_specific_resistivity * d_green) / electrode_area if d_green > 0 else 0.0
            r_total = r_susp_const + r_dep
            
            if mode == 'constant_voltage':
                v_applied = applied_value
                total_current = v_applied / r_total
                j_current = total_current / electrode_area
                # Kuat medan listrik efektif di dalam badan suspensi
                v_susp_drop = total_current * r_susp_const
                e_field = v_susp_drop / electrode_gap
            elif mode == 'constant_current':
                j_current = applied_value
                total_current = j_current * electrode_area
                v_applied = total_current * r_total
                e_field = (total_current * r_susp_const) / electrode_gap
            else:
                raise ValueError("Mode harus 'constant_voltage' atau 'constant_current'")
            
            # Laju migrasi dan deposisi massa (kg/s)
            v_drift = abs(mu_e) * e_field
            dm_dt = deposition_efficiency * electrode_area * current_conc * v_drift
            
            # Simpan data time-series
            time_series.append(t)
            mass_series.append(current_mass * 1000.0) # konversi ke gram
            thickness_green_series.append(d_green * 1e6) # konversi ke mikron
            thickness_sintered_series.append(d_sintered * 1e6) # konversi ke mikron
            e_field_series.append(e_field / 100.0) # V/cm
            current_density_series.append(j_current * 10.0) # mA/cm^2 (1 A/m^2 = 0.1 mA/cm^2 -> * 0.1)
            concentration_series.append(current_conc) # kg/m^3
            voltage_series.append(v_applied)
            
            # Update massa dan konsentrasi untuk langkah berikutnya (Euler forward)
            delta_m = dm_dt * dt
            # Pembatasan: tidak boleh melebihi massa partikel total yang tersisa dalam suspensi
            remaining_total_mass = current_conc * suspension_volume
            if delta_m > remaining_total_mass:
                delta_m = remaining_total_mass
                
            current_mass += delta_m
            current_conc = max(0.0, (remaining_total_mass - delta_m) / suspension_volume)

        # Analisis Mekanika Pengeringan & Tegangan Kapiler
        r_pore = (green_porosity / (1.0 - green_porosity)) * (self.d50 / 3.0)
        p_capillary = (2.0 * self.gamma_lv * math.cos(math.radians(20.0))) / r_pore # Pa
        
        # Ketebalan kritis fraktur hijau (aproksimasi K_Ic green = 0.05 MPa·m^0.5)
        k_ic_green = 0.05e6 # Pa·m^0.5
        h_crit_drying = ((k_ic_green / (1.12 * p_capillary)) ** 2) * 1e6 # mikron
        
        final_green_th = thickness_green_series[-1]
        final_sint_th = thickness_sintered_series[-1]
        linear_shrinkage = (1.0 - (final_sint_th / final_green_th)) * 100.0 if final_green_th > 0 else 0.0

        return {
            "mobility_m2_vs": mu_e,
            "mobility_regime": regime,
            "time_s": time_series,
            "mass_deposited_g": mass_series,
            "green_thickness_um": thickness_green_series,
            "sintered_thickness_um": thickness_sintered_series,
            "electric_field_v_cm": e_field_series,
            "current_density_ma_cm2": [j * 0.1 for j in current_density_series],
            "suspension_concentration_kg_m3": concentration_series,
            "voltage_v": voltage_series,
            "capillary_pressure_mpa": p_capillary / 1e6,
            "critical_cracking_thickness_um": h_crit_drying,
            "final_green_thickness_um": final_green_th,
            "final_sintered_thickness_um": final_sint_th,
            "linear_sintering_shrinkage_pct": linear_shrinkage
        }

# =====================================================================
# DEMONSTRASI PENGUJIAN SOLVER EPD & VALIDASI NUMERIK
# =====================================================================
if __name__ == "__main__":
    print("=" * 88)
    print("RUANGTI - MODUL 655: ELECTROPHORETIC DEPOSITION (EPD) MULTIPHYSICS SOLVER")
    print("=" * 88)
    
    # Inisialisasi Simulator untuk Pelapisan Hydroxyapatite (HAp) Bioaktif pada Implan Titanium
    hap_epd = ElectrophoreticDepositionSimulator(
        particle_name="Bioactive Hydroxyapatite (HAp)",
        theoretical_density=3160.0,         # kg/m^3
        mean_particle_size_d50=180e-9,      # 180 nm
        zeta_potential=0.042,               # +42 mV (kationik terstabilisasi trietanolamin)
        hamaker_constant=4.5e-20,           # Joule
        solvent_name="Isopropanol (IPA)",
        dielectric_constant=19.9,           # Isopropanol epsilon_r
        solvent_viscosity=2.038e-3,         # Pa·s
        solvent_surface_tension=0.0217,     # N/m
        ionic_strength=0.85                 # mol/m^3
    )
    
    mu, reg = hap_epd.compute_electrophoretic_mobility()
    print(f"Material Koloid      : {hap_epd.particle_name}")
    print(f"Media Pelarut        : {hap_epd.solvent_name}")
    print(f"Potensial Zeta (ζ)   : {hap_epd.zeta * 1000:.1f} mV")
    print(f"Mobilitas Elektro (μ): {mu:.4e} m^2/(V·s) [{reg}]")
    print("-" * 88)
    
    # Parameter Operasional EPD Mode Tegangan Konstan (Constant Voltage)
    sim_cv = hap_epd.simulate_epd_kinetics(
        mode="constant_voltage",
        applied_value=60.0,                 # 60 Volt DC
        electrode_gap=0.025,                # 25 mm gap
        electrode_area=0.0015,              # 15 cm^2 (Substrat Pelat Ti-6Al-4V)
        suspension_volume=0.0003,           # 300 mL (0.3 Liter)
        initial_solid_concentration=20.0,   # 20 g/L = 20 kg/m^3
        deposition_efficiency=0.82,         # 82% efisiensi tangkapan
        deposit_specific_resistivity=2.5e4, # 25 kOhm·m
        green_porosity=0.38,                # Porositas hijau 38%
        sintered_porosity=0.03,             # Porositas akhir 3%
        total_time_seconds=300.0,           # 5 Menit
        time_steps=6
    )
    
    print(f"{'Waktu (s)':>10} | {'Massa (g)':>10} | {'Tebal Hijau (μm)':>18} | {'Tebal Sinter (μm)':>18} | {'Medan E (V/cm)':>15} | {'Konsentrasi (g/L)':>18}")
    print("-" * 102)
    for i in range(len(sim_cv["time_s"])):
        t_val = sim_cv["time_s"][i]
        m_val = sim_cv["mass_deposited_g"][i]
        tg_val = sim_cv["green_thickness_um"][i]
        ts_val = sim_cv["sintered_thickness_um"][i]
        e_val = sim_cv["electric_field_v_cm"][i]
        c_val = sim_cv["suspension_concentration_kg_m3"][i]
        print(f"{t_val:10.1f} | {m_val:10.4f} | {tg_val:18.2f} | {ts_val:18.2f} | {e_val:15.2f} | {c_val:18.2f}")
        
    print("-" * 102)
    print(f"Tekanan Kapiler Pengeringan (P_cap) : {sim_cv['capillary_pressure_mpa']:.3f} MPa")
    print(f"Tebal Kritis Fraktur Hijau (h_crit) : {sim_cv['critical_cracking_thickness_um']:.1f} μm")
    print(f"Penyusutan Linier Sintering         : {sim_cv['linear_sintering_shrinkage_pct']:.2f}%")
    print("=" * 88)
```

---

## 6. Studi Kasus Industri: Rekayasa Pelapis Bioaktif Hydroxyapatite (HAp) pada Implan Ortopedi Ti-6Al-4V ELI

### 6.1 Deskripsi Masalah & Kebutuhan Rekayasa

Sebuah fasilitas manufaktur alat kesehatan dan implan ortopedi presisi memproduksi batang femoral panggul (*hip femoral stem*) berbahan paduan titanium biomedis **Ti-6Al-4V ELI (ASTM F136)**. Meskipun paduan titanium memiliki biokompatibilitas dan rasio kekuatan-terhadap-bobot yang sangat baik, sifat bio-inertnya menyebabkan laju osteointegrasi dengan jaringan tulang inang relatif lambat (membutuhkan waktu penyembuhan $> 12\text{ minggu}$).

Untuk mempercepat pertumbuhan jaringan tulang baru (*bone ingrowth*), permukaan batang implan dilapisi dengan lapisan keramik bioaktif **Hydroxyapatite ($\text{Ca}_{10}(\text{PO}_4)_6(\text{OH})_2$ - HAp)**. Metode konvensional *Atmospheric Plasma Spraying (APS)* menghasilkan panas tinggi ($> 10000\text{ K}$) yang mendekomposisi fasa kristalin HAp menjadi kalsium fosfat amorf yang mudah larut dan rapuh, serta memiliki ketebalan pelapis yang tidak seragam pada geometri mikro-pori 3D implan (*line-of-sight limitation*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|            PERBANDINGAN JALUR PROSES PELAPISAN HAp: PLASMA SPRAY (APS) VS ELECTROPHORETIC DEPOSITION (EPD)            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   A. METODE KONVENSIONAL: PLASMA SPRAYING (APS)             B. METODE LANJUTAN: ELECTROPHORETIC DEPOSITION (EPD)      |
|   ┌──────────────────────────────────────────────────┐      ┌──────────────────────────────────────────────────┐      |
|   │ • Batasan Line-of-Sight (Pori dalam tak terlapisi│      │ • Non-Line-of-Sight (Menembus seluruh rongga 3D) │      |
|   │ • Suhu Tinggi: Dekomposisi Kristalin HAp         │      │ • Suhu Kamar: Fasa Kristalin Terjaga 100%        │      |
|   │ • Ketebalan Tebal & Kasar (d > 100 μm)           │      │ • Ketebalan Nanometrik Terkontrol (d = 15-30 μm) │      |
|   │ • Adhesi Rentan Delaminasi Spontan               │      │ • Adhesi Metalurgi Kuat Pasca-Sintering          │      |
|   └──────────────────────────────────────────────────┘      └──────────────────────────────────────────────────┘      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Penerapan Solusi Rekayasa EPD & Hasil Evaluasi Kualitas

Tim rekayasa material menerapkan proses **Cathodic Electrophoretic Deposition (EPD)** dengan parameter teroptimasi:
- **Media Suspensi**: Isopropanol murni dengan dispersan kationik Triethanolamine (TEA, $0.6\text{ wt}\%$) dan aditif pengikat polivinil butiral (PVB, $0.2\text{ wt}\%$).
- **Karakteristik Koloid**: Potensial Zeta $\zeta = +44.8\text{ mV}$, fraksi padatan $2.5\text{ wt}\%$ nanoserbuk HAp ($d_{50} = 160\text{ nm}$).
- **Parameter Listrik**: Mode Tegangan Konstan $V = 50\text{ V DC}$, jarak celah elektroda $L_{gap} = 20\text{ mm}$ ($E_0 = 25\text{ V/cm}$), waktu deposisi $t_{dep} = 180\text{ detik}$.
- **Perlakuan Termal**: Pengeringan lambat terkontrol pada suhu $40^\circ\text{C}$ (kelembaban $65\%$) selama 12 jam, dilanjutkan dengan sintering vakum tinggi ($10^{-5}\text{ mbar}$) pada suhu $950^\circ\text{C}$ selama 2 jam.

Berikut adalah tabel perbandingan kinerja teknis sebelum dan sesudah implementasi EPD:

| Parameter Kinerja & Kualitas | Target Standar (ASTM F1601 / ISO 13779) | Metode Konvensional (Plasma Spray - APS) | Solusi Rekayasa (EPD + Vacuum Sintering) | Status Peningkatan |
| :--- | :--- | :--- | :--- | :--- |
| **Keseragaman Ketebalan ($d$)** | $20 \pm 5\ \mu\text{m}$ | $110 \pm 35\ \mu\text{m}$ (Fluktuasi Tinggi) | $22.4 \pm 1.8\ \mu\text{m}$ | **Seragam & Terkontrol** |
| **Kemurnian Fasa Kristalin HAp** | $\ge 95\%$ Kristalinitas | $62.4\%$ (Terdekomposisi $\alpha$-TCP/CaO) | $98.6\%$ (Fasa Murni Terjaga) | **+57.9% Retensi Kristal** |
| **Kekuatan Rekat Tarik (Adhesi)** | $> 15.0\text{ MPa}$ (ASTM F1147) | $18.2 \pm 4.1\text{ MPa}$ | $38.7 \pm 2.4\text{ MPa}$ | **+112.6% Peningkatan Adhesi** |
| **Cakupan Porositas 3D Implan** | Penetrasi Pori $> 90\%$ | $< 35\%$ (Hanya permukaan luar) | $96.8\%$ (Pelapisan Konformal 3D) | **+176.5% Penetrasi Pori** |
| **Laju Osteointegrasi In-Vivo** | Fiksasi Stabil $< 6\text{ minggu}$ | $10 - 14\text{ minggu}$ | $4 - 5\text{ minggu}$ | **55% Lebih Cepat** |
| **Biaya Energi per Unit Implan** | Efisiensi Manufaktur | Rp 450.000 / komponen | Rp 78.000 / komponen | **82.7% Reduksi Biaya** |

---

## 7. Panduan Praktik Terbaik Manufaktur & *Troubleshooting* Cacat EPD

```
+-----------------------------------------------------------------------------------------------------------------------+
|                          MATRIKS IDENTIFIKASI & PENANGGULANGAN CACAT ELECTROPHORETIC DEPOSITION                       |
+-----------------------------------------------------------------------------------------------------------------------+
|  Gejala Cacat               Akar Penyebab Fisika-Kimia                Tindakan Korektif Terverifikasi                 |
+-----------------------------------------------------------------------------------------------------------------------+
|  1. Gelembung / Lubang      • Elektrolisis air (H₂ / O₂ gas evolution)│ • Gunakan pelarut non-aqueous organik         |
|     Jarum (Pinholes)          akibat voltase melampaui potensial        (etanol, isopropanol, asetilaseton).          |
|                               dekomposisi air (V > 1.23 V).           │ • Jaga kadar air residual < 0.2 wt%.          |
|                                                                       │ • Batasi voltase kerja atau gunakan pulsa DC. |
|                                                                                                                       |
|  2. Retak Lumpur            • Tegangan tarik kapiler pengeringan      │ • Turunkan laju evaporasi pelarut.            |
|     (Mud Cracking)            melebihi kekuatan kohesif hijau          │ • Gunakan aditif polimer binder (PVB/PEG).    |
|                               (P_cap > σ_green_yield).                │ • Batasi ketebalan deposit di bawah h_crit.   |
|                                                                                                                       |
|  3. Lapisan Kasar /         • Aglomerasi prematur dalam suspensi      │ • Tingkatkan potensial zeta (|ζ| > 30 mV).    |
|     Tidak Homogen             akibat stabilitas DLVO rendah.          │ • Berikan perlakuan ultrasonikasi intensif.   |
|                               • Arus pusaran konveksi termal Joule.   │ • Kontrol suhu bak suspensi dengan pendingin. |
|                                                                                                                       |
|  4. Efek Sudut & Tebal      • Konsentrasi fluks medan listrik         │ • Rancang elektroda lawan konformal           |
|     Tidak Rata                pada tepi tajam elektroda.                (conformal counter-electrode).                |
|                               • Efek Faraday Cage pada ceruk dalam.   │ • Gunakan pelindung medan (dielectric shield).|
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Referensi Akademis Terverifikasi (Format Standar RuangTI)

1. **Sarkar, P., & Nicholson, P. S.** (1996). "Electrophoretic Deposition (EPD): Mechanisms, Kinetics, and Application to Ceramics". *Journal of the American Ceramic Society*, 79(8), pp. 1987–2002. DOI: [10.1111/j.1151-2916.1996.tb08929.x](https://doi.org/10.1111/j.1151-2916.1996.tb08929.x).
2. **Besra, L., & Liu, M.** (2007). "A review on fundamentals and applications of electrophoretic deposition (EPD)". *Progress in Materials Science*, 52(1), pp. 1–61. DOI: [10.1016/j.pmatsci.2006.07.001](https://doi.org/10.1016/j.pmatsci.2006.07.001).
3. **Boccaccini, A. R., Keim, S., Ma, R., Zheng, K., & Fabregat-Hermenegildo, S.** (2023). "Electrophoretic deposition of coatings for local delivery of therapeutics and bioactive surface functionalization". *Progress in Materials Science*, 138, 101140. DOI: [10.1016/j.pmatsci.2023.101140](https://doi.org/10.1016/j.pmatsci.2023.101140).
4. **Corni, I., Ryan, M. P., & Boccaccini, A. R.** (2008). "Electrophoretic deposition: From traditional ceramics to nanotechnology". *Journal of the European Ceramic Society*, 28(7), pp. 1353–1367. DOI: [10.1016/j.jeurceramsoc.2007.12.011](https://doi.org/10.1016/j.jeurceramsoc.2007.12.011).
5. **ASTM International.** (2022). *ASTM C373-18: Standard Test Methods for Determination of Water Absorption, Bulk Density, Apparent Porosity, and Apparent Specific Gravity of Fired Whiteware Products, Ceramic Tiles, and Glass Ceramics*. ASTM International, West Conshohocken, PA. DOI: [10.1520/C0373-18](https://doi.org/10.1520/C0373-18).
6. **International Organization for Standardization.** (2020). *ISO 14704:2020: Fine ceramics (advanced ceramics, advanced technical ceramics) — Test method for flexural strength of monolithic ceramics at room temperature*. ISO, Geneva, Switzerland.
