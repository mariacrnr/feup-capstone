import React from "react";
import {TextField} from "@mui/material"

const SelectValue = ((props) => {
    function updateValue(event, variables) {
        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);

        variables[id].value = event.target.value;
        props.data("");
    }


    return(
        <TextField
            name = {props.name}
            onChange={(e) => updateValue(e, props.variables, props.operators)}
            label='Valor'
            variant='outlined'
            type={"number"}
            min={1}
            value = {props.value}
            onInput = {(e) =>{
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
            }}

        />
    )
});

export default SelectValue;