import React, {Fragment} from 'react';
import {Box, Slider} from '@mui/material';
import { makeStyles,  withStyles} from "@mui/styles";
import { getDatabaseData } from '../../../mock';

const useStyles = makeStyles( theme => ({
    outsideBox: {
        margin:"1em",
        width: "85%",
        alignSelf: "center"
    },

    insideBox:{
        margin: "0em 1em 1em 1em",
        padding: "1em",
        backgroundColor: theme.palette.primary.backgroundBox,  
        border: "transparent",
        borderRadius: "0.5rem", 
    },

    name: {
        textAlign:"left",
        color: theme.palette.primary.labelText,
        fontSize:13,
    },

    slider: {
        padding: "0.5em 2em 2em 1em", 
    },

    title: {
        width: "95.5%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.background,
        margin: "0em 1em 0em 0.9em",
        borderRadius: "10px",
        padding: "0.7em 0em",
        textAlign: "center",
        fontSize: 16
    }

}));

const CustomSlider = withStyles({
    valueLabel:{
        top: "4em !important",
        "&:before":{
            bottom: "0px",
            top: "-0.6em",
        }
    },
})(Slider);


const VariableSelection = (props) => {

    function updateSliderValue(event, values){
        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);
        
        let newArray = values.slice();
        newArray[id] = event.target.value;
        props.rel(newArray);
    }

    // set data set maxs, mins and steps
    let maxs = [];
    let mins = [];
    let steps = [];
    let int = true;
    
    for (let i = 0; i < props.variables.length; i++){
        let norm = true;
        //let data = getDatabaseData(props.variables[i].name); // Array de objetos com nome, data e valor
        let data = getDatabaseData(props.variables[i].name); // Array de objetos com nome, data e valor
        let localMax = -Infinity;
        let localMin = Infinity;

        for (let j = 0; j < data.length; j++){
            if (data[j].value > 1) norm = false;
            if (data[j].value % 1 !== 0) int = false; // detect if a data set as 'floats', step is 0.1 in that case
            if (data[j].value < localMin) localMin = data[j].value;
            if (data[j].value > localMax) localMax = data[j].value;
        }

        if ((!norm && props.variables[i].normalized) || !int) steps.push(0.1) 
        else steps.push(1);

        mins.push(localMin);
        maxs.push(localMax);
    }

    const classes = useStyles();

    return (
        props.variables.map((variable) => (
        <Fragment key={"frag-" + variable.name + variable.id}>
            <Box className={classes.outsideBox}>
                <Box className={classes.title}> {variable.name} </Box>
                <Box className={classes.insideBox}>
                    <Box className={classes.slider}>
                    <CustomSlider
                        name = {"slider" + variable.id}
                        min={!variable.normalized? mins[variable.id] : 0}
                        max={!variable.normalized? maxs[variable.id] : 1}
                        step={steps[variable.id]}
                        defaultValue = {1}
                        valueLabelDisplay= {(props.axis === variable.name) ?"off": "on"}
                        aria-label={variable.name}
                        onChange={(e) => updateSliderValue(e, props.values)}
                        value = {props.value}
                        disabled = {(props.axis === variable.name) ? true : false}
                    />
                    </Box>
                </Box>
            </Box> 
        </Fragment>
        ))
    )
}

export default VariableSelection;