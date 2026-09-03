# 2073 — Integrasi Energi Nuklir dalam Proses Industri untuk Dekarbonisasi Sistem Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Outlook on Industrial Requirements for Incorporating Nuclear Energy into Industrial Processes
**Jurnal & Sitasi Utama:** Rami Saeed, USDOE Office of Nuclear Energy (NE), Elizabeth Kirkpatrick Worsham (2023). *Peer-Reviewed Academic Journal*. DOI: [https://doi.org/10.2172/2293480](https://doi.org/10.2172/2293480)
**Sitasi Pendukung:** Rami Saeed (2023). *OSTI OAI (U.S. Department of Energy Office of Scientific and Technical Information)*. DOI: [https://openalex.org/W4389474807](https://openalex.org/W4389474807)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor utama emisi gas rumah kaca (GRK) global, dengan porsi mendekati seperempat dari total emisi CO₂ antropogenik dunia. Dalam konteks dekarbonisasi rantai nilai manufaktur, Saeed & Worsham (2023, DOI: 10.2172/2293480) menyoroti bahwa industri pulp dan kertas (pulp & paper) merupakan salah satu sektor *hard-to-abate* yang sangat bergantung pada pembakaran bahan bakar fosil untuk memenuhi kebutuhan termal proses. Secara spesifik, manufaktur pulp dan kertas memerlukan volum besar uap bertekanan rendah (*low-pressure steam*) untuk memasak (*digesting*) dan mencuci serat kayu di tahap pulping, sekaligus mempress serta mengeringkan pulp menjadi kertas. Struktur energi pada pabrik pulp dan kertas terintegrasi (*integrated mill*) tipikal menunjukkan bahwa 50–80% kebutuhan uap dipasok dari pembakaran limbah kayu — berupa kulit kayu (*bark*) yang dibakar dalam *hog boilers* serta lignin yang direcovery dalam *black liquor recovery boiler* — sedangkan sisanya dipenuhi oleh boiler bahan bakar minyak atau gas alam. Uap yang dihasilkan kemudian diekspansikan melalui turbin untuk menurunkan tekanan sekaligus membangkitkan listrik内部 (cogeneration), sementara proses *lime kiln* pada unit recovery kimia memerlukan suhu tinggi dari pembakaran gas alam untuk mengubah kalsium karbonat menjadi kalsium oksida yang esensial bagi siklus daur ulang kimiawi (Saeed & Worsham, 2023).

Di sisi paralel, Saeed (2023, DOI: 10.2172/openalex.org/W4389474807) mengemukakan kerangka Integrated Energy Systems (IES) yang memanfaatkan reaktor nuklir maju (*advanced nuclear reactors*) sebagai sumber energi firm dan dispatchable untuk menggantikan boiler fosil di sembilan industri karbon-intensif. Urgensi strategis dari integrasi nuklir–industri ini tidak hanya bersifat lingkungan, namun juga berkaitan dengan keandalan rantai pasok energi, stabilitas biaya produksi jangka panjang, dan pencapaian target *net-zero emission* sesuai dengan inisiatif federal maupun korporasi multinasional. Paper Saeed (2023) secara eksplisit mengidentifikasi titik-titik integrasi (*integration points*) beserta profil suhu dan tekanan yang dibutuhkan oleh masing-masing proses industri, sehingga memungkinkan analisis kesesuaian (*matching*) antara output termal reaktor nuklir dengan input proses manufaktur. Konteks ini menjadi krusial bagi profesi Teknik Industri karena keputusan integrasi energi tersebut mempengaruhi desain fasilitas, kapasitas produksi, tata letak pabrik, dan total biaya kepemilikan (*total cost of ownership*) sepanjang siklus hidup aset industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Neraca Energi pada Sistem Uap Industri

Formulasi fundamental untuk mengkuantifikasi kebutuhan uap suatu pabrik pulp dan kertas terintegrasi mengikuti hukum konservasi energi pada *black box* proses. Total energi termal yang dibutuhkan dapat dinyatakan sebagai:

$$Q_{total} = \dot{m}_{steam} \cdot (h_{steam} - h_{feedwater})$$

di mana $\dot{m}_{steam}$ adalah laju alir massa uap (kg/s), $h_{steam}$ adalah entalpi uap spesifik (kJ/kg) pada kondisi keluar boiler, serta $h_{feedwater}$ adalah entalpi air umpan (kJ/kg). Untuk uap jenuh pada tekanan $P = 1.0$ MPa (≈10 bar, umum pada proses pulp), nilai $h_{steam} \approx 2778$ kJ/kg dan $h_{feedwater} \approx 762$ kJ/kg, sehingga entalpi penguapan $\Delta h_{evap} \approx 2016$ kJ/kg. Dengan konsumsi uap tipikal pabrik pulp dan kertas berskala 1000 ton adt (*air-dried ton*) per hari sebesar $D \approx 4.5$ ton uap/ton adt, maka kebutuhan termal kontinyu pabrik adalah:

$$\dot{Q}_{process} = \frac{4500 \text{ ton/h} \times 2016 \text{ kJ/kg}}{3600 \text{ s/h}} \approx 2520 \text{ MW}_{th}$$

### 2.2 Efisiensi Pembangkitan Cogeneration

Pada konfigurasi *combined heat and power* (CHP) internal, uap diekspansikan melalui turbin *back-pressure* sebelum dipakai untuk proses. Efisiensi listrik turbin dapat dimodelkan dengan pendekatan isentropik:

$$\eta_{turbine} = \frac{h_{in} - h_{out}}{h_{in} - h_{out,s}}$$

dengan $h_{out,s}$ adalah entalpi keluar pada proses isentropik. Efisiensi total sistem CHP didefinisikan sebagai:

$$\eta_{CHP} = \eta_{th} + \eta_{el} = \frac{Q_{useful} + W_{el}}{Q_{fuel}}$$

yang untuk sistem pulp dan纸张 tipikal bernilai 70–85%, jauh lebih tinggi dibanding boiler kondensasi konvensional (Saeed & Worsham, 2023).

### 2.3 Potensi Substitusi dan Reduksi Emisi

Jika reaktor nuklir maju menyuplai fraksi $f_{nuklir}$ dari total kebutuhan termal $\dot{Q}_{total}$, maka reduksi emisi CO₂ dapat dihitung sebagai:

$$\Delta CO_2 = f_{nuklir} \cdot \dot{Q}_{total} \cdot EF_{fosil} \cdot \tau_{operasi}$$

dengan $EF_{fosil}$ adalah faktor emisi bahan bakar fosil (kg CO₂/GJ) dan $\tau_{operasi}$ adalah durasi operasi (jam/tahun). Untuk gas alam, $EF \approx 56.1$ kg CO₂/GJ, sedangkan emisi siklus hidup pembangkitan nuklir mendekati $EF_{nuklir} \approx 1.2$ kg CO₂/GJ (IPCC, 2014; dirujuk dalam Saeed, 2023).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Saeed (2023) menyusun metodologi sistematis untuk mengevaluasi kelayakan integrasi nuklir–industri dalam sembilan industri, yang dapat diadaptasi menjadi SOP rekayasa sebagai berikut:

**Langkah 1 — Karakterisasi Profil Termal Proses.** Setiap unit operasi di-*benchmark* terhadap kebutuhan termalnya: suhu (°C), tekanan (kPa), laju alir fluida pembawa panas, dan kontinuitas operasional (base-load vs. intermittent). Profil ini dibandingkan dengan output reaktor maju (misalnya HTGR suhu keluar 700–950°C, atau SFR suhu keluar 500–550°C).

**Langkah 2 — Identifikasi Titik Integrasi Energi.** Pemetaan *pinch analysis* dilakukan untuk menentukan suhu minimum pendekatan $\Delta T_{min}$ antara kurva komposit sumber panas (*advanced nuclear*) dan sink dingin (*process demand*). Jika $\Delta T_{min} \geq 30$°C pada rentang operasi, integrasi dianggap layak secara termodinamika.

**Langkah 3 — Analisis Dimensi & Tata Letak.** Jarak antara reaktor dan fasilitas industri (umumnya 0.1–5 km untuk aplikasi co-located) dianalisis menggunakan model kehilangan panas konduktif pipa:

$$\dot{Q}_{loss} = \frac{2\pi k_{ins} (T_{hot} - T_{amb})}{\ln(r_2/r_1)} \cdot L$$

di mana $k_{ins}$ adalah konduktivitas termal insulasi (W/m·K), $r_1$ dan $r_2$ adalah radius dalam dan luar pipa, serta $L$ adalah panjang pipa transfer. Efisiensi transfer total didefinisikan sebagai:

$$\eta_{transfer} = 1 - \frac{\dot{Q}_{loss}}{\dot{Q}_{supplied}}$$

**Langkah 4 — Penilaian Ekonomi & Keselamatan.** Analisis *Levelized Cost of Energy* (LCOE) dilakukan untuk menghitung biaya energi termal tersubstitusi:

$$LCOE_{thermal} = \frac{\sum_{t=1}^{N} (CAPEX_t + OPEX_t)/(1+r)^t}{\sum_{t=1}^{N} E_t/(1+r)^t}$$

dengan $r$ adalah *discount rate*, $E_t$ adalah energi termal yang dikirimkan tahun ke-$t$, dan $N$ adalah umur ekonomis (umumnya 40–60 tahun untuk reaktor maju menurut Saeed, 2023).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Pabrik Hipotetis

Ambil pabrik pulp dan kertas terintegrasi dengan kapasitas produksi $C = 1500$ ton adt/hari, beroperasi 350 hari/tahun dengan *on-stream factor* 0.92. Parameter kunci:

| Parameter | Nilai |
|-----------|-------|
| Konsumsi uap spesifik | 4.5 ton uap/ton adt |
| Tekanan uap proses | 1.0 MPa |
| Suhu uap jenuh | 184°C |
| Kandungan energi wood waste | 18.5 GJ/ton |
| Kebutuhan listrik internal | 90 kWh/ton adt |
| Kapasitas lime kiln | 350 ton CaO/hari |

### 4.2 Perhitungan Kebutuhan Termal Total

Laju produksi harian: $P_d = 1500$ ton/hari = 62.5 ton/jam

Kebutuhan uap total:
$$\dot{m}_{steam} = 62.5 \times 4.5 = 281.25 \text{ ton uap/jam}$$

Dengan kalor laten pada 1.0 MPa = 2015 kJ/kg, kebutuhan termal bruto:
$$\dot{Q}_{gross} = 281.25 \times 10^3 \text{ kg/h} \times 2015 \text{ kJ/kg} \times \frac{1}{3600} = 157{,}422 \text{ kW} \approx 157.4 \text{ MW}_{th}$$

### 4.3 Neraca Pembangkitan Internal Existing

Asumsi: 65% uap dari *hog boiler* + *recovery boiler*, 20% dari turbin back-pressure, 15% dari boiler gas alam. Efisiensi turbin back-pressure $\eta_{mech} = 0.32$. Pembangkitan listrik internal:
$$W_{el,int} = \dot{m}_{steam,turbine} \cdot \Delta h_{turbine} \cdot \eta_{mech}$$
$$W_{el,int} = 56.25 \times 10^3 \times 285 \times 0.32 \approx 1{,}424{,}000 \text{ kJ/h} \approx 395.5 \text{ kW}$$

Permintaan listrik pabrik: $P_{el} = 62.5 \times 90 = 5625$ kW. Defisit listrik dipenuhi dari grid PLN/pasar listrik.

### 4.4 Analisis Substitusi Nuklir

Misalkan reaktor HTGR kecil modular (SMR) berkapasitas termal 200 MWth dipasang co-located, menyuplai 120 MWth ke sistem uap industri melalui penukar panas intermediet. Suhu output reaktor 750°C diturunkan ke 250°C (steam generator) untuk menjaga integritas material pipa transfer.

Kontribusi nuklir terhadap total kebutuhan:
$$f_{nuklir} = \frac{120}{157.4} = 0.762 \text{ atau } 76.2\%$$

Reduksi konsumsi gas alam (baseline 15% dari $\dot{Q}_{gross}$):
$$\Delta \dot{Q}_{gas} = 0.15 \times 157.4 = 23.6 \text{ MW}_{th}$$

Reduksi emisi CO₂ tahunan:
$$\Delta CO_2 = 23.6 \text{ MW} \times 3600 \text{ s/h} \times 8400 \text{ h/th} \times 56.1 \text{ kg/GJ} \times \frac{1}{1000}$$
$$\Delta CO_2 = 23.6 \times 3600 \times 8400 \times 56.1 \times 10^{-6} \approx 40{,}021 \text{ ton CO}_2/\text{tahun}$$

Jika keseluruhan 120 MWth menggantikan sumber fosil, reduksi dapat mencapai:
$$\Delta CO_2^{max} = 120 \times 3600 \times 8400 \times 56.1 \times 10^{-6} \approx 203{,}565 \text{ ton CO}_2/\text{tahun}$$

### 4.5 Analisis Pinch Titik Integrasi

Untuk proses *lime kiln* yang membutuhkan suhu 1100°C, output SMR bersuhu 750°C tidak cukup langsung. Solusi rekayasa: gunakan *process heater* bertenaga listrik dari SMR atau aplikasikan *chemical recuperator* dengan *reverse water-gas shift* untuk memanfaatkan gasifikasi biomassa sebagai intermediate. Suhu *hog fuel dryer* (180–220°C) dan *black liquor evaporation* (multi-effect evaporator 0.1–0.5 MPa) sepenuhnya matchable dengan output SMR setelah degradasi suhu di *steam generator* sekunder.