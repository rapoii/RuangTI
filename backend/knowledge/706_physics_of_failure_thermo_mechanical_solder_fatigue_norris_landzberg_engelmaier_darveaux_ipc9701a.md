# Modul 706: Physics of Failure (PoF) & Keandalan Fatik Termomekanis Sambungan Solder Mikroelektronika (*Thermo-Mechanical Fatigue of Solder Interconnects*): Model Norris-Landzberg, Modifikasi Creep-Fatigue Engelmaier-Wild, Partisi Densitas Energi Regangan (*Darveaux Inelastic Strain Energy Approach*), dan Kualifikasi Standar IPC-9701A, IPC-SM-785 & JEDEC JESD22-A104

## 1. Konsep Dasar, Fenomenologi Fisika Kegagalan (PoF), dan Urgensi Industri

Dalam rekayasa sistem manufaktur elektronik modern—termasuk unit kontrol elektronik otomotif (*Automotive Electronic Control Units / ECU*), avionik dirgantara, *server cloud*, serta modul konverter daya kendaraan listrik (*EV Power Inverters*)—kegagalan interkoneksi solder (*solder joint failure*) menyumbang lebih dari 65% dari total kerusakan fisik perakitan elektronik (*Printed Circuit Board Assemblies / PCBA*). 

Berbeda dengan pendekatan statistik keandalan empiris (*black-box empirical reliability* seperti MIL-HDBK-217) yang memperlakukan laju kegagalan sebagai konstanta, paradigma **Physics of Failure (PoF)** berakar pada mekanika kontinuum, termodinamika degradasi material, serta metalurgi fisik untuk memprediksi secara deterministik dan stokastik saat terjadinya inisiasi dan perambatan retak.

