# Modul 609: Semi-Solid Metal Processing (SSM), Thixoforming, & Rheocasting Mechanics: Reologi Slurry Tiksotropik (Herschel-Bulkley / Ostwald-de Waele), Morfometri Globular Solid Fraction, Segregasi Fasa Cair-Padat, dan Rekayasa Pembentukan Komponen Presisi Otomotif & Kedirgantaraan (NADCA Standards, ASTM E8/E8M, & ISO 10893)

## 1. Pengantar & Konteks Industri *Semi-Solid Metal (SSM) Processing*

Dalam lanskap manufaktur komponen presisi modern, industri otomotif, kedirgantaraan, pertahanan, dan elektronika daya menghadapi tuntutan ketat untuk menghasilkan komponen struktural berdinding tipis, berkekuatan mekanis tinggi, berintegritas kedap tekanan (*pressure tightness*), serta bebas cacat porositas gas maupun penyusutan (*shrinkage porosity*). Paduan ringan seperti aluminium (*Al-Si-Mg* seperti A356, A357, 6061, 7075), paduan magnesium (*AZ91D, AM60B*), dan paduan tembaga-kuningan sering kali sulit diproduksi menggunakan metode konvensional:
1. **Pengecoran Konvensional (*High Pressure Die Casting - HPDC* / *Gravity Die Casting*)**: Menghadapi turbulensi pengisian rongga cetak yang parah akibat aliran fluida berkecepatan tinggi, menjebak udara dan gas pelumas cetak (*gas entrapment*), serta menghasilkan struktur butir dendritik kasar yang menurunkan kekuatan tarik (*tensile strength*), perpanjangan putus (*elongation at fracture*), dan kemampuan perlakuan panas *solution heat treatment* T6 (dapat menimbulkan *blistering*).
2. **Penempaan Konvensional (*Closed-Die Forging*)**: Membutuhkan gaya deformasi dan tonase mesin press yang luar biasa besar, tingkat keausan cetakan (*die wear*) yang tinggi, serta keterbatasan dalam mencetak geometri rongga kompleks berdinding tipis tanpa *machining allowance* yang boros material.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                PERBANDINGAN STRUKTUR MIKRO DAN POLA PENGISIAN RONGGA: COR LIQUID VS PENEMPAAN VS SSM                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] COR KONVENSIONAL (LIQUID METALS)          [B] PENEMPAAN PADAT (SOLID FORGING)     [C] SEMI-SOLID METAL (SSM)     |
|                                                                                                                       |
|      Aliran Turbulen (Re > 10,000)                 Deformasi Plastis Padat                 Aliran Laminar Visko-Plastis|
|      Jebakan Udara & Oksida Masif                 Gaya Tempa Puncak Gigantis              Bebas Turbulensi & Porositas|
|                                                                                                                       |
|         ┌───────────────────────┐                     ┌───────────────────────┐               ┌───────────────────────┐
|         │  ░░ ░░░ ░░░ ░░░ ░░░   │                     │  ███████████████████  │               │  ○○ ○○○ ○○ ○○○ ○○ ○○  │
|         │ ░░ ▒▒ (Porositas) ░░  │                     │  ██ (Tegangan Alir) █ │               │ ○○○  Matriks Cair  ○○ │
|         │  ░░ ░░░ ░░░ ░░░ ░░░   │                     │  ███████████████████  │               │  ○○ ○○○ ○○ ○○○ ○○ ○○  │
|         └───────────────────────┘                     └───────────────────────┘               └───────────────────────┘
|         Struktur Dendritik Kasar                      Butir Terdeformasi Kuat                 Struktur Globular / Bulat
|         (Kekuatan Tarik Rendah,                        (Tonase Press Sangat Tinggi,            (Tegangan Alir Rendah,
|          Tidak Bisa Diberi Heat T6)                     Geometri Tipis Sulit)                   Bisa Heat Treatment T6)
|                                                                                                                       |
|  Karakteristik SSM: Memadukan keunggulan kemampuan alir fluida cair (near-net-shape) dengan integritas padat tempa.   |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Semi-Solid Metal Processing (SSM)** atau pemrosesan logam semi-padat adalah paradigma manufaktur hibrida revolusioner yang mengeksploitasi fenomena fisika material di mana paduan logam berada pada temperatur transisi semi-padat (antara garis solidus $T_{\text{solidus}}$ dan likuidus $T_{\text{liquidus}}$) dengan fraksi padat terkontrol ($f_s \approx 0.30 - 0.65$). Pada rentang temperatur ini, jika struktur mikro padatan dendritik dihancurkan dan ditransformasikan menjadi butiran berbentuk bola (*globular / spheroidal morphology*), slurry semi-padat akan menunjukkan perilaku mekanika reologi **tiksotropik (*thixotropic*)** dan **pseudoplastis (*shear-thinning*)**:
- Pada saat diam atau dikenai laju geser sangat rendah ($\dot{\gamma} \to 0$), material berperilaku menyerupai fasa padat yang kaku dan dapat dipotong atau dipindahkan menggunakan robot manipulator tanpa tumpah (*self-supporting solid-like billet*).
- Namun, saat dikenai tegangan geser dan gaya dorong plunger ke dalam rongga cetak dengan laju geser tinggi ($\dot{\gamma} > 100\text{ s}^{-1}$), viskositas semu material turun secara drastis hingga ribuan kali lipat ($\eta_{\text{app}} \approx 0.1 - 10\text{ Pa}\cdot\text{s}$), memungkinkannya mengalir secara laminar sempurna mengisi geometri cetakan yang sangat rumit tanpa turbulensi.

