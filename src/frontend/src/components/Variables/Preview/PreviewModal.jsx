import React , {Fragment, useState} from 'react';
import {Backdrop, Box, Modal, Fade, Button, Grid, FormControl, InputLabel, Select, MenuItem, Alert, Snackbar} from '@mui/material';
import {IconButton} from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from "@mui/styles";
import VariableSelection from './VariableSelection';
import Chart from './Chart';

const useStyles = makeStyles( theme => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "85%",
    backgroundColor: theme.palette.primary.background,
    color: theme.palette.primary.main,
    boxShadow: 24,
    textColor: theme.palette.primary.main
  },

  closeButton: {
    position: 'absolute',
    left: '97.5%',
  },

  chart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  axisSelect: {
    margin: "3em 0em !important"
  },

  title:{
    margin: "0em 1em !important",
    fontSize: "2em"
  },

  variables:{
    margin:"2em 1em !important",
    height: "90%",
    overflow:"scroll",
    display:"flex",
    flexDirection:"column !important",
    justifyContent:"safe center",
  }

}));

const PreviewModal  = ((props) => {

  const classes = useStyles();

  const [values, setValues] = useState([]); // later check to deal with first case
  const [axis, setAxis] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const handleOpen = () => {
    if(!props.variables.find(vars => vars.name === 'Variável') && props.entity !== "" && props.entity !== "Entidade"){
      setAxis((props.variables)[0].name)
      setOpen(true);
    }
    else setError(true);
  };

  const handleClose = () => setOpen(false);
  const handleCloseError = () => setError(false);
  function updateVariable(event) {
    setAxis(event.target.value);
  }

  const reload = (newValues) =>{
    setValues(newValues);
  }


  return (
    <Fragment>
      <Box marginX={3}> <Button variant={props.advanced? "disabled" : "contained"} onClick={handleOpen}>Preview</Button> </Box>
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition
              BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
        <Fade in={open}> 
          <Box className={classes.modal}>
            <IconButton onClick={handleClose} className={classes.closeButton}>  <FontAwesomeIcon icon={faClose} ></FontAwesomeIcon></IconButton>
            <Grid container height={"90%"}>
              <Grid item xs={6} className={classes.variables}> 
                <VariableSelection variables={props.variables} rel = {reload} values = {values} operators={props.operators} axis={axis}></VariableSelection>
              </Grid>
              <Grid item xs={5} margin={"2em 1em"} display={"flex"} flexDirection={"column"} justifyContent="Center">
                  <Box className={classes.chart}> 
                    <Chart variables={props.variables} formula={props.formula} values = {values} fixed={axis} entity={props.entity}></Chart>
                    <FormControl fullWidth className={classes.axisSelect}>
                      <InputLabel>Eixo X</InputLabel>
                      <Select labelId="axis-select-preview-label" id="axis-select-preview" name = "axis-selection" label="Eixo X"
                          onChange={(event) => updateVariable(event)} value = {axis}>
                          {props.variables.map((variable) => (
                          <MenuItem key={variable.name + "axis"} value={variable.name}>{variable.name}</MenuItem> ))}
                      </Select>
                    </FormControl>
                  </Box> 
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal> 
      <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" variant="filled">
            Selecione uma das variáveis disponíveis para uma respetiva entidade.
        </Alert>
      </Snackbar>
    </Fragment>
  );
});

export default PreviewModal;