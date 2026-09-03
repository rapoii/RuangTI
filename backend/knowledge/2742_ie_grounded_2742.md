# 2742 — Model Resiliensi untuk Logistik Rantai Dingin Produk Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik rantai dingin (*cold chain logistics*) merupakan subsistem kritis dalam rantai pasok produk termolabil—mulai dari vaksin, produk biofarmasi, makanan segar, hingga produk hortikultura—yang menuntut pengendalian suhu presisi pada rentang 2–8 °C untuk menjaga kemanjuran, stabilitas, dan keamanan produk sepanjang distribusi. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengajukan model resiliensi yang secara eksplisit mengkuantifikasi kemampuan sistem rantai dingin untuk menahan (*absorb*), beradaptasi (*adapt*), dan pulih (*recover*) dari gangguan operasional, terutama saat terjadi ekskursi suhu (*temperature excursion*) yang tidak terdeteksi secara real-time. Kegagalan mempertahankan integritas termal tidak hanya menimbulkan kerugian ekonomi langsung berupa pemusnahan批次 produk, namun juga risiko sosial yang sangat serius pada konteks distribusi vaksin—di mana degradasi potensi antigenik yang tidak terdeteksi dapat menurunkan efikasi program imunisasi nasional.

Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan secara empiris permasalahan operasional yang sangat relevan di UPTD Farmasi Dinas Kesehatan Kabupaten Siak, Riau. Mereka menemukan bahwa *cold chain box* yang digunakan sebagai media penyimpanan vaksin belum dilengkapi sistem pemantauan suhu *real-time*, tidak memiliki mekanisme peringatan otomatis (*alert system*) saat suhu menyimpang dari ambang batas (*threshold*), serta masih mengandalkan pencatatan manual pada *log sheet* setiap 2 jam oleh apoteker. Kombinasi kondisi tersebut—yakni visibilitas data yang rendah, *sampling rate* yang terlalu jarang, dan *lead time* respons yang panjang—menciptakan *blind spot* operasional yang menjadi kontributor utama kegagalan resiliensi dalam model Khurshid dan Siddiqui (2024). Dalam konteks nasional, permasalahan ini diperparah oleh distribusi geografis Indonesia yang bersifat kepulauan, sehingga *last-mile delivery* untuk vaksin ke puskesmas terpencil memerlukan waktu运输 hingga 24–72 jam dengan variasi suhu lingkungan tropis 28–34 °C, yang secara langsung meningkatkan peluang ekskursi termal.

Secara ekonomi, World Health Organization (WHO) memperkirakan bahwa sekitar 25–50% produk farmasi termolabil di rantai pasok global mengalami degradasi mutu akibat pelanggaran protokol suhu, dengan estimasi kerugian finansial tahunan mencapai USD 35 miliar. Di Indonesia, dengan lebih dari 320 juta dosis vaksin program imunisasi rutin yang didistribusikan setiap tahunnya melalui lebih dari 10.000 puskesmas, setiap 1% kerugian akibat ekskursi suhu berpotensi menimbulkan pemborosan anggaran negara lebih dari Rp 50 miliar. Urgensi pengembangan model resiliensi yang terukur secara kuantitatif—seperti yang ditawarkan oleh Khurshid dan Siddiqui (2024)—menjadi imperatif strategis bagi rekayasawan industri, *supply chain manager*, dan regulator untuk meminimalisasi risiko sosial-ekonomi tersebut. Lebih jauh, integrasi teknologi *Internet of Things* (IoT) dengan sensor suhu digital seperti DS18B20 yang diusulkan Putra dkk. (2024) memberikan *enabling technology* untuk mewujudkan *continuous monitoring* sebagai prasyarat implementasi model resiliensi tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi rantai dingin yang dikembangkan oleh Khurshid dan Siddiqui (2024) berpijak pada tiga pilar teoretis: (1) *absorptive capacity* untuk menahan guncangan suhu, (2) *adaptive capacity* untuk menyesuaikan parameter operasional secara dinamis, dan (3) *restorative capacity* untuk memulihkan kondisi produk ke zona aman. Ketiga kapasitas ini diagregasikan ke dalam sebuah *Resilience Index* yang didefinisikan secara matematis sebagai:

$$R(t) = \frac{1}{T_0} \int_{0}^{T_0} \left[ 1 - \frac{|\theta(t) - \theta^*|}{\Delta\theta_{\max}} \right] dt$$

di mana $\theta(t)$ adalah suhu aktual produk pada waktu $t$, $\theta^*$ adalah suhu set-point (umumnya 5 °C untuk mayoritas vaksin pada rentang 2–8 °C), $\Delta\theta_{\max}$ adalah toleransi ekskursi suhu maksimum (6 °C untuk vaksin standar), dan $T_0$ adalah horizon waktu observasi. Nilai $R(t) \in [0,1]$, dengan $R(t)=1$ menandakan resiliensi sempurna dan $R(t) < 0{,}85$ menandakan sistem telah memasuki zona kritis.

Degradasi mutu produk termolabil dimodelkan menggunakan persamaan kinetika Arrhenius yang telah diadopsi oleh WHO PQS (Performance, Quality and Safety) specifications:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R_g \cdot T}\right)$$

dengan $k(T)$ adalah laju degradasi pada suhu absolut $T$ (dalam Kelvin), $A$ adalah faktor frekuensi pre-eksponensial, $E_a$ adalah energi aktivasi reaksi (untuk mayoritas vaksin berkisar 60–100 kJ/mol), dan $R_g$ adalah konstanta gas universal (8,314 J/(mol·K)). Fraksi potensi yang tersisa setelah eksposur suhu pada durasi $t$ diberikan oleh:

