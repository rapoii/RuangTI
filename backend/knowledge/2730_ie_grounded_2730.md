# 2730 — Model Aliran Akisimetrik Ekstraksi Minyak Kanabis dengan Proses Supercritical Fluid Extraction (SFE) CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (Cannabis sativa) menggunakan CO₂ superkritis telah menjadi tolok ukur emas (gold standard) dalam industri farmasi, nutraceutical, dan kosmetik karena kemampuannya menghasilkan ekstrak bebas pelarut residual, selektivitas tinggi terhadap cannabinoid (THC, CBD, CBG), serta kemampuan tunable melalui parameter tekanan dan suhu. Pasar global ekstrak kanabis diproyeksikan mencapai USD 23,5 miliar pada tahun 2028 dengan CAGR lebih dari 16%, sehingga optimalisasi proses SFE-CO₂ menjadi agenda strategis bagi insinyur proses dan industrial engineering practitioner (Obchoei & Limtrakarn, 2024).

Permasalahan mendasar pada desain reaktor SFE skala industri adalah fenomena *channeling* dan *bypassing* aliran di dalam *packed bed* biomassa yang menyebabkan distribusi radial konsentrasi dan suhu tidak homogen. Model satu-dimensi (1D) yang lazim digunakan dalam literatur klasik—seperti model Esquível-Bernardo-Carvalho—cukup untuk memprediksi yield global tetapi gagal menangkap gradien radial. Obchoei dan Limtrakarn (2024) menekankan bahwa asumsi aliran seragam secara radial pada reaktor bertekanan tinggi (10–35 MPa) mengabaikan efek dinding dan distribusi ukuran partikel biomassa yang bervariasi, sehingga menghasilkan deviasi hingga 15–22% terhadap data eksperimental.

Urgensi operasional semakin meningkat ketika dikaitkan dengan biaya energi kompresi CO₂ yang menyumbang 30–45% dari total biaya operasional fasilitas SFE. Tanpa pemodelan termodinamika dan hidrodinamika yang akurat, insinyur tidak dapat menentukan waktu siklus optimal antara tahap *pressurization*, *extraction*, dan *depressurization*. Toledo dan del Valle (2023) menunjukkan bahwa perpindahan panas selama ketiga tahap ini secara signifikan mengubah profil suhu internal bed, yang selanjutnya memengaruhi kelarutan solut dan yield akhir. Dengan demikian, integrasi model aliran akisimetrik dengan model perpindahan panas transien menjadi kebutuhan imperatif dalam desain reaktor SFE generasi baru, terutama untuk aplikasi farmasi yang memerlukan validasi *Good Manufacturing Practice* (GMP).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pembawa dalam Koordinat Silindris (Axisymmetric)

Model yang dikembangkan oleh Obchoei dan Limtrakarn (2024) menggunakan koordinat silindris $(r, z)$ dengan asumsi simetri aksial ($\partial/\partial\theta = 0$). Persamaan kontinuitas, momentum, energi, dan spesies diselesaikan secara kopling menggunakan skema komputasional *finite volume*.

**Persamaan Kontinuitas:**
$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial(\rho r u)}{\partial r} + \frac{\partial(\rho w)}{\partial z} = 0$$

dengan $\rho$ adalah densitas CO₂ superkritis (kg/m³), $u$ adalah komponen kecepatan radial (m/s), dan $w$ adalah komponen kecepatan aksial (m/s).

**Persamaan Momentum Arah Radial:**
$$\rho\left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial r} + w\frac{\partial u}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right) + \frac{\partial^2 u}{\partial z^2} - \frac{u}{r^2}\right] + S_r$$

**Persamaan Momentum Arah Aksial:**
$$\rho\left(\frac{\partial w}{\partial t} + u\frac{\partial w}{\partial r} + w\frac{\partial w}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial w}{\partial r}\right) + \frac{\partial^2 w}{\partial z^2}\right] - \frac{150\mu(1-\varepsilon)^2}{d_p^2 \varepsilon^3} w + S_z$$

dengan $\mu$ viskositas dinamik CO₂ (Pa·s), $\varepsilon$ porositas bed, $d_p$ diameter partikel (m), dan $S_z$ adalah sumber gravitasi.

