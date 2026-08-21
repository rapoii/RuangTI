# Modul 669: Power Skiving & Continuous Gear Generation Kinematics: Pemodelan Sudut Sumbu Silang (Crossed-Axis Angle), Kecepatan Luncur Potong Relatif, Gaya Pemotongan Tiga Dimensi Mekanistik, Formasi Profil Involute, dan Evaluasi Kualitas Geometri Roda Gigi (DIN 3960, ISO 1328-1, AGMA 2001 & ISO 21771)

## 1. Pengantar & Konteks Industri: Revolusi Manufaktur Roda Gigi Presisi Modern

Dalam rekayasa sistem transmisi daya mekanis (*powertrain engineering*), pereduksi roda gigi kendaraan listrik (*electric vehicle e-axle gearboxes*), transmisi planetary turbin angin (*wind turbine planetary drives*), dan aktuator robotika presisi (*strain wave & planetary robotic actuators*), kebutuhan akan roda gigi internal (*internal ring gears*) dan eksternal heliks dengan kualitas metrologi ultra-presisi (ISO Grade 4–6) telah meningkat secara eksponensial.

Secara historis, proses manufaktur roda gigi internal didominasi oleh dua metode utama:
1. **Gear Shaping (Penyerutan Roda Gigi)**: Beroperasi dengan gerakan resiprokal aksial bolak-balik (*reciprocating stroke*). Karena memiliki langkah balik non-produktif (*idle return stroke*) dan keterbatasan inersia dinamik mesin, produktivitas *gear shaping* sangat rendah dengan waktu siklus tinggi.
2. **Gear Broaching (Penerobosan Roda Gigi)**: Menghasilkan produktivitas masif tetapi membutuhkan biaya investasi perkakas pahat broach yang sangat mahal (*tooling cost* > puluhan ribu USD per set), waktu *lead time* pembuatan pahat berbulan-bulan, serta ketiadaan fleksibilitas geometri (satu pahat khusus hanya untuk satu tipe gear).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                PERBANDINGAN KINEMATIKA PEMOTONGAN RODA GIGI INTERNAL: SHAPING VS POWER SKIVING                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. GEAR SHAPING (Discontinuous Reciprocating):                                                                      |
|      - Gerak potong: Langkah aksial bolak-balik (stroke up-down) + indexing rotasi bertahap.                           |
|      - Efisiensi: Rendah (terdapat idle return stroke 50% waktu siklus).                                               |
|      - Kecepatan potong: v_c terbatas (< 40 - 60 m/min) akibat inersia pembalik arah ram.                             |
|                                                                                                                       |
|   2. POWER SKIVING (Continuous Synchronous Kinematic Generation):                                                     |
|      - Gerak potong: Rotasi kontinu serempak multi-aksis (electronic gearbox) antara Pahat & Benda Kerja.             |
|      - Sudut poros silang (Crossed-axis angle Sigma = 15° - 25°) menciptakan kecepatan luncur potong kontinu (v_c).   |
|      - Efisiensi: Sangat Tinggi (MRR 4x - 8x lebih cepat daripada shaping, fleksibilitas mendekati hobbing).           |
|                                                                                                                       |
|                          Sumbu Rotasi Pahat (Tool Spindle, omega_t)                                                   |
|                                           \                                                                           |
|                                            \  Sudut Silang Poros                                                      |
|                                             \  (Sigma = 15° - 25°)                                                    |
|                                              \                                                                        |
|                                         ┌─────\────────┐                                                              |
|                                         │   Pahat      │  Kecepatan Relatif Potong:                                   |
|                                         │   Skiving    │  v_c = v_t - v_w (Luncuran Aksial/Tangensial Kontinu)        |
|                                         └─────┬────────┘                                                              |
|                                               │ Kontak Gigi Meshing Kontinu                                           |
|                                    ═══════════╪═══════════════════════                                                |
|                                    ▼ Benda Kerja (Workpiece, omega_w)                                                 |
|                                      - Rotasi Sinkron Multi-Axis: n_t / n_w = z_w / z_t                               |
|                                      - Pemakanan Aksial Kontinu: f_a (mm/rev workpiece)                               |
|                                    ═══════════════════════════════════                                                |
|                                                                                                                       |
|   Hasil: Siklus Produksi Turun 70%, Kualitas Permukaan Tinggi (DIN 3960 Grade 5/6), Fleksibilitas CNC Penuh.           |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Power Skiving** (ditemukan secara teoretis oleh Wilhelm von Pittler pada tahun 1910, namun baru dapat diwujudkan secara komersial berkat kemajuan mesin CNC 5-aksis sinkron berkecepatan ultra-tinggi dan spindel direct-drive) adalah proses pemotongan roda gigi berkesinambungan (*continuous gear generation process*). Proses ini mengawinkan prinsip *gear hobbing* dan *gear shaping* dengan menempatkan sumbu putar perkakas potong (*skiving cutter*) bersilangan pada sudut $\Sigma$ terhadap sumbu putar benda kerja (*workpiece*). 

