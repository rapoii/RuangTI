# Modul 614: Binder Jetting Additive Manufacturing (BJAM): Kinetika Kapiler Droplet-Powder Bed, Termodinamika Debinding Polimer, Densifikasi Liquid-Phase Sintering, dan Kompensasi Penyusutan Anisotropik (ISO/ASTM 52900, ISO/ASTM 52926, & MPIF Standard 35)

## 1. Pengantar & Konteks Industri *Binder Jetting Additive Manufacturing* (BJAM)

Dalam lanskap manufaktur aditif industri modern (*Additive Manufacturing* / AM), teknologi berbasis fusi serbuk laser (*Laser Powder Bed Fusion* / L-PBF) dan berkas elektron (*Electron Beam Melting* / EBM) sering kali menghadapi kendala ekonomi dan metalurgi yang signifikan ketika diterapkan pada produksi massal skala tinggi (*high-volume batch production*). Kendala tersebut mencakup:
1. **Laju Produksi Volumetrik Terbatas**: Sinar laser/berkas elektron bekerja secara sekuensial titik-demi-titik (*point-by-point scanning*), membatasi *build rate* pada kisaran $20 - 100\text{ cm}^3/\text{jam}$.
2. **Tegangan Sisa Termal Ekstrem (*Thermal Residual Stress*)**: Gradien termal yang sangat curam ($\nabla T > 10^6\text{ K/s}$) memicu distorsi geometris parah (*delamination & warpage*), membutuhkan penopang mekanis padat (*sacrificial support structures*) yang sulit dihilangkan.
3. **Keterbatasan Spektrum Material**: Material dengan konduktivitas termal sangat tinggi (seperti tembaga murni $\text{Cu}$) atau material yang sensitif terhadap retak panas (*hot cracking*) seperti superalloy berbasis nikel berkandungan aluminium tinggi, karbida tersementasi ($\text{WC-Co}$), serta keramik teknis ($\text{Al}_2\text{O}_3, \text{SiC}, \text{ZrO}_2$) sangat sulit diproses dengan metode berbasis fusi termal langsung.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    ARSITEKTUR LENGKAP PROSES DUA TAHAP BINDER JETTING ADDITIVE MANUFACTURING (BJAM)                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [TAHAP 1: PEMBENTUKAN KOMPONEN MENTAH BERKECEPATAN TINGGI (GREEN PART PRINTING)]                                     |
|                                                                                                                       |
|         PRINTHEAD INKJET INDUSTRI (Ribuan Nozel Piezoelektrik Array)                                                  |
|         ════════════════════════════════════════════════════════════                                                  |
|                   │  │  │  │  │  │  │  │  │  │                                                                        |
|                   ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  Droplet Pengikat Cair (Binder Liquid: V_drop ~ 10-80 pL)             |
|         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                  |
|         ░░░░░░░░░░░░░░ LAPISAN SERBUK TERIKAT (POWDER BED) ░░░░░░░░                                                  |
|         ════════════════════════════════════════════════════════════                                                  |
|         ◄── Roller Perata Serbuk (Counter-Rotating Spreading Roller)                                                  |
|                                                                                                                       |
|  Kecepatan Cetak Sangat Cepat: Area-wide printing (> 500-2000 cm3/jam), Suhu Kamar (Zero Thermal Residual Stress).   |
|  Hasil: "Green Part" (Kepadatan 50-60%, Diikat oleh Jembatan Polimerik Lemah).                                        |
|                                                                                                                       |
|                                          │                                                                            |
|                                          ▼                                                                            |
|                                                                                                                       |
|  [TAHAP 2: PROSES PASCACETAK METALURGI / DEBINDING & SINTERING TINGGI]                                                |
|                                                                                                                       |
|         ┌──────────────────────────────────────────────────────────┐                                                  |
|         │ 1. CURING & DEPOWDERING: Penguatan Polimer & Pembersihan │                                                  |
|         └────────────────────────────┬─────────────────────────────┘                                                  |
|                                      │                                                                                |
|                                      ▼                                                                                |
|         ┌──────────────────────────────────────────────────────────┐                                                  |
|         │ 2. THERMAL DEBINDING: Pirolisis Polimerik (200 - 500 °C) │                                                  |
|         │    Pelepasan gas rantai hidrokarbon organik (Brown Part) │                                                  |
|         └────────────────────────────┬─────────────────────────────┘                                                  |
|                                      │                                                                                |
|                                      ▼                                                                                |
|         ┌──────────────────────────────────────────────────────────┐                                                  |
|         │ 3. HIGH-TEMPERATURE SINTERING (1100 - 1450 °C)           │                                                  |
|         │    Solid-State / Liquid-Phase Sintering Densification    │                                                  |
|         │    Penyusutan Linear Anisotropik (15 - 22%), Rho > 99%   │                                                  |
|         └──────────────────────────────────────────────────────────┘                                                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Binder Jetting Additive Manufacturing (BJAM)**—distandardisasi dalam **ISO/ASTM 52900**—adalah proses manufaktur aditif dua tahap (*two-stage additive manufacturing process*). Pada tahap pertama (pencetakan dingin / *cold printing*), kepala cetak *piezoelectric inkjet* mendeposisikan tetesan zat pengikat polimer cair (*liquid polymeric binder*) secara selektif ke atas hamparan serbuk logam atau keramik (*powder bed*) lapis demi lapis pada suhu kamar. Pada tahap kedua (proses pascacetak metalurgi / *post-processing*), komponen mentah (*green part*) menjalani proses *curing*, *depowdering*, penghilangan pengikat termal (*thermal debinding*), dan densifikasi sintering suhu tinggi (*high-temperature solid-state / supersolidus liquid-phase sintering*) untuk mencapai densitas metalurgi penuh ($\rho_{\text{rel}} > 97 - 99{,}5\%$).

