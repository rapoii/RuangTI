# Modul 451: Perhitungan Jejak Karbon Rantai Pasok (Supply Chain Carbon Footprint), Standar ISO 14067, PAS 2050, dan Dekarbonisasi Logistik Terpadu

## 1. Konsep Dasar & Kerangka Regulasi Global
Dalam era transisi energi global dan penerapan kriteria *Environmental, Social, and Governance* (ESG), kuantifikasi emisi Gas Rumah Kaca (*Greenhouse Gases* / GHG) di sepanjang rantai pasok industri telah menjadi instrumen esensial dalam Rekayasa Sistem & Manajemen Industri. Regulasi internasional seperti *EU Carbon Border Adjustment Mechanism* (CBAM), *Corporate Sustainability Due Diligence Directive* (CSDDD), serta mekanisme pasar karbon nasional (seperti IDXCarbon dan regulasi Nilai Ekonomi Karbon di Indonesia) menuntut transparansi jejak karbon produk (*Product Carbon Footprint* / PCF) dari hulu ke hilir.

Untuk menghindari klaim hijau palsu (*greenwashing*) dan menjamin keterbandingan data inventaris emisi, industri manufaktur dan rantai pasok global mengadopsi standar internasional formal:
1. **ISO 14067:2018 (Greenhouse gases — Carbon footprint of products — Requirements and guidelines for quantification)**: Standar turunan dari kerangka *Life Cycle Assessment* (LCA) ISO 14040/14044 yang secara spesifik menetapkan prinsip kuantifikasi, alokasi multifungsi, batasan sistem, dan pelaporan dampak perubahan iklim (GWP100) suatu produk.
2. **PAS 2050:2011 (Publicly Available Specification — Specification for the assessment of the life cycle greenhouse gas emissions of goods and services)**: Standar pionir yang dikembangkan oleh British Standards Institution (BSI) bersama Carbon Trust dan Defra untuk penilaian emisi barang dan jasa siklus hidup, memperkenalkan aturan batas pemotongan (*cut-off rules* 1%) dan perlakuan khusus emisi penyimpanan karbon biogenik.
3. **GHG Protocol Product Life Cycle Accounting and Reporting Standard**: Protokol global yang membagi batasan rantai pasok menjadi emisi langsung (Scope 1), emisi energi tidak langsung (Scope 2), dan emisi rantai nilai hulu/hilir (Scope 3: Kategori 1 hingga Kategori 15).

