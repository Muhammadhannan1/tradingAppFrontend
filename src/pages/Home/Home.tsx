// import React from 'react'

import { Box } from "@mui/material"
import DataTable from "../../components/table/DataTable"
import TableHeading from "../../components/TableHeading/TableHeading"
import DropDown from "../../components/DropDown/DropDown"
import  {useContext} from 'react'
import { stateContext } from '../../context/States';
import  { SelectChangeEvent } from '@mui/material/Select';

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

const Home = () => {

  const context = useContext(stateContext);
  type ContextType = {
    categotyType: string; 
    setCategotyType: (value: string) => void;
    timeFrame: string;
    setTimeFrame: (value: string) => void;
};
  
  const { categotyType, setCategotyType ,timeFrame,setTimeFrame} = context as ContextType;

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategotyType(event.target.value as string);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTimeFrame(event.target.value as string);
  };

  return (
    <>
    <Box sx={{width:'25%', display:'flex' ,gap:'20px', paddingLeft:'2rem',marginTop:'2rem'}} >
        <DropDown list={categoryList} currentValue = {categotyType} changeFunction={handleCategoryChange} />
        <DropDown list={TimeFrameList} currentValue = {timeFrame} changeFunction={handleTimeChange}/>
    </Box>

    <Box className="p-4 flex flex-col xl:flex-row  gap-y-7 xl:gap-x-7" >
    <div className="shadow-2xl w-full xl:w-1/2 " > 
    <TableHeading  type= {categotyType} time = {'Sat Mar 23 2024 01:00:26 GMT+0500 (PST)'}/>
    <DataTable/>
    </div>

    <div className="shadow-2xl w-full xl:w-1/2 "> 
    <TableHeading type= {categotyType} time = {'Sat Mar 23 2024 11:00:26 GMT+0500 (PST)'}/>
    <DataTable/>
    </div>

    </Box>

    </>
  )
}
export default Home



