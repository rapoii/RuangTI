# 1466 — Rekayasa Proses Ekstraksi Senyawa Bioaktif: Komposisi Kimiawi Apel (*Malus domestica*) dan Optimalisasi Teknologi Supercritical CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Recent Development on the Chemical Composition and Phenolic Extraction Methods of Apple (*Malus domestica*)—A Review
**Jurnal & Sitasi Utama:** Marcellus Arnold, Anna Gramza‐Michałowska (2023). *Food and Bioprocess Technology*. DOI: [https://doi.org/10.1007/s11947-023-03208-9](https://doi.org/10.1007/s11947-023-03208-9)
**Sitasi Pendukung:** Pairote Wiriyacharee, Yongyut Chalermchat, Thanyaporn Siriwoharn (2024). *Foods*. DOI: [https://doi.org/10.3390/foods13162486](https://doi.org/10.3390/foods13162486)

---

## 1. Pendahuluan dan Konteks Industri

Industri pangan fungsional (*functional food industry*) global mengalami transformasi struktural menuju produk berbasis senyawa bioaktif alami (*bioactive compounds*), didorong oleh meningkatnya permintaan konsumen terhadap makanan yang tidak hanya memenuhi kebutuhan gizi dasar, tetapi juga memberikan manfaat kesehatan preventif dan terapeutik. Dalam konteks ini, buah apel (*Malus domestica*) menempati posisi strategis sebagai salah satu sumber senyawa fenolik paling kompleks dan berlimpah di antara buah-buahan klimaterik yang dibudidayakan secara komersial. Marcellus Arnold dan Anna Gramza‐Michałowska (2023) dalam *review* komprehensifnya yang dipublikasikan di *Food and Bioprocess Technology* (DOI: 10.1007/s11947-023-03208-9) menyoroti bahwa pengembangan pasar apel tidak lagi terbatas pada konsumsi buah segar (*fresh consumption*), melainkan telah bergeser menuju hibridisasi kultivar baru dan formulasi produk fungsional berbasis metabolit sekunder tanaman.

Signifikansi industri dari pergeseran ini bersifat multidimensional. Dari perspektif ekonomi, pasar global ekstrak fenolik alami diproyeksikan tumbuh pada CAGR >7% dengan valuasi melebihi USD 3,5 miliar, sementara dari perspektif teknis, proses ekstraksi menjadi *unit operation* paling kritis (*bottleneck*) yang menentukan yield, kemurnian, dan stabilitas senyawa target. Arnold dan Gramza‐Michałowska (2023) secara eksplisit menyatakan bahwa proses ekstraksi merupakan langkah paling krusial untuk merecovery seluruh senyawa fenolik dari jaringan tanaman yang selanjutnya dapat diaplikasikan dalam berbagai produk pangan.

Kompleksitas kimiawi jaringan apel menjadi tantangan rekayasa tersendiri. Berdasarkan review tersebut, apel mengandung setidaknya tujuh kelas makronutrien dan mikronutrien: karbohidrat (terutama fruktosa, glukosa, dan sukrosa), protein, lipid, serat pangan (*dietary fiber* — pektin, selulosa, hemiselulosa), mineral (K, Ca, Mg, P), vitamin (C, E, B-kompleks), serta senyawa fenolik yang terdiri atas asam hidroksibenzoat, asam hidroksisinamat, flavanol (termasuk struktur oligomerik dan polimerik seperti proantosianidin), flavonol, dihidrokalkon (floridzin sebagai marker genus *Malus*), dan antosianin (pada kultivar berdaging merah). Keragaman struktur kimia ini mengimplikasikan bahwa satu metode ekstraksi tunggal (*one-size-fits-all*) tidak akan mampu mengoptimalkan recovery seluruh kelas senyawa secara simultan, sehingga pemilihan teknologi ekstraksi menjadi keputusan rekayasa (*engineering decision*) yang harus mempertimbangkan *trade-off* antara yield, selektivitas, biaya energi, dan dampak lingkungan.

Di sisi lain, kemajuan teknologi ekstraksi modern telah memperkenalkan supercritical fluid extraction (SFE) dengan CO₂ sebagai pelarut hijau (*green solvent*), yang diinvestigasi secara sistematis oleh Pairote Wiriyacharee, Yongyut Chalermchat, dan Thanyaporn Siriwoharn (2024) dalam studi ekstraksi minyak bee brood yang dipublikasikan di *Foods* (DOI: 10.3390/foods13162486). Meskipun matriks biologis yang diteliti berbeda (bee brood vs. jaringan buah), prinsip-prinsip rekayasa proses yang dikuantifikasi oleh Wiriyacharee *et al.* (2024) — terutama hubungan antara tekanan operasi, suhu, durasi ekstraksi, dan yield serta komposisi kimiawi produk — bersifat transferabel dan dapat diaplikasikan sebagai kerangka rekayasa untuk optimalisasi ekstraksi fenolik apel pada skala industri. Integrasi kedua literatur ini memberikan fondasi analitis yang kuat untuk memahami *state-of-the-art* teknologi ekstraksi bioaktif dalam kerangka *Industrial Engineering*.

---

## 2. Landasan Teori & Formulasi Matematis

Rekayasa proses ekstraksi senyawa bioaktif memerlukan kerangka matematis multi-disiplin yang mengintegrasikan termodinamika, fenomena transpor, dan kinetika reaksi. Berikut adalah formulasi fundamental yang relevan dengan domain paper Arnold & Gramza‐Michałowska (2023) serta Wiriyacharee *et al.* (2024).

### 2.1 Model Yield Ekstraksi

Yield ekstraksi $(Y)$ secara umum didefinisikan sebagai rasio massa senyawa terekstrak terhadap massa bahan baku awal:

$$Y = \frac{m_{extract}}{m_{raw}} \times 100\%$$

di mana $m_{extract}$ (kg) adalah massa ekstrak yang diperoleh dan $m_{raw}$ (kg) adalah massa bahan baku. Untuk ekstraksi padat-cair konvensional Soxhlet, yield dipengaruhi oleh waktu ekstraksi $t$ menurut model pseudo-first-order (Arnold & Gramza‐Michałowska, 2023):

$$Y(t) = Y_{\infty} \left(1 - e^{-k \cdot t}\right)$$

dengan $Y_{\infty}$ adalah yield kesetimbangan (%) dan $k$ adalah konstanta laju ekstraksi (menit⁻¹).

### 2.2 Kandungan Total Fenolik (TPC)

Kuantifikasi TPC mengikuti metode Folin-Ciocalteu yang dikalibrasi terhadap asam galat (GAE — *Gallic Acid Equivalents*):

$$\text{TPC} = \frac{c_{GAE} \cdot V \cdot DF}{m_{sample}}$$

di mana TPC diekspresikan dalam mg GAE/g sampel, $c_{GAE}$ adalah konsentrasi dari kurva kalibrasi (mg/mL), $V$ adalah volume ekstrak (mL), $DF$ adalah faktor pengenceran, dan $m_{sample}$ adalah massa sampel (g). Arnold & Gramza‐Michałowska (2023) melaporkan bahwa kultivar apel tertentu memiliki TPC hingga 1.000 mg GAE/100 g berat kering, tergantung pada varietas dan kondisi agroklimat.

### 2.3 Model Termodinamika Supercritical CO₂

Untuk ekstraksi superkritik seperti yang diinvestigasi Wiriyacharee *et al.* (2024), kelarutan solute dalam CO₂ superkritis dimodelkan dengan persamaan Chrastil yang menghubungkan densitas fluida $\rho$ dengan kelarutan $c^*$:

$$c^* = \rho^{k_1} \cdot \exp\left(\frac{k_2}{T} + k_3\right)$$

di mana $k_1$, $k_2$, $k_3$ adalah konstanta empiris yang bergantung pada sistem solute–pelarut, $T$ adalah suhu absolut (K), dan $\rho$ adalah densitas CO₂ (kg/m³) yang sangat bergantung pada tekanan. Densitas CO₂ pada kondisi operasi Wiriyacharee *et al.* (2024) — yaitu 180–220 bar dan 600 bar — berkisar 600–900 kg/m³, menghasilkan peningkatan kelarutan yang signifikan pada tekanan lebih tinggi.

### 2.4 Kinetika Transfer Massa pada SFE

Model Simplified Interfacial Resistance (SIR) atau Lack-Plank model untuk SFE menggambarkan yield kumulatif sebagai:

$$\frac{Y(t)}{Y_{\infty}} = 1 - \sum_{n=1}^{\infty} \frac{4}{\lambda_n^2} \exp\left(-\lambda_n^2 \cdot D_{eff} \cdot \frac{t}{r_p^2}\right)$$

di mana $D_{eff}$ adalah koefisien difusi efektif (m²/s), $r_p$ adalah radius partikel (m), dan $\lambda_n$ adalah akar dari persamaan Bessel yang merepresentasikan mode transfer. Konstanta difusi efektif secara empiris ditingkatkan oleh tekanan karena CO₂ berdensitas tinggi mengurangi viskositas internal matriks dan meningkatkan solubilisasi solute.

### 2.5 Aktivitas Antioksidan dan Kapasitas Reduksi

Aktivitas antioksidan diukur melalui metode DPPH• scavenging atau FRAP (Ferric Reducing Antioxidant Power). Kapasitas antioksidan (\%) menurut Wiriyacharee *et al.* (2024) — terutama yang dikaitkan dengan kuersetin — dihitung sebagai:

$$\text{AA\%} = \frac{A_{control} - A_{sample}}{A_{control}} \times 100\%$$

dengan $A_{control}$ dan $A_{sample}$ masing-masing adalah absorbansi kontrol dan sampel pada panjang gelombang karakteristik (517 nm untuk DPPH).

### 2.6 Indeks Kualitas Minyak (untuk Validasi Proses)

Wiriyacharee *et al.* (2024) menggunakan beberapa parameter kualitas minyak yang juga relevan untuk ekstrak apel: bilangan asam (*acid value* — AV), bilangan iodin (*iodine value* — IV), bilangan penyabunan (*saponification value* — SV), dan bilangan peroksida (*peroxide value* — PV). Hubungan empiris antara profil asam lemak dan kualitas oksidatif:

$$\text{Oxidative Stability Index (OSI)} \approx f\left(\frac{1}{PV}, \frac{IV}{SV}\right)$$

Nilai ambang batas PV < 12 meqO₂/kg yang dilaporkan Wiriyacharee *et al.* (2024) mengindikasikan bahwa kondisi SFE pada 600 bar mempertahankan kualitas oksidatif produk dalam batas aman untuk aplikasi pangan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Translasi temuan riset menjadi *Standard Operating Procedure* (SOP) industri memerlukan kerangka sistematis yang mencakup persiapan bahan baku, parameter operasi, dan kendali mutu. Diagram alir berikut disintesiskan dari protokol Arnold & Gramza‐Michałowska (2023) untuk ekstraksi fenolik apel dan Wiriyacharee *et al.* (2024) untuk SFE-CO₂.

### 3.1 Tahap Pra-Proses

1. **Seleksi kultivar dan sortasi**: Pemilihan kultivar apel berdasarkan profil fenolik target. Kultivar 'Red Delicious', 'Granny Smith', dan 'Fuji' memiliki profil fenolik dominan yang berbeda — antosianin tinggi pada kultivar berdaging merah, flavonol (kuersetin glikosida) dominan pada kultivar berdaging hijau.
2. **Pengeringan pretreatment**: Wiriyacharee *et al.* (2024) menggunakan *tray drying* sebagai metode pengeringan awal untuk mengurangi kadar air hingga <10%. Untuk jaringan apel, *freeze-drying* (liofilisasi) lebih direkomendasikan guna mencegah degradasi termal senyawa fenolik.
3. **Reduksi ukuran partikel**: Penggilingan hingga ukuran partikel $d_p$ = 0,5–2,0 mm untuk mengoptimalkan rasio area permukaan terhadap volume dan mempercepat transfer massa.

### 3.2 Ekstraksi Konvensional Soxhlet / Solvent

Mengikuti protokol Arnold & Gramza‐Michałowska (2023), ekstraksi pelarut organik dilakukan dengan parameter:

- **Pelarut**: etanol 70% (v/v), aseton 80%, atau metanol 80% — pilihan tergantung polaritas target.
- **Rasio padatan-pelarut**: 1:10 hingga 1:20 (b/v).
- **Suhu**: 40–80°C (tergantung titik didih pelarut).
- **Waktu**: 1–4 jam per siklus, 2–4 siklus.

### 3.3 Ekstraksi Supercritical CO₂ (SFE)

Berdasarkan protokol Wiriyacharee *et al.* (2024), parameter operasi SFE-CO₂ untuk aplikasi industri ekstrak bioaktif ditetapkan sebagai berikut:

- **Kisaran tekanan rendah**: $P_1$ = 180–220 bar (untuk fraksi lipid non-polar dan terpenoid).
- **Kisaran tekanan tinggi**: $P_2$ = 600 bar (untuk recovery maksimal minyak dan senyawa fenolik).
- **Suhu operasi**: $T$ = 40–60°C (mencegah degradasi termal bioaktif).
- **Durasi**: $t_1$ = 1,5 jam (pada tekanan rendah), $t_2$ = 1 jam (pada tekanan tinggi).
- **Laju alir CO₂**: 5–15 L/jam (standar industri).
- **Co-solvent** (opsional): etanol 5–10% sebagai *modifier* untuk meningkatkan recovery senyawa polar seperti flavonol.

### 3.4 Kendali Mutu dan Karakterisasi Produk

- **Spektrofot