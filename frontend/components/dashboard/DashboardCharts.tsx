"use client";

import { useAppStore } from "@/store/useAppStore";

export default function DashboardCharts() {
    const { chartData } = useAppStore();

    const leadsData = chartData.leadsProcessed;
    const maxLeads = Math.max(...leadsData.map(d => d.value), 10);
    const chartHeight = 20;
    const padding = 5;
    const effectiveHeight = chartHeight - (padding * 2);

    const getX = (index: number) => (index / (leadsData.length - 1)) * 100;
    const getY = (value: number) => chartHeight - padding - (value / maxLeads) * effectiveHeight;

    const points = leadsData.map((p, i) => `${getX(i)},${getY(p.value)}`).join(" ");
    const areaPath = `M0,${chartHeight} ${leadsData.map((p, i) => `L${getX(i)},${getY(p.value)}`).join(" ")} L100,${chartHeight} Z`;
    const linePath = `M${getX(0)},${getY(leadsData[0].value)} ${leadsData.slice(1).map((p, i) => `L${getX(i + 1)},${getY(p.value)}`).join(" ")}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Leads Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-primary/5 shadow-sm flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h5 className="text-base font-bold text-slate-800">Leads Processed Over Time</h5>
                    <select className="text-xs font-bold bg-primary/5 border-none rounded-lg focus:ring-primary text-primary pr-8 transition-all hover:bg-primary/10 cursor-pointer w-full sm:w-auto">
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>
                <div className="h-64 flex flex-col mt-auto">
                    <div className="flex-1 w-full relative group">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox={`0 0 100 ${chartHeight}`}>
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#2c5926" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#2c5926" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Vertical Grid Lines */}
                            {leadsData.map((_, i) => {
                                const x = getX(i);
                                return (
                                    <line
                                        key={i}
                                        x1={x}
                                        y1="0"
                                        x2={x}
                                        y2={chartHeight}
                                        stroke="currentColor"
                                        className="text-primary/10"
                                        strokeWidth="0.1"
                                        strokeDasharray="1 1"
                                    />
                                );
                            })}
                            {/* Dynamic Line Chart */}
                            <path
                                d={areaPath}
                                fill="url(#chartGradient)"
                                className="transition-all duration-700"
                            />
                            <path
                                d={linePath}
                                fill="none"
                                stroke="#2c5926"
                                strokeWidth="0.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-700"
                            />
                        </svg>
                    </div>
                    <div className="flex justify-between mt-4 px-2">
                        {leadsData.map((point) => (
                            <span key={point.label} className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                                {point.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Score Trend */}
            <div className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h5 className="text-base font-bold text-slate-800">Score Trend</h5>
                    <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/5 rounded">Weekly</span>
                </div>
                <div className="flex items-end justify-between h-56 gap-2 mt-auto">
                    {chartData.scoreTrend.map((item) => (
                        <div key={item.label} className="flex flex-col items-center flex-1 gap-2 group">
                            <div
                                className={`w-full rounded-t-lg transition-all duration-500 ease-out hover:opacity-80 ${item.active
                                    ? "bg-primary shadow-lg shadow-primary/10"
                                    : "bg-primary/20"
                                    }`}
                                style={{ height: `${item.value}%` }}
                            ></div>
                            <span className={`text-[10px] uppercase transition-all whitespace-nowrap ${item.active ? "text-slate-900 font-black" : "font-bold text-slate-400"
                                }`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
