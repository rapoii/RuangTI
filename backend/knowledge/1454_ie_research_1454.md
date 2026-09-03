# 1454 — Operation and Maintenance Optimization Framework untuk Sistem Manufaktur Berkelanjutan: Integrasi Energy Management dan Ontology-Driven Digital Twin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Operation and Maintenance Optimization for Manufacturing Systems with Energy Management
**Jurnal & Sitasi Utama:** Xiangxin An, Guojin Si, Tangbin Xia (2022). *Energies*. DOI: [https://doi.org/10.3390/en15197338](https://doi.org/10.3390/en15197338)
**Sitasi Pendukung:** Igor Kabashkin (2025). *Mathematics*. DOI: [https://doi.org/10.3390/math13172817](https://doi.org/10.3390/math13172817)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur global merupakan konsumen energi terbesar dengan porsi lebih dari 33% dari total konsumsi energi final dunia menurut pola konsumsi energi yang dilaporkan oleh badan energi internasional. Dalam konteks transisi menuju pembangunan berkelanjutan, An, Si, dan Xia (2022) dalam publikasi mereka di jurnal *Energies* menyoroti bahwa "improving energy efficiency and applying effective means of energy saving have gradually received worldwide attention" sementara "manufacturing industries are also inevitably facing pressures on energy optimization evolution from both governments and competitors" (An et al., 2022, DOI: [10.3390/en15197338](https://doi.org/10.3390/en15197338)). Tekanan regulasi seperti EU Emission Trading System, Carbon Border Adjustment Mechanism (CBAM), serta kebijakan decarbonisasi nasional telah mengubah paradigma O&M manufaktur dari sekadar pendekatan *corrective* menjadi strategi *proactive-integrated*.

Di sisi lain, aktivitas *operation and maintenance* (O&M) memiliki prospek paling signifikan untuk optimalisasi energi karena dua karakteristik inheren: pertama, keberagaman aktivitas O&M (preventive, predictive, condition-based, prescriptive) yang memberikan ruang eksplorasi solusi sangat luas; kedua, kompleksitas struktural sistem manufaktur modern yang terdiri atas subsistem mekanis, elektrikal, kontrol, dan IT yang saling bergantung. Namun, An et al. (2022) menekankan tiga tantangan fundamental: (1) dinamika aktivitas manufaktur yang menyebabkan profil beban energi tidak stasioner; (2) kompleksitas struktur sistem yang mempersulit atribusi konsumsi energi ke komponen individual; serta (3) diversitas interpretasi keputusan optimasi energi yang dihasilkan analis berbeda.

Kabashkin (2025) dalam jurnal *Mathematics* mengusulkan pendekatan *ontology-driven digital twin* yang secara langsung menjawab ketiga tantangan tersebut melalui tujuh ontologi saling-terhubung: *structural, functional, behavioral, monitoring, maintenance, lifecycle,* dan *environmental* (Kabashkin, 2025, DOI: [10.3390/math13172817](https://doi.org/10.3390/math13172817)). Framework ini memberikan representasi semantik komprehensif yang memungkinkan *transparent, traceable reasoning* dari observasi sensor hingga keputusan pemeliharaan, berbeda dengan pendekatan *data-driven* konvensional yang beroperasi sebagai *black-box*.

Sinergi kedua paper ini menjadi pilar Modul 1454: bagaimana mengintegrasikan manajemen energi dalam keputusan O&M manufaktur melalui arsitektur digital twin yang dijelaskan secara formal, terukur, dan dapat diaudit.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konsumsi Energi Sistem Manufaktur

Konsumsi energi total sistem manufaktur $E_{total}$ dapat diformulasikan sebagai integral daya sesaat terhadap waktu operasional:

$$E_{total} = \sum_{i=1}^{n} \int_{t_0}^{t_1} P_i(t) \, dt$$

di mana $P_i(t)$ adalah profil daya mesin ke-$i$ pada waktu $t$, dan $n$ adalah jumlah subsistem produksi. Efisiensi energi sistem didefinisikan sebagai:

$$\eta_E = \frac{E_{useful}}{\sum_{i=1}^{n} E_i + E_{aux}}$$

dengan $E_{aux}$ mencakup energi auxiliares (penerangan, HVAC, compressed air losses). Identifikasi $E_{aux}$ merupakan komponen kritis dalam audit energi O&M karena losses ofensif biasanya terkonsentrasi di sini (10–30% dari total menurut benchmark industri).

### 2.2 Fungsi Objektif Optimasi O&M-Energy Joint

Fungsi biaya O&M total yang terintegrasi dengan komponen energi diformulasikan An et al. (2022) sebagai:

$$C_{OM}^{total} = \sum_{j=1}^{m} \left( C_{pm,j} + C_{cm,j} + C_{e,j} \cdot E_j + C_{d,j} \cdot T_{d,j} + C_{f,j} \cdot F_j \right)$$

di mana untuk aset ke-$j$: $C_{pm,j}$ biaya preventive maintenance, $C_{cm,j}$ biaya corrective maintenance, $C_{e,j}$ tarif energi per kWh, $E_j$ konsumsi energi operasional, $C_{d,j}$ biaya downtime per jam, $T_{d,j}$ lama downtime, $C_{f,j}$ penalty kegagalan (failure), dan $F_j$ jumlah kegagalan pada horizon perencanaan. *Subject to* kendala ketersediaan sistem:

$$A_j = \frac{MTBF_j}{MTBF_j + MTTR_j} \geq A_{min,j}$$

dengan $A_j$ availabilitas aset, $MTBF$ *Mean Time Between Failure*, $MTTR$ *Mean Time To Repair*, dan $A_{min,j}$ threshold availabilitas minimum yang disyaratkan.

### 2.3 Model Reliabilitas Weibull dan Prediksi Failure

Untuk komponen kritis, reliabilitas mengikuti distribusi Weibull dengan parameter bentuk $\beta$ dan skala $\eta$:

$$R(t) = e^{-(t/\eta)^{\beta}}, \quad \beta > 0, \eta > 0$$

*Failure rate* (hazard function) diturunkan sebagai:

$$\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

Untuk komponen dengan *bathtub curve*, tiga fase degradasi $(\beta < 1 \text{ infant mortality}, \beta \approx 1 \text{ useful life}, \beta > 1 \text{ wear-out})$ menjadi dasar penjadwalan *replacement* dan *overhaul*.

### 2.4 Formalisasi Digital Twin sebagai 6-Tuple

Kabashkin (2025) mendefinisikan digital twin secara formal sebagai 6-tuple:

$$\mathcal{DT} = \langle \mathcal{O}, \mathcal{S}, \mathcal{T}, \mathcal{M}, \mathcal{R}, \mathcal{X} \rangle$$

di mana:
- $\mathcal{O} = \{O_1, O_2, ..., O_7\}$ adalah himpunan tujuh ontologi (structural, functional, behavioral, monitoring, maintenance, lifecycle, environmental);
- $\mathcal{S}$ adalah himpunan *semantic transformation engines* yang memetakan observasi fisik ke representasi semantik;
- $\mathcal{T}$ adalah *temporal mapping functions* untuk sinkronisasi real-time;
- $\mathcal{M}$ adalah himpunan *cross-ontology mappings* dengan cardinality $|\mathcal{M}| = \sum_{i<j} |O_i \times O_j|$;
- $\mathcal{R}$ adalah *dynamic reasoning mechanisms* berbasis *description logics*;
- $\mathcal{X}$ adalah ruang observasi sensor $X \subseteq \mathbb{R}^d$.

### 2.5 Knowledge Graph dan Description Logic

Knowledge graph $\mathcal{G}$ yang mendasari arsitektur Kabashkin (2025) diformalisasikan sebagai:

$$\mathcal{G} = (V, E, \phi, \psi)$$

di mana $V$ adalah himpunan vertices (konsep dan instans), $E \subseteq V \times V$ adalah himpunan edges (relasi), $\phi: V \to \mathcal{C}$ adalah *type assignment function* dengan $\mathcal{C}$ kelas ontologi, dan $\psi: E \to \mathcal{R}$ memetakan edges ke *relation types*. Representasi *description logic* $\mathcal{L}$ yang digunakan adalah:

$$\mathcal{L} = \langle \Sigma, \models \rangle, \quad \Sigma = \langle \mathcal{C}, \mathcal{R}, \mathcal{I} \rangle$$

dengan $\mathcal{C}$ atomic concepts, $\mathcal{R}$ atomic roles, dan $\mathcal{I}$ individu. Reasoning entailment $O \models \alpha$ menjamin *explainability* keputusan.

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Arsitektur 7-Layer Ontology-Driven O&M

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 7: Environmental Ontology (emissions, regulations, ESG)│
├─────────────────────────────────────────────────────────────┤
│ Layer 6: Lifecycle Ontology (cradle-to-grave asset history)  │
├─────────────────────────────────────────────────────────────┤
│ Layer 5: Maintenance Ontology (PM, PdM, CBM, RtI strategies) │
├─────────────────────────────────────────────────────────────┤
│ Layer 4: Monitoring Ontology (sensor data, thresholds, KPI) │
├─────────────────────────────────────────────────────────────┤
│ Layer 3: Behavioral Ontology (operating states, transitions) │
├─────────────────────────────────────────────────────────────┤
│ Layer 2: Functional Ontology (process functions