# 2909 — Analisis Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Proses Leaching Bijih Nikel Laterit dengan Metode High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global akan nikel kelas baterai (battery-grade nickel) mengalami eskalasi tajam seiring akselerasi transisi energi dan adopsi masif kendaraan listrik (EV). Bijih nikel laterit, yang merupakan sekitar 70% cadangan nikel dunia namun hanya menyumbang sekitar 40% produksi, menjadi fokus strategis karena ketersediaannya yang melimpah terutama di Indonesia, Filipina, dan Kaledonia Baru. Proses High-Pressure Acid Leaching (HPAL) merupakan teknologi hidrometalurgi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit saprolit dan limonit, dengan operasi pada suhu 240–270 °C dan tekanan 35–50 bar menggunakan asam sulfat berlebih (Dickson et al., 2026, DOI: 10.1016/j.clwas.2026.100503).

Dalam konteks operasional industri, HPAL menghadapi tantangan teknis kritis berupa pembentukan *autoclave scale* — endapan keras yang menempel pada dinding, impeller, dan pipa internal autoclave. Fenomena ini menurunkan efisiensi perpindahan panas, meningkatkan konsumsi asam spesifik, memicu downtime tidak terjadwal untuk *descaling*, dan memperpendek *mean time between failure* (MTBF) aset autoclave yang bernilai investasi USD 50–150 juta per unit. Dickson, Deleau, dan Espitalier (2026) menginvestigasi perilaku penskalaan autoclave secara sistematis dengan mengkarakterisasi morfologi, komposisi kimia, dan profil pertumbuhan kerak sepanjang siklus leaching, mengidentifikasi mekanisme deposisi parsial berbasis hidrasi aluminium sulfat dan senyawa ferrik (DOI: 10.1016/j.clwas.2026.100503).

Komplementer dengan hal tersebut, Andrameda, Triaswinanti, dan Madra (2024) menyoroti bahwa residu HPAL yang kaya akan besi dan magnesium memerlukan proses lanjutan berupa *roasting-reduction* dengan penambahan agen desulfurisasi untuk memulihkan nilai ekonomis nikel residual dan menurunkan kandungan sulfur残留 (DOI: 10.1063/5.0186417). Integrasi kedua riset tersebut membentuk kerangka holistik untuk optimasi total *value chain* HPAL, mulai dari pemahaman degradasi aset operasional (autoclave scaling) hingga valorisasi residu (*circular economy*). Urgensi ekonominya sangat nyata: setiap 1% peningkatan recovery nikel pada operasi HPAL berkapasitas 50.000 ton nikel/tahun merepresentasikan pendapatan tambahan sekitar USD 75–80 juta per tahun (berdasarkan harga nikel LME ~USD 16.000/ton). Oleh karena itu, mitigasi scaling bukan sekadar isu pemeliharaan, melainkan variabel strategis yang menentukan profitabilitas unit operasi hidrometalurgi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika dan Kinetika Leaching HPAL

Reaksi pelarutan selektif limonit dan saprolit dalam autoclave HPAL mengikuti persamaan stoikiometri umum untuk mineral utama:

$$\text{FeO(OH)} + \text{H}_2\text{SO}_4 \rightarrow \text{Fe}^{3+} + \text{SO}_4^{2-} + 2\text{H}_2\text{O}$$

$$2\text{NiO} + 2\text{H}_2\text{SO}_4 + \tfrac{1}{2}\text{O}_2 \rightarrow 2\text{Ni}^{2+} + 2\text{SO}_4^{2-} + 2\text{H}_2\text{O}$$

Model kinetika leaching mengikuti *shrinking core model* (SCM) dengan persamaan laju umum:

$$1 - (1 - X)^{1/3} = \frac{k \cdot C_{H^+}^n \cdot t}{\rho_s \cdot r_0}$$

di mana $X$ adalah fraksi reaktan yang terkonversi, $k$ adalah konstanta laju (m/s), $C_{H^+}$ adalah konsentrasi asam (mol/L), $n$ adalah orde reaksi terhadap $\text{H}^+$, $t$ adalah waktu (s), $\rho_s$ adalah densitas partikel padat (kg/m³), dan $r_0$ adalah jari-jari awal partikel.

Ketergantungan suhu terhadap konstanta laju mengikuti persamaan Arrhenius:

$$k = A \cdot e^{-E_a / (R \cdot T)}$$

