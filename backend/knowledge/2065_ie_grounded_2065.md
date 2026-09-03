# 2065 — Optimalisasi Manajemen Permintaan Sisi Permukiman (Residential Demand Side Management) dan Optimasi Stokastik Jaringan Energi Hibrid Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Residential Demand Side Management model, optimization and future perspective: A review
**Jurnal & Sitasi Utama:** Subhasis Panda, Sarthak Mohanty, Pravat Kumar Rout (2022). *Energy Reports*. DOI: [https://doi.org/10.1016/j.egyr.2022.02.300](https://doi.org/10.1016/j.egyr.2022.02.300)
**Sitasi Pendukung:** Nouman Qamar, Mohammed Alqahtani, Muhammad Rehan (2025). *PLoS ONE*. DOI: [https://doi.org/10.1371/journal.pone.0323491](https://doi.org/10.1371/journal.pone.0323491)

---

## 1. Pendahuluan dan Konteks Industri

Sektor residensial atau permukiman merupakan kontributor dominan terhadap profil beban total sistem tenaga listrik modern. Menurut Panda, Mohanty, dan Rout (2022) dalam *Energy Reports*, sektor residensial menyumbang porsi signifikan pada neraca daya keseluruhan, sehingga dinamika bebannya yang bersifat *non-linear*, *uncontrollable*, dan *inelastic* terhadap regulasi grid menjadi tantangan struktural bagi operator distribusi dan agregator energi (DOI: [10.1016/j.egyr.2022.02.300](https://doi.org/10.1016/j.egyr.2022.02.300)). Ketidakfleksibelan historis ini menyebabkan terbentuknya puncak beban (*peak demand*) yang mahal, inefisiensi kapasitas pembangkitan, dan degradasi kualitas tegangan di ujung feeder.

Konteks industri dan urgensi operasionalnya muncul dari tiga konvergensi teknologi. Pertama, integrasi *Distributed Generation* (DG) — khususnya fotovoltaik atap (PV rooftop) dan turbin angin skala kecil — mengubah konsumen pasif menjadi *prosumer* aktif dengan profil injeksi dua arah. Kedua, kematangan *Information and Communication Technology* (ICT) melalui smart meter, *Home Energy Management System* (HEMS), dan protokol IEEE 2030.5/OCPP membuka peluang *real-time scheduling*. Ketiga, elektrifikasi transportasi melalui *Plug-in Hybrid Electric Vehicles* (PHEV) menambah beban yang sangat volatil. Qamar, Alqahtani, dan Rehan (2025) dalam *PLoS ONE* menekankan bahwa sifat intermiten *Renewable Energy Sources* (RES) dan ketidakpastian pola konektivitas PHEV di Residential Energy Hub (REH) membuat pemodelan konvensional deterministik tidak lagi memadai (DOI: [10.1371/journal.pone.0323491](https://doi.org/10.1371/journal.pone.0323491)).

Secara ekonomi, DSM di sektor residensial tidak hanya memindahkan beban dari jam puncak ke jam lembah (*load shifting*), melainkan juga menurunkan tagihan listrik, menunda investasi kapasitas transmisi, dan mendukung dekarbonisasi. Bagi insinyur industri, DSM merupakan persoalan *scheduling* klasik dengan tambahan dimensi ketidakpastian — sebuah domain di mana metode optimasi stokastik seperti *Mixed Integer Linear Programming* (MILP) dan *stochastic programming* menjadi relevan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Optimasi DSM Deterministik (Panda et al., 2022)

Formulasi dasar DSM residensial meminimalkan biaya listrik total selama horizon perencanaan $T$ (misal 24 jam dengan interval $\Delta t = 1$ jam):

$$\min_{x_{a,t}} \quad Z = \sum_{t=1}^{T} \pi_t^{TOU} \cdot P_t^{grid} \cdot \Delta t$$

dengan:
- $\pi_t^{TOU}$ = tarif *Time-of-Use* pada slot waktu $t$ (Rp/kWh)
- $P_t^{grid}$ = daya yang diimpor dari jaringan pada waktu $t$ (kW)
- $x_{a,t} \in \{0,1\}$ = variabel biner yang menandakan status nyala/mati alat $a$ pada waktu $t$

**Kendala keseimbangan daya:**

$$\sum_{a \in \mathcal{A}} P_a \cdot x_{a,t} + P_t^{basal} = P_t^{PV} + P_t^{grid} - P_t^{bat,ch} + P_t^{bat,dis}$$

**Kendala durasi operasi alat (untuk shiftable appliances):**

$$\sum_{t=t_s}^{t_s+L_a-1} x_{a,t} = L_a, \quad \forall a \in \mathcal{A}^{shift}$$

dengan $L_a$ adalah panjang siklus operasi dan $[t_s, t_s+L_a-1]$ adalah window yang dipilih.

**Kendala baterai:**

$$E_t^{bat} = E_{t-1}^{bat} + \eta^{ch} P_t^{bat,ch}\Delta t - \frac{P_t^{bat,dis}}{\eta^{dis}}\Delta t$$

$$E_{bat}^{min} \leq E_t^{bat} \leq E_{bat}^{max}, \quad 0 \leq P_t^{bat,ch}, P_t^{bat,dis} \leq P_{bat}^{rated}$$

### 2.2 Formulasi MILP untuk Residential Energy Hub (Qamar et al., 2025)

Qamar et al. (2025) menyusun REH sebagai *multi-carrier energy system* yang menjembatani listrik, panas, dan hidrogen. Fungsi tujuan *expected operational cost*:

$$\min \quad \mathbb{E}_{\omega \in \Omega}\left[\sum_{t=1}^{T} C_t^{grid}(P_t^{grid}) + C_t^{fuel} + C_t^{PHEV}\right]$$

yang dengan *scenario decomposition* menjadi:

$$\min \quad \sum_{s=1}^{S} \rho_s \sum_{t=1}^{T}\left(\pi_t P_{t,s}^{grid} + \gamma_t F_{t,s} + \zeta P_{t,s}^{PHEV,grid}\right)$$

dengan $\rho_s$ probabilitas skenario, $\pi_t$ tarif listrik, $\gamma_t$ harga bahan bakar, $\zeta$ biaya pengisian PHEV dari grid.

**Kendala keseimbangan energi multi-karier:**

$$P_{t,s}^{grid} + P_{t,s}^{PV} + P_{t,s}^{WT} + P_{t,s}^{bat,dis} = P_{t,s}^{L} + P_{t,s}^{bat,ch} + P_{t,s}^{PHEV,ch}$$

**Kendala PHEV (variabel biner untuk mode V2G):**

$$u_{t,s}^{ch} + u_{t,s}^{dis} \leq 1, \quad u_{t,s}^{ch}, u_{t,s}^{dis} \in \{0,1\}$$

$$SOC_{t,s}^{PHEV} = SOC_{t-1,s}^{PHEV} + \eta_{ch} u_{t,s}^{ch} P^{ch,rated}\Delta t - \frac{u_{t,s}^{dis} P^{dis,rated}}{\eta_{dis}}\Delta t$$

$$SOC_{min}^{PHEV} \leq SOC_{t,s}^{PHEV} \leq SOC_{max}^{PHEV}$$

Permodelan ketidakpastian RES dan PHEV menggunakan *scenario generation* melalui Monte Carlo Simulation (MCS) dari distribusi Weibull (angin) dan Beta (PV), serta distribusi Poisson untuk *arrival/departure* PHEV, lalu direduksi dengan *forward scenario reduction* (algoritma Kantorovich) untuk komputabilitas MILP.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DSM-OPT di lingkungan industri/manufaktur mengikuti SOP berlapis:

**Tahap 1 — Karakterisasi Beban & Audit Energi.** Instalasi smart meter kelas 0.2S pada panel utama, logging konsumsi per-sirkuit selama minimum 14 hari, dan identifikasi *baseload*, *shiftable loads* (HVAC, water heater, EV charger, proses batch), serta *non-shiftable loads* (pencahayaan kritis, IT). Standar acuan: ISO 50001 (Energi Manajemen) dan IEC 61850 untuk komunikasi.

**Tahap 2 — Pemodelan & Formulasi.** Pilih granularity (15-menit atau 60-menit), bangun *appliance matrix* $\mathcal{A}$, set horizon $T$, dan kalibrasi parameter tarif TOU. Formulasikan MILP di atas platform GAMS/CPLEX (Qamar et al., 2025) atau Pyomo/Gurobi (alternatif open-source).

**Tahap 3 — Generasi Skenario Ketidakpastian.** Gunakan historical weather data 5 tahun dan data mobilitas PHEV untuk membangun 1000 skenario awal, lalu reduksi menjadi $S=20-50$ skenario representatif menggunakan *fast forward selection*.

**Tahap 4 — Eksekusi Optimasi & Validasi.** Solve MILP, verifikasi *MIP gap* < 0.5%, jalankan *sensitivity analysis* terhadap parameter tarif, kapasitas baterai, dan penetrasi PV.

**Tahap 5 — Diseminasi ke HEMS/Building Automation System (BAS).** Kirim *optimal schedule* ke controller lokal via protokol BACnet/Modbus, dengan *fallback rule-based* jika solver gagal konvergen.

**Diagram Alir Proses:**

```
[Data Smart Meter] → [Pre-processing & Clustering] → [Scenario Generation (MCS)]
        ↓
[Formulasi MILP] → [Solver CPLEX/Gurobi] → [Validasi Gap] → [Schedule Optimal]
        ↓                                                              ↓
[Feedback ke Operator] ← [Human-in-the-loop] ← [BAS/Controller]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah rumah tangga mewah dengan PV 5 kWp, baterai Li-ion 10 kWh (DOD 80%), dan satu PHEV (kapasitas 18 kWh, SOC awal 40%, target SOC 80% saat berangkat jam 07:00). Tarif TOU: Rp1.500/kWh (00.00–17.00), Rp2.500/kWh (17.00–22.00), Rp1.000/kWh (22.00–24.00).

**Profil beban dan PV (jam tertentu):**

| Jam (t) | Beban (kW) | PV (kW) | Tarif (Rp/kWh) |
|---------|-----------|---------|----------------|
| 01.00   | 0,80      | 0,00    | 1.500          |
| 12.00   | 1,20      | 3,50    | 1.500          |
| 18.00   | 2,50      | 0,80    | 2.500          |
| 23.00   | 1,50      | 0,00    | 1.000          |

**Perhitungan biaya tanpa optimasi (baseline):**
Total energi harian ≈ 35 kWh. Proporsi konsumsi jam puncak (17.00–22.00) ≈ 12 kWh, jam lembah ≈ 10 kWh, jam normal ≈ 13 kWh.

$$C_{base} = (12 \times 2.500) + (13 \times 1.500) + (10 \times 1.000) = 30.000 + 19.500 + 10.000 = \mathbf{Rp.59.500}$$

**Setelah optimasi DSM:** Beban shiftable (water heater 2 kW × 2 jam, dishwasher 1,5 kW × 1 jam) dipindahkan ke 22.00–24.00 dan 13.00 (saat PV surplus). PHEV diisi dari 22.00–05.00 (lembah). Hitungan ulang:

- Konsumsi puncak: 12 → 8 kWh → hemat 4 × 1.000 = Rp4.000
- Pengisian PHEV 12 kWh di lembah: biaya 12 × 1.000 = Rp12.000 (sebelumnya 6 kWh di puncak = Rp15.000) → hemat Rp3.000
- Ekspor PV surplus (3 kWh diekspor *feed-in* Rp1.000/kWh) = +Rp3.000

$$C_{opt} = 59.500 - 4.000 - 3.000 - 3.000 = \mathbf{Rp.49.500}$$

**Penghematan: 16,8%** atau setara Rp365.000/bulan (faktor 30 hari), dengan payback period investasi HEMS (Rp15 juta) kurang dari 3 tahun pada skenario konservatif.

**Validasi stokastik (Qamar et al., 2025):** Untuk 20 skenario RES.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
