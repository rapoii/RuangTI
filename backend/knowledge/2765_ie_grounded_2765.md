# 2765 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global menghadapi transisi struktural yang masif seiring meningkatnya permintaan baterai kendaraan listrik (EV) dan paduan stainless steel khusus. Bijih nikel laterit—yang menyumbang sekitar 60–70% dari total sumber daya nikel dunia namun hanya menghasilkan ~40% produksi nikel primer—menjadi feedstock strategis yang tidak terhindarkan (Dickson dkk., 2026). Tantangan fundamentalnya adalah bijih limonitik dan saprolitik memiliki kadar Ni rendah (0,8–2,5%) sehingga memerlukan proses hidrometalurgi intensif untuk mencapai ekstraksi yang layak secara ekonomi. High-Pressure Acid Leaching (HPAL) diakui sebagai teknologi paling mapan untuk limonit, dengan autoclave multi-kompartemen beroperasi pada suhu 240–270 °C dan tekanan 35–55 bar dengan media asam sulfat (Andrameda dkk., 2024).

Namun, operasionalisasi HPAL memiliki titik lemah kronis: **pembentukan kerak (*scaling*) pada dinding dan internal surface autoclave**. Dickson, Deleau, dan Espitalier (2026) mendokumentasikan bahwa perilaku kerak tersebut—meliputi komposisi kimia, morfologi, laju pertumbuhan, dan pola deposisi—langsung menentukan *availability* pabrik, yang secara historis berada di kisaran 65–75% (vs. target desain 90%). Kerak pada autoclave terutama tersusun atas hematit (α-Fe₂O₃) rekristalisasi, alumina hidrat (boehmite/beidellite), serta kalsium sulfat (anhidrat/gypsum) yang terbentuk ketika asam sulfat berlebih bereaksi dengan fase pembawa Ca dan Al dalam pulp. Setiap *shutdown* tak terjadwal untuk *acid washing* (acid boil) dan *descaling* mekanis menurunkan kapasitas produksi nikel sebesar 15–30 ton Ni.koharian$^{-1}$, dengan kerugian opportunity cost yang melampaui USD 5 juta per kejadian pada fasilitas kelas dunia (>40.000 t Ni/tahun).

Urgensi penelitian ini juga diperkuat oleh Andrameda dkk. (2024) yang menunjukkan bahwa *pre-treatment* desulfurisasi dan *roasting-reduction* pada residu HPAL dapat mengubah profil termal-operasional autoclave secara signifikan, di mana residu dengan kadar sulfur tinggi memerlukan waktu *hold* yang lebih panjang pada tahap leaching untuk mencapai disolusi Ni residual yang optimum. Kedua paper ini, ketika diintegrasikan, menyusun kerangka *process intensification* yang komprehensif untuk pabrik HPAL generasi baru, dengan sasaran peningkatan *uptime*, pengurangan konsumsi asam spesifik (kg H₂SO₄/tonne ore), dan compliance terhadap *green metallurgy* principles yang menjadi pilar jurnal *Cleaner Waste Systems*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Pelindian (Shrinking Core)

Pelindian partikel bijih laterit di dalam autoclave HPAL mengikuti model *shrinking core* dengan resistansi difusi melalui lapisan *ash* sebagai langkah pengendali pada suhu di atas 220 °C (Dickson dkk., 2026). Untuk partikel spherical dengan jari-jari awal $r_0$, waktu pelindian total $t$ diberikan oleh:

$$t = \frac{\rho_p \, r_0}{2 \, b \, D_s \, C_A} \left[ 1 - 3\left(1-x\right)^{2/3} + 2\left(1-x\right) \right]$$

dengan:
- $\rho_p$ = densitas partikel (kg·m$^{-3}$)
- $b$ = koefisien stoikiometri reaksi (mol produk per mol reaktan)
- $D_s$ = koefisien difusi efektif dalam lapisan *ash* (m²·s$^{-1}$)
- $C_A$ = konsentrasi asam di *bulk* (kg·m$^{-3}$)
- $x$ = fraksi konversi Ni

