# Modul 621: Friction Drilling (Formdrill / Thermal Drilling) & Bushing Formation Mechanics: Termomekanika Gesekan Kecepatan Tinggi, Deformasi Termo-Plastis Lembaran Logam Tipis, Pemodelan Pembentukan Bushing Silindris, dan Integritas Sambungan Ulir Thread Forming (ISO 898-1, ASTM E8M, DIN 7970 & VDI 3824)

## 1. Pengantar & Konteks Industri: Peningkatan Ketebalan Efektif Lembaran Dinding Tipis

Dalam rekayasa manufaktur modern—khususnya pada perakitan bodi otomotif (*Body-in-White* / BIW), struktur sasis kendaraan listrik (*Electric Vehicles* / EV), panel surya, rangka pendingin HVAC, dan konstruksi kedirgantaraan berbahan lembaran logam tipis (*thin-walled sheet metals*)—penyambungan mekanis menggunakan baut/sekrup sering kali menghadapi kendala keterbatasan jumlah ulir pengikat (*insufficient thread engagement*).

Pada lembaran logam tipis dengan ketebalan $t_0 \le 2{,}0\text{ mm}$, pembuatan ulir konvensional (*conventional drilling & tapping*) hanya menghasilkan 1 hingga 2 lilitan ulir penuh. Menurut kaidah perancangan sambungan berulir mekanis (VDI 2230 dan ISO 898-1), panjang pengikatan ulir minimum yang aman untuk mentransmisikan beban tarik aksial penuh tanpa mengalami keruntuhan geser (*thread stripping failure*) adalah:
$$L_{\text{thread}} \ge 0{,}8 \cdot d_{\text{nominal}}$$

Jika suatu pelat aluminium atau baja struktural memiliki tebal $t_0 = 1{,}5\text{ mm}$ dan dirancang menerima baut $\text{M6}$ ($d = 6\text{ mm}$), maka panjang ulir minimum yang disyaratkan adalah $L_{\text{thread}} \ge 4{,}8\text{ mm}$. Penggunaan metode pelubangan konvensional akan memotong material dan menyisakan ketebalan hanya $1{,}5\text{ mm}$, sehingga rawan *stripping*. Solusi konvensional seperti penggunaan mur sisip tekan (*press-fit clinch nuts*), mur las (*weld nuts*), atau paku keling buta berulir (*rivet nuts / blind nuts*) memiliki berbagai kelemahan:
1. Menambah bobot kendaraan/struktur (*weight penalty* dari komponen fastener tambahan).
2. Memerlukan rantai pasok komponen sekunder dan tahapan perakitan manual/robotik tambahan (*tooling & handling costs*).
3. Risiko pelepasan ikatan mekanis (*unclinching / loose fasteners*) di bawah beban getaran dinamis dan siklus fatik termal.
4. Potensi terbentuknya celah mikro yang memicu korosi celah (*crevice corrosion*) atau distorsi termal pada lembaran tipis saat pengelasan mur.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PERBANDINGAN PEMBUATAN ULIR: METODE KONVENSIONAL VS FRICTION DRILLING                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  (A) METODE KONVENSIONAL (DRILLING + TAPPING):                                                                        |
|      Pengeboran memotong serat & menghasilkan tatal (chip removal).                                                   |
|      Ketebalan efektif ulir HANYA sama dengan tebal pelat asal (t_eff = t_0).                                         |
|                                                                                                                       |
|             Pengeboran Biasa                       Tapping Pemotong                                                   |
|          ┌───┐             ┌───┐                  ┌───┐         ┌───┐                                                 |
|          │   │             │   │                  │ █ │         │ █ │                                                 |
|      ────┴───┴─────────────┴───┴────          ────┴─█─┴─────────┴─█─┴────                                             |
|      Pelat Tipis (t_0 = 1.5 mm)               Hanya 1.5 - 2 Ulir (RAWAN STRIPPING!)                                   |
|      ───────────────────────────────          ───────────────────────────                                             |
|                                                                                                                       |
|  (B) METODE FRICTION DRILLING (FORMDRILL) & THREAD FORMING (CHIIPLESS):                                               |
|      Gesekan putaran tinggi melunakkan logam secara termo-plastis tanpa memotong material.                            |
|      Bushing silindris terbentuk ke bawah & kerah atas (collar) terbentuk ke atas.                                    |
|      Ketebalan efektif melonjak 3 - 4 kali lipat (t_eff = 3 * t_0 - 4 * t_0).                                         |
|                                                                                                                       |
|           Tool Karbida Putar Cepat                      Bushing Silindris Terbentuk                                   |
|               \           /                           ┌───┐             ┌───┐  <-- Kerah Atas (Top Collar)            |
|                \         /                        ────┴───┴─────────────┴───┴────                                     |
|                 \       /                         │   │  Panjang Ulir   │   │                                         |
|                  \  ▼  /                          │ █ │  Efektif:       │ █ │                                         |
|                   \   /                           │ █ │  L_thread =     │ █ │  <-- Bushing Silindris Bawah            |
|      ──────────────\_/──────────────              │ █ │  3 - 4 x t_0    │ █ │      (3 - 5 Ulir Penuh M6/M8)           |
|                                                   └───┘                 └───┘                                         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Friction Drilling** (dikenal secara komersial sebagai **Formdrill**, **Thermal Drilling**, atau **Flowdrill**) adalah proses pembentukan lubang dan selongsong silindris (*bushing*) secara non-pemotongan (*chipless thermal-mechanical hole forming*). Perkakas kerucut yang terbuat dari karbida tungsten berbutir halus (*micro-grain cemented tungsten carbide*) diputar pada kecepatan tinggi ($n = 1.500 - 6.000\text{ RPM}$) dan ditekan secara aksial ke atas permukaan lembaran logam.

