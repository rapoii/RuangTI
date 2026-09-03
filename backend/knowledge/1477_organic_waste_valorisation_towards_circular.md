# 1477 — Valorisasi Limbah Organik Menagu Biokomposit Sirkular dan Berkelanjutan: Integrasi Perspektif Material, Rantai Pasok, dan Rekayasa Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Organic waste valorisation towards circular and sustainable biocomposites
**Jurnal & Sitasi Utama:** Erlantz Lizundia, Francesca Luzi, Débora Puglia (2022). *Green Chemistry*. DOI: [https://doi.org/10.1039/d2gc01668k](https://doi.org/10.1039/d2gc01668k)
**Sitasi Pendukung:** Dindayal Agrawal, Ashish Dwivedi, Anchal Patil (2022). *Sustainable Development*. DOI: [https://doi.org/10.1002/sd.2472](https://doi.org/10.1002/sd.2472)

---

## 1. Pendahuluan dan Konteks Industri

Krisis lingkungan global yang dipicu oleh akumulasi limbah organik—mencakup limbah pertanian (sekam padi, jerami, bagasse), limbah pangan, dan residu lignoselulosa kehutanan—telah menempatkan sektor industri manufaktur pada titik infleksi strategis. Menurut Lizundia, Luzi, dan Puglia (2022) dalam *Green Chemistry* (DOI: [10.1039/d2gc01668k](https://doi.org/10.1039/d2gc01668k)), konversi limbah organik menjadi biopolimer dan nanofiller berpotensi menurunkan tekanan terhadap sumber daya non-terbarukan, menghindari timbulan *waste-stream*, serta membuka peluang baru pengembangan produk bio-based multifungsional. Lebih lanjut, para penulis menegaskan bahwa integrasi biorefinery dengan prinsip *cradle-to-cradle* menjadi pilar utama transisi menuju ekonomi sirkular di sektor polimer.

Dalam konteks rantai pasok, Agrawal, Dwivedi, dan Patil (2022) dalam *Sustainable Development* (DOI: [10.1002/sd.2472](https://doi.org/10.1002/sd.2472)) menyoroti bahwa *Circular Supply Chain* (CSC) bukan sekadar konsep normatif melainkan kerangka operasional yang membutuhkan identifikasi impediment secara rigor. Mereka menemukan tiga hambatan utama: (1) kurangnya kolaborasi antar pelaku rantai pasok, (2) kebijakan pajak yang belum memfasilitasi model CSC, dan (3) keterbatasan keahlian teknis dalam *product recovery*. Sinergi kedua literatur ini menjadi fundamental: valorisasi limbah tidak akan optimal tanpa arsitektur rantai pasok sirkular yang mumpuni.

Urgensi industri terhadap topik ini didorong oleh tiga faktor: pertama, regulasi *Single-Use Plastics Directive* (SUPD) Uni Eropa (2019/904) yang membatasi plastik sekali pakai; kedua, inisiatif *European Green Deal* yang menargetkan netralitas karbon 2050; ketiga, meningkatnya *carbon price* di *Emissions Trading System* (ETS) yang menembus €80–100/ton CO₂eq, membuat material bio-based semakin kompetitif secara ekonomi. Industri kemasan, otomotif, dan tekstil—yang secara tradisional mengandalkan polimer fosil—kini wajib melakukan redesain material dengan memasukkan komponen lignoselulosa termodifikasi, selulosa nanofibril (CNF), selulosa nanokristal (CNC), atau kitosan dari limbah *crustacean*. Total potensi pasar biokomposit global diproyeksikan mencapai USD 46,5 miliar pada 2027 dengan CAGR 16,1% (Grand View Research, 2022).

Tantangan teknis yang diidentifikasi Lizundia et al. (2022) meliputi: (i) sifat higroskopis alami filler lignin/hemiselulosa yang menurunkan performa mekanik, (ii) *dispersion challenges* antara matriks hidrofilik dan filler hidrofilik pada skala nano, (iii) degradasi termal pada suhu proses termoplastik konvensional (180–220 °C), dan (iv) variabilitas komposisi kimia antar batch limbah. Aspek-aspek ini menentukan spesifikasi desain proses compounding, pemilihan coupling agent (misalnya maleic anhydride-grafted PLA), dan strategi pretreatment (steam explosion, organosolv, atau ionic liquid).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sifat Mekanik Biokomposit — Rule of Mixtures & Halpin-Tsai

Sifat mekanik biokomposit dimodelkan melalui **Rule of Mixtures** sebagai pendekatan orde pertama:

$$E_c = V_m \cdot E_m + V_f \cdot E_f \quad \text{(modulus young komposit)}$$

dengan $E_c$ = modulus Young komposit (GPa), $E_m$ = modulus matriks (GPa), $E_f$ = modulus filler (GPa), $V_m$ dan $V_f$ = fraksi volume matriks dan filler (dengan $V_m + V_f = 1$). Untuk sistem dengan interphase yang tidak sempurna, digunakan **persamaan Halpin-Tsai**:

$$\frac{E_c}{E_m} = \frac{1 + \xi \cdot \eta \cdot V_f}{1 - \eta \cdot V_f}, \quad \eta = \frac{(E_f/E_m) - 1}{(E_f/E_m) + \xi}$$

di mana $\xi$ adalah *shape factor* yang bergantung pada aspek rasio filler. Untuk nanofiber selulosa dengan aspek rasio $L/d \approx 50$, $\xi = 2(L/d)$.

### 2.2 Model Kinetika Kristalisasi (Avrami)

Kinetika transisi fase pada biopolimer semi-kristalin (misalnya PLA) dimodelkan dengan persamaan **Avrami**:

$$X(t) = 1 - \exp(-k \cdot t^n)$$

dengan $X(t)$ = fraksi kristal relatif pada waktu $t$, $k$ = konstanta laju kristalisasi, dan $n$ = eksponen Avrami (1–4) yang merepresentasikan dimensi pertumbuhan nuklei. Lizundia et al. (2022) melaporkan bahwa penambahan nanofiller lignin hingga 5 wt% meningkatkan $k$ sebesar 35–60%, menandakan efek *nucleating agent* yang mempercepat kristalisasi PLA.

### 2.3 Life Cycle Assessment (LCA) — Carbon Footprint

Dampak lingkungan dihitung menggunakan formula IPCC 2006 untuk *Global Warming Potential* (GWP):

$$\text{GWP}_{100} = \sum_{i} m_i \cdot \text{GWP}_i \quad \text{(kg CO}_2\text{eq)}$$

dengan $m_i$ = massa emisi *greenhouse gas* (GHG) ke-i (kg) dan $\text{GWP}_i$ = faktor konversi (misalnya CH₄ = 28, N₂O = 265 untuk *time horizon* 100 tahun). Untuk biokomposit berbasis PLA, *carbon sequestration* dari filler biomassa diperhitungkan melalui:

$$\text{GWP}_{\text{net}} = \text{GWP}_{\text{prod}} - \alpha \cdot m_{\text{biom}} \cdot \text{C}_{\text{content}}$$

di mana $\alpha$ adalah fraksi karbon terikat (umumnya 0,5 untuk material biodegradable jangka pendek), $m_{\text{biom}}$ = massa biomassa, dan $\text{C}_{\text{content}} = 0{,}44$ untuk selulosa murni, $0{,}40$ untuk lignin.

### 2.4 Fuzzy VIKOR untuk Prioritisasi Impediment CSC

Agrawal et al. (2022) menggunakan **Fuzzy VIKOR** untuk menentukan kompromi solusi multi-kriteria. Langkah-langkah krusialnya:

**Tahap 1: Normalisasi fuzzy** — Bilangan fuzzy triangular $\tilde{x}_{ij} = (l_{ij}, m_{ij}, u_{ij})$ dinormalisasi menjadi:

$$\tilde{f}_{ij} = \left(\frac{l_j^{\min}}{u_{ij}}, \frac{m_j^{\min}}{m_{ij}}, \frac{u_j^{\min}}{l_{ij}}\right) \text{ untuk kriteria benefit}$$

**Tahap 2: Bobot entropi** — Jika $p_{ij} = \tilde{x}_{ij} / \sum_i \tilde{x}_{ij}$, maka bobot kriteria:

$$w_j = \frac{1 - E_j}{\sum_j (1 - E_j)}, \quad E_j = -\frac{1}{\ln n}\sum_i p_{ij} \ln p_{ij}$$

**Tahap 3: Nilai VIKOR** — Indeks kompromi $Q_i$ dihitung sebagai:

$$Q_i = v \cdot \frac{S_i - S^+}{S^- - S^+} + (1-v) \cdot \frac{R_i - R^+}{R^- - R^+}$$

dengan $v = 0{,}5$ (bobot strategi maksimum group utility), $S_i = \sum_j w_j \cdot \tilde{f}_{ij}$ (utilitas kelompok), dan $R_i = \max_j (w_j \cdot \tilde{f}_{ij})$ (ketidakpuasan individu). Nilai $Q_i$ lebih rendah menandakan prioritas lebih tinggi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi valorisasi limbah organik menjadi biokomposit mengikuti SOP yang terdiri dari delapan tahap kritis, diadaptasi dari kerangka biorefinery dan *twin-screw extrusion* pada studi Lizundia et al. (2022):

**Tahap 1 — Karakterisasi feedstock.** Analisis proksimat (lignin, selulosa, hemiselulosa, moisture content, ash) mengikuti standar TAPPI T203, NREL LAP TP-510-42618. Parameter kritis: moisture <10%, kontaminan (logam berat, mikroplastik) <50 ppm.

**Tahap 2 — Pretreatment.** Pilihan proses berdasarkan komposisi:
- *Steam explosion*: 160–220 °C, 5–15 bar, 5–30 menit → degradasi hemiselulosa.
- *Organosolv*: etanol/air (60:40), 180 °C, fraksinasi lignin.
- *Ionic liquid*: [Bmim][Cl] pada 80 °C → dissolusi selulosa.

**Tahap 3 — Isolasi nanofiller.** *Acid hydrolysis* (H₂SO₄ 64%, 45 °C, 45 menit) menghasilkan CNC. *TEMPO-mediated oxidation* (NaClO/NaBr/TEMPO) menghasilkan CNF dengan *aspect ratio* tinggi.

**Tahap 4 — Functionalization (opsional).** *Silane coupling* (APTES) atau *maleic anhydride grafting* untuk meningkatkan kompatibilitas filler–matriks.

**Tahap 5 — Compounding.** *Twin-screw extruder* (L/D = 40–48), profil suhu 160–180 °C (zone 1) hingga 190–210 °C (zone 8), *screw speed* 100–300 rpm, *feed rate* 5–15 kg/jam.

**Tahap 6 — Injection molding / compression molding.** Sesuai ASTM D3641 untuk specimen uji tarik (ASTM D638), impact (ASTM D256), dan HDT (ASTM D648).

**Tahap 7 — Karakterisasi performa.** SEM, XRD, DSC, TGA, DMA, dan tensile testing sesuai ISO 527.

**Tahap 8 — LCA & verifikasi CSC.** Perhitungan GWP₁₀₀, *end-of-life scenario* modeling (composting, anaerobic digestion, mechanical recycling).

**Diagram alir proses (sintesis SOP):**

```
[Feedstock] → [Sortasi & Pencucian] → [Pretreatment] → [Isolasi Filler]
       ↓
[Functionalization] → [Compounding Extrusi] → [Molding]
       ↓
[Karakterisasi] → [LCA] → [Integrasi CSC] → [Distribusi]
       ↓
[End-of-life: Composting/Recycling/Recovery]
```

Integrasi CSC mengikuti 9R framework (Refuse, Rethink, Reduce, Reuse, Repair, Refurbish, Remanufacture, Repurpose, Recycle) yang operasionalisasinya diturunkan Agrawal et al. (2022) melalui identifikasi *closed-loop* antara supplier, manufaktur, distributor, dan *recovery partner*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Biokomposit PLA/CNF untuk Aplikasi Kemasan

**Skenario:** Sebuah perusahaan kemasan di Jawa Tengah ingin memproduksi *tray* PLA dengan reinforcement CNF dari limbah bagasse tebu. Target: mengurangi jejak karbon 30% vs. *expanded polystyrene* (EPS) tanpa mengurangi performa mekanik secara signifikan.

**Parameter input industri:**

| Parameter | Nilai | Sumber |
|-----------|-------|--------|
| $E_m$ (PLA) | 3,5 GPa | MatWeb database |
| $E_f$ (CNF) | 150 GPa | Lizundia et al. (2022) |
| Aspek rasio CNF | 50 | Diasumsikan |
| $V_f$ | 0,05 | Formulasi |
| GWP PLA | 1,7 kg CO₂eq/kg | Ecoinvent 3.8 |
| GWP EPS | 3,5 kg CO₂eq/kg | Ecoinvent 3.8 |
| GWP produksi CNF | 0,6 kg CO₂eq/kg | Estimasi |
| C-content CNF | 0,44 | Stoichiometri selulosa |
| Massa produk | 50 g/tray | Spesifikasi |

**Kalkulasi step-by-step:**

**(a) Modulus Young komposit (Halpin-Tsai):**

$$\xi = 2 \cdot \frac{L}{d} = 2 \cdot 50 = 100$$

$$\eta = \frac{(150/3{,}5) - 1}{(150/3{,}5) + 100} = \frac{42{,}857}{142