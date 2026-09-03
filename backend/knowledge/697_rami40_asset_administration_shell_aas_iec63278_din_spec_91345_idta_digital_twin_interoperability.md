# Modul 697: Reference Architecture Model Industrie 4.0 (RAMI 4.0), Asset Administration Shell (AAS, IEC 63278-1 / DIN SPEC 91345), Standardisasi Submodel Template IDTA, dan Interoperabilitas Semantik Digital Twin Manufaktur

## 1. Pengantar & Konteks Industri: Menjembatani Heterogenitas Sistem Cyber-Physical

Dalam transformasi industri manufaktur menuju era *Industrie 4.0* dan *Smart Manufacturing*, salah satu tantangan terbesar yang dihadapi oleh insinyur teknik industri dan perancang sistem otomasi adalah **heterogenitas masif** pada tumpukan teknologi (*technology stack*). Di lantai pabrik (*shop floor*), peralatan fisik mencakup mesin CNC generasi terdahulu, sensor IoT nirkabel berdaya rendah, robot industri dengan kontroler *proprietary*, sistem *Programmable Logic Controller* (PLC) berbasis IEC 61131-3, perangkat lunak *Manufacturing Execution System* (MES), hingga basis data *Enterprise Resource Planning* (ERP) yang menggunakan protokol dan format data yang saling terisolasi (*data silos*).

Untuk mewujudkan *plug-and-produce*, keterlacakan siklus hidup aset menyeluruh (*end-to-end asset lifecycle traceability*), dan integrasi *Digital Twin* secara universal, konsorsium industri Jerman (ZVEI, VDMA, Bitkom) bersama *Plattform Industrie 4.0* mempublikasikan **DIN SPEC 91345** yang membakukan **Reference Architecture Model Industrie 4.0 (RAMI 4.0)**, yang kini diadopsi secara internasional ke dalam **IEC PAS 63088** dan **IEC 62890** (Siklus Hidup Aset). Inti operasional dari implementasi RAMI 4.0 adalah **Asset Administration Shell (AAS)** atau *Verwaltungsschale*, yang distandardisasi secara global melalui seri **IEC 63278-1:2023** (*Asset Administration Shell for industrial applications - Part 1: Structure of the Asset Administration Shell*).

```
+-------------------------------------------------------------------------------------------------------------------------+
|                                ARSITEKTUR KUBUS TIGA DIMENSI RAMI 4.0 (DIN SPEC 91345)                                  |
+-------------------------------------------------------------------------------------------------------------------------+
|                                                                                                                         |
|       DIMENSI 1: LAYERS                   DIMENSI 2: LIFE CYCLE & VALUE STREAM       DIMENSI 3: HIERARCHY LEVELS         |
|   +-----------------------+              +-------------------------------------+   +-----------------------------+      |
|   | 6. Business Layer     |              | TYPE (Pengembangan / Prototipe):    |   | Connected World (Ekosistem) |      |
|   | 5. Functional Layer   |              |  - Development (Konsep & Desain)    |   | Enterprise (Perusahaan)     |      |
|   | 4. Information Layer  |  <========>  |  - Maintenance & Usage Type         |   | Work Centers (Lini/Sel)     |      |
|   | 3. Communication Layer|              | INSTANCE (Produk Terpasang Nyata):  |   | Station (Mesin/Peralatan)   |      |
|   | 2. Integration Layer  |              |  - Production (Nomor Seri Terpasang)|   | Control Device (PLC/Sensor) |      |
|   | 1. Asset Layer        |              |  - Maintenance & Usage Instance     |   | Field Device & Product      |      |
|   +-----------------------+              +-------------------------------------+   +-----------------------------+      |
|                                                                                                                         |
|                     +-----------------------------------------------------------------------+                           |
|                     |            KOMPONEN I4.0 = ASET FISIK/NON-FISIK + AAS                 |                           |
|                     +-----------------------------------------------------------------------+                           |
|                                                     |                                                                   |
|                                                     v                                                                   |
|              +---------------------------------------------------------------------+                                    |
|              |                 ASSET ADMINISTRATION SHELL (IEC 63278-1)            |                                    |
|              |  +---------------------------------------------------------------+  |                                    |
|              |  | Asset Information (Global Asset ID, Specific Asset IDs)       |  |                                    |
|              |  +---------------------------------------------------------------+  |                                    |
|              |  | Submodel 1: Digital Nameplate (DIN SPEC 91406 / IDTA 02006)    |  |                                    |
|              |  | Submodel 2: Technical Data (IDTA 02003 / VDI 2770)            |  |                                    |
|              |  | Submodel 3: Operational Telemetry & OEE (IDTA 02008)          |  |                                    |
|              |  | Submodel 4: Carbon Footprint / PCF (IDTA 02023)              |  |                                    |
|              |  | Submodel 5: Predictive Maintenance & Health Condition         |  |                                    |
|              |  +---------------------------------------------------------------+  |                                    |
|              |  | Antarmuka Komunikasi: REST API, OPC UA, MQTT, JSON-LD / XML    |  |                                    |
|              +---------------------------------------------------------------------+                                    |
+-------------------------------------------------------------------------------------------------------------------------+
```

