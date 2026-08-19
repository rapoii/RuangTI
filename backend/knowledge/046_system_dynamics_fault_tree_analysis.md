# Modul Riset Ilmiah: System Dynamics (Dinamika Sistem) & Fault Tree Analysis (FTA)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Forrester, J. W. (1961). *Industrial Dynamics*. MIT Press. (Foundational SD).
- Yazdi, M., Mohammadpour, J., & Li, H. (2023). *Fault tree analysis improvements: A bibliometric analysis and literature review*. Quality and Reliability Engineering International, Wiley. DOI: [10.1002/qre.3271](https://doi.org/10.1002/qre.3271).
- Bafandegan Emroozi, V., Kazemi, M., & Pooya, A. (2025). *Dynamic modeling of human error in industrial maintenance through structural analysis and system dynamics*. Risk Analysis, Wiley.
- Contreras, N. (2024). *Pharmaceutical Inventory Management Using Industry 4.0 Technologies: A System Dynamics Approach*. IEOM Conference.
- Sari, A. R., & Sutopo, W. (2023). *The Analysis of Product Quality Improvement Using FMEA and FTA Method*. IEOM Society.

---

## 1. System Dynamics (Dinamika Sistem)
Dikembangkan oleh Jay W. Forrester, System Dynamics (SD) adalah pendekatan pemodelan matematika komputer untuk membingkai, memahami, dan mendiskusikan isu dan masalah yang kompleks. SD didasarkan pada umpan balik (feedback) dan penundaan waktu (time delays) yang memengaruhi perilaku seluruh sistem.

### Komponen Utama Model SD:
1. **Causal Loop Diagram (CLD):** Pemetaan hubungan sebab-akibat antar variabel.
   - **Balancing Loop (B):** Putaran umpan balik negatif yang mencari tujuan atau keseimbangan (misal: tingkat persediaan vs laju produksi).
   - **Reinforcing Loop (R):** Putaran umpan balik positif yang mendorong pertumbuhan atau penurunan eksponensial (misal: word of mouth penjualan).
2. **Stock and Flow Diagram (SFD):** Representasi kuantitatif dari CLD.
   - **Stocks ($S$):** Akumulasi material, informasi, atau status (Integrator). Disimbolkan dengan persegi panjang.
   - **Flows ($F$):** Laju perubahan (*rate of change*) yang menambah atau mengurangi stock. Disimbolkan dengan katup/valve.

### Persamaan Matematis Dasar (Integral Calculus):
$$ \text{Stock}(t) = \text{Stock}(t_0) + \int_{t_0}^{t} (\text{Inflow}(s) - \text{Outflow}(s)) ds $$
Setiap variabel flow biasanya merupakan fungsi dari stock dan parameter konstanta:
$$ \text{Flow}(t) = f(\text{Stock}(t), \text{Parameters}) $$

### Aplikasi SD dalam Teknik Industri:
- Model *Bullwhip Effect* dalam rantai pasok.
- Difusi inovasi teknologi baru di pasar.
- Manajemen siklus hidup proyek (Project Dynamics).

---

## 2. Fault Tree Analysis (FTA)
FTA adalah metode deduktif top-down yang digunakan dalam rekayasa keandalan dan keselamatan untuk mengeksplorasi penyebab terjadinya kejadian tak diinginkan (Top Event) di level sistem.

### Simbol Gerbang Logika (Logic Gates):
- **OR Gate:** Output terjadi jika *minimal satu* dari event input terjadi.
  $$ P(\text{OR}) = 1 - \prod_{i=1}^{n} (1 - P(E_i)) $$
  *(Jika probabilitas kecil, sering diaproksimasi dengan $P \approx \sum P(E_i)$)*
- **AND Gate:** Output terjadi hanya jika *semua* event input terjadi.
  $$ P(\text{AND}) = \prod_{i=1}^{n} P(E_i) $$

### Langkah-langkah Implementasi FTA:
1. **Define the Top Event:** Tentukan kegagalan sistem yang spesifik (contoh: Motor Konveyor Berhenti).
2. **Understand the System:** Pahami batasan dan cara kerja komponen.
3. **Construct the Fault Tree:** Gunakan gerbang AND/OR dari Top Event turun ke Basic Events.
4. **Evaluate the Fault Tree:**
   - *Kualitatif:* Mencari **Minimal Cut Sets (MCS)**, yaitu kombinasi terkecil dari *basic events* yang, jika semuanya terjadi bersamaan, akan menyebabkan Top Event. Semakin sedikit elemen dalam MCS, semakin rentan sistem tersebut (Single Point of Failure).
   - *Kuantitatif:* Menghitung probabilitas Top Event berdasarkan probabilitas kerusakan *basic events*.

### Integrasi dengan FMEA (Kombinasi 2023-2025):
FMEA (Induktif/Bottom-Up) sering digabungkan dengan FTA (Deduktif/Top-Down) dalam kerangka *Maintenance 4.0*. FMEA mengidentifikasi komponen yang rentan, dan FTA membuktikan bagaimana kegagalan komponen tersebut bereskalasi hingga meruntuhkan sistem utama, seringkali disimulasikan secara dinamis (*Dynamic FTA*).
