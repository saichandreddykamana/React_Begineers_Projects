import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = props => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [isFormSelected, setIsFormSelected] = useState(false);

    const onChangeFormSelectedState = (event) => {
        setIsFormSelected(!isFormSelected);
    };

    const submitHandler = event => {
        event.preventDefault();
        const newExpenseItem = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: +enteredAmount
        }
        props.onSaveExpenseData(newExpenseItem);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const titleEventHandler = event => {
        setEnteredTitle(event.target.value);
    }

    const dateEventHandler = event => {
        setEnteredDate(event.target.value);
    }

    const amountEventHandler = event => {
        setEnteredAmount(event.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {!isFormSelected && (
                    <button onClick={onChangeFormSelectedState}>Add New Expenses</button>
                )}
            {isFormSelected && (
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleEventHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} onChange={dateEventHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountEventHandler}/>
                    </div>
                    <div className='new-expense__actions'>
                    {isFormSelected && (
                        <button onClick={onChangeFormSelectedState}>Cancel</button>
                    )}
                    {isFormSelected && <button type="submit">Add Expense</button>}
                    </div>
                </div>  
            )
            }</form>
        </div>
    )
};

export default ExpenseForm;