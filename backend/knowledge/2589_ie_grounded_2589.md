# 2589 — Karakterisasi Perilaku Pembentukan Kerak (Scaling) pada Autoclave dalam Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel dan kobalt telah mengalami eskalasi masif seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi berbasis baterai lithium-ion. Bijih nikel laterit—yang menyumbang sekitar 70% dari cadangan nikel terrestre global—menjadi sumber daya strategis, namun pemrosesanannya menghadapi tantangan metalurgi yang signifikan karena kadar logam yang rendah (biasanya 1,0–1,8% Ni) dan kompleksitas mineraloginya yang didominasi oleh fase goethit (α-FeOOH), limonit, dan saprolit. Di antara berbagai rute hidrometalurgi, High-Pressure Acid Leaching (HPAL) diakui sebagai teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit kadar rendah, dengan operasi pada suhu 240–270 °C dan tekanan 30–50 bar menggunakan asam sulfat pekat (Dickson, Deleau, & Espitalier, 2026).

Namun, keunggulan teknis HPAL terbayar oleh satu masalah operasional kronis: pembentukan kerak (*scaling*) pada dinding bagian dalam, pipa, dan komponen agitator autoclave. Dickson dkk. (2026) dalam *Cleaner Waste Systems* mendokumentasikan bahwa fenomena *scaling* menyebabkan kerugian efisiensi perpindahan panas, peningkatan konsumsi asam, dan—yang paling kritis—*unplanned downtime* yang menurunkan *overall equipment effectiveness* (OEE) instalasi HPAL hingga 8–15%. Karakterisasi senyawa kerak yang diidentifikasi oleh penulis menunjukkan dominasi fase hematit (Fe₂O₃), jarosit (KFe₃(SO₄)₂(OH)₆), alunit, dan endapan basa aluminium serta magnesium sulfat yang terbentuk melalui mekanisme presipitasi balik ketika larutan jenuh keluar dari zona reaksi (Dickson dkk., 2026).

Secara ekonomis, satu siklus *shutdown* terjadwal untuk *de-scaling* mekanis dan kimiawi pada autoclave HPAL berkapasitas 50.000 ton nikel per tahun dapat menimbulkan kerugian opportunity cost mencapai USD 3–5 juta per minggu karena kehilangan produksi. Studi komplementer Andrameda, Triaswinanti, dan Madra (2024) menyoroti bahwa pre-treatment bijih melalui proses *roasting-reduction* dengan penambahan agen desulfurisasi mampu memodifikasi mineralogi umpan (menghemat tekanan operasi dan konsumsi reagen), sehingga secara tidak langsung menekan laju akresi kerak pada autoclave hilir. Sinergi kedua literatur ini memberikan landasan bahwa pengelolaan *scaling* bukan sekadar masalah pemeliharaan, melainkan isu rekayasa proses integral yang menentukan kelayakan ekonomi proyek HPAL.