Dua rute manufaktur industri utama dalam SSM:
1. **Thixoforming (Thixocasting / Thixoforging)**: Billet logam yang telah diproses awal memiliki struktur mikro nondendritik (misalnya melalui *Magnetohydrodynamic Stirring - MHD* atau *Direct Chill casting*) dipotong, dipanaskan kembali secara induksi elektro-termal secara presisi ke zona semi-padat, lalu diinjeksikan ke cetakan die casting atau press tempa.
2. **Rheocasting (Direct Slurry Forming)**: Logam cair disiapkan langsung dari fasa cair murni, kemudian didinginkan secara terkontrol disertai perlakuan geser mekanis, elektromagnetik, atau perlakuan termal ultrasonik untuk menumbuhkan butiran globular secara *in-situ*, lalu langsung diinjeksikan ke dalam rongga cetak mesin die casting tanpa siklus pemanasan ulang billet.

Standar internasional dan acuan industri:
- **NADCA (North American Die Casting Association) Standards**: *Standards for Semi-Solid and Squeeze Cast Alloys and Tooling Design*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ISO 10893-6 / 10893-7**: *Non-destructive testing of steel and metallic components — Radiographic and digital testing for internal casting defects*.
- **ASM Handbook Volume 15**: *Casting — Semi-Solid Metal Processing Principles and Alloy Metallurgy*.

---

## 2. Termodinamika Fasa Semi-Padat & Kinetika Globularisasi Mikrostruktur

### 2.1 Fraksi Padat Termodinamik (*Solid Fraction Modeling - Scheil vs Equilibrium*)

Fraksi padatan kristal ($f_s$) sebagai fungsi temperatur paduan ($T$) di antara temperatur liquidus ($T_L$) dan solidus ($T_S$) merupakan variabel kendali termodinamika paling kritis dalam proses SSM. 

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                DIAGRAM FASA BINER DAN KURVA FRAKSI PADAT (SOLID FRACTION f_s)                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  TEMPERATUR (T)                                             FRAKSI PADAT f_s (0.0 s.d 1.0)                            |
|       │                                                           │                                                   |
|   T_L ┼───. Liquidus (Fasa Cair Murni f_s = 0)                1.0 ┼──. Solidus (f_s = 1.0)                            |
|       │    ╲                                                      │   ╲                                               |
|       │     ╲   Zona Semi-Padat (Slurry SSM)                      │    ╲  Jendela Kerja SSM Optimal                   |
|   T_op┼──────*───── [f_s = 0.40 - 0.50]                           │     *══════════════* [f_s = 0.35 - 0.55]          |
|       │       ╲                                                   │     │   (Sensitivitas df_s/dT Rendah)             |
|   T_S ┼────────. Solidus (Fasa Padat Murni f_s = 1)               │     │                                             |
|       │                                                       0.0 ┼─────┴────────────────────────────────             |
|       └─────────────────────────────► Komposisi (% B)             └──────────────────────────────► Temperatur (T)     |
|                                                                     T_S                     T_op        T_L           |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Model Kesetimbangan Termodinamik Lever Rule (Equilibrium Lever Rule)**: Mengasumsikan difusi sempurna pada fasa cair dan padat:

$$f_s(T) = \frac{T_L - T}{(1 - k_0)(T_m - T_L) + (T_L - T)}$$

di mana $k_0 = C_S / C_L$ adalah koefisien partisi kesetimbangan solut, dan $T_m$ adalah titik lebur pelarut murni.

2. **Model Non-Kesetimbangan Scheil-Gulliver (*Scheil Equation*)**: Mengasumsikan difusi nol pada fasa padat dan difusi sempurna pada fasa cair, yang sangat representatif untuk laju pendinginan pembekuan industri:

$$f_s(T) = 1 - \left( \frac{T_m - T}{T_m - T_L} \right)^{\frac{1}{k_0 - 1}}$$

Sensitivitas kontrol temperatur pemanasan slurry semi-padat ($\frac{df_s}{dT}$) harus bernilai serendah mungkin di sekitar temperatur kerja operasi ($T_{\text{op}}$) untuk mencegah fluktuasi fraksi padat yang dapat memicu ketidakstabilan pengisian rongga cetak:

$$\left| \frac{df_s}{dT} \right|_{T_{\text{op}}} = \frac{1}{(1 - k_0)(T_m - T_L)} \left( \frac{T_m - T_{\text{op}}}{T_m - T_L} \right)^{\frac{2 - k_0}{k_0 - 1}} < 0.015 \text{ K}^{-1}$$

---

### 2.2 Kinetika Transformasi Morfologi: Dendritik ke Globular (*Ripening & Coarsening*)

Morfologi partikel padat dalam fasa semi-padat menentukan sifat mekanika alir slurry. Struktur dendritik awal memiliki luas antarmuka spesifik yang tinggi, menciptakan saling kunci (*mechanical interlocking*) yang mencegah deformasi plastis. Melalui perlakuan gaya geser mekanik atau penahanan isotermal (*isothermal holding*), struktur cabang sekunder dendritik (*secondary dendrite arms*) mengalami pelelehan leher cabang (*neck remelting*) akibat efek Gibbs-Thomson:

$$\Delta T_r = \frac{2 \gamma_{SL} V_m}{\Delta H_f} \cdot K_c$$

