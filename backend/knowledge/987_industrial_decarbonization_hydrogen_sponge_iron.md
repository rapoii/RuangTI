# 987 — Transisi Hijau Baja: Pengurangan Besi Langsung Hidrogen (H-DRI) melalui Kinetic Shaft Furnace

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Green Steel Hydrogen Direct Reduced Iron (H-DRI) Transition: Kinetic Shaft Furnace Reduction, Green Hydrogen Consumption (kg H2/t DRI), and CAPEX/OPEX Parity Timeline Modeling  
**Standar & Referensi Utama:** IEA Iron and Steel Technology Roadmap; Rissman et al. (2020, Applied Energy); Metallurgical and Materials Transactions B

---

## 1. Pendahuluan dan Konteks Industri

Industri baja merupakan salah satu sektor yang paling signifikan dalam emisi karbon dioksida global, menyumbang sekitar 7% dari total emisi. Dalam konteks perubahan iklim dan transisi energi, pengurangan emisi dalam proses produksi baja menjadi sangat mendesak. Transisi menuju produksi baja hijau, khususnya melalui metode Hydrogen Direct Reduced Iron (H-DRI), menawarkan solusi yang menjanjikan. Proses H-DRI memanfaatkan hidrogen sebagai reduktor, menggantikan karbon yang tradisional digunakan, sehingga dapat mengurangi emisi CO2 secara drastis.

Namun, tantangan utama dalam implementasi H-DRI adalah kebutuhan akan infrastruktur yang memadai dan biaya yang terkait dengan produksi hidrogen hijau. Menurut IEA Iron and Steel Technology Roadmap, untuk mencapai target emisi yang ditetapkan, industri baja harus berinvestasi dalam teknologi baru dan mengadopsi praktik berkelanjutan. Rissman et al. (2020) menekankan bahwa meskipun ada potensi besar dalam penggunaan hidrogen, tantangan teknis dan ekonomi harus diatasi untuk mencapai paritas CAPEX/OPEX dalam jangka waktu yang wajar.

Dalam konteks ini, pemodelan waktu paritas CAPEX/OPEX menjadi penting untuk mengevaluasi kelayakan investasi dalam teknologi H-DRI. Selain itu, pemahaman tentang konsumsi hidrogen per ton DRI (kg H2/t DRI) dan efisiensi proses pengurangan dalam Kinetic Shaft Furnace juga menjadi kunci dalam mendorong transisi ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Proses Pengurangan Besi

Proses pengurangan besi dalam H-DRI dapat dijelaskan dengan reaksi kimia berikut:

$$
\text{Fe}_2\text{O}_3 + 3\text{H}_2 \rightarrow 2\text{Fe} + 3\text{H}_2\text{O}
$$

Reaksi ini menunjukkan bahwa dua mol Fe2O3 dapat direduksi menjadi dua mol Fe dengan menggunakan tiga mol H2. Dari reaksi ini, kita dapat menghitung konsumsi hidrogen yang diperlukan untuk menghasilkan satu ton DRI.

### 2.2. Konsumsi Hidrogen

Konsumsi hidrogen per ton DRI dapat dihitung dengan menggunakan stoikiometri dari reaksi di atas. Jika kita menganggap massa molar Fe2O3 adalah 159.69 g/mol dan Fe adalah 55.85 g/mol, maka:

1. Hitung jumlah mol Fe yang dihasilkan dari 1 ton (1000 kg) DRI:
   - Massa 1 ton DRI dalam gram: 1000 kg = 1,000,000 g
   - Jumlah mol Fe: 
   $$
   n_{\text{Fe}} = \frac{1,000,000 \text{ g}}{55.85 \text{ g/mol}} \approx 17,891.2 \text{ mol}
   $$

