# 1821 — Karakterisasi Perilaku Scaling Autoclave pada Pelindian Bijih Nikel Laterit Kondisi HPAL: Kinetika Pembentukan Kerak, Penurunan Perpindahan Panas, dan Optimasi Desulfurisasi Residu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural yang dipicu oleh permintaan baterai kendaraan listrik (EV) yang diproyeksikan tumbuh pada Compound Annual Growth Rate (CAGR) lebih dari 19% hingga 2030. Dari total cadangan nikel dunia yang mencapai sekitar *300 juta ton Ni logam*, bijih nikel laterit (limonit dan saprolit) menyumbang sekitar 70%, namun hanya menyumbang sekitar 40% produksi nikel primer karena kompleksitas metalurginya. High-Pressure Acid Leaching (HPAL) merupakan teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit limonitik pada suhu 240–270 °C dan tekanan 40–55 bar dengan konsumsi asam sulfat 350–500 kg H₂SO₄ per ton bijih. Namun, efisiensi HPAL sangat terganggu oleh fenomena *autoclave scaling* — terbentuknya lapisan kerak anorganik pada dinding bagian dalam autoclave yang menurunkan koefisien perpindahan panas secara drastis, meningkatkan konsumsi asam 10–20%, dan memaksa *shut-down* pembersihan setiap 30–90 hari operasi.

Dickson, Deleau, dan Espitalier (2026) dalam jurnal *Cleaner Waste Systems* (DOI: 10.1016/j.clwas.2026.100503) menyoroti bahwa perilaku scaling merupakan *bottleneck* keberlanjutan operasi HPAL modern, khususnya karena deposit kerak yang bersifat multi-fasa (campuran jarosite, alunite, hematit, dan gipsum) sulit dihilangkan melalui metode pembersihan konvensional. Studi mereka mengkuantifikasi laju pertumbuhan kerak, komposisi mineralogi, dan parameter operasional kritis (suhu, konsentrasi asam, laju alir slurry) yang mengendalikan deposisi. Sementara itu, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: 10.1063/5.0186417) melengkapi perspektif tersebut dengan menyelidiki efek *desulfurization agent*, suhu, dan waktu *roasting-reduction* terhadap residu HPAL — suatu pendekatan *circular economy* untuk memitigasi limbah sekaligus回收 logam yang terperangkap dalam kerak dan residu. Keduanya membentuk kerangka referensi yang penting bagi insinyur industri yang mengelola operasi HPAL dalam skala *greenfield project* maupun *brownfield optimization*.

Urgensi teknis dan ekonomi dari karakterisasi scaling tampak pada tiga metrik kunci: (i) *unscheduled downtime* yang bernilai USD 50.000–150.000 per hari pada fasilitas HPAL 40.000 ton Ni/tahun; (ii) degradasi koefisien perpindahan panas keseluruhan (U) sebesar 35–60% setelah 1.500 jam operasi; dan (iii) peningkatan Specific Acid Consumption (SAC) akibat asam sulfat yang terjebak di dalam matriks kerak berpori. Tanpa rekayasa kontrol dan mitigasi yang berbasis data kuantitatif, *Net Present Value* (NPV) proyek HPAL dapat turun 15–25%. Modul ini mengintegrasikan kedua literatur tersebut untuk membangun kerangka analitis dan prosedural yang applicable dalam konteks *plant engineering*, *process optimization*, dan *risk management* fasilitas HPAL.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan perilaku scaling pada autoclave HPAL memerlukan integrasi tiga kerangka matematis: (i) kinetika pelindian *shrinking core*, (ii) kinetika pengendapan/presipitasi kerak, dan (iii) penurunan perpindahan panas akibat fouling. Bagian ini menyusun formulasi yang relevan dengan temuan Dickson et al. (2026) dan Andrameda et al. (2024).

### 2.1 Kinetika Pelindian — Shrinking Core Model

Untuk partikel bijih laterit berbentuk sferis, model inti menyusut (*shrinking unreacted core*) menggambarkan konversi fraksional $X$ terhadap waktu $t$ melalui kontrol difusi atau reaksi kimia permukaan:

$$1 - (1 - X)^{1/3} = \frac{k_s \cdot C_A^n}{\rho_B \cdot r_0} \cdot t \quad \text{(kontrol reaksi kimia)}$$

$$\frac{t}{\tau} = 1 - 3(1 - X)^{2/3} + 2(1 - X) \quad \text{(kontrol difusi lapisan kerak)}$$

di mana $k_s$ adalah konstanta kecepatan reaksi intrinsik (m/s), $C_A$ konsentrasi reaktan (asam sulfat, mol/L), $n$ orde reaksi (≈1,5 untuk pelindian nikel laterit), $\rho_B$ densitas bulk bijih, dan $r_0$ jari-jari awal partikel. Konstanta $k_s$ mengikuti persamaan Arrhenius:

$$k_s = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan energi aktivasi tipikal $E_a \approx 60\text{–}85\ \text{kJ/mol}$ untuk pelindian nikel dari limonit, $R = 8{,}314\ \text{J/(mol·K)}$, dan $T$ suhu absolut (K). Pada suhu operasi $T = 543\ \text{K}$ (270 °C), laju pelindian Ni dapat mencapai 95% dalam 60–90 menit.

### 2.2 Kinetika Pembentukan Kerak (Scale Formation)

Dickson et al. (2026) memodelkan laju deposisi kerak $\dot{m}_{scale}$ (kg/m²·jam) sebagai fungsi *supersaturation* lokal $S$ dan fluks perpindahan panas lokal $q$:

$$\dot{m}_{scale} = k_p \cdot (S - 1)^{m} \cdot \exp\left(-\frac{E_{p}}{R \cdot T}\right) \cdot f(q)$$

di mana $k_p$ adalah konstanta presipitasi, $m \approx 2$ orde terhadap *supersaturation*, $E_p \approx 40\ \text{kJ/mol}$ energi aktivasi presipitasi, dan $f(q)$ adalah fungsi tambahan yang menjelaskan efek thermal gradient — biasanya $f(q) \propto q^{0{,}5}$ karena *local evaporation* di dinding autoclave memicu *salting-out* ion sulfat dan aluminum.

*Supersaturation* didefinisikan:

$$S = \frac{Q}{K_{sp}} = \frac{a_{Al^{3+}}^2 \cdot a_{SO_4^{2-}}^3}{K_{sp}(\text{Al(OH)}_3)}$$

Untuk jarosite $\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$, konstanta kelarutan $K_{sp}$ sangat dipengaruhi suhu, dan penurunan suhu 10 °C dari *set-point* operasi dapat meningkatkan $S$ hingga 1,8 kali, melipatgandakan laju deposisi.

### 2.3 Degradasi Perpindahan Panas — Model Fouling

Ketebalan kerak $\delta_{scale}(t)$ tumbuh mengikuti:

$$\delta_{scale}(t) = \delta_0 + \int_0^t \dot{m}_{scale} \cdot \rho_{scale}^{-1} \, dt' \approx \delta_0 + k_d \cdot t^{0{,}7}$$

dengan densitas kerak rata-rata $\rho_{scale} \approx 1.800\ \text{kg/m}^3$ dan $k_d$ koefisien fouling empiris (m/jam⁰·⁷). Koefisien perpindahan panas keseluruhan $U(t)$ mengalami degradasi sesuai model resistansi seri:

$$\frac{1}{U(t)} = \frac{1}{h_i} + \frac{\delta_w}{k_w} + \frac{\delta_{scale}(t)}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ koefisien konveksi internal/eksternal, $\delta_w$ tebal dinding autoclave baja komposit (≈80 mm), $k_w$ konduktivitas baja (≈45 W/m·K), dan $k_{scale}$ konduktivitas termal kerak yang rendah (≈0,4–1,2 W/m·K untuk kerak hematit-jarosit). Pada $\delta_{scale} = 5\ \text{mm}$, kontribusi resistansi kerak mencapai 60–75% dari total, menjelaskan degradasi $U$ yang terukur di lapangan.

### 2.4 Keseimbangan Massa dan Neraca Asam

Konsumsi asam sulfat spesifik (*Specific Acid Consumption*, SAC) dirumuskan:

$$\text{SAC} = \frac{\dot{m}_{H_2SO_4,feed} - \dot{m}_{H_2SO_4,free}}{\dot{m}_{ore}} \quad (\text{kg H}_2\text{SO}_4/\text{ton ore})$$

yang dipengaruhi langsung oleh komposisi mineralogi bijih, suhu, dan — sebagaimana ditunjukkan Andrameda et al. (2024) — oleh *desulfurization agent* pada proses lanjutan residu yang dapat memulihkan 8–14% asam terikat dalam kerak dan residu.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis untuk memitigasi dan mengkarakterisasi scaling autoclave HPAL mengikuti kerangka *Plan–Do–Check–Act* (PDCA) yang diadaptasi dari standar *Process Safety Management* (PSM) ASME dan referensi Dickson et al. (2026). Diagram alir prosedur rekayasa disajikan sebagai berikut:

```
┌─────────────────────────────────────────────────────────────┐
│ FASE A: PRE-STARTUP CHARACTERIZATION (T₀)                   │
│ ├─ Analisis XRD bijih feed (mineralogi laterit)             │
│ ├─ Penentuan baseline scaling rate via pilot autoclave      │
│ └─ Kalibrasi instrumentasi TI/PI/FT/AT                      │
├─────────────────────────────────────────────────────────────┤
│ FASE B: OPERATIONAL MONITORING (Continuous)                 │
│ ├─ Sampling slurry setiap 4 jam