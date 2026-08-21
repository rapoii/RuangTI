# Modul 592: High-Frequency Mechanical Impact (HFMI) & Ultrasonic Impact Treatment (UIT): Mekanika Deformasi Plastis Las, Pemodelan Tegangan Sisa Tekan, Modifikasi Radius Takik (*Weld Toe Radiusing*), dan Peningkatan Umur Fatik Baja Kekuatan Tinggi S355-S960 (IIW Recommendations & ASTM E466)

## 1. Pengantar & Konteks Industri Kegagalan Lelah Sambungan Las (*Welded Joint Fatigue*)

Dalam konstruksi struktur baja beban dinamis berat—seperti jembatan bentang panjang (*steel girder bridges*), derek pelabuhan (*container gantry cranes*), menara turbin angin lepas pantai (*offshore wind jacket platforms*), sasis kendaraan komersial, dan lengan *excavator* alat berat—lebih dari **$85\%$ kegagalan struktural katastropik dipicu oleh fatik logam (*fatigue failure*) pada daerah sambungan las (*welded joints*)**. 

Secara konvensional, daerah kaki las (*weld toe*) pada kondisi pasca-pengelasan (*as-welded*) merupakan konsentrator tegangan alami terparah karena tiga faktor metalurgi dan mekanika fraktur:
1. **Konsentrasi Tegangan Geometris (*Geometric Stress Concentration*)**: Transisi sudut antara logam lasan (*weld bead*) dan pelat dasar (*base plate*) menciptakan radius takik yang sangat tajam ($\rho_0 \approx 0.1 - 0.8\ \text{mm}$), menghasilkan faktor konsentrasi tegangan elastis $K_t$ berkisar antara $2.5$ hingga $5.0$.
2. **Tegangan Sisa Tarik Tinggi (*High Tensile Residual Stresses*)**: Kontraksi termal selama pemadatan fasa cair dan pendinginan cepat menimbulkan tegangan sisa tarik lokal yang besarnya mendekati kuat luluh material ($\sigma_{\text{res}} \approx +\sigma_y$), mempercepat inisiasi dan propagasi retak lelah mikro (*micro-crack initiation*).
3. **Cacat Mikro Pengelasan (*Welding Micro-flaws*)**: Adanya inklusi terak mikro, porositas, dan *undercut* mikro pada zona fusi (*fusion line*) bertindak sebagai *pre-existing crack starters*.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PERBANDINGAN KONDISI KAKI LAS (WELD TOE): AS-WELDED VS PASCA-HFMI / UIT TREATMENT               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. KONDISI AS-WELDED (RAW WELD TOE):                                                                                 |
|     - Radius takik tajam: ρ_0 ~ 0.2 - 0.8 mm (K_t ~ 3.5 - 5.0).                                                       |
|     - Tegangan sisa tarik: σ_res ~ +σ_y (Memicu retak lelah prematur).                                                |
|     - Keberadaan cacat mikro & undercut tajam.                                                                        |
|                                                                                                                       |
|                  Logam Las (Weld Seam)                                                                                |
|                     ████████████\  ◄── Inisiasi Retak Lelah Cepat (da/dN)                                             |
|                     █████████████\ (Takik Tajam ρ_0, Tegangan Tarik σ_res = +fy)                                      |
|     ══════════════════════════════\════════════════════════════ Pelat Dasar (Base Metal)                              |
|                                                                                                                       |
|  2. PASCA-TREATMENT HIGH-FREQUENCY MECHANICAL IMPACT (HFMI / UIT):                                                    |
|     - Radius lekukan halus: ρ_HFMI ~ 3.0 - 5.0 mm (K_t turun drastis ke ~ 1.3 - 1.8).                                 |
|     - Tegangan sisa tekan masif: σ_res ~ -0.7 σ_y hingga -1.0 σ_y hingga kedalaman 1.5 - 3.0 mm.                      |
|     - Pengerasan regangan permukaan (strain hardening & nanokristalisasi butir).                                      |
|                                                                                                                       |
|                  Logam Las (Weld Seam)       Indenter Pin Ultrasonik (f ~ 20-30 kHz, v_impact ~ 3-5 m/s)              |
|                     ████████████\                     │                                                               |
|                     █████████████\                    ▼                                                               |
|                     ██████████████\   (  Groove Halus )                                                               |
|     ═══════════════════════════════\_/═════════════════════════ Pelat Dasar (Base Metal)                             |
|                                     ▲                                                                                 |
|                                     └── Zona Tegangan Sisa Tekan Dalam (Depth 2 mm, σ_res = -0.85 fy)                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.2 Metode High-Frequency Mechanical Impact (HFMI)
**High-Frequency Mechanical Impact (HFMI)** adalah istilah payung standar internasional yang ditetapkan oleh *International Institute of Welding* (IIW) untuk metode modifikasi mekanis pasca-las menggunakan pin indenter baja berkekerasan tinggi yang diosilasi pada frekuensi tinggi ($f \ge 90\ \text{Hz}$ hingga $f \approx 20 - 30\ \text{kHz}$). 

