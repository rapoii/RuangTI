import os

KNOWLEDGE_DIR = os.path.abspath("backend/knowledge")

FINAL_FIXES = [
    ("094_enterprise_architecture_togaf.md",
     "# Module 094: ITIL 4 Framework & IT Service Management (ITSM) for Industrial Cyber-Infrastructure\n\n"
     "## Overview\n"
     "ITIL 4 Service Value System (SVS) and Service Value Chain (SVC) applied to industrial IT/OT environments: "
     "Incident Management, Change Enablement, Service Level Management (SLA/OLA), and IT Asset Management (ITAM) for plant digital continuity.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Mean Time Between Failures (MTBF)} = \\dfrac{\\text{Total Operational Uptime}}{\\text{Number of Incidents}}$$\n"
     "$$\\text{Service Availability} = \\dfrac{\\text{MTBF}}{\\text{MTBF} + \\text{MTTR}} \\times 100\\% \\ge 99.99\\% \\quad (\\text{Four Nines Availability})$$\n\n"
     "## Industrial Case Study\n"
     "Implementasi ITIL 4 Change Enablement pada sistem OT SCADA kilang petrokimia menekan kegagalan patch update hingga nol insiden downtime tak terencana.\n\n"
     "## References\n"
     "1. AXELOS. (2019). ITIL Foundation: ITIL 4 Edition. TSO.\n"
     "2. International Journal of Information Management (2024).\n"),

    ("283_carbon_footprint_scope_123.md",
     "# Module 283: Internal Carbon Pricing (ICP) & Shadow Price in Capital Expenditure Decisions\n\n"
     "## Overview\n"
     "Strategic incorporation of Internal Carbon Pricing (ICP) mechanisms: Shadow Price ($/tCO2-eq) and Internal Carbon Fees into industrial DCF project appraisals, "
     "de-risking long-term capital investments against future emissions trading systems (ETS) and carbon border adjustment mechanisms (CBAM).\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Carbon-Adjusted NPV} = \\sum_{t=1}^T \\dfrac{\\text{CF}_t - \\text{Emissions}_t \\times P_{\\text{carbon}}(t)}{(1 + \\text{WACC})^t} - \\text{CAPEX}$$\n"
     "$$\\text{Internal Carbon Fee Revenue} = \\sum_{k \\in \\text{Divisions}} E_k \\times P_{\\text{internal}} \\implies \\text{Clean Tech R&D Fund}$$\n\n"
     "## Industrial Case Study\n"
     "Penerapan Shadow Carbon Price USD 65/ton pada evaluasi investasi boiler biomassa vs batubara di pabrik kertas berhasil memenangkan opsi energi terbarukan.\n\n"
     "## References\n"
     "1. World Bank. (2023). State and Trends of Carbon Pricing.\n"
     "2. Journal of Environmental Economics and Management (2024).\n"),

    ("247_jishu_hozen.md",
     "# Module 247: Digital Poka-Yoke & IoT Sensor-Assisted Mistake Proofing in Assembly Lines\n\n"
     "## Overview\n"
     "Design and implementation of digital error-proofing systems: Contact sensors, optical light curtains, RFID part-verification interlocks, "
     "and vision AI pick-to-light systems that physically prevent defective assemblies from proceeding to downstream operations (Shigeo Shingo Zero Quality Control).\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Poka-Yoke Effectiveness Index (PEI)} = \\left( 1 - \\dfrac{N_{\\text{escaped defects}}}{N_{\\text{total defect attempts}}} \\right) \\times 100\\% \\equiv 100\\%$$\n"
     "$$P(\\text{Defective Handover}) = \\prod_{k=1}^m (1 - \\text{Sensor Reliability}_k) \\to 0$$\n\n"
     "## Industrial Case Study\n"
     "Pemasangan sensor pick-to-light dan kamera verifikasi baut pintar pada perakitan airbag mobil mengeliminasi risiko salah pasang komponen 100%.\n\n"
     "## References\n"
     "1. Shingo, S. (1986). Zero Quality Control: Source Inspection and the Poka-Yoke System. Productivity Press.\n"
     "2. Computers in Industry (2024).\n"),

    ("258_design_for_assembly_dfa.md",
     "# Module 258: Design for Disassembly (DfD) & Remanufacturing End-of-Life Index\n\n"
     "## Overview\n"
     "Product design guidelines for rapid end-of-life disassembly: Snap-fit standardization, non-destructive fastener release mechanisms, "
     "material homogeneity, and Disassembly Time / Cost modeling to maximize circular economic value retention in remanufacturing.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Disassembly Efficiency Index (DEI)} = \\dfrac{\\sum t_{\\text{theoretical min disassembly}}}{\\sum t_{\\text{actual disassembly}}} \\times 100\\%$$\n"
     "$$\\text{Remanufacturing Profitability} = P_{\\text{reman}} - C_{\\text{core}} - \\sum_{k} t_{\\text{disassemble}, k} \\cdot R_{\\text{labor}} - C_{\\text{clean/test}}$$\n\n"
     "## Industrial Case Study\n"
     "Redesain baterai traksi motor listrik dengan sistem penguncian modular DfD memangkas waktu pembongkaran sel dari 45 menit menjadi 4.5 menit.\n\n"
     "## References\n"
     "1. Boothroyd, G., Dewhurst, P., & Knight, W. (2021). Product Design for Manufacture and Assembly (4th ed.). CRC Press.\n"
     "2. Journal of Cleaner Production (2024).\n"),

    ("278_fatality_negligibility_fn_curves.md",
     "# Module 278: Societal Risk Assessment, ALARP Principle & Value of Statistical Life (VSL)\n\n"
     "## Overview\n"
     "Quantitative risk criteria and societal risk evaluation for major hazard industrial facilities: Cumulative F-N curves (Frequency vs Number of Fatalities), "
     "As Low As Reasonably Practicable (ALARP) tolerable risk zones, and Cost-Benefit Analysis (CBA) utilizing Value of Statistical Life (VSL) metrics.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{Societal Risk: } F(N) = \\sum_{i: N_i \\ge N} f_i \\le \\dfrac{C}{N^\\alpha} \\quad (\\text{F-N Tolerability Boundary Criterion})$$\n"
     "$$\\text{Disproportion Factor (DF)} = \\dfrac{\\text{Cost of Risk Reduction Measure}}{\\text{Statistical Lives Saved} \\times \\text{VSL}} \\le 10$$\n\n"
     "## Industrial Case Study\n"
     "Kajian ALARP pemasangan sistem semburan air otomatis (deluge system) tangki ammonia untuk memastikan kurva risiko sosial berada di zona 'Broadly Acceptable'.\n\n"
     "## References\n"
     "1. UK Health and Safety Executive (HSE). (2001). Reducing Risks, Protecting People (R2P2).\n"
     "2. Risk Analysis Journal (2024).\n"),

    ("286_life_cycle_costing_tco.md",
     "# Module 286: Total Cost of Ownership (TCO) & Strategic Procurement Analytics\n\n"
     "## Overview\n"
     "Holistic procurement cost modeling beyond purchase price: Acquisition costs, operating and maintenance expenditures, downtime losses, "
     "spare parts inventory carrying costs, and end-of-life decommissioning residual value (ISO 15686-5 standard).\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{TCO} = C_{\\text{acquisition}} + \\sum_{t=1}^N \\dfrac{C_{\\text{energy}, t} + C_{\\text{maint}, t} + C_{\\text{downtime}, t}}{(1 + r)^t} - \\dfrac{S_N}{(1 + r)^N}$$\n"
     "$$\\text{TCO Sensitivity Gradient} = \\nabla_{\\mathbf{p}} \\text{TCO} = \\left[ \\dfrac{\\partial \\text{TCO}}{\\partial C_{\\text{acquisition}}}, \\dfrac{\\partial \\text{TCO}}{\\partial C_{\\text{energy}}}, \\dots \\right]$$\n\n"
     "## Industrial Case Study\n"
     "Evaluasi TCO pengadaan 16 unit kompresor udara sentrifugal membuktikan unit dengan harga awal lebih mahal 15% justru menghemat USD 420.000 selama 10 tahun pemakaian.\n\n"
     "## References\n"
     "1. Ellram, L. M. (1995). Total cost of ownership: An analysis approach for purchasing. Journal of Business Logistics.\n"
     "2. International Journal of Production Economics (2024).\n")
]

for filename, content in FINAL_FIXES:
    target_path = os.path.join(KNOWLEDGE_DIR, filename)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Refactored: {filename}")

print("Final 6 modules refactored successfully!")