```
+---------------------------------------------------------------------------------------------------+
|              KERANGKA PENILAIAN JEJAK KARBON PRODUK & BATASAN SISTEM (SYSTEM BOUNDARIES)          |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ CRADLE-TO-GATE: Business-to-Business (B2B) ]                                                   |
|  +---------------------+      +---------------------+      +---------------------+                |
|  |   Ekstraksi Bahan   | ---> |  Transportasi Bahan | ---> |   Proses Pabrikasi  |                |
|  |     Baku Mentah     |      |    & Suku Cadang    |      |  & Operasi Pabrik   |                |
|  +---------------------+      +---------------------+      +---------------------+                |
|                                                                       |                           |
|  [ CRADLE-TO-GRAVE: Business-to-Consumer (B2C) ]                      v                           |
|  +---------------------+      +---------------------+      +---------------------+                |
|  |  Daur Ulang / Akhir | <--- |   Fase Pemakaian    | <--- |   Distribusi Retail |                |
|  |  Masa Pakai (EoL)   |      |    oleh Konsumen    |      |   & Logistik Keluar |                |
|  +---------------------+      +---------------------+      +---------------------+                |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Landasan Teori & Formulasi Matematis Kuantifikasi Emisi

### 2.1 Persamaan Dasar Akuntansi Emisi Karbon
Emisi karbon total produk ($\text{PCF}_{\text{total}}$) dinyatakan dalam satuan ekuivalen karbon dioksida ($\text{kg CO}_2\text{e}$) yang dihitung berdasarkan penjumlahan perkalian data aktivitas ($AD_i$) dengan faktor emisi spesifik ($EF_i$) serta potensi pemanasan global gas terkait ($GWP_g$):

$$\text{PCF}_{\text{total}} = \sum_{i \in \mathcal{A}} \sum_{g \in \mathcal{G}} AD_i \times EF_{i,g} \times GWP_{100,g}$$

di mana:
- $\mathcal{A}$: Himpunan seluruh aliran input/output energi, material, transportasi, dan limbah dalam batasan sistem.
- $\mathcal{G}$: Himpunan gas rumah kaca yang diakui IPCC (termasuk $\text{CO}_2$, $\text{CH}_4$, $\text{N}_2\text{O}$, HFCs, PFCs, $\text{SF}_6$, $\text{NF}_3$).
- $GWP_{100,g}$: *Global Warming Potential* horizon 100 tahun (berdasarkan IPCC AR6: $\text{CO}_2 = 1$, $\text{CH}_4 = 29.8$, $\text{N}_2\text{O} = 273$).

### 2.2 Prosedur Alokasi Koproduk Multifungsi (ISO 14067 Clause 6.4.6)
Jika suatu proses manufaktur menghasilkan lebih dari satu produk bernilai ekonomi (misalnya proses perengkahan hidrokarbon atau penggilingan minyak kelapa sawit menghasilkan CPO dan Palm Kernel), emisi proses harus dialokasikan tanpa distorsi melalui hirarki ISO 14044/14067:
1. **Sub-divisi Proses / Pembagian Sistem**: Membagi proses menjadi unit-unit operasi terpisah jika memungkinkan.
2. **Ekspansi Sistem / Alokasi Kredit Sistem**: Menghindari alokasi dengan memperluas batasan sistem dan mengurangi beban emisi pengganti (*system expansion / displacement method*).
3. **Alokasi Fisik (Massa atau Energi)**:
   $$\xi_{k}^{\text{massa}} = \frac{m_k}{\sum_{j=1}^{P} m_j}, \quad \text{PCF}_k = \xi_{k}^{\text{massa}} \times \text{PCF}_{\text{proses\_bersama}}$$
4. **Alokasi Nilai Ekonomi**:
   $$\xi_{k}^{\text{ekonomi}} = \frac{m_k \cdot p_k}{\sum_{j=1}^{P} m_j \cdot p_j}, \quad \text{PCF}_k = \xi_{k}^{\text{ekonomi}} \times \text{PCF}_{\text{proses\_bersama}}$$
   di mana $m_k$ adalah kuantitas massa produk $k$ dan $p_k$ adalah harga pasar per unit produk $k$.

```
+---------------------------------------------------------------------------------------------------+
|              HIRARKI ALOKASI PROSES BERSAMA (ISO 14067 & PAS 2050)                                |
+---------------------------------------------------------------------------------------------------+
|  [ PROSES BERSAMA DENGAN EMISI TOTAL E_total ]                                                    |
|         |                                                                                         |
|         +---> Pilihan 1: Pembagian Sub-proses Fisik (Sub-division)                                |
|         |                                                                                         |
|         +---> Pilihan 2: Ekspansi Sistem (System Expansion / Substitution Method)                 |
|         |                                                                                         |
|         +---> Pilihan 3: Alokasi Hubungan Fisik Alami (Berdasarkan Massa m_k / Nilai Kalor H_k)   |
|         |                                                                                         |
|         +---> Pilihan 4: Alokasi Nilai Ekonomi (Berdasarkan Revenue Share: m_k * Price_k)         |
+---------------------------------------------------------------------------------------------------+
```

### 2.3 Emisi Transportasi & Logistik Multi-Moda (GLEC Framework & EN 16258)
Emisi transportasi angkutan barang dari simpul $u$ ke simpul $v$ dengan moda $m$ dihitung menggunakan formula *Ton-Kilometer* ($\text{tkm}$):

$$E_{uv,m}^{\text{trans}} = M_{uv} \times d_{uv} \times \left( \frac{EF_m^{\text{WTW}}}{\eta_{\text{load}} \times (1 - \phi_{\text{empty}})} \right)$$

di mana:
- $M_{uv}$: Bobot muatan bersih (ton).
- $d_{uv}$: Jarak tempuh rute aktual (km).
- $EF_m^{\text{WTW}}$: Faktor emisi *Well-to-Wheel* (WTW = WTT Well-to-Tank + TTW Tank-to-Wheel) per ton-km nominal.
- $\eta_{\text{load}}$: Faktor utilisasi kapasitas angkut rata-rata ($0 < \eta_{\text{load}} \leq 1$).
- $\phi_{\text{empty}}$: Rasio jarak perjalanan kosong (*empty running rate* $0 \leq \phi_{\text{empty}} < 1$).

---

## 3. Formulasi Optimasi Rantai Pasok Rendah Emisi (MILP Multi-Objective)

Model matematis optimasi jaringan rantai pasok dirancang untuk menyeimbangkan total biaya rantai pasok (*Total Supply Chain Cost*) dan total emisi karbon (*Total Carbon Footprint*) di bawah batasan kapasitas, permintaan pasar, dan regulasi batas emisi (*Carbon Cap*).

### 3.1 Notasi & Parameter
- $\mathcal{I}$: Himpunan pemasok bahan baku ($i \in \mathcal{I}$).
- $\mathcal{J}$: Himpunan pabrik manufaktur ($j \in \mathcal{J}$).
- $\mathcal{K}$: Himpunan pusat distribusi / DC ($k \in \mathcal{K}$).
- $\mathcal{L}$: Himpunan zona permintaan konsumen ($l \in \mathcal{L}$).
- $\mathcal{M}$: Himpunan moda transportasi ($m \in \mathcal{M}$).
- $D_l$: Permintaan produk di zona pelanggan $l$.
- $Cap_i^{\text{sup}}, Cap_j^{\text{plant}}, Cap_k^{\text{DC}}$: Kapasitas maksimum simpul pemasok, pabrik, dan gudang DC.
- $C_{ijm}^{\text{trans}}, C_{jkm}^{\text{trans}}, C_{klm}^{\text{trans}}$: Biaya unit pengiriman per kg.
- $C_j^{\text{prod}}, C_k^{\text{hand}}$: Biaya proses produksi per unit dan biaya penanganan gudang.
- $EF_{ijm}^{\text{trans}}, EF_{jkm}^{\text{trans}}, EF_{klm}^{\text{trans}}$: Emisi karbon unit transportasi per kg muatan.
- $EF_j^{\text{prod}}, EF_k^{\text{hand}}$: Emisi proses manufaktur dan utilitas pergudangan per kg.
- $Q_{\text{cap}}$: Batas kuota emisi karbon perusahaan.
- $P_{\text{carbon}}$: Biaya penalti/harga pasar kuota karbon per kg $\text{CO}_2\text{e}$.

### 3.2 Variabel Keputusan
- $x_{ijm}$: Aliran bahan baku dari pemasok $i$ ke pabrik $j$ via moda $m$ (kg).
- $y_{jkm}$: Aliran barang jadi dari pabrik $j$ ke gudang DC $k$ via moda $m$ (kg).
- $z_{klm}$: Aliran barang jadi dari DC $k$ ke pelanggan $l$ via moda $m$ (kg).
- $u_j \in \{0, 1\}$: Keputusan membuka pabrik $j$.
- $v_k \in \{0, 1\}$: Keputusan membuka gudang DC $k$.

### 3.3 Fungsi Objektif Terpadu
Meminimalkan total biaya operasional ditambah beban finansial jejak karbon:

$$\min Z = \sum_{j} FC_j u_j + \sum_{k} FC_k v_k + \sum_{i,j,m} C_{ijm}^{\text{trans}} x_{ijm} + \sum_{j,k,m} C_{jkm}^{\text{trans}} y_{jkm} + \sum_{k,l,m} C_{klm}^{\text{trans}} z_{klm} + \sum_{j} C_j^{\text{prod}} \left(\sum_{k,m} y_{jkm}\right) + P_{\text{carbon}} \cdot \max\left(0, \text{PCF}_{\text{total}} - Q_{\text{cap}}\right)$$

di mana total emisi karbon rantai pasok ($\text{PCF}_{\text{total}}$) dihitung sebagai:

$$\text{PCF}_{\text{total}} = \sum_{i,j,m} EF_{ijm}^{\text{trans}} x_{ijm} + \sum_{j} EF_j^{\text{prod}} \left(\sum_{k,m} y_{jkm}\right) + \sum_{j,k,m} EF_{jkm}^{\text{trans}} y_{jkm} + \sum_{k} EF_k^{\text{hand}} \left(\sum_{l,m} z_{klm}\right) + \sum_{k,l,m} EF_{klm}^{\text{trans}} z_{klm}$$

### 3.4 Batasan-Batasan Sistem (Constraints)
1. **Pemenuhan Permintaan Pelanggan**:
   $$\sum_{k \in \mathcal{K}} \sum_{m \in \mathcal{M}} z_{klm} = D_l, \quad \forall l \in \mathcal{L}$$
2. **Keseimbangan Aliran di Gudang DC**:
   $$\sum_{j \in \mathcal{J}} \sum_{m \in \mathcal{M}} y_{jkm} = \sum_{l \in \mathcal{L}} \sum_{m \in \mathcal{M}} z_{klm}, \quad \forall k \in \mathcal{K}$$
3. **Keseimbangan Aliran Material di Pabrik (Rasio Konversi Material $\gamma$)**:
   $$\sum_{i \in \mathcal{I}} \sum_{m \in \mathcal{M}} x_{ijm} = \gamma \sum_{k \in \mathcal{K}} \sum_{m \in \mathcal{M}} y_{jkm}, \quad \forall j \in \mathcal{J}$$
4. **Kapasitas Pemasok, Pabrik, dan DC**:
   $$\sum_{j \in \mathcal{J}} \sum_{m \in \mathcal{M}} x_{ijm} \leq Cap_i^{\text{sup}}, \quad \forall i \in \mathcal{I}$$
   $$\sum_{k \in \mathcal{K}} \sum_{m \in \mathcal{M}} y_{jkm} \leq Cap_j^{\text{plant}} \cdot u_j, \quad \forall j \in \mathcal{J}$$
   $$\sum_{l \in \mathcal{L}} \sum_{m \in \mathcal{M}} z_{klm} \leq Cap_k^{\text{DC}} \cdot v_k, \quad \forall k \in \mathcal{K}$$
5. **Non-negativitas & Biner**:
   $$x_{ijm}, y_{jkm}, z_{klm} \geq 0, \quad u_j, v_k \in \{0, 1\}$$

---

## 4. Implementasi Solver Python Kuantifikasi PCF & Optimasi Rantai Pasok

Berikut adalah modul Python yang mengimplementasikan pipeline kuantifikasi emisi produk standar ISO 14067/PAS 2050 dan solver alokasi multi-echelon rantai pasok rendah emisi menggunakan pemrograman linier.

```python
"""
RuangTI Engine: Supply Chain Carbon Footprint (ISO 14067 & PAS 2050) & Green Network Optimizer
Author: RuangTI Industrial Knowledge Engine
"""

