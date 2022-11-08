import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const BtnAddCart = () => {
    return (
        <button className="flex items-center justify-center w-full px-12 py-3  bg-primary-500 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
            <FaShoppingCart/>
                        Add cart
        </button>

    )
}

export default BtnAddCart;