di mana:
- $\gamma_{SL}$ = Energi bebas antarmuka padat-cair (*solid-liquid interfacial energy*, $\approx 0.1 - 0.2\text{ J/m}^2$).
- $V_m$ = Volume molar atom paduan ($\text{m}^3/\text{mol}$).
- $\Delta H_f$ = Kalor laten peleburan molar ($\text{J/mol}$).
- $K_c = \frac{1}{r_1} + \frac{1}{r_2}$ = Kelengkungan rata-rata lokal permukaan kristal ($\text{m}^{-1}$).

Pertumbuhan butir globular selama penahanan isotermal mengikuti hukum pengasaran butir Ostwald (*Lifshitz-Slyozov-Wagner - LSW Coarsening Theory*):

$$\bar{d}^3(t) - \bar{d}_0^3 = K_{\text{LSW}} \cdot t$$

dengan laju pengasaran globular ($K_{\text{LSW}}$):

$$K_{\text{LSW}} = \frac{64 \gamma_{SL} D_L C_0 V_m^2}{9 R_g T (1 - k_0)^2} \cdot \psi(f_s)$$

di mana $D_L$ adalah koefisien difusi solut pada fasa cair, $C_0$ adalah konsentrasi solut nominal, $R_g$ adalah konstanta gas universal ($8.314\text{ J/mol}\cdot\text{K}$), dan $\psi(f_s)$ adalah fungsi koreksi fraksi padat.

Derajat kebulatan partikel padat diukur secara kuantitatif melalui faktor bentuk (*Shape Factor / Sphericity* $S_F$):

$$S_F = \frac{4 \pi \cdot A_p}{P_p^2}$$

di mana $A_p$ adalah luas proyeksi partikel padat dan $P_p$ adalah keliling perimeter partikel. Untuk proses SSM berkualitas tinggi, $S_F$ harus bernilai antara $0.70 \le S_F \le 0.95$ ($S_F = 1.0$ untuk lingkaran bulat sempurna).

---

## 3. Mekanika Reologi Slurry Semi-Padat & Fenomena Tiksotropik

### 3.1 Model Viskositas Semu Non-Newtonian (Ostwald-de Waele & Herschel-Bulkley)

Slurry semi-padat merupakan suspensi pekat terkonsentrasi tinggi dari partikel bulat padat di dalam cairan eutektik. Viskositas semu (*apparent viscosity*, $\eta_{\text{app}}$) sangat dipengaruhi oleh laju geser ($\dot{\gamma}$), fraksi padat ($f_s$), dan sejarah deformasi geser.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    KURVA REOLOGI ALIRAN TIKSIOTROPIK DAN SHEAR-THINNING                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  VISKOSITAS SEMU η_app (Pa·s)                               TEGANGAN GESER τ (kPa)                                    |
|       │                                                           │                                                   |
|   1000┼──. Keadaan Diam / Statis (Struktur Agregat)               │                       / Aliran Pseudoplastis      |
|       │   ╲                                                       │                      /                            |
|    100┼────.                                                      │                     /                             |
|       │     ╲   Perilaku Shear-Thinning (De-aglomerasi)           │                    /                              |
|     10┼──────.                                                    │                   /                               |
|       │       ╲                                                   │                  /                                |
|      1┼────────. Keadaan Tergeser Kuat (η_inf)                τ_y ┼──. Yield Stress / Tegangan Luluh Bingham          |
|       │                                                           │                                                   |
|    0.1┼───────────────────────────────────                    0.0 ┼──────────────────────────────────                 |
|       └─────────────────────────────► Laju Geser γ_dot (1/s)      └──────────────────────────────► Laju Geser γ_dot   |
|       0.1     1.0     10     100     1000                                                                             |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Model Hukum Daya Ostwald-de Waele (*Power Law Model*)**:

$$\tau = K_{\text{flow}} \cdot \dot{\gamma}^n \implies \eta_{\text{app}} = \frac{\tau}{\dot{\gamma}} = K_{\text{flow}} \cdot \dot{\gamma}^{n-1}$$

di mana $K_{\text{flow}}$ adalah indeks konsistensi aliran ($\text{Pa}\cdot\text{s}^n$) dan $n$ adalah indeks perilaku aliran ($n < 1.0$ menunjukkan sifat *pseudoplastic / shear-thinning*, pada slurry SSM paduan aluminium tipikal $n \approx 0.25 - 0.45$).

2. **Model Viskoplastis Herschel-Bulkley (*Herschel-Bulkley Model*)**: Memperhitungkan tegangan luluh awal ($\tau_y$) yang harus dilampaui sebelum slurry dapat mengalir:

$$\tau = \tau_y(f_s) + K_{\text{HB}} \cdot \dot{\gamma}^m \quad \text{untuk } \tau > \tau_y$$

$$\eta_{\text{app}} = \frac{\tau_y(f_s)}{\dot{\gamma}} + K_{\text{HB}} \cdot \dot{\gamma}^{m-1}$$

Tegangan luluh $\tau_y$ bergantung secara eksponensial pada fraksi padat $f_s$:

$$\tau_y(f_s) = \tau_0 \cdot \exp\left( B_{\tau} \cdot \frac{f_s}{1 - f_s / f_{s,\text{max}}} \right)$$

di mana $f_{s,\text{max}} \approx 0.64$ adalah fraksi pemadatan acak maksimum partikel padat (*random close packing limit*).

---

### 3.2 Kinetika Struktur Internal & Persamaan Keadaan Tiksotropi (Moore-Cheng Kinetics)

