# 2841 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 25–28% dari konsumsi energi final dunia, dan sekitar 70% dari energi industri tersebut digunakan untuk memenuhi kebutuhan *process heat* (panas proses) pada rentang suhu 100–400 °C — terutama pada industri kimia, makanan & minuman, pulp & kertas, tekstil, serta metalurgi ringan. Dekarbonisasi sektor tersebut mensyaratkan penggantian boiler bahan bakar fosil dengan sistem elektrikal dan termal berbasis sumber energi rendah karbon, yang paling prospektif di antaranya adalah *High-Temperature Heat Pump* (HTHP). Namun, seperti diuraikan oleh Xu dan Wang (Tjoza dkk., 2026, mengutip Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), sifat termal HTHP yang intermiten (COP tergantung pada *source–sink temperature lift*) menciptakan celah operasional (*temporal mismatch*) antara periode di mana panas proses tersedia dan periode di mana panas tersebut dibutuhkan. Inilah celah yang diisi oleh sistem *Latent Heat Thermal Energy Storage* (LHTES).

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa material *Phase Change Material* (PCM) pada umumnya memiliki konduktivitas termal yang rendah (0,2–1,0 W/(m·K)), sehingga unit LHTES tanpa optimasi geometris akan mengalami waktu *charge*/*discharge* yang panjang, degradasi utilitas ekonomi, dan *thermal stratification* yang rendah. Untuk menjawab tantangan ini, paper tersebut mengembangkan model numerik transien dalam bahasa Modelica untuk unit LHTES *shell-and-tube* vertikal yang menggunakan PCM eutektik berbasis nitrat (titik lebur ~222 °C) dan dirancang khusus untuk integrasi dengan HTHP di sektor panas proses industri. Urgensi ekonominya sangat tinggi: investasi HTHP berskala industri hanya layak jika unit LHTES menyediakan kapasitas *buffering* yang mampu meng-*offset* fluktuasi tarif listrik (demand response) dan menyimpan kelebihan panas *waste heat* untuk digunakan pada shift produksi berikutnya.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES dilakukan dengan menyelesaikan persamaan konservasi energi 2D-axisymmetric pada PCM di dalam *shell*, dengan *tube* sebagai tempat aliran *Heat Transfer Fluid* (HTF). Pendekatan yang digunakan adalah **metode kapasitas panas semu (*apparent heat capacity method*)** untuk menangani perubahan fasa:

$$\rho_{PCM} \cdot c_{p,app}(T) \cdot \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r \cdot k_{PCM}(T) \cdot \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM}(T) \cdot \frac{\partial T}{\partial z} \right)$$

di mana kapasitas panas semu didefinisikan sebagai:

$$c_{p,app}(T) = c_{p,s} + \frac{L}{T_{liq} - T_{sol}} + c_{p,l}, \quad \text{untuk} \quad T_{sol} < T < T_{liq}$$

dengan $L$ adalah panas laten peleburan (J/kg), $T_{sol}$ dan $T_{liq}$ adalah suhu *solidus* dan *liquidus* PCM eutektik nitrat, $c_{p,s}$ dan $c_{p,l}$ adalah kapasitas panas fasa padat dan cair. Konduktivitas termal PCM bersifat *temperature-dependent*:

$$k_{PCM}(T) = k_s + (k_l - k_s) \cdot f(T), \quad f(T) = \frac{T - T_{sol}}{T_{liq} - T_{sol}}$$

Untuk HTF di dalam *tube*, model 1D *plug flow* dengan koefisien perpindahan panas konvektif $h_{HTF}$ digunakan:

$$\rho_{HTF} \cdot c_{p,HTF} \cdot A_c \cdot \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} \cdot c_{p,HTF} \cdot \frac{\partial T_{HTF}}{\partial z} = h_{HTF} \cdot \pi D_i \cdot (T_{wall} - T_{HTF})$$

Bilangan Nusselt untuk HTF (minyak termal) pada *fully developed* regime turbulen mengikuti korelasi Dittus-Boelter:

$$Nu_{HTF} = 0.023 \cdot Re_{HTF}^{0.8} \cdot Pr_{HTF}^{0.4}$$

Resistansi dinding *tube* diekspresikan melalui pendekatan *lumped* di mana fluks panas antarmuka PCM-HTFsatisfying kontinuitas:

$$q'' = \frac{T_{PCM,surface} - T_{HTF,bulk}}{\frac{1}{h_{HTF}} + \frac{\ln(D_o/D_i)}{2\pi k_{wall}}} = \frac{T_{PCM,surface} - T_{HTF,bulk}}{R_{conv} + R_{wall}}$$

Untuk PCM eutektik nitrat dengan titik lebur ~222 °C, parameter fisik yang digunakan Toloza et al. (2026) adalah $\rho_{PCM} \approx 1900$ kg/m³, $L \approx 100$ kJ/kg, $k_s \approx 0,5$ W/(m·K), dan $c_{p,s} \approx 1500$ J/(kg·K). Persamaan di atas diselesaikan secara simultan menggunakan diskretisasi *finite volume* dengan *time-stepping* eksplisit–implisit (CFL-controlled) di lingkungan Modelica.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa unit LHTES untuk integrasi HTHP mengikuti prosedur operasional standar berikut, yang merupakan generalisasi dari prosedur yang divalidasi oleh Toloza, Payá, dan Barceló (2026):

**Tahap 1 — Karakterisasi Beban Panas Proses (ISO 50015).** Lakukan audit energi untuk memetakan profil suhu dan durasi kebutuhan *process heat* setiap shift produksi selama 7–14 hari. Output: kurva $Q_{demand}(t)$ dan $T_{demand}$.

**Tahap 2 — Penentuan Kapasitas Storage.** Hitung kapasitas termal minimum:

$$Q_{storage,min} = \max_{t}\left[\int_t^{t+\Delta t} Q_{demand}(\tau)\, d\tau - Q_{HTHP,avg} \cdot \Delta t\right]$$

**Tahap 3 — Seleksi PCM dan Geometri.** Pilih PCM dengan $T_m \pm 5$ °C dari $T_{demand}$ untuk mengurangi degradasi eksergi. Untuk $T_{demand} \approx 200$–230 °C, gunakan eutektik nitrat $\text{NaNO}_3\text{–KNO}_3$. Pilih konfigurasi *shell-and-tube* vertikal dengan kriteria:

$$NTU = \frac{U \cdot A}{\dot{m}_{HTF} \cdot c_{p,HTF}} \geq 4$$

**Tahap 4 — Pemodelan & Validasi Numerik.** Bangun model Modelica sesuai persamaan di Bagian 2. Validasi dengan data eksperimental *charging/discharging curve* pada prototipe skala pilot (Toloza et al., 2026, melaporkan deviasi model < 8% terhadap eksperimen).

**Tahap 5 — Commissioning & Integrasi HTHP.** Integrasikan unit LHTES pada *return line* HTHP sebelum *heat exchanger* proses. Pasang sensor T (tipe K), flow meter Coriolis pada HTF, dan data logger. Lakukan *commissioning test* berupa dua siklus *charge*/*discharge* penuh untuk verifikasi kapasitas.

