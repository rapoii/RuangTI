# 2917 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain (CLSC) Strategi dengan Retired Power Battery Echelon Utilization dan Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Industri kendaraan listrik (EV) global mengalami pertumbuhan eksponensial dengan penetrasi yang diproyeksikan mencapai lebih dari 50% penjualan mobil baru pada 2035 (IEA, *Global EV Outlook 2024*). Namun demikian, di balik akselerasi tersebut tersembunyi tantangan struktural yang krusial: gelombang pensiun (*retirement*) baterai lithium-ion (LIB) dalam skala masif. Diperkirakan pada 2030, lebih dari 145 GWh baterai EV akan memasuki fase *end-of-life* (EoL) per tahun di tingkat global, dengan kontribusi dominan dari pasar Tiongkok yang telah mengoperasikan armada EV terbesar di dunia (BloombergNEF, 2023). Volume EoL ini menciptakan *reverse logistics* problem dengan kompleksitas tinggi karena baterai bekas mengandung material kritis (Li, Co, Ni) dengan fluktuasi harga yang tajam serta risiko lingkungan dan keselamatan (thermal runaway, leakage) yang menuntut penanganan khusus.

JIANG Lin & TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti bahwa strategi *closed-loop supply chain* (CLSC) konvensional yang hanya mengarahkan baterai EoL ke jalur daur ulang material (*recycling*) tidak lagi optimal secara ekonomi dan ekologis. Justru, baterai dengan *State of Health* (SOH) antara 70–80% masih memiliki kapasitas fungsional yang signifikan untuk aplikasi stasioner berdaya rendah—seperti penyimpanan energi untuk telekomunikasi (*base station*), sistem pencahayaan jalan surya, atau *backup power*—yang disebut sebagai *echelon utilization* (pemanfaatan bertingkat). Sementara baterai dengan SOH 60–70% dapat di-*remanufacture* untuk aplikasi yang lebih fleksibel, dan baterai dengan SOH <60% menjadi kandidat utama *closed-loop recycling* untuk recovery material. Diferensiasi berdasarkan SOH ini merupakan inti dari model yang mereka kembangkan.

Di sisi lain, Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi kerangka tersebut dengan dimensi *robust optimization*, menyertakan *return management system* yang secara eksplisit mengelola ketidakpastian (*uncertainty*) dalam tingkat pengembalian, harga material daur ulang, serta kapasitas pengolahan. Kombinasi kedua perspektif ini membentuk landasan analitis yang holistik: tidak hanya menentukan alokasi baterai EoL ke berbagai mode pemulihan (*echelon*, *remanufacturing*, *recycling*), tetapi juga menjamin keputusan tersebut tetap layak (*feasible*) di bawah berbagai skenario pasar yang merugikan. Urgensi riset ini diperkuat oleh regulasi seperti EU Battery Regulation 2023/1542 yang mewajibkan tingkat daur ulang minimum dan *extended producer responsibility* (EPR), sehingga keputusan CLSC memiliki konsekuensi hukum dan finansial langsung bagi OEM.

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai EoL dapat diformulasikan sebagai berikut. Misalkan himpunan indeks dan parameter:

- $i \in I = \{1,2,\dots,m\}$: pusat koleksi baterai EoL
- $j \in J = \{1,2,\dots,n\}$: fasilitas pemrosesan
- $k \in K = \{E, R, M\}$: mode pemulihan (Echelon, Recycling, Remanufacturing)
- $g \in G = \{1,2,3\}$: grade SOH (G1 = [70,80%], G2 = [60,70%), G3 = <60%)

**Parameter:**
- $a_{ig}$: jumlah baterai pensiun di pusat koleksi $i$ pada grade $g$
- $c^{tr}_{ij}$: biaya transportasi per unit dari $i$ ke $j$
- $c^{proc}_{jk}$: biaya pemrosesan per unit pada fasilitas $j$ mode $k$
- $p^E_j, p^R_j, p^M_j$: harga jual output per unit pada mode $k$
- $u_j$: kapasitas fasilitas $j$
- $\rho_k$: tingkat pemulihan material pada mode $k$ ($\rho_E=0$, $\rho_M=0.4$, $\rho_R=0.92$)
- $\pi$: harga material daur ulang rata-rata (USD/kg)

**Variabel keputusan:**
- $x_{ijk}$: alokasi baterai dari $i$ ke $j$ dengan mode $k$
- $y_{ig}$: jumlah baterai grade $g$ yang dialokasikan ke mode yang sesuai

**Fungsi objektif (maksimisasi profit bersih CLSC):**

$$
\max Z = \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} \left[ \left( p_k \cdot \rho_k - c^{tr}_{ij} - c^{proc}_{jk} \right) x_{ijk} \right] - \sum_{i \in I} \sum_{g \in G} c^{hold}_{ig} a_{ig}
$$

**Kendala utama:**

1. **Konservasi aliran (flow conservation):**
$$
\sum_{j \in J} \sum_{k \in K_g} x_{ijk} = a_{ig} \quad \forall i \in I, g \in G
$$
di mana $K_g$ adalah subset mode yang sesuai untuk grade $g$.

2. **Kapasitas fasilitas:**
$$
\sum_{i \in I} \sum_{k \in K} x_{ijk} \leq u_j \quad \forall j \in J
$$

3. **Non-negativitas dan integrality:**
$$
x_{ijk} \geq 0 \text{ dan integer}, \quad y_{ig} \geq 0
$$

Untuk menangkap ketidakpastian, Shin et al. (2024, [DOI:10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) merekomendasikan **formulasi robust counterpart** dengan *budget of uncertainty* $\Gamma$:

$$
\max_{x \in X} \min_{u \in \mathcal{U}} Z(x, u)
$$
$$
\mathcal{U} = \left\{ u : \sum_{k} \frac{|\tilde{p}_k - p_k|}{\hat{p}_k} \leq \Gamma \right\}
$$

di mana $\tilde{p}_k$ adalah harga material yang berfluktuasi dan $\Gamma$ adalah parameter konservatisme manajerial. Semakin tinggi $\Gamma$, semakin *risk-averse* keputusan yang dihasilkan.

## 3. Metodologi Rekayasa