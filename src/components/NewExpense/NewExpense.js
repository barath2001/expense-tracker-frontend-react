import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isExpandedForm, setIsExpandedForm] = useState(0);

  const expandForm = () => {
    setIsExpandedForm(1);
  };

  const minimizeForm = () => {
    setIsExpandedForm(0);
  };

  let toggleContent;

  if (isExpandedForm === 0)
    toggleContent = <button onClick={expandForm}>Add new Expense</button>;
  else
    toggleContent = (
      <ExpenseForm
        onToggle={minimizeForm}
        onAddNewExpense={props.onAddNewExpense}
      />
    );

  return <div className="new-expense">{toggleContent}</div>;
};

export default NewExpense;
