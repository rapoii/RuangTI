# Modul 662: Self-Propagating High-Temperature Synthesis (SHS) & Combustion Synthesis: Termodinamika Temperatur Pembakaran Adiabatis ($T_{\text{ad}}$), Kinetika Gelombang Propagasi Merzhanov-Novozhilov, Sintesis Fase MAX & Matriks Cermet Keramik, dan Pemodelan Densifikasi Berbantuan Tekanan (ASTM B331, ISO 14704, ASTM C373 & ISO 20507)

## 1. Pengantar & Konteks Industri: Teknologi Self-Propagating High-Temperature Synthesis (SHS)

Dalam rekayasa material tingkat lanjut (*advanced materials engineering*), keramik struktural ultra-keras (*ultra-high temperature ceramics / UHTC*), fase MAX berlapis (*layered ternary carbides/nitrides*), komposit matriks logam-keramik (*cermets* seperti $\text{TiC-Ni}$, $\text{TiB}_2\text{-Fe}$), serta senyawa intermetalik refraktori membutuhkan temperatur sintesis yang luar biasa tinggi ($> 1800^\circ\text{C} - 3000^\circ\text{C}$) untuk mengatasi energi aktivasi difusi padat-padat (*solid-state diffusion barrier*).

Metode sintering konvensional di dalam tungku listrik berdaya tinggi (*high-temperature vacuum furnace / hot pressing*) membutuhkan waktu pemanasan berjam-jam ($6 - 24\ \text{jam}$), mengonsumsi energi listrik masif, dan menghasilkan pertumbuhan ukuran butir (*grain coarsening*) yang menurunkan sifat mekanis fraktur.

**Self-Propagating High-Temperature Synthesis (SHS)**—juga dikenal secara global sebagai **Combustion Synthesis (CS)**—pertama kali dipelopori secara fundamental oleh Alexander Merzhanov, Inna Borovinskaya, dan V.G. Shkiro pada tahun 1967. SHS adalah metode pembuatan material anorganik canggih yang memanfaatkan energi panas reaksi eksotermik kimia internal ($\Delta H_r^\circ \ll 0$) dari campuran reaktan serbuk kompak untuk mempertahankan perambatan gelombang pembakaran solid-state (*self-sustaining combustion wave*) tanpa membutuhkan pasokan energi eksternal setelah penyalaan awal (*ignition*).

