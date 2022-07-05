import React from "react";
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Equation, EquationOptions, defaultErrorHandler} from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'


const useStyles = makeStyles( theme => ({
    grid: {
        display: "flex",
        margin:"5em auto 3em auto",
        padding: "0em 0em",
        flexDirection: "row",
        justifyContent: "space-between",    
    },

    box: {
        border: "solid",
        borderWidth: "0.25em",
        padding: "0.5em",
        margin: "auto",
        textAlign: "center",
        borderRadius: "0.25rem",
        overflow: "auto",
        overflowWrap: "break-word",
        fontSize: "1.5em"
    },

    equal:  {
        padding: "0.75em 0em",
        margin: "2em",
        fontSize: 30
    },
}));

const ValueEquation = ({value}) => {
    const computeFormula = require('math-expression-evaluator');
    try {
        return Math.round(computeFormula.eval(value) * 100) / 100
    }
    catch (error){
        return ""
    }
};

const FormulaPreview = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid} marginY={5}> 
            
            <Grid item xs={11} sm={8.5} className={classes.box}>
                {props.info !== "" ? <EquationOptions
                    variables={defaultVariables}
                    functions={defaultFunctions}
                    errorHandler={defaultErrorHandler}
                >
                    <Equation value={props.info}></Equation>
            </EquationOptions>
            : ""}
            </Grid>
            <Grid item xs={0.2} sm={0.5} className={classes.equal}> = </Grid>
            <Grid item xs={12} sm={1.5} className={classes.box}>
                <ValueEquation value={props.res}></ValueEquation>
            </Grid>
        </Grid>
    )
}



export default FormulaPreview;