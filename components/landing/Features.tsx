"use client";

import React from "react";
import { Factory, Boxes, RotateCcw, Timer, Binary, Cpu, Layers, LineChart } from "lucide-react";
import { KaTeXFormula } from "@/components/ui/KaTeXFormula";

const PILLARS = [
  {
    icon: Factory,
    title: "Perancangan Tata Letak Fasilitas",
    desc: "Optimasi ongkos material handling dengan From-To Chart, analisis derajat kedekatan ARC, dan algoritma CRAFT.",
    formula: "\\text{MHC} = \\sum D_{ij} \\times F_{ij} \\times C_{ij}",
    tag: "PTLF",
  },
  {
    icon: Boxes,
    title: "Supply Chain & Inventory",
    desc: "Perhitungan EOQ, reorder point, dan safety stock untuk meminimalkan total inventory cost.",
    formula: "\\text{EOQ} = \\sqrt{\\frac{2DS}{H}}",
    tag: "Rantai Pasok",
  },
  {
    icon: RotateCcw,
    title: "Lean Six Sigma & Quality Control",
    desc: "Framework DMAIC, diagram Ishikawa, FMEA, dan peta kendali SPC untuk perbaikan kualitas berkelanjutan.",
    formula: "\\text{DPMO} = \\frac{D}{N \\times O} \\times 10^6",
    tag: "Kualitas",
  },
  {
    icon: Timer,
    title: "Ergonomi & Work Design",
    desc: "Pengukuran waktu baku dengan Westinghouse Rating, evaluasi biomekanika postur kerja REBA dan RULA.",
    formula: "W_b = W_n \\times (1 + \\%\\text{All})",
    tag: "Ergonomi",
  },
];

const SECONDARY_FEATURES = [
  {
    icon: Binary,
    title: "Riset Operasi & LP",
    desc: "Pemecahan model matematis optimasi fungsi tujuan maksimasi profit atau minimasi biaya.",
  },
  {
    icon: Cpu,
    title: "Multi-Tier Thinking Effort",
    desc: "Dukungan 5 tingkat penalaran: Non-Thinking cepat hingga Extra High Effort untuk kalkulasi mendalam.",
  },
  {
    icon: Layers,
    title: "Formula LaTeX Otomatis",
    desc: "Langkah matematis dirender dengan standar tipografi ilmiah jurnal internasional.",
  },
  {
    icon: LineChart,
    title: "Simulasi Sistem Diskrit",
    desc: "Pemodelan antrian fasilitas dan analisis utilitas mesin lini perakitan manufaktur.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-10 sm:py-12 border-t border-border/40 w-full">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-[11px] font-bold text-accent tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20 select-none">
          Domain Spesifik TI
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mt-3.5 tracking-tight leading-tight">
          Empat Pilar Utama Rekayasa Sistem Industri
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed max-w-lg mx-auto">
          Bukan sekadar chatbot generik — RuangTI memahami standar kurikulum, metodologi formal, dan formulasi eksak Teknik Industri.
        </p>
      </div>

      {/* 4 Main Core Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
        {PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all group flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon size={19} />
                  </div>
                  <span className="text-[11px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full select-none">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed max-w-prose">
                  {p.desc}
                </p>
              </div>

              {/* KaTeX Formula Box with clean flat divider and high contrast */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                <span className="text-text-secondary text-[11px] font-sans shrink-0">Formula Acuan</span>
                <span className="text-text-primary font-medium tracking-wide text-xs sm:text-sm shrink-0">
                  <KaTeXFormula math={p.formula} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Feature Grid */}
      <div id="solvers" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        {SECONDARY_FEATURES.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all flex flex-col gap-2 shadow-sm"
            >
              <ItemIcon size={18} className="text-accent" />
              <h4 className="font-display text-sm font-bold text-text-primary">
                {item.title}
              </h4>
              <p className="text-xs text-text-primary/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
