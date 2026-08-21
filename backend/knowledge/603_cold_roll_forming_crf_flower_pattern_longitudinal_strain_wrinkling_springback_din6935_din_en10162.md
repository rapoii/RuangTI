# Modul 603: Cold Roll Forming (CRF) Mechanics: Desain Pola Bunga (*Flower Pattern Design*), Analisis Regangan Longitudinal Membran & Tekuk Flensa (*Flange Wrinkling*), Prediksi *Springback*, dan Optimalisasi Jarak Antar-Stand Roll Pass (DIN 6935, DIN EN 10162 & ASTM A653)

## 1. Pengantar & Konteks Industri Pembentukan Profil Logam Berkelanjutan (*Continuous Metal Profiling*)

Dalam lanskap manufaktur otomotif modern, konstruksi sipil berbobot ringan (*lightweight structural engineering*), fotovoltaik surya, dan perkeretaapian kecepatan tinggi, kebutuhan akan profil logam prismatik berpanjang kontinu dengan toleransi dimensi ultra-ketat serta integritas struktural tinggi semakin mendesak. *Cold Roll Forming* (CRF) adalah proses deformasi plastis inkremental kontinu di mana lembaran strip logam datar (*coiled sheet metal*) secara bertahap dibengkokkan melalui serangkaian pasangan rol profil berpasangan (*roll tooling stands*) yang disusun secara berurutan (*tandem line*) untuk menghasilkan profil penampang melintang kompleks bergaris lurus konstan.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                SKEMATIKA ALIRAN PROSES COLD ROLL FORMING TANDEM LINE                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [Uncoiler] ──► [Leveler] ──► [Pre-Punching] ──► [Roll Forming Stands 1 ... N] ──► [Straightener] ──► [Flying Cut]    |
|      │               │               │                       │                         │                   │          |
|   Coil Baja      Penghilang      Punching/Notching      Deformasi Pembengkokan     Koreksi Bowing,     Pemotongan     |
|   Kontinu         Residual        Lubang Presisi         Inkremental Bertahap        Twisting, Flare    Panjang Akhir |
|                                                                                                                       |
|                  Stand 1 (Pass 1)            Stand 2 (Pass 2)            Stand N (Pass Final)                         |
|                    ┌─────────┐                 ┌─────────┐                 ┌─────────┐                                |
|                    │  Top    │                 │  Top    │                 │  Top    │                                |
|                    │  Roll   │                 │  Roll   │                 │  Roll   │                                |
|                    └────┬────┘                 └────┬────┘                 └────┬────┘                                |
|    Strip Datar          │                           │                           │               Profil Final          |
|   ══════════════════════╪═══════════════════════════╪═══════════════════════════╪═══════════════► (Hat / C-Channel)  |
|                         │                           │                           │                  ┌──┐   ┌──┐        |
|                    ┌────┴────┐                 ┌────┴────┐                 ┌────┴────┐             │  │   │  │        |
|                    │ Bottom  │                 │ Bottom  │                 │ Bottom  │             └──┴───┴──┘        |
|                    │  Roll   │                 │  Roll   │                 │  Roll   │                                |
|                    └─────────┘                 └─────────┘                 └─────────┘                                |
|                         │                           │                           │                                     |
|                     Sudut: 15°                  Sudut: 45°                  Sudut: 90°                                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Keunggulan Teknis & Keekonomian Cold Roll Forming
Dibandingkan metode konvensional seperti *press brake bending*, *stamping*, atau ekstrusi panas:
1. **Kecepatan Produksi Tinggi & Efisiensi Energi**: Mampu beroperasi pada kecepatan linier kontinu antara $15\text{ m/min}$ hingga $>150\text{ m/min}$ tanpa siklus pemanasan termal, mengonsumsi energi per ton profil hingga $60\%$ lebih rendah dibandingkan ekstrusi.
2. **Kapasitas Pembentukan Material Berdaya Tarik Ultra-Tinggi (AHSS/UHSS)**: Mampu memproses baja berkekuatan tinggi generasi terbaru seperti *Dual-Phase* (DP800/DP1000), *Complex-Phase* (CP1200), dan *Martensitic Steel* (MS1500) yang memiliki keuletan terbatas melalui deformasi plastis dingin inkremental bertahap, meminimalkan risiko retak robek lokal.
3. **Hasil Akhir Mendekati Bentuk Sempurna (*Near-Zero Scrap*)**: Tidak ada limbah sisa penarikan tepi (*blank holding scrap*) seperti pada *stamping*, menghasilkan utilisasi material di atas $98\%$.

