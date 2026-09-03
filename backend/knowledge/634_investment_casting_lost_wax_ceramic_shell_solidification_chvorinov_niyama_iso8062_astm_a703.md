# Modul 634: Investment Casting (Lost-Wax Precision Casting) & Ceramic Shell Mold Mechanics: Termofluidika Pengisian Logam Cair, Aturan Pembekuan Chvorinov Diperluas, Kriteria Porositas Niyama, dan Termomekanika Cetakan Keramik Zirkonia/Silika (ISO 8062, ASTM A703, ASME BPVC Sec IX & AFS)

## 1. Pengantar & Konteks Industri: Pengecoran Presisi Pola Lilin Hilang (*Lost-Wax Process*)

*Investment Casting* (juga dikenal sebagai pengecoran presisi *Lost-Wax Casting*) adalah proses pembentukan logam cair berpresisi tinggi yang memanfaatkan pola lilin (*wax pattern*) sekali pakai yang dilapisi bubur keramik refraktori bertingkat (*multi-layer refractory ceramic slurry*) untuk membentuk cangkang cetakan (*ceramic shell mold*). Setelah lilin dihilangkan melalui proses *autoclave de-waxing* dan cangkang dibakar pada temperatur tinggi ($900 - 1150\ ^\circ\text{C}$), logam cair dituangkan ke dalam rongga cangkang keramik yang panas untuk menghasilkan komponen dengan geometri rongga internal rumit (*complex internal cooling passages*), dinding sangat tipis ($t \approx 1.0 - 2.5\text{ mm}$), toleransi dimensi ketat (kelas ISO 8062-3 DCTG 4 - 6), dan kekasaran permukaan halus ($Ra \approx 1.6 - 3.2\ \mu\text{m}$) tanpa memerlukan pemesinan berat lanjutan (*near-net-shape manufacturing*).

Aplikasi industri vital *Investment Casting* meliputi:
1. **Dirgantara & Turbin Gas (*Aerospace & Gas Turbines*)**: Sudu turbin (*turbine blades & vanes*) berbahan superalloy berbasis nikel (Inconel 718, Mar-M247, CMSX-4) dengan struktur berbutir terarah (*Directionally Solidified / DS*) dan kristal tunggal (*Single Crystal / SC*).
2. **Implan Medis & Ortopedi (*Biomedical Implants*)**: Sambungan pinggul (*hip joints*), lutut (*knee prostheses*), dan instrumen bedah dari paduan Cobalt-Chromium-Molybdenum (CoCrMo ASTM F75) dan Titanium Ti-6Al-4V ELI (ASTM F136).
3. **Katup & Pompa Industri Minyak & Gas (*Pumps & Valves*)**: *Impeller* pompa sentrifugal dan badan katup bertekanan tinggi dari baja tahan karat dupleks (*Duplex Stainless Steel* ASTM A890/A995) dan paduan Monel.
4. **Otomotif Kinerja Tinggi & Senjata Api**: Rumah *turbocharger*, *rocker arms*, dan mekanisme pelatuk presisi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ALUR PROSES INVESTMENT CASTING (LOST-WAX PRECISION CASTING)                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    1. INJEKSI POLA LILIN       2. PERAKITAN POHON LILIN    3. PELAPISAN CANGKANG KERAMIK    4. DE-WAXING AUTOCLAVE    |
|       (Wax Injection)             (Tree Assembly)             (Ceramic Shell Dipping)          (Steam Autoclave)      |
|    ┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐           ┌────────────────────┐    |
|    │ Cetakan Logam      │      │ Lilin disusun ke   │      │ Dicelup ke bubur   │           │ Uap panas 10 bar   │    |
|    │ Lilin disuntikkan  ├─────►│ sprue/runner utama ├─────►│ zirkonia + taburan ├──────────►│ Lilin meleleh &   │    |
|    │ presisi tinggi     │      │ membentuk 'pohon'  │      │ pasir silika (5-7x)│           │ keluar rongga      │    |
|    └────────────────────┘      └────────────────────┘      └────────────────────┘           └─────────┬──────────┘    |
|                                                                                                       │               |
|                                                                                                       ▼               |
|    8. INSPEKSI NON-DESTRUKTIF  7. PEMOTONGAN & FINISHING   6. PEMBONGKARAN CANGKANG         5. PEMBAKARAN & TUANG     |
|       (NDT X-Ray / FPI)           (Cut-off & Blasting)        (Knock-out / Leaching)           (Firing & Pouring)     |
|    ┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐           ┌────────────────────┐    |
|    │ Uji Radiografi     │      │ Dipotong dari gate │      │ Cangkang dihancur- │           │ Cangkang dipanaskan│    |
|    │ ASTM E192 / FPI    │◄─────┤ Sandblasting &     │◄─────┤ kan secara getaran │◄──────────┤ 1000°C, logam cair │    |
|    │ ISO 3452-1         │      │ perlakuan panas    │      │ mekanik / kimiawi  │           │ dituangkan vakum   │    |
|    └────────────────────┘      └────────────────────┘      └────────────────────┘           └────────────────────┘    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar internasional, pedoman teknis pengecoran, dan metodologi pengujian yang mengatur proses ini meliputi:
- **ISO 8062-1 s/d 8062-4**: *Geometrical Product Specifications (GPS) — Dimensional and geometrical tolerances for moulded parts*.
- **ASTM A703 / A703M**: *Standard Specification for Steel Castings, General Requirements, for Pressure-Containing Parts*.
- **ASTM E192**: *Standard Reference Radiographs of Investment Steel Castings for Aerospace Applications*.
- **ASME BPVC Section IX & Section VIII**: *Rules for Construction of Pressure Vessels & Casting Qualifications*.
- **American Foundry Society (AFS) / Investment Casting Institute (ICI)**: *Ceramic Shell Mold Technical Handbook & Standard Practices*.

---

