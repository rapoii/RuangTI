# Modul 664: Multi-Point Forming (MPF) & Reconfigurable Flexible Punch Array Mechanics: Kinematika Matriks Punch Terkonfigurasi Ulang, Dinamika Penekanan Cacat Dimpling Menggunakan Bantalan Hiperelastis (Hyperelastic Polyurethane Cushion), Pemodelan Springback & Rekonstruksi Permukaan Tertutup (Closed-Loop Iterative Surface Compensation), serta Pembentukan Plat 3D Bebas (DIN 8584, ISO 12004, ASTM E2218 & ISO 25178)

## 1. Pengantar & Konteks Industri: Paradigma Flexible Reconfigurable Multi-Point Forming (MPF)

Dalam industri kedirgantaraan (panel kulit sayap dan *fuselage aircraft skin*), perkapalan (*double-curved ship hull plates*), arsitektur modern (*freeform facade panels*), transportasi kereta cepat (*high-speed train nose covers*), dan produksi prototipe otomotif, kebutuhan pembentukan pelat logam lembaran dengan geometri lengkung ganda tiga dimensi (*3D complex double-curved surfaces*) mengalami peningkatan pesat.

Metode pembentukan pelat konvensional menghadapi kendala tekno-ekonomis yang berat:
1. **Biaya Perkakas Masif & Waktu Tunggu Lama (*High Die Tooling Cost & Long Lead Time*)**: Pembuatan sepasang cetakan masif padat (*solid rigid punch and die*) melalui proses permesinan CNC 5-axis membutuhkan biaya ratusan ribu dolar dan waktu fabrikasi $2 - 6\ \text{bulan}$ untuk setiap varian geometri unik.
2. **Ketiadaan Fleksibilitas (*Inflexible Manufacturing*)**: Setiap modifikasi desain atau kompensasi efek *springback* memerlukan pengerjaan ulang (*re-machining*) atau pembuangan total cetakan yang ada (*die scrapping*).
3. **Penyimpanan Cetakan Berlebih (*Massive Die Inventory & Dead Storage*)**: Ribuan cetakan masif yang jarang digunakan harus disimpan dalam gudang khusus dengan biaya penyimpanan dan pemeliharaan yang membebani *operational expenditure* (OPEX).

**Multi-Point Forming (MPF)**—yang diklasifikasikan dalam standar manufaktur Jerman DIN 8584 sebagai teknologi pembentukan lembaran fleksibel (*flexible sheet metal forming*)—menggantikan cetakan masif padat kontinu dengan **matriks elemen punch diskrit yang dapat dikonfigurasi ulang secara independen (*reconfigurable discrete punch array*)**. Setiap elemen punch dikendalikan secara presisi oleh aktuator motor servo (*servo-driven CNC multipoint pin matrix*) untuk merekonstruksi geometri permukaan 3D bebas (*freeform target surface*) secara dinamis dalam hitungan menit.

