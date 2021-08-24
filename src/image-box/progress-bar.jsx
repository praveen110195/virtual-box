import { useState } from "react";

export const ProgressBar = () => {

    const [percentage, setpercentage] = useState(0);

    const increasedPercentageOfProgressBar = () => {
        if(percentage < 100) {
            setpercentage(percentage+10);
        }
    }

    const retake = () => {
        setpercentage(0);
    }

    const progressBarFunc = () => {
        if(percentage < 100) {
            return <button type="button" onClick={increasedPercentageOfProgressBar}> click to increase progress-bar </button>
        } else {
            return <button type="button" onClick={retake}> Retake </button>
        }
    }

    return(
        <>
        {
            percentage === 100 && (
                <p style={{color: "green", textAlign: "center"}}>Congrats!! Progress Bar Completed</p>
            )
        }
        <div style={{margin: "60px", border: "solid whitesmoke"}}>
            <div style={{borderStyle: "solid", width: `${percentage}%`, height: "30px", backgroundColor: "red"}}>
            <span style={{color: "black", padding: `${percentage/2}%`}}>{`${percentage}%`}</span>
            </div>
        </div>
        <div style={{padding: "10px", textAlign: "center"}}>
            {
                progressBarFunc()
            }
            
        </div>
        </>
    )
}