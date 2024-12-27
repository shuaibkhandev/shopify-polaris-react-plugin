import { Line } from "react-chartjs-2";

const LineChart = ({ chartData, options }) => {
  return (
    <div className="chart-container" style={{height:"200px", width:"100%"}}>
      <Line
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default LineChart;
