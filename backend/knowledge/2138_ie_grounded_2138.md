# 2138 — Pemodelan Aliran Axisimetrik pada Ekstraksi Minyak Cannabis Menggunakan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanam (botanical extraction) global telah mengalami transformasi signifikan sejak diterapkannya kerangka regulasi cannabis di berbagai yurisdiksi, termasuk Kanada (2018), beberapa negara bagian AS, dan Thailand (2022). Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, proses ekstraksi minyak cannabis dengan fluida superkritis CO₂ (SC-CO₂) menjadi pilihan utama di industri farmasi, nutrasetikal, dan kosmetik karena kemampuan menghasilkan ekstrak tanpa residu pelarut toksik. Nilai pasar global ekstrak cannabis berbasis SC-CO₂ diproyeksikan mencapai USD 5,8 miliar pada 2028 dengan CAGR 18,4%, sehingga optimalisasi proses menjadi agenda strategis bagi insinyur proses.

Permasalahan fundamental yang diangkat Obchoei & Limtrakarn (2024, DOI: 10.1016/j.ijft.2024.100682) adalah lemahnya representasi geometris dan dinamika fluida di dalam *extractor vessel* berbentuk silinder vertikal. Mayoritas model yang ada sebelumnya memperlakukan unggun (bed) partikel cannabis sebagai *one-dimensional plug flow* yang忽略了 gradien radial kecepatan, tekanan, dan konsentrasi. Padahal pada skala pilot plant komersial (volume 10–600 L), rasio aspek (H/D) dan fenomena *channeling*, *bypass flow*, serta *dead zone* di sepanjang dinding extractor menjadi sumber utama deviasi yield aktual terhadap prediksi teoritis, dengan gap hingga 18–25%. Obchoei & Limtrakarn (2024) menutup gap ini dengan membangun **model aliran axisimetrik 2D-RANS (Reynolds-Averaged Navier-Stokes)** yang diselesaikan secara coupled dengan persamaan energi dan species transport.

Di sisi lain, Toledo & del Valle (2023, DOI: 10.1016/j.supflu.2023.106046) menyoroti bahwa dinamika termal extractor sangat dominan pada tiga tahap siklus SC-CO₂: *pressurization* (5–30 menit), *static soaking + dynamic extraction* (60–240 menit), dan *depressurization* (10–25 menit). Perpindahan panas antara CO₂ dingin (saat awal pressurization) dan dinding extractor yang telah dipre-heated menentukan profil rapat massa CO₂ sepanjang waktu, yang selanjutnya memengaruhi kelarutan kanabinoid (THC, CBD, CBG) dan yield total. Kedua paper ini saling melengkapi: Obchoei & Limtrakarn fokus pada mekanika fluida dan transport species dalam regime tunak, sementara Toledo & del Valle memberikan kerangka termodinamika transien yang diperlukan untuk validasi kondisi batas termal.

Urgensi industrial dari integrasi kedua perspektif ini adalah kemampuan *scale-up* yang akurat. Ekstraktor pilot 5 L yang dimodelkan Obchoei & Limtrakarn (2024) memiliki perilaku hidrodinamik berbeda dari ekstraktor 100 L karena efek *wall effect* dan rasio D/dp (diameter vessel/diameter partikel) yang lebih kecil di skala kecil. Dengan model axisimetrik yang divalidasi terhadap data eksperimental pressure drop dan yield, perusahaan rekayasa proses dapat merancang ekstraktor baru dengan confidence interval 90–95% sebelum fabrikasi, menghemat biaya modal hingga 12–18% dibanding metode trial-and-error konvensional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengaturan Aliran Axisimetrik

Model Obchoei & Limtrakarn (2024) menggunakan koordinat silinder $(r, z)$ dengan asumsi simetri rotasional. Sistem persamaan pengaturan terdiri dari kontinuitas, momentum (Navier-Stokes dengan turbulensi $k$-$\varepsilon$), energi, dan transport species.

**Persamaan Kontinuitas (fluida compressible, fase tunggal SC-CO₂):**

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

dengan $\rho$ rapat massa CO₂, $u_r$ dan $u_z$ komponen kecepatan radial dan aksial. Untuk SC-CO₂ pada 313 K dan 25 MPa, $\rho \approx 830 \text{ kg/m}^3$ (Obchoei & Limtrakarn, 2024, DOI: 10.1016/j.ijft.2024.100682).

**Persamaan Momentum Radial:**

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu_{\text{eff}}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{2\mu_{\text{eff}}}{r^2}\frac{\partial v_\theta}{\partial \theta} + S_r$$

**Persamaan Momentum Aksial:**

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{\text{eff}}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \rho g + S_z$$

dengan $S_r$ dan $S_z$ adalah source term dari阻力 unggun partikel, dimodelkan dengan persamaan Ergun (1952):

$$-\frac{\partial p}{\partial z} = \frac{150 \mu (1-\varepsilon)^2}{\varepsilon^3 d_p^2} u_z + \frac{1.75 \rho (1-\varepsilon)}{\varepsilon^3 d_p} u_z^2$$

dengan $\varepsilon$ porositas unggun (tipikal 0,38–0,45 untuk cannabis milled), $d_p$ diameter partikel efektif (0,5–1,2 mm), dan $\mu$ viskositas dinamis CO₂.