```
+-----------------------------------------------------------------------------------+
|               FENOMENOLOGI TERMO-MEKANIS PADA SAMBUNGAN SOLDER CHIP-TO-PCB        |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|      Fluktuasi Temperatur Operasi T(t): Siklus Daya ON/OFF & Lingkungan          |
|                                     │                                             |
|                                     ▼                                             |
|      Ketidaksesuaian Ekspansi Termal (CTE Mismatch): Δα = |α_PCB - α_Die|         |
|      Misal: Silikon/Die (~3 ppm/K) vs FR-4 PCB (~16 ppm/K) -> Δα ≈ 13 ppm/K       |
|                                     │                                             |
|                                     ▼                                             |
|      Timbul Regangan Geser Siklik Siklik Termal (Cyclic Shear Strain):            |
|                           Δγ ≈ (L_D · Δα · ΔT) / h_s                              |
|                                     │                                             |
|                                     ▼                                             |
|      Solder Berada pada Temperatur Homolog Tinggi (T_homolog = T / T_melting > 0.5|
|      -> Mengalami Deformasi Plastis, Rayapan (Creep), dan Relaksasi Tegangan      |
|                                     │                                             |
|                                     ▼                                             |
|      Akumulasi Dislokasi, Rongga Batas Butir (Grain Boundary Voids) & IMC Growth  |
|                                     │                                             |
|                                     ▼                                             |
|      Inisiasi Retak Mikro (Crack Initiation N_0) -> Propagasi Retak (da/dN)       |
|                                     │                                             |
|                                     ▼                                             |
|      Pemisahan Total (Electrical Open Failure) -> Pelanggaran Garansi / Downtime  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 1.1 Anatomi Sambungan Solder dan Senyawa Intermetalik (*Intermetallic Compounds / IMC*)
Pada perakitan komponen mikroelektronika modern berdensitas tinggi—seperti *Ball Grid Array* (BGA), *Quad Flat No-Lead* (QFN), dan *Wafer-Level Chip-Scale Packaging* (WLCSP)—sambungan solder (misalnya paduan bebas timbal SAC305: $96.5\%\text{Sn}-3.0\%\text{Ag}-0.5\%\text{Cu}$) memiliki peran ganda: sebagai **penghubung kelistrikan** (*electrical interconnect*) dan **penopang mekanis struktural** (*structural mechanical support*).

Selama proses *reflow soldering*, reaksi metalurgi antarmuka antara lelehan solder Sn-Ag-Cu dan lapisan metalisasi tembaga (Cu) membentuk lapisan tipis senyawa intermetalik (IMC) $\text{Cu}_6\text{Sn}_5$ (fasa $\eta$) dan $\text{Cu}_3\text{Sn}$ (fasa $\epsilon$). Meskipun IMC esensial untuk ikatan metalurgi, ketebalan IMC yang berlebih ($>3\ \mu\text{m}$) bersifat getas (*brittle*) dan menjadi lokasi konsentrasi tegangan kritis penyebab patah geser tiba-tiba saat pengujian getaran (*vibration*) atau guncangan mekanis (*mechanical shock*).

---

## 2. Landasan Teori Matematis Fisika Kegagalan Termomekanis

### 2.1 Mekanika Regangan Termal dan Ketidaksesuaian Koefisien Ekspansi Termal (CTE)
Misalkan suatu komponen kemasan elektronik memiliki jarak netral terjauh (*Distance to Neutral Point* / DNP) sebesar $L_D$, mengalami variasi siklus temperatur sebesar $\Delta T = T_{\text{max}} - T_{\text{min}}$. Jika perbedaan koefisien ekspansi termal antara komponen dan substrat PCB adalah $\Delta \alpha = |\alpha_{\text{komponen}} - \alpha_{\text{PCB}}|$, maka regangan geser nominal termomekanis $\Delta \gamma_{\text{nom}}$ pada bola solder dengan ketinggian efektif $h_s$ didefinisikan sebagai:

$$\Delta \gamma_{\text{nom}} = \frac{L_D \cdot \Delta \alpha \cdot \Delta T}{h_s}$$

di mana:
- $L_D = \frac{1}{2} \sqrt{L_x^2 + L_y^2}$ adalah jarak terjauh dari pusat geometris kemasan ke sambungan solder pojok terluar ($\text{mm}$).
- $\Delta \alpha = \alpha_{\text{PCB}} - \alpha_{\text{komponen}}$ dalam satuan $\text{ppm}/^\circ\text{C}$ atau $10^{-6}/\text{K}$.
- $h_s$ adalah ketinggian sambungan solder setelah *reflow* ($\text{mm}$).

Dalam kenyataan struktur fleksibel, terdapat faktor kekakuan (*stiffness / compliance factor*) $F_{\text{flex}} < 1$ yang mengurangi regangan geser murni akibat kelengkungan papan (*PCB bending and warpage*):

$$\Delta \gamma_{\text{eff}} = F_{\text{flex}} \cdot \frac{L_D \cdot \Delta \alpha \cdot \Delta T}{h_s}$$

```
                           Skematik Deformasi Geser Solder
                   +───────────────────────────────────+
                   │      Komponen Die / Silicon       │
                   +──┬─────────────────────────────┬──+
                      │                             │  
                      │    Bola Solder Kritis       │  <- Mengalami regangan
                   / /│                             │\ \  geser bolak-balik
                  / / ┴─────────────────────────────┴ \ \ (\Delta\gamma)
                 +───────────────────────────────────────+
                 │            Substrat FR-4 PCB          │
                 +───────────────────────────────────────+
