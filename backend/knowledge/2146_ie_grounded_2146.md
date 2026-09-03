# 2146 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G; Arsitektur Digital Twin untuk Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Cavalieri, S., Di Natale, R., & Gambadoro, S. (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** De Marchi, M., Rojas, R., & Mark, B. (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.15899/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur memasuki fase konvergensi antara **sistem siber-fisik (Cyber-Physical Systems/CPS)**, **jaringan komunikasi nirkabel generasi kelima (5G)**, dan **paradigma Digital Twin (DT)**. Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) memposisikan *Asset Administration Shell* (AAS) — yang merupakan elemen inti dari *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang dikembangkan oleh Plattform Industrie 4.0 — sebagai kerangka interoperabilitas standar untuk merepresentasikan aset 5G dalam format digital twin yang dapat dibaca mesin (*machine-readable*) [DOI: 10.5220/0012914200003822]. Urgensi riset ini bersumber dari kebutuhan industri akan komunikasi *Ultra-Reliable Low-Latency Communication* (URLLC) pada lini produksi modern, di mana latency end-to-end dituntut berada di bawah 1 ms dengan tingkat reliabilitas 99,999% (five-nines).

Sementara itu, De Marchi, Rojas, dan Mark (2022) melengkapi lanskap dengan mengusulkan arsitektur digital twin untuk **sistem transfer perakitan siber-fisik**, di mana *workpiece carrier* bergerak di antara workstation secara otomatis, dan setiap elemen fisik memiliki padanan virtual yang mampu mensimulasikan status, lokasi, serta parameter kualitas secara real-time [DOI: 10.5220/0011589900003329]. Kedua paper ini bertemu pada satu titik konvergensi: kebutuhan akan representasi aset industri yang terstandarisasi, dapat diorkestrasi, dan mampu menjadi *single source of truth* lintas silo organisasi.

Secara ekonomis, adopsi AAS-DT diproyeksikan menurunkan *mean time to repair* (MTTR) hingga 30–50% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 5–15 poin persentase melalui prediksi kegagalan (*predictive maintenance*) dan optimasi lini berbasis simulasi. Secara teknis, interoperabilitas menjadi penghalang utama: hingga 2023, lebih dari 60% lini produksi pintar di Uni Eropa masih menggunakan protokol proprietari yang menghambat integrasi *plug-and-produce*. Oleh karena itu, AAS dan arsitektur digital twin yang terstandarisasi bukan lagi pilihan strategis, melainkan prasyarat untuk competitiveness rantai pasok global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Layer AAS (Asset Administration Shell)

AAS distrukturisasi ke dalam empat submodel utama yang direpresentasikan secara formal oleh Cavalieri et al. (2024). Formulasi submodel secara matematis dapat dinyatakan sebagai tuple:

$$AAS = \{S_{asset}, S_{comm}, S_{func}, S_{proc}, S_{security}, S_{op}\}$$

di mana $S_{asset}$ adalah submodel identifikasi aset (ID, serial number, tipe), $S_{comm}$ adalah deskripsi antarmuka komunikasi (OPC UA, MQTT, HTTP), $S_{func}$ adalah himpunan kemampuan fungsional, $S_{proc}$ adalah himpunan prosedur operasional, $S_{security}$ adalah kebijakan keamanan (autentikasi, enkripsi), dan $S_{op}$ adalah *operation mode* (running, idle, fault). Setiap submodel direpresentasikan dalam format JSON/XML sesuai spesifikasi IEC PAS 63278.

### 2.2 Formulasi Latency End-to-End pada Jaringan 5G Industri

Untuk sistem transfer perakitan siber-fisik yang dilaporkan oleh De Marchi et al. (2022), latency total komunikasi antara sensor di workpiece carrier dan *orchestrator* lini dapat dimodelkan sebagai:

$$L_{total} = L_{proc}^{UE} + L_{queue}^{RAN} + L_{trans}^{gNB} + L_{prop}^{5GC} + L_{app}$$

di mana:
- $L_{proc}^{UE}$ = latency pemrosesan pada *User Equipment* (sensor/aktuator), tipikal 0,05–0,2 ms
- $L_{queue}^{RAN}$ = latency antrian di Radio Access Network, bergantung pada *scheduling policy*
- $L_{trans}^{gNB}$ = latency transmisi di *next-generation Node B* (gNB), tipikal 0,1–0,5 ms pada slot durasi 0,125 ms (subcarrier spacing 120 kHz)
- $L_{prop}^{5GC}$ = latency propagasi pada *5G Core* (UPF ke Application Server), tipikal 1–4 ms
- $L_{app}$ = latency pemrosesan aplikasi DT

Agregat target URLLC: $L_{total} \leq 1$ ms pada *one-way* dengan Packet Error Rate $PER \leq 10^{-5}$.

### 2.3 Kapasitas Kanal dan Throughput

Berdasarkan teorema Shannon-Hartley, kapasitas kanal 5G NR (*New Radio*) untuk lantai pabrik (*indoor factory*) dinyatakan:

$$C = B \cdot \log_2\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 \cdot B \cdot PL(d)}\right) \quad [\text{bit/s}]$$

dengan $B$ adalah bandwidth alokasi (mis. 100 MHz pada FR1 atau 400 MHz pada FR2/mmWave), $P_t$ daya transmisi, $G_t, G_r$ penguatan antena, $N_0$ densitas spektral noise (−174 dBm/Hz), dan $PL(d)$ *path-loss* pada jarak $d$ (model 3GPP TR 38.901 InF-SL: $PL = 36,7\log_{10}(d) + 22,7$ untuk $d$ dalam meter).

### 2.4 Model Buffer dan Little's Law pada Sistem Transfer

