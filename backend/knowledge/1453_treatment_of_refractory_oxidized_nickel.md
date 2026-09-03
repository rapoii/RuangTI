# 1453 — Pengolahan Bijih Nikel Oksida Refraktori (ONO) dari Endapan Shevchenkovskoye: Rekayasa Proses, Kinetika Leaching, dan Strategi Metalurgi Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Treatment of Refractory Oxidized Nickel Ores (ONOs) from the Shevchenkovskoye Ore Deposit
**Jurnal & Sitasi Utama:** Chingis Tauakelov, Berik S. Rakhimbayev, Aliya Yskak (2025). *Metals*. DOI: [https://doi.org/10.3390/met15080876](https://doi.org/10.3390/met15080876)
**Sitasi Pendukung:** Chingis Tauakelov, Berik S. Rakhimbayev, Aliya Yskak (2025). *Metals*. DOI: [https://doi.org/10.3390/met15080876](https://doi.org/10.3390/met15080876)

---

## 1. Pendahuluan dan Konteks Industri

Deplesi endapan nikel sulfida kadar tinggi secara global telah menjadi sinyal struktural yang memicu pergeseran paradigma eksplorasi dan ekstraksi sumber daya nikel. Menurut Tauakelov, Rakhimbayev, dan Yskak (2025) dalam *Metals*, semakin menipisnya cadangan bijih sulfida bermutu tinggi (biasanya 1,5–3% Ni) mendorong industri untuk mengarahkan perhatian pada bijih nikel oksida (*oxidized nickel ores*/ONO), termasuk endapan kobalt–nikel Shevchenkovskoye di Kazakhstan yang menjadi fokus studi mereka. DOI resmi publikasi ini adalah [https://doi.org/10.3390/met15080876](https://doi.org/10.3390/met15080876). Permintaan global nikel melonjak akibat transisi energi (baterai Li-ion untuk kendaraan listrik, stainless steel, superalloy), sehingga daur hidup teknologi nikel menjadi variabel strategis bagi rantai pasok baja tahan karat dan elektrifikasi transportasi.

Konteks industri Kazakhstani menunjukkan urgensi rekayasa yang nyata. Bijih Shevchenkovskoye—bersama endapan lain di cekungan Turgai dan Semenanjung Kamchatka—memiliki karakteristik mineralogi yang kompleks: campuran garnierit, nikeliferus limonit, serpentin, dan smektit dengan kadar Ni total umumnya 0,5–1,2% serta distribusi partikel nikel yang halus dan terlokalisasi dalam struktur kristal refraktori. Tantangan ini menjelaskan mengapa proses benefisiasi konvensional (flotasi, pemisahan gravitasi) sulit mencapai *recovery* di atas 60% dan mengapa jalur pirometalurgi murni (rotary kiln–electric arc furnace) menjadi mahal secara energi dan kurang ramah lingkungan karena emisi CO₂ per ton nikel yang tinggi.

Studi Tauakelov et al. (2025) melakukan *comprehensive review* terhadap tiga pilar praktik industri saat ini: (1) **pirometalurgi** (peleburan reduktif, matte smelting, rotary kiln); (2) **hidrometalurgi** (leaching asam sulfat, leaching amonia, *high-pressure acid leaching*/HPAL); dan (3) **kombinasi piro-hidrometalurgi**. Evaluasi mereka menunjukkan bahwa setiap metode memiliki *trade-off* yang khas: pirometalurgi intensif modal namun rendah recovery pada bijih refraktori; hidrometalurgi memiliki recovery lebih tinggi tetapi sensitif terhadap konsumsi reagen dan pembentukan effluent. Atas dasar itulah penulis menyoroti potensi **hidro-katalitik leaching** sebagai alternatif fleksibel, hemat energi, dan beroperasi pada kondisi atmosferik—mewakili peluang *disruptive* bagi engineering proses masa depan. Urgensi strategis modul ini, oleh karena itu, adalah bagaimana seorang insinyur industri merancang sistem proses yang mengintegrasikan karakteristik mineralogi ONO, model kinetika leaching, dan analisis kelayakan ekonomi-lingkungan secara kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kuantitatif proses leaching ONO mengikuti kerangka *shrinking core model* (SCM) yang diperkenalkan Levenspiel dan telah banyak diaplikasikan pada kinetika ekstraksi logam. Untuk partikel spherical dengan *reaction-controlled* atau *diffusion-controlled* regime, hubungan konversi *X* terhadap waktu *t* diberikan oleh:

$$t = \frac{\rho_B \cdot r_0}{k_c \cdot C_A^n} \cdot \left[ 1 - (1-X)^{1/3} \right]$$

Di mana $\rho_B$ adalah densitas molar padatan (mol/cm³), $r_0$ jari-jari awal partikel (cm), $k_c$ konstanta laju (cm/s), $C_A$ konsentrasi reagen pelindi (mol/L), dan $n$ orde reaksi. Persamaan ini berlaku untuk rezim *chemical reaction control*. Apabila difusi lapisan produk (*ash layer*) menjadi *rate-limiting*, maka berlaku:

$$t = \frac{\rho_B \cdot r_0^2}{6 \cdot D_e \cdot C_A} \cdot \left[ 1 - 3(1-X)^{2/3} + 2(1-X) \right]$$

dengan $D_e$ adalah difusivitas efektif (cm²/s). Identifikasi rezim kontrol dilakukan dengan *diagnostic plot* antara $1-(1-X)^{1/3}$ versus *t* (linear = reaksi) atau $[1-3(1-X)^{2/3}+2(1-X)]$ versus *t* (linear = difusi).

Ketergantungan temperatur terhadap konstanta laju mengikuti persamaan Arrhenius:

$$k = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ faktor pra-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R = 8{,}314$ J/(mol·K), dan $T$ temperatur absolut (K). Untuk leaching asam sulfat pada garnierit, $E_a$ umumnya berada pada rentang 40–80 kJ/mol (reaksi-kontrol), sedangkan pada limonit nikeliferus $E_a$ ≈ 20–35 kJ/mol (difusi-kontrol).

*Recovery* nikel total sistem leaching didefinisikan sebagai:

$$R_{Ni} = \frac{C_{Ni}^{leachate} \cdot V_{leachate}}{m_{ore} \cdot C_{Ni}^{ore}} \times 100\%$$

dengan $C_{Ni}^{leachate}$ konsentrasi Ni di leachate (g/L), $V_{leachate}$ volume leachate (L), $m_{ore}$ massa bijih (g), dan $C_{Ni}^{ore}$ kadar Ni dalam bijih (%).

Untuk analisis termal pirometalurgi pada *rotary kiln*, neraca energi disederhanakan menjadi:

$$Q_{in} = Q_{out} + Q_{loss} = \dot{m}_{ore} \cdot c_p^{ore} \cdot \Delta T + \dot{m}_{fuel} \cdot LHV + Q_{rad} + Q_{conv}$$

Neraca massa leaching kontinyu pada reaktor CSTR (Continuous Stirred Tank Reactor) memenuhi:

$$\dot{m}_{ore,in} \cdot C_{Ni}^{ore} = \dot{m}_{ore,out} \cdot C_{Ni}^{ore,out} + \dot{V}_{leachate,out} \cdot C_{Ni}^{leachate} + \dot{m}_{Ni,accumulated}$$

Untuk analisis kelayakan, indikator *Net Present Value* (NPV) dan *payback period* diberikan oleh:

$$NPV = \sum_{t=0}^{T} \frac{(CF_t)}{(1+i)^t}$$

$$PP = \frac{I_0}{\overline{CF_{annual}}}$$

dengan $I_0$ investasi awal, $CF_t$ aliran kas tahun *t*, dan $i$ tingkat diskonto.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis teknologi hidro-katalitik leaching mengikuti SOP berlapis yang dirancang berdasarkan rekomendasi Tauakelov et al. (2025) dan standar industri ekstraktif (*ISO 12743* untuk sampling, *ASTM E1821* untuk ukuran partikel):

**Fase 1 — Karakterisasi Feed (Pra-Proses)**
1. Sampling bijih menurut ISO 12743 dengan metode increment sampling, minimum 5 kg per lot.
2. Analisis XRD dan XRF untuk komposisi mineralogi (garnierit, limonit, serpentin).
3. Analisis ukuran partikel dengan *laser diffraction* (target $d_{80} < 75\,\mu m$ untuk leaching efektif).
4. Penentuan kadar Ni, Co, Fe, Mg, Si melalui ICP-OES.

**Fase 2 — Preparasi Larutan dan Kondisi Proses**
1. Komposisi pelindi: $\mathrm{H_2SO_4}$ 80–150 g/L atau campuran asam amino-karboksilat untuk varian hidro-katalitik.
2. Rasio padat-cair (S/L) = 1:3 sampai 1:5.
3. Katalis: ion $\mathrm{Fe^{3+}}$ 0,5–2 g/L atau oksidator ringan (oksigen terlarut > 6 mg/L).
4. Temperatur: 60–95°C (kondisi atmosferik, $P = 1$ atm).
5. Waktu tinggal: 4–8 jam dengan agitasi 300–600 rpm.

**Fase 3 — Operasi Leaching**
1. Pemuatan bijih ke reaktor *tank leaching* stainless steel 316L.
2. Pemanasan gradual (5°C/menit) untuk menghindari *thermal shock*.
3. Injeksi udara/oksigen untuk menjaga $DO > 6$ mg/L.
4. Sampling periodik pada $t = 0, 1, 2, 4, 6, 8$ jam untuk kurva kinetika.
5. pH monitoring kontinyu (target pH < 1,5 untuk leaching asam sulfat).

**Fase 4 — Solid–Liquid Separation**
1. Filtrasi menggunakan *filter press* atau *vacuum belt filter*.
2. Pencucian *cake* (3 stage counter-current wash) untuk回收 residual Ni.
3. Netralisasi *cake* tailing dengan $\mathrm{Ca(OH)_2}$ sebelum disposasi.

**Fase 5 — Pemurnian dan Recovery Ni**
1. Ekstraksi pelarut dengan *D2EHPA* untuk memisahkan Ni dari Fe, Al.
2. Stripping dengan $\mathrm{H_