# 2626 — Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur modern ditandai dengan konvergensi antara *cyber-physical production systems* (CPPS), jaringan komunikasi nirkabel generasi kelima (5G), dan arsitektur *digital twin* (DT). Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti sebuah permasalahan fundamental yang selama ini menjadi bottleneck dalam adopsi Industry 4.0: belum adanya kerangka interoperabilitas formal untuk mengelola *base station* 5G sebagai *aset industri* yang dapat dimonitor, dikonfigurasi, dan diorkestrasikan secara otomatis oleh *Manufacturing Execution System* (MES) [DOI: 10.5220/0012914200003822]. Paper tersebut memperkenalkan konsep **Asset Administration Shell (AAS)** — sebuah implementasi formal dari *Reference Architecture Model Industry 4.0* (RAMI 4.0) — yang digunakan untuk membungkus base station 5G menjadi *smart asset* digital dengan submodel yang merepresentasikan parameter radio, kapasitas *slicing*, dan status operasional secara *real-time*.

Secara ekonomis, inisiatif ini sangat relevan mengingat investasi *private 5G network* di lantai pabrik global diproyeksikan menembus USD 7,5 miliar pada 2027 (laporan GSMA & Omdia yang dirujuk Cavalieri et al., 2024). Tanpa lapisan *digital twin* yang terdistribusi dan terstandarisasi, operator pabrik tidak dapat melakukan *closed-loop control* antara kualitas layanan (*Quality of Service*/QoS) jaringan dan proses produksi fisik. Sebagai komplementer, De Marchi, Rojas, dan Mark (2022) menunjukkan bahwa arsitektur DT untuk *cyber-physical assembly transfer system* — yang mengintegrasikan konveyor, robot delta, dan sensor vision — memerlukan protokol komunikasi latensi rendah dan deterministik [DOI: 10.5220/0011589900003329]. Kombinasi keduanya menjawab kebutuhan arsitektur *plug-and-produce* di mana peralatan fisik (*physical asset*) dan representasi digitalnya (AAS) dapat berkomunikasi dua arah melalui *bidirectional channel* berkecepatan tinggi, khususnya *Time-Sensitive Networking* (TSN) dan URLLC (Ultra-Reliable Low Latency Communication) 5G. Urgensi teknis ini makin nyata ketika *machine-to-machine* (M2M) communication menjadi tulang punggung *lot-size-one* production di mana setiap *work order* memerlukan konfigurasi ulang jaringan dalam orde milidetik.

## 2. Landasan Teori & Formulasi Matematis

Kerangka AAS yang diusulkan Cavalieri et al. (2024) dibangun di atas empat entitas matematis utama: **Submodel**, **Property**, **Operation**, dan **Event**. Submodel adalah himpunan terstruktur dari *property* yang merepresentasikan aspek fungsional aset. Formulasi *state vector* digital twin untuk base station 5G dapat dinyatakan sebagai:

$$S_{AAS}(t) = \left[ P_{RF}(t), \; P_{Thr}(t), \; P_{UE}(t), \; P_{Slice}(t) \right]^{T}$$

di mana $P_{RF}(t)$ adalah daya pancar radio (dBm), $P_{Thr}(t)$ adalah throughput agregat (Mbps), $P_{UE}(t)$ adalah jumlah *User Equipment* aktif, dan $P_{Slice}(t)$ adalah status *network slice* pada waktu $t$.

Sinkronisasi antara *physical asset* dan *digital shadow* dimodelkan melalui fungsi *latency-aware synchronization*:

$$\Delta t_{sync} = t_{AAS}^{receive} - t_{sensor}^{acquire}$$

dengan *jitter tolerance* menurut standar IEEE 802.1Qcc untuk TSN:

$$\sigma_{jitter} \le \sigma_{max} = \frac{1}{2f_{cycle}}$$

di mana $f_{cycle}$ adalah frekuensi siklus kontrol (untuk otomasi pabrik tipikal $f_{cycle} = 1$ kHz, sehingga $\sigma_{max} = 0{,}5$ ms).

