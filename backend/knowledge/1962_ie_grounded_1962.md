# 1962 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction, SFE) berbasis karbon dioksida (CO₂) telah menjadi teknologi unggulan dalam industri fitofarmaka, nutrasetika, dan kosmetik karena kemampuannya menghasilkan ekstrak berkualitas tinggi tanpa residu pelarut toksik. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa proses ekstraksi minyak kanabis (*Cannabis sativa*) dengan CO₂ superkritis menghadapi tantangan pemodelan yang kompleks, terutama karena geometri unggun (bed) partikel nabati yang bersifat aksisimetrik dan dinamika perpindahan massa-panas yang sangat sensitif terhadap kondisi operasi kritis (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)). Sementara itu, Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* menekankan bahwa tahap *pressurization*, *extraction*, dan *depressurization* memiliki profil termal yang berbeda dan memerlukan model transfer panas terintegrasi untuk memprediksi yield kanabinoid secara akurat (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)).

Konteks industri yang melatarbelakangi riset ini sangat strategis. Pasar global cannabinoid farmaseutal—terutama CBD (*cannabidiol*) dan THC (*tetrahydrocannabinol*)—diproyeksikan menembus USD 56 miliar pada 2026 dengan CAGR >15%, didorong oleh legalisasi medicinal cannabis di lebih dari 50 negara. Namun demikian, yield aktual industri masih berada di kisaran 8–14% berat biomassa untuk varietas ganja medis, jauh di bawah potensi teoritis 18–22%. Gap yield ini sebagian besar disebabkan oleh (i) gradien suhu radial yang tidak terkendali sepanjang unggun, (ii) channeling flow yang menurunkan efektifitas kontak CO₂–biomassa, dan (iii) kesalahan estimasi laju difusi internal pada kelenjar trikom. Obchoei & Limtrakarn (2024) melaporkan bahwa model aksisimetrik 2D mampu mereproduksi pola aliran helical di dalam extractor vessel berdiameter dalam 50–200 mm dengan deviasi <6% terhadap data eksperimental PIV (Particle Image Velocimetry).

Urgensi operasional semakin kuat ketika kita mempertimbangkan konsumsi energi. Tahap kompresi CO₂ dari tekanan atmosferik ke 250 bar membutuhkan 0,8–1,2 kWh per kilogram CO₂, dan kehilangan termal yang tidak terduga selama siklus *pressurization–depressurization* dapat menambah beban energi hingga 18% (Toledo & del Valle, 2023). Oleh karena itu, integrasi model aliran aksisimetrik dengan model transfer panas menjadi kebutuhan strategis bagi engineer proses untuk (a) mendesain vessel dengan aspek rasio optimal, (b) menentukan laju alir massa kritis agar operasi tidak terjerat *flooding*, dan (c) memvalidasi *Good Manufacturing Practice* (GMP) sesuai pedoman *European Medicines Agency* (EMA) dan *Food and Drug Administration* (FDA) untuk produksi API (Active Pharmaceutical Ingredient) kanabinoid. Dengan kata lain, kemampuan memodelkan fenomena transien dan tunak dalam extractor merupakan *core competency* yang membedakan fasilitas produksi kelas dunia dari operator kelas menengah.

## 2. Landasan Teori & Formulasi Matematis

Model yang dibangun oleh Obchoei & Limtrakarn (2024) berakar pada sistem persamaan konservasi fluida kompresibel dalam koordinat silinder $(r, \theta, z)$ yang dilipat menjadi simetri aksisimetrik, yaitu $\partial/\partial\theta = 0$. Sistem ini terdiri atas tiga persamaan diferensial parsial (PDP) kopling: kontinuitas, momentum (Navier–Stokes), dan energi, ditambah satu persamaan transfer massa untuk komponen target (cannabinoid). Persamaan kontinuitas untuk fluida superkritis dengan densitas variabel $\rho(r,z,t)$ adalah:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

dengan $u_r$ dan $u_z$ berturut-turut adalah komponen kecepatan radial dan aksial. Persamaan momentum radial dan aksial-nya adalah:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{\mu}{K}\varepsilon\, u_r$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g - \frac{\mu}{K}\varepsilon\, u_z$$

di mana $\mu$ adalah viskositas dinamik CO₂ superkritis (≈ $6{,}5 \times 10^{-5}$ Pa·s pada 313 K, 25 MPa), $K$ adalah permeabilitas Darcy unggun biomassa, dan $\varepsilon$ porositas unggun (umumnya 0,35–0,45). Term $-\mu/K \cdot u$ adalah *Darcy drag* yang diturunkan oleh Obchoei dan Limtrakarn (2024) untuk menangkap efek hambatan partikel kanabis yang digiling halus.

Persamaan energi yang dikontribusi Toledo & del Valle (2023) melengkapi model dengan konduksi–konveksi radial dan aksial:

$$\rho c_p\left(\frac{\partial T}{\partial t} + u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \Phi_v + \dot{q}_{rxn}$$

dengan $c_p$ kapasitas panas spesifik CO₂ (≈ $2{,}5 \times 10^3$ J/kg·K pada kondisi kritis), $k_{eff}$ konduktivitas efektif unggun (gabungan konduksi padat–fluida), $\Phi_v$ fungsi disipasi viskos, dan $\dot{q}_{rxn}$ sumber panas endotermik desorpsi cannabinoid. Untuk *pressurization stage* (< 0,5 s), Toledo & del Valle (2023) menambahkan model transien dinding:

$$T_w(t) = T_{ext} + (T_{ext} - T_0)\exp\!\left(-\frac{h A_w}{\rho_w c_{p,w} V_w}\,t\right)$$

yang merepresentasikan pelepasan panas dari dinding extractor ke lingkungan. Persamaan keadaan (Equation of State, EOS) yang digunakan untuk menutup sistem adalah Span–Wagner EOS dengan akurasi ±0,05% pada rentang 220–1100 K dan 0,1–50 MPa.

Persamaan transfer massa cannabinoid ke fase fluida mengikuti model *shrinking core* yang dikopling dengan difusi internal:

$$\frac{\partial C_s}{\partial t} = D_{eff}\left[\frac{1}{r_p^2}\frac{\partial}{\partial r_p}\left(r_p^2\frac{\partial C_s}{\partial r_p}\right)\right] - k_s\,C_s$$

dengan $C_s$ konsentrasi cannabinoid dalam padatan, $r_p$ jari-jari partikel kanabis (200–500 μm), $D_{eff}$ diffusivitas efektif (≈ $10^{-11}$ m²/s), dan $k_s$ konstanta desorpsi orde satu (≈ $10^{-3}$ s⁻¹). Kondisi batas pada dinding extractor adalah *no-slip* ($u_r = u_z = 0$) dan *no-flux* untuk massa, sementara pada inlet dan outlet digunakan profil *fully developed flow*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP terstruktur dalam lima fase rekayasa berikut, yang mengintegrasikan model aksisimetrik dan transfer panas:

**Fase 1 – Karakterisasi Bahan Baku.** Biomassa kanabis dikeringkan hingga kadar air <10%, digiling menjadi partikel 300–500 μm, dan diuji kandungan cannabinoid awal ($C_{s,0}$) via HPLC. Nilai $C_{s,0}$ menjadi input awal solver PDE.

**Fase 2 – Penyiapan Extractor Vessel.** Vessel baja stainless 316L dengan diameter dalam $D_v$ = 100 mm dan tinggi efektif $L$ = 600 mm diisi biomassa dengan *tap density* 0,35 g/mL. Sambungan difilter tipe sintered (5 μm) dipasang di inlet bawah dan outlet atas untuk mencegah *fines* terikut.

**Fase 3 – Pressurization Stage.** CO₂ dipompa dari tangki penampung (5 MPa, 278 K) hingga mencapai tekanan operasi target $P_{op}$ = 25 MPa dalam waktu $t_{prs}$ = 90–180 s. Pemanas elektrik preheater (5 kW) menjaga suhu inlet $T_{in}$ pada 313 ± 1 K. Model Toledo & del Valle (2023) digunakan untuk memvalidasi bahwa gradien suhu radial $\Delta T_r < 4$ K agar tidak terjadi *thermal cracking* cannabinoid.

**Fase 4 – Extraction Stage (Tunas, Steady-State).** Setelah tekanan tunak tercapai, CO₂ superkritis dialirkan dengan laju alir massa $\dot{m}_{CO_2}$ = 1,2 kg/jam selama 90–150 menit. Sampling dilakukan setiap 10 menit di separator. Solver COMSOL Multiphysics® 6.2 dengan modul *Transport of Diluted Species* dan *Heat Transfer in Porous Media* dijalankan secara paralel dengan iterasi *Picard* untuk kopling tekanan–kecepatan–suhu. Toleransi konvergensi ditetapkan pada residual relatif $10^{-4}$.

**Fase 5 – Depressurization & Recovery.** Tekanan diturunkan secara gradual (0,3 MPa/s) melewati katup ekspansi ke separator pada 6 MPa, 298 K. Kondensat CO₂ direcycle melalui kompresor kembali ke tangki penampung dengan recovery >95%.

Diagram alir proses mengikuti konfigurasi *semi-continuous closed-loop*: Tangki CO₂ → Kompresor → Preheater → Extractor → Ekspansi Valve → Separator (×2) → Recycle. Standar acuan meliputi ASME BPVC Section VIII (desain vessel bertekanan), PED 2014/68/EU (pasar Eropa), dan cGMP 21 CFR 210–211 (AS).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebuah fasilitas produksi di Colorado (AS) akan mengolah satu batch biomassa kanabis medis varietas *Charlotte's Web* dengan parameter berikut:

| Parameter | Nilai |
|---|---|
| Massa biomassa, $m_b$ | 2,0 kg |
| Konsentrasi CBD awal, $C_{s,0}$ | 12,5% berat |
| Diameter vessel, $D_v$ | 100 mm |
| Tinggi unggun, $L$ | 320 mm |
| Porositas unggun, $\varepsilon$ | 0,40 |
| Diameter partikel rata-rata, $d_p$ | 400 μm |
| Tekanan operasi, $P_{op}$ | 25 MPa |
| Suhu operasi, $T_{op}$ | 313 K |
| Laju alir CO₂, $\dot{m}_{CO_2}$ | 1,2 kg/jam |

**Langkah 1 — Densitas CO₂ superkritis.** Menggunakan Span–Wagner EOS atau pendekatan Span–Wagner简化, pada 313 K dan 25 MPa, $\rho_{CO_2} \approx 786$ kg/m³.

**Langkah 2