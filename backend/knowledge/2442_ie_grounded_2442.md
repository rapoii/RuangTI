# 2442 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi dengan fluida superkritis (Supercritical Fluid Extraction, SFE) menggunakan karbon dioksida (CO₂) telah menjadi teknologi andalan dalam industri farmasi, nutrasetikal, kosmetik, dan makanan fungsional karena kemampuan selektivitasnya yang tinggi, toksisitas pelarut yang rendah, serta sifat CO₂ yang inert, tidak mudah terbakar, dan food-grade (GRAS). Dalam konteks khusus ekstraksi minyak kanabis (*Cannabis sativa* L.) yang mengandung senyawa bioaktif bernilai tinggi seperti cannabidiol (CBD) dan tetrahidrokanabinol (THC), penerapan SFE-CO₂ menjadi semakin relevan pasca-regulasi legalisasi produk kanabis medis di berbagai yurisdiksi (Kanada, Uruguay, beberapa negara bagian AS, Thailand, Jerman, dan Australia). Obchoei dan Limtrakarn (2024) menekankan bahwa pemahaman mendalam terhadap dinamika aliran fluida di dalam *extractor vessel* sangat krusial untuk optimalisasi *yield*, konsumsi energi, dan kemurnian produk akhir.

Permasalahan operasional utama yang diangkat oleh Obchoei & Limtrakarn (2024, *International Journal of Thermofluids*, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) adalah keterbatasan model empiris sederhana yang selama ini digunakan oleh praktisi industri. Mayoritas unit SFE dirancang dengan pendekatan *black-box* yang mengasumsikan keseragaman tekanan dan suhu di seluruh *packed bed*, padahal fenomena nyata menunjukkan terbentuknya *channeling*, *dead zones*, dan gradien konsentrasi yang signifikan di sepanjang vessel. Lebih lanjut, Toledo dan del Valle (2023, *The Journal of Supercritical Fluids*, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menunjukkan bahwa tahap *pressurization*, *extraction*, dan *depressurization* memiliki profil termal yang sangat berbeda dan saling memengaruhi secara non-linear, sehingga model yang mengabaikan aspek termal akan低估 (underestimate) kebutuhan energi kompresi dan waktu siklus produksi.

Urgensi ekonomi dari persoalan ini cukup substansial. Ekstraktor SFE-CO₂ untuk kanabis medis pada kapasitas 100–1000 L per *batch* memiliki investasi modal (*CAPEX*) berkisar USD 200.000–2.000.000 per unit, dengan biaya operasional (*OPEX*) didominasi oleh konsumsi energi kompresi CO₂ (sekitar 0,8–1,2 kWh per kg CO₂ yang dipompa) dan kebutuhan *winterization* lanjutan. Optimasi satu siklus ekstraksi dari 8 jam menjadi 5 jam melalui pemodelan CFD yang akurat berpotensi meningkatkan kapasitas produksi tahunan sebesar 35–60%, yang berarti *payback period* modal investasi berkurang signifikan. Oleh karena itu, pendekatan pemodelan *axisymmetric flow* yang ditawarkan Obchoei dan Limtrakarn (2024) menjadi kebutuhan strategis bagi rekayasawan proses yang bertanggung jawab atas perancangan, penskalaan (*scale-up*), dan pengendalian mutu proses SFE di fasilitas industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Asumsi Model Aksisimetrik

Model yang dikembangkan Obchoei & Limtrakarn (2024) memanfaatkan asumsi **aksisimetrik** (axisymmetric), yang berarti domain kalkulasi direduksi dari 3D penuh menjadi 2D (bidang *r-z*) dengan geometri silinder extractor vessel. Asumsi ini valid karena: (i) inlet CO₂ umumnya didistribusikan secara seragam melalui *diffuser* annular, (ii) packing biomass kanabis yang digiling cenderung homogen secara radial setelah perlakuan *pre-conditioning*, dan (iii) vessel memiliki geometri rotasional-simetris.

### 2.2 Persamaan Kontinuitas dan Momentum (Navier-Stokes Aksisimetrik)

Persamaan kontinuitas untuk fluida superkritis CO₂ dalam koordinat silindris $(r, z)$:

$$\frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

di mana $\rho$ adalah densitas CO₂ (kg/m³), $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial (m/s). Persamaan momentum Navier-Stokes untuk aliran aksisimetrik, tunak (*steady-state*), dengan asumsi viskositas konstan:

$$\rho \left( v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu \left[ \frac{\partial}{\partial r} \left( \frac{1}{r}\frac{\partial (r v_r)}{\partial r} \right) + \frac{\partial^2 v_r}{\partial z^2} \right]$$

$$\rho \left( v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r} \left( r \frac{\partial v_z}{\partial r} \right) + \frac{\partial^2 v_z}{\partial z^2} \right] - \rho g$$

di mana $\mu$ adalah viskositas dinamik CO₂ (Pa·s), $p$ adalah tekanan (Pa), dan $g$ adalah percepatan gravitasi.

### 2.3 Model Porous Media (Darcy-Forchheimer)

Untuk *packed bed* biomass kanabis, Obchoei & Limtrakarn (2024) menggunakan persamaan **Darcy-Forchheimer** yang menggabungkan kerugian viskos dan inersial:

$$\frac{\partial p}{\partial z} = -\frac{\mu}{K} v_z - \frac{1.75 \rho}{150(1-\epsilon)^{1.5}} \cdot \frac{1}{\epsilon^3 d_p} v_z^2$$

dengan $K$ permeabilitas bed (m²), $\epsilon$ porositas bed, dan $d_p$ diameter partikel biomassa (m).

### 2.4 Persamaan Energi dan Perpindahan Panas

Toledo & del Valle (2023) merumuskan neraca energi *transien* untuk vessel selama tahap *pressurization*, *extraction*, dan *depressurization*:

$$\rho_s c_{p,s} (1-\epsilon) \frac{\partial T_s}{\partial t} + \rho_f c_{p,f} \epsilon \frac{\partial T_f}{\partial t} = k_{eff} \nabla^2 T + h_v (T_f - T_s) + \dot{q}_{reaction}$$

di mana subskrip $s$ menunjukkan padatan biomassa, $f$ fluida CO₂, $k_{eff}$ konduktivitas termal efektif (W/m·K), $h_v$ koefisien perpindahan panas volumetrik (W/m³·K), dan $\dot{q}_{reaction}$ adalah laju panas dari proses desorpsi solut.

### 2.5 Kelarutan Solut dalam CO₂ Superkritis (Model Chrastil)

Kelarutan cannabinoid dalam CO₂ superkritis dimodelkan dengan persamaan semi-empiris **Chrastil**:

$$\ln(S) = \ln(\rho_f) + \frac{a}{T} + b$$

dengan $S$ adalah kelarutan (kg solut/kg CO₂), $\rho_f$ densitas fluida (kg/m³), $T$ suhu (K), serta $a$ dan $b$ adalah konstanta empiris yang tergantung pada jenis solut dan interaksi solut-CO₂. Untuk CBD pada rentang 308–333 K dan 10–30 MPa, konstanta tipikal: $a = -6800 \text{ K}$, $b = -15.5$ (referensi internal paper).

### 2.6 Persamaan Keadaan untuk CO₂

Hubungan tekanan-volume-suhu (PVT) CO₂ dihitung dengan persamaan **Span-Wagner** atau pendekatan **Peng-Robinson**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T)$ dan $b$ yang merupakan fungsi dari temperatur kritis ($T_c = 304.13$ K) dan tekanan kritis ($P_c = 7.377$ MPa) CO₂.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur CFD Aksisimetrik