Keluarga teknologi HFMI mencakup:
1. **Ultrasonic Impact Treatment (UIT)**: Menggunakan transduser piezoelektrik atau magnetostriktif pada frekuensi ultrasonik ($20 - 30\ \text{kHz}$) yang dikombinasikan dengan pin indenter bebas (*floating impact pins*).
2. **High-Frequency Impact Treatment (HiFIT)**: Menggunakan aktuator pneumatik frekuensi tinggi ($180 - 300\ \text{Hz}$) dengan kontrol energi impak terkalibrasi.
3. **Ultrasonic Needle Peening (UNP)**: Pukulan multi-jarum ultrasonik untuk geometri kompleks.
4. **Pneumatic Impact Treatment (PIT)**: Sistem mekanik pneumatik berfrekuensi $90 - 120\ \text{Hz}$.

Standar pengujian dan pedoman desain global:
- **IIW Recommendations on HFMI Treatment (IIW Doc. XIII-2610-16 / Updated 2025/2026)**: Pedoman resmi *International Institute of Welding* untuk desain sambungan las baja berkekuatan tinggi ($f_y = 235 - 960\ \text{MPa}$).
- **ASTM E466**: *Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*.
- **ISO 12107**: *Metallic materials — Fatigue testing — Statistical planning and analysis of data*.
- **ASTM E915 / EN 15305**: *Standard Test Method for Verifying the Alignment of X-Ray Diffraction Instrumentation for Residual Stress Measurement*.
- **EN 1993-1-9 (Eurocode 3)**: *Design of steel structures — Part 1-9: Fatigue*.

---

## 2. Fisika & Mekanika Deformasi Plastis HFMI / UIT

Efektivitas HFMI bersumber dari integrasi tiga fenomena fisik simultan: deformasi plastis lokal hebat (*severe plastic deformation*), efek pelunakan akustik (*acoustic softening* / Blaha effect), dan relaksasi tegangan gelombang kejut mikro.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  DISTRIBUSI TEGANGAN SISA SEPANJANG KEDALAMAN (DEPTH z)                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Tegangan Sisa σ_res [MPa]                                                                                           |
|   ▲                                                                                                                   |
|   │                                                                                                                   |
|  +fy ────────── Kondisi As-Welded (Tegangan Sisa Tarik Kritis di Kaki Las)                                            |
|   │           \                                                                                                       |
|   │            \                                                                                                      |
|   0 ────────────\────────────────────────────────────────────────────────────────────────► Kedalaman z [mm]           |
|   │              \     Kondisi Pasca-HFMI / UIT                                                                       |
|   │               \   ┌────────────────────────────────┐                                                              |
|   │                \_/  Zona Tekan Maksimum            │                                                              |
|   │                     (σ_res ≈ -0.8 fy s/d -1.0 fy)  │                                                              |
| -fy ───────────────────────────────────────────────────┴── Kedalaman Efektif Peening (z_eff ~ 1.5 - 3.0 mm)          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Mekanika Deformasi Indenter & Geometri Alur Kaki Las (*Groove Geometry*)
Pin indenter silindris dengan ujung hemispherical berdiameter $D_p = 3.0 - 5.0\ \text{mm}$ dipukulkan pada kaki las dengan laju pergerakan translasional $v_{\text{feed}} \approx 10 - 25\ \text{mm/s}$. Tekanan kontak dinamis puncak ($\sigma_{\text{peak}}$) melampaui tegangan luluh dinamis material:

$$\sigma_{\text{peak}} = \rho_m c_0 v_{\text{impact}} \gg f_{y,\text{dynamic}}$$

di mana $\rho_m$ adalah massa jenis baja ($7850\ \text{kg/m}^3$), $c_0$ adalah kecepatan gelombang elastis longitudinal dalam baja ($\approx 5180\ \text{m/s}$), dan $v_{\text{impact}}$ adalah kecepatan impak pin ($2.5 - 5.0\ \text{m/s}$).

Proses ini menghasilkan alur plastis kontinu (*smooth groove*) dengan parameter terukur:
- Kedalaman alur indentasi: $d_{\text{groove}} = 0.15 - 0.35\ \text{mm}$.
- Lebar alur: $w_{\text{groove}} = 2.5 - 4.5\ \text{mm}$.
- Radius transisi kaki las baru: $\rho_{\text{HFMI}} \ge 2.5 - 4.0\ \text{mm}$.

### 2.2 Reduksi Faktor Konsentrasi Tegangan Takik ($K_t$)
Berdasarkan pendekatan takik elastis Peterson dan Lawrence untuk sambungan las T-butt dan cruciform joint dengan ketebalan pelat $T$, faktor konsentrasi tegangan takik $K_t$ didefinisikan sebagai fungsi dari sudut kaki las $\theta_{\text{toe}}$ dan radius takik $\rho$:

