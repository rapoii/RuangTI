# 2953 — Model Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu 222ºC untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Decarbonisasi panas proses industri merupakan salah satu tantangan operasional paling mendesak di abad ke-21. Sektor industri menyumbang lebih dari 25% konsumsi energi akhir global, di mana lebih dari separuhnya berupa *process heat* pada rentang suhu 150–400ºC (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dalam konteks dekarbonisasi, *High-Temperature Heat Pump* (HTHP) dipandang sebagai teknologi strategis karena mampu menaikkelaskan (*upgrade*) panas buangan menjadi panas utilisasi dengan *Coefficient of Performance* (COP) signifikan. Namun, karakteristik operasional HTHP yang fluktuatif—bergantung pada suhu sumber, suhu kondensasi, dan beban termal sesaat—menuntut kehadiran penyangga termal untuk menjamin kesinambungan pasok energi.

Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) berperan krusial. Berbeda dengan *sensible heat storage* (SHS) yang hanya memanfaatkan kapasitas panas jenis, LHTES menyimpan energi dalam bentuk panas laten fusi *Phase Change Material* (PCM), sehingga densitas energi volumetriknya dapat mencapai 5–10 kali lipat sistem SHS pada delta suhu yang sama. Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa untuk aplikasi panas proses industri yang dikawinkan dengan HTHP, rentang suhu target 200–250ºC menjadi jendela operasional paling relevan. Paper mereka memilih ambang ±222ºC—yang sangat khas untuk titik leleh eutektik garam nitrat (misalnya campuran NaNO₃–KNO₃ atau eutektik ternary berbasis nitrat)—karena selaras dengan suhu kondensasi tipikal siklus HTHP berbasis refrigeran refrigeran alami (R-CO₂, R-ammonia, atau R-HFO).

Urgensi teknis lainnya adalah konduktivitas termal PCM yang rendah (umumnya 0,2–1,0 W/m·K untuk garam nitrat), yang menjadi *bottleneck* laju pengisian (*charging*) dan pengosongan (*discharging*). Tanpa strategi peningkatan perpindahan panas, waktu pengisian sebuah unit LHTES dapat mencapai 4–8 jam, padahal HTHP membutuhkan responsivitas dalam orde puluhan menit hingga beberapa jam. Toloza et al. (2026) mengusulkan konfigurasi *shell-and-tube* vertikal sebagai jawaban karena memberikan tiga keuntungan sinergis: kekompakan (rasio area per volume tinggi), robustness struktural terhadap siklus termal, dan kapasitas enhancement melalui integrasi *fins*, *metal wool*, atau *encapsulation*. Model numerik transient yang mereka bangun dalam bahasa Modelica memungkinkan simulasi *co-simulation* dengan model HTHP, sehingga dinamika dua subsistem dapat dievaluasi secara holistik.

Secara manajerial, integrasi LHTES-HTHP menjawab tiga *pain points* industri: (1) **Time-shifting** energi listrik murah (off-peak) menjadi panas siap-pakai pada jam beban puncak; (2) **Decoupling** antara waktu ketersediaan sumber termal dan waktu kebutuhan proses; serta (3) **Peak shaving** yang menurunkan biaya kapasitas sambungan listrik. Oleh karena itu, kemampuan memodelkan perilaku transient LHTES dengan akurasi tinggi menjadi kompetensi inti perekayasa sistem energi industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

Model transient LHTES pada dasarnya adalah penyelesaian numerik dari *Stefan problem* dengan kondisi batas perpindahan panas konvektif dan/atau konduktif pada dinding tube. Toloza et al. (2026) merumuskan model dalam bahasa Modelica dengan pendekatan *enthalpy method* untuk menghindari diskontinuitas pada antarmuka solidus–likuidus PCM. Berikut adalah formulasi matematis intinya.

### 2.1 Persamaan Energi dalam Koordinat Silindris

Untuk geometri *shell-and-tube* dengan PCM mengisi sisi *shell* dan fluida kerja (HTF) mengalir di dalam *tube*, asumsi umum yang digunakan adalah simetri aksial dan gradien suhu dominan radial. Persamaan konservasi energi dapat ditulis sebagai:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{PCM}(T) \cdot r \cdot \frac{\partial T}{\partial r}\right) + \dot{q}_{vol}$$

dengan $\rho_{PCM}$ densitas PCM, $h$ entalpi spesifik, $k_{PCM}(T)$ konduktivitas termal dependensi suhu, dan $\dot{q}_{vol}$ sumber panas volumetric (nol untuk kasus pasif). Pada fase transisi, entalpi dan suhu dihubungkan oleh:

