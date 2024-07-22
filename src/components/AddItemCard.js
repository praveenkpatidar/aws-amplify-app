import React, { useState } from 'react';
import '../App.css';
import { TextField, Button, Grid, Paper } from '@mui/material';
const NavBar = ({
  addAction
}) => {

  const [taskName, setTaskName] = useState();
  const [taskDesc, setTaskDesc] = useState();

  return (
    <Grid item md={6} xs={12}>
      <Paper className="card fixedHeight">
        <TextField
          label="Item Name"
          onChange={(event) => {
            setTaskName(event.target.value)
          }}
          value={taskName}
          fullWidth
        >

        </TextField>
        <TextField
          label="Item Description"
          onChange={(event) => {
            setTaskDesc(event.target.value)
          }}
          value={taskDesc}
          fullWidth
        ></TextField>
        <div style={{ float: 'right', paddingTop: '15px', display: 'flex' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addAction(taskName, taskDesc)
            }}
          >
            Add
          </Button>
        </div>
        <div style={{ clear: 'both' }} />
      </Paper>
    </Grid>
  )
}

export default NavBar
