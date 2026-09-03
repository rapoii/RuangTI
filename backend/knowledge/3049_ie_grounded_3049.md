# 3049 — Model Numerik Transien Penyimpanan Energi Termal Panas Laten (LHTES) Shell-and-Tube pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25% dari konsumsi energi final global, dimana lebih dari separuh kebutuhan tersebut berupa *process heat* pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi *process heat* merupakan tantangan kritis karena penetrasi elektrifikasi langsung pada suhu tinggi masih terbatas secara ekonomis. *High-Temperature Heat Pump* (HTHP) muncul sebagai teknologi enabler utama, mampu menyediakan Coefficient of Performance (COP) 3–6 bahkan pada suhu output 200°C, memanfaatkan refrigeran generasi baru seperti R1234ze(Z), R1336mzz(Z), dan siklus trans-kritis CO₂. Namun, karakteristik operasi HTHP yang fluktuatif — dipengaruhi oleh suhu ambient, beban evaporator, dan dinamika refrigeran — menciptakan *mismatch* temporal antara suplai dan demand panas industri.

Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) mengambil peran strategis sebagai buffer termal. Menurut Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)), integrasi LHTES dengan HTHP memungkinkan tiga nilai tambah utama: (i) *load-leveling* yang menurunkan kapasitas terpasang HTHP, (ii) peningkatan *flexibility* operasi pada suhu parsial, dan (iii) penyimpanan *excess heat* ketika HTHP beroperasi pada kondisi optimum namun demand rendah. Tantangan teknis utama LHTES adalah konduktivitas termal rendah *Phase Change Material* (PCM), khususnya garam nitrat eutektik pada suhu operasi ~222°C yang memiliki $k_{PCM} \approx 0,5 \text{ W/m·K}$ — hampir dua orde magnitudo lebih rendah dibanding logam.

Konteks industri yang relevan mencakup sektor kimia (reaktor batch, pengeringan), makanan dan minuman (sterilisasi, evaporasi), tekstil (pewarnaan, finishing), pulp & kertas (pengeringan), dan metalurgi ringan. Semua sektor ini memiliki profil beban termal intermiten yang ideal untuk kombinasi HTHP+LHTES. Urgensi ekonominya juga nyata: dengan asumsi tarif listrik industri €0,08/kWh dan harga gas alam €0,04/kWh, COP > 3 pada HTHP menghasilkan levelized cost of heat (LCOH) yang kompetitif, sementara LHTES menurunkan peak demand charge dan memungkinkan partisipasi dalam Demand Response programs.

Studi Toloza dkk. (2026) mengusulkan geometri *shell-and-tube* vertikal karena tiga keunggulan: kekompakan tinggi (volumetric energy density 200–300 kJ/L), robustnes struktural untuk operasi siklik ribuan kali, dan kapasitas untuk *thermal enhancement* melalui metal wool, finned tubes, atau PCM encapsulation. Makalah ini membangun model transien 2D aksisimetrik dalam bahasa Modelica — pendekatan *acausal object-oriented* yang cocok untuk simulasi sistem terintegrasi HTHP-LHTES.

## 2. Landasan Teori & Formulasi Matematis

Model matematis LHTES shell-and-tube Toloza dkk. (2026) dibangun di atas persamaan konservasi energi dengan perubahan fase, diselesaikan dalam koordinat silindris 2D $(r, z)$ untuk domain PCM dan 1D untuk Heat Transfer Fluid (HTF).

### 2.1 Governing Equation PCM (Enthalpy Method)

Untuk domain PCM, energi persamaan ditulis dalam bentuk enthalpi untuk menangani diskontinuitas pada saat fase berubah:

$$\rho_{PCM} \frac{\partial H(T)}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{PCM} \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{PCM} \frac{\partial T}{\partial z}\right)$$

dimana enthalpi spesifik direpresentasikan:

$$H(T) = \int_{T_{ref}}^{T} c_{p,PCM}(\tau) \, d\tau + f(T) \cdot L$$

dengan $f(T)$ adalah *liquid fraction* yang dimodelkan sebagai fungsi sigmoid regulerisasi:

$$f(T) = \frac{1}{2}\left[1 + \text{erf}\left(\frac{T - T_m}{\Delta T_{mush}}\right)\right]$$

Parameter $T_m = 222°C$ adalah temperatur leleh eutektik NaNO₃-KNO₃ dan $\Delta T_{mush} \approx 3–5°C$ adalah lebar zona *mushy* yang menghindari singularitas numerik.

### 2.2 Persamaan HTF dalam Tube

Untuk fluida di dalam tube (HTF mengalir secara aksial), konservasi energi 1D:

$$\rho_{HTF} c_{p,HTF} A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_i \pi d_i \left(T_{w,i} - T_{HTF}\right)$$

