# 1476 — Bioplastik untuk Ekonomi Sirkular: Rekayasa Proses, Rekayasa Metabolik, dan Manajemen Rantai Pasok Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Bioplastics for a circular economy
**Jurnal & Sitasi Utama:** Jan‐Georg Rosenboom, Róbert Langer, Giovanni Traverso (2022). *Nature Reviews Materials*. DOI: [https://doi.org/10.1038/s41578-021-00407-8](https://doi.org/10.1038/s41578-021-00407-8)
**Sitasi Pendukung:** Marilene Pavan, Kristina Reinmets, Shivari Garg (2022). *Metabolic Engineering*. DOI: [https://doi.org/10.1016/j.ymben.2022.01.015](https://doi.org/10.1016/j.ymben.2022.01.015)

---

## 1. Pendahuluan dan Konteks Industri

Krisis lingkungan ganda yang dihadapi industri manufaktur global abad ke-21 — eskalasi emisi gas rumah kaca (GRK) dan akumulasi limbah padat polimer persisten — menuntut paradigma transformatif dari model ekonomi linear (*take-make-dispose*) menuju **ekonomi sirkular** yang melestarikan nilai material melalui loop tertutup (*closed-loop*). Rosenboom, Langer, dan Traverso (2022) dalam *Nature Reviews Materials* ([DOI: 10.1038/s41578-021-00407-8](https://doi.org/10.1038/s41578-021-00407-8)) memposisikan **bioplastik** sebagai salah satu pilar rekayasa material yang paling prospektif untuk men-desentralisasi ketergantungan pada petrokimia. Penulis membedakan secara tegas dua kelas utama: (i) **bioplastik berbasis bio** (*bio-based*) yang berasal dari biomassa tervariasi (pati, selulosa, tebu, lignoselulosa, alga) namun belum tentu dapat terurai secara hayati, dan (ii) **bioplastik terbiodegradasi** (*biodegradable*) yang dapat terurai melalui aktivitas mikroba menjadi CO₂, air, dan biomassa, dengan tingkat degradasi yang sangat bergantung pada kondisi lingkungan (pengomposan industri vs. lingkungan laut). Urgensi operasionalnya bersifat multidimensional: pada 2019 kapasitas produksi bioplastik global mencapai ~2,11 juta ton (~0,6% dari total produksi plastik) dengan proyeksi peningkatan hampir empat kali lipat pada 2027 menurut European Bioplastics — sebuah *uptake* yang memerlukan optimalisasi sistemik bukan sekadar subtitusi material.

Pavan, Reinmets, dan Garg (2022) dalam *Metabolic Engineering* ([DOI: 10.1016/j.ymben.2022.01.015](https://doi.org/10.1016/j.ymben.2022.01.015)) menyuplai landasan bioteknologi kritis dengan mendemonstrasikan bahwa **rekayasa metabolik sistemik** dari biocatalyst autotrof (acetogen seperti *Clostridium autoethanogenum* dan hidrogenotrof aerobik seperti *Cupriavidus necator*) memungkinkan fiksasi **oksida karbon** (CO₂ dan CO) dari *waste streams* menjadi building block kimia bernilai tinggi, termasuk prekursor polihidroksialkanoat (PHA). Integrasi kedua literatur ini membentuk perspektif **Industrial Engineering** yang holistik: masalahnya bukan sekadar menemukan polimer "hijau", melainkan merekayasa *value chain* yang mengubah *feedstock* limbah karbon menjadi *monomer* melalui bioreaktor skala industri, lalu memasukkannya ke dalam loop manufaktur dengan *mass balance* nol-deformasi, dan akhirnya merancang infrastruktur *end-of-life* yang mengembalikan material ke biosfer secara aman. Konteks Indonesia — dengan populasi 270+ juta jiwa, volume sampah plastik nasional >6,5 juta ton/tahun (KLHK, 2021), dan potensi biomassa tropis yang melimpah — menjadikan modul ini bukan hanya relevan akademis tetapi strategis untuk kebijakan industri nasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Mass Balance pada Sistem Bioplastik Sirkular

Persamaan konservasi massa pada *closed-loop system* biorefinery untuk produksi bioplastik PHA mengikuti formulasi stoikiometri klasik:

$$\sum_{i=1}^{n} \dot{m}_{in,i} - \sum_{j=1}^{m} \dot{m}_{out,j} + \sum_{k=1}^{p} R_k = \frac{dM_{sys}}{dt}$$

di mana $\dot{m}_{in,i}$ adalah laju alir massa *feedstock* masuk (kg/jam), $\dot{m}_{out,j}$ adalah laju alir produk dan *byproduct* keluar, $R_k$ adalah laju reaksi biologis atau kimia dalam unit operasi, dan $M_{sys}$ adalah akumulasi massa dalam sistem. Pada kondisi *steady-state*, $\frac{dM_{sys}}{dt} = 0$, sehingga:

$$\sum_{i=1}^{n} \dot{m}_{in,i} - \sum_{j=1}^{m} \dot{m}_{out,j} + \sum_{k=1}^{p} R_k = 0$$

### 2.2 Kinetika Pertumbuhan Mikroba (Monod dengan Inhibisi Substrat)

Untuk fermentasi gas sintetik (syngas: CO + H₂ + CO₂) menjadi asetat/PHA, **persamaan Monod termodifikasi** dengan inhibisi substrat CO adalah:

$$\mu = \frac{\mu_{max} \cdot [S]}{K_S + [S] + \frac{[S]^2}{K_I}}$$

di mana $\mu$ adalah laju pertumbuhan spesifik (jam⁻¹), $\mu_{max}$ adalah laju pertumbuhan spesifik maksimum (~0,35 jam⁻¹ untuk *C. autoethanogenum* pada 37°C), $[S]$ adalah konsentrasi substrat (mM), $K_S$ adalah konstanta afinitas substrat (umumnya 0,1–1,0 mM), dan $K_I$ adalah konstanta inhibisi substrat (mM).

Produktivitas volumetrik PHA dalam bioreaktor CSTR didefinisikan sebagai:

$$r_{PHA} = \mu \cdot X \cdot Y_{P/X} - k_d \cdot X$$

dengan $X$ = konsentrasi biomassa (g/L), $Y_{P/X}$ = koefisien yield produk terhadap biomassa (g PHA/g sel), dan $k_d$ = laju kematian endogenous (jam⁻¹).

### 2.3 Neraca Karbon dan LCA — Carbon Footprint

Formula *cradle-to-gate* carbon footprint untuk produksi polimer:

$$CF_{polymer} = \sum_{a=1}^{A} \left( E_a \cdot EF_a \right) + \sum_{b=1}^{B} \left( M_b \cdot e_b \right) - C_{seq}$$

di mana $E_a$ adalah konsumsi energi dari sumber $a$ (MJ/kg polimer), $EF_a$ adalah faktor emisi sumber $a$ (kg CO₂e/MJ), $M_b$ adalah massa material input $b$, $e_b$ adalah faktor emisi material $b$, dan $C_{seq}$ adalah kreditt karbon tersekuestrasi dalam biomassa (kg CO₂e/kg). Rosenboom *et al.* (2022) melaporkan rentang CF untuk PLA ≈ 1,3–2,4 kg CO₂e/kg, PHA ≈ 1,8–5,5 kg CO₂e/kg, vs. PET petrokimia ≈ 2,5–3,5 kg CO₂e/kg — tergantung pada sumber energi proses.

### 2.4 Indeks Kedaulatan Sirkular (Circularity Index)

Mengikuti metodologi Ellen MacArthur Foundation yang dikutip Rosenboom *et al.*:

$$MCI = 1 - \frac{F_w + V}{M_i + M_r - M_e}$$

dengan $F_w$ = massa feedstock virgin, $V$ = massa material yang hilang (*wasted*, tidak didaur ulang), $M_i$ = input material total, $M_r$ = material recycled, $M_e$ = emisi/loss. MCI = 1 menunjukkan loop sempurna; MCI = 0 menunjukkan linearitas penuh.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses Biorefinery Terintegrasi

Diagram alir rekayasa sistem untuk produksi bioplastik berbasis gas limbah industri:

```
[Limbah Industri Baja/Semen]
        ↓ (Syngas Capture & Cleaning)
[CO + H₂ + CO₂] → (Compressor & Heat Exchanger)
        ↓
[Bioreaktor CSTR — C. autoethanogenum / acetogen]
        │──→ [Pemisahan Biomassa] → [Ekstraksi PHA]
        │                                      ↓
        │                              [PHA Recovery]
        │                                      ↓
        │                              [Pelletization]
        ↓                               ↓
[Purifikasi Asetat/Ethanol] → [Polimerisasi Lanjutan]
```

### 3.2 SOP Fermentasi Gas — Tahapan Kritis

1. **Inokulasi & Starter Culture**: Persiapan kultur *C. autoethanogenum* pada medium ATCC 1754 dengan transfer berulang dalam *serum bottle* steril (headspace 80% N₂, 20% CO₂) pada 37°C selama 48–72 jam hingga $OD_{600}$ ≈ 0,8–1,2.

2. **Scale-up ke Bioreaktor**: Inokulum 10% (v/v) ke bioreaktor CSTR stainless steel volume kerja 50–500 L, agitasi 150–250 rpm, *gas flow rate* 0,1–0,5 vvm (volume gas/volume media/menit), kontrol pH 6,0–6,8 dengan NaOH 2M otomatis, suhu 37 ± 0,5°C.

3. **Fermentasi Continuous**: Setelah fase batch berakhir (~24 jam, konsentrasi asetat > 5 g/L), lakukan transisi ke *chemostat* dengan *dilution rate* $D$ = 0,05–0,15 jam⁻¹, di mana *dilution rate* optimum harus memenuhi $D < \mu_{max} - k_d$ untuk menghindari *wash-out*.

4. **Recovery PHA**: Sentrifugasi biomassa (8000 × g, 15 menit), lyophilisasi atau *spray drying*, lalu digesti dengan NaOCl 5% dan chloroform extraction (rasio 1:20 biomassa:chloroform), presipitasi dengan methanol dingin, pengeringan vakum → hasil padatan PHA kristalin.

### 3.3 Manajemen Rantai Pasok Sirkular

Integrasi empat pilar:
- **Reverse logistics**: Pengumpulan *post-consumer* bioplastik melalui MRF (*Material Recovery Facility*) dan deposit-return scheme.
- **Industrial composting**: Sesuai ISO 17088 dan EN 13432 untuk verifikasi biodegradabilitas.
- **Mechanical/chemical recycling**: Pyrolysis untuk PHA menjadi monomer hidroksialkanoat kembali.
- **Anaerobic digestion**: Konversi PHA/PLA menjadi biogas (CH₄) sebagai penutup loop energi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Kasus A: Produksi PHA dari Syngas Limbah Industri Baja

**Parameter desain (berdasarkan Pavan *et al.* 2022):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Volume bioreaktor CSTR | 500 | L |
| $D$ (*dilution rate*) | 0,10 | jam⁻¹ |
| Konsentrasi asetat steady-state | 8,5 | g/L |
| Yield asetat dari CO ($Y_{A/CO}$) | 0,22 | g/g |
| Yield PHA dari asetat ($Y_{P/A}$) | 0,38 | g/g |
| Biomassa kering ($X$) | 2,4 | g/L |
| Kandungan PHA dalam sel | 65 | % wt |
| Konsumsi CO spesifik | 2,1 | g CO/g asetat |

**Perhitungan Produktivitas Asetat:**

$$P_A = D \cdot [A] = 0{,}10 \text{ jam}^{-1} \times 8{,}5 \text{ g/L} = 0{,}85 \text{ g/L·jam}$$

Produksi asetat harian dari bioreaktor 500 L:

$$\dot{m}_A = P_A \cdot V \cdot 24 = 0{,}85 \times 500 \times 24 = 10{,}200 \text{ g/hari} = 10{,}2 \text{ kg/hari}$$

Produksi PHA harian (asetat → PHA):

$$\dot{m}_{PHA} = \dot{m