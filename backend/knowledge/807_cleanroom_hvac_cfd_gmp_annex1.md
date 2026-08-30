# 807 — Modelisasi Pola Aliran Udara HVAC Cleanroom Farmasi Menggunakan CFD: Pemulihan Partikel Terapung dan Kepatuhan Laminar Flow EU GMP Annex 1

**Domain:** Teknik Industri  
**Topik Spesialis:** Rekayasa Sistem HVAC Cleanroom Farmasi  
**Standar & Referensi Utama:** EU GMP Annex 1, ISO 14644, ASME BPE-1, ASHRAE 146

## 1. Pendahuluan dan Konteks Industri

Industri farmasi menghadapi tuntutan kepatuhan yang semakin ketat terhadap regulasi global, di mana setiap partikel terapung mikroskopis dapat menyebabkan kontaminasi produk steril yang fatal. Menurut EU GMP Annex 1 edisi terbaru, pola aliran udara HVAC cleanroom harus dirancang sedemikian rupa agar memenuhi persyaratan Grade A hingga Grade D, dengan fokus pada laminar flow unidirectional untuk meminimalkan risiko mikrobial dan particulat contamination. Permasalahan operasional utama muncul ketika sistem HVAC gagal mengontrol recovery time partikel terapung, yang dapat memperlambat proses sterilasi dan meningkatkan biaya downtime hingga jutaan dolar per hari. Secara ekonomi, non-compliance terhadap standar ini berujung pada recall produk, denda berat, dan kerugian reputasi yang sulit dipulihkan, sebagaimana terlihat pada kasus industri global di mana kegagalan airflow modeling menyebabkan kegagalan batch produksi senilai ratusan juta euro.

Urgensi teknis semakin tinggi karena regulasi EU GMP Annex 1 menekankan pada validasi CFD untuk memastikan bahwa kecepatan aliran laminar tetap di bawah 0,45 m/s dengan tingkat turbulensi rendah, sehingga partikel airborne dapat dipulihkan dalam waktu singkat setelah gangguan. Secara teknis, permasalahan ini melibatkan interaksi kompleks antara transportasi partikel (advection-diffusion) dan pola aliran udara yang harus dioptimalkan melalui Computational Fluid Dynamics (CFD) untuk menghindari overdesign sistem yang boros energi atau underdesign yang berisiko. Contoh nyata di fasilitas produksi biologis menunjukkan bahwa tanpa modeling CFD, recovery time partikel dapat mencapai 45 menit, melebihi batas yang ditetapkan, sehingga memerlukan penyesuaian HVAC yang mahal dan rumit. Permasalahan ekonomi semakin kompleks karena investasi awal CFD software dan pelatihan ahli sering kali mencapai 15-20% dari total biaya proyek cleanroom, sementara manfaat jangka panjang berupa penghematan energi hingga 30% dan kepatuhan regulasi menjadi nilai tambah strategis.

Di sektor farmasi, urgensi ini diperburuk oleh tren globalisasi produksi dan peningkatan volume output biologis yang sensitif terhadap kontaminasi. Tanpa pendekatan modeling yang substantif, perusahaan farmasi menghadapi tantangan operasional seperti peningkatan biaya maintenance HVAC sebesar 25% akibat degradasi sistem akibat aliran tidak stabil. Secara teknis, permasalahan ini juga melibatkan aspek keselamatan kerja (K3) karena partikel terapung berbahaya dapat menyebar ke area non-cleanroom, serta aspek lingkungan (ESG) melalui konsumsi energi HVAC yang berlebih. Secara keseluruhan, konteks industri ini menuntut integrasi CFD sebagai alat rekayasa utama untuk memastikan kepatuhan EU GMP Annex 1, mengurangi recovery time partikel terapung hingga di bawah 15 menit, dan mencapai efisiensi operasional maksimal. Tanpa pengetahuan mendalam tentang landasan teori CFD dan metodologi rekayasa, perusahaan farmasi berisiko kehilangan keunggulan kompetitif di pasar global yang semakin kompetitif.

## 2. Landasan Teori & Formulasi Matematis

Landasan teori modelisasi pola aliran udara HVAC cleanroom farmasi berbasis pada Computational Fluid Dynamics (CFD) yang menyelesaikan persamaan Navier-Stokes untuk fluida tak terkompresibel. Persamaan kontinuitas dasar dinyatakan sebagai:

$$\nabla \cdot \mathbf{u} = 0$$