Panas gesekan (*frictional heat*) yang dihasilkan pada antarmuka perkakas-benda kerja melunakkan material secara lokal hingga mencapai temperatur superplastis ($T \approx 0{,}5 - 0{,}7\ T_{\text{solidus}}$). Tekanan aksial mendorong material yang terplastisasi ke arah aksial dan radial, membentuk selongsong silindris berdinding lurus (*extrusive bushing*) di bagian bawah lembaran serta kerah cincin (*collar*) di bagian atas lembaran.

Standar pengujian dan pedoman desain untuk friction drilling meliputi:
- **ISO 898-1**: *Mechanical properties of fasteners made of carbon steel and alloy steel — Bolts, screws and studs*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **DIN 7970**: *Threads and thread ends for tapping screws*.
- **VDI 3824**: *Thermal drilling (Formdrilling) in sheet metal processing and manufacturing guidelines*.
- **DIN EN ISO 3506-1**: *Mechanical properties of corrosion-resistant stainless steel fasteners*.

---

## 2. Geometri Perkakas Friction Drill & Tahapan Kinematika Pembentukan

Perkakas friction drill dirancang secara khusus dengan geometri multi-tahap tanpa alur pemotong (*fluteless conical geometry*) untuk mengalirkan panas gesekan dan memandu perpindahan plastis massa logam.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                          GEOMETRI ANATOMI PERKAKAS FRICTION DRILL (TUNGSTEN CARBIDE)                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       ┌────────────────────────┐                                                      |
|                                       │   Tangkai Silindris    │ (Clamping Shank, d_shank)                            |
|                                       │    (Tool Shank)        │                                                      |
|                                       └───────────┬────────────┘                                                      |
|                                                   │                                                                   |
|                                       ┌───────────┴────────────┐                                                      |
|                                       │     Bahu / Shoulder    │ (Collar Forming / Trimming Ring, D_sh)               |
|                                       ├────────────────────────┤                                                      |
|                                       │   Bagian Silindris     │ (Cylindrical Land, Diameter d_0, Panjang L_c)        |
|                                       │  (Cylindrical Section) │                                                      |
|                                       ├────────────────────────┤                                                      |
|                                       │    Kerucut Transisi    │ (Conical Region, Sudut Kerucut Utama beta_1)         |
|                                       │   (Conical Section)    │                                                      |
|                                       ├────────────────────────┤                                                      |
|                                       │      Ujung Tengah      │ (Center / Pilot Point, Sudut Ujung alpha_p)          |
|                                       │     (Pilot Tip)        │                                                      |
|                                       └───────────┬────────────┘                                                      |
|                                                   ▼                                                                   |
|                                                                                                                       |
|               ╭───────────────────────────────────────────────────────────────────────────────────╮                   |
|               │                    5 TAHAPAN KINEMATIKA PEMBENTUKAN BUSHING                       │                   |
|               │                                                                                   │                   |
|               │  1. Tahap Inisiasi Kontak (Initial Tip Contact):                                  │                   |
|               │     - Pilot tip menyentuh lembaran logam. Gaya aksial F_z mulai melonjak.         │                   |
|               │     - Gesekan kering awal (dry sliding) menghasilkan fluks panas primer.         │                   |
|               │                                                                                   │                   |
|               │  2. Tahap Penetrasi Konis (Conical Penetration & Plastic Softening):              │                   |
|               │     - Logam mengalami kenaikan temperatur lokal hingga 600 - 900 °C.              │                   |
|               │     - Tegangan luluh material anjlok drastis (thermal softening).                 │                   |
|               │     - Material terdorong ke arah bawah mengikuti profil kerucut perkakas.         │                   |
|               │                                                                                   │                   |
|               │  3. Tahap Pembentukan Bushing Silindris (Cylindrical Land Forming):               │                   |
|               │     - Bagian silindris (cylindrical land) masuk meluruskan dinding bushing.      │                   |
|               │     - Ketebalan dinding bushing t_b dan kelurusan lubang terkalibrasi.           │                   |
|               │                                                                                   │                   |
|               │  4. Tahap Pembentukan Kerah Bahu (Shoulder Contact / Collar Forming):             │                   |
|               │     - Bahu perkakas meratakan logam yang terdorong ke atas menjadi collar datar  │                   |
|               │       atau memotongnya (flat collar vs trimmed surface).                          │                   |
|               │                                                                                   │                   |
|               │  5. Tahap Penarikan Perkakas (Tool Retraction & Cooling):                         │                   |
|               │     - Perkakas ditarik keluar. Logam mengalami pendinginan cepat (rapid cooling). │                   |
|               │     - Rekristalisasi dinamis menghasilkan mikrostruktur butir mikro-halus.        │                   |
|               ╰───────────────────────────────────────────────────────────────────────────────────╯                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Parameter Geometris Utama
1. **Pilot Tip Angle ($\alpha_p$)**: Sudut ujung pemandu berkisar antara $60^\circ - 90^\circ$, berfungsi memusatkan perkakas pada sumbu kerja dan memulai titik kontak tanpa getaran radial (*tool run-out*).
2. **Conical Angle ($\beta$)**: Sudut kerucut pembentuk utama berkisar antara $30^\circ - 40^\circ$. Sudut ini mengontrol laju pemuaian radial lembaran logam dan distribusi regangan geser.
3. **Cylindrical Land Diameter ($d_0$)**: Menentukan diameter nominal lubang bushing akhir.
4. **Cylindrical Land Length ($L_c$)**: Panjang zona silindris yang disesuaikan dengan ketebalan total pelat ditambah panjang bushing yang diinginkan ($L_c \ge t_0 + h_{\text{bushing}}$).
5. **Shoulder Ring Diameter ($D_{sh}$)**: Diameter bahu pembuat kerah atas (*flat collar* atau *cutter collar* jika dilengkapi pemotong tatal tepi).

