# 2397 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

High-Pressure Acid Leaching (HPAL) merupakan teknologi hidrometalurgi utama untuk mengekstraksi nikel dan kobalt dari bijih nikel laterit kadar rendah (limonit dan saprolit dengan kadar Ni umumnya < 1,5 %). Sejak komersialisasi penuh pada akhir 1990-an melalui fasilitas seperti Murrin Murrin (Australia), Goro (Kaledonia Baru), Coral Bay (Filipina), dan Taganito (Indonesia), HPAL telah menjadi tulang punggung rantai pasok nikel baterai kelas 1 (*Class I Ni*) yang menjadiinput utama prekursor katoda NCM/NCA untuk baterai kendaraan listrik. Pada proses ini, slurry bijih dicampur dengan asam sulfat (H₂SO₄) konsentrasi 200–400 g/L dan dipanaskan hingga 240–270 °C di dalam autoclave pada tekanan uap jenuh 35–55 bar, sebagaimana didokumentasikan secara luas dalam literatur hidrometalurgi dan dirujuk dalam kerangka studi Dickson, Deleau, dan Espitalier (2026) pada *Cleaner Waste Systems* (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan kritis yang dibahas dalam naskah tersebut adalah perilaku pembentukan *kerak* (*autoclave scaling*) yang terjadi pada dinding, agitator, dan pipa internal autoclave. Kerak ini terutama terdiri atas campuran silika amorf (SiO₂·nH₂O), hematit/magnetit (Fe₂O₃/Fe₃O₄), sulfat basa besi seperti butlerite [Fe(OH)SO₄·2H₂O], jarosit [KFe₃(SO₄)₂(OH)₆], dan magnesium sulfat (MgSO₄·nH₂O). Studi Andrameda, Triaswinanti, dan Madra (2024) pada *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) turut menegaskan bahwa residu HPAL masih mengandung sulfat dan besi oksida yang sulit dipisahkan tanpa agen desulfurisasi dan proses *roasting-reduction* lanjutan.

Urgensi ekonomi dan teknis dari masalah kerak ini sangat tinggi. Pada operasi HPAL industri, lapisan kerak dengan tebal 5–50 mm dapat menurunkan efisiensi perpindahan panas hingga 30–60 %, meningkatkan konsumsi energi spesifik (SPE) dari baseline ± 1,2 GJ/ton bijih menjadi ± 1,8 GJ/ton bijih, serta memaksa *shut-down* tak terencana (*unplanned downtime*) setiap 6–18 bulan untuk *descaling* mekanik dan kimia. Secara agregat, biaya *maintenance* kerak autoclave dapat mencapai 8–15 % dari total biaya operasional (OPEX) pabrik HPAL. Dalam konteks industri baterai global yang diproyeksikan tumbuh 18–22 % CAGR hingga 2030, pengendalian kerak bukan sekadar persoalan teknis melainkan juga *enabler* keberlanjutan rantai pasok nikel.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Nikel Laterit (Shrinking Core Model)

Pelindian partikel bijih laterit dapat dimodelkan dengan *shrinking core model* (SCM) dengan kontrol difusi melalui lapisan *ash* tak reaktif:

$$1 - \frac{2}{3}X - (1-X)^{2/3} = \frac{k_s \cdot C_{H^+} \cdot t}{\rho_s \cdot r_0^2}$$

di mana $X$ adalah fraksi nikel terlarut, $k_s$ adalah konstanta laju difusi solid ($m^2/s$), $C_{H^+}$ adalah konsentrasi asam sulfat efektif ($mol/m^3$), $t$ adalah waktu tinggal (s), $\rho_s$ adalah densitas partikel, dan $r_0$ adalah jari-jari awal partikel. Model ini relevan karena mengkuantifikasi bagaimana kondisi operasi (suhu, konsentrasi asam) menentukan *yield* Ni sebelum *scaling* sempat merusak performa autoclave.

### 2.2 Dependensi Suhu — Persamaan Arrhenius

Laju pelindian dan laju nukleasi kerak keduanya mengikuti hukum Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (kJ/mol — untuk pelindian Ni laterit biasanya 50–85 kJ/mol), $R = 8{,}314 \times 10^{-3}$ kJ/(mol·K), dan $T$ suhu absolut (K). Untuk reaksi pembentukan kerak hematit, $E_a$ berkisar 35–55 kJ/mol, menunjukkan bahwa kenaikan suhu mempercepat *scaling* hampir secepat pelindian, sehingga *sweet-spot* operasional harus dioptimasi.

### 2.3 Kinetika Pertumbuhan Kerak

Pertumbuhan ketebalan kerak $\delta(t)$ mengikuti model paralel antara transport dan reaksi permukaan:

$$\frac{d\delta}{dt} = \frac{k_m (C_{sat} - C_b)^n}{\rho_{scale}}$$

dengan $k_m$ koefisien transfer massa, $C_{sat}$ dan $C_b$ berturut-turut konsentrasi jenuh dan konsentrasi bulk zat pembentuk kerak, $n$orde reaksi (umumnya 1–2), dan $\rho_{scale}$ densitas kerak. Pada autoclave HPAL, kombinasi perpindahan panas konveksi-paksa dan gradien konsentrasi mendorong deposisi partikel koloid SiO₂ dan kristalisasi sulfat basa di permukaan logam.

### 2.4 Korelasi Perpindahan Panas dengan Fouling

Resistansi termal total dinding autoclave menjadi:

$$R_{total} = R_{metal} + R_{scale} + R_{film} = \frac{1}{h_i \cdot A_i} + \frac{\delta}{\lambda_{scale} \cdot A} + \frac{1}{h_o \cdot A_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal (slurry) dan eksternal (steam heating), $\lambda_{scale}$ konduktivitas termal kerak (umumnya 0,4–1,2 W/(m·K) untuk kerak Si–Fe oksida — jauh lebih rendah dari baja autoclave $\lambda_{steel} \approx 45$ W/(m·K)). Fouling factor kemudian didefinisikan sebagai:

$$R_f = \frac{U_{clean} - U_{fouled}}{U_{clean}} \times 100\%$$

yang menjadi indikator kunci degradasi performa termal autoclave. Formulasi ini banyak digunakan dalam literatur *process engineering* yang dirujuk oleh Dickson dkk. (2026) untuk mengkuantifikasi dampak operasional kerak.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dengan Mitigasi Scaling

Diagram alir logis proses lengkap (Gambar 1 dalam versi cetak) mengikuti urutan: (1) *Repulping & Slurrying* bijih laterit kering dengan air proses pada solid loading 35–45 % w/w; (2) *Pre-heating* slurry hingga 180–200 °C di pre-heater shell-and-tube; (3) *Acid addition & main autoclave train* (4–6 kompartemen, $T = 240$–$270$ °C, $P = 35$–$55$ bar, residence time 30–90 menit); (4) *Flash let-down* ke tekanan atmosfer; (5) *CCD counter-current decantation* untuk pemisahan liquor pregnant dari residu; (6) *Neutralization & impurity removal* (Fe, Al, Cr) dengan limestone