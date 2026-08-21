# Modul 624: Constrained Groove Pressing (CGP) & Corrugated Die Severe Plastic Deformation: Mekanika Deformasi Geser Murni Terkendala, Pemodelan Regangan Plastis Kumulatif Siklis, Rekayasa Butir Ultra-Halus (UFG), dan Homogenitas Sifat Mekanis Lembaran Logam (ASTM E8/E8M, ISO 6892-1, ASTM E384 & DIN EN 10130)

## 1. Pengantar & Konteks Industri: Severe Plastic Deformation Khusus Lembaran Logam

Dalam industri manufaktur presisi tinggi, struktur otomotif ringan (*automotive lightweighting*), baterai pack casing, dan lembaran kedirgantaraan, peningkatan rasio kekuatan-terhadap-berat (*strength-to-weight ratio*) merupakan target rekayasa utama. Metode konvensional untuk memperkuat logam lembaran biasanya mengandalkan pengerolan dingin (*cold rolling*), namun metode ini menyebabkan penipisan ketebalan yang drastis serta penurunan keuletan (*ductility*) yang sangat tajam akibat terbentuknya saturasi dislokasi yang tidak terarah.

Di sisi lain, teknik *Severe Plastic Deformation* (SPD) seperti *Equal Channel Angular Pressing* (ECAP) dan *High-Pressure Torsion* (HPT) tidak kompatibel untuk produk lembaran lembaran luas (*sheet products*) karena batasan geometri ruang cetakan tertutup yang kaku.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       EVOLUSI TEKNOLOGI SEVERE PLASTIC DEFORMATION (SPD) UNTUK LEMBARAN                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   METODE SPD BILLET/BATANGAN                  METODE SPD LEMBARAN KONTINU / QUASI-KONTINU                             |
|   ┌────────────────────────────────┐          ┌──────────────────────────────────────────────────────────┐            |
|   │ Equal Channel Angular Pressing │          │ Accumulative Roll Bonding (ARB)                          │            |
|   │ (ECAP) - Billet Silinder Kecil │          │ - Pengurangan tebal 50% + Roll Bonding berulang          │            |
|   ├────────────────────────────────┤          │ - Butuh preparasi permukaan kawat sikat & suhu hangat    │            |
|   │ High-Pressure Torsion (HPT)    │          ├──────────────────────────────────────────────────────────┤            |
|   │ - Sampel Cakram Tipis Koin     │          │ Constrained Groove Pressing (CGP)                        │            |
|   │ - Terbatas Skala Laboratorium  │          │ - Dimensi dimensi lembaran tetap konstan (Net-Shape)     │            |
|   └────────────────────────────────┘          │ - Tidak ada penyikatan kawat / degradasi ikatan lamina   │            |
|                                               │ - Deformasi geser murni siklis pada cetakan beralur      │            |
|                                               │ - Skalabilitas langsung pada mesin pres hidrolik standar │            |
|                                               └──────────────────────────────────────────────────────────┘            |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Constrained Groove Pressing (CGP)**, yang pertama kali diperkenalkan oleh Shin, Park, dan rekan kerja, merupakan terobosan metode SPD yang dirancang khusus untuk memproses material logam lembaran (*sheet metals*) tanpa mengubah dimensi geometris makroskopisnya secara permanen (*near-net-shape processing*).

Prinsip fundamental CGP:
1. Lembaran logam ditempatkan di antara sepasang cetakan beralur bersudut $\theta = 45^\circ$ (*corrugated/grooved dies*). Rongga cetakan didesain dengan batasan dinding penahan (*constraint walls*) yang mencegah pemanjangan lateral (*lateral broadening*) dan penipisan lembaran.
2. Ketika cetakan atas menekan lembaran, bagian lembaran yang berada pada bidang miring alur mengalami deformasi geser murni (*pure shear deformation*), sementara bagian lembaran pada daerah datar tetap tidak terdeformasi (*undeformed*).
3. Lembaran kemudian diratakan kembali menggunakan sepasang cetakan datar (*flat dies*), memberikan regangan geser balik pada zona yang sama.
4. Lembaran diputar $180^\circ$ di bidang horizontal (*in-plane rotation*), lalu diproses kembali melalui cetakan bergelombang dan cetakan datar. Setelah 4 langkah deformasi ini selesai (1 siklus penuh CGP), seluruh volume lembaran menerima distribusi regangan plastis ekuivalen yang seragam sebesar $\bar{\varepsilon} \approx 1{,}16$.

Melalui pengulangan siklus CGP ($N = 1, 2, 3, 4+$), terjadi penumpukan kerapatan dislokasi masif ($\rho_{\text{dis}} > 10^{15}\text{ m}^{-2}$) yang memicu sub-butir selular dan batas butir sudut tinggi (*high-angle grain boundaries* / HAGBs), mereduksi ukuran butir kristal matriks dari puluhan mikrometer menjadi skala ultra-halus (*ultrafine grain* / UFG, $d < 500\text{ nm}$).

