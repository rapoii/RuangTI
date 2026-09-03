# 1947 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding Cu-Cu, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global saat ini menghadapi paradoks struktural yang mendalam: meskipun demand akan kapasitas komputasi dan bandwidth memori terus meningkat secara eksponensial didorong oleh workloads AI generatif, HPC, dan edge inference, hukum Moore tradisional yang mengandalkan penskalaan planar 2D semakin mendekati batas fisika, ekonomi, dan termal. Roze dan Gerber (2026) dalam paper mereka yang dipublikasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menyoroti bahwa transisi paradigma dari monolitik System-on-Chip (SoC) menuju arsitektur chiplet dan 3D-IC bukan lagi sekadar pilihan teknologi, melainkan sebuah keniscayaan strategis yang didorong oleh tiga kekuatan simultan: (i) melonjaknya biaya desain dan fabrikasi mask pada sub-3nm yang melampaui US$ 500 juta per desain; (ii) fragmentasi pasar yang memerlukan heterogenitas proses node untuk mengoptimasi trade-off performa, daya, dan biaya; serta (iii) urgensi integrasi kapasitas memori terhadap komputasi untuk mengatasi *memory wall*.

Konteks operasional ini diperburuk oleh yield decline pada wafer besar yang mengikuti model Poisson dan Seeds: $Y = e^{-D \cdot A}$, di mana *D* adalah defect density dan *A* adalah