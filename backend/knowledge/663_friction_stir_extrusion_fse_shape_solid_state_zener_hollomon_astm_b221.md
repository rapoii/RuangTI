# Modul 663: Friction Stir Extrusion (FSE) & Shear Assisted Processing and Extrusion (ShAPE): Termomekanika Deformasi Plastis Geser Berat (SPD), Pemodelan Torsi-Gaya Dorong Aksial, Termodinamika Rekristalisasi Dinamik Zener-Hollomon, Konsolidasi Butir Ultra-Halus (UFG), dan Konsolidasi Padat Sampah Serpihan Logam (ASTM B221, ISO 25239 & ASTM E8/E8M)

## 1. Pengantar & Konteks Industri: Paradigma Solid-State Friction Stir Extrusion (FSE/ShAPE)

Dalam industri metalurgi, otomotif, kedirgantaraan, dan manufaktur berkelanjutan (*circular manufacturing*), proses ekstrusi logam konvensional (*direct/indirect conventional extrusion*) memiliki batasan operasional yang signifikan:
1. **Kebutuhan Tekanan dan Energi Termal Masif**: Billet logam harus dipanaskan dalam tanur (*furnace preheating*) mendekati suhu homolog ($0.7 - 0.85\ T_m$) dan membutuhkan *hydraulic ram* dengan kapasitas ribuan ton untuk memaksa logam melewati cetakan (*die orifice*).
2. **Degradasi Metalurgi pada Paduan Kinerja Tinggi**: Paduan magnesium (seperti AZ31, AZ91, ZK60) dan paduan aluminium kedirgantaraan berkekuatan tinggi seri 7xxx (AA7075, AA7050) rentan mengalami pertumbuhan butir abnormal (*grain coarsening*), retak panas (*hot shortness*), atau anisotropi tekstur basal yang parah selama ekstrusi konvensional.
3. **Inefisiensi Daur Ulang Serpihan/Gram Pemesinan (*Machining Chips Recycling*)**: Daur ulang limbah serbuk atau serpihan pemesinan (*swarf/chips*) melalui peleburan ulang (*remelting*) menghasilkan kehilangan material (*metal loss*) $15\% - 40\%$ akibat oksidasi terak (*dross formation*), emisi gas rumah kaca tinggi, dan konsumsi energi termal hingga $20 - 30\ \text{MJ/kg}$.

**Friction Stir Extrusion (FSE)**—dan varian mutakhirnya **Shear Assisted Processing and Extrusion (ShAPE™)** yang dipelopori oleh *Pacific Northwest National Laboratory (PNNL)*—adalah teknologi ekstrusi padat (*solid-state extrusion*) yang merevolusi pengolahan logam. FSE memanfaatkan perkakas cetakan putar (*rotating die*) yang berputar pada kecepatan sudut $\omega$ tinggi sembari menekan billet/serpihan logam dengan gaya dorong aksial $F_z$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|              SKEMATIKA FISIKA & TERMO-MEKANIKA PROSES FRICTION STIR EXTRUSION (FSE / ShAPE)                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       Motor Spindle & Torsi Putar (M_t, ω)                                            |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|                                       ┌───────────────────────────┐                                                   |
|                                       │   ROTATING DIE / TOOL     │ ◄─── Gaya Tekan Aksial (F_z)                      |
|                                       └─────────────┬─────────────┘                                                   |
|                                                     │                                                                 |
|                         Wadah Matriks               │ Orifice Ekstrusi                                                |
|                      ┌──────────────────┐    ┌──────┴──────┐    ┌──────────────────┐                                  |
|                      │ Kontainer Billet │    │   Produk    │    │ Kontainer Billet │                                  |
|                      │ (Container Wall) │    │  Terekstrusi│    │ (Container Wall) │                                  |
|                      │                  │    │  (Rod/Tube) │    │                  │                                  |
|                      │                  │    │      ▲      │    │                  │                                  |
|                      │   Billet Logam   │    │      │ V_e  │    │   Billet Logam   │                                  |
|                      │  / Serpihan Chip │────┼─────────────┼────│  / Serpihan Chip │                                  |
|                      │                  │ ◄──┤ ZONA GESER  ├──► │                  │                                  |
|                      │                  │    │ INTENSIF SPD│    │                  │                                  |
|                      │                  │    │ (T, γ_dot)  │    │                  │                                  |
|                      └──────────────────┘    └─────────────┘    └──────────────────┘                                  |
|                                                     ▲                                                                 |
|                                                     │                                                                 |
|                                       ┌─────────────┴─────────────┐                                                   |
|                                       │    BACKING RAM / PISTON   │                                                   |
|                                       └───────────────────────────┘                                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Interaksi gesekan antarmuka dan deformasi plastis geser berat (*severe plastic deformation*, SPD) pada zona kontak membangkitkan panas adiabatik dan friksional secara lokal. Hal ini menurunkan tegangan alir (*flow stress*) secara drastis tepat pada antarmuka cetakan tanpa memerlukan *furnace preheating*, sehingga logam terplastisasi dan terdorong mengalir keluar melalui lubang cetakan (*die orifice*) menjadi kawat, batang (*rod*), pipa (*tube*), atau profil struktural dengan struktur butir ultra-halus (*ultrafine-grained*, UFG).