Perilaku tiksotropik slurry semi-padat dikendalikan oleh dinamika pembentukan ikatan antar-partikel (aglomerasi) saat diam dan penghancuran ikatan (de-aglomerasi) akibat gaya geser mekanik. Parameter struktur mikro internal $\lambda \in [0, 1]$ didefinisikan sebagai rasio ikatan struktural yang utuh:
- $\lambda = 1$: Struktur aglomerasi penuh (kondisi diam sempurna).
- $\lambda = 0$: Struktur de-aglomerasi total (kondisi tergeser pada $\dot{\gamma} \to \infty$).

Evolusi laju perubahan parameter struktur $\lambda$ dimodelkan melalui persamaan diferensial kinetika Moore:

$$\frac{d\lambda}{dt} = a_b (1 - \lambda) - b_d \cdot \lambda \cdot \dot{\gamma}^p$$

di mana:
- $a_b$ = Konstanta laju pemulihan struktural / aglomerasi Brownian (*build-up rate constant*, $\text{s}^{-1}$).
- $b_d$ = Konstanta laju perusakan struktural akibat geseran (*break-down rate constant*).
- $p$ = Eksponen laju perusakan geser ($p \approx 0.8 - 1.2$).

Pada kondisi tunak (*steady-state*, $\frac{d\lambda}{dt} = 0$), nilai parameter struktur kesetimbangan ($\lambda_{\text{eq}}$) adalah:

$$\lambda_{\text{eq}}(\dot{\gamma}) = \frac{a_b}{a_b + b_d \cdot \dot{\gamma}^p} = \frac{1}{1 + \left( \frac{\dot{\gamma}}{\dot{\gamma}_c} \right)^p}$$

Viskositas semu sesaat slurry semi-padat merupakan fungsi linear dari derajat keterikatan struktur $\lambda$:

$$\eta_{\text{app}}(\dot{\gamma}, \lambda) = \eta_\infty(\dot{\gamma}) + \lambda \cdot \left[ \eta_0(\dot{\gamma}) - \eta_\infty(\dot{\gamma}) \right]$$

---

## 4. Hidrodinamika Pengisian Rongga Cetak & Segregasi Fasa Cair-Padat

### 4.1 Persamaan Kekekalan Massa & Momentum Dua Fasa (Two-Phase Mixture Mechanics)

Dalam proses injeksi die casting SSM (*Thixomolding / Rheocasting Die Filling*), slurry semi-padat diperlakukan sebagai fluida multifasa kontinum yang terdiri dari fasa padat (butir kristal) dan fasa cair (matriks inter-globular).

1. **Konservasi Massa Fasa Padat dan Cair**:

$$\frac{\partial (\rho_s f_s)}{\partial t} + \nabla \cdot (\rho_s f_s \mathbf{u}_s) = 0$$

$$\frac{\partial (\rho_l (1 - f_s))}{\partial t} + \nabla \cdot (\rho_l (1 - f_s) \mathbf{u}_l) = 0$$

2. **Konservasi Momentum Interaksi Antarfasa (Hukum Darcy-Forchheimer untuk Aliran Cairan Menembus Matriks Butiran Padat)**:

Ketika kecepatan fasa padat ($\mathbf{u}_s$) dan fasa cair ($\mathbf{u}_l$) berbeda akibat tekanan injeksi tinggi, cairan eutektik dapat terperas keluar meninggalkan kerangka butiran padat (*liquid segregation / phase separation*). Kecepatan filtrasi relatif fluida cair dimodelkan melalui modifikasi Hukum Darcy:

$$\mathbf{u}_l - \mathbf{u}_s = -\frac{K_{\text{perm}}(f_s)}{\eta_l (1 - f_s)} \cdot \left( \nabla P_l - \rho_l \mathbf{g} \right)$$

di mana permeabilitas media berbutir $K_{\text{perm}}(f_s)$ dihitung menggunakan **Relasi Kozeny-Carman**:

$$K_{\text{perm}}(f_s) = \frac{d_p^2 \cdot (1 - f_s)^3}{180 \cdot f_s^2}$$

di mana $d_p$ adalah diameter butiran globular rata-rata ($\mu\text{m}$). Jika gradien tekanan injeksi $\nabla P$ terlalu tajam atau kecepatan plunger terlalu tinggi, segregasi fasa lokal akan terjadi, menyebabkan variasi komposisi kimia dan kekerasan yang tidak merata pada komponen akhir.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MEKANIKA FILTERING DAN SEGREGASI FASA PADA RUNNER & GATE                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Shot Sleeve / Ingot Injeksi                    Ingate Pintu Masuk Rongga Cetak       Rongga Cetak Produk       |
|                                                                                                                       |
|     Plunger Hidrolik                                                                                                  |
|     (Kecepatan Terkontrol v_p)                                                                                        |
|         │                                                    │                              ┌───────────────────────┐ |
|         ▼                                                    ▼                              │  ○○○○○○○○○○○○○○○○○○○  │ |
|     ┌───────┐                                          ┌───────────┐                        │  ○○  SLURRY SSM   ○○  │ |
|     │ ▓▓▓▓▓ │  ════►  [ ○○○○○○○○○○○○○○○○○○ ] ════════► │ ╱       ╲ │ ═════════════════════► │  ○○  LAMINAR FLOW ○○  │ |
|     │ ▓▓▓▓▓ │         [ Fraksi Padat f_s   ]           │           │ Aliran Bebas Jetting   │  ○○○○○○○○○○○○○○○○○○○  │ |
|     └───────┘         [ Homogen Terdistribusi]         └───────────┘ & Segregasi Minimal    └───────────────────────┘ |
|                                                                                                                       |
|  Kriteria Bilangan Reynolds Aliran SSM: Re = (ρ * v * D_h) / η_app < 500  (Zona Aliran Laminar Sempurna Tanpa Oksida) |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Python Solver: Kinetika Reologi Tiksotropik, Profil Tekanan Injeksi, dan Verifikasi Segregasi SSM

