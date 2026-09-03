# 2757 — Strategi Rantai Pasok Closed-Loop untuk Pemanfaatan Berjenjang (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Closed-Loop Supply Chain dengan Integrasi Pemanfaatan Berjenjang Baterai Pensiun dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial industri kendaraan listrik global telah menciptakan tantangan logistik dan lingkungan yang bersifat paradoksal: di satu sisi, elektrifikasi transportasi menjadi strategi dekarbonisasi utama, namun di sisi lain, peningkatan armada baterai lithium-ion (LIB) yang pensiun secara masif dalam dekade 2025–2035 menciptakan tekanan terhadap kapasitas daur ulang, keamanan rantai pasok mineral kritis (litium, kobalt, nikel), dan emisi siklus hidup. JIANG & TANG (2025) — melalui makalah yang diterbitkan pada *14th International Conference on Logistics and Systems Engineering* — secara eksplisit memposisikan isu retired power battery (RPB) sebagai masalah *reverse logistics* berlapis yang tidak dapat diselesaikan oleh model daur ulang konvensional karena adanya dua jalur pemulihan yang secara fisik dan ekonomis berbeda: *echelon utilization* (pemanfaatan berjenjang/kaskade) dan *recycling remanufacturing* (remanufaktur melalui daur ulang material).

Echelon utilization merujuk pada operasi di mana baterai yang State of Health (SoH)-nya turun di bawah ambang batas aplikasi otomotif (umumnya 70–80%) namun masih layak untuk aplikasi sekunder yang lebih toleran terhadap degradasi, seperti penyimpanan energi stasioner (stationary energy storage), telekomunikasi, atau lampu jalan pintar. Jalur remanufaktur, sebaliknya, mengekstraksi material katoda/anoda untuk digunakan kembali dalam produksi sel baru. JIANG & TANG (2025) mengintegrasikan kedua jalur ini ke dalam satu *network design problem* dengan mempertimbangkan ketidakpastian permintaan pasar sekunder, tingkat pengembalian (return rate) yang stokastik, dan biaya penanganan yang sensitif terhadap degradasi. Pendekatan ini menjadi semakin relevan karena di pasar Tiongkok saja, proyeksi baterai pensiun melampaui 1,2 juta ton pada 2030 menurut estimasi yang dikutip secara luas dalam literatur sistem industri.

Melengkapi kerangka tersebut, Shin, Kim, & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* memperkenalkan formulasi *robust optimization* yang melindungi keputusan jaringan terhadap realisasi terburuk dari parameter uncertainty seperti return rate, harga material daur ulang, dan permintaan cascade. Kombinasi kedua karya ini memberikan fondasi metodologis bagi insinyur industri untuk merancang jaringan CLSC yang tidak hanya efisien secara biaya tetapi juga resilien terhadap volatilitas pasar baterai global yang tengah bertransisi dari insentif subsidi menuju mekanisme *Extended Producer Responsibility* (EPR).

Urgensi operasional dari penelitian ini tecermin dari tiga pain points industri: (1) biaya logistik pengumpulan baterai yang tersebar di ribuan titik servis karena densitas energi baterai yang tinggi dan profil risiko limbahnya; (2) kompleksitas keputusan alokasi RPB antara jalur echelon (margin lebih tinggi tetapi kapasitas terbatas) versus remanufaktur (volume tinggi tetapi yield material fluktuatif); serta (3) tekanan regulasi seperti *EU Battery Regulation 2023/1542* yang mewajibkan tingkat回收 material minimum 16% pada 2031. Tanpa formulasi matematis yang tepat, keputusan jaringan menjadi sub-optimal dan rentan terhadap risiko finansial yang signifikan.

## 2. Landasan Teori & Formulasi Matematis

Model CLSC yang dirumuskan JIANG & TANG (2025) berakar pada *mixed-integer linear programming* (MILP) dengan perluasan *robust counterpart* berdasarkan kerangka Soyster–Ben-Tal–Nemirovski. Struktur jaringan mencakup empat lapisan node: pusat pengumpulan (*collection centers*), fasilitas echelon (*echelon stations*), fasilitas remanufaktur (*remanufacturing plants*), dan titik permintaan pasar (*demand markets*). Formulasi ini kemudian diperkuat oleh Shin et al. (2024) yang memperkenalkan *uncertainty budget* Γ untuk mengendalikan konservatisme solusi.

### 2.1 Notasi dan Himpunan

Misalkan:
- $i \in I$ : indeks pusat pengumpulan baterai pensiun
- $j \in J$ : indeks fasilitas echelon utilization
- $k \in K$ : indeks fasilitas remanufaktur/daur ulang
- $m \in M$ : indeks pasar permintaan (kendaraan baru + aplikasi sekunder)
- $\mathcal{U}$ : himpunan parameter tidak pasti (return rate, harga material, permintaan cascade)

### 2.2 Parameter

