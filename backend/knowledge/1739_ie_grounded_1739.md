# 1739 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Bonding Hibrida Cu-Cu, dan Tata Letak Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design; Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma industri semikonduktor global dari monolitik System-on-Chip (SoC) menuju arsitektur chiplet dan *three-dimensional integrated circuit* (3D-IC) bukan sekadar pilihan teknologi, melainkan respons strategis terhadap batas fisik dan ekonomi Hukum Moore. Roze dan Gerber (2026), dalam naskah yang dipresentasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, menyoroti bahwa Electronic Design Automation (EDA) modern harus berevolusi dari paradigma "flat 2D" menjadi metodologi desain yang multi-disiplin dan multi-skala (DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)). Hal ini didorong oleh realitas bahwa sebuah desain chiplet modern—misalnya GPU + HBM + chiplet I/O—melibatkan ko-desain simultan dari termal, mekanis, integritas sinyal, integritas daya, dan manufakturabilitas, yang kesemuanya sebelumnya diselesaikan secara silo. Sebagaimana ditegaskan oleh Roze dan Gerber, *the chiplet era demands a unified design cockpit*, sebuah argumen yang konvergen dengan praktik rekayasa sistem industri.

Secara ekonomis, biaya masker litografi untuk proses 3 nm telah menembus ambang USD 20 juta per set masker, sehingga arsitektur chiplet—di mana beberapa *die* kecil dihasilkan pada node成熟 yang berbeda dan diintegrasikan melalui *interposer* atau *bridge*—menawarkan *yield management* yang superior. John H. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menyatakan bahwa hybrid bonding Cu-Cu dengan pitch di bawah 10 µm adalah *enabler* utama dari arsitektur 3D-IC dengan kepadatan sambungan >10⁶ koneksi/cm². Kombinasi kedua literatur ini—solusi EDA dan teknologi bonding—menjadi tulang punggung strategis bagi rantai pasok semikonduktor maju.

Urgensi operasional tampak pada tiga masalah rekayasa sistem industri: (i) fragmentasi *tool flow* antara vendor EDA, (ii) kurangnya standardisasi verifikasi hierarkis untuk *known-good-die* (KGD), dan (iii) belum terintegrasinya analisis termo-mekanis dengan *design-for-test* (DFT). Dokumen Knowledge Base ini, Modul 1739, menyajikan kerangka sistematis untuk menjawab tantangan tersebut melalui formulasi matematis, SOP rekayasa, dan studi kasus kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Jaringan Termal untuk Stack 3D-IC

Analisis termal pada struktur chiplet menggunakan analogi resistansi termal satu dimensi yang diperluas ke konfigurasi *stacked-die*. Untuk sebuah stack dengan $n$ lapis chiplet, resistansi termal total dari junction ke ambient didefinisikan sebagai:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + R_{th,interface} + R_{th,hs}$$

di mana $t_i$ adalah ketebalan lapisan ke-$i$, $k_i$ konduktivitas termal material, $A_i$ luas penampang efektif, $R_{th,interface}$ resistansi kontak termal antarmuka (*thermal interface material*), dan $R_{th,hs}$ resistansi heat sink.

Untuk struktur hybrid bonding Cu-Cu, jalur vertikal didominasi oleh pillar tembaga dengan *area fraction* $\alpha_{Cu}$. Konduktivitas termal efektif dapat dimodelkan dengan aturan paralel:

$$k_{eff} = \alpha_{Cu} \cdot k_{Cu} + (1-\alpha_{Cu}) \cdot k_{dielectric}$$

dengan $k_{Cu} \approx 401 \text{ W/m·K}$ dan $k_{dielectric} \approx 1{,}4 \text{ W/m·K}$ untuk SiO₂. Pada pitch 10 µm dengan diameter pillar 5 µm, $\alpha_{Cu} \approx 0{,}196$, menghasilkan $k_{eff} \approx 79{,}7 \text{ W/m·K}$ yang signifikan mempengaruhi disipasi.

### 2.2 Model Yield Manufaktur untuk Hetero-Integrasi

Yield sebuah paket heterogen dapat dimodelkan sebagai produk dari yield individual komponen dan yield interkoneksi (Lau, 2023):

$$Y_{system} = \prod_{j=1}^{m} Y_{die,j} \cdot Y_{bonding} \cdot Y_{KGD}$$

Yield bonding Cu-Cu hybrid, sebagai fungsi dari akurasi alignment $\sigma$ dan pitch $p$, mengikuti distribusi probabilitas kumulatif:

$$Y_{bonding} = 1 - \Phi\left(-\frac{p/2 - 3\sigma}{\sigma}\right)$$

di mana $\Phi$ adalah fungsi distribusi kumulatif normal standar. Dengan $\sigma = 0{,}5 \text{ µm}$ dan pitch $p = 10 \text{ µm}$, diperoleh toleransi alignment efektif $p/2 - 3\sigma = 3{,}5 \text{ µm}$, sehingga:

$$Y_{bonding} = 1 - \Phi(-7) \approx 1 - 1{,}28 \times 10^{-12} \approx 1$$

### 2.3 Formulasi Biaya Total Kepemilikan (TCO)

Dari perspektif teknik industri, keputusan fabrikasi dievaluasi melalui *total cost of ownership*:

$$TCO = C_{mask} + \sum_{j=1}^{m} (C_{wafer,j} \cdot N_{die,j}) + C_{assembly} + C_{test}$$

Dengan model *yield-defective* Poisson untuk wafer berdiameter $D$, jumlah die per wafer adalah:

