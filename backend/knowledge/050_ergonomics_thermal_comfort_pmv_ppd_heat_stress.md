# Modul Riset Ilmiah: Ergonomi Lingkungan Fisik - Kenyamanan Termal (PMV & PPD) & Heat Stress
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- ISO 7730:2005. *Ergonomics of the thermal environment — Analytical determination and interpretation of thermal comfort using calculation of the PMV and PPD indices*.
- Fabbri, K. (2024). *The indoor thermal comfort indexes PMV and PPD*. In Thermal Comfort Perception. Springer.
- Li, J., Wu, L., & Chen, H. (2023). *Analysis of thermal comfort and threshold range of airflow supply parameters for different types of work in humid-heat coal mines*. Case Studies in Thermal Engineering, Elsevier. DOI: [10.1016/j.csite.2023.102874](https://doi.org/10.1016/j.csite.2023.102874).
- Abbasi, M., Golbabaei, F., Yazdanirad, S., dkk. (2024). *Validity of ten analytical heat stress indices in predicting the physiological parameters of people under various occupational and meteorological conditions*. International Journal of Biometeorology, Springer.
- Cabral, N., Simões, H., & de Figueiredo, J. P. (2023). *Thermal Comfort Assessment in a Food Industry (SIA) – Case Study*. Occupational and Environmental Safety and Health IV, Springer.

---

## 1. Ergonomi Lingkungan & Kenyamanan Termal
Kenyamanan termal (Thermal Comfort) didefinisikan oleh ASHRAE 55 sebagai "kondisi pikiran yang mengekspresikan kepuasan terhadap lingkungan termal". Dalam Teknik Industri, menjaga kenyamanan termal pekerja sangat krusial karena suhu ekstrem tidak hanya menurunkan produktivitas, tetapi juga memicu dehidrasi, kelelahan, dan kecelakaan kerja (*Heat Stress / Heat Stroke*).

Keseimbangan panas tubuh manusia diatur oleh persamaan termodinamika dasar:
$$ M - W = (C + R + E_k) + (C_{res} + E_{res}) \pm S $$
Di mana:
- $M$: Laju metabolisme basal tubuh (Tergantung beban kerja fisik, misal 1.2 met untuk duduk, 2.0 met untuk kerja berdiri/merakit). $1 \text{ met} = 58.2 \text{ W/m}^2$.
- $W$: Usaha mekanis efektif yang dilakukan.
- $C, R, E_k$: Pertukaran panas melalui konveksi, radiasi, dan penguapan keringat di kulit.
- $C_{res}, E_{res}$: Pertukaran panas pernapasan.
- $S$: Penyimpanan panas tubuh (harus $S=0$ untuk kenyamanan).

---

## 2. Model PMV & PPD (Standar ISO 7730 / Fanger's Model)
Dikembangkan oleh P.O. Fanger, model ini merupakan kerangka kerja kuantitatif untuk memprediksi tingkat kenyamanan termal sekelompok pekerja dalam lingkungan terkondisi (ber-AC maupun alami). Model ini bergantung pada **6 parameter utama**:
1. **Faktor Lingkungan Fisik (Terukur):** Suhu Udara ($t_a$), Kelembaban Relatif (RH), Kecepatan Angin ($v_a$), dan Suhu Radian Rata-rata ($t_r$).
2. **Faktor Personal (Subjektif):** Laju Metabolisme/Tingkat Aktivitas ($M$ dalam unit *met*) dan Insulasi Pakaian ($I_{cl}$ dalam unit *clo*). $1 \text{ clo} = 0.155 \text{ m}^2\text{K/W}$.

### A. Predicted Mean Vote (PMV)
PMV adalah indeks yang memprediksi nilai rata-rata penilaian subjektif sekelompok orang pada skala sensasi termal ASHRAE 7 poin:
- $+3$ : Sangat Panas (Hot)
- $+2$ : Hangat (Warm)
- $+1$ : Sedikit Hangat (Slightly Warm)
- $\phantom{+}0$ : Netral (Neutral) -> *Target Optimal*
- $-1$ : Sedikit Sejuk (Slightly Cool)
- $-2$ : Sejuk (Cool)
- $-3$ : Sangat Dingin (Cold)

### B. Predicted Percentage of Dissatisfied (PPD)
PPD adalah indeks kuantitatif yang memprediksi persentase orang yang akan merasa **tidak puas** dengan lingkungan termal (yaitu mereka yang memvoting di luar batas $-1, 0, +1$). Karena preferensi manusia berbeda-beda, bahkan pada PMV $= 0$ (sempurna), PPD tidak pernah 0%, melainkan 5%.
Hubungan PPD dengan PMV bersifat polinomial kuadratik asimetris:
$$ \text{PPD} = 100 - 95 \cdot \exp\left(-0.03353 \cdot \text{PMV}^4 - 0.2179 \cdot \text{PMV}^2\right) $$

**Batas Standar ISO 7730:**
Kondisi lingkungan kerja diklasifikasikan baik jika berada di rentang $-0.5 < \text{PMV} < +0.5$ dengan nilai $\text{PPD} < 10\%$.

---

## 3. Heat Stress Indices (Indeks Tekanan Panas Kerja)
Untuk pekerjaan industri di lingkungan luar ruangan atau dekat tungku pembakaran tinggi (seperti pengecoran logam), model PMV-PPD tidak lagi cukup. Parameter fisiologis dan indeks tekanan panas yang digunakan antara lain:
- **WBGT (Wet-Bulb Globe Temperature):** Standar OSHA/NIOSH untuk membatasi beban panas berdasarkan pengukuran suhu bola kering ($T_d$), suhu bola basah ($T_w$, mengukur kelembaban/penguapan), dan suhu bola hitam ($T_g$, mengukur radiasi termal).
  $$ \text{WBGT}_{\text{indoor}} = 0.7 T_w + 0.3 T_g $$
  $$ \text{WBGT}_{\text{outdoor}} = 0.7 T_w + 0.2 T_g + 0.1 T_d $$
- **mPET (modified Physiologically Equivalent Temperature):** Model termoregulasi tingkat lanjut (Abbasi et al., 2024) yang lebih akurat dalam memprediksi laju detak jantung (HR) dan suhu inti tubuh pekerja berat dibanding PMV.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
