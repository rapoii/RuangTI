# 774 — Carbon Border Adjustment Mechanism (CBAM) Embedded Emissions Accounting & Verification

**Domain:** Sustainable Supply Chain, Environmental Industrial Economics & Trade Policy
**Topik Spesialis:** EU CBAM Regulation 2023/956, Specific Embedded Emissions (SEE), Default Benchmark Values & Carbon Cost Verification
**Standar & Referensi Utama:** Peraturan Uni Eropa (EU) 2023/956 (CBAM Regulation), Implementing Regulation (EU) 2023/1773, ISO 14064-1/3 (GHG Accounting & Verification), GHG Protocol Corporate Value Chain Standard & IPCC Guidelines for National GHG Inventories

---

## 1. Pendahuluan dan Konteks Industri
Carbon Border Adjustment Mechanism (CBAM) adalah instrumen kebijakan perdagangan iklim Uni Eropa yang dirancang untuk mencegah fenomena *carbon leakage* (relokasi produksi berintensitas karbon tinggi ke yurisdiksi dengan kebijakan iklim longgar) serta menciptakan kesetaraan perlakuan harga karbon antara produsen domestik Uni Eropa di bawah EU ETS (*Emissions Trading System*) dan eksportir internasional. Mulai diberlakukan pada fase transisi sejak Oktober 2023 dan berlaku penuh secara finansial mulai 2026, CBAM mencakup enam sektor industri padat energi utama: besi & baja (*iron & steel*), aluminium, semen, pupuk (*fertilizers*), listrik, dan hidrogen.

Bagi industri manufaktur global dan regional (termasuk smelter, petrokimia, dan pabrik baja di Asia Tenggara), kepatuhan CBAM bukan lagi sekadar pelaporan sukarela ESG (*Environmental, Social, and Governance*), melainkan prasyarat akses pasar (market access hurdle). Tanpa metodologi kalkulasi emisi tertanam (*embedded emissions*) yang valid dan diverifikasi oleh verifikator independen terakreditasi, importir Uni Eropa akan dikenakan sanksi finansial atau dipaksa menggunakan nilai *default* (default values) yang ditetapkan pada persentil ke-80 emisi tertinggi dari instalasi terburuk Uni Eropa, yang berujung pada beban tarif penyesuaian karbon yang sangat mahal.

## 2. Landasan Teori & Formulasi Matematis

### A. Klasifikasi Emisi Tertanam (Direct vs Indirect Embedded Emissions)
Sesuai Pasal 3 dan Lampiran IV Regulasi (EU) 2023/956, emisi tertanam spesifik dinyatakan dalam metrik $SEE_g$ (ton $CO_2e$ per ton produk barang $g$):

$$SEE_g = \frac{AttrEm_g + EmbEm_{precursor, g}}{AL_g}$$

Di mana:
- $AttrEm_g$: Emisi langsung diatribusikan (*attributed direct emissions*) dari proses produksi barang $g$ selama periode pelaporan ($t CO_2e$).
- $EmbEm_{precursor, g}$: Emisi tertanam (baik langsung maupun tidak langsung) dari prekursor yang dikonsumsi dalam sintesis/pembentukan barang $g$ ($t CO_2e$).
- $AL_g$: Tingkat aktivitas produksi (*Activity Level*) atau total massa barang $g$ yang dihasilkan ($ton$).

### B. Perhitungan Emisi Langsung Diatribusikan (Attributed Direct Emissions)
Emisi langsung berasal dari pembakaran bahan bakar (*fuel combustion*) dan reaksi proses kimia (*process emissions*):

$$AttrEm_{dir} = \sum_{i} \left( Q_{fuel, i} \times NCV_i \times EF_{fuel, i} \times OxF_i \right) + \sum_{j} \left( RawMat_j \times EF_{process, j} \times ConvF_j \right)$$

Di mana $Q$ adalah kuantitas bahan bakar ($m^3$ atau $ton$), $NCV$ adalah *Net Calorific Value* ($GJ/ton$), $EF$ adalah faktor emisi ($t CO_2e/GJ$), dan $OxF$ adalah faktor oksidasi (0.99–1.00).

### C. Emisi Tidak Langsung dari Konsumsi Listrik (Indirect Embedded Emissions)
Emisi tidak langsung dihitung dari konsumsi listrik spesifik per ton produk ($SEC_g$, dalam $MWh/ton$) dikalikan faktor emisi jaringan listrik:

$$SEE_{indir, g} = SEC_g \times EF_{el}$$

