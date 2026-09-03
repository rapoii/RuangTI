# 1509 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon) dan Daur Ulang Manufaktur Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Closed-Loop Supply Chain (CLSC) dengan Integrasi Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan masif pasar kendaraan listrik global (EV) telah menciptakan paradoks lingkungan yang krusial: sementara elektrifikasi transportasi menurunkan emisi operasional, berakhirnya siklus hidup baterai lithium-ion (umumnya setelah 8–10 tahun atau degradasi *State of Health*—SOH di bawah 80%) menciptakan arus limbah B3 (Bahan Berbahaya dan Beracun) bernilai ekonomis tinggi. JIANG Lin dan TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menekankan bahwa volume baterai pensiun diproyeksikan mencapai 2 juta ton secara global pada 2030, dengan kandungan logam kritis seperti litium, kobalt, dan nikel yang menjadikan baterai bekas bukan sekadar limbah, melainkan *urban mining* strategis. Dalam konteks ini, *Closed-Loop Supply Chain* (CLSC) muncul sebagai kerangka integratif yang menghubungkan logistik maju (*forward logistics*) dan logistik mundur (*reverse logistics*) guna memulihkan nilai ekonomis dan material.

Urgensi riset ini diperkuat oleh dua tekanan simultan. Pertama, regulasi ketat seperti *EU Battery Regulation 2023/1542* yang mewajibkan tingkat daur ulang minimal 65% untuk baterai lithium-ion pada 2025, serta target 70%回收 material pada 2030. Kedua, volatilitas harga logam kritis—di mana harga kobalt pernah menyentuh USD 80.000/ton—menjadikan strategi pemanfaatan bertingkat (*echelon utilization*) sebagai alternatif bernilai tambah tinggi dibanding daur ulang langsung. *Echelon utilization* adalah pendekatan cascade di mana baterai dengan SOH 60–80% dialihkan untuk aplikasi sekunder seperti penyimpanan energi stasioner (*stationary energy storage*/ESS), pencahayaan darurat, atau forklift listrik, sebelum akhirnya didaur ulang ketika kapasitas turun di bawah ambang batas ekonomis.

Namun, integrasi echelon utilization ke dalam CLSC baterai menghadirkan kompleksitas keputusan multi-tier yang tidak dimiliki oleh CLSC konvensional. JIANG dan TANG (2025) mengidentifikasi tiga keputusan taktis-operasional yang harus dioptimasi secara simultan: (1) alokasi baterai pensiun antara jalur echelon dan jalur daur ulang/remanufaktur, (2) penentuan harga jual kembali (*buy-back price*) dan harga echelon, serta (3) kapasitas fasilitas pengujian, refurbishment, dan daur ulang. Pendekatan konvensional *newsvendor model* atau *MILP deterministik* terbukti tidak memadai karena mengabaikan ketidakpastian return rate, harga logam, dan permintaan aplikasi sekunder. Inilah celah riset yang ditutup oleh Shin, Kim, dan Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melalui formulasi *robust optimization* dengan *return management system* yang mempertimbangkan fluktuasi permintaan pasar sekunder dan kapasitas pengembalian secara stokastik.

Makalah JIANG-TANG juga mengintegrasikan permainan Stackelberg tiga tingkat antara OEM (*Original Equipment Manufacturer*), operator echelon, dan recycler, menciptakan kerangka博弈论 (teori permainan) yang realistis secara industrial. Kombinasi keduanya—pemodelan jaringan CLSC multi-tier (JIANG-TANG) dan mekanisme robustifikasi (Shin-Kim-Jeong)—menjadi fondasi Knowledge Base Modul 1509 ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Baterai Bekas

Jaringan CLSC baterai pensiun yang diformalkan JIANG dan TANG (2025) terdiri dari empat tingkatan entitas:

1. **Collection Centers (CC)** — lokasi agregasi baterai bekas dari konsumen/EOL (*End-of-Life*).
2. **Testing & Sorting Facilities (TS)** — penentuan SOH dan alokasi jalur.
3. **Echelon Utilization Plants (EUP)** — refurbishment untuk aplikasi sekunder.
4. **Recycling Plants (RP)** — ekstraksi material melalui pirometalurgi/hidrometalurgi.

### 2.2 Formulasi Stackelberg Game untuk Pricing

Permainan tiga tingkat dimodelkan dengan manufacturer sebagai *leader* dan recycler sebagai *follower*. Fungsi permintaan aplikasi sekunder diasumsikan linier terhadap harga:

$$D_e(p_e, p_r) = \alpha_e - \beta_e p_e + \gamma_e p_r, \quad \alpha_e, \beta_e > 0, \gamma_e \geq 0$$

di mana $p_e$ adalah harga jual echelon dan $p_r$ adalah harga beli dari recycler. Fungsi laba manufacturer (dari penjualan baterai baru dan royalti echelon):

$$\Pi_M^{CLSC} = (p_n - c_n) \cdot D_n + (w - c_{rem}) \cdot Q_e - c_{inv}(Q_e) - F_M$$

Fungsi laba recycler:

$$\Pi_R = (p_r - w - c_r) \cdot Q_r - c_{cap}^{RP}$$