### 2.2 Persamaan Energi (Heat Transfer)

Merujuk pada Toledo dan del Valle (2023), persamaan energi dengan konveksi–konduksi dan sumber kalor kompresi isentalpi:

$$\rho c_p \left(\frac{\partial T}{\partial t} + u\frac{\partial T}{\partial r} + w\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{comp}$$

dengan $c_p$ kapasitas panas spesifik (J/kg·K), $k_{eff}$ konduktivitas efektif termal (W/m·K), dan $\dot{q}_{comp}$ laju kalor kompresi yang relevan pada tahap *pressurization*.

### 2.3 Persamaan Transport Spesies (Mass Transfer)

$$\varepsilon\frac{\partial C}{\partial t} + u\frac{\partial C}{\partial r} + w\frac{\partial C}{\partial z} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - \rho_s(1-\varepsilon)\frac{\partial q}{\partial t}$$

dengan $C$ konsentrasi solut dalam fluida (kg/m³), $D_{eff}$ koefisien difusi efektif (m²/s), $\rho_s$ densitas solid, dan $q$ konsentrasi solut dalam matriks solid.

### 2.4 Persamaan Keadaan untuk CO₂ Superkritis

Densitas CO₂ dihitung menggunakan persamaan keadaan Peng-Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a = 0,45724 R^2 T_c^2/P_c$, $b = 0,07780 R T_c/P_c$, dan fungsi alfa $\alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses SFE-CO₂

1. **Persiapan Biomassa**: Pengeringan, penggilingan, dan pengayakan biomassa kanabis hingga $d_p = 0,5$–$1,5$ mm dengan kadar air $<10\%$ untuk mencegah terbentuknya lapisan air yang menghambat difusi.
2. *Loading* ke *extraction vessel* (EV) dan *packing* homogen untuk mengendalikan porositas $\varepsilon = 0,35$–$0,45$.
3. **Pressurization**: CO₂ dipompa dari tangki penyimpanan hingga mencapai $P = 25$ MPa dalam waktu 60–180 detik. Selama tahap ini, perpindahan panas kompresi-ekspansi memengaruhi profil suhu (Toledo & del Valle, 2023).
4. **Extraction Steady-State**: Pemompahan CO₂ pada laju $0,8$–$2,0$ kg/jam dengan suhu konstan $T = 313$–$328$ K selama 90–240 menit.
5. **Depressurization**: Pelepasan tekanan secara gradual (2–5 MPa/menit) menuju *separation vessel* (SV) pada $P = 5$–$6$ MPa di mana solut akan mengendap.
6. **Collection & Post-Processing**: Pemisaran minyak, analisis HPLC untuk kuantifikasi cannabinoid.

### 3.2 Arsitektur Komputasional Model

Model numerik diimplementasikan pada *Computational Fluid Dynamics* (CFD) open-source OpenFOAM atau ANSYS Fluent dengan modul tambahan untuk properti CO₂ superkritis. Mesh *structured* dengan elemen predominan *hexahedral*, refinement di dinding EV dan zona inlet. Skema diskritisasi: *second-order upwind* untuk konveksi, *central differencing* untuk difusi, dan algoritma SIMPLE untuk coupling tekanan–kecepatan. Validasi dilakukan terhadap data eksperimental Obchoei & Limtrakarn (2024) dengan deviasi $<8\%$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Sistem

Ekstraktor pilot-plant dengan parameter operasi:
- Diameter reaktor: $D = 0,10$ m (radius $R = 0,05$ m)
- Tinggi bed biomassa: $H = 0,20$ m
- Porositas: $\varepsilon = 0,40$
- Diameter partikel: $d_p = 1,0$ mm
- Tekanan operasi: $P = 25$ MPa
- Suhu operasi: $T = 318$ K (45°C)
- Laju alir massa CO₂: $\dot{m} = 1,5$ kg/jam

### 4.2 Perhitungan Densitas CO₂ Superkritis

Menggunakan Persamaan Peng-Robinson pada $T_c = 304,13$ K, $P_c = 7,377$ MPa, $\omega = 0,225$:

$$\kappa = 0,37464 + 1,54226\omega - 0,26992\omega^2 =