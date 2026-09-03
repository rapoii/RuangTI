# 2794 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi fitokimia telah mengalami transformasi signifikan sejak diterapkannya regulasi legalisasi kanabis medis dan hemp industri di berbagai yurisdiksi (Kanada, beberapa negara bagian AS, dan Uni Eropa). Minyak kanabis—kaya akan senyawa bioaktif kanabinoid (CBD, CBG, THC) dan terpen—memiliki nilai tambah ekonomi yang sangat tinggi, dengan harga pasar yang dapat melampaui USD 50.000 per kilogram untuk ekstrak full-spectrum dengan kemurnian farmasi. Dalam konteks ini, **Supercritical Fluid Extraction (SFE) dengan CO₂** muncul sebagai teknologi unggulan karena sifatnya yang non-toksik, tidak meninggalkan residu pelarut, selektivitas tinggi melalui pengaturan parameter operasi, dan kemampuan daur ulang solvent yang melekat pada sifat CO₂ superkritis (Obchoei & Limtrakarn, 2024, [DOI:10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Namun, desain optimal ekstraktor SFE-CO₂ komersial menghadapi tantangan multidisiplin yang kompleks. Mayoritas bejana ekstraksi industri memiliki geometri silinder vertikal yang secara fisik bersifat *axisymmetric*, di mana perilaku fluida di seluruh volume 3-D dapat direpresentasikan secara akurat melalui potongan 2-D pada bidang radial–aksial. Obchoei dan Limtrakarn (2024) menjawab kebutuhan ini dengan mengembangkan model aliran aksisimetrik yang komprehensif untuk memprediksi profil kecepatan, tekanan, dan konsentrasi solut dalam packed-bed biomassa kanabis. Pendekatan ini secara drastis mengurangi biaya komputasi CFD hingga 60–80% dibanding simulasi 3-D penuh tanpa牺牲 akurasi yang berarti di zona tengah vessel.

Aspek kedua yang tak kalah kritis adalah fenomena **perpindahan panas transien** selama tahap *pressurization*, *extraction*, dan *depressurization*. Seperti ditegaskan oleh Toledo dan del Valle (2023, [DOI:10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)), asumsi isotermal yang umum digunakan dalam desain SFE konvensional tidak realistis karena proses kompresi CO₂ dari fase gas ke fase superkritis melepaskan energi termal yang substansial. Tanpa pemodelan perpindahan panas yang valid, prediksi yield ekstraksi dapat meleset hingga 15–25%, yang dalam skala industri berarti kerugian ekonomi jutaan dolar per tahun pada fasilitas dengan throughput ratusan kilogram biomassa per batch. Kombinasi dua perspektif ini—aliran aksisimetrik dan dinamika termal—menjadi tulang punggung desain dan operasi optimal ekstraktor SFE-CO₂ untuk aplikasi farmasi, nutraceutical, dan kosmetik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Persamaan Pengaturan

Model aksisimetrik Obchoei & Limtrakarn (2024) bekerja pada koordinat silinder $(r, z)$ dengan asumsi simetri rotasional terhadap sumbu $z$. Sistem persamaan diferensial parsial (PDP) yang mengatur fenomena transpor terdiri atas kontinuitas, momentum, energi, dan transport spesies.

**Persamaan Kontinuitas (konservasi massa):**

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

**Persamaan Momentum arah radial ($r$):**

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) - \frac{v_r}{r^2} + \frac{\partial^2 v_r}{\partial z^2}\right] + \rho g_r$$

**Persamaan Momentum arah aksial ($z$):**

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu}{\kappa}\varepsilon v_z + \rho g_z$$

Di sini, $\kappa$ adalah permeabilitas packed-bed (mengikuti persamaan Kozeny-Carman), dan $\varepsilon$ adalah porositas bed. Suku $-\mu v_z / \kappa$ merepresentasikan *Darcy drag* yang dominan dalam medium berpori.

**Persamaan Energi (perpindahan panas):**

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(k r \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + \dot{Q}_{comp} + \dot{Q}_{mix}$$

dengan $\dot{Q}_{comp}$ adalah panas dari kompresi CO₂ dan $\dot{Q}_{mix}$ adalah panas pelarutan (eksotermik) kanabinoid ke dalam fasa superkritis.

**Persamaan Transport Spesies (untuk komponen kanabinoid $i$):**

$$\frac{\partial (\varepsilon \rho Y_i)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r Y_i)}{\partial r} + \frac{\partial (\rho v_z Y_i)}{\partial z} = \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho D_{eff,i} \frac{\partial Y_i}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho D_{eff,i} \frac{\partial Y_i}{\partial z}\right) + \dot{R}_i$$

di mana $Y_i$ adalah fraksi massa komponen $i$ (CBD, THC, dll.) dan $\dot{R}_i