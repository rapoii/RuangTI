# 861 — Evaluasi Eksoskeleton Industri Anggota Atas: Kuantifikasi Kelelahan Otot Elektromiografi (EMG), Pengurangan Kompresi Spinal, dan Pengujian Kelayakan ISO 18646

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Passive and Active Upper-Limb Industrial Exoskeleton Evaluation: Electromyography (EMG) Muscle Fatigue Quantification, Spinal Compression Reduction, and ISO 18646 Usability Testing  
**Standar & Referensi Utama:** de Looze et al. (2022, Appl. Ergon.); ISO 18646; Chaffin, Andersson & Martin (Occupational Biomechanics, Wiley)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, penggunaan teknologi canggih seperti eksoskeleton industri menjadi semakin penting untuk meningkatkan produktivitas dan keselamatan kerja. Eksoskeleton, baik pasif maupun aktif, dirancang untuk mendukung anggota tubuh pekerja, khususnya lengan atas, dalam melakukan tugas-tugas berat yang dapat menyebabkan kelelahan otot dan cedera. Menurut de Looze et al. (2022), kelelahan otot merupakan salah satu penyebab utama cedera musculoskeletal di tempat kerja, yang dapat mengakibatkan biaya yang signifikan bagi perusahaan dan mengurangi efisiensi operasional.

Tantangan yang dihadapi dalam manufaktur modern meliputi kebutuhan untuk meningkatkan efisiensi sambil meminimalkan risiko cedera. Dengan meningkatnya permintaan untuk produk berkualitas tinggi dan pengurangan waktu siklus produksi, pekerja sering kali dihadapkan pada beban kerja yang berat dan repetitif. Hal ini menyebabkan peningkatan kompresi spinal dan kelelahan otot, yang dapat mengarah pada absensi dan penurunan produktivitas. Oleh karena itu, evaluasi eksoskeleton industri menjadi krusial untuk memastikan bahwa teknologi ini efektif dalam mengurangi kelelahan otot dan meningkatkan kenyamanan serta keselamatan pekerja.

Dalam konteks ini, ISO 18646 memberikan panduan untuk pengujian dan evaluasi eksoskeleton, memastikan bahwa produk yang dihasilkan memenuhi standar keselamatan dan kinerja yang diperlukan. Dengan demikian, penelitian ini bertujuan untuk mengevaluasi efektivitas eksoskeleton industri dalam mengurangi kelelahan otot menggunakan teknik elektromiografi (EMG) dan mengukur pengurangan kompresi spinal, serta melakukan pengujian kelayakan sesuai dengan standar ISO 18646.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Elektromiografi (EMG)

Elektromiografi (EMG) adalah teknik yang digunakan untuk merekam aktivitas listrik otot. Aktivitas ini dapat digunakan untuk mengukur kelelahan otot dengan menganalisis sinyal EMG. Sinyal EMG dapat dinyatakan dalam bentuk:

$$
EMG(t) = A \cdot \sin(2\pi f t + \phi)
$$

di mana:
- \( A \) adalah amplitudo sinyal,
- \( f \) adalah frekuensi,
- \( \phi \) adalah fase,
- \( t \) adalah waktu.

### 2.2. Kuantifikasi Kelelahan Otot

Kelelahan otot dapat diukur dengan menggunakan rasio antara amplitudo sinyal EMG saat awal dan saat akhir aktivitas. Rasio ini dapat dinyatakan sebagai:

$$
Fatigue\ Ratio = \frac{EMG_{initial}}{EMG_{final}}
$$

### 2.3. Pengurangan Kompresi Spinal

Pengurangan kompresi spinal dapat dihitung dengan menggunakan model biomekanik yang mempertimbangkan gaya yang diterapkan pada tulang belakang. Gaya kompresi pada tulang belakang dapat dinyatakan dengan persamaan:

$$
F_{compression} = m \cdot g + F_{external}
$$

di mana:
- \( m \) adalah massa beban,
- \( g \) adalah percepatan gravitasi,
- \( F_{external} \) adalah gaya eksternal yang diterapkan oleh eksoskeleton.

### 2.4. Standar ISO 18646

