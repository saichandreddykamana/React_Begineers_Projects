import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const [amtIsValid, setAmtIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmt = amountInputRef.current.value;
        const enteredNumAmt = +enteredAmt;
        if(enteredAmt.trim().length === 0 || enteredNumAmt < 1 || enteredNumAmt > 5){
            setAmtIsValid(false);
            return;
        }
        props.onAddToCart(enteredNumAmt);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef} 
                label='Amount' 
                input={
                    {
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }
                }
            />
            <button> + Add</button>
            {!amtIsValid && <p>Please enter valid amount.</p>}
        </form>
    );
};

export default MealItemForm;