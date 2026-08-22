# Modul 686: High-Pressure Resin Transfer Molding (HP-RTM) & Liquid Composite Molding: Hukum Darcy Media Porous Anisotropik, Tensor Permeabilitas Preform, Kinetika Curing Kamal-Sourour Autokatalitik, Transportasi Micro-Void Dual-Scale, dan Optimasi Cycle Time Struktur Otomotif Karbon (ASTM D3039, ISO 14125 & CAMX/SAMPE)

## 1. Pengantar & Konteks Industri: Injeksi Resin Bertekanan Tinggi untuk Takt Time Otomotif

**High-Pressure Resin Transfer Molding (HP-RTM)** adalah proses *liquid composite molding* (LCM) di mana resin termoetik viskositas-rendah diinjeksikan ke cavity tertutup yang telah diisi preform serat kering (non-crimp fabric, woven, atau preform 3D) pada tekanan injeksi 50-120 bar — sepuluh kali lipat RTM konvensional. Tujuan engineeringnya tegas: memangkas waktu pengisian (*fill time*) dan waktu curing hingga total *cycle time* di bawah 5 menit agar proses komposit karbon layak untuk volume produksi otomotif (panel bodi, battery enclosure EV, bumper beam, T-pillar).

```
+----------------------------------------------------------------------------------------------------------------------+
|                 SEL PROSES HP-RTM UNTUK STRUKTUR OTOMOTIF SERAT KARBON                                                  |
+----------------------------------------------------------------------------------------------------------------------|
|                                                                                                                      |
|   Preform Carbon NCF        Mold Press Sistem          Unit Injeksi Multi-Komponen                                    |
|   (2-8 lapis, Vf 45-55%)    (2000-4000 ton)            Epoksi + Hardener + Internal Release                           |
|         │                        │                        │  Metering Piston 100-120 bar                                |
|         ▼                        ▼                        ▼  Temperature 90-140 C                                       |
|   Preforming Robot ──────► Cavity Tertutup ◄──────── Static Mixer Self-Cleaning                                          |
|   Net-shape stack         Gap = 2.0-3.0 mm                │                                                             |
|                                  │                        ▼                                                             |
|                          GATE (pusat/edge) ──► IMPREGNASI DARCY <── VENT (tepi/runner vakum)                             |
|                                  │                                                                                      |
|                                  ▼                                                                                      |
|                    FRONT ALIRAN RESIN: quasi-static, dikendalikan tensor permeabilitas [K]                               |
|                    Zona jenuh (p>P_atm) | Front | Zona kering (vakum residual 50-200 mbar)                                |
|                                  ▼                                                                                      |
|                    IN-MOLD CURE: gel -> gelling 5% -> demold >=95% konversi                                              |
|                    Exotherm peak dikendalikan < T_degradasi matrix                                                       |
|                                  ▼                                                                                      |
|                    Demold robotik -> Post-cure oven -> Trim waterjet -> Inspeksi (void content, ASTM D3039/ISO 14125)      |
+----------------------------------------------------------------------------------------------------------------------+
```

Perbedaan fundamental HP-RTM dari RTM konvensional ada pada dua variabel proses: **tekanan injeksi** (mempercepat front secara linier) dan **suhu mold/resin tinggi** (mempercepat curing namun menaikkan risiko gel-time prematur sebelum cavity terisi penuh — *premature gelation*, defect mode paling mahal dalam produksi). Rekayasa proses HP-RTM dengan demikian adalah optimasi simultan hidrodinamika aliran media porous dan kinetika reaksi polimerisasi.

Standar acuan utama modul ini meliputi:
1. **ASTM D3039/D3039M**: *Tensile Properties of Polymer Matrix Composite Materials* — kontrol mutu mekanik panel hasil molding.
2. **ISO 14125**: *Fibre-reinforced plastic composites — Determination of flexural properties*.
3. **ASTM D7136/D7136M**: *Measuring the Damage Resistance of a Fiber-Reinforced Polymer Matrix Composite to a Drop-Weight Impact Event* — kritikal untuk bagian underbody.
4. **ASTM D2584 / ASTM D3171**: verifikasi fraksi volume serat dan void content laminat hasil molding.