---

## 3. Pemodelan Termomekanika Kontak, Pembangkitan Panas & Laju Alir Plastis

Pembentukan bushing dalam friction drilling dikendalikan oleh kopling termomekanis non-linier antara perpindahan panas gesekan dan tegangan alir plastis tergantung temperatur (*temperature-dependent viscoplastic flow stress*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       KOPLING TERMO-MEKANIS PROSES FRICTION DRILLING                                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|          Parameter Kinematika:                                                                                        |
|          - Kecepatan Sudut Spindel: omega = (2 * pi * N) / 60  [rad/s]                                                |
|          - Kecepatan Pakan Aksial: v_f                         [mm/s]                                                 |
|                                │                                                                                      |
|                                ▼                                                                                      |
|          ┌───────────────────────────────────────────────────────────────────────────────────┐                        |
|          │       GENERASI FLUKS KALOR GESEKAN (FRICTIONAL HEAT FLUX GENERATION)              │                        |
|          │       q_f(r, T) = mu(T, v_rel) * p_c(r, T) * v_rel(r)                             │                        |
|          │       q_pl(r, T) = eta_pl * tau_yield(T) * dot_gamma_pl                           │                        |
|          └─────────────────────────────────────────┬─────────────────────────────────────────┘                        |
|                                                    │                                                                  |
|                                                    ▼                                                                  |
|          ┌───────────────────────────────────────────────────────────────────────────────────┐                        |
|          │       DISTRIBUSI TEMPERATUR TRANSIEN (PERSAMAAN DIFUSI TERMAL 3D)                 │                        |
|          │       rho * c_p * (dT/dt) = div(k * grad(T)) + q_gen                              │                        |
|          │       Temperatur Puncak Capai: T_max = 650 - 950 °C                               │                        |
|          └─────────────────────────────────────────┬─────────────────────────────────────────┘                        |
|                                                    │                                                                  |
|                                                    ▼                                                                  |
|          ┌───────────────────────────────────────────────────────────────────────────────────┐                        |
|          │       PELUNAKAN TERMAL & PENURUNAN TEGANGAN LULUH (JOHNSON-COOK MODEL)            │                        |
|          │       sigma_flow = [A + B * eps^n] * [1 + C * ln(dot_eps*)] * [1 - (T*)^m]        │                        |
|          │       Tegangan alir turun 70 - 90% -> Terjadi Aliran Plastis Bebas Robekan        │                        |
|          └─────────────────────────────────────────┬─────────────────────────────────────────┘                        |
|                                                    │                                                                  |
|                                                    ▼                                                                  |
|          ┌───────────────────────────────────────────────────────────────────────────────────┐                        |
|          │       GAYA AKSIAL (THRUST FORCE) & TORSI PEMBENTUKAN (SPINDLE TORQUE)             │                        |
|          │       F_z = integral[ p_c * cos(beta/2) + mu * p_c * sin(beta/2) ] dA            │                        |
|          │       M_t = integral[ mu * p_c * r * (1 / cos(beta/2)) ] dA                       │                        |
|          └───────────────────────────────────────────────────────────────────────────────────┘                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Fluks Pembangkitan Panas Gesekan
Total fluks panas yang dibangkitkan pada antarmuka gesek terdiri atas panas gesekan batas permukaan (*frictional dissipation*) dan kerja deformasi plastis geser (*plastic shear dissipation*):
$$q_{\text{total}}(r, T) = q_{\text{fric}} + q_{\text{plastic}}$$

$$q_{\text{fric}}(r) = \mu(T, v_{\text{rel}}) \cdot p_c(r, T) \cdot (\omega \cdot r)$$
$$q_{\text{plastic}} = \eta_{\text{pl}} \cdot \bar{\tau}_{\text{yield}}(T) \cdot \dot{\gamma}_{\text{plastic}}$$

Di mana:
- $\mu(T, v_{\text{rel}})$ adalah koefisien gesek dinamis temperatur tinggi ($\mu \approx 0{,}25 - 0{,}45$).
- $p_c(r, T)$ adalah tekanan kontak antar-muka perkakas-lembaran ($\text{N/mm}^2$).
- $\omega = \frac{2\pi N}{60}$ adalah kecepatan sudut putaran perkakas ($\text{rad/s}$).
- $r$ adalah radius lokal kontak perkakas ($0 \le r \le \frac{d_0}{2}$).
- $\eta_{\text{pl}}$ adalah fraksi disipasi kerja plastis menjadi panas (faktor Taylor-Quinney, $\eta_{\text{pl}} \approx 0{,}90 - 0{,}95$).

### 3.2 Pembagian Partisi Kalor Antara Benda Kerja dan Perkakas
Kalor yang dibangkitkan pada bidang kontak dibagi antara benda kerja (*workpiece* / $w$) dan perkakas karbida (*tool* / $t$) berdasarkan efusivitas termal (*thermal effusivity*) masing-masing material:
$$\gamma_w = \frac{\xi_w}{\xi_w + \xi_t} = \frac{\sqrt{k_w \rho_w c_{p,w}}}{\sqrt{k_w \rho_w c_{p,w}} + \sqrt{k_t \rho_t c_{p,t}}}$$

Fluks kalor yang masuk ke dalam lembaran logam benda kerja adalah:
$$q_w(r) = \gamma_w \cdot q_{\text{total}}(r)$$

### 3.3 Model Konstitutif Tegangan Alir Johnson-Cook
Perilaku deformasi viskoplasitas lembaran pada laju regangan dan temperatur tinggi dimodelkan dengan persamaan konstitutif Johnson-Cook:
$$\bar{\sigma}_{\text{flow}} = \left( A + B \bar{\varepsilon}^n \right) \left[ 1 + C \ln \left( \frac{\dot{\bar{\varepsilon}}}{\dot{\varepsilon}_0} \right) \right] \left[ 1 - \left( T^* \right)^m \right]$$

Di mana temperatur homolog tereduksi $T^*$ didefinisikan sebagai:
$$T^* = \begin{cases} 0 & \text{untuk } T < T_{\text{room}} \\ \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} & \text{untuk } T_{\text{room}} \le T \le T_{\text{melt}} \\ 1 & \text{untuk } T > T_{\text{melt}} \end{cases}$$

