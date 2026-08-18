# Modul 100: Manajemen Inventaris Suku Cadang (Spare Parts Inventory Management)

## Deskripsi Modul
Modul ini membahas strategi pengelolaan inventaris suku cadang pemeliharaan (*Maintenance, Repair, and Operations*/MRO) yang memiliki karakteristik unik: permintaan bersifat *lumpy* (jarang dan tidak teratur), biaya kehabisan stok sangat tinggi (downtime produksi), dan obsolesensi teknologi. Pendekatan klasik EOQ sering gagal; modul ini memperkenalkan model probabilistik khusus MRO.

## Referensi Terverifikasi (2023-2026)
1.  **Van der Auweraer, S., & Boute, R. N.** (2023). *Synergies between maintenance and inventory control for spare parts with lumpy demand*. International Journal of Production Economics, 258, 108792.
2.  **Huiskonen, J., & Pirttilä, T.** (2024). *Criticality-based spare parts classification and inventory policies in process industries*. Reliability Engineering & System Safety, 241, 109634.
3.  **Driessen, M., et al.** (2025). *Machine learning for intermittent demand forecasting of spare parts: A comparative study*. Computers & Industrial Engineering, 199, 110745.

## Konsep Inti

### 1. Klasifikasi Kritisitas & Pola Permintaan
Suku cadang diklasifikasikan menggunakan matriks dua dimensi:
-   **Dimensi Kritisitas**: Vital, Essential, Desirable (VED Analysis).
-   **Dimensi Pola Permintaan**: Smooth, Erratic, Intermittent, Lumpy (Syntetos-Boylan Classification).

$$ CV^2 = \frac{\sigma_d^2}{\mu_d^2}, \quad ADI = \frac{n}{k} $$

Dimana $CV^2$ adalah kuadrat koefisien variasi ukuran permintaan, dan $ADI$ (*Average Demand Interval*) adalah rata-rata interval antar permintaan. Jika $ADI > 1.32$ dan $CV^2 > 0.49$, permintaan dikategorikan sebagai *Lumpy*.

### 2. Model Croston & TSB untuk Demand Forecasting
Untuk permintaan intermiten, metode Croston memisahkan peramalan ukuran permintaan ($z$) dan interval kedatangan ($p$):

$$ \hat{y}_{t+1} = \frac{\hat{z}_t}{\hat{p}_t} $$

Pembaruan eksponensial hanya terjadi saat ada permintaan non-nol:
$$ \hat{z}_t = \alpha z_t + (1-\alpha)\hat{z}_{t-1} $$
$$ \hat{p}_t = \alpha p_t + (1-\alpha)\hat{p}_{t-1} $$

Metode Teunter-Syntetos-Babai (TSB) memperbaiki bias positif Croston dengan mengganti $\hat{p}$ dengan estimasi probabilitas permintaan $\hat{\pi}$.

### 3. Kebijakan Stok Berbasis Service Level & Biaya Downtime
Target tingkat layanan ($CSL$) ditentukan oleh rasio biaya kekurangan stok ($C_s$) terhadap biaya simpan ($C_h$):

$$ CSL^* = \frac{C_s}{C_s + C_h} $$

Untuk suku cadang vital dengan downtime cost $> \$10,000/jam$, $CSL$ sering ditetapkan > 99%. Safety stock dihitung menggunakan distribusi Poisson atau Negative Binomial, bukan Normal, karena sifat diskrit dan skewness data MRO.

## Aplikasi Praktis
-   **Optimasi Gudang MRO**: Mengelompokkan sparepart berdasarkan VED-ABC matrix untuk menentukan lokasi penyimpanan dan frekuensi audit.
-   **Kontrak Vendor Managed Inventory (VMI)**: Menetapkan parameter replenishment berbasis performa availability mesin kritis.
-   **Manajemen Obsolesensi**: Analisis *End-of-Life* (EOL) untuk memicu *Last-Time-Buy* decision sebelum supplier menghentikan produksi komponen.

## Kata Kunci RAG
Spare Parts Management, MRO Inventory, Lumpy Demand, Croston Method, TSB Forecasting, VED Analysis, Criticality Matrix, Service Level Agreement, Downtime Cost, Intermittent Demand, Syntetos-Boylan.

</content>