---

## 2. Pemodelan Matematis Formal: Hidrodinamika Darcy dan Kinetika Polimerisasi

### 2.1 Hukum Darcy untuk Aliran Resin pada Media Porous Anisotropik

Preform serat dimodelkan sebagai media porous kontinu; kecepatan superficial (Darcy flux) resin Newtonian-viskositas $\mu$:

$$\vec{u} = -\frac{[K]}{\mu}\nabla p$$

Di mana $[K]$ adalah tensor permeabilitas simetrik positif-definit ($\text{m}^2$). Untuk fabric bidang, $[K]$ diasumsikan diagonal pada sistem koordinat material:

$$[K] = \begin{bmatrix} K_{xx} & 0 \\ 0 & K_{yy} \end{bmatrix}, \qquad K_{xx} \neq K_{yy} \;\text{(anisotropi warp-weft)}$$

Estimasi first-order permeabilitas bed arah serat menggunakan model Kozeny-Carman dengan fraksi volume serat $V_f$ dan radius serat efektif $r_f$:

$$K_{11} = \frac{r_f^2}{4\,k_{zz}}\,\frac{(1-V_f)^3}{V_f^2}$$

Dengan konstanta Kozeny $k_{zz}\approx 0{,}02$-$0{,}1$ terkalibrasi eksperimental per jenis fabric (nilai dual-scale fabric diperlakukan efektif; lihat Godbole et al., 2025 untuk formulasi semi-analitik permeabilitas efektif dual-scale).

Kontinuitas massa inkompresibel ($\nabla\cdot\vec{u}=0$) menghasilkan persamaan potensial eliptik pada zona jenuh:

$$\nabla\cdot\left([K]\nabla p\right) = \frac{\partial}{\partial x}\!\left(K_{xx}\frac{\partial p}{\partial x}\right) + \frac{\partial}{\partial y}\!\left(K_{yy}\frac{\partial p}{\partial y}\right) = 0$$

Dengan syarat batas Dirichlet $p = P_{inj}$ pada gate, $p = 0$ (atmosferik) pada vent, dan Neumann no-flux pada dinding mold tertutup.

### 2.2 Solusi Analitik Fill Time: Aliran Linier dan Radial

Untuk injeksi konstan-tekanan, dua geometri kanonis memiliki solusi tertutup standar LCM:

**(a) Aliran linier** (line-gate selebar cavity, jarak alir $L$, permeabilitas arah alir $K$):

$$t_{fill}^{lin} = \frac{\mu\,\phi\,L^2}{2\,K\,\Delta P}$$

**(b) Aliran radial titik-gate** (radius aliran $r_f$, radius gate $r_0$):

$$t_{fill}^{rad} = \frac{\mu\,\phi}{4\,K\,\Delta P}\left[2r_f^2\ln\!\left(\frac{r_f}{r_0}\right) - r_f^2 + r_0^2\right]$$

Kedua formula menunjukkan leverages utama perancangan proses: fill time proporsional viskositas $\mu$ dan kuadrat jarak alir, serta berbanding-balik dengan permeabilitas $K$ dan tekanan injeksi $\Delta P$. Konsekuensi desain: penempatan gate/vent meminimalkan jarak alir maksimum; preform dengan zone-designer (layer lokal ber-permeabilitas tinggi, *high-flow media*) mempercepat front di arah sulit.

### 2.3 Aliran Dual-Scale dan Mekanisme Micro-Void Entrapment

