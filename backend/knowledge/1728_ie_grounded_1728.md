# 1728 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok barang tahan lama. Karakteristik utama yang membedakannya adalah **perishability** (ketahanan simpan terbatas), **cold-chain dependency** (ketergantungan pada rantai dingin dengan suhu 2–4°C), **quality degradation kinetics** (kinetika degradasi mutu yang bergantung waktu-suhu), serta **demand volatility** yang sensitif terhadap pola musiman dan preferensi konsumen. Lead Researchers (2023) dalam karyanya di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) menekankan bahwa keputusan desain jaringan pada industri susu tidak dapat dipisahkan dari keputusan operasional harian karena sifat produk yang terdegradasi secara eksponensial mengikuti hukum Arrhenius.

Urgensi operasional dari topik ini tecermin dari beberapa fakta empiris. Pertama, FAO melaporkan bahwa sekitar 14% produksi susu global hilang antara tahap panen hingga konsumsi, dengan kerugian terbesar terjadi pada node *processing* dan *distribution*. Kedua, biaya energi untuk mempertahankan cold-chain menyumbang 18–25% dari total biaya operasional rantai pasok susu di negara berkembang. Ketiga, konsumen modern menuntut sertifikasi mutu seperti Global Standard for Food Safety Issue 9 (BRCGS) dan ISO 22000 yang mensyaratkan keterlacakan (*traceability*) penuh. Keempat, fluktuasi harga susu mentah mengikuti siklus 36-bulanan yang membuat perencanaan kapasitas menjadi masalah stokastik jangka panjang.

Dalam konteks ini, Lead Researchers (2023) mengajukan kerangka multi-objektif yang menyeimbangkan tiga tujuan yang saling berkonflik: (i) minimisasi total biaya logistik, (ii) maksimisasi tingkat kesegaran (*freshness*) produk saat sampai di konsumen, dan (iii) minimisasi emisi karbon dari operasional rantai dingin. Ketiga tujuan ini memiliki trade-off yang inheren—meningkatkan kesegaran berarti menambah frekuensi pengiriman atau membangun fasilitas lebih dekat ke konsumen, yang keduanya meningkatkan biaya dan emisi. Untuk menyelesaikan masalah optimasi berskala besar yang muncul dari jaringan multi-echelon multi-periode, penulis menggunakan **Benders Decomposition** sebagai strategi dekomposisi, yang memisahkan masalah keputusan investasi (lokasi fasilitas, kapasitas) sebagai *master problem* dari masalah operasional (aliran, produksi) sebagai *subproblem*. Pendekatan ini sejalan dengan kontribusi Zhang, Li, dan Ren (2024) di DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437), yang menunjukkan efektivitas Benders Decomposition dalam konteks reverse supply chain dengan keputusan kualitas, sehingga mengindikasikan generalisasi lintas domain.

Relevansi industri dari kerangka ini juga muncul dari integrasi dengan Industri 4.0. Sensor IoT pada tangki susu mentah, GPS pada truk refrigerated, dan sistem ERP memungkinkan pengukuran parameter kualitas secara real-time, sehingga koefisien degradasi mutu不再是 deterministik melainkan stokastik. Oleh karena itu, formulasi matematis yang akan diuraikan pada bagian berikutnya perlu menangkap ketidakpastian ini melalui skenario diskrit atau *chance constraints*.

## 2. Landasan Teori & Formulasi Matematis

Formulasi yang diusulkan oleh Lead Researchers (2023) merupakan Mixed-Integer Linear Programming (MILP) dengan elemen nonlinier pada fungsi tujuan kualitas. Untuk kejelasan analitis, kami sajikan versi linearisasi-deterministik yang relevan dengan literatur.

### 2.1 Notasi Himpunan dan Parameter

Himpunan keputusan didefinisikan sebagai:

- $I = \{1, 2, \dots, m\}$: himpunan *farm* (pemasok susu mentah)
- $J = \{1, 2, \dots, n\}$: himpunan kandidat *processing plant* (pabrik pengolahan)
- $K = \{1, 2, \dots, p\}$: himpunan *distribution center* (pusat distribusi)
- $L = \{1, 2, \dots, q\}$: himpunan zona permintaan (ritel)
- $T = \{1, 2, \dots, \tau\}$: himpunan periode perencanaan (mingguan)

Parameter kunci meliputi:

- $f_j$: biaya tetap pembukaan plant $j$ (rupiah/tahun)
- $c^{tr}_{ij}$: biaya transportasi unit dari farm $i$ ke plant $j$ (rupiah/liter)
- $c^{pr}_{jk}$: biaya pemrosesan di plant $j$ dan pengiriman ke DC $k$
- $c^{dt}_{kl}$: biaya distribusi dari DC $k$ ke zona $l$
- $cap_j$: kapasitas olah plant $j$ (liter/hari)
- $d_{lt}$: permintaan deterministik di zona $l$ pada periode $t$
- $s_i$: pasokan susu mentah dari farm $i$ (liter/hari)
- $\alpha$: laju degradasi mutu (/jam) pada suhu referensi
- $\beta$: faktor akselerasi Arrhenius terhadap suhu aktual
- $E_j$: emisi CO₂ per liter yang diproses di plant $j$
- $F_0$: tingkat kesegaran awal susu mentah
- $F^{min}$: ambang batas kesegaran minimum yang dapat diterima konsumen

