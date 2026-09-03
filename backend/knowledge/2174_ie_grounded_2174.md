# 2174 — Kebijakan Pemeliharaan Hierarki Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi di Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global mengelola armada dengan kapitalisasi aset yang luar biasa besar—lebih dari USD 1 triliun nilai pesawat narrow-body dan wide-body yang beroperasi pada 2024, dengan siklus hidup teknis 25–30 tahun per unit. Dalam konteks ini, *Maintenance, Repair, and Overhaul* (MRO) bukan sekadar fungsi pendukung, melainkan penentu langsung profitabilitas operator karena satu jam *ground time* pesawat narrow-body seperti Airbus A320 atau Boeing 737 dapat menimbulkan *opportunity loss* sebesar USD 8.000–12.000 dalam bentuk pendapatan tiket dan biaya *passenger compensation*. Hang Zhou (2024) dalam karyanya yang dipublikasikan pada *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menegaskan bahwa **Reliability-Centered Maintenance (RCM)** menjadi kerangka unggulan untuk mengkuantifikasi degradasi performa *life-cycle* yang bersifat *non-linear* serta mengoptimalkan operasi dengan tetap mempertahankan keselamatan tertinggi.

Kompleksitas struktur pemeliharaan penerbangan modern muncul dari kebijakan *check* hierarki yang telah distandardisasi secara internasional: **A-check** (rutin ringan, ~600 flight hours), **B-check** (menengah, ~6 bulan), **C-check** (mayor, ~20–24 bulan), dan **D-check** (*heavy maintenance visit* penuh, ~6–12 tahun). Setiap level check memiliki karakteristik biaya, downtime, dan cakupan task yang berbeda. Tantangan sentral yang diidentifikasi Zhou (2024) adalah bagaimana menjadwalkan *fully refurbished D-check cycles* bersamaan dengan *partial refurbishments* selama fase *mature-run* operasi agar ketersediaan armada (*fleet availability*) dapat dimaksimumkan tanpa mengorbanski margin keselamatan atau struktur biaya yang telah disetujui regulator. Lebih lanjut, pada versi yang diperbarui dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672), Zhou mempertegas bahwa eksistensi nilai optimal pada model ketersediaan bukan asumsi, melainkan dibuktikan secara analitis melalui *renewal theory* dan optimasi constrained. Urgensi praktis dari riset ini sangat relevan bagi operator dengan lebih dari 50 unit armada, di mana satu peningkatan 1% pada *fleet availability* ekuivalen dengan tambahan 3–5 unit pesawat *virtual*—berdampak langsung pada CAPEX avoidance senilai ratusan juta dolar.

## 2. Landasan Teori & Formulasi Matematis

Model yang diajukan Zhou (2024) dibangun di atas *Renewal Reward Theorem* dengan asumsi proses stasioner. Definisi variabel keputusan dan parameter model adalah sebagai berikut:

- $N_A, N_B, N_C, N_D$ = jumlah masing-masing check yang dijadwalkan per siklus hierarki
- $T_{op}$ = total *operating time* (flight hours) per siklus
- $T_{pm}^{A}, T_{pm}^{B}, T_{pm}^{C}, T_{pm}^{D}$ = downtime masing-masing check (jam)
- $c_A, c_B, c_C, c_D$ = biaya langsung per check (USD)
- $\lambda(t)$ = laju kegagalan *time-dependent* akibat degradasi
- $R(t)$ = fungsi reliabilitas komponen/subsistem

**Persamaan 1 — Model Ketersediaan Hierarki (Long-Run Availability):**

$$
A_{fleet} = \lim_{t \to \infty} \frac{\mathbb{E}[U(t)]}{t} = \frac{T_{op}^{cycle}}{T_{op}^{cycle} + \sum_{i \in \{A,B,C,D\}} N_i \cdot T_{pm}^{i}}
$$

dengan $T_{op}^{cycle}$ adalah total *useful operating time* sampai siklus penuh D-check berikutnya.

**Persamaan 2 — Model Degradasi Reliabilitas (Distribusi Weibull untuk Fase *Mature-Run*):**

$$
R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}
$$

di mana $\eta$ adalah *scale parameter* dan $\beta > 1$ menandai *wear-out phase* pada komponen kritis (mesin, *landing gear*, *avionics*).

**Persamaan 3 — Fungsi Objektif Optimasi (Maksimisasi KAvailability Tersedia):**

$$
\max_{N_A, N_B, N_C} \; A_{fleet}(N_A, N_B, N_C) = \frac{T_{op} - T_{cm}^{corrective}}{\left(T_{op} - T_{cm}^{corrective}\right) + \left(N_A T_{pm}^A + N_B T_{pm}^B + N_C T_{pm}^C + N_D T_{pm}^D\right)}
$$

dengan kendala:
$$
\sum_{i \in \{A,B,C,D\}} N_i \cdot c_i \leq C_{budget}^{annual}
$$
$$
R(t_{i+1}^{-}) \geq R_{threshold}
$$

Zhou (2024) menunjukkan bahwa fungsi $A_{fleet}(N_A, N_B, N_C)$ bersifat *quasi-concave* pada domain yang layak, sehingga **nilai optimal interior eksis dan tunggal**, yang dibuktikan melalui turunan pertama:

$$
\frac{\partial A_{fleet}}{\partial N_i} = -\frac{T_{op} \cdot T_{pm}^{i}}{\left(T_{op} + \sum_j N_j T_{pm}^{j}\right)^2}
$$

Nilai optimum terjadi ketika *marginal benefit* peningkatan reliabilitas akibat check tambahan sama dengan *marginal cost* downtime yang ditimbulkannya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan hierarki RCM mengikuti SOP berlapis yang diuraikan sebagai berikut:

**Tahap 1 — Segmentasi Sistem & Klasifikasi Komponen.** Pesawat diuraikan menjadi *ATA Chapter* (Air Transport Association) — 100 sistem (Air Conditioning), 200 (Pneumatic), 320 (Landing Gear), dan seterusnya. Setiap komponen diberi label signifikansi