---

## 4. Analisis Morfometri Geometri Bushing & Integritas Sambungan Ulir

### 4.1 Konservasi Volume & Prediksi Panjang Bushing Silindris
Panjang bushing silindris yang terbentuk ($h_{\text{bushing}}$) diprediksi melalui hukum kekekalan volume logam yang terdeformasi plastis dari silinder lubang awal:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    KESETIMBANGAN MASSA & MORFOMETRI BUSHING                                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                   Volume Logam Lubang Awal: V_0 = pi/4 * d_0^2 * t_0                                                  |
|                                                                                                                       |
|                   Terdistribusi Menjadi:                                                                              |
|                   1. Volume Bushing Bawah: V_bush = pi/4 * [(d_0 + 2*t_b)^2 - d_0^2] * h_b                            |
|                   2. Volume Kerah Atas:   V_coll = pi/4 * [D_coll^2 - d_0^2] * h_coll                                 |
|                                                                                                                       |
|                   Koefisien Pembagian Aliran:                                                                         |
|                   - Fraksi Bawah (Bushing, eta_b):  eta_b = 0.65 - 0.75                                               |
|                   - Fraksi Atas (Collar, eta_c):    eta_c = 0.25 - 0.35                                               |
|                                                                                                                       |
|                   Panjang Bushing Teoritis:                                                                           |
|                   h_b = (eta_b * d_0^2 * t_0) / [ 4 * t_b * (d_0 + t_b) ]                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Formulasi analitis panjang bushing:
$$h_{\text{bush}} = \frac{\eta_b \cdot d_0^2 \cdot t_0}{4 t_b (d_0 + t_b)}$$

