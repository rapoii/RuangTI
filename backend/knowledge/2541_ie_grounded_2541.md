# 2541 — Rekayasa Pengendalian *Scaling* Autoclave pada Proses *High-Pressure Acid Leaching* (HPAL) Bijih Nikel Laterit untuk Optimasi Yield dan Keberlanjutan Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel sebagai logam strategis untuk baterai *lithium-ion* kendaraan listrik (*electric vehicles*/EV), baja tahan karat (*stainless steel*), dan paduan super telah melonjak drastis hingga menyentuh lebih dari 3,2 juta ton pada tahun 2024, dengan proyeksi CAGR 8,4% hingga 2030. Lebih dari 70% cadangan nikel dunia berbentuk bijih laterit (*lateritic ore*) yang tersebar di Indonesia, Filipina, dan Kaledonia Baru, namun bijih ini memiliki tantangan metalurgi yang unik: kadar rendah (*low-grade*), kandungan besi dan magnesium tinggi, serta struktur mineralogi kompleks (garnierit, limonit, saprolit). Untuk memproses bijih laterit kadar rendah secara ekonomis, industri menerapkan teknologi *High-Pressure Acid Leaching* (HPAL) dalam autoclave *titanium-clad* berdiameter 4–6 m dengan tekanan operasi 30–50 bar dan suhu 230–270 °C (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan operasional yang paling kritikal dan menjadi *bottleneck* keberlanjutan proses HPAL adalah fenomena *scaling* (kerak/pengerakan) pada dinding internal autoclave, *agitator shaft*, *baffle*, dan pipa sirkulasi slurry. Kerak ini terbentuk dari presipitasi senyawa *basic ferric sulfate* (Fe(OH)SO₄), gypsum (CaSO₄·2H₂O), hematit (Fe₂O₃), dan aluminum hydroxide (Al(OH)₃) akibat *super-saturation* lokal, *flash cooling*, dan perubahan pH pada zona transien termal. Studi Dickson, Deleau, dan Espitalier (2026) secara eksplisit mengkarakterisasi perilaku *scaling* ini dan menemukan bahwa laju akresi kerak dapat mencapai 1,2–3,5 mm/hari pada kondisi operasi tertentu, sehingga memaksa *shutdown* terjadwal setiap 30–60 hari dengan kerugian produksi estimasi Rp 18–25 miliar per *campaign* pada plant berkapasitas 50.000 ton Ni per tahun. Studi pendukung Andrameda, Triaswinanti, dan Madra (2024) menunjukkan bahwa pemilihan *desulfurization agent* dan parameter *roasting-reduction* secara langsung memengaruhi komposisi *residue* dan sifat adhesi kerak, sehingga strategi pre-treatment bijih menjadi variabel kontrol preventif yang krusial.

Dari perspektif Teknik Industri, fenomena ini bukan sekadar isu kimia proses, melainkan masalah optimasi sistem terpadu (*integrated system optimization*) yang melibatkan: (1) penjadwalan *maintenance shutdown* (reliability-centered maintenance), (2) keseimbangan energi (*energy balance*) karena *scaling* menurunkan koefisien perpindahan panas keseluruhan hingga 35–50%, (3) perencanaan kapasitas (*capacity planning*) yang harus memasukkan *derating factor*, dan (4) Analisis Biaya Siklus Hidup (*Life Cycle Cost*/LCC) investasi antisipatif. Urgensi ekonomi dan lingkungan dari pengendalian *scaling* HPAL juga diperkuat oleh regulasi *carbon tax* dan target *zero liquid discharge* (ZLD) yang semakin ketat, menjadikan *module* ini fundamental bagi spesialis rekayasa proses mineral dan manufaktur berkelanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Presipitasi dan Pembentukan Kerak (*Scaling*)

