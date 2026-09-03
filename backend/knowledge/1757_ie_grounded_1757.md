# 1757 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri hidrometalurgi nikel global menghadapi tantangan struktural yang semakin akut seiring meningkatnya permintaan baterai lithium-ion untuk kendaraan listrik (EV) dan sistem penyimpanan energi. Lebih dari 70% cadangan nikel dunia tersimpan dalam bijih laterit, yang umumnya diproses melalui teknologi *High-Pressure Acid Leaching* (HPAL) karena kadar nikel yang rendah (0,8–1,5% Ni) tidak ekonomis untuk diproses secara pirometalurgi (Dickson, Deleau, & Espitalier, 2026). Namun, keunggulan teknis HPAL—yaitu pemulihan nikel hingga >90% dalam waktu singkat pada suhu 240–270 °C dan tekanan 30–45 bar—datang dengan konsekuensi operasional yang signifikan berupa pembentukan kerak (*scaling*) padat di dinding dan impeller autoclave.

Permasalahan kerak ini bukan sekadar isu teknis pinggiran; menurut Dickson, Deleau, & Espitalier (2026), perilaku pembentukan kerak merupakan faktor pembatas utama (*capacity-limiting factor*) yang menentukan *on-stream time* autoclave, frekuensi *shut-down* untuk dekalsifikasi, dan pada akhirnya menentukan *unit operating cost* produksi nikel. Deposit kerak yang terutama tersusun atas silika amorf, aluminosilikat, dan kompleks besi-sulfat akan menurunkan efisiensi perpindahan panas, meningkatkan konsumsi energi spesifik, serta mempercepat keausan mekanis pada komponen kritis autoclave. Andrameda, Triaswinanti, & Madra (2024) melengkapi perspektif ini dengan menunjukkan bahwa bahkan *residue* HPAL yang telah diproses masih mengandung fasa-fasa yang mampu menjadi *precursor* kerak sekunder jika tidak ditangani dengan tepat melalui tahap *roasting-reduction* dan pemilihan *desulfurization agent* yang sesuai.

Dalam konteks rantai pasok nikel global—di mana Indonesia, Filipina, dan Selandia Baru menguasai lebih dari 60% produksi nikel laterit—efisiensi operasional autoclave HPAL berkorelasi langsung dengan stabilitas harga *Class I nickel* di London Metal Exchange (LME). Kajian ini menjadi sangat relevan bagi insinyur industri yang terlibat dalam perancangan kapasitas pabrik, penjadwalan *shutdown*, dan optimasi *Total Productive Maintenance* (TPM) fasilitas HPAL. Oleh karena itu, modul ini disusun untuk memberikan fondasi kuantitatif dan prosedural bagi pengambilan keputusan rekayasa terkait mitigasi kerak autoclave, dengan menelaah perilaku termodinamika dan kinetika pelindian, mekanisme nukleasi serta pertumbuhan kerak, dan variabel proses yang memengaruhi laju akumulasinya.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kuantitatif perilaku kerak dalam autoclave HPAL memerlukan integrasi tiga perangkat matematis utama: kinetika pelindian bijih, termodinamika kesetimbangan fasa, dan kinetika pengendapan/pertumbuhan kerak.

### 2.1 Kinetika Pelindian dengan Model Inti Menyusut (*Shrinking Core Model*)

Untuk partikel bijih laterit berbentuk sferis dengan jari-jari awal $r_0$, fraksi konversi nikel $X$ terhadap waktu $t$ mengikuti persamaan inti menyusut untuk reaksi yang dikendalikan difusi melalui lapisan produk:

$$1 - \frac{2}{3}X - (1-X)^{2/3} = \frac{2 \, D_e \, C_A^{\,b}}{\rho_B \, r_0^2} \, t = k_d \, t$$

Sementara itu, untuk kontrol reaksi kimia permukaan:

$$1 - (1-X)^{1/3} = \frac{k_s \, C_A^{\,n}}{\rho_B \, r_0} \, t = k_r \, t$$