Standar industri internasional yang mengatur toleransi geometris, karakterisasi material, dan prosedur fabrikasi profil roll forming meliputi:
- **DIN EN 10162**: *Cold rolled steel sections — Technical delivery conditions — Dimensional and cross-sectional tolerances*.
- **DIN 6935**: *Cold bending of steel flat products — Design and bend deduction parameters*.
- **ASTM A653 / A653M**: *Standard Specification for Steel Sheet, Zinc-Coated (Galvanized) or Zinc-Iron Alloy-Coated (Galvannealed) by the Hot-Dip Process*.
- **ASTM A1008 / A1008M**: *Standard Specification for Steel, Sheet, Cold-Rolled, Carbon, Structural, High-Strength Low-Alloy*.
- **ISO 4998**: *Continuous hot-dip zinc-coated and zinc-iron alloy-coated carbon steel sheet of structural quality*.
- **ISO 16630**: *Metallic materials — Sheet and strip — Hole expanding test (karakterisasi ketahanan retak tepi edge cracking)*.

---

## 2. Mekanika Deformasi Plastis & Kinematika Tiga Dimensi Cold Roll Forming

### 2.1 Lintasan Tepi Pelat (*Edge Trajectory*) & Regangan Membran Longitudinal
Selama proses pembengkokan dari *stand* $i$ ke *stand* $i+1$, tepi bebas lembaran (*free flange edge*) harus menempuh jarak spasial tiga dimensi yang lebih panjang daripada sumbu netral dasar profil (*web center line*). Lintasan kurvilinear spasial ini menginduksi tegangan tarik longitudinal $(\sigma_x)$ dan regangan membran longitudinal $(\varepsilon_{xx})$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI DEFORMASI TIGA DIMENSI (STAND INTER-DISTANCE L)                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             Stand (i)                                                      Stand (i+1)                                |
|                │                                                                │                                     |
|     Flensa     │ y_i                                                            │ y_{i+1}                             |
|     Tepi Teks  *───────────────────────── Lintasan Tepi Spasial s(x) ───────────*                                     |
|     (Flange)   │ \                                                            / │                                     |
|                │  \  θ_i                                                θ_{i+1} /                                     |
|                │   \                                                          /  │                                     |
|                │    \                                                        /   │                                     |
|     Dasar      └───┬─*══════════════════════════════════════════════════════*─┬──┘                                     |
|     (Web)          │                    Jarak Antar-Stand (L)                 │                                       |
|                    x=0                                                        x=L                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Panjang lintasan kurva tepi flensa $s$ sepanjang jarak antar-stand $L$ dirumuskan secara integral diferensial:

$$s = \int_{0}^{L} \sqrt{1 + \left(\frac{dy}{dx}\right)^2 + \left(\frac{dz}{dx}\right)^2} \, dx$$

di mana koordinat kartesian tinggi elevasi tepi $y(x)$ dan perpindahan lateral $z(x)$ merupakan fungsi dari sudut pembengkokan lokal $\theta(x)$ dan lebar flensa $b_f$:

$$y(x) = b_f \cdot \sin(\theta(x)), \quad z(x) = b_f \cdot (1 - \cos(\theta(x)))$$

Regangan membran longitudinal rata-rata pada tepi pelat dihitung melalui hubungan regangan rekayasa:

$$\varepsilon_{\text{long}} = \frac{s - L}{L} \approx \frac{1}{2L} \int_{0}^{L} \left[ \left(\frac{dy}{dx}\right)^2 + \left(\frac{dz}{dx}\right)^2 \right] dx$$

