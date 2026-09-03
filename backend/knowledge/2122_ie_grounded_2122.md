# 2122 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani—khususnya untuk produksi minyak kanabis (cannabis oil) kaya akan kanabinoid seperti tetrahidrokanabinol (THC), kanabidiol (CBD), dan terpenoid bioaktif—telah mengalami transformasi teknologi signifikan dalam dua dekade terakhir. Metode konvensional berbasis pelarut organik (misalnya etanol, heksana, atau kloroform) semakin ditinggalkan karena isu toksikologi residu, regulasi keamanan pangan, serta ketidakmampuan memenuhi standar *Good Manufacturing Practice* (GMP) farmasi. Sebagai gantinya, ekstraksi dengan fluida superkritis CO₂ (Sc-CO₂) muncul sebagai teknologi *green process* yang memenuhi prinsip *Process Intensification* (PI) dalam rekayasa kimia dan teknik industri. Menurut Obchoei & Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)), pada kondisi tekanan 200–350 bar dan suhu 35–60 °C, CO₂ berada di fase superkritis dengan densitas ~0,7–0,9 g/cm³ sehingga memiliki daya solvasi selektif tinggi terhadap senyawa non-polar dan sedikit polar, sekaligus mempertahankan keamanan GRAS (*Generally Recognized As Safe*).

Urgensi ekonomi dari teknologi ini sangat nyata: pasar global ekstrak kanabis legal diproyeksikan melampaui USD 23 miliar pada 2030, dan efisiensi ekstraksi—yang dikuantifikasi sebagai *recovery yield* (rasio massa kanabinoid terekstraksi terhadap massa teoritis dalam biomassa)—menjadi *Key Performance Indicator* (KPI) utama bagi operator. Obchoei & Limtrakarn (2024) menekankan bahwa model aliran aksisimetrik dua dimensi pada ekstraktor berbentuk tabung silinder sangat relevan karena reaktor industri aktual didesain sebagai bejana bertekanan tinggi (*high-pressure vessel*) dengan geometri axisymmetric, di mana gradien radial konsentrasi dan suhu menentukan *throughput* sistem. Di sisi paralel, Toledo & del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menyoroti bahwa proses Sc-CO₂ terdiri atas tiga tahap kritis: *pressurization* (kompresi CO₂ hingga tekanan operasi), *extraction* (interaksi solvasi antara CO₂ superkritis dan matriks padat biomassa), serta *depressurization* (ekspansi ke separator untuk回收 solute). Setiap tahap memiliki dinamika termal yang kompleks—efek Joule–Thomson, panas kompresi, dan kalor pelarutan—yang jika tidak dimodelkan dengan akurat akan menyebabkan kesalahan prediksi *yield* hingga 15–20% dan pemborosan energi 8–12% per siklus produksi. Kedua literatur ini menjadi fondasi bagi perancangan SOP industri dan optimalisasi proses berbasis Computational Fluid Dynamics (CFD) yang menjadi perhatian utama modul 2122.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan proses ekstraksi Sc-CO₂ dalam modul ini mengintegrasikan tiga persamaan konservasi fundamental: kontinuitas, momentum (Navier–Stokes), dan energi, ditambah persamaan transfer massa untuk solute di dalam medium berpori biomassa kanabis.

### 2.1 Persamaan Kontinuitas (Hukum Kekekalan Massa)

Untuk aliran fluida superkritis dengan densitas variabel $\rho_{CO_2}(T,P)$, persamaan kontinuitas dalam koordinat silinder-aksisimetrik $(r, z)$ adalah:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) + \frac{\partial}{\partial z}(\rho u_z) = 0$$

di mana $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial. Pada kondisi tunak (*steady-state*), $\partial \rho/\partial t = 0$.

### 2.2 Persamaan Momentum (Navier–Stokes) dengan Model Pori

Karena biomassa kanabis yang digiling membentuk matriks berpori dengan porositas $\varepsilon$ dan permeabilitas intrinsik $\kappa$, Obchoei & Limtrakarn (2024) mengadopsi persamaan Brinkman–Forchheimer yang dimodifikasi:

$$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla P + \mu_{eff} \nabla^2 \mathbf{u} + \frac{\mu}{\kappa}\mathbf{u} - \frac{1.75}{\sqrt{150\,\kappa^3 \varepsilon^3}}\rho |\mathbf{u}|\mathbf{u}$$

di mana $\mu_{eff}$ adalah viskositas efektif (termasuk turbulensi), dan suku terakhir adalah hambatan inersial Forchheimer. Untuk aliran turbulen di zona bebas, digunakan model $k$–$\varepsilon$ standar:

$$\frac{\partial (\rho k)}{\partial t} + \frac{\partial (\rho k u_i)}{\partial x_i} = \frac{\partial}{\partial x_j}\left[\left(\mu + \frac{\mu_t}{\sigma_k}\right)\frac{\partial k}{\partial x_j}\right] + G_k - \rho \varepsilon$$

dengan $\mu_t = C_\mu \rho k^2 / \varepsilon$, $C_\mu = 0{,}09$, dan $G_k$ adalah generasi energi kinetik turbulen.

### 2.3 Persamaan Energi dengan Sumber Kalor Proses

Berdasarkan Toledo & del Valle (2023), tahap *pressurization* menghasilkan kalor kompresi adabatik $Q_{comp}$ yang menaikkan suhu CO₂, sedangkan tahap *extraction* melepaskan kalor pelarutan (*heat of solution*) $\Delta H_{sol}$. Persamaan energi yang diselesaikan adalah:

$$\rho C_p \left( \frac{\partial T}{\partial t} + \mathbf{u} \cdot \nabla T \right) = \nabla \cdot (k_{eff} \nabla T) + \dot{q}_{process}$$