2. Dari reaksi, kita tahu bahwa untuk setiap 2 mol Fe, dibutuhkan 3 mol H2. Maka, jumlah mol H2 yang dibutuhkan adalah:
   $$
   n_{\text{H}_2} = \frac{3}{2} \times n_{\text{Fe}} \approx \frac{3}{2} \times 17,891.2 \approx 26,836.8 \text{ mol}
   $$

3. Menghitung massa H2 yang dibutuhkan:
   - Massa molar H2 adalah 2.02 g/mol, sehingga:
   $$
   m_{\text{H}_2} = n_{\text{H}_2} \times 2.02 \text{ g/mol} \approx 26,836.8 \times 2.02 \approx 54,189.4 \text{ g} \approx 54.19 \text{ kg}
   $$

Jadi, konsumsi hidrogen per ton DRI adalah sekitar 54.19 kg H2/t DRI.

### 2.3. Model CAPEX/OPEX

Model CAPEX (Capital Expenditure) dan OPEX (Operational Expenditure) dapat dinyatakan sebagai fungsi dari berbagai parameter, termasuk biaya investasi awal, biaya operasional, dan efisiensi proses. Model ini dapat ditulis sebagai:

$$
\text{Total Cost} = \text{CAPEX} + \text{OPEX} \times t
$$

Di mana:
- CAPEX adalah biaya investasi awal,
- OPEX adalah biaya operasional per tahun,
- \( t \) adalah waktu dalam tahun.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Kelayakan**: Melakukan studi kelayakan untuk menentukan biaya dan manfaat dari investasi dalam teknologi H-DRI.
2. **Desain Proses**: Mendesain sistem Kinetic Shaft Furnace yang efisien untuk pengurangan besi.
3. **Pengadaan Bahan Baku**: Memastikan ketersediaan dan keberlanjutan sumber hidrogen hijau.
4. **Pengujian Prototipe**: Melakukan pengujian pada skala laboratorium untuk mengoptimalkan proses.
5. **Implementasi Skala Penuh**: Membangun fasilitas produksi H-DRI dan memulai operasi.

### 3.2. Diagram Alir Proses

Diagram alir proses H-DRI dapat digambarkan sebagai berikut:

```
[Pengadaan Bahan Baku] --> [Desain Proses] --> [Pengujian Prototipe] --> [Implementasi Skala Penuh]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan

Misalkan sebuah pabrik baja berencana untuk memproduksi 100,000 ton DRI per tahun. Dengan konsumsi hidrogen yang telah dihitung sebelumnya, kita dapat menghitung total konsumsi hidrogen tahunan.

$$
\text{Total H}_2 = 100,000 \text{ ton} \times 54.19 \text{ kg/t} = 5,419,000 \text{ kg} \approx 5,419 \text{ ton}
$$

### 4.2. Evaluasi Biaya

Jika biaya hidrogen hijau adalah $3.00/kg, maka total biaya hidrogen per tahun adalah:

$$
\text{Total Biaya H}_2 = 5,419,000 \text{ kg} \times 3.00 \text{ USD/kg} = 16,257,000 \text{ USD}
$$

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Transisi menuju H-DRI tidak hanya berdampak pada industri baja, tetapi juga memiliki implikasi luas di sektor lain seperti rantai pasok, manajemen biaya, dan keberlanjutan. Dengan meningkatnya permintaan akan produk baja yang ramah lingkungan, perusahaan harus beradaptasi dengan cepat untuk tetap kompetitif.

Keterkaitan dengan disiplin lain seperti Supply Chain Management dan Teknik Otomasi juga penting, karena efisiensi dalam rantai pasok dapat mengurangi biaya dan meningkatkan keberlanjutan. Selain itu, penelitian lebih lanjut diperlukan untuk mengatasi batasan metodologi saat ini dan mengeksplorasi inovasi baru dalam teknologi pengurangan besi.

Dalam jangka panjang, arah riset masa depan harus fokus pada pengembangan teknologi yang lebih efisien dan berkelanjutan, serta pengurangan biaya produksi untuk mencapai paritas CAPEX/OPEX yang diinginkan.