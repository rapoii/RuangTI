# 1440 — Penjadwalan Distributed Permutation Flow-Shop Berkelanjutan dengan Optimasi Real-Time Menggunakan Mixed-Integer Programming

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A distributed permutation flow-shop considering sustainability criteria and real-time scheduling
**Jurnal & Sitasi Utama:** Amir M. Fathollahi-Fard, L. A. Woodward, Ouassima Akhrif (2024). *Journal of Industrial Information Integration*. DOI: [https://doi.org/10.1016/j.jii.2024.100598](https://doi.org/10.1016/j.jii.2024.100598)
**Sitasi Pendukung:** Dušan Hrabec, Lars Magnus Hvattum, Arild Hoff (2022). *International Journal of Production Economics*. DOI: [https://doi.org/10.1016/j.ijpe.2022.108468](https://doi.org/10.1016/j.ijpe.2022.108468)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi manufaktur global menuju **Industri 4.0** dan **Society 5.0** membawa konsekuensi struktural pada arsitektur sistem produksi. Fathollahi-Fard, Woodward, dan Akhrif (2024) dalam *Journal of Industrial Information Integration* (DOI: [10.1016/j.jii.2024.100598](https://doi.org/10.1016/j.jii.2024.100598)) menegaskan bahwa perkembangan terkini dalam penjadwalan produksi muncul sebagai respons terhadap kebutuhan adaptasi di lingkungan dinamis yang ditandai oleh disrupsi rantai pasok, volatilitas permintaan, dan tekanan regulasi lingkungan. Dalam konteks ini, *distributed permutation flow-shop scheduling problem* (DPFSP) muncul sebagai varian kompleks dari *classic flow-shop* di mana job-jobs dialokasikan ke beberapa pabrik terdistribusi secara geografis, masing-masing memiliki lini produksi permutasi yang identik secara fungsional.

Urgensi ekonomis dan ekologis dari riset ini bersifat multifaset. Pertama, biaya energi industri manufaktur global mencapai proporsi 20–30% dari total biaya produksi, sehingga optimalisasi konsumsi energi bukan hanya agenda lingkungan melainkan juga strategis-finansial. Kedua, fenomena *lost working days* akibat alokasi job yang tidak seimbang menciptakan inefisiensi kapasitas yang berimplikasi pada *overall equipment effectiveness* (OEE). Ketiga, otomatisasi tidak selalu merupakan solusi optimal karena faktor biaya modal dan kompleksitas operasional, sehingga mengharuskan model mempertimbangkan **mesin dengan mode operasional berbeda** — dari manual hingga otomatis.

Fathollahi-Fard et al. (2024) memposisikan kontribusi mereka pada tiga pilar inovasi: (1) reformulasi masalah DPFSP berkelanjutan ke dalam model *online mixed-integer programming* (MIP) yang memprioritaskan minimisasi *makespan* sembari mengonstrain konsumsi energi dan jumlah hari kerja yang hilang; (2) pengembangan dua strategi penjadwalan real-time — *predictive-reactive* dan *proactive-reactive* — yang merespons dinamika sistem secara berbeda; serta (3) evaluasi dua kebijakan penjadwalan ulang — *continuous* dan *event-driven* — untuk mengelola kompleksitas model. Studi kasus dilakukan pada produksi *auto workpiece* yang merepresentasikan manufaktur komponen otomotif presisi tinggi.

Hrabec, Hvattum, dan Hoff (2022) dalam *International Journal of Production Economics* (DOI: [10.1016/j.ijpe.2022.108468](https://doi.org/10.1016/j.ijpe.2022.108468)) memberikan landasan konseptual penting melalui *systematic review* terhadap 20 artikel yang membandingkan perencanaan terintegrasi versus sekuensial untuk masalah *production routing*. Mereka menunjukkan bahwa integrasi keputusan produksi, inventori, dan routing dalam satu kerangka pemodelan menghasilkan reduksi biaya rata-rata yang signifikan dibanding penyelesaian sekuensial — sebuah premis yang diperluas Fathollahi-Fard et al. (2024) ke domain penjadwalan real-time.

Konteks industri nyata di mana modul ini berlaku meliputi: pabrik komponen otomotif (*Tier-1* dan *Tier-2*), manufaktur semikonduktor dengan multi-fab, produksi obat generik dengan multi-site, dan *contract manufacturing* elektronik. Semua skenario ini memiliki karakteristik共通: lingkungan produksi terdistribusi, kebutuhan kustomisasi rendah-sedang, dan tekanan kuat untuk *decarbonization*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Himpunan Dasar

Model matematis yang dirumuskan Fathollahi-Fard et al. (2024) menggunakan notasi berikut:

- $I$ = himpunan job yang akan dijadwalkan, $|I| = n$
- $F$ = himpunan pabrik terdistribusi (f*), $|F| = f$
- $M$ = himpunan mesin dalam setiap pabrik, $|M| = m$
- $K$ = himpunan mode operasional mesin (manual, semi-otomatis, otomatis), $|K| = k$
- $p_{ijmk}$ = waktu pemrosesan job $i$ pada mesin $j$ di pabrik $m$ dengan mode $k$
- $e_{ijmk}$ = konsumsi energi per unit waktu job $i$ pada mesin $j$, pabrik $m$, mode $k$
- $C_{max}$ = *makespan* (waktu penyelesaian total)
- $x_{ijmk}$ = variabel biner, bernilai 1 jika job $i$ diproses pada mesin $j$, pabrik $m$, mode $k$
- $y_{ij,i'j'}$ = variabel biner untuk relasi sekuensial antar job

### 2.2 Fungsi Objektif Multi-Kriteria

Fathollahi-Fard et al. (2024) merumuskan fungsi objektif hierarkis yang memprioritaskan minimisasi *makespan* sebagai tujuan primer, dengan konsumsi energi, *lost working days*, dan penciptaan peluang kerja sebagai konstrain:

$$\min Z = C_{max} + \alpha \sum_{i \in I}\sum_{j \in M}\sum_{m \in F}\sum_{k \in K} e_{ijmk} \cdot p_{ijmk} \cdot x_{ijmk}$$

dengan $\alpha$ sebagai bobot penalti untuk konsumsi energi yang melebihi ambang batas $E_{threshold}$:

$$\sum_{i \in I}\sum_{j \in M}\sum_{m \in F}\sum_{k \in K} e_{ijmk} \cdot p_{ijmk} \cdot x_{ijmk} \leq E_{threshold}$$

### 2.3 Konstrain Inti

**Konstrain Alokasi Job:** Setiap job harus dialokasikan tepat pada satu jalur produksi:

$$\sum_{j \in M}\sum_{m \in F}\sum_{k \in K} x_{ijmk} = 1, \quad \forall i \in I$$

**Konstrain Sekuensial Permutasi:** Dalam setiap pabrik $m$ dan mode $k$, job-job harus mengikuti urutan permutasi:

$$C_{i,j} \geq C_{i,j-1} + \sum_{k \in K} p_{ijmk} \cdot x_{ijmk}, \quad \forall i \in I, j \in M$$

**Konstrain Non-Overlap pada Mesin:** Untuk setiap mesin $j$ di pabrik $m$, hanya satu job yang dapat diproses pada satu waktu:

$$C_{i,j} \geq C_{i',j} + p_{i'jmk} - L(1 - y_{ii'j}), \quad \forall i, i' \in I, j \in M, m \in F$$

dengan $L$ adalah bilangan besar (*big-M*) dan $y_{ii'j}$ variabel biner sequencing.

**Konstrain Lost Working Days:** Pembatasan jumlah hari kerja yang hilang akibat ketidakefisienan penjadwalan:

$$LWD = \sum_{i \in I}\sum_{j \in M}\sum_{m \in F}\left(1 - x_{ijmk^*}\right) \cdot d_{im} \leq LWD_{max}$$

dengan $d_{im}$ adalah jarak job $i$ ke pabrik $m$ dan $k^*$ mode optimal.

### 2.4 Model Penjadwalan Real-Time

Untuk menangani ketidakpastian, model online MIP didekstensi dengan parameter waktu $t$:

$$C_{max}(t) = \max_{i \in I(t)} \{C_{i,M}(t)\}$$

di mana $I(t)$ adalah himpunan job yang telah diketahui pada horizon waktu $t$. Strategi *predictive-reactive* meminimalkan $C_{max}(t)$ untuk job yang diketahui dan melakukan re-optimasi periodik $\Delta t$:

$$t_{reschedule} = \{t_0, t_0 + \Delta t, t_0 + 2\Delta t, \ldots\}$$

Strategi *proactive-reactive* menggunakan *rolling horizon* dengan buffer waktu $B$:

$$H_{planning} = H_{confirmed} + H_{expected} + B$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Penjadwalan Real-Time

Implementasi industri mengikuti arsitektur berlapis yang diadopsi dari paper Fathollahi-Fard et al. (2024):

**Lapisan 1 — Akuisisi Data (SCADA/IIoT):** Sensor pada setiap mesin mengirim data real-time (status mesin, konsumsi energi, job completion) ke *Manufacturing Execution System* (MES) dengan latensi $< 1$ detik menggunakan protokol OPC-UA atau MQTT.

**Lapisan 2 — Optimasi MIP On-Premise/Cloud:** Solver MIP (CPLEX, Gurobi, atau open-source HiGHS) menjalankan model online dengan *time limit* 30–300 detik. Untuk instance besar, *metaheuristics* seperti *genetic algorithm* atau *simulated annealing* digunakan sebagai *warm-start*.

**Lapisan 3 — Eksekusi Penjadwalan:** Output solver didiseminasikan ke *programmable logic controller* (PLC) melalui *manufacturing integration bus*.

### 3.2 Prosedur SOP Implementasi

| Tahap | Aktivitas | Output | Standar Referensi |
|-------|-----------|--------|-------------------|
| 1 | Karakterisasi proses ($p_{ijmk}$, $e_{ijmk}$) | Tabel parameter | ISO 22400 (KPI Manufaktur) |
| 2 | Validasi model terhadap data historis | Error < 5% | RMSE minimization |
| 3 | Konfigurasi strategi penjadwalan | Predictive-reactive atau proactive-reactive | RAMI 4.0 |
| 4 | *Pilot run* 4–6 minggu | Stabilitas sistem | Six Sigma DMAIC |
| 5 | *Full deployment* dengan monitoring KPI | Dashboard real-time | ISA-95 |

### 3.3 Diagram Alir Logika Penjadwalan

```
[Event Trigger] → {Job Arrival | Machine Breakdown | Energy Spike}
       ↓
[Trigger Classification]
       ↓
  ┌────┴────┐
  ↓         ↓
[Predictive-  [Proactive-
 Reactive]     Reactive]
  ↓              ↓
[Re-optimize    [Rolling
 full horizon]  horizon update]
  ↓              ↓
  └────┬────┘
       ↓
[Validasi Solusi] → [Solusi Feasible?]
       ↓ (Ya)         ↓ (Tidak)
[Eksekusi]      [Heuristic Fallback]
```

Kebijakan *continuous* melakukan re-optimasi setiap interval $\Delta t$ tetap, sedangkan *event-driven* hanya melakukan re-optimasi saat terjadi *trigger event* (konsumsi energi melebihi threshold, kerusakan mesin, job urgent). Trade-off: continuous memberikan *optimality* lebih tinggi namun *computational cost* besar; event-driven lebih efisien secara komputasional namun risiko *sub-optimality* saat event beruntun.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Berdasarkan studi kasus Fathollahi-Fard et al. (2024) pada produksi *auto workpiece*, kami mengkonstruksi instance miniatur dengan parameter berikut:

**Parameter Produksi (3 pabrik, 4 mesin, 3 mode):**

| Job ($i$) | Pabrik Tujuan | Sequence | $p_{i}$ (jam) | $e_{i}$ (kWh) | $d_{i,m=1}$ | $d_{i,m=2}$ | $d_{i,m=3}$ |
|-----------|---------------|----------|---------------|---------------|-------------|-------------|-------------|
| J1 | F1 | 1→2→3→4 | 2.0 | 5.5 | 10 | 25 | 40 |
| J2 | F1 | 1→2→3→4 | 3.5 | 7.2 | 15 | 30 | 35 |
| J3 | F2 | 1→2→3→4 | 2.8 | 6.0 | 20 | 8 | 45 |
| J4 | F2 | 1→2→3→4 | 1.5 | 4.8 | 30 | 12 | 50 |
| J5 | F3 | 1→2→3→4 | 4.0 | 8.5 | 25 | 35 | 5 |
| J6 | F3 | 1→2→3→4 | 2.5 | 5.9 | 40 | 45 | 18 |

**Parameter Sistem:**
- $E_{threshold} = 35$ kWh per *planning window*
- $LWD_{max} = 2$ hari kerja
- $H_{planning} = 8$ jam (1 shift)
- $\alpha = 0.1$ (bobot penalti energi)

### 4.2 Perhitungan Manual: Alokasi Job Optimal.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
