# 2386 — Integrasi Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G dan Arsitektur Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri 4.0 menuntut representasi virtual yang akurat atas aset fisik untuk mendukung pemantauan, pemeliharaan prediktif, dan optimalisasi operasional secara real-time. Dalam konteks ini, *Asset Administration Shell* (AAS) muncul sebagai standar referensi internasional—yang awalnya diformalisasi oleh Plattform Industrie 4.0 dan kini sedang difinalisasi sebagai IEC 63278—untuk menyediakan *digital nameplate*, *capability description*, dan *state representation* dari sebuah aset industri. Cavalieri, Di Natale, dan Gambadoro (2024) dalam paper yang dipublikasikan di ICINCO 2024 (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti bahwa jaringan komunikasi 5G, dengan parameter-parameter *ultra-reliable low-latency communication* (URLLC), *enhanced mobile broadband* (eMBB), dan *massive machine-type communications* (mMTC), merupakan aset industri yang sangat dinamis dan belum memiliki model digital twin terstandar. Padahal, integrasi 5G ke dalam lantai pabrik—misalnya untuk AGV (*Automated Guided Vehicle*), robot kolaboratif, dan kontrol mesin CNC—memerlukan visibilitas terhadap parameter seperti latensi end-to-end, jitter, throughput, dan packet loss yang berubah secara time-varying sesuai beban trafik dan mobilitas node.

Urgensi ekonomis dari topik ini sangat substansial. Laporan industri menunjukkan bahwa *downtime* tak terencana pada lini produksi otomatis dapat menimbulkan kerugian hingga USD 50.000 per jam pada sektor semikonduktor, dan kerugian serupa pada industri otomotif mencapai USD 22.000 per menit. Tanpa digital twin yang valid atas infrastruktur 5G, diagnosa anomali komunikasi—misalnya degradasi throughput atau spike latensi—menjadi lambat karena teknisi harus melakukan pengukuran manual dengan *drive test* yang mahal. Lebih jauh, interoperabilitas antara vendor gNodeB yang berbeda (Ericsson, Nokia, Huawei) sangat sulit dijamin tanpa model data bersama. Pendekatan berbasis AAS, seperti yang diusulkan Cavalieri et al. (2024), memungkinkan vendor-independent representation yang secara langsung dapat di-*consume* oleh *Manufacturing Execution System* (MES) atau *Enterprise Resource Planning* (ERP) melalui protokol OPC UA.

Di sisi lain, De Marchi, Rojas, dan Mark (2022) dalam paper IN4PL 2022 (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) mengkaji arsitektur digital twin untuk *cyber-physical assembly transfer system*—sistem yang mengintegrasikan *Programmable Logic Controller* (PLC), sensor vision, konveyor, dan aktuator pneumatic ke dalam satu platform simulasi. Sistem transfer perakitan modern memerlukan koordinasi *just-in-sequence* yang presisi: setiap *workpiece* harus tiba di station perakitan dalam urutan dan waktu yang benar, dengan toleransi posisi ±0,1 mm. Tanpa model digital twin yang sinkron dengan status fisik real-time, *throughput* lini akan turun drastis ketika terjadi micro-stagnation. Kedua paper ini—meski membahas kasus yang berbeda—inilah yang menyatukan visi *digital twin* sebagai elemen fundamental arsitektur industri 4.0.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Formal Asset Administration Shell (AAS)

Sesuai standar yang diadopsi Cavalieri et al. (2024), AAS didefinisikan sebagai *tuple*:

$$
\mathcal{A} = \langle H, ID, \{S_i\}_{i=1}^{n}, R \rangle
$$

di mana $H$ adalah *header* (informasi versioning dan protocol), $ID$ adalah *asset identification* (global asset ID berbasis IEC 61499 / IDTA), $\{S_i\}$ adalah himpunan *submodels* yang merepresentasikan aspek spesifik aset, dan $R$ adalah relasi antar-submodel. Setiap submodel $S_i$ memiliki struktur:

$$
S_i = \langle id_i, kind_i, \{P_j^{(i)}\}, \{O_j^{(i)}\} \rangle
$$

dengan $kind_i \in \{\text{ConceptDescription, Instance, Type}\}$, $P_j^{(i)}$ himpunan *properties*, dan $O_j^{(i)}$ himpunan *operations*. Untuk sistem 5G, paper Cavalieri et al. mendefinisikan submodel-submodel utama sebagai berikut: *NetworkPerformance*, *QoSProfile*, *RadioResource*, dan *FaultHistory*.

### 2.2 Model Kinerja Jaringan 5G untuk URLLC

Parameter latensi end-to-end untuk komunikasi 5G URLLC dapat dimodelkan sebagai:

$$
L_{e2e} = T_{proc} + T_{queue} + T_{tx} + T_{prop} + T_{HARQ}
$$

dengan $T_{proc}$ waktu pemrosesan *baseband* ($\mu$s), $T_{queue}$ waktu tunggu antrian MAC, $T_{tx}$ durasi transmisi = $\frac{N_{bits}}{R_{throughput}}$, $T_{prop}$ propagasi udara ($\approx 3\,\mu$s/km), dan $T_{HARQ}$ retransmisi Hybrid ARQ. Untuk URLLC, target 3GPP TS 22.261 adalah $L_{e2e} \leq 1\,\text{ms}$ dengan *reliability* $1 - 10^{-5}$.

