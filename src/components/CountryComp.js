import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CChart from './CChart';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto'
    },
    chart:{
        margin:"auto",
    },
}));

const useStylesTypo = makeStyles({
    root: {
      textAlign:"center",
      fontWeight: "bold",
      color: "orange",
    },
    heading:{
        color:"orange",
        textAlign:"center",
        fontWeight: "bold",
    },
    cases:{
        color: '#FFCE56',
    },
    recovered:{
        color: '#36A2EB',
    },
    deaths:{
        color: '#FF6384',
    }
  });

export default function FullWidthGrid({cases, recovered, deaths, name}) {
    const classes = useStyles();
    const classesTypo = useStylesTypo();



    return (
        <div className={classes.root}>
            <Typography variant="h4" gutterBottom className={classesTypo.heading}>
                {`${name} ${name==""?"Select Country":"Condition"}`}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" gutterBottom className={classesTypo.cases}><CountUp start={0} end={cases} duration={2} separator=","/></Typography>
                        <Typography variant="subtitle2" gutterBottom className={classesTypo.cases}>Total Cases</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" gutterBottom className={classesTypo.recovered}><CountUp start={0} end={recovered} duration={2.5} separator=","/></Typography>
                        <Typography variant="subtitle2" gutterBottom className={classesTypo.recovered}>Total Recovered</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" gutterBottom className={classesTypo.deaths}><CountUp start={0} end={deaths} duration={2.5} separator=","/></Typography>
                        <Typography variant="subtitle2" gutterBottom className={classesTypo.deaths}>Total Deaths</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={11} className={classes.chart}><CChart cases={cases} recovered={recovered} deaths={deaths}/></Grid>
            </Grid>
            
        </div>
    );
}