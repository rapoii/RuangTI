# 1468 — Rekayasa Proses Manufaktur dan Stabilitas Termal Vaksin mRNA: Integrasi Formulasi Lipid Nanopartikel, Optimasi Cold-Chain, dan Teknologi Freeze-Drying sebagai Strategi Industrialisasi Biologis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Comprehensive Review of mRNA Vaccines
**Jurnal & Sitasi Utama:** Vrinda Gote, Pradeep Kumar Bolla, Nagavendra Kommineni (2023). *International Journal of Molecular Sciences*. DOI: [https://doi.org/10.3390/ijms24032700](https://doi.org/10.3390/ijms24032700)
**Sitasi Pendukung:** María Guerrero Sánchez, Stéphanie Passot, Sonia Campoy (2022). *Applied Microbiology and Biotechnology*. DOI: [https://doi.org/10.1007/s00253-022-12201-9](https://doi.org/10.1007/s00253-022-12201-9)

---

## 1. Pendahuluan dan Konteks Industri

Vaksin mRNA telah bertransformasi dari sebuah konsep eksperimental menjadi tulang punggung respons pandemi global, sebagaimana didokumentasikan secara komprehensif oleh Gote, Bolla, dan Kommineni (2023) dalam *International Journal of Molecular Sciences*. Pergeseran paradigma ini terjadi karena tiga keunggulan struktural yang dimiliki platform mRNA dibandingkan vaksin konvensional: (1) **kapasitas rapid clinical development** yang memotong siklus pengembangan dari 10–15 tahun menjadi kurang dari 12 bulan, (2) **profil keamanan intrinsik** karena tidak adanya elemen virus hidup atau integrator genomik, dan (3) **fleksibilitas rekayasa antigen** yang memungkinkan substitusi sekuens target hanya dalam hitungan minggu. Dari perspektif Teknik Industri, transformasi ini bukan sekadar terobosan bioteknologi, melainkan sebuah *disruption* terhadap arsitektur manufaktur farmasi global yang telah mapan selama beberapa dekade.

Urgensi industrialisasi vaksin mRNA semakin nyata ketika kita menganalisis parameter permintaan dunia. Selama periode 2021–2022 saja, kebutuhan dosis vaksin COVID-19 berbasis mRNA melampaui 10 miliar dosis, menciptakan tekanan luar biasa pada kapasitas *upstream processing* (transkripsi in vitro) dan *downstream processing* (purifikasi kromatografi). Gote et al. (2023) menekankan bahwa kemajuan dalam **nanoteknologi delivery vehicles**, khususnya Lipid Nanopartikel (LNP), merupakan *enabling technology* yang memungkinkan mRNA mencapai sitoplasma sel tanpa degradasi oleh nuklease ekstraseluler. Tanpa LNP, molekul mRNA yang bersifat anionik dan berukuran besar (~10⁵–10⁶ Da) tidak akan mampu menembus membran sel fosfolipid.

Aspek ekonomis dari industrialisasi ini juga memerlukan perhatian serius. Biaya produksi per dosis vaksin mRNA pada tahap awal pandemi berkisar USD 2–5 untuk bahan baku, namun total biaya *cost of goods sold* (COGS) setelah memasukkan overhead fasilitas, quality control, dan *cold-chain logistics* mencapai USD 15–30 per dosis. Angka ini menunjukkan bahwa efisiensi operasional lini produksi—bukan sekadar efisiensi reaksi biokimia—menjadi variabel dominan dalam penentuan harga dan aksesibilitas global. Lebih lanjut, distribusi pada suhu ultra-rendah (−20°C hingga −80°C) memperkenalkan *constraint* logistik yang belum pernah dihadapi industri farmasi sebelumnya pada skala ini.

Perspektif masa depan yang diidentifikasi Gote et al. (2023)—termasuk **freeze-drying**, sistem *delivery* yang ditargetkan pada sel dendritik, dan optimasi LNP—menjadi agenda riset industri yang relevan. Teknologi freeze-drying (liofilisasi) khususnya menjadi titik konvergensi antara vaksin mRNA dan produk biologis lain seperti probiotik, di mana penelitian Guerrero Sánchez, Passot, dan Campoy (2022) menunjukkan bahwa pemilihan agen protektif (trehalosa, sukrosa, atau skim milk) menentukan viabilitas produk pasca-rehidrasi. Prinsip stabilisasi melalui glass transition (*Tg'*) yang dikembangkan untuk bakteri asam laktat dalam paper pendukung tersebut dapat diadaptasi untuk memproteksi integritas struktural mRNA dan LNP selama penyimpanan jangka panjang.

---

## 2. Landasan Teori & Formulasi Matematis

Rekayasa proses manufaktur vaksin mRNA memerlukan beberapa model kuantitatif fundamental yang dapat digunakan untuk optimasi kapasitas, prediksi yield, dan perancangan *cold-chain*.

### 2.1 Stoikiometri Formulasi LNP

LNP tersusun atas empat komponen lipid dalam rasio molar tertentu: ionizable lipid (IL), fosfolipid penolong (helper lipid), kolesterol, dan PEG-lipid. Rasio nitrogen fosfat ($N/P$) adalah parameter kritis yang menentukan efisiensi enkapsulasi:

$$N/P = \frac{n_{\text{IL}}}{n_{\text{mRNA, fosfat}}} = \frac{m_{\text{IL}} / MW_{\text{IL}}}{m_{\text{mRNA}} \cdot \frac{n_{\text{basa}}}{MW_{\text{basa rata-rata}}}}$$

di mana $n_{\text{IL}}$ adalah mol ionizable lipid, $MW_{\text{IL}}$ adalah berat molekul IL (~710 Da untuk ALC-0315), $n_{\text{basa}}$ adalah jumlah basa per molekul mRNA, dan $MW_{\text{basa rata-rata}}$ adalah berat rata-rata nukleotida (~339 Da untuk RNA termodifikasi). Untuk formulasi standar Pfizer-BioNTech, rasio $N/P \approx 6:1$.

Efisiensi enkapsulasi (*Encapsulation Efficiency*, EE) didefinisikan sebagai:

$$EE\% = \frac{[\text{mRNA}]_{\text{terenkapsulasi}}}{[\text{mRNA}]_{\text{total}}} \times 100\%$$

Nilai EE pada proses produksi yang optimal berada pada rentang 90–98%.

### 2.2 Kinetika Degradasi mRNA dalam Cold-Chain

Degradasi mRNA selama penyimpanan mengikuti kinetika orde pertama dengan konstanta laju yang bergantung suhu melalui persamaan Arrhenius:

$$k(T) = A \cdot e^{-E_a / RT}$$

sehingga konsentrasi mRNA utuh pada waktu $t$ adalah:

$$C(t) = C_0 \cdot e^{-k(T) \cdot t}$$

dengan $C_0$ konsentrasi awal, $E_a$ energi aktivasi degradasi (~80–110 kJ/mol untuk hidrolisis fosfodiester), $R$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu absolut. Untuk proses ini, kita dapat mendefinisikan **shelf-life** sebagai waktu ketika $C(t)/C_0 = 0{,}90$ (batas integritas minimum):

$$t_{90} = \frac{-\ln(0{,}90)}{k(T)} = \frac{0{,}1054}{A \cdot e^{-E_a/RT}}$$

Pada suhu −80°C, $t_{90}$ untuk formulasi LNP mencapai ~12 bulan, sedangkan pada +4°C turun drastis menjadi ~30 hari, dan pada suhu ruang menjadi <8 jam.

### 3. Model Throughput dan Yield Proses

Untuk lini produksi dengan kapasitas target $P$ dosis per hari, yield total proses harus memenuhi:

$$Y_{\text{total}} = \prod_{i=1}^{n} Y_i = \frac{P \cdot D_{\text{dosis}}}{[\text{mRNA}]_{\text{input}} \cdot V_{\text{reaksi}}}$$

di mana $Y_i$ adalah yield setiap unit operasi (transkripsi in vitro, DNase treatment, purifikasi, formulasi LNP, fill-finish), $D_{\text{dosis}}$ adalah dosis per vial (umumnya 30–100 μg mRNA), dan $V_{\text{reaksi}}$ adalah volume batch.

### 4. Kinetika Freeze-Drying (Persamaan Primdrying)

Mengacu pada paper Guerrero Sánchez et al. (2022) dan pengembangan lebih lanjut untuk aplikasi mRNA, waktu *primary drying* pada liofilisasi dapat diestimasi menggunakan model difusi-sublimasi:

$$t_d = \frac{L^2 \cdot \rho_s \cdot (X_0 - X_e)}{8 \cdot \lambda_s \cdot (T_s - T_b) / \Delta H_s}$$

dengan $L$ ketebalan vial, $\rho_s$ densitas padatan, $X_0$ dan $X_e$ kadar air awal dan ekuilibrium, $\lambda_s$ konduktivitas termal produk, $T_s$ suhu rak, $T_b$ suhu vial dasar, dan $\Delta H_s$ entalpi sublimasi es (~2838 kJ/kg).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi vaksin mRNA mengikuti kerangka **Quality by Design (QbD)** yang ditetapkan oleh ICH Q8-Q12, dengan arsitektur proses sebagai berikut:

### 3.1 Diagram Alir Proses Manufaktur

```
PLASMID DNA (BANK MASTER)
        ↓
[Fermentasi E. coli] → 72 jam, 37°C, bioreaktor 50–500 L
        ↓
[Lisis Alkali] → NaOH/SDS, netralisasi K-asetat
        ↓
[Kromatografi Afinitas] → kolom PlasmidSelect, elusi gradien
        ↓
[Linearisasi] → restriksi endonuklease, validasi 100% linear
        ↓
[Transkripsi In Vitro (IVT)] → T7 RNA polimerase, 4 jam, 37°C
        ↓
[DNase I Treatment] → eliminasi template DNA
        ↓
[Purifikasi Kromatografi] → reverse-phase HPLC / monolith
        ↓
[Formulasi LNP] → microfluidic mixing, N/P = 6
        ↓
[Fill-Finish Steril] → vial 2–10 mL, isolator aseptik
        ↓
[Inspeksi Visual + QC] → partikel, integritas, potensi
        ↓
[Labeling & Packaging]
        ↓
[Distribusi Cold-Chain: −80°C atau −20°C]
```

### 3.2 Parameter Proses Kritis (CPP) dan Atribut Kualitas Kritis (CQA)

| Unit Operasi | CPP | CQA Target |
|--------------|-----|------------|
| IVT | Konsentrasi NTP, rasio Mg²⁺/NTP, suhu, waktu | % mRNA utuh ≥70% |
| Linearisasi | Konsentrasi enzim, waktu, suhu | Supercoiled residual <1% |
| Purifikasi | Gradien elusi, flow rate | Kontaminan dsRNA <0,1% |
| Formulasi LNP | N/P ratio, FRR (flow rate ratio), suhu | EE ≥90%, ukuran partikel 80–100 nm, PDI ≤0,15 |
| Fill-Finish | Laju pengisisan, suhu | Sterilitas, dosis akurasi ±5% |

### 3.3 Strategi Process Analytical Technology (PAT)

Implementasi PAT harus mencakup: (1) **spektroskopi Raman** untuk monitoring konsentrasi mRNA secara *in-line* pada kolom kromatografi, (2) **Dynamic Light Scattering (DLS)** untuk distribusi ukuran LNP, (3) **Ribogreen assay** untuk EE, dan (4) **Bioanalyzer/Fragment Analyzer** untuk integritas mRNA (kapiler elektroforesis). Data PAT harus diintegrasikan ke dalam sistem **Manufacturing Execution System (MES)** untuk traceability sesuai FDA 21 CFR Part 11.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain Lini Produksi

Misalkan sebuah fasilitas manufaktur ditugaskan memproduksi **50 juta dosis/bulan** vaksin mRNA dengan dosis tunggal 30 μg. Mari kita hitung kebutuhan input proses.

**Langkah 1: Kebutuhan mRNA total**

$$M_{\text{mRNA,total}} = 50 \times 10^6 \text{ dosis} \times 30 \times 10^{-6} \text{ g} = 1500 \text{ g/bulan}$$

Mengasumsikan yield kumulatif $Y_{\text{total}} = 0{,}$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
