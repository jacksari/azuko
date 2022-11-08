import React from 'react';

const BtnSecondary = ({title}) => {
    return (
        <button className="ml-4 inline-flex items-center px-3 md:px-6 py-1 md:py-2 bg-white border border-white rounded font-semibold text-xs text-primary-500 shadow uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-primary-100 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
            { title }
        </button>

    )
}

export default BtnSecondary;
