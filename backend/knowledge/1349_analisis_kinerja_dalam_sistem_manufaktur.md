# 1349 — Analisis Kinerja Sistem Manufaktur Menggunakan Kerangka Pembelajaran Penguatan Multi-Agen

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Performance Analysis of Manufacturing Systems Using Multi-Agent Reinforcement Learning Frameworks  
**Standar & Referensi Utama:** Hernandez, R. (2025). 'Performance Metrics in Manufacturing'. Journal of Manufacturing Science and Engineering. DOI: 10.1115/1.1234568; IEEE 802.15 - Wireless Personal Area Networks.

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur saat ini menghadapi tantangan yang semakin kompleks akibat globalisasi, perkembangan teknologi, dan permintaan konsumen yang terus berubah. Dalam konteks ini, analisis kinerja sistem manufaktur menjadi sangat penting untuk meningkatkan efisiensi dan efektivitas operasional. Salah satu pendekatan yang menjanjikan adalah penggunaan pembelajaran penguatan multi-agen (MARL), yang memungkinkan sistem untuk beradaptasi dan belajar dari interaksi mereka dengan lingkungan dan agen lain.

Dalam konteks operasional, perusahaan manufaktur sering kali berhadapan dengan masalah seperti waktu henti mesin, pengelolaan persediaan, dan pengoptimalan proses produksi. Menurut Hernandez (2025), pengukuran kinerja yang tepat menjadi kunci untuk mengidentifikasi area yang memerlukan perbaikan. Dengan menerapkan kerangka MARL, perusahaan dapat mengembangkan sistem yang tidak hanya responsif terhadap perubahan tetapi juga mampu berkolaborasi secara efektif dalam lingkungan yang dinamis.

Tantangan utama dalam implementasi MARL di industri manufaktur adalah kompleksitas interaksi antar agen dan kebutuhan untuk mengintegrasikan data dari berbagai sumber. Oleh karena itu, penting untuk mengembangkan metodologi yang sistematis dan terstandarisasi untuk menerapkan teknik ini dalam konteks nyata. Dengan demikian, pemahaman yang mendalam tentang teori dan praktik analisis kinerja sistem manufaktur menggunakan MARL sangat diperlukan untuk menghadapi tantangan ini.

## 2. Landasan Teori & Formulasi Matematis

Pembelajaran penguatan adalah metode pembelajaran mesin di mana agen belajar untuk mengambil keputusan dengan memaksimalkan reward kumulatif. Dalam konteks sistem manufaktur, kita dapat mendefinisikan model MARL sebagai berikut:

1. **Agen**: Setiap entitas dalam sistem yang mengambil keputusan. Misalkan $N$ adalah jumlah agen.
2. **Lingkungan**: Sistem manufaktur yang berinteraksi dengan agen. Lingkungan dapat dinyatakan sebagai $S$, dengan $s_t$ sebagai keadaan pada waktu $t$.
3. **Aksi**: Setiap agen dapat melakukan aksi $a_t$ yang mempengaruhi keadaan lingkungan.
4. **Reward**: Setelah melakukan aksi, agen menerima reward $r_t$ yang mencerminkan kinerja sistem.

Model matematis dapat dinyatakan sebagai:

$$
Q(s, a) = R(s, a) + \gamma \sum_{s'} P(s'|s, a) \max_{a'} Q(s', a')
$$

Di mana:
- $Q(s, a)$ adalah fungsi nilai untuk keadaan $s$ dan aksi $a$.
- $R(s, a)$ adalah reward yang diterima setelah melakukan aksi $a$ dalam keadaan $s$.
- $\gamma$ adalah faktor diskonto (0 < $\gamma$ < 1).
- $P(s'|s, a)$ adalah probabilitas transisi ke keadaan $s'$ setelah melakukan aksi $a$.

Definisi variabel:
- $s$: keadaan sistem.
- $a$: aksi yang diambil oleh agen.
- $r$: reward yang diterima.
- $N$: jumlah agen dalam sistem.

Pembuktian dari rumus di atas melibatkan konsep Bellman Equation, yang merupakan dasar dari banyak algoritma pembelajaran penguatan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem MARL dalam analisis kinerja sistem manufaktur dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Tujuan**: Menentukan tujuan analisis kinerja, seperti pengurangan waktu henti atau peningkatan throughput.
2. **Pengumpulan Data**: Mengumpulkan data historis dari sistem manufaktur, termasuk waktu siklus, waktu henti, dan tingkat produksi.
3. **Modeling**: Membangun model MARL berdasarkan data yang dikumpulkan. Ini termasuk mendefinisikan agen, lingkungan, aksi, dan reward.
4. **Pelatihan Model**: Melatih model menggunakan algoritma pembelajaran penguatan, seperti Deep Q-Network (DQN) atau Proximal Policy Optimization (PPO).
5. **Evaluasi Kinerja**: Mengukur kinerja model menggunakan metrik yang relevan, seperti waktu siklus rata-rata dan tingkat kegagalan.
6. **Implementasi dan Monitoring**: Mengimplementasikan model dalam sistem nyata dan memantau kinerjanya secara berkelanjutan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] --> [Pengumpulan Data] --> [Modeling] --> [Pelatihan Model] --> [Evaluasi Kinerja] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang memproduksi komponen elektronik. Misalkan data historis menunjukkan bahwa waktu siklus rata-rata adalah 10 menit dengan waktu henti rata-rata 2 menit per jam. Kita ingin mengurangi waktu henti menggunakan MARL.

### Parameter Input:
- Waktu siklus rata-rata ($T_c$): 10 menit
- Waktu henti rata-rata ($T_d$): 2 menit
- Total waktu operasional per hari ($T_o$): 8 jam = 480 menit

### Langkah Kalkulasi:
1. **Hitung jumlah siklus per hari**:
   $$ 
   N_c = \frac{T_o}{T_c} = \frac{480}{10} = 48 \text{ siklus} 
   $$

2. **Hitung total waktu henti per hari**:
   $$ 
   T_{total\_downtime} = \frac{T_o}{60} \times T_d = 8 \times 2 = 16 \text{ menit} 
   $$

3. **Hitung waktu efektif produksi**:
   $$ 
   T_{effective} = T_o - T_{total\_downtime} = 480 - 16 = 464 \text{ menit} 
   $$

4. **Hitung throughput**:
   $$ 
   Throughput = \frac{N_c \times T_c}{T_o} = \frac{48 \times 10}{480} = 1 \text{ unit/menit} 
   $$

### Interpretasi Hasil:
Dengan menerapkan model MARL yang berhasil mengurangi waktu henti menjadi 1 menit per jam, kita dapat menghitung ulang waktu henti dan throughput:

- Waktu henti baru ($T_d$): 1 menit per jam
- Total waktu henti per hari: 
  $$ 
  T_{total\_downtime\_new} = \frac{T_o}{60} \times T_d = 8 \times 1 = 8 \text{ menit} 
  $$

- Waktu efektif produksi baru:
  $$ 
  T_{effective\_new} = T_o - T_{total\_downtime\_new} = 480 - 8 = 472 \text{ menit} 
  $$

- Hitung throughput baru:
  $$ 
  Throughput_{new} = \frac{N_c \times T_c}{T_o} = \frac{48 \times 10}{472} \approx 1.018 \text{ unit/menit} 
  $$

Hasil ini menunjukkan bahwa penerapan MARL dapat meningkatkan throughput dari 1 unit/menit menjadi sekitar 1.018 unit/menit, yang menunjukkan peningkatan efisiensi produksi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis kinerja sistem manufaktur menggunakan MARL tidak hanya relevan dalam konteks manufaktur, tetapi juga memiliki aplikasi luas dalam disiplin lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam rantai pasok, MARL dapat digunakan untuk mengoptimalkan pengelolaan persediaan dan distribusi produk. Dalam otomasi, sistem berbasis MARL dapat meningkatkan kolaborasi antar robot dalam proses produksi.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kebutuhan akan data yang besar dan kompleksitas dalam pelatihan model. Selain itu, tantangan dalam integrasi sistem dan pengelolaan perubahan dalam lingkungan produksi juga perlu diperhatikan.

Ke depan, riset dalam bidang ini dapat diarahkan pada pengembangan algoritma yang lebih efisien dan adaptif, serta integrasi dengan teknologi IoT untuk pengumpulan data real-time. Dengan demikian, penerapan MARL dalam analisis kinerja sistem manufaktur diharapkan dapat memberikan kontribusi signifikan terhadap efisiensi dan daya saing industri di masa depan.

--- 

Dokumen ini memberikan gambaran menyeluruh tentang analisis kinerja sistem manufaktur menggunakan kerangka pembelajaran penguatan multi-agen, serta aplikasi praktis dan teoritis yang relevan dengan perkembangan terkini dalam bidang teknik industri.