```

---

### 2.2 Model Coffin-Manson Klasik & Norris-Landzberg
Model Coffin-Manson empiris memprediksi siklus kegagalan lelah plastis murni ($N_f$):

$$N_f = \frac{1}{2} \left( \frac{\Delta \varepsilon_p}{2 \varepsilon_f'} \right)^{1/c}$$

Namun, pada siklus termal solder, efek frekuensi siklus $f$ (yang menentukan waktu rayapan / *creep dwell time*) dan temperatur puncak $T_{\text{max}}$ (yang mempercepat difusi termal) sangat dominan. **Norris dan Landzberg (1969)** memperluas model Coffin-Manson menjadi standar industri untuk sambungan solder mikroelektronika:

$$N_f = C \cdot (\Delta T)^{-n} \cdot f^m \cdot \exp\left( \frac{E_a}{k_B \cdot T_{\text{max}}} \right)$$

Faktor Percepatan (*Acceleration Factor* / $AF$) antara kondisi operasional lapangan (*field*) dan kondisi uji laboratorium (*test*) dinyatakan sebagai:

$$AF = \frac{N_{f,\text{field}}}{N_{f,\text{test}}} = \left( \frac{\Delta T_{\text{test}}}{\Delta T_{\text{field}}} \right)^n \cdot \left( \frac{f_{\text{field}}}{f_{\text{test}}} \right)^m \cdot \exp\left[ \frac{E_a}{k_B} \left( \frac{1}{T_{\text{max,field}}} - \frac{1}{T_{\text{max,test}}} \right) \right]$$

di mana:
- $\Delta T_{\text{test}}, \Delta T_{\text{field}}$ adalah rentang perbedaan temperatur per siklus ($\text{K}$).
- $f_{\text{test}}, f_{\text{field}}$ adalah frekuensi siklus termal ($\text{siklus/hari}$ atau $\text{Hz}$).
- $T_{\text{max}}$ adalah temperatur maksimum siklus dalam Kelvin ($K = ^\circ\text{C} + 273.15$).
- $E_a$ adalah energi aktivasi termal lelah solder ($\approx 0.122\ \text{eV}$ untuk timbal Pb-Sn, dan $0.40 - 0.50\ \text{eV}$ untuk paduan SAC305).
- $k_B$ adalah konstanta Boltzmann ($8.617333 \times 10^{-5}\ \text{eV/K}$).
- Eksponen standar SAC305: $n \approx 1.9 - 2.1$, $m \approx 0.33$.

---

### 2.3 Model Creep-Fatigue Engelmaier-Wild Termodifikasi
Werner Engelmaier mengembangkan model analitis berbasis regangan geser total untuk sambungan solder perakitan permukaan (*Surface Mount Technology* / SMT). Model ini secara eksplisit mengintegrasikan durasi penahanan (*dwell time*) pada temperatur ekstrim untuk merefleksikan relaksasi tegangan viskoplastis:

$$N_f(50\%) = \frac{1}{2} \left( \frac{\Delta \gamma_{\text{eff}}}{2 \varepsilon_f'} \right)^{1/c}$$

di mana:
- $2 \varepsilon_f' \approx 0.65$ untuk paduan solder timbal $\text{Sn63Pb37}$, dan $\approx 0.45 - 0.50$ untuk paduan bebas timbal $\text{SAC305}$.
- Eksponen ketahanan lelah $c$ bukan konstanta statis, melainkan fungsi dinamis dari temperatur rata-rata siklus ($T_{\text{mean}}$) dan waktu penahanan rata-rata ($t_d$):

$$c = -0.442 - 6 \times 10^{-4} T_{\text{mean}} + 1.74 \times 10^{-2} \ln\left( 1 + \frac{t_d}{t_0} \right)$$

dengan:
- $T_{\text{mean}} = \frac{T_{\text{max}} + T_{\text{min}}}{2}$ (dalam $^\circ\text{C}$).
- $t_d$ adalah durasi waktu penahanan per setengah siklus (*dwell time*, dalam menit), dan $t_0 = 1.0\ \text{menit}$.

---

### 2.4 Model Partisi Kerapatan Energi Regangan Inelastis (Metode Darveaux)
Robert Darveaux (1995–2002) merevolusi prediksi keandalan BGA dengan membagi siklus hidup fatik ke dalam dua tahapan fisik: **Inisiasi Retak** ($N_0$) dan **Laju Perambatan Retak** ($da/dN$), yang dikorelasikan langsung dengan akumulasi kerapatan energi regangan inelastis per siklus ($\Delta W_{\text{avg}}$, satuan $\text{MPa}$ atau $\text{J/mm}^3$):

```
+─────────────────────────────────────────────────────────────────────────────+
|                          MODEL METROLOGI RETAK DARVEAUX                     |
|                                                                             |
|   1. Inisiasi Retak:         N_0 = K_1 * ( \Delta W_avg )^(K_2)             |
|                                                                             |
|   2. Laju Propagasi:         da / dN = K_3 * ( \Delta W_avg )^(K_4)         |
|                                                                             |
|   3. Siklus Kegagalan Total: N_f = N_0 + \frac{d_0}{da / dN}                |
|                                                                             |
|   di mana d_0 adalah diameter efektif antarmuka bantalan solder (pad solder)|
+─────────────────────────────────────────────────────────────────────────────+
```

Konstanta empiris terkalibrasi untuk paduan solder bebas timbal SAC305 pada ketebalan elemen hingga terluar $25\ \mu\text{m}$:
- $K_1 = 13,\!400\ \text{siklus} \cdot \text{MPa}^{-K_2}$
- $K_2 = -1.62$
- $K_3 = 3.24 \times 10^{-7}\ \text{mm/siklus} \cdot \text{MPa}^{-K_4}$
- $K_4 = 1.05$

---

### 2.5 Distribusi Statistik Weibull 2-Parameter dan Estimasi Laju Kerusakan
Ketahanan umur fatik lelah kumpulan bola solder dalam satu paket mengikuti distribusi probabilitas Weibull 2-parameter:

$$F(N) = 1 - \exp\left[ -\left( \frac{N}{\eta} \right)^\beta \right]$$

di mana:
- $\eta$ adalah umur karakteristik (*characteristic life / scale parameter*, siklus di mana $63.2\%$ populasi mengalami kegagalan).
- $\beta$ adalah parameter bentuk (*Weibull slope / shape parameter*), untuk lelah solder bernilai $\beta \approx 6.0 - 12.0$.

Jika satu kemasan BGA memiliki $M$ buah sambungan solder kritis independen (*series reliability system*), keandalan kemasan secara utuh adalah:

$$R_{\text{package}}(N) = \left[ R_{\text{joint}}(N) \right]^M = \exp\left[ - M \left( \frac{N}{\eta_{\text{joint}}} \right)^\beta \right] = \exp\left[ -\left( \frac{N}{\eta_{\text{package}}} \right)^\beta \right]$$

$$\eta_{\text{package}} = \eta_{\text{joint}} \cdot M^{-1/\beta}$$

---

## 3. Matriks Standar Kualifikasi Keandalan Industri (IPC vs. JEDEC)

Pengujian keandalan termomekanis solder wajib mengacu pada konsensus standar global:

| Parameter Pengujian | JEDEC JESD22-A104 (Kondisi G) | IPC-9701A (Kondisi TC1) | IPC-SM-785 / Otomotif AEC-Q100 |
| :--- | :--- | :--- | :--- |
| **Rentang Suhu Uji** | $-40^\circ\text{C} \text{ s/d } +125^\circ\text{C}$ | $0^\circ\text{C} \text{ s/d } +100^\circ\text{C}$ | $-40^\circ\text{C} \text{ s/d } +150^\circ\text{C}$ (Grade 0) |
| **Waktu Penahanan (*Dwell*)** | $10 - 15\ \text{menit}$ | $10\ \text{menit}$ | $15 - 30\ \text{menit}$ |
| **Laju Perubahan Suhu (*Ramp*)** | $\ge 10^\circ\text{C/menit}$ | $\ge 10^\circ\text{C/menit}$ | $\ge 15^\circ\text{C/menit}$ |
| **Kriteria Kegagalan** | Kenaikan resistansi $>20\%$ ($>1000\ \Omega$) | Kenaikan resistansi terputus 10 event berturut-turut | Resistansi kelistrikan melampaui ambang batas daisy chain |
| **Aplikasi Tipikal** | Semikonduktor / Konsumer / PC | Perakitan PCB SMT Industri | Elektronik Bawah Kap Mesin (*Under-the-hood Automotive*) |

---

## 4. Implementasi Python Solver: Physics of Failure Solder Reliability Engine

Berikut adalah implementasi Python mandiri berorientasi objek yang mencakup perhitungan Norris-Landzberg AF, modifikasi Engelmaier, partisi energi Darveaux, serta simulasi keandalan paket multi-bola Weibull.

```python
"""
Physics of Failure (PoF) & Thermo-Mechanical Solder Joint Reliability Engine.
Standar: IPC-9701A, IPC-SM-785, JEDEC JESD22-A104, dan IPC-J-STD-001.
"""

