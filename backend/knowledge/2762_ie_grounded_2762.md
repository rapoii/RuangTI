# 2762 — Model Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis dengan Proses Supercritical Fluid Extraction CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol—khususnya produksi *cannabinoid concentrates* seperti *cannabidiol* (CBD), *tetrahydrocannabinol* (THC), dan *terpenoid* minor—telah mengalami transformasi teknologi yang signifikan selama dekade terakhir. Pasar global produk turunan cannabis legal diproyeksikan melebihi USD 60 miliar pada tahun 2030, dengan permintaan utama datang dari sektor farmasi, nutraceutical, kosmetik, dan makanan fungsional. Dalam konteks ini, **Supercritical Fluid Extraction with Carbon Dioxide (SC-CO₂)** muncul sebagai *gold standard* karena kemampuannya menghasilkan ekstrak bebas residu pelarut toksik, selektivitas tinggi terhadap target solute, serta kemampuan tuning daya larut melalui manipulasi tekanan dan suhu operasi.

Obchoei dan Limtrakarn (2024), dalam publikasi mereka di *International Journal of Thermofluids*, menekankan bahwa optimalisasi proses SC-CO₂ pada skala industri masih menghadapi tantangan komputasional yang substansial. Ekstraktor industri modern memiliki volume antara 10 L hingga 1.000 L dengan geometri silinder yang menampung *biomass* cannabis padat dalam *packed bed*. Pemodelan tiga dimensi (3D) penuh atas dinamika fluida dalam packed bed semacam ini membutuhkan sumber daya komputasional yang sangat besar dan waktu simulasi yang panjang, sehingga tidak praktis untuk aplikasi *design space exploration* dan *process control* harian. Di sinilah **model aliran aksisimetrik (axisymmetric flow model)** berperan penting—ia mereduksi kompleksitas geometri 3D menjadi 2D dengan memanfaatkan simetri silinder, mempertahankan akurasi fisika fluida sekaligus menurunkan *degrees of freedom* hingga lebih dari 80% (Obchoei & Limtrakarn, 2024).

Aspek kedua yang tidak kalah krusial adalah termodinamika transien selama tiga tahap operasi: **pressurization**, **extraction**, dan **depressurization**. Toledo dan del Valle (2023) mendemonstrasikan bahwa perpindahan panas selama ketiga tahap ini secara langsung menentukan profil suhu lokal dalam ekstraktor, yang kemudian memengaruhi kelarutan CO₂ superkritis terhadap cannabinoid. Mereka menunjukkan bahwa proses pelarutan bersifat *endothermic*, sehingga tanpa manajemen termal yang tepat, suhu lokal dapat turun hingga 8–12 K di bawah *set point*, menurunkan yield hingga 30%. Kedua paper ini, oleh karenanya, membentuk kerangka komplementer: paper pertama menyediakan arsitektur CFD, sedangkan paper kedua menyediakan model perpindahan panas yang memvalidasi profil termal di dalamnya.

Dari perspektif Teknik Industri, integrasi kedua pendekatan ini memungkinkan pengembangan **Digital Twin** untuk pabrik ekstraksi cannabis—suatu kebutuhan mendesak bagi operator yang harus menekan *batch cycle time*, meningkatkan *yield* cannabinoid, dan memenuhi standar *Good Manufacturing Practice* (GMP) farmasi. Studi ini juga relevan untuk aplikasi lintas-sektor seperti ekstraksi kafein dari biji kopi, kurkumin dari kunyit, dan *essential oil* dari tanaman aromatik, di mana dinamika packed-bed SC-CO₂ serupa.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan axisymmetric aliran SC-CO₂ dalam ekstraktor cannabis memerlukan penyelesaian simultan empat persamaan konservasi utama: kontinuitas, momentum, energi, dan transfer massa. Dalam sistem koordinat silinder $(r, z)$ dengan asumsi *no-swirl* ($\partial/\partial\theta = 0$), formulasi governing equations mengikuti kaidah Navier–Stokes untuk fluida kompresibel.

### 2.1 Persamaan Kontinuitas (Konservasi Massa)

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (\rho r v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

di mana $\rho$ adalah densitas fluida, $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial.

### 2.2 Persamaan Momentum Aksisimetrik

Untuk arah radial ($r$):

$$\rho\left(\frac{\partial v_r
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
