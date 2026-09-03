# 2345 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Dekarbonisasi sektor industri menjadi salah satu tantangan strategis paling mendesak abad ke-21. Mengacu pada dokumen payung Eropa dan perspektif global yang dikemukakan oleh Xu & Wang (2024) dalam jurnal *The Innovation Energy*, teknologi pompa kalor — khususnya *High-Temperature Heat Pump* (HTHP) — dipandang sebagai tulang punggung transisiensi energi termal karena mampu menaikkan suhu sumber panas tingkat rendah (limbah, ambient, atau *waste heat*) menjadi panas proses industri tanpa menambah emisi CO₂ operasional. Namun, paper Xu & Wang (2024) juga secara eksplisit menyoroti satu kelemahan struktural HTHP: ketidakstabilan profil termal antara kapasitas pasokan (supply) dan kebutuhan (demand) sepanjang waktu operasi industri.

Untuk menjawab gap tersebut, Toloza, Payá, dan Barceló (2026) — melalui makalah *Eurotherm Seminar #119* dengan DOI [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086) — mengusulkan integrasi LHTES (*Latent Heat Thermal Energy Storage*) berbasis PCM (*Phase Change Material*) pada suhu fasa perubahan sekitar 222 °C dengan konfigurasi *shell-and-tube* vertikal. Pilihan 222 °C bukan arbitrer: suhu ini sesuai dengan eutektik garam nitrat (NaNO₃–KNO₃ atau turunannya) yang dimanfaatkan pada banyak aplikasi industri makanan, kimia, dan pengeringan. Justifikasi ekonominya sangat kuat: proses-proses seperti *steam generation* ringan, *sterilisasi*, dan *dyeing textile* membutuhkan suhu 180–250 °C, sehingga buffer LHTES pada 222 °C menutup gap antara *delivery* HTHP dan kebutuhan fluktuatif lini produksi.

Urgensi teknisnya semakin krusial ketika kita menyadari bahwa PCM konvensional memiliki konduktivitas termal rendah (umumnya 0,3–0,7 W/m·K pada garam nitrat). Tanpa rekayasa geometri *heat exchanger*, laju *charge/discharge* menjadi bottleneck yang menurunkan *round-trip efficiency*. Di sinilah konfigurasi *shell-and-tube* yang digunakan Toloza dkk. (2026) menawarkan tiga keuntungan: (i) kekompakan volumetrik tinggi, (ii) robusteksi struktural terhadap siklus termal, dan (iii) fleksibilitas penambahan *fins*, *metal foams*, atau *metal wool* sebagai enhanchement. Dalam konteks manajemen rantai pasok energi (*energy supply chain*), integrasi LHTES–HTHP memungkinkan pabrik beroperasi mendekati *load following* optimal, menurunkan puncak kebutuhan listrik dan sekaligus memanfaatkan listrik surplus (misalnya saat *wind/solar overgeneration*). Oleh karena itu, pengembangan model numerik transient dalam bahasa Modelica yang mampu memprediksi perilaku *charge–discharge* secara real-time menjadi kebutuhan engineering yang tidak bisa ditunda.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transient LHTES pada suhu fasa 222 °C memerlukan penyelesaian persamaan energi 2-D atau 1-D radial dengan mempertimbangkan pelepasan panas laten. Toloza, Payá, dan Barceló (2026) mengembangkan model dalam bahasa Modelica yang berbasis *acausal equation* — berbeda dengan pendekatan *procedural* pada bahasa Fortran/Matlab konvensional. Keunggulan pendekatan ini adalah kemampuan menangani *moving boundary* secara natural melalui metode kapasitas panas nyata (*apparent heat capacity method*).

### 2.1 Persamaan Energi pada PCM

Untuk domain PCM yang meleleh/membeku, persamaan difusi termal transient dalam koordinat aksial–radial adalah:

$$\rho_{PCM} \cdot c_{p,eff}(T) \cdot \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r} \left( r \cdot k_{PCM} \cdot \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z} \left( k_{PCM} \cdot \frac{\partial T}{\partial z} \right)$$

di mana kapasitas panas efektif didefinisikan sebagai:

$$c_{p,eff}(T) = c_{p,s} + \frac{L}{(T_{liq} - T_{sol})} \cdot f(T)$$

dengan $f(T)$ adalah fungsi *smoothing* (Gaussian atau sinusoidal) untuk menghindari diskontinuitas pada batas fasa:

$$f(T) = \frac{1}{2} \left[ 1 + \text{erf}\left( \frac{T - T_m}{\Delta T_{mush}} \right) \right]$$

dengan $T_m$ adalah suhu leleh eutektik (222 °C = 495,15 K) dan $\Delta T_{mush}$ adalah lebar zona *mushy* (tipikal 2–4 K).

### 2.2 Persamaan Energi pada Fluida Pemindah Panas (HTF)

Untuk HTF yang mengalir di dalam tube (minyak termal atau air bertekanan), persamaan energi 1-D *plug-flow* dengan asumsi *fully developed*:

$$\rho_{HTF} \cdot c_{p,HTF} \cdot A_c \cdot \frac{\partial T_{HTF}}{\partial t} + \dot{m} \cdot c_{p,HTF} \cdot \frac{\partial T_{HTF}}{\partial z} = h_i \cdot \pi D_i \cdot (T_{wall} - T_{HTF})$$

