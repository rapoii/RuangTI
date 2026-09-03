# 1417 — Teknologi Hemat Energi dan Dekarbonisasi Panas Proses pada Industri Pangan dengan Integrasi Sistem Penyimpanan Energi Kriogenik (LAES)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Review of Energy-Efficient Technologies and Decarbonating Solutions for Process Heat in the Food Industry
**Jurnal & Sitasi Utama:** François Faraldo, Paul Byrne (2024). *Energies*. DOI: [https://doi.org/10.3390/en17123051](https://doi.org/10.3390/en17123051)
**Sitasi Pendukung:** Ayah Marwan Rabi', Jovana Radulović, James M. Buick (2023). *Energies*. DOI: [https://doi.org/10.3390/en16176216](https://doi.org/10.3390/en16176216)

---

## 1. Pendahuluan dan Konteks Industri

Industri pangan merupakan salah satu sektor manufaktur dengan konsumsi energi final terbesar di dunia, mencakup sekitar 30% dari total konsumsi energi industri global. Faraldo dan Byrne (2024) dalam *Energies* menyoroti bahwa hampir seluruh proses produksi pangan—mulai dari pengeringan (*drying*), pelarutan (*dissolving*), sentrifugasi, ekstraksi, pencucian, hingga pendinginan—melibatkan konsumsi panas dalam volume signifikan. Studi ini menunjukkan bahwa pada fasilitas pengolahan susu dan minuman ringan yang dijadikan studi kasus oleh Faraldo dan Byrne, lebih dari 60% kebutuhan energi termal dipenuhi oleh pembakaran gas alam, menyumbang emisi gas rumah kaca (GRK) antara 35–55 kg CO₂e per ton produk yang diolah.

Urgensi dekarbonisasi muncul karena tiga tekanan simultan: (1) regulasi emisi seperti EU Emissions Trading System (EU ETS) yang menetapkan harga karbon €60–90/ton CO₂, (2) target *net-zero* perusahaan multinasional pangan pada 2040–2050, dan (3) volatilitas harga bahan bakar fosil yang menambah *risk exposure* operasional. Faraldo dan Byrne (2024) menekankan bahwa solusi tidak cukup bersifat tunggal; melainkan memerlukan integrasi empat pilar teknologi: refrigerasi rendah GRK, pembangkitan panas efisien, pemulihan panas buang (*waste heat recovery*/WHR), dan penyimpanan energi termal (*thermal energy storage*/TES).

Di sisi lain, teknologi *Liquid Air Energy Storage* (LAES) yang dikaji oleh Rabi', Radulović, dan Buick (2023) menawarkan peluang strategis sebagai sistem penyimpanan energi skala besar dengan densitas volumetrik tinggi (≈120 kWh/m³), melampaui *pumped hydro energy storage* (PHES) yang terbatas geografis. Relevansi LAES terhadap industri pangan terletak pada tiga aspek: (a) penyediaan listrik dingin untuk refrigerasi, (b) pemulihan energi dingin saat proses regasifikasi udara cair yang dapat dimanfaatkan untuk pendinginan produk pangan, dan (c) integrasi sebagai *buffer* energi untuk menstabilkan beban proses termal yang fluktuatif. Integrasi kedua literatur ini menjadi penting karena LAES dapat menjembatani interaksi antara pembangkitan panas, pemulihan energi, dan refrigerasi dalam satu ekosistem proses industri pangan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Levelized Cost of Heat (LCOH)

Faraldo dan Byrne (2024) menggunakan *Levelized Cost of Heat* (LCOH) sebagai metrik pembanding utama antar teknologi pembangkitan panas. Formulasi matematisnya adalah:

$$LCOH = \frac{\displaystyle\sum_{t=0}^{n} \frac{I_t + O_t + M_t + F_t}{(1+r)^t}}{\displaystyle\sum_{t=0}^{n} \frac{H_t}{(1+r)^t}}$$

di mana:
- $I_t$ = biaya investasi modal tahun ke-$t$ (€/kW),
- $O_t$ = biaya operasional tahun ke-$t$ (€/tahun),
- $M_t$ = biaya pemeliharaan tahun ke-$t$ (€/tahun),
- $F_t$ = biaya bahan bakar tahun ke-$t$ (€/tahun),
- $H_t$ = energi panas yang dibangkitkan tahun ke-$t$ (MWh),
- $r$ = tingkat diskonto (umumnya 6–8%),
- $n$ = umur proyek (15–25 tahun).

### 2.2 Coefficient of Performance (COP) untuk Pompa Panas Suhu Tinggi

Teknologi *high-temperature heat pump* (HTHP) yang dianalisis Faraldo dan Byrne (2024) dievaluasi melalui *Coefficient of Performance*:

$$COP_{HP} = \frac{\dot{Q}_H}{\dot{W}_{comp}} = \frac{\dot{Q}_H}{\dot{Q}_H - \dot{Q}_C}$$

dengan $\dot{Q}_H$ laju kalor yang dilepas ke sisi panas, $\dot{Q}_C$ laju kalor yang diserap dari sumber panas buang, dan $\dot{W}_{comp}$ kerja kompresor. Batas Carnot teoretisnya:

$$COP_{Carnot} = \frac{T_H}{T_H - T_C}$$

### 2.3 Efisiensi Siklus Termodinamika LAES

Rabi' et al. (2023) menjelaskan bahwa LAES bekerja melalui tiga tahap: (i) *charging* (likuifikasi udara), (ii) *storage* (penyimpanan kriogenik pada ≈ −196 °C), dan (iii) *discharging* (regasifikasi & ekspansi). Efisiensi *round-trip* didefinisikan:

$$\eta_{RT,LAES} = \frac{W_{out}}{W_{in}} = \frac{W_{turb}}{\dot{W}_{comp,liquef} + \dot{W}_{pump} + \dot{W}_{cold-store}}$$

Kerja likuifikasi mengikuti siklus Claude:

$$w_{liquef} = c_p (T_1 - T_2) - \left(\frac{T_2}{T_1}\right) \cdot c_p \cdot (T_1 - T_2) \cdot \eta_{is}$$

di mana $w_{liquef}$ kerja spesifik likuifikasi (kJ/kg), $c_p$ kapasitas panas pada tekanan konstan, dan $\eta_{is}$ efisiensi isentropik ekspander.

### 2.4 Neraca Energi Pengeringan Industri Pangan

Untuk aplikasi spesifik pengeringan yang dibahas Faraldo dan Byrne (2024), kebutuhan kalor laten penguapan air:

$$Q_{dry} = \dot{m}_{water} \cdot h_{fg} + \dot{m}_{prod} \cdot c_p \cdot \Delta T$$

dengan $\dot{m}_{water}$ laju massa air yang diuapkan, $h_{fg}$ entalpi penguapan spesifik (≈ 2.257 kJ/kg pada 100 °C), dan $\dot{m}_{prod}$ laju massa produk yang dipanaskan.

### 2.5 Integrasi Panas Buang dengan Refrigerasi

Faraldo dan Byrne (2024) mencatat potensi pemulihan panas buang (*waste heat recovery*) untuk menggerakkan *absorption heat transformer* (AHT) yang didefinisikan oleh *Coefficient of Performance* berikut:

$$COP_{AHT} = \frac{\dot{Q}_{useful}}{\dot{Q}_{waste} + \dot{W}_{aux}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Faraldo dan Byrne (2024) menyusun kerangka implementasi dekarbonisasi melalui *decision workflow* yang dapat diadopsi sebagai SOP industri:

**Langkah 1: Karakterisasi Proses dan *Energy Baseline***
Lakukan inventarisasi seluruh aliran energi (listrik, bahan bakar, uap, refrigeran) menggunakan metode *process flow diagram* (PFD) dan *Sankey diagram*. Tetapkan baseline energi spesifik (MJ/ton produk) sesuai standar ISO 50001.

**Langkah 2: Analisis Pinch untuk Integrasi Panas**
Terapkan *pinch analysis* dengan menentukan $\Delta T_{min}$ (umumnya 10–20 °C pada industri pangan). Bangun *composite curves* dan *grand composite curve* untuk identifikasi utilitas panas minimum.

**Langkah 3: Evaluasi Pilihan Teknologi Refrigerasi**
Faraldo dan Byrne (2024) merekomendasikan transisi dari refrigeran GWP-tinggi (HFC seperti R-404A dengan GWP = 3922) menuju fluida natural (NH₃, CO₂, propana, atau campuran hidrokarbon). Gunakan parameter TEWI (*Total Equivalent Warming Impact*):

$$TEWI = GWP_{ref} \times L_{ref} \times n + n \times E_{op} \times \alpha_{CO_2}$$

**Langkah 4: Analisis LCOH untuk Pembangkitan Panas**
Bandingkan empat skenario: (a) boiler gas alam, (b) pompa panas suhu tinggi, (c) *absorption heat transformer*, dan (d) biomassa/renovabel. Gunakan persamaan LCOH pada Bagian 2.1 dengan horizon 20 tahun dan *discount rate* 7%.

**Langkah 5: Pemulihan Panas Buang (WHR)**
Identifikasi sumber panas buang >150 °C untuk *Organic Rankine Cycle* (ORC), dan 60–150 °C untuk HTHP. Faraldo dan Byrne (2024) melaporkan pemulihan 2–8 MWh listrik per ton produk pada pabrik susu percontohan.

**Langkah 6: Integrasi Penyimpanan Energi (LAES)**
Berdasarkan Rabi' et al. (2023), integrasikan LAES sebagai *buffer* untuk menyimpan energi saat kelebihan produksi (off-peak) dan melepaskannya saat beban puncak. Manfaatkan *cold exergy* dari regasifikasi untuk melayani beban refrigerasi industri pangan secara simultan.

**Langkah 7: Pemantauan, Verifikasi, dan Optimasi Berkelanjutan**
Implementasikan *Energy Management Information