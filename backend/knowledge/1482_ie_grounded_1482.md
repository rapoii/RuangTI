# 1482 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan CO₂ Superkritik: Integrasi Model Termofluida untuk Optimasi Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi *cannabis oil* (minyak cannabis) mengalami transformasi signifikan sejak legalisasi bertahap di berbagai yurisdiksi, memunculkan permintaan global akan cannabidiol (CBD), tetrahydrocannabinol (THC), dan *terpenoid* bernilai tambah tinggi untuk aplikasi farmasi, nutraceutical, dan kosmetik. Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, volume pasar minyak cannabis global diproyeksikan mencapai USD 23,5 miliar pada 2028 dengan CAGR >18%, sehingga efisiensi proses ekstraksi menjadi imperatif strategis. Di antara teknologi ekstraksi yang tersedia—misalnya ekstraksi pelarut organik (etanol, heksana), *cold-pressing*, dan *hydrodistillation*—ekstraksi fluida superkritik dengan CO₂ (SFE-CO₂) muncul sebagai *gold standard* karena sifatnya yang *Generally Recognized as Safe* (GRAS), selektivitas tinggi, kemampuan *tunable*, dan tidak meninggalkan residu pelarut (Obchoei & Limtrakarn, 2024).

Namun demikian, operasi SFE-CO₂ menghadapi tantangan rekayasa yang substansial: tekanan operasi tinggi (200–300 bar), perpindahan massa yang terbatas oleh difusi intra-partikel, dan fenomena *channeling* dalam *packed bed* yang menurunkan yield hingga 30% pada skala pilot. Obchoei & Limtrakarn (2024) menyoroti bahwa pemahaman terhadap profil aliran aksisimetrik dalam vessel ekstraktor—yang selama ini sering diperlakukan sebagai model 1-D pseudo-steady—menjadi krusial untuk optimalisasi. Sementara itu, Toledo & del Valle (2023) dalam *The Journal of Supercritical Fluids* menekankan bahwa perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* secara dominan menentukan kualitas yield dan integritas termal kanabinoid, yang terdegradasi signifikan di atas 70°C.

Dalam konteks Teknik Industri, masalah ini bukan semata persoalan kimia proses, melainkan masalah optimasi sistem yang menggabungkan *process design*, *heat integration*, dan *throughput maximization*. Studi ini memposisikan pemodelan termofluida sebagai *enabling technology* untuk transisi dari operasi *batch* artisanal menuju manufaktur *continuous* yang memenuhi kaidah *Good Manufacturing Practice* (cGMP) dan standar *ASTM* untuk proses farmasi. Urgensi ekonominya tampak pada trade-off antara biaya CAPEX vessel bertekanan tinggi (mencapai USD 250.000–500.000 per unit pada kapasitas 100 L) dan margin produk yang sensitif terhadap yield (setiap peningkatan yield 1% bernilai USD 50.000–200.000/tahun pada kapasitas menengah).

---

## 2. Landasan Teori & Formulasi Matematis

Model aksisimetrik yang dikembangkan Obchoei & Limtrakarn (2024) dibangun di atas kerangka Navier-Stokes kompresibel untuk medium berpori (*porous medium*), dengan asumsi simetri silinder dan aliran *Darcy-Forchheimer* untuk merepresentasikan *packed bed* biomassa cannabis. Persamaan kontinuitas dan momentum dalam koordinat silinder $(r, z)$ dirumuskan sebagai:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho u_r\right) + \frac{\partial}{\partial z}\left(\rho u_z\right) = 0$$

$$\frac{\partial}{\partial t}\left(\rho u_r\right) + \nabla \cdot \left(\rho u_r \mathbf{u}\right) = -\frac{\partial p}{\partial r} + \mu \left[\nabla^2 u_r - \frac{u_r}{r^2}\right] - \frac{\mu}{K}u_r - \rho \beta_F |u_r| u_r$$

