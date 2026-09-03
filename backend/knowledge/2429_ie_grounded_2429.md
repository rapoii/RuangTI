# 2429 — Analisis Perilaku Pembentukan Kerak (Scaling) pada Autoclave dalam Proses Leaching Nikel Laterit dengan Metode High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Dickson, O. V., Deleau, T., & Espitalier, F. (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. Cleaner Waste Systems. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Andrameda, Y. A., Triaswinanti, R., & Madra, Q. N. (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. AIP Conference Proceedings. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nikel global sedang mengalami transformasi struktural yang signifikan. Menurut literatur yang dirujuk Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems*, bijih nikel laterit — yang mencakup sekitar 60–70% dari total cadangan nikel dunia namun hanya menyumbang sekitar 40% produksi historis karena tantangan metalurgi — kini menjadi fokus utama karena semakin menipisnya cadangan bijih nikel sulfida kelas tinggi. Indonesia, sebagai produsen nikel terbesar dunia dengan kontribusi lebih dari 38% produksi global pada 2023, mengandalkan teknologi High-Pressure Acid Leaching (HPAL) untuk mengolah limonit dan saprolit laterit, terutama untuk melayani pasar baterai kendaraan listrik (EV) dan stainless steel austenitik.

Proses HPAL beroperasi pada kondisi ekstrem: suhu 240–270 °C, tekanan 35–55 bar, dan konsentrasi asam sulfat berlebih (50–150 kg H₂SO₄ per ton bijih). Dalam kondisi seperti ini, leaching nikel, kobalt, dan beberapa logam dasar berlangsung dalam autoclave multi-kompartemen berlapis titanium atau paduan khusus. Akan tetapi, sebagaimana ditekankan oleh Dickson et al. (2026), salah satu masalah operasional paling kronis adalah pembentukan *autoclave scaling* — endapan padat anorganik yang menempel pada dinding, agitator, dan permukaan penukar panas internal autoclave.

Fenomena scaling ini bukan sekadar masalah keandalan equipment, melainkan masalah rekayasa sistemik yang berdampak langsung pada *overall equipment effectiveness* (OEE), kapasitas produksi, dan biaya operasional. Kerak mengurangi koefisien perpindahan panas secara drastis (dari ~1500 W/m²·K ke ~300 W/m²·K dalam beberapa siklus operasi), menaikkan konsumsi energi spesifik steam hingga 18–25%, dan memaksa shutdown tak terjadwal setiap 60–90 hari. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* melengkapi perspektif ini dengan menunjukkan bahwa residu HPAL yang mengandung sulfur dan besi juga memerlukan strategi *roasting-reduction* dan *desulfurization* lanjutan, yang menambah kompleksitas rantai nilai dan menuntut integrasi proses yang cermat.

Urgensi ekonomi dan teknis dari masalah scaling makin besar mengingat: (i) harga nikel LME berfluktuasi tajam (USD 16.000–30.000/ton pada 2023–2024), membuat setiap persen kehilangan yield berdampak material pada margin; (ii) HPAL capital expenditure tipikal mencapai USD 4–6 miliar untuk satu fasilitas 50.000 ton Ni/tahun, sehingga *plant availability* 90–95% sangat krusial; dan (iii) regulasi lingkungan (perolehan AMDAL/ESIA di Indonesia, REACH di Eropa) membatasi disposal residu tailing yang masih mengandung sulfur. Konteks ini membentuk landasan mengapa penelitian karakterisasi scaling oleh Dickson et al. (2026) menjadi referensi fundamental bagi insinyur proses metalurgi dan perancang pabrik HPAL generasi berikutnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Leaching dan Presipitasi Skala

Reaksi leaching nikel laterit dalam autoclave mengikuti kinetika *shrinking core* untuk partikel bijih dan reaksi homogen larutan untuk produk terlarut. Persamaan laju leaching Ni dapat diformulasikan dengan model Arrhenius orde semu:

$$r_{\text{Ni}} = k_0 \cdot \exp\left(-\frac{E_a}{RT}\right) \cdot [H^+]^n \cdot C_{\text{Ni-oxide}}$$

