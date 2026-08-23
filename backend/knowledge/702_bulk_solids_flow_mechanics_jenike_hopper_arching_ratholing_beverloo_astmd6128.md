# Modul 702: Mekanika Aliran Curah (Bulk Solids Flow Mechanics) & Desain Silo/Hopper Industri: Teori Alirabilitas Jenike, Dimensi Kritis Arching & Ratholing, Mohr-Coulomb Effective Yield Locus, Dinamika Gesekan Dinding, dan Pemodelan Laju Pengeluaran Beverloo-Johanson (ASTM D6128, ASTM D6773, ISO 13503 & Eurocode 1 Part 4)

## 1. Konsep Dasar & Fenomenologi Mekanika Aliran Material Curah Padat

Dalam perancangan sistem penanganan material (*material handling systems*) pada industri kimia, farmasi, pengolahan mineral, semen, dan pangan, material curah padat (*bulk solids*) menunjukkan perilaku mekanis gabungan antara padatan elasto-plastis dan fluida non-Newtonian. Berbeda dengan fluida murni di mana tegangan geser nol pada kondisi diam dan tekanan isotropik di semua arah ($p_x = p_y = p_z$), material curah mentransmisikan tegangan geser pada kondisi statis melalui kontak antar-partikel (*inter-particle friction and interlocking*) dan menghasilkan rasio tegangan lateral anisotropik:

$$K = \frac{\sigma_h}{\sigma_v} \neq 1$$

di mana $\sigma_h$ adalah tegangan normal horizontal dan $\sigma_v$ adalah tegangan normal vertikal.

```
+-----------------------------------------------------------------------------------+
|               POLA ALIRAN MATERIAL CURAH DALAM HOPPER & SILO INDUSTRI             |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|      [ MASS FLOW (Aliran Massa) ]              [ FUNNEL FLOW (Aliran Corong) ]    |
|                                                                                   |
|          |                 |                         |\\\\\\\\\\\\\\\|            |
|          |  Material       |                         |\\ Dead Zone \\|            |
|          |  Bergerak Aktif |                         |\\ (Material  \\|           |
|          |  Semua Zona     |                         |\\  Mati)     \\|           |
|          \                 /                         \  Active Flow  /            |
|           \   theta_c     /                           \   Channel   /             |
|            \             /                             \           /              |
|             \           /                               \         /               |
|              |         |                                 |       |                |
|              +-- B_c --+                                 +- B_p -+                |
|                                                                                   |
|  * First-In, First-Out (FIFO)            * First-In, Last-Out (FILO)              |
|  * Tidak ada zona mati (no dead zones)   * Resiko tinggi degradasi material/caking |
|  * Mencegah ratholing & segregasi        * Rawan fenomena ratholing & flushing    |
|  * Memerlukan sudut hopper curam         * Sudut hopper landai                    |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 1.1 Pola Aliran Fundamental: Mass Flow vs Funnel Flow
1. **Mass Flow (Aliran Massa)**: Seluruh material curah bergerak setiap kali katup pengeluaran dibuka. Dinding hopper ikut berkontribusi aktif meluncurkan partikel (*boundary slip*). Pola ini menjamin aliran *First-In, First-Out* (FIFO), meminimalkan degradasi partikel, dan mengeliminasi terbentuknya lubang tikus (*rathole*).
2. **Funnel Flow (Aliran Corong / Core Flow)**: Aliran hanya terjadi di sepanjang saluran sempit di atas lubang pengeluaran (*central flow channel*), sedangkan partikel di dekat dinding hopper tetap diam (*stagnant dead zones*). Pola ini menyebabkan segregasi ukuran, waktu tinggal tak seragam (*First-In, Last-Out* / FILO), dan potensi keruntuhan struktur kubah secara tiba-tiba (*flushing / flooding*).
3. **Expanded Flow**: Kombinasi bagian bawah hopper beraliran massa (*mass flow cone*) yang dipasang di bawah bagian atas hopper beraliran corong (*funnel flow section*), dirancang untuk mereduksi tinggi total silo berkapasitas besar.

---

## 2. Formulasi Matematis Formal & Teori Jenike (ASTM D6128)

Metodologi desain penyimpanan curah Jenike (1964) didasarkan pada penentuan kondisi batas plastis material melalui pengujian *Shear Cell* (ASTM D6128 / ASTM D6773).

```
                 Tau (Tegangan Geser)
                  ^
                  |                         Effective Yield Locus (EYL)
                  |                            /   (Sudut = delta)
                  |                Yield Locus/
                  |                 /--------/
                  |       c        /        ( Preshear Endpoint: (sigma_p, tau_p) )
                  |       +-------+-------o
                  |      /       / \     / \
                  |     /       /   \   /   \
                  |    /       /     \ /     \
                  |   /   Unconfined  |  Major Consolidation
                  |  /    Yield Circle|     Stress Circle (sigma_1)
                  | /     (sigma_c)   |
                  +---+---------------+-------+------------------> Sigma (Tegangan Normal)
                  0   sigma_2       sigma_1
