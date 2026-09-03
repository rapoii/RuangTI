# 1538 — Asset Administration Shell (AAS) sebagai Inti Digital Twin Sistem Komunikasi 5G: Arsitektur, Formulasi, dan Aplikasi Lintas Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. **Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)**, hal. 354–420. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Henning Peters (2025). *Integration of a digital twin for data-driven modeling of punch-bending processes using the asset administration shell*. **Materials Research Proceedings**, vol. 51. DOI: [https://doi.org/10.21741/9781644903599-166](https://doi.org/10.21741/9781644903599-166)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah memaksa perusahaan manufaktur, operator telekomunikasi, dan integrator sistem untuk mengelola aset fisik dalam jejaring siber-fisik (cyber-physical) yang sangat kompleks. Dalam konteks ini, konsep *Asset Administration Shell* (AAS) yang dipelopori oleh *Plattform Industrie 4.0* dan kini diadopsi secara luas sebagai standar IEC PAS 63278 (Cavalieri et al., 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) muncul sebagai kerangka interoperabilitas utama untuk merepresentasikan aset industri secara digital. Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti bahwa sistem komunikasi 5G — dengan arsitektur *gNodeB*, *5G Core* (5GC), dan *User Equipment* (UE) — menghadapi ledakan parameter operasional dinamis (alokasi *Resource Block*, *modulasi adaptif*, *beamforming*) yang tidak lagi dapat dikelola oleh *network management* konvensional berbasis SNMP atau CMIP saja.

Urgensi ekonomis dari adopsi AAS pada jaringan 5G sangat konkret. Studi kasus operator Tier-1 Eropa menunjukkan bahwa tanpa representasi digital twin yang terdistribusi, biaya operasional (OPEX) pengelolaan *Radio Access Network* (RAN) meningkat rata-rata 18–22% akibat downtime yang tidak terprediksi dan suboptimalisasi alokasi spektrum (Cavalieri et al., 2024). Lebih jauh, interoperabilitas antar-vendor (multi-vendor) pada RAN 5G NR menjadi salah satu hambatan utama dalam peluncuran *Open RAN* (O-RAN). Tanpa *semantic interoperability layer* yang konsisten, setiap vendor menyajikan struktur data (*Information Model*) yang proprietari sehingga integrasi *end-to-end* menjadi mahal dan lambat.

Cavalieri et al. (2024) merespons hal ini dengan mengusulkan pembangunan Digital Twin jaringan 5G yang seluruhnya mengikuti spesifikasi AAS: setiap entitas jaringan — *gNodeB*, *AMF/SMF/UPF*, *cell site*, bahkan *spectrum slice* — direpresentasikan sebagai *Asset* dengan *Submodels* yang terstandarisasi. Pendekatan ini secara fundamental menjawab tiga tantangan klasik: (1) bagaimana menyediakan akses data aset secara *vendor-neutral*; (2) bagaimana menjamin konsistensi *semantic description* sepanjang *lifecycle* aset; dan (3) bagaimana memungkinkan *plug-and-play* interoperabilitas dengan aplikasi *Manufacturing Execution System* (MES) atau *Network Orchestrator* eksternal.

