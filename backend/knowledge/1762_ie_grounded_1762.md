# 1762 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses pada dasarnya menuntut interoperabilitas mesin-mesin fisik dengan representasi digitalnya secara real-time. Dalam kerangka *Industrie 4.0*, konsep *Asset Administration Shell* (AAS) muncul sebagai standar digital twin yang diformalkan oleh *Plattform Industrie 4.0* dan diadopsi oleh *Industrial Digital Twin Association* (IDTA) sebagai spesifikasi referensi untuk interoperabilitas aset industri. Cavalieri, Di Natale, dan Gambadoro (2024) dalam paparannya di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengembangkan arsitektur AAS yang secara spesifik merepresentasikan *5G Communication System* sebagai aset industri, sebuah pendekatan yang menjawab kebutuhan kritis akan visibilitas, orkestrasi, dan pemeliharaan jaringan privat 5G di pabrik.

Urgensi topik ini berpangkal pada tiga fakta empiris. Pertama, komunikasi nirkabel 5G di lingkungan industri—terutama pada profil *Ultra-Reliable Low-Latency Communication* (URLLC)—mensyaratkan *latency* end-to-end ≤ 1 ms dengan tingkat keandalan 99,999% (3GPP TS 22.261). Kedua, kegagalan *handover*, interferensi sel kecil (*small cell*), atau degradasi *signal-to-interference-plus-noise ratio* (SINR) pada lantai pabrik dapat menyebabkan *downtime* lini produksi dengan kerugian ekonomi sangat signifikan; studi McKinsey (2020) memperkirakan satu menit *unplanned downtime* di lini *semiconductor* bernilai hingga USD 50.000. Ketiga, integrasi AAS dengan 5G memungkinkan *predictive maintenance*, *closed-loop control*, dan simulasi *what-if* terhadap parameter *Quality of Service* (QoS) jaringan.

De Marchi, Rojas, dan Mark (2022) (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) turut memperkuat landasan melalui arsitektur digital twin untuk *Cyber-physical Assembly Transfer System*, yang mendemonstrasikan bagaimana struktur modular submodel AAS dapat di-*reuse* untuk berbagai subsistem pabrik, termasuk sistem komunikasi nirkabel. Dengan demikian, penelitian Cavalieri et al. (2024) bukan berdiri sendiri, melainkan merupakan kelanjutan logis dari kerangka arsitektur modular yang sebelumnya divalidasi untuk lini perakitan fisik ke domain jaringan komunikasi nirkabel.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur AAS yang diajukan Cavalieri et al. (2024) mengikuti *metamodel* spesifikasi *Part 1 of the Asset Administration Shell* (IDTA, 2023), yang mendefinisikan empat entitas utama: *Asset*, *AAS*, *Submodel*, dan *SubmodelElement*. Setiap *Submodel* merepresentasikan aspek spesifik dari aset; untuk sistem 5G, submodel yang relevan antara lain *Connectivity*, *NetworkSlicing*, *QoS*, *Security*, dan *Lifecycle*.

**2.1 Model Sinkronisasi Digital–Fisik**

Hubungan antara状态 aset fisik $S(t)$ dan representasi digital twin $D(t)$ dapat dimodelkan sebagai *state synchronization function*:

$$D(t) = f(S(t)) + \varepsilon(t)$$

dengan $\varepsilon(t)$ adalah galat sinkronisasi (*synchronization error*) yang terdistribusi normal $\mathcal{N}(0, \sigma^2)$. Cavalieri et al. (2024) menekankan bahwa untuk profil URLLC pada 5G, $\sigma$ harus dijaga agar memenuhi:

$$\sigma \leq \frac{L_{max}}{3}$$

di mana $L_{max}$ adalah *latency budget* aplikasi (1 ms untuk URLLC). Ini berarti toleransi sinkronisasi efektif adalah $\sigma \leq 0{,}333$ ms, yang hanya dapat dipenuhi melalui *edge computing* dan protokol *Time-Sensitive Networking* (TSN).

**2.2 Metrik Kinerja Jaringan 5G sebagai Variabel Submodel**

Untuk setiap *SubmodelElement* pada *Connectivity Submodel*, parameter kunci 5G dapat diformulasikan sebagai berikut. *User-experienced data rate* $R_{UE}$ untuk *use case* *enhanced Mobile BroadBand* (eMBB):

$$R_{UE} = B \cdot \log_2\left(1 + \text{SINR}\right) \cdot \eta_{SE}$$

dengan $B$ adalah *bandwidth* kanal (Hz), $\text{SINR}$ dalam skala linier, dan $\eta_{SE}$ adalah efisiensi spektral. Untuk URLLC, probabilitas keberhasilan transmisi dalam jendela waktu $W$ adalah:

$$P_{succ} = e^{-\lambda \cdot W} \cdot \prod_{i=1}^{N}\left(1 - \text{BLER}_i\right)$$

dengan $\lambda$ adalah laju paket per detik, $\text{BLER}_i$ adalah *Block Error Rate* transmisi ke-$i$, dan $N$ jumlah transmisi yang diizinkan.

**2.3 Model Network Slicing**

Sistem 5G mendukung *network slicing*, di mana satu infrastruktur fisik dibagi menjadi beberapa *slice* logis. Alokasi sumber daya untuk slice $k$ dimodelkan sebagai:

$$\sum_{k=1}^{K} a_{k} \leq A_{total}, \quad a_k = \langle b_k, p_k, q_k \rangle$$

