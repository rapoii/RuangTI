# 1586 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dalam Arsitektur Sistem Industri Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental cara sistem manufaktur dan rantai pasok dioperasikan, dengan kemunculan *Cyber-Physical Production Systems* (CPPS) yang mengintegrasikan entitas fisik, mesin otonom, sensor terdistribusi, dan platform komputasi awan dalam satu ekosistem koheren. Dalam konteks ini, *Digital Twin* (DT) muncul sebagai representasi digital fidelitas-tinggi dari aset fisik yang memungkinkan simulasi, monitoring prediktif, dan optimalisasi operasional secara *real-time*. Namun, interoperabilitas digital twin lintas-vendor dan lintas-domain masih menjadi tantangan fundamental yang menghambat adopsi skala besar.

Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah yang dipublikasikan di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyumbangkan kontribusi orisinal berupa arsitektur *Asset Administration Shell* (AAS) yang diterapkan secara khusus untuk memodelkan sistem komunikasi 5G sebagai *aset* industri digital. Pendekatan ini bersifat inovatif karena memperlakukan infrastruktur jaringan 5G — yang secara tradisional dianggap sebagai *black-box* — sebagai entitas yang harus memiliki representasi digital terstandar, lengkap dengan properti, operasi, dan event yang dapat dimonitor secara dinamis. Urgensi pendekatan ini muncul dari kebutuhan aplikasi *Ultra-Reliable Low-Latency Communication* (URLLC) dan *massive Machine-Type Communication* (mMTC) dalam pabrik pintar, di mana latensi harus dijaga di bawah 1 ms dengan tingkat reliabilitas 99,999% (five-nines).

Di sisi lain, De Marchi, Rojas, dan Mark (2022) dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menyediakan arsitektur DT untuk sistem transfer perakitan siber-fisik yang menjadi *use-case* ideal untuk integrasi AAS-5G. Kedua paper ini saling melengkapi karena Paper 1 menyediakan fondasi standar representasi aset jaringan, sementara Paper 2 mendemonstrasikan aplikasi domain sistem produksi di mana integrasi tersebut menjadi kritikal. Secara ekonomi, pasar global *Industrial Digital Twin* diproyeksikan mencapai USD 110 miliar pada 2030 dengan CAGR lebih dari 30%, didorong oleh kebutuhan akan *predictive maintenance*, *zero-defect manufacturing*, dan *resilient supply chain*. Dari perspektif teknis, kombinasi AAS dan 5G menjawab tiga tantangan utama: (1) interoperabilitas semantik lintas-platform, (2) komunikasi deterministik latensi-rendah, dan (3) sinkronisasi *real-time* antara aset fisik dan representasi digitalnya.

---

## 2. Landasan Teori & Formulasi