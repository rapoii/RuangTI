# 3022 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor MRO Penerbangan
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global beroperasi pada standar keandalan (*reliability*) dan ketersediaan (*availability*) tertinggi di antara seluruh moda transportasi massal. Sebuah armada pesawat Narrow-Body yang melayani 5.000–8.000 jam terbang per unit per tahun akan menjalani serangkaian inspeksi terstruktur yang diklasifikasikan secara hirarkis menjadi *A-Check*, *B-Check*, *C-Check*, dan *D-Check* sesuai protokol OEM (Original Equipment Manufacturer) seperti Boeing dan Airbus. Biaya *direct maintenance* sebuah armada maskapai berskala menengah (50–100 unit) dapat menyerap 10–14 % dari total biaya operasional (OPSEX), dan setiap satu jam *ground time* pesawat Narrow-Body bernilai ekonomi机会成本 antara USD 12.000 hingga USD 25.000, tergantung rute dan waktu siklus (*block hour*) (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Dalam konteks inilah *Reliability-Centered Maintenance* (RCM) muncul bukan sekadar sebagai kerangka inspeksi berkala, melainkan sebagai disiplin optimasi yang mengelola degradasi non-linear performa *life-cycle* sistem.

Tantangan mendasar yang diangkat Zhou (2024) adalah bagaimana menjadwalkan siklus *D-Check* (overhaul penuh yang membutuhkan *downtime* 30–60 hari) bersamaan dengan *partial refurbishments* pada fase *mature-run* operasi penerbangan — sebuah fase di mana komponen kritis telah melampaui *infant mortality* namun belum mendekati *wear-out*. Model ketersediaan armada (*fleet availability*) yang dikembangkan tidak lagi memperlakukan keempat tingkat pemeriksaan sebagai variabel independen, melainkan sebagai kebijakan hirarkis dengan kendala ketergantungan matematis. Artikel lanjutan Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) mempertegas urgensi masalah: pada maskapai-maskapai Asia Tenggara dengan utilisasi armada 11–13 jam per hari, *unscheduled removal rate* komponen Landing Gear, APU, dan Integrated Drive Generator berkontribusi terhadap 38–47 % dari total *AOG (Aircraft On Ground)*事件. Kegagalan menerapkan kebijakan pemeliharaan hirarkis yang optimal dapat menurunkan *fleet availability* dari target industri 90–95 % menjadi 78–82 %, dengan dampak langsung berupa hilangnya revenue slot di *hub* bandara sibuk serta penalty pada *lease rate* komponen rotables. Oleh karena itu, pengembangan model kuantitatif yang secara eksplisit membuktikan keberadaan nilai optimal kebijakan pemeliharaan memiliki signifikansi manajerial dan teknis yang substansial bagi sektor MRO penerbangan modern.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Ketersediaan Intrinsik

Ketersediaan armada (*fleet availability*) didefinisikan sebagai rasio *uptime* terhadap total waktu siklus:

$$A = \frac{T_{op}}{T_{op} + T_{down}}$$

di mana $T_{op}$ adalah akumulasi jam terbang atau hari kalender operasional, dan $T_{down}$ adalah akumulasi *downtime* akibat semua jenis inspeksi terjadwal maupun *unscheduled removal*. Untuk kebijakan hirarkis A/B/C/D, $T_{down}$ dapat diuraikan sebagai:

$$T_{down}^{cycle} = N_A \cdot \bar{d}_A + N_B \cdot \bar{d}_B + N_C \cdot \bar{d}_C + \bar{d}_D + N_{part} \cdot \bar{d}_{part}$$

dengan $\bar{d}_j$ adalah *mean downtime* pemeriksaan tingkat $j \in \{A,B,C,D\}$, dan $d_D$ adalah durasi *D-Check* penuh. Jumlah pemeriksaan per siklus *D-Check*:

$$N_A = \left\lfloor \frac{\tau_D}{\tau_A} \right\rfloor, \quad N_B = \left\lfloor \frac{\tau_D}{\tau_B} \right\rfloor, \quad N_C = \left\lfloor \frac{\tau_D}{\tau_C} \right\rfloor, \quad N_{part} = \left\lfloor \frac{\tau_D}{\tau_{part}} \right\rfloor$$

di mana $\tau_j$ adalah interval antar-pemeriksaan tingkat $j