di mana $K$ adalah permeabilitas intrinsik *packed bed* (orde $10^{-9}$ hingga $10^{-11}$ m²), dan $\beta_F$ adalah koefisien *Forchheimer* yang memperhitungkan efek inersia pada bilangan Reynolds modifikasi. Persamaan energi digabungkan dengan persamaan keadaan *Peng-Robinson* (PR-EOS) untuk memodelkan sifat termodinamika CO₂ superkritik:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter atraktif $a(T)$ yang bergantung pada *acentric factor* CO₂ ($\omega = 0,228$). Untuk perpindahan panas transien selama tahap *pressurization*, Toledo & del Valle (2023) mengusulkan persamaan energi 1-D non-steady:

$$\rho_{bed} c_{p,bed} \frac{\partial T}{\partial t} = k_{eff} \frac{\partial^2 T}{\partial z^2} + \rho_{CO_2} c_{p,CO_2} u_z \frac{\partial T}{\partial z} + \dot{q}_{rxn}$$

di mana $\dot{q}_{rxn}$ merepresentasikan panas yang dilepas/terserap oleh proses desorpsi solut dari matriks biomassa. *Effective thermal conductivity* $k_{eff}$ mengikuti model Zehner-Bauer-Schlünder:

$$k_{eff} = k_{CO_2} \left[1 - \sqrt{1-\varepsilon}\right] + k_{s}\sqrt{1-\varepsilon}\left[2/(1+\frac{k_s}{k_{CO_2}}) - A\right]$$

dengan $A$ adalah fungsi empiris rasio konduktivitas, dan $\varepsilon$ adalah porositas bed (tipikal 0,35–0,45 untuk cannabis *ground biomass*). Persamaan perpindahan massa mengikuti model *Sovová* (2007) yang dimodifikasi untuk geometri aksisimetrik:

$$\frac{\partial C}{\partial t} + u_z \frac{\partial C}{\partial z} = D_{ax} \frac{\partial^2 C}{\partial z^2} + k_f a_p (C^* - C)$$

di mana $D_{ax}$ adalah koefisien dispersi aksial, $k_f$ koefisien transfer massa eksternal, $a_p$ luas spesifik partikel, dan $C^*$ konsentrasi jenuh solut dalam fase superkritik (dihitung dari PR-EOS dan kelarutan CBD/THC empiris).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model ini mengikuti SOP enam-tahap yang distandarkan mengikuti pedoman *ISPE Baseline Guide* dan ASME BPVC Section VIII untuk vessel bertekanan:

**Tahap 1 — Preparasi Biomassa.** Cannabis *dried biomass* digiling hingga ukuran partikel 0,5–2,0 mm dan dikondisioning pada moisture content 8–12% untuk mencegah aglomerasi dan memastikan permeabilitas bed optimal (target $K > 5 \times 10^{-10}$ m²).

**Tahap 2 — Charging & Sealing.** Vessel diisi dengan biomassa secara gravimetri hingga porositas 0,40, kemudian disegel dengan *burst disc* terkalibrasi pada 1,1 × working pressure (umumnya 330 bar untuk operasi pada 300 bar).

**Tahap 3 — Pressurization.** CO₂ dipompa secara gradual (rate 2–5 bar/detik) untuk mengontrol gradien termal. Toledo & del Valle (2023) menemukan bahwa laju >8 bar/detik menghasilkan hotspot lokal >65°C, mendegradasi THC dan CBD hingga 12%.

**Tahap 4 — Ekstraksi Tuned.** Berdasarkan solusi numerik model Obchoei & Limtrakarn (2024), parameter operasi dioptimasi: tekanan 250 bar, suhu 45°C, *flow rate* CO₂ 1,2 kg/menit per kg biomassa, dengan rasio solvent-to-feed (S/F) antara 20–40.

**Tahap 5 — Depressurization Cascade.** Dilakukan bertahap (3–5 bar/detik) melalui dua tahap separator (primary pada 60 bar, secondary pada 20 bar) untuk fraksinasi bertingkat.