$$P(t) = P_0 \cdot \exp\left(-k(T) \cdot t\right)$$

di mana $P_0$ adalah potensi awal (umumnya 100%). Ambang batas diskualifikasi adalah $P(t) \leq 0{,}90$, yang berarti produk tidak boleh lagi digunakan.

Untuk mengukur kemampuan pemulihan sistem, Khurshid dan Siddiqui (2024) mendefinisikan *Recovery Time Objective* (RTO) dan *Recovery Point Objective* (RPO) yang diadaptasi dari kerangka *Business Continuity Planning*:

$$\text{MTBF} = \frac{1}{\lambda}, \quad \text{MTTR} = \frac{1}{\mu}, \quad A_s = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

di mana $\text{MTBF}$ adalah *Mean Time Between Failures*, $\lambda$ adalah laju kegagalan (per jam), $\text{MTTR}$ adalah *Mean Time To Repair*, $\mu$ adalah laju perbaikan, dan $A_s$ adalah ketersediaan sistem (*system availability*). Untuk sistem *cold chain* yang memenuhi standar WHO PQS E001, spesifikasi yang diminta adalah $A_s \geq 0{,}995$, atau setara dengan waktu downtime tidak melebihi 43,8 jam per tahun.

Pemodelan probabilistik transisi status suhu menggunakan rantai Markov dengan empat keadaan (*state space*) $\mathcal{S} = \{S_0, S_1, S_2, S_3\}$, di mana $S_0$ adalah kondisi normal ($\theta \in [2,8]\,°\text{C}$), $S_1$ adalah peringatan dini ($\theta \in (8,10]\,°\text{C}$), $S_2$ adalah ekskursi kritis ($\theta \in (10,15]\,°\text{C}$), dan $S_3$ adalah zona diskualifikasi ($\theta > 15\,°\text{C}$ atau $\theta < 2\,°\text{C}$). Matriks transisi $P$ berdimensi $4 \times 4$ dibangun dari data empiris kegagalan *cold chain box*:

$$P = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}, \quad \sum_{j} p_{ij} = 1 \;\;\forall i$$

Probabilitas keadaan stasioner $\pi = (\pi_0, \pi_1, \pi_2, \pi_3)$ dihitung sebagai eigenvector dari $P^T$ yang berkaitan dengan eigenvalue 1. Ekspektasi biaya ekskursi per unit waktu menjadi:

$$\mathbb{E}[C_{\text{exc}}] = \pi_2 \cdot C_{\text{warning}} + \pi_3 \cdot C_{\text{disqual}}$$

dengan $C_{\text{disqual}}$ merepresentasikan biaya penggantian批次 vaksin yang rusak (untuk konteks Indonesia sekitar Rp 12–18 juta per kotak dingin berisi 200–400 vial).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi Khurshid dan Siddiqui (2024) di industri memerlukan kerangka SOP berlapis yang mengintegrasikan arsitektur IoT seperti yang didemonstrasikan oleh Putra dkk. (2024). Tahapan metodologisnya adalah sebagai berikut:

**Tahap 1 – Pemetaan Proses (Process Mapping).** Aktivitas ini mencakup pembuatan *value stream mapping* (VSM) untuk seluruh rantai dingin, mulai dari penerimaan di *primary distributor*, penyimpanan di UPTD Farmasi, transportasi ke puskesmas, hingga titik imunisasi. Setiap *node* diidentifikasi berdasarkan parameter kritis: kapasitas termal wadah, *response time* sensor, dan *recovery procedure*.

**Tahap 2 – Instrumentasi & Jaringan Sensor.** Putra dkk. (2024) mengusulkan penggunaan sensor DS18B20 sebagai *primary transducer*, yang memiliki akurasi $\pm 0{,}5\,°\text{C}$ pada rentang $-10\,°\text{C}$ hingga $+85\,°\text{C}$, resolusi 9–12 bit (setara $0{,}0625\,°\text{C}$), dan protokol komunikasi *1-Wire* yang meminimalkan kebutuhan kabel. Konfigurasi jaringan menggunakan topologi *multi-drop* dengan kapasitas hingga 100 sensor per *bus*, memungkinkan penempatan beberapa probe pada lokasi strategis (misalnya: dekat es pack, di tengah *box*, di dinding luar). Mikrokontroler ESP32 dipilih sebagai *gateway* dengan konektivitas Wi-Fi/GSM untuk transmisi data ke *cloud server*.

**Tahap 3 – Akuisisi & Transmisi Data.** Interval sampling ditetapkan pada $\Delta t = 30$ detik (signifikan lebih baik dari pencatatan manual每 2 jam yang digunakan di UPTD Farmasi Siak, yang setara dengan *sampling rate* 720× lebih rendah). Data ditransmisikan menggunakan protokol MQTT dengan *payload* JSON yang memuat timestamp, ID sensor, pembacaan suhu, dan status baterai. *Redundancy* dicapai melalui *store-and-forward* lokal pada kartu SD untuk antisipasi *connectivity loss*.

**Tahap 4 – Logika Alarm & Decision Support.** Aturan ambang batas dikodekan dalam *fuzzy inference system*:

$$\mu_{\text{warning}}(\theta) = \begin{cases} 0, & \theta \leq 8 \\ \frac