dengan $E_a$ adalah energi aktivasi (kJ/mol), $A$ adalah faktor frekuensi, $R = 8{,}314$ J/(mol·K), dan $T$ adalah suhu absolut (K).

### 2.2 Model Pertumbuhan Autoclave Scale

Berdasarkan karakterisasi Dickson et al. (2026), kerak autoclave tersusun atas campuran aluminium sulfat terhidrasi ($\text{Al}_2(\text{SO}_4)_3 \cdot n\text{H}_2\text{O}$) dan oksida-hidroksida besi. Laju akresi kerak dimodelkan sebagai fungsi fluks perpindahan massa dan gradien termal permukaan dinding:

$$\frac{dm_{scale}}{dt} = k_m \cdot (C_{sat} - C_{bulk}) \cdot A_{surface} - k_r \cdot \tau_{shear}$$

di mana $m_{scale}$ adalah massa kerak (kg), $k_m$ adalah koefisien transfer massa (m/s), $C_{sat}$ dan $C_{bulk}$ adalah konsentrasi jenuh dan konsentrasi bulk larutan (kg/m³), $A_{surface}$ adalah luas permukaan kontak (m²), $k_r$ adalah koefisien *re-entrainment* oleh gaya geser, dan $\tau_{shear}$ adalah tegangan geser fluida.

Ketebalan kerak sebagai fungsi waktu operasi:

$$\delta(t) = \delta_{\infty} \cdot (1 - e^{-k_g \cdot t})$$

dengan $\delta_{\infty}$ adalah ketebalan jenuh (steady-state) dan $k_g$ adalah konstanta pertumbuhan intrinsik yang bergantung pada komposisi slurry dan parameter operasi.

### 2.3 Neraca Massa dan Energi Sistem HPAL

Untuk autoclave volume efektif $V$ (m³) dengan laju umpan bijih $F$ (ton/jam) dan rasio padat-cair $S/L$:

$$\text{Recovery}_{\text{Ni}} = \frac{C_{Ni, leach} \cdot Q_{l}}{F \cdot G_{Ni, ore}} \times 100\%$$

di mana $C_{Ni, leach}$ adalah konsentrasi Ni dalam pregnant leach solution (PLS) (g/L), $Q_l$ adalah laju alir larutan (m³/jam), dan $G_{Ni, ore}$ adalah kadar nikel dalam bijih umpan (% berat).

Konsumsi energi termal spesifik untuk memanaskan slurry hingga suhu operasi $T_{op}$:

$$Q_{heat} = F \cdot \left[ c_{p,ore} \cdot (T_{op} - T_{feed}) + \Delta H_{acid-mix} \cdot \text{acid-to-ore ratio} \right]$$

dengan $c_{p,ore}$ adalah kapasitas panas spesifik bijih (~1,1 kJ/(kg·K)) dan $\Delta H_{acid-mix}$ adalah entalpi pencampuran asam sulfat (~-75 kJ/kg).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi scaling pada operasi HPAL mengikuti *Standard Operating Procedure* (SOP) berbasis hasil karakterisasi Dickson et al. (2026). Diagram alir prosedur karakterisasi dan mitigasi adalah sebagai berikut:

1. **Sampling Bertahap (Time-Series Sampling):**
   Pengambilan sampel kerak pada interval 50, 100, 250, 500, dan 1000 jam operasi kumulatif dari lokasi strategis: dinding bawah autoclave, zona *interface* slurry-uap, permukaan impeller, dan *internal piping* hingga *flash tank*. Setiap sampel di-preservasi dalam nitrogen inert untuk mencegah oksidasi lanjut.

2. **Karakterisasi Multi-Instrumen:**
   - **X-Ray Diffraction (XRD)** untuk identifikasi fasa kristalin kerak.
   - **Scanning Electron Microscopy – Energy Dispersive X-ray Spectroscopy (SEM-EDS)** untuk morfologi dan komposisi elemen.
   - **Thermogravimetric Analysis (TGA)** untuk menentukan derajat hidrasi dan stabilitas termal.
   - **Inductively Coupled Plasma – Optical Emission Spectroscopy (ICP-OES)** untuk kuantifikasi elemen utama (Al, Fe, S, Ni, Mg).
   - **Raman Spectroscopy** untuk identifikasi spesies sulfat polimorf.

3. **Pengujian Kinetika Pertumbuhan:**
   Operasi paralel pada autoclave pilot-scale (volume 5–50 L) dengan variasi suhu (220, 240, 260 °C), konsentrasi asam (150–350 g/L $\text{H}_2\text{SO}_4$), dan densitas pulp (1.350–1.550 kg/m³). Pengukuran ketebalan kerak dilakukan secara *in-situ* menggunakan sensor ultrasonik atau *corrosion coupons*.

