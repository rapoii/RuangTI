# 836 — Insetting Karbon Scope 3 dan Akuntansi Karbon Ter-tokenisasi dalam Rantai Pasok Global Tier-N: Pencegahan Double-Counting, Ledger Berizin ERC-3643, dan Verifikasi Protokol GHG

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Scope 3 Carbon Insetting and Tokenized Carbon Accounting in Global Tier-N Supply Chains: Double-Counting Prevention, ERC-3643 Permissioned Ledgers, and GHG Protocol Verification  
**Standar & Referensi Utama:** GHG Protocol Scope 3 Standard; ISO 14064-3; World Business Council for Sustainable Development (WBCSD 2023)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, tantangan yang dihadapi dalam pengelolaan emisi karbon semakin kompleks, terutama dalam penghitungan emisi Scope 3. Emisi ini mencakup semua emisi yang terjadi dalam rantai nilai, termasuk dari pemasok dan penggunaan produk oleh konsumen. Menurut GHG Protocol Scope 3 Standard, pengelolaan emisi ini menjadi sangat penting untuk mencapai target keberlanjutan global. Dengan meningkatnya kesadaran akan perubahan iklim, perusahaan diharapkan tidak hanya mengelola emisi langsung tetapi juga berkontribusi pada pengurangan emisi di seluruh rantai pasok mereka.

Urgensi operasional dalam hal ini terletak pada kebutuhan untuk mengintegrasikan akuntansi karbon yang transparan dan akurat. Di samping itu, tantangan teknis yang dihadapi mencakup pencegahan double-counting dalam akuntansi karbon, yang dapat merusak integritas data dan mengurangi kepercayaan stakeholder. Implementasi teknologi ledger berizin seperti ERC-3643 dapat membantu dalam menciptakan sistem yang aman dan transparan untuk pelacakan emisi karbon. Dengan demikian, perusahaan perlu mengembangkan metodologi yang tidak hanya memenuhi standar ISO 14064-3 tetapi juga beradaptasi dengan praktik terbaik yang ditetapkan oleh World Business Council for Sustainable Development (WBCSD 2023).

Literatur terkini menunjukkan bahwa penerapan sistem tokenisasi dalam akuntansi karbon dapat meningkatkan akurasi dan efisiensi dalam pelaporan emisi. Namun, tantangan tetap ada dalam hal interoperabilitas sistem dan akurasi data yang dikumpulkan dari berbagai sumber. Oleh karena itu, penting untuk mengembangkan pendekatan yang holistik dan sistematis dalam mengelola emisi karbon di seluruh rantai pasok.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

- $E_{i}$: Emisi karbon dari aktivitas $i$ dalam rantai pasok.
- $C_{j}$: Total karbon yang terakumulasi dari semua aktivitas dalam rantai pasok.
- $D_{k}$: Data yang dikumpulkan dari sumber yang berbeda.
- $R$: Rasio pengurangan emisi yang ditargetkan.
- $T$: Tokenisasi emisi karbon.

### 2.2. Rumus dan Pembuktian

Untuk menghitung total emisi karbon dalam rantai pasok, kita dapat menggunakan rumus berikut:

$$
C = \sum_{i=1}^{n} E_{i}
$$

Di mana $n$ adalah jumlah total aktivitas dalam rantai pasok. Untuk mencegah double-counting, kita perlu menerapkan prinsip pengurangan emisi yang ditargetkan:

$$
E_{total} = C - \sum_{j=1}^{m} (E_{j} \cdot R)
$$

Di mana $m$ adalah jumlah aktivitas yang telah diakui untuk pengurangan emisi. Tokenisasi emisi karbon dapat dinyatakan sebagai:

$$
T = \frac{C}{E_{total}}
$$

Dengan rumus ini, kita dapat menghitung nilai token yang merepresentasikan emisi karbon yang telah dikurangi.

### 2.3. Pembuktian

Untuk membuktikan bahwa rumus di atas valid, kita dapat menggunakan data historis emisi dari perusahaan yang telah menerapkan sistem ini. Misalnya, jika sebuah perusahaan memiliki emisi total $C = 1000$ ton CO2 dan telah mengurangi emisi sebesar $R = 0.2$, maka:

$$
E_{total} = 1000 - (1000 \cdot 0.2) = 800 \text{ ton CO2}
$$

Dan tokenisasi emisi karbon menjadi:

$$
T = \frac{1000}{800} = 1.25
$$

Ini menunjukkan bahwa untuk setiap ton emisi yang dikurangi, perusahaan memperoleh 1.25 token karbon.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Sumber Emisi**: Mengidentifikasi semua sumber emisi dalam rantai pasok.
2. **Pengumpulan Data**: Mengumpulkan data emisi dari setiap sumber menggunakan metode yang sesuai dengan GHG Protocol.
3. **Analisis Emisi**: Menghitung total emisi menggunakan rumus yang telah ditentukan.
4. **Implementasi Tokenisasi**: Menggunakan teknologi ledger berizin untuk tokenisasi emisi yang telah dikurangi.
5. **Verifikasi**: Melakukan verifikasi emisi menggunakan standar ISO 14064-3 dan GHG Protocol.

### 3.2. Diagram Alir Proses

```
[Identifikasi Sumber Emisi] --> [Pengumpulan Data] --> [Analisis Emisi] --> [Implementasi Tokenisasi] --> [Verifikasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan manufaktur memiliki tiga pemasok yang menghasilkan emisi sebagai berikut:

- Pemasok A: $E_{1} = 300$ ton CO2
- Pemasok B: $E_{2} = 500$ ton CO2
- Pemasok C: $E_{3} = 200$ ton CO2

### 4.2. Perhitungan

1. **Total Emisi**:
   $$
   C = E_{1} + E_{2} + E_{3} = 300 + 500 + 200 = 1000 \text{ ton CO2}
   $$

2. **Pengurangan Emisi**: Misalkan perusahaan menargetkan pengurangan emisi sebesar $R = 0.15$.
   $$
   E_{total} = C - (C \cdot R) = 1000 - (1000 \cdot 0.15) = 850 \text{ ton CO2}
   $$

3. **Tokenisasi**:
   $$
   T = \frac{C}{E_{total}} = \frac{1000}{850} \approx 1.176
   $$

### 4.3. Interpretasi Hasil

Hasil ini menunjukkan bahwa perusahaan dapat mengeluarkan 1.176 token karbon untuk setiap ton emisi yang telah dikurangi. Ini memberikan insentif bagi perusahaan untuk terus berinovasi dalam mengurangi emisi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan metode akuntansi karbon ter-tokenisasi tidak hanya relevan untuk sektor industri tetapi juga dapat diterapkan dalam sektor lain seperti transportasi, energi, dan pertanian. Interoperabilitas sistem antara berbagai sektor menjadi tantangan utama yang harus diatasi. Selain itu, integrasi teknologi otomatisasi dalam pengumpulan data emisi dapat meningkatkan efisiensi dan akurasi.

Batasan metodologi ini terletak pada ketergantungan pada data yang akurat dan dapat diandalkan dari berbagai sumber. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang dapat mengatasi masalah ini dan meningkatkan akurasi penghitungan emisi.

Arah riset masa depan dapat berfokus pada pengembangan sistem yang lebih terintegrasi dan berbasis AI untuk memprediksi emisi dan mengoptimalkan pengurangan emisi dalam rantai pasok. Dengan demikian, perusahaan tidak hanya dapat memenuhi regulasi tetapi juga berkontribusi pada keberlanjutan lingkungan secara keseluruhan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
