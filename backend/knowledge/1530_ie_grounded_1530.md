# 1530 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis menggunakan karbon dioksida superkritis (sc-CO₂) telah menjadi salah satu teknologi pemisahan paling kritis dalam industri fitofarmasi, nutraceutical, dan kosmetik kelas premium. Berbeda dengan ekstraksi pelarut organik konvensional (misalnya etanol, heksana) yang meninggalkan residu toksik, sc-CO₂ menawarkan keuntungan ganda: sifatnya yang *generally recognized as safe* (GRAS) oleh regulator食品药品监督管理局 dan kemampuannya untuk di-tuning secara presisi melalui manipulasi tekanan serta temperatur kritis ($T_c = 304.13$ K, $P_c = 7.377$ MPa untuk CO₂). Obchoei dan Limtrakarn (2024) menyoroti bahwa desain reaktor ekstraksi yang efisien membutuhkan pemodelan aliran aksisimetrik dua-dimensi untuk memprediksi profil konsentrasi solut sepanjang sumbu radial dan aksial bejana — informasi yang tidak dapat ditangkap oleh model *plug flow* satu-dimensi klasik (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Secara ekonomis, pasar minyak kanabis global diproyeksikan tumbuh pada CAGR >15% hingga 2030, didorong oleh legalisasi medicinal dan recreational di berbagai yurisdiksi, serta permintaan akan produk *full-spectrum* dan *broad-spectrum* yang mempertahankan profil cannabinoid dan terpenoid. Dari perspektif *unit operation*, efisiensi ekstraksi sangat bergantung pada tiga faktor耦合 yang selama ini sering dimodeli secara terpisah: hidrodinamika fase superkritis di dalam *packed bed* biomassa kanabis, keseimbangan massa antar-fase (fluida–padatan), dan perpindahan panas yang terjadi selama tahap *pressurization*, *extraction*, dan *depressurization* seperti yang ditegaskan oleh Toledo dan del Valle (2023) (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Ketidakakuratan dalam pemodelan salah satu aspek akan menyebabkan *oversizing* peralatan yang meningkatkan *capital expenditure* (CAPEX) hingga 30–40%, atau *undersizing* yang menurunkan *yield* dan *throughput*. Dalam konteks Industri 4.0, integrasi model Computational Fluid Dynamics (CFD) dengan sensor IoT memungkinkan *real-time process control*, namun fondasinya tetap pada formulasi matematis fluida dan termodinamika yang presisi. Oleh karena itu, modul ini membahas kerangka analitis komprehensif yang menjembatani pemodelan hidrodinamika aksisimetrik dan termodinamika perpindahan panas dalam satu *toolbox* rekayasa.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Kontinuitas dan Momentum Aksisimetrik

Untuk geometri silinder reaktor ekstraksi sc-CO₂ (radius $R$, panjang $L$), dengan asumsi aliran tunak (*steady-state*), isothermal local, dan simetri aksial, persamaan kontinuitas dalam koordinat silinder $(r, z)$ adalah:

$$\frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) + \frac{\partial}{\partial z}(\rho u_z) = 0$$

dengan $\rho$ adalah densitas fluida superkritis (fungsi $T$ dan $P$), dan $u_r$, $u_z$ adalah komponen kecepatan radial dan aksial. Persamaan momentum Navier–Stokes untuk arah aksial, dengan asumsi *Darcy-Forchheimer* untuk media berpori biomassa kanabis:

$$\rho(u_z \frac{\partial u_z}{\partial z} + u_r \frac{\partial u_z}{\partial r}) = -\frac{\partial P}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z - \rho \beta_F |u_z| u_z$$

di mana $K$ adalah permeabilitas (Kozeny–Carman), $\beta_F$ adalah koefisien *Forchheimer*, dan $\mu_{eff}$ adalah viskositas efektif yang mencakup kontribusi turbulen (jika $Re > 1$).

### 2.2 Persamaan Perpindahan Panas (Toledo & del Valle, 2023)

Untuk tahap *pressurization*, *extraction*, dan *depressurization*, Toledo dan del Valle (2023) mengembangkan model perpindahan panas yang menggabungkan konduksi aksial pada dinding reaktor dan konveksi internal fluida superkritis. Persamaan energi unsteady 1D untuk fluida adalah:

$$\rho c_p \left(\frac{\partial T}{\partial t} + u_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + k_{ax}\frac{\partial^2 T}{\partial z^2} + \dot{q}_{mix}$$

dengan $\dot{q}_{mix}$ adalah laju pelepasan panas akibat pencampuran dan dissolusi solut. Untuk dinding reaktor (logam):

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = k_w \frac{\partial^2 T_w}{\partial z^2} + \frac{h_{in}A_{in}}{V_w}(T_f - T_w) - \frac{h_{out}A_{out}}{V_w}(T_w - T_{amb})$$

### 2.3 Keseimbangan Massa Antar-Fase

Laju transfer massa solut (cannabinoid target, misal cannabidiol/CBD) dari matriks biomassa ke fase superkritis dimodeli dengan pendekatan *linear driving force* (LDF):

$$\frac{\partial q}{\partial t} = k_f a_s (C^* - C)$$

dengan $q$ adalah konsentrasi solut pada fase padat ($\text{kg/kg biomassa}$), $C$ adalah konsentrasi pada fase fluida, $C^*$ adalah konsentrasi kesetimbangan yang diberikan oleh model kelarutan Chrastil:

$$C^* = \rho^{\,n} \exp\left(\frac{a}{T} + b\right)$$

di mana $n$, $a$, $b$ adalah parameter terapan (untuk CBD-CO₂ tipikal: $n \approx 1.7$ hingga $3.5$).

### 2.4 Persamaan Keadaan untuk CO₂ Superkritis

Densitas sc-CO₂ dihitung dengan persamaan keadaan Span–Wagner (2006) atau pendekatan简化 Peng–Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan $a(T) = 0.45724 \frac{R^2 T_c^2}{P_c}\alpha(T)$, $\alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2$, dan $\kappa = 0.37464 + 1.54226\omega - 0.26992\omega^2$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur operasional standar untuk ekstraksi sc-CO₂ minyak kanabis mengikuti alur berikut, yang menjadi acuan dalam desain reaktor dan sistem kontrol berbasis model Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023):