Preform nyata berskala-ganda (*dual-scale*): saluran antar-tow (makro, $K$ tinggi) dan ruang intra-tow antar-filamen (mikro, $K$ rendah). Selisih tekanan dinamis menyebabkan front makro mendahului saturasi mikro (*flow leading*), menjebak udara sebagai **micro-void** pada persimpangan tow — defect dominan yang menurunkan kekuatan interlaminar dan fatik (Garrett et al., 2025; Yoon & Ahn, 2025). Strategi mitigasi berbasis model: (1) vakum cavity prior-injection 50-200 mbar; (2) profil tekanan injeksi bertahap (*pressure ramp*) agar front makro-mikro konvergen; (3) vent placement pada zona akumulasi entrapmen hasil simulasi.

### 2.4 Kinetika Curing Kamal-Sourour Autokatalitik

Konversi degree-of-cure $\alpha_c(t)$ resin epoksi dimodelkan Kamal-Sourour autokatalitik dengan laju Arrhenius:

$$\frac{d\alpha_c}{dt} = \left(k_1 + k_2\,\alpha_c^{m}\right)\left(1-\alpha_c\right)^{n}, \qquad k_i = A_i\,\exp\!\left(-\frac{E_i}{R\,T}\right)$$

Di mana $k_1$ laju non-autokatalitik awal, $k_2$ laju autokatalitik (produk reaksi mengkatalisis), dan $m,n$ orde reaksi parsial. Balance energi lumped slab dengan panas reaksi eksotermik $H_R$ dan pendinginan konduktif mold dua muka:

$$\rho\,c_p\,\frac{dT}{dt} = \rho\,H_R\,\frac{d\alpha_c}{dt} - \frac{h_{eff}\,A_{sp}}{1}\,(T - T_{mold})$$

Dengan $A_{sp}$ rasio area-pendinginan terhadap volume (dua muka mold: $A_{sp}=2/\text{gap}$). Titik operasi penting: **gel time** (konversi ~5%, viskositas divergen), **demold strength** (konversi ≥95%), dan **peak exotherm** yang tidak boleh melampaui batas degradasi matrix (~180-200°C epoksi).

---

## 3. Algoritma Solver & Implementasi Python

Solver verifikasi proses (tereksekusi riil; output lengkap di Bagian 4):

```python
import math
import numpy as np

MU_RESIN   = 0.08       # Pa.s @110 C
PHI        = 0.50       # porositas preform
KXX, KYY   = 1.0e-11, 3.0e-12   # m^2
DELTA_P    = 10.0e6     # 100 bar
LX, LY     = 1.2, 0.6   # m

def darcy_1d_transient(n_cells=200):
    """Front-marching 1-D: profil p linier, front maju dL/dt = K*dP/(mu*phi*L).
    Memvalidasi implementasi terhadap t_fill = mu*phi*L^2/(2*K*dP)."""
    dx = LX / n_cells
    dt = dx*dx*MU_RESIN*PHI / (2*KXX*DELTA_P) / 50.0
    L, t = dx, 0.0
    while L < LX - 1e-12:
        u_face = (KXX/MU_RESIN)*(DELTA_P/L)
        L += u_face*dt/PHI
        t += dt
    return t

def fill_time_linear(L, K):
    return MU_RESIN*PHI*L*L/(2*K*DELTA_P)

def fill_time_radial(r_f, r_0=0.006, K=KYY):
    return (MU_RESIN*PHI/(4*K*DELTA_P))*(2*r_f*r_f*math.log(r_f/r_0) - r_f*r_f + r_0*r_0)

def kamal_cure_rk4(T_mold_C=140.0):
    """Kamal-Sourour autocatalytic + Arrhenius + exotherm lumped, integrasi RK4."""
    A1,E1,A2,E2,m_exp,n_exp = 2.1e5,62e3,1.8e5,60e3,0.5,1.4
    HR,rho_cp,h_eff,av = 380e3, 1.65e6, 45.0, 2.0/0.0025
    T_mold,T,alpha,t,dt,Rg = T_mold_C+273.15, 383.15, 0.0, 0.0, 0.02, 8.314
    def f(a_,T_):
        k1,k2 = A1*np.exp(-E1/(Rg*T_)), A2*np.exp(-E2/(Rg*T_))
        da = (k1+k2*a_**m_exp)*(1-a_)**n_exp
        dT = HR/rho_cp*da - h_eff*av/rho_cp*(T_-T_mold)
        return da,dT
    hist=[]
    while t<1200:
        a1_,T1_=f(alpha,T); a2_,T2_=f(alpha+dt/2*a1_,T+dt/2*T1_)
        a3_,T3_=f(alpha+dt/2*a2_,T+dt/2*T2_); a4_,T4_=f(alpha+dt*a3_,T+dt*T3_)
        alpha+=dt/6*(a1_+2*a2_+2*a3_+a4_); T+=dt/6*(T1_+2*T2_+2*T3_+T4_)
        t+=dt; hist.append((t,alpha,T))
    return hist
```

