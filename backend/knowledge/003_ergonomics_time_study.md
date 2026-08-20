# Modul Komprehensif: Ergonomi, Motion & Time Study, dan Biomekanika Kerja
**Sumber Referensi:** *Motion and Time Study: Design and Measurement of Work* (Ralph M. Barnes), *Ergonomics: How to Design for Ease and Efficiency* (K.H.E. Kroemer), *Fitting the Task to the Human* (E. Grandjean).

---

## 1. Studi Waktu Jam Henti (Stopwatch Time Study)
Langkah standar ilmiah untuk menentukan Waktu Baku ($W_b$) bagi seorang operator yang bekerja dengan kecepatan wajar dan wajar dalam kondisi kerja standar.

### Tahapan Sistematis Perhitungan Waktu Baku:
1. **Waktu Siklus Rata-rata ($\bar{X}_s$ atau $W_s$):**
   $$W_s = \frac{\sum_{i=1}^{N} X_i}{N}$$
   *(Setelah data ekstrim dieliminasi melalui uji keseragaman data $\bar{X} \pm 2\sigma$ atau $\bar{X} \pm 3\sigma$)*

2. **Uji Kecukupan Data (Tingkat Ketelitian $s$, Tingkat Keyakinan $1-\alpha$):**
   Untuk tingkat keyakinan $95\%$ ($k = 2$) dan ketelitian $5\%$ ($s = 0.05$):
   $$N' = \left( \frac{\frac{k}{s} \sqrt{N \sum X^2 - (\sum X)^2}}{\sum X} \right)^2 = \left( \frac{40 \sqrt{N \sum X^2 - (\sum X)^2}}{\sum X} \right)^2$$
   - Jika $N' \le N$: **Data Cukup**, perhitungan dapat dilanjutkan.
   - Jika $N' > N$: **Data Tidak Cukup**, wajib dilakukan penambahan pengamatan sebanyak $N' - N$.

3. **Waktu Normal ($W_n$):**
   $$W_n = W_s \times p$$
   *Dimana:* $p$ adalah faktor penyesuaian (*Rating Factor* / *Performance Rating*).

4. **Waktu Baku / Waktu Standar ($W_b$):**
   - **Metode Rumus 1 (Basis Waktu Kerja):**
     $$W_b = W_n \times (1 + \% \text{Allowance})$$
   - **Metode Rumus 2 (Basis Waktu Total / Rekomendasi ILO):**
     $$W_b = W_n \times \left( \frac{100\%}{100\% - \% \text{Allowance}} \right)$$

5. **Output Standar ($O_s$):**
   $$O_s = \frac{1}{W_b} \times \text{Waktu Kerja Tersedia}$$

---

## 2. Sistem Penyesuaian Westinghouse (Westinghouse Rating System)
Sistem Westinghouse mengevaluasi performa kerja operator berdasarkan 4 faktor evaluasi objektif:

### Tabel Skor Westinghouse:
| Faktor | Kelas | Simbol | Nilai Penyesuaian |
| :--- | :--- | :---: | :---: |
| **1. Keterampilan (*Skill*)** | *Superskill* | A1 / A2 | +0.15 / +0.13 |
| | *Excellent* | B1 / B2 | +0.11 / +0.08 |
| | *Good* | C1 / C2 | +0.06 / +0.03 |
| | *Average* | **D** | **0.00** |
| | *Fair* | E1 / E2 | -0.05 / -0.10 |
| | *Poor* | F1 / F2 | -0.16 / -0.22 |
| **2. Usaha (*Effort*)** | *Excessive* | A1 / A2 | +0.13 / +0.12 |
| | *Excellent* | B1 / B2 | +0.10 / +0.08 |
| | *Good* | C1 / C2 | +0.05 / +0.02 |
| | *Average* | **D** | **0.00** |
| | *Fair* | E1 / E2 | -0.04 / -0.08 |
| | *Poor* | F1 / F2 | -0.12 / -0.17 |
| **3. Kondisi Kerja (*Conditions*)** | *Ideal* | A | +0.06 |
| | *Excellent* | B | +0.04 |
| | *Good* | C | +0.02 |
| | *Average* | **D** | **0.00** |
| | *Fair* | E | -0.03 |
| | *Poor* | F | -0.07 |
| **4. Konsistensi (*Consistency*)** | *Perfect* | A | +0.04 |
| | *Excellent* | B | +0.03 |
| | *Good* | C | +0.01 |
| | *Average* | **D** | **0.00** |
| | *Fair* | E | -0.02 |
| | *Poor* | F | -0.04 |

