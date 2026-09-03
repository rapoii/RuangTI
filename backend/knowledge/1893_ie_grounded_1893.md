# 1893 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Riset Closed-Loop Supply Chain (CLSC) dengan Pertimbangan Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Kim & Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global yang dipercepat oleh dekarbonisasi sektor transportasi telah menghasilkan pertumbuhan eksponensial pasar kendaraan listrik (EV). Namun, di balik pertumbuhan ini, tersembunyi satu tantangan logistik dan lingkungan yang sangat krusial: pengelolaan *end-of-life* (EoL) baterai lithium-ion (LIB). Baterai EV yang sudah mencapai batas degradasi kapasitas (umumnya 70–80% dari kapasitas awal, *State of Health*/SoH < 0,8) tidak serta-merta harus menjadi limbah *hazardous*. Justru di titik inilah *Closed-Loop Supply Chain* (CLSC) mengambil peranan strategis.

Jiang & Tang (2025) [DOI: 10.52202/078960-0068] menyatakan bahwa baterai pensiun (retired power batteries) memiliki nilai ekonomis residual yang sangat signifikan melalui dua jalur: **pemanfaatan bertingkat** (*echelon utilization* — aplikasi *second-life* seperti *stationary energy storage system*/SESS, lampu jalan tenaga surya, *backup power* telekomunikasi), serta **remanufaktur daur ulang** (*recycling remanufacturing*) untuk mengekstraksi material kritis seperti litium, kobalt, nikel, dan mangan. Tanpa arsitektur CLSC yang teroptimasi, jutaan unit baterai ini akan menjadi beban lingkungan dan finansial. Sebaliknya, desain CLSC yang tepat mampu mengubah baterai bekas menjadi *urban mine* bernilai miliaran dolar.

Di sisi struktural, menurut Shin, Kim & Jeong (2024) [DOI: 10.2139/ssrn.4934197], CLSC modern tidak lagi cukup hanya dengan fungsi *reverse logistics* sederhana. Mereka mengajukan konsep *Robust Closed-Loop Supply Chain* yang mengintegrasikan **Return Management System (RMS)** untuk menghadapi *uncertainty* permintaan, kualitas pengembalian (*return quality variability*), dan dinamika regulasi. Pendekatan robust memastikan keputusan strategis (harga, kapasitas回收, dsb.) tetap layak (*feasible*) dalam skenario pesimistis.

Urgensi industri dapat diukur dari tiga perspektif:
1. **Ekologis**: Limbah baterai mengandung elektrolit mudah terbakar dan logam berat; recycle rate global baterai Li-ion baru menyentuh < 10% (IEA, 2023).
2. **Ekonomi**: Harga litium karbonat pernah melonjak > 600% (2021–2022), membuat *closed-loop material recovery* menjadi *hedge* strategis terhadap volatilitas *critical raw materials*.
3. **Regulasi**: EU Battery Regulation 2023/1542 mewajibkan *collection rate* ≥ 50% pada 2027 dan *material recovery* minimal 90% untuk kobalt, nikel, dan tembaga pada 2027 — memaksa OEM membangun CLSC.

Ketiga driver ini mengarahkan industri pada kebutuhan akan model keputusan kuantitatif yang memformulasikan interaksi strategis antar-anggota rantai pasok: manufaktur OEM, retailer/operator armada, *echelon integrator* (operator *second-life*), serta *recycler*.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dibangun mengikuti paradigma **Stackelberg game non-koperasi** dengan struktur keputusan tiga-tingkat (*three-echelon CLSC*), di mana manufaktur bertindak sebagai *leader*, retailer dan echelon integrator sebagai *followers*, sementara recycler menjadi pemain ketiga yang bersaing untuk mendapatkan *return flow* baterai bekas.

### 2.1 Parameter dan Variabel Keputusan

