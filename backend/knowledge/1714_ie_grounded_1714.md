# 1714 — Asset Administration Shell Digital Twin untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dalam rekayasa sistem manufaktur modern menuntut integrasi tanpa batas antara aset fisik, komunikasi nirkabel generasi kelima (5G), dan representasi digitalnya. Salvatore Cavalieri, Raffaele Di Natale, dan Salvatore Gambadoro (2024) dalam makalah *"Asset Administration Shell Digital Twin of 5G Communication System"* yang diterbitkan di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengangkat persoalan fundamental: **bagaimana memodelkan infrastruktur 5G sebagai aset industri yang dapat di-*query*, dimonitor, dan dikontrol melalui Asset Administration Shell (AAS)** — standar resmi *Plattform Industrie 4.0* yang kini dikelola *Industrial Digital Twin Association* (IDTA).

Urgensi persoalan ini muncul karena operator seluler, integrator sistem, dan pemilik pabrik menghadapi fragmentasi data antara domain Operational Technology (OT) dan Information Technology (IT). Tanpa representasi digital yang terstandarisasi, *handover* konfigurasi *radio access network* (RAN), *core network*, dan *edge computing* tidak dapat dilakukan secara otomatis. Sebagai contoh, ketika sebuah *private 5G campus network* digunakan untuk mengendalikan Automated Guided Vehicle (AGV) di lini perakitan, downtime akibat *latency spike* atau *packet loss* harus terdeteksi secara *real-time*. Persoalan ini diperkuat oleh temuan De Marchi, Rojas, dan Mark (2022) dalam *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), yang menunjukkan bahwa arsitektur *cyber-physical production system* (CPPS) memerlukan *digital twin* hierarkis untuk menjaga koherensi antara status fisik lini perakitan dan model virtualnya.

Secara ekonomis, *market report* Allied Market Research memproyeksikan pasar *digital twin* industri akan menembus **USD 125,7 miliar pada 2030** dengan CAGR 39,8%, di mana segmen komunikasi nirkabel (terutama 5G) menjadi kontributor utama. Kegagalan mengintegrasikan AAS ke dalam arsitektur komunikasi 5G akan menghasilkan *shadow infrastructure* — jaringan yang berjalan tanpa visibilitas ERP/MES, sehingga keputusan kapasitas, *spectrum allocation*, dan *predictive maintenance* menjadi suboptimal. Oleh sebab itu, kontribusi Cavalieri et al. (2024) sangat relevan bagi insinyur industri yang bertanggung jawab atas *capacity planning*, *reliability engineering*, dan integrasi IIoT.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Formal Asset Administration Shell (AAS)

AAS didefinisikan oleh IDTA sebagai *typed* representasi dari sebuah aset industri yang dapat diakses melalui protokol layanan terstandarisasi. Secara matematis, sebuah AAS untuk elemen jaringan 5G dapat diformalisasikan sebagai tuple:

$$AAS_{5G} = \langle ID, M, S, V, T \rangle$$

di mana:
- $ID$ = *globally unique identifier* (mengikuti spesifikasi *AAS Identification* berdasarkan IEC 61360/IRDI)
- $M$ = himpunan *submodels* $M = \{m_1, m_2, ..., m_n\}$
- $S$ = *submodel elements* (properti, operasi, event, dan *capability*)
- $V$ = *value* atau *value reference* pada setiap elemen
- $T$ = *timestamp* untuk versioning temporal

Setiap *property element* didefinisikan oleh Cavalieri et al. (2024) sebagai:

$$p_i = \{name, semanticId, valueType, value, timestamp\}$$

dengan $semanticId$ mengarahkan ke ontologi industri (Eclass, IEC CDD) sehingga interoperabilitas semantik tercapai.

### 2.2 Sinkronisasi State Digital Twin 5G

Model *digital twin* untuk jaringan 5G mengikuti persamaan keadaan dinamis berikut. Aset fisik (RAN, *gNodeB*, *User Equipment*) diwakili oleh *physical state vector* $\mathbf{x}_p(t) \in \mathbb{R}^n$, sedangkan *virtual representation* diwakili oleh $\mathbf{x}_v(t) \in \mathbb{R}^n$:

$$\dot{\mathbf{x}}_p(t) = f_p(\mathbf{x}_p(t), \mathbf{u}_p(t)) + \boldsymbol{\omega}_p(t)$$
$$\dot{\mathbf{x}}_v(t) = f_v(\mathbf{x}_v(t), \mathbf{u}_v(t), \Delta_p(t)) + \boldsymbol{\omega}_v(t)$$

di mana $\Delta_p(t) = \mathbf{x}_p(t) - \hat{\mathbf{x}}_v(t)$ adalah *feedback error* yang dikirimkan dari fisik ke virtual, dan $\mathbf{u}_v(t), \mathbf{u}_p(t)$ masing-masing adalah *input kontrol*. *Synchronization error* diminimalkan melalui fungsi biaya:

$$J_{sync} = \int_{0}^{T} \left[ \mathbf{x}_p(t) - \hat{\mathbf{x}}_v(t) \right]^{\top} Q \left[ \mathbf{x}_p(t) - \hat{\mathbf{x}}_v(t) \right] + \mathbf{u}^{\top} R \mathbf{u} \, dt$$

dengan $Q \succeq 0$ dan $R \succ 0$ adalah matriks pembobot.

### 2.3 Budget Latency 5G untuk Aplikasi Industri

Untuk menjamin *ultra-reliable low-latency communication* (URLLC) pada lini perakitan *cyber-physical* (De Marchi et al., 2022), total latensi ujung-ke-ujung harus memenuhi:

$$L_{total} = L_{radio} + L_{transport} + L_{core} + L_{edge} + L_{app} \leq L_{max}$$

Persamaan *reliability* 5G mengikuti model eksponensial (untuk laju kegagalan konstan):

$$R(t) = e^{-\lambda t}$$

Persyaratan URLLC pada umumnya mensyaratkan $R(10^{-5}) = 1 - 10^{-5}$ untuk paket 32 byte, menghasilkan *block error rate* (BLER) $\leq 10^{-5}$ dengan latensi satu arah $\leq 1$ ms.

### 2.4 Network Slicing untuk Manufacturing

*Network slicing* memungkinkan alokasi sumber daya deterministik untuk slice URLLC, eMBB, dan mMTC. Proporsi alokasi sumber daya *radio resource* untuk slice $i$ adalah:

$$\sum_{i=1}^{N_s} w_i \leq 1, \quad w_i \in [0,1]$$

di mana *throughput* slice $i$ mengikuti persamaan *Shannon-like* dengan modulasi adaptif:

$$TP_i = w_i \cdot B \cdot \log_2\left(1 + \text{SINR}_i\right) \quad \text{[bit/s]}$$

dengan $B$ adalah bandwidth *carrier* (mis. 100 MHz pada FR1) dan $\text{SINR}_i$ adalah *signal-to-interference-plus-noise ratio* slice $i$.

---

## 3. Metodologi Rekayasa & SOP Implementasi Asset Administration Shell untuk Jaringan 5G

Berdasarkan Cavalieri et al. (2024) dan De Marchi et al. (2022), prosedur operasional standar (*Standard Operating Procedure*) untuk mengintegrasikan AAS ke dalam *5G campus network* dapat disusun sebagai berikut:

**Tahap 1 — Identifikasi Aset & Pemodelan Submodel.**
Lakukan inventarisasi komponen fisik 5G: *gNodeB*, *5G core* (AMF, SMF, UPF), *edge server*, *router*, dan *User Equipment* industri (sensor, aktuator). Tentukan himpunan *submodel* relevan — misalnya `Submodel_NetworkPerformance`, `Submodel_RadioResource`, `Submodel_SliceConfiguration`, dan `Submodel_PredictiveMaintenance`.

**Tahap 2 — Pembuatan *Digital Nameplate* & *Documentation*.**
Setiap submodel harus memiliki *semanticId* yang memetakan ke Eclass atau IEC CDD. *Property* utama mencakup `cellID`, `ARFCN`, `bandwidth`, `txPower`, `MIMO_layers`, `modulationScheme`.

**Tahap 3 — Deployment *AAS Server & Registry*.**
AAS didistribusikan ke *endpoint* sesuai arsitektur referensi ID