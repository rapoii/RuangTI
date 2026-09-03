# 2978 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai Kerangka Digital Twin untuk Sistem Komunikasi 5G dalam Lingkungan Cyber-Physical Production Systems (CPPS), serta Arsitektur Digital Twin Sistem Transfer Perakitan Siber-Fisik sebagai Validasi Arsitektural

**Jurnal & Sitasi Utama:** Cavalieri, S., Di Natale, R., & Gambadoro, S. (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)

**Sitasi Pendukung:** De Marchi, M., Rojas, R., & Mark, B. (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 di sektor manufaktur global menuntut interoperabilitas tanpa batas antara aset fisik (*brownfield* maupun *greenfield*), platform digital, dan rantai nilai terdistribusi. Seperti yang ditegaskan oleh Cavalieri, Di Natale, dan Gambadoro (2024, [DOI:10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), kompleksitas integrasi ini memuncak ketika infrastruktur komunikasi nirkabel generasi kelima (5G) diterapkan sebagai tulang punggung konektivitas *Cyber-Physical Production Systems* (CPPS). Dalam konteks tersebut, *Asset Administration Shell* (AAS) — sebuah spesifikasi referensi yang dipromosikan oleh *Plattform Industrie 4.0* dan distandarisasi melalui IEC/PAS 63278 serta seri dokumen *Details of the Asset Administration Shell* — muncul sebagai kerangka representasi digital yang menyediakan interoperabilitas semantik lintas vendor dan lintas domain.

Urgensi industri terhadap integrasi AAS–5G didorong oleh tiga faktor simultan. Pertama, perpindahan arsitektur komunikasi dari kabel *Industrial Ethernet* (misalnya PROFINET, EtherCAT) ke *Private 5G Networks* (pita n78 atau n79 dengan mode Time TBD) memperkenalkan variabilitas deterministik yang harus dimodelkan secara eksplisit dalam *digital twin*. Kedua, adopsi paradigma *Network Slicing* 5G — yang memungkinkan *Ultra-Reliable Low-Latency Communication* (URLLC) untuk kendali loop tertutup, *enhanced Mobile BroadBand* (eMBB) untuk transmisi data besar dari sensor visi, dan *massive Machine-Type Communication* (mMTC) untuk armada sensor nirkabel — memerlukan representasi parameter *Quality of Service* (QoS) dalam struktur data standar. Ketiga, interoperabilitas dengan platform *Industrial Internet Consortium* (IISA), *OPC UA*, dan *Eclipse BaSyx* menuntut formalisasi submodel AAS yang mampu meng-*encode* parameter spesifik jaringan 5G.

De Marchi, Rojas, dan Mark (2022, [DOI:10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) turut mempertegas relevansi industri dengan memvalidasi arsitektur digital twin pada sistem transfer perakitan *cyber-physical* nyata. Studi mereka menunjukkan bahwa sinkronisasi status antara *physical asset*, *digital shadow*, dan *digital twin* memerlukan protokol komunikasi yang andal dan laten rendah — sebuah kebutuhan yang dipenuhi oleh kombinasi AAS + 5G URLLC. Dengan kata lain, kedua paper secara konvergen menunjukkan bahwa digital twin modern tidak lagi berdiri sebagai entitas terisolasi, melainkan sebagai simpul dari *federated digital twin* yang berkomunikasi melalui jaringan 5G terstandarisasi.

Aspek ekonomis dari integrasi ini sangat signifikan: laporan *Plattform Industrie 4.0* menunjukkan bahwa interoperabilitas berbasis AAS dapat menekan biaya integrasi sistem hingga 30–45%, khususnya pada lini produksi multi-vendor di industri otomotif, proses kimia, dan elektronik. Oleh karena itu, modul 2978 ini mengkaji formulasi matematis, SOP rekayasa, dan studi kasus kuantitatif yang relevan bagi spesialis teknik industri yang akan mengimplementasikan arsitektur tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Metamodel Asset Administration Shell

AAS distrukturkan sebagai *typed object* hierarkis yang direpresentasikan secara formal dalam *Information Model* berbasis *Serializable Data Specification* (JSON/XML). Struktur dasar AAS dapat diformulasikan sebagai tuple berurutan:

$$\mathcal{A} = \langle \mathcal{I}, \mathcal{S}, \mathcal{V}, \mathcal{C}, \mathcal{E}, \mathcal{D} \rangle$$

di mana $\mathcal{I}$ = *Identification* (berisi *AssetInformation* berupa ID global seperti IRDI atau URN), $\mathcal{S}$ = himpunan *Submodel*, $\mathcal{V}$ = himpunan *SubmodelElement* bertingkat, $\mathcal{C}$ = *Capability* (fungsi yang dapat dijalankan aset), $\mathcal{E}$ = *Event* (notifikasi status), dan $\mathcal{D}$ = *DataSpecification* (semantik referensi ke *ECLASS* atau *IEC Common Data Dictionary*).

Setiap *Submodel* $s_i \in \mathcal{S}$ didefinisikan sebagai:

$$s_i = \langle id_i, kind_i, semanticId_i, \mathcal{E}_i \rangle, \quad \mathcal{E}_i = \{e_{i,1}, e_{i,2}, \dots, e_{i,n_i}\}$$

dengan $kind_i \in \{Template, Instance\}$ dan $semanticId_i$ menunjuk ke *ConceptDescription* yang men-standardisasi makna properti.

### 2.2. Model Sinkronisasi Digital Twin

Digital twin $T_p$ untuk aset fisik $p$ pada waktu kontinu $t$ memenuhi persamaan sinkronisasi status berikut (Turck et al., varian Cavalieri et al. 2024):

$$S_{T_p}(t) = \Phi\bigl(S_p(t - \tau_d), \mathcal{H}_p(t)\bigr)$$

di mana $S_p(\cdot)$ adalah *state vector* aset fisik, $\tau_d$ adalah latensi komunikasi end-to-end (dalam detik), $\mathcal{H}_p(t)$ adalah *history buffer* (memori peristiwa masa lalu), dan $\Phi$ adalah fungsi pemetaan deterministik atau stokastik. Laten end-to-end 5G didekomposisi menjadi:

$$\tau_d = \tau_{radio} + \tau_{transport} + \tau_{core} + \tau_{application}$$

dengan target URLLC: $\tau_d \leq 1 \text{ ms}$ pada tingkat reliabilitas $1 - 10^{-5}$.

### 2.3. Model Kinerja Jaringan 5G

Parameter *Signal-to-Interference-plus-Noise Ratio* (SINR) untuk *User Equipment* (UE) ke-*gNodeB* ke-$j$ pada subcarrier $k$ diformulasikan sebagai:

$$\text{SINR}_{j,k} = \frac{P_{tx,j} \cdot G_{j,k} \cdot L_{j,k}^{-1}}{\sum_{i \neq j} P_{tx,i} \cdot G_{i,k} \cdot L_{i,k}^{-1} + N_0 \cdot B}$$

dengan $P_{tx}$ = daya transmisi, $G$ = gain antena, $L$ = pathloss, $N_0$ = densitas noise termal, dan $B$ = bandwidth subcarrier. *Shannon