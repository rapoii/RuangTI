# Modul 605: Rotary Swaging & Radial Forging Mechanics: Kinematika Pembentukan Inkremental (*Incremental Forming Kinematics*), Dinamika Frekuensi Stroke Tinggi, Distribusi Regangan Radial-Aksial, dan Presisi Geometris Dinding Tipis (*Near-Net-Shape Hollow Forming*) (DIN 8583 & ASTM E9)

## 1. Pengantar & Konteks Industri Rotary Swaging dan Radial Forging

Dalam rekayasa manufaktur komponen struktural otomotif, kedirgantaraan, energi, dan senjata presisi (*precision armament*), tuntutan reduksi bobot (*lightweighting*) dan efisiensi material (*buy-to-fly ratio* mendekati 1.0) mendorong transisi dari proses permesinan subtraktif konvensional menuju proses pembentukan dingin/panas inkremental berpresisi tinggi (*high-precision incremental cold/hot forming*). **Rotary Swaging** (penempaan putar inkremental) dan **Radial Forging** (penempaan radial multi-cetakan) adalah proses pembentukan logam inkremental tanpa geram (*chipless forming*) di mana benda kerja silinder pejal (*solid bar*) atau tabung berongga (*hollow tube*) mengalami reduksi diameter cross-section dan pembentukan profil internal/eksternal secara progresif melalui pukulan osilasi radial berfrekuensi tinggi ($1000 - 10.000\text{ pukulan/menit}$ atau $\text{strokes per minute} / \text{spm}$) dari 2, 3, 4, atau 6 segmen cetakan (*forming dies*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                              ARSITEKTUR KINEMATIKA KEPALA ROTARY SWAGING (ROTARY SWAGING HEAD)                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                     Cincin Luar Berisi Roller Silindris (Outer Roller Cage)                          |
|                                              ┌───────────────────────────────┐                                        |
|                                         ┌────┘   (O)   (O)   (O)   (O)       └────┐                                   |
|                                      ┌──┘   (O)                         (O)       └──┐                                |
|                                      │  (O)         Baji Penekan           (O)       │                                |
|                                      │              (Base Wedges)                    │                                |
|                                      │  (O)             ▲▲▲▲               (O)       │                                |
|                                      │               ┌────────┐                      │                                |
|                                      │  (O)          │ Cetakan│            (O)       │                                |
|                                      │               │  Atas  │                      │                                |
|              Benda Kerja Tabung/As   │  (O) ◄─────── ├────────┤ ───────►   (O)       │  Osilasi Radial Cetakan        |
|              Masuk Sumbu Aksial (z)  │      Cetakan  │ Benda  │ Cetakan              │  Frekuensi Tinggi (10-150 Hz)  |
|                 ───────►             │  (O)   Kiri   │ Kerja  │  Kanan     (O)       │  Stroke Radial (0.2 - 2.0 mm)  |
|                                      │               ├────────┤                      │                                |
|                                      │  (O)          │ Cetakan│            (O)       │                                |
|                                      │               │ Bawah  │                      │                                |
|                                      │  (O)          └────────┘            (O)       │                                |
|                                      │                  ▼▼▼▼                         │                                |
|                                      └──┐   (O)                         (O)       ┌──┘                                |
|                                         └────┐   (O)   (O)   (O)   (O)       ┌────┘                                   |
|                                              └───────────────────────────────┘                                        |
|                                                  Rotor Berputar (Spindle Rotation)                                    |
|                                                                                                                       |
|    Mekanisme Kerja: Baji cetakan melintasi roller keliling -> Mendorong cetakan ke arah radial dalam (stroke tempa)   |
|    Gaya sentrifugal + pegas pengembali -> Membuka cetakan di antara roller -> Benda kerja diumpankan secara aksial    |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Klasifikasi Proses: Infeed Swaging, Recess Swaging, dan Radial Forging
Berdasarkan kinematika pergerakan relatif pahat dan benda kerja, proses penempaan inkremental radial dibagi menjadi:
1. **Infeed Swaging (Through-Feed)**: Benda kerja didorong secara aksial secara kontinu melalui zona reduksi cetakan berprofil tirus (*reduction cone*). Digunakan untuk mereduksi diameter batang kawat, pipa injeksi common rail diesel, poros kemudi (*steering shafts*), dan tabung peredam kejut (*shock absorber tubes*).
2. **Recess Swaging (Plunge / Drop-In Swaging)**: Segmen cetakan membuka secara radial melalui mekanisme baji hidrolik (*wedge-actuated stroke opening*), memungkinkan benda kerja dimasukkan ke posisi tertentu sebelum cetakan menutup dan melakukan pembentukan lokal pada bagian tengah poros (contoh: pembuatan leher poros transmisi atau *drive shafts hollow* bertingkat).
3. **Internal Profile Swaging with Mandrel**: Tabung berongga ditempa di atas mandrel berprofil presisi tinggi (dilengkapi ulir internal, spline, atau alur spiral laras senapan/*rifling*), menyalin profil mandrel ke dinding bagian dalam pipa dengan toleransi sub-mikron (IT6-IT7).
4. **Heavy Radial Forging (GFM Machines)**: Mesin penempaan radial berkapasitas tinggi dengan 4 palu penempa hidrolik/mekanis independen berdaya pukul ribuan kilonewton untuk ingot berdiameter besar ($>100 - 1000\text{ mm}$) pada temperatur tempa panas ($800^\circ\text{C} - 1200^\circ\text{C}$) dalam pembuatan poros rotor generator turbin dan laras meriam artileri.

Standar internasional dan regulasi industri terkait pengujian dan spesifikasi material swaging:
- **DIN 8583-2**: *Manufacturing processes forming under compressive conditions — Part 2: Free forming (Swaging and Radial Forging)*.
- **ASTM E9**: *Standard Test Methods of Compression Testing of Metallic Materials at Room Temperature*.
- **ISO 6892-1**: *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **SAE J403 / SAE J404**: *Chemical Compositions of SAE Carbon and Alloy Steels*.
- **VDI 3177**: *Rotary Swaging — Process Principles, Machine Types, and Tool Design*.

---

## 2. Kinematika Pembentukan Inkremental & Laju Regangan Lokal

### 2.1 Analisis Kinematika Pahat dan Pukulan (*Die Stroke Kinematics*)
Kepala swaging (*swaging head*) terdiri dari sebuah spindel (*inner rotor*) yang berputar pada kecepatan sudut $\omega_r = \frac{2 \pi n_r}{60}\text{ rad/s}$ di dalam sebuah sangkar bantalan rol (*outer roller cage*) yang diam atau berputar berlawanan arah pada kecepatan sudut $\omega_c = \frac{2 \pi n_c}{60}\text{ rad/s}$. Rol silindris berjumlah $Z_r$ tersusun secara konsentris pada perimeter luar.

Frekuensi pukulan cetakan (*die stroke frequency*, $f_{\text{stroke}}$ dalam $\text{Hz}$):

$$f_{\text{stroke}} = \frac{Z_r}{60} \cdot |n_r - n_c|$$

Waktu kontak deformasi per pukulan tunggal ($\Delta t_{\text{contact}}$) hanya berlangsung selama sebagian kecil periode siklus:

$$\Delta t_{\text{contact}} = \frac{\theta_{\text{contact}}}{\omega_{\text{rel}}} = \frac{\theta_{\text{contact}}}{2 \pi |n_r - n_c| / 60}$$

di mana $\theta_{\text{contact}}$ adalah sudut busur kontak busur baji cetakan terhadap silinder rol (biasanya $5^\circ - 15^\circ$).

Perpindahan radial cetakan sebagai fungsi waktu $s_r(t)$ selama fase kontak aproksimat harmonik:

$$s_r(t) = \frac{h_{\text{stroke}}}{2} \cdot \left[ 1 - \cos\left( \frac{\pi t}{\Delta t_{\text{contact}}} \right) \right] \quad \text{untuk } 0 \le t \le \Delta t_{\text{contact}}$$

Kecepatan radial cetakan ($v_r(t)$) dan percepatan radial ($a_r(t)$):

$$v_r(t) = \frac{\mathrm{d}s_r}{\mathrm{d}t} = \frac{\pi h_{\text{stroke}}}{2 \Delta t_{\text{contact}}} \cdot \sin\left( \frac{\pi t}{\Delta t_{\text{contact}}} \right)$$

$$a_r(t) = \frac{\mathrm{d}^2 s_r}{\mathrm{d}t^2} = \frac{\pi^2 h_{\text{stroke}}}{2 (\Delta t_{\text{contact}})^2} \cdot \cos\left( \frac{\pi t}{\Delta t_{\text{contact}}} \right)$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  GEOMETRI ZONA PEMBENTUKAN CETAKAN ROTARY SWAGING                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         ◄────────────────────── L_total ──────────────────────►                                                       |
|         ┌─────────────────────────────────────────────────────┐                                                       |
|         │                  BADAN CETAKAN (DIE BODY)           │                                                       |
|         │                                                     │                                                       |
|         │  ◄── L_entry ──► ◄──── L_cone ────► ◄── L_calib ──► │                                                       |
|         └──┐             ┌───────────────────┐               ┌┘                                                       |
|            │             │\  Sudut Konus α   │               │                                                        |
|            │  Zona Masuk │ \  (Entry Cone)   │ Zona Kalibrasi│                                                        |
|   D_0      │  (Lead-in)  │  \                │  (Sizing Land)│ D_1                                                    |
|  ══════════╪═════════════╪═══\═══════════════╪═══════════════╪════════════ Sumbu Aksial Benda Kerja (z)               |
|            │             │    \              │               │                                                        |
|            │             │     \             │               │                                                        |
|         ┌──┘             └───────────────────┘               └┐                                                       |
|         │                                                     │                                                       |
|         │                                                     │                                                       |
|         └─────────────────────────────────────────────────────┘                                                       |
|            ◄── Umpan Aksial v_ax ──►                                                                                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Panjang Kontak dan Kemajuan Aksial per Pukulan (*Feed per Stroke*)
Ketika benda kerja diumpankan dengan kecepatan aksial translasi $v_{\text{feed}}$ ($\text{mm/s}$), kemajuan aksial per stroke tunggal ($s_{\text{ax}}$) didefinisikan sebagai:

$$s_{\text{ax}} = \frac{v_{\text{feed}}}{f_{\text{stroke}}} = \frac{v_{\text{feed}} \cdot 60}{Z_r \cdot |n_r - n_c|}$$

Faktor tumpang tindih deformasi inkremental (*incremental overlap factor*, $\eta_{\text{overlap}}$):

$$\eta_{\text{overlap}} = 1 - \frac{s_{\text{ax}}}{L_{\text{calib}}}$$

di mana $L_{\text{calib}}$ adalah panjang zona kalibrasi (*sizing land*). Untuk mencapai kualitas kebulatan (*roundness*) dan integritas permukaan kelas kedirgantaraan, disyaratkan $\eta_{\text{overlap}} \ge 0.70 - 0.90$, yang menjamin setiap elemen volume material mengalami setidaknya 4 hingga 10 siklus penempaan sebelum keluar dari cetakan.

---

## 3. Mekanika Deformasi Plastis & Pemodelan Tegangan-Regangan

### 3.1 Hubungan Regangan Logaritmik Penempaan Pejal dan Tabung
Untuk benda kerja silinder pejal dengan diameter awal $D_0$ yang direduksi menjadi diameter akhir $D_1$:

$$\varphi_r = \ln\left( \frac{D_1}{D_0} \right) < 0 \quad \text{(Regangan Radial Tekan)}$$

$$\varphi_t = \ln\left( \frac{D_1}{D_0} \right) = \varphi_r \quad \text{(Regangan Tangensial Tekan)}$$

Berdasarkan hukum inkompresibilitas plastis ($\varphi_r + \varphi_t + \varphi_z = 0$):

$$\varphi_z = -(\varphi_r + \varphi_t) = -2 \ln\left( \frac{D_1}{D_0} \right) = 2 \ln\left( \frac{D_0}{D_1} \right) > 0 \quad \text{(Regangan Aksial Tarik)}$$

Derajat deformasi ekuivalen von Mises ($\bar{\varphi}$):

$$\bar{\varphi} = \sqrt{\frac{2}{3} \left( \varphi_r^2 + \varphi_t^2 + \varphi_z^2 \right)} = 2 \ln\left( \frac{D_0}{D_1} \right) = \varphi_z$$

Untuk tabung berongga (*hollow tube*) tanpa mandrel dengan diameter luar awal $D_{o0}$, diameter dalam awal $D_{i0}$, ketebalan awal $t_0 = \frac{D_{o0} - D_{i0}}{2}$, diameter luar akhir $D_{o1}$, dan ketebalan akhir $t_1$:

$$\varphi_A = \ln\left( \frac{A_1}{A_0} \right) = \ln\left( \frac{\pi (D_{o1} t_1 - t_1^2)}{\pi (D_{o0} t_0 - t_0^2)} \right)$$

$$\bar{\varphi}_{\text{tube}} = \frac{2}{\sqrt{3}} \sqrt{ \varphi_t^2 + \varphi_t \varphi_r + \varphi_r^2 }$$

### 3.2 Laju Regangan Dinamik Selama Pukulan
Laju regangan efektif seketika ($\dot{\bar{\varepsilon}}(t)$) mencapai puncaknya pada pertengahan langkah pukulan:

$$\dot{\bar{\varepsilon}}(t) = \frac{1}{h(t)} \left| \frac{\mathrm{d}s_r}{\mathrm{d}t} \right| \approx \frac{\pi h_{\text{stroke}}}{2 h_0 \Delta t_{\text{contact}}} \sin\left( \frac{\pi t}{\Delta t_{\text{contact}}} \right)$$

Karena waktu kontak $\Delta t_{\text{contact}} \approx 10^{-3} - 10^{-4}\text{ s}$, laju regangan lokal pada rotary swaging dapat mencapai $\dot{\bar{\varepsilon}} = 10^2 - 10^4\text{ s}^{-1}$. Pada laju regangan tinggi ini, efek viskoplastisitas dan pemanasan adiabatik material menjadi sangat signifikan, dimodelkan menggunakan persamaan **Johnson-Cook**:

$$\sigma_y = \left( A + B \bar{\varepsilon}_{\mathrm{p}}^n \right) \left[ 1 + C \ln\left( \frac{\dot{\bar{\varepsilon}}}{\dot{\varepsilon}_0} \right) \right] \left[ 1 - \left( \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} \right)^m \right]$$

### 3.3 Pemodelan Gaya Tempa Radial dan Daya Mesin (*Radial Forging Force Model*)
Berdasarkan analisis batas atas (*upper bound method*) dan metode slab equilibrium pada zona konus tempa bersudut $\alpha$:

$$F_{\text{radial}} = n_{\text{dies}} \cdot \int_0^{L_{\text{cone}}} p_{\text{contact}}(z) \cdot w_{\text{die}}(z) \cos(\alpha) \, \mathrm{d}z + F_{\text{calib}}$$

Gaya penempaan radial puncak aproksimasi analitik ($F_{\text{peak}}$):

$$F_{\text{peak}} = k_{\text{geom}} \cdot \bar{\sigma}_f \cdot A_{\text{proj}} \cdot \left( 1 + \frac{\mu L_{\text{cone}}}{D_{\text{avg}} \sin \alpha} + \frac{2 \alpha}{3 \sqrt{3}} \right)$$

di mana:
- $n_{\text{dies}}$ = Jumlah segmen cetakan (biasanya 4 cetakan).
- $\bar{\sigma}_f$ = Tegangan alir rata-rata benda kerja pada regangan dan laju regangan sesaat ($\text{MPa}$).
- $A_{\text{proj}}$ = Luas proyeksi kontak efektif antara cetakan dan benda kerja ($\text{mm}^2$).
- $\mu$ = Koefisien gesek Coulomb atau faktor gesek geser Tresca ($m$).
- $\alpha$ = Setengah sudut tirus zona reduksi cetakan (*die semi-cone angle*).
- $k_{\text{geom}}$ = Faktor tegangan multaksial triaksialitas geometris ($1.15 - 1.45$).

Kebutuhan daya motor listrik penggerak spindel swaging ($P_{\text{drive}}$ dalam $\text{kW}$):

$$P_{\text{drive}} = \frac{F_{\text{peak}} \cdot h_{\text{stroke}} \cdot f_{\text{stroke}} \cdot n_{\text{dies}}}{1000 \cdot \eta_{\text{mech}}} + P_{\text{friction, idle}}$$

---

## 4. Evolusi Struktur Mikro, Pengerasan Regangan & Tegangan Sisa

### 4.1 Penghalusan Butir (*Severe Grain Refinement*) & Dislokasi
Deformasi inkremental multi-arah menghasilkan akumulasi densitas dislokasi yang sangat padat ($\rho_{\text{disl}} > 10^{15}\text{ m}^{-2}$), memicu pembentukan dinding sel dislokasi (*dense dislocation walls* / DDWs) dan sub-batas butir sudut rendah (*low-angle grain boundaries* / LAGBs) yang bertransformasi menjadi batas butir sudut tinggi (*high-angle grain boundaries* / HAGBs) melalui mekanisme *Continuous Dynamic Recrystallization* (cDRX).

Peningkatan kekuatan luluh material ($\Delta \sigma_y$) mengikuti relasi **Hall-Petch** yang diperluas:

$$\sigma_y = \sigma_0 + \alpha_{\text{Taylor}} M G b \sqrt{\rho_{\text{disl}}} + k_{\mathrm{HP}} \cdot d_{\text{grain}}^{-1/2}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                PROFIL TEGANGAN SISA DAN PENGERASAN KEDALAMAN (HV)                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Kekerasan Mikro (HV)                             Tegangan Sisa Aksial/Tangensial (MPa)                              |
|   ▲                                                ▲                                                                  |
|   │ 500 ┼ * Permukaan Luar                         │ +200 ┼                     Inti Billet (Tarik)                   |
|   │     │  \                                       │      │                   ┌─────────────────┐                     |
|   │ 400 ┼   \ Gradien Deformasi Inkremental        │    0 ┼───────────────────┘                 └───────────────────  |
|   │     │    \                                     │      │                                                           |
|   │ 300 ┼     *───────────* Inti Billet            │ -300 ┼           * Lapisan Bawah Permukaan                       |
|   │     │                   (Deformasi Rendah)     │      │          /                                                |
|   │ 200 ┼                                          │ -600 ┼─────────* Tegangan Sisa Tekan Kuat                        |
|   └─────┴─────────────┴─────────────► Radius r     └──────┴─────────────┴─────────────────────────► Radius r          |
|        R_out         R_in                                R_out         R_in                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.2 Pola Distribusi Tegangan Sisa Tekan (*Compressive Residual Stress*)
Karena deformasi radial terjadi secara lokal pada permukaan luar dan merambat ke arah inti melalui gelombang tegangan plastis, rotary swaging menghasilkan lapisan tegangan sisa tekan elastis yang sangat dalam ($\sigma_{\text{residual}} = -300\text{ MPa}$ hingga $-700\text{ MPa}$) pada kedalaman $0.5 - 2.5\text{ mm}$ dari permukaan luar. Lapisan tekan ini secara dramatis meningkatkan batas lelah siklus tinggi (*High-Cycle Fatigue* / HCF) pada komponen transmisi hingga $+45\% - +80\%$ dibandingkan komponen hasil bubut (*machined*).

---

## 5. Algoritma Perhitungan Mekanika Swaging & Simulasi Python

Berikut adalah modul solver Python terintegrasi untuk menghitung kinematika rotary swaging, laju regangan puncak, gaya penempaan radial slab model, tegangan sisa, serta kenaikan temperatur adiabatik deformasi.

```python
"""
Rotary Swaging & Radial Forging Analytical & Numerical Solver
Standar: DIN 8583-2, ASTM E9, VDI 3177
Author: RuangTI Industrial Engineering Computation Suite
"""

import math
import numpy as np
from dataclasses import dataclass
from typing import Dict, List, Tuple

@dataclass
class SwagingMachineParams:
    num_dies: int             # Jumlah cetakan (misal 4)
    rotor_rpm: float          # RPM Spindel / Rotor (rpm)
    cage_rpm: float           # RPM Sangkar Rol (rpm, 0 jika diam)
    num_rollers: int          # Jumlah rol silindris pada sangkar (Zr)
    die_stroke_radial: float  # Langkah radial per pukulan h_stroke (mm)
    contact_angle_deg: float  # Sudut busur kontak rol-baji (derajat)
    mech_efficiency: float    # Efisiensi mekanis mesin (0.75 - 0.90)

@dataclass
class WorkpieceGeometry:
    material_name: str
    is_tube: bool
    d_out_initial: float      # Diameter luar awal D_o0 (mm)
    d_in_initial: float       # Diameter dalam awal D_i0 (mm, 0 jika pejal)
    d_out_final: float        # Diameter luar akhir D_o1 (mm)
    d_in_final: float         # Diameter dalam target D_i1 (mm)
    length_initial: float     # Panjang benda kerja awal (mm)
    feed_speed: float         # Kecepatan umpan aksial v_feed (mm/s)

@dataclass
class DieGeometry:
    die_cone_angle_deg: float # Setengah sudut konus reduksi alpha (derajat)
    l_cone: float             # Panjang zona reduksi konikal (mm)
    l_calib: float            # Panjang zona kalibrasi / sizing land (mm)
    friction_coeff: float     # Koefisien gesek Coulomb mu

@dataclass
class MaterialProperties:
    density: float            # Densitas rho (kg/m3)
    specific_heat: float      # Kapasitas panas spesifik c_p (J/kg.K)
    taylor_quinney: float     # Koefisien konversi kerja plastis-termal beta (0.90)
    # Parameter Johnson-Cook: A (MPa), B (MPa), n, C, eps0_dot, T_melt (K), T_room (K), m
    jc_A: float
    jc_B: float
    jc_n: float
    jc_C: float
    jc_eps0_dot: float
    jc_T_melt: float
    jc_T_room: float
    jc_m: float

class RotarySwagingSolver:
    def __init__(self, machine: SwagingMachineParams, workpiece: WorkpieceGeometry,
                 die: DieGeometry, material: MaterialProperties):
        self.m = machine
        self.w = workpiece
        self.d = die
        self.mat = material

    def calculate_kinematics(self) -> Dict[str, float]:
        """Menghitung frekuensi pukulan, waktu kontak, dan umpan per stroke."""
        rel_rpm = abs(self.m.rotor_rpm - self.m.cage_rpm)
        f_stroke = (self.m.num_rollers / 60.0) * rel_rpm # Hz
        
        omega_rel = rel_rpm * (2.0 * math.pi / 60.0) # rad/s
        theta_rad = math.radians(self.m.contact_angle_deg)
        t_contact = theta_rad / omega_rel if omega_rel > 0 else 0.001 # s
        
        feed_per_stroke = self.w.feed_speed / f_stroke if f_stroke > 0 else 0.0 # mm/stroke
        overlap_factor = 1.0 - (feed_per_stroke / self.d.l_calib) if self.d.l_calib > 0 else 0.0
        
        # Kecepatan radial maksimum cetakan
        v_r_max = (math.pi * self.m.die_stroke_radial) / (2.0 * t_contact) # mm/s
        
        return {
            "stroke_frequency_hz": f_stroke,
            "strokes_per_minute": f_stroke * 60.0,
            "contact_time_ms": t_contact * 1000.0,
            "feed_per_stroke_mm": feed_per_stroke,
            "overlap_factor": overlap_factor,
            "max_die_radial_velocity_mm_s": v_r_max
        }

    def calculate_strain_and_strain_rate(self) -> Dict[str, float]:
        """Menghitung regangan logaritmik sejati dan laju regangan sesaat."""
        if not self.w.is_tube:
            phi_r = math.log(self.w.d_out_final / self.w.d_out_initial)
            phi_t = phi_r
            phi_z = -2.0 * phi_r
            phi_eq = abs(phi_z)
            final_length = self.w.length_initial * (self.w.d_out_initial / self.w.d_out_final)**2
        else:
            a0 = (math.pi / 4.0) * (self.w.d_out_initial**2 - self.w.d_in_initial**2)
            a1 = (math.pi / 4.0) * (self.w.d_out_final**2 - self.w.d_in_final**2)
            phi_z = math.log(a0 / a1)
            phi_eq = abs(phi_z) # Pendekatan regangan ekuivalen aksial
            final_length = self.w.length_initial * (a0 / a1)
            phi_r = math.log((self.w.d_out_final - self.w.d_in_final) / (self.w.d_out_initial - self.w.d_in_initial))
            phi_t = math.log((self.w.d_out_final + self.w.d_in_final) / (self.w.d_out_initial + self.w.d_in_initial))

        kin = self.calculate_kinematics()
        t_contact_s = kin["contact_time_ms"] / 1000.0
        # Laju regangan rata-rata selama kontak pukulan
        h_avg = (self.w.d_out_initial + self.w.d_out_final) / 4.0
        strain_rate_avg = (self.m.die_stroke_radial / h_avg) / t_contact_s if t_contact_s > 0 else 1.0

        return {
            "phi_radial": phi_r,
            "phi_tangential": phi_t,
            "phi_axial": phi_z,
            "phi_equivalent": phi_eq,
            "final_length_mm": final_length,
            "avg_strain_rate_s_inv": strain_rate_avg
        }

    def evaluate_johnson_cook_stress(self, eps_p: float, eps_dot: float, temp_k: float) -> float:
        """Menghitung tegangan alir Johnson-Cook (MPa)."""
        eps_dot_norm = max(eps_dot / self.mat.jc_eps0_dot, 1.0)
        t_homol = max(0.0, min(1.0, (temp_k - self.mat.jc_T_room) / (self.mat.jc_T_melt - self.mat.jc_T_room)))
        
        term_hardening = self.mat.jc_A + self.mat.jc_B * (eps_p ** self.mat.jc_n)
        term_rate = 1.0 + self.mat.jc_C * math.log(eps_dot_norm)
        term_thermal = 1.0 - (t_homol ** self.mat.jc_m)
        
        return term_hardening * term_rate * term_thermal

    def solve_forming_mechanics(self) -> Dict[str, float]:
        """Menghitung gaya tempa radial, torsi, daya, dan kenaikan suhu adiabatik."""
        strains = self.calculate_strain_and_strain_rate()
        kin = self.calculate_kinematics()
        
        eps_eq = strains["phi_equivalent"]
        eps_dot = strains["avg_strain_rate_s_inv"]
        t_current = self.mat.jc_T_room

        # Hitung tegangan alir rata-rata
        flow_stress = self.evaluate_johnson_cook_stress(eps_eq * 0.6, eps_dot, t_current)

        # Kenaikan temperatur adiabatik: Delta_T = (beta / (rho * c_p)) * integral(sigma d_eps)
        work_plastic = flow_stress * 1e6 * eps_eq # J/m3
        delta_t_adiabatic = (self.mat.taylor_quinney * work_plastic) / (self.mat.density * self.mat.specific_heat)
        final_temp_k = t_current + delta_t_adiabatic

        # Hitung ulang tegangan alir pada suhu terdeformasi
        flow_stress_thermal = self.evaluate_johnson_cook_stress(eps_eq * 0.6, eps_dot, final_temp_k)

        # Geometri kontak
        d_avg = (self.w.d_out_initial + self.w.d_out_final) / 2.0
        alpha_rad = math.radians(self.d.die_cone_angle_deg)
        proj_area_cone = math.pi * d_avg * self.d.l_cone * math.sin(alpha_rad)
        proj_area_calib = math.pi * self.w.d_out_final * self.d.l_calib

        # Slab method radial pressure factor
        mu = self.d.friction_coeff
        q_factor = 1.0 + (mu * self.d.l_cone) / (d_avg * math.sin(alpha_rad) + 1e-6) + (2.0 * alpha_rad) / (3.0 * math.sqrt(3.0))
        
        # Gaya radial puncak total pada seluruh cetakan
        f_radial_total = q_factor * flow_stress_thermal * (proj_area_cone + proj_area_calib) / 1000.0 # kN
        f_per_die = f_radial_total / self.m.num_dies # kN

        # Daya penempaan mekanis
        work_per_stroke = (f_radial_total * 1000.0) * (self.m.die_stroke_radial / 1000.0) # Joule
        power_net_kw = (work_per_stroke * kin["stroke_frequency_hz"]) / 1000.0 # kW
        power_motor_kw = power_net_kw / self.m.mech_efficiency

        return {
            "mean_flow_stress_mpa": flow_stress_thermal,
            "adiabatic_temp_rise_c": delta_t_adiabatic,
            "workpiece_final_temp_c": final_temp_k - 273.15,
            "total_radial_force_kn": f_radial_total,
            "force_per_die_kn": f_per_die,
            "forming_power_net_kw": power_net_kw,
            "motor_power_required_kw": power_motor_kw
        }

# ==========================================
# SIMULASI NUMERIK STUDI KASUS INDUSTRI OTOMOTIF
# ==========================================
if __name__ == "__main__":
    # Skenario: Rotary Swaging Poros Penggerak Berongga (Automotive Hollow Drive Shaft)
    # Material: 42CrMo4 / AISI 4140 Quenched & Tempered Steel
    machine_cfg = SwagingMachineParams(
        num_dies=4,
        rotor_rpm=450.0,
        cage_rpm=0.0,
        num_rollers=12,
        die_stroke_radial=1.2,    # 1.2 mm stroke
        contact_angle_deg=8.0,
        mech_efficiency=0.82
    )

    workpiece_cfg = WorkpieceGeometry(
        material_name="42CrMo4 (AISI 4140)",
        is_tube=True,
        d_out_initial=50.0,       # Pipa OD 50 mm
        d_in_initial=40.0,        # ID 40 mm (tebal dinding 5 mm)
        d_out_final=38.0,         # Reduksi OD menjadi 38 mm
        d_in_final=30.5,          # ID akhir 30.5 mm (tebal dinding 3.75 mm)
        length_initial=800.0,     # Panjang awal 800 mm
        feed_speed=25.0           # Kecepatan umpan 25 mm/s
    )

    die_cfg = DieGeometry(
        die_cone_angle_deg=7.5,   # Sudut tirus 7.5 deg
        l_cone=45.0,              # Panjang zona reduksi 45 mm
        l_calib=30.0,             # Panjang zona kalibrasi 30 mm
        friction_coeff=0.08       # Pelumasan oli emulsi EP
    )

    material_cfg = MaterialProperties(
        density=7850.0,
        specific_heat=460.0,
        taylor_quinney=0.90,
        jc_A=595.0,               # Yield baseline 595 MPa
        jc_B=580.0,               # Hardening coefficient
        jc_n=0.38,
        jc_C=0.015,               # Strain rate sensitivity
        jc_eps0_dot=1.0,
        jc_T_melt=1793.0,         # 1520 C
        jc_T_room=293.15,         # 20 C
        jc_m=1.03
    )

    solver = RotarySwagingSolver(machine_cfg, workpiece_cfg, die_cfg, material_cfg)
    kin_res = solver.calculate_kinematics()
    str_res = solver.calculate_strain_and_strain_rate()
    mech_res = solver.solve_forming_mechanics()

    print("=" * 75)
    print("HASIL ANALISIS KINEMATIKA & MEKANIKA ROTARY SWAGING (DIN 8583 / ASTM E9)")
    print("=" * 75)
    print(f"Frekuensi Pukulan Mesin       : {kin_res['stroke_frequency_hz']:.1f} Hz ({kin_res['strokes_per_minute']:.0f} strokes/min)")
    print(f"Waktu Kontak per Pukulan      : {kin_res['contact_time_ms']:.2f} ms")
    print(f"Kemajuan Aksial per Pukulan   : {kin_res['feed_per_stroke_mm']:.3f} mm/stroke")
    print(f"Faktor Overlap Kalibrasi      : {kin_res['overlap_factor']*100:.1f} %")
    print(f"Kecepatan Radial Pahat Puncak : {kin_res['max_die_radial_velocity_mm_s']:.1f} mm/s")
    print("-" * 75)
    print(f"Regangan Ekuivalen Sejati     : {str_res['phi_equivalent']:.3f}")
    print(f"Laju Regangan Deformasi Rata2 : {str_res['avg_strain_rate_s_inv']:.1f} s^-1")
    print(f"Panjang Akhir Tabung          : {str_res['final_length_mm']:.1f} mm (Elongasi: {(str_res['final_length_mm']/workpiece_cfg.length_initial - 1)*100:.1f}%)")
    print("-" * 75)
    print(f"Tegangan Alir Termomekanis    : {mech_res['mean_flow_stress_mpa']:.1f} MPa")
    print(f"Kenaikan Suhu Adiabatik       : +{mech_res['adiabatic_temp_rise_c']:.1f} °C (Suhu Akhir: {mech_res['workpiece_final_temp_c']:.1f} °C)")
    print(f"Gaya Tempa Radial Puncak Total: {mech_res['total_radial_force_kn']:.1f} kN ({mech_res['total_radial_force_kn']/9.81:.1f} Ton-force)")
    print(f"Gaya per Segmen Cetakan       : {mech_res['force_per_die_kn']:.1f} kN")
    print(f"Daya Pembentukan Bersih       : {mech_res['forming_power_net_kw']:.2f} kW")
    print(f"Kebutuhan Daya Motor Listrik  : {mech_res['motor_power_required_kw']:.2f} kW")
    print("=" * 75)
```

---

## 6. Studi Kasus Industri: Manufaktur Poros Penggerak Berongga (*Automotive Hollow Drive Shaft*) 42CrMo4

### 6.1 Latar Belakang Masalah & Spesifikasi Komponen
Produsen tier-1 powertrain otomotif memproduksi poros transmisi daya berongga (*lightweight hollow drive shaft*) berbahan baja paduan paduan kromium-molibdenum **42CrMo4** (AISI 4140). Pada metode manufaktur lama, poros diproduksi dari pipa berdinding tebal seragam ($50\text{ mm}$ OD $\times 10\text{ mm}$ tebal dinding) kemudian dibubut secara masif pada kedua ujungnya untuk membentuk dudukan bantalan (*bearing seat*) dan spline, membuang $42\%$ material dalam bentuk geram (*scrap*) dengan waktu siklus $4.8\text{ menit/benda kerja}$.

Target re-engineering manufaktur menggunakan **Infeed Rotary Swaging**:
1. Menghilangkan proses permesinan bubut kasar (*rough turning*).
2. Membentuk ujung tabung dari diameter awal $\text{OD } 50\text{ mm} \rightarrow \text{OD } 38\text{ mm}$ dengan toleransi diameter kelas h8 ($\pm 0.033\text{ mm}$).
3. Menghasilkan kekasaran permukaan akhir $Ra \le 0.4\ \mu\text{m}$ (*mirror finish*) langsung dari cetakan kalibrasi tanpa proses gerinda (*grinding*).
4. Meningkatkan batas ketahanan lelah siklus putar torsi (*torsional fatigue strength*) $\ge +30\%$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                PERBANDINGAN PERFORMA: METODE BUBUT KONVENSIONAL VS ROTARY SWAGING                    |
+-----------------------------------------------------------------------------------------------------------------------+
| Metrik Kinerja Manufaktur               Metode Bubut Konvensional        Rotary Swaging Inkremental       Peningkatan |
| --------------------------------------------------------------------------------------------------------------------- |
| Waktu Siklus Produksi (Cycle Time)      288 detik (4.8 menit)            32 detik                         -88.9%      |
| Pemanfaatan Material (Material Yield)   58.0% (42% Bram/Scrap)           98.5% (Chipless)                 +40.5%      |
| Kekasaran Permukaan Dudukan (Ra)        1.60 - 3.20 µm (Perlu Grinding)  0.28 - 0.35 µm (Net-Shape)       Eliminasi Grind|
| Tegangan Sisa Permukaan (Aksial)        +120 MPa (Tarik Akibat Panas)    -480 MPa (Tekan Kuat)            Anti-Fatique|
| Batas Lelah Torsi Siklik (τ_fatigue)    310 MPa                          445 MPa                          +43.5%      |
| Kekerasan Permukaan Luar                280 HV                           385 HV (Work-Hardened)           +37.5%      |
| Konsumsi Energi Listrik per Komponen    3.45 kWh                         0.52 kWh                         -84.9%      |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Evaluasi Hasil Metalurgi & Verifikasi Standar
Hasil pengujian laboratorium metalurgi dan metrologi dimensi:
1. **Analisis Struktur Mikro (ASTM E112)**: Terjadi penghalusan butir martensit temper dari ukuran rata-rata butir $18.5\ \mu\text{m}$ (ASTM No. 8.5) menjadi struktur sub-mikron $4.2\ \mu\text{m}$ (ASTM No. 12.5) pada zona permukaan luar hingga kedalaman $1.8\text{ mm}$.
2. **Uji Kekerasan Mikro Vickers (ASTM E384)**: Kekerasan meningkat secara kontinyu dari $280\text{ HV}_{0.5}$ pada inti tabung menjadi $385\text{ HV}_{0.5}$ pada lapisan terluar akibat *strain hardening* dan deformasi inkremental berulang.
3. **Pengukuran Tegangan Sisa Difraksi Sinar-X (XRD - ASTM E915)**: Menunjukkan tegangan sisa tekan puncak sebesar $-510\text{ MPa}$ pada kedalaman $0.35\text{ mm}$ di bawah permukaan, secara efektif memblokir inisiasi retak fatik mulur torsi.

---

## 7. Rekomendasi Praktik Terbaik & Parameter Kontrol Kualitas Industri

1. **Pengendalian Sudut Konus Cetakan ($\alpha$)**: Pertahankan setengah sudut konus cetakan $\alpha$ pada rentang optimal $6^\circ - 10^\circ$. Sudut $\alpha < 5^\circ$ menyebabkan panjang zona kontak berlebih dan lonjakan beban gesek, sedangkan $\alpha > 12^\circ$ memicu cacat aliran material berupa *internal central bursting* (efek cacat chevron) akibat triaksialitas tegangan tarik hidrostatik pada sumbu pusat.
2. **Sinkronisasi Kecepatan Umpan dan Putaran Spindel**: Pertahankan faktor *overlap* kalibrasi $\eta_{\text{overlap}} \ge 80\%$ untuk menjamin eliminasi jejak pukulan aksial (*spiral stroke marks*) pada permukaan produk.
3. **Manajemen Pelumasan Tekanan Ekstrem (EP Lubrication)**: Gunakan fluida pembentuk berbasis ester sintetik dengan aditif sulfur-fosfor berklorinasi rendah (*chlorine-free EP forming fluid*) dengan viskositas kinematis $40 - 60\text{ mm}^2/\text{s}$ pada $40^\circ\text{C}$ dan laju semprot pendingin $\ge 60\text{ L/menit}$ untuk meredam pemanasan gesek perkakas cetakan.
4. **Material Cetakan Karbida Semen (Cemented Carbide Tooling)**: Gunakan cetakan berbahan *tungsten carbide* butir mikro kelas ISO K20/K30 dengan pengikat kobalt $10-12\text{ wt}\%\text{ Co}$ yang dilapisi TiAlN/AlCrN multi-layer PVD untuk memperpanjang umur pakai cetakan hingga $>250.000$ siklus pembentukan.

---

## 8. Referensi Terverifikasi & Standar Industri

1. **DIN 8583-2:2003-09**, *Fertigungsverfahren Umformen unter Druckbeanspruchung — Teil 2: Freiformen (Gesenkdrücken und Radialumformen)*, Deutsches Institut für Normung, Berlin.
2. **ASTM E9-19**, *Standard Test Methods of Compression Testing of Metallic Materials at Room Temperature*, ASTM International, West Conshohocken, PA, 2019. DOI: 10.1520/E0009-19.
3. **VDI-Richtlinie 3177:2018**, *Rundkneten — Verfahrensgrundlagen, Maschinen, Werkzeuge und Anwendungen (Rotary Swaging)*, Verein Deutscher Ingenieure, Düsseldorf.
4. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons, Hoboken, NJ. ISBN: 978-1-119-70642-7.
5. **Sanabria, V., Mueller, S., & Reimers, W.** (2021). *Evolution of microstructure, mechanical properties and residual stresses during infeed rotary swaging of steel tubes*. Journal of Materials Processing Technology, Vol. 288, Art. 116892. DOI: 10.1016/j.jmatprotec.2020.116892.
6. **Piatek, M., Frischkorn, C., & Hielscher, C.** (2023). *Process parameter influence on work hardening and fatigue life enhancement in incremental cold radial forging of alloy steels*. International Journal of Advanced Manufacturing Technology, Vol. 124(5), pp. 1673-1689. DOI: 10.1007/s00170-022-10542-x.
7. **Dieter, G. E., & Bacon, D.** (2018). *Mechanical Metallurgy* (SI Metric ed.). McGraw-Hill Education, London. ISBN: 978-0-07-100406-0.
8. **ISO 6892-1:2019**, *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*, International Organization for Standardization, Geneva.