Dengan tebal dinding bushing rata-rata $t_b \approx (0{,}4 - 0{,}6) \cdot t_0$, panjang bushing total yang diperoleh mencapai:
$$H_{\text{total}} = t_0 + h_{\text{bush}} \approx (2{,}8 - 4{,}2) \cdot t_0$$

### 4.2 Pembuatan Ulir Non-Tatal (Thread Forming / Cold Forming Tap)
Setelah bushing terbentuk, ulir dibuat menggunakan *fluteless thread forming tap* (DIN 371 / DIN 376). Berbeda dengan pemotongan ulir biasa (*cutting tap*), *cold forming tap* menekan dan mendesak serat logam secara plastis sehingga:
1. Serat kristal logam (*grain flow lines*) tidak terputus melainkan mengikuti kontur puncak dan lembah ulir.
2. Terjadi pengerasan regangan (*strain hardening*) pada dinding ulir yang meningkatkan kekerasan lokal hingga $20\% - 35\%$.
3. Kekuatan cabut aksial (*stripping load capacity*) meningkat lebih dari $50\%$ dibandingkan ulir hasil pemotongan.

$$F_{\text{strip}} = 0{,}6 \cdot \pi \cdot d_{\text{nominal}} \cdot L_{\text{thread}} \cdot \tau_{\text{ult}}$$

---

## 5. Algoritma Komputasi Python: Simulasi Termomekanika Friction Drilling & Optimasi Gaya-Torsi

Script Python di bawah ini mengimplementasikan simulasi termomekanika transien friction drilling, perhitungan generasi fluks kalor, distribusi temperatur benda kerja, gaya tekan aksial (*thrust force*), torsi spindel, prediksi panjang bushing, serta verifikasi kapasitas beban tarik ulir berdasarkan standar ISO 898-1.

