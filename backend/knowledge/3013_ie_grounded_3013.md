# 3013 — Strategi Rantai Pasok Tertutup Baterai Daya Bekas Pakai: Integrasi Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Menuju Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain Strategy untuk Baterai Daya Bekas Pakai (Retired Power Battery) dengan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik global (Global EV) yang menembus lebih dari 14 juta unit pada 2023 telah menciptakan paradoks industri yang krusial: di satu sisi terjadi transisi energi masif, namun di sisi lain timbul akumulasi baterai daya (power battery) bekas pakai yang masif. Baterai lithium-ion (LIB) dengan umur pakai 8–10 tahun dalam aplikasi otomotif akan memasuki fase *end-of-first-life* (EOFOL) secara bergelombang, dan proyeksi industri menunjukkan lebih dari 200 juta unit baterai pensiun akan dihasilkan secara kumulatif sebelum 2030 (JIANG & TANG, 2025). Kondisi ini bukan sekadar permasalahan lingkungan, melainkan masalah strategis rantai pasok yang memiliki implikasi terhadap keamanan bahan baku kritis (Li, Co, Ni), ketahanan energi nasional, dan profitabilitas pelaku industri.

Dalam konteks ini, *closed-loop supply chain* (CLSC) muncul sebagai paradigma dominan yang mengintegrasikan aliran maju (*forward logistics*) dengan aliran balik (*reverse logistics*). JIANG & TANG (2025) menyoroti bahwa baterai pensiun tidak boleh langsung dilebur (*direct recycling*), melainkan harus melalui dua fase pemulihan nilai: (1) **pemanfaatan bertingkat** (*echelon utilization* / *梯次利用*) untuk aplikasi second-life seperti penyimpanan energi stasioner (*stationary energy storage system*/SESS), *low-speed electric vehicle* (LSEV), lampu jalan pintar, atau *backup power* telekomunikasi; dan (2) **remanufaktur daur ulang** (*recycling remanufacturing*) untuk mengekstraksi material katoda melalui proses hidrometalurgi atau pirometalurgi. Tanpa strategi CLSC yang teroptimasi, perusahaan menghadapi *trade-off* antara biaya pengumpulan, nilai sisa (*residual value*), biaya pengujian SOH (*State of Health*), serta ketidakpastian permintaan di pasar sekunder.

Urgensi operasional semakin diperkuat oleh regulasi ketat seperti *EU Battery Regulation 2023* yang mensyaratkan *collection rate* ≥ 50% pada 2027 dan ≥ 80% pada 2031, *recycling efficiency* ≥ 65% untuk LIB pada 2025, serta *minimum recycled content* (Co 12%, Ni 4%, Li 6%) pada 2031. Sementara di China, kebijakan *Extended Producer Responsibility* (EPR) mewajibkan produsen baterai (CATL, BYD, EVE Energy) untuk bertanggung jawab atas daur ulang produk mereka. Di tengah tekanan regulasi, ketidakpastian permintaan (*demand uncertainty*) untuk produk second-life dan fluktuasi harga kobalt/litium menyebabkan pendekatan deterministik menjadi usang—menjadikan formulasi **robust optimization** ala Shin, Kim, & Jeong (2024) semakin relevan untuk diaplikasikan pada konteks baterai pensiun.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Model CLSC baterai pensiun mengadopsi struktur jaringan 4-tahap: **Titik Pengumpulan → Fasilitas Pengujian SOH → Pusat Echelon (Second-Life) atau Remanufaktur → Fasilitas Daur Ulang Material**.

Definisi himpunan:
- $i \in I$: lokasi pengumpulan (*collection centers*)
- $j \in J$: fasilitas inspeksi/sortasi baterai
- $k \in K$: aplikasi pemanfaatan bertingkat (second-life)
- $l \in L$: fasilitas remanufaktur
- $m \in M$: fasilitas daur ulang (recycling)
- $s \in S$: skenario permintaan (untuk model robust)

Parameter utama:
- $S_i$: suplai baterai pensiun di titik $i$ (unit/tahun)
- $D_k^s$: permintaan produk second-life pada aplikasi $k$ di skenario $s$ (unit/tahun)
- $c_{ij}$: biaya transportasi dari $i$ ke $j$ (RMB/unit)
- $c_{jk}, c_{jl}, c_{jm}$: biaya transportasi hilir
- $\theta_i$: proporsi baterai di titik $i$ yang lolos uji untuk remanufaktur
- $\alpha$: tingkat pemulihan kapasitas baterai (state-of-health threshold, SOH $\geq$ 70%)
- $Q_j, Q_l, Q_m$: kapasitas proses fasilitas masing-masing
- $r_l$: revenue unit dari baterai remanufaktur
- $p_k$: profit unit dari aplikasi second-life $k$
- $v_m$: nilai material daur ulang per unit
- $C_j^F, C_l^F, C_m^F$: biaya tetap (*fixed cost*) fasilitas

Variabel keputusan:
- $x_{ij}$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