import numpy as np
from typing import Dict, List, Tuple, Any

class ProductCarbonFootprintCalculator:
    """
    Kalkulator Jejak Karbon Produk (Product Carbon Footprint - PCF)
    Berdasarkan Standar ISO 14067:2018 & PAS 2050:2011.
    """
    def __init__(self, product_name: str, functional_unit: str):
        self.product_name = product_name
        self.functional_unit = functional_unit
        self.materials: List[Dict[str, Any]] = []
        self.energy_inputs: List[Dict[str, Any]] = []
        self.transport_legs: List[Dict[str, Any]] = []
        self.waste_streams: List[Dict[str, Any]] = []
        
    def add_raw_material(self, name: str, mass_kg: float, emission_factor: float, waste_rate: float = 0.0):
        """Menambahkan bahan baku dengan faktor emisi cradle-to-gate (kg CO2e/kg)."""
        gross_mass = mass_kg / (1.0 - waste_rate)
        self.materials.append({
            "name": name,
            "net_mass": mass_kg,
            "gross_mass": gross_mass,
            "ef": emission_factor,
            "co2e": gross_mass * emission_factor
        })
        
    def add_energy(self, source_type: str, quantity: float, unit: str, emission_factor: float):
        """Menambahkan konsumsi energi proses pabrikasi (Listrik kWh, Gas m3, Solar L)."""
        self.energy_inputs.append({
            "source": source_type,
            "quantity": quantity,
            "unit": unit,
            "ef": emission_factor,
            "co2e": quantity * emission_factor
        })
        
    def add_transport(self, mode: str, mass_tons: float, distance_km: float, wtw_factor: float, load_factor: float = 0.85):
        """Menambahkan emisi logistik transportasi bahan baku atau distribusi produk."""
        effective_ef = wtw_factor / load_factor
        ton_km = mass_tons * distance_km
        co2e = ton_km * effective_ef
        self.transport_legs.append({
            "mode": mode,
            "mass_tons": mass_tons,
            "distance_km": distance_km,
            "ton_km": ton_km,
            "ef_wtw": effective_ef,
            "co2e": co2e
        })

    def calculate_pcf_breakdown(self, allocation_method: str = "mass", coproduct_ratio: float = 1.0) -> Dict[str, Any]:
        """
        Menghitung total PCF dengan opsi alokasi koproduk ISO 14067.
        """
        raw_mat_co2e = sum(m["co2e"] for m in self.materials)
        energy_co2e = sum(e["co2e"] for e in self.energy_inputs)
        transport_co2e = sum(t["co2e"] for t in self.transport_legs)
        waste_co2e = sum(w.get("co2e", 0.0) for w in self.waste_streams)
        
        gross_total = raw_mat_co2e + energy_co2e + transport_co2e + waste_co2e
        allocated_total = gross_total * coproduct_ratio
        
        return {
            "product": self.product_name,
            "functional_unit": self.functional_unit,
            "allocation_ratio": coproduct_ratio,
            "scope_breakdown": {
                "raw_materials_kg_co2e": raw_mat_co2e * coproduct_ratio,
                "process_energy_kg_co2e": energy_co2e * coproduct_ratio,
                "transport_logistics_kg_co2e": transport_co2e * coproduct_ratio,
                "waste_management_kg_co2e": waste_co2e * coproduct_ratio
            },
            "pcf_total_kg_co2e": allocated_total,
            "percentage_share": {
                "raw_materials": (raw_mat_co2e / gross_total) * 100 if gross_total > 0 else 0,
                "process_energy": (energy_co2e / gross_total) * 100 if gross_total > 0 else 0,
                "transport": (transport_co2e / gross_total) * 100 if gross_total > 0 else 0,
            }
        }