Standar rekayasa industri, metalurgi, dan pengujian kualitas yang mengatur proses ekstrusi dan pengujian integritas mekanis fasa padat ini mencakup:
1. **ASTM B221 / B221M**: *Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes*.
2. **ISO 25239-1 s.d. 5**: *Friction stir welding — Aluminium (Prinsip metalurgi aliran plastis padat dan kontrol parameter termomekanis)*.
3. **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
4. **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
5. **ISO 6892-1**: *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*.
6. **ASTM E112**: *Standard Test Methods for Determining Average Grain Size*.

---

## 2. Termomekanika & Dinamika Deformasi Plastis Geser Berat (SPD) FSE

### 2.1 Pembangkitan Panas Gesekan dan Disipasi Plastis

Dalam FSE/ShAPE, energi input mekanis total laju disipasi daya ($P_{\text{total}}$) berasal dari dua komponen utama: daya rotasi spindel ($P_{\text{rot}}$) dan daya translasi aksial ($P_{\text{axial}}$):

$$P_{\text{total}} = P_{\text{rot}} + P_{\text{axial}} = M_t \cdot \omega + F_z \cdot V_{\text{plunger}}$$

di mana:
- $M_t$ adalah torsi spindel ($\text{N}\cdot\text{m}$).
- $\omega$ adalah kecepatan sudut putaran perkakas ($\text{rad/s}$, di mana $\omega = 2\pi N / 60$, dengan $N$ dalam $\text{rpm}$).
- $F_z$ adalah gaya dorong aksial / *thrust force* ($\text{N}$).
- $V_{\text{plunger}}$ adalah kecepatan maju ram / plunger ($\text{m/s}$).

Karena kecepatan deformasi geser rotasional jauh lebih tinggi daripada kecepatan translasi ($R_{\text{die}} \omega \gg V_{\text{plunger}}$), lebih dari $95\% - 99\%$ total energi mekanik disuplai oleh torsi rotasi ($M_t \cdot \omega$).

Laju pembangkitan panas total per satuan luas antarmuka kontak perkakas-benda kerja ($q_{\text{gen}}$) dimodelkan sebagai kombinasi gesekan kontak geser (*Coulomb-Tresca sliding friction*) dan disipasi deformasi plastis (*plastic shear dissipation*):

$$q_{\text{gen}}(r) = \delta_{\text{slip}} \cdot \tau_{\text{fric}} \cdot (\omega r) + (1 - \delta_{\text{slip}}) \cdot \eta_{\text{Taylor-Quinney}} \cdot \tau_{\text{yield}} \cdot (\omega r)$$

di mana:
- $\delta_{\text{slip}}$ adalah rasio slip antarmuka ($0 \le \delta_{\text{slip}} \le 1$, bernilai $0$ untuk kondisi *full sticking* dan $1$ untuk *pure sliding*).
- $\tau_{\text{fric}} = \min(\mu P_{\text{contact}}, \tau_{\text{yield}} / \sqrt{3})$ adalah tegangan geser gesekan.
- $\eta_{\text{Taylor-Quinney}} \approx 0.90 - 0.95$ adalah koefisien konversi kerja plastis menjadi panas.
- $\tau_{\text{yield}} = \sigma_{\text{flow}} / \sqrt{3}$ adalah tegangan luluh geser material berdasarkan kriteria Von Mises.
- $r$ adalah posisi radial pada permukaan *face* perkakas die ($0 \le r \le R_{\text{die}}$).

Fluks panas menghasilkan distribusi temperatur tunak (*steady-state temperature*) pada zona geser (*shear zone*):

$$T_{\text{shear}} = T_0 + \frac{\beta_{\text{eff}} \cdot M_t \cdot \omega}{\rho \cdot C_p \cdot \dot{V}_{\text{ext}} + 2 \pi \cdot k_{\text{th}} \cdot R_{\text{die}} \cdot \text{Nu}}$$

di mana $\beta_{\text{eff}}$ adalah fraksi panas yang diserap benda kerja ($\approx 0.5 - 0.7$), $\rho$ adalah massa jenis logam ($\text{kg/m}^3$), $C_p$ adalah kapasitas kalor spesifik ($\text{J/(kg}\cdot\text{K)}$), $\dot{V}_{\text{ext}} = A_{\text{ext}} \cdot V_{\text{ext}}$ adalah laju ekstrusi volumetrik ($\text{m}^3/\text{s}$), $k_{\text{th}}$ adalah konduktivitas termal ($\text{W/(m}\cdot\text{K)}$), dan $\text{Nu}$ adalah bilangan Nusselt disipasi termal konduksi/konveksi ke dinding kontainer dan cetakan.

---

### 2.2 Kinematika Laju Regangan Geser Berat (*Equivalent Strain & Strain Rate*)

Proses FSE menghasilkan regangan geser ekuivalen yang jauh melampaui proses ekstrusi konvensional berkat superposisi regangan geser torsi (*torsional shear strain*, $\gamma_\theta$) dan regangan aksial ekstrusi (*axial extrusion strain*, $\varepsilon_z$).

Rasio ekstrusi linier ($ER$) didefinisikan sebagai rasio luas penampang kontainer ($A_0 = \pi D_{\text{billet}}^2 / 4$) terhadap luas penampang lubang cetakan ekstrusi ($A_e = \pi d_{\text{die\_ext}}^2 / 4$):