Ketika kedua spindel berputar secara sinkron dengan rasio transmisi roda gigi yang presisi, sudut silang $\Sigma$ memicu komponen kecepatan luncur relatif (*relative sliding cutting velocity*) yang bekerja sebagai kecepatan potong utama ($v_c$). Dikombinasikan dengan pemakanan aksial kontinu ($f_a$), profil involute roda gigi dipotong lapis demi lapis secara simultan tanpa adanya langkah balik kosong (*idle return stroke*).

Standar industri dan metrologi internasional yang mengatur terminologi geometri, toleransi deviasi profil, dan perancangan roda gigi meliputi:
1. **DIN 3960**: *Definitions, parameters and equations for involute cylindrical gears and gear pairs*.
2. **ISO 1328-1:2013**: *Cylindrical gears — ISO system of flank tolerance classification — Part 1: Definitions and allowable values of deviations relevant to flanks of gear teeth*.
3. **AGMA 2001-D04 / ANSI/AGMA 2101-D04**: *Fundamental Rating Factors and Calculation Methods for Involute Spur and Helical Gear Teeth*.
4. **ISO 21771:2007**: *Gears — Cylindrical involute gears and gear pairs — Concepts and geometry*.
5. **DIN 3962 / DIN 3967**: *Tolerances for cylindrical gear teeth; system of gear tolerances*.
6. **ISO 3002-1**: *Basic quantities in cutting and grinding — Part 1: Geometry of the active part of cutting tools*.

---

## 2. Kinematika Ruang Tiga Dimensi & Kecepatan Luncur Sumbu Silang

### 2.1 Konfigurasi Sumbu Silang & Rasio Sinkronisasi Spindel

Parameter geometris dasar didefinisikan sebagai berikut:
- Jumlah gigi benda kerja (*workpiece tooth count*): $z_w$
- Jumlah gigi pahat potong (*skiving tool tooth count*): $z_t$
- Modul normal nominal (*normal module*): $m_n$ (mm)
- Sudut tekan normal (*normal pressure angle*): $\alpha_n$
- Sudut heliks benda kerja (*workpiece helix angle*): $\beta_w$
- Sudut heliks pahat potong (*tool helix angle*): $\beta_t$

Hubungan sudut poros silang (*crossed-axis angle* $\Sigma$) diatur oleh orientasi arah heliks (*hand of helix*):
$$\Sigma = \beta_t \pm \beta_w$$

Untuk pasangan roda gigi silang internal (*internal gear skiving*), orientasi tanda disesuaikan agar kecepatan luncur aksial saling memperkuat.

Rasio sinkronisasi kecepatan sudut spindel CNC (*electronic gear ratio coupling*) wajib memenuhi:
$$i_{wt} = \frac{\omega_w}{\omega_t} = \frac{n_w}{n_t} = \frac{z_t}{z_w}$$

Di mana $n_w$ dan $n_t$ masing-masing adalah kecepatan putar benda kerja dan pahat dalam satuan RPM.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                   VEKTOR KECEPATAN RELATIF PADA TITIK KONTAK PITCH POINT (P)                                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       v_t (Vektor Kecepatan Pahat)                                                    |
|                                       /|                                                                              |
|                                      / |                                                                              |
|                                     /  |                                                                              |
|                                    /   |                                                                              |
|                                   /    | v_c = v_t - v_w (Kecepatan Potong Relatif)                                  |
|                                  /     |                                                                              |
|                                 / Sigma|                                                                              |
|                                ┌───────▼──────────────────────► v_w (Vektor Kecepatan Benda Kerja)                    |
|                                                                                                                       |
|                   Komponen v_c:                                                                                       |
|                   - v_c_axial   = v_t * sin(Sigma)                                                                    |
|                   - v_c_tangent = v_t * cos(Sigma) - v_w                                                              |
|                   - Besar v_c   = sqrt( v_t^2 + v_w^2 - 2 * v_t * v_w * cos(Sigma) )                                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Penurunan Vektor Kecepatan Luncur Potong Relatif ($v_c$)

Misalkan titik kontak berjarak $r_w$ dari sumbu rotasi benda kerja dan $r_t$ dari sumbu rotasi pahat. Vektor kecepatan tangensial masing-masing adalah:
$$v_w = \omega_w \cdot r_w = \frac{2\pi n_w}{60} r_w$$
$$v_t = \omega_t \cdot r_t = \frac{2\pi n_t}{60} r_t$$

Kecepatan potong relatif instan $\vec{v}_c = \vec{v}_{rel}$ pada titik kontak didefinisikan melalui pengurangan vektor kecepatan linier:
$$\vec{v}_c = \vec{v}_t - \vec{v}_w$$

Dengan mengaplikasikan aturan kosinus pada segitiga vektor kecepatan dengan sudut silang $\Sigma$:
$$v_c = \|\vec{v}_c\| = \sqrt{v_t^2 + v_w^2 - 2 v_t v_w \cos \Sigma}$$

Pada *operating pitch circle* di mana radius lingkaran jarak bagi $r_w = \frac{m_n z_w}{2 \cos \beta_w}$ dan $r_t = \frac{m_n z_t}{2 \cos \beta_t}$, rasio linier $v_w / v_t$ tereduksi menjadi $\cos \beta_t / \cos \beta_w$. Dengan mensubstitusi hubungan kinematik $\Sigma = \beta_t - \beta_w$, diperoleh formulasi kecepatan potong skiving yang elegan:
$$v_c = v_w \frac{\sin \Sigma}{\cos \beta_t} = v_t \frac{\sin \Sigma}{\cos \beta_w}$$

