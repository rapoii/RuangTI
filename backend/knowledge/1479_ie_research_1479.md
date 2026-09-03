# 1479 — Bioplastik untuk Ekonomi Sirkular: Rekayasa Material, Sistem Produksi Biokatalitik, dan Integrasi Rantai Pasok Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Bioplastics for a circular economy
**Jurnal & Sitasi Utama:** Jan‐Georg Rosenboom, Róbert Langer, Giovanni Traverso (2022). *Nature Reviews Materials*. DOI: [https://doi.org/10.1038/s41578-021-00407-8](https://doi.org/10.1038/s41578-021-00407-8)
**Sitasi Pendukung:** Marilene Pavan, Kristina Reinmets, Shivani Garg (2022). *Metabolic Engineering*. DOI: [https://doi.org/10.1016/j.ymben.2022.01.015](https://doi.org/10.1016/j.ymben.2022.01.015)

---

## 1. Pendahuluan dan Konteks Industri

Industri plastik global menghadapi paradoks struktural yang semakin akut. Produksi plastik konvensional berbasis fosil—yang didominasi oleh poliolefin (PE, PP), poliester aromatik (PET), dan polistirena—telah melampaui 390 juta ton per tahun (European Bioplastics / nova-Institute, 2021, yang dirujuk oleh Rosenboom *et al.*, 2022, DOI: [10.1038/s41578-021-00407-8](https://doi.org/10.1038/s41578-021-00407-8)), sementara tingkat daur ulang secara global masih berada di bawah 10% dan sebagian besar produk berakhir di tempat pembuangan akhir, badan air, atau insinerator. Rosenboom, Langer, dan Traverso (2022) dalam *Nature Reviews Materials* menegaskan bahwa kondisi ini memicu "wicked problem" yang membutuhkan transformasi sistemik, bukan sekadar substitusi material satu banding satu. Konsep *bio-based* (berbasis biomassa terbarukan) dan *biodegradable* (terdegradasi secara biologis) tidak bersifat ekuivalen; oleh karena itu, paper tersebut mengusulkan taksonomi empat kuadran yang kini diadopsi sebagai standar diskusi industri: bio-based & biodegradable (mis. PLA, PHA), bio-based & non-biodegradable (mis. bio-PE, bio-PET), fossil-based & biodegradable (mis. PCL, PVOH), dan fossil-based & non-biodegradable (mayoritas plastik konvensional) (Rosenboom *et al.*, 2022).

Konteks operasionalnya bersifat multidimensional. Pertama, dari sisi permintaan, proyeksi pasar bioplastik global menunjukkan pertumbuhan kapasitas produksi dari sekitar 2,42 juta ton (2021) menjadi lebih dari 5,8 juta ton pada 2026, dengan PLA dan PHA sebagai tulang punggung pertumbuhan (Rosenboom *et al.*, 2022, Fig. 1). Kedua, dari sisi keberlanjutan, perhitungan *cradle-to-gate* Life Cycle Assessment (LCA) menunjukkan bahwa PLA yang diproduksi dari pati jagung memiliki potensi pemanasan global (GWP) sebesar 1,7–2,4 kg CO₂-eq/kg, sedangkan PET berbasis fosil memiliki GWP sekitar 3,0–4,0 kg CO₂-eq/kg; namun *trade-off* berupa *eutrophication potential* dan kompetisi dengan lahan pangan menjadi variabel kritis yang harus dimitigasi (Rosenboom *et al.*, 2022). Ketiga, dari perspektif sistem industri, integrasi ke dalam model ekonomi sirkular memerlukan arsitektur *reverse logistics*, fasilitas kompositing industri (ISO 14855, EN 13432), dan—yang paling mutakhir—platform fermentasi gas (C1) yang memanfaatkan emisi CO₂ sebagai umpan (Pavan, Reinmets, & Garg, 2022, DOI: [10.1016/j.ymben.2022.01.015](https://doi.org/10.1016/j.ymben.2022.01.015)). Pavan *et al.* (2022) menyoroti bahwa bakteri asetogen dan hidrogenotrof aerob, melalui *Wood–Ljungdahl pathway* dan *Calvin–Benson–Bassham cycle*, mampu mengasimilasi CO₂/CO menjadi asetil-CoA dan selanjutnya menjadi polihidroksialkanoat (PHA), sehingga memungkinkan karbon monoksida dari *syngas* industri baja atau biogas dari TPA menjadi feedstock bernilai tambah. Urgensi operasionalnya nyata: biaya eksternalitas lingkungan plastik konvensional terhadap ekosistem laut (diestimasi sebesar US$ 2.5–10 miliar/tahun secara global menurut berbagai laporan yang dirujuk dalam Rosenboom *et al.*, 2022) telah mendorong regulasi single-use plastics di Uni Eropa (SUPD, 2019/904) dan berbagai yurisdiksi lain, membuka *window of opportunity* bagi kapasitas produksi bioplastik domestik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Taksonomi dan Komposisi Material

Bioplastik diklasifikasikan berdasarkan dua atribut biner independen: **(i)** kandungan karbon berbasis hayati ($C_{bio}$) dan **(ii)** kemampuan degradasi biologis dalam kondisi tertentu ($B$). Formulasi indikator komposit adalah:

$$
I_{bio} = \alpha \cdot C_{bio} + \beta \cdot B, \quad \text{dengan } \alpha, \beta \in [0,1], \ \alpha + \beta \leq 1
$$

di mana $C_{bio}$ diukur sebagai fraksi massa karbon yang berasal dari biomassa terbarukan per ASTM D6866 ($^{14}C$ method), dan $B$ adalah parameter Boolean yang bernilai 1 jika material memenuhi salah satu standar biodegradabilitas (EN 13432, ASTM D6400, ISO 17088). Rosenboom *et al.* (2022) menekankan bahwa $C_{bio}$ saja tidak menjamin keberlanjutan; sebagai contoh, bio-PE dari tebu memiliki $C_{bio} \approx 100\%$ namun secara struktural identik dengan PE fosil dan tidak biodegradable, sehingga kontribusinya terhadap ekonomi sirkular bergantung pada *end-of-life pathway* (recycling, bukan kompos).

### 2.2 Neraca Massa Proses Fermentasi PHA

Untuk produksi PHA oleh *Cupriavidus necator* dengan substrat asam lemak atau glukosa, neraca massa stoikiometris mengikuti persamaan umum (Rosenboom *et al.*, 2022):

$$
\frac{dX}{dt} = \mu X, \quad \frac{dP}{dt} = q_P X, \quad \frac{dS}{dt} = -q_S X
$$

di mana $X$ = konsentrasi biomassa (g/L), $P$ = konsentrasi PHA (g/L), $S$ = konsentrasi substrat (g/L), $\mu$ = laju pertumbuhan spesifik (h⁻¹), $q_P$ = laju pembentukan produk spesifik (g PHA / g sel·h), dan $q_S$ = laju konsumsi substrat spesifik. Hasil (yield) PHA terhadap substrat didefinisikan sebagai:

$$
Y_{P/S} = \frac{\Delta P}{-\Delta S} \quad [\text{g PHA / g substrat}]
$$

Untuk *C. necator* pada kondisi *nitrogen-limited* dengan asam oktanoat sebagai sumber karbon, hasil tipikal $Y_{P/S}$ mencapai 0,3–0,4 g/g, sementara pada glukosa hasil teoretis adalah:

$$
9\ \text{C}_6\text{H}_{12}\text{O}_6 + 6\ \text{O}_2 \rightarrow 4\ (\text{C}_4\text{H}_6\text{O}_2)_n + 12\ \text{CO}_2 + 6\ \text{H}_2\text{O} + \text{energi}
$$

dengan $Y_{P/S}^{teo} \approx 0{,}48$ g/g (Rosenboom *et al.*, 2022). Namun, secara industrial *yield* aktual hanya 25–35% dari nilai teoritis karena biaya pemeliharaan sel dan pembentukan produk samping.

### 2.3 Konversi C1 oleh Bakteri Asetogenik

Pavan *