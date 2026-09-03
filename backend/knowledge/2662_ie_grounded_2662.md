# 2662 — Model Resiliensi Cold Chain Logistics untuk Produk Mudah Rusak (Perishable Products): Integrasi Sistem IoT Temperature Monitoring pada Cold Chain Box Vaksin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dalam rantai pasok produk termolabil (perishable products) seperti vaksin, produk biologis, makanan beku, dan reagen diagnostik, di mana integritas suhu sepanjang rantai distribusi menjadi penentu langsung terhadap efficacy, keamanan, dan nilai komersial produk. Gangguan sekecil apapun terhadap profil suhu yang telah ditentukan—misalnya pada rentang 2–8°C untuk sebagian besar vaksin—dapat menyebabkan denaturasi protein, kehilangan potensi antigen, atau bahkan menjadikan produk tersebut berbahaya bagi pasien. Secara global, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin terbuang sia-sia akibat kegagalan cold chain di negara berkembang, sebuah ironi tragis ketika akses terhadap imunisasi masih menjadi masalah kesehatan masyarakat utama.

Dalam konteks ini, Khurshid dan Siddiqui (2024) melalui karya ilmiahnya yang berjudul *"A Resilience Model for Cold Chain Logistics of Perishable Products"* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan sebuah kerangka resiliensi untuk mengkuantifikasi kemampuan sistem cold chain dalam menghadapi, menyerap, memulihkan, dan beradaptasi terhadap gangguan operasional. Model resiliensi ini berpijak pada kenyataan bahwa cold chain bukan sekadar infrastruktur statis, melainkan sebuah sistem dinamis yang beroperasi di bawah ketidakpastian tinggi—variabilitas suhu lingkungan, waktu transit, perilaku operator, hingga kegagalan peralatan pendingin.

Di sisi implementasi operasional, Putra, Defit, dan Nurcahyo (2024) dalam Jurnal KomtekInfo (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan secara presisi sebuah masalah industri riil pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi, Dinas Kesehatan Kabupaten Siak: cold chain box yang digunakan untuk menyimpan dan mendinginkan vaksin tidak dilengkapi alat pemantauan suhu secara *real-time* yang mampu memberikan peringatan dini kepada apoteker ketika terjadi kenaikan suhu akibat kerusakan internal maupun eksternal. Lebih lanjut, proses pencatatan suhu masih dilakukan secara manual setiap 2 (dua) jam sekali pada *log sheet* oleh apoteker, sebuah metode yang memiliki dua kelemahan fundamental: (1) *sampling interval* terlalu panjang untuk menangkap *transient excursion* yang terjadi di antaranya, dan (2) rentan terhadap human error dan keterlambatan respons.

Kedua perspektif ini—resiliensi sebagai kerangka teoretis dan IoT temperature monitoring sebagai mekanisme implementasi—menjadi dasar pengembangan Modul 2662 ini. Urgensi industri terhadap solusi resiliensi cold chain tidak hanya bersifat teknis, tetapi juga ekonomis dan regulasi. Kerugian akibat *temperature excursion* pada industri farmasi dapat melampaui Rp 1 miliar per insiden untuk batch vaksin bernilai tinggi, belum termasuk biaya reputasi, litigasi, dan penarikan produk. Oleh karena itu, pendekatan sistemik yang mengintegrasikan model resiliensi kuantitatif dengan sensor IoT berbiaya rendah namun akurat—seperti DS18B20—menawarkan *value proposition* yang kuat bagi transformasi cold chain Indonesia.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Model resiliensi yang dibangun oleh Khurshid dan Siddiqui (2024) mengikuti kerangka klasik Bruneau et al. yang telah diadopsi secara luas dalam rekayasa sistem infrastruktur. Resiliensi sistem $R$ didefinisikan sebagai kemampuan sistem untuk mempertahankan fungsi kritisnya ketika menghadapi gangguan, dan dapat diformulasikan secara integral sebagai berikut:

$$R = \int_{t_0}^{t_1} \frac{P(t)}{P_0} \, dt$$

di mana:
- $P(t)$ = performa sistem pada waktu $t$ setelah gangguan terjadi (dapat berupa rasio produk layak jual, *compliance rate*, atau *service level* cold chain),
- $P_0$ = performa nominal sistem saat kondisi operasi normal,
- $t_0$ = waktu mulai gangguan (misalnya saat sensor mendeteksi suhu di luar ambang batas),
- $t_1$ = waktu pemulihan sistem ke performa nominal.

Nilai $R$ mendekati 1 menunjukkan resiliensi tinggi, sedangkan $R \ll 1$ mengindikasikan sistem sangat rentan. Untuk cold chain yang bersifat *time-sensitive*, kita perlu mendefinisikan fungsi degradasi performa $P(t)$ yang lebih spesifik. Salah satu pendekatan yang diadopsi dalam literatur farmasi adalah model degradasi berbasis *time-temperature integral* (TTI):

$$F(T) = \int_{0}^{t} 10^{\frac{T_{ref} - T(\tau)}{z}} \, d\tau$$

di mana $T_{ref}$ adalah suhu referensi stabilitas, $z$ adalah parameter resistensi termal produk (untuk vaksin tipikal $z \approx 5\text{–}10°C$), dan $T(\tau)$ adalah profil suhu aktual. Ketika $F(T)$ melebihi dosis ambang kritis $F_{crit}$, produk dianggap失效 (失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效). Kerusakan kumulatif semacam ini menuntut strategi mitigasi berbasis deteksi dini.

### 2.2 Indeks Kerentanan dan Kecepatan Pemulihan

Untuk melengkapi indeks resiliensi, diperlukan dua metrik tambahan: *vulnerability* $V$ dan *recovery rate* $\rho$:

$$V = 1 - \frac{P_{min}}{P_0}$$

$$\rho = \frac{dP}{dt}\bigg|_{t \to t_1^-}$$

di mana $P_{min}$ adalah performa minimum sistem selama fase gangguan. Tripel $(R, V, \rho)$ memberikan karakterisasi resiliensi yang lebih lengkap. Khurshid dan Siddiqui (2024) menekankan bahwa ketiga parameter ini bersifat *trade-off*: investasi pada sensor yang meningkatkan $\rho$ (deteksi lebih cepat, respons lebih cepat) akan menurunkan $V$ sekaligus meningkatkan $R$.

### 2.3 Model Sensor DS18B20 dan Akurasi Pengukuran

Putra, Defit, dan Nurcahyo (2024) memilih sensor DS18B20 sebagai elemen transduser utama. Karakteristik teknis sensor ini menjadi dasar perhitungan *uncertainty* sistem monitoring:

| Parameter | Nilai |
|---|---|
| Rentang pengukuran | $-55°C$ sampai $+125°C$ |
| Akurasi | $\pm 0.5°C$ pada rentang $-10°C$ sampai $+85°C$ |
| Resolusi | $0.0625°C$ (12-bit) |
| Antarmuka | 1-Wire (single data line) |
| Konversi waktu | $750 \text{ ms}$ (12-bit) |

Akurasi sensor menghasilkan batas bawah deteksi terhadap *temperature excursion*.