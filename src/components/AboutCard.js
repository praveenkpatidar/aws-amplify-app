import React from 'react';
import '../App.css';
import { Typography, Grid, Paper } from '@mui/material';
import { getAboutInfo } from '../api/db.js';

const message = await getAboutInfo()

const AboutCard = ({
    text
}) => {
    return (
        <Grid item xs={12} md={6}>
            <Paper className="card fixedHeight">
                <Typography>

                    <b> What is this application about? </b> <br />
                    {text} {message}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default AboutCard
