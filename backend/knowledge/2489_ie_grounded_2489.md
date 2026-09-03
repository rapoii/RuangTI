# 2489 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Latent untuk Integrasi dengan Pompa Kalor Suhu Tinggi pada Dekarbonisasi Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 25–37% dari konsumsi energi final global, dan lebih dari separuh kebutuhan tersebut berupa **panas proses industri (industrial process heat)** pada rentang suhu menengah hingga tinggi (100–400 °C) (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Pada industri makanan, kimia, kertas, tekstil, dan metalurgi ringan, panas proses bersuhu 150–250 °C merupakan tulang punggung operasional, sehingga dekarbonisasi sektor ini mensyaratkan solusi elektrifikasi yang andal dan berbiaya layak. Salah satu rute strategis yang diajukan oleh Xu dan Wang (2024) adalah adopsi **High-Temperature Heat Pumps (HTHPs)** yang mampu mengangkat suhu sumber panas rendah—misalnya limbah panas proses, flue gas, atau sumber geothermal—ke suhu berguna untuk proses industri, dengan *Coefficient of Performance* (COP) yang secara termodinamika lebih unggul dibanding Boiler listrik resistif.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menegaskan bahwa integrasi HTHP dengan sistem **Latent Heat Thermal Energy Storage (LHTES)** merupakan pendekatan sinergis bernilai tambah tinggi. LHTES memungkinkan *time-shifting* energi termal: menyimpan kelebihan produksi HTHP pada periode *off-peak* (misalnya ketika tarif listrik rendah atau ketika sumber panas limbah tersedia secara intermiten) dan melepaskannya saat *peak demand*. Tantangan fundamentalnya adalah bahwa sebagian besar *Phase Change Material* (PCM)—termasuk garam eutektik nitrat yang digunakan pada rentang ~222 °C—memiliki **konduktivitas termal rendah** ($k_{PCM} \approx 0{,}5–1{,}5 \;\mathrm{W/m\cdot K}$), yang menghambat laju *charge* dan *discharge*. Untuk menjawab hal tersebut, konfigurasi **shell-and-tube** dipilih karena memberikan tiga keuntungan utama: kekompakan volumetrik tinggi, robusteitas struktural terhadap siklus termal, dan kapasitas *thermal enhancement* melalui geometri internal.

Konteks industri yang melatarbelakangi penelitian ini mencakup kebutuhan akan *flexibility* operasi pabrik (terutama untuk menutup gap antara produksi dan konsumsi), peningkatan *round-trip efficiency* sistem energi termal, dan pencapaian target *net-zero emission* pada horizon 2050. Secara ekonomi, kapasitas penyimpanan yang dirancang dengan baik dapat menurunkan *Levelized Cost of Heat* (LCOH) sebesar 10–30% dengan melakukan arbitrase harga energi dan menghindari oversizing HTHP. Oleh karena itu, kemampuan untuk **memprediksi perilaku transien** unit LHTES sebelum fabrikasi prototipe fisik menjadi kebutuhan strategis dalam rekayasa sistem termal industri modern.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES shell-and-tube memerlukan formulasi perpindahan panas dua-fasa yang menggabungkan konduksi radial pada PCM, konveksi pada *Heat Transfer Fluid* (HTF), serta pelepasan atau penyerapan kalor laten selama perubahan fasa. Model yang dikembangkan Toloza dkk. (2026) menggunakan bahasa Modelica dengan pendekatan **enthalpy-based formulation** yang menyelesaikan variabel entalpi $H$ alih-alih suhu, sehingga secara numerik stabil di sekitar fasa transisi.

### 2.1 Persamaan Konservasi Energi pada PCM

Untuk elemen volume kontrol PCM di dalam *shell* (koordinat silindris $(r, z)$), persamaan konservasi energi transient adalah:

$$\rho_{PCM}\,\frac{\partial h_{PCM}}{\partial t} = \frac{1}{r}\,\frac{\partial}{\partial r}\!\left(k_{PCM}(T)\,r\,\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k_{PCM}(T)\,\frac{\partial T}{\partial z}\right)$$

