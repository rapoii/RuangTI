"""Solver verifikasi Modul 685: Filament Winding Netting Analysis."""
import math

# --- Parameter Material & Geometri (Type IV H2 vessel, ilustratif) ---
R_CYL = 0.175          # radius silinder (m)
P_BURST_TARGET = 157.5 # tekanan burst target 1575 bar (MPa)
XT_FIBER = 4900.0      # kekuatan tarik serat T700S-class (MPa)
V_F = 0.60             # fraksi volume serat
RHO_FIBER = 1800.0     # densitas serat karbon (kg/m3)
ALPHA_DOME_MAX_DEG = math.degrees(math.asin(0.5))  # kondisi belok geodesic: sin(a0) <= r_boss/R = 0.5


def clairaut_angle(r_local: float, alpha_cyl_deg: float, r_ref: float) -> float:
    """Hukum Clairaut geodesic pada permukaan revolusi: r * sin(alpha) = konstanta.

    Dari radius referensi r_ref (sudut alpha_ref) menuju radius r_local lebih kecil,
    sudut membesar: sin(a_local) = (r_ref/r_local) * sin(a_ref).
    """
    ratio = (r_ref / r_local) * math.sin(math.radians(alpha_cyl_deg))
    if ratio > 1.0:
        raise ValueError("Geodesic berbelok sebelum radius ini (ratio>1)")
    return math.degrees(math.asin(ratio))


def netting_design(alpha_deg: float):
    """Netting analysis dua persamaan kesetimbangan silinder tertutup.

    N_theta = P*R ; N_z = P*R/2
    Axial : Xt * t_h * sin^2(a)        = P*R/2   -> t_h
    Hoop  : Xt*(t_h*cos^2(a) + t_90)   = P*R     -> t_90 (>= 0)
    """
    a = math.radians(alpha_deg)
    t_h = (P_BURST_TARGET * R_CYL) / (2.0 * XT_FIBER * math.sin(a) ** 2)
    hoop_from_helical = XT_FIBER * t_h * math.cos(a) ** 2
    t_90 = max(0.0, (P_BURST_TARGET * R_CYL - hoop_from_helical) / XT_FIBER)
    return t_h, t_90


def main():
    print("=" * 78)
    print("NETTING ANALYSIS OPTIMIZER - FILAMENT WOUND TYPE IV PRESSURE VESSEL")
    print(f"R={R_CYL*1000:.0f} mm | Target Pb={P_BURST_TARGET*10:.0f} bar | Xt={XT_FIBER:.0f} MPa | Vf={V_F*100:.0f}%")
    print("=" * 78)

    best = None
    print(f"{'alpha(deg)':>10} {'t_hel(mm)':>10} {'t_hoop(mm)':>10} {'t_tot(mm)':>10} {'mass(kg)':>10}")
    for alpha_deg in range(10, 56, 5):
        t_h, t_90 = netting_design(alpha_deg)
        t_tot = t_h + t_90
        # massa lapisan serat silinder satuan panjang (per meter aksial)
        mass = 2 * math.pi * R_CYL * t_tot * V_F * RHO_FIBER
        flag = " <- dome-limit" if alpha_deg > ALPHA_DOME_MAX_DEG else ""
        print(f"{alpha_deg:>10} {t_h*1000:>10.2f} {t_90*1000:>10.2f} {t_tot*1000:>10.2f} {mass:>10.2f}{flag}")
        if alpha_deg <= ALPHA_DOME_MAX_DEG and (best is None or mass < best[1]):
            best = (alpha_deg, mass, t_h, t_90)

    a_best, m_best, th, t90 = best
    print("-" * 78)
    print(f"OPTIMUM (alpha <= {ALPHA_DOME_MAX_DEG:.0f} deg batas dome): "
          f"alpha={a_best} deg, t_h={th*1000:.2f} mm, t_90={t90*1000:.2f} mm, mass={m_best:.2f} kg/m")

    # Verifikasi Clairaut di dome: r dari R ke r_boss
    r_boss = 0.5 * R_CYL
    a_boss = clairaut_angle(r_boss, a_best, R_CYL)
    print(f"Clairaut dome profile: alpha(cyl)={a_best:.1f} deg -> alpha(boss r/R=0.5)={a_boss:.1f} deg")

    # Capstan tension amplifier (beta = 3 pi wrap, mu = 0.15)
    T_in, mu_cap, beta = 30.0, 0.15, 3 * math.pi
    T_out = T_in * math.exp(mu_cap * beta)
    print(f"Capstan: T_in={T_in:.0f} N -> T_out={T_out:.1f} N (mu=0.15, beta=3pi)")

    # Burst check final
    a_r = math.radians(a_best)
    Nz_cap = XT_FIBER * th * math.sin(a_r) ** 2
    Nt_cap = XT_FIBER * (th * math.cos(a_r) ** 2 + t90)
    req_Nz = P_BURST_TARGET * R_CYL / 2
    req_Nt = P_BURST_TARGET * R_CYL
    print(f"Burst check @ {P_BURST_TARGET*10:.0f} bar: Nz {Nz_cap:.2f}>={req_Nz:.2f} MN/m | "
          f"Ntheta {Nt_cap:.2f}>={req_Nt:.2f} MN/m -> "
          f"{'PASS' if Nz_cap >= req_Nz - 1e-6 and Nt_cap >= req_Nt - 1e-6 else 'FAIL'}")


if __name__ == "__main__":
    main()
