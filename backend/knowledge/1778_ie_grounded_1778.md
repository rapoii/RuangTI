# 1778 — Digital Twin Industri Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Produksi Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental arsitektur sistem manufaktur melalui integrasi erat antara entitas fisik (*physical asset*) dan representasi digitalnya dalam sebuah *cyber-physical production system* (CPPS). Salah satu inkompatibilitas struktural terbesar yang menghambat interoperabilitas antar aset industri adalah ketiadaan semantik bersama (*shared semantics*) antar vendor, platform, dan lapisan otomasi. Untuk menjawab tantangan ini, *Reference Architecture Model Industrie 4.0* (RAMI 4.0) yang dipublikasikan oleh *Plattform Industrie 4.0* memperkenalkan konsep **Asset Administration Shell (AAS)** — sebuah shell digital berbasis standar yang merepresentasikan identitas, kemampuan, status, dan riwayat suatu aset industri secara mesin-baca (machine-readable). Standar AAS kini dikodifikasi melalui *IEC PAS 63278* dan *DIN SPEC 91373*, dan menjadi pilar interoperabilitas di tingkat *shop-floor* hingga *cloud*.

Dalam konteks ini, paper utama Cavalieri, Di Natale, dan Gambadoro (2024) yang berjudul *"Asset Administration Shell Digital Twin of 5G Communication System"* (lihat DOI [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) membahas persoalan kritis yang jarang diangkat dalam literatur akademis: **bagaimana memodelkan jaringan komunikasi 5G itu sendiri sebagai sebuah aset industri yang memiliki Digital Twin berbasis AAS**. Pendekatan ini penting karena komunikasi nirkabel generasi kelima (5G), khususnya profil *Ultra-Reliable Low-Latency Communication* (URLLC), kini menjadi tulang punggung transmisi data pada *smart factory*, robot kolaboratif, *autonomous guided vehicle* (AGV), dan sistem kontrol real-time. Tanpa Digital Twin yang akurat dari infrastruktur 5G, parameter *latency*, *jitter*, *packet loss*, dan kualitas sinyal tidak dapat diprediksi atau dioptimasi secara deterministik.

Urgensi ekonomis dari pendekatan ini sangat nyata. Studi *Ericsson Mobility Report* (2023) memproyeksikan bahwa pada tahun 2030 lebih dari 30% koneksi *machine-to-machine* (M2M) akan menggunakan jaringan 5G privat di lingkungan industri. Namun, menurut laporan *McKinsey Industry 4.0 Survey*, 72% perusahaan manufaktur global masih belum memiliki visibilitas real-time terhadap kualitas koneksi jaringan mereka ke aset fisik. Cavalieri et al. (2024) menjawab gap ini dengan mengusulkan arsitektur AAS yang merepresentasikan setiap *network slice*, *base station* (gNodeB), dan *User Equipment* (UE) sebagai submodel digital twin yang mampu melakukan *predictive maintenance*, *anomaly detection*, dan *dynamic reconfiguration*. Sebagai penguat metodologis, paper kedua oleh De Marchi, Rojas, dan Mark (2022) — DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329) — menyajikan arsitektur Digital Twin untuk *cyber-physical assembly transfer system* yang memperlihatkan pola integrasi sensor, aktuator, dan kontroler pada lini perakitan, yang dapat di-*reuse* sebagai blueprint arsitektural ketika mengintegrasikan AAS 5G dengan lini produksi fisik.

Dengan demikian, kombinasi kedua literatur ini menghasilkan kerangka integratif: **bagaimana AAS sebagai standar interoperabilitas dapat di-*deploy* tidak hanya pada mesin produksi tetapi juga pada infrastruktur telekomunikasi yang melayani mesin-mesin tersebut**, menciptakan *holistic digital twin* lintas domain (operasional-teknologis).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sinkronisasi Digital Twin — Persamaan Keadaan Diskret

Digital twin dimodelkan sebagai cerminan dinamis dari aset fisik. Dalam Cavalieri et al. (2024), keadaan sistem pada waktu $t$ di estimasi menggunakan model *state-space* diskret berikut:

$$x_d[k+1] = A_d \cdot x_d[k] + B_d \cdot u[k] + w[k]$$

$$y_d[k] = C_d \cdot x_d[k] + v[k]$$

di mana:
- $x_d[k] \in \mathbb{R}^n$ adalah vektor keadaan digital twin pada langkah diskret ke-$k$
- $u[k]$ adalah vektor masukan kontrol
- $y_d[k]$ adalah keluaran terukur dari twin
- $A_d, B_d, C_d$ adalah matriks transisi, kendali, dan observasi (di-*discretize* dari model kontinyu dengan periode $T_s$)
- $w[k] \sim \mathcal{N}(0, Q)$ adalah derau proses, $v[k] \sim \mathcal{N}(0, R)$ adalah derau pengukuran

