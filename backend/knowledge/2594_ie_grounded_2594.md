# 2594 — Asset Administration Shell dan Arsitektur Digital Twin untuk Sistem Komunikasi 5G serta Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G dan Arsitektur Digital Twin Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental paradigma rekayasa sistem manufaktur, dari lini produksi yang terisolasi menuju *cyber-physical production systems* (CPPS) yang saling terhubung secara real-time. Dalam konteks ini, Asset Administration Shell (AAS) muncul sebagai standar referensi arsitektur digital twin yang dipromosikan oleh Plattform Industrie 4.0 dan secara resmi diadopsi melalui IEC PAS 63278-3:2024 (Cavalieri et al., 2024). AAS berfungsi sebagai representasi digital interoperabel dari sebuah aset fisik—mulai dari sensor lapangan, aktuator, lini perakitan, hingga seluruh pabrik—yang memungkinkan integrasi semantik lintas *Manufacturing Execution System* (MES), *Enterprise Resource Planning* (ERP), dan *Product Lifecycle Management* (PLM).

Cavalieri, Di Natale, dan Gambadoro (2024) mengidentifikasi bahwa salah satu tantangan paling signifikan dalam mengimplementasikan AAS dalam skala industri adalah kurangnya dukungan terhadap deskripsi formal dan eksekusi prosedur administrasi yang dibutuhkan untuk mengelola submodel AAS secara terdistribusi. Mereka mengusulkan ekstensi arsitektur AAS yang memungkinkan integrasi langsung dengan jaringan komunikasi 5G, karena komunikasi nirkabel generasi kelima ini menjanjikan tiga kapabilitas utama: *enhanced Mobile Broadband* (eMBB), *Massive Machine-Type Communications* (mMTC), dan *Ultra-Reliable Low-Latency Communications* (URLLC). Ketiga kapabilitas ini krusial untuk mendukung transmisi submodel AAS yang berukuran besar dengan latensi rendah dalam ekosistem CPPS.

Sementara itu, De Marchi, Rojas, dan Mark (2022) menyoroti bahwa pada sistem transfer perakitan siber-fisik—di mana benda kerja bergerak secara fisik melalui beberapa stasiun perakitan dengan lintasan yang dapat direkonfigurasi—digital twin harus mampu merepresentasikan tidak hanya status kinematik dan dinamik, tetapi juga topologi sistem, status koneksi komunikasi, dan kualitas layanan (QoS) jaringan komunikasi yang digunakan. Kedua makalah ini secara konvergen menunjukkan bahwa integrasi AAS dengan jaringan 5G bukan sekadar pilihan teknis melainkan kebutuhan strategis untuk mencapai interoperabilitas *plug-and-produce* sesuai dengan visi Industri 4.0.

Urgensi ekonomi dari adopsi AAS semakin nyata ketika industri Eropa menghadapi *skills shortage* dan kebutuhan akan *mass customization*. Dengan AAS, satu operator di lokasi terpencil dapat memantau dan mengendalikan beberapa lini produksi yang tersebar secara geografis, sehingga *total cost of ownership* (TCO) aset dapat diturunkan secara signifikan sepanjang siklus hidupnya.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi Tiga Dimensi Digital Twin

Digital twin yang berstandar AAS mengikuti model tiga dimensi Grieves yang telah diperluas oleh Tao et al. (2022) menjadi *five-dimension digital twin* (5D-DT):实体物理空间 (fisik), 虚拟虚拟空间 (virtual), 服务服务 (services), 孪生数据 (DT data), dan 连接连接 (connection). Formulasi state-space untuk entitas fisik dan entitas virtual dapat dituliskan:

$$
\mathbf{x}_p(t+1) = f_p\left(\mathbf{x}_p(t), \mathbf{u}_p(t), \mathbf{w}_p(t)\right)
$$

$$
\mathbf{x}_v(t+1) = f_v\left(\mathbf{x}_v(t), \mathbf{u}_v(t), \mathbf{w}_v(t)\right)
$$

di mana $\mathbf{x}_p, \mathbf{x}_v \in \mathbb{R}^n$ masing-masing adalah vektor state fisik dan virtual, $\mathbf{u}_p, \mathbf{u}_v$ adalah vektor input kontrol, $\mathbf{w}_p, \mathbf{w}_v$ adalah gangguan stokastik, dan $f_p, f_v$ adalah fungsi transisi nonlinier. Sinkronisasi antara kedua entitas tersebut menghasilkan *error residu*:

$$
e_{sync}(t) = \left\| \mathbf{x}_p(t) - \mathbf{x}_v(t) \right\|_2 = \sqrt{\sum_{i=1}^{n}\left(x_{p,i}(t) - x_{v,i}(t)\right)^2}
$$

yang harus dipertahankan di bawah ambang batas $\varepsilon_{sync}$ untuk menjamin integritas digital twin.

### 2.2 Anggaran Latensi 5G URLLC untuk Transmisi Submodel AAS

Keperluan URLLC untuk otomasi industri didefinisikan sebagai one-way latency end-to-end ≤ 1 ms dengan keandalan transmisi 1 − 10⁻⁵ untuk paket 32-byte. Anggaran latensi total $L_{total}$ dapat didekomposisi:

$$
L_{total} = L_{tx} + L_{prop} + L_{proc} + L_{queue} + L_{harq}
$$

di mana:
- $L_{tx}$ = latensi transmisi radio
- $L_{prop}$ = latensi propagasi ≈ $\dfrac{d \cdot n_{ref}}{c}$ dengan $d$ jarak, $n_{ref}$ indeks bias, $c$ kecepatan cahaya
- $L_{proc}$ = latensi pemrosesan baseband
- $L_{queue}$ = latensi antrian di NodeB/Edge
- $L_{harq}$ = latensi retransmisi Hybrid ARQ

Dengan model antrian M/M/1 sederhana untuk latensi antrian:

$$
L_{queue} = \frac{\rho}{\mu(1-\rho)} = \frac{\lambda}{\mu(\mu-\lambda)}
$$

di mana $\lambda$ adalah laju kedatangan paket (paket/s) dan $\mu$ adalah laju servis, dengan utilisasi server $\rho = \lambda/\mu < 1$.

### 2.3 Probabilitas Packet Error Rate (PER) untuk Keandalan AAS

Untuk paket transmisi dengan bit error rate (BER) $p_b$ dan panjang paket $L_p$ bit:

$$
PER = 1 - (1 - p_b)^{L_p}
$$

Dengan modulasi QPSK pada SNR $\gamma$ tertentu, $p_b \approx Q\left(\sqrt{2\gamma}\right)$. Untuk paket kontrol AAS sepanjang $L_p = 256$ bit dengan target $PER \leq 10^{-5}$:

$$
Q\left(\sqrt{2\gamma}\right) \leq \frac{10^{-5}}{256} \approx 3.91 \times 10^{-8}
$$

yang menghasilkan SNR minimum $\gamma_{min} \approx 11.3$ dB (asumsi coding gain dari 5G LDPC sebesar 3 dB).

### 2.4 Throughput Submodel AAS

Throughput efektif untuk sinkronisasi AAS dengan ukuran submodel $S_{AAS}$ byte dan frekuensi pembaruan $f_{sync}$ Hz:

$$
\Theta = S_{AAS} \cdot f_{sync} \cdot N_{aset} \quad \text{[B/s]}
$$

dengan $N_{aset}$ jumlah aset yang disinkronkan secara bersamaan. Untuk 50 aset dengan submodel rata-rata 8 KB yang diperbarui pada 10 Hz:

$$
\Theta = 8192 \cdot 10 \cdot 50 = 4{,}096{,}000 \text{ B/s} \approx 4.1 \text{ MB/s}
$$

yang berada dalam kapasitas eMBB 5G dengan mudah.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Cavalieri et al. (2024) mengusulkan metodologi tujuh tahap untuk implementasi AAS Digital Twin yang terintegrasi dengan 5G:

**Tahap 1 — Identifikasi Aset dan Pemodelan Submodel.** Setiap aset fisik (sensor, aktuator, robot, lini produksi) diidentifikasi dan didekomposisi menjadi submodel sesuai template standar (misalnya *Nameplate*, *Identification*, *Capability*, *OperationalData*). Submodel disimpan dalam format AASX (file paket OPC UA) yang memanfaatkan standar IEC 62541.

**Tahap 2 — Provisioning Infrastruktur 5G Privat.** Implementasi *private 5G network* di pita frekuensi n77 (3.3–4.2 GHz) atau n78 (3.3–3.8 GHz) dengan *gNodeB* yang memiliki cakupan indoor/outdoor. Standar 3GPP Release 16/17 mendukung *Time-Sensitive Networking* (TSN) yang menjamin determinisme untuk lalu lintas URLLC.

