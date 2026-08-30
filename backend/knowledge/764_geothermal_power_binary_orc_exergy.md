# 764 — Analisis Eksrgi Pembangkit Listrik Geothermal Brine Binary Organic Rankine Cycle (ORC): Ekstraksi Gas Non-Kondensabel (NCG), Desain Evaporator Titik Pincang, dan Mitigasi Skala Silika

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Geothermal Brine Binary Organic Rankine Cycle (ORC) Power Plant Exergy Analysis: Non-Condensable Gas (NCG) Extraction, Pinch Point Evaporator Design, and Silica Scale Mitigation  
**Standar & Referensi Utama:** DiPippo (Geothermal Power Plants: Principles, Applications, Case Studies, 4th Ed., Elsevier); ISO 14040; Geothermics (Elsevier)

---

## 1. Pendahuluan dan Konteks Industri

Pembangkit listrik geothermal menggunakan sumber daya panas bumi sebagai alternatif energi terbarukan yang berkelanjutan. Dalam konteks industri saat ini, kebutuhan akan energi bersih semakin mendesak, mengingat tantangan perubahan iklim dan penurunan cadangan energi fosil. Pembangkit listrik berbasis Binary Organic Rankine Cycle (ORC) menawarkan solusi efisien untuk memanfaatkan fluida geothermal dengan suhu rendah, yang sering kali mengandung gas non-kondensabel (NCG) dan silika. 

Ekstraksi NCG merupakan tantangan signifikan dalam operasi pembangkit listrik geothermal, karena gas ini dapat mengurangi efisiensi termal sistem dan menyebabkan masalah operasional. Selain itu, desain evaporator yang optimal sangat penting untuk meningkatkan efisiensi siklus ORC, di mana titik pincang (pinch point) harus diperhatikan untuk memaksimalkan transfer panas. Mitigasi skala silika juga menjadi isu penting, karena akumulasi silika dapat menghambat aliran dan mengurangi efisiensi sistem. 

Dengan demikian, analisis eksrgi dalam konteks ini menjadi penting untuk mengevaluasi kinerja sistem dan mengidentifikasi area perbaikan. Penelitian ini bertujuan untuk memberikan pemahaman mendalam tentang analisis eksrgi pada pembangkit listrik geothermal brine ORC, dengan fokus pada ekstraksi NCG, desain evaporator, dan mitigasi skala silika.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Konsep Eksrgi

Eksrgi didefinisikan sebagai ukuran dari potensi kerja yang dapat diekstraksi dari suatu sistem dalam kondisi tertentu. Dalam konteks pembangkit listrik, eksrgi dapat dihitung menggunakan rumus:

$$
E = H - T_0 S
$$

di mana:
- $E$ = eksrgi (kJ)
- $H$ = entalpi (kJ)
- $T_0$ = suhu lingkungan (K)
- $S$ = entropi (kJ/K)

### 2.2. Analisis Siklus ORC

Siklus ORC terdiri dari beberapa komponen utama: evaporator, turbin, kondensor, dan pompa. Proses dalam siklus ini dapat dinyatakan dengan persamaan energi:

$$
\dot{Q}_{in} - \dot{W}_{out} = \dot{Q}_{out} + \dot{W}_{in}
$$

di mana:
- $\dot{Q}_{in}$ = laju aliran panas masuk (kW)
- $\dot{W}_{out}$ = laju kerja keluar dari turbin (kW)
- $\dot{Q}_{out}$ = laju aliran panas keluar (kW)
- $\dot{W}_{in}$ = laju kerja yang digunakan oleh pompa (kW)

### 2.3. Desain Evaporator Titik Pincang

Desain evaporator harus mempertimbangkan titik pincang, yang merupakan titik di mana perbedaan suhu antara fluida kerja dan sumber panas minimum. Titik pincang dapat dihitung dengan:

$$
\Delta T_{min} = T_{hot} - T_{cold}
$$

