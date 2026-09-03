# 3026 — Digital Twin Sistem Komunikasi 5G Berbasis Asset Administration Shell untuk Ekosistem Industri Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai pabrik modern tidak lagi dipandang sebagai sebuah pilihan strategis, melainkan sebagai prasyarat operasional untuk mempertahankan daya saing dalam ekosistem *cyber-physical production systems* (CPPS). Dalam laporan yang disajikan oleh Cavalieri, Di Natale, dan Gambadoro (2024) pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), para penulis menyoroti urgensi integrasi *Asset Administration Shell* (AAS) sebagai representasi digital standar dari aset industri—yang kemudian diperluas cakupannya ke infrastruktur komunikasi nirkabel 5G. AAS sendiri merupakan konsep inti dari *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang distandarkan oleh *Industrial Digital Twin Association* (IDTA) dan *Plattform Industrie 4.0*, dengan dokumen spesifikasi teknis tertuang dalam DIN SPEC 91345 dan IEC 63278.

Secara empiris, adopsi 5G di lantai pabrik mengalami akselerasi signifikan karena tiga pilar layanan yang dijanjikan oleh 3GPP Release 16/17: *enhanced Mobile BroadBand* (eMBB), *massive Machine Type Communications* (mMTC), dan *Ultra-Reliable Low-Latency Communications* (URLLC). Aliansi 5G-ACIA (*5G Alliance for Connected Industries and Automation*) memperkirakan bahwa lebih dari 70% lini manufaktur baru di Eropa akan mengandalkan *private 5G networks* pada tahun 2030. Namun, integrasi 5G ke dalam CPPS menghadapi tantangan fundamental berupa *observability gap*: sulitnya memantau parameter Quality of Service (QoS) dari infrastruktur 5G secara *real-time* dan mengkorelasikannya dengan performa aset fisik. Di sinilah Cavalieri dkk. (2024) mengusulkan pendekatan *Digital Twin* (DT) berbasis AAS untuk menjembatani kesenjangan tersebut.

Paralel dengan itu, De Marchi, Rojas, dan Mark (2022) dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa arsitektur DT untuk sistem *cyber-physical assembly transfer* memerlukan kerangka komunikasi yang deterministik untuk menjamin koherensi antara state fisik dan state virtual. Kedua paper ini, ketika dibaca secara integratif, menyusun narasi bahwa komunikasi 5G bukan lagi lapisan utilitas, melainkan menjadi *first-class industrial asset* yang memerlukan representasi digital formal. Konteks ekonomi makro menunjukkan bahwa downtime komunikasi pada lini perakitan otomatis dapat menyebabkan kerugian hingga €50.000–€250.000 per jam, tergantung kompleksitas produk, sehingga ketersediaan DT 5G bukan sekadar kebutuhan teknis tetapi prasyarat keberlanjutan finansial perusahaan manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dibangun oleh Cavalieri dkk. (2024) bertumpu pada model *five-dimension Digital Twin* yang diformalkan oleh Tao et al. (2018), dengan perluasan berupa *physical entity* (PE), *virtual entity* (VE), *services* (Ss), *twin data* (DD), dan *connection* (CN). Pada konteks 5G, PE adalah *gNodeB*, *User Equipment* (UE), dan *core network functions* (AMF, SMF, UPF); VE adalah instance AAS yang merepresentasikan setiap node komunikasi.

**2.1 Model State-Transition untuk AAS Node**

Setiap node 5G yang dimodelkan sebagai AAS memiliki ruang keadaan (state space) $\mathcal{S}$ yang diperbarui melalui fungsi transisi deterministik:

$$s_{t+1} = f(s_t, u_t, w_t) = A \cdot s_t + B \cdot u_t + W \cdot w_t$$

di mana $s_t \in \mathbb{R}^n$ adalah vektor状态 pada waktu diskrit $t$ (berisi parameter seperti daya transmisi, bit rate, dan packet loss), $u_t \in \mathbb{R}^m$ adalah vektor kontrol (alokasi resource blocks), $w_t \in \mathbb{R}^p$ adalah *stochastic disturbance* (noise kanal Rayleigh), serta $A$, $B$, dan $W$ adalah matriks transisi yang dikalibrasi dari data historis.

**2.2 Formulasi Latency URLLC**

Kepercayaan URLLC pada 5G mensyaratkan latensi *user-plane* satu arah tidak melebihi 1 ms dengan tingkat keandalan 99,999%. Total latensi end-to-end dapat diformulasikan sebagai:

$$L_{total} = L_{proc} + L_{queue} + L_{tx} + L_{prop} + L_{retrans}$$

