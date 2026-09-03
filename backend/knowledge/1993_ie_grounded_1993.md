# 1993 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi final terbesar secara global, dengan proporsi sekitar 37% dari total konsumsi energi dunia, di mana lebih dari separuhnya digunakan untuk kebutuhan *process heat* pada rentang suhu menengah hingga tinggi (100–400°C) [Xu & Wang, 2024, DOI: 10.59717/j.xinn-energy.2024.100032]. Dekarbonisasi *process heat* menghadapi tantangan struktural yang kompleks, karena banyak proses industri (pengeringan, sterilisasi, distilasi, *steam generation*, dan reaksi kimia endotermik) menuntut profil termal yang stabil dan *dispatchable*. Konversi langsung dari boiler berbasis bahan bakar fosil ke elektrifikasi penuh melalui *High-Temperature Heat Pumps* (HTHPs) merupakan salah satu jalur transisi paling prospektif karena Coefficient of Performance (COP) teoretis dapat mencapai 3–5, secara drastis mengurangi konsumsi energi primer [Xu & Wang, 2024].

Namun, volatilitas harga listrik, intermitensi sumber energi terbarukan, dan karakteristik operasional HTHP yang sensitif terhadap *lift* suhu memerlukan adanya *buffer* termal. Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) berperan strategis. Berbeda dengan *sensible heat storage* (SHS), LHTES memanfaatkan *Phase Change Material* (PCM) untuk menyimpan dan melepaskan energi dalam jumlah besar pada suhu hampir konstan melalui transisi fasa padat–cair. Toloza, Payá, dan Barceló [2026, DOI: 10.21001/eurotherm2026.086] menekankan bahwa integrasi LHTES dengan HTHP memungkinkan *decoupling* antara waktu produksi termal dan waktu konsumsi termal, sekaligus meningkatkan fleksibilitas beban listrik (*demand-side flexibility*).

Paper Toloza et al. [2026] secara spesifik memilih rentang suhu operasi **222°C** karena sesuai dengan ambang termal berbagai proses industri kelas menengah—seperti *food processing* (sterilisasi UHT), *textile* (pewarnaan dan *finishing*), serta sebagian proses *chemical* dan *pulp & paper*—yang selama ini menjadi "celah dekarbonisasi" (*mid-temperature gap*) karena belum ter-cover secara ekonomis oleh boiler listrik resistif maupun HTHP komersial standar. Urgensi riset ini diperkuat oleh fakta bahwa konduktivitas termal PCM pada umumnya rendah (0,1–1,0 W/m·K), sehingga tanpa optimalisasi geometri *heat exchanger*, efektivitas LHTES akan menurun signifikan akibat resistansi termal internal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengolahan Transien pada PCM

Model transien 1D radial untuk PCM dalam geometri silinder mengikuti *heat conduction equation* dengan sumber volumetrik akibat pelepasan panas laten, yang umumnya diselesaikan dengan metode *enthalpy-porosity* atau metode *apparent heat capacity*:

$$\rho c_p^* \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(k r \frac{\partial T}{\partial r}\right)$$

di mana kapasitas panas efektif $c_p^*$ mencakup kontribusi *sensible* dan *latent*:

$$c_p^* = c_{p,s} + L \cdot \frac{df}{dT}$$

dengan $L$ adalah panas laten (J/kg) dan $f$ adalah fraksi likuid (*liquid fraction*) yang dimodelkan sebagai fungsi sigmoid halus di sekitar suhu leleh $T_m$ [Toloza et al., 2026].

### 2.2 Model HTF pada Sisi Tube

Untuk *Heat Transfer Fluid* (HTF) yang mengalir di dalam tube, persamaan konservasi energi 1D unsteady digabungkan dengan model termal dinding tube dan resistansi kontak:

$$\rho_f c_{p,f} A_f \frac{\partial T_f}{\partial t} + \dot{m} c_{p,f} \frac{\partial T_f}{\partial x} = h_i P_i (T_{w,i} - T_f)$$

dengan $\dot{m}$ adalah laju alir massa, $A_f$ luas penampang, $P_i$ keliling internal, dan $h_i$ koefisien konveksi internal yang dihitung dari korelasi Gnielinski atau Dittus-Boelter tergantung rezim Reynolds.

### 2.3 Bilangan Dimensi Kunci

Kinerja LHTES dievaluasi melalui bilangan tak berdimensi berikut:

$$\text{Stefan Number: } Ste = \frac{c_{p,PCM} (T_m - T_i)}{L}$$

$$\text{Biot Number: } Bi = \frac{h \cdot r_o}{k_{PCM}}$$

$$\text{Fourier Number: } Fo = \frac{\alpha_{PCM} \cdot t}{r_o^2}$$

### 2.4 Kapasitas Penyimpanan Energi

Energi total yang dapat disimpan dalam unit LHTES dihitung dengan:

$$Q_{stored} = \int_0^{t_c} \dot{m}_{HTF} c_{p,HTF} (T_{HTF,in} - T_{HTF,out})\, dt$$

Efisiensi penyimpanan didefinisikan sebagai rasio energi yang dilepas (discharge) terhadap energi yang diisi (charge):

$$\eta_{storage} = \frac{Q_{discharged}}{Q_{charged}} \times 100\%$$

Pemodelan diimplementasikan dalam bahasa **Modelica** karena kemampuan *acausal modeling* dan integrasi pustaka termodinamika (*Modelica.Media*) yang efisien untuk sistem multi-domain [Toloza et al., 2026].

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Shell-and-Tube LHTES