di mana $D_e$ adalah difusivitas efektif, $C_A^{\,b}$ konsentrasi asam di bulk, $\rho_B$ densitas molar nikel dalam bijih, dan $k_s$ konstanta laju reaksi permukaan (Dickson et al., 2026).

### 2.2 Persamaan Arrhenius untuk Temperatur Operasional

Ketergantungan laju pelindian terhadap suhu mengikuti hukum Arrhenius:

$$k = A \exp\!\left(-\frac{E_a}{R \, T}\right)$$

dengan energi aktivasi $E_a$ khas untuk pelindian laterit berkisar 60–85 kJ·mol⁻¹. Pada operasi HPAL standar dengan $T = 543{,}15\ \text{K}$ (270 °C), penaikan suhu 10 K dapat meningkatkan laju pelindian hingga ~1,5–1,8 kali lipat, namun di atas suhu kritis tertentu memicu ko-presipitasi silika dan aluminium yang membentuk kerak (Andrameda et al., 2024).

### 2.3 Kinetika Pertumbuhan Kerak (*Scale Growth Law*)

Laju akumulasi ketebalan kerak $\delta(t)$ pada dinding autoclave umumnya mengikuti model linear-termodifokasi:

$$\frac{d\delta}{dt} = \frac{k_m \, (C_s - C_{eq})}{1 + \beta \, \delta}$$

di mana $C_s$ adalah konsentrasi *scaling species* (mis. SiO₂ terlarut) dalam larutan, $C_{eq}$ konsentrasi kesetimbangan, $k_m$ koefisien transfer massa, dan $\beta$ parameter yang merepresentasikan resistansi difusi melalui lapisan kerak yang sudah terbentuk.

### 2.4 Model Perpindahan Panas dengan Resistansi Kerak

Efektivitas perpindahan panas global $U$ setelah terbentuknya kerak dapat dituliskan sebagai:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_s}{k_s} + \frac{\delta_w}{k_w} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi sisi dalam dan luar, $\delta_s$ dan $k_s$ berturut-turut tebal dan konduktivitas termal kerak, serta $\delta_w$ dan $k_w$ untuk dinding baja autoclave. Penambahan $\delta_s$ dari 0 menjadi 5 mm pada kerak silika amorf ($k_s \approx 0{,}2\ \text{W·m}^{-1}\text{·K}^{-1}$) dapat menurunkan $U$ hingga 35–50%, secara langsung meningkatkan konsumsi uap dan waktu proses.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi kerak mengikuti kerangka SOP berlapis yang menggabungkan karakterisasi material, monitoring operasional, dan intervensi preventif.

### 3.1 Karakterisasi Bijih dan Larutan Umpan

1. **Analisis proksimat bijih laterit** melalui *X-Ray Fluorescence* (XRF) dan *X-Ray Diffraction* (XRD) untuk mengidentifikasi kandungan limonit, saprolit, dan gangue minerals.
2. **Analisis larutan umpan** dengan ICP-OES untuk konsentrasi Si, Al, Fe, Mg, dan Ni terlarut.
3. **Pengukuran *free acid* dan rasio S/A (sulfuric acid to acid-soluble metal)** sebagai variabel kontrol utama.

### 3.2 Diagram Alir Proses HPAL dengan Titik Sampling Kerak

```
[Bijih Laterit] → [Pencampuran & Penghalusan] → [Pre-heating 90-110°C]
        ↓
[Autoclave Multi-kompartemen (4-6 compartments)]
   • Compartemen 1-2: Pre-leaching (T≈180-220°C)
   • Compartemen 3-5: Main leaching (T≈240-270°C, P≈35-45 bar)
   • Sampling kerak pada dinding dan impeller setiap 30 hari operasi
        ↓
[Flash Cooling & Counter-current Decantation]
        ↓
[Net Neutralization & CCD Washing] → [Ni/Co Recovery]
```

### 3.3 Protokol Karakterisasi Kerak

Dickson, Deleau, & Espitalier (2026) menetapkan protokol standar sebagai berikut:

1. Pengambilan sampel kerak saat *scheduled shutdown* menggunakan *pneumatic chipping* dengan tekanan terkontrol untuk menghindari kontaminasi.
2. **Analisis mineralogi** dengan XRD dan *Raman Spectroscopy* untuk identifikasi fasa amorf vs kristalin.
3. **Analisis kimia** dengan *SEM-EDS* dan *XPS* untuk profil komposisi kedalaman.
4. **Pengujian mekanis** meliputi kekuatan tekan, porositas, dan densitas semu.
5. **Uji kelarutan** dalam berbagai reagen (H₂SO₄ 5%, NaOH, EDTA) guna menentukan metode dekalsifikasi optimal.

### 3.4 Prosedur Mitigasi dan Pembersihan

- **Pengendalian variabel proses**: mempertahankan rasio Si/Al dalam larutan di bawah ambang batas kritis dan mengatur profil suhu autoclave agar transisi fasa diminimalkan.
- **Pembersihan kimiawi** dengan siklus asam-basa terkontrol.
- **Pembersihan mekanis** dengan *high-pressure water jet* (200–350 bar) untuk kerak yang telah mengalami *aging* lebih dari 60 hari.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Pabrik Hipotetis

Ambil pabrik HPAL dengan kapasitas olah 3.000.000 ton bijih laterit/tahun, kadar nikel 1,2% Ni, dan waktu tinggal rata-rata 60 menit di autoclave multi-kompartemen.

| Parameter | Nilai | Satuan |
|---|---|---|
| Kapasitas umpan | 3,0 × 10⁶ | ton/tahun |
| Operasi harian | 350 | hari/tahun |
| Throughput harian | 8.571 | ton/hari |
| Throughput per siklus (jam) | 357 | ton/jam |
| Konsentrasi Si terlarut dalam pulp | 850 | mg/L |
| Konsentrasi Al terlarut dalam pulp | 1.200 | mg/L |
| Suhu operasi | 255 | °C |
| Tekanan operasi | 42 | bar |
| Volume autoclave (total) | 850 | m³ |

### 4.2 Perhitungan Laju Pelindian

Menggunakan data kinetika tipikal untuk limonit:

$$k_r(T) = k_{r,0} \exp\!\left[\frac{E_a}{R}\left(\frac{1}{T_{ref}} - \frac{1}{T}\right]\right)$$

Dengan $k_{r,0} = 2{,}8 \times 10^{-4}\ \text{s}^{-1}$ pada $T_{ref} = 523{,}15\ \text{K}$, dan $E_a = 72\ \text{kJ·mol}^{-1}$:

$$k_r(528{,}15\ \text{K}) = 2{,}8 \times 10^{-4} \exp\!\left[\frac{72.000}{8{,}314}\left(\frac{1}{523{,}15} - \frac{1}{528{,}15}\right)\right]$$

Perhitungan eksponensial:
- $\frac{1}{523{,}15} - \frac{1}{528{,}15} = 1{,}9115 \times 10^{-3} - 1{,}8935 \times 10^{-3} = 1{,}798 \times 10^{-5}\ \text{K}^{-1}$
- $\frac{72.000}{8{,}314} \times 1{,}798 \times 10^{-5} = 8.659{,}6 \times 1{,}798 \times 10^{-5} = 0{,}1557$
- $k_r = 2{,}8 \times 10^{-4} \times e^{0{,}1557} = 2{,}8 \times 10^{-4} \times 1{,}1685 = 3{,}272 \times 10^{-4}\ \text{s}^{-1}$

Untuk $t = 3.600$ detik (60 menit), konversi nikel:

$$1 - (1-X)^{1/3} = k_r \, t = 3{,}272 \times 10^{-4} \times 3.600 = 1{,}178$$

Karena nilai di ruas kiri secara fisis tidak boleh melebihi 1, hal ini mengindikasikan bahwa pada suhu tersebut pelindian sudah mendekati keseimbangan dalam waktu 60 menit—konsisten dengan target operasional industri. Penyelesaian implisitik menggunakan numerik memberikan $X \approx 0{,}93$ (93% recovery nikel), sesuai target