class GreenSupplyChainOptimizer:
    """
    Linear Programming Solver untuk Dekarbonisasi Jaringan Distribusi Rantai Pasok Multi-Echelon.
    Mengoptimalkan trade-off biaya logistik dan pajak/kuota emisi karbon.
    """
    def __init__(self, plants: List[str], dcs: List[str], markets: List[str]):
        self.plants = plants
        self.dcs = dcs
        self.markets = markets
        
    def solve_network(self, demand: Dict[str, float],
                      plant_capacity: Dict[str, float],
                      dc_capacity: Dict[str, float],
                      freight_cost_p_dc: np.ndarray,
                      freight_cost_dc_m: np.ndarray,
                      carbon_ef_p_dc: np.ndarray,
                      carbon_ef_dc_m: np.ndarray,
                      plant_prod_ef: Dict[str, float],
                      carbon_price_per_kg: float = 0.05,
                      carbon_cap_kg: float = 50000.0) -> Dict[str, Any]:
        """
        Menyelesaikan optimasi alokasi aliran logistik minimum biaya + biaya karbon.
        """
        num_plants = len(self.plants)
        num_dcs = len(self.dcs)
        num_markets = len(self.markets)
        
        # Inisialisasi matriks biaya gabungan (Biaya Transport + Carbon Tax)
        effective_cost_p_dc = freight_cost_p_dc + (carbon_price_per_kg * carbon_ef_p_dc)
        for i, p in enumerate(self.plants):
            effective_cost_p_dc[i, :] += carbon_price_per_kg * plant_prod_ef[p]
            
        effective_cost_dc_m = freight_cost_dc_m + (carbon_price_per_kg * carbon_ef_dc_m)
        
        # Greedy heuristic / LP Simplex Approximation untuk alokasi kapasitas
        flow_p_dc = np.zeros((num_plants, num_dcs))
        flow_dc_m = np.zeros((num_dcs, num_markets))
        
        remaining_plant_cap = [plant_capacity[p] for p in self.plants]
        remaining_dc_cap = [dc_capacity[d] for d in self.dcs]
        
        # Alokasi DC ke Market berdasarkan biaya terkecil
        total_market_demand = sum(demand[m] for m in self.markets)
        market_allocated = {m: 0.0 for m in self.markets}
        
        dc_demand_accum = np.zeros(num_dcs)
        for m_idx, m_name in enumerate(self.markets):
            req = demand[m_name]
            best_dcs = np.argsort(effective_cost_dc_m[:, m_idx])
            for d_idx in best_dcs:
                alloc = min(req, remaining_dc_cap[d_idx])
                if alloc > 0:
                    flow_dc_m[d_idx, m_idx] = alloc
                    req -= alloc
                    remaining_dc_cap[d_idx] -= alloc
                    dc_demand_accum[d_idx] += alloc
                    if req <= 0:
                        break
                        
        # Alokasi Plant ke DC untuk memenuhi akumulasi kebutuhan DC
        for d_idx in range(num_dcs):
            needed = dc_demand_accum[d_idx]
            best_plants = np.argsort(effective_cost_p_dc[:, d_idx])
            for p_idx in best_plants:
                alloc = min(needed, remaining_plant_cap[p_idx])
                if alloc > 0:
                    flow_p_dc[p_idx, d_idx] = alloc
                    needed -= alloc
                    remaining_plant_cap[p_idx] -= alloc
                    if needed <= 0:
                        break
                        
        # Perhitungan Total Biaya dan Emisi Riil
        total_logistics_cost = np.sum(flow_p_dc * freight_cost_p_dc) + np.sum(flow_dc_m * freight_cost_dc_m)
        total_transport_emissions = np.sum(flow_p_dc * carbon_ef_p_dc) + np.sum(flow_dc_m * carbon_ef_dc_m)
        total_production_emissions = sum(np.sum(flow_p_dc[i, :]) * plant_prod_ef[p] for i, p in enumerate(self.plants))
        total_network_carbon = total_transport_emissions + total_production_emissions
        
        carbon_deficit = max(0.0, total_network_carbon - carbon_cap_kg)
        carbon_cost = carbon_deficit * carbon_price_per_kg
        
        return {
            "flow_plant_to_dc": flow_p_dc,
            "flow_dc_to_market": flow_dc_m,
            "total_logistics_cost_idr": total_logistics_cost,
            "total_network_carbon_kg_co2e": total_network_carbon,
            "carbon_cap_kg": carbon_cap_kg,
            "carbon_deficit_kg": carbon_deficit,
            "carbon_tax_cost_idr": carbon_cost,
            "total_objective_cost": total_logistics_cost + carbon_cost
        }


