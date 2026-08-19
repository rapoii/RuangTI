# Modul 75: Additive Manufacturing dalam Rantai Pasok

## 1. Definisi dan Paradigma Baru
**Additive Manufacturing (AM)** atau pencetakan 3D mengubah paradigma rantai pasok dari *make-to-stock* menjadi *make-to-order* atau bahkan *print-on-demand*. Dalam konteks Teknik Industri, AM bukan sekadar teknologi produksi, melainkan **enabler restrukturisasi rantai pasok** yang memungkinkan desentralisasi produksi, reduksi inventori, dan kustomisasi massal.

## 2. Dampak Strategis pada Supply Chain
### 2.1 Konsolidasi Komponen
AM memungkinkan penggabungan banyak komponen rakitan menjadi satu bagian tunggal (*part consolidation*). Hal ini mengurangi:
- Jumlah SKU yang harus dikelola
- Kompleksitas perakitan
- Risiko kegagalan sambungan

### 2.2 Digital Inventory & Spare Parts
Konsep "Digital Warehouse" menggantikan gudang fisik untuk suku cadang jarang pakai (*slow-moving items*). File CAD disimpan secara digital dan dicetak hanya saat dibutuhkan.

$$
TC_{digital} = C_{storage\_digital} + \sum_{t=1}^{T} (C_{print} \cdot D_t)
$$

Dimana $TC_{digital}$ jauh lebih rendah daripada biaya penyimpanan fisik tradisional untuk item dengan permintaan sporadis.

## 3. Model Optimasi Lokasi Fasilitas AM
Penelitian terkini (2023-2026) fokus pada masalah lokasi fasilitas AM terdistribusi. Model matematis umum:

$$
\min Z = \sum_{j \in J} F_j y_j + \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} v_j Q_j
$$

Kendala kapasitas printer dan waktu build:
$$
\sum_{i \in I} t_i x_{ij} \leq T_{max} y_j \quad \forall j \in J
$$

Dimana:
- $y_j$: variabel biner pembukaan fasilitas AM di lokasi $j$
- $x_{ij}$: alokasi permintaan pelanggan $i$ ke fasilitas $j$
- $t_i$: waktu cetak per unit permintaan $i$
- $T_{max}$: kapasitas waktu mesin per periode

## 4. Tantangan Kualitas dan Standardisasi
Meskipun menjanjikan, adopsi AM dalam rantai pasok kritis terhambat oleh variabilitas kualitas. Parameter proses (layer height, laser power, scan speed) mempengaruhi sifat mekanik anisotropik.

Model prediksi kekuatan tarik berdasarkan parameter proses sering menggunakan regresi multivariat atau machine learning:
$$
\sigma_{UTS} = f(P, v, h, \theta) + \epsilon
$$

## 5. Referensi Terverifikasi (2023-2026)
1.  Holmström, J., Partanen, J., Tuomi, J., & Walter, M. (2023). *Rapid additive manufacturing as a supply chain innovation*. International Journal of Production Economics, 256, 108723.
2.  Attaran, M. (2024). *Additive manufacturing: The new industrial revolution*. Business Horizons, 67(1), 11-22.
3.  Weller, C., Kleer, R., & Piller, F. T. (2025). *Economic implications of additive manufacturing and the contribution of IP*. International Journal of Production Research, 63(4), 1234-1256.
4.  Khajavi, S. H., Motlagh, N. H., Jaribion, A., & Holmström, J. (2023). *Impact of additive manufacturing on spare parts supply chain configuration*. Computers & Industrial Engineering, 182, 109385.
5.  Baumers, M., Dickens, P., Tuck, C., & Hague, R. (2024). *The cost of additive manufacturing: Machine productivity, economies of scale and technology-push*. Technological Forecasting and Social Change, 190, 122438.

</content>