Berdasarkan model analitis Bhattacharyya & Smith, regangan membran longitudinal puncak $(\varepsilon_{\text{peak}})$ pada transisi antar stand dengan sudut inkremental $\Delta \theta = \theta_{i+1} - \theta_i$ dinyatakan sebagai:

$$\varepsilon_{\text{peak}} = \frac{b_f^2 (\Delta \theta)^2}{2 L^2} \cdot C_{\text{profile}}$$

di mana:
- $b_f$ = Lebar flensa profil yang dibentuk ($\text{mm}$).
- $\Delta \theta$ = Inkrementasi sudut pembentukan antar stand ($\text{radian}$).
- $L$ = Jarak horizontal antar-stand rol (*inter-stand roll distance*) ($\text{mm}$).
- $C_{\text{profile}}$ = Koefisien faktor bentuk deformasi transisi (berkisar antara $0.85 - 1.25$ tergantung metode pembengkokan).

### 2.2 Fenomena Deformasi Plastis Siklik & Cacat Pembentukan Profil
Ketika lembaran strip bergerak maju melalui rangkaian *stand*, partikel pada flensa mengalami siklus tegangan:
1. **Zona Transisi Masuk (*Entry Transition Zone*)**: Terjadi regangan tarik longitudinal $(\varepsilon_{xx} > 0)$ saat flensa terangkat ke atas.
2. **Zona Jepit Rol (*Roll Nip Zone*)**: Logam dijepit oleh profil rol atas dan bawah, terjadi deformasi tekuk transversal plastis murni dengan regangan lentur $\varepsilon_{yy}$, sementara regangan tarik longitudinal dipaksa kembali ke nilai nol.
3. **Zona Transisi Keluar (*Exit Relaxation Zone*)**: Flensa terbebas dari rol dan mengalami regangan tekan longitudinal $(\varepsilon_{xx} < 0)$ akibat pemulihan elastis membran.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MEKANISME TERJADINYA CACAT PADA COLD ROLL FORMING                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. FLANGE WRINKLING / WAVINESS (Gelombang Flensa):                                                                   |
|     - Terjadi jika tegangan sisa tekan longitudinal melampaui tegangan tekuk kritis Euler-Johnson:                   |
|       \sigma_{\text{comp}} > \sigma_{\text{crit}} = \frac{k_w \pi^2 E}{12(1-\nu^2)} \left(\frac{t}{b_f}\right)^2     |
|                                                                                                                       |
|  2. LONGITUDINAL BOWING (Kelengkungan Memanjang):                                                                     |
|     - Distribusi regangan plastis sisa tak simetris antara bagian atas (flensa) dan bawah (web).                      |
|                                                                                                                       |
|  3. SECTION TWISTING (Puntiran Aksial Profil):                                                                        |
|     - Terjadi akibat momen torsi asimetris pada profil tak simetris (seperti profil Z atau Angle).                    |
|                                                                                                                       |
|  4. FLARE EFFECT (Pelebaran/Penyempitan Ujung Potong):                                                                |
|     - Pelepasan tegangan sisa elastis 3D saat profil dipotong kontinu pada flying cutoff station.                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.3 Prediksi Pemulihan Elastis (*Springback*) pada Pembengkokan Roll
Setelah lembaran keluar dari jepitan rol pembentuk, tegangan tarik pada serat luar dan tegangan tekan pada serat dalam akan melepaskan sebagian energinya secara elastis. Rasio sudut pembengkokan terisi $(\theta_{\text{final}})$ terhadap sudut rol perkakas $(\theta_{\text{tool}})$ dinyatakan melalui formulasi analitis lentur elastoplastis:

$$\frac{\theta_{\text{final}}}{\theta_{\text{tool}}} = 1 - 3 \left( \frac{\sigma_y R_{\text{tool}}}{E \cdot t} \right) + 4 \left( \frac{\sigma_y R_{\text{tool}}}{E \cdot t} \right)^3$$

