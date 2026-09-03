# 2333 — Perilaku Penskalaan Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri hidrometalurgi nikel global sedang mengalami transformasi struktural yang didorong oleh transisi energi dan elektrifikasi kendaraan. Bijih nikel laterit—yang menyumbang sekitar 70% cadangan nikel dunia namun hanya sekitar 50% produksi primer—menjadi sumber daya strategis karena keterbatasan cadangan sulfida. Indonesia sebagai produsen nikel terbesar dunia (sekitar 38% produksi global menurut U.S. Geological Survey) mengandalkan teknologi **High-Pressure Acid Leaching (HPAL)** untuk mengekstraksi nikel dari bijih laterit kadar rendah (biasanya 0,8–1,5% Ni) yang tidak layak diproses secara pirometalurgi. Proses HPAL dijalankan dalam autoclave baja karbon berdiameter 4–5 m dan panjang 20–30 m pada suhu 240–270°C dengan tekanan 30–50 bar menggunakan asam sulfat berlebih (150–300 g/L H₂SO₄).

Dalam operasional HPAL, **penskalaan autoclave** merupakan tantangan teknis dan ekonomi paling kritis yang dibahas oleh Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Endapan padatan anorganik—terutama hematit (Fe₂O₃), aluminium oxyhydroxide (AlOOH/boehmite), silika amorf (SiO₂·nH₂O), dan gipsum (CaSO₄·2H₂O)—mengendap pada dinding internal autoclave dan komponen perpindahan panas (coil steam, baffle). Akumulasi scale mengurangi koefisien perpindahan panas keseluruhan (U) secara eksponensial terhadap waktu, menurunkan laju pemanasan slurry, meningkatkan konsumsi uap, serta memaksa *scheduled shutdown* untuk *chemical cleaning* (pickling) yang menurunkan *overall equipment effectiveness* (OEE) hingga 60–70%.

Kompleksitas semakin tinggi karena mineralogi bijih laterit bervariasi: bijih limonit (goethit-rich) memicu penskalaan Fe/Al, sedangkan bijih saprolit (serpentin-rich) memicu penskalaan silika dan gipsum. Kandungan sulfur dalam bijih (0,05–0,5% S dari pirit dan gipsum alami) menurunkan efisiensi leaching dan mengkontaminasi endapan nikel. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) mengusulkan **pra-perlakuan desulfurisasi** dengan penambahan agen desulfurisasi (Na₂CO₃, NaOH) sebelum proses *roasting-reduction* untuk meningkatkan perolehan nikel residu HPAL. Integrasi kedua pendekatan—mitigasi scale dan pra-perlakuan desulfurisasi—merupakan state-of-the-art dalam rekayasa proses HPAL modern, dengan dampak langsung pada margin operasional proyek yang mencapai CAPEX USD 1–2 miliar per pabrik.

Urgensi industri atas pemahaman kuantitatif perilaku penskalaan dan karakterisasinya menjadi semakin tinggi karena pabrik HPAL generasi baru (seperti Huayue di Morowali dan QMB Energi di Halmahera) beroperasi pada kapasitas 30.000–60.000 ton nikel dalam Mixed Hydroxide Precipitate (MHP) per tahun. Kerugian produksi satu hari akibat penskalaan dapat mencapai USD 1–2 juta. Oleh karena itu, dokumentasi *knowledge base* yang komprehensif—mencakup model matematis, SOP, dan studi kasus kuantitatif—menjadi fondasi esensial bagi spesialis teknik industri yang berkarir di sektor metalurgi kritis ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas pada Dinding Autoclave Berlapis

Dinding autoclave HPAL merupakan komposit berlapis: baja karbon struktural (A516 Gr 70) → lapisan tahan korosi (PTFE atau karet butil atau *brick lining*) → lapisan *scale* yang terbentuk selama operasi. Laju perpindahan panas tunak (*steady-state*) melalui dinding komposit mengikuti hukum Fourier:

$$q = \frac{\Delta T_{overall}}{\sum R_i} = U \cdot \Delta T$$

di mana resistansi termal total $R_{total} = R_{steel} + R_{liner} + R_{scale} = \sum_{i} \frac{\delta_i}{k_i}$, dengan $\delta_i$ adalah ketebalan lapisan dan $k_i$ konduktivitas termal material. Koefisien perpindahan panas keseluruhan:

$$U = \left[\frac{1}{h_i} + \sum_{i=1}^{n}\frac{\delta_i}{k_i} + \frac{1}{h_o}\right]^{-1}$$

di mana $h_i$ dan $h_o$ berturut-turut adalah koefisien konveksi sisi slurry (≈ 1.500–2.500 W/m²K untuk slurry agitasi) dan sisi uap (≈ 6.000–10.000 W/m²K untuk kondensasi uap).

###