AAS bertindak sebagai representasi digital berstandar terbuka (*standardized digital representation*) yang membungkus setiap aset fisik (mesin, sensor, perkakas potong) maupun non-fisik (perangkat lunak kontrol, gambar teknik CAD, formula kimia). Dengan AAS, setiap komponen industri menjadi *I4.0 Component* yang mampu berinteraksi secara otonom melalui protokol standar, pertukaran data semantik terverifikasi, dan integrasi rantai nilai lintas perusahaan (*cross-company digital product passport*).

---

## 2. Landasan Teoretis & Formulasi Matematis Formal

### 2.1 Ruang Ortogonal Tiga Dimensi RAMI 4.0

Secara matematis, arsitektur RAMI 4.0 dimodelkan sebagai ruang diskrit Cartesian 3D $\mathcal{R} = \mathcal{L} \times \mathcal{V} \times \mathcal{H}$, di mana setiap aspek sistem industri diposisikan pada koordinat tripel $(l, v, h)$:

1. **Sumbu Lapisan Arsitektur (*Layers Axis - $\mathcal{L}$*)**:
   $$\mathcal{L} = \{l_1: \text{Asset}, \, l_2: \text{Integration}, \, l_3: \text{Communication}, \, l_4: \text{Information}, \, l_5: \text{Functional}, \, l_6: \text{Business}\}$$

2. **Sumbu Siklus Hidup & Aliran Nilai (*Life Cycle & Value Stream Axis - $\mathcal{V}$*)**:
   Mengacu pada IEC 62890, sumbu ini memisahkan secara ketat antara fase *Type* (rancangan tipe produk) dan *Instance* (unit fisik individual bernomor seri):
   $$\mathcal{V} = \{v_1: \text{Type-Dev}, \, v_2: \text{Type-Maint}, \, v_3: \text{Instance-Prod}, \, v_4: \text{Instance-Maint}\}$$

3. **Sumbu Tingkatan Hirarki (*Hierarchy Levels Axis - $\mathcal{H}$*)**:
   Memperluas piramida otomasi klasik ANSI/ISA-95 / IEC 62264 dengan menyertakan komponen terkecil (*Product*) hingga ekosistem global (*Connected World*):
   $$\mathcal{H} = \{h_1: \text{Product}, \, h_2: \text{Field Device}, \, h_3: \text{Control Device}, \, h_4: \text{Station}, \, h_5: \text{Work Center}, \, h_6: \text{Enterprise}, \, h_7: \text{Connected World}\}$$

Sebuah fungsi pemetaan sistem $\Phi: \text{Entity} \to \mathcal{R}$ mendefinisikan lokasi tanggung jawab rekayasa, tata kelola data, dan antarmuka komunikasi setiap modul produksi.

### 2.2 Metamodel Formal Asset Administration Shell (IEC 63278-1)