### 2.2 Variabel Keputusan

- $x_j \in \{0,1\}$: 1 jika plant $j$ dibuka, 0 sebaliknya
- $y_{ijt} \geq 0$: aliran susu mentah dari farm $i$ ke plant $j$ pada periode $t$
- $z_{jkt} \geq 0$: aliran produk olahan dari plant $j$ ke DC $k$ pada periode $t$
- $w_{klt} \geq 0$: aliran dari DC $k$ ke zona $l$ pada periode $t$
- $q_{lt} \geq 0$: tingkat kesegaran rata-rata saat produk sampai di zona $l$ pada periode $t$
- $e_{total} \geq 0$: total emisi CO₂ rantai pasok

### 2.3 Formulasi Multi-Objektif

Mengikuti prinsip $\epsilon$-constraint method untuk menyeimbangkan tujuan, masalah optimasi diformulasikan sebagai:

**Tujuan 1 — Minimisasi Total Biaya (Z₁):**

$$\min Z_1 = \sum_{j \in J} f_j x_j + \sum_{t \in T} \sum_{i \in I} \sum_{j \in J} c^{tr}_{ij} y_{ijt} + \sum_{t \in T} \sum_{j \in J} \sum_{k \in K} c^{pr}_{jk} z_{jkt} + \sum_{t \in T} \sum_{k \in K} \sum_{l \in L} c^{dt}_{kl} w_{klt}$$

**Tujuan 2 — Maksimisasi Kesegaran Rata-Rata (Z₂):**

$$\max Z_2 = \frac{1}{\sum_{l,t} d_{lt}} \sum_{t \in T} \sum_{l \in L} q_{lt} d_{lt}$$

di mana $q_{lt}$ mengikuti hukum degradasi eksponensial:

$$q_{lt} = F_0 \cdot \exp\left(-\alpha \beta \left[\tau^{tr}_{j(i)k} + \tau^{pr}_j + \tau^{dt}_{kl}\right]\right)$$

dengan $\tau^{tr}$, $\tau^{pr}$, $\tau^{dt}$ masing-masing adalah waktu transit rata-rata untuk segmen *farm→plant*, *plant→DC*, dan *DC→retail*.

**Tujuan 3 — Minimisasi Emisi Karbon (Z₃):**

$$\min Z_3 = \sum_{t \in T} \sum_{j \in J} \sum_{k \in K} E_j z_{jkt} + \sum_{t \in T} \sum_{k \in K} \sum_{l \in L} E^{dt}_{kl} w_{klt}$$

### 2.4 Kendala-Kendala

Kendala pasokan di setiap farm:

$$\sum_{j \in J} y_{ijt} \leq s_i, \quad \forall i \in I, \forall t \in T$$

Kendala kapasitas di setiap plant:

$$\sum_{i \in I} y_{ijt} \leq cap_j \cdot x_j, \quad \forall j \in J, \forall t \in T$$

Kendala keseimbangan aliran di plant (dengan yield processing $\eta$):

$$\sum_{i \in I} \eta \cdot y_{ijt} = \sum_{k \in K} z_{jkt}, \quad \forall j \in J, \forall t \in T$$

Kendala keseimbangan di DC:

$$\sum_{j \in J} z_{jkt} = \sum_{l \in L} w_{klt}, \quad \forall k \in K, \forall t \in T$$

Kendala pemenuhan permintaan dengan mutu minimum:

$$\sum_{k \in K} w_{klt} = d_{lt}, \quad \forall l \in L, \forall t \in T$$

$$q_{lt} \geq F^{min}, \quad \forall l \in L, \forall t \in T$$

### 2.5 Dekomposisi Benders

Sesuai Lead Researchers (2023), masalah dipartisi menjadi:

**Master Problem (MP):**

$$\min \sum_{j} f_j x_j + \theta$$
$$\text{s.t.} \quad \theta \geq \pi^T (b - Fx) \quad \forall \pi \in \Pi^{(k)}$$
$$x_j \in \{0,1\}$$

**Subproblem (SP) — untuk vektor $x$ tetap:**

$$\min \sum_{t,i,j} c^{tr}_{ij} y_{ijt} + \sum_{t,j,k} c^{pr}_{jk} z_{jkt} + \sum_{t,k,l} c^{dt}_{kl} w_{klt}$$
$$\text{s.t. } Ay + Bz + Cw = d, \quad (\pi)$$
$$Dy + Ez + Gw \leq h, \quad (\mu)$$
$$y, z, w \geq 0$$

Dual SP menghasilkan harga bayangan $\pi^{(k)}$, yang dimasukkan sebagai **Benders cut** ke MP untuk iterasi berikutnya. Zhang, Li, dan Ren (2024) membuktikan bahwa penambahan cut kualitas berbasis *quality recovery ratio* mempercepat konvergensi rata-rata 35% pada reverse supply chain.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Lead Researchers (2023) di industri mengikuti SOP tujuh-tahap yang sejalan dengan *Project Management Body of Knowledge* (PMBOK 7th Edition) dan ISO/IEC 15288:

**Tahap 1 — Karakterisasi Data Historis.** Kumpulkan data IoT dari sensor suhu pada tangki refrigerated, GPS armada, dan transaksi ERP minimal 24 bulan terakhir. Hitung parameter $\alpha$, $\beta$ dengan regresi non-l