# Modul Riset Ilmiah: Design for Six Sigma (DFSS), DMADV, & IDDOV Roadmap
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Harry, M. J., & Schroeder, R. (2000). *Six Sigma: The Breakthrough Management Strategy Revolutionizing the World's Top Corporations*. Doubleday. (Foundational DFSS).
- Frizziero, L., Leon-Cardenas, C., Galie, G., & Liverani, A. (2023). *Industrial Design Structure: a straightforward organizational integration of DFSS and QFD in a new industry and market reality*. The TQM Journal, Emerald, 35(8), 2413. DOI: [10.1108/TQM-12-2022-0367](https://doi.org/10.1108/TQM-12-2022-0367).
- Dzulinski, A. C., Braghini Junior, A., dkk. (2023). *Design for Six Sigma: A Review of the Definitions, Objectives, Activities, and Tools*. Engineering Management Journal, Taylor & Francis. DOI: [10.1080/10429247.2022.2041964](https://doi.org/10.1080/10429247.2022.2041964).
- de Doile, G. N. D., Castilla, M., Balestrassi, P. P., dkk. (2025). *Six Sigma Approach to Developing a Microgrid Station for Research and Teaching*. IEEE Transactions on Education.
- Parvez, M. S., & Saha, P. (2025). *A combined approach of design for Six Sigma, generic product development process and ergonomics-safety philosophy to reduce musculoskeletal disorder problems*. International Journal of Lean Six Sigma, Emerald, 16(3), 778.

---

## 1. Konsep Dasar Design for Six Sigma (DFSS) vs DMAIC
Berbeda dengan DMAIC yang berfokus pada perbaikan proses eksisting (*process improvement*), **DFSS** dirancang untuk menciptakan produk atau proses baru yang secara inheren memenuhi tingkat kinerja Six Sigma ($\ge 4.5\sigma$ jangka panjang / $3.4$ DPMO) sejak fase desain awal.

### Kapan Menggunakan DFSS?
- Produk/proses sama sekali baru (*Greenfield*).
- Teknologi inti berubah total.
- Kinerja proses eksisting sudah mencapai batas entropi maksimalnya dan tidak bisa diperbaiki lagi dengan DMAIC.
- Kebutuhan pelanggan (CTQs) sangat kompleks dan membutuhkan inovasi radikal.

## 2. Roadmap DMADV (Define - Measure - Analyze - Design - Verify)
Metodologi standar DFSS yang paling banyak diadopsi di industri manufaktur:

1. **Define:** Mendefinisikan tujuan proyek, *Critical to Quality* (CTQs) pelanggan, dan ruang lingkup desain. Output: Project Charter & CTQ Tree.
2. **Measure:** Mengukur kebutuhan pelanggan secara kuantitatif, memetakan kapabilitas teknologi saat ini, dan mengumpulkan data *Voice of Customer* (VoC). Alat: QFD House of Quality, Kano Model.
3. **Analyze:** Menganalisis konsep desain alternatif, mengevaluasi risiko kegagalan desain, dan memilih konsep terbaik. Alat: TRIZ, Pugh Matrix, FMEA Desain (DFMEA), Simulasi Monte Carlo.
4. **Design:** Mengembangkan detail desain optimal, melakukan toleransi statistik, dan memvalidasi model matematis. Alat: DOE Taguchi/Response Surface, Robust Design, Tolerance Stack-up Analysis.
5. **Verify:** Memverifikasi bahwa desain memenuhi semua CTQs melalui uji coba prototipe, validasi skala penuh, dan rencana kontrol produksi massal. Alat: Pilot Run, Statistical Process Control (SPC), Reliability Testing.

## 3. Roadmap IDDOV (Identify - Define - Develop - Optimize - Verify)
Alternatif DFSS yang lebih menekankan pada identifikasi peluang inovasi dan optimasi parameter:
- **Identify:** Identifikasi peluang pasar dan kesenjangan teknologi.
- **Define:** Definisi spesifikasi fungsional dan batasan desain.
- **Develop:** Pengembangan konsep desain dan pemodelan transfer fungsi $Y = f(X)$.
- **Optimize:** Optimasi robust design menggunakan metode Taguchi atau Response Surface Methodology (RSM) untuk meminimalkan variabilitas $\sigma_Y$.
- **Verify:** Verifikasi kinerja dan transisi ke manufaktur.

## 4. Formulasi Matematis & Metrik Kunci DFSS

### Transfer Function Modeling:
$$Y = f(X_1, X_2, \dots, X_n) + \epsilon$$
Di mana $Y$ adalah karakteristik kualitas (CTQ), $X_i$ adalah variabel desain/kontrol, dan $\epsilon$ adalah noise/error.

### Propagasi Varians (Root Sum Square - RSS):
Jika $Y = c_1 X_1 + c_2 X_2 + \dots + c_n X_n$, maka varians output:
$$\sigma_Y^2 = \sum_{i=1}^{n} \left( \frac{\partial Y}{\partial X_i} \right)^2 \sigma_{X_i}^2$$

### Z-Score Jangka Pendek & Panjang:
$$Z_{\text{short-term}} = \frac{|USL - \mu|}{\sigma_{\text{within}}} \quad \text{atau} \quad \frac{|LSL - \mu|}{\sigma_{\text{within}}}$$
$$Z_{\text{long-term}} = Z_{\text{short-term}} - 1.5 \quad (\text{asumsi pergeseran mean } 1.5\sigma)$$

### Target Sigma Level DFSS:
Desain harus mencapai minimal $Z_{\text{short-term}} \ge 6.0$ (setara $Z_{\text{long-term}} \ge 4.5$) untuk menjamin yield $\ge 99.99966\%$.

## 5. Integrasi DFSS dengan Alat Rekayasa Lainnya
- **QFD (House of Quality):** Menerjemahkan VoC menjadi spesifikasi teknis terukur di fase Define/Measure.
- **TRIZ:** Menyelesaikan kontradiksi teknis/fisik di fase Analyze tanpa kompromi kinerja.
- **Robust Design (Taguchi):** Meminimalkan sensitivitas desain terhadap faktor noise lingkungan/manufaktur di fase Design/Optimize.
- **Reliability Engineering:** Memprediksi MTBF dan laju kegagalan desain baru sebelum diproduksi massal.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
