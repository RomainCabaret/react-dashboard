import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

Chart.register(Title, CategoryScale, LinearScale, BarElement, Tooltip);

export default function BarChart(props) {
  return (
    <div className="chart-container">
      <Bar
        redraw={true}
        data={{
          labels: [
            "Jan/Fev",
            "Mar/Avr",
            "Mai/Ju",
            "Jui/Août",
            "Sep/Oct",
            "Nov/Dev",
          ],
          datasets: [
            {
              label: props.name,
              data: props.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 20,
            },
            
          },
          // remove box
          plugins: {
              title:{
                display: true,
                text: props.name,
              }
          },
        }}
      />
    </div>
  );
}
