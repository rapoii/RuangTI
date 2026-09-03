# 1866 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis: Integrasi Termofluida, Perpindahan Panas, dan Rekayasa Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** *Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process*  
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)  
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi fitokannabinoid global mengalami transformasi signifikan sejak dekade terakhir, didorong oleh legalisasi bertahap produk kanabis medis dan recreational di berbagai yurisdiksi (Kanada, Uruguay, beberapa negara bagian AS, Thailand, Jerman, dan Maladewa). Menurut *International Journal of Thermofluids* edisi 2024, Obchoei dan Limtrakarn menyoroti bahwa pasar global minyak kanabis diproyeksikan menembus **USD 62,6 miliar pada tahun 2028** dengan CAGR (Compound Annual Growth Rate) rata-rata 16,9%, menjadikan efisiensi ekstraksi sebagai variabel strategis yang menentukan daya saing produsen (Obchoei & Limtrakarn, 2024, [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)). Dalam konteks ini, **Supercritical Fluid Extraction with CO₂ (SC-CO₂)** telah muncul sebagai *gold standard* karena sifatnya yang non-toksik, tidak mudah terbakar, selektif terhadap cannabinoid target (terutama THC dan CBD), serta meninggalkan residu pelarut nol pada produk akhir — sebuah prasyarat farmakope yang tidak dapat dikompromikan.

Namun, Obchoei & Limtrakarn (2024) mengidentifikasi *critical pain point* yang selama ini menghambat optimalisasi: **mayoritas desain reaktor ekstraksi SC-CO₂ untuk kanabis masih berbasis asumsi 1-D plug flow atau bahkan model empiris Tan & Liou (1989)** yang gagal menangkap heterogenitas aliran di dalam *packed bed* biomassa. Padahal, geometri reaktor ekstraksi adalah silinder vertikal dengan *aspect ratio* tinggi, dan aliran CO₂ superkritis yang menembus matriks biomassa menunjukkan perilaku aksisimetrik (axisymmetric) yang kuat — di mana variabel-variabel hidrodinamik (kecepatan, tekanan, konsentrasi) berkembang secara radial maupun aksial secara simultan. Ketidakakuratan asumsi 1-D ini menyebabkan kesalahan prediksi *yield* minyak hingga **18–27%** dan *extraction time* yang tidak realistis, sebagaimana dilaporkan oleh Toledo & del Valle (2023) yang menemukan bahwa **fase pressurization dan depressurization** juga menjadi kontributor dominan terhadap total *processing time* dan konsumsi energi spesifik (Toledo & del Valle, 2023, [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Studi Toledo-del Valle secara khusus membuktikan bahwa mengabaikan perpindahan panas laten selama siklus pressurization dapat menyebabkan *error* prediksi suhu internal reaktor hingga 12 K, yang secara langsung mengubah densitas CO₂ superkritis dan solubilitas cannabinoid. Kombinasi dua paper ini membangun argumen bahwa **pemodelan termofluida aksisimetrik 2-D yang coupled dengan perpindahan panas transien** adalah kebutuhan industri yang tidak dapat ditunda lagi untuk menekan *unit cost of production* dan memenuhi standar GMP (Good Manufacturing Practice) farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Persamaan Kontinuitas dan Momentum Aksisimetrik

Model yang dikembangkan Obchoei & Limtrakarn (2024) menggunakan formulasi **Navier-Stokes 2-D aksisimetrik, transien, inkompresibel-modified** untuk fluida CO₂ superkritis yang mengalir dalam reaktor silinder. Dalam koordinat silinder $(r, z)$, dengan $u_r$ dan $u_z$ masing-masing menyatakan komponen kecepatan radial dan aksial, sistem persamaan governing-nya adalah:

**Kontinuitas:**
$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

**Momentum arah-r:**
$$\rho\left(\frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] + S_{r,\text{porous}}$$

**Momentum arah-z (dengan kontribusi gravitasi dan *Darcy-Forchheimer*):**
$$\rho\left(\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{\kappa}u_z - \frac{\rho C_F}{\sqrt{\kappa}}|u_z|u_z + \rho g$$

di mana $S_{r,\text{porous}} = -\frac{\mu}{\kappa}u_r$ adalah *source term* untuk media berpori (biomassa kanabis), $\kappa$ adalah permeabilitas intrinsik, $C_F$ adalah koefisien *Forchheimer* inertia-loss, dan $g$ adalah percepatan gravitasi (Obchoei & Limtrakarn, 2024).

### 2.2. Persamaan State untuk CO₂ Superkritis

Densitas CO₂ pada kondisi superkritis ($T > T_c = 304{,}13\,\text{K}$, $P > P_c = 7{,}38\,\text{MPa}$) tidak lagi mengikuti hukum gas ideal. Paper menggunakan **persamaan state Peng-Robinson** (1976) untuk menutup sistem:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter:
$$a = 0{,}45724 \frac{R^2 T_c^2}{P_c}, \quad b = 0{,}07780 \frac{RT_c}{P_c}, \quad \alpha(T) = \left[1 + \kappa_0\left(1 - \sqrt{T/T_c}\right)\right]^2$$
$$\kappa_0 = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2, \quad \omega_{\text{CO}_2} = 0{,}225$$

Nilai $\alpha(T)$ menentukan deviasi densitas dari gas ideal dan secara langsung memengaruhi **koefisien partisi (K) cannabinoid antara fasa padat dan fasa fluida**, yang didekati oleh model Chrastil (1982):

$$C_{eq} = \rho^{k}\exp\left(\frac{a'}{T} + b'\right)$$

dengan $k \approx 2{,}3$–$2{,}7$ untuk THC dan CBD, dan $a'$, $b'$ adalah konstanta yang bergantung pada jenis cannabinoid.

### 2.3. Persamaan Energi & Perpindahan Panas (Coupled dengan Toledo & del Valle, 2023)

Model termal coupled mengikuti kerangka Toledo & del Valle (2023) yang membagi proses menjadi tiga tahap: **pressurization, extraction (holding), depressurization**. Persamaan energi transien untuk fasa fluida dalam *porous medium*:

$$\varepsilon \rho_f c_{p,f}\left(\frac{\partial T_f}{\partial t} + u_z \frac{\partial T_f}{\partial z}\right) = k_{eff,f}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T_f}{\partial r}\right) + \frac{\partial^2 T_f}{\partial z^2}\right] + h_v (T_s - T_f) - h_{fg}\frac{\partial \rho_f}{\partial t}\bigg|_{phase-change}$$

Untuk fasa padat (biomassa):
$$(1-\varepsilon)\rho_s c_{p,s}\frac{\partial T_s}{\partial t} = k_{eff,s}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T_s}{\partial r}\right) + \frac{\partial^2 T_s}{\partial z^2}\right] - h_v (T_s - T_f) + Q_{diss}$$

