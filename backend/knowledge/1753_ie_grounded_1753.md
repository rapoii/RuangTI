# 1753 — Modelisasi Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 25–37% dari emisi CO₂ global, dengan proporsi signifikan berasal dari permintaan *process heat* (panas proses) pada rentang suhu menengah-tinggi (100–400 °C) yang secara historis dipasok oleh boiler bahan bakar fosil dan burner gas alam (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi *process heat* membutuhkan dua pilar teknologi simultan: (i) **High-Temperature Heat Pump (HTHP)** sebagai *heat supply* listrik-berbasis efisiensi tinggi, dan (ii) **Thermal Energy Storage (TES)** sebagai *buffer* termal yang memungkinkan operasi HTHP pada kondisi *steady-state* optimum walaupun permintaan proses bersifat fluktuatif (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Di antara arsitektur TES, *Latent Heat Thermal Energy Storage* (LHTES) berbasis *Phase Change Material* (PCM) menarik secara industri karena densitas energi volumetriknya 3–5× lebih tinggi dibanding *sensible-only* storage, dan beroperasi pada suhu mendekati isotermal — karakteristik yang sangat diinginkan untuk integrasi dengan HTHP yang memiliki *lift* termal terbatas. Namun demikian, konduktivitas termal PCM garam/lebur pada umumnya rendah (0,5–2 W/m·K), sehingga geometri *heat exchanger*, strategi enkapsulasi, dan penggunaan *metal foam/wool* menjadi variabel desain kritis (Toloza et al., 2026).