Tahapan implementasi model mengikuti protokol rekayasa berikut:

**Langkah 1 — Diskritisasi Geometri.**
Vessel ekstraktor dengan dimensi tipikal $D = 0.3$ m, $L = 1.5$ m didiskritisasi pada bidang $(r, z)$ menggunakan *mesh* terstruktur quadrilateral. Jumlah elemen minimum yang direkomendasikan Obchoei & Limtrakarn (2024) adalah ~50.000 elemen dengan *grid independence test* pada 100.000 elemen (deviasi <2%).

**Langkah 2 — Penentuan Syarat Batas.**
- *Inlet* (bawah vessel): laju alir massa $\dot{m}_{CO_2}$ spesifik (misal 0.5 kg/menit), suhu $T_{in}$, tekanan $P_{op}$.
- *Outlet* (atas vessel): kondisi *pressure-outlet* dengan target tekanan operasi.
- Dinding vessel: adiabatic atau *heat flux* sesuai konfigurasi jaket pemanas/pendingin.
- Sumbu aksis ($r = 0$): syarat simetri aksisimetrik $\frac{\partial \phi}{\partial r} = 0$.

**Langkah 3 — Pemilihan Solver.**
Persamaan Navier-Stokes dan energi diselesaikan dengan *coupled solver* pada software CFD komersial (ANSYS Fluent, COMSOL Multiphysics, atau OpenFOAM) dengan skema *second-order upwind* untuk konveksi dan *SIMPLE* atau *SIMPLEC* untuk coupling tekanan-kecepatan.

**Langkah 4 — Validasi Model.**
Toledo & del Valle (2023) memvalidasi model termal mereka dengan data eksperimental dari pilot plant mereka, mencapai deviasi prediksi vs eksperimen <5% untuk profil suhu di tengah bed dan <8% untuk profil konsentrasi solut di outlet. Validasi dilakukan pada tiga kondisi operasi (313 K/15 MPa, 323 K/20 MPa, 333 K/25 MPa).

### 3.2 Prosedur Operasional SFE-CO₂ untuk Kanabis

SOP standar yang selaras dengan ASME BPE-2019 dan ISO 22000 (untuk industri farmasi):

1. **Pre-conditioning biomass**: pengeringan biomassa kanabis hingga kadar air <10%, penggilingan hingga ukuran partikel 1–3 mm, pengukuran densitas bulk.
2. **Charging**: pengisian biomassa ke vessel dengan *tapped density* terukur untuk penentuan porositas $\epsilon$.
3. **Pressurization** (5–15 menit): pemompaan CO₂ dari tekanan storage (5–6 MPa) hingga tekanan operasi (15–30 MPa) dengan kontrol ramp rate suhu jaket.
4. **Static soaking** (0–60 menit): kontak isothermal untuk memungkinkan kesetimbangan awal.
5. **Dynamic extraction** (60–300 menit): sirkulasi CO₂ superkritis dengan laju alir terkontrol, pemisahan di *separator* dengan depresurisasi bertahap.
6. **Depressurization** (5–15 menit): pelepasan tekanan secara terkontrol untuk mencegah *foaming* dan degradasi cannabinoid termal.
7. **Cleaning in Place (CIP)**: flushing dengan etanol food-grade atau CO₂ superkritis kosong.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Definisi Parameter Input

Studi kasus: **ekstraksi CBD dari 25 kg biomassa kanabis** dalam vessel silinder $D = 0.3$ m, $L = 1.5$ m, dengan kondisi operasi $T = 323$ K, $P = 20$ MPa, laju alir CO₂ $\dot{m