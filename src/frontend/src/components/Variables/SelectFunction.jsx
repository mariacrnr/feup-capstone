import React, {useState, useEffect} from "react";
import {FormControl, InputLabel, MenuItem} from "@mui/material"
import Select from '@mui/material/Select';

import { Equation, EquationOptions, defaultErrorHandler} from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'
import Axios from "axios";

const Function = ({eq}) => {
    return(
        <EquationOptions
            variables={defaultVariables}
            functions={defaultFunctions}
            errorHandler={defaultErrorHandler}
        >
            <Equation value={eq}></Equation>
        </EquationOptions>
    )
};



const SelectFunction = ((props) => {

    const [functions, setFunctions] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getFunctions`).then((result) => {
            setFunctions(result.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    
    function updateFunction(event, variables){
        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);
        variables[id].function = event.target.value;
        props.data("");
    }

    const value = functions.find(variable => variable === props.value);

    return(
        <FormControl fullWidth>
            <InputLabel>Função</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name = {props.name}
                defaultValue = ""
                label="Variável"
                onChange={(e) => updateFunction(e, props.variables, props.operators)}
                value = {value? value: ""}
            >
                {functions? functions.map( dbFunction => 
                <MenuItem key = {dbFunction + "sltfunc"} value={dbFunction}><Function eq = {dbFunction}></Function></MenuItem>):<></>}
            </Select>
        </FormControl>
    )
});

export default SelectFunction;