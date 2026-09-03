# 2341 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Rantai Pasok Tertutup dengan Pemanfaatan Bertingkat Baterai Pensiun dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global — yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024) — menciptakan tantangan rekayasaindustri yang belum pernah terjadi sebelumnya:如何 mengelola pensiunnya baterai lithium-ion (LIB) dalam volume masif. Setiap baterai EV yang pensiun tetap memiliki kapasitas residu 70–80% dari State of Health (SoH) awalnya, sehingga представляет nilai ekonomis dan ekologis yang sangat substansial jika dialihkan ke aplikasi sekunder melalui *echelon utilization* (pemanfaatan bertingkat), atau diremanufacture menjadi sel baru. JIANG Lin & TANG Lidan (2025) dalam naskah yang diterbitkan di *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*, DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068), secara eksplisit mengkaji bagaimana strategi rantai pasok tertutup (CLSC) harus dirancang secara simultan untuk mengakomodasi tiga aliran material: produksi baterai baru, pemanfaatan bertingkat (misalnya baterai bekas EV untuk *stationary energy storage system*/SESS), dan remanufaktur daur ulang (*closed-loop recycling*).

Permasalahan ini bukan sekadar persoalan lingkungan, melainkan keputusan rekayasa ekonomi berskala triliunan rupiah. Di China saja, kapasitas pensiun baterai diproyeksikan mencapai 2,6 juta ton pada 2030. Tanpa desain CLSC yang optimal, baik *manufacturer*, *recycler*, maupun *echelon operator* akan menghadapi inefisiensi alokasi sumber daya, ketidakpastian tingkat回收 (recovery rate), serta keputusan harga yang saling kontradiktif. Lebih lanjut, Shin, Kim & Jeong (2024) — DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) — menekankan bahwa ketidakpastian permintaan回收 (*return demand uncertainty*) merupakan faktor dominan yang membuat model deterministik gagal di implementasi lapangan. Kombinasi kedua literatur ini menunjukkan urgensi pembangunan model optimisasi *robust* yang mempertimbangkan perilaku strategik para pelaku (game theory) di bawah ketidakpastian struktural. Dalam konteks Indonesia, di mana adopsi EV dipercepat melalui Permen ESDM No. 13/2020 dan target 2 juta unit EV pada 2030, transfer pengetahuan dari kedua paper ini menjadi sangat strategis untuk merancang *reverse logistics infrastructure* nasional yang berkelanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan JIANG & TANG (2025) mengadopsi arsitektur **Stackelberg game berlapis** dengan empat pelaku utama: (1) Produsen baterai baru sebagai *leader* harga, (2) Operator echelon utilization sebagai *follower* tahap pertama, (3) Pabrik remanufaktur/daur ulang sebagai *follower* tahap kedua, dan (4) Konsumen sebagai penentu回收 (return rate) $\tau$. Struktur keputusan bersifat hierarkis dan menghasilkan keseimbangan *subgame perfect Nash equilibrium* (SPNE).

### 2.1 Variabel Keputusan dan Parameter

- $p_n$ = harga jual eceran baterai baru (CNY/unit)
- $p_e$ = harga jual baterai echelon ke aplikasi sekunder (CNY/unit)
- $p_r$ = harga jual baterai remanufaktur (CNY/unit)
- $w_n, w_e, w_r$ = harga transfer internal (*wholesale price*)
- $c_n, c_e, c_r$ = biaya produksi masing-masing lini (CNY/unit)
- $\tau \in [0,1]$ = tingkat回收 (*recovery rate*) baterai pensiun
- $\alpha \in [0,1]$ = proporsi baterai pensiun yang dialokasikan ke echelon utilization
- $(1-\alpha)\tau$ = proporsi yang mengalir ke remanufaktur
- $D_i = a_i - b_i p_i + \gamma_{ij} p_j$ = fungsi permintaan linear (cross-price elasticity $\gamma_{ij}$)

### 2.2 Fungsi Permintaan

