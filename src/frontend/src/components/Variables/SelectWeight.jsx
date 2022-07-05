import React, { Fragment } from "react";
import {Slider, Typography} from "@mui/material"

const SelectWeight = ((props) => {
    
    function updateWeight(event, variables) {
        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);

        variables[id].weight = event.target.value;
        props.data("");
    }

    return(
        <Fragment>
            <Typography textAlign={"left"} color="#696969" fontSize={13} paddingBottom={1}>Peso</Typography>
            <Slider
                name = {props.name}
                min={1}
                valueLabelDisplay="auto"
                aria-label="Peso"
                onChange={(e) => updateWeight(e, props.variables, props.operators)}
                value = {props.value}
            />
        </Fragment>
    )
});

export default SelectWeight;