dengan $\dot{q}_{process} = \dot{q}_{comp} + \dot{q}_{diss}$ yang merepresentasikan sumber kalor volumetrik. Efek Joule–Thomson saat *depressurization* dimodelkan sebagai:

$$\mu_{JT} = \left( \frac{\partial T}{\partial P} \right)_H = \frac{1}{C_p}\left[T \left(\frac{\partial V}{\partial T}\right)_P - V\right]$$

di mana $V$ adalah volume molar CO₂.

### 2.4 Persamaan Transfer Massa Solute

Konsentrasi solute (kanabinoid) $C_s$ di fase superkritis mengikuti model konveksi-difusi:

$$\varepsilon \frac{\partial C_s}{\partial t} + \mathbf{u} \cdot \nabla C_s = \nabla \cdot (D_{eff} \nabla C_s) + R_{ext}$$

di mana $R_{ext}$ adalah laju desorpsi dari padatan, dimodelkan dengan pendekatan *shrinking core* atau *broken-and-intact-cells* (BIC) dari Martinez et al. Laju ekstraksi awal biasanya dikontrol oleh keseimbangan kelarutan: $C_s^* = y^* \cdot \rho_{CO_2}$, dengan $y^*$ fraksi mol jenuh.

### 2.5 Kondisi Batas dan Parameter Operasi

Parameter khas industri menurut Obchoei & Limtrakarn (2024): $P_{op} = 250$ bar, $T_{op} = 45$ °C, diameter partikel $d_p = 0{,}5$ mm, porositas bed $\varepsilon = 0{,}4$, permeabilitas $\kappa = 1\times10^{-9}$ m², dan densitas biomassa $\rho_b = 350$ kg/m³.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari pemodelan aksisimetrik dan perpindahan panas mengikuti kerangka kerja **Six Sigma DMAIC** (*Define, Measure, Analyze, Improve, Control*) yang dipadukan dengan simulasi CFD. Diagram alir proses Sc-CO₂ diturunkan dari Toledo & del Valle (2023):

1. **Tahap Preparasi Biomassa (Pre-processing)**: Bongol kanabis dikeringkan hingga kadar air <10% (basis basah), digiling, dan diayak untuk mendapatkan distribusi ukuran partikel seragam $d_p = 0{,}3$–$0{,}8$ mm. Proses ini krusial karena menentukan luas permukaan kontak spesifik $a_s = 6(1-\varepsilon)/d_p$ yang secara langsung memengaruhi $R_{ext}$.

2. **Tahap Pressurization**: CO₂ dari tangki penyimpanan didistribusikan melalui pompa diafragma atau *piston compressor* hingga mencapai tekanan operasi $P_{op} = 200$–$300$ bar. Pemanasan awal dilakukan oleh *pre-heater* hingga $T_{op} = 40$–$60$ °C. Model perpindahan panas memprediksi gradien suhu aksial yang perlu diminimalisasi melalui desain *jacket heating* multi-zona.

3. **Tahap Extraction (Static & Dynamic)**: Biomassa dimuat ke dalam vessel ekstraktor (kapasitas 10 L–1000 L). Aliran CO₂ superkritis secara kontinu dialirkan (mode *dynamic*) atau batch-wise (mode *static soak* + *dynamic rinse*). Profil residence time 30–90 menit dengan *Solvent-to-Feed Ratio* (S/F) 20–80 (kg CO₂/kg biomassa).

4. **Tahap Depressurization**: Aliran keluar dari ekstraktor masuk ke *separator* dengan katup ekspansi, di mana tekanan diturunkan menjadi 40–60 bar sehingga CO₂ kehilangan daya solvasi dan solute (minyak kanabis) mengendap. Panas dilepas oleh *chiller* karena efek pendinginan Joule–Thomson CO₂ sekitar 1,5–2,5 K/bar.

5. **Tahap Recovery & Recycle**: CO₂ yang telah kehilangan tekanan di-*recompress* dan dikembalikan ke siklus, mengurangi konsumsi CO₂ make-up hingga <5% per batch.

SOP ini diverifikasi dengan menjalankan simulasi CFD *transient* hingga konvergensi $10^{-5}$, dengan target *yield recovery* ≥90% THC dan ≥85% CBD sesuai standar farmakope.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Ekstraksi minyak kanabis dalam vessel silinder $D = 0{,}15$ m, $L = 0{,}5$ m, dengan parameter Obchoei & Limtrakarn (2024) dan korelasi perpindahan panas Toledo & del Valle (2023).

**Input parameter:**
- $P_{op} = 250$ bar $= 25$ MPa
- $T_{op} = 318{,}15$ K (45 °C)
- $\rho_{CO_2} = 830$ kg/m³ (dari persamaan状态 Span–Wagner EOS)
- $\mu_{CO_2} = 7{,}3 \times 10^{-5}$ Pa·s
- $k_{eff,CO_2} = 0{,}18$ W/(m·K) (pada kondisi superkritis)
- $C_p = 1800$ J/(kg·K)
- $d_p = 0{,}5$ mm, $\varepsilon = 0{,}4$, $\kappa = 1 \times 10^{-9}$ m²
- Kecepatan superfisial inlet $U_{in} = 0{,}002$ m/s

**Langkah 1: Reynolds partikel dan identifikasi rezim aliran:**

$$Re_p = \frac{\rho U_{in} d_p}{\mu (1-\varepsilon)} = \frac{830 \times 0{,}002 \times 5\times10^{-4}}{7{,}3\times10^{-5} \times 0{,}6} = 18{,}95$$

Karena $Re_p > 10$, rezim transisi-turbulen berlaku; model $k$–$\varepsilon$ justified.

**Langkah 2: