import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { GraduationCap, Trophy, Target, BookOpenCheck, TrendingUp, Flame, Award } from "lucide-react";

const COLORS = {
  bg: "#000000",
  card: "#0D0D0D",
  cardBorder: "#242424",
  violet: "#E9CCFF",
  cyan: "#4DA2FF",
  emerald: "#55DB9C",
  amber: "#FFD731",
  rose: "#E9CCFF",
  textMuted: "#9A9A9A",
  textFaint: "#5E5E5E",
};

const subjects = [
  { code: "BCA-202T", name: "Operating Systems", credits: 4, internal: 37, external: 51, total: 88, grade: "A+" },
  { code: "BCA-204T", name: "Software Testing", credits: 4, internal: 40, external: 52, total: 92, grade: "O" },
  { code: "BCA-212T", name: "Intro to Data Science", credits: 4, internal: 32, external: 51, total: 83, grade: "A+" },
  { code: "BCA-222T", name: "Digital Marketing", credits: 3, internal: 35, external: 57, total: 92, grade: "O" },
  { code: "BCA-232", name: "Logic & Critical Thinking", credits: 2, internal: 38, external: 43, total: 81, grade: "A+" },
  { code: "BCA-234", name: "Health, Yoga & Fitness", credits: 2, internal: null, external: 92, total: 92, grade: "O" },
  { code: "BCA-202P", name: "Operating Systems Lab", credits: 1, internal: 36, external: 44, total: 80, grade: "A+" },
  { code: "BCA-204P", name: "Software Testing Lab", credits: 1, internal: 37, external: 47, total: 84, grade: "A+" },
  { code: "BCA-212P", name: "Data Science Lab", credits: 2, internal: 30, external: 46, total: 76, grade: "A+" },
];

const gradeColor = { O: COLORS.violet, "A+": COLORS.cyan, A: COLORS.emerald, "B+": COLORS.amber };

const gradeDist = [
  { name: "O", value: 3, color: COLORS.violet },
  { name: "A+", value: 6, color: COLORS.cyan },
];

const barData = subjects.map((s) => ({ code: s.code.replace("BCA-", ""), marks: s.total }));

