# 2461 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasi pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan nikel kelas baterai (battery-grade nickel) melonjak drastis menyusul transisi energi global dan masifnya adopsi kendaraan listrik (EV). International Nickel Study Group (INSG) melaporkan konsumsi nikel dunia melampaui 3,4 juta ton pada 2024, dimana lebih dari 60% berasal dari bijih laterit karena cadangan sulfida (pentlandit) yang menipis. Bijih nikel laterit, yang umumnya berupa limonit $\text{(Fe,Ni)O(OH)}$ dan saprolit $(\text{Mg,Ni})_3\text{Si}_2\text{O}_5(\text{OH})_4$, hanya dapat diekstraksi secara efisien melalui High-Pressure Acid Leaching (HPAL). Teknologi HPAL—yang beroperasi pada suhu $220\text{–}270\,^\circ\text{C}$ dan tekanan $30\text{–}50\,\text{bar}$ dengan asam sulfat—menjadi tulang punggung proyek seperti PT Halmahera Persada Lygend, Huayou-Cobalt QMB, dan PT Vale Indonesia di Sorowako.

Namun, operasi HPAL menghadapi tantangan operasional kronis berupa **pembentukan kerak (*autoclave scaling*)** yang menurunkan ketersediaan pabrik (*plant availability*) dari target desain 92% menjadi realitas 80–85%. Dickson, Deleau, dan Espitalier (2026, *Cleaner Waste Systems*, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) melakukan investigasi sistematis atas perilaku dan karakterisasi kerak autoclave HPAL. Kerak tersebut—kaya akan silika amorf $\text{SiO}_2\cdot n\text{H}_2\text{O}$, alunit $(\text{K,Na})\text{Al}_3(\text{SO}_4)_2(\text{OH})_6$, jarosit $(\text{K,Na})\text{Fe}_3(\text{SO}_4)_2(\text{OH})_6$, dan senyawa magnesium—menyumbat pipa distribusi slurry, mengurangi koefisien perpindahan panas $U$ pada dinding autoclave, serta menaikkan konsumsi spesifik asam sulfat $30\text{–}50\,\text{kg/t}$ bijih. Andrameda, Triaswinanti, dan Madra (2024, *AIP Conference Proceedings*, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melengkapi konteks ini dengan mengkaji pengaruh agen desulfurisasi (mis. $\text{NaOH}$, $\text{Na}_2\text{CO}_3$, atau $\text{NH}_3$) dan variabel proses *roasting-reduction* terhadap residu HPAL, yang secara langsung menentukan karakteristik kimia umpan (*feed*) dan komposisi kerak downstream. Urgensi industrial-ekonomis dari studi ini jelas: setiap hari *downtime* autoclave pada kapasitas $50.000$ t Ni per tahun menimbulkan opportunity loss sekitar USD 1,5–2 juta, sehingga pengelolaan kerak menjadi *strategic operational excellence* yang menentukan profitabilitas pabrik HPAL.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Asam Temperatur Tinggi

Pelindian nikel laterit mengikuti model *shrinking core* dengan difusi melalui lapisan produk silika-amorf sebagai tahap pengendali:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \cdot C_{H^+}}{r_p^2 \rho_p}\,t = k_{app}\,t$$

dengan $\alpha$ = fraksi Ni terlindi ($0 \le \alpha \le 1$), $k_s$ = konstanta intrinsik (m/s), $C_{H^+}$ = konsentrasi asam (kg/m³), $r_p$ = jari-jari partikel (m), $\rho_p$ = densitas padatan (kg/m³), dan $t$ = waktu (s). Pengaruh suhu mengikuti persamaan Arrhenius:

$$k_{app}(T) = A\,\exp\!\left(-\frac{E_a}{RT}\right)$$

dengan $E_a = 60\text{–}85\,\text{kJ/mol}$ untuk nikel laterit limonit. Pada $T = 523\,\text{K}$ ($250\,^\circ\text{C}$), laju pelindian meningkat ~15× dibanding $T = 423\,\text{K}$ ($150\,^\circ\text{C}$), tetapi memicu supersaturasi silika dan besi yang menjadi *precursor* kerak.

### 2.2 Termodinamika Pembentukan Kerak

Deposisi kerak dikendalikan oleh indeks supersaturasi relatif terhadap hematit $\text{Fe}_2\text{O}_3$ dan alunit:

$$S = \frac{[a_{\text{Fe}^{3+}}]^2\,[a_{\text{OH}^-}]^6}{K_{sp}(\text{Fe}_2\text{O}_3)} \gg 1$$

Ketika $S > 10^3$ di lingkungan autoclave, nukleasi homogen mendominasi dan memicu *flash precipitation* pada permukaan logam. Untuk reaksi hematit langsung:

$$\text{Fe}^{3+} + 2\,\text{H}_2\text{O} \;\rightleftharpoons\; \text{FeOOH}_{(s)} + 3\,\text{H}^+$$