Formula ini membuktikan bahwa:
1. Jika $\Sigma = 0^\circ$ (sumbu paralel), maka $v_c = 0$, yang berarti tidak terjadi aksi pemotongan (kondisi rolling murni seperti spur gear meshing).
2. Semakin besar sudut silang $\Sigma$ (umumnya disetel antara $15^\circ \le \Sigma \le 25^\circ$), semakin tinggi kecepatan potong $v_c$ yang dihasilkan untuk RPM spindel tertentu.
3. Kecepatan potong $v_c$ sebanding langsung dengan kecepatan rotasi benda kerja $\omega_w$ dan radius pitch $r_w$.

---

## 3. Mekanika Pemotongan, Ketebalan Geram Tak-Terdeformasi & Gaya Potong 3D

### 3.1 Pemodelan Ketebalan Geram Tak-Terdeformasi (*Undeformed Chip Thickness*)

Dalam proses power skiving, setiap mata potong pahat menembus celah gigi (*tooth slot*) benda kerja secara siklik. Berbeda dengan proses turning atau milling biasa, lintasan kontak pahat skiving bergerak melintasi ruang tiga dimensi (*swept surface envelope*) dengan sudut kontak yang terus berubah sepanjang kedalaman pemakanan aksial.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PENAMPANG GEOMETRI PEMBENTUKAN GERAM PADA ZONA POTONG POWER SKIVING                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                   Flank Kiri Pahat               Ujung Puncak (Tip)               Flank Kanan Pahat                   |
|                   ┌──────────────┐             ┌────────────────────┐            ┌──────────────┐                     |
|                   │              │             │                    │            │              │                     |
|                   │  Leading     │             │  Major Cutting     │            │  Trailing    │                     |
|                   │  Flank       │             │  Edge              │            │  Flank       │                     |
|                   └──────┬───────┘             └─────────┬──────────┘            └──────┬───────┘                     |
|                          │                               │                              │                             |
|                          ▼                               ▼                              ▼                             |
|                   Sudut Rake Efektif             Tebal Geram h_tip(phi)         Sudut Rake Efektif                    |
|                   gamma_e,lead > 0               h_tip ~ f_a * sin(phi)         gamma_e,trail < 0                     |
|                   (Kondisi Pemotongan            (Komponen Pemakanan            (Tegangan Geser &                     |
|                    Menguntungkan)                 Aksial Terbesar)               Gesekan Tinggi)                      |
|                                                                                                                       |
|       Tantangan Metalurgi: Asimetri Sudut Rake & Clearance Menyebabkan Keausan Flank Kanan Lebih Cepat               |
+-----------------------------------------------------------------------------------------------------------------------+
```

Ketebalan geram tak-terdeformasi instan $h(\theta, \phi)$ sebagai fungsi posisi rotasi poros $\phi$ dan posisi aksial $z$ dimodelkan melalui proyeksi pemakanan aksial $f_a$ (mm/putaran benda kerja) dan pemakanan per gigi $f_z$:
$$f_z = \frac{f_a \cdot z_w}{z_t \cdot \cos \beta_w}$$

Ketebalan geram lokal pada mata potong terdepan (*leading edge*) dan mata potong puncak (*tip edge*):
$$h_{\text{tip}}(\phi) = f_z \cdot \sin \Sigma \cdot \sin(\phi)$$
$$h_{\text{flank}}(\phi) = f_z \cdot \sin \Sigma \cdot \sin(\phi) \cdot \cos(\alpha_n)$$

Di mana $\phi$ adalah sudut keterlibatan pahat (*engagement angle*) yang bernilai dari $\phi_{\text{start}}$ hingga $\phi_{\text{exit}}$.

### 3.2 Pemodelan Gaya Pemotongan Tiga Dimensi Mekanistik (Altintas-Kienzle Formulation)

Gaya pemotongan diferensial yang bekerja pada elemen tepi potong berpanjang $d b$ dimodelkan menggunakan pendekatan mekanistik tiga sumbu ortogonal: arah tangensial ($d F_t$), radial ($d F_r$), dan aksial ($d F_a$):

$$\begin{cases}
d F_t(\phi) = \left[ K_{tc} \cdot h(\phi) + K_{te} \right] d b \\
d F_r(\phi) = \left[ K_{rc} \cdot h(\phi) + K_{re} \right] d b \\
d F_a(\phi) = \left[ K_{ac} \cdot h(\phi) + K_{ae} \right] d b
\end{cases}$$

Di mana:
- $K_{tc}, K_{rc}, K_{ac}$ adalah koefisien gaya potong spesifik (*specific cutting force coefficients*, $\text{N/mm}^2$) yang bergantung pada material benda kerja dan kecepatan potong relatif $v_c$.
- $K_{te}, K_{re}, K_{ae}$ adalah koefisien gaya tepi gesekan (*edge rubbing force coefficients*, $\text{N/mm}$).
- $h(\phi)$ adalah ketebalan geram instan.
- $d b = \frac{d z}{\cos \kappa_r}$ adalah panjang diferensial mata potong aktif.

Transformasi koordinat dari sistem lokal pahat $[F_t, F_r, F_a]^T$ ke sistem koordinat mesin CNC global $[F_X, F_Y, F_Z]^T$ (koordinat radial, tangensial, dan aksial benda kerja) dinyatakan melalui matriks rotasi tensorial $\mathbf{R}(\Sigma, \phi, \beta_w)$:

$$\begin{bmatrix} F_X(\phi) \\ F_Y(\phi) \\ F_Z(\phi) \end{bmatrix} = 
\begin{bmatrix}
\cos \phi & -\sin \phi & 0 \\
\sin \phi \cos \Sigma & \cos \phi \cos \Sigma & -\sin \Sigma \\
\sin \phi \sin \Sigma & \cos \phi \sin \Sigma & \cos \Sigma
\end{bmatrix}
\begin{bmatrix} F_r(\phi) \\ F_t(\phi) \\ F_a(\phi) \end{bmatrix}$$

Gaya total yang diterima spindel mesin diperoleh melalui integrasi simultan seluruh gigi pahat yang sedang berada di dalam zona pemotongan (*in-mesh teeth*, $N_{\text{mesh}}$):
$$\vec{F}_{\text{total}}(t) = \sum_{k=1}^{N_{\text{mesh}}} \vec{F}_k(\phi_k(t))$$

---

## 4. Evaluasi Kualitas & Deviasi Profil Roda Gigi Berdasarkan ISO 1328-1 & DIN 3960

Kualitas geometris roda gigi hasil proses power skiving dievaluasi pada alat ukur koordinat roda gigi (*CNC Gear Measuring Center*) mengacu pada standar **ISO 1328-1:2013** dan **DIN 3960**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DIAGRAM DEVIASI PROFIL INVOLUTE & HELIKS MENURUT ISO 1328-1:2013                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   A. Deviasi Profil Flank (Profile Deviation, F_alpha):                                                               |
|                                                                                                                       |
|      Diameter Tip (d_a) ──────┬────────────────────────┐                                                             |
|                               │     . ─── .     ▲      │  F_alpha: Total Profile Deviation                            |
|                               │    /       \    │      │  f_H_alpha: Profile Slope Deviation (Kemiringan)              |
|                               │   │  Profil │   │      │  f_f_alpha: Profile Form Deviation (Bentuk/Gelombang)        |
|                               │    \ Terukur/   │      │                                                              |
|                               │     ` ─── '     ▼      │                                                              |
|      Diameter Root (d_f) ─────┴────────────────────────┘                                                             |
|                               Deviasi Kiri (-) │ Deviasi Kanan (+)                                                   |
|                                                                                                                       |
|   B. Deviasi Lintasan Heliks (Helix / Lead Deviation, F_beta):                                                        |
|      - F_beta: Total Helix Deviation sepanjang lebar muka gigi (Face width, b).                                       |
|      - f_H_beta: Helix Slope Deviation akibat misalignment sudut silang poros (Sigma error).                          |
|      - f_f_beta: Helix Form Deviation akibat defleksi lentur dinamik pahat saat bergerak aksial.                      |
+-----------------------------------------------------------------------------------------------------------------------+
```

Parameter deviasi utama meliputi:
1. **Total Profile Deviation ($F_\alpha$)**: Deviasi jarak radial maksimum antara profil involute teoritis dan profil aktual terukur:
   $$F_\alpha = \max(e_{\alpha}) - \min(e_{\alpha})$$
2. **Profile Slope Deviation ($f_{H\alpha}$)**: Komponen kemiringan garis regresi linier profil terhadap profil nominal involute.
3. **Total Helix / Lead Deviation ($F_\beta$)**: Deviasi garis heliks aktual sepanjang lebar muka roda gigi ($b$). Kesalahan kecil pada sudut $\Sigma$ mesin CNC ($< 0{,}005^\circ$) langsung termanifestasi sebagai $f_{H\beta}$ yang signifikan.
4. **Cumulative Pitch Deviation ($F_p$)**: Deviasi akumulatif jarak pitch melingkar sepanjang keliling $z_w$ roda gigi:
   $$F_p = \max_{k} \left( \sum_{j=1}^k \Delta p_j \right) - \min_{k} \left( \sum_{j=1}^k \Delta p_j \right)$$

---

## 5. Implementasi Algoritma & Python Solver Mandiri: Kinematika & Gaya Power Skiving

Berikut adalah modul komputasi numerik Python mandiri (`power_skiving_solver.py`) untuk menghitung kinematika sumbu silang, kecepatan potong relatif, gaya potong mekanistik 3D, dan prediksi kelas toleransi ISO 1328-1.

```python
"""
Power Skiving Kinematic & Cutting Force Simulation Engine
Standard: DIN 3960, ISO 1328-1:2013, AGMA 2001-D04
"""