```

### 2.1 Mohr-Coulomb Yield Locus & Tegangan Konsolidasi
Persamaan garis leleh linier (*Yield Locus*) pada kondisi pra-geser (*preshear*) tertentu dirumuskan sebagai:

$$\tau = c + \sigma \tan \phi_i$$

di mana $c$ adalah kohesi inter-partikel (kPa) dan $\phi_i$ adalah sudut gesek dalam partikel (*angle of internal friction*).

Lingkaran Mohr konsolidasi utama yang melalui titik pra-geser $(\sigma_p, \tau_p)$ dan menyinggung garis leleh memiliki tegangan utama mayor (*Major Principal Consolidation Stress*) $\sigma_1$:

$$\sigma_1 = \sigma_p + \tau_p \left( \frac{1 + \sin \phi_i}{\cos \phi_i} \right)$$

Tegangan leleh tak terkekang (*Unconfined Yield Strength*) $\sigma_c$, yang merepresentasikan kekuatan tekan kubah kohesif yang terbentuk tanpa dinding penyangga lateral, diperoleh dari lingkaran Mohr yang menyinggung *Yield Locus* dan melewati titik origin $(0, 0)$:

$$\sigma_c = \frac{2 c \cos \phi_i}{1 - \sin \phi_i}$$

Sudut gesek dalam efektif (*Effective Angle of Internal Friction*) $\delta$ didefinisikan sebagai sudut kemiringan garis *Effective Yield Locus* (EYL) yang melewati titik $(0,0)$ dan menyinggung lingkaran Mohr konsolidasi $\sigma_1$:

$$\sin \delta = \frac{\sigma_1 - \sigma_2}{\sigma_1 + \sigma_2} = \frac{2 \tau_p \sqrt{1 + \tan^2 \phi_i}}{2 \sigma_p + 2 \tau_p \tan \phi_i - c \cot \phi_i}$$

Secara praktis melalui pendekatan Jenike standar:
$$\sin \delta = \frac{\tau_p}{\sigma_p + c \cot \phi_i}$$

### 2.2 Fungsi Alir Material (*Flow Function* - FF) & Klasifikasi Alirabilitas
Fungsi alir material menggambarkan hubungan fungsional antara kekuatan leleh tak terkekang terhadap tegangan konsolidasi utama:

$$\text{FF}_c = \frac{\sigma_1}{\sigma_c}$$

Karakteristik alirabilitas padatan curah diklasifikasikan menurut indeks $\text{ff}_c$:
- $\text{ff}_c < 1$: Sangat tidak mengalir (*Non-flowing / Hardened Caking*)
- $1 \le \text{ff}_c < 2$: Sangat kohesif (*Very Cohesive*)
- $2 \le \text{ff}_c < 4$: Kohesif (*Cohesive*)
- $4 \le \text{ff}_c < 10$: Mengalir mudah (*Easy-Flowing*)
- $\text{ff}_c \ge 10$: Mengalir bebas (*Free-Flowing*)

### 2.3 Gesekan Dinding (*Wall Friction*) & Batas Sudut Mass Flow
Uji geser dinding (*Wall Friction Test*) terhadap material dinding hopper (misal baja karbon, stainless steel 304 2B, UHMW-PE liner) menghasilkan sudut gesek dinding $\phi_w$:

$$\tan \phi_w = \frac{\tau_w}{\sigma_w}$$

Batas sudut setengah konis hopper (*hopper half-angle*) $\theta_c$ (diukur dari vertikal) untuk memastikan terjadinya aliran massa ditentukan melalui relasi Jenike:

$$\tan \theta_c = \frac{\sin \delta \sin 2\beta}{2 - \sin \delta (1 + \cos 2\beta)}$$

di mana:
$$\beta = \frac{1}{2} \left[ \phi_w + \arcsin \left( \frac{\sin \phi_w}{\sin \delta} \right) \right]$$

Untuk menjamin faktor keamanan desain terhadap fluktuasi kelembaban dan keausan dinding, sudut hopper desain diambil:
$$\theta_{\text{desain}} \le \theta_c - 3^\circ \quad \text{hingga} \quad \theta_c - 5^\circ$$

### 2.4 Faktor Alir Hopper (*Flow Factor* - ff) & Kondisi Kritis Arching
Faktor alir hopper $\text{ff}$ adalah rasio tegangan konsolidasi terhadap tegangan aktual yang bekerja pada kubah material di dalam saluran:

$$\text{ff} = \frac{\sigma_1}{\bar{\sigma}_1}$$

di mana $\bar{\sigma}_1$ adalah tegangan pendukung kubah (*arch support stress*). Parameter $\text{ff}$ merupakan fungsi dari $\theta_c$, $\phi_w$, dan $\delta$.

Kondisi kritis keruntuhan kubah (*Critical Arching Condition*) terjadi pada perpotongan kurva *Flow Function* material ($\sigma_c$ vs $\sigma_1$) dengan garis operasi hopper:

$$\sigma_c(\sigma_1^*) = \frac{\sigma_1^*}{\text{ff}}$$

Dimensi kritis lubang keluar hopper (*Critical Arching Dimension* $B_c$) untuk mencegah terjadinya jembatan padat (*cohesive arching*) dihitung melalui:

$$B_c = \frac{\sigma_c^* H(\theta)}{\rho_b \cdot g}$$

di mana:
- $\rho_b$ = Densitas curah material (*bulk density*, $\text{kg/m}^3$)
- $g$ = Percepatan gravitasi ($9{,}81\ \text{m/s}^2$)
- $H(\theta)$ = Faktor bentuk fungsi sudut hopper Jenike ($H(\theta) \approx 2{,}0 + \frac{\theta}{60^\circ}$ untuk hopper konis lingkaran; $H(\theta) \approx 1{,}0 + \frac{\theta}{120^\circ}$ untuk hopper baji/slot memanjang).

### 2.5 Dimensi Kritis Ratholing pada Funnel Flow
Jika hopper didesain pada zona *funnel flow*, material dapat membentuk lubang vertikal stabil (*piping / ratholing*). Diameter kritis lubang tikus ($D_{rh}$) dihitung dari tegangan leleh $\sigma_1$ terbesar yang terjadi pada kedalaman maksimum timbunan:

$$D_{rh} = \frac{G(\phi_t) \cdot \sigma_c(\sigma_1^{\text{max}})}{\rho_b \cdot g}$$

di mana $G(\phi_t)$ adalah fungsi tegangan rathole Jenike ($G(\phi_t) \approx 3{,}0 - 3{,}5$). Karena $D_{rh}$ seringkali mencapai beberapa meter pada serbuk kohesif, pencegahan ratholing dilakukan dengan memaksakan desain ke mode *Mass Flow*.

### 2.6 Pemodelan Laju Pengeluaran (*Discharge Rate*): Persamaan Beverloo & Johanson
Untuk material berbutir kasar yang mengalir bebas (*free-flowing coarse granules*, $d_p > 500\ \mu\text{m}$), laju pengeluaran massa gravitasional ($W$) melalui lubang orifis lingkaran berdiameter $B$ dimodelkan secara akurat oleh persamaan **Beverloo et al. (1961)**:

$$W = C_B \cdot \rho_b \cdot g^{0{,}5} \cdot (B - k_B d_p)^{2{,}5}$$

di mana:
- $C_B$ = Koefisien empiris pengeluaran ($C_B \approx 0{,}55 - 0{,}65$, tipikal $0{,}58$)
- $k_B$ = Faktor koreksi lapisan batas kosong (*empty boundary layer*, $k_B \approx 1{,}4 - 1{,}6$)
- $d_p$ = Diameter partikel rata-rata (m).

Untuk hopper konis aliran massa dengan serbuk halus di bawah pengaruh gradien tekanan gas antarmuka partikel, **Johanson (1965)** merumuskan laju alir kontinu:

$$W_J = \rho_b \cdot \frac{\pi B^2}{4} \cdot \sqrt{\frac{B \cdot g}{2 (1 + m) \tan \theta_c}} \cdot \left( 1 - \frac{\Delta p / L}{\rho_b g} \right)^{0{,}5}$$

di mana $m = 1$ untuk geometri konis aksisimetrik dan $m = 0$ untuk geometri baji planar.

---

## 3. Implementasi Lengkap Solver Python & Desain Silo/Hopper Terpadu

Modul Python berikut mengimplementasikan secara mandiri (*pure Python* tanpa dependensi eksternal) modul pengolahan uji geser Jenike, evaluasi sudut batas aliran massa, kalkulasi dimensi kritis arching/ratholing, serta analisis laju alir Beverloo-Johanson.

```python
"""
Jenike Bulk Solids Mechanics & Industrial Hopper/Silo Engineering Solver
Standard Compliance: ASTM D6128, ASTM D6773, ISO 13503, Eurocode 1 Part 4
"""

