# 2027 — Co-Packaged Optics (CPO) sebagai Paradigma Baru Interkoneksi Data Center: Status, Tantangan Heterogenitas, dan Solusi Rekayasa Optoelektronik untuk Era AI dan IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Co-packaged optics (CPO): status, challenges, and solutions
**Jurnal & Sitasi Utama:** Min Tan, Jiang Xu, Siyang Liu (2023). *Frontiers of Optoelectronics*. DOI: [https://doi.org/10.1007/s12200-022-00055-y](https://doi.org/10.1007/s12200-022-00055-y)
**Sitasi Pendukung:** Konstantinos Rogdakis, George Psaltakis, Giorgos Fagas (2024). *Discover Materials*. DOI: [https://doi.org/10.1007/s43939-024-00074-w](https://doi.org/10.1007/s43939-024-00074-w)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial lalu lintas data pada infrastruktur hyperscale data center merupakan fenomena yang telah mengubah fundamental desain sistem digital modern. Min Tan, Jiang Xu, dan Siyang Liu (2023) dalam makalahnya yang diterbitkan di *Frontiers of Optoelectronics* dengan DOI [10.1007/s12200-022-00055-y](https://doi.org/10.1007/s12200-022-00055-y) mendokumentasikan bahwa lalu lintas data center telah tumbuh pada *compound annual growth rate* (CAGR) mendekati **30%** sepanjang dekade terakhir, didorong oleh konvergensi empat vektor teknologi: jaringan 5G, *Internet of Things* (IoT), aplikasi *Artificial Intelligence* (AI) generatif, serta beban kerja *High-Performance Computing* (HPC) seperti simulasi fisika, *drug discovery*, dan *large language model training*. Lebih lanjut, hampir **75%** dari total lalu lintas data center berada dalam perimeter internal data center itu sendiri (*east-west traffic*), bukan komunikasi keluar ke internet publik. Distribusi trafik ini menunjukkan bahwa bottleneck arsitektural paling kritis justru terletak pada interkoneksi *chip-to-chip*, *chip-to-module*, dan *switch-to-switch*, bukan pada *last-mile connectivity*.

Secara historis, industri telah mengandalkan *pluggable optics* — modul transponder optik yang dicolokkan ke panel depan switch dan router — sebagai solusi de-facto interkoneksi data center. Namun, seperti ditegaskan oleh Tan et al. (2023), laju peningkatan bandwidth *pluggable optics* konvensional jauh lebih lambat dibandingkan laju pertumbuhan kebutuhan aplikasi. Gap antara kapasitas *pluggable optics* dan permintaan beban kerja AI/HPC terus melebar secara struktural, menciptakan *deadlock rekayasa* yang tidak berkelanjutan (*unsustainable trend*). Akar masalahnya bersifat fisik: jalur listrik (*electrical trace*) antara ASIC switch dan modul optik pluggable memiliki panjang 50–100 mm, yang pada kecepatan 100+ Gbps per lane (*PAM4 signaling*) menderita *channel insertion loss*, *reflection*, *crosstalk*, dan *dispersion* yang menurunkan *signal integrity* secara drastis.

Dalam konteks inilah paradigma **Co-Packaged Optics (CPO)** muncul sebagai pendekatan disruptif. CPO melakukan integrasi *die* optik (laser, modulator, photodetector, *waveguide*) secara langsung di dalam *package* substrat yang sama dengan ASIC switch, memperpendek jarak listrik menjadi hanya 5–10 mm. Pendekatan ini memungkinkan peningkatan *bandwidth density* dan *energy efficiency* secara simultan. Complementer dengan tren ini, Konstantinos Rogdakis, George Psaltakis, dan Giorgos Fagas (2024) dalam *Discover Materials* dengan DOI [10.1007/s43939-024-00074-w](https://doi.org/10.1007/s43939-024-00074-w) menyoroti bahwa arsitektur *hybrid chips* — yang menggabungkan material dan proses fabrikasi berbeda pada substrat atau *package* yang sama melalui teknik *heterogeneous integration* — menjadi tulang punggung teknologi masa depan. Sinergi CPO dengan filosofi *hybrid integration* memungkinkan ko-optimasi elektronik-fotonik yang sebelumnya mustahil dilakukan pada modul diskret.

Urgensi ekonominya juga nyata: biaya energi listrik (*opex*) untuk interkoneksi telah menjadi komponen dominan pada *total cost of ownership* (TCO) data center modern. Sebuah *pluggable QSFP-DD 400G* mengonsumsi daya ~12–15 W per port, dan pada switch dengan 64 port, konsumsi listrik *faceplate* saja dapat melebihi 1 kW per switch. Dengan proyeksi *port count* hyperscale switch mencapai 1024 port pada 2027, model konsumsi listrik seperti ini tidak akan termitigasi hanya oleh kemajuan proses CMOS, melainkan memerlukan reformasi arsitektural fundamental — yang merupakan *value proposition* utama CPO.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka kuantitatif CPO dibangun di atas beberapa persamaan fundamental dalam teori interkoneksi dan rekayasa optoelektronik. Berikut adalah formulasi yang relevan untuk analisis rekayasa.

**2.1 Model Pertumbuhan Trafik dan Proyeksi Bandwidth**

Pertumbuhan eksponensial trafik data center mengikuti model geometris:

$$B(t) = B_0 (1 + r)^t$$

dengan $B(t)$ adalah bandwidth agregat pada tahun $t$, $B_0$ adalah bandwidth baseline, dan $r$ adalah CAGR. Dengan $r = 0{,}30$ (mengikuti estimasi Tan et al., 2023), maka kapasitas yang dibutuhkan pada horizon 2027 ($t = 4$) dibandingkan baseline 2023 adalah:

$$\frac{B(2027)}{B(2023)} = (1{,}30)^4 \approx 2{,}86$$

Artinya, kapasitas interkoneksi harus hampir **triple** dalam empat tahun, laju yang secara fisik tidak dapat dipenuhi oleh *pluggable optics* tanpa reformasi arsitektural.

**2.2 Energi per Bit (*Energy per Bit*, Epb)**

Metrik paling fundamental efisiensi interkoneksi adalah energi yang dibutuhkan untuk mentransmisikan satu bit informasi:

$$E_{pb} = \frac{P_{module}}{R_b} \quad [\text{J/bit}]$$

dengan $P_{module}$ adalah total daya modul (termasuk driver, TIA, laser, dan DSP) dan $R_b$ adalah *bit rate*. Untuk modul *pluggable* 400G FR4, nilai tipikal $P_{module} \approx 12$ W, sehingga:

$$E_{pb}^{pluggable} = \frac{12}{400 \times 10^9} = 30 \times 10^{-12} \text{ J/bit} = 30 \text{ pJ/bit}$$

CPO yang mengintegrasikan driver dan TIA langsung di substrat packages, dengan eliminasi *SerDes* front-panel panjang, menurunkan nilai ini menjadi:

$$E_{pb}^{CPO} = \frac{4}{400 \times 10^9} = 10 \times 10^{-12} \text{ J/bit} = 10 \text{ pJ/bit}$$

Rasio penghematan:

$$\eta_{CPO} = 1 - \frac{E_{pb}^{CPO}}{E_{pb}^{pluggable}} = 1 - \frac{10}{30} = 66{,}7\%$$

**2.3 Reduksi Atenuasi Kanal Listrik**

Atenuasi *electrical channel* pada *printed circuit board* (PCB) mengikuti:

$$IL_{dB}(f, L) = \alpha_s \sqrt{f} + \alpha_d f + k \cdot L \quad [\text{dB}]$$

dengan $\alpha_s$ adalah konstanta *skin effect*, $\alpha_d$ adalah koefisien *dielectric loss*, $f$ adalah frekuensi sinyal, $k$ adalah rugi konduktor per satuan panjang, dan $L$ adalah panjang jejak. Pada 56 GHz (bandwidth Nyquist untuk 112 Gbps PAM4), memperpendek $L$ dari 75 mm menjadi 7,5 mm menghasilkan penurunan *insertion loss* lebih dari 10 dB, menghilangkan kebutuhan *equalizer* kompleks dan menurunkan latensi.

**2.4 Bandwidth Density dan Pitch Optik**

Density bandwidth tepi paket didefinisikan sebagai:

$$BD = \frac{R_b \cdot N_{ch}}{A_{edge}} \quad [\text{Gbps/mm}]$$

Untuk *pluggable* dengan pitch 25 mm per port 400G: $BD \approx 16$ Gbps/mm. Untuk CPO dengan pitch 1 mm (array *fiber attach*): $BD \approx 400$ Gbps/mm, yaitu **25× lebih padat**.

**2.5 Beban Termal dan Thermal Resistance**

Total disipasi termal *faceplate* sebuah switch:

$$P_{faceplate} = \sum_{i=1}^{N}
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