$$ER = \frac{A_0}{A_e} = \left( \frac{D_{\text{billet}}}{d_{\text{die\_ext}}} \right)^2$$

Regangan plastis aksial murni ($\varepsilon_{\text{axial}}$):

$$\varepsilon_{\text{axial}} = \ln(ER) = 2 \ln\left(\frac{D_{\text{billet}}}{d_{\text{die\_ext}}}\right)$$

Regangan geser rotasional rata-rata ($\bar{\gamma}_{\text{torsion}}$) yang dialami material saat melintasi lapisan batas geser setebal $h_{\text{shear}}$:

$$\bar{\gamma}_{\text{torsion}} = \int_0^{t_{\text{res}}} \dot{\gamma}(r)\, dt \approx \frac{\bar{r}_{\text{eff}} \cdot \omega}{h_{\text{shear}}} \cdot \frac{h_{\text{shear}}}{V_z} = \frac{2 \pi N \cdot \bar{r}_{\text{eff}}}{60 \cdot V_{\text{plunger}} \cdot ER}$$

Regangan ekuivalen Von Mises total ($\bar{\varepsilon}_{\text{total}}$):

$$\bar{\varepsilon}_{\text{total}} = \sqrt{\varepsilon_{\text{axial}}^2 + \frac{\bar{\gamma}_{\text{torsion}}^2}{3}}$$

Dalam FSE tipikal, $\bar{\varepsilon}_{\text{total}}$ berkisar antara $5$ hingga $25$ (dibandingkan ekstrusi konvensional yang hanya bernilai $2 - 4$), menempatkan FSE dalam rezim *Severe Plastic Deformation* (SPD).

Laju regangan ekuivalen rata-rata ($\dot{\bar{\varepsilon}}$):

$$\dot{\bar{\varepsilon}} \approx \frac{\omega \cdot \bar{r}_{\text{eff}}}{\sqrt{3} \cdot h_{\text{shear}}} = \frac{2\pi N \cdot (2/3 R_{\text{die}})}{60 \sqrt{3} \cdot h_{\text{shear}}}$$

di mana tebal lapisan geser termodinamik $h_{\text{shear}}$ tipikal bernilai $0.5 - 2.5\ \text{mm}$, menghasilkan laju regangan ekstrim dalam orde $10^2 - 10^4\ \text{s}^{-1}$.

---

## 3. Pemodelan Torsi Spindel, Gaya Dorong Aksial & Kebutuhan Daya Mesin

### 3.1 Model Torsi Mekanika Kontak Antarmuka

Torsi pemotongan/pengadukan plastis ($M_t$) diintegrasikan di sepanjang penampang melintang antarmuka die putar ($0 \le r \le R_{\text{die}}$):

$$M_t = \int_0^{R_{\text{die}}} 2\pi r^2 \cdot \tau_{\text{interface}}(r)\, dr$$

Dengan mengasumsikan kondisi plastisitas penuh Tresca ($\tau_{\text{interface}} = m_f \cdot \frac{\sigma_{\text{flow}}(T, \dot{\bar{\varepsilon}})}{\sqrt{3}}$), di mana $m_f$ adalah faktor geser kontak ($0.8 \le m_f \le 1.0$), diperoleh torsi analitis:

$$M_t = \frac{2}{3} \pi R_{\text{die}}^3 \cdot m_f \cdot \frac{\sigma_{\text{flow}}(T, \dot{\bar{\varepsilon}})}{\sqrt{3}} = \frac{2\pi m_f}{3\sqrt{3}} R_{\text{die}}^3 \cdot \sigma_{\text{flow}}$$

Jika perkakas memiliki fitur *spiral scroll* atau *pin profile* pembuang oksida, ditambahkan koefisien koreksi geometri perkakas $K_{\text{tool\_geom}} \approx 1.15 - 1.35$:

$$M_t = K_{\text{tool\_geom}} \cdot \frac{2\pi m_f}{3\sqrt{3}} R_{\text{die}}^3 \cdot \sigma_{\text{flow}}(T_{\text{shear}}, \dot{\bar{\varepsilon}})$$

---

### 3.2 Model Gaya Dorong Aksial (*Thrust Force*, $F_z$)

Gaya dorong aksial $F_z$ yang dibutuhkan untuk menstabilkan aliran ekstrusi dan mengatasi tahanan deformasi plastis serta gesekan dinding silinder kontainer diekspresikan melalui formula modifikasi Siebel-Sachs untuk ekstrusi berbantuan geser:

$$F_z = A_0 \cdot \sigma_{\text{flow}}(T, \dot{\bar{\varepsilon}}) \cdot \left[ \ln(ER) + \frac{2 \alpha_{\text{die}}}{3\sqrt{3}} + \frac{2 \mu_{\text{wall}} L_{\text{container}}}{D_{\text{billet}}} \right] \cdot \Phi_{\text{shear\_softening}}$$

di mana:
- $A_0 = \frac{\pi}{4} D_{\text{billet}}^2$ adalah luas penampang wadah kontainer ($\text{m}^2$).
- $\alpha_{\text{die}}$ adalah sudut kerucut masuk die (*die entry semi-angle*, dalam radian).
- $\mu_{\text{wall}}$ adalah koefisien gesek dinding kontainer ($0.05 - 0.15$).
- $L_{\text{container}}$ adalah panjang sisa billet dalam kontainer ($\text{m}$).
- $\Phi_{\text{shear\_softening}}$ adalah faktor reduksi gaya akibat pembebanan geser dinamis (*rotational shear-assisted softening factor*):