Untuk aset fisik 5G (misalnya gNodeB), parameter $x_d$ mencakup *transmit power*, *beamforming vector*, *number of connected UEs*, dan *resource block utilization*.

### 2.2 Latency End-to-End dan Persyaratan URLLC

Kualitas komunikasi 5G pada profil URLLC dievaluasi melalui *latency budget* end-to-end:

$$L_{e2e} = L_{proc} + L_{queue} + L_{trans} + L_{prop}$$

di mana:
- $L_{proc}$: latensi pemrosesan paket di *application layer* (umumnya $\leq 1$ ms)
- $L_{queue}$: latensi antrian di *MAC layer*
- $L_{trans}$: latensi transmisi *over-the-air* (1 simbol OFDM = 71,4 $\mu$s pada numerologi $\mu=0$, subcarrier spacing 15 kHz; atau 17,86 $\mu$s pada $\mu=3$ untuk URLLC)
- $L_{prop}$: latensi propagasi sinyal elektromagnetik ($L_{prop} = d/c$, dengan $d$ jarak dan $c \approx 3 \times 10^8$ m/s)

Sasaran URLLC adalah:

$$P(L_{e2e} > L_{max}) \leq 10^{-5} \text{ (reliabilitas 99,999\%)}$$

dengan $L_{max} = 1$ ms untuk use-case *motion control*, dan $L_{max} = 5$–$10$ ms untuk *process automation* (3GPP TR 22.804).

### 2.3 Throughput Sinyal 5G NR

Throughput *downlink* pada 5G New Radio (NR) dihitung dengan formula kapasitas Shannon yang disesuaikan:

$$R_{DL} = \sum_{j=1}^{J} \left( N_{RB,j} \cdot N_{SC}^{RB} \cdot N_{symb}^{slot} \cdot (1 - OH) \cdot \log_2(1 + \text{SINR}_j) \cdot Q_m \cdot \nu \right)$$

di mana:
- $N_{RB,j}$: jumlah *resource block* pada slot ke-$j$
- $N_{SC}^{RB} = 12$: subcarrier per RB
- $N_{symb}^{slot}$: simbol OFDM per slot (14 untuk normal CP)
- $OH$: *overhead* (kontrol, referensi sinyal), tipikal $0,14$–$0,20$
- $\text{SINR}_j$: rasio sinyal terhadap interferensi-derau
- $Q_m$: *modulation order* (4 untuk QPSK, 6 untuk 16-QAM, 8 untuk 64-QAM, 10 untuk 256-QAM)
- $\nu$: jumlah *MIMO layers*

### 2.4 Formulasi AAS sebagai *Digital Twin* Container

Mengikuti standar IEC PAS 63278 dan spesifikasi implementasi Cavalieri et al. (2024), AAS direpresentasikan sebagai struktur hierarkis:

$$AAS_i = \{ ID_i, \text{MetaData}_i, \mathcal{S}_i, \mathcal{V}_i \}$$

dengan:
- $ID_i$: *globally unique identifier* (berbasis URI/IRI)
- $\text{MetaData}_i$: informasi deskriptif (vendor, versi, tanggal pembuatan)
- $\mathcal{S}_i = \{ s_{i,1}, s_{i,2}, \dots, s_{i,n} \}$: himpunan *submodels*
- $\mathcal{V}_i$: *value-only* data ringkas untuk transmisi efisien

Setiap submodel $s_{i,k}$ memiliki struktur:

$$s_{i,k} = \{ \text{idShort}_k, \text{semanticId}_k, \text{DataSpecification}_k, \text{Value}_k \}$$

di mana *semanticId* merujuk pada *dictionary* standar (seperti *ECLASS* atau *IEC Common Data Dictionary*). Untuk elemen 5G, Cavalieri et al. (2024) mengusulkan ekstensi submodel khusus — misalnya submodel `CommunicationStatus` yang berisi parameter `RSSI`, `RSRP`, `SINR`, `BLER`, dan `throughput`.

### 2.5 Filter Kalman untuk Estimasi Keadaan Jaringan

Karena pengukuran kualitas sinyal 5G selalu mengandung derau, digunakan *Kalman Filter* untuk menghasilkan estimasi optimal:

$$\hat{x}_d[k|k] = \hat{x}_d[k|k-1] + K_k \cdot (y[k] - C_d \cdot \hat{x}_d[k|k-1])$$

dengan gain Kalman:

$$K_k = P_d[k|k-1] \cdot C_d^T \cdot (C_d \cdot P_d[k|k-1] \cdot C_d^T + R)^{-1}$$

Variasi yang lebih relevan untuk jaringan adalah *Extended Kalman Filter* (EKF) ketika hubungan nonlinier antara parameter fisik (misalnya posisi UE) dan kualitas sinyal (pathloss, fading) berlaku. Formula pathloss logaritmik yang digunakan