**Tahap 6 — Operasi & Pemeliharaan (ISO 55000).** Implementasikan *predictive maintenance* berbasis monitoring suhu multi-titik untuk mendeteksi *subcooling* lokal dan degradasi kapasitas akibat *thermal cycling fatigue*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik makanan & minuman membutuhkan uap proses 220 °C, 8 jam/hari, dengan debit rata-rata $Q_{demand} = 200$ kW. HTHP beroperasi dengan kapasitas rata-rata 150 kW selama 16 jam/hari (dua shift), sehingga defisit 50 kW × 8 jam harus dicadangkan oleh unit LHTES.

**Parameter Desain (berbasis Toloza et al., 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_m$ (PCM eutektik NaNO₃–KNO₃) | 222 | °C |
| $L$ (panas laten) | 100 000 | J/kg |
| $\rho_{PCM}$ | 1 900 | kg/m³ |
| $c_{p,l}$ | 1 600 | J/(kg·K) |
| $c_{p,s}$ | 1 500 | J/(kg·K) |
| $k_l$ | 0,60 | W/(m·K) |
| $k_s$ | 0,50 | W/(m·K) |
| $D_i$ (tube inner) | 0,020 | m |
| $D_o$ (tube outer) | 0,024 | m |
| $D_{shell}$ | 0,300 | m |
| Jumlah tube ($n$) | 19 | – |
| Panjang unit ($H$) | 2,0 | m |
| $\dot{m}_{HTF}$ (minyak termal)

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