Penetapan $EF_{el}$ mengikuti hierarki resmi CBAM:
1. **Faktor emisi jaringan spesifik negara/wilayah** (*Country-specific grid emission factor*) yang diterbitkan Komisi Eropa berdasarkan data IEA.
2. **Faktor emisi aktual perjanjian pembelian tenaga listrik langsung** (*Direct Power Purchase Agreement / PPA*) antara instalasi manufaktur dan pembangkit energi terbarukan bebas karbon (syarat: koneksi fisik langsung atau *guaranteed contractual tracing* tanpa kompensasi ganda).

### D. Rekonsiliasi Pengurangan Harga Karbon Efektif (Effective Carbon Price Paid)
Jika produsen di negara asal telah membayar pajak karbon atau sertifikat emisi domestik ($CP_{paid}$ dalam $EUR/t CO_2e$), jumlah sertifikat CBAM yang wajib dibeli importir dapat dikurangi:

$$CBAM_{adjustment} = \max\left(0, SEE_g \times \left( P_{EU\_ETS} - CP_{paid} \right)\right)$$

## 3. Metodologi Kepatuhan & Boundary Batas Sistem Produksi

Penentuan batas sistem (*system boundaries*) memisahkan instalasi menjadi beberapa unit produksi (*production routes*):
1. **Agregasi Unit Produksi (Aggregated Goods Categories)**: Menetapkan unit proses input, unit reaktor termal/kimia, dan output produk primer.
2. **Monitoring Konsumsi Prekursor**: Mencatat neraca massa (*mass balance*) scrap logam, ferroalloy, kokas, atau bahan kimia antara yang masuk ke dalam sistem.
3. **Penyisihan Aliran Emisi Bersama (Co-product Allocation)**: Menggunakan alokasi nilai ekonomi atau alokasi massa energi termal jika terdapat produk samping (*by-products*) seperti terak (*slag*) atau uap panas buangan (*waste heat steam*).

## 4. Studi Kasus Industri: Manufaktur Billet Baja EAF vs BF-BOF

Sebuah fasilitas pabrik baja terpadu mengekspor batang kawat baja (*steel wire rod*, kode HS 7213) sebesar 50.000 ton per tahun ke Jerman. Pabrik mengoperasikan dua jalur produksi berbeda:
- **Jalur 1: Blast Furnace - Basic Oxygen Furnace (BF-BOF)** berbahan baku bijih besi primer dan batubara kokas.
  - Direct Emissions: $1.85\ t CO_2e/t\ steel$.
  - Indirect Electricity: $0.15\ MWh/t \times 0.70\ t CO_2e/MWh = 0.105\ t CO_2e/t$.
  - Total $SEE_{BF-BOF} = 1.955\ t CO_2e/t\ steel$.
- **Jalur 2: Electric Arc Furnace (EAF)** berbahan baku 100% scrap daur ulang dengan pasokan listrik dari PLTA (PPA langsung).
  - Direct Emissions (Elektroda grafit & gas alam pembakar scrap): $0.22\ t CO_2e/t\ steel$.
  - Indirect Electricity: $0.48\ MWh/t \times 0.04\ t CO_2e/MWh = 0.019\ t CO_2e/t$.
  - Total $SEE_{EAF} = 0.239\ t CO_2e/t\ steel$.

**Analisis Finansial CBAM (Asumsi Harga EU ETS = €85/ton $CO_2e$):**
- Jalur BF-BOF menanggung kewajiban sertifikat CBAM: $1.955 \times €85 = €166.18\text{ per ton baja}$. Untuk volume 50.000 ton, total liabilitas karbon mencapai **€8.309.000 / tahun**.
- Jalur EAF hanya menanggung kewajiban: $0.239 \times €85 = €20.315\text{ per ton baja}$ atau total **€1.015.750 / tahun**.
- **Keputusan Rekayasa Sistem Industri**: Manajemen melakukan investasi retrofitting pada instalasi EAF dan dekarbonisasi rantai pasok energi, menghasilkan penghematan biaya kepatuhan ekspor sebesar **€7.293.250 / tahun** sekaligus mengamankan pangsa pasar ekspor ramah lingkungan.

## 5. Integrasi Digital & Verifikasi ISO 14064-3

Penerapan sistem audit terdistribusi mencakup:
- Integrasi data konsumsi sensor IoT (SCADA / DCS) langsung ke database audit trail berbasis *Digital MRV* (*Monitoring, Reporting, and Verification*).
- Validasi data sampling periodik kuartalan untuk memenuhi format XML komunikasi resmi *CBAM Transitional Registry*.

---