di mana $E_a$ adalah energi aktivasi (~45–75 kJ/mol untuk laterit limonit menurut literatur HPAL), $R = 8{,}314$ J/(mol·K), $T$ suhu absolut, $[H^+]$ aktivitas ion hidrogen, dan $n$ orde reaksi asam (umumnya 0,5–1,0). Dickson et al. (2026) melaporkan bahwa pembentukan kerak terutama terjadi melalui dua jalur paralel: (i) presipitasi balik senyawa besi dan aluminium ketika kondisi redoks berubah sepanjang axis autoclave, dan (ii) kristalisasi langsung pada permukaan logam ketika suhu dinding turun di bawah *saturation temperature* akibat fouling.

Reaksi pembentukan kerak utama yang teridentifikasi:

$$3\text{Fe}_2(\text{SO}_4)_3 + (3+x)\text{H}_2\text{O} \rightarrow 2\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}_{(\text{s})} + 9\text{H}_2\text{SO}_4$$

$$\text{Ca}^{2+} + \text{SO}_4^{2-} + 2\text{H}_2\text{O} \rightarrow \text{CaSO}_4 \cdot 2\text{H}_2\text{O}_{(\text{s})}$$

### 2.2 Model Fouling dan Perpindahan Panas

Penurunan koefisien perpindahan panas keseluruhan dimodelkan melalui resistansi fouling $R_f$:

$$\frac{1}{U_{\text{fouled}}} = \frac{1}{U_{\text{clean}}} + R_f(t)$$

di mana $R_f(t)$ tumbuh secara asimtotik mengikuti model *Asymptotic Fouling*:

$$R_f(t) = R_f^\infty \left(1 - e^{-k_f t}\right)$$

dengan $R_f^\infty$ adalah resistansi fouling maksimum dan $k_f$ konstanta fouling yang bergantung pada komposisi slurry, kecepatan alir, dan profil suhu. Dickson et al. (2026) menyajikan karakterisasi XRD dan SEM-EDS yang menunjukkan lapisan kerak multi-fasa: *hematite* (α-Fe₂O₃) di lapisan dalam, *goethite* (α-FeOOH) di lapisan transisi, dan *alunite* (KAl₃(SO₄)₂(OH)₆) serta *gypsum* (CaSO₄·2H₂O) di lapisan luar. Ketebalan tipikal yang dilaporkan berkisar 2–8 mm setelah 60 hari operasi kontinu.

### 2.3 Neraca Massa dan Energi Autoclave Multi-Stage

Untuk autoclave $N$ kompartemen dengan umpan slurry laju $F_s$ (kg/jam, solids) dan $F_L$ (kg/jam, liquid), neraca massa komponen $i$ pada kompartemen $j$:

$$F_{i,j-1}^{\text{in}} + R_{i,j} = F_{i,j}^{\text{out}} + \text{Acc}_{i,j} + S_{i,j}^{\text{scale}}$$

di mana $R_{i,j}$ adalah laju reaksi (leaching atau presipitasi), $S_{i,j}^{\text{scale}}$ adalah laju pengendapan ke dinding yang membentuk kerak (diestimasi dari analisis termodinamik *PHREEQC* atau *OLI*). Neraca energi kompartemen:

$$\rho C_p \frac{dT_j}{dt} = \sum_{k} F_k^{\text{in}} h_k^{\text{in}} - \sum_{k} F_k^{\text{out}} h_k^{\text{out}} + Q_{\text{steam},j} - Q_{\text{fouling},j} - \Delta H_{R,j}$$

### 2.4 Termodinamika Presipitasi dan Indeks Saturasi

Pembentukan kerak secara fundamental dikontrol oleh *saturation index* (SI):

$$\text{SI} = \log(\text{IAP}/K_{sp})$$

di mana IAP adalah *ion activity product* dan $K_{sp}$ adalah konstanta kelarutan. Ketika SI > 0, presipitasi termodinamik disukai. Untuk sistem HPAL, Dickson et al. (2026) menunjukkan bahwa *hematite* dan *gypsum* memiliki SI positif sepanjang hampir seluruh sumbu autoclave pada pH 1–2, menjelaskan mengapa akumulasi kerak hampir tak terhindarkan tanpa strategi mitigasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL Industri

```
[Bijih Laterit] → [Crushing & Grinding] → [Slurry Mixing (~30% solids)]
    ↓
[Pre-heating (1–4 stage flash)]
    ↓