**Parameter endogen (variabel keputusan):**
- $w$ = harga jual grosir dari manufaktur ke retailer (CNY/unit)
- $p_r$ = harga jual eceran baterai baru di pasar EV
- $p_e$ = harga jual baterai *second-life* (echelon) per unit kapasitas (CNY/kWh)
- $p_c$ = harga transfer回收 (buy-back price) dari recycler ke retailer/manufaktur

**Parameter eksogen:**
- $c_m$ = biaya produksi baterai baru
- $c_e$ = biaya refurbishing untuk aplikasi echelon
- $c_r$ = biaya daur ulang material per unit
- $D(p_r)$ = fungsi permintaan primer (fungsi linear $D = a - b p_r$)
- $k$ = koefisien sensivitas回收terhadap insentif回收
- $\theta$ = tingkat degradasi kapasitas rata-rata (0,7–0,8)
- $Q$ = volume *return flow* baterai bekas

### 2.2 Model Permintaan dan Return Flow

Permintaan primer baterai EV dimodelkan sebagai fungsi linear klasik:
$$D(p_r) = a - b p_r$$

Sementara *return flow* (volume baterai bekas yang kembali ke rantai pasok) mengikuti fungsi *recovery rate* yang bergantung pada insentif回收:
$$Q(p_c, p_e) = k \cdot \ln(1 + p_c) + \eta \cdot p_e$$

dengan $\eta$ merepresentasikan elastisitas perpindahan baterai bekas dari jalur回收ke jalur echelon.

### 2.3 Fungsi Objektif Manufaktur (Leader)

$$\max_{w, p_e} \; \pi_M = (w - c_m)(a - b p_r) + (p_e - c_e)\theta Q - \lambda \cdot C_{inv}(Q) - C_{reg}$$

di mana:
- $\lambda \cdot C_{inv}(Q)$ = biaya persediaan baterai bekas yang menunggu proses
- $C_{reg}$ = biaya kepatuhan regulasi回收 per unit

### 2.4 Fungsi Objektif Retailer (Follower)

$$\max_{p_r} \; \pi_R = (p_r - w)(a - b p_r) + p_c Q - C_{handover}$$

### 2.5 Fungsi Objektif Recycler (Third-Party)

$$\max_{p_c^{rec}} \; \pi_{Rec} = (p_r^{mat} - c_r) \cdot \rho Q - p_c^{rec} Q$$

dengan $\rho$ = *material recovery yield* (fraksi massa material kritis yang berhasil diekstrak), dan $p_r^{mat}$ = harga jual material daur ulang.

### 2.6 Robust Counterpart (Pendekatan Shin et al., 2024)

Untuk mengatasi ketidakpastian permintaan回收$D \in [D - \Delta D, D + \Delta D]$, model robust mengadopsi formulasi Soyster:
$$\max_{w, p_e} \min_{D \in \mathcal{U}} \pi_M(w, p_e, D)$$

dengan *uncertainty set* $\mathcal{U} = \{D : |\tilde{D} - D_0| \leq \Delta D\}$.

Solusi diperoleh melalui **backward induction** dengan menyelesaikan *reaction functions* retailer dan recycler terlebih dahulu, kemudian mensubstitusikannya ke fungsi objektif manufaktur. Penyelesaian analitis menghasilkan *equilibrium conditions*:

$$\frac{\partial \pi_R}{\partial p_r} = 0 \Rightarrow p_r^*(w) = \frac{a + bw}{2b}$$

$$\frac{\partial \pi_M}{\partial w} = 0 \Rightarrow w^* = \frac{a + b c_m}{2b}$$

Substitusi menghasilkan *equilibrium wholesale price* dan *equilibrium echelon price* yang selanjutnya menentukan volume回收optimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas memerlukan SOP berlapis yang mengintegrasikan teknologi diagnosis, logistik terbalik, dan kontrol kualitas. Berikut arsitektur SOP berdasarkan sintesis Jiang & Tang (2025) serta kerangka RMS dari Shin et al. (2024):

