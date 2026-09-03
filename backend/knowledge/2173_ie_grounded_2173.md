# 2173 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Proses Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang menghadapi transformasi struktural yang mendalam. Permintaan akan nikel kelas baterai (battery-grade nickel) melonjak tajam seiring akselerasi produksi baterai litium-ion untuk kendaraan listrik (EV), sistem penyimpanan energi (BESS), dan aplikasi elektronika portabel. Menurut proyeksi International Energy Agency (IEA), kebutuhan nikel untuk aplikasi baterai diproyeksikan meningkat dari sekitar 250 kt pada 2023 menjadi lebih dari 1.500 kt pada 2030. Sumber utama nikel komersial terbagi dua: bijih sulfida (saat ini menyumbang ~40% produksi namun cadangannya semakin menipis) dan bijih laterit (~60% produksi dengan cadangan 10 kali lebih besar). Pergeseran struktural ini membuat bijih laterit—khususnya jenis *limonit* dan *saprolit*—menjadi strategis, meskipun karakteristik kimianya yang kompleks dan kadar nikel rendah (0,8–2,5%) menjadi tantangan rekayasa yang berat.

Teknologi **High Pressure Acid Leaching (HPAL)** muncul sebagai solusi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit limonitik. Proses ini beroperasi pada suhu 240–270 °C dan tekanan 35–55 bar dalam autoclave baja tahan karat (umumnya *SAF 2507 super duplex stainless steel* atau *Alloy 625*) dengan larutan asam sulfat pekat (150–300 g/L H₂SO₄). Reaksi utama pelindian pada limonit adalah:

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{H}_2\text{O}$$

$$\text{Fe}_2\text{O}_3 + 3\text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + 3\text{H}_2\text{O}$$

Pada suhu tinggi, besi(III) terhidrolisis kembali membentuk hematit ($\text{Fe}_2\text{O}_3$) yang relatif tidak larut dan ikut mengendap dalam tailing. Proses ini menghasilkan *recovery* nikel 90–95% dan kobalt 80–90%, dengan kemurnian larutan pregnant leach solution (PLS) yang siap untuk *solvent extraction* (SX) dan *electrowinning* (EW). Akan tetapi, kondisi operasi yang ekstrem—suhu tinggi, tekanan tinggi, lingkungan asam kuat, dan keberadaan anion sulfat—menyebabkan satu fenomena operasional yang sangat merugikan: **autoclave scaling** atau pembentukan kerak pada dinding, pipa, impeller, dan komponen internal autoclave.

Dickson, Deleau, dan Espitalier (2026) dalam publikasi di *Cleaner Waste Systems* dengan DOI [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503) menyoroti bahwa kerak pada autoclave HPAL nikel laterit merupakan salah satu *single point of failure* paling signifikan dalam rantai pasok nikel baterai. Kerak yang terbentuk terutama terdiri dari **gypsum** ($\text{CaSO}_4 \cdot 2\text{H}_2\text{O}$), **anhidrit** ($\text{CaSO}_4$), **alunit** ($\text{KAl}_3(\text{SO}_4)_2(\text{OH})_6$), **hematit**, dan berbagai **alumino-silikat amorf** yang terbentuk dari reaksi samping antara asam sulfat dengan mineral-mineral pengotor (Mg, Al, Si, Ca, Mn) dalam bijih. Kecepatan penumpukan kerak dapat mencapai 0,5–3 mm per hari operasi, sehingga autoclave harus menjalani *shut-down* terjadwal setiap 30–90 hari untuk *acid wash* dan *mechanical descaling*. Setiap kejadian *unscheduled shutdown* pada pabrik HPAL berskala komersial seperti PT Halmahera Persada Lygend, Huayou Cobalt, atau Sumitomo Halmahera dapat menimbulkan kerugian ekonomi mencapai USD 500.000–2.000.000 per hari.

Urgensi penelitian perilaku kerak ini diperkuat oleh kontribusi Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* dengan DOI [10.1063/5.0186417](https://doi.org/10.1063/5.0186417) yang menunjukkan bahwa residu HPAL nikel laterit—yang sebagian besar mengandung besi, sulfur, dan alumino-silikat—dapat menjadi sumber kerak sekunder ketika diproses lebih lanjut melalui *roasting-reduction*. Kombinasi dua literatur ini menunjukkan bahwa masalah scaling bersifat multi-fase dan multi-skala, dari autoclave utama hingga unit pengolahan residu. Dalam perspektif Teknik Industri, topik ini menyentuh pilar *Process Engineering*, *Reliability Engineering*, *Plant Economics*, dan *Sustainable Manufacturing*, menjadikannya sangat relevan untuk kajian akademis dan aplikasi praktis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Pembentukan Kerak

Pelindian bijih nikel laterit dalam autoclave HPAL mengikuti kinetika reaksi permukaan (*shrinking core model*). Untuk partikel bijih berbentuk spherical, laju pelindian *Ni* dapat dinyatakan sebagai:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \cdot C_{H^+}}{r_p^2 \cdot \rho_s} \cdot t$$

di mana $\alpha$ adalah fraksi Ni yang terlarut, $k_s$ adalah konstanta kinetika permukaan (m/s), $C_{H^+}$ adalah konsentrasi ion hidrogen (mol/m³), $r_p$ adalah radius partikel (m), $\rho_s$ adalah densitas padat bijih (kg/m³), dan $t$ adalah waktu (s). Parameter $k_s$ sangat bergantung pada suhu melalui persamaan Arrhenius:

$$k_s = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu absolut (K). Untuk pelindian Ni dari limonit, $E_a$ tipikal berada pada rentang 50–80 kJ/mol, mengindikasikan kendali reaksi kimia (chemical-controlled) pada suhu rendah dan bergeser ke kendali difusi (diffusion-controlled) pada suhu >250 °C.

### 2.2 Mekanisme Pertumbuhan Kerak

Pertumbuhan kerak pada permukaan autoclave mengikuti model deposisi heterogen dengan laju yang sebanding dengan konsentrasi spesi pengendap di *bulk solution*. Model kinetik orde satu yang banyak digunakan adalah:

$$\frac{dm_s}{dt} = k_d \cdot (C_{Ca^{2+}} \cdot C_{SO_4^{2-}} - K_{sp}^{CaSO_4})$$

dengan $m_s$ adalah massa kerak per satuan luas (kg/m²), $k_d$ adalah koefisien deposisi (m/s), dan $K_{sp}^{CaSO_4}$ adalah konstanta kelarutan gypsum. Pada kondisi HPAL (>240 °C), kelarutan CaSO₄ sangat menurun sehingga hampir semua ion Ca dan SO₄ yang ada akan cenderung mengendap.

### 2.3 Perpindahan Panas dengan Hambatan Kerak

Efek paling merugikan dari kerak adalah peningkatan resistansi termal dinding autoclave. Dengan mengasumsikan perpindahan panas konduktif satu dimensi melalui dinding baja dan lapisan kerak, fluks panas $q$ (W/m²) menjadi:

$$q = \frac{T_{process} - T_{cooling}}{\frac{\delta_w}{k_w} + \frac{\delta_s}{k_s} + \frac{1}{h_{conv}}}$$

di mana $\delta_w$ dan $\delta_s$ masing-masing adalah ketebalan dinding baja dan kerak, $k_w$ dan $k_s$ adalah konduktivitas termal (baja stainless ~16 W/m·K; kerak gypsum ~0,5–1,2 W/m·K), dan $h_{conv}$ adalah koefisien konveksi pada sisi pendingin. Nilai $k_s$ untuk kerakHPAL sangat rendah (5–10 kali lebih kecil daripada baja), sehingga setiap 1 mm kerak dapat menurunkan efisiensi perpindahan panas 10–20%.

### 2.4 Neraca Massa Asam Sulfat

Konsumsi spesifik asam sulfat merupakan parameter operasional kritis. Untuk bijih laterit dengan komposisi Fe₂O₃ = 70%, MgO = 5%, Al₂O₃ = 3%, CaO = 1%, NiO = 1,5%, konsumsi spesifik teoritis dapat dihitung sebagai:

$$M_{H_2SO_4} = \sum_{i} \nu_i \cdot \frac{x_i \cdot M_{H_2SO_4}}{M_i}$$

dengan $\nu_i$ adalah stoikiometri kebutuhan asam untuk mineral $i$ (Fe = 3, Mg = 1, Al = 1,5, Ca = 1, Ni = 1), $x_i$ fraksi massa oksida, dan $M_i$ massa molar oksida. Untuk bijih tipikal di atas, konsumsi teoritis sekitar 380–450 kg H₂SO₄ per ton bijih, namun konsumsi aktual pabrik HPAL mencapai 500–600 kg/ton karena inefisiensi dan reaksi samping (pembentukan kerak termasuk salah satu kontributor utama).

### 2.5 Kriteria Pencampuran dalam Autoclave

Autoclave HPAL komersial dilengkapi *agitator* tipe *Rushton turbine* atau *pitched blade turbine*. Bilangan Reynolds impeller yang diperlukan untuk suspensi solid sempurna adalah:

$$Re = \frac{\rho \cdot N \cdot D_i^2}{\mu} > 10^5$$

dengan $N$ kecepatan putar (RPS), $D_i$ diameter impeller (m), $\rho$ densitas slurry (≈1.400 kg/m³), dan $\mu$ viskositas slurry (≈5 × 10⁻³ Pa·s). Bilangan daya (*power number*) impeller:

$$P = N_p \cdot \rho \cdot N^3 \cdot D_i^5$$

dengan $N_p$ ≈ 5–6 untuk Rushton pada regime turbulen. Namun, keberadaan kerak pada impeller mengubah geometri dan menaikkan *power draw* aktual 10–30%, yang menjadi indikator operasional ketidaknormalan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Manajemen Kerak

```
[1] Bijih Laterit (Limonit) → Size Reduction & Slurrying (sizing 100-200 µm)
        ↓
[2] Pre-heater (heat recovery dari flash vessel downstream) → 150 °C
        ↓
[3] Autoclave Multi-Compartment (4-6 kompartemen, total residence time 60-90 menit)
    ├── Compartment 1-2: Pelindian utama (240-260 °C, 40-45 bar)
    ├── Compartment 3-4: Hidrolisis Fe → hematit
    └── Compartment 5-6: Conditioning & settling
        ↓
[4] Flash Vessel (penurunan tekanan ke atmosfer, uap dipulihkan)
        ↓
[5] CCD (Counter-Current Decantation) washing & solid-liquid separation
        ↓
[6] Neutralization & Iron Removal
        ↓
[7] Solvent Extraction (Ni/Co) → Electrowinning → Battery-grade NiSO₄
        ↓
[8] Acid Wash & Descaling Block (periodik, setiap 60-90 hari operasi)
```

### 3.2 SOP Pengendalian Kerak HPAL

**Fase Pra-Operasional (Design Stage):**
1. **Material Selection:** Dinding autoclave menggunakan *super duplex stainless steel* (UNS S32750/SAF 2507) atau *Alloy 625* dengan lapisan *weld overlay* berbasis Ni-C