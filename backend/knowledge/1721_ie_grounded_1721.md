# 1721 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan panas proses industri (*industrial process heat*, IPH) menyumbang lebih dari separuh konsumsi energi akhir manufaktur global, dan dekarbonisasi sektor ini merupakan salah satu tantangan rekayasa sistem paling mendesak abad ke-21. Xu & Wang (2024) dalam *The Innovation Energy* menegaskan bahwa pompa kalor—terutama varian suhu-tinggi (*high-temperature heat pump*, HTHP)—menjadi tulang punggung transisi energi termal karena mampu menaikkan *coefficient of performance* (COP) secara signifikan dibanding boiler elektrik resistif. Akan tetapi, operasional HTHP menghadapi masalah *mismatch* temporal antara ketersediaan sumber panas buangan dan kebutuhan beban termal kontinu pabrik, sehingga dibutuhkan buffer termal yang kompak dan efisien secara termodinamika (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Dalam konteks tersebut, *latent heat thermal energy storage* (LHTES) muncul sebagai solusi unggul karena densitas energi termal per satuan volume-nya 3–8 kali lebih besar dibanding *sensible heat storage* (SHS). Paper Toloza et al. (2026) memilih rentang suhu ~222°C karena merupakan jendela operasional HTHP modern berbasis siklus *transcritical CO₂* atau campuran refrigeran HFO/HFC yang dapat mensuplai panas proses grade medium-tinggi (industri kimia, makanan, tekstil, pengeringan). Material *phase change material* (PCM) yang bekerja pada suhu ini umumnya adalah garam nitrat atau eutektik multi-komponen (misalnya campuran NaNO₃–KNO₃ atau ternary dengan Ca(NO₃)₂) yang memiliki entalpi fusi spesifik tinggi ($h_{sf}$ ≈ 100–250 kJ/kg) namun konduktivitas termal intrinsik sangat rendah ($k_{PCM}$ ≈ 0,5–1,5 W/m·K). Keterbatasan $k_{PCM}$ inilah yang memaksa para insinyur melakukan optimasi geometri heat exchanger, enkapsulasi, atau penggunaan *metal wool/foam* sebagai enhancers—sebagaimana ditegaskan oleh Toloza et al. (2026).

Konfigurasi *shell-and-tube* dipilih karena tiga atribut struktural-operasional: (i) kekompakan volumetrik tinggi (*compactness factor* > 200 m²/m³), (ii)robustness struktural mampu menahan tekanan siklus termal, dan (iii) kapasitas *thermal enhancement* melalui finning internal dan inserat logam berpori. Unit LHTES vertikal yang dimodelkan Toloza et al. (2026) dirancang untuk diintegrasikan sebagai *thermal buffer* antara output kondensor HTHP dan beban proses, memungkinkan operasi HTHP pada *part-load* atau *peak-shaving* yang meningkatkan COP tahunan sistem secara substansial. Urgensi industriwi dari pendekatan ini semakin nyata ketika mempertimbangkan biaya energi termal industri yang di banyak negara Eropa mencapai €15–25/MWhth dan terus naik akibat *carbon pricing* ETS.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES *shell-and-tube* memerlukan penyelesaian simultan tiga fenomena: (i) konduksi termal dalam PCM yang mengalami perubahan fasa, (ii) konveksi termal pada *heat transfer fluid* (HTF) di dalam tube, dan (iii) perpindahan panas antarmuka tube-PCM yang resistif. Toloza, Payá & Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengimplementasikan model ini dalam bahasa Modelica—suatu pendekatan *acausal object-oriented* yang memungkinkan penyelesaian coupled ODE-PDE secara efisien melalui diskritisasi 1D radial pada PCM dan 1D aksial pada HTF.

### 2.1 Persamaan Energi pada PCM dengan *Apparent Heat Capacity Method*

Untuk memodelkan pelelehan/pembekuan PCM, digunakan metode kapasitas panas nyata (*apparent heat capacity*):

$$\rho_{PCM} \cdot c_{p,eff}(T) \cdot \frac{\partial T_{PCM}}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(r \cdot k_{PCM} \cdot \frac{\partial T_{PCM}}{\partial r}\right) + \frac{1}{r^2}\frac{\partial}{\partial \theta}\left(k_{PCM} \frac{\partial T_{PCM}}{\partial \theta}\right)$$

dengan kapasitas panas efektif mencakup entalpi fusi dalam rentang transisi fasa:

$$c_{p,eff}(T) = c_{p,s} + \frac{h_{sf}}{\Delta T_{mushy}} + c_{p,l}$$

di mana $\Delta T_{mushy}$ adalah lebar zona *mushy* (umumnya 2–5 K untuk garam nitrat eutektik), $h_{sf}$ adalah entalpi fusi spesifik, dan $c_{p,s}$, $c_{p,l}$ berturut-turut adalah kapasitas panas fasa padat dan cair.

### 2.2 Persamaan Konservasi Energi pada HTF (Aliran dalam Tube)

Untuk fluida yang mengalir di dalam tube (asumsi 1D *plug flow* dengan koreksi Nusselt):

$$\rho_{HTF} \cdot c_{p,HTF} \cdot A_c \cdot \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} \cdot c_{p,HTF} \cdot \frac{\partial T_{HTF}}{\partial z} = h_{HTF} \cdot P \cdot \left(T_{w,i} - T_{HTF}\right)$$

di mana $A_c$ adalah luas penampang aliran, $P$ adalah keliling tube bagian dalam, $T_{w,i}$ suhu dinding dalam tube, dan $h_{HTF}$ koefisien konveksi HTF yang dihitung dari korelasi Sieder-Tate atau Gnielinski:

$$Nu = \frac{(f/8)(Re-1000)Pr}{1 + 12{,}7(f/8)^{0,5}(Pr^{2/3}-1)}$$

### 2.3 Jaringan Resistansi Termal Antarmuka

Resistansi termal total antara HTF dan PCM dapat dituliskan sebagai:

$$R_{tot} = \frac{1}{h_{HTF} \cdot \pi D_i L} + \frac{\ln(D_o/D_i)}{2\pi k_{w} L} + R'_{c,wool} + \frac{\ln(D_{PCM,eq}/D_o)}{2\pi k_{eff} L}$$

di mana $R'_{c,wool}$ adalah resistansi kontak antara dinding tube luar dan *metal wool* enhancer, serta $k_{eff}$ adalah konduktivitas efektif komposit PCM+wool yang dihitung dengan model parallel-series:

$$k_{eff} = k_{PCM} \cdot (1-\phi) + k_{wool} \cdot \phi$$

dengan $\phi$ adalah fraksi volumetrik wool (umumnya 2–8%).

### 2.4 Kondisi Batas dan Initial Conditions

- **Awal** ($t=0$): $T_{PCM}(r,z,0) = T_i$, $T_{HTF}(z,0) = T_{inlet}$
- **Batas radial dalam** ($r=r_i$): $-k_{PCM}\partial T/\partial r = h_{HTF}(T_{w,i}-T_{HTF})$
- **Batas radial luar** ($r=r_{shell}$): $-\partial T/\partial r = 0$ (isolasi adiabatic asumsi)
- **Batas aksial**: $\partial T/\partial z = 0$ pada kedua ujung (simetri)

Penyelesaian dilakukan dengan diskritisasi *finite volume* pada PCM (grid radial 20–50 sel) dan *method of lines* pada HTF, menghasilkan sistem ODE yang diselesaikan oleh integrator DASSL atau CVODE bawaan Modelica (Toloza et al., 2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model Toloza et al. (2026) mengikuti alur rekayasa sistematis sebagai berikut:

**Tahap 1 – Karakterisasi PCM dan HTF.** Parameter termofisik PCM (titik lebur, $h_{sf}$, $k_{PCM}$, $c_p$, densitas) diukur dengan DSC dan *transient plane source* (sensor Hot Disk). HTF harus dipilih dengan viskositas rendah pada suhu operasi agar $Re > 10^4$ (aliran turbulen). Untuk operasi 222°C, candidate HTF antara lain *thermal oil* (Therminol VP-1, batas 400°C) atau campuran garam cair.

**Tahap 2 – Desain Geometri Awal.** Berdasarkan kebutuhan energi $Q_{req}$ (kWh) dan durasi discharge $\Delta t_d$, kapasitas panas laten dibutuhkan:

$$m_{PCM} = \frac{Q_{req}}{h_{sf} \cdot \eta_{discharge}}$$

dengan $\eta_{discharge}$ = 0,85–0,95 (efisiensi utilisasi fasa). Geometri *shell-and-tube* mengikuti standar TEMA dengan jumlah tube $N_t$, diameter luar $D_o$, dan panjang aktif $L$.

**Tahap 3 – Pembuatan Model Numerik.** Dalam lingkungan Dymola/Modelica, komponen PCM, tube HTF, dan shell dirangkai menggunakan library *Thermal Storage* atau kustomisasi berbasis blok 1D distributed. Validasi dilakukan dengan benchmark eksperimental (*Stefan problem*, *Melting around a tube*).

**Tahap 4 – Simulasi Skenario Transien.** Simulasi dijalankan untuk skenario *charge* (dari HTF panas masuk) dan *discharge* (dari HTF dingin mengambil panas), masing-masing dengan profil suhu inlet yang realistis dari operasi HTHP nyata.

**Tahap 5 – Verifikasi & Optimasi.** *Grid independence test* dan validasi terhadap data eksperimental; optimasi multi-variabel (jumlah tube, fraksi wool, laju alir HTF) terhadap *energy throughput* dan *exergy efficiency*.

```
┌────────────────────────┐    ┌─────────────────────────┐
│  HTHP Condenser Out    │───▶│  Shell-and-tube LHTES   │
│  T_in ≈ 230-240°C      │    │  PCM eutectic @ 222°C   │
└────────────────────────┘    └────────────┬────────────┘
                                            │
                          ┌─────────────────┴─────────────────┐
                          ▼                                   ▼
              ┌──────────────────────┐          ┌──────────────────────┐
              │  Proses Heat Demand  │          │   Beban puncak       │
              │  T_out ≈ 180-210°C   │          │   (peak-shaving)     │
              └──────────────────────┘          └──────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES *shell-and-tube* vertikal untuk aplikasi industri pengeringan tekstil, kapasitas termal target $Q_{req} = 500$ kWh_th dengan suhu operasi 222°C. PCM diasumsikan eutektik NaNO₃-KNO₃ (60:40 wt%) dengan parameter:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_m$ | 222 | °C |
| $h_{sf}$ | 165 | kJ/kg |
| $k_{PCM}$ | 0,95 | W/m·K |
| $\rho_{PCM}$ | 1.890 | kg/m³ |
| $c_{p,PCM}$ | 1.500 | J/kg·K |
| $\Delta T_{mushy}$ | 4 | K |

**HTF**: Therminol VP-1, $T_{in,charge} = 240$°C, $\dot{m} = 2{,}5$ kg/s, $c_{p,HTF} = 2.400$ J/kg·K.

### Langkah 1 – Massa PCM yang Dibutuhkan

Asumsikan efisiensi discharge $\eta = 0{,}90$:

$$m_{PCM} = \frac{Q_{req}}{\eta \