import math
from typing import List, Tuple, Dict, Any

class BulkSolidsShearAnalyzer:
    """
    Evaluator Uji Geser Jenike (Shear Cell Tester) untuk Penentuan Sifat Mekanika Serbuk.
    """
    def __init__(self, bulk_density_kg_m3: float, particle_size_m: float = 0.0002):
        self.rho_b = float(bulk_density_kg_m3)
        self.d_p = float(particle_size_m)
        self.g = 9.80665

    def fit_yield_locus(self, preshear_pt: Tuple[float, float], shear_pts: List[Tuple[float, float]]) -> Dict[str, float]:
        """
        Regresi linier titik-titik leleh (sigma, tau) dalam kPa untuk mengestimasi kohesi (c) dan sudut gesek dalam (phi_i).
        """
        n = len(shear_pts)
        if n < 2:
            raise ValueError("Minimal 2 titik geser diperlukan untuk regresi Yield Locus.")

        sum_x = sum(p[0] for p in shear_pts)
        sum_y = sum(p[1] for p in shear_pts)
        sum_xx = sum(p[0] ** 2 for p in shear_pts)
        sum_xy = sum(p[0] * p[1] for p in shear_pts)

        denom = (n * sum_xx - sum_x ** 2)
        if abs(denom) < 1e-12:
            raise ZeroDivisionError("Titik-titik normal tegangan identik.")

        slope = (n * sum_xy - sum_x * sum_y) / denom
        cohesion_c = (sum_y - slope * sum_x) / n
        phi_i_rad = math.atan(max(1e-4, slope))
        sin_phi = math.sin(phi_i_rad)
        cos_phi = math.cos(phi_i_rad)

        sigma_p, tau_p = preshear_pt

        # Tegangan Konsolidasi Mayor (sigma_1)
        sigma_1 = sigma_p + tau_p * ((1.0 + sin_phi) / cos_phi)

        # Tegangan Leleh Tak Terkekang (sigma_c)
        sigma_c = (2.0 * cohesion_c * cos_phi) / (1.0 - sin_phi)

        # Sudut Gesek Dalam Efektif (delta)
        denom_delta = sigma_p + cohesion_c / math.tan(phi_i_rad)
        sin_delta = min(0.999, max(0.01, tau_p / denom_delta))
        delta_rad = math.asin(sin_delta)

        # Flowability Index (ff_c)
        ff_c = sigma_1 / sigma_c if sigma_c > 1e-6 else 999.0

        return {
            "cohesion_kPa": cohesion_c,
            "phi_i_deg": math.degrees(phi_i_rad),
            "sigma_1_kPa": sigma_1,
            "sigma_c_kPa": sigma_c,
            "delta_deg": math.degrees(delta_rad),
            "ff_c": ff_c
        }