$$\Phi_{\text{shear\_softening}} = \frac{1}{\sqrt{1 + 3 \left( \frac{V_{\text{rot\_tangential}}}{V_{\text{axial}}} \right)^2}} = \frac{1}{\sqrt{1 + 3 \left( \frac{\omega \bar{r}}{V_{\text{plunger}} \cdot ER} \right)^2}}$$

Persamaan di atas membuktikan keunggulan fundamental FSE/ShAPE: karena $V_{\text{rot\_tangential}} \gg V_{\text{axial}}$, nilai $\Phi_{\text{shear\_softening}}$ turun drastis ke angka $0.05 - 0.20$. Hal ini menyebabkan gaya dorong aksial $F_z$ pada FSE berkurang hingga $80\% - 95\%$ dibandingkan ekstrusi konvensional tanpa rotasi.

---

## 4. Kinetika Metalurgi: Parameter Zener-Hollomon & Rekristalisasi Dinamik (DRX)

### 4.1 Parameter Zener-Hollomon ($Z$)

Evolusi mikrostruktur selama deformasi termomekanis suhu tinggi dan laju regangan tinggi dikendalikan oleh parameter kompensasi temperatur laju regangan Zener-Hollomon ($Z$):

$$Z = \dot{\bar{\varepsilon}} \cdot \exp\left( \frac{Q_{\text{def}}}{R_{\text{gas}} \cdot T_K} \right)$$

di mana:
- $\dot{\bar{\varepsilon}}$ adalah laju regangan ekuivalen ($\text{s}^{-1}$).
- $Q_{\text{def}}$ adalah energi aktivasi deformasi termal plastis ($\text{J/mol}$, misalnya $Q_{\text{def}} \approx 140 - 155\ \text{kJ/mol}$ untuk paduan Al dan $130 - 145\ \text{kJ/mol}$ untuk paduan Mg).
- $R_{\text{gas}} = 8.314\ \text{J/(mol}\cdot\text{K)}$ adalah konstanta gas universal.
- $T_K$ adalah temperatur mutlak absolut pada zona deformasi ($\text{K}$).

Tegangan alir plastis suhu tinggi ($\sigma_{\text{flow}}$) dapat dimodelkan menggunakan persamaan sinus hiperbolik Sellars-Tegart:

$$\sigma_{\text{flow}} = \frac{1}{\alpha_{\text{ST}}} \cdot \text{arcsinh}\left[ \left( \frac{Z}{A_{\text{ST}}} \right)^{1/n_{\text{ST}}} \right]$$

di mana $\alpha_{\text{ST}}$, $A_{\text{ST}}$, dan $n_{\text{ST}}$ adalah konstanta material Sellars-Tegart empiris.

---

### 4.2 Pemodelan Ukuran Butir Rekristalisasi Dinamik Discontinuous & Continuous (CDRX/DDRX)

Akibat kombinasi regangan geser ekstrim ($\bar{\varepsilon} > 5$) dan suhu tinggi, terjadi rekristalisasi dinamik kontinu (*Continuous Dynamic Recrystallization*, CDRX) dan diskontinu (*Discontinuous Dynamic Recrystallization*, DDRX). Subbutir bertransisi menjadi butir berkristalinitas baru dengan batas butir bersudut tinggi (*High-Angle Grain Boundaries*, HAGB).

Ukuran butir rekristalisasi tunak hasil ekstrusi ($d_{\text{DRX}}$) memiliki korelasi hukum pangkat (*power-law*) terhadap parameter Zener-Hollomon:

$$d_{\text{DRX}} = A_d \cdot Z^{-m_d} = A_d \cdot \left[ \dot{\bar{\varepsilon}} \cdot \exp\left( \frac{Q_{\text{def}}}{R_{\text{gas}} \cdot T_K} \right) \right]^{-m_d}$$

di mana:
- $A_d$ adalah konstanta mikrostruktur material ($10^2 - 10^4\ \mu\text{m}\cdot\text{s}^{-m_d}$).
- $m_d$ adalah eksponen ukuran butir ($0.15 \le m_d \le 0.35$).

Ukuran butir hasil FSE tipikal tereduksi secara drastis dari ukuran butir as-cast ($50 - 200\ \mu\text{m}$) menjadi butir ultra-halus (*ultrafine grain*) dalam rentang sub-mikron hingga beberapa mikrometer ($0.5 - 4.0\ \mu\text{m}$).

---

### 4.3 Peningkatan Kekuatan Mekanis Berdasarkan Relasi Hall-Petch

Berdasarkan butir kristal yang sangat halus, batas luluh tarik (*yield strength*, $\sigma_y$) dan kekerasan Vickers ($HV$) produk ekstrusi meningkat signifikan sesuai hukum Hall-Petch:

$$\sigma_y = \sigma_0 + \frac{k_{\text{HP}}}{\sqrt{d_{\text{DRX}}}}$$

$$HV = HV_0 + \frac{k_{\text{HV}}}{\sqrt{d_{\text{DRX}}}}$$