di mana:
- $\Delta T_{min}$ = perbedaan suhu minimum (°C)
- $T_{hot}$ = suhu fluida panas (°C)
- $T_{cold}$ = suhu fluida dingin (°C)

### 2.4. Mitigasi Skala Silika

Mitigasi skala silika dapat dilakukan dengan mengontrol suhu dan konsentrasi silika dalam fluida geothermal. Rumus untuk menghitung konsentrasi silika dapat dinyatakan sebagai:

$$
C_{SiO_2} = \frac{m_{SiO_2}}{V}
$$

di mana:
- $C_{SiO_2}$ = konsentrasi silika (mg/L)
- $m_{SiO_2}$ = massa silika (mg)
- $V$ = volume fluida (L)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data suhu, tekanan, dan komposisi fluida geothermal.
2. **Analisis Eksrgi**: Hitung eksrgi dari setiap komponen menggunakan rumus yang telah dijelaskan.
3. **Desain Evaporator**: Tentukan titik pincang dan desain evaporator berdasarkan data yang diperoleh.
4. **Mitigasi Skala Silika**: Implementasikan strategi mitigasi berdasarkan konsentrasi silika yang terukur.
5. **Evaluasi Kinerja**: Bandingkan kinerja sistem sebelum dan sesudah implementasi.

### 3.2. Diagram Alir Proses

```plaintext
[Pengumpulan Data] --> [Analisis Eksrgi] --> [Desain Evaporator] --> [Mitigasi Skala Silika] --> [Evaluasi Kinerja]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

- Suhu fluida geothermal: $T_{hot} = 150°C$
- Suhu kondensasi: $T_{cold} = 30°C$
- Entalpi masuk: $H_{in} = 600 \, kJ/kg$
- Entropi masuk: $S_{in} = 1.8 \, kJ/K$

### 4.2. Perhitungan Eksrgi

1. Hitung eksrgi:

$$
E = H_{in} - T_0 S_{in}
$$

Dengan $T_0 = 303 \, K$ (30°C):

$$
E = 600 - 303 \times 1.8 = 600 - 545.4 = 54.6 \, kJ/kg
$$

2. Hitung laju kerja keluar dari turbin:

Misalkan $\dot{Q}_{in} = 100 \, kW$ dan $\dot{W}_{in} = 5 \, kW$:

$$
\dot{W}_{out} = \dot{Q}_{in} - \dot{Q}_{out} + \dot{W}_{in}
$$

Jika $\dot{Q}_{out} = 50 \, kW$:

$$
\dot{W}_{out} = 100 - 50 + 5 = 55 \, kW
$$

### 4.3. Interpretasi Hasil

Hasil analisis menunjukkan bahwa sistem ORC dapat menghasilkan 55 kW dari 100 kW input, dengan eksrgi 54.6 kJ/kg. Ini menunjukkan efisiensi yang baik, meskipun perlu ditangani masalah NCG dan skala silika untuk meningkatkan kinerja lebih lanjut.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis eksrgi dalam sistem ORC tidak hanya relevan untuk pembangkit listrik geothermal, tetapi juga dapat diterapkan dalam sektor lain seperti manajemen rantai pasok dan otomasi industri. Dalam konteks keberlanjutan, pendekatan ini sejalan dengan prinsip ISO 14040 yang menekankan pentingnya analisis siklus hidup (LCA) untuk mengurangi dampak lingkungan.

Batasan metodologi ini terletak pada asumsi ideal yang digunakan dalam perhitungan, yang mungkin tidak sepenuhnya mencerminkan kondisi nyata. Oleh karena itu, riset masa depan harus berfokus pada pengembangan model yang lebih akurat dan penerapan teknologi baru untuk mitigasi skala silika dan pengelolaan NCG.

Dengan demikian, pemahaman yang mendalam tentang analisis eksrgi dalam konteks pembangkit listrik geothermal ORC akan membuka peluang untuk inovasi dan efisiensi yang lebih besar dalam industri energi terbarukan.