## 4. Hasil Eksekusi Riil & Studi Kasus Industri

### 4.1 Output Eksekusi Solver

Eksekusi penuh script (parameter studi kasus panel struktural 1,2 × 0,6 × 2,5 mm, carbon NCF $V_f\to\phi=0{,}50$, epoksi fast-cure):

```
==============================================================================
HP-RTM SIMULATION: DARCY TRANSIENT VALIDATION + KAMAL-SOUROUR CURE
mu=0.08 Pa.s | phi=0.50 | Kxx=1.0e-11 Kyy=3.0e-12 m2 | dP=10 MPa
==============================================================================
[1D VALIDATION] numerik = 287.99 s | analitik = 288.00 s | deviasi = 0.003%
[CASE A] Line-gate tepi kiri -> vent kanan (L=0.60 m, Kxx): 72.0 s
[CASE B] Point-gate pusat -> vent kanan (r=0.6 m, K_geo): 539.6 s
[CURE @T_mold 140 C] gel(5%): 35.4s | 90%: 613.8s | demold(95%): 879.7s |
                     peak exotherm: 140.0 C @ t=438.9s
[CURE @T_mold 150 C] gel(5%): 31.8s | 90%: 427.8s | demold(95%): 602.9s |
                     peak exotherm: 150.0 C @ t=464.3s
[CYCLE @T_mold 140 C] Takt = fill 540s + demold-cure 880s = 1419 s (23.7 min)
[CYCLE @T_mold 150 C] Takt = fill 540s + demold-cure 603s = 1143 s (19.0 min)
```

Validasi implementasi Darcy transient terhadap solusi analitik menghasilkan deviasi **0,003%** — solver layak dipakai sebagai basis what-if engineering. Perhatikan bahwa skenario point-gate radial (CASE B, 539,6 s) memakan 7,5× waktu line-gate (72,0 s): logaritma radial dan jalur alir diagonal menghukum strategi gating tunggal pusat.

### 4.2 Interpretasi Engineering Studi Kasus

1. **Trade-off suhu mold**: menaikkan $T_{mold}$ dari 140°C ke 150°C memangkas waktu demold 31% (880 s → 603 s) karena sensitivitas Arrhenius kinetika cure, tanpa menaikkan peak exotherm melebihi suhu mold pada konfigurasi slab-tipis ini. Namun pada part tebal (>4 mm), langkah serupa berisiko *thermal runaway* karena panas reaksi terperangkap — wajib disimulasikan per-thickness.

2. **Premature gelation check**: pada $T_{mold}=150°C$, gel time 31,8 s < fill time CASE B (539,6 s) → kombinasi ini **tidak feasible** untuk point-gate; resin harus diinjeksikan dingin (110°C, $\mu$ lebih tinggi tapi reaksi lambat) atau gating didesain line/multi-gate. Ini persis trade-off chemorheology yang diselesaikan industri via injeksi bertekanan sangat tinggi + resin inhibitor-tuned.

3. **Void management**: dengan vakum cavity 100 mbar dan pressure-ramp injeksi, micro-void entrapment dual-scale dapat ditekan; kontrol mutu dilakukan via densimetri gravimetri dan uji tarik/fleksural batch (ASTM D3039, ISO 14125). Literatur produksi terkini (Yoon & Ahn, 2025) mengkuantifikasi faktor kontrol molding untuk reduksi void CFRP HP-RTM; pendekatan gate auxiliary bawah ketidakpastian permeabilitas dibahas Kermani et al. (2026) menggunakan PCA physics-informed.

