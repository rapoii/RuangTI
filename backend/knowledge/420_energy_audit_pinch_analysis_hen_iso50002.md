# Modul 420: Audit Energi Industri (ISO 50002 / Permen ESDM 14/2012), Specific Energy Consumption (SEC), dan Sintesis Jaringan Penukar Panas (Pinch Analysis)

## 1. Domain Profesi & Ruang Lingkup
Profesi **Energy Auditor / Industrial Utility & Decarbonization Engineer** bertugas mengidentifikasi peluang konservasi energi (*Energy Conservation Opportunities* - ECOs), menghitung konsumsi energi spesifik pabrik (*Specific Energy Consumption* - SEC), serta mengoptimalkan integrasi termal via *Pinch Analysis*.

### Standar Baku:
1. **ISO 50002:2014**: *Energy audits — Requirements with guidance for use*.
2. **ISO 50001:2018**: *Energy management systems — Requirements with guidance for use*.
3. **Permen ESDM No. 14 Tahun 2012**: *Manajemen Energi Industri (Wajib audit bagi konsumsi $\ge 6000\text{ TOE/tahun}$)*.

---

## 2. Konsumsi Energi Spesifik (Specific Energy Consumption - SEC)

Mengukur intensitas konsumsi energi per satuan output produk:

$$\text{SEC} = \frac{\text{Total Konsumsi Energi (GJ atau kWh)}}{\text{Total Output Produk Jadi (Ton atau Unit)}}$$

### Pemodelan Baseline Energi Regresi Multivariat:
$$E_{\text{baseline}} = \beta_0 + \beta_1 Q_{\text{produksi}} + \beta_2 CDD + \beta_3 HDD + \epsilon$$

Di mana $Q_{\text{produksi}}$ adalah volume output pabrik, $CDD$ (*Cooling Degree Days*), dan $HDD$ (*Heating Degree Days*). Penghematan energi kumulatif dievaluasi menggunakan metode **CUSUM (Cumulative Sum of Differences)**:

$$\text{CUSUM}_t = \sum_{k=1}^{t} \left( E_{\text{aktual}, k} - E_{\text{baseline}, k} \right)$$
Jika kurva CUSUM melandai ke bawah, artinya program efisiensi energi berhasil menghasilkan penghematan riil.

---

## 3. Metodologi Pinch Analysis (Linnhoff March - Integrasi Termal Pabrik)

Pinch Analysis adalah metode termodinamika untuk memaksimalkan pemulihan panas limbah (*Waste Heat Recovery*) di antara aliran panas (*Hot Streams*) dan aliran dingin (*Cold Streams*) sebelum menggunakan utilitas eksternal (Boiler / Cooling Tower).

```
Suhu (T)
  ^
  |        [Kurva Komposit Aliran Panas (Hot Composite Curve)]
  |          |         \     <=== Titik Kritis PINCH (Delta T_min)
  |            |           [Kurva Komposit Aliran Dingin (Cold Composite Curve)]
  +-------------------------------------------------------------> Entalpi Kumulatif (H)
              |                                     |
              +-- [Zona Di Atas Pinch: Heat Source] +-- [Zona Di Bawah Pinch: Heat Sink]
```

### 3 Aturan Emas Desain Jaringan Penukar Panas (Pinch Golden Rules):
1. **Dilarang mentransfer panas melintasi garis Pinch** ($Q_{\text{cross-pinch}} = 0$).
2. **Dilarang menggunakan pendingin utilitas eksternal (Cooling Water) di atas Pinch**.
3. **Dilarang menggunakan pemanas utilitas eksternal (Steam/Heater) di bawah Pinch**.

### Kebutuhan Utilitas Minimum Teoritis:
$$Q_{H,\min} = \text{Defisit panas minimum di atas Pinch (Wajib disuplai oleh Steam)}$$
$$Q_{C,\min} = \text{Kelebihan panas minimum di bawah Pinch (Wajib dibuang ke Cooling Tower)}$$

---

## 4. Efisiensi Termal Boiler & Neraca Panas (Metode Tidak Langsung / Indirect Method ASME PTC 4.1)

$$\eta_{\text{Boiler}} = 100\% - (L_1 + L_2 + L_3 + L_4 + L_5 + L_6)$$

Di mana kerugian energi ($L_i$):
- $L_1$: Kerugian panas cerobong gas buang kering (*Dry Flue Gas Loss*):
  $$L_1 = \frac{m_{\text{gas}} \times C_p \times (T_{\text{stack}} - T_{\text{ambient}})}{\text{GCV}} \times 100\%$$
- $L_2$: Kerugian panas akibat uap air hasil pembakaran hidrogen dalam bahan bakar.
- $L_3$: Kerugian panas akibat kelembaban udara pembakaran.
- $L_4$: Kerugian panas akibat pembakaran tak sempurna (emisi gas CO).
- $L_5$: Kerugian radiasi dan konveksi dinding luar boiler.
- $L_6$: Kerugian akibat *blowdown* air ketel.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Kemp, I. C. (2019). *Pinch Analysis and Process Integration: A User Guide on Process Integration for the Efficient Use of Energy* (2nd ed.). Butterworth-Heinemann.
- American Society of Mechanical Engineers. (2013). *ASME PTC 4-2013: Fired Steam Generators Performance Test Codes*. New York: ASME.
- International Organization for Standardization. (2014). *ISO 50002:2014 Energy audits — Requirements with guidance for use*. Geneva: ISO.
- Tekin, A., Akyurek, O., & Nalbant, M. O. (2025). *Industrial energy conservation and thermal efficiency optimization in metal packaging manufacturing clusters*. Applied Thermal Engineering, 241, 122390.