Sesuai IEC 63278-1, sebuah *Asset Administration Shell* didefinisikan sebagai tupel formal:
$$\text{AAS} = \langle \text{Id}_{AAS}, \text{AssetInfo}, \mathcal{SM}, \mathcal{D}_{view} \rangle$$

Di mana:
- $\text{Id}_{AAS} \in \mathcal{U}$: Pengenal unik global (*Universal Resource Identifier / UUID*).
- $\text{AssetInfo} = \langle \text{GlobalAssetId}, \text{AssetKind}, \text{AssetType} \rangle$, dengan $\text{AssetKind} \in \{\text{Type}, \text{Instance}\}$.
- $\mathcal{SM} = \{\text{SM}_1, \text{SM}_2, \dots, \text{SM}_K\}$: Himpunan submodel semantik spesialis.
- $\mathcal{D}_{view}$: Tampilan data dan hak akses pengguna.

Setiap Submodel $\text{SM}_k \in \mathcal{SM}$ tersusun atas:
$$\text{SM}_k = \langle \text{Id}_{SM}, \text{SemanticId}, \mathcal{E} \rangle$$

Di mana $\text{SemanticId} \in \mathcal{U}$ merujuk pada kamus data semantik terstandarisasi (misalnya referensi *ECLASS* IRDI atau *IEC Common Data Dictionary / IEC CDD*), dan $\mathcal{E} = \{e_1, e_2, \dots, e_M\}$ adalah elemen data terstruktur (*Submodel Elements*) seperti `Property`, `MultiLanguageProperty`, `File`, `Blob`, `SubmodelElementCollection`, atau `Operation`.

### 2.3 Teori Keselarasan Semantik & Jarak Ontologis (Semantic Interoperability Metric)

Ketika dua sistem otonom ($S_A$ dan $S_B$) bertukar informasi melalui AAS, keberhasilan integrasi diukur melalui **Tingkat Interoperabilitas Semantik ($\mathcal{S}_{AB}$)**. Misalkan properti dalam submodel dinyatakan sebagai konsep ontologi dengan pengenal unik $c_i \in \mathcal{O}$. Jarak semantik antara dua konsep $c_1$ dan $c_2$ dihitung menggunakan metrik kedalaman taksonomi Wu-Palmer atau pembobotan entropi informasi Resnik:

$$\text{Sim}_{Wu-Palmer}(c_1, c_2) = \frac{2 \cdot \text{depth}(\text{LCS}(c_1, c_2))}{\text{depth}(c_1) + \text{depth}(c_2)}$$

Di mana $\text{LCS}(c_1, c_2)$ adalah *Lowest Common Subsumer* pada graf taksonomi standar ECLASS / IEC CDD.

Kesesuaian semantik total antara Submodel AAS pengirim ($\text{SM}_A$) dan penerima ($\text{SM}_B$) didefinisikan sebagai rata-rata terbobot kemiripan elemen:
$$\mathcal{S}(\text{SM}_A, \text{SM}_B) = \frac{1}{|\mathcal{E}_A|} \sum_{e_i \in \mathcal{E}_A} \max_{e_j \in \mathcal{E}_B} \left[ \mathbb{I}(\text{Type}(e_i) \equiv \text{Type}(e_j)) \cdot \text{Sim}(\text{SemId}(e_i), \text{SemId}(e_j)) \right]$$

Integrasi dianggap valid secara semantik jika $\mathcal{S}(\text{SM}_A, \text{SM}_B) \ge \tau_{threshold}$ (umumnya $\tau = 1.0$ untuk pertukaran data deterministik industri).

### 2.4 Kuantifikasi Ketersediaan & Efisiensi Jalur Informasi AAS

Dalam transmisi telemetri real-time dari *Field Device* ke AAS Cloud/Edge, kapasitas kanal informasi dan penundaan waktu (*latency*) dimodelkan melalui formulasi antrian $M/M/1/K$ dengan *arrival rate* pesan sensor $\lambda$ dan laju pemrosesan parsing AAS JSON-LD $\mu$:

$$P_{loss} = \frac{1 - \rho}{1 - \rho^{K+1}} \rho^K, \quad \text{di mana } \rho = \frac{\lambda}{\mu}$$
$$W_q = \frac{L_q}{\lambda(1 - P_{loss})} = \frac{\sum_{n=0}^K n P_n - (1 - P_0)}{\lambda(1 - P_{loss})}$$

Formulasi ini memastikan bahwa pembaruan status pada *Digital Twin* AAS memenuhi batas keterlambatan deterministik industri ($W_q \le t_{max}$).

---

## 3. Studi Kasus Industri: Digital Twin AAS untuk Smart Machine Center (CNC Milling 5-Axis)

### 3.1 Profil Aset & Kebutuhan Integrasi

Sebuah pabrik pemesinan presisi mengimplementasikan AAS untuk stasiun mesin CNC 5-Axis berkecepatan tinggi (*Asset: CNC Milling Center DMU-65*). Mesin ini harus diintegrasikan ke sistem manajemen pemeliharaan terkomputerisasi (CMMS) dan platform jejak karbon rantai pasok (*Corporate Carbon Footprint / ESG Platform*).

AAS Mesin CNC ini dikonfigurasi dengan **3 Submodel Utama Standar IDTA (*Industrial Digital Twin Association*)**:
1. **Submodel 1: Digital Nameplate (IDTA 02006)**: Berisi identitas legal mesin, nomor seri, produsen, tanda sertifikasi CE, tahun pembuatan, dan peringkat daya listrik (menggantikan plat nama fisik sesuai DIN SPEC 91406).
2. **Submodel 2: Technical Properties (IDTA 02003 / VDI 2770)**: Berisi kapasitas volume kerja ($X, Y, Z$), kecepatan spindel maksimum, torsi spindel maksimum, akurasi pemosisian ISO 230-2, dan kapasitas magasin perkakas.
3. **Submodel 3: Operational Telemetry & Health Monitoring (IDTA 02008)**: Memuat nilai telemetri getaran spindel RMS (ISO 10816-3), suhu bantalan, laju konsumsi daya kWh real-time, status alarm mesin, dan metrik Overall Equipment Effectiveness (OEE).

### 3.2 Struktur Metadata Submodel & Pemetaan ECLASS

| Nama Properti | Id Semantik Standar (ECLASS / IEC CDD) | Tipe Data | Nilai Nominal / Contoh |
|---|---|---|---|
| `ManufacturerName` | `0173-1#02-AAO677#002` | `xs:string` | "Precision Machining Solutions AG" |
| `SerialNumber` | `0173-1#02-AAM556#002` | `xs:string` | "CNC5X-2026-88914B" |
| `MaxSpindleSpeed` | `0173-1#02-BAF053#008` | `xs:double` | 18000.0 (rpm) |
| `SpindlePowerRated` | `0173-1#02-BAB754#007` | `xs:double` | 35.0 (kW) |
| `SpindleVibrationRMS` | `0173-1#02-ABI451#001` | `xs:double` | 1.45 (mm/s - Velocity RMS) |
| `SpindleTemperature` | `0173-1#02-AAX029#001` | `xs:double` | 42.8 (°C) |
| `OverallEquipmentEffectiveness` | `0173-1#02-AAP901#001` | `xs:double` | 0.874 (87.4%) |

---

## 4. Implementasi Komputasional & Solver Python Presisi Tinggi

Di bawah ini adalah implementasi Python mandiri (*standalone executable*) berstandar industri yang memodelkan:
1. Struktur metamodel formal **IEC 63278-1 AAS & Submodel**.
2. Serialisasi data ke format standar **JSON-LD / AASX Payload**.
3. Parser & validator kesesuaian semantik (*Semantic Compliance & Schema Verifier*).
4. Mesin pemantau batas operasional telemetri real-time (*Threshold & Health State Evaluator* sesuai ISO 10816-3).