konstanta kesetimbangan sangat bergantung pada pH dan suhu. Andrameda *et al.* (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa penambahan agen desulfurisasi efektif menekan aktivitas $\text{Fe}^{3+}$ bebas melalui pembentukan $\text{Fe(OH)}_3$ stabil, sehingga menurunkan kontribusi kerak besi hingga 22%.

### 2.3 Laju Akumulasi Kerak dan Efek Perpindahan Panas

Tebal kerak $\delta$ tumbuh secara parabolik terhadap waktu operasi:

$$\delta(t) = \sqrt{\frac{2\,D_s\,C_{sat}}{\rho_{scale}}\,t}$$

dengan $D_s$ = koefisien difusi solute (m²/s), $C_{sat}$ = konsentrasi jenuh (kg/m³), $\rho_{scale} = 2.200\,\text{kg/m}^3$ (alunit), dan $t$ = jam operasi. Penebalan $\delta$ mengurangi koefisien perpindahan panas keseluruhan:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta}{k_{scale}} + \frac{x_w}{k_{steel}}$$

dengan $h_i$ = koefisien konveksi slurry (~$8.000\,\text{W/m}^2\text{K}$), $k_{scale} = 0,18\,\text{W/mK}$ (alunit, jauh lebih rendah dibanding baja $k_{steel}=45\,\text{W/mK}$), dan $x_w$ = tebal dinding autoclave. Jika $\delta$ naik dari 0 ke 8 mm, maka $U$ turun dari ~$2.800$ menjadi ~$1.100\,\text{W/m}^2\text{K}$, memaksa kenaikan suhu dinding luar $15\text{–}20\,^\circ\text{C}$ yang mempercepat *stress corrosion cracking* pada baja autoclave SA-516 Grade 70.

### 2.4 Neraca Massa Asam Sulfat

Konsumsi asam spesifik (kg H₂SO₄ per ton bijih) dimodelkan sebagai:

$$C_{H_2SO_4} = \frac{M_{H_2SO_4}}{M_{Ni}}\!\left[\frac{\eta_{Ni}\,R_{Ni/NiO} + \eta_{Fe}\,R_{Fe/Fe_2O_3} + \eta_{Mg}\,R_{Mg/MgO} + \eta_{Al}\,R_{Al/Al_2O_3}}{}\right]\!\times 10^3$$

dengan $\eta_i$ = fraksi logam terlarut dan $R_{i/oxide}$ = stoikiometri mol asam per mol oksida. Pada bijih limonit dengan komposisi tipikal 1,2% Ni, 42% Fe, 4% MgO, dan 2,5% Al₂O₃, konsumsi asam berada di rentang 380–450 kg/t.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Dickson *et al.* (2026) mengusulkan protokol karakterisasi kerak lima-tahap:

```
[Umpan Bijih] → [Sampling Slurry] → [Autoclave HPAL] → [Kerak Padat]
                       ↓                    ↓
                [Analisis ICP-OES]   [Dekomposisi Berkala]
                       ↓                    ↓
                [Karakterisasi XRD, SEM-EDS, TGA] → [Decision Matrix Pembersihan]
```

**Tabel SOP Karakterisasi Kerak Autoclave HPAL**

| Tahap | Aktivitas | Instrumen/Metode | Kriteria Keputusan |
|-------|-----------|------------------|---------------------|
| 1 | Pengambilan sampel kerak di 6 zona autoclave (top, middle, bottom, agitator, discharge, pipa) | Bor sampel *Pneumatic Core Drill* | Sampling setiap 72 jam operasi |
| 2 | Analisis kimia elemental | ICP-OES setelah digestion *aqua regia + HF* | Fe > 30%, S > 8% → prioritas cleaning |
| 3 | Identifikasi fasa mineral | XRD dengan Cu-Kα ($λ = 1,5406\,\text{Å}$) step 0,02° | Deteksi alunit + hematit + silika amorf |
| 4 | Morfologi & mikrostruktur | SEM-EDS pada perbesaran 500–10.000× | Porositas < 15% → kerak *hard scale* |
| 5 | Penentuan laju akresi | Ultrasonic thickness gauge (UTG) 5 MHz | $\delta > 6\,\text{mm}$ → shutdown terjadwal |

**Protokol Pembersihan Kerak:**

1. **Cooling & depressurization** terkontrol (rate ≤ 0,5 bar/min) untuk menghindari *thermal shock*.
2. **Acid washing** dengan $\text{H}_2\text{SO}_4$ 5–8% pada $80\,^\circ\text{C}$ selama 4–6 jam untuk melarutkan alunit dan jarosit (efisiensi 60–75%).
3. **Alkaline boil-out** menggunakan NaOH 10% pada $95\,^\circ\text{C}$ selama 8 jam untuk menghilangkan silika amorf dan Mg-fasa (efisiensi 80%).
4. **Mechanical pigging** dengan *high-pressure water jet* 200 bar sebagai tahap akhir.
5. **Passivation** dengan $\text{HNO}_3$ 0,5% untuk membentuk lapisan protektif $\text{Fe}_2\text{O}_3$ pada dinding baja.

Integrasi dengan pendekatan Andrameda *et al.* (2024) dilakukan melalui *pre-treatment*: bijih dicampur dengan $\text{Na}_2\text{CO}_3$ 3% berat sebelum *roasting* pada $700\,^\circ\text{C}$ selama 60 menit untuk mengurangi sulfur dan mengubah mineral lempung menjadi struktur yang lebih reaktif, sehingga menurunkan potensi kerak sulfur hingga 18%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik HPAL berkapasitas umpan 3.000 t/hari bijih limonit (komposisi: 1,2% Ni, 42% Fe₂O₃, 4% MgO, 2,5% Al₂O₃, 1,8% SiO₂ reaktif) beroperasi pada $T = 250\,^\circ\text{C}$, $P = 42\,\