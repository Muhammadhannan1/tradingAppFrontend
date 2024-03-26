import { Box, Typography } from '@mui/material'

interface props{
    type: string,
    time :any
}

const capitalize = (word:string) :string =>{
  const separate = word.split('');
  separate[0] =  separate[0].toUpperCase()
  let capitalizeWord:string = separate.join('')
  return capitalizeWord
} 



const TableHeading = ({type , time}:props) => {

  return (
    <div className="flex gap-x-8 justify-between p-4 bg-white"> 
    <Box>
        <Typography sx={{fontFamily:'revert-layer',color:'rgb(1, 188, 141)',fontWeight:'bold' }}>Top {capitalize(type)}</Typography>
    </Box>
    <Box>
      <Typography sx={{fontFamily:'revert-layer', color:'rgb(1, 188, 141)', fontWeight:'bold'}}>Data at {time}</Typography>
        </Box>
    </div>
  )
}
export default TableHeading
