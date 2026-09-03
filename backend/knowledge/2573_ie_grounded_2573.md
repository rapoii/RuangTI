# 2573 — Modul Rekayasa Autoclave Scaling pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit: Karakterisasi, Pemodelan Termodinamika-Kinetika, dan Strategi Mitigasi Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global tengah mengalami transformasi struktural yang dipicu oleh transisi energi dan elektrifikasi kendaraan. Per International Nickel Study Group (INSG), lebih dari 70% cadangan nikel dunia berupa bijih laterit (oksida/silis), dan High-Pressure Acid Leaching (HPAL) menjadi teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih limonit/saprolit kadar rendah (<1,5% Ni). Namun demikian, HPAL memiliki kelemahan operasional yang krusial: pembentukan kerak (*scaling*) pada dinding dan internal *autoclave* yang menurunkan koefisien perpindahan panas, menurunkan yield, dan meningkatkan frekuensi *shutdown* untuk *de-scaling* mekanis/kimiawi. Dickson, Deleau, dan Espitalier (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) menyoroti bahwa *scaling* pada autoclave HPAL merupakan salah satu kontributor terbesar terhadap *total cost of ownership* fasilitas hidrometalurgi nikel, dengan estimasi kerugian produktivitas 8–15% akibat *turnaround* dan degrasi efisiensi termal.

Dari sisi rekayasa, masalah *scaling* diperumit oleh sifat feedstock laterit yang sangat heterogen—mengandung goethit (α-FeOOH), hematit (α-Fe₂O₃), magnesium silikat, gipsum, dan Al-hidroksida—yang pada kondisi operasi HPAL (T ≈ 245–270 °C, P ≈ 35–45 bar, konsentrasi H₂SO₄ ≈ 50–150 g/L) mengalami *co-precipitation* dan transformasi fasa menjadi *iron sulfate scale*, *basic ferric sulfate* (jarosit), *magnesium sulfate*, serta *alunite-type phases*. Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menambahkan bahwa residu HPAL—yang merupakan *by-product* padat kaya Fe/Al/Si—memiliki perilaku kristalisasi dan komposisi yang sangat tergantung pada agen desulfurisasi serta profil suhu-roasting-reduksi, sehingga loop umpan balik antara karakteristik slurry umpan dan pembentukan kerak menjadi determinan performa autoclave.

Urgensi industri bersifat tiga-dimensi: (i) **ekonomi**—penurunan laju pelindian efektif (*apparent Ni extraction*) hingga 5–10 poin persen akibat degrasi *heat flux*; (ii) **operasional**—pengurangan *Mean Time Between Failure* (MTBF) autoclave dari ~3.000 jam menjadi ~1.200 jam; dan (iii) **lingkungan**—pembuangan *scale* yang mengandung logam berat dan asam sulfat berlebih harus sesuai standar B3. Dengan demikian, kemampuan melakukan karakterisasi dan prediksi *scaling* bukan sekadar isu akademis, melainkan pilar strategis keberlanjutan fasilitas HPAL modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Supersaturasi dan Kelarutan Fasa Skala

Pembentukan kerak di autoclave HPAL dimodeli sebagai fenomena *supersaturation* lokal terhadap fasa padat tertentu. Untuk fasa *basic ferric sulfate* (BFS) dengan stoikiometri umum $\mathrm{Fe(OH)_x(SO_4)_{y(s)}}$, kondisi kesetimbangan didefinisikan melalui *solubility product*:

$$K_{sp} = a_{\mathrm{Fe}^{3+}}^{1} \cdot a_{\mathrm{OH}^{-}}^{x} \cdot a_{\mathrm{SO_4^{2-}}}^{y}$$

dengan $a_i$ adalah aktivitas ion. Derajat supersaturasi (*supersaturation ratio*) terhadap fasa kritis didefinisikan sebagai:

$$S = \left(\frac{\mathrm{IAP}}{K_{sp}}\right)^{1/\nu}$$

di mana IAP = *Ion Activity Product* dan $\nu$ = jumlah stoikiometri total ion. Skala terbentuk secara spontan ketika $S > 1$, dan laju nukleasi dominan saat $S \gg 1$.

### 2.2 Model Nukleasi dan Pertumbuhan Kristal

Laju nukleasi homogen klasik (*Classical Nucleation Theory*) mengikuti:

$$J = J_0 \exp\left(-\frac{\Delta G^*}{k_B T}\right)$$

dengan *critical Gibbs free energy barrier*:

$$\Delta G^* = \frac{16 \pi \gamma^3 v_m^2}{3 (k_B T \ln S)^2}$$

di mana $\gamma$ adalah tegangan permukaan, $v_m$ volume molar fase padat, $k_B$ konstanta Boltzmann. Pertumbuhan kristal mengikuti *power-law* terhadap *supersaturation*:

$$G = k_g (S - 1)^{n_g}$$

dengan $k_g$ konstanta kinetik dan $n_g$ eksponen orde pertumbuhan (umumnya $1 \leq n_g \leq 2$ untuk sistem BFS/jarosite).

### 2.3 Model Perpindahan Panas dan Resistansi Kerak

Efek *scaling* terhadap perpindahan panas dimodeli sebagai tambahan resistansi termal pada dinding autoclave:

$$\frac{1}{U_{overall}} = \frac{1}{h_i} + \frac{\delta_s}{\lambda_s} + \frac{\delta_w}{\lambda_w} + \frac{1}{h_o}$$

dengan $U_{overall}$ koefisien perpindahan panas menyeluruh, $h_i$ dan $h_o$ koefisien konveksi fluida di dalam dan luar, $\delta_s$ dan $\delta_w$ ketebalan kerak dan dinding, serta $\lambda_s$ dan $\lambda_w$ konduktivitas termal. Untuk $\lambda_s \approx 0{,}3$–$0{,}8~\mathrm{W/(m\cdot K)}$ (kerak oksida-sulfat), setiap milimeter kerak mengurangi fluks panas hingga 5–10%.