di mana $\mathbf{u} = (u, v, w)$ adalah vektor kecepatan aliran udara. Persamaan momentum (Navier-Stokes) dalam bentuk Reynolds-Averaged Navier-Stokes (RANS) untuk aliran turbulen adalah:

$$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \nabla \cdot \boldsymbol{\tau}_{turb}$$

dengan $\rho$ sebagai densitas udara, $p$ sebagai tekanan statis, $\mu$ sebagai viskositas dinamis, dan $\boldsymbol{\tau}_{turb}$ sebagai tensor stres turbulen. Model turbulensi k-epsilon standar digunakan untuk mendefinisikan viskositas efektif:

$$\mu_{eff} = \mu + \mu_t, \quad \mu_t = \rho C_\mu \frac{k^2}{\epsilon}$$

di mana $k$ adalah energi turbulen kinetik dan $\epsilon$ adalah dissipasi energi turbulen, dengan konstanta $C_\mu = 0.09$.

Untuk partikel terapung, persamaan transportasi Eulerian digunakan:

$$\frac{\partial C}{\partial t} + \nabla \cdot (\mathbf{u} C) = \nabla \cdot (D \nabla C) + S$$

di mana $C$ adalah konsentrasi partikel (partikel/m³), $D$ adalah koefisien difusi turbulen, dan $S$ adalah sumber partikel. Pendekatan Lagrangian melacak partikel individual melalui persamaan:

$$m_p \frac{d\mathbf{v}_p}{dt} = \mathbf{F}_D (\mathbf{u} - \mathbf{v}_p) + \mathbf{F}_G + \mathbf{F}_B$$

dengan gaya gesek $F_D$, gravitasi $F_G$, dan Bouyancy $F_B$.

Waktu pemulihan partikel terapung (recovery time) didefinisikan sebagai waktu yang diperlukan untuk menurunkan konsentrasi partikel dari nilai awal $C_0$ ke nilai batas $C_{limit}$ setelah gangguan aliran. Persamaan eksponensial berdasarkan perubahan udara per jam (ACH) adalah:

$$t_{recovery} = \frac{V}{Q} \ln \left( \frac{C_0}{C_{limit}} \right)$$

di mana $V$ adalah volume ruang cleanroom (m³) dan $Q$ adalah laju aliran volumetrik (m³/h). Untuk laminar flow unidirectional, kecepatan aliran maksimum dibatasi oleh:

$$u_{max} \leq 0.45 \, \text{m/s}$$

sebagaimana ditetapkan dalam EU GMP Annex 1 untuk Grade A. Derivasi recovery time berasal dari hukum dilution eksponensial, di mana ACH = $Q/V \times 3600$ (per jam), sehingga persamaan lengkap menjadi:

$$t_{recovery} = \frac{3600}{\text{ACH}} \ln \left( \frac{C_0}{C_{limit}} \right)$$

Dalam konteks farmasi, persamaan ini dikombinasikan dengan persamaan settling velocity partikel dalam udara statis:

$$v_s = \frac{d_p^2 g (\rho_p - \rho)}{18 \mu}$$

untuk memvalidasi kontribusi gravitasi terhadap pemulihan partikel. Semua persamaan ini diselesaikan secara numerik menggunakan metode finite volume pada software CFD seperti ANSYS Fluent atau OpenFOAM, dengan mesh yang terstruktur untuk memastikan resolusi laminar flow yang akurat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Metodologi rekayasa modelisasi HVAC cleanroom farmasi mengikuti alur prosedural yang sistematis sesuai standar ASME BPE dan EU GMP Annex 1. Langkah pertama adalah definisi persyaratan teknis berdasarkan kelas cleanroom ISO 14644, meliputi laju aliran udara, tekanan diferensial, dan tingkat partikel. Selanjutnya, geometri ruang cleanroom dimodelkan dalam software CAD (CATIA atau SolidWorks) dengan detail inlet/outlet diffuser dan HEPA filter placement.

Proses alur logika meliputi: (1) Requirements Definition → (2) Geometry Modeling → (3) Mesh Generation (structured hex mesh dengan y+ < 1 untuk boundary layer) → (4) Boundary Condition Setup (inlet velocity profile laminar, outlet pressure, wall no-slip) → (5) Solver Setup (steady-state atau transient dengan time step 0.01 s) → (6) Post-Processing (velocity contour, particle tracking, recovery time calculation) → (7) Validation & Optimization (comparing CFD result dengan data PIV experimental atau standar ASHRAE 146).