```
+-----------------------------------------------------------------------------------------------------------------------+
|              SKEMATIKA ARSITEKTUR & KINEMATIKA MULTI-POINT FORMING (MPF) DENGAN ELASTIC CUSHION                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       MATRIKS PUNCH ATAS DISKRIT (Upper Reconfigurable Punch Array: N_x x N_y)                        |
|                         ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                                   |
|       Aktuator Servo ──►│   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ ◄── Kontrol Koordinat (x_i,y_j,z)|
|       Independen        │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │                                   |
|                         └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘                                   |
|                           │     │     │     │     │     │     │     │     │     │                                     |
|                           ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼                                     |
|                         (   ) (   ) (   ) (   ) (   ) (   ) (   ) (   ) (   ) (   )  Ujung Punch Hemisferis (R_p)     |
|                      ===============================================================  Bantalan Elastis Atas (Polyurethane)|
|                      ---------------------------------------------------------------  Lembaran Plat Logam (Sheet Metal, t)|
|                      ===============================================================  Bantalan Elastis Bawah (Cushion)    |
|                         (   ) (   ) (   ) (   ) (   ) (   ) (   ) (   ) (   ) (   )  Ujung Punch Bawah (R_p)          |
|                           ▲     ▲     ▲     ▲     ▲     ▲     ▲     ▲     ▲     ▲                                     |
|                           │     │     │     │     │     │     │     │     │     │                                     |
|                         ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                                   |
|       Matriks Pin ─────►│   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ ◄── Landasan Bawah Presisi        |
|       Bawah CNC         └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Meskipun menawarkan fleksibilitas manufaktur yang revolusioner, diskritisasi permukaan kontak pada MPF memicu dua fenomena cacat geometris kritis:
1. **Cacat Lekukan Titik Kontak (*Dimpling Defect*)**: Konsentrasi tegangan kontak lokal pada ujung elemen punch bola (*hemispherical punch tips*) meninggalkan bekas indentasi lokal bergelombang (*scallop/dimple surface waviness*). Cacat ini diatasi melalui penyisipan bantalan polimer hiperelastis (*hyperelastic polyurethane elastic cushion*).
2. **Pembalikan Elastis Kompleks (*Nonlinear 3D Springback*)**: Distribusi momen lentur yang tidak seragam di antara titik tumpu diskrit menyebabkan penyimpangan bentuk akhir (*geometrical deviation*). Ini dikoreksi menggunakan algoritma rekonstruksi permukaan adaptif tertutup (*closed-loop springback compensation algorithms*).

Standar keinsinyuran dan spesifikasi internasional terkait perancangan, formabilitas plat, dan metrologi permukaan MPF meliputi:
1. **DIN 8584-1 s.d. 6**: *Manufacturing processes forming under combinations of tensile and compressive conditions (Biegeumformen / Deep Drawing & Stretch Forming)*.
2. **ISO 12004-1 / ISO 12004-2**: *Metallic materials — Sheet and strip — Determination of forming-limit curves*.
3. **ASTM E2218**: *Standard Test Method for Determining Forming Limit Curves*.
4. **ISO 25178-2**: *Geometrical product specifications (GPS) — Surface texture: Areal — Terms, definitions and surface texture parameters ($Sa, Sz, Sq$)*.
5. **ASTM D575**: *Standard Test Methods for Rubber Properties in Compression (Pengujian Elastomer Polyurethane)*.
6. **ASME Y14.41**: *Digital Product Definition Data Practices (3D Geometric Model Surface Deviation)*.

---

## 2. Kinematika Matriks Diskrit & Perhitungan Posisi Ujung Punch

### 2.1 Diskritisasi Permukaan Analitis Tiga Dimensi ($CAD \to MPF$)

Diberikan permukaan target desain parametrik kontinu $S(u,v) = [x(u,v), y(u,v), z(u,v)]^T$, atau fungsi eksplisit ketinggian $z = f(x,y)$. Matriks MPF terdiri dari susunan grid elemen punch sebanyak $N_x \times N_y$ dengan jarak spasi seragam (*pitch grid spacing*) sebesar $L_p$ pada arah $x$ dan arah $y$.

Posisi bidang kisi horizontal dari elemen punch pada baris $i$ ($1 \le i \le N_x$) dan kolom $j$ ($1 \le j \le N_y$) adalah:

$$x_{i,j} = x_0 + (i - 1) \cdot L_p$$

$$y_{i,j} = y_0 + (j - 1) \cdot L_p$$

Setiap ujung elemen punch memiliki geometri hemisferis (*hemispherical punch tip*) dengan radius $R_p$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|              GEOMETRI VEKTOR NORMAL & OFSET TITIK KONTAK PUNCH HEMISFERIS TERHADAP PERMUKAAN LEMBARAN                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                        Titik Pusat Bola Punch (x_c, y_c, z_c)                                         |
|                                                          ●                                                            |
|                                                         /│\                                                           |
|                                                        / │ \                                                          |
|                                                       /  │  \ Radius Punch (R_p)                                      |
|                                                      /   │   \                                                        |
|                                                     /    │    \                                                       |
|                                   Vektor Normal n  /     │     \                                                      |
|                                            ▲      /      │      \                                                     |
|                                             \    /       │       \                                                    |
|                                              \  ▼        │        ▼                                                   |
|                        Permukaan Lembaran ────●───────────────────────                                                |
|                        Target Plat S(x,y)   Titik Kontak Sejati (x_k, y_k, z_k)                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Vektor normal satuan ke atas pada permukaan target $\mathbf{n}(x,y)$ diekspresikan melalui gradien permukaan:

$$\mathbf{n}(x,y) = \frac{\left[ -\frac{\partial f}{\partial x},\, -\frac{\partial f}{\partial y},\, 1 \right]^T}{\sqrt{1 + \left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2}} = [n_x, n_y, n_z]^T$$

Ketinggian posisi pusat bola ujung punch (*punch tip center coordinate*, $z_c(i,j)$) untuk memastikan permukaan lembaran bersinggungan secara tangensial dihitung dengan menambahkan ofset radius punch $R_p$ dan setengah tebal lembaran $t/2$ serta tebal bantalan elastis $t_c$:

$$z_c(i,j) = f(x_{i,j}, y_{i,j}) + \left( R_p + \frac{t}{2} + t_c \right) \cdot \sqrt{1 + \left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2} - R_p$$

---

### 2.2 Kelengkungan Permukaan Utama & Kondisi Tanpa Interferensi (*Curvature Radius Limit*)

Untuk mencegah benturan atau interferensi tepi (*edge collision / sharp corner interference*) antara elemen punch yang bersebelahan, radius kelengkungan minimum permukaan pelat target ($\rho_{\min}$) harus dibatasi terhadap ukuran pitch $L_p$ dan radius punch $R_p$:

$$\rho_{\min} = \frac{1}{\kappa_{\max}} \ge R_p + \frac{L_p^2}{8 R_p}$$

Kelengkungan Gaussian ($K_G$) dan Kelengkungan Rata-Rata ($H_M$) dari permukaan lembaran target ditentukan dari tensor kelengkungan:

$$K_G = \kappa_1 \cdot \kappa_2 = \frac{f_{xx} f_{yy} - f_{xy}^2}{\left(1 + f_x^2 + f_y^2\right)^2}$$

$$H_M = \frac{\kappa_1 + \kappa_2}{2} = \frac{(1 + f_y^2) f_{xx} - 2 f_x f_y f_{xy} + (1 + f_x^2) f_{yy}}{2 \left(1 + f_x^2 + f_y^2\right)^{3/2}}$$

Klasifikasi bentuk permukaan pembentukan MPF:
- **Permukaan Silindris / Kerucut (*Singly-Curved*)**: $K_G = 0$.
- **Permukaan Bola / Kupola (*Synclastic / Spherical Dome*)**: $K_G > 0$ ($\kappa_1$ dan $\kappa_2$ bertanda sama).
- **Permukaan Pelana / Saddle (*Anticlastic / Hyperbolic Paraboloid*)**: $K_G < 0$ ($\kappa_1$ dan $\kappa_2$ berlawanan tanda, rentan *wrinkling*).

---

## 3. Dinamika Kontak Bantalan Hiperelastis & Penekanan Cacat Dimpling

### 3.1 Model Konstitutif Mooney-Rivlin / Ogden untuk Bantalan Elastis Polyurethane (PUR)

Penyisipan lapisan bantalan elastis (*elastic cushion*) berbahan elastomer poliuretan (*polyurethane*, PUR) dengan kekerasan Shore $A\ 80 - 95$ di antara punch diskrit dan plat logam mentransformasikan beban titik diskrit (*point loads*) menjadi distribusi tekanan kontak kontinu (*continuous hydrostatic contact pressure*).

Perilaku tegangan-regangan bantalan poliuretan di bawah kompresi berat dimodelkan dengan fungsi energi regangan hiperelastis Mooney-Rivlin (*Mooney-Rivlin Strain Energy Density Function*, $W$):

$$W = C_{10} (I_1 - 3) + C_{01} (I_2 - 3) + \frac{1}{D_1} (J_{\text{el}} - 1)^2$$

di mana:
- $I_1 = \lambda_1^2 + \lambda_2^2 + \lambda_3^2$ dan $I_2 = \lambda_1^2 \lambda_2^2 + \lambda_2^2 \lambda_3^2 + \lambda_3^2 \lambda_1^2$ adalah invarian regangan pertama dan kedua.
- $\lambda_i$ adalah rasio regangan utama (*principal stretch ratios*).
- $C_{10}$ dan $C_{01}$ adalah konstanta material elastomer Mooney-Rivlin ($\text{MPa}$).
- $D_1$ adalah parameter kompresibilitas volumetrik ($D_1 = \frac{2}{K_{\text{bulk}}}$).
- Modulus geser awal $G_0 = 2(C_{10} + C_{01})$.

Tegangan normal kompresi unaksial ($\sigma_{\text{PUR}}$) sebagai fungsi rasio kompresi $\lambda = 1 - \varepsilon_c$:

$$\sigma_{\text{PUR}}(\lambda) = 2\left(\lambda - \frac{1}{\lambda^2}\right) \cdot \left( C_{10} + \frac{C_{01}}{\lambda} \right)$$

---

### 3.2 Amplitudo Gelombang Cacat Dimpling & Ketebalan Kritis Bantalan Elastis

Tanpa bantalan elastis, deformasi plastis lokal di bawah punch berjarak $L_p$ menghasilkan profil gelombang lekukan berulang dengan tinggi puncak-ke-lembah (*peak-to-valley dimple height*, $h_{\text{dimple}}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|              PROFIL GELOMBANG TEKSTUR PERMUKAAN CACAT DIMPLING DAN ATENUASI BANTALAN PUR                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Tanpa Bantalan Elastis:                                                                                            |
|           Punch Tip              Punch Tip                   Punch Tip                                                |
|             (   )                  (   )                       (   )                                                  |
|           ───\  /───────────────────\  /───────────────────────\  /───                                                |
|               \/                     \/                         \/     ◄── Amplitudo Dimple Ekstrim (h_dimple > 150μm)|
|               │◄──── Pitch (L_p) ───►│                                                                                |
|                                                                                                                       |
|    Dengan Bantalan Polyurethane Efektif (t_c > t_crit):                                                               |
|           ============================================================ ◄── Bantalan PUR (Transmisi Tekanan Hidrostatik)|
|           ──────────────────────────────────────────────────────────── ◄── Permukaan Halus Kelas Presisi (Sa < 0.8μm) |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Berdasarkan teori elastoplastisitas pelat Kirchhoff-Love dan pelebaran tegangan elastis Boussinesq, amplitudo gelombang dimpling yang tereduksi ($h_{\text{dimple}}$) diekspresikan sebagai fungsi ketebalan bantalan $t_c$:

$$h_{\text{dimple}}(t_c) = h_0 \cdot \exp\left( - \frac{2\pi \cdot \gamma_{\text{damp}} \cdot t_c}{L_p} \right)$$

di mana:
- $h_0 \approx \frac{L_p^2}{8 R_p} \cdot \left( \frac{\sigma_{\text{flow}}}{E_{\text{sheet}}} \right)$ adalah amplitudo lekukan awal tanpa bantalan.
- $\gamma_{\text{damp}} \approx 0.85 - 1.15$ adalah faktor atenuasi kekakuan geser bantalan.
- $L_p$ adalah jarak pitch elemen punch.

Kriteria ketebalan kritis bantalan elastis ($t_{c,\text{crit}}$) untuk memastikan kekasaran permukaan areal $Sa \le Sa_{\text{spec}}$ (misalnya $Sa \le 1.6\ \mu\text{m}$ sesuai ISO 25178):

$$t_{c,\text{crit}} \ge \frac{L_p}{2\pi \cdot \gamma_{\text{damp}}} \cdot \ln\left( \frac{h_0}{Sa_{\text{spec}}} \right)$$

Sebagai acuan industri praktis, rasio ketebalan bantalan terhadap pitch punch disyaratkan memenuhi:

$$\frac{t_c}{L_p} \ge 0.25 - 0.40$$

---

## 4. Pemodelan Tegangan Membran, Lentur & Kompensasi Springback Adaptif

### 4.1 Distribusi Momen Lentur & Pergeseran Garis Netral Plastis

Selama proses penekanan lembaran pelat setebal $t$ ke kurvatur target $\kappa_{\text{target}} = 1/\rho$, distribusi regangan serat longitudinal $e_x(z)$ pada jarak $z$ dari bidang tengah ($-\frac{t}{2} \le z \le \frac{t}{2}$) dipengaruhi oleh kombinasi regangan membran tarik $\varepsilon_m$ dan regangan lentur $\kappa \cdot z$:

$$e_x(z) = \varepsilon_m + \kappa \cdot z$$

Dengan model tegangan alir elastoplastis linier Ludwik-Hollomon ($\sigma = K_H \varepsilon^n$ untuk $\varepsilon \ge \varepsilon_y$), momen lentur internal per satuan lebar ($M_b$) saat beban penuh adalah:

$$M_b = \int_{-t/2}^{t/2} \sigma(z) \cdot z\, dz = \frac{E \cdot I_{\text{unit}}}{1 - \nu^2} \cdot \kappa_{\text{el}} + \frac{2 K_H}{2 + n} \left(\frac{t}{2}\right)^{2+n} \cdot \kappa^n \cdot \left[ 1 - \left(\frac{\kappa_y}{\kappa}\right)^{2+n} \right]$$

di mana $\kappa_y = \frac{2 \sigma_y (1 - \nu^2)}{E \cdot t}$ adalah kelengkungan luluh elastis awal.

---

### 4.2 Persamaan Perubahan Kelengkungan Springback ($\Delta \kappa$)

Saat perkakas punch MPF diangkat (*unloading*), pelepasan energi elastis internal menyebabkan fenomena *springback*, di mana kelengkungan berkurang dari kelengkungan tertekan (*loaded curvature*, $\kappa_{\text{load}}$) menjadi kelengkungan bebas akhir (*final unloaded curvature*, $\kappa_{\text{final}}$):

$$\Delta \kappa = \kappa_{\text{load}} - \kappa_{\text{final}} = \frac{12 \cdot M_b \cdot (1 - \nu^2)}{E \cdot t^3}$$

Faktor Rasio Kelengkungan Springback ($K_s$):

$$K_s = \frac{\kappa_{\text{final}}}{\kappa_{\text{load}}} = 1 - \frac{12 (1 - \nu^2)}{E \cdot t^3} \frac{M_b}{\kappa_{\text{load}}} \approx 1 - 3 \left(\frac{\sigma_y \cdot (1 - \nu^2)}{E \cdot t \cdot \kappa_{\text{load}}}\right) + 4 \left(\frac{\sigma_y \cdot (1 - \nu^2)}{E \cdot t \cdot \kappa_{\text{load}}}\right)^3$$

Untuk meminimalkan springback, gaya tarik tangensial (*sheet tension / stretch-forming tension*, $T_s$) dapat diterapkan melalui *clamping jaws* pada tepi plat:

$$\Delta \kappa_{\text{stretch}} = \Delta \kappa_{\text{pure\_bending}} \cdot \left( 1 - \frac{T_s}{A_{\text{cross}} \cdot \sigma_y} \right)$$

Ketika gaya tarik mencapai beban luluh penuh ($T_s \to A_{\text{cross}} \cdot \sigma_y$), seluruh serat melintasi batas plastis tarik sehingga momen lentur sisa lenyap ($M_b \to 0$), mengeliminasi efek springback hampir $100\%$.

---

### 4.3 Algoritma Rekonstruksi Permukaan Iteratif Tertutup (*Closed-Loop Compensation*)

Untuk mengoreksi galat geometri residual 3D secara presisi, diterapkan algoritma perpindahan balik adaptif (*Iterative Displacement Adjustment / IDA*):

```
+-----------------------------------------------------------------------------------------------------------------------+
|              ALUR ALGORITMA CLOSED-LOOP ITERATIVE SURFACE COMPENSATION PADA MPF                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    ┌──────────────────────────┐         ┌──────────────────────────┐         ┌──────────────────────────┐             |
|    │ 1. CAD Target Surface    │────────►│ 2. Setup Matriks Pin CNC │────────►│ 3. Proses Pembentukan    │             |
|    │    z = S_target(x,y)     │         │    z_c^(k)(i,j)          │         │    MPF + PUR Cushion     │             |
|    └──────────────────────────┘         └─────────────▲────────────┘         └────────────┬─────────────┘             |
|                                                       │                                   │                           |
|                                                       │ Update Posisi Pin                 ▼                           |
|                                                       │ z_c^(k+1) = z_c^(k) - α_c * e     │ Pelepasan Beban           |
|                                                       │                                   ▼                           |
|    ┌──────────────────────────┐         ┌─────────────┴────────────┐         ┌──────────────────────────┐             |
|    │ 6. Konvergen! Toleransi  │  TIDAK  │ 5. Evaluasi Error Bentuk │         │ 4. 3D Laser Optical Scan │             |
|    │    Maksimum e_max < ε_tol│◄────────┤    e(x,y) = S_meas - S_tg│◄────────┤    Pengukuran Geometri   │             |
|    └──────────────────────────┘ (Ulang) └──────────────────────────┘         │    z = S_measured(x,y)   │             |
|                 │                                                            └──────────────────────────┘             |
|                 ▼ YA                                                                                                  |
|    ┌──────────────────────────┐                                                                                       |
|    │ 7. Produksi Massal Selesai                                                                                      |
|    │    dengan Presisi Tinggi │                                                                                       |
|    └──────────────────────────┘                                                                                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Formula pembaruan koordinat tinggi pin pada iterasi $(k+1)$:

$$z_{c}^{(k+1)}(i,j) = z_{c}^{(k)}(i,j) - \alpha_{\text{relax}} \cdot \left[ S_{\text{measured}}^{(k)}(x_{i,j}, y_{i,j}) - S_{\text{target}}(x_{i,j}, y_{i,j}) \right]$$

di mana $\alpha_{\text{relax}} \approx 0.70 - 0.95$ adalah faktor relaksasi numerik untuk menjamin konvergensi stabil tanpa osilasi.

---

## 5. Pemodelan Gaya Pembentukan Total & Daya Hidrolik/Elektrik

Gaya pembentukan total ($F_{\text{total}}$) yang harus ditahan oleh seluruh matriks punch MPF merupakan integral tekanan pembentukan hidrostatik dan tegangan membran tarik:

$$F_{\text{total}} = \iint_A \left( p_{\text{contact}}(x,y) + \frac{2 \sigma_{\text{flow}} \cdot t}{\rho(x,y)} \right)\, dx\, dy \approx N_x N_y \cdot \bar{F}_{\text{pin}}$$

Gaya nominal rata-rata per elemen punch ($\bar{F}_{\text{pin}}$):

$$\bar{F}_{\text{pin}} = L_p^2 \cdot \left[ \frac{\sigma_{\text{flow}} \cdot t}{\rho_{\text{eff}}} + \sigma_{\text{PUR}}(\varepsilon_c) \right]$$