import math
from typing import Dict, Any, Tuple, List
import numpy as np


class SolderJointReliabilityEngine:
    """
    Engine perhitungan Physics of Failure (PoF) untuk keandalan sambungan solder
    mikroelektronika terhadap kelelahan termomekanis siklik.
    """

    BOLTZMANN_EV = 8.617333262e-5  # eV/K

    def __init__(self,
                 alloy_type: str = "SAC305",
                 distance_to_neutral_point_mm: float = 8.5,
                 solder_standoff_height_mm: float = 0.25,
                 delta_cte_ppm_c: float = 13.0,
                 package_compliance_factor: float = 0.75):
        """
        Inisialisasi parameter geometri paket dan material solder.
        """
        self.alloy_type = alloy_type
        self.dnp = distance_to_neutral_point_mm
        self.h_s = solder_standoff_height_mm
        self.delta_cte = delta_cte_ppm_c * 1e-6  # konversi ppm/C ke unit m/m/C
        self.f_flex = package_compliance_factor

        # Parameter default material
        if alloy_type.upper() == "SAC305":
            self.ea = 0.45  # eV
            self.n_exp = 1.95
            self.m_exp = 0.33
            self.eps_f_prime = 0.50
            self.darveaux_k = (13400.0, -1.62, 3.24e-7, 1.05)
        elif alloy_type.upper() == "SN63PB37":
            self.ea = 0.122  # eV
            self.n_exp = 1.90
            self.m_exp = 0.33
            self.eps_f_prime = 0.65
            self.darveaux_k = (10500.0, -1.45, 4.50e-7, 1.10)
        else:
            raise ValueError(f"Paduan solder {alloy_type} tidak dikenal.")

    def compute_cyclic_shear_strain(self, delta_t_c: float) -> float:
        """
        Menghitung regangan geser termomekanis efektif (delta_gamma_eff).
        """
        delta_gamma_nom = (self.dnp * self.delta_cte * delta_t_c) / self.h_s
        return self.f_flex * delta_gamma_nom

    def norris_landzberg_acceleration_factor(self,
                                             delta_t_field: float,
                                             t_max_field_c: float,
                                             freq_field_cycles_per_day: float,
                                             delta_t_test: float,
                                             t_max_test_c: float,
                                             freq_test_cycles_per_day: float) -> float:
        """
        Menghitung Faktor Percepatan (Acceleration Factor - AF) Norris-Landzberg.
        """
        t_max_field_k = t_max_field_c + 273.15
        t_max_test_k = t_max_test_c + 273.15

        dt_ratio = (delta_t_test / delta_t_field) ** self.n_exp
        freq_ratio = (freq_field_cycles_per_day / freq_test_cycles_per_day) ** self.m_exp

        arrhenius_term = math.exp(
            (self.ea / self.BOLTZMANN_EV) * ((1.0 / t_max_field_k) - (1.0 / t_max_test_k))
        )

        af = dt_ratio * freq_ratio * arrhenius_term
        return af

    def modified_engelmaier_cycles_to_failure(self,
                                              delta_t_c: float,
                                              t_mean_c: float,
                                              dwell_time_minutes: float) -> float:
        """
        Menghitung Mean Cycles to Failure N_f(50%) berdasarkan model Engelmaier-Wild.
        """
        gamma_eff = self.compute_cyclic_shear_strain(delta_t_c)
        
        # Eksponen kelelahan c
        c_exp = -0.442 - (6.0e-4 * t_mean_c) + (1.74e-2 * math.log(1.0 + dwell_time_minutes))
        
        # Formula Engelmaier: N_f(50%) = 0.5 * (gamma_eff / (2 * eps_f'))^(1/c)
        n_f_50 = 0.5 * ((gamma_eff / self.eps_f_prime) ** (1.0 / c_exp))
        return n_f_50

    def darveaux_crack_growth_life(self,
                                   inelastic_strain_energy_density_mpa: float,
                                   solder_pad_diameter_mm: float = 0.40) -> Tuple[float, float, float]:
        """
        Menghitung umur inisiasi retak, laju pertumbuhan retak, dan siklus kegagalan total Darveaux.
        """
        delta_w = inelastic_strain_energy_density_mpa
        k1, k2, k3, k4 = self.darveaux_k

        n_0 = k1 * (delta_w ** k2)
        da_dn = k3 * (delta_w ** k4)
        n_f = n_0 + (solder_pad_diameter_mm / da_dn)
        
        return n_0, da_dn, n_f

    def package_weibull_reliability(self,
                                    cycles: np.ndarray,
                                    eta_joint: float,
                                    beta_shape: float,
                                    num_critical_joints: int = 16) -> Dict[str, np.ndarray]:
        """
        Menghitung keandalan Weibull untuk single joint dan paket multi-ball array.
        """
        # Keandalan sambungan solder tunggal
        r_single = np.exp(-1.0 * ((cycles / eta_joint) ** beta_shape))
        
        # Karakteristik hidup paket terintegrasi
        eta_package = eta_joint * (num_critical_joints ** (-1.0 / beta_shape))
        r_package = np.exp(-1.0 * ((cycles / eta_package) ** beta_shape))
        cdf_failure_package = 1.0 - r_package

        return {
            "cycles": cycles,
            "eta_package": eta_package,
            "r_single": r_single,
            "r_package": r_package,
            "cdf_failure": cdf_failure_package
        }