Konteks geostrategis Indonesia—sebagai produsen nikel laterit terbesar dunia dengan kapasitas HPAL yang terus berkembang di Morowali, Halmahera, dan Sulawesi Tenggara—menjadikan masalah *scaling* ini semakin relevan. Tanpa mitigasi yang bersifat prediktif dan berbasis karakterisasi kuantitatif, setiap *ramp-up* kapasitas HPAL nasional akan terjebak pada *debottlenecking* yang mahal. Oleh karena itu, modul ini disusun untuk membedah perilaku *scaling* secara termodinamika, kinetika, dan rekayasa sistem sesuai kontribusi Dickson dkk. (2026) yang diperkuat dengan pendekatan pre-treatment Andrameda dkk. (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Pembentukan Kerak

Dickson dkk. (2026) mengidentifikasi tiga mekanisme simultan yang governs akresi kerak pada autoclave HPAL: (i) presipitasi kimiawi senyawa Fe(III) dan Al(III) dari larutan lewat-jenuh, (ii) deposisi partikulat suspensi melalui gaya sentrifugal dan gravitasi, serta (iii) kristalisasi permukaan terkatalis oleh kekasaran substrat logam. Kinetika pertumbuhan ketebalan kerak $\delta(t)$ dapat dimodelkan dengan persamaan diferensial orde pertama terkoreksi Arrhenius:

$$\frac{d\delta}{dt} = k_0 \exp\left(-\frac{E_a}{RT}\right) \cdot \left(C_{sat} - C_{bulk}\right)^n$$

dengan $k_0$ adalah konstanta pre-eksponensial (m·s⁻¹), $E_a$ adalah energi aktivasi (J·mol⁻¹), $R$ adalah konstanta gas universal (8,314 J·mol⁻¹·K⁻¹), $T$ adalah suhu operasi absolut (K), $C_{sat}$ dan $C_{bulk}$ berturut-turut adalah konsentrasi jenuh dan konsentrasi aktual dalam *bulk fluid* (mol·L⁻¹), serta $n$ adalah orde reaksi presipitasi (umumnya 1–2 untuk sistem sulfat kompleks).

### 2.2 Neraca Perpindahan Panas dengan Fouling

Efek paling langsung dari kerak adalah degradasi koefisien perpindahan panas menyeluruh $U$ yang didefinisikan oleh resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{scale}}{k_{scale}} + \frac{x_{wall}}{k_{steel}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi sisi dalam dan luar (W·m⁻²·K⁻¹), $\delta_{scale}$ adalah ketebalan kerak rata-rata, $k_{scale}$ adalah konduktivitas termal kerak (umumnya 0,4–1,8 W·m⁻¹·K⁻¹ untuk komposit Fe₂O₃–Al₂O₃), $x_{wall}$ adalah tebal dinding autoclave (umumnya 0,06–0,10 m baja karbon berlapis *rubber-lined* atau titanium), dan $k_{steel}$ ≈ 45 W·m⁻¹·K⁻¹.

### 2.3 Model Kinetika Leaching yang Dipengaruhi Kerak

Karena kerak bertindak sebagai *diffusion barrier* tambahan di sekitar pipa pemanas dan permukaan perpindahan panas, Andrameda dkk. (2024) mengadaptasi model *shrinking core* yang dimodifikasi dengan lapisan kerak:

$$1 - (1-X_{Ni})^{1/3} = \frac{k_c \cdot C_{H_2SO_4}^m}{\rho_p \cdot r_p^2 (1 + \beta \cdot \delta_{scale})} \cdot t$$

dengan $X_{Ni}$ adalah fraksi nikel terlarut, $k_c$ adalah konstanta kinetika (m·s⁻¹), $C_{H_2SO_4}$ adalah konsentrasi asam bebas, $\rho_p$ densitas partikel, $r_p$ jari-jari partikel, $\beta$ adalah koefisien resistansi kerak, dan $t$ adalah waktu tinggal.

### 2.4 Indeks Kritis Penentuan Jadwal De-scaling

Untuk operasional, *critical scale thickness* $\delta_{crit}$ yang memicu keputusan *shut-down* pemeliharaan didefinisikan ketika fluks panas turun di bawah ambang desain:

$$\delta_{crit} = k_{scale} \left( \frac{1}{U_{min}} - \frac{1}{U_{clean}} \right)$$

dengan $U_{min}$ adalah koefisien minimum yang masih memenuhi target laju pemanasan slurry, dan $U_{clean}$ adalah koefisien pada kondisi autoclave bersih pasca *de-scaling*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Rekayasa Mitigasi Scaling

Dickson dkk. (2026) mengusulkan kerangka *Scaling Management Framework* empat lapis yang dapat diadopsi sebagai SOP industri:

```
┌──────────────────────────────────────────────────────────────┐
│  LAPIS 1: PRE-TREATMENT UMPAN (Pre-Leaching Conditioning)  │
│  • Desulfurization agent (Andrameda dkk., 2024)             │
│  • Roasting-reduction (T = 600–900 °C, t = 30–90 min)      │
│  • Penghilangan MgO & karbonat aktif                        │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  LAPIS 2: PENGENDALIAN KIMIAWI DALAM AUTOCLAVE              │
│  • Injeksi seed hematit untuk mengendalikan supersaturasi    │
│  • Kontrol rasio Fe³⁺/Fe_total (target 0,85–0,92)           │
│  • Optimasi dosis asam berlebih (excess 5–8%)               │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  LAPIS 3: PEMANTAUAN & DIAGNOSTIK REAL-TIME                │
│  • Heat flux sensor di setiap kompartemen                    │
│  • Pressure differential monitoring (ΔP)                     │
│  • Sampling kerak periodik + XRD/SEM-EDX characterization   │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  LAPIS 4: MAINTENANCE & DECOMMISSIONING WINDOW              │
│  • Mechanical de-scaling (hydrolancing 200–300 bar)         │
│  • Chemical cleaning (inhibited HCl/HF sequence)            │
│  • Post-cleaning inspection (UT thickness gauge)            │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Standar Pengukuran Karakteristik Kerak

1. **Sampling Lokasi**: Ambil kerak dari empat zona autoclave (kompartemen 1–4) pada posisi jam 12, 3, 6, dan 9 untuk memetakan profil circumferential.
2. **Karakterisasi Mineralogi**: Analisis XRD dengan $\mathrm{CuK_\alpha}$ ($\lambda = 1{,}5406$ Å) pada rentang $2\theta = 5°–80°$ step 0,02° untuk identifikasi fase.
3. **Analisis Morfologi**: SEM-EDX pada perbesaran 500–5000× untuk menentukan kom