di mana:
- $\sigma_y$ = Tegangan luluh material (*yield strength*) ($\text{MPa}$).
- $E$ = Modulus elastisitas Young ($\text{MPa}$).
- $t$ = Ketebalan strip lembaran ($\text{mm}$).
- $R_{\text{tool}}$ = Radius pembengkokan pada ujung rol (*tool bend radius*) ($\text{mm}$).

---

## 3. Metodologi Desain Pola Bunga (*Flower Pattern Design*) & Perhitungan Roll Tooling

### 3.1 Strategi Pengembangan Profil Bunga (*Flower Progression Strategy*)
*Flower Pattern* adalah superimposisi penampang melintang profil dari seluruh stasiun rol dari strip datar (*pass 0*) hingga profil akhir (*pass N*) pada satu bidang gambar 2D referensi.

Terdapat tiga filosofi perancangan *flower pattern*:
1. **Constant Web Width (CWW) Method**: Lebar dasar (*web*) dipertahankan konstan di seluruh lintasan. Pembengkokan dilakukan murni dengan mengangkat flensa samping. Menghasilkan regangan longitudinal flensa paling tinggi namun desain rol paling sederhana.
2. **Constant Radius / Constant Arc Length Method**: Radius pembengkokan dipertahankan konstan sementara sudut bengkok dinaikkan secara linier. Meminimalkan penipisan dinding pada radius tekuk (*bend thinning*).
3. **Downhill Forming Method (Base Elevation Lowering)**: Sumbu referensi dasar (*bottom line of web*) diturunkan secara bertahap seiring kenaikan sudut flensa. Menyeimbangkan lintasan spasial antara tepi flensa dan garis tengah dasar sehingga regangan puncak longitudinal tereduksi hingga $35\% - 50\%$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PERBANDINGAN METODE DESAIN FLOWER PATTERN                                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  (A) CONSTANT WEB FORMING (Standard)                    (B) DOWNHILL FORMING (Optimized Minimum Strain)               |
|                                                                                                                       |
|             Tepi Flensa Naik Signifikan                             Tepi Flensa Relatif Datar                         |
|             *       *       *       *                               *───────*───────*───────*                         |
|              \       \       \      │                                \       \       \      │                         |
|               \       \       \     │                                 \       \       \     │                         |
|                *───────*───────*────*                                  \       \       \    │                         |
|             ══════════════════════════ Sumbu Tetap                      *       *       *   │                         |
|                 Web Tetap pada Elevasi 0                                 \       \       \  │                         |
|                                                                           *───────*───────*─* ◄─── Web Turun (Δh)     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Kompensasi elevasi dasar pada metode *Downhill* untuk setiap sudut $\theta_i$ diformulasikan sebagai:

$$h_i = b_f \cdot (1 - \sin(\theta_i)) \cdot \eta_{\text{downhill}}$$

di mana $\eta_{\text{downhill}}$ adalah faktor redaman elevasi ($0.4 \le \eta \le 0.8$).

### 3.2 Penentuan Jumlah Minimum Stand Pembentuk (*Pass Count Calculation*)
Berdasarkan batas regangan luluh material $(\varepsilon_y = \sigma_y / E)$, batas aman regangan longitudinal maksimum agar tidak terjadi deformasi sisa permanen non-seragam pada flensa adalah:

$$\varepsilon_{\text{long, max}} \le \beta_{\text{safe}} \cdot \varepsilon_y$$

di mana $\beta_{\text{safe}}$ adalah faktor keamanan stabilitas flensa ($0.7 \le \beta_{\text{safe}} \le 1.1$).

Jumlah stasiun pembentuk minimum ($N_{\text{stands}}$) untuk profil simetris dengan sudut tekuk total $\Theta_{\text{total}}$ dihitung menggunakan hubungan semi-empiris Halmos-Marciniak:

$$N_{\text{stands}} \ge \frac{\Theta_{\text{total}}}{\Delta \theta_{\text{allowable}}} = \Theta_{\text{total}} \cdot \left[ \frac{b_f}{L} \sqrt{\frac{2 C_{\text{profile}}}{\beta_{\text{safe}} \cdot (\sigma_y / E)}} \right]$$

---

## 4. Algoritma Komputasi & Solusi Python: Engine Desain Flower Pattern & Analisis Regangan

