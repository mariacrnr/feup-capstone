
export function getVariables() {
    return ["TemperaturaMax", "Precipitação", "VentoMax"];
}

export function getFunctions(){
    return ["x", "x^2", "1/x"];
}

export function getDatabaseData(name){
    // SELECT * FROM Variables WHERE NAME = ?;
    switch(name){
        case "TemperaturaMax":
            return getTempMax();
        case "Precipitação":
            return getPrecipitacao();
        case "VentoMax":
            return getVentoMax();
        default:
            return null;
    }
}

export function getMax(name){
    switch(name){
        case "TemperaturaMax":
            return 28;
        case "Precipitação":
            return 0.61
        case "VentoMax":
            return 38;
        default:
            return null;
    }
}

export function getMin(name){
    switch(name){
        case "TemperaturaMax":
            return 17;
        case "Precipitação":
            return 0.01;
        case "VentoMax":
            return 13;
        default:
            return null;
    }
}

export function isNorm(name){
    switch(name){
        case "TemperaturaMax":
            return true;
        case "Precipitação":
            return false;
        case "VentoMax":
            return true;
        default:
            return true;
    }
}

export function getEntities(){
    return ["ASAE"];
}

export function getDatabaseValues(data){
    let values = [];
    for(let i = 0; i < data.length; i++){
        values.push(data[i].value);
    }
    return values;
}

export function getValuesByDate(variables){
    let result = []
    for(let i = 0; i < variables.length; i++){
        let data = getDatabaseData(variables[i].name);

        let dates = data.map(function (dates) { return dates.date; });
        let values = data.map(function (values) { return values.value; });

        result.push(dates.map(function(date, value) {
            return [date, values[value]];
        }))
    }
    
    return result;
}

export function getTempMax(){
    let temperaturaMax = [
        {name: "TemperaturaMax", date: "2022-06-14", value: 19},
        {name: "TemperaturaMax", date: "2022-06-15", value: 18},
        {name: "TemperaturaMax", date: "2022-06-16", value: 17},
        {name: "TemperaturaMax", date: "2022-06-17", value: 19},
        {name: "TemperaturaMax", date: "2022-06-18", value: 23},
        {name: "TemperaturaMax", date: "2022-06-19", value: 28},
        {name: "TemperaturaMax", date: "2022-06-20", value: 25},
        {name: "TemperaturaMax", date: "2022-06-21", value: 21},
        {name: "TemperaturaMax", date: "2022-06-22", value: 20},
        {name: "TemperaturaMax", date: "2022-06-23", value: 20},
        {name: "TemperaturaMax", date: "2022-06-24", value: 20},
        {name: "TemperaturaMax", date: "2022-06-25", value: 20},
        {name: "TemperaturaMax", date: "2022-06-26", value: 25},
        {name: "TemperaturaMax", date: "2022-06-27", value: 21},      
    ];
    return temperaturaMax;
}

export function getPrecipitacao(){
    let precipitacao = [
        {name: "Precipitação", date: "2022-06-22", value: 0.40},
        {name: "Precipitação", date: "2022-06-23", value: 0.61},
        {name: "Precipitação", date: "2022-06-24", value: 0.20},
        {name: "Precipitação", date: "2022-06-25", value: 0.01},
        {name: "Precipitação", date: "2022-06-26", value: 0.01},
        {name: "Precipitação", date: "2022-06-27", value: 0.01},
        {name: "Precipitação", date: "2022-06-28", value: 0.02},
        {name: "Precipitação", date: "2022-06-29", value: 0.10},
        {name: "Precipitação", date: "2022-06-30", value: 0.20},
        {name: "Precipitação", date: "2022-06-31", value: 0.22}  
    ];
    return precipitacao;
}

export function getVentoMax(){
    let ventoMax = [
        {name: "VentoMax", date: "2022-06-14", value: 23},
        {name: "VentoMax", date: "2022-06-15", value: 28},
        {name: "VentoMax", date: "2022-06-16", value: 34},
        {name: "VentoMax", date: "2022-06-17", value: 38},
        {name: "VentoMax", date: "2022-06-18", value: 27},
        {name: "VentoMax", date: "2022-06-19", value: 30},
        {name: "VentoMax", date: "2022-06-20", value: 31},
        {name: "VentoMax", date: "2022-06-21", value: 13},
        {name: "VentoMax", date: "2022-06-22", value: 13},
        {name: "VentoMax", date: "2022-06-23", value: 13},
        {name: "VentoMax", date: "2022-06-24", value: 21},
        {name: "VentoMax", date: "2022-06-25", value: 20},
        {name: "VentoMax", date: "2022-06-26", value: 25},
        {name: "VentoMax", date: "2022-06-27", value: 14},      
    ];
    return ventoMax;
}

// let dbData = getDatabaseData(props.variables[id].name);
//     let max = -Infinity;
//     let min = Infinity;

//     function setMax(){
//         for (let measurement in dbData)
//             if (dbData[measurement].value > max) max = dbData[measurement].value;
        
//         console.log(max)
//         if (props.variables[id].name == "Variável") max = Infinity;   
//         console.log(max);  
//     }

//     function setMin(){
//         for (let measurement in dbData)
//             if (dbData[measurement].value < min) min = dbData[measurement].value;

//         if (props.variables[id].name == "Variável") min = -Infinity;     
//     }