### 2.3 Kondisi Batas dan Kopling Termal

Kopling antardomain terjadi pada dinding tube, dengan tahanan termal total:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{D_i \ln(D_o/D_i)}{2 k_{wall}} + \frac{D_i}{D_o \cdot h_o}$$

dengan $h_i$ koefisien konveksi internal (HTF–dinding) dan $h_o$ koefisien konveksi eksternal (dinding–PCM). Bilangan Nusselt untuk HTF dalam tube mengikuti korelasi Gnielinski:

$$Nu = \frac{(f/8)(Re - 1000)Pr}{1 + 12{,}7\sqrt{f/8}(Pr^{2/3} - 1)}$$

dengan $f = (0{,}790 \ln Re - 1{,}64)^{-2}$.

### 2.4 Diskretisasi dan Implementasi Modelica

Toloza dkk. (2026) memanfaatkan *method-of-lines* dengan diskretisasi ruang menggunakan *finite volume* (volume hingga pada kisi aksial-radial). Bahasa Modelica secara otomatis menyusun sistem ODE/DAE yang diselesaikan oleh solver DASSL atau CVODE. Langkah waktu adaptif digunakan untuk menangkap *moving front* secara akurat tanpa membebani komputasi.

### 2.5 Metrik Kinerja Energi

Beberapa metrik kunci untuk evaluasi kuantitatif LHTES:

- **Stored energy** ($E$): $E = \int_{V_{PCM}} \rho_{PCM} \left[ c_{p,eff}(T)(T - T_{ref}) \right] dV$
- **Round-trip efficiency** ($\eta_{RT}$): $\eta_{RT} = E_{discharged} / E_{charged}$
- **Power capacity** ($\dot{Q}$): $\dot{Q} = \dot{m}_{HTF} \cdot c_{p,HTF} \cdot (T_{out} - T_{in})$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Toloza, Payá, dan Barceló (2026) ke dalam SOP pabrik mengikuti alur sistematis sebagai berikut.

### 3.1 Tahapan Prosedur

1. **Identifikasi Profil Beban Termal Pabrik.** Lakukan audit energi (ISO 50002) untuk memetakan profil suhu kebutuhan proses dan pola operasional harian/mingguan.
2. **Pemilihan PCM.** Validasi stabilitas termal PCM eutektik pada suhu 222 °C dengan TGA/DSC selama minimum 1000 siklus.
3. **Desain Geometri Shell-and-Tube.** Tentukan rasio $L/D$, jumlah tube, dan pitch. Aturan *Heil银色-white*: pitch triangular 1,25 × $D_o$ untuk mencegah *bypass flow*.
4. **Pemodelan Numerik dalam Modelica.** Bangun komponen PCM (1-D radial + aksial), HTF (1-D plug flow), dan dinding tube. Hubungkan via *thermal connector*.
5. **Kalibrasi & Validasi.** Bandingkan hasil simulasi dengan eksperimen *charge* isotermal dan *discharge* pada variasi laju alir HTF (0,5–5 L/menit).
6. **Integrasi dengan HTHP.** Pasang LHTES di antara output *condenser* HTHP dan input proses industri; gunakan *control valve* dan *bypass loop*.
7. **Commissioning & Performance Test.** Lakukan *performance test* sesuai ASHRAE Guideline 14 untuk verifikasi $\eta_{RT}$.

### 3.2 Diagram Alir Logika Pengisian (Charging)

```
[HTF_in_T] → [Cek T_HTF > T_m + ΔT]
   ├─ Ya  → [Alirkan ke tube bundle, debit = m_design]
   │         ├─ [Monitor фронт meleleh → jika < 80% leleh → debit nominal]
   │         └─ [Jika > 95% leleh → kurangi debit → mode maintenance]
   └─ Tidak → [Bypass ke proses industri langsung]
```

### 3.3 Arsitektur Sistem Instrumentasi

- Sensor Pt100 kelas A pada inlet/outlet HTF dan 12 titik dalam PCM (radial–aksial).
- *Flow meter* Coriolis pada loop HTF.
- *Data acquisition* NI CompactRIO dengan *sampling rate* ≥ 1 Hz.
- *SCADA* dengan protokol OPC-UA untuk integrasi ke sistem kendali HTHP.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain Unit LHTES

Untuk pabrik tekstil di Catalonia kapasitas termal 50 kW_th (kebutuhan proses *dyeing* pada 200 °C), unit LHTES dirancang dengan parameter berikut:

| Parameter | Nilai | Satuan |
|---|---|---|
| Suhu leleh PCM ($T_m$) | 222 | °C |
| PCM | Eutektik NaNO₃–KNO₃ | – |
| $\rho_{PCM}$ | 1900 | kg/m³ |
| $k_{PCM}$ | 0,55 | W/m·K |
| $c_{p,s}$ | 1,45 | kJ/kg·K |
| $c_{p,l}$ | 1,60 | kJ/kg·K |
| $L$ (panas laten) | 110 | kJ/kg |
| Diameter tube ($D_o$) | 25,4 | mm |
| Panjang tube ($L$) | 2,0 | m |
| Jumlah tube | 36 | – |
| HTF | Minyak termal (Therminol 66) | – |
| $\dot{m}_{HT