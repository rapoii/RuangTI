# 2035 — Manajemen Air Limbah Industri: Systematic Review Tantangan, Enabler, dan Integrasi Digital Twin Era Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** A systematic review of industrial wastewater management: Evaluating challenges and enablers  
**Jurnal & Sitasi Utama:** Bikram Jit Singh, Ayon Chakraborty, Rippin Sehgal (2023). *Journal of Environmental Management*, Vol. 343. DOI: [https://doi.org/10.1016/j.jenvman.2023.119230](https://doi.org/10.1016/j.jenvman.2023.119230)  
**Sitasi Pendukung:** Florian Stadtmann, Adil Rasheed, Trond Kvamsdal (2023). *Digital Twins in Wind Energy: Emerging Technologies and Industry-Informed Future Directions*. *IEEE Access*, Vol. 11. DOI: [https://doi.org/10.1109/access.2023.3321320](https://doi.org/10.1109/access.2023.3321320)

---

## 1. Pendahuluan dan Konteks Industri

Air limbah industri (industrial wastewater) merupakan keluaran samping yang tak terhindarkan dari proses manufaktur, produksi energi, dan beragam proses industri lainnya yang menjadi tulang punggung ekonomi global. Karakteristik air limbah industri—yang mengandung padatan tersuspensi, bahan organik dengan Chemical Oxygen Demand (COD) dan Biochemical Oxygen Demand (BOD) tinggi, logam berat, pewarna sintetis, serta senyawa nitrogen dan fosfor—menjadikannya salah satu sumber pencemaran lingkungan paling signifikan apabila tidak dikelola dengan baik. Singh, Chakraborty, dan Sehgal (2023) dalam *Journal of Environmental Management* (DOI: [10.1016/j.jenvman.2023.119230](https://doi.org/10.1016/j.jenvman.2023.119230)) menyoroti bahwa kompleksitas pengelolaan air limbah industri semakin meningkat seiring diversifikasi proses industri modern, sehingga diperlukan pendekatan *systematic literature review* (SLR) untuk memetakan state-of-the-art riset secara komprehensif.

Konteks industri yang melatarbelakangi urgensi kajian ini bersifat multidimensional. Pertama, dari perspektif regulasi, banyak negara termasuk Indonesia melalui PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup telah menetapkan baku mutu effluent yang semakin ketat (BOD <50 mg/L, COD <100 mg/L, TSS <30 mg/L). Kedua, dari perspektif ekonomi, biaya kepatuhan (compliance cost) dan potensi denda lingkungan dapat mencapai 5–10% dari EBITDA perusahaan manufaktur besar. Ketiga, dari perspektif keberlanjutan, konsep *circular economy* menuntut daur ulang air (water reuse) hingga 70–95% dalam proses industri. Keempat, dari perspektif Teknik Industri, pengelolaan air limbah merupakan bagian integral dari *reverse logistics*, *green supply chain*, dan perancangan sistem produksi berkelanjutan.

Singh et al. (2023) melakukan SLR terhadap basis data Scopus dengan *initial pool* sebanyak 253 artikel, yang selanjutnya disaring menggunakan *search code* menjadi 101 artikel, lalu melalui *abstract screening* menjadi 79 artikel, dan akhirnya tersisa 66 artikel untuk *full-text review*. Temuan kunci mereka mengategorikan enabler (penggerak) dan tantangan ke dalam beberapa klaster: teknologi treatment (membran, oksidasi lanjutan, biokonversi), kebijakan regulasi, adopsi IoT dan sensor, integrasi *green chemistry*, serta kolaborasi multi-stakeholder. Namun, paper tersebut juga mengakui masih terbatasnya riset yang mengintegrasikan paradigma Digital Twin ke dalam optimasi sistem pengelolaan air limbah industri.

Di sinilah kontribusi Stadtmann, Rasheed, dan Kvamsdal (2023) dalam *IEEE Access* (DOI: [10.1109/access.2023.3321320](https://doi.org/10.1109/access.2023.3321320)) menjadi sangat relevan sebagai sitasi pendukung. Mereka memperkenalkan *Digital Twin Capability Level* (skala 0–5) yang awalnya diterapkan pada industri energi angin namun bersifat *transferable* ke berbagai sektor proses termasuk wastewater treatment plant. Modular ini akan menjembatani kesenjangan riset yang diidentifikasi Singh et al. (2023) dengan memberikan kerangka integrasi teknologi Industri 4.0 dalam pengelolaan air limbah industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Efisiensi Removal sebagai Metrik Kinerja Inti

Efektivitas Instalasi Pengolahan Air Limbah (IPAL) industri diukur melalui efisiensi removal yang didefinisikan sebagai:

$$\eta_i = \frac{C_{in,i} - C_{out,i}}{C_{in,i}} \times 100\%$$

di mana $\eta_i$ adalah efisiensi removal untuk parameter polutan ke-$i$ (BOD, COD, TSS, NH₃-N, dll.), $C_{in,i}$ adalah konsentrasi influen (mg/L), dan $C_{out,i}$ adalah konsentrasi effluent (mg/L). Efisiensi kumulatif sistem multi-tahap mengikuti:

$$\eta_{total} = 1 - \prod_{j=1}^{n}(1 - \eta_j)$$

di mana $\eta_j$ adalah efisiensi pada tahap处理 ke-$j$ (pre-treatment, primary, secondary, tertiary).

### 2.2. Neraca Massa dan Beban Pencemar

Neraca massa pada IPAL steady-state mengikuti persamaan konservasi:

$$Q_{in} \cdot C_{in} = Q_{out} \cdot C_{out} + Q_w \cdot C_w + R$$

di mana $Q$ adalah laju alir volumetrik (m³/h