Skrip komputasional reologi berikut memodelkan kurva kesetimbangan fraksi padat Scheil, evolusi viskositas tiksotropik transient Moore-Cheng, profil gaya tekan injeksi plunger hidrolik pada mesin penempaan/die casting, serta evaluasi risiko segregasi cair-padat.

```python
"""
================================================================================
RUANGTI INDUSTRIAL ENGINEERING KNOWLEDGE BASE: SSM RHEOLOGY SOLVER
Modul 609: Semi-Solid Metal Processing, Thixoforming, & Rheocasting Mechanics
Standar: NADCA Standards, ASTM E8/E8M, ISO 10893, & ASM Handbook Vol. 15
================================================================================
"""

import math
from typing import Dict, List, Tuple

class SemiSolidMetalSolver:
    """
    Solver Rekayasa Reologi dan Pemodelan Proses Semi-Solid Metal Processing (SSM).
    Menghitung fraksi padat Scheil, kinetika viskositas Moore-Cheng,
    gaya injeksi die casting, dan rasio pemisahan fasa (segregasi).
    """

    def __init__(self, 
                 alloy_name: str = "A356 Aluminum Alloy",
                 t_melting_pure: float = 660.0,   # Titik lebur Al murni (deg C)
                 t_liquidus: float = 615.0,       # Titik lebur liquidus (deg C)
                 t_solidus: float = 555.0,        # Titik lebur solidus / eutektik (deg C)
                 partition_coeff_k0: float = 0.13, # Koefisien partisi Si pada Al
                 density_slurry: float = 2650.0,  # Densitas slurry semi-padat (kg/m^3)
                 grain_diameter_dp: float = 45e-6): # Diameter butiran globular (m)
        self.alloy_name = alloy_name
        self.tm = t_melting_pure
        self.tl = t_liquidus
        self.ts = t_solidus
        self.k0 = partition_coeff_k0
        self.rho = density_slurry
        self.dp = grain_diameter_dp

    def calculate_scheil_solid_fraction(self, temperature_c: float) -> Tuple[float, float]:
        """
        Menghitung fraksi padatan (f_s) dan gradien sensitivitas (df_s/dT)
        menggunakan model termodinamika non-kesetimbangan Scheil-Gulliver.
        """
        if temperature_c >= self.tl:
            return 0.0, 0.0
        if temperature_c <= self.ts:
            return 1.0, 0.0

        exponent = 1.0 / (self.k0 - 1.0)
        temp_ratio = (self.tm - temperature_c) / (self.tm - self.tl)
        
        fs = 1.0 - math.pow(temp_ratio, exponent)
        fs = max(0.0, min(1.0, fs))

        # Derivatif analitik df_s/dT
        # d/dT [ 1 - ((Tm - T)/(Tm - Tl))^exp ] = exp * ((Tm - T)/(Tm - Tl))^(exp - 1) * (1 / (Tm - Tl))
        dfs_dt = -exponent * math.pow(temp_ratio, exponent - 1.0) / (self.tm - self.tl)

        return fs, abs(dfs_dt)

    def calculate_thixotropic_viscosity(self, 
                                        shear_rate: float, 
                                        solid_fraction: float, 
                                        time_sheared_s: float = 0.5,
                                        a_build: float = 0.45,
                                        b_break: float = 0.08,
                                        p_exponent: float = 1.0) -> Dict[str, float]:
        """
        Menghitung parameter struktur internal (lambda) dan viskositas semu
        tiksotropik berdasarkan kinetika Moore-Cheng.
        """
        # Tegangan luluh Bingham/Herschel-Bulkley fasa padat
        fs_max = 0.64
        if solid_fraction >= fs_max:
            solid_fraction = fs_max - 0.001

        tau_y = 120.0 * math.exp(6.5 * (solid_fraction / (1.0 - solid_fraction / fs_max))) # Pa

        # Nilai lambda kesetimbangan tunak
        shear_term = b_break * math.pow(max(shear_rate, 1e-3), p_exponent)
        lambda_eq = a_build / (a_build + shear_term)

        # Integrasi analitik transient lambda(t) dari kondisi istirahat (lambda_0 = 1.0)
        k_net = a_build + shear_term
        lambda_t = lambda_eq + (1.0 - lambda_eq) * math.exp(-k_net * time_sheared_s)

        # Viskositas fasa cair eutektik murni (Al-Si liquid ~ 0.003 Pa.s)
        eta_liquid = 0.0035 

        # Viskositas struktur rusak total (fully broken, lambda=0)
        # Model Krieger-Dougherty untuk suspensi
        eta_inf = eta_liquid * math.pow(1.0 - (solid_fraction / fs_max), -2.5 * fs_max)

        # Viskositas struktur teraglomerasi (fully structured, lambda=1)
        eta_0 = eta_inf * (1.0 + 85.0 * solid_fraction)

        # Viskositas semu sesaat
        eta_app = eta_inf + lambda_t * (eta_0 - eta_inf)
        
        # Total tegangan geser (Herschel-Bulkley)
        k_hb = eta_app
        m_index = 0.35
        shear_stress = tau_y + k_hb * math.pow(max(shear_rate, 1e-3), m_index)

        return {
            "solid_fraction": round(solid_fraction, 4),
            "yield_stress_pa": round(tau_y, 2),
            "lambda_structure": round(lambda_t, 4),
            "lambda_equilibrium": round(lambda_eq, 4),
            "apparent_viscosity_pa_s": round(eta_app, 4),
            "total_shear_stress_pa": round(shear_stress, 2)
        }

    def evaluate_die_filling_and_segregation(self,
                                             plunger_velocity_m_s: float,
                                             shot_sleeve_dia_mm: float,
                                             gate_area_mm2: float,
                                             cavity_volume_cm3: float,
                                             operating_temp_c: float) -> Dict[str, any]:
        """
        Mensimulasikan hidrodinamika pengisian rongga cetak SSM,
        bilangan Reynolds aliran, tekanan injeksi plunger, dan risiko segregasi fasa.
        """
        fs, dfs_dt = self.calculate_scheil_solid_fraction(operating_temp_c)
        
        sleeve_area_m2 = math.pi * math.pow(shot_sleeve_dia_mm * 1e-3 / 2.0, 2)
        gate_area_m2 = gate_area_mm2 * 1e-6
        cavity_vol_m3 = cavity_volume_cm3 * 1e-6

        # Laju volumetrik aliran (Q)
        flow_rate_q = sleeve_area_m2 * plunger_velocity_m_s # m^3/s
        
        # Kecepatan pada ingate
        gate_velocity_m_s = flow_rate_q / gate_area_m2

        # Laju geser rata-rata pada gate (asumsi celah gate tebal h_g)
        gate_thickness_m = math.sqrt(gate_area_m2 / 4.0) # estimasi rasio aspek
        shear_rate_gate = 2.0 * gate_velocity_m_s / gate_thickness_m

        # Waktu pengisian rongga (filling time)
        filling_time_s = cavity_vol_m3 / flow_rate_q

        # Viskositas semu pada gate
        rheo_data = self.calculate_thixotropic_viscosity(
            shear_rate=shear_rate_gate,
            solid_fraction=fs,
            time_sheared_s=0.1
        )
        eta_gate = rheo_data["apparent_viscosity_pa_s"]

        # Bilangan Reynolds modifikasi pada ingate
        hydraulic_dia_gate = 2.0 * gate_thickness_m
        # Pada slurry semi-padat non-Newtonian, apparent viscosity efektif pada bulk flow
        reynolds_number = (self.rho * gate_velocity_m_s * hydraulic_dia_gate) / max(eta_gate, 0.05)

        # Permeabilitas Kozeny-Carman
        k_perm = (math.pow(self.dp, 2) * math.pow(1.0 - fs, 3)) / (180.0 * math.pow(max(fs, 1e-4), 2))

        # Kebutuhan tekanan injeksi statis + dinamis (Bernoulli non-Newtonian)
        # Delta P runner + gate + pengisian rongga cetak
        delta_p_flow_pa = 0.5 * self.rho * math.pow(gate_velocity_m_s, 2) + 2.0 * (rheo_data["total_shear_stress_pa"]) * (0.10 / hydraulic_dia_gate)
        intensification_pressure_pa = max(delta_p_flow_pa * 1.5, 60.0e6) # Tekanan intensifikasi squeeze ~ 60 - 120 MPa
        plunger_force_kn = (intensification_pressure_pa * sleeve_area_m2) / 1000.0

        # Kriteria Evaluasi Aliran
        flow_regime = "Laminar Stabil (Bebas Porositas Turbulensi)" if gate_velocity_m_s <= 10.0 else "Transisi / Potensi Jetting"
        segregation_risk = "Sangat Rendah (Aman)" if gate_velocity_m_s <= 10.0 and dfs_dt < 0.015 else "Sedang / Perlu Optimalisasi Ingate"

        return {
            "alloy": self.alloy_name,
            "operating_temp_c": operating_temp_c,
            "solid_fraction_fs": round(fs, 4),
            "temp_sensitivity_per_k": round(dfs_dt, 5),
            "gate_velocity_m_s": round(gate_velocity_m_s, 2),
            "shear_rate_gate_s_inv": round(shear_rate_gate, 1),
            "filling_time_s": round(filling_time_s, 4),
            "apparent_viscosity_gate_pa_s": round(eta_gate, 4),
            "reynolds_number": round(reynolds_number, 2),
            "flow_regime": flow_regime,
            "permeability_m2": f"{k_perm:.3e}",
            "required_injection_pressure_mpa": round(intensification_pressure_pa * 1e-6, 2),
            "plunger_force_kn": round(plunger_force_kn, 2),
            "segregation_risk": segregation_risk
        }


# ============================================================================
# EKSEKUSI PENGUJIAN SOLVER & STUDI KASUS INDUSTRIAL DIE CASTING SSM
# ============================================================================
if __name__ == "__main__":
    solver = SemiSolidMetalSolver(
        alloy_name="A356.0-T6 Aluminum Engine Bracket",
        t_melting_pure=660.0,
        t_liquidus=615.0,
        t_solidus=557.0,
        partition_coeff_k0=0.13,
        density_slurry=2650.0,
        grain_diameter_dp=40e-6
    )

    print("================================================================================")
    print("  SIMULASI TERMODINAMIKA FRAKSI PADAT SCHEIL & VISKOSITAS TIKSIOTROPIK SSM     ")
    print("================================================================================")
    print(f"Material Target      : {solver.alloy_name}")
    print(f"Liquid/Solidus Range : {solver.ts} C - {solver.tl} C")
    print("--------------------------------------------------------------------------------")
    print(f"{'Temp (C)':<10} | {'f_s':<8} | {'df_s/dT (1/K)':<15} | {'Viskositas Semu @ 100/s (Pa.s)':<30}")
    print("--------------------------------------------------------------------------------")

    for temp in [605.0, 595.0, 588.0, 582.0, 578.0, 572.0]:
        fs_val, sens = solver.calculate_scheil_solid_fraction(temp)
        visc_res = solver.calculate_thixotropic_viscosity(shear_rate=100.0, solid_fraction=fs_val, time_sheared_s=0.2)
        print(f"{temp:<10.1f} | {fs_val:<8.4f} | {sens:<15.5f} | {visc_res['apparent_viscosity_pa_s']:<30.4f}")

    print("================================================================================")
    print("  SIMULASI PENGISIAN DIE CASTING SSM BRACKET SUSPENSI OTOMOTIF                 ")
    print("================================================================================")
    case_sim = solver.evaluate_die_filling_and_segregation(
        plunger_velocity_m_s=0.65,
        shot_sleeve_dia_mm=80.0,
        gate_area_mm2=480.0,
        cavity_volume_cm3=920.0,
        operating_temp_c=582.0
    )
    for k, v in case_sim.items():
        print(f"{k:<35}: {v}")
```