Kapasitas daya aktuator total ($P_{\text{act}}$) untuk menggerakkan seluruh pin selama siklus pembentukan berkecepatan $V_{\text{form}}$:

$$P_{\text{act}} = \frac{F_{\text{total}} \cdot V_{\text{form}}}{\eta_{\text{mech}}}$$

---

## 6. Algoritma Perancangan & Solver Python untuk Analisis Proses MPF

Skrip Python mandiri berikut memodelkan seluruh tahapan perancangan MPF: pembangkitan permukaan 3D kuadrik, penentuan koordinat matriks pin diskrit, kalkulasi amplitudo cacat dimpling dan tebal bantalan PUR kritis, prediksi kompensasi springback lentur murni dan lentur tarik, serta simulasi konvergensi loop tertutup (*closed-loop iteration*).

```python
"""
Multi-Point Forming (MPF) Discrete Die & Springback Compensation Solver
Standar Acuan: DIN 8584, ISO 12004, ASTM E2218, ISO 25178-2
RuangTI Engine Specialist Module
"""

import math
from typing import Dict, Any, List, Tuple

def solve_multipoint_forming(
    length_x_mm: float = 1200.0,       # Panjang bidang plat (mm)
    width_y_mm: float = 800.0,         # Lebar bidang plat (mm)
    sheet_thickness_mm: float = 2.0,   # Tebal plat lembaran (mm)
    r_curvature_x_mm: float = 2500.0,  # Radius kelengkungan arah X (mm)
    r_curvature_y_mm: float = 3500.0,  # Radius kelengkungan arah Y (mm)
    pitch_lp_mm: float = 40.0,         # Spasi / Pitch antar pin punch (mm)
    punch_radius_rp_mm: float = 25.0,  # Radius bola ujung punch (mm)
    cushion_thick_tc_mm: float = 12.0, # Tebal bantalan elastis polyurethane (mm)
    stretch_tension_ratio: float = 0.35,# Rasio gaya tarik stretch forming (T/T_yield)
    material: str = "AA2024_T3"        # Material plat lembaran
) -> Dict[str, Any]:
    """
    Menghitung parameter kinematika, atenuasi dimpling, springback, dan gaya Multi-Point Forming (MPF).
    """
    # 1. Parameter Material Logam Plat
    mat_database = {
        "AA2024_T3": {
            "name": "Aluminium Aerospace 2024-T3",
            "youngs_e_gpa": 73.1,
            "poisson_nu": 0.33,
            "yield_sigma_y_mpa": 325.0,
            "uts_mpa": 470.0,
            "hardening_k_mpa": 690.0,
            "hardening_n": 0.16
        },
        "Ti6Al4V": {
            "name": "Titanium Grade 5 (Ti-6Al-4V)",
            "youngs_e_gpa": 114.0,
            "poisson_nu": 0.34,
            "yield_sigma_y_mpa": 880.0,
            "uts_mpa": 950.0,
            "hardening_k_mpa": 1250.0,
            "hardening_n": 0.11
        },
        "SS304": {
            "name": "Stainless Steel AISI 304",
            "youngs_e_gpa": 193.0,
            "poisson_nu": 0.29,
            "yield_sigma_y_mpa": 290.0,
            "uts_mpa": 620.0,
            "hardening_k_mpa": 1300.0,
            "hardening_n": 0.45
        }
    }
    
    mat = mat_database.get(material, mat_database["AA2024_T3"])
    
    # 2. Diskritisasi Matriks Pin Punch
    n_x = int(math.ceil(length_x_mm / pitch_lp_mm)) + 1
    n_y = int(math.ceil(width_y_mm / pitch_lp_mm)) + 1
    total_punches = n_x * n_y
    
    # Radius kelengkungan ekuivalen permukaan bola/saddle
    # 1/rho_eff = 1/Rx + 1/Ry (Synclastic dome)
    kappa_x = 1.0 / (r_curvature_x_mm / 1000.0)
    kappa_y = 1.0 / (r_curvature_y_mm / 1000.0)
    kappa_gaussian = kappa_x * kappa_y
    r_eff_mm = 1.0 / (1.0 / r_curvature_x_mm + 1.0 / r_curvature_y_mm)
    
    # 3. Analisis Cacat Dimpling & Evaluasi Bantalan Elastis Polyurethane
    # Estimasi tinggi lekukan dasar tanpa cushion (h_0 in um)
    e_sheet_mpa = mat["youngs_e_gpa"] * 1000.0
    h_0_mm = (pitch_lp_mm ** 2) / (8.0 * punch_radius_rp_mm) * (mat["yield_sigma_y_mpa"] / e_sheet_mpa)
    h_0_um = h_0_mm * 1000.0
    
    # Atenuasi bantalan PUR (Mooney-Rivlin dissipation)
    gamma_damp = 1.05
    decay_exponent = (2.0 * math.pi * gamma_damp * cushion_thick_tc_mm) / pitch_lp_mm
    h_dimple_pur_um = h_0_um * math.exp(-decay_exponent)
    
    # Tebal kritis PUR untuk standar kualitas kosmetik Sa <= 1.0 um
    sa_target_um = 1.0
    if h_0_um > sa_target_um:
        tc_crit_mm = (pitch_lp_mm / (2.0 * math.pi * gamma_damp)) * math.log(h_0_um / sa_target_um)
    else:
        tc_crit_mm = 0.0
    tc_crit_mm = max(tc_crit_mm, 0.25 * pitch_lp_mm)
    
    cushion_status = "MEMENUHI STANDAR (Sa < 1.0 um)" if h_dimple_pur_um <= sa_target_um else "KURANG TEBAL (Risiko Dimpling)"
    
    # 4. Pemodelan Springback & Kompensasi Lentur Tarik
    t_m = sheet_thickness_mm / 1000.0
    e_eff = e_sheet_mpa / (1.0 - mat["poisson_nu"] ** 2)
    
    # Rasio Springback Pure Bending (Ks_pure)
    # Ks = 1 - 3*(sigma_y / (E' * t * kappa)) + 4*(sigma_y / (E' * t * kappa))^3
    term_el = (mat["yield_sigma_y_mpa"] * (1.0 - mat["poisson_nu"]**2)) / (mat["youngs_e_gpa"] * 1000.0 * t_m * kappa_x)
    ks_pure = 1.0 - 3.0 * term_el + 4.0 * (term_el ** 3)
    ks_pure = max(0.5, min(ks_pure, 0.99))
    
    delta_kappa_pure = kappa_x * (1.0 - ks_pure)
    r_unloaded_pure_mm = (1.0 / (kappa_x * ks_pure)) * 1000.0
    springback_deviation_pure_mm = abs(r_unloaded_pure_mm - r_curvature_x_mm)
    
    # Efek Stretch Forming Tension
    # delta_kappa_stretch = delta_kappa_pure * (1 - stretch_ratio)
    delta_kappa_stretch = delta_kappa_pure * max(0.0, (1.0 - stretch_tension_ratio))
    kappa_final_stretch = kappa_x - delta_kappa_stretch
    r_unloaded_stretch_mm = (1.0 / kappa_final_stretch) * 1000.0
    springback_deviation_stretch_mm = abs(r_unloaded_stretch_mm - r_curvature_x_mm)
    
    # Radius perkakas terkompensasi (Tool Compensation Curvature)
    # kappa_tool = kappa_target + delta_kappa
    kappa_tool_comp = kappa_x + delta_kappa_stretch
    r_tool_comp_mm = (1.0 / kappa_tool_comp) * 1000.0
    
    # 5. Simulasi Closed-Loop Iterative Displacement Adjustment (IDA)
    iterations_log = []
    current_tool_r = r_tool_comp_mm
    alpha_relax = 0.85
    for it in range(1, 5):
        k_tool = 1000.0 / current_tool_r
        # Prediksi unloaded
        k_unloaded = k_tool - delta_kappa_stretch
        r_measured = 1000.0 / k_unloaded
        error_mm = r_measured - r_curvature_x_mm
        iterations_log.append({
            "iter": it,
            "r_tool_mm": round(current_tool_r, 1),
            "r_formed_mm": round(r_measured, 1),
            "error_mm": round(error_mm, 2)
        })
        if abs(error_mm) < 5.0:
            break
        # Koreksi
        current_tool_r = current_tool_r - alpha_relax * (r_measured - r_curvature_x_mm) * (current_tool_r / r_curvature_x_mm)
        
    # 6. Analisis Gaya Penekanan Matriks Punch & Daya Pres
    area_m2 = (length_x_mm / 1000.0) * (width_y_mm / 1000.0)
    p_forming_mpa = (mat["yield_sigma_y_mpa"] * t_m) / (r_eff_mm / 1000.0) + 1.5 # kontak cushion PUR
    f_total_kn = p_forming_mpa * area_m2 * 1000.0
    f_per_pin_kn = f_total_kn / total_punches
    
    # Kebutuhan daya motor servo (kecepatan gerak 10 mm/s)
    v_form_m_s = 0.010
    power_kw = (f_total_kn * v_form_m_s) / 0.85 # efisiensi 85%
    
    return {
        "material": mat["name"],
        "sheet_dimensions_mm": f"{length_x_mm:.0f} x {width_y_mm:.0f} x {sheet_thickness_mm:.1f}",
        "punch_matrix_grid": f"{n_x} x {n_y} ({total_punches} Element Pins)",
        "gaussian_curvature_m2": round(kappa_gaussian, 4),
        "dimple_height_raw_um": round(h_0_um, 2),
        "dimple_height_with_pur_um": round(h_dimple_pur_um, 3),
        "pur_cushion_status": cushion_status,
        "critical_pur_thickness_mm": round(tc_crit_mm, 1),
        "springback_deviation_pure_bending_mm": round(springback_deviation_pure_mm, 1),
        "springback_deviation_with_stretch_mm": round(springback_deviation_stretch_mm, 1),
        "compensated_tool_radius_mm": round(r_tool_comp_mm, 1),
        "total_forming_force_kn": round(f_total_kn, 1),
        "force_per_pin_kn": round(f_per_pin_kn, 2),
        "required_hydraulic_power_kw": round(power_kw, 2),
        "closed_loop_iterations": iterations_log
    }

if __name__ == "__main__":
    print("=== PENGUJIAN SOLVER MULTI-POINT FORMING (MPF) ===")
    res = solve_multipoint_forming(
        length_x_mm=1500.0,
        width_y_mm=1000.0,
        sheet_thickness_mm=2.5,
        r_curvature_x_mm=3000.0,
        r_curvature_y_mm=4500.0,
        pitch_lp_mm=45.0,
        punch_radius_rp_mm=28.0,
        cushion_thick_tc_mm=14.0,
        stretch_tension_ratio=0.40,
        material="AA2024_T3"
    )
    for k, v in res.items():
        print(f"  {k:35s}: {v}")
```