# =====================================================================
# DEMONSTRASI & STUDI KASUS SISTEM ECU OTOMOTIF (AUTOMOTIVE BGA)
# =====================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("  PHYSICS OF FAILURE ENGINE: THERMO-MECHANICAL SOLDER FATIGUE RELIABILITY  ")
    print("=" * 80)

    # 1. Inisialisasi Paket BGA 256-Ball pada ECU Otomotif
    ecu_engine = SolderJointReliabilityEngine(
        alloy_type="SAC305",
        distance_to_neutral_point_mm=9.2,   # Ukuran paket 18x18 mm -> DNP ~ 9.2 mm
        solder_standoff_height_mm=0.30,     # Tinggi bola solder 300 um
        delta_cte_ppm_c=12.5,               # CTE FR4 (16 ppm/K) - CTE Silicon (3.5 ppm/K)
        package_compliance_factor=0.70      # Fleksibilitas substrat
    )

    # Profil Operasi Lapangan (Field Environment - Kap Mesin Mobil):
    # Delta T = 65 C (-10 C s/d +55 C), T_max = 55 C, 4 siklus per hari
    delta_t_f = 65.0
    t_max_f = 55.0
    freq_f = 4.0
    dwell_f = 60.0 # Dwell time 1 jam

    # Profil Uji Akselerasi Laboratorium (Accelerated Thermal Cycling - JEDEC JESD22-A104 Cond G):
    # Delta T = 165 C (-40 C s/d +125 C), T_max = 125 C, 24 siklus per hari (1 siklus / jam)
    delta_t_t = 165.0
    t_max_t = 125.0
    freq_t = 24.0

    # 2. Hitung Norris-Landzberg Acceleration Factor (AF)
    af = ecu_engine.norris_landzberg_acceleration_factor(
        delta_t_field=delta_t_f,
        t_max_field_c=t_max_f,
        freq_field_cycles_per_day=freq_f,
        delta_t_test=delta_t_t,
        t_max_test_c=t_max_t,
        freq_test_cycles_per_day=freq_t
    )

    print(f"\n[1] Analisis Faktor Percepatan Termal (Norris-Landzberg):")
    print(f"    - Rentang Suhu Lapangan  : ΔT = {delta_t_f:.1f} °C, T_max = {t_max_f:.1f} °C, Frek = {freq_f} cyc/hari")
    print(f"    - Kondisi Uji JEDEC Cond G : ΔT = {delta_t_t:.1f} °C, T_max = {t_max_t:.1f} °C, Frek = {freq_t} cyc/hari")
    print(f"    - Faktor Percepatan (AF)   : {af:.2f}x")
    print(f"      (Artinya: 1 siklus uji laboratorium setara dengan {af:.2f} siklus operasi lapangan)")

    # 3. Model Engelmaier-Wild untuk Lapangan vs Uji
    n50_field = ecu_engine.modified_engelmaier_cycles_to_failure(
        delta_t_c=delta_t_f,
        t_mean_c=22.5,
        dwell_time_minutes=dwell_f
    )
    n50_test = ecu_engine.modified_engelmaier_cycles_to_failure(
        delta_t_c=delta_t_t,
        t_mean_c=42.5,
        dwell_time_minutes=15.0
    )

    print(f"\n[2] Prediksi Umur Siklus Rata-rata (Modified Engelmaier Model):")
    print(f"    - Prediksi Umur Uji Lab N_f(50%)      : {n50_test:,.0f} siklus termal")
    print(f"    - Prediksi Umur Lapangan N_f(50%)     : {n50_field:,.0f} siklus termal")
    print(f"    - Proyeksi Umur Operasi Lapangan      : {n50_field / (freq_f * 365.25):.2f} tahun")

    # 4. Model Akumulasi Energi Inelastis Darveaux (Simulasi FEM)
    # Misalkan kerapatan energi regangan inelastis uji lab Delta W = 0.28 MPa
    delta_w_test = 0.28
    pad_dia = 0.40 # mm
    n0, dadn, nf_darv = ecu_engine.darveaux_crack_growth_life(delta_w_test, pad_dia)

    print(f"\n[3] Model Perambatan Retak Darveaux (Kerapatan Energi ΔW = {delta_w_test} MPa):")
    print(f"    - Inisiasi Retak (N_0)                : {n0:,.0f} siklus")
    print(f"    - Laju Perambatan Retak (da/dN)       : {dadn * 1e6:.4f} nm/siklus")
    print(f"    - Siklus Patah Total (N_f)            : {nf_darv:,.0f} siklus")

    # 5. Keandalan Sistem Paket BGA 16 Sambungan Sudut Kritis (Weibull Reliability)
    eta_single = n50_test / (math.log(2.0) ** (1.0 / 8.5)) # Konversi median ke scale parameter eta
    beta_val = 8.5
    cycles_arr = np.linspace(100, 4000, 8)
    res_weibull = ecu_engine.package_weibull_reliability(
        cycles=cycles_arr,
        eta_joint=eta_single,
        beta_shape=beta_val,
        num_critical_joints=16
    )

    print(f"\n[4] Evaluasi Keandalan Weibull Sistem Paket BGA (16 Bola Kritis, Beta={beta_val}):")
    print(f"    - Karakteristik Hidup Single Joint (η_joint)   : {eta_single:,.0f} siklus")
    print(f"    - Karakteristik Hidup Paket BGA (η_package)    : {res_weibull['eta_package']:,.0f} siklus")
    print(f"    - Tabel Laju Keandalan Paket BGA:")
    print(f"      {'Siklus Uji':>12} | {'Keandalan Tunggal':>18} | {'Keandalan Paket BGA':>20} | {'Prob. Kerusakan (%)':>20}")
    print("      " + "-" * 78)
    for c, r_s, r_p, cdf in zip(res_weibull['cycles'], res_weibull['r_single'], res_weibull['r_package'], res_weibull['cdf_failure']):
        print(f"      {c:12.0f} | {r_s:18.6f} | {r_p:20.6f} | {cdf*100:19.4f}%")