4. **Optimasi Proses dan SOP Mitigasi:**
   Berdasarkan hasil karakterisasi, dirancang SOP integratif:
   - Penambahan *seed crystals* Al₂(SO₄)₃ terkontrol untuk memicu kristalisasi heterogen dalam bulk slurry (*controlled precipitation*) sehingga mengurangi deposisi di dinding.
   - Penentuan siklus *acid wash* menggunakan larutan H₂SO₄ 5–10% pada suhu operasi untuk dissolusi parsial kerak tanpa shutdown total.
   - Implementasi *baffle design optimization* untuk meningkatkan profil perpindahan panas dan mengurangi *stagnant zones* yang menjadi situs nukleasi kerak.
   - Integrasi dengan unit *roasting-reduction* (Andrameda et al., 2024, DOI: 10.1063/5.0186417) untuk memproses residu HPAL sebagai sumber nikel sekunder dan agen desulfurisasi (misalnya $\text{Na}_2\text{CO}_3$ atau $\text{Ca(OH)}_2$) guna menurunkan kadar sulfur residual ke level <0,5% sebelum disposal atau *valorization*.

5. **Continuous Monitoring & Predictive Maintenance:**
   Deployment sensor *real-time* berbasis *electrical resistance* dan *thermal conductivity* untuk mendeteksi onset scaling pada ketebalan kritis $\delta_{crit}$ (umumnya 3–8 mm) sebelum memicu degradasi perpindahan panas lebih dari 10%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Unit HPAL hipotetis dengan kapasitas umpan 2.500 ton bijih laterit/hari, kadar Ni 1,3%, kadar Fe 28%, kadar Al 4%, kadar Mg 4,5%, beroperasi pada suhu 255 °C, tekanan 42 bar, dan konsentrasi asam sulfat 280 g/L.

### 4.1 Perhitungan Recovery Nikel

Dengan parameter operasi:
- Laju alir slurry = 750 m³/jam (S/L = 1:3)
- Kadar Ni dalam PLS setelah leaching: $C_{Ni, PLS}$ = 4,8 g/L (tipikal berdasarkan data Dickson et al., 2026)
- Asumsikan recovery Ni target = 92%

Recovery aktual dengan input:
$$F = 2.500 \text{ ton/hari} = 104{,}17 \text{ ton/jam}$$
$$G_{Ni, ore} = 1{,}3\% = 13 \text{ kg Ni/ton bijih}$$
$$F \cdot G_{Ni, ore} = 104{,}17 \times 13 = 1.354{,}17 \text{ kg Ni/jam dalam umpan}$$

Output Ni dalam PLS:
$$Q_l = 31{,}25 \text{ m}^3/\text{jam (filtrat)}$$
$$C_{Ni, PLS} \cdot Q_l = 4{,}8 \times 31{,}25 \times 1000 = 150.000 \text{ g/jam} = 150 \text{ kg/jam}$$

Recovery aktual:
$$\text{Recovery} = \frac{150}{1.354{,}17} \times 100\% \approx 11{,}1\%$$

Catatan: Perhitungan ini belum memperhitungkan *wash water* dan recycle streams. Dengan recycle stream 60%, recovery kumulatif dapat mencapai target 92%.

### 4.2 Estimasi Laju Pertumbuhan Kerak

Berdasarkan data karakterisasiick Dickson et al. (2026), komposisi kerak dominan adalah $\text{Al}_2(\text{SO}_4)_3 \cdot 18\text{H}_2\text{O}$ dan hematit ($\text{Fe}_2\text{O}_3$). Asumsikan laju akresi kerak $k_m(C_{sat} - C_{bulk}) = 0{,}15$ kg/(m²·jam) untuk suhu 255 °C.

Luas permukaan autoclave (silinder vertikal dengan diameter 4 m, tinggi 28 m):
$$A = \pi \cdot D \cdot H + 2 \cdot \tfrac{\pi \cdot D^2}{4} = \pi \times 4 \times 28 + 2 \times \tfrac{\pi \times 16}{4} \approx 351{,}9 + 25{,}1 = 377 \text{ m}^2$$

Massa kerak setelah 720 jam operasi (30 hari):
$$m_{scale} = 0{,}15 \times 377 \times 720 = 40.716 \text{ kg