# 1594 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Proses Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi kanabis global mengalami transformasi teknologis yang pesat sejak deregulasi parsial di berbagai yurisdiksi pada 2018–2023. Permintaan akan *cannabidiol* (CBD) dan tetrahidrokanabinol (THC) sebagai bahan baku farmasi, nutraceutical, serta kosmetik medis meningkat dengan *compound annual growth rate* (CAGR) melebihi 16,8% menurut proyeksi pasar internasional. Di tengah ekspansi ini, teknologi *Supercritical Fluid Extraction* (SFE) dengan karbon dioksida (CO₂) muncul sebagai *gold standard* karena meninggalkan residu pelarut, memiliki selektivitas tinggi terhadap cannabinoid target, dan memenuhi persyaratan *Good Manufacturing Practice* (GMP) farmasi seperti yang diminta oleh FDA, EMA, dan BPOM RI. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menekankan bahwa optimalisasi proses SFE-CO₂ selama ini masih bersifat *trial-and-error* berbasis desain eksperimen (*Design of Experiments*) tanpa kemampuan memprediksi distribusi fluida di dalam reaktor, sehingga *yield* aktual di lapangan seringkali berada 18–27% di bawah potensial teoritis (Obchoei & Limtrakarn, 2024, [DOI:10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Konteks operasional yang melatarbelakangi penelitian ini adalah struktur biaya (*cost structure*) pabrik ekstraksi modern yang didominasi oleh tiga pos: konsumsi energi pada tahap kompresi dan pemanasan (38–45%), biaya modal (*capex*) bejana tekan ASME Section VIII Division 1 (22–30%), serta *downtime* akibat *choking*, *channeling*, dan degradasi termal cannabinoid (15–20%). Toledo dan del Valle (2023) dalam *Journal of Supercritical Fluids* menunjukkan bahwa perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* menentukan profil suhu transien yang secara langsung memengaruhi selektivitas dan kualitas produk akhir (Toledo & del Valle, 2023, [DOI:10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Tanpa integrasi model termofluida yang akurat, *plant manager* tidak memiliki alat untuk menentukan *sweet spot* antara laju alir massa, gradien tekanan, dan suhu operasi—suatu kelemahan strategis yang menghambat profitabilitas fasilitas SFE yang modalnya mencapai USD 4–8 juta per lini produksi.

Urgensi rekayasa industri pada modul ini adalah menjembatani kesenjangan antara literatur akademik *computational fluid dynamics* (CFD) murni dengan kebutuhan praktis teknisi pabrik. Paper Obchoei & Limtrakarn (2024) menyediakan model aksisimetrik 2D yang mampu memprediksi profil kecepatan, tekanan, dan konsentrasi cannabinoid dalam waktu komputasi 4–6 jam menggunakan *mesh* 35.000–50.000 elemen—jauh lebih ringan daripada simulasi 3D *full-scale* yang membutuhkan 48–72 jam. Integrasi dengan model perpindahan panas Toledo & del Valle (2023) memungkinkan simulasi *transient* yang realistis, sehingga keputusan rekayasa seperti penempatan distributor CO₂, konfigurasi *baffle*, dan tinggi bed material dapat dioptimasi secara kuantitatif sebelum fabrikasi.

---

## 2. Landasan Teori & Formulasi Matematis

Model aksisimetrik yang dikembangkan oleh Obchoei dan Limtrakarn (2024) dibangun di atas tiga persamaan konservasi utama yang diselesaikan dalam koordinat silinder $(r, z)$ dengan asumsi aliran laminar *steady-state* dan properti fluida dievaluasi melalui persamaan keadaan *Peng-Robinson*.

**Persamaan Kontinuitas** untuk aliran aksisimetrik dalam koordinat silinder:

$$\frac{1}{r}\frac{\partial}{\partial r}(r \rho v_r) + \frac{\partial}{\partial z}(\rho v_z) = 0$$

di mana $\rho$ adalah densitas CO₂ superkritikal (kg/m³), $v_r$ adalah komponen kecepatan radial, dan $v_z$ adalah komponen kecepatan aksial. Dalam pendekatan Obchoei & Limtrakarn, densitas $\rho$ tidak lagi dianggap konstan karena CO₂ superkritikal menunjukkan kompresibilitas tinggi di atas titik kritis ($T_c = 304{,}13$ K, $P_c = 73{,}8$ bar).

**Persamaan Momentum** (Navier-Stokes aksisimetrik) untuk komponen radial:

$$\rho\left(v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r v_r)}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2}\right] - \frac{\mu v_r}{r^2}$$

dan komponen aksial:

$$\rho\left(v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g$$

dengan $\mu$ sebagai viskositas dinamis CO₂ superkritikal (Pa·s), $P$ tekanan (Pa), dan $g$ percepatan gravitasi. Viskositas CO₂ pada kondisi operasi tipikal ($P = 250$ bar, $T = 323$ K) adalah $\mu \approx 7{,}2 \times 10^{-5}$ Pa·s (Obchoei & Limtrakarn, 2024).

**Persamaan Energi** yang mengintegrasikan kontribusi perpindahan panas dari Toledo & del Valle (2023) dalam regime transien:

$$\rho c_p \frac{\partial T}{\partial t} + \rho c_p (v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z}) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + \dot{q}_{rxn}$$

