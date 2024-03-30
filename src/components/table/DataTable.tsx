import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface props{
 data:any
}


export default function DataTable({data}:props) {
  return (
    <TableContainer component={Paper}>
      <Table size='small'sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Coin Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24h Change</TableCell>
            <TableCell align="right">4h Change</TableCell>
            <TableCell align="right">1h Change</TableCell>
            <TableCell align="right">position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data:any,index:number) => (
            <TableRow
            key={data.symbolName}
            sx={{
              // '&:last-child td, &:last-child th': { border: 0 },
              ...(data.newEntry ===true  && { backgroundColor: 'rgb(1, 188, 141,0.3)',})
            }}            >
            <TableCell align="left" >{index + 1}</TableCell>
            <TableCell component="th" scope="row" >
                {data.symbolName}
              </TableCell>
              <TableCell align="right" >{data.price}</TableCell>
              <TableCell align="right" >{data.twentyHourHourChange.toFixed(5)}</TableCell>
              <TableCell align="right" >{data.FourHourChange.toFixed(5)}</TableCell>
              <TableCell align="right" >{data.oneHourChange.toFixed(5)}</TableCell>
              {/* <TableCell align="right" sx={{ ...(data.newEntry ===true  && { color: 'rgb(1, 188, 141)',})}}>{
              data.newEntry === true ? 'new Entry':'--'
              }</TableCell> */}
              <TableCell align="right" sx={{ ...(data.position === 'New Entry'  && { color: 'rgb(1, 188, 141)',}), paddingLeft:'0'}}>{
              // data.newEntry === true ? 'new Entry':'--'
              data.position
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