Untuk lini transfer perakitan, *work-in-process* (WIP) di antara dua workstation $i$ dan $i+1$遵循 Hukum Little:

$$L_i = \lambda_i \cdot W_i$$

di mana $L_i$ adalah jumlah workpiece rata-rata dalam buffer $i$, $\lambda_i$ adalah laju kedatangan (unit/jam), dan $W_i$ adalah waktu tinggal rata-rata di buffer tersebut. Untuk *closed transfer line* dengan total jumlah workpiece $N$, berlaku:

$$\sum_{i=1}^{n} L_i = N - n_{active}$$

dengan $n_{active}$ jumlah workstation yang sedang aktif memproses. *Throughput* sistem dibatasi oleh *bottleneck station*:

$$\text{TH}_{sistem} = \min_{i=1..n} \left( \frac{1}{t_{cycle,i}} \right)$$

### 2.5 OEE dan Indikator Kinerja Manufaktur

$$OEE = A \cdot P \cdot Q$$

dengan $A$ = *Availability* (= MTBF/(MTBF + MTTR)), $P$ = *Performance* (= (cycle time ideal × jumlah unit) / waktu operasi), dan $Q$ = *Quality* (= unit baik / unit total). Setiap komponen bernilai 0–100%, dan OEE *world-class* berada di atas 85%.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur AAS-DT untuk Jaringan 5G Industri

Berdasarkan Cavalieri et al. (2024), arsitektur yang diusulkan mengikuti pola *layered reference model*:

1. **Lapisan Aset Fisik (Level 0):** *Radio Unit*, *Distributed Unit* (DU), *Centralized Unit* (CU), *User Equipment* sensor, dan aktuator workpiece carrier.
2. **Lapisan Protokol Komunikasi (Level 1):** 5G NR (3GPP Release 16/17), OPC UA over TSN (Time-Sensitive Networking), MQTT 5.0, dan HTTPS/REST untuk integrasi AAS.
3. **Lapisan AAS Submodel (Level 2):** Setiap aset 5G dibungkus dalam *AAS server* yang menyimpan submodel identifikasi, komunikasi, fungsional, prosedur, keamanan, dan operasional dalam format file AASX (XML) atau JSON-AAS.
4. **Lapisan Digital Twin & Analytics (Level 3):** Platform DT yang melakukan *state synchronization*, *simulation*, dan *predictive analytics*.
5. **Lapisan Orkestrasi & Aplikasi (Level 4):** *Manufacturing Execution System* (MES), *Asset Administration Shell Registry*, dan *Dashboard* visualisasi.

### 3.2 SOP Implementasi Berurutan

```
[SOP-AAS-DT-01] Prosedur Implementasi DT AAS untuk Lini Perakitan
─────────────────────────────────────────────────────────────────
Langkah 1 – Asesmen Aset (Day 1–5)
   • Inventarisasi semua aset lini (gNB, sensor, PLC, robot, conveyor)
   • Tetapkan unique ID (URI AAS, e.g. /aas/manufacturer/serial)

Langkah 2 – Pembuatan Submodel (Day 6–20)
   • Buat template submodel sesuai IEC 63278
   • Isi parameter teknis (frekuensi, TX power, latensi target)
   • Verifikasi validitas dengan AASX Package Explorer

Langkah 3 – Deployment AAS Server (Day 21–30)
   • Pilih runtime (BaSyx, Eclipse Ditto, atau SAP AAS)
   • Konfigurasi endpoint HTTPS (default port 8081)
   • Daftarkan di AAS Registry (BaSyx Registry)

Langkah 4 – Integrasi dengan 5G Network (Day 31–45)
   • Konfigurasi QoS Flow Identifier (QFI) untuk URLLC
   • Alokasi Dedicated Radio Bearer dengan GBR (Guaranteed Bit Rate)
   • Uji latency satu arah dan packet loss

Langkah 5 – DT Synchronization (Day 46–60)
   • Implementasi bidirectional MQTT bridge
   • Set update interval: 10 ms untuk status, 100 ms untuk telemetri
   • Aktifkan event-driven push untuk alarm

Langkah 6 – Validasi & Go-Live (Day 61–75)
   • Uji plug-and-produce: hot-swap aset baru harus otomatis terdeteksi
   • Verifikasi OEE ≥ 85% selama 30 hari operasi
   • Dokumentasi HMI dan SOP operator
```

### 3.3 Arsitektur DT Sistem Transfer Perakitan (De Marchi et al., 2022)

De Marchi, Rojas, dan Mark (2022) mengusulkan arsitektur berlapis dengan tiga pilar utama: (i) **Physical Layer** yang terdiri dari conveyor, workstation, dan workpiece carrier dengan sensor RFID/UWB; (ii) **Communication Layer** yang menggunakan OPC UA Pub/Sub dan TSN untuk deterministik; (iii) **Virtual Layer** yang memuat *asset model* dan *behaviour model* dari setiap entitas. Sinkronisasi dilakukan melalui *event bus* dengan pola *publish-subscribe*, sehingga setiap pergerakan workpiece memicu *digital shadow* yang diperbarui secara atomik.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Lini Perakitan Elektronik dengan Private 5G

Sebuah pabrik perakitan PCB (*Printed Circuit Board*) di kawasan industri menerapkan arsitektur AAS-DT dengan spesifikasi sebagai berikut:

**Parameter Input:**
- Panjang lini: $n = 6$ workstation
- Cycle time ideal per workstation: $t_{cycle,i} = \{12, 15, 18, 14, 20, 13\}$ detik
- MTBF rata-rata lini: $\mu_{MTBF} = 720$ jam
- MTTR rata-rata: $\mu_{MTTR} = 4$ jam
- Jumlah workpiece dalam sistem (closed loop):