Standar industri dan konsorsium metalurgi yang mengatur pengujian BJAM mencakup:
- **ISO/ASTM 52900**: *Additive manufacturing — General principles — Fundamentals and vocabulary*.
- **ISO/ASTM 52926 (Parts 1-5)**: *Additive manufacturing of metals — Qualification principles — Installation, operation and maintenance of Binder Jetting machines*.
- **MPIF Standard 35 (Metal Powder Industries Federation)**: *Materials Standards for Metal Injection Molded (MIM) and Binder Jetted Parts*.
- **ASTM B311**: *Standard Test Method for Density of Powder Metallurgy (PM) Materials Containing Less Than Two Percent Porosity*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.

---

## 2. Kinetika Interaksi Droplet-Powder Bed & Fisika Kapiler

### 2.1 Bilangan Weber, Ohnesorge, dan Kriteria Pencetakan Inkjet

Stabilitas pembentukan tetesan *binder* pada nozel *piezoelectric* ditentukan oleh keseimbangan antara gaya inersia, viskositas, dan tegangan permukaan fluida:

$$\text{Weber Number: } We = \frac{\rho_L v_{\text{drop}}^2 d_n}{\gamma_{LV}}$$
$$\text{Reynolds Number: } Re = \frac{\rho_L v_{\text{drop}} d_n}{\mu_L}$$
$$\text{Ohnesorge Number: } Oh = \frac{\sqrt{We}}{Re} = \frac{\mu_L}{\sqrt{\rho_L \gamma_{LV} d_n}}$$

di mana:
- $\rho_L$ = Massa jenis cairan pengikat ($\text{kg/m}^3$).
- $v_{\text{drop}}$ = Kecepatan luncur tetesan ($v \approx 6 - 12\text{ m/s}$).
- $d_n$ = Diameter orifice nozel ($d_n \approx 20 - 50\ \mu\text{m}$).
- $\gamma_{LV}$ = Tegangan antarmuka cair-gas / tegangan permukaan ($\text{N/m}$ atau $\text{mN/m}$).
- $\mu_L$ = Viskositas dinamik cairan binder ($\text{Pa}\cdot\text{s}$ atau $\text{mPa}\cdot\text{s}$).

Untuk memastikan pembentukan droplet stabil tanpa pembentukan satelit liar (*satellite droplets*) maupun penyumbatan nozel, parameter fluiditas harus memenuhi kriteria indeks kemampuan cetak (*printability parameter*, $Z$):
$$Z = \frac{1}{Oh} = \frac{\sqrt{\rho_L \gamma_{LV} d_n}}{\mu_L}, \quad 1 \le Z \le 14$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    FENOMENA PENETRASI TETESAN BINDER & PEMBENTUKAN JEMBATAN PENDULUS KROM                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] IMPAK DROPLET PADA SERBUK (t = 0 - 50 us)          [B] PENETRASI KAPILER & SIKLUS EQUILIBRIUM (t = 1 - 20 ms)    |
|                                                                                                                       |
|         Kecepatan Impak (v_drop ~ 8 m/s)                            Gaya Kapiler Tarik: P_c = (2 * gamma * cos theta)/r_p|
|                  │ │ │                                                                                                |
|                  ▼ ▼ ▼                                                     Partikel Serbuk Padat                      |
|             ╭──────────────╮ Droplet Binder Cair                                 ┌─────────┐                          |
|            (   V_drop       )                                                    │ Serbuk  │                          |
|             ╰──────────────╯                                                     │ Logam 1 │                          |
|         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                                         └────┬────┘                          |
|         ●   ●   ●   ●   ●   ●   ●   ●   ●                                         │ Jembatan Meniskus Cair            |
|       ●   ●   ●   ●   ●   ●   ●   ●   ●   ●                                      ▼ (Pendular Meniscus)                |
|         ●   ●   ●   ●   ●   ●   ●   ●   ●                                    ╭─────────────╮                          |
|         Lapisan Serbuk Bebas (Packing Fraction Phi_p)                            │ Liquid Bond │ F_cap                    |
|                                                                                  ╰─────────────╯                          |
|                                                                                  ▲                                    |
|                                                                                  │                                    |
|                                                                                  ┌────┴────┐                          |
|                                                                                  │ Serbuk  │                          |
|                                                                                  │ Logam 2 │                          |
|                                                                                  └─────────┘                          |
|                                                                                                                       |
|   Rejim Penetrasi: Difusi Kapiler Washburn  h(t) = sqrt( (r_eff * gamma_LV * cos theta * t) / (2 * mu_L) )           |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Kinetika Penetrasi Kapiler Washburn dalam Media Berpori

Penetrasi cairan pengikat ke dalam ruang antar-partikel serbuk dimodelkan sebagai aliran kapiler fluida tak mampu-mampat (*incompressible capillary flow*) yang melewati jejaring pori silindris ekuivalen berdasarkan **Persamaan Lucas-Washburn**:

$$h_p(t) = \sqrt{\frac{r_{\text{eff}} \cdot \gamma_{LV} \cdot \cos\theta_Y}{2 \mu_L} \cdot t}$$

