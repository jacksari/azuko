import React from 'react';

const BtnPrimary = ({title}) => {
    return (
        <button className=" inline-flex items-center justify-center px-3 md:px-6 py-1 md:py-2  bg-primary-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
            { title }
        </button>

    )
}

export default BtnPrimary;