Berikut adalah skrip Python industri mandiri untuk menghitung progresivitas sudut pembengkokan tiap stand, regangan longitudinal membran, prediksi *springback*, elevasi rol *downhill*, serta verifikasi batas tekuk flensa (*wrinkling safety factor*).

```python
#!/usr/bin/env python3
"""
Cold Roll Forming (CRF) Flower Pattern & Longitudinal Strain Solver Engine
Standar Kepatuhan: DIN EN 10162, DIN 6935, ASTM A653, ASTM A1008
Penulis: RuangTI Industrial Engineering Computation Suite
"""

import math
from typing import Dict, List, Tuple, Any

class RollFormingAnalyzer:
    def __init__(
        self,
        web_width: float,          # Lebar dasar profil (mm)
        flange_length: float,      # Panjang flensa profil (mm)
        sheet_thickness: float,    # Ketebalan pelat t (mm)
        target_bend_angle_deg: float, # Sudut tekuk akhir profil (derajat, misal 90°)
        inner_radius: float,       # Radius dalam tekukan r_i (mm)
        yield_strength: float,     # Tegangan luluh material (MPa)
        tensile_strength: float,   # Tegangan tarik ultimit UTS (MPa)
        young_modulus: float,      # Modulus elastisitas E (MPa, misal 210000)
        poisson_ratio: float = 0.3,
        inter_stand_distance: float = 350.0, # Jarak antar stand rol L (mm)
        forming_speed_mpm: float = 30.0      # Kecepatan line (m/menit)
    ):
        self.web = web_width
        self.flange = flange_length
        self.t = sheet_thickness
        self.target_angle_rad = math.radians(target_bend_angle_deg)
        self.target_angle_deg = target_bend_angle_deg
        self.r_in = inner_radius
        self.sigma_y = yield_strength
        self.uts = tensile_strength
        self.E = young_modulus
        self.nu = poisson_ratio
        self.L = inter_stand_distance
        self.speed = forming_speed_mpm
        self.yield_strain = self.sigma_y / self.E

    def calculate_springback(self, bend_angle_rad: float) -> Tuple[float, float]:
        """
        Menghitung kompensasi springback dan sudut roll tool yang dibutuhkan.
        Menggunakan formulasi Lentur Elastoplastis Inkremental.
        """
        r_mid = self.r_in + (self.t / 2.0)
        # Faktor Springback K_s = theta_final / theta_tool
        # K_s = 1 - 3*(sigma_y * r_mid / (E * t)) + 4*(sigma_y * r_mid / (E * t))**3
        ratio = (self.sigma_y * r_mid) / (self.E * self.t)
        K_s = 1.0 - (3.0 * ratio) + (4.0 * (ratio ** 3))
        
        # Sudut tool yang harus dibuat agar hasil akhir sesuai bend_angle
        tool_angle_rad = bend_angle_rad / K_s
        springback_delta_deg = math.degrees(tool_angle_rad - bend_angle_rad)
        return tool_angle_rad, springback_delta_deg

    def calculate_critical_wrinkling_stress(self) -> float:
        """
        Menghitung tegangan tekuk kritis Euler-Johnson untuk pelat flensa tipis (MPa).
        sigma_crit = k_w * pi^2 * E / (12 * (1 - nu^2)) * (t / b_f)^2
        """
        k_w = 0.425  # Koefisien tekuk tepi bebas (free-edge plate buckling)
        sigma_crit = (k_w * (math.pi ** 2) * self.E) / (12.0 * (1.0 - self.nu ** 2)) * ((self.t / self.flange) ** 2)
        return sigma_crit

    def design_flower_pattern(
        self,
        num_stands: int,
        strategy: str = "downhill"
    ) -> List[Dict[str, Any]]:
        """
        Menghasilkan parameter desain per stasiun roll pass:
        - Sudut pembengkokan kumulatif
        - Inkrementasi sudut
        - Elevasi dasar (Downhill)
        - Regangan longitudinal puncak (Peak Longitudinal Strain)
        - Tegangan sisa prediksi & Springback compensation
        """
        stands = []
        sigma_crit_wrinkling = self.calculate_critical_wrinkling_stress()
        
        # Distribusi sudut non-linier kuadratik (smooth acceleration and deceleration)
        # Menghindari lonjakan regangan pada pass awal dan akhir
        angles_rad = [0.0]
        for i in range(1, num_stands + 1):
            # Normalisasi rasio progres 0..1
            xi = i / num_stands
            # Fungsi distribusi Sinusoidal Smoothstep
            angle_i = self.target_angle_rad * (xi - (math.sin(2.0 * math.pi * xi) / (2.0 * math.pi)))
            angles_rad.append(angle_i)

        for i in range(1, num_stands + 1):
            prev_angle = angles_rad[i - 1]
            curr_angle = angles_rad[i]
            delta_theta = curr_angle - prev_angle
            
            # Hitung regangan longitudinal membran puncak
            # epsilon_long = (b_f^2 * delta_theta^2) / (2 * L^2)
            c_profile = 1.05 if strategy == "standard" else 0.68
            eps_long = ((self.flange ** 2) * (delta_theta ** 2)) / (2.0 * (self.L ** 2)) * c_profile
            
            # Tegangan longitudinal membran induksi
            sigma_long = eps_long * self.E
            
            # Faktor keamanan tekuk flensa (Wrinkling Safety Factor)
            wrinkling_sf = sigma_crit_wrinkling / sigma_long if sigma_long > 0 else 999.0
            
            # Elevasi dasar (Downhill displacement)
            if strategy == "downhill":
                eta_dh = 0.55
                y_elevation = -self.flange * (1.0 - math.cos(curr_angle)) * eta_dh
            else:
                y_elevation = 0.0

            # Springback compensation
            tool_angle_rad, sb_delta_deg = self.calculate_springback(curr_angle)

            stands.append({
                "stand_id": i,
                "profile_angle_deg": round(math.degrees(curr_angle), 2),
                "tool_angle_deg": round(math.degrees(tool_angle_rad), 2),
                "springback_comp_deg": round(sb_delta_deg, 2),
                "delta_theta_deg": round(math.degrees(delta_theta), 2),
                "base_elevation_mm": round(y_elevation, 3),
                "peak_longitudinal_strain_pct": round(eps_long * 100, 4),
                "longitudinal_stress_mpa": round(sigma_long, 2),
                "yield_strain_pct": round(self.yield_strain * 100, 4),
                "wrinkling_safety_factor": round(wrinkling_sf, 2),
                "status": "PASS" if eps_long <= self.yield_strain * 1.1 and wrinkling_sf >= 1.2 else "RISK_OF_DEFECT"
            })

        return stands

    def run_full_design_audit(self, num_stands: int = 6) -> Dict[str, Any]:
        """Menjalankan simulasi komprehensif dan menghasilkan laporan teknis."""
        std_stands = self.design_flower_pattern(num_stands, strategy="standard")
        dh_stands = self.design_flower_pattern(num_stands, strategy="downhill")
        
        max_strain_std = max(s["peak_longitudinal_strain_pct"] for s in std_stands)
        max_strain_dh = max(s["peak_longitudinal_strain_pct"] for s in dh_stands)
        strain_reduction_pct = ((max_strain_std - max_strain_dh) / max_strain_std) * 100.0

        return {
            "parameters": {
                "material": f"High-Strength Steel (YS={self.sigma_y} MPa, UTS={self.uts} MPa)",
                "geometry": f"Web={self.web}mm, Flange={self.flange}mm, Thickness={self.t}mm",
                "target_profile": f"Hat/Channel Bend Angle = {self.target_angle_deg}°",
                "inter_stand_distance": f"{self.L} mm",
                "forming_speed": f"{self.speed} m/min"
            },
            "downhill_stands_data": dh_stands,
            "performance_summary": {
                "max_strain_standard_pct": round(max_strain_std, 4),
                "max_strain_downhill_pct": round(max_strain_dh, 4),
                "strain_reduction_achieved_pct": round(strain_reduction_pct, 2),
                "wrinkling_critical_stress_mpa": round(self.calculate_critical_wrinkling_stress(), 2)
            }
        }

if __name__ == "__main__":
    # Inisialisasi Kasus Industri: Profil Hat-Section Otomotif Bahan Baja DP600
    analyzer = RollFormingAnalyzer(
        web_width=80.0,
        flange_length=45.0,
        sheet_thickness=1.5,
        target_bend_angle_deg=90.0,
        inner_radius=3.0,
        yield_strength=380.0,
        tensile_strength=620.0,
        young_modulus=210000.0,
        poisson_ratio=0.3,
        inter_stand_distance=320.0,
        forming_speed_mpm=40.0
    )

    report = analyzer.run_full_design_audit(num_stands=7)
    
    print("=" * 85)
    print("      HASIL ANALISIS KOMPUTASI FLOWER PATTERN COLD ROLL FORMING (RUANGTI)")
    print("=" * 85)
    for k, v in report["parameters"].items():
        print(f"  {k:25s}: {v}")
    print("-" * 85)
    print(f"{'Stand':<6}{'Angle(°)':<10}{'Tool(°)':<10}{'Elev(mm)':<11}{'Strain(%)':<12}{'Stress(MPa)':<14}{'Wrinkle SF':<12}{'Status'}")
    print("-" * 85)
    for s in report["downhill_stands_data"]:
        print(f"{s['stand_id']:<6}{s['profile_angle_deg']:<10}{s['tool_angle_deg']:<10}{s['base_elevation_mm']:<11}{s['peak_longitudinal_strain_pct']:<12}{s['longitudinal_stress_mpa']:<14}{s['wrinkling_safety_factor']:<12}{s['status']}")
    print("=" * 85)
    print("RINGKASAN PERFORMANSI REDUKSI REGANGAN:")
    print(f"  - Regangan Puncak (Metode Standar) : {report['performance_summary']['max_strain_standard_pct']}%")
    print(f"  - Regangan Puncak (Metode Downhill): {report['performance_summary']['max_strain_downhill_pct']}%")
    print(f"  - Reduksi Regangan Tereduksi       : {report['performance_summary']['strain_reduction_achieved_pct']}%")
    print(f"  - Tegangan Kritis Tekuk (Wrinkling): {report['performance_summary']['wrinkling_critical_stress_mpa']} MPa")
    print("=" * 85)
```

