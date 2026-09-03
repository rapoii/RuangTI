# 1442 — Tinjauan Teknik Pinch Analysis dan Integrasi Heat Pump untuk Desentralisasi Panas Industri serta Aplikasi Lanjutan pada Sistem Tenaga

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A review of pinch analysis techniques and extended application in power systems
**Jurnal & Sitasi Utama:** Tiejiang Yuan, Yaling Mao (2024). *Renewable and Sustainable Energy Reviews*. DOI: [https://doi.org/10.1016/j.rser.2024.114684](https://doi.org/10.1016/j.rser.2024.114684)
**Sitasi Pendukung:** J. Walden, Beat Wellig, Panagiotis Stathopoulos (2023). *Applied Energy*. DOI: [https://doi.org/10.1016/j.apenergy.2023.121933](https://doi.org/10.1016/j.apenergy.2023.121933)

---

## 1. Pendahuluan dan Konteks Industri

Krisis energi global, volatilitas harga hidrokarbon, dan komitmen dekarbonisasi neto-nol telah memaksa sektor industri untuk mengevaluasi ulang strategi pengelolaan termal pada proses manufaktur. Dalam konteks ini, **Pinch Analysis (PA)** — yang sejak awal 1980-an diperkenalkan oleh Linnhoff dan koleganya — muncul kembali sebagai kerangka metodologis yang sangat relevan untuk mendesain jaringan penukar panas (*Heat Exchanger Network*/HEN) yang optimal sekaligus merancang sistem utilitas seminimal mungkin (Yuan & Mao, 2024, *Renew. Sustain. Energy Rev.*, DOI: [10.1016/j.rser.2024.114684](https://doi.org/10.1016/j.rser.2024.114684)). Tulisan tinjauan Yuan dan Mao menyoroti bahwa, meskipun PA telah mapan di industri proses kontinu (kilang minyak, petrokimia, dan pulp & paper), penerapannya pada **sistem tenaga listrik** — khususnya *Combined Heat and Power* (CHP), *Integrated Gasification Combined Cycle* (IGCC), dan siklus Rankine organik (ORC) — masih terus berkembang dan menjadi frontier riset aktif.

Menurut Yuan dan Mao (2024), ekstensi PA ke domain sistem tenaga bukan sekadar transfer algoritmik, melainkan menuntut reinterpretasi terhadap konsep *stream* termal: pada *power plant*, fluks energi tidak hanya berupa entalpi sensible fluida proses, tetapi juga *heat of condensation*, entalpi reaksi pembakaran, dan *waste heat recovery* dari flue gas. Lebih lanjut, mereka menekankan bahwa integrasi PA dengan optimasi eksergetik dan pemodelan dinamis membuka peluang peningkatan efisiensi siklus termal yang sebelumnya tidak terdeteksi oleh metode neraca energi konvensional.

Di sisi lain, Walden, Wellig, dan Stathopoulos (2023, *Applied Energy*, DOI: [10.1016/j.apenergy.2023.121933](https://doi.org/10.1016/j.apenergy.2023.121933)) menyoroti keterbatasan fundamental PA konvensional yang mengasumsikan *single operating point* atau beberapa titik operasi diskrit. Mereka berargumen bahwa proses industri non-kontinu — seperti batch processing pada industri makanan, farmasi, dan kimia khusus — memiliki profil termal yang sangat bergantung pada waktu (*time-dependent*), sehingga PA statis gagal menangkap peluang integrasi *heat pump* (HP) yang sesungguhnya. Konteks ini menjadi semakin penting mengingat elektrifikasi panas industri (*industrial heat electrification*) merupakan pilar strategi dekarbonisasi sektor manufaktur di Uni Eropa dan kawasan industri maju lainnya. Heat pump industri, dengan *Coefficient of Performance* (COP) modern mencapai 3,0–5,0, berpotensi menurunkan konsumsi gas alam hingga 70–80% pada rentang suhu 80–160 °C, namun hanya jika dirancang dengan *targeting* yang akurat terhadap surplus dan defisit termal proses.

Implikasi manajerialnya langsung: bagi praktisi teknik industri yang bertanggung jawab atas *capex* instalasi utilitas dan *opex* energi pabrik, memahami state-of-the-art PA dan ekstensinya bukan sekadar pilihan akademis, melainkan kebutuhan strategis untuk mempertahankan *competitiveness* dalam era *net-zero manufacturing*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Problem Table Algorithm (PTA) dan Identifikasi Titik Pinch

Inti metodologis PA adalah penentuan **Minimum Approach Temperature** $(\Delta T_{min})$ yang menghasilkan *minimum utility targets*. Untuk setiap *stream* — baik *hot stream* (sumber panas yang harus didinginkan) maupun *cold stream* (sumber dingin yang harus dipanaskan) — kapasitas panas aliran didefinisikan sebagai:

$$CP_i = \dot{m}_i \cdot c_{p,i} \quad [\text{kW/K}]$$

dengan $\dot{m}_i$ adalah laju alir massa dan $c_{p,i}$ kapasitas panas spesifik fluida. Beban termal entalpi untuk memindahkan *stream* dari suhu masuk $T_{in,i}$ ke suhu keluar $T_{out,i}$ adalah:

$$Q_i = \int_{T_{in,i}}^{T_{out,i}} CP_i \, dT \approx CP_i \cdot (T_{out,i} - T_{in,i})$$

PTA kemudian menggeser suhu *cold stream* ke bawah sebesar $\Delta T_{min}/2$ dan *hot stream* ke atas sebesar $\Delta T_{min}/2$ untuk membentuk *shifted temperatures*, sehingga terbentuk *temperature intervals* diskret. Neraca kaskade termal pada interval ke-$k$ adalah:

$$\Delta Q_k = \sum_{i \in \text{hot}, k} Q_i^{(shifted)} - \sum_{j \in \text{cold}, k} Q_j^{(shifted)}$$

Kaskade kumulatif didefinisikan secara rekursif:

$$Q_{cascade,k} = Q_{cascade,k-1} + \Delta Q_k$$

Titik pinch terjadi pada interval di mana $Q_{cascade}$ berpindah tanda dari negatif ke positif (atau sebaliknya), dan **Minimum Hot Utility Target** $(Q_{H,min})$ adalah nilai absolut defisit terbesar pada interval di bawah pinch, sementara **Minimum Cold Utility Target** $(Q_{C,min})$ adalah surplus terbesar di atas pinch.

### 2.2. Composite Curves dan Grand Composite Curve

*Composite Curve* (CC) memvisualisasikan total panas yang tersedia dari semua *hot stream* sebagai fungsi suhu terhadap total panas yang dibutuhkan oleh semua *cold stream*. Titik terdekat antara kedua kurva di mana $\Delta T = \Delta T_{min}$ secara grafis mengkonfirmasi titik pinch. Representasi termodinamika yang lebih elegan adalah **Grand Composite Curve (GCC)** — suatu plot dari $Q_{cascade}$ versus *shifted temperature* yang menunjukkan secara eksplisit posisi pinch dan peluang integrasi utilitas (seperti reboiler, condenser, atau *fired heater*).

### 2.3. Heat Pump Integration: Formulasi COP

Untuk integrasi HP, *Coefficient of Performance* didefinisikan:

$$COP_{HP} = \frac{Q_{useful}}{W_{electrical}} = \frac{Q_{evaporator} + W}{W} = \frac{Q_{condenser}}{W}$$

Walden et al. (2023) merumuskan pendekatan *Dynamic Pinch Analysis* dengan tiga pilar: (1) **Time Average Model (TAM)**, (2) **Time Slice Model (TSM)**, dan (3) **Dynamic Programming Model (DPM)**. Pada TAM, *stream* dengan profil termal *time-varying* diagregatkan menjadi *effective heat capacity flow rate*:

$$CP_{TAM} = \frac{1}{T_{total}} \int_0^{T_{total}} CP(t) \, dt$$

Sementara pada TSM, domain waktu dipotong-potong menjadi *slice* di mana PA dijalankan per *slice* dan hasilnya diagregasikan. DPM lebih rigor: variabel keputusan optimasi mencakup dimensi waktu, sehingga diperoleh *optimal start-stop* HP dan *optimal heat storage*.

### 2.4. Exergy-Based Targeting (Yuan & Mao, 2024)

Yuan dan Mao (2024) menyoroti bahwa PA berbasis neraca energi saja dapat menyesatkan pada aplikasi *power systems* karena tidak menangkap *irreversibility*. Eksergi termal pada suhu $T$ didefinisikan:

$$Ex = Q \cdot \left(1 - \frac{T_0}{T}\right) \quad [\text{kJ}]$$

dengan $T_0$ adalah *dead state temperature* (biasanya 298,15 K). *Cumulative exergy curve* memungkinkan identifikasi *exergy pinch* — suhu di mana *exergy destruction* diminimalkan — yang menjadi dasar integrasi *Organic Rankine Cycle* dan sistem CHP.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PA di lingkungan industri mengikuti SOP bertahap yang dapat distandarkan sebagai berikut (sintesis dari Yuan & Mao, 2024; Walden et al., 2023):

**Tahap A — Akuisisi Data Proses.**
Identifikasi semua *stream* termal menggunakan *Process Flow Diagram* (PFD) dan *Piping & Instrumentation Diagram* (P&ID). Untuk setiap *stream* dicatat: laju alir massa $\dot{m}$, kapasitas panas spesifik $c_p$ (atau konduktivitas termal untuk *slab*), suhu masuk/keluar, serta *phase change* (jika ada). Pada proses non-kontinu, tambahkan dimensi waktu: durasi operasi, profil suhu *transient*, dan *startup/shutdown profile*.

**Tahap B — Penentuan $\Delta T_{min}$.**
Lakukan *trade-off analysis* dengan menghitung *total annual cost* sebagai fungsi $\Delta T_{min}$. Untuk aplikasi sistem tenaga, Yuan dan Mao (2024) merekomendasikan rentang $\Delta T_{min} \in [10, 25]$ °C, sedangkan untuk proses non-kontinu dengan HP, Walden et al. (2023) menggunakan $\Delta T_{min} = 5$–$15$ °C agar *feasibility* HP tinggi.

**Tahap C — Eksekusi PTA.**
Bangun tabel interval suhu, hitung $\Delta Q_k$ dan kaskade kumulatif, identifikasi pinch point dan $Q_{H,min}$, $Q_{C,min}$.

**Tahap D — Konstruksi CC dan GCC.**
Visualisasikan kedua kurva menggunakan piranti lunak (misal: Aspen Energy Analyzer, SuperTarget, atau implementasi Python dengan pustaka `pyPinch`).

**Tahap E — Desain Jaringan Penukar Panas.**
Terapkan *Pinch Design Rules*: di atas pinch tidak boleh ada pendinginan utilitas dingin; di bawah pinch tidak boleh ada pemanasan utilitas panas. Minimum jumlah unit exchanger: $N_{min} = N_{hot} + N_{cold} + N_{utilities} - 1$.

**Tahap F — Integrasi Heat Pump (jika applicable).**
Walden et al. (2023) mengusulkan *decision tree* sebagai berikut: identifikasi interval suhu pada GCC di mana tersedia *heat source* (di bawah pinch, yaitu *cold stream* yang harus dipanaskan) dan *heat sink* (di atas pinch, *hot stream* yang harus didinginkan). Jika *temperature lift* $\Delta T_{lift} = T_{sink} - T_{source}$ berada dalam jangkauan operasi HP (umumnya < 60 °C untuk HP industri modern), maka integrasikan HP dengan ukuran:

$$Q_{HP,cond} = \min(Q_{cascade,above-pinch}, Q_{cascade,below-pinch})$$

dan kebutuhan listrik:

$$W_{HP} = \frac{Q_{HP,cond}}{COP_{HP}}$$

**Tahap G — Verifikasi Dinamis dan Analisis Sensitivitas.**
Untuk proses non-kontinu, jalankan simulasi *transient* menggunakan piranti lunak seperti Aspen Plus Dynamics atau DWSIM untuk memvalidasi apakah desain HEN+HP mampu mempertahankan operasional pada seluruh rentang variasi proses.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi, pertimbangkan pabrik kimia khusus yang memproduksi *active pharmaceutical ingredient* (API) dengan dua reaktor batch. Dari pengukuran lapangan, teridentifikasi profil termal berikut selama satu siklus batch 8 jam:

| Stream | Tipe | $T_{in}$ (°C) | $T_{out}$ (°C) | $\dot{m}$ (kg/h) | $c_p$ (kJ/kg·K) |
|--------