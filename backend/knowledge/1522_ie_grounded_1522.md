# 1522 — Asset Administration Shell Digital Twin untuk Sistem Komunikasi Industri 5G dan Sistem Siber-Fisik Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin of 5G Communication System; Cyber-Physical Assembly Transfer System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*, hal. 378–385. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*, dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 yang berlangsung secara global menuntut integrasi masif antara aset fisik (*physical asset*), sistem kendali otomatis, dan infrastruktur komunikasi nirkabel generasi kelima (5G). Dalam kerangka referensi arsitektur RAMI 4.0 (*Reference Architecture Model Industrie 4.0*), **Asset Administration Shell (AAS)** muncul sebagai standar interoperabilitas digital twin yang diakui secara internasional, dikembangkan oleh *Plattform Industrie 4.0* dan kini dilanjutkan oleh *Industrial Digital Twin Association (IDTA)*. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *"Asset Administration Shell Digital Twin of 5G Communication System"* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menekankan bahwa tanpa representasi digital yang terstandarisasi, komunikasi nirkabel 5G tidak dapat memenuhi tuntutan deterministik latensi rendah yang diperlukan oleh aplikasi industri mission-critical.

Konteks ekonomi dan operasional: pasar global digital twin industri diproyeksikan mencapai USD 156,7 miliar pada 2030 dengan CAGR 39,8% (sumber data pasar independen yang konsisten dengan estimasi Fortune Business Insights). Khususnya, penerapan 5G *Ultra-Reliable Low-Latency Communication* (URLLC) di lantai produksi mengharuskan *end-to-end latency* di bawah 1 ms dan tingkat keandalan paket lebih besar dari 1−10⁻⁵ (99,999%). Parameter tersebut mustahil dipenuhi tanpa adanya digital twin yang mampu memodelkan perilaku *base station*, *gNodeB*, antena MIMO masif, dan protokol *slicing* jaringan secara real-time.

Cavalieri *et al.* (2024) mengusulkan kerangka AAS yang merepresentasikan entitas komunikasi 5G (misalnya *Next Generation Node B*, *User Equipment*, *Radio Access Network*, dan *5G Core*) sebagai submodel terstruktur dalam XML/AASX sesuai spesifikasi "Specification of the Asset Administration Shell – Part 1: Metamodel". Pendekatan ini memungkinkan setiap aset telekomunikasi memiliki "kartu identitas digital" yang dapat di-*query*, di-*subscribe*, dan di-*command* melalui *Application Programming Interface* (API) berbasis HTTP/MQTT.

Di sisi lain, De Marchi, Rojas, dan Mark (2022) dalam *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) membangun arsitektur digital twin untuk *cyber-physical assembly transfer system* — sistem transfer perakitan fisik yang dikendalikan melalui umpan balik sensor dan aktuator. Kedua makalah ini, meskipun berbeda domain aplikasi, membangun satu benang merah: **arsitektur digital twin berlapis (*layered*) yang mengintegrasikan sensor, komunikasi nirkabel, dan submodel AAS untuk menjamin determinisme operasional**.

Urgensi rekayasa: kegagalan dalam sinkronisasi antara physical twin dan digital twin pada lini perakitan modern dapat menghasilkan *downtime* produksi 7–15 menit per insiden dengan kerugian finansial EUR 25.000–50.000 per jam di sektor otomotif premium. Oleh karena itu, kemampuan *prognostics and health management* (PHM) yang difasilitasi oleh AAS digital twin menjadi investasi strategis dengan *payback period* rata-rata 14–22 bulan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Arsitektur Asset Administration Shell (AAS)

AAS mengikuti struktur *metamodel* yang didefinisikan oleh spesifikasi IDTA. Setiap AAS memiliki atribut esensial berupa **Identification**, **Nameplate**, **Technical Data**, **Documentation**, **Capability**, dan **Operation**. Representasi matematis himpunan submodel adalah:

$$\mathcal{A}_i = \{S_{i,1}, S_{i,2}, \ldots, S_{i,n}\} \quad \text{dengan } S_{i,k} \in \mathbb{S}$$

di mana $\mathcal{A}_i$ adalah AAS untuk aset ke-$i$, dan $\mathbb{S}$ adalah ruang seluruh submodel terstandarisasi. Relasi antar-submodel dapat diformulasikan sebagai graf berarah:

$$G_{AAS} = (V, E), \quad V = \bigcup_{i=1}^{N}\mathcal{A}_i, \quad E \subseteq V \times V$$

di mana setiap *edge* $e_{jk} = (S_{j,p}, S_{k,q})$ menandakan ketergantungan semantik atau dataflow.

### 2.2 Model Komunikasi 5G URLLC

Total latensi end-to-end sistem 5G URLLC dapat didekomposisi:

$$L_{e2e} = L_{proc}^{UE} + L_{queue}^{RAN} + L_{trans}^{RAN} + L_{prop}^{F1} + L_{proc}^{5GC} + L_{backhaul}$$

dengan setiap komponen mengikuti distribusi probabilistik tertentu. Untuk tujuan desain konservatif, batas atas latensi didefinisikan sebagai:

$$\Pr(L_{e2e} > L_{max}) \leq \epsilon, \quad \epsilon = 10^{-5}$$

di mana $L_{max}$ adalah *latency budget* (misalnya 1 ms untuk *closed-loop control*).

Throughput efektif dengan MIMO masif $N_t \times N_r$ dan modulasi orde $M$:

$$T = N_{stream} \cdot B_{sub} \cdot \log_2(M) \cdot \eta_{coding}$$

dengan $N_{stream} \leq \min(N_t, N_r)$, $B_{sub}$ adalah bandwidth subcarrier, dan $\eta_{coding}$ adalah *coding rate*.

### 2.3 Model Sinkronisasi Digital Twin

Cavalieri *et al.* (2024) menggunakan pendekatan *twin synchronization* melalui *time-series state estimation*. Misalkan $s(t) \in \mathbb{R}^n$ adalah keadaan aset fisik dan $\hat{s}(t)$ adalah estimasi digital twin, maka:

$$\hat{s}(t+\Delta t) = f(s(t), u(t), w(t))$$

dengan $u(t)$ adalah *control input*, $w(t) \sim \mathcal{N}(0, Q)$ adalah *process noise*. Kesalahan sinkronisasi didefinisikan sebagai:

$$E_{sync} = \frac{1}{T}\int_0^T \|s(t) - \hat{s}(t)\|_2^2 \, dt$$

### 2.4 Model Throughput dan Keandalan

Keandalan paket dalam *slicing* jaringan 5G:

$$R_{rel} = 1 - P_{loss} = 1 - \left(1 - \frac{SNR}{SNR_{threshold}}\right)^{N_{retx}}$$

dengan $N_{retx}$ adalah jumlah transmisi ulang yang diizinkan.

Untuk De Marchi *et al.* (2022), model *transfer system* mengikuti persamaan gerak *transfer carriage*:

$$m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F_{drive}(t) - F_{friction}(t)$$

di mana profil digital twin mengestimasi parameter $(m, c, k)$ secara online melalui *recursive least squares*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem komunikasi 5G mengikuti prosedur operasional standar yang diuraikan Cavalieri *et al.* (2024) sebagai berikut:

**Langkah 1 — Inventarisasi Aset Telekomunikasi:** Identifikasi seluruh entitas 5G: *gNodeB*, antena MIMO, *edge server*, *UE* (sensor industri, AGV, robot kolaboratif). Tetapkan *Asset ID* sesuai ISO/IEC 15459.

**Langkah 2 — Pemodelan Submodel AAS:** Buat submodel dalam format AASX (XML) untuk setiap entitas. Submodel minimal yang direkomendasikan: *Nameplate*, *TechnicalData*, *OperationalData*, *CommunicationCapabilities*.

**Langkah 3 — Penyebaran BaSyx Server:** Gunakan *open-source* Eclipse BaSyx sebagai *middleware* sesuai dengan arsitektur:

```
[Physical Asset] → [Sensor/Actuator] → [5G RAN/5GC] 
       ↓
[AAS Submodel Endpoint (HTTP/MQTT)] → [BaSyx AAS Server]
       ↓
[Application Layer: Dashboard / MES / ERP]
```

**Langkah 4 — Konfigurasi Network Slicing:** Alokasikan *slice* URLLC khusus untuk data real-time kendali, *slice* eMBB untuk transmisi video inspeksi, dan *slice* mMTC untuk ribuan sensor non-kritis.

**Langkah 5 — Registrasi ke Plattform IDTA:** Submodel divalidasi terhadap *SMIP* (*Submodel Implementation Platform*) dan didaftarkan ke repositori *Digital Twin Registry*.

**Langkah 6 — Integrasi dengan Sistem Transfer Perakitan:** Mengikuti pola De Marchi *et al.* (2022), modul AAS dipasang pada PLC *transfer carriage* dan *pick-and-place gantry*, sehingga status gerakan, posisi, dan kondisi mekanik dapat dipantau via *twin*.

**Langkah 7 — Pengujian & Validasi:** Uji latensi *end-to-end*, validasi kesesuaian submodel dengan spesifikasi Detail of the Asset Administration Shell (Part 2), dan verifikasi interoperabilitas lintas vendor.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Lini Perakitan Otomotif dengan 5G URLLC

Sebuah pabrik perakitan otomotif premium di Eropa Tengah akan menerapkan AAS digital twin untuk memantau komunikasi nirkabel antara 50 AGV (*Automated Guided Vehicle*) dan *orchestration server*. Parameter teknis:

| Parameter | Nilai | Satuan |
|---|---|---|
| Jumlah AGV ($N_{AGV}$) | 50 | unit |
| Bandwidth kanal 5G ($B$) | 100 | MHz |
| Jumlah antena Tx ($N_t$) | 64 | elemen |
| Jumlah antena Rx ($N_r$) | 4 | elemen |
| Modulasi order ($M$) | 64-QAM | – |
| Coding rate ($\eta_{coding}$) | 0,85 | – |
| Target latency ($L_{max}$) | 1 | ms |
| SNR rata-rata | 18 | dB |
| SNR threshold | 10 | dB |
| Retransmisi maks ($N_{retx}$) | 2 | – |

### 4.2 Perhitungan Throughput

$$N_{stream} = \min(N_t, N_r) = \min(64, 4) = 4$$

$$T = 4 \times 100 \times 10^6 \times \log_2(64) \times 0,85 = 4 \times 100 \times 10^6 \times 6 \times 0{,}85$$

$$T = 2{,}04 \times 10^9 \text{ bit/s} = 2{,}04 \text{ Gbps}$$

### 4.3 Perhitungan Keandalan Paket

$$R_{