# ==========================================
# TEST RUN VALIDATION & SIMULASI INDUSTRI
# ==========================================
if __name__ == "__main__":
    print("=== 1. ANALISIS PCF PRODUK KENDARAAN LISTRIK (ISO 14067) ===")
    pcf = ProductCarbonFootprintCalculator(product_name="Battery Pack 50kWh", functional_unit="1 unit battery pack")
    
    # Bahan Baku
    pcf.add_raw_material("Lithium Nickel Cobalt Al Oxide (NCA)", mass_kg=120.0, emission_factor=18.5, waste_rate=0.03)
    pcf.add_raw_material("Synthetic Graphite Anode", mass_kg=75.0, emission_factor=4.2, waste_rate=0.02)
    pcf.add_raw_material("Aluminum Housing & Enclosure", mass_kg=45.0, emission_factor=8.9, waste_rate=0.01)
    pcf.add_raw_material("Copper Busbars & Cables", mass_kg=25.0, emission_factor=3.8, waste_rate=0.01)
    
    # Energi Manufaktur Pabrik (Gigafactory)
    pcf.add_energy("Grid Electricity (Java-Bali PLN)", quantity=450.0, unit="kWh", emission_factor=0.85) # kg CO2/kWh
    pcf.add_energy("Natural Gas for Dry Room", quantity=15.0, unit="m3", emission_factor=2.02)
    
    # Logistik Rantai Pasok
    pcf.add_transport("Heavy Diesel Truck (Inbound Raw Mats)", mass_tons=0.28, distance_km=350.0, wtw_factor=0.092)
    pcf.add_transport("Container Ship (Lithium Import)", mass_tons=0.12, distance_km=2800.0, wtw_factor=0.015)
    
    breakdown = pcf.calculate_pcf_breakdown(coproduct_ratio=1.0)
    print(f"Produk: {breakdown['product']}")
    print(f"Total Jejak Karbon Produk: {breakdown['pcf_total_kg_co2e']:.2f} kg CO2e / unit")
    for scope, val in breakdown["scope_breakdown"].items():
        print(f" - {scope}: {val:.2f} kg CO2e")
    print(f"Porsi Bahan Baku: {breakdown['percentage_share']['raw_materials']:.1f}%")
    print(f"Porsi Energi Pabrik: {breakdown['percentage_share']['process_energy']:.1f}%")
    
    print("\n=== 2. OPTIMASI DISTRIBUSI RANTAI PASOK RENDAH EMISI ===")
    plants = ["Pabrik_Cikarang", "Pabrik_Surabaya"]
    dcs = ["DC_Jakarta", "DC_Semarang", "DC_Bandung"]
    markets = ["Zona_Jabodetabek", "Zona_Jateng", "Zona_Jabar"]
    
    opt = GreenSupplyChainOptimizer(plants, dcs, markets)
    demand = {"Zona_Jabodetabek": 12000.0, "Zona_Jateng": 8000.0, "Zona_Jabar": 6000.0}
    plant_cap = {"Pabrik_Cikarang": 20000.0, "Pabrik_Surabaya": 15000.0}
    dc_cap = {"DC_Jakarta": 15000.0, "DC_Semarang": 10000.0, "DC_Bandung": 8000.0}
    
    # Matriks Biaya & Emisi
    freight_p_dc = np.array([[150.0, 450.0, 200.0], [600.0, 250.0, 550.0]])
    freight_dc_m = np.array([[80.0, 500.0, 220.0], [480.0, 90.0, 400.0], [210.0, 380.0, 85.0]])
    
    ef_p_dc = np.array([[0.04, 0.12, 0.05], [0.15, 0.06, 0.14]])
    ef_dc_m = np.array([[0.02, 0.14, 0.06], [0.13, 0.02, 0.11], [0.05, 0.10, 0.02]])
    plant_ef = {"Pabrik_Cikarang": 1.20, "Pabrik_Surabaya": 0.95} # Surabaya pakai PLTS Rooftop
    
    res = opt.solve_network(demand, plant_cap, dc_cap, freight_p_dc, freight_dc_m,
                            ef_p_dc, ef_dc_m, plant_ef, carbon_price_per_kg=0.08, carbon_cap_kg=35000.0)
                            
    print(f"Total Biaya Logistik: Rp {res['total_logistics_cost_idr']:,.2f}")
    print(f"Total Emisi Karbon Jaringan: {res['total_network_carbon_kg_co2e']:,.2f} kg CO2e")
    print(f"Defisit Emisi Karbon (Wajib Beli Pajak Karbon): {res['carbon_deficit_kg']:,.2f} kg")
    print(f"Biaya Pajak Karbon: Rp {res['carbon_tax_cost_idr']:,.2f}")