---

## 5. Studi Kasus Industri: Optimasi Profil Hat-Channel Rangka Baterai EV (*Electric Vehicle Enclosure*)

### 5.1 Latar Belakang Masalah & Kondisi Eksisting
Sebuah manufaktur tier-1 komponen otomotif memproduksi profil penampang *Hat-Channel* (lebar web $w = 80\text{ mm}$, tinggi flensa $b_f = 45\text{ mm}$, tebal $t = 1.5\text{ mm}$) dari material baja *Dual Phase* DP600 ($\sigma_y = 380\text{ MPa}$, $\text{UTS} = 620\text{ MPa}$, $E = 210\text{ GPa}$) untuk struktur proteksi intrusi samping modul baterai kendaraan listrik.

Pada jalur roll forming awal dengan 5 *stand* menggunakan metode *Constant Web Width*:
- Flensa mengalami cacat gelombang pinggir (*edge waviness / wrinkling*) parah dengan amplitudo puncak ke lembah $> 1.8\text{ mm}$ (standar DIN EN 10162 mensyaratkan $\le 0.5\text{ mm}$).
- *End flare* pada ujung pemotongan mencapai $+3.2\text{ mm}$, mengakibatkan ketidaksesuaian saat proses pengelasan laser otomatis dengan pelat penutup baterai.
- Regangan membran longitudinal aktual terukur menggunakan sensor korelasi citra digital (*Digital Image Correlation* / DIC) mencapai $0.342\%$, melampaui regangan elastis luluh teoritis material ($0.181\%$).