di mana $w$ adalah *wholesale price* transfer dari manufacturer ke recycler. keseimbangan Stackelberg dicapai melalui *backward induction*:

$$\frac{\partial \Pi_R}{\partial w} = 0 \implies w^*(p_r) = \frac{p_r - c_r + \gamma_e p_r \beta_e^{-1}}{2}$$

Substitusi ke fungsi manufacturer menghasilkan *best response function* $p_e^*(p_r)$ yang selanjutnya disubstitusikan balik untuk memperoleh keseimbangan Nash-Bertrand.

### 2.3 Model Robust Optimization (Shin, Kim, Jeong, 2024)

Untuk mengakomodasi ketidakpastian return rate $\tilde{q}_i$ di setiap collection center dan permintaan echelon $\tilde{D}_e$, Shin dkk. (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menggunakan kerangka *Bertsimas-Sim robust optimization*. Bentuk *master problem*:

$$\min_{x,y} \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{y} + \max_{\tilde{\mathbf{q}} \in \mathcal{U}} \mathbf{q}^T \mathbf{x}$$

dengan *uncertainty set* berbentuk polihedral (budget of uncertainty):

$$\mathcal{U} = \left\{ \tilde{q}_i = \bar{q}_i + \hat{q}_i z_i : \sum_{i \in I} |z_i| \leq \Gamma, \; |z_i| \leq 1 \right\}$$

di mana $\Gamma$ adalah parameter konservatisme (budget). Lawan (*adversarial*) memaksimalkan biaya dengan memilih $\tilde{q}_i$ dalam $\mathcal{U}$. *Robust counterpart* menjadi:

$$\min_{x,y} \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{y} + \Gamma \cdot \pi_i + \sum_{i \in I} \hat{q}_i y_i$$

dengan variabel dual $\pi_i \geq 0$. Parameter $\Gamma$ mengendalikan trade-off antara robustisitas dan optimalitas: $\Gamma = 0$ setara model deterministik, sementara $\Gamma = |I|$ memberikan *worst-case* konservatif.

### 2.4 Kodeksi Material Flow dan SOH Threshold

Alokasi baterai pensiun antara jalur echelon dan recycling diformulasikan melalui *binary decision variable*:

$$z_i \in \{0,1\} \quad \forall i \in \text{CC}$$

dengan constraint *state of health threshold*:

$$z_i = 1 \iff \text{SOH}_i \in [\theta_{ech}, 1], \quad \text{SOH}_i = \frac{C_{actual,i}}{C_{rated}}$$

di mana $\theta_{ech}$ adalah ambang batas minimum untuk aplikasi echelon (umumnya 0,60–0,70). Material balance di setiap TS:

$$\sum_{i \in I} x_{ik} = \sum_{j \in J} y_{kj} \quad \forall k \in \text{TS}$$

Variabel $x_{ik}$ adalah flow dari CC $i$ ke TS $k$, dan $y_{kj}$ adalah flow dari TS $k$ ke EUP $j$ atau RP.

### 2.5 Fungsi Objektif Integratif

Menggabungkan JIANG-TANG (2025) dan Shin-Kim-Jeong (2024), fungsi tujuan akhir:

$$\max \Pi_{total} = \underbrace{\Pi_M^{CLSC}}_{\text{manufacturer}} + \underbrace{\Pi_E}_{\text{echelon operator}} + \underbrace{\Pi_R}_{\text{recycler}} - \underbrace{C_{env}}_{\text{environmental cost}}$$

$$= \sum_{j} (p_e - c_e) y_{kj}^{EUP} + \sum_{j} (p_r - c_r - w) y_{kj}^{RP} - \lambda \sum_{i} \text{CO}_2^{eq}(\mathbf{x})$$

di mana $\lambda$ adalah *shadow price* karbon sesuai *carbon credit mechanism*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas memerlukan SOP terintegrasi yang mengikuti standar IEC 62933-2-1 (electrical energy storage systems) dan *UN Recommendations on the Transport of Dangerous Goods* (UN 3480/3481). Berikut adalah arsitektur SOP lima fase:

```
┌────────────────┐   ┌────────────────┐   ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
│ FASE 1:        │   │ FASE 2:        │   │ FASE 3:        │   │ FASE 4:        │   │ FASE 5:        │
│ COLLECTION     │──▶│ DIAGNOSTIC &   │──▶│ ALLOCATION     │──▶│ REMANUFACTURE  │──▶│ RECYCLING &    │
│ & LOGISTICS    │   │ SORTING        │   │ DECISION       │   │ / ECHELON      │   │ MATERIAL       │
│                │   │                │   │                │   │ REUSE          │   │ RECOVERY       │
└────────────────┘   └────────────────┘   └────────────────┘   └────────────────┘   └────────────────┘
   Reverse              ISO/IEC 62619        Stackelberg          IEC 62933-2-1       EU 2023/1542
   logistics            IEC 61960             equilibrium
```

**Fase 1 – Collection:** Baterai pensiun dikumpulkan dari dealer, fleet operator, dan konsumen dengan *incentive fee* $w$ per unit. Transportasi mengikuti protokol Class