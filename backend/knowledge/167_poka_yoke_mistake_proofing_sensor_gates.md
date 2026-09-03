# Modul Riset Ilmiah: Poka-Yoke (Mistake-Proofing), Sensor Gates, & Zero Quality Control (ZQC)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Shingo, S. (1986). *Zero Quality Control: Source Inspection and the Poka-Yoke System*. Productivity Press. (Foundational Poka-Yoke).
- Grout, J. R., & Downs, B. T. (2012). *A brief tutorial on mistake-proofing, Poka-Yoke, and ZQC*. Decision Sciences Journal of Innovative Education.
- Saurin, T. A., Ribeiro, J. L. D., & Vidor, G. (2012). *A framework for assessing poka-yoke devices*. Journal of Manufacturing Systems, Elsevier. DOI: [10.1016/j.jmsy.2012.04.001](https://doi.org/10.1016/j.jmsy.2012.04.001).
- Mrugalska, B., & Stasiuk-Piekarska, A. K. (2024). *Smart Poka-Yoke systems in Industry 4.0: Machine vision and AI-driven defect prevention*. Computers & Industrial Engineering, Elsevier.
- Battaïa, O., & Dolgui, A. (2023). *Design and optimization of automated assembly lines with poka-yoke gates*. International Journal of Production Research, Taylor & Francis.

---

## 1. Filosofi Zero Quality Control (ZQC) & Poka-Yoke
Konsep Poka-Yoke (Bahasa Jepang: *Poka* = kesalahan tidak disengaja, *Yokeru* = menghindari) diciptakan oleh Shigeo Shingo sebagai landasan sistem **Zero Quality Control (ZQC)**. 

Filosofi inti ZQC menyatakan bahwa:
> *"Cacat adalah hasil dari kesalahan (mistakes). Manusia secara alami dapat berbuat salah, tetapi kesalahan tidak boleh dibiarkan bermutasi menjadi cacat (defects)."*

### Hirarki Inspeksi Mutu:
1. **Judgment Inspection (Inspeksi Seleksi):** Memeriksa produk *setelah* jadi untuk memisahkan barang baik dan cacat (Boros, tidak mencegah cacat).
2. **Informative Inspection (Inspeksi Informatif / SPC):** Menggunakan data sampel untuk memberikan umpan balik ke proses (Mengurangi cacat, tetapi masih ada *lag time*).
3. **Source Inspection (Inspeksi Sumber / ZQC):** Memeriksa *kondisi operasi dan input sebelum operasi dilakukan* menggunakan mekanisme fisik/sensor Poka-Yoke untuk menjamin $100\%$ pencegahan cacat secara real-time.

---

## 2. Mekanisme & Klasifikasi Poka-Yoke

### A. Berdasarkan Fungsi Pokok (Primary Functions):
1. **Control Method (Metode Kontrol):** 
   Mekanisme yang **menghentikan mesin secara otomatis** atau mengunci proses (*physical interlock*) jika kesalahan terdeteksi, sehingga operasi lanjutan mustahil dilakukan. (Tingkat efektivitas tertinggi / *Hard Gate*).
2. **Warning Method (Metode Peringatan):** 
   Mekanisme yang **mengaktifkan alarm suara, lampu strobo (Andon), atau peringatan visual** jika operator melakukan kesalahan. Efektivitas bergantung pada respons manusia.

### B. Berdasarkan Metode Pengaturan (Regulatory Functions):
1. **Contact Method (Metode Kontak Fisik):** 
   Mendeteksi anomali bentuk geometris, ukuran, berat, atau orientasi benda kerja menggunakan limit switch, pin pemandu asimetris, atau sensor proximity.
   - *Contoh:* Pin pemandu pada konektor USB / SIM card tray yang mencegah pemasangan terbalik.
2. **Fixed-Value Method (Metode Nilai Konstan / Hitungan):** 
   Memastikan sejumlah langkah atau komponen tertentu telah digunakan dalam siklus kerja.
   - *Contoh:* Kotak part yang dilengkapi sensor photoelectric (*Pick-to-Light*); jika operator belum mengambil 4 baut, konveyor tidak akan bergerak.
3. **Motion-Step Method (Metode Langkah Gerakan / Urutan):** 
   Mendeteksi apakah serangkaian instruksi kerja telah diselesaikan sesuai urutan kronologis yang benar.
   - *Contoh:* Obeng torsi digital (*Smart Torque Wrench*) yang merekam torsi baut 1 $\to$ baut 2 $\to$ baut 3; jika urutan melompat, proses berikutnya terkunci.

---

## 3. Formulasi Keandalan Sistem Inspeksi ZQC

### Probabilitas Kegagalan Lolos (Escape Defect Probability):
Jika probabilitas terjadinya kesalahan operator adalah $P(M)$ dan probabilitas keandalan sensor Poka-Yoke mendeteksi kesalahan tersebut adalah $R_{\text{poka}}$:
$$ P(\text{Defect Created}) = P(M) \times (1 - R_{\text{poka}}) $$
Jika diterapkan dua gerbang Poka-Yoke redundan secara seri ($R_1, R_2$):
$$ P(\text{Defect Escaping}) = P(M) \times (1 - R_1)(1 - R_2) $$
Dengan nilai $R_1, R_2 \ge 0.99$, tingkat cacat yang lolos mendekati nol absolut ($\approx 0\text{ PPM}$).

---

## 4. Smart Poka-Yoke & AI Vision Gates (Tren Industri 4.0/5.0)
Penelitian terkini (Mrugalska & Stasiuk-Piekarska, 2024; Battaïa & Dolgui, 2023) mengembangkan **Digital & Cognitive Poka-Yoke**:
- **Edge AI Computer Vision:** Kamera industri resolusi tinggi dengan model *YOLOv10* / *Vision Transformer* yang memverifikasi orientasi komponen mikro, warna kabel, dan kelengkapan perakitan dalam hitungan milidetik ($< 20\text{ ms}$).
- **Augmented Reality (AR) Smart Glasses:** Memproyeksikan instruksi kerja langsung di atas bidang pandang operator dan memberikan sinyal visual merah/hijau secara adaptif saat perakitan berlangsung.
- **Cobot Force-Torque Sensing Interlock:** Robot kolaboratif yang secara otomatis membatalkan siklus pengencangan jika resistansi gaya torsi menyimpang dari kurva standar, mencegah kerusakan ulir (*cross-threading*).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
