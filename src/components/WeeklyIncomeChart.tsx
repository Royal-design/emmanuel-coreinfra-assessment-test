import type { CustomTickProps } from "@/Types/ChartProps";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Text,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type React from "react";

export const WeeklyIncomeChart: React.FC = () => {
  const data = [
    // Monday section
    { day: "Mon", income: 50, position: 0 },
    { day: "Mon", income: 46, position: 0.1 },
    { day: "Mon", income: 39, position: 0.3 },
    { day: "Mon", income: 46, position: 0.5 },
    { day: "Mon", income: 37, position: 0.8 },

    // Tuesday section
    { day: "Tue", income: 38, position: 1.0 },
    { day: "Tue", income: 18, position: 1.4 },
    { day: "Tue", income: 39, position: 1.8 },

    // Wednesday section
    { day: "Wed", income: 36, position: 2.0 },
    { day: "Wed", income: 55, position: 2.6 },

    // Thursday section
    { day: "Thu", income: 38, position: 3 },

    // Friday section
    { day: "Fri", income: 58, position: 4.3 },
    { day: "Fri", income: 28, position: 4.8 },

    // Saturday section
    { day: "Sat", income: 58, position: 5.4 },
    { day: "Sat", income: 75, position: 5.7 },

    // Sunday section
    { day: "Sun", income: 79, position: 6.0 }
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const CustomYAxisTick = ({ x, y, payload }: CustomTickProps) => {
    const isZero = payload.value === 0;

    return (
      <Text x={x - (isZero ? 0 : 20)} y={y + 10} fontSize={12} textAnchor="end">
        {payload.value}
      </Text>
    );
  };

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
          <p className="text-sm font-medium">{`${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="gap-0 p-0 pt-4 bg-white shadow-none rounded-[12px] font-satoshi border-border-dark">
      <CardHeader className="px-4">
        <CardTitle className="text-lg font-medium text-primary">
          This Week's Income
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="mt-6 h-57 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                left: 12,
                right: 12,
                top: 5,
                bottom: 20
              }}
            >
              <CartesianGrid vertical={false} stroke="#F2F4F7" />
              <XAxis
                type="number"
                dataKey="position"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8A94A6", fontSize: 12 }}
                tickFormatter={(value) => {
                  const index = Math.round(value);
                  return days[index] || "";
                }}
                ticks={[0, 1, 2, 3, 4, 5, 6]}
                domain={[0, 6]}
                tickMargin={10}
                padding={{ left: 10, right: 10 }}
                interval={0}
                allowDataOverflow={true}
              />

              <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                axisLine={false}
                tickLine={false}
                tick={CustomYAxisTick}
                tickMargin={10}
                interval={0}
              />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <svg>
                <defs>
                  <filter id="dropshadow" height="150%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feFlood floodColor="#01A4AF78" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              <Line
                type="natural"
                dataKey="income"
                stroke="#4DAF01"
                strokeWidth={2}
                dot={false}
                filter="url(#dropshadow)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