class HopperDesignEngine:
    """
    Mesin Desain Geometri Silo & Analisis Arching/Ratholing.
    """
    def __init__(self, analyzer: BulkSolidsShearAnalyzer, wall_friction_deg: float):
        self.analyzer = analyzer
        self.phi_w_deg = float(wall_friction_deg)
        self.phi_w_rad = math.radians(self.phi_w_deg)

    def calculate_conical_mass_flow_limit(self, delta_deg: float) -> float:
        """
        Menghitung batas maksimum sudut setengah konis (theta_c) untuk menjamin Mass Flow.
        """
        delta_rad = math.radians(delta_deg)
        sin_phi_w = math.sin(self.phi_w_rad)
        sin_delta = math.sin(delta_rad)

        if sin_phi_w >= sin_delta:
            return 0.0  # Gesekan dinding terlalu besar untuk mass flow

        asin_term = math.asin(min(1.0, sin_phi_w / sin_delta))
        beta = 0.5 * (self.phi_w_rad + asin_term)

        num = sin_delta * math.sin(2.0 * beta)
        denom = 2.0 - sin_delta * (1.0 + math.cos(2.0 * beta))
        tan_theta_c = num / denom

        theta_c_deg = math.degrees(math.atan(tan_theta_c))
        return max(0.0, theta_c_deg)

    def calculate_critical_dimensions(self, sigma_c_crit_kPa: float, theta_cone_deg: float,
                                     sigma_1_top_silo_kPa: float = 45.0) -> Dict[str, Any]:
        """
        Kalkulasi dimensi kritis lubang outlet hopper untuk mencegah arching dan ratholing.
        """
        gamma = (self.analyzer.rho_b * self.analyzer.g) / 1000.0  # kN/m^3

        # Faktor Bentuk H(theta) untuk Hopper Konis
        h_theta = 2.0 + (theta_cone_deg / 60.0)

        # 1. Dimensi Kritis Arching Konis (B_c)
        b_c_conical_m = (sigma_c_crit_kPa * h_theta) / gamma

        # 2. Dimensi Kritis Arching Baji / Slot (B_p) - Lebar Slot
        h_theta_slot = 1.0 + (theta_cone_deg / 120.0)
        b_p_slot_m = (sigma_c_crit_kPa * h_theta_slot) / gamma
        l_slot_m = 3.0 * b_p_slot_m  # Rasio panjang-lebar minimal 3:1

        # 3. Dimensi Kritis Ratholing (D_rh) pada Funnel Flow
        g_phi_t = 3.2  # Nilai tipikal fungsi rathole Jenike
        d_rh_m = (g_phi_t * (sigma_c_crit_kPa * 1.5)) / gamma

        return {
            "critical_arching_conical_diameter_m": b_c_conical_m,
            "critical_arching_slot_width_m": b_p_slot_m,
            "critical_arching_slot_length_m": l_slot_m,
            "critical_ratholing_diameter_m": d_rh_m,
            "bulk_unit_weight_kN_m3": gamma
        }

    def discharge_rate_beverloo(self, outlet_diameter_m: float, c_b: float = 0.58, k_b: float = 1.5) -> float:
        """
        Kalkulasi laju alir gravitasional massa (kg/s) menurut Persamaan Beverloo.
        """
        d_eff = outlet_diameter_m - (k_b * self.analyzer.d_p)
        if d_eff <= 0.0:
            return 0.0
        w_kg_s = c_b * self.analyzer.rho_b * math.sqrt(self.analyzer.g) * (d_eff ** 2.5)
        return w_kg_s

    def discharge_rate_johanson_fine_powder(self, outlet_diameter_m: float, theta_cone_deg: float) -> float:
        """
        Kalkulasi laju alir kontinu serbuk halus konis menurut Persamaan Johanson (kg/s).
        """
        area = (math.pi * (outlet_diameter_m ** 2)) / 4.0
        tan_theta = math.tan(math.radians(theta_cone_deg))
        vel_exit = math.sqrt((outlet_diameter_m * self.analyzer.g) / (4.0 * tan_theta))
        w_j_kg_s = self.analyzer.rho_b * area * vel_exit
        return w_j_kg_s
