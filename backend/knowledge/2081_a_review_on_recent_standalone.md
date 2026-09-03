# 2081 — Optimasi Sistem Energi Hibrida Terbarukan Terisolasi dan Terintegrasi Jaringan: Strategi Manajemen Energi, Keandalan Sistem, dan Pemodelan Ketidakpastian

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A review on recent standalone and grid integrated hybrid renewable energy systems: System optimization and energy management strategies
**Jurnal & Sitasi Utama:** Sarad Basnet, Karine Deschinkel, Luis Le Moyne (2023). *Renewable energy focus*. DOI: [https://doi.org/10.1016/j.ref.2023.06.001](https://doi.org/10.1016/j.ref.2023.06.001)
**Sitasi Pendukung:** Mehrdad Ghahramani, Daryoush Habibi, Seyyed Morteza Ghamari (2025). *Clean Technologies*. DOI: [https://doi.org/10.3390/cleantechnol7030080](https://doi.org/10.3390/cleantechnol7030080)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global yang dipercepat oleh komitmen *Paris Agreement* dan target *net-zero emission* telah menempatkan sistem energi hibrida terbarukan (HRES — *Hybrid Renewable Energy Systems*) sebagai salah satu pilar strategis rekayasa sistem industri modern. Basnet, Deschinkel, dan Le Moyne (2023) dalam *Renewable Energy Focus* (DOI: [10.1016/j.ref.2023.06.001](https://doi.org/10.1016/j.ref.2023.06.001)) menekankan bahwa integrasi fotovoltaik (PV), turbin angin, biomassa, sel bahan bakar, dan sistem penyimpanan baterai dalam satu arsitektur energi memungkinkan pengurangan emisi CO₂ industri hingga 60–80% dibanding sistem fosil murni, sekaligus menurunkan *Levelized Cost of Energy* (LCOE) jangka panjang. Fenomena ini bukan semata agenda lingkungan, melainkan keputusan rekayasa ekonomis: bagi fasilitas industri terpencil seperti pertambangan, kilang lepas pantai, dan *data center* edge, sistem terisolasi (*standalone*) yang mengandalkan satu sumber fosil menderita volatilitas harga bahan bakar 20–35% per tahun dan *downtime* logistik yang signifikan.

Urgensi operasional HRES terletak pada dua permasalahan klasik yang diidentifikasi Basnet et al. (2023): (i) **intermitensi** sumber EBT yang menciptakan *mismatch* temporal antara penawaran dan permintaan beban industri (*load demand*), dan (ii) **ketidakpastian** peramalan sumber daya alam (irradiance matahari, kecepatan angin) yang menurunkan keandalan sistem. Ghahramani, Habibi, dan Ghamari (2025) dalam *Clean Technologies* (DOI: [10.3390/cleantechnol7030080](https://doi.org/10.3390/cleantechnol7030080)) melengkapinya dengan menyatakan bahwa sistem energi terisolasi berbasis EBT menghadapi tantangan *scalability* (skala kecil, menengah, besar) yang krusial ketika diterapkan pada komunitas industri dengan profil beban dinamis. Konteks Indonesia — kepulauan dengan >17.000 pulau dan rasio elektrifikasi pedesaan yang masih disparitas — menjadikan HRES bukan sekadar opsi, melainkan kebutuhan strategis untuk industri ekstraktif di Kalimantan, manufaktur di Sulawesi, dan *cold-chain* perikanan di Nusa Tenggara.

Secara ekonomis, biaya pembangkitan HRES yang optimal dapat mencapai USD 0,06–0,12/kWh, jauh di bawah biaya *diesel-only* di lokasi terpencil yang menyentuh USD 0,25–0,45/kWh setelah memasukkan *fuel logistics premium*. Namun, pencapaian *optimal cost-of-energy* tersebut mensyaratkan formulasi optimasi multi-objektif yang menyeimbangkan tiga dimensi simultan: biaya investasi (*Net Present Cost*), keandalan (*Loss of Power Supply Probability*), dan emisi lingkungan. Di sinilah kontribusi metodologis Basnet et al. (2023) dan Ghahramani et al. (2025) menjadi landasan rekayasa yang tidak dapat diabaikan dalam kurikulum Teknik Industri kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Pembangkitan Fotovoltaik (PV)

Daya sesaat PV dirumuskan mengikuti model efek suhu De Soto sebagai berikut:

$$P_{PV}(t) = P_{PV,rated} \cdot \frac{G(t)}{G_{STC}} \cdot \left[1 + \mu_P \cdot \left(T_{cell}(t) - T_{STC}\right)\right]$$

dengan $G(t)$ adalah irradiance aktual (W/m²), $G_{STC} = 1000$ W/m², $\mu_P$ adalah koefisien suhu daya (tipikal $-0{,}0041/^{\circ}$C), dan $T_{cell}(t)$ adalah suhu sel yang dihitung dari suhu ambient $T_{amb}$ dan *Nominal Operating Cell Temperature* (NOCT):

$$T_{cell}(t) = T_{amb}(t) + \frac{NOCT - 20}{0{,}8} \cdot G(t)$$

### 2.2 Model Turbin Angin

Daya turbin angin mengikuti model kinetika tiga-region Betz:

$$P_W(v) = \begin{cases} 0 & v < v_{cut-in} \text{ atau } v > v_{cut-out} \\ P_{W,rated} \cdot \frac{v^3 - v_{cut-in}^3}{v_{rated}^3 - v_{cut-in}^3} & v_{cut-in} \leq v \leq v_{rated} \\ P_{W,rated} & v_{rated} \leq v \leq v_{cut-out} \end{cases}$$

Probabilitas kecepatan angin dimodelkan dengan distribusi Weibull sesuai rekomendasi Ghahramani et al. (2025) untuk menangani ketidakpastian:

$$f(v) = \frac{k}{c}\left(\frac{v}{c}\right)^{k-1} e^{-(v/c)^k}$$

dengan $k$ adalah *shape parameter* dan $c$ adalah *scale parameter* (m/s).

### 2.3 State of Charge (SOC) Baterai

Dinamika baterai mengikuti model *kinetic battery* (KiBaM):

$$SOC(t+1) = SOC(t) + \frac{\eta_{ch} \cdot P_{ch}(t) - P_{disch}(t)/\eta_{disch}}{E_{bat}}$$

dengan constraint operasional $SOC_{min} \leq SOC(t) \leq SOC_{max}$ (tipikal 20%–95%) untuk mencegah degradasi siklik.

### 2.4 Formulasi Optimasi Multi-Objektif HRES

Basnet et al. (2023) merumuskan fungsi tujuan optimasi HRES sebagai kombinasi tiga metrik:

$$\min_{x \in \mathcal{X}} \left[ \mathcal{F}(x) = w_1 \cdot NPC(x) + w_2 \cdot LPSP(x) + w_3 \cdot CO_2(x) \right]$$

dengan:
- $NPC(x) = \sum_{t=1}^{T} \frac{C_t(x)}{(1+r)^t}$ adalah *Net Present Cost* pada tingkat diskonto $r$,
- $LPSP(x) = \frac{\sum_{t=1}^{T} \text{DE}(t)}{\sum_{t=1}^{T} P_{load}(t) \cdot \Delta t}$ adalah *Loss of Power Supply Probability* dengan DE(*t*) adalah *deficit* energi pada interval waktu $t$,
- $CO_2(x)$ adalah emisi karbon kumulatif terekonsiliasi,
- $w_1 + w_2 + w_3 = 1$ adalah bobot preferensi manajerial.

### 2.5 Levelized Cost of Energy (LCOE)

$$LCOE = \frac{\sum_{t=1}^{T} \frac{C_{cap} + C_{O\&M} + C_{fuel}}{(1+r)^t}}{\sum_{t=1}^{T} \frac{E_{gen}(t)}{(1+r)^t}}$$

$LCOE$ adalah metrik fundamental bagi pengambilan keputusan rekayasa industri karena membandingkan *apple-to-apple* antara konfigurasi HRES yang berbeda.

### 2.6 Pemodelan Ketidakpastian

Ghahramani et al. (2025) mengusulkan kerangka dua-lapis untuk ketidakpastian:

$$f_{joint}(v, G) = f_W(v; k, c) \cdot f_{Beta}(G; \alpha, \beta)$$

dengan distribusi Beta untuk irradiance:

$$f_{Beta}(G) = \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}\left(\frac{G}{G_{max}}\right)^{\alpha-1}\left(1-\frac{G}{G_{max}}\right)^{\beta-1}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi HRES di lingkungan industri mengikuti SOP tujuh-tahap yang disintesis dari Basnet et al. (2023) dan diperkuat dengan kerangka *scalability* Ghahramani et al. (2025):

**Tahap 1 — Karakterisasi Beban Industri.** Akuisisi profil beban 8760-jam (*one-year hourly resolution*) dengan segmentasi *peak-shoulder-base load*. Untuk industri manufaktur, identifikasi *motor starting load* (tip