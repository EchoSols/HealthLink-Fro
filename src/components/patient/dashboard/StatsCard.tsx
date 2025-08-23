interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

export const StatsCard = ({ title, value, subtitle, icon: Icon, color, bgColor }: StatsCardProps) => (
  <div className="bg-white rounded-lg border p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className={`p-3 rounded-full ${bgColor} ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  </div>
);
