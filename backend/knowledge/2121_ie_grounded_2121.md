# 2121 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222 °C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 25–37 % konsumsi energi final global, di mana lebih dari separuhnya merupakan kebutuhan *process heat* bersuhu sedang–tinggi (100–400 °C) untuk industri kimia, makanan & minuman, tekstil, kertas, dan logam (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri menuntut kombinasi dua teknologi utama: **High-Temperature Heat Pump (HTHP)** sebagai penyedia panas efisien berbasis listrik (COP > 2,5 pada rentang 150–250 °C), serta **Latent Heat Thermal Energy Storage (LHTES)** sebagai buffer termal yang menyeimbangkan fluktuasi beban dan memungkinkan *load shifting* (Toloza et al., 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Xu & Wang (2024) menekankan bahwa tanpa storage, HTHP menghadapi tantangan operasional berupa kesenjangan temporal antara ketersediaan listrik rendah-karbon (mis. surplus fotovoltaik siang hari) dan permintaan panas proses malam hari.

Tantangan klasik LHTES adalah konduktivitas termal rendah material perubahan fasa (*phase change material*, PCM) — biasanya hanya 0,2–0,8 W/(m·K) untuk garam nitrat atau parafin — yang menghambat laju *charging*/*discharging* dan menurunkan utilitas kapasitas termal. Toloza et al. (2026) menjawab tantangan ini dengan mengintegrasikan PCM eutektik pada temperatur fasa sekitar 222 °C ke dalam konfigurasi *shell-and-tube* vertikal, yang memberikan kekompakan tinggi (densitas energi > 200 kJ/L), robust secara struktural, dan kompatibel dengan enhancement termal seperti *metal wool* atau *fins*. Unit ini dirancang sebagai antarmuka langsung antara kondensor pompa kalor dan beban proses, menyimpan energi saat COP pompa kalor optimum dan melepaskannya saat tarif listrik puncak.

Secara ekonomis, kombinasi HTHP–LHTES dapat memangkas biaya levelized heat (LCOH) hingga 20–35 % dibandingkan boiler gas alam di banyak yurisdiksi Eropa, sekaligus menjadi pondasi elektrifikasi proses industri (Xu & Wang, 2024). Urgensi rekayasa industri menjadi jelas: dibutuhkan model transien yang valid dan *scalable* agar desainer pabrik dapat menentukan ukuran geometri, laju alir *heat transfer fluid* (HTF), dan profil operasi harian.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi Transien pada PCM

Model Toloza et al. (2026) menggunakan formulasi enthalpi (*enthalpy method*) untuk menangkap *solid-liquid phase change* secara kontinu. Persamaan konservasi energi pada PCM adalah:

$$\rho_{pcm} \, c_{p,pcm}(T) \, \frac{\partial T}{\partial t} = \nabla \cdot \left( k_{pcm}(T) \, \nabla T \right) \tag{1}$$

di mana $\rho_{pcm}$ adalah densitas, $c_{p,pcm}(T)$ kapasitas panas efektif yang mencakup *latent heat*, dan $k_{pcm}(T)$ konduktivitas termal. Metode *apparent heat capacity* yang diadopsi oleh Modelica mendefinisikan:

$$c_{p,app}(T) = c_{p,s} + \frac{L}{T_{liq} - T_{sol}} \cdot f(T) \tag{2}$$

dengan $L$ panas laten fusi, dan $f(T)$ fungsi *smoothing* (Gaussian atau hyperbolic tangent) yang menekan diskontinuitas numerik di sekitar $T_{m}$ ≈ 222 °C.

### 2.2 Perpindahan Panas pada Dinding Tabung

Kondisi batas di interface HTF–dinding tabung mengikuti konveksi paksa:

$$-k_{pcm} \frac{\partial T}{\partial n} \Big|_{r=r_i} = h_{htf} \left( T_{htf} - T_{wall} \right) \tag{3}$$

di mana koefisien konveksi internal $h_{htf}$ diperoleh dari korelasi Dittus–Boelter untuk aliran turbulen:

$$Nu_D = 0{,}023 \, Re_D^{0{,}8} \, Pr^{0{,}4} \tag{4}$$

$$h_{htf} = \frac{Nu_D \cdot k_{htf}}{D_i} \tag{5}$$

### 2.3 Parameter Dimensi & Kriteria Kelayakan Desain

Untuk menilai kelayakan desain geometri, digunakan empat bilangan tak berdimensi utama (Toloza et al., 2026):

$$\text{Fo} = \frac{\alpha_{pcm} \, t}{R_o^2} \quad ; \quad \text{Ste} = \frac{c_{p,pcm} \, \Delta T}{L} \quad ; \quad \text{Bi} = \frac{h_{htf} \, R_o}{k_{pcm}} \tag{6}$$

Bilangan Stefan (Ste) rendah menunjukkan kapasitas *latent* dominan, sedangkan Fo ≈ 0,2–0,5 menandai waktu *charging* lengkap.

### 2.4 Model Lumped-Capacitance pada Sisi HTF

Untuk efisiensi komputasi, sisi HTF sering dimodelkan sebagai *moving boundary* dengan asumsi temperatur radial seragam di dalam tabung:

$$\rho_{htf} c_{p,htf} A_c \frac{\partial T_{htf}}{\partial x} + \rho_{htf} c_{p,htf} \dot{V} \frac{\partial T_{htf}}{\partial z} = h_{htf} P_{wetted} \left( T_{wall} - T_{htf} \right) \tag{7}$$

### 2.5 Integrasi dengan HTHP — Beban & COP

Laju pelepasan panas oleh kondensor HTHP ke HTF memenuhi neraca energi:

$$\dot{Q}_{HTHP} = \dot{m}_{htf} \, c_{p,htf} \left( T_{htf,in} - T_{htf,out} \right) = \dot{Q}_{evap} + W_{comp} \tag{8}$$

dengan COP teoritis Carnot:

$$COP_{Carnot} = \frac{T_{cond}}{T_{cond} - T_{evap}} \tag{9}$$

Penyimpanan latent memungkinkan pompa kalor beroperasi pada $T_{cond}$ mendekati $T_m$ PCM (≈ 222 °C), sehingga menjaga COP tetap tinggi sambil men-*decouple* output termal dari operasi pompa kalor (Xu & Wang, 2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti alur yang diadopsi Toloza et al. (2026) dan prosedur rekayasa termal standar (ASME PTC 30, ISO 12241):

**Langkah 1 — Penentuan Kebutuhan Energi Proses.** Hitung profil beban harian $Q_{proc}(t)$ dari data SCADA pabrik, identifikasi jendela *charging* (HTF masuk pada 230–240 °C) dan *discharging* (HTF keluar ≥ 210 °C).

**Langkah 2 — Seleksi PCM.** Pilih PCM eutektik dengan $T_m$ 5–10 °C di atas $T_{evap}$ HTHP dan di bawah degradasi termal. Kandidat tipikal adalah eutektik $KNO_3$-$NaNO_3$ atau garam organik untuk rentang 200–250 °C.

**Langkah 3 — Desain Geometri Shell-and-Tube.** Tentukan diameter luar $D_o$, panjang $L$, jumlah tabung $N$, dan shell clearance. Kriteria desain: $L/D_o$ ≥ 5, $N$ memenuhi luas permukaan $\geq 0{,}2$ m² per liter PCM.

**Langkah 4 — Pemodelan Numerik Modelica.** Bangun *multi-domain model* menggunakan pustaka `Thermal` Modelica dengan diskretisasi 1-D radial pada PCM dan 1-D aksial pada HTF. Validasi dengan benchmark numerik *phase change* (mis. studi Voller & Prakash).

**Langkah 5 — Simulasi Transien & Optimasi.** Lakukan simulasi siklus *charge*/*discharge* harian (mis. 8 jam charge, 8 jam discharge) untuk mendapatkan *state of charge* (SOC) termal:

$$SOC(t) = \frac{E_{pcm}(t)}{E_{pcm,max}} = \frac{\int_{T_{init}}^{T(t)} \rho c_{p,app} \, dT}{\rho L + \int_{T_{sol}}^{T_{liq}} \rho c_p \, dT} \tag{10}$$

**Langkah 6 — Integrasi Kendali HTHP–LHTES.** Atur *inverter-driven compressor speed* dan laju alir HTF untuk mempertahankan $T_{htf,out}$ konstan, mengimplementasikan strategi *Model Predictive Control* (MPC) berbasis prediksi beban 24-jam (Xu & Wang, 2024).

**Diagram Alir SOP:**

```
[Beban Proses Q_proc(t)] → [Forecast Suhu/Listrik 24h] → [Optimasi Jadwal Charge/Discharge]
         ↓                                                          ↓
[Seleksi PCM Eutektik] → [Desain Shell-and-Tube] → [Simulasi Transien Modelica]
         ↓                                                          ↓
[Validasi Eksperimental/Literatur] ← [Analisis Sensitivitas] ← [Output: SOC(t), η_ex]
         ↓
[Integrasi MPC dengan HTHP] → [Commissioning & Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES vertikal terintegrasi HTHP untuk industri makanan & minuman (*sterilization line*, $T_{proc}$ = 220 °C, kapasitas termal harian 500 kWh_th).

**Parameter Desain (berdasarkan Toloza et al., 2026):**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Eutektik nitrat (40% KNO₃–60% NaNO₃) | – |
| $T_m$ (PCM) | 222 | °C |
| $\rho_{pcm}$ | 1950 | kg/m³ |
| $c_{p,pcm}$ (solid) | 1,45 | kJ/(kg·K) |
| $L$ (panas laten) | 165 | kJ/kg |
| $k_{pcm}$ | 0,55 | W/(m·K) |
| Diameter shell $D_s$ | 0,40 | m |
| Diameter tube $D_o$ / $D_i$ | 0,032 / 0,028 | m |
| Panjang $L$ | 2,0 | m |
| Jumlah tube $N$ | 37 | – |
| HTF | Terminol-66 (minyak termal) | – |
| $\dot{m}_{htf}$ | 1,8 | kg/s |
| $T_{htf,in}$ (charge) | 240 | °C |
| $T_{htf,in}$ (discharge.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
