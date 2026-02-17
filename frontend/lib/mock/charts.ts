import { DashboardCharts } from "../../types/types";

export const MOCK_CHART_DATA: DashboardCharts = {
  leadsProcessed: [
    { label: "May 01", value: 30 },
    { label: "May 10", value: 20 },
    { label: "May 20", value: 25 },
    { label: "May 30", value: 40 },
    { label: "Jun 05", value: 55 },
    { label: "Jun 10", value: 65 },
    { label: "Jun 15", value: 75 },
    { label: "Jun 20", value: 85 },
    { label: "Jun 25", value: 95 },
    { label: "Jun 30", value: 105 },
  ],
  scoreTrend: [
    { label: "Wk 1", value: 40 },
    { label: "Wk 2", value: 55 },
    { label: "Wk 3", value: 70 },
    { label: "Wk 4", value: 90, active: true },
  ],
  creditsUsage: [
    { label: "Jan", value: 150 },
    { label: "Feb", value: 210 },
    { label: "Mar", value: 300 },
    { label: "Apr", value: 420 },
    { label: "May", value: 350 },
  ],
};
