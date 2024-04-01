// src/components/FinanceWorksheet.jsx
import React, { useState } from 'react';

function FinanceWorksheet() {
  // State for managing form inputs
  const [incomeLines, setIncomeLines] = useState([{ id: Date.now(), type: '', date: '', amount: '' }]);
  const [expenseLines, setExpenseLines] = useState([{ id: Date.now(), type: '', date: '', amount: '' }]);
  const [newIncomeOption, setNewIncomeOption] = useState('');
  const [newExpenseOption, setNewExpenseOption] = useState('');

  // Initial income options
  const [incomeOptions, setIncomeOptions] = useState(['Paycheck']);
  // Initial expense options
  const [expenseOptions, setExpenseOptions] = useState(['Mortgage', 'Rent', 'Car Payment', 'Car Insurance']);

  // Function to handle adding a new line
  const addLine = (linesState, setLinesState) => {
    setLinesState([...linesState, { id: Date.now(), type: '', date: '', amount: '' }]);
  };

  // Function to handle removing a line
  const removeLine = (id, linesState, setLinesState) => {
    setLinesState(linesState.filter(line => line.id !== id));
  };

  // Function to handle adding a new custom income option
  const handleAddIncomeOption = () => {
    if (newIncomeOption.trim() !== '') {
      setIncomeOptions([...incomeOptions, newIncomeOption]);
      setNewIncomeOption('');
    }
  };

  // Function to handle adding a new custom expense option
  const handleAddExpenseOption = () => {
    if (newExpenseOption.trim() !== '') {
      setExpenseOptions([...expenseOptions, newExpenseOption]);
      setNewExpenseOption('');
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log('Income:', incomeLines);
    console.log('Expenses:', expenseLines);
    // Reset form fields
    setIncomeLines([{ id: Date.now(), type: '', date: '', amount: '' }]);
    setExpenseLines([{ id: Date.now(), type: '', date: '', amount: '' }]);
  };

  // Function to format amount to dollar format
  const formatAmount = (amount) => {
    const formattedAmount = amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${formattedAmount}`;
  };

  // Function to render line input fields
  const renderLineFields = (linesState, setLinesState, options, newOption, setNewOption) => {
    return linesState.map((line, index) => (
      <div key={line.id} className="mb-3">
        <div className="input-group">
          {/* Input type field */}
          <select
            className="form-select"
            value={line.type}
            onChange={(e) =>
              setLinesState([
                ...linesState.slice(0, index),
                { ...line, type: e.target.value },
                ...linesState.slice(index + 1),
              ])
            }
            style={{ maxWidth: '120px' }}
          >
            <option value=""></option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="create">Create...</option>
          </select>
          {line.type === 'create' && (
            <input
              type="text"
              className="form-control"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              onBlur={() => {
                if (newOption.trim() !== '') {
                  setLinesState([
                    ...linesState.slice(0, index),
                    { ...line, type: newOption },
                    ...linesState.slice(index + 1),
                  ]);
                  setNewOption('');
                }
              }}
            />
          )}
          {/* Date input field */}
          <input
            type="date"
            className="form-control"
            value={line.date}
            onChange={(e) =>
              setLinesState([
                ...linesState.slice(0, index),
                { ...line, date: e.target.value },
                ...linesState.slice(index + 1),
              ])
            }
            style={{ maxWidth: '120px' }}
          />
          {/* Amount field */}
          <input
            type="text"
            className="form-control"
            value={formatAmount(line.amount)}
            onChange={(e) =>
              setLinesState([
                ...linesState.slice(0, index),
                { ...line, amount: e.target.value },
                ...linesState.slice(index + 1),
              ])
            }
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeLine(line.id, linesState, setLinesState)}
          >
            X
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h4>Income</h4>
            {renderLineFields(incomeLines, setIncomeLines, incomeOptions, newIncomeOption, setNewIncomeOption)}
            <button type="button" className="btn btn-success" onClick={() => addLine(incomeLines, setIncomeLines)}>
              Add Income
            </button>
          </div>
          <div className="col">
            <h4>Expenses</h4>
            {renderLineFields(expenseLines, setExpenseLines, expenseOptions, newExpenseOption, setNewExpenseOption)}
            <button type="button" className="btn btn-danger" onClick={() => addLine(expenseLines, setExpenseLines)}>
              Add Expense
            </button>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success mt-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default FinanceWorksheet;
