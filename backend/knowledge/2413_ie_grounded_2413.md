# 2413 — Rekayasa Autoclave dan Karakterisasi Scaling pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Nikel laterit merupakan sumber daya nikel dominan secara global, menyumbang sekitar 60–70% dari total cadangan nikel dunia, namun hanya 40–50% produksi nikel primer berasal dari bijih ini karena kompleksitas metalurginya (Dickson, Deleau, & Espitalier, 2026). Bijih laterit kadar rendah (biasanya 0,8–1,5% Ni) tidak dapat diproses secara ekonomis melalui pirometalurgi konvensional sehingga industri beralih ke **High-Pressure Acid Leaching (HPAL)** yang beroperasi pada suhu 240–270 °C dan tekanan 30–40 bar dengan pereaksi H₂SO₄. Teknologi ini mampu mengekstraksi lebih dari 90% nikel dan kobalt dari mineral limonit dan saprolit, namun menghadapi masalah operasional paling kritikal: **autoclave scaling** — terbentuknya lapisan kerak padat di dinding dalam reaktor yang menurunkan koefisien perpindahan panas secara drastis, menurunkan kapasitas produksi, dan memaksa *shut-down* prematur untuk *de-scaling* secara mekanis maupun kimiawi.

Dickson et al. (2026) dalam *Cleaner Waste Systems* melakukan karakterisasi komprehensif terhadap perilaku scaling autoclave di lingkungan HPAL. Mereka melaporkan bahwa kerak tersusun dari campuran multi-fasa yang didominasi oleh **gipsum (CaSO₄·2H₂O)**, **alunit/hidrosulfat aluminium**, **goetit residual (FeOOH)**, dan **silika amorf (SiO₂·nH₂O)**. Distribusi ketebalan kerak sepanjang autoclave tidak seragam: zona terpanas di bagian tengah reaktor mengalami laju penskalaan tertinggi karena *supersaturasi* lokal terhadap anion sulfat dan kation Ca²⁺/Al³⁺. Studi ini menunjukkan bahwa *heat flux* melalui dinding autoclave dapat turun hingga 35–50% setelah 60 hari operasi kontinu, yang berarti konsumsi uap (steam) per ton bijih naik signifikan, menggerus margin operasi. Andrameda, Triaswinanti, dan Madra (2024) melengkapi analisis ini dari sisi pretreatment, membuktikan bahwa **proses roasting-reduksi** dengan penambahan agen desulfurisasi (misalnya Na₂CO₃ atau CaO) sebelum HPAL mampu merombak struktur mineral sulfur dan mengurangi *carry-over* sulfat ke autoclave sehingga menurunkan potensi penskalaan hingga 22–30%.

Urgensi industri dari pengendalian scaling ini sangat tinggi. Sebuah unit HPAL komersial berkapasitas 50.000 ton Ni per tahun dapat mengalami kerugian produksi hingga US$ 8–12 juta per *unscheduled shutdown*, belum termasuk biaya kimia dan energi tambahan. Dengan meningkatnya permintaan nikel untuk baterai kendaraan listrik (EV battery), di mana konsumsi nikel diproyeksikan naik 8–12% CAGR hingga 2035, optimalisasi keandalan autoclave menjadi penentu daya saing strategis. Konteks ini menjadikan karakterisasi scaling dan rekayasa pencegahannya sebagai kompetensi inti dalam engineering process mineral.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Leaching dan Model Inti Mengkerut (Shrinking Core Model)

Reaksi pelindian nikel laterit dalam autoclave umumnya mengikuti model *shrinking core* untuk partikel mineral, dengan langkah kontrol difusi melalui lapisan produk atau lapisan boundary layer. Laju konversi fraksional $\alpha$ terhadap waktu $t$ untuk kontrol difusi lapisan produk diformulasikan sebagai:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{2 D_e C_A^{\text{bulk}}}{\rho_B r_p^2}\, t = k_d \cdot t$$

