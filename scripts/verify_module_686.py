"""Solver verifikasi Modul 686: HP-RTM Darcy transient 1-D + Kamal-Sourour cure RK4.

Bagian aliran memvalidasi implementasi hukum Darcy terhadap solusi analitik
tertutup (linear-fill dan radial-fill), lalu menghitung waktu injeksi studi kasus
menggunakan formula standar liquid composite molding. Bagian curing mengintegrasikan
model Kamal-Sourour autocatalytic dengan balance energi lumped menggunakan RK4.
"""
import math
import numpy as np

MU_RESIN = 0.08        # viskositas resin epoksi fast-cure @110 C (Pa.s)
PHI_POROSITY = 0.50    # porositas preform
KXX, KYY = 1.0e-11, 3.0e-12   # permeabilitas preform (m^2), anisotropik
DELTA_P = 10.0e6       # injeksi konstan-pressure 100 bar (Pa)
LX, LY = 1.2, 0.6      # dimensi cavity (m)


def darcy_1d_transient(n_cells=200, dt=None):
    """Front-marching 1-D: profil tekanan linier p(x) pada zona jenuh,
    laju front dL/dt = Kxx*dP/(mu*phi*L). Validasi terhadap
    t_fill = mu*phi*L^2/(2*Kxx*dP)."""
    dx = LX / n_cells
    if dt is None:
        dt = dx * dx * MU_RESIN * PHI_POROSITY / (2.0 * KXX * DELTA_P) / 50.0
    L = dx                       # panjang jenuh awal satu sel
    t = 0.0
    while L < LX - 1e-12:
        grad_p = DELTA_P / L                     # profil linier eksak 1-D
        u_face = (KXX / MU_RESIN) * grad_p       # Darcy flux (m/s)
        L += u_face * dt / PHI_POROSITY          # maju front
        t += dt
    return t


def fill_time_linear(L, K):
    """Solusi analitik 1-D konstan-tekanan (textbook LCM)."""
    return MU_RESIN * PHI_POROSITY * L * L / (2.0 * K * DELTA_P)


def fill_time_radial(r_f, r_0=0.006, K=KYY):
    """Solusi analitik aliran radial titik-gate konstan-tekanan (textbook LCM)."""
    mu_phi = MU_RESIN * PHI_POROSITY
    return (mu_phi / (4.0 * K * DELTA_P)) * (
        2.0 * r_f * r_f * math.log(r_f / r_0) - r_f * r_f + r_0 * r_0)


def kamal_cure_rk4(T_mold_C=140.0, T_init_C=110.0):
    """Kamal-Sourour autocatalytic + Arrhenius, balance energi lumped 0-D."""
    A1, E1 = 2.1e5, 62.0e3     # non-autocatalytic (1/s, J/mol)
    A2, E2 = 1.8e5, 60.0e3     # autocatalytic (1/s, J/mol)
    m_exp, n_exp = 0.5, 1.4
    HR = 380e3                  # panas reaksi efektif (J/kg resin)
    rho_cp = 1.65e6             # kapasitas kalor volumetrik epoxy (J/m3/K)
    h_eff = 45.0                # transfer panas mold dua muka (W/m2K)
    av = 2.0 / 0.0025           # rasio area-volume dua bidang pendingin
    T_mold, T = T_mold_C + 273.15, T_init_C + 273.15
    alpha_c, t, dt, Rg = 0.0, 0.0, 0.02, 8.314
    hist = []

    def f(a_, T_):
        k1 = A1 * np.exp(-E1 / (Rg * T_))
        k2 = A2 * np.exp(-E2 / (Rg * T_))
        da = (k1 + k2 * a_ ** m_exp) * (1.0 - a_) ** n_exp
        dT = (HR / rho_cp) * da - (h_eff * av / rho_cp) * (T_ - T_mold)
        return da, dT

    while t < 1200:
        a1_, T1_ = f(alpha_c, T)
        a2_, T2_ = f(alpha_c + dt / 2 * a1_, T + dt / 2 * T1_)
        a3_, T3_ = f(alpha_c + dt / 2 * a2_, T + dt / 2 * T2_)
        a4_, T4_ = f(alpha_c + dt * a3_, T + dt * T3_)
        alpha_c += dt / 6 * (a1_ + 2 * a2_ + 2 * a3_ + a4_)
        T += dt / 6 * (T1_ + 2 * T2_ + 2 * T3_ + T4_)
        t += dt
        hist.append((t, alpha_c, T))

    def time_at(target):
        for tt, aa, _ in hist:
            if aa >= target:
                return tt
        return None

    t_peak = max(hist, key=lambda hh: hh[2])
    return {"gel": time_at(0.05), "t90": time_at(0.90), "demold": time_at(0.95),
            "peak_T": t_peak[2], "peak_t": t_peak[0]}


def main():
    print("=" * 78)
    print("HP-RTM SIMULATION: DARCY TRANSIENT VALIDATION + KAMAL-SOUROUR CURE")
    print(f"mu={MU_RESIN} Pa.s | phi={PHI_POROSITY} | Kxx={KXX:.1e} Kyy={KYY:.1e} m2 | dP={DELTA_P/1e6:.0f} MPa")
    print("=" * 78)

    # --- 1. Validasi solver Darcy transient 1-D vs closed form ---
    t_num = darcy_1d_transient()
    t_exact = fill_time_linear(LX, KXX)
    err_pct = abs(t_num - t_exact) / t_exact * 100
    print(f"[1D VALIDATION] numerik = {t_num:.2f} s | analitik = {t_exact:.2f} s | deviasi = {err_pct:.3f}%")

    # --- 2. Studi kasus cavity 1.2 x 0.6 m: skenario gating ---
    t_line_x = fill_time_linear(LX, KXX)              # line-inject sepanjang x
    r_flow = LX / 2.0                                  # point gate pusat -> vent kanan
    t_point_iso = fill_time_radial(r_flow, K=(KXX * KYY) ** 0.5)
    print(f"[CASE A] Line-gate tepi kiri -> vent kanan (L=0.60 m, Kxx): "
          f"{fill_time_linear(LY, KXX):.1f} s")
    print(f"[CASE B] Point-gate pusat -> vent kanan (r={r_flow} m, K_geo): {t_point_iso:.1f} s")

    # --- 3. Cure kinetics dua suhu mold ---
    results = {}
    for mold_T in (140.0, 150.0):
        c = kamal_cure_rk4(T_mold_C=mold_T)
        results[mold_T] = c
        print(f"[CURE @T_mold {mold_T:.0f} C] gel(5%): {c['gel']:.1f}s | 90%: {c['t90']:.1f}s | "
              f"demold(95%): {c['demold']:.1f}s | peak exotherm: {c['peak_T']-273.15:.1f} C @ t={c['peak_t']:.1f}s")

    # --- 4. Cycle time total (injeksi paralel dengan clamping: sequential fill+cure) ---
    for mold_T in (140.0, 150.0):
        c = results[mold_T]
        takt = t_point_iso + c["demold"]
        print(f"[CYCLE @T_mold {mold_T:.0f} C] Takt = fill {t_point_iso:.0f}s + demold-cure {c['demold']:.0f}s "
              f"= {takt:.0f} s ({takt/60:.1f} min)")


if __name__ == "__main__":
    main()