di mana vektor $a_k$ terdiri atas *bandwidth* $b_k$, *processing capacity* $p_k$, dan *priority queue class* $q_k$; $A_{total}$ adalah total kapasitas RAN (*Radio Access Network*). Cavalieri et al. (2024) menyarankan agar setiap slice 5G direpresentasikan sebagai *Submodel* AAS tersendiri dengan *property* yang dapat dibaca (*read*) dan ditulis (*write*) oleh *Asset Management Shell* dari lini produksi yang mengonsumsi slice tersebut.

**2.4 Fungsi Keandalan Sistem**

Keandalan sistem komunikasi 5G sebagai aset industri dapat dinyatakan dengan *Mean Time Between Failures* (MTBF) dan *Availability*:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}}$$

dengan MDT (*Mean Downtime*) mencakup waktu deteksi, diagnosis, dan perbaikan. Integrasi AAS memungkinkan pencatatan otomatis MTBF ke dalam *Submodel Lifecycle*, sehingga *Remaining Useful Life* (RUL) dapat diprediksi menggunakan model *Weibull* atau *Proportional Hazards*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem 5G mengikuti SOP delapan tahap yang diformalkan oleh Cavalieri et al. (2024) dengan referensi arsitektur dari De Marchi et al. (2022):

1. **Identifikasi Aset** — *Inventory* seluruh komponen 5G: *gNB*, *AMF/SMF*, *UPF*, *RAN*, *MEC server*, dan *device* (sensor, AGV, robot).
2. *Template Definition* — Definisikan *Submodel Template* sesuai *IDTA Specification* untuk aspek *Connectivity*, *NetworkSlicing*, *Security*, dan *Performance*.
3. **Provisioning AAS** — *Deploy* *AAS Server* (misal berbasis *BaSyx* atau *Eclipse Ditto*) di sisi *edge* pabrik.
4. **Instrumentasi Aset** — Pasang *telemetry agent* pada elemen 5G untuk *push* data operasional via *MQTT* atau *OPC UA Pub/Sub*.
5. **Registrasi & Discovery** — Daftarkan AAS ke *AAS Registry* agar dapat ditemukan oleh *AAS Client* lini produksi.
6. **Orkestrasi Slice** — Gunakan API AAS untuk memesan slice 5G sesuai kebutuhan *machine-to-machine* (M2M) pada lini produksi.
7. **Monitoring & Predictive Maintenance** — Visualisasi dasbor AAS dan jalankan model *prognostics* berbasis RUL.
8. **Audit & Versioning** — Simpan *lifecycle log* untuk kepatuhan terhadap standar IEC 63278 dan ISO 23247.

Arsitektur berlapis yang diadopsi mengikuti pola *edge–fog–cloud*: lapisan *edge* (≤10 ms) menangani kontrol URLLC, lapisan *fog* (10–50 ms) menjalankan sinkronisasi AAS, dan lapisan *cloud* (>50 ms) melakukan analitik big-data dan *what-if simulation*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Lini perakitan AGV di pabrik *smart manufacturing* seluas 10.000 m² menggunakan 50 AGV yang terhubung via slice URLLC 5G privat. Kapasitas RAN total $A_{total}$ = 200 MHz pada band n78 (3,5 GHz), daya pancar 24 dBm, gain antena 8 dBi.

**Langkah 1 — Perhitungan SINR tipikal:**

Asumsikan *path loss* menurut model 3GPP TR 38.901 UMi NLOS pada jarak $d$ = 50 m, frekuensi $f$ = 3,5 GHz:

$$\text{PL} = 36{,}7 \log_{10}(d) + 22{,}7 + 26 \log_{10}(f_c)$$

$$\text{PL} = 36{,}7 \log_{10}(50) + 22{,}7 + 26 \log_{10}(3{,}5) \approx 90{,}4 \text{ dB}$$

Penerimaan daya $P_{rx}$ = $24 + 8 - 90{,}4 - 5$ (interference margin) = $-63{,}4$ dBm. Dengan *noise floor* $-95$ dBm dan interferensi $-90$ dBm:

$$\text{SINR (dB)} = -63{,}4 - 10\log_{10}\left(10^{-9{,}5} + 10^{-9{,}0}\right) \approx 26{,}5 \text{ dB}$$

**Langkah 2 — Throughput per AGV:**

$$R_{UE} = 200 \times 10^6 \cdot \log_2(1 + 10^{2{,}65}) \cdot 0{,}65 \approx 1{,}46 \text{ Gbps}$$

**Langkah 3 — Alokasi Slice:**

Setiap AGV membutuhkan *throughput* minimum 25 Mbps untuk telemetry + video inspeksi. Total kebutuhan = $50 \times 25 = 1.250$ Mbps = 1,25 Gbps. Bandwidth minimal:

$$B_{min} = \frac{R_{UE}}{\log_2(1+\text{SINR})\cdot \eta_{SE}} = \frac{1{,}25 \times 10^9}{\log_2(1 + 10^{2{,}65}) \cdot 0{,}65} \approx 171 \text{ MHz}$$

Artinya, slice ke-2 (untuk video AGV) membutuhkan 171 MHz; sisa 29 MHz dialokasikan ke slice kontrol URLLC dengan *bandwidth* 5 MHz dan subcarrier spacing 30 kHz.

**Langkah 4 — Keandalan dan