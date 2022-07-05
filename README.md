# PI - Risk Matrix Creation Interface

Simplified and interactive visualization interface capable of defining complex variables by applying formulas to simpler ones and observing the impact of their own changes and interactions with other variables, through charts and calculated values. Solution explored in the context of the Capstone Project Curricular Unit of L.EIC @ FEUP, proposed by the LIACC department to find a different approach for their already developed prototype of risk calculations for the ERS, accessible to users with few knowledge on complex mathematical formulas from all areas of expertise.

## Preview 

![](https://github.com/mariacrnr/PI/blob/main/docs/preview.gif)

## Instalation and Execution
### Backend
#### Installation
* npm > 8.5.0 , node.js > 16
* mysql

__.env__ file should be created according to your database specifications and should have the following template:

```
DB_HOST = ""
DB_USER = ""
DB_PASS = ""
DB_NAME = ""
DB_TIMEZONE = ""
```

#### Execution
```
npm install
npm run devStart
```

### Frontend
#### Installation
* npm > 8.5.0, node.js > 16
* webpack 

#### Execution

```
npm install
npm start
```
### Dependencies
Nodejs, MySQl, Python, React