---

## 7. Studi Kasus Industri: Pembentukan Panel Kulit Sayap (*Aircraft Wing Skin Panel*) Paduan Aluminium AA2024-T3

### 7.1 Latar Belakang & Permasalahan Pabrik Kedirgantaraan

Sebuah pabrikan aerostruktur memproduksi panel kulit sayap atas (*upper wing skin panel*) berdimensi $2.000\ \text{mm} \times 1.200\ \text{mm}$ dengan ketebalan $2.5\ \text{mm}$ dari paduan aluminium berkekuatan tinggi AA2024-T3. Geometri panel adalah lengkung ganda (*double-curved synclastic surface*) dengan radius kelengkungan nominal $R_x = 3.200\ \text{mm}$ dan $R_y = 5.000\ \text{mm}$.

Kendalanya:
1. Pembuatan *dedicated solid steel die* membutuhkan biaya investasi $\text{USD}\ 185.000$ dengan masa tunggu pengiriman *lead time* $14\ \text{minggu}$.
2. Efek *springback* pada paduan AA2024-T3 yang memiliki modulus elastisitas sedang ($E = 73.1\ \text{GPa}$) dan batas luluh tinggi ($\sigma_y = 345\ \text{MPa}$) menyebabkan deviasi bentuk hingga $+38\ \text{mm}$ jika dibentuk tanpa kompensasi aktif.
3. Cacat lekukan (*dimpling*) bekas kontak punch merusak integritas fatik (*fatigue life*) permukaan panel luar yang berinteraksi dengan aliran aerodinamis.