ISO 18646 menetapkan kriteria untuk evaluasi eksoskeleton, termasuk pengujian kenyamanan, efektivitas, dan dampak ergonomis. Evaluasi ini mencakup pengukuran kinerja eksoskeleton dalam kondisi kerja nyata dan umpan balik dari pengguna.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Persiapan Alat dan Bahan**: Siapkan eksoskeleton, alat EMG, dan perangkat pengukur kompresi spinal.
2. **Pengujian Awal**: Lakukan pengujian awal untuk mendapatkan baseline data EMG dan kompresi spinal tanpa eksoskeleton.
3. **Pemasangan Eksoskeleton**: Pasang eksoskeleton pada subjek uji dan pastikan penyesuaian yang tepat.
4. **Pengujian dengan Eksoskeleton**: Lakukan tugas-tugas yang sama dengan dan tanpa eksoskeleton, sambil merekam data EMG dan kompresi spinal.
5. **Analisis Data**: Hitung rasio kelelahan otot dan gaya kompresi spinal menggunakan rumus yang telah ditentukan.
6. **Evaluasi Kelayakan**: Lakukan pengujian kelayakan sesuai dengan ISO 18646, termasuk umpan balik dari pengguna.

### 3.2. Diagram Alir Proses

```plaintext
[Persiapan Alat] --> [Pengujian Awal] --> [Pemasangan Eksoskeleton] --> [Pengujian dengan Eksoskeleton] --> [Analisis Data] --> [Evaluasi Kelayakan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki seorang pekerja yang mengangkat beban 10 kg dengan dan tanpa eksoskeleton. Kita akan menghitung gaya kompresi spinal dan rasio kelelahan otot.

### 4.2. Input Parameter

- Massa beban (\( m \)): 10 kg
- Percepatan gravitasi (\( g \)): 9.81 m/s²
- Amplitudo sinyal EMG awal (\( EMG_{initial} \)): 2.5 mV
- Amplitudo sinyal EMG akhir (\( EMG_{final} \)): 1.5 mV

### 4.3. Langkah Kalkulasi

1. **Hitung Gaya Kompresi Spinal**:

   $$ 
   F_{compression} = m \cdot g = 10 \, \text{kg} \cdot 9.81 \, \text{m/s}^2 = 98.1 \, \text{N} 
   $$

2. **Hitung Rasio Kelelahan Otot**:

   $$
   Fatigue\ Ratio = \frac{EMG_{initial}}{EMG_{final}} = \frac{2.5 \, \text{mV}}{1.5 \, \text{mV}} \approx 1.67
   $$

### 4.4. Interpretasi Hasil

Hasil menunjukkan bahwa gaya kompresi spinal yang diterima pekerja adalah 98.1 N, yang menunjukkan beban yang signifikan. Rasio kelelahan otot sebesar 1.67 menunjukkan bahwa terdapat penurunan yang cukup besar dalam aktivitas otot, yang dapat diindikasikan sebagai kelelahan otot yang tinggi. Dengan menggunakan eksoskeleton, diharapkan nilai ini dapat diminimalkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Eksoskeleton industri memiliki aplikasi luas tidak hanya dalam manufaktur, tetapi juga dalam sektor kesehatan, konstruksi, dan logistik. Dalam konteks rantai pasok, penggunaan eksoskeleton dapat meningkatkan efisiensi dan mengurangi biaya terkait cedera. Dalam hal otomasi, eksoskeleton dapat berfungsi sebagai alat bantu untuk pekerja dalam melakukan tugas-tugas berat, mengurangi beban kerja fisik.

Namun, terdapat batasan dalam metodologi yang digunakan, seperti variabilitas individu dalam respons terhadap eksoskeleton dan kondisi kerja yang berbeda. Penelitian lebih lanjut diperlukan untuk mengeksplorasi dampak jangka panjang dari penggunaan eksoskeleton terhadap kesehatan pekerja dan produktivitas.

Arah riset masa depan dapat mencakup pengembangan eksoskeleton yang lebih ringan dan lebih ergonomis, serta integrasi teknologi sensor untuk pemantauan real-time terhadap kelelahan otot dan kompresi spinal. Dengan demikian, eksoskeleton dapat menjadi alat yang lebih efektif dalam meningkatkan keselamatan dan efisiensi kerja di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
