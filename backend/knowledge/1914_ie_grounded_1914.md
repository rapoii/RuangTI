# 1914 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (Cannabis sativa L.) menggunakan karbon dioksida superkritis (SC-CO₂) merupakan salah satu Unit Operasi Rekayasa Kimia-Fisika paling kritis dalam industri fitofarmaka dan nutrasetikal modern. Sejak deregulasi bertahap produk kanabinoid di berbagai yurisdiksi — termasuk persetujuan farmakope untuk produk berbasis cannabidiol (CBD) dan tetrahydrocannabinol (THC) — permintaan global terhadap ekstrak kanabis berkualitas farmasi (API-grade) melonjak signifikan. Obchoei dan Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) menekankan bahwa perancangan ekstraktor SC-CO₂ tidak cukup hanya didasarkan pada data empiris laboratorium; diperlukan model aliran aksisimetrik yang mampu memprediksi profil konsentrasi, tekanan, dan temperatur secara spasial di dalam bejana bertekanan tinggi (high-pressure vessel).

Urgensi industri dari pemodelan ini bersifat multi-dimensi. Pertama, secara *teknis*, fenomena perpindahan massa di dalam matriks padat biji/bunga kanabis dikontrol oleh difusi internal (intra-partikel) dan konveksi paksa fluida superkritis di ruang antar-partikel (inter-partikel). Karakteristik solvasi SC-CO₂ sangat sensitif terhadap kondisi operasi di sekitar titik kritisnya (T_c = 304,13 K; P_c = 7,38 MPa). Kedua, secara *ekonomis*, biaya modal (CAPEX) ekstraktor industri berskala 100–1000 L berkisar USD 250.000–1.500.000; kesalahan desain 10% saja pada prediksi yield dapat menyebabkan kerugian jutaan dolar per tahun pada fasilitas produksi. Ketiga, secara *regulatoris*, pedoman GMP (Good Manufacturing Practice) dari FDA, EMA, dan BPOM mensyaratkan *process validation* berbasis model matematis yang terdokumentasi (Process Analytical Technology — PAT).

Toledo dan del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) melengkapi landasan ini dengan menunjukkan bahwa tahap *pressurization*, *extraction*, dan *depressurization* memiliki dinamika termal yang berbeda dan saling memengaruhi. Pengabaian efek kalor terhadap densitas SC-CO₂ dapat menyebabkan error prediksi yield hingga 25% menurut validasi eksperimental mereka. Integrasi kedua perspektif — pemodelan aliran aksisimetrik Obchoei-Limtrakarn dan dinamika termal Toledo-del Valle — menjadi kerangka berpikir utama modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri dan Asumsi Aksisimetrik

Ekstraktor SC-CO₂ berbentuk silinder vertikal dengan panjang L dan diameter internal D_i. Model disederhanakan menjadi domain 2-D aksisimetrik (r, z) karena aliran dan gradien konsentrasi identik di seluruh arah keliling (θ). Persamaan governing ditulis dalam koordinat silinder dengan r ∈ [0, R] dan z ∈ [0, L].

### 2.2 Persamaan Kontinuitas dan Momentum (Brinkman–Extended Darcy)

Untuk media berpori yang ditempati padatan kanabis, persamaan momentum yang digunakan adalah bentuk *Brinkman–Extended Darcy*:

$$\frac{\rho_{f}}{\varepsilon}\left(\frac{\partial \vec{v}}{\partial t} + \frac{1}{\varepsilon}(\vec{v}\cdot\nabla)\vec{v}\right) = -\nabla P + \mu_{f}\nabla^{2}\vec{v} - \frac{\mu_{f}}{K}\vec{v} + \rho_{f}\vec{g}$$

di mana $\rho_f$ adalah densitas fluida (fungsi P, T), $\varepsilon$ porositas unggun (typical 0,35–0,45), $\mu_f$ viskositas dinamis SC-CO₂, dan $K$ permeabilitas intrinsik (m²) yang diestimasi dengan persamaan Kozeny–Carman:

$$K = \frac{d_p^{2}\,\varepsilon^{3}}{150(1-\varepsilon)^{2}}$$

dengan $d_p$ diameter ekuivalen partikel kanabis (typical 0,5–2,0 mm).

### 2.3 Persamaan Energi (Coupled Heat Transfer)

Model Toledo-del Valle (2023) memperkenalkan persamaan energi dua-fase (padat–fluida) dengan sumber kalor dari ekspansi Joule–Thomson pada tahap *pressurization*:

$$\left(\rho c_p\right)_{eff}\frac{\partial T}{\partial t} + \rho_f c_{p,f}\,\vec{v}\cdot\nabla T = \nabla\cdot\left(k_{eff}\nabla T\right) + \dot{q}_{JT} - \dot{q}_{loss}$$

dengan konduktivitas efektif $\left(\rho c_p\right)_{eff} = (1-\varepsilon)\rho_s c_{p,s} + \varepsilon\rho_f c_{p,f}$ dan panas Joule–Thomson $\dot{q}_{JT} = -\rho_f c_{p,f}\,\mu_{JT}\,(\partial P/\partial t)$ dengan $\mu_{JT}$ koefisien Joule–Thomson SC-CO₂ (sekitar 1,0–1,5 K·MPa⁻¹ pada 313 K).

### 2.4 Persamaan Perpindahan Massa (Linear Driving Force — LDF)

Untuk menangkap kinetika pelarutan kanabinoid dari matriks padat ke fluida superkritis, digunakan model *Linear Driving Force* (LDF):

$$\frac{\partial q}{\partial t} = k_f a_p\left(q^{*} - q\right)$$

