import React from 'react';
import {MdFastfood} from "react-icons/md";

const Logo = () => {
    return (
        <div className="logo text-3xl bg-amber-400 p-2 rounded-lg">
            <MdFastfood className={'text-black'}/>
        </div>
    );
};

export default Logo