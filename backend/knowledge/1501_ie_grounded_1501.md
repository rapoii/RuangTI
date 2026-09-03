# 1501 — Rekayasa Autoclave HPAL untuk Pengolahan Bijih Nikel Laterit: Karakterisasi Pembentukan Kerak, Kinetika Pelindian, dan Optimalisasi Residu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions; Desulfurization and reduction treatment of HPAL nickel laterite residue
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) mengalami peningkatan eksponensial seiring akselerasi transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi stasioner. Data rantai pasok menunjukkan bahwa lebih dari 60% bijih nikel dunia berupa bijih laterit — sumber daya yang kompleks secara mineralogi dengan kadar Ni antara 0,8% hingga 1,8% — namun hanya dapat diekstraksi secara efisien melalui **High-Pressure Acid Leaching (HPAL)**. Teknologi HPAL beroperasi pada suhu 240–270 °C dengan tekanan 30–45 bar dalam autoclave baja karbon berlapis titanium atau komposit refraktori, menggunakan asam sulfat pekat sebagai agen pelindi utama. Dickson, Deleau, dan Espitalier (2026) menyoroti bahwa salah satu hambatan operasional paling kritis pada proses HPAL adalah pembentukan **kerak (scale/autoclave fouling)** pada dinding internal, koil pemanas, dan impeller, yang menurunkan koefisien perpindahan panas hingga 35–60% dan memaksa penghentian unit (*shut-down*) untuk de-scaling secara periodik (Dickson dkk., 2026, DOI: 10.1016/j.clwas.2026.100503).

Secara ekonomi, satu siklus shutdown tak terencana pada fasilitas HPAL berkapasitas 40.000 t Ni/tahun dapat menimbulkan kerugian produksi senilai USD 2–5 juta per kejadian, belum termasuk biaya mekanis dan kimiawi pembersihan. Kerak yang terbentuk pada autoclave HPAL terutama tersusun atas **hematit (Fe₂O₃), anhydrit (CaSO₄), alunit ((K,Na)Al₃(SO₄)₂(OH)₆), jarosit (KFe₃(SO₄)₂(OH)₆), serta basic ferric sulfate (Fe(OH)SO₄)** — semuanya merupakan produk samping dari hidrolisis Fe³⁺, presipitasi sulfat, dan reaksi netralisasi lokal di zona interfacial fluida-padatan-logam. Sementara itu, Andrameda, Triaswinanti, dan Madra (2024) melengkapi perspektif tersebut dengan meneliti proses *post-leaching* berupa perlakuan residu HPAL melalui **desulfurisasi dan roasting-reduction** untuk memulihkan logam残 serta mengurangi dampak lingkungan dari tailing asam (Andrameda dkk., 2024, DOI: 10.1063/5.0186417). Keduanya menjadi fondasi penting bagi perancangan **siklus tertutup (closed-loop)** yang kini menjadi prasyarat ESG (Environmental, Social, Governance) dalam industri metalurgi primer.

Urgensi rekayasa sistem industri pada konteks ini meliputi: (1) optimalisasi *uptime* autoclave yang kini berada di kisaran 78–85% untuk fasilitas mature menjadi target >92% melalui mitigasi kerak; (2) reduksi konsumsi asam spesifik (*specific acid consumption*, SAC) yang umumnya mencapai 350–500 kg H₂SO₄ per ton bijih; dan (3) integrasi unit desulfurisasi-residu untuk menurunkan *acid drainage potential* pada tailing disposal. Modul 1501 ini menyajikan kerangka kuantitatif dan prosedural untuk menjawab tantangan tersebut secara sistematis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pelindian HPAL

Reaksi utama pelindian nikel dari bijih laterit di autoclave HPAL mengikuti stoikiometri umum untuk limonit:

$$\text{NiO} \cdot \text{Fe}_2\text{O}_3 + 4\text{H}_2\text{SO}_4 \longrightarrow \text{NiSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

Secara termodinamika, keseimbangan diatur oleh potensial oksidasi Fe³⁺/Fe²⁺ yang dijaga pada $E_h \approx +900$ hingga +1100 mV melalui injeksi udara atau oksigen. Konstanta laju pelindian mengikuti model **shrinking-core** untuk mineralogi non-poros:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \cdot C_{H^+} \cdot t}{\rho_s \cdot r_0}$$

di mana $\alpha$ adalah konversi fraksional, $k_s$ konstanta laju intrinsik (m/s), $C_{H^+}$ konsentrasi asam (mol/m³), $\rho_s$ densitas padat (kg/m³), $r_0$ jari-jari awal partikel, dan $t$ waktu tinggal (s). Untuk mineral goethit (α-FeOOH) yang melimpah di laterit, laju disolusi mengikuti persamaan Arrhenius:

$$k_s = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A = 4{,}8 \times 10^5$ m/s, $E_a = 78{,}5$ kJ/mol untuk goethit, $R = 8{,}314$ J/(mol·K), dan $T$ dalam Kelvin (Dickson dkk., 2026).

### 2.2 Kinetika Pertumbuhan Kerak Autoclave

Kerak tumbuh melalui tiga mekanisme simultan: (i) **deposisi heterogen** partikel koloidal Fe₂O₃; (ii) **presipitasi permukaan** dari ion sulfat jenuh; dan (iii) **reaksi interfacial** antara dinding autoclave dan fluida proses. Laju pertumbuhan ketebalan kerak mengikuti model paralel:

$$\frac{d\delta}{dt} = k_{dep} \cdot C_{Fe}^{n} + k_{prec} \cdot \left(\frac{Q}{K_{sp}}\right) - k_{diss}$$

di mana $\delta$ ketebalan kerak (m), $k_{dep}$ konstanta deposisi (m/s), $C_{Fe}$ konsentrasi Fe total (kg/m³), $n \approx 1{,}2$–$1{,}8$ orde reaksi parsial, $Q$ ion activity product, $K_{sp}$ konstanta kelarutan, dan $k_{diss}$ laju disolusi balik (m/s). Untuk kerak alunit dan jarosit yang persisten, $k_{diss} \to 0$, sehingga pertumbuhan bersifat akumulatif.

Resistansi termal total dinding autoclave dengan kerak:

$$R_{total} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{wall}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ koefisien konveksi sisi dalam/luar (W/m²K), $k_{wall}$ dan $k_{scale}$ konduktivitas termal material, dengan tipikal $k_{scale}^{\text{alunit}} \approx 0{,}35$ W/m·K — jauh lebih rendah dari baja ($k_{wall} \approx 45$ W/m·K). Koefisien perpindahan panas efektif:

$$U_{eff} = \frac{1}{R_{total}}$$

menunjukkan degradasi $U_{eff}$ dari $\sim 850$ W/m²K (clean) menjadi $\sim 320$ W/m²K ketika $\delta_{scale} = 8$ mm.

### 2.4 Desulfurisasi dan Reduksi Residu

Andrameda dkk. (2024) memformulasikan efisiensi desulfurisasi residu HPAL menggunakan agen Na₂CO₃ melalui:

$$\text{FeSO}_4 + \text{Na}_2\text{CO}_3 \longrightarrow \text{FeCO}_3 + \text{Na}_2\text{SO}_4$$

$$\eta_{DS} = \frac{[S]_{initial} - [S]_{final}}{[S]_{initial}} \times 100\%$$

sedangkan reduksi karbotermik pada tahap *roasting-reduction*:

$$\text{NiO} + \text{C} \longrightarrow \text{Ni} + \text{CO}$$

dengan energi aktivasi $E_a = 142$ kJ/mol dan yield maksimum terjadi pada $T = 1100$–$1250$ °C selama 60–90 menit.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis unit HPAL yang tahan-kerak mengikuti arsitektur **5-Stage Process Control Loop** berikut:

```
┌──────────────────────────────────────────────────────────────┐
│  Tahap 1: Preparasi Slurry                                    │
│  → Penggilingan SAG mill (P₈₀ = 75 μm)                       │
│  → Pencampuran dengan recycle liquor (95–98% solids)         │
│  → Pre-heating hingga 180 °C (heat recovery)                  │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 2: Autoclave HPAL (Multi-compartment)                 │
│  → Compartemen 1: Pre-leach (T=180 °C, P=12 bar, τ=20 min)   │
│  → Compartemen 2: Main leach (T=250 °C, P=42 bar, τ=60 min)  │
│  → Compartemen 3: Post-leach (T=230 °C, P=38 bar, τ=20 min)  │
│  → Injeksi O₂ untuk menjaga Eh > +950 mV                     │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 3: CCD Thickener Train (7-stage counter-current)      │
│  → Pemisahan liquor pregnant dari residue padat               │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 4: Desulfurisasi & Roasting-Reduction Residu           │
│  → Reaktor desulfurisasi (Na₂CO₃, 80–95 °C, τ=45 min)        │
│  → Rotary kiln roasting-reduction (1100–1250 °C, τ=60–90 min)│
│  → Magnetic separation untuk recover Fe-Ni alloy              │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 5: Neutralisation & Tailings Management                │
│  → Netralisasi lime (pH 7,5–8,5)                              │
│  → Stabilisasi Mg, Mn, Cr dengan binder geopolimer            │
└──────────────────────────────────────────────────────────────┘
```

**SOP Mitigasi Kerak Autoclave (berdasarkan Dickson dkk., 2026):**

1. **Pengendalian