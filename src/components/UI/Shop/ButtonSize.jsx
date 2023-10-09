import React from 'react';

const ButtonSize = ({fn, props}) => {
    return (
        <button className={'min-w-[26px] bg-red-600 text-white px-2 flex items-center justify-center rounded-md'} onClick={fn}>
            {props}
        </button>
    );
};

export default ButtonSize;