dengan $q$ konsentrasi solute dalam fase padat (kg solute/kg padatan), $q^{*}$ konsentrasi kesetimbangan, dan $k_f a_p$ koefisien transfer massa volumetrik (s⁻¹). Solubilitas kesetimbangan $q^{*}$ dihitung dengan persamaan *Chrastil*:

$$q^{*} = \rho_f^{k}\,\exp\left(\frac{a}{T} + b\right)$$

dengan parameter empiris $k$, $a$, $b$ yang fitting terhadap data eksperimental (untuk kanabinoid pada 308–333 K: $k \approx 2,4$, $a \approx -6500$ K, $b \approx -28$).

### 2.5 Persamaan Konstitutif dan Sifat Termodinamika

Densitas SC-CO₂ dihitung dengan persamaan keadaan *Peng–Robinson* (1976):

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T)$ dan $b$ yang bergantung pada temperatur kritis, faktor asimetris acentrik $\omega = 0{,}225$, dan aturan pencampuran van der Waals.

### 2.6 Yield Ekstraksi Kumulatif

Yield total pada waktu t dihitung dari integrasi fluks keluar di outlet:

$$Y(t) = \frac{1}{m_s}\int_0^t \dot{m}_{CO_2}(\tau)\,x_{out}(\tau)\,d\tau$$

di mana $m_s$ massa padatan umpan, $\dot{m}_{CO_2}$ laju alir massa pelarut, dan $x_{out}$ fraksi massa solute di outlet.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP 9-tahap yang distandarisasi untuk fasilitas SC-CO₂ kelas farmasi:

**Tahap 1 — Pre-Processing Material.** Bonggol/bunga kanabis dikeringkan hingga kadar air <10% (basis basah), digiling hingga ukuran partikel 0,5–1,5 mm. Moisture diuji dengan gravimetri (USP <921>).

**Tahap 2 — Charging Ekstraktor.** Padatan dimasukkan ke vessel dengan memperhatikan *bulk density* (typical 350–500 kg/m³) untuk mencegah channeling.

**Tahap 3 — Pressurization** (Toledo & del Valle, 2023). Sistem dinaikkan tekanannya dari 0,1 MPa ke 25–30 MPa secara gradual (rate 0,5–1,0 MPa/menit) untuk menghindari gradien termal ekstrem yang dapat merusak matriks. Suhu dijaga pada 313–333 K melalui jaket pemanas dengan PID controller.

**Tahap 4 — Static Soaking (opsional).** Padatan didiamkan 10–30 menit dalam SC-CO₂ untuk equilibrasi awal; fase ini sangat penting untuk model LDF karena mendekati kondisi $q \rightarrow q^{*}$.

**Tahap 5 — Dynamic Extraction.** SC-CO₂ dipompakan (rate 0,5–5 kg CO₂/kg umpan/jam) secara co-current atau counter-current. Sampling outlet dilakukan setiap 5 menit untuk kurva breakthrough.

**Tahap 6 — Separation Cascade.** Larutan SC-CO₂ + solute dilewatkan ke separator 1 (P = 8–10 MPa) dan separator 2 (P = 1,5–2,0 MPa) untuk fraksionasi kanabinoid.

**Tahap 7 — Depressurization.** Tekanan diturunkan secara terkontrol (rate 0,3–0,5 MPa/menit) sambil mempertahankan suhu untuk mencegah degradasi termal THC → CBN.

**Tahap 8 — Recovery CO₂.** ~95–98% CO₂ dicairkan dan direcycle (CRF — CO₂ Recovery Factor).

**Tahap 9 — Post-Processing & QC.** Ekstrak diuji via HPLC untuk profil cannabinoid, ICP-MS untuk logam berat, dan GC-MS untuk residual solvent (harus <500 ppm sesuai ICH Q3C).

Diagram alir proses mengikuti standar ASME BPE-2019 untuk sanitasi dan EHEDG Doc. 8 untuk hygienic design.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Studi Kasus: Ekstraktor Skala Pilot 10 L)

| Parameter | Nilai | Satuan |
|---|---|---|
| Diameter vessel $D_i$ | 0,15 | m |
| Panjang unggun $L$ | 0,60 | m |
| Porositas $\varepsilon$ | 0,40 | – |
| Diameter partikel $d_p$ | 1,0×10⁻³ | m |
| Tekanan operasi $P$ | 25 | MPa |
| Temperatur operasi $T$ | 323 | K |
| Laju alir $\dot{m}_{CO_2}$ | 1,2 | kg/jam |
| Massa umpan $m_s$ | 2,5 | kg |
| Yield target | 15 | % |

### 4.2 Perhitungan Densitas dan Viskositas SC-CO₂

Pada P = 25 MPa, T = 323 K, dari tabel NIST dan fitting Span–Wagner (2000):
$$\rho_f \approx 830\ \text{kg/m}^{3},\quad \mu_f \approx 7{,}8 \times 10^{-5}\ \text{Pa·s},\quad c_{p,f} \approx 1850\ \text{J/(kg·K)}$$

### 4.3 Perhitungan Permeabilitas (Kozeny–Carman)

$$K = \frac{(10^{-3})^{2}\,(0{,}40)^{3}}{150\,(1-0{,}40)^{2}} = \frac{1{,}0\times10^{-6}\times 0{,}064}{150\times 0{,}36} = 1{,}19\times10^{-9}\ \text{m}^{2}$$

### 4.4 Perhitungan Bilangan Reynolds Partikel

$$Re_p = \frac{\rho_f\,v_s\,d_p}{\mu_f} = \frac{830 \times 0{,}0042 \times 10^{-3}}{7{,}8\times10^{-5}} \approx 44{,}7$$

(aliran laminar–transisi, sesuai asumsi Brinkman)

###