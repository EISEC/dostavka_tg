import './App.css';
import {useEffect} from "react";

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
            <button className={'rounded-md bg-blue-600 text-white px-4 py-2 leading-[1]'} onClick={onClose}>
                Закрыть
            </button>
        </div>
    );
}

export default App;