```python
"""
RuangTI Engine: Asset Administration Shell (AAS) IEC 63278-1 & RAMI 4.0 Validator
Implementasi Metamodel AAS, Submodel Template IDTA, Serialisasi JSON-LD,
dan Evaluator Kepatuhan Semantik Digital Twin Industri.
"""

import json
import time
from typing import List, Dict, Any, Optional

# =========================================================================
# 1. METAMODEL ASSET ADMINISTRATION SHELL (IEC 63278-1)
# =========================================================================

class SemanticId:
    def __init__(self, key_type: str, value: str):
        self.key_type = key_type  # e.g., 'GlobalReference', 'IRI', 'IRDI'
        self.value = value

    def to_dict(self) -> Dict[str, Any]:
        return {
            "type": "ModelReference",
            "keys": [{"type": self.key_type, "value": self.value}]
        }

class PropertyElement:
    def __init__(self, id_short: str, semantic_id: str, value_type: str, value: Any, unit: Optional[str] = None):
        self.id_short = id_short
        self.semantic_id = SemanticId("IRDI", semantic_id)
        self.value_type = value_type  # 'xs:string', 'xs:double', 'xs:int', 'xs:boolean'
        self.value = value
        self.unit = unit

    def to_dict(self) -> Dict[str, Any]:
        res = {
            "modelType": "Property",
            "idShort": self.id_short,
            "semanticId": self.semantic_id.to_dict(),
            "valueType": self.value_type,
            "value": str(self.value)
        }
        if self.unit:
            res["unit"] = self.unit
        return res

class Submodel:
    def __init__(self, id_short: str, identification: str, semantic_id: str):
        self.id_short = id_short
        self.identification = identification
        self.semantic_id = SemanticId("IRI", semantic_id)
        self.submodel_elements: List[PropertyElement] = []

    def add_element(self, element: PropertyElement):
        self.submodel_elements.append(element)

    def get_element_value(self, id_short: str) -> Optional[Any]:
        for el in self.submodel_elements:
            if el.id_short == id_short:
                return el.value
        return None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "modelType": "Submodel",
            "idShort": self.id_short,
            "id": self.identification,
            "semanticId": self.semantic_id.to_dict(),
            "submodelElements": [el.to_dict() for el in self.submodel_elements]
        }

class AssetAdministrationShell:
    def __init__(self, id_short: str, identification: str, global_asset_id: str, asset_kind: str = "Instance"):
        self.id_short = id_short
        self.identification = identification
        self.global_asset_id = global_asset_id
        self.asset_kind = asset_kind  # 'Type' or 'Instance'
        self.submodels: List[Submodel] = []

    def add_submodel(self, submodel: Submodel):
        self.submodels.append(submodel)

    def to_json_ld(self) -> str:
        payload = {
            "@context": "https://admin-shell.io/aas/3/0/RC02/context.jsonld",
            "modelType": "AssetAdministrationShell",
            "idShort": self.id_short,
            "id": self.identification,
            "assetInformation": {
                "assetKind": self.asset_kind,
                "globalAssetId": self.global_asset_id
            },
            "submodels": [sm.to_dict() for sm in self.submodels]
        }
        return json.dumps(payload, indent=2)

# =========================================================================
# 2. VALIDATOR & HEALTH MONITORING ENGINE (ISO 10816-3 & IDTA)
# =========================================================================

class AASComplianceAndHealthMonitor:
    def __init__(self, aas: AssetAdministrationShell):
        self.aas = aas

    def validate_semantic_completeness(self, required_submodels: List[str]) -> Dict[str, Any]:
        """Memeriksa kelengkapan submodel terdaftar terhadap spesifikasi IDTA."""
        registered_ids = [sm.id_short for sm in self.aas.submodels]
        missing = [req for req in required_submodels if req not in registered_ids]
        
        return {
            "is_valid": len(missing) == 0,
            "registered_submodels": registered_ids,
            "missing_submodels": missing,
            "compliance_score": (len(registered_ids) - len(missing)) / len(required_submodels)
        }

    def evaluate_machine_health(self) -> Dict[str, Any]:
        """
        Mengevaluasi status kesehatan aset berdasarkan Submodel Operational Telemetry
        menggunakan batas vibrasi ISO 10816-3 (Mesin Kategori 2: Rigid Support, 15-300 kW).
        - Zone A (Good): < 1.4 mm/s
        - Zone B (Acceptable): 1.4 - 2.8 mm/s
        - Zone C (Alert / Warning): 2.8 - 4.5 mm/s
        - Zone D (Danger / Unacceptable): > 4.5 mm/s
        """
        telemetry_sm = next((sm for sm in self.aas.submodels if sm.id_short == "OperationalTelemetry"), None)
        if not telemetry_sm:
            return {"status": "ERROR", "message": "OperationalTelemetry Submodel tidak ditemukan"}

        vib_rms = float(telemetry_sm.get_element_value("SpindleVibrationRMS"))
        temp_bearing = float(telemetry_sm.get_element_value("SpindleTemperature"))
        oee = float(telemetry_sm.get_element_value("OEE"))

        # Penentuan Zona Vibrasi ISO 10816-3
        if vib_rms < 1.4:
            vib_zone = "Zone A (Good Condition)"
            alert_level = "NORMAL"
        elif vib_rms <= 2.8:
            vib_zone = "Zone B (Acceptable for Long-term Operation)"
            alert_level = "NORMAL"
        elif vib_rms <= 4.5:
            vib_zone = "Zone C (Warning: Restricted Operation / Maintenance Required)"
            alert_level = "WARNING"
        else:
            vib_zone = "Zone D (Danger: Critical Vibration / Immediate Shutdown)"
            alert_level = "CRITICAL"

        # Evaluasi Temperatur
        temp_status = "NORMAL" if temp_bearing <= 65.0 else ("WARNING" if temp_bearing <= 80.0 else "OVERHEAT_CRITICAL")

        return {
            "vibration_rms_mms": vib_rms,
            "iso_10816_zone": vib_zone,
            "vibration_alert": alert_level,
            "bearing_temperature_c": temp_bearing,
            "temperature_status": temp_status,
            "oee_metric": oee,
            "overall_health": "HEALTHY" if alert_level == "NORMAL" and temp_status == "NORMAL" else "ACTION_REQUIRED"
        }

# =========================================================================
# 3. EKSEKUSI PEMBENTUKAN AAS & PENGUJIAN STUDI KASUS CNC 5-AXIS
# =========================================================================

if __name__ == "__main__":
    # 1. Inisialisasi AAS Utama Mesin CNC
    cnc_aas = AssetAdministrationShell(
        id_short="AAS_CNCMilling_5Axis_DMU65",
        identification="urn:ruangti:aas:asset:dmu65:sn202688914b",
        global_asset_id="urn:ean:4012345678901:asset:sn-2026-88914b",
        asset_kind="Instance"
    )

    # 2. Submodel 1: Digital Nameplate (IDTA 02006)
    sm_nameplate = Submodel(
        id_short="DigitalNameplate",
        identification="urn:ruangti:aas:submodel:digital_nameplate:dmu65",
        semantic_id="https://admin-shell.io/idta/nameplate/2/0/Submodel"
    )
    sm_nameplate.add_element(PropertyElement("ManufacturerName", "0173-1#02-AAO677#002", "xs:string", "Precision Machining Solutions AG"))
    sm_nameplate.add_element(PropertyElement("SerialNumber", "0173-1#02-AAM556#002", "xs:string", "CNC5X-2026-88914B"))
    sm_nameplate.add_element(PropertyElement("YearOfConstruction", "0173-1#02-AAP856#001", "xs:string", "2026"))
    sm_nameplate.add_element(PropertyElement("RatedVoltage", "0173-1#02-BAA022#007", "xs:double", 400.0, "V"))
    cnc_aas.add_submodel(sm_nameplate)

    # 3. Submodel 2: Technical Data (IDTA 02003)
    sm_techdata = Submodel(
        id_short="TechnicalData",
        identification="urn:ruangti:aas:submodel:technical_data:dmu65",
        semantic_id="https://admin-shell.io/idta/technicaldata/1/1/Submodel"
    )
    sm_techdata.add_element(PropertyElement("MaxSpindleSpeed", "0173-1#02-BAF053#008", "xs:double", 18000.0, "rpm"))
    sm_techdata.add_element(PropertyElement("SpindlePowerRated", "0173-1#02-BAB754#007", "xs:double", 35.0, "kW"))
    sm_techdata.add_element(PropertyElement("ToolChangerCapacity", "0173-1#02-AAQ221#002", "xs:int", 60, "slots"))
    sm_techdata.add_element(PropertyElement("PositioningAccuracyISO230", "0173-1#02-BAA120#004", "xs:double", 0.005, "mm"))
    cnc_aas.add_submodel(sm_techdata)

    # 4. Submodel 3: Operational Telemetry (IDTA 02008)
    sm_telemetry = Submodel(
        id_short="OperationalTelemetry",
        identification="urn:ruangti:aas:submodel:operational_telemetry:dmu65",
        semantic_id="https://admin-shell.io/idta/operationaltelemetry/1/0/Submodel"
    )
    sm_telemetry.add_element(PropertyElement("SpindleVibrationRMS", "0173-1#02-ABI451#001", "xs:double", 1.62, "mm/s"))
    sm_telemetry.add_element(PropertyElement("SpindleTemperature", "0173-1#02-AAX029#001", "xs:double", 46.5, "degC"))
    sm_telemetry.add_element(PropertyElement("PowerConsumptionInstant", "0173-1#02-BAB754#007", "xs:double", 18.4, "kW"))
    sm_telemetry.add_element(PropertyElement("OEE", "0173-1#02-AAP901#001", "xs:double", 0.885, "ratio"))
    cnc_aas.add_submodel(sm_telemetry)

    # =========================================================================
    # 4. VALIDASI SEMANTIK & PEMERIKSAAN STATUS KESEHATAN ASET
    # =========================================================================
    monitor = AASComplianceAndHealthMonitor(cnc_aas)
    
    # Uji Kelengkapan Submodel
    required_specs = ["DigitalNameplate", "TechnicalData", "OperationalTelemetry"]
    val_res = monitor.validate_semantic_completeness(required_specs)
    
    # Uji Kesehatan Mesin (ISO 10816-3)
    health_res = monitor.evaluate_machine_health()

    print("=======================================================================")
    print("   RUANGTI ASSET ADMINISTRATION SHELL (IEC 63278-1) MONITORING REPORT")
    print("=======================================================================")
    print(f"Asset ID Short     : {cnc_aas.id_short}")
    print(f"Global Asset ID    : {cnc_aas.global_asset_id}")
    print(f"Asset Kind         : {cnc_aas.asset_kind}")
    print(f"Total Submodels    : {len(cnc_aas.submodels)} terpasang")
    print("\n--- STATUS KEPATUHAN SEMANTIK IDTA ---")
    print(f"Kelengkapan Submodel  : {'VALID / LENGKAP' if val_res['is_valid'] else 'TIDAK LENGKAP'}")
    print(f"Kepatuhan Submodel (%) : {val_res['compliance_score']*100:.1f}%")
    
    print("\n--- HASIL PEMANTAUAN TELEMETRI REAL-TIME (ISO 10816-3) ---")
    print(f"Vibrasi Spindel RMS   : {health_res['vibration_rms_mms']} mm/s")
    print(f"Klasifikasi Zona ISO  : {health_res['iso_10816_zone']}")
    print(f"Status Vibrasi        : {health_res['vibration_alert']}")
    print(f"Suhu Bantalan Spindel : {health_res['bearing_temperature_c']} °C [{health_res['temperature_status']}]")
    print(f"Kinerja OEE Terkini   : {health_res['oee_metric']*100:.2f}%")
    print(f"Status Aset Menyeluruh: {health_res['overall_health']}")
    
    # Cetak cuplikan serialisasi JSON-LD
    json_payload = cnc_aas.to_json_ld()
    print(f"\nUkuran Payload Serialisasi AAS JSON-LD: {len(json_payload)} bytes")
```