Tahap *pressurization* menurut Toledo & del Valle (2023) menambahkan *source term* kompresi ekspansi:

$$Q_{comp} = \beta T_f \frac{\partial p}{\partial t}$$

di mana $\beta$ adalah koefisien ekspansi termal volumetrik CO₂. Tahap *depressurization* memicu inversi tanda $\partial p/\partial t$ dan pendinginan Joule-Thomson yang menurunkan suhu lokal secara spontan.

### 2.4. Kinetika Ekstraksi & Perpindahan Massa

Mass balance cannabinoid dalam fase fluida (species transport):

$$\frac{\partial (\rho Y_i)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r Y_i)}{\partial r} + \frac{\partial (\rho u_z Y_i)}{\partial z} = D_{i,m}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial Y_i}{\partial r}\right) + \frac{\partial^2 Y_i}{\partial z^2}\right] - R_{ext,i}$$

dengan laju ekstraksi mengikuti *broken + intact cells model* Martinez et al. (2003) yang dimodifikasi:

$$R_{ext}(t) = k_1 C_{eq}(T, P) \exp(-k_1 t) \cdot x_1 + k_2 \left[C_{eq} - C(t)\right] \cdot x_2$$

di mana $x_1$ dan $x_2$ adalah fraksi sel rusak dan sel utuh biomassa, $k_1$ dan $k_2$ adalah konstanta laju (umumnya $k_1 \gg k_2$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model Obchoei-Limtrakarn & Toledo-del Valle mengikuti **SOP 7-tahap** berikut:

**Tahap 1 — *Pre-conditioning* & Loading Biomass.** Kanabis kering (kadar air < 10%, lolos uji mikotoksin & logam berat) digiling hingga ukuran partikel 0,5–2,0 mm dan dimasukkan ke reaktor dengan porositas target $\varepsilon = 0{,}40 \pm 0{,}05$. Keseragaman packing diverifikasi melalui *pressure drop test* (target $\Delta P = 0{,}5$–$2{,}0$ bar pada laju uji 1 kg/jam CO₂).

**Tahap 2 — Pressurization Isotermal Terkontrol.** CO₂ dipompa dari tangki penyimpanan ($P_0 = 5{,}5$ MPa, $T_0 = 283$ K) ke kondisi operasi ($P = 25$–$35$ MPa, $T = 313$–$333$ K). Sesuai rekomendasi Toledo & del Valle (2023), laju pressurization dibatasi $\partial P/\partial t \le 1{,}5$ MPa/menit untuk menghindari gradien termal > 8 K yang menurunkan solubilitas sesaat.

**Tahap 3 — *Static Soaking* (opsional, 10–30 menit).** CO₂ didiamkan untuk memungkinkan difusi intra-partikel. Laju ekstraksi mengikuti fase washing cepat (*fast extraction period*).

**Tahap 4 — *Dynamic Extraction* (mode plug-flow, 60–180 menit