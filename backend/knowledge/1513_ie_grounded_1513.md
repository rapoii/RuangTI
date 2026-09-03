# 1513 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25% dari konsumsi energi global dan sekitar 37% dari total emisi CO₂ terkait energi, di mana lebih dari separuh kebutuhan termalnya disuplai pada rentang suhu menengah-tinggi (100–400°C) untuk proses seperti pasteurisasi, sterilisasi, pengeringan, destilasi, dan reaksi kimia (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dalam peta jalan dekarbonisasi Eropa, *high-temperature heat pump* (HTHP) muncul sebagai teknologi strategis untuk menggantikan boiler gas alam, namun karakteristik operasionalnya yang fluktuatif — bergantung pada profil sumber panas dan siklus beban proses — menuntut solusi *buffering* termal yang mampu menyimpan energi secara densitas tinggi pada rentang suhu operasional HTHP. Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa *latent heat thermal energy storage* (LHTES) berbasis material perubahan fase (*phase change material*/PCM) merupakan pendekatan paling menarik karena mampu menyimpan energi 5–10 kali lebih besar per satuan volume dibanding *sensible heat storage* pada selang suhu ΔT yang sempit, sehingga sangat relevan untuk meng-*couple* dengan discharge HTHP bersuhu sekitar 222°C.

Konteks industri yang melatarbelakangi riset ini sangat konkret: pabrik makanan & minuman, industri tekstil basah, dan fasilitas kimia halus membutuhkan uap atau air panas pada suhu 180–250°C dengan pola konsumsi intermiten. Tanam-tanaman energi panas HTHP memiliki *coefficient of performance* (COP) yang menurun ketika beroperasi pada *lift* termal besar; integrasi LHTES memungkinkan unit beroperasi pada kapasitas desain penuh saat tarif listrik rendah dan melepas energi tersimpan saat permintaan puncak, meningkatkan rata-rata COP sistem dan menurunkan biaya operasional hingga 18–25% (Xu & Wang, 2024). Tantangan fundamentalnya, sebagaimana diidentifikasi Toloza et al. (2026), adalah konduktivitas termal PCM yang rendah (umumnya 0,2–0,6 W/m·K untuk garam dan eutektik organik), yang membatasi laju *charging/discharging* dan menuntut optimasi geometri *heat exchanger* (HEX). Konfigurasi *shell-and-tube* vertikal dipilih karena kekompakan, kekuatan struktural pada tekanan internal HTHP, dan kemampuan meningkatkan perpindahan panas melalui fin, turbulizer, atau *metal wool*. Dengan demikian, pemodelan numerik transien yang valid menjadi kebutuhan industri yang sangat nyata untuk melakukan *sizing*, kontrol, dan integrasi sebelum fabrikasi fisik yang mahal.

## 2. Landasan Teori & Formulasi Matematis

Model transien dua-dimensi aksial-radial pada unit LHTES *shell-and-tube* vertikal dikembangkan dalam bahasa Modelica oleh Toloza et al. (2026) dengan mengadopsi formulasi *enthalpy-based* untuk menangani perubahan fase PCM tanpa perlu melacak antarmuka padat-cair secara eksplisit. Persamaan konservasi energi dalam domain PCM (koordinat silinder $r, z$) dinyatakan sebagai:

$$\rho_{PCM}\, c_{p,eff}(H) \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{PCM}(T)\, r\, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{PCM}(T)\, \frac{\partial T}{\partial z}\right)$$

di mana kapasitas panas efektif $c_{p,eff}(H)$ mencakup entalpi perubahan fase melalui pendekatan *apparent heat capacity*:

$$c_{p,eff}(T) = c_{p,s} + \frac{L_f}{T_l - T_s} \cdot f(T)$$

