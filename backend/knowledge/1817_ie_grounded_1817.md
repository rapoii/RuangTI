# 1817 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada 222°C untuk Integrasi dengan Pompa Panas Temperatur Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal di Uni Eropa dan kawasan industri maju, dimana lebih dari 50% kebutuhan energi final industri digunakan untuk menghasilkan panas proses pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Deskarbonisasi panas proses industri merupakan tantangan teknis yang mendesak, karena boiler gas alam dan sistem uap konvensional masih mendominasi lanskap energi termal. Pompa Panas Temperatur Tinggi (*High-Temperature Heat Pump*, HTHP) muncul sebagai teknologi disruptif yang mampu menaikkan suhu fluida kerja dari sumber buangan (limbah panas, udara ambien, atau air proses) hingga 200 °C dengan *Coefficient of Performance* (COP) antara 2,0–3,5, sebagaimana diuraikan Xu & Wang (2024) dalam prospektif dekarbonisasi termal.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa integrasi HTHP dengan sistem *Latent Heat Thermal Energy Storage* (LHTES) menghadapi satu瓶颈 fundamental: konduktivitas termal rendah dari material perubahan fase (*Phase Change Material*, PCM) yang pada rentang 0,2–0,7 W/(m·K) menjadi *rate-limiting step* keseluruhan sistem. Tanpa optimasi geometri penukar panas, solusi enkapsulasi, atau penggunaan wol logam (*metal foams/wools*), kapasitas pelepasan muatan panas (*discharge*) menjadi sangat lambat sehingga tidak memenuhi profil permintaan proses industri yang fluktuatif.

Konteks operasional pada suhu 222 °C sangat relevan karena menjembatani kesenjangan antara aplikasi suhu menengah (pengeringan, pasteurisasi) dan suhu tinggi (sterilisasi, reaksi kimia). Eutektik nitrat KNO₃–NaNO₃ memiliki titik lebur persis di kisaran 220–225 °C dengan panas laten ~110 kJ/kg, menjadikannya kandidat PCM utama untuk jendela termal ini (Toloza et al., 2026). Urgensi ekonominya bersifat nyata: industri makanan, kimia, tekstil, dan pulp-kertas di Eropa menghadapi tekanan regulasi ETS (*Emissions Trading System*) dan biaya karbon yang meningkat, sehingga investasi pada sistem terintegrasi HTHP–LHTES memiliki *payback period* yang semakin pendek.

Permasalahan riset yang diangkat Toloza et al. (2026) adalah bagaimana membangun model numerik transien yang mampu memprediksi perilaku dinamis unit LHTES *shell-and-tube* vertikal dengan akurasi tinggi, sehingga dapat digunakan sebagai *digital twin* untuk mengendalikan operasi pengisian (*charging*) dan pengosongan (*discharging*) di lapangan. Model ini dikodekan dalam bahasa Modelica — pendekatan berorientasi persamaan (*equation-oriented modeling*) yang berbeda dari pendekatan CFD tradisional karena memungkinkan penyelesaian kopel termodinamika-fluida secara simultan dengan waktu komputasi yang jauh lebih rendah.

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES yang diajukan Toloza, Payá, dan Barceló (2026) dibangun di atas persamaan konduksi panas unsteady 3D dengan metode kapasitas panas semu (*apparent heat capacity*):

$$\rho \, c_{p,app}(T) \, \frac{\partial T}{\partial t} = \nabla \cdot \left( k_{eff}(T) \, \nabla T \right) \quad (1)$$

dimana kapasitas panas semu didefinisikan sebagai:

$$c_{p,app}(T) = c_p(T) + L \cdot \frac{d\alpha(T)}{dT} \quad (2)$$

dengan $\alpha(T)$ adalah fraksi liquid (*liquid fraction function*), $\rho$ densitas PCM, $L$ panas laten, dan $k_{eff}$ konduktivitas efektif yang memperhitungkan kemungkinan penggunaan wol logam atau sirip. Model Toloza et al. (2026) menggunakan bentuk sigmoid untuk $\alpha(T)$ guna menghindari diskontinuitas numerik pada titik lebur:

$$\alpha(T) = \frac{1}{2}\left[ 1 + \tanh\left( \frac{T - T_m}{\Delta T_{mush}} \right) \right] \quad (3)$$

dimana $T_m$ adalah suhu lebur dan $\Delta T_{mush}$ adalah lebar zona *mushy* (biasanya 2–5 K). Bentuk tanh ini lebih stabil secara komputasional dibanding model *enthalpy* tradisional karena menghasilkan turunan $\frac{d\alpha}{dT}$ yang terbatas.

Untuk perpindahan panas konveksi pada PCM cair di dalam *shell*, dipergunakan korelasi Nusselt Rayleigh-Brinkman yang dimodifikasi:

$$Nu_{shell} = C \cdot Ra^{n} \quad (4)$$

dengan $C \approx 0,15$ dan $n \approx 0,25$ untuk bilangan Rayleigh $Ra = \frac{g \beta (T_s - T_m) L_c^3}{\nu \alpha_{th}}$ dalam rentang $10^6$–$10^9$ yang relevan untuk PCM organik dan garam nitrat.

Di sisi fluida kerja (HTF) yang mengalir di dalam tabung, diterapkan persamaan konservasi energi 1D unsteady:

$$\rho_{HTF} \, c_{p,HTF} \, A_c \, \frac{\partial T_{HTF}}{\partial t} + \dot{m} \, c_{p,HTF} \, \frac{\partial T_{HTF}}{\partial x} = h_i \, P \, (T_s - T_{HTF}) \quad (5)$$

dimana $A_c$ luas penampang tabung, $P$ keliling basah, $h_i$ koefisien konveksi internal (umumnya $500$–$3000$ W/(m²·K) untuk air atau refrigeran), dan $\dot{m}$ laju aliran massa HTF. Kopling antara PCM dan HTF terjadi melalui kondisi batas termal di dinding tabung:

$$-k_{PCM} \frac{\partial T}{\partial r}\bigg|_{r=R_{out}} = h_i (T_{HTF} - T_s) \quad (6)$$

Total energi yang tersimpan dalam PCM selama satu siklus termal:

$$Q_{stored} = \int_{V_{PCM}} \rho \left[ \int_{T_{initial}}^{T_{final}} c_{p,app}(T) \, dT \right] dV \quad (7)$$

Untuk PCM eutektik KNO₃–NaNO₃ pada pemanasan dari $T_i