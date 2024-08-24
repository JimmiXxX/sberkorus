import React , { useState } from 'react';
import Timeline from './components/Timeline';
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

const App = () => {

    const [step , setStep] = useState<number> (5)
    const [completed , setCompleted] = useState<number> (2)
    const [progress , setProgress] = useState<boolean> (true)
    const [xPos , setXPos] = useState<string> ("point")
    const [yPos , setYPos] = useState<string> ('bottom')

    const incrementStep = () => {
        setStep (step + 1)
    }
    const decrementStep = () => {
        setStep (step - 1)
    }
    const incrementCompleted = () => {
        setCompleted (completed + 1)
    }
    const decrementCompleted = () => {
        setCompleted (completed - 1)
    }

    return (
        <div className="app">
            <Timeline step={ step } completed={ completed } inProgress={ progress } xPosition={xPos} yPosition={yPos}/>

            <div className="buttons">
                <div>
                    <button onClick={ incrementStep }>Увеличить шаг</button>
                    <button onClick={ decrementStep }>Уменьшить шаг</button>
                </div>
                <div>
                    <button onClick={ incrementCompleted }>Увеличить выполненных</button>
                    <button onClick={ decrementCompleted }>Уменьшить выполненных</button>
                </div>
                <div>
                    <button onClick={ ()=>{setXPos('point')} }>На точке</button>
                    <button onClick={ ()=>{setXPos('line')} }>На линии</button>
                </div>
                <div>
                    <button onClick={ ()=>{setYPos('top')} }>Сверху</button>
                    <button onClick={ ()=>{setYPos('bottom')} }>Снизу</button>
                </div>
                <div>
                    <button onClick={ ()=>{setProgress(true)} }>Прогресс</button>
                    <button onClick={ ()=>{setProgress(false)} }>Нет прогресса</button>
                </div>
            </div>
        </div>

    );
};

export default App;