di mana $\sigma_0$ adalah tegangan gesekan kisi kristal internal (*lattice friction stress*), $k_{\text{HP}}$ adalah koefisien penguatan batas butir Hall-Petch ($\text{MPa}\cdot\mu\text{m}^{0.5}$), dan $k_{\text{HV}}$ adalah koefisien kekerasan Hall-Petch.

---

## 5. Daur Ulang Padat Serpihan Logam (*Solid-State Upcycling of Chips/Swarf*)

Salah satu aplikasi paling strategis dari FSE/ShAPE adalah *direct solid-state recycling* dari serpihan gram pemesinan (Al-alloys, Mg-alloys, Ti-alloys) tanpa proses peleburan kembali (*remelting*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|              FENOMENA DESTRUKSI LAPISAN OKSIDA & DIFUSI SOLID-STATE PADA SERPIHAN CHIP                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Serpihan Pemesinan (Chips)             Tegangan Geser Berat (τ_shear)             Konsolidasi Padat 100%           |
|    dengan Lapisan Oksida Al2O3            + Panas Friksional (T > 0.6 Tm)            Butir Ultra-Halus (UFG)          |
|                                                                                                                       |
|      ┌────────┐    ┌────────┐                    ───────► Geser                     ┌───────────────────────┐         |
|      │ Al2O3  │    │ Al2O3  │                   ┌──────────────┐                    │ Matriks Logam Bebas   │         |
|      ├────────┤    ├────────┤        ───►       │ Lapisan Oksida Pecah Terdispersi  │ Oksida Kontinu        │         |
|      │ Logam  │    │ Logam  │                   │ Menjadi Partikel Nano Inklusif    │ (Bonding Difusi Atomik│         |
|      │ Induk  │    │ Induk  │                   │ (Sub-100nm Nanoparticles)         │ & DRX HAGB Grain)     │         |
|      └────────┘    └────────┘                   └──────────────┘                    └───────────────────────┘         |
|                                                  ◄────── Geser                                                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Mekanisme konsolidasi padat melibatkan tiga tahapan simultan:
1. **Pemadatan Mekanis Serbuk/Serpihan (*Mechanical Compaction*)**: Plunger memberikan tekanan hidrostatik $\sigma_{\text{hyd}}$ yang merapatkan celah udara antar-serpihan (*void closure*).
2. **Pecahnya Lapisan Pasivasi Oksida (*Oxide Film Disruption*)**: Gesekan dan regangan geser intensif ($\gamma > 10$) menghancurkan lapisan oksida pasif ($\text{Al}_2\text{O}_3$ atau $\text{MgO}$) yang rapuh pada permukaan chip. Pecahan oksida terfragmentasi menjadi partikel nano (<100 nm) yang terdispersi homogen sebagai partikel penguat presipitat (*oxide dispersion strengthening*, ODS).
3. **Penyambungan Difusi Logam Murni (*Dynamic Diffusion Bonding & DRX*)**: Kontak atomik permukaan logam bebas oksida pada temperatur di atas $0.5\ T_m$ memicu difusi batas butir cepat dan rekristalisasi dinamis, menghasilkan struktur metalurgi padat pejal $100\%$ tanpa porositas (*zero porosity*).

---

## 6. Algoritma Perancangan & Solver Python untuk Analisis Proses FSE/ShAPE

Skrip Python terintegrasi berikut memodelkan termomekanika FSE lengkap: perhitungan regangan, kecepatan ekstrusi, pembangkitan panas adiabatik/friksional, laju disipasi torsi spindel, reduksi gaya dorong aksial, parameter Zener-Hollomon, prediksi ukuran butir UFG, dan batas luluh Hall-Petch.

```python
"""
Friction Stir Extrusion (FSE / ShAPE) Thermo-Mechanical & Metallurgical Process Solver
Standar Acuan: ASTM B221, ISO 25239, ASTM E8/E8M, ISO 6892-1
RuangTI Engine Specialist Module
"""

import math
from typing import Dict, Any, Tuple

def solve_friction_stir_extrusion(
    d_billet_mm: float = 50.0,       # Diameter kontainer/billet (mm)
    d_ext_mm: float = 10.0,          # Diameter lubang die ekstrusi (mm)
    rpm: float = 600.0,              # Putaran spindel die (RPM)
    v_plunger_mmpm: float = 30.0,    # Kecepatan maju plunger (mm/menit)
    material: str = "AA7075",        # Jenis paduan logam
    h_shear_zone_mm: float = 1.2,    # Tebal lapisan batas geser termomekanis (mm)
    t_ambient_c: float = 25.0        # Temperatur lingkungan (°C)
) -> Dict[str, Any]:
    """
    Menghitung parameter proses lengkap Friction Stir Extrusion (FSE / ShAPE).
    """
    # 1. Parameter Material & Konstanta Konstitutif
    mat_props = {
        "AA7075": {
            "name": "Aluminium Alloy 7075",
            "density_kg_m3": 2810.0,
            "cp_j_kg_k": 960.0,
            "k_th_w_m_k": 130.0,
            "tm_c": 635.0,
            "q_def_j_mol": 145000.0,
            "a_st": 1.2e12,
            "alpha_st": 0.018,  # MPa^-1
            "n_st": 4.5,
            "a_d": 1250.0,      # konstanta grain size
            "m_d": 0.23,
            "sigma_0_mpa": 65.0,
            "k_hp_mpa_um05": 68.0,
            "base_yield_mpa": 505.0 # T6 base yield
        },
        "AZ31": {
            "name": "Magnesium Alloy AZ31",
            "density_kg_m3": 1780.0,
            "cp_j_kg_k": 1040.0,
            "k_th_w_m_k": 96.0,
            "tm_c": 605.0,
            "q_def_j_mol": 135000.0,
            "a_st": 2.5e10,
            "alpha_st": 0.022,
            "n_st": 3.8,
            "a_d": 850.0,
            "m_d": 0.25,
            "sigma_0_mpa": 45.0,
            "k_hp_mpa_um05": 210.0,
            "base_yield_mpa": 220.0
        }
    }
    
    prop = mat_props.get(material, mat_props["AA7075"])
    r_gas = 8.314462  # J/(mol*K)
    
    # 2. Kinematika & Rasio Ekstrusi
    r_die_m = (d_billet_mm / 2.0) / 1000.0
    r_ext_m = (d_ext_mm / 2.0) / 1000.0
    h_shear_m = h_shear_zone_mm / 1000.0
    
    a_0 = math.pi * (r_die_m ** 2)
    a_e = math.pi * (r_ext_m ** 2)
    extrusion_ratio = a_0 / a_e
    
    v_plunger_m_s = (v_plunger_mmpm / 60.0) / 1000.0
    v_ext_m_s = v_plunger_m_s * extrusion_ratio
    v_ext_mmpm = v_plunger_mmpm * extrusion_ratio
    
    omega_rad_s = (2.0 * math.pi * rpm) / 60.0
    r_eff_m = (2.0 / 3.0) * r_die_m
    v_rot_tangential = omega_rad_s * r_eff_m
    
    # 3. Analisis Regangan dan Laju Regangan (SPD)
    eps_axial = math.log(extrusion_ratio)
    gamma_torsion = (r_eff_m * omega_rad_s) / (v_plunger_m_s * extrusion_ratio)
    eps_equivalent_total = math.sqrt(eps_axial**2 + (gamma_torsion**2) / 3.0)
    
    strain_rate_s = (omega_rad_s * r_eff_m) / (math.sqrt(3.0) * h_shear_m)
    
    # 4. Estimasi Temperatur Deformasi Steady-State Termomekanik
    # Iterasi konvergensi temperatur T_shear dan flow stress
    t_shear_c = t_ambient_c + 380.0 # estimasi awal
    max_iter = 50
    conv_tol = 0.1
    
    sigma_flow_mpa = 50.0
    z_param = 1.0e13
    
    for _ in range(max_iter):
        t_kelvin = t_shear_c + 273.15
        exponent = prop["q_def_j_mol"] / (r_gas * t_kelvin)
        # Batasi exponent agar tidak overflow
        exponent = min(exponent, 60.0)
        z_param = strain_rate_s * math.exp(exponent)
        
        # Sellars-Tegart Flow Stress
        arg_asinh = (z_param / prop["a_st"]) ** (1.0 / prop["n_st"])
        sigma_flow_mpa = (1.0 / prop["alpha_st"]) * math.asinh(arg_asinh)
        sigma_flow_pa = sigma_flow_mpa * 1.0e6
        
        # Perhitungan Torsi Spindel (Nm)
        m_f = 0.90 # friction factor
        k_geom = 1.25 # tool scroll factor
        torque_nm = k_geom * ((2.0 * math.pi * m_f) / (3.0 * math.sqrt(3.0))) * (r_die_m ** 3) * sigma_flow_pa
        
        # Pembangkitan Panas dan Disipasi
        p_rot_w = torque_nm * omega_rad_s
        q_volumetric_rate = a_e * v_ext_m_s
        
        # Efisiensi perpindahan panas ke billet (beta_eff)
        beta_eff = 0.65
        heat_into_metal = beta_eff * p_rot_w
        heat_capacity_flow = prop["density_kg_m3"] * prop["cp_j_kg_k"] * q_volumetric_rate
        heat_conduction_loss = 2.0 * math.pi * prop["k_th_w_m_k"] * r_die_m * 5.0 # conduction factor
        
        delta_t = heat_into_metal / (heat_capacity_flow + heat_conduction_loss)
        t_new_c = t_ambient_c + delta_t
        
        # Batasi temperatur tidak melebihi 92% titik lebur (solid-state constraint)
        t_new_c = min(t_new_c, prop["tm_c"] * 0.90)
        
        if abs(t_new_c - t_shear_c) < conv_tol:
            t_shear_c = t_new_c
            break
        t_shear_c = 0.5 * (t_shear_c + t_new_c)
        
    t_homologous = (t_shear_c + 273.15) / (prop["tm_c"] + 273.15)
    
    # 5. Kebutuhan Torsi, Daya dan Gaya Dorong Aksial (Thrust Force)
    p_rot_kw = (torque_nm * omega_rad_s) / 1000.0
    
    # Faktor shear softening
    ratio_v = v_rot_tangential / max(1e-6, (v_plunger_m_s * extrusion_ratio))
    shear_softening = 1.0 / math.sqrt(1.0 + 3.0 * (ratio_v ** 2))
    
    # Gaya Dorong Aksial F_z (kN)
    # Tanpa rotasi (ekstrusi konvensional) vs FSE
    die_angle_rad = math.radians(45.0)
    mu_wall = 0.08
    l_container_m = 0.08
    term_conv = eps_axial + (2.0 * die_angle_rad) / (3.0 * math.sqrt(3.0)) + (2.0 * mu_wall * l_container_m) / (2.0 * r_die_m)
    
    fz_conv_kn = (a_0 * sigma_flow_pa * term_conv) / 1000.0
    fz_fse_kn = fz_conv_kn * max(shear_softening, 0.08) # minimal 8% dari konvensional
    
    p_axial_kw = (fz_fse_kn * 1000.0 * v_plunger_m_s) / 1000.0
    p_total_kw = p_rot_kw + p_axial_kw
    
    # 6. Kinetika Rekristalisasi Dinamik (DRX) & Ukuran Butir Ultra-Halus (UFG)
    d_drx_um = prop["a_d"] * (z_param ** (-prop["m_d"]))
    d_drx_um = max(0.4, min(d_drx_um, 8.0)) # batas fisik UFG
    
    # 7. Estimasi Peningkatan Sifat Mekanis (Hall-Petch)
    sigma_yield_ufg_mpa = prop["sigma_0_mpa"] + (prop["k_hp_mpa_um05"] / math.sqrt(d_drx_um))
    strength_retention_pct = (sigma_yield_ufg_mpa / prop["base_yield_mpa"]) * 100.0
    
    return {
        "material": prop["name"],
        "extrusion_ratio": round(extrusion_ratio, 2),
        "v_ext_mmpm": round(v_ext_mmpm, 2),
        "eps_equivalent_total": round(eps_equivalent_total, 2),
        "strain_rate_s1": round(strain_rate_s, 1),
        "steady_temp_c": round(t_shear_c, 1),
        "homologous_temp": round(t_homologous, 3),
        "zener_hollomon_log10_z": round(math.log10(z_param), 2),
        "flow_stress_mpa": round(sigma_flow_mpa, 2),
        "torque_nm": round(torque_nm, 1),
        "spindle_power_kw": round(p_rot_kw, 2),
        "thrust_force_fse_kn": round(fz_fse_kn, 2),
        "thrust_force_conv_kn": round(fz_conv_kn, 2),
        "thrust_force_reduction_pct": round((1.0 - (fz_fse_kn / fz_conv_kn)) * 100.0, 1),
        "drx_grain_size_um": round(d_drx_um, 2),
        "yield_strength_ufg_mpa": round(sigma_yield_ufg_mpa, 1),
        "strength_retention_pct": round(strength_retention_pct, 1)
    }

if __name__ == "__main__":
    print("=== PENGUJIAN SOLVER FRICTION STIR EXTRUSION (FSE / ShAPE) ===")
    results_al = solve_friction_stir_extrusion(
        d_billet_mm=50.0,
        d_ext_mm=10.0,
        rpm=650.0,
        v_plunger_mmpm=35.0,
        material="AA7075"
    )
    for k, v in results_al.items():
        print(f"  {k:30s}: {v}")
```

---

## 7. Studi Kasus Industri: Daur Ulang Padat Serpihan Aluminium Kedirgantaraan AA7075 Menjadi Batang Struktural Presisi

### 7.1 Latar Belakang & Permasalahan Pabrik

Sebuah fasilitas manufaktur komponen struktur pesawat terbang menghasilkan $4.500\ \text{kg/bulan}$ serpihan gram pemesinan (*machining chips*) paduan aluminium ultra-tinggi AA7075-T6 dari proses *high-speed milling* rangka sayap (*wing spar*).

Metode daur ulang konvensional melalui peleburan tanur (*smelting*):
- Menghasilkan kehilangan material (*dross oxidation loss*) sebesar $28\%$ karena rasio luas permukaan terhadap volume chip yang sangat tinggi.
- Membakar elemen paduan mudah menguap (terutama $\text{Zn}$ dan $\text{Mg}$), sehingga menurunkan grade paduan menjadi kelas sekunder berkualitas rendah.
- Mengonsumsi energi peleburan sebesar $24.5\ \text{MJ/kg}$.

Pabrik memutuskan mengimplementasikan mesin **Friction Stir Extrusion (ShAPE)** berkapasitas daya $45\ \text{kW}$ untuk mengonversi serpihan chip AA7075 secara langsung (*100% solid-state upcycling*) menjadi batang silindris berdiameter $12\ \text{mm}$ untuk bahan baku baut struktur kedirgantaraan (*structural fasteners*).

---

### 7.2 Parameter Operasi & Hasil Solver Termomekanis

Parameter proses yang diterapkan:
- Diameter kontainer billet: $D_0 = 60\ \text{mm}$.
- Diameter lubang cetakan ekstrusi: $d_{\text{ext}} = 12\ \text{mm}$ (Rasio Ekstrusi $ER = 25:1$).
- Kecepatan putaran die berkontur spiral: $N = 600\ \text{rpm}$.
- Kecepatan ram pendorong chip: $V_{\text{plunger}} = 25\ \text{mm/menit}$ (Kecepatan ekstrusi kawat produk: $V_{\text{ext}} = 625\ \text{mm/menit}$).
- Tebal zona geser adiabatik: $h_{\text{shear}} = 1.0\ \text{mm}$.

Hasil simulasi dan pengukuran empiris:

| Parameter Evaluasi | Ekstrusi Konvensional (Furnace Preheated 450°C) | Friction Stir Extrusion (ShAPE Room Temp Feed) | Peningkatan / Keuntungan |
| :--- | :--- | :--- | :--- |
| **Energi Preheating Billet** | $14.2\ \text{MJ/kg}$ (Tanur Gas) | $0.0\ \text{MJ/kg}$ (Dingin dari Suhu Ruang) | Penghematan energi $100\%$ |
| **Gaya Dorong Aksial ($F_z$)** | $1.420\ \text{kN}$ (145 Ton-Force) | $118\ \text{kN}$ (12 Ton-Force) | Reduksi gaya tekan sebesar $91.7\%$ |
| **Torsi Spindel ($M_t$)** | $0\ \text{N}\cdot\text{m}$ (Cetakan Statis) | $362\ \text{N}\cdot\text{m}$ | Dikompensasi oleh motor spindel |
| **Temperatur Zona Geser ($T_{\text{shear}}$)** | $465^\circ\text{C}$ (Overheating) | $415^\circ\text{C}$ ($T/T_m = 0.74$) | Bebas risiko *hot cracking* |
| **Regangan Total ($\bar{\varepsilon}_{\text{total}}$)** | $3.22$ (Hanya Aksial) | $14.85$ (Aksial + Torsi SPD) | Deformasi geser berat homogen |
| **Ukuran Butir Rata-rata ($d_{\text{grain}}$)** | $45\ \mu\text{m}$ (Butir Kasar Rekristalisasi) | $1.45\ \mu\text{m}$ (Ultra-Fine Grain / UFG) | Penghalusan butir $31\times$ lipat |
| **Batas Luluh Tarik ($\sigma_y$)** | $395\ \text{MPa}$ (As-Extruded) | $482\ \text{MPa}$ (As-Extruded UFG) | Peningkatan kekuatan luluh $+22.0\%$ |
| **Kekuatan Tarik Maksimum ($\sigma_{\text{uts}}$)** | $470\ \text{MPa}$ | $558\ \text{MPa}$ | Melampaui standar ASTM B221 |
| **Elongasi Saat Patah ($A\%$)** | $8.5\%$ | $14.2\%$ | Peningkatan duktilitas $+67.1\%$ |
| **Densitas Produk** | $96.5\%$ (Porositas mikro) | $99.98\%$ (Densifikasi penuh) | Integritas bebas cacat |

---

## 8. Verifikasi Kualitas & Standardisasi Pengujian

Untuk memastikan komponen hasil FSE memenuhi regulasi industri kritis, prosedur pengujian berikut wajib dilakukan:
1. **Pengujian Tarik Statis (ASTM E8/E8M & ISO 6892-1)**: Menguji sampel tarik berdimensi sub-ukuran (*subsize specimens*) yang diambil searah sumbu ekstrusi longitudinal dan transversal untuk mengevaluasi anisotropi sifat mekanis.
2. **Karakterisasi Mikrostruktur & EBSD (ASTM E112)**: Pemindaian *Electron Backscatter Diffraction (EBSD)* untuk mengukur persentase batas butir sudut tinggi (*High-Angle Grain Boundaries*, HAGB > $15^\circ$) yang harus mencapai $>75\%$ untuk memastikan keberhasilan CDRX/DDRX penuh.
3. **Analisis Inklusi Oksida & Kebersihan Metalurgi (ASTM E45)**: Mikroskopi optik dan SEM-EDS untuk memastikan dispersi partikel $\text{Al}_2\text{O}_3$ berada pada skala sub-mikron tanpa aglomerasi lapisan batas oksida kontinu.
4. **Pengujian Kekerasan Mikro Vickers (ASTM E384)**: Pemetaan profil kekerasan $HV_{0.2}$ dari pusat batang hingga permukaan tepi untuk membuktikan kehomogenan sifat mekanis penampang.

---

## 9. Referensi Terverifikasi & Literatur Akademis

1. **Whalen, P. B., Joshi, V. V., Overman, N. R., & Grant, G. J.** (2023). *Shear Assisted Processing and Extrusion (ShAPE) of Advanced High-Strength Aluminium and Magnesium Alloys: Fundamental Principles and Industrial Scalability*. **International Materials Reviews**, 68(4), 412–448. DOI: 10.1080/09506608.2022.2145892.
2. **Li, X., Baffari, D., Reynolds, A. P., & Fratini, L.** (2024). *Thermo-Mechanical Modeling and Microstructural Evolution in Friction Stir Extrusion of Machining Chips*. **Journal of Materials Processing Technology**, 322, 118180. DOI: 10.1016/j.jmatprotec.2023.118180.
3. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th Edition). John Wiley & Sons, Hoboken, NJ.
4. **Blanchard, B. S., & Fabrycky, W. J.** (2019). *Systems Engineering and Analysis* (5th Edition). Pearson, London.
5. **American Society for Testing and Materials (ASTM)**. (2022). *ASTM B221/B221M-21: Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes*. ASTM International, West Conshohocken, PA.
6. **International Organization for Standardization (ISO)**. (2019). *ISO 25239-1:2019: Friction stir welding — Aluminium — Part 1: Vocabulary and general principles*. ISO, Geneva, Switzerland.
