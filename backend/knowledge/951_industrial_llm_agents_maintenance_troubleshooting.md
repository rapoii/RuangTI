# 951 — Sistem Multi-Agen LLM Industri untuk Pemeliharaan Otonom: Generasi Augmentasi Pencarian (RAG) atas Manual Mesin, Ontologi Diagnostik, dan Grounding Aksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Industrial LLM Multi-Agent System for Autonomous Maintenance Troubleshooting: Retrieval-Augmented Generation (RAG) over Machine Manuals, Diagnostic Ontology, and Action Grounding  
**Standar & Referensi Utama:** ISO 13374; Achiam et al. (OpenAI Technical Reports); Russell & Norvig (Artificial Intelligence: A Modern Approach, 4th Ed., Pearson 2022); IEEE Trans. Ind. Inform.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pemeliharaan otonom menjadi salah satu aspek krusial dalam meningkatkan efisiensi operasional dan mengurangi biaya. Dengan meningkatnya kompleksitas sistem manufaktur dan rantai pasok, tantangan dalam pemeliharaan yang efektif semakin mendesak. Menurut ISO 13374, pemeliharaan berbasis kondisi dan prediktif dapat mengoptimalkan waktu henti mesin dan meningkatkan produktivitas. Namun, implementasi sistem pemeliharaan yang efisien memerlukan integrasi teknologi canggih seperti sistem multi-agen dan pembelajaran mesin.

Sistem pemeliharaan tradisional sering kali bergantung pada manual mesin yang tidak terstruktur dan pengetahuan yang tersebar di antara teknisi. Hal ini menyebabkan kesulitan dalam diagnosis dan pemecahan masalah yang cepat. Achiam et al. (2022) menunjukkan bahwa pemanfaatan model bahasa besar (LLM) dalam sistem multi-agen dapat meningkatkan kemampuan pemeliharaan otonom dengan memanfaatkan data dari manual mesin dan ontologi diagnostik. Dengan pendekatan Retrieval-Augmented Generation (RAG), informasi yang relevan dapat diambil secara dinamis untuk mendukung proses troubleshooting.

Tantangan yang dihadapi dalam konteks ini mencakup kebutuhan untuk mengurangi waktu respons dalam pemeliharaan, meningkatkan akurasi diagnosis, dan mengurangi ketergantungan pada pengetahuan manusia. Oleh karena itu, penelitian ini bertujuan untuk mengeksplorasi penerapan sistem multi-agen LLM dalam konteks pemeliharaan otonom, dengan fokus pada pengembangan dan implementasi RAG yang efektif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Notasi dan Definisi

Dalam sistem multi-agen, kita mendefinisikan beberapa variabel penting:

- $A$: Set aksi yang dapat diambil oleh agen.
- $S$: Set status sistem yang dapat terjadi.
- $R$: Fungsi reward yang memberikan umpan balik terhadap aksi yang diambil.
- $P(s'|s, a)$: Probabilitas transisi dari status $s$ ke status $s'$ setelah aksi $a$ diambil.

### 2.2. Model Markov Keputusan (MDP)

Sistem pemeliharaan otonom dapat dimodelkan sebagai MDP, yang didefinisikan oleh tuple $(S, A, P, R, \gamma)$, di mana $\gamma$ adalah faktor diskonto. Tujuan dari MDP adalah untuk menemukan kebijakan $\pi: S \rightarrow A$ yang memaksimalkan nilai ekspektasi:

$$ V^\pi(s) = \mathbb{E} \left[ \sum_{t=0}^{\infty} \gamma^t R(s_t, a_t) | s_0 = s \right] $$

### 2.3. Pembuktian Kebijakan Optimal

Kebijakan optimal $\pi^*$ dapat ditemukan menggunakan metode iterasi nilai:

$$ V_{k+1}(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s, a) \left( R(s, a) + \gamma V_k(s') \right) $$

Dengan iterasi ini, kita dapat menghitung nilai optimal untuk setiap status hingga konvergensi tercapai.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data dari manual mesin dan sumber informasi terkait lainnya.
2. **Pengembangan Ontologi Diagnostik**: Buat ontologi yang mendefinisikan hubungan antara status mesin, penyebab kerusakan, dan solusi.
3. **Desain Arsitektur Sistem Multi-Agen**: Rancang sistem multi-agen yang terdiri dari agen pemeliharaan, agen diagnosis, dan agen rekomendasi.
4. **Implementasi RAG**: Integrasikan model LLM dengan RAG untuk memungkinkan pengambilan informasi yang relevan dari manual mesin.
5. **Pengujian dan Validasi**: Lakukan pengujian sistem untuk memastikan akurasi dan efektivitas dalam pemecahan masalah.

### 3.2. Diagram Alir Proses

```
[Pengumpulan Data] --> [Pengembangan Ontologi] --> [Desain Sistem Multi-Agen] --> [Implementasi RAG] --> [Pengujian]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki mesin yang beroperasi pada status $s_1$ dengan kemungkinan kerusakan yang dapat terjadi. Kita akan menghitung nilai ekspektasi dari kebijakan pemeliharaan.

### 4.2. Input Parameter

- Status mesin: $s_1$
- Aksi yang mungkin: $A = \{a_1, a_2\}$
- Probabilitas transisi: 
  - $P(s_2|s_1, a_1) = 0.7$
  - $P(s_3|s_1, a_1) = 0.3$
  - $P(s_2|s_1, a_2) = 0.4$
  - $P(s_3|s_1, a_2) = 0.6$
- Reward:
  - $R(s_1, a_1) = 10$
  - $R(s_1, a_2) = 5$

### 4.3. Langkah Kalkulasi

1. Hitung nilai ekspektasi untuk setiap aksi:

$$ V(a_1) = 0.7 \cdot (10 + \gamma V(s_2)) + 0.3 \cdot (10 + \gamma V(s_3) $$

$$ V(a_2) = 0.4 \cdot (5 + \gamma V(s_2)) + 0.6 \cdot (5 + \gamma V(s_3) $$

2. Misalkan $\gamma = 0.9$ dan kita asumsikan $V(s_2) = 8$, $V(s_3) = 6$:

$$ V(a_1) = 0.7 \cdot (10 + 0.9 \cdot 8) + 0.3 \cdot (10 + 0.9 \cdot 6) $$

$$ = 0.7 \cdot 17.2 + 0.3 \cdot 15.4 = 12.04 + 4.62 = 16.66 $$

$$ V(a_2) = 0.4 \cdot (5 + 0.9 \cdot 8) + 0.6 \cdot (5 + 0.9 \cdot 6) $$

$$ = 0.4 \cdot 12.2 + 0.6 \cdot 10.4 = 4.88 + 6.24 = 11.12 $$

### 4.4. Interpretasi Hasil

Dari perhitungan di atas, kita dapat melihat bahwa memilih aksi $a_1$ memberikan nilai ekspektasi yang lebih tinggi ($16.66$) dibandingkan dengan aksi $a_2$ ($11.12$). Oleh karena itu, kebijakan optimal adalah untuk memilih aksi $a_1$ dalam situasi ini.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sistem multi-agen LLM untuk pemeliharaan otonom memiliki aplikasi yang luas di berbagai sektor, termasuk otomasi, manajemen rantai pasok, dan teknik keselamatan kerja (K3). Dalam konteks otomasi, sistem ini dapat digunakan untuk mengurangi waktu henti mesin dan meningkatkan efisiensi produksi. Dalam manajemen biaya, pendekatan ini dapat membantu dalam pengurangan biaya pemeliharaan dan peningkatan ROI.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti ketergantungan pada kualitas data dan kemampuan model LLM dalam memahami konteks teknis. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan algoritma yang lebih robust dan adaptif, serta integrasi dengan teknologi IoT untuk pengumpulan data real-time.

Dengan demikian, penerapan sistem multi-agen LLM dalam pemeliharaan otonom tidak hanya menjanjikan efisiensi yang lebih tinggi, tetapi juga membuka jalan untuk inovasi lebih lanjut dalam bidang teknik industri dan rekayasa sistem.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
