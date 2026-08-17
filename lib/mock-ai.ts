import { ModelOption } from "./types";

interface GenerationOptions {
  model?: ModelOption;
  signal?: AbortSignal;
}

const SAMPLE_TI_RESPONSES: Record<string, string> = {
  layout: `### Analisis & Panduan Perancangan Tata Letak Fasilitas (PTLF)

Dalam merancang tata letak pabrik yang optimal untuk meminimalkan *Material Handling Cost* (MHC), berikut adalah metodologi sistematis yang baku:

#### 1. Formulasi Matriks Kuantitatif: From-To Chart
Matriks ini menghitung total momen perpindahan material antara departemen $i$ dan $j$:

\`\`\`math
MHC = \\sum_{i=1}^n \\sum_{j=1}^n (D_{ij} \\times F_{ij} \\times C_{ij})
\`\`\`

**Keterangan Parameter:**
- **$D_{ij}$** : Jarak lintasan antara departemen $i$ ke departemen $j$ (meter)
- **$F_{ij}$** : Frekuensi perpindahan material per satuan periode (trip/hari)
- **$C_{ij}$** : Biaya pemindahan bahan per meter atau per satuan jarak (Rp/meter)

#### 2. Analisis Kualitatif: Activity Relationship Chart (ARC)
Untuk faktor-faktor kualitatif (kebisingan, debu, aliran dokumen, keselamatan kerja), gunakan derajat hubungan:
- **A (Absolutely Necessary)**: Nilai 4 — Sangat mutlak berdekatan
- **E (Especially Important)**: Nilai 3 — Sangat penting
- **I (Important)**: Nilai 2 — Penting
- **O (Ordinary Closeness)**: Nilai 1 — Kedekatan biasa
- **U (Unimportant)**: Nilai 0 — Tidak penting
- **X (Undesirable)**: Nilai -1 — Harus dijauhkan (misal: Ruang Genset vs Laboratorium Kalibrasi)

#### 3. Rekomendasi Algoritma Penataan
Gunakan algoritma konstruksi seperti **CORELAP** atau algoritma perbaikan seperti **CRAFT** untuk melakukan *pairwise exchange* antar departemen hingga diperoleh total jarak terpendek.`,

  lean: `### Implementasi Metodologi DMAIC pada Lini Produksi

Untuk mereduksi tingkat cacat (*defect rate*) dan mengeliminasi pemborosan (*waste / muda*), langkah-langkah **DMAIC Six Sigma** diterapkan secara bertahap:

\`\`\`markdown
1. DEFINE   -> Piagam Proyek (Project Charter), SIPOC, Voice of Customer (VOC -> CTQ)
2. MEASURE  -> Check Sheet, DPU/DPMO, Pengukuran Kapabilitas Proses (Cp & Cpk)
3. ANALYZE  -> Pareto 80/20, Diagram Tulang Ikan (Fishbone 5M+1E), 5-Why Analysis
4. IMPROVE  -> FMEA (Failure Mode and Effects Analysis), Kaizen Event, Poka-Yoke Design
5. CONTROL  -> Peta Kendali (SPC: X-bar & R / p-chart), SOP Baru, Visual Factory (5S)
\`\`\`

#### Contoh Perhitungan DPMO & Sigma Level
Jika dalam produksi $N = 10.000$ unit terdapat $D = 45$ cacat dengan peluang cacat per unit $O = 5$:

\`\`\`math
DPMO = \\frac{D}{N \\times O} \\times 10^6 = \\frac{45}{10000 \\times 5} \\times 10^6 = 900
\`\`\`

*Nilai 900 DPMO setara dengan **$\\approx 4.62\\sigma$** (di atas rata-rata industri manufaktur standar).*`,

  inventory: `### Optimasi Persediaan: Model EOQ & Titik Pemesanan Kembali (ROP)

Berikut formulasi optimasi persediaan deterministik untuk meminimalkan *Total Inventory Cost*:

\`\`\`python
import math

def calculate_inventory_policy(annual_demand, order_cost, holding_cost_per_unit, lead_time_days, work_days_per_year=300):
    # 1. Economic Order Quantity (EOQ)
    eoq = math.sqrt((2 * annual_demand * order_cost) / holding_cost_per_unit)
    
    # 2. Daily Demand Rate (d)
    daily_demand = annual_demand / work_days_per_year
    
    # 3. Reorder Point (ROP) tanpa safety stock
    rop = daily_demand * lead_time_days
    
    # 4. Total Annual Relevant Cost (TRC)
    total_cost = (annual_demand / eoq) * order_cost + (eoq / 2) * holding_cost_per_unit
    
    return {
        "EOQ_units": round(eoq, 2),
        "ROP_units": round(rop, 2),
        "Total_Holding_and_Order_Cost": round(total_cost, 2),
        "Orders_Per_Year": round(annual_demand / eoq, 2)
    }

# Contoh Kasus Komponen Pabrik:
# Permintaan: 12.000 unit/tahun, Biaya Pesan: Rp 250.000, Biaya Simpan: Rp 4.000/unit/thn, Lead Time: 5 hari
hasil = calculate_inventory_policy(12000, 250000, 4000, 5)
print(hasil)
# Output: {'EOQ_units': 1224.74, 'ROP_units': 200.0, 'Total_Holding_and_Order_Cost': 4898979.49, 'Orders_Per_Year': 9.8}
\`\`\`

Dengan menerapkan lot ukuran **EOQ = 1.225 unit** dan pemesanan kembali saat sisa stok **ROP = 200 unit**, efisiensi biaya penyimpanan dan pemesanan tercapai secara optimal.`,
};

