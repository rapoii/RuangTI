# Modul Riset Ilmiah: Process Capability & Performance Indices ($C_p, C_{pk}, P_p, P_{pk}$)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley.
- Kwilinski, A., & Kardas, M. (2023). *Enhancing process stability and quality management: A comprehensive analysis of process capability indices*. Virtual Economics.
- Jiang, F., & Yang, L. (2026). *Practical process capability indices workflows*. The International Journal of Advanced Manufacturing Technology, Springer.
- Wu, C. W., Darmawan, A., & Liu, S. W. (2023). *Stage-independent multiple sampling plan by variables inspection for lot determination based on the process capability index Cpk*. International Journal of Production Research.
- Balasubramainam, S. (2026). *Process Capability and Process Performance Metrics in Six Sigma: A Unified Framework Integrating Taguchi Quadratic Loss Function*. Zenodo.

---

## 1. Konsep Dasar Kapabilitas Proses
Kapabilitas Proses mengukur kemampuan bawaan (*inherent ability*) dari sebuah proses (mesin, metode, material) untuk secara konsisten menghasilkan output yang memenuhi batas spesifikasi pelanggan (Tolerance). Pengukuran ini dilakukan **setelah** proses terbukti stabil secara statistik melalui Peta Kendali (SPC).

Terdapat dua himpunan batas (*limits*):
1. **Control Limits (UCL, LCL):** Diperoleh dari data proses / Voice of the Process ($\mu \pm 3\sigma$).
2. **Specification Limits (USL, LSL):** Ditetapkan oleh pelanggan atau rekayasa / Voice of the Customer.

---

## 2. Process Capability Indices (Kinerja Jangka Pendek)
Indeks Kapabilitas ($C_p$ dan $C_{pk}$) mengukur kemampuan **jangka pendek** (Short-Term Capability). Estimasi standar deviasi ($\hat{\sigma}$) dihitung berdasarkan variasi *di dalam* subgrup (Within-Subgroup Variation), biasanya menggunakan estimator $\hat{\sigma} = \frac{\bar{R}}{d_2}$ atau $\frac{\bar{S}}{c_4}$.

### A. Indeks $C_p$ (Potential Capability)
Mengukur rasio antara rentang spesifikasi dengan rentang penyebaran alami proses. $C_p$ tidak peduli apakah proses tersebut terpusat pada nilai target atau tidak.
$$ C_p = \frac{\text{USL} - \text{LSL}}{6\hat{\sigma}_{\text{within}}} $$
- Jika $C_p < 1$: Proses tidak mampu memenuhi spesifikasi (Penyebaran proses lebih lebar dari toleransi).
- Jika $C_p = 1$: Sesuai spesifikasi (Tingkat kegagalan $0.27\%$ / 2700 ppm jika berpusat persis).
- Jika $C_p \ge 1.33$: Standar industri otomotif minimum (4 Sigma).
- Jika $C_p \ge 2.0$: Kelas dunia (6 Sigma).

### B. Indeks $C_{pk}$ (Actual Capability)
Memperhitungkan letak rata-rata proses ($\mu$) terhadap batas spesifikasi. $C_{pk}$ adalah nilai minimum antara jarak rata-rata ke USL dan rata-rata ke LSL.
$$ C_{pk} = \min \left( \frac{\text{USL} - \mu}{3\hat{\sigma}_{\text{within}}}, \frac{\mu - \text{LSL}}{3\hat{\sigma}_{\text{within}}} \right) $$
- **Kondisi Khusus:** $C_{pk}$ akan selalu lebih kecil atau sama dengan $C_p$. Jika $C_{pk} = C_p$, berarti proses terpusat persis di tengah batas spesifikasi ($\mu = \text{Target}$).
- Jika $C_{pk}$ bernilai negatif, berarti rata-rata proses berada di luar salah satu batas spesifikasi.

---

## 3. Process Performance Indices (Kinerja Jangka Panjang)
Indeks Performa ($P_p$ dan $P_{pk}$) mengukur kemampuan **jangka panjang** (Long-Term Capability). Estimasi standar deviasi ($\sigma_{overall}$) dihitung dari seluruh populasi data, mencakup variasi *di dalam* subgrup maupun *antar* subgrup (Overall Variation), biasanya menggunakan estimator standar deviasi sampel populasi ($s$).

### A. Indeks $P_p$ (Process Performance)
$$ P_p = \frac{\text{USL} - \text{LSL}}{6\sigma_{\text{overall}}} $$

### B. Indeks $P_{pk}$ (Actual Performance)
$$ P_{pk} = \min \left( \frac{\text{USL} - \mu}{3\sigma_{\text{overall}}}, \frac{\mu - \text{LSL}}{3\sigma_{\text{overall}}} \right) $$

### Signifikansi dalam Six Sigma:
- Selisih antara $C_p$ dan $P_p$ menunjukkan adanya variasi sumber khusus (*Special Cause Variation*) yang bergeser seiring waktu (seperti keausan pahat atau perbedaan lot material). 
- Dalam metodologi DMAIC, perbaikan proses difokuskan untuk membuat $P_{pk}$ mendekati nilai $C_{pk}$.

## 4. Integrasi dengan Taguchi Loss Function (Tren 2026)
Balasubramainam (2026) dan Wu et al. (2023) menunjukkan bahwa evaluasi kapabilitas proses modern tidak cukup hanya dengan *Go/No-Go* (berada dalam USL/LSL). Indeks baru seperti $C_{pm}$ (Taguchi Capability Index) mempertimbangkan deviasi dari *Target* ($T$):
$$ C_{pm} = \frac{\text{USL} - \text{LSL}}{6 \sqrt{\sigma^2 + (\mu - T)^2}} $$
Ini membuktikan bahwa variansi yang sekecil apapun dari target spesifikasi akan menimbulkan kerugian ekonomi (*Quality Loss*).
