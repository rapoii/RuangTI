# 1577 — Model Numerik Transien Penyimpanan Energi Termal Panas Laten (~222 °C) untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 25 % dari konsumsi energi final global, di mana lebih dari separuhnya digunakan untuk memenuhi kebutuhan *process heat* (Toloza *et al.*, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Desentralisasi rantai pasok energi termal, dekarbonisasi proses, serta elektrifikasi pemanasan industri menjadi pilar strategis dalam transisi energi. Dalam konteks ini, Toloza, Payá, dan Barceló (2026) menyoroti bahwa sistem *Latent Heat Thermal Energy Storage* (LHTES) berperan vital sebagai penyangga termal yang mampu meningkatkan fleksibilitas dan efisiensi instalasi industri, khususnya ketika digandengkan dengan *High-Temperature Heat Pump* (HTHP) pada kisaran suhu 200–250 °C yang relevan untuk industri kimia, makanan, dan tekstil. Xu dan Wang (2024) — DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032) — menegaskan bahwa integrasi pompa kalor merupakan salah satu *key pathways* paling realistis untuk dekarbonisasi termal, karena mampu menaikkan suhu *waste heat* menjadi *useful heat* dengan *Coefficient of Performance* (COP) antara 2,5 hingga 4,5.

Urgensi operasionalnya bersifat triple-bottom-line. Dari sisi ekonomi, fluktuasi tarif listrik dan harga bahan bakar fosil menuntut *peak shaving* dan *load shifting*. Dari sisi teknis, konduktivitas termal rendah pada kebanyakan *Phase Change Material* (PCM) — umumnya 0,2–0,5 W/(m·K) untuk garam eutektik — menghambat laju *charge/discharge*, sehingga memerlukan optimalisasi geometri penukar panas. Dari sisi keberlanjutan, kombinasi HTHP + LHTES memungkinkan desainer untuk menyimpan energi "listrik-ke-panas" ketika tarif rendah (off-peak) atau ketika *renewable curtailment* terjadi, dan melepaskannya saat proses membutuhkannya. Toloza *et al.* (2026) secara eksplisit mengusulkan konfigurasi *shell-and-tube* vertikal sebagai solusi yang atraktif karena kekuatannya secara struktural, kekompakannya, dan kapasitasnya untuk *thermal enhancement*. Justifikasi ini menjadi titik masuk bagi modul rekayasa berikut.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES pada kisaran 222 °C memerlukan formulasi yang menggabungkan konservasi energi, transpor termal konduktif/konvektif, dan fenomena perubahan fasa. Toloza *et al.* (2026) mengembangkan model dalam bahasa Modelica dengan menyelesaikan persamaan enthalpy-porosity. Formulasi intinya adalah:

$$\rho_{pcm} \frac{\partial H}{\partial t} = \nabla \cdot \left( k_{pcm} \nabla T \right) \tag{1}$$

di mana $H$ adalah entalpi volumetrik spesifik (J/m³), $k_{pcm}$ adalah konduktivitas termal efektif PCM (W/(m·K)), dan $T$ adalah suhu (K). Enthalpi total pada tiap lokasi spasial didefinisikan sebagai:

$$H(T) = \int_{T_{ref}}^{T} \rho \, c_p(T')\, dT' + \rho \, L \, f(T) \tag{2}$$

dengan $L$ adalah panas laten fusi (J/kg) dan $f(T)$ adalah fraksi cair (*liquid fraction*) yang dimodelkan dengan pendekatan *mushy zone*:

$$f(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s \leq T \leq T_l \\ 1, & T > T_l \end{cases} \tag{3}$$

Pada sisi fluida pemindah panas (*Heat Transfer Fluid*, HTF) yang mengalir di dalam tabung, persamaan konservasi energi satu-dimensi diselesaikan:

$$\rho_{htf} \, c_{p,htf} \, A_{c} \frac{\partial T_{htf}}{\partial t} + \dot{m}_{htf} \, c_{p,htf} \frac{\partial T_{htf}}{\partial x} = h_i \, P_i \left( T_{w}(x,t) - T_{htf}(x,t) \right) \tag{4}$$

dengan $A_c$ luas penampang lintang tabung, $P_i$ keliling bagian dalam, $h_i$ koefisien perpindahan panas konveksi, dan $T_w$ suhu dinding tabung. Untuk rezim turbulen ($Re > 10^4$) pada HTF termal, digunakan korelasi Gnielinski:

$$Nu = \frac{(f/8)(Re - 1000)Pr}{1 + 12{,}7\sqrt{f/8}\left(Pr^{2/3} - 1\right)} \tag{5}$$

dengan $f = (0{,}79 \ln Re - 1{,}64)^{-2}$. Perpindahan panas di dinding tabung konduksi radial diselesaikan melalui:

$$\rho_w \, c_{p,w} \frac{\partial T_w}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r \, k_w \frac{\partial T_w}{\partial r} \right) \tag{6}$$

Kopling antara PCM, dinding, dan HTF diselesaikan secara iteratif di setiap langkah waktu $\Delta t$ dengan skema *implicit Euler* untuk menjamin stabilitas numerik ketika konduktivitas efektif berubah tajam selama transisi fasa.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari unit LHTES 222 °C mengikuti SOP berlapis yang selaras dengan praktik terbaik dalam perancangan termal:

**Tahap 1 — Karakterisasi PCM.** Karakterisasi termofisika PCM eutektik (DSC untuk $T_s$, $T_l$, $L$; TGA untuk stabilitas; laser flash untuk $k$). Untuk aplikasi 222 °C, kandidat yang lazim adalah campuran karbonat (mis. Li₂CO₃–K₂CO₃) atau garam nitrat.

**Tahap 2 — Desain geometri shell-and-tube.** Toloza *et al.* (2026) menyarankan konfigurasi vertikal untuk mendorong *natural convection* pada PCM cair. Parameter kunci mencakup: rasio $L/D$ shell, pitch antar tabung, jumlah baffle.

**Tahap 3 — Pemodelan transien.** Bangun model dalam Modelica/Dymola atau COMSOL menggunakan enthalpy-porosity. Validasi dengan data eksperimen pada prototipe skala kecil.

**Tahap 4 — Integrasi dengan HTHP.** Pasangkan unit LHTES pada sisi *condenser* HTHP. Atur logika kontrol agar HTHP mengisi LHTES saat tarif rendah/kelebihan *renewable*, dan melepas saat permintaan proses puncak.

**Tahap 5 — commissioning & monitoring.** Pasang sensor T di inlet/outlet HTF dan dalam PCM. Verifikasi kapasitas, laju, dan round-trip efficiency $\eta_{RT} \geq 70\%$.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi kasus:** Unit LHTES shell-and-tube vertikal untuk pabrik kimia dengan kebutuhan *process heat* 240 °C, dirancang bekerja bersama HTHP.

**Parameter desain (diadaptasi dari Toloza *et al.*, 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| PCM eutektik | Li₂CO₃–K₂CO₃ | — |
| $T_s$ / $T_l$ | 217 / 227 | °C |
| $L$ (panas laten) | 200 | kJ/kg |
| $c_{p,s}$ / $c_{p,l}$ | 1,55 / 1,80 | kJ/(kg·K) |
| $k_{pcm}$ | 0,50 | W/(m·K) |
| Massa PCM, $m_{pcm}$ | 500 | kg |
| $T_{initial}$ (padat) | 200 | °C |
| $T_{final}$ (cair) | 245 | °C |

**Perhitungan kapasitas energi tersimpan:**

$$Q_{sens,s} = m_{pcm}\, c_{p,s} (T_s - T_{in}) = 500 \times 1{,}55 \times (217-200) = 13{,}175 \text