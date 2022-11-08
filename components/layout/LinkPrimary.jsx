import React from 'react';
import Link from 'next/link'

function LinkPrimary({href, text}) {
    return (
        <Link href={href}>
            <a className="inline-flex items-center px-8 py-2  bg-primary-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
                {
                    text
                }
            </a>
        </Link>
    );
}

export default LinkPrimary;