$$
\begin{aligned}
&c^{ij} = \text{biaya transportasi dari } i \text{ ke } j \text{ (CNY/unit)} \\
&c^{ik} = \text{biaya transportasi dari } i \text{ ke } k \\
&f_j, f_k = \text{biaya tetap pembukaan fasilitas } j \text{ dan } k \\
&\beta_j = \text{biaya proses echelon (uji SoH, refurbishment ringan)} \\
&\beta_k = \text{biaya proses daur ulang (pyrometallurgy/hydrometallurgy)} \\
&\lambda = \text{tingkat pengembalian baterai pensiun (return rate)} \\
&\alpha = \text{ambang SoH untuk layak echelon (umumnya 0,70–0,80)} \\
&\eta = \text{efisiensi ekstraksi material pada remanufaktur (0,85–0,95)} \\
&\gamma_{co2} = \text{faktor emisi CO}_2 \text{ per unit proses (kg CO}_2\text{e/unit)} \\
&p_m = \text{harga jual pasar aplikasi sekunder pada } m \\
&\hat{d}_m = \text{nilai nominal permintaan pada } m \\
&\bar{d}_m = \text{demands deviasi maksimum (uncertainty range)}
\end{aligned}
$$

### 2.3 Variabel Keputusan

$$
\begin{aligned}
&Q^{ij} \geq 0: \text{aliran baterai pensiun dari } i \text{ ke fasilitas echelon } j \\
&Q^{ik} \geq 0: \text{aliran baterai pensiun dari } i \text{ ke fasilitas remanufaktur } k \\
&y_j \in \{0,1\}: \text{1 jika fasilitas echelon } j \text{ dibuka} \\
&z_k \in \{0,1\}: \text{1 jika fasilitas remanufaktur } k \text{ dibuka} \\
&\theta_m \geq 0: \text{pemenuhan permintaan pada pasar } m
\end{aligned}
$$

### 2.4 Fungsi Objektif Multi-Kriteria

JIANG & TANG (2025) merumuskan masalah sebagai *bi-criteria optimization*: minimasi biaya logistik total dan emisi CO₂, yang selanjutnya diagregasikan melalui *weighted sum*:

$$
\min Z = w_1 \underbrace{\left[ \sum_{i,j} c^{ij} Q^{ij} + \sum_{i,k} c^{ik} Q^{ik} + \sum_j f_j y_j + \sum_k f_k z_k + \sum_{j,i} \beta_j Q^{ij} + \sum_{k,i} \beta_k Q^{ik} \right]}_{\text{Logistik + Investasi + Operasi}} + w_2 \underbrace{\sum_{(i,\cdot)} \gamma_{co2} \cdot d_{(i,\cdot)}}_{\text{Emisi Siklus Hidup}}
$$

dengan $w_1 + w_2 = 1$ sebagai bobot preferensi pengambil keputusan.

### 2.5 Kendala Utama

**Kendala kapasitas fasilitas:**
$$
\sum_{i} Q^{ij} \leq C_j y_j, \quad \forall j \in J
$$
$$
\sum_{i} Q^{ik} \leq C_k z_k, \quad \forall k \in K
$$

**Kendala keseimbangan aliran di pusat pengumpulan:**
$$
\sum_{j} Q^{ij} + \sum_{k} Q^{ik} = \lambda \cdot D_i^{ret}, \quad \forall i \in I
$$

**Kendala ambang SoH untuk alokasi echelon:**
$$
Q^{ij} \leq \delta_i^{SOH \geq \alpha} \cdot M \cdot y_j, \quad \forall i,j
$$
dengan $M$ sebagai *big-M* dan $\delta_i^{SOH \geq \alpha}$ sebagai proporsi baterai di pusat $i$ yang memenuhi syarat SoH.

### 2.6 Formulasi Robust Counterpart (Shin et al., 2024)

Untuk melindungi kendala permintaan terhadap ketidakpastian, Shin et al. (2024) memperkenalkan *budget of uncertainty* $\Gamma \in [0, |M|]$:

$$
\sum_{m \in M} \theta_m + \Gamma \cdot \bar{d}_{\max} + \sum_{m \in M} u_m \geq \sum_{m} \hat{d}_m, \quad u_m \geq 0
$$

dengan variabel dual $u_m$ yang merepresentasikan *worst-case price of robustness*. Semakin besar $\Gamma$, semakin konservatif (aman terhadap fluktuasi ekstrim) namun semakin mahal solusi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Translasi model JIANG & TANG (2025) ke dalam SOP industri mengikuti kerangka *Plan–Source–Process–Distribute–Recover* yang telah diadopsi oleh pelaku CLSC baterai besar (CATL, BYD, LG Energy Solution). Diagram alir prosedur operasionalnya adalah sebagai berikut:

**Tahap 1: Karakterisasi Reverse Logistics (Plan)**
1. Segmentasi armada pensiun berdasarkan tahun produksi, kimia sel (NMC/LFP), dan SoH rata-rata menggunakan telemetri kendaraan (OBD-II) atau *second-life screening stations*.
2. Estimasi $\lambda$ per regional cluster menggunakan model regresi spasial dengan variabel *battery vintage*, intensitas charging cycle, dan iklim.
3. Penentuan $\alpha$ (ambang SoH) berdasarkan aplikasi sekunder target: $\alpha = 0,80$ untuk *backup telecom*, $\alpha = 0,70$ untuk *grid-scale storage*.

**Tahap 2: Desain Jaringan (Source)**
1. Solusi MILP dari §2 dengan solver CPLEX/Gurobi pada data historis 36 bulan.
2. Validasi solusi menggunakan *robust counterpart* Shin et al. (2024) dengan $\Gamma = 0,5|M|$ sebagai default konservatif untuk industri baterai.
3. Stress-test skenario: return rate shock ±30%, harga litium ±50%, regulasi回收 minimum +20%.

**Tahap 3: Operasi Eselon & Remanufaktur (Process)**
1. *Echelon