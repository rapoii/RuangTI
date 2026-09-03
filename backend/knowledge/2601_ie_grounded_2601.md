# 2601 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature-Heat-Pump (HTHP) dalam Konteks Dekarbonisasi Proses Termal Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Dekarbonisasi sektor energi termal industri merupakan salah satu tantangan rekayasa paling krusial abad ke-21. Menurut Xu dan Wang (2024) dalam tinjauan prospektifnya di *The Innovation Energy*, lebih dari 50% konsumsi energi akhir global dialokasikan untuk kebutuhan pemanasan dan pendinginan, dengan porsi dominan (>70%) berada pada rentang suhu sedang hingga tinggi (100–400°C) yang selama ini dipenuhi oleh boiler berbasis bahan bakar fosil [DOI: 10.59717/j.xinn-energy.2024.100032]. Perpindahan menuju *High-Temperature Heat Pump* (HTHP) yang digabungkan dengan *Latent Heat Thermal Energy Storage* (LHTES) muncul sebagai arsitektur hibrida yang paling prospektif, karena mampu mengatasi dua masalah struktural sekaligus: profil permintaan termal industri yang bersifat *time-shifted* terhadap ketersediaan energi listrik terbarukan, serta kebutuhan akan densitas energi termal yang tinggi pada volume penyimpanan ringkas.

Toloza, Payá, dan Barceló (2026) menekankan bahwa salah satu hambatan fundamental dalam adopsi LHTES pada aplikasi proses panas industri adalah konduktivitas termal yang rendah pada sebagian besar material *Phase Change Material* (PCM), yang umumnya berada pada kisaran $k_{PCM} \approx 0{,}2$–$0{,}5~\mathrm{W/(m\cdot K)}$ [DOI: 10.21001/eurotherm2026.086]. Sebagai respons, penulis memilih konfigurasi *shell-and-tube* vertikal yang dikombinasikan dengan *metal wool* atau solusi enkapsulasi untuk meningkatkan laju perpindahan panas tanpa mengorbankan kekompakan struktural. Unit penyimpanan dirancang beroperasi di sekitar suhu 222°C, yang merupakan jendela operasional khas untuk proses *food processing*, *textile finishing*, dan *steam generation* industri ringan—yang secara langsung relevan dengan roadmap dekarbonisasi pabrik di Uni Eropa dan Asia Timur.

Urgensi operasional dari integrasi LHTES–HTHP bersifat tiga-dimensi: (i) dimensi teknis berupa *peak shaving* termal yang memungkinkan downsizing kapasitas HTHP hingga 30–40%; (ii) dimensi ekonomi berupa arbitrase harga listrik antara periode *off-peak* dan *peak*; serta (iii) dimensi keberlanjutan berupa peningkatan penetrasi energi terbarukan variabel (VRE) pada *industrial cluster heat network*. Xu dan Wang (2024) melaporkan bahwa potensi pengurangan emisi CO₂ melalui HTHP industri dapat mencapai 50–80% dibandingkan boiler fosil pada rentang suhu yang sama, menjadikan kombinasi dengan LHTES sebagai *enabler* strategis untuk transisi energi [DOI: 10.59717/j.xinn-energy.2024.100032].

---

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan oleh Toloza et al. (2026) dibangun di atas kerangka konservasi energi dua-fasa (*liquid–solid*) pada geometri silindris *shell-and-tube*, diselesaikan dalam bahasa Modelica dengan asumsi *1D radial conduction* dan *1D axial convection* pada fluida *heat transfer fluid* (HTF).

### 2.1 Persamaan Konservasi Energi pada PCM

Untuk elemen PCM pada jari-jari $r$ dan ketinggian $z$, hukum Fourier digabungkan dengan panas laten melalui formulasi *enthalpy-based*:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r} \left( k_{eff}(r) \cdot r \frac{\partial T}{\partial r} \right) + \dot{q}_{gen}$$

dengan entalpi spesifik total $h$ didekomposisi menjadi:

$$h = c_{p,s} \, T + f_l \cdot L_f \quad \text{(untuk } T \le T_m \text{)}, \quad h = c_{p,l} \, T + (1-f_l) \cdot L_f \quad \text{(untuk } T \ge T_m \text{)}$$

