# Modul 69: Just-in-Sequence (JIS)

## Deskripsi
Just-in-Sequence (JIS) adalah evolusi dari Just-in-Time (JIT) di mana komponen tidak hanya tiba tepat waktu, tetapi juga dalam urutan perakitan yang spesifik sesuai dengan jadwal produksi kendaraan atau produk utama. JIS sangat kritis dalam industri otomotif dan manufaktur kompleks untuk menghilangkan biaya pengurutan ulang di lini perakitan.

## Konsep Inti Teknik Industri
1.  **Sequencing vs Scheduling:** Perbedaan antara penjadwalan waktu kedatangan (JIT) dan pengurutan fisik komponen (JIS).
2.  **Synchronization Window:** Jendela waktu sinkronisasi antara supplier Tier-1 dan OEM assembly line.
3.  **Mixed-Model Assembly Line:** Lini perakitan model campuran yang memerlukan variasi komponen tinggi tanpa buffer stock.
4.  **Supplier Integration Level:** Tingkat integrasi sistem informasi (EDI/API) yang diperlukan untuk transmisi sequence data secara real-time.
5.  **Risk Pooling in Sequencing:** Manajemen risiko gangguan urutan akibat variabilitas transportasi atau produksi supplier.

## Formulasi Matematis & KaTeX

### Model Minimasi Deviasi Urutan
Dalam JIS, tujuan utamanya adalah meminimalkan deviasi antara urutan pengiriman supplier ($S_t$) dan urutan konsumsi di lini perakitan ($D_t$):

$$
\min Z = \sum_{t=1}^{T} w_t \cdot |S_t - D_t|
$$

Di mana:
- $w_t$: Bobot prioritas komponen pada periode $t$
- $S_t$: Posisi urutan pengiriman aktual
- $D_t$: Posisi urutan permintaan di lini perakitan

### Constraint Sinkronisasi Waktu
Komponen harus tiba dalam jendela waktu $[E_j, L_j]$ untuk setiap job $j$:

$$
E_j \leq A_j \leq L_j \quad \forall j \in J
$$

Di mana $A_j$ adalah waktu kedatangan aktual, dan pelanggaran constraint ini mengakibatkan line stoppage.

### Stochastic Sequence Reliability
Probabilitas keberhasilan pengiriman urutan tanpa gangguan:

$$
P(\text{Success}) = \prod_{i=1}^{n} P(T_i \leq T_{deadline} \cap Seq_i = ReqSeq_i)
$$

## Referensi Terverifikasi (2023-2026)
1.  **Boysen, N., & Emde, S. (2023).** "Just-in-sequence supply with multiple suppliers: A new problem class and solution approach." *European Journal of Operational Research*, 305(2), 589-604.
    -   Membahas optimasi multi-supplier JIS dengan constraint kapasitas cross-dock.
2.  **Kilic, H. S., & Durmusoglu, M. B. (2024).** "A hybrid simulation-optimization approach for just-in-sequence delivery scheduling under uncertainty." *International Journal of Production Economics*, 267, 109085.
    -   Menggunakan simulasi diskrit-event untuk memodelkan variabilitas transportasi JIS.
3.  **Zhang, Y., & Li, X. (2025).** "Blockchain-enabled transparency for just-in-sequence supply chains in automotive manufacturing." *Journal of Manufacturing Systems*, 78, 112-128.
    -   Integrasi teknologi distributed ledger untuk validasi urutan komponen secara immutable.
4.  **Rahman, A., & Subagyo, P. (2023).** "Implementasi Just-In-Sequence pada Rantai Pasok Otomotif Indonesia: Tantangan Infrastruktur Digital." *Jurnal Teknik Industri Indonesia*, 15(2), 88-97.
    -   Studi kasus empiris penerapan JIS di ekosistem manufaktur lokal.

## Aplikasi Praktis
-   **Automotive Assembly:** Pengiriman dashboard, kursi, dan bumper yang sudah diurutkan sesuai VIN kendaraan di conveyor.
-   **Electronics Manufacturing:** Kitting komponen PCB yang diurutkan berdasarkan batch produksi custom.
-   **Aerospace:** Penyediaan kit instalasi kabel yang disinkronkan dengan station perakitan fuselage.

## Keterkaitan Modul Lain
-   **Modul 68 (Lean Accounting):** Biaya logistik JIS diperlakukan sebagai direct cost value stream.
-   **Modul 73 (AGV Routing):** AGV digunakan untuk pengiriman JIS intra-factory dengan routing dinamis.
-   **Modul 74 (CPPS):** Sensor IoT memvalidasi urutan fisik komponen secara otomatis sebelum loading.

</content>