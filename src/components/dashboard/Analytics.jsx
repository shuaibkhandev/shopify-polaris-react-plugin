import { useState } from "react";
import { Box, Card, Grid, Text } from "@shopify/polaris";
import { graphData } from "../../utils/data.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart.jsx";
import DateSelector from "./DateSelector.jsx";
import AnalyticsCard from "./AnalyticsCard.jsx";

Chart.register(CategoryScale);

const Analytics = () => {
  const [chartData] = useState({
    labels: graphData.map((data) => data.year),
    datasets: [
      {
        label: "",
        data: graphData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderColor: "#89CFF0",
        borderWidth: 2,
      },
      {
        label: "",
        data: graphData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderColor: "#ADD8E6",
        borderWidth: 2,
        fill: false,
        borderDash: [5, 5],
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
        position: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: {
        ticks: {
          stepSize: 20,
        },
        border: {
          display: false, // Remove the left y-axis border line
        },
        min: 0,
        max: 40,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="analytics" style={{ paddingBlock: "var(--p-space-200)" }}>
      <Text as="h2" variant="headingLg">
        Analytics
      </Text>

      <Box style={{paddingBlock:"var(--p-space-200)"}}>
        <DateSelector />
      </Box>

      <Card>

         {/* Analytics Cards */}
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <AnalyticsCard
              title="Total Number of Scrolls"
              value="143"
              badge="91% ↑"
              tooltip="Here you can check the total number of 'load more' button clicks by visitors on collection pages"
            />
          </Grid.Cell>

          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <AnalyticsCard
              title="Infinite Scroll"
              value="50"
              tooltip="Here you can check the total number of 'load more' button clicks by visitors on collection pages"
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <AnalyticsCard
              title="Load More Clicks"
              value="50"
              tooltip="Here you can check the total number of 'load  more' button clicks by visitors on collection pages"
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <AnalyticsCard
              title="Back to Top Button Clicks"
              value="10"
              tooltip="Here you can check the total number of 'load more' button clicks by visitors on collection pages"
            />
          </Grid.Cell>
        </Grid>

        {/* Chart */}
        <Box style={{ paddingBlockStart: "50px" }}>
          <LineChart chartData={chartData} options={options} />
        </Box>
      </Card>
    </div>
  );
};

export default Analytics;