$$N_{die} = \frac{\pi D^2}{4 A_{die}} - \frac{\pi D}{\sqrt{2 A_{die}}} - \pi r^2 / A_{die}$$

yang telah disesuaikan untuk *edge loss*. Yield wafer mengikuti $Y_{wafer} = e^{-D_0 A_{die}}$ dengan $D_0$ *defect density*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur EDA Multi-disiplin (Roze & Gerber, 2026)

Roze dan Gerber (2026) mengartikulasikan platform EDA yang harus mengimplementasikan *closed-loop feedback* antara tahap *floorplanning*, *place-and-route*, dan verifikasi fisik termal-mekanis. Aliran SOP yang diadaptasi sebagai Standar Prosedur Operasional RuangTI untuk Modul 1739 adalah sebagai berikut:

```
┌────────────────────────────────────────────────────────────┐
│ TAHAP 1: Spesifikasi Sistem & Partisi Chiplet              │
│  → Alokasi blok IP, definisi antarmuka die-to-die (D2D)    │
│  → Penentuan protokol PHY (UCIe, BoW, AIB)                 │
├────────────────────────────────────────────────────────────┤
│ TAHAP 2: Implementasi Multi-Die                            │
│  → Place & route masing-masing chiplet                     │
│  → Sintesis *bump map* dan *micro-bump array*              │
├────────────────────────────────────────────────────────────┤
│ TAHAP 3: Assembly Co-Design                                │
│  → Stacking order, pilihan interposer/substrate            │
│  → Hybrid bonding Cu-Cu pitch planning (Lau, 2023)         │
├────────────────────────────────────────────────────────────┤
│ TAHAP 4: Verifikasi Multi-Fisik                            │
│  → IR-drop, SI/PI, thermal, warpage, stress                │
│  → EM/ESD analysis, DFM, DFT                               │
├────────────────────────────────────────────────────────────┤
│ TAHAP 5: Sign-off & Handoff Manufaktur                     │
│  → GDSII/OASIS, BOM, test pattern, KGD strategy            │
└────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Proses Hybrid Bonding Cu-Cu (Lau, 2023)

Lau (2023) menetapkan SOP proses bonding yang menjadi standar industri:

1. **Preparasi permukaan:** Chemical-mechanical polishing (CMP) mencapai *surface roughness* $R_a < 0{,}5 \text{ nm}$.
2. **Plasma activation:** Pembersihan plasma Ar/N₂ untuk menghilangkan oksida Cu dan menghidrofilkan permukaan.
3. **Pre-bonding pada suhu ruang dengan akurasi alignment <±200 nm.**
4. **Annealing:** Suhu 250–400°C, tekanan 100–300 kPa, durasi 30–60 menit untuk difusi Cu-Cu.
5. **Inspeksi:** *Scanning acoustic microscopy* (SAM) dan *X-ray* untuk verifikasi sambungan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Sebuah *startup* AI accelerator merancang paket heterogen dengan tiga chiplet: (1) compute die 5 nm (luas $A_1 = 100 \text{ mm}^2$), (2) HBM3 memory stack 2 lapis (luas $A_2 = 80 \text{ mm}^2$ per die), dan (3) I/O chiplet 7 nm (luas $A_3 = 60 \text{ mm}^2$). Target pitch hybrid bonding: $p = 8 \text{ µm}$. Diameter pillar Cu: $d = 4 \text{ µm}$, menghasilkan $\alpha_{Cu} = \pi(d/p)^2/4 \approx 0{,}196$.

### 4.2 Perhitungan Termal

Dengan *power dissipation* compute die $P_1 = 150 \text{ W}$, HBM total $P_2 = 20 \text{ W}$, dan I/O $P_3 = 5 \text{ W}$, total daya $P = 175 \text{ W}$. Resistansi termal effective per lapis dengan $t_{die} = 0{,}75 \text{ mm}$, $k_{Si} = 148 \text{ W/m·K}$, area efektif $A_{eff} = 0{,}9 \times 240 \text{ mm}^2 = 2{,}16 \times 10^{-4} \text{ m}^2$:

$$R_{th,die} = \frac{0{,}75 \times 10^{-3}}{148 \times 2{,}16 \times 10^{-4}} = 0{,}0235 \text{ K/W}$$

Tambahkan TIM dengan $R_{th,TIM} = 0{,}05 \text{ K/W}$ dan heat sink $R_{th,hs} = 0{,}08 \text{ K/W}$. Total:

$$R_{th,total} = 3 \times 0{,}0235 + 0{,}05 + 0{,}08 = 0{,}2005 \text{ K/W}$$

Kenaikan suhu junction: $\Delta T = P \cdot R_{th,total} = 175 \times 0{,}2005 = 35{,}1°C$. Dengan ambient $T_a = 45°C$ (lingkungan data center), $T_j = 80{,}1°C$ — masih di bawah batas aman 95°C untuk *compute* die 5 nm.

### 4.3 Analisis Yield & Biaya

Asumsi: $D_0$ wafer 300 mm = 0{,}05 cm⁻², biaya wafer 5 nm = USD 17.000, biaya wafer 7 nm = USD 8.000, *defect density* HBM = 0{,}03 cm⁻². Yield wafer compute: $Y_1 = e^{-0{,}05 \times 1{,}0} = e^{-0{,}05} = 0{,}9512$. Yield HBM: $Y_2 = e^{-0{,}03 \times 0{,}8} = 0{,}9763$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