Toloza, Payá, dan Barceló (2026) mengangkat persoalan desain ini secara spesifik: mereka membangun model numerik transien pada bahasa **Modelica** untuk unit LHTES vertikal konfigurasi *shell-and-tube* yang menggunakan **eutectic nitrat** dengan titik lebur ~222 °C, dirancang untuk pasangan operasi dengan HTHP. Suhu 222 °C dipilih strategis karena berada dalam jangkauan *lift* HTHP generasi baru (siklus trans-kritis CO₂, HFO, atau *zeotropic mixture*) sekaligus relevan untuk banyak aplikasi industri (pengeringan, sterilisasi, *steam generation*). Kontribusi utama paper ini adalah penyediaan *digital twin* termal yang memungkinkan evaluasi desain *shell-and-tube*, prediksi durasi *charge/discharge*, dan identifikasi *bottleneck* termal — semuanya tanpa harus membangun prototipe fisik penuh. Xu dan Wang (2024) melengkapi konteks ini dengan menggarisbawahi bahwa kombinasi HTHP+TES bukan sekadar opsi, melainkan prasyarat untuk dekarbonisasi termal industri yang layak secara Levelized Cost of Heat (LCOH) (Xu & Wang, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi pada PCM dengan Perubahan Fasa

Untuk PCM dalam *encapsulation* tabung, Toloza et al. (2026) menerapkan **enthalpy method** untuk menangani *moving phase boundary* (masalah Stefan). Variabel dependen adalah entalpi spesifik $h$ dengan hubungan $T(h)$ melalui kurva *apparent specific heat*:

$$c_{p}^{app}(T) = c_{p,s} + L \cdot \frac{1}{\sqrt{2\pi}\,\sigma} \exp\left[-\frac{(T - T_m)^2}{2\sigma^2}\right]$$

di mana $c_{p,s}$ adalah kapasitas panas sensible, $L$ adalah laten peleburan, $T_m$ adalah suhu lebur, dan $\sigma$ adalah lebar transisi fasa Gaussian. Persamaan transien 1D radial di sepanjang PCM menjadi:

$$\rho \, \frac{\partial h}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( k(T) \, r \frac{\partial T}{\partial r} \right)$$

dengan syarat batas Dirichlet/Newtonian pada permukaan dalam tabung:

$$-k_{PCM}\frac{\partial T}{\partial r}\bigg|_{r=r_i} = h_{HTF}(T_{HTF} - T_{PCM})$$

### 2.2 Kapasitas Penyimpanan Energi Unit

Energi total yang tersimpan pada PCM dari suhu referensi $T_{ref}$ hingga suhu muat penuh $T_{ch}$:

$$E_{storage} = m_{PCM}\left[ \int_{T_{ref}}^{T_{m}} c_{p,s}\,dT + L + \int_{T_{m}}^{T_{ch}} c_{p,l}\,dT \right]$$

Untuk eutectic nitrat (misalnya sistem $\text{KNO}_3\text{–NaNO}_3$ dengan $T_m \approx 222$ °C, $L \approx 100$ kJ/kg, $c_p \approx 1,5$ kJ/kg·K), energi tersimpan per kg:

$$E_{spec} = 1{,}5 \cdot (222-150) + 100 + 1{,}6 \cdot (250-222) \approx 108 + 100 + 44{,}8 = 252{,}8 \text{ kJ/kg}$$

### 2.3 Laju Discharge dan Heat Transfer Enhancement

Laju pelepasan kalor sesaat $\dot{Q}_{disch}$ pada *effective NTU*:

$$\dot{Q}_{disch} = \dot{m}_{HTF} \cdot c_{p,HTF} \cdot \varepsilon \cdot (T_{PCM} - T_{HTF,in})$$

di mana *effectiveness* $\varepsilon$ untuk *shell-and-tube* dengan PCM internal dipengaruhi oleh *fin efficiency* dan bilangan Reynolds HTF. Toloza et al. (2026) menyoroti bahwa tanpa *thermal enhancement* (misal *metal wool* atau *fins*), laju discharge menjadi *bottleneck* desain (Toloza et al., 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

### 2.4 Kopling dengan HTHP — Parameter Operasi

Untuk HTHP, *Coefficient of Performance* pada suhu lorong panas $T_{hot}$ dan sumber $T_{src}$:

$$COP_{HTHP} = \frac{T_{hot}}{T_{hot} - T_{src}} \cdot \eta_{Carnot,loss}$$

Xu dan Wang (2024) menunjukkan bahwa integrasi LHTES memungkinkan HTHP beroperasi pada $T_{hot}$ yang lebih rendah (karena *storage* menerima kalor secara isotermal), sehingga $COP$ naik dan LCOH turun (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)).

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Toloza, Payá, dan Barceló (2026) mengusulkan alur rekayasa berikut untuk implementasi unit LHTES 222 °C yang terintegrasi HTHP:

**Tahap 1 — Karakterisasi PCM.** Kalorimetri DSC untuk memverifikasi $T_m$, $L$, dan *cycling stability* minimal 1000 siklus. Pengujian konduktivitas termal pada fasa padat dan cair.

**Tahap 2 — Desain Konfigurasi Shell-and-Tube.** Parameter desain kunci:
- Diameter tabung dalam $d_i = 20$–$50$ mm
- *Pitch* triangular $P_t = 1{,}25 d_o$
- Panjang efektif $L = 1{,}5$–$3$ m
- Rasio volume PCM/HTF $\geq 0{,}7$ untuk densitas energi optimal

**Tahap 3 — Pemodelan Modelica.** Bangun komponen:
- `PCM_ShellSide` dengan discretisasi radial 20–40 node
- `HTF_TubeSide` dengan korelasi Gnielinski untuk $Nu$
- `Connector_Temp` untuk kopling termal antarkomponen
- Validasi terhadap data eksperimen prototipe

**Tahap 4 — Simulasi Skenario.** *Charge cycle* (HTHP mentransfer kalor ke PCM), *discharge cycle* (PCM melepas kalor ke proses), dan *hold mode* (isolasi termal). Variasi *mass flow rate* HTF dan suhu inlet.

**Tahap 5 — Analisis Sensitivitas & Optimasi.** Identifikasi parameter paling berpengaruh terhadap *discharge duration* dan *stratification efficiency*.

**SOP Pemeliharaan (berdasarkan standar industri Eropa EN 12953 untuk bejana tekan):**
1. Inspeksi visual korosi shell setiap 12 bulan
2. *Thermography* untuk mendeteksi *void* atau dekomposisi PCM
3. *Pressure test* HTF loop pada 1,5× tekanan kerja setiap 5 tahun
4. Penggantian PCM jika degradasi $L > 10\%$ dari nilai awal

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Unit LHTES 222 °C untuk memasok panas proses pada pabrik makanan dengan kebutuhan 200 kWh_th per shift (8 jam). Asumsi dimensi dan material berdasarkan praktik rekayasa pada Toloza et al. (2026).

### Input Parameter

| Parameter | Nilai | Satuan |
|---|---|---|
| Massa PCM (eutectic KNO₃–NaNO₃) | $m_{PCM} = 2.850$ | kg |
| Laten peleburan $L$ | 100 | kJ/kg |
| $c_{p,s}$ / $c_{p,l}$ | 1,5 / 1,6 | kJ/(kg·K) |
| $T_m$ | 222 | °C |
| $T_{ref}$ (initial) | 150 | °C |
| $T_{ch}$ (full charge) | 250 | °C |
| HTF (sintetik oil Therminol VP-1) | $c_{p,HTF} = 2{,}3$ | kJ/(kg