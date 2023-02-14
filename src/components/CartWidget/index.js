import React from 'react';
import './styles.css';
import './cart_pic.png';

const CartWidget = () => {
    return(
        <div id="idCompra">
            <ul>
            <li className='moneyBag'><div id='idCart'></div></li>
            <li className='moneyBag'><div id='idCant'>0</div></li>
            </ul>
        </div>

    )
}

export default CartWidget;