---

## 6. Studi Kasus Industri: Manufaktur Komponen Suspensi Otomotif (*A356-T6 Rheocasting Suspension Control Arm*)

### 6.1 Latar Belakang Masalah & Spesifikasi Komponen

Sebuah perusahaan manufaktur komponen otomotif *Tier-1* memproduksi lengan ayun suspensi depan (*Front Lower Control Arm*) berbahan paduan Aluminium A356 untuk platform kendaraan listrik *Electric Vehicle (EV)*. Komponen ini merupakan *safety-critical structural part* yang menahan beban fatik dinamik jutaan siklus dan beban impak jalan raya:
- Massa target: $2.45\text{ kg}$ (reduksi bobot $32\%$ dibanding besi cor nodular FCD 450).
- Kekuatan Mekanis Target (Kondisi T6 Solution Treated & Aged):
  - Kuat Tarik Luluh (*Yield Strength*, $R_{p0.2}$) $\ge 240\text{ MPa}$.
  - Kuat Tarik Maksimum (*Ultimate Tensile Strength*, $R_m$) $\ge 310\text{ MPa}$.
  - Perpanjangan Putus (*Elongation at Fracture*, $A_5$) $\ge 9.0\%$.
  - Bebas cacat radiografi menurut **ISO 10893-7 Level 1** (nol porositas gas makro > $0.2\text{ mm}$).

