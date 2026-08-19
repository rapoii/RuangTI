import os
import glob
import re

KNOWLEDGE_DIR = os.path.abspath("backend/knowledge")

OVERLAPS_REPLACEMENTS = [
    ("263_multivariate_statistical_analysis.md",
     "# Module 263: Canonical Correlation Analysis (CCA) & Structural Equation Modeling (SEM-PLS) in Industrial Research\n\n"
     "## Overview\n"
     "Advanced multivariate dependency modeling for complex industrial socio-technical systems. Covers Canonical Correlation Analysis (CCA) "
     "for multi-input multi-output relationship mapping, and Partial Least Squares Structural Equation Modeling (PLS-SEM) for manufacturing quality climate and operational performance.\n\n"
     "## Mathematical Formulation\n"
     "$$\\max_{\\mathbf{a}, \\mathbf{b}} \\rho = \\dfrac{\\mathbf{a}^T \\boldsymbol{\\Sigma}_{XY} \\mathbf{b}}{\\sqrt{\\mathbf{a}^T \\boldsymbol{\\Sigma}_{XX} \\mathbf{a}} \\sqrt{\\mathbf{b}^T \\boldsymbol{\\Sigma}_{YY} \\mathbf{b}}}$$\n"
     "$$\\boldsymbol{\\eta} = \\mathbf{B} \\boldsymbol{\\eta} + \\boldsymbol{\\Gamma} \\boldsymbol{\\xi} + \\boldsymbol{\\zeta} \\quad (\\text{SEM Structural Model Equation})$$\n\n"
     "## Industrial Case Study\n"
     "Pemodelan SEM-PLS hubungan antara Safety Leadership, Iklim Mutu, dan Overall Equipment Effectiveness (OEE) pada 32 pabrik perakitan otomotif nasional.\n\n"
     "## References\n"
     "1. Hair, J. F. et al. (2022). A Primer on Partial Least Squares Structural Equation Modeling (PLS-SEM) (3rd ed.). SAGE.\n"
     "2. Journal of Operations Management (2024).\n"),

    ("192_fuzzy_ahp_vikor_compromise_ranking.md",
     "# Module 192: PROMETHEE II & ELECTRE III Outranking Methods for Complex Industrial Decision-Making\n\n"
     "## Overview\n"
     "Non-compensatory and outranking Multi-Criteria Decision-Making (MCDM) methods: Preference Ranking Organization METHod for Enrichment Evaluation (PROMETHEE I & II) "
     "and Elimination and Choice Expressing Reality (ELECTRE III) with indifference ($q$), preference ($p$), and veto ($v$) thresholds.\n\n"
     "## Mathematical Formulation\n"
     "$$\\pi(a, b) = \\sum_{j=1}^k w_j P_j(a, b), \\quad \\Phi^+(a) = \\dfrac{1}{n-1} \\sum_{x \\in A} \\pi(a, x), \\quad \\Phi^-(a) = \\dfrac{1}{n-1} \\sum_{x \\in A} \\pi(x, a)$$\n"
     "$$\\Phi(a) = \\Phi^+(a) - \\Phi^-(a) \\quad (\\text{PROMETHEE II Net Outranking Flow})$$\n\n"
     "## Industrial Case Study\n"
     "Evaluasi dan pemilihan penyedia layanan logistik pihak ketiga (3PL) untuk distribusi farmasi berpendingin menggunakan PROMETHEE II dengan kriteria veto waktu tanggap.\n\n"
     "## References\n"
     "1. Brans, J. P., & De Smet, Y. (2016). PROMETHEE Methods. International Series in Operations Research & Management Science. Springer.\n"
     "2. European Journal of Operational Research (2024).\n"),

    ("146_3d_bin_packing_container_loading_stability.md",
     "# Module 146: Axle Load Distribution Optimization & Center of Gravity Cargo Securing (EN 12195)\n\n"
     "## Overview\n"
     "Optimizing the 3D placement of heavy industrial freight inside intermodal containers and semi-trailers considering legal road axle load limits, "
     "vertical and lateral Center of Gravity (CoG) envelopes, and cargo lashing friction coefficients according to European Standard EN 12195.\n\n"
     "## Mathematical Formulation\n"
     "$$R_{\\text{front}} = \\sum_{i=1}^n \\dfrac{w_i (L_{\\text{wheelbase}} - x_i)}{L_{\\text{wheelbase}}} \\le R_{\\text{front, legal limit}}$$\n"
     "$$R_{\\text{rear}} = \\sum_{i=1}^n \\dfrac{w_i x_i}{L_{\\text{wheelbase}}} \\le R_{\\text{rear, legal limit}}$$\n"
     "$$F_{\\text{securing}} \\ge m \\cdot g (c_x - \\mu \\cdot c_z) \\quad (\\text{EN 12195 Longitudinal Restraint Force})$$\n\n"
     "## Industrial Case Study\n"
     "Optimasi penataan muatan gulungan baja 28 ton pada trailer 40 kaki mencegah over-axle penalty dan risiko rollover di jalan tol trans Jawa.\n\n"
     "## References\n"
     "1. EN 12195-1: Load restraining on road vehicles - Safety - Part 1: Calculation of securing forces.\n"
     "2. Transportation Research Part E: Logistics and Transportation Review (2024).\n"),

    ("276_layers_of_protection_analysis_lopa.md",
     "# Module 276: Bow-Tie Risk Analysis & Dynamic Barrier Management in Process Safety Management (PSM)\n\n"
     "## Overview\n"
     "Bow-Tie methodology integrates Fault Tree Analysis (left-hand proactive side: threats to top event) with Event Tree Analysis (right-hand reactive side: top event to consequences), "
     "incorporating preventive and mitigative Independent Protection Layers (IPLs) and escalation factor degradation monitoring.\n\n"
     "## Mathematical Formulation\n"
     "$$f(\\text{Top Event}) = \\sum_{i \\in \\text{Threats}} f_i \\times \\prod_{k \\in \\text{Preventive Barriers}} \\text{PFD}_{i, k}$$\n"
     "$$f(\\text{Consequence}_j) = f(\\text{Top Event}) \\times \\prod_{m \\in \\text{Mitigative Barriers}} \\text{PFD}_{j, m}$$\n\n"
     "## Industrial Case Study\n"
     "Penerapan Bow-Tie Barrier Management terintegrasi sensor SCADA pada unit hydrocracking kilang BBM Pertamina untuk mencegah kebocoran hidrogen tekanan tinggi.\n\n"
     "## References\n"
     "1. Center for Chemical Process Safety (CCPS). (2018). Bow Ties in Risk Management: A Concept Book for Process Safety. Wiley-AIChE.\n"
     "2. Reliability Engineering & System Safety (2024).\n"),

    ("281_circular_economy_industrial_engineering.md",
     "# Module 281: Cradle-to-Cradle (C2C) Design & Circular Materials Passports in Manufacturing\n\n"
     "## Overview\n"
     "Cradle-to-Cradle (C2C) design paradigms (William McDonough & Michael Braungart): Biological Nutrients vs Technical Nutrients, "
     "Material Health Certification, Renewable Energy integration, Water Stewardship, and Social Fairness metrics in industrial closed-loop manufacturing systems.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{C2C Circularity Metric} = \\dfrac{M_{\\text{recycled/biological input}} + M_{\\text{recoverable output}}}{2 M_{\\text{total}}} \\times \\left( 1 - \\dfrac{W_{\\text{hazardous}}}{\\text{Threshold}} \\right)$$\n\n"
     "## Industrial Case Study\n"
     "Redesain modular kursi ergonomis kantor 100% aluminium daur ulang dan busa biodegradable memperoleh sertifikasi C2C Gold dan efisiensi biaya material 34%.\n\n"
     "## References\n"
     "1. McDonough, W., & Braungart, M. (2002). Cradle to Cradle: Remaking the Way We Make Things. North Point Press.\n"
     "2. Resources, Conservation and Recycling Journal (2024).\n"),

    ("285_material_circularity_indicator.md",
     "# Module 285: Industrial Symbiosis & Kalundborg Eco-Industrial Park Resource By-Product Synergy\n\n"
     "## Overview\n"
     "Industrial Symbiosis (IS) models geographic clustering of heterogeneous industries where one company's waste or by-product becomes another company's raw material or energy source. "
     "Covers material exchange networks, waste heat cascading, energy balance optimization, and eco-industrial park (EIP) governance under UNIDO guidelines.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{IS Network Resource Savings Index (RSI)} = \\dfrac{\\sum_{i} \\Delta M_{\\text{virgin}, i} + \\sum_{j} \\Delta E_{\\text{fossil}, j}}{\\sum M_{\\text{baseline}} + \\sum E_{\\text{baseline}}}$$\n"
     "$$\\min \\sum_{u, v} C_{\\text{piping}}(u, v) + C_{\\text{treatment}}(u, v) \\quad \\text{s.t.} \\quad \\text{Quality}_{u, v} \\ge \\text{Standard}_v$$\n\n"
     "## Industrial Case Study\n"
     "Perancangan jaringan simbiosis industri di Kawasan Industri Cilegon: Uap buang turbin PLTU disalurkan ke pabrik kimia dan slag peleburan baja dijadikan agregat semen.\n\n"
     "## References\n"
     "1. UNIDO, World Bank, GIZ. (2021). An International Framework for Eco-Industrial Parks.\n"
     "2. Journal of Industrial Ecology (2024).\n"),

    ("287_ghg_protocol_decarbonization.md",
     "# Module 287: Carbon Capture, Utilization, and Storage (CCUS) & Heavy Industry Decarbonization Techno-Economics\n\n"
     "## Overview\n"
     "Engineering techno-economics of Carbon Capture, Utilization, and Storage (CCUS) technologies: Post-combustion amine absorption, oxy-fuel combustion, "
     "mineral carbonation, and $CO_2$ enhanced oil recovery ($CO_2$-EOR). Levelized Cost of Carbon Abatement (LCCA) calculation.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{LCCA} = \\dfrac{\\text{CAPEX} \\times \\text{CRF} + \\text{OPEX}_{\\text{annual}} - \\text{Revenue}_{CO_2 \\text{ sales}}}{\\text{Annual } CO_2 \\text{ Avoided (Tons)}} \\quad (\\$/\\text{ton } CO_2)$$\n"
     "$$\\text{Capture Efficiency} = \\dfrac{\\dot{m}_{CO_2, \\text{captured}}}{\\dot{m}_{CO_2, \\text{inlet flue gas}}} \\times 100\\%$$\n\n"
     "## Industrial Case Study\n"
     "Studi kelayakan tekno-ekonomi instalasi unit Carbon Capture amine solvent pada kiln pabrik semen kapasitas 3.000 ton klinker/hari dengan target emisi bersih 2035.\n\n"
     "## References\n"
     "1. International Energy Agency (IEA). (2023). CCUS in Clean Energy Transitions.\n"
     "2. Applied Energy Journal (2024).\n"),

    ("218_simulation_based_optimization.md",
     "# Module 218: Kriging Surrogate Modeling & Bayesian Gaussian Process Optimization in Simulation\n\n"
     "## Overview\n"
     "Surrogate-assisted optimization methods for computationally expensive discrete-event or finite-element industrial simulations: "
     "Ordinary Kriging, Gaussian Process Regression, Design of Experiments (Latin Hypercube Sampling / LHS), and Expected Improvement (EI) active learning infill criteria.\n\n"
     "## Mathematical Formulation\n"
     "$$\\hat{y}(\\mathbf{x}) = \\hat{\\mu} + \\mathbf{r}(\\mathbf{x})^T \\mathbf{R}^{-1} (\\mathbf{y} - \\mathbf{1}\\hat{\\mu})$$\n"
     "$$s^2(\\mathbf{x}) = \\sigma^2 \\left( 1 - \\mathbf{r}(\\mathbf{x})^T \\mathbf{R}^{-1} \\mathbf{r}(\\mathbf{x}) + \\dfrac{(1 - \\mathbf{1}^T \\mathbf{R}^{-1} \\mathbf{r}(\\mathbf{x}))^2}{\\mathbf{1}^T \\mathbf{R}^{-1} \\mathbf{1}} \\right)$$\n\n"
     "## Industrial Case Study\n"
     "Optimasi tata letak stasiun kerja dan kapasitas buffer lini perakitan kompleks menggunakan Kriging model menghemat 94% waktu komputasi simulasi Monte Carlo.\n\n"
     "## References\n"
     "1. Forrester, A., Sobester, A., & Keane, A. (2008). Engineering Design via Surrogate Modelling: A Practical Guide. Wiley.\n"
     "2. Journal of Global Optimization (2024).\n"),

    ("261_response_surface_methodology_rsm.md",
     "# Module 261: Mixture Experiments & Simplex Formulation Design in Industrial Chemical/Materials Engineering\n\n"
     "## Overview\n"
     "Specialized experimental design for mixture ingredients where the components are non-independent proportions summing to unity ($100\\%$). "
     "Covers Scheffé Canonical Polynomials (Linear, Quadratic, Special Cubic), Simplex Lattice, Simplex Centroid, and Constrained Mixture Designs.\n\n"
     "## Mathematical Formulation\n"
     "$$\\sum_{i=1}^q x_i = 1, \\quad x_i \\ge 0$$\n"
     "$$\\hat{y} = \\sum_{i=1}^q \\beta_i x_i + \\sum_{i < j}^q \\beta_{ij} x_i x_j + \\sum_{i < j < k}^q \\beta_{ijk} x_i x_j x_k \\quad (\\text{Scheffé Special Cubic Model})$$\n\n"
     "## Industrial Case Study\n"
     "Optimasi formulasi polimer komposit 4 bahan baku (resin, serat kaca, pengisi kalsium karbonat, aditif UV) untuk memaksimalkan kuat tarik dan ketahanan impak.\n\n"
     "## References\n"
     "1. Cornell, J. A. (2011). Experiments with Mixtures: Designs, Models, and the Analysis of Mixture Data (3rd ed.). Wiley.\n"
     "2. Technometrics Journal (2024).\n"),

    ("262_doe_advanced_optimization.md",
     "# Module 262: Definitive Screening Designs (DSD) & Non-Linear Factorial Optimization in R&D\n\n"
     "## Overview\n"
     "Definitive Screening Designs (DSD) by Jones & Nachtsheim (2011) for early-stage process optimization: Three-level designs with $2k + 1$ runs that identify main effects, "
     "estimate pure quadratic effects without confounding by two-factor interactions, and orthogonal main effects to all second-order terms.\n\n"
     "## Mathematical Formulation\n"
     "$$N_{\\text{runs}} = 2k + 1 \\quad (k = \\text{Jumlah Faktor Numerik})$$\n"
     "$$\\text{Cov}(\\hat{\\beta}_i, \\hat{\\beta}_j) = 0, \\quad \\text{Cov}(\\hat{\\beta}_i, \\hat{\\beta}_{ii}) = 0, \\quad \\text{Cov}(\\hat{\\beta}_i, \\hat{\\beta}_{jk}) = 0$$\n\n"
     "## Industrial Case Study\n"
     "Skrining simultan 8 faktor parameter cetakan injeksi plastik presisi tinggi (suhu leleh, tekanan injeksi, waktu pendinginan, dll) hanya dalam 17 kali uji coba.\n\n"
     "## References\n"
     "1. Jones, B., & Nachtsheim, C. J. (2011). A class of three-level designs for definitive screening in the presence of second-order effects. Journal of Quality Technology, 43(1), 1-15.\n"
     "2. Montgomery, D. C. (2020). Design and Analysis of Experiments (10th ed.). Wiley.\n"),

    ("265_process_optimization.md",
     "# Module 265: Dynamic Real-Time Optimization (D-RTO) & Model Predictive Control (MPC) in Continuous Processing\n\n"
     "## Overview\n"
     "Two-layer advanced process control architecture: Dynamic Real-Time Optimization (D-RTO) computing economic setpoints based on rigorous non-linear dynamic models, "
     "coupled with Model Predictive Control (MPC) tracking setpoints under hard actuator and state constraints in refineries and chemical plants.\n\n"
     "## Mathematical Formulation\n"
     "$$\\min_{\\mathbf{u}} \\sum_{k=0}^{N_p} \\|\\mathbf{y}_{t+k|t} - \\mathbf{r}_{t+k}\\|_{\\mathbf{Q}}^2 + \\sum_{k=0}^{N_c-1} \\|\\Delta \\mathbf{u}_{t+k|t}\\|_{\\mathbf{R}}^2$$\n"
     "$$\\text{s.t. } \\mathbf{x}_{k+1} = \\mathbf{A} \\mathbf{x}_k + \\mathbf{B} \\mathbf{u}_k, \\quad \\mathbf{u}_{\\min} \\le \\mathbf{u}_k \\le \\mathbf{u}_{\\max}, \\quad \\Delta \\mathbf{u}_{\\min} \\le \\Delta \\mathbf{u}_k \\le \\Delta \\mathbf{u}_{\\max}$$\n\n"
     "## Industrial Case Study\n"
     "Implementasi D-RTO dan Multivariable MPC pada kolom distilasi minyak bumi menstabilkan kemurnian fraksi bensin dan menghemat konsumsi energi reboiler sebesar 7.8%.\n\n"
     "## References\n"
     "1. Camacho, E. F., & Alba, C. B. (2013). Model Predictive Control (2nd ed.). Springer.\n"
     "2. Computers & Chemical Engineering (2024).\n"),

    ("243_rbd_fta_fmea_integration.md",
     "# Module 243: Dynamic Fault Tree Analysis (DFTA) with Priority-AND (PAND) & Markov Spare Gates\n\n"
     "## Overview\n"
     "Dynamic Reliability modeling capturing sequence-dependent failures, functional dependencies, and dynamic redundancy gates: "
     "Priority-AND (PAND), Sequence-Enforcing (SEQ), Functional Dependency (FDEP), and Cold/Warm/Hot Spare Gates (CSP, WSP, HSP) mapped to continuous-time Markov chains.\n\n"
     "## Mathematical Formulation\n"
     "$$\\dfrac{d\\mathbf{P}(t)}{dt} = \\mathbf{P}(t) \\mathbf{Q}, \\quad \\mathbf{P}(0) = [1, 0, \\dots, 0]$$\n"
     "$$P(\\text{PAND Gate Fail}) = \\int_0^t f_A(u) \\left( \\int_u^t f_B(v) \\, dv \\right) \\, du = \\int_0^t f_A(u) [F_B(t) - F_B(u)] \\, du$$\n\n"
     "## Industrial Case Study\n"
     "Analisis DFTA keandalan sistem pengereman darurat dan sistem pendingin redundan reaktor nuklir modular (SMR) dengan komponen cadangan warm spare.\n\n"
     "## References\n"
     "1. Dugan, J. B., Bavuso, S. J., & Boyd, M. A. (1992). Dynamic fault-tree models for fault-tolerant computer systems. IEEE Transactions on Reliability, 41(3), 363-377.\n"
     "2. Reliability Engineering & System Safety (2024).\n"),

    ("299_quality_management_systems_iso_sustainability.md",
     "# Module 299: Integrated Management Systems (IMS: ISO 9001, 14001, 45001, 27001) & PAS 99 Framework\n\n"
     "## Overview\n"
     "Integration of multiple international management system standards into a single unified corporate governance structure using High-Level Structure (Annex SL / ISO Harmonized Structure) "
     "and PAS 99 specifications: Joint internal auditing, consolidated risk registers, unified policy statements, and integrated corrective action workflows.\n\n"
     "## Mathematical Formulation\n"
     "$$\\text{IMS Integration Degree (IID)} = \\dfrac{N_{\\text{shared procedures}}}{N_{\\text{total standard clauses}}} \\times 100\\% \\ge 80\\%$$\n"
     "$$\\text{Audit Cost Savings Index} = 1 - \\dfrac{C_{\\text{integrated audit}}}{\\sum_{k=1}^M C_{\\text{standalone audit, } k}}$$\n\n"
     "## Industrial Case Study\n"
     "Integrasi sistem manajemen mutu, lingkungan, K3, dan keamanan informasi (ISO 9001, 14001, 45001, 27001) pada industri semikonduktor memangkas biaya audit tahunan 46%.\n\n"
     "## References\n"
     "1. BSI. (2012). PAS 99: Specification of common management system requirements as a framework for integration.\n"
     "2. International Journal of Quality & Reliability Management (2024).\n")
]

for filename, content in OVERLAPS_REPLACEMENTS:
    target_path = os.path.join(KNOWLEDGE_DIR, filename)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Refactored legacy module: {filename}")

print(f"Successfully cleaned all {len(OVERLAPS_REPLACEMENTS)} overlapping legacy modules!")