Dengan komponen tipikal: $L_{proc} = 0.2$ ms (gNodeB processing), $L_{queue} = \frac{\rho}{2\mu(1-\rho)}$ ms (formula Pollaczek-Khinchine untuk queueing delay dengan $\rho$ sebagai utilisasi link dan $\mu$ sebagai service rate), $L_{tx} = \frac{N_{bits}}{R}$ ms (transmission delay), $L_{prop} \approx \frac{d}{c}$ (propagation), dan $L_{retrans} = p \cdot T_{HARQ}$ (Hybrid ARQ retransmission dengan packet error probability $p$). Persamaan *Shannon-Hartley* untuk kapasitas kanal menyatakan:

$$C = B \cdot \log_2\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 \cdot B \cdot PL(d)}\right) \quad \text{[bit/s]}$$

dengan $B$ bandwidth (Hz), $P_t$ daya transmit, $G_t$/$G_r$ gain antena, $N_0$ spectral noise density, dan $PL(d)$ path loss pada jarak $d$ (mengikuti model 3GPP TR 38.901: $PL = 36.7 \log_{10}(d) + 22.7 + 26 \log_{10}(f_c)$ untuk frekuensi carrier $f_c$ dalam GHz).

**2.3 Submodel AAS untuk Telemetri 5G**

Sesuai standar IDTA Submodel Template, parameter telemetri 5G dikemas dalam *Property* elements yang diindeks oleh *Semantic ID*. Fungsi sinkronisasi antara PE dan VE mengikuti protokol *time-triggered observation*:

$$\Delta t_{sync} = \arg\min_{\Delta t} \left\{ \mathbb{E}\left[\|s_{t+\Delta t}^{PE} - s_{t+\Delta t}^{VE}\|^2\right] \leq \epsilon^2 \right\}$$

di mana $\epsilon$ adalah *coherence threshold* yang merepresentasikan toleransi deviasi state.

**2.4 Formalisasi CPS Assembly Transfer (De Marchi dkk., 2022)**

Sistem *assembly transfer* dimodelkan sebagai *discrete event system* (DES) dengan himpunan state $Q$, himpunan event $\Sigma$, fungsi transisi parsial $\delta: Q \times \Sigma \rightarrow Q$, dan himpunan state awal $q_0$. Petri net equivalent dapat dinyatakan sebagai *5-tuple* $PN = (P, T, F, W, M_0)$ di mana $P$ adalah *places*, $T$ adalah *transitions*, $F$ adalah *flow relation*, $W$ adalah bobot, dan $M_0$ adalah *initial marking*. Konektivitas 5G di sini menjadi enabling factor untuk distributed coordination:

$$T_{cycle} = \sum_{i=1}^{n} \left( t_{proc,i} + t_{comm,i} + t_{trans,i} \right)$$

dengan $T_{cycle}$ total cycle time perakitan, $t_{proc,i}$ processing time, $t_{comm,i}$ communication latency, dan $t_{trans,i}$ transport time antar workstation.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi digital twin 5G berbasis AAS mengikuti SOP yang diformalkan oleh Cavalieri dkk. (2024) ke dalam lima tahap rekayasa:

**Tahap 1 — *Asset Identification & Submodel Selection*.** Inventarisasi seluruh node 5G (gNodeB, UE, core functions) menggunakan *asset registry* yang memenuhi IEC 63278-2. Setiap entri AAS memiliki minimal empat *mandatory submodels*: (i) *Identification*, (ii) *Nameplate*, (iii) *Communication* (khusus untuk node jaringan, mengikuti Submodel Template IDTA 02001), dan (iv) *TimeSeriesData* untuk telemetri historis.

**Tahap 2 — *Data Ingestion Pipeline*.** Data dari gNodeB diekstrak melalui tiga *northbound interfaces*: O1 (FCAPS management), E2 (near-RT RAN control), dan M1 (AAS *Industry 4.0* standardized interface). Normalisasi data dilakukan menggunakan *OPC UA Companion Specification for 5G* yang sedang difinalisasi oleh IDTA bekerja sama dengan 5G-ACIA. Arsitektur pipeline mengikuti pola *lambda*:

$$D_{processed}(t) = \alpha \cdot D_{batch}(t - \tau) + (1-\alpha) \cdot D_{stream}(t)$$

dengan $\alpha \in [0,1]$ adalah bobot kombinasi *batch layer* (data historis) dan *speed layer* (real-time stream).

**Tahap 3 — *AAS Deployment via BaSyx*.** Implementasi menggunakan *Eclipse BaSyx* SDK, dengan *AAS Server* di-deploy pada *edge cloud* (latency <10 ms) dan *AAS Registry