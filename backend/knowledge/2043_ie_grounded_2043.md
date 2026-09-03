# 2043 — Co-packaged Optics (CPO): Status, Tantangan, dan Solusi untuk Rekayasa Sistem Interkoneksi Data Center Generasi Mendatang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Co-packaged Optics (CPO): Status, Tantangan, dan Solusi
**Jurnal & Sitasi Utama:** Min Tan, Jiang Xu, Siyang Liu (2023). *Co-packaged optics (CPO): status, challenges, and solutions*. *Frontiers of Optoelectronics*. DOI: [https://doi.org/10.1007/s12200-022-00055-y](https://doi.org/10.1007/s12200-022-00055-y)
**Sitasi Pendukung:** Min Tan, Jiang Xu, Siyang Liu (2023). *Frontiers of Optoelectronics*. DOI: [https://doi.org/10.1007/s12200-022-00055-y](https://doi.org/10.1007/s12200-022-00055-y)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial aplikasi 5G, Internet of Things (IoT), kecerdasan buatan (AI), dan high-performance computing (HPC) telah mendorong volume lalu lintas (*traffic*) data center global tumbuh pada *compound annual growth rate* (CAGR) mendekati 30% per tahun. Tan et al. (2023) menyoroti bahwa hampir tiga perempat (~75%) dari total lalu lintas data center bersifat intra-data center (arus *east-west* antar server dan rak), sementara hanya sebagian kecil yang bersifat *north-south* menuju internet publik. Pola distribusi ini menunjukkan bahwa kemampuan *interconnecting bandwidth density* dan efisiensi energi pada level rak dan paket (*package*) menjadi *bottleneck* strategis yang menentukan keberlanjutan operasional (*sustainability*) infrastruktur cloud global.

Secara konvensional, *pluggable optics* (modul transponder QSFP-DD, OSFP, dan turunannya) dipasang pada *faceplate* sakelar (*switch*) melalui *electrical SerDes* dengan panjang lintasan listrik (*trace*) yang relatif panjang (10–25 cm). Topologi ini menghadapi tiga keterbatasan fundamental, yaitu: (i) *channel loss* tinggi pada frekuensi >50 GHz NRZ/PAM4; (ii) konsumsi energi *SerDes* yang melonjak mendekati 10 pJ/bit per lintasan; serta (iii) *bandwidth density faceplate* yang stagnan di kisaran 0,5–1 Tbps/mm. Akibatnya, kesenjangan antara kebutuhan aplikasi dan kemampuan optik *pluggable* terus melebar secara tidak berkelanjutan (*unsustainable gap*).

Tan et al. (2023) memperkenalkan **Co-Packaged Optics (CPO)** sebagai pendekatan disruptif yang melakukan integrasi monolitik/hibrid antara *photonic engine* dan ASIC sakelar dalam satu substrat paket, sehingga panjang lintasan listrik dipersingkat drastis menjadi <50 mm. Strategi ini secara simultan meningkatkan *bandwidth density*, menurunkan energi per bit, dan memungkinkan *co-optimization* elektris-fotonik. Dari perspektif Teknik Industri, CPO bukan sekadar inovasi komponen, melainkan perubahan paradigma rekayasa sistem yang menyentuh *process design*, *supply chain*, *thermal management*, dan *lifecycle economics* industri semikonduktor fotonik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Pertumbuhan Trafik Data Center

Volume trafik data center dimodelkan secara eksponensial mengikuti CAGR:

$$T(t) = T_0 \cdot (1 + r)^t$$

di mana $T_0$ adalah trafik baseline (Tbps), $r$ adalah tingkat pertumbuhan (fraksi desimal), dan $t$ adalah horizon waktu (tahun). Dengan $T_0 = 100$ Tbps dan $r = 0{,}30$, maka pada $t = 5$ tahun diperoleh:

$$T(5) = 100 \cdot (1{,}30)^5 \approx 371{,}3 \text{ Tbps}$$

### 2.2 Model Energi per Bit Sistem Interkoneksi

Total konsumsi energi per bit pada arsitektur sakelar terdiri atas:

$$E_{b}^{total} = E_{b}^{ASIC} + E_{b}^{SerDes} + E_{b}^{Optical} + E_{b}^{PCB}$$

Untuk *pluggable optics* konvensional:

$$E_{b}^{pluggable} = E_{ASIC} + E_{SerDes,long} + E_{mod} + E_{DSP}$$

dengan $E_{SerDes,long}$ dominan karena lintasan listrik panjang. Pada CPO:

$$E_{b}^{CPO} = E_{ASIC} + E_{SerDes,short} + E_{modulator,on-package}$$

Formulasi *channel loss* lintasan listrik diberikan oleh:

$$\alpha_{ch}(f) = \alpha_0 + \alpha_{skin}\sqrt{f} + \alpha_{dielectric}\,f$$

di mana $f$ adalah frekuensi operasi (GHz). Pemendekan lintasan dari $L_1 = 200$ mm menjadi $L_2 = 30$ mm mengurangi rugi-rugi sekitar:

$$\Delta\alpha \approx \alpha_{ch}(f) \cdot \frac{L_1 - L_2}{L_1}$$

### 2.3 Bandwidth Density dan Throughput

*Bandwidth density faceplate* didefinisikan sebagai:

$$\rho_B = \frac{B_{switch}}{w_{faceplate} \cdot h_{faceplate}} \quad [\text{Tbps/cm}^2]$$

*Aggregate throughput* paket ditentukan oleh:

$$B_{agg} = N_{port} \cdot R_{port} \quad [\text{Tbps}]$$

dengan $N_{port}$ jumlah port dan $R_{port}$ laju per port (Gbps).

### 2.4 Thermal Resistance Network Paket CPO

Pendinginan paket CPO dimodelkan dengan jejaring resistansi termal:

$$T_j - T_a = q_{th} \cdot R_{th}^{jc} + q_{th} \cdot R_{th}^{interface} + q_{th} \cdot R_{th}^{heatsink}$$

dengan $R_{th}$ berturut-turut adalah resistansi termal junction-to-case, antarmuka, dan heatsink; serta $q_{th}$ adalah disipasi panas (W).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CPO mengikuti SOP rekayasa paket optoelektronik berikut:

**Tahap 1 — Karakterisasi需求 Sistem:** Tentukan *target bandwidth density* ($\rho_B$), *target energy per bit* ($E_b$), dan *target BER* ($<10^{-12}$ dengan FEC). Untuk sakelar 102,4 Tbps generasi berikutnya, target $\rho_B \geq 5$ Tbps/cm$^2$.

**Tahap 2 — Arsitektur Paket:** Pilih antara *monolithic integration* (silicon photonics + CMOS pada wafer yang sama) atau *hybrid integration* (photonic chiplet + ASIC pada substrat organik/Si interposer). Standar industri merujuk pada arsitektur *optical engine* OBO (On-Board Optics) →NPO (Near-Package Optics) →CPO seperti dipetakan Tan et al. (2023).

**Tahap 3 — Desain Lintasan Listrik:** Minimalkan panjang *electrical trace* dari ASIC ke modulator ($\leq 30$ mm), gunakan *differential stripline* dengan impedansi terkontrol $Z_0 = 85\,\Omega$.

**Tahap 4 — Integrasi Fotonik:** Pilih modulator Mach-Zehnder (MZM) atau microring (MRM) dengan *driver* ko-integrasi. Pasang *fiber array unit* (FAU) melalui *butt-coupling* atau *grating coupler*.

**Tahap 5 — Validasi Termal:** Lakukan simulasi *steady-state* dan *transient thermal* menggunakan jejaring $R_{th}$ untuk memastikan $T_j \leq 85°$ C.

**Tahap 6 — Pengujian Link Budget:** Ukur *optical power budget*:

$$P_{RX} = P_{TX} - L_{fiber} - L_{coupling} - L_{connector} \geq P_{sens}$$

**Tahap 7 — Yield & Reliability:** Lakukan HTOL (High Temperature Operating Life) pada $T = 125°$C selama 1000 jam dengan *failure criterion* $<10$ FIT.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah hyperscaler merancang sakelar *next-generation* 102,4 Tbps dengan target CPO menggantikan 32 modul QSFP-DD 3,2 Tbps.

**Langkah 1 — Hitung kebutuhan port dan bandwidth density baseline:**

$$N_{port}^{planar} = \frac{102{,}4 \text{ Tbps}}{3{,}2 \text{ Tbps}} = 32 \text{ port QSFP-DD}$$

Lebar faceplate 1U konvensional = $44{,}45$ mm (standar OSFP) sehingga:

$$\rho_B^{pluggable} = \frac{102{,}4 \text{ Tbps}}{32 \cdot 1{,}45 \text{ cm}} \approx 2{,}21 \text{ Tbps/cm}$$

**Langkah 2 — Estimasi konsumsi energi baseline:**

Dengan asumsi $E_{SerDes}^{long} = 8$ pJ/bit, $E_{optical}^{pluggable} = 3$ pJ/bit, $E_{ASIC} = 2$ pJ/bit:

$$E_b^{pluggable} = 2 + 8 + 3 = 13 \text{ pJ/bit}$$

Total daya = $13 \times 10^{-12} \times 102{,}4 \times 10^{12} = 1331$ W per sakelar (belum termasuk pendingin).

**Langkah 3 — Proyeksi CPO:**

Pemendekan *trace* dari 150 mm ke 25 mm menurunkan rugi *SerDes* dari 8 pJ/bit menjadi ~3 pJ/bit; efisiensi modulator on-package ~2 pJ/bit:

$$E_b^{CPO} = 2 + 3 + 2 = 7 \text{ pJ/bit}$$

Penghematan relatif:

$$\eta = \frac{E_b^{pluggable} - E_b^{CPO}}{E_b^{pluggable}} = \frac{13-7}{13} \approx 46{,}15\%$$

Total daya CPO = $7 \times 10^{-12} \times 102{,}4 \times 10^{12} = 716{,}8$ W → penghematan absolut 614 W per sakelar.

**Langkah 4 — Bandwidth density CPO:**

CPO menggunakan *optical engine* dengan pitch *fiber* $250\,\mu\text{m}$ dan jumlah fiber 64 (32 TX + 32 RX). Lebar efektif *optical engine* $\approx 16$ mm:

$$\rho_B^{CPO} = \frac{102{,}4 \text{ Tbps}}{1{,}6 \text{ cm}} = 64 \text{ Tbps/cm}$$

Peningkatan densitas hampir $29\times$ dibanding *pluggable*.

**Langkah 5 — Analisis termal:**

Disipasi panas ASIC+CPO $q_{th} = 717$ W; $R_{th}^{jc} = 0{,}15°$C/W; $R_{th}^{interface} = 0{,}05°$C/W; $R_{th}^{heatsink} = 0{,}10°$C/W. Temperatur ambient $T_a = 35°$C:

$$T_j = 35 + 717 \cdot (0{,}15 + 0{,}05 + 0{,}10) = 35 + 215{,}1 = 250{,}1°\text{C}$$

Karena melebihi batas, diperlukan cold plate dengan $R_{th}^{heatsink} = 0{,}04°$C/W:

$$T_j = 35 + 717 \cdot 0{,}24 = 35 + 172{,}1 = 207{,}1°\text{C}$$

Masih terlalu tinggi, sehingga $R_{th}^{total}$ harus $\leq 0{,}07°$C/W → wajib menggunakan pendingin *liquid cooling* atau *microchannel heat sink*.

**Interpretasi Manajerial:** CPO memangkas hampir setengah konsumsi energi, namun menggeser *bottleneck* desain dari elektris ke termal. Investasi pada *liquid cooling infrastructure* menjadi *enabler* strategis deployment CPO skala hyperscaler.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologi Paper

Tan et al. (2023) menyajikan *landscape* CPO secara komprehensif, namun analisis kuantitatif terhadap *manufacturing yield* dan *total cost of ownership* (TCO) belum dijabarkan secara eksplisit. Beberapa asumsi yang memerlukan validasi empiris lebih lanjut:

1. **Yield paket hibrid:** Integrasi *photonic chiplet* dengan ASIC logika pada substrat bersama menurunkan *compound yield*. Jika $Y_{ASIC} = 0{,}90$ dan $Y_{photonics} = 0{,}85$, maka $Y