Pabrik mengadopsi mesin **Flexible Multi-Point Stretch Forming (MPSF)** dengan susunan pin matriks $45 \times 28$ ($1.260$ pin servo-aktuator independen berpitch $L_p = 45\ \text{mm}$) terintegrasi dengan bantalan poliuretan Shore $A\ 90$ dan sistem pemindai 3D optik *closed-loop*.

---

### 7.2 Implementasi & Hasil Pengukuran Kinerja

Parameter operasional yang dikonfigurasikan pada sistem MPF:
- Grid punch: $45 \times 28$ matriks pin ($L_p = 45\ \text{mm}$, ujung bola $R_p = 28\ \text{mm}$).
- Bantalan elastis: Polyurethane elastomer setebal $t_c = 15\ \text{mm}$ ($t_c/L_p = 0.33 > 0.25$).
- Beban tarik tangensial (*pre-stretch tension*): $35\%$ dari kapasitas beban luluh lembaran ($0.35 \times \sigma_y \times A_{\text{cross}}$).
- Pengukuran geometri: *AICON 3D Optical Scanner* dengan resolusi akurasi $\pm 0.02\ \text{mm}$.

Hasil perbandingan teknis antara metode konvensional, MPF mentah, dan MPF terkompensasi penuh:

| Parameter Evaluasi | Solid Dedicated Die (Konvensional) | Raw MPF (Tanpa Cushion & Kompensasi) | Advanced MPF + PUR Cushion + Closed-Loop |
| :--- | :--- | :--- | :--- |
| **Biaya Perkakas Cetakan** | $\text{USD}\ 185.000$ (Khusus 1 geometri) | $\text{USD}\ 0$ (Reconfigurable Pin Matrix) | $\text{USD}\ 0$ (Reconfigurable Pin Matrix) |
| **Waktu Setup Geometri Baru** | $14\ \text{Minggu}$ (Fabrikasi CNC) | $15\ \text{Menit}$ (Servo Repositioning) | $20\ \text{Menit}$ (Servo + Scan Loop) |
| **Amplitudo Dimpling ($Sa$)** | $0.4\ \mu\text{m}$ (Permukaan kontinu) | $18.5\ \mu\text{m}$ (Cacat Gelombang Berat) | $0.58\ \mu\text{m}$ (Lolos Standar ISO 25178) |
| **Deviasi Springback ($|\Delta R_x|$)** | $+32.4\ \text{mm}$ (Harus shim manual) | $+38.6\ \text{mm}$ (Di luar toleransi) | $0.42\ \text{mm}$ (Sesuai Toleransi ASME Y14.41) |
| **Gaya Tekan Maksimum** | $3.500\ \text{kN}$ (350 Ton) | $820\ \text{kN}$ | $960\ \text{kN}$ (Termasuk Deformasi PUR) |
| **Jumlah Iterasi Closed-Loop** | N/A (Tidak fleksibel) | N/A (Benda cacat) | $2\ \text{Iterasi}$ ($e_{\max} < 0.5\ \text{mm}$) |
| **Keseragaman Tebal Plat** | $\pm 8.5\%$ | $\pm 14.2\%$ (Penipisan lokal di pin) | $\pm 3.1\%$ (Distribusi tegangan seragam) |
| **Kesesuaian Standar Dirgantara** | Memerlukan rework panjang | GAGAL (*Rejected*) | **LULUS PENUH (FAA / EASA Spec)** |

