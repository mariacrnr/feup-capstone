import React, {Fragment} from "react";
import {Grid} from "@mui/material"

import { makeStyles } from "@mui/styles";

import SelectFunction from "./SelectFunction";
import SelectVariable from "./SelectVariable";
import SelectNormalized from "./SelectNormalized";
import SelectValue from "./SelectValue";
import SelectWeight from "./SelectWeight";
import SelectOperator from "./SelectOperator";
import DeleteVariable from "./DeleteVariable";


const useStyles = makeStyles( theme => ({
    grid: {
        display: "flex",
        margin:"0 auto",
        padding: "1em 0em 1.5em 0em",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: theme.palette.primary.backgroundBox,  
        border: "transparent",
        borderRadius: "0.25rem",   
    },

    box: {
        padding: "1em",
        margin: "0 auto", 
    },

    element: {
        padding: "0.55em 1em 0em 1em",
    },

    delete: {
        padding: "1.5em 0em 0em 0em",
    }

}));


const AddVariableForm = (props) => {
    const classes = useStyles();

    let variables = props.variables;
    let operators = props.operators;

    const updateFormula = (data) => {
        let tmp = "";
        let result = "";
        
        for (let i = 0; i < variables.length; i++){
            if (i > 0){
                tmp += operators[i-1]; // gets the operator correspondent to the previous var
                result += operators[i-1];
            }
    
            let f = variables[i].function.replace("x", variables[i].name);
            tmp += (variables[i].weight + '*' + f);
    
            f = variables[i].function.replace("x", variables[i].value);
            result += (variables[i].weight + '*' + f)
        }

        props.result(result);
        props.info(tmp);
    }
    

    return (
        variables.map((variable) => (          
            <Fragment key = {"frag" + variable.id}>
                <Grid container className={classes.grid}>
                    <Grid item xs={0.5} className={classes.delete}>
                        <DeleteVariable name = {"name" + variable.id} key = {"del" + variable.id} data = {updateFormula} variables = {variables} operators = {operators}></DeleteVariable>
                    </Grid>
                    <Grid item xs={3} className={classes.box}>
                        <SelectVariable name = {"name" + variable.id} key = {"name" + variable.id} value = {variable.name} data = {updateFormula} variables = {variables}></SelectVariable>
                    </Grid>
                    <Grid item xs={2} className={classes.box}>
                        <SelectFunction name = {"name" + variable.id} key = {"function" + variable.id} value = {variable.function} data = {updateFormula} variables = {variables}></SelectFunction>
                    </Grid>
                    <Grid item xs={2} className={classes.element}>
                        <SelectWeight name = {"name" + variable.id} key = {"weight" + variable.id} value = {variable.weight} data = {updateFormula} variables = {variables}></SelectWeight>
                    </Grid>
                    <Grid item xs={1.5} className={classes.box}>
                        <SelectValue name = {"name" + variable.id} key = {"value" + variable.id} value = {variable.value} data = {updateFormula} variables = {variables}></SelectValue>
                    </Grid>
                    <Grid item xs={1.5} className={classes.element}>
                        <SelectNormalized name = {"name" + variable.id} key = {"normalized" + variable.id} value = {variable.normalized} data = {updateFormula} variables = {variables}></SelectNormalized>
                    </Grid>
                </Grid>
                <SelectOperator name = {"name" + variable.id} key = {"op" + variable.id} operator = {operators[variable.id]} data = {updateFormula} variables = {variables} operators = {operators}></SelectOperator>
            </Fragment>
        )) 
    )
}


export default AddVariableForm;
