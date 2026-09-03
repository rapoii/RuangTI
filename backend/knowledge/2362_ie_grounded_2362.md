# 2362 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis Menggunakan Superkritik CO₂: Integrasi Termofluida dan Analisis Perpindahan Panas Multi-Tahap

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol—khususnya ekstraksi minyak dari bunga *Cannabis sativa* L. untuk kebutuhan farmasi, nutraceutical, dan kosmetik—telah mengalami transformasi teknologi yang signifikan dalam dua dekade terakhir. Metode konvensional berbasis pelarut organik (misalnya etanol, heksana, atau naphtha) menghadapi tekanan regulasi yang makin ketat terkait residu pelarut, profil keamanan pekerja, dan dampak lingkungan. Dalam konteks inilah teknologi *Supercritical Fluid Extraction* (SFE) dengan media CO₂ muncul sebagai standar emas (*gold standard*) karena sifatnya yang non-toksik, inert, dan mudah diregenerasi. Obchoei dan Limtrakarn (2024), dalam publikasi mereka di *International Journal of Thermofluids*, menekankan bahwa optimalisasi proses SFE-CO₂ untuk minyak cannabis menuntut pemodelan termofluida yang mampu menangkap geometri silinder ekstraktor secara akurat—yaitu melalui formulasi aliran *axisymmetric* yang merepresentasikan distributor radial pelarut dan profil konsentrasi solute secara dua-dimensi (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Secara ekonomis, pasar global ekstrak cannabis legal diproyeksikan mencapai USD 23,7 miliar pada tahun 2027, dengan yield yang sangat bergantung pada kontrol proses. Fluktuasi densitas CO₂ di atas titik kritisnya ($T_c = 304{,}13$ K; $P_c = 73{,}8$ bar) menjadi parameter paling sensitif; variasi suhu ±5 K pada tekanan 300 bar dapat menurunkan daya larut (*solvating power*) hingga 18%. Oleh sebab itu, Obchoei dan Limtrakarn (2024) berargumen bahwa pemodelan numerik berbasis Computational Fluid Dynamics (CFD) dengan geometri aksisimetrik—yang secara komputasional lebih efisien daripada full 3D—menjadi pendekatan paling rasional untuk desain extractor berskala pilot hingga komersial.

Di sisi lain, Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* menyoroti bahwa selama tiga tahap operasional SFE—*pressurization*, *extraction*, dan *depressurization*—perpindahan panas memegang peranan krusial yang selama ini sering diabaikan dalam model simplistik (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Tahap *pressurization* dapat berlangsung 10–45 menit dan melibatkan perpindahan panas transien dari gas CO₂ yang mula-mula berada pada fase gas menuju kondisi superkritik. Pemanasan atau pendinginan yang tidak seragam menyebabkan gradien densitas radial yang menurunkan efisiensi ekstraksi dan bahkan memicu *channeling* pada unggun partikel. Integrasi kedua perspektif ini—pemodelan aliran aksisimetrik Obchoei–Limtrakarn dengan analisis perpindahan panas multi-tahap Toledo–del Valle—menjadi landasan bagi rekayasa sistem ekstraksi modern yang presisi dan terukur.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan matematis untuk ekstraksi SFE-CO₂ dalam geometri silinder harus memenuhi tiga konservasi fundamental: massa, momentum, dan energi, dengan dimensi radial ($r$) dan aksial ($z$) sesuai asumsi aksisimetrik $\partial/\partial\theta = 0$.

### 2.1 Persamaan Kontinuitas dan Momentum (Navier–Stokes Aksisimetrik)

Untuk fluida Newtonian inkompresibel dalam koordinat silinder, persamaan kontinuitas adalah:

$$\frac{1}{r}\frac{\partial (r u_r)}{\partial r} + \frac{\partial u_z}{\partial z} = 0 \tag{1}$$

di mana $u_r$ dan $u_z$ masing-masing adalah komponen kecepatan radial dan aksial (m/s). Persamaan momentum radial dan aksial mengikuti:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] \tag{2}$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z \tag{3}$$

Untuk menggambarkan penurunan tekanan di dalam unggun partikel cannabis, digunakan persamaan Ergun yang memodifikasi gaya gesek dengan faktor porositas $\varepsilon$ dan diameter partikel $d_p$:

$$\frac{\Delta P}{L} = \frac{150(1-\varepsilon)^2}{\varepsilon^3}\frac{\mu u_z}{d_p^2} + \frac{1{,}75(1-\varepsilon)}{\varepsilon^3}\frac{\rho u_z^2}{d_p} \tag{4}$$

### 2.2 Persamaan Energi dengan Sumber Kalor Transien

Toledo dan del Valle (2023) menekankan bahwa persamaan energi harus diselesaikan secara transien karena proses *pressurization* melibatkan perubahan densitas CO₂ yang sangat tajam. Bentuk konservatif adalah:

$$\frac{\partial(\rho c_p T)}{\partial t} + \nabla \cdot (\rho c_p \mathbf{u} T) = \nabla \cdot (k_{\text{eff}} \nabla T) + \dot{q}_{\text{latent}} \tag{5}$$

di mana $k_{\text{eff}} = \varepsilon k_f + (1-\varepsilon) k_s$ adalah konduktivitas efektif unggun, dengan $k_f$ (fluida) dan $k_s$ (padatan). Selama *pressurization*, sumber kalor laten $\dot{q}_{\text{latent}}$ muncul akibat perubahan fase CO₂ dari gas ke superkritik.

### 2.3 Perpindahan Massa dan Model Kelarutan Chrastil

Laju pelarutan cannabinoid (THC, CBD, terpenoid) ke dalam fase superkritik dimodelkan dengan persapan kesetimbangan termodinamika:

$$\ln(S) = k \ln(\rho_{\text{CO}_2}) + \frac{a}{T} + b \tag{6}$$

dengan $S$ adalah kelarutan (g solute/g CO₂), $\rho_{\text{CO}_2}$ densitas CO₂ (kg/m³), $T$ suhu (K), serta $k$, $a$, $b$ adalah konstanta empiris yang untuk cannabis/CBD dilaporkan oleh Obchoei dan Limtrakarn (2024) masing-masing mendekati $k \approx 2{,}27$, $a \approx -4280$ K, dan $b \approx -8{,}74$ pada rentang 300–350 bar.

### 2.4 Persamaan Keadaan CO₂ Superkritik

Untuk menghitung densitas CO₂ pada berbagai kondisi P–T, digunakan persamaan keadaan Span–Wagner yang merupakan perluasan Helmholtz energi bebas:

$$\frac{a(\delta, \tau)}{RT} = a^{\text{ideal}}(\delta, \tau) + a^{\text{residual}}(\delta, \tau) \tag{7}$$

di mana $\delta = \rho/\rho_c$ dan $\tau = T_c/T$. Pendekatan ini memberikan akurasi ±0{,}03% pada rentang superkritik, sesuai dengan kebutuhan model CFD Obchoei–Limtrakarn.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model Obchoei–Limtrakarn (2024) dan Toledo–del Valle (2023) mengikuti alur rekayasa terstruktur berikut:

**Tahap 1 — Akuisisi Data Geometri dan Material.** Ekstraktor tipikal berdiameter dalam $D = 0{,}15$ m dan panjang efektif $L = 0{,}50$ m, dengan kapasitas biomassa 2–5 kg. Partikel cannabis ground memiliki $d_p = 0{,}7$ mm dengan porositas unggun $\varepsilon = 0{,}42$ (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

**Tahap 2 — Konstruksi Domain Aksisimetrik 2D.** Domain komputasional dibentuk sebagai setengah-bagian penampang melintang (sumbu rotasi di $r = 0$), dengan diskretisasi 80.000–120.000 elemen quadrilateral menggunakan COMSOL Multiphysics® atau ANSYS Fluent. Ukuran mesh di dekat dinding dijaga $\leq 0{,}2$ mm untuk menangkap gradien kecepatan.

**Tahap 3 — Penentuan Kondisi Batas.** Inlet CO₂ pada $z = 0$ ditetapkan sebagai *mass flow inlet* dengan laju 5–15 kg/jam. Outlet di $z = L$ menggunakan *pressure outlet* 1 atm (setelah *separator*). Dinding silinder diasumsikan adiabatik atau dengan kondisi konveksi alami $h = 8$ W/m²K, tergantung skenario.

**Tahap 4 — Validasi dengan Data Eksperimental.** Toledo dan del Valle (2023) memvalidasi model perpindahan