---

## 8. Verifikasi Kualitas & Standardisasi Metrologi

Untuk menjamin kelaikan panel struktural presisi hasil pembentukan MPF, protokol kontrol kualitas berikut diwajibkan:
1. **Pemindaian Topografi Areal 3D (ISO 25178-2)**: Evaluasi parameter kekasaran permukaan areal $Sa$, $Sq$, dan $Sz$ pada titik-titik bekas koordinat kontak pin untuk memastikan penghilangan total bekas indentasi dimpling.
2. **Uji Batas Pembentukan & Penipisan Plat (ISO 12004 & ASTM E2218)**: Pengukuran *Forming Limit Diagram (FLD)* melalui pola kisi lingkar (*circular grid analysis*) atau *Digital Image Correlation (DIC)* untuk memverifikasi bahwa regangan mayor-minor lembaran berada di bawah batas kritis sobek (*necking limit curve*).
3. **Pemeriksaan Deviasi Bentuk Geometris (ASME Y14.41)**: Perbandingan komputasional *color-coded error deviation map* antara model CAD teoritis terhadap hasil pemindaian awan titik (*point cloud data*) dari CMM optik laser.
4. **Karakterisasi Sifat Mekanis Elastomer (ASTM D575 & ASTM D2240)**: Pengujian kekerasan Shore $A$ dan kurva kompresi siklik bantalan poliuretan secara periodik untuk mendeteksi degradasi mekanis atau *permanent set deformation*.

---

## 9. Referensi Terverifikasi & Literatur Akademis

1. **Li, M. Z., Cai, Z. Y., Sui, Z., & Yan, Q. G.** (2023). *Multi-Point Forming Technology for Sheet Metal: Fundamentals, Numerical Modeling, and Industrial Applications in Aerospace and High-Speed Trains*. **Journal of Materials Processing Technology**, 315, 117920. DOI: 10.1016/j.jmatprotec.2023.117920.
2. **Abebe, M., Lee, K., & Kang, B. S.** (2020). *Reconfigurable Multipoint Forming Using Waffle-Type Elastic Cushion and Variable Thickness Punch-Loading Profiles for Defect Elimination*. **Materials**, 13(20), 4506. DOI: 10.3390/ma13204506.
3. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th Edition). John Wiley & Sons, Hoboken, NJ.
4. **Blanchard, B. S., & Fabrycky, W. J.** (2019). *Systems Engineering and Analysis* (5th Edition). Pearson, London.
5. **Deutsches Institut für Normung (DIN)**. (2018). *DIN 8584-1: Manufacturing processes forming under combinations of tensile and compressive conditions - Part 1: General classification*. Beuth Verlag, Berlin.
6. **International Organization for Standardization (ISO)**. (2021). *ISO 12004-2:2021: Metallic materials — Sheet and strip — Determination of forming-limit curves — Part 2: Determination of forming-limit curves in the laboratory*. ISO, Geneva, Switzerland.
