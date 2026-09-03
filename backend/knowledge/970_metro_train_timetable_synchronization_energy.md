# 970 — Sinkronisasi Jadwal Transit Rel Metro Perkotaan untuk Maksimalisasi Energi Rem Regeneratif: Tumpang Tindih Akselerasi-Deselerasi, Uniformitas Headway, dan Penangkapan Substasi Baterai

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Urban Metro Rail Transit Timetable Synchronization for Regenerative Braking Energy Maximization: Acceleration-Deceleration Overlapping, Headway Uniformity, and Battery Substation Capture  
**Standar & Referensi Utama:** Corman et al. (Transp. Res. Part B); Vuchic (Urban Transit: Operations, Planning and Economics, Wiley); IEEE Trans. Intell. Transp. Syst.

---

## 1. Pendahuluan dan Konteks Industri

Sistem transportasi rel perkotaan memainkan peran penting dalam mobilitas masyarakat di kota-kota besar. Dengan meningkatnya kepadatan penduduk dan kebutuhan akan transportasi yang efisien, tantangan dalam pengoperasian sistem metro semakin kompleks. Dalam konteks ini, sinkronisasi jadwal menjadi krusial untuk meningkatkan efisiensi operasional dan mengurangi biaya. Salah satu aspek penting dari sinkronisasi jadwal adalah pemanfaatan energi rem regeneratif, yang dapat mengurangi konsumsi energi dan emisi karbon.

Energi rem regeneratif adalah energi yang dihasilkan saat kereta melambat dan dapat disimpan untuk digunakan kembali. Namun, untuk memaksimalkan potensi energi ini, perlu adanya tumpang tindih antara fase akselerasi dan deselerasi kereta, serta pengaturan headway yang seragam. Tantangan yang dihadapi dalam implementasi ini meliputi variabilitas waktu perjalanan, ketidakpastian dalam permintaan penumpang, dan keterbatasan infrastruktur. Oleh karena itu, penelitian ini bertujuan untuk mengembangkan metodologi yang sistematis untuk sinkronisasi jadwal yang mempertimbangkan faktor-faktor tersebut, serta memberikan panduan untuk implementasi di lapangan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Notasi dan Definisi Variabel

- $v$: Kecepatan kereta (m/s)
- $a$: Akselerasi (m/s²)
- $d$: Jarak tempuh (m)
- $t$: Waktu (s)
- $H$: Headway (s)
- $E_{regen}$: Energi rem regeneratif (J)
- $E_{batt}$: Energi yang disimpan di substasi baterai (J)

### 2.2. Rumus Akselerasi dan Deselerasi

Akselerasi dan deselerasi kereta dapat dijelaskan dengan rumus dasar kinematika:

$$ d = v_0 t + \frac{1}{2} a t^2 $$

Di mana $v_0$ adalah kecepatan awal. Untuk fase deselerasi, rumus yang sama berlaku dengan $a$ sebagai nilai negatif.

### 2.3. Energi Rem Regeneratif

Energi yang dihasilkan selama fase deselerasi dapat dihitung dengan rumus:

$$ E_{regen} = \frac{1}{2} m v^2 $$

Di mana $m$ adalah massa kereta (kg). Energi ini dapat disimpan dalam substasi baterai dengan efisiensi $\eta$:

$$ E_{batt} = \eta E_{regen} $$

### 2.4. Tumpang Tindih Akselerasi-Deselerasi

Untuk memaksimalkan $E_{regen}$, perlu ada tumpang tindih antara fase akselerasi dan deselerasi dari kereta yang berdekatan. Tumpang tindih ini dapat dinyatakan dengan:

$$ t_{overlap} = t_{acc} + t_{dec} - H $$

Di mana $t_{acc}$ adalah waktu akselerasi dan $t_{dec}$ adalah waktu deselerasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Data Awal**: Kumpulkan data historis tentang waktu perjalanan, kecepatan, dan pola permintaan penumpang.
2. **Modeling**: Kembangkan model matematis untuk mensimulasikan tumpang tindih akselerasi-deselerasi dan headway.
3. **Optimasi**: Gunakan algoritma optimasi untuk menentukan jadwal yang memaksimalkan $E_{regen}$.
4. **Implementasi**: Terapkan jadwal yang dioptimalkan dalam sistem operasional.
5. **Monitoring dan Evaluasi**: Lakukan monitoring berkelanjutan untuk mengevaluasi kinerja dan melakukan penyesuaian jika diperlukan.

### 3.2. Diagram Alir Proses

```plaintext
[Analisis Data] --> [Modeling] --> [Optimasi] --> [Implementasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

- Massa kereta ($m$): 50,000 kg
- Kecepatan maksimum ($v$): 30 m/s
- Akselerasi ($a$): 1 m/s²
- Deselerasi ($a_{dec}$): 1.5 m/s²
- Efisiensi ($\eta$): 0.8
- Headway ($H$): 120 s

### 4.2. Langkah Perhitungan

1. **Hitung waktu akselerasi ($t_{acc}$)**:

$$ t_{acc} = \frac{v}{a} = \frac{30}{1} = 30 \text{ s} $$

2. **Hitung waktu deselerasi ($t_{dec}$)**:

$$ t_{dec} = \frac{v}{a_{dec}} = \frac{30}{1.5} = 20 \text{ s} $$

3. **Hitung energi rem regeneratif ($E_{regen}$)**:

$$ E_{regen} = \frac{1}{2} m v^2 = \frac{1}{2} \times 50000 \times 30^2 = 22500000 \text{ J} $$

4. **Hitung energi yang disimpan di substasi baterai ($E_{batt}$)**:

$$ E_{batt} = \eta E_{regen} = 0.8 \times 22500000 = 18000000 \text{ J} $$

5. **Hitung tumpang tindih ($t_{overlap}$)**:

$$ t_{overlap} = t_{acc} + t_{dec} - H = 30 + 20 - 120 = -70 \text{ s} $$

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa tidak ada tumpang tindih antara fase akselerasi dan deselerasi, yang mengindikasikan bahwa jadwal perlu disesuaikan untuk meningkatkan efisiensi energi. Dengan mengurangi headway atau meningkatkan akselerasi/deselerasi, potensi energi rem regeneratif dapat dimaksimalkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sinkronisasi jadwal tidak hanya relevan untuk sistem transportasi rel, tetapi juga dapat diterapkan dalam konteks rantai pasok dan otomasi industri. Dalam konteks rantai pasok, efisiensi waktu dan energi dapat meningkatkan produktivitas dan mengurangi biaya operasional. Selain itu, penerapan teknologi K3 dan ESG dapat memperkuat keberlanjutan operasional.

Batasan metodologi ini mencakup ketidakpastian dalam permintaan penumpang dan variabilitas waktu perjalanan yang dapat mempengaruhi hasil. Oleh karena itu, penelitian masa depan perlu fokus pada pengembangan model yang lebih adaptif dan responsif terhadap perubahan kondisi operasional.

Dengan demikian, sinkronisasi jadwal dalam sistem transportasi rel perkotaan tidak hanya berkontribusi pada efisiensi energi, tetapi juga pada keberlanjutan dan efektivitas operasional secara keseluruhan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
