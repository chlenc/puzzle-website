import React from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IProps {
  data?: Array<[number, number]>;
  color?: string;
}

const options = {
  plugins: { legend: { display: false } },
  elements: { point: { radius: 0, hitRadius: 0 } },
  scales: { XAxis: { display: false }, yAxis: { display: false } },
};
const RateChart: React.FC<IProps> = ({ data: values, color }) => {
  const data = values
    ? {
        labels: Array.from({ length: values.length }, (_, i) => i),
        datasets: [
          {
            label: "chart",
            data: values.map((v: any) => v[0]),
            fill: "start",
            // backgroundColor: (context: ScriptableContext<"line">) => {
            //   const ctx = context.chart.ctx;
            //   console.log(ctx);
            //   const gradient = ctx.createLinearGradient(0, 300, 0, 0);
            //   gradient.addColorStop(0, "rgba(53, 161, 90, 0)");
            //   gradient.addColorStop(1, "#35A15A");
            //   return "#35A15A";
            // },
            borderColor: color,
          },
        ],
      }
    : null;
  return data != null && color != null ? (
    <Line
      height={100}
      data={data}
      style={{ marginBottom: 16 }}
      options={options}
    />
  ) : null;
};

export default RateChart;
