# 2058 — Ekstraksi Superkritikal CO₂ untuk Senyawa Bioaktif Tanaman: Optimasi Proses, Analisis Kromatografi, dan Rekayasa Sistem Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Supercritical fluid extraction of cannabinoids and their analysis by liquid chromatography and supercritical fluid chromatography: A short review
**Jurnal & Sitasi Utama:** Matjaž Rantaša, Gal Slaček, Željko Knez (2024). *Journal of CO₂ Utilization*. DOI: [https://doi.org/10.1016/j.jcou.2024.102907](https://doi.org/10.1016/j.jcou.2024.102907)
**Sitasi Pendukung:** Ana Jurinjak Tušek, Dunja Šamec, Anita Šalić (2022). *Applied Sciences*. DOI: [https://doi.org/10.3390/app122211865](https://doi.org/10.3390/app122211865)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi senyawa bioaktif dari biomassa tumbuhan mengalami transformasi fundamental dalam dua dekade terakhir, didorong oleh tiga kekuatan utama: (1) peningkatan regulasi lingkungan yang melarang pelarut organik toksik seperti n-heksana dan diklorometana dalam produk farmasi serta pangan, (2) permintaan pasar global terhadap cannabinoid dan flavonoid berkualitas farmasi yang bebas residu pelarut, serta (3) kebutuhan akan efisiensi energi dan keberlanjutan proses. Rantaša, Slaček, dan Knez (2024) dalam tinjauan mereka di *Journal of CO₂ Utilization* menegaskan bahwa ekstraksi fluida superkritikal (*Supercritical Fluid Extraction*, SFE) telah muncul sebagai salah satu pendekatan paling menarik untuk ekstraksi cannabinoid karena sifatnya yang "tunable", ramah lingkungan, dan selektif terhadap target metabolit.

Konteks ekonomi makro menunjukkan urgensi rekayasa yang kuat. Pasar cannabinoid global diproyeksikan menembus lebih dari USD 50 miliar pada 2030 dengan CAGR > 15%, sementara pasar flavonoid farmasi serta nutraceutical tumbuh pada laju 8–10% per tahun. Kedua segmen ini mensyaratkan kemurnian tinggi, traceability, dan sertifikasi *Good Manufacturing Practice* (GMP). Metode konvensional berbasis Soxhlet, maserasi, atau perkolasi dengan etanol/air tidak hanya meninggalkan residu pelarut yang sulit dihilangkan tetapi juga mendegradasi termolabil cannabinoid seperti THCA dan CBDA. Sebaliknya, CO₂ superkritikal beroperasi pada suhu mendekati titik kritisnya ($T_c = 31{,}1\ ^\circ\text{C}$, $P_c = 73{,}8\ \text{bar}$) sehingga menjaga integritas fitokimia.

Di sisi Engineering Industri, keputusan pemilihan proses bukan sekadar persoalan kimia, melainkan masalah optimasi sistem multi-variabel yang melibatkan neraca massa, neraca energi, analisis biaya siklus hidup (LCA), dan kapasitas produksi. Tušek, Šamec, dan Šalić (2022) dalam *Applied Sciences* menyoroti bahwa teknik modern termasuk SFE, ekstraksi berbantuan gelombang mikro (MAE), ultrasonik (UAE), dan *enzyme-assisted extraction* (EAE) harus dievaluasi tidak hanya dari sisi yield tetapi dari konsumsi pelarut, waktu proses, konsumsi energi spesifik, dan jejak karbon. Tulisan ini menegaskan bahwa keputusan "optimasi atau tidak" merupakan keputusan strategis yang harus diturunkan dari analisis interaksi antar-variabel secara paralel, bukan pendekatan satu-variabel-pada-suatu-waktu (OFAT) yang sudah usang.

Dalam kerangka *Industrial Engineering and Systems*, modul 2058 ini memposisikan SFE-CO₂ sebagai kasus studi integral yang menggabungkan perpindahan massa, termodinamika fluida superkritikal, optimasi proses (RSM/DoE), serta keputusan investasi modal (CAPEX/OPEX) pada fasilitas ekstraksi bioaktif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Fluida Superkritikal

CO₂ berada dalam keadaan superkritikal ketika suhu dan tekanannya melebihi titik kritis secara simultan. Pada kondisi ini, densitas fluida mendekati densitas cair (memungkinkan pelarutan analit) sementara viskositas dan difusivitasnya menyerupai gas (memungkinkan penetrasi cepat ke dalam matriks padat). Sifat "tunable" ini dimodelkan melalui parameter reduksi:

$$T_r = \frac{T}{T_c}, \qquad P_r = \frac{P}{P_c}$$

Densitas CO₂ superkritikal pada berbagai kondisi proses dihitung menggunakan persamaan keadaan (Equation of State, EOS). Persamaan Redlich-Kwong yang dimodifikasi dengan faktor α untuk komponen polar banyak diaplikasikan:

$$P = \frac{RT}{V_m - b} - \frac{a\,\alpha(T)}{V_m(V_m + b)}$$

dengan $a = 0{,}42748\,R^2T_c^2/P_c$, $b = 0{,}08664\,RT_c/P_c$, dan $\alpha(T) = [1 + m(1 - \sqrt{T_r})]^2$.

### 2.2 Model Kelarutan Chrastil

Kelarutan analit (cannabinoid/flavonoid) dalam CO₂ superkritikal dimodelkan oleh Chrastil (1982) dan tetap menjadi model empiris yang paling banyak dikutip hingga hari ini:

$$\ln(S) = k\,\ln(\rho) + \frac{a}{T} + b$$

di mana $S$ adalah kelarutan (g solute per g CO₂), $\rho$ adalah densitas CO₂ (kg/m³), $T$ adalah suhu absolut (K), sedangkan $k$, $a$, $b$ adalah konstanta empiris yang spesifik untuk setiap sistem solute–CO₂. Rantaša et al. (2024) menekankan bahwa konstanta $k$ merepresentasikan jumlah molekul CO₂ yang mengelilingi satu molekul solute dalam kompleks asosiasi, dan parameter ini harus dikalibrasi ulang untuk setiap kombinasi cannabinoid target.

### 2.3 Neraca Massa Proses SFE

Untuk reaktor ekstraksi *semi-batch* dengan laju alir CO₂ $\dot{m}_{CO_2}$ (kg/jam), yield kumulatif didefinisikan:

$$Y(\%) = \frac{m_{extract}}{m_{raw\,material}} \times 100\%$$

Laju ekstraksi sesaat mengikuti model *Broken Plus Intact Cells* (Tan & Liou, 1988) yang membedakan fase konstan (ekstraksi sel terbuka) dan fase menurun (ekstraksi sel utuh):

$$e(t) = q_0\left[1 - \exp\left(-\frac{t}{t_m}\right)\right] \cdot \mathbb{1}_{t \le t_m} + \frac{q_0\,t_m}{t}\left[1 - \exp\left(-\frac{t}{t_m}\right)\right] \cdot \mathbb{1}_{t > t_m}$$

di mana $q_0$ adalah laju ekstraksi awal dan $t_m$ adalah waktu transisi.

### 2.4 Fungsi Objektif Optimasi (Response Surface Methodology)

Tušek et al. (2022) menyatakan bahwa interaksi antar-variabel hanya dapat diungkap melalui desain eksperimen multivariat. Model RSM dengan polinomial orde dua menjadi standar industri:

$$Y = \beta_0 + \sum_{i=1}^{k}\beta_i x_i + \sum_{i=1}^{k}\beta_{ii}x_i^2 + \sum_{i<j}\beta_{ij}x_i x_j + \varepsilon$$

dengan $x_i$ adalah variabel proses (P, T, fraksi co-solvent, laju alir, ukuran partikel), $\beta$ adalah koefisien regresi, dan $\varepsilon$ adalah residual. Validasi model menggunakan *lack-of-fit test* dan $R^2_{adj}$.

### 2.5 Analisis Kromatografi

Untuk karakterisasi campuran cannabinoid, Rantaša et al. (2024) mengevaluasi dua metode utama: HPLC dengan detektor UV/DAD atau MS, dan SFC. Resolusi kromatografis mengikuti persamaan Purnell:

$$R_s = \frac{\sqrt{N}}{4}\,\frac{\alpha - 1}{\alpha}\,\frac{k'}{1 + k'}$$

di mana $N$ adalah jumlah plat teoretik, $\alpha$ adalah selektivitas, dan $k'$ adalah faktor retensi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SFE-CO₂ dalam skala industri mengikuti SOP yang distandarisasi sebagai berikut:

**Tahap 1 — Preparasi Biomassa.** Material tumbuhan (bunga, daun, atau biomassa hemp) dikeringkan pada suhu $\leq 40\ ^\circ\text{C}$ hingga kadar air $< 10\%$ untuk mencegah hidrolisis cannabinoid. Penghalusan dilakukan hingga ukuran partikel $0{,}3\text{–}0{,}8\ \text{mm}$ (ayakan 20–50 mesh). Ukuran partikel yang terlalu halus menyebabkan *channeling* dan kompaksi pada kolom; terlalu kasar menurunkan luas permukaan kontak.

**Tahap 2 — Pemuatan Ekstraktor.** Biomassa dimuat ke dalam vessel ekstraktor dengan *packing density* $0{,}3\text{–}0{,}5\ \text{g/cm}^3$. Distributor gas diinstal di bagian bawah untuk menjamin aliran plug-flow.

**Tahap 3 — Kondisi Proses (berdasarkan domain Rantaša et al., 2024):**

| Parameter | Rentang Operasional | Nilai Tipikal |
|-----------|---------------------|---------------|
| Tekanan (P) | 100–350 bar | 250 bar |
| Suhu (T) | 35–70 °C | 50 °C |
| Laju CO₂ | 0,5–5 L/menit | 2 L/menit |
| Co-solvent | 0–15% mol etanol | 5% |
| Rasio S/F | 20–100 | 40 |

**Tahap 4 — Pemisahan (*Separation*).** Aliran CO₂ + ekstrak memasuki satu atau dua vessel separator (S1, S2) bertekanan rendah (40–60 bar) tempat cannabinoid mengendap karena penurunan drastis daya larut. S1 menangkap fraksi berat (waxes, klorofil), S2 menangkap cannabinoid target.

**Tahap 5 — Analisis Kuantitatif.** Ekstrak dianalisis dengan HPLC (kolom C18, fase gerak asetonitril:air + 0,1% asam format, gradien) untuk cannabinoid asam dan netral tanpa derivatisasi, atau dengan SFC untuk analisis yang lebih cepat dengan konsumsi pelarut lebih rendah (Rantaša et al., 2024).

**Tahap 6 — Depressurisasi & Daur Ulang CO₂.** CO₂ di-kondensasikan, dikompresi kembali, dan di-recycle untuk menurunkan OPEX hingga 30–40%.

**Diagram Alir Proses (Deskripsi):**

```
Biomassa → Grinding → Vessel Ekstraktor (P, T) 
        → [CO₂ + Co-solvent] → Mixer 
        → Separator 1 (60 bar) → Separator 2 (40 bar) 
        → Ekstrak → HPLC/SFC 
        → CO₂ → Recycle → Kompresor → Ekstraktor (loop tertutup)
```

**Integrasi SOP sesuai standar:**
- ASTM D7775 — *Standard Test Method for Extraction of CBD and THC by SFE*
- ISO 17059 — *Oilseeds — Determination of content by SFE*
- cGMP / EU GMP Annex 1 untuk fasilitas farmasi

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Ekstraksi CBD dari Biomassa Hemp Skala Pilot 50 L

**Spesifikasi Input:**

- Massa biomassa hemp kering: $m_{raw} = 10\ \text{kg}$ (kadar CBD awal 1,8% berat)
- Kandungan air biomassa: 8%
- Tekanan ekstraksi: $P = 250\ \text{bar}$
- Suhu ekstraksi: $T = 323{,}15\ \text{K}\ (50\ ^\circ\text{C})$
- Laju alir CO