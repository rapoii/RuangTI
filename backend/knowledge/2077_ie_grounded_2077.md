# 2077 — Analisis Perilaku dan Karakterisasi Scaling Autoclave pada Pelindian Bijih Nikel Laterit dengan Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang mengalami transformasi struktural yang dipicu oleh lonjakan permintaan baterai kendaraan listrik (EV). Menurut proyeksi International Energy Agency (IEA), kebutuhan nikel kelas baterai (*battery-grade nickel*) diproyeksikan mencapai lebih dari 1,5 juta ton per tahun pada 2030. Lebih dari 70% cadangan nikel dunia berbentuk bijih laterit (*nickel laterite ore*), yang tersebar di Indonesia, Filipina, Kaledonia Baru, dan beberapa negara di Afrika. Namun, berbeda dengan bijih sulfida yang dapat diproses secara pirometalurgi, bijih laterit—terutama tipe *limonite* dan *saprolite*—memerlukan pendekatan hidrometalurgi bertekanan tinggi, yang dikenal sebagai **High-Pressure Acid Leaching (HPAL)**. Teknologi HPAL beroperasi pada rentang suhu 240–270 °C dan tekanan 35–45 bar dengan media asam sulfat, sehingga mampu mengekstraksi nikel dengan recovery 90–95% dari fasa oksida dan silikat hidrat.