Mekanisme *scaling* pada autoclave HPAL mengikuti tiga tahap berurutan: (a) *super-saturation* senyawa target di zona *bulk solution*, (b) nukleasi heterogen pada permukaan logam, dan (c) pertumbuhan kristal terkontrol difusi. Laju pertumbuhan ketebalan kerak ($\delta_{s}$) dapat dimodelkan dengan persamaan Arrhenius-tempered kinetika orde pertama terhadap konsentrasi *super-saturation*:

$$\frac{d\delta_{s}}{dt} = k_{0} \cdot \exp\left(-\frac{E_{a}}{RT}\right) \cdot \left(C_{bulk} - C_{eq}\right)^{n}$$

di mana $k_0$ adalah konstanta pre-eksponensial (m/s), $E_a$ adalah energi aktivasi (J/mol, tipikal 45–85 kJ/mol untuk presipitasi *basic ferric sulfate*), $R$ adalah konstanta gas universal (8,314 J/mol·K), $T$ adalah suhu operasi absolut (K), $C_{bulk}$ dan $C_{eq}$ adalah konsentrasi aktual dan kesetimbangan (mol/L), serta $n$ adalah orde reaksi (umumnya 1–2 untuk kristalisasi terkontrol). Studi Dickson et al. (2026) melaporkan bahwa $E_a$ efektif untuk kerak *basic ferric sulfate* adalah 62,4 kJ/mol dengan orde reaksi $n = 1{,}8$.

### 2.2 Neraca Panas dengan Resistansi Thermal Kerak

Penurunan kinerja termal autoclave akibat *scaling* dimodelkan melalui konsep resistansi termal seri:

$$\frac{1}{U_{overall}} = \frac{1}{h_{i}} + \frac{\delta_{w}}{k_{w}} + \frac{\delta_{s}}{k_{s}} + \frac{1}{h_{o}}$$

di mana $U_{overall}$ adalah koefisien perpindahan panas keseluruhan (W/m²·K), $h_i$ dan $h_o$ adalah koefisien konveksi internal (slurry) dan eksternal (steam jacket), $\delta_w$ dan $\delta_s$ adalah ketebalan dinding autoclave (*titanium*, tipikal 12 mm) dan kerak, sementara $k_w$ (≈21 W/m·K untuk Ti) dan $k_s$ (0,4–0,9 W/m·K untuk kerak Fe-OH-SO₄) adalah konduktivitas termal. Konstanta $k_s$ sangat sensitif terhadap porositas kerak $\varepsilon$ menurut model paralel:

$$k_{s} = k_{solid}(1-\varepsilon) + k_{fluid}\varepsilon$$

### 2.3 Mekanisme Adsorpsi dan Derating Kapasitas Produksi

Dickson et al. (2026) memperkenalkan *fouling factor* terintegrasi $\phi(t)$ yang menurunkan kapasitas efektif autoclave:

$$\phi(t) = 1 - \frac{R_{s}(t)}{R_{s,max}} = 1 - \frac{\delta_{s}(t) \cdot k_{w}}{k_{s} \cdot \delta_{w}} \cdot \beta$$

dengan $\beta$ adalah faktor geometri (1,0–1,4 tergantung posisi di autoclave). Kapasitas produksi efektif harian menjadi:

$$Q_{eff}(t) = Q_{rated} \cdot \phi(t) \cdot (1 - \eta_{loss})$$

### 2.4 Neraca Massa Ekstraksi Nikel

Untuk slurry feed dengan kadar Ni ($C_{Ni,feed}$), ekstraksi nikel dalam autoclave mengikuti:

$$X_{Ni} = 1 - \exp\left(-k_{l} \cdot \tau \cdot \left(\frac{d_{p}}{d_{ref}}\right)^{-m}\right)$$

