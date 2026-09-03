# 1497 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25% dari konsumsi energi final global dan sekitar 30% emisi CO₂ terkait energi, dengan lebih dari separuh kebutuhan tersebut berupa **panas proses** (process heat) pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Decarbonisasi panas proses industri—melalui elektrifikasi termal berbasis pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP)—menjadi salah satu strategi transisi energi paling kritikal abad ini. Namun, profil beban termal industri bersifat sangat fluktuatif: lonjakan permintaan pada shift produksi, periode idle pada周末, dan kekangan tarif listrik dinamis menuntut adanya penyangga termal (*thermal buffer*) yang dapat melepas panas secara *on-demand*.

Dalam konteks inilah Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengembangkan unit **Latent Heat Thermal Energy Storage (LHTES)** berbasis **Phase Change Material (PCM)** eutektik yang beroperasi di sekitar **222°C**. Unit ini dirancang sebagai pasangan integratif HTHP untuk aplikasi panas proses industri skala menengah–besar (misal: industri kimia fine, makanan & minuman, tekstil pewarnaan, pulp & paper). Dibandingkan *sensible heat storage* (SHS) konvensional—yang mengandalkan perubahan suhu fluida—LHTES menawarkan densitas energi volumetrik 5–10 kali lebih tinggi karena memanfaatkan **panas laten fusi/padatan** pada suhu quasi-konstan.

Permasalahan mendasar PCM adalah **konduktivitas termal rendah** (tipikal 0,2–1,0 W/m·K untuk garam dan paraffin), yang menyebabkan waktu charge/discharge panjang dan degradasi gradien suhu besar. Untuk menjawab hal ini, paper Toloza et al. (2026) mengusulkan konfigurasi **shell-and-tube vertikal** yang menawarkan tiga keunggulan struktural: (1) *compactness* tinggi melalui geometri tabung konsentris; (2) **robustness struktural** untuk operasi siklik tekanan internal HTHP; serta (3) kapasitas integrasi *thermal enhancement devices* (fin, metal foam, metal wool). Unit dimodelkan secara **transien** dalam bahasa **Modelica**—sebuah *object-oriented equation-based* language yang mampu menangani dinamika multi-domain (termal-hidrolik-fasa) secara simultan.

Implikasi industrial engineering dari integrasi HTHP+LHTES sangat strategis: memungkinkan **demand-side flexibility** pada industri proses, **peak shaving** konsumsi listrik, **storage-assisted heat pump** untuk menaikkan COP sistem di luar ambang Carnot praktis, serta dekarbonisasi langsung pada *hard-to-abate sectors*. Xu & Wang (2024) menekankan bahwa kombinasi HTHP dengan TES termal akan menjadi *keystone technology* untuk memenuhi target *net-zero emission* 2050 di sektor industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Penggovernan Energi (Persamaan Panas Transien)

Model numerik transien Toloza et al. (2026) diselesaikan pada domain 2D-axisimetrik untuk setiap penampang shell-and-tube. Persamaan konservasi energi pada PCM adalah:

$$\rho_{PCM} \, c_{p,PCM}^{\text{eff}}(T) \, \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{PCM}^{\text{eff}}(T) \, r \, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left( k_{PCM}^{\text{eff}}(T) \, \frac{\partial T}{\partial z}\right)$$

di mana $\rho$ adalah densitas, $c_p^{\text{eff}}$ kapasitas panas efektif, $k^{\text{eff}}$ konduktivitas termal efektif, dan $(r,z)$ koordinat silindris. Pada dinding tabung (*tube wall*), persamaan konduksi mengikuti:

$$\rho_w \, c_{p,w} \, \frac{\partial T_w}{\partial t} = \frac{k_w}{r} \frac{\partial}{\partial r}\left( r \frac{\partial T_w}{\partial r}\right)$$

### 2.2 Formulasi Kapasitas Panas Efektif (*Effective Heat Capacity Method*)

