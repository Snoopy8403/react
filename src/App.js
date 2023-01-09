import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 33.2,
      date: new Date(2021, 1, 1),
    },
    {
      id: "e2",
      title: "Beer",
      amount: 5,
      date: new Date(2021, 1, 1),
    },
    {
      id: "e3",
      title: "Coca Cola",
      amount: 10,
      date: new Date(2021, 1, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