```python
"""
RuangTI - Industrial Engineering Knowledge Base Solver
Modul 621: Friction Drilling (Formdrill / Thermal Drilling) & Bushing Formation Solver
Standar: ISO 898-1, ASTM E8M, DIN 7970, VDI 3824
"""

import math
from typing import Dict, Any, Tuple, List

class FrictionDrillingSolver:
    def __init__(
        self,
        sheet_thickness_mm: float = 1.5,
        hole_diameter_mm: float = 7.3,  # Untuk Ulir M8 (Pitch 1.25 mm)
        conical_angle_deg: float = 34.0,
        tip_angle_deg: float = 70.0,
        spindle_speed_rpm: float = 3200.0,
        feed_rate_mm_min: float = 600.0,
        material_name: str = "Stainless Steel AISI 304",
        yield_strength_room_mpa: float = 290.0,
        ultimate_tensile_strength_mpa: float = 620.0,
        thermal_conductivity_w_mk: float = 16.2,
        density_kg_m3: float = 7930.0,
        specific_heat_j_kgk: float = 500.0,
        melting_temp_c: float = 1450.0,
        ambient_temp_c: float = 25.0,
        friction_coefficient: float = 0.35,
        bushing_volume_fraction: float = 0.72
    ):
        self.t0 = sheet_thickness_mm
        self.d0 = hole_diameter_mm
        self.r0 = hole_diameter_mm / 2.0
        self.beta = math.radians(conical_angle_deg)
        self.alpha = math.radians(tip_angle_deg)
        self.rpm = spindle_speed_rpm
        self.omega = (2.0 * math.pi * spindle_speed_rpm) / 60.0  # rad/s
        self.vf = feed_rate_mm_min / 60.0  # mm/s
        self.material = material_name
        self.sigma_y0 = yield_strength_room_mpa
        self.uts = ultimate_tensile_strength_mpa
        self.k_w = thermal_conductivity_w_mk
        self.rho = density_kg_m3
        self.cp = specific_heat_j_kgk
        self.Tm = melting_temp_c
        self.T0 = ambient_temp_c
        self.mu = friction_coefficient
        self.eta_b = bushing_volume_fraction

        # Karbida Tungsten Tool Properties
        self.k_t = 80.0  # W/m.K
        self.rho_t = 14500.0  # kg/m3
        self.cp_t = 220.0  # J/kg.K

    def compute_thermal_partition(self) -> float:
        """Menghitung fraksi partisi kalor ke lembaran logam (gamma_w)."""
        effusivity_w = math.sqrt(self.k_w * self.rho * self.cp)
        effusivity_t = math.sqrt(self.k_t * self.rho_t * self.cp_t)
        gamma_w = effusivity_w / (effusivity_w + effusivity_t)
        return gamma_w

    def simulate_temperature_and_forces(self) -> Dict[str, Any]:
        """
        Simulasi tahapan penetrasi: profil temperatur kontak, gaya aksial,
        torsi spindel, dan daya mekanis yang dibutuhkan.
        """
        gamma_w = self.compute_thermal_partition()
        total_depth_mm = self.t0 + (self.r0 / math.tan(self.beta / 2.0))
        total_time_s = total_depth_mm / self.vf if self.vf > 0 else 1.0

        # Model empiris kenaikan temperatur antarmuka rata-rata (quasi-steady)
        # Temperatur saturasi pada zona kontak terplastisasi
        mean_rubbing_velocity = (2.0 / 3.0) * self.omega * (self.r0 / 1000.0)  # m/s
        heat_flux_raw = self.mu * (self.sigma_y0 * 0.4 * 1e6) * mean_rubbing_velocity  # W/m2
        heat_into_sheet = gamma_w * heat_flux_raw

        # Estimasi temperatur puncak rata-rata pada zona deformasi
        delta_T = (heat_into_sheet * math.sqrt(total_time_s / (self.rho * self.cp * self.k_w))) * 0.045
        T_peak = min(self.T0 + delta_T, 0.68 * self.Tm)

        # Faktor pelunakan termal Johnson-Cook
        T_star = max(0.0, min(1.0, (T_peak - self.T0) / (self.Tm - self.T0)))
        thermal_softening_factor = max(0.12, 1.0 - (T_star ** 1.4))
        sigma_flow_hot = self.sigma_y0 * thermal_softening_factor

        # Perhitungan Gaya Aksial Puncak (Thrust Force F_z)
        # Kontak permukaan kerucut: A_cone = pi * r0 * sqrt(r0^2 + h_cone^2)
        h_cone = self.r0 / math.tan(self.beta / 2.0)
        slant_length = math.sqrt(self.r0**2 + h_cone**2)
        contact_area_eff_mm2 = math.pi * self.r0 * slant_length * 0.5  # Penetrasi efektif

        # Gaya Aksial F_z
        p_contact_mpa = sigma_flow_hot * 1.35  # Tegangan hidrostatik tekan lokal
        F_z_axial_N = p_contact_mpa * contact_area_eff_mm2 * math.cos(self.beta / 2.0) * (
            1.0 + self.mu * math.tan(self.beta / 2.0)
        )

        # Torsi Spindel (Torque M_t)
        # dM = mu * p * r * dA
        M_torque_Nm = (
            self.mu * p_contact_mpa * 1e6 * (math.pi * slant_length * (self.r0 / 1000.0)**2 / 3.0)
        )

        # Daya Mesin Spindel (Power P)
        spindle_power_kw = (M_torque_Nm * self.omega) / 1000.0

        # Morfometri Bushing
        # Tebal dinding bushing perkiraan t_b
        t_bushing_mm = 0.48 * self.t0
        h_bushing_mm = (self.eta_b * (self.d0**2) * self.t0) / (
            4.0 * t_bushing_mm * (self.d0 + t_bushing_mm)
        )
        total_effective_length_mm = self.t0 + h_bushing_mm

        # Perhitungan Kapasitas Sambungan Ulir (Thread Forming M8)
        # Panjang ikatan ulir L_thread = total_effective_length_mm
        nominal_dia_mm = 8.0
        pitch_mm = 1.25
        num_full_threads = total_effective_length_mm / pitch_mm
        shear_strength_mpa = 0.65 * self.uts  # Tegangan geser ultimit material
        stripping_force_kn = (
            0.6 * math.pi * nominal_dia_mm * total_effective_length_mm * shear_strength_mpa
        ) / 1000.0

        # Sambungan standar baut Grade 8.8 (Tensile proof load M8 = 18.2 kN)
        proof_load_m8_grade88_kn = 18.2
        safety_factor_stripping = stripping_force_kn / proof_load_m8_grade88_kn

        return {
            "material": self.material,
            "sheet_thickness_mm": self.t0,
            "hole_diameter_mm": self.d0,
            "spindle_rpm": self.rpm,
            "feed_rate_mm_min": self.vf * 60.0,
            "peak_temperature_c": round(T_peak, 1),
            "thermal_softening_pct": round((1.0 - thermal_softening_factor) * 100.0, 1),
            "peak_thrust_force_n": round(F_z_axial_N, 1),
            "spindle_torque_nm": round(M_torque_Nm, 2),
            "spindle_power_kw": round(spindle_power_kw, 2),
            "bushing_wall_thickness_mm": round(t_bushing_mm, 2),
            "bushing_length_formed_mm": round(h_bushing_mm, 2),
            "total_effective_thickness_mm": round(total_effective_length_mm, 2),
            "thickness_gain_ratio": round(total_effective_length_mm / self.t0, 2),
            "full_threads_count": round(num_full_threads, 2),
            "thread_stripping_capacity_kn": round(stripping_force_kn, 2),
            "bolt_proof_load_grade88_kn": proof_load_m8_grade88_kn,
            "safety_factor": round(safety_factor_stripping, 2)
        }

if __name__ == "__main__":
    solver = FrictionDrillingSolver(
        sheet_thickness_mm=1.5,
        hole_diameter_mm=7.3,
        conical_angle_deg=34.0,
        tip_angle_deg=70.0,
        spindle_speed_rpm=3000.0,
        feed_rate_mm_min=600.0,
        material_name="Stainless Steel AISI 304",
        yield_strength_room_mpa=290.0,
        ultimate_tensile_strength_mpa=620.0,
        thermal_conductivity_w_mk=16.2,
        density_kg_m3=7930.0,
        specific_heat_j_kgk=500.0,
        melting_temp_c=1450.0
    )
    res = solver.simulate_temperature_and_forces()
    print("=== RUANGTI FRICTION DRILLING & BUSHING SOLVER ===")
    for k, v in res.items():
        print(f"{k}: {v}")
```

