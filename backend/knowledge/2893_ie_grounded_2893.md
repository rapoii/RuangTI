# 2893 — Perilaku Scaling Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL: Analisis Rekayasa Industri, Kinetika, dan Mitigasi Kerugian Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang menghadapi transformasi besar akibat pesatnya permintaan baterai lithium-ion untuk kendaraan listrik (EV), sistem penyimpanan energi (BESS), dan elektrifikasi industri baja tahan karat. Nikel laterit menyumbang sekitar 70% dari cadangan nikel terrestre global, menjadikannya sumber daya strategis yang tak tergantikan dalam transisi energi. Namun, kadar Ni yang rendah (biasanya 0,8–2,5%) dan kompleksitas mineraloginya membuat pengolahan laterit jauh lebih menantan dibandingkan bijih nikel sulfida. High-Pressure Acid Leaching (HPAL) merupakan teknologi hidrometalurgi dominan untuk mengekstraksi nikel dan kobalt dari bijih limonit dan saprolit laterit pada suhu 240–270°C dengan tekanan 35–55 bar menggunakan asam sulfat (Dickson dkk., 2026; DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan operasional paling kronis pada proses HPAL adalah fenomena *autoclave scaling*, yaitu pengendapan lapisan mineral anorganik pada dinding, agitator, dan pipa internal autoclave. Skala terutama tersusun atas hematit (Fe₂O₃), goetit (α-FeOOH), aluminium hidroksida, dan sulfat basa besi-hidronium seperti jarosit dan alunit. Pembentukan scale terjadi karena kondisi saturasi super jenuh akibat dekomposisi termal goetit dan presipasi hidroksida logam ketika slurry didinginkan di zona-zona tertentu autoclave (Andrameda dkk., 2024; DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Dampak ekonomis dari scaling sangat substansial: (1) koefisien perpindahan panas dinding autoclave dapat turun 70–90%, meningkatkan konsumsi uap panas dan biaya energi; (2) siklus *campaign* operasi harus dihentikan prematur (umumnya setiap 30–90 hari) untuk *acid wash* atau *descaling* mekanis, menurunkan *overall equipment effectiveness* (OEE); (3) throughput pabrik HPAL bisa turun 10–20%; (4) meningkatnya risiko korosi lokal dan *hot spot* yang mengancam integritas vessel. Berdasarkan estimasi industri, setiap milimeter scale dapat menambah konsumsi energi spesifik sekitar 1,5–2,5 kWh per ton bijih yang diolah. Dalam konteks Tecnicas Reunidas, PT Halmahera Persada Lygend, dan proyek HPAL raksasa seperti Huayou Co., MHP (Mixed Hydroxide Precipitate) downstream, masalah scaling menjadi salah satu *single largest operating cost driver* selain konsumsi asam sulfat.

Urgensi penelitian Dickson dkk. (2026) terletak pada belum adanya model kuantitatif yang mengintegrasikan karakterisasi mineralogi dengan kinetika pertumbuhan scale secara *in-situ* pada autoclave pilot berskala industri. Karakterisasi XRD, SEM-EDS, dan TGA yang dilakukan memungkinkan dekonvolusi kontribusi relatif fase amorf versus kristalin dalam scale, yang sebelumnya sering diperlakukan sebagai *black box*. Sementara itu, Andrameda dkk. (2024) menunjukkan bahwa *pre-treatment* desulfurisasi dan *roasting-reduction* pada residu HPAL secara signifikan memengaruhi komposisi dan morfologi scale sekunder, memberikan landasan eksperimental bahwa pengendalian sifat feed dapat menjadi strategi preventif berskala industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Model Inti Menyusut (*Shrinking Core Model* — SCM)

Reaksi pelindian nikel dari mineral laterit dalam autoclave HPAL mengikuti kinetika heterogen padat-cair yang secara umum dimodelkan dengan *Shrinking Core Model*. Untuk partikel spherical dengan jari-jari awal $R$, konversi fraksional $\alpha$ terhadap waktu $t$ mengikuti:

$$t = \frac{\rho_B \cdot R}{b \cdot M_B \cdot C_{A,b}} \left[ 1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} \right]$$

dengan $\rho_B$ adalah densitas molar padatan (mol/m³), $b$ koefisien stoikiometri reaksi, $M_B$ massa molar Ni (58,69 g/mol), dan $C_{A,b}$ konsentrasi asam sulfat bulk (mol/m³). Ketika difusi lapisan produk menjadi langkah pengendali laju, bentuk asimtotik berlaku:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = k_d \cdot t$$

dengan $k_d$ adalah konstanta laju difusi yang bergantung pada suhu menurut hukum Arrhenius:

$$k_d = A \cdot \exp\left(-\frac{E_a}{R_g T}\right)$$

di mana $E_a$ adalah energi aktivasi (untuk HPAL nikel laterit umumnya 60–95 kJ/mol), $R_g$ konversi gas universal (8,314 J/mol·K), dan $T$ suhu absolut.

### 2.2 Kinetika Pertumbuhan Scale

Pertumbuhan scale di autoclave HPAL merupakan proses kristalisasi permukaan yang dimodelkan dengan persamaan laju orde-$n$:

$$r_s = \frac{dm_s}{dt} = k_s \cdot \left( C_{sat}(T) - C_{bulk}(T,pH) \right)^n$$

dengan $m_s$ adalah massa scale per satuan luas permukaan (kg/m²), $k_s$ konstanta laju kristalisasi (m⁶/mol²·detik untuk n=2), $C_{sat}$ konsentrasi jenuh ekuilibrium, dan $C_{bulk}$ konsentrasi aktual dalam larutan. Gradien konsentrasi ini merupakan *driving force* presipasi. Untuk sistem multi-komponen (Fe, Al, Cr), persamaan harus diselesaikan secara simultan dengan menggunakan produk aktivitas ionik:

$$IAP_{jarosit} = a_{K^+} \cdot a_{Fe^{3+}}^{3} \cdot a_{SO_4^{2-}}^{2} \cdot a_{OH^-}^{6}$$

Presipasi terjadi ketika $IAP > K_{sp}$, di mana $K_{sp}$ adalah konstanta kelarutan ekuilibrium.

### 2.3 Perpindahan Panas dengan Resistansi Scale

Efek scaling paling langsung terukur pada koefisien perpindahan panas menyeluruh $U$. Untuk dinding autoclave setebal $x_w$ dengan konduktivitas $k_w$ dan dua scale layer setebal $x_{s,1}$ dan $x_{s,2}$ dengan konduktivitas $k_{s,1}$ dan $k_{s,2}$:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{x_{s,1}}{k_{s,1}} + \frac{x_{s,2}}{k_{s,2}} + \frac{x_w}{k_w} + \frac{1}{h_o}$$

dengan $h_i$ dan $h_o$ adalah koefisien konveksi sisi dalam (slurry) dan sisi luar (steam). Persamaan ini menunjukkan bahwa scale—yang memiliki $k_s \approx 0,5$–$2$ W/m·K—menjadi *bottleneck* termal karena baja autoclave memiliki $k_w \approx 45$ W/m·K.

### 2.4 Neraca Massa dan Energi Sistem HPAL

Untuk autoclave dengan laju umpan bijih $F_{ore}$ (kg/jam), kadar air $w$, dan konsumsi asam spesifik $C_{acid}$ (kg H₂SO₄/ton bijih):

$$F_{H_2SO_4} = F_{ore} \cdot C_{acid}$$

Konsumsi energi termal total $Q_{tot}$ (W) untuk mempertahankan suhu operasi adalah:

$$Q_{tot} = U \