Konfigurasi yang dikaji Toloza et al. [2026] adalah unit LHTES vertikal *shell-and-tube* dengan PCM berbasis **eutectic nitrate salt** (campuran NaNO₃–KNO₃ atau varian modifikasi) yang memiliki $T_m \approx 222°C$ dan konduktivitas termal intrinsik rendah (~0,5 W/m·K). Untuk mengatasi keterbatasan ini, tiga strategi peningkatan perpindahan panas diinvestigasi:

1. **Optimasi geometri tube bundle** (jarak pitch, jumlah tube, diameter).
2. **Encapsulasi PCM** dalam kapsul silinder kecil (*macro-encapsulation*).
3. **Insertion metal wool/foam** dalam shell untuk membuat *composite PCM*.

### 3.2 SOP Implementasi Numerik

Langkah-langkah prosedur operasional untuk replikasi model:

| Tahap | Aktivitas | Alat/Standar |
|-------|-----------|--------------|
| 1 | Definisi geometri shell-and-tube (D_s, D_o, D_i, L, N_t) | ASME Section VIII Div. 1 |
| 2 | Karakterisasi termofisika PCM dan HTF | NIST REFPROP, TGA/DSC characterization |
| 3 | Diskretisasi domain 2D aksisimetrik | Mesh independence test (Grid Convergence Index) |
| 4 | Implementasi PDE transien di Modelica | Library `HeatTransfer`, `Fluid` |
| 5 | Validasi dengan data eksperimen | Benchmark terhadap literatur PCM |
| 6 | Analisis sensitivitas parameter | DOE / OFAT screening |
| 7 | Simulasi siklus charge–discharge | Profil beban HTHP tipikal |

### 3.3 Integrasi dengan HTHP

Arsitektur integrasi: **HTHP → HTF circuit primer → LHTES unit → HTF circuit sekunder → beban industri**. Mode operasi: (i) *charging* saat listrik murah/oversupply, (ii) *discharging* saat permintaan termal puncak, (iii) *standby* saat HTHP menyuplai langsung.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Unit LHTES

Berdasarkan spesifikasi yang lazim dalam paper Toloza et al. [2026] dan literatur terkait:

- PCM: Eutectic nitrate salt, $T_m = 222°C$, $L = 180$ kJ/kg, $\rho_{PCM} = 1900$ kg/m³, $k_{PCM} = 0{,}5$ W/m·K, $c_{p,PCM} = 1500$ J/kg·K
- Shell: $D_s = 0{,}30$ m, panjang $L_{eff} = 2{,}0$ m
- Tube: $D_o = 25$ mm, $D_i = 20$ mm, jumlah $N_t = 19$ (susunan triangular pitch 1,25×D_o)
- HTF: Thermal oil, $T_{in} = 240°C$, $T_{out}$ (desain) = 226°C, $\dot{m}_{HTF} = 0{,}8$ kg/s, $c_{p,HTF} = 2400$ J/kg·K

### 4.2 Perhitungan Kapasitas Penyimpanan

Massa PCM dalam shell (volume shell dikurangi volume tube):

$$V_{shell} = \pi \left(\frac{D_s}{2}\right)^2 L_{eff} = \pi (0{,}15)^2 (2{,}0) = 0{,}1414 \text{ m}^3$$

$$V_{tubes} = N_t \cdot \pi \left(\frac{D_o}{2}\right)^2 L_{eff} = 19 \cdot \pi (0{,}0125)^2 (2{,}0) = 0{,}01865 \text{ m}^3$$

$$V_{PCM} = 0{,}1414 - 0{,}01865 = 0{,}1228 \text{ m}^3$$

$$m_{PCM} = \rho_{PCM} \cdot V_{PCM} = 1900 \times 0{,}1228 = 233{,}3 \text{ kg}$$

Kapasitas termal total unit (sensible + latent untuk ΔT efektif ~15°C di atas $T_m$):

$$Q_{total} = m_{PCM} \left[L + c_{p,PCM} \cdot \Delta T_{eff}\right] = 233{,}3 \times [180.000 + 1500 \times 15]$$

$$Q_{total} = 233{,}3 \times 202.500 = 47{,}24 \text{ MJ} \approx 13{,}12 \text{ kWh}$$

### 4.3 Perhitungan Waktu Charging

Daya termal yang ditransfer dari HTF ke PCM (diasumsikan *log-mean temperature difference* di awal siklus):

$$\dot{Q}_{peak} = \dot{m}_{HTF} \cdot c_{p,HTF} \cdot (T_{in} - T_{out}) = 0{,}8 \times 2400 \times 14 = 26.880 \text{ W} = 26{,}88 \text{ kW}$$

Waktu charging estimasi (dengan degradasi 20% karena resistansi termal):

$$t_{charge} = \frac{Q_{total}}{0{,}8 \cdot \dot{Q}_{peak}} = \frac{47{,}24 \times 10^6}{0{,}8 \times 26.880} = 2.197 \text{ s} \approx 36{,}6 \text{ menit}$$

### 4.4 Evaluasi Bilangan Stefan dan Biot

Asumsikan suhu awal PCM $T_i = 200°C$ (sub-cooled 22°C di bawah $T_m$):

$$Ste = \frac{1500 \times 22}{180.000} = 0{,}183$$

$$Bi = \frac{h \cdot r_o}{k_{PCM}}$$

Untuk HTF dengan $Re = \frac{4\dot{m}}{\pi D_i \mu} \approx 12.000$ (aliran turbulen), korelasi Gnielinski memberikan $h_i \approx 1.200$ W/m²K. Dengan $r_o = 0{,}0125$ m:

$$Bi = \frac{1200 \times 0{,}0125}{0{,}5} = 30$$

Nilai $Bi \gg 1$ mengonfirmasi bahwa resistansi internal PCM adalah *rate-limiting step*, sehingga justifikasi penggunaan *metal wool* atau *encapsulation* menjadi sangat kuat [Toloza et al., 2026].

### 4.