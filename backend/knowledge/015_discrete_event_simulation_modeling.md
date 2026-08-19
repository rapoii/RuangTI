# Modul Riset Ilmiah: Pemodelan & Simulasi Sistem Diskrit (Discrete-Event Simulation - DES)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref & Google Scholar Validated - 2023-2026):**
- Law, A. M. (2015). *Simulation Modeling and Analysis* (5th ed.). McGraw-Hill. ISBN: 978-0073401324. (Foundational Benchmark).
- Schutz, J., Sauvey, C., Nițu, E. L., & Gavriluță, A. C. (2025). *A Practical and Sustainable Approach to Industrial Engineering Discrete-Event Simulation with Free Mathematical and Programming Software*. Sustainability, 17(9), 3973. DOI: [10.3390/su17093973](https://doi.org/10.3390/su17093973).
- De Felice, F., De Luca, C., Petrillo, A., & Forcina, A. (2025). *The Role of Digital Transformation in Manufacturing: Discrete Event Simulation to Reshape Industrial Landscapes*. Applied Sciences, 15(11), 6140. DOI: [10.3390/app15116140](https://doi.org/10.3390/app15116140).
- Goyal, A., Yamamoto, Y., & Aslanidou, I. (2026). *Adoption of discrete event simulation in manufacturing*. Journal of Simulation, Taylor & Francis. DOI: [10.1080/17477778.2026.2628033](https://doi.org/10.1080/17477778.2026.2628033).

---

## 1. Konsep Dasar Simulasi Peristiwa Diskrit (DES)
Discrete-Event Simulation (DES) memodelkan operasi sistem manufaktur dan rantai pasok sebagai urutan kronologis kejadian (*events*) terpisah dalam waktu. Keadaan sistem diasumsikan berubah seketika hanya ketika sebuah peristiwa terjadi (misal: kedatangan part bahan baku, selesainya operasi mesin, atau terjadinya kerusakan mesin).

### Komponen Utama Model DES:
1. **Entities (Entitas):** Objek dinamis yang mengalir di dalam sistem (misal: benda kerja, pallet, job pesanan).
2. **Attributes (Atribut):** Karakteristik unik dari entitas (misal: waktu kedatangan, ukuran batch, tipe produk).
3. **Resources (Sumber Daya):** Elemen statis berkapasitas terbatas yang memproses entitas (mesin CNC, operator, forklift).
4. **Queues (Antrian / Buffer):** Tempat penyimpanan sementara entitas saat menunggu sumber daya tersedia.
5. **Events (Peristiwa):** Titik waktu sesaat terjadinya perubahan status sistem (misal: *Arrival Event*, *Service Complete Event*).

---

## 2. Metodologi Verifikasi & Validasi (V&V) Model Simulasi
Model simulasi tidak dapat digunakan untuk pengambilan keputusan manajerial sebelum melalui pengujian ketat:
- **Verifikasi (Verification):** *"Apakah model dibangun dengan benar?"* Memastikan logika pemrograman, blok alur, dan kode berjalan bebas dari bug teknis sesuai rancangan konseptual.
- **Validasi (Validation):** *"Apakah kita membangun model yang tepat?"* Menguji apakah perilaku output model merepresentasikan perilaku sistem fisik nyata secara akurat.

### Uji Statistik Validasi (Averill M. Law Standard):
1. **Uji Perbandingan Rata-rata ($t\text{-Test}$ / Welch's $t\text{-Test}$):**
   Membandingkan rata-rata output sistem nyata ($\mu_{\text{real}}$) dengan rata-rata replikasi simulasi ($\mu_{\text{sim}}$):
   $$t = \frac{\bar{X}_{\text{real}} - \bar{X}_{\text{sim}}}{\sqrt{\frac{S^2_{\text{real}}}{n_1} + \frac{S^2_{\text{sim}}}{n_2}}}$$
   *Jika $p\text{-value} > \alpha$ ($0.05$), model dinyatakan **Valid** (tidak ada perbedaan signifikan).*

2. **Warm-Up Period & Replikasi Independen:**
   - **Warm-Up Period:** Membuang data simulasi fase awal (*transient state*) agar statistik hanya mencatat kondisi stabil (*steady-state*).
   - **Number of Replications ($N$):** Penentuan jumlah putaran simulasi untuk mencapai margin error ($\epsilon$) dan tingkat kepercayaan ($1-\alpha$):
     $$N \ge \left( \frac{z_{\alpha/2} \times S}{\epsilon} \right)^2$$
