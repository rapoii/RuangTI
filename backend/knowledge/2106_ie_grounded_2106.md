# 2106 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida CO₂ Superkritis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanel dan fitokimia global mengalami transformasi signifikan sejak diterapkannya *Supercritical Fluid Extraction* (SFE) dengan CO₂ sebagai pelarut hijau (*green solvent*). Permintaan terhadap minyak kanabis (*cannabis oil*) yang kaya akan kanabinoid seperti *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC) melonjak drastis, terutama untuk aplikasi farmasi, nutraceutical, dan kosmetik premium. Menurut Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids*, diperlukan pemahaman mendalam mengenai fenomena aliran fluida di dalam reaktor SFE berbentuk bejana tekan silinder yang berisi *packed bed* biomassa kanabis. Model aliran aksisimetrik dua dimensi menjadi solusi komputasional yang efisien untuk memprediksi distribusi tekanan, kecepatan, dan konsentrasi solut pada geometri ekstraktor volumetrik (Obchoei & Limtrakarn, 2024, [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Urgensi teknis utama yang melatarbelakangi riset ini adalah inefisiensi operasional akibat *channeling effect* dan *bypass flow* di dalam unggun biomassa, yang menurunkan yield ekstraksi hingga 15–25% pada operasional industri. Sebagai respons, Obchoei & Limtrakarn (2024) membangun model Computational Fluid Dynamics (CFD) berbasis persamaan Navier-Stokes termodifikasi untuk media berpori dengan asumsi *axisymmetric steady-state flow*. Pendekatan ini secara fundamental berbeda dengan model 1-D *plug flow* konvensional yang mengasumsikan profil kecepatan uniform sepanjang radius bejana.