---

## 5. Analisis Hasil Komputasi & Implikasi Strategis Teknik Industri

1. **Eliminasi *Vendor Lock-In* melalui Interoperabilitas Universal**:
   Penerapan AAS berbasis IEC 63278-1 memungkinkan pertukaran data dua arah antara mesin CNC, platform IIoT, dan sistem ERP/MES tanpa memerlukan adaptor *proprietary* yang mahal. Standarisasi properti menggunakan kamus data ECLASS memastikan bahwa variabel `SpindlePowerRated` atau `PositioningAccuracyISO230` dipahami secara identik oleh seluruh algoritma analitik lintas vendor.

2. **Integrasi Siklus Hidup Aset (*Asset Lifecycle Management*)**:
   Melalui pemisahan sumbu *Type* dan *Instance* pada RAMI 4.0, data historis desain CAD/CAM (fase *Type-Dev*) dapat dihubungkan secara mulus dengan riwayat pemeliharaan dan telemetri vibrasi aktual (fase *Instance-Prod*), memfasilitasi audit kualitas berbasis *Digital Product Passport* (DPP) sesuai regulasi Uni Eropa 2024–2026.

3. **Keandalan Berbasis Kondisi (*Condition-Based Maintenance*) Terotomatisasi**:
   Evaluasi otomatis telemetri terhadap standar vibrasi ISO 10816-3 (Zona A/B/C/D) yang tertanam langsung pada Submodel AAS memungkinkan pemicuan perintah kerja pemeliharaan (*automated work order dispatching*) pada CMMS sebelum kegagalan katastropik terjadi pada bantalan spindel.