Pada proses awal menggunakan *High-Pressure Die Casting (HPDC)* cair konvensional, terjadi *rejection rate* sebesar $16.8\%$ akibat porositas gelembung gas terjebak yang melepuh (*blistering*) saat dipanaskan pada temperatur pelarutan $535^\circ\text{C}$ (*solution treatment*), sehingga komponen tidak dapat diberi perlakuan panas T6 secara optimal.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ANALISIS PERBANDINGAN STRUKTUR DAN SIFAT MEKANIS HASIL PRODUKSI (T6)                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  PARAMETER UJI / MEKANIK          HPDC KONVENSIONAL (CAIR)         RHEOCASTING SSM (SEMI-PADAT)     PENINGKATAN (%)   |
|  ──────────────────────────────   ──────────────────────────────   ──────────────────────────────   ───────────────   |
|  Porositas Gas Internal           2.15 vol.%                       0.04 vol.% (Densitas 99.96%)     -98.1% (Lolos X-Ray)
|  Faktor Bentuk Butir S_F          0.28 (Dendritik Acak)            0.86 (Globular Bulat Halus)      +207.1%           |
|  Yield Strength R_p0.2 (MPa)      185 MPa                          258 MPa                          +39.5%            |
|  Tensile Strength R_m (MPa)       245 MPa                          332 MPa                          +35.5%            |
|  Elongation at Break A5 (%)       3.2% (Getas, Cacat Porositas)    11.4% (Ulet Sempurna)            +256.2%           |
|  Fatigue Life @ 120 MPa (Cycles)  4.5 x 10^5 Siklus                2.8 x 10^7 Siklus                +6120% (61x Lipat)|
|  Reject Rate Manufaktur           16.8%                            0.45%                            -97.3%            |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

### 6.2 Implementasi Sistem Rekayasa Rheocasting In-Situ (SEED Process)