Kompleksitas diperparah oleh dinamika termal yang diinvestigasi secara mendalam oleh Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids*. Mereka membuktikan bahwa tahapan *pressurization*, *extraction*, dan *depressurization* memiliki profil perpindahan panas transien yang berbeda secara signifikan, dengan gradien suhu lokal mencapai 10–15°C pada awal proses (Toledo & del Valle, 2023, [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Interaksi kopling antara momentum, panas, dan massa inilah yang menjadi tantangan utama dalam desain optimal ekstraktor industri kapasitas besar.

Konteks ekonomi industri menunjukkan bahwa optimalisasi satu siklus SFE dapat menghemat konsumsi CO₂ sebesar 8–12% dan meningkatkan throughput harian hingga 20%, yang berarti *return on investment* (ROI) modal peralatan dalam kisaran 18–24 bulan pada fasilitas dengan kapasitas 100 kg biomassa/hari. Dalam lanskap regulasi yang makin ketat terhadap残留 pelarut, CO₂ superkritis menjadi pilihan strategis karena sifatnya yang food-grade, tidak toksik, dan mudah diregenerasi. Integrasi kedua literatur ini menjadi kerangka referensi mutakhir bagi insinyur proses, perancang alat, dan manajer pabrik dalam menentukan parameter operasional kritis (*pressure*, *temperature*, *flow rate*) yang berdampingan dengan kendala termodinamika dan kinetika reaksi.

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang dikembangkan oleh Obchoei & Limtrakarn (2024) berbasis pada tiga persamaan konservasi utama dalam koordinat silinder $(r, z)$ dengan asumsi aliran *steady-state* dan *axisymmetric*. Domain 2-D ini merepresentasikan separuh penampang melintang bejana ekstraktor, mengurangi biaya komputasi secara signifikan dibanding simulasi 3-D penuh.

### 2.1 Persamaan Kontinuitas dan Momentum

Untuk fluida CO₂ superkritis yang mengalir melalui *packed bed* biomassa kanabis dengan porositas $\varepsilon$, persamaan kontinuitas dituliskan sebagai:

$$\frac{\partial (\rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} + \frac{\rho u_r}{r} = 0$$

di mana $\rho$ adalah densitas CO₂ (kg/m³), $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial (m/s). Persamaan momentum yang mencakup efek gesekan viskos, hambatan porous media (Forchheimer term), dan gradien tekanan dinyatakan dalam formulasi Brinkman-Forchheimer:

$$\rho \left(u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{eff} \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z - \frac{\rho F}{\sqrt{K}}|u_z|u_z + \rho g$$

dengan $p$ tekanan (Pa), $\mu_{eff}$ viskositas efektif (Pa·s), $K$ permeabilitas intrinsik (m²), $F$ *Forchheimer coefficient* (tak berdimensi), dan $g$ percepatan gravitasi. Untuk komponen radial, formulasi serupa berlaku dengan gradien tekanan radial yang muncul sebagai driving force aliran sekunder (*secondary flow*) akibat inhomogeneity packing.

### 2.2 Persamaan Energi

Toledo dan del Valle (2023) menetapkan persamaan energi transien untuk fase fluida dan padatan secara kopling:

$$\varepsilon \rho_f c_{p,f} \frac{\partial T_f}{\partial t} + \rho_f c_{p,f} \mathbf{u} \cdot \nabla T_f = \varepsilon \nabla \cdot (k_f \nabla T_f) + h_v (T_s - T_f)$$

$$(1-\varepsilon) \rho_s c_{p,s} \frac{\partial T_s}{\partial t} = (1-\varepsilon) \nabla \cdot (k_s \nabla T_s) + h_v (T_f - T_s) + q_{rxn}$$

di mana $h_v$ adalah koefisien perpindahan panas volumetrik antar-fase (W/m³·K), $T_f$ dan $T_s$ adalah suhu fluida dan padatan, dan $q_{rxn}$ adalah panas reaksi pelarutan solut (umumnya diabaikan pada SFE isotermal).

### 2.3 Persamaan Transport Species

Mekanisme perpindahan massa solut dari padatan ke fluida dimodelkan melalui persaban diferensial perpindahan massa:

$$\varepsilon \frac{\partial C}{\partial t} + \mathbf{u} \cdot \nabla C = \nabla \cdot (\varepsilon D_{eff} \nabla C) - (1-\varepsilon) \rho_s \frac{\partial q}{\partial t}$$

dengan $C$ konsentrasi solut dalam fluida (kg/m³), $D_{eff}$ difusivitas efektif (m²/s), dan $q$ konsentrasi solut dalam fase padat (kg solut/kg padatan). Kinetika desorpsi mengikuti model linear driving force (LDF):

$$\frac{\partial q}{\partial t} = k_f a_p (q^* - q)$$

di mana $q^*$ adalah konsentrasi kesetimbangan yang ditentukan oleh kelarutan solut dalam CO₂ superkritis, dan $k_f a_p$ adalah koefisien transfer massa volumetrik (s⁻¹). Korelasi Sherwood untuk *packed bed* digunakan untuk menentukan $k_f$:

$$Sh = \frac{k_f d_p}{D_m} = 2.0 + 1.1 Re_p^{0.6} Sc^{1/3}$$

dengan bilangan Reynolds partikel $Re_p = \rho u d_p / \mu$ dan Schmidt $Sc = \mu / (\rho D_m)$.

### 2.4 Persamaan Keadaan CO₂ Superkritis

Densitas CO₂ dihitung menggunakan persamaan Span-Wagner EOS yang direkomendasikan NIST:

$$\rho = \rho(p, T), \quad \mu = \mu(p, T)$$

Pada kondisi operasi tipikal $p = 250$ bar dan $T = 50°C$, diperoleh $\rho \approx 871$ kg/m³ dan $\mu \approx 7{,}2 \times 10^{-5}$ Pa·s. Nilai-nilai ini menjadi parameter kritis untuk validasi model CFD.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model Obchoei & Limtrakarn (2024) mengikuti alur *Computer-Aided Process Engineering* (CAPE) yang terstruktur. Berikut adalah SOP sistematis untuk mengaplikasikan model dalam fasilitas produksi:

**Tahap 1: Karakterisasi Material dan Geometri.** Lakukan pengukuran porositas unggun biomassa ($\varepsilon$), permeabilitas ($K$), dan diameter partikel efektif ($d_p$). Parameter ini menjadi input utama simulasi CFD. Untuk biomassa kanabis giling dengan ukuran partikel 0,5–2,0 mm, $\varepsilon$ tipikal berkisar 0,35–0,45 dan $K$ berkisar $10^{-9}$–$10^{-8}$ m².

**Tahap 2: Pembuatan Geometri dan Mesh.** Konstruksi geometri 2-D aksisimetrik dari separuh penampang bejana ekstraktor (kapasitas 1 L–100 L). Discretization menggunakan *structured quadrilateral mesh* dengan refinement di dekat dinding dan inlet/outlet. Untuk bejana 1 L berdiameter 50 mm dan tinggi 500 mm, mesh tipikal terdiri atas 15.000–25.000 elemen.

**Tahap 3: Penentuan Domain dan Kondisi Batas.** Domain komputasi dibagi menjadi *fluid zone* dan *porous zone*. Kondisi batas: *velocity inlet* di bagian atas, *pressure outlet* di bagian bawah, dan *no-slip* di dinding. Temperatur dinding ditetapkan *isothermal* atau *adiabatic* sesuai konfigurasi jaket pemanas.

**Tahap 4: Solver Setup dan Konvergensi.** Gunakan *pressure-based coupled solver* dengan skema diskretisasi *second-order upwind* untuk momentum dan energi. Konvergensi tercapai ketika residual momentum, kontinuitas, dan energi turun di bawah $10^{-6}$, $10^{-4}$, dan $10^{-6}$ secara berturut-turut.

**Tahap 5: Validasi Eksperimental.** Bandingkan hasil simulasi dengan data eksperimental dari Toledo dan del Valle (2023) berupa profil suhu transien dan kurva yield kumulatif. Metrik validasi menggunakan *Root Mean Square Error* (RMSE) dan *Mean Absolute Percentage Error* (MAPE) yang harus di bawah 5% dan 8%.

**Tahap 6: Optimasi