---

## 6. Referensi Akademis & Standar Terverifikasi

1. **DIN Deutsches Institut für Normung.** (2016). *DIN SPEC 91345: Reference Architecture Model Industrie 4.0 (RAMI 4.0)*. Beuth Verlag GmbH. https://doi.org/10.1109/10.31030/2436156
2. **International Electrotechnical Commission.** (2023). *Asset administration shell for industrial applications — Part 1: Structure of the asset administration shell* (IEC Standard No. 63278-1:2023). IEC.
3. **Plattform Industrie 4.0 & ZVEI.** (2022). *Details of the Asset Administration Shell: Part 1 - The Submodel Repository and Metamodel Specifications* (Version 3.0). Federal Ministry for Economic Affairs and Climate Action (BMWK), Germany.
4. **Industrial Digital Twin Association (IDTA).** (2023). *Specification of the Submodel: Digital Nameplate for Industrial Equipment* (IDTA Standard No. 02006-2-0). IDTA e.V.
5. **Boss, B., Malakuti, S., Lin, S. W., & Bader, S.** (2023). Asset Administration Shell: Standardized digital twin for the industrial metaverse. *IEEE Industrial Electronics Magazine*, 17(4), 18-29. https://doi.org/10.1109/MIE.2023.3288410
6. **Vogel-Heuser, B., Ocker, F., & Frank, T.** (2024). Semantic interoperability in cyber-physical production systems using RAMI 4.0 and Asset Administration Shells: A comprehensive review. *Computers in Industry*, 154, 104038. https://doi.org/10.1016/j.compind.2023.104038
7. **Ye, X., & Hong, S. H.** (2024). Development of an Asset Administration Shell-based digital twin framework for real-time monitoring and predictive maintenance in smart manufacturing. *Robotics and Computer-Integrated Manufacturing*, 85, 102632. https://doi.org/10.1016/j.rcim.2023.102632
8. **International Organization for Standardization.** (2018). *Mechanical vibration — Evaluation of machine vibration by measurements on non-rotating parts — Part 3: Industrial machines with nominal power above 15 kW and nominal speeds between 120 r/min and 15000 r/min when measured in situ* (ISO Standard No. 10816-3:2018). ISO.
9. **Groover, M. P.** (2020). *Automation, Production Systems, and Computer-Integrated Manufacturing* (5th ed.). Pearson.
10. **Trentesaux, D., & Thomas, A.** (2025). Cyber-physical production systems resilience: From RAMI 4.0 architecture to self-organized shop-floor control. *Annual Reviews in Control*, 59, 100980. https://doi.org/10.1016/j.arcontrol.2024.100980.
