# 2922 — Model Aliran Axisymmetric pada Ekstraksi Minyak Kanabis dengan Proses Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi kanabis global telah mengalami transformasi signifikan dalam dua dekade terakhir, didorong oleh legalisasi bertahap di berbagai yurisdiksi dan meningkatnya permintaan akan produk fitofarmaka serta nutrasetikal berbasis cannabinoid (CBD, CBG, THC). Pasar global ekstrak kanabis diproyeksikan mencapai USD 45–55 miliar pada 2030 dengan CAGR 18–22% (Grand View Research, 2024), sehingga membutuhkan teknologi ekstraksi yang tidak hanya efisien secara yield tetapi juga selektif, aman pangan, dan compliant terhadap standar farmasi. Dalam konteks ini, *Supercritical Fluid Extraction* (SFE) dengan CO₂ (SC-CO₂) muncul sebagai *gold standard* karena meninggalkan residu pelarut, bersifat non-toksik, GRAS (*Generally Recognized As Safe*), dan memungkinkan *tuning* selektivitas melalui parameter tekanan serta suhu (Obchoei & Limtrakarn, 2024).

Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* menekankan bahwa optimalisasi proses SC-CO₂ pada extractor berskala pilot hingga komersial masih menghadapi tantangan besar: fenomena hidrodinamika dalam *packed bed* biomassa kanabis bersifat non-ideal karena (i) sifat CO₂ superkritikal yang sangat tergantung pada kondisi operasi di sekitar titik kritisnya ($T_c = 304.13$ K, $P_c = 7.377$ MPa), (ii) perpindahan kalor kompresibel yang signifikan pada tahap *pressurization* dan *depressurization*, dan (iii) mekanisme perpindahan massa internal yang dipengaruhi difusi intra-partikel cannabinoid dari matriks selulosa. Mereka mengajukan model aliran *axisymmetric* (2-D dalam koordinat silinder $(r,z)$ dengan simetri aksial) untuk memprediksi profil kecepatan, tekanan, konsentrasi, dan suhu di dalam vessel ekstraktor secara realistis.

Toledo & del Valle (2023) pada *Journal of Supercritical Fluids* melengkapi analisis ini dengan membangun model perpindahan kalor yang divalidasi terhadap data eksperimental pada ketiga tahap operasi (pressurization, *extraction steady-state*, dan *depressurization*). Mereka menunjukkan bahwa asumsi isotermal yang umum digunakan dalam pemodelan sederhana menyebabkan deviasi prediksi yield hingga 18–25%, terutama pada tahap awal proses ketika dinding vessel masih dingin dan CO₂ mengalami *Joule-Thomson cooling* yang nyata. Integrasi kedua kerangka model ini—aliran *axisymmetric* dan perpindahan kalor transien—menjadi landasan penting bagi rekayasa proses, desain vessel, dan *scale-up* unit SFE-CO₂ untuk kapasitas industri 50–500 L.

Urgensi operasional dari perspektif Teknik Industri meliputi: (1) minimisasi konsumsi CO₂ per satuan yield (rasio *Solvent-to-Feed*, S/F, idealnya 20–40); (2) reduksi waktu siklus batch untuk meningkatkan throughput; (3) konsistensi kualitas produk melalui Certificate of Analysis (CoA) yang memenuhi Pharmacopeia; serta (4) optimasi energi karena kompresi CO₂ ke tekanan 25–30 MPa membutuhkan 0.8–1.2 kWh/kg CO₂. Tanpa model prediktif yang valid, keputusan kapasitas dan biaya operasional sangat tidak pasti, terutama pada fase *commissioning* pabrik baru.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengatur Aliran *Axisymmetric*

Dalam geometri silinder dengan simetri aksial ($\partial/\partial\theta = 0$), Obchoei & Limtrakarn (2024) menyelesaikan sistem Navier-Stokes kompresibel berikut:

**Konservasi massa (continuity):**
$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (\rho u_r r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

**Konservasi momentum radial:**
$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] + \rho g_r$$

**Konservasi momentum aksial:**
$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{150\mu(1-\varepsilon)^2}{d_p^2 \varepsilon^3} u_z - \frac{1.75\rho(1-\varepsilon)}{d_p \varepsilon^3} |u_z| u_z$$

Term terakhir pada persamaan momentum aksial adalah **Forchheimer-Ergun** untuk resistansi *packed bed* biomassa, dengan $\varepsilon$ porositas bed (umumnya 0.35–0.45 untuk ground cannabis) dan $d_p$ diameter partikel efektif (0.5–2 mm).

### 2.2 Persamaan Energi (Model Toledo & del Valle, 2023)

Untuk menggambarkan efek Joule-Thomson dan perpindahan kalor dengan dinding vessel:

$$\rho C_p\left(\frac{\partial T}{\partial t} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + k_{eff}\frac{\partial^2 T}{\partial z^2} + \rho C_p \mu_{JT}\left(\frac{\partial p}{\partial t} + u_z\frac{\partial p}{\partial z}\right)$$

dengan $k_{eff} = k_{CO_2} + k_{disp}$ adalah konduktivitas termal efektif (Pechi-Kague model) dan $\mu_{JT}$ koefisien Joule-Thomson CO₂ superkritikal (~10–12 K/MPa pada 308–318 K, 10–25 MPa).

### 2.3 Persamaan Transport Solut (Cannabinoid)

$$\varepsilon \frac{\partial c}{\partial t} + u_z \frac{\partial c}{\partial z} = D_{ax}\frac{\partial^2 c}{\partial z^2} + \frac{1}{r}\frac{\partial}{\partial r}\left(r D_{eff}\frac{\partial c}{\partial r}\right) + J_{int}$$

di mana fluks internal mengikuti model *shrinking core* atau linear driving force (LDF):
$$J_{int} = k_s a_s (c^* - c)$$

dengan $k_s$ koefisien transfer massa eksternal dan $c^*$ kelarutan equilibrium cannabinoid dalam SC-CO₂, yang dimodelkan dengan persamaan Chrastil (1982):

$$\ln c^* = k_{chr} \ln \rho + \frac{a}{T} + b$$

Untuk CBD pada $T = 313$ K dan $P = 25$ MPa, $\rho_{CO_2} \approx 830$ kg/m³, sehingga $c^*_{CBD} \approx 8.5$ kg/m³ CO₂.

### 2.4 Persamaan State — Peng-Robinson EOS

Untuk densitas CO₂ di daerah superkritikal:
$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$
dengan $a(T) = 0.45724 \frac{R^2 T_c^2}{P_c}\alpha(T)$ dan $b = 0.07780 \frac{RT_c}{P_c}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses SFE-CO₂ Industri

Berikut adalah SOP ringkas berbasis integrasi Obchoei-Limtrakarn (2024) dan Toledo-del Valle (2023):

**Pra-ekstraksi (0–30 menit):**
1. Preparasi biomassa: pengeringan bunga kanabis hingga RH <10%, penghalusan (*grinding*) hingga $d_p$ = 0.8–1.5 mm.
2. Pengisian vessel (auto-clave) dengan densitas *bulk* $\rho_b = 250$–350 kg/m³.
3. *Leak test* dengan N₂ pada 35 MPa selama 10 menit (ASME BPVC Section VIII).
4. Pemvakuman vessel hingga 0.05 MPa absolut untuk menghilangkan udara lembap.

**Tahap Pressurization (10–25 menit):**
- Pemompaan CO₂ dari storage (~$P_0$ = 5.5 MPa) ke tekanan operasi $P_{op}$ = 25 MPa menggunakan *diaphragm compressor* atau *piston pump* dengan CO₂ pendingin (*cold pump head* pada $T \leq 278$ K).
- Kontrol laju alir masuk $Q_{in}$ = 2–5 kg/menit untuk menjaga $\Delta T$ dinding vessel $< 8$ K per menit (mencegah *thermal shock* pada pengelasan dan *flange*).

**Tahap Ekstraksi Steady-State (60–180 menit):**
- Pemeliharaan $T = 313 \pm 1$ K, $P = 25 \pm 0.5$ MPa.
- CO₂ superkritikal mengalir secara *down-flow* atau *up-flow* dengan superficial velocity $u_s$ = 0.5–2 mm/s (menghindari *channeling* dan *fines migration*).
- Pemisahan pada separator (*depressurization* ke 5–6 MPa, $T = 303$ K) sehingga cannabinoid mengendap, CO₂ direcycle.

**Tahap Depressurization (15–30 menit):**
- *Controlled depressurization* dengan orifice *back-pressure regulator* agar cannabinoid tidak ikut terbawa.
- CO₂ direcycle ke *buffer tank* melalui compressor pendingin.

**Pasca-ekstraksi:**
- *Winterization* (pelarutan dalam etanol, pemisahan lilin pada $T = 233$ K).
- *Decarboxylation* (opsional, 393 K selama 60 menit untuk konversi CBDA→CBD).

### 3.2 Standardisasi dan Kepatuhan

- ASTM D8340 — Standard Practice for SC-CO₂ Extraction.
- USP/NF ⟨173⟩ untuk kontrol pelarut residu.
- GMP EU 2017/1572 untuk fasilitas farmasi.
- ASME BPVC Section VIII Div. 1 untuk desain pressure vessel pada tekanan desain $P_{design} = 1.1 \times P_{op}$ dengan safety valve set pada $P_{MAWP} = 1.05 \times P_{op}$.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit Ekstraktor

Misalkan vessel ekstraktor memiliki dimensi:
- Diameter dalam $D$ = 0.30 m, tinggi bed $H$ = 1.20 m
- Volume aktif $V$ = $\pi(D/2)^2 H = 0.0848$ m³ (