Reliability packet delivery $R_p$ untuk koneksi URLLC dengan probabilitas error per transmisi $p_e$ dan maksimum $N_{max}$ retransmisi:

$$
R_p = 1 - p_e^{N_{max}+1}
$$

Throughput agregat sektor 5G dengan $N_{UE}$ pengguna dan *resource block* total $RB_{total}$:

$$
\Phi = \sum_{k=1}^{N_{UE}} \eta_k \cdot \frac{RB_{total}}{N_{UE}} \cdot SE_k
$$

dengan $\eta_k$ efisiensi alokasi dan $SE_k$ *spectral efficiency* (bit/s/Hz) yang tergantung pada SINR:

$$
SE_k = \log_2\!\left(1 + \frac{P_t \cdot G_k}{N_0 + \sum_{j\neq k} P_t \cdot G_j}\right)
$$

### 2.3 Model Digital Twin untuk Sistem Transfer Perakitan

Merujuk pada De Marchi et al. (2022), state vector digital twin pada waktu $t$ untuk sistem transfer perakitan didefinisikan sebagai:

$$
\mathbf{x}(t) = \begin{bmatrix} \mathbf{q}(t) \\ \mathbf{v}(t) \\ \mathbf{m}(t) \end{bmatrix}
$$

di mana $\mathbf{q}(t)$ posisi diskret workpiece, $\mathbf{v}(t)$ kecepatan konveyor, $\mathbf{m}(t)$ status mesin (idle/working/error). Update sinkronisasi antara physical asset dan digital twin mengikuti *push-based* model dengan interval sampling $\Delta t$:

$$
\mathbf{x}_{DT}(t + \Delta t) = f\!\left(\mathbf{x}_{DT}(t), \mathbf{u}(t), \mathbf{y}_{phys}(t)\right) + \boldsymbol{\varepsilon}(t)
$$

dengan $f(\cdot)$ fungsi transisi state, $\mathbf{u}(t)$ input kontrol dari PLC, $\mathbf{y}_{phys}(t)$ pembacaan sensor fisik, dan $\boldsymbol{\varepsilon}(t)$ *synchronization error*. Deviasi model dapat dihitung sebagai Root Mean Square Error (RMSE) untuk validasi:

$$
RMSE = \sqrt{\frac{1}{N}\sum_{k=1}^{N}\left\|\mathbf{x}_{DT}(t_k) - \mathbf{x}_{phys}(t_k)\right\|_2^2}
$$

### 2.4 Model Antrian Sistem Transfer

Sistem transfer perakitan dapat dimodelkan sebagai jaringan antrian M/M/1 dengan *cycle time* workpiece:

$$
W_q = \frac{\rho}{\mu - \lambda}
$$

dengan $\rho = \lambda/\mu$ utilisasi server, $\lambda$ laju kedatangan, dan $\mu$ laju pelayanan. *Little's Law* memberikan *work-in-process*:

$$
L = \lambda \cdot W
$$

dengan $W = W_q + 1/\mu$ *total time in system*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi AAS Digital Twin untuk Jaringan 5G Industri

Berdasarkan metodologi Cavalieri et al. (2024), prosedur implementasi mengikuti tujuh tahap:

1. **Identifikasi Aset 5G**: Inventorisasi seluruh elemen jaringan 5G industri, termasuk gNodeB, *User Equipment* (UE), *edge compute node*, dan *network slice*. Setiap aset diberi Global Asset ID sesuai IDTA spec part 1.
2. **Pemilihan Submodel**: Berdasarkan use case, pilih submodel AAS yang relevan—misalnya submodel `Nameplate` (ID 1.0.0), `HandoverDocumentation` (ID 2.0.0), dan `NetworkPerformance` (kustom sesuai Cavalieri et al.).
3. **Pemetaan Properti ke Sumber Data**: Hubungkan setiap properti submodel ke *source endpoint* melalui OPC UA, MQTT-SN, atau NETCONF/YANG untuk *southbound* interface.
4. **Registrasi ke AAS Registry**: Daftarkan AAS XML/AASX package ke *AAS Registry Service* yang dapat diakses MES/ERP.
5. **Implementasi *Lifecycle* Sinkronisasi**: Terapkan *event-driven update* dengan timestamp ISO 8601 dan quality code (Good/Bad/Substituted) sesuai OPC UA spec.
6. **Validasi Functional Safety**: Pastikan submodel fault-history mampu merekam alarm 3GPP TS 28.532 dan memicu shutdown sesuai SIL level (IEC 61508).
7. **Continuous Monitoring**: Jalankan *anomaly detection* terhadap drift antara nilai properti AAS dan ground-truth measurement.

### 3.2 Arsitektur Digital Twin untuk Cyber-Physical Assembly Transfer

Mengikuti kerangka De Marchi et al. (2022), arsitektur berlapis (*layered architecture*) yang digunakan:

```
┌────────────────────────────────────────────┐
│  Cloud Layer: Predictive Analytics, MES/ERP│
├────────────────────────────────────────────┤
│  Edge Layer: Real-time DT, OPC UA Server   │
├────────────────────────────────────────
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
