# Modul Riset Ilmiah: Sampling Penerimaan (Acceptance Sampling), Kurva Karakteristik Operasi (OC Curve), & Rencana MIL-STD-105E
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley. ISBN: 978-1118146811.
- MIL-STD-105E / ANSI/ASQ Z1.4. *Sampling Procedures and Tables for Inspection by Attributes*. US Department of Defense.
- Indrawijaya, R., Anityasari, M., Suef, M., dkk. (2026). *Dependent Decision Based Sampling Scheme for Mixed Acceptance Criteria in the Feed Manufacturing Industry*. Journal of Industrial Engineering and Management, 19(1).
- Kokten, E. S. (2026). *Intelligent Lot-Level Acceptance Sampling via Active Learning, XGBoost, and Wilson Confidence Intervals*. Quality and Reliability Engineering International, Wiley. DOI: [10.1002/qre.70309](https://doi.org/10.1002/qre.70309).

---

## 1. Konsep Sampling Penerimaan (Acceptance Sampling)
Sampling penerimaan adalah prosedur pemeriksaan statistik untuk memutuskan apakah suatu lot kiriman bahan baku atau produk jadi dapat **Diterima (Accept)** atau **Ditolak (Reject)** berdasarkan jumlah cacat ($d$) yang ditemukan dalam sampel acak berukuran $n$.

### Rencana Sampling Tunggal (*Single Sampling Plan* $(N, n, c)$):
- $N =$ Ukuran total lot.
- $n =$ Ukuran sampel yang ditarik secara acak.
- $c =$ Angka penerimaan maksimum (*Acceptance Number*):
  - Jika cacat $d \le c \rightarrow$ **Lot Diterima**.
  - Jika cacat $d > c \rightarrow$ **Lot Ditolak** (dikembalikan ke vendor atau dilakukan inspeksi $100\%$).

---

## 2. Kurva Karakteristik Operasi (Operating Characteristic - OC Curve)
Kurva OC memetakan probabilitas penerimaan lot ($P_a$) terhadap proporsi cacat riil pada lot ($p$).

### Formulasi Probabilitas Poisson (Pendekatan $n$ besar, $p$ kecil):
$$P_a(p) = P(d \le c) = \sum_{d=0}^c \frac{e^{-np} (np)^d}{d!}$$

### 4 Parameter Kunci Rancangan Sampling:
1. **AQL (Acceptable Quality Level):** Tingkat kualitas terbaik yang disepakati produsen dan konsumen.
   - Risiko Produsen ($\alpha$ - Produser's Risk / Tipe I): Probabilitas menolak lot yang sebenarnya bagus ($1 - P_a(\text{AQL}) = \alpha \approx 0.05$).
2. **LTPD / RQL (Lot Tolerance Percent Defective):** Tingkat kualitas terburuk yang masih bisa ditoleransi konsumen.
   - Risiko Konsumen ($\beta$ - Consumer's Risk / Tipe II): Probabilitas menerima lot yang sebenarnya berkualitas buruk ($P_a(\text{LTPD}) = \beta \approx 0.10$).

---

## 3. Metrik Evaluasi Kinerja Sampling Inspeksi Rektifikasi (Rectifying Inspection)
- **Average Outgoing Quality (AOQ):** Kualitas rata-rata lot setelah lolos proses inspeksi dan perbaikan:
  $$\text{AOQ} = \frac{P_a \cdot p \cdot (N - n)}{N} \approx P_a \times p$$
- **Average Outgoing Quality Limit (AOQL):** Nilai puncak maksimum dari kurva $\text{AOQ}$ (tingkat cacat rata-rata terburuk yang mungkin lolos ke konsumen dalam jangka panjang).
- **Average Total Inspection (ATI):** Rata-rata jumlah unit yang harus diinspeksi per lot:
  $$\text{ATI} = n + (1 - P_a)(N - n)$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
