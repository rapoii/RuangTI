# Modul Komprehensif: Ekonomi Teknik & Evaluasi Kelayakan Investasi
**Sumber Referensi:** *Engineering Economy* (Leland Blank & Anthony Tarquin), *Basics of Engineering Economy* (Blank & Tarquin), *Principles of Engineering Economic Analysis* (John A. White et al.).

---

## 1. Konsep Nilai Waktu dari Uang (Time Value of Money - TVM)

### Formulasi Faktor Bunga Majemuk Diskret:
- **Single Payment Compound Amount (F/P, i%, N):**
  $$F = P(1 + i)^N$$
- **Single Payment Present Worth (P/F, i%, N):**
  $$P = F(1 + i)^{-N}$$
- **Uniform Series Present Worth (P/A, i%, N):**
  $$P = A \left[ \frac{(1 + i)^N - 1}{i(1 + i)^N} \right]$$
- **Uniform Series Capital Recovery (A/P, i%, N):**
  $$A = P \left[ \frac{i(1 + i)^N}{(1 + i)^N - 1} \right]$$
- **Uniform Series Compound Amount (F/A, i%, N):**
  $$F = A \left[ \frac{(1 + i)^N - 1}{i} \right]$$
- **Uniform Series Sinking Fund (A/F, i%, N):**
  $$A = F \left[ \frac{i}{(1 + i)^N - 1} \right]$$

*Dimana:*
- $P$: Nilai sekarang (*Present Worth / Principal*, Rp).
- $F$: Nilai masa depan (*Future Worth*, Rp).
- $A$: Aliran kas tahunan seragam (*Annual Worth / Annuity*, Rp/tahun).
- $i$: Suku bunga atau MARR (*Minimum Attractive Rate of Return*, $\%$ per periode).
- $N$: Jumlah periode waktu (tahun/bulan).

---

## 2. Kriteria Evaluasi Kelayakan Proyek Investasi

### A. Net Present Worth / Net Present Value (NPV):
$$\text{NPV} = \text{PW}_{\text{Manfaat (Inflow)}} - \text{PW}_{\text{Biaya (Outflow)}} = \sum_{t=0}^{N} \frac{CF_t}{(1 + i)^t}$$
- **Kriteria Kelayakan:**
  - $\text{NPV} > 0$: **Layak secara Finansial (Diterima)**.
  - $\text{NPV} = 0$: Titik impas terhadap suku bunga MARR.
  - $\text{NPV} < 0$: **Tidak Layak (Ditolak)**.

---

### B. Internal Rate of Return (IRR):
Tingkat suku bunga diskonto $(i^*)$ yang membuat nilai $\text{NPV} = 0$.

$$\sum_{t=0}^{N} \frac{CF_t}{(1 + \text{IRR})^t} = 0$$

#### Metode Interpolasi Linier untuk Estimasi IRR:
$$\text{IRR} = i_1 + \left( \frac{\text{NPV}_1}{\text{NPV}_1 - \text{NPV}_2} \right) (i_2 - i_1)$$
- **Kriteria Kelayakan:**
  - $\text{IRR} \ge \text{MARR}$: **Proyek Layak**.
  - $\text{IRR} < \text{MARR}$: **Proyek Ditolak**.

---

### C. Benefit-Cost Ratio (B/C Ratio):
$$\text{B/C} = \frac{\text{PW(Manfaat)}}{\text{PW(Investasi Awal) + PW(Biaya Operasional & Pemeliharaan)}}$$
- **Kriteria:** Proyek diterima jika $\text{B/C} \ge 1.00$.

---

### D. Payback Period (PBP - Periode Pengembalian Modal):
- **Payback Sederhana (Undiscounted):**
  $$\text{PBP} = \frac{\text{Investasi Awal}}{\text{Arus Kas Bersih Tahunan}}$$
- **Discounted Payback Period:** Memperhitungkan suku bunga diskonto $i$ sampai kumulatif $\text{NPV}_t \ge 0$.

---

## 3. Model Depresiasi Aset Industri

### A. Metode Garis Lurus (Straight-Line Depreciation - SL):
Depresiasi bernilai konstan setiap tahun sepanjang umur ekonomis $N$.

$$D_t = \frac{B - S}{N}$$
$$\text{Nilai Buku Tahun ke-}t \quad (BV_t) = B - t \times D_t$$

*Dimana:*
- $B$: Biaya perolehan awal aset (*Cost basis*).
- $S$: Nilai sisa (*Salvage value* pada akhir tahun ke-$N$).
- $N$: Umur manfaat ekonomis aset (tahun).

### B. Metode Saldo Menurun Ganda (Double Declining Balance - DDB):
Tingkat penyusutan dua kali metode garis lurus ($d = \frac{2}{N}$).

$$D_t = d \times BV_{t-1} = \frac{2}{N} BV_{t-1}$$
$$BV_t = B(1 - d)^t$$
*(Catatan: Nilai buku $BV_t$ tidak boleh disusutkan di bawah nilai sisa $S$)*