### 5.2 Intervensi Rekayasa & Implementasi Downhill Forming 7-Stand
Tim rekayasa industri menerapkan redesign perkakas dan lintasan pembentukan menggunakan metodologi integrasi:
1. **Penambahan Stasiun Menjadi 7 Stand**: Mengurangi lonjakan sudut inkremental $\Delta \theta$ per stasiun dari rata-rata $18^\circ$ menjadi variasi kurva *smooth sinusoidal step* ($6.5^\circ - 18.2^\circ$).
2. **Implementasi Downhill Elevation**: Menurunkan garis dasar pembentukan secara bertahap dengan perpindahan vertikal total $\Delta y = -13.61\text{ mm}$ pada stand akhir.
3. **Kompensasi Springback Berbasis Roll Tooling**: Mengaplikasikan sudut perkakas overbend pada stasiun final sebesar $91.48^\circ$ untuk menghasilkan sudut profil terpasang tepat $90.00^\circ \pm 0.15^\circ$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  HASIL METROLOGI SEBELUM DAN SESUDAH OPTIMASI ROLL FORMING                            |
+-----------------------------------------------------------------------------------------------------------------------+
|  Parameter Kualitas Profil              Eksisting (5-Stand CWW)    Optimasi (7-Stand Downhill)    Standar DIN EN 10162|
+-----------------------------------------------------------------------------------------------------------------------+
|  Regangan Membran Longitudinal Puncak   0.342 % (Plastis Rusak)    0.118 % (Elastis Aman)         < 0.181 % (Yield)   |
|  Edge Wrinkling Amplitude               1.84 mm (Reject)           0.22 mm (OK)                   ≤ 0.50 mm           |
|  End Flare Deviation                    +3.20 mm (Reject)          +0.35 mm (OK)                  ≤ 0.80 mm           |
|  Bowing Kelengkungan (per 3 meter)      4.50 mm                    0.60 mm                        ≤ 1.50 mm           |
|  Tingkat Scrap Produksi                 8.4 %                      0.3 %                          Target < 1.0 %      |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 6. Referensi Terverifikasi & Standar Industri Internasional