### 4.3 Integrasi Ke Ruang Kendali Proses

Parameter online yang dimonitor setiap shot: tekanan injeksi (transducer in-gate, sampling 1 kHz), posisi front (sensor dielektrik / RTM-flow sensing), suhu mold multi-zona, dan kurva tekanan-vs-waktu cavity yang menjadi fingerprint SPC: deviasi integral tekanan mengindikasikan variasi permeabilitas preform atau viskositas resin sebelum defect terbentuk — prinsip *model-based process monitoring* yang konsisten dengan kerangka multiscale data-physics untuk HP-RTM (Cui et al., 2023).

---

## 5. Standar, Referensi Terverifikasi, dan Bacaan Lanjutan

**Standar internasional:**
- ASTM D3039/D3039M — Tensile Properties of Polymer Matrix Composite Materials. DOI: 10.1520/D3039_D3039M-17 *(validasi Crossref: ASTM International)*.
- ISO 14125 — Fibre-reinforced plastic composites: Determination of flexural properties. DOI: 10.3403/01422801 *(BSI)*.
- ASTM D7136/D7136M — Damage Resistance to Drop-Weight Impact Event. DOI: 10.1520/D7136_D7136M-20 *(ASTM International)*.
- ASTM D2584 / ASTM D3171 — Ignition Loss & Constituent Content of Composite Materials. DOI: 10.1520/D2584-18; 10.1520/D3171 *(ASTM International)*.

**Literatur ilmiah (DOI terverifikasi via Crossref REST API):**
1. Cui, J., La Spina, A., & Fish, J. (2023). Data-physics driven multiscale approach for high-pressure resin transfer molding (HP-RTM). *Computer Methods in Applied Mechanics and Engineering*. DOI: 10.1016/j.cma.2023.116405.
2. Sarker, S., Qin, X., Yu, B., Ma, H., Yang, Y., & Gao, C. (2024). Tension-tension fatigue properties of multiaxial laminated carbon/epoxy composites molded by high-pressure resin transfer molding (HP-RTM) process. *Composite Structures*. DOI: 10.1016/j.compstruct.2024.117892.
3. Yoon, M., & Ahn, M. (2025). Study on molding control factors to reduce void contents in manufacturing CFRP parts by HP-RTM. *Composites Part B: Engineering*. DOI: 10.1016/j.compositesb.2025.112231.
4. Garrett, T. C., Allen, Q. S., & George, A. R. (2025). In-Situ Void Formation During Liquid Composite Molding for Preformed Warp, Weft, and Alternating Orientation RTM Samples. *Applied Composite Materials*. DOI: 10.1007/s10443-025-10402-9.
5. Hiremath, P., Ambiger, K. D., Jayashree, P. K., Heckadka, S. S., Deepak, G. D., Murthy, B. R. N., Kowshik, S., & Naik, N. (2025). Computational Approach for Optimizing Resin Flow Behavior in Resin Transfer Molding with Variations in Injection Pressure, Fiber Permeability, and Resin Sorption. *Journal of Composites Science*, 9(3), 129. DOI: 10.3390/jcs9030129.
6. Niknafs Kermani, N., Lavaggi, T., Chen, S. W., Simacek, P., & Advani, S. G. (2026). Physics-informed principal component analysis framework for auxiliary gate placement in resin transfer molding under permeability uncertainty. *Composites Part A: Applied Science and Manufacturing*. DOI: 10.1016/j.compositesa.2026.110057.
7. Godbole, M. G., Joshi, M., Advani, S., & Gururaja, S. (2025). Semi-Analytical Formulation of the Effective Permeability of a Dual-Scale Bi-Directional Fabric. *Polymer Composites*. DOI: 10.1002/pc.70544.
