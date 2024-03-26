import { useState,createContext } from "react";


export const stateContext = createContext({});

const States = (props:any) =>{
    const [categotyType, setCategotyType] = useState('Gainers')
    const [timeFrame, setTimeFrame] = useState('1h')
    const [previousData, setPreviousData] = useState([])
    const [previousDataTime, setPreviousDataTime] = useState('')
    const [newData, setNewData] = useState([])
    const [newDataTime, setNewDataTime] = useState('')
    

    return (
        <stateContext.Provider value={{
        categotyType,setCategotyType,
        timeFrame,setTimeFrame,
        previousData,setPreviousData,
        newData,setNewData,
        previousDataTime, setPreviousDataTime,
        newDataTime, setNewDataTime
        }}>
          {props.children}
        </stateContext.Provider>
      )
}

export default States;