$$\begin{aligned}
D_n(p_n, p_e, p_r) &= a_n - b_n p_n + \gamma_{ne} p_e + \gamma_{nr} p_r \\
D_e(p_n, p_e) &= a_e - b_e p_e + \gamma_{en} p_n + \lambda_e \alpha \tau B \\
D_r(p_r) &= a_r - b_r p_r + \gamma_{rn} p_n + \lambda_r (1-\alpha)\tau B
\end{aligned}$$

di mana $B$ adalah total baterai pensiun kumulatif (unit), $\lambda_e, \lambda_r$ adalah parameter elastisitas penawaran bahan baku回收.

### 2.3 Fungsi Profit (Model Deterministik)

$$\pi_n = (w_n - c_n) D_n + s \cdot \alpha \tau B$$

di mana $s$ adalah subsidi pemerintah per unit baterai yang berhasil dialokasikan ke echelon (model JIANG & TANG, 2025).

$$\pi_e = (p_e - c_e - \beta c_{re}) D_e$$

dengan $\beta \in [0,1]$ adalah koefisien *reconditioning cost* dan $c_{re}$ adalah biaya daur ulang parsial.

$$\pi_r = (p_r - c_r - (1-\alpha)\tau B \cdot c_{col}) D_r$$

### 2.4 Formulasi Stackelberg Equilibrium

Produsen (leader) memaksimalkan:

$$\max_{p_n, w_n, \alpha} \pi_n(p_n, w_n, \alpha)$$

Operator echelon dan remanufaktur (followers) memaksimalkan masing-masing $\pi_e$ dan $\pi_r$ secara simultan (*Bertrand-Nash*). Solusi melalui *backward induction*:

$$\frac{\partial \pi_e}{\partial p_e} = 0 \Rightarrow p_e^* = \frac{a_e + \gamma_{en} p_n + \lambda_e \alpha \tau B + b_e(c_e + \beta c_{re})}{2 b_e}$$

### 2.5 Ekstensi Robust (Shin, Kim & Jeong, 2024)

Untuk mengatasi ketidakpastian permintaan回收, diperkenalkan *uncertainty set* box:

$$\mathcal{U} = \left\{ \tilde{D} : |\tilde{D}_i - \bar{D}_i| \le \hat{D}_i, \; i = \{e, r\} \right\}$$

Formulasi robust counterpart dari $\pi_e$:

$$\min_{\tilde{D}_e \in \mathcal{U}} \pi_e \Rightarrow \max_{p_e} \min_{\tilde{D}_e \in \mathcal{U}} (p_e - c_e - \beta c_{re}) \tilde{D}_e$$

yang menghasilkan harga robust optimal:

$$p_e^{Robust} = \frac{\bar{a}_e + \gamma_{en} p_n + \lambda_e \alpha \tau B + \hat{a}_e + b_e(c_e + \beta c_{re})}{2 b_e}$$

Perbedaan harga robust vs deterministik adalah **protection premium** $\hat{a}_e / (2b_e)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model JIANG & TANG (2025) mengikuti SOP 7-tahap berikut:

**Tahap 1 — Klasifikasi Baterai Pensiun.** Setiap baterai yang kembali diuji SoH menggunakan protokol *Hybrid Pulse Power Characterization* (HPPC) sesuai standar IEC 62933-3-1. Baterai diklasifikasikan: Grade A (SoH ≥ 80%, layak echelon), Grade B (60% ≤ SoH < 80%, layak remanufaktur), Grade C (SoH < 60%, daur ulang material).

**Tahap 2 — Akuisisi Data Pasar.** Operator echelon dan remanufaktur menyediakan fungsi biaya riil ($c_e, c_r$) dan elastisitas permintaan. Produsen baterai baru menyediakan $c_n$ dan $w_n$.

**Tahap 3 — Formulasi Model.** Bangun fungsi $\pi_n, \pi_e, \pi_r$ sesuai persamaan di Bagian 2.

**Tahap 4 — Optimisasi Backward Induction.** Selesaikan *followers' problem* lebih dulu untuk mendapatkan $p_e^*, p_r^*$ sebagai fungsi dari variabel leader, kemudian selesaikan *leader's problem* menggunakan SQP (*Sequential Quadratic Programming*).