---

## 6. Studi Kasus Industri: Otomasi Perakitan Rangka Baterai Kendaraan Listrik (EV Battery Tray)

### 6.1 Latar Belakang & Masalah Rekayasa
Sebuah manufaktur otomotif global merancang modul baki baterai (*battery pack tray enclosure*) berbahan lembaran paduan aluminium $\text{AA6061-T6}$ dengan ketebalan $t_0 = 2{,}0\text{ mm}$. Baki baterai tersebut memerlukan $128$ titik pengikatan sekrup struktural $\text{M8}\times 1{,}25$ untuk mengunci penutup atas (*upper battery cover*) dan memastikan kekedapan cairan berstandar **IP67/IP69K**.

Metode sebelumnya menggunakan mur tekan hidrolik (*clinch nuts* $\text{M8}$). Namun, lini produksi menghadapi 3 kendala besar:
1. **Kegagalan *Loose Nut***: Terjadi tingkat cacat sebesar $1{,}8\%$ di mana mur longgar saat pengencangan baut torsi tinggi ($24\text{ Nm}$), menyebabkan penghentian lini perakitan (*line stoppage*).
2. **Biaya Komponen & Penanganan**: Biaya 128 mur sisip ditambah proses pemasangan mekanis mencapai Rp 185.000 per unit baki baterai.
3. **Peningkatan Bobot**: Berat total 128 mur sisip baja mencapai $1{,}42\text{ kg}$ per unit kendaraan.

### 6.2 Implementasi Friction Drilling & Thread Forming Robotik
Departemen Rekayasa Proses mengonversi proses perakitan ke stasiun robotik CNC 6-axis dengan perkakas Friction Drill Karbida Tungsten dan Cold Forming Tap:
- **Parameter Proses**:
  - Diameter lubang inti: $d_0 = 7{,}3\text{ mm}$ (untuk ulir $\text{M8}\times 1{,}25$).
  - Kecepatan putar spindel friction drill: $n = 3.600\text{ RPM}$.
  - Kecepatan pakan aksial: $v_f = 750\text{ mm/min}$.
  - Pembentukan ulir: *Oil-mist lubricated cold forming tap* pada $n = 600\text{ RPM}$.

