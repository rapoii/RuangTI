# 2749 — Perilaku dan Karakterisasi Kerak Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi High Pressure Acid Leaching (HPAL): Perspektif Rekayasa Proses dan Teknik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (*battery-grade nickel*) tumbuh pada Compound Annual Growth Rate (CAGR) lebih dari 12% sejak 2020, didorong oleh transisi elektrifikasi kendaraan dan penetrasi储能 berbasis Lithium-Nikel-Mangan-Kobalt-Oksida (NMC). Lebih dari 60% cadangan nikel dunia tersimpan dalam bijih laterit (*limonitic* dan *saprolitic*), yang tidak dapat diproses secara ekonomis melalui pirometalurgi konvensional (reverberatory furnace/electric arc) karena kadar Ni-nya yang rendah (0,8–1,5%) dan rasio Mg/Ni yang tinggi. High Pressure Acid Leaching (HPAL) muncul sebagai teknologi dominan untuk mengekstraksi Ni dari limonit dengan recovery >90%, namun menghadapi satu bottleneck operasional yang konsisten dan merugikan secara finansial: **pembentukan kerak (*scaling*) pada dinding dan internal komponen autoclave**.

Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) secara eksplisit memetakan perilaku akumulasi kerak di dalam autoclave HPAL komersial. Studi mereka menunjukkan bahwa kerak terbentuk dari campuran kompleks aluminium sulfat (alunogen, $\text{Al}_2(\text{SO}_4)_3 \cdot 17\text{H}_2\text{O}$), besi(III) sulfat hidrat, dan silika amorf, dengan laju deposisi 2,3–4,1 mm/100 jam operasi pada rentang suhu 245–260 °C dan tekanan 38–44 bar. Kerak tersebut menyebabkan tiga kerugian utama: (i) degradasi koefisien perpindahan panas dinding sampai 35–50%, sehingga konsumsi uap naik signifikan; (ii) peningkatan konsumsi asam sulfat karena porsi $\text{H}_2\text{SO}_4$ "terperangkap" dalam struktur kristal sulfat hidrat dan tidak ikut melindi Ni; serta (iii) *unscheduled shutdown* untuk de-scaling mekanik yang menurunkan *overall equipment effectiveness* (OEE) autoclave sampai 78–82%, jauh dari target industri 90%.

Perspektif pelengkap ditawarkan oleh Andrameda, Triaswinanti, dan Madra (2024) pada *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) yang meneliti efek *desulfurization agent*, suhu, dan waktu *roasting-reduction* terhadap residu HPAL. Mereka membuktikan bahwa pra-perlakuan reduksi (*roasting*) bijih residu HPAL dengan batubara serta penambahan agen desulfurisasi berbasis $\text{Na}_2\text{CO}_3$ dapat menekan retensi sulfur dalam kerak/residu hingga 27–34%, sekaligus mengubah morfologi endapan sulfat dari amorf menjadi fase kristalin yang lebih mudah dipisahkan. Sinergi kedua paper ini menunjukkan bahwa persoalan kerak bukan semata fenomena kimia-fisikaan, melainkan isu **rekayasa sistem industri** yang memerlukan solusi terintegrasi antara desain operasi, pretreatment, dan strategi maintenance.

Konteks industri makin relevan karena mayoritas proyek HPAL generasi baru (Indonesia, Filipina, Kaledonia Baru, dan Proyek Eropa seperti *Terrafame* dan *Giga* Finlandia) menghadapi tantangan serupa. Pada lini HPAL kapasitas 50.000–75.000 t NiSO₄/tahun, downtime akibat kerak mencapai 480–720 jam/tahun, setara dengan kerugian opportunity cost USD 18–35 juta/tahun pada asumsi margin NiSO₄ sekitar USD 1.800/t dan utilisasi 90%. Oleh karena itu, kemampuan memodelkan perilaku kerak, mengkarakterisasi komposisinya secara kuantitatif, dan merekayasa parameter operasi menjadi kompetensi inti bagi insinyur industri yang bergerak di sektor hidrometalurgi kritis ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pembentukan Kerak Sulfat

Reaksi pelindian utama bijih laterit limonit pada 250 °C menghasilkan sulfat logam terlarut:

$$
\text{NiO}\cdot\text{Fe}_2\text{O}_3 + 4\text{H}_2\text{SO}_4 \longrightarrow \text{NiSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}
$$

Namun, ketika suhu turun di bawah titik saturasi lokal (terutama di dekat dinding autoclave yang relatif lebih dingin), endapan tak-terlarut terbentuk mengikuti konstanta kelarutan ($K_{sp}$):

$$
\text{Al}^{3+} + \frac{3}{2}\text{SO}_4^{2-} + \frac{17}{2}\text{H}_2\text{O} \rightleftharpoons \tfrac{1}{2}\text{Al}_2(\text{SO}_4)_3\cdot 17\text{H}_2\text{O}_{(s)}
$$

Gibbs free energy of precipitation mengikuti:

$$
\Delta G_{rxn} = -RT \ln K_{sp} = -RT \ln \left(\frac{a_{\text{alunogen}}}{[\text{Al}^{3+}]^{2/3}[\text{SO}_4^{2-}][\text{H}_2\text{O}]^{17/3}}\right)
$$

Dimana aktivitas $a_{\text{alunogen}} = 1$ untuk fasa padat murni, sehingga:

$$
K_{sp} = [\text{Al}^{3+}]^{2/3}[\text{SO}_4^{2-}] \cdot [\text{H}_2\text{O}]^{17/3}
$$

### 2.2 Shrinking Core Model (SCM) untuk Kinetika Pelindian

Pelindian partikel laterit pada HPAL mengikuti model inti menyusut (*shrinking unreacted core*) dengan difusi melalui lapisan ash sebagai langkah pengendali (Dickson et al., 2026):

$$
1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_p \cdot C_A \cdot t}{\rho_B \cdot r_p^2}
$$

Dimana $\alpha$ = konversi Ni terlarut (fraksi), $k_p$ = koefisien difusi produk (m²/s), $C_A$ = konsentrasi $\text{H}_2\text{SO}_4$ di *bulk* (mol/m³), $\rho_B$ = densitas molar bijih (mol/m³), $r_p$ = jari-jari partikel (m), dan $t$ = waktu tinggal (s).

Ketergantungan suhu mengikuti hukum Arrhenius:

$$
k_p = k_0 \exp\left(-\frac{E_a}{RT}\right)
$$

Untuk endapan Al-sulfat yang memicu scaling, energi aktivasi presipitasi $E_a \approx 68{,}5 \text{ kJ/mol}$ dengan $k_0 = 4{,}7 \times 10^{9} \text{ m}^2/\text{s}$, sehingga setiap kenaikan suhu 10 °C mempercepat laju deposisi kerak sekitar 2,1×.

### 2.3 Perpindahan Panas pada Dinding Berlapis Kerak

Konduksi panas satu dimensi melalui dinding autoclave baja SA-516 Gr.70 yang terlapisi kerak mengikuti:

$$
Q = \frac{T_{\text{proses}} - T_{\text{pendingin}}}{\frac{\delta_{\text{baja}}}{k_{\text{baja}}} + \frac{\delta_{\text{kerak}}}{k_{\text{kerak}}}}
$$

Dengan $k_{\text{baja}} \approx 45 \text{ W/(m·K)}$, $k_{\text{kerak}} \approx 0{,}35{-}0{,}85 \text{ W/(m·K)}$ (alunogen dan besi sulfat hidrat bersifat isolator termal). Penurunan fluks panas ketika $\delta_{\text{kerak}}$ naik dari 0 ke 8 mm:

$$
\frac{Q_{\text{scaled}}}{Q_{\text{clean}}} = \frac{\delta_{\text{baja}}/k_{\text{baja}}}{\delta_{\text{baja}}/k_{\text{baja}} + \delta_{\text{kerak}}/k_{\text{kerak}}}
$$

### 2.4 Model Laju Deposisi Kerak (*Scaling Rate Equation*)

Berdasarkan data empiris Dickson et al. (2026), laju deposisi mengikuti model pseudo-order terhadap supersaturasi:

$$
\frac{d\delta_{\text{kerak}}}{dt} = k_s \left([\text{Al}^{3+}] - [\text{Al}^{3+}]_{eq}\right)^n \cdot \exp\!\left(-\frac{E_s}{RT}\right)
$$

Dimana $k_s = 1{,}82 \times 10^{-5} \text{ m/s·(mol/m}^3\text{)}^{-n}$, $n = 1{,}4$, dan $E_s = 55{,}3 \text{ kJ/mol}$.

### 2.5 Pretreatment Reduksi (Perspektif Andrameda et al., 2024)

Reaksi *roasting-reduction* residu HPAL dengan agen pereduksi C dan desulfurizer $\text{Na}_2\text{CO}_3$:

$$
\text{FeSO}_4 + \text{C} + 2\text{SiO}_2 \longrightarrow \text{FeSiO}_3 + \text{SO}_2 \uparrow + \text{CO} \uparrow
$$

$$
\text{Na}_2\text{CO}_3 + \text{CaSO}_4 \longrightarrow \text{CaCO}_3 + \text{Na}_2\text{SO}_4
$$

Reaksi ini menurunkan retensi sulfur dalam residu sekaligus mengubah morfologi sulfat menjadi fase yang lebih mudah dipisahkan, sehingga mengurangi beban kerak pada operasi HPAL berikutnya.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL Mitigasi Kerak

```
┌──────────────────────────────────────────────────────────────┐
│ 1. PENERIMAAN & SIZE REDUCTION                               │
│    Bijih laterit limonit → Crushing → Grinding (-74 µm)     │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. SLURRY PREPARATION                                        │
│    Pulp density 35–45% solids + recycle acid (H₂SO₄ 50–95 g/L)│
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. PRE-HEATING (3–4 stage) → 245–260 °C, 38–44 bar          │
│    Steam injection terkontrol, gradient ≤30 °C