Standar internasional yang menjadi landasan validasi dan pengujian karakteristik CGP meliputi:
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ISO 6892-1**: *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **ISO 14577-1**: *Metallic materials — Instrumented indentation test for hardness and materials parameters*.
- **DIN EN 10130**: *Cold rolled low carbon steel flat products for cold forming*.

---

## 2. Kinematika Deformasi 4-Langkah & Geometri Cetakan CGP

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                KINEMATIKA 4-TAHAP SATU SIKLUS PENUH PROSES CGP                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  TAHAP 1: FIRST GROOVE PRESSING (Pengepresan Alur Pertama)                                                            |
|          Die Bergelombang Atas (Sudut theta = 45 deg, Lebar Gigi t)                                                   |
|          ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼                                                     |
|          ┌───┐       ┌───┐       ┌───┐       ┌───┐                                                            |
|          │   │  \_/  │   │  \_/  │   │  \_/  │   │   <- Zona Geser Murni (Sheared Zone A: eps = 0.58)                 |
|          └───┴───────┴───┴───────┴───┴───────┴───┘   <- Zona Datar Tak-Terkoreksi (Unsheared Zone B: eps = 0.0)       |
|                                                                                                                       |
|  TAHAP 2: FIRST FLAT PRESSING (Pengepresan Datar Pertama)                                                             |
|          Die Datar Atas (Pengepresan Balik / Reverse Shear)                                                           |
|          ═════════════════════════════════════════════════════════                                                     |
|          [ Zona A Tergeser Balik: eps = 1.16 ] [ Zona B Tetap Datar: eps = 0.00 ]                                     |
|          ═════════════════════════════════════════════════════════                                                     |
|                                                                                                                       |
|  TAHAP 3: ROTASI 180 DERAJAT + SECOND GROOVE PRESSING (Pengepresan Alur Kedua)                                        |
|          Lembaran diputar 180° horizontal sehingga Zona B kini berada di bidang miring alur die.                      |
|          ┌───┐       ┌───┐       ┌───┐       ┌───┐                                                            |
|          │   │  \_/  │   │  \_/  │   │  \_/  │   │   <- Zona B Mengalami Geser (Sheared Zone B: eps = 0.58)           |
|          └───┴───────┴───┴───────┴───┴───────┴───┘   <- Zona A Posisi Datar (eps tetap 1.16)                         |
|                                                                                                                       |
|  TAHAP 4: SECOND FLAT PRESSING (Pengepresan Datar Kedua)                                                              |
|          Die Datar Atas Menekan Lembaran Hingga Rata Sempurna Kembali                                                 |
|          ═════════════════════════════════════════════════════════                                                     |
|          [ Zona A: Regangan Akumulasi eps = 1.16 ] [ Zona B: Regangan Akumulasi eps = 1.16 ]                          |
|          HASIL AKHIR SIKLUS 1: 100% Volume Lembaran Memiliki Regangan Seragam eps = 1.155!                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Desain Geometri Cetakan Alur (Die Design Geometry)
Cetakan alur bergelombang memiliki profil simetris periodik dengan parameter kunci:
- $t_0$ = Ketebalan nominal lembaran logam awal ($\text{mm}$)
- $t$ = Kedalaman alur cetakan ($t = t_0$)
- $w$ = Lebar puncak gelombang (*tooth width*) dan lebar lembah (*groove width*), di mana $w = t_0$ untuk memastikan kondisi regangan geser murni seragam.
- $\theta$ = Sudut kemiringan alur die ($\theta = 45^\circ$ pada desain standar Shin).

### 2.2 Penurunan Regangan Geser Murni (Pure Shear Strain Mechanics)
Pada Tahap 1, kemiringan alur memicu deformasi geser pada zona miring (*inclined region*). Sudut distorsi geser $\gamma_1$ dihitung dari rasio geometris perpindahan translasi terhadap ketebalan:
$$\gamma_1 = \tan(\theta) = \tan(45^\circ) = 1{,}0$$

Regangan geser rekayasa pada arah bidang geser adalah $\gamma_1 = 1{,}0$. Berdasarkan kriteria leleh von Mises untuk keadaan tegangan geser murni ($\sigma_{12} = \tau$, $\sigma_{11} = \sigma_{22} = \sigma_{33} = 0$), regangan plastis ekuivalen $\bar{\varepsilon}_1$ pada Tahap 1 dirumuskan sebagai:
$$\bar{\varepsilon}_1 = \frac{\gamma_1}{\sqrt{3}} = \frac{1{,}0}{\sqrt{3}} \approx 0{,}5773$$