$$\text{Faktor Penyesuaian Total } p = 1.00 + \sum (\text{Skor 4 Faktor Westinghouse})$$

---

## 3. Komponen Kelonggaran (Allowance Table Standar ILO)
Kelonggaran diberikan kepada pekerja untuk:
1. **Kebutuhan Pribadi (Personal Needs)**: Pria ($4\% - 5\%$), Wanita ($5\% - 7\%$).
2. **Menghilangkan Lelah Dasar (Basic Fatigue)**: Standar fisiologis $4\%$.
3. **Kelonggaran Variabel**:
   - Bekerja berdiri: $+2\%$
   - Sikap kerja tidak wajar (membungkuk/jongkok): $+2\% - 7\%$
   - Angkat beban: $0\text{ kg} = 0\%$, $10\text{ kg} = +5\%$, $20\text{ kg} = +15\%$, $30\text{ kg} = +25\%$
   - Pencahayaan buruk / silau: $+2\% - 5\%$
   - Udara panas / berventilasi buruk: $+5\% - 15\%$
   - Getaran mesin: $+2\% - 5\%$
   - Monotoni & ketegangan mental: $+1\% - 4\%$

---

## 4. Evaluasi Postur Kerja Biomekanika: REBA & RULA
- **RULA (Rapid Upper Limb Assessment)**: Fokus pada anggota gerak atas (lengan, pergelangan tangan, leher, punggung atas untuk pekerja perakitan/komputer).
  - Skor 1–2: Risiko rendah, postur dapat diterima.
  - Skor 3–4: Investigasi lebih lanjut diperlukan.
  - Skor 5–6: Investigasi dan perubahan harus segera dilakukan.
  - Skor 7: Perubahan postur **wajib dilakukan segera**.
- **REBA (Rapid Entire Body Assessment)**: Fokus pada seluruh tubuh (analisis gerakan angkat material, perawat, operator pergudangan).
  - Skor 1: Risiko negligible (dapat diabaikan).
  - Skor 2–3: Risiko rendah, perubahan mungkin diperlukan.
  - Skor 4–7: Risiko sedang, investigasi dan perubahan diperlukan.
  - Skor 8–10: Risiko tinggi, implementasi perubahan segera.
  - Skor 11–15: Risiko sangat tinggi, tindakan **harus diambil sekarang juga**.

---

## 5. Antropometri & Desain Dimensi Stasiun Kerja
Perancangan fasilitas disesuaikan dengan dimensi tubuh populasi pengguna menggunakan persentil:
- **Persentil ke-5 ($P_5$)**: Dimensi jangkauan (*reach dimensions*), misal: tinggi rak, jangkauan tangan ke tombol darurat.
  $$P_5 = \bar{X} - 1.645 \times \sigma$$
- **Persentil ke-50 ($P_{50}$)**: Dimensi rata-rata populasi wajar.
  $$P_{50} = \bar{X}$$
- **Persentil ke-95 ($P_{95}$)**: Dimensi kelonggaran (*clearance dimensions*), misal: tinggi pintu masuk, lebar kursi, ruang kaki di bawah meja.
  $$P_{95} = \bar{X} + 1.645 \times \sigma$$
- **Persentil ke-99 ($P_{99}$)**: Khusus pintu darurat dan standar safety kritis ($\bar{X} + 2.33\sigma$).
