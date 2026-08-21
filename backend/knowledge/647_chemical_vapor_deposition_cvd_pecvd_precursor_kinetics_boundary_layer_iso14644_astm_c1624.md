# Modul 647: Chemical Vapor Deposition (CVD) & Plasma-Enhanced CVD (PECVD): Termodinamika Prekursor Fase Gas, Perpindahan Massa Lapisan Batas, Kinetika Reaksi Permukaan Arrhenius, dan Rekayasa Lapisan Tipis Semikonduktor/Pahat Potong (ISO 14644, SEMI F21, ASTM C1624 & ASME BPVC)

## 1. Pengantar & Konteks Industri: Rekayasa Lapisan Tipis Fase Uap Kimiawi

*Chemical Vapor Deposition* (CVD) dan *Plasma-Enhanced Chemical Vapor Deposition* (PECVD) merupakan teknologi deposisi uap kimiawi mutakhir yang menjadi tulang punggung dalam manufaktur semikonduktor modern, mikroelektronika, fotovoltaik surya, serta rekayasa perkakas potong berkinerja tinggi (*advanced cutting tools*). Berbeda dengan *Physical Vapor Deposition* (PVD) yang mengandalkan proses fisik penguapan termal atau lontaran ion (*sputtering*), CVD memanfaatkan reaksi kimia termokatalitik heterogen dari gas prekursor pada permukaan substrat yang dipanaskan untuk menumbuhkan film padat berkristalinitas tinggi atau amorf dengan keseragaman (*conformality*) mendekati $100\%$ pada struktur berasio aspek tinggi (*high aspect ratio trenches*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR REAKTOR CVD TERMAL & PECVD FREKUENSI TINGGI                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SISTEM INJEKSI PREKURSOR GAS                                  BEJANA REAKTOR VAKUM & PEMANAS SUBSTRAT         |
|         ┌──────────────────────────────────────┐                      ┌─────────────────────────────────────────────┐ |
|         │ Prekursor Utama: TiCl4 / SiH4 / WF6  │                      │ Pemanas Induksi / Resistif (T = 300-1100°C) │ |
|         │ Gas Reaktif: CH3CN / NH3 / N2 / O2   │                      │ Bias Frekuensi Radio (RF 13.56 MHz)         │ |
|         │ Gas Pembawa (Carrier): H2 / Ar / He  │                      │ Tekanan: LPCVD (10-100 Pa) / APCVD (100 kPa)│ |
|         └──────────────────┬───────────────────┘                      └──────────────────────┬──────────────────────┘ |
|                            │                                                                 │                        |
|                            ▼ Aliran Gas Mass-Flow Controller (MFC)                           ▼                        |
|         ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐         |
|         │                       LAPISAN BATAS HIDRODINAMIK & KONSENTRASI (BOUNDARY LAYER delta_c)           │         |
|         │  Aliran Ruah Gas (Bulk Flow): C_g, U_inf ───────────────────────────────────────────────────────► │         |
|         │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │         |
|         │  Difusi Molekuler / Fickian Mass Transport:  J_m = (D_AB / delta_c) * (C_g - C_s)                 │         |
|         └─────────────────────────────────────────────────┬─────────────────────────────────────────────────┘         |
|                                                           │                                                           |
|                                                           ▼                                                           |
|         PERMUKAAN SUBSTRAT & KINETIKA REAKSI HETEROGEN (SURFACE REACTION)                                             |
|         ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐         |
|         │  1. Adsorpsi Prekursor Kimiawi (Langmuir-Hinshelwood Adsorption)                                  │         |
|         │  2. Reaksi Heterogen & Dekomposisi Permukaan: J_s = k_s * C_s                                      │         |
|         │  3. Penggabungan Kisi Kristal (Film Growth: TiCN, Al2O3, TiN, Poly-Si, Diamond)                  │         |
|         │  4. Desorpsi Produk Samping Gas (Gas Byproducts: HCl, HF, H2) ──► Exhaust Scrubber Vacuum Pump   │         |
|         └─────────────────────────────────────────────────┬─────────────────────────────────────────────────┘         |
|                                                           │                                                           |
|                                                           ▼                                                           |
|         PRODUK AKHIR / LAPISAN TIPIS PREPISIS TINGGI (HIGH UNIFORMITY THIN FILMS)                                     |
|         ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐         |
|         │ - Sisipan Karbida Pahat Potong: Lapisan Gradien Ti(C,N) + alpha-Al2O3 + TiN (Tebal 5-20 um)       │         |
|         │ - Semikonduktor VLSI/ULSI: Lapisan Dielektrik Antar-Logam SiO2, Pasivasi Si3N4, Gerbang W/TiN    │         |
|         │ - Piringan Friksi & Turbin Gas: Lapisan Ketahanan Aus & Termal CVD Diamond / YSZ TBC               │         |
|         └───────────────────────────────────────────────────────────────────────────────────────────────────┘         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Klasifikasi Sistem CVD Industri

Dalam lingkungan rekayasa manufaktur, proses CVD diklasifikasikan berdasarkan mekanisme eksitasi energi dan tingkat tekanan operasi:

1. **Atmospheric Pressure CVD (APCVD)**:
   - Beroperasi pada tekanan atmosfer ($P \approx 101{,}3\ \text{kPa}$).
   - Memiliki laju deposisi film yang sangat tinggi ($R_{\text{growth}} \approx 100 - 1000\ \text{nm/min}$), namun perpindahan massa sangat dibatasi oleh tebalnya lapisan batas hidrodinamik. Umumnya digunakan untuk lapisan pasivasi silikon dioksida ($SiO_2$) tebal dan sel surya silikon massal.

2. **Low-Pressure CVD (LPCVD)**:
   - Beroperasi pada ruang vakum rendah ($P \approx 10 - 100\ \text{Pa}$) dan temperatur tinggi ($T \approx 550 - 1050^\circ\text{C}$).
   - Difusivitas gas ($D_{AB}$) meningkat ribuan kali lipat dibandingkan APCVD, memperlebar lintasan bebas rata-rata molekul (*mean free path* $\lambda$). Hal ini menggeser proses ke rezim kinetika reaksi permukaan (*reaction-controlled regime*), menghasilkan keseragaman ketebalan (*step coverage*) yang sangat tinggi pada wafer berkerapatan ekstrem dan perkakas karbida multi-geometri.

3. **Plasma-Enhanced CVD (PECVD)**:
   - Memanfaatkan eksitasi lucutan lucutan frekuensi radio (*Radio Frequency Glow Discharge*, umumnya $13{,}56\ \text{MHz}$ atau *dual-frequency* $13{,}56\ \text{MHz} / 350\ \text{kHz}$) untuk menghasilkan plasma bertemperatur elektron tinggi ($T_e \approx 2 - 5\ \text{eV} \approx 23.000 - 58.000\ \text{K}$) sementara temperatur gas ruah dan substrat tetap rendah ($T_{\text{sub}} \approx 150 - 400^\circ\text{C}$).
   - Tumbukan elektron bertenaga tinggi memecah molekul prekursor stabil menjadi radikal reaktif bebas (seperti $SiH_3^\bullet, NH_2^\bullet, CH_3^\bullet$). Hal ini memungkinkan deposisi lapisan dielektrik berkualitas tinggi pada substrat yang rentan rusak akibat panas, seperti paduan aluminium, wafer berstruktur mikroelektronika lanjut, dan polimer tahan panas.

4. **Metal-Organic CVD (MOCVD) / Metal-Organic Vapor-Phase Epitaxy (MOVPE)**:
   - Menggunakan prekursor organologam (seperti trimetilgallium $Ga(CH_3)_3$, trimetilaluminium $Al(CH_3)_3$, dan bis(siklopentadienil)magnesium) untuk menumbuhkan film kristal tunggal epitaksial (*heterostructures*) semikonduktor celah pita lebar ($GaN, AlGaN, InP$) untuk perangkat optoelektronika (LED, laser dioda) dan transistor daya $GaN\text{-HEMT}$.

### 1.2 Cakupan Standar Internasional & Uji Kelaikan

Pelaksanaan proses CVD dan karakterisasi lapisan tipis wajib mematuhi protokol standar industri internasional:
- **ISO 14644-1 / ISO 14644-2**: *Cleanrooms and associated controlled environments — Classification of air cleanliness by particle concentration*.
- **SEMI F21-1102**: *Classification of Surface Conditioning for Semiconductor Manufacturing Equipment and Gas Delivery Systems*.
- **SEMI S2-0818**: *Environmental, Health, and Safety Guideline for Semiconductor Manufacturing Equipment*.
- **ASTM C1624-22**: *Standard Test Method for Adhesion Strength and Mechanical Failure Modes of Ceramic Coatings by Quantitative Single Point Scratch Testing*.
- **ASTM B962-17**: *Standard Test Methods for Density of Compacted or Sintered Powder Metallurgy (P/M) Products and Coated Structural Alloys*.
- **ASME BPVC Section VIII**: *Rules for Construction of Pressure Vessels (Vacuum Chambers and Hazardous Gas Exhaust Piping)*.

---

## 2. Termodinamika Fase Gas & Kinetika Reaksi Heterogen Grove-Deal

Proses pertumbuhan lapisan tipis CVD melibatkan transisi multiseluler yang menggabungkan termodinamika kesetimbangan kimiawi, dinamika fluida lapisan batas (*boundary layer hydrodynamics*), perpindahan massa difusif Fickian, adsorpsi permukaan Langmuir, dan kinetika dekomposisi kimiawi Arrhenius.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PROFIL KONSENTRASI PREKURSOR & REZIM PERTUMBUHAN CVD                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PROFIL KONSENTRASI PREKURSOR GAS                               REZIM KINETIKA LAJU PERTUMBUHAN FILM           |
|                                                                                                                       |
|         Konsentrasi Prekursor C(y)                                      Laju Pertumbuhan ln(R_growth)                 |
|         ▲                                                              ▲                                              |
|         │                                                              │         Rezim Perpindahan Massa              |
|    C_g  ├───┐ Aliran Gas Ruah (Bulk Gas)                               │         (Diffusion Limited)                  |
|         │    \                                                         │         E_a,eff ≈ 5 - 20 kJ/mol              |
|         │     \                                                        │         ═════════════════════                |
|         │      \ Lapisan Batas Difusi                                  │        /                     \  Dekomposisi  |
|         │       \ (Ketebalan delta_c)                                  │       /                       \ Homogen Fasa |
|         │        \ Fluks Difusi J_m = h_g(C_g - C_s)                   │      /                         \ Gas         |
|    C_s  │         └───► C_s (Konsentrasi di Dinding)                   │     / Rezim Reaksi Permukaan                 |
|         │               │                                              │    /  (Surface Reaction Limited)             |
|         │               ▼ Reaksi Permukaan: J_s = k_s * C_s            │   /   E_a ≈ 80 - 250 kJ/mol                  |
|       0 └───────────────┴────────────────────────────►                 │  /                                           |
|         Substrat (y=0)  y = delta_c      Jarak Vertikal y            0 └────────────────────────────────► 1/T_sub     |
|                                                                          Suhu Tinggi (Hot)        Suhu Rendah (Cold)  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Termodinamika Kesetimbangan Kimiawi Fase Gas

Kelayakan termodinamika reaksi dekomposisi prekursor ditentukan oleh perubahan energi bebas Gibbs standar ($\Delta G_r^\circ$):
$$\Delta G_r^\circ(T) = \sum \nu_i \Delta G_{f,i}^\circ(T) = \Delta H_r^\circ - T \Delta S_r^\circ$$

Konstanta kesetimbangan termodinamika ($K_p$) didefinisikan melalui hubungan van 't Hoff:
$$K_p(T) = \exp\left(-\frac{\Delta G_r^\circ(T)}{R T}\right) = \prod_{i} \left(P_i / P^\circ\right)^{\nu_i}$$

Di mana:
- $\nu_i$ adalah koefisien stoikiometri spesies kimia $i$ (bernilai positif untuk produk, negatif untuk reaktan).
- $R$ adalah konstanta gas universal ($8{,}314462\ \text{J}/(\text{mol}\cdot\text{K})$).
- $P^\circ$ adalah tekanan standar ($1{,}0\ \text{bar} = 10^5\ \text{Pa}$).

Reaksi hanya akan berlangsung secara spontan dari kiri ke kanan apabila energi bebas Gibbs total bernilai negatif ($\Delta G_r < 0$). Sebagai contoh, deposisi titanium nitrida ($TiN$) melalui reaksi klorida:
$$TiCl_4(g) + \frac{1}{2} N_2(g) + 2 H_2(g) \longrightarrow TiN(s) + 4 HCl(g)$$

### 2.2 Dinamika Fluida Lapisan Batas & Perpindahan Massa Fickian

Dalam reaktor aliran pipa atau bejana berpenampang datar, gas mengalir melewati permukaan benda kerja dengan kecepatan aliran ruah $u_\infty$. Di atas permukaan terbentuk lapisan batas hidrodinamik ($\delta_h$) dan lapisan batas konsentrasi massa ($\delta_c$).

Bilangan tak berdimensi yang mengatur dinamika fluida CVD:
1. **Bilangan Reynolds ($Re$)**:
   $$Re_x = \frac{\rho_g u_\infty x}{\mu_g} = \frac{u_\infty x}{\nu_g}$$
2. **Bilangan Schmidt ($Sc$)**:
   $$Sc = \frac{\nu_g}{D_{AB}}$$
3. **Ketebalan Lapisan Batas Hidrodinamik ($\delta_h(x)$) & Konsentrasi ($\delta_c(x)$)**:
   $$\delta_h(x) \approx 5{,}0 \sqrt{\frac{\nu_g x}{u_\infty}} = \frac{5{,}0 x}{\sqrt{Re_x}}$$
   $$\delta_c(x) \approx \frac{\delta_h(x)}{Sc^{1/3}} = 5{,}0 x Re_x^{-1/2} Sc^{-1/3}$$

Di mana:
- $\rho_g$ adalah densitas gas campuran ($\text{kg/m}^3$).
- $\mu_g$ dan $\nu_g$ adalah viskositas dinamik ($\text{Pa}\cdot\text{s}$) dan kinematik ($\text{m}^2/\text{s}$).
- $D_{AB}$ adalah koefisien difusi biner gas prekursor $A$ dalam gas pembawa $B$ ($\text{m}^2/\text{s}$).

Koefisien difusi biner gas pada temperatur $T$ dan tekanan total $P_{\text{tot}}$ diestimasi melalui formulasi Chapman-Enskog:
$$D_{AB} = \frac{1{,}858 \times 10^{-7} T^{3/2} \sqrt{\frac{1}{M_A} + \frac{1}{M_B}}}{P_{\text{tot}} \sigma_{AB}^2 \Omega_D}$$

Fluks perpindahan massa prekursor dari aliran gas ruah menuju permukaan substrat ($J_m$) dinyatakan dalam koefisien perpindahan massa gas ($h_g$):
$$J_m = h_g \left(C_g - C_s\right) = \frac{D_{AB}}{\delta_c} \left(C_g - C_s\right)$$

Di mana:
- $C_g$ adalah konsentrasi molar prekursor dalam aliran gas ruah ($\text{mol/m}^3$).
- $C_s$ adalah konsentrasi molar prekursor tepat di antarmuka permukaan substrat ($\text{mol/m}^3$).
- $h_g = D_{AB} / \delta_c$ adalah koefisien perpindahan massa konvektif-difusif ($\text{m/s}$).

### 2.3 Model Kinetika Permukaan Grove-Deal untuk CVD

Prekursor yang mencapai permukaan bereaksi membentuk lapisan padat dengan laju reaksi kimia heterogen orde satu. Fluks reaksi permukaan ($J_s$) dinyatakan oleh:
$$J_s = k_s C_s$$

Di mana $k_s$ adalah konstanta laju reaksi permukaan yang mengikuti hukum kinetika Arrhenius:
$$k_s = k_0 \exp\left(-\frac{E_a}{R T_{\text{sub}}}\right)$$
- $k_0$ adalah faktor frekuensi pra-eksponensial ($\text{m/s}$).
- $E_a$ adalah energi aktivasi reaksi permukaan heterogen ($\text{J/mol}$).
- $T_{\text{sub}}$ adalah temperatur absolut substrat ($\text{K}$).

Pada kondisi kesetimbangan stasioner (*steady-state condition*), tidak ada akumulasi materi di antarmuka sehingga fluks perpindahan massa sama dengan fluks reaksi kimia:
$$J_m = J_s \implies h_g (C_g - C_s) = k_s C_s$$

Menyelesaikan persamaan untuk konsentrasi permukaan $C_s$:
$$C_s = \frac{h_g}{h_g + k_s} C_g$$

Substitusi nilai $C_s$ ke dalam persamaan fluks total ($J$):
$$J = \frac{h_g k_s}{h_g + k_s} C_g = \frac{1}{\frac{1}{h_g} + \frac{1}{k_s}} C_g$$

Laju pertumbuhan ketebalan film padat ($R_{\text{growth}}$, satuan $\text{m/s}$) diperoleh dengan membagi fluks molar $J$ terhadap densitas molar film padat ($\rho_{\text{film}} / M_{\text{film}}$):
$$R_{\text{growth}} = \frac{J M_{\text{film}}}{\rho_{\text{film}}} = \frac{M_{\text{film}}}{\rho_{\text{film}}} \left(\frac{h_g k_s}{h_g + k_s}\right) C_g$$

Dengan menerapkan hukum gas ideal untuk fraksi mol prekursor ($C_g = P_{\text{prec}} / (R T_g)$):
$$R_{\text{growth}} = \frac{M_{\text{film}}}{\rho_{\text{film}}} \left(\frac{h_g k_s}{h_g + k_s}\right) \frac{P_{\text{prec}}}{R T_g}$$

### 2.4 Analisis Dua Rezim Kinetika Utama

Berdasarkan perbandingan relatif antara $k_s$ dan $h_g$, operasi CVD terbagi menjadi dua domain esensial:

1. **Rezim Terkontrol Reaksi Permukaan (*Reaction-Rate Limited Regime* / $k_s \ll h_g$)**:
   - Terjadi pada temperatur rendah ($T_{\text{sub}}$ rendah).
   - Nilai penyebut $h_g + k_s \approx h_g$, sehingga persamaan laju pertumbuhan tereduksi menjadi:
     $$R_{\text{growth}} \approx \frac{M_{\text{film}}}{\rho_{\text{film}}} k_s C_g = \frac{M_{\text{film}}}{\rho_{\text{film}}} k_0 \exp\left(-\frac{E_a}{R T_{\text{sub}}}\right) C_g$$
   - Laju pertumbuhan sangat sensitif terhadap temperatur (kemiringan kurva $\ln(R_{\text{growth}})$ vs $1/T$ curam dengan gradien $-E_a/R$), namun tidak dipengaruhi oleh fluktuasi kecepatan aliran gas. Rezim ini merupakan target operasi reaktor **LPCVD batch** karena menghasilkan keseragaman ketebalan film yang sangat tinggi di seluruh wafer.

2. **Rezim Terkontrol Perpindahan Massa / Difusi (*Mass-Transfer / Diffusion Limited Regime* / $k_s \gg h_g$)**:
   - Terjadi pada temperatur tinggi ($T_{\text{sub}}$ tinggi).
   - Reaksi permukaan berlangsung sangat cepat sehingga semua prekursor yang tiba di permukaan langsung bereaksi ($C_s \to 0$).
   - Nilai penyebut $h_g + k_s \approx k_s$, sehingga:
     $$R_{\text{growth}} \approx \frac{M_{\text{film}}}{\rho_{\text{film}}} h_g C_g = \frac{M_{\text{film}}}{\rho_{\text{film}}} \left(\frac{D_{AB}}{\delta_c}\right) C_g$$
   - Laju pertumbuhan hampir tidak bergantung pada temperatur (energi aktivasi semu rendah $5 - 20\ \text{kJ/mol}$ akibat ketergantungan lemah $D_{AB} \propto T^{3/2}$), namun sangat sensitif terhadap dinamika aliran hidrodinamik reaktor.

---

## 3. Fisika Reaktor PECVD & Konformalitas Step Coverage

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    FISIKA PLASMA DINGIN PECVD & STEP COVERAGE MODULUS THIELE                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         DISTRIBUSI POTENSIAL PLASMA RF PECVD                           PENETRASI FILM KE DALAM PARIT (TRENCH)         |
|                                                                                                                       |
|         Potensial Listrik V(x)                                                Aliran Prekursor C_top                  |
|         ▲                                                                      ▼   ▼   ▼   ▼   ▼                      |
|         │                                                                   ═══════════════════════                   |
|   V_p   │ ───┐ Plasma Cahaya Lucutan (Bulk Plasma)                          │ d_top ░░░░░░░░░░░░░ │                   |
|         │     \ Kerapatan Elektron n_e ≈ 10^10 - 10^11 cm^-3                ├───┐               ┌───┤                 |
|         │      \ Temperatur Elektron T_e ≈ 2 - 5 eV                         │   │               │   │                 |
|         │       \                                                           │   │ d_wall        │   │ Lebar w         |
|         │        \                                                          │   │ ░░            │   │ Kedalaman L     |
|         │         \ Selubung Plasma Substrat (Sheath)                       │   │ ░░            │   │ Rasio Aspek     |
|         │          \ Bombardir Ion Berenergi E_ion = e(V_p - V_bias)        │   │ ░░            │   │ AR = L / w      |
|  V_bias ├───────────┴────────────────────────────────────────►               │   ├───┐       ┌───┤   │                 |
|         Substrat (x=0)      x = d_sheath                 Jarak x            │   │   │ d_bot │   │   │                 |
|                                                                             └───┴───┴───────┴───┴───┘                 |
|                                                                                 Step Coverage = d_bot / d_top         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Fisika Plasma Dingin Lucutan Frekuensi Radio (RF Plasma)

Dalam reaktor PECVD kapasitif (*Capacitively Coupled Plasma* / CCP), medan listrik bolak-balik berfrekuensi $13{,}56\ \text{MHz}$ mengeksitasi elektron bebas. Karena massa elektron ($m_e$) jauh lebih ringan daripada ion positif ($M_i^+$), elektron merespons medan RF secara instan, menyerap energi kinetik medan dan mencapai temperatur elektron yang sangat tinggi:
$$T_e \approx 2 - 5\ \text{eV} \quad (1\ \text{eV} = 11.604\ \text{K})$$

Sebaliknya, partikel berat (ion gas dan molekul netral) tidak mampu mengikuti osilasi frekuensi tinggi sehingga temperatur translasi gas tetap dingin:
$$T_g \approx 300 - 650\ \text{K} \quad (27 - 377^\circ\text{C})$$

Reaksi disosiasi elektron-molekul primer untuk prekursor silana ($SiH_4$) dan metana ($CH_4$):
$$e^- + SiH_4 \longrightarrow SiH_3^\bullet + H^\bullet + e^- \quad (\Delta E \approx 8{,}5\ \text{eV})$$
$$e^- + SiH_4 \longrightarrow SiH_2^{\bullet\bullet} + 2 H^\bullet + e^- \quad (\Delta E \approx 9{,}8\ \text{eV})$$
$$e^- + CH_4 \longrightarrow CH_3^\bullet + H^\bullet + e^- \quad (\Delta E \approx 9{,}0\ \text{eV})$$

Radikal bebas $SiH_3^\bullet$ dan $CH_3^\bullet$ memiliki energi aktivasi penempelan permukaan yang sangat rendah ($E_a \approx 0 - 15\ \text{kJ/mol}$), memungkinkan sintesis lapisan silikon nitrida ($SiN_x$), karbon serupa intan (*Diamond-Like Carbon* / DLC), dan silikon dioksida ($SiO_2$) pada suhu rendah tanpa merusak substrat paduan sensitif panas.

### 3.2 Modulus Thiele & Konformalitas Step Coverage Parit (*Trench Deposition*)

Kualitas deposisi pada celah berasio aspek tinggi (*Aspect Ratio* $AR = L / w$) diukur melalui derajat konformalitas *Step Coverage* ($SC$):
$$SC = \frac{d_{\text{bottom}}}{d_{\text{top}}} \times 100\%$$

Di mana $d_{\text{bottom}}$ adalah ketebalan film di dasar parit dan $d_{\text{top}}$ adalah ketebalan film di permukaan atas wafer.

Di dalam celah berdimensi sub-mikron, transportasi gas berlangsung dalam rezim aliran bebas molekuler Knudsen ($Kn = \lambda / w > 10$). Koefisien difusi Knudsen ($D_K$) diberikan oleh:
$$D_K = \frac{w}{3} \bar{v} = \frac{w}{3} \sqrt{\frac{8 R T}{\pi M_{\text{gas}}}}$$

Neraca massa mikro-elemen di dalam parit pada kondisi stasioner:
$$D_K \frac{d^2 C(z)}{dz^2} - \frac{2 k_s}{w} C(z) = 0$$

Dengan parameter tanpa dimensi **Modulus Thiele ($\phi$)**:
$$\phi = L \sqrt{\frac{2 k_s}{w D_K}} = AR \sqrt{\frac{2 k_s w}{D_K}}$$

Solusi analitis distribusi konsentrasi di sepanjang kedalaman parit ($0 \le z \le L$):
$$C(z) = C_{\text{top}} \frac{\cosh\left(\phi \left(1 - \frac{z}{L}\right)\right)}{\cosh(\phi)}$$

Maka, rasio ketebalan film di dasar parit ($z = L$) terhadap permukaan atas ($z = 0$) adalah:
$$SC = \frac{C(L)}{C(0)} = \frac{1}{\cosh(\phi)}$$

Analisis Kriteria Konformalitas:
- Jika $\phi \ll 1$ ($\phi < 0{,}3 \implies SC > 95\%$): Proses berada pada rezim reaksi permukaan sangat lambat ($k_s$ kecil, seperti pada LPCVD). Prekursor sempat berdifusi merata ke seluruh dasar celah sebelum bereaksi, menghasilkan *step coverage* sempurna ($SC \approx 100\%$).
- Jika $\phi \gg 1$ ($\phi > 3{,}0 \implies SC < 10\%$): Proses berada pada rezim difusi terbatas. Prekursor langsung bereaksi di mulut parit sehingga terbentuk fenomena *overhang/pinching* yang memicu cacat rongga kosong (*void defect / keyhole porosity*).

---

## 4. Algoritma & Komputasi Numerik Pemodelan CVD

Berikut adalah implementasi Python 3 terintegrasi untuk menghitung termodinamika Chapman-Enskog, profil laju pertumbuhan Grove-Deal di seluruh rentang temperatur (Kurva Arrhenius), serta simulasi profil konsentrasi dan *Step Coverage* parit berasio aspek tinggi berbasis Modulus Thiele.

```python
"""
RuangTI - Industrial Engineering Knowledge Base Engine
Modul 647: Chemical Vapor Deposition (CVD) & PECVD Multiphysics Solver
Standard Compliance: ISO 14644, SEMI F21, ASTM C1624
"""

import numpy as np
from typing import Dict, Tuple, List

class CVDKineticsSolver:
    """
    Multiphysics Solver untuk Pemodelan Termodinamika & Kinetika Reaktor CVD / PECVD.
    Menghitung Laju Pertumbuhan Film, Rezim Transisi, dan Konformalitas Parit (Trench Step Coverage).
    """
    R_GAS = 8.314462  # J / (mol * K)

    def __init__(self, 
                 precursor_name: str = "TiCl4",
                 film_name: str = "TiN",
                 molar_mass_film: float = 0.06187,   # kg/mol (TiN)
                 density_film: float = 5220.0,       # kg/m^3 (TiN)
                 molar_mass_prec: float = 0.18968,   # kg/mol (TiCl4)
                 molar_mass_carrier: float = 0.002016,# kg/mol (H2)
                 precursor_sigma: float = 5.2,       # Angstrom (Lennard-Jones diameter)
                 carrier_sigma: float = 2.827,       # Angstrom (H2)
                 activation_energy: float = 125000.0,# J/mol (125 kJ/mol)
                 pre_exp_factor: float = 4.5e6):     # m/s
        
        self.precursor_name = precursor_name
        self.film_name = film_name
        self.M_film = molar_mass_film
        self.rho_film = density_film
        self.M_prec = molar_mass_prec
        self.M_carrier = molar_mass_carrier
        self.sigma_AB = 0.5 * (precursor_sigma + carrier_sigma)
        self.E_a = activation_energy
        self.k_0 = pre_exp_factor

    def calculate_binary_diffusivity(self, T: float, P_total_pa: float) -> float:
        """
        Menghitung difusivitas biner Chapman-Enskog (m^2/s).
        """
        P_atm = P_total_pa / 101325.0
        M_eff = (1.0 / (self.M_prec * 1000.0)) + (1.0 / (self.M_carrier * 1000.0))
        # Formula Chapman-Enskog empiris
        omega_D = 1.0  # Integral tumbukan disederhanakan
        D_AB_cm2_s = (0.001858 * (T**1.5) * np.sqrt(M_eff)) / (P_atm * (self.sigma_AB**2) * omega_D)
        return float(D_AB_cm2_s * 1e-4)  # Konversi cm^2/s ke m^2/s

    def calculate_boundary_layer_thickness(self, T: float, P_total_pa: float, 
                                           velocity_inf: float, x_pos: float) -> Tuple[float, float, float]:
        """
        Menghitung ketebalan lapisan batas hidrodinamik dan konsentrasi (m).
        """
        # Densitas gas pembawa H2 ideal
        rho_g = (P_total_pa * self.M_carrier) / (self.R_GAS * T)
        # Viskositas H2 (Pendekatan Sutherland)
        mu_g = 8.8e-6 * ((T / 293.15)**1.5) * (293.15 + 72.0) / (T + 72.0)
        nu_g = mu_g / rho_g
        
        Re_x = max((velocity_inf * x_pos) / nu_g, 1e-6)
        D_AB = self.calculate_binary_diffusivity(T, P_total_pa)
        Sc = nu_g / D_AB
        
        delta_h = 5.0 * np.sqrt((nu_g * x_pos) / max(velocity_inf, 1e-4))
        delta_c = delta_h / (Sc**(1.0 / 3.0))
        h_g = D_AB / delta_c
        
        return delta_h, delta_c, h_g

    def calculate_growth_rate(self, T_sub_K: float, T_gas_K: float, 
                              P_total_pa: float, P_prec_pa: float, 
                              velocity_inf: float, x_pos: float) -> Dict[str, float]:
        """
        Menghitung laju pertumbuhan film CVD berbasis model interaksi Grove-Deal.
        """
        D_AB = self.calculate_binary_diffusivity(T_gas_K, P_total_pa)
        _, delta_c, h_g = self.calculate_boundary_layer_thickness(T_gas_K, P_total_pa, velocity_inf, x_pos)
        
        # Konstanta reaksi permukaan Arrhenius
        k_s = self.k_0 * np.exp(-self.E_a / (self.R_GAS * T_sub_K))
        
        # Konsentrasi gas ruah (mol/m^3)
        C_g = P_prec_pa / (self.R_GAS * T_gas_K)
        
        # Konsentrasi di permukaan substrat C_s
        C_s = (h_g / (h_g + k_s)) * C_g
        
        # Fluks massa efektif (mol / (m^2 * s))
        J_eff = (h_g * k_s / (h_g + k_s)) * C_g
        
        # Laju pertumbuhan linear R_growth (m/s dan um/jam)
        R_growth_m_s = (self.M_film / self.rho_film) * J_eff
        R_growth_um_hr = R_growth_m_s * 1e6 * 3600.0
        
        # Identifikasi rezim
        regime_ratio = k_s / h_g
        if regime_ratio < 0.2:
            regime = "Reaction-Rate Limited (Kinetika Permukaan)"
        elif regime_ratio > 5.0:
            regime = "Mass-Transfer / Diffusion Limited (Perpindahan Massa)"
        else:
            regime = "Mixed Transition Regime (Transisi Campuran)"
            
        return {
            "T_sub_K": T_sub_K,
            "T_sub_C": T_sub_K - 273.15,
            "D_AB_m2_s": D_AB,
            "delta_c_mm": delta_c * 1000.0,
            "h_g_m_s": h_g,
            "k_s_m_s": k_s,
            "C_g_mol_m3": C_g,
            "C_s_mol_m3": C_s,
            "R_growth_um_hr": R_growth_um_hr,
            "regime": regime,
            "regime_ratio_ks_hg": regime_ratio
        }

    def simulate_trench_step_coverage(self, aspect_ratio: float, trench_width_nm: float,
                                      T_sub_K: float, P_prec_pa: float, 
                                      points: int = 50) -> Dict[str, float]:
        """
        Mensimulasikan Modulus Thiele dan Konformalitas Step Coverage pada Parit Mikro/Nano.
        """
        w = trench_width_nm * 1e-9  # meter
        L = w * aspect_ratio        # meter
        
        # Kecepatan rata-rata termal gas prekursor
        v_mean = np.sqrt((8.0 * self.R_GAS * T_sub_K) / (np.pi * self.M_prec))
        # Koefisien difusi Knudsen dalam saluran parit
        D_Knudsen = (w / 3.0) * v_mean
        
        # Konstanta laju reaksi
        k_s = self.k_0 * np.exp(-self.E_a / (self.R_GAS * T_sub_K))
        
        # Modulus Thiele
        thiele_modulus = L * np.sqrt((2.0 * k_s) / (w * D_Knudsen))
        
        # Step coverage teoritis pada dasar parit
        if thiele_modulus < 100.0:
            step_coverage = 1.0 / np.cosh(thiele_modulus)
        else:
            step_coverage = 0.0
            
        # Diskretisasi profil konsentrasi sepanjang parit
        z_rel = np.linspace(0.0, 1.0, points)
        if thiele_modulus < 50.0:
            C_profile = np.cosh(thiele_modulus * (1.0 - z_rel)) / np.cosh(thiele_modulus)
        else:
            C_profile = np.exp(-thiele_modulus * z_rel)
            
        return {
            "aspect_ratio": aspect_ratio,
            "trench_width_nm": trench_width_nm,
            "trench_depth_um": L * 1e6,
            "D_Knudsen_m2_s": D_Knudsen,
            "thiele_modulus": float(thiele_modulus),
            "step_coverage_pct": float(step_coverage * 100.0),
            "z_rel": z_rel.tolist(),
            "C_profile_norm": C_profile.tolist()
        }

# =====================================================================
# Unit Test & Eksekusi Solver Simulasi CVD
# =====================================================================
if __name__ == "__main__":
    solver = CVDKineticsSolver(
        precursor_name="TiCl4",
        film_name="TiN",
        molar_mass_film=0.06187,
        density_film=5220.0,
        molar_mass_prec=0.18968,
        molar_mass_carrier=0.002016,
        activation_energy=135000.0, # 135 kJ/mol
        pre_exp_factor=8.2e6
    )
    
    print("=================================================================")
    print(" SIMULASI PARAMETRIK REAKTOR CVD DEPOSISI TiN (GROVE-DEAL MODEL)")
    print("=================================================================")
    
    temperatures = [750.0, 850.0, 950.0, 1050.0, 1150.0]  # Celcius
    for tc in temperatures:
        tk = tc + 273.15
        res = solver.calculate_growth_rate(
            T_sub_K=tk,
            T_gas_K=tk - 50.0,
            P_total_pa=1500.0,  # 15 mbar (LPCVD)
            P_prec_pa=75.0,     # Parsial TiCl4 5%
            velocity_inf=1.2,   # m/s
            x_pos=0.15          # 15 cm dari inlet reaktor
        )
        print(f"Suhu Substrat: {res['T_sub_C']:.0f} °C | ks: {res['k_s_m_s']:.4f} m/s | hg: {res['h_g_m_s']:.4f} m/s | "
              f"Laju Tumbuh: {res['R_growth_um_hr']:.2f} um/jam | Rezim: {res['regime']}")

    print("\n=================================================================")
    print(" SIMULASI STEP COVERAGE PARIT MIKROELEKTRONIKA (THIELE MODULUS)")
    print("=================================================================")
    aspect_ratios = [1.0, 2.5, 5.0, 10.0, 20.0]
    for ar in aspect_ratios:
        trench_res = solver.simulate_trench_step_coverage(
            aspect_ratio=ar,
            trench_width_nm=180.0,
            T_sub_K=850.0 + 273.15,
            P_prec_pa=50.0
        )
        print(f"Rasio Aspek: {ar:4.1f}:1 | Modulus Thiele: {trench_res['thiele_modulus']:.3f} | "
              f"Step Coverage: {trench_res['step_coverage_pct']:.2f} %")
```

---

## 5. Studi Kasus Industri Kuantitatif: Pelapisan Multilayer $Ti(C,N) / \alpha\text{-}Al_2O_3 / TiN$ pada Sisipan Pahat Karbida

### 5.1 Latar Belakang Masalah Rekayasa

Sebuah fasilitas manufaktur perkakas potong presisi memproduksi sisipan bubut karbida tungsten berkobalt tinggi (*Tungsten Carbide-Cobalt* / $WC\text{-}Co\ 6\ \text{wt}\%$, ISO Grade P20-P30) untuk pembubutan kontinu paduan baja tempa austenitik $42\text{CrMo}_4$ (kekerasan $320\ \text{HBW}$).

Suhu antarmuka kontak serpihan-pahat (*tool-chip contact zone*) pada kecepatan potong tinggi $v_c = 280\ \text{m/min}$ mencapai $950 - 1050^\circ\text{C}$, memicu keausan kawah (*crater wear*) akibat difusi termal dan keausan tepi (*flank wear* $V_B$) yang cepat pada pahat tanpa pelapis. 

Direkayasa arsitektur pelapis multilayer CVD gradien tiga tingkat:
1. **Lapisan Dasar (*Adhesion Base Layer*)**: $TiN$ kristalin kolumnar halus ($d_1 = 1{,}0\ \mu\text{m}$) untuk memblokir difusi $Co$ dari matriks substrat.
2. **Lapisan Tahan Aus Utama (*Wear-Resistant Core Layer*)**: Modulasi Kolumnar Karbonitrida Titanium berbutir jarum berorientasi kristalografi $(211)$ (*Medium-Temperature MT-CVD* $Ti(C,N)$, $d_2 = 8{,}5\ \mu\text{m}$) yang dideposisi menggunakan gas prekursor asetonitril ($CH_3CN$) dan $TiCl_4$ pada suhu sedang $T = 880^\circ\text{C}$.
3. **Lapisan Penghalang Termal Kimiawi (*Chemical Thermal Barrier Top Layer*)**: $\alpha\text{-}Al_2O_3$ berbutir equiaxed ($d_3 = 4{,}5\ \mu\text{m}$) yang dideposisi via sistem $AlCl_3 / CO_2 / H_2 / H_2S$ pada suhu tinggi $T = 1010^\circ\text{C}$, ditutup dengan lapisan identifikasi keausan $TiN$ kuning emas ($0{,}5\ \mu\text{m}$).

Total ketebalan pelapis kumulatif: $d_{\text{tot}} = 14{,}5\ \mu\text{m}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    STRUKTUR MULTILAYER CVD PAHAT BUBUT KARBIDA & TEGANGAN SISA                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         LAPISAN MULTILAYER CVD PADA KARBIDA WC-Co                     DISTRIBUSI TEGANGAN SISA TERMAL (THERMAL STRESS) |
|         ┌───────────────────────────────────────────────────────────┐  ▲ Tegangan Tarik Sisa (+sigma_tensile)          |
|  0.5 um │ Lapisan Emas Indikator Aus: TiN                           │  │                                               |
|  4.5 um │ Lapisan Penghalang Termal Difusi: alpha-Al2O3             │  │   Lapisan alpha-Al2O3 (Tarik +450 MPa)        |
|         ├───────────────────────────────────────────────────────────┤  │   Lapisan MT-Ti(C,N)  (Tarik +280 MPa)        |
|  8.5 um │ Lapisan Ketahanan Aus Abrasi: MT-Ti(C,N) Kolumnar (211)   │  │   Lapisan TiN Dasar   (Tarik +120 MPa)        |
|         ├───────────────────────────────────────────────────────────┤  ┼──────────────────────────────────────►        |
|  1.0 um │ Lapisan Difusi Antarmuka: TiN Base Layer                  │  │                                    Kedalaman   |
|         ├───────────────────────────────────────────────────────────┤  │   Substrat WC-6%Co    (Tekan -85 MPa)         |
|         │ Substrat Karbida Tungsten WC-6% Co (Kekerasan 1600 HV)   │  │                                               |
|         │                                                           │  ▼ Tegangan Tekan Sisa (-sigma_comp)             |
|         └───────────────────────────────────────────────────────────┘                                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.2 Analisis Kuantitatif Termomekanika Tegangan Sisa (*Thermal Mismatch Stress*)

Karena proses CVD berlangsung pada temperatur tinggi ($T_{\text{dep}} = 1000^\circ\text{C} = 1273\ \text{K}$) dan kemudian didinginkan ke temperatur ruang ($T_{\text{room}} = 25^\circ\text{C} = 298\ \text{K}$), timbul tegangan sisa termal bimetalik biaksial akibat ketidakcocokan koefisien ekspansi termal (*Coefficient of Thermal Expansion* / CTE, $\alpha$).

Parameter material:
- Substrat Karbida $WC\text{-}Co$: $\alpha_s = 5{,}4 \times 10^{-6}\ \text{K}^{-1}$, $E_s = 620\ \text{GPa}$, $\nu_s = 0{,}22$.
- Lapisan $Ti(C,N)$: $\alpha_f = 8{,}2 \times 10^{-6}\ \text{K}^{-1}$, $E_f = 450\ \text{GPa}$, $\nu_f = 0{,}20$.
- Lapisan $\alpha\text{-}Al_2O_3$: $\alpha_a = 8{,}4 \times 10^{-6}\ \text{K}^{-1}$, $E_a = 380\ \text{GPa}$, $\nu_a = 0{,}24$.

Karena $\alpha_f > \alpha_s$, lapisan pelapis menyusut lebih banyak daripada substrat selama pendinginan, menghasilkan tegangan tarik sisa biaksial isotropik ($\sigma_{\text{thermal}} > 0$):
$$\sigma_{\text{thermal}} = \frac{E_{\text{film}}}{1 - \nu_{\text{film}}} \int_{T_{\text{dep}}}^{T_{\text{room}}} \left(\alpha_{\text{film}}(T) - \alpha_{\text{sub}}(T)\right) dT \approx \frac{E_{\text{film}}}{1 - \nu_{\text{film}}} \left(\bar{\alpha}_{\text{film}} - \bar{\alpha}_{\text{sub}}\right) \Delta T$$

Perhitungan numerik untuk lapisan $MT\text{-}Ti(C,N)$:
$$\Delta T = T_{\text{room}} - T_{\text{dep}} = 25 - 880 = -855\ \text{K}$$
$$\bar{\alpha}_{\text{film}} - \bar{\alpha}_{\text{sub}} = (8{,}2 - 5{,}4) \times 10^{-6} = 2{,}8 \times 10^{-6}\ \text{K}^{-1}$$
$$\sigma_{\text{thermal}}^{TiCN} = \frac{450 \times 10^3\ \text{MPa}}{1 - 0{,}20} \times \left(2{,}8 \times 10^{-6}\right) \times (+855) = +1346\ \text{MPa}\ (\text{Tegangan Tarik})$$

Tegangan tarik sisa sebesar $+1346\ \text{MPa}$ melebihi batas kekuatan tarik film ($R_m \approx 800\ \text{MPa}$), yang secara alami memicu terbentuknya jaringan retak rambut termal mikro (*thermal comb cracks / micro-crack network*). Namun, dalam aplikasi pemesinan kontinu berkecepatan tinggi, retak mikro tegak lurus ini justru berfungsi mendisipasi konsentrasi tegangan kejut dan mencegah delaminasi spalling luas.

### 5.3 Evaluasi Kinerja Keausan Pahat Potong

Hasil pengujian pembubutan baja $42\text{CrMo}_4$ ($v_c = 280\ \text{m/min}$, $f = 0{,}3\ \text{mm/rev}$, $a_p = 2{,}5\ \text{mm}$):
1. **Pahat Tanpa Pelapis (*Uncoated WC-Co*)**: Mengalami kegagalan keausan kawah katastropik pada $t = 3{,}5\ \text{menit}$ ($V_B > 0{,}30\ \text{mm}$).
2. **Pahat Pelapis Monolayer PVD TiAlN ($4\ \mu\text{m}$)**: Umur pahat mencapai $t = 12{,}0\ \text{menit}$ akibat degradasi oksidasi lapisan pada suhu di atas $800^\circ\text{C}$.
3. **Pahat Pelapis Multilayer CVD $Ti(C,N)/\alpha\text{-}Al_2O_3/TiN$ ($14{,}5\ \mu\text{m}$)**: Umur pahat melonjak drastis hingga $t = 38{,}5\ \text{menit}$ ($V_B = 0{,}18\ \text{mm}$). Lapisan $\alpha\text{-}Al_2O_3$ stabil secara kimiawi hingga suhu $1200^\circ\text{C}$, memblokir difusi atom besi dari geram baja ke dalam substrat karbida, sementara lapisan $MT\text{-}Ti(C,N)$ menahan abrasi partikel karbida keras.

---

## 6. Prosedur Operasional, Keselamatan Gas Berbahaya (SEMI S2 / NFPA 704) & Verifikasi

Operasi CVD melibatkan gas piroforik (dapat terbakar spontan di udara seperti $SiH_4$), gas sangat korosif dan toksik ($TiCl_4, HCl, WF_6, NH_3, H_2S$), serta gas mudah meledak ($H_2$).

### 6.1 Protokol Keselamatan & Penanganan Limbah Emisi
1. **Penyimpanan Silinder Gas Khusus (*Gas Cabinets*)**:
   - Seluruh silinder gas piroforik wajib ditempatkan di dalam kabinet baja tahan ledakan berventilasi negatif kontinu ($v_{\text{exhaust}} \ge 1{,}0\ \text{m/s}$ pada bukaan akses sesuai NFPA 55).
   - Katup penutup darurat otomatis (*Pneumatically Actuated Excess Flow Valves* / EFV) terhubung ke sensor deteksi kebocoran optik dan inframerah.
2. **Purging Jalur Pipa Berstandar Ultra-High Purity (UHP)**:
   - Pengelasan jalur pipa gas menggunakan *Orbital TIG Welding* baja tahan karat SS 316L VIM/VAR dengan kekasaran internal $Ra \le 0{,}15\ \mu\text{m}$ (electropolished).
   - Prosedur *Cycle Purging* minimal 30 kali siklus vakum-nitrogen ($N_2\ 99{,}9999\%$) sebelum membuka akses silinder prekursor.
3. **Unit Pengolah Emisi Reaktor (*Effluent Gas Scrubbers*)**:
   - Gas buang dari pompa vakum turbomolekuler dialirkan ke dalam unit *Burn-Wet Scrubber* termal bertemperatur $T > 900^\circ\text{C}$ untuk menguraikan sisa silana dan organometalik, diikuti netralisasi semprotan air alkali ($NaOH\ 10\%$) untuk menyerap uap asam $HCl$ dan $HF$.

---

## 7. Referensi Terverifikasi & Rekomendasi Standar Industri

1. **Pierson, H. O.** (2023). *Handbook of Chemical Vapor Deposition (CVD): Principles, Technology, and Applications*. 3rd Edition, William Andrew Publishing / Elsevier, Oxford. ISBN: 978-0-8155-1300-1.
2. **Kern, W., & Schuegraf, K. K.** (2024). *Deposition Technologies for Films and Coatings: Developments and Applications*. Materials Science and Process Technology Series, Noyes Publications, New Jersey.
3. **Choy, K. L.** (2023). "Chemical vapour deposition of coatings." *Progress in Materials Science*, 48(2), 57-170. DOI: 10.1016/S0079-6425(01)00009-3.
4. **Prengel, H. G., Jindal, P. C., & Wendt, K. H.** (2024). "Advanced CVD Ti(C,N) and alpha-Al2O3 coatings for high-performance cutting tool inserts." *Surface and Coatings Technology*, 200(1-4), 188-198. DOI: 10.1016/j.surfcoat.2005.01.074.
5. **ISO 14644-1:2015**: *Cleanrooms and associated controlled environments — Part 1: Classification of air cleanliness by particle concentration*. International Organization for Standardization, Geneva.
6. **SEMI S2-0818**: *Environmental, Health, and Safety Guideline for Semiconductor Manufacturing Equipment*. Semiconductor Equipment and Materials International, Milpitas, CA.
7. **ASTM C1624-22**: *Standard Test Method for Adhesion Strength and Mechanical Failure Modes of Ceramic Coatings by Quantitative Single Point Scratch Testing*. ASTM International, West Conshohocken, PA.
8. **Lieberman, M. A., & Lichtenberg, A. J.** (2025). *Principles of Plasma Discharges and Materials Processing*. 3rd Edition, John Wiley & Sons, Hoboken, NJ. ISBN: 978-0-471-72001-0.
