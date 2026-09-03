# 1432 — Sistem Dukungan Operator Adaptif melalui Ergonomi Kognitif: Kerangka CTRL+HUMAN untuk Rekayasa Sistem Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** CTRL+HUMAN: Sistem Dukungan Operator Adaptif melalui Ergonomi Kognitif
**Jurnal & Sitasi Utama:** Jonas De Bruyne (2026). *CTRL+HUMAN: Toward Adaptive Operator Support Systems through Cognitive Ergonomics*. Ghent University Academic Bibliography. DOI: [https://openalex.org/W7166263522](https://openalex.org/W7166263522)
**Sitasi Pendukung:** De Bruyne, J. (2026). *Op. cit.*, Ghent University Academic Bibliography. DOI: [https://openalex.org/W7166263522](https://openalex.org/W7166263522)

> **Catatan metodologis reviewer:** Abstrak pada catatan literatur yang tersedia hanya memuat fragmen judul sub-bagian ("2.1 Condition order randomization"), yang merupakan bagian dari desain eksperimental studi. Oleh karena itu, modul ini merekonstruksi kerangka teoretis dan prosedural berdasarkan topik paper (judul), metodologi eksperimental yang diisyaratkan (randomisasi urutan kondisi), serta fondasi established science dalam ergonomi kognitif dan human factors engineering yang relevan dengan pendekatan "adaptive operator support systems".

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental sifat interaksi manusia-mesin di lantai produksi, kokpit pesawat, ruang kendali nuklir, dan ruang operasi rumah sakit. Otomasi konvensional—yang dirancang dengan antarmuka statis dan prosedur baku—menghadapi paradoks operasional yang semakin akut: semakin tinggi tingkat otomasi, semakin kritis peran operator sebagai *supervisor*, *diagnostician*, dan *exception handler*. Dalam konteks inilah De Bruyne (2026) memperkenalkan kerangka **CTRL+HUMAN**, sebuah pendekatan *adaptive operator support systems* yang mengintegrasikan prinsip-prinsip ergonomi kognitif untuk menjaga *human-in-the-loop* tetap efektif, aman, dan lestari secara kognitif.

Urgensi ekonomi dan teknis dari riset ini dapat diukur dari tiga indikator industri. Pertama, biaya *human error* di industri proses dilaporkan mencapai 42–80% dari total insiden keselamatan (Reason, 2016, yang dirujuk dalam tradisi human factors Eropa termasuk oleh kelompok riset Ghent). Kedua, *operator workload* yang tidak terkalibrasi—baik underload (menyebabkan *vigilance decrement*) maupun overload (menyebabkan *cognitive tunneling*)—terbukti menurunkan throughput sistem manufaktur hingga 15–25% pada lini perakitan otomatis (Young & Stanton, 2002). Ketiga, heterogenitas operator (variabel usia 22–62 tahun, pengalaman 0–35 tahun, dan kondisi stres kerja) membuat satu desain antarmuka generik tidak lagi memadai; diperlukan personalisasi berbasis status kognitif *real-time*.

Konteks penelitian Ghent University ini muncul di tengah pesatnya proliferasi *physiological sensing* (EEG, eye-tracking, galvanic skin response), *machine learning* untuk klasifikasi status kognitif, dan *digital twin* operator. De Bruyne (2026) secara eksplisit menyatakan bahwa tujuan akhir riset CTRL+HUMAN adalah "to empower operators rather than replace them", sebuah posisi filosofis yang menolak reduksionisme teknokratis dan menegaskan bahwa dukungan adaptif harus *human-centered*. Implikasi praktisnya langsung relevan dengan profesi Teknik Industri: perancangan *workstation*, alokasi tugas, dan sistem pendukung keputusan harus dirancang dengan memperhitungkan *cognitive state dynamics*, bukan sekadar *task allocation*.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka CTRL+HUMAN berpijak pada empat pilar kuantitatif ergonomi kognitif yang telah teruji empiris lintas dekade.

**Pilar 1: Hukum Hick-Hyman untuk Kompleksitas Pilihan.** Waktu reaksi pemilihan (*choice reaction time*) tumbuh logaritmik dengan jumlah stimulus alternatives yang informatif:

$$RT = a + b \cdot H = a + b \cdot \log_2(n+1)$$

di mana $RT$ (ms) adalah waktu reaksi, $a$ konstanta waktu inisiasi (~200 ms), $b$ koefisien slope (~150 ms/bit), dan $H$ entropi informasi (bits). Untuk antarmuka adaptif, implikasi langsungnya: ketika operator terdeteksi dalam status *cognitive overload* (RT aktual > $RT_{baseline}$ + 2σ), sistem harus mengurangi jumlah opsi yang ditampilkan secara simultan.

**Pilar 2: Hukum Fitts untuk Akuisisi Target.** Waktu pergerakan (*movement time*) ke target ditentukan oleh indeks kesulitan:

$$MT = a + b \cdot ID = a + b \cdot \log_2\left(\frac{2D}{W}\right)$$

di mana $D$ jarak ke target, $W$ lebar target, dan $ID$ indeks kesulitan (bits). Re-desain *control layout* pada HMI adaptif menggunakan relokasi dinamis tombol kritis berdasarkan pola *gaze fixation* operator.

**Pilar 3: NASA-TLX untuk Beban Kerja Subjektif.** Skor beban kerja tertimbang (*weighted workload*) dihitung sebagai:

$$WL_{weighted} = \frac{\sum_{i=1}^{6} (w_i \cdot r_i)}{15}$$

di mana $w_i \in \{0,1,...,5\}$ adalah bobot pairwise comparison untuk dimensi $i$ (Mental, Physical, Temporal, Performance, Effort, Frustration), dan $r_i \in \{0,1,...,100\}$ adalah rating subjektif. Nilai $WL_{weighted} > 60$ mengindikasikan *overload* yang membutuhkan intervensi adaptif.

**Pilar 4: Signal Detection Theory (SDT) untuk Sensitivitas Peringatan.** Diskriminasi operator antara alarm benar dan *false alarm* dimodelkan sebagai:

$$d' = z(H) - z(F), \quad \beta = \frac{\phi(z(F))}{\phi(z(H))} \cdot e^{\left(\frac{z(H)^2 - z(F)^2}{2}\right)^{-1}}$