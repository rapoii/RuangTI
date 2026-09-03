# 1810 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan telekomunikasi memasuki fase kritis di mana konvergensi antara *cyber-physical systems* (CPS), Internet of Things (IoT), dan jaringan komunikasi generasi kelima (5G) menjadi pilar utama Revolusi Industri 4.0. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *"Asset Administration Shell Digital Twin of 5G Communication System"* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi pengembangan representasi digital yang terstandarisasi untuk infrastruktur telekomunikasi 5G. Latar belakang industri menunjukkan bahwa operator jaringan menghadapi tantangan eksponensial dalam mengelola ribuan *gNodeB*, *small cells*, dan elemen jaringan *edge* dengan heterogenitas vendor yang tinggi, sehingga pendekatan inventaris statis sudah tidak lagi memadai.

Dalam konteks ini, **Asset Administration Shell (AAS)** yang dikembangkan oleh Plattform Industrie 4.0 muncul sebagai kerangka kerja referensi untuk mendeskripsikan aset industri secara digital melalui *submodels* yang terstruktur. AAS menyediakan interoperabilitas semantik lintas-domain, sebuah kebutuhan vital ketika jaringan 5G harus diintegrasikan dengan lini produksi pintar. Studi terdahulu oleh De Marchi, Rojas, dan Mark (2022) dengan judul *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) telah memvalidasi efektivitas arsitektur digital twin untuk sistem transfer perakitan, namun belum menyentuh domain telekomunikasi. Gap riset inilah yang coba dijembatani oleh Cavalieri dkk. (2024) melalui generalisasi AAS ke ranah 5G.

Secara ekonomis, pasar digital twin global diproyeksikan mencapai USD 155,84 miliar pada 2030 (CAGR >38%), dengan sektor telekomunikasi menyumbang kontribusi signifikan. Kegagalan dalam mengelola kualitas layanan (QoS) 5G—seperti *latency* ultra-rendah (<1 ms untuk URLLC) dan *throughput* tinggi (hingga 10 Gbps)—berdampak langsung pada produktivitas lantai pabrik. Oleh karena itu, integrasi AAS dengan arsitektur jaringan 5G bukan sekadar kebutuhan teknologi, melainkan imperatif strategis untuk memastikan *zero-touch network management* dan *predictive maintenance* aset telekomunikasi dalam ekosistem manufaktur cerdas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Asset Administration Shell

AAS dimodelkan sebagai struktur metadata berlapis yang direpresentasikan dalam format JSON atau XML sesuai spesifikasi *Details of the Asset Administration Shell* (berdasarkan IEC/PAS 63278). Secara matematis, sebuah instance AAS dapat diformulasikan sebagai tupel:

$$AAS_i = \langle ID_i, M_{global}, \{S_j\}_{j=1}^{n}, R_{access} \rangle$$

di mana $ID_i$ merupakan *globally unique identifier*, $M_{global}$ adalah metadata global, $S_j$ adalah himpunan *submodels*, dan $R_{access}$ mendefinisikan protokol akses (HTTP, MQTT, OPC UA).

### 2.2 Model Propagasi Sinyal 5G

Kualitas transmisi 5G dalam lingkup digital twin dievaluasi melalui model propagasi *path loss* logaritmik (COST 231 Hata model):

$$L_{path}(d) = 46.3 + 33.9 \log_{10}(f_c) - 13.82 \log_{10}(h_{bs}) - a(h_{ms}) + \left[44.9 - 6.55 \log_{10}(h_{bs})\right] \log_{10}(d) + C$$

dengan parameter: $f_c$ (MHz) = frekuensi pembawa, $h_{bs}$ (m) = tinggi *base station*, $h_{ms}$ (m) = tinggi *mobile station*, $d$ (km) = jarak, dan $C$ = konstanta koreksi (0 untuk suburban, 3 untuk urban).

### 2.3 Kapasitas Kanal Shannon

*Throughput* teoritis kanal 5G mengikuti persamaan Shannon-Hartley:

$$C_{shannon} = B \cdot \log_2\left(1 + \frac{S}{N}\right) \quad \text{[bps]}$$

dengan $B$ (Hz) = bandwidth kanal, $S/N$ = *signal-to-noise ratio*. Untuk agregasi pembawa 5G NR (FR1) pada $f_c = 3.5$ GHz dengan bandwidth 100 MHz, kapasitas puncak menjadi:

$$C_{peak} = \alpha_{eff} \cdot B \cdot \log_2\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 \cdot B \cdot L_{path}}\right)$$

di mana $\alpha_{eff}$ = efisiensi spektral (~6.67 bps/Hz untuk 256-QAM).

### 2.4 Latensi End-to-End URLLC

Untuk skenario *Ultra-Reliable Low-Latency Communication*, latensi total:

$$L_{total} = L_{proc} + L_{queue} + L_{tx} + L_{prop} + L_{retrans}$$

Target $L_{total} < 1$ ms untuk URLLC mensyaratkan optimalisasi seluruh komponen, yang hanya dapat dicapai melalui kontrol real-time berbasis digital twin.

### 2.5 Model Throughput Sistem Transfer Perakitan

