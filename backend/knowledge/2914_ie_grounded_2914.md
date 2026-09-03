# 2914 — Digital Twin Industri Berbasis Asset Administration Shell untuk Komunikasi 5G dan Sistem Transfer Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 menghadapi tantangan struktural berupa fragmentasi data aset fisik di lantai pabrik. Cavalieri, Di Natale, dan Gambadoro (2024) — selanjutnya disebut *Cavalieri et al.* — dalam artikel "Asset Administration Shell Digital Twin of 5G Communication System" (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti bahwa lebih dari 70% aset produksi di fasilitas manufaktur Eropa belum memiliki representasi digital yang interoperabel, sehingga menghambat integrasi horizontal maupun vertikal sepanjang *value chain*. Asset Administration Shell (AAS), yang distandarisasi melalui **IEC 63278 / PAS 1.0** dan **DIN SPEC 91345**, muncul sebagai kerangka referensi untuk menyatukan deskripsi aset fisik menjadi *digital twin* yang dapat dibaca mesin (*machine-readable*) dan ditransmisikan melalui jaringan nirkabel privat 5G.

Sementara itu, De Marchi, Rojas, dan Mark (2022) — selanjutnya *De Marchi et al.* — dalam artikel "Digital Twin Architecture of a Cyber-physical Assembly Transfer System" (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa arsitektur *cyber-physical* pada sistem transfer perakitan membutuhkan tiga lapisan: lapisan fisik (*physical layer*), lapisan komunikasi (*communication layer*), dan lapisan *digital twin*. Kedua literatur ini bertemu pada satu titik kritis: kualitas layanan komunikasi nirkabel — khususnya 5G *Ultra-Reliable Low-Latency Communication* (URLLC) — merupakan *enabler* sekaligus *bottleneck* bagi fidelitas digital twin industri.

Urgensi ekonomi penelitian ini tecermin dari data IDC (2023) bahwa downtime tak terencana di pabrik manufaktur bernilai rata-rata USD 50.000 per jam, dan 60%-nya bersumber dari ketidaksinkronan antara kondisi fisik aset dengan sistem *Manufacturing Execution System* (MES). Oleh karena itu, integrasi AAS-5G tidak lagi bersifat opsional melainkan prasyarat daya saerik. Konteks operasional yang diangkat *Cavalieri et al.* adalah plant pintar berbasis 5G Non-Public Network (NPN), di mana sensor dan aktuator pada lini produksi berkomunikasi dengan server *digital twin* melalui *gNodeB* privat dengan latensi target 1–5 ms, *reliability* 99,999%, dan *jitter* di bawah 0,5 ms.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Representasi Aset: Submodel AAS

Menurut *Cavalieri et al.* (2024), satu instas AAS direpresentasikan sebagai himpunan terstruktur dari *submodels* yang masing-masing merepresentasikan aspek unik aset. Secara matematis:

$$
A = \{ S_1, S_2, \ldots, S_n \}, \quad \text{dengan } S_i = (P_i, R_i, C_i)
$$

di mana $P_i$ adalah himpunan *Property* (atribut skalar/vektor), $R_i$ adalah himpunan *Reference* (tautan ke submodel lain), dan $C_i$ adalah himpunan *Capability* (operasi/fungsi yang dapat dipanggil). Untuk komunikasi 5G, $C_i$ paling tidak memuat fungsi $\texttt{readSensorData()}$ dan $\texttt{writeActuatorCommand()}$.

### 2.2 Model Latensi End-to-End 5G URLLC

Latensi total komunikasi antara sensor aset dan server *digital twin* didekomposisi menjadi empat komponen utama (model 3GPP TR 38.913):

$$
L_{total} = L_{UE} + L_{radio} + L_{transport} + L_{core}
$$

dengan:
- $L_{UE}$: latensi pemrosaran *User Equipment* (sensor/aktuator), tipikal 0,5–1 ms
- $L_{radio}$: latensi akses radio (*scheduling delay* + *HARQ round-trip*), tipikal 0,5–2 ms untuk URLLC
- $L_{transport}$: latensi *backhaul* 5G NPN, tipikal 0,2–1 ms pada fiber privat
- $L_{core}$: latensi 5GC (5G Core), tipikal 1–3 ms pada *User Plane Function* (UPF) lokal

Untuk aplikasi industri dengan kontrol gerak tertutup, diperlukan:

$$
L_{total} \leq L_{critical} = 5 \text{ ms}, \quad P(L_{total} > L_{critical}) \leq 10^{-5}
$$

yang merupakan jaminan URLLC sesuai *Service Level Specification* (SLS).

### 2.3 Sinkronisasi Digital Twin

*De Marchi et al.* (2022) memperkenalkan *event-driven* dan *time-driven* sinkronisasi. Kecepatan refresh *digital twin* mengikuti aturan:

$$
f_{update} = \max\left(f_{event},\ \frac{1}{\Delta t_{sample}}\right)
$$

di mana $f_{event}$ adalah frekuensi pembaruan berbasis *trigger* peristiwa (misal alarm sensor) dan $\Delta t_{sample}$ adalah periode sampling periodik. *Time lag* antara status fisik dan representasi digital didefinisikan:

$$
\Delta t_{lag}(t) = t - t_{sync}(t)
$$

dengan $t_{sync}(t)$ adalah *timestamp* terakhir yang telah disinkronkan ke server. Untuk kendali mutu, kita memerlukan rata-rata lag:

$$
\overline{\Delta t_{lag}} = \frac{1}{N} \sum_{k=1}^{N} \left(t_k - t_{sync,k}\right)
$$

### 2.4 Throughput Sistem Transfer Perakitan

*De Marchi et al.* (2022) mendefinisikan *cycle time* sistem transfer perakitan cyber-fisik sebagai:

$$
T_{cycle} = T_{process} + T_{transfer} + T_{queue} + T_{sync}
$$

di mana $T_{sync}$ adalah waktu tunggu sinkronisasi digital twin sebelum status dikonfirmasi ke MES. *Overall Equipment Effectiveness* (OEE) sistem:

$$
OEE = A \times P \times Q
$$

dengan $A$ = *Availability*, $P$ = *Performance*, $Q$ = *Quality*, masing-masing bernilai 0–1.

### 2.5 Model Keandalan Jaringan

Probabilitas keberhasilan transmisi paket dalam interval waktu $T$ mengikuti distribusi eksponensial untuk *failure rate* konstan $\lambda$:

$$
R(t) = e^{-\lambda t}, \quad \text{MTBF} = \frac{1}{\lambda}
$$

Ketersediaan komunikasi (*network availability*) untuk periode misi $T$ adalah:

$$
A_{net} = \frac{T - \sum_{i} t_{down,i}}{T} = 1 - \sum_{i} \frac{t_{down,i}}{T}
$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan integrasi kedua paper, prosedur operasional standar (*Standard Operating Procedure*) implementasi *AAS-based Digital Twin* dengan komunikasi 5G diuraikan sebagai berikut:

### Langkah 1 — Inventarisasi dan Klasifikasi Aset
Lakukan *asset inventory* menggunakan templat AAS-XML atau AAS-JSON. Setiap aset diberi **globalAssetId** (mengikuti ISO 23247) dan diklasifikasikan ke dalam *type* (misal *ManufacturingAssetClass*).

### Langkah 2 — Desain Arsitektur Berlapis
Mengikuti *De Marchi et al.* (2022), arsitektur memiliki 4 lapisan:

1. **Lapisan 0 — Physical Asset**: sensor (vibrasi, suhu, encoder), aktuator, PLC.
2. **Lapisan 1 — Edge Connectivity**: *Industrial 5G Modem* (misal Qualcomm Snapdragon X65) terhubung ke *gNodeB* privat pada frekuensi 3,4–3,8 GHz (n78) atau mmWave n257.
4. **Lapisan 2 — Network Slice**: *URLLC slice* dengan QoS Flow Identifier (QFI) khusus untuk kontrol kritis.
5. **Lapisan 3 — Digital Twin Server**: instas AAS yang di-*deploy* pada *on-premise* Kubernetes cluster dengan *BaSyx* middleware (direkomendasikan oleh *Cavalieri et al.*).

### Langkah 3 — Pemodelan Submodel AAS
Buat submodel minimal: `Identification`, `OperationalData`, `CapabilityDescription`, dan `CommunicationInterface`. Submodel `CommunicationInterface` wajib menyimpan parameter 5G: *AMBR*, *QFI*, dan *S-NSSAI*.

### Langkah 4 — Validasi Latensi dan *Reliability*
Lakukan *drive test* dan *stress test* pada slice URLLC untuk memverifikasi $L_{total} \leq 5$ ms dan packet loss rate $\leq 10^{-5}$.

### Langkah 5 — Integrasi dengan MES/ERP
Ekspos endpoint AAS melalui *REST API* (HTTP/2) atau *OPC UA over 5G* sesuai OPC UA Part 100/101 untuk interoperabilitas dengan MES seperti Siemens Opcenter atau SAP DMC.

### Langkah 6 — Pemantauan Berkelanjutan dan Pemutakhiran
Tetapkan *digital thread*: setiap perubahan parameter fisik memicu *event* AAS dan *versioning* submodel untuk *traceability* penuh.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Lini Transfer Perakitan *Automotive Part* Berbasis 5G NPN

Misalkan sebuah lini perakitan komponen transmisi otomatis dengan konfigurasi berikut:

**Tabel 1. Parameter Operasional Lini**

| Parameter | Simbol | Nilai |
|---|---|---|
| Waktu proses per unit | $T_{process}$ | 24,0 s |
| Waktu transfer antar-stasiun | $T_{transfer}$ | 6,5 s |
| Jumlah antrian rata-rata | $T_{queue}$ | 3,2 s |
| Sampling rate sensor | $f_{sample}$ | 100 Hz |
| Latensi UE | $L_{UE}$ | 0,8 ms |
| Latensi radio | $L_{radio}$ | 1,2 ms |
| Latensi transport | $L_{transport}$ | 0,4 ms |
| Latensi core | $L_{core}$ | 1,6 ms |

#### Perhitungan 4.1 — Latensi Total End-to-End

$$
L_{total} = 0{,}8 + 1{,}2 + 0{,}4 + 1{,}6 = 4{,}0 \text{ ms}
$$

Karena $L_{total} = 4{,}0 \text{ ms} \leq 5{,}0 \text{ ms}$, syarat URLLC terpenuhi. ✅

#### Perhitungan 4.2 — Frekuensi Pembaruan *Digital Twin*

Sampling periodik:
$$
\Delta t_{sample} = \frac{1}{100} = 10 \text{ ms}
$$

Jika terdeteksi *event* alarm setiap 250 ms, maka:
$$
f_{event} = 4 \text{ Hz}, \quad \text{sedangkan} \quad \frac{1}{\Delta t_{sample}} = 100 \text{ Hz}
$$

Oleh karena itu:
$$
f_{update} = \max(4, 100) = 100 \text{ Hz}
$$

#### Perhitungan 4.3 — *Time Lag* Rata-rata (untuk 1.000 sampel dengan jitter ±0,5 ms)

Asumsikan distribusi lag uniform pada interval $[3{,}5; 4{,}5]$ ms:

$$
\overline{\Delta t_{lag}} = \frac{3{,}5 + 4{,}5}{2} = 4{,}0 \text{ ms}
$$

#### Perhitungan 4.4 — Cycle Time dengan Kom