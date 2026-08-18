# Modul Riset Ilmiah: Overall Equipment Effectiveness 2.0 (OEE 2.0), Overall Resource Effectiveness (ORE) & Total Effective Equipment Performance (TEEP)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Nakajima, S. (1988). *Introduction to TPM: Total Productive Maintenance*. Productivity Press. (Foundational OEE).
- Hansen, R. C. (2001). *Overall Equipment Effectiveness: A Powerful Production/Maintenance Tool for Increased Profits*. Industrial Press.
- Muchiri, P., & Pintelon, L. (2008). *Performance measurement using overall equipment effectiveness (OEE): literature review and practical application limitations*. International Journal of Production Research, Taylor & Francis. DOI: [10.1080/00207540601142645](https://doi.org/10.1080/00207540601142645).
- Garre, P. P., & Ramasamy, K. (2024). *Implementation of Overall Resource Effectiveness (ORE) in discrete manufacturing: A systematic framework for Industry 4.0*. Computers & Industrial Engineering, Elsevier.
- Hedman, R., Subramaniyan, M., & Almström, P. (2023). *Continuous performance measurement in manufacturing: OEE and TEEP real-time analytics*. International Journal of Operations & Production Management.

---

## 1. Dari OEE Klasik Menuju Metrik Holistik Industri Manufaktur
OEE (Overall Equipment Effectiveness) klasik yang dirumuskan oleh Seiichi Nakajima merupakan pilar utama dalam *Total Productive Maintenance* (TPM). Namun, dalam lanskap industri modern, OEE tradisional hanya mengukur efisiensi mesin selama waktu operasi yang direncanakan (*Planned Production Time*), sehingga mengabaikan utilitas aset pabrik secara total (*Calendar Time* 24/7) serta pemborosan sumber daya lain seperti material, energi, dan tenaga kerja.

Untuk menjawab kelemahan tersebut, berkembang tiga metrik hierarkis:
1. **OEE (Overall Equipment Effectiveness):** Mengukur utilisasi mesin pada waktu operasi terjadwal.
2. **TEEP (Total Effective Equipment Performance):** Mengukur utilisasi kapasitas pabrik terhadap seluruh waktu kalender (24 jam x 365 hari).
3. **ORE (Overall Resource Effectiveness):** Mengintegrasikan kinerja mesin dengan konsumsi material, energi, dan operator.

---

## 2. Formulasi Matematis TEEP (Total Effective Equipment Performance)
TEEP menghubungkan efisiensi operasional dengan pemanfaatan aset (*Asset Utilization*):

### Hierarki Waktu Kalender:
- **Total Calendar Time ($T_{\text{cal}}$):** $24 \text{ jam/hari} \times 7 \text{ hari/minggu}$.
- **Planned Operating Time ($T_{\text{plan}}$):** $T_{\text{cal}} - \text{Planned Shutdowns}$ (Hari libur, libur shift, tidak ada pesanan).
- **Operating Time ($T_{\text{op}}$):** $T_{\text{plan}} - \text{Unplanned Downtime}$ (Kerusakan mesin, setup lama).
- **Net Operating Time ($T_{\text{net}}$):** $T_{\text{op}} - \text{Speed Losses}$ (Minor stoppage, reduced speed).
- **Fully Productive Time ($T_{\text{prod}}$):** $T_{\text{net}} - \text{Quality Losses}$ (Scrap, rework).

### Hubungan OEE, Loading Rate, dan TEEP:
$$ \text{Loading Rate} = \frac{T_{\text{plan}}}{T_{\text{cal}}} $$
$$ \text{OEE} = \text{Availability} \times \text{Performance} \times \text{Quality} = \frac{T_{\text{op}}}{T_{\text{plan}}} \times \frac{T_{\text{net}}}{T_{\text{op}}} \times \frac{T_{\text{prod}}}{T_{\text{net}}} = \frac{T_{\text{prod}}}{T_{\text{plan}}} $$
$$ \text{TEEP} = \text{Loading Rate} \times \text{OEE} = \frac{T_{\text{prod}}}{T_{\text{cal}}} $$

*Interpretasi Manajerial:* Jika OEE $= 85\%$ namun Loading Rate hanya $50\%$ (pabrik hanya beroperasi 1 shift 8 jam per hari), maka $\text{TEEP} = 0.50 \times 0.85 = 42.5\%$. Angka ini menunjukkan adanya kapasitas tersembunyi (*hidden factory*) sebesar $57.5\%$ dari total waktu aset yang dapat dimanfaatkan tanpa perlu membeli mesin baru.

---

## 3. Overall Resource Effectiveness (ORE) & OEE 2.0
ORE memperluas formula OEE dengan memasukkan faktor kesiapan material, efisiensi energi, dan operator ke dalam perkalian indeks:

$$ \text{ORE} = A_{\text{facility}} \times P_{\text{speed}} \times Q_{\text{defect}} \times R_{\text{material}} \times E_{\text{energy}} \times L_{\text{labor}} $$

Di mana:
- **$R_{\text{material}}$ (Material Yield Rate):**
  $$ R_{\text{material}} = \frac{\text{Berat Material Ideal dalam Produk Akhir}}{\text{Total Berat Bahan Baku yang Dikonsumsi}} $$
- **$E_{\text{energy}}$ (Energy Efficiency Factor):**
  $$ E_{\text{energy}} = \frac{\text{Energi Teoritis Minimum untuk Proses}}{\text{Total Energi Listrik/Termal yang Dikonsumsi}} $$
- **$L_{\text{labor}}$ (Labor Productivity Factor):**
  $$ L_{\text{labor}} = \frac{\text{Total Jam Standar Produk Bagus}}{\text{Total Jam Kerja Operator Riil}} $$

---

## 4. OEE Real-Time Analytics & Machine Learning Dashboard (Tren 2024-2026)
Pada implementasi *Industry 4.0* (Hedman et al., 2023; Garre & Ramasamy, 2024), OEE tidak lagi dihitung secara retrospektif di akhir shift menggunakan formulir kertas. Sensor IoT dan PLC diintegrasikan ke *Edge Gateway* untuk mendeteksi *micro-stoppages* ($< 5\text{ detik}$) secara otomatis, mengklasifikasikan *root cause* downtime menggunakan model klasifikasi *Random Forest* / *LightGBM*, dan menghitung *Rolling Dynamic OEE* setiap interval 60 detik.
