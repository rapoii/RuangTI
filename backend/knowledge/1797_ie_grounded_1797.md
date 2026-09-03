# 1797 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Power yang Sudah Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*, *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global telah menciptakan tantangan rekayasa rantai pasok baru yang sangat krusial di abad ke-21. Proyeksi BloombergNEF (2023) menunjukkan bahwa lebih dari 145 GWh baterai lithium-ion akan pensiun (retired) secara kumulatif pada akhir dekade ini, dengan China sebagai episentrum manufaktur dan penggunaan EV. Baterai-baterai ini, meskipun tidak lagi layak untuk aplikasi otomotif (kapasitas di bawah 70–80% State of Health/SoH), masih menyimpan nilai ekonomi dan lingkungan yang substansial jika dikelola melalui strategi *closed-loop supply chain* (CLSC) yang tepat. JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menegaskan dalam makalah ICLSE 2024 mereka bahwa baterai pensiun tidak boleh dipandang sebagai limbah tetapi sebagai *urban mine*—sumber daya strategis yang memerlukan keputusan jaringan kompleks antara *echelon utilization* (pemanfaatan bertingkat pada aplikasi sekunder seperti penyimpanan energi stasioner, lampu jalan surya, atau *backup* telekomunikasi) dan *recycling remanufacturing* (daur ulang material menjadi *black mass* dan katoda baru).

Urgensi penelitian ini diperkuat oleh regulasi ketat seperti EU Battery Regulation 2023/1542 yang mewajibkan tingkat daur ulang 65% untuk baterai lithium-ion pada tahun 2025, naik menjadi 80% pada 2030. Dari perspektif *Industrial Engineering*, permasalahan ini bersifat *multi-echelon*, *multi-product*, dan *multi-modal* karena menyangkut keputusan fasilitas (*facility location*), alokasi kapasitas (*capacity allocation*), perutean logistik balik (*reverse logistics routing*), serta penentuan *split fraction* antara jalur echelon dan recycling. Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi perspektif ini dengan model CLSC *robust* yang mengintegrasikan sistem manajemen pengembalian (*return management system*) di bawah ketidakpastian permintaan pasar sekunder, sebuah pendekatan yang sangat relevan mengingat volatilitas harga *second-life battery* (Li et al., 2023). Secara ekonomi, baterai echelon memiliki nilai jual 30–50% dari baterai baru, sementara material daur ulang (lithium, kobalt, nikel) menghemat biaya produksi katoda hingga 40%—sehingga keputusan alokasi CLSC menjadi sangat menentukan profitabilitas dan *circular economy performance* perusahaan.

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai pensiun yang dikembangkan JIANG & TANG (2025) berbasis pada *Mixed-Integer Linear Programming* (MILP) dengan struktur jaringan berikut:

**Himpunan (Sets):**
- $I = \{1, 2, \dots, m\}$: pusat pengumpulan baterai pensiun (*collection centers*)
- $J = \{1, 2, \dots, n\}$: fasilitas *echelon utilization* (uji-sortir-alokasi ulang)
- $K = \{1, 2, \dots, p\}$: fasilitas daur ulang (*recycling plants*)
- $L = \{1, 2, \dots, q\}$: fasilitas *remanufacturing*
- $D = \{1, 2, \dots, r\}$: titik permintaan pasar sekunder

**Parameter:**
- $Q_i$: kapasitas pengumpulan di pusat $i$ (unit baterai/tahun)
- $C_j$: kapasitas *echelon* di fasilitas $j$
- $R_k$: kapasitas daur ulang di fasilitas $k$
- $c_{ij}^{tra}$: biaya transportasi per unit dari $i$ ke $j$
- $c_{ik}^{rec}$: biaya transportasi per unit dari $i$ ke $k$
- $\alpha$: proporsi baterai yang lolos uji SoH untuk *echelon* ($0 \le \alpha \le 1$)
- $\beta$: *recovery rate* material dari proses daur ulang
- $\gamma$: tingkat keberhasilan remanufaktur
- $p_j^{echo}$: harga jual baterai *echelon*
- $p_k^{mat}$: harga jual material daur ulang (black mass)
- $f_j$, $f_k$: biaya tetap pembukaan fasilitas

