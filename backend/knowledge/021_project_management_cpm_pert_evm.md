# Modul Riset Ilmiah: Manajemen Proyek Industri (Project Management - CPM, PERT, Crashing, & EVM)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Kerzner, H. (2017). *Project Management: A Systems Approach to Planning, Scheduling, and Controlling* (12th ed.). Wiley. ISBN: 978-1119165354.
- Moder, J. J., Phillips, C. R., & Davis, E. W. (1983). *Project Management with CPM, PERT and Precedence Diagramming* (3rd ed.). Van Nostrand Reinhold.
- Fleming, Q. W., & Koppelman, J. M. (2010). *Earned Value Project Management* (4th ed.). Project Management Institute (PMI).

---

## 1. Critical Path Method (CPM)
CPM adalah teknik deterministik untuk mengidentifikasi lintasan kritis (*Critical Path*)—yaitu rangkaian aktivitas terpanjang dari awal hingga akhir proyek yang menentukan durasi total penyelesaian proyek minimum.

### Perhitungan Two-Pass Algorithm:
1. **Forward Pass (Penentuan Waktu Paling Awal):**
   - $\text{Early Start (ES)}_j = \max_{i \in \text{Predecessors}} \{ \text{EF}_i \}$
   - $\text{Early Finish (EF)}_j = \text{ES}_j + D_j$ ($D_j =$ Durasi Aktivitas)
2. **Backward Pass (Penentuan Waktu Paling Akhir):**
   - $\text{Late Finish (LF)}_i = \min_{j \in \text{Successors}} \{ \text{LS}_j \}$
   - $\text{Late Start (LS)}_i = \text{LF}_i - D_i$
3. **Total Float / Slack ($TF$):**
   $$TF_j = \text{LS}_j - \text{ES}_j = \text{LF}_j - \text{EF}_j$$
   *Aktivitas berada pada **Critical Path** jika dan hanya jika $TF = 0$.*

---

## 2. Program Evaluation and Review Technique (PERT)
PERT digunakan ketika durasi aktivitas bersifat probabilistik (tidak pasti) dengan model distribusi Beta (3 titik estimasi waktu):
- $a =$ Waktu Optimis (*Optimistic Time*)
- $m =$ Waktu Paling Mungkin (*Most Likely Time*)
- $b =$ Waktu Pesimis (*Pessimistic Time*)

### Formulasi Matematis PERT:
1. **Waktu Ekspektasi Aktivitas ($t_e$):**
   $$t_e = \frac{a + 4m + b}{6}$$
2. **Varians Aktivitas ($\sigma^2$):**
   $$\sigma^2 = \left( \frac{b - a}{6} \right)^2$$
3. **Probabilitas Penyelesaian Proyek pada Target Waktu ($T_d$):**
   $$\text{Varians Total Proyek } \sigma_p^2 = \sum_{k \in \text{Critical Path}} \sigma_k^2$$
   $$Z = \frac{T_d - T_e}{\sigma_p} = \frac{T_d - \sum t_{e,\text{critical}}}{\sqrt{\sigma_p^2}}$$
   *Cari nilai $P(Z \le z)$ pada tabel distribusi Normal Standar.*

---

## 3. Kompresi Jadwal Proyek (Project Crashing)
Mempercepat durasi proyek dengan alokasi sumber daya tambahan pada biaya terendah.
$$\text{Cost Slope (Biaya Percepatan per Satuan Waktu)} = \frac{\text{Crash Cost} - \text{Normal Cost}}{\text{Normal Time} - \text{Crash Time}}$$
*Aturan: Lakukan percepatan HANYA pada aktivitas di jalur kritis dengan nilai **Cost Slope terkecil**.*

---

## 4. Earned Value Management (EVM)
Metrik standar pengendalian biaya dan kinerja jadwal proyek:
- **Planned Value (PV):** Anggaran biaya yang direncanakan untuk pekerjaan terjadwal.
- **Earned Value (EV):** Nilai anggaran dari pekerjaan riil yang telah berhasil diselesaikan.
- **Actual Cost (AC):** Total biaya aktual yang telah dikeluarkan.

### Varians & Indeks Kinerja:
- **Cost Variance (CV):** $CV = EV - AC$ *(Jika $CV > 0$: Hemat Biaya)*
- **Schedule Variance (SV):** $SV = EV - PV$ *(Jika $SV > 0$: Lebih Cepat dari Jadwal)*
- **Cost Performance Index (CPI):** $CPI = \frac{EV}{AC}$ *(Jika $CPI > 1.0$: Efisiensi Biaya Baik)*
- **Schedule Performance Index (SPI):** $SPI = \frac{EV}{PV}$ *(Jika $SPI > 1.0$: Progres Jadwal Baik)*
- **Estimate at Completion (EAC):** $EAC = \frac{\text{BAC}}{CPI}$ *(BAC = Budget at Completion)*

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
