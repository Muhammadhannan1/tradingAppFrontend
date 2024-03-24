// import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';


interface props{
    list : any[],
    currentValue:string,
    changeFunction : any
}

export default function DropDown({list,currentValue,changeFunction}:props) {



  return (
    <Box sx={{ minWidth: 120 ,width:'50%', backgroundColor:'white',borderRadius:'4px',paddingLeft:'6px' }}>
      <FormControl fullWidth>
    <NativeSelect
        // defaultValue={defaultValue}
        inputProps={{
        name: 'type',
        id: 'uncontrolled-native',
      }}
      value={currentValue}
      onChange = {changeFunction}        
    >
         {
            list.map((obj)=>
                <option key={obj.type} value={obj.value}>{obj.type}</option>
            )
          }
  </NativeSelect>
      </FormControl>
    </Box>
  );
}
