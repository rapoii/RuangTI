# 1429 — Penilaian Keberlanjutan Siklus Hidup Sirkular (C-LCSA): Kerangka Terintegrasi untuk Rekayasa Industri Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Circular Life Cycle Sustainability Assessment: An Integrated Framework* — Integrasi Dimensi Sirkularitas dalam Penilaian Siklus Hidup Multi-Dimensi
**Jurnal & Sitasi Utama:** Anna Luthin, Marzia Traverso, Robert H. Crawford (2023). *Circular life cycle sustainability assessment: An integrated framework*. **Journal of Industrial Ecology**. DOI: [https://doi.org/10.1111/jiec.13446](https://doi.org/10.1111/jiec.13446)
**Sitasi Pendukung:** Md Tasbirul Islam, Usha Iyer-Raniga, Sean Trewick (2022). *Recycling Perspectives of Circular Business Models: A Review*. **Recycling**, 7(5), 79. DOI: [https://doi.org/10.3390/recycling7050079](https://doi.org/10.3390/recycling7050079)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global dari paradigma ekonomi linear (*take-make-dispose*) menuju **Ekonomi Sirkular (CE — Circular Economy)** telah mengubah secara radikal peta strategis rekayasa sistem industri pada dekade terakhir. Luthin, Traverso, dan Crawford (2023) dalam Journal of Industrial Ecology (DOI: [10.1111/jiec.13446](https://doi.org/10.1111/jiec.13446)) menekankan bahwa *robust monitoring and assessment methods are required to assess circular economy (CE) concepts in terms of their degree of circularity and their contribution to sustainability*. Pernyataan ini merefleksikan kegelisahan akademik dan praktis bahwa tanpa alat ukur yang terstandarisasi, klaim sirkularitas suatu produk atau sistem manufaktur akan jatuh menjadi *greenwashing* semata.

Konteks industri yang melatarbelakangi pengembangan kerangka C-LCSA (Circular Life Cycle Sustainability Assessment) bersumber dari tiga tantangan operasional simultan. Pertama, **fragmentasi metodologis** — industri saat ini memiliki perangkat terpisah: *Life Cycle Assessment* (LCA) untuk dimensi lingkungan, *Life Cycle Costing* (LCC) untuk dimensi ekonomi, dan *Social Life Cycle Assessment* (S-LCA) untuk dimensi sosial. Ketiga alat ini, meski diakui secara internasional oleh ISO 14040/14044 dan UNEP/SETAC, belum mengintegrasikan secara eksplisit **indikator tingkat sirkularitas** (Circularity Assessment — CA) sebagai dimensi keempat. Kedua, **ledakan indikator CE** tanpa seleksi sistematis — Luthin et al. (2023) mencatat *the abundance of CE indicators required a systematic selection process*, menandakan bahwa lebih dari 50 indikator sirkularitas telah beredar di literatur tanpa hierarki atau pembobotan yang konsisten. Ketiga, **urgensi aplikasi lintas-sektor** — seperti yang dikonfirmasi Islam, Iyer-Raniga, dan Trewick (2022) (DOI: [10.3390/recycling7050079](https://doi.org/10.3390/recycling7050079)), strategi daur ulang dalam *Circular Business Model* (CBM) menghadapi tantangan khas pada limbah *solar PV panels*, *e-waste*, tekstil, dan kendaraan, yang masing-masing memerlukan arsitektur penilaian yang berbeda.

Dalam konteks operasional manufaktur dan rantai pasok modern, kebutuhan akan kerangka terpadu menjadi semakin mendesak. Keputusan insinyur industri — misalnya pemilihan material, desain untuk pembongkaran (*design for disassembly*), atau pengembangan *product-service-system* (PSS) — mensyaratkan visibilitas kuantitatif atas keempat dimensi secara simultan. Tanpa visibilitas ini, optimalisasi parsial (misalnya memaksimumkan daur ulang tanpa memperhatikan dampak sosial atau biaya siklus hidup total) akan menghasilkan *sub-optimal system-level decisions*. Oleh karena itu, pengembangan C-LCSA = LCA + LCC + S-LCA + CA (Luthin et al., 2023) bukan sekadar perluasan akademis, melainkan kebutuhan operasional untuk memastikan bahwa strategi daur ulang benar-benar *mendukung*, bukan *mengkompromikan*, tujuan keberlanjutan tiga-dimensi.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka C-LCSA yang dikembangkan oleh Luthin et al. (2023) membangun di atas empat pilar metodologis yang masing-masing memiliki formulasi kuantitatif formal. Berikut adalah uraian sistematis pilar-pilar tersebut.

### 2.1. Material Circularity Indicator (MCI)

Pilar pertama adalah Circularity Assessment (CA), yang salah satu instrumen operasionalnya adalah *Material Circularity Indicator* (MCI) dari Ellen MacArthur Foundation / Granta Design. MCI mengkuantifikasi tingkat sirkularitas material pada tingkat produk melalui persamaan berikut:

$$MCI = 1 - LFI \cdot F(X)$$

di mana $LFI$ (*Linear Flow Index*) adalah fraksi aliran material yang masih bersifat linear dalam produk, dan $F(X)$ adalah faktor koreksi berbasis utilitas yang merepresentasikan proporsi massa yang masih digunakan selama siklus hidup berguna (*useful applications*). Komponen $LFI$ sendiri didefinisikan sebagai:

$$LFI = \frac{V_{lin}}{V_{lin} + W_{cyc} + W_{rer}}$$

dengan $V_{lin}$ adalah massa material dari input virgin, $W_{cyc}$ adalah massa dari input daur ulang (*recycled*), dan $W_{rer}$ adalah massa dari komponen *reused/repaired*. Nilai MCI berkisar antara 0 (sepenuhnya linear) hingga 1 (sepenuhnya sirkular).

### 2.2. Life Cycle Assessment (LCA) — Dimensi Lingkungan

Komponen lingkungan dalam C-LCSA mengikuti kerangka ISO 14040/14044 dengan formulasi dampak agregat:

$$D_{total} = \sum_{i=1}^{n} \sum_{j=1}^{m} Q_{i,j} \cdot CF_{i,j}$$

di mana $Q_{i,j}$ adalah inventarisasi emisi atau konsumsi sumber daya kategori $i$ pada tahap siklus hidup $j$, dan $CF_{i,j}$ adalah *characterization factor*-nya. Kategori dampak lingkungan tipikal mencakup *Global Warming Potential* (GWP, kg CO₂-eq), *Acidification Potential* (AP), *Eutrophication Potential* (EP), dan *Abiotic Resource Depletion* (ADP).

### 2.3. Life Cycle Costing (LCC) — Dimensi Ekonomi

LCC dalam C-LCSA menggunakan pendekatan *Net Present Value* (NPV) yang mendiskontokan seluruh biaya dan收益 sepanjang horizon analisis:

$$NPV = \sum_{t=0}^{T} \frac{(B_t - C_t)}{(1 + r)^t}$$

di mana $B_t$ adalah manfaat/manufaktur revenue pada tahun $t$, $C_t$ adalah total biaya (modal, operasional, akhir-hidup), $r$ adalah *discount rate* (umumnya 3%–8% sesuai ISO 15686-5), dan $T$ adalah horizon analisis. Untuk indikator profitabilitas sirkular, *payback period* dapat dihitung sebagai:

$$PP = \min \left\{ T : \sum_{t=0}^{T} \frac{(B_t - C_t)}{(1 + r)^t} \geq 0 \right\}$$

### 2.4. Social Life Cycle Assessment (S-LCA)

S-LCA mengikuti *UNEP/SETAC Guidelines* dengan agregasi dampak sosial melalui *Social Impact Score*:

$$S_{total} = \sum_{k=1}^{K} w_k \cdot \sum_{s=1}^{S_k} \frac{(R_{k,s} - P_{k,s})}{R_{k,s}^{max}}$$

di mana $w_k$ adalah bobot stakeholder kategori $k$ (pekerja, konsumen, komunitas,供应链), $R_{k,s}$ adalah *reference score* subkategori $s$, $P_{k,s}$ adalah *performance score* aktual, dan $R_{k,s}^{max}$ adalah nilai referensi maksimum.

### 2.5. Agregasi C-LCSA: Bobot dan Normalisasi

Karena keempat pilar memiliki satuan yang heterogen (kg CO₂-eq, €, *social score points*, indeks 0–1), C-LCSA memerlukan mekanisme normalisasi dan pembobotan:

$$C\text{-}LCSA_{score} = \sum_{d=1}^{4} \lambda_d \cdot \tilde{S}_d$$

dengan $\lambda_d$ adalah bobot dimensi $d$ ($\sum \lambda_d = 1$), dan $\tilde{S}_d$ adalah *skor ternormalisasi* dimensi $d$ pada skala 0–100. Luthin et al. (2023) menekankan bahwa pemilihan bobot $\lambda_d$ harus melalui proses partisipatif multi-stakeholder, bukan asumsi *a priori* oleh analis tunggal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi C-LCSA di lingkungan industri mengikuti prosedur operasional standar yang secara sistematis diuraikan oleh Luthin et al. (2023). Prosedur ini terdiri dari **delapan tahap integral** yang divisualisasikan dalam diagram alur berikut.

```
[Tahap 1: Definisi Tujuan & Cakupan] → ISO 14040 §4.2
            ↓
[Tahap 2: Analisis Inventarisasi Siklus Hidup (LCI)]
            ↓
[Tahap 3: Penilaian Dampak LCA] → [Tahap 4: LCC] → [Tahap 5: S-LCA]
            ↓                                    ↓              ↓
[Inventarisasi emisi, energi, material]  [Cost flow]  [Stakeholder mapping]
            ↓                                    ↓              ↓
[Tahap 6: Circularity Assessment — penghitungan MCI & indikator sirkularitas lainnya]
            ↓
[Tahap 7: Normalisasi & Pembobotan Multi-Dimensi]
            ↓
[Tahap 8: Agregasi C-LCSA Score & Interpretasi]
            ↓
[Rekomendasi Desain / Kebijakan / Investasi]
```

**Tahap 1 — Definisi Tujuan dan Cakupan (*Goal & Scope Definition*).** Tahap ini menetapkan *functional unit* (FU), *system boundary*, dan *intended application*. Misalnya, FU dapat berupa "penerangan 1000 lumen selama 50.000 jam" untuk lampu LED industri. ISO 14040 §4.2 mensyaratkan transparansi penuh pada asumsi ini.

**Tahap 2 — Analisis Inventarisasi.** Data primer dikumpulkan dari lantai pabrik (*bill of materials*, konsumsi energi, *yield rate*), sedangkan data sekunder diperoleh dari basis data Ecoinvent, GaBi, atau USLCI. Ketidakpastian data dihitung melalui *Monte Carlo simulation*.

**Tahap 3 — Circularity Assessment (CA).** Luthin et al. (2023) mengusulkan bahwa CA tidak boleh terbatas pada MCI saja, melainkan menggunakan *set of indicators* yang dipilih melalui *systematic selection process* dengan empat kriteria: *relevance*, *reliability*, *practical applicability*, dan *data availability*. Indikator CA tambahan mencakup: *recycling rate* ($RR = M_{recycled}/M_{total}$), *recycled content ratio* ($RC = M_{recycled,in}/M_{total,in}$), dan *end-of-life recovery rate*.

**Tahap 4-6 — Penilaian Dampak.** Setiap pilar (LCA, LCC, S-LCA, CA) dievaluasi secara independen menggunakan formulasi pada Bagian 2.

**Tahap 7-8 — Agregasi dan Interpretasi.** Skor ternormalisasi diagregasi menggunakan $C\text{-}LCSA_{score}$. Hasil diinterpretasikan dalam *trade-off analysis* untuk mendukung keputusan desain atau kebijakan. SOP ini juga mengintegrasikan rekomendasi Islam et al. (2022) agar strategi daur ulang dalam CBM disertai *reporting mechanism of recyclers' cost of recycled materials* (DOI: [10.3390/recycling7050079](https://doi.org/10.3390/recycling7050079)), yang menjamin transparansi biaya material daur ulang untuk mencegah *bias pasar*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Kasus: Lampu LED Industri Bergaransi 5 Tahun

Sebuah fasilitas manufaktur di Jawa Timur hendak membandingkan dua desain lampu LED untuk gudang otomatis: **Desain A (linear)** — housing aluminium virgin, PCB konvensional, tanpa komponen modular; dan **Desain B (sirkular)** — housing aluminium daur ulang (60% recycled content), PCB modular dengan *snap-fit connectors* untuk memudahkan pembongkaran. *Functional unit*: 1.000 lumen selama 50.000 jam operasional.

### 4.2. Parameter Input

| Parameter | Desain A | Desain B | Satuan |
|---|---|---|---|
| Massa aluminium | 250 | 250 | g |
| % recycled content | 0% | 60% | — |
| Masa pakai (useful life) | 50.000 | 50.000 | jam |
| Konsumsi energi (kWh/umur) | 175 | 175 | kWh |
| Biaya produksi awal ($C_0$) | 18 | 22 | € |
| Biaya disposal ($C_{EOL}$) | 1,5 | 0,5 | € |
| Pendapatan daur ulang ($R_{EOL}$) | 0 | 1,2 | € |
| Discount rate ($r$) | 5% | 5% | — |
| Horizon ($T$) | 5 | 5 | tahun |

### 4.3. Perhitungan Material Circularity Indicator (MCI)

Untuk Desain A: $V_{lin} = 250$ g, $W_{cyc} = 0$, $W_{rer} = 0$, sehingga:
$$LFI_A = \frac{250}{250 + 0 + 0} = 1,000$$

Dengan asumsi utilitas penuh ($F(X) = 1$):
$$MCI_A = 1 - 1{,}000 \cdot 1 = 0$$

Untuk Desain B: $V_{lin} = 100$ g, $W_{cyc} = 150$ g, asumsi $W_{rer} = 0$:
$$LFI_B = \frac{100}{100 + 150 + 0} = 0{,}400$$
$$MCI_B = 1 - 0{,}400 \cdot 1