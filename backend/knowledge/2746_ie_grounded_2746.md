# 2746 — Model Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis dengan Proses Superkritikal Fluid Extraction CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dari tanaman *Cannabis sativa* telah mengalami transformasi disruptif sejak diterapkannya regulasi legalisasi medis dan rekreasional di berbagai yurisdiksi global, termasuk di Kanada, beberapa negara bagian Amerika Serikat, Thailand, Jerman, dan Malta. Permintaan global terhadap produk cannabinoid konsentrat—khususnya cannabidiol (CBD) dan tetrahydrocannabinol (THC)—meningkat secara eksponensial, dengan valuasi pasar yang menembus lebih dari USD 12 miliar pada 2023 dan diproyeksikan mencapai USD 60 miliar pada 2030 (Grand View Research, 2024). Dalam lanskap manufaktur farmasi dan nutraceutical ini, pemilihan teknologi ekstraksi bukan sekadar persoalan kimia analitik, melainkan keputusan rekayasa proses yang menentukan margin, kepatuhan regulasi *Good Manufacturing Practice* (GMP), dan profil keamanan produk.

Supercritical Fluid Extraction (SFE) dengan CO₂ (SFE-CO₂) muncul sebagai *gold-standard* karena sifat CO₂ yang inert secara toksikologi, tidak meninggalkan residu pelarut, selektivitas tinggi melalui tuning tekanan-temperatur, serta ramah lingkungan. Namun, seperti ditegaskan oleh Obchoei dan Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)), proses SFE-CO₂ memiliki kompleksitas termofluida yang sangat tinggi. Mereka menyatakan secara eksplisit bahwa pemodelan konvensional satu dimensi (1D) tidak cukup merepresentasikan gradien radial temperatur dan konsentrasi dalam *extractor vessel* berukuran industri yang memiliki geometri aksisimetrik (silinder dengan rasio tinggi/diameter besar). Ketidakseragaman aliran ini secara langsung menyebabkan *channeling*, *dead zone*, dan degradasi kuantitas serta kualitas hasil panen cannabinoid.

Urgensi operasionalnya bersifat ekonomi: yield CBD/THC sangat bergantung pada keseragaman distribusi fluida superkritis di seluruh packed-bed biomassa. Studi pendahulu menunjukkan variasi yield hingga 18–24% antar-batch hanya karena inhomogenitas hidrodinamika (Obchoei & Limtrakarn, 2024). Tambahan lagi, Toledo dan del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) membuktikan bahwa fase *pressurization*, *extraction*, dan *depressurization* memiliki profil perpindahan kalor yang asimetris dan non-adiabatik, yang berdampak langsung terhadap selektivitas solubilitas cannabinoid yang sangat sensitif terhadap temperatur (koefisien sensitivitas ~2–5% per °C). Oleh karena itu, integrasi model aliran aksisimetrik 2D dengan persamaan perpindahan kalor menjadi kebutuhan imperatif bagi *process engineer* untuk merancang *extractor* yang scalable, prediktable, dan memenuhi standar farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang dikembangkan oleh Obchoei dan Limtrakarn (2024) berbasis pada solusi numerik Coupled Navier-Stokes, Darcy, dan Species Transport dalam geometri silinder aksisimetrik $(r, z)$. Asumsi-asumsi fundamental yang diadopsi:

1. Fluida superkritis CO₂ diasumsikan sebagai *single-phase Newtonian* dengan sifat termofisika yang dievaluasi dari persamaan keadaan Span-Wagner.
2. Packed-bed biomassa dimodelkan sebagai medium porous isotropik dengan permeabilitas intrinsik $\kappa$ dan porositas $\varepsilon$.
3. Difusi cannabinoid dalam fasa superkritis mengikuti hukum Fick dengan koefisien difusi efektif $D_{\text{eff}}$.
4. Perpindahan kalor terjadi secara konduksi-radiasi dalam partikel biomassa dan konveksi paksa dalam fasa fluida.

### 2.1 Persamaan Kontinuitas dan Momentum

Untuk komponen aksisimetrik, persamaan kontinuitas:

$$\frac{\partial}{\partial z}\left(\rho u_z\right) + \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho u_r\right) = 0$$

dengan $\rho$ densitas CO₂ superkritis, $u_z$ dan $u_r$ komponen kecepatan aksial dan radial. Persamaan momentum yang digunakan adalah formulasi *Forchheimer-extended Darcy-Brinkman* untuk mengakomodasi efek inersia pada bilangan Reynolds partikel $Re_p > 1$:

$$\frac{\rho}{\varepsilon^2}\left(\frac{\partial \mathbf{u}}{\partial t} + \frac{1}{\varepsilon}\left(\mathbf{u}\cdot\nabla\right)\mathbf{u}\right) = -\nabla p + \frac{\mu}{\varepsilon}\nabla^2\mathbf{u} - \frac{\mu}{\kappa}\mathbf{u} - \frac{\rho C_F}{\sqrt{\kappa}}|\mathbf{u}|\mathbf{u} + \rho \mathbf{g}$$

di mana $\mu$ adalah viskositas dinamis, $\kappa$ permeabilitas, dan $C_F$ koefisien Forchheimer (umumnya $C_F \approx 0.55$ untuk biomassa cannabis tergrind).

### 2.2 Persamaan Perpindahan Massa

Mekanisme transfer massa dari matriks padat ke fasa fluida dimodelkan dengan pendekatan *shrinking core* yang digabungkan dengan neraca species. Konsentrasi cannabinoid di fase fluida $c$ (kg/m³) memenuhi:

$$\frac{\partial c}{\partial t} + \mathbf{u}\cdot\nabla c = \nabla \cdot \left(D_{\text{eff}} \nabla c\right) + k_L a_v \left(c^* - c\right)$$

dengan $k_L$ koefisien transfer massa konvektif, $a_v$ luas spesifik antarmuka (m²/m³), dan $c^*$ konsentrasi kesetimbangan yang dihitung dari korelasi Chrastil:

$$c^* = \rho^{n} \exp\left(\frac{a}{T} + b\right)$$

di mana $n, a, b$ adalah parameter fitting empiris; untuk CBD pada CO₂, $n \approx 4.2$, $a \approx -8500\,\text{K}$, $b \approx -15.8$.

### 2.3 Persamaan Energi

Mengikuti kerangka Toledo dan del Valle (2023), persamaan energi dua域 (solid-fluid) ditulis sebagai:

$$\rho_f c_{p,f} \varepsilon \frac{\partial T_f}{\partial t} + \rho_f c_{p,f} \mathbf{u}\cdot\nabla T_f = \nabla\cdot\left(k_{e,f}\nabla T_f\right) + h_v\left(T_s - T_f\right)$$

$$\rho_s c_{p,s} (1-\varepsilon) \frac{\partial T_s}{\partial t} = \nabla\cdot\left(k_{e,s}\nabla T_s\right) + h_v\left(T_f - T_s\right)$$

dengan $k_e$ konduktivitas efektif (menggunakan korelasi Krupiczka untuk packed-bed), dan $h_v$ koefisien volumetrik perpindahan kalor fluida-partikel. Batas termal dinding extractor:

$$-k_{e,f}\frac{\partial T_f}{\partial r}\bigg|_{r=R} = U_w\left(T_f - T_{ext}\right)$$

di mana $U_w$ adalah overall heat transfer coefficient dinding vessel, dan $T_{ext}$ temperatur jacket.

### 2.4 Kondisi Batas dan Diskretisasi Numerik

Kondisi batas inflow pada $z=0$: profil kecepatan *plug-flow* $u_z = u_{\text{in}}$ dan konsentrasi inlet $c = 0$ (CO₂ segar). Outflow pada $z=L$ menggunakan kondisi *convective outflow*. Diskretisasi menggunakan finite volume method pada computational grid $N_r \times N_z \geq 120 \times 600$, dengan algoritma SIMPLE untuk coupling tekanan-kecepatan. Validasi mesh-independence dilakukan pada GCI (Grid Convergence Index) $< 2\%$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model ini mengikuti alur rekayasa sistematis yang dapat distandarisasi menjadi SOP manufaktur untuk fasilitas SFE-CO₂ skala pilot hingga komersial (kapasitas 100–2000 L).

### 3.1 Diagram Alir Proses (Process Flow Diagram)

