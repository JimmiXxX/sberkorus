import React , { useState } from 'react';
import Timeline from './components/Timeline';

const App = () => {

    const [step , setStep] = useState<number> (5)
    const [completed , setCompleted] = useState<number> (2)
    const [progress , setProgress] = useState<boolean> (true)
    const [xPos , setXPos] = useState<string> ('point')
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
            <Timeline step={ step } completed={ completed } inProgress={ progress } xPosition={ xPos }
                      yPosition={ yPos }/>

            <ul className="buttons">
                <li>
                    <button onClick={ incrementStep }>Увеличить шаг</button>
                    <button onClick={ decrementStep }>Уменьшить шаг</button>
                </li>
                <li>
                    <button onClick={ incrementCompleted }>Увеличить выполненных</button>
                    <button onClick={ decrementCompleted }>Уменьшить выполненных</button>
                </li>
                <li>
                    <button onClick={ () => {
                        setXPos ('point')
                    } }>На точке
                    </button>
                    <button onClick={ () => {
                        setXPos ('line')
                    } }>На линии
                    </button>
                </li>
                <li>
                    <button onClick={ () => {
                        setYPos ('top')
                    } }>Сверху
                    </button>
                    <button onClick={ () => {
                        setYPos ('bottom')
                    } }>Снизу
                    </button>
                </li>
                <li>
                    <button onClick={ () => {
                        setProgress (true)
                    } }>Прогресс
                    </button>
                    <button onClick={ () => {
                        setProgress (false)
                    } }>Нет прогресса
                    </button>
                </li>
            </ul>
        </div>

    );
};

export default App;
