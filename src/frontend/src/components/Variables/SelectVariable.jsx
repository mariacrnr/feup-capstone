import React, {useState, useEffect} from "react";
import {FormControl, InputLabel, MenuItem} from "@mui/material"
import Select from '@mui/material/Select';
import Axios from "axios";


const SelectVariable = ((props) => {
    const [variables, setVariables] = useState([]);
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getVariables`).then((result) => {
            setVariables(result.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    function updateVariable(event, variables) {
        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);
        variables[id].name = event.target.value;
        props.data("");
    }

    return(
        <FormControl fullWidth>
            <InputLabel>Variável</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name = {props.name}
                defaultValue = {"Variável"}            
                label="Variável"
                onChange={(e) => updateVariable(e, props.variables, props.operators)}
                value = {props.value}
            >
                <MenuItem key = {"Variávelsltvar"} value="Variável">Variável</MenuItem>
                {variables.map( variable => 
                <MenuItem key = {variable + "sltvar"}value={variable}>{variable}</MenuItem> )}
            </Select>
        </FormControl>
    )
    
});


export default SelectVariable;

