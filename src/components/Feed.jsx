import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import styled from '@emotion/styled';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1B74E4",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#E7E9EB",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, TotalWorking) {
  return { id, name, TotalWorking };
}

const rows = [
  createData('T209', 'Phan Ba Hoang', 248),
  createData('T210', 'Phan Ba Tuan', 248),
  createData('T211', 'Phan Ba Nam', 248),
  createData('T212', 'Phan Ba Son', 248),
]
export const Feed = () => {
  return (
    <Box width="80%" sx={{ display: 'flex', flexWrap: 'wrap' }} >
      {/* <Card sx={{ width:"40%", maxWidth: "50%", margin: "10px", backgroundColor: "#E7E9EB" }}>
        <CardMedia
        component="img"
       
        alt="green image"
        image="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>Phan Ba Hoang</Typography>
          <Typography variant='h6' component='div'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card> */}


      {/* <Box m={4} sx={{width: "100%"}} >
        <Typography sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "32px", backgroundColor: "#04AA6D",  borderRadius: "10px", padding: "15px", color: "white", width: "350px" }} >
          Nhân viên thiếu giờ làm trong tháng 5
        </Typography>

        <TableContainer component={Paper} >
          <Table  aria-label="customized table" >
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Total Working</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row" >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right" sx={{color: "red"}}>{row.TotalWorking}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box> */}

      <Box m={4} sx={{width: "100%"}} >
        <Typography sx={{ fontFamily:"'Source Sans Pro', sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "18px", backgroundColor: "#04AA6D",  borderRadius: "25px", padding: "15px", color: "white", width: "310px", marginBottom: "10px" }} >
          Nhân viên thiếu giờ làm trong tháng 5
        </Typography>

        <TableContainer component={Paper} >
          <Table  aria-label="customized table" >
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Total Working</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row" >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center" sx={{color: "red"}}>{row.TotalWorking}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>

      <Box m={4} sx={{width: "100%"}} >
        <Typography sx={{ fontFamily:"'Source Sans Pro', sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "18px", backgroundColor: "#04AA6D",  borderRadius: "25px", padding: "15px", color: "white", width: "310px", marginBottom: "10px" }} >
        Nhân viên xin nghỉ trong 7 ngày tới
        </Typography>

        <TableContainer component={Paper} >
          <Table  aria-label="customized table" >
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Day Off</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row" >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center" sx={{color: "red"}}>{row.TotalWorking}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>

      <Box m={4} sx={{width: "100%"}} >
        <Typography sx={{ fontFamily:"'Source Sans Pro', sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "18px", backgroundColor: "#04AA6D",  borderRadius: "25px", padding: "15px", color: "white", width: "200px", marginBottom: "10px" }} >
        Intern đi làm trong ngày
        </Typography>

        <TableContainer component={Paper} >
          <Table  aria-label="customized table" >
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Day Working</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row" >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center" sx={{color: "red"}}>{row.TotalWorking}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Box>
  )
}
