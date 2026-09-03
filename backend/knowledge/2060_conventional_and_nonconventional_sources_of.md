# 2060 — Rekayasa Proses Biomolekuler Lanjutan: Optimasi Ekstraksi Hijau dan Isolasi Eksosom untuk Manufaktur Biofarmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Conventional and Nonconventional Sources of Exosomes–Isolation Methods and Influence on Their Downstream Biomedical Application
**Jurnal & Sitasi Utama:** Olga Janoušková, Regina Herma, Alena Semerádtová (2022). *Frontiers in Molecular Biosciences*. DOI: [https://doi.org/10.3389/fmolb.2022.846650](https://doi.org/10.3389/fmolb.2022.846650)
**Sitasi Pendukung:** Eugenia Mazzara, Riccardo Carletti, Riccardo Petrelli (2022). *Journal of the Science of Food and Agriculture*. DOI: [https://doi.org/10.1002/jsfa.11971](https://doi.org/10.1002/jsfa.11971)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global sedang mengalami transisi paradigma dari pendekatan konvensional berbasis reaksi sintesis kimia murni menuju **bioproses multi-fracsional** yang memanfaatkan sel, jaringan, dan metabolit sekunder organisme sebagai *feedstock* produksi. Dua corak utama transformasi tersebut tecermin jelas dalam dua literatur ilmiah yang menjadi basis modul ini.

Pertama, **Janoušková, Herma, dan Semerádtová (2022)** dalam tinjauan sistematis mereka di *Frontiers in Molecular Biosciences* menyoroti pentingnya eksosom (EXs) — vesikel ekstraseluler berdiameter 30–150 nm — sebagai biomarker, modulator proses fisiologis-patologis, dan agen terapeutik. Meskipun riset tentang eksosom dari sumber konvensional (sel mamalia seperti sel punca mesenkimal, sel tumor, dan sel darah) sudah sangat intensif, sumber **nonkonvensional** (eksosom avertebrata, eksosom nabati dari *Cannabis sativa*, *Gingeria officinale*, *Aloe vera*, dan mikroalga) masih kurang dieksplorasi. Ketiadaan protokol isolasi terstandar, kondisi penyimpanan yang tidak konsisten, serta fragmentasi metode baru (microfluidics, immunoaffinity, precipitation kit) menyebabkan variabilitas hasil yang tinggi — sebuah *critical quality attribute* (CDA) yang menjadi perhatian utama regulator FDA, EMA, dan BPOM. Tanpa standardisasi, biaya produksi batch biofarmasi berbasis eksosom dapat melonjak 35–60% akibat *failure rate* yang tinggi.

Kedua, **Mazzara, Carletti, dan Petrelli (2022)** mempublikasikan studi *solvent-free microwave-assisted extraction* (MAE) untuk *Cannabis sativa* L. di *Journal of the Science of Food and Agriculture*. Mereka menekankan bahwa **ekstraksi hijau** tidak hanya menghasilkan minyak atsiri, tetapi juga dua *by-product* bernilai tinggi: residu air kaya fenolik dan biomassa deterpenat yang masih mengandung fitokannabinoid. Optimasi dilakukan melalui **Central Composite Design** (CCD) yang mempelajari tiga variabel: daya iradiasi gelombang mikro, waktu ekstraksi, dan volume air yang ditambahkan. Hasilnya, MAE hijau mampu mengekstraksi tiga fraksi bernilai dalam satu alur proses — sebuah manifestasi konkret dari prinsip **integrated biorefining** dalam kerangka *Industrial Biotechnology 4.0*.

Konteks industri yang melatarbelakangi kedua paper ini amat relevan bagi rekayasawan industri: bagaimana merancang lini produksi yang *scalable*, *reproducible*, dan memenuhi standar *Good Manufacturing Practice* (GMP) sambil mempertahankan kelestarian lingkungan. Modul ini menyintesis kedua paper ke dalam kerangka **Rekayasa Proses Biomolekuler** yang membahas formulasi matematis, SOP isolasi-ekstraksi, studi kasus kuantitatif, dan evaluasi lintas-sektor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Kinetika Partisi Eksosom pada Sentrifugasi Diferensial

Janoušková et al. (2022) menjelaskan bahwa isolasi eksosom melalui **ultrasentrifugasi diferensial** mengikuti hukum sedimentasi Stokes yang dimodifikasi untuk vesikel biologis:

$$v_s = \frac{2 \cdot r_p^2 \cdot (\rho_p - \rho_m) \cdot g}{9 \cdot \eta}$$

di mana $v_s$ adalah kecepatan sedimentasi, $r_p$ jari-jari partikel (eksosom: 30–150 nm), $\rho_p$ densitas eksosom (≈ 1,10–1,19 g/cm³), $\rho_m$ densitas medium (sucrose/iodixanol gradient ≈ 1,05–1,20 g/cm³), $g$ percepatan sentrifugal (umumnya 100.000–120.000 × g), dan $\eta$ viskositas medium. Persamaan ini menentukan waktu sentrifugasi optimum $t_s$ untuk memisahkan eksosom dari kontaminan:

$$t_s = \frac{h}{v_s} = \frac{9 \cdot \eta \cdot h}{2 \cdot r_p^2 \cdot (\rho_p - \rho_m) \cdot g}$$

dengan $h$ adalah jarak tempuh partikel dalam rotor. Variasi ukuran eksosom ($\sigma_r$) menentukan **koefisien dispersi ukuran** yang menjadi metrik kualitas:

$$CV_{size} = \frac{\sigma_r}{\bar{r}_p} \times 100\%$$

### 2.2. Response Surface Methodology (RSM) dengan Central Composite Design

Mazzara et al. (2022) menggunakan **CCD rotatable** untuk optimasi MAE. Model polinomial orde dua yang dipasang pada respon yield ($Y$) adalah:

$$Y = \beta_0 + \sum_{i=1}^{k} \beta_i x_i + \sum_{i=1}^{k} \beta_{ii} x_i^2 + \sum_{i<j} \beta_{ij} x_i x_j + \varepsilon$$

dengan $k$ = jumlah variabel independen (3 variabel: daya $P$, waktu $t$, volume air $V$), $\beta_0$ adalah intercept, $\beta_i$ koefisien linier, $\beta_{ii}$ koefisien kuadratik, $\beta_{ij}$ koefisien interaksi, dan $\varepsilon$ adalah error acak. Untuk CCD dengan $k=3$, jumlah run percobaan adalah:

$$N = 2^k + 2k + n_0 = 2^3 + 2(3) + 6 = 20 \text{ run}$$

dengan $n_0$ = 6 titik center untuk estimasi *pure error*. Titik aksial berada pada jarak $\alpha = (2^k)^{1/4} = 1{,}682$ dari center dalam koordinat terkode.

**Yield** masing-masing fraksi didefinisikan sebagai:

$$Y_{oil} = \frac{m_{oil}}{m_{biomass}} \times 100\%$$

$$Y_{phenolics} = \frac{C_{GAE} \cdot V_{extract}}{m_{biomass}} \times 100\%$$

dengan $C_{GAE}$ konsentrasi ekivalen asam galat dan $V_{extract}$ volume ekstrak.

### 2.3. Efisiensi Energi dan Mass Balance

Konsumsi energi spesifik MAE didefinisikan sebagai:

$$E_{sp} = \frac{P \cdot t_{ext}}{m_{product}} \quad \text{[kWh/kg]}$$

dan **overall recovery** untuk tiga fraksi gabungan:

$$R_{tot} = \frac{m_{oil} + m_{phenolics} + m_{cannabinoids}}{m_{biomass, in}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. SOP Isolasi Eksosom Skala Industri

Diagram alir proses isolasi eksosom mengikuti rekomendasi Janoušková et al. (2022), yang mengintegrasikan empat tahap kritis:

```
[Sampling Biomassa] 
        ↓
[Tahap 1: Pra-pemrosesan] → Sentrifugasi rendah (300×g, 10 min, 4°C) 
        → Eliminasi sel utuh dan debris → Supernatan
        ↓
[Tahap 2: Filtrasi Berjenjang] → 0,8 μm → 0,45 μm → 0,22 μm 
        → Penghilangan vesikel besar dan mikroplatelet
        ↓
[Tahap 3: Konsentrasi] → Ultracentrifugation (100.000–120.000×g, 70–90 min, 4°C) 
        → Pellet eksosom → Resuspensi PBS steril
        ↓
[Tahap 4: Purifikasi Lanjut] → Size Exclusion Chromatography (SEC) 
        ATAU Microfluidics chip-based
        ↓
[Karakterisasi & QC] → NTA (Nanoparticle Tracking Analysis), TEM, 
        Western Blot (CD9, CD63, CD81), BCA protein assay
```

**Parameter kontrol kritis (CCP):**

| Parameter | Setpoint | Toleransi | Metode Monitoring |
|---|---|---|---|
| Suhu sentrifugasi | 4°C | ±2°C | Termokopel rotor |
| G-force | 120.000 × g | ±5% | Tachometer |
| Konsentrasi protein | 0,5–2,0 mg/mL | ±15% | BCA assay |
| Ukuran partikel | 80–150 nm | ±20% | NTA |
| Sterilitas | 0 CFU/mL | — | Filtrasi 0,22 μm + Uji endotoksin |
| Penyimpanan | −80°C | — | Cold chain monitoring |

### 3.2. SOP Ekstraksi MAE Hijau untuk Hemp

Berdasarkan Mazzara et al. (2022), alur proses optimal adalah:

1. **Preparasi biomassa**: Pengeringan bunga *Cannabis sativa* pada 35°C hingga kadar air < 12%, penggilingan menggunakan cryogenic mill untuk ukuran partikel 0,5–2 mm.
2. **Pemuatan reaktor**: Masukkan 100 g biomassa ke dalam reaktor MAE (Milestone FlexiWAVE atau setara) tanpa pelarut organik.
3. **Penambahan air**: Suntikkan air deionisasi sesuai volume optimal hasil CCD (umumnya 20–40 mL per 100 g biomassa).
4. **Iradiasi gelombang mikro**: Daya 600–1000 W, waktu 20–45 menit, dengan agitasi magnetik 200 rpm.
5. **Kondensasi uap**: Minyak atsiri dan uap air dikondensasi pada pendingin (*Clevenger-type trap*); fraksi air kaya fenolik dipisahkan dari deterpenated biomass melalui filtrasi vakum.
6. **Purifikasi cannabinoid**: Biomassa deterpenat diekstraksi lanjut dengan etanol absolut pada 60°C selama 60 menit (metode Soxhlet termodifikasi).
7. **Analisis**: GC-MS untuk profil cannabinoid, HPLC-DAD untuk fenolik, dan gravimetri untuk minyak atsiri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Kasus A: Optimasi Tiga-Fraksi MAE pada Cannabis sativa

Misalkan sebuah operator pabrik nutraceutical di Indonesia akan mengolah 10 kg bunga hemp kering per batch. Berdasarkan Mazzara et al. (2022), titik optimum CCD yang dilaporkan berada pada koordinat:

- Daya iradiasi $P = 800$ W
- Waktu ekstraksi $t = 30$ menit
- Volume air $V = 30$ mL per 100 g biomassa

**Input parameter industri:**

| Parameter | Nilai | Satuan |
|---|---|---|
| Massa biomassa ($m_b$) | 10.000 | g |
| Daya MAE ($P$) | 800 | W |
| Waktu ($t$) | 30 | min |
| Volume air ($V$) | 3.000 | mL |
| Yield minyak atsiri | 0,82 | % (massa) |
| Yield fenolik | 1,25 | % (ekivalen GAE) |
| Yield cannabinoid | 2,40 | % (CBD + CBG) |

**Perhitungan step-by-step:**

**Langkah 1**: Yield total fraksi aktif

$$Y_{oil} = 0{,}82\% \Rightarrow m_{oil} = 0{,}0082 \times 10.000 = 82{,}0 \text{ g}$$

$$Y_{phen} = 1{,}25\% \Rightarrow m_{phen} = 0{,}0125 \times 10.000 = 125{,}0 \text{ g}$$

$$Y_{cann} = 2{,}40\% \Rightarrow m_{cann} = 0{,}0240 \times 10.000 = 240{,}
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
