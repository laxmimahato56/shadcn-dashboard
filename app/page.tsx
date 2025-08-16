import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="p-4 bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="p-4 bg-primary-foreground rounded-lg">Test</div>
      <div className="p-4 bg-primary-foreground rounded-lg">
        <AppPieChart />
      </div>
      <div className="p-4 bg-primary-foreground rounded-lg">Test</div>
      <div className="p-4 bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="p-4 bg-primary-foreground rounded-lg">Test</div>
    </div>
  );
}
