# 1748 — Perencanaan Gerak dengan Pembelajaran Penguatan untuk Sistem Multi-Agen Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan e-commerce global yang diproyeksikan mencapai USD 6,3 triliun pada tahun 2024 (Statista, 2024) dan adopsi *Industry 4.0* yang masif telah memaksa sektor manufaktur, pergudangan, dan logistik untuk mengadopsi armada robot bergerak otonom (*Autonomous Mobile Robots*—AMR). Dalam konteks ini, kemampuan **perencanaan gerak** (*motion planning*) menjadi kompetensi operasional yang menentukan *throughput*, *order cycle time*, dan *Overall Equipment Effectiveness* (OEE) lini produksi. Kala (2024), dalam bab buku *Autonomous Mobile Robots* dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), secara khusus membahas bagaimana *Reinforcement Learning* (RL) memberikan kerangka pemecahan masalah untuk merencanakan lintasan robot dalam lingkungan yang dinamis dan tidak pasti—menggantikan pendekatan konvensional berbasis *A\**, *RRT*, atau *potential field* yang bersifat *reaktif-deterministik*.

Urgensi ekonomi dari topik ini cukup nyata. Studi McKinsey (2023) menunjukkan bahwa AMR berpotensi menurunkan biaya operasional gudang hingga 30% dan meningkatkan produktivitas拣选 (*picking*) sebesar 50%. Akan tetapi, penerapan AMR skala besar menghadapi tantangan kegagalan sensor, aktuator, dan jaringan komunikasi—persis seperti yang ditekankan oleh Borah (2024) dalam disertasinya (DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) tentang *Smart Autonomous Multi-Agent Systems* (SAMAS). Borah secara eksplisit menyatakan bahwa *Fault Detection, Isolation, and Reconstruction* (FDIR) merupakan komponen kritikal untuk keberlanjutan operasional, terutama saat armada beroperasi 24/7 dengan *mean time between failures* yang harus ditekan.

Integrasi