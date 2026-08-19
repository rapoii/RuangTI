# Modul 429: Material Teknik (Engineering Materials), Struktur Kristal Logam (BCC/FCC/HCP), Diagram Fasa Fe-Fe3C, Uji Tarik (ASTM E8), Uji Kekerasan, dan Perlakuan Panas (Heat Treatment)

## 1. Domain Akademik & Ruang Lingkup
Mata kuliah **Material Teknik** mempelajari hubungan antara struktur atom/kristal, pemrosesan termal/mekanik, serta sifat mekanik, termal, dan kimia material industri (logam fero & non-fero, polimer termoplastik/termoset, keramik teknis, dan komposit serat).

---

## 2. Struktur Kisi Kristal Logam Murni

```
[Body-Centered Cubic (BCC)]       [Face-Centered Cubic (FCC)]       [Hexagonal Close-Packed (HCP)]
 - Atom di 8 sudut + 1 di pusat    - Atom di 8 sudut + 6 di muka     - Susunan heksagonal berlapis ABAB
 - Koordinasi: 8                   - Koordinasi: 12                  - Koordinasi: 12
 - APF (Atomic Packing Factor):    - APF: 0.74 (Paling rapat)        - APF: 0.74
   0.68                            - Karakter: Sangat ulet (ductile) - Karakter: Getas / getas geser
 - Contoh: Besi Alpha (Fe-alpha),  - Contoh: Besi Gamma (Austenit),  - Contoh: Seng (Zn), Magnesium (Mg),
   Kromium (Cr), Tungsten (W)        Aluminium (Al), Tembaga (Cu)      Titanium Alpha (Ti)
```

---

## 3. Diagram Fasa Keseimbangan Biner Besi - Karbon ($Fe-Fe_3C$)

Diagram fasa menunjukkan struktur mikro baja dan besi cor pada berbagai temperatur ($0 - 1600^\circ\text{C}$) dan kadar karbon ($0 - 6.67\%\text{ C}$):

```
Suhu (°C)
 1538 ^  [Cair (Liquid)]
      |        \
 1495 |         [Delta-Ferrite]
      |               \
 1147 |--- (Eutektik 4.3% C) ---------------------------- [Austenit + Sementit (Ledeburit)]
      |   | [Austenit (Gamma - FCC)]                      |
      |   | (Kelarutan C maks 2.14%)                      |
  912 |   /                                               |
      |  / (Garis A3)                                     |
  727 |--- (Eutektoid 0.76% C - Garis A1) ----------------+ [Besi Cor / Cast Iron (> 2.14% C)]
      |   |                                               |
      | [Ferit (Alpha-BCC)] + [Perlit (Alpha + Fe3C)]     | [Baja Hipereutektoid + Sementit]
  25  +---+-----------------------+-----------------------+--------------------------------->
      0  0.022                  0.76                    2.14                            6.67 %C
       (Baja Hipoeutektoid)    (Eutektoid)           (Baja Hipereutektoid)
```

### 3 Reaksi Fasa Kritis:
1. **Reaksi Eutektoid ($727^\circ\text{C}, 0.76\%\text{ C}$)**: $\text{Austenit } (\gamma) \xrightarrow{\text{Pendinginan Lambat}} \text{Ferit } (\alpha) + \text{Sementit } (\text{Fe}_3\text{C})$ [Membentuk Struktur Perlit / Lamellar].
2. **Reaksi Eutektik ($1147^\circ\text{C}, 4.3\%\text{ C}$)**: $\text{Cairan } (L) \to \text{Austenit } (\gamma) + \text{Sementit } (\text{Fe}_3\text{C})$ [Membentuk Ledeburit].
3. **Reaksi Peritektik ($1495^\circ\text{C}, 0.16\%\text{ C}$)**: $\text{Delta-Ferit } (\delta) + \text{Cairan } (L) \to \text{Austenit } (\gamma)$.

---

## 4. Pengujian Mekanik: Uji Tarik Standar ASTM E8

Menghasilkan kurva Tegangan Rekayasa ($\sigma$) vs Regangan Rekayasa ($\epsilon$):

