import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";

export const CardStatusDistribution: React.FC = () => {
  // Data for the chart
  const data = [
    { name: "Active", value: 1860, color: "#00A3A3" },
    { name: "Expired", value: 310, color: "#FFB84D" },
    { name: "Lost", value: 70, color: "#FF6380" },
    { name: "Blocked", value: 80, color: "#7958DC" },
    { name: "Inactive", value: 130, color: "#1F5EDE" }
  ];
  const legendData = [
    { name: "Active", color: "#00A3A3" },
    { name: "Expired", color: "#FFB84D" },
    { name: "Inactive", color: "#1F5EDE" },
    { name: "Blocked", color: "#7958DC" },
    { name: "Lost", color: "#FF6380" }
  ];

  // Calculate total cards
  const totalCards = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <Card className="w-full max-w-lg mx-auto p-0 py-2 bg-white rounded-lg shadow-sm">
      <CardHeader className="px-4">
        <CardTitle className="text-lg font-satoshi font-medium text-primary">
          Card Status Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0  mt-[22px]">
        <div className="relative" style={{ height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={90}
                startAngle={360}
                endAngle={0}
                paddingAngle={1}
                cornerRadius={10}
                dataKey="value"
                stroke="none"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center text displaying total */}
          <div className="absolute inset-0 gap-2 flex flex-col font-satoshi items-center justify-center">
            <span className="text-[#808080] font-medium text-xs">
              Total Cards
            </span>
            <span className="text-2xl text-primary font-medium">
              {totalCards.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-2">
        {/* Legend */}
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {legendData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-[#808080] text-xs">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