dengan $L_f$ adalah entalpi laten fusi, $T_s$ dan $T_l$ adalah suhu *solidus* dan *liquidus* PCM eutektik (~220–224°C pada studi kasus Toloza et al., 2026), dan $f(T)$ adalah fungsi regularisasi Gaussian (atau "mushy zone") yang bernilai 1 di dalam selang fusi dan 0 di luarnya. Untuk fluida pemindah panas (HTF) yang mengalir di dalam tube, model 1-D *plug-flow* non-tunak diterapkan:

$$\rho_{HTF}\, c_{p,HTF} \left(\frac{\partial T_f}{\partial t} + u \frac{\partial T_f}{\partial z}\right) = h_{int}\, \frac{P_{int}}{A_{int}}(T_w - T_f)$$

dengan $u$ adalah kecepatan aksial HTF, $P_{int}$ dan $A_{int}$ adalah perimeter dan luas penampang tube, $T_w$ adalah suhu dinding tube, dan $h_{int}$ adalah koefisien konveksi internal yang dihitung dari korelasi Gnielinski untuk aliran turbulen:

$$Nu_D = \frac{(f/8)(Re_D - 1000)\, Pr}{1 + 12{,}7\sqrt{f/8}\,(Pr^{2/3} - 1)}$$

dengan $f = (0{,}790 \ln Re_D - 1{,}64)^{-2}$ untuk $3000 < Re_D < 5 \times 10^6$. Kopling antara PCM dan dinding tube dimodelkan melalui kondisi batas kontinum ketiga:

$$-k_{PCM} \frac{\partial T}{\partial r}\bigg|_{r=r_i} = h_{ext}(T_f^{wall} - T_{PCM}^{surface})$$

Parameter kunci desain dan operasi mengikuti nomenklatur Toloza et al. (2026):

| Simbol | Parameter | Satuan | Rentang Tipikal |
|---|---|---|---|
| $r_i, r_o$ | Jari-jari tube dalam/luar | m | 0,005–0,015 |
| $D_s$ | Diameter shell | m | 0,05–0,30 |
| $L$ | Panjang aktif unit | m | 1,0–3,0 |
| $N_t$ | Jumlah tube | — | 7–61 |
| $T_{in}$ | Suhu masuk HTF (HTHP discharge) | °C | 230–240 |
| $\dot{m}$ | Laju alir massa HTF | kg/s | 0,1–2,0 |

Untuk keperluan analisis dimensional dan penskalaan, Toloza et al. (2026) juga mendefinisikan bilangan Stefan dan Fourier sebagai berikut:

$$Ste = \frac{c_{p,s}\,(T_{in} - T_m)}{L_f}, \qquad Fo = \frac{\alpha_{PCM}\, t}{r_o^2}$$

yang masing-masing merepresentasikan rasio energi sensible terhadap laten dan skala waktu difusi terhadap dimensi karakteristik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model transien LHTES-HTHP mengikuti SOP yang distandarkan sebagai berikut:

**Tahap 1 — Penyiapan Properti Termofisika.** Data PCM eutektik (titik leleh, kapasitas panas padat & cair, konduktivitas termal, densitas, entalpi laten) dan HTF (umumnya termal oil atau air bertekanan) dimasukkan ke dalam *look-up table* pada rentang 180–260°C dengan langkah 1 K. Validasi dilakukan terhadap pustaka seperti TESI atau IEA SHC Task 58/ECES Annex 29.

**Tahap 2 — Konstruksi Geometri.** Geometri *shell-and-tube* dibangun dalam paket Modelica (misalnya menggunakan pustaka `Buildings.Fluid.HeatExchangers` atau implementasi *finite volume* sendiri). Diskretisasi radial 30–50 node, aksial 80–150 node dipilih setelah *grid-independence test* dengan target deviasi < 1%.

**Tahap 3 — Kalibrasi Korelasi Perpindahan Panas.** Koefisien $h_{int}$ dan $h_{ext}$ dihitung dinamis berdasarkan $Re_D$ dan $Pr$ lokal; untuk sisi luar (*shell-side*), korelasi *cross-flow* pada bundle tube digunakan sesuai standar TEMA.

