import './ExpenseInput.css';

const ExpenseInput = props => {
    
    return(
        <input type={props.type} name={props.name} onChange={userEventHandler}/>
    )
};

export default ExpenseInput;