**Tahap 6 — Recovery & Cleaning.** Vessel dinetalisasi dengan ethanol wash dan *Clean-in-Place* (CIP) loop sebelum *batch* berikutnya, mengikuti validasi OE-CL (Operator Exposure Control Limit).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Ekstraksi CBD dari 50 kg biomassa cannabis pada vessel silinder $r_{vessel} = 0,15$ m, $L = 1,2$ m, beroperasi pada $P = 250$ bar, $T = 318$ K, dengan $\dot{m}_{CO_2} = 1,2$ kg/menit.

**Langkah 1 — Estimasi Sifat CO₂ Superkritik.** Dari PR-EOS pada $P = 250$ bar, $T = 318$ K, diperoleh $\rho_{CO_2} = 780$ kg/m³, $\mu_{CO_2} = 7,2 \times 10^{-5}$ Pa·s.

**Langkah 2 — Perhitungan Kecepatan Superfisial.** Laju alir volumetrik:

$$\dot{V} = \frac{\dot{m}}{\rho} = \frac{1,2}{780} \times \frac{1}{60} = 2,564 \times 10^{-5} \text{ m}^3/\text{s}$$

Luas penampang vessel: $A = \pi r^2 = \pi (0,15)^2 = 0,0707$ m². Kecepatan superfisial:

$$u_{sup} = \frac{\dot{V}}{A} = \frac{2,564 \times 10^{-5}}{0,0707} = 3,63 \times 10^{-4} \text{ m/s}$$

**Langkah 3 — Bilangan Reynolds Modifikasi (Porous Media).**

$$Re_m = \frac{\rho_{CO_2} \cdot u_{sup} \cdot d_p}{\mu_{CO_2} (1-\varepsilon)} = \frac{780 \cdot 3,63 \times 10^{-4} \cdot 1,5 \times 10^{-3}}{7,2 \times 10^{-5} \cdot 0,60} = 9,84$$

Karena $Re_m < 10$, rezim aliran laminar Darcy berlaku, dan koefisien Forchheimer $\beta_F \approx 0$.

**Langkah 4 — Pressure Drop (Darcy's Law).**

$$\Delta p = \frac{\mu \cdot u_{sup} \cdot L}{K} = \frac{7,2 \times 10^{-5} \cdot 3,63 \times 10^{-4} \cdot 1,2}{5 \times 10^{-10}} = 6,27 \times 10^{1} \text{ Pa} \approx 0,63 \text{ bar}$$

Pressure drop 0,63 bar sangat rendah, mengonfirmasi operasi dalam rezim aman dan uniformitas aliran (tidak ada *channeling* signifikan) sesuai prediksi model Obchoei & Limtrakarn (2024).

**Langkah 5 — Yield Estimation.** Dari data kalibrasi model Obchoei & Limtrakarn (2024) untuk cannabis biomassa dengan CBD content 12% wt: yield fraksional mengikuti:

$$Y(t) = Y_{\infty} \left[1 - \exp(-k_{obs} \cdot t)\right]$$

dengan $k_{obs} = 0,012$ menit⁻¹ dan $Y_{\infty} = 0,92$ (efisiensi recovery teoritis). Setelah operasi selama 180 menit dengan S/F = 36:

$$Y(180) = 0,92 \left[1 - \exp(-0,012 \times 180)\right] = 0,92 \times (1 - 0,115) = 0,815$$

Massa CBD terekstraksi: $m_{CBD} = 50 \times 0,12 \times 0,815 = 4,89$ kg.

**Langkah 6 — Validasi Termal.** Menggunakan model Toledo & del Valle (2023), laju pendinginan depressurization yang aman:

$$\frac{dT}{dt}_{max} = \frac{\dot{m}_{CO_2} \cdot c_p \cdot \Delta T_{cool}}{m_{bed} \cdot c_{p,bed}} = \frac{1,2 \cdot 2,0 \cdot 30}{50 \cdot 1,8} = 0,8 \text{ °C/menit}$$

Ini memenuhi batas kritis dekarboksilasi CBD yang terjadi di atas 70°C (Toledo & del Valle, 2023