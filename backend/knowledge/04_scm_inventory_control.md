# Modul Komprehensif: Supply Chain Management, Inventory Control, & PPIC
**Sumber Referensi:** *Operations Management: Sustainability and Supply Chain Management* (Jay Heizer, Barry Render, Chuck Munson), *Supply Chain Management: Strategy, Planning, and Operation* (Sunil Chopra), *Production and Operations Analysis* (Steven Nahmias).

---

## 1. Model Persediaan Deterministik: EOQ & Variannya

### A. Basic Economic Order Quantity (EOQ Klasik):
Menyeimbangkan biaya pemesanan (*ordering cost*) dan biaya penyimpanan (*holding cost*) untuk meminimalkan Total Biaya Persediaan (*Total Inventory Cost* - TIC).

#### Formulasi Matematis:
$$\text{TIC}(Q) = \frac{D}{Q} S + \frac{Q}{2} H$$
$$\text{EOQ} = Q^* = \sqrt{\frac{2DS}{H}} = \sqrt{\frac{2DS}{h \cdot C}}$$

*Dimana:*
- $D$: Permintaan tahunan (*Annual Demand*, unit/tahun).
- $S$: Biaya per satu kali pemesanan (*Setup / Ordering cost*, Rp/order).
- $H$: Biaya penyimpanan per unit per tahun (*Holding / Carrying cost*, Rp/unit/tahun).
- $h$: Persentase biaya simpan tahunan ($\% \times C$).
- $C$: Harga beli per unit barang (Rp/unit).

#### Frekuensi & Siklus Pemesanan:
- Frekuensi pemesanan per tahun: $N = \frac{D}{Q^*}$
- Jarak waktu antarpemesanan: $T = \frac{\text{Hari Kerja/Tahun}}{N} = \frac{\text{Hari Kerja/Tahun}}{D/Q^*}$

---

### B. Economic Production Quantity (EPQ / POQ - Persediaan dengan Laju Produksi):
Digunakan saat barang diproduksi secara bertahap dalam batch pabrik sendiri dengan laju produksi $p$ yang lebih besar dari laju konsumsi $d$.

$$\text{EPQ} = Q^*_p = \sqrt{\frac{2DS}{H \left(1 - \frac{d}{p}\right)}}$$
$$\text{Tingkat Persediaan Maksimum } I_{\max} = Q \left(1 - \frac{d}{p}\right)$$

---

### C. EOQ dengan Diskon Kuantitas (Quantity Discount):
$$\text{Total Cost (TC)} = \frac{D}{Q} S + \frac{Q}{2} H + D \times C_i$$

#### Langkah Keputusan Diskon:
1. Hitung $Q^*$ untuk harga terendah ($C_n$). Jika $Q^*$ memenuhi range kuantitas minimum diskon, pilih kuantitas tersebut.
2. Jika $Q^*$ di luar range valid, hitung TC pada kuantitas minimum batas bawah tier diskon tersebut dan bandingkan dengan TC pada tier harga sebelumnya. Pilih $Q$ yang menghasilkan **Total Cost (TC) terendah**.

---

## 2. Model Persediaan Probabilistik (Safety Stock & Reorder Point)
Ketika permintaan harian $(d)$ atau lead time $(L)$ berfluktuasi secara acak mengikuti distribusi normal.

### A. Reorder Point (ROP) dengan Permintaan Variabel & Lead Time Konstan:
$$\text{ROP} = (\bar{d} \times L) + \text{SS}$$
$$\text{Safety Stock (SS)} = Z_{\alpha} \times \sigma_L = Z_{\alpha} \times \left(\sigma_d \sqrt{L}\right)$$

*Dimana:*
- $\bar{d}$: Rata-rata permintaan harian.
- $\sigma_d$: Standar deviasi permintaan harian.
- $L$: Lead time waktu tunggu pengiriman (hari).
- $Z_{\alpha}$: Skor $Z$ tabel distribusi normal untuk Service Level $(1-\alpha)$ yang ditargetkan.

### B. ROP dengan Lead Time Variabel & Permintaan Konstan:
$$\text{SS} = Z_{\alpha} \times (d \times \sigma_L)$$
$$\text{ROP} = (d \times \bar{L}) + \text{SS}$$

### C. ROP dengan Permintaan dan Lead Time Keduanya Variabel:
$$\text{SS} = Z_{\alpha} \times \sqrt{\bar{L}\sigma_d^2 + \bar{d}^2\sigma_L^2}$$
$$\text{ROP} = (\bar{d} \times \bar{L}) + \text{SS}$$

### Tabel Standar Service Level vs Nilai $Z$:
| Service Level ($1-\alpha$) | Nilai $Z$ (Faktor Keamanan) | Probabilitas Stockout ($\alpha$) |
| :---: | :---: | :---: |
| **90.0%** | **1.282** | 10.0% |
| **95.0%** | **1.645** | 5.0% |
| **97.5%** | **1.960** | 2.5% |
| **98.0%** | **2.054** | 2.0% |
| **99.0%** | **2.326** | 1.0% |
| **99.9%** | **3.090** | 0.1% |

---

## 3. Sistem Peramalan Permintaan (Demand Forecasting)
Metrik evaluasi akurasi peramalan:
- **Mean Absolute Deviation (MAD):**
  $$\text{MAD} = \frac{\sum |A_t - F_t|}{n}$$
- **Mean Squared Error (MSE):**
  $$\text{MSE} = \frac{\sum (A_t - F_t)^2}{n}$$
- **Mean Absolute Percentage Error (MAPE):**
  $$\text{MAPE} = \frac{1}{n} \sum \left| \frac{A_t - F_t}{A_t} \right| \times 100\%$$
- **Tracking Signal (TS):**
  $$\text{Running Sum of Forecast Errors (RSFE)} = \sum (A_t - F_t)$$
  $$\text{TS} = \frac{\text{RSFE}}{\text{MAD}}$$
  *(Rentang kendali peramalan yang sehat: $-4 \le \text{TS} \le +4$)*