export async function* simulateTokenStream(
  prompt: string,
  options?: GenerationOptions
): AsyncGenerator<string, void, unknown> {
  const signal = options?.signal;
  const p = prompt.toLowerCase();

  let responseText = "";
  if (p.includes("layout") || p.includes("tata letak") || p.includes("arc") || p.includes("ptlf") || p.includes("pabrik")) {
    responseText = SAMPLE_TI_RESPONSES.layout;
  } else if (p.includes("lean") || p.includes("six sigma") || p.includes("dmaic") || p.includes("cacat") || p.includes("kualitas") || p.includes("kaizen")) {
    responseText = SAMPLE_TI_RESPONSES.lean;
  } else if (p.includes("eoq") || p.includes("persediaan") || p.includes("inventory") || p.includes("rop") || p.includes("supply chain") || p.includes("logistik")) {
    responseText = SAMPLE_TI_RESPONSES.inventory;
  } else {
    responseText = `### Respons Konsultasi Teknik Industri — RuangTI

Terima kasih atas pertanyaan Anda mengenai: **"${prompt}"**

Dalam disiplin **Teknik Industri**, pendekatan terhadap permasalahan ini dilakukan melalui pendekatan sistem integral (*Integrated Systems Approach*) yang menghubungkan manusia, material, mesin, modal, metode, dan energi (*6M*):

1. **Identifikasi Sistem & Batasan Masalah**:
   - Memetakan proses *as-is* ke dalam *Flow Process Chart* atau *Value Stream Map*.
   - Menentukan variabel keputusan (*decision variables*), fungsi tujuan (*objective function*), dan batasan (*constraints* kapasitas, waktu baku, serta ergonomi).

2. **Analisis Kuantitatif & Simulasi**:
   - Pengumpulan data waktu siklus (*Cycle Time* vs *Takt Time*) dan perhitungan efisiensi lintasan (*Line Efficiency*).
   - Penggunaan model optimasi stokastik atau program linier untuk menghasilkan solusi terbaik.

3. **Continuous Improvement (Kaizen)**:
   - Implementasi standardisasi kerja (SOP), kontrol visual 5S, dan otomatisasi rendah biaya (*Jidoka*).`;
  }

  // Tokenize response into words/chunks
  const tokens = responseText.split(/(?<=\s)|(?<=[.,\n#\$\*])/);

  for (let i = 0; i < tokens.length; i++) {
    if (signal?.aborted) {
      return;
    }

    yield tokens[i];

    // Jitter delay for realistic typing pace
    const delay = Math.floor(Math.random() * 20) + 12;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
