# 1241 — Pengembangan Sistem ORC Berbasis Algoritma Pembelajaran Mesin untuk Pemulihan Energi Panas Sisa

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Pengembangan Sistem ORC Berbasis Algoritma Pembelajaran Mesin untuk Pemulihan Energi Panas Sisa  
**Standar & Referensi Utama:** Chen, Y. et al. (2025). 'Machine Learning Approaches in Organic Rankine Cycle Systems'. Energy Reports, 2025; IEEE Access, 2024.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, efisiensi energi menjadi salah satu fokus utama dalam pengembangan sistem industri. Pemulihan energi panas sisa (Waste Heat Recovery/WHR) merupakan strategi yang sangat penting untuk meningkatkan efisiensi energi dalam proses industri. Menurut Chen et al. (2025), sistem Organic Rankine Cycle (ORC) telah terbukti efektif dalam memanfaatkan energi panas sisa untuk menghasilkan listrik. Namun, tantangan yang dihadapi dalam implementasi sistem ORC termasuk pengoptimalan kinerja dan pemilihan parameter operasional yang tepat.

Di banyak sektor industri, seperti manufaktur, pembangkit listrik, dan pengolahan bahan, energi panas sisa sering kali terbuang tanpa dimanfaatkan. Menurut laporan dari International Energy Agency (IEA), sekitar 20-50% energi yang digunakan dalam proses industri hilang sebagai panas sisa. Hal ini menunjukkan adanya potensi besar untuk meningkatkan efisiensi melalui pemulihan energi. Namun, tantangan yang dihadapi adalah kompleksitas dalam pengoperasian sistem ORC dan ketidakpastian dalam kondisi operasi yang bervariasi.

Penggunaan algoritma pembelajaran mesin dalam pengembangan sistem ORC dapat membantu dalam mengatasi tantangan ini dengan memprediksi kinerja sistem dan mengoptimalkan parameter operasional. Pembelajaran mesin memungkinkan analisis data yang lebih baik dan pengambilan keputusan yang lebih cepat, yang pada gilirannya dapat meningkatkan efisiensi dan mengurangi biaya operasional. Oleh karena itu, pengembangan sistem ORC berbasis algoritma pembelajaran mesin menjadi sangat relevan dan penting dalam konteks industri saat ini.

## 2. Landasan Teori & Formulasi Matematis

Sistem ORC beroperasi berdasarkan siklus termodinamika yang mirip dengan siklus Rankine konvensional, tetapi menggunakan fluida kerja organik dengan titik didih yang lebih rendah. Proses dasar dalam siklus ORC meliputi:

1. **Evaporasi**: Fluida kerja dipanaskan dan diuapkan.
2. **Ekspansi**: Uap yang dihasilkan menggerakkan turbin untuk menghasilkan listrik.
3. **Kondensasi**: Uap didinginkan dan dikondensasi kembali menjadi cairan.
4. **Pompa**: Cairan yang dihasilkan dipompa kembali ke evaporator.

Rumus dasar untuk efisiensi termal ($\eta$) dari siklus ORC dapat dinyatakan sebagai:

$$
\eta = \frac{W_{out}}{Q_{in}} = \frac{W_t - W_p}{Q_{in}}
$$

Di mana:
- $W_{out}$ = daya keluaran (output power)
- $Q_{in}$ = panas yang diterima dari sumber panas sisa
- $W_t$ = daya yang dihasilkan oleh turbin
- $W_p$ = daya yang digunakan oleh pompa

Selanjutnya, daya yang dihasilkan oleh turbin ($W_t$) dapat dihitung menggunakan rumus:

$$
W_t = \dot{m} \cdot (h_{in} - h_{out})
$$

Di mana:
- $\dot{m}$ = laju aliran massa fluida kerja
- $h_{in}$ = entalpi uap masuk ke turbin
- $h_{out}$ = entalpi uap keluar dari turbin

