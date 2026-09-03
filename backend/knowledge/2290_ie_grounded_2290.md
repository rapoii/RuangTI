# 2290 — Asset Administration Shell (AAS) sebagai Digital Twin Sistem Komunikasi 5G dan Sistem Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 menuntut interoperabilitas semantik antara aset fisik dan representasi digitalnya melalui *Asset Administration Shell* (AAS), sebuah standar internasional yang dikembangkan oleh Platform Industrie 4.0 dan diformalkan dalam IEC 63278 (DIN SPEC 91345). Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) mempublikasikan arsitektur *digital twin* berbasis AAS yang secara spesifik merepresentasikan **sistem komunikasi 5G** sebagai aset industri, bukan sekadar infrastruktur telekomunikasi biasa. Pendekatan ini merupakan pergeseran paradigma: jaringan 5G yang sebelumnya diperlakukan sebagai *utility* kini dipandang sebagai *cyber-physical production system* yang membutuhkan dokumentasi, version control, dan traceability.

Urgensi operasional dari riset ini lahir dari kebutuhan *deterministic networking* pada lantai pabrik. Protokol URLLC (*Ultra-Reliable Low-Latency Communication*) dalam 5G menjanjikan latensi satu milisekon dan keandalan 99,999% (five-nines), yang hanya dapat dicapai jika *base station*, *core network*, dan *edge node* dikelola sebagai aset terintegrasi. Studi kasus pada lini perakitan presisi menunjukkan bahwa degradasi latensi rata-rata $L > 10~\text{ms}$ akan menurunkan *OEE* (Overall Equipment Effectiveness) sebesar $\Delta \text{OEE} \approx 4{-}6\%$ akibat *micro-stops* pada protokol EtherCAT dan PROFINET yang berjalan melalui *private 5G campus network* (Cavalieri et al., 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)).

Secara ekonomis, investasi pada AAS untuk jaringan 5G memberikan *Return on Investment* (ROI) yang terukur melalui pengurangan *Mean Time To Recovery* (MTTR). Tanpa digital twin yang terdokumentasi, teknisi membutuhkan waktu rata-rata $T_{\text{MTTR}} \approx 2{,}5~\text{jam}$ per insiden; dengan AAS yang menyediakan *capability description*, *operational data*, dan *fault log* secara terstruktur, MTTR turun menjadi $T'_{\text{MTTR}} \approx 0{,}75~\text{jam}$. Penghematan biaya operasional tahunan untuk satu *production cell* dengan sepuluh base station mencapai estimasi:

$$
\text{Savings} = N_{\text{BS}} \cdot \lambda_{\text{fault}} \cdot (T_{\text{MTTR}} - T'_{\text{MTTR}}) \cdot C_{\text{labour}}
$$

dengan $\lambda_{\text{fault}} \approx 4~\text{fault/bulan}$, $C_{\text{labour}} \approx \text{EUR }85/\text{jam}$, sehingga penghematan tahunan mencapai ~EUR 7.140 per site. Pendekatan ini diperkuat oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang menunjukkan bagaimana arsitektur digital twin pada *cyber-physical assembly transfer system* memerlukan tiga lapis informasi: *asset model*, *process model*, dan *communication model* — kerangka yang kemudian diadopsi Cavalieri et al. untuk jaringan 5G.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Referensi AAS

AAS didefinisikan sebagai representasi digital formal dari suatu aset, terstruktur dalam dua lapis utama: **AAS Metamodel** dan **AAS Instance**. Metamodel mengikuti spesifikasi IEC 63278-1 dan mengikuti struktur pohon (*tree of submodels*). Formulasi identifikasi aset menggunakan *globally unique identifier*:

$$
\text{id}_{\text{AAS}} = (\text{id}_{\text{Asset}}, \text{id}_{\text{AAS\_Shell}}, \text{id}_{\text{Submodel}}_i)
$$

dengan $\text{id}_{\text{Submodel}}_i \in \{ \text{Nameplate}, \text{Capability}, \text{OperationalData}, \text{FaultLog}, \dots \}$.

### 2.2 Model Submodel untuk Jaringan 5G

Untuk merepresentasikan *5G base station* (gNB), Cavalieri et al. (2024) mendefinisikan Submodel **CommunicationCapability** yang berisi properti:

$$
\mathcal{P}_{\text{CommCap}} = \{p_{\text{latency}}, p_{\text{throughput}}, p_{\text{jitter}}, p_{\text{packet\_loss}}, p_{\text{RSRP}}, p_{\text{SINR}}\}
$$

di mana setiap properti $p_i$ merupakan fungsi waktu diskret:

$$
p_i(t) = \mathcal{F}_i\!\left(\text{raw telemetry}(t), \mathbf{w}_i\right)
$$

dengan $\mathbf{w}_i$ adalah vektor kalibrasi sensor. Misalkan *Signal-to-Interference-plus-Noise Ratio* (SINR) dihitung sebagai:

$$
\text{SINR}(t) = \frac{P_{\text{rx}}(t)}{\sum_{k \in \mathcal{K}} P_{\text{interf},k}(t) + N_0 \cdot B}
$$

di mana $P_{\text{rx}}(t)$ adalah daya terima sinyal referensi, $\mathcal{K}$ adalah himpunan sel interferensi, $N_0$ adalah densitas spektral daya noise ($\approx -174~\text{dBm/Hz}$), dan $B$ adalah bandwidth kanal.

### 2.3 Throughput dan *Spectral Efficiency*

Throughput downlink dihitung menggunakan formula Shannon yang dimodifikasi untuk OFDMA 5G NR:

$$
R_{\text{DL}} = \sum_{r=1}^{R} \sum_{s=1}^{S} \eta_{r,s} \cdot B_{r,s} \cdot \log_2\!\left(1 + \text{SINR}_{r,s}\right)
$$

di mana $R$ adalah jumlah *resource block groups*, $S$ adalah jumlah *spatial layers*, $\eta_{r,s} \in [0,1]$ adalah *spectral efficiency factor*, dan $B_{r,s}$ adalah bandwidth per *resource element*.

### 2.4 Model Keandalan dan Fungsi Kerapatan Peluang

Untuk evaluasi keandalan *end-to-end* (E2E) dari jaringan 5G AAS, digunakan *Weibull distribution* untuk *time-to-failure* (TTF):

$$
f(t; k, \lambda) = \frac{k}{\lambda}\left(\frac{t}{\lambda}\right)^{k-1} e^{-(t/\lambda)^k}, \quad t \geq 0
$$

dengan *shape parameter* $k$ dan *scale parameter* $\lambda$. MTBF kemudian dihitung:

$$
\text{MTBF} = \lambda \cdot \Gamma\!\left(1 + \frac{1}{k}\right)
$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma. Parameter ini dimasukkan ke dalam Submodel **ReliabilityMetrics** AAS.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk jaringan 5G mengikuti SOP tujuh tahap yang dikembangkan Cavalieri et al. (2024):

### Tahap 1 — Inventarisasi Aset (*Asset Identification*)
Setiap elemen jaringan 5G di-*tag* dengan *Industrial Asset Identifier* (IRI/IRI). Daftar aset:
- gNB (next-generation Node B)
- AMF/SMF/UPF (Access & Session Management Function, User Plane Function)
- MEC server (*Multi-access Edge Computing*)
- *Industrial endpoints* (PLC, robot controller, vision system)

### Tahap 2 — Konstruksi Submodel
Mengikuti template dari *AAS Submodel Repository* (https://admin-shell-io.com/), dipilih dan dikonfigurasi:
- **Nameplate** (IEC 63278-compliant)
- **CommunicationCapability** (custom, mengikuti paper Cavalieri)
- **OperationalData** (time-series binding ke InfluxDB atau OPC UA)

### Tahap 3 — Serialisasi & Format Pertukaran
Data diformat menggunakan AASJSON (UTF-8 JSON-LD compliant) atau AASX (OPC UA Companion Specification). Rekomendasi format untuk *real-time*:

$$
\text{Format} = \begin{cases} \text{AASJSON} & \text{untuk} \ f_{\text{polling}} \leq 10~\text{Hz} \\ \text{OPC UA over MQTT} & \text{untuk} \ f_{\text{polling}} > 10~\text{Hz} \end{cases}
$$

### Tahap 4 — Registrasi di *AAS Registry*
Menggunakan *BaSyx AAS Registry* (Fraunhofer IOSB), setiap shell di-*register* dengan endpoint REST:

$$
\text{POST} \ \texttt{https://aas-registry.local/shells} \ \texttt{Content-Type: application/json}
$$

### Tahap 5 — Integrasi dengan *Manufacturing Execution System* (MES)
Mengikuti arsitektur De Marchi et al. (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), AAS Digital Twin diproyeksikan ke tiga lapis kontrol: **Field Level** (OPC UA ke PLC), **Control Level** (AAS ke SCADA/HMI), **Operation Level** (AAS ke ERP/MES).

### Tahap 6 — Validasi & Commissioning
Pengujian conformance terhadap test specification IEC 63278-5; latency komunikasi AAS harus memenuhi:

$$
L_{\text{AAS}} = L_{\text{serialize}} + L_{\text{transport}} + L_{\text{deserialize}} \leq 50~\text{ms}
$$

### Tahap 7 — Pemeliharaan & *Lifecycle Management*
Versi AAS dikelola menggunakan *Semantic Versioning*: `MAJOR.MINOR.PATCH`. Setiap perubahan *firmware* pada gNB memerlukan pembaruan Submodel **SoftwareVersion**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Lini Perakitan Baterai EV dengan Private 5G

**Asumsi parameter industri:**
- Jumlah gNB: $N_{\text{BS}} = 6$
- Throughput target per cell: $R_{\text{target}} = 800~\text{Mbps}$
- Bandwidth kanal: $B = 100~\text{MHz}$ (n78 band, 3.5 GHz)
- SINR rata-rata: $\text{SINR} = 12~\text{dB} \approx 15{,}85$
- *Spectral efficiency factor* rata-rata: $\eta = 0{,}78$
- Jumlah *resource block groups*: $R = 17$ (untuk 100 MHz numerology $\mu=1$)
- Jumlah *spatial layers*: $S = 4$ (64T64R MIMO)

**Perhitungan throughput teoretis:**

$$
R_{\text{DL}} = 17 \times 4 \times 0{,}78 \times 100~\text{MHz} \times \log_2(1 + 15{,}85)
$$

$$
\log_2(16{,}85) = \ln(16{,}85)/\ln(2) = 2{,}823/0{,}693 = 4{,}073~\text{bit/s/Hz}
$$

$$
R_{\text{DL}} = 68 \times 0{,}78 \times 100 \times 10^6 \times 4{,}073 \approx 21{,}6~\text{Gbps}
$$

**Perhitungan throughput praktis (real-world factor 0.4):**

$$
R_{\text{real}} = 0{,}4 \times 21{,}6 \approx 8{,}6~\text{Gbps} \ \text{(total site)}
$$

Per cell: $R_{\text{cell}} \approx 1{,}43~\text{Gbps}$, melampaui target $800~\text{Mbps}$ dengan *headroom* 79%.

**Perhitungan latensi E2E URLLC:**

Komponen latensi URLLC 5G NR:

$$
L_{\text{E2E}} = L_{\text{TTI}} + L_{\text{harq}} + L_{\text{scheduling}} + L_{\text{core}} + L_{\text{MEC}}
$$

Untuk numerology $\mu=2$ (subcarrier spacing 60 kHz):

$$
L_{\text{TTI}} = \frac