1. **Pre-treatment biomassa**: grinding ke ukuran partikel $0.5$–$2.0$ mm dengan moisture content $8$–$12\%$ wb, dilanjutkan *degassing* pada $T = 40°C$ selama 4 jam untuk mencegah aglomerasi.
2. **Loading extractor**: packing biomassa secara gravimetri dengan densitas bulk $\rho_b \approx 180$ kg/m³ untuk memastikan porositas $\varepsilon \approx 0.65$.
3. **Pressurization**: CO₂ dipompa dari tangki storage pada $T_{stg} = 5°C$ hingga tekanan kerja $P_{op}$ dengan gradient $\partial P/\partial t \leq 5$ bar/menit (Obchoei & Limtrakarn, 2024). Fase ini dikendalikan oleh model perpindahan kalor Toledo-del Valle (2023).
4. **Static + Dynamic extraction**: temperatur dinaikkan ke $T_{op} = 40$–$60°C$ dan dijaga dengan jacket control PID; CO₂ dialirkan dengan rasio solvent-to-feed (S/F) antara 20:1 hingga 60:1 (kg/kg).
5. **Separation cascade**: fluida superkritis masuk ke separator pertama pada $P_1 = 80$–$100$ bar (presipitasi wax/lipid), kemudian separator kedua pada $P_2 = 40$–$60$ bar (recovery cannabinoid utama).
6. **Depressurization**: dilakukan gradual sesuai Toledo & del Valle (2023) untuk mencegah flashing dan recovery CO₂ kembali ke storage.

### 3.2 Standard Operating Procedure (SOP) Rekayasa

Setiap batch harus dilengkapi dengan *Batch Manufacturing Record* yang mencakup:

| Parameter | Set-Point | Toleransi | Metode Verifikasi |
|---|---|---|---|
| Tekanan operasi | 250 bar | ±5 bar | Pressure transducer (kalibrasi NIST) |
| Temperatur operasi | 50°C | ±1°C | RTD Class A |
| Laju alir CO₂ | 15 kg/jam | ±0.5 kg/jam | Coriolis flowmeter |
| Rasio S/F | 40:1 | ±2:1 | Neraca massa real-time |
| Durasi extraction | 180 menit | ±5 menit | SCADA log |
| ΔT jacket | 2°C | ±0.5°C | Termokopel dinding |

Validasi model dijalankan secara periodik (tiap 50 batch atau 6 bulan) dengan *predictive parity check*: hasil yield aktual harus berada dalam $\pm 5\%$ dari prediksi CFD.

### 3.3 Quality by Design (QbD) Integration

Mengacu pada kerangka ICH Q8(R2), design space proses SFE-CO₂ didefinisikan sebagai multi-dimensi $(P, T, S/F, t)$ di mana Critical Quality Attributes (CQA)—yaitu cannabinoid profile dan terpene retention—berada dalam rentang spesifikasi. Model aksisimetrik 2D menjadi tools *design of experiments* (DoE) digital yang mampu menggantikan wet-lab trial-and-error, mengurangi waktu development 30–40% dan biaya pilot campaign hingga USD 250,000 per siklus pengembangan produk.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berikut adalah simulasi kuantitatif untuk extractor industri dengan spesifikasi:

- Diameter vessel: $D = 0.4$ m, panjang $L = 2.0$ m
- Massa biomassa cannabis: $m_b = 45$ kg (kadar cannabinoid target: 12% berat)
- Tekanan operasi: $P_{op} = 250$ bar
- Temperatur operasi: $T_{op} = 50°C$ = $323.15$ K
- Laju alir massa CO₂: $\dot{m}_{CO_2} = 15$ kg/jam

### Langkah 1: Evaluasi Sifat CO₂ Superkritis

Pada $P = 250$ bar, $T = 323.15$ K, dari basis data NIST Span-Wagner:
$$\rho_{CO_2} = 830.5 \text{ kg/m}^3, \quad \mu_{CO_2} = 7.87 \times 10^{-5} \text{ Pa·s}$$

### Langkah 2: Densitas bulk dan porositas packed-bed

$$V_{vessel} = \frac{\pi}{4}D^2 L = \frac{\pi}{4}(0.4)^2(2.0) = 0.2513 \text{ m}^3$$
$$\rho_{bulk} = \frac{m_b}{V_{vessel}} = \frac{45}{0.2513} = 179.0 \text{ kg/m}^3$$
Dengan densitas partikel $\rho_s \approx 1100$ kg/m³ (biomassa cannabis ground), porositas:
$$\varepsilon = 1 - \frac{\rho_{bulk}}{\rho_s} = 1 - \frac{179}{1100} = 0.837$$

### Langkah 3: Permeabilitas packed-bed (Korelasi Ergun)

Untuk diameter partikel rata-rata $d_p = 1.5$ mm = $1.5 \times 10^{-3}$ m:
$$\kappa = \frac{d_p^2 \varepsilon^3}{150(1-\varepsilon)^2} = \frac{(1.5\times 10^{-3})^2 (0.837)^3}{