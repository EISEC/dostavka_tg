import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tg.ready();
    }, [])
    return (
        <>
            <main className={`container mx-auto px-6`}>
                <h1>Work</h1>
            </main>
        </>
    );
}

export default App;
