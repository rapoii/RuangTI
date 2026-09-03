# 1424 — Manajemen Disrupsi dan Recovery dalam Sistem Transportasi Kompleks: Sintesis Literatur Aircraft Recovery Problem (ARP) dan Aplikasi Lintas Sektor Evakuasi Populasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** The aircraft recovery problem: A systematic literature review
**Jurnal & Sitasi Utama:** Mateus Santana, Jonathan De La Vega, Reinaldo Morábito (2023). *EURO Journal on Transportation and Logistics*. DOI: [https://doi.org/10.1016/j.ejtl.2023.100117](https://doi.org/10.1016/j.ejtl.2023.100117)
**Sitasi Pendukung:** Hassan Idoudi, Mostafa Ameli, Cyril Nguyen Van Phu (2022). *IEEE Access*. DOI: [https://doi.org/10.1109/access.2022.3199445](https://doi.org/10.1109/access.2022.3199445)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil global menghadapi tantangan operasional yang semakin kompleks akibat tingginya volatilitas jadwal akibat gangguan (disruptions) seperti cuaca buruk, kerusakan teknis pesawat, keterbatasan *air traffic control*, dan kejadian tak terduga lainnya. Santana, De La Vega, dan Morábito (2023, DOI: [10.1016/j.ejtl.2023.100117](https://doi.org/10.1016/j.ejtl.2023.100117)) melakukan tinjauan literatur sistematis terhadap *Aircraft Recovery Problem* (ARP), sebuah permasalahan optimasi untuk memulihkan jadwal penerbangan yang terganggu dengan menentukan ulang waktu keberangkatan, kemungkinan pembatalan penerbangan, dan revisi rute untuk armada pesawat yang berbeda. Studi ini menelusuri literatur seminal sejak tahun 1980-an hingga publikasi mutakhir, mengidentifikasi karakteristik utama yang dipertimbangkan dalam berbagai varian ARP untuk membuat model semakin mendekati realitas operasional.

Urgensi ekonomis ARP sangat substansial: biaya langsung akibat延误 (delay) dan pembatalan di industri penerbangan Uni Eropa saja mencapai miliaran euro per tahun, sementara biaya tidak langsung berupa hilangnya loyalitas pelanggan dan reputasi maskapai juga signifikan. Kerangka sistematis yang dibangun Santana et al. (2023) membagi ARP menjadi tiga tingkatan keputusan hierarkis yang saling bergantung: *flight schedule recovery* (pemulihan jadwal penerbangan), *aircraft recovery* (penugasan ulang pesawat ke rute), dan *crew recovery* (penugasan ulang awak pesawat), di mana aircraft recovery menjadi tulang punggung karena posisi tengah dalam hierarki keputusan. Pendekatan mereka menggunakan protokol PRISMA untuk menyeleksi paper, mengkategorikan formulasi matematis berdasarkan varian jaringan (time-space network, connection network, set partitioning), fungsi tujuan (biaya延误, pembatalan, swap pesawat), serta metode solusi (eksak: MIP dan CP; heuristik: GRASP, ALNS, GA; metaheuristik hybrid).

Pada tataran konseptual yang lebih luas, prinsip manajemen disrupsi dan pengalokasian ulang sumber daya dalam kondisi darurat juga dijumpai dalam konteks evakuasi populasi. Idoudi, Ameli, dan Nguyen Van Phu (2022, DOI: [10.1109/access.2022.3199445](https://doi.org/10.1109/access.2022.3199445)) mengusulkan kerangka dinamis berbasis agen yang mengintegrasikan *Shelter Allocation Problem* (SAP) dengan *Dynamic Traffic Assignment* (DTA) untuk meminimalkan total waktu evakuasi. Kedua domain ini — pemulihan maskapai dan evakuasi bencana — memiliki struktur matematis yang mirip: pengalokasian kapasitas terbatas (pesawat atau shelter), optimasi lintas jaringan transportasi dinamis, dan keputusan real-time di bawah ketidakpastian. Keterkaitan konseptual inilah yang menjadi landasan modul ini untuk menyajikan ARP sebagai studi kasus utama dengan aplikasi lintas sektor pada logistik evakuasi.

## 2. Landasan Teori & Formulasi Matematis

Formulasi ARP yang dilaporkan dalam tinjauan Santana et al. (2023) umumnya mengikuti arsitektur *Mixed Integer Programming* (MIP) dengan struktur jaringan *connection* atau *time-space*. Berikut adalah formulasi kanonik yang merepresentasikan esensi matematis ARP:

### 2.1 Notasi dan Himpunan

- $A = \{1, 2, \ldots, |A|\}$ : himpunan armada pesawat
- $F = \{1, 2, \ldots, |F|\}$ : himpunan penerbangan
- $N$ : himpunan node (bandara) dalam jaringan
- $T = \{1, 2, \ldots, |T|\}$ : himpunan periode waktu diskret
- $K$ : himpunan awak pesawat

### 2.2 Parameter

- $c_f^{cancel}$ : biaya pembatalan penerbangan $f$ (dalam satuan mata uang)
- $\delta_{ft}$ : biaya penundaan penerbangan $f$ jika diundur ke waktu $t$
- $\pi_{af}$ : biaya *swap* (penugasan ulang) pesawat $a$ ke penerbangan $f$
- $C_a$ : kapasitas tempat duduk pesawat $a$
- $D_f$ : permintaan penumpang pada penerbangan $f$
- $\tau_{ij}$ : waktu tempuh minimum antara node $i$ dan node $j$
- $M$ : konstanta *big-M* yang cukup besar

### 2.3 Variabel Keputusan

$$
x_{af} = \begin{cases} 1 & \text{jika pesawat } a \text{ ditugaskan ke penerbangan } f \\ 0 & \text{lainnya} \end{cases}
$$

$$
y_{ft} = \begin{cases} 1 & \text{jika penerbangan } f \text{ diberangkatkan pada waktu } t \\ 0 & \text{lainnya} \end{cases}
$$

$$
z_f = \begin{cases} 1 & \text{jika penerbangan } f \text{ dibatalkan} \\ 0 & \text{lainnya} \end{cases}
$$

### 2.4 Fungsi Tujuan

Formulasi tujuan standar dalam ARP meminimalkan total biaya operasional pemulihan:

$$
\min Z = \underbrace{\sum_{f \in F} c_f^{cancel} \cdot z_f}_{\text{biaya pembatalan}} + \underbrace{\sum_{f \in F} \sum_{t \in T} \delta_{ft} \cdot y_{ft}}_{\text{biaya penundaan}} + \underbrace{\sum_{a \in A} \sum_{f \in F} \pi_{af} \cdot x_{af}}_{\text{biaya swap pesawat}}
$$

### 2.5 Kendala Utama

**(a) Kendala penugasan tunggal (*assignment constraint*):** Setiap penerbangan harus dilayani paling banyak satu pesawat, atau dibatalkan:

$$
\sum_{a \in A} x_{af} + z_f = 1 \quad \forall f \in F
$$

**(b) Kendala keseimbangan armada (*aircraft balance*):** Konservasi aliran pesawat pada setiap node dan waktu menggunakan formulasi time-space network:

$$
\sum_{f \in F^{arr}_a(i,t)} x_{af} - \sum_{f \in F^{dep}_a(i,t)} x_{af} = b_{a,i,t} \quad \forall a \in A, i \in N, t \in T
$$

dengan $b_{a,i,t}$ merepresentasikan posisi awal pesawat (bernilai $+1$, $-1$, atau $0$).

**(c) Kendala kapasitas:** Kapasitas pesawat tidak boleh kurang dari permintaan:

$$
\sum_{a \in A} C_a \cdot x_{af} \geq D_f \cdot (1 - z_f) \quad \forall f \in F
$$

**(d) Kendala waktu tempuh minimum (ground time):**

$$
t^{arr}_{af} + \tau_{i,j} \leq t^{dep}_{af} + M(1 - x_{af}) \quad \forall a, f, (i,j) \in \text{rute } f
$$

### 2.6 Formulasi Dual untuk Masalah Evakuasi (Cross-Sector)

Idoudi et al. (2022) memformulasikan masalah evakuasi sebagai minimisasi waktu evakuasi total dengan coupling SAP-DTA:

$$
\min T_{total} = \max_{e \in E} \left( t^{arrive}_e - t^{start}_e \right)
$$

dengan $E$ adalah himpunan agen evakuasi. Sub-masalah shelter allocation dimodelkan sebagai:

$$
\sum_{s \in S} \alpha_{es} = 1 \quad \forall e \in E
$$

$$
\sum_{e \in E} \alpha_{es} \leq \kappa_s