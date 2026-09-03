# 1666 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dalam ekosistem manufaktur modern menuntut interoperabilitas horizontal dan vertikal antara berbagai *cyber-physical production systems* (CPPS). Salah satu pilar fundamental yang dikembangkan oleh *Plattform Industrie 4.0* Jerman adalah konsep **Asset Administration Shell (AAS)** — sebuah representasi digital terstandarisasi dari aset fisik yang berfungsi sebagai *digital twin* sepanjang siklus hidup aset tersebut. Dalam konteks jaringan komunikasi industri, implementasi AAS untuk sistem 5G menjadi sangat krusial karena karakteristik 5G yang menawarkan *enhanced Mobile Broadband* (eMBB), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC) membuka peluang baru bagi otomatisasi pabrik.

Cavalieri, Di Natale, dan Gambadoro (2024) dalam tulisannya yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi pengembangan *digital twin* berbasis AAS untuk infrastruktur komunikasi 5G yang menjadi tulang punggung sistem manufaktur terdistribusi. Urgensi ini muncul dari tiga tantangan operasional utama: (1) kompleksitas pengelolaan *gNodeB*, *User Equipment* (UE), dan *network slicing* yang bersifat heterogen; (2) kebutuhan akan *real-time monitoring* terhadap *Quality of Service* (QoS) jaringan; serta (3) integrasi antara domain IT (Information Technology) dan OT (Operational Technology) dalam satu arsitektur referensi yang kohesif.

Secara ekonomi, adopsi 5G dalam manufaktur diproyeksikan memberikan produktivitas tambahan hingga 20–35% melalui pengurangan *downtime* dan peningkatan fleksibilitas lini produksi. Namun, tanpa representasi digital yang terstandarisasi, manfaat ini sulit direalisasikan secara optimal. Pendekatan AAS memungkinkan setiap elemen jaringan — mulai dari antena, *base station*, hingga *network slice* — memiliki *digital passport* yang dapat diakses lintas *value chain*.

Studi pendukung dari De Marchi, Rojas, dan Mark (2022) yang berjudul *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) turut memberikan landasan arsitektural bagaimana *digital twin* dirancang dalam sistem *assembly transfer* fisik-sibernetik. Temuan mereka menunjukkan bahwa modularisasi submodel dalam AAS — yang mereka sebut *Submodel Element Collection* — secara signifikan meningkatkan fleksibilitas integrasi dengan sistem kendali terdistribusi. Sinergi antara kedua literatur ini menunjukkan bahwa arsitektur AAS untuk 5G bukan sekadar perluasan teknologi informasi, melainkan kebutuhan strategis untuk menjaga keberlanjutan operasional (*operational continuity*) dalam era *smart manufacturing*.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis AAS untuk sistem komunikasi 5G yang diajukan Cavalieri dkk. (2024) dibangun di atas tiga pilar matematis: model abstraksi aset, formalisasi submodel, dan algoritma sinkronisasi *digital twin*.

### 2.1 Model Abstraksi Aset (Asset Model)

Setiap aset komunikasi 5G direpresentasikan sebagai *tuple* terstruktur:

$$\mathcal{A} = \{ID, M, S, P, R\}$$

Di mana:
- $ID$ = *International Data Space* identifier unik untuk aset
- $M = \{m_1, m_2, ..., m_n\}$ = himpunan *submodels* yang merepresentasikan aspek fungsional (misalnya *radio capability*, *network slicing*, *power consumption*)
- $S$ = *state variable* terkini (operational state)
- $P$ = *property collection* berisi parameter teknis
- $R$ = *relationship* ke aset lain dalam jaringan

### 2.2 Formalisasi Submodel 5G

Untuk submodel representasi kemampuan radio, parameter kritis didefinisikan sebagai berikut:

$$C_{5G} = \{f_c, BW, \text{MIMO}_{rank}, \text{MCS}, P_{tx}, \text{SINR}\}$$

Di mana $f_c$ adalah *carrier frequency*, $BW$ adalah *bandwidth* kanal, $\text{MIMO}_{rank}$ adalah *rank* spatial multiplexing, $\text{MCS}$ adalah *Modulation and Coding Scheme*, $P_{tx}$ adalah daya transmisi, dan $\text{SINR}$ adalah *Signal-to-Interference-plus-Noise Ratio*. Kapasitas kanal Shannon untuk skenario URLLC kemudian dapat dihitung sebagai:

$$C_{shannon} = BW \cdot \log_2(1 + \text{SINR}) \quad \text{[bit/s]}$$

### 2.3 Sinkronisasi Digital Twin

Sinkronisasi antara aset fisik dan representasi AAS-nya mengikuti persamaan *state update*:

$$S_{AAS}(t+1) = S_{AAS}(t) + \alpha \cdot [S_{real}(t) - S_{AAS}(t)] + \epsilon(t)$$

Di mana $\alpha \in [0,1]$ adalah *synchronization learning rate*, $S_{real}(t)$ adalah state aktual aset fisik hasil sensor, dan $\epsilon(t)$ adalah *noise term* yang merepresentasikan latensi dan uncertainty transmisi data. Untuk memenuhi constraint URLLC pada latensi 1 ms, threshold disinkronkan:

$$\Delta t_{sync} \leq 10^{-3} \text{ s}$$

### 2.4 Network Slicing sebagai Submodel

*Network slice* direpresentasikan sebagai submodel dengan parameter:

$$\text{Slice}_i = \{R_i, \text{Lat}_i, \text{Rel}_i, \text{Cov}_i\}$$

Di mana $R_i$ adalah throughput terjamin, $\text{Lat}_i$ adalah latensi maksimum, $\text{Rel}_i$ adalah tingkat reliabilitas (probabilitas packet success), dan $\text{Cov}_i$ adalah coverage area. Indeks kualitas agregat *slice* didefinisikan:

$$Q_{slice} = w_1 \cdot \frac{R_i}{R_{max}} + w_2 \cdot \left(1 - \frac{\text{Lat}_i}{\text{Lat}_{max}}\right) + w_3 \cdot \text{Rel}_i$$

Dengan $w_1 + w_2 + w_3 = 1$ sebagai bobot prioritas aplikasi industri (misalnya kendali robotik mendapat $w_3$ tertinggi).

### 2.5 Algoritma Penjadwalan QoS

Berdasarkan Cavalieri dkk. (2024), penjadwalan lalu lintas 5G untuk aset AAS menggunakan fungsi utilitas:

$$U_{ij} = \beta \cdot \log(1 + \text{SINR}_{ij}) - \gamma \cdot \text{Lat}_{ij}$$

Di mana $\beta$ dan $\gamma$ adalah koefisien trade-off throughput-latensi, dan subscript $ij$ menunjukkan hubungan UE $i$ dengan *gNodeB* $j$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS untuk sistem 5G mengikuti *Standard Operating Procedure* (SOP) delapan tahap yang diturunkan dari kontribusi Cavalieri dkk. (2024) dan diselaraskan dengan arsitektur De Marchi dkk. (2022):

### Tahap 1 — Identifikasi Aset 5G
Katalogisasi seluruh elemen infrastruktur: *gNodeB*, antena MIMO, *edge server*, *network slicing controller*, dan *User Equipment* (sensor, robot, AGV). Setiap aset diberi *unique identifier* (I4.0-compliant ID).

### Tahap 2 — Pemetaan Submodel
Definisikan himpunan submodel $\mathcal{M}$ sesuai standar AAS (IDTA 02001-02015): *Nameplate*, *TechnicalData*, *OperationalData*, *CapabilityDescription*, dan *NetworkSliceConfiguration*.

### Tahap 3 — Penyiapan Infrastruktur Data
Aktifkan protokol komunikasi industri:
- **OPC UA over 5G** untuk transmisi data submodel
- **MQTT 5.0** dengan *Quality of Service Level 1/2*
- **HTTPS/REST** untuk manajemen AAS via *AAS Repository*

### Tahap 4 — Inisialisasi Digital Twin
Unggah *AASX package* (file XML terstandarisasi) ke *AAS Server*. Verifikasi integritas menggunakan hash SHA-256.

### Tahap 5 — Kalibrasi Model
Lakukan sinkronisasi awal dengan $\alpha = 0.5$ selama 1000 epoch pertama, lalu turunkan ke $\alpha = 0.05$ saat *steady-state*.

