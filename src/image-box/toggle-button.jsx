import { useState } from "react"

export const ToggleButton = () => {

    const [toggle, setToggle] = useState(true)

    const toggleButton = () => {
        setToggle(!toggle)
    }

    const toggleMessage = () => {
        return toggle ? 'Hi, How are you': 'Thanks !! Bye'
    }

    return(
        <>
        <div style={{textAlign: "center", padding: "10px", color:`${toggle? "green": "red" }`}}>
         {
             toggleMessage()
         }
         </div>
         <div style={{textAlign: "center", padding: "10px"}}>
         <button type="button" onClick={()=> toggleButton()}>Toggle</button>
         </div>
        </>
    )
}