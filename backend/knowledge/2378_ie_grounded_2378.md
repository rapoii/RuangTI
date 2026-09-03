# 2378 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Fluida Superkritikal CO₂: Integrasi Model Perpindahan Panas, Massa, dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritikal (Supercritical Fluid Extraction, SFE) menggunakan karbon dioksida (CO₂) merupakan salah satu teknologi pemisahan hijau (*green technology*) yang paling matang untuk aplikasi fitokimia bernilai tinggi, termasuk isolasi kanabinoid (THC, CBD) dan terpenoid dari biomasa *Cannabis sativa*. Dibandingkan pelarut organik konvensional seperti heksana, etanol, atau kloroform, CO₂ superkritikal (SC-CO₂) menawarkan tiga keunggulan struktural: (i) sifatnya yang dapat *tunable* melalui manipulasi tekanan dan suhu, (ii) tidak meninggalkan residu toksik karena CO₂ kembali ke fasa gas pada depresurisasi, dan (iii) selektivitas tinggi terhadap senyur target berbasis polaritas. Pasar global ekstrak kanabis diproyeksikan mencapai USD 23,7 miliar pada tahun 2027 dengan CAGR >20%, sehingga kebutuhan akan model proses yang akurat menjadi sangat strategis bagi optimasi kapasitas, yield, dan biaya energi.

Thanachai Obchoei dan Wiroj Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) memperkenalkan **model aliran aksisimetrik** (*axisymmetric flow model*) yang merepresentasikan geometri ekstraktor vertikal secara dua dimensi radial-aksial (r-z) dengan asumsi rotasional simetri. Pendekatan ini secara radikal mengurangi biaya komputasi Computational Fluid Dynamics (CFD) dibanding simulasi 3-D penuh, namun tetap mempertahankan fidelitas tinggi terhadap fenomena fisik dominan: gradien tekanan aksial, distribusi kecepatan pori di dalam *packed bed* biomasa, dan profil konsentrasi solut di sepanjang ketinggian vessel. Studi tersebut mengisi celah literatur yang sebelumnya didominasi oleh model 1-D d'Arcy atau model *lumped-parameter* yang terlalu sederhana untuk desain industri presisi.

Secara paralel, Felipe R. Toledo dan José M. del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menyoroti pentingnya **perpindahan panas transien** pada tiga tahap kritis siklus SFE: *pressurization*, *extraction hold*, dan *depressurization*. Tahap *pressurization* (0–15 menit) melibatkan injeksi CO₂ dingin yang menurunkan suhu bed secara drastis (dapat mencapai ΔT = −20 K), menghambat kelarutan dan yield pada menit-menit awal. Tanpa koreksi perpindahan panas, prediksi yield total dapat overestimate hingga 30%. Integrasi kedua perspektif—mekanika fluida aksisimetrik dan dinamika termal—menjadi tulang punggung desain ekstraktor industri modern dengan target yield >90% dalam waktu proses <90 menit.

Dari perspektif Teknik Industri, signifikansi modul ini melampaui ranah kimia proses. Variabel-variabel keputusan seperti laju alir CO₂ (kg/jam), tekanan operasi (MPa), suhu jacket pemanas (°C), dan ketinggian packing (m) merupakan parameter desain yang secara langsung memengaruhi *throughput* (kg ekstrak/jam), *specific energy consumption* (kWh/kg ekstrak), serta *capital expenditure* (CAPEX) vessel berstandar ASME BPVC Section VIII. Modul 2378 membekali praktisi dengan kemampuan formulasi, simulasi, dan optimasi multi-fisika untuk keputusan rekayasa tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengaturan Aliran Aksisimetrik

Dalam koordinat silinder $(r, z, \theta)$ dengan asumsi **aksisimetrik** ($\partial/\partial\theta = 0$), dan memodelkan *packed bed* biomasa kanabis sebagai medium pori isotropik dengan porositas $\varepsilon$, persamaan kontinuitas untuk fasa fluida (SC-CO₂) dinyatakan sebagai:

$$\frac{\partial (\varepsilon \rho)}{\partial t} + \frac{1}{r}\frac{\partial (r \varepsilon \rho u_r)}{\partial r} + \frac{\partial (\varepsilon \rho u_z)}{\partial z} = 0$$

di mana $\rho$ adalah densitas SC-CO₂ (kg/m³), $u_r$ dan $u_z$ adalah komponen kecepatan dalam arah radial dan aksial (m/s). Persamaan momentum mengikuti formulasi **Darcy-Forchheimer-Brinkman** untuk mengakomodasi efek inersial di bilangan Reynolds partikel intermediet ($10 < Re_p < 1000$):

$$\rho \left( \frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu_{eff} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2} \right] - \frac{\mu}{K}u_z - \frac{\rho F}{\sqrt{K}}|u_z|u_z + \rho g$$

dengan $\mu_{eff}$ viskositas efektif, $K$ permeabilitas intrinsik bed (m²), $F$ koefisien inersia Forchheimer, dan $g$ percepatan gravitasi. Permeabilitas diprediksi oleh persamaan **Kozeny-Carman**:

$$K = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2}$$

### 2.2 Persamaan Energi dan Perpindahan Panas

Toledo & del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) mengembangkan persamaan energi dua-fasa (padatan biomasa + fluida SC-CO₂) dalam regimen transien:

$$[\rho c_p]_{eff} \frac{\partial T}{\partial t} + \rho_f c_{p,f} \left(u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z}\right) = k_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] - \Delta H_s \frac{\partial C_s}{\partial t}$$

di mana $[\rho c_p]_{eff} = (1-\varepsilon)\rho_s c_{p,s} + \varepsilon \rho_f c_{p,f}$, $\Delta H_s$ adalah entalpi pelarutan solut (J/kg), dan $\partial C_s/\partial t$ adalah laju ekstraksi kanabinoid (kg/m³·s). Kondisi batas termal melibatkan *heat transfer coefficient* jacket eksternal $h_{ext}$ yang mengikuti korelasi Sieder-Tate untuk aliran turbulen:

$$Nu_{jacket} = 0.027 Re_j^{0.8} Pr_j^{0.33} \left(\frac{\mu_b}{\mu_w}\right)^{0