import React, {useState, useEffect} from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Axios from "axios";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function computeFormula(formula, values, labels, variables){
  const computeFormula = require('math-expression-evaluator');
  const results = [];

  if(values !== undefined){
    for( let i = 0; i < labels.length; i++){
      let newFormula = formula;
      if(values.length === variables.length){
        for(let j = 0; j < values.length; j++){
          let value = labels[i] === values[j][i][0] ? values[j][i][1] : 0; 
          newFormula = newFormula.replaceAll(variables[j].name, value);     
        }
      }
        try{results.push(Math.round(computeFormula.eval(newFormula) * 100) / 100)}
        catch(error){results.push(null);};
    }
  }

  return results;
}

function removeDefaultVariable(vars){
  const index = vars.findIndex(vars => vars.name === 'Variável');
  if(index !== -1) vars.splice(index, 1)
  return vars;
}

function parseValuesData(labels, values){

  if(values !== undefined){
    for(let i = 0; i < labels.length; i++){
      let index = values.findIndex(value => value[0] === labels[i]);
      if(index !== i) values.splice(i, 0, [labels[i], null]); 
    }
  }

  return values;
}

const StaticChart = ((props) => {

  const parsedVariables = removeDefaultVariable(props.variables);
  const [values, setValues] = useState([]);

  const labels = [...Array(14).keys()].map(index => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return date.toISOString().slice(0,10);
  }).reverse();
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
  }
  
  useEffect(() => {
    let cancel = false;

    const labels = [...Array(14).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date.toISOString().slice(0,10);
    }).reverse();

    async function fetchValuesData(entity, variables){
      const promises = [];
      const values = [];

      if(entity.length !== 0 && entity !== "Entidade" && variables.length !== 0){
        for(let i = 0; i < variables.length; i++){
          promises.push(await Axios.get(`http://localhost:3001/api/getLast2Weeks/${entity}/${variables[i].name}`));
        }
    
        Promise.all(promises)
        .then((response) => {
          for(let i = 0; i < variables.length; i++){
            values.push(parseValuesData(labels, response[i].data));
          }
        });
      }

      if(!cancel) setValues(values);
    }
    
    fetchValuesData(props.entity, parsedVariables);
    return () => cancel = true;
    
  }, [parsedVariables, props.entity])


  const data = {
    labels,
    datasets: [
      {
        data: computeFormula(props.formula, values, labels, parsedVariables), // [10, 20, 30, 40, 50, 60, 70], 
        borderColor: 'rgb(241, 84, 18)',
        backgroundColor: 'rgba(241, 84, 18, 0.5)',
      },
    ],
  }
  
  return (
    <Line options={options} data={data} />
  );
});

export default StaticChart;
