# 1410 — Representasi Kontrol Efisien dalam Digital Twin: Paradigma Modelica untuk Optimasi Sistem Cyber-Physical Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Efisiensi Representasi Kontrol dalam Digital Twin Menggunakan Bahasa Pemodelan Deklaratif Berbasis Persamaan untuk Sistem Manufaktur Cyber-Physical
**Jurnal & Sitasi Utama:** Chiara Cimino, Federico Terraneo, Gianni Ferretti (2023). *IEEE Transactions on Industrial Informatics*. DOI: [https://doi.org/10.1109/tii.2023.3242806](https://doi.org/10.1109/tii.2023.3242806)
**Sitasi Pendukung:** Leonardo Maretto, Maurizio Faccio, Daria Battini (2023). *Journal of Manufacturing Systems*. DOI: [https://doi.org/10.1016/j.jmsy.2023.05.009](https://doi.org/10.1016/j.jmsy.2023.05.009)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital yang melanda sektor manufaktur global dalam dekade terakhir telah memposisikan *digital twin* (DT) sebagai artefak teknologi paling strategis untuk mendukung optimasi proses pada level sistem. Cimino, Terraneo, dan Ferretti (2023) dalam *IEEE Transactions on Industrial Informatics* (DOI: 10.1109/tii.2023.3242806) mengidentifikasi sebuah paradoks fundamental yang menghambat adopsi DT secara luas: di satu sisi, bahasa pemodelan deklaratif berbasis persamaan (*declarative equation-based modeling languages*) seperti Modelica, VHDL-AMS, dan ModelicaML memungkinkan konstruksi DT skala besar berbasis simulasi karena analis tidak perlu menulis *solution code* secara imperatif; namun di sisi lain, aset industri nyata pada hakikatnya adalah *cyber-physical systems* (CPS) yang komponen sibernya berupa kontrol digital (PLC, SCADA, DCS) dengan logika diskrit dan *modulating control* yang sangat sulit diekspresikan secara presisi tanpa mengorbankan performa simulasi.

Urgensi masalah ini bersifat operasional-ekonomis. Dalam konteks *Industry 4.0*, kecepatan siklus optimasi menjadi竞争优势 kompetitif — sebuah perusahaan manufaktur yang mampu melakukan *what-if analysis* terhadap ribuan skenario produksi dalam hitungan jam akan memiliki keunggulan *time-to-market* yang signifikan. Namun, kajian sistematis yang dilakukan Maretto, Faccio, dan Battini (2023) dalam *Journal of Manufacturing Systems* (DOI: 10.1016/j.jmsy.2023.05.009) terhadap 229 studi kasus nyata implementasi teknologi digital di manufaktur global mengonfirmasi bahwa masih terdapat *gap* krusial dalam hal *cost-benefit analysis* adopsi DT, terutama pada lapisan *system-level optimization*. Studi mereka mengategorikan empat dimensi evaluasi: (i) jenis teknologi digital yang diterapkan, (ii) level aplikasi dalam *industrial layout*, (iii) pengukuran kinerja, dan (iv) analisis manfaat ekonomi. Dari kelima arah riset masa depan yang diidentifikasi, representasi kontrol yang efisien dalam DT muncul sebagai enabler utama untuk menjawab dimensi (iii) dan (iv).

Secara empiris, fenomena *performance bottleneck* terjadi ketika kompiler bahasa deklaratif harus menerjemahkan ekspresi logika kontrol diskrit — seperti IF-THEN-ELSE, *state machines*, dan *latch logic* — menjadi sistem persamaan diferensial-aljabar (Differential-Algebraic Equations/DAE) yang kontinu. Setiap transisi kondisi menghasilkan *event* yang memicu re-inisialisasi solver DAE, sehingga untuk sistem dengan ratusan *control loop* diskrit, *simulation wall-clock time* meningkat secara eksponensial. Cimino et al. (2023) menyatakan: "a precise representation of modulating and logic controls conflicts with DT simulation performance. The result is a barrier to using DTs for system-level optimization." Pernyataan ini menjadi justifikasi ilmiah bagi pengembangan paradigma pemodelan baru yang dibahas dalam modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Modelica untuk Digital Twin

Bahasa Modelica merepresentasikan sistem sebagai himpunan persamaan (bukan penugasan) yang diselesaikan secara simbolik oleh kompiler. Bentuk kanonik model DT secara matematis dapat dinyatakan sebagai:

$$\mathbf{F}(\dot{\mathbf{x}}(t), \mathbf{x}(t), \mathbf{u}(t), \mathbf{p}, t) = \mathbf{0}$$

di mana:
- $\mathbf{x}(t) \in \mathbb{R}^n$ adalah vektor *state variables* kontinu (misalnya suhu, tekanan, posisi aktuator),
- $\dot{\mathbf{x}}(t)$ adalah turunannya terhadap waktu,
- $\mathbf{u}(t) \in \mathbb{R}^m$ adalah vektor *input control* diskrit/kontinu,
- $\mathbf{p} \in \mathbb{R}^k$ adalah vektor parameter struktural,
- $\mathbf{F}: \mathbb{R}^{n+m+k+1} \to \mathbb{R}^n$ adalah pemetaan residu persamaan.

### 2.2 Formalisme Hybrid Automaton untuk Kontrol Diskrit

Kontrol logika (misalnya *on-off thermostat*, *bang-bang controller*, PLC ladder logic) secara formal dimodelkan sebagai *hybrid automaton*:

$$\mathcal{H} = (Q, X, \Sigma, f, \text{Inv}, \text{Guard}, \text{Jump})$$

dengan:
- $Q = \{q_1, q_2, \ldots, q_r\}$ adalah himpunan *state* diskrit (mode operasi),
- $X \subseteq \mathbb{R}^n$ adalah *continuous state space*,
- $\Sigma$ adalah himpunan *event* diskrit,
- $f: Q \times X \to \mathbb{R}^n$ adalah *flow function* dengan $f(q_i, \mathbf{x}) = \dot{\mathbf{x}}$,
- $\text{Inv}(q_i) \subseteq X$ adalah *invariant set* pada mode $q_i$,
- $\text{Guard}(q_i, q_j) \subseteq X$ adalah kondisi transisi antar mode,
- $\text{Jump}(q_i, q_j): X \to X$ adalah fungsi reset *state*.

### 2.3 Paradigma Imperatif-Sebagai-Kontrol (IaaC) Cimino et al. (2023)

Inovasi utama paper Cimino et al. (2023) adalah dekomposisi representasi kontrol menjadi dua lapisan: (a) lapisan persamaan deklaratif untuk dinamika fisik, dan (b) lapisan imperatif terisolasi untuk logika kontrol, yang berkomunikasi via *connector variables* dengan *type-safe interface*. Formulasi efisiensi simulasi dimodelkan sebagai:

$$\eta = \frac{T_{\text{sim}}^{\text{all-declarative}} - T_{\text{sim}}^{\text{IaaC}}}{T_{\text{sim}}^{\text{all-declarative}}} \times 100\%$$

Untuk sistem dengan $N$ *control event* per satuan waktu, biaya komputasional pendekatan all-declarative mengikuti:

$$T_{\text{sim}}^{\text{all-decl}} \propto N \cdot C_{\text{event}} + (T_{\text{sim}} - N \cdot \Delta t_e) \cdot C_{\text{continuous}}$$

di mana $C_{\text{event}}$ adalah biaya overhead setiap *event handling* dan $C_{\text{continuous}}$ adalah biaya integrasi kontinu. Paradigma IaaC memindahkan logika ke fungsi C++ yang dikompilasi secara *just-in-time*, sehingga:

$$T_{\text{sim}}^{\text{IaaC}} \approx T_{\text{sim}} \cdot C_{\text{continuous}} + N \cdot C_{\text{imperative}}$$

dengan $C_{\text{imperative}} \ll C_{\text{event}}$ karena *function call overhead* pada C++ nativo.

### 2.4 Metrik Kinerja Digital Twin

Maretto et al. (2023) menyusun kerangka KPI yang relevan:

$$\text{ROI}_{\text{DT}} = \frac{\sum_{t=0}^{T} \frac{B_t - C_t}{(1+r)^t}}{\sum_{t=0}^{T} \frac{I_t}{(1+r)^t}}$$

di mana $B_t$ adalah *benefit* (penurunan *downtime*, peningkatan OEE), $C_t$ adalah biaya operasional, $I_t$ adalah investasi modal, dan $r$ adalah *discount rate*. Penurunan *time-to-solution* simulasi yang dihasilkan paradigma IaaC secara langsung memperbesar $B_t$ karena memungkinkan lebih banyak skenario optimasi dieksekusi per siklus keputusan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti protokol enam tahap yang dapat distandardisasi sebagai SOP internal departemen rekayasa industri:

**Tahap 1 — Pemetaan Aset Cyber-Physical.** Inventarisasi komponen fisik (sensor, aktuator, mesin) dan komponen siber (PLC, HMI, SCADA). Output: *control narrative document* yang memuat daftar I/O, frekuensi sampling, dan diagram *state machine* kontrol.

**Tahap 2 — Dekomposisi Menjadi Subsistem Deklaratif & Imperatif.** Klasifikasikan setiap persamaan: jika persamaan tersebut merupakan hukum fisika (Newton, termodinamika, elektromagnetik) → lapisan deklaratif Modelica; jika berupa logika keputusan (*if-then*, *latch*, *timer*) → lapisan imperatif C++.

**Tahap 3 — Perancangan *Connector Interface*.** Definisikan *connector variables* dengan tipe data ketat:

```modelica
connector ControlOutput = Real(reality, min=0, max=1);
connector ControlInput = input Real;
```

**Tahap 4 — Implementasi Library Modelica/C++.** Gunakan pustaka yang dirilis Cimino et al. (2023) sebagai *open-source* atau kembangkan ekstensi internal. Library harus mencakup *primitive*: *Latch*, *Timer*, *PID*, *StateMachine*, *FlipFlop*.

**Tahap 5 — Validasi & Verifikasi (V&V).** Lakukan *unit testing* setiap blok kontrol terhadap logika PLC fisik asli. Metrik: *equivalence coverage* ≥ 99,5% untuk semua *state transition*.

**Tahap 6 — Orkestrasi pada Platform DT.** Integrasikan ke platform (Siemens MindSphere, Dassault 3DEXPERIENCE, atau *in-house* berbasis FMI 2.0). Lakukan *co-simulation* dengan solver DAE yang sesuai.

**Diagram Alir SOP:**

```
[Mulai] → [Pemetaan CPS] → [Dekomposisi Persamaan]
   ↓
[Desain Connector] → [Kode Modelica + C++]
   ↓
[Unit Test] → [V&V Loop] → [Integrasi Platform DT]
   ↓
[Co-Simulation] → [Benchmark Performa] → [Selesai]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Sistem

Pertimbangkan lini *bottle filling* dalam pabrik minuman ringan dengan karakteristik berikut:
- 8 buah katup solenoid (*modulating valve*) dengan kontrol on/off,
- 1 *conveyor belt* dengan kontrol PID kecepatan,
- 2 *safety interlock* (logika diskrit AND/OR),
- 1 *batch controller* dengan 12 *state transition*.

Total *control event* terdistribusi selama simulasi 600 detik.

### 4.2 Parameter Input

| Parameter | Nilai | Satuan |
|---|---|---|
| Jumlah *control event* (N) | 4.800 | events/sim |
| $C_{\text{event}}$ (all-declarative) | 1,2 | ms |
| $C_{\text{continuous}}$ | 0,05 | ms/s |
| $C_{\text{imperative}}$ (C++) | 0,008 | ms |
| $T_{\text{sim}}$ | 600 | s |

### 4.3 Perhitungan Step-by-Step

**Pendekatan All-Declarative (baseline):**

$$T_{\text{sim}}^{\text{all-decl}} = 4800 \cdot 1{,}2 \text{ ms} + (600 - 4800 \cdot 0{,}001) \cdot 0{,}05 \text{ ms}$$

Karena $\Delta t_e$ pada Modelica standar sekitar 1 ms per event:

$$T_{\text{sim}}^{\text{all-decl}} = 5760 \text{ ms} + (595{,}2 \text{ s}) \cdot 0{,}05 \text{ ms/s} \approx 5760 + 29760 = 35520 \text{ ms} \approx 35{,}52 \text{ s}$$

**Pendekatan IaaC Cimino et al. (2023):**

$$T_{\text{sim}}^{\text{IaaC}} \approx 600 \cdot 0{,}05 + 4800 \cdot 0{,}008 = 30 + 38{,}4 = 68{,}4 \text{ ms} \approx 0{,}068 \text{ s}$$

**Peningkatan Efisiensi:**

$$\eta = \frac{35520 - 68{,}4}{35520} \times 100\% \approx 99{,}81\%$$

**Dampak pada throughput optimasi:**

Misalkan 1.000 skenario *what-if* harus dijalankan:

$$T_{\text{total}}^{\text{all-decl}} = 35{,}52 \text{ s} \cdot 1000 = 35520 \text{ s} \approx 9{,}87 \text{ jam}$$

$$T_{\text{total}}^{\text{IaaC}} = 0{,}068 \text{ s} \cdot 1000 = 68 \text{ s} \approx 1{,}13 \text{ menit}$$

**Interpretasi Manajerial:** Penghematan 9,86 jam per siklus optimasi memungkinkan departamen *process engineering* menjalankan **~520 siklus optimasi tambahan per tahun** dengan sumber daya komputasi yang sama. Pada *hourly rate* analis senior sebesar Rp 350.000, ini setara dengan efisiensi biaya