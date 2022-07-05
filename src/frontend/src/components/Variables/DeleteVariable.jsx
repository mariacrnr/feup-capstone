import React from "react";
import {IconButton} from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'


const DeleteVariable = ((props) => {

    function deleteVar(event, variables, operators, name) {
        if (variables.length <= 1) return;

        let str = name;
        let id = str.substring(str.length - 1, str.length);

        variables.splice(id, 1);
        operators.splice(id, 1);

        for (let i = 0; i < variables.length; i++)
            variables[i].id = i;

        props.data("");
    }


    return(
        <IconButton 
            name = {props.name}
            onClick = {(e) => deleteVar(e, props.variables, props.operators, props.name, props.value)}
            color="primary"
            variant="text"
            >
            <FontAwesomeIcon 
                icon={faTrash} 
                >
            </FontAwesomeIcon>
        </IconButton>
    )
});

export default DeleteVariable;