### Tahap 6 — Orkestrasi Network Slice
Aktifkan *network slice manager* untuk mengalokasikan sumber daya sesuai formula $Q_{slice}$. *Slice* URLLC diprioritaskan untuk kendali kritis, eMBB untuk *video surveillance*, mMTC untuk sensor IoT.

### Tahap 7 — Monitoring Real-Time
Implementasikan dasbor berbasis *AAS Web UI* yang menampilkan drift antara $S_{AAS}(t)$ dan $S_{real}(t)$. Alert threshold: $|\Delta S| > 0.05$ memicu notifikasi.

### Tahap 8 — Pemeliharaan & Iterasi
Lakukan *firmware update* dan *AAS versioning* menggunakan *semantic versioning* (MAJOR.MINOR.PATCH).

Diagram alir logika arsitektur mengikuti pola berlapis (*layered architecture*) De Marchi dkk. (2022):

```
[Lapisan Aset Fisik] → Sensor & Aktuator → [Lapisan Komunikasi 5G]
         ↓                                          ↓
   [Lapisan AAS Digital Twin] ← Sinkronisasi → [Lapisan Aplikasi Industri]
         ↓
   [Lapisan Orkestrasi & Analytics]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik *smart manufacturing* di Hamburg menggunakan satu *gNodeB* 5G untuk melayani 10 robot kolaboratif (cobot) pada lini *assembly transfer* — aplikasi langsung dari arsitektur De Marchi dkk. (2022) yang diperluas dengan *framework* AAS Cavalieri dkk. (2024).

### 4.1 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Carrier frequency $f_c$ | 3.5 | GHz |
| Bandwidth $BW$ | 100 | MHz |
| $\text{MIMO}_{rank}$ | 4 | streams |
| Daya transmisi $P_{tx}$ | 30 | dBm |
| SINR aktual | 18 | dB (≈63.1 linier) |
| Throughput terjamin $R_i$ per slice | 50 | Mbps |
| Latensi maksimum $\text{Lat}_i$ | 5 | ms |
| Reliabilitas $\text{Rel}_i$ | 0.99999 | probabilitas |
| Bobot $w_1, w_2, w_3$ | 0.2, 0.3, 0.5 | – |
| $R_{max}, \text{Lat}_{max}$ | 100, 10 | Mbps, ms |

### 4.2 Perhitungan Kapasitas Shannon

$$C_{shannon} = 100 \times 10^6 \cdot \log_2(1 + 63.1)$$

$$\log_2(64.1) \approx 6.002 \text{ bit/s/Hz}$$

$$C_{shannon} \approx 100 \times 6.002 = 600.2 \text{ Mbps}$$

### 4.3 Perhitungan Indeks Kualitas Slice

$$Q_{slice} = 0.2 \cdot \frac{50}{100} + 0.3 \cdot \left(1 - \frac{5}{10}\right) + 0.5 \cdot 0.99999$$

$$Q_{slice} = 0.2 \cdot 0.5 + 0.3 \cdot 0.5 + 0.5 \cdot 0.99999$$

$$Q_{slice} = 0.10 + 0.15 + 0.50000 = 0.75000$$

### 4.4 Simulasi Sinkronisasi Digital Twin

Misalkan *state* aktual sebuah cobot $S_{real}(t) = 0.92$ (menyatakan tingkat kelancaran gerak) dan $S_{AAS}(t-1) = 0.85$, dengan $\alpha = 0.3$:

$$S_{AAS}(t) = 0.85 + 0.3 \cdot (0.92 - 0.85) = 0.85 + 0.021 = 0.871$$

Setelah 5 iterasi dengan $\alpha = 0.3$ dan $S_{real}$ konstan, $S_{AAS}$ konvergen ke nilai asimtotik. Perhitungan rekursif:

| Iterasi | $S_{AAS}(t)$ | Gap $|S_{real} - S_{AAS}|$ |
|---------|--------------|---------------------------|
| 0 | 0.850 | 0.070 |
| 1 | 0.871 | 0.049 |
| 2 | 0.8857 | 0.0343 |
| 3 | 0.89599