di mana $f_l$ adalah fraksi *liquid* (0 hingga 1), $L_f$ adalah kalor laten peleburan, dan $T_m$ adalah suhu lebur. Konduktivitas efektif $k_{eff}(r)$ merepresentasikan kontribusi *metal wool*:

$$k_{eff}(r) = k_{PCM} \cdot \varepsilon(r) + k_{metal} \cdot (1-\varepsilon(r))$$

dengan $\varepsilon(r)$ sebagai porositas lokal *metal wool* pada radius tertentu.

### 2.2 Persamaan Konveksi pada HTF (Sisi Tube)

Untuk fluida dalam tabung, dengan asumsi *plug flow* dan koefisien perpindahan panas $h_{HTF}$:

$$\rho_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} c_{p,HTF} u_{HTF} \frac{\partial T_{HTF}}{\partial z} = \frac{h_{HTF} \cdot P_{tube}}{A_{cs}} (T_{PCM,wall} - T_{HTF})$$

di mana $u_{HTF}$ adalah kecepatan aksial, $P_{tube}$ adalah keliling basah tabung, dan $A_{cs}$ adalah luas penampang aliran.

### 2.3 Kondisi Batas dan Antarmuka

Pada antarmuka PCM–dinding tabung ($r = r_{inner}$), fluks radial memenuhi:

$$-k_{eff} \frac{\partial T}{\partial r}\bigg|_{r=r_i} = h_{HTF} (T_{PCM}(r_i) - T_{HTF})$$

Pada batas luar *shell* ($r = r_{outer}$), diasumsikan isolasi adiabatic:

$$\frac{\partial T}{\partial r}\bigg|_{r=r_o} = 0$$

### 2.4 Diskretisasi Numerik

Toloza et al. (2026) menggunakan *finite volume method* (FVM) dengan *mesh* radial non-uniform yang diperhalus di dekat dinding tabung. *Time stepping* dilakukan dengan skema eksplisit Runge–Kutta orde-4 dengan *CFL number* konservatif ($CFL \le 0{,}4$) untuk menjamin stabilitas pada fasa transien peleburan/pembekuan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES–HTHP mengikuti SOP berlapis yang dirumuskan oleh Toloza et al. (2026) dan diperkuat dengan kerangka integrasi sistem dari Xu & Wang (2024):

**Fase 1 — Karakterisasi PCM dan Metal Wool.** Pengujian DSC (*Differential Scanning Calorimetry*) untuk menentukan $T_m$, $L_f$, $c_{p,s}$, dan $c_{p,l}$. Pengukuran konduktivitas termal efektif dengan *transient plane source* (sensor Hot Disk) pada berbagai fraksi *porosity metal wool* $\varepsilon \in [0{,}6;\,0{,}95]$.

**Fase 2 — Desain Termal Shell-and-Tube.** Perhitungan *number of transfer units* (NTU):

$$\text{NTU} = \frac{U \cdot A}{(\dot{m} c_p)_{min}}$$

dengan $U$ koefisien perpindahan panas overall, $A$ luas perpindahan panas efektif.

**Fase 3 — Pembangunan Model Modelica.** Setiap elemen *shell-and-tube* dimodelkan sebagai *finite volume* radial dengan *moving interface* yang diimplementasikan melalui metode *enthalpy tracking*, bukan *front tracking*, untuk menghindari singularitas numerik saat beberapa titik secara simultan melewati $T_m$.

**Fase 4 — Kalibrasi dan Validasi.** Validasi dilakukan dengan membandingkan profil suhu *charge/discharge* dari model terhadap data eksperimen pada prototipe laboratorium. *Root mean square error* (RMSE) didefinisikan sebagai:

$$\text{RMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}\left(T_{model,i} - T_{exp,i}\right)^2}$$

dengan target $\text{RMSE} \le 1{,}5^{\circ}\mathrm{C}$ sesuai praktik laboratorium termal Eropa.

**Fase 5 — Integrasi dengan HTHP dan Optimalisasi Operasi.** *State machine* kontrol mengkoordinasikan *charge mode* (HTHP aktif, LHTES menyerap) dan *discharge mode* (LHTES melepas ke beban proses). Xu dan Wang (2024) menekankan bahwa kunci integrasi adalah menjaga suhu蒸发asi HTHP di atas $T_m + \Delta T_{superheat}$ dengan margin minimal 5–8°C untuk mencegah operasi *two-phase* yang merusak kompresor.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit Studi Kasus

