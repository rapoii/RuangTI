# 1746 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai produksi modern ditandai oleh konvergensi tiga pilar teknologi utama, yaitu *Cyber-Physical Systems* (CPS), komunikasi nirkabel generasi kelima (5G), dan *Digital Twin* (DT) berstandar referensi arsitektur industri 4.0. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah "*Asset Administration Shell Digital Twin of 5G Communication System*" yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi integrasi *Asset Administration Shell* (AAS) — standar interoperabilitas yang dicanangkan oleh Plattform Industrie 4.0 — ke dalam jaringan komunikasi 5G privat yang kini diadopsi sebagai tulang punggung *smart factory*. Permasalahan mendasar yang diangkat adalah fragmentasi semantik antarmuka antara *Operational Technology* (OT) dan *Information Technology* (IT), di mana aset fisik 5G seperti *gNodeB*, *User Plane Function* (UPF), dan *Multi-access Edge Computing* (MEC) server selama ini hanya dapat dimodelkan secara parsial dalam dokumentasi vendor, sehingga menghambat interoperabilitas lintas-pemasok.

Konteks ekonomi industri menunjukkan bahwa pasar global *Industrial Digital Twin* diproyeksi mencapai USD 86,09 miliar pada tahun 2028 dengan CAGR >39%, sementara investasi *private 5G* di sektor manufaktur tumbuh tiga kali lipat antara 2022–2024 (Cavalieri et al., 2024). Kegagalan integrasi antara representasi digital aset 5G dan sistem kontrol lini produksi menghasilkan *mean time to repair* (MTTR) yang tinggi, dengan estimasi kerugian produktif mencapai EUR 50.000–200.000 per jam pada lini perakitan otomotif premium. Lebih lanjut, paper pendukung De Marchi, Rojas, dan Mark (2022) yang berjudul "*Digital Twin Architecture of a Cyber-physical Assembly Transfer System*" (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa arsitektur DT konvensional belum mampu menjembatani heterogenitas protokol pada sistem transfer perakitan, sehingga dibutuhkan pendekatan berbasis AAS yang menggabungkan semantik submodel dan *I4.0 Language* (i4AAS) ke dalam pipeline komunikasi nirkabel deterministik.

Urgensi teknis yang melatarbelakangi riset ini dapat diidentifikasi pada tiga aspek utama. Pertama, latensi *end-to-end* pada *Ultra-Reliable Low-Latency Communication* (URLLC) 5G harus dijaga di bawah 1 ms pada tingkat konfidensi 99,999% untuk memenuhi kebutuhan kontrol gerakan *closed-loop* pada robot kolaboratif. Kedua, interoperabilitas semantik antar-vendor memerlukan satu ontologi tunggal — dalam hal ini AAS Specification of the Asset Administration Shell — agar *handover* informasi antar-*Programmable Logic Controller* (PLC) tidak lagi bergantung pada *gateway* khusus. Ketiga, kebutuhan akan *predictive maintenance* aset komunikasi 5G memerlukan pengumpulan data telemetri berkala yang harus disinkronkan dengan submodel AAS seperti `CommunicationInterfaces`, `NetworkParameters`, dan `OperationalData`. Ketiga aspek ini secara simultan menjadi justifikasi utama pengembangan AAS-DT untuk 5G yang dipaparkan oleh Cavalieri dan tim (2024) dan diperkuat oleh bukti empiris pada lini transfer perakitan siber-fisik oleh De Marchi et al. (2022).

---

## 2. Landasan Teori & Formulasi Matematis

Landasan teori yang dibangun oleh Cavalieri et al. (2024) mengikuti kerangka **RAMI 4.0** (*Reference Architecture Model Industry 4.0*) dengan *Asset Administration Shell* sebagai representasi digital standar. AAS didefinisikan sebagai himpunan submodel $\mathcal{S} = \{s_1, s_2, \dots, s_n\}$ yang masing-masing merepresentasikan aspek tertentu dari aset fisik. Formulasi state space digital twin pada waktu diskrit $t$ dapat dituliskan sebagai:

$$x_{DT}(t) = f_{AAS}\big(x_{phys}(t), u(t), \theta\big)$$

di mana $x_{DT}(t)$ adalah vektor status digital twin, $x_{phys}(t)$ adalah status aset fisik hasil sensor fusion, $u(t)$ adalah *control input* dari sistem kendali, $\theta$ adalah parameter kalibrasi submodel AAS, dan $f_{AAS}(\cdot)$ adalah fungsi transisi yang merealisasikan pemetaan antara dunia fisik dan representasi AAS.

Untuk mengukur tingkat keselarasan antara aset fisik dan representasi AAS, digunakan *twin discrepancy index* (TDI) sebagai berikut:

$$\text{TDI}(t) = \frac{\lVert x_{DT}(t) - x_{phys}(t) \rVert_2}{\lVert x_{phys}(t) \rVert_2 + \epsilon}$$

dengan $\epsilon$ adalah konstanta regularisasi kecil untuk menghindari pembagian nol. Nilai $\text{TDI}(t) \leq \delta$ — dengan $\delta$ ditetapkan sebesar 0,05 — menunjukkan bahwa digital twin masih dalam zona toleransi *consistency* menurut standar IEC 62890.

Pada lapisan komunikasi 5G, latensi *end-to-end* $L_{e2e}$ terdiri dari tiga komponen aditif sesuai arsitektur 3GPP TS 23.501:

$$L_{e2e} = L_{UE} + L_{RAN} + L_{core}$$

dengan $L_{UE}$ adalah latensi pemrosesan *User Equipment*, $L_{RAN}$ adalah latensi *Radio Access Network* (meliputi *scheduling delay*, *frame alignment*, dan *HARQ retransmission*), serta $L_{core}$ adalah latensi *5GC* (5G Core). Untuk URLLC, *budget* latensi kumulatif dibatasi oleh:

$$L_{e2e} \leq 1\ \text{ms}\quad\text{dengan}\quad P(L_{e2e} \leq 1\ \text{ms}) \geq 1 - 10^{-5}$$

Selanjutnya, kapasitas *channel* 5G pada *Sub-6 GHz* mengikuti rumus *Shannon-Hartley* yang disesuaikan dengan *spectral efficiency* orde modulasi adaptif:

$$C = B \cdot \log_2\left(1 + \frac{P_t G_t G_r}{N_0 B \cdot PL(d)}\right)$$

di mana $B$ adalah *bandwidth* (misalnya 100 MHz pada *n78*), $P_t$ adalah daya transmisi *gNodeB*, $G_t$ dan $G_r$ adalah gain antena pengirim dan penerima, $N_0$ adalah densitas spektral daya noise, dan $PL(d)$ adalah *path loss* pada jarak $d$ menurut model 3GPP TR 38.901.

Pada sistem transfer perakitan siber-fisik yang dikaji De Marchi et al. (2022), laju aliran material dimodelkan sebagai:

$$\lambda_{sys} = \min\{\lambda_{conv}, \lambda_{robot}, \lambda_{buffer}\}$$

dengan $\lambda_{conv}$, $\lambda_{robot}$, dan $\lambda_{buffer}$ berturut-turut adalah kapasitas konveyor, robot *pick-and-place*, dan *buffer* antar-stasiun. Utilisasi sistem didefinisikan sebagai:

$$\rho = \frac{\lambda_{sys}}{\mu_{max}}$$

di mana $\mu_{max}$ adalah kapasitas layanan maksimum. Untuk menjaga stabilitas lini, diperlukan $\rho < 1$, dengan *rule of thumb* industri menetapkan $\rho \leq 0{,}85$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Cavalieri et al. (2024) mengusulkan metodologi tujuh tahap yang diberi nama **AAS-5G Twin Framework** untuk mengintegrasikan AAS ke dalam jaringan komunikasi 5G privat. Tahapan ini disusun sebagai *Standard Operating Procedure* (SOP) yang dapat diadopsi secara langsung oleh integrator sistem.

**Tahap 1 — Identifikasi Aset 5G.** Semua elemen fisik jaringan 5G (gNodeB, antenna, *edge server*, router, switch) didaftarkan dalam inventaris dengan *unique asset identifier* sesuai ISO 23247 dan AAS *Identification* submodel (`Identification`).

**Tahap 2 — Pemodelan Submodel AAS.** Setiap aset diberi himpunan submodel sesuai fungsi: `CommunicationInterfaces`, `NetworkParameters`, `OperationalData`, `CapabilityDescription`, dan `BillOfMaterials`. Spesifikasi submodel mengikuti *Submodel Template Specification* dari *Plattform Industrie 4.0*.

**Tahap 3 — Deployment Endpoint AAS.** Setiap AAS instance dipublikasikan sebagai *HTTP/REST endpoint* di `https://<aas-server>/aas/<aas-id>/submodels/<sm-id>/submodel`, dengan format data AASX (`.aasx`) atau XML/JSON sesuai *AAS Part 2 API*.

**Tahap 4 — Integrasi dengan 5G Network Exposure Function (NEF).** Data telemetri dari 5G core diekspos melalui *Network Exposure Function* dan di-*stream* ke *AAS Registry* menggunakan protokol *Message Queuing Telemetry Transport* (MQTT) atau *OPC UA Pub/Sub* (komponen yang juga ditekankan oleh De Marchi et al., 2022 untuk sistem transfer perakitan).

**Tahap 5 — Sinkronisasi Dua Arah (Bidirectional Sync).** Perubahan konfigurasi jaringan 5G yang dilakukan melalui AAS akan diterjemahkan menjadi *northbound API call* ke *Management and Orchestration* (MANO) platform, menciptakan *closed-loop* antara representasi digital dan kondisi fisik aset.

**Tahap 6 — Validasi Konsistensi Twin.** TDI dihitung setiap interval $\Delta t = 250$ ms dan dibandingkan dengan ambang batas $\delta$. Jika $\text{TDI} > \delta$, *alarm* dikirim ke *Manufacturing Execution System* (MES) untuk inisiasi *re-synchronization*.

**Tahap 7 — Pemeliharaan Prediktif.** *Machine Learning model* (misalnya LSTM atau *Gradient Boosting*) dijalankan pada data submodel `OperationalData` untuk memprediksi *Remaining Useful Life* (RUL) komponen 5G dengan rumus:

$$\text{RUL}(t) = \mathbb{E}\big[T_{fail} - t \,\big|\, \mathcal{H}_{t}\big]$$

dengan $\mathcal{H}_t$ adalah *history* telemetri hingga waktu $t$.

Arsitektur yang dihasilkan mengikuti diagram *layered* berlapis empat: (i) **Physical Layer** (aset 5G dan sensor), (ii) **Communication Layer** (5G NR + MEC), (iii) **AAS Layer** (submodel registry + BaSyx SDK), dan (iv) **Application Layer** (MES, ERP, *dashboard* analitik). Arsitektur ini secara konseptual selaras dengan piramida otomasi ISA-95/ISA-88 yang tetap menjadi referensi utama integrasi industri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif dari kerangka AAS-DT 5G, dilakukan simulasi pada lini perakitan elektronik hipotetis dengan parameter berikut:

- Panjang lintasan konveyor: $L = 120$ m
- Kecepatan nominal konveyor: $v = 1{,}2$ m/s
- Jumlah *gNodeB* 5G privat: $n_{gNB} = 4$
- Bandwidth *n78*: $B = 100$ MHz (4 × 20 MHz *carrier aggregation*)
- Daya transmisi: $P_t = 30$ dBm = $10^{3}$ mW
- Gain antena: $G_t = G_r = 12$ dBi = $15{,}85$ (linear)
- Noise figure: $NF = 7$ dB
- *Path loss* 3GPP UMi NLOS pada $d = 50$ m: $PL(50) = 36{,}5$ dB

**Langkah 1 — Perhitungan Kapasitas Kanal per gNodeB.**

Konversi SNR dari parameter di atas:

$$\text{SNR}_{\text{dB}} = P_t + G_t + G_r - PL(d) - N_0 B - NF$$

dengan $N_0 = -174$ dBm/Hz pada temperatur 290 K, maka:

$$N_0 B = -174 + 10\log_{10}(100 \times 10^6) = -174 + 80 = -94\ \text{dBm}$$

Substitusi nilai:

$$\text{SNR} = 30 + 12 + 12 - 36{,}5 - (-94) - 7 = 104{,}5\ \text{dB}$$

Nilai SNR ini jauh di atas batas ambang Shannon sehingga kapasitas kanal praktis ditentukan oleh *spectral efficiency* maksimum 5G NR *Release 17*, yaitu $\eta_{max} = 7{,}5$ bit/s/Hz untuk *downlink* 256-QAM pada *Sub