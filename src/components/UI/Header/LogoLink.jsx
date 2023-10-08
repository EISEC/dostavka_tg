import React from 'react';
import {MdFastfood} from "react-icons/md";

const LogoLink = () => {
    return (
        <button className="logo text-3xl bg-amber-400 p-2 rounded-lg">
            <MdFastfood className={'text-black'}/>
        </button>
    );
};

export default LogoLink;