Diagram alir proses dapat digambarkan sebagai flowchart: Requirements (EU GMP Grade A/B) → Geometry CAD → Mesh (10^6 cells minimum) → CFD Simulation (convergence criteria $10^{-6}$) → Analysis (laminar flow uniformity < 5% variation) → Particle Recovery Time Calculation → Compliance Check → Design Optimization (adjust diffuser angle hingga recovery time < 15 menit) → Final Validation Report.

Standar prosedur operasional mencakup validasi CFD dengan benchmark kasus uji baku, seperti membandingkan hasil simulasi dengan data empiris dari wind tunnel test. Arsitektur teknologi melibatkan integrasi dengan Building Management System (BMS) untuk real-time monitoring pola aliran udara. Setiap langkah didokumentasikan dengan traceability matrix untuk memastikan kepatuhan regulasi, termasuk penggunaan software validation (21 CFR Part 11 equivalent) dan dokumentasi kesalahan (deviation report) jika mesh quality buruk.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan studi kasus hipotetis berdasarkan fasilitas produksi biologis Grade A cleanroom dengan volume $V = 80 \, \text{m}^3$, laju aliran udara $Q = 3200 \, \text{m}^3/\text{h}$, dan konsentrasi partikel awal setelah gangguan $C_0 = 5000 \, \text{partikel/m}^3$. Batas konsentrasi $C_{limit} = 100 \, \text{partikel/m}^3$ sesuai EU GMP Annex 1.

Langkah kalkulasi step-by-step:  
1. Hitung ACH:  
   $$\text{ACH} = \frac{Q}{V} \times 3600 = \frac{3200}{80} \times 3600 = 144 \, \text{per jam}$$  
2. Hitung recovery time untuk penurunan 90%:  
   $$t_{90\%} = \frac{1}{\text{ACH}} \ln \left( \frac{1}{0.1} \right) = \frac{1}{144} \times \ln(10) \approx 0.048 \, \text{jam} = 2.88 \, \text{menit}$$  
3. Hitung recovery time untuk penurunan 99%:  
   $$t_{99\%} = \frac{1}{\text{ACH}} \ln \left( \frac{1}{0.01} \right) = \frac{1}{144} \times \ln(100) \approx 0.096 \, \text{jam} = 5.76 \, \text{menit}$$  

Dengan CFD simulation menggunakan model k-epsilon, hasil menunjukkan pola aliran laminar unidirectional dengan kecepatan rata-rata 0.32 m/s dan variasi < 3%. Partikel tracking menunjukkan 98% partikel pulih dalam 6 menit. Interpretasi manajerial: Optimasi ini mengurangi biaya energi HVAC sebesar 22% dan memastikan kepatuhan regulasi tanpa perlu upgrade fisik sistem, sehingga ROI tercapai dalam 14 bulan melalui penghematan operasional dan pencegahan recall produk.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Modelisasi pola aliran udara HVAC cleanroom farmasi memiliki aplikasi lintas sektor yang luas, termasuk industri bioteknologi, makanan aseptic, dan elektronika semikonduktor. Dalam supply chain, CFD membantu mengoptimalkan rantai pasok material HEPA filter dengan prediksi recovery time partikel yang akurat, mengurangi stok berlebih hingga 18%. Integrasi dengan otomasi melalui IoT sensor memungkinkan real-time monitoring pola aliran udara, sehingga mengurangi downtime produksi dan meningkatkan efisiensi manajemen biaya teknis hingga 30%.

Dalam manajemen biaya, evaluasi ROI CFD melibatkan perbandingan biaya software (ANSYS ~$50,000 per lisensi) versus penghematan energi jangka panjang. Tantangan adopsi mencakup kebutuhan ahli CFD yang langka dan kompleksitas validasi terhadap standar ASME BPE. Hubungan dengan K3/ESG terlihat pada pengurangan risiko kontaminasi yang melindungi keselamatan pekerja dan pengurangan emisi CO₂ melalui optimasi HVAC yang lebih efisien. Evaluasi manajerial menekankan pentingnya pelatihan tim rekayasa dan integrasi dengan sistem manajemen kualitas (QMS) untuk memastikan kepatuhan berkelanjutan. Secara keseluruhan, pendekatan ini memberikan keunggulan kompetitif melalui pengurangan recovery time partikel terapung dan kepatuhan laminar flow yang terbukti.