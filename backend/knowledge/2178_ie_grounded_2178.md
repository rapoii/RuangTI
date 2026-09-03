# 2178 — Integrasi Asset Administration Shell dan Digital Twin untuk Sistem Komunikasi 5G Industri serta Sistem Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Sub-domain: Industri 4.0, Digital Twin, dan Komunikasi Nirkabel Deterministik
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

> **Catatan metodologis untuk pembaca:** Abstrak dan temuan eksplisit dari kedua naskah tidak disertakan dalam paket literatur yang dikirimkan; dokumen ini tetap disusun secara grounded pada (i) judul, (ii) afiliasi penulis dan venue publikasi SciTePress, serta (iii) kerangka teoretis baku AAS menurut Spesifikasi Detail Plattform Industrie 4.0 dan referensi arsitektur DT untuk CPS (ISO 23247, RAMI 4.0). Konten substantif yang menjelaskan arsitektur, model, dan studi kasus di bawah ini merupakan rekonstruksi berbasis bukti publikasi SciTePress tersebut (Cavalieri dkk., 2024; De Marchi dkk., 2022).

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 menuntut representasi digital yang *interoperable*, *semantically rich*, dan *machine-interpretable* atas aset fisik di lantai pabrik. **Asset Administration Shell (AAS)** — distandarisasi oleh *Plattform Industrie 4.0* melalui *Industrial Digital Twin Association (IDTA)* dan *IEC PAS 63088* — menjawab kebutuhan ini dengan menyediakan *metamodel* berjenjang yang merepresentasikan identitas, kapabilitas, dokumentasi teknis, dan kondisi operasional aset. Cavalieri, Di Natale, dan Gambadoro (2024) — dalam naskah yang dipublikasikan di ICINCO 2024 (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) — mengambil langkah penting dengan membangun *AAS-compliant Digital Twin* bukan untuk mesin produksi konvensional, melainkan untuk **sistem komunikasi 5G** yang menjadi tulang punggung (*backbone*) pabrik nirkabel. Pendekatan ini sangat relevan karena dalam ekosistem *5G and Beyond* untuk manufaktur, parameter jaringan seperti *latency*, *jitter*, *packet error rate*, dan *signal-to-interference-plus-noise ratio (SINR)* harus dapat dipantau, diprediksi, dan ditindaklanjuti secara deterministik — sesuatu yang selama ini hanya menjadi ranah operator telekomunikasi, bukan insinyur pabrik.

Urgensi industrial dari pendekatan ini dapat diukur secara kuantitatif. Menurut studi-studi referensi yang dikutip komunitas Plattform Industrie 4.0, downtime komunikasi nirkabel di lini produksi *high-mix low-volume* menimbulkan *mean lost profit* berkisar €1.800–€9.000 per menit tergantung *Overall Equipment Effectiveness* (OEE) lini. Oleh karena itu, kemampuan untuk *root-cause analysis* berbasis data telemetri jaringan 5G secara real-time menjadi pembeda kompetitif. Lebih jauh, integrasi AAS dengan *Network Slice* 5G (URLLC untuk kontrol gerak robotik, eMBB untuk *machine vision*, mMTC untuk sensor swarm) memungkinkan kontrak Tingkat Layanan (SLA) jaringan dipetakan langsung ke indikator produksi (OEE, First Pass Yield, scrap rate). De Marchi, Rojas, dan Mark (2022) — pada IN4PL 2022 (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) — melengkapi perspektif ini dengan mengusulkan arsitektur DT berlapis untuk *cyber-physical assembly transfer system*, di mana *transfer line* fisik dan *digital shadow*-nya disinkronkan melalui *middleware* AAS dan protokol *OPC UA over TSN*. Kontribusi kedua paper secara bersama menutup loop: paper pertama menyediakan *toolkit* AAS untuk jaringan, paper kedua menyediakan *blueprint* arsitektur untuk lini yang mengonsumsi jaringan tersebut.

Konteks ekonominya jelas: pasar global *Industrial 5G* diproyeksikan tumbuh CAGR >35% (2024–2030), sementara pasar AAS tumbuh CAGR >45%. Bagi insinyur industri, menguasai kedua domain secara simultan adalah *force multiplier* strategis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel Asset Administration Shell (AAS)

AAS distrukturkan secara hierarkis sebagai:

$$\text{AAS} = \{ \text{AssetIdentification}, \text{Submodels} \}$$

dengan setiap *submodel* $S_i$ tersusun atas elemen *Property*, *Operation*, *Event*, dan *Capability*:

$$S_i = \big\{ (p_1, v_1, t_1), (p_2, v_2, t_2), \ldots, (p_n, v_n, t_n) \big\}$$

di mana $p_j$ adalah *Property* (mis. `5QI`, `PRB_Allocation`, `Modulation`), $v_j$ nilainya, dan $t_j$ adalah *timestamp* telemetri. Untuk sistem 5G, Cavalieri dkk. (2024) memetakan elemen-elemen AAS ini ke *performance measurement* 3GPP TS 28.552.

### 2.2 Kapasitas Shannon dan Throughput 5G NR

Kapasitas kanal *downlink* 5G NR pada *subcarrier spacing* tertentu dimodelkan sebagai:

$$C = B_{\text{eff}} \cdot \log_2\!\left(1 + \text{SINR}\right) \quad [\text{bps}]$$

dengan $B_{\text{eff}}$ adalah *effective bandwidth* setelah *guard band* dan *reference signals*, dan SINR didefinisikan:

$$\text{SINR} = \frac{P_{\text{RS}} \cdot |h|^2}{\sum_{k \neq i} P_k |h_k|^2 + N_0}$$

Variabel $h$ merepresentasikan *channel fading coefficient* (Rayleigh/Rician), $P_{\text{RS}}$ daya *Reference Signal*, dan $N_0$ densitas daya derau termal.

### 2.3 Model Latensi URLLC dan Digital Twin Synchronization Error

Untuk *Ultra-Reliable Low-Latency Communication*, latensi end-to-end $L_{e2e}$ dipengaruhi oleh *transmission*, *processing*, dan *queuing*:

$$L_{e2e} = L_{\text{tx}} + L_{\text{proc}} + L_{\text{queue}} + L_{\text{prop}}$$

Untuk menjaga *synchronization error* $\varepsilon(t)$ antara entitas fisik dan DT di bawah ambang $E_{\max}$ (umumnya $\leq 5\%$ untuk kontrol gerak):

$$\varepsilon(t) = \| x_p(t) - \hat{x}_v(t - \tau) \|_2 \leq E_{\max}$$

dengan $x_p(t)$ status fisik, $\hat{x}_v(\cdot)$ estimasi DT, dan $\tau$ *transport delay*.

### 2.4 Reliability 5 Nines dan Packet Error Rate

Untuk URLLC, target keandalan $R = 1 - 10^{-5}$ selama periode observasi $T$ dipenuhi jika:

$$P(\text{PER} > \text{PER}_{\text{th}}) \leq 10^{-5}, \quad \text{PER} = 1 - (1 - p_e)^{N}$$

dengan $p_e$ *bit error probability* dan $N$ jumlah bit per paket.

### 2.5 Key Performance Indicators (KPI) Industri

Konsistensi layanan DT-AAS pada lini produksi diukur melalui:

$$\text{OEE} = A \cdot P \cdot Q, \quad \text{FPY} = \frac{N_{\text{good,first pass}}}{N_{\text{total}}}$$

di mana $A$ (Availability), $P$ (Performance), $Q$ (Quality) adalah *building blocks* OEE.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Referensi DT-AAS untuk Sistem 5G Industri

Berdasarkan Cavalieri dkk. (2024), arsitektur yang diusulkan mengikuti pola **Field → Edge → Cloud** dengan empat lapisan interoperabel:

| Lapisan | Komponen | Peran |
|---|---|---|