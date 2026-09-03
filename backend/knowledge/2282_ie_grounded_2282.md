# 2282 — Pemodelan Aliran Aksisimetrik pada Proses Ekstraksi Minyak Kanabis dengan Karbon Dioksida Superkritis (SFE-CO₂)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol saat ini tengah mengalami transformasi signifikan, didorong oleh meningkatnya permintaan global terhadap produk kanabinoid untuk keperluan farmasi, nutraceutical, dan kosmetik. Di antara berbagai teknologi ekstraksi yang tersedia, *Supercritical Fluid Extraction* dengan CO₂ (SFE-CO₂) muncul sebagai *gold standard* karena sifatnya yang non-toksik, tidak mudah terbakar, dapat diregenerasi, dan menghasilkan produk bebas residu pelarut (Obchoei & Limtrakarn, 2024). Namun, optimalisasi proses ini menghadapi tantangan multidimensi: efisiensi energi pada tahap *pressurization*, kualitas difusivitas massa selama kontak fluida-padatan, serta pemulihan yield pada tahap *depressurization*.

Kondisi operasional SFE-CO₂ khas berada pada rentang tekanan $31{,}1~\text{MPa} \leq P \leq 35~\text{MPa}$ dan suhu $313~\text{K} \leq T \leq 343~\text{K}$, yaitu di atas titik kritis CO₂ ($T_c = 304{,}13~\text{K}$, $P_c = 7{,}377~\text{MPa}$). Dalam kondisi ini, CO₂ memiliki densitas mendekati fase cair ($600$–$900~\text{kg/m}^3$) namun viskositas rendah seperti gas ($10^{-4}~\text{Pa}\cdot\text{s}$), menjadikannya pelarut selektif yang ideal untuk cannabinoid seperti Δ⁹-THC dan CBD (Toledo & del Valle, 2023). Permasalahan fundamental yang diangkat oleh Obchoei dan Limtrakarn (2024) adalah bagaimana karakteristik aliran fluida superkritis dalam geometri ekstraktor (*extractor vessel*) yang pada dasarnya berbentuk silinder — dengan demikian layak dimodelkan secara **aksisimetrik** — memengaruhi laju perpindahan massa minyak kanabis dari matriks padat ke fase fluida.

Aspek termodinamika dan perpindahan panas tidak dapat diabaikan. Toledo dan del Valle (2023) dalam studi validasi model termalnya menunjukkan bahwa *pressurization stage* sangat sensitif terhadap laju perpindahan panas konvektif dan resistansi termal dinding bejana, yang berdampak langsung pada waktu pencapaian kondisi tunak (*steady-state*) dan konsumsi energi spesifik. Lebih lanjut, profil aksisimetrik kecepatan dan tekanan dalam *packed bed* biomaterial kanabis menentukan jalur aliran, distribusi tegangan geser di dinding, dan *channeling effect* yang menjadi penyebab utama degradasi yield hingga $15\%$–$25\%$ pada sistem yang tidak optimal.

Dari perspektif industri, unit SFE-CO₂ komersial dengan kapasitas $100$–$1000~\text{L}$ memiliki investasi modal awal mencapai USD $500{,}000$–$2{,}500{,}000$ per unit (Permana et al., 2022). Pemodelan aksisimetrik yang akurat memungkinkan *scale-up* yang andal dari laboratorium ke produksi, menekan biaya *trial-and-error* dan memperpendek *time-to-market*. Urgensi ini semakin relevan di tengah liberalisasi regulasi kanabis medis di berbagai yurisdiksi seperti Kanada, Jerman, Thailand, dan beberapa negara bagian Amerika Serikat.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan aliran aksisimetrik yang diajukan Obchoei dan Limtrakarn (2024) mengintegrasikan beberapa persamaan konservasi fundamental dalam koordinat silinder $(r, z)$ dengan asumsi aliran *incompressible steady-state* di sepanjang sumbu rotasi. Asumsi ini valid secara teknis karena rasio aspek vessel $L/D \gg 1$ dan profil fluida dianggap tidak bervariasi terhadap sudut keliling $\theta$.

### 2.1 Persamaan Kontinuitas