Sebagai penguat relevansi lintas-sektor, Peters (2025, DOI: [10.21741/9781644903599-166](https://doi.org/10.21741/9781644903599-166)) membuktikan bahwa kerangka AAS yang sama dapat diporting secara efektif ke proses *punch-bending* multi-stage di industri *cold forming*. Peters menunjukkan bahwa efek lintas-tahapan (*cross-stage effects*) yang bergantung pada kuantitas batch menyebabkan deviasi dimensi komponen yang signifikan, dan hanya dengan infrastruktur data hybrid (FEM + data-driven ML) yang dimediasi oleh AAS, tingkat waste dapat ditekan. Kesamaan pendekatan antara dua domain — telekomunikasi dan *forming* mekanis — ini menegaskan bahwa AAS adalah *lingua franca* Industri 4.0 yang sesungguhnya, bukan sekadar formalism BIM untuk manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Formal Asset Administration Shell

Menurut Cavalieri et al. (2024), sebuah AAS minimal tersusun atas tiga komponen utama: *Asset Identification* (`AssetIdentification`), *Asset Information Model* (berisi *Submodels*), dan *Asset Data Specification*. Setiap *Submodel* direpresentasikan sebagai koleksi *SubmodelElement* (SME) yang bisa berupa `Property`, `MultiLanguageProperty`, `File`, `Blob`, `ReferenceElement`, `Capability`, atau `Operation`.

Formulasi umum AAS dapat dinyatakan sebagai tuple:

$$
\text{AAS} = \langle \mathcal{A}, \mathcal{S}, \mathcal{D}, \mathcal{C} \rangle
$$

di mana:
- $\mathcal{A} = \{a_1, a_2, \ldots, a_n\}$ adalah himpunan *Asset* fisik atau digital,
- $\mathcal{S} = \{s_1, s_2, \ldots, s_m\}$ adalah himpunan *Submodel* yang melekat pada aset,
- $\mathcal{D}$ adalah *Data Specification* (mengacu pada *IEC 61360* atau *submodel template* I4.0),
- $\mathcal{C}$ adalah *ConceptDescription* yang menyediakan semantik formal.

Setiap submodel $s_j$ dapat didekomposisi menjadi elemen-elemen dengan semantik yang didefinisikan oleh *IRI* (Internationalized Resource Identifier):

$$
s_j = \{(e_k, \text{semanticRef}_k) \mid k = 1, 2, \ldots, K_j\}
$$

di mana $\text{semanticRef}_k$ adalah referensi ke *ConceptDescription* yang memuat *preferredName*, *definition*, *unit*, dan *valueFormat* dari elemen $e_k$.

### 2.2 Digital Twin sebagai Shadow Twin Real-Time

Cavalieri et al. (2024) membedakan dua kelas *digital twin* dalam konteks 5G:

$$
T = (P, M, F, \sigma)
$$

- $P$: representasi properti status aset (state vector),
- $M$: *behavioral model* (mis. model propagasi sinyal, model konsumsi daya *gNodeB*),
- $F$: *feedback mechanism* (synchronization loop),
- $\sigma: \mathbb{R}_{\geq 0} \rightarrow P$ adalah *state transition map* pada waktu kontinu.

Laju sinkronisasi antara aset fisik dan bayangan digital didefinisikan sebagai:

$$
f_{\text{sync}} = \frac{N_{\text{events}}}{T_{\text{observation}}}
$$

Untuk jaringan 5G NR dengan *frame duration* 10 ms (subframe) dan 1 ms untuk *slot* mini (dalam konfigurasi *numerology* $\mu = 2$ atau 3 pada FR1/FR2), Cavalieri et al. (2024) merekomendasikan *twin update interval*:

$$
\Delta t_{\text{twin}} \leq \frac{T_{\text{slot}}}{k}, \quad k \in \mathbb{Z}_{+}
$$

sehingga untuk *slot* 0,5 ms (numerology $\mu=3$, FR2 *mmWave*), dipilih $\Delta t_{\text{twin}} \approx 0{,}5\,\text{ms}$.

### 2.3 Throughput Komunikasi AAS

Protokol transport utama yang digunakan oleh AAS adalah **HTTP/REST** dan **OPC UA Binary**, dengan ukuran payload tipikal untuk *SubmodelElement* sebesar:

$$
L_{\text{payload}} = \sum_{k=1}^{K} \left( L_{\text{header}} + L_{\text{value},k} + L_{\text{semantic},k} \right)
$$

Untuk agregasi data telemetri 5G yang terdiri dari $K = 256$ parameter (mis. *RSRP*, *RSRQ*, *SINR*, *CQI*, throughput per UE, *PRB utilization*), Cavalieri et al. (2024) memperkirakan payload total:

$$
L_{\text{total}} \approx 256 \times (32 + 16 + 48) \approx 24{,}6\,\text{kB per snapshot}
$$

Pada *update rate* 1 Hz, kebutuhan bandwidth:

$$
B_{\text{AAS}} = L_{\text{total}} \times f_{\text{update}} = 24{,}6 \times 1 = 24{,}6\,\text{kB/s} \approx 197\,\text{kbps}
$$

Bandwidth ini jauh di bawah kapasitas 5G (yang mampu >1 Gbps pada eMBB), sehingga tidak menjadi bottleneck (Cavalieri et al., 2024).

### 2.4 Formulasi Model Hibrid pada Proses Punch-Bending

Peters (2025) melengkapi landasan teori dengan model hibrid *data-driven* untuk *punch-bending*:

$$
\hat{y} = f_{\text{FEM}}(\mathbf{x}) + g_{\text{ML}}(\mathbf{x}, \mathbf{z} \mid \theta)
$$

di mana:
- $\mathbf{x} = [F_{\text{punch}}, v_{\text{punch}}, L_{\text{free}}, T_{\text{tool}}]$ adalah vektor parameter proses,
- $\mathbf{z}$ adalah variabel kuantitas-dependen (batch size, *work hardening state*),
- $\theta$ adalah parameter model ML (mis. *Random Forest* atau *Gradient Boosting*),
- $\hat{y}$ adalah prediksi deviasi geometri (mis. *springback angle* $\Delta\alpha$ dalam derajat).

Peters (2025) melaporkan bahwa *root mean square error* (RMSE) model hibrid adalah:

$$
\text{RMSE} = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2} \approx 0{,}087^{\circ}
$$

mengurangi waste rate dari 6,4% menjadi 2,1% pada lini produksi *spring contacts*.

### 2.5 Model Propagasi Sinyal 5G untuk Digital Twin

Untuk *digital twin* kualitas link 5G, Cavalieri et al. (2024) mengadopsi model path-loss 3GPP TR 38.901 (urban macro):

$$
\text{PL}_{\text{UMa-LOS}}(d) = 28{,}0 + 22 \log_{10}(d_{3D}) + 20 \log_{10}(f_c)
$$

dengan $d_{3D}$ dalam meter, $f_c$ dalam GHz. Parameter ini menjadi salah satu *SubmodelElement* pada AAS cell site untuk prediksi cakupan adaptif.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Cavalieri et al. (2024) dan Peters (2025), metodologi implementasi AAS mengikuti SOP rekayasa 7-tahap berikut:

### SOP-01: Identifikasi Aset dan Pemetaan Nilai (*Value Stream Mapping*)

1. Inventarisasi seluruh entitas 5G (cell sites, *gNodeB*, *core network function*, *spectrum license*).
2. Tentukan *criticality* setiap aset: $C_i = \text{Impact} \times \text{Probability of Failure}$.
3. Pilih minimal satu *pilot asset* ber-*criticality* tinggi untuk proyek *digital twin* pertama.

### SOP-02: Seleksi *Submodel Templates*

Mengacu pada katalog resmi *Plattform Industrie 4.0* dan pustaka BaSyx, pilih *submodel template* relevan:
- **Nameplate** (identitas),
- **TechnicalData** (spesifikasi),
- **OperationalData** (telemetri),
- **Capability** (fungsi yang ditawarkan),
- **BillOfMaterials** (untuk cell site *multi-vendor*).

### SOP-03: Pembuatan *ConceptDescription*

Setiap *Property* dalam submodel harus memiliki *ConceptDescription* dengan metadata:

```
preferredName: "Reference Signal Received Power"
shortName: "RSRP"
unit: "dBm"
valueFormat: float
definition: "Average received power per resource element..."
```

### SOP-04: Serialisasi dan Endpoint Deployment

AAS dapat diserialisasi dalam format **AASX** (berbasis OPC UA XML) atau **JSON** (Rasa Compliant API). Cavalieri et al. (2024) merekomendasikan endpoint:

$$
\text{AAS-Endpoint} = \texttt{https://\{registry\}/aas/\{aasId\}/submodels/\{submodelId\}}
$$

untuk *Registry* berbasis HTTP/REST, atau `opc.tcp://{server}:4840/aas/{aasId}` untuk *Server* OPC UA.

### SOP-05: Integrasi dengan Sistem 5G (*Northbound/Southbound Interface*)

- **Southbound (AAS → Network Element):** gunakan protokol NETCONF/YANG atau SNMPv3 untuk *subscribe* telemetri 5G.
- **Northbound (AAS → Application):** sediakan *query interface* untuk *Network Orchestrator*, *Self-Organizing Network* (SON), dan *AI/ML pipeline*.

### SOP-06: Validasi dan Audit Interoperabilitas

Lakukan uji konformitas terhadap:
- AAS Spesification Part 1–5 (Industrial Digital Twin Association),
- IEC PAS 63278,
- OPC UA Companion Specification "AAS".

### SOP-07: Operasionalisasi dan Continuous Update

Aktifkan *change management* untuk *lifecycle* aset: setiap kali *firmware* gNodeB di-*upgrade*, *Submodel* AAS diperbarui secara otomatis melalui *event-driven synchronization*.

> **Catatan SOP Lintas-Sektor:** Peters (2025) mengimplementasikan langkah 01–07 pada lini *punch-bending* di industri *cold forming*, dengan penyesuaian: *Submodel* yang digunakan adalah **ProcessData**, **QualityPrediction**, dan **

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