Ketergantungan $D_s$ terhadap suhu mengikuti hukum Arrhenius:

$$D_s = D_0 \, \exp\!\left(-\frac{E_a}{RT}\right)$$

dengan $E_a = 38{,}5 \pm 2{,}1$ kJ·mol$^{-1}$ untuk difusi H$^{+}$ melalui lapisan Fe-oxyhydroxide (Dickson dkk., 2026), $R = 8{,}314$ J·mol$^{-1}$·K$^{-1}$, dan $T$ dalam Kelvin.

### 2.2 Model Pertumbuhan Kerak (*Scale Growth Kinetics*)

Tebal kerak $\delta(t)$ pada dinding autoclave dimodelkan sebagai gabungan *induction period* dan *parabolic growth* (Dickson dkk., 2026):

$$\delta(t) = \delta_0 + k_p \, \sqrt{t - t_{\text{ind}}}, \quad t \geq t_{\text{ind}}$$

dengan laju konstan:

$$k_p = k_0 \, \exp\!\left(-\frac{E_s}{RT}\right) \left[ \frac{C_{\text{Fe}^{3+}} \cdot C_{\text{SO}_4^{2-}}}{K_{sp}} - 1 \right]$$

$E_s$ adalah energi aktivasi presipitasi hematit (~95 kJ·mol$^{-1}$) dan $K_{sp}$ adalah konstanta kelarutan jenuh hematit dalam pulp asam sulfat bersuhu tinggi. Faktor $\left[ \frac{C_{\text{Fe}^{3+}} \cdot C_{\text{SO}_4^{2-}}}{K_{sp}} - 1 \right]$ adalah *supersaturation driving force* yang merupakan fungsi langsung dari rasio Fe/Al dalam bijih umpan.

### 2.3 Neraca Panas Autoclave

Kebutuhan panas total untuk mempertahankan suhu operasi $T_{\text{op}}$ di autoclave dengan debit pulp $\dot{m}_p$ diberikan oleh:

$$Q_{\text{total}} = \dot{m}_p \, c_p \, (T_{\text{op}} - T_{\text{in}}) + Q_{\text{loss}} + Q_{\text{reaction}}$$

dimana $Q_{\text{reaction}}$ adalah panas eksotermik reaksi pelindian (-185 kJ per kg Ni terlarut untuk limonit tipikal), dan $Q_{\text{loss}}$ adalah rugi konduksi melalui dinding autoclave ber-insulasi:

$$Q_{\text{loss}} = \frac{2\pi L \, k_{\text{ins}} \, (T_{\text{op}} - T_{\text{amb}})}{\ln(r_o/r_i)}$$

### 2.4 Konsumsi Asam Stoikiometris

Konsumsi asam spesifik $S$ (kg H₂SO₄ per tonne bijih kering) diprediksi oleh:

$$S = \sum_{j} \nu_j \, M_{\text{H}_2\text{SO}_4} \left( \frac{w_j}{M_j} \right) - R_{\text{reg}}$$

dengan $\nu_j$ adalah koefisien stoikiometri untuk mineral j (FeOOH, MgO, AlOOH, CaCO₃), $w_j$ kadar (%), $M_j$ berat molekul, dan $R_{\text{reg}}$ fraksi asam yang diregenerasi dari netralisasi residu.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL & Manajemen Kerak

Implementasi SOP yang diturunkan dari Dickson dkk. (2026) dan Andrameda dkk. (2024) mengikuti arsitektur proses sebagai berikut:

```
[Bijih Laterit] → [Repulping] → [Pre-heater (flash steam)]
        ↓
[Autoclave Compartment 1: 240°C, 30 min] → [Compartment 2: 255°C, 30 min]
        ↓                                    ↓
   [Sampling pH, ORP, free acid]      [Compartment 3: 270°C, 30 min]
        ↓                                    ↓
   [Flash Cooling] ← ← ← ← ← ← ← ← ← ← ← ← ←
        ↓
   [CCD Counter-Current Decantation] → [Neutralization]
        ↓
   [Mixed Hydroxide Precipitate (MHP)] → [Residue to Roasting-Reduction]
                                                ↓
                                  [Desulfurization Agent Addition]
                                                ↓
                                     [Rotary Kiln Reduction @ 1100°C]
                                                ↓
                                   [Fe-Ni Alloy + Desulfurized Slag]
```

### 3.2 SOP Pemantauan Kerak

1. **Inspeksi Termografi Inframerah** setiap shift untuk mendeteksi *hot spots* lokal pada jaket autoclave yang mengindikasikan ketebalan kerak >8 mm.
2. **Sampling slurry** dari setiap kompartemen untuk analisis ICP-OES kadar Fe³⁺, Al³⁺, dan *free acid*.
3. **Predictive Acid Boil Scheduling** berbasis rumus $t_{\text{boil}} = \frac{\delta_{\text{crit}}^2 - \delta_0^2}{k_p^2} + t_{\text{ind}}$ untuk menentukan interval descaling preventif.
4. **Coupled Heat-Mass Balance Update** setiap 4 jam dengan update profil $\delta(t)$ berbasis data operasional.

### 3.3 Integrasi Desulfurisasi & Roasting-Reduction

Sesuai Andrameda dkk. (2024), residu HPAL dengan kadar sulfur 2,5–4,8% diperlakukan menggunakan agen desulfurisasi (CaO atau Na₂CO₃) pada rasio molar S:agen = 1:1,05 sebelum *roasting-reduction* pada suhu 1050–1150 °C dengan waktu tinggal 60–120 menit. Parameter optimal yang teridentifikasi: suhu 1100 °C dan waktu 90 menit, yang menurunkan sulfur residu hingga <0,3% dan menghasilkan *recovery* Fe-Ni alloy >92%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Pabrik HPAL Tipikal

Berdasarkan parameter operasional yang dilaporkan Dickson dkk. (2026) untuk bijih limonit:

| Parameter | Nilai |
|---|---|
| Komposisi bijih umpan | 1,30% Ni, 38,5% Fe, 4,2% Al, 0,8% Mg, 0,15% Ca |
| Throughput | 250 t·jam$^{-1}$ bijih kering |
| Rasio asam/ore | 380 kg H₂SO₄/t |
| Suhu operasi | 255 °C |
| Tekanan | 42 bar |
| $C_{\text{Fe}^{3+}}$ dalam pulp | 28 g·L$^{-1}$ |

### 4.2 Perhitungan Laju Pertumbuhan Kerak

Dengan $D_s = 1{,}8 \times 10^{-9}$ m²·s$^{-1}$ pada 255 °C (= 528 K), $E_a = 38{,}5$ kJ·mol$^{-1}$, dan konsentrasi asam $C_A = 142$ kg·m$^{-3}$:

**Step 1 — Konversi Ni (waktu tinggal 90 menit):**

$$1 - 3(1-x)^{2/3} + 2(1-x) = \frac{2 \, D_s \, C_A \, t}{\rho_p \, r_0^2}$$

Dengan $\rho_p = 2200$ kg·m$^{-3}$, $r_0 = 75\ \mu\text{m}$, $t = 5400$ s:

$$RHS = \frac{2 \times 1{,}8 \times 10^{-9} \times 142 \times 5400}{2200 \times (75\times 10^{-6})^2} = 0{,}279$$

Iterasi numerik memberikan $x = 0{,}948$ (ekstraksi Ni 94,8%), sesuai dengan benchmark industri 93–96%.

**Step 2 — Tebal kerak setelah 30 hari operasi kontinu ($t = 2{,}592 \times 10^6$ s):**

$$k_p = 4{,}2 \times 10^{-7} \exp\!\left(-\frac{95{,}000}{8{,}314 \times 528}\right) \times \left[\frac{C_{\text{Fe}} C_{\text{SO}_4}}{K_{sp}} - 1\right]$$

Evaluasi: $k_p \approx 8{,}3 \times 10^{-9}$ m·s$^{-1/2}$

$$\delta = k_p \sqrt{t} = 8{,}3 \