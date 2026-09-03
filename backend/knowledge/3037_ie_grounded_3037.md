# 3037 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Dickson, O. V., Deleau, T., & Espitalier, F. (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. **Cleaner Waste Systems**, 100503. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Andrameda, Y. A., Triaswinanti, R., & Madra, Q. N. (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. **AIP Conference Proceedings**. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade NiSO₄·6H₂O dan Ni(OH)₂) telah melonjak signifikan seiring transisi energi kendaraan listrik (EV) dan sistem penyimpanan energi stasioner. Lebih dari 70% cadangan nikel dunia terkandung dalam bijih laterit, namun hanya sekitar 30% produksi nikel primer global berasal dari laterit karena tantangan metalurgi yang melekat. Teknologi **High-Pressure Acid Leaching (HPAL)** muncul sebagai rute proses dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit saprolit dan limonit dengan memanfaatkan kondisi termodinamika super-kritis air: suhu 230–270 °C dan tekanan 35–55 bar dalam autoclave baja karbon berlapis titanium atau baja tahan karat dupleks (Dickson *et al.*, 2026, [DOI:10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan operasional paling kritis pada pabrik HPAL modern — yang dibahas secara eksplisit oleh Dickson, Deleau, dan Espitalier (2026) — adalah **pembentukan kerak (scaling) pada dinding dan komponen internal autoclave**. Skala operasional industri menunjukkan bahwa kehilangan kapasitas produksi akibat siklus *shut-down* pembersihan kerak dapat mencapai 8–15% dari total *uptime* tahunan, dengan biaya pemeliharaan yang melebihi USD 20–40 juta per tahun pada fasilitas HPAL berkapasitas 30.000–50.000 ton nikel per tahun. Dalam konteks *cleaner production* — yang menjadi fokus jurnal Cleaner Waste Systems — pembentukan kerak bukan hanya masalah *throughput*, melainkan juga masalah **limbah B3 (bahan berbahaya dan beracun)** karena kerak yang dilepas umumnya mengandung logam berat, asam sulfat terjebak, dan padatan tails yang bersifat korosif.