## 2. Termodinamika & Kinetika Pembekuan Logam Cair: Aturan Chvorinov Diperluas (*Extended Chvorinov's Rule*)

Kinetika perpindahan panas dan waktu pembekuan (*solidification time*, $t_s$) logam cair di dalam rongga cangkang keramik mengontrol evolusi struktur mikro (*microstructure*), ukuran butir dendritik (*Secondary Dendrite Arm Spacing / SDAS*), serta lokasi terbentuknya cacat porositas penyusutan (*shrinkage porosity*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PROFIL PERPINDAHAN PANAS TRANSIEN PADA CANGKANG KERAMIK                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|            LOGAM CAIR           BATAS ANTARMUKA LOGAM-CETAKAN              CANGKANG KERAMIK REFRAKTORI    LINGKUNGAN  |
|            (Molten Metal)       (Interfacial Resistance h_int)            (Zirconia / Alumina / Silica)   (Ambient)   |
|                                                                                                                       |
|             Temperatur                                                                                                |
|                T_p ──────┐ Logam Cair                                                                                 |
|                          │ (Superheat)                                                                                |
|                T_m ──────┴───────────┐ Front Pembekuan (T_sol / T_liq)                                                |
|                                      │                                                                                |
|                                      ▼   Penurunan Temperatur Antarmuka (Delta T = q / h_int)                        |
|                                      │                                                                                |
|                                      └───┐ T_mold_inner                                                               |
|                                          │                                                                            |
|                                          │   Gradien Termal Konduksi Melalui Dinding Cangkang Keramik                 |
|                                          │   k_mold * (dT / dx)                                                       |
|                                          │                                                                            |
|                                          └───────────────────────────────────────────────┐ T_mold_outer               |
|                                                                                          │   Radiasi & Konveksi       |
|                                                                                          └───► T_amb (25°C)           |
|                                                                                                                       |
|            │◄─────────────────────── Modulus Geometri M = V / A ────────────────────────►│                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Persamaan Aturan Chvorinov Standar & Analitis
Nicolas Chvorinov (1940) merumuskan bahwa waktu pembekuan total ($t_s$) suatu coran berbanding lurus dengan kuadrat dari modulus geometrisnya ($M = V / A$):

$$t_s = B \cdot \left( \frac{V}{A} \right)^n = B \cdot M^n$$

Di mana:
- $t_s$ = Waktu pembekuan total (*total solidification time*), $[\text{s}]$.
- $V$ = Volume coran atau riser, $[\text{m}^3]$ atau $[\text{cm}^3]$.
- $A$ = Luas permukaan perpindahan panas coran atau riser, $[\text{m}^2]$ atau $[\text{cm}^2]$.
- $M = V / A$ = Modulus geometris (*thermal modulus*), $[\text{m}]$ atau $[\text{cm}]$.
- $n$ = Eksponen geometri ($n = 2.0$ untuk cetakan pasir/keramik semi-tak hingga).
- $B$ = Konstanta cetakan (*mold constant*), $[\text{s/m}^2]$ atau $[\text{s/cm}^2]$.

Konstanta cetakan analitis $B$ diturunkan dari solusi analitis difusi termal transien satu dimensi (Hukum Fourier dan Entalpi Peleburan):

$$B = \frac{\pi}{4} \cdot \left( \frac{\rho_m \cdot L_f'}{T_m - T_0} \right)^2 \cdot \frac{1}{k_c \cdot \rho_c \cdot c_c}$$

Di mana panas laten efektif yang memperhitungkan *superheat* tuang ($T_{pour} - T_m$) dan panas jenis logam cair ($c_m$):

$$L_f' = L_f + c_m \cdot (T_{pour} - T_m)$$

Variabel sifat termofisika:
- $\rho_m$ = Massa jenis logam cor, $[\text{kg/m}^3]$.
- $L_f$ = Panas laten pembekuan (*latent heat of fusion*), $[\text{J/kg}]$.
- $T_m$ = Temperatur leleh / temperatur *liquidus* logam, $[\text{K}]$ atau $[^\circ\text{C}]$.
- $T_{pour}$ = Temperatur penuangan logam cair (*pouring temperature*), $[^\circ\text{C}]$.
- $T_0$ = Temperatur awal cetakan cangkang keramik sebelum penuangan (*shell preheat temperature*), $[^\circ\text{C}]$.
- $k_c$ = Konduktivitas termal cangkang keramik refraktori, $[\text{W/(m}\cdot\text{K)}]$.
- $\rho_c$ = Massa jenis cangkang keramik, $[\text{kg/m}^3]$.
- $c_c$ = Panas spesifik cangkang keramik, $[\text{J/(kg}\cdot\text{K)}]$.

### 2.2 Efek Koefisien Perpindahan Panas Antarmuka (*Interfacial Heat Transfer Coefficient / IHTC*)
Pada dinding tipis cangkang keramik *investment casting*, ketahanan termal kontak di batas antarmuka logam cair-cangkang ($h_{int}$) tidak dapat diabaikan. Waktu pembekuan terkoreksi diperluas dinyatakan sebagai:

$$t_s = \left[ \frac{\rho_m \cdot L_f'}{T_m - T_0} \right] \cdot \left( \frac{V}{A} \right) \cdot \left[ \frac{1}{h_{int}} + \frac{\sqrt{\pi \cdot t_s}}{2 \sqrt{k_c \rho_c c_c}} \right]$$

Koefisien perpindahan panas antarmuka $h_{int}$ bernilai tinggi pada awal penuangan ($h_{int} \approx 1500 - 3000\ \text{W/(m}^2\cdot\text{K)}$ saat kontak cair sempurna), lalu merosot tajam menjadi $h_{int} \approx 200 - 500\ \text{W/(m}^2\cdot\text{K)}$ saat celah udara isolatif (*air gap formation*) terbentuk akibat penyusutan termal pemadatan logam cor.

---

## 3. Prediksi Porositas Penyusutan: Kriteria Niyama (*Niyama Criterion*)

Dalam pembekuan paduan logam dengan rentang pembekuan lebar (*mushy zone solid-liquid mix* seperti baja karbon, superalloy Inconel, dan perunggu aluminium), cairan sisa terjebak di antara lengan-lengan dendrit yang tumbuh. Jika gradien termal lokal terlalu rendah atau laju pendinginan terlalu lambat, aliran logam cair kompensasi (*interdendritic feeding flow*) terhambat oleh hambatan gesek kapiler Darcy, memicu timbulnya cacat mikro-porositas penyusutan (*micro-shrinkage porosity*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                MEKANISME PEMBENTUKAN MUSH-ZONE & KRITERIA NIYAMA (Ny)                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             ZONA PADAT (SOLID)          ZONA BUBUR (MUSHY ZONE)                     ZONA CAIR (LIQUID POOL)           |
|            ┌──────────────────┐        ┌────────────────────────────────────┐      ┌────────────────────────┐         |
|            │ Kristal dendrit  │        │ Batang Dendrit Primer & Sekunder   │      │ Logam Cair Kompensator │         |
|            │ saling mengunci  │        │ Aliran Kapiler Interdendritik      │      │ Menyuplai Penyusutan   │         |
|            │ sempurna         │        │ Hambatan Aliran Permeabilitas K    │      │ Volume Padat           │         |
|            └─────────┬────────┘        └─────────────────┬──────────────────┘      └───────────┬────────────┘         |
|                      │                                   │                                     │                      |
|                      │         T_solidus                 │                T_liquidus           │                      |
|                      ▼             ▼                     ▼                     ▼               ▼                      |
|    ──────────────────┴─────────────╪─────────────────────┴─────────────────────╪───────────────┴─────────────────     |
|                      Gradien Termal G = |grad(T)|        Laju Pendinginan R = |dT/dt|                                 |
|                                                                                                                       |
|                                KRITERIA NIYAMA:   Ny = G / sqrt(R)  [ (°C·s)^0.5 / mm ]                               |
|                                                                                                                       |
|    • Jika Ny < Ny_kritis  ───► Terjadi Kavitasi Tekanan Hidrostatik (Delta P > P_atm) ──► MIKROPOROSITAS TERBENTUK   |
|    • Jika Ny >= Ny_kritis ───► Suplai Logam Cair Berhasil Menembus Mushy Zone       ──► CORAN PADAT BEBAS CACAT      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Perumusan Matematis Kriteria Niyama
Eisuke Niyama et al. (1982) menurunkan fungsi kriteria porositas penyusutan berbasis model aliran Darcy fluida interdendritik:

$$Ny = \frac{G}{\sqrt{R}} = \frac{G}{\sqrt{|\dot{T}|}} = \frac{|\nabla T|}{\sqrt{\left|\frac{\partial T}{\partial t}\right|}}$$

Di mana:
- $Ny$ = Kriteria Niyama (*Niyama Criterion value*), $[(^\circ\text{C}\cdot\text{s})^{1/2}/\text{mm}]$ atau $[(\text{K}\cdot\text{s})^{1/2}/\text{m}]$.
- $G = |\nabla T|$ = Gradien termal lokal pada isoterm akhir pembekuan ($T_{sol}$ atau batas padat $f_s = 0.9$), $[^\circ\text{C/mm}]$ atau $[\text{K/m}]$.
- $R = |\dot{T}| = |\partial T / \partial t|$ = Laju pendinginan lokal saat melintasi zona pembekuan (*cooling rate*), $[^\circ\text{C/s}]$ atau $[\text{K/s}]$.

### 3.2 Ambang Batas Kritis Kriteria Niyama ($Ny_{crit}$)
Jika nilai $Ny$ lokal di suatu penampang coran berada di bawah nilai ambang batas kritis ($Ny < Ny_{crit}$), maka daerah tersebut memiliki probabilitas sangat tinggi mengalami cacat mikroporositas yang melanggar standar radiografi ASTM E192.

| Paduan Logam Cor Industri | Spesifikasi Material | Ambang Batas $Ny_{crit}$ ($[^\circ\text{C}\cdot\text{s}]^{1/2}/\text{mm}$) | Standar Kualifikasi NDT |
| :--- | :--- | :---: | :--- |
| **Baja Karbon Rendah & Menengah** | ASTM A216 WCB / WCC | $1.0 - 1.2$ | ASTM E192 / E446 Level I-II |
| **Baja Tahan Karat Austenitik** | ASTM A351 CF8M / 316L | $1.2 - 1.5$ | ISO 4993 / ASTM E192 Level I |
| **Superalloy Berbasis Nikel** | Inconel 718 / IN-738LC | $1.5 - 2.2$ | AMS 2175 Class 1 / ASTM E192 |
| **Paduan Titanium** | Ti-6Al-4V ELI (ASTM F136) | $0.8 - 1.1$ | AMS 2634 / ISO 3452 |
| **Paduan Aluminium Cor** | A356-T6 / Al-7Si-0.3Mg | $0.3 - 0.5$ | ASTM E155 / AMS 2175 |
| **Perunggu Aluminium Dirgantara** | CuAl10Fe5Ni5 (AMS 4880) | $0.9 - 1.3$ | ASTM E272 Level I |

---

## 4. Termomekanika Cangkang Keramik: Lapisan Refraktori & Kestabilan Termal

Cangkang keramik *investment casting* terdiri dari sistem komposit multilapis (*multilayer refractory composite*) yang dibangun melalui siklus pencelupan suspensi koloid (*dipping*) dan penaburan agregat pasir refraktori (*stuccoing*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               STRUKTUR MULTILAPIS CANGKANG KERAMIK REFRAKTORI (CERAMIC SHELL)                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    RONGGA CETAKAN              LAPISAN MUKA PRIMER                   LAPISAN TRANSISI / CADANGAN       LAPISAN SEAL COAT  |
|    (Metal Cavity)              (Prime Coat / Face Coat)              (Backup / Backup Coats 4-6x)      (Final Dipping)    |
|                                                                                                                       |
|    Logam Cair 1550°C           • Bubur: Zirkonia (ZrO2) /            • Bubur: Alumino-Silikat          • Penutup pori     |
|         │                        Silika Koloid D-Grain                 (Mullite / Fused Silica)          permukaan luar   |
|         │                      • Pasir Stucco: Pasir Zirkon          • Pasir Stucco: Pasir Molochite   • Mencegah erosi   |
|         ▼                        Mesh 200 - 325 (Ultra-Halus)          Mesh 30 - 80 (Kasar)              dan partikel     |
|    ┌──────────────┐           ┌─────────────────────────────┐       ┌─────────────────────────────┐   ┌────────────────┐  |
|    │              │           │ Kontak langsung logam panas │       │ Memberikan kekuatan mekanik │   │ Cangkang kokoh │  |
|    │ Rongga Cetak │           │ Mencegah reaksi kimia       │       │ modulus patah (MOR) tinggi  │   │ MOR > 6.5 MPa  │  |
|    │ Coran Presisi│           │ Kekasaran Ra < 1.6 um       │       │ Permeabilitas gas optimum   │   │ Permeable      │  |
|    │              │           │ Tebal: 0.2 - 0.4 mm         │       │ Tebal total: 6.0 - 10.0 mm  │   │ Tebal: 0.5 mm  │  |
|    └──────────────┘           └─────────────────────────────┘       └─────────────────────────────┘   └────────────────┘  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Modulus Patah (*Modulus of Rupture / MOR*) Cangkang Keramik
Kekuatan lentur cangkang keramik diuji menggunakan pengujian lentur 3-titik (*3-point bend test*) menurut standar ICI/ASTM:

$$\sigma_{MOR} = \frac{3 \cdot F_{patah} \cdot L_s}{2 \cdot b \cdot t_{shell}^2}$$

Di mana:
- $\sigma_{MOR}$ = Modulus patah cangkang keramik (*Green MOR* atau *Fired MOR*), $[\text{MPa}]$.
- $F_{patah}$ = Beban puncak saat cangkang retak/patah, $[\text{N}]$.
- $L_s$ = Jarak bentang tumpuan uji (*support span length*), $[\text{mm}]$.
- $b$ = Lebar spesimen cangkang, $[\text{mm}]$.
- $t_{shell}$ = Ketebalan dinding cangkang keramik total, $[\text{mm}]$.

Standar industri menuntut:
- *Green MOR* (setelah pengeringan sebelum pembakaran): $\ge 2.5\text{ MPa}$ (mencegah keretakan akibat pemuaian termal lilin saat *autoclave de-waxing*).
- *Fired MOR* (setelah pembakaran $1000\ ^\circ\text{C}$): $\ge 6.0 - 9.0\text{ MPa}$ (mampu menahan tekanan hidrostatik logam cair $\rho_m g H$).
- *Hot MOR* (pada temperatur tuang $1000\ ^\circ\text{C}$): $\ge 4.5\text{ MPa}$.

### 4.2 Permeabilitas Gas Cangkang Keramik (*Gas Permeability*)
Untuk mencegah cacat jebakan udara (*gas entrapment/blowholes*), cangkang keramik harus memiliki permeabilitas Darcy yang cukup agar udara di dalam rongga dapat keluar saat logam cair masuk:

$$C_p = \frac{Q_g \cdot \mu_g \cdot t_{shell}}{A_{shell} \cdot \Delta P \cdot t_{waktu}}$$

Di mana $C_p$ adalah koefisien permeabilitas gas cangkang keramik ($C_p \ge 1.5 \times 10^{-14}\ \text{m}^2$).

---

## 5. Perhitungan Desain Riser (*Feeder Sizing*) & Efisiensi Modulus Caine

Agar riser dapat mengkompensasi penyusutan volumetrik logam ($\beta_v \approx 3.5 - 7.5\%$ untuk baja dan superalloy), riser harus memenuhi dua syarat fundamental:
1. **Syarat Termal (Aturan Modulus Chvorinov)**:
   
   $$M_{riser} \ge 1.20 \cdot M_{casting}$$

2. **Syarat Volumetrik (Persamaan Keseimbangan Volume Caine)**:
   
   $$V_{riser} \ge \frac{\beta_v}{1 - \beta_v - \eta_{riser}} \cdot V_{casting}$$
   
   Di mana $\eta_{riser}$ adalah efisiensi pemanfaatan logam cair dalam riser ($\eta_{riser} \approx 0.15 - 0.20$ untuk riser silinder terbuka konvensional, dan $\approx 0.40 - 0.50$ untuk riser dengan selimut eksotermik/isolatif).

---

## 6. Algoritma & Implementasi Python: Investment Casting Thermofluid & Solidification Solver

Berikut adalah modul Python mandiri (*executable*) yang mensimulasikan waktu pembekuan Chvorinov diperluas dengan resistansi IHTC, menghitung medan Kriteria Niyama ($Ny$) untuk mendeteksi porositas mikro, mengkalkulasi dimensi riser optimum, serta memverifikasi integritas tegangan cangkang keramik MOR.

```python
"""
Investment Casting Thermofluid & Solidification Engineering Simulator
Sesuai standar ISO 8062, ASTM A703, ASTM E192, AFS, dan Kriteria Niyama.
"""

from dataclasses import dataclass
import math
from typing import Dict, List, Tuple
import numpy as np


@dataclass(frozen=True)
class AlloyThermodynamics:
    name: str
    density_liquid_kg_m3: float       # Massa jenis cair rho_m (kg/m^3)
    density_solid_kg_m3: float        # Massa jenis padat (kg/m^3)
    latent_heat_j_kg: float           # Panas laten pembekuan L_f (J/kg)
    specific_heat_liquid_j_kgk: float # Panas jenis cair c_m (J/kg*K)
    liquidus_temp_c: float            # Temperatur Liquidus T_liq (°C)
    solidus_temp_c: float             # Temperatur Solidus T_sol (°C)
    volumetric_shrinkage_pct: float   # Penyusutan volume solidifikasi beta_v (%)
    niyama_critical_threshold: float  # Ambang batas Niyama kritis Ny_crit ((°C*s)^0.5 / mm)


@dataclass(frozen=True)
class CeramicShellProperties:
    name: str
    thermal_conductivity_w_mk: float  # Konduktivitas termal k_c (W/m*K)
    density_kg_m3: float              # Massa jenis cangkang rho_c (kg/m^3)
    specific_heat_j_kgk: float        # Panas jenis cangkang c_c (J/kg*K)
    shell_thickness_mm: float         # Ketebalan dinding cangkang t_shell (mm)
    fired_mor_strength_mpa: float     # Modulus of Rupture MOR (°C) (MPa)
    preheat_temperature_c: float      # Temperatur pemanasan awal cangkang T_0 (°C)


@dataclass
class CastingGeometry:
    casting_volume_cm3: float         # Volume coran V_c (cm^3)
    cooling_surface_area_cm2: float   # Luas permukaan perpindahan panas A_c (cm^2)
    characteristic_wall_thickness_mm: float # Tebal dinding kritis coran (mm)
    metal_head_height_mm: float       # Ketinggian sprue logam cair / head H (mm)


class InvestmentCastingSolver:
    def __init__(
        self,
        alloy: AlloyThermodynamics,
        shell: CeramicShellProperties,
        geometry: CastingGeometry,
        pouring_temp_c: float,
        ihtc_w_m2k: float = 1200.0,
    ):
        self.alloy = alloy
        self.shell = shell
        self.geom = geometry
        self.t_pour = pouring_temp_c
        self.ihtc = ihtc_w_m2k

    def calculate_effective_latent_heat(self) -> float:
        """Menghitung panas laten efektif termasuk superheat penuangan."""
        superheat = max(0.0, self.t_pour - self.alloy.liquidus_temp_c)
        return self.alloy.latent_heat_j_kg + (self.alloy.specific_heat_liquid_j_kgk * superheat)

    def calculate_chvorinov_solidification_time(self) -> Dict[str, float]:
        """
        Menghitung waktu pembekuan coran berdasarkan Hukum Chvorinov Diperluas
        dengan integrasi IHTC dan sifat termofisika cangkang keramik.
        """
        # Modulus geometri coran (m)
        v_m3 = self.geom.casting_volume_cm3 * 1e-6
        a_m2 = self.geom.cooling_surface_area_cm2 * 1e-4
        modulus_m = v_m3 / a_m2
        modulus_cm = modulus_m * 100.0

        # Termal properti cangkang keramik
        k_c = self.shell.thermal_conductivity_w_mk
        rho_c = self.shell.density_kg_m3
        c_c = self.shell.specific_heat_j_kgk
        b_mold_diffusivity = math.sqrt(k_c * rho_c * c_c)

        # Delta T pembekuan
        t_m = 0.5 * (self.alloy.liquidus_temp_c + self.alloy.solidus_temp_c)
        t_0 = self.shell.preheat_temperature_c
        delta_t = t_m - t_0
        if delta_t <= 0:
            raise ValueError("Temperatur tuang/leleh harus lebih tinggi dari pemanasan cetakan.")

        l_eff = self.calculate_effective_latent_heat()
        rho_m = self.alloy.density_liquid_kg_m3

        # Konstanta Chvorinov ideal (s/m^2)
        const_b_ideal = (math.pi / 4.0) * ((rho_m * l_eff / delta_t) ** 2) / (b_mold_diffusivity ** 2)
        t_solid_ideal_sec = const_b_ideal * (modulus_m ** 2)

        # Koreksi resistansi antarmuka IHTC (s)
        t_solid_ihtc_sec = (rho_m * l_eff / delta_t) * modulus_m * (
            (1.0 / self.ihtc) + (math.sqrt(math.pi * t_solid_ideal_sec) / (2.0 * b_mold_diffusivity))
        )

        return {
            "casting_modulus_cm": modulus_cm,
            "superheat_c": self.t_pour - self.alloy.liquidus_temp_c,
            "chvorinov_ideal_time_sec": t_solid_ideal_sec,
            "corrected_solidification_time_sec": t_solid_ihtc_sec,
        }

    def evaluate_niyama_porosity(self, thermal_gradient_c_mm: float) -> Dict[str, any]:
        """
        Mengevaluasi Kriteria Niyama (Ny = G / sqrt(R)) pada titik kritis coran.
        """
        sol_data = self.calculate_chvorinov_solidification_time()
        t_sol_sec = sol_data["corrected_solidification_time_sec"]

        # Laju pendinginan rata-rata melintasi rentang solidifikasi mushy zone (°C/s)
        freezing_range = self.alloy.liquidus_temp_c - self.alloy.solidus_temp_c
        freezing_range = max(1.0, freezing_range)
        cooling_rate_c_s = freezing_range / (0.45 * t_sol_sec)  # Pembekuan aktif di mushy zone

        # Kriteria Niyama ((°C*s)^0.5 / mm)
        ny_value = thermal_gradient_c_mm / math.sqrt(cooling_rate_c_s)
        is_sound = ny_value >= self.alloy.niyama_critical_threshold

        return {
            "thermal_gradient_G_c_per_mm": thermal_gradient_c_mm,
            "cooling_rate_R_c_per_s": cooling_rate_c_s,
            "niyama_calculated": ny_value,
            "niyama_critical_threshold": self.alloy.niyama_critical_threshold,
            "shrinkage_porosity_predicted": not is_sound,
            "astm_e192_xray_grade": "LEVEL_1_SOUND (Clean/Dense)" if is_sound else "LEVEL_4_DEFECTIVE (Porosity)",
        }

    def design_optimal_riser(self, safety_modulus_factor: float = 1.25) -> Dict[str, float]:
        """
        Menghitung dimensi riser silindris optimum (Tinggi H_r = 1.5 * Diameter D_r)
        berdasarkan prinsip Modulus Chvorinov dan Kompensasi Penyusutan Volumetrik Caine.
        """
        v_c = self.geom.casting_volume_cm3
        a_c = self.geom.cooling_surface_area_cm2
        m_c = v_c / a_c  # cm

        # Modulus riser yang disyaratkan
        m_r_req = safety_modulus_factor * m_c  # cm

        # Untuk silinder dengan H = 1.5 D:
        # V = pi/4 * D^2 * (1.5 D) = 0.375 * pi * D^3
        # A_top_and_side = pi*D*(1.5 D) + pi/4 * D^2 = 1.75 * pi * D^2
        # M_r = V / A = (0.375 / 1.75) * D = 0.21428 * D => D = M_r / 0.21428
        d_riser_cm = m_r_req / 0.21428
        h_riser_cm = 1.5 * d_riser_cm
        v_riser_cm3 = 0.375 * math.pi * (d_riser_cm ** 3)

        # Verifikasi volumetrik penyusutan
        shrinkage_vol_needed_cm3 = (self.alloy.volumetric_shrinkage_pct / 100.0) * v_c
        riser_efficiency = 0.20  # Efisiensi pakan 20%
        v_riser_volumetric_min = shrinkage_vol_needed_cm3 / riser_efficiency

        final_v_riser = max(v_riser_cm3, v_riser_volumetric_min)
        if final_v_riser > v_riser_cm3:
            # Sesuaikan diameter jika volume penyusutan mendominasi
            d_riser_cm = ((final_v_riser / (0.375 * math.pi)) ** (1.0 / 3.0))
            h_riser_cm = 1.5 * d_riser_cm

        return {
            "required_riser_modulus_cm": m_r_req,
            "optimal_riser_diameter_cm": d_riser_cm,
            "optimal_riser_height_cm": h_riser_cm,
            "riser_volume_cm3": final_v_riser,
            "feed_metal_yield_pct": (v_c / (v_c + final_v_riser)) * 100.0,
        }

    def verify_ceramic_shell_structural_safety(self) -> Dict[str, any]:
        """
        Memverifikasi tegangan tarik akibat tekanan hidrostatik logam cair terhadap kekuatan MOR cangkang.
        sigma_hoop = (P_hydro * D_inner) / (2 * t_shell)
        """
        # Tekanan hidrostatik logam cair P = rho * g * H
        g = 9.81  # m/s^2
        h_m = self.geom.metal_head_height_mm / 1000.0
        p_hydro_pa = self.alloy.density_liquid_kg_m3 * g * h_m
        p_hydro_mpa = p_hydro_pa / 1e6

        # Estimasi diameter ekuivalen coran kritis
        d_inner_mm = 2.0 * math.sqrt(self.geom.casting_volume_cm3 / (math.pi * 10.0)) * 10.0
        t_shell_mm = self.shell.shell_thickness_mm

        # Hoop stress pada cangkang silinder
        sigma_hoop_mpa = (p_hydro_mpa * d_inner_mm) / (2.0 * t_shell_mm)
        safety_factor = self.shell.fired_mor_strength_mpa / sigma_hoop_mpa

        return {
            "hydrostatic_pressure_mpa": p_hydro_mpa,
            "hoop_tensile_stress_mpa": sigma_hoop_mpa,
            "fired_mor_strength_mpa": self.shell.fired_mor_strength_mpa,
            "structural_safety_factor": safety_factor,
            "is_shell_rupture_safe": safety_factor >= 3.0,
        }


def run_unit_tests_and_demonstration():
    print("=" * 80)
    print("RUANGTI - INVESTMENT CASTING THERMOFLUID & SOLIDIFICATION SOLVER")
    print("Standar: ISO 8062, ASTM A703, ASTM E192, AFS, Niyama Model")
    print("=" * 80)

    # 1. Superalloy Berbasis Nikel Inconel 718 untuk Sudu Turbin Gas Dirgantara
    inconel_718 = AlloyThermodynamics(
        name="Superalloy Inconel 718 (AMS 5383 / ASTM A703)",
        density_liquid_kg_m3=7720.0,
        density_solid_kg_m3=8190.0,
        latent_heat_j_kg=220000.0,
        specific_heat_liquid_j_kgk=610.0,
        liquidus_temp_c=1336.0,
        solidus_temp_c=1260.0,
        volumetric_shrinkage_pct=5.5,
        niyama_critical_threshold=1.80,  # [ (°C*s)^0.5 / mm ]
    )

    # 2. Cangkang Keramik Zirkonia Multilapis (Zirconia Primary + Fused Silica Backup)
    zirconia_shell = CeramicShellProperties(
        name="High-Integrity Multilayer Zirconia/Silica Shell",
        thermal_conductivity_w_mk=1.45,
        density_kg_m3=2350.0,
        specific_heat_j_kgk=1050.0,
        shell_thickness_mm=8.5,
        fired_mor_strength_mpa=8.2,
        preheat_temperature_c=1050.0,
    )

    # 3. Geometri Sudu Turbin / Komponen Berdinding Tipis
    blade_geom = CastingGeometry(
        casting_volume_cm3=185.0,
        cooling_surface_area_cm2=240.0,
        characteristic_wall_thickness_mm=3.2,
        metal_head_height_mm=280.0,
    )

    pouring_temp = 1480.0  # Superheat ~ 144 °C
    solver = InvestmentCastingSolver(
        alloy=inconel_718,
        shell=zirconia_shell,
        geometry=blade_geom,
        pouring_temp_c=pouring_temp,
        ihtc_w_m2k=1400.0,
    )

    sol_time = solver.calculate_chvorinov_solidification_time()
    riser_res = solver.design_optimal_riser(safety_modulus_factor=1.25)
    shell_res = solver.verify_ceramic_shell_structural_safety()

    # Evaluasi Niyama pada gradien termal terkontrol G = 3.8 °C/mm
    niyama_res = solver.evaluate_niyama_porosity(thermal_gradient_c_mm=3.8)

    print(f"\n[1] Material Coran: {inconel_718.name}")
    print(f"    • Modulus Termal Coran (M)    : {sol_time['casting_modulus_cm']:.3f} cm")
    print(f"    • Superheat Penuangan         : {sol_time['superheat_c']:.1f} °C")
    print(f"    • Waktu Pembekuan Terkoreksi  : {sol_time['corrected_solidification_time_sec']:.2f} detik")

    print(f"\n[2] Analisis Kriteria Porositas Niyama (ASTM E192 X-Ray Integrity):")
    print(f"    • Gradien Termal Lokal (G)    : {niyama_res['thermal_gradient_G_c_per_mm']:.2f} °C/mm")
    print(f"    • Laju Pendinginan Lokal (R)  : {niyama_res['cooling_rate_R_c_per_s']:.2f} °C/s")
    print(f"    • Nilai Niyama Terhitung (Ny) : {niyama_res['niyama_calculated']:.3f} (°C*s)^0.5/mm")
    print(f"    • Nilai Niyama Kritis (Ny_cr) : {niyama_res['niyama_critical_threshold']:.2f} (°C*s)^0.5/mm")
    print(f"    • Prediksi Porositas Mikro    : {niyama_res['shrinkage_porosity_predicted']}")
    print(f"    • Kualitas Radiografi X-Ray   : {niyama_res['astm_e192_xray_grade']}")

    print(f"\n[3] Optimasi Dimensi Riser Silindris:")
    print(f"    • Diameter Riser Optimum (D_r): {riser_res['optimal_riser_diameter_cm']:.2f} cm")
    print(f"    • Tinggi Riser Optimum (H_r)  : {riser_res['optimal_riser_height_cm']:.2f} cm")
    print(f"    • Volume Riser (V_r)          : {riser_res['riser_volume_cm3']:.1f} cm^3")
    print(f"    • Efisiensi Hasil Cor (Yield) : {riser_res['feed_metal_yield_pct']:.1f} %")

    print(f"\n[4] Termomekanika Keamanan Cangkang Keramik (MOR Strength):")
    print(f"    • Tekanan Hidrostatik Tuang   : {shell_res['hydrostatic_pressure_mpa']:.4f} MPa")
    print(f"    • Tegangan Tarik Hoop Cangkang: {shell_res['hoop_tensile_stress_mpa']:.3f} MPa")
    print(f"    • Kekuatan Cangkang Fired MOR : {shell_res['fired_mor_strength_mpa']:.1f} MPa")
    print(f"    • Safety Factor Cangkang      : {shell_res['structural_safety_factor']:.2f}x")
    print(f"    • Integritas Aman dari Jebol  : {shell_res['is_shell_rupture_safe']}")

    # Unit Tests / Assertions
    assert sol_time["corrected_solidification_time_sec"] > 0.0
    assert not niyama_res["shrinkage_porosity_predicted"], "Coran harus bebas porositas pada gradien ini"
    assert shell_res["is_shell_rupture_safe"] is True, "Cangkang harus aman dari risiko jebol logam cair"
    print("\n>>> SELURUH UNIT TEST & ASSERTION VALIDASI INVESTMENT CASTING BERHASIL (100% PASS) <<<")


if __name__ == "__main__":
    run_unit_tests_and_demonstration()
```

---

## 7. Studi Kasus Industri: Manufaktur Sudu Turbin Superalloy Inconel 718 untuk Pembangkit Daya & Propulsi

### 7.1 Latar Belakang & Spesifikasi Komponen
Sebuah industri pengecoran presisi dirgantara memproduksi sudu turbin gas tingkat pertama (*1st Stage Gas Turbine Vane*) berbahan superalloy Inconel 718 (AMS 5383).

Spesifikasi ketat menurut **ASTM A703 / AMS 2175 Class 1**:
- Integritas Radiografi X-Ray menurut **ASTM E192**: Tingkat 1 (*Grade 1 Soundness*, nihil cacat porositas mikro $> 0.1\text{ mm}$).
- Pengujian Penetrasi Cairan Fluoresen (*Fluorescent Penetrant Inspection / FPI*) menurut **ISO 3452-1**: Bebas retak permukaan dan *shrinkage pinholes*.
- Ketebalan Dinding Tepi Belakang (*Trailing Edge Thickness*): $1.20 \pm 0.08\text{ mm}$ (Kelas Toleransi ISO 8062 DCTG 4).
- *Creep Rupture Life* pada $650\ ^\circ\text{C}$ & $690\text{ MPa}$: $\ge 100\text{ jam}$.

### 7.2 Masalah Awal (Kondisi Eksisting)
Pada konfigurasi awal:
1. Pemanasan cetakan cangkang hanya $T_0 = 850\ ^\circ\text{C}$ dengan temperatur tuang $1410\ ^\circ\text{C}$.
2. Gradien termal pada sambungan *airfoil-root platform* sangat rendah ($G = 1.4\ ^\circ\text{C/mm}$), menghasilkan nilai Niyama $Ny = 1.15 < 1.80\ (Ny_{crit})$.
3. Terjadi cacat mikroporositas terpusat di inti leher sudu (*blade shank core*), menyebabkan kegagalan uji radiografi ASTM E192 Level 3-4 dan penolakan produk (*scrap rate*) mencapai $31.4\%$.
4. Ketebalan cangkang keramik yang tipis ($5.0\text{ mm}$) mengalami retak rambut (*shell micro-fissures*) akibat pemuaian uap saat de-waxing, memicu cacat sirip logam (*finning defects*).

### 7.3 Langkah Optimasi & Rekayasa Proses
1. **Peningkatan Temperatur Pemanasan Cangkang**: Pemanasan awal cangkang dinaikkan dari $850\ ^\circ\text{C}$ menjadi $1050\ ^\circ\text{C}$ di dalam tungku vakum resistansi untuk mengurangi laju pendinginan awal dan mempertahankan fluiditas logam cair.
2. **Penerapan Selimut Isolasi Termal Gradual (*Thermal Chilling & Wrap Insulation*)**: Memasang selimut wol keramik alumina di bagian atas sudu dan memasang blok pendingin tembaga (*copper chills*) di pangkal akar sudu (*blade root*). Langkah ini meningkatkan gradien termal terarah menjadi $G = 3.85\ ^\circ\text{C/mm}$, menaikkan nilai Niyama menjadi $Ny = 2.12 > 1.80$ (zona aman bebas porositas).
3. **Penyempurnaan Struktur Cangkang Keramik**: Menambah 2 lapisan *backup dipping* menggunakan pasir zirkon/mullite dengan penambahan pengikat polimer tahan uap, meningkatkan tebal dinding cangkang menjadi $8.5\text{ mm}$ dan kekuatan *fired MOR* menjadi $8.2\text{ MPa}$ (*safety factor* tegangan hoop $> 25\times$).
4. **Optimasi Riser Berbasis Keseimbangan Caine**: Riser silinder eksotermik berdiameter $D_r = 5.2\text{ cm}$ dan tinggi $H_r = 7.8\text{ cm}$ diterapkan di atas leher platform untuk memastikan suplai logam cair kontinu hingga akhir pembekuan.

### 7.4 Hasil Sebelum vs. Sesudah Optimasi

| Parameter Kinerja & Kualitas | Kondisi Awal (Eksisting) | Setelah Optimasi Pengecoran Presisi | Target Standar AMS 2175 / ASTM | Status Kepatuhan |
| :--- | :---: | :---: | :---: | :---: |
| **Temperatur Cangkang ($T_0$)** | $850\ ^\circ\text{C}$ | **$1050\ ^\circ\text{C}$** | $1000 - 1100\ ^\circ\text{C}$ | **Optimal** |
| **Gradien Termal ($G$)** | $1.40\ ^\circ\text{C/mm}$ | **$3.85\ ^\circ\text{C/mm}$** | $> 3.0\ ^\circ\text{C/mm}$ | **Optimal** |
| **Nilai Kriteria Niyama ($Ny$)** | $1.15$ | **$2.12\ (Ny > Ny_{crit})$** | $\ge 1.80$ | **Bebas Porositas** |
| **Kualitas Radiografi X-Ray** | ASTM E192 Level 3-4 (Gagal) | **ASTM E192 Level 1 (Sound)** | Level 1 Dirgantara | **Sangat Sesuai** |
| **Inspeksi Retak Permukaan (FPI)** | $18.5\%$ Part Ada Pinholes | **$0\%$ Cacat Indikasi Linear** | Nihil Indikasi | **Sangat Sesuai** |
| **Kekuatan MOR Cangkang Keramik** | $4.2\text{ MPa}$ | **$8.2\text{ MPa}$** | $\ge 6.5\text{ MPa}$ | **Sangat Sesuai** |
| **Kerapatan Densitas Komponen** | $8.08\text{ g/cm}^3\ (98.6\%)$ | **$8.19\text{ g/cm}^3\ (99.98\%)$** | $\ge 99.8\%$ | **Padat Sempurna** |
| **Tingkat Scrap Coran (*Scrap Rate*)** | $31.4\%$ | **$2.2\%$** | $\le 4.0\%$ | **Efisiensi Tinggi** |

---

## 8. Standar Rujukan, Pedoman Profesi & Referensi Terverifikasi

1. **ISO 8062-3:2007**: *Geometrical Product Specifications (GPS) — Dimensional and geometrical tolerances for moulded parts — Part 3: General dimensional and geometrical tolerances and machining allowances for castings*.
2. **ASTM A703 / A703M-20**: *Standard Specification for Steel Castings, General Requirements, for Pressure-Containing Parts*. ASTM International, West Conshohocken, PA.
3. **ASTM E192-20**: *Standard Reference Radiographs of Investment Steel Castings for Aerospace Applications*. ASTM International.
4. **Niyama, E., Uchida, T., Morikawa, M., & Saito, S. (1982)**. *A method of shrinkage prediction and its application to steel casting practice*. **Cast Metals Research Journal / AFS International Cast Metals Journal**, 7(3), 52–63.
5. **Behera, M. P., Pattnaik, S., & Sutar, A. K. (2019)**. *Thermo-mechanical analysis of investment casting ceramic shell: A case study*. **Measurement**, 145, 126–134. DOI: [10.1016/j.measurement.2019.07.033](https://doi.org/10.1016/j.measurement.2019.07.033).
6. **Jones, S., Jolly, M., & Lewis, R. (2002)**. *Development of techniques for predicting ceramic shell properties for investment casting*. **British Ceramic Transactions**, 101(6), 250–257. DOI: [10.1179/096797802225003316](https://doi.org/10.1179/096797802225003316).
7. **Tamta, G. B., & Karunakar, D. B. (2018)**. *Enhancing mechanical properties and permeability of ceramic shell in investment casting process*. **Materials and Manufacturing Processes**, 33(16), 1845–1852. DOI: [10.1080/10426914.2018.1532088](https://doi.org/10.1080/10426914.2018.1532088).
8. **Mills, K. C. (2023)**. *Investment Materials and Ceramic Shell Manufacture*. Dalam **Investment Casting Handbook**, CRC Press / Taylor & Francis. DOI: [10.1201/9781003419228-4](https://doi.org/10.1201/9781003419228-4).
9. **Groover, M. P. (2020)**. *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems (7th Edition)*. John Wiley & Sons, Inc.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