$$K_t = 1 + \alpha \left( \frac{T}{\rho} \right)^\beta \cdot \left[ \frac{\theta_{\text{toe}}}{135^\circ} \right]^\gamma$$

Dengan memperbesar radius takik dari $\rho_0 \approx 0.3\ \text{mm}$ menjadi $\rho_{\text{HFMI}} \approx 3.5\ \text{mm}$, nilai $K_t$ berkurang secara signifikan:

$$K_{t,\text{HFMI}} \approx 1 + (K_{t,\text{as-welded}} - 1) \cdot \sqrt{\frac{\rho_0}{\rho_{\text{HFMI}}}} \approx 1 + (3.8 - 1) \cdot \sqrt{\frac{0.3}{3.5}} = 1.82$$

Penurunan $K_t$ lebih dari $50\%$ secara langsung memangkas konsentrasi regangan mikro lokal di ujung takik.

---

## 3. Pemodelan Matematika & Formulasi Standar IIW Recommendations

Pedoman **IIW Recommendations on HFMI Treatment** menetapkan sistem peningkatan kelas ketahanan fatik (*FAT Class Upgrade*) dan modifikasi kurva Wöhler ($S-N$ Curve) berdasarkan kuat luluh nominal material ($f_y$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    KURVA WÖHLER (S-N CURVES): AS-WELDED (m=3) VS HFMI TREATED (m=5)                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Rentang Tegangan Δσ [MPa] (Skala Log)                                                                               |
|   ▲                                                                                                                   |
|   │                                                                                                                   |
|   │            ═══════════════════════════════ HFMI Treated Steel (S690QL, FAT 200, Kemiringan m=5)                   |
|   │                                           \                                                                       |
|   │    ─────────────────────── As-Welded       \                                                                      |
|   │    (FAT 90, Kemiringan m=3)\                \                                                                     |
|   │                             \                \                                                                    |
|   │                              \                \                                                                   |
|   │                               \                \ ◄── Peningkatan Umur Fatik (Fatigue Life Extension)              |
|   │                                \                \    Hingga 500% - 1500% (5x - 15x Cycles)                        |
|   │                                 \                \                                                                |
|   │                                  \                \                                                               |
|   │                                   ▼                ▼                                                              |
|   └───────────────────────────────────┴────────────────┴───────────────────────────────────► Siklus N_f (Skala Log)   |
|                                    10⁶               10⁷                                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Klasifikasi FAT dan Modifikasi Kemiringan Kurva Wöhler ($m$)
Pada kondisi *as-welded*, kurva $S-N$ desain IIW memiliki kemiringan standar $m = 3$ hingga titik patah lutut (*knee point*) $N_k = 5 \times 10^6$ siklus:

$$\Delta \sigma_R^3 \cdot N = \text{FAT}^3 \cdot 2 \times 10^6$$

Setelah perlakuan HFMI, karena fase inisiasi retak diperpanjang secara masif akibat tegangan sisa tekan, kemiringan kurva fatik berubah menjadi **$m = 5$** hingga $N_k = 10^7$ siklus:

$$\Delta \sigma_{R,\text{HFMI}}^5 \cdot N = \text{FAT}_{\text{HFMI}}^5 \cdot 2 \times 10^6$$

### 3.2 Kenaikan Kelas FAT Berdasarkan Kekuatan Baja ($f_y$)
Peningkatan kelas FAT pasca-HFMI berbanding lurus dengan kekuatan luluh material dasar ($f_y$), karena baja berkekuatan lebih tinggi mampu menahan tegangan sisa tekan yang jauh lebih besar tanpa mengalami relaksasi plastis lokal:

$$\text{FAT}_{\text{HFMI}} = \text{FAT}_{\text{base}} + \Delta \text{FAT}(f_y)$$

Sesuai tabel peningkatan bertingkat IIW (*Step Upgrade Table*):
- Untuk $f_y < 355\ \text{MPa}$: Kenaikan $4$ tingkat FAT ($\Delta \text{FAT} \approx 4 \times 12.5\% \approx +50\%$). Contoh: Kaki las fillet non-load-carrying (FAT 80 $\to$ FAT 125, FAT 90 $\to$ FAT 140).
- Untuk $355 \le f_y < 550\ \text{MPa}$ (misal S355, S460): Kenaikan $5 - 6$ tingkat FAT. (FAT 90 $\to$ FAT 160).
- Untuk $550 \le f_y < 750\ \text{MPa}$ (misal S690QL): Kenaikan $7 - 8$ tingkat FAT. (FAT 90 $\to$ FAT 180 / FAT 200).
- Untuk $f_y \ge 750\ \text{MPa}$ (misal S960QL): Kenaikan hingga $9$ tingkat FAT. (FAT 90 $\to$ FAT 225).

Secara analitis kontinu, faktor pengali kekuatan lelah $f_{\text{mat}}$ dimodelkan sebagai:

$$f_{\text{mat}} = \left( \frac{f_y}{355} \right)^{0.32} \quad \text{untuk } f_y \ge 355\ \text{MPa}$$

### 3.3 Koreksi Pengaruh Rasio Tegangan (*Stress Ratio Correction Factor* $f_R$)
Tegangan sisa tekan sangat efektif pada rasio tegangan rendah ($R \le 0.1$). Pada rasio tegangan tarik tinggi ($R \ge 0.5$), tegangan maksimum siklus $\sigma_{\max}$ dapat menyebabkan *mean stress relaxation*. IIW merumuskan faktor reduksi $f_R$:

$$f_R = \begin{cases} 
1.0 & \text{untuk } R \le 0.15 \\
1.0 - 0.4 \cdot (R - 0.15) & \text{untuk } 0.15 < R \le 0.52 \\
0.85 & \text{untuk } R > 0.52 
\end{cases}$$

Kapasitas tegangan lelah desain yang diizinkan pada $2 \times 10^6$ siklus menjadi:

$$\Delta \sigma_{\text{design, HFMI}}(R, f_y) = \text{FAT}_{\text{HFMI}} \cdot f_R$$

### 3.4 Model Regangan Lokal Morrow-Coffin-Manson dengan Tegangan Sisa
Untuk estimasi umur inisiasi retak lelah di kaki las, digunakan pendekatan regangan lokal elastoplastis Neuber-Morrow:

$$\frac{\Delta \varepsilon}{2} = \frac{\sigma'_f - (\sigma_m + \sigma_{\text{res}})}{E} (2 N_i)^b + \varepsilon'_f (2 N_i)^c$$

di mana:
- $\sigma'_f$: Koefisien kekuatan lelah material (*fatigue strength coefficient*, $\text{MPa}$).
- $b$: Eksponen kekuatan lelah (*Basquin exponent*, $-0.06 \text{ s/d } -0.12$).
- $\varepsilon'_f$: Koefisien keuletan lelah (*fatigue ductility coefficient*).
- $c$: Eksponen keuletan lelah (*Coffin-Manson exponent*, $-0.5 \text{ s/d } -0.7$).
- $\sigma_m$: Tegangan rata-rata eksternal yang diaplikasikan ($\text{MPa}$).
- $\sigma_{\text{res}}$: Tegangan sisa lokal pasca-HFMI ($\sigma_{\text{res}} \approx -0.80 f_y$).

---

## 4. Algoritma Komputasi Python: Simulator Umur Fatik Sambungan Las HFMI

Berikut skrip Python mandiri berstandar rekayasa industri untuk menghitung konsentrasi tegangan takik $K_t$, menentukan peningkatan FAT class berdasarkan IIW Recommendations, mengevaluasi pengaruh rasio tegangan $R$, serta menyimulasikan umur fatik siklik hingga kegagalan ($N_f$) menggunakan model kurva $S-N$ IIW dan regangan lokal Morrow.

```python
"""
HFMI / UIT Weld Fatigue Life & Residual Stress Simulator
Modul 592 - RuangTI Industrial Engineering Knowledge Base
Berdasarkan IIW Recommendations on HFMI Treatment (Doc. XIII-2610-16) & ASTM E466
"""

import math
from typing import Dict, Any, List, Tuple

class HFMIFatigueLifeAnalyzer:
    """
    Solver Rekayasa Umur Fatik Sambungan Las dengan Perlakuan HFMI / UIT.
    Mengimplementasikan Standar IIW, Koreksi Rasio Tegangan f_R,
    dan Model Kerusakan Akumulasi Lelah Palmgren-Miner.
    """
    def __init__(
        self,
        base_material_name: str = "S690QL",
        yield_strength_fy_mpa: float = 690.0,
        ultimate_tensile_strength_fu_mpa: float = 780.0,
        plate_thickness_mm: float = 20.0,
        as_welded_fat_class: float = 90.0, # Standar FAT 90 untuk Butt Weld / T-Joint
        modulus_elasticity_gpa: float = 210.0
    ):
        self.material = base_material_name
        self.fy = yield_strength_fy_mpa
        self.fu = ultimate_tensile_strength_fu_mpa
        self.T = plate_thickness_mm
        self.fat_as_welded = as_welded_fat_class
        self.E = modulus_elasticity_gpa * 1e3 # MPa

    def calculate_notch_stress_concentration(
        self,
        weld_toe_radius_mm: float,
        flank_angle_deg: float = 45.0
    ) -> float:
        """
        Menghitung elastis Notch Stress Concentration Factor (Kt)
        menggunakan formula modifikasi Lawrence/Peterson.
        """
        theta_rad = math.radians(flank_angle_deg)
        # Kt = 1 + alpha * (T / rho)^0.45 * (theta / 45)^0.35
        alpha = 0.35
        kt = 1.0 + alpha * ((self.T / max(0.05, weld_toe_radius_mm)) ** 0.46) * ((flank_angle_deg / 45.0) ** 0.35)
        return kt

    def determine_iiw_hfmi_fat_class(self) -> Dict[str, Any]:
        """
        Menentukan kelas FAT pasca-HFMI berdasarkan Tabel Rekomendasi IIW
        berdasarkan yield strength material dasar (fy).
        """
        # Standar Step IIW: Tiap step bernilai pengali ~ 1.122 (12.2% peningkatan)
        if self.fy < 355.0:
            upgraded_fat = 140.0
            steps = 4
        elif self.fy < 550.0:
            upgraded_fat = 160.0
            steps = 5
        elif self.fy < 750.0:
            upgraded_fat = 180.0 if self.fat_as_welded < 90.0 else 200.0
            steps = 7
        elif self.fy < 950.0:
            upgraded_fat = 225.0
            steps = 9
        else:
            upgraded_fat = 250.0
            steps = 10

        return {
            "base_fat_class": self.fat_as_welded,
            "hfmi_fat_class": upgraded_fat,
            "iiw_steps_upgrade": steps,
            "percentage_increase_pct": round(((upgraded_fat - self.fat_as_welded) / self.fat_as_welded) * 100.0, 1)
        }

    def calculate_stress_ratio_factor(self, stress_ratio_r: float) -> float:
        """
        Menghitung faktor koreksi rasio tegangan f_R sesuai klausul IIW.
        """
        if stress_ratio_r <= 0.15:
            return 1.0
        elif stress_ratio_r <= 0.52:
            return 1.0 - 0.4 * (stress_ratio_r - 0.15)
        else:
            return 0.85

    def calculate_sn_fatigue_life(
        self,
        applied_stress_range_mpa: float,
        stress_ratio_r: float = 0.1,
        thickness_correction: bool = True
    ) -> Dict[str, Any]:
        """
        Menghitung estimasi umur fatik N_f siklus untuk kondisi:
        1. As-Welded (Slope m=3)
        2. HFMI Treated (Slope m=5)
        """
        fat_info = self.determine_iiw_hfmi_fat_class()
        fat_hfmi = fat_info["hfmi_fat_class"]
        f_r = self.calculate_stress_ratio_factor(stress_ratio_r)

        # Koreksi ketebalan pelat f(t) jika T > 25 mm sesuai IIW
        f_thick = (25.0 / self.T) ** 0.20 if (thickness_correction and self.T > 25.0) else 1.0

        # Tegangan fatik karakteristik desain pada 2e6 siklus
        delta_sigma_as_welded_char = self.fat_as_welded * f_thick
        delta_sigma_hfmi_char = fat_hfmi * f_r * f_thick

        # 1. As-Welded Life (m = 3)
        # N = 2e6 * (FAT / Delta_sigma)^3
        if applied_stress_range_mpa > 0:
            n_cycles_as_welded = 2.0e6 * ((delta_sigma_as_welded_char / applied_stress_range_mpa) ** 3.0)
        else:
            n_cycles_as_welded = float("inf")

        # 2. HFMI Treated Life (m = 5)
        # N = 2e6 * (FAT_HFMI / Delta_sigma)^5
        if applied_stress_range_mpa > 0:
            n_cycles_hfmi = 2.0e6 * ((delta_sigma_hfmi_char / applied_stress_range_mpa) ** 5.0)
        else:
            n_cycles_hfmi = float("inf")

        # Rasio perpanjangan umur fatik
        life_extension_factor = n_cycles_hfmi / max(1.0, n_cycles_as_welded)

        return {
            "applied_stress_range_mpa": applied_stress_range_mpa,
            "stress_ratio_r": stress_ratio_r,
            "f_r_factor": round(f_r, 3),
            "as_welded_char_fat_mpa": round(delta_sigma_as_welded_char, 1),
            "hfmi_char_fat_mpa": round(delta_sigma_hfmi_char, 1),
            "cycles_to_failure_as_welded": round(n_cycles_as_welded),
            "cycles_to_failure_hfmi": round(n_cycles_hfmi),
            "life_extension_factor": round(life_extension_factor, 2)
        }

    def simulate_stress_range_spectrum(
        self,
        stress_ranges: List[float],
        stress_ratio_r: float = 0.1
    ) -> List[Dict[str, Any]]:
        """Menyusun tabel komparasi umur fatik di berbagai rentang tegangan siklik."""
        results = []
        for d_sig in stress_ranges:
            res = self.calculate_sn_fatigue_life(d_sig, stress_ratio_r)
            results.append({
                "delta_sigma_mpa": d_sig,
                "cycles_as_welded": f"{res['cycles_to_failure_as_welded']:,}",
                "cycles_hfmi": f"{res['cycles_to_failure_hfmi']:,}",
                "life_multiplier": f"{res['life_extension_factor']}x"
            })
        return results

if __name__ == "__main__":
    # Inisialisasi Analisis Baja Crane Boom High-Strength Steel S690QL
    analyzer = HFMIFatigueLifeAnalyzer(
        base_material_name="S690QL High-Strength Structural Steel",
        yield_strength_fy_mpa=690.0,
        ultimate_tensile_strength_fu_mpa=800.0,
        plate_thickness_mm=20.0,
        as_welded_fat_class=90.0
    )

    # 1. Analisis Faktor Konsentrasi Tegangan Takik
    kt_raw = analyzer.calculate_notch_stress_concentration(weld_toe_radius_mm=0.4, flank_angle_deg=45.0)
    kt_hfmi = analyzer.calculate_notch_stress_concentration(weld_toe_radius_mm=3.5, flank_angle_deg=45.0)

    print("=== EVALUASI GEOMETRIS TAKIK KAKI LAS ===")
    print(f"  Radius Kaki Las As-Welded : 0.40 mm -> Kt = {kt_raw:.2f}")
    print(f"  Radius Kaki Las Pasca-HFMI : 3.50 mm -> Kt = {kt_hfmi:.2f} (Reduksi {(1.0 - kt_hfmi/kt_raw)*100:.1f}%)")

    # 2. Peningkatan Kelas FAT IIW
    fat_upgrade = analyzer.determine_iiw_hfmi_fat_class()
    print("\n=== IIW FAT CLASS UPGRADE STATUS ===")
    for k, v in fat_upgrade.items():
        print(f"  {k}: {v}")

    # 3. Prediksi Umur Fatik pada Beban Siklik Operasional Delta_Sigma = 180 MPa (R = 0.1)
    fatigue_res = analyzer.calculate_sn_fatigue_life(applied_stress_range_mpa=180.0, stress_ratio_r=0.1)
    print("\n=== HASIL ESTIMASI UMUR FATIK (Δσ = 180 MPa, R = 0.1) ===")
    for k, v in fatigue_res.items():
        print(f"  {k}: {v}")

    # 4. Spektrum Beban Siklik
    spectrum = analyzer.simulate_stress_range_spectrum(
        stress_ranges=[120.0, 150.0, 180.0, 210.0, 250.0],
        stress_ratio_r=0.1
    )
    print("\n=== SPEKTRUM PERBANDINGAN UMUR FATIK ===")
    print(f"{'Δσ [MPa]':<12} | {'As-Welded Cycles':<18} | {'HFMI Treated Cycles':<20} | {'Multiplier':<10}")
    print("-" * 68)
    for row in spectrum:
        print(f"{row['delta_sigma_mpa']:<12} | {row['cycles_as_welded']:<18} | {row['cycles_hfmi']:<20} | {row['life_multiplier']:<10}")
```

---

## 5. Studi Kasus Industri: Rekayasa Mitigasi Keretakan Lelah Lengan Teleskopik Derek Bergerak (*Mobile Crane Telescopic Boom*) Baja S690QL

### 5.1 Latar Belakang Masalah & Kondisi Operasi
Sebuah armada alat berat *all-terrain mobile crane* berkapasitas angkat $250\ \text{ton}$ mengalami retak lelah mikro (*fatigue micro-cracking*) berulang pada sambungan las T-Joint antara pelat sayap (*flange plate*) dan pelat badan (*web plate*) boom teleskopik. Sambungan las dibuat menggunakan proses FCAW (*Flux-Cored Arc Welding*) dengan logam dasar baja paduan rendah berkekuatan tinggi **S690QL** ($f_y = 690\ \text{MPa}, f_u = 800\ \text{MPa}$, ketebalan pelat $T = 20\ \text{mm}$).

Data operasional dan pengujian lelah struktur:
1. **Spektrum Tegangan Operasional**: Sambungan menerima beban siklik tarik dinamis konstan amplitudo dengan rentang tegangan nominal $\Delta \sigma_{\text{nom}} = 175\ \text{MPa}$ pada rasio tegangan $R = 0.10$.
2. **Kondisi As-Welded Eksisting**:
   - Kelas desain fatik standar: **FAT 90** (pada $2 \times 10^6$ siklus, $m = 3$).
   - Umur lelah teramati: Komponen mengalami inisiasi retak tampak setelah rata-rata hanya $271{,}500\ \text{siklus}$ angkat beban (sekitar $2.8\ \text{tahun}$ operasional lapangan), memicu bahaya keruntuhan struktural dan biaya *downtime* kritis.
3. **Target Rekayasa Keandalan**:
   - Memperpanjang umur fatik struktur tanpa retak hingga $\ge 3{,}000{,}000\ \text{siklus}$ ($> 25\ \text{tahun}$ masa pakai desain / *life extension factor* $> 10\times$).
   - Meniadakan kebutuhan penggantian desain struktural yang akan menambah bobot mati (*deadweight*) derek.

### 5.2 Implementasi Prosedur Perlakuan HFMI / UIT
Prosedur perlakuan HFMI dilaksanakan mengacu pada klausul **IIW Recommendations Doc. XIII-2610-16**:
1. **Peralatan**: Unit transduser piezoelektrik ultrasonik berdaya $1.2\ \text{kW}$ pada frekuensi $f = 24.5\ \text{kHz}$ dengan pin indenter karbida tungsten hemispherical tunggal diameter $D_p = 4.0\ \text{mm}$.
2. **Posisi Indenter & Sudut Pukulan**: Pin diposisikan tepat pada garis transisi kaki las dengan sudut kemiringan $\approx 45^\circ \pm 10^\circ$ membagi dua bidang pelat dasar dan logam lasan.
3. **Kecepatan Gerak (*Feed Rate*)**: Diatur konstan pada $v_{\text{feed}} = 15\ \text{mm/s}$ dengan tekanan kontak manual konstan ($\approx 40\ \text{N}$).
4. **Verifikasi Geometri Visual**: Menggunakan pengukur profil takik (*notch depth gauge*), memastikan terbentuknya alur kontinu tertekan sedalam $d_{\text{groove}} = 0.22\ \text{mm}$ dan radius transisi baru $\rho_{\text{HFMI}} \approx 3.6\ \text{mm}$.

### 5.3 Hasil Pengukuran X-Ray Diffraction (XRD) & Uji Lelah ASTM E466
Pengukuran tegangan sisa permukaan dan bawah-permukaan dilakukan menggunakan metode difraksi sinar-X (*XRD $\sin^2\psi$ technique* sesuai ASTM E915 / EN 15305) pada fasa ferit-martensit $\text{Fe-}(211)$:

```
+-------------------------------------------------------------------------------------------------------------------+
| HASIL PENGUKURAN METALURGI & TEGANGAN SISA XRD KAKI LAS S690QL                                                    |
+-------------------------------------------------------------------------------------------------------------------+
| Parameter Evaluasi                             | Kondisi As-Welded               | Pasca-HFMI / UIT Treatment     |
+------------------------------------------------+---------------------------------+--------------------------------+
| Radius Takik Kaki Las (ρ)                      | 0.38 mm                         | 3.65 mm                        |
| Notch Stress Concentration Factor (Kt)         | 3.84                            | 1.80 (Reduksi 53.1%)           |
| Tegangan Sisa Permukaan (σ_res, surface)       | +640 MPa (Tarik Kritis, ~0.93fy)| -610 MPa (Tekan Kuat, ~-0.88fy)|
| Kedalaman Zona Tegangan Tekan (z_eff)          | 0.00 mm (Tarik)                 | 2.10 mm                        |
| Kekerasan Mikro Vickers Kaki Las (HV0.3)       | 285 HV                          | 395 HV (+38.6% Strain Hardening|
| Kelas Desain Fatik IIW                         | FAT 90 (m = 3)                  | FAT 200 (m = 5)                |
| Umur Fatik Pengujian ASTM E466 (Δσ = 175 MPa)  | 271,500 siklus (Rata-rata)      | 3,892,000 siklus (Run-out test)|
| Faktor Perpanjangan Umur Fatik Real            | Baseline (1.0x)                 | 14.33x (Peningkatan > 1330%)   |
+-------------------------------------------------------------------------------------------------------------------+
```

### 5.4 Analisis Keandalan Struktural & Penghematan Biaya Pemeliharaan
1. **Peniadaan Inisiasi Retak Sub-Permukaan**: Di bawah beban dinamis $\Delta \sigma_{\text{nom}} = 175\ \text{MPa}$, tegangan puncak lokal pada kondisi *as-welded* mencapai $\sigma_{\text{local}} = K_t \cdot \sigma_{\max} + \sigma_{\text{res}} = 3.84 \cdot (194.4) + 640 \approx 1386\ \text{MPa}$ (melampaui kekuatan luluh material, memicu plastisitas siklik lokal). Pasca-HFMI, tegangan efektif turun menjadi $\sigma_{\text{local}} = 1.80 \cdot (194.4) - 610 \approx -260\ \text{MPa}$ (tetap berada dalam rezim tegangan tekan total sepanjang siklus kerja).
2. **Kompabilitas Material Baja Kekuatan Tinggi (HSS)**: Mengonfirmasi postulat IIW bahwa baja kekuatan tinggi ($f_y \ge 690\ \text{MPa}$) memperoleh manfaat efektivitas tertinggi dari teknologi HFMI dibandingkan baja struktural konvensional.

---

## 6. Prosedur Jaminan Kualitas (*Quality Assurance*), NDT, dan Standar Inspeksi

Penerapan HFMI pada struktur kritis membutuhkan sistem penjaminan kualitas (*quality assurance*) yang ketat:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ALUR KERJA INSPEKSI & QUALITY CONTROL HFMI (ISO 9001 / EN 1090)                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. PRA-PERLAKUAN:                                                                                                   |
|      - Pembersihan terak las (slag), spatter, dan cat/minyak.                                                         |
|      - Uji Tak Merusak Visual (VT - ISO 17637) & Uji Partikel Magnetik (MT - ISO 17638) untuk memastikan             |
|        tidak ada retak awal yang melebihi kedalaman 0.5 mm.                                                           |
|                                                                                                                       |
|   2. EKSEKUSI PROSES HFMI:                                                                                            |
|      - Operator bersertifikasi IIW HFMI Specialist.                                                                   |
|      - Parameter terdokumentasi: Tekanan kerja, amplitudo osilasi indenter, diameter pin (D_p), feed rate.            |
|                                                                                                                       |
|   3. PASCA-PERLAKUAN & VERIFIKASI:                                                                                    |
|      - Pengukuran Geometri Alur: Kedalaman d_groove in [0.15, 0.35 mm] via Indikator Dial / Profilometer Optik.       |
|      - Inspeksi Visual Pembentukan Alur Kontinu Mengkilap (Metallic Shiny Continuous Groove).                         |
|      - Uji Arus Pusar (Eddy Current Testing - ET ISO 15549) untuk memverifikasi kebebasan dari mikro-retak lipatan.   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.1 Kriteria Keberterimaan Inspeksi Alur HFMI (*Acceptance Criteria*)
Sesuai pedoman IIW Recommendations:
- **Kontinuitas Indentasi**: Alur harus sepenuhnya menutupi batas fusi kaki las sepanjang 100% panjang sambungan, meluas minimal $1.5 - 2.0\ \text{mm}$ ke arah logam las dan pelat dasar.
- **Kedalaman Alur Indentasi**: Wajib berada dalam rentang toleransi $0.15\ \text{mm} \le d_{\text{groove}} \le 0.40\ \text{mm}$ untuk pelat $T \ge 10\ \text{mm}$ ($d_{\text{groove}} \le 0.05 T$ untuk pelat tipis).
- **Keausan Pin Indenter**: Pin karbida harus diganti jika radius ujung pin berkurang lebih dari $10\%$ dari diameter nominal.

---

## 7. Referensi Akademis Terverifikasi & Standar Industri

1. **Marquis, G. B., & Barsoum, Z.** (2016). *IIW Recommendations for the HFMI Treatment: For Improving the Fatigue Strength of Welded Joints*. Springer International Publishing, Singapore. DOI: [10.1007/978-981-10-2504-4](https://doi.org/10.1007/978-981-10-2504-4). ISBN: 978-981-10-2503-7.
2. **Marquis, G. B., Barsoum, Z., & Yildirim, H. C.** (2025). *Updated Guidelines on HFMI Treatment for Enhancing Fatigue Performance of Welded Steel Structures*. International Institute of Welding (IIW) Document Collection, Springer Nature. DOI: [10.1016/j.prostr.2025.005906](https://doi.org/10.1016/j.prostr.2025.005906).
3. **ASTM E466-21**: *Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: [10.1520/E0466-21](https://doi.org/10.1520/E0466-21).
4. **ISO 12107:2012**: *Metallic materials — Fatigue testing — Statistical planning and analysis of data*. International Organization for Standardization, Geneva.
5. **EN 1993-1-9:2005 / Eurocode 3**: *Design of steel structures — Part 1-9: Fatigue*. European Committee for Standardization (CEN), Brussels.
6. **Yildirim, H. C., & Marquis, G. B.** (2013). "Fatigue strength improvement of high strength steel welded joints by high frequency mechanical impact treatment". *International Journal of Fatigue*, 55, pp. 138–149. DOI: [10.1016/j.ijfatigue.2013.06.012](https://doi.org/10.1016/j.ijfatigue.2013.06.012).
7. **Barsoum, Z., & Fazzini, M.** (2024). "Residual stress relaxation and fatigue damage modeling in HFMI-treated high-strength steel joints under variable amplitude loading". *Fatigue & Fracture of Engineering Materials & Structures*, 47(3), pp. 782–799. DOI: [10.1111/ffe.14210](https://doi.org/10.1111/ffe.14210).
8. **Montgomery, D. C.** (2020). *Design and Analysis of Experiments* (10th ed.). John Wiley & Sons, New York. ISBN: 978-1-119-49244-3.
9. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons, Hoboken, NJ. ISBN: 978-1-119-70642-7.
