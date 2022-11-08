import React from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";

function LinkNav({href, text}) {
    const router = useRouter();
    return (
        <Link href={href}>
            <a className={`text-primary-500 font-normal text-sm mx-4 border-b-2 pb-1 ${href == router.asPath ? 'font-semibold border-primary-500' : 'border-transparent'} hover:border-primary-500 active:border-primary-500 transition`}>{text}</a>
        </Link>
    );
}

export default LinkNav;
