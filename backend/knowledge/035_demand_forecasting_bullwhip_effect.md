# Modul Riset Ilmiah: Peramalan Permintaan (Demand Forecasting) & Kuantifikasi Dampak Bullwhip Effect
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Lee, H. L., Padmanabhan, V., & Whang, S. (1997). *Information distortion in a supply chain: The bullwhip effect*. Management Science, 43(4), 546-558. (Foundational Benchmark).
- Brauch, M., Mohaghegh, M., & Größler, A. (2024). *Causes of the bullwhip effect: a systematic review and categorization of its causes*. Management Research Review, Emerald, 47(7), 1127-1158. DOI: [10.1108/MRR-02-2023-0130](https://doi.org/10.1108/MRR-02-2023-0130).
- Saoud, P., Kourentzes, N., & Boylan, J. E. (2025). *The importance of forecast uncertainty in understanding the Bullwhip effect*. International Journal of Production Research, Taylor & Francis. DOI: [10.1080/00207543.2025.2527957](https://doi.org/10.1080/00207543.2025.2527957).
- Box, G. E., Jenkins, G. M., Reinsel, G. C., & Ljung, G. M. (2015). *Time Series Analysis: Forecasting and Control* (5th ed.). Wiley. ISBN: 978-1118675021.

---

## 1. Konsep & Metodologi Peramalan Deret Waktu (Time Series Forecasting)
Peramalan permintaan adalah fondasi dari seluruh perencanaan agregat, pengadaan material, dan penjadwalan kapasitas manufaktur.

### A. Metode Pemulusan Eksponensial (Exponential Smoothing):
1. **Single Exponential Smoothing (SES - Pola Konstan):**
   $$F_{t+1} = \alpha A_t + (1 - \alpha) F_t = F_t + \alpha (A_t - F_t)$$
2. **Holt’s Two-Parameter Method (Pola Tren Linier):**
   - Level: $L_t = \alpha A_t + (1 - \alpha)(L_{t-1} + T_{t-1})$
   - Trend: $T_t = \beta (L_t - L_{t-1}) + (1 - \beta) T_{t-1}$
   - Forecast: $F_{t+m} = L_t + m T_t$
3. **Holt-Winters Method (Pola Tren & Musiman Multiplikatif):**
   - Seasonal Factor: $S_t = \gamma \frac{A_t}{L_t} + (1 - \gamma) S_{t-L}$
   - Forecast: $F_{t+m} = (L_t + m T_t) \times S_{t-L+m}$

### B. Metrik Akurasi & Evaluasi Kesalahan Peramalan:
- **Mean Absolute Deviation (MAD):** $\text{MAD} = \frac{1}{n} \sum |A_t - F_t|$
- **Mean Squared Error (MSE):** $\text{MSE} = \frac{1}{n} \sum (A_t - F_t)^2$
- **Mean Absolute Percentage Error (MAPE):** $\text{MAPE} = \frac{1}{n} \sum \left| \frac{A_t - F_t}{A_t} \right| \times 100\%$
- **Tracking Signal (TS):** $\text{TS} = \frac{\text{Running Sum of Forecast Errors (RSFE)}}{\text{MAD}_t} \quad (\text{Batas Kendali Ideal: } \pm 4)$.

---

## 2. Kuantifikasi Fenomena Bullwhip Effect dalam Rantai Pasok
Bullwhip Effect adalah fenomena distorsi informasi di mana variasi pesanan (*order variability*) semakin membesar secara eksponensial saat bergerak ke hulu rantai pasok (Konsumen $\rightarrow$ Retailer $\rightarrow$ Distributor $\rightarrow$ Manufaktur $\rightarrow$ Supplier Bahan Baku).

### Parameter Kuantifikasi Bullwhip Effect ($BWE$ Ratio):
$$\text{Bullwhip Ratio} = \frac{\sigma^2_{\text{Orders}} / \mu_{\text{Orders}}}{\sigma^2_{\text{Demand}} / \mu_{\text{Demand}}} = \frac{\text{Var}(\text{Orders})}{\text{Var}(\text{Demand})}$$
- **$BWE > 1.0$:** Terjadi distorsi amplifikasi variasi (Bullwhip Effect aktif).
- **$BWE = 1.0$:** Kondisi ideal rantai pasok sinkron (*Information Sharing / VMI*).
- **$BWE < 1.0$:** Terjadi fenomena peredaman variasi (*Damping / Smoothing*).

### Formula Chen et al. untuk Model Lead Time & Estimasi Peramalan:
$$\frac{\text{Var}(\text{Orders})}{\text{Var}(\text{Demand})} \ge 1 + \frac{2L}{p} + \frac{2L^2}{p^2}$$
*(Di mana $L =$ Lead Time pemesanan, $p =$ Jumlah periode historis yang digunakan dalam moving average).*

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