Untuk menghindari diskontinuitas pada *moving solid-liquid interface* (problem Stefan klasik), paper menerapkan metode **enthalpy/capacity** dengan mendefinisikan $c_p^{\text{eff}}$ yang menginkorporasi panas laten dalam jendela suhu transisi $[\,T_s - \Delta T/2,\; T_s + \Delta T/2\,]$:

$$c_p^{\text{eff}}(T) = c_{p,s} + \frac{L}{\Delta T} \cdot \exp\!\left(-\frac{(T - T_s)^2}{(\Delta T/2)^2}\right)$$

dengan $L$ panas laten spesifik (J/kg), $T_s$ suhu solidifikasi/leleh, dan $\Delta T$ lebar jendela fasa (tipikal 1–5 K). Distribusi Gaussian mensimulasikan perilaku fasa near-isotermal.

### 2.3 Bilangan-Bilangan Dimensional Kunci

Untuk analisis kuantitatif perilaku unit, tiga bilangan tak berdimensi berikut menjadi parameter desain kritikal:

**Bilangan Stefan** (rasio panas sensible terhadap laten):
$$Ste = \frac{c_{p,s}(T_h - T_s)}{L}$$

**Bilangan Fourier** ( ukuran waktu difusif):
$$Fo = \frac{\alpha \, t}{R_c^2}, \quad \alpha = \frac{k_{PCM}}{\rho_{PCM} \, c_{p,s}}$$

dengan $R_c$ jari-jari karakteristik casing PCM.

**Bilangan Biot** (rasio hambatan konveksi internal terhadap konduksi):
$$Bi = \frac{h_i \, R_t}{k_{PCM}}$$

dengan $h_i$ koefisien konveksi internal HTF dan $R_t$ jari-jari luar tabung.

### 2.4 Perpindahan Panas Konveksi HTF dan Dinding Tabung

Untuk fluida pemanas/pendingin (HTF, *heat transfer fluid*) di dalam tabung, digunakan korelasi Dittus-Boelter untuk aliran turbulen:

$$Nu = 0{,}023 \, Re^{0{,}8} \, Pr^{0{,}4}$$

sehingga koefisien konveksi internal:
$$h_i = \frac{Nu \, k_{HTF}}{D_h}$$

Untuk sisi shell (PCM), perpindahan panas didominasi konduksi diperkuat dengan *metal wool/foam*, dengan $k_{PCM}^{\text{eff}} = \varepsilon \, k_{PCM} + (1-\varepsilon) \, k_{\text{metal}}$ sesuai model parallel/series.

### 2.5 Fraksi Leleh (*Melt Fraction*)

Parameter operasional utama yang dilaporkan Toloza et al. (2026) adalah fraksi fasa cair:

$$f_{\ell}(t) = \frac{1}{V_{PCM}} \int_{V_{PCM}} \mathbf{1}_{\{T(\mathbf{x},t) > T_s\}} \, dV$$

yang mengindikasikan SOC (*State of Charge*) termal unit. Kapasitas energi tersimpan sesaat adalah:

$$E_{\text{stored}}(t) = \int_{V_{PCM}} \rho_{PCM}\!\left[\int_{T_{\text{ref}}}^{T(\mathbf{x},t)} c_p^{\text{eff}}(\tau)\, d\tau\right] dV$$

### 2.6 Kapasitas dan Energi Unit

Kapasitas termal nominal unit LHTES skala pilot (Toloza et al., 2026) berada pada orde:

$$E_{\text{nom}} = m_{PCM} \cdot L \approx 50{-}200 \text{ kWh}_{\text{th}}$$

yang bersesuaian dengan densitas energi volumetrik $\sim 150{-}250$ kWh/m³ untuk garam eutektik di sekitar 222°C.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem HTHP + LHTES

Sistem integratif tersusun atas tiga subsistem:

1. **HTHP siklus kompresi uap** dengan refrigeran alami (mis. CO₂, R1234ze, NH₃) atau sintetis HFO, mensuplai air/sintetik termal oil pada 180–250°C.
2. **Unit LHTES shell-and-tube vertikal** sebagai penyangga termal.
3. **Loop distribusi panas proses** ke end-user (reaktor, dryer, evaporator).

### 3.2 SOP Numerik Implementasi Modelica

Implementasi model transien di Modelica mengikuti langkah prosedural berikut:

1. **Definisi medium dan properti termodinamika** PCM eutektik (fungsi $c_p(T)$, $k(T)$, $\rho(T)$, $\mu(T)$) sebagai *Medium model*.
2. **Discretisasi domain** dengan volume-of-fluid (VOF) atau finite volume 2D-axisimetrik; tipikal mesh 50×200 sel.
3. **Komposisi balok (compositional approach):** wall konduktif → PCM (dengan effective heat capacity) → HTF konvektif.
4. **Pengaturan kondisi batas:** inlet HTF ($T_{\text{in}}(t)$, $\dot{m}_{HTF}$), tekanan operasi, dan *heat loss* ke ambient.
5. **Integrasi waktu** dengan solver DASSL atau CVODE (toleransi relatif 1e-6).
6. **Validasi** terhadap benchmark analitis (problem Stefan, Neumann solution) dan eksperimen literatur.

### 3.3 SOP Operasional Industri

Untuk aplikasi industri, prosedur operasi terstandarisasinya adalah:

**Fase Charging (HTHP → LHTES):**
- Nyalakan HTHP pada mode *heat-only*, set $T_{\text{cond}}$ = 230°C, $\dot{m}_{\text{HTF}}$ = 2–5 kg/s.
- HTF masuk tabung, melepas panas ke PCM; pantau $f_\ell(t)$ hingga target 0,8–0,95.
- Modulasi HTHP dilakukan secara PID berdasarkan $T_{\text{out,HTF}}$ untuk mencegah *thermal shock*.

**Fase Holding (Standby):**
- Isolasi loop HTF; aktifkan back-up heater listrik atau nyalakan-mode *drift* rendah pada HTHP untuk mempertahankan $T_{PCM}$ di atas $T_s$.

**Fase Discharging (LHTES → Proses):**
- Buka katup by-pass, alirkan HTF kedua (atau HTF balik) pada $T_{\text{in}} < T_s$ untuk mengekstrak panas laten.
- Kontrol debit mengikuti profil beban proses; berhenti saat $f_\ell < 0{,}1$.

### 3.4 Standar dan Kode Referensi

Implementasi harus mengacu pada: **ISO 13790** (kinerja energi bangunan—metodologi), **ASHRAE Handbook—HVAC Applications** bab TES, **DIN EN 14511** (pompa kalor), dan **EED Annex 18 / Annex 23** (prosedur pengujian TES). Sertifikasi keselamatan mengikuti **PED 2014/68/EU** untuk komponen bertekanan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Unit LHTES Pilot

Sebuah unit LHTES terintegrasi HTHP untuk industri makanan/minuman (sterilisasi UHT) dirancang dengan parameter berikut, yang konsisten dengan paper Toloza et al. (2026):

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| PCM eutektik | – | Garam nitrat (mis. NaNO₃–KNO₃) | – |
| Suhu fasa transisi | $T_s$ | 222 | °C |
| Panas laten | $L$ | 110 | kJ/kg |
| Densitas PCM | $\rho_{PCM}$ | 1900 | kg/m³ |
| Konduktivitas PCM | $k_{PCM}$ | 0,65 | W/m·K |
| Kapasitas panas (padat) | $c_{p,s}$ | 1500 | J/kg·K |
| Jari-jari luar tabung | $R_t$ | 0,015 | m |
| Jari-jari dalam tabung | $r_t$ | 0,012 | m |
| Jari-jari shell | $R_s$ | 0,080 | m |
| Tinggi unit | $H$ | 1,5 | m |
| Massa PCM | $m_{PCM}$ | $\rho \cdot