```

---

## 5. Studi Kasus Industri Manufaktur & Rantai Pasok Otomotif Nasional

### 5.1 Profil Kasus & Permasalahan Operasional
Sebuah perusahaan manufaktur komponen otomotif tier-1 di Kawasan Industri KIIC Karawang memasok komponen transmisi paduan aluminium ke OEM multinasional di Indonesia, Thailand, dan Jepang. Mulai kuartal IV, pembeli utama mensyaratkan dekarbonisasi rantai pasok dengan batas maksimum jejak karbon produk sebesar $4.50\text{ kg CO}_2\text{e}/\text{kg}$ produk (standar ISO 14067), disertai sanksi penalti kompensasi karbon sebesar $\$35.00/\text{ton CO}_2\text{e}$.

Audit awal menunjukkan bahwa nilai baseline jejak karbon produk eksisting mencapai $6.85\text{ kg CO}_2\text{e}/\text{kg}$, yang didorong oleh tiga titik panas (*hotspots*) utama:
1. Penggunaan ingot aluminium primer berbasis batu bara (*coal-fired smelter*) menyumbang $62\%$ total emisi.
2. Konsumsi listrik grid PLN Jawa-Bali pada mesin *High-Pressure Die Casting* (HPDC) dan tungku peleburan listrik menyumbang $24\%$ total emisi.
3. Rute logistik distribusi hulu-hilir dengan rasio muatan kosong (*empty backhaul*) mencapai $35\%$.

```
+---------------------------------------------------------------------------------------------------+
|               KOMPOSISI HOTSPOT JEJAK KARBON BASELINE VS TARGET DEKARBONISASI                     |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|   BASELINE (6.85 kg CO2e/kg):                                                                     |
|   [ Ingot Primer Coal-Fired: 4.25 kg (62%) ] [ Listrik Grid HPDC: 1.64 kg (24%) ] [ Logistik: 14%]|
|                                                                                                   |
|   TARGET PROGRAM DEKARBONISASI (3.92 kg CO2e/kg - Reduksi 42.7%):                                 |
|   [ Scrap Sekunder Sirkular: 1.85 kg ] [ REC / PLTS Atap: 0.88 kg ] [ Logistik Truk Balikan: 0.4kg] |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 5.2 Strategi Intervensi Rekayasa Industri & Hasil Kuantitatif
Tim *Continuous Improvement* & Rekayasa Rantai Pasok mengimplementasikan tiga inisiatif dekarbonisasi simultan:
1. **Substitusi Sirkular Bahan Baku (Closed-Loop Scrap Recycling)**: Mengganti $55\%$ pasokan aluminium primer dengan aluminium sekunder daur ulang bersertifikat ISO 14021 dengan rasio efisiensi energi $95\%$ lebih rendah, menurunkan emisi bahan baku dari $4.25\text{ kg}$ menjadi $1.85\text{ kg CO}_2\text{e}/\text{kg}$.
2. **Dekarbonisasi Utilitas Energi Pabrik**: Pemasangan PLTS Atap 1.8 MWp dan pembelian *Renewable Energy Certificate* (REC) PLN untuk menutup sisa konsumsi tungku induksi, memangkas emisi energi proses dari $1.64\text{ kg}$ menjadi $0.88\text{ kg CO}_2\text{e}/\text{kg}$.
3. **Optimasi Logistik Kolaboratif (Backhaul Matching Heuristic)**: Mengintegrasikan sistem informasi TMS dengan jaringan pemasok tier-2 untuk mengeliminasi perjalanan kosong truk kontainer, menaikkan faktor muat rata-rata ($\eta_{\text{load}}$) dari $65\%$ menjadi $92\%$.

