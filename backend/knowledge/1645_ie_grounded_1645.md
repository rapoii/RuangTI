# 1645 — Karakteristik dan Pengendalian Pembentukan Kerak Autoclave pada Pelindian Bijih Nikel Laterit dengan Proses High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Mineral Processing & Hydrometallurgy
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. **Cleaner Waste Systems**. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. **AIP Conference Proceedings**. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) terus meningkat seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi berskala besar. Bijih nikel laterit, yang menyumbang sekitar 60–70% dari total cadangan nikel dunia namun hanya berkontribusi ~40% produksi nikel primer, menjadi perhatian strategis karena kendala teknis dalam ekstraksinya (Dickson dkk., 2026, DOI: 10.1016/j.clwas.2026.100503). Bijih laterit memiliki kadar nikel rendah (0.8–1.5% Ni) dan kandungan besi, magnesium, serta alumunium tinggi, sehingga proses pirometalurgi konvensional tidak efisien. Oleh sebab itu, High-Pressure Acid Leaching (HPAL) dalam autoclave baja karbon berlapis tahan asam menjadi teknologi dominan, dengan operasi tipikal pada suhu 240–270 °C dan tekanan 30–45 bar menggunakan asam sulfat pekat (Andrameda dkk., 2024, DOI: 10.1063/5.0186417).

Namun demikian, HPAL memiliki satu tantangan operasional kritis yang menentukan keberlanjutan ekonomi pabrik: **pembentukan kerak (scaling) pada dinding, impeller, dan pipa heat exchanger autoclave**. Kerak tersebut terutama tersusun dari alunit $\text{KAl}_3(\text{SO}_4)_2(\text{OH})_6$, jarosit $\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$, hematit $\text{Fe}_2\text{O}_3$, anhidrit $\text{CaSO}_4$, dan magnesium sulfat terhidrasi, yang terbentuk melalui reaksi hidrolisis dan presipitasi selama proses leaching (Dickson dkk., 2026). Dari perspektif teknik industri, masalah ini bukan sekadar isu kimiawi, melainkan masalah **keandalan aset (asset reliability)**, **efisiensi energi**, dan **throughput produksi**. Akumulasi kerak setebal 5–15 mm dapat menurunkan koefisien perpindahan panas menyeluruh (overall heat transfer coefficient) sebesar 30–60%, memaksa shutdown pabrik yang tidak terjadwal (*unscheduled downtime*) setiap 30–90 hari. Kerugian produksi akibat scaling pada fasilitas HPAL berskala komersial dapat mencapai USD 5–15 juta per kejadian shutdown, belum termasuk biaya pickling kimia dengan asam fluorida atau mekanis removal yang membutuhkan waktu 2–6 minggu.

Urgensi penelitian Dickson, Deleau, dan Espitalier (2026) terletak pada upaya mengkuantifikasi perilaku kerak secara *in-situ*, mengkarakterisasi komposisi mineraloginya dengan teknik XRD, SEM-EDS, dan Raman spectroscopy, serta memodelkan laju akumulasinya sebagai fungsi suhu, konsentrasi asam, residence time, dan komposisi umpan bijih. Sementara itu, Andrameda, Triaswinanti, dan Madra (2024) melengkapi aspek *residue valorization* dengan mempelajari pengaruh agen desulfurisasi (NaOH, Na$_2$CO$_3$, CaO), suhu, dan waktu *roasting-reduction* terhadap recovery logam dari residu HPAL, yang secara tidak langsung mengendalikan komposisi slurry umpan dan mengurangi potensi scaling sekunder. Kedua literatur ini membentuk kerangka rekayasa yang utuh: **mencegah terbentuknya kerak dari hulu (umpan & kondisi operasi) dan memitigasi dampak residunya di hilir**.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian — Shrinking Core Model (SCM)

Pelindian partikel bijih nikel laterit secara umum mengikuti model *unreacted shrinking core* dengan difusi melalui lapisan produk sebagai tahap pengendali pada suhu tinggi HPAL. Konversi fraksional $X$ terhadap waktu $t$ untuk difusi melalui lapisan produk diberikan oleh:

$$1 - \frac{2}{3}X - (1-X)^{2/3} = \frac{2 D_e C_A^{bulk}}{\rho_p r_p^2}\, t = k_d \cdot t$$

di mana $D_e$ adalah difusivitas efektif larutan dalam lapisan produk (m²/s), $C_A^{bulk}$ konsentrasi asam sulfat bulk (mol/m³), $\rho_p$ densitas molar partikel (mol/m³), $r_p$ jari-jari awal partikel (m), dan $k_d$ konstanta laju difusi (s⁻¹). Untuk reaksi kimia permukaan yang lebih lambat (kurang relevan pada HPAL), berlaku:

$$1 - (1-X)^{1/3} = \frac{k_c C_A^{bulk}}{\rho_p r_p}\, t = k_r \cdot t$$

Temperatur dependence遵循 mengikuti persamaan Arrhenius:

$$k = A \exp\!\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ energi aktivasi (kJ/mol), $R$ konstanta gas universal (8.314 J/mol·K), dan $T$ suhu absolut (K). Dickson dkk. (2026) melaporkan $E_a$ pelindian Ni pada kondisi HPAL berkisar 45–75 kJ/mol, sementara presipitasi Fe sebagai hematit memiliki $E_a \approx 85–110$ kJ/mol, yang menjelaskan mengapa kontrol suhu sangat sensitif terhadap keseimbangan leaching vs. scaling.

### 2.2 Model Pembentukan Kerak Autoclave

Laju penebalan kerak $\dfrac{dh_s}{dt}$ mengikuti model **parallel-deposition/dissolution** pada permukaan dinding autoclave:

$$\frac{dh_s}{dt} = \frac{k_{dep}\, (C_{salt}^{bulk} - C_{salt}^{eq})}{\rho_{scale}} - k_{diss}\, h_s$$

di mana $k_{dep}$ adalah konstanta deposisi (m/s), $C_{salt}^{bulk}$ konsentrasi garam/supersaturasi aktual, $C_{salt}^{eq}$ konsentrasi kesetimbangan, $\rho_{scale}$ densitas molar kerak (mol/m³), $k_{diss}$ konstanta disolusi parsial kerak, dan $h_s$ tebal kerak sesaat. Pada keadaan tunak dengan laju disolusi rendah (umumnya $k_{diss} \approx 0$ karena kerak alunit-jarosit bersifat refractory terhadap H$_2$SO$_4$ encer), persamaan menyederhanakan menjadi deposisi linear:

$$h_s(t) = \frac{k_{dep}}{\rho_{scale}} (C_{salt}^{bulk} - C_{salt}^{eq})\, t$$

Tebal kerak pada akhirnya menurunkan koefisien perpindahan panas menyeluruh $U$ sesuai fouling resistance $R_f = h_s / k_{scale}$:

$$\frac{1}{U_{fouled}} = \frac{1}{U_{clean}} + R_f = \frac{1}{U_{clean}} + \frac{h_s}{k_{scale}}$$

di mana $k_{scale}$ konduktivitas termal kerak (tipikal 0.5–1.2 W/m·K untuk alunit-jarosit, jauh lebih rendah dari baja 45 W/m·K). Ini menjelaskan degradasi drastis efisiensi pemanasan slurry.

### 2.3 Neraca Massa Recovery Logam & Desulfurisasi Residu

Andrameda dkk. (2024) menyajikan recovery Ni dan Fe dari residu HPAL melalui *roasting-reduction* dengan agen desulfurisasi. Recovery Ni ditentukan sebagai:

$$\%\text{Recovery Ni} = \frac{m_{Ni}^{leached}}{m_{Ni}^{total}} \times 100\%$$

Laju reaksi reduksi dengan penambahan karbon/CO dari pirolisis agen reduktor mengikuti:

$$r = k_0 \exp\!\left(-\frac{E_a}{RT}\right) C_{oxide}^{n}$$

Reaksi utama desulfurisasi sulfat residu (anhidrit, jarosit) oleh Na$_2$CO$_3$ atau CaO:

$$\text{CaSO}_4 + \text{Na}_2\text{CO}_3 \rightarrow \text{CaCO}_3 + \text{Na}_2\text{SO}_4$$
$$\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6 + 3\text{CaO} \rightarrow \text{KOH} + 3\text{CaSO}_4 + \tfrac{3}{2}\text{Fe}_2\text{O}_3 + \tfrac{3}{2}\text{H}_2\text{O}$$

Faktor krusial dari perspektif teknik industri: **membuang sulfur (sulfat) dari residu sebelum *re-leaching* atau *disposal* mengurangi potensi presipitasi kerak sekunder pada autoclave tahap kedua**.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri untuk pengendalian kerak HPAL mengikuti kerangka **Plan-Do-Check-Act (PDCA)** yang terintegrasi dengan sistem manajemen pemeliharaan. Tahapan utamanya:

**Tahap 1 — Karakterisasi Umpan (Pre-Leaching Audit).** Setiap batch 5.000–20.000 ton bijih laterit diuji XRF/XRD untuk komposisi Fe, Al, Mg, Ca, K, dan S. Rasio molar Al/(Al+Fe) > 0.35 mengindikasikan risiko tinggi pembentukan alunit. Bijih dipisahkan dalam stockpile terklasifikasi (*high-limonite*, *saprolite blend*) untuk blending optimum dengan target rasio Al/Fe ≤ 0.25 (Dickson dkk., 2026).

**Tahap 2 — Optimasi Parameter Operasi Autoclave.** SOP operasi menetapkan:

| Parameter | Setpoint Industri | Toleransi |
|-----------|-------------------|-----------|
| Suhu | 255 °C | ±3 °C |
| Tekanan | 42 bar | ±1 bar |
| Konsentrasi H$_2$SO$_4$ | 220–280 g/L | ±10 g/L |
| Solid-to-liquid ratio | 1:4 (w/w) | — |
| Residence time | 60–90 menit | — |
| Agitasi (impeller tip speed) | 4–6 m/s | — |

**Tahap 3 — Injeksi Aditif Anti-Scaling.** Penambahan seed hematit sintetis (5–15 g/L) atau *surfactant* (lignosulfonate 100–300 ppm) untuk mengarahkan presipitasi Fe ke fase slurry (heterogeneous nucleation) alih-alih dinding autoclave (homogeneous nucleation). Penambahan CaO/MgO dalam jumlah terkontrol juga menekan supersaturasi alunit.

**Tahap 4 — Online Monitoring & Predictive Maintenance.** Sensor wall-temperature thermocouple multi-titik mendeteksi degradasi $U$ melalui kenaikan $\Delta T$ dinding. Algoritma *fouling factor forecasting*:

$$\text{Fouling Factor (FF)} = \frac{U_{clean} - U_{fouled}}{U_{clean}} = 1 - \frac{U_{fouled}}{U_{clean}}$$

Alarm shutdown direncanakan ketika FF > 0.35 (kerak ~5–8 mm).

**Tahap 5 — Shutdown & Pickling.** Pra-pembersihan mekanis high-pressure water jet (200–300 bar) dilanjutkan pickling kimia dengan campuran H$_2$SO$_4$ 5–10% + HF 0.5–2% pada 60–80 °C selama 6–12 jam, atau *online pickling* tanpa shutdown menggunakan inhibitor korosi.

**Tahap 6 — Residue Desulfurization (Andrameda dkk., 2024).** Residu autoclave di-*roast* pada 600–800 °C selama 30–90 menit dengan Na$_2$CO$_3$ atau CaO (rasio molar CaO/S = 1.2–1.5), dilanjutkan *re-leaching* untuk recovery Ni residual. Diagram alir lengkap:

```
[Bijih Laterit] → [Crushing/Grinding] → [Slurry Mixing + H2SO4]
        ↓
[Autoclave HPAL 255°C/42 bar] → [CCD Counter-Current Decantation]
        ↓                              ↓
[Neutralization (CaCO3)]      [Residue → Roasting-Reduction]
        ↓                              ↓
[Ni/Co SX-EW]                  [Desulfurized Residue → Re-Leach]
                                          ↓
                                  [Ni Recovery / Cementation]
```

---

## 4. Studi