### 2.2 Persamaan Energi dan Termodinamika SC-CO₂

Persamaan energi coupled mengikuti Toledo & del Valle (2023, DOI: 10.1016/j.supflu.2023.106046):

$$\rho C_p \left(\frac{\partial T}{\partial t} + u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{\text{eff}}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{\text{eff}}\frac{\partial T}{\partial z}\right) + \mu_{\text{eff}}\Phi + Q_{\text{reaction}}$$

Rapat massa SC-CO₂ dihitung dari persamaan keadaan **Peng-Robinson (1976):**

$$P = \frac{RT}{v-b} - \frac{a(T)}{v(v+b) + b(v-b)}$$

dengan parameter $a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c} \alpha(T)$, $b = 0{,}07780 \frac{R T_c}{P_c}$, dan $\alpha(T) = \left[1 + \kappa\left(1-\sqrt{T/T_c}\right)\right]^2$. Untuk CO₂: $T_c = 304{,}13$ K, $P_c = 7{,}377$ MPa, $\omega = 0{,}2239$ (Obchoei & Limtrakarn, 2024).

### 2.3 Perpindahan Massa dan Solubilitas Kanabinoid

Laju pelarutan kanabinoid dalam SC-CO₂ dimodelkan dengan persamaan **Chrastil (1982):**

$$\ln c = k_0 + k_1 \ln \rho + \frac{k_2}{T}$$

dengan $c$ konsentrasi solubil (kg solute/m³ CO₂), dan konstanta empiris $k_0, k_1, k_2$ untuk CBD: $k_1 = 1{,}836$, $k_2 = -4670$ K. Persamaan transport species:

$$\varepsilon \frac{\partial (\rho Y_i)}{\partial t} + \rho(u_r \frac{\partial Y_i}{\partial r} + u_z \frac{\partial Y_i}{\partial z}) = \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho D_{\text{eff}} \frac{\partial Y_i}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho D_{\text{eff}} \frac{\partial Y_i}{\partial z}\right) - \dot{m}_i$$

dengan $Y_i$ fraksi massa cannabinoid, $D_{\text{eff}}$ diffusivitas efektif, dan $\dot{m}_i$ laju pelarutan dari matriks padat ke fluida, digerakkan oleh driving force $(c^* - c)$ dengan koefisien transfer massa $k_c$ yang dihitung dari korelasi **Wakao & Kaguei (1982):**

$$Sh = 2{,}0 + 1{,}1 Re_p^{0{,}6} Sc^{0{,}33}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem SC-CO₂ Ekstraksi

Berdasarkan integrasi Obchoei & Limtrakarn (2024) serta Toledo & del Valle (2023), sistem SC-CO₂ skala industri tersusun dari:

1. **CO₂ Storage Tank** (suhu −18 °C, tekanan 20 bar) dengan pompa booster
2. **Pre-heater** (heat exchanger tipe shell-and-tube) menaikkan T dari ~278 K ke 313–333 K
3. **Extractor Vessel** (silinder vertikal, A516 Gr.70 carbon steel, kapasitas 10–600 L, ASME BPVC Section VIII Div. 1)
4. **Separator** (1–5 bar) untuk presipitasi ekstrak
5. **Recycle Loop** dengan kondensor dan recirculation pump
6. **PLC/SCADA** dengan kontrol PID pada P, T, dan flow rate

### 3.2 SOP Tahapan Proses

**Tahap I — Pressurization (TOLEDO & DEL VALLE, 2023, DOI: 10.1016/j.supflu.2023.106046):**

1. Pre-cool CO₂ storage ke 278 K, jaga line temperature di bawah 285 K untuk mencegah vapor lock
2. Charge extractor dengan biomassa cannabis (ground, moisture 8–12% wb, ukuran partikel 0,5–1,2 mm)
3. Lakukan vacuum pull-down hingga 0,05 bar absolut selama 20 menit untuk menghilangkan udara dan moisture
4. Buka inlet valve, injeksi CO₂ dengan ramp rate 2 bar/menit hingga tercapai setpoint 250 bar, sambil aktifkan heater jacket untuk menjaga T dinding 323 K
5. Validasi kesetimbangan termal: $\Delta T_{\text{core-wall}} < 2$ K selama 5 menit

**Tahap II — Static Soaking + Dynamic Extraction:**

1. Mode static: tutup outlet, pertahankan 313–333 K dan 200–300 bar selama 30–90 menit untuk saturasi internal
2. Mode dynamic: buka outlet, atur flow rate SC-CO₂ 0,5–4 kg/menit (Re_p = 1–10), dengan separator pada 50–60 bar dan 313 K
3. Sampling setiap 15 menit untuk monitoring yield dan profil cannabinoid via HPLC
4. Total waktu extraction: 90–240 menit (Obchoei & Limtrakarn, 2024)

**Tahap III — Depressurization:**

1. Throttle outlet valve dengan ramp rate 5 bar/menit
2. Pertahankan T dinding > 313 K untuk mencegah dry ice formation
3. Kumpulkan residual extract di separator, flush dengan 2 kg CO₂/kg biomassa