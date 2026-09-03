# 1770 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric Flow Model of Cannabis Oil Extraction Using Supercritical Fluid Extraction (SFE) CO₂ Process — Disertai Analisis Perpindahan Panas Tahap Presurisasi, Ekstraksi, dan Depresurisasi
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*, Vol. 21, 100682. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*, Vol. 198, 106046. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani berbasis *Cannabis sativa* telah mengalami transformasi struktural yang signifikan sejak awal dekade 2020-an, dipicu oleh liberalisasi regulasi di berbagai yurisdiksi (Kanada 2018, beberapa negara bagian AS, Thailand 2022, dan Jerman 2024) untuk aplikasi medis dan nutrasetikal. Pasar global cannabinoid farmasi diproyeksikan menembus **USD 56–62 miliar** pada 2030 dengan CAGR >16% (Grand View Research, 2023). Dalam konteks ini, pemilihan teknologi ekstraksi menjadi keputusan rekayasa kritis yang menentukan profil kualitas produk (kandungan cannabinoid, terpena, flavonoid), kelayakan ekonomi, dan kepatuhan terhadap *Good Manufacturing Practice* (GMP).

Metode konvensional seperti ekstraksi pelarut organik (etanol, heksana) menghadapi tekanan regulasi karena residu pelarut, risiko keamanan kebakaran, dan profil degradasi termal terhadap termolabil cannabinoid (terutama THCA dan CBDA). **Ekstraksi Fluida Superkritis CO₂ (SFE-CO₂)** muncul sebagai teknologi *green chemistry* unggulan karena CO₂ bersifat nontoksik, nonflammable, inert secara kimiawi, GRAS (*Generally Recognized As Safe*), dan mudah dipisahkan dari produk melalui depresurisasi. Namun, investasi modal peralatan SFE tinggi (CAPEX USD 250K–2M per lini ekstraksi 100 L), sehingga optimasi desain reaktor menjadi determinan utama kelayakan pabrik.

Obchoei & Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) memperkenalkan **model aliran aksisimetrik** untuk memprediksi profil kecepatan, tekanan, dan konsentrasi dalam reaktor SFE berbentuk tabung silinder, mengatasi keterbatasan pendekatan *plug-flow* 1-D yang selama ini mendominasi literatur. Studi ini mengakui bahwa geometri vessel, packing density biomassa, dan gradien radial akibat dinding menciptakan heterogenitas yang secara material memengaruhi yield cannabinoid. Sementara itu, Toledo & del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) melengkapi kerangka tersebut dengan memodelkan **perpindahan panas transien** selama tiga tahap operasional (pressurization, extraction, depressurization), menunjukkan bahwa efek termal non-isotermal dapat menurunkan yield hingga 15–20% jika tidak dikendalikan.

Urgensi industri dari integrasi kedua perspektif ini nyata: keputusan mengenai laju alir CO₂, ukuran partikel biomassa, dan ramp suhu harus didasarkan pada model kuantitatif, bukan heuristik. Dokumen ini menyajikan sintesis rekayasa dari kedua literatur tersebut dalam kerangka *Industrial Knowledge Base* Modul 1770.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Sistem Koordinat

Reaktor SFE dimodelkan sebagai tabung vertikal dengan sumbu simetri *z* dan koordinat radial *r*. Asumsi aksisimetrik berarti seluruh variabel medan fluida tidak bergantung pada sudut azimuth $\theta$. Domain komputasi: $0 \le r \le R_v$ dan $0 \le z \le L$, dengan $R_v$ jari-jari vessel dan $L$ panjang unggun biomassa.

### 2.2 Persamaan Kontinuitas Aksisimetrik

Untuk aliran transien kompresibel:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

dengan $\rho$ massa jenis CO₂ (kg/m³), $v_r$ dan $v_z$ komponen kecepatan radial dan aksial (m/s).

### 2.3 Persamaan Momentum (Navier–Stokes Aksisimetrik)

Arah radial:

$$\rho\!\left(\frac{\partial v_r}{\partial t} + v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\!\left[\frac{1}{r}\frac{\partial}{\partial r}\!\left(r\frac{\partial v_r}{\partial r}\right) - \frac{v_r}{r^{2}} + \frac{\partial^{2} v_r}{\partial z^{2}}\right] \tag{2}$$

Arah aksial:

$$\rho\!\left(\frac{\partial v_z}{\partial t} + v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\!\left[\frac{1}{r}\frac{\partial}{\partial r}\!\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^{2} v_z}{\partial z^{2}}\right] + \rho g \tag{3}$$

dengan $p$ tekanan (Pa), $\mu$ viskositas dinamis CO₂ (Pa·s), dan $g$ percepatan gravitasi.

### 2.4 Persamaan Energi (Toledo & del Valle, 2023)

Untuk menangkap efek perpindahan panas non-isotermal:

$$\rho c_p\!\left(\frac{\partial T}{\partial t} + v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\!\left(r k \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k \frac{\partial T}{\partial z}\right) + \dot{q}_{\text{gen}} \tag{4}$$

dengan $c_p$ kapasitas panas jenis (J/kg·K), $k$ konduktivitas termal (W/m·K), dan $\dot{q}_{\text{gen}}$ laju pembangkitan panas volumetrik dari efek Joule–Thomson selama depresurisasi.

### 2.5 Persamaan Konsentrasi Cannabinoid

Mekanisme perpindahan massa di dalam unggun dimodelkan sebagai konveksi–difusi dengan sumber dari desorpsi internal:

$$\frac{\partial C}{\partial t} + v_r \frac{\partial C}{\partial r} + v_z \frac{\partial C}{\partial z} = D_{\text{eff}}\!\left[\frac{1}{r}\frac{\partial}{\partial r}\!\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^{2} C}{\partial z^{2}}\right] + R_s(C, T, p) \tag{5}$$

dengan $C$ konsentrasi cannabinoid terlarut dalam CO₂ (kg/m³), $D_{\text{eff}}$ koefisien difusi efektif (m²/s), dan $R_s$ laju desorpsi permukaan yang bergantung pada kelarutan dan gradien konsentrasi.

### 2.6 Persamaan Keadaan Peng–Robinson

Massa jenis CO₂ pada kondisi superkritis dihitung dengan:

$$p = \frac{R_g T}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)} \tag{6}$$

dengan $a(T) = 0{,}45724 R_g^{2} T_c^{2}/p_c \cdot \alpha(T)$ dan $b = 0{,}07780 R_g T_c / p_c$. Fungsi $\alpha(T)$ direduksi oleh faktor $\kappa$ yang bergantung pada faktor asimetri $\omega$.

### 2.7 Kondisi Batas

- **Inlet** ($z = 0$): $v_z = v_{\text{in}}$, $C = C_{\text{in}}$, $T = T_{\text{in}}$
- **Dinding** ($r = R_v$): $v_r = 0$ (*no-slip*), $-\left.k \frac{\partial T}{\partial r}\right|_{R_v} = h(T_w - T_{\text{ext}})$
- **Outlet** ($z = L$): $\partial p/\partial z = 0$ (gradien tekanan nol)
- **Sumbu** ($r = 0$): $\partial v_r/\partial r = 0$, $\partial C/\partial r = 0$, $\partial T/\partial r = 0$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Teknologi SFE-CO₂

Sistem SFE-CO₂ industri tersusun atas subsistem berikut:

1. **Tangki CO₂ cair** dengan pendingin (−20°C) dan pompa diafragma tekanan tinggi.
2. **Heat exchanger pre-heater** untuk menaikkan CO₂ di atas titik kritis ($T_c = 304{,}13$ K, $p_c = 7{,}38$ MPa).
3. **Extraction vessel** (reaktor utama) berisi biomassa kanabis yang sudah digiling dan di-decarboxylate.
4. **Expansion valve** (back-pressure regulator) untuk depresurisasi selektif.
5. **Separation vessels** (S1, S2) untuk pemulihan ekstrak pada tekanan rendah.
6. **Recycle compressor** dan **flow totalizer** berakurasi ±1%.

### 3.2 Prosedur SOP Ekstraksi Batch

| Tahap | Aktivitas | Parameter Kritis | Sumber Literatur |
|-------|-----------|------------------|------------------|
| 1. Preparasi | Pengecilan ukuran partikel biomassa 0,5–1,5 mm; pengeringan (kadar air <10%); *decarboxylation* pada 110–130°C selama 30–60 menit (untuk aktivasi THC) | Kadar air, ukuran partikel | Obchoei & Limtrakarn (2024) |
| 2. *Loading* | Pengisian unggun ke vessel dengan packing density ρ_b = 350–500 kg/m³ | Distribusi pori awal | DOI 10.1016/j.ijft.2024.100682 |
| 3. Presurisasi | Pemompaan CO₂ ke tekanan target dengan ramp 5–10 bar/s | Laju Joule–Thomson cooling | Toledo & del Valle (2023) |
| 4. Ekstraksi | Pemeliharaan T dan p, pengumpulan data $\dot{m}_{\text{CO}_2}$, $\Delta T$, $\Delta p$ | T, p, $\dot{m}_{\text{CO}_2}$ | DOI 10.1016/j.supflu.2023.106046 |
| 5. Depresurisasi | Pembukaan BPR dengan ramp 2–5 bar/s | Pendinginan Joule–Thomson reversibel | Toledo & del Valle (2023)

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