dimana $A_c = \pi d_i^2/4$ adalah luas penampang tube, $\dot{m}$ laju aliran massa, dan $h_i$ koefisien konveksi internal.

### 2.3 Kondisi Batas

Kondisi batas domain PCM:
- **Permukaan dalam tube ($r = r_i$):** Coupling konvektif dengan HTF dan konduksi melalui dinding tube:
$$-k_{PCM} \frac{\partial T}{\partial r}\bigg|_{r_i} = \frac{T_{HTF} - T_{w,i}}{R_{conv,i}} = \frac{T_{w,i} - T_{PCM}}{R_{wall}}$$
- **Permukaan shell ($r = r_o$):** Diasumsikan adiabatik atau rugi panas ke ambient dengan resistansi $R_{loss}$:
$$-k_{PCM} \frac{\partial T}{\partial r}\bigg|_{r_o} = \frac{T_{w,o} - T_{amb}}{R_{loss}}$$
- **Ujung atas/bawah ($z = 0, L$):** Simetri atau konveksi ringan.

### 2.4 Korelasi Perpindahan Panas

Untuk HTF di dalam tube dengan aliran turbulen ($\text{Re} > 10^4$), digunakan korelasi Dittus-Boelter:
$$\text{Nu}_i = 0{,}023 \, \text{Re}_i^{0{,}8} \, \text{Pr}_i^{0{,}4}$$

sehingga $h_i = \text{Nu}_i \cdot k_{HTF} / d_i$.

Untuk perpindahan panas luar dengan PCM yang meleleh, korelasi natural convection pada silinder horizontal (Churchill-Chu):
$$\text{Nu}_o = \left\{0{,}60 + \frac{0{,}387 \,\text{Ra}_D^{1/6}}{[1 + (0{,}559/\text{Pr})^{9/16}]^{8/27}}\right\}^2$$

dengan Rayleigh number $\text{Ra}_D = g \beta (T_w - T_m) D^3 / (\nu \alpha)$.

### 2.5 Formulasi Numerik

Discretization menggunakan *finite volume method* dengan grid staggered. Skema temporal implicit (backward Euler) menjamin stabilitas tanpa syarat CFL:

$$\frac{H^{n+1} - H^n}{\Delta t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k \frac{\partial T^{n+1}}{\partial r}\right)$$

Formulasi weak residual untuk setiap volume kontrol $P$ dengan tetangga $N, S, E, W$:

$$a_P T_P^{n+1} = a_E T_E^{n+1} + a_W T_W^{n+1} + a_N T_N^{n+1} + a_S T_S^{n+1} + b_P$$

dengan koefisien bergantung pada $k/\Delta r$ dan treatment sumber enthalpi fase berubah. Implementasi dalam Modelica memanfaatkan library termal (mis. *ThermoPower*, *HeatTransfer*) dengan ekspresi *replaceable models* untuk parameter PCM dan geometri.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa integrasi HTHP-LHTES mengikuti SOP berbasis digital twin yang sistematis:

**Tahap 1 — Karakterisasi PCM dan Seleksi Geometri.**
Langkah awal adalah verifikasi data termofisik PCM kandidat. Untuk eutektik NaNO₃-KNO₃ (60:40 wt%), parameter operasional tipikal: $T_m = 222°C$, $L = 150 \text{ kJ/kg}$, $\rho_s = 2100 \text{ kg/m}^3$, $\rho_l = 1950 \text{ kg/m}^3$, $k = 0{,}50 \text{ W/m·K}$, $c_p = 1{,}55 \text{ kJ/kg·K}$ (Toloza dkk., 2026). Seleksi geometri shell-and-tube mengikuti kriteria compactness $\beta = V_{PCM}/V_{total} \geq 0{,}7$ dengan rasio $d_o/D_s$ optimum 0,2–0,3.

**Tahap 2 — Pembangunan Model Numerik.**
Menggunakan bahasa Modelica (Dymola/OpenModelica), modul LHTES dibangun sebagai *connector-based component* dengan port termal pada dinding tube dan port HTF untuk inlet/outlet. Pendekatan *acausal* memungkinkan komposisi fleksibel dengan model HTHP dari library standar. Validasi dilakukan terhadap data eksperimental charging/discharging kurva T(t).

**Tahap 3 — Integrasi dengan HTHP.**
Sistem terintegrasi disimulasikan dengan profil beban industri tipikal (mis. siklus batch 8 jam dengan duty 60%). Kontroler menjaga $T_{HTF,out}$ dalam rentang $\pm 2°C$ dari setpoint proses, dengan LHTES sebagai buffer saat HTHP COP turun.

**Tahap 4 — Anal