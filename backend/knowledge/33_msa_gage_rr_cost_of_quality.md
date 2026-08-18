# Modul Riset Ilmiah: Analisis Sistem Pengukuran (MSA Gage R&R) & Biaya Kualitas (Cost of Quality - CoQ)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- AIAG (Automotive Industry Action Group). (2010). *Measurement Systems Analysis (MSA)* (4th ed.). Chrysler, Ford, General Motors. (Automotive Standard).
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley. ISBN: 978-1118146811.
- Ekawati, I., Hasan, A., Afrinaldi, F., dkk. (2026). *Cost of Quality Models in Continuous Production Systems with Deteriorating Quality: A Review and Research Agenda*. Performa: Media Ilmiah Teknik Industri.
- Bertolini, M., & Castellano, D. (2026). *Quality cost deployment (QCD): a Lean-Inspired methodology for systematic reduction of total quality costs*. International Journal of Lean Six Sigma, Emerald. DOI: [10.1108/IJLSS-10-2025-0257](https://doi.org/10.1108/IJLSS-10-2025-0257).
- Feigenbaum, A. V. (1991). *Total Quality Control* (3rd ed.). McGraw-Hill. (PAF Model Creator).

---

## 1. Analisis Sistem Pengukuran (Measurement Systems Analysis - MSA)
Data kualitas tidak berguna jika variasi pengukuran berasal dari alat ukur itu sendiri (*Measurement Error*), bukan variasi produk riil.

### Model Variabilitas Total (Law of Total Variance):
$$\sigma^2_{\text{Total}} = \sigma^2_{\text{Part-to-Part}} + \sigma^2_{\text{Measurement System (Gage R&R)}}$$

### Dua Komponen Utama Gage R&R:
1. **Repeatability (Kemampuan Ulang / Equipment Variation - $EV$):** Variasi pengukuran saat **satu operator** mengukur part yang sama berkali-kali menggunakan alat ukur yang sama.
2. **Reproducibility (Kemampuan Reproduksi / Appraiser Variation - $AV$):** Variasi rata-rata pengukuran antar **beberapa operator berbeda** saat menggunakan alat ukur yang sama.
   $$\sigma^2_{\text{Gage R&R}} = \sigma^2_{\text{Repeatability}} + \sigma^2_{\text{Reproducibility}}$$

### Metrik Evaluasi Kelayakan Alat Ukur (%GRR & ndc AIAG Standard):
- **Persentase Gage R&R (%GRR):**
  $$\% \text{GRR} = \frac{\sigma_{\text{Gage R&R}}}{\sigma_{\text{Total}}} \times 100\% \quad \text{atau} \quad \% \text{GRR} = \frac{6 \times \sigma_{\text{Gage R&R}}}{\text{USL} - \text{LSL}} \times 100\%$$
  - **$\% \text{GRR} < 10\%$:** Sistem pengukuran **Diterima Sangat Baik (Acceptable)**.
  - **$10\% \le \% \text{GRR} \le 30\%$:** Sistem pengukuran **Dapat Diterima Bersyarat (Marginal)**.
  - **$\% \text{GRR} > 30\%$:** Sistem pengukuran **Ditolak / Tidak Layak (Unacceptable)** — wajib kalibrasi/ganti alat ukur.
- **Number of Distinct Categories (ndc):** Jumlah kelompok dimensi yang dapat dibedakan secara andal oleh alat ukur:
  $$\text{ndc} = 1.41 \times \frac{\sigma_{\text{Part}}}{\sigma_{\text{Gage R&R}}} \ge 5 \quad (\text{Wajib } \ge 5).$$

---

## 2. Biaya Kualitas (Cost of Quality - PAF Model Feigenbaum)
Biaya kualitas adalah total biaya yang dikeluarkan untuk menjamin kualitas produk serta biaya akibat terjadinya kegagalan kualitas.

$$\text{Total Cost of Quality (CoQ)} = \text{Prevention} + \text{Appraisal} + \text{Internal Failure} + \text{External Failure}$$

### 4 Kategori PAF Model:
1. **Biaya Pencegahan (Prevention Costs - Biaya Kesesuaian):** Biaya desain produk tahan cacat, pelatihan pekerja, kalibrasi preventif, audit vendor.
2. **Biaya Penilaian (Appraisal Costs - Biaya Kesesuaian):** Biaya inspeksi bahan baku masuk (IQC), uji laboratorium, pengujian akhir produk.
3. **Biaya Kegagalan Internal (Internal Failure Costs):** Biaya scrap (produk gagal dibuang), pengerjaan ulang (*rework*), waktu henti mesin (*downtime*).
4. **Biaya Kegagalan Eksternal (External Failure Costs - Paling Mahal):** Klaim garansi, penarikan produk dari pasar (*product recall*), kehilangan reputasi/konsumen.