Dalam operasional HPAL berskala industri—seperti yang diterapkan di pabrik Murrin Murrin (Australia), Ravensthorpe (Australia), Goro (Kaledonia Baru), Coral Bay (Filipina), dan proyek-proyek strategic nasional di Morowali/Halmahera (Indonesia)—salah satu tantangan kritis yang menentukan keberlangsungan produksi adalah fenomena **autoclave scaling**, yaitu terbentuknya endapan padat anorganik pada dinding internal, pipa, dan komponen agitator autoclave. Dickson, Deleau, dan Espitalier (2026) dalam publikasi mereka di *Cleaner Waste Systems* menekankan bahwa perilaku scaling tidak hanya menurunkan koefisien perpindahan panas (*overall heat transfer coefficient*, $U$) secara drastis, tetapi juga menurunkan availability autoclave karena shutdown berulang untuk *acid wash* dan *mechanical descaling* (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Kerugian produksi akibat scaling dapat mencapai 5–10% kapasitas tahunan, yang dalam konteks biaya modal (*CAPEX*) proyek HPAL senilai 2–4 miliar USD, menjadi kerugian signifikan terhadap profitabilitas.

Kompleksitas permasalahan ini diperparah oleh variasi komposisi mineralogi bijih laterit: goethit ($\alpha$-FeOOH), serpentin ($\text{(Mg,Fe)}_3\text{Si}_2\text{O}_5(\text{OH})_4$), garnierit, dan berbagai oksida/logam hidroksida sekunder. Andrameda, Triaswinanti, dan Madra (2024) menunjukkan bahwa proses *roasting-reduction* dengan penambahan agen desulfurisasi tertentu sebelum HPAL dapat memodifikasi kelarutan unsur pengotor seperti sulfur dan besi, sehingga secara tidak langsung memengaruhi intensitas scaling di dalam autoclave (Andrameda dkk., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Integrasi kedua kajian ini membentuk kerangka analisis holistik: dari karakterisasi termodinamika-kinetika pelindian hingga strategi mitigasi scaling berbasis rekayasa proses dan pretreatment bijih. Urgensi industri untuk memahami perilaku scaling bukan hanya bersifat akademis, melainkan strategis bagi keberlanjutan operasi HPAL di Indonesia yang menjadi episentrum produksi nikel laterite global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pelindian Asam pada Tekanan Tinggi

Reaksi pelindian utama bijih laterit dalam autoclave HPAL dapat direpresentasikan sebagai berikut. Untuk komponen goethit (fasa oksida besi):

$$\text{FeOOH}_{(s)} + 3\text{H}^+ \rightarrow \text{Fe}^{3+} + 2\text{H}_2\text{O} \quad \Delta G^\circ_{250°C} \approx -98{,}5 \text{ kJ/mol}$$

Untuk serpentin yang mengandung nikel terlarut dalam kisi kristal:

$$\text{(Mg,Ni)}_3\text{Si}_2\text{O}_5\text{(OH)}_4 + 6\text{H}^+ \rightarrow 3\text{Mg}^{2+}/\text{Ni}^{2+} + 2\text{SiO}_{2(aq)} + 5\text{H}_2\text{O}$$

Energi bebas Gibbs reaksi ini sangat bergantung pada temperatur, tekanan parsial uap air, dan aktivitas ion $\text{H}^+$. Pada kondisi operasi tipikal HPAL ($T=255°C$, $p=42$ bar), konstanta kesetimbangan untuk disolusi goethit dapat dihitung dari persamaan van't Hoff:

$$\ln K = -\frac{\Delta H^\circ}{RT} + \frac{\Delta S^\circ}{R}$$

dengan $R = 8{,}314$ J/(mol·K), $T$ dalam Kelvin, $\Delta H^\circ$ entalpi reaksi standar, dan $\Delta S^\circ$ entropi reaksi standar. Nilai $K$ yang tinggi mengindikasikan bahwa disolusi berjalan mendekati selesai, yang menjadi justifikasi termodinamika untuk pemilihan suhu tinggi dalam HPAL.

### 2.2 Kinetika Pembentukan Scaling

Scaling dalam autoclave HPAL merupakan produk samping reaksi sekunder yang terjadi ketika konsentrasi ion tertentu melampaui produk kelarutan (*solubility product*, $K_{sp}$) pada kondisi operasi. Empat jenis scaling utama yang dikarakterisasi oleh Dickson dkk. (2026) adalah:

1. **Hematit ($\text{Fe}_2\text{O}_3$):** Terbentuk dari hidrolisis $\text{Fe}^{3+}$ pada $pH$ dan suhu tinggi:

$$2\text{Fe}^{3+} + 3\text{H}_2\text{O} \rightarrow \text{Fe}_2\text{O}_{3(s)} + 6\text{H}^+ \quad K_{sp} \approx 10^{-43} \text{ pada } 250°C$$

2. **Anhidrit/Gipsum ($\text{CaSO}_4$):** Terbentuk ketika ion kalsium dari bijih bereaksi dengan sulfat:

$$\text{Ca}^{2+} + \text{SO}_4^{2-} \rightarrow \text{CaSO}_{4(s)}$$

3. **Aluminium Hidrokside:** Presipitasi sebagai $\text{Al(OH)}_3$ atau $\text{AlOOH}$ (boehmite).

4. **Magnesium Silikat Hidrat (MSH):** Produk samping serpentinisasi yang kurang terlarut sempurna.

Laju pertumbuhan kristal scaling mengikuti model **power-law crystallization**:

$$G = k_g \cdot \left(\frac{C - C_{sat}}{C_{sat}}\right)^n$$

dengan $G$ adalah laju pertumbuhan linear (m/s), $k_g$ konstanta laju pertumbuhan kristal (bergantung pada mekanisme: difusi, reaksi permukaan, atau spiral), $C$ konsentrasi aktual ion, $C_{sat}$ konsentrasi jenuh, dan $n$ orde pertumbuhan (umumnya 1–2 untuk kristal ionik).

### 2.3 Kinetika Arrhenius dan Energi Aktivasi

Konstanta laju $k_g$ mengikuti persamaan Arrhenius:

$$k_g = A \cdot e^{-E_a/RT}$$

Untuk presipitasi hematit, energi aktivasi $E_a$ dilaporkan dalam rentang 45–75 kJ/mol, tergantung pada kemurnian larutan dan adanya inhibitor. Nilai $E_a$ yang tinggi ini menjelaskan mengapa peningkatan suhu operasi (untuk mempercepat pelindian nikel) secara paradoksal juga mempercepat laju scaling—sebuah *trade-off* klasik dalam desain proses HPAL.

### 2.4 Perpindahan Panas dengan Resistansi Scaling

Efek scaling terhadap