di mana $D_e$ adalah difusivitas efektif ($m^2/s$), $C_A^{\text{bulk}}$ konsentrasi asam di *bulk* ($kg/m^3$), $\rho_B$ densitas partikel bijih, dan $r_p$ jari-jari awal partikel. Untuk kontrol reaksi kimia permukaan:

$$1 - (1-\alpha)^{1/3} = \frac{k_s C_A^{\text{bulk}}}{\rho_B r_p}\, t = k_r \cdot t$$

dengan $k_s$ sebagai konstanta laju reaksi permukaan. Pada suhu tinggi HPAL ($T > 240°C$), kontribusi $k_r$ mengikuti persamaan **Arrhenius**:

$$k = A \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ energi aktivasi (kJ/mol) tipikal untuk pelindian nikel laterit berkisar 60–85 kJ/mol menurut Dickson et al. (2026), $R = 8{,}314$ J/(mol·K), dan $A$ faktor pre-eksponensial.

### 2.2 Termodinamika Supersaturasi dan Nukleasi Kerak

Pembentukan kerak terjadi ketika indeks supersaturasi $S$ melebihi nilai kritis:

$$S = \frac{\text{IAP}}{K_{sp}} > 1$$

di mana IAP adalah *ion activity product* dan $K_{sp}$ adalah konstanta kelarutan. Untuk gipsum (CaSO₄·2H₂O), $K_{sp} \approx 3{,}14 \times 10^{-5}$ pada 25 °C, namun turun signifikan pada suhu HPAL karena *inverse solubility*. Laju nukleasi heterogen pada permukaan autoclave (substrat baja karbon/Ti) mengikuti:

$$J = J_0 \exp\left(-\frac{16\pi \gamma_{sl}^3 v_m^2}{3(k_B T)^3 (\ln S)^2}\right)$$

dengan $\gamma_{sl}$ tegangan permukaan solid-liquid, $v_m$ volume molar presipitat, dan $k_B$ konstanta Boltzmann. Peningkatan $S$ menurunkan energi barrier nukleasi sehingga kerak tumbuh cepat.

### 2.3 Perpindahan Panas Majemuk (Composite Heat Transfer)

Tahanan termal total dinding autoclave yang dilapisi kerak dihitung sebagai:

$$R_{\text{total}} = \frac{\delta_s}{k_s} + \frac{\delta_c}{k_c} + \frac{1}{h_i} + \frac{1}{h_o}$$

di mana $\delta_s$ ketebalan baja ($\approx 0{,}04$ m, $k_s \approx 45$ W/m·K), $\delta_c$ ketebalan kerak (variabel), $k_c$ konduktivitas termal kerak (tipikal 0,2–1,5 W/m·K untuk gipsum porous), $h_i$ koefisien konveksi slurry internal, dan $h_o$ koefisien steam eksternal. *Heat flux* efektif:

$$q = \frac{T_{\text{steam}} - T_{\text{slurry}}}{R_{\text{total}}}$$

Ketika $\delta_c$ tumbuh dari 0 ke 5 mm dengan $k_c = 0{,}8$ W/m·K, tahanan kerak sendiri menjadi $\delta_c/k_c = 0{,}00625$ m²·K/W, sebanding dengan tahanan baja, sehingga fluks panas turun 40–50% sesuai temuan Dickson et al. (2026).

### 2.4 Neraca Massa Sulfat dan Keseimbangan Desulfurisasi

Andrameda et al. (2024) menurunkan neraca sulfur:

$$\text{S}_{\text{in}}^{\text{ore}} + \text{S}_{\text{in}}^{\text{H}_2\text{SO}_4} = \text{S}_{\text{dissolved}}^{\text{leach}} + \text{S}_{\text{precipitate}}^{\text{scale}} + \text{S}_{\text{out}}^{\text{residue}}$$

Efisiensi desulfurisasi agen $\eta_{\text{desulf}}$:

$$\eta_{\text{desulf}} = \frac{m_{\text{S}}^{\text{removed}}}{m_{\text{S}}^{\text{initial}}} \times 100\%$$