Sebuah pabrik *textile finishing* di Eropa membutuhkan daya termal sebesar $\dot{Q}_{proc} = 250~\mathrm{kW_{th}}$ pada suhu proses 200°C selama 6 jam per hari (siklus siang). HTHP berkapasitas $\dot{Q}_{HTHP} = 150~\mathrm{kW_{th}}$ menyuplai proses langsung, sementara unit LHTES berfungsi sebagai *peak shaving* dan *time-shifting*.

Parameter operasi LHTES (berdasarkan Toloza et al., 2026):

- Suhu lebur PCM: $T_m = 222^{\circ}\mathrm{C}$
- Densitas PCM: $\rho_{PCM} = 1850~\mathrm{kg/m^3}$
- Kapasitas panas (solid): $c_{p,s} = 1{,}55~\mathrm{kJ/(kg\cdot K)}$
- Kapasitas panas (liquid): $c_{p,l} = 1{,}70~\mathrm{kJ/(kg\cdot K)}$
- Panas laten: $L_f = 180~\mathrm{kJ/kg}$
- Konduktivitas PCM murni: $k_{PCM} = 0{,}45~\mathrm{W/(m\cdot K)}$
- Konduktivitas efektif dengan metal wool ($\varepsilon = 0{,}85$): $k_{eff} = 6{,}5~\mathrm{W/(m\cdot K)}$
- Jari-jari dalam tabung: $r_i = 0{,}0125~\mathrm{m}$
- Jari-jari luar shell: $r_o = 0{,}075~\mathrm{m}$
- Panjang shell: $L = 2{,}0~\mathrm{m}$

### 4.2 Perhitungan Kapasitas Penyimpanan

Volume PCM efektif per unit:

$$V_{PCM} = \pi (r_o^2 - r_i^2) \cdot L = \pi \cdot (0{,}075^2 - 0{,}0125^2) \cdot 2{,}0 = 0{,}0344~\mathrm{m^3}$$

Massa PCM per unit:

$$m_{PCM} = \rho_{PCM} \cdot V_{PCM} = 1850 \cdot 0{,}0344 = 63{,}6~\mathrm{kg}$$

Energi termal tersimpan per unit (siklus penuh charge–discharge antara 200°C dan 240°C):

$$\Delta E_{unit} = m_{PCM} \left[ c_{p,s}(T_m - T_{min}) + L_f + c_{p,l}(T_{max} - T_m) \right]$$

$$\Delta E_{unit} = 63{,}6 \cdot \left[1{,}55 \cdot 22 + 180 + 1{,}70 \cdot 18\right] = 63{,}6 \cdot \left[34{,}1 + 180 + 30{,}6\right] = 63{,}6 \cdot 244{,}7$$

$$\Delta E_{unit} = 15{,}562~\mathrm{kJ} = 4{,}32~\mathrm{kWh_{th}}$$

### 4.3 Penentuan Jumlah Unit dan Waktu Charge

Kebutuhan energi puncak yang harus ditanggung LHTES selama 6 jam dengan HTHP 150 kW:

$$E_{peak} = (250 - 150) \cdot 6 = 600~\mathrm{kWh_{th}}$$

Mengasumsikan utilitas 90% (rugi termal dan inefisiensi *charge/discharge*):

$$N_{unit} = \frac{E_{peak}}{0{,}90 \cdot \Delta E_{unit}} = \frac{600}{0{,}90 \cdot 4{,}32} \approx 155~\text{unit}$$

### 4.4 Analisis Waktu Pengisian

Daya *charge* nominal per unit (asumsi $\dot{m}_{HTF} = 0{,}08~\mathrm{kg/s}$ pada $c_{p,HTF} = 2{,}3~\mathrm{kJ/(kg\cdot K)}$):

$$\dot{Q}_{charge,unit} = \dot{m}_{HTF} \cdot c_{p,HTF} \cdot \Delta T_{HTF} = 0{,}08 \cdot 2{,}3 \cdot 20 = 3{,}68~\mathrm{kW_{th}}$$

Waktu *charge* per unit:

$$t_{charge} = \frac{\Delta E_{unit}}{\dot{Q}_{charge,unit}} = \frac{15{,}562}{3{,}68} \approx 4{,}23~\text