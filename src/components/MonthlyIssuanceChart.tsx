import type { CustomTickProps } from "@/Types/ChartProps";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Text,
  ResponsiveContainer,
  type TooltipProps,
  type LegendProps
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const MonthlyIssuanceChart = () => {
  const chartData = [
    { month: "May", personalized: 9, instant: 46 },
    { month: "June", personalized: 20, instant: 50 },
    { month: "July", personalized: 7, instant: 24 },
    { month: "August", personalized: 8, instant: 42 },
    { month: "September", personalized: 10, instant: 40 },
    { month: "October", personalized: 19, instant: 64 },
    { month: "November", personalized: 8, instant: 60 }
  ];

  // Custom Y-Axis tick component
  const CustomYAxisTick = ({ x, y, payload }: CustomTickProps) => {
    const isZero = payload.value === 0;

    return (
      <Text x={x - (isZero ? 0 : 20)} y={y + 10} fontSize={12} textAnchor="end">
        {payload.value}
      </Text>
    );
  };

  // Custom tooltip component

  const CustomTooltip = ({ active, payload }: TooltipProps<any, any>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    entry.name === "personalized" ? "#014DAF" : "#CCE2FF"
                }}
              />
              <p className="text-sm capitalize">
                {entry.name === "personalized" ? "Personalized" : "Instant"}:{" "}
                {entry.value}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom Legend

  const CustomLegend = (props: LegendProps) => {
    const { payload } = props;

    return (
      <div className="flex justify-center gap-6 pt-2 border-t border-gray-200 my-4 ">
        {payload &&
          payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-[#808080]">{entry.value}</span>
            </div>
          ))}
      </div>
    );
  };

  return (
    <Card className="gap-0 p-0 pt-4 bg-white shadow-none rounded-[12px] font-satoshi border-border-dark">
      <CardHeader className="px-4">
        <CardTitle className="text-lg font-medium text-primary  ">
          Monthly Issuance
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="mt-6 h-70">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 20
              }}
              barCategoryGap={8}
            >
              <CartesianGrid vertical={false} stroke="#F2F4F7" />
              <YAxis
                domain={[0, 100]}
                tickCount={6}
                interval={0}
                tickLine={false}
                axisLine={false}
                tick={CustomYAxisTick}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                tick={{ fill: "#8A94A6", fontSize: 12 }}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Legend
                content={<CustomLegend />}
                wrapperStyle={{ bottom: 0, margin: 0, width: "100%" }}
              />
              <Bar
                name="personalized"
                dataKey="personalized"
                stackId="a"
                fill="#014DAF"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                name="instant"
                dataKey="instant"
                stackId="a"
                fill="#CCE2FF"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
