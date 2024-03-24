import { useState,createContext } from "react";


export const stateContext = createContext({});

const States = (props:any) =>{
    const [categotyType, setCategotyType] = useState('Gainers')
    const [timeFrame, setTimeFrame] = useState('1h')

    return (
        <stateContext.Provider value={{categotyType,setCategotyType,timeFrame,setTimeFrame}}>
          {props.children}
        </stateContext.Provider>
      )
}

export default States;