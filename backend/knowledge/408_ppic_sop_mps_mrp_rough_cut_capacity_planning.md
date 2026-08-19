# Modul 408: Perencanaan Produksi & Pengendalian Persediaan (PPIC), Sales & Operations Planning (S&OP), Master Production Schedule (MPS), dan Bill of Resources (RCCP)

## 1. Domain Profesi & Kerangka Kerja
Profesi **Production Planning and Inventory Control (PPIC) Specialist / Master Scheduler** bertanggung jawab menyeimbangkan antara perkiraan permintaan pasar (*Demand Forecast*), ketersediaan kapasitas mesin (*Capacity Constraints*), dan modal kerja persediaan (*Inventory Working Capital*).

### Hierarki Perencanaan Produksi APICS / ASCM:
```
[1. Business Plan (Tahunan)]
        |
[2. Sales & Operations Planning (S&OP) / Rencana Agregat (Bulanan)]
        |
[3. Master Production Schedule (MPS) / Jadwal Induk Produksi (Mingguan)]
        |
[4. Material Requirements Planning (MRP) / Kebutuhan Material (Harian/Shift)]
        |
[5. Shop Floor Control (SFC) / Dispatching & Eksekusi Lantai Pabrik]
```

---

## 2. Rencana Agregat (Aggregate Planning) & Linear Programming

Menentukan laju produksi reguler ($P_{rt}$), lembur ($P_{ot}$), subkontrak ($S_t$), persediaan ($I_t$), dan kekurangan stok ($B_t$) selama horizon waktu $T$:

### Formulasi Model Optimasi Linear Programming:
$$\min Z = \sum_{t=1}^{T} \left( c_r P_{rt} + c_o P_{ot} + c_s S_t + c_h I_t + c_b B_t + c_H H_t + c_L L_t \right)$$

Dengan kendala (*Constraints*):
1. **Keseimbangan Persediaan**:
   $$I_{t-1} - B_{t-1} + P_{rt} + P_{ot} + S_t - I_t + B_t = D_t \quad \forall t$$
2. **Kapasitas Reguler Jam Kerja Tenaga Kerja ($W_t$)**:
   $$P_{rt} \le k \cdot W_t$$
   $$W_t = W_{t-1} + H_t - L_t$$ (Dinamika rekrutmen $H_t$ dan PHK $L_t$)
3. **Kapasitas Maksimum Lembur & Subkontrak**:
   $$P_{ot} \le \alpha \cdot P_{rt}, \quad S_t \le S_{\max}$$

---

## 3. Jadwal Induk Produksi (Master Production Schedule - MPS) & Rough-Cut Capacity (RCCP)

### A. Tabel Logika MPS & Projected Available Balance (PAB):
$$\text{PAB}_t = \begin{cases} 
\text{PAB}_{t-1} + \text{MPS}_t - \max(F_t, O_t) & \text{jika } t \le \text{Demand Time Fence (DTF)} \\
\text{PAB}_{t-1} + \text{MPS}_t - F_t & \text{jika } t > \text{Planning Time Fence (PTF)}
\end{cases}$$

Di mana $F_t$ adalah *Forecast Demand* dan $O_t$ adalah *Customer Actual Orders*.

### B. Available-to-Promise (ATP) untuk Tim Penjualan:
$$\text{ATP}_1 = \text{Persediaan Awal} + \text{MPS}_1 - \sum_{k=1}^{t-1} O_k$$
$$\text{ATP}_t = \text{MPS}_t - \sum_{k=t}^{m-1} O_k \quad (\text{untuk periode } t \text{ yang memiliki batch MPS})$$

### C. Validasi Kapasitas Kasar (RCCP) via Bill of Resources (BOR):
Total beban kapasitas pada work center $k$ pada periode $t$:

$$\text{Load}_{kt} = \sum_{i=1}^{N} \left( \text{MPS}_{it} \times a_{ik} \right)$$

Di mana $a_{ik}$ adalah jam kerja standar yang dibutuhkan untuk memproduksi satu unit produk $i$ pada mesin $k$. Jika $\text{Load}_{kt} > \text{Kapasitas Tersedia}_{kt}$, jadwal MPS wajib digeser (*smoothing*) atau ditambah shift lembur.

---

## 4. Perhitungan Kebutuhan Bersih Material (MRP Explosion)

Untuk setiap komponen pada pohon struktur produk (*Bill of Materials* - BOM):

$$\text{Net Requirement}_t = \max\Big(0, \text{Gross Requirement}_t - \big(\text{Projected On-Hand}_{t-1} + \text{Scheduled Receipts}_t\big) + \text{Safety Stock}\Big)$$

---

## 5. Algoritma Ukuran Lot Dinamis (Dynamic Lot Sizing Heuristics)

### A. Algoritma Heuristik Silver-Meal:
Menghitung rata-rata biaya per periode $C(T)$ jika pesanan mencakup kebutuhan untuk $T$ periode ke depan:

$$C(T) = \frac{S + h \sum_{t=1}^{T} (t - 1) D_t}{T}$$

Di mana $S$ adalah biaya pemesanan/setup dan $h$ biaya simpan per unit/periode.
**Aturan Berhenti**: Naikkan $T$ satu per satu ($T = 1, 2, 3, \dots$). Berhenti saat $C(T+1) > C(T)$. Buat lot pesanan sebesar $\sum_{t=1}^{T} D_t$.

### B. Algoritma Least Unit Cost (LUC):
$$LUC(T) = \frac{S + h \sum_{t=1}^{T} (t - 1) D_t}{\sum_{t=1}^{T} D_t}$$

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Vollmann, T. E., Berry, W. L., Whybark, D. C., & Jacobs, F. R. (2018). *Manufacturing Planning and Control for Supply Chain Management* (2nd ed.). McGraw-Hill Education.
- Shurrab, H., & Jonsson, P. (2026). *An information-centric framework for sales and operations planning in advanced manufacturing*. Production Planning & Control, 37(4), 489-506. DOI: [10.1080/09537287.2026.2668590](https://doi.org/10.1080/09537287.2026.2668590).
- Luo, D., Thevenin, S., & Dolgui, A. (2023). *A state-of-the-art on production planning in Industry 4.0*. International Journal of Production Research, 61(24), 8560-8588. DOI: [10.1080/00207543.2022.2122622](https://doi.org/10.1080/00207543.2022.2122622).
- Memarpour, E., & Torabi, S. A. (2026). *Integrated sales and operations planning for hybrid make-to-stock and make-to-order manufacturing supply chains*. Journal of Industrial and Production Engineering, 43(1), 75-92.