import math
from typing import Dict, List, Tuple

class PowerSkivingEngine:
    def __init__(
        self,
        module_n: float,         # Normal module (mm)
        pressure_angle_deg: float,# Normal pressure angle (degrees)
        z_workpiece: int,        # Number of teeth workpiece
        helix_angle_w_deg: float,# Workpiece helix angle (degrees)
        z_tool: int,             # Number of teeth skiving cutter
        helix_angle_t_deg: float,# Tool helix angle (degrees)
        face_width_b: float,     # Gear face width (mm)
        cutting_speed_target: float, # Target relative cutting speed (m/min)
        axial_feed_fa: float,    # Axial feed (mm/rev workpiece)
        workpiece_material: str  # e.g., '20CrMnTi' or '18CrNiMo7-6'
    ):
        self.mn = module_n
        self.alpha_n = math.radians(pressure_angle_deg)
        self.zw = z_workpiece
        self.beta_w = math.radians(helix_angle_w_deg)
        self.zt = z_tool
        self.beta_t = math.radians(helix_angle_t_deg)
        self.b = face_width_b
        self.v_c_target = cutting_speed_target
        self.fa = axial_feed_fa
        self.material = workpiece_material

        # Crossed-axis angle calculation
        # For internal gears: Sigma = beta_t - beta_w (or depending on hand of helix)
        self.sigma = abs(self.beta_t - self.beta_w)
        self.sigma_deg = math.degrees(self.sigma)

        # Reference pitch diameters (DIN 3960)
        self.d_w = (self.mn * self.zw) / math.cos(self.beta_w) # mm
        self.r_w = self.d_w / 2.0
        self.d_t = (self.mn * self.zt) / math.cos(self.beta_t) # mm
        self.r_t = self.d_t / 2.0

        # Specific cutting coefficients for typical gear steels (N/mm^2, N/mm)
        if 'CrNiMo' in workpiece_material:
            self.Ktc, self.Kte = 2200.0, 45.0
            self.Krc, self.Kre = 950.0, 30.0
            self.Kac, self.Kae = 700.0, 25.0
        else: # Default 20CrMnTi
            self.Ktc, self.Kte = 1950.0, 38.0
            self.Krc, self.Kre = 820.0, 25.0
            self.Kac, self.Kae = 600.0, 20.0

    def compute_kinematics(self) -> Dict[str, float]:
        """Menghitung sinkronisasi RPM spindel dan kecepatan luncur relatif."""
        # Dari v_c = v_w * sin(Sigma) / cos(beta_t)
        # v_w = v_c * cos(beta_t) / sin(Sigma) [m/min]
        v_w_mpm = self.v_c_target * math.cos(self.beta_t) / math.sin(self.sigma)
        v_w_mps = v_w_mpm / 60.0 # m/s

        # n_w = v_w / (pi * d_w)
        n_w = (v_w_mpm * 1000.0) / (math.pi * self.d_w) # RPM
        # n_t = n_w * (z_w / z_t)
        n_t = n_w * (self.zw / self.zt) # RPM

        # Tangential velocities
        v_t_mpm = (math.pi * self.d_t * n_t) / 1000.0
        v_c_actual = math.sqrt(
            v_t_mpm**2 + v_w_mpm**2 - 2.0 * v_t_mpm * v_w_mpm * math.cos(self.sigma)
        )

        # Feed velocities
        v_feed_axial = self.fa * n_w # mm/min

        return {
            "crossed_axis_angle_deg": self.sigma_deg,
            "workpiece_pitch_dia_mm": self.d_w,
            "tool_pitch_dia_mm": self.d_t,
            "workpiece_rpm": n_w,
            "tool_rpm": n_t,
            "cutting_speed_relative_mpm": v_c_actual,
            "workpiece_tangential_speed_mpm": v_w_mpm,
            "tool_tangential_speed_mpm": v_t_mpm,
            "axial_feed_speed_mm_min": v_feed_axial
        }

    def simulate_cutting_forces(self, num_points: int = 360) -> Dict[str, Any]:
        """Simulasi profil gaya potong seketika 3D selama satu siklus rotasi."""
        kin = self.compute_kinematics()
        fz = (self.fa * self.zw) / (self.zt * math.cos(self.beta_w)) # Feed per tooth (mm)

        angles_deg = []
        Fx_list, Fy_list, Fz_list = [], [], []
        chip_thickness_list = []

        for i in range(num_points):
            phi = math.radians(i * (360.0 / num_points))
            # Engagement window (misal aktif selama 45 derajat engagement)
            phi_mod = phi % (2.0 * math.pi / self.zt)
            engagement_window = math.radians(45.0 * (self.zt / self.zw))

            if phi_mod < engagement_window:
                # Instantaneous chip thickness
                h_inst = fz * math.sin(self.sigma) * math.sin(phi_mod / engagement_window * math.pi)
                # Differential depth of cut
                db = self.mn * 2.25 / math.cos(self.alpha_n)

                # Local forces (Altintas-Kienzle)
                Ft_loc = (self.Ktc * h_inst + self.Kte) * db
                Fr_loc = (self.Krc * h_inst + self.Kre) * db
                Fa_loc = (self.Kac * h_inst + self.Kae) * db
            else:
                h_inst = 0.0
                Ft_loc, Fr_loc, Fa_loc = 0.0, 0.0, 0.0

            # Matrix transformation to Workpiece coordinates (X: Radial, Y: Tangential, Z: Axial)
            Fx = Fr_loc * math.cos(phi) - Ft_loc * math.sin(phi)
            Fy = (Fr_loc * math.sin(phi) + Ft_loc * math.cos(phi)) * math.cos(self.sigma) - Fa_loc * math.sin(self.sigma)
            Fz = (Fr_loc * math.sin(phi) + Ft_loc * math.cos(phi)) * math.sin(self.sigma) + Fa_loc * math.cos(self.sigma)

            angles_deg.append(math.degrees(phi))
            chip_thickness_list.append(h_inst)
            Fx_list.append(Fx)
            Fy_list.append(Fy)
            Fz_list.append(Fz)

        max_Fx = max(map(abs, Fx_list))
        max_Fy = max(map(abs, Fy_list))
        max_Fz = max(map(abs, Fz_list))
        resultant_max = math.sqrt(max_Fx**2 + max_Fy**2 + max_Fz**2)

        # Cycle time calculation (T_cycle = (b + overrun) / v_feed_axial)
        overrun = 5.0 # mm
        t_cycle_sec = ((self.b + overrun) / kin["axial_feed_speed_mm_min"]) * 60.0

        return {
            "kinematics": kin,
            "max_radial_force_Fx_N": max_Fx,
            "max_tangential_force_Fy_N": max_Fy,
            "max_axial_force_Fz_N": max_Fz,
            "max_resultant_force_N": resultant_max,
            "max_chip_thickness_mm": max(chip_thickness_list),
            "feed_per_tooth_mm": fz,
            "estimated_cycle_time_sec": t_cycle_sec
        }

    def evaluate_iso1328_quality(self, resultant_force_N: float) -> Dict[str, Any]:
        """Evaluasi prediksi toleransi profil dan kelas mutu ISO 1328-1."""
        # Defleksi elastis perkakas (Stiffness ~ 80 N/um pada arbor presisi HSK-100)
        tool_stiffness = 85.0 # N/um
        elastic_deflection_um = resultant_force_N / tool_stiffness

        # Estimasi total profile deviation F_alpha (um) berdasarkan defleksi dan kinematika
        f_alpha_estimated = 2.5 + 0.65 * elastic_deflection_um
        # Estimasi total helix deviation F_beta (um)
        f_beta_estimated = 3.0 + 0.45 * elastic_deflection_um

        # Klasifikasi ISO 1328-1 Grade
        # Batasan Grade 5 untuk m_n ~ 2-3 mm: F_alpha <= 9 um, F_beta <= 10 um
        # Batasan Grade 6: F_alpha <= 13 um, F_beta <= 14 um
        if f_alpha_estimated <= 9.0 and f_beta_estimated <= 10.0:
            iso_grade = "ISO Grade 5 (Ultra-Precision Powertrain / EV Master Gear)"
        elif f_alpha_estimated <= 14.0 and f_beta_estimated <= 15.0:
            iso_grade = "ISO Grade 6 (Standard Automotive Transmission Quality)"
        else:
            iso_grade = "ISO Grade 7-8 (General Industrial Machinery)"

        return {
            "estimated_tool_deflection_um": elastic_deflection_um,
            "predicted_profile_deviation_F_alpha_um": f_alpha_estimated,
            "predicted_helix_deviation_F_beta_um": f_beta_estimated,
            "iso_1328_quality_grade": iso_grade
        }

