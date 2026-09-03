# 2025 — Analisis Tekno-Ekonomi Komparatif Kolektor Termal Surya dan Pompa Kalor Suhu Tinggi untuk Generasi Uap Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Techno-economic comparative analysis of solar thermal collectors and high-temperature heat pumps for industrial steam generation*
**Jurnal & Sitasi Utama:** Puneet Saini, Mohammad Ghasemi, Cordin Arpagaus (2022). *Energy Conversion and Management*, Vol. 273. DOI: [https://doi.org/10.1016/j.enconman.2022.116623](https://doi.org/10.1016/j.enconman.2022.116623)
**Sitasi Pendukung:** Steve Griffiths, Benjamin K. Sovacool, Dylan D. Furszyfer Del Rio (2023). *Renewable and Sustainable Energy Reviews*, Vol. 173. DOI: [https://doi.org/10.1016/j.rser.2023.113291](https://doi.org/10.1016/j.rser.2023.113291)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 20% dari total emisi gas rumah kaca (GRK) di Eropa, dimana produksi panas proses industri (*industrial process heat*) merupakan kontributor dominan yang hingga dasawarsa terakhir masih bergantung pada pembakaran bahan bakar fosil — khususnya gas alam (Saini, Ghasemi, & Arpagaus, 2022, DOI: [10.1016/j.enconman.2022.116623](https://doi.org/10.1016/j.enconman.2022.116623)). Konteks geopolitik terkini, berupa reorganisasi rantai pasok gas alam global dan volatilitas harga energi paska-krisis 2022, telah memperkuat argumentasi bahwa ketergantungan Eropa terhadap boiler fosil bukan hanya tidak berkelanjutan secara lingkungan, melainkan juga rentan secara struktural. Tujuan Perjanjian Paris untuk membatasi pemanasan global di bawah 1,5 °C mensyaratkan transformasi radikal pada sektor panas industri, yang hingga kini hanya terelektrifikasi sekitar 10% dari total kebutuhan termal.

Saini et al. (2022) secara eksplisit membandingkan dua teknologi dekarbonisasi untuk penyediaan uap industri: (a) **pompa kalor suhu tinggi elektrik (*electricity-driven high-temperature heat pump*, HTHP)** yang mampu membangkitkan uap pada temperatur 100–200 °C dengan *Coefficient of Performance* (COP) melebihi efisiensi boiler fosil, dan (b) **kolektor parabolik trough (*parabolic trough collector*, PTC)** yang memanfaatkan radiasi matahari langsung untuk membangkitkan panas termal secara ekonomis dengan jejak karbon minimal. Konteks ini menjadi semakin relevan ketika industri semen dan beton — yang siklus hidupnya menyumbang hampir 10% dari emisi CO₂ terkait energi global (Griffiths, Sovacool, & Furszyfer Del Rio, 2023, DOI: [10.1016/j.rser.2023.113291](https://doi.org/10.1016/j.rser.2023.113291)) — juga sedang mengevaluasi substitusi *clinker* dan integrasi teknologi pemanas non-fosil pada kiln dan unit pengeringan agregat.

Urgensi operasional dari analisis tekn-ekonomi ini terletak pada tiga sumbu keputusan manajerial: (i) **kapital expenditure (CAPEX)** yang harus diamortisasi selama 20–30 tahun usia pakai aset termal; (ii) **biaya energi tingkat lanjut (*levelized cost of heat*, LCOH)** yang menentukan daya saing produksi; dan (iii) **kepastian pasokan (*energy security*)** yang tidak lagi dapat diasumsikan konstan sepanjang horizon perencanaan. Ketiga sumbu ini menjadi tulang punggung setiap studi kelayakan pabrik proses termal dan merupakan domain kompetensi utama rekayasawan Teknik Industri.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis Saini et al. (2022) dibangun di atas empat pilar kuantitatif: (i) permodelan termal kolektor surya, (ii) termodinamika siklus kompresi uap pada HTHP, (iii) fungsi biaya siklus hidup (*life-cycle cost*, LCC), dan (iv) indikator ekonomi LCOH. Persamaan-persamaan berikut merupakan rumus fundamental yang digunakan dalam paper tersebut.

**Persamaan Hottel-Whillier-Bliss (HWB)** untuk memodelkan *useful heat gain* kolektor surya termal:

$$q_u = F_R \left[ (\tau\alpha) G_T - U_L (T_{in} - T_a) \right]^{+}$$

dimana $q_u$ adalah fluks panas berguna per luas aperture ($W/m^2$), $F_R$ adalah faktor removal panas, $(\tau\alpha)$ adalah produk transmitansi-absorbansi efektif, $G_T$ adalah iradiasi surya pada bidang kemiringan kolektor ($W/m^2$), $U_L$ adalah koefisien kehilangan total ($W/m^2K$), $T_{in}$ adalah temperatur fluida masuk, dan $T_a$ adalah temperatur ambient.

Untuk sistem PTC, efisiensi termal total didefinisikan sebagai:

$$\eta_{PTC} = \frac{\dot{Q}_{useful}}{A_{aperture} \cdot G_T} = \frac{F_R (\tau\alpha) G_T - F_R U_L (T_{in} - T_a)}{G_T}$$

**Kinerja Pompa Kalor Suhu Tinggi** diukur dengan COP, yang untuk siklus kompresi uap ideal mengikuti:

$$COP_{Carnot} = \frac{T_{hot}}{T_{hot} - T_{cold}}$$

dimana seluruh temperatur dalam Kelvin. COP aktual HTHP pada temperatur kondensasi $T_{hot}$ mendekati:

$$COP_{actual} = \eta_{II} \cdot \frac{T_{hot}}{T_{hot} - T_{cold}}$$

dengan $\eta_{II}$ adalah efisiensi eksergi relatif terhadap siklus Carnot (umumnya 0,40–0,55 untuk HTHP komersial pada $T_{hot}$ = 150–200 °C). Konsumsi listrik spesifik untuk menghasilkan 1 kWh panas adalah:

$$e_{el} = \frac{1}{COP_{actual}} \quad [kWh_{el}/kWh_{th}]$$

**Indikator Ekonominya** mengikuti *levelized cost of heat* (LCOH) yang diadaptasi dari metodologi LCOE untuk energi:

$$LCOH = \frac{\sum_{t=1}^{n} \frac{CAPEX + OPEX_t}{(1+r)^t}}{\sum_{t=1}^{n} \frac{Q_{th,t}}{(1+r)^t}}$$

dimana $CAPEX$ adalah investasi awal, $OPEX_t$ adalah biaya operasional tahun ke-$t$, $r$ adalah tingkat diskonto, $Q_{th,t}$ adalah output termal tahunan, dan $n$ adalah umur proyek (20–30 tahun untuk aset termal industri).

**Emisi CO₂ ekuivalen spesifik** dihitung menggunakan faktor emisi listrik grid ($EF_{grid}$):

$$CO_2 = Q_{th} \cdot \left( \frac{e_{el}}{\eta_{boiler}} \cdot EF_{grid} \right) \quad \text{[untuk boiler fosil]}$$

dan

$$CO_2 = Q_{th} \cdot \frac{e_{el}}{COP_{HTHP}} \cdot EF_{grid} \quad \text{[untuk HTHP]}$$

dimana $\eta_{boiler}$ adalah efisiensi boiler gas alam (umumnya 0,85–0,92). Penghematan emisi absolut untuk HTHP vs boiler gas:

$$\Delta CO_2 = Q_{th} \left[ \frac{0,9 \cdot EF_{gas}}{\eta_{boiler}} - \frac{EF_{grid}}{COP_{HTHP}} \right]$$

dengan $EF_{gas} \approx 0{,}202\ kg\ CO_2/kWh_{HHV}$ untuk gas alam.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Saini et al. (2022) menyusun protokol komparasi tujuh langkah yang dapat diadopsi sebagai SOP rekayasa:

**Langkah 1 — Karakterisasi Demand Termal.** Kuantifikasi profil beban termal $Q_{th}(t)$ selama 8.760 jam/tahun, meliputi temperatur suplai uap ($T_{sat}$), tekanan kerja ($p$), laju aliran massa ($\dot{m}_{steam}$), serta fluktuasi musiman. Energi termal tahunan:

$$Q_{th,annual} = \dot{m}_{steam} \cdot \Delta h_{sat} \cdot t_{operasi}$$

**Langkah 2 — Penapisan Teknologi Awal.** Pemetaan teknologi kandidat terhadap temperatur dan kapasitas; PTC layak untuk $T \leq 400\ °C$ pada daerah iradiasi $>1.700\ kWh/m^2/tahun$, HTHP layak untuk $T \leq 200\ °C$ selama tarif listrik mendukung COP $\geq$ 2,5.

**Langkah 3 — Pemodelan Kinerja Teknis.** Iterasi neraca energi menggunakan persamaan HWB untuk PTC dan siklus kompresi uap untuk HTHP; kalibrasi dengan data pabrikan menggunakan regresi linier terhadap temperatur kondensasi.

**Langkah 4 — Permodelan Ekonomi.** Pembangunan cash flow diskonto selama $n$ tahun dengan sensitivitas terhadap tingkat diskonto ($r$ = 4–10%), harga listrik, harga gas, dan eskalasi inflasi energi.

**Langkah 5 — Analisis Sensitivitas & Monte Carlo.** Identifikasi parameter paling berpengaruh terhadap LCOH menggunakan *tornado diagram* dan simulasi Monte Carlo ($\geq$ 10.000 iterasi).

**Langkah 6 — Evaluasi Multi-Kriteria.** Penggunaan *weighted scoring model* dengan kriteria: biaya (40%), emisi (25%), keandalan (15%), kompleksitas O&M (10%), dan fleksibilitas lokasi (10%).

**Langkah 7 — Rekomendasi & Penjadwalan Implementasi.** Penyiapan rencana transisi (*decommissioning* boiler, *commissioning* sistem baru) dengan milestone teknikal dan verifikasi performa (*performance test*).

Diagram alir keputusan (*decision flow*) secara singkat: *Demand profile → Temperature screening → PTC feasible? → HTHP feasible? → Hybrid feasible? → Economic optimization → Risk-adjusted LCOH → Recommendation*. SOP ini memenuhi kerangka ISO 50015 (*Energy Management Systems — Measurement and Verification*) untuk validasi penghematan energi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik kimia mid-scale di Eropa Selatan membutuhkan uap jenuh pada $T_{sat} = 150\ °C$ ($p \approx 4{,}76\ bar$, $\Delta h_{sat} \approx 2.116\ kJ/kg$). Kebutuhan: $\dot{m}_{steam} = 5.000\ kg/jam$ selama 6.000 jam/tahun. Iradiasi matahari lokasi rata-rata $G_T = 800\ W/m^2$ pada bidang PTC, $H_{annual} = 1.850\ kWh/m^2/tahun$. Tarif listrik industri: $0{,}18\ €/kWh_{el}$; gas alam: $0{,}065\ €/kWh_{HHV}$. Tingkat diskonto $r = 6\%$, umur proyek 25 tahun.

**Perhitungan 1 — Energi termal tahunan dan sebagai referensi boiler gas:**

$$Q_{th,annual} = 5.000 \cdot \frac{2.116}{3.600} \cdot 6.000 = 17.633\ MWh/tahun$$

Konsumsi gas boiler ($\eta = 0{,}90$):

$$Q_{gas} = \frac{17.633}{0{,}90} = 19.592\ MWh_{HHV}/tahun$$

Biaya bahan bakar tahunan: $19.592 \times 0{,}065 = €$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