**Tahap 4 — Simulasi Skenario *Charging* dan *Discharging*.** Skenario meliputi: (a) *charging* dari PCM padat pada $T_{PCM,0} = 200°C$ dengan HTF masuk $T_{in} = 240°C$ selama 4–8 jam; (b) *discharging* ke loop proses pada $T_{in} = 200°C$ selama 3–6 jam; (c) mode *standby* dengan rugi termal melalui isolasi shell.

**Tahap 5 — Verifikasi & Validasi.** Hasil numerik divalidasi terhadap data eksperimental unit *proof-of-concept* (bila tersedia) atau benchmark analitis Neumann untuk verifikasi pertama, dan melalui perbandingan dengan model CFD 3-D untuk verifikasi kedua.

**Tahap 6 — Integrasi dengan HTHP.** Output model (laju energi, profil suhu) di-*couple* dengan model HTHP di lingkungan simulasi bersama (misalnya Dymola–Modelica atau Simulink) untuk evaluasi *round-trip efficiency*.

Diagram alir logika perancangan mengikuti urutan: (i) kebutuhan proses → (ii) selang suhu & kapasitas → (iii) pemilihan PCM & HTF → (iv) *sizing* geometri → (v) pemodelan transien → (vi) verifikasi → (vii) kontrol & integrasi HTHP.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif berdasarkan parameter tipikal Toloza et al. (2026), pertimbangkan unit LHTES *shell-and-tube* dengan spesifikasi berikut:

- PCM eutektik garam-nitrat dengan $T_m = 222°C$, $L_f = 180$ kJ/kg, $\rho_{PCM} = 1850$ kg/m³, $c_{p,s} = c_{p,l} = 1500$ J/kg·K, $k_{PCM} = 0{,}45$ W/m·K (padat) dan $0{,}65$ W/m·K (cair)
- Tube: stainless steel 316L, $r_i = 7{,}5$ mm, $r_o = 9{,}5$ mm, $k_{wall} = 16$ W/m·K
- Shell: $D_s = 0{,}15$ m, panjang $L = 2{,}0$ m, 7 tube (susunan triangular pitch 1,25 $r_o$)
- HTF: termal oil dengan $c_{p,HTF} = 2300$ J/kg·K, $\dot{m} = 0{,}50$ kg/s, $T_{in} = 240°C$
- Kondisi awal PCM seluruhnya padat pada $T_0 = 200°C$

**Langkah 1 — Kapasitas Energi Unit.**

Volume PCM per tube: $V_{tube} = \pi (D_s/2)^2 L \cdot \phi_{PCM}$ dengan faktor isi $\phi_{PCM} \approx 0{,}65$ (Toloza et al., 2026). Massa total PCM:

$$m_{PCM} = \rho_{PCM} \cdot V_{PCM} \approx 1850 \cdot (\pi \cdot 0{,}075^2 \cdot 2{,}0 \cdot 7 \cdot 0{,}65) \approx 1850 \cdot 0{,}192 \approx 355 \text{ kg}$$

Energi total tersimpan (sensible + laten antara 200–240°C):

$$Q_{tot} = m_{PCM}\left[c_{p,s}(T_m - T_0) + L_f + c_{p,l}(T_{max} - T_m)\right] = 355 \cdot [1500\cdot 22 + 180000 + 1500\cdot 18]$$

$$Q_{tot} \approx 355 \cdot (33000 + 180000 + 27000) = 355 \cdot 240000 = 85{,}2 \text{ MJ} \approx 23{,}7 \text{ kWh}$$

**Langkah 2 — Analisis Bilangan Tak Berdimensi.**

Difusivitas termal PCM padat: $\alpha = k/(\rho c_p) = 0{,}45/(1850\cdot 1500) \approx 1{,}62 \times 10^{-7}$ m²/s.

$$Fo = \frac{\alpha t}{r_o^2} = \frac{1{,}62\times 10^{-7}\cdot 3600}{0{,}0095^2}