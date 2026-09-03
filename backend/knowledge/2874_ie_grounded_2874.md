# 2874 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Proses Fluida Superkritikal CO₂: Integrasi Persamaan Navier–Stokes, Persamaan Keadaan Peng–Robinson, dan Model Perpindahan Panas Dua Tahap

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri kanabis legal di kawasan Amerika Utara, Eropa, dan sebagian Asia-Pasifik telah tumbuh dengan CAGR >20% sejak 2018, didorong oleh permintaan cannabinoid farmasi (CBD, CBG, THC minor) dan terpena aromatik untuk aplikasi nutraceutical, kosmetik, dan farmasi. Total addressable market diproyeksikan melewati USD 60 miliar pada 2030, dan kapasitas instalasi ekstraksi fluida superkritikal (Supercritical Fluid Extraction / SFE) menjadi *bottleneck* utama karena mayoritas operator legal-grade masih menggunakan ekstraktor kecil (<50 L) yang beroperasi secara *batch*. Obchoei & Limtrakarn (2024, *Int. J. Thermofluids*, DOI 10.1016/j.ijft.2024.100682) menunjukkan bahwa *scale-up* ekstraktor tanpa penyertaan model aliran aksisimetrik dua dimensi akan menurunkan *yield* cannabinoid secara signifikan akibat gradien konsentrasi radial dan pendeknya *contact time* antara pelarut CO₂ dengan matriks padat. Permasalahan ini diperparah oleh sifat termolabil cannabinoid: paparan suhu di atas 60 °C dalam waktu lama menyebabkan degradasi menjadi cannabinol (CBN) yang menurunkan nilai jual.

Toledo & del Valle (2023, *J. Supercrit. Fluids*, DOI 10.1016/j.supflu.2023.106046) melengkapi lanskap riset dengan menunjukkan bahwa proses SFE-CO₂ memiliki tiga tahap dengan profil perpindahan panas yang sangat berbeda: (i) tahap *pressurization* (penkanan isothermal atau adiabatic), (ii) tahap *extraction* isotermal, dan (iii) tahap *depressurization* yang cepat. Ketidakseragaman suhu sepanjang tinggi dan radius bejana ekstraktor merupakan sumber utama *recovery* yang tidak deterministik pada lini produksi farmasi yang membutuhkan validasi proses sesuai GMP (Good Manufacturing Practice). Oleh karena itu, integrasi model aliran aksisimetrik dengan model perpindahan panas menjadi kebutuhan *engineering* yang mendesak bagi praktisi teknik industri yang bertanggung jawab pada desain bejana, kapasitas produksi, dan *process control*.

Urgensi operasional lainnya adalah konsumsi energi. Energi kompresi CO₂ menuju 250–350 bar menyumbang 35–55% dari total *energy footprint* SFE. Model aksisimetrik 2D yang menggabungkan *compressible Navier–Stokes* dengan persamaan keadaan Peng–Robinson memungkinkan prediksi densitas CO₂ di sepanjang *vessel* dan, konsekuensinya, estimasi kerja kompresor yang akurat untuk sistem refrigerasi dan pompa booster. Dari perspektif *supply chain*, informasi ini berperan langsung pada penentuan ukuran *back-up compressor*, kapasitas tangki penyimpan CO₂ cair, dan jadwal operasi agar tercapai *overall equipment effectiveness* (OEE) ≥ 85% sesuai benchmark industri proses kontinyu.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Kekenalan, Momentum, dan Energi dalam Koordinat Silinder Aksisimetrik

Ekstraktor SFE-CO₂ lazim berbentuk *vertical cylindrical vessel* dengan sumbu simetri pada axis. Asumsi aksisimetrik ($\partial/\partial\theta = 0$, $u_\theta = 0$) menyederhanakan persamaan konservasi menjadi bentuk 2D $(r,z,t)$. Persamaan kontinuitas untuk fluida CO₂(termampatkan) bermassa jenis $\rho$:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

Persamaan momentum arah radial dan aksial (masing-masing $\mathrm{NS}_r$ dan $\mathrm{NS}_z$), dengan $\mu$ viskositas dinamik dan $p$ tekanan:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] + \rho g_r$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z$$

Persamaan energi dengan konduksi termal efektif $k_{\text{eff}}$ dan sumber panas volumetrik $\dot{q}_v$:

$$\rho c_p\left(\frac{\partial T}{\partial t} + u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{\text{eff}} \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{\text{eff}} \frac{\partial T}{\partial z}\right) + \dot{q}_v$$

### 2.2 Persamaan Keadaan Peng–Robinson

Karena CO₂ beroperasi di dekat titik kritisnya ($T_c = 304{,}13$ K, $P_c = 73{,}8$ bar), persamaan keadaan ideal tidak valid. Peng–Robinson (1976) memberikan:

$$P = \frac{R T}{V_m - b} - \frac{a(T)\alpha(T_r)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter:

$$a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c