### 2.4 Model Kinetika Reaksi Dissolusi dan Presipitasi Simultan

Pada autoclave HPAL terjadi reaksi simultan:

$$\mathrm{NiO_{(s)} + H_2SO_4 \rightarrow Ni^{2+} + SO_4^{2-} + H_2O}$$

$$\mathrm{FeOOH_{(s)} + H_2SO_4 \rightarrow Fe^{2+} + SO_4^{2-} + 2H_2O}$$

$$\mathrm{4Fe^{2+} + O_2 + 4H^+ \rightarrow 4Fe^{3+} + 2H_2O}$$

Laju pelindian Ni mengikuti *shrinking core model* dengan difusi melalui lapisan *ash*:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_p \cdot C_{H^+} \cdot t}{r_p^2 \cdot \rho_s}$$

di mana $\alpha$ fraksi Ni terlarut, $k_p$ konstanta laju, $C_{H^+}$ konsentrasi H⁺ efektif, $r_p$ jari-jari partikel, dan $\rho_s$ densitas padatan.

### 2.5 Persamaan Karakterisasi Aliran dalam Autoclave

Reynolds Number slurry untuk suspensi 25–35% solid:

$$Re_{slurry} = \frac{\rho_{sl} \cdot v \cdot D_e}{\mu_{sl}}$$

Nusselt Number untuk dinding autoclave:

$$Nu = 0{,}023 \cdot Re^{0{,}8} \cdot Pr^{0{,}4}$$

Korosifitas termal dan koefisien *fouling* akan sangat tergantung pada rezim aliran turbulen.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Karakterisasi Sampel Kerak (Berdasarkan Dickson et al., 2026)

1. **Sampling Representatif:** Pengambilan kerak pada zona injeksi slurry, zona transisi suhu, dan zona flash—sesuai *composite sampling protocol* ASTM E300.
2. **Preparasi Awal:** Pengeringan vakum pada 40 °C selama 24 jam untuk mencegah dekomposisi struktural senyawa hidrat; penggilingan mortar agate hingga ukuran <75 μm.
3. **Analisis Fasa (XRD):** Difraksi sinar-X dengan $\mathrm{Cu-K\alpha}$ ($\lambda = 1{,}5406~\text{Å}$), scan 5–80° 2θ, langkah 0,02°/s. Identifikasi fasa dengan basis data ICDD PDF-4+.
4. **Mikroskopi dan Komposisi (SEM-EDS):** Pemetaan morfologi butiran dan distribusi elemen Fe, S, O, Ni, Al, Mg.
5. **Analisis Termal (TGA-DSC):** Profil dekomposisi termal untuk identifikasi fasa hidrat (gipsum, jarosit hidrat).
6. **Uji Kelarutan Selektif:** Sequential leaching untuk membedakan fasa amorf vs kristalin.

### 3.2 SOP Operasional Mitigasi Scaling

- **Pre-treatment Feed:** Pencucian dan klasifikasi bijih untuk mengurangi gangue Si/Al; *beneficiation* dengan *scrubbing* dan *attrition* sesuai Andrameda et al. (2024).
- **Kontrol Konsentrasi Asam:** Injeksi H₂SO₄ bertahap (multi-stage injection) untuk menjaga $C_{H^+}$ optimum.
- **Pengaturan Profil Suhu:** Heating ramp 2–3 °C/min untuk menghindari *thermal shock* lokal.
- **Manajemen Oksidator:** Injeksi O₂ terkontrol untuk menjaga rasio $\mathrm{Fe^{3+}/Fe^{2+}}$ pada 1,0–1,5 agar stabil.
- **Additive Engineering:** Doping seed crystals atau *anti-scalant* (polimaleat, poliakrilat) untuk menghambat nukleasi.
- **Turnaround Terjadwal:** Mekanis *hydro-jet cleaning* setiap 90–120 hari operasi.

### 3.3 Diagram Alir Pengambilan Keputusan Mitigasi

```
[Feed Laterit] → [Analisis Komposisi XRF] → [Prediksi Komposisi Kerak]
       ↓                                            ↓
[Beneficiation] ← [Indeks Scaling Risk = f(S, T, [H+])]
       ↓                                            ↓
[HPAL Autoclave] → [Real-time Monitoring] → [Scale Risk High?]
       ↓                                       YES         NO
[Normal Operation]                     [Adjust Acid & T]   [Lanjut]
       ↓
[Shutdown Periodik] → [Mechanical Cleaning] → [Restart]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Studi Kasus

Sebuah fasilitas HPAL hipotetik kapasitas 50.000 t Ni/yr dengan data:

| Parameter | Nilai |
|-----------|-------|
| Throughput slurry | 800 m³/jam |
| Solid loading | 28% w/w |
| Konsentrasi H₂SO₄ umpan | 120 g/L |
| Suhu operasi | 255 °C |
| Tekanan operasi | 42 bar |
| Diameter autoclave | 4,5 m |
| Panjang autoclave | 32 m |
| Konduktivitas dinding baja | 45 W/(m·K) |
| Ketebalan dinding | 60 mm |

### 4.2 Perhitungan Resistansi Termal dan Efek Kerak

**Langkah 1:** Koefisien konveksi internal $h_i$ slurry dengan $Re_{slurry} \approx 4{,}8 \times 10^6$ dan $Pr \approx 2{,}5$:

$$Nu = 0{,}023 \cdot (4{,}8 \times 10^6)^{0{,}8} \cdot (2{,}5)^{0{,}4} \approx 4{,}9 \times 10^4$$

$$h_i =