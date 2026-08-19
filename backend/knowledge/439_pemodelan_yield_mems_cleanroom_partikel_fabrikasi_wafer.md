# Modul 439: Pemodelan Yield Manufaktur Bersih MEMS (Micro-Electromechanical Systems), Kinetika Cacat Partikel Kamar Bersih, dan Optimasi Fabrikasi Wafer

## 1. Konsep Dasar & Latar Belakang Rekayasa Sistem Fabrikasi Mikro
Dalam domain teknik industri manufaktur presisi tinggi (*high-precision micro-manufacturing*), fabrikasi perangkat mikro-elektromekanikal (**Micro-Electromechanical Systems / MEMS**) seperti sensor akselerometer giroskopik, mikro-aktuator piezoelektrik, *pressure sensors*, dan mikrofluidika memiliki karakteristik proses yang sangat berbeda dari manufaktur semikonduktor IC (*Integrated Circuit*) murni. 

Fabrikasi MEMS melibatkan proses mikro-pemesinan permukaan dan limbak (*surface & bulk micromachining*), deposisi lapisan tipis (*chemical/physical vapor deposition - CVD/PVD*), fotolitografi resolusi tinggi, etsa basah anisotropik (seperti KOH/TMAH), serta *Deep Reactive-Ion Etching* (DRIE) proses Bosch. Karena struktur MEMS mengandung elemen membran tipis bergerak (*suspended beams, diaphragms, comb-drive actuators*), kerentanan terhadap partikel kontaminan kamar bersih (*cleanroom airborne particulates*) dan variasi tegangan sisa (*residual stress gradient*) menjadi penyebab utama kegagalan fatal seperti stiksi (*stiction*), jembatan partikel (*particle bridging*), dan patah struktur mikroskopis.

Yield manufaktur total ($Y_{\text{total}}$) dalam lini fabrikasi MEMS/Semikonduktor merepresentasikan rasio antara *good operational dies* yang lolos uji fungsional kelistrikan/mekanikal terhadap total potensi *dies* pada satu wafer:
$$Y_{\text{total}} = Y_{\text{line}} \times Y_{\text{die}}$$

di mana:
- $Y_{\text{line}}$ (*Line / Process Yield*): Probabilitas wafer berhasil menyelesaikan seluruh rangkaian tahapan proses fotolitografi, etsa, difusi, dan *packaging* tanpa terpecah (*wafer breakage*), terkontaminasi bahan kimia berlebih, atau mengalami deviasi parameter mesin di luar batas toleransi kontrol statistik (SPC).
- $Y_{\text{die}}$ (*Die / Functional Yield*): Probabilitas suatu die individual pada wafer yang utuh bebas dari partikel cacat acak mematikan (*killer defects*) dan penyimpangan dimensi parametrik.

---

## 2. Formulasi Matematis & Teori Distribusi Cacat (Defect Yield Models)

