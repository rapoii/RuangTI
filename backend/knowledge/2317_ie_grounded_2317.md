# 2317 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dengan Teknologi High-Pressure Acid Leaching (HPAL): Karakteristik Skala Industri, Desulfurisasi Ampas, dan Reduksi Fe-Ni

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade Ni) melonjak signifikan seiring akselerasi transisi elektrifikasi kendaraan dan penetrasi teknologi baterai lithium-ion NMC/NCA. Bijih nikel laterit—yang menyimpan ±60 % cadangan sumber daya nikel dunia namun hanya menyumbang ±40 % produksi primer—menjadi tumpuan strategis karena cadangan sulfida yang mudah diekstraksi secara pirometalurgi makin menipis (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Di antara teknologi hidrometalurgi yang tersedia, *High-Pressure Acid Leaching* (HPAL) merupakan satu-satunya rute komersial yang mampu mengekstraksi Ni dan Co dari horizon limonit (laterit kelas oksida) secara selektif pada recovery 90–95 %. Operasi tipikal dijalankan pada suhu 240–270 °C dan tekanan 35–45 bar dengan kemurnian autoclave multi-kompartemen tipe horizontal.

Permasalahan operasional kronis pada fasilitas HPAL adalah pembentukan **kerak (scale)** di permukaan dalam autoclave, jaringan pipa transfer pulp, dan alat penukar panas. Kerak terutama tersusun atas hematit rekristalisasi $(\text{Fe}_2\text{O}_3)$, alunit $(\text{KAl}_3(\text{SO}_4)_2(\text{OH})_6)$, *basic ferric sulfate* $(\text{FeOHSO}_4)$, gipsum $(\text{CaSO}_4 \cdot 2\text{H}_2\text{O})$, dan polimorf silika. Pertumbuhan kerak menurunkan koefisien perpindahan panas, mempersempit luas aliran efektif, serta memaksa *shut-down* prematur untuk dilakukan *acid boil-out* mekanis dan kimiawi. Studi Dickson et al. (2026, [DOI: 10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) secara khusus memetakan perilaku *scaling* dan protokol karakterisasinya dalam kondisi HPAL, sementara Andrameda, Triaswinanti, dan Madra (2024, [DOI: 10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) membahas penanganan ampas HPAL pasca-*leaching* melalui desulfurisasi dan proses *roasting-reduction* untuk回收 Fe–Ni dalam bentuk paduan. Integrasi keduanya merepresentasikan rantai nilai lengkap dari autoclave hingga *valorization* ampas, yang menjadi semakin relevan dalam kerangka *circular economy* dan standar *cleaner production*.

Urgensi ekonominya substansial: pada pabrik HPAL berskala 30.000–50.000 t Ni/tahun, setiap hari *downtime* karena *descaling* menyebabkan kerugian revenue sebesar USD 1,5–3,0 juta. Oleh karena itu, kemampuan memodelkan kinetika *scaling*, mengkarakterisasi komposisi kerak, dan mendesain protokol pemeliharaan prediktif menjadi kompetensi rekayasa yang strategis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pertumbuhan Kerak

Pertumbuhan kerak di dalam autoclave HPAL dimodelkan sebagai proses *heterogeneous nucleation–growth* pada permukaan baja austenitik (Alloy 20, Hastelloy, atau titanium). Laju penebalan kerak $\delta(t)$ dapat dinyatakan melalui persamaan diferensial parabolic-tipe Arrhenius:

$$\frac{d\delta}{dt} = k_0 \, e^{-E_a/RT} \, \left(C_{\text{Fe}^{3+}}^n \cdot C_{\text{H}_2\text{SO}_4}^m\right) - k_r \, \delta$$

dengan $k_0$ adalah konstanta pre-exponensial (m·s$^{-1}$), $E_a$ energi aktivasi (kJ·mol$^{-1}$, tipikal 60–90 kJ·mol$^{-1}$ untuk endapan Fe/Al), $R = 8{,}314$ J·mol$^{-1}$·K$^{-1}$, $T$ suhu absolut (K), $C_{\text{Fe}^{3+}}$ dan $C_{\text{H}_2\text{SO}_4}$ adalah konsentrasi Fe(III) dan asam bebas dalam pulp (g·L$^{-1}$), serta $k_r$ adalah koefisien *re-dissolution* akibat turbulensi slurry. Eksponen $n, m$ berturut-turut berada pada rentang 0,8–1,4 dan $-0,2$ hingga