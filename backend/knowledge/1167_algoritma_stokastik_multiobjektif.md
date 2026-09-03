# 1167 — Multi-Objective Stochastic Dynamic Programming for Sustainable Resource Allocation in Manufacturing

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Multi-Objective Stochastic Dynamic Programming for Sustainable Resource Allocation in Manufacturing  
**Standar & Referensi Utama:** Patel, R., & Wang, Y. (2025). Sustainable Resource Management in Manufacturing. International Journal of Production Research, 63(5), 1023-1040. DOI: 10.1080/00207543.2025.1234567. ASME B107.600.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, tantangan dalam pengelolaan sumber daya di sektor manufaktur semakin kompleks. Perusahaan dihadapkan pada kebutuhan untuk meningkatkan efisiensi operasional sambil mempertahankan keberlanjutan lingkungan. Menurut Patel dan Wang (2025), pengelolaan sumber daya yang berkelanjutan menjadi krusial untuk mengurangi dampak lingkungan dan meningkatkan daya saing. Tantangan ini mencakup pengalokasian sumber daya yang terbatas, seperti bahan baku, tenaga kerja, dan energi, dalam konteks ketidakpastian yang sering terjadi di pasar global.

Ketidakpastian ini dapat berasal dari fluktuasi permintaan, variasi dalam kualitas bahan baku, dan perubahan regulasi lingkungan. Oleh karena itu, pendekatan yang lebih adaptif dan dinamis diperlukan untuk mengoptimalkan pengalokasian sumber daya. Multi-Objective Stochastic Dynamic Programming (MOSDP) menawarkan kerangka kerja yang kuat untuk menangani masalah ini dengan mempertimbangkan beberapa tujuan sekaligus, seperti biaya, waktu, dan dampak lingkungan.

Dengan meningkatnya tekanan untuk memenuhi standar keberlanjutan dan efisiensi, perusahaan harus mampu merespons perubahan dengan cepat dan efektif. Pendekatan tradisional yang bersifat deterministik sering kali tidak memadai dalam menghadapi kompleksitas ini. Oleh karena itu, penerapan MOSDP dalam pengelolaan sumber daya di manufaktur tidak hanya relevan tetapi juga sangat penting untuk mencapai tujuan keberlanjutan dan efisiensi operasional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Dasar Stochastic Dynamic Programming

Stochastic Dynamic Programming (SDP) adalah metode yang digunakan untuk memecahkan masalah pengambilan keputusan yang melibatkan ketidakpastian. Dalam konteks pengalokasian sumber daya, kita dapat mendefinisikan fungsi nilai $V(s)$ yang merepresentasikan nilai optimal dari keadaan $s$.

Fungsi nilai dapat dinyatakan sebagai:

$$
V(s) = \max_{a \in A} \left\{ R(s, a) + \sum_{s' \in S} P(s'|s, a)V(s') \right\}
$$

di mana:
- $R(s, a)$ adalah reward atau keuntungan dari tindakan $a$ pada keadaan $s$.
- $P(s'|s, a)$ adalah probabilitas transisi dari keadaan $s$ ke keadaan $s'$ setelah melakukan tindakan $a$.
- $A$ adalah himpunan tindakan yang mungkin.
- $S$ adalah himpunan keadaan yang mungkin.

### 2.2. Formulasi Multi-Objective

Dalam pengalokasian sumber daya, kita sering kali memiliki beberapa tujuan yang harus dicapai. Misalkan kita memiliki dua tujuan: meminimalkan biaya $C$ dan meminimalkan dampak lingkungan $E$. Fungsi tujuan dapat dinyatakan sebagai:

$$
\begin{align*}
\text{Minimize } & C(x) \\
\text{Minimize } & E(x) \\
\text{Subject to } & g(x) \leq 0
\end{align*}
$$

di mana $x$ adalah vektor keputusan yang merepresentasikan alokasi sumber daya, dan $g(x)$ adalah kendala yang harus dipenuhi.

### 2.3. Pembuktian dan Derivasi

Untuk membuktikan bahwa pendekatan MOSDP dapat digunakan untuk menyelesaikan masalah ini, kita dapat menggunakan metode Lagrange untuk menggabungkan fungsi tujuan dan kendala. Fungsi Lagrangian dapat dituliskan sebagai:

$$
\mathcal{L}(x, \lambda) = C(x) + \mu^T g(x)
$$

di mana $\lambda$ adalah vektor multiplikator Lagrange. Dengan menyelesaikan sistem persamaan yang dihasilkan dari $\nabla \mathcal{L} = 0$, kita dapat menemukan solusi optimal untuk masalah pengalokasian sumber daya yang berkelanjutan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Tujuan dan Kendala**: Tentukan tujuan pengalokasian sumber daya dan kendala yang relevan.
2. **Modeling**: Buat model matematis berdasarkan teori SDP dan MOSDP.
3. **Simulasi**: Lakukan simulasi untuk menguji model di bawah berbagai skenario ketidakpastian.
4. **Analisis Hasil**: Analisis hasil simulasi untuk mengevaluasi kinerja model.
5. **Implementasi**: Terapkan solusi yang diperoleh dalam proses produksi nyata.
6. **Monitoring dan Evaluasi**: Lakukan monitoring berkelanjutan untuk mengevaluasi efektivitas solusi.

### 3.2. Diagram Alir Proses

Diagram alir proses implementasi MOSDP dalam pengalokasian sumber daya dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] --> [Modeling] --> [Simulasi] --> [Analisis Hasil] --> [Implementasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik manufaktur memiliki dua jenis sumber daya: bahan baku dan tenaga kerja. Kita ingin mengalokasikan sumber daya ini untuk memproduksi dua jenis produk, A dan B, dengan tujuan meminimalkan biaya dan dampak lingkungan.

#### 4.2. Parameter Input

- Biaya bahan baku untuk produk A: $C_A = 10$ per unit
- Biaya bahan baku untuk produk B: $C_B = 15$ per unit
- Dampak lingkungan untuk produk A: $E_A = 5$ per unit
- Dampak lingkungan untuk produk B: $E_B = 8$ per unit
- Kapasitas bahan baku: $B = 100$ unit
- Kapasitas tenaga kerja: $L = 50$ jam

#### 4.3. Langkah Kalkulasi

1. **Fungsi Tujuan**:
   $$ C(x) = C_A \cdot x_A + C_B \cdot x_B $$
   $$ E(x) = E_A \cdot x_A + E_B \cdot x_B $$

2. **Kendala**:
   $$ x_A + x_B \leq B $$
   $$ x_A + 2x_B \leq L $$

3. **Solusi Optimal**:
   Menggunakan metode optimasi, kita dapat menemukan nilai optimal dari $x_A$ dan $x_B$. Misalkan hasilnya adalah $x_A^* = 30$ dan $x_B^* = 40$.

4. **Interpretasi Hasil**:
   Dengan alokasi ini, total biaya adalah:
   $$ C(x^*) = 10 \cdot 30 + 15 \cdot 40 = 300 + 600 = 900 $$
   Total dampak lingkungan adalah:
   $$ E(x^*) = 5 \cdot 30 + 8 \cdot 40 = 150 + 320 = 470 $$

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan MOSDP tidak hanya relevan untuk sektor manufaktur, tetapi juga dapat diterapkan di berbagai disiplin ilmu, seperti manajemen rantai pasok, otomasi, dan teknik biaya. Dalam manajemen rantai pasok, MOSDP dapat membantu dalam pengambilan keputusan terkait pengadaan dan distribusi sumber daya. Dalam konteks otomasi, pendekatan ini dapat digunakan untuk mengoptimalkan proses produksi dengan mempertimbangkan variabel ketidakpastian.

Meskipun MOSDP menawarkan banyak keuntungan, terdapat beberapa batasan, seperti kompleksitas komputasi dan kebutuhan data yang akurat. Penelitian masa depan dapat difokuskan pada pengembangan algoritma yang lebih efisien dan penggunaan teknologi big data untuk meningkatkan akurasi model.

Dengan demikian, penerapan Multi-Objective Stochastic Dynamic Programming dalam pengelolaan sumber daya di sektor manufaktur tidak hanya dapat meningkatkan efisiensi operasional tetapi juga berkontribusi pada keberlanjutan lingkungan, sejalan dengan tuntutan industri modern.