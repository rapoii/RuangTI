# Modul 68: Lean Accounting dalam Rekayasa Industri

## Deskripsi Modul
Lean Accounting adalah pendekatan akuntansi manajemen yang selaras dengan prinsip-prinsip Lean Manufacturing. Berbeda dengan akuntansi tradisional yang berfokus pada alokasi biaya overhead berdasarkan volume, Lean Accounting menggunakan **Value Stream Costing (VSC)** untuk memberikan visibilitas biaya yang akurat per aliran nilai (*value stream*), mendukung pengambilan keputusan operasional yang lebih cepat dan eliminasi pemborosan (*muda*).

## Konsep Inti

### 1. Value Stream Costing (VSC)
VSC mengalokasikan biaya langsung ke *value stream* tertentu, bukan ke departemen atau pusat biaya fungsional. Ini menghilangkan distorsi alokasi overhead yang sering menyesatkan dalam lingkungan produksi lean.

$$
\text{Total VSC} = \sum_{i=1}^{n} (\text{Direct Material}_i + \text{Direct Labor}_i + \text{Overhead}_{\text{assigned}, i})
$$

Di mana $n$ adalah jumlah aktivitas dalam value stream, dan $\text{Overhead}_{\text{assigned}}$ hanya mencakup biaya yang benar-benar dikonsumsi oleh aliran tersebut.

### 2. Box Score Performance Measurement
Box Score mengintegrasikan tiga dimensi kinerja dalam satu tampilan visual:
- **Operasional**: Lead time, first-pass yield, on-time delivery
- **Finansial**: Revenue, profit margin, inventory turns
- **Persepsi Pelanggan**: Quality rating, responsiveness

$$
\text{Productivity Ratio} = \frac{\text{Value Added Time}}{\text{Total Lead Time}} \times 100\%
$$

### 3. Kaizen Costing
Kaizen costing menetapkan target pengurangan biaya inkremental untuk setiap siklus perbaikan berkelanjutan:

$$
\text{Target Cost}_{t+1} = \text{Actual Cost}_t \times (1 - r)
$$

di mana $r$ adalah tingkat pengurangan biaya target per periode (misalnya 2-5%).

### 4. Elimination of Standard Costing Variance Analysis
Lean Accounting menggantikan analisis varians standar (yang mendorong overproduksi) dengan pelaporan real-time berbasis *flow*:

$$
\text{Flow Efficiency} = \frac{\text{Units Shipped}}{\text{Total Units Entered Process}}
$$

## Formula Kunci dalam Lean Accounting

| Metrik | Formula | Keterangan |
|--------|---------|------------|
| Value Stream Profit | $\text{Revenue}_{VS} - \text{Total VSC}$ | Laba per aliran nilai |
| Inventory Turns | $\frac{\text{COGS}}{\text{Average Inventory}}$ | Kecepatan konversi persediaan |
| Return on Sales | $\frac{\text{VS Profit}}{\text{VS Revenue}}$ | Margin kontribusi aliran |
| Dock-to-Dock Days | $\frac{\text{WIP Inventory}}{\text{Daily Shipments}}$ | Waktu tinggal material |

## Studi Kasus & Aplikasi Modern
Penerapan Lean Accounting di industri manufaktur otomotif dan elektronik menunjukkan korelasi positif antara adopsi VSC dan peningkatan ROI hingga 15-20% dalam 2 tahun pertama implementasi (Nielsen et al., 2023). Perusahaan yang menggabungkan VSC dengan digital dashboard mengalami percepatan siklus pengambilan keputusan strategis sebesar 40%.

## Referensi Terverifikasi (2023-2026)

1. Nielsen, H., Kristensen, T. B., & Grasso, L. (2023). Performance effects of value stream costing and accounting performance measures in lean production companies–accounting for time compression. *Production Planning & Control*, Taylor & Francis. https://www.tandfonline.com/doi/abs/10.1080/09537287.2021.1949506

2. ALShanti, A. M., Al-Refae, K. M. A., et al. (2025). Lean accounting tools and competitive advantage in Jordanian industrial companies. *Cogent Business & Management*, Taylor & Francis. https://www.tandfonline.com/doi/abs/10.1080/23311975.2024.2447414

3. Namburi, N., & Phongkraphan, N. (2025). Factors affecting lean accounting and financial performance of the natural rubber industry in Thailand. *Quality Management Journal*, Taylor & Francis. https://www.tandfonline.com/doi/abs/10.10686967.2025.2488304

4. Boufarh, A., & Haddad, N. E. H. (2026). Exploring Lean Accounting: Trends and Future Directions. *Economics and Finance*, 14(1), 116. https://economics-and-finance.com/arc/EF-2026-1_116.pdf

5. Burney, L. L., & Said, A. A. (2026). Embedding Lean Thinking in Management Accounting Education: A Path to Future-Ready Graduates. *Issues in Accounting Education*, AAA. https://publications.aaahq.org/iae/article-abstract/doi/10.2308/ISSUES-2024-092/24126

6. Riskal, P. Y. F. (2026). Lean Accounting untuk Efisiensi Biaya Perusahaan Manufaktur: Tinjauan Literatur. *Musytari: Jurnal Manajemen, Akuntansi, dan Bisnis*. https://journal.cib.institute/index.php/musytari/article/view/1603

## Catatan Implementasi
- Hindari penggunaan ABC (*Activity-Based Costing*) murni dalam konteks lean karena kompleksitasnya bertentangan dengan prinsip kesederhanaan.
- Gunakan *plain language financial reports* agar operator lantai produksi dapat memahami dampak finansial dari keputusan operasional mereka.
- Integrasi VSC dengan sistem ERP modern memerlukan pemetaan ulang struktur akun biaya.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>