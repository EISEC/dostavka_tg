import React from 'react';

export default function Button({event, text}) {
    return (
        <button className={'rounded-md bg-blue-600 text-white px-4 py-2 leading-[1]'} onClick={event}>
            {text}
        </button>
    );
};