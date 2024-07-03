declare type DashboardSummaryProps = {
  icon: IconType;
  title: string;
  count: number;
};

declare type CardHeaderProps = {
  label: string;
};

declare type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};