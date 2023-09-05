import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';


const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0 ;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item => <CartItem
                    key={item.id}
                    amount={item.amount}
                    name={item.name}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />)
        }
    </ul>

    const orderSubmitHandler = () => {
        var itemsStr = '';
        for(var item of cartCtx.items){
            itemsStr += ` ${item.name}`;
        }
        console.log(`ITEMS : ${itemsStr}`);
        console.log('Order in Place.....');
    }; 

    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderSubmitHandler}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;