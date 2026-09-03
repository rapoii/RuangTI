# 2842 — Pemodelan Aliran Aksisimetrik Ekstraksi Minyak Cosa dengan Ekstraksi Fluida Superkritikal CO₂ untuk Optimasi Proses Manufaktur Farmasi & Nutraseutika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanes global sedang mengalami transformasi paradigma yang signifikan seiring dengan meningkatnya permintaan terhadap produk cannabinoid farmasi (CBD, CBG, THC) berkualitas tinggi untuk aplikasi medis, kosmetik, dan nutraseutika. Dalam konteks ini, ekstraksi fluida superkritikal dengan karbon dioksida (SC-CO₂) muncul sebagai teknologi *green extraction* yang dominan karena sifatnya yang tidak meninggalkan residu pelarut toksik, selektivitas tinggi melalui tuning tekanan dan suhu, serta kemampuan daur ulang pelarut CO₂ yang mendekati 100% (Obchoei & Limtrakarn, 2024). Pasar global ekstraksi cannabis diproyeksikan mencapai USD 8,6 miliar pada tahun 2028 dengan CAGR 16,3%, didorong oleh legalisasi progresif di yurisdiksi utama seperti Kanada, Jerman, Thailand, dan beberapa negara bagian Amerika Serikat.

Urgensi teknis dan ekonomis dari optimalisasi proses ini bersandar pada tiga permasalahan fundamental yang diidentifikasi oleh Obchoei & Limtrakarn (2024, DOI: 10.1016/j.ijft.2024.100682). Pertama, desain reaktor ekstraksi konvensional seringkali bersifat *trial-and-error* tanpa pemahaman kuantitatif mengenai profil aliran fluida superkritikal dalam unggun (packed bed) biomassa cannabis. Kedua, fenomena transfer massa dan panas selama proses pengekstrakan sangat kompleks karena melibatkan keseimbangan multi-fase (solut-pelarut-padatan) pada kondisi di dekat titik kritis CO₂ (T_c = 304,25 K, P_c = 73,8 bar) di mana sifat termodinamika fluida berubah secara dramatis. Ketiga, *bottleneck* produksi pada fasilitas industri seringkali terletak pada tahapan *pressurization*, *extraction*, dan *depressurization* yang masing-masing memiliki profil termal unik yang mempengaruhi yield dan kualitas cannabinoid (Toledo & del Valle, 2023, DOI: 10.1016/j.supflu.2023.106046).

Dalam kerangka Sistem Industri modern, permasalahan ini memerlukan pendekatan *Computational Fluid Dynamics* (CFD) yang berbasis pada model aliran aksisimetrik untuk memprediksi profil tekanan, konsentrasi, dan suhu di dalam vessel ekstraksi. Model seperti ini memungkinkan insinyur proses melakukan *scale-up* dari skala laboratorium (50–500 mL) ke skala industri (100–1000 L) secara rasional, mengurangi CapEx dan OpEx fasilitas produksi hingga 20–30% (Obchoei & Limtrakarn, 2024). Selain itu, integrasi dengan sistem otomasi PLC/SCADA memungkinkan implementasi strategi *Quality by Design* (QbD) yang diwajibkan oleh regulator farmasi seperti FDA, EMA, dan BPOM.

## 2. Landasan Teori & Formulasi Matematis

Model aliran aksisimetrik yang dikembangkan oleh Obchoei & Limtrakarn (2024) dibangun di atas sistem koordinat silindris $(r, z)$ dengan asumsi aliran tunak (*steady-state*), termal yang dapat dimodelkan secara kopling, dan geometri vessel yang simetris terhadap sumbu vertikal. Formulasi matematis governing equations mencakup empat persamaan diferensial parsial utama.

**Persamaan Kontinuitas (Konservasi Massa):**

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r \rho v_r\right) + \frac{\partial}{\partial z}\left(\rho v_z\right) = 0$$

di mana $v_r$ dan $v_z$ adalah komponen kecepatan dalam arah radial dan aksial, sedangkan $\rho$ adalah densitas CO₂ superkritikal yang sangat bergantung pada tekanan dan suhu, umumnya dimodelkan dengan persamaan状态 Peng-Robinson atau Span-Wagner.

**Persamaan Momentum Navier-Stokes (Arah Radial dan Aksial):**

$$\rho\left(v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] - \frac{\mu}{\alpha_{PB}}v_r + S_{r}$$

$$\rho\left(v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu}{\alpha_{PB}}v_z + \rho g + S_{z}$$

Terma $\mu/\alpha_{PB}$ merupakan *Darcy drag term* untuk media berpori (packed bed biomassa) dengan $\alpha_{PB}$ adalah permeabilitas intrinsik yang dihitung dari persamaan Kozeny-Carman:

$$\alpha_{PB} = \frac{d_p^2 \varepsilon^3}{150(1-\varepsilon)^2}$$

di mana $d_p$ adalah diameter partikel cannabis rata-rata dan $\varepsilon$ adalah porositas unggun (umumnya 0,35–0,45 untuk unggan biomassa nabati).

**Persamaan Energi (Konservasi Panas):**

Tahap *pressurization*, *extraction*, dan *depressurization* memiliki karakteristik termal berbeda seperti diuraikan oleh Toledo & del Valle (2023, DOI: 10.1016/j.supflu.2023.106046). Persamaan energi untuk fase unsteady:

$$\rho c_p \left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{diss} - \dot{q}_{evap}$$

di mana $k_{eff}$ adalah konduktivitas efektif yang mencakup kontribusi konduksi padat-cair dan dispersi termal, $\dot{q}_{diss}$ adalah disipasi viskos, dan $\dot{q}_{evap}$ adalah panas laten yang terkait dengan pelarutan CO₂ ke dalam solut. Toledo & del Valle (2023) menekankan bahwa selama *pressurization* laju kenaikan suhu dapat mencapai 2–5 K/min yang memerlukan jacket heating terkontrol, sementara *depressurization* bersifat adiabatik-eksotermik dengan *Joule-Thomson inversion* pada kondisi tertentu.

**Persamaan Transfer Massa (Species Transport):**

$$\frac{\partial}{\partial t}\left(\rho Y_i\right) + \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho v_r Y_i\right) + \frac{\partial}{\partial z}\left(\rho v_z Y_i\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho D_{eff}\frac{\partial Y_i}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho D_{eff}\frac{\partial Y_i}{\partial z}\right) - R_i$$

di mana $Y_i$ adalah fraksi massa komponen cannabinoid ke-$i$ (CBD, THC, CBG, terpenoid) dalam fasa fluida, $D_{eff}$ adalah koefisien difusi efektif, dan $R_i$ adalah laju pelarutan solut dari padatan ke fluida mengikuti model kinetika *shrinking core* atau model Sovová:

$$R_i = k_f a_p (C_i^* - C_i)$$

dengan $k_f$ sebagai koefisien transfer massa fluida, $a_p$ luas spesifik partikel, dan $C_i^*$ konsentrasi kesetimbangan yang dihitung melalui persamaan状态 kubik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi model aksisimetrik untuk proses SC-CO₂ pada fasilitas ekstraksi cannabis mengikuti kerangka SOP yang terdiri dari delapan tahapan sistematis (Obchoei & Limtrakarn, 2024; Toledo & del Valle, 2023):

**Tahap 1: Karakterisasi Bahan Baku.** Biomassa cannabis kering dengan kadar air <10% dikarakterisasi untuk kandungan cannabinoid target (analisis HPLC), distribusi ukuran partikel (sieving analysis, target $d_p = 0,3$–$1,0$ mm), dan densitas unggun ($\rho_b \approx 350$ kg/m³).

**Tahap 2: Persiapan Vessel Ekstraksi.** Vessel silindris volume $V_v$ (misal 100 L) dengan diameter dalam $D_v$ dan tinggi $H_v$ diisi biomassa hingga tinggi unggun $H_b \approx 0,8 H_v$. Sistem perpipaan inlet (bottom-up flow) dan outlet (top) dilengkapi filter 5–25 μm untuk mencegah entrainment partikel.

**Tahap 3: Pressurization (10–30 menit).** CO₂ dari storage tank di-pressurisasi hingga tekanan operasi $P_{op} = 150$–$350$ bar menggunakan diaphragm pump atau piston pump. Berdasarkan model Toledo & del Valle (2023), tahap ini memerlukan kontrol ramp suhu jacket untuk menghindari gradien termal > 5°C yang dapat merusak termolabil cannabinoid.

**Tahap 4: Stabilisasi Termal (5–10 menit).** Sistem dipertahankan pada $(P_{op}, T_{op})$ hingga kondisi tunak tercapai. Validasi dilakukan dengan monitoring $\Delta T < \pm 1°C$ pada thermocouple multi-titik.

**Tahap 5: Static Soaking (opsional, 0–60 menit).** CO₂ superkritikal didiamkan dalam kontak dengan biomassa untuk memungkinkan saturasi kesetimbangan awal; laju transfer massa tertinggi terjadi pada fase dinamis berikutnya.

**Tahap 6: Dynamic Extraction (60–240 menit).** Aliran CO₂ superkritikal dengan *mass flow rate* $\dot{m}_{CO_2} = 5$–$20$