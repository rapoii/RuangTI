# 1889 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Hybrid Stochastic Optimization untuk Lot Sizing & Scheduling
**Sitasi Utama:** Forel, A., & Grunow, M. (2023). *Production and Operations Management*. DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)
**Sitasi Pendukung:** Literatur klasik Wagner & Whitin (1958); Zipkin (2000); Birge & Louveaux (2011); Martínez-Jaramillo *et al.* (2021) — disiplin akademik *lot sizing* dengan ketidakpastian permintaan.

> **Catatan Verifikasi Sitasi:** Metadata rujukan pertama ("*Cuestiones de fisioterapia*", DOI 10.48047/cu/54/02/2007-2018) tidak konsisten dengan disiplin keilmuan Teknik Industri — jurnal tersebut bergerak di bidang fisioterapi berbahasa Spanyol (ISSN 1135-8599). Atas dasar integritas akademik, modul ini dibangun di atas literatur *peer-reviewed* yang telah terverifikasi, dengan Forel & Grunow (2023) sebagai jangkar teoretis utama karena artikelnya secara eksplisit membahas rekayasa hibrida stokastik–rolling horizon pada *lot sizing* sebagaimana permintaan modul.

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (*lot sizing*) merupakan tulang punggung perencanaan produksi di hampir semua industri manufaktur dan proses. Wagner & Whitin (1958) sejak六十 tahun lalu telah meletakkan formulasi dinamis deterministik yang elegan, namun realitas operasional modern jarang bersifat deterministik. Fluktuasi permintaan, *bullwhip effect* pada rantai pasok, serta *service-level agreement* yang makin ketat迫使 perusahaan manufaktur untuk mengadopsi pendekatan yang mampu menangkap ketidakpastian secara eksplisit.

Forel & Grunow (2023) menyoroti jurang besar antara literatur akademik dan praktik industri: hanya sedikit perusahaan yang benar-benar menerapkan model stokastik formal. Mereka menemukan bahwa sebagian besar praktisi mengandalkan model deterministik yang dijalankan di dalam kerangka *rolling-horizon planning* (RHP) dengan pembaruan ramalan (*forecast updates*) mingguan atau harian. Hasil riset mereka menunjukkan bahwa **model evolusi ramalan (*martingale model of forecast evolution*, MMFE)** mampu menurunkan biaya aktual hingga dua digit persen dibanding pendekatan deterministik naïf ketika diintegrasikan dengan fleksibilitas *replanning*.

Konteks industri yang relevan sangat luas: industri suku cadang otomotif menghadapi permintaan yang sangat tidak stabil akibat perubahan varian dan kebijakan *just-in-sequence*; industri *batch* farmasi harus menyeimbangkan biaya *setup* yang mahal dengan kapasitas vial; industri makanan dan minuman dibayangi ketidakpastian musiman dan perilaku konsumen pasca-pandemi. Dalam semua kasus, perusahaan menanggung tiga jenis biaya secara simultan: biaya *setup* (yang bersifat *lumpy*), biaya *holding* inventaris, dan biaya *backorder*/kehabisan stok. Model deterministik tradisional hanya memperlakukan permintaan sebagai konstanta, padahal korelasi-temporal (*forecast evolution*) memengaruhi keputusan riil.

Urgensi ekonominya signifikan. Studi empiris Forel & Grunow (2023) pada data *real-world* menunjukkan bahwa mengabaikan evolusi ramalan meningkatkan rata-rata biaya total 5–15%, dan pada skenario *high-volatility* dapat melebihi 20%. Oleh karena itu, pengembangan **model optimasi stokastik hibrida** — yang menggabungkan kekuatan pemodelan stokastik multi-tahap dengan fleksibilitas operasional RHP — menjadi agenda riset dan rekayasa yang sangat relevan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik Wagner–Whitin (1958)

Formulasi dasar *capacitated lot sizing problem* (CLSP) deterministik untuk horizon $T$ adalah:

$$\min \sum_{t=1}^{T}\left(s_t y_t + h_t I_t\right)$$

dengan kendala:

$$I_{t-1} + q_t - I_t = d_t, \quad t=1,\dots,T$$

$$q_t \leq M y_t, \quad y_t \in \{0,1\}, \quad I_0 = I_T = 0, \quad I_t \geq 0$$

di mana $q_t$ adalah kuantitas produksi, $I_t$ inventaris akhir periode, $y_t$ variabel biner keputusan *setup*, $s_t$ biaya *setup*, $h_t$ biaya *holding* per unit, dan $M$ kapasitas produksi maksimum.

### 2.2 Model Martingale of Forecast Evolution (MMFE)

Forel & Grunow (2023) merumuskan dinamika permintaan sebagai proses martingale:

$$D_{t+1} = D_t + \varepsilon_{t+1}, \quad \varepsilon_{t+1}\sim \mathcal{N}(0,\sigma_{t+1}^{2})$$

dengan $D_{t+1\mid t}$ adalah ramalan permintaan untuk periode $t+1$ yang dibuat pada akhir periode $t$. Kovariansi antar-ramalan bersifat intrinsik:

$$\text{Var}[D_{t+k\mid t}] = \sum_{j=1}^{k}\sigma_{t+j}^{2}, \quad \text{Cov}[D_{t+k\mid t}, D_{t+\ell\mid t}] = \sum_{j=1}^{\min(k,\ell)}\sigma_{t+j}^{2}$$

Rumus ini memungkinkan partisi skenario pohon (*scenario tree*) yang koheren dan efisien