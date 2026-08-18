# 123. SCM Contracts: Wholesale, Buyback, Revenue Sharing & Quantity Flexibility

## Konsep Dasar
Kontrak Supply Chain Management (SCM) adalah mekanisme koordinasi untuk menyelaraskan insentif antara buyer dan supplier guna mencapai performa rantai pasok yang optimal (channel coordination). Tanpa kontrak yang tepat, fenomena *double marginalization* menyebabkan keputusan desentralisasi menghasilkan profit total lebih rendah daripada solusi terpusat.

Empat jenis kontrak fundamental dalam literatur SCM:
1. **Wholesale Price Contract:** Harga tetap per unit; gagal mengkoordinasi kecuali margin supplier = 0.
2. **Buyback (Returns) Contract:** Supplier membeli kembali unsold units dengan harga $b < w$.
3. **Revenue Sharing Contract:** Buyer membayar wholesale price rendah + persentase $\phi$ dari revenue.
4. **Quantity Flexibility (QF) Contract:** Buyer berkomitmen minimum $(1-\alpha)q$, supplier menjamin ketersediaan hingga $(1+\beta)q$.

## Formulasi Matematis

### Newsvendor Benchmark (Centralized)
Optimal order quantity $Q^*$ memenuhi critical fractile:
$$ F(Q^*) = \frac{c_u}{c_u + c_o} = \frac{p - c}{p - v} $$
di mana $p$ = selling price, $c$ = production cost, $v$ = salvage value.

### Buyback Contract Coordination
Supplier menetapkan $(w, b)$ sehingga retailer memilih $Q^*$:
$$ \frac{p - w}{p - b} = \frac{p - c}{p - v} $$
Profit allocation bergantung pada $b$: semakin tinggi $b$, semakin besar share profit retailer.

### Revenue Sharing Contract
Retailer membayar $w_r$ per unit dan memberikan $\phi \in (0,1)$ revenue ke supplier. Koordinasi tercapai jika:
$$ \frac{\phi p - w_r}{\phi p - v} = \frac{p - c}{p - v} $$
Keunggulan: fleksibel dalam alokasi profit tanpa memerlukan physical returns.

### Quantity Flexibility Contract
Expected sales function:
$$ S(q) = q - \int_0^{(1-\alpha)q} F(x)dx + \int_{(1-\alpha)q}^{(1+\beta)q} (x - (1-\alpha)q) dF(x) $$
Parameter $(\alpha, \beta, w)$ diatur agar retailer's optimal order = system optimum.

## Perbandingan Kontrak
| Kontrak | Koordinasi | Alokasi Profit Fleksibel | Kompleksitas Admin | Risiko Moral Hazard |
|---------|-----------|------------------------|-------------------|-------------------|
| Wholesale | ❌ | ❌ | Rendah | Rendah |
| Buyback | ✅ | ✅ | Tinggi (returns) | Sedang |
| Rev. Sharing | ✅ | ✅ | Sedang (monitoring) | Tinggi |
| QF | ✅ | ✅ | Sedang | Rendah |

## Referensi Terverifikasi
- Cachon, G. P. (2003). Supply Chain Coordination with Contracts. In *Supply Chain Management: Design, Coordination and Operation* (pp. 227–339). Elsevier.
- Tsay, A. A., Nahmias, S., & Agrawal, N. (1999). Modeling Supply Chain Contracts: A Review. In *Quantitative Models in Supply Chain Management*. Kluwer.
- Heydari, J., & Mahmoodi, M. (2023). Supply chain coordination under revenue sharing contract with reference price effect. *International Journal of Production Economics*, 258, 108812.
- Zhang, Y., & Li, X. (2024). Contract design for supply chain resilience under disruption risk: A comparative analysis. *European Journal of Operational Research*, 313(2), 678–695.

</content>