Mengacu pada De Marchi dkk. (2022), untuk lini transfer perakitan dengan $m$ stasiun kerja seri, *throughput* sistem dibatasi oleh stasiun dengan *cycle time* maksimum:

$$TP_{system} = \min_{k=1}^{m}\left(\frac{1}{CT_k}\right) \quad \text{[unit/menit]}$$

di mana $CT_k = t_{process,k} + t_{transfer,k} + t_{wait,k}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Cavalieri dkk. (2024) mengusulkan metodologi enam tahap untuk membangun AAS-based digital twin 5G:

**Tahap 1 — Identifikasi Aset Telekomunikasi:** Inventarisasi seluruh elemen jaringan 5G (gNodeB, AMF, SMF, UPF, CU/DU) dengan atribusi *Industrial Automation Identifier* (IRI) berbasis *domain* dan *specific identifier* sesuai DIN SPEC 91406.

**Tahap 2 — Pemodelan Submodel AAS:** Setiap aspek aset dideskripsikan melalui *submodels* spesifik, antara lain:
- *Submodel CommunicationProperties* (bandwidth, latency, jitter)
- *Submodel NetworkTopology* (graf konektivitas)
- *Submodel OperationalData* (KPI real-time: RSRP, SINR, throughput)
- *Submodel PredictiveMaintenance* (estimasi RUL menggunakan Weibull distribution)

**Tahap 3 — Akuisisi Data via Industrialkonektivitas:** Sensor data diekstrak melalui protokol OPC UA Pub/Sub atau MQTT-SN dengan *topic structure* bertingkat `5G/{site}/{cell}/{ue_id}`.

**Tahap 4 — Implementasi Digital Twin Engine:** Menggunakan *state synchronization* dengan persamaan update:

$$x_{k+1} = f(x_k, u_k) + w_k$$
$$y_k = h(x_k, u_k) + v_k$$

di mana $x_k$ = *state vector* jaringan, $u_k$ = *control input*, dan $w_k, v_k$ = noise proses/pengukuran (White Gaussian).

**Tahap 5 — Validasi & Sinkronisasi:** Dua arah sinkronisasi: *shadow mode* (digital twin pasif) dan *active control* (digital twin melakukan *closed-loop optimization*).

**Tahap 6 — Integrasi dengan Lini Produksi (Berbasis De Marchi dkk., 2022):** Menghubungkan AAS 5G dengan digital twin sistem transfer perakitan melalui *shared data bus* menggunakan *Service-Oriented Architecture* (SOA).

Diagram alir proses lengkap disajikan secara tekstual sebagai berikut:

```
[Identifikasi Aset 5G] → [Pemodelan Submodel AAS] → [Akuisisi Data Sensor]
        ↓                                                          ↓
[Identifikasi IRI]                                      [OPC UA / MQTT]
        ↓                                                          ↓
[Deployment Registry AAS] ← [Konfigurasi Submodel] ← [Validasi Skema JSON]
        ↓
[Digital Twin Engine] → [Sinkronisasi State] → [Predictive Analytics]
        ↓
[Integrasi Lini Produksi] → [Closed-Loop Control] → [Dashboard KPI]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik Pintar dengan Private 5G Network

**Parameter Input:**
- Frekuensi pembawa: $f_c = 3500$ MHz
- Tinggi base station: $h_{bs} = 30$ m
- Tinggi mobile station (AGV): $h_{ms} = 1.5$ m  
- Bandwidth agregat: $B = 100$ MHz
- Daya transmisi: $P_t = 40$ dBm (10 W)
- Gain antena: $G_t = G_r = 18$ dBi
- Noise floor: $N_0 = -174$ dBm/Hz
- Jarak AGV ke gNodeB: $d = 0.3$ km (300 m)
- Lingkungan: Urban (C = 3)
- Jumlah lini perakitan: $m = 5$ stasiun

### 4.2 Perhitungan Step-by-Step

**Langkah 1 — Hitung Path Loss (COST 231 Hata):**

Faktor koreksi移动站:
$$a(h_{ms}) = 3.20 \cdot \left(\log_{10}(11.75 \cdot 1.5)\right)^2 - 4.97 = 0.04 \text{ dB}$$

Substitusi ke persamaan path loss:
$$L_{path} = 46.3 + 33.9 \cdot \log_{10}(3500) - 13.82 \cdot \log_{10}(30) - 0.04 + [44.9 - 6.55 \cdot \log_{10}(30)] \cdot \log_{10}(0.3) + 3$$

$$= 46.3 + 124.5 - 21.0 - 0.04 + [44.9 - 11.0] \cdot (-0.523) + 3$$

$$= 149.76 + 33.9 \cdot (-0.523) + 3 = 149.76 - 17.73 + 3 = 135.03 \text{ dB}$$

**Langkah 2 — Hitung SNR pada penerima:**

Daya terima (Friis transmission equation):
$$P_r = P_t + G_t + G_r - L_{path} = 40 + 18 + 18 - 135.03 = -58.93 \text{ dBm}$$

Noise power:
$$N = N_0 + 10\log_{10}(B) = -174 + 10\log_{10}(100 \times 10^6) = -94 \text{ dBm}$$

SNR:
$$\frac{S}{N