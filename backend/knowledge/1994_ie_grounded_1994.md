# 1994 — Ekstraksi Superkritis CO₂ dari Mikroalga: Rekayasa Proses untuk Pemulihan Pigmen, Lipid, dan Senyawa Bioaktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Recent Advances in Supercritical CO₂ Extraction of Pigments, Lipids and Bioactive Compounds from Microalgae
**Jurnal & Sitasi Utama:** Soultana Tzima, Ioulia Georgiopoulou, Vasiliki Louli (2023). *Molecules*, 28(3), 1410. DOI: [https://doi.org/10.3390/molecules28031410](https://doi.org/10.3390/molecules28031410)
**Sitasi Pendukung:** Metin Yıldırım, Mehmet Erşatır, Samet Poyraz (2024). *Plants*, 13(16), 2295. DOI: [https://doi.org/10.3390/plants13162295](https://doi.org/10.3390/plants13162295)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction/SFE) merupakan teknologi pemisahan green-chemistry yang mengandalkan sifat antara gas dan cairan dari suatu fluida ketika dilewatkan di atas titik kritisnya. Tzima, Georgiopoulou, dan Louli (2023) dalam *Molecules* menjelaskan bahwa SFE dengan CO₂ telah menarik perhatian industri secara masif karena menggabungkan keuntungan ekonomi dan lingkungan secara simultan (DOI: [10.3390/molecules28031410](https://doi.org/10.3390/molecules28031410)). Mikroalga sebagai biomassa yang berlimpah—dengan estimasi produktivitas lipid antara 1.000–10.000 galon/acre/tahun menurut literatur feedstock biofuel—menawarkan sumber carotenoid (astaxanthin, lutein, β-karoten), klorofil, lipid, dan asam lemak esensial yang bernilai tambah tinggi untuk industri pangan, kosmetik, farmasi, dan bioenergi.

Urgensi industri terhadap SFE-CO₂ terletak pada tiga pilar utama. Pertama, **keberlanjutan operasional**: CO₂ sebagai pelarut tidak toksik, tidak mudah terbakar, dapat didaur-ulang (recovery rate >95%), dan memenuhi prinsip-prinsip *Green Chemistry* ke-5 dan ke-7 (pengemulsi yang lebih aman serta efisiensi atom). Kedua, **kualitas produk termolabil**: berbeda dengan Soxhlet yang beroperasi pada 60–80°C, SFE-CO₂ dapat dijalankan pada suhu rendah (35–60°C) sehingga mencegah degradasi senyawa bioaktif yang sensitif terhadap termal. Yıldırım, Erşatır, dan Poyraz (2024) dalam *Plants* menguatkan argumen ini dengan menekankan kemampuan SFE-CO₂ beroperasi pada suhu rendah yang tidak menyebabkan degradasi senyawa aktif, dengan ekstrak yang menunjukkan aktivitas antikanker yang superior (DOI: [10.3390/plants13162295](https://doi.org/10.3390/plants13162295)).

Ketiga, **urgensi ekonomi sirkular**: menurut Tzima et al. (2023), aplikasi SFE pada mikroalga *Nannochloropsis*, *Chlorella*, *Spirulina*, dan *Haematococcus pluvialis* menghasilkan yield carotenoid 40–90% dengan kemurnian yang memenuhi standar farmasi EU Pharmacopeia. Faktor-faktor ini menjadikan SFE-CO₂ bukan sekadar alternatif ekstraksi, melainkan platform teknologi rekayasa proses yang menentukan posisi kompetitif dalam rantai pasok bioindustri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Sifat Termodinamika CO₂ Superkritis

CO₂ memiliki titik kritis pada $T_c = 304{,}13\ \text{K}$ ($31{,}1^\circ\text{C}$) dan $P_c = 7{,}38\ \text{MPa}$ ($73{,}8\ \text{bar}$). Di atas titik ini, fluida berada dalam kondisi superkritis dengan difusivitas tinggi ($D \approx 10^{-3}\ \text{cm}^2/\text{s}$) dan densitas mendekati cairan ($0{,}6\text{–}0{,}9\ \text{g/cm}^3$), sehingga daya larut selektifnya dapat diatur melalui manipulasi tekanan dan suhu.

### 2.2. Model Kelarutan Chrastil (1982)

Kelarutan solute ($c^*$) dalam CO₂ superkritis sebagai fungsi suhu ($T$) dan densitas fluida ($\rho$) dinyatakan oleh persamaan semi-empiris:

$$c^* = \rho^{k} \cdot \exp\!\left(\frac{a}{T} + b\right)$$

dengan $a = \frac{\Delta H_{sol}}{R}$ adalah entalpi pelarutan, $b$ adalah konstanta stoikiometri, dan $k$ adalah indeks asosiasi solute-solvent. Persamaan ini menjadi dasar scale-up kelarutan dalam proses SFE (Tzima et al., 2023).

### 2.3. Model Kinetika Ekstraksi Sovová (1994)

Untuk batch SFE pada partikel biomassa, model dua tahap yang paling banyak dikutip adalah *Broken and Intact Cells* (BIC) oleh Sovová. Neraca massa pada fase fluida di atas padatan:

$$\frac{\partial C}{\partial t} + \frac{u}{L}\frac{\partial C}{\partial z} = -\frac{J(z,t)}{\epsilon}$$

dengan $C$ konsentrasi solute dalam fluida, $u$ kecepatan superfisial CO₂, $L$ panjang bed, $\epsilon$ porositas, dan $J(z,t)$ fluks transfer massa:

$$J(z,t) = k_f a_0 \left[C^*(T,P) - C(z,t)\right]$$

di mana $k_f$ adalah koefisien transfer massa eksternal dan $a_0$ luas spesifik. Untuk sel yang sudah pecah (*broken cells*), perpindahan dikontrol oleh konveksi eksternal; untuk sel utuh (*intact cells*), perpindahan dikontrol oleh difusi internal:

$$J_i(z,t) = k_s a_0 \left[\langle q \rangle - q^*(T,P)\right]$$

dengan $k_s$ koefisien transfer massa internal dan $q$ konsentrasi solute dalam padatan. Akumulasi internal dideskripsikan oleh:

$$\frac{\partial q}{\partial t} = -J_i \cdot (1-\epsilon)\rho_s$$

### 2.4. Model Logistik Naik & Shen (1998)

Model fenomenologis sederhana untuk menggambarkan kurva yield kumulatif $e(t)$:

$$e(t) = \frac{e_\infty}{1 + \exp\left[-\frac{k}{e_\infty}(t - t_m)\right]}$$

dengan $e_\infty$ adalah yield maksimum yang dapat dicapai, $k$ adalah laju ekstraksi awal, dan $t_m$ adalah *midpoint* (waktu ketika yield = $e_\infty/2$).

### 2.5. Yield dan Efisiensi Proses

Yield absolut dan efisiensi ekstraksi didefinisikan sebagai:

$$Y(\%) = \frac{m_{extract}}{m_{biomass,dry}} \times 100\%$$

$$\eta_{exhaustion} = \frac{m_{extract}}{m_{extract,\infty}} \times 100\%$$

Yield spesifik terhadap konsumsi pelarut:

$$Y_{sp} = \frac{m_{extract}}{Q_{CO_2} \cdot t}$$

dengan $Q_{CO_2}$ laju alir massa CO₂ (kg/jam). Menurut Tzima et al. (2023), konsumsi spesifik optimal berada pada rentang $S/F = 20\text{–}60$ kg CO₂/kg biomassa untuk aplikasi carotenoid.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Proses SFE-CO₂ Industri

Diagram berikut merupakan arsitektur proses standar unit SFE-CO₂ skala komersial (kapasitas 50–2.000 L extractor):

```
[Bahan Baku Mikroalga] 
       ↓ (Pengeringan & Milling)
[Sieving 40–60 mesh]
       ↓
[Pre-treatment: Cell disruption]
       ↓
[Ekstraktor Bertekanan (Extraction Vessel)]
       ↓ (CO₂ superkritis pada 200–400 bar, 40–60°C)
[Separator 1 (40 bar, 40°C)] → [Separator 2 (20 bar, 25°C)]
       ↓                              ↓
   [Heavy Wax/Resin]              [Extract Target]
       ↓
[CO₂ Recycle] → [Compressor → Heater → Ekstraktor]
```

### 3.2. SOP Industri Langkah-demi-Langkah

1. **Preparasi Biomassa (Pretreatment)**: Mikroalga dikeringkan dengan *spray drying* atau *freeze drying* hingga kadar air <8%, kemudian digiling (*bead mill*) untuk memecahkan dinding sel. Tzima et al. (2023) mencatat bahwa pretreatment mekanis meningkatkan yield carotenoid hingga 60% pada *Haematococcus pluvialis* (DOI: [10.3390/molecules28031410](https://doi.org/10.3390/molecules28031410)).

2. **Loading & Sealing**: Biomassa dimasukkan ke dalam extraction vessel dengan rasio packing density $0{,}4\text{–}0{,}6\ \text{kg/L}$. Vessel disegel dan diuji kebocoran (*leak test* pada 1,1× tekanan operasi).

3. **Establishment of Operating Conditions**: Tekanan ditingkatkan secara gradual (rate ramp $5\ \text{bar/s}$) hingga set-point $P_{op} = 250\text{–}350\ \text{bar}$ melalui pompa diafragma (*diaphragm compressor*). Suhu dijaga pada $T_{op} = 40\text{–}60^\circ\text{C}$ menggunakan heat exchanger tipe shell-and-tube.

4. **Ekstraksi Dinamis**: CO₂ dialirkan dengan laju $Q = 5\text{–}50\ \text{kg/jam}$ selama 1–6 jam. Parameter rasio solvent-to-feed $S/F$ dimonitor secara real-time.

5. **Separasi & Recovery**: Setelah keluar dari extractor, fluida dilewatkan ke separator 1 (depresurisasi ke 40–60 bar) dan separator 2 (20–30 bar) untuk memisahkan solute dari CO₂. CO₂ di-recycle dengan efisiensi recovery >95%.

6. **Quality Control**: Extract dianalisis dengan HPLC-MS/MS untuk profil carotenoid, GC-FID untuk profil asam lemak, dan DPPH/ABTS assay untuk aktivitas antioksidan (sesuai protokol yang dirujuk Yıldırım et al., 2024).

### 3.3. Design of Experiment (DoE) Industri

Tzima et al. (2023) menguraikan bahwa Response Surface Methodology (RSM) dengan Central Composite Design (CCD) merupakan pendekatan dominan untuk optimasi SFE-CO₂. Faktor yang dimodelkan: tekanan $P$, suhu $T$, laju alir CO₂ $Q$, dan waktu $t$. Respon: yield, kandungan total carotenoid, dan aktivitas antioksidan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus: Ekstraksi Astaxanthin dari *Haematococcus pluvialis*

**Data Input Industri** (berdasarkan Tzima et al., 2023):

| Parameter | Nilai | Simbol |
|---|---|---|
| Massa biomassa kering | 1,0 kg | $m_b$ |
| Kandungan air awal | 5% | $w_a$ |
| Kandungan astaxanthin teoritis | 4,0% (w/w) | $c_0$ |
| Tekanan operasi | 300 bar | $P$ |
| Suhu operasi | 50°C | $T$ |
| Laju alir CO₂ | 8 kg/jam | $Q$ |
| Waktu ekstraksi | 4 jam | $t$ |

**Langkah 1: Perhitungan Densitas CO₂ Superkritis**
Menggunakan persamaan Span-Wagner pada $T = 323{,}15\ \text{K}$ dan $P = 30\ \text{MPa}$:
$$\rho_{CO_2} \approx 830{,}7\ \text{kg/m}^3$$

**Langkah 2: Perhitungan Yield Teoritis Maksimum**
$$e_\infty = m_b \cdot c_0 = 1{,}0 \times 0{,}04 = 40{,}0\ \text{gram astaxanthin}$$

**Langkah 3: Model Logistik Naik**
Asumsikan parameter kinetik referensi: $e_\infty = 38\ \text{g}$ (95% recovery), $k = 25\ \text{g/jam}$, $t_m = 1{,}5\ \text{jam}$. Pada $t = 4\ \text{jam}$:

$$e(4) = \frac{38}{1 + \exp\left[-\frac{25}{38}(4 - 1{,}5)\right]} = \frac{38}{1 + \exp(-1{,}645)} = \frac{38}{1 + 0{,}193} = 31{,}85\ \text{gram}$$

**Langkah 4: Efisiensi Ekstraksi**
$$\eta_{exhaustion} = \frac{31{,}85}{38} \times 100\% = 83{,}8\%$$

**Langkah 5: Specific Yield terhadap Konsumsi CO₂**
Total CO₂ yang digunakan: $Q \cdot t = 8 \times 4 = 32\ \text{kg}$
$$Y_{sp} = \frac{31{,}85}{32} = 0{,}995\ \text{gram astaxanthin per kg CO}_2$$

**Langkah 6: Analisis Ekonomi Sederhana**
- Harga astaxanthin natural grade: ~$7.000/kg (sintetis $1.500/kg)
- Nilai produk: $31{,}85 \times 10^{-3} \times 7.000 = \$222{,}95$ per batch
- Konsumsi CO₂ per kg: $32\ \text{kg}$ × \$0,15/kg = \$4,80
- Kontribusi margin CO₂: $(222{,}95 - 4{, \dots.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
