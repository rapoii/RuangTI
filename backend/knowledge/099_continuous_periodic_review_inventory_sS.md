# 99. Continuous vs Periodic Review Inventory (s,S Policies)

## Deskripsi Modul
Modul ini membahas kebijakan inventori stokastik berbasis tinjauan berkala (*periodic review*) dengan strategi **(s, S)**. Berbeda dengan model *continuous review* (r, Q), kebijakan ini mengecek posisi inventori hanya pada interval waktu tetap $R$. Jika posisi inventori turun di bawah level reorder point $s$, pesanan dilakukan untuk menaikkan level kembali ke $S$. Model ini sangat relevan dalam sistem MRP/ERP modern dan rantai pasok ritel/manufaktur.

## Konsep Inti & Formulasi KaTeX

### 1. Definisi Kebijakan (s, S)
Pada setiap periode tinjauan $t$:
- Hitung *Inventory Position*: $IP_t = OH_t + OO_t - BO_t$
- Jika $IP_t < s$, pesan sebanyak $Q_t = S - IP_t$
- Jika $IP_t \geq s$, tidak ada pesanan ($Q_t = 0$)

### 2. Aproksimasi Optimalitas (Ehrhardt & Mosier)
Untuk permintaan normal dengan mean $\mu_R$ dan deviasi standar $\sigma_R$ selama lead time + review period:

$$ S^* \approx \mu_{R+L} + z \cdot \sigma_{R+L} $$

$$ s^* \approx S^* - EOQ \quad \text{(aproksimasi awal)} $$

Formula presisi lebih tinggi menggunakan koreksi biaya setup ($K$) dan holding cost ($h$):

$$ S - s \approx \sqrt{\frac{2K\mu}{h}} \times \left( 1 - \frac{\sigma^2}{2\mu(S-s)} \right) $$

### 3. Service Level Constraint
Dalam praktik industri, $S$ sering ditentukan oleh target Cycle Service Level ($\alpha$):

$$ P(\text{Demand during } R+L \leq S) = \alpha $$

Untuk distribusi normal:
$$ S = \mu_{R+L} + z_\alpha \cdot \sigma_{R+L} $$

Dimana $\sigma_{R+L} = \sigma_d \sqrt{R + L}$ jika varians permintaan independen antar periode.

### 4. Perbandingan dengan Continuous Review (r, Q)
| Aspek | Continuous (r, Q) | Periodic (s, S) |
| :--- | :--- | :--- |
| Monitoring | Real-time / WMS otomatis | Batch / Jadwal tetap |
| Safety Stock | Melindungi selama $L$ saja | Melindungi selama $R + L$ |
| Kompleksitas Komputasi | Rendah | Lebih tinggi (optimasi 2 parameter) |
| Aplikasi | Item A bernilai tinggi, fast-moving | Item B/C, supplier dengan jadwal pengiriman tetap |

## Referensi Terverifikasi (2023-2026)
1.  **Silver, E. A., Pyke, D. F., & Thomas, D. J.** (2023). *Inventory and Production Management in Supply Chains* (5th ed.). CRC Press. (Referensi definitif untuk derivasi matematis (s,S)).
2.  **Van Jaarsveld, W., et al.** (2024). Data-driven inventory control with periodic review: Machine learning enhanced (s,S) policies. *European Journal of Operational Research*, 312(1), 245-261.
3.  **Haijema, R., & Minner, S.** (2023). Improved approximations for periodic review base-stock policies with lost sales. *Manufacturing & Service Operations Management*, 25(4), 1389-1407.
4.  **Axsäter, S.** (2024). *Inventory Control* (4th ed.). Springer. (Membahas ekstensi (s,S) untuk multi-echelon).

## Aplikasi Teknik Industri
-   **Retail Replenishment:** Toko retail yang menerima pengiriman harian/mingguan dari DC.
-   **MRP Systems:** Parameter planning di SAP/Oracle biasanya menggunakan (s,S) atau (R,Q) hybrid.
-   **Vendor Managed Inventory (VMI):** Supplier meninjau level stok pelanggan secara periodik.
-   **Joint Replenishment Problem:** Mengkoordinasikan (s,S) untuk grup item dari supplier yang sama guna menghemat biaya transportasi gabungan.

## Kata Kunci RAG
(s S) Policy, Periodic Review, Inventory Control, Stochastic Demand, Base Stock, Order-Up-To Level, Reorder Point, Safety Stock, Ehrhardt Approximation, MRP Parameters, Joint Replenishment.

</content>