Untuk menyelesaikan permasalahan tersebut, lini produksi dirombak mengadopsi sistem **Swaged Equilibrium Electro-Magnetic Decantation (SEED) Rheocasting**:
1. **Penyiapan Slurry Globular**: Logam cair A356 dituangkan ke dalam wadah wadah bejana termal pada temperatur $630^\circ\text{C}$, lalu didinginkan secara bertahap dengan laju pendinginan terkontrol $0.8^\circ\text{C/s}$ disertai osilasi rotasional mekanis frekuensi rendah hingga temperatur mencapai $582.0^\circ\text{C}$ ($f_s = 0.42$).
2. **Karakterisasi Globular Butir**: Butir dendritik $\alpha\text{-Al}$ bertransformasi menjadi globul sferoidal dengan diameter rata-rata $d_p = 38\,\mu\text{m}$ dan faktor kebulatan $S_F = 0.86$.
3. **Injeksi Rongga Cetak Kecepatan Terkendali**: Kecepatan fasa pertama plunger diatur $v_{p1} = 0.25\text{ m/s}$ untuk menyingkirkan udara shot sleeve tanpa gelembung, kemudian kecepatan fasa pengisian gate diatur $v_{p2} = 1.15\text{ m/s}$ ($v_{\text{gate}} = 8.6\text{ m/s}$, $Re = 184 \ll 450$).
4. **Intensifikasi Tekanan Pemadatan (*Squeeze Pin Intensification*)**: Pada akhir pengisian, tekanan kompaksi hidrolik sebesar $120\text{ MPa}$ diterapkan selama $14\text{ detik}$ untuk mengkompensasi penyusutan pembekuan fasa eutektik cair yang tersisa.

Hasil implementasi menunjukkan eliminasi total cacat lepuh (*zero blistering*) pada siklus T6 ($535^\circ\text{C}$ selama 6 jam, *water quench* $60^\circ\text{C}$, *aging* $160^\circ\text{C}$ selama 8 jam), menghasilkan perpanjangan putus $11.4\%$ dan lolos sertifikasi uji kelelahan struktural otomotif.

---

## 7. Verifikasi Eksperimental, Analisis Metalurgi, & Referensi Terstandarisasi

Protokol validasi kualitas semi-solid metal processing mencakup:
- **Pengujian Tarik Statis (ASTM E8/E8M)**: Menggunakan spesimen uji silindris proporsional berdiameter $6.0\text{ mm}$ dengan laju regangan $\dot{\epsilon} = 1.0 \times 10^{-3}\text{ s}^{-1}$.
- **Karakterisasi Kuantitatif Struktur Mikro (ASTM E112 & ASTM E1382)**: Pengukuran ukuran butir dan morfometri sferisitas $\alpha\text{-Al}$ menggunakan mikroskop optik terkalibrasi dan perangkat lunak analisis citra digital SEM-EDS.
- **Deteksi Cacat Nondestruktif (ISO 10893-6/7 & ASTM E505)**: Radiografi sinar-X resolusi tinggi untuk memverifikasi ketiadaan cacat porositas gas, retak termal (*hot tearing*), dan inklusi oksida.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                           CHECKLIST AUDIT MUTU & PARAMETER PROSES SEMI-SOLID METAL (SSM)                              |
+-----------------------------------------------------------------------------------------------------------------------+
|  [✓] Verifikasi Komposisi Kimia Spektrometri Emisi Optik (OES) terhadap batas Si, Mg, Fe (ASTM B179).                |
|  [✓] Kontrol Akurasi Temperatur Termokopel Slurry Semi-Padat dalam toleransi ketat +/- 1.0 deg C.                    |
|  [✓] Pengecekan Derajat Sferisitas Globular Butir Padat S_F >= 0.75 via SEM Image Analysis (ASTM E1382).            |
|  [✓] Pemantauan Kecepatan Ingate Pintu Masuk v_gate <= 10.0 m/s untuk menjamin Aliran Laminar (Re < 400).           |
|  [✓] Validasi Tekanan Kompaksi Intensifikasi P_intensify >= 100 MPa untuk eliminasi micro-shrinkage.                  |
|  [✓] Uji NDT Radiografi Digital Tanpa Cacat Sesuai Acceptance Level 1 ISO 10893-7.                                   |
|  [✓] Pengujian Tarik Statis Spesimen T6 Memenuhi Target Yield Strength >= 240 MPa & Elongation >= 9.0% (ASTM E8M).   |
+-----------------------------------------------------------------------------------------------------------------------+
```

### Referensi Terverifikasi & Literatur Ilmiah Standar
1. Flemings, M. C. (1991). *Behavior of metal alloys in the semisolid state*. **Metallurgical Transactions A**, 22(5), 957-981. DOI: `10.1007/BF02661090`.
2. Atkinson, H. V. (2005). *Modelling the semisolid processing of metallic alloys*. **Progress in Materials Science**, 50(3), 341-412. DOI: `10.1016/j.pmatsci.2004.04.003`.
3. Fan, Z. (2002). *Semisolid metal processing*. **International Materials Reviews**, 47(2), 49-85. DOI: `10.1179/095066001225001076`.
4. Midson, S. P. (2008). *Semi-solid casting of aluminum alloys: An overview of industrial applications*. **Solid State Phenomena**, 141, 1-8. DOI: `10.4028/www.scientific.net/SSP.141-143.1`.
5. Kirkwood, D. H., Suéry, M., Kapranos, P., Atkinson, H. V., & Young, K. P. (2010). *Semi-solid Processing of Alloys*. **Springer Series in Materials Science**, Vol. 124, Springer-Verlag Berlin Heidelberg. ISBN: `978-3-642-00705-7`.
6. North American Die Casting Association (NADCA). (2021). *Design and Specification Standards for Semi-Solid and Squeeze Cast Parts*. Standards Publication #403, Wheeling, IL.
7. ASTM International. (2022). *ASTM E8/E8M-22: Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: `10.1520/E0008_E0008M-22`.
8. International Organization for Standardization. (2020). *ISO 10893-7: Non-destructive testing of steel and metallic materials — Digital radiographic testing of welds and cast structures*. ISO, Geneva, Switzerland.
