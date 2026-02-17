export type Plan = "FREE" | "PRO" | "ENTERPRISE";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: Plan;
  creditsRemaining: number;
  totalCredits: number;
  joinedAt: string;
}

export type Trend = "up" | "down" | "neutral";

export type StatIcon =
  | "send"
  | "zap"
  | "check-circle"
  | "star"
  | "file-text";

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: Trend;
  icon: StatIcon;
  iconBg: string; // Background color for the icon container
  isDynamicCredit?: boolean;
}

export type ActivityStatus = "Completed" | "Processing" | "Failed";

export interface Activity {
  id: string;
  batchName: string;
  fileSize: string;
  totalLeads: number;
  personalizationScore: number;
  status: ActivityStatus;
  createdAt: string;
}

export interface ChartPoint {
  label: string;
  value: number;
  active?: boolean;
}

export interface DashboardCharts {
  leadsProcessed: ChartPoint[];
  scoreTrend: ChartPoint[];
  creditsUsage: ChartPoint[];
}