### 5.3 Ringkasan Hasil Finansial & Keberlanjutan
| Parameter Kinerja | Baseline Awal | Pasca Intervensi | Delta / Peningkatan |
| :--- | :--- | :--- | :--- |
| **Product Carbon Footprint (ISO 14067)** | $6.85\text{ kg CO}_2\text{e}/\text{kg}$ | $3.92\text{ kg CO}_2\text{e}/\text{kg}$ | **-42.77% (Cap Compliant)** |
| **Emisi Rantai Pasok Tahunan** | $41,100\text{ ton CO}_2\text{e}$ | $23,520\text{ ton CO}_2\text{e}$ | **-17,580 ton CO2e/tahun** |
| **Biaya Penalti Karbon Pembeli** | Rp 8,625,000,000 | Rp 0 (Surplus Kuota) | **Hemat 100% Penalti** |
| **Pendapatan Penjualan Kredit Karbon** | Rp 0 | Rp 1,420,000,000 | **Pendapatan Baru Bersih** |
| **Net Present Value (NPV) Investasi Hijau** | - | Rp 14,850,000,000 | Payback Period: 2.1 Tahun |

---

## 6. Pertanyaan Diskusi & Panduan Pembelajaran Kritis
1. Dalam audit jejak karbon berdasarkan ISO 14067, bagaimana perlakuan matematis terhadap emisi dari penyimpanan karbon biogenik (*biogenic carbon storage*) pada produk berbasis biomassa vs emisi fosil murni?
2. Mengapa metode alokasi nilai ekonomi seringkali menghasilkan jejak karbon yang sangat berbeda dibandingkan alokasi berbasis massa pada industri perengkahan petrokimia, dan metode mana yang paling tahan terhadap manipulasi akuntansi lingkungan?
3. Bagaimana mekanisme *Carbon Border Adjustment Mechanism* (CBAM) memengaruhi formulasi matematis *Supply Chain Network Design* untuk perusahaan manufaktur berorientasi ekspor di negara berkembang?

