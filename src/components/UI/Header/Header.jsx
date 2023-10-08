import React from 'react';
import { MdFastfood } from 'react-icons/md';

const Header = () => {
    return (
        <header className={'w-full bg-blue-100 py-3 shadow-lg mb-4'}>
            <div className={'container mx-auto px-4 flex flex-row'}>
                <div className="logo text-4xl bg-amber-400 p-2 rounded-lg">
                    <MdFastfood className={'text-black'}/>
                </div>
            </div>
        </header>
    );
};

export default Header;