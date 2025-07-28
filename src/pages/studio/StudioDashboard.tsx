import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {ChartContainer} from "@/components/ui/chart.tsx";
import {Line, LineChart} from "recharts";

const data = [{
  value: 3
}, {
  value: 2
}, {
  value: 5
}, {
  value: 1
}];

export default function StudioDashboard() {
  return (
    <section className="grid grid-cols-2">
      <div>
        <Card className="w-96">
          <CardHeader className="text-center">
            Viewers
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <LineChart data={data}>
                <Line dataKey={"value"}></Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}