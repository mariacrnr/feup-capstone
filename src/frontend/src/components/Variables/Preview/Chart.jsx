import React , {useState, useEffect} from 'react';
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

function computeFormula(fixed, values, formula, variables, minValue, maxValue, step){
  const computeFormula = require('math-expression-evaluator');

  const results = [];
  for(let i = minValue; i <= maxValue; i += step){
    let newFormula = formula;
    for (let j = 0; j < variables.length; j++){
      
      if (variables[j].name === fixed) newFormula = newFormula.replaceAll(fixed, i);     
      else newFormula = newFormula.replaceAll(variables[j].name, values[j] === undefined? 1 : values[j]) // first case is undefined
      
    }
    try{results.push(Math.round(computeFormula.eval(newFormula) * 100) / 100)}
        catch(error){results.push(0);}; 
   
  }
  
  return results;
}

function getStep(maxValue, minValue){
  return (maxValue <= 1 && minValue >= 0)? 0.01 : 1.0;
}

const Chart = ((props) => {

  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getMaxValue/${props.entity}/${props.fixed}`).then((result) => {
        setMaxValue(result.data[0]);
    }).catch((error) => {
        console.log(error);
    })
  }, [props.entity, props.fixed])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getMinValue/${props.entity}/${props.fixed}`).then((result) => {
        setMinValue(result.data[0]);
    }).catch((error) => {
        console.log(error);
    })
  }, [props.entity, props.fixed])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: (document.getElementById('title-variable').value === '') ? 'Nova Variável' : document.getElementById('title-variable').value,
        }
      },
      x: {
        title: {
          display: true,
          text: props.fixed
        }
      }
    }
  }


  const step = getStep(maxValue,minValue)

  const labels = [];
  for (let i =  minValue; i <= maxValue; i += step )
    labels.push(i.toFixed(2));

  const data = {
    labels,
    datasets: [
      {
        data: computeFormula(props.fixed, props.values, props.formula, props.variables, minValue, maxValue, step),
        borderColor: 'rgb(241, 84, 18)',
        backgroundColor: 'rgba(241, 84, 18, 0.5)',
      },
    ],
  }
  
  return (
    <Line options={options} data={data} />
  );
});

export default Chart;
