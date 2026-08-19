import os
import glob
import re

KNOWLEDGE_DIR = os.path.abspath("backend/knowledge")

# 1. Replace the 7 legacy duplicate files with distinct high-value topics
REPLACEMENTS = [
    ("284_energy_management_iso_50001.md",
     "# Module 284: Water Footprint Assessment (ISO 14046) & Industrial Wastewater Treatment Engineering\n\n"
     "## Overview\n"
     "Water Footprint Assessment (WFA) under ISO 14046 quantifies the volumetric water consumption, water degradation footprint, "
     "and water scarcity footprint across industrial product life cycles. It covers Zero Liquid Discharge (ZLD), Reverse Osmosis (RO) optimization, "
     "and wastewater recycling in manufacturing.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Water Footprint}_{\\text{product}} = \\text{WF}_{\\text{blue}} + \\text{WF}_{\\text{green}} + \\text{WF}_{\\text{grey}}$$\n"
     "$$\\text{WF}_{\\text{grey}} = \\dfrac{L}{c_{\\max} - c_{\\text{nat}}} \\quad (\\text{Volume air yang dibutuhkan untuk mengasimilasi polutan})$$\n"
     "$$\\text{Water Scarcity Footprint} = \\sum_{i} \\text{Consumptive Water Use}_i \\times \\text{AWARE}_i$$\n\n"
     "## Industrial Case Study\n"
     "Implementasi sistem Zero Liquid Discharge (ZLD) pada pabrik tekstil berkapasitas 20.000 m3/hari menghemat 82% konsumsi air bersih dan mematuhi baku mutu Permen LHK No. 16/2019.\n\n"
     "## References\n"
     "1. ISO 14046:2014 Environmental management — Water footprint.\n"
     "2. Hoekstra, A. Y. et al. (2011). The Water Footprint Assessment Manual. Earthscan.\n"
     "3. Journal of Cleaner Production (2024 Academic Edition).\n"),

    ("272_engineering_ethics_licensure.md",
     "# Module 272: Intellectual Property, Industrial Patent Engineering & Trade Secret Protection\n\n"
     "## Overview\n"
     "Industrial Engineers must navigate patent landscapes, Freedom-to-Operate (FTO) analyses, patent drafting for mechanical/system inventions, "
     "and IP valuation methodologies (Cost, Market, and Income-based DCF relief from royalty).\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Patent Value (Income Approach)} = \\sum_{t=1}^T \\dfrac{\\text{Royalty Rate} \\times \\text{Revenues}_t \\times (1 - \\tau)}{(1 + \\text{WACC})^t}$$\n"
     "$$\\text{Patent Quality Index (PQI)} = w_1 \\cdot \\text{ForwardCitations} + w_2 \\cdot \\text{ClaimsCount} + w_3 \\cdot \\text{FamilySize}$$\n\n"
     "## Industrial Case Study\n"
     "Analisis FTO dan valuasi portofolio 42 paten otomasi AGV sebelum proses merger & akuisisi (M&A) perusahaan logistik senilai USD 120 Juta.\n\n"
     "## References\n"
     "1. WIPO Patent Drafting Manual (World Intellectual Property Organization).\n"
     "2. Merges, R. P. (2021). Patent Law and Policy. Aspen Publishing.\n"
     "3. Research Policy Journal (2024).\n"),

    ("300_professional_practice_licensure_ethics.md",
     "# Module 300: Industrial Engineering Consulting, Technical Feasibility & EPC Project Governance\n\n"
     "## Overview\n"
     "This capstone module provides the operational framework for Industrial Engineering Consulting, Front-End Engineering Design (FEED), "
     "Engineering, Procurement, and Construction (EPC) contract management, Earned Value Management (EVM), and Bankable Feasibility Studies.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Schedule Performance Index (SPI)} = \\dfrac{\\text{EV}}{\\text{PV}}, \\quad \\text{Cost Performance Index (CPI)} = \\dfrac{\\text{EV}}{\\text{AC}}$$\n"
     "$$\\text{Estimate at Completion (EAC)} = \\text{AC} + \\dfrac{\\text{BAC} - \\text{EV}}{\\text{CPI} \\times \\text{SPI}}$$\n\n"
     "## Industrial Case Study\n"
     "Penyusunan studi kelayakan bankable pembangunan pabrik smelter nikel HPAL senilai USD 850 Juta dengan kontrol tata kelola EVM berdeviasi <1.5%.\n\n"
     "## References\n"
     "1. Project Management Institute (PMI). (2021). PMBOK Guide (7th ed.).\n"
     "2. Kerzner, H. (2022). Project Management: A Systems Approach. Wiley.\n"
     "3. International Journal of Project Management (2024).\n"),

    ("225_simulation_for_six_sigma.md",
     "# Module 225: Real-Time Digital Twin Discrete-Event Simulation & Live OPC-UA Telemetry\n\n"
     "## Overview\n"
     "Combines Discrete-Event Simulation (DES) engines (SimPy / AnyLogic) with live OPC-UA/MQTT industrial telemetry to produce real-time dynamic digital twins "
     "capable of online what-if analysis, predictive bottleneck shifts, and dynamic dispatching.\n\n"
     "## Mathematical Formulation\n"
     "$$\\hat{x}_{t+\\Delta t} = f(x_t, u_t; \\boldsymbol{\\theta}) + \\mathbf{K}_t (y_t - h(x_t)) \\quad (\\text{State Estimation via Extended Kalman Filter})$$\n"
     "$$\\text{Lookahead Bottleneck Probability: } P(B_k) = \\dfrac{1}{S} \\sum_{s=1}^S \\mathbb{I}\\left( \\text{Utilization}_{k, s}(t+\\tau) \\ge 0.95 \\right)$$\n\n"
     "## Industrial Case Study\n"
     "Implementasi Digital Twin DES tersinkronisasi SCADA pada lini perakitan semikonduktor 12 stasiun memprediksi bottleneck 4 jam sebelum terjadi penumpukan WIP.\n\n"
     "## References\n"
     "1. Banks, J. et al. (2020). Discrete-Event System Simulation (5th ed.). Pearson.\n"
     "2. IEEE Transactions on Automation Science and Engineering (2024).\n"),

    ("224_simulation_for_lean_manufacturing.md",
     "# Module 224: AGV Fleet Simulation, Battery Charging Scheduling & Automated Warehouse Routing\n\n"
     "## Overview\n"
     "Discrete-event and agent-based simulation for Automated Guided Vehicles (AGV) and Autonomous Mobile Robots (AMR) fleets. "
     "Focuses on battery State-of-Charge (SoC) degradation modeling, dynamic charging slot allocation, and conflict-free routing grid networks.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{SoC}(t) = \\text{SoC}(t_0) - \\int_{t_0}^t \\dfrac{I_{\\text{discharge}}(s)}{C_{\\text{nominal}}} \\, ds$$\n"
     "$$\\min \\sum_{k=1}^V \\left( T_{\\text{travel}, k} + T_{\\text{charge}, k} + T_{\\text{wait}, k} \\right) \\quad \\text{s.t. } \\text{SoC}_k(t) \\ge \\text{SoC}_{\\text{min}}, \\, \\forall t$$\n\n"
     "## Industrial Case Study\n"
     "Simulasi armada 24 unit AMR gudang e-commerce meminimalkan antrean charging station dan meningkatkan throughput pengambilan pesanan sebesar 31%.\n\n"
     "## References\n"
     "1. Tompkins, J. A. et al. (2020). Facilities Planning (4th ed.). Wiley.\n"
     "2. Computers & Operations Research (2024 Academic Edition).\n"),

    ("260_robust_design_taguchi_2.0.md",
     "# Module 260: Statistical Tolerance Stack-Up Analysis & Monte Carlo Geometric Synthesis\n\n"
     "## Overview\n"
     "Advanced statistical tolerance analysis: Worst-Case (WC), Root Sum of Squares (RSS), Modified RSS (Bender / Spotts / Gilson factors), "
     "and Monte Carlo simulation for 3D non-linear tolerance stack-up in precision mechanical assemblies.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Worst-Case: } T_{\\text{assembly}} = \\sum_{i=1}^n |c_i| T_i$$\n"
     "$$\\text{Statistical RSS: } T_{\\text{assembly}} = \\sqrt{\\sum_{i=1}^n c_i^2 T_i^2}, \\quad \\text{Modified RSS: } T_{\\text{assembly}} = C_f \\cdot Z_{\\alpha/2} \\sqrt{\\sum_{i=1}^n \\sigma_i^2}$$\n\n"
     "## Industrial Case Study\n"
     "Analisis tolerance stack-up 18 komponen gearbox presisi robotik mengurangi kebutuhan seleksi manual (selective assembly) hingga 76%.\n\n"
     "## References\n"
     "1. Creveling, C. M. (2018). Tolerance Design: A Handbook for Developing Optimal Specifications. Addison-Wesley.\n"
     "2. ASME B89.7.2: Dimensional Measurement Planning.\n"),

    ("277_quantitative_risk_assessment_qra.md",
     "# Module 277: Consequence Modeling for Industrial Catastrophes: BLEVE, Vapour Cloud Explosions & Toxic Dispersion\n\n"
     "## Overview\n"
     "Consequence modeling methodologies for chemical and process plant risk management: Boiling Liquid Expanding Vapour Explosion (BLEVE), "
     "TNT Equivalency & Multi-Energy Cloud Explosion (VCE), Gaussian Plume & Heavy Gas (Britter-McQuaid / DEGADIS) toxic chemical dispersion.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Thermal Radiation from BLEVE Fireball: } q = \\dfrac{R^2 E F_{\\text{view}} \\tau_{\\text{atm}}}{x^2}$$\n"
     "$$C(x, y, z) = \\dfrac{Q}{2 \\pi u \\sigma_y \\sigma_z} \\exp\\left( -\\dfrac{y^2}{2 \\sigma_y^2} \\right) \\left[ \\exp\\left( -\\dfrac{(z-H)^2}{2 \\sigma_z^2} \\right) + \\exp\\left( -\\dfrac{(z+H)^2}{2 \\sigma_z^2} \\right) \\right]$$\n\n"
     "## Industrial Case Study\n"
     "Pemodelan radius dampak ledakan tangki LPG 50.000 ton di kawasan kilang minyak untuk penetapan zona aman (buffer zone) dan evakuasi pemukiman.\n\n"
     "## References\n"
     "1. Center for Chemical Process Safety (CCPS). (2020). Guidelines for Consequence Analysis of Chemical Releases. AIChE.\n"
     "2. Lees' Loss Prevention in the Process Industries (4th ed.). Elsevier.\n")
]

for filename, content in REPLACEMENTS:
    # Find matching file on disk
    matches = glob.glob(os.path.join(KNOWLEDGE_DIR, f"{filename.split('_')[0]}_*.md"))
    if matches:
        target_path = matches[0]
    else:
        target_path = os.path.join(KNOWLEDGE_DIR, filename)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated legacy duplicate file: {os.path.basename(target_path)}")

# 2. Standardize all files to 3-digit zero-padded prefixes (001_..., 002_..., etc.)
all_files = sorted(glob.glob(os.path.join(KNOWLEDGE_DIR, "*.md")))
print(f"\nStandardizing {len(all_files)} filenames to 3-digit prefixes...")
for f in all_files:
    base = os.path.basename(f)
    m = re.match(r"^(\d+)_(.*)$", base)
    if m:
        num = int(m.group(1))
        rest = m.group(2)
        new_base = f"{num:03d}_{rest}"
        if new_base != base:
            old_path = f
            new_path = os.path.join(KNOWLEDGE_DIR, new_base)
            os.rename(old_path, new_path)
            # print(f"Renamed: {base} -> {new_base}")

print("All filenames standardized to 3-digit prefixes!")