**Tahap 1 — Pra-pemrosesan biomassa:** Biomassa kanabis dikeringkan hingga kadar air <10% (basis basah), digiling menjadi partikel berukuran 0.5–2.0 mm untuk memaksimalkan luas spesifik dan permeabilitas *packed bed*.

**Tahap 2 — Pengisian reaktor (*loading*):** Reaktor silinder vertikal diisi biomassa secara homogen; tinggi bed tipikal $L = 0.5$–$2.0$ m, diameter $D = 0.1$–$0.5$ m; *void fraction* $\varepsilon = 0.35$–$0.45$.

**Tahap 3 — *Pressurization*:** CO₂ dipompa dari kondisi subkritis menuju kondisi operasi ($P = 15$–$35$ MPa, $T = 308$–$343$ K). Laju pressurisasi dibatasi oleh kapasitas penukar panas untuk menghindari gradien termal yang merusak cannabinoid (degradasi CBD > $353$ K).

**Tahap 4 — *Static–dynamic extraction*:** Fase statis (tanpa aliran, 10–30 menit) memungkinkan hidrasi ulang CO₂ dalam matriks; fase dinamis (aliran $0.5$–$5$ kg CO₂/kg biomassa/jam) mengekstrak solut.

**Tahap 5 — *Separation*:** Ekspansi bertahap melalui katup *back-pressure regulator* menurunkan tekanan ke $5$–$6$ MPa pada separator I, kemudian ke tekanan atmosferik pada separator II; cannabinoid mengendap karena kelarutan turun drastis.

**Tahap 6 — *Depressurization* dan siklus ulang:** CO₂ dicairkan dan didaur ulang; Toledo & del Valle (2023) menekankan pentingnya memodelkan tahap ini karena gradien temperatur yang tinggi dapat menghasilkan *thermal stress* pada material dan kehilangan yield karena evaporasi senyawa volatil.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Reaktor sc-CO₂ berdiameter $D = 0.20$ m, panjang $L = 1.0$ m, diisi $m_b = 5.0$ kg biomassa kanabis (kadar CBD target $C_{CBD,0} = 0.10$ kg/kg biomassa kering). Kondisi operasi: $P = 25$ MPa, $T = 328$ K (55 °C). Laju aliran CO₂ superfisial: $\dot{m}_{CO_2} = 2.0$ kg/jam per kg biomassa. Tujuan: memperkirakan profil konsentrasi aksial setelah 60 menit ekstraksi dinamis.

**Langkah 1 — Densitas dan viskositas sc-CO₂ pada 25 MPa, 328 K.** Dari Span–Wagner atau tabel NIST: $\rho_{CO_2} \approx 830.7$ kg/m³, $\mu_{CO_2} \approx 7.42 \times 10^{-5}$ Pa·s.

**Langkah 2 — Permeabilitas dan Forchheimer.** Untuk partikel diameter $d_p = 1.0$ mm dan $\varepsilon = 0.40$:

$$K = \frac{d_p^2 \varepsilon^3}{150(1-\varepsilon)^2} = \frac{(10^{-3})^2 (0.40)^3}{150(0.60)^2} \approx 1.19 \times 10^{-8} \, \text{m}^2$$

$$\beta_F = \frac{1.75}{150}\frac{(1-\varepsilon)}{\varepsilon^3 d_p} \approx 1.05 \times 10^{4} \, \text{m}^{-1}$$

**Langkah 3 — Kecepatan superfisial dan Reynolds partikel.**

$$u_s = \frac{\dot{m}_{CO_2}/\rho_{CO_2}}{A_{cs}} = \frac{(2.0/830.7)}{\pi (0.10)^2} = 7.66 \times 10^{-5} \, \text{m/s}$$

$$Re_p = \frac{\rho_{CO_2} u_s d_p}{\mu_{CO_2} (1-\varepsilon)} = \frac{830.7 \cdot 7.66\times 10^{-5} \cdot 10^{-3}}{7.42\times 10^{-5} \cdot 0.60} \approx 1.43$$

Karena $Re_p \ll 1$, aliran bersifat *laminar-Darcy*; kontribusi inersial $\beta_F|u_z|u_z$ dapat diabaikan.

**Langkah 4 — Penurunan tekanan aksial.** Dengan mengintegrasikan persamaan momentum bentuk简化:

$$\Delta P = \frac{\mu u_s L}{K} \cdot \frac{1}{1-\varepsilon} = \frac{7.42\times 10^{-