Untuk model 5G URLLC, Cavalieri et al. (2024) menggunakan persamaan *latency budget*:

$$L_{budget} = L_{tx} + L_{prop} + L_{proc} + L_{queue} \le L_{target} = 1 \text{ ms}$$

dengan tingkat keandalan $R = 1 - 10^{-5}$ untuk paket 32 byte.

De Marchi et al. (2022) melengkapi dengan fungsi *transfer function* untuk sistem transfer perakitan cyber-physical dalam domain Laplace:

$$G(s) = \frac{Y(s)}{U(s)} = \frac{K \cdot e^{-\tau s}}{(T_1 s + 1)(T_2 s + 1)}$$

di mana $K$ adalah gain statis (m/V), $\tau$ adalah *dead time* konveyor (s), dan $T_1, T_2$ adalah konstanta waktu motor servo. *State observer* untuk digital twin didefinisikan sebagai:

$$\hat{x}(t) = A\hat{x}(t) + Bu(t) + L\left[y(t) - C\hat{x}(t)\right]$$

dengan $L$ adalah *observer gain* yang dihitung dari persamaan *algebraic Riccati equation* $A^{T}P + PA - PC^{T}R^{-1}CP + Q = 0$, menghasilkan *error covariance* minimum $\text{tr}(P) \to \min$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS-DT untuk base station 5G mengikuti prosedur tujuh tahap yang diuraikan Cavalieri et al. (2024), dengan adaptasi dari De Marchi et al. (2022) untuk lapisan fisik:

**Tahap 1 — Identifikasi Aset & Pemetaan Submodel.** Setiap *gNodeB* (5G NR base station) diinventarisasi melalui *Asset Repository* dan dimodelkan menggunakan format AAS yang sesuai spesifikasi *Plattform Industrie 4.0* (PI 4.0). Submodel yang relevan: *Identification*, *CapabilityDescription*, *CommunicationStatus*, dan *RadioParameters*.

**Tahap 2 — Akuisisi Data via OPC UA over 5G.** Sensor pada Physical Asset mengirim data melalui *OPC UA Pub/Sub* yang diangkut melalui *5G mMTC* (massive Machine Type Communication). Skema JSON atau binary digunakan untuk efisiensi bandwidth.

**Tahap 3 — Pembuatan Digital Shadow.** *Digital shadow* di-*host* pada *edge cloud* (MEC — Multi-access Edge Computing) untuk menjamin latensi < 10 ms. Arsitektur berlapis:

```
[Physical Asset: gNodeB]
        ↓ (5G NR Air Interface, f ≤ 6 GHz)
[O-RAN Distributed Unit (DU)]
        ↓ (F1 interface)
[Edge MEC Server — AAS Registry + DT Engine]
        ↓ (REST/HTTP, AAS API)
[Manufacturing Execution System (MES)]
```

**Tahap 4 — Penentuan *Network Slice* Dedicated.** Berdasarkan *work order*, MES meminta *slice* baru melalui AAS *operation* `createURLLCSlice(sst, sd, latencyReq)`. Parameter SST (Slice/Service Type) dan SD (Slice Differentiator) ditentukan.

**Tahap 5 — Validasi Sinkronisasi & Kalibrasi Model.** Dilakukan pengukuran $\Delta t_{sync}$ dan *jitter*; model *digital twin* dikalibrasi menggunakan *Extended Kalman Filter* (EKF) dengan update persamaan:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H\hat{x}_{k|k-1})$$

**Tahap 6 — Closed-Loop Control.** Data dari DT (misalnya prediksi congestion) dikirim balik sebagai *setpoint* untuk re-konfigurasi radio via AAS *property write*.

**Tahap 7 — Audit, Logging & Continuous Improvement.** Setiap perubahan *submodel* dicatat dalam *immutable ledger* sesuai IEC 62443 untuk keamanan siber.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik *smart manufacturing* di Brescia, Italia, mengoperasikan lini perakitan *electronic control unit* (ECU) dengan 4 *Delta robot*, 2 konveyor, dan 1 *private 5G network* dengan 3 *gNodeB* (Cavalieri et al., 2024, studi kasus Section 4).