**Variabel Keputusan:**
- $x_{ij} \ge 0$: jumlah baterai yang dialokasikan dari $i$ ke $j$ (jalur echelon)
- $x_{ik} \ge 0$: jumlah baterai yang dialokasikan dari $i$ ke $k$ (jalur daur ulang)
- $y_j \in \{0,1\}$: keputusan pembukaan fasilitas echelon
- $z_k \in \{0,1\}$: keputusan pembukaan fasilitas daur ulang

**Fungsi Objektif (maksimisasi profit):**

$$\max \Pi = \sum_{j \in J} p_j^{echo} \cdot \alpha \sum_{i \in I} x_{ij} + \sum_{k \in K} p_k^{mat} \cdot \beta \sum_{i \in I} x_{ik} - \sum_{j \in J} f_j y_j - \sum_{k \in K} f_k z_k - \sum_{i \in I}\sum_{j \in J} c_{ij}^{tra} x_{ij} - \sum_{i \in I}\sum_{k \in K} c_{ik}^{rec} x_{ik}$$

**Kendala (Constraints):**

1. **Keseimbangan aliran di pusat pengumpulan:**
$$\sum_{j \in J} x_{ij} + \sum_{k \in K} x_{ik} \le Q_i, \quad \forall i \in I$$

2. **Kendala kapasitas fasilitas echelon:**
$$\sum_{i \in I} x_{ij} \le C_j \cdot y_j, \quad \forall j \in J$$

3. **Kendala kapasitas fasilitas daur ulang:**
$$\sum_{i \in I} x_{ik} \le R_k \cdot z_k, \quad \forall k \in K$$

4. **Kendala permintaan pasar sekunder:**
$$\alpha \sum_{i \in I} x_{ij} \ge D_d^{echo}, \quad \forall j \in J$$

5. **Kendala non-negativitas dan integritas:**
$$x_{ij}, x_{ik} \ge 0; \quad y_j, z_k \in \{0,1\}$$

JIANG & TANG (2025) selanjutnya menyempurnakan model ini dengan *chance-constrained programming* untuk mengelola ketidakpastian SoH baterai masuk, sementara Shin et al. (2024) menambahkan *box uncertainty set* $\mathcal{U} = \{\tilde{D} : D_d^{min} \le \tilde{D}_d \le D_d^{max}\}$ sehingga formulasi robust-nya menjadi:

$$\max_{x,y} \min_{\tilde{D} \in \mathcal{U}} \Pi(x, \tilde{D})$$

Pendekatan ini memastikan solusi tetap layak (*feasible*) pada skenario permintaan terburuk, yang merupakan penyempurnaan penting atas model deterministik konvensional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri CLSC baterai pensiun mengikuti kerangka SOP berlapis yang dapat dipetakan ke dalam diagram alir proses sebagai berikut:

**Tahap 1 — Pengumpulan & Logistik Balik (Reverse Logistics).** Pusat pengumpulan $i$ menerima baterai pensiun dari dealer, *end-of-life vehicle* (ELV) center, dan *second-life aggregator*. Setiap unit diberi *Battery Passport* sesuai standar EU 2023/1542 yang mencakup SoH awal, riwayat siklus (cycle count), dan komposisi kimia (NMC, LFP, NCA).

**Tahap 2 — Pengujian, Sortir & Klasifikasi.** Baterai menjalani tiga uji kritis: (a) **Capacity Test** dengan Arbin BT-5HC atau BaSyTec CTS-LAB untuk verifikasi kapasitas残存; (b) **Internal Resistance Test** (skrip IEC 62660-1); (c) **Thermal Imaging & Ultrasonic Scanning** untuk mendeteksi *swelling*, *dendrite*, atau *internal short*. Hasil uji menghasilkan skor SoH, lalu baterai diklasifikasikan:
- $\text{SoH} \ge 80\%$: lolos untuk *echelon utilization* langsung
- $60\% \le \text{SoH}