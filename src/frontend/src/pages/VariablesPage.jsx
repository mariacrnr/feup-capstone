import React, {useState, useRef, useEffect} from "react";
import { Box, Container, TextField, Button, FormControl, InputLabel, MenuItem} from "@mui/material";
import Select from '@mui/material/Select';
import FormulaPreview from "../components/Variables/FormulaPreview";
import AddVariableForm from "../components/Variables/AddVariableForm";
import ViewModal from "../components/Variables/Preview/PreviewModal";
import StaticChart from "../components/Variables/StaticChart";
import Axios from "axios";

const VariablesPage = () => {
    let [formula, setFormula] = useState("1*Variável");
    let [value, setValue] = useState("1");
    let [advanced, setAdvanced] = useState(false);
    let [entity, setEntity] = useState("");

    //let entities = getEntities();
    let [entities, setEntities] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getEntities`).then((result) => {
            setEntities(result.data);
        })
    }, [])

    let variables = useRef([{id: 0, name: "Variável", function: "x", weight: 1, value: 1, normalized: false}]);
    let operators = useRef([]);

    const getFormula = (info) => {
        setFormula(info);
    }

    const getValue = (value) => {
        setValue(value);
    }

    const updateAdvanced = () => {
        setAdvanced(!advanced);
    }

    const updateEntity = (e) => {    
        setEntity(e.target.value);
    }


    function filteredVariables(vars){
        return vars.filter((value, index, self) => {
            return self.findIndex(variable => variable.name === value.name) === index;})
    }

    return(
        <Container>
            <Box >
                <TextField fullWidth id="title-variable" label="Variável" variant="outlined"
                        inputProps={{style: {fontSize: 40, color: '#60a19b', textAlign: 'center'}}}
                        InputLabelProps={{shrink:true}}/>
            </Box>

            {!advanced?<FormulaPreview info = {formula} res = {value}></FormulaPreview>
            : 
                <Box marginY={5}>

                <TextField multiline fullWidth id="advanced-variable" label="Equação" variant="outlined" rows={10}
                        inputProps={{style: {fontSize: 30, color: '#60a19b', textAlign: 'left', height:"5em", overflow:"scroll"}}}
                        InputLabelProps={{shrink:true}}/>
             </Box>
            }
            {!advanced? <Box margin={"0em 15em"}>
                <StaticChart variables={filteredVariables(variables.current)} formula={formula} entity={entity}></StaticChart>
            </Box> : <></>}

            <Box display={"flex"} justifyContent={advanced? "flex-end" : "space-between"} alignItems="center">
                {!advanced?<Box marginY={2} width={"15em"}>
                    <FormControl fullWidth>
                    <InputLabel>Entidade</InputLabel><Select defaultValue = "Entidade" label="Entidade" onChange={(e) => updateEntity(e)}> 
                            <MenuItem key = {"Entitiesltvar"} value={"Entidade"}>Entidade</MenuItem>
                            {entities.map(dbEntity => 
                            <MenuItem key = {dbEntity + "entity"} value={dbEntity}>{dbEntity}</MenuItem> )}
                        </Select> 
                    </FormControl>
                </Box> : <></>}
                <Box display={"flex"} marginY={2} justifyContent="flex-end">
                    <ViewModal advanced={advanced} variables={filteredVariables(variables.current)} operators={operators.current} formula ={formula} marginX={3} entity={entity}></ViewModal>
                    <Button onClick={() => updateAdvanced()} variant="contained">Modo Avançado</Button>
                </Box>
            </Box>

            {!advanced? <AddVariableForm info = {getFormula} result = {getValue} variables={variables.current} operators={operators.current} ></AddVariableForm>
            : <></>}

            <Box display="flex" justifyContent="flex-end" margin="1em 0em 3em 0em">
                <Button variant="contained"> Guardar </Button>
            </Box>

        </Container>
    )
}

export default VariablesPage;