Pada Tahap 2, die datar menekan lembaran kembali ke bentuk datar semula, membalikkan deformasi geser (*reverse shear deformation*) sebesar $\gamma_2 = 1{,}0$. Regangan plastis kumulatif pada zona terdeformasi menjadi:
$$\bar{\varepsilon}_{\text{zone\_A}} = \bar{\varepsilon}_1 + \bar{\varepsilon}_2 = \frac{1{,}0}{\sqrt{3}} + \frac{1{,}0}{\sqrt{3}} = \frac{2}{\sqrt{3}} \approx 1{,}1547$$

Pada tahap ini, separuh volume lembaran (Zona A) memiliki regangan $\bar{\varepsilon} = 1{,}155$, sedangkan separuh lainnya (Zona B) belum menerima regangan ($\bar{\varepsilon} = 0$).

Pada Tahap 3 dan 4, rotasi horizontal $180^\circ$ memindahkan Zona B ke bidang alur miring dan meratakannya kembali, sehingga Zona B menerima regangan:
$$\bar{\varepsilon}_{\text{zone\_B}} = \frac{2}{\sqrt{3}} \approx 1{,}1547$$

### 2.3 Formulasi Regangan Plastis Terakumulasi Total Setelah $N$ Siklus
Setelah $N$ siklus penuh CGP diselesaikan, seluruh volume lembaran telah mengalami regangan geser murni terdistribusi seragam:
$$\bar{\varepsilon}_{\text{total}}(N) = N \cdot \left( \frac{4}{\sqrt{3}} \tan\theta \right) = N \cdot \frac{4}{\sqrt{3}} \approx 2{,}3094 \cdot N \quad (\text{untuk 2 sub-lintasan per siklus penuh})$$

Secara spesifik, per siklus penuh (4 langkah pengepresan):
$$\bar{\varepsilon}_{\text{cycle}} = \frac{4}{\sqrt{3}} \cdot \frac{t}{w} = \frac{4}{\sqrt{3}} \approx 1{,}155 \quad (\text{dengan rasio } t/w = 1)$$
$$\bar{\varepsilon}_{\text{total}}(N) = 1{,}1547 \cdot N$$

Setelah $N = 4$ siklus penuh CGP, regangan plastis terakumulasi mencapai $\bar{\varepsilon}_{\text{total}} \approx 4{,}62$, yang menempatkan lembaran pada rezim *Severe Plastic Deformation* murni tanpa adanya reduksi ketebalan lembaran total.

---

## 3. Metalurgi Fisik: Evolusi Kerapatan Dislokasi, Sub-Butir Selular & Relasi Hall-Petch

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    TRANSFORMASI MIKROSTRUKTUR SEPANJANG SIKLUS CGP (UFG EVOLUTION)                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  KONDISI AWAL (N = 0)                   SIKLUS AWAL (N = 1 - 2)                 SIKLUS LANJUTAN (N = 3 - 4+)          |
|  ┌─────────────────────────┐            ┌─────────────────────────┐             ┌─────────────────────────┐           |
|  │ Butir Kasar Rekristalisasi│           │ Dinding Dislokasi Lebat │             │ Rekristalisasi Dinamis  │          |
|  │ d_0 = 30 - 80 um        │ ───────►   │ Pembentukan Sub-Butir   │ ────────►   │ Butir Nano Ekuaksial    │          |
|  │ Densitas Dislokasi:     │  CGP Pass  │ Selular d_sub = 1 - 2 um│   CGP Pass  │ d_ufg = 200 - 450 nm    │          |
|  │ rho ~ 10^11 m^-2        │            │ rho ~ 10^14 m^-2        │             │ Fraksi HAGB > 70%       │          |
|  │ Batas Butir Sudut Tinggi│            │ Dominasi LAGB (mis < 15°)│            │ rho ~ 10^15 m^-2        │          |
|  └─────────────────────────┘            └─────────────────────────┘             └─────────────────────────┘           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Model Kinetika Kerapatan Dislokasi (Model Kocks-Mecking-Estrin)
Evolusi kerapatan dislokasi total $\rho$ terhadap regangan plastis kumulatif $\bar{\varepsilon}$ merupakan hasil kompetisi antara laju akumulasi dislokasi akibat penyimpanan geometri (*dislocation storage / work hardening*) dan laju anihilasi dislokasi dinamis (*dynamic recovery*):
$$\frac{d\rho}{d\bar{\varepsilon}} = M \left( \frac{k_1 \sqrt{\rho}}{b} - k_2 \rho \right)$$

Di mana:
- $M$ = Faktor orientasi Taylor ($M \approx 3{,}06$ untuk polikristal FCC/BCC)
- $b$ = Vektor Burgers kisi kristal material ($\text{m}$)
- $k_1$ = Koefisien akumulasi dislokasi non-dimensi
- $k_2$ = Koefisien pemulihan dinamis (*dynamic recovery coefficient*) yang bergantung pada energi patahan tumpukan (*stacking fault energy* / SFE) dan temperatur operasi.

Integrasi analitis menghasilkan profil saturasi kerapatan dislokasi:
$$\rho(\bar{\varepsilon}) = \left[ \frac{k_1}{k_2 b} + \left( \sqrt{\rho_0} - \frac{k_1}{k_2 b} \right) e^{-\frac{1}{2} M k_2 \bar{\varepsilon}} \right]^2$$

Kerapatan dislokasi saturasi maksimum pada regangan tinggi ($\bar{\varepsilon} \to \infty$) adalah:
$$\rho_{\text{sat}} = \left( \frac{k_1}{k_2 b} \right)^2$$

### 3.2 Penyempurnaan Butir Hall-Petch & Kekuatan Tarik
Penurunan ukuran butir rata-rata $d$ dari skala mikro ke skala sub-mikron meningkatkan batas luluh material ($\sigma_y$) secara dramatis sesuai persamaan Hall-Petch:
$$\sigma_y = \sigma_0 + \frac{k_y}{\sqrt{d}}$$

Di mana:
- $\sigma_0$ = Tegangan gesekan kisi kristal (*lattice friction stress*)
- $k_y$ = Koefisien penguatan batas butir Hall-Petch ($\text{MPa}\cdot\mu\text{m}^{1/2}$)
- $d$ = Diameter butir rata-rata ($\mu\text{m}$)

Evolusi penghalusan ukuran butir sebagai fungsi regangan kumulatif $\bar{\varepsilon}$ sering dimodelkan melalui persamaan eksponensial empiris:
$$d(\bar{\varepsilon}) = d_{\text{sat}} + (d_0 - d_{\text{sat}}) e^{-\kappa \bar{\varepsilon}}$$

Di mana $d_{\text{sat}}$ adalah ukuran butir saturasi minimum yang dapat dicapai pada temperatur pemrosesan ($d_{\text{sat}} \approx 200 - 450\text{ nm}$ untuk aluminium dan tembaga pada suhu ruang).

---

## 4. Analisis Gaya Pengepresan & Pemodelan Beban Mesin Pres Hidrolik

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       DISTRIBUSI TEGANGAN DAN GAYA PENGEPRESAN PADA CETAKAN CGP                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Gaya Mesin Pres Total (F_total)                                                                               |
|         ═══════════════════════════════▼═══════════════════════════════                                               |
|         ┌─────────────────────────────────────────────────────────────┐                                               |
|         │ DIE ATAS BERALUR (PANJANG L, LEBAR W, JUMLAH ALUR n_g)      │                                               |
|         └────────┬───────────┬───────────┬───────────┬────────┬───────┘                                               |
|                  │  \     /  │  \     /  │  \     /  │        │                                                       |
|                  ▼   \   /   ▼   \   /   ▼   \   /   ▼        ▼                                                       |
|         ═══════════════════════════════════════════════════════════════                                               |
|         Lembaran Logam Terjepit Dinding Pembatas (Constrained Walls)                                                  |
|         ═══════════════════════════════════════════════════════════════                                               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Gaya Pengepresan Alur (*Groove Pressing Force*)
Beban vertikal teoritis $F_{\text{groove}}$ yang dibutuhkan untuk mendeformasi lembaran berdimensi panjang $L$ dan lebar $W$ dengan $n_g$ pasang alur diturunkan dari metode batas atas (*upper bound method*) dan kesetimbangan kerja plastis:
$$F_{\text{groove}} = \left( \frac{2}{\sqrt{3}} \sigma_{\text{flow}}(\bar{\varepsilon}) \cdot A_{\text{shear}} \right) \cdot (1 + \mu \cot\theta) + F_{\text{friction, wall}}$$

Di mana:
- $\sigma_{\text{flow}}(\bar{\varepsilon}) = K \bar{\varepsilon}^n$ (Tegangan alir material Hollomon)
- $A_{\text{shear}} = n_g \cdot w \cdot L \cdot \frac{1}{\cos\theta}$ (Luas total bidang geser)
- $\mu$ = Koefisien gesekan antara permukaan die dan lembaran ($\mu \approx 0{,}08 - 0{,}15$ dengan pelumasan $\text{MoS}_2$)
- $F_{\text{friction, wall}}$ = Gaya gesekan kontak dinding pembatas penahan ekspansi lateral.

### 4.2 Gaya Pengepresan Datar (*Flat Pressing Force*)
Pada tahap penekanan datar (*flattening pass*), gaya pengepresan $F_{\text{flat}}$ umumnya lebih tinggi karena bidang kontak mencakup $100\%$ luas proyeksi lembaran di bawah kondisi tegangan tekan multiaksial terkekang:
$$F_{\text{flat}} = \frac{2}{\sqrt{3}} \sigma_{\text{flow}}(\bar{\varepsilon}) \cdot (L \cdot W) \cdot \left( 1 + \frac{\mu L}{4 t_0} \right)$$

---

## 5. Algoritma Perhitungan & Python Solver: CGP Multi-Pass Analyzer

Berikut adalah implementasi Python mandiri berstandar industri untuk memodelkan:
1. Distribusi regangan inkremental 4-tahap pada Zona A dan Zona B per siklus CGP.
2. Evolusi kerapatan dislokasi (Kocks-Mecking-Estrin) dan penghalusan ukuran butir nano.
3. Estimasi peningkatan batas luluh, kekuatan tarik (UTS), kekerasan Vickers, dan kebutuhan tonase mesin pres hidrolik.

```python
"""
RuangTI Constrained Groove Pressing (CGP) Simulator & Dislocation Mechanics Engine
Standar Komputasi: ASTM E8/E8M, ISO 6892-1, ASTM E384 & DIN EN 10130
"""

import math
from typing import Dict, List, Any

class ConstrainedGroovePressingSimulator:
    def __init__(
        self,
        sheet_length_mm: float = 120.0,       # Panjang lembaran (mm)
        sheet_width_mm: float = 80.0,         # Lebar lembaran (mm)
        sheet_thickness_mm: float = 2.0,      # Tebal lembaran t0 (mm)
        groove_width_mm: float = 2.0,         # Lebar alur die w (mm)
        groove_depth_mm: float = 2.0,         # Kedalaman alur die t (mm)
        groove_angle_deg: float = 45.0,       # Sudut kemiringan alur theta (deg)
        die_friction_coeff: float = 0.10,     # Koefisien gesek die-sheet (MoS2)
        initial_yield_stress_MPa: float = 115.0, # Batas luluh awal sigma_0 (e.g. Pure Al / Al 1050)
        hollomon_K_MPa: float = 190.0,        # Koefisien kekuatan Hollomon K (MPa)
        hollomon_n: float = 0.25,             # Eksponen pengerasan regangan n
        initial_grain_size_um: float = 45.0,  # Ukuran butir awal d0 (um)
        sat_grain_size_um: float = 0.35,      # Ukuran butir saturasi UFG d_sat (um)
        grain_refine_rate_kappa: float = 0.75,# Laju kinetika penghalusan butir
        hall_petch_ky_MPa_sqrt_um: float = 68.0, # Koefisien Hall-Petch ky (MPa.um^0.5)
        burgers_vector_nm: float = 0.286,     # Vektor Burgers b (nm)
        initial_disloc_density_m2: float = 1.0e11, # Kerapatan dislokasi awal rho0 (m^-2)
        km_k1: float = 0.045,                 # Parameter akumulasi dislokasi Kocks-Mecking k1
        km_k2: float = 2.8                    # Parameter pemulihan dinamis k2
    ):
        self.L = sheet_length_mm
        self.W = sheet_width_mm
        self.t0 = sheet_thickness_mm
        self.w = groove_width_mm
        self.t_g = groove_depth_mm
        self.theta_rad = math.radians(groove_angle_deg)
        self.mu = die_friction_coeff
        self.sigma_y0 = initial_yield_stress_MPa
        self.K = hollomon_K_MPa
        self.n = hollomon_n
        self.d0 = initial_grain_size_um
        self.d_sat = sat_grain_size_um
        self.kappa = grain_refine_rate_kappa
        self.ky = hall_petch_ky_MPa_sqrt_um
        self.b = burgers_vector_nm * 1e-9
        self.rho0 = initial_disloc_density_m2
        self.k1 = km_k1
        self.k2 = km_k2
        self.M = 3.06  # Taylor factor for isotropic FCC polycrystal

    def calculate_single_pass_strain(self) -> Dict[str, float]:
        """Menghitung regangan geser dan ekuivalen von Mises per tahap."""
        gamma = math.tan(self.theta_rad) * (self.t_g / self.w)
        eps_step = gamma / math.sqrt(3.0)
        eps_cycle_homogeneous = 2.0 * eps_step * 2.0 / 2.0  # Total per full cycle = 4 * eps_step / 2 = 1.1547
        return {
            "shear_strain_gamma": gamma,
            "equivalent_strain_per_step": eps_step,
            "homogeneous_strain_per_cycle": 2.0 * eps_step
        }

    def simulate_cgp_cycles(self, num_cycles: int = 4) -> List[Dict[str, Any]]:
        """
        Simulasi komputasi evolusi mikrostruktur, sifat mekanis, dan gaya pres untuk N siklus.
        """
        strains = self.calculate_single_pass_strain()
        eps_per_cycle = strains["homogeneous_strain_per_cycle"]
        num_grooves = int(self.W / (2.0 * self.w))

        results: List[Dict[str, Any]] = []

        # Kondisi Awal (Siklus 0)
        results.append({
            "cycle": 0,
            "accumulated_strain": 0.0,
            "grain_size_um": self.d0,
            "dislocation_density_m2": self.rho0,
            "yield_strength_MPa": self.sigma_y0,
            "uts_strength_MPa": self.sigma_y0 * 1.45,
            "vickers_hardness_HV": self.sigma_y0 / 3.2,
            "groove_press_force_kN": 0.0,
            "flat_press_force_kN": 0.0,
            "structural_regime": "Coarse-Grained Polycrystal (CG)"
        })

        for N in range(1, num_cycles + 1):
            eps_cum = N * eps_per_cycle

            # 1. Evolusi Ukuran Butir (Eksponensial Refinement)
            d_curr = self.d_sat + (self.d0 - self.d_sat) * math.exp(-self.kappa * eps_cum)

            # 2. Kerapatan Dislokasi Kocks-Mecking-Estrin
            term_const = self.k1 / (self.k2 * self.b)
            rho_curr = (term_const + (math.sqrt(self.rho0) - term_const) * math.exp(-0.5 * self.M * self.k2 * eps_cum)) ** 2

            # 3. Peningkatan Kekuatan Batas Luluh (Hall-Petch + Taylor Dislocation Forest)
            sigma_hp = self.ky / math.sqrt(d_curr)
            alpha_taylor = 0.3
            G_shear_modulus_MPa = 26000.0  # Modulus geser aluminium ~26 GPa
            sigma_disloc = self.M * alpha_taylor * G_shear_modulus_MPa * self.b * math.sqrt(rho_curr)
            
            sigma_y_curr = self.sigma_y0 + (sigma_hp - self.ky / math.sqrt(self.d0)) + (sigma_disloc / 1e6)
            
            # Tegangan Alir Hollomon & UTS
            flow_stress = self.K * (max(eps_cum, 0.01) ** self.n)
            uts_curr = max(sigma_y_curr * 1.12, flow_stress * 1.15)
            
            # Estimasi Kekerasan Vickers (Tabor's Relationship HV ~ sigma_flow / 3)
            hv_curr = (sigma_y_curr + uts_curr) / (2.0 * 3.1)

            # 4. Perhitungan Kebutuhan Gaya Mesin Pres Hidrolik
            # Luas Geser Proyeksi Alur
            A_shear_mm2 = num_grooves * self.w * self.L * (1.0 / math.cos(self.theta_rad))
            F_groove_N = (2.0 / math.sqrt(3.0) * (flow_stress * 1e6) * (A_shear_mm2 * 1e-6)) * (1.0 + self.mu / math.tan(self.theta_rad))
            
            # Luas Kontak Datar Proyeksi Total
            A_proj_mm2 = self.L * self.W
            F_flat_N = (2.0 / math.sqrt(3.0) * (flow_stress * 1e6) * (A_proj_mm2 * 1e-6)) * (1.0 + (self.mu * self.L) / (4.0 * self.t0))

            regime = "Ultrafine Grained (UFG)" if d_curr < 1.0 else "Sub-Microcrystalline"

            results.append({
                "cycle": N,
                "accumulated_strain": eps_cum,
                "grain_size_um": d_curr,
                "dislocation_density_m2": rho_curr,
                "yield_strength_MPa": sigma_y_curr,
                "uts_strength_MPa": uts_curr,
                "vickers_hardness_HV": hv_curr,
                "groove_press_force_kN": F_groove_N / 1e3,
                "flat_press_force_kN": F_flat_N / 1e3,
                "structural_regime": regime
            })

        return results

if __name__ == "__main__":
    cgp = ConstrainedGroovePressingSimulator(
        sheet_length_mm=150.0,
        sheet_width_mm=100.0,
        sheet_thickness_mm=2.0,
        groove_width_mm=2.0,
        groove_depth_mm=2.0,
        groove_angle_deg=45.0,
        die_friction_coeff=0.08,
        initial_yield_stress_MPa=110.0,
        hollomon_K_MPa=185.0,
        hollomon_n=0.22,
        initial_grain_size_um=50.0,
        sat_grain_size_um=0.32,
        hall_petch_ky_MPa_sqrt_um=65.0
    )

    history = cgp.simulate_cgp_cycles(num_cycles=4)

    print("==========================================================================================================")
    print("                     HASIL SIMULASI CONSTRAINED GROOVE PRESSING (CGP) MULTI-PASS                         ")
    print("==========================================================================================================")
    print(f"{'Siklus':<7} | {'Regangan':<9} | {'Ukuran Butir':<13} | {'Dislokasi (m^-2)':<17} | {'Yield (MPa)':<11} | {'UTS (MPa)':<10} | {'HV':<6} | {'F_flat (kN)':<11}")
    print("----------------------------------------------------------------------------------------------------------")
    for r in history:
        print(f"{r['cycle']:<7} | {r['accumulated_strain']:<9.3f} | {r['grain_size_um']:<13.3f} um | {r['dislocation_density_m2']:<17.2e} | {r['yield_strength_MPa']:<11.1f} | {r['uts_strength_MPa']:<10.1f} | {r['vickers_hardness_HV']:<6.1f} | {r['flat_press_force_kN']:<11.1f}")
    print("==========================================================================================================")
```

