# 1961 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang lebih dari 25% konsumsi energi final global, di mana sekitar 50%-nya berupa kebutuhan *process heat* pada rentang suhu 150°C–400°C (Xu & Wang, 2024). Dekarbonisasi panas proses industri merupakan tantangan kritis yang tidak dapat diselesaikan hanya dengan elektrifikasi berbasis pompa kalor konvensional, karena sebagian besar proses memerlukan suhu di atas ambang batas operasional *compressor* standar. Dalam konteks ini, *High-Temperature Heat Pump* (HTHP) muncul sebagai teknologi enabler yang memungkinkan recovery panas buangan (waste heat) dan *upgrading* termal pada suhu 200°C–250°C. Namun, performa HTHP sangat bergantung pada profil beban termal: saat proses membutuhkan *peak demand* intermiten, efisiensi *Coefficient of Performance* (COP) cenderung turun drastis karena *compressor ratio* yang meningkat. Untuk mengatasi *mismatch* temporal ini, *Latent Heat Thermal Energy Storage* (LHTES) menjadi komponen krusial yang berfungsi sebagai *buffer* termal dan *capacity booster* (Toloza, Payá & Barceló, 2026).

Toloza, Payá, dan Barceló (2026) menyoroti tiga tantangan utama dalam integrasi HTHP–LHTES: (i) konduktivitas termal PCM (*Phase Change Material*) yang rendah—biasanya di bawah 1 W/(m·K) untuk garam nitrat—menyebabkan laju pertukaran panas yang terbatas; (ii) degradasi termal dan korosi pada suhu >200°C yang mempersempit pilihan material *encapsulation*; serta (iii) *transient response* yang sulit diprediksi tanpa model numerik tervalidasi. Untuk menjawab kebutuhan tersebut, paper mereka menyajikan model numerik transien berbasis bahasa Modelica untuk unit LHTES *shell-and-tube* vertikal dengan PCM eutektik yang beroperasi di sekitar suhu 222°C. Justifikasi pemilihan konfigurasi *shell-and-tube* didasarkan pada tiga atribut struktural: kekompakan volumetrik tinggi, ketahanan mekanis pada siklus termal berulang, dan kapasitas untuk integrasi *thermal enhancement devices* seperti *metal wool*, *fins*, atau *nanofluid*. Dari perspektif rantai pasok energi industri, keberhasilan integrasi ini berpotensi menurunkan *Levelized Cost of Heat* (LCOH) pada fasilitas kimia, makanan, dan tekstil hingga 15%–30% melalui kombinasi reduksi *peak demand charge*, optimasi *capacity factor* HTHP, dan pemanfaatan *waste heat* yang sebelumnya terbuang (Xu & Wang, 2024).

Urgensi ekonominya diperkuat oleh dinamika pasar karbon Uni Eropa yang menerapkan *Carbon Border Adjustment Mechanism* (CBAM), sehingga setiap *GJ* panas proses yang tidak terdekarbonisasi memiliki implikasi biaya signifikan. Dalam kerangka ini, modul ini menjadi fondasi bagi *industrial energy system engineer* untuk mengevaluasi kelayakan teknis-ekonomi unit LHTES sebagai komponen integral sistem HTHP.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengaturan Transien dalam PCM

Model numerik yang dikembangkan oleh Toloza et al. (2026) menggunakan formulasi enthalpy-based dengan asumsi *continuum* pada PCM. Persamaan konservasi energi dalam koordinat silinder (geometri *shell-and-tube*) untuk domain PCM adalah:

$$\rho_{PCM} \cdot \frac{\partial h}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) + \dot{q}_{vol}$$

di mana $h$ adalah entalpi spesifik (J/kg), $\rho_{PCM}$ densitas PCM (kg/m³), $k_{PCM}$ konduktivitas termal efektif (W/(m·K)), dan $\dot{q}_{vol}$ adalah sumber panas volumetrik. Dalam ekspansi koordinat silinder asimetris (radial-simetris):

$$\rho_{PCM} \cdot c_{eff}(T) \cdot \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{eff}(T) \cdot r \cdot \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}(T) \cdot \frac{\partial T}{\partial z}\right)$$

Pendekatan *effective heat capacity* mendefinisikan $c_{eff}(T)$ sebagai:

$$c_{eff}(T) = c_{p,s} + \frac{L}{f(T_{liq}) - f(T_{sol})} \cdot \frac{df}{dT}$$

dengan $c_{p,s}$ kapasitas panas sensibel (J/(kg·K)), $L$ panas laten (J/kg), dan $f(T)$ fraksi cair (*liquid fraction*) yang biasanya dimodelkan dengan kurva Sigmoid (model "mushy zone"):

