# 1882 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** *Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process*  
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)  
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi superkritis CO₂ (*supercritical fluid extraction*, SFE) telah memposisikan dirinya sebagai teknologi unggulan dalam rantai pasok fitofarmaka, nutraceutical, dan material kanabinoid bernilai tambah tinggi. Berbeda dari ekstraksi pelarut organik yang meninggalkan residu toksik (misalnya heksana, etanol), SFE memanfaatkan kemampuan CO₂ untuk bertransisi ke fasa superkritis ketika parameter operasinya melampaui titik kritis ($T_c = 304{,}25~\text{K}$, $P_c = 7{,}38~\text{MPa}$). Pada kondisi tersebut, CO₂ memiliki difusivitas tinggi mirip gas dan daya solvasi mirip cairan, sehingga menjadi media ekstraksi yang selektif dan *Generally Recognized as Safe* (GRAS) menurut FDA.

Konteks industri yang melatarbelakangi paper Obchoei & Limtrakarn (2024) adalah meningkatnya permintaan global akan minyak kanabis berkualitas farmasi—diproyeksikan mencapai USD 17,8 miliar pada 2027 (Grand View Research, 2023). Namun demikian, proses SFE pada industri riil menghadapi inefisiensi termodinamika yang krusial: konsumsi CO₂ per kilogram umpan berkisar 10–30 kg, siklus batch membutuhkan 1–3 jam, dan *yield* THC/CBD sangat sensitif terhadap gradien suhu serta distribusi kecepatan fluida di dalam *packed bed*. Seperti ditegaskan oleh Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, pemodelan *axisymmetric flow* menjadi kebutuhan imperatif karena asumsi *plug flow* satu dimensi gagal merepresentasikan profil radial yang muncul akibat rasio aspek bejana dan sifat transien dari unggun partikel kanabis.

Di sisi komplementer, Toledo & del Valle (2023) dalam *The Journal of Supercritical Fluids* menekankan bahwa ketiga tahap operasional—pressurization, extraction, dan depressurization—memiliki profil perpindahan panas yang sangat berbeda dan saling memengaruhi. Tahap *pressurization* didominasi oleh kerja kompresi adiabatis yang dapat menaikkan suhu lokal melebihi 80 °C (degradasi termal kanabinoid), sementara tahap *depressurization* berisiko menimbulkan *frosting* dan clogging pada katup ekspansi. Integrasi kedua perspektif ini—model aliran aksisimetrik dan model perpindahan panas transien—menjadi fondasi bagi optimasi desain reaktor SFE industri masa depan.

Urgensi ekonominya nyata: penurunan 5% konsumsi CO₂ pada fasilitas 500 L/harinya menghemat biaya operasional >USD 50.000/tahun, sementara peningkatan 2% *recovery* cannabinoid setara dengan margin kotor tambahan signifikan. Karena itulah, kerangka model matematis yang disusun oleh kedua paper menjadi *decision-support system* krusial bagi *process engineer* dalam menentukan dimensi bejana, laju alir optimal, dan strategi kontrol termal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Aliran Aksisimetrik di Media Berpori

Model Obchoei & Limtrakarn (2024) menggunakan formulasi Navier–Stokes tervisikositas-kanonik untuk media berpori dengan geometri aksisimetris $(r, z)$. Persamaan kontinuitas untuk fluida superkritis CO₂:

$$\frac{\partial \rho_f}{\partial t} + \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho_f v_r\right) + \frac{\partial}{\partial z}\left(\rho_f v_z\right) = 0 \tag{1}$$

Persamaan momentum Darcy–Brinkman yang menggabungkan kekentalan dan hambatan pori:

$$\frac{\partial}{\partial t}\left(\rho_f \vec{v}\right) + \nabla\cdot\left(\rho_f \vec{v}\vec{v}\right) = -\nabla p + \mu_{eff}\nabla^2\vec{v} - \frac{\mu_f}{K}\vec{v} + \rho_f \vec{g} \tag{2}$$

dengan $K$ adalah permeabilitas intrinsik unggun, $\mu_f$ viskositas CO₂ superkritis (≈ $5{,}5\times10^{-5}~\text{Pa·s}$ pada 300 bar, 50 °C), dan $\mu_{eff}$ viskositas efektif di zona transisi dekat dinding. Penurunan tekanan dihitung melalui persamaan Ergun yang dimodifikasi untuk kondisi superkritis:

$$-\frac{dp}{dz} = \frac{150 \mu_f}{d_p^2}\frac{(1-\varepsilon)^2}{\varepsilon^3}v_z + \frac{1{,}75 \rho_f}{d_p}\frac{(1-\varepsilon)}{\varepsilon^3}v_z^2 \tag{3}$$

dengan $\varepsilon$ porositas unggun (umumnya 0,35–0,45 untuk cacahan kanabis) dan $d_p$ diameter partikel efektif.

### 2.2 Persamaan Perpindahan Massa Solut (Kanabinoid)

Model dua-film dikombinasikan dengan *shrinking core* menggovern transfer THC/CBD dari matriks padat ke fasa superkritis:

$$\frac{\partial C_s}{\partial t} = -k_f a_p \left(C_s - C_s^*(T, P)\right) \tag{4}$$

dengan $C_s$ konsentrasi solute dalam padatan, $k_f$ koefisien transfer fluida, $a_p$ luas spesifik partikel, dan $C_s^*$ konsentrasi kesetimbangan yang bergantung pada $T$ dan $P$ melalui persamaan Chrastil:

$$C_s^* = \rho_f^{n} \exp\left(\frac{A}{T} + B\right) \tag{5}$$

Untuk THC pada rentang 300–350 bar dan 40–60 °C, parameter empiris $n \approx 1{,}8$, $A \approx -4500~\text{K}$, dan $B \approx -18$ dilaporkan oleh Obchoei & Limtrakarn (2024). Konsentrasi dalam fasa fluida mengikuti:

$$\varepsilon \frac{\partial C_f}{\partial t} + \rho_f v_z \frac{\partial C_f}{\partial z} = k_f a_p (1-\varepsilon)\left(C_s - C_s^*\right) \tag{6}$$

### 2.3 Persamaan Energi Transien

Toledo & del Valle (2023) menyusun neraca energi tiga-domain (fluida CO₂, matriks padat, dinding bejana):

$$\left[\varepsilon \rho_f c_{p,f} + (1-\varepsilon)\rho_s c_{p,s}\right]\frac{\partial T}{\partial t} + \rho_f c_{p,f} v_z \frac{\partial T}{\partial z} = k_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + Q_{rxn} \tag{7}$$

dengan $k_{eff}$ konduktivitas efektif unggun (model Kunii–Smith), dan $Q_{rxn}$ sumber kalor dari eksotermisitas pelarutan CO₂ dalam padatan. Bilangan Nusselt untuk konveksi paksa di packed bed pada kondisi SC-CO₂ mengikuti korelasi:

$$Nu = 2 + 1{,}8\,Re_p^{0,5} Pr^{0,33} \tag{8}$$

Bilangan Prandtl untuk SC-CO₂ mendekati 5–10 karena viskositas rendah dan kapasitas panas spesifik tinggi, menandakan dominasi konveksi termal dalam keseimbangan energi unggun.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari kedua paper mengikuti protokol berlapis berikut:

**Tahap 1 — Karakterisasi Umpan.** Cacahan biomassa kanabis dikeringkan hingga kadar air <10%, diayak untuk memperoleh $d_p$ konsisten (0,5–2 mm). Penentuan $C_{s,0}$ (konsentrasi THC/CBD awal) dilakukan via HPLC sesuai USP ⟨⟨2030⟩⟩.

**Tahap 2 — Desain Bejana Aksisimetris.** Rasio H/D dipilih 4:1 hingga 8:1 untuk memaksimalkan rasio luas-per-volume. Manifold inlet dirancang sebagai *sintered frit* untuk memastikan distribusi $v_z$ seragam di penampang radial (deviasi <5%).

**Tahap 3 — Pressurization Isotermal.** Sesuai Toledo & del Valle (2023), laju peningkatan tekanan dibatasi $dP/dt < 2~\text{MPa/min}$ agar gradien termal radial $\Delta T_{radial} < 5~\text{K}$, sehingga menghindari degradasi cannabinoid.

**Tahap 4 — Ekstraksi Dinamis.** Aliran CO₂ dipertahankan pada laju spesifik $q = 0{,}5$–$2~\text{kg CO}_2 / (\text{kg umpan} \cdot \text{jam})$, dengan monitoring $T$, $P$, dan $C_f$ keluar secara *real-time*.

**Tahap 5 — Depressurisasi Bertahap.** Tekanan diturunkan secara gradual ($0{,}5~\text{MPa/min}$) ke separator pertama (60–80 bar) untuk pemisahan utama, kemudian ke separator kedua (20–30 bar) untuk fraksinasi.

**Tahap