---

## 6. Studi Kasus Industri: Fabrikasi Lembaran Paduan Aluminium AA1050 & AA5052 untuk Panel Pelindung Baterai Kendaraan Listrik

### 6.1 Latar Belakang Masalah
Dalam perancangan modul pelindung benturan bawah (*underbody battery ballistic shield*) kendaraan listrik, insinyur membutuhkan lembaran logam paduan aluminium dengan ketebalan presisi $2{,}0\text{ mm}$ yang memiliki kekuatan luluh tinggi ($\sigma_y > 220\text{ MPa}$) untuk menahan penetrasi puing jalan raya, tetapi tetap mempertahankan integritas bentuk lembaran datar tanpa penambahan bobot paduan tembaga/seng yang rentan korosi galvanik.

Penggunaan proses pengerolan dingin konvensional (*cold rolling*) dengan reduksi $75\%$ menghasilkan lembaran berkekuatan tinggi, namun memicu:
1. Anisotropi planar yang parah ($\Delta r > 0{,}65$) yang memicu *earing defect* saat pembentukan sekunder.
2. Penurunan drastis nilai elongasi seragam ($A < 3\%$), mengakibatkan lembaran rapuh dan pecah saat menerima beban impak kejut.

### 6.2 Penerapan Protokol Constrained Groove Pressing (CGP)
Pabrik menerapkan proses CGP $N = 3$ siklus pada lembaran aluminium komersial AA1050 ($150 \times 100 \times 2{,}0\text{ mm}$) menggunakan mesin pres hidrolik 250-ton dengan pelumasan film kering disulfida molibdenum ($\text{MoS}_2$):
- **Desain Die**: Profil beralur $45^\circ$, lebar gigi $w = 2{,}0\text{ mm}$, kedalaman alur $t = 2{,}0\text{ mm}$.
- **Kecepatan Pengepresan**: $v_{\text{press}} = 2\text{ mm/s}$ (menjaga laju regangan kuasi-statis dan mencegah kenaikan suhu berlebih).
- **Protokol Rotasi**: Rotasi lembaran $180^\circ$ di bidang datar dilakukan setiap setelah penekanan datar Tahap 2 selesai.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 KOMPARASI PROFIL SIFAT MEKANIS: RAW SHEET VS COLD ROLLED VS CGP 3-CYCLES                              |
+-----------------------------------------------------------------------------------------------------------------------+
| Properti Pengujian (ASTM E8 / E384)          Kondisi Awal (As-Received)   Pengerolan Dingin 75%   CGP 3 Siklus (UFG)  |
+-----------------------------------------------------------------------------------------------------------------------+
| Ukuran Butir Rata-rata (d)                   48.5 mikrometer              Pipih Terdistorsi       0.42 mikrometer     |
| Batas Luluh / Yield Strength (sigma_y)       108 MPa                      215 MPa                 242 MPa (+124%)     |
| Kekuatan Tarik Maksimum (UTS)                142 MPa                      238 MPa                 278 MPa (+95.8%)    |
| Kekerasan Mikro Vickers (HV 0.1)             36.5 HV                      68.0 HV                 79.2 HV (+117%)     |
| Perpanjangan Putus / Elongation (A)          34.0%                        2.8% (Getas)            14.5% (Tangguh)     |
| Variasi Ketebalan Lembaran Akhir             2.00 mm (Baseline)           0.50 mm (Menipis -75%)  2.00 mm (+/-0.02 mm)|
| Koefisien Anisotropi Planar (Delta r)        0.12                         0.74 (Sangat Anisotrop) 0.08 (Sangat Isotrop|
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.3 Analisis Ketangguhan Impak & Kerapatan Butir
Karakterisasi *Electron Backscatter Diffraction* (EBSD) membuktikan bahwa setelah 3 siklus CGP:
- Terbentuk $74\%$ batas butir sudut tinggi (*High-Angle Grain Boundaries*, misorientasi $> 15^\circ$), mengubah struktur mikro menjadi butir nano-ekuaksial stabil.
- Ketangguhan impak Charpy (ASTM E23) lembaran CGP mencapai $18{,}4\text{ J/cm}^2$, hampir $5$ kali lipat lebih tinggi dibandingkan lembaran hasil pengerolan dingin ($3{,}8\text{ J/cm}^2$), karena struktur butir ultra-halus ekuaksial mampu membelokkan perambatan retak mikro (*crack deflection mechanism*).

---

## 7. Pertanyaan Evaluasi & Panduan Praktis

1. **Mengapa pada proses CGP rasio lebar alur terhadap kedalaman alur ($w / t$) harus bernilai 1.0 pada sudut kemiringan $\theta = 45^\circ$?**
   - *Jawaban*: Jika rasio $w / t \ne 1{,}0$ pada sudut $45^\circ$, deformasi yang terjadi pada zona miring alur tidak lagi berupa geser murni murni (*pure shear*), melainkan akan terkontaminasi oleh regangan tarik aksial atau tekukan bending yang tidak terkendali. Hal ini akan menyebabkan penipisan lokal (*local necking*), pembentukan konsentrasi tegangan tarik pada radius alur, dan retak dini sebelum siklus deformasi berikutnya dapat diselesaikan.

2. **Jelaskan perbedaan fundamental antara fenomena perkuatan pada pengerolan dingin konvensional vs Constrained Groove Pressing (CGP).**
   - *Jawaban*: Pada pengerolan dingin, perkuatan material didominasi oleh mekanisme pengerasan kerja dislokasi searah (*dislocation tangling*) yang menyebabkan elongasi butir pipih dan degradasi drastis keuletan material hingga rapuh. Pada CGP, regangan geser siklis bolak-balik merangsang rekristalisasi dinamis kontinu (*continuous dynamic recrystallization*), menghasilkan butir ultra-halus (UFG) berskala sub-mikron dengan batas butir sudut tinggi (HAGBs). Sesuai relasi Hall-Petch, struktur UFG menghasilkan lonjakan kekuatan luluh yang masif namun tetap mempertahankan keuletan (*ductility*) yang memadai.

3. **Bagaimana peran dinding pembatas (*constraint fixture*) dalam perancangan perkakas cetakan CGP?**
   - *Jawaban*: Tanpa dinding penahan pengekang lateral (*lateral constraint walls*), lembaran logam yang ditekan oleh gigi die akan mengalir bebas ke arah samping (*lateral spreading / flash broadening*). Hal ini merusak kondisi regangan bidang (*plane strain condition*), menurunkan efektivitas akumulasi regangan geser murni, dan mengubah dimensi lebar lembaran produk. Dinding penahan memastikan lembaran tetap berada pada dimensi geometris awalnya (*near-net-shape*).

---

## 8. Referensi Terverifikasi (Academic & Industrial Standards)

1. **Sawalkar, S., & Field, D. P.** (2023). "Corrugated Constrained Groove Uniform Pressing Process for Achieving Improved and Homogeneous Properties". *Materials Science & Engineering A / SSRN Preprints*, pp. 1–18. DOI: `10.2139/ssrn.4646698`.
2. **Guan, Y., & Wang, Z.** (2017). "Numerical and Experimental Study on Constrained Groove Pressing". *Severe Plastic Deformation Techniques*, InTechOpen, pp. 45–68. DOI: `10.5772/intechopen.68504`.
3. **Khodabakhshi, F., Haghshenas, M., & Eskandari, H.** (2015). "Hardness−strength relationships in fine and ultra-fine grained metals processed through constrained groove pressing". *Materials Science and Engineering: A*, 636, pp. 331–339. DOI: `10.1016/j.msea.2015.03.122`.
4. **Khodabakhshi, F., Kazeminezhad, M., & Kokabi, A. H.** (2012). "Resistance spot welding of ultra-fine grained steel sheets produced by constrained groove pressing: Optimization and characterization". *Materials Characterization*, 68, pp. 64–76. DOI: `10.1016/j.matchar.2012.04.011`.
5. **Krishnaiah, A., Chakkingal, U., & Venugopal, P.** (2007). "Microstructure and Mechanical Properties of Commercial Purity Copper Resulting from Repeated Groove Pressing Followed by Cold Rolling". *Materials Science Forum*, 561-565, pp. 2198–2201. DOI: `10.4028/0-87849-428-6.2198`.
6. **ASTM E8 / E8M-22**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA.
7. **ISO 6892-1:2019**: *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*. International Organization for Standardization.
8. **ASTM E384-22**: *Standard Test Method for Microindentation Hardness of Materials*. ASTM International, West Conshohocken, PA.