dengan $h_{PCM}$ adalah entalpi spesifik, $\rho_{PCM}$ densitas, dan $k_{PCM}(T)$ konduktivitas termal efektif. Dalam metode entalpi, hubungan $T = f(h)$ dinyatakan sebagai:

$$T(h) = \begin{cases} T_m + \dfrac{h - h_s}{c_{p,s}}, & h \leq h_s \\[4pt] T_m, & h_s < h < h_l \\[4pt] T_m + \dfrac{h - h_l}{c_{p,l}}, & h \geq h_l \end{cases}$$

dengan $h_s$ dan $h_l$ berturut-turut adalah entalpi pada batas fasa padat dan cair, $T_m$ suhu lebur, $c_{p,s}$ dan $c_{p,l}$ kalor jenis pada fasa padat dan cair.

### 2.2 Persamaan HTF dalam Tube

Aliran HTF di dalam tabung internal dimodelkan sebagai **aliran 1D incompressible** dengan asumsi *lumped*-*grain*:

$$\rho_{HTF}\,c_{p,HTF}\,A_c\,\frac{\partial T_{HTF}}{\partial t} + \dot{m}\,c_{p,HTF}\,\frac{\partial T_{HTF}}{\partial z} = h_i\,\pi D_i\,(T_{w,i} - T_{HTF})$$

dengan $A_c = \pi D_i^2/4$ luas penampang, $\dot{m}$ laju alir massa, $h_i$ koefisien konveksi internal, $D_i$ diameter dalam tabung, dan $T_{w,i}$ suhu dinding bagian dalam.

### 2.3 Kopling Termal Shell–Tube

Pertukaran panas antara dinding tabung dan PCM di-*shell* mengikuti konduksi radial melalui dinding dan PCM:

$$Q'_{\text{radial}}(z) = \frac{T_{HTF}(z) - T_{PCM,\text{surf}}(z)}{R_{t,\text{total}}}$$

dengan resistansi termal total per satuan panjang:

$$R_{t,\text{total}} = \frac{1}{h_i \pi D_i} + \frac{\ln(D_o/D_i)}{2\pi k_w} + \frac{1}{h_o \pi D_o}$$

di mana $h_o$ adalah koefisien konveksi efektif di sisi PCM (yang dapat ditingkatkan dengan *metal wool*, *fins*, atau PCM berbentuk *encapsulated*). Persamaan-persamaan tersebut diselesaikan secara simultan menggunakan diskretisasi **metode volume hingga (Finite Volume Method)** dengan *time-stepping* eksplisit–implisit (Crank–Nicolson) untuk menjamin stabilitas dan akurasi orde kedua.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengembangan unit LHTES untuk integrasi HTHP mengikuti alur rekayasa berikut:

**Tahap 1 — Penentuan Profil Beban Termal.** Berdasarkan data historis SCADA pabrik, dibangun kurva *duration* kebutuhan uap/panas proses pada rentang suhu target $\sim 222 °C$. Parameter kunci: *peak demand* ($Q_{\text{peak}}$ dalam kW), durasi operasi harian ($t_{\text{op}}$), dan rasio *peak-to-base* ($\beta$).

**Tahap 2 — Seleksi PCM.** Berdasarkan suhu target, dipilih garam eutektik nitrat (misalnya campuran $\mathrm{NaNO_3}$–$\mathrm{KNO_3}$–$\mathrm{LiNO_3}$ atau $\mathrm{HTF}$-kompatibel lainnya). Kriteria seleksi mengikuti Sharma dkk. (2009) dan dimutakhirkan oleh Toloza dkk. (2026): $T_m$ di dalam rentang operasional, $\Delta h_l$ tinggi, $k$ cukup untuk geometri shell-and-tube, siklus stabil.

**Tahap 3 — Desain Geometri Shell-and-Tube.** Parameter desain: jumlah tabung $N_t$, diameter dalam/luar $D_i$/$D_o$, panjang $L$, dan pitch tabung $P_t$. Kompaktansi volumetrik didefinisikan sebagai:

$$\sigma_v = \frac{V_{PCM}}{V_{\text{total}}} \approx \frac{N_t\,\pi\,(D_o^2 - D_i^2)\,L/4}{\pi D_{\text{shell}}^2 L/4}$$

Target tipikal: $\sigma_v \geq 0{,}6$ dengan *void fraction* rendah.

**Tahap 4 — Pemodelan Numerik Transien.** Menggunakan Modelica (Dymola) dengan library *Thermal-Fluid*. Validasi dilakukan dengan data eksperimental *bench-scale* atau benchmark literatur.

**Tahap 5 — Integrasi dengan HTHP.** Unit LHTES ditempatkan di *buffer tank* antara output kondensor HTHP dan beban proses. Diagram alir logika kontrol operasi adalah: (a) jika $T_{\text{tank}} < T_{\text{set,low}}$ → aktifkan HTHP + buka katup *charge*; (b) jika $T_{\text{tank}} > T_{\text{set,high}}$ → matikan HTHP, buka katup *discharge*; (c) jika beban proses puncak → lepaskan energi dari LHTES. Logika ini mengikuti *standard industrial automation* IEC 61131-3 dan dapat di-*embed* pada PLC.

**Tahap 6 — Commissioning dan Validasi Kinerja.** Parameter yang dimonitor: *State of Charge* (SOC), *round-trip efficiency* ($\eta_{RT}$), dan laju degradasi PCM per siklus.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebuah pabrik kimia organik berskala menengah membutuhkan **uap proses $T = 220 °C$** dengan profil beban harian: kebutuhan dasar 500 kW selama 16 jam dan puncak 1.200 kW selama 8 jam. Solusi: HTHP berkapasitas 600 kW (COP = 3,2) ditambah unit LHTES shell-and-tube.

**Parameter Desain Unit LHTES:**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Eutektik nitrat | – |
| $T_m$ | 222 | °C |
| $\Delta h_l$ | 160 | kJ/kg |
| $\rho_{PCM}$ | 1.900 | kg/m³ |
| $k_{PCM}$ | 1,0 | W/m·K |
| $D_i$ | 0,020 | m |
| $D_o$ | 0,025 | m |
| $N_t$ | 60 | – |
| $L$ | 2,0 | m |
| HTF | Thermal oil | – |
| $\dot{m}_{HTF}$ | 2,5 | kg/s |
| $c_{p,HTF}$ | 2,4 | kJ/kg·K |

**Perhitungan Kapasitas Penyimpanan:**

Massa PCM dalam shell:

$$m_{PCM} = \rho_{PCM} \cdot \left(\frac{\pi D_{\text{shell}}^2 L}{4} - N_t \frac{\pi D_o^2 L}{4}\right)$$

Dengan asumsi $D_{\text{shell}} = 0{,}30$ m:

$$m_{PCM} = 1.900 \times \left(\frac{\pi (0{,}30)^2 (2{,}0)}{4} - 60\cdot\frac{\pi (0{,}025)^2 (2{,}0)}{4}\right)$$

$$m_{PCM} = 1.900 \times (0{,}1414 - 0{,}0589) \approx 1.900 \times 0{,}0825 \approx 156{,}8 \;\mathrm{kg}$$

Kapasitas energi termal (latent):

$$Q_{\text{latent}} = m_{PCM} \cdot \Delta h_l = 156{,}8 \times 160 = 25.088 \;\mathrm{kJ} \approx 6{,}97 \;\mathrm{kWh}$$

Untuk memenuhi defisit energi puncak sebesar $(1.200 - 600) \times 8 = 4.800$ kWh, dibutuhkan sekitar 690 unit LHTES serupa (atau satu unit dengan $L = 1.380$ m—tidak realistis), sehingga pada praktiknya kapasitas LHTES dirancang untuk menutupi *short-duration peak* 30–60 menit atau mem-*buffer* fluktuasi HTHP.

**Perhitungan Waktu Charge dari $T_{\text{initial}} = 200 °C$ ke $T_m = 222 °C$:**

Energi sensibel PCM: $Q_s = m_{PCM}\,c_{p