dengan $k_l$ (1/min) konstanta leaching yang bergantung pada $\left[H_{2}SO_{4}\right]$ dan suhu, $\tau$ adalah *residence time* (menit), $d_p$ ukuran partikel, $d_{ref}=75\ \mu m$, dan $m$ eksponen disolusi (0,4–0,7). Andrameda et al. (2024) menunjukkan bahwa pre-treatment *roasting-reduction* meningkatkan $X_{Ni}$ sebesar 8–14% melalui dekomposisi serpentin dan pelepasan Ni dari struktur silikat.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian *scaling* HPAL mengikuti kerangka *Reliability-Centered Maintenance* (RCM) yang diadaptasi dari standar SAE JA1011 dan ISO 55000:

**Tahap 1 — Karakterisasi Awal (Pre-Commissioning Audit)**
1. Lakukan *baseline* pengukuran: tebal dinding Ti (ultrasonic thickness gauge), kekasaran permukaan (*profilometer*), dan komposisi slurry feed.
2. Instalasi *online monitoring*: (a) *corrosion coupons* paduan Ti-6Al-4V, (b) *heat flux sensor* tipe *gradient* pada dinding, (c) *Raman spectroscopy in-situ* untuk deteksi *super-saturation*, dan (d) *pressure differential transmitter* pada loop steam jacket.
3. Kalibrasi persamaan §2.1 dengan parameter historis 3–5 *campaign*.

**Tahap 2 — Operasional Terkendali (Steady-State Operation)**
- Jaga parameter dalam *design envelope*: $T = 245 \pm 3$ °C, $P = 38 \pm 1$ bar, $\left[H_{2}SO_{4}\right] = 220 \pm 15$ g/L, agitator tip speed 4–6 m/s.
- Implementasikan *model predictive control* (MPC) berbasis §2.1 untuk memproyeksikan $\delta_{s}(t)$ dalam horizon 72 jam.
- Lakukan *acid pulse injection* (1,5% excess) hanya jika laju akresi kerak < 1,5 mm/hari sesuai threshold Dickson et al. (2026).

**Tahap 3 — Prediktif & Preventif**
- Terapkan interval *descaling* berbasis *condition-based*: ketika $R_{s}(t) / R_{total} > 0{,}45$ atau ketika $\phi(t) < 0{,}85$.
- Metode pembersihan: (a) *高压 water jet* 800 bar pada spot dingin, (b) *inhibited acid wash* (HCl 5% + inhibitor TI-870) selama 4–6 jam, (c) mekanikal *scraping* pada agitator.
- Integrasikan pre-treatment *roasting-reduction* sesuai Andrameda et al. (2024) untuk mineral saprolit dengan waktu tahan 90–120 menit pada 750–850 °C menggunakan *desulfurization agent* berbasis Na₂CO₃ atau CaO.

**Tahap 4 — Evaluasi Pasca-Insiden**
- *Root cause failure analysis* (RCFA) menggunakan *fishbone diagram* untuk setiap anomali $\phi(t)$.
- Update basis data LCC dengan aktual biaya *shutdown* (rata-rata USD 1,8–2,5 juta per event).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Autoclave HPAL kapasitas 50.000 ton Ni/tahun pada plant di Halmahera, dengan data operasional Q1 2025:

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Suhu operasi | $T$ | 245 | °C (= 518,15 K) |
| Tekanan operasi | $P$ | 38 | bar |
| Konsentrasi H₂SO₄ | $[H_2SO_4]$ | 230 | g/L |
| Residence time | $\tau$ | 60 | menit |
| Kadar Ni feed | $C_{Ni,feed}$ | 1,42 | % |
| Kadar Ni residue | $C_{Ni,res}$ | 0,08 | % |
| Diameter dalam autoclave | $D$ | 5,0 | m |
| Tebal dinding Ti | $\delta_w$ | 12 | mm |
| Konduktivitas Ti | $k_w$ | 21,0 | W/m·K |
| Konduktivitas kerak | $k_s$ | 0,72 | W/m·K |
| $h_i$ (slurry konveksi) | $h_i$ | 1850 | W/m²·K |
| $h_o$ (