### 3.1 Tahap 1 — Collection & Screening (Tier 1: Pengumpulan Awal)

1. **Reverse Pick-up Scheduling**: Rute pengumpulan baterai bekas dari operator armada berdasarkan algoritma *Vehicle Routing Problem with Time Windows* (VRPTW) dengan konstrain kapasitas dan SoH minimum.
2. **Initial Triage**: Klasifikasi cepat berdasarkan SoH menggunakan *Battery Management System* (BMS) data historis dan *rapid pulse test*.
3. **SoH Binning**: Penentuan kanal disposisi:
   - SoH > 0,8 → *direct reuse* (battery swap station)
   - 0,6 < SoH ≤ 0,8 → *echelon utilization* (SESS, telco backup)
   - SoH ≤ 0,6 → *recycling remanufacturing*

### 3.2 Tahap 2 — Echelon Refurbishment (Tier 2: Pemanfaatan Bertingkat)

1. **Cell-level Matching**: Pengujian kapasitas individual sel, internal resistance, dan self-discharge rate.
2. **Reconfiguration**: Perakitan ulang modul dari sel-sel homogen untuk aplikasi *second-life*.
3. **Performance Testing**: Cycle test minimal 50 siklus pada Depth of Discharge (DoD) tertentu untuk validasi.
4. **Certification**: Penyiapan dokumen compliance terhadap standar **IEC 62933** (electrical energy storage systems) dan **UL 1974** (evaluation for repurposing batteries).

### 3.3 Tahap 3 — Recycling Remanufacturing (Tier 3: Daur Ulang Material)

1. **Pre-treatment**: Discharging aman, dismantling, dan shredding pada lini inert atmosphere.
2. **Hydrometallurgical Processing**: Leaching dengan asam organik (asam sitrat), dilanjutkan *solvent extraction* untuk memisahkan kobalt, nikel, litium.
3. **Black Mass Recovery**: Output berupa *black mass* (campuran oksida logam) dengan target recovery yield > 90% (Co, Ni, Cu) sesuai EU Battery Regulation 2023/1542.
4. **Closed-loop Material Feeding**: Material recovered di-*feedback* ke lini produksi baterai baru (*closed-loop material flow*).

### 3.4 Tier 4 — Return Management System (RMS) Integration

Menurut Shin, Kim & Jeong (2024), RMS berfungsi sebagai *control tower* digital yang:
- Men-tracking status setiap baterai melalui *digital twin* dan *battery passport* (sesuai EU Battery Passport 2026).
- Meng-update harga回收 dinamis (*dynamic buy-back pricing*) berdasarkan permintaan material dan harga pasar *critical raw materials*.
- Menangani *return quality variability* dengan model robust yang meng-*hedge* terhadap ketidakpastian kualitas.
- Mengkoordinasikan *timing synchronization* antara arrival of returns dan capacity availability di setiap tier.

### 3.5 Diagram Alir CLSC

```
[OEM Production] → [Retailer] → [EV Market]
       ↑                              ↓
       │                       [EoL Battery Returns]
       │                              ↓
       └──────[Recycled Material]─────┤
                                      ↓
                            ┌─────────────────┐
                            │   Triage & SoH  │
                            └─────────────────┘
                                      ↓
                ┌────────────────────┼────────────────────┐
                ↓                    ↓                    ↓
         [Direct Reuse]      [Echelon SESS]       [Recycling Line]
                ↓                    ↓                    ↓
        [Battery Swap]    [Telco/Solar/Grid]      [Black Mass]
                                                      ↓
                                            [OEM Material Feed]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus**: Optimalisasi CLSC baterai EV di pasar hipotetis dengan kapasitas pasar 1.500.000 unit/tahun.

### 4.1 Input Parameter

| Parameter | Nilai | Satuan | Sumber/Asumsi |
|---|---|---|---|
| $a$ (intercept permintaan) | 2.000.000 | unit | Kapasitas pasar EV |
| $b$ (slope) |