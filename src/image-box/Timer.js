
import React, { useState, useEffect } from 'react';

function Timer() {
    const initCount = 0
    const [count, setCount] = useState(initCount);

    const tick = () => {
        setCount( prevCount => prevCount + 1)
    }

    const stopTimer = () =>  clearInterval(interval);

    const reset = () => {
        clearInterval(interval);
        setCount(0);
    }

    let interval;
    useEffect(() => {
        if(count < 100){
         interval = setInterval(tick, 1000)
        }
        return () =>  {
            clearInterval(interval)
        }
    }, [count])

    return (
        <>
        <div style={{textAlign: "center", padding: "10px"}}>
            {count}
            </div>
            <div style={{textAlign: "center", padding: "10px"}}>
            <button className="btn btn-primary" style={{marginRight: "5px"}} onClick={stopTimer}>Stop Timer</button>
            <button className="btn btn-secondary" onClick={reset}>Reset Timer</button>
            <br />
        </div>
        </>
    );
}

export default Timer;