Untuk aliran aksisimetrik tunak, persamaan kontinuitas dalam koordinat silinder disederhanakan menjadi:

$$\frac{1}{r}\frac{\partial (r u_r)}{\partial r} + \frac{\partial u_z}{\partial z} = 0$$

dengan $u_r$ dan $u_z$ masing-masing adalah komponen kecepatan radial dan aksial. Bentuk konservatif ini memastikan kekekalan massa fluida CO₂ superkritis yang melintasi packed bed biomassa.

### 2.2 Persamaan Momentum (Navier-Stokes Aksisimetrik)

Komponen radial:

$$\rho_{CO_2}\left(u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{\mu u_r}{r^2} + S_r$$

Komponen aksial:

$$\rho_{CO_2}\left(u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho_{CO_2} g + S_z$$

dengan $\rho_{CO_2}$ densitas fluida superkritis yang sangat sensitif terhadap suhu dan tekanan menurut persamaan keadaan Span-Wagner, $\mu$ viskositas dinamik, $p$ tekanan, serta $S_r$ dan $S_z$ adalah *source term* dari kehilangan momentum akibat gesekan dengan partikel biomassa (Forchheimer-extended Darcy).

### 2.3 Persamaan Forchheimer-Brinkman untuk Packed Bed

Karena CO₂ mengalir melalui media berpori biomassa kanabis, kehilangan tekanan dimodelkan dengan persamaan Forchheimer:

$$-\frac{\partial p}{\partial z} = \frac{\mu}{K}u_z + \beta \rho_{CO_2} u_z^2$$

dengan permeabilitas intrinsik $K$ dan koefisien inersia $\beta$. Untuk biomassa kanabis kering, nilai tipikal $K \approx 10^{-10}~\text{m}^2$ dan $\beta \approx 1{,}2 \times 10^4~\text{m}^{-1}$ (Obchoei & Limtrakarn, 2024).

### 2.4 Persamaan Perpindahan Massa (Solute Transfer)

Laju desorpsi minyak kanabis dari matriks padat ke fase superkritis dimodelkan dengan persamaan konveksi-difusi:

$$\frac{\partial C}{\partial t} + (u_z \cdot \nabla C) = D_{eff}\nabla^2 C + k_L a_s(C^* - C)$$

dengan $C$ konsentrasi solute dalam fase fluida, $D_{eff}$ koefisien difusi efektif, $k_L$ koefisien perpindahan massa sisi fluida, $a_s$ luas permukaan spesifik partikel, dan $C^*$ konsentrasi keseimbangan (*equilibrium*) yang ditentukan oleh solubilitas cannabinoid dalam CO₂ superkritis.

### 2.5 Model Perpindahan Panas (Pendukung: Toledo & del Valle, 2023)

Konservasi energi untuk dinding vessel selama tahap *pressurization*:

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = \frac{k_w}{\delta_w}(T_{CO_2} - T_w) - h_{ext}(T_w - T_{amb})$$

dengan $\rho_w c_{p,w}$ kapasitas panas dinding, $k_w$ konduktivitas termal, $\delta_w$ tebal dinding, dan $h_{ext}$ koefisien konveksi eksternal. Model ini mengidentifikasi *thermal lag* yang signifikan — suhu dinding dapat tertinggal $5$–$15~\text{K}$ di belakang suhu fluida, mempengaruhi yield hingga $8\%$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model aksisimetrik Obchoei & Limtrakarn (2024) mengikuti SOP rekayasa yang sistematis:

**Tahap 1 — Karakterisasi Bahan Baku**
- Lakukan penentuan kadar air biomassa kanabis (target: $<10\%$ wb) untuk mencegah terbentuknya fase air yang menghambat difusi.
- Ukur distribusi ukuran partikel melalui *sieve analysis* (target: $0{,}5$–$2{,}0~\text{mm}$) dan tetapkan porositas packed bed $\varepsilon \approx 0{,}4$.
- Analisis kadar cannabinoid awal melalui HPLC.

**Tahap 2 — Validasi Geometri dan Diskretisasi CFD**
- Bangun geometri aksisimetrik 2D vessel $(r,z)$ menggunakan pre-processor (ANSYS ICEM CFD atau Gambit).
- Lakukan *mesh independence study* dengan minimum $50{,}000$ elemen kuadrilateral dan gradien ukuran pada inlet/outlet.
- Tetapkan *boundary conditions*:
  - *Inlet*: $u_z = u_{in}$ (典型 $0{,}001$–$0{,}005~\text{m/s}$), $T = T_{in}$, $C = 0$.
  - *Outlet*: $\partial p/\partial z = 0$ (*pressure outlet*).
  - *Wall*: *no-slip* ($u_r = u_z = 0$), *adiabatic* atau *coupled thermal* sesuai model Toledo & del Valle (2023).

**Tahap 3 — Solving dengan Algoritma SIMPLE**
- Gunakan solver berbasis tekanan (*pressure-based*) dengan skema coupling SIMPLE atau PISO.
- Konvergensi tercapai ketika residual massa, momentum, dan energi $< 10^{-6}$.

**Tahap 4 — Kalibrasi dan Verifikasi**
- Bandingkan profil kecepatan dan tekanan hasil simulasi dengan data eksperimental (pressure transducer di 5 lokasi aksial vessel).
- Validasi yield cannabinoid dengan HPLC hasil ekstraksi.

**Tahap 5 — Scale-Up dan Optimasi**
- Gunakan *Design of Experiments* (DoE) respons permukaan untuk optimasi simultan $P$, $T$, laju alir CO₂, dan waktu ekstraksi.
- Validasi melalui pilot plant sebelum implementasi komersial.

Diagram alir proses rekayasa mengikuti urutan: **Karakterisasi → Discretization → Solving → Validasi → Optimasi → Implementasi**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Ekstraktor komersial skala menengah dengan spesifikasi berikut:

| Parameter | Nilai |
|-----------|-------|
| Diameter vessel $D$ | $0{,}20~\text{m}$ |
| Tinggi packed bed $L$ | $1{,}0~\text{m}$ |
| Tekanan operasi $P$ | $30~\text{MPa}$ |
| Suhu operasi $T$ | $333~\text{K}$ |
| Laju alir massa CO₂ $\dot{m}$ | $0{,}025~\text{kg/s}$ |
| Porositas bed $\varepsilon$ | $0{,}40$ |
| Permeabilitas $K$ | $1{,}2 \times 10^{-10}~\text{m}^2$ |
| Koefisien Forchheimer $\beta$ | $1{,}4 \times 10^4~\text{m}^{-1}$ |

### Langkah 1: Penentuan Properti CO₂ Superkritis

Menggunakan persamaan keadaan Span-Wagner pada $P = 30~\text{MPa}$, $T = 333~\text{K}$:
- Densitas: $\rho_{CO_2} \approx 830~\text{kg/m}^3$
- Viskositas dinamik: $\mu_{CO_2} \approx 6{,}5 \times 10^{-5}~\text{Pa}\cdot\text{s}$

### Langkah 2: Kecepatan Superfisial di Inlet

Luas penampang vessel: $A = \pi D^2/4 = \pi (0{,}20)^2/4 = 0{,}0314~\text{m}^2$

Kecepatan superfisial (interstitial): $u_{sup} = \dot{m}/(\rho_{CO_2} \cdot A) = 0{,}025/(830 \times 0{,}0314) = 9{,}6 \times 10^{-4}~\text{m/s}$

Kecepatan interstitial di dalam packed bed: $u_z = u_{sup}/\varepsilon = 9{,}6 \times 10^{-4}/0{,}40 = 2{,}4 \times 10^{-3}~\text{m/s}$

### Langkah 3: Penurunan Tekanan (Forchheimer)

$$\Delta p = \int_0^L \left(\frac{\mu_{CO_2}}{K}u_z + \beta \rho_{CO_2} u_z^2\right) dz$$

$$\Delta p = \left[\frac{6{,}5 \times 10^{-5}}{1{,}2 \times 10^{-10}}(2{,}4 \times 10^{-3}) + 1{,}4 \times 10^4 \times 830 \times (2{,}4 \times 10^{-3})^2\right] \times 1{,}0$$

$$\Delta p = \left[1{,}30 \times 10^6 + 7{,}0 \times 10^4\right] \times 1{,}0 \approx 1