**Parameter Input:**

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Jumlah UE aktif | $P_{UE}$ | 250 |
| Throughput agregat | $P_{Thr}$ | 850 Mbps |
| Daya pancar | $P_{RF}$ | 23 dBm |
| Frekuensi | $f$ | 3,5 GHz |
| Bandwidth | $BW$ | 100 MHz |
| Target URLLC latency | $L_{target}$ | 1 ms |
| Ukuran paket | $L_{packet}$ | 32 byte |
| Frame duration | $T_{frame}$ | 1 ms (numerology $\mu=0$) |

**Langkah 1 — Perhitungan Throughput 5G NR.** Menggunakan formula Shannon adaptif dengan parameter numerology $\mu = 0$ (subcarrier spacing 15 kHz):

$$R_{max} = N_{PRB} \cdot N_{symb} \cdot N_{bits/symb} \cdot \frac{12}{T_{slot}}$$

dengan $N_{PRB} = BW / (12 \cdot \Delta f) = 100 / (12 \cdot 0{,}015) \approx 273$ *Physical Resource Blocks*, $N_{symb} = 14$ (slot normal), dan asumsi 256-QAM ($N_{bits/symb} = 8$):

$$R_{max} = 273 \cdot 14 \cdot 8 \cdot \frac{12}{1\,\text{ms}} \approx 366{,}8 \text{ Mbps}$$

Agregat 3 *gNodeB* dengan *spatial multiplexing* 4×4 MIMO: $R_{total} = 4 \cdot 366{,}8 \approx 1{,}467$ Gbps — cukup untuk memenuhi $P_{Thr} = 850$ Mbps dengan utilisasi $U = 850/1467 \approx 57{,}9\%$.

**Langkah 2 — Latency Budget URLLC.**

$$L_{budget} = L_{tx} + L_{prop} + L_{proc} + L_{queue}$$

- $L_{tx} = T_{frame} = 1$ ms
- $L_{prop} = d/c \approx (50\,\text{m})/(3 \cdot 10^{8}\,\text{m/s}) \approx 0{,}167\,\mu\text{s}$
- $L_{proc} = 0{,}1$ ms (gNodeB processing)
- $L_{queue} = \rho / (\mu - \lambda)$, dengan $\rho = 0{,}6$, $\mu = 1000$/s, $\lambda = 600$/s → $L_{queue} = 0{,}6/(1000-600) = 1{,}5$ ms

$$L_{total} = 1 + 0{,}000167 + 0{,}1 + 1{,}5 = 2{,}6 \text{ ms}$$

Karena $L_{total} > L_{target}$, diperlukan **preemptive scheduling**: kurangi $L_{queue}$ menjadi $\le 0{,}2$ ms dengan $\lambda \le \rho \cdot \mu / (\rho + L_{target} \cdot \mu \cdot \rho)$ — praktis dengan mini-slot 2-OFDM.

**Langkah 3 — Observer Gain untuk DT.** Untuk *state observer* dengan $A = [-1\;0;\; 0\;-2]$, $B = [1;\; 1]$, $C = [1\;0]$, memilih $Q = \text{diag}(10, 1)$, $R = 1$, solusi ARE menghasilkan:

$$P = \begin{bmatrix} 6{,}12 & 0{,}94 \\ 0{,}94 & 0{,}87 \end{bmatrix}, \quad L = P C^{T} R^{-1} = \begin{bmatrix} 6{,}12 \\ 0{,}94 \end{bmatrix}$$

*Error convergence* terjamin dengan *eigenvalues* dari $(A - LC)$: $\{-6{,}12; -2\}$ — keduanya real negatif, sehingga DT stabil dan konvergen dalam $\approx 1{,}5$ detik.

**Interpretasi Manajerial:** Hasil menunjukkan bahwa sistem mampu mempertahankan URLLC di bawah 1 ms hanya dengan adopsi *mini-slot* dan AAS-driven reconfiguration. Penghematan *retooling time* mencapai 38% dibanding pendekatan konvensional (re-konfigurasi manual via SNMP, lihat De Marchi et al.,