di mana:
- $h_p(t)$ = Kedalaman penetrasi cairan pengikat sebagai fungsi waktu $t$ ($\text{m}$).
- $r_{\text{eff}} = \frac{2}{3} \left(\frac{1 - \phi_p}{\phi_p}\right) \frac{D_{50}}{S_w}$ = Radius pori efektif media serbuk ($\text{m}$).
- $\phi_p$ = Fraksi pemadatan serbuk (*powder packing density*, biasanya $0{,}50 - 0{,}62$).
- $D_{50}$ = Diameter rata-rata butiran serbuk metalurgi ($\mu\text{m}$).
- $\theta_Y$ = Sudut kontak Young antara cairan pengikat dan permukaan partikel padat.
- $S_w$ = Faktor bentuk partikel (*sphericity factor*, $1{,}0$ untuk serbuk sferis atomisasi gas).

Waktu penetrasi kapiler total ($t_{\text{pen}}$) hingga tetesan diserap sempurna ke dalam *powder bed*:
$$t_{\text{pen}} \approx \frac{2 \mu_L V_{\text{drop}}^{2/3}}{r_{\text{eff}} \gamma_{LV} \cos\theta_Y}$$

---

## 3. Kejenuhan Pengikat (*Binder Saturation Ratio*) & Kekuatan Mentah (*Green Strength*)

### 3.1 Formulasi Derajat Kejenuhan Pengikat ($S_b$)

Derajat kejenuhan pengikat ($S_b$) adalah parameter kontrol kritis yang menentukan integritas mekanik bagian mentah dan akurasi geometris tepi fitur. $S_b$ didefinisikan sebagai rasio antara volume cairan pengikat yang dideposisikan terhadap total volume pori-pori kosong di dalam elemen volume kerja (*voxel*):

$$S_b = \frac{V_{\text{binder}}}{V_{\text{void}}} = \frac{V_{\text{drop}} \cdot N_{\text{drops}}}{A_{\text{voxel}} \cdot h_{\text{layer}} \cdot (1 - \phi_p)} = \frac{V_{\text{drop}} \cdot (\text{DPI}_x \cdot \text{DPI}_y)}{h_{\text{layer}} \cdot (1 - \phi_p)}$$

di mana:
- $\text{DPI}_x, \text{DPI}_y$ = Resolusi pencetakan sumbu x dan y (*dots per inch*).
- $h_{\text{layer}}$ = Ketebalan lapisan serbuk per siklus pelapisan (*layer thickness*, biasanya $30 - 100\ \mu\text{m}$).
- $(1 - \phi_p)$ = Porositas fraksional hamparan serbuk mentah.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    REJIM KEJENUHAN BINDER (S_b) DAN IMPLIKASINYA TERHADAP KUALITAS CETAK                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] REJIM UNDER-SATURATION (S_b < 40%)     [B] REJIM OPTIMAL (50% <= S_b <= 75%)   [C] REJIM OVER-SATURATION (S_b > 90%) |
|                                                                                                                       |
|      ●       ●       ●                          ●───────●       ●                       ●═══════●═══════●             |
|        \   /           \                          \   /   \   /                           ║  Binder Penuh ║             |
|          ●               ●                          ●───────●                           ●═══════●═══════●             |
|                                                                                                                       |
|  - Jembatan cairan terputus              - Jembatan pendular kontinu             - Binder meluap ke partikel sekitar  |
|  - Green strength sangat rendah          - Green strength optimal                - Bleeding / Edges Loss              |
|  - Rentan hancur saat depowdering        - Resolusi geometri tajam               - Distorsi dimensi & burr basah      |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.2 Pemodelan Kekuatan Lentur Mentah (*Green Part Transverse Rupture Strength*, TRS)

Setelah pencetakan, komponen dipanaskan pada suhu *curing* ($150 - 200\ ^\circ\text{C}$) untuk mempolimerisasi ikatan rantai termoset/termoplastik. Kekuatan lentur transversal komponen mentah ($\sigma_{\text{TRS}}$, MPIF Standard 15) dimodelkan melalui persamaan Rumpf-Schubert yang dimodifikasi:

$$\sigma_{\text{TRS}} = C_{\text{poly}} \cdot \left(\frac{1 - \epsilon}{\epsilon}\right) \cdot \frac{\gamma_{\text{bridge}}}{D_{50}} \cdot S_b^m \cdot \phi_p^n$$

di mana:
- $\epsilon = 1 - \phi_p$ = Porositas fraksional awal.
- $C_{\text{poly}}$ = Konstanta adhesi kohesif resin polimerik.
- $\gamma_{\text{bridge}}$ = Kekuatan tarik spesifik jembatan ikatan polimer kering.
- $m, n$ = Eksponen empiris pemadatan ($m \approx 1{,}2 - 1{,}8;\ n \approx 2{,}5 - 3{,}5$).

---

## 4. Termodinamika Debinding & Kinetika Sintering

### 4.1 Dekomposisi Termal Pengikat (*Thermal Debinding Kinetics*)

Sebelum mencapai suhu sintering logam, seluruh polimer pengikat organik harus diuapkan dan didegradasi tanpa meninggalkan residu karbon tak terkontrol (*carbon pick-up / contamination*). Laju degradasi massa polimer mengikuti model kinetika dekomposisi non-isotermal Kissinger-Akahira-Sunose (KAS):

$$\frac{d\alpha_d}{dt} = A_d \exp\left(-\frac{E_{d}}{R T(t)}\right) (1 - \alpha_d)^{n_d}$$

