# 1188 — Aplikasi Deep Reinforcement Learning untuk Optimasi Logistik di Pabrik Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Deep Reinforcement Learning Applications for Logistics Optimization in Smart Factories  
**Standar & Referensi Utama:** O'Brien, C. & Kim, J. (2026). Logistics Optimization with Deep RL. International Journal of Logistics Management. DOI: 10.1108/IJLM-01-2026-0032

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pabrik cerdas menjadi pilar utama dalam transformasi manufaktur dan logistik. Penerapan teknologi canggih seperti Internet of Things (IoT), big data, dan kecerdasan buatan (AI) telah mengubah cara perusahaan mengelola rantai pasok dan operasi mereka. Di tengah kompleksitas dan dinamika pasar global, optimasi logistik menjadi sangat penting untuk meningkatkan efisiensi operasional dan mengurangi biaya. Tantangan yang dihadapi oleh industri mencakup pengelolaan inventaris yang tepat, pengoptimalan rute distribusi, dan penjadwalan produksi yang efisien.

Salah satu solusi yang menjanjikan adalah penerapan Deep Reinforcement Learning (DRL), yang memungkinkan sistem untuk belajar dari interaksi dengan lingkungan dan meningkatkan keputusan secara berkelanjutan. Menurut O'Brien dan Kim (2026), DRL dapat memodelkan dan menyelesaikan masalah optimasi logistik yang kompleks dengan cara yang lebih adaptif dan responsif dibandingkan metode tradisional. Dengan memanfaatkan DRL, pabrik cerdas dapat mencapai tingkat efisiensi yang lebih tinggi, mengurangi waktu siklus, dan meningkatkan kepuasan pelanggan.

Namun, implementasi DRL dalam logistik tidak tanpa tantangan. Beberapa di antaranya termasuk kebutuhan akan data yang besar dan berkualitas tinggi, kompleksitas dalam merancang model, serta kebutuhan untuk mengintegrasikan sistem baru dengan infrastruktur yang ada. Oleh karena itu, pemahaman yang mendalam tentang teori dan praktik DRL sangat penting bagi para profesional di bidang teknik industri.

## 2. Landasan Teori & Formulasi Matematis

Deep Reinforcement Learning adalah cabang dari machine learning yang menggabungkan reinforcement learning (RL) dengan deep learning. Dalam konteks optimasi logistik, kita dapat memodelkan masalah sebagai Markov Decision Process (MDP) yang terdiri dari:

- **State Space ($S$)**: Kumpulan semua keadaan yang mungkin dari sistem.
- **Action Space ($A$)**: Kumpulan semua tindakan yang dapat diambil oleh agen.
- **Reward Function ($R$)**: Fungsi yang memberikan umpan balik kepada agen berdasarkan tindakan yang diambil.

MDP dapat dinyatakan sebagai tuple $(S, A, P, R, \gamma)$, di mana:

- $P(s'|s, a)$ adalah probabilitas transisi dari state $s$ ke state $s'$ setelah mengambil tindakan $a$.
- $\gamma$ adalah faktor diskonto yang digunakan untuk menghitung nilai masa depan.

Agen belajar untuk memaksimalkan total reward yang diharapkan dengan memecahkan persamaan Bellman:

$$ V(s) = \max_{a \in A} \left( R(s, a) + \gamma \sum_{s' \in S} P(s'|s, a)V(s') \right) $$

Di mana $V(s)$ adalah nilai dari state $s$. Dalam konteks DRL, kita menggunakan neural networks untuk mendekati fungsi nilai atau fungsi kebijakan.

### Definisi Variabel Parameter

- $s$: State saat ini.
- $a$: Tindakan yang diambil oleh agen.
- $R$: Reward yang diterima setelah mengambil tindakan.
- $V(s)$: Nilai dari state $s$.
- $\gamma$: Faktor diskonto (0 < $\gamma$ < 1).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DRL dalam optimasi logistik dapat dilakukan melalui langkah-langkah berikut:

1. **Identifikasi Masalah**: Tentukan area logistik yang perlu dioptimalkan, seperti pengelolaan inventaris atau penjadwalan pengiriman.
2. **Pengumpulan Data**: Kumpulkan data historis yang relevan, termasuk data permintaan, waktu pengiriman, dan biaya operasional.
3. **Modeling MDP**: Definisikan state space, action space, dan reward function berdasarkan data yang dikumpulkan.
4. **Pengembangan Model DRL**: Rancang dan latih model DRL menggunakan algoritma seperti Deep Q-Network (DQN) atau Proximal Policy Optimization (PPO).
5. **Simulasi dan Validasi**: Uji model dalam simulasi untuk memastikan kinerjanya sebelum diterapkan di dunia nyata.
6. **Implementasi dan Monitoring**: Terapkan model di lingkungan nyata dan monitor kinerjanya secara berkala untuk melakukan penyesuaian jika diperlukan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
Identifikasi Masalah → Pengumpulan Data → Modeling MDP → Pengembangan Model DRL → Simulasi dan Validasi → Implementasi dan Monitoring
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang ingin mengoptimalkan pengiriman barang ke pelanggan. Misalkan kita memiliki data berikut:

- Jumlah pelanggan: 5
- Jumlah kendaraan: 2
- Waktu pengiriman yang tersedia: 10 jam
- Biaya pengiriman per kilometer: $2
- Jarak ke masing-masing pelanggan (dalam km): [10, 20, 15, 25, 30]

### Langkah-langkah Perhitungan

1. **Definisikan State dan Action**:
   - State ($s$): Kombinasi dari lokasi kendaraan dan status pengiriman.
   - Action ($a$): Memilih pelanggan berikutnya untuk dikunjungi.

2. **Reward Function**:
   - Reward ($R$) dihitung berdasarkan biaya pengiriman:
   $$ R = - (Jarak \times Biaya\_per\_km) $$

3. **Hitung Reward untuk Setiap Pelanggan**:
   - Pelanggan 1: $R_1 = - (10 \times 2) = -20$
   - Pelanggan 2: $R_2 = - (20 \times 2) = -40$
   - Pelanggan 3: $R_3 = - (15 \times 2) = -30$
   - Pelanggan 4: $R_4 = - (25 \times 2) = -50$
   - Pelanggan 5: $R_5 = - (30 \times 2) = -60$

4. **Simulasi Pengiriman**:
   - Misalkan kendaraan 1 mengunjungi pelanggan 1 dan 3, dan kendaraan 2 mengunjungi pelanggan 2 dan 4.
   - Total biaya pengiriman:
   $$ Total\_Biaya = R_1 + R_3 + R_2 + R_4 = -20 -30 -40 -50 = -140 $$

5. **Interpretasi Hasil**:
   - Total biaya pengiriman sebesar $140 dapat dianggap sebagai indikator efisiensi operasional. Dengan menggunakan DRL, kita dapat mencari kombinasi pengiriman yang lebih optimal untuk mengurangi biaya ini.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan DRL dalam optimasi logistik tidak hanya terbatas pada sektor manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti manajemen rantai pasok, otomasi, dan teknik biaya. Misalnya, dalam manajemen rantai pasok, DRL dapat digunakan untuk mengoptimalkan pengadaan bahan baku dan distribusi produk akhir.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kebutuhan akan data yang besar dan berkualitas tinggi, serta kompleksitas dalam merancang model yang tepat. Selain itu, tantangan dalam integrasi dengan sistem yang ada juga perlu diperhatikan.

Ke depan, riset dalam bidang ini dapat diarahkan untuk mengembangkan algoritma DRL yang lebih efisien dan adaptif, serta mengeksplorasi penerapan DRL dalam konteks keberlanjutan dan tanggung jawab sosial perusahaan (K3/ESG). Dengan demikian, DRL dapat menjadi alat yang sangat berharga dalam mencapai efisiensi operasional dan keberlanjutan di era industri 4.0.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