**Tahap 3 — Registrasi AAS dalam Networked AAS Infrastructure.** Setiap AAS didaftarkan dalam *AAS Registry* berbasis *Distributed Hash Table* (DHT), memungkinkan lookup desentralisasi. De Marchi et al. (2022) menekankan bahwa pada sistem transfer perakitan siber-fisik, AAS Registry harus mendukung pencarian berbasis topologi dan status koneksi.

**Tahap 4 — Pemetaan Aset ke Endpoint Komunikasi.** Setiap AAS dikaitkan dengan *5G UE identifier* (IP address + IMSI/IMEI) yang memungkinkan routing paket deterministik melalui *User Plane Function* (UPF) lokal di edge cloud.

**Tahap 5 — Implementasi Prosedur Administrasi.** Cavalieri et al. (2024) memperkenalkan tiga prosedur administrasi formal:
1. *Provisioning Procedure* — penciptaan instance AAS baru
2. *Update Procedure* — pembaruan submodel secara atomik
3. *Deprovisioning Procedure* — penghentian AAS

**Tahap 6 — Sinkronisasi Berkelanjutan dengan Edge Computing.** Edge server menjalankan *twin orchestrator* yang bertanggung jawab untuk menjaga sinkronisasi state antara aset fisik dan representasi virtualnya, dengan mekanisme *event-driven update* dan *time-driven snapshot*.

**Tahap 7 — Monitoring QoS dan Self-Healing.** Continuous monitoring terhadap latensi, jitter, packet loss, dan error sinkronisasi $e_{sync}$. Jika $e_{sync} > \varepsilon_{sync}$, sistem secara otomatis melakukan re-sinkronisasi atau switchover ke jalur komunikasi cadangan.

Diagram alur logika untuk prosedur sinkronisasi AAS-5G mengikuti pola:

```
[Aset Fisik] --(sensor sampling @ f_s)--> [Edge Gateway]
                                            |
                                            v
[5G gNodeB] <-- URLLC/uRLLC hybrid --> [Edge Twin Orchestrator]
                                            |
                                            v
                                    [Update AAS Submodel]
                                            |
                                  e_sync > ε_sync ? ----YES----> [Re-sync Trigger]
                                            |                          |
                                            NO                         v
                                            |                   [Fallback to TSN]
                                            v
                                    [AAS Registry Broadcast]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Lini Perakitan Modul Baterai Kendaraan Listrik

Kita tinjau lini perakitan siber-fisik yang terdiri dari:
- 12 robot FANUC M-20iA di 6 stasiun kerja
- 36 sensor (vibrasi, suhu, arus) pada setiap robot
- 4 Automated Guided Vehicle (AGV) yang memindahkan modul baterai
- 1 unit AAS server di edge cloud dengan 5G privat

**Parameter masukan industri:**

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Jumlah aset | $N_{aset}$ | 52 | unit |
| Ukuran submodel rata-rata | $S_{AAS}$ | 8.192 | KB |
| Frekuensi sinkronisasi | $f_{sync}$ | 10 | Hz |
| Frekuensi sampling sensor | $f_s$ | 1000 | Hz |
| Laju kedatangan paket kontrol | $\lambda$ | 8000 | pkt/s |
| Laju servis edge server | $\mu$ | 12000 | pkt/s |
| Panjang paket | $L_p$ | 256 | bit |
| SNR rata-rata link | $\gamma$ | 15 | dB |
| Target PER | $PER_{target}$ | 10⁻⁵ | – |

**Langkah kalkulasi:**

**Langkah 1 — Throughput agregat sinkronisasi AAS:**

$$
\Theta = 8192 \cdot 10 \cdot 52 = 4{,}259{,}840 \text{ B/s} \approx 33.4 \text{ Mbps}
$$

**Langkah 2 — Latensi antrian (M/M/1):**

$$
\rho = \frac{8000}{12000} = 0.667
$$

$$
L_{queue} = \frac{0.667}{12000(1-0.667)} = \frac{0.667}{3996} \approx 1.67 \times 10^{-4} \text{ s} = 167 \text{ μs}
$$

**Langkah 3 — Latensi transmisi radio (asumsi 14 simbol OFDM, 30 kHz subcarrier spacing, mini-slot):**

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
