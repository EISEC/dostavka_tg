import React, {useState} from 'react';
import ButtonSize from "./ButtonSize";
import {PiShoppingCartThin} from "react-icons/pi";

const ProductItem = () => {
    const [sostav, setSostav] = useState(false)
    const [size, setSize] = useState(0)

    const upSize = () => {
        setSize(1 + size)
    }

    const downSize = () => {
        size !== 0 ? setSize(size - 1) : setSize(0)
    }

    return (
        <li className={'shadow-lg rounded-lg overflow-hidden border-[1px]'}>
            <div className={'p-2'}>
                <img
                    className={'rounded-lg'}
                    src="https://media.visualstories.com/uploads/images/1/7/5236235-1280_648194988-juicy-grilled-steak_s.jpg"
                    alt=""/>
            </div>
            <div className={'flex flex-col gap-3 p-2'}>
                <h4 className={'text-md font-bold m-0'}>Стейк класический</h4>
                <p>Цена: <span className={'font-bold'}>260 Р</span></p>
                {/*<p className={'max-h-[50px] overflow-hidden'}>Состав: <span className={'text-xs'}>лаваш, куриное филе, сыр твёрдый, капуста белокочанная, морковка корейская, огурцы маринованные, помидоры, майонез, сметана, зелень, чеснок, масло растительное.</span>*/}
                {/*</p>*/}
                <div className={'flex flex-row gap-2'}>
                    <button className={'px-4 bg-amber-400 rounded-md text-black'}>
                        <PiShoppingCartThin/>
                    </button>
                    <div className={'flex flex-row gap-1'}>
                        <ButtonSize fn={upSize} props={'+'}/>
                        <input className={'w-full text-black border-[1px] px-2 rounded-md'} type="number" value={size}/>
                        <ButtonSize fn={downSize} props={'-'}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;