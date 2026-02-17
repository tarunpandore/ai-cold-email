import { Activity } from "../../types/types";

export const MOCK_ACTIVITY: Activity[] = [
  {
    id: "activity_1",
    batchName: "SaaS_Founders_Series_A.csv",
    fileSize: "2.4 MB",
    totalLeads: 420,
    personalizationScore: 96,
    status: "Completed",
    createdAt: "2024-05-24T10:00:00Z",
  },
  {
    id: "activity_2",
    batchName: "Ecom_D2C_Q2_Leads.csv",
    fileSize: "3.1 MB",
    totalLeads: 580,
    personalizationScore: 82,
    status: "Processing",
    createdAt: "2024-05-23T14:30:00Z",
  },
  {
    id: "activity_3",
    batchName: "LinkedIn_Outbound_V3.csv",
    fileSize: "1.8 MB",
    totalLeads: 310,
    personalizationScore: 89,
    status: "Completed",
    createdAt: "2024-05-21T16:00:00Z",
  },
  {
    id: "activity_4",
    batchName: "FinTech_Target_List.csv",
    fileSize: "2.9 MB",
    totalLeads: 470,
    personalizationScore: 91,
    status: "Failed",
    createdAt: "2024-05-19T11:20:00Z",
  },
];
