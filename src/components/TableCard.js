import React from 'react';
import '../App.css';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';


const TableCard = ({
  data,
  removeAction
}) => {
  return (
    <Grid item xs={12}>
      <Paper className="card">
        {data.length > 0 ?
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell >
                  Description
                </TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item => {
                return (
                  <TableRow key={item.timestamp} >
                    <TableCell >
                      {item.itemName}
                    </TableCell>
                    <TableCell >
                      {item.itemDesc}
                    </TableCell>
                    <TableCell>
                      {new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(item.timestamp)}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => removeAction(item.timestamp)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}

            </TableBody>
          </Table>
          : <Typography>You have not created any items</Typography>}
      </Paper>
    </Grid>
  )
}

export default TableCard
