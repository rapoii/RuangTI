# 1401 — Efisiensi Energi dan Dekarbonisasi Panas Proses pada Industri Pangan: Integrasi Refrigerasi Alami, Heat Pump Suhu Tinggi, dan Heat Exchanger Network

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Review of Energy-Efficient Technologies and Decarbonating Solutions for Process Heat in the Food Industry
**Jurnal & Sitasi Utama:** François Faraldo, Paul Byrne (2024). *Energies*. DOI: [https://doi.org/10.3390/en17123051](https://doi.org/10.3390/en17123051)
**Sitasi Pendukung:** Stanislav Boldyryev, Олександр Іващук, Goran Krajačić (2025). *Energies*. DOI: [https://doi.org/10.3390/en18143685](https://doi.org/10.3390/en18143685)

---

## 1. Pendahuluan dan Konteks Industri

Industri pangan merupakan salah satu sektor manufaktur dengan intensitas energi termal tertinggi di dunia. Menurut Faraldo dan Byrne (2024) dalam *review* komprehensifnya yang dipublikasikan di jurnal *Energies* (DOI: [10.3390/en17123051](https://doi.org/10.3390/en17123051)), panas proses terlibat secara dominan pada hampir seluruh lini operasional—mulai dari pengeringan (*drying*), pelarutan (*dissolving*), sentrifugasi, ekstraksi, pencucian, hingga pendinginan (*cooling*). Lebih dari 60% konsumsi energi primer pada pabrik pangan tipikal berasal dari pembangkitan panas bersuhu antara 80 °C hingga 250 °C, menjadikan sektor ini kontributor emisi Gas Rumah Kaca (GRK) yang signifikan, khususnya CO₂, CH₄, dan refrigeran sintetis dengan *Global Warming Potential* (GWP) tinggi.

Tiga permasalahan teknis utama yang diidentifikasi oleh Faraldo dan Byrne (2024) adalah: (1) ketergantungan pada boiler gas alam untuk steam proses; (2) kebocoran refrigeran HFC seperti R-404A (GWP = 3922) dan R-507A (GWP = 3985) pada rantai dingin (*cold chain*); serta (3) inefisiensi pada proses *heat recovery* yang membuang panas buang (*waste heat*) bersuhu rendah. Urgensi transisi ini diperkuat oleh regulasi European Union F-Gas Regulation No. 517/2014 yang akan melarang refrigeran dengan GWP > 150 pada aplikasi komersial mulai tahun 2025.

Dari perspektif integrasi sistem, Boldyryev, Іващук, dan Krajačić (2025) dalam *review* lanjutannya (DOI: [10.3390/en18143685](https://doi.org/10.3390/en18143685)) menegaskan bahwa dekarbonisasi industri proses hanya dapat tercapai jika terjadi pergeseran paradigma dari utilitas fosil menuju utilitas elektrifikasi—meliputi *electric heater*, *steam boiler* elektrik, *high-temperature heat pump* (HTHP), *mechanical vapour recompression* (MVR), dan *organic Rankine cycle* (ORC). Namun elektrifikasi masif tersebut menghadirkan tantangan integrasi baru, terutama bagaimana merancang ulang *Heat Exchanger Network* (HEN) untuk mengakomodasi multi-utilitas, konfigurasi multi-pinch, dan pemanfaatan *low-grade heat* (T < 150 °C). Kombinasi dua literatur ini memberikan kerangka utuh: dari sisi pembangkitan panas hingga sisi integrasi jaringan perpindahan panas.

Secara ekonomi, keputusan investasi teknologi dekarbonisasi tidak lagi dapat diputuskan hanya berdasarkan *Net Present Value* (NPV), melainkan harus memperhitungkan *Levelized Cost of Heat* (LCOH) yang menangkap total biaya siklus hidup per unit energi termal yang dihasilkan. Faraldo dan Byrne (2024) menunjukkan bahwa HTHP dan *absorption heat transformer* memiliki LCOH kompetitif terhadap boiler konvensional pada rentang pembangkitan uap suhu rendah–menengah, terutama ketika harga listrik di bawah 80 EUR/MWh dan *Coefficient of Performance* (COP) > 3,0.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Levelized Cost of Heat (LCOH)

LCOH merupakan metrik ekonomi utama yang digunakan Faraldo dan Byrne (2024) untuk membandingkan teknologi pembangkitan panas secara *apple-to-apple*. Formulasi dasarnya adalah:

$$LCOH = \frac{\displaystyle\sum_{t=0}^{N} \frac{CAPEX_t + OPEX_t}{(1+r)^t}}{\displaystyle\sum_{t=0}^{N} \frac{H_t}{(1+r)^t}}$$

di mana $CAPEX_t$ adalah belanja modal pada tahun $t$, $OPEX_t$ adalah biaya operasional dan pemeliharaan, $H_t$ adalah keluaran energi termal bermanfaat (dalam MWh_th), $r$ adalah tingkat diskonto riil, dan $N$ adalah umur teknis proyek (umumnya 15–25 tahun). Untuk teknologi HTHP, $OPEX$ didominasi oleh konsumsi listrik $E_t$:

$$OPEX_t = E_t \cdot p_e + M_t$$

dengan $p_e$ adalah harga listrik rata-rata (EUR/MWh) dan $M_t$ adalah biaya pemeliharaan rutin. Energi listrik yang dibutuhkan связана dengan keluaran panas melalui COP:

$$E_t = \frac{H_t}{COP}$$

sehingga substitusi menghasilkan formula LCOH tertutup untuk HTHP:

$$LCOH_{HTHP} = \frac{CAPEX_{annuitized}}{H_{tahunan}} + \frac{p_e}{COP} + c_{m}$$

dengan $CAPEX_{annuitized} = CAPEX \cdot \frac{r(1+r)^N}{(1+r)^N - 1}$ adalah *capital recovery factor* (CRF), dan $c_m$ adalah biaya pemeliharaan spesifik (EUR/MWh_th).

### 2.2. Refrigeran Alami dan GWP

Pergantian refrigeran HFC ke refrigeran alami (NH₃, CO₂, propana, isobutana, etana) membutuhkan tinjauan properti termodinamika. Efek refrigerasi dinyatakan sebagai:

$$q_L = h_{1} - h_{4}$$

dengan $h_1$ adalah entalpi uap masuk kompresor dan $h_4$ adalah entalpi keluar evaporator. Koefisien performa refrigerator:

$$COP_{ref} = \frac{q_L}{w_{comp}} = \frac{h_1 - h_4}{h_2 - h_1}$$

Total Equivalent Warming Impact (TEWI) dari suatu sistem refrigerasi selama umur operasinya:

$$TEWI = GWP \cdot L \cdot n + n \cdot E_{annual} \cdot \alpha_{CO_2} \cdot T_{op}$$

di mana $L$ adalah laju kebocoran (kg/tahun), $n$ adalah jumlah tahun operasi, $\alpha_{CO_2}$ adalah faktor emisi listrik (kg CO₂-eq/kWh), dan $T_{op}$ adalah periode operasi.

### 2.3. Analisis Pinch dan Heat Exchanger Network (HEN)

Boldyryev dkk. (2025) menekankan bahwa pada sistem elektrifikasi multi-utilitas, desain HEN harus mengikuti metodologi Pinch Analysis dengan formulasi:

$$Q_{HR,max} = \sum_{i \in HOT} m_i C_{p,i} (T_{in,i} - T_{out,i})$$

$$\Delta T_{min} = \frac{(T_{hot,supply} - T_{cold,supply}) + (T_{hot,target} - T_{cold,target})}{2}$$

Utilitas minimum panas dan dingin:

$$Q_{H,min} = Q_{HR,max} - Q_{c,min}$$

$$Q_{c,min} = Q_{HR,max} - Q_{H,min}$$

Pada konfigurasi multi-pinch, suhu pinch didefinisikan ulang untuk setiap sub-jaringan (misalnya jaringan HTHP dengan suhu pinch $T_{p,HTHP}$ dan jaringan ORC dengan $T_{p,ORC}$), sehingga muncul cascade HEN:

$$HEN = HEN_{LP} \cup HEN_{MP} \cup HEN_{HP}$$

dengan sub-sistem suhu rendah (LP, T < 100 °C), suhu menengah (MP, 100–250 °C), dan suhu tinggi (HP, T > 250 °C).

### 2.4. Perbandingan LCOH Antar Teknologi

Mengikuti kerangka Faraldo dan Byrne (2024), Tabel 1 menyajikan struktur pembanding:

$$LCOH_i = c_{fuel,i}/\eta_i + c_{OM,i} + c_{carbon,i}$$

dengan $\eta_i$ adalah efisiensi termal teknologi ke-$i$, $c_{OM,i}$ adalah biaya O&M spesifik, dan $c_{carbon,i}$ adalah biaya karbon (ETS) yang memperhitungkan harga CO₂.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis Faraldo dan Byrne (2024) serta Boldyryev dkk. (2025), berikut adalah SOP tujuh-tahap untuk implementasi dekarbonisasi panas proses di pabrik pangan:

**Tahap 1 — Audit Energi Termal.**
Inventarisasi seluruh *stream* panas dan dingin menggunakan pengukuran flowmeter, termokopel, dan *data historian* DCS. Klasifikasikan berdasarkan rentang suhu (LP/MP/HP) dan integrasikan ke dalam *Composite Curve*.

**Tahap 2 — Analisis Pinch dengan ΔT_min Optimal.**
Iterasikan nilai $\Delta T_{min}$ antara 5–20 °C untuk menentukan energi utilitas minimum. Boldyryev dkk. (2025) merekomendasikan penggunaan *hybrid method* (kombinasi *mathematical programming* MINLP dengan *insights-based*) untuk pabrik besar karena mampu menangani multi-utilitas secara simultan.

**Tahap 3 — Identifikasi Sumber Low-Grade Heat.**
Kuantifikasi panas buang dari kondensor, flue gas, dan *blowdown* boiler. Identifikasi suhu (*T*), laju alir massa ($\dot{m}$), dan *heat duty* ($\dot{Q}$):

$$\dot{Q}_{waste} = \dot{m} \cdot C_p \cdot \Delta T$$

**Tahap 4 — Seleksi Teknologi Pembangkitan Panas.**
Bandingkan menggunakan LCOH pada horizon 20 tahun dengan tiga skenario harga energi (base, low-carbon, high-carbon). Masukkan biaya kapital HTHP, biaya retrofit boiler, dan biaya koneksi grid.

**Tahap 5 — Redesain HEN Multi-Utilitas.**
Integrasikan HTHP, MVR, dan ORC sebagai utilitas dalam HEN. Boldyryev dkk. (2025) menyarankan pendekatan *sequential* melalui sub-network optimization untuk menghindari *combinatorial explosion*.

**Tahap 6 — Substitusi Refrigeran.**
Untuk aplikasi cold storage dan *in-process cooling*, ganti refrigeran HFC dengan NH₃ (R-717), CO₂ (R-744), atau propana (R-290) sesuai standar ISO 5149 dan ASHRAE 15.

**Tahap 7 — Implementasi Thermal Energy Storage (TES).**
Pasang *stratified chilled water TES* atau *phase change material* (PCM) untuk dekoupling waktu produksi dan konsumsi panas, sehingga memungkinkan operasi HTHP pada jam tarif listrik rendah (*valley filling*).

Diagram alir logika keputusan:

```
[Audit Energi] → [Pinch Analysis] → [Identifikasi Waste Heat]
       ↓                                     ↓
[LCOH Comparison] ← [Database Teknologi] → [Seleksi HTHP/MVR/ORC]
       ↓                                     ↓
[Redesain HEN] ←————————
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
