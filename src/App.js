import './App.css';
import {useEffect, useState} from "react";
import ProductItem from "./components/UI/Shop/ProductItem";

const tg = window.Telegram.WebApp

function App() {
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await fetch('http://localhost:4000/users');
    //         const res = await data.json()
    //         setUsers(res)
    //     };
    //
    //     fetchData()
    //     // setUsers(data)
    // }, [])

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <>
            <main className={`container mx-auto px-6 pb-4`}>
                <ul className={'grid grid-cols-2 gap-2'}>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </ul>
            </main>
        </>
    );
}

export default App;
