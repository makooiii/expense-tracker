import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "Yeees", amount: 50, category: "Utilities" },
    { id: 2, description: "nooo", amount: 50, category: "Utilities" },
    { id: 3, description: "maybee", amount: 50, category: "Utilities" },
    { id: 4, description: "noplease", amount: 50, category: "Utilities" }
  ];

  return (
    <div className="App">
      <ExpenseList expenses={expenses} onDelete={() => console.log("deleted")} />
    </div>
  );
}

export default App;
