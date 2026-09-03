# 2777 — Integrasi Latent Heat Thermal Energy Storage (LHTES) Shell-and-Tube dengan High-Temperature Heat Pump (HTHP) untuk Dekarbonisasi Panas Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature heat pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap **dekarbonisasi panas proses industri** (industrial process heat decarbonization) terus meningkat seiring implementasi *European Green Deal*, target *Net-Zero Industry Act*, dan ambisi Indonesia menurunkan emisi GRK sektor industri hingga 31,89% pada skenario CM2. Lebih dari 50% konsumsi energi manufaktur berada pada rentang suhu menengah–tinggi (100–400 °C) untuk sektor makanan-minuman, kimia, tekstil, pulp & kertas, dan semikonduktor (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Sumber panas konvensional—boiler gas alam dan burner minyak—menyumbang emisi CO₂ signifikan karena efisiensi termal tipikal hanya 60–75% dan tidak fleksibel terhadap dinamika beban.

**High-Temperature Heat Pump (HTHP)** muncul sebagai teknologi disruptif karena mampu mengangkat koefisien performansi (COP) Carnot secara teoritis hingga 4–6 pada rentang 150–250 °C, dengan konsumsi listrik 3–5 kali lebih rendah dibanding panas ekuivalen dari boiler (Xu & Wang, 2024). Namun, operasi *steady-state* HTHP tidak dapat mengikuti fluktuasi beban termal *time-varying* yang khas pada batch reactor, *sterilization*, dan *drying line*. Tanpa *buffer* termal, HTHP akan mengalami *cycling losses* 8–15% per *start-stop* sehingga menurunkan COP musiman rata-rata (SCOP).

Di sinilah **Latent Heat Thermal Energy Storage (LHTES)** mengambil peran strategis. Toloza, Payá & Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengembangkan model numerik transien unit LHTES *shell-and-tube* vertikal pada suhu operasi **±222 °C**—tepat di window HTHP generasi baru (mis. kompresi uap HFC/HFO + cascade CO₂). PCM eutectic *nitrate-based* (misalnya *Solar Salt* 60% NaNO₃–40% KNO₃, T<sub>m</sub> ≈ 221–222 °C) dipilih karena (i) titik leleh presisi di window operasi, (ii) densitas energi volumetrik 250–350 kJ/L, dan (iii) kestabilan termal >1000 siklus.

Permasalahan kritisnya: konduktivitas termal PCM rendah (k<sub>eff</sub> ≈ 0,5–1,0 W/m·K) sehingga *charge/discharge* lambat dan gradien suhu besar. Toloza et al. (2026) menjawab dengan konfigurasi *shell-and-tube* yang kompak, kokoh secara struktural, dan kompatibel dengan *thermal enhancement* berupa *metal wool/foam* atau *fins*. Urgensi ekonominya: setiap 1 °C optimasi keseragaman suhu distribusi dapat menurunkan biaya *levelized cost of stored energy* (LCOS) hingga 0,8–1,5 USD/MWh menurut benchmarking IEA-ECES Annex 32.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien 2D axisymmetric dalam koordinat silindris $(r,z)$ untuk dinding PCM annulus Toloza et al. (2026) mengikuti **enthalpy-porosity formulation** (modifikasi Voller–Prakash, 1987) diimplementasikan dalam bahasa **Modelica** dengan library *ThermodynamicState.Properties* dan *HeatTransfer.Components*. Persamaan konservasi energi ditulis:

$$
\rho \, c_p^{\,\text{eff}} \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left( k^{\,\text{eff}}\, r\, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left( k^{\,\text{eff}}\, \frac{\partial T}{\partial z}\right) + \dot{q}_{\text{source}}(r,z,t)
$$

dengan enthalpi efektif mengandung *latent heat*:

$$
c_p^{\,\text{eff}}(T) \;=\; c_{p,s} + \frac{L}{T_\ell - T_s}\, \mathcal{H}(T-T_s)\,\mathcal{H}(T_\ell-T) + \beta\,\frac{L^2}{\sqrt{\pi}\, T_\ell^2}\,\exp\!\left[-\beta^2\!\left(\frac{T-T_m}{T_\ell}\right)^{2}\right]
$$

di mana $L$ adalah entalpi peleburan latent (J/kg), $T_m$ suhu fasa konstan, dan $\beta$ parameter regularisasi mushy zone.

Untuk region *shell-side* (HTF—Heat Transfer Fluid, mis. termal oil atau air bertekanan), konservasi energi 1D mengikuti pendekatan *effectiveness-NTU* dengan koreksi *bypass* dan *mal-distribution*:

$$
\dot{Q}_{\text{HTF}}(t) = \dot{m}_{f}\, c_{p,f} \bigl( T_{f,\text{in}} - T_{f,\text{out}}(t)\bigr) = \varepsilon\, \dot{m}_{f}\, c_{p,f}\, \bigl| T_{f,\text{in}} - T_{\text{PCM,surf}}(t)\bigr|
$$

Efektivitas *shell-and-tube* dengan *baffles* dihitung melalui korelasi **Delhaye–Duponcheelle** (1998) yang diadopsi Toloza et al.:

$$
\text{Nu} = 0{,}35\,\text{Re}^{0{,}62}\,\text{Pr}^{0{,}4}\left(\frac{\mu}{\mu_w}\right)^{0{,}14},\qquad \text{Re} = \frac{\rho_f\, v_{\text{eq}}\, D_h}{\mu_f}
$$

dengan $D_h$ diameter hidrolik *shell-side*, $v_{\text{eq}}$ kecepatan ekuivalen di antara *baffles*.

Untuk mengkuantifikasi laju *melting front* didefinisikan **bilangan Stefan** dan **bilangan Fourier**:

$$
\text{Ste} = \frac{c_{p,s}\,\Delta T}{L},\qquad \text{Fo} = \frac{\alpha_s\, t}{R_{\text{PCM}}^{2}},\qquad \alpha_s = \frac{k_s}{\rho_s\, c_{p,s}}
$$

dimana $R_{\text{PCM}}$ adalah radius luar efektif PCM. Kriteria desain Toloza et al. (2026) mensyaratkan Fo ≥ 4,0 untuk *complete melting* pada mode *charge* dengan time-budget 4–6 jam (layan malam, *off-peak*).

Konservasi massa-*momentum* pada fase cair dimodelkan melalui persamaan **Darcy–Brinkman–Forchheimer** untuk metal wool enhancement:

$$
\frac{\partial u}{\partial t} + (u\!\cdot\!\nabla)u = -\frac{1}{\rho_\ell}\nabla p + \nu_\ell \nabla^{2}u - \underbrace{\frac{\nu_\ell}{K}u}_\text{viscous drag} - \underbrace{\frac{F_c}{\sqrt{K}}\,|u|\,u}_\text{inertial} + g\,\beta_T\,(T-T_m)\,\mathbf{e}_z
$$

dengan permeabilitas $K$ dan *form-drag* coefficient $F_c$ metal wool yang dikalibrasi dari data eksperimental Zhao et al. (2022, *Applied Thermal Engineering*, DOI: [10.1016/j.applthermaleng.2022.118641](https://doi.org/10.1016/j.applthermaleng.2022.118641))—konsisten dengan nilai tipikal $K = 1{,}25\times10^{-7}$ m² untuk wool baja 5% vol.

Kondisi batas: dinding luar PCM adiabatic-asumsi karena insulasi vacuum-super insulation panel; dinding dalam PCM konveksi-coupled dengan HTF.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur rekayasa sistematis untuk mengintegrasikan unit LHTES Toloza et al. (2026) dengan HTHP di plant mengikuti tujuh tahapan SOP:

**Tahap 1 — Characterisation of PCM & HTF.** Identifikasi *eutectic nitrate* dengan DSC (Differential Scanning Calorimetry) pada laju 5 K/min sesuai ASTM E1269-11; verifikasi $L$, $T_m$, $c_p(T)$, $\mu(T)$, dan stabilitas siklik ≥1000 *thermal cycles* per ASTM D7791-21. HTF HTHP biasanya termal oil (mis. Therminol VP-1, range 12–400 °C) atau air bertekanan 25 bar.

**Tahap 2 — Heat Exchanger Sizing.** Gunakan metode $\varepsilon$-NTU dengan target *discharge power* spesifik:

$$
\dot{Q}_{\text{target}} = \eta_{\text{HTHP}}\,\text{SCOP}_{H}\cdot P_{\text{el}} - \dot{Q}_{\text{loss}}
$$

Untuk unit modul Toloza et al. (2026): tube ID = 0,05 m, tube OD = 0,06 m, panjang efektif 2,5 m, jumlah tube 14, shell ID = 0,32 m.

**Tahap 3 — Discretisation & Model Build.** Mesh 2D axisymmetric dengan $\Delta r \le 0{,}002$ m pada mushy zone, $\Delta z \le 0{,}01$ m; time-step adaptif $\Delta t \in [0{,}1;\, 5,0]$ s memenuhi CFL ≤ 1. Bahasa Modelica melalui *Dymola 2025x* dengan solver *DASSL/CVODE*.

**Tahap 4 — Metal Wool Enhancement.** Pilih rasio pori $\varepsilon = 0{,}92$–0,95 dan fiber diameter 50–100 µm untuk menyeimbangkan kenaikan $k_{\text{eff}}$ PCM hingga 3–8 kali dibanding *pure PCM*.

**Tahap 5 — Validation.** Bandingkan transien $T(r,z,t)$ model dengan data eksperimental prototipe skala pilot (mis. cylindrical test rig 50 kWh) melalui *root-mean-square normalised error*:

$$
\text{NRMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}\!\left(\frac{T_{\text{sim},i}-T_{\text{exp},i}}{T_{\max}-T_{\min}}\right)^{2}}\le 0{,}05
$$

**Tahap 6 — Control Logic Integration.** Pasang sensor T tipe-K Class 1 di 12 titik annulus; PLC (Siemens S7-1500) menjalankan *model predictive control* (horizon 30 menit, sampling 10 s) yang memutuskan switching HTHP ↔ LHTES.

**Tahap 7 — Commissioning & Continuous Monitoring.** Standar acuan: ISO 50015:2014 (energy performance monitoring), IEC 62552 (HTHP safety), dan ASME PTC 53 (LHTES performance test code).

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  HTHP Source │ ──▶ │ LHTES Shell- │ ◀──▶ │ Industrial   │
│  (el.
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
