import React from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";

function LinkNav({href, text}) {
    const router = useRouter();
    return (
        <Link href={href}>
            <a className={`text-white font-normal text-sm mx-4 border-b-2 pb-1 ${href == router.asPath ? 'font-semibold' : 'border-transparent'} hover:border-white active:border-white transition`}>{text}</a>
        </Link>
    );
}

export default LinkNav;
