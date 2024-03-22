import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import Form from "./components/expense-tracker/components/Form";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Yeees", amount: 50, category: "Utilities" },
    { id: 2, description: "nooo", amount: 50, category: "Utilities" },
    { id: 3, description: "maybee", amount: 50, category: "Utilities" },
    { id: 4, description: "noplease", amount: 50, category: "Utilities" }
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <div className="App">
      <div className="mb-5">
        <Form />
      </div>
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={id => setExpenses(expenses.filter(e => e.id !== id))} />
    </div>
  );
}

export default App;