$$h(T) = \int_{T_{ref}}^{T} c_p(T')\, dT' + L \cdot f_s(T)$$

dengan $L$ panas laten fusi dan $f_s(T)$ fraksi likuid (*liquid fraction*) yang dimodelkan dengan fungsi *smoothing* untuk menjamin konvergensi numerik:

$$f_s(T) = \frac{1}{2}\left[1 + \frac{\tanh\left(\frac{T-T_m}{\Delta T_{mushy}}\right)}{\Delta T_{mushy}}\right] \cdot (T - T_m)$$

### 2.2 Bilangan-Bilangan Karakteristik

Kinerja LHTES dikarakterisasi oleh tiga bilangan tak berdimensi utama:

**Bilangan Stefan** — rasio antara energi panas jenis terhadap panas laten di atas $T_m$:
$$Ste = \frac{c_p \cdot (T_{HTF} - T_m)}{L}$$

**Bilangan Fourier** — ukuran difusi termal terhadap waktu proses:
$$Fo = \frac{\alpha_{PCM} \cdot t}{R_o^2}$$

**Bilangan Biot** — rasio resistansi konduksi PCM terhadap resistansi konveksi HTF:
$$Bi = \frac{h_{HTF} \cdot R_i}{k_{PCM}}$$

Kombinasi $Ste$ kecil dan $Bi$ besar mengindikasikan operasi LHTES yang *heat-transfer-limited*, sehingga strategi enhancement harus memprioritaskan peningkatan $h_{HTF}$ atau luas area.

### 2.3 Kapasitas Penyimpanan Energi

Energi total yang tersimpan dalam PCM selama satu siklus *charging* adalah:

$$Q_{stored}(t) = \int_{V_{PCM}} \rho_{PCM} \left[h(T(r,t)) - h(T_{initial})\right] dV$$

Untuk desain awal, kapasitas nominal statis:
$$Q_{nom} = m_{PCM} \cdot \left[\int_{T_i}^{T_m} c_p^s dT + L + \int_{T_m}^{T_f} c_p^l dT \right]$$

### 2.4 Efektivitas *Shell-and-Tube* Heat Exchanger (NTU-ε)

Laju perpindahan panas riil HTF ke PCM dievaluasi dengan metode ε–NTU:
$$\varepsilon = 1 - \exp\left[-NTU \cdot (1 - C_r)\right]$$
dengan $NTU = \frac{U \cdot A_{HTF}}{\dot{m}_{HTF} \cdot c_{p,HTF}}$ dan $C_r = \frac{(\dot{m} c_p)_{min}}{(\dot{m} c_p)_{max}}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis unit LHTES-HTHP mengikuti SOP 7-tahap berikut, disintesis dari protokol Toloza et al. (2026) dan praktik rekayasa termal industri:

**Tahap 1 — Karakterisasi Material PCM.** Lakukan DSC (*Differential Scanning Calorimetry*) untuk memperoleh $T_m$, $L$, $c_p^s$, $c_p^l$, dan stabilitas siklik hingga ≥1000 siklus. Verifikasi konduktivitas termal dengan metode *transient hot wire* (standar ISO 8894-1).

**Tahap 2 — Seleksi Konfigurasi Heat Exchanger.** Untuk aplikasi HTHP 222ºC, *shell-and-tube* vertikal dengan $R_i = 5–15$ mm dan rasio $R_o/R_i = 2,5–4$ direkomendasikan. Toloza et al. menunjukkan rasio optimum berada di 3,2 dengan penambahan *metal foam* atau *metal wool* untuk menaikkan $k_{eff}$ PCM hingga 5–10×.

**Tahap 3 — Konstruksi Model Numerik.** Bangun model 1D-radial atau 2D-aksimetrisik di Modelica (pustaka *Thermosyphon*, *HeatTransfer*, atau *Buildings*). Diskretisasi dengan 30–60 nodal radial memastikan akurasi < 2% terhadap solusi analitik Neumann.

**Tahap 4 — Kalibrasi & Validasi.** Bandingkan hasil simulasi dengan data eksperimental prototipe laboratorium pada kondisi batas terkontrol (HTF inlet konstan, debit massa tetap). Gunakan *root mean square error* (RMSE) sebagai metrik:
$$RMSE = \sqrt{\frac{1}{N}\sum_{i=1}^{N}\left(T_{sim,i} - T_{exp,i}\right)^2}$$

**Tahap 5 — Co-Simulation HTHP–LHTES.** Integrasikan model HTHP (siklus kompresi-uap dengan siklus transisi refrigeran) melalui *Functional Mock-up Interface* (FMI). Validasi dinamika *charge/discharge* terhadap protokol operasional industri.

**Tahap 6 — Safety, Pressure Relief & Containment.** Rancang *rupture disc* dan *thermal expansion buffer* karena PCM organik dan garam nitrat memiliki ekspansi volumetrik 8–12% saat l