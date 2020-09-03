import React from 'react';
import { useEffect, useState } from 'react';
import CountryComp from './CountryComp';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import listData from './List.json';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        width: '80%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



//Function Component
export default function Country() {
    const classes = useStyles();
    let [Codes,setCodes] = useState();
        useEffect(()=>{
            setCodes( listData.countries.map((c, i) => { return <MenuItem value={listData.codes[i]} key={i.toString()} name={c}>{c}</MenuItem> }));
    },[]);



    const [country, setCountry] = React.useState('');
    const [name, setName] = React.useState('');




    //Event Hnadler
    const handler = (event) => {
        setCountry(event.target.value);
        listData.codes.map((c, i)=>{
            if(c == event.target.value){
                setName(listData.countries[i]);
            }
        })
    };


    //Fetching Data
    let [CountryData, setCountryData] = useState({ total_cases: 0, total_recovered: 0, total_deaths: 0 });
    useEffect(() => {
        async function CountryAPI() {
            try{
            const response = await fetch(`https://api.thevirustracker.com/free-api?countryTotal=${country}`);
            let json_response = await response.json();
            setCountryData(json_response.countrydata[0]);}
            catch(e){
                console.log(e);
            }
        }
        CountryAPI();
    }, [country]);





    //Return
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={handler}
                >
                    {Codes}
                </Select>
            </FormControl>
            <CountryComp cases={CountryData.total_cases} recovered={CountryData.total_recovered} deaths={CountryData.total_deaths} name={name}/>
        </div>
    )
}