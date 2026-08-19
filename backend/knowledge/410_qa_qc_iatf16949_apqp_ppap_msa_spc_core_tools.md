# Modul 410: Penjaminan Mutu Otomotif & Manufaktur Presisi (IATF 16949:2016, Core Tools: APQP, PPAP, MSA Gage R&R ANOVA, SPC, dan FMEA AIAG-VDA 2019)

## 1. Domain Profesi & Standar Acuan
Profesi **Quality Assurance / Quality Control (QA/QC) Engineer & Quality Systems Auditor** bertugas memastikan produk dan proses memenuhi standar toleransi nol-cacat (*Zero-Defect Quality*), mengesahkan komponen baru melalui persetujuan OEM (*PPAP Approval*), serta memverifikasi kemampuan sistem pengukuran (*Measurement Systems Analysis*).

### Standar Baku Mutu Utama:
1. **IATF 16949:2016**: *Quality management system standard for automotive production and relevant service part organizations*.
2. **AIAG-VDA FMEA Handbook (1st Edition, 2019)**: Standar FMEA harmonisasi global dengan matriks *Action Priority* (AP).
3. **AIAG MSA Manual (4th Edition)**: Analisis kapabilitas alat ukur (*Gage R&R*).
4. **AIAG SPC Manual (2nd Edition)**: Kapabilitas proses $C_p, C_{pk}, P_p, P_{pk}$.
5. **AIAG PPAP Manual (4th Edition)**: 18 Elemen Persetujuan Suku Cadang Produksi (*Level 1 s.d. Level 5*).

---

## 2. Advanced Product Quality Planning (APQP) & 18 Elemen PPAP

### A. 5 Fase APQP:
1. *Fase 1: Plan and Define Program* (Voice of Customer, Target Kualitas).
2. *Fase 2: Product Design and Development* (DFMEA, Gambar Teknik GD&T, DVP&R).
3. *Fase 3: Process Design and Development* (Process Flow Chart, PFMEA, Control Plan).
4. *Fase 4: Product and Process Validation* (Trial Run, 18 Elemen PPAP, MSA, SPC Initial Study).
5. *Fase 5: Feedback, Assessment and Corrective Action* (Produksi Massal, Reduksi Variasi).

### B. 5 Tingkat Penyerahan Dokumen PPAP (PPAP Submission Levels):
- **Level 1**: Hanya Part Submission Warrant (PSW) dan Appearance Approval Report.
- **Level 2**: PSW dengan sampel produk dan data uji dimensional terbatas.
- **Level 3 (Default Standar Industri)**: PSW dengan sampel produk dan **seluruh 18 dokumen pendukung lengkap**.
- **Level 4**: PSW dan persyaratan lain yang ditentukan khusus oleh OEM.
- **Level 5**: PSW dan dokumen/sampel diinspeksi langsung di lokasi pabrik pemasok (*On-Site Audit*).

---

## 3. Analisis Sistem Pengukuran (MSA Gage R&R - ANOVA Method)

Memisahkan total variasi pengujian ($\sigma_{\text{Total}}^2$) menjadi variasi part riil ($\sigma_{\text{Part}}^2$) dan variasi alat ukur ($\sigma_{\text{Gage}}^2 = \sigma_{\text{Repeatability}}^2 + \sigma_{\text{Reproducibility}}^2$).

### A. Persentase Toleransi Gage R&R (%GRR):
$$\%GRR = \frac{\sigma_{\text{MS}}}{\sigma_{\text{Total}}} \times 100\% \quad \text{atau} \quad \%GRR_{\text{Toleransi}} = \frac{6 \cdot \sigma_{\text{MS}}}{\text{USL} - \text{LSL}} \times 100\%$$

### B. Kriteria Penerimaan Sistem Pengukuran (AIAG MSA 4th Ed):
- $\%GRR < 10\%$: **Sistem Pengukuran Diterima Sempurna (Acceptable)**.
- $10\% \le \%GRR \le 30\%$: **Dapat Diterima Bersyarat** (Tergantung kekritisan part dan biaya perbaikan alat).
- $\%GRR > 30\%$: **DITOLAK (Unacceptable)** $\to$ Kalibrasi ulang, perbaiki fixture, atau latih ulang operator.