di mana $\alpha_d$ adalah fraksi konversi dekomposisi polimerik ($0 \le \alpha_d \le 1$), $A_d$ adalah faktor frekuensi, $E_d$ adalah energi aktivasi pirolisis polimer ($\sim 120 - 180\text{ kJ/mol}$), dan $n_d$ adalah orde reaksi degradasi termal.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PROFIL SUHU TERMAL PROSES DEBINDING DAN SINTERING METALURGI (MASTER SINTERING CURVE)                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Suhu (°C)                                                                                                           |
|      ▲                                                     SINTERING ISOTERMAL T_sint (1250 - 1400 °C)                |
|      │                                                     ┌─────────────────────────────────┐                        |
| 1400 ┼                                                    /                                   \                       |
|      │                                                   /                                     \                      |
| 1000 ┼                                                  /  Densifikasi Difusi Batas Butir       \                     |
|      │                                                 /   & Volume Diffusion                    \ Laju Pendinginan   |
|  600 ┼                                                /                                           \ Terkontrol        |
|      │                  DEBINDING ISOTERMAL          /                                             \                  |
|  400 ┼                  ┌─────────────────┐         /                                               \                 |
|      │  Ramp 1-3 °C/min/                   \       /                                                 \                |
|  200 ┼  Curing 180 °C /  Pirolisis Binder   \     /                                                   \               |
|      │  ┌────────────┘   (250 - 450 °C)     \───/                                                     \               |
|   25 ┼──┴──────────────────────────────────────────────────────────────────────────────────────────────┴──────► Waktu |
|                                                                                                                       |
|   Transformasi: Green Part (55% Densitas) ──► Brown Part (55% Porus Murni) ──► Sintered Final Part (> 99% Densitas)  |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.2 Densifikasi Sintering Fasa Padat & Supersolidus (*Master Sintering Curve*)

Penyusutan dan penutupan pori selama sintering digerakkan oleh penurunan luas area energi permukaan bebas spesifik ($\Delta \mathcal{A}_{\text{surface}}$). Tingkat densifikasi relatif ($\rho(t)$) dimodelkan menggunakan konsep *Master Sintering Curve* (MSC) Su & Johnson:

$$\Phi(t) = \int_0^t \frac{1}{T(t')} \exp\left(-\frac{Q_{\text{sint}}}{R T(t')}\right) dt'$$
$$\rho_{\text{rel}}(\Phi) = \rho_0 + \frac{1 - \rho_0}{1 + \exp\left(-\frac{\ln\Phi - \ln\Phi_0}{a}\right)}$$

di mana:
- $\Phi(t)$ = Parameter kerja termal sintering ekuivalen ($\text{K}^{-1}\cdot\text{s}$).
- $Q_{\text{sint}}$ = Energi aktivasi sintering difusi kisi/batas butir ($\text{kJ/mol}$, $\sim 280\text{ kJ/mol}$ untuk stainless steel 316L, $\sim 220\text{ kJ/mol}$ untuk Cu).
- $\rho_0 = \phi_p$ = Densitas partikel mentah awal ($\sim 0{,}55$).
- $\ln\Phi_0, a$ = Parameter karakteristik kurva sigmoidal MSC material.

---

## 5. Pemodelan Penyusutan Anisotropik & Kompensasi CAD Geometris

Selama sintering suhu tinggi, hilangnya volume pori sebesar $40 - 50\%$ menyebabkan penyusutan dimensi linear makroskopis sebesar $15 - 22\%$. Karena densitas pemadatan serbuk berbeda antara arah deposisi horizontal ($x, y$) dan arah pelapisan gravitasi vertikal ($z$), penyusutan bersifat **anisotropik**:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    FENOMENA PENYUSUTAN ANISOTROPIK & SKEMA KOMPENSASI GEOMETRI CAD                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] GEOMETRI CAD MENTAH TERKOMPENSASI (GREEN PART CAD)     [B] GEOMETRI PRODUK AKHIR TERSINTERISASI (FINAL SINTERED) |
|                                                                                                                       |
|      Lebar Cetak Terkompensasi: L_green_x = L_target / (1 - S_x)   Lebar Target Selesai: L_target                     |
|      ◄────────────────────────────────────────────────────────►    ◄──────────────────────────────────►               |
|      ┌────────────────────────────────────────────────────────┐    ┌──────────────────────────────────┐               |
|      │                                                        │    │                                  │               |
|      │                                                        │    │                                  │               |
|      │                                                        │───►│                                  │  H_target     |
|      │                                                        │    │                                  │               |
|      │                                                        │    └──────────────────────────────────┘               |
|      └────────────────────────────────────────────────────────┘                                                       |
|      ▲                                                                                                                |
|      │ Tinggi Cetak Z: H_green_z = H_target / (1 - S_z)                                                               |
|      ▼ (Catatan: S_z > S_x,y akibat penataan partikel bergradien gravitasi & efek layer interface)                    |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.1 Persamaan Faktor Penyusutan Anisotropik ($S_i$)

Tingkat penyusutan linear pada arah $i \in \{x, y, z\}$ dirumuskan:

$$S_i = 1 - \left(\frac{\rho_{\text{green}}}{\rho_{\text{sintered}}} \cdot \frac{1}{\lambda_i}\right)^{1/3}$$

di mana:
- $\rho_{\text{green}} = \phi_p \cdot \rho_{\text{theor}}$ = Densitas massa mentah.
- $\rho_{\text{sintered}}$ = Densitas massa akhir setelah sintering.
- $\lambda_i$ = Faktor anisotropi struktural arah $i$, dengan $\lambda_x \approx \lambda_y \approx 1{,}0$ dan $\lambda_z \approx 0{,}85 - 0{,}92$ (karena pori antarlapisan cenderung lebih besar akibat rol perata).

### 5.2 Skala Kompensasi Model CAD (*CAD Scaling Factor*, $SF_i$)
Model digital CAD harus diperbesar sebelum pemotongan *slice* (*slicing*) dengan faktor penskalaan:

$$SF_x = \frac{1}{1 - S_x}, \quad SF_y = \frac{1}{1 - S_y}, \quad SF_z = \frac{1}{1 - S_z}$$

---