$$\sigma = \frac{F}{A_0}, \quad \epsilon = \frac{\Delta L}{L_0} = \frac{L - L_0}{L_0}$$

### Besaran Mekanik yang Diperoleh:
1. **Modulus Elastisitas Young ($E$ - Hukum Hooke)**:
   $$E = \frac{\sigma}{\epsilon} \quad (\text{Kemampuan material menahan deformasi elastis / kekakuan})$$
2. **Kekuatan Luluh / Yield Strength ($\sigma_y$ / $\sigma_{0.2\%}$)**: Tegangan saat terjadi deformasi plastis permanen offset $0.2\%$ regangan.
3. **Kekuatan Tarik Maksimum / Ultimate Tensile Strength ($\sigma_{\text{uts}}$)**: Tegangan tertinggi pada kurva sebelum terjadi penciutan (*necking*).
4. **Keuletan / Ductility**:
   $$\%EL = \frac{L_f - L_0}{L_0} \times 100\%, \quad \%RA = \frac{A_0 - A_f}{A_0} \times 100\%$$
5. **Ketangguhan / Modulus of Toughness ($U_T$)**: Luas area di bawah seluruh kurva tegangan-regangan dari awal hingga patah ($U_T = \int_0^{\epsilon_f} \sigma d\epsilon$).

---

## 5. Metode Uji Kekerasan Material (Hardness Testing)

1. **Uji Brinell (HBW)**: Indentor bola karbida tungsten diameter $D = 10\text{ mm}$, beban $F = 3000\text{ kgf}$:
   $$\text{HBW} = \frac{2F}{\pi D \left( D - \sqrt{D^2 - d^2} \right)}$$
2. **Uji Rockwell (HRA, HRB, HRC)**: Mengukur kedalaman penetrasi indentor kerucut intan $120^\circ$ (Skala HRC beban mayor $150\text{ kgf}$) atau bola baja 1/16" (Skala HRB beban mayor $100\text{ kgf}$).
3. **Uji Vickers (HV)**: Indentor piramida intan bersudut $136^\circ$:
   $$\text{HV} = 1.8544 \times \frac{F}{d^2}$$

---

## 6. Perlakuan Panas Logam (Heat Treatment Processes)

1. **Annealing (Penyepuhan Lunak)**: Pemanasan di atas suhu kritis $A_3/A_1$, ditahan (*holding*), lalu didinginkan sangat lambat di dalam tungku (*furnace cooling*) $\to$ Menghilangkan tegangan sisa, struktur ferit-perlit kasar yang lunak dan mudah dimesin.
2. **Normalizing**: Pemanasan di atas $A_3$, didinginkan di udara terbuka $\to$ Struktur butir halus seragam dengan kekuatan lebih tinggi dari annealing.
3. **Quenching (Pengerasan Cepat)**: Pendinginan ekstrem cepat dari fasa austenit menggunakan media air/oli $\to$ Atom karbon terperangkap dalam kisi besi, mengubah fasa menjadi **Martensit** (struktur kristal BCT yang sangat keras tapi getas).
4. **Tempering**: Pemanasan ulang martensit pada suhu sub-kritis ($150 - 650^\circ\text{C}$) $\to$ Mentransformasikan martensit getas menjadi **Tempered Martensite** yang memiliki kombinasi kekerasan dan ketangguhan benturan (*impact toughness*) optimal.

---

## 7. Referensi Terverifikasi (Academic & Industrial Standards)
- Callister, W. D., & Rethwisch, D. G. (2020). *Materials Science and Engineering: An Introduction* (10th ed.). John Wiley & Sons.
- Askeland, D. R., & Wright, W. J. (2016). *The Science and Engineering of Materials* (7th ed.). Cengage Learning.
- ASTM International. (2022). *ASTM E8/E8M-22: Standard Test Methods for Tension Testing of Metallic Materials*. West Conshohocken: ASTM.
- Muhazir, A. (2026). *Material Teknik untuk Rekayasa Industri dan Manufaktur Modern*. Jakarta: Penerbit Cideka.