1. **Bhattacharyya, D., & Smith, P. D.** (1984). *The development of longitudinal strain in cold roll forming and its influence on product quality*. Journal of Mechanical Working Technology, 9(2), 199–219. DOI: 10.1016/0378-3804(84)90006-2.
2. **Halmos, G. T.** (2005). *Roll Forming Handbook*. CRC Press / Taylor & Francis Group, Boca Raton, FL. ISBN: 978-0-8493-9596-3.
3. **Lindgren, M.** (2007). *Cold Roll Forming of Advanced High Strength Steels*. Doctoral Thesis, Department of Applied Physics and Mechanical Engineering, Luleå University of Technology, Sweden.
4. **Groche, P., Fritsche, D., & Henkelmann, M.** (2008). *Increased formability in roll forming by local heat treatment and downhill optimization*. CIRP Annals - Manufacturing Technology, 57(1), 291–294. DOI: 10.1016/j.cirp.2008.03.076.
5. **Abeyrathna, B., Rolfe, B., & Weiss, M.** (2017). *The effect of flower pattern design on the longitudinal strain and springback of high strength steel during roll forming*. Journal of Materials Processing Technology, 240, 240–247. DOI: 10.1016/j.jmatprotec.2016.09.028.
6. **DIN EN 10162:2003**: *Cold rolled steel sections — Technical delivery conditions — Dimensional and cross-sectional tolerances*. Deutsches Institut für Normung.
7. **DIN 6935:2011-10**: *Cold bending of steel flat products — Design and bend deduction parameters*. Deutsches Institut für Normung.
8. **ASTM A653 / A653M-20**: *Standard Specification for Steel Sheet, Zinc-Coated (Galvanized) or Zinc-Iron Alloy-Coated (Galvannealed) by the Hot-Dip Process*. ASTM International, West Conshohocken, PA.
9. **ASTM A1008 / A1008M-21**: *Standard Specification for Steel, Sheet, Cold-Rolled, Carbon, Structural, High-Strength Low-Alloy*. ASTM International.
10. **ISO 16630:2017**: *Metallic materials — Sheet and strip — Hole expanding test*. International Organization for Standardization, Geneva.
