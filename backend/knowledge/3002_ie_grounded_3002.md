# 3002 — Model Aliran Aksisimetri dalam Proses Ekstraksi Minyak Ganja Menggunakan Supercritical Fluid Extraction CO2

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process  
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)  
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Proses ekstraksi minyak dari tanaman ganja menggunakan supercritical carbon dioxide (CO2) telah menjadi topik yang semakin relevan dalam industri ekstraksi dan pengolahan bahan alami. Dengan meningkatnya permintaan akan produk berbasis ganja, baik untuk keperluan medis maupun rekreasional, efisiensi dan efektivitas proses ekstraksi menjadi sangat penting. Menurut Obchoei dan Limtrakarn (2024), model aliran aksisimetri yang diusulkan dalam penelitian mereka memberikan wawasan baru tentang bagaimana aliran CO2 supercritical dapat dioptimalkan untuk meningkatkan hasil ekstraksi minyak ganja. Proses ini tidak hanya berfokus pada hasil akhir, tetapi juga pada pengurangan waktu dan biaya operasional, yang merupakan faktor kunci dalam daya saing industri.

Dalam konteks industri, efisiensi proses ekstraksi dapat berkontribusi pada pengurangan limbah dan penggunaan energi yang lebih baik, yang sejalan dengan prinsip keberlanjutan. Penelitian oleh Toledo dan del Valle (2023) juga menyoroti pentingnya pemahaman tentang transfer panas dalam tahap penekanan, ekstraksi, dan dekompresi, yang merupakan bagian integral dari proses ekstraksi CO2 supercritical. Dengan menggabungkan kedua penelitian ini, kita dapat melihat gambaran yang lebih besar tentang bagaimana teknologi ini dapat diimplementasikan secara efektif dalam industri, serta tantangan yang mungkin dihadapi.

Kebutuhan untuk mengembangkan model yang lebih akurat dan efisien dalam proses ekstraksi ini menjadi semakin mendesak, mengingat potensi pasar yang terus berkembang. Oleh karena itu, pemahaman mendalam tentang mekanisme aliran dan transfer panas dalam sistem ekstraksi CO2 supercritical sangat penting untuk meningkatkan produktivitas dan efisiensi biaya.

## 2. Landasan Teori & Formulasi Matematis

Model aliran aksisimetri yang diusulkan dalam penelitian oleh Obchoei dan Limtrakarn (2024) berfokus pada dinamika aliran CO2 supercritical dalam proses ekstraksi. Model ini mengasumsikan bahwa aliran dapat diperlakukan sebagai aliran fluida ideal dalam geometri silindris. Persamaan dasar yang digunakan dalam model ini meliputi persamaan kontinuitas, persamaan momentum, dan persamaan energi.

Persamaan kontinuitas untuk aliran fluida dapat dinyatakan sebagai:

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0
$$

Di mana $\rho$ adalah densitas fluida dan $\mathbf{u}$ adalah vektor kecepatan aliran.

Persamaan momentum dapat dituliskan sebagai:

$$
\frac{\partial (\rho \mathbf{u})}{\partial t} + \nabla \cdot (\rho \mathbf{u} \mathbf{u}) = -\nabla P + \nabla \cdot (\mu \nabla \mathbf{u}) + \mathbf{F}
$$

Di mana $P$ adalah tekanan, $\mu$ adalah viskositas, dan $\mathbf{F}$ adalah gaya luar yang bekerja pada fluida.

Persamaan energi untuk aliran dapat dituliskan sebagai:

$$
\frac{\partial (\rho e)}{\partial t} + \nabla \cdot (\rho e \mathbf{u}) = -\nabla \cdot (k \nabla T) + Q
$$

Di mana $e$ adalah energi internal, $k$ adalah konduktivitas termal, $T$ adalah suhu, dan $Q$ adalah laju pemanasan.

Model ini juga mempertimbangkan efek transfer panas selama proses ekstraksi, yang sangat penting untuk meningkatkan efisiensi proses. Dalam penelitian oleh Toledo dan del Valle (2023), mereka mengembangkan model transfer panas yang mengintegrasikan efek konduksi, konveksi, dan radiasi dalam sistem ekstraksi CO2 supercritical.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem ekstraksi minyak ganja menggunakan model aliran aksisimetri memerlukan langkah-langkah yang sistematis dan terstandarisasi. Langkah-langkah tersebut meliputi:

1. **Persiapan Bahan Baku:** Memastikan bahwa bahan baku (ganja) dalam kondisi optimal untuk ekstraksi, termasuk pengeringan dan penggilingan.

2. **Pengaturan Parameter Proses:** Menentukan parameter proses seperti tekanan, suhu, dan laju aliran CO2 sesuai dengan model yang telah dikembangkan.

3. **Ekstraksi:** Melakukan proses ekstraksi dengan menggunakan sistem ekstraksi CO2 supercritical yang telah dirancang. Memantau parameter aliran dan transfer panas secara real-time.

4. **Dekomposisi dan Pemisahan:** Setelah proses ekstraksi selesai, mengurangi tekanan secara bertahap untuk memisahkan minyak dari CO2.

5. **Analisis Hasil:** Mengukur hasil ekstraksi dan mengevaluasi efisiensi proses berdasarkan data yang diperoleh.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Persiapan Bahan Baku] → [Pengaturan Parameter Proses] → [Ekstraksi] → [Dekomposisi] → [Analisis Hasil]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita lakukan perhitungan untuk proses ekstraksi minyak ganja dengan parameter berikut:

- Densitas CO2 supercritical ($\rho$): 800 kg/m³
- Viskositas ($\mu$): 0.1 mPa.s
- Tekanan ($P$): 100 bar
- Suhu ($T$): 40 °C
- Laju aliran ($Q$): 10 L/jam

Langkah 1: Menghitung laju aliran massa CO2

$$
\dot{m} = Q \cdot \rho = 10 \, \text{L/jam} \cdot 800 \, \text{kg/m}^3 = 8 \, \text{kg/jam}
$$

Langkah 2: Menghitung gaya yang bekerja pada fluida

$$
F = \dot{m} \cdot a
$$

Dengan asumsi percepatan ($a$) adalah 1 m/s², maka:

$$
F = 8 \, \text{kg/jam} \cdot 1 \, \text{m/s}^2 = 8 \, \text{N}
$$

Langkah 3: Menghitung efisiensi ekstraksi

Jika hasil ekstraksi minyak adalah 1 kg dari 8 kg CO2 yang digunakan, maka efisiensi ekstraksi ($\eta$) dapat dihitung sebagai:

$$
\eta = \frac{\text{Hasil Ekstraksi}}{\text{Total CO2}} = \frac{1 \, \text{kg}}{8 \, \text{kg}} = 0.125 \, (12.5\%)
$$

Interpretasi hasil menunjukkan bahwa efisiensi ekstraksi masih dapat ditingkatkan, dan langkah-langkah perbaikan dapat dilakukan berdasarkan model aliran yang telah dikembangkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun model aliran aksisimetri yang diusulkan oleh Obchoei dan Limtrakarn (2024) memberikan wawasan baru, terdapat beberapa batasan yang perlu diperhatikan. Model ini mungkin tidak sepenuhnya mencakup kompleksitas aliran dalam skala industri, terutama dalam hal variasi geometri dan kondisi operasional yang berbeda. Selain itu, perbandingan dengan metode konvensional seperti ekstraksi pelarut menunjukkan bahwa meskipun ekstraksi CO2 supercritical lebih ramah lingkungan, biaya awal investasi dan operasional masih menjadi tantangan.

Aplikasi lintas sektor dari teknologi ini dapat mencakup ekstraksi bahan aktif dari tanaman lain, seperti herbal dan rempah-rempah, serta dalam industri farmasi untuk ekstraksi senyawa bioaktif. Agenda riset lanjutan harus fokus pada pengembangan teknologi yang lebih efisien, pengurangan biaya, dan peningkatan pemahaman tentang mekanisme aliran dan transfer panas dalam sistem ekstraksi.

Dengan demikian, penelitian ini tidak hanya memberikan kontribusi pada pengembangan teknologi ekstraksi, tetapi juga membuka jalan bagi inovasi dan keberlanjutan dalam industri pengolahan bahan alami.