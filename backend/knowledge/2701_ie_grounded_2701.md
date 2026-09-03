# 2701 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Nikel laterit merupakan sumber daya strategis yang menyumbang lebih dari 70% cadangan nikel global, namun hanya sekitar 40% produksi nikel primer dunia berasal dari bijih ini karena tantangan teknis dalam ekstraksinya (Dickson, Deleau, & Espitalier, 2026). Bijih limonitic dan saprolitic memiliki kadar nikel rendah (0,8–1,8% Ni) dan kandungan besi, magnesium, serta aluminium yang tinggi, sehingga proses pirometalurgi konvensional tidak ekonomis. Oleh karena itu, High-Pressure Acid Leaching (HPAL) dikembangkan sebagai rute hidrometalurgi utama yang beroperasi pada suhu 220–270 °C dan tekanan 30–45 bar dalam autoclave horizontal atau vertical dengan agitasi mekanis (Andrameda, Triaswinanti, & Madra, 2024).

Permasalahan kritis yang menghambat keberlangsungan operasi HPAL adalah fenomena *autoclave scaling*—yaitu deposisi lapisan kerak anorganik pada dinding bagian dalam, koil pemanas, dan impeller autoclave. Dickson et al. (2026) mendokumentasikan bahwa pembentukan kerak tersebut menurunkan efisiensi perpindahan panas hingga 35–50%, mengurangi volume efektif reaktor, dan memaksa *shutdown* untuk *acid wash cleaning* setiap 30–90 hari operasi. Kerak ini terutama tersusun atas hematit (α-Fe₂O₃), basic iron sulfates (FeOHSO₄), alunit/aluminum hydroxysulfate, gypsum (CaSO₄·2H₂O), dan endapan silika-alumina. Secara ekonomis, downtime yang ditimbulkan oleh aktivitas *descaling* dapat menyebabkan kerugian produksi hingga USD 2–5 juta per bulan pada fasilitas HPAL berskala 30.000–50.000 ton nikel per tahun (Dickson et al., 2026).

Urgensi industrialisasi hijau semakin memperkuat kebutuhan akan pemahaman perilaku scaling, karena HPAL menghasilkan emisi CO₂ lebih rendah (sekitar 30–40 t CO₂/t Ni) dibandingkan dengan proses pirometalurgi seperti rotary kiln electric furnace (RKEF) yang mencapai 50–70 t CO₂/t Ni. Andrameda et al. (2024) menyoroti bahwa pretreatment bijih melalui *roasting-reduction* dengan penambahan agen desulfurisasi mampu menurunkan konsentrasi sulfur dalam residu sehingga mengurangi potensi formasi basic sulfate scale di dalam autoclave. Dengan demikian, integrasi karakterisasi scaling dan optimasi pretreatment menjadi pilar strategis dalam rekayasa proses nikel laterite untuk memenuhi permintaan baterai kendaraan listrik global yang diproyeksikan mencapai 3,4 juta ton nikel sulfat ekuivalen pada tahun 2030.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian: Shrinking Core Model

Pelindian partikel bijih nikel laterit dalam autoclave HPAL secara umum mengikuti *shrinking core model* dengan reaksi permukaan sebagai tahap pengendali. Untuk partikel spherical dengan jari-jari awal $r_0$, konsentrasi asam $C_A$ (mol/L), dan konstanta kecepatan $k_s$ (m/s), fraksi konversi $X$ terhadap waktu $t$ mengikuti hubungan (Dickson et al., 2026):

$$t = \frac{\rho_B r_0}{b \cdot k_s \cdot C_A} \left[ 1 - (1-X)^{1/3} \right]$$

dengan $\rho_B$ adalah densitas molar bijih, $b$ adalah koefisien stoikiometri, dan $C_A$ adalah konsentrasi asam sulfat dalam slurry. Pada fase operasi HPAL, difusi intrapartikel melalui lapisan produk (scale primer) menjadi tahap pembatas pada suhu di atas 240 °C.

### 2.2 Kinetika Pertumbuhan Kerak Autoclave

Pertumbuhan kerak pada permukaan logam autoclave mengikuti hukum *parabolic kinetics* yang umum dijumpai pada oksidasi dan korosi suhu tinggi:

$$\delta(t) = \sqrt{2 \cdot D_{eff} \cdot C_{sat} \cdot \Omega \cdot t}$$

dengan $\delta(t)$ adalah ketebalan kerak (m), $D_{eff}$ adalah koefisien difusi efektif spesies skala dalam matriks kerak (orde $10^{-12}$ hingga $10^{-14}$ m²/s pada 250 °C), $C_{sat}$ adalah konsentrasi jenuh spesies pembentuk kerak pada permukaan logam, dan $\Omega$ adalah volume molar produk kerak. Dickson et al. (2026) melaporkan bahwa nilai $D_{eff}$ untuk kerak berbasis hematit pada baja autoclave berpelapis Alloy 625 adalah $(3,2 \pm 0,4) \times 10^{-13}$ m²/s pada suhu 255 °C.

### 2.3 Penurunan Efisiensi Perpindahan Panas

Koefisien perpindahan panas menyeluruh $U$ dari steam ke slurry melalui dinding autoclave yang tertutup kerak dapat dimodelkan sebagai resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_{steam}} + \frac{\delta_{steel}}{\lambda_{steel}} + \frac{\delta_{scale}}{\lambda_{scale}} + \frac{1}{h_{slurry}}$$