**Tahap 5 — Robust Stress Test.** Gunakan uncertainty set dari Shin et al. (2024) untuk memvalidasi bahwa equilibrium tetap layak saat terjadi guncangan permintaan回收 $\pm 20\%$.

**Tahap 6 — Implementasi Kontrak.** Produsen menandatangani *wholesale price contract* $(w_n, w_e, w_r)$ dengan operator dan recycler, disertai klausul *buy-back guarantee* untuk stabilisasi $\alpha$.

**Tahap 7 — Monitoring KPI.** Lacak indikator: *recovery rate* $\tau^{aktual}$ vs target, *echelon yield*, profit margin tiap stakeholder, dan *carbon abatement* (ton CO₂/unit).

```
[Diagram Alir SOP — Representasi Teks]
Konsumen → Pengumpulan → Sortasi SoH → [Grade A] → Echelon (α·τ·B)
                            → [Grade B] → Remanufaktur ((1-α)·τ·B)
                            → [Grade C] → Daur Ulang Material
Produsen Baru ← Pasar EV ↔ Pasar SESS ↔ Pasar Baterai Refurbished
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Produsen baterai baru di China dengan kapasitas pensiun baterai kumulatif $B = 500.000$ unit/tahun.

**Parameter industri (estimasi realistis dari JIANG & TANG, 2025, Appendix):**

| Parameter | Nilai | Unit |
|---|---|---|
| $c_n$ | 800 | CNY/unit |
| $c_e$ | 350 | CNY/unit |
| $c_r$ | 450 | CNY/unit |
| $c_{re}$ | 200 | CNY/unit |
| $\beta$ | 0,4 | — |
| $s$ (subsidi) | 150 | CNY/unit |
| $\tau$ | 0,45 | — |
| $b_e$ | 120 | unit/CNY |
| $\lambda_e$ | 0,6 | unit/unit |
| $a_e$ | 95.000 | unit |
| $\gamma_{en}$ | 30 | unit/CNY |
| $p_n$ | 1.200 | CNY/unit |

**Langkah 1 — Hitung harga optimal operator echelon:**

$$p_e^* = \frac{95.000 + (30)(1.200) + (0,6)(\alpha)(0,45)(500.000) + 120(350 + 0,4 \cdot 200)}{2 \cdot 120}$$

Untuk $\alpha = 0,5$:

$$p_e^* = \frac{95.000 + 36.000 + 67.500 + 51.600}{240} = \frac{250.100}{240} = 1.042,08 \text{ CNY/unit}$$

**Langkah 2 — Hitung permintaan echelon:**

$$D_e^* = 95.000 - 120(1.042,08) + 30(1.200) + 0,6(0,5)(0,45)(500.000)$$
$$= 95.000 - 125.050 + 36.000 + 67.500 = 73.450 \text{ unit}$$

**Langkah 3 — Profit echelon operator:**

$$\pi_e = (1.042,08 - 350 - 80)(73.450) = 612,08 \times 73.450 = 44.957.276 \text{ CNY/tahun}$$

**Langkah 4 — Profit produsen (komponen echelon):**

Komponen subsidi: $s \cdot \alpha \cdot \tau \cdot B = 150 \times 0,5 \times 0,45 \times 500.000 = 16.875.000$ CNY

**Langkah 5 — Robust premium (mengikuti Shin et al., 2024):**

Misalkan ketidakpastian $\hat{a}_e = 15.000$ unit, maka:

$$p_e^{Robust} = \frac{95.000 + 36.000 + 67.500 + 15.000 + 51.600}{240} = 1.104,58 \text{ CNY/unit}$$

Robust premium = $\Delta p_e = 62,50$ CNY/unit atau **6,0%** di atas harga deterministik.

**Interpretasi Manajerial:**
1. Operator echelon bersedia membayar premium回收 hingga 1.042 CNY/unit karena margin kontribusi per unit ($612$ CNY) masih positif dan volume回收 73.450 unit menjamin skala ekonomis.
2. Subsidi pemerintah $s = 150$ CNY/unit meningkatkan total kesejahteraan (*social welfare*) sebesar 16,88 juta CNY/tahun.
3. Robust premium 6% adalah *h.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