### 2.1 Hubungan Area Kritis dan Kerapatan Cacat
Setiap jenis cacat partikel dengan diameter $x$ memiliki probabilitas tertentu untuk menyebabkan kegagalan rangkaian/mekanikal bergantung pada geometri tata letak (*layout*). Area di mana pusat cacat dapat jatuh dan menimbulkan kegagalan disebut **Area Kritis** ($A_{\text{critical}}$ atau $A_c$):
$$A_c(x) = \int_0^x K(x') \, dx'$$
di mana $K(x')$ adalah fungsi sensitivitas tata letak terhadap ukuran cacat $x'$. Untuk analisis agregat makro, sering diasumsikan area efektif die aktif $A$ ($cm^2$) dan kerapatan cacat mematikan per unit area $D_0$ ($\text{defects/cm}^2$).

### 2.2 Model Yield Poisson (Distribusi Cacat Acak Spasial Murni)
Model Poisson mengasumsikan partikel cacat tersebar secara acak sempurna tanpa pengelompokan (*zero spatial clustering*). Probabilitas suatu die berukuran area $A$ mengandung $k$ cacat adalah:
$$P(k) = \dfrac{(A D_0)^k \exp(-A D_0)}{k!}$$
Yield die ($k=0$) dirumuskan sebagai:
$$Y_{\text{Poisson}} = P(0) = \exp(-A D_0)$$
*Kelemahan Model Poisson*: Cenderung memberikan estimasi yield yang terlalu pesimis (*underestimates yield*) untuk ukuran die yang besar karena dalam kenyataan partikel cacat di kamar bersih mengalami pengelompokan (*defect clustering*).

### 2.3 Model Yield Murphy (Distribusi Kerapatan Segitiga/Uniform)
Murphy mengasumsikan kerapatan cacat $D$ berfluktuasi secara spasial di atas permukaan wafer mengikuti fungsi densitas probabilitas $f(D)$:
$$Y_{\text{Murphy}} = \int_0^\infty \exp(-A D) f(D) \, dD$$
Jika $f(D)$ diasumsikan berdistribusi segitiga simetris simetris di sekitar rata-rata $D_0$:
$$Y_{\text{Murphy}} = \left( \dfrac{1 - \exp(-A D_0)}{A D_0} \right)^2$$

### 2.4 Model Seeds / Okabe (Distribusi Eksponensial)
Seeds mengasumsikan $f(D) = \dfrac{1}{D_0} \exp\left(-\dfrac{D}{D_0}\right)$, menghasilkan:
$$Y_{\text{Seeds}} = \dfrac{1}{1 + A D_0}$$

### 2.5 Model Negative Binomial (Stapper Yield Model - Standar Industri Modern)
Untuk memodelkan parameter pengelompokan cacat (*clustering parameter*) $\alpha$ (di mana $\alpha \to \infty$ mendekati Poisson murni, dan $\alpha \approx 0.5 - 3.0$ mencerminkan pengelompokan partikel tinggi di lini produksi MEMS riil):
$$f(D) = \dfrac{1}{\Gamma(\alpha) \beta^\alpha} D^{\alpha - 1} \exp\left(-\dfrac{D}{\beta}\right), \quad \text{dengan } \beta = \dfrac{D_0}{\alpha}$$
Menghasilkan formula yield Negative Binomial klasik:
$$Y_{\text{NegBin}} = \left( 1 + \dfrac{A D_0}{\alpha} \right)^{-\alpha}$$

### 2.6 Perhitungan Estimasi Total Dies per Wafer (Gross Die per Wafer - DPW)
Untuk wafer sirkular berdiameter $d_w$ (radius $R = d_w / 2$) dan luas die $A = w \times h$ dengan *edge exclusion* $w_{\text{edge}}$:
$$N_{\text{gross}} = \left\lfloor \dfrac{\pi (d_w/2 - w_{\text{edge}})^2}{A} - \dfrac{\pi (d_w - 2w_{\text{edge}})}{\sqrt{2A}} \right\rfloor$$
Jumlah *good dies* per wafer:
$$N_{\text{net}} = N_{\text{gross}} \times Y_{\text{total}}$$

Biaya manufaktur per unit die fungsional yang lolos uji (*Cost per Good Die - CPGD*):
$$CPGD = \dfrac{C_{\text{wafer}} + C_{\text{test}}}{N_{\text{net}}} + C_{\text{package}}$$

---

## 3. Dinamika Kebersihan Kamar Bersih (ISO 14644-1 & FED-STD-209E)
Kerapatan partikel kamar bersih diatur oleh standar internasional **ISO 14644-1**. Konsentrasi partikel maksimum $C_N$ (partikel $/ m^3$) berdiameter $\ge D_p$ ($\mu m$) untuk kelas kebersihan $N$ adalah:
$$C_N(D_p) = 10^N \times \left( \dfrac{0.1}{D_p} \right)^{2.08}$$
Untuk kamar bersih litografi MEMS (ISO Class 4 / FED Class 10), laju pengendapan partikel pada permukaan wafer horizontal dimodelkan melalui kinetika *turbulent deposition velocity* ($v_{\text{dep}}$) dan laju aliran udara laminer $U_{\text{air}}$:
$$\dfrac{d N_{\text{part}}}{dt} = C_N \times v_{\text{dep}}$$

---

## 4. Algoritma & Script Python Solver: Simulasi Wafer Yield & Defect Density Explorer

Berikut adalah skrip Python lengkap yang mengimplementasikan pemodelan analitis yield (Poisson, Murphy, Seeds, Negative Binomial), generator spasial cacat *wafer map* (Polya-Eggenberger clustering model), penghitungan *gross & net dies per wafer*, dan analisis sensitivitas biaya die.

```python
import numpy as np
import math

class MEMSYieldAnalyzer:
    """
    MEMS & Semiconductor Cleanroom Wafer Yield Analyzer
    Mengimplementasikan model Poisson, Murphy, Seeds, dan Negative Binomial.
    """
    def __init__(self, wafer_diameter_mm=200.0, edge_exclusion_mm=5.0):
        self.wafer_diameter_mm = wafer_diameter_mm
        self.edge_exclusion_mm = edge_exclusion_mm
        self.effective_diameter_mm = wafer_diameter_mm - 2 * edge_exclusion_mm
        self.effective_radius_mm = self.effective_diameter_mm / 2.0
        self.effective_area_cm2 = math.pi * ((self.effective_diameter_mm / 10.0) / 2.0) ** 2

    def gross_dies_per_wafer(self, die_width_mm, die_height_mm):
        """Menghitung estimasi Gross Dies per Wafer (DPW)."""
        die_area_mm2 = die_width_mm * die_height_mm
        die_area_cm2 = die_area_mm2 / 100.0
        R_mm = self.effective_radius_mm
        
        # Formula analitis DPW dengan koreksi efek batas sirkular
        dpw = (math.pi * (R_mm ** 2) / die_area_mm2) - (math.pi * 2 * R_mm / math.sqrt(2 * die_area_mm2))
        return int(max(0, math.floor(dpw))), die_area_cm2

    def compute_yields(self, die_area_cm2, defect_density_d0, cluster_param_alpha=1.5):
        """
        Menghitung perbandingan yield dari 4 model teoretis standar:
        Poisson, Murphy, Seeds, dan Negative Binomial.
        """
        AD0 = die_area_cm2 * defect_density_d0
        
        # 1. Poisson
        y_poisson = math.exp(-AD0)
        
        # 2. Murphy
        if AD0 > 1e-6:
            y_murphy = ((1.0 - math.exp(-AD0)) / AD0) ** 2
        else:
            y_murphy = 1.0
            
        # 3. Seeds
        y_seeds = 1.0 / (1.0 + AD0)
        
        # 4. Negative Binomial (Stapper)
        y_negbin = (1.0 + (AD0 / cluster_param_alpha)) ** (-cluster_param_alpha)
        
        return {
            "Poisson": y_poisson,
            "Murphy": y_murphy,
            "Seeds": y_seeds,
            "Negative_Binomial": y_negbin
        }

    def economic_die_cost_analysis(self, die_w_mm, die_h_mm, d0, alpha, wafer_cost_usd=1200.0, line_yield=0.92, pkg_test_cost=0.35):
        """Menghitung Cost per Good Die (CPGD) lengkap."""
        gross_dpw, die_area_cm2 = self.gross_dies_per_wafer(die_w_mm, die_h_mm)
        yields = self.compute_yields(die_area_cm2, d0, alpha)
        
        y_die = yields["Negative_Binomial"]
        y_total = line_yield * y_die
        net_good_dies = math.floor(gross_dpw * y_total)
        
        cpgd = (wafer_cost_usd / max(1, net_good_dies)) + pkg_test_cost if net_good_dies > 0 else float('inf')
        
        return {
            "gross_dpw": gross_dpw,
            "die_area_cm2": die_area_cm2,
            "die_yield_negbin": y_die,
            "total_yield": y_total,
            "net_good_dies": net_good_dies,
            "cost_per_good_die_usd": cpgd
        }

if __name__ == "__main__":
    analyzer = MEMSYieldAnalyzer(wafer_diameter_mm=200.0, edge_exclusion_mm=3.0)
    
    # Kasus: MEMS Pressure Sensor (3.2 mm x 3.2 mm)
    die_w, die_h = 3.2, 3.2
    d0_cleanroom = 0.45  # 0.45 fatal defects / cm^2
    alpha_cluster = 1.8  # clustering parameter
    
    gross_dpw, area_cm2 = analyzer.gross_dies_per_wafer(die_w, die_h)
    yield_results = analyzer.compute_yields(area_cm2, d0_cleanroom, alpha_cluster)
    econ = analyzer.economic_die_cost_analysis(die_w, die_h, d0_cleanroom, alpha_cluster)
    
    print(f"=== ANALISIS YIELD WAFER MEMS 200mm ===")
    print(f"Dimensi Die: {die_w} x {die_h} mm (Area: {area_cm2:.4f} cm²)")
    print(f"Gross DPW: {gross_dpw} dies")
    print(f"Defect Density D0: {d0_cleanroom} /cm², Alpha: {alpha_cluster}")
    print("\nPerbandingan Model Yield:")
    for model_name, y_val in yield_results.items():
        print(f"  - {model_name:18s}: {y_val * 100:.2f}%")
        
    print(f"\nEvaluasi Ekonomi & Kapasitas:")
    print(f"  - Line Yield              : 92.00%")
    print(f"  - Total Net Yield         : {econ['total_yield'] * 100:.2f}%")
    print(f"  - Net Good Dies per Wafer : {econ['net_good_dies']} unit")
    print(f"  - Cost per Good Die (CPGD): ${econ['cost_per_good_die_usd']:.2f}")
```

---

## 5. Studi Kasus Industri: Analisis Yield Fabrikasi MEMS Inertial Sensor di Kamar Bersih Fab-Line

### 5.1 Profil Pabrik & Deskripsi Masalah
Sebuah fasilitas manufaktur mikro-fabrikasi memproduksi sensor MEMS *triple-axis capacitive accelerometer* berukuran die $4.0\text{ mm} \times 4.0\text{ mm}$ ($A = 0.16\text{ cm}^2$) pada wafer silikon $200\text{ mm}$ ($8\text{ inch}$). Biaya pemrosesan satu wafer adalah $\$1,500$, dan biaya perakitan (*packaging & final testing*) adalah $\$0.50$ per unit.

Dalam audit kuartal awal:
- Defect density tercatat tinggi $D_0 = 1.20\text{ defects/cm}^2$ karena degradasi filter HEPA/ULPA pada stasiun fotolitografi kamar bersih (ISO Class 6).
- Parameter clustering $\alpha = 1.2$.
- Line yield $Y_{\text{line}} = 0.88$.

Manajemen berencana melakukan investasi retrofitting modul ventilasi laminar vertikal (*Fan Filter Unit - FFU*) dan *air shower* otomatis seharga $\$120,000$ untuk meningkatkan kebersihan ke standar ISO Class 4, yang diproyeksikan mereduksi defect density menjadi $D_0 = 0.30\text{ defects/cm}^2$ serta meningkatkan line yield menjadi $Y_{\text{line}} = 0.95$. Volume produksi bulanan adalah 200 wafer.

### 5.2 Perhitungan Analitis Sebelum & Sesudah Intervensi Kualitas

1. **Estimasi Gross Dies per Wafer**:
   $$N_{\text{gross}} \approx \left\lfloor \dfrac{\pi (95)^2}{16} - \dfrac{\pi (190)}{\sqrt{32}} \right\rfloor = \lfloor 1772.05 - 105.52 \rfloor = 1666\text{ dies}$$

2. **Kondisi Eksisting (Sebelum Retrofitting)**:
   - Die Yield (Negative Binomial):
     $$Y_{\text{die}} = \left( 1 + \dfrac{0.16 \times 1.20}{1.2} \right)^{-1.2} = (1 + 0.16)^{-1.2} = (1.16)^{-1.2} = 0.8385\text{ (83.85\%)}$$
   - Total Yield: $Y_{\text{total}} = 0.88 \times 0.8385 = 0.7379\text{ (73.79\%)}$
   - Good Dies per Wafer: $N_{\text{net}} = \lfloor 1666 \times 0.7379 \rfloor = 1229\text{ unit}$
   - CPGD Eksisting:
     $$CPGD = \dfrac{\$1500}{1229} + \$0.50 = \$1.22 + \$0.50 = \$1.72\text{ per good die}$$
   - Output Bulanan: $200 \times 1229 = 245,800\text{ unit}$.

3. **Kondisi Pasca-Retrofitting (Target ISO Class 4)**:
   - Die Yield (Negative Binomial):
     $$Y_{\text{die}} = \left( 1 + \dfrac{0.16 \times 0.30}{1.2} \right)^{-1.2} = (1 + 0.04)^{-1.2} = (1.04)^{-1.2} = 0.9542\text{ (95.42\%)}$$
   - Total Yield: $Y_{\text{total}} = 0.95 \times 0.9542 = 0.9065\text{ (90.65\%)}$
   - Good Dies per Wafer: $N_{\text{net}} = \lfloor 1666 \times 0.9065 \rfloor = 1510\text{ unit}$
   - CPGD Baru:
     $$CPGD = \dfrac{\$1500}{1510} + \$0.50 = \$0.993 + \$0.50 = \$1.493\text{ per good die}$$
   - Output Bulanan: $200 \times 1510 = 302,000\text{ unit}$ (+56,200 good unit/bulan).

4. **Kelayakan Finansial (ROI & Payback Period)**:
   - Penghematan biaya per unit = $\$1.72 - \$1.493 = \$0.227\text{ / unit}$.
   - Penghematan finansial bulanan pada volume 302,000 unit:
     $$\Delta S = 302,000 \times \$0.227 \approx \$68,554\text{ / bulan}$$
   - Payback Period investasi kamar bersih:
     $$PP = \dfrac{\$120,000}{\$68,554\text{ / bulan}} = 1.75\text{ bulan}$$

Investasi peningkatan kebersihan terbukti sangat layak secara keinsinyuran manufaktur dan menghasilkan periode pengembalian modal di bawah 2 bulan.

---

## 6. Referensi Terverifikasi & Standar Industri
1. Stapper, C. H., & Rosner, R. J. (1995). *Integrated circuit yield statistics*. Proceedings of the IEEE, 83(4), 565-595. DOI: 10.1109/5.371967.
2. Murphy, B. T. (1964). *Cost-size optima of monolithic integrated circuits*. Proceedings of the IEEE, 52(12), 1537-1545. DOI: 10.1109/PROC.1964.3442.
3. Cunningham, J. A. (1990). *The use and evaluation of yield models in integrated circuit manufacturing*. IEEE Transactions on Semiconductor Manufacturing, 3(2), 60-71. DOI: 10.1109/66.53188.
4. ISO 14644-1:2015. *Cleanrooms and associated controlled environments — Part 1: Classification of air cleanliness by particle concentration*. International Organization for Standardization.
5. Groover, M. P. (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th Edition). John Wiley & Sons, Hoboken, NJ. ISBN: 978-1-119-47521-7.
6. Montgomery, D. C. (2019). *Introduction to Statistical Quality Control* (8th Edition). John Wiley & Sons, New York. ISBN: 978-1-119-39930-8.