dengan $c_p$ kapasitas panas spesifik (J/kg·K), $k$ konduktivitas termal (W/m·K), dan $\dot{q}_{rxn}$ sebagai sumber panas akibat dekompresi Joule-Thomson ketika CO₂ mengalir melalui katup ekspansi ($\dot{q}_{rxn} = -\alpha_T \mu \Phi$, dengan $\alpha_T$ koefisien Joule-Thomson).

**Persamaan Transport Cannabinoid** mengikuti model konveksi-difusi dengan istilah *source* dari matriks padat:

$$\frac{\partial C}{\partial t} + (v_r \frac{\partial C}{\partial r} + v_z \frac{\partial C}{\partial z}) = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] + k_L a (C^* - C)$$

di mana $C$ adalah konsentrasi cannabinoid terlarut (kg/m³), $D_{eff}$ difusivitas efektif (m²/s), $C^*$ konsentrasi kesetimbangan (kelarutan), dan $k_L a$ koefisien transfer massa volumetrik (s⁻¹). Persamaan keadaan *Peng-Robinson* yang digunakan adalah:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a = 0{,}45724 R^2 T_c^2 / P_c$, $b = 0{,}07780 R T_c / P_c$, dan $\alpha(T) = [1 + \kappa(1 - \sqrt{T/T_c})]^2$, $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$ (faktor akentrisitas $\omega = 0{,}225$ untuk CO₂).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi model aksisimetrik ini memerlukan prosedur operasional terstandar yang mengintegrasikan tahap komisioning, validasi, dan *predictive control*. SOP ini selaras dengan standar *ASME B31.3* untuk perpipaan proses, *ASME BPVC Section VIII* untuk bejana tekan, dan *ASTM D8236* untuk ekstraksi kanabis.

**Tahap 1: Karakterisasi Umpan (Feedstock).** Material kanabis masuk dicacah pada ukuran partikel 0,5–2,0 mm dan dikondisikan pada *moisture content* 8–12% wb. Analisis *High-Performance Liquid Chromatography* (HPLC) dilakukan untuk menentukan profil cannabinoid awal (CBD, THC, CBG, CBN). Kadar air harus diverifikasi karena Toledo & del Valle (2023) membuktikan bahwa air di atas 14% akan menghambat difusi CO₂ dan meningkatkan konsumsi spesifik CO₂/kg biomassa sebesar 22–35%.

**Tahap 2: Pressurization & Heat-Up (15–25 menit).** Bejana ekstraktor diisi biomassa hingga *packing density* $\rho_b = 350–450$ kg/m³, kemudian CO₂ dipompa dari kondisi cair ($T = 278$ K, $P = 60$ bar) hingga kondisi superkritikal target. Pemanasan dilakukan secara simultan melalui jaket eksternal dengan *duty* 8–14 kW untuk ekstraktor volume 10 L. Distribusi suhu dimonitor melalui 6–8 termokopel tipe-K terdistribusi secara aksial dan radial.

**Tahap 3: Dynamic Extraction (60–180 menit).** CO₂ superkritikal dialirkan secara *co-current* dari atas ke bawah melalui bed biomassa dengan *Solvent-to-Feed ratio* (S/F) 20–50 kg CO₂/kg biomassa. Laju alir massa tipikal $\dot{m} = 0{,}8–2{,}5$ kg/menit dipertahankan konstan menggunakan *mass flow controller* (akurasi ±1%). Tekanan operasi $P_{op} = 200–300$ bar dan suhu $T_{op} = 313–333$ K dijaga dalam toleransi ±2 bar dan ±1 K sesuai rekomendasi Obchoei & Limtrakarn (2024).

**Tahap 4: Separasi & Depressurization.** Larutan CO₂-cannabinoid memasuki separator primer ($P_1 = 60–80$ bar, $T = 313$ K) untuk pengendapan *wax* dan *trigliserida* berat, kemudian separator sekunder ($P_2 = 25–35$ bar, $T = 303$ K) untuk pemisahan cannabinoid target. CO₂ direcycle melalui kompresor dan *condenser*. Tahap *depressurization* ini harus dikontrol untuk menghindari pendinginan Joule-Thomson di bawah 263 K yang dapat merusak segel dan katup (Toledo & del Valle, 2023).

**Tahap 5: Validasi Model.** Simulasi aksisimetrik dijalankan dengan parameter input aktual dan divalidasi terhadap data Plant Historian (akurasi target: deviasi <8% untuk profil tekanan, <12% untuk profil konsentrasi). Jika deviasi melebihi ambang batas, dilakukan *re-meshing* dan kalibrasi ulang parameter $D_{eff}$ dan $k_L a$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Ekstraktor silinder volume $V = 50$ L (diameter dalam $D = 0{,}30$ m, tinggi $H = 0{,}71$ m) diisi 18 kg biomassa kanabis pada $\rho_b = 400$ kg/m³ (porositas $\varepsilon = 0{,}58$). Kondisi operasi: $P_{op} = 250$ bar, $T_{op} = 323$ K, laju alir massa CO₂ $\dot{m} = 1{,}5$ kg/menit.

**Langkah 1: Hitung properti CO₂ superkritikal.** Menggunakan persamaan *Peng-Robinson* pada $T = 323$ K, $P = 250$ bar:

$$Z = \frac{PV_m}{RT} \Rightarrow \rho_{CO_2} \approx 762 \text{ kg/m}^3$$

Viskositas dinamis dihitung dari korelasi Chung et al.: $\mu_{CO_2} = 7{,}18 \times 10^{-5}$ Pa·s. Kapasitas panas: $c_p = 1850$ J/kg·K. Konduktivitas termal: $k = 0{,}082$ W/m·.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