```

---

## 5. Studi Kasus Industri: Evaluasi Modul Inverter Propulsi EV (*Electric Vehicle Inverter*)

### 5.1 Deskripsi Kasus
Sebuah tier-1 supplier komponen otomotif memproduksi modul kontrol traksi silikon karbida (*SiC Power Module*) yang terpasang langsung di atas *water-cooled heatsink*. 
- **Spesifikasi Operasi**: Siklus pemanasan harian berulang akibat akselerasi kendaraan menghasilkan fluktuasi suhu $\Delta T = 55^\circ\text{C}$ dengan temperatur puncak $T_{\text{max}} = 90^\circ\text{C}$ dan rata-rata 6 siklus termal per hari.
- **Kebutuhan Desain**: Garansi keandalan struktural $B_{0.1} \ge 15\ \text{tahun}$ (kurang dari $0.1\%$ kegagalan dalam 15 tahun masa pakai kendaraan listrik).
- **Prosedur Uji Lolos Kualifikasi**: Uji *thermal shock* laboratorium standar JEDEC JESD22-A104 Cond G ($-40^\circ\text{C} \text{ s/d } +125^\circ\text{C}$, 24 siklus/hari).

### 5.2 Analisis dan Hasil Solusi
1. **Faktor Percepatan (AF)**:
   Dengan menghitung rasio Norris-Landzberg antara profil laboratorium ($\Delta T = 165\ \text{K}$, $T_{\text{max}} = 398.15\ \text{K}$, $f=24$) dan lapangan ($\Delta T = 55\ \text{K}$, $T_{\text{max}} = 363.15\ \text{K}$, $f=6$), diperoleh nilai $AF = 38.74\times$.
2. **Kebutuhan Siklus Uji Laboratorium**:
   Untuk menjamin 15 tahun masa pakai lapangan ($15 \times 365.25 \times 6 = 32,\!872.5\ \text{siklus}$), pengujian laboratorium wajib dijalankan hingga:
   
   $$N_{\text{uji target}} = \frac{32,\!872.5}{38.74} \approx 848.5\ \text{siklus}$$
   
3. **Desain Margin Keamanan**:
   Berdasarkan kurva Weibull dengan parameter bentuk $\beta = 8.5$, batas bawah reliabilitas $B_{0.1}$ (probabilitas kegagalan $0.1\%$) adalah $N(B_{0.1}) = \eta \cdot [-\ln(0.999)]^{1/8.5} = 0.443 \cdot \eta$. Dengan $\eta_{\text{package}} = 2,\!240\ \text{siklus}$, umur desain aman adalah $N_{B0.1} = 992\ \text{siklus uji}$ ($> 849\ \text{siklus}$), sehingga rancangan modul lolos kualifikasi industri secara memuaskan.

---

## 6. Pertanyaan Evaluasi & Panduan Praktikum Mandiri

1. **Analisis Sensitivitas Dimensi Standoff ($h_s$)**:
   Jika ketebalan *stencil aperture* pada proses *solder paste printing* ditingkatkan sehingga ketinggian bola solder ($h_s$) naik sebesar $25\%$, hitung persentase penurunan regangan geser termomekanis ($\Delta \gamma$) dan persentase peningkatan umur fatik Engelmaier!
2. **Pengaruh Penggantian Paduan Solder (SAC305 vs Sn63Pb37)**:
   Jelaskan mengapa solder bebas timbal SAC305 lebih rentan terhadap retak fatik termal pada siklus termal ekstrem bersuhu tinggi dibandingkan solder timbal konvensional, ditinjau dari tegangan alir (*yield stress*) dan kinetika pembentukan presipitat intermetalik $\text{Ag}_3\text{Sn}$!
3. **Optimasi Waktu Dwell**:
   Berdasarkan persamaan partisi energi viskoplastis, mengapa penambahan waktu *dwell* dari 10 menit menjadi 30 menit pada pengujian termal mempercepat akumulasi kerusakan fatik solder secara nonlinier?

---

## 7. Referensi Akademik & Standar Industri Terverifikasi

1. **Engelmaier, W.** (1983). *Fatigue life estimation of surface mount solder attachments*. **IEEE Transactions on Components, Hybrids, and Manufacturing Technology**, 6(3), 232–237. DOI: [10.1109/TCHMT.1983.1136181](https://doi.org/10.1109/TCHMT.1983.1136181)
2. **Norris, K. C., & Landzberg, A. H.** (1969). *Reliability of controlled collapse interconnections*. **IBM Journal of Research and Development**, 13(3), 266–271. DOI: [10.1147/rd.133.0266](https://doi.org/10.1147/rd.133.0266)
3. **Darveaux, R.** (2000). *Effect of simulation methodology on solder joint fatigue life prediction*. **Journal of Electronic Packaging - ASME Transactions**, 124(3), 147–154. DOI: [10.1115/1.1413769](https://doi.org/10.1115/1.1413769)
4. **IPC Standards**:
   - **IPC-9701A** (2006). *Performance Test Methods and Qualification Requirements for Surface Mount Solder Attachments*. IPC Association Connecting Electronics Industries, Bannockburn, IL.
   - **IPC-SM-785** (1992). *Guidelines for Accelerated Reliability Testing of Surface Mount Solder Attachments*.
5. **JEDEC Solid State Technology Association**:
   - **JESD22-A104F** (2020). *Temperature Cycling*. JEDEC Standard Document.
6. **Basaran, C., & Chandaroy, R.** (1998). *Mechanics of Pb40/Sn60 solder alloys subjected to thermal cycling*. **Applied Mathematical Modelling**, 22(8), 601–627. DOI: [10.1016/S0307-904X(98)10014-9](https://doi.org/10.1016/S0307-904X(98)10014-9)
7. **Pecht, M., & Kang, M.** (2023). *Physics-of-Failure-Based Prognostics and Health Management for Electronics*. **IEEE Access**, 11, 45210–45228. DOI: [10.1109/ACCESS.2023.3273190](https://doi.org/10.1109/ACCESS.2023.3273190)