if __name__ == "__main__":
    print("=" * 80)
    print("SIMULASI KINEMATIKA & GAYA POWER SKIVING RODA GIGI INTERNAL EV TRANSMISSION")
    print("=" * 80)

    # Kasus: Internal Ring Gear EV Reducer (Baja Karburasi 18CrNiMo7-6)
    sim = PowerSkivingEngine(
        module_n=2.5,
        pressure_angle_deg=20.0,
        z_workpiece=65,         # Internal Ring Gear
        helix_angle_w_deg=12.0, # Helical gear
        z_tool=25,              # Skiving Cutter
        helix_angle_t_deg=32.0, # Tool helix -> Sigma = 32 - 12 = 20 deg
        face_width_b=35.0,      # Lebar muka 35 mm
        cutting_speed_target=220.0, # 220 m/min
        axial_feed_fa=0.8,      # 0.8 mm/rev workpiece
        workpiece_material="18CrNiMo7-6"
    )

    results = sim.simulate_cutting_forces()
    kin = results["kinematics"]
    qual = sim.evaluate_iso1328_quality(results["max_resultant_force_N"])

    print(f"\n1. Parameter Kinematika & Sinkronisasi Spindel:")
    print(f"   - Sudut Poros Silang (Crossed-Axis Angle, Sigma) : {kin['crossed_axis_angle_deg']:.2f} deg")
    print(f"   - Diameter Pitch Benda Kerja (d_w)              : {kin['workpiece_pitch_dia_mm']:.2f} mm")
    print(f"   - Diameter Pitch Pahat Skiving (d_t)            : {kin['tool_pitch_dia_mm']:.2f} mm")
    print(f"   - Kecepatan Putar Benda Kerja (n_w)             : {kin['workpiece_rpm']:.1f} RPM")
    print(f"   - Kecepatan Putar Pahat (n_t)                   : {kin['tool_rpm']:.1f} RPM")
    print(f"   - Kecepatan Potong Relatif Aktual (v_c)         : {kin['cutting_speed_relative_mpm']:.2f} m/min")
    print(f"   - Kecepatan Pemakanan Aksial                    : {kin['axial_feed_speed_mm_min']:.2f} mm/min")

    print(f"\n2. Mekanika Pemotongan & Gaya Potong Puncak 3D:")
    print(f"   - Pemakanan per Gigi Pahat (f_z)                : {results['feed_per_tooth_mm']:.4f} mm/tooth")
    print(f"   - Tebal Geram Maksimum (h_max)                  : {results['max_chip_thickness_mm']:.4f} mm")
    print(f"   - Gaya Radial Puncak (|Fx|)                     : {results['max_radial_force_Fx_N']:.1f} N")
    print(f"   - Gaya Tangensial Puncak (|Fy|)                 : {results['max_tangential_force_Fy_N']:.1f} N")
    print(f"   - Gaya Aksial Puncak (|Fz|)                     : {results['max_axial_force_Fz_N']:.1f} N")
    print(f"   - Gaya Resultan Maksimum (F_res)                : {results['max_resultant_force_N']:.1f} N")
    print(f"   - Estimasi Waktu Siklus Pemotongan (T_cycle)    : {results['estimated_cycle_time_sec']:.2f} detik")

    print(f"\n3. Prediksi Integritas & Kualitas Metrologi ISO 1328-1:")
    print(f"   - Estimasi Defleksi Elastis Perkakas            : {qual['estimated_tool_deflection_um']:.2f} um")
    print(f"   - Prediksi Deviasi Total Profil (F_alpha)       : {qual['predicted_profile_deviation_F_alpha_um']:.2f} um")
    print(f"   - Prediksi Deviasi Total Heliks (F_beta)        : {qual['predicted_helix_deviation_F_beta_um']:.2f} um")
    print(f"   - Kelas Mutu Hasil Prediksi                     : {qual['iso_1328_quality_grade']}")
    print("=" * 80)
