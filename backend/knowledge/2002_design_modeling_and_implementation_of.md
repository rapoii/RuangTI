# 2002 — Desain, Pemodelan, dan Implementasi Digital Twin untuk Sistem Industri Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Design, Modeling and Implementation of Digital Twins — arsitektur bidirectional, verifikasi fisik-virtual, dan standar implementasi
**Jurnal & Sitasi Utama:** Mariana Segovia & Joaquín García-Alfaro (2022). *Sensors*, 22(14), 5396. DOI: [https://doi.org/10.3390/s22145396](https://doi.org/10.3390/s22145396)
**Sitasi Pendukung:** Md. Shezad Dihan, Anwar Islam Akash & Zinat Tasneem (2024). *Heliyon*, 10, e26503. DOI: [https://doi.org/10.1016/j.heliyon.2024.e26503](https://doi.org/10.1016/j.heliyon.2024.e26503)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah menggeser paradigma rekayasa sistem industri dari pendekatan *reactive maintenance* menuju *predictive-prescriptive autonomy*. Dalam konteks ini, **Digital Twin (DT)** muncul sebagai artefak teknologi yang memetakan entitas fisik ke dalam ruang virtual melalui *bidirectional data flow*, memungkinkan fungsi monitoring, simulasi, prediksi, diagnosis, dan kontrol secara real-time. Segovia & García-Alfaro (2022) menegaskan bahwa DT bukan sekadar replika 3D, melainkan *a set of computer-generated models that map a physical object into a virtual space* yang mampu menyediakan informasi status operasi dan membuka peluang *new business models* (DOI: 10.3390/s22145396).

Konsep DT secara historis diperkenalkan NASA pada Program Apollo di era 1960-an untuk menciptakan kembaran virtual wahana antariksa guna mendukung simulasi misi dan mitigasi risiko (Dihan et al., 2024, DOI: 10.1016/j.heliyon.2024.e26503). Namun, akselerasi implementasi masif baru terjadi satu dekade terakhir, seiring kematangan teknologi *cyber-physical systems* (CPS), komputasi edge-cloud, dan protokol komunikasi deterministik seperti OPC UA dan MQTT-SN. Secara ekonomis, laporan industri menunjukkan kerugian global akibat *unplanned downtime* manufaktur mencapai USD 50 miliar per tahun; DT berpotensi menurunkan *mean time to repair* (MTTR) hingga 30–50% melalui prediksi anomali berbasis *machine learning* yang berjalan pada model kembaran virtual.

Urgensi rekayasa DT diperkuat oleh tiga tekanan operasional: (1) **kompleksitas sistem** yang meningkat pada lini produksi *batch-size-of-one* dan *mass-customization*; (2) **kebutuhan akurasi prognostik** pada sistem mission-critical di sektor aerospace, energi, dan healthcare; serta (3) **regulasi jejak audit digital** yang mensyaratkan traceability proses produksi (segmen kualitas ISO 9001:2015 dan AS9100D). Segovia & García-Alfaro (2022) menyoroti bahwa tantangan metodologis terbesar bukan pada pembuatan model geometrik 3D, melainkan pada **desain arsitektur integrasi** yang menjamin konsistensi status antara entitas fisik dan virtual sepanjang siklus hidup sistem.

Dalam ranah Indonesian Industry 4.0 Readiness Index, adopsi DT masih terbatas pada perusahaan manufaktur besar (Tier-1 otomotif dan FMCG), sementara UMKM manufaktur masih menghadapi gap kompetensi dan investasi. Oleh karena itu, diperlukan pendekatan metodologis yang terstruktur dan terukur untuk menjawab pertanyaan: *Bagaimana merancang, memodelkan, dan mengimplementasikan DT secara sistematis agar memenuhi kebutuhan fungsional sistem industri?*

---

## 2. Landasan Teori & Formulasi Matematis

Formalisasi DT memerlukan tiga lapisan matematis: (a) model keadaan sistem fisik, (b) model pengukuran sensor, dan (c) fungsi sinkronisasi kembaran virtual. Segovia & García-Alfaro (2022) merangkum arsitektur DT dalam kerangka *functional requirements → data acquisition → virtual model → bidirectional synchronization → services*.

### 2.1 Model Keadaan Sistem Fisik (State-Space)

Entitas fisik dimodelkan sebagai sistem dinamik diskrit waktu dengan persamaan keadaan:

$$x_{k+1} = A\,x_k + B\,u_k + w_k$$

di mana $x_k \in \mathbb{R}^{n}$ adalah vektor keadaan (suhu, getaran, kecepatan spindel, posisi), $u_k \in \mathbb{R}^{m}$ adalah vektor aktuasi, $w_k \sim \mathcal{N}(0, Q)$ adalah gangguan proses, dan $A$, $B$ adalah matriks transisi.

### 2.2 Model Pengukuran Sensor

Data dari sensor fisik di-ruang observasi melalui:

$$y_k = C\,x_k + v_k, \quad v_k \sim \mathcal{N}(0, R)$$

di mana $C$ adalah matriks observasi dan $v_k$ adalah derau pengukuran. Dihan et al. (2024) menegaskan bahwa *data is the brain or building block of any digital twin system* — kualitas $y_k$ menentukan batas presisi seluruh layanan DT.

### 2.3 Persamaan Sinkronisasi Kembaran Virtual

Kembaran virtual berevolusi mengikuti estimator Kalman:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k\,(y_k - C\,\hat{x}_{k|k-1})$$

dengan gain Kalman:

$$K_k = P_{k|k-1}\,C^{T}\,(C\,P_{k|k-1}\,C^{T} + R)^{-1}$$

dan kovariansi prediksi:

$$P_{k|k-1} = A\,P_{k-1|k-1}\,A^{T} + Q$$

### 2.4 *Twin Synchronization Error*

Deviasi antara entitas fisik dan virtual didefinisikan sebagai *drift metric*:

$$e_k = \| x_k^{phy} - \hat{x}_k^{vir} \|_2$$

Kriteria konvergensi mensyaratkan:

$$\lim_{k \to \infty} \mathbb{E}[e_k^2] \leq \epsilon_{tol}$$

di mana $\epsilon_{tol}$ adalah toleransi yang ditentukan berdasarkan kebutuhan fungsional (misalnya $\epsilon_{tol} = 0{,}5^\circ C$ untuk monitoring termal).

### 2.5 Model Latensi Komunikasi

Bidirectional data flow menimbulkan latensi $\tau$ yang menurunkan akurasi prediksi. Model linier sederhana:

$$\hat{x}_{k+\tau} \approx \hat{x}_k + \tau \cdot \frac{d\hat{x}}{dt}\bigg|_{t=k}$$

Untuk sistem dengan latensi variabel, digunakan *jitter bound*: $\tau \leq \tau_{max}$ agar *stability margin* terjaga (DOI: 10.3390/s22145396).

### 2.6 Fungsi Objektif Layanan Prescriptive

Untuk modul rekomendasi keputusan, Segovia & García-Alfaro (2022) merumuskan biaya total:

$$J(u) = \sum_{k=0}^{N-1} \left[ x_k^{T}\,Q_x\,x_k + u_k^{T}\,R_u\,u_k \right] + x_N^{T}\,Q_f\,x_N$$

dengan $Q_x \succeq 0$, $R_u \succ 0$ adalah bobot *state-regulation* dan *control-effort*. Solusi optimal $u^*$ diperoleh melalui *Model Predictive Control* (MPC) yang berjalan di kembaran virtual.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Segovia & García-Alfaro (2022) mengusulkan metodologi 4-fase (*functional requirement selection → architecture planning → integration → verification*) yang kami adaptasi menjadi SOP rekayasa DT:

### Fase 1 — Functional Requirement Selection
1. Identifikasi *use case*: monitoring, simulasi, prediksi, diagnosis, atau kontrol.
2. Definisikan *Key Performance Indicator* (KPI): akurasi prediksi (RMSE), latensi maksimum ($\tau_{max}$), availability ($\geq 99{,}9\%$).
3. Tentukan *twin fidelity level*: *Descriptive* (visualisasi), *Informative* (data historis), *Predictive* (ML/AI), *Prescriptive* (MPC/recommendation).
4. Tetapkan *data sovereignty* dan protokol keamanan (ISO/IEC 27001, IEC 62443).

### Fase 2 — Architecture Planning
Arsitektur referensi mengikuti pola *3-tier*:
```
[Tier-1: Physical Asset]  ⇄  [Tier-2: Edge/PLC Gateway]  ⇄  [Tier-3: Cloud/On-prem Twin Platform]
   • Sensor & actuator         • OPC UA / MQTT broker          • Virtual model & ML services
   • PLC / CNC controller      • Time-series DB (InfluxDB)     • Digital thread (PLM)
   • Safety interlocks         • Stream processing (Kafka)      • User dashboard (Grafana)
```
Komponen utama: (a) **Physical Layer** dengan sensor, (b) **Communication Layer** (OPC UA, MQTT, AMQP), (c) **Virtual Layer** (model CAD/CAE, model fisika, model data-driven), dan (d) **Service Layer** (dashboard, API, alerting).

### Fase 3 — Integration
1. *Asset virtualization*: konversi CAD ke format ringan (glTF/USD) menggunakan *mesh decimation* dengan target rasio polygon $\leq 1{:}100$.
2. *Data pipeline*: instalasi *edge gateway* (mis. Siemens IOT2050) dengan *time-series DB*.
3. *Model binding*: pasang *physics model* (FEM/CFD) dan *data-driven model* (LSTM, Gradient Boosting) ke *virtual container*.
4. *Digital thread*: integrasikan dengan PLM/MES/ERP menggunakan *unique asset ID* (URI/URN) sesuai ISO 23247.

### Fase 4 — Verification & Validation (V&V)
1. *Unit test* model: verifikasi persamaan (1)–(3) terhadap data historis.
2. *Integration test*: ukur $\epsilon_{tol}$ dan latensi $\tau$.
3. *System test*: *fault injection* pada sensor dan komunikasi.
4. *Acceptance test*: validasi KPI pada *operational scenario*.
5. *Continuous V&V*: *model drift monitoring* dengan *Population Stability Index* (PSI):

$$\text{PI} = \sum_{i=1}^{n} (p_i^{ref} - p_i^{cur}) \ln\!\left(\frac{p_i^{ref}}{p_i^{cur}}\right)$$

di mana $\text{PI} > 0{,}25$ mengindikasikan *drift* yang memerlukan *re-training*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Digital Twin pada mesin CNC 5-sumbu (machining center) di lini produksi komponen aerospace titanium Ti-6Al-4V. Target: *Predictive Maintenance* untuk spindel.

### 4.1 Parameter Input

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Sampling time | $T_s$ | 0,1 | s |
| State (suhu, getaran, torsi) | $x$ | 3-dim | – |
| Process noise cov. | $Q$ | $\text{diag}(0{,}01; 0{,}05;$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
