// import React from 'react'

import { Box } from "@mui/material"
import DataTable from "../../components/table/DataTable"
import TableHeading from "../../components/TableHeading/TableHeading"
import DropDown from "../../components/DropDown/DropDown"
import  {useContext, useEffect} from 'react'
import { stateContext } from '../../context/States';
import  { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios"

const categoryList = [
  {value:'gainers',type:'Gainers'},
  {value:'losers',type:'Losers'}
]
const TimeFrameList = [
  {value:'1h',type:'1h'},
  {value:'2h',type:'2h'},
  {value:'4h',type:'4h'},
  {value:'8h',type:'8h'},
  {value:'12h',type:'12h'},
  {value:'24h',type:'24h'}
]
type ContextType = {
  categotyType: string; 
  setCategotyType: (value: string) => void;
  timeFrame: string;
  setTimeFrame: (value: string) => void;
  previousData : []
  setPreviousData:(value: string) => void;
  newData: []
  setNewData:(value: string) => void;
  previousDataTime:string
  setPreviousDataTime:(value: string) => void;
  newDataTime:string
  setNewDataTime:(value: string) => void;
};
const Home = () => {

  const context = useContext(stateContext);

  const { 
    categotyType, setCategotyType ,
    timeFrame,setTimeFrame,
    previousData,setPreviousData,
    newData,setNewData,
    previousDataTime, setPreviousDataTime,
    newDataTime, setNewDataTime
  } = context as ContextType;

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategotyType(event.target.value as string);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTimeFrame(event.target.value as string);
  };

  const fetchDataAndUpdateState = async () => {
    try {
      const apiData = await fetchData(`http://localhost:6100/api/v1/coinData/getData?categoryType=${categotyType.toLowerCase()}&timeFrame=${timeFrame}`);
      console.log(apiData);
      setPreviousData(apiData.oldData)
      setNewData(apiData.newData)
      setPreviousDataTime(apiData.oldDataTime)
      setNewDataTime(apiData.newDataTime)


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
useEffect(() => {
  fetchDataAndUpdateState();

 
}, [categotyType,timeFrame])


  return (
    <>
    <Box sx={{width:'25%', display:'flex' ,gap:'20px', paddingLeft:'2rem',marginTop:'2rem'}} >
        <DropDown list={categoryList} currentValue = {categotyType} changeFunction={handleCategoryChange} />
        <DropDown list={TimeFrameList} currentValue = {timeFrame} changeFunction={handleTimeChange}/>
    </Box>

    <Box className="p-4 flex flex-col xl:flex-row  gap-y-7 xl:gap-x-7" >
    <div className="shadow-2xl w-full xl:w-1/2 " > 
    <TableHeading  type= {categotyType} time = {newDataTime}/>
    <DataTable data={newData}/>
    </div>

    <div className="shadow-2xl w-full xl:w-1/2 "> 
    <TableHeading type= {categotyType} time = {previousDataTime}/>
    <DataTable data={previousData}/>
    </div>

    </Box>

    </>
  )
}
export default Home


const fetchData = async (url :string) =>{
  console.log(url)
  const response = await axios.get(url);
  const responseData = response.data.data;
   return responseData
}
