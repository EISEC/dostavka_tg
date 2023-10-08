import React from 'react';
import LogoLink from "./LogoLink";
import CartButton from "../Shop/CartButton";
import CloseApp from "../CloseApp";

const Header = () => {
    return (
        <header className={'w-full bg-blue-100 py-2 shadow-lg mb-4'}>
            <div className={'container mx-auto px-4 flex flex-row items-center justify-between gap-3'}>
                <LogoLink/>
                <CartButton/>
                <CloseApp/>
            </div>
        </header>
    );
};

export default Header;