```

---

## 4. Studi Kasus Industri Nyata: Desain Silo Penyimpanan Bahan Baku Semen / Alumina Terkalsinasi (PT Semen Nusantara Presisi)

### 4.1 Deskripsi Kasus & Data Karakterisasi Material
Sebuah pabrik semen terintegrasi berkapasitas 2.500.000 ton/tahun mengalami masalah penyumbatan berkala (*intermittent bridging/arching*) dan aliran tak stabil (*flushing*) pada silo umpan tanur putar (*raw meal kiln feed silo*). Material serbuk alumina/klinker terkalsinasi memiliki sifat fisik:
- Densitas curah rata-rata ($\rho_b$): $1.150\ \text{kg/m}^3$
- Diameter partikel rata-rata ($d_p$): $45\ \mu\text{m} = 0{,}000045\ \text{m}$
- Kapasitas penyimpanan target: $500\ \text{ton}$ ($V \approx 435\ \text{m}^3$)
- Material dinding hopper: Pelat Baja Karbon AISI 1020 dilapisi Plat Stainless Steel 304 2B Finish.

Pengujian geser Jenike (ASTM D6128) pada kondisi pra-geser konsolidasi normal $\sigma_p = 12{,}0\ \text{kPa}, \tau_p = 8{,}4\ \text{kPa}$ menghasilkan titik geser:
- Titik 1: $(\sigma = 3{,}0\ \text{kPa}, \tau = 4{,}35\ \text{kPa})$
- Titik 2: $(\sigma = 6{,}0\ \text{kPa}, \tau = 5{,}95\ \text{kPa})$
- Titik 3: $(\sigma = 9{,}0\ \text{kPa}, \tau = 7{,}55\ \text{kPa})$
- Pengujian geser dinding dengan Stainless Steel 304 2B: Sudut gesek dinding $\phi_w = 18{,}5^\circ$.

```python
# Eksekusi Skrip Solver Desain Silo Jenike untuk Studi Kasus
if __name__ == "__main__":
    print("=" * 80)
    print("  SIMULASI DESAIN HOPPER/SILO JENIKE - PT SEMEN NUSANTARA PRESISI")
    print("=" * 80)

    analyzer = BulkSolidsShearAnalyzer(bulk_density_kg_m3=1150.0, particle_size_m=0.000045)
    
    preshear = (12.0, 8.4)
    shear_points = [(3.0, 4.35), (6.0, 5.95), (9.0, 7.55)]
    
    props = analyzer.fit_yield_locus(preshear, shear_points)
    
    print("\n[1] HASIL PENGUJIAN SHEAR CELL (ASTM D6128):")
    print(f"  - Kohesi Material (c)           : {props['cohesion_kPa']:.3f} kPa")
    print(f"  - Sudut Gesek Dalam (phi_i)     : {props['phi_i_deg']:.2f} deg")
    print(f"  - Tegangan Konsolidasi Mayor (s1): {props['sigma_1_kPa']:.3f} kPa")
    print(f"  - Tegangan Leleh Bebas (sigma_c): {props['sigma_c_kPa']:.3f} kPa")
    print(f"  - Sudut Gesek Efektif (delta)   : {props['delta_deg']:.2f} deg")
    print(f"  - Indeks Alirabilitas (ff_c)    : {props['ff_c']:.2f} (Kategori: Cohesive Solid)")

    hopper_engine = HopperDesignEngine(analyzer, wall_friction_deg=18.5)
    theta_limit = hopper_engine.calculate_conical_mass_flow_limit(props['delta_deg'])
    theta_design = theta_limit - 3.0  # Safety margin 3 derajat

    print("\n[2] PENENTUAN GEOMETRI MASS FLOW HOPPER:")
    print(f"  - Batas Sudut Setengah Konis (theta_c max): {theta_limit:.2f} deg dari vertikal")
    print(f"  - Sudut Desain Konis Direkomendasikan    : {theta_design:.2f} deg dari vertikal")
    print(f"  - Kemiringan Dinding terhadap Horizontal  : {90.0 - theta_design:.2f} deg")

    # Evaluasi Dimensi Kritis Lubang Outlet
    dims = hopper_engine.calculate_critical_dimensions(
        sigma_c_crit_kPa=props['sigma_c_kPa'], 
        theta_cone_deg=theta_design
    )

    print("\n[3] EVALUASI DIMENSI KRITIS ANTI-PENYUMBATAN (ANTI-BRIDGING):")
    print(f"  - Berat Volume Curah (gamma)             : {dims['bulk_unit_weight_kN_m3']:.3f} kN/m^3")
    print(f"  - Diameter Kritis Arching Konis (B_c)    : {dims['critical_arching_conical_diameter_m']:.3f} m (Min. {dims['critical_arching_conical_diameter_m']*1000:.1f} mm)")
    print(f"  - Lebar Kritis Arching Slot/Baji (B_p)   : {dims['critical_arching_slot_width_m']:.3f} m")
    print(f"  - Panjang Minimal Slot (L_p >= 3*B_p)     : {dims['critical_arching_slot_length_m']:.3f} m")
    print(f"  - Diameter Kritis Ratholing Funnel Flow  : {dims['critical_ratholing_diameter_m']:.3f} m")

    # Evaluasi Laju Alir Pengeluaran
    b_actual_conical = 2.00  # Dipilih diameter outlet 2000 mm (> B_c 1835 mm) atau gunakan slot feeder 1.0 m x 3.0 m
    rate_johanson = hopper_engine.discharge_rate_johanson_fine_powder(b_actual_conical, theta_design)
    rate_beverloo = hopper_engine.discharge_rate_beverloo(b_actual_conical)

    print("\n[4] EVALUASI LAJU ALIR PENGELUARAN (DISCHARGE CAPACITY):")
    print(f"  - Diameter Outlet Terpasang               : {b_actual_conical:.2f} m ({b_actual_conical*1000:.0f} mm)")
    print(f"  - Laju Pengeluaran Serbuk Halus (Johanson): {rate_johanson:.2f} kg/s ({rate_johanson*3.6:.1f} ton/jam)")
    print(f"  - Laju Pengeluaran Beverloo (Granular)    : {rate_beverloo:.2f} kg/s ({rate_beverloo*3.6:.1f} ton/jam)")
    print("=" * 80)