Andrameda, Triaswinanti, dan Madra (2024) dalam **AIP Conference Proceedings** ([DOI:10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melengkapi perspektif ini dengan mengkaji **residu HPAL nikel laterit** yang diproses lebih lanjut melalui *roasting-reduction* dengan variasi agen desulfurisasi, suhu, dan waktu tinggal. Integrasi kedua literatur ini menunjukkan bahwa manajemen kerak autoclave merupakan titik kontrol (control point) strategis yang menentukan keberlanjutan ekonomi dan lingkungan dari keseluruhan rantai pasok nikel laterit HPAL.

Urgensi rekayasa dari topik ini dapat dirangkum dalam tiga dimensi:
1. **Ekonomi**: Setiap milimeter kerak mengurangi koefisien perpindahan panas efektif hingga 2–4%, meningkatkan konsumsi uap spesifik per ton bijih, dan memperpanjang *residence time* aktual terhadap desain.
2. **Operasional**: Kerak yang tidak terdistribusi homogen menyebabkan *hot spot* lokal pada dinding autoclave, memperpendek usia pakai *liner* titanium dari 8–10 tahun menjadi 3–5 tahun.
3. **Lingkungan**: Volume kerak yang harus dibuang sebagai *hazardous waste* pada fasilitas HPAL di Sulawesi dan Filipina berkisar 1.500–3.000 ton per tahun per pabrik, memerlukan *secure landfill* dengan biaya tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Asam pada Bijih Laterit

Reaksi pelindian selektif nikel dari matriks laterit dalam autoclave mengikuti model *shrinking core* untuk partikel bulat dengan difusi melalui lapisan produk (ash layer) sebagai tahap pengendali laju:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_p \cdot C_{H^+} \cdot t}{\rho_s \cdot r_0^2}$$

di mana $\alpha$ adalah konversi fraksional Ni/Co yang terlarut, $k_p$ adalah konstanta laju difusi efektif (m²·s⁻¹), $C_{H^+}$ adalah konsentrasi asam sulfat bebas (mol·m⁻³), $t$ adalah waktu tinggal (s), $\rho_s$ adalah densitas partikel bijih padat (kg·m⁻³), dan $r_0$ adalah jari-jari awal partikel (m). Pada suhu operasional 250 °C, $k_p$ untuk goethit ($\alpha$-FeOOH) yang melarutkan Ni-isomorphous substitution meningkat menurut hukum Arrhenius:

$$k_p = k_0 \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a \approx 60\text{-}75\ \text{kJ·mol}^{-1}$ (Andrameda *et al.*, 2024), $R = 8{,}314\ \text{J·mol}^{-1}\text{·K}^{-1}$, dan $T = 523{,}15\ \text{K}$.

### 2.2 Mekanisme Pembentukan Kerak

Dickson *et al.* (2026) menjelaskan bahwa kerak HPAL terbentuk melalui dua mekanisme paralel: **(a) Inversi Solubilitas** dan **(b) Presipitasi Back-reaction**. Senyawa dominan yang menyusun kerak — berdasarkan karakterisasi XRD dan SEM-EDS yang dilaporkan penulis — meliputi:

- **Gypsum** ($\text{CaSO}_4 \cdot 2\text{H}_2\text{O}$) — dari pelindian kalsium laterit
- **Hematit** ($\text{Fe}_2\text{O}_3$) — dari hidrolisis besi(III) pada suhu >230 °C
- **Basic Aluminum Sulfate** ($\text{H}_3\text{OAl}_3(\text{SO}_4)_2(\text{OH})_6$) — dikenal sebagai *alunite* atau *aluminum hydroxysulfate*
- **Amorphous Silica** ($\text{SiO}_2 \cdot n\text{H}_2\text{O}$)

Laju pertumbuhan kerak $r_s$ (m·s⁻¹) mengikuti model kinetika orde-satu terhadap konsentrasi supernatant:

$$\frac{dr_s}{dt} = k_s \left(C_{sat} - C_{bulk}\right)$$

dengan $k_s$ adalah koefisien transfer massa–presipitasi (m·s⁻¹), $C_{sat}$ adalah kelarutan jenuh spesies kerak pada suhu dinding, dan $C_{bulk}$ adalah konsentrasi bulk. Karena dinding autoclave lebih dingin dari *bulk slurry* akibat pendinginan *jacket* (umumnya $T_{wall} \approx T_{bulk} - 15\text{-}30\ \text{K}$), $C_{sat}$ untuk hematit menurun secara eksponensial mengikuti persamaan Van't Hoff:

$$C_{sat}(T_{wall}) = C_{sat}(T_{ref}) \cdot \exp\left[\frac{-\Delta H_{pp}}{R}\left(\frac{1}{T_{wall}} - \frac{1}{T_{ref}}\right)\right]$$

dengan $\Delta H_{pp}$ entalpi presipitasi (kJ·mol⁻¹), bernilai positif untuk reaksi presipitasi endotermik.

### 2.3 Perpindahan Panas pada Dinding Berlapis Kerak

Hambatan termal total $R_{tot}$ antara uap pemanas dan slurry merupakan seri resistansi:

$$R_{tot} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{wall}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

dengan $h_i$ koefisien konveksi dalam autoclave (tergantung bilangan Reynolds impeller, $Re_i$), $h_o$ koefisien kondensasi uap, $\delta$ ketebalan, dan $k$ konduktivitas termal. Untuk slurry HPAL dengan agitasi turbulen:

$$Nu_i = \frac{h_i D}{k_{slurry}} = 0{,}74 \cdot Re_i^{2/3} \cdot Pr^{1/3} \cdot \left(\frac{\mu_{bulk}}{\mu_{wall}}\right)^{0{,}14}$$

Korelasi ini menjelaskan mengapa dinding yang lebih dingin dari slurry mengalami *fouling* lebih cepat — viskositas slurry di dinding lebih tinggi, sehingga rasio koreksi Sieder-Tate $(\mu_{bulk}/\mu_{wall})^{0,14}$ menjadi $>1$.

### 2.4 Neraca Massa Limbah Kerak

Untuk autoclave dengan kapasitas umpan bijih $F_{ore}$ (ton·jam⁻¹) dan fraksi massa bijih yang mengendap sebagai kerak $\phi_s$ (umumnya 0,3–0,8%):

$$\dot{M}_{scale} = F_{ore} \cdot \phi_s \cdot \frac{8000\ \text{jam}}{1\ \text{tahun}}$$

menghasilkan estimasi throughput limbah kerak tahunan untuk dievaluasi dalam aspek *hazardous waste management* sesuai konteks jurnal Cleaner Waste Systems.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Dickson, Deleau, dan Espitalier (2026) mengusulkan protokol karakterisasi kerak HPAL yang terstruktur dalam **lima tahap rekayasa**:

### Tahap 1: Pengambilan Sampel Representatif (*Coupon Sampling*)
Sampel kerak diambil dari empat zona kritis autoclave: (i) dinding *shell* bagian atas (dekat inlet uap), (ii) dinding *shell* tengah (zona *bulk*), (iii) dinding bawah (dekat *discharge*), dan (iv) permukaan *agitator/impeller*. Coupons baja titanium Grade 2 dengan dimensi $50 \times 30 \times 3\ \text{mm}$ dipasang *retroreflectively* untuk pengukuran laju akresi *in-situ*.

### Tahap 2: Karakterisasi Multi-Fisik
- **XRD (X-Ray Diffraction)** dengan sweep $2\theta = 5°\text{-}80°$ untuk identifikasi fase kristalin, terutama membedakan alunite vs. gypsum vs. hematit.
- **SEM-EDS** dengan perbesaran 500×–10.000× untuk memetakan morfologi kerak (lamellar, nodular, atau kompak) dan komposisi elemental.
- **TGA-DSC** untuk menentukan kadar air kristal dan dekomposisi termal kerak (berguna untuk reprocessing).
- **ICP-OES** pada leachate kerak untuk logam kritis: Ni, Co, Mn, Cr, dan Al.

### Tahap 3: Pemodelan Kinetik Pertumbuhan
Data tebal kerak vs. waktu diolah dengan model paralel (*paralinear*):

$$\delta(t) = \delta_{ind} + \delta_{asy}\left[1 - \exp(-k_{dep} \cdot t)\right]$$

dengan $\delta_{ind}$ fase inisiasi (nukleasi), $\delta_{asy}$ tebal asimtotik keseimbangan, dan $k_{dep}$ kon