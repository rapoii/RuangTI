# 1449 — Penilaian Termo-Ekonomik Pembangkit Listrik Nuklir Fleksibel dengan Integrasi Penyimpanan Energi Termal pada Sistem Kelistrikan Rendah Karbon Masa Depan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Thermo-economic assessment of flexible nuclear power plants in future low-carbon electricity systems: Role of thermal energy storage*
**Jurnal & Sitasi Utama:** Abdullah A. Al Kindi, Marko Aunedi, Antonio Pantaleo (2022). *Energy Conversion and Management*, Vol. 261, 115484. DOI: [https://doi.org/10.1016/j.enconman.2022.115484](https://doi.org/10.1016/j.enconman.2022.115484)
**Sitasi Pendukung:** Derrick Kajjoba, Racheal Wesonga, Joseph Ddumba Lwanyaga (2025). *Sustainable Energy Research*. DOI: [https://doi.org/10.1186/s40807-025-00169-9](https://doi.org/10.1186/s40807-025-00169-9)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global menuju sistem kelistrikan rendah karbon menghadapi tantangan struktural yang semakin kompleks seiring meningkatnya penetrasi energi terbarukan intermiten seperti tenaga surya fotovoltaik dan angin. Fluktuasi output dari sumber-sumber energi terbarukan tersebut menciptakan *duck curve* dan defisit fleksibilitas sistemik yang mengharuskan generator konvensional—termasuk Pembangkit Listrik Tenaga Nuklir (PLTN)—untuk mampu beroperasi secara *load-following* dan *ramping* dengan rentang dinamis yang lebar. Dalam konteks ini, Al Kindi, Aunedi, dan Pantaleo (2022) mempublikasikan studi perintis di *Energy Conversion and Management* yang mengusulkan konfigurasi integrasi *Thermal Energy Storage* (TES) dan generator sekunder pada PLTN berkapasitas 1.610 MWel di Inggris Raya untuk meningkatkan fleksibilitas sistem dan menurunkan total biaya sistem kelistrikan nasional.

Urgensi operasional konfigurasi hibrida nuklir-TES ini terletak pada tiga pilar rekayasa: (i) **stabilitas teknis**—karena reaktor nuklir beroperasi paling efisien pada beban dasar konstan, namun membutuhkan mekanisme *decoupling* antara produksi termal dan output listrik; (ii) **kelayakan ekonomi**—karena biaya modal (CAPEX) PLTN sangat tinggi sehingga *capacity factor* minimum harus dipertahankan agar *Levelized Cost of Electricity* (LCOE) tetap kompetitif terhadap PLTG dan PLTGU; serta (iii) **keamanan sistem**—karena kehilangan pembangkitan skala besar (nuclear trip) memiliki konsekuensi frekuensi dan tegangan yang signifikan. Integrasi TES memungkinkan dekopling antara *nuclear steam generator* dan *turbine-generator*, sehingga ketika permintaan listrik rendah, panas buang dapat disimpan dalam media seperti *molten salt*, *concrete*, atau *phase change material* (PCM), dan dilepaskan saat *peak load* untuk menggerakkan generator sekunder. Hasil riset Al Kindi dkk. (2022) menunjukkan bahwa konfigurasi yang diusulkan mampu meningkatkan kapasitas pembangkitan puncak hingga 2.130 MWel, merepresentasikan **peningkatan 32% terhadap kapasitas terpasang nominal** tanpa mengubah kapasitas termal reaktor.

Secara paralel, Kajjoba, Wesonga, dan Lwanyaga (2025) dalam *Sustainable Energy Research* menegaskan bahwa sektor bangunan menyumbang sekitar **40% konsumsi energi global dan 15% emisi CO2 langsung** dari sektor pengguna akhir. Kedua perspektif ini saling melengkapi karena bangunan tropis dengan *thermal mass* rendah maupun struktur PLTN kaku merupakan contoh ekstrem dari masalah ketidakfleksibelan termal—satu di tingkat mikro (bangunan), satu di tingkat makro (sistem ketenagalistrikan). Perspektif integratif ini menjadi landasan berpikir sistemik dalam modul ini, di mana *thermal energy storage* tidak hanya menjadi enabler fleksibilitas PLTN tetapi juga pilar utama desain bangunan pasif.

## 2. Landasan Teori & Formulasi Matematis

Model *whole-system* yang digunakan Al Kindi dkk. (2022) meminimalkan **Total System Cost (TSC)** selama horizon perencanaan, dengan fungsi objektif:

$$\min_{P_g, P_{ch}, P_{dis}, E_{TES}} \, TSC = \sum_{t \in T} \sum_{g \in G} \left[ C_{g}^{fuel}(t) \cdot P_g(t) + C_{g}^{OM}(t) \cdot P_g(t) + C_{g}^{CO_2}(t) \cdot E_g(t) \right] + \sum_{s \in S} \alpha_s \cdot CAPEX_s \tag{1}$$

dengan $P_g(t)$ adalah daya output generator $g$ pada waktu $t$, $P_{ch}(t)$ dan $P_{dis}(t)$ masing-masing mewakili laju pengisian dan pengosongan TES, sementara $E_{TES}(t)$ adalah state of charge (SoC) sistem penyimpanan, dan $\alpha_s$ adalah *annualization factor* untuk CAPEX aset $s$.

Persamaan keseimbangan daya pada setiap interval waktu $t$:

$$\sum_{g \in G} P_g(t) + \sum_{r \in R} P_r(t) + P_{dis}(t) = D(t) + P_{ch}(t) \tag{2}$$

dengan $D(t)$ adalah permintaan listrik sistem dan $P_r(t)$ adalah pembangkitan dari sumber terbarukan $r$.

Dinamika state of charge (SoC) pada TES diformulasikan sebagai:

$$E_{TES}(t+1) = E_{TES}(t) + \eta_{ch} \cdot P_{ch}(t) \cdot \Delta t - \frac{P_{dis}(t) \cdot \Delta t}{\eta_{dis}} \tag{3}$$

dengan $\eta_{ch}$ dan $\eta_{dis}$ berturut-turut adalah efisiensi siklus pengisian dan pengosongan. Untuk sistem berbasis garam cair, *round-trip efficiency* tipikal berada pada rentang:

$$\eta_{RT} = \eta_{ch} \cdot \eta_{dis} \approx 0{,}85 - 0{,}93 \tag{4}$$

LCOE hibrida nuklir-TES dihitung menggunakan formulasi *discounted cash flow*:

$$LCOE = \frac{\sum_{n=0}^{N} \frac{CAPEX_0 + OPEX_n}{(1+r)^n}}{\sum_{n=0}^{N} \frac{E_n}{(1+r)^n}} \tag{5}$$

dengan $r$ adalah *discount rate*, $N$ adalah umur ekonomis (umumnya 60 tahun untuk reaktor nuklir), dan $E_n$ adalah energi tahunan yang dihasilkan.

Kenaikan kapasitas efektif yang difasilitasi TES diformulasikan:

$$\Delta P_{peak} = \frac{P_{dis,max} - P_{base}}{\eta_{dis}} \cdot \tau_{dis} \cdot \frac{1}{\tau_{ref}} \tag{6}$$

dengan $\tau_{dis}$ adalah durasi discharge pada peak load dan $\tau_{ref}$ adalah interval referensi.

Hubungan antara kapasitas termal reaktor dan output listrik generator sekunder mengikuti siklus Rankine atau Brayton dengan efisiensi termal:

$$\eta_{th} = 1 - \frac{T_{cold}}{T_{hot}} \tag{7}$$

untuk siklus Carnot ideal, atau lebih realistis menggunakan efisiensi isotermal:

$$\eta_{th} = 1 - \frac{T_{out}}{T_{in}} - \frac{\dot{Q}_{loss}}{\dot{Q}_{in}} \tag{8}$$

Untuk integrasi dengan bangunan pasif (Kajjoba dkk., 2025), persamaan keseimbangan termal zona bangunan adalah:

$$C_{zone} \frac{dT_{in}}{dt} = \dot{Q}_{gain} - \dot{Q}_{loss} - \dot{Q}_{vent} - \dot{Q}_{rad} \tag{9}$$

dengan $\dot{Q}_{gain}$ mencakup beban internal dan radiasi matahari, sementara *thermal mass* efektif berfungsi sebagai penyimpan energi termal alami yang secara konseptual paralel dengan mekanisme TES pada PLTN.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi yang dikembangkan Al Kindi dkk. (2022) mengikuti kerangka **six-step whole-system modeling**:

1. **Karakterisasi PLTN Eksisting**: Pengumpulan data operasi unit 1.610 MWel (PWR atau BWR tipikal Inggris), kurva efisiensi termal parsial, ramp rate (umumnya 3–5% kapasitas per menit), dan *minimum stable load* (50–60% untuk kebanyakan desain reaktor Barat).
2. **Pemilihan Media dan Konfigurasi TES**: Evaluasi tiga opsi utama—(a) *two-tank molten salt* (NaNO₃-KNO₃), (b) *single-tank thermocline*, dan (c) *solid media concrete-based*—berdasarkan densitas energi volumetrik, kehilangan panas, dan CAPEX.
3. **Pemodelan Generator Sekunder**: Integrasi *secondary power conversion system* (SPCS) berupa siklus Rankine organik (ORC) atau turbin uap tambahan dengan kapasitas 500–600 MWel.
4. **Formulasi Optimisasi**: Pembangunan Mixed-Integer Linear Programming (MILP) dengan fungsi objektif Persamaan (1), kendala keseimbangan daya, ramp, SoC, dan emisi CO2.
5. **Simulasi Skenario**: Run model pada *time horizon* 8.760 jam/tahun, dengan sensitivitas terhadap penetrasi renewables (40%–80%), kapasitas TES (4–12 jam discharge), dan harga karbon (£0–£200/tCO₂).
6. **Analisis Termo-Ekonomik**: Perhitungan LCOE, *break-even price*, dan valuasi *capacity payment*.

**SOP Pengoperasian Harian PLTN-TES:**

| Fase | Aksi Kontrol | Parameter Kritis |
|------|--------------|------------------|
| Off-peak (00.00–05.00) | Reaktor pada 100% beban, sebagian uap dialirkan ke charger TES | SoC target ≥ 95% pukul 05.00 |
| Shoulder (05.00–10.00) | Discharge dimulai jika SoC ≥ 90%, ramp rate dikontrol ≤ 2% kapasitas/menit | Frekuensi grid 49,8–50,2 Hz |
| Peak (17.00–20.00) | Full discharge generator sekunder aktif | SoC minimum ≥ 15% pukul 21.00 |
| Recovery (20.00–24.00) | Recharge penuh, generator sekunder off | Kesiapan charger pada pukul 24.00 |

Pendekatan Kajjoba dkk. (2025) untuk bangunan tropis melengkapi SOP ini dengan strategi *passive cooling*: orientasi bangunan, *cross ventilation*, *shading devices*, dan *thermal mass* dinding—yang secara konseptual membentuk "micro-TES" yang menurunkan kebutuhan energi aktif untuk pendinginan, sehingga mengurangi *peaker demand* pada sistem grid nasional.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** PLTN Generic PWR 1.610 MWel di Inggris Raya dengan retrofit TES 8 jam.

**Input Parameter:**
- Kapasitas termal reaktor: $\dot{Q}_{th} = 4.500 \text{ MWth}$
- Efisiensi termal siklus uap eksisting: $\eta_{th,0} = 0{,}357$ → $P_{el,base} = 1.610$ MWel
- Media TES: *two-tank molten salt* (40% KNO₃, 60% NaNO₃), $\rho = 1.870 \text{ kg/m}^3$, $c_p = 1{,}55 \text{ kJ/(kg·K)}$
- $\Delta T$ salt: 565 K → 295 K (suhu operasi 290–565°C)
- *Round-trip efficiency*: $\eta_{RT} = 0{,}90$
- Generator sekunder ORC: $\eta_{SPCS} = 0{,}35$
- Discount rate: $r = 8{,}5\%$, umur ekonomis: $N = 60$ tahun
- CAPEX TES + SPC