$$f(T) = \frac{1}{2}\left[1 + \tanh\left(\frac{T - T_{m}}{\Delta T_{mushy}}\right)\right]$$

di mana $T_m$ adalah suhu lebur dan $\Delta T_{mushy}$ adalah lebar zona transisi fasa.

### 2.2 Persamaan HTF (*Heat Transfer Fluid*) pada Sisi Tube

Untuk fluida perpindahan panas (HTF) yang mengalir di dalam tube internal, persamaan konservasi mengikuti model *1D plug flow* dengan koefisien perpindahan panas konvektif $h_{HTF}$:

$$\rho_{HTF} \cdot c_{p,HTF} \cdot A_{flow} \cdot \frac{\partial T_{HTF}}{\partial t} + \dot{m} \cdot c_{p,HTF} \cdot \frac{\partial T_{HTF}}{\partial z} = h_{HTF} \cdot \pi D_i \cdot (T_{wall} - T_{HTF})$$

Bilangan Nusselt untuk aliran turbulen di dalam tube mengikuti korelasi Dittus-Boelter (untuk pemanasan):

$$Nu_{HTF} = 0.023 \cdot Re_{HTF}^{0.8} \cdot Pr_{HTF}^{0.4}$$

sehingga koefisien konveksi:

$$h_{HTF} = \frac{Nu_{HTF} \cdot k_{HTF}}{D_i}$$

### 2.3 Bilangan Pokok Karakteristik

Tiga bilangan tak berdimensi utama yang mengontrol dinamika sistem:

$$Ste = \frac{c_{p,PCM} \cdot (T_{in} - T_m)}{L} \quad \text{(Bilangan Stefan)}$$

$$Fo = \frac{\alpha_{PCM} \cdot t_{op}}{R_{shell}^2} \quad \text{(Bilangan Fourier)}$$

$$Bi = \frac{h_{HTF} \cdot R_{shell}}{k_{PCM}} \quad \text{(Bilangan Biot)}$$

dengan $\alpha_{PCM} = k_{PCM}/(\rho_{PCM} \cdot c_{p,PCM})$ adalah difusivitas termal, dan $R_{shell}$ jari-jari efektif cangkang. Untuk operasi stabil, $Fo \geq 1$ memastikan tercapainya kondisi *steady cyclic*, sedangkan $Bi$ rendah mengindikasikan *thermal bottleneck* pada sisi PCM—memotivasi penggunaan *thermal enhancement*.

### 2.4 Energi Tersimpan Total

Energi total yang dapat disimpan per siklus termal dihitung sebagai:

$$E_{storage} = \int_{T_{min}}^{T_{max}} m_{PCM} \cdot c_{eff}(T) \, dT = m_{PCM} \left[ c_{p,s} (T_{max} - T_{min}) + L \cdot \Delta f \right]$$

dengan $\Delta f = f(T_{max}) - f(T_{min})$ adalah fraksi fasa cair yang berubah selama operasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES-HTHP mengikuti SOP rekayasa berikut:

**Tahap 1: Karakterisasi Beban Termal.** Lakukan audit energi proses industri menggunakan ISO 50001 untuk memetakan profil beban harian, mingguan, dan musiman. Identifikasi rentang suhu operasi proses dan karakteristik intermitensi.

**Tahap 2: Seleksi PCM.** Berdasarkan suhu fasa transisi yang dibutuhkan (sekitar 222°C untuk paper Toloza et al., 2026), kandidat utama adalah *solar salt* (60% NaNO₃ + 40% KNO₃, $T_m \approx 220$°C, $L \approx 160$ kJ/kg) atau eutektik HTS-NaNO₃. Verifikasi kompatibilitas kimiawi dengan material *encapsulation* (umumnya baja tahan karat 316L atau Inconel).

**Tahap 3: Desain Geometri Shell-and-Tube.** Tentukan rasio aspek $(L/D)$ tube, jumlah tube, dan pitch menggunakan korelasi Kern atau Bell-Delaware. Untuk aplikasi skala industri sedang (kapasitas 1–5 MWh), dimensi tipikal: $D_{shell} = 0.5$–1.5 m, panjang efektif 2–4 m.

**Tahap 4: Pemodelan Numerik Transien.** Gunakan bahasa Modelica (seperti pada Toloza et al., 2026) atau platform Dymola dengan library *Thermal-Fluid*. Diskretisasi domain PCM menggunakan *finite volume method* dengan grid minimum 20×40 (radial × aksial). Validasi model dengan eksperimen skala lab (*T-history* atau *step-input*) mengikuti ASTM STP 1479.

**Tahap 5: Integrasi dengan HTHP.** Hubungkan unit LHTES sebagai *buffer* antara output kondensor HTHP dan input proses. Implementasikan *control logic