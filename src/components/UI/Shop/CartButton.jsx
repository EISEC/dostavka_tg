import React from 'react';
import { PiShoppingCartThin } from 'react-icons/pi';

const CartButton = () => {
    return (
        <button className={'p-2 text-2xl bg-amber-50 rounded-lg'}>
            <PiShoppingCartThin/>
        </button>
    );
};

export default CartButton;