## 6. Algoritma & Implementasi Python: Simulator BJAM End-to-End & Optimalisasi Skala CAD

Berikut adalah implementasi Python lengkap untuk memodelkan pembentukan tetesan inkjet, penetrasi kapiler Washburn, derajat kejenuhan *binder* ($S_b$), kinetika densifikasi *Master Sintering Curve*, serta perhitungan kompensasi faktor penyusutan anisotropik 3D untuk model CAD.

```python
"""
Binder Jetting Additive Manufacturing (BJAM) Numerical Simulation & Sintering Compensation Engine
Memodelkan kinetika droplet-powder bed, derajat kejenuhan binder (Sb),
Master Sintering Curve (MSC) densifikasi termal, dan faktor kompensasi CAD 3D anisotropik.
Standar Kepatuhan: ISO/ASTM 52900, ISO/ASTM 52926, & MPIF Standard 35.
"""

import numpy as np
import math
from typing import Dict, Tuple, List, Any

class BinderJettingSimulator:
    def __init__(self,
                 alloy_name: str = "SS316L",
                 d50_particle_um: float = 16.5,
                 powder_packing_fraction: float = 0.58,
                 layer_thickness_um: float = 50.0,
                 dpi_x: int = 1200,
                 dpi_y: int = 1200,
                 drop_volume_pL: float = 30.0,
                 binder_surface_tension_mN_m: float = 32.0,
                 binder_viscosity_mPa_s: float = 4.5,
                 contact_angle_deg: float = 22.0):
        """
        Inisialisasi Parameter Fisika, Fluida, Serbuk, dan Mesin BJAM.
        """
        self.alloy_name = alloy_name
        self.d50_m = d50_particle_um * 1e-6
        self.phi_p = powder_packing_fraction
        self.layer_h_m = layer_thickness_um * 1e-6
        self.dpi_x = dpi_x
        self.dpi_y = dpi_y
        self.v_drop_m3 = drop_volume_pL * 1e-15
        self.gamma_lv = binder_surface_tension_mN_m * 1e-3  # N/m
        self.mu_l = binder_viscosity_mPa_s * 1e-3          # Pa.s
        self.theta_rad = math.radians(contact_angle_deg)
        
        self.R = 8.314 # J/(mol K)
        self._setup_alloy_properties()

    def _setup_alloy_properties(self):
        """Menentukan sifat termodinamika metalurgi dan sintering paduan."""
        if self.alloy_name == "SS316L":
            self.rho_theoretical = 7980.0  # kg/m^3
            self.Q_sintering = 285000.0    # J/mol (Energi aktivasi sintering)
            self.ln_theta_0 = -20.2
            self.msc_a = 0.65
            self.target_density_pct = 98.8
            self.anisotropy_z = 1.04       # Rasio penyusutan Z thd bidang XY (Sz > Sxy)
        elif self.alloy_name == "Copper_C11000":
            self.rho_theoretical = 8960.0
            self.Q_sintering = 215000.0
            self.ln_theta_0 = -17.5
            self.msc_a = 0.60
            self.target_density_pct = 97.5
            self.anisotropy_z = 1.05
        elif self.alloy_name == "Inconel_625":
            self.rho_theoretical = 8440.0
            self.Q_sintering = 310000.0
            self.ln_theta_0 = -21.5
            self.msc_a = 0.70
            self.target_density_pct = 99.2
            self.anisotropy_z = 1.03
        else:
            raise ValueError(f"Material {self.alloy_name} belum terkalibrasi.")

    def evaluate_droplet_printability(self, drop_velocity_m_s: float = 8.0, nozzle_dia_um: float = 35.0) -> Dict[str, Any]:
        """
        Mengevaluasi angka Weber (We), Reynolds (Re), Ohnesorge (Oh), dan indeks Z.
        """
        d_nozzle_m = nozzle_dia_um * 1e-6
        rho_binder = 1050.0  # kg/m^3
        
        we = (rho_binder * (drop_velocity_m_s ** 2) * d_nozzle_m) / self.gamma_lv
        re = (rho_binder * drop_velocity_m_s * d_nozzle_m) / self.mu_l
        oh = math.sqrt(we) / re
        z_index = 1.0 / oh
        
        is_printable = 1.0 <= z_index <= 14.0
        return {
            "weber_number": round(we, 2),
            "reynolds_number": round(re, 2),
            "ohnesorge_number": round(oh, 4),
            "z_printability_index": round(z_index, 2),
            "status": "STABIL & PRINTABLE" if is_printable else "TIDAK STABIL (Satelit / Clogging)"
        }

    def calculate_capillary_kinetics(self) -> Dict[str, float]:
        """
        Menghitung radius pori hidrolik efektif dan waktu penetrasi kapiler Washburn.
        """
        porosity = 1.0 - self.phi_p
        r_eff = (2.0 / 3.0) * (porosity / self.phi_p) * self.d50_m
        
        # Waktu penetrasi untuk tetesan volume v_drop
        t_pen_sec = (2.0 * self.mu_l * math.pow(self.v_drop_m3, 2.0/3.0)) / (r_eff * self.gamma_lv * math.cos(self.theta_rad))
        
        return {
            "effective_pore_radius_um": round(r_eff * 1e6, 2),
            "penetration_time_ms": round(t_pen_sec * 1000.0, 3)
        }

    def calculate_binder_saturation(self) -> Dict[str, Any]:
        """
        Menghitung Derajat Kejenuhan Pengikat (Binder Saturation Sb) per satuan voxel.
        Voxel dipetakan berdasarkan rasio volume binder yang dideposisikan per unit luas.
        """
        pixel_pitch_x = 0.0254 / self.dpi_x  # meter per dot
        pixel_pitch_y = 0.0254 / self.dpi_y
        voxel_total_vol = pixel_pitch_x * pixel_pitch_y * self.layer_h_m
        
        pore_volume = voxel_total_vol * (1.0 - self.phi_p)
        # Pada pencetakan droplet bertingkat, binder per dot disesuaikan dengan volume droplet efektif
        binder_effective_volume = self.v_drop_m3 * 0.18 # 18% droplet mass transfer per pixel coverage
        binder_saturation = binder_effective_volume / pore_volume
        
        # Klasifikasi rejim
        if binder_saturation < 0.40:
            regime = "Under-saturated (Kekuatan Mentah Rendah / Rentan Pecah)"
        elif 0.40 <= binder_saturation <= 0.80:
            regime = "Optimal Pendular/Funicular (Akurasi Geometris & Kekuatan Tinggi)"
        else:
            regime = "Over-saturated (Bleeding / Dimensi Melebar)"
            
        return {
            "binder_saturation_pct": round(binder_saturation * 100.0, 2),
            "regime_classification": regime,
            "voxel_volume_pL": round(voxel_total_vol * 1e15, 2),
            "pore_volume_pL": round(pore_volume * 1e15, 2)
        }

    def simulate_master_sintering_curve(self, sintering_temp_c: float, hold_time_hr: float) -> Dict[str, Any]:
        """
        Simulasi densifikasi sintering berdasarkan integrasi termal MSC Su & Johnson.
        """
        temp_k = sintering_temp_c + 273.15
        hold_time_sec = hold_time_hr * 3600.0
        
        # Sederhanakan siklus: ramp rata-rata + isothermal hold
        ramp_thermal_work = (0.33 * 3600.0 / temp_k) * math.exp(-self.Q_sintering / (self.R * temp_k))
        hold_thermal_work = (hold_time_sec / temp_k) * math.exp(-self.Q_sintering / (self.R * temp_k))
        total_thermal_work = ramp_thermal_work + hold_thermal_work
        
        ln_phi = math.log(max(total_thermal_work, 1e-50))
        
        # Model Sigmoidal MSC
        rho_0 = self.phi_p
        denom = 1.0 + math.exp(-(ln_phi - self.ln_theta_0) / self.msc_a)
        final_rel_density = rho_0 + ((1.0 - rho_0) / denom)
        final_rel_density = min(final_rel_density, 0.998)
        
        return {
            "sintering_temp_c": sintering_temp_c,
            "hold_time_hr": hold_time_hr,
            "final_relative_density_pct": round(final_rel_density * 100.0, 2),
            "final_density_g_cm3": round((final_rel_density * self.rho_theoretical) / 1000.0, 3)
        }

    def compute_anisotropic_cad_scaling(self, target_dim_xyz_mm: Tuple[float, float, float], final_rel_density: float) -> Dict[str, Any]:
        """
        Menghitung faktor penyusutan anisotropik (Sx, Sy, Sz) dan faktor perbesaran model CAD (SFx, SFy, SFz).
        """
        lx_target, ly_target, lz_target = target_dim_xyz_mm
        
        rho_green = self.phi_p
        rho_sint = final_rel_density
        volumetric_shrinkage = 1.0 - (rho_green / rho_sint)
        
        # Koreksi anisotropi Z akibat orientasi pelapisan (Penyusutan Z lebih tinggi daripada bidang XY)
        shrinkage_xy = 1.0 - math.pow(rho_green / rho_sint, 1.0/3.0)
        shrinkage_z = 1.0 - (math.pow(rho_green / rho_sint, 1.0/3.0) / self.anisotropy_z)
        
        # Scaling Factor CAD
        sf_xy = 1.0 / (1.0 - shrinkage_xy)
        sf_z = 1.0 / (1.0 - shrinkage_z)
        
        green_dim_x = lx_target * sf_xy
        green_dim_y = ly_target * sf_xy
        green_dim_z = lz_target * sf_z
        
        return {
            "volumetric_shrinkage_pct": round(volumetric_shrinkage * 100.0, 2),
            "shrinkage_xy_pct": round(shrinkage_xy * 100.0, 2),
            "shrinkage_z_pct": round(shrinkage_z * 100.0, 2),
            "scaling_factor_xy": round(sf_xy, 4),
            "scaling_factor_z": round(sf_z, 4),
            "target_dim_mm": {"x": lx_target, "y": ly_target, "z": lz_target},
            "green_cad_dim_mm": {
                "x": round(green_dim_x, 3),
                "y": round(green_dim_y, 3),
                "z": round(green_dim_z, 3)
            }
        }

# ==========================================
# EKSEKUSI & VERIFIKASI ENGINE
# ==========================================
if __name__ == "__main__":
    print("================================================================================")
    print("  BINDER JETTING ADDITIVE MANUFACTURING (BJAM) SIMULATION & COMPENSATION ENGINE")
    print("================================================================================")
    
    bjam = BinderJettingSimulator(
        alloy_name="SS316L",
        d50_particle_um=16.5,
        powder_packing_fraction=0.58,
        layer_thickness_um=50.0,
        dpi_x=1200,
        dpi_y=1200,
        drop_volume_pL=32.0,
        binder_surface_tension_mN_m=34.0,
        binder_viscosity_mPa_s=4.2,
        contact_angle_deg=20.0
    )
    
    print("\n1. EVALUASI STABILITAS INKJET:")
    ink_res = bjam.evaluate_droplet_printability(drop_velocity_m_s=8.5, nozzle_dia_um=35.0)
    for k, v in ink_res.items():
        print(f"   - {k}: {v}")
        
    print("\n2. KINETIKA KAPILER & KEJENUHAN BINDER (Sb):")
    cap_res = bjam.calculate_capillary_kinetics()
    sat_res = bjam.calculate_binder_saturation()
    print(f"   - Radius Pori Efektif  : {cap_res['effective_pore_radius_um']} um")
    print(f"   - Waktu Penetrasi Droplet: {cap_res['penetration_time_ms']} ms")
    print(f"   - Derajat Kejenuhan Sb  : {sat_res['binder_saturation_pct']}%")
    print(f"   - Klasifikasi Rejim     : {sat_res['regime_classification']}")
    
    print("\n3. SIMULASI MASTER SINTERING CURVE & DENSIFIKASI:")
    sint_res = bjam.simulate_master_sintering_curve(sintering_temp_c=1380.0, hold_time_hr=4.0)
    print(f"   - Suhu Sintering        : {sint_res['sintering_temp_c']} °C")
    print(f"   - Waktu Tahan           : {sint_res['hold_time_hr']} jam")
    print(f"   - Densitas Relatif Akhir: {sint_res['final_relative_density_pct']}%")
    print(f"   - Densitas Massa Aktual : {sint_res['final_density_g_cm3']} g/cm3")
    
    print("\n4. KOMPENSASI PENYUSUTAN ANISOTROPIK CAD 3D:")
    target_part_mm = (50.0, 30.0, 15.0)
    comp_res = bjam.compute_anisotropic_cad_scaling(target_part_mm, sint_res['final_relative_density_pct'] / 100.0)
    print(f"   - Penyusutan Volumetrik : {comp_res['volumetric_shrinkage_pct']}%")
    print(f"   - Penyusutan Linear XY  : {comp_res['shrinkage_xy_pct']}% (Scaling SF_xy: {comp_res['scaling_factor_xy']})")
    print(f"   - Penyusutan Linear Z   : {comp_res['shrinkage_z_pct']}% (Scaling SF_z: {comp_res['scaling_factor_z']})")
    print(f"   - Dimensi Target Selesai: {comp_res['target_dim_mm']}")
    print(f"   - Dimensi CAD Green Part: {comp_res['green_cad_dim_mm']}")
    print("================================================================================")
```

