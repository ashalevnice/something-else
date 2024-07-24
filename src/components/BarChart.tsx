import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Cell } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { trait: 'Leadership', score: 43 },
  { trait: 'Loyalty', score: 76 },
  // { trait: 'Persistence', desktop: 237, mobile: 120 },
];

const chartConfig = {
  leadership: {
    label: 'Leadership',
    color: 'hsl(var(--chart-1))',
  },
  loyalty: {
    label: 'Loyalty',
    color: 'hsl(var(--chart-2))',
  },
  // persistence: {
  //   label: 'Persistence',
  //   color: 'hsl(var(--chart-3))',
  // },
} satisfies ChartConfig;

export default function BarChart() {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <RechartsBarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} type="number" domain={[0, 100]} />
          <XAxis dataKey="trait" tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
          <Bar dataKey="score" radius={4}>
            {chartData.map((data, index) => (
              <Cell key={`cell-${index}`} fill={data.score < 50 ? 'red' : 'green'} />
            ))}
          </Bar>
        </RechartsBarChart>
      </ChartContainer>
    </>
  );
}