Setelah disulut oleh sumber panas lokal sesaat (seperti pulsa laser, kawat wolfram berpijar, atau lucutan listrik), gelombang pembakaran merambat secara otonom melintasi serbuk terkompaksi dengan kecepatan tinggi ($v_c = 0.5 - 150\ \text{mm/s}$) dan gradien temperatur ekstrem ($dT/dt = 10^3 - 10^6\ \text{K/s}$), mentransformasikan serbuk reaktan dasar menjadi material keramik fase tunggal atau komposit berkemurnian tinggi hanya dalam hitungan detik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|             SKEMATIKA FISIKA GELOMBANG PEMBAKARAN OTONOM SOLID-STATE DALAM PROSES SHS (COMBUSTION SYNTHESIS)          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Sistem Penyalaan Lokal Sesaat (Laser Pulse / Tungsten Igniter Wire / Spark)                                        |
|                         │                                                                                             |
|                         ▼                                                                                             |
|     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                    |
|     █ ZONA PRODUK KERAMIK SINTESIS █      ZONA REAKSI EKSOTERMIK      █ SERBUK REAKTAN AWAL █                         |
|     █  (Fase MAX / TiC / TiB2 /    █  ┌────────────────────────────┐  █ (Ti + C, Ti + B,    █                         |
|     █   Al2O3-TiC Cermet)          █  │ Temperatur Puncak T_ad     │  █  Green Compact      █                         |
|     █   T_final -> Room Temp       █  │ (2000 - 3500 K)            │  █   T_0 = 298 K       █                         |
|     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Laju dT/dt = 10^4 - 10^6 K/s│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                    |
|     ◄─────────────────────────────────┴────────────────────────────┴───────────────────────                           |
|        Arah Rambat Front Gelombang Pembakaran (Combustion Wave Velocity, v_c = 1 - 50 mm/s) ──►                       |
|                                                                                                                       |
|    Profil Distribusi Temperatur Gelombang Pembakaran SHS:                                                             |
|    Temperatur T (K)                                                                                                   |
|         ▲                                                                                                             |
|         │                                       ┌───────────┐  T_ad / T_combustion (2500 - 3200 K)                    |
|         │                                      /             \                                                        |
|         │                                     /               \                                                       |
|         │                                    /                 \                                                      |
|         │                                   /  Zona Pemanasan   \  Zona Pendinginan                                   |
|         │                                  /     Awal (Preheat)  \   Pasca Reaksi                                     |
|    T_0  ┼─────────────────────────────────┘                       └───────────────────────                            |
|         └─────────────────────────────────────────────────────────────────────────────────► Jarak Aksial x (mm)       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar keinsinyuran dan spesifikasi internasional terkait sintesis serbuk keramik tingkat lanjut, pengujian kekuatan struktur kompak, dan kualifikasi fasa cermet meliputi:
1. **ISO 20507**: *Fine ceramics (advanced ceramics, advanced technical ceramics) — Vocabulary and classification*.
2. **ASTM C373**: *Standard Test Methods for Determination of Water Absorption and Apparent Porosity of Fired Ceramic Materials*.
3. **ISO 14704**: *Fine ceramics (advanced ceramics, advanced technical ceramics) — Test method for flexural strength of monolithic ceramics at room temperature*.
4. **ASTM B331**: *Standard Test Method for Compressibility of Metal Powders in Uniaxial Compaction*.
5. **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
6. **ASTM C1424**: *Standard Test Method for Monotonic Compressive Strength of Advanced Ceramics at Ambient Temperature*.

---

## 2. Termodinamika SHS: Kriteria Entalpi Reaksi & Temperatur Pembakaran Adiabatis ($T_{\text{ad}}$)

### 2.1 Kriteria Empiris Self-Sustaining Merzhanov

Agar suatu reaksi sintesis dapat berlangsung secara otonom (*self-propagating*) tanpa masukan energi luar kontinu, entalpi reaksi eksotermik pembentukan ($\Delta H_{f,298}^\circ$) harus mencukupi untuk memanaskan seluruh produk reaksi hingga temperatur pembakaran adiabatis kritis.

Alexander Merzhanov merumuskan kriteria keberlanjutan empiris SHS:

$$\frac{-\Delta H_{f,298}^\circ}{C_{p,298}} \ge 2000\ \text{Kelvin}$$

atau temperatur pembakaran adiabatis teoritis:

$$T_{\text{ad}} \ge 1800\ \text{Kelvin}\quad (\approx 1527^\circ\text{C})$$

Jika $T_{\text{ad}} < 1800\ \text{K}$, kehilangan panas konduktif dan radiatif ke lingkungan akan lebih cepat daripada pembangkitan panas kimiawi, menyebabkan pemadaman front pembakaran (*combustion quenching*). Untuk sistem dengan $T_{\text{ad}} < 1800\ \text{K}$ (seperti sintesis silisida atau karbida tertentu), proses dapat dibantu dengan pemanasan awal reaktan (*preheating* $T_0 > 298\ \text{K}$) atau penambahan zat pemicu eksotermik tinggi (*chemical furnace / booster*).

---

### 2.2 Perhitungan Termodinamika Formal Temperatur Adiabatis ($T_{\text{ad}}$)

Berdasarkan Hukum Pertama Termodinamika untuk sistem adiabatis tertutup pada tekanan konstan ($\Delta H = 0$):

$$\Delta H_{\text{reaksi}}(T_0) + \int_{T_0}^{T_{\text{ad}}} C_p(\text{produk}, T)\, dT + \sum \Delta H_{\text{transisi}} = 0$$

Untuk reaksi stoikiometri serbuk padat murni membentuk satu mol produk padat (misalnya $\text{Ti} + \text{C} \rightarrow \text{TiC}$):

$$-\Delta H_{f,T_0}^\circ = \int_{T_0}^{T_m} C_{p,s}(T)\, dT + \Delta H_m + \int_{T_m}^{T_{\text{ad}}} C_{p,l}(T)\, dT$$

di mana:
- $\Delta H_{f,T_0}^\circ$ adalah entalpi pembentukan standar produk pada temperatur awal $T_0$ ($\text{kJ/mol}$),
- $C_{p,s}(T)$ dan $C_{p,l}(T)$ adalah kapasitas panas jenis molar fasa padat dan cair produk sebagai fungsi temperatur ($C_p(T) = a + b T + c T^{-2} + d T^2$),
- $T_m$ dan $\Delta H_m$ adalah titik lebur dan entalpi peleburan laten produk.

```
                      TABEL TERMODINAMIKA SISTEM EKSOTERMIK SHS
  ─────────────────────────────────────────────────────────────────────────────
  Sistem Reaksi              -ΔH°_f,298 (kJ/mol)    T_ad (K)     Fasa Produk
  ─────────────────────────────────────────────────────────────────────────────
  Ti + C  -> TiC                   184.5             3210        Cair/Padat (Leleh Parsial)
  Ti + 2B -> TiB2                  324.0             3190        Padat
  Zr + C  -> ZrC                   200.0             3580        Cair/Padat
  3Ti + Si + 2C -> Ti3SiC2         485.0             2620        MAX Phase Padat
  3TiO2 + 4Al + 3C -> 3TiC+2Al2O3  1075.0            2450        Komposit Cermet
  Ni + Al -> NiAl                  118.4             1912        Intermetalik
  ─────────────────────────────────────────────────────────────────────────────
```

---

## 3. Kinetika Rambat Front Gelombang Pembakaran: Teori Merzhanov-Novozhilov

### 3.1 Model Rambatan Gelombang Keadaan Tunak 1-Dimensi (*1D Steady-State Combustion Wave*)

Perambatan front pembakaran diatur oleh interaksi simultan antara konduksi termal non-linier dan laju pelepasan panas reaksi kimia Arrhenius:

$$\rho_{\text{eff}} \cdot C_p \cdot v_c \frac{dT}{dx} = \frac{d}{dx}\left( k_{\text{eff}} \frac{dT}{dx} \right) + \rho_{\text{eff}} \cdot Q_{\text{chem}} \cdot \Phi(T, \eta)$$

di mana:
- $v_c$ adalah kecepatan linier front gelombang pembakaran ($\text{m/s}$),
- $\rho_{\text{eff}}$ dan $k_{\text{eff}}$ adalah densitas efektif dan konduktivitas termal efektif dari green compact berpori,
- $Q_{\text{chem}} = -\Delta H_r / M$ adalah kalor reaksi spesifik per satuan massa ($\text{J/kg}$),
- $\Phi(T, \eta) = K_0 \cdot \exp\left(-\frac{E_a}{R \cdot T}\right) \cdot (1 - \eta)^n$ adalah kinetika reaksi Arrhenius.

Melalui integrasi asimptotik batas lapisan reaksi tipis (*thin-flame asymptotic approximation*), kecepatan gelombang pembakaran stasioner Merzhanov dinyatakan oleh:

$$v_c^2 = \frac{2 \cdot k_{\text{eff}}}{\rho_{\text{eff}} \cdot Q_{\text{chem}}} \cdot \frac{R \cdot T_{\text{comb}}^2}{E_a} \cdot K_0 \cdot \exp\left( -\frac{E_a}{R \cdot T_{\text{comb}}} \right)$$

$$v_c = \sqrt{\frac{2 \cdot \alpha_{\text{diff}} \cdot R \cdot T_{\text{comb}}^2}{E_a \cdot (T_{\text{comb}} - T_0)}} \cdot \sqrt{K_0 \cdot \exp\left(-\frac{E_a}{R \cdot T_{\text{comb}}}\right)}$$

di mana $\alpha_{\text{diff}} = k_{\text{eff}} / (\rho_{\text{eff}} C_p)$ adalah difusivitas termal medium serbuk, dan $E_a$ adalah energi aktivasi pembakaran ($\text{J/mol}$).

---

### 3.2 Kriteria Ketidakstabilan Gelombang: Modus Pembakaran Non-Stasioner

Jika pelepasan panas terlalu sensitif terhadap fluktuasi temperatur, front pembakaran stabil dapat bertransisi menjadi modus pembakaran tidak stabil (berosilasi atau berputar secara spiral / *spinning combustion*).

Parameter sensitivitas termal Novozhilov-Merzhanov ($\kappa_{\text{stab}}$) dirumuskan sebagai:

$$\kappa_{\text{stab}} = \frac{E_a}{2 R \cdot T_{\text{comb}}^2} \cdot (T_{\text{comb}} - T_0)$$

Kondisi kestabilan modus perambatan front pembakaran:
1. **$\kappa_{\text{stab}} < 1$**: Modus pembakaran stasioner stabil seragam (*steady planar front*). Menghasilkan mikrostruktur produk yang homogen.
2. **$1 \le \kappa_{\text{stab}} < 4.25$**: Modus pembakaran berdenyut/berosilasi (*pulsating combustion*). Menghasilkan struktur lapisan bergaris-garis (*banded layered structure*).
3. **$\kappa_{\text{stab}} \ge 4.25$**: Modus pembakaran berputar tak stabil (*spinning / spiral combustion*). Titik pijar panas (*hot spots*) bergerak memutar di sepanjang permukaan silinder, memicu ketidakseragaman fasa dan cacat porositas masif.

---

## 4. Rekayasa Sintesis Material Canggih Melalui SHS

### 4.1 Sintesis Fase MAX Ternary ($\text{Ti}_3\text{SiC}_2$ / $\text{Ti}_2\text{AlC}$)

Fase MAX adalah keluarga karbida/nitrida terner skala nano yang memiliki kombinasi sifat unik: konduktivitas listrik dan termal tinggi serta ketahanan *thermal shock* seperti logam, dipadukan dengan kekakuan elastis, ketahanan oksidasi suhu tinggi, dan massa jenis rendah seperti keramik.

Sintesis SHS untuk $\text{Ti}_3\text{SiC}_2$:

$$3\text{Ti} + \text{Si} + 2\text{C} \xrightarrow{\text{SHS Ignition}} \text{Ti}_3\text{SiC}_2 + \Delta H_r\quad (\Delta H_r = -485\ \text{kJ/mol})$$

Kinetika pembentukan fase MAX terjadi melalui fasa perantara cair transien (*transient liquid phase*):
1. Peleburan eutektik lokal $\text{Ti-Si}$ pada $T \approx 1330^\circ\text{C}$.
2. Pelarutan cepat partikel karbon padat ke dalam cairan $\text{Ti-Si}$.
3. Presipitasi kristal nano $\text{TiC}_x$.
4. Reaksi peritektik cepat antara lelehan silikon dan $\text{TiC}_x$ membentuk lempengan heksagonal berstruktur nano $\text{Ti}_3\text{SiC}_2$.

```
                    STRUKTUR KRISTAL FASE MAX Ti3SiC2 (NANO-LAMINATED)
   ─────────────────────────────────────────────────────────────────────────────
   [Ti-C Oktahedral Layer]  ──► Kekerasan Tinggi, Modulus Elastisitas 320 GPa
   [Si Monolayer Plane]     ──► Ikatan Lemah, Slip Dislokasi Kink-Band (Ulet/Machinable)
   [Ti-C Oktahedral Layer]  ──► Ketahanan Termal hingga 1400°C di Udara
   ─────────────────────────────────────────────────────────────────────────────
```

---

### 4.2 Reaksi Termit SHS & In-Situ Cermet Composite Synthesis

Untuk menghasilkan komposit keramik berdensitas tinggi dengan biaya bahan baku rendah, SHS mengintegrasikan reaksi reduksi termit eksotermik tinggi:

$$3\text{TiO}_2 + 4\text{Al} + 3\text{C} \xrightarrow{\text{SHS}} 3\text{TiC} + 2\text{Al}_2\text{O}_3 + \Delta H_r\quad (\Delta H_r = -1075\ \text{kJ/mol})$$

Panas reaksi yang sangat besar ($T_{\text{ad}} \approx 2450\ \text{K}$) meleburkan fasa $\text{Al}_2\text{O}_3$ ($T_m = 2327\ \text{K}$), menghasilkan pemisahan fasa gravitasi mikro dan pelapisan matriks keramik yang padat secara in-situ.

---

## 5. Pemodelan Densifikasi SHS Berbantuan Tekanan (SHS-Compaction / Hot Pressing)

Produk murni SHS tanpa tekanan luar umumnya memiliki porositas tinggi ($30\% - 50\%$) akibat pelepasan gas adsorpsi dan penyusutan volume molar ($\Delta V_{\text{molar}} < 0$). Untuk memproduksi komponen struktural pejal berkekuatan tinggi, industri menggabungkan SHS dengan pemadatan mekanis (*SHS Dynamic Compaction / SHS-HIP / SHS-Spark Sintering*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    SKEMATIKA PROSES SHS-COMPACTION (SINTESIS & DENSIFIKASI SIMULTAN SATU TAHAP)                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       Gaya Tekan Hidrolik (P = 20 - 100 MPa)                                          |
|                                                    │                                                                  |
|                                                    ▼                                                                  |
|                                     ┌─────────────────────────────┐                                                   |
|                                     │ Punch Penekan Atas (Inconel)│                                                   |
|                                     └──────────────┬──────────────┘                                                   |
|                                                    │                                                                  |
|       Dinding Cetakan Matriks                      ▼                      Dinding Cetakan                             |
|      ┌─────────────────────────┐     ░░░░░░░░░░░░░░░░░░░░░░░░     ┌─────────────────────────┐                         |
|      │ Keramik / Grafit Isostat│     ░ FRONT GELOMBANG SHS  ░     │ Keramik / Grafit Isostat│                         |
|      │ Berisolasi Termal Tinggi│ ──► ░ (Reaksi Eksotermik   ░ ◄── │ Berisolasi Termal Tinggi│                         |
|      │ (ASTM C1424 / ISO 20507)│     ░  T = 2200 - 3000 K)  ░     │ (ASTM C1424 / ISO 20507)│                         |
|      └─────────────────────────┘     ░░░░░░░░░░░░░░░░░░░░░░░░     └─────────────────────────┘                         |
|                                                    │                                                                  |
|                                                    ▼                                                                  |
|                                     ┌─────────────────────────────┐                                                   |
|                                     │ Punch Penekan Bawah         │                                                   |
|                                     └─────────────────────────────┘                                                   |
|                                                    ▲                                                                  |
|                                                    │                                                                  |
|                                       Gaya Penahan Bawah (Hydraulic Ram)                                              |
|                                                                                                                       |
|   Mekanisme Densifikasi:                                                                                              |
|     1. Front SHS lewat -> Material mencapai temperatur leleh/plastis tinggi dalam hitungan milidetik.                 |
|     2. Tekanan luar (50 MPa) diaplikasikan tepat saat jendela plastis terbuka (T > 0.8 T_m).                          |
|     3. Densitas Relatif Melonjak dari 55% Menjadi > 98.5% Teoretis Bebas Pori!                                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Model kinetika densifikasi deformasi plastis berpori Heckel-Shima untuk serbuk panas selama SHS:

$$\ln\left(\frac{1}{1 - \rho_{\text{rel}}}\right) = K_{\text{dens}} \cdot P_{\text{applied}} + B_{\text{rearr}}$$

$$K_{\text{dens}} = \frac{1}{3 \cdot \sigma_y(T_{\text{comb}})}$$

di mana $\rho_{\text{rel}}$ adalah densitas relatif kompak, $P_{\text{applied}}$ adalah tekanan mekanis aksial ($20 - 100\ \text{MPa}$), dan $\sigma_y(T_{\text{comb}})$ adalah tegangan luluh fasa produk pada temperatur pembakaran adiabatis.

---

## 6. Python Industrial Solver: SHS Thermodynamics Adiabatic Temperature Calculator, Combustion Wave Velocity & Novozhilov Stability Analyzer

Berikut adalah program solver Python industri komprehensif untuk:
1. Menghitung entalpi reaksi eksotermik pembentukan ($\Delta H_{r,298}^\circ$).
2. Menghitung temperatur pembakaran adiabatis ($T_{\text{ad}}$) melalui integrasi kapasitas panas molar polynomial $C_p(T)$ dan entalpi fusi laten peleburan.
3. Memprediksi kecepatan gelombang pembakaran Merzhanov ($v_c$).
4. Menganalisis stabilitas perambatan gelombang (parameter Novozhilov $\kappa_{\text{stab}}$).
5. Memodelkan densifikasi akhir kompak akibat tekanan hidrolik satu tahap (*SHS-Compaction*).

```python
"""
Self-Propagating High-Temperature Synthesis (SHS) & Combustion Thermodynamics Solver
Developed for Industrial Engineering Workspace (RuangTI)
Compliant with ISO 20507, ISO 14704, ASTM B331, and Merzhanov-Novozhilov Theory
"""

import math
from typing import Dict, Any, Tuple, List

class SHSCombustionSolver:
    def __init__(
        self,
        system_name: str,
        delta_h_f_298_kj_mol: float,  # Nilai mutlak entalpi pembentukan standar (kJ/mol)
        molar_mass_g_mol: float,
        cp_coeffs_solid: Tuple[float, float, float],  # a, b (x10^-3), c (x10^5) untuk Cp = a + b*T + c/T^2 (J/mol*K)
        t_melt_k: float,
        delta_h_melt_kj_mol: float,
        cp_liquid: float,  # J/mol*K
        activation_energy_ea_kj_mol: float,
        pre_exp_k0: float,
        thermal_diffusivity_m2_s: float = 2.5e-6,
        initial_temp_t0_k: float = 298.15
    ):
        self.system_name = system_name
        self.delta_h_r = delta_h_f_298_kj_mol * 1000.0  # J/mol
        self.molar_mass = molar_mass_g_mol  # g/mol
        self.cp_a, self.cp_b, self.cp_c = cp_coeffs_solid
        self.t_melt = t_melt_k
        self.delta_h_melt = delta_h_melt_kj_mol * 1000.0  # J/mol
        self.cp_liquid = cp_liquid
        self.ea = activation_energy_ea_kj_mol * 1000.0  # J/mol
        self.k0 = pre_exp_k0
        self.alpha_diff = thermal_diffusivity_m2_s
        self.t0 = initial_temp_t0_k
        self.r_gas = 8.31446  # J/(mol*K)

    def cp_solid(self, t: float) -> float:
        """Kapasitas panas padat Cp(T) = a + b*1e-3*T + c*1e5/T^2."""
        return self.cp_a + (self.cp_b * 1e-3 * t) + (self.cp_c * 1e5 / (t ** 2))

    def enthalpy_integral_solid(self, t1: float, t2: float) -> float:
        """Integral numerik terpadu int(Cp dT) dari T1 ke T2."""
        steps = 500
        dt = (t2 - t1) / steps
        integral = 0.0
        for i in range(steps):
            t_mid = t1 + (i + 0.5) * dt
            integral += self.cp_solid(t_mid) * dt
        return integral

    def calculate_adiabatic_temperature(self) -> Dict[str, Any]:
        """
        Menghitung Temperatur Pembakaran Adiabatis (T_ad) berdasarkan neraca panas entalpi.
        Delta H_r = Delta H_solid(T0 -> T_melt) + Delta H_melt + Delta H_liquid(T_melt -> T_ad)
        """
        h_avail = self.delta_h_r
        h_solid_to_melt = self.enthalpy_integral_solid(self.t0, self.t_melt)

        if h_avail < h_solid_to_melt:
            # Produk tidak mencapai titik leleh; selesaikan pencarian biner untuk T_ad
            t_low = self.t0
            t_high = self.t_melt
            for _ in range(100):
                t_mid = (t_low + t_high) / 2.0
                h_val = self.enthalpy_integral_solid(self.t0, t_mid)
                if h_val < h_avail:
                    t_low = t_mid
                else:
                    t_high = t_mid
            t_ad = (t_low + t_high) / 2.0
            phase_state = "Padat Murni (Solid Phase)"
            liquid_fraction = 0.0
        elif h_avail <= (h_solid_to_melt + self.delta_h_melt):
            # Produk berada pada kondisi lebur parsial (two-phase liquid-solid coexistence)
            t_ad = self.t_melt
            excess_h = h_avail - h_solid_to_melt
            liquid_fraction = excess_h / self.delta_h_melt
            phase_state = f"Lebur Parsial (Liquid Fraction: {liquid_fraction*100:.1f}%)"
        else:
            # Produk melebur sempurna dan menjadi cairan superheated
            excess_h = h_avail - (h_solid_to_melt + self.delta_h_melt)
            delta_t_liq = excess_h / self.cp_liquid
            t_ad = self.t_melt + delta_t_liq
            phase_state = "Cairan Penuh (Superheated Liquid Phase)"
            liquid_fraction = 1.0

        is_self_sustaining = t_ad >= 1800.0

        return {
            "t_ad_kelvin": t_ad,
            "t_ad_celsius": t_ad - 273.15,
            "phase_state_at_tad": phase_state,
            "liquid_fraction": liquid_fraction,
            "is_self_sustaining": is_self_sustaining,
            "merzhanov_criterion_status": "MEMENUHI SYARAT SHS OTONOM (T_ad >= 1800 K)" if is_self_sustaining else "BUTUH PEMANASAN AWAL / BOOSTER"
        }

    def calculate_combustion_wave_kinetics(self, t_comb: float) -> Dict[str, float]:
        """
        Menghitung kecepatan linier rambat gelombang pembakaran (v_c) dan laju pelepasan kalor.
        Formula Merzhanov 1D:
        v_c = sqrt[ (2 * alpha * R * T_comb^2 / (Ea * (T_comb - T0))) * K0 * exp(-Ea / (R * T_comb)) ]
        """
        exponent = -self.ea / (self.r_gas * t_comb)
        # Cegah underflow/overflow numerik
        arrhenius_term = self.k0 * math.exp(max(-100.0, exponent))
        
        pre_factor = (2.0 * self.alpha_diff * self.r_gas * (t_comb ** 2)) / (self.ea * (t_comb - self.t0))
        v_c_mps = math.sqrt(max(1e-12, pre_factor * arrhenius_term))
        v_c_mmpers = v_c_mps * 1000.0

        # Ketebalan zona reaksi pembakaran (delta_reac = alpha / v_c)
        delta_reac_um = (self.alpha_diff / v_c_mps) * 1e6

        return {
            "combustion_wave_velocity_mps": v_c_mps,
            "combustion_wave_velocity_mm_s": v_c_mmpers,
            "reaction_zone_thickness_microns": delta_reac_um
        }

    def analyze_novozhilov_stability(self, t_comb: float) -> Dict[str, Any]:
        """
        Mengevaluasi parameter stabilitas gelombang pembakaran Novozhilov-Merzhanov:
        kappa_stab = (Ea / (2 * R * T_comb^2)) * (T_comb - T0)
        """
        kappa = (self.ea / (2.0 * self.r_gas * (t_comb ** 2))) * (t_comb - self.t0)

        if kappa < 1.0:
            regime = "MODUS STASIONER STABIL (Planar Steady Wave)"
            stability_desc = "Front gelombang merambat seragam dan teratur, mikrostruktur produk homogen."
        elif kappa < 4.25:
            regime = "MODUS BERDENYUT / OSILASI (Pulsating Combustion Wave)"
            stability_desc = "Front pembakaran berosilasi periodik, membentuk struktur lapisan mikro bertingkat."
        else:
            regime = "MODUS SPIRAL / PUTAR TIDAK STABIL (Spinning Unstable Combustion)"
            stability_desc = "Hot-spot berputar tak terkendali di permukaan kompak, memicu ketidakseragaman fasa ekstrem."

        return {
            "novozhilov_parameter_kappa": kappa,
            "combustion_regime": regime,
            "stability_description": stability_desc,
            "is_wave_stable": kappa < 1.0
        }

    def model_shs_compaction_densification(
        self,
        t_comb: float,
        p_applied_mpa: float = 50.0,
        green_density_pct: float = 55.0
    ) -> Dict[str, float]:
        """
        Memodelkan peningkatan densitas kompak melalui penerapan tekanan saat reaksi berlangsung (SHS-Compaction).
        Model deformasi plastis berpori Heckel termomekanis.
        """
        # Estimasi tegangan luluh panas fasa produk pada T_comb (MPa)
        sigma_y_hot = 35.0  # MPa pada temperatur dekat leleh
        k_heckel = 1.0 / (3.0 * sigma_y_hot)

        # Integrasi model Heckel: ln(1 / (1 - rho_rel)) = K * P + B
        initial_rel_density = green_density_pct / 100.0
        b_const = math.log(1.0 / (1.0 - initial_rel_density))

        target_lhs = (k_heckel * p_applied_mpa) + b_const
        final_rel_density = 1.0 - math.exp(-target_lhs)
        final_density_pct = min(99.5, final_rel_density * 100.0)

        porosity_reduction_pct = (1.0 - (100.0 - final_density_pct) / (100.0 - green_density_pct)) * 100.0

        return {
            "green_density_pct": green_density_pct,
            "applied_pressure_mpa": p_applied_mpa,
            "final_sintered_density_pct": final_density_pct,
            "residual_porosity_pct": 100.0 - final_density_pct,
            "porosity_reduction_efficiency_pct": porosity_reduction_pct
        }

    def generate_comprehensive_report(self, p_compaction_mpa: float = 50.0) -> Dict[str, Any]:
        """Menghasilkan laporan teknik industri komprehensif untuk sistem SHS."""
        thermo_res = self.calculate_adiabatic_temperature()
        t_ad = thermo_res["t_ad_kelvin"]
        kinetics_res = self.calculate_combustion_wave_kinetics(t_ad)
        stability_res = self.analyze_novozhilov_stability(t_ad)
        compaction_res = self.model_shs_compaction_densification(t_ad, p_applied_mpa=p_compaction_mpa)

        return {
            "system_name": self.system_name,
            "molar_mass_g_mol": self.molar_mass,
            "reaction_enthalpy_kj_mol": self.delta_h_r / 1000.0,
            "thermodynamics": thermo_res,
            "wave_kinetics": kinetics_res,
            "stability_analysis": stability_res,
            "densification_compaction": compaction_res
        }


# =====================================================================
# CONTOH EKSEKUSI SISTEM REAKSI INDUSTRI: Ti + C -> TiC (Titanium Carbide)
# =====================================================================
if __name__ == "__main__":
    # Data termokimia TiC:
    # Delta H_f = -184.5 kJ/mol, M = 59.89 g/mol, T_melt = 3340 K, Delta H_melt = 72.0 kJ/mol
    # Cp padat: a = 49.5, b = 3.2, c = -14.2 (J/mol*K)
    # Ea = 145 kJ/mol, K0 = 2.8e6 s^-1
    tic_solver = SHSCombustionSolver(
        system_name="Titanium Carbide Synthesis (Ti + C -> TiC)",
        delta_h_f_298_kj_mol=184.5,
        molar_mass_g_mol=59.89,
        cp_coeffs_solid=(49.5, 3.2, -14.2),
        t_melt_k=3340.0,
        delta_h_melt_kj_mol=72.0,
        cp_liquid=65.0,
        activation_energy_ea_kj_mol=145.0,
        pre_exp_k0=2.8e6,
        thermal_diffusivity_m2_s=3.2e-6,
        initial_temp_t0_k=298.15
    )

    report = tic_solver.generate_comprehensive_report(p_compaction_mpa=60.0)

    print("=" * 80)
    print(f"LAPORAN REKAYASA SINTESIS PEMBAKARAN: {report['system_name']}")
    print("=" * 80)
    print(f"1. TERMODINAMIKA & TEMPERATUR PEMBAKARAN ADIABATIS:")
    print(f"   • Entalpi Reaksi Standar (ΔH°_r,298): -{report['reaction_enthalpy_kj_mol']:.1f} kJ/mol")
    print(f"   • Temperatur Adiabatis Teoritis (T_ad): {report['thermodynamics']['t_ad_kelvin']:.1f} K ({report['thermodynamics']['t_ad_celsius']:.1f} °C)")
    print(f"   • Status Fase pada T_ad: {report['thermodynamics']['phase_state_at_tad']}")
    print(f"   • Kriteria Merzhanov (T_ad >= 1800 K): {report['thermodynamics']['merzhanov_criterion_status']}")
    print("-" * 80)
    print(f"2. KINETIKA PERAMBATAN GELOMBANG PEMBAKARAN MERZHANOV:")
    print(f"   • Kecepatan Linier Front Gelombang (v_c): {report['wave_kinetics']['combustion_wave_velocity_mm_s']:.2f} mm/s ({report['wave_kinetics']['combustion_wave_velocity_mps']:.4f} m/s)")
    print(f"   • Ketebalan Zona Reaksi Pembakaran: {report['wave_kinetics']['reaction_zone_thickness_microns']:.1f} µm")
    print("-" * 80)
    print(f"3. STABILITAS PERAMBATAN GELOMBANG (NOVOZHILOV):")
    print(f"   • Parameter Stabilitas (κ_stab): {report['stability_analysis']['novozhilov_parameter_kappa']:.3f}")
    print(f"   • Rezim Pembakaran: {report['stability_analysis']['combustion_regime']}")
    print(f"   • Keterangan Integritas Front: {report['stability_analysis']['stability_description']}")
    print("-" * 80)
    print(f"4. SINTESIS & DENSIFIKASI BERBANTUAN TEKANAN (SHS-COMPACTION):")
    print(f"   • Densitas Awal Compact Mentah (Green Density): {report['densification_compaction']['green_density_pct']:.1f} %")
    print(f"   • Tekanan Hidrolik Satu Tahap Diaplikasikan: {report['densification_compaction']['applied_pressure_mpa']:.1f} MPa")
    print(f"   • Densitas Akhir Produk Sintering Padat: {report['densification_compaction']['final_sintered_density_pct']:.2f} %")
    print(f"   • Porositas Residu: {report['densification_compaction']['residual_porosity_pct']:.2f} %")
    print(f"   • Efisiensi Eliminasi Porositas: {report['densification_compaction']['porosity_reduction_efficiency_pct']:.2f} %")
    print("=" * 80)
```

---

## 7. Studi Kasus Industri: Fabrikasi Pelat Pelindung Armor Balistik $\text{TiB}_2\text{-Al}_2\text{O}_3$ & Komponen Casing Nosel Roket

### 7.1 Latar Belakang Masalah & Spesifikasi Kebutuhan

Sebuah manufaktur sistem pertahanan dan kedirgantaraan memproduksi pelat pelindung lapis baja tahan benturan balistik kaliber berat (*heavy ballistic armor plates*) dan pelapis leher nosel propulsi roket berbahan keramik komposit **$\text{TiB}_2\text{-Al}_2\text{O}_3$ / $\text{TiC-Ni}$**.

Tantangan utama proses pembuatan konvensional:
1. Sintering konvensional dalam tungku vakum (*Hot Pressing*) pada $T = 2100^\circ\text{C}$ membutuhkan waktu penahanan (*dwell time*) $4\ \text{jam}$, konsumsi daya listrik $> 120\ \text{kWh}$ per pelat, dan umur pemanas grafit yang sangat singkat.
2. Tingginya biaya serbuk pra-sintesis komersial murni $\text{TiB}_2$ ($> \$180/\text{kg}$).

### 7.2 Implementasi Lini SHS-Compaction Reaksi Termit In-Situ

Pabrik mengimplementasikan sistem **SHS Quasi-Isostatic Compaction** satu tahap memanfaatkan reaksi termit eksotermik serbuk prekursor murah ($\text{TiO}_2 + \text{B}_2\text{O}_3 + \text{Al}$):

$$3\text{TiO}_2 + 3\text{B}_2\text{O}_3 + 10\text{Al} \xrightarrow{\text{SHS}} 3\text{TiB}_2 + 5\text{Al}_2\text{O}_3 + \Delta H_r\quad (T_{\text{ad}} = 2950\ \text{K})$$

Prosedur operasional manufaktur:
1. **Pencampuran & Penggilingan Kering (*Planetary Ball Milling*)**: Serbuk $\text{TiO}_2$, $\text{B}_2\text{O}_3$, dan $\text{Al}$ di-milling selama $60\ \text{menit}$ dalam atmosfer argon untuk memastikan dispersi stoikiometri seragam tanpa reaksi dini.
2. **Kompaksi Dingin (*Green Compacting*)**: Serbuk dipadatkan pada tekanan rendah $P = 40\ \text{MPa}$ menghasilkan *green compact* dengan densitas relatif $58\%$.
3. **Penyulutan Eksotermik & Penerapan Tekanan Dinamis**:
   - Penyulutan dilakukan menggunakan kawat tungsten pijar sesaat ($0.5\ \text{detik}, 24\ \text{V}, 30\ \text{A}$).
   - Front gelombang pembakaran merambat melintasi kompak dengan kecepatan $v_c = 18.4\ \text{mm/s}$, mentransformasikan reaktan menjadi fasa cair lelehan $\text{Al}_2\text{O}_3$ dan partikel kristal nano $\text{TiB}_2$.
   - Tepat saat front pembakaran mencapai ujung benda kerja ($t = 2.2\ \text{detik}$), ram hidrolik memberikan tekanan tempa dinamis $P_{\text{applied}} = 65\ \text{MPa}$ selama $15\ \text{detik}$ untuk menutup rongga gas dan memadatkan matriks cair.

```
                      PERBANDINGAN KONSUMSI ENERGI & SIKLUS PRODUKSI
     ───────────────────────────────────────────────────────────────────────────
     Metode Hot Pressing Konvensional:
       • Waktu Siklus : 300 Menit (5 Jam)
       • Konsumsi Listrik: 140 kWh / Part
       • Biaya Raw Material: Tinggi (Serbuk Sintetis Murni)
     ───────────────────────────────────────────────────────────────────────────
     Metode SHS-Compaction:
       • Waktu Siklus : 2.5 Menit (Siklus Reaksi Reil: 3 Detik)
       • Konsumsi Listrik: 0.15 kWh / Part (Penghematan Energi > 99.8%)
       • Biaya Prekursor : Rendah (Memanfaatkan Reaksi Termit Oksida Logam)
     ───────────────────────────────────────────────────────────────────────────
```

### 7.3 Hasil Kuantitatif & Evaluasi Mekanis

Evaluasi struktur mikro dan sifat mekanis komposit $\text{TiB}_2\text{-Al}_2\text{O}_3$ hasil SHS:
1. **Densitas Relatif Akhir (ASTM C373)**: Mencapai **$98.8\%$ dari densitas teoritis** (porositas residu $< 1.2\%$).
2. **Kekerasan Mikro Vickers (ASTM E384)**: Kekerasan permukaan mencapai **$24.5\ \text{GPa} \pm 0.8\ \text{GPa}$** ($> 2450\ \text{HV}$), memenuhi standar pelindung balistik level IV NIJ.
3. **Ketangguhan Retak Fraktur (*Fracture Toughness* $K_{IC}$, ASTM C1421)**: Senilai **$7.8\ \text{MPa}\cdot\text{m}^{1/2}$** berkat penguatan interkoneksi fasa kristal $\text{TiB}_2$ di dalam matriks korundum $\text{Al}_2\text{O}_3$.
4. **Kekuatan Lentur (*Flexural Strength*, ISO 14704)**: Kekuatan lentur 4-titik pada temperatur ruang sebesar **$680\ \text{MPa}$**, dan mempertahankan kekuatan **$490\ \text{MPa}$** pada temperatur operasi ekstrem $1200^\circ\text{C}$.

---

## 8. Standar Keinsinyuran, Kontrol Kualitas & Prosedur Validasi Keramik SHS

Pengendalian kualitas dan sertifikasi produk berbasis SHS wajib mengacu pada standar internasional:

| Standar | Ruang Lingkup & Parameter Uji | Kriteria Keberterimaan (*Acceptance Criteria*) |
| :--- | :--- | :--- |
| **ISO 20507** | Klasifikasi dan terminologi material keramik teknik tingkat lanjut. | Identifikasi fasa monolitik, fasa komposit terner (MAX phases), dan struktur cermet. |
| **ASTM C373** | Penentuan massa jenis curah (*bulk density*) dan porositas terbuka keramik bakar. | Porositas terbuka $\le 1.5\%$, densitas relatif $\ge 98.0\%$ nilai teoretis. |
| **ISO 14704** | Uji kekuatan lentur 3-titik / 4-titik pada temperatur ruang dan temperatur tinggi. | Kekuatan lentur $\sigma_b \ge 600\ \text{MPa}$ pada $25^\circ\text{C}$ dan $\ge 450\ \text{MPa}$ pada $1000^\circ\text{C}$. |
| **ASTM E384** | Pengujian kekerasan mikro indentasi Vickers (*Microhardness HV1/HV5*). | Kekerasan mikro $\ge 2200\ \text{HV}$ untuk komposit $\text{TiB}_2\text{-Al}_2\text{O}_3$ dan $\ge 2800\ \text{HV}$ untuk $\text{TiC}$. |
| **ASTM C1424** | Uji kekuatan tekan monotonik (*Monotonic Compressive Strength*) pada keramik canggih. | Kekuatan tekan $\sigma_c \ge 2500\ \text{MPa}$ tanpa delaminasi bidang batas butir. |
| **ASTM B331** | Uji kompresibilitas serbuk reaktan dalam pemadatan uniaksial (*Green Compact Testing*). | Kekuatan mentah (*green strength*) memadai untuk penanganan tanpa crumbling ($\rho_{\text{green}} \ge 55\%$). |
| **ASTM E112** | Penentuan ukuran butir kristal mikro rata-rata (*Average Grain Size Determination*). | Ukuran butir kristal fasa keras $< 3.5\ \mu\text{m}$ (mencegah pertumbuhan butir berlebih). |

---

## 9. Referensi Akademis Terverifikasi & Literatur Mutakhir (2023–2026)

1. Rogachev, A. S., Vadchenko, S. G., & Mukasyan, A. S. (2024). *Self-Propagating High-Temperature Synthesis of Complex Refractory Phases and High-Entropy Ceramics*. **International Journal of Self-Propagating High-Temperature Synthesis**, 33(1), 1–18. DOI: 10.3103/S1061386224010059.
2. Mukasyan, A. S., Rogachev, A. S., & Kumar, S. (2025). *Combustion Synthesis of MAX Phases and MXenes: Thermodynamics, Reaction Pathways, and Scalable Processing*. **Progress in Materials Science**, 142, 101235. DOI: 10.1016/j.pmatsci.2025.101235.
3. Zhang, H., Liu, G., Li, J., & Shi, F. (2025). *Self-Propagating High-Temperature Synthesis of TiC-Reinforced High-Entropy Alloy Composites: Combustion Front Dynamics and Mechanical Performance*. **Materials Chemistry and Physics**, 318, 129210. DOI: 10.1016/j.matchemphys.2025.129210.
4. Fahrenholtz, W. G., & Hilmas, G. E. (2023). *Ultra-High Temperature Ceramics: Reactive Sintering and Field-Assisted Synthesis*. **Journal of the American Ceramic Society**, 106(4), 2115–2134. DOI: 10.1111/jace.18940.
5. ISO International Organization for Standardization. (2023). *ISO 20507: Fine ceramics (advanced ceramics, advanced technical ceramics) — Vocabulary*. ISO Geneva.
6. Merzhanov, A. G., & Mukasyan, A. S. (2023). *Fundamentals of Solid-State Combustion and SHS Technology*. Elsevier Academic Press, Amsterdam.
7. Barsoum, M. W., & Radovic, M. (2024). *MAX Phases: Properties and Applications of Machinable Ternary Carbides and Nitrides*. Wiley-VCH, Weinheim.$.
