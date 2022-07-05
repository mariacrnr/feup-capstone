import React from "react";
import { Box, Button } from "@mui/material";


const SelectOperator = ((props) => {

    var customDefault = {fontSize: "1em", fontWeight: "bold", margin: "0em 1em", variant: 'contained'};
    var customPressed = {fontSize: "1em", fontWeight: "bold", margin: "0em 1em", variant: 'contained', background: "#0c6B63"};

    let custom1 = customDefault;
    let custom2 = customDefault;

    if (props.operator !== undefined){
        let str = props.name;
        let id = str.substring(str.length - 1, str.length);
        switch(props.operators[id]){
            case '+':
                custom1 = customPressed;
                break;
            case '*':
                custom2 = customPressed;
                break;
            default:
                break;
        }
    }

    
    

    function updateOperator(event, variables, operators, op) {
        let operator = "";
        switch(op){
            case 0:
                operator = '+';
                custom1 = customPressed;
                custom2 = customDefault;
                break;
            case 1:
                operator = '*';
                custom1 = customDefault;
                custom2 = customPressed;
                break;
            default:
                break;            
        }

        let str = event.target.name;
        let id = str.substring(str.length - 1, str.length);

        if ((variables.length - 1) === Number(id)){
            variables.push({id: variables.length, name: "Variável", function: "x", weight: 1, value: 1, normalized: false});
            operators.push(operator);
        } 
        else operators[id] = operator;

        props.data("");
    }

    
    

    return (
        <Box position={"relative"} bottom={"1.25em"}>
            <Button variant="contained" name = {props.name} style={custom1} onClick = {(e) => updateOperator(e, props.variables, props.operators, 0)}>+</Button>
            <Button variant="contained" name = {props.name} style={custom2} onClick = {(e) => updateOperator(e, props.variables, props.operators, 1)}>x</Button>
        </Box>
    )
});
export default SelectOperator;