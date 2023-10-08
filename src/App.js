import './App.css';
import {useEffect} from "react";
import Button from "./components/UI/Button";
import Header from "./components/UI/Header/Header";

const tg = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close()
    }
    return (
        <>
            <Header/>
            <main className={`container mx-auto px-6`}>
                <h1>Work</h1>
                <Button text={'Закрыть'} event={onClose}/>
            </main>
        </>
    );
}

export default App;