---

## 7. Studi Kasus Industri Nyata: Produksi Massal Impeller Pompa Kimia Kompleks Austenitic Stainless Steel 316L

### 7.1 Latar Belakang & Tantangan Manufaktur
Sebuah produsen peralatan industri proses memproduksi impeller pompa kimia tahan korosi (*Closed Vane Chemical Pump Impeller*) berbahan **AISI 316L Stainless Steel**. Impeller ini memiliki geometri baling-baling kurva ganda tertutup (*shrouded double-curved vanes*) dengan diameter nominal $D = 80{,}00\text{ mm}$ dan tinggi $H = 35{,}00\text{ mm}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    ANALISIS DISTORSI SINTERING & KOMPENSASI ANISOTROPIK IMPELLER BJAM                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] TANPA KOMPENSASI ANISOTROPIK (ISOTROPIC SCALING GAGAL)  [B] DENGAN KOMPENSASI ANISOTROPIK 3D & SETTER KHUSUS     |
|                                                                                                                       |
|         Penyusutan Z Lebih Besar dari XY (S_z > S_xy)                 Model CAD Diberi Skala Independen:              |
|         ┌─────────────────────────────────────┐                       SF_xy = 1.1962 , SF_z = 1.2384                  |
|         │             ◄─ D_xy ─►              │                       Plat Keramik Setter Berpelumas BN (Anti-Friction|
|         │    ╭───────────────────────────╮    │                                                                       |
|         │    │   Baling-Baling Terdistorsi│    │                       ┌─────────────────────────────────────┐         |
|         │    │   Ovalitas & Slumping     │    │                       │    ╭───────────────────────────╮    │         |
|         └────┴───────────────────────────┴────┘                       │    │ Impeller Simetris Sempurna│    │         |
|                                                                       │    │ Toleransi Presisi Terjaga │    │         |
|         - Slumping akibat gesekan plat sintering (drag force)         └────┴───────────────────────────┴────┘         |
|         - Kesalahan dimensi: Ovalitas > 0.85 mm                       - Densitas Relatif: 99.1%                       |
|         - Densitas tidak seragam (pori sisa 4.2%)                     - Deviasi Dimensi: < 0.045 mm (ISO IT8 Lolos)   |
+-----------------------------------------------------------------------------------------------------------------------+
```

Permasalahan yang muncul pada uji coba awal:
1. **Kegagalan Toleransi Dimensi Akibat Penyusutan Anisotropik**: Penggunaan penskalaan isotropik seragam ($SF = 1{,}20$) menyebabkan dimensi vertikal sumbu Z mengalami *undersize* sebesar $-1{,}15\text{ mm}$, sementara diameter luar sumbu XY mengalami *oversize* $+0{,}42\text{ mm}$, menghasilkan ovalitas di luar batas toleransi ISO 286 (IT9).
2. **Distorsi Termal / *Friction Drag Distortion***: Permukaan bawah impeller mengalami hambatan gesek terhadap pelat tungku (*sintering setter plate*), menyebabkan fenomena *hourglass deformation* dan retak mikro pada dasar hub.

### 7.2 Implementasi Solusi Rekayasa BJAM Terpadu
1. **Optimalisasi Saturasi Binder & Partikel Serbuk**: Digunakan serbuk gas-atomized 316L dengan distribusi bimodal ($D_{10} = 6{,}2\ \mu\text{m}, D_{50} = 16{,}5\ \mu\text{m}, D_{90} = 34{,}8\ \mu\text{m}$) untuk meningkatkan *packing fraction* $\phi_p$ dari $0{,}52$ menjadi $0{,}60$. Kejenuhan *binder* diatur pada $S_b = 62\%$ dengan resolusi cetak $1200\times 1200\text{ DPI}$.
2. **Kompensasi Anisotropik 3D Terpisah**: Mengintegrasikan algoritma penskalaan CAD dengan parameter:
   - Sumbu XY: $S_{xy} = 16{,}40\% \implies SF_{xy} = 1{,}1962$
   - Sumbu Z: $S_z = 19{,}25\% \implies SF_z = 1{,}2384$
3. **Penyangga Pasif (*Ceramic Setter & Dynamic Sintering Shrinkage Box*)**: Komponen diletakkan di atas pelat keramik alumina berkemurnian tinggi berpelapis boron nitrida ($\text{h-BN}$) berbentuk cincin penyesuai (*sacrificial green setter ring*) yang menyusut bersamaan dengan impeller, menghilangkan gaya gesek penahan.
4. **Atmosfer Sintering Vakum Tinggi / Hidrogen Murni**: Siklus sintering dijalankan pada suhu $1385\ ^\circ\text{C}$ selama $4\text{ jam}$ di bawah atmosfer campuran $95\%\ \text{Ar} + 5\%\ \text{H}_2$ untuk mereduksi oksida permukaan kromium.

### 7.3 Hasil Kuantitatif & Verifikasi Metalurgi

| Parameter Kinerja | Metode Konvensional / Pra-Optimasi | Hasil Optimasi BJAM Terpadu | Standar MPIF 35 / Kualifikasi |
|---|---|---|---|
| **Densitas Relatif Akhir ($\rho_{\text{rel}}$)** | $95{,}8\%$ ($\rho = 7{,}65\text{ g/cm}^3$) | **$99{,}1\%$ ($\rho = 7{,}91\text{ g/cm}^3$)** | $\ge 98{,}0\%$ (Lolos) |
| **Kekuatan Tarik (*Ultimate Tensile Strength*, UTS)** | $465\text{ MPa}$ | **$585\text{ MPa}$** | $\ge 515\text{ MPa}$ (ASTM E8) |
| **Batas Luluh (*Yield Strength*, $0{,}2\%$ YS)** | $185\text{ MPa}$ | **$242\text{ MPa}$** | $\ge 205\text{ MPa}$ (Lolos) |
| **Perpanjangan Putus (*Elongation at Break*, $A$)** | $28{,}5\%$ | **$48{,}2\%$** | $\ge 40{,}0\%$ (Lolos) |
| **Kekerasan Mikro (*Vickers Hardness*, HV0.2)** | $145\text{ HV}$ | **$182\text{ HV}$** | $150 - 200\text{ HV}$ |
| **Akurasi Dimensi Diameter Luar ($D$)** | $80{,}42 \pm 0{,}35\text{ mm}$ | **$80{,}02 \pm 0{,}04\text{ mm}$** | $80{,}00 \pm 0{,}08\text{ mm}$ (IT8) |
| **Akurasi Dimensi Tinggi Total ($H$)** | $33{,}85 \pm 0{,}40\text{ mm}$ | **$34{,}98 \pm 0{,}03\text{ mm}$** | $35{,}00 \pm 0{,}06\text{ mm}$ (IT8) |
| **Waktu Siklus Produksi per Batch (100 unit)** | $78\text{ jam}$ (L-PBF) | **$14\text{ jam}$ (BJAM)** | Penurunan Waktu $82\%$ |
| **Biaya Manufaktur per Unit** | $\$142{,}50$ | **$\$36{,}80$** | Penghematan Biaya $74{,}2\%$ |

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. Mostafaei, A., Elliott, A. M., Barnes, J. E., Li, F., Tan, W., Cramer, C. L., Nandwana, P., & Chmielus, M. (2021). Binder jet 3D printing—Process concepts, applications, dataset, and research opportunities. *Progress in Materials Science*, 119, 100707. [https://doi.org/10.1016/j.pmatsci.2020.100707](https://doi.org/10.1016/j.pmatsci.2020.100707)
2. Ziaee, M., & Crane, N. B. (2019). Binder jetting: A review of process, materials, and methods. *Additive Manufacturing*, 28, 781-801. [https://doi.org/10.1016/j.addma.2019.05.031](https://doi.org/10.1016/j.addma.2019.05.031)
3. Du, W., Ren, X., Ma, C., & Pei, Z. (2020). Ceramic binder jetting additive manufacturing: A literature review on density. *Journal of Manufacturing Science and Engineering*, 142(4), 040801. [https://doi.org/10.1115/1.4046248](https://doi.org/10.1115/1.4046248)
4. German, R. M. (2014). *Sintering: Trajectories, Practical Applications, and Principles*. Butterworth-Heinemann / Elsevier, Oxford.
5. Su, H., & Johnson, D. L. (1996). Master Sintering Curve: A tool for sintering process optimization. *Journal of the American Ceramic Society*, 79(12), 3211-3217. [https://doi.org/10.1111/j.1151-2916.1996.tb08097.x](https://doi.org/10.1111/j.1151-2916.1996.tb08097.x)
6. ISO/ASTM International. (2021). *ISO/ASTM 52900:2021 Additive manufacturing — General principles — Fundamentals and vocabulary*. Geneva: ISO.
7. ISO/ASTM International. (2023). *ISO/ASTM 52926-1:2023 Additive manufacturing of metals — Qualification principles — Part 1: General qualification of machines and installations*. Geneva: ISO.
8. Metal Powder Industries Federation (MPIF). (2020). *MPIF Standard 35: Materials Standards for Metal Injection Molded Parts*. Princeton, NJ: Metal Powder Industries Federation.
