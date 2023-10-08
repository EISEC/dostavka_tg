import React from 'react';
import {AiOutlineClose} from "react-icons/ai";

const tg = window.Telegram.WebApp

const CloseApp = () => {
    const onClose = () => {
        tg.close()
    }
    return (
        <button className={'bg-red-700 text-2xl text-white p-2 rounded-lg'} onClick={onClose}>
            <AiOutlineClose/>
        </button>
    );
};

export default CloseApp;