```

### 4.2 Analisis Hasil & Rekomendasi Enjiniring Silo
1. **Pola Aliran Terjamin**: Sudut dinding hopper harus dibuat $\ge 74{,}6^\circ$ terhadap bidang horizontal ($\theta_{\text{desain}} \le 15{,}4^\circ$ dari vertikal) dengan lapisan Stainless Steel 304 2B untuk menjamin rezim *Mass Flow*.
2. **Eliminasi Arching**: Diameter outlet konis minimum teoritis adalah $1{,}835\ \text{m}$ ($1.835\ \text{mm}$). Untuk konfigurasi lubang slot/baji (*slotted wedge hopper*), lebar bukaan kritis tereduksi separuhnya menjadi $B_p = 0{,}917\ \text{m}$ ($917\ \text{mm}$) dengan panjang minimal $2{,}75\ \text{m}$.
3. **Kapasitas Alir Maksimum**: Dengan outlet konis $2{,}0\ \text{m}$ atau slot feeder terpasang, laju alir gravitasi bebas melampaui kebutuhan operasional proses tanur sebesar $350\ \text{ton/jam}$, yang diatur menggunakan *screw/rotary feeder* bervariabel kecepatan.

---

## 5. Pertanyaan Evaluasi & Diskusi Konseptual

1. **Analisis Transisi Tegangan**: Jelaskan fenomena transisi puncak tegangan dinding (*switch stress peak*) yang terjadi pada bidang peralihan (*transition junction*) antara bagian silinder vertikal dan bagian konis hopper pada awal terjadinya aliran massa, dan mengapa kondisi ini sangat kritis dalam kalkulasi ketebalan dinding silo menurut Eurocode 1 Part 4 (EN 1991-4)!
2. **Pengaruh Waktu Tinggal Terhadap Caking**: Bagaimana waktu konsolidasi statis (*storage at rest / time consolidation*) meningkatkan nilai tegangan leleh tak terkekang $\sigma_c(t)$ pada serbuk higroskopis, dan bagaimana prosedur pengujian *Time Yield Locus* ASTM D6128 mengakomodasi fenomena ini dalam menentukan diameter arching kritis?
3. **Dilema Aliran Serbuk Sangat Halus vs Aerasi**: Mengapa persamaan Beverloo klasik tidak akurat bila diterapkan pada partikel kohesif berukuran $< 100\ \mu\text{m}$, dan bagaimana mekanisme gaya hisap vakum inter-partikel (*negative pore pressure*) saat ekspansi unggun memperlambat laju pengeluaran serbuk halus?

---

## 6. Referensi Terverifikasi & Standar Rekayasa Industri

1. **Jenike, A. W.** (1964). *Storage and Flow of Solids*. Bulletin No. 123, Utah Engineering Experiment Station, University of Utah.
2. **Schulze, D.** (2021). *Powders and Bulk Solids: Behavior, Characterization, Storage and Flow* (2nd ed.). Springer-Verlag Berlin Heidelberg. DOI: [10.1007/978-3-030-76720-4](https://doi.org/10.1007/978-3-030-76720-4).
3. **Prescott, J. K., & Barnum, R. A.** (2000). "On powder flowability". *Pharmaceutical Technology*, 24(10), 60–84.
4. **Johanson, J. R.** (1965). "Method of calculating rate of discharge from hoppers and bins". *Transactions of Society of Mining Engineers AIME*, 232, 69–80.
5. **Beverloo, W. A., Leniger, H. A., & van de Velde, J.** (1961). "The flow of granular solids through orifices". *Chemical Engineering Science*, 15(3-4), 260–269. DOI: [10.1016/0009-2509(61)85030-6](https://doi.org/10.1016/0009-2509(61)85030-6).
6. **ASTM D6128-22**: *Standard Test Method for Shear Testing of Bulk Solids Using the Jenike Shear Tester*. ASTM International, West Conshohocken, PA.
7. **ASTM D6773-16**: *Standard Test Method for Bulk Solids Using the Schulze Ring Shear Tester*. ASTM International.
8. **EN 1991-4:2006 (Eurocode 1)**: *Actions on structures - Part 4: Silos and tanks*. European Committee for Standardization (CEN), Brussels.
