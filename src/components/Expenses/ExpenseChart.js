import Chart from "../Chart/Chart";
const ExpenseChart = (props) => {
  const chartDataPoints = [
    { labe: "Jan", value: 0 },
    { labe: "Feb", value: 0 },
    { labe: "Mar", value: 0 },
    { labe: "Apr", value: 0 },
    { labe: "May", value: 0 },
    { labe: "Jun", value: 0 },
    { labe: "Jul", value: 0 },
    { labe: "Aug", value: 0 },
    { labe: "Sep", value: 0 },
    { labe: "Oct", value: 0 },
    { labe: "Nov", value: 0 },
    { labe: "Dec", value: 0 },
  ];

  for (const expense in props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoint={chartDataPoints} />;
};

export default ExpenseChart;