function KpiCard({ icon: Icon, label, value, sub, accent }) {
  return (
    <div
      style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}` }}
      className="rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
    >
      <div
        style={{ background: `radial-gradient(circle, ${accent}33, transparent 70%)` }}
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
      />
      <div style={{ background: `${accent}22`, color: accent }} className="w-10 h-10 rounded-xl flex items-center justify-center relative z-10">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div className="relative z-10">
        <div style={{ color: COLORS.textMuted }} className="text-xs font-medium tracking-wide uppercase">{label}</div>
        <div className="text-white text-3xl font-black tracking-tight mt-1">{value}</div>
        {sub && <div style={{ color: COLORS.textFaint }} className="text-xs mt-1">{sub}</div>}
      </div>
    </div>
  );
}

export default function ResultDashboard() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Inter', system-ui, sans-serif" }} className="w-full p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div style={{ color: COLORS.textFaint }} className="text-xs font-semibold tracking-widest uppercase mb-1">GGSIPU · Semester Result</div>
            <h1 className="text-white text-2xl sm:text-3xl font-black tracking-tight">Yash Singh Bisht</h1>
            <div style={{ color: COLORS.textMuted }} className="text-sm mt-1">
              Enrollment 03990302024 · BCA · IITM · Semester 4
            </div>
          </div>
          <div
            style={{ background: `linear-gradient(135deg, ${COLORS.violet}, ${COLORS.cyan})` }}
            className="rounded-2xl px-6 py-4 flex flex-col items-center justify-center shrink-0 self-start sm:self-auto"
          >
            <div className="text-black/60 text-[10px] font-bold tracking-widest uppercase">SGPA</div>
            <div className="text-black text-4xl font-black leading-none mt-1">9.39</div>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard icon={Target} label="Percentage" value="85.33%" sub="768 / 900 marks" accent={COLORS.cyan} />
          <KpiCard icon={BookOpenCheck} label="Credits" value="23" sub="9 subjects cleared" accent={COLORS.emerald} />
          <KpiCard icon={Trophy} label="Highest" value="92" sub="3 subjects tied" accent={COLORS.amber} />
          <KpiCard icon={Flame} label="Pass Rate" value="100%" sub="0 backlogs" accent={COLORS.rose} />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}` }} className="lg:col-span-2 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} color={COLORS.cyan} />
              <h2 className="text-white text-sm font-bold tracking-tight">Subject-wise Marks</h2>
            </div>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={barData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid stroke={COLORS.cardBorder} vertical={false} />
                <XAxis dataKey="code" tick={{ fill: COLORS.textFaint, fontSize: 11 }} axisLine={{ stroke: COLORS.cardBorder }} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: COLORS.textFaint, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#1A2136", border: `1px solid ${COLORS.cardBorder}`, borderRadius: 10, fontSize: 12 }}
                  labelStyle={{ color: "#fff" }}
                  cursor={{ fill: "#ffffff08" }}
                />
                <Bar dataKey="marks" radius={[6, 6, 0, 0]}>
                  {barData.map((_, i) => (
                    <Cell key={i} fill={i % 2 === 0 ? COLORS.violet : COLORS.cyan} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}` }} className="rounded-2xl p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} color={COLORS.violet} />
              <h2 className="text-white text-sm font-bold tracking-tight">Grade Distribution</h2>
            </div>
            <ResponsiveContainer width="100%" height={190}>
              <PieChart>
                <Pie data={gradeDist} dataKey="value" nameKey="name" innerRadius={50} outerRadius={75} paddingAngle={4} stroke="none">
                  {gradeDist.map((g, i) => <Cell key={i} fill={g.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#1A2136", border: `1px solid ${COLORS.cardBorder}`, borderRadius: 10, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-1">
              {gradeDist.map((g) => (
                <div key={g.name} className="flex items-center gap-1.5">
                  <span style={{ background: g.color }} className="w-2.5 h-2.5 rounded-full inline-block" />
                  <span style={{ color: COLORS.textMuted }} className="text-xs font-medium">{g.name} · {g.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}` }} className="rounded-2xl p-5 mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={16} color={COLORS.emerald} />
            <h2 className="text-white text-sm font-bold tracking-tight">Detailed Results</h2>
          </div>
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr style={{ borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                {["Code", "Subject", "Cr", "Int", "Ext", "Total", "Grade"].map((h) => (
                  <th key={h} style={{ color: COLORS.textFaint }} className="text-left font-semibold py-2 px-2 text-xs uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, i) => (
                <tr key={s.code} style={{ borderBottom: i === subjects.length - 1 ? "none" : `1px solid ${COLORS.cardBorder}` }}>
                  <td style={{ color: COLORS.textMuted }} className="py-2.5 px-2 font-mono text-xs">{s.code}</td>
                  <td className="py-2.5 px-2 text-white font-medium">{s.name}</td>
                  <td style={{ color: COLORS.textMuted }} className="py-2.5 px-2">{s.credits}</td>
                  <td style={{ color: COLORS.textMuted }} className="py-2.5 px-2">{s.internal ?? "—"}</td>
                  <td style={{ color: COLORS.textMuted }} className="py-2.5 px-2">{s.external}</td>
                  <td className="py-2.5 px-2 text-white font-bold">{s.total}</td>
                  <td className="py-2.5 px-2">
                    <span
                      style={{ background: `${gradeColor[s.grade]}22`, color: gradeColor[s.grade] }}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold"
                    >
                      {s.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ color: COLORS.textFaint }} className="text-center text-xs pb-2">
          Static preview · Semester 4 · GGSIPU result data
        </div>
      </div>
    </div>
  );
}