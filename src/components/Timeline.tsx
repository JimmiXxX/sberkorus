import React , { FC } from 'react';
import './Timeline.css';

interface TimelineProps {
    step: number
    completed: number
    inProgress: boolean
    xPosition: string
    yPosition: string
}

const Timeline: FC<TimelineProps> = ({ step, completed, inProgress, xPosition, yPosition }) => {

    const totalSteps = step;
    const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

    return (
        <ul className="timeline-container">
            {steps.map((stepNumber) => {
                const Completed = stepNumber <= completed;
                const InProgress = inProgress && stepNumber === completed + 1;

                return (
                    <li key={stepNumber} className={`timeline-step`}>
                        <div className={`point ${Completed ? 'completed' : InProgress ? 'in-progress' : 'not-completed'}`}></div>
                        {stepNumber < totalSteps && (
                            <div className={`line ${Completed ? 'completed' : InProgress ? 'in-progress' : 'not-completed'}`}></div>
                        )}
                        {xPosition === 'line' && yPosition === 'top' && stepNumber < totalSteps && (
                            <div className="text-top-line">Шаг {stepNumber}</div>
                        )}
                        {xPosition === 'line' && yPosition === 'bottom' && stepNumber < totalSteps && (
                            <div className="text-bottom-line">Шаг {stepNumber}</div>
                        )}
                        {xPosition === 'point' && yPosition === 'top' && (
                            <div className="text-top-point">Шаг {stepNumber}</div>
                        )}
                        {xPosition === 'point' && yPosition === 'bottom' && (
                            <div className="text-bottom-point">Шаг {stepNumber}</div>
                        )}
                    </li>
                )
            })}
        </ul>
    )
};

export default Timeline