Untuk mengoptimalkan sistem ORC, algoritma pembelajaran mesin dapat digunakan untuk menganalisis data operasional dan memprediksi parameter yang optimal. Misalnya, model regresi dapat digunakan untuk memprediksi efisiensi berdasarkan variabel input seperti suhu dan tekanan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem ORC berbasis algoritma pembelajaran mesin dapat dilakukan melalui langkah-langkah berikut:

1. **Pengumpulan Data**: Mengumpulkan data operasional dari sistem ORC yang ada, termasuk suhu, tekanan, laju aliran massa, dan entalpi.
2. **Pra-Pemrosesan Data**: Membersihkan dan memformat data untuk analisis. Ini termasuk mengatasi data yang hilang dan normalisasi.
3. **Pengembangan Model Pembelajaran Mesin**: Memilih algoritma pembelajaran mesin yang sesuai (misalnya, regresi linier, pohon keputusan, atau jaringan saraf) dan melatih model menggunakan data yang telah diproses.
4. **Validasi Model**: Menggunakan teknik validasi silang untuk memastikan model tidak overfitting dan dapat memprediksi dengan akurat.
5. **Implementasi Model**: Mengintegrasikan model ke dalam sistem ORC untuk memprediksi parameter operasional yang optimal secara real-time.
6. **Monitoring dan Pemeliharaan**: Memantau kinerja sistem dan melakukan perbaikan atau pembaruan pada model sesuai kebutuhan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
Pengumpulan Data -> Pra-Pemrosesan Data -> Pengembangan Model -> Validasi Model -> Implementasi Model -> Monitoring
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang menggunakan sistem ORC untuk memanfaatkan panas sisa dari proses produksi. Misalkan data berikut tersedia:

- Laju aliran massa ($\dot{m}$) = 0.5 kg/s
- Entalpi uap masuk ($h_{in}$) = 2800 kJ/kg
- Entalpi uap keluar ($h_{out}$) = 2000 kJ/kg
- Panas yang diterima ($Q_{in}$) = 500 kW

Langkah perhitungan daya keluaran ($W_{out}$) adalah sebagai berikut:

1. Hitung daya yang dihasilkan oleh turbin ($W_t$):

$$
W_t = \dot{m} \cdot (h_{in} - h_{out}) = 0.5 \, \text{kg/s} \cdot (2800 - 2000) \, \text{kJ/kg} = 0.5 \cdot 800 = 400 \, \text{kW}
$$

2. Hitung daya yang digunakan oleh pompa ($W_p$). Misalkan daya pompa adalah 50 kW:

3. Hitung daya keluaran total ($W_{out}$):

$$
W_{out} = W_t - W_p = 400 \, \text{kW} - 50 \, \text{kW} = 350 \, \text{kW}
$$

4. Hitung efisiensi termal ($\eta$):

$$
\eta = \frac{W_{out}}{Q_{in}} = \frac{350 \, \text{kW}}{500 \, \text{kW}} = 0.7 \text{ atau } 70\%
$$

Dari perhitungan ini, dapat disimpulkan bahwa sistem ORC memiliki efisiensi 70%, yang menunjukkan potensi pemulihan energi yang signifikan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pengembangan sistem ORC berbasis algoritma pembelajaran mesin tidak hanya relevan dalam konteks pemulihan energi panas sisa, tetapi juga memiliki aplikasi luas di berbagai sektor. Dalam rantai pasok, efisiensi energi dapat mengurangi biaya operasional dan meningkatkan daya saing. Dalam otomasi, sistem ini dapat diintegrasikan dengan teknologi IoT untuk pengawasan dan pengendalian yang lebih baik.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada kualitas data dan kompleksitas model yang dapat mempengaruhi akurasi prediksi. Oleh karena itu, penelitian lebih lanjut diperlukan untuk meningkatkan algoritma dan teknik analisis data.

Arah riset masa depan dapat mencakup pengembangan model pembelajaran mendalam (deep learning) untuk meningkatkan akurasi prediksi dan penerapan teknik big data untuk analisis data dalam skala besar. Dengan demikian, sistem ORC berbasis algoritma pembelajaran mesin dapat menjadi solusi yang lebih efektif dan efisien dalam pemulihan energi panas sisa di industri.