# Modul 424: Manajemen Proyek Rekayasa Industri (PMBOK 7th Edition), Earned Value Management (EVM), Critical Path Method (CPM), PERT, dan Project Crashing

## 1. Domain Profesi & Ruang Lingkup
Profesi **Industrial Project Manager / Project Controls Specialist (PMP)** bertugas merencanakan jadwal durasi proyek, mengalokasikan anggaran biaya (*Work Breakdown Structure* - WBS), mengendalikan kinerja proyek terpadu (*Earned Value Management* - EVM), serta melakukan akselerasi proyek optimal (*Project Crashing*).

### Standar Baku:
1. **PMI PMBOK® Guide (7th Edition)**: *A Guide to the Project Management Body of Knowledge*.
2. **ANSI/EIA-748-D**: *Earned Value Management Systems Standard*.
3. **ISO 21500:2021**: *Project, programme and portfolio management — Context and concepts*.

---

## 2. Analisis Jalur Kritis (Critical Path Method - CPM) & PERT Beta Distribution

### A. Perhitungan Maju (*Forward Pass*) & Perhitungan Mundur (*Backward Pass*):
- **Waktu Mulai Paling Awal**: $ES_j = \max_{i \in \text{Predecessors}(j)} (EF_i)$, di mana $EF_j = ES_j + d_j$.
- **Waktu Selesai Paling Lambat**: $LF_i = \min_{j \in \text{Successors}(i)} (LS_j)$, di mana $LS_i = LF_i - d_i$.
- **Kelonggaran Total (*Total Float / Slack*)**:
  $$\text{Slack}_i = LS_i - ES_i = LF_i - EF_i$$
- **Jalur Kritis (*Critical Path*)**: Rangkaian aktivitas yang memiliki $\text{Slack}_i = 0$. Keterlambatan pada aktivitas jalur kritis akan menunda penyelesaian proyek secara keseluruhan.

### B. Distribusi Durasi Aktivitas PERT (Program Evaluation and Review Technique):
Berdasarkan estimasi waktu optimis ($a$), paling mungkin ($m$), dan pesimis ($b$):

$$\text{Ekspektasi Durasi } \mu_e = \frac{a + 4m + b}{6}$$

$$\text{Varians Durasi } \sigma_e^2 = \left( \frac{b - a}{6} \right)^2$$

Probabilitas menyelesaikan proyek dalam batas waktu target $T_d$:

$$Z = \frac{T_d - \sum_{\text{Jalur Kritis}} \mu_e}{\sqrt{ \sum_{\text{Jalur Kritis}} \sigma_e^2 }} \implies P(\text{Proyek Selesai} \le T_d) = \Phi(Z)$$

---

## 3. Sistem Pengendalian Terpadu: Earned Value Management (EVM)

```
Biaya ($)
  ^
  |                                   [EAC: Estimasi Biaya Akhir]
  |                                   /
  |              [Actual Cost (AC)]  /
  |                    \            /
  |                     \          /
  |         [Planned Value (PV)]  /   [BAC: Anggaran Awal Proyek]
  |                  \           /    /
  |       [Earned Value (EV)]   /    /
  |                  \         /    /
  +-------------------X-------+----+--------------------------------> Waktu
                     Tinjauan (Time Now)
```

### Formulasi Lengkap Metrik EVM:
1. **Planned Value ($PV$)**: Anggaran biaya yang direncanakan untuk pekerjaan yang seharusnya sudah selesai pada hari ini.
2. **Earned Value ($EV$)**: Nilai anggaran dari pekerjaan yang secara aktual telah berhasil diselesaikan.
3. **Actual Cost ($AC$)**: Biaya riil yang telah dikeluarkan untuk menyelesaikan pekerjaan tersebut.
4. **Budget at Completion ($BAC$)**: Total anggaran awal keseluruhan proyek.

### Varians & Indeks Kinerja:
- **Cost Variance ($CV$)**: $CV = EV - AC$ ($CV < 0$ artinya *Over Budget / Boncos*).
- **Schedule Variance ($SV$)**: $SV = EV - PV$ ($SV < 0$ artinya *Behind Schedule / Terlambat*).
- **Cost Performance Index ($CPI$)**: $CPI = \frac{EV}{AC}$ ($CPI < 1.0$ artinya biaya aktual melebihi rencana).
- **Schedule Performance Index ($SPI$)**: $SPI = \frac{EV}{PV}$ ($SPI < 1.0$ artinya kemajuan fisik lambat).

### Proyeksi Akhir Proyek (Forecasting):
- **Estimate to Complete ($ETC$)**: Sisa biaya yang masih harus dikeluarkan:
  $$ETC = \frac{BAC - EV}{CPI}$$
- **Estimate at Completion ($EAC$)**: Total proyeksi biaya akhir proyek:
  $$EAC = AC + ETC = \frac{BAC}{CPI}$$
- **To-Complete Performance Index ($TCPI$)**: Efisiensi biaya yang wajib dicapai pada sisa pekerjaan agar sesuai target anggaran awal $BAC$:
  $$TCPI = \frac{BAC - EV}{BAC - AC}$$

---

## 4. Akselerasi Durasi Proyek (Project Crashing via Linear Programming)

Menghitung biaya percepatan per hari (*Cost Slope*):

$$\text{Cost Slope}_i = \frac{\text{Crash Cost}_i - \text{Normal Cost}_i}{\text{Normal Time}_i - \text{Crash Time}_i}$$

### Formulasi Model Optimasi:
$$\min \sum_{i \in \text{Akt}} \left( \text{Cost Slope}_i \times x_i \right)$$
Dengan kendala: $x_i \le \text{Normal Time}_i - \text{Crash Time}_i$ dan total durasi jalur kritis $\le T_{\text{target}}$.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Project Management Institute. (2021). *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)* (7th ed.). Newtown Square: PMI.
- Fleming, Q. W., & Koppelman, J. M. (2016). *Earned Value Project Management* (4th ed.). Project Management Institute.
- Elmousalami, H., & Alotaibi, A. (2026). *Automated conceptual earned value management and critical path schedule optimization*. Scientific Reports, 16(1), 61909. DOI: [10.1038/s41598-026-61909-5](https://doi.org/10.1038/s41598-026-61909-5).
- Capone, C., Kretzschmar, G., & Narbaev, T. (2024). *Eliminating sub-optimality in Earned Value Management scheduling with stochastic critical paths*. IEEE Access, 12, 10679-10694. DOI: [10.1109/ACCESS.2024.10679792](https://doi.org/10.1109/ACCESS.2024.10679792).