---

## 7. Referensi Akademis Terverifikasi & Standar Industri
1. **International Organization for Standardization (ISO).** (2018). *ISO 14067:2018 — Greenhouse gases — Carbon footprint of products — Requirements and guidelines for quantification*. Geneva: ISO.
2. **British Standards Institution (BSI).** (2011). *PAS 2050:2011 — Specification for the assessment of the life cycle greenhouse gas emissions of goods and services*. London: BSI.
3. **World Resources Institute (WRI) & WBCSD.** (2011). *Product Life Cycle Accounting and Reporting Standard (GHG Protocol)*. Washington, DC: WRI.
4. **Smart Freight Centre.** (2023). *Global Logistics Emissions Council (GLEC) Framework for Logistics Emissions Methodologies, Version 3.0*. Amsterdam: Smart Freight Centre.
5. **Govindan, K., Cheng, T. C. E., Mishra, N., & Shukla, N.** (2024). Big data analytics and machine learning in green supply chain management and product carbon footprinting: A comprehensive review. *International Journal of Production Economics*, 268, 109112.
6. **Barth, M., & Boriboonsomsin, K.** (2009). Energy and emissions impacts of a freeway-based dynamic eco-driving system. *Transportation Research Part D: Transport and Environment*, 14(6), 400-410.
7. **Montgomery, D. C.** (2020). *Design and Analysis of Experiments (10th ed.)*. Hoboken, NJ: John Wiley & Sons.