dengan reaksi umum:

$$\text{FeS}_2 + \text{CaO} + \tfrac{15}{4}\text{O}_2 \rightarrow \tfrac{1}{2}\text{Fe}_2\text{O}_3 + \text{CaSO}_4$$

mengikat sulfur ke fasa padat residue sehingga mencegah pelarutan sulfida ke dalam slurry autoclave.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Pretreatment Desulfurisasi

```
Bijih Laterit (Ni 1,2%) 
   ↓
Pengeringan & Penghalusan (P80 = 75 μm)
   ↓
Pencampuran dengan Agen Desulfurisasi (CaO 5–8% b/b) 
   ↓
Roasting-Reduksi (T = 700–900 °C, t = 60–120 min) 
   ↓
Pulp-making (Solid:Liquid = 1:3 dengan H₂SO₄ 98%) 
   ↓
Pre-heater (T = 90 °C, P = 1 bar)
   ↓
Autoclave HPAL Multi-kompartemen (T = 245–270 °C, P = 35–42 bar, τ = 60–90 min)
   ↓
Flash Cooling (P → 1 bar, T → 100 °C)
   ↓
CCD Counter-Current Decantation
   ↓
Netralisasi & Pemurnian Ni/Co (SX-EW)
```

### 3.2 SOP Pengendalian Scaling (Berdasarkan Dickson et al., 2026)

**Fase Pra-Operasi:**
1. **Inspeksi ketebalan kerak baseline** menggunakan *ultrasonic thickness gauge* pada 16 titik keliling autoclave.
2. **Passivasi permukaan** dengan larutan HNO₃ 5% + Na₂Cr₂O₇ 0,5% untuk membentuk lapisan Cr-oksida pelindung pada baja karbon.
3. **Kalibrasi sensor suhu multi-titik** untuk mendeteksi *fouling* sejak $\delta_c > 2$ mm.

**Fase Operasi:**
4. **Injeksi additive antiscalant** (polimer akrilat atau polimaleat) dosis 5–15 ppm ke dalam slurry umpan.
5. **Kontrol rasio Ca²⁺/SO₄²⁻** agar tetap di bawah ambang *supersaturation*; tipikal target $C_{\text{Ca}^{2+}} < 200$ ppm.
6. **Monitoring fluks panas real-time** melalui *heat transfer coefficient*; alarm otomatis jika efisiensi < 70% baseline.
7. **Pengaturan laju umpan** untuk menjaga residence time di bawah ambang nukleasi kritis.

**Fase Pemeliharaan:**
8. **Acid wash kimiawi** dengan HCl 10% atau H₂SO₄ 15% pada T = 60 °C selama 8–12 jam untuk melarutkan kerak gipsum.
9. **Mechanical de-scaling** menggunakan *high-pressure water jet* (200–400 bar) setiap 90–120 hari operasi.
10. **Characterization sampling** XRD, SEM-EDS, dan TGA untuk memantau komposisi kerak per siklus.

### 3.3 SOP Roasting-Reduksi (Andrameda et al., 2024)

1. Homogenisasi bijih dengan agen desulfurisasi (rasio molar CaO/S = 1,2–1,5).
2. Pemanasan tungku rotary ke 700 °C (ramp 10 °C/menit).
3. Tahap reduksi pada 800–900 °C selama 60–120 menit dengan *holding time* optimal berdasarkan Response Surface Methodology (RSM).
4. Pendinginan inert (N₂) untuk mencegah oksidasi balik nikel menjadi NiO non-reaktif.
5. Karakterisasi XRD sebelum umpan HPAL.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Plant HPAL Hipotetis (30.000 ton Ni/tahun)

| Parameter | Nilai |
|---|---|
| Kapasitas umpan bijih | 150 ton/jam (basis kering) |
| Kadar Ni dalam bijih | 1,2% |
| Kadar Fe total | 38% |
| Kadar Mg | 4,5% |
| Kadar Ca | 0,3% |
| Kadar S (sebelum pretreatment) | 0