import React from "react";
import {FormControlLabel, FormGroup, Switch, Typography} from "@mui/material"

const SelectNormalized = ((props) => {
    
    function updateNormalized(event, variables) {
        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);

        variables[id].normalized = event.target.checked;
        props.data("");
    }

    return(
        <FormGroup>
            <Typography textAlign={"left"} color="#696969" fontSize={13} paddingBottom={0.3}>Normalizar</Typography>
            <FormControlLabel
            name = {props.name}
            defaultValue = {false}
            onChange={(e) => updateNormalized(e, props.variables, props.operators)}
            control={<Switch color="primary" />}
            value = {props.value}
            />
        </FormGroup>
    )
});

export default SelectNormalized;