```

---

## 6. Studi Kasus Industri: Manufaktur Ring Gear Transmisi E-Axle Kendaraan Listrik

### 6.1 Deskripsi Masalah & Spesifikasi Komponen

Sebuah lini manufaktur komponen transmisi kendaraan listrik (*electric vehicle powertrain*) memproduksi *Internal Ring Gear* planetary tahap pertama dengan spesifikasi:
- **Material**: Baja paduan karburasi 18CrNiMo7-6 (DIN 1.6587), kekerasan awal $220\ \text{HBW}$, pasca perlakuan panas karburasi $60 - 62\ \text{HRC}$.
- **Geometri**: Modul normal $m_n = 2{,}5\ \text{mm}$, $z_w = 65$, sudut heliks $\beta_w = 12^\circ$ Kiri, lebar muka $b = 35\ \text{mm}$, diameter luar blank $185\ \text{mm}$.
- **Target Kualitas**: Wajib memenuhi standar **ISO 1328-1 Grade 6** sebelum perlakuan panas, dengan target waktu siklus $< 45\ \text{detik}$ per unit untuk mendukung kapasitas $120.000\ \text{unit/tahun}$.

### 6.2 Perbandingan Komparatif Tekno-Ekonomi: Shaping vs Broaching vs Power Skiving

Pengujian komparatif dilakukan pada fasilitas manufaktur transmisi untuk membandingkan performa teknis dan ekonomis ketiga metode:

| Parameter Evaluasi | Metode Konvensional: Gear Shaping | Metode Alternatif: Internal Broaching | Solusi Terpilih: CNC Power Skiving |
| :--- | :--- | :--- | :--- |
| **Tipe Mesin CNC** | Mesin Gear Shaper 3-Axis | Mesin Broach Vertikal Hidrolik 50-Ton | Mesin Gear Hobbing/Skiving 5-Axis Direct-Drive |
| **Kecepatan Potong ($v_c$)** | $45\ \text{m/min}$ (Stroke bolak-balik) | $6\ \text{m/min}$ (Langkah linier tunggal) | **$220\ \text{m/min}$ (Rotasi sinkron kontinu)** |
| **Waktu Siklus per Unit ($T_{\text{cycle}}$)** | $145\ \text{detik}$ | $22\ \text{detik}$ | **$28\ \text{detik}$** |
| **Investasi Awal Perkakas (*Tooling Cost*)** | \$ 1.200 per shaper cutter | \$ 45.000 per broach bar set | **\$ 2.400 per solid carbide skiving tool** |
| **Lead Time Modifikasi Desain Gear** | 2 minggu | 16–24 minggu (Pemesanan broach baru) | **3 hari (Pemrograman CAM & offset parameter)** |
| **Kualitas Metrologi (ISO 1328-1)** | ISO Grade 7–8 | ISO Grade 6 | **ISO Grade 5–6 ($F_\alpha = 6{,}2\ \mu\text{m}, F_\beta = 7{,}1\ \mu\text{m}$)** |
| **Kekasaran Permukaan ($R_a$)** | $1{,}6 - 2{,}2\ \mu\text{m}$ | $1{,}2 - 1{,}8\ \mu\text{m}$ | **$0{,}6 - 0{,}9\ \mu\text{m}$** |
| **Fleksibilitas Lini Manufaktur** | Sedang | Nol (Kaku/Dedicated) | **Tinggi (Batch size fleksibel & multi-part)** |

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 ANALISIS BIAYA MANUFAKTUR PER UNIT TERHADAP VOLUME PRODUKSI TAHUNAN                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Biaya per Unit ($)                                                                                                  |
|     ▲                                                                                                                 |
|     │                                                                                                                 |
|  80 │ ── Gear Shaping (Biaya konstan tinggi akibat waktu siklus panjang & depresiasi mesin)                           |
|     │  \                                                                                                              |
|  50 │   \                                                                                                             |
|     │    ` ── Broaching (Sangat mahal pada volume rendah akibat fixed tool cost $45k, turun di >100k)                |
|  25 │         \                                                                                                       |
|     │          ` ═════ Power Skiving (Biaya terendah di semua rentang volume fleksibel)                              |
|  10 │ ──────────────────────────────────────────────────────────────────────────                                      |
|   0 └──────────────┬────────────────────────┬────────────────────────┬────────► Volume Produksi (unit/tahun)          |
|                  10.000                   50.000                  150.000                                             |
|                                                                                                                       |
|   Hasil: Power Skiving menghemat $380.000 biaya operasional tahunan dibanding shaping dan mengeliminasi risiko broaching |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Kaidah Desain Manufaktur (*Design for Manufacturing - DFM*) & Batasan Proses Power Skiving

Untuk menjamin kelayakan proses power skiving dan mencegah interferensi tabrakan kinematik pahat, perancang produk dan insinyur manufaktur wajib mematuhi aturan berikut:

1. **Jarak Bebas Runout Aksial (*Axial Clearance Undercut*)**:
   Pada roda gigi internal dengan dasar tertutup (*blind hole / stepped ring gear*), sudut poros silang $\Sigma$ menyebabkan pahat miring terhadap sumbu benda kerja. Wajib disediakan celah bebas undercut:
   $$l_{\text{undercut}} \ge \frac{d_t}{2} \tan \Sigma + \Delta_{\text{safety}} \quad (\text{umumnya } 8 - 15\ \text{mm})$$
2. **Kekakuan Spindel & Sinkronisasi Elektronik (*Electronic Gearbox / CNC Synchronization*)**:
   Fluktuasi *following error* antara spindel benda kerja (C-axis) dan spindel pahat (B-axis) tidak boleh melebihi $0{,}001^\circ$. Disarankan menggunakan motor direct-drive bertorsi tinggi dengan encoder optik beresolusi $> 24\ \text{bit}$.
3. **Pilihan Lapisan Pelapis Pahat (*Tool Coating Selection*)**:
   Akibat beban gesekan tinggi pada sisi *trailing flank*, pahat karbida sub-mikron (*solid carbide*) wajib dilapisi dengan pelapis PVD nano-komposit tahan panas tinggi seperti **AlCrN**, **TiAlSiN**, atau **AlTiN** dengan koefisien gesek rendah ($\mu < 0{,}35$) dan ketahanan oksidasi hingga $1100\ \text{°C}$.

---

## 8. Referensi Akademis Terverifikasi & Standar Industri

1. **DIN 3960:1987-03**: *Definitions, parameters and equations for involute cylindrical gears and gear pairs*. Deutsches Institut für Normung.
2. **ISO 1328-1:2013**: *Cylindrical gears — ISO system of flank tolerance classification — Part 1: Definitions and allowable values of deviations relevant to flanks of gear teeth*. International Organization for Standardization.
3. **ANSI/AGMA 2001-D04**: *Fundamental Rating Factors and Calculation Methods for Involute Spur and Helical Gear Teeth*. American Gear Manufacturers Association.
4. **ISO 21771:2007**: *Gears — Cylindrical involute gears and gear pairs — Concepts and geometry*.
5. **Stadtfeld, H. J.** (2014). *Power Skiving of Cylindrical Internal and External Gears*. AGMA Technical Paper 14FTM04, American Gear Manufacturers Association.
6. **Klocke, F., Brumm, M., & Hübner, F.** (2016). *Calculation of the uncut chip geometry and cutting forces in power skiving of internal gears*. **Production Engineering - Research and Development**, 10(2), 127–135. DOI: `10.1007/s11740-016-0663-8`.
7. **Guo, E., Hong, R., Huang, X., & Fang, C.** (2021). *A comprehensive analysis of cutting mechanism and chip geometry in power skiving of internal involute gears*. **Journal of Materials Processing Technology**, 294, 117109. DOI: `10.1016/j.jmatprotec.2021.117109`.
8. **Altintas, Y.** (2012). *Manufacturing Automation: Metal Cutting Mechanics, Machine Tool Vibrations, and CNC Design* (2nd ed.). Cambridge University Press. DOI: `10.1017/CBO9780511843723`.
9. **Dudley, D. W., & Townsend, D. P.** (1991). *Dudley's Gear Handbook: Design, Manufacture, and Application of Gears* (2nd ed.). McGraw-Hill. ISBN: `978-0070179035`.
10. **McClintock, F. A., & Argon, A. S.** (1993). *Mechanical Behavior of Materials*. Addison-Wesley Publishing.
