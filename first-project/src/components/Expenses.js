import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const expensesFilterHandler = filterValue => {
        setFilteredYear(filterValue);
    }

    const filteredExpressExpress = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <div className="expenses-filter">
                <ExpensesFilter selected={filteredYear} onChangeExpenseFilter={expensesFilterHandler}/>
            </div>
            <div>
                <ExpensesChart expenses={filteredExpressExpress} />
            </div>
            <div className="expenses">
                {
                   filteredExpressExpress.length === 0 ? <p className="no-expenses">No Expenses Found. Please change year in filter.</p> :  filteredExpressExpress.map(
                    item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                )
                }
            </div>
        </div>
        
    );
}

export default Expenses