### C. Number of Distinct Categories ($ndc$):
$$ndc = 1.41 \times \frac{\sigma_{\text{Part}}}{\sigma_{\text{MS}}}$$
Syarat wajib: $ndc \ge 5$ (Menjamin alat ukur mampu membedakan minimal 5 kelompok variasi part).

---

## 4. Kapabilitas Proses ($C_p, C_{pk}$) vs Kinerja Proses ($P_p, P_{pk}$)

Berdasarkan AIAG SPC Manual:

### A. Kapabilitas Jangka Pendek (Within-Subgroup $\sigma_{\text{within}} = \bar{R}/d_2$ atau $\bar{s}/c_4$):
$$C_p = \frac{\text{USL} - \text{LSL}}{6 \sigma_{\text{within}}}$$

$$C_{pk} = \min\left( \frac{\text{USL} - \mu}{3 \sigma_{\text{within}}}, \frac{\mu - \text{LSL}}{3 \sigma_{\text{within}}} \right)$$

### B. Kinerja Jangka Panjang (Overall Variation $\sigma_{\text{total}} = \sqrt{\frac{\sum(X_i - \bar{X})^2}{N-1}}$):
$$P_p = \frac{\text{USL} - \text{LSL}}{6 \sigma_{\text{total}}}$$

$$P_{pk} = \min\left( \frac{\text{USL} - \mu}{3 \sigma_{\text{total}}}, \frac{\mu - \text{LSL}}{3 \sigma_{\text{total}}} \right)$$

**Standar Otomotif IATF**: $C_{pk} \ge 1.33$ ($4\sigma$, 63 ppm cacat), untuk karakteristik keselamatan kritis (*Critical Characteristics*) wajib $C_{pk} \ge 1.67$ ($5\sigma$).

---

## 5. FMEA Harmonisasi AIAG-VDA 2019 & Matriks Action Priority (AP)

AIAG-VDA 2019 menghapus metode RPN lama ($S \times O \times D$) dan menggantinya dengan 7 Langkah FMEA serta tabel logika **Action Priority (AP)**:

### 7 Langkah AIAG-VDA FMEA:
1. *Planning & Preparation* (Project Scope).
2. *Structure Analysis* (Pohon Struktur Proses).
3. *Function Analysis* (Fungsi Komponen).
4. *Failure Analysis* (Mode Cacat, Efek Cacat, Penyebab Cacat).
5. *Risk Analysis* (Penetapan skor $S, O, D$ dari 1-10).
6. *Optimization* (Tindakan Pencegahan & Deteksi Baru).
7. *Results Documentation* (Laporan Manajemen).

### Matriks Action Priority (AP):
- **Tingkat H (High Priority)**: Wajib tindakan perbaikan rekayasa (*Action Required*), biasanya jika $S \ge 9-10$ terlepas dari nilai $O$ dan $D$.
- **Tingkat M (Medium Priority)**: Diperlukan evaluasi perbaikan atau justifikasi tertulis.
- **Tingkat L (Low Priority)**: Risiko dapat diterima tanpa perubahan proses lanjutan.

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Automotive Industry Action Group & Verband der Automobilindustrie. (2019). *AIAG & VDA FMEA Handbook: Design FMEA and Process FMEA* (1st ed.). Southfield: AIAG.
- International Automotive Task Force. (2016). *IATF 16949:2016 Quality management system requirements for automotive production*. IATF.
- Montgomery, D. C. (2020). *Introduction to Statistical Quality Control* (8th ed.). John Wiley & Sons.
- Cirtina, L. M., Dumitrascu, A. E., Cazacu, D. V., & Ianasi, C. A. (2025). *Eight-disciplines analysis method and quality planning for optimizing problem-solving in the automotive sector: An IATF 16949 case study*. Processes, 13(10), 3121. DOI: [10.3390/pr13103121](https://doi.org/10.3390/pr13103121).
- Yahyaoui, S., Zaim, M., & Zaim, F. (2026). *Hybrid AI-based predictive quality control and statistical process capability under IATF 16949*. Journal of Applied Engineering Science, 24(1), 105-119.