dengan $h_{steam}$ dan $h_{slurry}$ adalah koefisien konveksi, $\lambda_{steel} \approx 16$ W/(m·K), dan $\lambda_{scale}$ bervariasi 0,3–1,8 W/(m·K) tergantung komposisi kerak. Kerak bersifat isolator termal yang sangat efektif; nilai $\lambda_{scale}$ untuk kerak hematit-goethit campuran adalah sekitar 0,6–1,2 W/(m·K). Laju alir panas $q''$ (W/m²) berkurang seiring pertumbuhan kerak:

$$q''(t) = \frac{T_{steam} - T_{slurry}}{\frac{1}{h_{steam}} + \frac{\delta_{steel}}{\lambda_{steel}} + \frac{\delta_{scale}(t)}{\lambda_{scale}} + \frac{1}{h_{slurry}}}$$

### 2.4 Neraca Massa dan Kapasitas Produksi

Dampak scaling terhadap throughput diekspresikan melalui neraca volume efektif autoclave. Jika volume geometrik autoclave adalah $V_0$ dan volume kerak adalah $V_s(t)$, volume slurry efektif berkurang sesuai:

$$V_{eff}(t) = V_0 - V_s(t) - V_{vapor}$$

Pengurangan volume slurry secara langsung menurunkan residence time $\tau = V_{eff}/Q$ dengan $Q$ adalah laju alir slurry masuk. Pada operasi steady state dengan target residence time 60 menit, penurunan $V_{eff}$ sebesar 8% memerlukan peningkatan laju alir umpan atau pengurangan laju leaching (Dickson et al., 2026).

### 2.5 Korelasi Hidrodinamika Autoclave

Untuk desain sistem agitasi dan koil pemanas, bilangan Reynolds dan Nusselt dalam slurry autoclave dihitung sebagai:

$$Re = \frac{\rho_{slurry} \cdot N \cdot D_i^2}{\mu_{slurry}}, \quad Nu = 0,74 \cdot Re^{2/3} \cdot Pr^{1/3} \left(\frac{\mu_b}{\mu_w}\right)^{0,14}$$

dengan $N$ adalah kecepatan putaran impeller (rpm), $D_i$ diameter impeller, $\mu_b$ dan $\mu_w$ viskositas slurry bulk dan viskositas pada dinding. Korelasi ini relevan untuk memprediksi laju deposisi partikel yang berkontribusi pada formasi kerak primer.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Pengendalian Autoclave

Implementasi SOP mitigasi scaling mengikuti pendekatan berlapis yang diuraikan oleh Dickson et al. (2026):

1. **Karakterisasi Bijih Umpan (Feed Characterisation)** — Penentuan komposisi mineralogi menggunakan XRD (X-Ray Diffraction) dan XRF untuk mengukur rasio goethit/hematit, kandungan MgO (target <5%), serta konsentrasi sulfur awal. Bijih dengan rasio goethit/limonit tinggi memiliki potensi scaling lebih besar.

2. **Pretreatment Bijih (Berdasarkan Andrameda et al., 2024)** — Aplikasi *roasting-reduction* pada suhu 600–900 °C dengan reduktan (batubara/coke) dan agen desulfurisasi seperti CaO atau Na₂CO₃ untuk mengikat sulfur sebagai sulfida stabil. Andrameda et al. (2024) melaporkan bahwa penambahan 5% CaO dan waktu roasting 90 menit pada 750 °C menurunkan kadar sulfur residu HPAL hingga 78% dan mengurangi insidensi scaling sebesar 22%.

3. **Parameter Operasi HPAL** — Kontrol suhu (250 ± 5 °C), tekanan (40 ± 2 bar), konsentrasi asam sulfat bebas (40–55 g/L), dan *pulp density* (28–32% solids). Variabel-variabel ini merupakan Parameter Kritis Proses (PKP) yang memerlukan sistem Distributed Control System (DCS) real-time.

4. **Sampling dan Karakterisasi Kerak** — Pengambilan sampel kerak menggunakan *core drill sampling* pada posisi koil pemanas, baffle, dan dinding bawah. Karakterisasi dilakukan melalui SEM-EDS untuk morfologi dan komposisi, XRD untuk fasa kristalin, dan TGA-DSC untuk stabilitas termal.

5. **Acid Wash Descaling** — Prosedur pembersihan dengan larutan H₂SO₄ 10–15% pada suhu 80–95 °C selama 12–24 jam, diikuti rinse dengan air demineralisasi. SOP ini wajib mengikuti standar NACE SP0178 dan ISO 8501 untuk proteksi permukaan baja setelah cleaning.

### 3.2 Diagram Alir Proses

Diagram alir proses terintegrasi mencakup: Feed Receiving → Size Reduction (P80 = 75 µm) → Slurry Mixing (H₂SO₄) → Pre-heating (3 stage) → Autoclave HPAL (6–4 compartment) → Flash Cooling → CCD Counter-Current Decantation → Neutralization → Precipitation (NiS/MSP). Loop umpan balik dari sistem monitoring scaling ke unit kontrol pretreatment menjadi arsitektur *process intensification* modern.

### 3.3 Sistem Monitoring In-situ

Pemasangan *heat flux sensor* dan *corrosion probe* (Linear Polarization Resistance) pada dinding autoclave memungkinkan prediksi pertumbuhan kerak secara real-time melalui model *soft sensor* yang dikalibrasi terhadap data historis. Algoritma *model predictive control* (MPC) menghitung kecepatan growth rate $\frac{d\delta}{dt}$ dan memicu *acid wash cycle* secara otomatis ketika ketebalan kritis terlampaui (Dickson et al., 2026).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Pabrik HPAL

Ambil contoh fasilitas HPAL dengan kapasitas olah 5.000 tpd bijih laterit (kadar 1,3% Ni). Parameter operasi:

- Suhu operasi: $T = 255$ °C
- Tekanan operasi: $P =