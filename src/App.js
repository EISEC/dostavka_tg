import './App.css';
import {useEffect} from "react";
import Button from "./components/UI/Button";

const tg = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close()
    }
    return (
        <div className={`container mx-auto px-6`}>
            <h1>Work</h1>
            <Button text={'Закрыть'} event={onClose}/>
        </div>
    );
}

export default App;