### 6.3 Hasil Verifikasi & Pengujian Mekanis
Berdasarkan pengujian destruktif tarik aksial dan torsi (ASTM E8M dan ISO 898-1):
1. **Pertambahan Ketebalan Efektif**: Tebal lembaran awal $t_0 = 2{,}0\text{ mm}$ bertransformasi menjadi selongsong silindris dengan total ketebalan $t_{\text{eff}} = 6{,}35\text{ mm}$ (rasio pertambahan tebal $3{,}18\times$).
2. **Jumlah Ulir Penuh**: Diperoleh $4{,}5$ lilitan ulir penuh $\text{M8}$, melampaui standar minimum keamanan ikatan ($L_{\text{thread}} / d = 6{,}35 / 8{,}0 = 0{,}794 \approx 0{,}8$).
3. **Kekuatan Cabut (*Pull-Out Strength*)**: Kapasitas beban tarik ulir mencapai $21{,}4\text{ kN}$, melampaui *proof load* baut Grade 8.8 ($18{,}2\text{ kN}$). Baut patah pada batang ulir luar sebelum ulir bushing mengalami *stripping*.
4. **Analisis Keekonomian**:
   - Biaya mur sisip dieliminasi $100\%$ (penghematan Rp 185.000 / unit).
   - Penurunan bobot baterai sebesar $1{,}42\text{ kg}$ per mobil.
   - Waktu siklus pembuatan 1 lubang + ulir hanya $4{,}2\text{ detik}$.

---

## 7. Pertanyaan Evaluasi & Diskusi Konseptual

1. **Jelaskan mengapa proses friction drilling tidak menghasilkan tatal (*chips*) dan apa pengaruh fenomena ini terhadap kebersihan ruang perakitan (*cleanroom / electrical enclosure assembly*)!**
   *Petunjuk Jawaban*: Friction drilling memanfaatkan deformasi plastis temperatur tinggi yang melunakkan material secara lokal melalui panas gesekan, sehingga seluruh volume logam didesak secara aksial dan radial untuk membentuk selongsong (*bushing*), bukan dipotong. Hal ini mengeliminasi serpihan tatal logam tajam yang berpotensi menimbulkan hubung singkat listrik (*electrical short circuit*) pada modul baterai/elektronik.

2. **Bagaimana pengaruh peningkatan kecepatan spindel ($N$) terhadap gaya aksial ($F_z$) dan kualitas geometri bushing?**
   *Petunjuk Jawaban*: Peningkatan kecepatan spindel meningkatkan kecepatan gesek relatif ($v_{\text{rel}} = \omega r$), sehingga laju pembangkitan fluks kalor meningkat. Hal ini mempercepat kenaikan temperatur lokal, melunakkan material lebih intensif, dan menurunkan gaya dorong aksial puncak ($F_z$). Namun, kecepatan yang terlalu ekstrem dapat memicu *overheating*, pelelehan lokal mikro, atau penurunan kekasaran permukaan dalam bushing.

3. **Mengapa pembuatan ulir pada bushing hasil friction drilling lebih direkomendasikan menggunakan *cold forming tap* dibanding *cutting tap*?**
   *Petunjuk Jawaban*: Karena *cold forming tap* mendesak serat logam secara plastis tanpa memutus kontinuitas kristal (*grain flow*), serta memberikan efek *work hardening* pada dinding bushing yang relatif lunak pasca deformasi termal, menghasilkan integritas mekanis dan ketahanan cabut ulir yang superior.

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. **Biermann, D., & Kirschner, M. (2024)**. *Thermomechanical Hole Forming and Chipless Threading in Lightweight Sheet Structures*. CIRP Annals - Manufacturing Technology, 73(1), 215-220. DOI: `10.1016/j.cirp.2024.04.012`.
2. **Miller, S. F., Blau, P. J., & Shih, A. J. (2023)**. *Microstructural Evolution, Friction Interface Heat Generation, and Bushing Kinematics in Friction Drilling of High-Strength Alloys*. Journal of Manufacturing Processes, 89, 412-426. DOI: `10.1016/j.jmapro.2023.01.055`.
3. **Groover, M. P. (2021)**. *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems (7th Edition)*. John Wiley & Sons, Hoboken, NJ. ISBN: `978-1119706427`.
4. **VDI 3824 (2023)**. *Thermal Drilling (Formdrilling) in Metallic Sheet Materials: Process Guidelines, Tool Selection, and Threading Quality Assurance*. Verein Deutscher Ingenieure, Düsseldorf.
5. **ISO 898-1:2013**. *Mechanical properties of fasteners made of carbon steel and alloy steel — Part 1: Bolts, screws and studs with specified property classes — Coarse thread and fine pitch thread*. International Organization for Standardization, Geneva.
6. **ASTM E8 / E8M-22**. *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: `10.1520/E0008_E0008M-22`.
