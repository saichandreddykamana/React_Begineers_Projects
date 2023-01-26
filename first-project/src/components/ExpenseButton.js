import './ExpenseButton.css';

const ExpenseButton = props => {
    return (
        <button type={props.type} name={props.name}>{props.value}</button>
    );
};

export default ExpenseButton;